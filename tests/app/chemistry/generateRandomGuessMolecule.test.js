import { describe, expect, it } from 'vitest';
import { generateRandomGuessMolecule, generateStartingMolecule, GUESS_MODE_SETTINGS, STARTING_MOLECULE_SETTINGS } from '../../../src/chemistry/generateRandomGuessMolecule.js';
import { nameCarbonSkeleton } from '../../../src/chemistry/nameCarbonSkeleton.js';
import { describeEveryDoubleBond } from '../../../src/chemistry/doubleBondConfiguration.js';
import { bendChainsAtRandom } from '../../../src/geometry/bendChainsAtRandom.js';
import { PRACTICE_PRESETS } from '../../../src/chemistry/practiceFeatures.js';
import { isDoubleBond } from '../../../src/chemistry/carbonSkeleton.js';

/** A predictable stand-in for Math.random, so the test gives the same result every run. */
function createPredictableRandomNumberGenerator(seed) {
  let state = seed;
  return () => {
    state = (state * 1103515245 + 12345) % 2147483648;
    return state / 2147483648;
  };
}

describe('generateRandomGuessMolecule', () => {
  it('always makes a nameable molecule with a 3 to 8 carbon main chain, or a ring of 3 to 6 carbons', () => {
    const randomNumberGenerator = createPredictableRandomNumberGenerator(42);
    for (let attempt = 0; attempt < 300; attempt++) {
      const { carbonSkeleton, iupacName } = generateRandomGuessMolecule({ randomNumberGenerator });
      const namingResult = nameCarbonSkeleton(carbonSkeleton);
      expect(namingResult.isNameable).toBe(true);
      expect(namingResult.iupacName).toBe(iupacName);
      const [smallest, biggest] = namingResult.isRing
        ? [GUESS_MODE_SETTINGS.smallestRing, GUESS_MODE_SETTINGS.biggestRing]
        : [GUESS_MODE_SETTINGS.shortestMainChain, GUESS_MODE_SETTINGS.longestMainChain];
      expect(namingResult.mainChainCarbonCount).toBeGreaterThanOrEqual(smallest);
      expect(namingResult.mainChainCarbonCount).toBeLessThanOrEqual(biggest);
      const allowedNames = ['methyl', 'ethyl', 'fluoro', 'chloro', 'bromo', 'iodo', 'hydroxy', 'oxo', 'carboxy', 'formyl'];
      expect(namingResult.substituents.every((substituent) => allowedNames.includes(substituent.substituentName))).toBe(true);
    }
  });

  it('sometimes mixes methyl and ethyl groups in one molecule', () => {
    const randomNumberGenerator = createPredictableRandomNumberGenerator(7);
    const names = Array.from({ length: 200 }, () => generateRandomGuessMolecule({ randomNumberGenerator }).iupacName);
    expect(names.some((name) => name.includes('ethyl-') && name.includes('methyl'))).toBe(true);
  });

  it('sometimes adds halogens, but mostly makes alkanes', () => {
    const randomNumberGenerator = createPredictableRandomNumberGenerator(3);
    const names = Array.from({ length: 200 }, () => generateRandomGuessMolecule({ randomNumberGenerator }).iupacName);
    const haloalkaneCount = names.filter((name) => /fluoro|chloro|bromo|iodo/.test(name)).length;
    expect(haloalkaneCount).toBeGreaterThan(20);
    expect(haloalkaneCount).toBeLessThan(100);
  });

  it('sometimes makes alcohols, never with two OH groups on one carbon', () => {
    const randomNumberGenerator = createPredictableRandomNumberGenerator(5);
    // Harder molecules, as simpler ones have only one OH group.
    const tickedFeatureIds = PRACTICE_PRESETS.aLevelHarder;
    const names = Array.from({ length: 200 }, () => generateRandomGuessMolecule({ randomNumberGenerator, tickedFeatureIds }).iupacName);
    const alcoholNames = names.filter((name) => name.endsWith('ol'));
    expect(alcoholNames.length).toBeGreaterThan(20);
    expect(alcoholNames.length).toBeLessThan(100);
    expect(alcoholNames.some((name) => name.endsWith('diol'))).toBe(true);
    for (const name of alcoholNames.filter((alcoholName) => alcoholName.endsWith('diol'))) {
      const [, locants] = name.match(/-(\d+,\d+)-diol$/);
      const [first, second] = locants.split(',');
      expect(first).not.toBe(second);
    }
  });

  it('sometimes makes aldehydes, with their CHO groups at the chain ends', () => {
    const randomNumberGenerator = createPredictableRandomNumberGenerator(11);
    const molecules = Array.from({ length: 200 }, () => generateRandomGuessMolecule({ randomNumberGenerator }));
    const aldehydes = molecules.filter(({ iupacName }) => /al$/.test(iupacName));
    expect(aldehydes.length).toBeGreaterThan(10);
    expect(aldehydes.length).toBeLessThan(100);
    for (const { iupacName } of aldehydes) expect(iupacName).not.toMatch(/-\d+(,\d+)?-(di)?al$/);
  });

  it('sometimes makes ketones, with their C=O groups on inner carbons', () => {
    const randomNumberGenerator = createPredictableRandomNumberGenerator(23);
    const molecules = Array.from({ length: 400 }, () => generateRandomGuessMolecule({ randomNumberGenerator }));
    const ketones = molecules.filter(({ iupacName }) => /one$|oxo/.test(iupacName));
    expect(ketones.length).toBeGreaterThan(20);
    expect(ketones.length).toBeLessThan(200);
    // The locants of -one are always written on a chain (P-14.3.4.4), but not in cyclohexanone (P-14.3.4.2).
    const chainKetones = ketones.filter(({ iupacName }) => /one$/.test(iupacName) && !/^[a-z]*cyclo[a-z]+anone$/.test(iupacName));
    for (const { iupacName } of chainKetones) expect(iupacName).toMatch(/-\d+(,\d+)*-(di)?one$/);
  });

  it('sometimes makes carboxylic acids, with no locants for their COOH groups', () => {
    const randomNumberGenerator = createPredictableRandomNumberGenerator(31);
    const molecules = Array.from({ length: 200 }, () => generateRandomGuessMolecule({ randomNumberGenerator }));
    const acids = molecules.filter(({ iupacName }) => / acid$/.test(iupacName));
    expect(acids.length).toBeGreaterThan(10);
    expect(acids.length).toBeLessThan(100);
    for (const { iupacName } of acids) expect(iupacName).toMatch(/[a-z]oic acid$|cyclo[a-z-\d,]+carboxylic acid$/);
  });

  it('sometimes makes rings, about one molecule in five', () => {
    const randomNumberGenerator = createPredictableRandomNumberGenerator(13);
    const molecules = Array.from({ length: 200 }, () => generateRandomGuessMolecule({ randomNumberGenerator }));
    const rings = molecules.filter(({ carbonSkeleton }) => nameCarbonSkeleton(carbonSkeleton).isRing);
    expect(rings.length).toBeGreaterThan(20);
    expect(rings.length).toBeLessThan(70);
    for (const { iupacName } of rings) expect(iupacName).toMatch(/cyclo/);
    expect(rings.some(({ iupacName }) => /cyclo[a-z]+-\d+-en/.test(iupacName) || /cyclo[a-z]+ene/.test(iupacName))).toBe(true);
  });

  it('sometimes makes alkenes, drawn E or Z where they have E and Z forms, and never a C=C that shows neither', () => {
    const randomNumberGenerator = createPredictableRandomNumberGenerator(5);
    const molecules = Array.from({ length: 200 }, () => generateRandomGuessMolecule({ randomNumberGenerator }));
    const names = molecules.map(({ iupacName }) => iupacName);
    expect(names.some((name) => /^\(\d+E\)-/.test(name))).toBe(true);
    expect(names.some((name) => /^\(\d+Z\)-/.test(name))).toBe(true);
    expect(names.some((name) => !name.includes('cyclo') && /-\d+-en/.test(name) && !name.startsWith('('))).toBe(true);
    for (const { carbonSkeleton } of molecules) {
      const bent = bendChainsAtRandom(carbonSkeleton, randomNumberGenerator);
      expect([...describeEveryDoubleBond(carbonSkeleton).values()]).not.toContain('unspecified');
      expect([...describeEveryDoubleBond(bent).values()]).not.toContain('unspecified');
    }
    // Bending 200 molecules takes a few seconds, more while the other test files run too.
  }, 20000);

  it('does not repeat the name it was asked to avoid', () => {
    const randomNumberGenerator = createPredictableRandomNumberGenerator(1);
    for (let attempt = 0; attempt < 50; attempt++) {
      expect(generateRandomGuessMolecule({ randomNumberGenerator, nameToAvoid: 'pentane' }).iupacName).not.toBe('pentane');
    }
  });

  describe('with only some features ticked', () => {
    const makeMolecules = (tickedFeatureIds, seed, count = 150) => {
      const randomNumberGenerator = createPredictableRandomNumberGenerator(seed);
      return Array.from({ length: count }, () => generateRandomGuessMolecule({ randomNumberGenerator, tickedFeatureIds }));
    };

    it('makes only straight-chain alkanes with just Alkanes ticked', () => {
      for (const { iupacName } of makeMolecules(['alkanes'], 2)) expect(iupacName).toMatch(/^[a-z]+ane$/);
    });

    it('makes every molecule an alcohol with only Alcohols ticked', () => {
      for (const { carbonSkeleton, iupacName } of makeMolecules(['alcohols'], 4)) {
        expect(iupacName).toMatch(/ol$/);
        expect(nameCarbonSkeleton(carbonSkeleton).isRing).toBeFalsy();
        expect(iupacName).not.toMatch(/methyl|ethyl/);
      }
    });

    it('makes only rings with only Cycloalkanes ticked', () => {
      for (const { iupacName } of makeMolecules(['cycloalkanes', 'branches'], 6)) expect(iupacName).toMatch(/^[a-z\d,-]*cyclo[a-z]+ane$/);
    });

    it('never makes a plain alkane when Alkanes is unticked', () => {
      const tickedFeatureIds = PRACTICE_PRESETS.aLevel.filter((id) => id !== 'alkanes' && id !== 'cycloalkanes');
      for (const { carbonSkeleton } of makeMolecules(tickedFeatureIds, 8)) {
        const namingResult = nameCarbonSkeleton(carbonSkeleton);
        const hasGroupOrDoubleBond = namingResult.iupacName.match(/en|fluoro|chloro|bromo|iodo|ol|al|one|oxo|acid|formyl|carboxy/);
        expect(hasGroupOrDoubleBond).toBeTruthy();
      }
    });

    it('makes alkenes with no E and Z forms when E/Z isomers is unticked', () => {
      const molecules = makeMolecules(['alkenes', 'branches'], 9);
      for (const { carbonSkeleton, iupacName } of molecules) {
        expect(iupacName).toMatch(/en/);
        expect(iupacName).not.toMatch(/[EZ]\)/);
        expect([...describeEveryDoubleBond(carbonSkeleton).values()].every((value) => value === 'none')).toBe(true);
      }
    });

    it('makes about 1 molecule in 5 an E/Z isomer with E/Z isomers more often ticked, and far fewer without', () => {
      const shareOfEAndZIsomers = (tickedFeatureIds) => {
        const molecules = makeMolecules(tickedFeatureIds, 11, 400);
        return molecules.filter(({ carbonSkeleton }) => [...describeEveryDoubleBond(carbonSkeleton).values()].some((value) => value === 'E' || value === 'Z')).length / molecules.length;
      };
      const withMoreOften = shareOfEAndZIsomers(PRACTICE_PRESETS.aLevel);
      const without = shareOfEAndZIsomers(PRACTICE_PRESETS.aLevel.filter((id) => id !== 'ezIsomersMoreOften'));
      expect(withMoreOften).toBeGreaterThan(0.14);
      expect(withMoreOften).toBeLessThan(0.27);
      expect(without).toBeLessThan(0.12);
    }, 20000);

    it('makes main chains longer than 8 carbons only with Long main chains ticked', () => {
      const lengthsOf = (molecules) => molecules.map(({ carbonSkeleton }) => nameCarbonSkeleton(carbonSkeleton).mainChainCarbonCount);
      expect(Math.max(...lengthsOf(makeMolecules(['alkanes'], 10)))).toBe(GUESS_MODE_SETTINGS.longestMainChain);
      const longLengths = lengthsOf(makeMolecules(['alkanes', 'longChains'], 10));
      expect(Math.max(...longLengths)).toBe(GUESS_MODE_SETTINGS.longestMainChainWithLongChains);
    });
  });

  describe('simpler and harder molecules', () => {
    const makeMolecules = (tickedFeatureIds, seed, count = 300) => {
      const randomNumberGenerator = createPredictableRandomNumberGenerator(seed);
      return Array.from({ length: count }, () => {
        const { carbonSkeleton, iupacName } = generateRandomGuessMolecule({ randomNumberGenerator, tickedFeatureIds });
        return { iupacName, namingResult: nameCarbonSkeleton(carbonSkeleton), doubleBondCount: carbonSkeleton.carbonCarbonBonds.filter(isDoubleBond).length };
      });
    };
    const groupKinds = { halogen: /fluoro|chloro|bromo|iodo/, alcohol: /ol$|hydroxy/, aldehyde: /al$|formyl/, ketone: /one$|oxo/, acid: /acid$|carboxy/ };
    const countGroupKinds = ({ iupacName, doubleBondCount }) =>
      Object.values(groupKinds).filter((pattern) => pattern.test(iupacName)).length + (doubleBondCount > 0 ? 1 : 0);
    const chains = (molecules) => molecules.filter(({ namingResult }) => !namingResult.isRing);
    const averageMainChain = (molecules) => molecules.reduce((total, { namingResult }) => total + namingResult.mainChainCarbonCount, 0) / molecules.length;

    const simplerMolecules = makeMolecules(PRACTICE_PRESETS.aLevel, 17);
    const harderMolecules = makeMolecules(PRACTICE_PRESETS.aLevelHarder, 17);

    it('simpler molecules have one C=C at most, one OH, CHO, C=O or COOH group at most, and groups of two kinds at most', () => {
      for (const molecule of simplerMolecules) {
        expect(molecule.doubleBondCount).toBeLessThanOrEqual(1);
        expect(molecule.iupacName).not.toMatch(/diol|dial|dione|dioic|tetrol|triol/);
        expect(countGroupKinds(molecule)).toBeLessThanOrEqual(2);
      }
    });

    it('simpler molecules have shorter main chains more often, but still sometimes 8 carbons', () => {
      expect(averageMainChain(chains(simplerMolecules))).toBeLessThan(averageMainChain(chains(harderMolecules)) - 0.5);
      expect(chains(simplerMolecules).some(({ namingResult }) => namingResult.mainChainCarbonCount === 8)).toBe(true);
    });

    it('harder molecules sometimes have two C=C, never next to each other, and two of a group', () => {
      const dienes = harderMolecules.filter(({ doubleBondCount }) => doubleBondCount === 2);
      expect(dienes.length).toBeGreaterThan(3);
      for (const { iupacName } of dienes) expect(iupacName).toMatch(/dien/);
      for (const { iupacName } of dienes) {
        const [, first, second] = iupacName.match(/(\d+),(\d+)-dien/);
        expect(Number(second) - Number(first)).toBeGreaterThanOrEqual(2);
      }
      expect(harderMolecules.some(({ iupacName }) => /diol|dial|dione|dioic/.test(iupacName))).toBe(true);
    });

    it('only harder molecules have a CHO on a ring (carbaldehyde or formyl)', () => {
      const onlyRingsAndAldehydes = ['cycloalkanes', 'aldehydes'];
      const simpler = makeMolecules(onlyRingsAndAldehydes, 23, 200);
      const harder = makeMolecules([...onlyRingsAndAldehydes, 'harderMolecules'], 23, 200);
      for (const { iupacName } of [...simplerMolecules, ...simpler]) expect(iupacName).not.toMatch(/carbaldehyde|formyl/);
      expect(harder.some(({ iupacName }) => /carbaldehyde/.test(iupacName))).toBe(true);
      expect(harderMolecules.some(({ iupacName }) => /carbaldehyde/.test(iupacName))).toBe(true);
    });
  });

  describe('the starting molecule', () => {
    const randomNumberGenerator = createPredictableRandomNumberGenerator(29);
    const molecules = Array.from({ length: 300 }, () => generateStartingMolecule({ randomNumberGenerator }));
    /** Each halogen atom, OH, CHO, C=O or COOH group (O and OH on one carbon) and each C=C counts as one group. */
    const countGroups = ({ carbonAtoms, carbonCarbonBonds }) =>
      carbonAtoms.reduce((total, { groups = [] }) => {
        const symbols = groups.map(({ symbol }) => symbol);
        return total + symbols.length - (symbols.includes('O') && symbols.includes('OH') ? 1 : 0);
      }, 0) + carbonCarbonBonds.filter(isDoubleBond).length;

    it('has a main chain or ring of at most 5 carbons and at most one group', () => {
      for (const { carbonSkeleton, iupacName } of molecules) {
        const namingResult = nameCarbonSkeleton(carbonSkeleton);
        expect(namingResult.iupacName).toBe(iupacName);
        expect(namingResult.mainChainCarbonCount).toBeLessThanOrEqual(STARTING_MOLECULE_SETTINGS.longestMainChain);
        expect(countGroups(carbonSkeleton)).toBeLessThanOrEqual(STARTING_MOLECULE_SETTINGS.mostGroups);
      }
    });

    it('is still varied: plain alkanes, molecules with a group, and rings', () => {
      expect(molecules.some(({ carbonSkeleton }) => countGroups(carbonSkeleton) === 0)).toBe(true);
      expect(molecules.some(({ carbonSkeleton }) => countGroups(carbonSkeleton) === 1)).toBe(true);
      expect(molecules.some(({ iupacName }) => /cyclo/.test(iupacName))).toBe(true);
      expect(new Set(molecules.map(({ iupacName }) => iupacName)).size).toBeGreaterThan(30);
    });
  });
});
