/**
 * P-31.2.3.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “‘Hydro’ prefixes are used to modify the degree of hydrogenation of monocyclic mancude compounds
 * having retained or systematic names, except for the hydro derivatives of benzene, for which the
 * traditional names ‘cyclohexene’ and ‘cyclohexadiene’ are the preferred IUPAC names.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-31.2.3.1', [
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P310203a.gif', pin: 'cyclohexa-1,4-diene', notNames: ['1,4-dihydrobenzene'] },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P310203b.gif', pin: 'cyclohexene', notNames: ['1,2,3,4-tetrahydrobenzene'] },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P310203c.gif', pin: '1,2-dihydropyridine' },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P310203d.gif', pin: '4,5,6,7-tetrahydro-1,4-thiazepine' },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P310203e.gif', pin: '2,7-dihydro-1H-azepine' },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P310203f.gif', pin: '2,3-dihydro-1H-phosphole' },
]);
