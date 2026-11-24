/**
 * P-51.2.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Functional class nomenclature for general nomenclature
 * A certain number of classes can still be named for general nomenclature by applying functional class
 * nomenclature. They are described in P-15.2. For these classes, preferred IUPAC names are
 * substitutive names.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 556, P-51.2.2, example 3. [corrected 3 June 2020]
 *     For 1,2-di(propan-2-ylidene)hydrazine (PIN)
 *     read di(propan-2-ylidene)hydrazine (PIN)
 *   Page 556, P-51.2.2, example 4. [corrected 24 July 2019]
 *     For N-propylidenehydroxylamine (PIN)
 *     read N-propylidenehydroxylamine
 *     add N-hydroxypropan-1-imine (PIN)
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-51.2.2', [
  { pin: 'propanenitrile', otherNames: ['ethyl cyanide'] },
  { pin: 'isocyanobenzene', otherNames: ['phenyl isocyanide'] },
  { pin: 'di(propan-2-ylidene)hydrazine', otherNames: ['acetone azine'] },
  { pin: 'N-hydroxypropan-1-imine', otherNames: ['propanal oxime', 'N-propylidenehydroxylamine'] },
  { pin: '2-(propan-2-ylidene)hydrazinecarboxamide', otherNames: ['acetone semicarbazone'] },
]);
