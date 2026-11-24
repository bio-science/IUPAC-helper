/**
 * P-102.7.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Oligosaccharides without a free hemiacetal group
 * A trisaccharide, for example, is named as a glycosylglycosyl glycoside or glycosyl glycosylglycoside
 * as required. A choice between the two residues linked through their anomeric positions for citation
 * as the ‘glycoside’ portion can be made on the basis of P-102.4. Alternatively, a sequential
 * (end-to-end) naming approach may be used, regardless of P-102.4. The name is formed by the preferred
 * method for naming disaccharides.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-102.7.2.1', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102721a.gif', name: 'β-D-fructofuranosyl α-D-galactopyranosyl-(1→6)-α-D-glucopyranoside' },
]);
