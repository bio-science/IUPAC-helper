/**
 * P-16.5.1.3  Parentheses for substituents of parent structures.
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 115, P-16.5.1.3, lines 1-4. [modified 6 December 2023]
 *     For P-16.5.1.3 Parentheses are placed around prefixes denoting simple substituent groups in
 *     front of parent hydrides when no locants are necessary in order to avoid any misunderstanding
 *     that the substituent group is modified by a preceding one. When the simple substituent groups
 *     are accompanied by multiplicative prefixes such as ‘di’ and ‘tri’, the multiplicative prefixes
 *     are not included in the parentheses. Parentheses are placed also around prefixes denoting simple
 *     substituent groups qualified by locants. A minimum of parentheses must be used. Enclosing marks
 *     are never used around the names of the first cited simple substituent group.
 *     read P-16.5.1.3 Parentheses for substituents of parent structures.
 *     P-16.5.1.3.1 For mononuclear parent hydrides with two or more substituents the first cited
 *     substituent never has enclosing marks unless it is includes a locant. The second and further
 *     substituents are each enclosed with parentheses even for simple substituents. When the simple
 *     substituent groups are accompanied by multiplicative prefixes such as ‘di’ and ‘tri’, the
 *     multiplicative prefixes are not included in the parentheses.
 *   Page 115, P-16.5.1.3 (now P-16.5.1.3.1), example 1.. [corrected 12 May 2021]
 *     For butyl(ethyl)methyl(propyl)silane (PIN)
 *     read butyl(ethyl)(methyl)(propyl)silane (PIN)
 *   Page 115, P-16.5.1.3 (now P-16.5.1.3.1), example 3.. [corrected 12 May 2021]
 *     For ethyl(methyl)propylphosphane (PIN)
 *     read ethyl(methyl)(propyl)phosphane (PIN)
 *   Page 116, P-16.5.1.3 (now P-16.5.1.3.1), example 1 on this page. [corrected 12 May 2021]
 *     For ethyl(isopropyl)methylphosphane
 *     read ethyl(isopropyl)(methyl)phosphane
 *   Page 116, P-16.5.1.3 (now P-16.5.1.3.1), example 4 on this page. [corrected 20 February 2019]
 *     For ethyl(dimethyl)phosphane (PIN)
 *     read ethyldi(methyl)phosphane (PIN)
 *   Page 116, P-16.5.1.3 (now P-16.5.1.3.1), example 5 on this page. [corrected 5 July 2018]
 *     For ethyl[di(propan-2-yl)]propylsilane (PIN)
 *     read ethyldi(propan-2-yl)silane (PIN)
 *     add ethyldiisopropylsilane
 *   Page 116, P-16.5.1.3 (now P-16.5.1.3.1), after example 5.. [corrected 12 May 2021]
 *     Add ethyl(methyl)(propyl)silanecarboxylic acid
 *     methyl(phenyl)phosphinic acid
 *     cyclopropyl(phenyl)methanol
 *   Page 116, P-16.5.1.3 (now P-16.5.1.3.1), after P-16.5.1.3.1. [corrected 12 May2021]
 *     Add P-16.5.1.3.2 Simple substituents of a parent where only one possible position can be
 *     substituted do not require locants. Enclosing marks are used with second and subsequent simple
 *     substituents (see P-16.5.1.3.1). In some cases, such as acetic acid, alkyl substituents are not
 *     allowed as the resulting compound requires a different parent structure. Locants are required
 *     for related compounds where additional substitutable positions are available, for example
 *     acetamide.
 *     bromo(nitro)(phenyl)acetic acid
 *     diethyl ethyl(methyl)propanedioate
 *     bromo(chloro)acetic acid
 *     cyclopropyl(fluoro)acetonitrile
 */
import { ruleIsHeadingOnly } from '../support/checkRule.js';

ruleIsHeadingOnly('P-16.5.1.3');
