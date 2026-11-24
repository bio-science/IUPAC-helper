/**
 * P-68.1.1.3.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Heterocyclic parent hydrides containing Group 13 atom(s) belong to all the different classes of
 * rings and ring systems described in Chapter P-2. Preferred IUPAC names are selected according to the
 * general rules given for each class.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 968, P-68.1.1.3.2, example 8 on this page. [modified 11 November 2020]
 *     For boroxin
 *     read boroxin (see D-7.54, ref. 1)
 *     for (not 1,3,5-trioxa-2,4,6-cyclotriboroxane)
 *     read (not 1,3,5-trioxa-2,4,6-triboracyclohexane)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-68.1.1.3.2', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68113d.gif', name: '1,3,6,2-trioxaluminocane', notNames: ['1,3,6-trioxa-2-aluminacyclooctane'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68113e.gif', name: '1H-gallole', notNames: ['1-gallacyclopenta-2,4-diene'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68113f.gif', pin: '1,3,2-dioxaboretane', notNames: ['1,3-dioxa-2-boracyclobutane'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68113g.gif', pin: '1H-borepine', notNames: ['1H-1-boracyclohepta-2,4,6-triene'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68113h.gif', preselectedName: 'tetraboretane', otherNames: ['cyclotetraborane(4)'], notNames: ['1,2,3,4-tetraboracyclobutane'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68113i.gif', preselectedName: '1,3,2,4-dithiadiboretane', otherNames: ['cyclodiborathiane'], notNames: ['1,3-dithia-2,4-diboracyclobutane'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68113j.gif', name: '1,3,5,2,4,6-triazatriborinane', notNames: ['1,3,5-triaza-2,4,6-triboracyclohexane'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68113k.gif', preselectedName: '1,3,5,2,4,6-trioxatriborinane', otherNames: ['boroxin', 'cyclotriboroxane'], notNames: ['1,3,5-trioxa-2,4,6-triboracyclohexane'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68113l.gif', preselectedName: '1,3,5,2,4,6-trithiatriborinane', otherNames: ['borthiin', 'cyclotriborathiane'], notNames: ['1,3,5-trithia-2,4,6-triboracyclohexane'] },
]);
