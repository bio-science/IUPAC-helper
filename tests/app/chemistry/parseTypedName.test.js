import { describe, expect, it } from 'vitest';
import { convertParsedNameToDescription, parseTypedName } from '../../../src/chemistry/parseTypedName.js';
import { inBritishEnglish } from '../inBritishEnglish.js';

describe('parseTypedName', () => {
  it('reads an unbranched alkane', () => {
    expect(parseTypedName('hexane')).toEqual({ parentChainCarbonCount: 6, mainChainDoubleBondLocants: [], substituentGroups: [] });
  });

  it('reads locants, multiplying prefixes and side chains', () => {
    const parsed = parseTypedName('3-ethyl-2,2-dimethylpentane');
    expect(parsed.parentChainCarbonCount).toBe(5);
    const alkyl = { isJoinedByDoubleBond: false, doubleBondLocants: [] };
    expect(parsed.substituentGroups).toEqual([
      { locants: [3], multiplyingPrefix: '', countSaidByPrefix: 1, writtenAs: 'ethyl', substituentName: 'ethyl', substituentCarbonCount: 2, ...alkyl },
      { locants: [2, 2], multiplyingPrefix: 'di', countSaidByPrefix: 2, writtenAs: 'dimethyl', substituentName: 'methyl', substituentCarbonCount: 1, ...alkyl },
    ]);
  });

  it('reads alkanes of any length the numerical terms cover', () => {
    expect(parseTypedName('undecane').parentChainCarbonCount).toBe(11);
    expect(parseTypedName('henicosane').parentChainCarbonCount).toBe(21);
    expect(parseTypedName('eicosane').parentChainCarbonCount).toBe(20);
    expect(parseTypedName('hexaoctacontatetractane').parentChainCarbonCount).toBe(486);
    expect(parseTypedName('11-undecyltricosane').substituentGroups[0].substituentCarbonCount).toBe(11);
  });

  it('reads "tridecyl" as one C13 group or three decyl groups, by the number of locants', () => {
    expect(parseTypedName('12-tridecyltetracosane').substituentGroups[0]).toMatchObject({ substituentCarbonCount: 13 });
    expect(parseTypedName('11,11,12-tridecyldocosane').substituentGroups[0]).toMatchObject({ substituentCarbonCount: 10 });
    expect(parseTypedName('11,11,12-tri(decyl)docosane').substituentGroups[0]).toMatchObject({ substituentCarbonCount: 10 });
    expect(parseTypedName('11,11,12-tris(decyl)docosane').substituentGroups[0]).toMatchObject({ substituentCarbonCount: 10 });
  });

  it('suggests brackets when correcting the prefix of a decyl group', () => {
    expect(inBritishEnglish(parseTypedName('11,12-decyldocosane').errorMessage)).toMatch(/11,12-di\(decyl\)/);
  });

  it('ignores capital letters and surrounding spaces', () => {
    expect(parseTypedName('  2-Methylbutane ').parentChainCarbonCount).toBe(4);
  });

  it('tells "hexyl" apart from the prefix "hexa"', () => {
    expect(parseTypedName('5-hexyldecane').substituentGroups[0].substituentName).toBe('hexyl');
    expect(parseTypedName('2,2,3,3,4,4-hexamethylpentane').substituentGroups[0].multiplyingPrefix).toBe('hexa');
  });

  it('accepts names that are not correct IUPAC names, so they can still be drawn', () => {
    expect(parseTypedName('2-ethylbutane').parentChainCarbonCount).toBe(4);
    expect(parseTypedName('2-methyl-3-ethylpentane').substituentGroups).toHaveLength(2);
  });

  it('spots a missing multiplying prefix', () => {
    const parsed = parseTypedName('2,2-methylpropane');
    expect(parsed.isSpecificNamingMistake).toBe(true);
    expect(inBritishEnglish(parsed.errorMessage)).toMatch(/2,2-dimethyl/);
  });

  it('spots missing locants', () => {
    expect(parseTypedName('methylpropane').isSpecificNamingMistake).toBe(true);
  });

  it('spots a locant that is off the end of the chain', () => {
    expect(parseTypedName('5-methylbutane').isSpecificNamingMistake).toBe(true);
  });

  it('treats half-typed text as not recognised, not as a mistake', () => {
    const parsed = parseTypedName('2-methylbut');
    expect(parsed.errorMessage).toBeTruthy();
    expect(parsed.isSpecificNamingMistake).toBe(false);
  });
});

describe('reading alkene names', () => {
  it.each([
    ['ethene', 2, [1]],
    ['propene', 3, [1]],
    ['but-1-ene', 4, [1]],
    ['pent-2-ene', 5, [2]],
    ['buta-1,3-diene', 4, [1, 3]],
    ['propa-1,2-diene', 3, [1, 2]],
    ['hexa-1,3,5-triene', 6, [1, 3, 5]],
    ['deca-1,9-diene', 10, [1, 9]],
  ])('%s', (name, parentChainCarbonCount, mainChainDoubleBondLocants) => {
    expect(parseTypedName(name)).toMatchObject({ parentChainCarbonCount, mainChainDoubleBondLocants });
  });

  it('reads the older style with the locants in front, so it can still be drawn', () => {
    expect(parseTypedName('2-pentene')).toMatchObject({ parentChainCarbonCount: 5, mainChainDoubleBondLocants: [2] });
    expect(parseTypedName('1,3-butadiene')).toMatchObject({ parentChainCarbonCount: 4, mainChainDoubleBondLocants: [1, 3] });
    expect(parseTypedName('2-methyl-2-butene')).toMatchObject({ parentChainCarbonCount: 4, mainChainDoubleBondLocants: [2] });
  });

  it('reads side chains joined by a double bond, or with double bonds of their own', () => {
    const groups = parseTypedName('3-methylidene-4-ethenyl-5-(prop-2-en-1-yl)-6,6-di(buta-1,3-dien-1-yl)decane').substituentGroups;
    expect(groups.map((group) => [group.substituentName, group.substituentCarbonCount, group.isJoinedByDoubleBond, group.doubleBondLocants])).toEqual([
      ['methylidene', 1, true, []],
      ['ethenyl', 2, false, [1]],
      ['prop-2-en-1-yl', 3, false, [2]],
      ['buta-1,3-dien-1-yl', 4, false, [1, 3]],
    ]);
  });

  it('reads ethylidene and ethenylidene', () => {
    const groups = parseTypedName('2-ethylidene-3-ethenylidenepentane').substituentGroups;
    expect(groups.map((group) => [group.substituentName, group.isJoinedByDoubleBond, group.doubleBondLocants])).toEqual([
      ['ethylidene', true, []],
      ['ethenylidene', true, [1]],
    ]);
  });

  it('spots an "ene" whose multiplying prefix does not match its locants', () => {
    const parsed = parseTypedName('but-1,3-ene');
    expect(parsed.isSpecificNamingMistake).toBe(true);
    expect(inBritishEnglish(parsed.errorMessage)).toMatch(/buta-1,3-diene/);
  });

  it('spots a double bond off the end of the chain', () => {
    const parsed = parseTypedName('but-4-ene');
    expect(parsed.isSpecificNamingMistake).toBe(true);
    expect(inBritishEnglish(parsed.errorMessage)).toMatch(/1 to 3/);
  });

  it('spots a double bond locant given twice', () => {
    expect(inBritishEnglish(parseTypedName('hexa-2,2-diene').errorMessage)).toMatch(/twice/);
  });

  it('asks where the double bond is in "butene", but not in ethene or propene', () => {
    expect(inBritishEnglish(parseTypedName('butene').errorMessage)).toMatch(/locant/);
    expect(parseTypedName('propene').errorMessage).toBeUndefined();
  });

  it('treats half-typed alkene names as not recognised, not as a mistake', () => {
    expect(parseTypedName('but-2-e').isSpecificNamingMistake).toBe(false);
    expect(parseTypedName('2-methylbut-').isSpecificNamingMistake).toBe(false);
  });
});

describe('convertParsedNameToDescription', () => {
  it('gives each side chain its own entry', () => {
    const description = convertParsedNameToDescription(parseTypedName('2,2-dimethylbutane'));
    expect(description.mainChainCarbonCount).toBe(4);
    expect(description.substituents.map((substituent) => substituent.locant)).toEqual([2, 2]);
  });
});
