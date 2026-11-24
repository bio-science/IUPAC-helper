/**
 * P-67.1.3.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Salts of mononuclear noncarbon oxoacids
 * Neutral salts of mononuclear noncarbon oxoacids are named by citing the cation(s) followed by the
 * name(s) of the anion(s) as a separate word. Names of anions are formed by changing the ‘ic acid’
 * ending to ‘ate’ and the ‘ous acid’ ending to ‘ite’. Different cations are cited in alphabetical
 * order.
 * Acid salts of polybasic mononuclear noncarbon oxoacids are named in the same way as neutral salts,
 * the remaining acid hydrogen atom(s) being indicated by the word ‘hydrogen’ ( or ‘dihydrogen’, etc.,
 * …
 * Note: In the nomenclature of inorganic chemistry (IR-8.4, ref. 12), the term ‘hydrogen’ is written
 * directly in front of the name of the anion, without a space, to indicate that it is part of the …”
 *
 * The whole section is in the Blue Book.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-67.1.3.1', [
  { formula: 'Na2(CH3-PO2)', pin: 'disodium methylphosphonite' },
  { formula: 'K[(CH3)2As(O)O]', pin: 'potassium dimethylarsinate' },
  { formula: 'Na⁺ B(OH)(OCN)(O⁻)', name: 'sodium hydrogen borocyanatidate' },
]);
