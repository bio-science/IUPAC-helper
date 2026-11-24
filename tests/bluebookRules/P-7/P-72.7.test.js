/**
 * P-72.7
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “CHOICE OF AN ANIONIC PARENT STRUCTURE
 * When necessary, a parent anionic structure must be chosen by applying the following criteria in
 * order until a definitive choice is achieved:
 * (a) parent with the maximum number of anionic centers, including anionic suffixes;
 * (b) parent with the maximum number of ‘uide’ and ‘ide’ anionic centers;
 * (c) parent with the maximum number of ‘uide’ centers;
 * (d) parent with the maximum number of senior anionic centers first cited in the seniority order of
 * classes: N > P > As > Sb > Bi > Si > Ge > Sn > Pb > B > Al > Ga > In > Tl > O > S > Se > Te > C (see
 * …
 * The seniority order for anions is now the order of seniority of classes rather than the order of
 * skeletal replacement (‘a’) prefixes as used in RC-83.4.7.4, ref. 3.
 * (e) further choice, if necessary, is made by giving priority to corresponding suffixes (see Table
 * 4.4) and by using the general seniority order of classes (see P-41) and parent structures (see
 * P-44).”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1080, P-72.7 (b) example. [modified 21 April 2021]
 *     Replace example with 2-(2-carboxylatoethyl)-1,1,5,5-tetracyanopentane-1,5-diide (PIN)
 *     [not 1,1-dicyano-4-(dicyanomethanidyl)heptan-1-id-7-oate; diide is senior to idoate]
 *     replace structure with:
 *   Page 1080, P-72.7 (c), example. [corrected 7 November 2018]
 *     For (2-phosphanidylethyl))arsanuide
 *     read (2-phosphanidylethyl)arsanuide
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-72.7', [
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P72700a.gif', pin: '1-(borinan-1-uid-4-yl)ethane-1,2-bis(olate)', notNames: ['4-(1,2-dioxidoethyl)borinan-1-uide'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P72700b.gif', name: '2-(2-carboxylatoethyl)-1,1,5,5-tetracyanopentane-1,5-diide', notNames: ['1,1-dicyano-4-(dicyanomethanidyl)heptan-1-id-7-oate'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P72700c.gif', notNames: ['(2-arsanuidylethyl)phosphanide'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P72700d.gif', notNames: ['(2-phosphanidylethyl)silanide'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P72700e.gif', pin: '2-(carboxylatomethyl)benzoate' },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P72700f.gif', pin: '3-oxidonaphthalene-2-carboxylate' },
]);
