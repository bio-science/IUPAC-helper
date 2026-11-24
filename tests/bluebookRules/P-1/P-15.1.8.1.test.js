/**
 * P-15.1.8.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Substitution rules for Type 1 retained names
 * Type 1 retained names of parent hydrides described in Chapters P-2 and P-3 have unlimited
 * substitution by substituent groups cited either as suffixes or prefixes.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-15.1.8.1', [
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1501l.gif', pin: '2-fluoro-3-nitrobutanedioic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1501m.gif', pin: '5-aminoazulen-2-ol', notNames: ['2-hydroxyazulen-5-amine'] },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1501n.gif', pin: '1H-indene-1,2,3-trione', otherNames: ['indane-1,2,3-trione'] },
]);
