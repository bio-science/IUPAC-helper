/**
 * P-66.3.1.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Only the following five names are preferred IUPAC names and can be substituted in the same way as
 * corresponding amides (see P-66.1.1.1.2). Systematic substitutive names are used to generate acids
 * modified by functional replacement.
 * Hydrazides of the -imidic and -hydrazonic analogues of these acids are named systematically.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.3.1.2.1', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66312a.gif', pin: 'cyanohydrazide', otherNames: ['hydrazinecarbonitrile'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66312b.gif', pin: 'formohydrazide', notNames: ['hydrazinecarbaldehyde'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66312c.gif', pin: 'acetohydrazide' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66312c.gif', pin: 'benzohydrazide' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66312c.gif', pin: 'oxalohydrazide' },
  { formula: 'CH3-C(=NH)-NH-NH2', pin: 'ethanimidohydrazide', notNames: ['acetimidohydrazide'] },
]);
