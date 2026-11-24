/**
 * P-104.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Stereoisomeric inositols are described by adding italicized prefixes at the front of the name
 * ‘inositol’. Positional numbers described in the following method are indicated in parentheses. Names
 * denoted by the prefixes are preferred.
 * The absolute configuration of cyclitols is denoted by ‘D’ and ‘L’ and is determined in the following
 * way. …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-104.2.1', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P104210a.gif', name: 'cis-inositol' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P104210b.gif', name: 'epi-inositol' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P104210c.gif', name: 'allo-inositol' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P104210d.gif', name: 'myo-inositol' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P104210e.gif', name: 'muco-inositol' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P104210f.gif', name: 'neo-inositol' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P104210g.gif', name: 'scyllo-inositol' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P104210h.gif', name: '1L-chiro-inositol' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P104210i.gif', name: '1D-chiro-inositol' },
]);
