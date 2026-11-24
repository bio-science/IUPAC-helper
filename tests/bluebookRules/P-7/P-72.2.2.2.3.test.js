/**
 * P-72.2.2.2.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Anions derived from amines and imines
 * Amines and imines having one negative charge on each nitrogen atom are named by using the suffixes
 * ‘aminide’ and ‘iminide’, formed by the addition of the suffix ‘ide’ to the suffix ‘amine’ or
 * ‘imine’, respectively; the prefix ‘bis-’ is used to indicate two aminide suffixes. The resulting
 * names are preferred IUPAC names. When two negative charges are present on the nitrogen atom of an
 * amine, the suffix ‘aminediide’ is used to generate preferred IUPAC names. …
 * The use of compound suffixes ‘aminide’, ‘iminide’ and ‘aminediide’ is a change from previous
 * practice where parent anions H2N⁻ and HN²⁻ were used to express amines and imines having negative …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1073, P-72.2.2.2.3, example 3. [corrected 7 August 2019]
 *     For ethane-1,2-diylbis(amide)
 *     read (ethane-1,2-diyl)bis(amide)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-72.2.2.2.3', [
  { formula: 'CH3-NH⁻', pin: 'methanaminide', otherNames: ['methylamide'] },
  { formula: 'C6H5-NH⁻', pin: 'benzenaminide', otherNames: ['phenylamide'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P72222k.gif', pin: 'ethane-1,2-bis(aminide)' },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P72222l.gif', pin: 'butaniminide' },
  { formula: '(CH3)3P=N⁻', pin: 'trimethyl-λ⁵-phosphaniminide' },
  { formula: 'CH3-CH2-N²⁻', pin: 'ethanaminediide', otherNames: ['ethylazanediide', 'ethylimide'] },
  { formula: 'C6H5-N²⁻', pin: 'benzenaminediide', otherNames: ['phenylazanediide', 'phenylimide'] },
]);
