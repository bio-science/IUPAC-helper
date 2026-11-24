/**
 * P-52.1.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Preselected names for parent hydrides with nonstandard bonding numbers are discussed in
 * P-21.1.2.1.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-52.1.4', [
  { formula: 'PH5', preselectedName: 'λ⁵-phosphane', otherNames: ['phosphorane'] },
  { formula: 'AsH5', preselectedName: 'λ⁵-arsane', otherNames: ['arsorane'] },
  { formula: 'SH4', preselectedName: 'λ⁴-sulfane', notNames: ['sulfurane'] },
  { formula: 'SH6', preselectedName: 'λ⁶-sulfane', notNames: ['persulfurane'] },
  { formula: 'IH3', preselectedName: 'λ³-iodane', notNames: ['iodinane'] },
  { formula: 'IH5', preselectedName: 'λ⁵-iodane', notNames: ['periodinane'] },
  { formula: 'SbH5', preselectedName: 'λ⁵-stibane', otherNames: ['stiborane'] },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P520104a.gif', preselectedName: '2λ⁴-trisulfane' },
]);
