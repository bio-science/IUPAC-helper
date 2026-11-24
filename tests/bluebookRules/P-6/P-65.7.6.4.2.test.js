/**
 * P-65.7.6.4.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “When different chalcogen atoms are present in the anhydride linkages, the usual order of seniority
 * established for chalcogen atoms, O > S > Se > Te, is used to choose the senior anhydride. The senior
 * anhydride chosen as the basis for the name can be an anhydride (see P-65.7.1 through P-65.7.5) or a
 * di- or polyanhydride. Other anhydride linkages are named substitutively.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.7.6.4.2', [
  { formula: 'CH3-CO-O-CO-CH2-CH2-CH2-CO-S-CO-CH3', pin: 'acetic 5-(acetylsulfanyl)-5-oxopentanoic anhydride' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650706i.gif', pin: '3,6-diacetic 2-propanoic naphthalene-2,3,6-tricarboxylic tris(thioanhydride)' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650706j.gif', pin: 'acetic 3-[(acetylsulfanyl)carbonyl]naphthalene-2-carboxylic anhydride' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650706k.gif', pin: 'acetic 1-[3-(acetylsulfanyl)-3-oxopropyl]naphthalene-2-carboxylic anhydride' },
]);
