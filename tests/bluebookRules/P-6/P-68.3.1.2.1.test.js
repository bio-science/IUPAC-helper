/**
 * P-68.3.1.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Hydrazine and derivatives
 * Hydrazine is a retained name describing the structure H2N-NH2; it is a preselected name and is
 * preferred to the systematic heterane name ‘diazane’.
 * Substituent groups derived from hydrazine are named systematically:
 * Preselected prefixes derived from the preselected parent hydride hydrazine are now formed
 * systematically from hydrazine. For H2N-NH– ‘hydrazinyl’; for H2N-N= ‘hydrazinylidene’; …
 * As a parent hydride, hydrazine is numbered by numerical locants, 1 and 2, not N and N′. Hydrazine is
 * substituted by hydrocarbyl groups and characteristic groups expressed by suffixes and prefixes.”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-68.3.1.2.1', [
  { formula: 'H2N-NH–', preselectedPrefix: 'hydrazinyl', notNames: ['hydrazino'] },
  { formula: 'H2N-N=', preselectedPrefix: 'hydrazinylidene', notNames: ['hydrazono'] },
  { formula: '=N-N=', preselectedPrefix: 'hydrazinediylidene', notNames: ['azino'] },
  { formula: '–NH-NH–', preselectedPrefix: 'hydrazine-1,2-diyl', notNames: ['hydrazo'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68312a.gif', pin: '1,1-dimethylhydrazine' },
  { formula: 'C6H5-NH-NH2', pin: 'phenylhydrazine' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68312b.gif', pin: '1-hydrazinylmethanamine' },
  { formula: 'H2N-NH-COOH', pin: 'hydrazinecarboxylic acid', notNames: ['carbazic acid'] },
  { formula: 'F2N-NF2', name: 'tetrafluorohydrazine' },
  { formula: 'H2N-NH-CH2-CN', pin: 'hydrazinylacetonitrile' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68312c.gif', pin: '3,3′-(hydrazine-1,2-diyl)dipropanamide', notNames: ['3,3′-hydrazodipropanamide'] },
]);
