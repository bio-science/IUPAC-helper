/**
 * P-45.2.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The preferred IUPAC name is based on the senior parent structure that has the lower locant or set
 * of locants for substituents cited as prefixes to the parent structure (other than ‘hydro/dehydro’
 * prefixes) in their order of citation in the name.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 526, P-45.2.3, example (3). [corrected 3 January 2020]
 *     For not 2-ethyl-7-[(7-ethyl-8-propylnaphthalen-2-yl)oxy]-1-propylnaphthalene
 *     read not 2-ethyl-7-[(8-ethyl-7-propylnaphthalen-2-yl)oxy]-1-propylnaphthalene
 *     replace the structure with:
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-45.2.3', [
  { pin: '3-chloro-7-[(4-chloro-3-nitroquinolin-7-yl)sulfanyl]-4-nitroquinoline', notNames: ['4-chloro-7-[(3-chloro-4-nitroquinolin-7-yl)sulfanyl]-3-nitroquinoline', 'the locant sets are the same in both names', 'i.e', '‘3,4,7’', 'but in their order of appearance in the name the locant set ‘3,7,4’ in the PIN is lower than ‘4,7,3’'] },
  { pin: '2-bromo-N-(4-bromo-2-chlorophenyl)-4-chloroaniline', notNames: ['4-bromo-N-(2-bromo-4-chlorophenyl)-2-chloroaniline'] },
  { pin: '1-ethyl-7-[(7-ethyl-8-propylnaphthalen-2-yl)oxy]-2-propylnaphthalene', notNames: ['2-ethyl-7-[(8-ethyl-7-propylnaphthalen-2-yl)oxy]-1-propylnaphthalene', 'the locant sets are the same in both names', 'i.e', '‘1,2,7’', 'but in their order of appearance in the name', 'the locant set in the PIN ‘1,7,2’ is lower than ‘2,7,1’'] },
  { pin: '5-bromo-4-(2-bromo-1-fluoropropyl)-6-fluoroheptanoic acid', notNames: ['6-bromo-4-(1-bromo-2-fluoropropyl)-5-fluoroheptanoic acid'] },
  { pin: '3-bromo-2-(2-bromo-1-hydroxyethyl)-4-hydroxybutanoic acid', notNames: ['4-bromo-2-(1-bromo-2-hydroxyethyl)-3-hydroxybutanoic acid'] },
  { name: '11-ethyl-8-(4-ethyl-3-methylhex-5-en-1-yl)-12-methyltetradeca-1,3,13-triene (PIN) (I)', notNames: ['12-ethyl-8-(3-ethyl-4-methylhex-5-en-1-yl)-11-methyltetradeca-1,3,13-triene (II) the locant sets are the same in both names', 'i.e', '‘8,11,12’', 'but in their order of appearance in the name the locant set ‘11,8,12’ in the PIN is lower than ‘12,8,11’'] },
  { pin: '2-(2-bromoethyl)-4-chlorobutan-1-ol', notNames: ['4-bromo-2-(2-chloroethyl)butan-1-ol the locant sets are the same in both names', 'i.e', '‘2,4’ but in the order of appearance in the name', 'the locant set ‘2,4’ in the PIN is lower than ‘4,2’'] },
  { pin: '1-bromo-5-(bromomethyl)-1,6-dichlorohexane', notNames: ['1,6-dibromo-1-chloro-5-(chloromethyl)hexane'] },
  { pin: '7-ethyl-6-(3-ethylpent-4-en-2-yl)-8-methyldeca-1,3,9-triene', otherNames: ['not', '8-ethyl-7-methyl-6-(4-methylhex-5-en-3-yl)deca-1,3,9-triene'] },
  { pin: 'N-methyl-3-{4-methyl-3-[3-oxo-3-(propylamino)propyl]phenyl}propanamide', notNames: ['3-{2-methyl-5-[3-(methylamino)-3-oxopropyl]phenyl}-N-propylpropanamide'] },
  { pin: '3-[2-bromo-1-(λ⁵-phosphanyl)propyl]-5-chloro-4-(λ⁵-phosphanyl)hexanoic acid', notNames: ['5-bromo-3-[2-chloro-1-(λ⁵-phosphanyl)propyl]-4-(λ⁵-phosphanyl)hexanoic acid'] },
  { pin: '4-(⁸¹Br)bromo-3-[1-(⁸¹Br)bromo-2-bromopropyl]-5-chlorohexanoic acid', notNames: ['4-(⁸¹Br)bromo-5-bromo-3-[1-(⁸¹Br)bromo-2-chloropropyl]hexanoic acid'] },
  { pin: '5-butyl-8-ethyl-3-methyl-6-propyldecane', notNames: ['6-butyl-3-ethyl-8-methyl-5-propyldecane'] },
  { pin: '1-ethyl-6-[(8-ethyl-5-propylnaphthalen-2-yl)selanyl]-4-propylnaphthalene', notNames: ['4-ethyl-6-[(5-ethyl-8-propylnaphthalen-2-yl)selanyl]-1-propylnaphthalene: both have the locant set ‘1,4,6’ but the PIN set is in the order ‘1,6,4’ which is lower than ‘4,6,1’'] },
  { pin: '1,5-dibromo-4-(2-bromo-1-iodoethyl)-1,6-dichlorohexane', notNames: ['1,6-dibromo-4-(1-bromo-2-chloroethyl)-1-chloro-5-iodohexane'] },
]);
