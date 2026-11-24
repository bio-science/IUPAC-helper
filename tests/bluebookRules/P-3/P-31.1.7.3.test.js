/**
 * P-31.1.7.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “When heterocyclic ring assemblies consisting of monocyclic, bi- or polyalicyclic components are
 * named by skeletal replacement (‘a’) nomenclature, low locants are assigned, in order, to ring
 * junctions, heteroatoms and then unsaturation sites.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-31.1.7.3', [
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P310107h.gif', pin: '1²,2³,3³-trithia[1¹,2¹:2⁴,3¹-terbicyclo[2.2.2]octane]-1⁵,2⁵,3⁵-triene', otherNames: ['2,3′,3′′-trithia-[1,1′:4′,1′′-terbicyclo[2.2.2]octane]-5,5′,5′′-triene'] },
]);
