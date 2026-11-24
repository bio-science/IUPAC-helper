/**
 * P-33.2.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Derived preferred and preselected suffixes
 * Derived suffixes are formed in various ways by modifying the basic suffixes of Table 3.3. There is
 * no general rule governing the elision of the final letter ‘o’ of the functional replacement prefixes
 * and infixes before a vowel. It is elided or not according to traditional usage, for example in the
 * suffixes ‘thioic acid’ and ‘imidic acid’. The preferred suffixes are as follows:
 * (1) Basic suffixes that include a carbon atom are modified by functional replacement by using
 * infixes to indicate the replacement of oxygen atoms by –OO–, –S–, =S, –Se–, =Se, –Te–, =Te, =NH and
 * …
 * (2) Basic suffixes that include an implied carbon atom are modified by functional replacement, using
 * prefixes to indicate the replacement of oxygen atoms by –OO–, –S–, =S, –Se–, =Se, –Te–, =Te, =NH …
 * (3) Basic suffixes that do not include a carbon atom are modified by functional replacement
 * nomenclature using prefixes to indicate the replacement of oxygen atoms by other chalcogen atoms.
 * (4) The stem ‘sulf’ is replaced by ‘selen’ and ‘tellur’ to generate the selenium and tellurium
 * analogues of sulfonic and sulfinic acids.
 * …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 412, P-33.2.2 (7). [corrected 24 February 2021]
 *     Replace by
 *     Suffixes with –NH2 and =NH groups substituted by an –OH group are named in two ways:
 *     (1) are named as N-hydroxy derivatives of amides or imidic acids;
 *     (2) by modifying the ‘-oic acid’ or ‘-carboxylic acid’ suffix of a systematically named acid to
 *     ‘-hydroxamic acid’ or ‘-carbohydroxamic acid’ and ‘-hydroximic acid’ or ‘-carbohydroximic acid’,
 *     or the ‘-ic acid’ ending of the retained name of an acid to ‘-hydroxamic acid’ or ‘-hydroximic
 *     acid’. The letter ‘o’ is added for euphony between ‘h’ and a preceding consonant.
 *     Method (1) is used for preferred IUPAC names.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-33.2.2', [
  { name: 'imidic acid', notNames: ['imidoic acid'] },
  { suffix: 'one' },
  { suffix: 'thione' },
  { suffix: 'selone', notNames: ['selenone'] },
  { suffix: 'tellone', notNames: ['tellurone'] },
  { suffix: 'thiol' },
  { suffix: 'peroxol' },
  { suffix: 'OS-thioperoxol' },
  { suffix: 'sulfonic acid' },
  { suffix: 'sulfinic acid' },
  { suffix: 'selenonic acid' },
  { suffix: 'tellurinic acid' },
  { suffix: 'sulfonic acid' },
  { suffix: 'sulfonoperoxoic acid' },
  { suffix: 'sulfonodihydrazonic acid' },
  { suffix: 'seleninic acid' },
  { suffix: 'seleninothioic S-acid' },
  { suffix: 'telluronic acid' },
  { suffix: 'telluronimidic acid' },
  { suffix: 'sulfinic acid' },
  { suffix: 'sulfinohydrazonic acid' },
  { suffix: 'sulfonic acid' },
  { suffix: 'sulfonamide' },
  { suffix: 'seleninic acid' },
  { suffix: 'seleninohydrazide' },
  { formula: 'CH3-CH2-CO-NH2', pin: 'propanamide' },
  { formula: 'CH3-CH2-CO-NH-OH', pin: 'N-hydroxypropanamide', otherNames: ['propanohydroxamic acid'] },
  { formula: 'CH3-CH2-C(=NH)-OH', pin: 'propanimidic acid' },
  { formula: 'CH3-CH2-C(=N-OH)-OH', pin: 'N-hydroxypropanimidic acid', otherNames: ['propanohydroximic acid'] },
]);
