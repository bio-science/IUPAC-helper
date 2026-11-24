/**
 * P-102.5.6.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “N-Substitution
 * Substitution at the –NH2 group of an amino sugar is dealt with in two different ways:
 * (1) The whole substituted amino group is designated as a prefix as in 2-acetamido-2-deoxy-D-glucose
 * or 2-(butylamino)-2-deoxy-D-glucose.
 * (2) If the amino sugar has a retained trivial name, the substitution is indicated by a prefix
 * preceded by the capital italicized letter N.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-102.5.6.4', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102564a.gif', name: '2-acetamido-2-deoxy-β-D-glucopyranose' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102564b.gif', name: '4-acetamido-4-deoxy-β-D-glucopyranose' },
]);
