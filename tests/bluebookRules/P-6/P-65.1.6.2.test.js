/**
 * P-65.1.6.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Anilic acids
 * N-Phenyl derivatives of amic acids are called ‘anilic acids’ and in general nomenclature are named
 * by changing an ‘amic acid’ ending to ‘anilic acid’. Substitution on the nitrogen atom is indicated
 * by the locant N, even if no substitution is allowed on the parent acid. Anilic acids may also be
 * named as N-substituted amic acids. The locants for substituents on the N-phenyl ring are primed
 * numbers.
 * The combination of the prefixes ‘anilino’ and ‘oxo’ is used for describing –CO-NH-C6H5 at the end of
 * an acyclic chain resulting in preferred IUPAC names”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.1.6.2', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650106d.gif', pin: '5-anilino-5-oxopentanoic acid', otherNames: ['5-oxo-5-(phenylamino)pentanoic acid', '4-(phenylcarbamoyl)butanoic acid', 'N-phenylglutaramic acid', 'glutaranilic acid'] },
  { formula: 'C6H5-NH-CO-COOH', pin: 'anilino(oxo)acetic acid', otherNames: ['oxalanilic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650106e.gif', pin: '2-[(4-nitrophenyl)carbamoyl]benzoic acid', otherNames: ['N-(4-nitrophenyl)phthalamic acid', '4′-nitrophthalanilic acid'] },
]);
