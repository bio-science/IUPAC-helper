/**
 * P-74.2.1.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Amine oxides, imine oxides, and their chalcogen analogues
 * Amine oxides and imine oxides have the generic formulae R3N⁺–O⁻ and R2C=N⁺(R)–O⁻ respectively;
 * chalcogen analogues are amine sulfides, imine selenides, etc. (where O is replaced by S, Se, or Te).
 * They may be named:
 * (1) as zwitterionic compounds;
 * (2) by functional class nomenclature using the functional class name ‘oxide’, sulfide, ‘selenide’,
 * or ‘telluride’.
 * Method (2) leads to preferred IUPAC names when one amine oxide is present. When two amine oxides are
 * present, the λ-convention is used to generate PINs (see P-62.5). …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-74.2.1.2', [
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P74212a.gif', pin: 'N,N-dimethylmethanamine N-oxide', otherNames: ['(trimethylazaniumyl)oxidanide'] },
]);
