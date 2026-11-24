/**
 * P-66.1.6.1.1.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The prefixes for appropriate substituent groups derived from urea are formed systematically. The
 * prefixes ‘ureido’ and ‘ureylene’ are not recommended.
 * The prefixes ‘ureido’ and ‘ureylene’ are no longer acceptable in IUPAC nomenclature. The prefixes
 * ‘carbamoylamino’ and ‘carbonylbis(azanediyl)’, respectively are recommended for preferred IUPAC
 * names.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.1.6.1.1.3', [
  { formula: 'H2N-CO-NH–', preferredPrefix: 'carbamoylamino', notNames: ['ureido'] },
  { formula: '–HN-CO-NH–', name: 'carbonylbis(azanediyl)', notNames: ['ureylene'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66161f.gif', pin: '2-[(methylcarbamoyl)amino]naphthalene-1-carboxylic acid', otherNames: ['2-{[(methylamino)carbonyl]amino}-1-naphthoic acid'], notNames: ['2-(3-methylureido)naphthalene-1-carboxylic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66161g.gif', pin: '7,7′-[carbonylbis(azanediyl)]di(naphthalene-2-sulfonic acid)', notNames: ['7,7′-ureylenedi(naphthalene-2-sulfonic acid)'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66161h.gif', pin: 'N-carbamoylbenzamide', otherNames: ['N-(aminocarbonyl)benzamide'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66161i.gif', pin: 'N-carbamoylbenzenesulfonamide', otherNames: ['N-(aminocarbonyl)benzenesulfonamide'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66161j.gif', pin: 'N-carbamoyl-2-phenylacetamide', otherNames: ['N-(aminocarbonyl)-2-phenylacetamide'] },
]);
