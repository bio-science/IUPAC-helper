/**
 * P-107.4.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Glycoglycerolipids
 * Specific compounds are named on the basis of the parent glycerol, whose configuration is
 * specifically numbered as indicated in P-107.3.2]”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1436, P-107.4.2 example. [modified 28 April 2023]
 *     For (2S)-3-(O-β-D-galactopyranosyl)propane-1,2-diyl dioctadecanoate
 *     read (2S)-3-(β-D-galactopyranosyloxy)propane-1,2-diyl di(octadecanoate)
 *     replace the structure with:
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-107.4.2', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P107420a.gif', name: '3-O-β-D-galactopyranosyl-1,2-di-O-octadecanoyl-sn-glycerol' },
]);
