/**
 * P-101.3.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Bond formation
 * The creation of an additional ring by a conjunctive operation (see P-13.5.3) by means of a direct
 * link between any two atoms of a parent structure is described by the nondetachable prefix ‘cyclo’
 * (not italicized) preceded by the locants of the skeletal atoms so connected. When necessary, the
 * configuration created by the new bond is denoted by α, β, or ξ descriptors in accord with P-101.2.6,
 * or by describing the configuration of the hydrogen atom in accordance with P-101.2.6.1.3.
 * Configurations of the fundamental parent structure are retained. New configurations of the ring
 * atoms having one hydrogen atom still present are indicated by the ‘α/β’ stereodescriptors as
 * described …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1309, P-101.3.3, structure 1. [corrected 17 October 2018]
 *     Replace the structure with:
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-101.3.3', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101330a.gif', name: 'pregnane' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101330d.gif', name: 'corynan' },
]);
