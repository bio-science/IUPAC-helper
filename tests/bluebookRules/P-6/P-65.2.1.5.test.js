/**
 * P-65.2.1.5
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Acyl groups derived from carbonic and related acids
 * Acyl groups derived from carbonic and related acids, including functional replacement analogues, by
 * the removal of one or two hydroxy groups from the acid are named in accordance with the methodology
 * described in P-65.1.7.2. Names are formed in two ways:
 * (1) Names may be formed by changing the -ic or -oic acid ending of the name of the acid to -yl or
 * -oyl, respectively. …
 * (2) Names may be formed by a concatenation operation, i.e., by adding appropriate monovalent
 * substituent groups to divalent acyl groups such as ‘carbonyl’, ‘carbonothioyl’, and ‘carbonimidoyl’
 * formed …
 * Names formed by method (1) are preferred IUPAC names; they are preferred to other names for acyl
 * groups, including the use of prefixes rather than infixes or names formed by full or partial …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 782, P-65.2.1.5, example 4 on this page. [corrected 6 March 2019]
 *     For aminocarbonimidoyl
 *     read C-aminocarbonimidoyl
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.2.1.5', [
  { formula: 'HO-CO-OH', pin: 'carbonic acid' },
  { formula: '–CO–', preferredPrefix: 'carbonyl' },
  { formula: 'HO-CS-OH', pin: 'carbonothioic O,O-acid' },
  { formula: '–CS–', preferredPrefix: 'carbonothioyl' },
  { formula: 'HO-C(=NH)-OH', pin: 'carbonimidic acid' },
  { formula: '–C(=NH)–', preferredPrefix: 'carbonimidoyl' },
  { formula: 'HO-C(=NNH2)-OH', pin: 'carbonohydrazonic acid' },
  { formula: '–C(=N-NH2)–', preferredPrefix: 'carbonohydrazonoyl' },
  { formula: 'H2N-CO-OH', pin: 'carbamic acid' },
  { formula: 'H2N-CO–', preferredPrefix: 'carbamoyl' },
  { formula: 'H2N-CS-OH', pin: 'carbamothioic O-acid' },
  { formula: 'H2N-CS–', preferredPrefix: 'carbamothioyl' },
  { formula: 'H2N-C(=NH)-OH', pin: 'carbamimidic acid' },
  { formula: 'H2N-C(=NH)–', preferredPrefix: 'carbamimidoyl–' },
  { formula: 'Cl-CO-OH', pin: 'carbonochloridic acid' },
  { formula: 'Cl-CO–', preferredPrefix: 'carbonochloridoyl' },
  { formula: 'NC-CO-OH', pin: 'carbonocyanidic acid' },
  { formula: 'NC-CO–', preferredPrefix: 'carbonocyanidoyl' },
  { formula: 'Br-CS-OH', pin: 'carbonobromidothioic O-acid' },
  { formula: 'Br-CS–', preferredPrefix: 'carbonobromidothioyl' },
  { formula: 'Cl-C(=NH)-OH', pin: 'carbonochloridimidic acid' },
  { formula: 'Cl-C(=NH)–', preferredPrefix: 'carbonochloridimidoyl' },
  { formula: 'HOO-CO-OH', pin: 'carbonoperoxoic acid' },
  { formula: 'HOO-CO–', preferredPrefix: 'carbonoperoxoyl' },
]);
