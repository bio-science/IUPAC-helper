/**
 * P-66.3.1.2.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “For general nomenclature, only the names furohydrazide, phthalohydrazide, isophthalohydrazide, and
 * terephthalohydrazide are retained with limited substitution allowed (see P-65.1.1.2); the
 * corresponding systematic names are preferred IUPAC names (see P-66.3.1.1). When two or more
 * ‘carbohydrazide’ suffixes are present, the nitrogen locants are N and N′ with appropriate
 * superscript numerical locants denoting the locants of the parent structure.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.3.1.2.2', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66312f.gif', pin: 'benzene-1,2-dicarbohydrazide', otherNames: ['phthalohydrazide'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66312g.gif', pin: 'benzene-1,4-dicarbohydrazide', otherNames: ['terephthalohydrazide'] },
]);
