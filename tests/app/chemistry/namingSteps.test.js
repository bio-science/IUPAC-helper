/**
 * The step-by-step breakdown of a name (listNamingSteps.js): which Blue Book rules each step
 * follows, the atoms it is about and the part of the name it gave.
 *
 * The rules come from the IUPAC 2013 Recommendations (the Blue Book):
 *   P-14.4      numbering: (c) the suffix, (e) the double bonds, (f) the prefixes together,
 *               (g) the prefix cited first, (j) Z before E
 *   P-44.4.1.1  of chains as long as each other, the one with the most double bonds is the
 *               main chain: 3-ethylocta-1,4-diene
 *   P-45.2.1    and then the one with the most prefixes: 3-ethyl-2-methylpentane
 *   P-16.7.1    (a) the final "e" of "ane" and "ene" is dropped before a vowel: butan-2-ol
 *   P-65.6.3.2.1  an ester is named with the group R' as a separate word first: methyl propanoate
 *   P-65.1.1.1, P-66.1.1.1.2, P-66.6.1.2.1  retained names that are the PIN, such as acetic acid:
 *               explained as a retained name, or, with the systematic name, step by step
 *   P-41        Table 4.1, the order of seniority of classes: acids, anhydrides, esters, acid
 *               halides, amides, nitriles, aldehydes, ketones, alcohols, amines
 */
import fs from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { interpretOmniboxText } from '../../../src/chemistry/interpretOmniboxText.js';
import { nameCarbonSkeleton } from '../../../src/chemistry/nameCarbonSkeleton.js';
import { EXPLAINED_NAMES, listNamingSteps } from '../../../src/chemistry/listNamingSteps.js';
import { joinNameParts } from '../../../src/chemistry/nameParts.js';
import { createEmptyCarbonSkeleton, listGroupsOnCarbon } from '../../../src/chemistry/carbonSkeleton.js';
import { inBritishEnglish } from '../inBritishEnglish.js';

/** The steps of a typed name's molecule. explain: the name they explain (EXPLAINED_NAMES), the PIN by default. */
function nameAndSteps(typedName, explain = EXPLAINED_NAMES.preferredName) {
  const skeleton = interpretOmniboxText(typedName).carbonSkeleton;
  const named = nameCarbonSkeleton(skeleton);
  const steps = listNamingSteps(skeleton, named, { explain });
  const explainedName = explain === EXPLAINED_NAMES.systematicName ? named.systematicName : named.iupacName;
  const textsOf = (step) => step.nameRanges.map(({ start, end }) => explainedName.slice(start, end));
  const stepsOfKind = (stepKind) => steps.filter((step) => step.stepKind === stepKind);
  return { skeleton, named, explainedName, steps, textsOf, stepsOfKind, stepOfKind: (stepKind) => stepsOfKind(stepKind)[0] };
}

/** True when the bond list has the bond between these two carbons, either way round. */
function hasBond(bonds, firstAtomId, secondAtomId) {
  return bonds.some(
    (bond) => (bond.firstAtomId === firstAtomId && bond.secondAtomId === secondAtomId) || (bond.firstAtomId === secondAtomId && bond.secondAtomId === firstAtomId),
  );
}

const NAMES = [
  '3-ethyl-2-methylpentane',
  '2,2,4-trimethylpentane',
  'but-3-en-2-ol',
  'buta-1,3-diene',
  '3-ethylocta-1,4-diene',
  '3-methylidenepentane',
  '4-ethenylnonane',
  '(2Z,4E)-hexa-2,4-diene',
  '(2E)-but-2-ene',
  '2-chloro-3-methoxybutane',
  '1,1-dichloroethene',
  'ethanol',
  'butane-1,3-diol',
  '4-hydroxybutan-2-one',
  '3-oxobutanal',
  'hexa-2,4-dienal',
  '4-oxobutanoic acid',
  'butanedioic acid',
  'methyl ethanoate',
  'ethyl propanoate',
  'N-methylethanamide',
  'N,2-dimethylpropanamide',
  'N-methylpropan-1-amine',
  '2-aminoethan-1-ol',
  '2-(methylamino)ethan-1-ol',
  'cyclohexene',
  'cyclohexanecarboxylic acid',
  '4-formylcyclohexane-1-carboxylic acid',
  'cyclohexylmethanol',
  'methylcyclohexane',
  '2-(hydroxymethyl)propane-1,3-diol',
  '3,4-bis(chloromethyl)hexane',
  '4-(pentafluoroethyl)heptane',
  '3-(methoxymethyl)hexane',
  '5-acetylnonane-4,6-dione',
  '4-(chloroacetyl)heptanedioic acid',
  '4-oxaloheptanedioic acid',
  '3-(carboxymethyl)heptanedioic acid',
  '4-formylheptanedioic acid',
  'formic acid',
  'acetic acid',
  'chloroacetic acid',
  'bromo(chloro)acetic acid',
  'cyclohexylacetic acid',
  'cyclopentylcyclohexane',
  '4-cyclopentylcyclohexan-1-ol',
  'dicyclohexylmethanone',
  '1,3-dicyclohexylpropan-2-one',
  'oxalic acid',
  'methyl acetate',
  'acetamide',
  '2-chloro-N-methylacetamide',
  'N-methylformamide',
  'oxamide',
  'formaldehyde',
  'chloroacetaldehyde',
];

/** Each name with each way of explaining it. */
const NAMES_AND_VIEWS = NAMES.flatMap((name) => Object.values(EXPLAINED_NAMES).map((explain) => [name, explain]));

describe('the parts of a name', () => {
  it.each(NAMES)('spell the name: %s', (typedName) => {
    const { named } = nameAndSteps(typedName);
    expect(joinNameParts(named.nameParts)).toBe(named.iupacName);
    expect(joinNameParts(named.systematicNameParts)).toBe(named.systematicName);
  });
});

describe('every naming step', () => {
  it.each(NAMES_AND_VIEWS)('points at atoms, bonds, groups and characters of %s that are there, explaining the %s', (typedName, explain) => {
    const { skeleton, explainedName, steps } = nameAndSteps(typedName, explain);
    const atomIds = new Set(skeleton.carbonAtoms.map(({ atomId }) => atomId));
    for (const step of steps) {
      for (const atomId of step.atomIds) expect(atomIds.has(atomId)).toBe(true);
      for (const { firstAtomId, secondAtomId } of step.bonds) expect(hasBond(skeleton.carbonCarbonBonds, firstAtomId, secondAtomId)).toBe(true);
      for (const { carbonAtomId, symbol } of step.groups) {
        const carbonAtom = skeleton.carbonAtoms.find(({ atomId }) => atomId === carbonAtomId);
        expect(listGroupsOnCarbon(carbonAtom).map((group) => group.symbol)).toContain(symbol);
      }
      for (const { start, end } of step.nameRanges) {
        expect(start).toBeGreaterThanOrEqual(0);
        expect(end).toBeLessThanOrEqual(explainedName.length);
        expect(start).toBeLessThan(end);
      }
    }
  });

  it.each(NAMES_AND_VIEWS)('cites Blue Book sections that have a rule check: %s, explaining the %s', (typedName, explain) => {
    const checkFiles = new Set();
    const findCheckFiles = (folder) => {
      for (const entry of fs.readdirSync(folder, { withFileTypes: true })) {
        if (entry.isDirectory()) findCheckFiles(path.join(folder, entry.name));
        else if (entry.name.endsWith('.test.js')) checkFiles.add(entry.name.replace('.test.js', ''));
      }
    };
    findCheckFiles(path.join('tests', 'bluebookRules'));
    for (const step of nameAndSteps(typedName, explain).steps) {
      expect(step.blueBookRules.length).toBeGreaterThan(0);
      for (const rule of step.blueBookRules) expect(checkFiles.has(rule.replace(/ \(\w+\)$/, ''))).toBe(true);
    }
  });

  it.each(NAMES)('gives every prefix of %s a step of its own', (typedName) => {
    const { named, stepsOfKind, textsOf } = nameAndSteps(typedName);
    const prefixes = named.nameParts.filter(({ kind }) => kind === 'prefix').map(({ text }) => text);
    const prefixSteps = stepsOfKind('prefix');
    expect(prefixSteps).toHaveLength(prefixes.length);
    prefixSteps.forEach((step, index) => expect(textsOf(step)[0].endsWith(prefixes[index])).toBe(true));
  });
});

describe('the steps of naming', () => {
  it.each([
    ['2-(hydroxymethyl)propane-1,3-diol', 'namingSteps.prefix.substitutedSideChainWithoutLocants', 1],
    ['4-(2,2,2-trifluoroethyl)heptane', 'namingSteps.prefix.substitutedSideChain', 3],
    ['5-acetylnonane-4,6-dione', 'namingSteps.prefix.acetyl', 1],
    ['4-(chloroacetyl)heptanedioic acid', 'namingSteps.prefix.substitutedAcyl', 2],
    ['4-propanoylheptanedioic acid', 'namingSteps.prefix.acyl', 1],
    ['4-oxaloheptanedioic acid', 'namingSteps.prefix.oxalo', 3],
    ['3-(carboxymethyl)heptanedioic acid', 'namingSteps.prefix.substitutedSideChainWithoutLocants', 2],
  ])('explain a side chain with groups on it, and show its groups: %s', (typedName, explanationKey, groupCount) => {
    const prefixStep = nameAndSteps(typedName).stepsOfKind('prefix').at(-1);
    expect(prefixStep.explanation.key).toBe(explanationKey);
    expect(prefixStep.groups).toHaveLength(groupCount);
  });

  it('come in order, each with the part of the name it gave: 3-ethyl-2-methylpentane', () => {
    const { steps, textsOf, stepsOfKind } = nameAndSteps('3-ethyl-2-methylpentane');
    expect(steps.map(({ stepKind }) => stepKind)).toEqual(['parent', 'chainChoice', 'unsaturation', 'numbering', 'prefix', 'prefix', 'alphanumericalOrder']);
    expect(textsOf(steps[0])).toEqual(['pent']);
    expect(textsOf(steps[2])).toEqual(['ane']);
    expect(stepsOfKind('prefix').map(textsOf)).toEqual([['3-ethyl'], ['2-methyl']]);
    expect(textsOf(steps[6])).toEqual(['3-ethyl-2-methyl']);
  });

  it('show the main chain, and a side chain with the bond joining it', () => {
    const { named, stepOfKind, stepsOfKind } = nameAndSteps('3-ethyl-2-methylpentane');
    expect(stepOfKind('parent').atomIds).toEqual(named.mainChainAtomIds);
    expect(stepOfKind('parent').bonds).toHaveLength(4);
    const ethyl = stepsOfKind('prefix')[0];
    expect(ethyl.atomIds).toHaveLength(2);
    expect(hasBond(ethyl.bonds, named.mainChainAtomIds[2], ethyl.atomIds[0])).toBe(true);
  });

  it('say which rule chose the chain when others are as long', () => {
    expect(nameAndSteps('3-ethylocta-1,4-diene').stepOfKind('chainChoice').blueBookRules).toContain('P-44.4.1.1');
    expect(nameAndSteps('3-ethyl-2-methylpentane').stepOfKind('chainChoice').blueBookRules).toContain('P-45.2.1');
    // The other chain is the same as the main chain, with its methyl group swapped for the main chain's end.
    expect(nameAndSteps('N,2-dimethylpropanamide').stepOfKind('chainChoice')).toBeUndefined();
    expect(nameAndSteps('2-methylbutane').stepOfKind('chainChoice')).toBeUndefined();
  });

  it('say which rule decided the numbering, and point at the locants it gave', () => {
    const butenol = nameAndSteps('but-3-en-2-ol');
    expect(butenol.stepOfKind('numbering').blueBookRules).toContain('P-14.4 (c)');
    expect(butenol.textsOf(butenol.stepOfKind('numbering'))).toEqual(['2']);
    const pentene = nameAndSteps('4-methylpent-1-ene');
    expect(pentene.stepOfKind('numbering').blueBookRules).toContain('P-14.4 (e)');
    expect(pentene.textsOf(pentene.stepOfKind('numbering'))).toEqual(['1']);
    expect(nameAndSteps('2,2,4-trimethylpentane').stepOfKind('numbering').blueBookRules).toContain('P-14.4 (f)');
    expect(nameAndSteps('2-chloro-3-methoxybutane').stepOfKind('numbering').blueBookRules).toContain('P-14.4 (g)');
    expect(nameAndSteps('(2Z,4E)-hexa-2,4-diene').stepOfKind('numbering').blueBookRules).toContain('P-14.4 (j)');
    expect(nameAndSteps('2,3-dimethylbutane').stepOfKind('numbering').explanation.key).toBe('namingSteps.numbering.eitherWay');
  });

  it('say why one ring is the parent rather than another ring or the chain', () => {
    const parentKey = (name) => nameAndSteps(name).stepOfKind('parent').explanation.key;
    expect(parentKey('cyclohexanol')).toBe('namingSteps.parent.ring');
    expect(parentKey('cyclopentylcyclohexane')).toBe('namingSteps.parent.largestRing');
    expect(nameAndSteps('cyclopentylcyclohexane').stepOfKind('parent').blueBookRules).toContain('P-44.2.1.6');
    expect(parentKey('3-cyclohexylcyclopentan-1-ol')).toBe('namingSteps.parent.ringWithMostSuffixGroups');
    expect(parentKey('cyclohexylmethanol')).toBe('namingSteps.parent.chainNotRing');
    expect(parentKey('dicyclohexylmethanone')).toBe('namingSteps.parent.chainNotRings');
  });

  it('give the number of each chain carbon in the numbering step', () => {
    const { named, stepOfKind } = nameAndSteps('but-3-en-2-ol');
    expect(stepOfKind('numbering').atomLocants).toEqual(named.mainChainAtomIds.map((atomId, index) => ({ atomId, locant: index + 1 })));
  });

  it('have no numbering step when the name has no locants', () => {
    expect(nameAndSteps('ethanol').stepOfKind('numbering')).toBeUndefined();
    expect(nameAndSteps('cyclohexene').stepOfKind('numbering')).toBeUndefined();
  });

  it('show the group that gives the suffix', () => {
    const butenol = nameAndSteps('but-3-en-2-ol');
    const suffix = butenol.stepOfKind('principalGroup');
    expect(butenol.textsOf(suffix)).toEqual(['2-ol']);
    expect(suffix.groups).toEqual([{ carbonAtomId: butenol.named.mainChainAtomIds[1], symbol: 'OH' }]);

    const acid = nameAndSteps('butanedioic acid').stepOfKind('principalGroup');
    expect(acid.explanation.values.count).toBe(2);
    expect(acid.groups.map(({ symbol }) => symbol).sort()).toEqual(['O', 'O', 'OH', 'OH']);
  });

  it('give the order of seniority of the classes with the suffix, marking the class of this molecule', () => {
    const classHere = (typedName) => {
      const { rankedItems } = nameAndSteps(typedName).stepOfKind('principalGroup').moreInfo;
      return rankedItems.filter(({ isThisMolecule }) => isThisMolecule).map(({ label }) => label.key.split('.').pop());
    };
    const { rankedItems } = nameAndSteps('butan-1-ol').stepOfKind('principalGroup').moreInfo;
    expect(rankedItems.map(({ label }) => label.key.split('.').pop())).toEqual([
      'carboxylicAcid', 'anhydride', 'ester', 'acidHalide', 'amide', 'nitrile', 'aldehyde', 'ketone', 'alcohol', 'amine',
    ]);
    expect(classHere('butan-1-ol')).toEqual(['alcohol']);
    expect(classHere('3-hydroxybutanal')).toEqual(['aldehyde']);
    expect(classHere('cyclohexanecarboxylic acid')).toEqual(['carboxylicAcid']);
    expect(classHere('methyl propanoate')).toEqual(['ester']);
    expect(classHere('N-methylethanamine')).toEqual(['amine']);
    expect(nameAndSteps('2-methylpentane').stepOfKind('principalGroup')).toBeUndefined();
  });

  it('show the carbon of a COOH group joined to a ring, which is not one of the ring carbons', () => {
    const { named, stepOfKind, textsOf } = nameAndSteps('cyclohexanecarboxylic acid');
    const suffix = stepOfKind('principalGroup');
    expect(suffix.blueBookRules).toContain('P-65.1.2.2');
    expect(textsOf(suffix)).toEqual(['carboxylic acid']);
    expect(named.mainChainAtomIds).not.toContain(suffix.atomIds[0]);
    expect(suffix.groups.map(({ symbol }) => symbol).sort()).toEqual(['O', 'OH']);
  });

  it('say when the final "e" is dropped before a vowel', () => {
    expect(nameAndSteps('butan-2-ol').stepOfKind('unsaturation').blueBookRules).toContain('P-16.7.1 (a)');
    expect(nameAndSteps('butane').stepOfKind('unsaturation').blueBookRules).not.toContain('P-16.7.1 (a)');
  });

  it('show the double bonds and give the ending', () => {
    const { named, stepOfKind, textsOf } = nameAndSteps('buta-1,3-diene');
    const unsaturation = stepOfKind('unsaturation');
    expect(textsOf(unsaturation)).toEqual(['a-1,3-diene']);
    expect(unsaturation.title.values.ending).toBe('diene');
    const [first, second, third, fourth] = named.mainChainAtomIds;
    expect(hasBond(unsaturation.bonds, first, second) && hasBond(unsaturation.bonds, third, fourth)).toBe(true);
    expect(unsaturation.bonds).toHaveLength(2);
  });

  it('show the group of an ester, with the bond its O is in', () => {
    const { named, stepOfKind, textsOf } = nameAndSteps('methyl propanoate');
    const esterGroup = stepOfKind('esterGroup');
    expect(textsOf(esterGroup)).toEqual(['methyl']);
    expect(esterGroup.atomIds).toHaveLength(1);
    expect(hasBond(esterGroup.bonds, named.mainChainAtomIds[0], esterGroup.atomIds[0])).toBe(true);
    expect(textsOf(stepOfKind('principalGroup'))).toEqual(['oate']);
  });

  it('show a group on the N of an amine or amide, and no NH2 that is not drawn', () => {
    const amine = nameAndSteps('N-methylpropan-1-amine');
    const onNitrogen = amine.stepOfKind('prefix');
    expect(amine.textsOf(onNitrogen)).toEqual(['N-methyl']);
    expect(onNitrogen.atomIds).toHaveLength(1);
    expect(onNitrogen.blueBookRules).toContain('P-62.2.2');
    expect(amine.stepOfKind('principalGroup').groups).toEqual([]);

    const amide = nameAndSteps('N,2-dimethylpropanamide');
    expect(amide.stepOfKind('principalGroup').groups.map(({ symbol }) => symbol)).toEqual(['O']);
    const methyls = amide.stepOfKind('prefix');
    expect(amide.textsOf(methyls)).toEqual(['N,2-dimethyl']);
    expect(methyls.atomIds).toHaveLength(2);
    expect(methyls.blueBookRules).toContain('P-66.1.1.3.1.1');
  });

  it('show the C=C that E or Z is about, and the descriptors in the name', () => {
    const { named, stepOfKind, textsOf } = nameAndSteps('(2E)-but-2-ene');
    const stereo = stepOfKind('stereo');
    expect(textsOf(stereo)).toEqual(['(2E)-']);
    expect(hasBond(stereo.bonds, named.mainChainAtomIds[1], named.mainChainAtomIds[2])).toBe(true);
  });

  it('explain the CIP priorities behind E and Z, for each C=C', () => {
    const { moreInfo, blueBookRules } = nameAndSteps('(2E)-2-chlorobut-2-ene').stepOfKind('stereo');
    expect(blueBookRules).toContain('P-92.2.1.1');
    const elementsOf = (items) => items.map(({ label }) => label.values.element);
    expect(elementsOf(moreInfo.rankedItems)).toEqual(['I', 'Br', 'Cl', 'F', 'O', 'N', 'C', 'H']);
    expect(elementsOf(moreInfo.rankedItems.filter(({ isThisMolecule }) => isThisMolecule))).toEqual(['Cl', 'C', 'H']);
    expect(moreInfo.breakdown).toHaveLength(1);
    const [bond] = moreInfo.breakdown;
    expect(inBritishEnglish(bond.heading)).toBe('The C=C of 2E');
    expect(bond.lines.map((line) => inBritishEnglish(line))).toEqual([
      'Carbon 2: Cl has the higher priority, not CH3, as Cl (atomic number 17) beats C (6).',
      'Carbon 3: CH3 has the higher priority, not H, as C (atomic number 6) beats H (1).',
      'The higher-priority groups, Cl and CH3, are on opposite sides of the C=C, so it is E.',
    ]);

    const pentene = nameAndSteps('(2Z)-3-methylpent-2-ene').stepOfKind('stereo').moreInfo;
    expect(inBritishEnglish(pentene.breakdown[0].lines[1])).toBe(
      'Carbon 3: CH2CH3 and CH3 both start with C, so compare the atoms joined to it: {C, H, H} beats {H, H, H}, so CH2CH3 has the higher priority.',
    );
    expect(inBritishEnglish(pentene.breakdown[0].lines[2])).toMatch(/same side of the C=C, so it is Z\.$/);
    expect(pentene.notes.map(({ key }) => key)).toEqual(['namingSteps.cipPriority.ties']);

    const dienoic = nameAndSteps('(2E,4Z)-hexa-2,4-dienoic acid').stepOfKind('stereo').moreInfo;
    expect(dienoic.breakdown.map(({ heading }) => inBritishEnglish(heading))).toEqual(['The C=C of 2E', 'The C=C of 4Z']);
  });

  it('say which carbon two groups with the same formula go through, and explain duplicate atoms when they are shown', () => {
    const heptadiene = nameAndSteps('(2Z,4E,5E)-4-ethylidenehepta-2,5-diene').stepOfKind('stereo').moreInfo;
    const ethylidene = heptadiene.breakdown.find(({ heading }) => inBritishEnglish(heading) === 'The C=C of 4E');
    expect(inBritishEnglish(ethylidene.lines[0])).toMatch(/^Carbon 4: its two groups, CH=CHCH3 by way of carbon 3 and CH=CHCH3 by way of carbon 5, .*Sequence Rule 3/);
    expect(inBritishEnglish(ethylidene.lines[1])).toMatch(/^The side chain's carbon: CH3/);

    const ring = nameAndSteps('(E)-cyclooctene').stepOfKind('stereo').moreInfo;
    expect(inBritishEnglish(ring.breakdown[0].lines[0])).toMatch(/^Carbon 1: the ring by way of carbon 8 has the higher priority/);

    const hexadiene = nameAndSteps('(3E)-3-ethylidenehexa-1,4-diene').stepOfKind('stereo').moreInfo;
    expect(hexadiene.notes.map(({ key }) => key)).toContain('namingSteps.cipPriority.duplicates');
  });

  it('explain the E or Z inside a prefix, numbered as the prefix is (P-91.3)', () => {
    // The Blue Book's own example in P-91.3.
    const heptadiene = nameAndSteps('(5Z)-4-[(1E)-prop-1-en-1-yl]hepta-1,5-diene');
    const stereo = heptadiene.stepOfKind('stereo');
    expect(heptadiene.textsOf(stereo)).toEqual(['(5Z)-', '(1E)-']);
    expect(inBritishEnglish(stereo.title)).toBe('E or Z: (5Z), (1E)');
    expect(stereo.bonds).toHaveLength(2);
    expect(stereo.notes.map(({ key }) => key)).toEqual(['namingSteps.stereo.inGroup']);
    const [mainChain, prefix] = stereo.moreInfo.breakdown;
    expect(inBritishEnglish(mainChain.heading)).toBe('The C=C of 5Z');
    expect(inBritishEnglish(prefix.heading)).toBe('The C=C of 1E in the prop-1-en-1-yl on carbon 4');
    expect(prefix.lines.map((line) => inBritishEnglish(line))).toEqual([
      'Carbon 1 of prop-1-en-1-yl: CH(CH2CH=CH2)CH=CHCH3 has the higher priority, not H, as C (atomic number 6) beats H (1).',
      'Carbon 2 of prop-1-en-1-yl: CH3 has the higher priority, not H, as C (atomic number 6) beats H (1).',
      'The higher-priority groups, CH(CH2CH=CH2)CH=CHCH3 and CH3, are on opposite sides of the C=C, so it is E.',
    ]);
    expect(nameAndSteps('(2E)-but-2-ene').stepOfKind('stereo').notes).toEqual([]);
  });

  it('give an E or Z step when only a prefix has one, with each of its double bonds and each copy of a multiplied prefix', () => {
    const headingsOf = (typedName) => nameAndSteps(typedName).stepOfKind('stereo').moreInfo.breakdown.map(({ heading }) => inBritishEnglish(heading));
    expect(headingsOf('[(1E,3E)-penta-1,3-dien-1-yl]cyclohexane')).toEqual([
      'The C=C of 1E in the penta-1,3-dien-1-yl on carbon 1',
      'The C=C of 3E in the penta-1,3-dien-1-yl on carbon 1',
    ]);
    expect(headingsOf('1,2-di[(1E)-prop-1-en-1-yl]cyclohexane')).toEqual([
      'The C=C of 1E in the prop-1-en-1-yl on carbon 1',
      'The C=C of 1E in the prop-1-en-1-yl on carbon 2',
    ]);
    expect(headingsOf('[(1E)-3-chloroprop-1-en-1-yl]cyclohexane')).toEqual(['The C=C of 1E in the 3-chloroprop-1-en-1-yl on carbon 1']);
    const ring = nameAndSteps('[(1E)-prop-1-en-1-yl]cyclohexane').stepOfKind('stereo').moreInfo;
    expect(inBritishEnglish(ring.breakdown[0].lines[0])).toBe('Carbon 1 of prop-1-en-1-yl: C6H11 has the higher priority, not H, as C (atomic number 6) beats H (1).');
  });

  it('explain the E or Z of the group beyond an ether O, an amide N and an ester O', () => {
    const headingsOf = (typedName) => nameAndSteps(typedName).stepOfKind('stereo').moreInfo.breakdown.map(({ heading }) => inBritishEnglish(heading));
    expect(headingsOf('1-{[(1E)-prop-1-en-1-yl]oxy}butan-2-ol')).toEqual(['The C=C of 1E in the prop-1-en-1-yl on the O at carbon 1']);
    expect(headingsOf('N-[(1E)-prop-1-en-1-yl]butanamide')).toEqual(['The C=C of 1E in the prop-1-en-1-yl on the N']);
    expect(headingsOf('(2E)-but-2-en-1-yl (2Z)-but-2-enoate')).toEqual(['The C=C of 2Z', "The C=C of 2E in but-2-en-1-yl, the ester's group"]);
    const ether = nameAndSteps('1-{[(1E)-prop-1-en-1-yl]oxy}butan-2-ol').stepOfKind('stereo').moreInfo;
    expect(inBritishEnglish(ether.breakdown[0].lines[0])).toMatch(/^Carbon 1 of prop-1-en-1-yl: OCH2CH\(OH\)CH2CH3 has the higher priority, not H, as O \(atomic number 8\)/);
  });

  it('explain a retained PIN in one step, in place of the suffix, parent and ending steps', () => {
    const { steps, stepOfKind, textsOf, named } = nameAndSteps('chloroacetic acid');
    expect(steps.map(({ stepKind }) => stepKind)).not.toEqual(expect.arrayContaining(['principalGroup']));
    expect(steps.some(({ stepKind }) => ['parent', 'unsaturation', 'notPreferredName'].includes(stepKind))).toBe(false);
    const retained = stepOfKind('retainedName');
    expect(steps[0]).toBe(retained);
    expect(textsOf(retained)).toEqual(['acetic acid']);
    expect(retained.blueBookRules).toEqual(['P-65.1.1.1']);
    expect(retained.explanation).toMatchObject({ key: 'retainedNames.explanation', values: { retainedParent: 'acetic acid', systematicParent: 'ethanoic acid' } });
    expect(retained.notes).toEqual([{ key: 'namingSteps.retainedName.systematicAlsoAccepted', values: { systematicName: 'chloroethanoic acid' } }]);
    // The whole chain, and the =O and OH of the COOH group.
    expect(retained.atomIds).toEqual(expect.arrayContaining(named.mainChainAtomIds));
    expect(retained.groups.map(({ symbol }) => symbol).sort()).toEqual(['O', 'OH']);
    expect(retained.moreInfo.rankedItems.find(({ isThisMolecule }) => isThisMolecule).label.key).toBe('namingSteps.seniorityOfClasses.classes.carboxylicAcid');
    expect(textsOf(stepOfKind('prefix'))).toEqual(['chloro']);
  });

  it('explain the systematic name step by step, ending with why it is not the PIN', () => {
    const { steps, stepOfKind, textsOf } = nameAndSteps('chloroacetic acid', EXPLAINED_NAMES.systematicName);
    const kinds = steps.map(({ stepKind }) => stepKind);
    expect(kinds).toEqual(expect.arrayContaining(['principalGroup', 'parent', 'unsaturation', 'prefix', 'locantsLeftOut']));
    expect(kinds.at(-1)).toBe('notPreferredName');
    expect(kinds).not.toContain('retainedName');
    expect(textsOf(stepOfKind('principalGroup'))).toEqual(['oic acid']);
    expect(textsOf(stepOfKind('parent'))).toEqual(['eth']);
    const last = stepOfKind('notPreferredName');
    expect(textsOf(last)).toEqual(['ethanoic acid']);
    expect(last.explanation).toMatchObject({ key: 'namingSteps.notPreferredName.explanation', values: { preferredName: 'chloroacetic acid', systematicName: 'chloroethanoic acid' } });
  });

  it('explain the N of a retained amide and the O of a retained ester in the retained name step', () => {
    const amide = nameAndSteps('N-methylformamide');
    expect(amide.textsOf(amide.stepOfKind('retainedName'))).toEqual(['formamide']);
    expect(amide.textsOf(amide.stepOfKind('prefix'))).toEqual(['N-methyl']);
    expect(amide.stepOfKind('retainedName').bonds.length).toBeGreaterThan(0);
    const ester = nameAndSteps('methyl acetate');
    expect(ester.textsOf(ester.stepOfKind('retainedName'))).toEqual(['acetate']);
    expect(ester.textsOf(ester.stepOfKind('esterGroup'))).toEqual(['methyl']);
  });

  it('are the same either way for a name with no retained parent', () => {
    expect(nameAndSteps('propanoic acid', EXPLAINED_NAMES.systematicName).steps).toEqual(nameAndSteps('propanoic acid').steps);
  });

  it('are none for a molecule that cannot be named', () => {
    expect(listNamingSteps(createEmptyCarbonSkeleton())).toEqual([]);
  });
});
