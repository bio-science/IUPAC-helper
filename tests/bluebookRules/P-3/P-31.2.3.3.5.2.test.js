/**
 * P-31.2.3.3.5.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Ring assemblies composed of polycyclic compounds
 * Low locants are assigned to the junctions between components, then to indicated hydrogen atoms, if
 * any, and finally to ‘hydro’ prefixes.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-31.2.3.3.5.2', [
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P310203ao.gif', pin: '1,2′,3′,4-tetrahydro-2,2′-binaphthalene' },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P310203ap.gif', pin: '1⁷,1⁸,2⁷,2⁸,3⁷,3⁸-hexahydro-1²,2⁷:2²,3⁷-terquinoline', otherNames: ['7,7′,7′′,8,8′,8′′-hexahydro-2,7′:2′,7′′-terquinoline'] },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P310203aq.gif', pin: '3a,3′a,4,4′,5,5′,6,6′,7,7′,7a,7′a-dodecahydro-1H,1′H-2,2′-biindole' },
]);
