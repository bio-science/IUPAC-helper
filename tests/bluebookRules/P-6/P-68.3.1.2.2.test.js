/**
 * P-68.3.1.2.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Hydrazones
 * Compounds having the general structure RCH=N-NH2 or RR′C=N-NH2 are called ‘hydrazones’ and are named
 * in two ways:
 * (1) substitutively as derivatives of the parent hydride ‘hydrazine’, H2N-NH2;
 * (2) by functional class nomenclature using the class name ‘hydrazone’.
 * Method (1) generates preferred IUPAC names.
 * In these recommendations preferred IUPAC names for hydrazones are generated substitutively as
 * ‘ylidene’ derivatives of hydrazine rather than by functional class nomenclature as in previous …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1000, P-68.3.1.2.2, example 3. [modified 18 May 2023]
 *     For ethane-1,2-diylidenebis(phenylhydrazine) (PIN)
 *     read 1,1′-ethanediylidenebis(2-phenylhydrazine) (PIN)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-68.3.1.2.2', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68312d.gif', pin: 'propylidenehydrazine', otherNames: ['propanal hydrazone'] },
  { formula: '(CH3)2N-N=C(CH3)2', pin: '1,1-dimethyl-2-(propan-2-ylidene)hydrazine', otherNames: ['1,1-dimethyl-2-(1-methylethylidene)hydrazine', 'acetone dimethylhydrazone'] },
  { formula: 'C6H5-NH-N=CH-CH=N-NH-C6H5', pin: '1,1′-ethanediylidenebis(2-phenylhydrazine)', otherNames: ['ethane-1,2-dione bis(phenylhydrazone)'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68312e.gif', pin: '2-[(propan-2-ylidene)hydrazinyl]benzoic acid', otherNames: ['2-[(1-methylethylidene)hydrazinyl]benzoic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68312f.gif', pin: '4-(phenylhydrazinylidene)cyclohexane-1-carboxylic acid' },
]);
