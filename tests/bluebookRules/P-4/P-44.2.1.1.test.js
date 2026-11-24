/**
 * P-44.2.1.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “General methodology.
 * In order to apply P-44.2 after P-44.1 has failed to reach a conclusion, there must not be a
 * characteristic group present in the compound, or the same number of a characteristic group must be
 * present …
 * Note: In this compound, there is no characteristic group to be cited as suffix. One ring must be
 * chosen as the senior ring that will serve as the parent hydride; …
 * Note: In the above compound, there is no characteristic group to be cited as suffix. One ring must
 * be chosen as the senior ring that will serve as the parent hydride; …
 * Note: In this compound, there are two ring systems and one ring. No characteristic group to be cited
 * as suffix is present. …
 * Note: In this compound, ‘morpholine’ is chosen as parent hydride, as a decision in the selection of
 * the senior ring cannot be made until criterion (g ) in P-44.2.1 is reached. …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 455, P-44.2.1.1, example on this page, explanation line 3. [corrected 18 May 2023]
 *     For ...criterion (f) in P-44.2.1...
 *     read ...criterion (g) in P-44.2.1...
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-44.2.1.1', [
  // Drawn in the Blue Book.
  { drawing: 'P4gif/P440201a.gif', pin: '2-[(naphthalen-2-yl)methyl]pyridine' },
  // Drawn in the Blue Book.
  { drawing: 'P4gif/P440201b.gif', pin: '1,8-di(bicyclo[3.2.1]octan-3-yl)anthracene' },
  // Drawn in the Blue Book.
  { drawing: 'P4gif/P440201c.gif', pin: '4-[(4-fluoro-2-methyl-1H-indol-5-yl)oxy]-6-methoxy-7-[3-(pyrrolidin-1-yl)propoxy]quinazoline' },
  // Drawn in the Blue Book.
  { drawing: 'P4gif/P440201d.gif', pin: '4-(6-{2-[(3-methylphenyl)methylidene]hydrazin-1-yl}-2-[2-(pyridin-2-yl)ethoxy]pyrimidin-4-yl)morpholine' },
]);
