import { describe, expect, it } from 'vitest';
import {
  canChangePracticeFeature,
  countFeaturesNeeded,
  findFeatureToTickFirst,
  findPracticePreset,
  isPracticeFeatureInUse,
  PRACTICE_FEATURES,
  PRACTICE_PRESETS,
  togglePracticeFeature,
} from '../../../src/chemistry/practiceFeatures.js';

describe('practice features', () => {
  it('A-level practice has every supported A-level feature, but not long main chains', () => {
    expect(PRACTICE_PRESETS.aLevel).toEqual(expect.arrayContaining(['alkanes', 'branches', 'cycloalkanes', 'alkenes', 'ezIsomers', 'haloalkanes']));
    expect(PRACTICE_PRESETS.aLevel).not.toContain('longChains');
    expect(PRACTICE_PRESETS.allSupported).toContain('longChains');
  });

  it('A-level harder practice is A-level practice with harder molecules', () => {
    expect(PRACTICE_PRESETS.aLevel).not.toContain('harderMolecules');
    expect(PRACTICE_PRESETS.aLevelHarder.filter((id) => id !== 'harderMolecules')).toEqual(PRACTICE_PRESETS.aLevel);
    expect(PRACTICE_PRESETS.allSupported).toContain('harderMolecules');
    expect(findPracticePreset([...PRACTICE_PRESETS.aLevel, 'harderMolecules'])).toBe('aLevelHarder');
  });

  it('no preset ticks a feature practice cannot make yet', () => {
    const unsupported = PRACTICE_FEATURES.filter(({ isSupported }) => !isSupported).map(({ id }) => id);
    expect(unsupported).toEqual(expect.arrayContaining(['esters', 'amines', 'nitriles']));
    for (const presetIds of Object.values(PRACTICE_PRESETS)) expect(presetIds.some((id) => unsupported.includes(id))).toBe(false);
  });

  it('finds the preset that matches the ticks, in any order, or null', () => {
    expect(findPracticePreset([...PRACTICE_PRESETS.aLevel].reverse())).toBe('aLevel');
    expect(findPracticePreset(PRACTICE_PRESETS.allSupported)).toBe('allSupported');
    expect(findPracticePreset(['alkanes'])).toBeNull();
  });

  it('cannot tick an unsupported feature, or E/Z isomers without alkenes', () => {
    expect(canChangePracticeFeature(['alkanes'], 'esters')).toBe(false);
    expect(canChangePracticeFeature(['alkanes'], 'ezIsomers')).toBe(false);
    expect(canChangePracticeFeature(['alkanes', 'alkenes'], 'ezIsomers')).toBe(true);
    expect(isPracticeFeatureInUse(['alkanes', 'ezIsomers'], 'ezIsomers')).toBe(false);
  });

  it('both Intro to Carbon Chemistry presets have E/Z isomers more often ticked', () => {
    expect(PRACTICE_PRESETS.aLevel).toContain('ezIsomersMoreOften');
    expect(PRACTICE_PRESETS.aLevelHarder).toContain('ezIsomersMoreOften');
  });

  it('E/Z isomers more often needs E/Z isomers in use, which needs alkenes', () => {
    expect(canChangePracticeFeature(['alkanes', 'alkenes'], 'ezIsomersMoreOften')).toBe(false);
    expect(canChangePracticeFeature(['alkanes', 'ezIsomers'], 'ezIsomersMoreOften')).toBe(false);
    expect(canChangePracticeFeature(['alkanes', 'alkenes', 'ezIsomers'], 'ezIsomersMoreOften')).toBe(true);
    expect(isPracticeFeatureInUse(['alkanes', 'ezIsomers', 'ezIsomersMoreOften'], 'ezIsomersMoreOften')).toBe(false);
    expect(isPracticeFeatureInUse(['alkanes', 'alkenes', 'ezIsomersMoreOften'], 'ezIsomersMoreOften')).toBe(false);
    expect(isPracticeFeatureInUse(['alkanes', 'alkenes', 'ezIsomers', 'ezIsomersMoreOften'], 'ezIsomersMoreOften')).toBe(true);
  });

  it('says which feature to tick first, and how far in to indent each feature', () => {
    expect(findFeatureToTickFirst(['alkanes'], 'ezIsomersMoreOften')).toBe('alkenes');
    expect(findFeatureToTickFirst(['alkanes', 'alkenes'], 'ezIsomersMoreOften')).toBe('ezIsomers');
    expect(findFeatureToTickFirst(['alkanes', 'alkenes', 'ezIsomers'], 'ezIsomersMoreOften')).toBeNull();
    expect(findFeatureToTickFirst(['alkanes'], 'branches')).toBeNull();
    expect(countFeaturesNeeded('alkenes')).toBe(0);
    expect(countFeaturesNeeded('ezIsomers')).toBe(1);
    expect(countFeaturesNeeded('ezIsomersMoreOften')).toBe(2);
  });

  it('cannot untick the last kind of molecule', () => {
    expect(togglePracticeFeature(['alkanes', 'branches'], 'alkanes')).toEqual(['alkanes', 'branches']);
    expect(togglePracticeFeature(['alkanes', 'alcohols'], 'alkanes')).toEqual(['alcohols']);
    expect(togglePracticeFeature(['alkanes'], 'branches')).toEqual(['alkanes', 'branches']);
  });
});
