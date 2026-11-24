/**
 * P-15.5.3.4.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “In general nomenclature, retained names of monocarboxylic acids may be modified by the prefixes
 * peroxy, thio, seleno, and telluro to indicate the replacement of an oxygen atom by the replacing
 * atom(s) –OO–, –S– or =S, –Se– or =Se, and –Te– or =Te (see P-65.1.4.1 and P-65.1.5.2).”
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-15.5.3.4.1', [
  { formula: 'CH3-CO-SH', pin: 'ethanethioic S-acid', otherNames: ['thioacetic S-acid'] },
  { formula: 'CH3-CH2-CS-OH', pin: 'propanethioic O-acid', otherNames: ['thiopropionic O-acid'] },
  { formula: 'C6H5-CS-SH', pin: 'benzenecarbodithioic acid', otherNames: ['dithiobenzoic acid'] },
]);
