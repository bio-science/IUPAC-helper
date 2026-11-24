/**
 * P-22.2.2.1.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “A multiplicity of the same heteroatom is indicated by a multiplying prefix ‘di’, ‘tri’, ‘tetra’,
 * etc., placed before the appropriate ‘a’ term. The final letter ‘a’ of a multiplying prefix is elided
 * before a vowel, e.g., tetrazole, not tetraazole. Lowest possible locants are assigned to
 * heteroatoms, locant ‘1’ being assigned to one of the heteroatoms. Locants are cited at the front of
 * the name, i.e., before the skeletal replacement (‘a’) term and any preceding numerical prefixes.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-22.2.2.1.2', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P220202c.gif', pin: '1,5-diazocine' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P220202d.gif', pin: '1,3-dioxolane' },
]);
