/**
 * P-16.2.5
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Spaces are a very important type of punctuation for many kinds of names in the English language. If
 * a space is required in a name, it must be used. On the other hand, the use of spaces where they are
 * not required, for example, in substitutive names that must be written continuously from one end to
 * the other using hyphens to connect the different parts, may be misleading. Spaces are used in:
 * (a) names of acids and salts;
 * (b) functional class names;
 * (c) names formed using a functional modifier;
 * (d) additive names;”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 107, P-16.2.5 (was P-16.2.6) (b), example 2 on this page. [corrected 19 September 2018]
 *     For 1-(ethanesulfonyl)butane (PIN)
 *     read 1-(ethanesulfinyl)butane (PIN)
 *   Page 107, P-16.2.5 (was P-16.2.6) (c), example 2. [corrected 24 July 2019]
 *     For (pentan-2-ylidene)hydroxylamine (PIN)
 *     read (pentan-2-ylidene)hydroxylamine
 *     add N-hydroxypentan-2-imine (PIN)
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-16.2.5', [
  { pin: 'acetic acid' },
  { pin: 'sodium 4-ethoxy-4-oxobutanoate' },
  { pin: 'ethyl acetate' },
  { pin: '2-(carbonocyanidothioyl)benzoyl chloride' },
  { pin: '1-(ethanesulfinyl)butane', otherNames: ['butyl ethyl sulfoxide (P-63.6)'] },
  { pin: '1-ethoxy-1-methoxycyclohexane', otherNames: ['cyclohexanone ethyl methyl ketal (P-66.6.5.1.1)'] },
  { pin: 'N-hydroxypentan-2-imine', otherNames: ['pentan-2-one oxime (P-68.3.1.1.2)'] },
  { pin: 'oxirane', otherNames: ['ethene oxide (P-63.5)'] },
  { pin: 'trimethyl-λ⁵-phosphanone', otherNames: ['trimethylphosphane oxide'] },
]);
