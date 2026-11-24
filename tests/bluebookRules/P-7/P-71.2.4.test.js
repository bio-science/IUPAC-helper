/**
 * P-71.2.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Acyclic radicals derived by the removal of one or more hydrogen atoms from nonterminal chain
 * positions are named in two ways:
 * (1) by citing the locant of the nonterminal position of the chain
 * (2) by substituting a parent radical that has the free valence(s) at the end of a chain.
 * Method (1) generates preferred IUPAC names. The principal chain is chosen, if necessary, by the
 * method indicated in Section P-46 for substituent groups.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-71.2.4', [
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P71240a.gif', pin: 'propan-2-yl', otherNames: ['1-methylethyl'] },
]);
