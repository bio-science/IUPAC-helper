/**
 * P-104.2.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Locants are assigned to hydroxy groups in cyclitols, and thus the direction of numbering is
 * described, with reference to the steric relations and nature of the substituents attached to the
 * ring. The substituents lying above the plane of the ring constitute a set, and those lying below
 * another set. Lowest locants are related to one set of the substituents according to the following
 * criteria, which are applied successively until a decision is reached:
 * (a) to the substituents considered as a numerical series, without regard to configuration;
 * (b) if one set of the substituents is more numerous than the other, to the more numerous;
 * (c) if the sets are equally numerous and one of them can be denoted by lower numbers, to that set;
 * (d) to substituents other than unmodified hydroxy groups;
 * (e) to the substituent first cited in alphanumerical order;
 * (f) to those designations that lead to an ‘L’ rather than a ‘D’ configuration, as determined by the
 * method of P-104.2.1 above (applies to meso compounds only).
 * …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-104.2.3', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P104230a.gif', name: '1L-1,2/3,5-cyclohexanetetrol' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P104230b.gif', name: '1L-1,2/3,4-cyclohexanetetrol' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P104230c.gif', name: '1L-5-O-ethyl-1,2-di-O-methyl-neo-inositol' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P104230d.gif', name: '1L-1-O-ethyl-4-O-methyl-muco-inositol' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P104230e.gif', name: '2-O-methyl-myo-inositol' },
]);
