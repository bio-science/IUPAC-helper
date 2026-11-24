/**
 * A "fingerprint" (canonical code) for a molecule: a piece of text that is the same for any
 * two drawings of the same molecule, however the atoms happen to be numbered or placed, and
 * different for any two different molecules. Used to spot duplicates when listing isomers,
 * and to see whether moving a substituent gives a different molecule (see
 * decideWhetherLocantsAreNeeded.js).
 */

import { countRings, isDoubleBond, isLinkBond, isTripleBond, linkAtomOf, listGroupsOnCarbon, listRingBonds, listSeparateRings } from './carbonSkeleton.js';

/**
 * Marks put on the two carbons of a ring bond that has been cut (see below): one for a
 * single bond, one for a double bond and one for a triple bond. None is used for anything else.
 */
const CUT_SINGLE_BOND_MARK = '~';
const CUT_DOUBLE_BOND_MARK = '≈';
const CUT_TRIPLE_BOND_MARK = '≋';

/**
 * The fingerprint of the molecule as seen from one atom: brackets around the carbon's
 * groups (halogens and OH) and the fingerprints of the atoms further away, sorted so that
 * their order doesn't matter. An atom reached through a double bond has "=" in front of it,
 * one reached through a triple bond "#",
 * and one reached through the O or NH in the middle of a bond has "O-" or "NH-".
 * Methane seen from its carbon is "()", propane seen from its middle carbon is "(()())",
 * propene seen from its middle carbon is "(()=())", chloromethane is "(Cl)" and methanol
 * is "(OH)".
 */
function fingerprintSeenFromAtom(neighboursByAtomId, groupTextByAtomId, atomId, cameFromAtomId) {
  const fingerprintsOfAtomsFurtherAway = neighboursByAtomId
    .get(atomId)
    .filter(({ neighbourId }) => neighbourId !== cameFromAtomId)
    .map(({ neighbourId, bondText }) => bondText + fingerprintSeenFromAtom(neighboursByAtomId, groupTextByAtomId, neighbourId, atomId))
    .sort();
  return '(' + groupTextByAtomId.get(atomId) + fingerprintsOfAtomsFurtherAway.join('') + ')';
}

/** Each carbon's neighbours, and the text for the bond to each ("=" for a double bond, "#" for a triple bond), worked out once. */
function listNeighboursOfEveryAtom(carbonAtoms, carbonCarbonBonds) {
  const neighboursByAtomId = new Map(carbonAtoms.map(({ atomId }) => [atomId, []]));
  for (const bond of carbonCarbonBonds) {
    const bondText = isDoubleBond(bond) ? '=' : isTripleBond(bond) ? '#' : isLinkBond(bond) ? `${linkAtomOf(bond)}-` : '';
    neighboursByAtomId.get(bond.firstAtomId).push({ neighbourId: bond.secondAtomId, bondText });
    neighboursByAtomId.get(bond.secondAtomId).push({ neighbourId: bond.firstAtomId, bondText });
  }
  return neighboursByAtomId;
}

/**
 * The middle of the molecule: the one or two carbons left after stripping off the end
 * carbons again and again. Every drawing of the same molecule has the same middle.
 * (Assumes one molecule without rings.)
 */
function findMiddleAtomIds(neighboursByAtomId) {
  const remainingNeighbourCount = new Map([...neighboursByAtomId].map(([atomId, neighbours]) => [atomId, neighbours.length]));
  let outerAtomIds = [...remainingNeighbourCount].filter(([, count]) => count <= 1).map(([atomId]) => atomId);
  let remainingAtomCount = remainingNeighbourCount.size;
  while (remainingAtomCount > 2) {
    remainingAtomCount -= outerAtomIds.length;
    const nextOuterAtomIds = [];
    for (const atomId of outerAtomIds) {
      for (const { neighbourId } of neighboursByAtomId.get(atomId)) {
        const count = remainingNeighbourCount.get(neighbourId) - 1;
        remainingNeighbourCount.set(neighbourId, count);
        if (count === 1) nextOuterAtomIds.push(neighbourId);
      }
    }
    outerAtomIds = nextOuterAtomIds;
  }
  return outerAtomIds;
}

/** The text for a carbon's groups, in alphabetical order: "ClOH" for a carbon with Cl and OH. */
function groupTextOf(carbonAtom) {
  return listGroupsOnCarbon(carbonAtom)
    .map(({ symbol }) => symbol)
    .sort()
    .join('');
}

/**
 * The fingerprint of a molecule without rings: we look at the molecule from its middle
 * carbon (or each of its two middle carbons) and keep the fingerprint that comes first
 * alphabetically. extraTextByAtomId adds a mark to some carbons' groups.
 */
function fingerprintOfTree(carbonAtoms, carbonCarbonBonds, extraTextByAtomId = new Map()) {
  const neighboursByAtomId = listNeighboursOfEveryAtom(carbonAtoms, carbonCarbonBonds);
  const groupTextByAtomId = new Map(carbonAtoms.map((carbonAtom) => [carbonAtom.atomId, groupTextOf(carbonAtom) + (extraTextByAtomId.get(carbonAtom.atomId) ?? '')]));
  const fingerprintFromEachMiddleAtom = findMiddleAtomIds(neighboursByAtomId).map((atomId) =>
    fingerprintSeenFromAtom(neighboursByAtomId, groupTextByAtomId, atomId, null),
  );
  return fingerprintFromEachMiddleAtom.sort()[0];
}

/**
 * The fingerprint of a molecule whose rings are all separate (no carbon in two rings), seen
 * from one atom, as fingerprintSeenFromAtom but going into rings too. A ring is entered at one
 * carbon and read round from it, carbon by carbon, each with its groups, the bond to the next
 * carbon, and the fingerprints of what hangs off it, then the bond back to the first. It can
 * be read either way round, so the way that comes first alphabetically is kept. "[" and "]"
 * go round a ring, so it can't be mistaken for a chain.
 */
function fingerprintWithRingsSeenFromAtom(molecule, atomId, cameFromAtomId) {
  const { neighboursByAtomId, groupTextByAtomId, ringByAtomId } = molecule;
  const ring = ringByAtomId.get(atomId);
  const isEnteringRing = ring && !(cameFromAtomId !== null && ringByAtomId.get(cameFromAtomId) === ring);
  if (!isEnteringRing) {
    const further = neighboursByAtomId
      .get(atomId)
      .filter(({ neighbourId }) => neighbourId !== cameFromAtomId)
      .map(({ neighbourId, bondText }) => bondText + fingerprintWithRingsSeenFromAtom(molecule, neighbourId, atomId))
      .sort();
    return '(' + groupTextByAtomId.get(atomId) + further.join('') + ')';
  }
  const ringSet = new Set(ring);
  const bondTextBetween = (first, second) => neighboursByAtomId.get(first).find(({ neighbourId }) => neighbourId === second).bondText;
  const textOfRingCarbon = (ringAtomId) => {
    const hanging = neighboursByAtomId
      .get(ringAtomId)
      .filter(({ neighbourId }) => !ringSet.has(neighbourId) && neighbourId !== cameFromAtomId)
      .map(({ neighbourId, bondText }) => bondText + fingerprintWithRingsSeenFromAtom(molecule, neighbourId, ringAtomId))
      .sort();
    return '(' + groupTextByAtomId.get(ringAtomId) + hanging.join('') + ')';
  };
  const textByRingAtomId = new Map(ring.map((ringAtomId) => [ringAtomId, textOfRingCarbon(ringAtomId)]));
  const startIndex = ring.indexOf(atomId);
  const readRound = (step) => {
    const order = ring.map((_, index) => ring[(startIndex + step * index + ring.length * 2) % ring.length]);
    return order.map((ringAtomId, index) => textByRingAtomId.get(ringAtomId) + bondTextBetween(ringAtomId, order[(index + 1) % order.length]) + '|').join('');
  };
  return '[' + [readRound(1), readRound(-1)].sort()[0] + ']';
}

/**
 * The fingerprint of a molecule whose rings are all separate: seen from each ring carbon in
 * turn, keeping the one that comes first alphabetically. Every drawing of the same molecule
 * has the same ring carbons to look from, so this gives the same text every time.
 */
function fingerprintOfSeparateRings(carbonAtoms, carbonCarbonBonds, rings, extraTextByAtomId = new Map()) {
  const molecule = {
    neighboursByAtomId: listNeighboursOfEveryAtom(carbonAtoms, carbonCarbonBonds),
    groupTextByAtomId: new Map(carbonAtoms.map((carbonAtom) => [carbonAtom.atomId, groupTextOf(carbonAtom) + (extraTextByAtomId.get(carbonAtom.atomId) ?? '')])),
    ringByAtomId: new Map(rings.flatMap((ring) => ring.map((atomId) => [atomId, ring]))),
  };
  return rings
    .flat()
    .map((atomId) => fingerprintWithRingsSeenFromAtom(molecule, atomId, null))
    .sort()[0];
}

/**
 * The same text for every drawing of the same molecule.
 *
 * A molecule without rings is a tree, seen from its middle (fingerprintOfTree). One whose rings
 * are all separate, however many there are, is seen from each ring carbon in turn
 * (fingerprintOfSeparateRings).
 *
 * Rings that share carbons (fused, bridged or spiro systems, not named yet) are first cut
 * open until the rings left are separate (fingerprintByCuttingSharedRings).
 */
export function canonicalFingerprintOfSkeleton(skeleton) {
  const { carbonAtoms, carbonCarbonBonds } = skeleton;
  if (countRings(skeleton) <= 0) return fingerprintOfTree(carbonAtoms, carbonCarbonBonds);
  const { rings, hasRingsSharingCarbons } = listSeparateRings(skeleton);
  if (!hasRingsSharingCarbons) return fingerprintOfSeparateRings(carbonAtoms, carbonCarbonBonds, rings);

  return fingerprintByCuttingSharedRings(carbonAtoms, carbonCarbonBonds, new Map(), 1);
}

/**
 * For rings that share carbons: cut a ring bond, mark its two carbons with the bond's kind and
 * the number of the cut (so each cut can only be put back one way), and go on until the rings
 * left are separate. Every ring bond is tried at each cut, keeping the text that comes first
 * alphabetically. That is many tries for a large ring system, but these aren't named yet.
 */
function fingerprintByCuttingSharedRings(carbonAtoms, carbonCarbonBonds, extraTextByAtomId, cutNumber) {
  const skeleton = { carbonAtoms, carbonCarbonBonds };
  const { rings, hasRingsSharingCarbons } = listSeparateRings(skeleton);
  if (!hasRingsSharingCarbons) {
    return rings.length === 0 ? fingerprintOfTree(carbonAtoms, carbonCarbonBonds, extraTextByAtomId) : fingerprintOfSeparateRings(carbonAtoms, carbonCarbonBonds, rings, extraTextByAtomId);
  }
  let firstFingerprint = null;
  for (const bond of listRingBonds(skeleton)) {
    const mark = (isDoubleBond(bond) ? CUT_DOUBLE_BOND_MARK : isTripleBond(bond) ? CUT_TRIPLE_BOND_MARK : CUT_SINGLE_BOND_MARK) + (linkAtomOf(bond) ?? '') + cutNumber;
    const marked = new Map(extraTextByAtomId);
    for (const atomId of [bond.firstAtomId, bond.secondAtomId]) marked.set(atomId, (marked.get(atomId) ?? '') + mark);
    const fingerprint = fingerprintByCuttingSharedRings(
      carbonAtoms,
      carbonCarbonBonds.filter((otherBond) => otherBond !== bond),
      marked,
      cutNumber + 1,
    );
    if (firstFingerprint === null || fingerprint < firstFingerprint) firstFingerprint = fingerprint;
  }
  return firstFingerprint;
}
