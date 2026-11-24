/**
 * P-70.3.3.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “When two or more cumulative suffixes are present in a name, the order of citation is the reverse of
 * the order of seniority for radicals and ions as given in P-70.2, i.e.,‘ium’, ‘ylium’, ‘ide’, ‘uide’,
 * ‘yl’, ‘ylidene’, ‘ylidyne’.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-70.3.3.1', [
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P70331a.gif', pin: '3-methyl-1-(trimethylsilyl)triaz-2-en-2-ium-1-id-2-yl' },
]);
