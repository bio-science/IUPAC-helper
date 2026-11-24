/**
 * P-15.3.1.2.1.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Any simple polyvalent substituent group (see P-29.1 for definition) may be used as a multiplicative
 * substituent group when attached to two or more identical structural units.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-15.3.1.2.1.1', [
  { formula: '–CH2–', preferredPrefix: 'methylene', notNames: ['methanediyl'] },
  { formula: '–O–', preselectedPrefix: 'oxy' },
  { formula: '–S–', preselectedPrefix: 'sulfanediyl' },
  { formula: '–OO–', preselectedPrefix: 'peroxy' },
  { formula: '–SS–', preselectedPrefix: 'disulfanediyl' },
  { formula: '–N<', preselectedPrefix: 'nitrilo' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1503c.gif', name: '1,4-phenylene (also 1,2- and 1,3-isomers' },
  { formula: '–OC-CH2-CH2-CO–', preferredPrefix: 'butanedioyl' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1503d.gif', preferredPrefix: 'ethane-1,1,2-triyl' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1503e.gif', preferredPrefix: 'prop-1-ene-1,3-diyl' },
]);
