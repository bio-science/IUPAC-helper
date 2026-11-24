/**
 * P-61.7
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “AZIDES
 * Compounds containing a –N3 (–N=N⁺=N⁻) group attached to a parent hydride, are named using
 * substitutive nomenclature and the prefix ‘azido’. This method gives preferred IUPAC names rather
 * than names based on the class name ‘azido’ in functional class nomenclature (see also
 * P-74.2.2.2.2).”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-61.7', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P610700a.gif', name: '2-phenylethyl azide', notNames: ['phenethyl azide'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P610700b.gif', pin: '3-azidonaphthalene-2-sulfonic acid' },
]);
