/**
 * Side chains with groups on them ("substituted substituents"): naming them, and reading their
 * names back.
 *
 * The rules come from the IUPAC 2013 Recommendations (the Blue Book):
 *   P-29.2        a side chain is numbered from the carbon joined to the main chain, carbon 1
 *   P-44.1.1      the main chain has the most principal groups: 2-(hydroxymethyl)propane-1,3-diol
 *   P-45.2.3      examples: 1-bromo-5-(bromomethyl)-1,6-dichlorohexane,
 *                 2-(2-bromoethyl)-4-chlorobutan-1-ol
 *   P-64.5.1      oxo and acyl prefixes: 5-acetylnonane-4,6-dione, 2-(2-oxopropyl)cyclohexan-1-one
 *   P-65.1.2.2.3  carboxy, whose carbon is not part of the side chain's name: 3-(carboxymethyl)heptanedioic acid
 *   P-65.1.7.2.1  acetyl is the preferred prefix for CH3-CO-, oxalo for HOOC-CO-
 *   P-66.6.1.3    formyl for a whole -CHO side chain, and oxo for a CHO at the end of a longer one
 *   P-14.3.4.5    locants are left out when every hydrogen is swapped the same way: pentafluoroethyl
 *   P-16.5.1.2    a substituted substituent is always in brackets, with bis, tris ... for several (P-16.3.6)
 *   P-16.5.1.3    on a side chain with one place for prefixes, the second and later go in brackets:
 *                 [bromo(chloro)methyl]
 *   P-65.1.2.2.1  more than two COOH groups on one chain are named with "carboxylic acid" (not covered)
 */
import { describe, expect, it } from 'vitest';
import { nameCarbonSkeleton } from '../../../src/chemistry/nameCarbonSkeleton.js';
import { readStructuralFormula } from '../../../src/chemistry/readStructuralFormula.js';
import { interpretOmniboxText } from '../../../src/chemistry/interpretOmniboxText.js';
import { convertParsedNameToDescription, parseTypedName } from '../../../src/chemistry/parseTypedName.js';
import { buildCarbonSkeletonFromDescription } from '../../../src/chemistry/buildCarbonSkeletonFromDescription.js';
import { nameSideChain } from '../../../src/chemistry/nameSideChain.js';

const nameOfFormula = (formulaText) => nameCarbonSkeleton(readStructuralFormula(formulaText).carbonSkeleton);

/** Builds the molecule a typed name describes, and names it. */
function nameOfTypedName(typedName) {
  const parsedName = parseTypedName(typedName);
  expect(parsedName.errorMessage, typedName).toBeUndefined();
  const { carbonSkeleton, errorMessage } = buildCarbonSkeletonFromDescription(convertParsedNameToDescription(parsedName));
  expect(errorMessage, typedName).toBeUndefined();
  return nameCarbonSkeleton(carbonSkeleton);
}

describe('naming side chains with groups on them', () => {
  it.each([
    ['CH3CH2CH(CH2Cl)CH2CH3', '3-(chloromethyl)pentane'],
    ['HOCH2CH(CH2OH)CH2OH', '2-(hydroxymethyl)propane-1,3-diol'],
    ['CH3CH2CH(CCl3)CH2CH2CH3', '3-(trichloromethyl)hexane'],
    ['CH3CH2CH(CHBrCl)CH2CH2CH3', '3-[bromo(chloro)methyl]hexane'],
    ['CH3CH2CH(CH2Cl)CH(CH2Cl)CH2CH3', '3,4-bis(chloromethyl)hexane'],
    ['CH3CH2CH(CH2NH2)CH2CH2OH', '3-(aminomethyl)pentan-1-ol'],
  ])('names %s as %s', (formulaText, expectedName) => {
    expect(nameOfFormula(formulaText).iupacName).toBe(expectedName);
  });

  it.each([
    // Blue Book examples (P-45.2.3, P-64.5.1, P-65.1.2.2.3, P-63.1.2)
    '1-bromo-5-(bromomethyl)-1,6-dichlorohexane',
    '2-(2-bromoethyl)-4-chlorobutan-1-ol',
    '3-bromo-2-(2-bromo-1-hydroxyethyl)-4-hydroxybutanoic acid',
    '5-bromo-4-(2-bromo-1-fluoropropyl)-6-fluoroheptanoic acid',
    '1,5-dibromo-4-(2-bromo-1-iodoethyl)-1,6-dichlorohexane',
    '5-acetylnonane-4,6-dione',
    '2-(2-oxopropyl)cyclohexan-1-one',
    '3-(carboxymethyl)heptanedioic acid',
    '4-(2-hydroxyethyl)-3-(hydroxymethyl)-2-methylidenecyclopentan-1-ol',
    // Locants left out only when every hydrogen is swapped the same way (P-14.3.4.5)
    '4-(2,2,2-trifluoroethyl)heptane',
    '4-(pentafluoroethyl)heptane',
    // Acyl groups (P-65.1.7), formyl and oxalo
    '4-acetylheptanedioic acid',
    '4-(chloroacetyl)heptanedioic acid',
    '4-(3-chloropropanoyl)heptanedioic acid',
    '4-(prop-2-enoyl)heptanedioic acid',
    '4-oxaloheptanedioic acid',
    '4-formylheptanedioic acid',
    '3-formylpentanoic acid',
    // oxo for a CHO at the end of a side chain, carboxy for a COOH (P-66.6.1.3, P-65.1.2.2.3)
    '4-(2-oxoethyl)heptanedioic acid',
    '4-(2-carboxyethyl)heptanedioic acid',
    // Ethers and amines on side chains
    '3-(methoxymethyl)hexane',
    '4-[(methylamino)methyl]heptanedioic acid',
    // On rings
    '(chloromethyl)cyclohexane',
    '(2-chloroethyl)cyclohexane',
    '1,2-bis(chloromethyl)cyclohexane',
    '2-(hydroxymethyl)cyclohexan-1-ol',
    '1-(hydroxymethyl)cyclopropan-1-ol',
    // Double bonds, and E and Z, in and to the side chain
    '(3Z)-3-(chloromethylidene)hexane',
    '5-[(2Z)-3-chloroprop-2-en-1-yl]nonane',
  ])('names the molecule of %s, and reads the name back', (iupacName) => {
    expect(nameOfTypedName(iupacName).iupacName).toBe(iupacName);
    expect(interpretOmniboxText(iupacName)).toMatchObject({ kind: 'name', typedNameIsCorrectIupacName: true });
  });

  it('describes the side chain: its own name, its prefixes, and whether their locants are left out', () => {
    const { carbonSkeleton } = readStructuralFormula('CH3CH2CH(CHBrCH2Cl)CH2CH2CH3');
    // Carbons 1-7 are the main chain as written; the side chain is CHBr (atom 4) then CH2Cl (atom 5).
    const sideChainAtomIds = carbonSkeleton.carbonAtoms.filter(({ groups = [] }) => groups.length > 0).map(({ atomId }) => atomId);
    expect(nameSideChain(carbonSkeleton, sideChainAtomIds, [], false)).toEqual({
      substituentName: '1-bromo-2-chloroethyl',
      sideChain: {
        kind: 'substituted',
        parentName: 'ethyl',
        prefixes: [
          { locant: 1, substituentName: 'bromo' },
          { locant: 2, substituentName: 'chloro' },
        ],
        locantsLeftOut: false,
      },
    });
  });
});

describe('side chains that are not covered yet', () => {
  it.each([
    ['HOOCCH2CH(COOH)CH2COOH', 'naming.moreThanTwoAcidOrAldehydeGroupsNotCovered'],
    ['OHCCH2CH(CHO)CH2CHO', 'naming.moreThanTwoAcidOrAldehydeGroupsNotCovered'],
  ])('%s: %s', (formulaText, reasonKey) => {
    const result = nameOfFormula(formulaText);
    expect(result.isNameable).toBe(false);
    expect(result.reasonNotNameable.key).toBe(reasonKey);
  });

});

describe('reading typed names of side chains with groups on them', () => {
  it.each([
    ['3-chloromethylhexane', 'readingNames.substitutedSideChainNeedsBrackets'],
    ['3-(chloroethyl)hexane', 'readingNames.groupOnSideChainNeedsLocant'],
    ['3-(carboxyethyl)hexanedioic acid', 'readingNames.groupOnSideChainNeedsLocant'],
    ['3-(3-chloroethyl)hexane', 'readingNames.locantNotOnChain'],
    ['3-(1,2-chloroethyl)hexane', 'readingNames.wrongMultiplyingPrefix'],
  ])('%s: %s', (typedName, errorKey) => {
    expect(parseTypedName(typedName).errorMessage.key).toBe(errorKey);
  });

  it('reads the groups of a side chain onto its own carbons, numbered from the main chain', () => {
    const description = convertParsedNameToDescription(parseTypedName('3-(2-bromo-1-hydroxyethyl)hexane'));
    expect(description.substituents).toEqual([
      expect.objectContaining({
        locant: 3,
        substituentCarbonCount: 2,
        sideChainGroups: [
          { locant: 2, halogen: 'Br' },
          { locant: 1, isHydroxy: true },
        ],
      }),
    ]);
  });

  it('gives carboxy a carbon of its own, at the end of the side chain', () => {
    const description = convertParsedNameToDescription(parseTypedName('3-(carboxymethyl)hexanedioic acid'));
    const sideChain = description.substituents.find(({ substituentCarbonCount }) => substituentCarbonCount > 0);
    expect(sideChain).toMatchObject({ locant: 3, substituentCarbonCount: 2, sideChainGroups: [{ locant: 2, isCarboxylicAcid: true }] });
  });

  it('puts groups written without locants on the lowest carbons with room: pentafluoroethyl', () => {
    const description = convertParsedNameToDescription(parseTypedName('3-(pentafluoroethyl)hexane'));
    expect(description.substituents[0].sideChainGroups.map(({ locant }) => locant)).toEqual([1, 1, 2, 2, 2]);
  });

  it('reads ethanoyl, the A-level name for acetyl, as the same group', () => {
    expect(nameOfTypedName('4-ethanoylheptanedioic acid').iupacName).toBe('4-acetylheptanedioic acid');
  });
});
