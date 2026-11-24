/**
 * P-51.4.1.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The same number of characteristic groups that would be expressed as suffixes in substitutive names
 * must be present in skeletal replacement (‘a’) names.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-51.4.1.3', [
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P510401j.gif', pin: '9-imino-2,8,10,16-tetraazaheptadecanediimidamide' },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P510401k.gif', pin: '16-amino-N-(14-amino-3,6,9,12-tetraazatetradecan-1-yl)-2,5,8,11,14-pentaazahexadecanamide' },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P510401l.gif', pin: '13-amino-N-(2-{[2-({2-[(2-aminoethyl)amino]ethyl}amino)ethyl]amino}ethyl)-2,5,8,11-tetraazatridecanamide' },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P510401m.gif', pin: 'methyl 7,14,21,28-tetraacetamido-2,9,16,23-tetraoxo-3,10,17,24-tetraazatriacontan-30-oate' },
]);
