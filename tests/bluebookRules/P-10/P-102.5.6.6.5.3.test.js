/**
 * P-102.5.6.6.5.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Derivatives of aldaric acids formed by modifying the carboxy group (into esters, amides,
 * hydrazides, nitriles, amic acids, etc.) are named by the methods described in P-102.5.6.6.2.1, P-65
 * and P-66.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-102.5.6.6.5.3', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102566aa.gif', name: '1-methyl hydrogen L-altrarate' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102566ab.gif', name: '6-methyl hydrogen L-altrarate' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102566ac.gif', name: '6-amino-6-deoxy-6-oxo-D-gluconic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102566ad.gif', name: 'methyl 6-amino-6-deoxy-6-oxo-D-gluconate' },
]);
