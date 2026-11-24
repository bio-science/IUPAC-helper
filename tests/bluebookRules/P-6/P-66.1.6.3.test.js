/**
 * P-66.1.6.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Amides of di- and polycarbonic acids
 * Systematic names for amides of the polycarbonic acids are formed by adding the functional class name
 * ‘amide’ to that of the corresponding acid, preceded by the numerical prefix ‘di’ to indicate the
 * presence of two –NH2 groups. Chalcogen analogues are described by functional replacement prefixes.
 * Numerical and letter locants are used to number the structures.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.1.6.3', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66163a.gif', pin: 'dicarbonic diamide' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66163b.gif', pin: 'tricarbonic diamide' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66163c.gif', pin: 'N¹-(propan-2-yl)dicarbonic diamide', otherNames: ['N-isopropyldicarbonic diamide'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66163d.gif', pin: 'N¹-methyl-2-thiotricarbonic diamide' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66163e.gif', pin: '1,2,3-trithiodicarbonic diamide', notNames: ['‘thiuram monosulfide’'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66163f.gif', pin: '2-dithioperoxy-1,3-dithiodicarbonic diamide', notNames: ['‘thiuram disulfide’'] },
]);
