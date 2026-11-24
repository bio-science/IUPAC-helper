/**
 * P-68.1.1.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Acyclic di- and polynuclear parent hydrides are named by citing the number of skeletal atoms in the
 * molecule as a multiplying prefix, ‘di’, ‘tri’, etc., in front of the name of the mononuclear parent
 * hydride. The number of hydrogen atoms in the molecule is designated by an arabic numeral enclosed in
 * parentheses immediately following the name derived as above. These numbers are omitted when there is
 * no ambiguity or by convention in the names of acyclic polynuclear hydrides. …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-68.1.1.2.1', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68112a.gif', preselectedName: 'diborane(4)' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68112b.gif', preselectedName: 'triborane(5)' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68112c.gif', preselectedName: 'diborane(6)' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68112d.gif', preselectedName: 'digallane(6)' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68112e.gif', pin: '1-methyldiborane(6)' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68112f.gif', pin: '1-carba-nido-pentaborane(5)' },
]);
