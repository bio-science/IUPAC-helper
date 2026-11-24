/**
 * P-65.1.4.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “When another group is present that has priority for citation as a suffix (see seniority of classes,
 * P-41), the following prefixes are used:
 * (1) the simple functional replacement prefix ‘carbonoperoxoyl-’ or the compound prefix
 * ‘hydroperoxycarbonyl-’, formed by concatenation based
 * on the simple acyl group ‘carbonyl’, for >C=O (see P-65.2.1.5) is used to denote the acyl group
 * –C(O)-OOH as a substituent; the prefix ‘carbonoperoxoyl’ is used in preferred IUPAC names, except as
 * noted below in (2);
 * (2) the combination of the simple prefixes ‘hydroperoxy and oxo’ at the end of a carbon chain is
 * used in preferred IUPAC names rather than the prefix ‘hydroperoxycarbonyl-’ or the prefix …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.1.4.2', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650104c.gif', pin: '6-hydroperoxy-6-oxohexanoic acid', otherNames: ['5-carbonoperoxoylpentanoic acid', '5-(hydroperoxycarbonyl)pentanoic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650104d.gif', pin: '2-carbonoperoxoylbenzoic acid', otherNames: ['2-(hydroperoxycarbonyl)benzoic acid', 'monoperoxyphthalic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650104e.gif', pin: '3-carbonoperoxoylpyridin-1-ium chloride', otherNames: ['3-(hydroperoxycarbonyl)pyridin-1-ium chloride'] },
]);
