/**
 * P-54.4.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Hantzsch-Widman heteromonocycles
 * Preferred IUPAC names for Hantzsch-Widman rings correspond to either fully unsaturated or fully
 * saturated compounds (see P-22.2.2.1.1). ‘Hydro’ prefixes added to names of fully unsaturated
 * Hantzsch-Widman rings lead to preferred IUPAC names for partially unsaturated rings; names
 * containing the ‘dehydro’ prefix are allowed only in general nomenclature.
 * The final ‘e’ in Hantzsch-Widman names is required in preferred IUPAC names; it is still optional in
 * general nomenclature. In the 1979 Rules (ref. …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-54.4.1', [
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P540401a.gif', pin: '1H-phosphole' },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P540401b.gif', pin: '2,3-dihydro-1H-phosphole', otherNames: ['2,3-didehydrophospholane'] },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P540401c.gif', pin: 'phospholane' },
]);
