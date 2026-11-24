/**
 * P-22.2.3.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Skeletal replacement (‘a’) names are formed by placing skeletal replacement (‘a’) prefixes (see
 * Table 2.4) in front of the name of the corresponding cycloalkane or annulene, and, when more than
 * one heteroatom is present, in the following decreasing seniority order: F > Cl > Br > I > O > S > Se
 * > Te > N > P > As > Sb > Bi > Si > Ge > Sn > Pb > B > Al > Ga > In > Tl. For numbering, see
 * P-22.2.3.2. The selection of preferred IUPAC names is discussed in P-52.2.3.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-22.2.3.1', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P220203a.gif', pin: 'thiacyclododecane' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P220203b.gif', pin: '1-azacyclotetradeca-1,3,5,7,9,11,13-heptaene', otherNames: ['aza[14]annulene'] },
]);
