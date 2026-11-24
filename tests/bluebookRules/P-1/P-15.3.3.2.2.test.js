/**
 * P-15.3.3.2.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Seniority order of classes (see P-41) is used when a choice has to be made between a parent
 * structure and a component of a multiplicative group.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-15.3.3.2.2', [
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1503bu.gif', pin: 'bis(phenyldiazenyl)methanone', notNames: ['1,1′-carbonylbis(2-phenyldiazene)', '1,1′-[carbonylbis(diazenediyl)]dibenzene'] },
]);
