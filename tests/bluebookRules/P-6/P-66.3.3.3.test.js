/**
 * P-66.3.3.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Acyl, diacyl, and triacyl derivatives of hydrazides are named by substituting the senior hydrazide
 * by the appropriate acyl groups (the senior hydrazide is the one derived from the senior acid). Names
 * based on substitution of the parent hydride ‘hydrazine’ are no longer recommended even in general
 * nomenclature. Hydrazine, a retained name, is preferred to diazane for preferred IUPAC names.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.3.3.3', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66333a.gif', pin: 'N′-benzoylbenzohydrazide', notNames: ['1,2-dibenzoylhydrazine'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66333b.gif', pin: 'N′-acetyl-N′-ethyl-N-methylpropanehydrazide', notNames: ['1-acetyl-1-ethyl-2-methyl-2-propanoylhydrazine'] },
]);
