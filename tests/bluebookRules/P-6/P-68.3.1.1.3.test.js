/**
 * P-68.3.1.1.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Nitrolic and nitrosolic acids
 * Compounds having the general structures R-C(=NOH)-NO2 and R-C(=NOH)-NO are called generically
 * ‘nitrolic acids’ and ‘nitrosolic acids’, respectively. They are named substitutively for general
 * nomenclature as oximes of pseudoketones. Preferred IUPAC names are formed as described above for
 * ‘oximes’ (see P-68.3.1.1.2). Traditionally, they were named by functional class nomenclature as
 * oximes of aldehydes substituted in position 1 by a nitro or nitroso group.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 998, P-68.3.1.1.3, example 1. [corrected 24 July 2019]
 *     For N-(1-nitropropylidene)hydroxylamine (PIN)
 *     read N-(1-nitropropylidene)hydroxylamine
 *     add N-hydroxy-1-nitropropan-1-imine (PIN)
 *   Page 998, P-68.3.1.1.3, example 2. [modified 4 September 2019]
 *     For N-(1-nitrosoethylidene)hydroxylamine (PIN)
 *     read N-(1-nitrosoethylidene)hydroxylamine
 *     add N-hydroxy-1-nitrosoethan-1-imine (PIN)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-68.3.1.1.3', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68311o.gif', pin: 'N-hydroxy-1-nitropropan-1-imine', otherNames: ['N-(1-nitropropylidene)hydroxylamine', '1-nitropropanal oxime', '1-nitropropan-1-one oxime'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68311p.gif', pin: 'N-hydroxy-1-nitrosoethan-1-imine' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68311p.gif', pin: 'N-(1-nitrosoethylidene)hydroxylamine' },
]);
