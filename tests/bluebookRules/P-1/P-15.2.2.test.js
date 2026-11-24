/**
 * P-15.2.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Functional class nomenclature using functional modifiers
 * Many derivatives of principal characteristic groups or functional parent compounds (see P-34) may be
 * named by modifiers consisting of one or more separate words placed after the name of the parent
 * structure. This method is most useful in an indexing environment, but it is the only method used for
 * naming acyclic anhydrides (see P-65.7.1), N-oxides, N-sulfides, N-selenides, and N-tellurides (see
 * P-62.5) in the context of preferred IUPAC names.
 * Functional modifiers are still acceptable for general nomenclature purposes, but the preferred IUPAC
 * names are substitutive names for azines, oximes, hydrazones, semicarbazones, carbohydrazones, …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 68, P-15.2.2, example 1 on this page. [corrected 24 July 2019]
 *     For N-propylidenehydroxylamine (PIN)
 *     read N-propylidenehydroxylamine
 *     add N-hydroxypropan-1-imine (PIN)
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-15.2.2', [
  { formula: 'CH3-CO-O-CO-CH3', pin: 'acetic anhydride' },
  { formula: '(CH3)3NO', pin: 'N,N-dimethylmethanamine N-oxide', otherNames: ['trimethylazane N-oxide', 'trimethylamine N-oxide'] },
  { formula: 'CH3-CH2-CH=N-OH', pin: 'N-hydroxypropan-1-imine', otherNames: ['propanal oxime', 'N-propylidenehydroxylamine'] },
  { formula: 'CH3-CH2-CH=N-NH2', pin: 'propylidenehydrazine', otherNames: ['propanal hydrazone'] },
  { formula: '(CH3)2C=N-NH-CO-NH2', pin: '2-(propan-2-ylidene)hydrazine-1-carboxamide', otherNames: ['acetone semicarbazone'] },
  { formula: 'CH3-CH2-CH(O-CH3)2', pin: '1,1-dimethoxypropane', otherNames: ['propanal dimethyl acetal'] },
  { formula: 'CH3-CH2-CH2-CO-OCH3', pin: 'methyl butanoate', otherNames: ['butanoic acid methyl ester'] },
]);
