/**
 * P-65.1.8.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Substitution of the hydrogen atom of formic acid by the following atoms or groups is not
 * recommended:
 * Names for such structures are derived from carbonic acid by functional replacement nomenclature (see
 * P-65.2.1.4) and are preferred IUPAC names and used in general nomenclature:
 * Note: Substitution of the hydrogen atom of formic acid by –NH-NH2 leads to a structure named by the
 * suffix carboxylic acid attached to the parent hydride hydrazine (see P-68.3.1.2). A carboxylic acid
 * named by means of a suffix is senior to a derivative of carbonic acid formed by functional
 * replacement (see P-41).”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.1.8.1', [
  { formula: 'H2N-NH-COOH', pin: 'hydrazinecarboxylic acid', otherNames: ['carbonohydrazidic acid'], notNames: ['carbazic acid'] },
  { formula: 'Cl-COOH', pin: 'carbonochloridic acid', notNames: ['chloroformic acid'] },
  { formula: 'HS-COOH', pin: 'carbonothioic S-acid', notNames: ['sulfanylformic acid'] },
]);
