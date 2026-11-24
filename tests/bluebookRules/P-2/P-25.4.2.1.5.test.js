/**
 * P-25.4.2.1.5
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “A divalent heterocyclic bridge is named as a prefix derived from the corresponding heterocyclic
 * compound by adding a letter ‘o’ with elision of a final letter ‘e’ if present. If the heterocyclic
 * system requires the citation of locants, these are given in square brackets in front of the name of
 * the prefix. If the name of the bridge is the same as the fusion prefix, the bridge prefix is
 * distinguished by the prefix ‘epi’ (or ‘ep’ before the letter ‘i’ or ‘o’ of the following term). …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-25.4.2.1.5', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250402l.gif', preferredPrefix: 'epoxireno' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250402m.gif', notNames: ['[2,3]epifurano'] },
]);
