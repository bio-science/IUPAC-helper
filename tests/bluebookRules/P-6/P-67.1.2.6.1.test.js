/**
 * P-67.1.2.6.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Preferred IUPAC names of amides and hydrazides are denoted by the class name ‘amide’ or
 * ‘hydrazide’:
 * (a) when all –OH groups in the corresponding acid have been replaced by –NH2 or –NH-NH2 groups, and
 * (b) when the amide or hydrazide is the principal functional group in accordance with the following
 * order of seniority:
 * Br, Cl, F, I, N3, CN, NC, NCO, ONC, NH2 (amide), (hydrazide)
 * Note: This order is not quite the same as that used by CAS (where amide follows the halogens and
 * precedes the pseudohalogens) but it is consistent with the order of compound classes in P-41.
 * Substituents on the nitrogen atoms are denoted by italic letter locants such as, N (primed and
 * double primed as required), in addition to the italic letter locants ‘P’, ‘As’, and ‘Sb’.
 * Locants to denote hydrazides are 1 and 2, primed and double primed as required.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 929, P-67.1.2.6.1, example 1 on this page. [corrected 25 August 2016]
 *     For N,N,N,N′-tetramethyl-N-phenylsulfurimidic diamide (PIN)
 *     read N,N,N′,N′-tetramethyl-N′′-phenylsulfurimidic diamide (PIN)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-67.1.2.6.1', [
  { formula: '[(CH3)2N]3PO', pin: 'hexamethylphosphoric triamide', otherNames: ['hexamethylphosphoramide'], notNames: ['phosphoric tris(dimethylamide)'] },
  { formula: '(CH3)2P(O)[N(CH3)2]', pin: 'N,N,P,P-tetramethylphosphinic amide', notNames: ['dimethylphosphinic dimethylamide'] },
  { formula: 'C6H5-P(O)(NHCH3)2', pin: 'N,N′-dimethyl-P-phenylphosphonic diamide', notNames: ['phenylphosphonic bis(methylamide)'] },
  { formula: 'C6H5-P(S)[N(CH3)2]2', pin: 'N,N,N′,N′-tetramethyl-P-phenylphosphonothioic diamide' },
  { formula: 'C6H5-Sb(S)[N(CH3)2][N(CH2-CH3)2]', pin: 'N,N-diethyl-N′,N′-dimethyl-Sb-phenylstibonothioic diamide' },
  { formula: '(CH3)2N-P(O)Cl2', pin: 'N,N-dimethylphosphoramidic dichloride' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P67126b.gif', pin: 'N,N-diethyl-N′,N′-dimethyl-As-phenylarsonothioic diamide' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P67126c.gif', pin: '1,1′,1′′-trimethylphosphoric trihydrazide' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P67126d.gif', pin: '2,2,2′,2′,2′′,2′′-hexamethylphosphorothioic trihydrazide', notNames: ['phosphorothioic tris(2,2-dimethylhydrazide)'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P67126e.gif', pin: 'N-methylsulfurous diamide' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P67126f.gif', pin: 'N,N-dimethylsulfuric diamide', otherNames: ['N,N-dimethylsulfamide'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P67126g.gif', pin: 'pentamethylsulfurimidous diamide' },
  { formula: 'CH3-NH-S(O)(=N-CH3)-Br', pin: 'N,N′-dimethylsulfuramidimidic bromide' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P67126h.gif', pin: 'N,N,N′,N′-tetramethyl-N′′-phenylsulfurimidic diamide' },
]);
