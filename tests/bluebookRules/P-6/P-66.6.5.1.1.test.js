/**
 * P-66.6.5.1.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Compounds with the general structure RR′C(O-R′′)(O-R′′′), where only R and R′ may be, but need not
 * be, hydrogen, have the class name ‘acetal’. ‘Ketals’ constitute a subclass of acetals wherein
 * neither R nor R′ may be hydrogen. Acetals (ketals) are named in two ways:
 * (1) substitutively as ‘alkoxy’, alkyloxy, ‘aryloxy’, etc. derivatives of an appropriate parent
 * hydride or functional parent compound;
 * (2) by functional class nomenclature by citing the name of the aldehyde or ketone, the names of the
 * O-substituents, in alphanumerical order if required, and finally the class terms ‘acetal’ or …
 * Method (1), the substitutive method, leads to preferred IUPAC names.”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.6.5.1.1', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66651a.gif', pin: '1,1-diethoxypropane', otherNames: ['propanal diethyl acetal'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66651b.gif', pin: '1-ethoxy-1-methoxycyclohexane', otherNames: ['cyclohexanone ethyl methyl ketal'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66651c.gif', pin: '1,1-diethoxy-4,4-dimethoxycyclohexane', otherNames: ['cyclohexane-1,4-dione 1,1-diethyl 4,4-dimethyl diketal'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66651d.gif', pin: '1-ethoxy-1,4,4-trimethoxycyclohexane', otherNames: ['cyclohexane-1,4-dione 1-ethyl 1,4,4-trimethyl diketal'] },
]);
