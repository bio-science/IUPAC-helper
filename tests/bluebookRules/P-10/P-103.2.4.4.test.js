/**
 * P-103.2.4.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Zwitterionic amino acids are named in two ways:
 * (1) by prefixing the name of the cationic substituent group into that of the anionic parent (see
 * P-74.1.3) and using CIP stereodescriptors to describe the configuration;
 * (2) by adding the term ‘zwitterion’ to the name of the amino acid.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-103.2.4.4', [
  { formula: 'H3N⁺-CH2-COO⁻', name: 'azaniumylacetate' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P103244a.gif', name: 'S-methyl-L-cysteine zwitterion' },
]);
