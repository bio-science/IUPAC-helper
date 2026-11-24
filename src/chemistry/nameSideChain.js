/**
 * Naming an unbranched side chain that has groups on it, such as -CH2Cl (chloromethyl) or
 * -CH2-CH2-OH (2-hydroxyethyl). The side chain is named like any other (methyl, ethyl,
 * prop-2-en-1-yl, methylidene ...), with its own prefixes in front, and the whole name is then
 * one prefix of the main chain, a "substituted substituent" (IUPAC 2013 Recommendations):
 *
 *   - The carbon joined to the main chain is carbon 1 of the side chain, and its other carbons
 *     are numbered from there (P-29.2): 1-hydroxyethyl, 2-hydroxyethyl, 3-chloroprop-2-en-1-yl.
 *   - Every group on the side chain is a prefix, as only the main chain has the suffix (P-41):
 *     fluoro, chloro, bromo, iodo, hydroxy, amino, methylamino, methoxy ..., and oxo for the O
 *     of a ketone, or of a CHO group at the end of the side chain (P-66.6.1.3): 2-oxopropyl,
 *     2-oxoethyl, not formylmethyl.
 *   - A COOH group at the end of the side chain is the prefix carboxy, and its carbon is not part
 *     of the side chain's own name (P-65.1.2.2.3): carboxymethyl (-CH2-COOH), 2-carboxyethyl.
 *   - A CHO or COOH group that is the whole side chain is the prefix formyl or carboxy
 *     (P-66.6.1.3, P-65.1.2.2.3): 3-formylpentanoic acid. A CONH2 group is carbamoyl
 *     (P-66.1.1.4.1.1 (2)), but at the end of a longer side chain amino and oxo (2-amino-2-oxoethyl).
 *     H2N-CO-CO- is oxamoyl (P-65.5.1, P-66.1.1.4.1.2 (2)).
 *   - When the C=O is on carbon 1, the side chain is an acyl group, named from its acid with
 *     "oic acid" changed to "oyl" (P-65.1.7.3.1): propanoyl, prop-2-enoyl, 3-chloropropanoyl; the
 *     two-carbon one is acetyl, the preferred prefix (P-65.1.7.2.1), as in 5-acetylnonane-4,6-dione,
 *     and chloroacetyl. HOOC-CO- is oxalo (P-65.1.7.2.1, P-65.1.2.2.3).
 *   - The side chain's prefixes are written like those of a main chain (P-14.5, P-14.2.1):
 *     2-bromo-1-fluoropropyl. Their locants are left out when there is only one carbon they can
 *     be on: chloromethyl, trifluoromethyl, chloroacetyl (P-14.3.4.2, P-14.3.4.6), and then the
 *     second and later simple prefixes go in brackets: bromo(chloro)methyl (P-16.5.1.3). They are
 *     also left out when every hydrogen of the side chain is swapped for the same group:
 *     pentafluoroethyl (P-14.3.4.5). Otherwise every locant is written: 2,2,2-trifluoroethyl.
 *   - In the main chain's name, the whole side chain is in brackets, and several of them take
 *     bis, tris ... (P-16.5.1.2, P-16.3.6): 1-bromo-5-(bromomethyl)-1,6-dichlorohexane,
 *     bis(2-chloroethyl). It is put in alphanumerical order by its whole name (P-14.5.2):
 *     (chloromethyl) comes after chloro, and (dichloromethyl) under d. (See
 *     writeMultipliedSubstituent and isCompoundPrefix in alkaneNamingVocabulary.js.)
 *
 * Not covered here: an acyl group with a COOH at its far end, such as -CO-CH2-COOH, as the
 * acid it comes from (propanedioic acid) can't have carboxy as a prefix (P-15.1.8.2.1.1).
 */

import {
  AMINO_GROUP,
  CARBONYL_OXYGEN,
  ETHER_OXYGEN_GROUP,
  HYDROXYL_GROUP,
  countHydrogensOnCarbon,
  describeCarbonylCarbon,
  findCarbonAtomById,
  listGroupsOnCarbon,
} from './carbonSkeleton.js';
import {
  AMINO_PREFIX,
  CARBAMOYL_PREFIX,
  CARBOXY_PREFIX,
  FORMYL_PREFIX,
  HYDROXY_PREFIX,
  OXALO_PREFIX,
  OXAMOYL_PREFIX,
  OXO_PREFIX,
  PREFIX_BY_HALOGEN,
  acylSubstituentName,
  alkoxyPrefix,
  alkylaminoPrefix,
  unbranchedSubstituentName,
  writeSideChainPrefixes,
} from './alkaneNamingVocabulary.js';
import { message } from '../languages/translate.js';

/** The prefix for a group on a side chain carbon, other than the O of a C=O. */
export function prefixForGroupOnSideChain({ symbol, linkedGroupName }) {
  if (symbol === HYDROXYL_GROUP) return HYDROXY_PREFIX;
  if (symbol === AMINO_GROUP) return linkedGroupName === undefined ? AMINO_PREFIX : alkylaminoPrefix(linkedGroupName);
  if (symbol === ETHER_OXYGEN_GROUP) return alkoxyPrefix(linkedGroupName);
  return PREFIX_BY_HALOGEN[symbol];
}

/**
 * Names an unbranched side chain with groups on it.
 *   orderedAtomIds: its carbons in order, carbon 1 (the one joined to the main chain) first.
 *   doubleBondLocants: the double bonds along it, numbered from carbon 1.
 *   tripleBondLocants: the same for its triple bonds (ethynyl, prop-2-yn-1-yl).
 *   isJoinedByDoubleBond: true when carbon 1 is joined to the main chain by a double bond.
 * Returns
 *   {
 *     substituentName: '2-bromo-1-hydroxyethyl',
 *     sideChain: {
 *       kind: 'substituted',          // or 'acyl' (propanoyl ...), 'formyl', 'carboxy', 'oxalo'
 *       parentName: 'ethyl',          // the side chain's own name, without its prefixes
 *       prefixes: [{ locant: 2, substituentName: 'bromo' }, { locant: 1, substituentName: 'hydroxy' }],
 *       locantsLeftOut: false,
 *     },
 *   }
 * or { reasonNotNameable } for a side chain that can't be named yet.
 */
export function nameSideChain(skeleton, orderedAtomIds, doubleBondLocants, isJoinedByDoubleBond, tripleBondLocants = []) {
  const carbonCount = orderedAtomIds.length;
  const carbonAtoms = orderedAtomIds.map((atomId) => findCarbonAtomById(skeleton, atomId));
  const kindOfCarbonyl = carbonAtoms.map((carbonAtom) => describeCarbonylCarbon(skeleton, carbonAtom));
  const endsInCarboxyl = kindOfCarbonyl[carbonCount - 1] === 'carboxylicAcid';
  const isAcyl = carbonCount >= 2 && kindOfCarbonyl[0] !== null;

  if (carbonCount === 1 && !isJoinedByDoubleBond) {
    if (endsInCarboxyl) return wholeGroup('carboxy', CARBOXY_PREFIX);
    if (kindOfCarbonyl[0] === 'aldehyde') return wholeGroup('formyl', FORMYL_PREFIX);
    if (kindOfCarbonyl[0] === 'amide' && listGroupsOnCarbon(carbonAtoms[0]).length === 2) return wholeGroup('carbamoyl', CARBAMOYL_PREFIX);
  }
  if (isAcyl && carbonCount === 2 && kindOfCarbonyl[1] === 'amide' && listGroupsOnCarbon(carbonAtoms[1]).length === 2) return wholeGroup('oxamoyl', OXAMOYL_PREFIX);
  if (isAcyl && endsInCarboxyl) {
    if (carbonCount === 2) return wholeGroup('oxalo', OXALO_PREFIX);
    return { reasonNotNameable: message('naming.acylGroupWithCarboxyNotCovered') };
  }

  // The carbons named by the side chain's own name: all of them, but for the carbon of a COOH at the end.
  const namedCarbonCount = endsInCarboxyl ? carbonCount - 1 : carbonCount;
  const prefixes = [];
  for (let index = 0; index < namedCarbonCount; index++) {
    const locant = index + 1;
    for (const group of listGroupsOnCarbon(carbonAtoms[index])) {
      if (group.symbol === CARBONYL_OXYGEN) {
        if (!(isAcyl && index === 0)) prefixes.push({ locant, substituentName: OXO_PREFIX });
      } else {
        prefixes.push({ locant, substituentName: prefixForGroupOnSideChain(group) });
      }
    }
  }
  if (endsInCarboxyl) prefixes.push({ locant: namedCarbonCount, substituentName: CARBOXY_PREFIX });

  const ownDoubleBondLocants = doubleBondLocants.filter((locant) => locant < namedCarbonCount);
  const ownTripleBondLocants = tripleBondLocants.filter((locant) => locant < namedCarbonCount);
  const parentName = isAcyl
    ? acylSubstituentName(carbonCount, ownDoubleBondLocants, ownTripleBondLocants)
    : unbranchedSubstituentName(namedCarbonCount, isJoinedByDoubleBond, ownDoubleBondLocants, ownTripleBondLocants);

  // Only one carbon the prefixes can be on: carbon 1 of methyl and methylidene, carbon 2 of acetyl.
  const hasOnePlaceForPrefixes = (isAcyl ? carbonCount === 2 : namedCarbonCount === 1);
  const everyHydrogenSwappedTheSameWay =
    new Set(prefixes.map(({ substituentName }) => substituentName)).size === 1 &&
    orderedAtomIds.slice(0, namedCarbonCount).every((atomId) => countHydrogensOnCarbon(skeleton, atomId) === 0);
  const locantsLeftOut = hasOnePlaceForPrefixes || everyHydrogenSwappedTheSameWay;
  const prefixText = writeSideChainPrefixes(prefixes, { leaveOutLocants: locantsLeftOut, bracketsAfterFirst: hasOnePlaceForPrefixes });
  // Ethenyl leaves out its locant only with nothing on it, or nothing whose place needs a locant:
  // 2-chloroethen-1-yl, not 2-chloroethenyl (P-14.3.4.4).
  const writtenParentName = !isAcyl && !locantsLeftOut && prefixes.length > 0 && parentName.startsWith('ethen') ? parentName.replace(/^ethen/, 'ethen-1-') : parentName;
  return {
    substituentName: prefixText + writtenParentName,
    sideChain: { kind: isAcyl ? 'acyl' : 'substituted', parentName, prefixes, locantsLeftOut },
  };
}

/** A side chain that is a single group named by one prefix, such as formyl. */
function wholeGroup(kind, substituentName) {
  return { substituentName, sideChain: { kind, parentName: substituentName, prefixes: [], locantsLeftOut: true } };
}
