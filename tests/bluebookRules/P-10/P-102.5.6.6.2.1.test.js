/**
 * P-102.5.6.6.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Derivatives of aldonic acids
 * Aldonic acids are treated as carboxylic acids having a retained name. They can form salts, esters,
 * anhydrides, acyl groups and acid halides and pseudohalides, amides, hydrazides, nitriles and
 * chalcogen analogues as described in Sections P-65 and P-66 for systematic nomenclature.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-102.5.6.6.2.1', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102566c.gif', name: 'propan-2-yl D-gluconate' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102566d.gif', name: 'methyl 3,4-di-O-methyl-D-galactonate' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102566e.gif', name: 'L-xylonamide' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102566f.gif', name: 'methyl 3-deoxy-D-threo-pentonate' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102566g.gif', name: '2,3,4,5,6-penta-O-acetyl-D-gluconoyl chloride' },
]);
