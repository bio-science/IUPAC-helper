/**
 * P-67.1.5.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “When derivatives of mononuclear acids are named by functional class nomenclature, the seniority
 * order is established in accordance with the greater number of atoms linked to the central atom and
 * appearing as early as possible in the list: O, OO, S, Se, Te for the acids, then F, Cl, Br, I, then
 * the pseudohaliodes in the order N3, CN, NC, NCO, NCS, NCSe, NCTe, then amides and hydrazides.”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-67.1.5.2', [
  { formula: 'Cl2P(O)-O-CH2-CH2-O-P(O)Cl(NH2)', pin: '2-(phosphoramidochloridoyloxy)ethyl phosphorodichloridate' },
]);
