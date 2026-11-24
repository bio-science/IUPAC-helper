/**
 * P-66.4.1.6
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Diamidides
 * Diamidides are analogues of acyclic carboxylic anhydrides in which the =O atoms have been replaced
 * by =NR groups and the anhydride oxygen atom by –NR– giving the general formula
 * R-C(=NR′)-N(R′′)-C(=NR′′′)-R′′′ ′. Preferred IUPAC names are formed systematically as
 * N-imidoylimidamides.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.4.1.6', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66416a.gif', pin: 'N-ethanimidoylethanimidamide', otherNames: ['N-acetimidoylacetimidamide', 'N-(1-iminoethyl)ethanimidamide'] },
]);
