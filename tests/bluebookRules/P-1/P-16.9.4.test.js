/**
 * P-16.9.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Primes (′), double primes (′′), triple primes (′′′), etc., are also used to differentiate identical
 * locants other than N locants, for example 1, 1′, 1′′, 4′a (not 4a′; for locants of a fused ring
 * component, primes are added after the number, not after the letter). Such usage occurs:
 * (a) in multiplicative nomenclature to denote multiplied units and modify locants accordingly;
 * (b) in spiro-fused compounds, to denote positions in polycyclic systems, identical or different;
 * (c) in ring assemblies, to number identical ring components;”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-16.9.4', [
  { pin: '2,2′,2′′-nitrilotri(ethan-1-ol)' },
  { pin: '7,7′-spirobi[bicyclo[4.1.0]heptane]' },
  { pin: '1H,1′H,1′′H,3′H-2,2′:7′,2′′-dispiroter[naphthalene]' },
  { pin: 'spiro[cyclohexane-1,1′-indene]' },
  { pin: '1,1′-bi(cyclopropane)' },
  { pin: '1,1′-biphenyl' },
  { pin: '3a,3′a-biindene' },
]);
