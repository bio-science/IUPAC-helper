/**
 * P-65.2.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Di-, tri-, tetra-, and polycarbonic acids
 * Di-, tri-, tetra-, and polycarbonic acids belong to the series of homopolynuclear acids, whose
 * central atom is carbon. Their generic formula is HO-[CO-O]n-H, where n is 2, 3, 4, etc. and they are
 * named by adding a multiplying prefix corresponding to the number of carbon atoms to the name of
 * ‘carbonic acid’ or a functional replacement derivative. The structure is numbered consecutively from
 * one end to the other, starting from and ending at a carbon atom:”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.2.3', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650203a.gif', pin: 'dicarbonic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650203b.gif', pin: 'tricarbonic acid' },
]);
