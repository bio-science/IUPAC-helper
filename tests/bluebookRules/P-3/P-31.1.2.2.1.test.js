/**
 * P-31.1.2.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Homogeneous acyclic parent hydrides and acyclic parent hydrides composed of alternating heteroatoms
 * are modified by the general method of P-31.1.1.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-31.1.2.2.1', [
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P310102b.gif', pin: 'hex-2-ene' },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P310102c.gif', pin: 'but-2-yne', notNames: ['dimethylacetylene'] },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P310102d.gif', pin: 'hexa-2,3-diene', notNames: ['1-ethyl-3-methylallene'] },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P310102e.gif', pin: 'hexa-1,3-dien-5-yne' },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P310102f.gif', name: 'pentaaz-2-ene' },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P310102g.gif', name: 'hexasil-2-ene' },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P310102h.gif', name: 'disilyne' },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P310102i.gif', name: 'tristannaphospha-1,3-diene' },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P310102j.gif', name: 'N-phosphanylidene-1-(phosphanylimino)phosphanamine' },
]);
