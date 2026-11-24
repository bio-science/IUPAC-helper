/**
 * P-16.7.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “There is no elision of terminal vowels in the following cases:
 * (a) in conjunctive names;
 * (b) from replacement or numerical multiplicative prefixes in skeletal replacement (‘a’)
 * nomenclature;
 * (c) from multiplicative prefixes in homogeneous acyclic parent hydrides other than hydrocarbons and
 * boron hydrides;
 * (d) from numerical multiplicative prefixes in multiplicative parent compounds;
 * (e) from numerical multiplicative prefixes before substituent prefix names;
 * (f) from component prefixes of compound (see P-29.1.2) and complex (see P-29.1.3) prefixes before
 * following prefixes beginning with a vowel;
 * (g) from prefixes designating attached components in fusion nomenclature; …
 * This recommendation is in accordance with P-25.3.1.3 and Rule R-2.4.1.1 of the 1993 Guide (ref. 2)
 * that abrogated the elision recommended by Rule A-21.4 in the 1979 edition (ref. 1).”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 123, P-16.7.2 (d), example 2. [modified 31 July 2019]
 *     For N,N′-ethane-1,2-diylbis[N-(carboxymethyl)glycine]
 *     read N,N′-(ethane-1,2-diyl)bis[N-(carboxymethyl)glycine]
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-16.7.2', [
  { preferredPrefix: '2,4,6,8-tetrasilaundecan-11-yl' },
  { name: 'nonaazane (P-21.2.2)', notNames: ['nonazane'] },
  { pin: '5,6,7,8-tetraiodo-1,2,3,4-tetrahydroanthracene-9-carboxylic acid' },
  { preselectedName: 'chloroamino' },
  { preselectedName: 'aminooxy' },
  { pin: 'cyclopropa[de]anthracene' },
  { pin: 'naphtho[1,2-a]azulene' },
]);
