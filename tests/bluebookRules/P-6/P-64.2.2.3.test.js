/**
 * P-64.2.2.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Seniority order for numbering
 * When there is a choice for numbering, the starting point and the direction of numbering of a
 * compound are chosen so as to give lowest locants to the structural features (if present) listed in
 * P-14.4. Rule P-52.2.8 is applied when a choice for the principal chain or senior ring system is
 * required.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 730, P-64.2.2.3, example 8. [corrected 4 September 2024]
 *     For 1,3,6,8(2,5)-tetrafuranacyclododecaphan-11-en-2-one (PIN)
 *     read (11Z)-1,4,7,10(2,5)-tetrafuranacyclododecaphan-11-en-2-one (PIN)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-64.2.2.3', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640202ad.gif', pin: '2,3-dihydro-1H-inden-1-one', otherNames: ['indan-1-one'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640202ae.gif', pin: '1-selenacyclotridecan-3-one' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640202af.gif', pin: '2,4,6,8-tetrasilaundecan-10-one' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640202ag.gif', pin: 'but-3-en-2-one' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640202ah.gif', pin: 'pent-3-yn-2-one' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640202ai.gif', pin: 'pent-1-en-4-yn-3-one' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640202aj.gif', pin: '3-methylidenehexan-2-one' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640202al.gif', pin: '3,4,4a,9,9a,10-hexahydroanthracene-1,2-dione', otherNames: ['3,4,4a,9,9a,10-hexahydro-1,2-anthraquinone', '1,2,3,4,4a,9,9a,10-octahydroanthracene-1,2-dione'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640202am.gif', pin: '3,4-dihydronaphthalen-1(2H)-one', otherNames: ['1,2,3,4-tetrahydronaphthalen-1-one'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640202an.gif', pin: '4-oxo-1,2,3,4-tetrahydronaphthalene-1-carboxylic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640202ao.gif', pin: '5-oxo-1,3,4,5-tetrahydronaphthalene-4a(2H)-carboxylic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640202ap.gif', pin: '5-oxo-2,5-dihydrofuran-2-carboxylic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640202aq.gif', pin: '5-oxo-4,5-dihydrofuran-2-carboxylic acid' },
]);
