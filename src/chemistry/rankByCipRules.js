/**
 * Ranking the groups on an atom by the CIP rules (Cahn, Ingold and Prelog), which decide
 * which group on each carbon of a C=C counts for E and Z.
 *
 * IUPAC rules (IUPAC 2013 Recommendations, P-92):
 *   - The groups are compared through a "hierarchical digraph": a tree of atoms that starts at
 *     the atom being looked at and branches outwards along every bond, never going back the
 *     way it came.                                                             P-92.1.4.1
 *   - A double bond counts as two single bonds: each of its atoms gets a "duplicate" of the
 *     atom at the other end, an extra copy with nothing beyond it. So -CH=CH2 is seen as
 *     carrying (C), C and H, and -CHO as carrying (O), O and H.               P-92.1.4.2
 *   - In a ring, the tree goes round both ways, and stops at a duplicate of the atom it
 *     started from when it gets back to it.                                    P-92.1.4.3
 *   - Sequence Rule 1a: the group whose first atom has the higher atomic number ranks higher:
 *     Br > Cl > O > N > C > H. If those are the same, the sets of atoms joined to them are
 *     compared, each set from the highest atomic number down, and the first difference
 *     decides: -CH2OH {O,H,H} beats -CH3 {H,H,H}, and -CH2OH beats -CH(CH3)2 {C,C,H}, as
 *     O beats C. If those are the same too, the exploration goes on outwards, one sphere at a
 *     time, the branches that already rank higher first.             P-92.2.1.1.1 to P-92.2.1.1.3
 *     A duplicate atom has the atomic number of the atom it copies, and only "phantom" atoms
 *     (atomic number 0) beyond it.                                               P-92.2.1.2
 * The other Sequence Rules compare isotopes and the configurations of other stereogenic
 * units. The molecules here have no isotopes, and their only other stereogenic units are
 * double bonds, so only Sequence Rule 3 (Z before E, P-92.4.2) could ever be needed, for
 * groups that are the same in every other way.
 */

import {
  AMINO_GROUP,
  CARBONYL_OXYGEN,
  ETHER_OXYGEN_GROUP,
  HYDROXYL_GROUP,
  bondOrderOf,
  countHydrogensOnCarbon,
  linkAtomOf,
  listGroupsOnCarbon,
} from './carbonSkeleton.js';

const ATOMIC_NUMBER = { H: 1, C: 6, N: 7, O: 8, F: 9, Cl: 17, Br: 35, I: 53 };

/** The atom a group joins to its carbon with: O for OH and C=O, N for NH2, and the halogen itself. */
function firstAtomOfGroup(symbol) {
  if (symbol === HYDROXYL_GROUP || symbol === CARBONYL_OXYGEN || symbol === ETHER_OXYGEN_GROUP) return 'O';
  if (symbol === AMINO_GROUP) return 'N';
  return symbol;
}

/** The key of a carbon, a group or the atom in the middle of a bond in the graph of every atom. */
export const carbonKey = (atomId) => `C${atomId}`;
export const groupKey = (atomId, groupIndex) => `G${atomId}/${groupIndex}`;
const linkKey = (bond) => `L${bond.firstAtomId}-${bond.secondAtomId}`;

/**
 * Every atom of the molecule apart from the hydrogens, with what it is bonded to:
 *   Map from key to { element, hydrogenCount, bonds: [{ neighbourKey, bondOrder }] }
 * The carbons are keyed by carbonKey, their groups by groupKey, and the O or NH in the middle
 * of a bond by its own key.
 */
export function buildGraphOfAtoms(skeleton) {
  const atoms = new Map();
  const bondTogether = (firstKey, secondKey, bondOrder) => {
    atoms.get(firstKey).bonds.push({ neighbourKey: secondKey, bondOrder });
    atoms.get(secondKey).bonds.push({ neighbourKey: firstKey, bondOrder });
  };
  for (const carbonAtom of skeleton.carbonAtoms) {
    atoms.set(carbonKey(carbonAtom.atomId), { element: 'C', hydrogenCount: Math.max(0, countHydrogensOnCarbon(skeleton, carbonAtom.atomId)), bonds: [] });
  }
  for (const carbonAtom of skeleton.carbonAtoms) {
    listGroupsOnCarbon(carbonAtom).forEach(({ symbol }, groupIndex) => {
      const key = groupKey(carbonAtom.atomId, groupIndex);
      const hydrogenCount = symbol === HYDROXYL_GROUP ? 1 : symbol === AMINO_GROUP ? 2 : 0;
      atoms.set(key, { element: firstAtomOfGroup(symbol), hydrogenCount, bonds: [] });
      bondTogether(carbonKey(carbonAtom.atomId), key, symbol === CARBONYL_OXYGEN ? 2 : 1);
    });
  }
  for (const bond of skeleton.carbonCarbonBonds) {
    const linkAtom = linkAtomOf(bond);
    if (linkAtom === null) {
      bondTogether(carbonKey(bond.firstAtomId), carbonKey(bond.secondAtomId), bondOrderOf(bond));
      continue;
    }
    const key = linkKey(bond);
    atoms.set(key, { element: linkAtom === 'NH' ? 'N' : 'O', hydrogenCount: linkAtom === 'NH' ? 1 : 0, bonds: [] });
    bondTogether(carbonKey(bond.firstAtomId), key, 1);
    bondTogether(key, carbonKey(bond.secondAtomId), 1);
  }
  return atoms;
}

/**
 * A node of the hierarchical digraph: an atom (by its key), a hydrogen, or a duplicate atom.
 * Its branches are worked out only when they are needed, and then kept.
 */
class DigraphNode {
  constructor(atoms, key, element, isDuplicate, keysOnPathHere, cameFromKey) {
    this.atoms = atoms;
    this.key = key;
    this.element = element;
    this.atomicNumber = ATOMIC_NUMBER[element];
    this.isDuplicate = isDuplicate;
    this.keysOnPathHere = keysOnPathHere;
    this.cameFromKey = cameFromKey;
    this.branchesInRankOrder = null;
  }

  /** The atoms joined to this one, apart from the one before it, highest rank first. */
  listBranches() {
    if (this.branchesInRankOrder !== null) return this.branchesInRankOrder;
    const branches = [];
    if (!this.isDuplicate && this.key !== null) {
      const atom = this.atoms.get(this.key);
      const keysOnPath = new Set(this.keysOnPathHere).add(this.key);
      for (let count = 0; count < atom.hydrogenCount; count++) branches.push(new DigraphNode(this.atoms, null, 'H', false, keysOnPath, this.key));
      let skippedWayBack = false;
      for (const { neighbourKey, bondOrder } of atom.bonds) {
        const neighbour = this.atoms.get(neighbourKey);
        // The way back is not explored again, but the extra bonds of a double bond back to it
        // still give duplicates of it.
        const isWayBack = neighbourKey === this.cameFromKey && !skippedWayBack;
        if (isWayBack) skippedWayBack = true;
        else {
          // Reaching an atom already on the path closes a ring: it is a duplicate, and the end (P-92.1.4.3).
          const closesRing = keysOnPath.has(neighbourKey);
          branches.push(new DigraphNode(this.atoms, neighbourKey, neighbour.element, closesRing, keysOnPath, this.key));
        }
        for (let extra = 1; extra < bondOrder; extra++) branches.push(new DigraphNode(this.atoms, neighbourKey, neighbour.element, true, keysOnPath, this.key));
      }
    }
    this.branchesInRankOrder = branches.sort((first, second) => compareDigraphNodes(second, first));
    return this.branchesInRankOrder;
  }
}

/** Compares two sets of atomic numbers, each from the highest down: the first difference decides, and a missing atom counts as a phantom, 0. */
function compareSetsOfAtoms(firstNodes, secondNodes) {
  for (let index = 0; index < Math.max(firstNodes.length, secondNodes.length); index++) {
    const difference = (firstNodes[index]?.atomicNumber ?? 0) - (secondNodes[index]?.atomicNumber ?? 0);
    if (difference !== 0) return difference;
  }
  return 0;
}

/**
 * Sequence Rule 1a, sphere by sphere (P-92.2.1.1): where the branches from two nodes first
 * differ, or null when they are the same all the way out.
 *   { difference, sphere, firstAtoms, secondAtoms }
 * difference: positive when the first ranks higher. sphere: 0 when the nodes' own atoms differ
 * (firstAtoms and secondAtoms are then just those nodes), or how many bonds further out the
 * sets of atoms that differ are, with firstAtoms and secondAtoms those sets, highest first.
 */
function findFirstDifference(firstNode, secondNode) {
  const firstAtoms = firstNode.atomicNumber - secondNode.atomicNumber;
  if (firstAtoms !== 0) return { difference: firstAtoms, sphere: 0, firstAtoms: [firstNode], secondAtoms: [secondNode] };
  let firstSphere = [firstNode];
  let secondSphere = [secondNode];
  for (let sphere = 1; firstSphere.length > 0 || secondSphere.length > 0; sphere++) {
    // The sets of atoms in the next sphere, each from an atom of this one, taken in the order those atoms rank.
    for (let index = 0; index < Math.max(firstSphere.length, secondSphere.length); index++) {
      const firstSet = firstSphere[index]?.listBranches() ?? [];
      const secondSet = secondSphere[index]?.listBranches() ?? [];
      const difference = compareSetsOfAtoms(firstSet, secondSet);
      if (difference !== 0) return { difference, sphere, firstAtoms: firstSet, secondAtoms: secondSet };
    }
    firstSphere = firstSphere.flatMap((node) => node.listBranches());
    secondSphere = secondSphere.flatMap((node) => node.listBranches());
  }
  return null;
}

/** Sequence Rule 1a: positive when the branch from the first node ranks higher, negative when the second does, 0 when they are the same all the way out. */
function compareDigraphNodes(firstNode, secondNode) {
  return findFirstDifference(firstNode, secondNode)?.difference ?? 0;
}

/**
 * The groups on an atom (given by its key in the graph from buildGraphOfAtoms), each as the
 * first node of its branch of the digraph: the atoms joined to it, and its hydrogens.
 *   [{ neighbourKey: 'C3' | 'G2/0' | 'L2-3' | null (for a hydrogen), node }, ...]
 */
export function listBranchesOfAtom(atoms, centreKey) {
  const centre = atoms.get(centreKey);
  const keysOnPath = new Set([centreKey]);
  const branches = centre.bonds.map(({ neighbourKey }) => ({
    neighbourKey,
    node: new DigraphNode(atoms, neighbourKey, atoms.get(neighbourKey).element, false, keysOnPath, centreKey),
  }));
  for (let count = 0; count < centre.hydrogenCount; count++) {
    branches.push({ neighbourKey: null, node: new DigraphNode(atoms, null, 'H', false, keysOnPath, centreKey) });
  }
  return branches;
}

/**
 * Compares two groups on the same atom by Sequence Rule 1a: positive when the first ranks
 * higher, negative when the second does, 0 when they can't be told apart.
 * firstBranch, secondBranch: from listBranchesOfAtom.
 */
export function compareBranchesByCipRules(firstBranch, secondBranch) {
  return compareDigraphNodes(firstBranch.node, secondBranch.node);
}

/**
 * Why one of two groups on the same atom ranks higher by Sequence Rule 1a, or null when they
 * can't be told apart:
 *   { difference, sphere, firstAtoms, secondAtoms }
 * difference: positive when the first group ranks higher. sphere: 0 when their first atoms
 * differ, or else how many bonds beyond their first atoms the sets of atoms that decide it are.
 * firstAtoms, secondAtoms: those atoms, highest first, each { element, isDuplicate }; a set
 * shorter than the other is made up with phantom atoms (atomic number 0), which are
 * not listed.
 */
export function explainBranchComparison(firstBranch, secondBranch) {
  const found = findFirstDifference(firstBranch.node, secondBranch.node);
  if (found === null) return null;
  const describeAtoms = (nodes) => nodes.map(({ element, isDuplicate }) => ({ element, isDuplicate }));
  return { ...found, firstAtoms: describeAtoms(found.firstAtoms), secondAtoms: describeAtoms(found.secondAtoms) };
}
