import { describe, expect, it } from 'vitest';
import { buildGraphOfAtoms, carbonKey, compareBranchesByCipRules, explainBranchComparison, listBranchesOfAtom } from '../../../src/chemistry/rankByCipRules.js';
import {
  describeDoubleBondConfiguration,
  describeEveryDoubleBond,
  explainDoubleBondConfiguration,
  prepareToDescribeDoubleBonds,
} from '../../../src/chemistry/doubleBondConfiguration.js';
import { writeGroupFormula } from '../../../src/chemistry/writeGroupFormula.js';
import { nameCarbonSkeleton } from '../../../src/chemistry/nameCarbonSkeleton.js';
import { interpretOmniboxText } from '../../../src/chemistry/interpretOmniboxText.js';
import { countOverlapsInDrawing } from '../../../src/geometry/countOverlapsInDrawing.js';
import { zigzagStraightChains } from '../../../src/geometry/zigzagStraightChains.js';

/**
 * A skeleton from a list of carbons [atomId, x, y, groups?] and bonds [first, second, bondOrder?, linkAtom?].
 * The y axis points down the screen, as in the app.
 */
function skeletonOf(carbons, bonds) {
  return {
    carbonAtoms: carbons.map(([atomId, positionX, positionY, groups]) => ({ atomId, positionX, positionY, ...(groups ? { groups } : {}) })),
    carbonCarbonBonds: bonds.map(([firstAtomId, secondAtomId, bondOrder, linkAtom]) => ({
      firstAtomId,
      secondAtomId,
      ...(bondOrder === 2 ? { bondOrder } : {}),
      ...(linkAtom ? { linkAtom } : {}),
    })),
  };
}

/** The groups on carbon 1, highest CIP rank first, each as the key of its first atom (null for a hydrogen). */
function rankGroupsOnCarbon(skeleton, atomId) {
  const branches = listBranchesOfAtom(buildGraphOfAtoms(skeleton), carbonKey(atomId));
  return branches.sort((first, second) => compareBranchesByCipRules(second, first)).map(({ neighbourKey }) => neighbourKey);
}

describe('ranking groups by the CIP rules (P-92.2.1)', () => {
  it('ranks by atomic number first: Br > Cl > O > C > H (P-92.2.1.1.1)', () => {
    // C1 with Br, Cl, OH and a methyl.
    const skeleton = skeletonOf([[1, 0, 0, [{ symbol: 'Cl' }, { symbol: 'OH' }, { symbol: 'Br' }]], [2, 100, 0]], [[1, 2]]);
    expect(rankGroupsOnCarbon(skeleton, 1)).toEqual(['G1/2', 'G1/0', 'G1/1', 'C2']);
  });

  it('ranks -CH2OH above -CH3, as O,H,H beats H,H,H in sphere II (P-92.2.1.1.2, example 1)', () => {
    // H3C-CHCl-CH2OH: carbon 2's groups are Cl, CH2OH (C1), CH3 (C3) and H.
    const skeleton = skeletonOf([[1, 0, 0, [{ symbol: 'OH' }]], [2, 100, 0, [{ symbol: 'Cl' }]], [3, 200, 0]], [[1, 2], [2, 3]]);
    expect(rankGroupsOnCarbon(skeleton, 2)).toEqual(['G2/0', 'C1', 'C3', null]);
  });

  it('ranks -CH2OH above -CH(CH3)2, as O beats C at the first point of difference', () => {
    // C1 has -CH2OH (C2) and -CH(CH3)2 (C3, with C4 and C5).
    const skeleton = skeletonOf(
      [[1, 0, 0], [2, 100, 0, [{ symbol: 'OH' }]], [3, -100, 0], [4, -200, 0], [5, -100, 100]],
      [[1, 2], [1, 3], [3, 4], [3, 5]],
    );
    expect(rankGroupsOnCarbon(skeleton, 1).slice(0, 2)).toEqual(['C2', 'C3']);
  });

  it('ranks -CH=CH2 above -CH2CH3, as the duplicate atom gives C,(C),H against C,H,H (P-92.2.1.2, example 1)', () => {
    // Pent-1-en-3-ol: carbon 3 has OH, -CH=CH2 (C2) and -CH2CH3 (C4).
    const skeleton = skeletonOf(
      [[1, 0, 0], [2, 100, 0], [3, 200, 0, [{ symbol: 'OH' }]], [4, 300, 0], [5, 400, 0]],
      [[1, 2, 2], [2, 3], [3, 4], [4, 5]],
    );
    expect(rankGroupsOnCarbon(skeleton, 3)).toEqual(['G3/0', 'C2', 'C4', null]);
  });

  it('ranks -CH=CH2 above -CH(CH3)2: equal in sphere II, then the =CH2 beats each CH3 in sphere III', () => {
    const skeleton = skeletonOf(
      [[1, 0, 0], [2, 100, 0], [3, 200, 0], [4, -100, 0], [5, -200, 0], [6, -100, 100]],
      [[1, 2], [2, 3, 2], [1, 4], [4, 5], [4, 6]],
    );
    expect(rankGroupsOnCarbon(skeleton, 1).slice(0, 2)).toEqual(['C2', 'C4']);
  });

  it('ranks -CHO above -CH2OH, as O,(O),H beats O,H,H (P-92.2.1.2, example 4)', () => {
    // 2,3-Dihydroxypropanal: carbon 2 has OH, CHO (C1) and CH2OH (C3).
    const skeleton = skeletonOf(
      [[1, 0, 0, [{ symbol: 'O' }]], [2, 100, 0, [{ symbol: 'OH' }]], [3, 200, 0, [{ symbol: 'OH' }]]],
      [[1, 2], [2, 3]],
    );
    expect(rankGroupsOnCarbon(skeleton, 2)).toEqual(['G2/0', 'C1', 'C3', null]);
  });

  it('ranks -COOH above -CHO, as O,O,(O) beats O,(O),H', () => {
    // C2 between a COOH (C1) and a CHO (C3).
    const skeleton = skeletonOf(
      [[1, 0, 0, [{ symbol: 'O' }, { symbol: 'OH' }]], [2, 100, 0], [3, 200, 0, [{ symbol: 'O' }]]],
      [[1, 2], [2, 3]],
    );
    expect(rankGroupsOnCarbon(skeleton, 2).slice(0, 2)).toEqual(['C1', 'C3']);
  });

  it('sees an ether O in the middle of a bond as an O atom: -O-CH3 beats -CH2-CH3', () => {
    const skeleton = skeletonOf([[1, 0, 0], [2, 100, 0], [3, -100, 0], [4, -200, 0]], [[1, 2, 1, 'O'], [1, 3], [3, 4]]);
    expect(rankGroupsOnCarbon(skeleton, 1).slice(0, 2)).toEqual(['L1-2', 'C3']);
  });

  it('cannot tell two methyls apart', () => {
    const skeleton = skeletonOf([[1, 0, 0], [2, 100, 0], [3, -100, 0]], [[1, 2], [1, 3]]);
    const [first, second] = listBranchesOfAtom(buildGraphOfAtoms(skeleton), carbonKey(1));
    expect(compareBranchesByCipRules(first, second)).toBe(0);
  });
});

/** The configuration of the double bond between two carbons, as drawn. */
function configurationOf(skeleton, firstAtomId, secondAtomId) {
  return describeDoubleBondConfiguration(prepareToDescribeDoubleBonds(skeleton), firstAtomId, secondAtomId);
}

// Displayed formulae drawn as in textbooks: the C=C across the page, its groups at 120 degrees.
const UP_LEFT = [-50, -87];
const DOWN_LEFT = [-50, 87];

describe('reading E or Z from the drawing (P-92.4.1)', () => {
  it('reads (E)- and (Z)-but-2-ene', () => {
    const zButene = skeletonOf([[1, -50, 87], [2, 0, 0], [3, 100, 0], [4, 150, 87]], [[1, 2], [2, 3, 2], [3, 4]]);
    const eButene = skeletonOf([[1, -50, 87], [2, 0, 0], [3, 100, 0], [4, 150, -87]], [[1, 2], [2, 3, 2], [3, 4]]);
    expect(configurationOf(zButene, 2, 3)).toBe('Z');
    expect(configurationOf(eButene, 2, 3)).toBe('E');
    expect(configurationOf(eButene, 3, 2)).toBe('E');
  });

  it('reads but-2-ene drawn in a straight line as unspecified', () => {
    const butene = skeletonOf([[1, -100, 0], [2, 0, 0], [3, 100, 0], [4, 200, 0]], [[1, 2], [2, 3, 2], [3, 4]]);
    expect(configurationOf(butene, 2, 3)).toBe('unspecified');
  });

  it('finds no E or Z in but-1-ene or 2-methylbut-2-ene', () => {
    const butOneEne = skeletonOf([[1, 0, 0], [2, 100, 0], [3, 150, 87], [4, 250, 87]], [[1, 2, 2], [2, 3], [3, 4]]);
    expect(configurationOf(butOneEne, 1, 2)).toBe(null);
    const methylbutene = skeletonOf(
      [[1, -50, 87], [2, 0, 0], [3, 100, 0], [4, 150, 87], [5, ...UP_LEFT]],
      [[1, 2], [2, 3, 2], [3, 4], [2, 5]],
    );
    expect(configurationOf(methylbutene, 2, 3)).toBe(null);
  });

  it('reads 1,2-dichloroethene from where its chlorines are drawn', () => {
    // On each carbon, place 0 and place 1 are the two directions at 120 degrees from the C=C.
    const withChlorinesIn = (firstPlace, secondPlace) =>
      skeletonOf([[1, 0, 0, [{ symbol: 'Cl', place: firstPlace }]], [2, 100, 0, [{ symbol: 'Cl', place: secondPlace }]]], [[1, 2, 2]]);
    const configurations = [withChlorinesIn(0, 0), withChlorinesIn(0, 1), withChlorinesIn(1, 0), withChlorinesIn(1, 1)].map((skeleton) => configurationOf(skeleton, 1, 2));
    expect(new Set(configurations)).toEqual(new Set(['E', 'Z']));
    expect(configurations[0]).toBe(configurations[3]);
    expect(configurations[1]).toBe(configurations[2]);
    expect(configurations[0]).not.toBe(configurations[1]);
  });

  it('uses the CIP ranks, not the chain: (E)-2-chlorobut-2-ene has the Cl opposite the CH3 of carbon 3', () => {
    // Cl on C2 drawn up-left, C1 down-left; C4 drawn down-right: Cl (higher than CH3) and CH3 (higher than H) on opposite sides.
    const skeleton = skeletonOf([[1, ...DOWN_LEFT], [2, 0, 0, [{ symbol: 'Cl' }]], [3, 100, 0], [4, 150, 87]], [[1, 2], [2, 3, 2], [3, 4]]);
    expect(configurationOf(skeleton, 2, 3)).toBe('E');
  });

  it('leaves out ring double bonds in rings of 3 to 7 carbons, and in 8-rings with more than one (P-93.5.1.4.1, P-91.2.2)', () => {
    const ring = (size, doubleBondIndexes) => {
      const carbons = Array.from({ length: size }, (_, index) => {
        const angle = (2 * Math.PI * index) / size;
        return [index + 1, 100 * Math.cos(angle), 100 * Math.sin(angle)];
      });
      const bonds = carbons.map((_, index) => [index + 1, ((index + 1) % size) + 1, doubleBondIndexes.includes(index) ? 2 : 1]);
      return skeletonOf(carbons, bonds);
    };
    expect(configurationOf(ring(6, [0]), 1, 2)).toBe(null);
    expect(configurationOf(ring(7, [0]), 1, 2)).toBe(null);
    expect(configurationOf(ring(8, [0]), 1, 2)).toBe('Z');
    expect(configurationOf(ring(8, [0, 2, 4, 6]), 1, 2)).toBe(null);
    expect(configurationOf(ring(9, [0]), 1, 2)).toBe('Z');
    expect(configurationOf(ring(10, [0, 2]), 3, 4)).toBe('Z');
  });
});

describe('Sequence Rule 3: Z before E (P-92.4.2)', () => {
  it('ranks the Z -CH=CH-CH3 above the E one, to decide the ethylidene of 4-ethylidenehepta-2,5-diene', () => {
    expect(interpretOmniboxText('(2Z,4E,5E)-4-ethylidenehepta-2,5-diene')).toMatchObject({ correctIupacName: '(2Z,4E,5E)-4-ethylidenehepta-2,5-diene' });
    expect(interpretOmniboxText('(2Z,4Z,5E)-4-ethylidenehepta-2,5-diene')).toMatchObject({ correctIupacName: '(2Z,4Z,5E)-4-ethylidenehepta-2,5-diene' });
  });

  it('does not accept a name whose two -CH=CH-CH3 are both E, as the ethylidene then has no E or Z', () => {
    expect(interpretOmniboxText('(2E,4E,5E)-4-ethylidenehepta-2,5-diene')).toMatchObject({ kind: 'name', typedNameIsCorrectIupacName: false });
  });

  it('uses auxiliary descriptors round a ring, for 1,4-diethylidenecyclohexane (P-92.4.2.2)', () => {
    expect(interpretOmniboxText('(1Z,4Z)-1,4-diethylidenecyclohexane')).toMatchObject({ correctIupacName: '(1Z,4Z)-1,4-diethylidenecyclohexane' });
    expect(interpretOmniboxText('(1E,4E)-1,4-diethylidenecyclohexane')).toMatchObject({ correctIupacName: '(1E,4E)-1,4-diethylidenecyclohexane' });
    expect(interpretOmniboxText('(1Z,3E)-1,3-diethylidenecyclopentane')).toMatchObject({ correctIupacName: '(1Z,3E)-1,3-diethylidenecyclopentane' });
  });
});

describe('drawing and naming E and Z isomers', () => {
  const namesThatReadBack = [
    '(2E)-but-2-ene',
    '(2Z)-but-2-ene',
    '(2Z,4E)-hexa-2,4-diene',
    '(2Z,4Z)-hexa-2,4-diene',
    '(2E,4E)-hexa-2,4-diene',
    '(2E)-2-chlorobut-2-ene',
    '(2Z)-2-chlorobut-2-ene',
    '(1E)-1,2-dichloroethene',
    '(1Z)-1,2-dichloroethene',
    '(2E)-3-methylpent-2-ene',
    '(E)-cyclooctene',
    '(Z)-cyclooctene',
    '(1E,3E)-cyclodeca-1,3-diene',
    '(2E)-but-2-enoic acid',
    '(2Z)-but-2-enal',
    '(2E)-but-2-en-1-ol',
    'methyl (2Z)-but-2-enoate',
    '(2E)-N-methylbut-2-enamide',
    '(2E)-N-[(1E)-prop-1-en-1-yl]but-2-enamide',
    '(2E)-1-propoxybut-2-ene',
  ];

  it.each(namesThatReadBack)('draws %s and gives it back as its name', (name) => {
    const interpretation = interpretOmniboxText(name);
    expect(interpretation).toMatchObject({ kind: 'name', correctIupacName: name, typedNameIsCorrectIupacName: true });
    expect(countOverlapsInDrawing(interpretation.carbonSkeleton)).toBe(0);
  });

  it('accepts a name that leaves out E and Z, with a note, when the drawing has to show one of them', () => {
    const interpretation = interpretOmniboxText('1,2-dimethoxyethene');
    expect(interpretation.typedNameIsCorrectIupacName).toBe(true);
    expect(interpretation.correctIupacName).toMatch(/^\(1[EZ]\)-1,2-dimethoxyethene$/);
    expect(interpretation.note).toMatchObject({ key: 'omnibox.nameLeavesOutEAndZ' });
  });

  it('reads E and Z written in other ways and draws them, but gives the IUPAC name', () => {
    for (const typed of ['(E)-but-2-ene', '(2e)-but-2-ene']) {
      expect(interpretOmniboxText(typed), typed).toMatchObject({ kind: 'name', correctIupacName: '(2E)-but-2-ene' });
    }
    expect(interpretOmniboxText('(E)-but-2-ene').typedNameIsCorrectIupacName).toBe(false);
    expect(interpretOmniboxText('(2e)-but-2-ene').typedNameIsCorrectIupacName).toBe(true);
  });

  it('accepts cis and trans, with a note, only when each carbon of the C=C has one H', () => {
    expect(interpretOmniboxText('trans-but-2-ene')).toMatchObject({ correctIupacName: '(2E)-but-2-ene', typedNameIsCorrectIupacName: true, note: { key: 'omnibox.cisTransAccepted' } });
    expect(interpretOmniboxText('cis-but-2-ene')).toMatchObject({ correctIupacName: '(2Z)-but-2-ene', typedNameIsCorrectIupacName: true });
    expect(interpretOmniboxText('cis-3-methylpent-2-ene')).toMatchObject({ kind: 'notRecognised', message: { key: 'readingNames.cisTransNeedsHydrogens' } });
  });

  it('explains an E or Z with no double bond to go with, or on one with no E and Z forms', () => {
    expect(interpretOmniboxText('(3E)-but-2-ene')).toMatchObject({ kind: 'notRecognised', message: { key: 'readingNames.stereoLocantHasNoDoubleBond' } });
    expect(interpretOmniboxText('(2E)-but-1-ene')).toMatchObject({ kind: 'notRecognised' });
    expect(interpretOmniboxText('(2E)-cyclohexene')).toMatchObject({ kind: 'notRecognised' });
  });

  it('keeps every double bond E, Z or unspecified when the skeletal formula zigzags the chains', () => {
    for (const name of ['but-2-ene', '(2E)-but-2-ene', '(2Z)-but-2-ene', '(2Z,4E)-hexa-2,4-diene', 'hexa-2,4-diene', '(2E)-hex-2-ene']) {
      const { carbonSkeleton } = interpretOmniboxText(name);
      expect(describeEveryDoubleBond(zigzagStraightChains(carbonSkeleton)), name).toEqual(describeEveryDoubleBond(carbonSkeleton));
    }
  });
});

describe('E and Z of a side chain joined by a double bond (P-93.5.1.4.2)', () => {
  it('reads E or Z written in the brackets of an ylidene group, as general names do, but gives the preferred name', () => {
    expect(interpretOmniboxText('1-[(Z)-ethylidene]-3-[(E)-ethylidene]cyclopentane')).toMatchObject({
      kind: 'name',
      correctIupacName: '(1Z,3E)-1,3-diethylidenecyclopentane',
      typedNameIsCorrectIupacName: false,
    });
    expect(interpretOmniboxText('1,4-di[(Z)-ethylidene]cyclohexane')).toMatchObject({ correctIupacName: '(1Z,4Z)-1,4-diethylidenecyclohexane' });
  });

  it('reads E or Z with no locant for an ylidene group whose locant is left out too', () => {
    for (const name of ['(E)-ethylidene(methyl)cyclopropane', '(Z)-ethylidene(methyl)cyclopropane']) {
      expect(interpretOmniboxText(name)).toMatchObject({ kind: 'name', correctIupacName: name, typedNameIsCorrectIupacName: true });
    }
  });
});

describe('explaining a CIP ranking (P-92.2.1.1)', () => {
  /** Why one group on a carbon beats another: the sphere it was decided in, and the atoms compared there. */
  function explain(skeleton, atomId, firstKey, secondKey) {
    const branches = listBranchesOfAtom(buildGraphOfAtoms(skeleton), carbonKey(atomId));
    const branchOf = (key) => branches.find(({ neighbourKey }) => neighbourKey === key);
    const why = explainBranchComparison(branchOf(firstKey), branchOf(secondKey));
    const write = (atoms) => atoms.map(({ element, isDuplicate }) => (isDuplicate ? `(${element})` : element)).join(',');
    return why && { sign: Math.sign(why.difference), sphere: why.sphere, first: write(why.firstAtoms), second: write(why.secondAtoms) };
  }

  it('gives the first atoms when they differ, and the atoms joined to them when they do not', () => {
    // H3C-CHCl-CH2OH: on carbon 2, Cl beats CH2OH at once, and CH2OH beats CH3 by {O,H,H} against {H,H,H}.
    const skeleton = skeletonOf([[1, 0, 0, [{ symbol: 'OH' }]], [2, 100, 0, [{ symbol: 'Cl' }]], [3, 200, 0]], [[1, 2], [2, 3]]);
    expect(explain(skeleton, 2, 'G2/0', 'C1')).toEqual({ sign: 1, sphere: 0, first: 'Cl', second: 'C' });
    expect(explain(skeleton, 2, 'C1', 'C3')).toEqual({ sign: 1, sphere: 1, first: 'O,H,H', second: 'H,H,H' });
    expect(explain(skeleton, 2, 'C3', 'C1')).toEqual({ sign: -1, sphere: 1, first: 'H,H,H', second: 'O,H,H' });
  });

  it('shows duplicate atoms, and says how far out it was decided', () => {
    // CH2=CH-CH(CH3)-CH=CH-CH3: on carbon 3, -CH=CH-CH3 and -CH=CH2 tie until 2 bonds beyond their first carbon.
    const skeleton = skeletonOf(
      [[1, 0, 0], [2, 100, 0], [3, 200, 0], [4, 300, 0], [5, 400, 0], [6, 500, 0], [7, 200, 100]],
      [[1, 2, 2], [2, 3], [3, 4], [4, 5, 2], [5, 6], [3, 7]],
    );
    expect(explain(skeleton, 3, 'C4', 'C2')).toEqual({ sign: 1, sphere: 2, first: 'C,(C),H', second: '(C),H,H' });
  });

  it('gives null for groups that cannot be told apart', () => {
    const skeleton = skeletonOf([[1, 0, 0], [2, 100, 0], [3, 200, 0]], [[1, 2], [2, 3]]);
    expect(explain(skeleton, 2, 'C1', 'C3')).toBeNull();
  });
});

describe('writing a group as a condensed formula', () => {
  /** The formula of the group on main chain carbon atLocant that starts with main chain carbon towardsLocant, from a typed name. */
  function formulaOf(typedName, atLocant, towardsLocant) {
    const skeleton = interpretOmniboxText(typedName).carbonSkeleton;
    const chain = nameCarbonSkeleton(skeleton).mainChainAtomIds;
    return writeGroupFormula(buildGraphOfAtoms(skeleton), carbonKey(chain[atLocant - 1]), carbonKey(chain[towardsLocant - 1]));
  }

  it('writes chains, branches, double bonds and groups as on an exam paper', () => {
    expect(formulaOf('pentane', 2, 3)).toBe('CH2CH2CH3');
    expect(formulaOf('pentane', 2, 1)).toBe('CH3');
    expect(formulaOf('2-methylpentane', 3, 2)).toBe('CH(CH3)2');
    expect(formulaOf('2,2-dimethylbutane', 3, 2)).toBe('C(CH3)3');
    expect(formulaOf('pent-1-ene', 3, 2)).toBe('CH=CH2');
    expect(formulaOf('butan-2-ol', 3, 2)).toBe('CH(OH)CH3');
    expect(formulaOf('propan-1-ol', 2, 1)).toBe('CH2OH');
    expect(formulaOf('butanal', 2, 1)).toBe('CHO');
    expect(formulaOf('butanoic acid', 2, 1)).toBe('COOH');
    expect(formulaOf('pentan-2-one', 3, 2)).toBe('COCH3');
    expect(formulaOf('1,1,1-trichloropropane', 2, 1)).toBe('CCl3');
    expect(formulaOf('propan-1-amine', 2, 1)).toBe('CH2NH2');
    expect(formulaOf('methyl propanoate', 2, 1)).toBe('COOCH3');
  });

  it('writes a ring, and all beyond it, as its molecular formula', () => {
    const skeleton = interpretOmniboxText('[(1E,3E)-penta-1,3-dien-1-yl]cyclohexane').carbonSkeleton;
    const ring = nameCarbonSkeleton(skeleton).mainChainAtomIds;
    const atoms = buildGraphOfAtoms(skeleton);
    const sideChainStart = skeleton.carbonAtoms.map(({ atomId }) => atomId).find((atomId) => !ring.includes(atomId) && atoms.get(carbonKey(atomId)).bonds.some(({ neighbourKey }) => neighbourKey === carbonKey(ring[0])));
    expect(writeGroupFormula(atoms, carbonKey(sideChainStart), carbonKey(ring[0]))).toBe('C6H11');
  });

  it('writes a hydrogen as H, and gives null for a group that leads round a ring back to its atom', () => {
    const skeleton = interpretOmniboxText('methylcyclohexane').carbonSkeleton;
    const ring = nameCarbonSkeleton(skeleton).mainChainAtomIds;
    expect(writeGroupFormula(buildGraphOfAtoms(skeleton), carbonKey(ring[0]), null)).toBe('H');
    expect(writeGroupFormula(buildGraphOfAtoms(skeleton), carbonKey(ring[0]), carbonKey(ring[1]))).toBeNull();
  });
});

describe('explaining why a double bond is E or Z', () => {
  function explainNamed(typedName, locant) {
    const skeleton = interpretOmniboxText(typedName).carbonSkeleton;
    const chain = nameCarbonSkeleton(skeleton).mainChainAtomIds;
    return explainDoubleBondConfiguration(skeleton, chain[locant - 1], chain[locant]);
  }
  const summarise = ({ higher, lower, decidedBy, sphere }) => ({ higher: higher.formula, lower: lower.formula, decidedBy, sphere });

  it('gives the two groups on each carbon, higher first, and how they were ranked', () => {
    const explained = explainNamed('(2E)-3-methylpent-2-ene', 2);
    expect(explained.configuration).toBe('E');
    expect(explained.carbons.map(summarise)).toEqual([
      { higher: 'CH3', lower: 'H', decidedBy: 'sequenceRule1', sphere: 0 },
      { higher: 'CH2CH3', lower: 'CH3', decidedBy: 'sequenceRule1', sphere: 1 },
    ]);
  });

  it('says when Sequence Rule 3 decided it', () => {
    const skeleton = interpretOmniboxText('(2Z,4E,5E)-4-ethylidenehepta-2,5-diene').carbonSkeleton;
    const named = nameCarbonSkeleton(skeleton);
    const ethylidene = named.substituents.find(({ isJoinedByDoubleBond }) => isJoinedByDoubleBond);
    const explained = explainDoubleBondConfiguration(skeleton, named.mainChainAtomIds[3], ethylidene.branchStartAtomId);
    expect(explained.carbons[0].decidedBy).toBe('sequenceRule3');
    // The -CH=CH-CH3 that is 2Z, through carbon 3, ranks higher.
    expect(explained.carbons[0].higher.firstCarbonId).toBe(named.mainChainAtomIds[2]);
  });

  it('gives null for a double bond with no E or Z', () => {
    expect(explainNamed('but-1-ene', 1)).toBeNull();
    expect(explainNamed('2-methylbut-2-ene', 2)).toBeNull();
  });
});
