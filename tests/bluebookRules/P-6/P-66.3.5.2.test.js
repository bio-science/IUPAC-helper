/**
 * P-66.3.5.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Names of hydrazides derived from the di- and polycarbonic acids are formed by adding the functional
 * class name ‘hydrazide’ to that of the corresponding acid, preceded by the numerical prefix ‘di’ to
 * express multiplicity of hydrazide groups, when necessary. Chalcogen and other replacement analogues
 * are described by the appropriate functional replacement prefix.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 879, P-66.3.5.2, example 1. [corrected 7 November 2018]
 *     For (hydrazinecarbonyl)oxy}formohydrazide
 *     read [(hydrazinecarbonyl)oxy]formohydrazide
 *   Page 879, P-66.3.5.2, example 2. [corrected 7 November 2018]
 *     For [(hydrazinecarbonyl)amino)formohydrazide
 *     read [(hydrazinecarbonyl)amino]formohydrazide
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.3.5.2', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66352a.gif', pin: 'dicarbonic dihydrazide' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66352b.gif', pin: '2-imidodicarbonic dihydrazide' },
]);
