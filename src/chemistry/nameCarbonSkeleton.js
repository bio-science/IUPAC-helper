/**
 * Working out the IUPAC name of an alkane, alkene, haloalkane, alcohol, aldehyde, ketone,
 * carboxylic acid, ester, amide, amine or ether from its carbon skeleton.
 *
 * Steps:
 *   1. Pick the main chain and number it   (see chooseMainChainAndNumbering.js)
 *   2. Name each substituent               (see findSubstituentsOnChain.js)
 *   3. Put the name together               (assembleName, below)
 *
 * Writing the name (IUPAC 2013 Recommendations):
 *   - Substituents are written in alphanumerical order. Multiplying prefixes such as
 *     "di" and "tri" are ignored when sorting, so "ethyl" comes before "dimethyl".  P-14.5
 *   - Identical substituents are grouped with a multiplying prefix: 2,3-dimethyl.   P-14.2.1
 *     A substituent beginning with "dec" goes in brackets: 11,12-di(decyl).          P-16.3.4 (d)
 *     So does one with locants of its own: 3-(prop-2-en-1-yl).                      P-16.3.4 (a)
 *   - Commas separate locants from each other, and hyphens separate locants from
 *     words. There are no spaces.                                                 P-16.2
 *     e.g. 3-ethyl-2,2-dimethylpentane
 *   - The main chain's name ends in "ane", or "ene" with the double bonds' locants:
 *     2-methylbut-2-ene, buta-1,3-diene, 3-ethylocta-1,4-diene.                  P-31.1.1
 *   - Halogens are prefixes too, sorted with the others: 2-bromo-1-chloropropane,
 *     1-chloro-2-methylpropane.                                                  P-61.3.1
 *   - OH groups on the main chain are the suffix -ol, after the "ane" or "ene", which
 *     loses its "e" before a vowel: 2-methylpropan-2-ol, propane-1,2-diol,
 *     but-3-en-2-ol, 2-chloroethan-1-ol.                                          P-63.1.2
 *   - An aldehyde group (-CHO) at the end of the main chain is the suffix -al, which comes
 *     before -ol, so OH groups are then the prefix hydroxy: propanal, butanedial,
 *     but-2-enal, 3-hydroxybutanal. The locants of -al are never written.     P-66.6.1.1.1, P-41
 *   - A ketone's C=O in the main chain is the suffix -one, which comes after -al and before
 *     -ol: propan-2-one, pentane-2,4-dione, but-3-en-2-one, 4-hydroxybutan-2-one. With a
 *     CHO group as well, it is the prefix oxo: 3-oxobutanal.                  P-64.2.2.1, P-64.5, P-41
 *   - A carboxyl group (-COOH) at the end of the main chain is the suffix "oic acid", the
 *     most senior of all: propanoic acid, butanedioic acid, prop-2-enoic acid,
 *     2-hydroxypropanoic acid, 3-oxobutanoic acid. In an acid, the O of a CHO group is the
 *     prefix oxo: 4-oxobutanoic acid. Like -al, its locants are never written.
 *                                                                  P-65.1.2.1, P-65.1.6.3, P-41
 *   - Locants are left out when the name can only mean one molecule: chloromethane,
 *     chloroethane, trichloroethene, methanol, ethanol, chloroethanal
 *     (see decideWhetherLocantsAreNeeded.js).                                     P-14.3.4
 *     The locants of a double bond in an acid are always written, as P-14.3.4.4 does for
 *     prop-2-enoic acid, and so are those in an aldehyde, made the same way: prop-2-enal,
 *     not propenal.
 *     So are the locants of the suffix -one, as P-14.3.4.4 does for propan-2-one and
 *     butan-2-one, even though propanone and butanone could only mean one molecule each; and
 *     so then, as all locants are written once any are (P-14.3.3), 1-chloropropan-2-one.
 *     That exception is only for -one: the prefix oxo is left without a locant when it can
 *     only go in one place, like chloro in chloropropanedioic acid (P-14.3.4.3), so
 *     oxopropanedioic acid and oxoacetic acid.
 *     On methane, the second and later prefixes then go in brackets:
 *     trichloro(fluoro)methane, and so on a ring: methyl(methylidene)cyclopropane.  P-16.5.1.3.1
 *     So they do on any parent with only one carbon they can be on: bromo(chloro)acetic acid,
 *     cyclopropyl(hydroxy)acetaldehyde, diethyl ethyl(methyl)propanedioate.         P-16.5.1.3.2
 *     An amide is not such a parent, as its N can have groups too, so its locants are always
 *     written: 2-chloroacetamide, 2-hydroxyacetamide.                    P-16.5.1.3.2, P-14.3.3
 *   - A ring is named from the chain of the same size with "cyclo" in front: cyclohexane,
 *     methylcyclohexane, cyclohexene, cyclohexa-1,3-diene, cyclohexanol,
 *     2-methylcyclohexan-1-ol, cyclohexanone. A -COOH or -CHO group joined to a ring is the
 *     suffix "carboxylic acid" or "carbaldehyde", added to the ring's whole name:
 *     cyclohexanecarboxylic acid, cyclohex-3-ene-1-carboxylic acid,
 *     cyclohexanecarbaldehyde. The ring is the parent unless a chain has more of the
 *     principal group, when the ring is the prefix cyclohexyl: cyclohexylmethanol.
 *     (see chooseMainChainAndNumbering.js)             P-22.1.1, P-31.1.3.1, P-65.1.2.2,
 *                                                       P-66.6.1.1.3, P-29.2, P-52.2.8
 *     Only molecules with a single ring are named; benzene and other aromatic rings are
 *     left for later, as A-level treats them as a topic of their own.
 *   - An ester, R-CO-O-R', is named like the acid R-COOH, with "oic acid" changed to "oate"
 *     (or "carboxylic acid" to "carboxylate"), after the name of the group R' as a separate
 *     word: methyl acetate, ethyl propanoate, methyl formate, propyl 2-hydroxypropanoate,
 *     methyl cyclohexanecarboxylate.                                    P-65.6.3.2.1, P-65.6.3.3.1
 *   - An amide, R-CO-NH2, is named like the acid, with "oic acid" changed to "amide" (or
 *     "carboxylic acid" to "carboxamide"): propanamide, butanediamide, prop-2-enamide,
 *     2-hydroxypropanamide, cyclohexanecarboxamide. A group R' on the nitrogen, R-CO-NH-R', is
 *     a prefix with the locant N, sorted with the others: N-methylacetamide,
 *     2-hydroxy-N-methylpropanamide, N,2-dimethylpropanamide, with N before the numbers.
 *                                                   P-66.1.1.1.1.1, P-66.1.1.1.1.3, P-66.1.1.3.1.1
 *     Esters and amides rank above aldehydes, ketones and alcohols, so the acid they are named
 *     from has those as prefixes, as in the acid itself (P-41).
 *   - An NH2 group (a primary amine) is the suffix -amine, the most junior of the suffixes,
 *     written like -ol: methanamine, propan-2-amine, ethane-1,2-diamine, cyclohexanamine,
 *     2-chloroethan-1-amine. With a more senior group it is the prefix amino:
 *     2-aminoethan-1-ol, 2-aminopropanoic acid.                      P-62.2.1.2, P-62.2.3, P-41
 *   - A secondary amine, R-NH-R', is named from the amine of the parent R, with R' as a prefix
 *     whose locant is N, like the N of an amide: N-methylethanamine, N-methylpropan-2-amine,
 *     N,2-dimethylpropan-1-amine. With a more senior group, R'-NH- is a prefix such as
 *     methylamino: 2-(methylamino)ethan-1-ol.                                P-62.2.2, P-62.2.3
 *   - An ether, R-O-R', has no suffix: R'-O- is a prefix on the parent R, such as methoxy or
 *     ethoxy: methoxyethane, 1-methoxypropane, 1,2-dimethoxyethane, 2-methoxyethan-1-ol.
 *     (see splitAtEthersAndAmines.js for how R and R' are chosen)           P-63.2.2, P-63.2.4.1
 *   - A C=C drawn as E or Z (see doubleBondConfiguration.js) has its stereodescriptor at the
 *     front of the name, in brackets with its locant, followed by a hyphen: (2E)-but-2-ene,
 *     (2Z,4E)-hexa-2,4-diene, (1E)-1,2-dichloroethene. A name with no locants has none in
 *     the descriptor either: (E)-cyclooctene. A C=C joining a side chain to the main chain
 *     (ethylidene ...) has the locant of the main chain carbon: (2E)-2-ethylidene... One in a
 *     side chain goes at the front of that side chain's name, with its own locants:
 *     3-[(1E)-prop-1-en-1-yl]. In an ester, the acid's descriptors go at the front of its own
 *     word: methyl (2E)-but-2-enoate.                     P-91.3, P-93.4.2.1, P-93.5.1.4.2.1
 *     When the rules above still leave a choice of main chain or numbering, the one with
 *     more Z double bonds is chosen, then the one with lower locants for them:
 *     (3Z,5E)-octa-3,5-diene, not (3E,5Z)-octa-3,5-diene.             P-44.4.1.12.1, P-14.4 (j)
 *   - Last, a few parents have a retained name that is the preferred IUPAC name in place of the
 *     systematic one: acetic acid for ethanoic acid, formaldehyde for methanal, acetamide for
 *     ethanamide, methyl acetate for methyl ethanoate ... (see retainedNames.js). The name is
 *     worked out systematically first, and then the parent's part is swapped, so the prefixes
 *     and locants are the same in both: chloroethanoic acid, chloroacetic acid. Both names are
 *     given (iupacName and systematicName), as the systematic one is still an accepted name.
 *                                                   P-65.1.1.1, P-66.1.1.1.2, P-66.6.1.2.1
 */

import {
  AMINO_GROUP,
  HYDROXYL_GROUP,
  describeCarbonylCarbon,
  everyCarbonylIsInAnAldehydeKetoneOrAcid,
  hasAldehydeGroup,
  hasCarboxylicAcidGroup,
  hasGroups,
  isAldehydeCarbon,
  isCarboxylicAcidCarbon,
  isDoubleBond,
  isLinkBond,
  isRingBond,
  isSkeletonEmpty,
  isSkeletonOneMolecule,
  listCarbonIdsBeyondBond,
  listAtomIdsInRings,
  listGroupsOnCarbon,
  listNeighbourCarbonIds,
  listSeparateRings,
  otherAtomIdOfBond,
} from './carbonSkeleton.js';
import { listCarbonIdsAlongUnbranchedBranch, listPrefixSubstituents, listSuffixSubstituents } from './findSubstituentsOnChain.js';
import { nameBranchedSideChain } from './nameBranchedSideChain.js';
import { addStereoDescriptorsToGroupName, bondKey, describeEveryDoubleBond, listStereoDescriptorsAlong, writeStereoDescriptors } from './doubleBondConfiguration.js';
import { compareLocantsAtFirstPointOfDifference } from './chooseMainChainAndNumbering.js';
import { describeGroupBeyondLink, listEtherAndAmineLinks, listEtherAndAmineParents } from './splitAtEthersAndAmines.js';
import { areLocantsNeeded } from './decideWhetherLocantsAreNeeded.js';
import { findPathBetweenTwoCarbons } from './findLongestCarbonChains.js';
import { chooseParent, listBestNumberingCandidates } from './chooseMainChainAndNumbering.js';
import {
  LARGEST_SUPPORTED_COUNT_OF_ONE_SUBSTITUENT,
  LONGEST_SUPPORTED_CHAIN_LENGTH,
  compareSubstituentNamesAlphanumerically,
  isCompoundPrefix,
  mainChainNameParts,
  multiplyingPrefixForCount,
  writeMultipliedSubstituent,
} from './alkaneNamingVocabulary.js';
import { joinNameParts, namePart, prefixGroup } from './nameParts.js';
import { findRetainedPreferredName } from './retainedNames.js';
import { message } from '../languages/translate.js';

/**
 * Builds the name text from its parts.
 *   assembleName(5, [{ locant: 2, substituentName: 'methyl' }, { locant: 3, substituentName: 'ethyl' }])
 *   -> "3-ethyl-2-methylpentane"
 *   assembleName(4, [{ locant: 2, substituentName: 'methyl' }], [2])
 *   -> "2-methylbut-2-ene"
 * OH groups (marked isHydroxy) become the suffix -ol:
 *   assembleName(4, [{ locant: 2, isHydroxy: true }], [3])
 *   -> "but-3-en-2-ol"
 * unless there is an aldehyde group (marked isAldehyde), which becomes the suffix -al instead:
 *   assembleName(4, [{ locant: 1, isAldehyde: true }, { locant: 3, isHydroxy: true, substituentName: 'hydroxy' }])
 *   -> "3-hydroxybutanal"
 * or a ketone group (marked isKetone), which becomes the suffix -one:
 *   assembleName(4, [{ locant: 2, isKetone: true }, { locant: 4, isHydroxy: true, substituentName: 'hydroxy' }])
 *   -> "4-hydroxybutan-2-one"
 * and NH2 groups (marked isAmine) are the suffix -amine when there is nothing more senior:
 *   assembleName(3, [{ locant: 2, isAmine: true, substituentName: 'amino' }])
 *   -> "propan-2-amine"
 * and a carboxyl group (marked isCarboxylicAcid) is the suffix "oic acid", before all the others:
 *   assembleName(3, [{ locant: 1, isCarboxylicAcid: true }, { locant: 2, isHydroxy: true, substituentName: 'hydroxy' }])
 *   -> "2-hydroxypropanoic acid"
 * With isRing, the main chain is a ring:
 *   assembleName(6, [{ locant: 1, substituentName: 'methyl' }, { locant: 2, substituentName: 'methyl' }], [], { isRing: true })
 *   -> "1,2-dimethylcyclohexane"
 * A group on the nitrogen of an amide has the locant 'N', written before any numbers:
 *   assembleName(3, [{ locant: 1, isCarboxylicAcid: true }, { locant: 2, substituentName: 'methyl' }, { locant: 'N', substituentName: 'methyl' }])
 *   -> "N,2-dimethylpropanoic acid" (which nameEsterOrAmide then makes "N,2-dimethylpropanamide")
 * With leaveOutLocants, no locants are written at all:
 *   assembleName(2, [{ locant: 1, substituentName: 'chloro' }, { locant: 2, substituentName: 'chloro' }, { locant: 2, substituentName: 'chloro' }], [1], { leaveOutLocants: true })
 *   -> "trichloroethene"
 */
export function assembleName(...nameArguments) {
  return joinNameParts(assembleNameParts(...nameArguments));
}

/**
 * assembleName as a list of parts (see nameParts.js): each prefix's locants, hyphen and name
 * in the group 'prefix:<its name>', then the parent's parts (see mainChainNameParts).
 */
export function assembleNameParts(mainChainCarbonCount, substituents, doubleBondLocants = [], { leaveOutLocants = false, isRing = false, tripleBondLocants = [] } = {}) {
  const prefixes = listPrefixSubstituents(substituents);
  const suffixSubstituents = listSuffixSubstituents(substituents);
  const carboxylicAcidLocants = suffixSubstituents.filter((substituent) => substituent.isCarboxylicAcid).map(({ locant }) => locant);
  const aldehydeLocants = suffixSubstituents.filter((substituent) => substituent.isAldehyde).map(({ locant }) => locant);
  const carboxylicAcidCount = carboxylicAcidLocants.length;
  const aldehydeCount = aldehydeLocants.length;
  const ketoneLocants = suffixSubstituents.filter((substituent) => substituent.isKetone).map(({ locant }) => locant);
  const hydroxyLocants = suffixSubstituents.filter((substituent) => substituent.isHydroxy).map(({ locant }) => locant);
  const aminoLocants = suffixSubstituents.filter((substituent) => substituent.isAmine).map(({ locant }) => locant);
  const locantsBySubstituentName = new Map();
  for (const { locant, substituentName } of prefixes) {
    if (!locantsBySubstituentName.has(substituentName)) locantsBySubstituentName.set(substituentName, []);
    locantsBySubstituentName.get(substituentName).push(locant);
  }

  const substituentNamesInAlphanumericalOrder = [...locantsBySubstituentName.keys()].sort(compareSubstituentNamesAlphanumerically);

  // On methane, each substituent after the first goes in brackets, with any di, tri ...
  // outside them (P-16.5.1.3.1): trichloro(fluoro)methane, bromo(chloro)di(fluoro)methane.
  // So does a ring's, when its locants are left out, as in ethylidyne(methylidyne)disilane
  // (P-14.3.4.4): methyl(methylidene)cyclopropane. And so does that of any parent with only
  // one carbon the prefixes can be on, which is when they are all on one carbon with no locants
  // (P-16.5.1.3.2): bromo(chloro)acetic acid. A compound prefix such as (methylamino) has its
  // brackets already.
  const isOnOneCarbon = prefixes.every(({ locant }) => locant === prefixes[0]?.locant);
  const bracketsAfterFirst = leaveOutLocants && (mainChainCarbonCount === 1 || isRing || isOnOneCarbon);
  // Without locants, the prefixes run straight on: "pentachlorofluoroethane".
  const parts = [];
  substituentNamesInAlphanumericalOrder.forEach((substituentName, position) => {
    const locantsInIncreasingOrder = locantsBySubstituentName.get(substituentName).sort(compareLocants);
    const multipliedSubstituent =
      bracketsAfterFirst && position > 0 && !isCompoundPrefix(substituentName)
        ? `${multiplyingPrefixForCount(locantsInIncreasingOrder.length)}(${substituentName})`
        : writeMultipliedSubstituent(locantsInIncreasingOrder.length, substituentName);
    const group = prefixGroup(substituentName);
    if (position > 0 && !leaveOutLocants) parts.push(namePart('-', 'punctuation'));
    if (!leaveOutLocants) parts.push(namePart(locantsInIncreasingOrder.join(','), 'locants', group), namePart('-', 'punctuation', group));
    parts.push(namePart(multipliedSubstituent, 'prefix', group, { substituentName }));
  });

  const hasSubstituentsWithLocants = substituents.length > 0 && !leaveOutLocants;
  return [
    ...parts,
    ...mainChainNameParts(mainChainCarbonCount, doubleBondLocants, hasSubstituentsWithLocants, hydroxyLocants, {
      leaveOutLocants,
      aldehydeCount,
      ketoneLocants,
      carboxylicAcidCount,
      isRing,
      aldehydeLocants,
      carboxylicAcidLocants,
      aminoLocants,
      tripleBondLocants,
    }),
  ];
}

/** The locant of a group on the nitrogen of an amide or amine. */
export const NITROGEN_LOCANT = 'N';

/** The order locants are written in: N first (P-66.1.1.3.1.1, "N,4-dimethyl"), then numbers in increasing order. */
function compareLocants(first, second) {
  if (first === second) return 0;
  if (first === NITROGEN_LOCANT) return -1;
  if (second === NITROGEN_LOCANT) return 1;
  return first - second;
}

/**
 * Names a carbon skeleton.
 *
 * When the molecule can be named, returns:
 *   {
 *     isNameable: true,
 *     iupacName: '3-ethyl-2-methylpentane',
 *     mainChainAtomIds: [...],          // in numbering order, carbon 1 first
 *     mainChainCarbonCount: 5,
 *     doubleBondLocants: [],            // e.g. [1, 3] for buta-1,3-diene
 *     substituents: [{ locant, substituentName, substituentCarbonCount, isJoinedByDoubleBond, doubleBondLocants, halogen, isHydroxy, isAldehyde, isKetone, isCarboxylicAcid, isAmine, isEther, linkedGroup, linkedGroupName, isRing }, ...],
 *     locantsLeftOut: false,            // true for names such as chloroethane and ethanol (see decideWhetherLocantsAreNeeded.js)
 *     isRing: false,                    // true when the main chain is a ring, listed in order round it in mainChainAtomIds
 *     stereoDescriptors: [],            // the E and Z at the front of the name, e.g. [{ locant: 2, descriptor: 'E' }]
 *     nameParts: [...],                 // the name in parts, each saying which naming step it came from (see nameParts.js)
 *     namedSkeleton: {...},             // the skeleton the main chain belongs to: for an ester or amide, its acid;
 *                                       // for an ether or secondary amine, the parent side with the O or NH as a group
 *   }
 * An ester also has isEster, esterGroupName ('methyl') and esterGroup ({ atomIds, linkBond }, the
 * group on the far side of its O); an amide has isAmide, and nitrogenGroup in the same way when
 * there is a group on its N, as does a secondary amine named from its parent's amine.
 * iupacName is the preferred IUPAC name. The name built by the systematic rules is in
 * systematicName (and systematicNameParts), the same as iupacName unless the PIN uses a
 * retained name, when retainedName says which and why (see retainedNames.js):
 *   iupacName: 'chloroacetic acid', systematicName: 'chloroethanoic acid',
 *   retainedName: { retainedParent: 'acetic acid', systematicParent: 'ethanoic acid', systematicName, formula, blueBookRules, explanation }
 * Otherwise returns { isNameable: false, reasonNotNameable }, a message for the student
 * (put into words by src/languages/translate.js).
 */
export function nameCarbonSkeleton(skeleton) {
  const named = addStereoDescriptors(nameWithConfigurations(skeleton, describeEveryDoubleBond(skeleton)));
  if (!named.isNameable) return named;
  const systematic = { ...named, systematicName: named.iupacName, systematicNameParts: named.nameParts };
  const preferred = findRetainedPreferredName(named);
  if (!preferred) return systematic;
  return { ...systematic, iupacName: joinNameParts(preferred.nameParts), nameParts: preferred.nameParts, retainedName: preferred.retainedName };
}

/** A name with the E and Z of its main chain written in, at the front (see nameWithConfigurations). */
function addStereoDescriptors(named) {
  if (!named.isNameable || named.stereoDescriptors.length === 0) return named;
  // A name without any locants has none in its descriptors either: (E)-cyclooctene (P-91.3).
  const descriptorPart = namePart(writeStereoDescriptors(named.stereoDescriptors, /\d/.test(named.iupacName)), 'stereo', 'stereo');
  // In an ester, the descriptors go at the front of the acid's word, after the group's word and its space.
  const insertAt = named.esterGroupName ? named.nameParts.findIndex(({ group }) => group === 'esterGroup') + 2 : 0;
  const nameParts = [...named.nameParts.slice(0, insertAt), descriptorPart, ...named.nameParts.slice(insertAt)];
  return { ...named, iupacName: joinNameParts(nameParts), nameParts };
}

/**
 * The stereodescriptors for a numbering candidate's main chain: its own double bonds, and
 * those joining side chains to it (with the locant of the main chain carbon, P-93.4.2.1.2).
 */
function listMainChainStereoDescriptors(candidate, configurations) {
  if (configurations.size === 0) return [];
  const { orderedChainAtomIds } = candidate;
  const descriptors = listStereoDescriptorsAlong(orderedChainAtomIds, configurations, { closesRing: candidate.isRing === true }).filter(({ locant }) =>
    candidate.doubleBondLocants.includes(locant),
  );
  for (const { locant, isJoinedByDoubleBond, branchStartAtomId } of candidate.substituents) {
    if (!isJoinedByDoubleBond || branchStartAtomId === undefined) continue;
    const descriptor = configurations.get(bondKey(orderedChainAtomIds[locant - 1], branchStartAtomId));
    if (descriptor === 'E' || descriptor === 'Z') descriptors.push({ locant, descriptor });
  }
  return descriptors.sort((first, second) => first.locant - second.locant);
}

/**
 * Between main chains and numberings the other rules can't choose between: positive when the
 * first is better, as it has more Z double bonds (P-44.4.1.12.1), or else lower locants for
 * them (P-14.4 (j)).
 */
function compareByZDoubleBonds(firstDescriptors, secondDescriptors) {
  const zLocantsOf = (descriptors) => descriptors.filter(({ descriptor }) => descriptor === 'Z').map(({ locant }) => locant);
  const firstZ = zLocantsOf(firstDescriptors);
  const secondZ = zLocantsOf(secondDescriptors);
  if (firstZ.length !== secondZ.length) return firstZ.length - secondZ.length;
  return -compareLocantsAtFirstPointOfDifference(firstZ, secondZ);
}

/**
 * nameCarbonSkeleton, with the E and Z of every double bond already worked out (from
 * describeEveryDoubleBond for the whole molecule, as the parts named here on their own have
 * lost what is beyond them). The main chain's descriptors are given as stereoDescriptors, not
 * written in the name, as they go in front of everything else (and in an ester, in front of
 * the acid's word: esterGroupName is the word before it).
 */
function nameWithConfigurations(skeleton, configurations) {
  if (isSkeletonEmpty(skeleton)) {
    return { isNameable: false, reasonNotNameable: message('naming.nothingDrawn') };
  }
  if (!isSkeletonOneMolecule(skeleton)) {
    return {
      isNameable: false,
      reasonNotNameable: message('naming.notASingleChain'),
    };
  }
  if (listSeparateRings(skeleton).hasRingsSharingCarbons) return { isNameable: false, reasonNotNameable: message('naming.ringsSharingCarbonsNotCovered') };
  if (hasRingAssembly(skeleton)) return { isNameable: false, reasonNotNameable: message('naming.ringAssemblyNotCovered') };
  if (isBenzeneRing(skeleton)) return { isNameable: false, reasonNotNameable: message('naming.benzeneRingNotCovered') };

  // Only aldehydes, ketones, acids, esters and amides are named so far: a C=O anywhere else (an acyl chloride ...) can't be.
  if (!everyCarbonylIsInAnAldehydeKetoneOrAcid(skeleton)) return { isNameable: false, reasonNotNameable: message('naming.carbonylCompoundNotCovered') };
  const etherAndAmineLinks = listEtherAndAmineLinks(skeleton);
  if (etherAndAmineLinks.length > 0) return nameEtherOrSecondaryAmine(skeleton, etherAndAmineLinks, configurations);
  const esterAndAmideCarbons = skeleton.carbonAtoms.filter((carbonAtom) => ['ester', 'amide'].includes(describeCarbonylCarbon(skeleton, carbonAtom)));
  if (esterAndAmideCarbons.length > 0) return nameEsterOrAmide(skeleton, esterAndAmideCarbons, configurations);

  // Two or more rings that could each be the parent: a ring assembly or multiplicative name (see chooseMainChainAndNumbering.js).
  if (chooseParent(skeleton).kind === 'tiedRings') return { isNameable: false, reasonNotNameable: message('naming.identicalRingsNotCovered') };
  const bestNumberingCandidates = listBestNumberingCandidates(skeleton);
  const { orderedChainAtomIds, substituents, isRing = false } = bestNumberingCandidates[0];

  if (orderedChainAtomIds.length > LONGEST_SUPPORTED_CHAIN_LENGTH) {
    return {
      isNameable: false,
      reasonNotNameable: message('naming.chainTooLong', {
        chainLength: orderedChainAtomIds.length,
        maxCarbons: LONGEST_SUPPORTED_CHAIN_LENGTH,
      }),
    };
  }

  if (substituents.some((substituent) => substituent.isRingNotCovered)) {
    return { isNameable: false, reasonNotNameable: message('naming.ringSideChainNotCovered') };
  }
  const sideChainNotNameable = substituents.find((substituent) => substituent.reasonNotNameable);
  if (sideChainNotNameable) return { isNameable: false, reasonNotNameable: sideChainNotNameable.reasonNotNameable };
  if (!isRing && needsCarboxylicAcidOrCarbaldehydeSuffix(skeleton)) {
    return { isNameable: false, reasonNotNameable: message('naming.moreThanTwoAcidOrAldehydeGroupsNotCovered') };
  }

  const countOfEachSubstituentName = new Map();
  for (const { substituentName } of substituents) {
    countOfEachSubstituentName.set(substituentName, (countOfEachSubstituentName.get(substituentName) ?? 0) + 1);
  }
  if ([...countOfEachSubstituentName.values()].some((count) => count > LARGEST_SUPPORTED_COUNT_OF_ONE_SUBSTITUENT)) {
    return {
      isNameable: false,
      reasonNotNameable: message('naming.tooManyOfOneSideChain', { maxCount: LARGEST_SUPPORTED_COUNT_OF_ONE_SUBSTITUENT }),
    };
  }

  // If the ranking rules leave more than one way to number the molecule, the one with more Z
  // double bonds, or lower locants for them, is chosen (P-44.4.1.12.1, P-14.4 (j)), and then
  // the name that comes first in alphanumerical order is the IUPAC name (P-45.5).
  const namedCandidates = bestNumberingCandidates.map((candidate) => {
    const namedSubstituents = candidate.substituents.map(
      ({
        locant,
        substituentName,
        substituentCarbonCount,
        isJoinedByDoubleBond,
        doubleBondLocants,
        tripleBondLocants,
        halogen,
        isHydroxy,
        isAldehyde,
        isKetone,
        isCarboxylicAcid,
        isAmine,
        isEther,
        linkedGroup,
        linkedGroupName,
        isRing: isRingSideChain,
        branchStartAtomId,
        isUnbranched,
        groupSymbol,
        linkedAtomIds,
        linkBond,
        sideChain,
      }) => ({
        locant,
        substituentName: nameSideChainWithStereo(skeleton, configurations, { substituentName, doubleBondLocants, branchStartAtomId, isUnbranched, isJoinedByDoubleBond, locant }, candidate),
        substituentCarbonCount,
        isJoinedByDoubleBond,
        doubleBondLocants,
        ...(tripleBondLocants?.length > 0 ? { tripleBondLocants } : {}),
        ...(halogen ? { halogen } : {}),
        ...(isHydroxy ? { isHydroxy } : {}),
        ...(isAldehyde ? { isAldehyde } : {}),
        ...(isKetone ? { isKetone } : {}),
        ...(isCarboxylicAcid ? { isCarboxylicAcid } : {}),
        ...(isAmine ? { isAmine } : {}),
        ...(isEther ? { isEther } : {}),
        ...(linkedGroup ? { linkedGroup, linkedGroupName } : {}),
        ...(isRingSideChain ? { isRing: true } : {}),
        // Where it is on the drawing, for the naming steps (see listNamingSteps.js).
        ...(branchStartAtomId !== undefined ? { branchStartAtomId } : {}),
        ...(groupSymbol ? { groupSymbol } : {}),
        ...(linkedAtomIds ? { linkedAtomIds, linkBond } : {}),
        ...(sideChain ? { sideChain } : {}),
      }),
    );
    return {
      candidate,
      namedSubstituents,
      stereoDescriptors: listMainChainStereoDescriptors(candidate, configurations),
      iupacName: assembleName(candidate.orderedChainAtomIds.length, namedSubstituents, candidate.doubleBondLocants, { isRing, tripleBondLocants: candidate.tripleBondLocants ?? [] }),
    };
  });
  const chosen = namedCandidates.reduce((bestSoFar, named) => {
    const byZ = compareByZDoubleBonds(named.stereoDescriptors, bestSoFar.stereoDescriptors);
    if (byZ !== 0) return byZ > 0 ? named : bestSoFar;
    return compareSubstituentNamesAlphanumerically(named.iupacName, bestSoFar.iupacName) < 0 ? named : bestSoFar;
  });

  const mainChainCarbonCount = chosen.candidate.orderedChainAtomIds.length;
  const suffixSubstituents = listSuffixSubstituents(chosen.namedSubstituents);
  const tripleBondLocants = chosen.candidate.tripleBondLocants ?? [];
  const multipleBondCount = chosen.candidate.doubleBondLocants.length + tripleBondLocants.length;
  // P-14.3.4.4 keeps the locant of the multiple bond in prop-2-enoic acid and prop-2-ynoic acid.
  const isAcidOrAldehydeWithDoubleBonds =
    suffixSubstituents.some(({ isCarboxylicAcid, isAldehyde }) => isCarboxylicAcid || isAldehyde) && multipleBondCount > 0;
  // -one keeps its locant (propan-2-one), except on methane, which has only one
  // carbon: dicyclohexylmethanone (P-14.3.4.2 (a)).
  const hasKetoneSuffix = mainChainCarbonCount > 1 && suffixSubstituents.some(({ isKetone }) => isKetone);
  const description = {
    mainChainCarbonCount,
    mainChainDoubleBondLocants: chosen.candidate.doubleBondLocants,
    mainChainTripleBondLocants: tripleBondLocants,
    substituents: chosen.namedSubstituents,
    ...(isRing ? { isRing } : {}),
  };
  // In a ring, any substituent can leave out its locant if that gives only one molecule,
  // but two or more multiple bonds always need theirs (cyclohexa-1,3-diene), so then all
  // locants are written.
  const locantsLeftOut = isRing
    ? multipleBondCount <= 1 && chosen.namedSubstituents.length > 0 && !areLocantsNeeded(description)
    : hasGroups(skeleton) && !isAcidOrAldehydeWithDoubleBonds && !hasKetoneSuffix && !areLocantsNeeded(description);

  const nameParts = assembleNameParts(mainChainCarbonCount, chosen.namedSubstituents, chosen.candidate.doubleBondLocants, { leaveOutLocants: locantsLeftOut, isRing, tripleBondLocants });
  const named = {
    isNameable: true,
    iupacName: joinNameParts(nameParts),
    nameParts,
    namedSkeleton: skeleton,
    locantsLeftOut,
    mainChainAtomIds: chosen.candidate.orderedChainAtomIds,
    mainChainCarbonCount,
    doubleBondLocants: chosen.candidate.doubleBondLocants,
    tripleBondLocants,
    substituents: chosen.namedSubstituents,
    isRing,
    stereoDescriptors: chosen.stereoDescriptors,
  };

  // A secondary amine named from its parent's amine: the group on the N is added as a prefix.
  const nitrogenGroups = suffixSubstituents.filter(({ isAmine, linkedGroup }) => isAmine && linkedGroup);
  if (nitrogenGroups.length === 0) return named;
  // With more than one amine group, each N would need a number of its own (N1, N2 ...).
  if (suffixSubstituents.length > 1) return { isNameable: false, reasonNotNameable: message('naming.nitrogenGroupOnPolyamineNotCovered') };
  const [{ linkedGroupName, linkedAtomIds, linkBond }] = nitrogenGroups;
  return addGroupOnNitrogen(named, linkedGroupName, { atomIds: linkedAtomIds, linkBond });
}

/**
 * Adds the prefix for a group on the nitrogen of an amine or amide to a name, with the locant N
 * (P-62.2.2, P-66.1.1.3.1.1): "ethanamine" -> "N-methylethanamine". With other prefixes, it is
 * sorted in among them, and all locants are written (P-14.3.3): "N,2-dimethylpropan-1-amine".
 * named: a result of nameCarbonSkeleton. nitrogenGroup: where the group is on the drawing,
 * { atomIds, linkBond }, kept with the result (with its groupName) for the naming steps.
 */
function addGroupOnNitrogen(named, groupName, nitrogenGroup) {
  const withGroup = { ...nitrogenGroup, groupName };
  if (listPrefixSubstituents(named.substituents).length === 0) {
    const group = prefixGroup(groupName);
    const nameParts = [
      namePart(NITROGEN_LOCANT, 'locants', group),
      namePart('-', 'punctuation', group),
      namePart(writeMultipliedSubstituent(1, groupName), 'prefix', group, { substituentName: groupName }),
      ...named.nameParts,
    ];
    return { ...named, iupacName: joinNameParts(nameParts), nameParts, nitrogenGroup: withGroup };
  }
  const nitrogenSubstituent = { locant: NITROGEN_LOCANT, substituentName: groupName };
  const nameParts = assembleNameParts(named.mainChainCarbonCount, [...named.substituents, nitrogenSubstituent], named.doubleBondLocants, { isRing: named.isRing, tripleBondLocants: named.tripleBondLocants });
  return { ...named, iupacName: joinNameParts(nameParts), nameParts, locantsLeftOut: false, nitrogenGroup: withGroup };
}

/**
 * Names an ether or a secondary amine (see splitAtEthersAndAmines.js): the parent is named
 * with each O or NH, and the group beyond it, as a group on its carbon. If two parents are
 * equally good, the name that comes first in alphanumerical order is chosen (P-45.5).
 */
function nameEtherOrSecondaryAmine(skeleton, etherAndAmineLinks, configurations) {
  const { parentSkeletons, reasonNotNameable } = listEtherAndAmineParents(skeleton, etherAndAmineLinks, configurations);
  if (reasonNotNameable) return { isNameable: false, reasonNotNameable };
  const namedParents = parentSkeletons.map((parentSkeleton) => nameWithConfigurations(parentSkeleton, configurations));
  const nameable = namedParents.filter(({ isNameable }) => isNameable);
  if (nameable.length === 0) return namedParents[0];
  return nameable.reduce((earliestSoFar, named) => (compareSubstituentNamesAlphanumerically(named.iupacName, earliestSoFar.iupacName) < 0 ? named : earliestSoFar));
}

/**
 * Names an ester or an amide (see the top of this file). The molecule is named as the acid it
 * comes from: the carbons on the far side of the O or NH are taken away, and each ester or
 * amide C=O carbon is given an OH in place of its O, NH or NH2. Then the ending of the acid's
 * name is changed, and the group from the far side of the O or NH is added to it.
 * The result is like nameCarbonSkeleton's for the acid, with isEster or isAmide.
 */
function nameEsterOrAmide(skeleton, esterAndAmideCarbons, configurations) {
  const kinds = new Set(esterAndAmideCarbons.map((carbonAtom) => describeCarbonylCarbon(skeleton, carbonAtom)));
  const hasAcid = skeleton.carbonAtoms.some((carbonAtom) => describeCarbonylCarbon(skeleton, carbonAtom) === 'carboxylicAcid');
  if (kinds.size > 1 || hasAcid) return { isNameable: false, reasonNotNameable: message('naming.acidDerivativeMixNotCovered') };
  const isEster = kinds.has('ester');

  const linkBonds = skeleton.carbonCarbonBonds.filter(isLinkBond);
  // An amide with a group on its N can only have the one amide group, or its N would need a number too (N1, N4 ...).
  if (linkBonds.length > 1 || (linkBonds.length === 1 && esterAndAmideCarbons.length > 1)) {
    return { isNameable: false, reasonNotNameable: message('naming.moreThanOneLinkNotCovered') };
  }

  let farSideAtomIds = new Set();
  let farSideGroupName = null;
  if (linkBonds.length === 1) {
    const [linkBond] = linkBonds;
    if (isRingBond(skeleton, linkBond.firstAtomId, linkBond.secondAtomId)) {
      return { isNameable: false, reasonNotNameable: message('naming.cyclicEsterOrAmideNotCovered') };
    }
    const carbonylAtomId = esterAndAmideCarbons[0].atomId;
    const farAtomId = otherAtomIdOfBond(linkBond, carbonylAtomId);
    farSideAtomIds = listCarbonIdsBeyondBond(skeleton, carbonylAtomId, farAtomId);
    farSideGroupName = describeGroupBeyondLink(skeleton, carbonylAtomId, farAtomId, configurations)?.groupName ?? null;
    if (farSideGroupName === null) return { isNameable: false, reasonNotNameable: message('naming.esterOrAmideAlkylNotCovered') };
  }

  const esterOrAmideAtomIds = new Set(esterAndAmideCarbons.map(({ atomId }) => atomId));
  const acidSkeleton = {
    carbonAtoms: skeleton.carbonAtoms
      .filter(({ atomId }) => !farSideAtomIds.has(atomId))
      .map((carbonAtom) => {
        if (!esterOrAmideAtomIds.has(carbonAtom.atomId)) return carbonAtom;
        const groups = listGroupsOnCarbon(carbonAtom).filter(({ symbol }) => symbol !== AMINO_GROUP);
        return { ...carbonAtom, groups: [...groups, { symbol: HYDROXYL_GROUP }] };
      }),
    carbonCarbonBonds: skeleton.carbonCarbonBonds.filter(
      (bond) => !isLinkBond(bond) && !farSideAtomIds.has(bond.firstAtomId) && !farSideAtomIds.has(bond.secondAtomId),
    ),
  };
  const acid = nameWithConfigurations(acidSkeleton, configurations);
  if (!acid.isNameable) return acid;
  // Each ester or amide group must be one the acid's suffix names. One on a side chain would be
  // a prefix such as 2-methoxy-2-oxoethyl or 2-amino-2-oxoethyl, which is not covered yet.
  const suffixAcidGroupCount = listSuffixSubstituents(acid.substituents).filter(({ isCarboxylicAcid }) => isCarboxylicAcid).length;
  if (suffixAcidGroupCount < esterAndAmideCarbons.length) return { isNameable: false, reasonNotNameable: message('naming.esterOrAmideOnSideChainNotCovered') };

  const [linkBond] = linkBonds;
  const farSideGroup = linkBond ? { atomIds: [...farSideAtomIds], linkBond: { firstAtomId: linkBond.firstAtomId, secondAtomId: linkBond.secondAtomId } } : null;
  // An amide's N can have groups too, so the locants the acid leaves out are written
  // (P-16.5.1.3.2, P-14.3.3): chloroacetic acid, but 2-chloroacetamide.
  const amideAcid = isEster ? acid : writeLocantsOfPrefixes(acid);
  const withNitrogenGroup = !isEster && farSideGroupName !== null ? addGroupOnNitrogen(amideAcid, farSideGroupName, farSideGroup) : amideAcid;
  // The suffix is the last part of the name: "oic acid" becomes "oate" or "amide", "carboxylic acid" "carboxylate" or "carboxamide".
  const lastPart = withNitrogenGroup.nameParts[withNitrogenGroup.nameParts.length - 1];
  const changedEnding = isEster
    ? lastPart.text.replace(/carboxylic acid$/, 'carboxylate').replace(/oic acid$/, 'oate')
    : lastPart.text.replace(/carboxylic acid$/, 'carboxamide').replace(/oic acid$/, 'amide');
  const nameParts = [
    ...(isEster ? [namePart(farSideGroupName, 'word', 'esterGroup'), namePart(' ', 'punctuation')] : []),
    ...withNitrogenGroup.nameParts.slice(0, -1),
    { ...lastPart, text: changedEnding },
  ];
  return {
    ...withNitrogenGroup,
    iupacName: joinNameParts(nameParts),
    nameParts,
    ...(isEster ? { isEster: true, esterGroupName: farSideGroupName, esterGroup: farSideGroup } : { isAmide: true }),
  };
}

/** A name whose locants were left out, with them written: chloroethanoic acid -> 2-chloroethanoic acid. Any other name is left as it is. */
function writeLocantsOfPrefixes(named) {
  if (!named.locantsLeftOut || listPrefixSubstituents(named.substituents).length === 0) return named;
  const nameParts = assembleNameParts(named.mainChainCarbonCount, named.substituents, named.doubleBondLocants, { isRing: named.isRing, tripleBondLocants: named.tripleBondLocants });
  return { ...named, iupacName: joinNameParts(nameParts), nameParts, locantsLeftOut: false };
}

/**
 * A side chain's name, with the E and Z of its own double bonds in front (P-91.3): an
 * unbranched side chain such as prop-1-en-1-yl becomes (1E)-prop-1-en-1-yl. A branched one is
 * named again with them, each chain in it getting its own: 3-[(1E)-prop-1-en-1-yl]hexan-2-yl.
 * Any other name is left as it is.
 */
function nameSideChainWithStereo(skeleton, configurations, { substituentName, doubleBondLocants, branchStartAtomId, isUnbranched, isJoinedByDoubleBond, locant }, candidate) {
  if (configurations.size === 0 || !substituentName || branchStartAtomId === undefined) return substituentName;
  const chainAtomId = candidate.orderedChainAtomIds[locant - 1];
  if (isUnbranched === false) return nameBranchedSideChain(skeleton, branchStartAtomId, chainAtomId, isJoinedByDoubleBond, configurations).substituentName ?? substituentName;
  if (!(doubleBondLocants?.length > 0)) return substituentName;
  return addStereoDescriptorsToGroupName(substituentName, listCarbonIdsAlongUnbranchedBranch(skeleton, branchStartAtomId, chainAtomId), configurations);
}

/**
 * True when a chain is joined to more than two COOH groups, or, in a molecule without any, to
 * more than two CHO groups. Then they are all named by the suffix "carboxylic acid" or
 * "carbaldehyde" on that chain, not "oic acid" or "al" with the others as prefixes
 * (P-65.1.2.2.1, P-66.6.1.1.2): propane-1,2,3-tricarboxylic acid, not
 * 3-carboxypentanedioic acid or 2-(carboxymethyl)butanedioic acid; butane-1,2,4-tricarbaldehyde.
 * Those names are not covered yet. The chain is made of the other carbons, outside any ring, and
 * the COOH or CHO carbons are each joined to one of its carbons.
 */
function needsCarboxylicAcidOrCarbaldehydeSuffix(skeleton) {
  const isGroupCarbon = hasCarboxylicAcidGroup(skeleton) ? isCarboxylicAcidCarbon : hasAldehydeGroup(skeleton) ? isAldehydeCarbon : null;
  if (isGroupCarbon === null) return false;
  const groupCarbonIds = new Set(skeleton.carbonAtoms.filter((carbonAtom) => isGroupCarbon(skeleton, carbonAtom)).map(({ atomId }) => atomId));
  if (groupCarbonIds.size <= 2) return false;
  const ringAtomIds = listAtomIdsInRings(skeleton);
  const isChainCarbon = (atomId) => !groupCarbonIds.has(atomId) && !ringAtomIds.has(atomId);
  const chainSkeleton = {
    carbonAtoms: skeleton.carbonAtoms.filter(({ atomId }) => isChainCarbon(atomId)),
    carbonCarbonBonds: skeleton.carbonCarbonBonds.filter(({ firstAtomId, secondAtomId }) => isChainCarbon(firstAtomId) && isChainCarbon(secondAtomId)),
  };
  // The chain carbon each COOH or CHO carbon is joined to. A chain joined to more than two of them
  // can always be shortened to one that starts and ends at such carbons.
  const joinedToByGroupCarbonId = new Map();
  for (const groupCarbonId of groupCarbonIds) {
    const chainNeighbourId = listNeighbourCarbonIds(skeleton, groupCarbonId).find(isChainCarbon);
    if (chainNeighbourId !== undefined) joinedToByGroupCarbonId.set(groupCarbonId, chainNeighbourId);
  }
  const anchorIds = [...new Set(joinedToByGroupCarbonId.values())];
  for (let first = 0; first < anchorIds.length; first++) {
    for (let second = first; second < anchorIds.length; second++) {
      const path = first === second ? [anchorIds[first]] : findPathBetweenTwoCarbons(chainSkeleton, anchorIds[first], anchorIds[second]);
      if (path === null) continue;
      const onPath = new Set(path);
      const joinedCount = [...joinedToByGroupCarbonId.values()].filter((atomId) => onPath.has(atomId)).length;
      if (joinedCount > 2) return true;
    }
  }
  return false;
}

/**
 * True when two rings of the same size are joined straight to each other, by a single or a
 * double bond: a ring assembly, named as one unit (1,1'-bi(cyclohexane),
 * [1,1'-bi(cyclohexan)]-1-ene, 1,1'-bi(cyclopentylidene), P-28.1), even where the rest of the
 * molecule is the parent. Not covered yet. Rings of different sizes are not a ring assembly:
 * cyclopentylcyclohexane.
 */
function hasRingAssembly(skeleton) {
  const { rings } = listSeparateRings(skeleton);
  const ringByAtomId = new Map(rings.flatMap((ring) => ring.map((atomId) => [atomId, ring])));
  return skeleton.carbonCarbonBonds.some((bond) => {
    const [first, second] = [ringByAtomId.get(bond.firstAtomId), ringByAtomId.get(bond.secondAtomId)];
    return first && second && first !== second && first.length === second.length && !isLinkBond(bond);
  });
}

/**
 * True when a six-carbon ring has three double bonds, every other bond round it: benzene, as
 * drawn with its Kekulé structure (P-31.1.4.2). Benzene and its compounds are named
 * differently from other rings, and are not covered here yet.
 */
function isBenzeneRing(skeleton) {
  return listSeparateRings(skeleton).rings.some((ring) => {
    if (ring.length !== 6) return false;
    const ringAtomIds = new Set(ring);
    const ringDoubleBonds = skeleton.carbonCarbonBonds.filter(
      (bond) => isDoubleBond(bond) && ringAtomIds.has(bond.firstAtomId) && ringAtomIds.has(bond.secondAtomId),
    );
    return ringDoubleBonds.length === 3;
  });
}
