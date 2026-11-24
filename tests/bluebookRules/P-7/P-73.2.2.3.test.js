/**
 * P-73.2.2.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Diazonium ions
 * Cations containing an –N2⁺ group attached to a parent hydride are traditionally named according to
 * the principles of substitutive nomenclature by using the suffix ‘diazonium’ and the multiplying
 * prefixes ‘bis’, ‘tris’, etc. to denote multiplicity. Diazonium ions may also be named on the basis
 * of the parent cation ‘diazenylium’, HN=N⁺. The use of the suffix ‘diazonium’ results in preferred
 * IUPAC names.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1092, P-73.2.2.3, example 3. [corrected 7 August 2019]
 *     For 1,4-phenylenebis(diazenylium) (PIN)
 *     read (1,4-phenylene)bis(diazenylium) (PIN)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-73.2.2.3', [
  { formula: 'CH3-N2⁺', pin: 'methanediazonium', otherNames: ['methyldiazenylium'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73223a.gif', pin: '2,4-dioxopentane-3-diazonium' },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73223b.gif', pin: 'benzene-1,4-bis(diazonium)' },
]);
