/**
 * P-14.5.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “When an alphanumerical ordering is required and Roman letters do not permit a decision for the
 * order of citation, italicized letters are considered.
 * And similarly, naphtho[1,2-f]quinolin-2-yl is alphanumerically preferred to
 * naphtho[1,2-g]quinolin-1-yl (‘f’ before ‘g’).”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-14.5.3', [
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1405i.gif', pin: '1-(butan-2-yl)-3-tert-butylbenzene', otherNames: ['3-tert-butyl-1-(1-methylpropyl)benzene'], notNames: ['1-sec-butyl-3-tert-butylbenzene'] },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1405j.gif', pin: '3-(as-indacen-3-yl)-5-(s-indacen-1-yl)pyridine', notNames: ['5-s-indacen-1-yl-3-as-indacen-3-ylpyridine'] },
]);
