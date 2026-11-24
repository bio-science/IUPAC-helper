/**
 * P-64.8
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “ACYLOINS
 * α-Hydroxy ketones, RCH(OH)-CO-R, in which R is an alkyl, aryl, or a heterocyclic group, have the
 * class name ‘acyloins’ and are named by substitutive nomenclature as substituted ketones, in
 * accordance with the seniority order: ketones > hydroxy compounds (see P-41). Names ending in ‘oin’
 * are not recommended.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-64.8', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640800a.gif', pin: '3-hydroxybutan-2-one', notNames: ['acetoin'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640800b.gif', pin: '2-hydroxy-1,2-diphenylethan-1-one' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640800c.gif', pin: '1,2-di(furan-2-yl)-2-hydroxyethan-1-one', otherNames: ['1,2-di(2-furyl)-2-hydroxyethan-1-one'] },
]);
