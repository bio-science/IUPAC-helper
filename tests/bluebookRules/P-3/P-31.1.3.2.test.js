/**
 * P-31.1.3.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “In rings modified by skeletal replacement (‘a’) nomenclature, low locants are assigned first to
 * heteroatoms and then to unsaturated sites.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 377, P-31.1.3.2, example 1. [corrected 4 September 2024]
 *     read (2Z)-1,4,7,10-tetraoxacyclododec-2-ene (PIN)
 *   Page 377, P-31.1.3.2, example 2. [corrected 4 September 2024]
 *     For 1-oxa-4-azacyclododec-3-ene (PIN)
 *     read (3E)-1-oxa-4-azacyclododec-3-ene (PIN)
 *   Page 377, P-31.1.3.2, example 3. [corrected 4 September 2024]
 *     For 1,11-disilacycloicosa-5,7-dien-3-yne (PIN)
 *     read (5Z,7E)-1,11-disilacycloicosa-5,7-dien-3-yne (PIN)
 *   Page 378, P-31.1.3.2, example 1 on this page. [corrected 4 September 2024]
 *     For 1,10-disilacycloicosa-12,14,16-trien-18-yne (PIN)
 *     read (12Z,14E,16Z)-1,10-disilacycloicosa-12,14,16-trien-18-yne (PIN)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-31.1.3.2', [
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P310103h.gif', notNames: ['1,11-disilacycloicosa-4,6-dien-8-yne'] },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P310103j.gif', pin: '1-azacyclotrideca-2,4,6,8,10,12-hexaene', otherNames: ['1H-1-aza[13]annulene'] },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P310103k.gif', pin: '1,3-diazacyclotetradeca-1,3,5,7,9,11,13-heptaene', otherNames: ['1,3-diaza[14]annulene'] },
]);
