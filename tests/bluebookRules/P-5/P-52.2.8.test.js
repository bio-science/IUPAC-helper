/**
 * P-52.2.8
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Selection between a ring and a chain as parent hydride
 * Within the same heteroatom class and for the same number of characteristic groups cited as the
 * principal characteristic group, a ring is always selected as the parent hydride to construct a
 * preferred IUPAC name. In general nomenclature, a ring or a chain can be the parent hydride (see
 * P-44.1.2.2).”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-52.2.8', [
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P520208c.gif', pin: '1,2-di(tridecyl)benzene', notNames: ['1,1′-(1,2-phenylene)di(tridecane)'] },
]);
