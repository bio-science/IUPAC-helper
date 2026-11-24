/**
 * P-51.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Functional class nomenclature is used to generate preferred IUPAC names for the following
 * characteristic groups.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 555, P-51.2.1, example 1. [corrected 3 June 2020]
 *     Add (N,N-dimethylmethanaminiumyl)oxidanide
 *   Page 555, P-51.2.1, example 2. [modified 11 November 2020]
 *     For N-chloromethanimine oxide (PIN...
 *     read N-chloromethanimine N-oxide (PIN...
 *     Add (N-chloromethaniminiumyl)oxidanide
 *   Page 555, P-51.2.1, example 2. [corrected 3 June 2020]
 *     Add (N,N-dimethylmethaniminiumyl)oxidanide
 *   Page 555, P-51.2.1, example 3. [corrected 8.11.2023]
 *     For acetyl chloride (PIN; P-65.5.1.1)
 *     read acetyl chloride (PIN; P-65.5.1)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-51.2.1', [
  { formula: '(CH3)3NO', pin: 'N,N-dimethylmethanamine N-oxide' },
  { formula: 'CH2=N(O)Cl', pin: 'N-chloromethanimine N-oxide' },
  { formula: 'CH3-CO-Cl', pin: 'acetyl chloride' },
  { formula: 'CH3-CH2-CH2-CO-N3', pin: 'butanoyl azide' },
  { formula: 'CH3-CH2-CO-CN', pin: 'propanoyl cyanide' },
  { formula: 'C6H5-CO-NC', pin: 'benzoyl isocyanide' },
  { formula: 'CH3-CO-NCO', name: 'acetyl isocyanate (PIN; P-65.5.2.1' },
  { formula: 'CH3-CO-O-CH3', pin: 'methyl acetate' },
  { formula: 'CH3-CO-O-CO-CH2-CH3', pin: 'acetic propanoic anhydride' },
  { formula: 'CH3-N(O)Cl2', pin: 'methylazonic dichloride' },
  { formula: 'CH3-NH-SO-NH2', pin: 'N-methylsulfurous diamide' },
  { formula: '(CH3)2P-NH-NH2', pin: 'dimethylphosphinous hydrazide' },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P510201a.gif', name: 'methyl α-D-gulofuranoside (P-102.5.6.2.2)' },
]);
