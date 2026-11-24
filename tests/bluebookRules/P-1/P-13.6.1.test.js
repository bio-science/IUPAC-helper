/**
 * P-13.6.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “In substitutive nomenclature the multiplicative operation is used to name assemblies of identical
 * parent structures linked by di- or polyvalent substituent groups. Identical parent structures are
 * functionalized parent hydrides, functional parents, and rings or ring systems. It is, in fact,
 * substitutive nomenclature in which identical parent structures are interconnected by a di- or
 * polyvalent substituent group.”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-13.6.1', [
  { pin: 'benzonitrile' },
  { pin: 'benzonitrile' },
  { pin: '2,2′-methylenedibenzonitrile' },
  { pin: 'cyclohexane' },
  { pin: 'cyclohexane' },
  { pin: '1,1′-oxydicyclohexane' },
]);
