/**
 * P-14.7.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “‘Added indicated hydrogen’. A second type of indicated hydrogen is called ‘added indicated
 * hydrogen’. It describes hydrogen atoms added to a specified structure as the consequence of the
 * addition of a suffix describing a structural modification. ‘Added indicated hydrogen’ is cited in
 * parentheses after the locant of the structural feature to which it refers.
 * ‘Added indicated hydrogen’ is used to introduce a free valence, a radical or an ionic center, or a
 * principal characteristic group into a fully unsaturated heteromonocyclic compound or fused …
 * Detailed procedures for using ‘added indicated hydrogen’ are discussed in P-58.2.2.
 * ‘Added indicated hydrogen’ is not cited for preferred IUPAC names when two identical characteristic
 * groups that essentially remove one of the double bonds of the parent structure are cited as …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 48, P-14.7.2, example 5 on this page. [corrected 10 October 2018]
 *     Replace the structure with:
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-14.7.2', [
  { pin: 'phosphinine' },
  { pin: 'phosphinin-2(1H)-one' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1407e.gif', pin: 'naphthalen-1(2H)-one' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1407f.gif', preferredPrefix: 'quinolin-2(1H)-ylidene' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1407g.gif', pin: 'azulene-3a(1H)-carboxylic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1407h.gif', preferredPrefix: 'isoquinolin-4a(2H)-yl' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1407i.gif', pin: 'anthracen-4a(2H)-ylium' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1407j.gif', pin: 'naphthalene-1,2-dione' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1407k.gif', pin: 'naphthalene-4a,8a-diol' },
]);
