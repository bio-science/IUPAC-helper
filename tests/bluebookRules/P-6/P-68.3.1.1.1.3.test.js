/**
 * P-68.3.1.1.1.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “N,O-Disubstitution of hydroxylamine
 * Substitution of hydroxylamine on both nitrogen and oxygen atoms leads to O-substituted amines.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-68.3.1.1.1.3', [
  { formula: 'CH3-NH-O-CH3', pin: 'N-methoxymethanamine', otherNames: ['N,O-dimethylhydroxylamine'] },
  { formula: 'C6H5-NH-O-CH2-CH3', pin: 'N-ethoxyaniline', otherNames: ['O-ethyl-N-phenylhydroxylamine'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68311b.gif', pin: 'N,N′-[ethane-1,2-diylbis(boranediyloxy)]bis(N-ethylethanamine)', otherNames: ['O,O′-[ethane-1,2-diylbis(boranediyl)]bis(N,N-diethylhydroxylamine)'] },
]);
