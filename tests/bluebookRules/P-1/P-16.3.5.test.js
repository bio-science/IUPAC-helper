/**
 * P-16.3.5
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The numerical prefixes ‘bis’, ‘tris’, ‘tetrakis’, etc. are used to indicate a multiplicity of:
 * (a) compound or complex (i.e. substituted) prefixes (see P-35.3 and P-35.4);
 * (b) ‘thioic acid’ and ‘dithioic acid’ suffixes, and their Se and Te analogues, as exceptions to
 * suffixes described in P-16.3.3 and P-16.3.4;
 * (c) before suffixes that are composed of two or more cumulative suffixes;
 * (d) substituted functional modifiers;
 * (e) substituted parent compounds in multiplicative nomenclature.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 110, P-16.3.5 (b), example 1. [modified 11 December 2019]
 *     For bis(thioic) acid [preferred suffix, describes two – C(O/S)H suffixes, see P-65.1.5.1;
 *     whereas dithioic acid describes –CSSH suffix, see P-65.1.5.1]
 *     read bis(thioic acid) (multiple preferred suffix, describes two –C(O/S)H suffixes, see
 *     P-65.1.5.1) [delete space in structure]
 *   Page 110, P-16.3.5 (b), example 2. [modified 11 December 2019]
 *     For bis(dithioic) acid (preselected suffix, see P-65.1.5.1) not didithioic acid
 *     read bis(dithioic acid) (multiple preferred suffix, describes two –CSSH suffixes, see
 *     P-65.1.5.1) not didithioic acid
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-16.3.5', [
  { preferredPrefix: 'bis(2-chloropropan-2-yl)' },
  { preferredPrefix: 'bis(dimethylamino)' },
  { preferredPrefix: 'ethane-1,2-diylbis(oxymethylene)' },
  { preferredPrefix: 'bis(bromomethyl)' },
]);
