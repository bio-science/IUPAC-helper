/**
 * P-73.3.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Retained names
 * The contracted and traditional names listed in Table 7.5 are retained as preferred IUPAC names and
 * for use in general nomenclature.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1097, P-73.3.2, Table 7.5, structure 3. [corrected 27 March 2019]
 *     For E = S 2λ⁴-benzothiopyran-1-ylium (PIN)
 *     read E = S 2λ⁴-benzothiopyran-2-ylium (PIN)
 *     for E = Se 2λ⁴-benzoselenopyran-1-ylium (PIN)
 *     read E = Se 2λ⁴-benzoselenopyran-2-ylium (PIN)
 *     for E = Te 2λ⁴-benzotelluropyran-1-ylium (PIN)
 *     read E = Te 2λ⁴-benzotelluropyran-2-ylium (PIN)
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-73.3.2', [
  { pin: 'pyrylium' },
  { pin: '1λ⁴-benzopyran-1-ylium', otherNames: ['chromenylium'] },
  { pin: 'thiopyrylium' },
  { pin: '1λ⁴-benzothiopyran-1-ylium', otherNames: ['thiochromenylium'] },
  { pin: 'selenopyrylium' },
  { pin: '1λ⁴-benzoselenopyran-1-ylium', otherNames: ['selenochromenylium'] },
  { pin: 'telluropyrylium' },
  { pin: '1λ⁴-benzotelluropyran-1-ylium', otherNames: ['tellurochromenylium'] },
  { pin: '2λ⁴-benzopyran-2-ylium', otherNames: ['isochromenylium'] },
  { pin: '2λ⁴-benzothiopyran-2-ylium', otherNames: ['isothiochromenylium E = Se'] },
  { pin: '2λ⁴-benzoeselenopyran-2-ylium', otherNames: ['isoselenochromenylium E = Te'] },
  { pin: '2λ⁴-benzotelluropyran-2-ylium', otherNames: ['isotellurochromenylium'] },
  { pin: '2H-1λ⁴-tellurophen-1-ylium' },
  { pin: 'xanthylium' },
  { pin: 'thioxanthylium' },
  { pin: 'selenoxanthylium' },
  { pin: 'telluroxanthylium' },
]);
