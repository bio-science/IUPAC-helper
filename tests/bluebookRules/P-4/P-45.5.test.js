/**
 * P-45.5
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “CRITERIA RELATED TO ALPHANUMERICAL ORDER OF NAMES
 * The preferred IUPAC name is the name that is earlier in alphanumerical order (see P-14.5).
 * Alphabetic letters are considered first in the order that they appear in the name; all Roman letters
 * are considered before any italic letters, unless the latter are used as locants or are a part of a
 * compound or composite locant, for example, ‘N’ and ‘4a’. Then, if still there is a choice, numerical
 * locants are considered in the order of their appearance in the name.”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-45.5', [
  { pin: '1-bromo-4-chloro-2-{2-[(1,4-dibromonaphthalen-2-yl)methoxy]ethyl}naphthalene', notNames: ['1,4-dibromo-2-{[2-(1-bromo-4-chloronaphthalen-2-yl)ethoxy]methyl}naphthalene'] },
  { pin: '2-bromo-4-chloro-N-(2,4-dibromophenyl)aniline', notNames: ['2,4-dibromo-N-(2-bromo-4-chlorophenyl)aniline'] },
  { pin: '1³-bromo-1⁴-chloro-2-(3,4-dibromonaphthalen-2-yl)-1(2)-naphthalena-3,5(1,4),7(1)-tribenzenaheptaphane', notNames: ['1³,1⁴-dibromo-2-(3-bromo-4-chloronaphthalen-2-yl)-1(2)-naphthalena-3,5(1,4),7(1)-tribenzenaheptaphane'] },
  { pin: '4-(1,2-difluoropropyl)-5,6-dinitroheptanoic acid', notNames: ['4-(1,2-dinitropropyl)-5,6-difluoroheptanoic acid'] },
  { pin: '5-(⁸¹Br)bromo-3-[3-(⁸¹Br)bromobutan-2-yl]-4-nitrohexanoic acid', notNames: ['5-(⁸¹Br)bromo-3-[2-(⁸¹Br)bromo-1-nitropropyl]-4-methylhexanoic acid'] },
]);
