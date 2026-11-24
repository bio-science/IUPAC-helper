/**
 * P-72.2.2.2.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Anions derived from hydroxy compounds
 * An anion formed by subtracting a hydron from the chalcogen atom of a hydroxy characteristic group,
 * or a chalcogen analogue, that can be expressed by a suffix such as ‘ol’, ‘thiol’, ‘peroxol’, etc.,
 * is preferably named by using suffixes ‘olate’, ‘thiolate’, ‘peroxolate’, etc., formed by addition of
 * the ending ‘ate’ to the suffixes ‘ol’, ‘thiol’, ‘peroxol’, etc. The multiplying prefixes ‘bis’,
 * ‘tris’, etc. are used before these suffixes, to avoid any ambiguity.
 * The retained names hydroxide, for HO⁻, and hydroperoxide, for HOO⁻, are preseleted names but cannot
 * be substituted; …
 * The traditional names methoxide, ethoxide, propoxide, butoxide, tert-butoxide, phenoxide (but not
 * isopropoxide), and aminoxide, for CH3-O⁻, C2H5-O⁻, C3H7-O⁻, C4H9-O⁻, (CH3)3C-O⁻, C6H5-O⁻, and
 * H2N-O⁻, …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1071, P-72.2.2.2.2, third paragraph. [corrected 28 October 2016]
 *     For The traditional names methoxide, ethoxide, propoxide (but not isopropoxide), butoxide,
 *     tert-butoxide, phenoxide and aminoxide, for CH3-O⁻, C2H5-O⁻, C3H7-O⁻, C4H9-O⁻, (CH3)3C-O⁻,
 *     C6H5-O⁻ and H2N-O⁻, are retained as preferred IUPAC names.
 *     read The traditional names methoxide, ethoxide, propoxide, butoxide, tert-butoxide, phenoxide
 *     and aminoxide, for CH3-O⁻, C2H5-O⁻, C3H7-O⁻, C4H9-O⁻, (CH3)3C-O⁻, C6H5-O⁻ and H2N-O⁻ are
 *     retained as preferred IUPAC names. tert-Butoxide cannot be substituted. Isopropoxide,
 *     (CH3)2CH-O⁻, is retained for general nomenclature but cannot be substituted.
 *   Page 1072, P-72.2.2.2.2, example 5 on this page. [corrected 27 March 2019]
 *     For ethylsulfanyl)oxidanide
 *     read (ethylsulfanyl)oxidanide
 *     for (not benzenesulfenate; sulfenic acids ...
 *     read (not ethanesulfenate; sulfenic acids ...
 *   Page 1072, P-72.2.2.2.2, example 6. [corrected 7 August 2019]
 *     For ethane-1,2-diylbis(dioxidanide)
 *     read (ethane-1,2-diyl)bis(dioxidanide)
 *   Page 1072, P-72.2.2.2.2, example 7. [corrected 7 August 2019]
 *     For 1,4-phenylenebis(disulfanide)
 *     read (1,4-phenylene)bis(disulfanide)
 *   Page 1072, P-72.2.2.2.2, example 8. [corrected 7 August 2019]
 *     For 1,4-phenylenebis(oxy)bis(sulfanide)
 *     read (1,4-phenylene)bis(oxy)bis(sulfanide)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-72.2.2.2.2', [
  { formula: 'CH3-O⁻', pin: 'methoxide', otherNames: ['methanolate'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P72222e.gif', pin: 'propan-2-olate', otherNames: ['isopropoxide'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P72222f.gif', pin: 'benzene-1,2-bis(olate)', notNames: ['pyrocatecholate'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P72222g.gif', pin: 'benzene-1,2-bis(thiolate)' },
  { formula: '(CH3)2N-O⁻', pin: 'dimethylaminoxide' },
  { formula: 'CH3-O-O⁻', pin: 'methaneperoxolate', otherNames: ['methyldioxidanide'] },
  { formula: 'CH3-CH2-S-O⁻', pin: 'ethane(SO-thioperoxolate)', notNames: ['ethanesulfenate'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P72222h.gif', pin: 'ethane-1,2-bis(peroxolate)' },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P72222i.gif', pin: 'benzene-1,4-bis(dithioperoxolate)' },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P72222j.gif', pin: 'benzene-1,4-bis(OS-thioperoxolate)' },
]);
