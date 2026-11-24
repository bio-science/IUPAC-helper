/**
 * P-68.2.6.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Substituted parent hydrides”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 991, P-68.2.6.1, example 2 on this page. [corrected 5 June 2019]
 *     For bis(4,5-dihydrothiophen-2-yl)dimethylgermane (PIN)
 *     read bis(4,5-dihydrothiophen-2-yl)di(methyl)germane (PIN)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-68.2.6.1', [
  { formula: 'CH3-[CH2]11-SiH2-[CH2]11-CH3', pin: 'di(dodecyl)silane' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68261a.gif', pin: '1,1,2,2,3,3,4,4,5,5-decamethyl-6,6-diphenylhexasilinane', otherNames: ['1,1,2,2,3,3,4,4,5,5-decamethyl-6,6-diphenylcyclohexasilane'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68261b.gif', pin: '1,1-dibutyl-1H-germole' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68261c.gif', pin: '1,1-dimethyl-3,4-di(prop-1-en-2-yl)germolane', otherNames: ['3,4-diisopropenyl-1,1-dimethylgermolane'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68261d.gif', pin: 'bis(4,5-dihydrothiophen-2-yl)di(methyl)germane' },
]);
