/**
 * P-45.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The preferred IUPAC name is based on the senior parent structure that has the maximum number of
 * substituents cited as prefixes (other than ‘hydro/dehydro’) to the parent structure.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 519, P-45.2.1, example (6). [modified 3 June 2020]
 *     For [not 3-{[(1,1,-dimethyl-λ⁴-thian-2-yl)methyl]sulfanyl}-λ⁴-thiane;
 *     read [not 3-{[(1,1-dimethyl-1λ⁴-thian-3-yl)methyl]sulfanyl}-1λ⁴-thiane;
 *   Page 519, P-45.2.1, example (8), move to P-45.2.3 and adjust remaining example numbers. [corrected
 *   3 March 2021]
 *     For [not 3-ethyl-6-(2-methylbutyl)-5-propyldecane; the PIN parent chain has more substituents;
 *     four simple substituents vs. three (two simple and one compound) substituent]
 *     read [not 6-butyl-3-ethyl-8-methyl-5-propyldecane; both have the set of locants '3,5,6,8' but
 *     the PIN has them in the order '5,8,3,6' which is lower than 6,3,8,5]
 *   Page 520, P-45.2.1, example (10), move to P-45.2.2 and adjust the remaining example numbers.
 *   [modified 3 March 2021]
 *     For [not 3-chloro-5-(4-hydroxypentan-2-yl)-4-methylnonane-2,8-diol; the PIN parent chain has
 *     more substituents; four (three simple and one compound) substituents vs. three (two simple and
 *     one compound)]
 *     read [not 7-chloro-5-(3-hydroxybutyl)-4,6-dimethylnonane-2,8-diol: the locant set of the PIN is
 *     '3,4,5,6' which is lower than '4,5,6,7']
 *     replace structure with:
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-45.2.1', [
  { pin: '4-methoxy-N-phenylaniline', notNames: ['N-(4-methoxyphenyl)aniline'] },
  { pin: '4-chloro-2-[(3-cyanophenyl)methyl]benzonitrile', notNames: ['3-[(5-chloro-2-cyanophenyl)methyl]benzonitrile'] },
  { pin: '1-methyl-4-(phenoxymethyl)benzene', notNames: ['[(4-methylphenyl)methoxy]benzene'] },
  { pin: 'N,N,2-trimethyl-3-{4-methyl-3-[2-methyl-3-(methylamino)-3-oxopropyl]phenyl}propanamide', notNames: ['3-{5-[(3-dimethylamino)-2-methyl-3-oxopropyl]-2-methylphenyl}-N,2-dimethylpropanamide'] },
  { pin: '1³-chloro-2-(naphthalen-2-yl)-1(2)-naphthalena-3,5(1,4),7(1)-tribenzenaheptaphane', notNames: ['2-(3-chloronaphthalen-2-yl)-1(2)-naphthalena-3,5(1,4),7(1)-tribenzenaheptaphane'] },
  { pin: '1,1-dimethyl-3-{[(1λ⁴-thian-3-yl)sulfanyl]methyl}-1λ⁴-thiane', notNames: ['3-{[(1,1-dimethyl-1λ⁴-thian-3-yl)methyl]sulfanyl}-1λ⁴-thiane'] },
  { pin: '3-ethyl-2-methylhexane', notNames: ['3-isopropylhexane', '3-(propan-2-yl)hexane'] },
  { pin: '6-methyl-4-propylheptanoic acid', notNames: ['4-(2-methylpropyl)heptanoic acid'] },
  { pin: '4-bromo-2-[3-(bromomethyl)pent-1-en-2-yl]-4-methyl-3-methylidenehexanoic acid', otherNames: ['4-bromo-2-[2-(bromomethyl)-1-methylidenebutyl]-4-methyl-3-methylidenehexanoic acid'], notNames: ['4-(bromomethyl)-2-(3-bromo-3-methylpent-1-en-2-yl)-3-methylidenehexanoic acid'] },
  { pin: '2-(disilanyldisulfanyl)-1,1,1-trimethyldisilane', notNames: ['[2-(2,2,2-trimethyldisilanyl)disulfan-1-yl]disilane'] },
  { preselectedName: '3-disilanyl-2-silylhexasilane', notNames: ['3-(trisilan-2-yl)hexasilane', '3-(1-silyldisilanyl)hexasilane'] },
  { pin: '4-[4-carboxy-3-(λ⁶-sulfanyl)phenoxy]-2-phosphanyl-3-(λ⁶-sulfanyl)benzoic acid', notNames: ['4-[4-carboxy-3-phosphanyl-2-(λ⁶-sulfanyl)phenoxy]-2-(λ⁶-sulfanyl)benzoic acid'] },
  { pin: '5-(⁸¹Br)bromo-3-[1-(⁸¹Br)bromopropyl]-4-methylhexanoic acid', notNames: ['4-(⁸¹Br)bromo-3-[3-(⁸¹Br)bromobutan-2-yl]hexanoic acid'] },
]);
