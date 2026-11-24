/**
 * P-46.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The principal substituent chain contains the greater number of isotopically modified atoms.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-46.2.1', [
  // Drawn in the Blue Book.
  { drawing: 'P4gif/P460201a.gif', preferredPrefix: '3-methyl[4-²H1]butyl' },
  // Drawn in the Blue Book.
  { drawing: 'P4gif/P460201b.gif', preferredPrefix: '1-(¹⁸O)hydroxy-3-hydroxypropan-2-yl' },
  // Drawn in the Blue Book.
  { drawing: 'P4gif/P460201c.gif', name: '2-(¹⁸O)hydroxy-1-(hydroxymethyl)ethyl' },
]);
