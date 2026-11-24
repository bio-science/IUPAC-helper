/**
 * P-65.3.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Substitutive nomenclature, suffix mode, for sulfonic, sulfinic, etc., acids
 * Sulfonic, sulfinic, etc., acids are named substitutively by adding an appropriate suffix listed in
 * Table 6.2 to the name of a parent hydride name. Multiplying prefixes ‘di’, ‘tri’, ‘tetra’, etc. are
 * used to denote multiplicity of suffixes. The name ‘sulfanilic acid’ is not retained.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.3.1', [
  { formula: 'C6H5-SO2-OH', pin: 'benzenesulfonic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650301a.gif', pin: 'butane-2-sulfinic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650301b.gif', pin: '4-methylbenzene-1,3-disulfonic acid', notNames: ['toluene-2,4-disulfonic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650301d.gif', pin: '4-aminobenzene-1-sulfonic acid', notNames: ['‘sulfanilic acid’'] },
]);
