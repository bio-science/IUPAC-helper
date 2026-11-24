import { describe, expect, it } from 'vitest';
import { hasPracticeMoleculeChanged } from '../../../src/chemistry/hasPracticeMoleculeChanged.js';
import { interpretOmniboxText } from '../../../src/chemistry/interpretOmniboxText.js';
import { nameCarbonSkeleton } from '../../../src/chemistry/nameCarbonSkeleton.js';
import { swapEAndZOfDoubleBond } from '../../../src/geometry/arrangeDoubleBonds.js';
import { createEmptyCarbonSkeleton } from '../../../src/chemistry/carbonSkeleton.js';

describe('hasPracticeMoleculeChanged', () => {
  const { carbonSkeleton } = interpretOmniboxText('(2E)-pent-2-ene');
  const practiceName = nameCarbonSkeleton(carbonSkeleton).iupacName;

  it('is false when not practising, or when the drawing is still the practice molecule', () => {
    expect(hasPracticeMoleculeChanged(null, nameCarbonSkeleton(carbonSkeleton))).toBe(false);
    expect(hasPracticeMoleculeChanged(practiceName, nameCarbonSkeleton(carbonSkeleton))).toBe(false);
  });

  it('is true when a C=C has been turned from E to Z, or the drawing cleared', () => {
    const { firstAtomId, secondAtomId } = carbonSkeleton.carbonCarbonBonds.find(({ bondOrder }) => bondOrder === 2);
    const swapped = swapEAndZOfDoubleBond(carbonSkeleton, firstAtomId, secondAtomId);
    expect(nameCarbonSkeleton(swapped).iupacName).toBe('(2Z)-pent-2-ene');
    expect(hasPracticeMoleculeChanged(practiceName, nameCarbonSkeleton(swapped))).toBe(true);
    expect(hasPracticeMoleculeChanged(practiceName, nameCarbonSkeleton(createEmptyCarbonSkeleton()))).toBe(true);
  });
});
