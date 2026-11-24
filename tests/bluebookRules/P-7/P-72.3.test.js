/**
 * P-72.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “ANIONS FORMED BY ADDITION OF HYDRIDE IONS
 * Two methods are used to name anions formally derived by the addition of a hydride ion, H⁻:
 * (1) the suffix ‘uide’ describes an anion formally derived by adding a hydride ion, H⁻, to a parent
 * hydride name; the multiplying prefixes ‘di’, ‘tri’, etc. indicating multiplicity;
 * (2) by adding the suffix ‘ide’ to a parent hydride in which the bonding number at the anionic site
 * is higher than the standard bonding number and is expressed by the λ-convention; …
 * In previous recommendations, the skeletal replacement prefix ‘borata’ was used to describe the
 * addition of a hydride ion.
 * Method (1) leads to preferred IUPAC names.”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-72.3', [
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P72300a.gif', pin: 'methylsilanuide' },
  { formula: '(CH3)4B⁻', pin: 'tetramethylboranuide' },
  { formula: '(CH3)4P⁻', pin: 'tetramethylphosphanuide', otherNames: ['tetramethyl-λ⁵-phosphanide', 'tetramethylphosphoranide'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P72300b.gif', pin: 'difluoro(phenyl)sulfanuide', otherNames: ['difluoro(phenyl)-λ⁴-sulfanide'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P72300c.gif', pin: 'diphenyliodanuide', otherNames: ['diphenyl-λ³-iodanide'] },
  { formula: 'F6I⁻', preselectedName: 'hexafluoro-λ⁵-iodanuide', otherNames: ['hexafluoro-λ⁷-iodanide'] },
  { formula: 'F8Te²⁻', preselectedName: 'octafluoro-λ⁶-tellanediuide', otherNames: ['octafluoro-λ¹⁰-tellanediide'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P72300d.gif', pin: 'sodium trimethylboranuide' },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P72300e.gif', name: 'lithium tert-butylbis(2-methylpropyl)alumanuide' },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P72300f.gif', pin: '1,1-dimethylborinan-1-uide', notNames: ['1,1-dimethyl-1-boratacyclohexane'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P72300g.gif', pin: '1-methoxy-1,3-dimethyl-1H-1-benzoborol-1-uide', notNames: ['1-methoxy-1,3-dimethyl-1-borataindene'] },
]);
