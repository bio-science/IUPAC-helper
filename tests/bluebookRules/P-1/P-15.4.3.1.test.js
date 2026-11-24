/**
 * P-15.4.3.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Skeletal replacement names are formed by placing skeletal replacement (‘a’) prefixes in front of
 * the name of the unbranched parent structure in accord with their seniority order given in
 * P-15.4.1.2. Multiplicative prefixes ‘di’, ‘tri’, ‘tetra’, etc, indicate a multiplicity of identical
 * heteroatoms, and locants are used to designate their positions. The chain must be terminated by a C
 * atom or one of the following heteroatoms: P, As, Sb, Bi, Si, Ge, Sn, Pb, B, Al, Ga, In, or Tl.
 * Termination of a hetero acyclic chain by P, As, Sb, Bi, Si, Ge, Sn, Pb, B, Al, Ga, In, or Tl is a
 * change from earlier recommendations where the chain could only be terminated by carbon atoms.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-15.4.3.1', [
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1504h.gif', pin: '2,8-dioxa-4,5-dithia-11-selenadodecane' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1504i.gif', pin: '2-oxa-4-thia-1,5-disilapentane' },
]);
