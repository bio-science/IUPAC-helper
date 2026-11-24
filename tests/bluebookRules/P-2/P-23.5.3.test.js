/**
 * P-23.5.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Silasesquioxanes, silasesquithianes, etc.
 * Compounds in which each silicon atom is linked to three oxygen atoms and in which every atom of
 * oxygen is linked to two silicon atoms are named generically silasesquioxanes. …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-23.5.3', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P230503a.gif', name: 'tetracyclo[5.5.1.1³,¹¹.1⁵,⁹]hexasiloxane' },
]);
