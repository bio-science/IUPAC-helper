/**
 * P-22.2.2.1.6
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Selecting Hantzsch-Widman names for six-membered rings
 * The stem for six-membered rings depends on the least senior heteroatom in the ring, i.e., the
 * heteroatom whose name directly precedes the stem. Heteroatoms are divided into three groups, A, B,
 * and C, each corresponding to a stem for the unsaturated and for the saturated compound (Table 2.5).
 * The stem is selected in accordance with the group to which the least senior heteroatom belongs.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-22.2.2.1.6', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P220202t.gif', pin: '1,4-dioxine' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P220202u.gif', pin: '1,3-thiaselenane' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P220202v.gif', pin: '1,3,5-triazine' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P220202w.gif', pin: '1,3-oxazinane' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P220202x.gif', pin: '1,3,5-triphosphinine' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P220202y.gif', pin: '1,3-oxarsinane' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P220202z.gif', preselectedName: 'hexasilinane' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P220202aa.gif', name: '1,3,5,2,4,6-triphosphatriborinine' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P220202ab.gif', preselectedName: '1,3,5,2,4,6-triphosphatriborinane' },
]);
