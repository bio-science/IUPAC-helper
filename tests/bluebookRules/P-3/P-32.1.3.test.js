/**
 * P-32.1.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Substituent groups derived from parent hydrides having a fixed numbering
 * Lowest possible locants are assigned first to free valence(s), then to unsaturated sites, in
 * accordance with the fixed numbering of the parent hydride.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 402, P-32.1.3, example 1. [corrected 11 November 2020]
 *     Replace the structure with:
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-32.1.3', [
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P320103a.gif', preferredPrefix: 'bicyclo[2.2.2]oct-5-en-2-yl' },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P320103b.gif', preferredPrefix: 'spiro[4.5]deca-1,9-dien-6-ylidene' },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P320103c.gif', preferredPrefix: '2,5,8,11-tetraoxatridec-12-en-13-yl', notNames: ['3,6,9,12-tetraoxatridec-1-en-1-yl'] },
]);
