/**
 * P-52.2.4.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Five-membered ring requirement
 * Fusion nomenclature gives preferred IUPAC names only to compounds having at least two rings of at
 * least five or more members. This requirement is not necessarily applied in general nomenclature, in
 * which names such as cyclopropabenzene and cyclobutabenzene can be used. When fusion names are not
 * allowed, unsaturated von Baeyer ring system names are preferred IUPAC names (see P-31.1.4.2).
 * This is a change from the recommendation in the 1998 publication on fused ring nomenclature (see
 * FR-0, ref. 4) and the 1993 Guide (ref. …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 578, P-52.2.4.1, lines 1/2. [corrected 29 January 2020]
 *     For ...having at least two five-membered rings. This...
 *     read ...having at least two rings of at least five or more members. This...
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-52.2.4.1', [
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P520204a.gif', pin: 'bicyclo[4.1.0]hepta-1,3,5-triene', otherNames: ['1H-cyclopropabenzene'] },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P520204b.gif', pin: 'bicyclo[4.2.0]octa-1,3,5,7-tetraene', otherNames: ['cyclobutabenzene'] },
]);
