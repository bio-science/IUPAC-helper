/**
 * P-12.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “PRESELECTED NAMES
 * Preselected names are names for structures or structural components chosen among two or more names
 * for noncarbon-containing (inorganic) parents to be used as the basis for preferred IUPAC names for
 * organic derivatives in the nomenclature of organic compounds. Although systematic names alumane,
 * gallane, indigane and thallane are preselected names, the names based on these
 * parent hydrides currently do not have PIN status. However such names can be used in general
 * nomenclature.
 * In the context of substitutive organic nomenclature, we need to select names for parent hydrides or
 * other parent structures that do not contain carbon, in order to name derivatives that do contain …
 * Names of parent structures, prefixes, and suffixes identified herein as 'preselected' may not
 * necessarily emerge as preferred IUPAC names in the context of inorganic chemical nomenclature.
 * All names listed in Table 2.1, with the exception of methane (carbane), are preselected names, and
 * the concept is illustrated by the following examples.”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 6, P-12.2, Table 1.2, Formula 7, name. [corrected 1 May 2019]
 *     For 2-phenyloxirane
 *     read phenyloxirane
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-12.2', [
  { formula: 'SnH3-[SnH2]11-SnH3', preselectedName: 'tridecastannane' },
  { formula: 'CH3-SnH2-[SnH2]11-SnH3', pin: '1-methyltridecastannane' },
  { formula: '(HO)3PO', preselectedName: 'phosphoric acid' },
  { formula: '(CH3-O)3PO', pin: 'trimethyl phosphate' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1202a.gif', preselectedName: '1,3,5,2,4,6-trioxatrisilinane', otherNames: ['cyclotrisiloxane (P-22.2.6)'] },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1202b.gif', pin: '2-methyl-1,3,5,2,4,6-trioxatrisilinane' },
]);
