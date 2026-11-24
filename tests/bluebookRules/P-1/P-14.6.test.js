/**
 * P-14.6
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “NONALPHANUMERICAL ORDER
 * Alphanumerical ordering resolves practically all of the ordering problems for organic names.
 * However, there are the occasional names in which the alphanumerical character numberings are
 * identical. In such cases, other characters, such as enclosing marks or punctuation marks, must be
 * compared with letters and/or numbers, or with each other to select a preferred IUPAC name. Letters
 * or numbers are always preferred to any other character. …
 * Note: Previous recommendations did not provide rules for selection
 * of a preferred name beyond the ordering alphanumerical characters. For compounds whose
 * alphanumerical characterics do not lead to a unique name, an ordering for nonalphanumerical
 * characters, such as …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 46, P-14.6, example 3. [modified 28 April 2023]
 *     For
 *     N-{2-[(acetyldimethylsilyl)methoxy]ethyl}-N′-[2-({2-[(2-aminoethyl)amino]ethyl}amino)ethyl]ethane-1,2-diamine
 *     read
 *     N1-(2-{[acetyldi(methyl)silyl]methoxy}ethyl)-N²-[2-({2-[(2-aminoethyl)amino]ethyl}amino)ethyl]ethane-1,2-diamine
 *     for
 *     N-[2-({2-[(acetyldimethylsilyl)methoxy]ethyl}amino)ethyl]-N′-{2-[(2-aminoethyl)amino]ethyl}ethane-1,2-diamine
 *     read
 *     N1-{2-[(2-{[acetyldi(methyl)silyl]methoxy}ethyl)amino]ethyl}-N²-{2-[(2-aminoethyl)amino]ethyl}ethane-1,2-diamine
 *     for ...nonalphanumerical ‘{’ is preferred to ‘(’]
 *     read ...nonalphanumerical ‘{’ is preferred to ‘[’]
 *     for
 *     N-(2-aminoethyl)-N′-(11,11-dimethyl-12-oxo-9-oxa-3,6-diaza-11-silatridecan-1-yl)ethane-1,2-diamine
 *     (PIN)
 *     read 19-amino-3,3-dimethyl-5-oxa-8,11,14,17-tetraaza-3-silanonadecan-2-one (PIN)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-14.6', [
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1406a.gif', pin: '3-[amino(methyl)silyl]-3-[(aminomethyl)silyl]cyclopentan-1-ol', otherNames: ['{not 3-[(aminomethyl)silyl]-3-[amino(methyl)silyl]cyclopentan-1-ol'] },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1406b.gif', pin: '1-[(cyclohexylmethoxy)methyl]-4-{[4-(cyclohexylmethyl)cyclohexyl]methyl}cyclohexane', otherNames: ['{not 1-({4-[(cyclohexylmethoxy)methyl]cyclohexyl}methyl)-4-(cyclohexylmethyl)cyclohexane'] },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1406c.gif', name: 'N¹-(2-{[acetyldi(methyl)silyl]methoxy}ethyl)-N²-[2-({2-[(2-aminoethyl)amino]ethyl}amino)ethyl]ethane-1,2-diamine' },
]);
