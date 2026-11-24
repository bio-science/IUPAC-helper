/**
 * P-31.1.5.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Unsaturation in a saturated spiro ring system with components named by the von Baeyer system is
 * indicated by the endings ‘ene’ and the multiplicative prefixes ‘di’, ‘tri’, etc. when required; the
 * ending ‘ene’ is cited after the last bracket of the spiro name. The final letter ‘e’ of the
 * saturated hydrocarbon name is elided if followed by a vowel. If there is a choice, low locants are
 * assigned, in order, to spiro junction(s), heteroatoms and double bonds (see SP-2.4 in ref. 8).
 * Note: The placement location of the ‘ene’ endings after the closing brackets around the parent spiro
 * name was established in the publication on nomenclature of spiro compounds ( ref. 8)”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 386, P-31.1.5.2.1, example on this page. [corrected 27 May 2020]
 *     For 2′′,7-dioxa-2,3′:7′,7′′-dispiroter[bicyclo[4.1.0]hexan]-4′′-ene (PIN)
 *     read 2′′,7-dioxa-2,3′:7′,7′′-dispiroter[bicyclo[4.1.0]heptan]-4′′-ene (PIN)
 *     for [not 5′′,7-dioxa-2,3′:7′,7′′-dispiroter[bicyclo[4.1.0]hexan]-2′′-ene;
 *     read [not 5′′,7-dioxa-2,3′:7′,7′′-dispiroter[bicyclo[4.1.0]heptan]-2′′-ene;
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-31.1.5.2.1', [
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P310105h.gif', pin: '3,3′-spirobi[bicyclo[3.3.1]nonane]-6,6′-diene' },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P310105i.gif', pin: '2,2′-spirobi[bicyclo[2.2.1]heptan]-5-ene' },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P310105j.gif', pin: '5,6′-dioxa-2,2′-spirobi[bicyclo[2.2.2]octane]-7,7′-diene' },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P310105k.gif', pin: '2-phospha-3,3′-spirobi[bicyclo[3.3.1]nonane]-6′,7-diene' },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P310105l.gif', pin: '3,3′:6′,6′′-dispiroter[bicyclo[3.1.0]hexan]-2′′-ene' },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P310105m.gif', pin: '2′′,7-dioxa-2,3′:7′,7′′-dispiroter[bicyclo[4.1.0]heptan]-4′′-ene', notNames: ['5′′,7-dioxa-2,3′:7′,7′′-dispiroter[bicyclo[4.1.0]heptan]-2′′-ene'] },
]);
