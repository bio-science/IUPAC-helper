/**
 * P-16.9.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Primes (′), double primes (′′), triple primes (′′′), etc., with superscripted numerical locants
 * indicating the position of the suffix on the parent structure, are used to differentiate the
 * nitrogen atoms in cases other than those listed in P-16.9.1 and P-16.9.2, above, especially when
 * symmetry conditions are not fulfilled.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 128, P-16.9.3, example 1 on this page. [corrected 19 September 2018]
 *     For N¹, N¹, N′³-triethyl-N′¹, N³, N³-trimethylnapthalene-1,3-dicarboximidamide (PIN,
 *     P-66.4.1.4.2)
 *     read N¹,N¹,N′³-triethyl-N′¹,N³,N³-trimethylnaphthalene-1,3-dicarboximidamide (PIN, P-66.4.1.4.2)
 *     [deleted spaces from name]
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-16.9.3', [
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1609l.gif', pin: 'N³-ethyl-N′³-methylhexane-3,3-diamine', otherNames: ['N-ethyl-N′-methylhexane-3,3-diamine'] },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1609m.gif', pin: 'N′′¹-ethyl-N¹,N¹-dimethylcyclohexane-1,1-dicarboximidamide', otherNames: ['N′′-ethyl-N,N-dimethylcyclohexane-1,1-dicarboximidamide'] },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1609n.gif', pin: 'ethanedihydrazonamide' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1609o.gif', pin: 'ethanediimidohydrazide' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1609p.gif', pin: 'ethanedihydrazonohydrazide' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1609q.gif', pin: 'N³-ethyl-N¹,N′³-dimethylhexane-1,3,3,6-tetramine', otherNames: ['N³-ethyl-N¹,N′³-dimethyl(hexane-1,3,3,6-tetrayltetraamine)'] },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1609r.gif', pin: 'N¹,N¹′-methylenedi(pentane-1,3,4-triamine)' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1609s.gif', pin: 'N′¹-ethyl-N¹,N¹,N³-trimethylpropane-1,1,3-tricarboxamide' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1609t.gif', pin: 'N¹,N¹,N′³-triethyl-N′¹,N³,N³-trimethylnaphthalene-1,3-dicarboximidamide' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1609u.gif', pin: 'benzene-1,2-dicarbohydrazide' },
]);
