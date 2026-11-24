/**
 * P-25.4.3.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Divalent symmetric bridges
 * The locants of the positions on the fused ring system to which divalent symmetric bridges (are)
 * attached are cited in numerical order in front of each bridge name.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 273, P-25.4.3.2.1, Example 2. [corrected 30 January 2019]
 *     For 1,4:6,9-dimethanodibenzo[b,e][1,4]dioxin
 *     read 1,4:6,9-dimethanodibenzo[b,e][1,4]dioxine
 *   Page 273, P-25.4.3.2.1, example 3. [modified 27 May 2020]
 *     For 6,9-epoxy-1,4-methanobenzocyclooctene (PIN)
 *     read 6,9-epoxy-1,4-methanobenzo[8]annulene (PIN)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-25.4.3.2.1', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250403a.gif', pin: '9,10-ethanoanthracene' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250403b.gif', pin: '1,4:6,9-dimethanooxanthrene', otherNames: ['1,4:6,9-dimethanodibenzo[b,e][1,4]dioxine'] },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250403c.gif', pin: '6,9-epoxy-1,4-methanobenzo[8]annulene' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250403d.gif', pin: '1H-1,4-ethanothioxanthene' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250403e.gif', pin: '5,12:6,11-di[1,2]benzenodibenzo[a,e][8]annulene' },
]);
