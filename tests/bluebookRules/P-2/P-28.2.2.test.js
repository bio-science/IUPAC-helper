/**
 * P-28.2.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Ring assemblies with a double bond junction
 * When two cyclic systems are linked by a double bond, method (2) described in P-28.2.1 is the only
 * recommended method. Method (2) has also been used in which the presence of a double bond is
 * indicated by the Greek letter Δ and the point of attachment of the ring is given by superscript
 * locant numbers. This method is not continued in these recommendations; …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 341, P-28.2.2, example 2. [corrected 31 July 2019]
 *     For 2,2′-bi(bicyclo[2.2.1]heptan-2-ylidene) (PIN)
 *     read 2,2′-bi(bicyclo[2.2.1]heptanylidene) (PIN)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-28.2.2', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P280202a.gif', pin: '1,1′-bi(cyclopentylidene)', notNames: ['Δ¹,¹′-bicyclopentylidene'] },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P280202b.gif', pin: '2,2′-bi(bicyclo[2.2.1]heptanylidene)', notNames: ['Δ²,²′-bicyclo[2.2.1]heptanylidene'] },
]);
