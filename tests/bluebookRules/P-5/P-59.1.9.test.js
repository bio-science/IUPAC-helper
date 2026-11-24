/**
 * P-59.1.9
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Characteristic groups
 * In substitutive nomenclature, some characteristic groups can be denoted either as suffixes or
 * prefixes (see P-33 and P-35), but others only as prefixes (see Table 5.1). Functional class names
 * differ in that a separate word (or a suffix in some languages) designating the name of a functional
 * class is associated with a substituent group name describing the reminder of the structure.
 * Characteristic groups that can be cited as suffixes in substitutive nomenclature are not necessarily
 * identical with groups designated by the name of a corresponding functional class when functional …
 * The characteristic groups listed in Table 5.1 are always cited as prefixes to the name of the parent
 * structure described in Chapter P-2. …
 * Characteristic groups other than those listed in Table 5.1 may be cited as either suffixes or
 * prefixes to the name of the parent hydride.
 * If characteristic groups other than those given in Table 5.1 are present, one (and only one) kind
 * must be cited as suffix (the principal characteristic group) for classes other than radicals and
 * ions.
 * …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 630, P-59.1.9, Table 5.1, column 3, line 12. [corrected 7 November 2018]
 *     For –S(O2)-R²,⁶
 *     read –S(O)2-R²,⁶
 *   Page 631, P-59.1.9, paragraph 4, line 9 on this page. [corrected 29 January 2020]
 *     For ...propan-2-ol (mot propane-2-ol).
 *     read ...propan-2-ol (not propane-2-ol).
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-59.1.9', [
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P590109a.gif', pin: '1,3-dichloropropane' },
  { formula: 'C6H5-NO', pin: 'nitrosobenzene' },
]);
