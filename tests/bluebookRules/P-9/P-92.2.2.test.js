/**
 * P-92.2.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Sequence Subrule 1b: Priority due to duplicate atoms
 * Custer (ref. 42) proposed an amendment to Sequence Subrule 1a to establish the priority between
 * substituents which give the same exploratory pathway according to rule 1a. The subrule is based on
 * the use of duplicate atoms and is expressed as ‘a duplicate atom corresponding to an atom closer to
 * the start of the exploration pathway precedes one further away’ or more briefly ‘a nearer duplicate
 * atom node takes precedence over a further away duplicate atom node’. …
 * Explanation: All four ligands from ‘C-1’ are different but those at ‘C- 2’ and ‘C-10’ are identical
 * in the digraph. …
 * Explanation. When comparing the ‘C-4’ and ‘C-6’ ligands, they are similar, except that the first
 * duplicate atom on the right (bonded to C-1) corresponds to the stereogenic center, whereas the first
 * …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-92.2.2', [
  // Drawn in the Blue Book.
  { drawing: 'P9gif/P92220b.gif', name: 'simplified digraph' },
  // Drawn in the Blue Book.
  { drawing: 'P9gif/P92220d.gif', name: 'simplified digraph' },
]);
