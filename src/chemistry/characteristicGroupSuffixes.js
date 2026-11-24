/**
 * The suffixes for characteristic groups (P-33, P-41): the endings that say which group a
 * compound is named after, such as the "ol" of ethanol or the "oic acid" of ethanoic acid.
 *
 * Some groups have two suffixes (P-33.2, P-65.1.2.1, P-66.6.1.1):
 *   - with the group's carbon part of the parent chain, written (C) in the Blue Book: –(C)OOH
 *     is "oic acid" (butanoic acid), –(C)HO "al" (butanal), –(C)O-NH2 "amide" (butanamide), and
 *     the anion or ester –(C)OO– "oate" (methyl butanoate);
 *   - with the group's carbon not part of the parent, as on a ring: "carboxylic acid"
 *     (cyclohexanecarboxylic acid), "carbaldehyde", "carboxamide" and "carboxylate".
 * The others have no carbon of their own: "one" for =O (P-64.2), "ol" for –OH (P-63.1.2), and
 * "amine" for –NH2 (P-62.2.1.1).
 *
 * Only the suffixes of the groups this library can name are here; the many others (thiol,
 * nitrile, sulfonic acid, imine ...) need atoms the molecule model can't hold yet.
 */

import { countForMultiplyingPrefixOfSuffix, writeMultipliedSuffix } from './alkaneNamingVocabulary.js';
import { listBondsOfCarbon, listGroupsOnCarbon, findCarbonAtomById, otherAtomIdOfBond, describeCarbonylCarbon, linkAtomOf } from './carbonSkeleton.js';

/** The characteristic groups that can be cited as a suffix, in order of seniority (P-41). */
export const CHARACTERISTIC_GROUP_SUFFIXES = [
  { groupKind: 'carboxylicAcid', carbonIsInParent: true, suffix: 'oic acid' },
  { groupKind: 'carboxylicAcid', carbonIsInParent: false, suffix: 'carboxylic acid' },
  { groupKind: 'ester', carbonIsInParent: true, suffix: 'oate' },
  { groupKind: 'ester', carbonIsInParent: false, suffix: 'carboxylate' },
  { groupKind: 'amide', carbonIsInParent: true, suffix: 'amide' },
  { groupKind: 'amide', carbonIsInParent: false, suffix: 'carboxamide' },
  { groupKind: 'aldehyde', carbonIsInParent: true, suffix: 'al' },
  { groupKind: 'aldehyde', carbonIsInParent: false, suffix: 'carbaldehyde' },
  { groupKind: 'ketone', carbonIsInParent: null, suffix: 'one' },
  { groupKind: 'alcohol', carbonIsInParent: null, suffix: 'ol' },
  { groupKind: 'amine', carbonIsInParent: null, suffix: 'amine' },
];

/** The suffix for a group, by its kind: suffixFor('carboxylicAcid', true) -> "oic acid". */
function findEntry(groupKind, carbonIsInParent) {
  return CHARACTERISTIC_GROUP_SUFFIXES.find((entry) => entry.groupKind === groupKind && (entry.carbonIsInParent === null || entry.carbonIsInParent === carbonIsInParent)) ?? null;
}

/**
 * The suffix for count groups of a kind, with its multiplying prefix (P-16.7.1):
 *   ('alcohol', { count: 2 }) -> "diol", ('carboxylicAcid', { carbonIsInParent: false }) -> "carboxylic acid",
 *   ('ketone', { count: 4 }) -> "tetrone".
 * null for a kind of group that has no suffix here.
 */
export function suffixForCharacteristicGroup(groupKind, { carbonIsInParent = true, count = 1 } = {}) {
  const entry = findEntry(groupKind, carbonIsInParent);
  if (!entry) return null;
  return count === 1 ? entry.suffix : writeMultipliedSuffix(count, entry.suffix);
}

/**
 * Reads a suffix written on its own, with or without a hyphen in front and a multiplying prefix:
 * "-ol", "diol", "carboxylic acid", "tetrone". Returns { groupKind, carbonIsInParent, count } or null.
 */
export function readCharacteristicGroupSuffix(suffixText) {
  const text = suffixText.trim().toLowerCase().replace(/^-/, '');
  // The longest suffix first, so "carboxylic acid" isn't read as "...ic acid", nor "amide" as "...amine".
  const entries = [...CHARACTERISTIC_GROUP_SUFFIXES].sort((first, second) => second.suffix.length - first.suffix.length);
  for (const entry of entries) {
    if (!text.endsWith(entry.suffix)) continue;
    const prefix = text.slice(0, text.length - entry.suffix.length);
    const count = prefix === '' ? 1 : countForMultiplyingPrefixOfSuffix(prefix, entry.suffix);
    if (count === undefined || count < 1) continue;
    return { groupKind: entry.groupKind, carbonIsInParent: entry.carbonIsInParent ?? true, count };
  }
  return null;
}

/**
 * The kind of characteristic group a substituent group is (see substituentGroups.js), when it is
 * one that can be a suffix: –OH 'alcohol', =O 'ketone', –NH2 'amine', –CHO 'aldehyde', –COOH
 * 'carboxylicAcid', –CONH2 'amide'. A group with a carbon (–COOH ...) is read with that carbon
 * outside the parent, as its formula shows it as part of the group. null for any other group.
 */
export function describeCharacteristicGroup({ carbonSkeleton, standInAtomIds }) {
  if (standInAtomIds.length !== 1) return null;
  const standIn = findCarbonAtomById(carbonSkeleton, standInAtomIds[0]);
  const groups = listGroupsOnCarbon(standIn);
  const bonds = listBondsOfCarbon(carbonSkeleton, standIn.atomId);
  if (groups.length === 1 && bonds.length === 0) {
    const kindBySymbol = { OH: 'alcohol', O: 'ketone', NH2: 'amine' };
    const groupKind = kindBySymbol[groups[0].symbol];
    return groupKind ? { groupKind, carbonIsInParent: null } : null;
  }
  if (groups.length > 0 || bonds.length !== 1 || linkAtomOf(bonds[0]) || carbonSkeleton.carbonAtoms.length !== 2) return null;
  const groupCarbon = findCarbonAtomById(carbonSkeleton, otherAtomIdOfBond(bonds[0], standIn.atomId));
  const kindByCarbonyl = { carboxylicAcid: 'carboxylicAcid', aldehyde: 'aldehyde', amide: 'amide' };
  const groupKind = kindByCarbonyl[describeCarbonylCarbon(carbonSkeleton, groupCarbon)];
  return groupKind ? { groupKind, carbonIsInParent: false } : null;
}
