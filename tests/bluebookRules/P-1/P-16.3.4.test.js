/**
 * P-16.3.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Parentheses (round brackets) (see P-16.6.1) are used to enclose multiplied components that are:
 * (a) simple substituent prefixes having locants;
 * (b) simple substituent prefixes modified by ‘ene’ and ‘yne’ endings and that have locants;
 * (c) simple substituent prefixes and functionalized parent hydrides beginning with a multiplicative
 * prefix;
 * (d) simple substituent groups and functionalized parent hydrides beginning with ‘dec’ to distinguish
 * multiplied groups from acyclic components containing 12 to 19 atoms (see P-15.1.2)
 * (e) functionalized parent hydrides with locants;
 * (f) simple components containing brackets;”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 109, P-16.3.4 (d), example 3. [corrected 11 December 2019]
 *     For tetra(decanoic acid) (preferred suffix, defines four...
 *     read tetra(decanoic acid) (defines four...
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-16.3.4', [
  { preferredPrefix: 'di(propan-2-yl)' },
  { preferredPrefix: 'tetra(naphthalen-2-yl)' },
  { preferredPrefix: 'di(prop-1-en-2-yl)' },
  { preferredPrefix: 'di(dodecyl)' },
  { preferredPrefix: 'di(tridecyl)' },
  { pin: '8,8′-oxydi(spiro[4.5]decane)' },
  { preferredPrefix: 'di(bicyclo[3.2.1]octan-3-yl)' },
  { preferredPrefix: 'di([4-²H]benzoyl)' },
]);
