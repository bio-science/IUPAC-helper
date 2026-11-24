/**
 * P-67.1.5.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “When a characteristic group having priority to be cited as principal group is present (see
 * seniority order of classes, P-41, and of acids, P-42), prefixes having retained names or names
 * systematically formed (see P-67.1.4.1) are used to denote inorganic acids.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 947, P-67.1.5.1, example 2 on this page. [modified 22 April 2020]
 *     For N-[tris(phenylamino)-λ⁵-phosphanylidene]benzenesulfonamide (PIN)
 *     read N-(trianilino-λ⁵-phosphanylidene)benzenesulfonamide (PIN)
 *     for N-[tris(phenylamino)phosphoranylidene]benzenesulfonamide
 *     read N-(trianilinophosphoranylidene)benzenesulfonamide
 *     For (N,N′,N′′-triphenyl-N′′′-benzenesulfonylphosphorimidic triamide;
 *     read [N,N′,N′′-triphenyl-N′′′-benzenesulfonylphosphorimidic triamide;
 *     for nor N′′′-benzenesulfonylphosphorimimidic tris(phenylamide)
 *     read nor N′′′-benzenesulfonylphosphorimimidic tris(phenylamide)]
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-67.1.5.1', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P67151a.gif', pin: '4-(dihydroxyarsanyl)benzoic acid' },
  { formula: '(HO)2P(O)-CH2-COOH', pin: 'phosphonoacetic acid' },
  { formula: 'C6H5-SO2-N=P(NH-C6H5)3', pin: 'N-(trianilino-λ⁵-phosphanylidene)benzenesulfonamide', otherNames: ['N-(trianilinophosphoranylidene)benzenesulfonamide'], notNames: ['N,N′,N′′-triphenyl-N′′′-benzenesulfonylphosphorimidic triamide'] },
]);
