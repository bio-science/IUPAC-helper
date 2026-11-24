/**
 * P-14.5.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “When two or more prefixes consist of identical Roman letters, priority for order of citation is
 * given to the group that contains the lowest locant(s) at the first point of difference.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 44, P-14.5.4, example 1. [corrected 19 September 2018]
 *     For 4-(2-methylbutyl)-N-(3-methylbutyl)benzeneamine
 *     read 4-(2-methylbutyl)-N-(3-methylbutyl)benzenamine
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-14.5.4', [
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1405k.gif', pin: '4-(2-methylbutyl)-N-(3-methylbutyl)aniline', otherNames: ['4-(2-methylbutyl)-N-(3-methylbutyl)benzenamine'] },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1405l.gif', pin: '6-(1-chloroethyl)-5-(2-chloroethyl)-1H-indole' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1405m.gif', pin: '1-(pentan-2-yl)-4-(pentan-3-yl)benzene' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1405n.gif', pin: '1-(2-methylpentan-2-yl)-1-(3-methylpentan-3-yl)cyclopentane', notNames: ['1-(3-methylpentan-3-yl)-1-(2-methylpentan-2-yl)cyclopentane'] },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1405o.gif', pin: '1-(2-methylpentan-3-yl)-1-(3-methylpentan-2-yl)cyclopentane', notNames: ['1-(3-methylpentan-2-yl)-1-(2-methylpentan-3-yl)cyclopentane'] },
]);
