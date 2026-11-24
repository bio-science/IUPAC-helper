/**
 * P-101.6.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The descriptors ‘E’ and ‘Z’, preceded by appropriate locants, are used to describe modified or
 * additional stereochemical configurations for double bonds. The stereodescriptors ‘cis’ and ‘trans’
 * are used in carotenoid nomenclature (ref. 40) and retinoid nomenclature (ref. 49).”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1328, P-101.6.2, example 2. [corrected 17 October 2018]
 *     Replace the structure with:
 *   Page 1329, P-101.6.2, example 3 on this page. [corrected 17 April 2019]
 *     For 1-[(1E,3S)-2,3-dimethyl-4-phenylbut-1-en-1-yl]benzene
 *     read [(1E,3S)-2,3-dimethyl-4-phenylbut-1-en-1-yl]benzene
 *     for 1,1′-[(1E,3S)-2,3-dimethylbutane-1,4-diyl]dibenzene
 *     read 1,1′-[(1E,3S)-2,3-dimethylbut-1-ene-1,4-diyl]dibenzene
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-101.6.2', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101620c.gif', name: '11-cis-retinal' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101620d.gif', name: 'lignane' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101620e.gif', name: '1,1′-[(1E,3S)-(2,3-dimethylbut-1-ene-1,4-diyl)]dibenzene' },
]);
