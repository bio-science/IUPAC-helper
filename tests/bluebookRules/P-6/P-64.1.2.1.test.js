/**
 * P-64.1.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Pseudoketones
 * Pseudoketones are of two types:
 * (a) cyclic compounds in which a carbonyl group in a ring is bonded to one or two skeletal
 * heteroatoms; or
 * (b) compounds in which an acyclic carbonyl group is bonded to one or two acyclic skeletal
 * heteroatoms, except nitrogen, halogen, or pseudohalogen atoms, or to a heteroatom of a ring or ring
 * system. …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 722, P-64.1.2.1, example 2 on this page. [corrected 5 July 2018]
 *     Replace structure with:
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-64.1.2.1', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640102c.gif', name: '1-acetylpiperidine' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640102d.gif', name: 'acetylsilane' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640102e.gif', name: 'propanoylphosphane' },
]);
