/**
 * P-71.7
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “CHOICE OF PARENT RADICAL
 * When a choice of a parent radical is necessary, the following criteria are applied, in the order
 * given, until a decision is reached.
 * (a) Parent with the maximum number of radical centers of any kind in a single parent structure:
 * (b) Parent with the maximum number of ‘-yl’ radical centers, then -ylidene radical centers;
 * (c) Parent with the maximum number of radical centers at the skeletal atom first cited in the
 * seniority order of classes: N > P > As > Sb > Bi > Si > Ge > Sn > Pb > B > Al > Ga > In > Tl > O > S
 * > Se …
 * The seniority order for radicals is now the order of seniority of classes rather than the order of
 * skeletal replacement
 * (‘a’) prefixes as used in RC-81.3.3.2, ref. 3.
 * (d) Further choice, if necessary, is made by giving priority to the corresponding suffixes (see
 * Table 4.4) and by using the general seniority order of classes (see P-41) and parent structures (see
 * …
 * (1) maximum number of radical centers according to the order of suffixes (see P-33).
 * (2) rings are senior to chains”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1064, P-71.7 (b), example. [corrected 10 October 2018]
 *     Replace the structure with:
 *   Page 1065, P-71.7 (d) (1) example. [modified 21 April 2021]
 *     For (3-oxylbenzoyl)oxyl (PIN)
 *     read [3-(ylooxidanyl)benzoyl]oxyl (PIN)
 *     add {not 3-[(ylooxidanyl)carbonyl]phenoxyl; ylooxidanyl is senior to phenoxyl}
 *     replace the structure with:
 *   Page 1065, P-71.7 (d), example 2 on this page. [corrected 26 September 2018]
 *     Replace the structure with:
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-71.7', [
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P71700a.gif', pin: '1-(4-ylocyclohexyl)ethane-1,2-diyl', notNames: ['4-(1,2-diyloethyl)cyclohexyl'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P71700b.gif', pin: '2-[3-(1,1-diyloethyl)phenyl]ethyl', otherNames: ['{not 1-[3-(2-yloethyl)phenyl]ethylidene'] },
  { formula: '•CH2-C(CH3)2-O•', notNames: ['2-methyl-2-ylooxidanylpropyl'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P71700c.gif', name: '{not 3-[(ylooxidanyl)carbonyl]phenoxyl' },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P71700d.gif', pin: '3-(1-yloethyl)cyclopentyl', notNames: ['1-(3-ylocyclopentyl)ethyl'] },
]);
