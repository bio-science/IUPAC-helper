/**
 * P-44.2.2.2.7
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Seniority criteria for ring assemblies are based on the appropriate criteria for rings and ring
 * systems given in P-44.2.1. Phane nomenclature is used when two ring assemblies are linked together
 * by atoms or chains to generate a system with at least seven nodes and two terminal rings or ring
 * systems.
 * The following rules for seniority of ring assemblies are applied successively until there are no
 * alternatives remaining:
 * (a) rings containing any heteroatom;
 * (b) rings containing nitrogen;
 * (c) in the absence of nitrogen, rings containing at least one heteroatom first cited in the
 * following sequence; …
 * (d) the greater number of rings;
 * (e) the greater number of atoms;
 * (f) the greater number of heteroatoms of any kind;
 * (g) the greater number of heteroatoms first cited in the following sequence: F > Cl > Br > I > O > S
 * > Se >Te > N > P > As > Sb > Bi > Si > Ge > Sn > Pb > B > Al > Ga > In > Tl.
 * Further criteria applicable to ring assemblies are found in P-44.4.”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-44.2.2.2.7', [
  // Drawn in the Blue Book.
  { drawing: 'P4gif/P440202dg.gif', pin: '4-oxa-1(2),2,3(2,6)-tripyridina-5,6(1,4),7(1)-tribenzenaheptaphane', otherNames: ['1⁶-([1¹,2¹:2⁴,3¹]terphenyl]-1⁴-yloxy)-1²,2²:2⁶,3²-terpyridine'] },
]);
