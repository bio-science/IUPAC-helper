/**
 * P-72.8.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The suffix ‘ide’ is preferred to the suffix ‘uide’ involved with the λ-convention; the suffix ‘ide’
 * is also preferred over ‘uide’ when the λ-convention is involved in both anionic centers.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1082, P-72.8.2, example 2. [corrected 17 June 2020]
 *     For 1λ⁶, 3λ⁶-dithiocane-1,3-diide (PIN)
 *     read 1λ⁶,3λ⁶-dithiocane-1,3-diide (PIN)
 *     for 1λ⁴, 3λ⁴-dithiocane-1,3-diuide
 *     read1λ⁴,3λ⁴-dithiocane-1,3-diuide
 *     for 1λ⁴, 3λ⁶-dithiocan-3-id-1-uide
 *     read (not 1λ⁴,3λ⁶-dithiocan-3-id-1-uide; identical groups must not be named differently within a
 *     name, if possible)
 *     [remove space in names]
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-72.8.2', [
  { formula: 'H3C⁻', pin: 'methanide', otherNames: ['λ²-methanuide'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P72820a.gif', pin: '1λ⁶,3λ⁶-dithiocane-1,3-diide', otherNames: ['1λ⁴,3λ⁴-dithiocane-1,3-diuide'], notNames: ['1λ⁴,3λ⁶-dithiocan-3-id-1-uide'] },
]);
