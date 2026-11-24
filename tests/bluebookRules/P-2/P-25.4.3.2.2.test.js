/**
 * P-25.4.3.2.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Polyvalent and composite bridges
 * Locants of the positions on the fused ring system to which polyvalent or composite bridges are
 * attached are cited in the order expressed or implied by the name of the bridge. Methods of assigning
 * locants for the free valences of bridges are given in section P-25.4.2. In the absence of specific
 * locants, a single free valence (yl) is assigned a lower locant than a double free valence (ylidene).
 * If there is a choice, locants are cited in numerical order. …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 274, P-25.4.3.2.2, example 1. [modified 11 December 2019]
 *     For 7H-3,5-(epoxymethano)furo[2,3-c]pyran (PIN)
 *     read 2H-3,5-(epoxymethano)furo[3,4-b]pyran (PIN) (I)
 *     add (not 7H-3,5-(epoxymethano)furo[2,3-c]pyran) (II) [preferred ring system, see P-25.4.3.4.2
 *     (d)]
 *     replace the structure with:
 *   Page 274, P-25.4.3.2.2, example 2. [modified 11 December 2019]
 *     For 7H-5,3-(epoxymethano)furo[2,3-c]pyran (PIN)
 *     read 7H-5,3-(epoxymethano)furo[2,3-c]pyran (PIN) (I)
 *     add (not 4H-6,1-(epoxymethano)furo[3,4-c]pyran) (II)
 *     [preferred ring system, see P-25.4.3.4.2 (d)]
 *     replace the structure with:
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-25.4.3.2.2', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250403f.gif', pin: '2H-3,5-(epoxymethano)furo[3,4-b]pyran (I)', notNames: ['7H-3,5-(epoxymethano)furo[2,3-c]pyran) (II'] },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250403g.gif', pin: '7H-5,3-(epoxymethano)furo[2,3-c]pyran (I)', notNames: ['4H-6,1-(epoxymethano)furo[3,4-c]pyran (II) [preferred ring system', 'see P-25.4.3.4.2 (d)'] },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250403h.gif', pin: '10,5-[2,3]furanobenzo[g]quinoline' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250403i.gif', pin: '1,4:8,5-bis(epoxymethano)anthracene' },
]);
