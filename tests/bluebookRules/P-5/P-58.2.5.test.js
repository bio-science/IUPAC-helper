/**
 * P-58.2.5
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Nondetachable hydro prefixes vs. indicated hydrogen
 * An alternative method to the ‘added indicated hydrogen’ method for accommodation of principal
 * characteristic groups, free valences, radicals, or ionic centers at positions of mancude parent
 * hydrides where a sufficient number of hydrogen atoms for the operation of the basic principles of
 * substitutive nomenclature are not present is to derive them from a suitable hydrogenated derivative
 * of the parent ring system.
 * Rule C-16.11 in the 1979 edition of the IUPAC Nomenclature of Organic Chemistry (ref. …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-58.2.5', [
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P580205a.gif', pin: 'naphthalen-1(4H)-one', otherNames: ['1,4-dihydronaphthalen-1-one'] },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P580205b.gif', preferredPrefix: 'naphthalene-1,4-diylidene' },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P580205c.gif', pin: '2,3-dihydronaphthalene-1,4-dione', otherNames: ['1,2,3,4-tetrahydronaphthalene-1,4-dione'] },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P580205d.gif', pin: '5,8-dioxo-5,6,7,8-tetrahydronaphthalene-2-carboxylic acid', otherNames: ['1,4-dioxo-1,2,3,4-tetrahydronaphthalene-6-carboxylic acid'] },
]);
