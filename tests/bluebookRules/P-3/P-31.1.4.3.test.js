/**
 * P-31.1.4.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Bi- and polycyclic von Baeyer structures with both double and triple bonds. If both double and
 * triple bonds are present, the following criteria for numbering are considered, in order, until a
 * decision is reached:
 * (1) compound locants are kept to a minimum.
 * (2) lower locants are assigned to multiple bonds as a set;
 * (3) lower locants are assigned to double bonds;”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 382/383, P-31.1.4.3. [corrected 4 September 2024]
 *   Page 382, P-31.1.4.3 (2) formerly (1), example. [corrected 4 September 2024]
 *     For bicyclo[14.3.1]icosa-11,13,18-trien-2-yne (PIN)
 *     read (11E,13E)-bicyclo[14.3.1]icosa-11,13,18-trien-2-yne (PIN)
 *   Page 382, P-31.1.4.3 (3) formerly (2), example. [corrected 4 September 2024]
 *     For bicyclo[11.3.1]heptadeca-2-en-11-yne (PIN)
 *     read (2Z)-bicyclo[11.3.1]heptadeca-2-en-11-yne (PIN)
 *   Page 383, P-31.1.4.3 (1) formerly (3), example. [corrected 4 September 2024]
 *     For bicyclo[8.3.1]tetradeca-4,6,10-trien-2-yne (PIN)
 *     read (4Z,6E)-bicyclo[8.3.1]tetradeca-4,6,10-trien-2-yne (PIN)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-31.1.4.3', [
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P310104r.gif', notNames: ['bicyclo[8.3.1]tetradeca-1(13),4,6-trien-8-yne'] },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P310104p.gif', notNames: ['bicyclo[14.3.1]icosa-3,5,17-trien-14-yne'] },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P310104q.gif', notNames: ['bicyclo[11.3.1]heptadec-11-en-2-yne'] },
]);
