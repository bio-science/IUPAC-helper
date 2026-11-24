/**
 * P-73.7
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “CHOICE OF A PARENT STRUCTURE
 * A parent cationic structure is chosen by applying the following criteria in order until a definitive
 * choice is achieved:
 * (a) parent with the maximum number of cationic centers, including cationic suffixes;
 * (b) parent with the maximum number of ‘ylium’ cationic centers with the exception of names based on
 * the λ-convention (see P-73.8.2);
 * (c) maximum number of senior cationic centers first cited in the seniority order of classes: N > P >
 * As > Sb > Bi > Si > Ge > Sn > Pb > B > Al > Ga > In > Tl > O > S > Se > Te > C (see P-41);
 * The seniority order for cations is now the order of seniority of classes rather than the order of
 * skeletal replacement (‘a’) prefixes as used in RC-82.5.8.4, ref. 3.
 * (d) further choice, if necessary, is made by applying the general criteria, giving priority to the
 * corresponding suffixes (see Table 4.4) and by using the general seniority order of classes (see …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-73.7', [
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73700a.gif', pin: '2-(piperidin-1-ium-3-yl)propane-1,2-bis(aminium)', notNames: ['3-(1,2-diaminiumylpropan-2-yl)piperidin-1-ium'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73700b.gif', pin: '1,3-dimethyl-5-(methyloxidaniumylidene)cyclohex-3-en-1-ylium', notNames: ['(1,5-dimethylcyclohex-4-en-1-ylium-3-ylidene)(methyl)oxidanium'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73700c.gif', notNames: ['dimethyl[6-(trimethylphosphaniumyl)hexyl]sulfanium'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73700d.gif', pin: '6-(dimethylsulfaniumyl)-N,N,N-trimethylhexan-1-aminium', otherNames: ['{not dimethyl[6-(trimethylazaniumyl)hexyl]sulfanium; N> S}'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73700e.gif', pin: '3-(azaniumylmethyl)pentane-1,5-bis(aminium)' },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73700f.gif', pin: '3-(3-azaniumylcyclopentyl)propanamidium' },
]);
