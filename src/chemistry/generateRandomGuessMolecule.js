/**
 * Making a random molecule for "Practise naming" (guess mode).
 *
 * Rules for the random molecule, each part only if its feature is ticked (practiceFeatures.js):
 *   - a main chain of 3 to 8 carbons, or up to 12 with "Long main chains" ticked
 *   - with "Harder molecules" unticked, simpler molecules: shorter chains more often, fewer
 *     side chains and groups, and one C=C at most (see GUESS_MODE_SETTINGS.simplerMolecules);
 *     ticked, every chain length is as likely, and some molecules have two C=C (dienes)
 *   - 0 to 3 methyl groups and 0 to 2 ethyl groups, mixed together
 *   - side chains only on the inner carbons of the chain
 *   - in some molecules, 1 or 2 halogen atoms (F, Cl, Br, I) anywhere on the chain
 *   - in some molecules, 1 or 2 OH groups (an alcohol), each on a different carbon of the chain
 *   - in some molecules, 1 or 2 CHO groups (an aldehyde), at the ends of the chain
 *   - in some molecules, 1 or 2 ketone C=O groups, on the inner carbons of the chain
 *   - in some molecules, 1 or 2 COOH groups (a carboxylic acid), at the ends of the chain
 *   - in some molecules, a C=C double bond in the chain, drawn E or Z at random where it has
 *     E and Z forms (see doubleBondConfiguration.js), as in (2E)-pent-2-ene; with "E/Z isomers"
 *     unticked, only double bonds with no E and Z forms, as in but-1-ene; with "E/Z isomers more
 *     often" ticked, about 1 molecule in 5 is made a chain with a C=C that has E and Z forms
 *     (GUESS_MODE_SETTINGS.shareOfEAndZIsomers), where otherwise only about 1 in 20 is
 *   - some molecules are a ring of 3 to 6 carbons instead, sometimes with one double bond,
 *     with 0 to 2 methyl groups and 0 or 1 ethyl group, and the same halogens, OH and ketone
 *     groups anywhere on the ring, or one CHO or COOH group joined to it
 *     (cyclohexanecarbaldehyde, cyclohexanecarboxylic acid); a CHO on a ring only with
 *     "Harder molecules" ticked
 *
 * With "Alkanes" unticked, every molecule has at least one of the other kinds of molecule
 * that are ticked: one of them is picked first and always put in.
 *
 * Some random choices don't work: an ethyl group on carbon 2 makes a longer chain, so
 * the chain we picked is no longer the main chain, and a carbon can't hold more than
 * 2 side chains, or a halogen on the carbon of a CHO group would make an acyl halide, or a
 * chain off a ring could have more OH groups than the ring, and be the main chain. When
 * that happens we simply try again. (An OH group on the carbon of a CHO group makes a COOH
 * group, so that molecule is an acid.)
 */

import { buildCarbonSkeletonFromDescription } from './buildCarbonSkeletonFromDescription.js';
import { nameCarbonSkeleton } from './nameCarbonSkeleton.js';
import { everyCarbonylIsInAnAldehydeKetoneOrAcid, HALOGEN_SYMBOLS, isUnstableAlcohol } from './carbonSkeleton.js';
import { describeEveryDoubleBond } from './doubleBondConfiguration.js';
import { DEFAULT_PRACTICE_PRESET, isPracticeFeatureInUse, PRACTICE_FEATURES, PRACTICE_PRESETS } from './practiceFeatures.js';

export const GUESS_MODE_SETTINGS = {
  shortestMainChain: 3,
  longestMainChain: 8,
  /** With "Long main chains" ticked (see practiceFeatures.js). */
  longestMainChainWithLongChains: 12,
  mostMethylGroups: 3,
  mostEthylGroups: 2,
  /** How often (out of 1) a molecule has halogens, OH, CHO, C=O and COOH groups, so most practice is still alkanes. */
  chanceOfHalogens: 0.3,
  mostHalogenAtoms: 2,
  chanceOfHydroxylGroups: 0.3,
  mostHydroxylGroups: 2,
  chanceOfAldehydeGroups: 0.2,
  /** One at each end of the chain. */
  mostAldehydeGroups: 2,
  chanceOfKetoneGroups: 0.2,
  mostKetoneGroups: 2,
  chanceOfCarboxylicAcidGroups: 0.2,
  /** One at each end of the chain. */
  mostCarboxylicAcidGroups: 2,
  /** Ring molecules are rejected and tried again less often than chains, so this gives about 1 molecule in 5. */
  chanceOfRing: 0.12,
  smallestRing: 3,
  biggestRing: 6,
  mostMethylGroupsOnRing: 2,
  mostEthylGroupsOnRing: 1,
  chanceOfDoubleBondInRing: 0.3,
  chanceOfDoubleBondInChain: 0.25,
  /** With "Harder molecules" ticked, how often a molecule with a C=C has a second one (a diene). */
  chanceOfSecondDoubleBond: 0.5,
  /**
   * With "E/Z isomers more often" ticked, the share of molecules (out of 1) made an alkene with
   * E and Z forms on purpose. About 1 molecule in 20 has them anyway, so together about 1 in 5 do.
   * Always a chain: a C=C in a ring of 3 to 6 carbons can only be Z, so it has no E and Z forms.
   */
  shareOfEAndZIsomers: 0.15,
  /** A ring needs at least this many carbons for a second C=C that isn't next to the first. */
  smallestRingWithTwoDoubleBonds: 5,
  /**
   * With "Harder molecules" unticked, the molecules are simpler: fewer side chains, no more
   * than one OH, CHO, C=O or COOH group (but still up to two halogen atoms, as in
   * 1,2-dibromoethane), groups of at most two kinds, and one C=C at most. Shorter main
   * chains come up more often, by these weights (longer chains, with "Long main chains"
   * ticked, each have weightOfLongerChains).
   */
  simplerMolecules: {
    mostMethylGroups: 2,
    mostEthylGroups: 1,
    mostOfEachGroup: 1,
    mostKindsOfGroup: 2,
    mainChainWeights: { 3: 6, 4: 10, 5: 10, 6: 6, 7: 3, 8: 2 },
    weightOfLongerChains: 2,
  },
};

/**
 * The molecule the app shows when it first opens is simpler still (see generateStartingMolecule):
 * a main chain or ring of at most 5 carbons, and at most one group of any kind, counting each
 * halogen atom, OH, CHO, C=O, COOH group and C=C as one, as in 2-methylbutane, propan-2-ol,
 * pent-1-ene or cyclopentanone.
 */
export const STARTING_MOLECULE_SETTINGS = {
  longestMainChain: 5,
  mostGroups: 1,
};

/** A whole number from smallest to largest, both included, each as likely as its weight(number). */
function pickWeightedWholeNumber(smallest, largest, weight, randomNumberGenerator) {
  const numbers = Array.from({ length: largest - smallest + 1 }, (_, index) => smallest + index);
  let remaining = randomNumberGenerator() * numbers.reduce((total, number) => total + weight(number), 0);
  for (const number of numbers) {
    remaining -= weight(number);
    if (remaining < 0) return number;
  }
  return largest;
}

/** The kinds of molecule this file can make (see practiceFeatures.js). */
const KINDS_PRACTICE_CAN_MAKE = PRACTICE_FEATURES.filter(({ isKindOfMolecule, isSupported }) => isKindOfMolecule && isSupported).map(({ id }) => id);

/**
 * Builds the molecule, and if a double bond has E and Z forms, builds it again with that bond
 * E or Z at random, so it is never drawn in a straight line, which shows neither.
 * Returns what buildCarbonSkeletonFromDescription returns, or null if it can't be drawn E or Z,
 * if it has E and Z forms when canHaveEAndZForms is false, or if it has none when
 * mustHaveEAndZForms is true.
 */
function buildWithEOrZAtRandom(description, randomNumberGenerator, { canHaveEAndZForms, mustHaveEAndZForms }) {
  const buildResult = buildCarbonSkeletonFromDescription(description);
  if (buildResult.errorMessage) return buildResult;
  const configurations = description.mainChainDoubleBondLocants?.length ? describeEveryDoubleBond(buildResult.carbonSkeleton) : new Map();
  if (![...configurations.values()].includes('unspecified')) return mustHaveEAndZForms ? null : buildResult;
  if (!canHaveEAndZForms) return null;
  const mainChainStereo = description.mainChainDoubleBondLocants.map((locant) => ({ locant, descriptor: randomNumberGenerator() < 0.5 ? 'E' : 'Z' }));
  const withStereo = buildCarbonSkeletonFromDescription({ ...description, mainChainStereo });
  if (withStereo.errorMessage) return withStereo;
  return [...describeEveryDoubleBond(withStereo.carbonSkeleton).values()].includes('unspecified') ? null : withStereo;
}

const MOST_ATTEMPTS_BEFORE_GIVING_UP = 500;

/** A whole number from smallest to largest, both included. */
export function pickRandomWholeNumber(smallest, largest, randomNumberGenerator) {
  return smallest + Math.floor(randomNumberGenerator() * (largest - smallest + 1));
}

/**
 * Returns { carbonSkeleton, iupacName }.
 * randomNumberGenerator: a function returning a number from 0 up to (not including) 1.
 *   Tests pass in a predictable one; the app uses Math.random.
 * nameToAvoid: pass the current molecule's name so the student doesn't get the same one twice in a row.
 * tickedFeatureIds: what the molecule can have in it (see practiceFeatures.js); Intro to Carbon Chemistry
 *   if left out. Features that aren't ticked are never in it.
 * limits: optional { longestMainChain, mostGroups }, to make molecules smaller than the ticked
 *   features would: longestMainChain caps the main chain and the ring, and mostGroups the number
 *   of halogen atoms, OH, CHO, C=O and COOH groups and C=C bonds together.
 */
export function generateRandomGuessMolecule({
  randomNumberGenerator = Math.random,
  nameToAvoid = null,
  tickedFeatureIds = PRACTICE_PRESETS[DEFAULT_PRACTICE_PRESET],
  limits = {},
} = {}) {
  const isOn = (featureId) => isPracticeFeatureInUse(tickedFeatureIds, featureId);
  const kindsOfMolecule = KINDS_PRACTICE_CAN_MAKE.filter(isOn);
  // With no kind of molecule ticked there is nothing else to make, so make alkanes.
  const canMakePlainAlkanes = isOn('alkanes') || kindsOfMolecule.length === 0;
  const otherKinds = kindsOfMolecule.filter((kind) => kind !== 'alkanes');
  // A chain can be made unless the only kind ticked is rings.
  const canMakeChains = canMakePlainAlkanes || otherKinds.some((kind) => kind !== 'cycloalkanes');
  const longestMainChain = Math.min(
    isOn('longChains') ? GUESS_MODE_SETTINGS.longestMainChainWithLongChains : GUESS_MODE_SETTINGS.longestMainChain,
    limits.longestMainChain ?? Infinity,
  );
  const biggestRing = Math.min(GUESS_MODE_SETTINGS.biggestRing, limits.longestMainChain ?? Infinity);
  const isHarder = isOn('harderMolecules');
  const simpler = GUESS_MODE_SETTINGS.simplerMolecules;
  /** The most of a group in one molecule: fewer unless "Harder molecules" is ticked. */
  const mostOf = (mostWhenHarder, mostWhenSimpler = simpler.mostOfEachGroup) => (isHarder ? mostWhenHarder : Math.min(mostWhenHarder, mostWhenSimpler));
  const chainLengthWeight = (carbonCount) => simpler.mainChainWeights[carbonCount] ?? simpler.weightOfLongerChains;
  // Picked once, before the attempts, so molecules tried again don't change how often it happens.
  const mustHaveEAndZForms = isOn('ezIsomersMoreOften') && canMakeChains && randomNumberGenerator() < GUESS_MODE_SETTINGS.shareOfEAndZIsomers;

  for (let attempt = 0; attempt < MOST_ATTEMPTS_BEFORE_GIVING_UP; attempt++) {
    const kindItMustBe = canMakePlainAlkanes ? null : otherKinds[pickRandomWholeNumber(0, otherKinds.length - 1, randomNumberGenerator)];
    /** Whether this molecule has a kind of molecule in it: never if unticked, always if it is the one it must be. */
    const has = (kind, chance) => isOn(kind) && (kind === kindItMustBe || (kind === 'alkenes' && mustHaveEAndZForms) || randomNumberGenerator() < chance);

    const isRing = !mustHaveEAndZForms && isOn('cycloalkanes') && (!canMakeChains || has('cycloalkanes', GUESS_MODE_SETTINGS.chanceOfRing));
    const mainChainCarbonCount = isRing
      ? pickRandomWholeNumber(GUESS_MODE_SETTINGS.smallestRing, biggestRing, randomNumberGenerator)
      : isHarder
        ? pickRandomWholeNumber(GUESS_MODE_SETTINGS.shortestMainChain, longestMainChain, randomNumberGenerator)
        : pickWeightedWholeNumber(GUESS_MODE_SETTINGS.shortestMainChain, longestMainChain, chainLengthWeight, randomNumberGenerator);
    const pickBranchCount = (most) => (isOn('branches') ? pickRandomWholeNumber(0, most, randomNumberGenerator) : 0);
    const methylGroupCount = pickBranchCount(
      mostOf(isRing ? GUESS_MODE_SETTINGS.mostMethylGroupsOnRing : GUESS_MODE_SETTINGS.mostMethylGroups, simpler.mostMethylGroups),
    );
    const ethylGroupCount = pickBranchCount(
      mostOf(isRing ? GUESS_MODE_SETTINGS.mostEthylGroupsOnRing : GUESS_MODE_SETTINGS.mostEthylGroups, simpler.mostEthylGroups),
    );
    /** How many kinds of group (halogens, OH, CHO, C=O, COOH, C=C) the molecule has, as simpler molecules have at most two. */
    let groupKindCount = 0;

    // A ring has no ends: every carbon is an inner one.
    const pickAnyCarbon = () => pickRandomWholeNumber(1, mainChainCarbonCount, randomNumberGenerator);
    const pickInnerChainCarbon = isRing ? pickAnyCarbon : () => pickRandomWholeNumber(2, mainChainCarbonCount - 1, randomNumberGenerator);
    const substituents = [
      ...Array.from({ length: methylGroupCount }, () => ({ locant: pickInnerChainCarbon(), substituentCarbonCount: 1 })),
      ...Array.from({ length: ethylGroupCount }, () => ({ locant: pickInnerChainCarbon(), substituentCarbonCount: 2 })),
    ];
    if (has('haloalkanes', GUESS_MODE_SETTINGS.chanceOfHalogens)) {
      groupKindCount++;
      const halogenCount = pickRandomWholeNumber(1, GUESS_MODE_SETTINGS.mostHalogenAtoms, randomNumberGenerator);
      for (let added = 0; added < halogenCount; added++) {
        substituents.push({
          locant: pickRandomWholeNumber(1, mainChainCarbonCount, randomNumberGenerator),
          halogen: HALOGEN_SYMBOLS[pickRandomWholeNumber(0, HALOGEN_SYMBOLS.length - 1, randomNumberGenerator)],
        });
      }
    }

    if (has('alcohols', GUESS_MODE_SETTINGS.chanceOfHydroxylGroups)) {
      groupKindCount++;
      const hydroxylCount = pickRandomWholeNumber(1, mostOf(GUESS_MODE_SETTINGS.mostHydroxylGroups), randomNumberGenerator);
      for (let added = 0; added < hydroxylCount; added++) {
        substituents.push({ locant: pickRandomWholeNumber(1, mainChainCarbonCount, randomNumberGenerator), isHydroxy: true });
      }
    }

    // On a ring, CHO and COOH are joined to it with their own carbon, and one is enough.
    // A CHO on a ring (cyclohexanecarbaldehyde) only in harder molecules.
    const chainEnds = isRing ? [pickAnyCarbon()] : [1, mainChainCarbonCount];
    const canHaveAldehydeGroups = isHarder || !isRing;
    if (!canHaveAldehydeGroups && kindItMustBe === 'aldehydes') continue;
    if (canHaveAldehydeGroups && has('aldehydes', GUESS_MODE_SETTINGS.chanceOfAldehydeGroups)) {
      groupKindCount++;
      const aldehydeCount = isRing ? 1 : pickRandomWholeNumber(1, mostOf(GUESS_MODE_SETTINGS.mostAldehydeGroups), randomNumberGenerator);
      for (let added = 0; added < aldehydeCount; added++) substituents.push({ locant: chainEnds[added], isAldehyde: true });
    }

    if (has('ketones', GUESS_MODE_SETTINGS.chanceOfKetoneGroups)) {
      groupKindCount++;
      const ketoneCount = pickRandomWholeNumber(1, mostOf(GUESS_MODE_SETTINGS.mostKetoneGroups), randomNumberGenerator);
      for (let added = 0; added < ketoneCount; added++) substituents.push({ locant: pickInnerChainCarbon(), isKetone: true });
    }

    if (has('carboxylicAcids', GUESS_MODE_SETTINGS.chanceOfCarboxylicAcidGroups)) {
      groupKindCount++;
      const acidCount = isRing ? 1 : pickRandomWholeNumber(1, mostOf(GUESS_MODE_SETTINGS.mostCarboxylicAcidGroups), randomNumberGenerator);
      for (let added = 0; added < acidCount; added++) substituents.push({ locant: chainEnds[added], isCarboxylicAcid: true });
    }

    const chanceOfDoubleBond = isRing ? GUESS_MODE_SETTINGS.chanceOfDoubleBondInRing : GUESS_MODE_SETTINGS.chanceOfDoubleBondInChain;
    const pickDoubleBondLocant = isRing ? pickAnyCarbon : () => pickRandomWholeNumber(1, mainChainCarbonCount - 1, randomNumberGenerator);
    const mainChainDoubleBondLocants = has('alkenes', chanceOfDoubleBond) ? [pickDoubleBondLocant()] : [];
    if (mainChainDoubleBondLocants.length) groupKindCount++;
    if (!isHarder && groupKindCount > simpler.mostKindsOfGroup) continue;
    // A second C=C only in harder molecules, and never sharing a carbon with the first (no C=C=C).
    if (isHarder && mainChainDoubleBondLocants.length && randomNumberGenerator() < GUESS_MODE_SETTINGS.chanceOfSecondDoubleBond) {
      const [firstLocant] = mainChainDoubleBondLocants;
      const lastLocant = isRing ? mainChainCarbonCount : mainChainCarbonCount - 1;
      const sharesACarbon = (locant) => {
        const gap = Math.abs(locant - firstLocant);
        return gap <= 1 || (isRing && gap === lastLocant - 1);
      };
      const freeLocants = Array.from({ length: lastLocant }, (_, index) => index + 1).filter((locant) => !sharesACarbon(locant));
      const roomForSecond = !isRing || mainChainCarbonCount >= GUESS_MODE_SETTINGS.smallestRingWithTwoDoubleBonds;
      if (roomForSecond && freeLocants.length) {
        mainChainDoubleBondLocants.push(freeLocants[pickRandomWholeNumber(0, freeLocants.length - 1, randomNumberGenerator)]);
      }
    }

    const groupCount = substituents.filter(({ substituentCarbonCount }) => !substituentCarbonCount).length + mainChainDoubleBondLocants.length;
    if (groupCount > (limits.mostGroups ?? Infinity)) continue;

    const isPlainAlkane = !isRing && !mainChainDoubleBondLocants.length && substituents.every(({ substituentCarbonCount }) => substituentCarbonCount);
    if (isPlainAlkane && !canMakePlainAlkanes) continue;

    const description = { mainChainCarbonCount, mainChainDoubleBondLocants, substituents, isRing };
    const buildResult = buildWithEOrZAtRandom(description, randomNumberGenerator, { canHaveEAndZForms: isOn('ezIsomers'), mustHaveEAndZForms });
    if (buildResult === null || buildResult.errorMessage) continue;
    if (isUnstableAlcohol(buildResult.carbonSkeleton) || !everyCarbonylIsInAnAldehydeKetoneOrAcid(buildResult.carbonSkeleton)) continue;

    const namingResult = nameCarbonSkeleton(buildResult.carbonSkeleton);
    if (!namingResult.isNameable) continue;
    if (namingResult.mainChainCarbonCount !== mainChainCarbonCount || (namingResult.isRing === true) !== isRing) continue;
    if (namingResult.iupacName === nameToAvoid) continue;

    return { carbonSkeleton: buildResult.carbonSkeleton, iupacName: namingResult.iupacName };
  }

  // Practically unreachable, but always return something sensible.
  const fallback = buildCarbonSkeletonFromDescription({ mainChainCarbonCount: 5, substituents: [{ locant: 2, substituentCarbonCount: 1 }] });
  return { carbonSkeleton: fallback.carbonSkeleton, iupacName: '2-methylpentane' };
}

/**
 * The molecule the app shows when it first opens: an Intro to Carbon Chemistry practice molecule kept within
 * STARTING_MOLECULE_SETTINGS, and without "E/Z isomers more often", so the first thing a student sees is easy to follow.
 * Returns { carbonSkeleton, iupacName }, as generateRandomGuessMolecule does.
 */
export function generateStartingMolecule({ randomNumberGenerator = Math.random } = {}) {
  // E/Z isomers can still come up, but not more often than usual: the first molecule should be easy.
  const tickedFeatureIds = PRACTICE_PRESETS[DEFAULT_PRACTICE_PRESET].filter((id) => id !== 'ezIsomersMoreOften');
  return generateRandomGuessMolecule({ randomNumberGenerator, tickedFeatureIds, limits: STARTING_MOLECULE_SETTINGS });
}
