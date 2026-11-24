/**
 * P-22.2.3.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “When a single heteroatom is present in the ring, it is assigned the locant ‘1’, which is omitted in
 * the name, unless a locant for an indicated hydrogen atom is present. Numbering usually proceeds
 * clockwise, unless substituted. Low locants are assigned first to the heteroatom and then to
 * unsaturated sites (see P-31.1.3.2). When required, locants for indicated hydrogen atoms are assigned
 * in accordance with P-14.7
 * .”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-22.2.3.2.1', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P220203c.gif', pin: '1-oxacycloundeca-2,4,6,8,10-pentaene', otherNames: ['oxa[11]annulene'] },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P220203d.gif', pin: '1-azacyclotrideca-2,4,6,8,10,12-hexaene', otherNames: ['1H-1-aza[13]annulene'] },
]);
