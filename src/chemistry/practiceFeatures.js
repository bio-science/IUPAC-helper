/**
 * What the random practice molecules can have in them, so a student can choose what to
 * practise: each feature is one tickbox in the app, and generateRandomGuessMolecule.js only
 * makes molecules from the ones ticked.
 *
 * There are three sorts of feature:
 *   - kinds of molecule (isKindOfMolecule): alkanes, cycloalkanes, alkenes, haloalkanes ...
 *     At least one must be ticked, or there is nothing to make. With "alkanes" ticked, some
 *     molecules are plain alkanes; without it, every molecule has at least one of the others.
 *   - choices about those molecules: branches, E/Z isomers, long chains, harder molecules. A choice that only
 *     makes sense with another feature names it in needsFeature (E/Z needs alkenes, and E/Z more
 *     often needs E/Z), and is only in use while that feature is in use too.
 *   - kinds of molecule A-level students meet that practice can't make yet (isSupported:
 *     false). The app shows them greyed out, so it is clear what is still to come.
 *
 * Each feature's text is the message key practise.features.<id>.
 *
 * The A-level list follows section 3.3 (Organic chemistry) of the AQA A-level Chemistry
 * specification 7405: alkanes 3.3.2, rings 3.3.1.1, halogenoalkanes 3.3.3, alkenes 3.3.4,
 * E/Z isomers 3.3.1.3, alcohols 3.3.5, aldehydes and ketones 3.3.8, carboxylic acids and
 * esters 3.3.9.1, acyl chlorides, acid anhydrides and amides 3.3.9.2, nitriles 3.3.8 and
 * 3.3.11.1, arenes 3.3.10, amines 3.3.11, amino acids 3.3.13.1.
 */

export const PRACTICE_FEATURES = [
  { id: 'alkanes', isSupported: true, isKindOfMolecule: true, isInALevelPractice: true },
  { id: 'branches', isSupported: true, isInALevelPractice: true },
  { id: 'cycloalkanes', isSupported: true, isKindOfMolecule: true, isInALevelPractice: true },
  { id: 'alkenes', isSupported: true, isKindOfMolecule: true, isInALevelPractice: true },
  { id: 'ezIsomers', isSupported: true, needsFeature: 'alkenes', isInALevelPractice: true },
  /** About 1 molecule in 5 is an alkene with E and Z forms (see GUESS_MODE_SETTINGS.shareOfEAndZIsomers). */
  { id: 'ezIsomersMoreOften', isSupported: true, needsFeature: 'ezIsomers', isInALevelPractice: true },
  { id: 'haloalkanes', isSupported: true, isKindOfMolecule: true, isInALevelPractice: true },
  { id: 'alcohols', isSupported: true, isKindOfMolecule: true, isInALevelPractice: true },
  { id: 'aldehydes', isSupported: true, isKindOfMolecule: true, isInALevelPractice: true },
  { id: 'ketones', isSupported: true, isKindOfMolecule: true, isInALevelPractice: true },
  { id: 'carboxylicAcids', isSupported: true, isKindOfMolecule: true, isInALevelPractice: true },
  /** Main chains longer than A-level questions usually go (see GUESS_MODE_SETTINGS). */
  { id: 'longChains', isSupported: true, isInALevelPractice: false },
  /** More groups, a second C=C and longer chains more often; on in Intro to Carbon Chemistry +hard. */
  { id: 'harderMolecules', isSupported: true, isInALevelPractice: false },
  { id: 'esters', isSupported: false, isKindOfMolecule: true, isInALevelPractice: true },
  { id: 'acylChlorides', isSupported: false, isKindOfMolecule: true, isInALevelPractice: true },
  { id: 'acidAnhydrides', isSupported: false, isKindOfMolecule: true, isInALevelPractice: true },
  { id: 'amines', isSupported: false, isKindOfMolecule: true, isInALevelPractice: true },
  { id: 'amides', isSupported: false, isKindOfMolecule: true, isInALevelPractice: true },
  { id: 'nitriles', isSupported: false, isKindOfMolecule: true, isInALevelPractice: true },
  { id: 'aminoAcids', isSupported: false, isKindOfMolecule: true, isInALevelPractice: true },
  { id: 'arenes', isSupported: false, isKindOfMolecule: true, isInALevelPractice: true },
];

const featureWithId = new Map(PRACTICE_FEATURES.map((feature) => [feature.id, feature]));

const A_LEVEL_FEATURE_IDS = PRACTICE_FEATURES.filter(({ isSupported, isInALevelPractice }) => isSupported && isInALevelPractice).map(({ id }) => id);

/** The ready-made choices: Intro to Carbon Chemistry, the same with harder molecules, and every feature practice can make. */
export const PRACTICE_PRESETS = {
  aLevel: A_LEVEL_FEATURE_IDS,
  aLevelHarder: [...A_LEVEL_FEATURE_IDS, 'harderMolecules'],
  allSupported: PRACTICE_FEATURES.filter(({ isSupported }) => isSupported).map(({ id }) => id),
};

export const DEFAULT_PRACTICE_PRESET = 'aLevel';

/** Which preset has exactly these features ticked ('aLevel', 'aLevelHarder' or 'allSupported'), or null if none does. */
export function findPracticePreset(tickedFeatureIds) {
  const ticked = new Set(tickedFeatureIds);
  const matches = (presetIds) => presetIds.length === ticked.size && presetIds.every((id) => ticked.has(id));
  return Object.keys(PRACTICE_PRESETS).find((presetName) => matches(PRACTICE_PRESETS[presetName])) ?? null;
}

/**
 * Whether a feature's tickbox can be changed: not if practice can't make it yet, not if the
 * feature it needs is unticked, and not if it is the last kind of molecule still ticked.
 */
export function canChangePracticeFeature(tickedFeatureIds, featureId) {
  const feature = featureWithId.get(featureId);
  if (!feature?.isSupported) return false;
  const ticked = new Set(tickedFeatureIds);
  if (feature.needsFeature && !isPracticeFeatureInUse(tickedFeatureIds, feature.needsFeature)) return false;
  if (feature.isKindOfMolecule && ticked.has(featureId)) {
    return PRACTICE_FEATURES.some(({ id, isKindOfMolecule }) => isKindOfMolecule && id !== featureId && ticked.has(id));
  }
  return true;
}

/** The ticked features with one ticked or unticked, if it can be changed (see canChangePracticeFeature). */
export function togglePracticeFeature(tickedFeatureIds, featureId) {
  if (!canChangePracticeFeature(tickedFeatureIds, featureId)) return tickedFeatureIds;
  return tickedFeatureIds.includes(featureId) ? tickedFeatureIds.filter((id) => id !== featureId) : [...tickedFeatureIds, featureId];
}

/**
 * Whether a ticked feature is in use: a choice whose needed feature is not in use does nothing
 * (E/Z isomers with no alkenes, or E/Z more often with no E/Z isomers), and practice can't make
 * an unsupported one.
 */
export function isPracticeFeatureInUse(tickedFeatureIds, featureId) {
  const feature = featureWithId.get(featureId);
  if (!feature?.isSupported || !tickedFeatureIds.includes(featureId)) return false;
  return !feature.needsFeature || isPracticeFeatureInUse(tickedFeatureIds, feature.needsFeature);
}

/**
 * Which feature has to be ticked before this one can be changed, or null if none: with
 * alkenes and E/Z isomers both unticked, E/Z more often needs alkenes ticked first.
 */
export function findFeatureToTickFirst(tickedFeatureIds, featureId) {
  const neededId = featureWithId.get(featureId)?.needsFeature;
  if (!neededId || isPracticeFeatureInUse(tickedFeatureIds, neededId)) return null;
  return findFeatureToTickFirst(tickedFeatureIds, neededId) ?? neededId;
}

/** How many features this one needs in turn: 0 for alkenes, 1 for E/Z isomers, 2 for E/Z more often. The app indents it this many steps. */
export function countFeaturesNeeded(featureId) {
  const neededId = featureWithId.get(featureId)?.needsFeature;
  return neededId ? 1 + countFeaturesNeeded(neededId) : 0;
}
