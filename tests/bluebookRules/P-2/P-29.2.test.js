/**
 * P-29.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “GENERAL METHODOLOGY FOR NAMING SUBSTITUENT GROUPS
 * The presence of free valences formally derived from the loss of one or more hydrogen atoms from a
 * parent hydride is denoted by suffixes ‘yl’, ‘ylidene’, and ‘ylidyne’, together with multiplying
 * prefixes indicating the number of free valences; lowest locants are assigned to all free valences as
 * a set, then in the order ‘yl’, ‘ylidene’, ‘ylidyne’. In names, the suffixes are cited in the order
 * ‘yl’, ‘ylidene’, ‘ylidyne’. …
 * Systematic names are formed by using the suffixes ‘yl’, ‘ylidene’ and ‘ylidyne’, with elision of the
 * final letter ‘e’ of parent hydrides, when present, according to two methods:
 * (1) The suffixes ‘yl’, ‘ylidene’, and ‘ylidyne’ replace the ending ‘ane’ of the parent hydride name.
 * …
 * (2) The suffixes ‘yl’, ‘ylidene’, and ‘ylidyne’ are added to the name of the parent hydride with
 * elision of the terminal letter ‘e’, if present, when followed immediately by the letter ‘y’. …
 * For the application of these methods in generating preferred IUPAC names, see P-57.1.1.1.”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-29.2', [
  { formula: 'CH3–', preferredPrefix: 'methyl' },
  { formula: 'SiH3–', preselectedPrefix: 'silyl' },
  { formula: 'CH2=', preferredPrefix: 'methylidene' },
  { formula: 'CH3 C≡', preferredPrefix: 'ethylidyne' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P290200a.gif', preselectedPrefix: 'trisilan-1-yl' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P290200b.gif', preferredPrefix: 'propan-2-yl' },
  { formula: 'C6H11–', preferredPrefix: 'cyclohexyl' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P290200c.gif', preferredPrefix: 'bicyclo[2.2.1]heptan-2-yl' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P290200d.gif', preferredPrefix: 'spiro[4.4]nonan-2-ylidene' },
]);
