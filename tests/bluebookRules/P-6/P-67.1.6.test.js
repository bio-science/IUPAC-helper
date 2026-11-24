/**
 * P-67.1.6
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “aci-Nitro compounds
 * aci-Nitro compounds deserve a special mention. They are tautomers of nitro compounds having the
 * general structure R=N(O)OH or R2N(O)OH and are named as derivatives of azinic acid, H2N(O)OH.
 * When needed, the R2N(O)– group is designated by a prefix derived from ‘azinoyl’, that is preferred
 * to ‘nitroryl’ (see P-67.1.4.1.1.2). The group =N(O)OH is named ‘hydroxy(oxo)-λ⁵-azanylidene’.
 * The name ‘hydroxy(oxo)-λ⁵-azanylidene’ is a change from the 1993 (ref. …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-67.1.6', [
  { formula: 'CH2=N(O)-OH', pin: 'methylideneazinic acid', otherNames: ['aci-nitromethane'] },
  { formula: '(CH3)2N(O)-CH2-CN', pin: 'cyano-N,N-dimethylmethanamine N-oxide', notNames: ['(dimethylnitroryl)acetonitrile'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P67160a.gif', pin: '4-[hydroxy(oxo)-λ⁵-azanylidene]cyclohexane-1-carboxylic acid', otherNames: ['4-aci-nitrocyclohexane-1-carboxylic acid'] },
]);
