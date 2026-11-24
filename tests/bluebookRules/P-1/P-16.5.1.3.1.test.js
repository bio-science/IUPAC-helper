/**
 * P-16.5.1.3.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “For mononuclear parent hydrides with two or more substituents the first cited substituent never has
 * enclosing marks unless it is a compound substituent group or includes a locant. The second and
 * further substituents are each enclosed with parentheses even for simple substituents. When the
 * simple substituent groups are accompanied by multiplicative prefixes such as ‘di’ and ‘tri’, the
 * multiplicative prefixes are not included in the parentheses.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-16.5.1.3.1', [
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1605h.gif', pin: 'butyl(ethyl)(methyl)(propyl)silane' },
  { formula: 'CH3-SiH2Cl', pin: 'chloro(methyl)silane' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1605i.gif', pin: 'ethyl(methyl)(propyl)phosphane' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1605j.gif', pin: 'ethyl(methyl)(propan-2-yl)phosphane', otherNames: ['ethyl(isopropyl)(methyl)phosphane'] },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1605k.gif', pin: 'ethyldi(methyl)phosphane' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1605l.gif', pin: 'ethyldi(propan-2-yl)silane', otherNames: ['ethyldi(isopropyl)silane'] },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1605la.gif', pin: 'ethyl(methyl)(propyl)silanecarboxylic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1605lb.gif', pin: 'methyl(phenyl)phosphinic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1605lc.gif', pin: 'cyclopropyl(phenyl)methanol' },
]);
