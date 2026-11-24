/**
 * P-103.2.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Derivatives formed by substitution
 * Retained names are used to indicate carbon, nitrogen, oxygen and sulfur substitution. Substitution
 * on carbon atoms follows the principles, rules and conventions of substitutive nomenclature.
 * Numerical locants and locants ‘N’, ‘O’, and ‘S’ indicate the location of the substitution on
 * nitrogen, oxygen, or sulfur atoms. For lysine, locants ‘N²’ and ‘N⁶’ are used to denote the two
 * amino groups located at positions ‘2’ and ‘6’, respectively.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-103.2.3', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P103230a.gif', name: '5-hydroxytryptophan' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P103230b.gif', name: '3-amino-L-alanine' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P103230d.gif', name: '2-(3,5-dihydroxyphenyl)-L-glycine' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P103230e.gif', name: 'N-[(5S)-5-amino-5-carboxypentyl]-L-glutamic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P103230f.gif', name: 'N-(1-deoxy-α-D-fructopyranos-1-yl)-L-alanine' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P103230g.gif', name: 'methyl N-acetyl-L-alaninate' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P103230h.gif', name: 'S-benzyl-L-cysteine' },
  { formula: '(HO)2N-CH2-COOH', name: 'N,N-dihydroxyglycine' },
  { formula: '(HO)2N-CH(NH2)-COOCH3', name: 'N-(1-amino-2-methoxy-2-oxoethyl)azonous acid' },
]);
