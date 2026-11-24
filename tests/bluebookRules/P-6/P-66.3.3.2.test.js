/**
 * P-66.3.3.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “When two hydrazide groups are present, each is identified by the locants N and N′. To distinguish
 * the four nitrogen atoms, the numerical locant of the position on the parent structure at which the
 * nitrogen atoms are attached is cited as a superscript to the letter locant N or N′ for example, N¹,
 * N′¹, etc. (see also P-62.2.4.1.2).”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 877, P-66.3.3.2, example 2. [modified 11 March 2020]
 *     For ...and '1,4,6' is lower than '1,4,7')
 *     read ...and 'N¹,N′⁴,6' is lower than 'N′¹,N⁴,7')
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.3.3.2', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66332a.gif', pin: 'N¹,N′⁴-dimethylnaphthalene-1,4-dicarbohydrazide' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66332b.gif', pin: 'N¹,N′⁴,6-trimethylnaphthalene-1,4-dicarbohydrazide' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66332c.gif', pin: 'N′,N′′′-methylenediacetohydrazide' },
]);
