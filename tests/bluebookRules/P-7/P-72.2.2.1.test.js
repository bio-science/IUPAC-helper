/**
 * P-72.2.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Anions derived from parent hydrides and their derivatives
 * An anion derived formally by the removal of one or more hydrons from any position of a neutral
 * parent hydride is preferably named by using the suffix ‘-ide’, with elision of the final letter ‘e’
 * of the parent hydride, if any. Numerical prefixes ‘di’, ‘tri’, etc. are used to denote multiplicity;
 * locants identify positions of the negative charges.
 * The name ‘acetylide’, for ⁻C≡C⁻, is retained for general use only.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-72.2.2.1', [
  { formula: '(NC)3C⁻', pin: 'tricyanomethanide' },
  { formula: '(C6H5)2C²⁻', pin: 'diphenylmethanediide' },
  { formula: '(CH3)2P⁻', pin: 'dimethylphosphanide', otherNames: ['dimethylphosphinide'] },
  { formula: 'HC≡Si⁻', pin: 'methylidynesilanide' },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P72221a.gif', pin: 'benzenide' },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P72221b.gif', pin: 'cyclopenta-2,4-dien-1-ide', otherNames: ['cyclopentadienide'] },
  { formula: '⁻C≡C⁻', pin: 'ethynediide', otherNames: ['acetylide'] },
]);
