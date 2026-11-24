/**
 * P-13.8.1.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The prefix ‘de’ (not ‘des’), followed by the name of a group or atom (other than hydrogen), denotes
 * removal (or loss) of that group and addition of the necessary hydrogen atoms, i.e., exchange of that
 * group with hydrogen atoms.
 * As an exception, ‘deoxy’, when applied to hydroxy compounds, denotes the removal of an oxygen atom
 * from an –OH group with the reconnection of the hydrogen atom. …”
 *
 * The whole section is in the Blue Book.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-13.8.1.1', [
  { name: '4-deoxy-β-D-xylo-hexopyranose', notNames: ['4-deoxy-β-D-xylo-galactopyranose'] },
]);
