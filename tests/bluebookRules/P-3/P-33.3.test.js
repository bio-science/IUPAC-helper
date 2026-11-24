/**
 * P-33.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “CUMULATIVE SUFFIXES
 * Suffixes used to denote radical and ionic centers in a parent structure are given in Table 3.4. They
 * are classified in decreasing order of seniority, radicals > anions > cations. Suffixes are added to
 * the name of a parent hydride in the customary manner, or to suffixes expressing another type of
 * radical or ion, or to suffixes denoting characteristic groups. …
 * Note: ‘ene’, ‘yne’, etc. are considered endings not suffixes; they are cumulative endings.”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 413, P-33.3, examples structure 6. [corrected 21 April 2021]
 *     For methanamimiumyl (preferred prefix)
 *     read methanaminiumyl (PIN)
 *     replace structure with:
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-33.3', [
  { formula: 'CH3-CH3', pin: 'ethane' },
  { formula: 'CH3-CH2•', pin: 'ethyl' },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P330300a.gif', pin: 'ethan-2-id-1-yl' },
  { formula: 'CH3-NH2', pin: 'methanamine' },
  { formula: 'CH3-NH3⁺', pin: 'methanaminium' },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P330300c.gif', pin: 'methanaminiumyl' },
  { formula: 'CH3-NH•', pin: 'methanaminyl' },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P330300b.gif', pin: 'naphthalen-3-yl-1(2H)-ylidene' },
]);
