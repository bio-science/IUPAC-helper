/**
 * P-25.3.6.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Two or more components that are identical and both fused to a parent component are indicated by the
 * use of multiplying prefixes (‘di’, ‘tri’, etc. or ‘bis’, ‘tris’, etc.). If a complete set of locants
 * is used for first-order attached components fused to the parent component, they are cited together
 * separated by a colon. If abbreviated sets of locants are used, the letters are separated by a comma.
 * …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-25.3.6.1', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250306a.gif', pin: 'difuro[3,2-b:3′,4′-e]pyridine' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250306b.gif', pin: 'dibenzo[c,e]oxepine' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250306c.gif', pin: '9H-dibenzo[g,p][1,3,6,9,12,15,18]heptaoxacycloicosine' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250306d.gif', pin: 'dibenzo[4,5:6,7]cycloocta[1,2-c]furan' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250306e.gif', pin: 'dithieno[2′,3′:3,4;2′′,3′′:6,7]cyclohepta[1,2-d]imidazole' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250306f.gif', pin: 'cyclopenta[b]dibenzo[3,4:6,7]cyclohepta[1,2-e]pyridine' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250306g.gif', pin: '2H,9H-bis([1,3]benzodioxolo)[4,5,6-cd:5′,6′-f]indole' },
]);
