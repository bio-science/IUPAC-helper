/**
 * P-68.1.4.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The names boric acid, boronic acid, and borinic acid are preselected retained names for the
 * compounds B(OH)3, HB(OH)2, and H2B(OH), respectively (see P-67.1.1). They are preferred IUPAC names
 * for deriving the names of the corresponding salts, esters, or anhydrides; or when the hydrogen
 * atom(s) attached to the boron atom is (are) substituted, for example methylboronic acid for
 * CH3-B(OH)2. Chalcogen analogues are named using infixes to denote functional replacement of oxygen
 * by S, Se, and Te.
 * Acid names such as these are not used for other elements of Group 13, which are named using
 * substitutive nomenclature based on the appropriate parent hydride. …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 972, P-68.1.4.1, example 4 on this page. [modified 20 March 2019]
 *     For N,N′-bis(diphenylboranyl)ethane-1,2-diamine) (PIN)
 *     read N¹,N²-bis(diphenylboranyl)ethane-1,2-diamine (PIN)
 *     for (not N,N-ethane-1,2-diylbis(diphenylborinic amide);
 *     read (not N,N′-(ethane-1,2-diyl)bis(diphenylborinic amide);
 *     for not N,N’-ethane-1,2-diylbis(diphenylboranamine);
 *     read not N,N′-(ethane-1,2-diyl)bis(diphenylboranamine);
 *     replace the structure with:
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-68.1.4.1', [
  { formula: 'CH3-B(O⁻)2 2 Na⁺', pin: 'disodium methylboronate' },
  { formula: 'CH3-B(O⁻)(OH) Na⁺', pin: 'sodium hydrogen methylboronate' },
  { formula: 'CH3-B(OH)2', pin: 'methylboronic acid', notNames: ['methylboranediol'] },
  { formula: '(CH3)2B(SH)', pin: 'dimethylborinothioic acid', otherNames: ['dimethyl(thioborinic) acid'], notNames: ['dimethylboranethiol'] },
  { formula: 'B(S-CH3)3', pin: 'trimethyl borotrithioate', otherNames: ['trimethyl trithioborate'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68141a.gif', pin: 'S-ethyl O-methyl hydrogen borothioate', otherNames: ['S-ethyl O-methyl hydrogen thioborate'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68141b.gif', pin: 'ethylboronochloridic acid', otherNames: ['chloro(ethyl)borinic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68141c.gif', pin: 'O-ethyl OS-methyl phenylborono(thioperoxoate)', otherNames: ['O-ethyl OS-methyl phenyl(thioperoxy)boronate'] },
  { formula: '(CH3)2Al-O⁻ Na⁺', name: 'sodium dimethylalumanolate' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68141d.gif', pin: 'N¹,N²-bis(diphenylboranyl)ethane-1,2-diamine', notNames: ['N,N′-(ethane-1,2-diyl)bis(diphenylborinic amide)', 'N,N′-(ethane-1,2-diyl)bis(diphenylboranamine)', '1,1,6,6-tetraphenyl-2,5-diaza-1,6-diborahexane'] },
]);
