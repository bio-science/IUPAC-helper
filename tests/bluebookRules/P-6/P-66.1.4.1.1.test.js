/**
 * P-66.1.4.1.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Names are formed by using suffixes modified by functional replacement nomenclature using prefixes
 * and infixes.”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.1.4.1.1', [
  { suffix: '-sulfonothioamide' },
  { suffix: '-sulfonodithioamide' },
  { suffix: '-sulfinothioamide' },
  { formula: 'HCS-NH2', pin: 'methanethioamide', otherNames: ['thioformamide'] },
  { formula: 'CH3-CS-NH2', pin: 'ethanethioamide', otherNames: ['thioacetamide'] },
  { formula: 'C6H5-CS-NH2', pin: 'benzenecarbothioamide', otherNames: ['thiobenzamide'] },
  { formula: 'H2N-CS-CH2-CH2-CS-NH2', pin: 'butanedithioamide' },
  { formula: 'CH3-[CH2]4-CS-NH2', pin: 'hexanethioamide' },
  { formula: 'CH3-CH2-CS-NH2', pin: 'propanethioamide', notNames: ['thiopropionamide'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66141a.gif', pin: 'pyridine-2-carbothioamide' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66141b.gif', pin: 'naphthalene-2-sulfonodithioamide' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66141c.gif', pin: 'pyridine-4-carbothioamide', notNames: ['thioisonicotinamide'] },
]);
