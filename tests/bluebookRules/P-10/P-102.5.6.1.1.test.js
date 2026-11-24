/**
 * P-102.5.6.1.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “O-Acetyl and O-alkyl functionalization.
 * For O-acyl derivatives, names with the acid component cited as a separate word ending in ‘ate’ after
 * the monosaccharide name are preferred to names using O-acyl group prefixes. …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-102.5.6.1.1', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102561a.gif', name: '6-O-trityl-β-D-glucopyranose 2,4-diacetate' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102561b.gif', name: '2,3,4,6-tetra-O-methyl-β-D-glucopyranose' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102561c.gif', name: '4,6-di-O-methyl-β-D-galactoyranose' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102561d.gif', name: 'phenyl β-D-glucopyranoside 6-(ethyl carbonate)' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102561e.gif', name: 'D-mannose 2,3,4,5,6-pentabenzoate' },
]);
