/**
 * P-68.3.1.1.1.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Substituted hydroxylamines of the type R-NH-OH or RR′N-OH are named as N-derivatives of the senior
 * amine.
 * N-Substitution of hydroxylamine by acyl groups generates hydroxamic acids that are now named as
 * N-hydroxyamides (see P-65.1.3.4).”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-68.3.1.1.1.1', [
  { formula: 'CH3-NH-OH', pin: 'N-hydroxymethanamine', otherNames: ['N-methylhydroxylamine'] },
  { formula: '(CH3)2N-OH', pin: 'N-hydroxy-N-methylmethanamine', otherNames: ['N,N-dimethylhydroxylamine'] },
  { formula: 'H3Si-NH-OH', preselectedName: 'N-hydroxysilanamine', otherNames: ['N-silylhydroxylamine'] },
  { formula: 'H2B-NH-OH', preselectedName: 'N-hydroxyboranamine', otherNames: ['N-boranylhydroxylamine'] },
  { formula: 'CH3-CO-NH-OH', pin: 'N-hydroxyacetamide', notNames: ['acetohydroxamic acid'] },
  { formula: 'CH3-SO2-NH-OH', pin: 'N-hydroxymethanesulfonamide' },
  { formula: 'CH3-CH2-CO-NH-OH', pin: 'N-hydroxypropanamide', otherNames: ['propanohydroxamic acid', 'propionohydroxamic acid'] },
]);
