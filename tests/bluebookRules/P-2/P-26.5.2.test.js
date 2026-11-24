/**
 * P-26.5.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Skeletal replacement (‘a’) nomenclature in amplificants
 * Locants for heteroatoms in amplificants are assigned according to the numbering of the simplified
 * skeleton and the position of heteroatoms in the amplificants following the instructions in P-26.4
 * for substituent locants. Thus, positions of heteroatoms in amplificants are described by composite
 * locants.
 * Note: Since the numbering of the heteroamplificant is fixed by the locants of the corresponding
 * hydrocarbon amplificant, the numbering of the heteroatoms may not correspond to the numbering of the
 * …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-26.5.2', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P260502a.gif', pin: '3⁴,3⁷,3¹³,3¹⁶-tetraoxa-3¹,3¹⁰-diaza-3(1,10)-cyclooctadecana-1,5(1,3)-dibenzenacyclooctaphane', otherNames: ['step 1: 3(1,10)-cyclooctadecana-1,5(1,3)-dibenzenacyclooctaphane'] },
]);
