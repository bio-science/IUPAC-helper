/**
 * P-82.6.3.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “When a nuclide occupies a position that is not numbered or when its position cannot be easily
 * defined according to rule P-82.6.3.1, the nuclide symbol is included in the entire symbol of the
 * group through which it is linked to the main part of the structure. This rule is useful in general
 * nomenclature in which many names are constructed without locants.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-82.6.3.3', [
  // Drawn in the Blue Book.
  { drawing: 'P8gif/P82632a.gif', pin: '1-(naphthalen-2-yl)-2-phenyl(1-¹⁵N)diazene', otherNames: ['naphthalene-2-(¹⁵N=N)azobenzene'] },
  { formula: 'CH3-CH2-CH=¹⁵N-NH2', pin: '1-propylidene(1-¹⁵N)hydrazine', otherNames: ['propanal (¹⁵N-NH2)hydrazone'] },
  // Drawn in the Blue Book.
  { drawing: 'P8gif/P82632b.gif', pin: '3-[ethyl(2-³⁴S)trisulfanyl]propanoic acid', otherNames: ['3-[ethyl(S-³⁴S-S)trithio]propionic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P8gif/P82632c.gif', pin: '1-(1-chloronaphthalen-2-yl)-2-phenyl(1-¹⁵N)diazene 2-oxide', otherNames: ['1-chloro-2-(phenyl-ON¹⁵N-azoxy)naphthalene'] },
]);
