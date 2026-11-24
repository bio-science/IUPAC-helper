/**
 * P-15.3.2.2.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “In multiplicative nomenclature, a superscript arabic numeral indicating the locant of the parent
 * structure at which the characteristic group is attached, and an appropriate number of primes, for
 * example, N¹, N²′, N⁴′′, etc., is used to distinguish among the nitrogen atoms of identical
 * structural units containing two or more characteristic groups with one or more nitrogen atoms.
 * For parent structures with multiple nitrogen atoms, such as di- or tricarboximidamides (P-66.4.1.4)
 * and cyclophanamines (see P-62.2.5.3), even more complicated locant structures are required, such as
 * …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-15.3.2.2.2', [
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1503aw.gif', pin: 'N¹,N¹′-methylenedi(benzene-1,4-diamine)' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1503ax.gif', pin: 'N¹,N¹′-methylenedi(pentane-1,3,4-triamine)' },
]);
