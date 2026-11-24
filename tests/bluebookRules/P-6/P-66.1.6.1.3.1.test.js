/**
 * P-66.1.6.1.3.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Chalcogen analogues of urea are named by functional replacement nomenclature using the prefixes
 * ‘thio’, ‘seleno’, and ‘telluro’. Preferred IUPAC names use the letter locants N, and N′. Numerical
 * locants may be used for thiourea in general nomenclature.
 * Numerical locants are no longer used for thiourea in the IUPAC preferred name.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 864, P-66.1.6.1.3.1, structures 1 and 2. [modified 7 August 2019]
 *     For carbonothioic diamide (PIN)
 *     read carbonothioic diamide
 *     for thiourea
 *     read thiourea (PIN)
 *     replace structures with:
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.1.6.1.3.1', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66161r.gif', name: 'carbonothioic diamide' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66161q.gif', pin: 'thiourea' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66161s.gif', pin: 'N-(butan-2-yl)selenourea', otherNames: ['N-(1-methylpropyl)selenourea', 'N-(butan-2-yl)carbonoselenoic diamide'] },
]);
