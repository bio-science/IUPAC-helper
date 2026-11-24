/**
 * P-106.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “RETAINED NAMES
 * The following are traditional names for esters of nucleosides with phosphoric acid. The primed
 * locant of the ribosyl component is cited to locate the position of the phosphate group.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-106.1', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P106100a.gif', name: '5′-adenylic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P106100b.gif', name: '5′-thymidylic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P106100c.gif', name: '5′-guanylic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P106100d.gif', name: '5′-inosinic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P106100e.gif', name: '3′-xanthylic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P106100f.gif', name: '5′-cytidylic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P106100g.gif', name: '5′-uridylic acid' },
]);
