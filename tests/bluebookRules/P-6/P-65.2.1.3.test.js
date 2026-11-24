/**
 * P-65.2.1.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Functional replacement of =O in ‘carbonic acid’ and ‘carbamic acid’ by =NH and =N-NH2 is expressed
 * by the infixes ‘imido’ and ‘hydrazono’ and of oxygen in –OH groups in the resulting acids by
 * chalcogen atoms is expressed by infixes, as in P-65.2.1.2. As described in P-65.2.1.1, the name
 * ‘carbamimidic acid’ is retained for H2N-C(=NH)-OH (in place of the systematic name ‘carbonamidimidic
 * acid’) and used as a preferred IUPAC name. …
 * Italic letter locants N, N′ etc. are used to designate substitution on nitrogen atoms.”
 *
 * The whole section is in the Blue Book.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.2.1.3', [
  { formula: 'HO-C(=NH)-OH', pin: 'carbonimidic acid' },
  { formula: 'H2N-C(=NH)-OH', pin: 'carbamimidic acid' },
  { formula: 'HO-C(=N-NH2)-OH', pin: 'carbonohydrazonic acid' },
  { formula: 'HS-C(=NH)-OH', pin: 'carbonimidothioic acid' },
  { formula: 'H2N-C(=NH)-SH', pin: 'carbamimidothioic acid' },
  { formula: 'HSe-C(=N-NH2)-SeH', pin: 'carbonohydrazonodiselenoic acid' },
  { formula: 'H2N-C(=NH)-OSH', pin: 'carbamimido(thioperoxoic) OS-acid' },
]);
