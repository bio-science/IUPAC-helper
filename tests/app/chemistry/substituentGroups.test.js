/**
 * Substituent groups on their own: reading a group's formula or prefix, and naming it with its
 * preferred prefix; and the suffixes of the characteristic groups.
 *
 * The rules come from the IUPAC 2013 Recommendations (the Blue Book):
 *   P-29.2       yl, ylidene, ylidyne and diyl; alkyl type (2-methylpropyl) and alkanyl type
 *                (propan-2-yl)
 *   P-32.1.1     groups with a triple bond: ethynyl, prop-2-yn-1-yl, ethyne-1,2-diyl
 *   P-29.6       tert-butyl, and methylene for –CH2–
 *   P-14.3.4.4   locants left out only when no isomer is possible: ethenyl, but 2-chloroethen-1-yl
 *   P-63.2.2.2   methoxy, ethoxy, propoxy, butoxy and tert-butoxy; 2-methylpropoxy; pentyloxy
 *   P-65.1.7     acyl groups: acetyl, propanoyl, prop-2-enoyl, oxalyl, butanedioyl; acetyloxy
 *   P-65.2.1.5,
 *   P-66.1.1.4.1 carbamoyl for H2N-CO–, oxamoyl for H2N-CO-CO–
 *   P-33, P-65.1.2.1, P-66.6.1.1  the suffixes: oic acid and carboxylic acid, al and
 *                carbaldehyde, amide and carboxamide, one, ol, amine
 */
import { describe, expect, it } from 'vitest';
import { nameSubstituentGroup, readSubstituentGroupFormula, readSubstituentPrefix } from '../../../src/chemistry/substituentGroups.js';
import { describeCharacteristicGroup, readCharacteristicGroupSuffix, suffixForCharacteristicGroup } from '../../../src/chemistry/characteristicGroupSuffixes.js';
import { readStructuralFormula } from '../../../src/chemistry/readStructuralFormula.js';
import { nameCarbonSkeleton } from '../../../src/chemistry/nameCarbonSkeleton.js';

const prefixForFormula = (formula) => {
  const { group, errorMessage } = readSubstituentGroupFormula(formula);
  if (!group) return errorMessage.key;
  const named = nameSubstituentGroup(group);
  return named.isNameable ? named.prefix : named.reasonNotNameable.key;
};

const prefixForPrefix = (prefix) => {
  const { group, errorMessage } = readSubstituentPrefix(prefix);
  if (!group) return errorMessage.key;
  const named = nameSubstituentGroup(group);
  return named.isNameable ? named.prefix : named.reasonNotNameable.key;
};

describe('naming a substituent group from its formula', () => {
  it.each([
    ['CH3–', 'methyl'],
    ['CH3-CH2-CH2-CH2-CH2–', 'pentyl'],
    ['CH2=', 'methylidene'],
    ['CH3-CH2-CH(CH3)–', 'butan-2-yl'],
    ['(CH3)2CH-CH2–', '2-methylpropyl'],
    ['(CH3)2CH-CH2-CH2–', '3-methylbutyl'],
    ['(CH3)3C-CH2–', '2,2-dimethylpropyl'],
    ['CH3-CH2-C(CH3)2–', '2-methylbutan-2-yl'],
    ['–C(CH3)3', 'tert-butyl'],
    ['–CH2-Cl', 'chloromethyl'],
    ['Cl-CH=CH–', '2-chloroethen-1-yl'],
    ['HOOC-CH2-CH2–', '2-carboxyethyl'],
    ['–CH2-CH2-COOH', '2-carboxyethyl'],
    ['–OH', 'hydroxy'],
    ['=O', 'oxo'],
    ['–F', 'fluoro'],
    ['–Cl', 'chloro'],
    ['–I', 'iodo'],
    ['–NH2', 'amino'],
    ['CH3-O–', 'methoxy'],
    ['CH3-CH2-O–', 'ethoxy'],
    ['CH3-[CH2]2-O–', 'propoxy'],
    ['CH3-[CH2]3-O–', 'butoxy'],
    ['CH3-CH2-CH2-CH2-CH2-O—', 'pentyloxy'],
    ['(CH3)3C-O–', 'tert-butoxy'],
    ['(CH3)2CH-CH2-O–', '2-methylpropoxy'],
    ['CH3-CH2-CH(CH3)-O–', '(butan-2-yl)oxy'],
    ['CH3-NH–', 'methylamino'],
    ['H-CO–', 'formyl'],
    ['–COOH', 'carboxy'],
    ['CH3-CO–', 'acetyl'],
    ['CH3-CH2-CO–', 'propanoyl'],
    ['CH2=CH-CO–', 'prop-2-enoyl'],
    ['HC≡C–', 'ethynyl'],
    ['HC#C–', 'ethynyl'],
    ['HC≡C-CH2–', 'prop-2-yn-1-yl'],
    ['CH2=CH-C≡C–', 'but-3-en-1-yn-1-yl'],
    ['HC≡C-CO–', 'prop-2-ynoyl'],
    ['HC≡', 'methylidyne'],
    ['CH3-C≡', 'ethylidyne'],
    ['CH3-CH2-CH2-C≡', 'butylidyne'],
    ['Cl-CH2-C≡', '2-chloroethylidyne'],
    ['CH2=C(CH3)-CO–', '2-methylprop-2-enoyl'],
    ['HO-CO-CO–', 'oxalo'],
    ['H2N-CO–', 'carbamoyl'],
    ['H2N-CO-CO–', 'oxamoyl'],
    ['H2N-CO-NH–', 'carbamoylamino'],
    ['HCO-O–', 'formyloxy'],
    ['CH3-CO-O–', 'acetyloxy'],
    ['HOOC-O–', 'carboxyoxy'],
  ])('%s is %s', (formula, prefix) => {
    expect(prefixForFormula(formula)).toBe(prefix);
  });

  it.each([
    ['–CH2–', 'methylene'],
    ['–CH2-CH2–', 'ethane-1,2-diyl'],
    ['–CHCl-CHCl–', '1,2-dichloroethane-1,2-diyl'],
    ['–CO–', 'carbonyl'],
    ['–CO-CO–', 'oxalyl'],
    ['–OC-CH2-CO–', 'propanedioyl'],
    ['–OC-CH2-CH2-CO–', 'butanedioyl'],
    ['–CO-CH2-CH2-CO–', 'butanedioyl'],
    ['–C≡C–', 'ethyne-1,2-diyl'],
    ['–CH2-C≡C-CH2–', 'but-2-yne-1,4-diyl'],
    ['–CO-C≡C-CO–', 'but-2-ynedioyl'],
  ])('%s, with two free valences, is %s', (formula, prefix) => {
    expect(prefixForFormula(formula)).toBe(prefix);
  });

  it.each([
    ['Cl-CO–', 'substituentGroups.carbonylNotCovered'],
    ['–N<', 'substituentGroups.freeValencesNotCovered'],
    ['–CH2⁻', 'substituentGroups.chargeNotCovered'],
    ['HOO-CO–', 'omnibox.peroxideNotCovered'],
    ['CH3-CH2', 'substituentGroups.noFreeValence'],
    ['CH3-O-CH2-CH2-O–', 'substituentGroups.linkInsideGroupNotCovered'],
  ])('%s is not covered yet, and says so (%s)', (formula, key) => {
    expect(prefixForFormula(formula)).toBe(key);
  });
});

describe('reading a substituent prefix', () => {
  it.each(['methyl', 'propan-2-yl', 'methylidene', 'propan-2-ylidene', 'ethynyl', 'prop-2-yn-1-yl', 'methylidyne', 'ethylidyne', 'butylidyne', '2-chloroethylidyne', 'hydroxy', 'oxo', 'cyclohexyl', 'acetyl', '2-carboxyethyl', 'chloromethyl', 'methylamino', 'pentyloxy', 'tert-butyl', 'methoxy'])(
    'reads %s and names the group the same way',
    (prefix) => {
      expect(prefixForPrefix(prefix)).toBe(prefix);
    },
  );

  it('reads a prefix as the same group as its formula', () => {
    const fromPrefix = readSubstituentPrefix('2-methylpropyl').group;
    const fromFormula = readSubstituentGroupFormula('(CH3)2CH-CH2–').group;
    expect(nameSubstituentGroup(fromPrefix)).toEqual(nameSubstituentGroup(fromFormula));
    expect(fromPrefix.carbonSkeleton.carbonAtoms).toHaveLength(5);
    expect(fromPrefix.standInAtomIds).toHaveLength(1);
  });

  it('says when it cannot read a prefix', () => {
    expect(readSubstituentPrefix('nonsense').errorMessage.key).toBe('substituentGroups.prefixNotRead');
    expect(readSubstituentPrefix('ethane-1,2-diyl').errorMessage.key).toBe('substituentGroups.prefixWithSeveralFreeValencesNotRead');
  });

  it('reads ylidyne only where carbon 1 has the hydrogens for a triple bond', () => {
    expect(readSubstituentPrefix('propan-2-ylidyne').errorMessage.key).toBe('substituentGroups.prefixNotRead');
    expect(readSubstituentPrefix('ethenylidyne').errorMessage.key).toBe('substituentGroups.prefixNotRead');
    const fromPrefix = readSubstituentPrefix('ethylidyne').group;
    const fromFormula = readSubstituentGroupFormula('CH3-C≡').group;
    expect(nameSubstituentGroup(fromPrefix)).toEqual(nameSubstituentGroup(fromFormula));
  });
});

describe('the suffixes of characteristic groups', () => {
  it.each([
    ['carboxylicAcid', true, 1, 'oic acid'],
    ['carboxylicAcid', false, 1, 'carboxylic acid'],
    ['carboxylicAcid', true, 2, 'dioic acid'],
    ['aldehyde', true, 1, 'al'],
    ['aldehyde', false, 1, 'carbaldehyde'],
    ['amide', true, 1, 'amide'],
    ['amide', false, 1, 'carboxamide'],
    ['ester', true, 1, 'oate'],
    ['ketone', true, 4, 'tetrone'],
    ['alcohol', true, 2, 'diol'],
    ['alcohol', true, 4, 'tetrol'],
    ['amine', true, 1, 'amine'],
  ])('%s (carbon in the parent: %s) x%i is "%s", and reads back the same', (groupKind, carbonIsInParent, count, suffix) => {
    expect(suffixForCharacteristicGroup(groupKind, { carbonIsInParent, count })).toBe(suffix);
    const read = readCharacteristicGroupSuffix(`-${suffix}`);
    expect(read.groupKind).toBe(groupKind);
    expect(read.count).toBe(count);
  });

  it('has no suffix for groups it cannot name', () => {
    expect(readCharacteristicGroupSuffix('thiol')).toBeNull();
    expect(readCharacteristicGroupSuffix('sulfonimidamide')).toBeNull();
    expect(suffixForCharacteristicGroup('nitrile')).toBeNull();
  });

  it.each([
    ['–OH', 'alcohol'],
    ['=O', 'ketone'],
    ['–NH2', 'amine'],
    ['–COOH', 'carboxylicAcid'],
    ['–CHO', 'aldehyde'],
    ['–CONH2', 'amide'],
  ])('%s is a group named by a suffix (%s)', (formula, groupKind) => {
    expect(describeCharacteristicGroup(readSubstituentGroupFormula(formula).group)?.groupKind).toBe(groupKind);
  });
});

describe('side chains in whole molecules', () => {
  it.each([
    ['CH3-CH2-CH2-CH2-CH(CH=CHCl)-CH2-CH2-CH2-CH3', '5-(2-chloroethen-1-yl)nonane'],
    ['CH3-CH2-CH2-CH2-CH(CH=CH2)-CH2-CH2-CH2-CH3', '5-ethenylnonane'],
  ])('%s is %s', (formula, name) => {
    expect(nameCarbonSkeleton(readStructuralFormula(formula).carbonSkeleton).iupacName).toBe(name);
  });
});
