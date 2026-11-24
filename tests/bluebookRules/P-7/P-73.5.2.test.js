/**
 * P-73.5.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “‘Ium’ and ‘ylium’ centers in the same parent hydride
 * Cyclic compounds with two or more cationic centers in the same parent hydride structure at least one
 * of which being denoted by ‘ium’ and another by ‘ylium’ suffixes, are named by placing the ‘ium’ and
 * ‘ylium’ suffixes, in that order, after the name of the parent hydride, preceded by the appropriate
 * multiplying numerical prefixes and locants, where required.
 * When there is a choice, low locants are assigned first to both cationic centers regardless of type
 * (‘ium’ or ‘ylium’), and then to the ‘ylium’ centers.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-73.5.2', [
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73520a.gif', pin: '1-methyl-5H-cyclohepta[b]pyridin-1-ium-5-ylium', notNames: ['1-methyl-5H-1-azoniabenzo[7]annulen-5-ylium'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73520b.gif', pin: '4,4-dimethylpiperazin-4-ium-1-ylium' },
]);
