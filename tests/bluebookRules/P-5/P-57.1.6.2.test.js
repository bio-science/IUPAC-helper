/**
 * P-57.1.6.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Two important changes from previous recommendations involving prefixes derived from parent hydrides
 * with modified degrees of hydrogenation must be noted.
 * (1) In acyclic prefixes, the longest chain is chosen as the principal chain;
 * In these recommendations, a major change in the naming of substituents derived from unsaturated
 * acyclic compounds is adopted in which the longest chain is chosen as the parent chain regardless of
 * the …
 * (2) In acyclic prefixes derived from alkanes modified by skeletal replacement (‘a’) nomenclature,
 * the ‘a’ prefixes have seniority over suffixes, such as ‘yl’ and ‘ylidene’.
 * Fixed numbering for heteroacyclic parent structures named by skeletal replacement (‘a’) nomenclature
 * is a major change to Rule C-0.6 (ref. …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-57.1.6.2', [
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P570106j.gif', preferredPrefix: '2,5,8,11-tetraoxatridec-12-en-13-yl', notNames: ['3,6,9,12-tetraoxatridec-1-en-1-yl'] },
]);
