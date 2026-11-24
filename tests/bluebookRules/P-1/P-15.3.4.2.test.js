/**
 * P-15.3.4.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Disallowed identical units
 * Acyclic hydrocarbons, saturated or unsaturated, are not allowed as parent structures in
 * multiplicative nomenclature [see P-15.3.1.1 (b)].”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-15.3.4.2', [
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1503ca.gif', pin: '1-{[2-(ethylsulfanyl)-1-(propylsulfanyl)ethen-1-yl]sulfanyl}propane', notNames: ['1,1′-{[2-(ethylsulfanyl)ethene-1,1-diyl]bis(sulfanyl)}dipropane'] },
]);
