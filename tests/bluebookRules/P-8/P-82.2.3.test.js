/**
 * P-82.2.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Addition of hydro prefixes
 * Isotopically modified hydrogen atoms, when present, are always attached to the skeleton of the
 * isotopically modified compound. According to P-82.2.2, the hydro prefixes must be
 * identical, whether unmodified or isotopically modified, and added in pairs. …
 * In these recommendations hydrogenated mancude ring systems are treated as described in P-82.2.2
 * which is a change from previous recommendations.”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-82.2.3', [
  // Drawn in the Blue Book.
  { drawing: 'P8gif/P82230b.gif', pin: '2,3-dihydro(¹⁵N)-1H-indole' },
  // Drawn in the Blue Book.
  { drawing: 'P8gif/P82230c.gif', pin: '2,3-dihydro(2,3-²H2,¹⁵N)-1H-indole' },
  // Drawn in the Blue Book.
  { drawing: 'P8gif/P82230d.gif', pin: '2,3-di[(²H)hydro](2,3-²H2,¹⁵N)-1H-indole', notNames: ['(2,3-²H2)dihydro(2,3-²H2,1-¹⁵N)-1H-indole'] },
  // Drawn in the Blue Book.
  { drawing: 'P8gif/P82230e.gif', pin: '6-methyl-2,3-di[(²H)hydro]-1,4-dihydro(2,3-²H2)naphthalen-1-ol', otherNames: ['{not 6-methyl-1,4-dihydro-2,3-di[(²H)hydro](2,3-²H2)naphthalen-1-ol', 'not 6-methyl[(2,3-²H2)-1,2,3,4-tetrahydro](2,3-²H2)naphthalen-1-ol'] },
]);
