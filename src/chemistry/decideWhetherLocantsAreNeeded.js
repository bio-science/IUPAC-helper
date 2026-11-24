/**
 * Deciding whether a name needs its locants (the numbers), following IUPAC 2013, P-14.3.4.
 *
 * Locants are left out when there is only one molecule the name without them could mean:
 *   - chloromethane, dichloromethane: methane has only one carbon     P-14.3.4.2 (a)
 *   - chloroethane, chloroethene: both carbons of ethane are alike     P-14.3.4.2 (b)
 *   - trichloroethene: wherever the three chlorines go on ethene,
 *     it is the same molecule                                          P-14.3.4.4
 *   - hexachloroethane, hexafluoropropene: every hydrogen is swapped   P-14.3.4.5
 *   - methanol, ethanol, ethenol: the same as chloromethane and
 *     chloroethane, with the suffix -ol                               P-14.3.4.2
 * And if any locant is needed, all of them are written (P-14.3.3): 1,1-dichloroethene,
 * not 1-dichloroethene, and 2-chloroethan-1-ol, not 2-chloroethanol.
 *
 * The suffixes -oic acid and -al never have locants, as their carbon is always at the end of
 * the chain (P-14.3.4.1): propanoic acid, butanedioic acid, propanal, butanedial,
 * 2-methylpropanal. So the carboxyl and aldehyde groups are never moved here, and nothing is
 * moved on to their carbons either, as a halogen or OH there would make a different kind of
 * compound (an acyl halide, or an aldehyde into an acid). That leaves chloroacetic acid and
 * chloroacetaldehyde, like chlorobutanedioic acid in P-14.3.4.1, with no locants: the chlorine can
 * only be on carbon 2. In an acid, though, a CHO group is not the suffix but the prefix oxo,
 * like the O of a ketone, so it is moved like one: 3-oxopropanoic acid (OHC-CH2-COOH) needs
 * its locant, as oxo could also be on carbon 2 (CH3-CO-COOH), but oxoacetic acid does not.
 * A side chain on a chain keeps its locant, as moving it would make a longer chain, unless the
 * parent has only one carbon that can have groups on it at all: all locants are then left out
 * (P-14.3.4.6), as in cyclopentylacetic acid (P-13.5.2), diethyl ethyl(methyl)propanedioate
 * (P-16.5.1.3.2) and so methylpropanedial. An amide's N can have groups too, so an amide always
 * keeps its locants, as in 2-methylpropanediamide (P-14.3.4.1): see nameCarbonSkeleton.js.
 *
 * To check, we try moving each substituent to every other carbon of the main chain, and
 * swapping each pair of different substituents. If any of these gives a different molecule,
 * the name without locants could mean more than one molecule, so the locants are needed.
 *
 * Only names with halogens, OH, C=O or COOH groups in are checked. In a hydrocarbon the main chain is the longest
 * chain, so moving a side chain always gives a different molecule (2-methylpropane, not
 * methylpropane), and the only locants left out are those of ethene and propene (see
 * mainChainName in alkaneNamingVocabulary.js). Propa-1,2-diene keeps its locants even
 * though they could be left out, as P-14.3.4.4 makes an exception of it.
 *
 * On methane, there is only one carbon, so there are never locants, even with a ring as a
 * side chain: cyclohexylmethanol (P-14.3.4.2 (a)).
 *
 * In a ring, every carbon is alike, so a ring with one substituent needs no locant
 * (P-14.3.4.2 (c)): methylcyclohexane, chlorocyclohexane, cyclohexanol, cyclohexanone,
 * cyclohexanecarboxylic acid. Here side chains are moved too, and so are -COOH and -CHO,
 * which hang off the ring: 1,2-dimethylcyclohexane and 2-methylcyclohexan-1-ol keep their
 * locants, as moving a methyl gives a different molecule. A ring with one double bond and
 * nothing else needs no locant either (P-31.1.3.1): cyclohexene (see nameCarbonSkeleton.js).
 */

import { bondsUsedBySubstituent, connectCarbonSkeletonFromDescription, countFreeBondsByLocant } from './buildCarbonSkeletonFromDescription.js';
import { canonicalFingerprintOfSkeleton } from './canonicalFingerprint.js';

/** The fingerprint of the molecule described, or null if it can't exist (a carbon would have too many bonds). */
function fingerprintOfDescription(description) {
  const { carbonSkeleton } = connectCarbonSkeletonFromDescription(description);
  return carbonSkeleton ? canonicalFingerprintOfSkeleton(carbonSkeleton) : null;
}

/** Every different molecule-changing move to try: moves first, then swaps. Duplicates (same substituent, same places) are tried once. */
function* listRearrangements(description) {
  const { substituents, mainChainCarbonCount, isRing = false } = description;
  const freeBonds = countFreeBondsByLocant(description);
  // The suffix groups at the chain ends stay put: -COOH, or -CHO when there is no acid.
  // On a ring, they can go on any carbon.
  const isAcid = substituents.some(({ isCarboxylicAcid }) => isCarboxylicAcid);
  const staysPut = (substituent) => !isRing && (substituent.isCarboxylicAcid || (substituent.isAldehyde && !isAcid));
  const carbonylEndLocants = new Set(
    isRing ? [] : substituents.filter(({ isCarboxylicAcid, isAldehyde }) => isCarboxylicAcid || isAldehyde).map(({ locant }) => locant),
  );
  const triedMoves = new Set();
  for (let index = 0; index < substituents.length; index++) {
    const substituent = substituents[index];
    if (staysPut(substituent)) continue;
    for (let newLocant = 1; newLocant <= mainChainCarbonCount; newLocant++) {
      if (newLocant === substituent.locant || carbonylEndLocants.has(newLocant)) continue;
      if (freeBonds[newLocant - 1] < bondsUsedBySubstituent(substituent, isRing)) continue;
      const moveKey = `${substituent.substituentName}@${substituent.locant}->${newLocant}`;
      if (triedMoves.has(moveKey)) continue;
      triedMoves.add(moveKey);
      yield substituents.map((other, otherIndex) => (otherIndex === index ? { ...other, locant: newLocant } : other));
    }
  }
  for (let firstIndex = 0; firstIndex < substituents.length; firstIndex++) {
    for (let secondIndex = firstIndex + 1; secondIndex < substituents.length; secondIndex++) {
      const first = substituents[firstIndex];
      const second = substituents[secondIndex];
      if (first.locant === second.locant || first.substituentName === second.substituentName) continue;
      if (staysPut(first) || staysPut(second)) continue;
      const swapKey = `${first.substituentName}@${first.locant}<->${second.substituentName}@${second.locant}`;
      if (triedMoves.has(swapKey)) continue;
      triedMoves.add(swapKey);
      yield substituents.map((other, otherIndex) => {
        if (otherIndex === firstIndex) return { ...other, locant: second.locant };
        if (otherIndex === secondIndex) return { ...other, locant: first.locant };
        return other;
      });
    }
  }
}

/**
 * How many carbons of a chain can have prefixes on them: all but those of its -COOH groups, or
 * with none, its -CHO groups, which are at its ends (an ester's or amide's are -COOH here, as
 * they are named from the acid).
 */
function countCarbonsOpenToGroups({ substituents, mainChainCarbonCount }) {
  const isAcid = substituents.some(({ isCarboxylicAcid }) => isCarboxylicAcid);
  const endGroupLocants = new Set(substituents.filter((substituent) => (isAcid ? substituent.isCarboxylicAcid : substituent.isAldehyde)).map(({ locant }) => locant));
  return mainChainCarbonCount - endGroupLocants.size;
}

/**
 * True if the name of this molecule needs its locants.
 * description: the main chain and its substituents, as given by nameCarbonSkeleton.js:
 *   { mainChainCarbonCount, mainChainDoubleBondLocants, substituents: [{ locant, substituentName, ... }], isRing }
 */
export function areLocantsNeeded(description) {
  if (description.substituents.length === 0) return false;
  if (!description.isRing && description.mainChainCarbonCount === 1) return false;
  const hasSideChain = description.substituents.some(({ substituentCarbonCount }) => substituentCarbonCount > 0);
  if (!description.isRing && hasSideChain && countCarbonsOpenToGroups(description) > 1) return true;
  const fingerprintOfMolecule = fingerprintOfDescription(description);
  for (const rearrangedSubstituents of listRearrangements(description)) {
    const fingerprint = fingerprintOfDescription({ ...description, substituents: rearrangedSubstituents });
    if (fingerprint !== null && fingerprint !== fingerprintOfMolecule) return true;
  }
  return false;
}
