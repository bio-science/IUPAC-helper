/**
 * P-93.3.4.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The chirality symbols ‘R/S ’.
 * The stereodescriptors ‘R’ and ‘S’ (as defined in P-92.2) are used to indicate the absolute
 * configuration of a trigonal pyramidal system discussed in P-93.3.3.2 (see Rule IR-9.3.4.3, ref. 12).
 * …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1227, P-93.3.4.1, example 4.. [modified 12 May 2021]
 *     For (R)-[methyl(phenyl)propylphosphane] (PIN)
 *     read (R)-methyl(phenyl)(propyl)phosphane (PIN)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-93.3.4.1', [
  // Drawn in the Blue Book.
  { drawing: 'P9gif/P93341c.gif', pin: 'ethyl (R)-4-nitrobenzene-1-sulfinate' },
]);
