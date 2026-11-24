/**
 * P-68.4.2.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Compounds with an organic group at one or both ends of a heterogeneous chalcogen chain of atoms are
 * named substitutively on the basis of the preferred organic group. Substituting groups may be made up
 * of individual units or formed by functional replacement nomenclature based on tri- or tetraoxy,
 * etc., substituting groups. The latter method is not used if the compound is a pseudoketone. …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1029, P-68.4.2.4, example 2 on this page. [corrected 20 March 2019]
 *     For 1,1′-[disulfanediylbis(oxy)]dipropan-1-one (PIN)
 *     read 1,1′-[disulfanediylbis(oxy)]di(propan-1-one) (PIN)
 *     for 1,1′-[dithioperoxybis(oxy)]dipropan-1-one
 *     read 1,1′-[dithioperoxybis(oxy)]di(propan-1-one)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-68.4.2.4', [
  { formula: 'CH3-O-S-O-CH3', name: 'dimethoxysulfane' },
  { formula: 'CH3-S-S-O-CH2-CH3', notNames: ['ethoxy(methyl)disulfane'] },
  { formula: 'C6H5-O-S-O-C6H5', pin: '1,1′-[sulfanediylbis(oxy)]dibenzene', otherNames: ['OSO-thiotrioxydibenzene'] },
  { formula: 'CH3-O-S-Se-C6H5', name: 'methyl-OSSe-selenothiotrioxybenzene' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68424a.gif', pin: '1-{[(methylsulfanyl)oxy]selanyl}propan-1-one' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68424b.gif', pin: '1-[(acetylsulfanyl)peroxy]propan-1-one' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68424c.gif', pin: '1,1′-[disulfanediylbis(oxy)]di(propan-1-one)', otherNames: ['1,1′-[dithioperoxybis(oxy)]di(propan-1-one)'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68424d.gif', pin: '3,6-dioxa-5-thia-4-selenanonan-7-one' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68424e.gif', pin: '1-{[(methylsulfanyl)oxy]selanyl}propane-1-selone' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68424f.gif', pin: '1-[(methylsulfanyl)peroxy]propan-1-one' },
]);
