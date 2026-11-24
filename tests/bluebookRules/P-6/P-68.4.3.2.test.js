/**
 * P-68.4.3.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Di- and polysulfoxides, polysulfones, and selenium and tellurium analogues
 * Compounds with the general structures R-[SO]n-R′ and R-[SO2]n-R′, in which n ≥ 2, have the class
 * name ‘disulfoxides’, ‘trisulfoxides’, ‘disulfones’, etc. They and their selenium and tellurium
 * analogues are named in two ways:
 * (1) substitutively by adding the suffix ‘one’ to the name of the appropriate parent hydride, λ⁴ or
 * λ⁶ disulfane, diselane, ditellane, etc.;
 * (2) by functional class nomenclature, using class names such as ‘disulfoxide’, ‘disulfone’,
 * ‘diselenoxide’, ‘diselenone’, etc.
 * Method (1) generates preferred IUPAC names and is also used to name mixed sulfoxide-sulfones.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1031, P-68.4.3.2, example 2 on this page. [corrected 20 March 2019]
 *     For 1-[(ethaneseleninyl)selenonyl]ethane
 *     read [(ethaneseleninyl)selenonyl]ethane
 *     for 1-[(ethylseleninyl)selenonyl]ethane
 *     read [(ethylseleninyl)selenonyl]ethane
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-68.4.3.2', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68432a.gif', pin: '1,2-dimethyl-1λ⁴,2λ⁴-disulfane-1,2-dione', otherNames: ['dimethyl disulfoxide'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68432b.gif', pin: '1-ethyl-2-methyl-1λ⁶,2λ⁶-disulfane-1,1,2,2-tetrone', otherNames: ['ethyl methyl disulfone'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68432c.gif', pin: '1-phenyl-2-(quinolin-7-yl)-1λ⁶,2λ⁶-diselane-1,1,2,2-tetrone', otherNames: ['phenyl quinolin-7-yl diselenone'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68432d.gif', pin: 'diethyl-1λ⁶,2λ⁴-diselane-1,1,2-trione' },
]);
