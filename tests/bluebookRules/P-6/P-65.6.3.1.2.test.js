/**
 * P-65.6.3.1.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Pseudoesters are compounds having the generic formula R-E(=O)x(OZ) and chalcogen analogues where x
 * = 1 or 2 and Z is not a carbon atom but an element from the following list: B, Al, In, Ga, Tl, Si,
 * Ge, Sn, Pb, N(cyclic), P, As, Sb, Bi. Pseudoesters are ranked as esters in the seniority order of
 * classes (see P-41).”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.6.3.1.2', [
  { formula: 'CH3-CO-O-Si(CH3)3', pin: 'trimethylsilyl acetate' },
  { formula: 'CH3-CH2-SO2-S-Ge(CH3)3', pin: 'S-(trimethylgermyl) ethanesulfonothioate' },
]);
