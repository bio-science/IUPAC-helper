/**
 * P-13.4.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “By a change of ending”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-13.4.2', [
  { formula: 'C6H5-SO2-OH', pin: 'benzenesulfonic acid' },
  { formula: 'H⁺', name: 'hydron' },
  { formula: 'C6H5-SO2-O–', name: 'benzenesulfonate' },
  { formula: 'CH3-CH2-CH2-CH3', pin: 'butane' },
  { formula: '2 H', name: 'hydrogen' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1304a.gif', name: 'but-1-ene' },
]);
