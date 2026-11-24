/**
 * P-67.2.6
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Substituent groups derived from polyacids
 * In the presence of a characteristic group having precedence for citation as principal group,
 * polynuclear noncarbon oxoacids are cited as prefixes. The names of these prefixes are formed by:
 * (1) combinations of acyl groups;
 * (2) on the basis of the names of the group which includes the greatest number of P, As, Sb, S, Se,
 * and Te central atoms.
 * (3) skeletal replacement nomenclature (see P-15.4 and P-51.4), when conditions for its use are
 * satisfied.
 * When there is a choice for parent substituent, seniority is given to parent substituents having the
 * largest size, then, if needed, to alphanumerical order.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 960, P-67.2.6, example 2. [corrected 25 August 2016]
 *     For (1) [({[(methoxysulfinyl)oxy]sulfinyl}oxy)sulfinyl]oxy}acetic acid
 *     read (1) {[({[(methoxysulfinyl)oxy]sulfinyl}oxy)sulfinyl]oxy}acetic acid
 *   Page 961, P-67.2.6, example on this page. [modified 20 March 2019]
 *     For (3) 3,5-disulfanylidene-2,3λ⁴,4,5λ⁴,6-pentathianonan-9-oic acid (PIN)
 *     read (3) 3,5-bis(sulfanylidene)-2,3λ⁴,4,5λ⁴,6-pentathianonan-9-oic acid (PIN)
 *     for (2) 3-(5-methyl-2,4-sulfanylidene-2λ⁴,4λ⁴-pentasulfanyl)propanoic acid
 *     read (2) 3-[5-methyl-2,4-bis(sulfanylidene)-2λ⁴,4λ⁴-pentasulfanyl]propanoic acid
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-67.2.6', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P67260a.gif', pin: '3-[(1,3,3-trihydroxy-1,3-dioxo-1λ⁵,3λ⁵-diphosphoxan-1-yl)oxy]propanoic acid', otherNames: ['3-{[hydroxy(phosphonooxy)phosphoryl]oxy}propanoic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P67260b.gif', pin: '3,5,7-trioxo-2,4,6,8-tetraoxa-3λ⁴,5λ⁴,7λ⁴-trithiadecan-10-oic acid', otherNames: ['{[({[(methoxysulfinyl)oxy]sulfinyl}oxy)sulfinyl]oxy}acetic acid', '[(5-methoxy-1,3,5-trioxo-1λ⁴,3λ⁴,5λ⁴-trisulfoxan-1-yl)oxy]acetic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P67260c.gif', pin: '3,5-bis(sulfanylidene)-2,3λ⁴,4,5λ⁴,6-pentathianonan-9-oic acid', otherNames: ['3-[5-methyl-2,4-bis(sulfanylidene)-2λ⁴,4λ⁴-pentasulfanyl]propanoic acid', '3-[({[(methylsulfanyl)sulfinothioyl]sulfanyl}sulfinothioyl)sulfanyl]propanoic acid'] },
]);
