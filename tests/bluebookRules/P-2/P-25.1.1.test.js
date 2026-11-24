/**
 * P-25.1.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Retained names for hydrocarbons used for parent ring components and as attached ring components
 * Retained names (also called trivial names) for polycyclic hydrocarbons are listed in Table 2.7, in
 * decreasing order of seniority for being chosen as parent components in fusion nomenclature. Their
 * numbering is indicated as the result of the application of the specific criteria used to number
 * fused ring systems described in Section P-25.3.3.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-25.1.1', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250101a.gif', pin: 'ovalene' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250101b.gif', pin: 'pyranthrene' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250101c.gif', pin: 'coronene' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250101d.gif', pin: 'rubicene' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250101e.gif', pin: 'perylene' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250101f.gif', pin: 'picene' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250101g.gif', pin: 'pleiadene' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250101h.gif', pin: 'chrysene' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250101i.gif', pin: 'pyrene' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250101j.gif', pin: 'fluoranthene' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250101k.gif', pin: 'anthracene' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250101l.gif', pin: 'phenanthrene' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250101m.gif', name: 'phenalene' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250101n.gif', name: 'fluorene' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250101o.gif', pin: 's-indacene' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250101p.gif', pin: 'as-indacene' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250101q.gif', pin: 'azulene' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250101r.gif', pin: 'naphthalene' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250101s.gif', name: 'indene' },
]);
