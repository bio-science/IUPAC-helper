/**
 * P-102.5.3.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Systematic carbohydrate names
 * The systematic carbohydrate name consists of the prefix ‘deoxy’, preceded by the appropriate locant
 * and followed by the stem name with such configurational prefixes as necessary to describe the
 * chirality centers present in the deoxy compound. Configurational prefixes are cited in order
 * commencing at the end furthest from C-1. The use of the prefix ‘deoxy’ with retained names of
 * aldoses and ketoses is not recommended.
 * When the –CH2– group divides the chirality centers into two sets, it is ignored for the purpose of
 * assigning the configurational prefix; …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-102.5.3.4', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102534a.gif', name: '2-deoxy-D-erythro-pentofuranose' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102534b.gif', name: '4-deoxy-β-D-xylo-hexopyranose', notNames: ['4-deoxy-β-D-galactopyranose'] },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102534c.gif', name: '2-deoxy-D-ribo-hexose', notNames: ['2-deoxy-D-allose'] },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102534d.gif', name: '2,6-dideoxy-α-L-arabino-hexopyranose' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102534e.gif', name: '1-deoxy-L-glycero-D-altro-oct-2-ulose' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102534f.gif', name: '3,6,10-trideoxy-L-threo-L-talo-decose' },
]);
