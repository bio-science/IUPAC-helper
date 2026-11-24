/**
 * P-31.2.3.3.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Retained names of partially saturated polycyclic mancude compounds
 * Names listed in Table 3.1 are retained names that are not used as preferred IUPAC names. They are,
 * however acceptable in general nomenclature with full substitution, including characteristic groups
 * expressed as suffixes, but not as fusion components nor as amplificants in Phane Nomenclature.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-31.2.3.3.1', [
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P310203t.gif', pin: '2,3-dihydro-1H-indene', otherNames: ['indane'] },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P310203u.gif', pin: '2,3-dihydro-1H-indole', otherNames: ['1H-indoline'] },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P310203v.gif', pin: '2,3-dihydro-1H-isoindole', otherNames: ['2H-isoindoline'] },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P310203w.gif', pin: '3,4-dihydro-2H-1-benzopyran', otherNames: ['chromane', '3,4-dihydro-2H-chromene'] },
  { pin: '3,4-dihydro-2H-1-benzothiopyran', otherNames: ['3,4-dihydro-2H-thiochromene'] },
  { pin: '3,4-dihydro-2H-1-benzoselenopyran', otherNames: ['3,4-dihydro-2H-selenochromene'] },
  { pin: '3,4-dihydro-2H-1-benzotelluropyran', otherNames: ['3,4-dihydro-2H-tellurochromene'] },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P310203x.gif', pin: '3,4-dihydro-1H-2-benzopyran', otherNames: ['isochromane', '3,4-dihydro-1H-isochromene'] },
  { pin: '3,4-dihydro-1H-2-benzothiopyran', otherNames: ['3,4-dihydro-1H-isothiochromene'] },
  { pin: '3,4-dihydro-1H-2-benzoselenopyran', otherNames: ['3,4-dihydro-1H-isoselenochromene'] },
  { pin: '3,4-dihydro-1H-2-benzotelluropyran', otherNames: ['3,4-dihydro-1H-isotellurochromene'] },
]);
