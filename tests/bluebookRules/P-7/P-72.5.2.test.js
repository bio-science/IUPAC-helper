/**
 * P-72.5.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “‘Ide’ and ‘uide’ centers in the same parent hydride
 * Anionic compounds with two or more anionic centers in the same parent hydride structure, at least
 * one of which is derived formally by removal of a hydron from a skeletal position and one by adding a
 * hydride ion at another position, are named by adding the suffix ‘-ide’, then the suffix ‘-uide’ to
 * the name of the parent hydride, with elision of the final letter ‘e’ of the parent hydride and of
 * the suffix ‘-ide’. Each suffix is preceded, where necessary, by the appropriate multiplying prefix.
 * …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-72.5.2', [
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P72520a.gif', pin: '2,2-dimethyl-2,4-dihydrocyclopenta[c]borol-4-id-2-uide' },
]);
