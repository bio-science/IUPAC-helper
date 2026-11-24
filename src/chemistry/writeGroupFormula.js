/**
 * A group on an atom written as a condensed structural formula, as on an A-level paper:
 * CH3, CH2CH3, CH(CH3)2, CH=CH2, CH2OH, CHO, COOH, COCH3, CH2OCH3, CCl3.
 *
 * The rules of writing it:
 *   - each atom is written with its hydrogens after it: CH3, NH2, OH
 *   - a C=O oxygen is written straight after its carbon: CHO, COOH, COCH3
 *   - halogens come next, also without brackets: CH2Cl, CCl3, CHClCH3
 *   - the group that carries on furthest is written last, without brackets, and the others go
 *     before it in brackets, the same ones together with a count: CH(CH3)2, CH(OH)CH3
 *   - a double or triple bond to the next carbon is shown: CH=CH2, C≡CH
 *   - a ring, with everything beyond it, is written as its molecular formula, as C6H5 often is
 *     for phenyl: C6H11 for cyclohexyl, CH=CHC6H11
 * A group that leads round a ring back to the atom it is on has no such formula, and gives null.
 */

import { HALOGEN_SYMBOLS } from './carbonSkeleton.js';

const BOND_SIGNS = { 1: '', 2: '=', 3: '≡' };

/** The atoms after an atom in the group, apart from the one before it: [{ key, bondOrder }]. */
function listNextAtoms(atoms, key, cameFromKey) {
  let skippedWayBack = false;
  return atoms.get(key).bonds.filter(({ neighbourKey }) => {
    if (neighbourKey !== cameFromKey || skippedWayBack) return true;
    skippedWayBack = true;
    return false;
  });
}

/** The atoms reached from the atom with this key, without going through the one before it. */
function listAtomsBeyond(atoms, key, cameFromKey) {
  const reached = new Set([key]);
  const queue = [key];
  while (queue.length > 0) {
    for (const { neighbourKey } of atoms.get(queue.shift()).bonds) {
      if (neighbourKey === cameFromKey || reached.has(neighbourKey)) continue;
      reached.add(neighbourKey);
      queue.push(neighbourKey);
    }
  }
  return reached;
}

/** True when the atom with this key is in a ring among the atoms in keys. */
function isInRing(atoms, key, keys) {
  const neighbours = atoms.get(key).bonds.map(({ neighbourKey }) => neighbourKey).filter((neighbourKey) => keys.has(neighbourKey));
  if (neighbours.length < 2) return false;
  const reached = new Set([key, neighbours[0]]);
  const queue = [neighbours[0]];
  while (queue.length > 0) {
    for (const { neighbourKey } of atoms.get(queue.shift()).bonds) {
      if (!keys.has(neighbourKey) || reached.has(neighbourKey)) continue;
      if (neighbours.includes(neighbourKey)) return true;
      reached.add(neighbourKey);
      queue.push(neighbourKey);
    }
  }
  return false;
}

/** The molecular formula of some atoms: carbon, then hydrogen, then the others in alphabetical order (Hill order). */
function writeMolecularFormula(atoms, keys) {
  const counts = new Map([['C', 0], ['H', 0]]);
  for (const key of keys) {
    const { element, hydrogenCount } = atoms.get(key);
    counts.set(element, (counts.get(element) ?? 0) + 1);
    counts.set('H', counts.get('H') + hydrogenCount);
  }
  const elements = ['C', 'H', ...[...counts.keys()].filter((element) => element !== 'C' && element !== 'H').sort()];
  return elements.filter((element) => counts.get(element) > 0).map((element) => element + (counts.get(element) > 1 ? counts.get(element) : '')).join('');
}

/**
 * The formula of the part of the group from the atom with this key outwards, with how many atoms
 * it has, or null if it leads round a ring back to the atom the group is on.
 */
function writeFrom(atoms, key, cameFromKey, centreKey) {
  const beyond = listAtomsBeyond(atoms, key, cameFromKey);
  if (beyond.has(centreKey)) return null;
  if (isInRing(atoms, key, beyond)) return { text: writeMolecularFormula(atoms, beyond), atomCount: beyond.size };
  const atom = atoms.get(key);
  const hydrogens = atom.hydrogenCount === 0 ? '' : atom.hydrogenCount === 1 ? 'H' : `H${atom.hydrogenCount}`;
  let carbonylOxygens = '';
  const halogenCounts = new Map();
  const others = [];
  for (const { neighbourKey, bondOrder } of listNextAtoms(atoms, key, cameFromKey)) {
    const next = atoms.get(neighbourKey);
    const isEndAtom = listNextAtoms(atoms, neighbourKey, key).length === 0;
    if (next.element === 'O' && bondOrder === 2 && isEndAtom) carbonylOxygens += 'O';
    else if (HALOGEN_SYMBOLS.includes(next.element)) halogenCounts.set(next.element, (halogenCounts.get(next.element) ?? 0) + 1);
    else {
      const part = writeFrom(atoms, neighbourKey, key, centreKey);
      if (part === null) return null;
      others.push({ text: BOND_SIGNS[bondOrder] + part.text, atomCount: part.atomCount, isCarbon: next.element === 'C' });
    }
  }
  // The part that carries on furthest goes last, without brackets, a carbon rather than an OH: CH(OH)CH3.
  others.sort((first, second) => first.atomCount - second.atomCount || Number(first.isCarbon) - Number(second.isCarbon));
  // When every part is the same, they all go in brackets: CH(CH3)2, C(CH3)3.
  const last = others.length > 1 && others.every(({ text }) => text === others[0].text) ? null : others.pop();
  const bracketed = [];
  for (const { text } of others) {
    const same = bracketed.find((entry) => entry.text === text);
    if (same) same.count++;
    else bracketed.push({ text, count: 1 });
  }
  const halogens = [...halogenCounts].map(([element, count]) => element + (count > 1 ? count : '')).join('');
  const halogenCount = [...halogenCounts.values()].reduce((sum, count) => sum + count, 0);
  const brackets = bracketed.map(({ text, count }) => `(${text})${count > 1 ? count : ''}`).join('');
  const text = atom.element + hydrogens + carbonylOxygens + halogens + brackets + (last?.text ?? '');
  const atomCount = 1 + carbonylOxygens.length + halogenCount + others.reduce((sum, part) => sum + part.atomCount, 0) + (last?.atomCount ?? 0);
  return { text, atomCount };
}

/**
 * The condensed formula of the group joined to the atom with key centreKey through the atom with
 * key firstKey (keys and graph as in buildGraphOfAtoms, rankByCipRules.js), or null when it
 * leads round a ring back to that atom. firstKey null: a hydrogen, "H".
 */
export function writeGroupFormula(atoms, centreKey, firstKey) {
  if (firstKey === null) return 'H';
  return writeFrom(atoms, firstKey, centreKey, centreKey)?.text ?? null;
}
