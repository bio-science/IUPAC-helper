/**
 * P-25.4.3.4.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Naming of ortho- or ortho- and peri-fused systems
 * The ring system that remains after removal of the bridge(s) is named according to P-25.1 through
 * P-25.3. The maximum number of noncumulative double bonds is assigned to the fused ring system after
 * the insertion of the bridge. Thus, in allowing for the bonds of the bridge, the number of
 * noncumulative double bonds and/or the need for indicated hydrogen may be different than in the
 * parent ring system. …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-25.4.3.4.1', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250403n.gif', pin: '4a,8a-ethanonaphthalene' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250403o.gif', pin: '9H-9,10-ethanoacridine' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250403p.gif', pin: '1,5-methanoindole' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250403q.gif', name: '9H-9,10-(epiethanylylidene)anthracene', notNames: ['9H-10,9-(epiethanylylidene)anthracene'] },
]);
