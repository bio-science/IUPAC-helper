/**
 * P-69.5.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “For organometallic compounds having two metal atoms belonging to class (2), substitutive
 * nomenclature is used, as described in Section P-68. The order of priority to select the parent
 * hydride is described in Section P-41: Sb > Bi > Ge > Sn > Pb > Al > Ga > In > Tl.”
 *
 * The whole section is in the Blue Book.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-69.5.3', [
  { formula: '(C6H5)2Bi-CH2-CH2-CH2-Pb(C2H5)3', pin: 'diphenyl[3-(triethylplumbyl)propyl]bismuthane' },
  { formula: 'H2Bi-GeH3', name: 'germylbismuthane' },
  { formula: 'Pb(SnH3)4', name: 'plumbanetetrayltetrakis(stannane)' },
]);
