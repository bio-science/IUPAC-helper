/**
 * P-16.9.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Primes (′), double primes (′′), triple primes (′′′), etc. are used to differentiate the nitrogen
 * atoms of hydrazides (P-66.3), imidamides (amidines) (see P-66.4.1), hydrazonamides (amidrazones)
 * (see P-66.4.2), and hydrazonohydrazides (hydrazidines) (see P-66.4.3).”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-16.9.1', [
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1609a.gif', pin: 'N′-acetyl-N′-ethyl-N-methylbutanehydrazide' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1609b.gif', pin: 'pentanehydrazide' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1609c.gif', pin: 'hexanimidamide' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1609d.gif', pin: 'benzenecarbohydrazonamide' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1609e.gif', pin: 'butanehydrazonohydrazide' },
]);
