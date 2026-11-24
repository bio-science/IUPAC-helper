/**
 * P-45.2.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The preferred IUPAC name is based on the senior parent structure that has the lower locant or set
 * of locants for substituents cited as prefixes (other than ‘hydro/dehydro’) to the parent structure.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 523, P-45.2.2, example (5), move to P-45.2.3 and adjust the remaining example numbers.
 *   [corrected 3 March 2021]
 *     For [not 1-ethyl-7-[(5-ethyl-8-propylnaphthalen-2-yl)selenyl]-4-propylnaphthalene; the locant
 *     set '1,4,6' in the PIN is lower than '1,4,7']
 *     read [not 4-ethyl-6-[(5-ethyl-8-propylnaphthalen-2-yl)selanyl]-1-propylnaphthalene: both have
 *     the locant set '1,4,6' but the PIN set is in the order '1,6,4' which is lower than '4,6,1']
 *   Page 524, P-45.2.2, example (10), , move to P-45.2.3 and adjust the remaining example numbers.
 *   [corrected 3 March 2021]
 *     For [not 1,6-dibromo-3-(1-bromo-2-chloroethyl)-6-chloro-2-iodohexane; the locant set '1,1,4,5,6'
 *     in the PIN is lower than '1,2,3,6,6']
 *     read [not 1,6-dibromo-4-(1-bromo-2-chloroethyl)-1-chloro-5-iodohexane; both have the locant set
 *     '1,1,4,5,6' but the PIN set is in the order '1,5,4,1,6' which is lower than '1,6,4,1,5']
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-45.2.2', [
  { pin: '2-(2-amino-4-methylphenoxy)-N-methylaniline', notNames: ['5-methyl-2-[2-(methylamino)phenoxy]aniline'] },
  { pin: '1-bromo-3-chloro-6-nitro-2-[2-(1,3,7-trifluoronaphthalen-2-yl)ethyl]naphthalene', notNames: ['2-[2-(1-bromo-3-chloro-6-nitronaphthalen-2-yl)ethyl]-1,3,7-trifluoronaphthalene'] },
  { pin: '3,3′-[bis(4-carboxyphenyl)methylene]dibenzoic acid', notNames: ['4,4′-[bis(3-carboxyphenyl)methylene]dibenzoic acid'] },
  { pin: '1¹-bromo-2-(4-chloronaphthalen-2-yl)-1(2)-naphthalena-3,5(1,4),7(1)-tribenzenaheptaphane', notNames: ['2-(1-bromonaphthalen-2-yl)-1⁴-chloro-1(2)-naphthalena-3,5(1,4),7(1)-tribenzenaheptaphane'] },
  { pin: '3-[5-(3-amino-2-methyl-3-oxopropyl)-2-methylphenyl]-N-methylpropanamide', notNames: ['2-methyl-3-{4-methyl-3-[3-(methylamino)-3-oxopropyl]phenyl}propanamide'] },
  { pin: '5,6-dibromo-4-(1-chloro-3-nitropropyl)heptanoic acid', notNames: ['5-chloro-4-(1,2-dibromopropyl)-7-nitroheptanoic acid'] },
  { pin: '2-amino-5-(2-chloro-4-hydroxybutyl)-6-methylnonane-1,9-diol', notNames: ['2-amino-7-chloro-5-(5-hydroxypentan-2-yl)nonane-1,9-diol', '5-(3-amino-4-hydroxybutyl)-3-chloro-6-methylnonane-1,9-diol'] },
  { pin: '5-methyl-4-(2-methylprop-1-en-1-yl)hepta-1,5-diene', notNames: ['4-(but-2-en-2-yl)-6-methylhepta-1,5-diene'] },
  { pin: '5-bromo-3-[3-nitro-1-(λ⁵-phosphanyl)propyl]-4-(λ⁵-phosphanyl)hexanoic acid', notNames: ['3-[2-bromo-1-(λ⁵-phosphanyl)propyl]-6-nitro-4-(λ⁵-phosphanyl)hexanoic acid', 'the locant set ‘3,4,5’ in the PIN is lower than the locant set ‘3,4,6’'] },
  { pin: '4-(4-carboxy-2-phosphanylphenoxy)-2-(λ⁵-phosphanyl)benzoic acid', notNames: ['4-[4-carboxy-3-(λ⁵-phosphanyl)phenoxy]-3-phosphanylbenzoic acid'] },
  { pin: '4-[4-carboxy-2-(λ⁴-sulfanyl)phenoxy]-2-(λ⁶-sulfanyl)benzoic acid', notNames: ['4-[4-carboxy-3-(λ⁶-sulfanyl)phenoxy]-3-(λ⁴-sulfanyl)benzoic acid'] },
  { pin: '4-(4-carboxy-2-phosphanylphenoxy)-2-(λ⁶-sulfanyl)benzoic acid', notNames: ['4-[4-carboxy-3-(λ⁶-sulfanyl)phenoxy]-3-phosphanylbenzoic acid'] },
  { pin: '3-{[3-(²H2)amino-5-methylcyclohexa-1,5-dien-1-yl]sulfanyl}-2-methylcyclohexa-2,4-dien-1-(²H2)amine', notNames: ['3-{[3-(²H2)amino-2-methylcyclohexa-1,5-dien-1-yl]sulfanyl}-5-methylcyclohexa-2,4-dien-1-(²H2)amine', 'the locant set ‘2,3’ in the PIN is lower than ‘3,5’'] },
  { pin: '4-(⁸¹Br)bromo-3-[2-(⁸¹Br)bromopropyl]hexanoic acid', notNames: ['5-(⁸¹Br)bromo-3-[1-(⁸¹Br)bromopropyl]hexanoic acid', 'the locant set in the PIN', '‘3,4’ is lower than ‘3,5’'] },
  { pin: '3-chloro-5-(3-hydroxybutyl)-4,6-dimethylnonane-2,8-diol', notNames: ['7-chloro-5-(3-hydroxybutyl)-4,6-dimethylnonane-2,8-diol: the locant set of the PIN is ‘3,4,5,6’ which is lower than ‘4,5,6,7’'] },
]);
