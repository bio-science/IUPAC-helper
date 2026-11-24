/**
 * P-73.1.1.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Retained names for monocationic mononuclear parent cations of the Group 15, 16, and 17 elements
 * used only for general nomenclature.
 * A parent ion derived formally by adding one hydron to a mononuclear parent hydride of the nitrogen,
 * chalcogen, and halogen families in its standard bonding state is named by adding the term ‘onium’ …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1083, P-73.1.1.1, example 2. [corrected 27 March 2019]
 *     For chloro(trimethyl)phosphonium
 *     read chlorotri(methyl)phosphonium (PIN)
 *     for chloro(trimethyl)phosphanium (PIN)
 *     read chlorotri(methyl)phosphanium (PIN)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-73.1.1.1', [
  { formula: '(CH3)4N⁺', pin: 'N,N,N-trimethylmethanaminium', otherNames: ['tetramethylammonium', 'tetramethylazanium'] },
  { formula: 'Cl(CH3)3P⁺', pin: 'chlorotri(methyl)phosphanium', otherNames: ['chlorotri(methyl)phosphonium'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73111a.gif', pin: 'dimethylsulfanium', otherNames: ['dimethylsulfonium'] },
  { formula: 'CH3-C≡O⁺', name: 'ethylidyneoxonium' },
  { formula: '(C6H5)2I⁺', pin: 'diphenyliodanium', otherNames: ['diphenyliodonium'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73111b.gif', pin: 'chloro(methyl)fluoranium', otherNames: ['chloro(methyl)fluoronium'] },
]);
