/**
 * P-65.1.1.2.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The names citric acid, lactic acid, glyceric acid, pyruvic acid, and tartaric acid, related to
 * natural products, are also retained; no substitution is recommended, but the formation of salts and
 * esters is allowed.
 * Names of α-amino acids related to peptides and proteins are also retained (see P-103). …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.1.1.2.3', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650101k.gif', pin: '2-hydroxypropane-1,2,3-tricarboxylic acid', otherNames: ['citric acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650101l.gif', pin: '2,3-dihydroxypropanoic acid', otherNames: ['glyceric acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650101m.gif', pin: '2-hydroxypropanoic acid', otherNames: ['lactic acid'] },
  { formula: 'CH3-CO-COOH', pin: '2-oxopropanoic acid', otherNames: ['pyruvic acid'] },
  { formula: 'HOOC-[CH(OH)]2-COOH', pin: '2,3-dihydroxybutanedioic acid', otherNames: ['tartaric acid'] },
]);
