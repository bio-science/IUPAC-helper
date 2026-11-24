/**
 * P-66.1.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “‘Hidden’ amides
 * An N-acyl group attached to a nitrogen atom of a heterocyclic system has been called a ‘hidden
 * amide’, i.e., an amide that cannot be named as such by accepted substitutive principles. The
 * traditional way to name such compounds by using acyl groups as substituents on the nitrogen atom of
 * the heterocyclic system is allowed but only in general nomenclature. Such compounds are now
 * considered as pseudoketones (see P-64.3) and preferred IUPAC names are constructed accordingly.
 * An N-acyl group attached to a nitrogen atom of a heterocyclic system is now preferably named as a
 * pseudoketone (see P-64.1.2.1, P-64.3) and not as an acyl substituent on the nitrogen as in previous
 * …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.1.3', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66130a.gif', pin: '1-(piperidin-1-yl)ethan-1-one', otherNames: ['1-acetylpiperidine'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66130b.gif', pin: '1-(3,4-dihydroquinolin-1(2H)-yl)propan-1-one', otherNames: ['1-propanoyl-1,2,3,4-tetrahydroquinoline', '1-propionyl-1,2,3,4-tetrahydroquinoline'] },
]);
