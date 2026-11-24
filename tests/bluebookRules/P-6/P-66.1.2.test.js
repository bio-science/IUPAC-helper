/**
 * P-66.1.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Secondary and tertiary amides
 * Amides having general formulas (R-CO)2NH, (R-SO2)2NH, etc., and (R-CO)3N, (R-SO2)3N, etc.,
 * respectively, are named as N-acyl derivatives of the senior primary amide or preferred prefix. Names
 * based on the substitution of the parent hydride ‘azane’ or the pseudo parent hydride ‘amine’ by acyl
 * groups, for example, diacetylazane or diacetylamine, as recommended in the 1993 Recommendations
 * (ref. …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.1.2', [
  { formula: 'HCO-NH-CHO', pin: 'N-formylformamide', notNames: ['diformylazane', 'diformylamine', 'diformamide'] },
  { formula: '(CH3-CO)2N–', preferredPrefix: 'N-acetylacetamido', notNames: ['diacetylazanyl', 'diacetamido'] },
  { formula: 'C6H5-CO-NH-CO-CH3', pin: 'N-acetylbenzamide', notNames: ['acetyl(benzoyl)azane', 'acetyl(benzoyl)amine'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66121a.gif', pin: 'N-(furan-2-carbonyl)furan-2-carboxamide', notNames: ['di(furan-2-carbonyl)azane', 'di(furan-2-carbonyl)amine'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66121b.gif', pin: 'N,N-di(cyclohexanecarbonyl)cyclohexanecarboxamide', notNames: ['tri(cyclohexanecarbonyl)azane', 'tri(cyclohexanecarbonyl)amine'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66121c.gif', pin: 'N-acetyl-N-(3-chloropropanoyl)benzamide', notNames: ['acetyl(benzoyl)(3-chloropropanoyl)azane', 'acetyl(benzoyl)(3-chloropropanoyl)amine'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66121d.gif', pin: 'N-acetyl-N-cyclopentylacetamide', notNames: ['diacetyl(cyclopentyl)azane', 'diacetyl(cyclopentyl)amine'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66121e.gif', pin: 'N-acetyl-N-(naphthalen-2-yl)benzamide', notNames: ['acetyl(benzoyl)(naphthalen-2-yl)azane', 'acetyl(benzoyl)(naphthalen-2-yl)amine'] },
]);
