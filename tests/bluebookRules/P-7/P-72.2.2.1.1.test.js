/**
 * P-72.2.2.1.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “‘Added indicated hydrogen’ for anions of mancude ring systems
 * An anionic center at a position in a mancude parent hydride where there is an insufficient number of
 * hydrogen atoms to apply directly recommendations for the use of ‘ide’ given in P-72.2.2.1 is derived
 * formally from a dihydro derivative of the cyclic parent hydride. Such an anion can also be described
 * by applying the principle of ‘added indicated hydrogen’ (see P-14.7). …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1068, P-72.2.2.1.1, example 1. [corrected 19 September 2018]
 *     For 1,2-dihydropyridine-1-ide
 *     read 1,2-dihydropyridin-1-ide
 *   Page 1068, P-72.2.2.1.1, example 2. [corrected 19 September 2018]
 *     For 1-methyl-1,2-dihydro-1-benzoazocine-2,2-diide
 *     read 1-methyl-1,2-dihydro-1-benzazocine-2,2-diide
 *   Page 1068, P-72.2.2.1.1, example 4. [corrected 3 October 2018]
 *     For (C60-Ih)[5,6]fulleren-1(9H)-ide (PIN)
 *     read (C60-Ih)[5,6]fulleren-1(9H)-ide (PIN)
 *     for 1,9-dihydro(C60-Ih)[5,6]fulleren-1-ide
 *     read 1,9-dihydro(C60-Ih)[5,6]fulleren-1-ide
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-72.2.2.1.1', [
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P72221c.gif', pin: 'pyridin-1(2H)-ide', otherNames: ['1,2-dihydropyridine-1-ide'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P72221d.gif', pin: '1-methyl-1-benzazocine-2,2(1H)-diide', otherNames: ['1-methyl-1,2-dihydro-1-benzazocine-2,2-diide'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P72221e.gif', pin: '1,4-dihydronaphthalene-1,4-diide' },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P72221f.gif', name: '1,9-dihydro(C60-Ih)[5,6]fulleren-1-ide' },
]);
