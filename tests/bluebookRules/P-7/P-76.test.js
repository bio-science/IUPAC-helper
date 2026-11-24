/**
 * P-76
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “DELOCALIZED RADICALS AND IONS
 * Delocalization in names involving one radical or ionic center in an otherwise conjugated double
 * bonds structure is denoted by the appropriate suffix without locants.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-76', [
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P76100a.gif', pin: 'x = • : cyclopentadienyl' },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P76100a.gif', pin: 'x = + : cyclopentadienylium' },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P76100a.gif', pin: 'x = – : cyclopentadienide' },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P76100b.gif', pin: 'benzo[7]annulenylium' },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P76100c.gif', pin: 'pentadienyl' },
]);
