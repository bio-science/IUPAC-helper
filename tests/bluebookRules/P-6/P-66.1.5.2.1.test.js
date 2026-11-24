/**
 * P-66.1.5.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Intramolecular amides of amino sulfonic acids are called ‘sultams’ and may be named in three ways
 * (1) as heterocyclic heterones;
 * (2) by citing the term ‘sultam’ denoting the cyclic –NH-SO2– group after the name of the appropriate
 * parent hydride preceded by a pair of locants describing the points of attachment of the sulfonyl …
 * (3) as heterocycles and, according to functional class nomenclature, using the class term ‘oxide’.
 * Method (1) leads to preferred IUPAC names.”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.1.5.2.1', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66152a.gif', pin: '1λ⁶-naphtho[1,8-cd][1,2]thiazole-1,1(2H)-dione', otherNames: ['2H-naphtho[1,8-cd][1,2]thiazole 1,1-dioxide', 'naphthalene-1,8-sultam'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66152b.gif', pin: '1λ⁶,2-thiazinane-1,1-dione', otherNames: ['1,2-thiazinane 1,1-dioxide', 'butane-1,4-sultam'] },
]);
