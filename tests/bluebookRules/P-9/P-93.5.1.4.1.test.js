/**
 * P-93.5.1.4.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Specification of cyclic double bonds
 * In three- to seven-membered monocycles, cyclic double bonds have a ‘cis’ configuration; the
 * stereodescriptor, ‘Z’ or ‘cis’, denoting the configuration of the cyclic double bonds (double bonds
 * that are included in the ring) is permanently omitted. From eight-membered monocycles members
 * onward, cyclic double bonds can be either ‘cis’ or ‘trans’; the stereodescriptors ‘Z’ and ‘E’, must
 * be used in preferred IUPAC names, to specify such arrangements; …
 * The stereodescriptors ‘M’, ‘P’, ‘Rp’, or ‘Sp’ are used to denote the configuration of ‘E’ chiral
 * isomers of cycloalkenes. The stereodescriptors ‘M’ and ‘P’ are used in preferred IUPAC names.”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-93.5.1.4.1', [
  // Drawn in the Blue Book.
  { drawing: 'P9gif/P93514a.gif', pin: 'cyclohepta-1,3,5-triene' },
  // Drawn in the Blue Book.
  { drawing: 'P9gif/P93514e.gif', name: '1-cis,3-trans-cyclodeca-1,3-diene' },
  // Drawn in the Blue Book.
  { drawing: 'P9gif/P93514f.gif', name: '2-trans,7-cis-(1R,4S)-4-(propan-2-yl)cyclodeca-2,7-dien-1-ol' },
]);
