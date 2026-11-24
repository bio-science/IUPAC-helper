/**
 * P-66.6.5.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Hemiacetals and hemiketals
 * Compounds with the general structure RR′C(OH)(O-R′′) have the class name ‘hemiacetals’. They are
 * named substitutively as ‘alkoxy’, ‘alkyloxy’, ‘aryloxy’, etc. derivatives of an appropriate hydroxy
 * parent compound, such as an alcohol; these names are the preferred IUPAC names. Other names are
 * formed by functional class nomenclature using the class name ‘hemiacetal’; similarly derivatives of
 * ketones are denoted by the class name ‘hemiketal’.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.6.5.2', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66652a.gif', pin: '1-ethoxybutan-1-ol', otherNames: ['butanal ethyl hemiacetal'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66652b.gif', pin: '1-methoxycyclohexan-1-ol', otherNames: ['cyclohexanone methyl hemiketal'] },
]);
