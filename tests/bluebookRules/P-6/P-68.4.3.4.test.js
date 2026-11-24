/**
 * P-68.4.3.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Sulfinylamines, RN=E=O, sulfonylamines, RN=E(=O)2 and chalcogen analogues where E = S, Se, Te.
 * Compounds with the general structures, R-N=S=O and R-N=S(=O)2, have the class names ‘sulfinylamines’
 * and ‘sulfonylamines’, respectively. …”
 *
 * The whole section is in the Blue Book.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-68.4.3.4', [
  { formula: 'C6H5-N=S=O', notNames: ['N-sulfinylaniline'] },
  { formula: 'CH3-N=S(=O)2', notNames: ['N-sulfonylmethanamine'] },
  { formula: '(CH3)2S(O)=N-SO2-C6H5', pin: 'N-[dimethyl(oxo)-λ⁶-sulfanylidene]benzenesulfonamide' },
]);
