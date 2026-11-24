/**
 * P-66.5.1.2.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “For general nomenclature, only the names furonitrile, phthalonitrile, isophthalonitrile, and
 * terephthalonitrile are retained with full substitution allowed (see P-65.1.1.2.1). Systematic names
 * (see P-65.1.2) are the preferred IUPAC names.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.5.1.2.2', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66512a.gif', pin: 'benzene-1,2-dicarbonitrile', otherNames: ['phthalonitrile'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66512b.gif', pin: 'benzene-1,4-dicarbonitrile', otherNames: ['terephthalonitrile'] },
]);
