/**
 * P-25.1.2.5
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Polynaphthylenes. A hydrocarbon parent component that consists of a monocyclic hydrocarbon with an
 * even number of carbon atoms ortho-fused on alternate sides to the 2,3-positions of naphthalene rings
 * is named by citing a numerical prefix (‘tri’, ‘tetra’, etc.) denoting the number of naphthalene
 * rings followed by the term ‘naphthylene’. The series begins with three naphthalene rings,
 * trinaphthylene. …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-25.1.2.5', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250102i.gif', pin: 'dibenzo[b,h]biphenylene', notNames: ['dinaphthylene'] },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250102j.gif', pin: 'trinaphthylene' },
]);
