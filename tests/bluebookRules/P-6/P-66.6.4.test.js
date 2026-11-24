/**
 * P-66.6.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Polyfunctional aldehydes
 * In the presence of an aldehyde group, ketones, pseudoketones, heterones, hydroxy compounds, amines,
 * and imines are expressed by prefixes. Seniority for numbering polyfunctional aldehydes follows that
 * described for acids, for which see P-65.1.2.3 and P-65.1.2.4.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.6.4', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66640a.gif', pin: '3-oxobutanal', notNames: ['3-oxobutyraldehyde'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66640b.gif', pin: '2-methylidenehexanal', notNames: ['2-butylprop-2-enal', 'the longest chain is the principal chain (see P-44.3)'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66640c.gif', pin: '2-hydroxybenzaldehyde', notNames: ['salicylaldehyde'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66640d.gif', pin: '5-(hydroxymethyl)furan-2-carbaldehyde', otherNames: ['5-(hydroxymethyl)-2-furaldehyde'], notNames: ['5-(hydroxymethyl)furfural'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66640e.gif', pin: 'phenoxyacetaldehyde' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66640e.gif', pin: '3-fluoro-2-methylbenzaldehyde' },
]);
