/**
 * P-73.2.3.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Cations derived by the removal of a hydride ion from the nitrogen atom of an amide, amine, or imine
 * characteristic group are named by using the appropriate suffixes for neutral groups modified by the
 * addition of the suffix ‘ylium’, with elision of the final ‘e’ of the neutral suffix. Multiplying
 * prefixes ‘bis-’, ‘tris-’, etc. are used to denote the multiplicity of these suffixes. Cations
 * derived from imides are named on the basis of the appropriate heterocycle (see P-73.2.2.1.2). …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-73.2.3.2', [
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73232a.gif', pin: 'acetamidylium' },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73232b.gif', pin: 'ethanaminylium' },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73232c.gif', pin: '1H-pyrrole-2-carboxamidylium' },
]);
