/**
 * P-66.1.1.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Sulfonamides, sulfinamides, and related selenium and tellurium amides Sulfonamides, sulfinamides,
 * and the analogous selenium and tellurium amides are
 * named substitutively using the following suffixes:
 * –SO2-NH2 sulfonamide (preselected suffix)
 * –SO-NH2 sulfinamide (preselected suffix)
 * –SeO2-NH2 selenonamide (preselected suffix)
 * –SeO-NH2 seleninamide (preselected suffix)
 * –TeO2-NH2 telluronamide (preselected suffix)
 * –TeO-NH2 tellurinamide (preselected suffix)
 * These suffixes may be assigned to any position of a parent hydride.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.1.1.2', [
  { formula: 'CH3-SO2-NH2', pin: 'methanesulfonamide' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66112a.gif', pin: 'butane-2-sulfinamide' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66112b.gif', pin: 'furan-2-seleninamide' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66112c.gif', pin: 'pyrrolidine-1-sulfonamide' },
]);
