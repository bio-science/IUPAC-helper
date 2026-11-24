/**
 * P-32.1.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Substituents derived from unsaturated acyclic compounds are named in two ways.
 * (1) As suffixes have priority for low locants, the position(s) of multiple bonds must be selected in
 * accord with low locants assigned to free valences. …
 * (2) Names can also be formed by substituting simple substituents into larger ones, in a manner
 * similar to saturated prefixes described in Section P-29.
 * A major change in the naming of substituents derived from unsaturated acyclic compounds is adopted
 * in these recommendations. …
 * For the method used in the formation of preferred IUPAC names, see P-57.1.1.1.”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 401, P-32.1.1, line 1. [corrected 8.11.2023]
 *     For ...formation of preferred IUPAC names, see P-57.1.4.1.
 *     read ...formation of preferred IUPAC names, see P-57.1.1.1.
 *   Page 401, P-32.1.1, example 5. [corrected 6 February 2019]
 *     For (2) 1-methyleth-1-en-1-yl
 *     read (2) 1-methylethen-1-yl
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-32.1.1', [
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P320101a.gif', preferredPrefix: 'but-3-en-1-yl' },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P320101b.gif', preferredPrefix: 'prop-2-en-1-yl' },
  { preferredPrefix: 'but-3-en-2-yl' },
  { preferredPrefix: 'prop-1-en-2-yl' },
  { preferredPrefix: 'non-1-en-4-yl' },
  { name: '1-(prop-2-en-1-yl)hexyl', notNames: ['1-pentylbut-3-en-1-yl'] },
  { preferredPrefix: 'hept-2-en-4-yl' },
  { preferredPrefix: 'hepta-1,6-diene-3,5-diyl' },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P320101m.gif', preferredPrefix: 'but-3-yn-1-yl' },
  { preferredPrefix: 'oct-1-en-6-yn-4-ylidene' },
  { preferredPrefix: 'hept-1-en-6-yn-4-yl' },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P320101r.gif', preselectedPrefix: 'diazenyl' },
  { formula: '–N=N–', preselectedPrefix: 'diazenediyl' },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P320101s.gif', preselectedPrefix: 'triaz-2-en-1-yl' },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P320101t.gif', preselectedPrefix: 'distibenyl' },
]);
