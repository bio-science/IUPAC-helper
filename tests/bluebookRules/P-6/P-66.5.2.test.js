/**
 * P-66.5.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Substituted nitriles
 * Substituents on the parent hydrides are denoted as prefixes. Nitriles, in the seniority order of
 * classes, are senior to ketones, pseudoketones, heterones, hydroxy compounds, amines, and imines;
 * these classes must be cited as prefixes in the presence of a nitrile group. Seniority for numbering
 * of polyfunctional nitriles follows that described for acids, for which see P-65.1.2.3 and
 * P-65.1.2.4.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 904, P-66.5.2, example 1. [corrected 5 July 2018]
 *     Replace structure with:
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.5.2', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66520a.gif', pin: '5-oxohexanenitrile' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66520b.gif', pin: '4-hydroxybutanenitrile', notNames: ['4-hydroxybutyronitrile'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66520c.gif', pin: '3-amino-1H-pyrazole-4-carbonitrile' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66520e.gif', pin: '3,5-bis(2-aminoethyl)benzonitrile' },
  { formula: 'NC-CH2-CH2-NH-CH2-CH2-CN', pin: '3,3′-azanediyldipropanenitrile', notNames: ['3,3′-azanediyldipropionitrile'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66520f.gif', pin: '2-chloro-6-nitrobenzonitrile' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66520f.gif', pin: '2-methoxybenzonitrile' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66520h.gif', pin: '3-chloropropanoyl cyanide', otherNames: ['4-chloro-2-oxobutanenitrile'], notNames: ['3-chloropropionyl cyanide'] },
]);
