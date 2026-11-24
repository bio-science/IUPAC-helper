/**
 * P-66.1.1.3.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Anilides
 * N-Phenyl derivatives of primary amides are called ‘anilides’ and may be named using the term
 * ‘anilide’ in place of ‘amide’ in systematic or retained names of amides. The locants for
 * substituents in the N-phenyl ring of anilides are primed numbers. However, names expressing
 * N-substitution by a phenyl group on an amide are preferred IUPAC names.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.1.1.3.4', [
  { formula: 'HCO-NH-C6H5', pin: 'N-phenylformamide', otherNames: ['formanilide'] },
  { formula: 'CH3-CO-NH-C6H5', pin: 'N-phenylacetamide', otherNames: ['acetanilide'] },
  { formula: 'CH3-[CH2]4-CO-NH-C6H5', pin: 'N-phenylhexanamide', otherNames: ['hexananilide'] },
  { formula: 'C6H5-CO-N(CH3)-C6H5', pin: 'N-methyl-N-phenylbenzamide', otherNames: ['N-methylbenzanilide'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66113n.gif', pin: 'N,4-dimethyl-N-(3-methylphenyl)benzamide', otherNames: ['N,3′,4-trimethylbenzanilide'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66113o.gif', pin: '3-chloro-N-(2-chlorophenyl)naphthalene-2-sulfonamide', otherNames: ['2′,3-dichloronaphthalene-2-sulfonanilide'] },
]);
