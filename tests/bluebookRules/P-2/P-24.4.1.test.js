/**
 * P-24.4.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Dispiro ring systems with three identical polycyclic ring components are named by placing the
 * nondetachable prefix ‘dispiroter’ before the name of the component ring system enclosed in square
 * brackets. The multiplicative prefix ‘ter’ (see P-14.2.3) is used to indicate the repetition of
 * identical ring components. Locants for the middle ring component are primed and for the third ring
 * component double primed. …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-24.4.1', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P240401a.gif', pin: '3,3′:6′,6′′-dispiroter[bicyclo[3.1.0]hexane]' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P240401b.gif', pin: '1H,1′H,1′′H,3′H-2,2′:7′,2′′-dispiroter[naphthalene]' },
]);
