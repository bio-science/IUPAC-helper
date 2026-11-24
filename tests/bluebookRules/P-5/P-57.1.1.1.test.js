/**
 * P-57.1.1.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “When the free valences are in position 1 of substituent groups derived from mononuclear hydrides
 * carbon, silicon, germanium, tin and lead and from acyclic hydrocarbons, preferred prefixes are of
 * the ‘alkyl type’ according to P-29.2; preferred prefixes are of the ‘alkanyl type’ for all
 * mononuclear hydrides other than those mentioned above and for saturated substituent groups when the
 * free valences are not in position 1.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 606, P-57.1.1.1, example 4. [corrected 31 October 2018]
 *     For 1-propanylidene
 *     read propan-1-ylidene
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-57.1.1.1', [
  { formula: 'CH3–', preferredPrefix: 'methyl' },
  { formula: 'PH2–', preselectedPrefix: 'phosphanyl' },
  { formula: 'SiH3–', preselectedPrefix: 'silyl' },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P570101a.gif', preferredPrefix: 'propylidene' },
  { formula: 'CH2=', preferredPrefix: 'methylidene' },
  { formula: 'CH3-C≡', preferredPrefix: 'ethylidyne' },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P570101b.gif', preferredPrefix: 'propan-2-yl' },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P570101c.gif', preselectedPrefix: 'trisilan-1-yl' },
]);
