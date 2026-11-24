/**
 * P-15.5.3.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Replacement in characteristic groups expressed as suffixes in substitutive nomenclature.
 * Replacement in suffixes is limited to –OO–, =S and –S–, =Se and –Se–, =Te and –Te–, =NH and =NNH2
 * and any combination of these affixes (see Table 1.6). …”
 *
 * The whole section is in the Blue Book.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-15.5.3.2', [
  { formula: '–CO-OOH', name: 'carboperoxoic acid' },
  { formula: '–CO-SH', name: 'carbothioic S-acid' },
  { formula: '–CS-OH', name: 'carbothioic O-acid' },
  { formula: '–C(=NH)-OH', name: 'carboximidic acid' },
  { formula: '–SO-OOH', suffix: 'sulfinoperoxoic acid' },
  { formula: '–S(=NNH2)-OH', suffix: 'sulfinohydrazonic acid' },
  { formula: '–(C)O-SH', name: 'thioic acid' },
  { formula: '–(C)S-NH2', name: 'thioamide' },
  { formula: '=S', suffix: 'thione' },
  { formula: '–SeH', suffix: 'selenol' },
]);
