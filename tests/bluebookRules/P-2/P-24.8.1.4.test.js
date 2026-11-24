/**
 * P-24.8.1.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Polyspiro ring systems which include at least three monoalicyclic rings with one nonstandard hetero
 * spiro atom as well as other spiro fusions are named by extending the rules for naming spiro ring
 * systems as defined in P-24.1. They are named using a combination of methods for naming the polyspiro
 * ring systems and for indicating heteroatoms with nonstandard bonding numbers. If there is a choice
 * for numbering, the following criteria are considered in order until a decision is made:
 * (a) Low numbers are selected for spiro atoms;
 * Explanation: The locant set for the spiro atoms in (I), ‘3,4,7’, is lower than ‘3,6,7’ in (II) or
 * ‘3,9,10’ in (III).
 * (b) Low numbers are selected for spiro atoms connecting three rings;
 * Explanation: The locant ‘3’ for the spiro atom connecting three rings in (I) is lower than ‘6’ in
 * (II) or ‘11’ in (III).
 * (c) Low numbers are selected for the von Baeyer spiro descriptor in order of citation;
 * Explanation: The spirodescriptor set ‘2,1,1,2,1,2,2’ in (I) is lower than ‘2,1,1,2,2,2,1’ in (II).”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-24.8.1.4', [
  { pin: '7λ⁶-thiatrispiro[2.0.2.2⁷.3⁷.2⁴.3³]heptadecane (I)', notNames: ['3λ⁶-thiatrispiro[2.2.0.2⁷.3⁶.2³.3³]heptadecane (II)'] },
  { pin: '3λ⁶-thiatrispiro[2.2.2⁶.2.2¹¹.2³.2³]heptadecane (I)', notNames: ['6λ⁶-thiatrispiro[2.2.2⁶.2⁶.2.2¹³.2³]heptadecane (II)'] },
  { pin: '5λ⁶-thiatrispiro[2.1.1.2⁷.1⁵.2⁵.2³]tetradecane (I)', notNames: ['5λ⁶-thiatrispiro[2.1.1.2⁷.2⁵.2⁵.1³]tetradecane (II)'] },
]);
