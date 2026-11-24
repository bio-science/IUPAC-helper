/**
 * P-16.5.4.1.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “In determining the nesting order in a name the square brackets of ring fusion, spiro fusion, ring
 * assembly, or the extended von Baeyer names are ignored.”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-16.5.4.1.2', [
  { pin: '10,10′-[[1,1′-biphenyl]-4,4′-diylbis(oxy)]di(decanoic acid)' },
  { pin: 'trispiro{1-oxaspiro[2.3]hexane-2,3′:4,3′′:5,3′′′-tri(tetracyclo[3.2.0.0²,⁷.04.6]heptane)}' },
  { pin: 'N-(dibenzo[b,d]furan-1-yl)acetamide' },
]);
