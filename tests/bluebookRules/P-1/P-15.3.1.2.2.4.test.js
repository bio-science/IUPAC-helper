/**
 * P-15.3.1.2.2.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Numbering of the components of a multipart di- or trivalent multiplicative substituent group, when
 * necessary, is achieved by attributing lowest locants to the atoms that are at the end of the
 * component nearest to the multiplied parent structure, except where the component has a fixed
 * numbering. The locants attached to the multiplied parent structure are cited last. When there is no
 * choice the locants are cited in increasing numerical order.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 75, P-15.3.1.2.2.4, example 2 on this page. [modified 31 July 2019]
 *     For oxybis(1-chloroethane-2,1-diylphosphanylylideneethan-1-yl-2-ylidene)
 *     read oxybis[(1-chloroethane-2,1-diyl)phosphanylylideneethan-1-yl-2-ylidene]
 *     Replace the structure with:
 *   Page 75, P-15.3.1.2.2.4, example 3 on this page. [corrected 31 July 2019]
 *     Replace structure with:
 *   Page 75, P-15.3.1.2.2.4, example 4 on this page. [modified 24 March 2021]
 *     For oxydipropan-1-yl-3-ylidene (preferred prefix)
 *     read oxydi(propan-3-yl-1-ylidene) (preferred prefix)
 *     replace structure with:
 *   Page 75, P-15.3.1.2.2.4, example 1 on this page (example 4 of section). [corrected 9 April 2025]
 *     For methylenebis(1,3,5-triazine-6,2,4-triyl) (preferred prefix)
 *     read methylenedi(1,3,5-triazine-6,2,4-triyl) (preferred prefix)
 *   Page 75, P-15.3.1.2.2.4, example 5 on this page. [modified 31 July 2019]
 *     For hydrazinediylidenedipropan-1-yl-3-ylidene (preferred prefix;
 *     read hydrazinediylidenedi(propan-1-yl-3-ylidene) (preferred prefix;
 *     replace structure with:
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-15.3.1.2.2.4', [
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1503p.gif', preferredPrefix: 'oxybis(1-chloroethane-2,1-diyl)' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1503q.gif', preferredPrefix: 'oxybis(2-chloroethane-2,1-diyl)' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1503r.gif', preferredPrefix: 'peroxydi(4,1-phenylene)', notNames: ['dioxydi(4,1-phenylene)'] },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1503s.gif', preferredPrefix: 'methylenedi(1,3,5-triazine-6,2,4-triyl)' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1503t.gif', name: 'oxybis[(1-chloroethane-2,1-diyl)phosphanylylideneethan-1-yl-2-ylidene]' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1503u.gif', preferredPrefix: 'ethane-1,2-diylbis(oxyethane-2,1-diyl)' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1503v.gif', preferredPrefix: 'oxydi(propan-3-yl-1-ylidene)' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1503w.gif', preferredPrefix: 'hydrazinediylidenedi(propan-1-yl-3-ylidene)' },
]);
