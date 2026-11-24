/**
 * P-15.6.1.5
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “When different side chains are attached to a cyclic component:
 * (a) the chain that contains the principal characteristic group is chosen for naming by the
 * conjunctive method; or
 * (b) if there is more than one side chain containing the principal characteristic group, the
 * conjunctive name that expresses the greater number of the principal characteristic group is chosen.
 * …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-15.6.1.5', [
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1506l.gif', name: '2-(3-hydroxypropyl)quinoline-3-acetic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1506m.gif', pin: '3-[2,3-bis(carboxymethyl)naphthalen-1-yl]propanoic acid', otherNames: ['1-(2-carboxyethyl)naphthalene-2,3-diacetic acid'] },
]);
