/**
 * P-103.2.8
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Alcohols, aldehydes, ketones, and nitriles
 * Alcohols, aldehydes, ketones and nitriles corresponding to amino acids with retained trivial names
 * are named systematically by using the principles, rules and conventions of substitutive
 * nomenclature. The endings ‘ol’, ‘al’, ‘one’ and ‘onitrile’ are added to retained names, with elision
 * of the final letter ‘e’ and may be used to designate a change in the characteristic group of an
 * amino acid. …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-103.2.8', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P103280a.gif', name: 'L-valinol' },
  { formula: '(CH3)2CH-CH2-CH(NH2)-CHO', name: '2-amino-4-methylpentanal' },
  { formula: 'H2N-CH2-CO-CH2Cl', name: '1-amino-3-chloropropan-2-one' },
  { formula: 'H2N-CH2-C≡N', name: 'aminoacetonitrile' },
]);
