/**
 * P-29.3.4.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “‘Diylidene’ substituent groups derived from mancude compounds by conversion of two H atoms into
 * free valences with any necessary rearrangement of double bonds to a quinoid structure are named by
 * adding two ‘ylidene’ suffixes, that is ‘diylidene’, to the parent hydride; no added hydrogen is
 * necessary. Also, no added hydrogen is necessary in the case of the formation of a ‘diyl’ substituent
 * group when the free valences are located at fusion atoms.
 * When no quinoid structure results from the introduction of free valences, added hydrogen atoms must
 * be cited in names. They receive the lowest possible locants. …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-29.3.4.2', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P290304h.gif', preferredPrefix: 'naphthalene-2,3-diylidene' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P290304i.gif', preferredPrefix: 'naphthalene-4a,8a-diyl' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P290304j.gif', preferredPrefix: 'naphthalene-1,3(2H,4H)-diylidene' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P290304k.gif', preferredPrefix: 'naphthalen-4a(2H)-yl' },
]);
