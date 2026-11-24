/**
 * P-57.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “CONSTRUCTION OF LINEAR COMPOUND AND/OR COMPLEX SUBSTITUENT PREFIXES.
 * Linear compound and complex prefixes are constructed in a stepwise manner by working backwards
 * component by component from the free valence. …
 * Contracted prefixes, such as methoxy are considered in their systematic uncontracted form, i.e.
 * methyloxy.
 * Explanation: The primary component is ‘oxy’ in both prefixes (methoxy is treated as methyl and oxy).
 * For the next component, there is a choice between ‘methyl’ and ‘benzyl’. ‘Benzyl’ is chosen; …
 * Explanation: The primary substituent is ‘oxy’ in both prefixes (‘methoxy’ is treated as ‘methyl’ and
 * ‘oxy’). For the next component, there is a choice is between ‘methyl’ and a substituted ‘benzyl’. …
 * Explanation: The primary substituent is ‘oxy’. As the ‘benzyl’ group that follows is substituted,
 * the second component name, as shown in the second example above, is ‘phenylmethoxy’. …
 * Explanation: The primary component involves a choice between a ‘methyl’ group and a (substituted)
 * ‘ethyl’ group. The larger ‘ethyl’ group is chosen. …
 * Explanation: The primary component is ‘oxy’ (‘phenoxy’ is treated as ‘phenyl’ and ‘oxy’). …
 * …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 613, P-57.4, example 3. [modified 3 June 2020]
 *     For 4-[4-(benzyloxy)phenyl]methoxy (prefered prefix)
 *     read [4-(benzyloxy)phenyl]methoxy (preferred prefix)
 *   Page 614, P-57.4, example 1 on this page. [corrected 3 June 2020]
 *     For [1,1′-biphenyl]-4-yloxy (preferred prefix)
 *     read ([1,1′-biphenyl]-4-yl)oxy (preferred prefix)
 *   Page 614, P-57.4, example 1 on this page, explanation, lines 4/5. [corrected 3 June 2020]
 *     For ...which results in the prefix ‘[1,1′-biphenyl]-4-yloxy’.
 *     read ...which results in the prefix ‘([1,1′-biphenyl]-4-yl)oxy’.
 *   Page 614, P-57.4, example 2 on this page. [corrected 7 November 2018]
 *     For [not (dimethylamino)carbonyl]hydrazinylidene]
 *     read [not [(dimethylamino)carbonyl]hydrazinylidene]
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-57.4', [
  { formula: 'C6H5-CH2-O–', preferredPrefix: 'benzyloxy' },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P570400a.gif', name: 'not (4-chlorobenzyl)oxy]' },
  { formula: 'C6H5-NH-CO-CH2–', preferredPrefix: '2-anilino-2-oxoethyl' },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P570400c.gif', notNames: ['4-phenylphenoxy'] },
  { formula: '(CH3)2N-CO-NH-N=', notNames: ['[(dimethylamino)carbonyl]hydrazinylidene'] },
  { formula: 'C6H11-CO-S–', notNames: ['(cyclohexylcarbonyl)sulfanyl'] },
]);
