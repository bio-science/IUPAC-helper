/**
 * P-31.1.1.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The presence of one or more double or triple bonds in an otherwise saturated parent hydride [except
 * for parents with Hantzsch-Widman names (see P-22.2.2.1.1), or retained names denoting partial
 * hydrogenation as indicated later (see P-31.2.3.3.1)] is denoted by changing the ending ‘ane’ of the
 * name of a saturated parent hydride to ‘ene’ or ‘yne’. Locants as low as possible are given to
 * multiple bonds as a set, even though this may at times give ‘yne’ endings lower locants than ‘ene’
 * endings. …
 * Exceptionally, the endings ‘ene‘ and ‘yne‘ can be added to the ending ‘ane’ in spiro compounds (see
 * SP-2.4, ref. 8), phane nomenclature (see PhII-5.3.1, ref. …
 * If the stereochemistry of a double bond is indicated in a structure it should be specified by E or Z
 * with the appropriate locant. …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 374, P-31.1.1.1, after text. [corrected 4 September 2024]
 *     Add If the stereochemistry of a double bond is indicated in a structure it should be specified
 *     by E or Z with the appropriate locant. This includes double bonds in rings of eight or more
 *     members (see P-91.2.2).
 *   Page 374, P-31.1.1.1, example 2. [corrected 19 September 2018]
 *     For prop-1-yne (PIN)
 *     read propyne (PIN)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-31.1.1.1', [
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P310101a.gif', pin: 'but-1-ene' },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P310101b.gif', pin: 'propyne' },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P310101c.gif', pin: 'pent-3-en-1-yne' },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P310101d.gif', pin: 'pent-1-en-4-yne' },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P310101e.gif', pin: '4-azabicyclo[8.5.1]hexadec-1(15)-ene' },
]);
