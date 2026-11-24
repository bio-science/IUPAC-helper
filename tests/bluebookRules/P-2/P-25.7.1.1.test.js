/**
 * P-25.7.1.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Maximum number of noncumulative double bonds
 * The names of polycyclic fused ring systems are considered to correspond to the structure with the
 * maximum number of noncumulative double bonds consistent with the appropriate bonding number of the
 * skeletal atoms. To achieve this result, components are fused together and noncumulative double bonds
 * are introduced into the completed fused system. Hydrogen atoms not attached to atoms connected by
 * double bonds are denoted as indicated hydrogen atom(s).
 * If atoms with nonstandard bonding numbers are present, they must be indicated using the λ-convention
 * (and if necessary the δ-convention). …
 * In bridged fused systems, the distribution of noncumulative double bonds in the parent fused ring
 * system is accomplished after allowance has been made for the bonds existing between the bridge(s)
 * and …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-25.7.1.1', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250701a.gif', pin: 'pyrrolo[3,2-b]pyrrole' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250701b.gif', pin: '2H-1,3-benzoxathiole' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250701c.gif', pin: '3λ⁴-pyrido[3,2-d][1,3]thiazine' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250701d.gif', pin: '1,4-epoxy-4a,8a-ethanonaphthalene' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250701e.gif', pin: '2H,6H-2,5-(epiethanylylidene)[1,3]dioxolo[4,5-b]oxepine' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250701f.gif', pin: '2H-2λ⁵-2,6-(epiethanylylidene)isophosphinoline' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250701g.gif', pin: '9H,13H-9,10-[3,4]epipyrroloacridine' },
]);
