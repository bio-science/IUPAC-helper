/**
 * P-25.3.4.1.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Fusion names composed of first- and higher-order attached components
 * The procedure for indicating common bond(s) between a first-order attached component and a
 * higher-order attached component follows that for the attachment of the parent compound to the
 * first-order attached component except that numerical locants are used instead of letters and the two
 * sets of locants are separated by a colon. The locants of second-order attached components are primed
 * to contrast with those of first-order attached components. …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-25.3.4.1.1', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250304a.gif', pin: 'pyrido[1′′,2′′:1′,2′]imidazo[4′,5′:5,6]pyrazino[2,3-b]phenazine' },
]);
