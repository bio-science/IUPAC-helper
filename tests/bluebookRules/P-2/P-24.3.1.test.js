/**
 * P-24.3.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Monospiro ring systems consisting of two identical polycyclic ring components are named by placing
 * the nondetachable prefix ‘spirobi’ before the name of the component ring system enclosed in square
 * brackets. The established numbering system of the polycyclic ring system component is retained with
 * one system having primed locants. The location of the spiro atom is indicated in the name by the
 * appropriate locants (unprimed first) placed at the front of the name.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-24.3.1', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P240301a.gif', pin: '7,7′-spirobi[bicyclo[4.1.0]heptane]' },
]);
