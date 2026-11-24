/**
 * P-28.4.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Since hydrocarbon ring assemblies are the parent structures for the application of skeletal
 * replacement (‘a’) nomenclature, heteroatoms do not need to be identical or present in the same
 * number. When heteroatoms of different elements are present, normal skeletal replacement (‘a’)
 * nomenclature is used to name the heterocycles. Low locants are assigned to heteroatoms as a set,
 * then in the order: O > S > Se > Te > N > P > As > Sb > Bi > Si > Ge > Sn > Pb > B > Al > Ga > In >
 * Tl.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-28.4.2', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P280402a.gif', pin: '3′-oxa-2-thia-1,1′-bi(cyclotetradecane)', notNames: ['3-oxa-2′-thia-1,1′-bi(cyclotetradecane)'] },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P280402b.gif', pin: '5-aza-5′-phospha-2,2′-bi(bicyclo[2.2.2]octane)', notNames: ['5′-aza-5-phospha-2,2′-bi(bicyclo[2.2.2]octane)'] },
]);
