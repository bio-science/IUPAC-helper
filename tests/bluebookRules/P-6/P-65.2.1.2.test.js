/**
 * P-65.2.1.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Functional replacement in carbonic acid and carbamic acid names by –OO–, –S–, –Se–, and –Te– is
 * expressed by the infixes ‘peroxo’, ‘thio’, ‘seleno’, and ‘telluro’, respectively. Tautomeric groups
 * in mixed chalcocarbonic acids, such as HO-CO-SH or HO-CS-OH, are distinguished by prefixing italic
 * element symbols, such as ‘S’ or ‘O’, respectively, to the term ‘acid’; the italic symbols ‘OS’ and
 * ‘SO’ are used for peroxy acids.
 * Contrary to Rules P-65.1.3 through P-65.1.5, functional replacement nomenclature is applied to the
 * retained name ‘carbamic acid’ and not to the systematic name ‘carbonamidic acid’.”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.2.1.2', [
  { formula: 'H2N-CS-OH', pin: 'carbamothioic O-acid' },
  { formula: 'H2N-CO-SeH', pin: 'carbamoselenoic Se-acid' },
  { formula: 'HO-CO-SH', pin: 'carbonothioic S-acid', notNames: ['sulfanylformic acid'] },
  { formula: 'HSe-CO-SeH', pin: 'carbonodiselenoic Se,Se-acid' },
  { formula: 'HS-CS-SH', pin: 'carbonotrithioic acid' },
  { formula: 'H2N-CO-OOH', pin: 'carbamoperoxoic acid' },
  { formula: 'HO-CO-OOH', pin: 'carbonoperoxoic acid' },
  { formula: 'HOO-CO-OOH', pin: 'carbonodiperoxoic acid' },
  { formula: 'HO-CO-OSH', pin: 'carbono(thioperoxoic) OS-acid' },
  { formula: 'HOS-CO-OSH', pin: 'carbonobis(thioperoxoic) OS,SO-acid' },
]);
