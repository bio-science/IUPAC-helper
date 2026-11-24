/**
 * P-65.7.6.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Linear polyanhydrides are named by one of the following methods:
 * (1) by selecting the preferred dicarboxylic acid and citing the adjoining acid groups one of which
 * will be substituted using the principles of substitutive nomenclature;
 * (2) by citing the acid groups, in their order of appearance, in the structure beginning with the end
 * acid group lower in alphabetical order followed by a class term ‘dianhydride’, ‘trianhydride’, …
 * When there is a choice the second acid group will be the acid group lower in alphabetical order.
 * Method (1) generates preferred IUPAC names.
 * When the dibasic acid is substituted, locants are used to locate the terminal acid groups.”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.7.6.2', [
  { formula: 'CH3-CO-O-CO-CH2-CH2-CO-O-CO-CH2-CH2-CO-O-CO-CH2-CH3', pin: 'acetic butanedioic 4-(propanoyloxy)-4-oxobutanoic dianhydride', otherNames: ['acetic dibutanedioic propanoic trianhydride'] },
  { formula: 'CH3-CO-O-CO-CH2-CO-O-CO-CH2-CH2-CO-O-CO-CH3', pin: 'acetic 3-(acetyloxy)-3-oxopropanoic butanedioic dianhydride', otherNames: ['acetic butanedioic propanedioic acetic trianhydride'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650706b.gif', pin: '4-[4-(acetyloxy)-4-oxobutanoic] 2-methylbutanedioic 1-propanoic dianhydride', otherNames: ['4-(acetic butanedioic) 2-methylbutanedioic 1-propanoic trianhydride'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650706c.gif', pin: 'acetic butanedioic [(acetyloxy)sulfonyl]methanesulfonic dianhydride', otherNames: ['acetic butanedioic methanedisulfonic acetic trianhydride'] },
]);
