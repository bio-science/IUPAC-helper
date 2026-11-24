/**
 * P-16.3.6
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The prefixes ‘bis’, ‘tris’, ‘tetrakis’, etc. are also used to avoid ambiguity:
 * (a) before a mononuclear subset of a polynyclear acyclic structure;
 * Note: And similarly for the analogous Se, Te, N, P, As, Sb, Bi, Si, Ge, Sn, Pb, B, Al, Ga, In, and
 * Tl groups.
 * (b) before the retained names of mononuclear divalent substituent groups, such as ‘oxy’, ‘thio’, and
 * ‘methylene’ to distinguish multiplied groups from chains (see P-15.3.1.2.2.1);
 * (c) before skeletal replacement (‘a’) prefixes, such as ‘aza’, ‘oxa’, etc. …
 * (d) before attached components in fusion nomenclature to distinguish a multiplicative prefix from
 * multiplied attached fusion components;
 * (e) before names beginning with a multiplicative prefix ‘di’.”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 112, P-16.3.6(b), example 1 on this page. [corrected 1 May 2019]
 *     For bis(azo) (preferred prefix, defines two...
 *     read bis(azo) (defines two...
 *     for 3,3′-[methylenebis(azo)]dipropanoic acid (PIN)
 *     read 3,3′-[methylenebis(azo)]dipropanoic acid
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-16.3.6', [
  { preferredPrefix: 'bis(sulfanyl)' },
  { preferredPrefix: 'tris(sulfanyl)' },
  { preferredPrefix: 'bis(λ⁴-sulfanyl)' },
  { preselectedName: 'bis(phosphonic acid)' },
  { preselectedName: 'bis(hydrogen sulfate)' },
  { preselectedName: 'tris(iodide)' },
  { preselectedName: 'bis(phosphate)' },
  { suffix: 'bis(diazonium)', notNames: ['didiazonium'] },
  { preselectedPrefix: 'bis(diazenyl)', notNames: ['didiazenyl'] },
  { preselectedPrefix: 'bis(disulfanyl)', notNames: ['didisulfanyl'] },
  { preselectedName: 'tris(dihydrogen phosphate)', notNames: ['tridihydrogen phosphate'] },
]);
