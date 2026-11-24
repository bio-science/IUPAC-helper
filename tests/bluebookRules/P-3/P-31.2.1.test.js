/**
 * P-31.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The prefixes ‘hydro/dehydro’ are used to indicate addition and subtraction, respectively, of
 * hydrogen atoms to or from mancude compounds. ‘Hydro’ and ‘dehydro’ prefixes are detachable prefixes
 * but are not included in those prefixes that are cited in alphanumerical order. Thus, in names, they
 * are cited immediately at the front of the name of the parent hydride, after alphabetized prefixes
 * and before nondetachable prefixes.
 * If both hydro and dehydro prefixes are used in name, dehydro prefixes are cited before hydro
 * prefixes with the order not affected by multipliers.
 * This is a change from previous recommendations. In these recommendations the prefixes ‘hydro’ and
 * ‘dehydro’ are detachable but not alphabetized with other substituent prefixes. …
 * The starting point and direction of numbering of a compound are chosen so as to give lowest locants
 * to fixed numbering of a polycyclic ring system, as in naphthalene, quinoline, etc., then to …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 390, P-31.2.1, after the first paragraph and before box. [corrected 31 December 2025]
 *     Add If both hydro and dehydro prefixes are used in name, dehydro prefixes are cited before hydro
 *     prefixes with the order not affected by multipliers.
 *   Page 390, P-31.2.1, after text. [corrected 31 December 2025, modified 22.1.2026]
 *     Add Example.
 *     1,2,7,8-tetradehydro-3,4-dihydro[12]annulene
 *     (1Z,3Z,7Z)_cyclododeca-1,3,7-triene-5,11-diyne (PIN)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-31.2.1', [
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P310201.gif', name: '1,2,7,8-tetradehydro-3,4-dihydro[12]annulene' },
]);
