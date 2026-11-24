/**
 * P-63.4.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Hydroperoxides
 * The suffix ‘peroxol’ is now introduced to name the group –OOH, formerly named by functional class
 * nomenclature as ‘hydroperoxide’. Chalcogen analogues are names by suffixes such as ‘thioperoxol’,
 * ‘dithioperoxol’, ‘selenoperoxol’, and ‘selenothioperoxol’.
 * Compounds with the general structure R-OOH are called generically ‘hydroperoxides’. The class name
 * ‘peroxols’ could be more appropriate. …
 * (1) substitutively using the suffix ‘peroxol’;
 * (2) by functional class nomenclature using the class name ‘hydroperoxide’.
 * The prefix ‘peroxy’, not ‘dioxy’, is retained for the group –OO– (see P-63.3.1). …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-63.4.1', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630401a.gif', pin: '1,2,3,4-tetrahydronaphthalene-1-peroxol', otherNames: ['1,2,3,4-tetrahydronaphthalen-1-yl hydroperoxide'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630401b.gif', pin: '2-hydroperoxy-1-phenylethan-1-one' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630401c.gif', pin: '4-(dimethylamino)-2-methylbutane-2-peroxol', otherNames: ['4-(dimethylamino)-2-methylbutan-2-yl hydroperoxide', '3-(dimethylamino)-1,1-dimethylpropyl hydroperoxide'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630401d.gif', pin: 'pyrrolidine-1-peroxol', otherNames: ['pyrrolidin-1-yl hydroperoxide'] },
]);
