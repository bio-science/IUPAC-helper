/**
 * P-93.5.1.4.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Specification by stereodescriptors ‘E’ and ‘Z’
 * The stereodescriptors ‘E’ and ‘Z’ are used to specify the configuration of an exo-cyclic double
 * bond.
 * (1) When one double bond is present, two methods are used to construct the names
 * (a) the double bond is considered as an integral part of the parent structure; …
 * (b) the double bond is considered as part of the substituent group of the ‘ylidene’ type. The
 * stereodescriptor is cited at the front of the name of the substituent group; …
 * Method (a) generates preferred IUPAC names.
 * (2) When two double bonds are attached to the same ring, the two methods described in (1) are
 * applied. Each double bond is specified by method (a) in preferred IUPAC names. …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1249, P-93.5.1.4.2.1 (1) (b), line 3. [corrected 2 September 2020]
 *     For ...substituent group; without a locant; the name of...
 *     read ...substituent group; the name of...
 *   Page 1249, P-93.5.1.4.2.1 (1), example 1. [modified 2 September 2020]
 *     For 1-[(1E)-butan-2-ylidene] 1H-indene
 *     read 1-[(2E)-butan-2-ylidene]-1H-indene
 *   Page 1250, P-93.5.1.4.2.1 (2), Example 2. [corrected 10 April 2019]
 *     For 1,4-di[(1Z)-ethylidene]cyclohexane
 *     read 1,4-di[(Z)-ethylidene]cyclohexane
 *   Page 1251, P-93.5.1.4.2.1, example 3, simplified digraph for 5 and 8. [corrected 2 January 2019]
 *     Replace structure with:
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-93.5.1.4.2.1', [
  // Drawn in the Blue Book.
  { drawing: 'P9gif/P93514j.gif', name: '1-chloro-2-[(E)-ethylidene]-2H-indene' },
  // Drawn in the Blue Book.
  { drawing: 'P9gif/P93514k.gif', name: '1-[(Z)-ethylidene]-3-[(E)-ethylidene]cyclopentane' },
  // Drawn in the Blue Book.
  { drawing: 'P9gif/P93514l.gif', name: 'cis-1,4-diethylidenecyclohexane' },
  // Drawn in the Blue Book.
  { drawing: 'P9gif/P93514m.gif', name: 'trans-3,3′-diethylidene-1,1′-bi(cyclobutylidene)' },
]);
