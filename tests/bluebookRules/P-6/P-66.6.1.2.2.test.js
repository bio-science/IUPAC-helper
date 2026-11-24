/**
 * P-66.6.1.2.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “For general nomenclature, only the names furaldehyde, phthalaldehyde, isophthalaldehyde, and
 * terephthalaldehyde are retained with substitution allowed (see P-34). Systematic names (P-66.6.1.1)
 * are the preferred IUPAC names.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.6.1.2.2', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66612a.gif', pin: 'benzene-1,2-dicarbaldehyde', otherNames: ['phthalaldehyde'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66612b.gif', pin: 'benzene-1,4-dicarbaldehyde', otherNames: ['terephthalaldehyde'] },
]);
