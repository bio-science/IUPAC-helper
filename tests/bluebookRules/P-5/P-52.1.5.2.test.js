/**
 * P-52.1.5.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Heterogeneous heteromonocyclic parent hydrides consisting of alternating heteroatoms
 * Preselected names for heterogeneous heteromonocyclic parent hydrides with ten or fewer ring members
 * and consisting of alternating heteroatoms, i.e., [ab]n, are Hantzsch-Widman names (see P-22.2.2).
 * Skeletal replacement (‘a’) names (see P-22.2.3) are preselected names for heterogeneous
 * monoheterocyclic parent hydrides with alternating heteroatoms with more than ten ring members.
 * Alternative names for use only in general nomenclature are those formed by using the prefix ‘cyclo’
 * (see P-52.1).”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 574, P-52.1.5.2, line 2 on this page. [corrected 10 October 2018]
 *     For ...alternating heteroatoms, i.e., [aba]n, are...
 *     read ...alternating heteroatoms, i.e., [ab]n, are...
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-52.1.5.2', [
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P520105d.gif', preselectedName: '1,3,5,2,4,6-triphosphatriborinane', otherNames: ['cyclotriboraphosphane'] },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P520105e.gif', preselectedName: '1,3,5,7,9,11,13-heptaoxa-2,4,6,8,10,12,14-heptasilacyclotetradecane', otherNames: ['cycloheptasiloxane'] },
]);
