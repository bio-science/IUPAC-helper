/**
 * P-52.2.4.4.1.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “It should be noted that benzo heterocycles are considered as one component, thus permitting the
 * construction of fusion names for ring systems that could not otherwise be named by fusion
 * principles.
 * Explanation: A normal fusion name is not possible when the four components azepine, anthracene,
 * 1,3-dioxine, and benzene are treated individually; …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-52.2.4.4.1.2', [
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P520204i.gif', pin: '2H-[1,3]benzodioxino[6′,5′,4′:10,5,6]anthra[2,3-b]azepine' },
]);
