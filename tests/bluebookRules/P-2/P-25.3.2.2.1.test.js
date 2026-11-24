/**
 * P-25.3.2.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Monocyclic hydrocarbon prefixes for attached components other than ‘benzo’ are formed by dropping
 * ‘ne’ from the name of the appropriate saturated monocyclic hydrocarbon. These names represent the
 * form with the maximum number of noncumulative double bonds. There is no upper ring-size limit to
 * this criterion.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-25.3.2.2.1', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250302e.gif', preferredPrefix: 'cyclopropa' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250302f.gif', preferredPrefix: 'cyclobuta' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250302g.gif', preferredPrefix: 'cyclopenta' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250302h.gif', preferredPrefix: 'cyclohepta', notNames: ['[7]annuleno'] },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250302i.gif', preferredPrefix: 'cycloocta', notNames: ['[8]annuleno'] },
]);
