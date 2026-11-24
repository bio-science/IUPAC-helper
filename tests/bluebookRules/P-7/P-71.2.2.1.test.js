/**
 * P-71.2.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Specific method and retained names
 * A radical formally derived by the removal of two hydrogen atom from one skeletal atom of a
 * mononuclear parent hydride of an element of Group 14, or from one terminal skeletal atom of an
 * unbranched acyclic hydrocarbon, or from one skeletal atom of a monocyclic saturated hydrocarbon ring
 * is named by replacing the ‘ane’ ending of the systematic name of the parent hydride by the suffix
 * ‘-ylidene’ or ‘-diyl’. …
 * Systematic names are the preferred IUPAC names. The retained names carbene or methylene, nitrene or
 * aminylene and carbyne, can be used in general nomenclature, with full substitution.
 * The use of the systematic or retained names does not imply a specific electronic configuration. …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-71.2.2.1', [
  { formula: 'H2C²•', pin: 'methylidene', otherNames: ['carbene', 'methylene'] },
  { formula: 'H2Si²•', preselectedName: 'silylidene', otherNames: ['silanediyl'], notNames: ['silylene'] },
  { formula: 'HC³•', pin: 'methylidyne', otherNames: ['methanetriyl', 'carbyne'] },
  { formula: '(C6H5)2C²•', pin: 'diphenylmethylidene', otherNames: ['diphenylmethanediyl', 'diphenylcarbene', 'diphenylmethylene'] },
  { formula: 'C6H5-CH2-SiH²•', pin: 'benzylsilylidene', otherNames: ['benzylsilanediyl'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P71221a.gif', pin: 'cyclohexylidene', otherNames: ['cyclohexane-1,1-diyl'] },
  { formula: 'CH3C³•', pin: 'ethylidyne', otherNames: ['ethane-1,1,1-triyl'], notNames: ['methylcarbyne'] },
]);
