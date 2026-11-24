/**
 * P-34.2.1.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Nitrogenous substituent group names”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 419, P-34.2.1.3, examples 1 on this page. [corrected 26 September 2018]
 *     Replace the structure with:
 *   Page 419, P-34.2.1.3, examples 5 on this page. [corrected 26 September 2018]
 *     Replace the structure with:
 *   Page 419, P-34.2.1.3, examples 6 on this page. [corrected 10 October 2018]
 *     Replace the structure with:
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-34.2.1.3', [
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P340201c.gif', preferredPrefix: 'anilino' },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P340201d.gif', preferredPrefix: 'formazan-1-yl' },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P340201e.gif', preferredPrefix: 'formazan-5-yl' },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P340201f.gif', preferredPrefix: 'formazan-3-yl' },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P340201g.gif', preferredPrefix: 'formazan-1,5-diyl' },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P340201h.gif', preferredPrefix: 'formazan-3,5-diyl' },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P340201i.gif', preferredPrefix: 'formazan-1-yl-5-ylidene' },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P340201j.gif', preferredPrefix: 'formazan-3-yl-5-ylidene' },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P340201k.gif', preferredPrefix: 'formazan-1,3,5-triyl' },
  { formula: 'H2N-C(=NH)-NH—', preferredPrefix: 'carbamimidoylamino' },
  { formula: 'H2N-CO-CO-NH—', preferredPrefix: 'oxamoylamino' },
  { formula: '—HN-CO-NH—', preferredPrefix: 'oxalylbis(azanediyl)' },
  { formula: 'H2N-CO-NH—', preferredPrefix: 'carbamoylamino', notNames: ['ureido'] },
  { formula: '—HN-CO-NH—', preferredPrefix: 'carbonylbis(azanediyl)' },
]);
