/**
 * P-58.2.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Prefix nomenclature
 * After the introduction of indicated and ‘added indicated hydrogen’ atoms, all substituent groups not
 * expressed as suffixes are cited as prefixes.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-58.2.4', [
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P580204a.gif', preferredPrefix: '1,3-dioxo-1,3-dihydro-2H-isoindole-2,5-diyl' },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P580204b.gif', pin: '4-iminonaphthalen-1(4H)-one' },
]);
