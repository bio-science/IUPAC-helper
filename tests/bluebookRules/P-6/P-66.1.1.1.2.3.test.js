/**
 * P-66.1.1.1.2.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “For general nomenclature only, the names furanamide, phthalamide, isophthalamide, and
 * terephthalamide are retained with substitution allowed (see P-65.1.1.2.1). Systematic names formed
 * according to P-65.1.2 are the preferred IUPAC names.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.1.1.1.2.3', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66111d.gif', pin: 'benzene-1,2-dicarboxamide', otherNames: ['phthalamide'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66111e.gif', pin: 'benzene-1,4-dicarboxamide', otherNames: ['terephthalamide'] },
]);
