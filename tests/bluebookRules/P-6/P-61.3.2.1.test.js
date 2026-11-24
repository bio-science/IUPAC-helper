/**
 * P-61.3.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “In P-61.3.1, halogen atoms in their standard bonding number are attached to carbon atoms. The
 * halogen atoms can also be attached to heteroatoms. The prefixes ‘bromo’, ‘chloro’, ‘fluoro’, and
 * ‘iodo’ are used to name halogen compounds when the halogen atoms are attached to B, Al, In, Ga, Tl,
 * Si, Ge, Sn, Pb, and Bi.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 660, P-61.3.2.1, example 1. [corrected 27 February 2019]
 *     For chloro(dimethyl)borane (PIN)
 *     read chlorodi(methyl)borane (PIN)
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-61.3.2.1', [
  { formula: 'Cl-B(CH3)2', pin: 'chlorodi(methyl)borane', otherNames: ['dimethylboranyl chloride'] },
  { formula: 'Cl3Si-CH2I', pin: 'trichloro(iodomethyl)silane' },
  { formula: 'F2Ge=CH2', pin: 'difluoro(methylidene)germane' },
  { formula: 'H2P-PH-Cl', preselectedName: 'chlorodiphosphane' },
]);
