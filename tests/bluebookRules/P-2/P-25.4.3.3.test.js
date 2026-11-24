/**
 * P-25.4.3.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Choice of attachment locants
 * If there is a choice of attachment locants after the application of P-25.4.3.2, seniority is
 * established in the following order:
 * (a) the lowest set of locants for all the bridge attachment points considered as a set;
 * (b) lowest locants in the order of citation for the bridges;”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-25.4.3.3', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250403j.gif', pin: '1,4-epoxynaphthalene', notNames: ['5,8-epoxynaphthalene'] },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250403k.gif', pin: '5,8-epoxy-1,3-methanoanthracene', notNames: ['1,4-epoxy-5,7-methanoanthracene'] },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250403l.gif', pin: '1,4-ethano-5,8-methanoanthracene' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250403m.gif', pin: '1,4-epoxy-5,8-methanonaphthalene' },
]);
