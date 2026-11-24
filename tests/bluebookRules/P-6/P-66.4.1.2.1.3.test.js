/**
 * P-66.4.1.2.1.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “In the presence of a characteristic group having seniority over guanidine (see item 11 in P-41),
 * the following prefixes are used. The prefix guanidino may be used in general nomenclature.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 884, P-66.4.1.2.1.3, example 5. [corrected 13 March 2019]
 *     For carbamimidoylurea (PIN)
 *     read N-carbamimidoylurea (PIN)
 *   Page 884, P-66.4.1.2.1.3, example 6. [corrected 24 October 2018]
 *     Replace the structure with:
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.4.1.2.1.3', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66412f.gif', preferredPrefix: 'carbamimidoylamino' },
  { formula: '(H2N)2C=N-CH2-COOH', name: 'N-(diaminomethylidene)glycine' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66412g.gif', pin: '4-[(diaminomethylidene)amino]butanoic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66412h.gif', pin: '4-[methyl(N-methyl-N-phenylcarbamimidoyl)amino]benzoic acid', otherNames: ['4-({imino[methyl(phenyl)amino]methyl}methylamino)benzoic acid', '4-(N,N′-dimethyl-N′-phenylcarbamimidamido)benzoic acid'] },
  { formula: 'H2N-C(=NH)-NH-CHO', pin: 'N-carbamimidoylformamide', otherNames: ['N-[amino(imino)methyl]formamide'], notNames: ['N-formylguanidine'] },
  { formula: 'H2N-C(=NH)-NH-CO-NH2', pin: 'N-carbamimidoylurea', otherNames: ['N-[amino(imino)methyl]urea'], notNames: ['N-carbamoylguanidine'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66412i.gif', pin: 'N-carbamimidoylacetamide', otherNames: ['N-(C-aminocarbonimidoyl)acetamide', 'N-[amino(imino)methyl]acetamide'], notNames: ['N-acetylguanidine'] },
]);
