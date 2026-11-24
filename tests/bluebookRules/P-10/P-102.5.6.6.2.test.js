/**
 * P-102.5.6.6.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Aldonic acids
 * Aldonic acids are divided into aldotrionic acids, aldotetronic acids, etc. according to the number
 * of carbon atoms in the chain. The names of individual compounds are formed by changing the ending
 * ‘ose’ of the retained or systematic name of the aldose to ‘onic acid’. The locant 1 is assigned to
 * the carboxy group.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-102.5.6.6.2', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102566a.gif', name: 'D-galactonic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102566b.gif', name: '2-deoxy-2-(methylamino)-D-gluconic acid' },
]);
