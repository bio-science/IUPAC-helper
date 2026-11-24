/**
 * P-67.1.2.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “General methodology for functional replacement nomenclature using infixes
 * Functional replacement nomenclature (see P-15.5) using infixes generates functional class names for
 * the following classes: acid halides and pseudo halides (azides, cyanides, isocyanides, and
 * isocyanates), amides, hydrazides, and also imidic, hydrazonic and nitridic acids. Chalcogen
 * analogues are also described by infixes.
 * Note: Preferred IUPAC names are retained names modified by functional nomenclature. The use of
 * infixes is restricted to acids listed in P-67.1.2.1 and leads to preferred IUPAC names. …”
 *
 * The whole section is in the Blue Book.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-67.1.2.3', [
  { formula: '(C6H5)2P-SH', pin: 'diphenylphosphinothious acid', notNames: ['diphenylphosphanethiol', 'diphenyl(sulfanyl)phosphane'] },
]);
