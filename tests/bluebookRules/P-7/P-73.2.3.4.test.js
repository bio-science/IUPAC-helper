/**
 * P-73.2.3.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Cationic centers on other characteristic groups
 * All other cationic centers are named by substituting the appropriate parent cation. In the case of
 * sulfur cationic centers, the terms ‘thioxylium’ and ‘dithioperoxylium’, but not the term
 * ‘thioperoxylium’ (ambiguity), may be used in general nomenclature. Use of the terms ‘thiylium’ or
 * ‘perthiylium’ is not recommended.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1095, P-73.2.3.4, example 5 on this page. [corrected 19 September 2018]
 *     For 2-benzoyldiazane-1-ylium
 *     read 2-benzoyldiazan-1-ylium
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-73.2.3.4', [
  { formula: 'Cl2CH-CH2-S⁺', notNames: ['2,2-dichloro(ethylthiylium)'] },
  { formula: 'CH3-CO-S⁺', pin: 'acetylsulfanylium', otherNames: ['acetylthioxylium'], notNames: ['acetylthiylium'] },
  { formula: 'C6H5-S-S⁺', pin: 'phenyldisulfanylium', otherNames: ['phenyldithioperoxylium'], notNames: ['phenylperthiylium'] },
  { formula: 'CH3-CH2-S-O⁺', notNames: ['(ethylsulfanyl)thioperoxylium'] },
  { formula: 'CH3-CH2-N²⁺', pin: 'ethylazanebis(ylium)' },
  { formula: 'C6H5-CO-N²⁺', pin: 'benzoylazanebis(ylium)', notNames: ['benzamidebis(ylium)'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73234a.gif', pin: '2-benzoylhydrazin-1-ylium', otherNames: ['2-benzoyldiazan-1-ylium'], notNames: ['benzohydrazid-N′-ium'] },
  { formula: 'CH3-CH2-O-Te⁺', pin: 'ethoxytellanylium', notNames: ['ethyltelluroperoxylium'] },
]);
