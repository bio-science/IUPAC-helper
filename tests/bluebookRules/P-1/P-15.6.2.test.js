/**
 * P-15.6.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Limitations of conjunctive nomenclature
 * Conjunctive nomenclature is not used when:
 * (a) a double bond links the acyclic component to the ring system;
 * (b) a double bond or a heteroatom is present in the side chain;
 * (c) two identical characteristic groups are located on the side chain provided that the condition of
 * maximum number of principal characteristic groups is not violated;
 * (d) characteristic groups having higher priority for citation as principal group are directly
 * attached to the cyclic component;
 * (e) two or more characteristic groups of the same kind as the principal group are located on the
 * ring or ring system.
 * In the cases listed above, normal substitutive nomenclature must be used.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 102, P-15.6.2, last example. [modified 30 January 2019]
 *     For β,5-dihydroxybenzene-1,3-diethanol
 *     read β1,5-dihydroxybenzene-1,3-diethanol
 *     for [5-hydroxy-3-(2-hydroxyethyl)phenyl]ethane-1,2-diol
 *     read 1-[3-hydroxy-5-(2-hydroxyethyl)phenyl]ethane-1,2-diol
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-15.6.2', [
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1506o.gif', pin: 'cyclopentylideneacetic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1506p.gif', pin: 'phenylcarbamic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1506q.gif', pin: '2-cyclohexylhexanedioic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1506r.gif', pin: '2-(hydroxymethyl)benzene-1,4-diol' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1506s.gif', pin: '1-[3-hydroxy-5-(2-hydroxyethyl)phenyl]ethane-1,2-diol', otherNames: ['β¹,5-dihydroxybenzene-1,3-diethanol'] },
]);
