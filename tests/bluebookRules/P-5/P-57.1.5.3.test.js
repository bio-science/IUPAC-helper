/**
 * P-57.1.5.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Retained prefixes recommended only for use in general nomenclature (P-29.6.2.3).
 * The following retained prefixes are recommended for only general nomenclature, with unlimited
 * substitution except for tolyl for which no substitution is allowed:”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 608, P-57.1.5.3, example 2. [corrected 19 September 2018]
 *     For anthacen-2-yl (preferred prefix)
 *     read anthracen-2-yl (preferred prefix)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-57.1.5.3', [
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P570105g.gif', preferredPrefix: 'adamantan-2-yl' },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P570105h.gif', name: '2-anthryl' },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P570105i.gif', name: '3-furyl' },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P570105j.gif', name: '7-isoquinolyl' },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P570105k.gif', name: '2-naphthyl' },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P570105l.gif', name: '9-phenanthryl' },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P570105m.gif', name: '2-piperidyl' },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P570105n.gif', name: '2-pyridyl' },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P570105o.gif', name: '2-quinolyl' },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P570105p.gif', name: '2-thienyl' },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P570105q.gif', name: 'o-tolyl (also m- and p-isomers' },
]);
