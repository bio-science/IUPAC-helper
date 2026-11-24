/**
 * P-46.1.6
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The principal substituent chain has the lowest locants for heteroatoms [criterion (f) in P-46.1];
 * this criterion is used only in method (2) of P-46.0.
 * This is a change. Heteroatoms in chains are now considered as part of the parent hydride; as such
 * they have seniority over suffixes for numbering (see P-14.4; see also P-15.4.3); …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-46.1.6', [
  // Drawn in the Blue Book.
  { drawing: 'P4gif/P460106a.gif', preferredPrefix: '10-(1,3,5,7-tetrasilanonan-1-yl)-2,5,7,9-tetrasilaundecan-11-yl', notNames: ['10-(1,3,5,8-tetrasilanonan-1-yl)-3,5,7,9-tetrasilaundecan-11-yl'] },
]);
