/**
 * P-52.2.4.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Heteromonocycles as components in fusion names
 * Heteromonocycles having more than ten ring members and the maximum number of noncumulative double
 * bonds whose names are denoted by the ‘ine’ ending described in P-22.2.4 are used as parent
 * components as well as attached components in preferred IUPAC fusion names. ‘Annulene’ names modified
 * by skeletal replacement (‘a’) nomenclature (see P-52.2.3) are not recommended for generating names
 * of heterocyclic fusion compounds.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 579, P-52.2.4.2, example 1. [corrected 20 February 2019]
 *     For dibenzo[g, p] [1,3,6,9,12,15,18]heptaoxacycloicosine (PIN; see P-25.3.6.1)
 *     read 9H-dibenzo[g, p] [1,3,6,9,12,15,18]heptaoxacycloicosine (PIN; see P-25.3.6.1)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-52.2.4.2', [
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P520204c.gif', pin: '9H-dibenzo[g,p][1,3,6,9,12,15,18]heptaoxacycloicosine' },
]);
