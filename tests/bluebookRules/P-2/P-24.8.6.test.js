/**
 * P-24.8.6
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Branched spiro ring systems with at least one polycyclic ring component
 * If two or more different terminal ring components are spirofused to a central ring component, the
 * alphabetically earliest is cited first with multiplicative prefixes, if appropriate, followed by the
 * central ring component and the remaining terminal ring components in alphabetical order. The λ
 * symbol is placed at the front of the complete name and is denoted by the lowest spiro locant; it is
 * preceded by indicated hydrogen, if needed.
 * Note: The double set of brackets in this name occurs because the spiro name requires them and
 * brackets are used to enclose locants belonging to ring component names (see P-16.5.2.2).
 * When there is a choice for locants, the lowest set of locants for all spiro atoms is selected, first
 * by comparing them as a set in increasing numerical order, and, if still undecided, in the order of …
 * Explanation: The locant set ‘1,1′,1′′′,2′,2′′,5′ ’ in (I) is lower than ‘1,1′′′,2′,2′′,4′,5′ ’ in
 * (II), or ‘1,1′,1′′′,2′′,3′,6′ ’ in (III).”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 202, P-24.8.6, example 1. [modified 8 May 2019]
 *     For 1′′λ⁶-dispiro[bis([1,3,2]-benzodioxathiole)-2,1′′:2′,1′′-thiopyran-4′′,1′′′-cyclopentane]
 *     (PIN)
 *     read 1′′λ⁶-dispiro[bis([1,3,2]benzodioxathiole)-2,1′′:2′,1′′-thiopyran-4′′,1′′′-cyclopentane]
 *     (PIN)
 *     replace structure with:
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-24.8.6', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P240806a.gif', pin: '1′′λ⁶-dispiro[bis([1,3,2]benzodioxathiole)-2,1′′:2′,1′′-thiopyran-4′′,1′′′-cyclopentane]' },
  { pin: 'incorrect 1′λ⁴-trispiro[cyclopentane-1,5′-[1,4]dithiane-2′,2′′-indene-1′,1′′-thiophene] (I)', otherNames: ['nor 1′λ⁴-trispiro[cyclopentane-1,3′-[1,4]dithiane-6′,2′′-indene-1′,1′′′-thiophene] (III)]'], notNames: ['4′λ⁴-trispiro[cyclopentane-1,2′-[1,4]dithiane-5′,2′′-indene-4′,1′′′-thiophene] (II)'] },
]);
