/**
 * P-71.2.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Multiple radical centers (polyradicals)
 * Polyradicals containing two or more radicals centers, formally derived by the removal of two or more
 * hydrogen atoms from each of two or more different skeletal atoms of a parent hydride, are named by
 * adding to the name of the parent hydride combinations of the suffix ‘yl’ for a monovalent radical
 * center, ‘ylidene’ for a divalent radical center, and ‘ylidyne’ for a trivalent radical center,
 * together with the appropriate numerical prefixes indicating the number of each kind of radical
 * center. …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-71.2.3', [
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P71230a.gif', pin: 'ethane-1,2-diyl' },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P71230b.gif', preselectedName: 'hydrazine-1,2-diyl', otherNames: ['diazane-1,2-diyl'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P71230c.gif', pin: 'pentane-2,4-diylidene' },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P71230d.gif', pin: 'propane-1,2,3-triyl' },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P71230e.gif', pin: 'benzene-1,4-diyl', otherNames: ['{traditional names: p-phenylene', '1,4-phenylene [see P-70.4 (1)]}'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P71230f.gif', pin: '3,4-dimethylidenecyclobutane-1,2-diyl' },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P71230g.gif', pin: '1-phenyldodecane-1,12-diyl' },
]);
