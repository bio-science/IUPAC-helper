/**
 * P-16.5.4.1  The presence of square brackets and/or parentheses that are an integral part of the name of a parent structure may affect the nesting order as described below.
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 120, P-16.5.4.1. [corrected 6 December 2023]
 *     Replace section (retain box at end)
 *     P-16.5.4.1 The presence of square brackets and/or parentheses that are an integral part of the
 *     name of a parent structure may affect the nesting order as described below.
 *     P-16.5.4.1.1 In determining the nesting order in a name the parentheses of added indicated
 *     hydrogen are ignored.
 *     Example:
 *     1-(3,4-dihydroquinolin-1(2H)-yl)ethan-1-one (PIN, P-64.3.2)
 *     P-16.5.4.1.2 In determining the nesting order in a name the square brackets of ring fusion,
 *     spiro fusion, ring assembly, or the extended von Baeyer names are ignored.
 *     Examples:
 *     (7,7-dimethyl-2-oxobicyclo[2.2.1]heptan-1-yl)methanesufonic acid (PIN, P-14.8.1)
 */
import { ruleIsHeadingOnly } from '../support/checkRule.js';

ruleIsHeadingOnly('P-16.5.4.1');
