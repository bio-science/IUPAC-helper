/**
 * P-67.2.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Acid halides and pseudohalides of di- and polynuclear noncarbon oxoacids
 * Acid halides and pseudohalides, in which all OH groups have been replaced by halides or pseudohalide
 * atoms or groups, are named by functional class nomenclature by replacing the name ‘acid’ by the name
 * of the appropriate halide or pseudohalide. For acid halides and acid pseudohalides the senority is
 * halides (alphabetical) followed by the following seniority for the halogenides: N3, CN, NC, NCO,
 * NCS, NCSe, NCTe.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 955, P-67.2.3, example 5. [corrected 25 August 2016]
 *     For 1-amido-2-imidodiphosphonic chloride
 *     read 3-amido-2-imidodiphosphonic chloride
 *     Replace the structure with:
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-67.2.3', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P67230a.gif', name: '2-imidodiphosphonic 1-bromide 3-chloride' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P67230b.gif', name: '2-thiodiphosphoric tetrachloride' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P67230c.gif', pin: 'diphosphoric tetraisocyanate' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P67230d.gif', pin: 'cyanohypodiphosphorous triiodide' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P67230e.gif', name: '3-amido-2-imidodiphosphonic chloride' },
]);
