/**
 * P-90
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “INTRODUCTION
 * This Chapter is concerned only with the main principles for specification of configuration and
 * conformation of organic compounds. The structure of an organic compound is systematically indicated
 * by one or more affixes added to a name that does not itself prescribe stereochemical configuration
 * or conformation; such affixes are generally called ‘stereodescriptors’. Thus, stereoisomers, such as
 * enantiomers, have names that differ only in the stereodescriptors used. …
 * In order to arrive at an unambiguous description of stereoisomers, Cahn, Ingold, and Prelog (refs. …
 * When different stereodescriptors are recommended to describe cis and trans isomers,
 * diastereoisomers, and enantiomers, one of them is recommended as a preferred stereodescriptor. …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-90', [
  // Drawn in the Blue Book.
  { drawing: 'P9gif/P90000a.gif', name: 'cis-but-2-ene' },
]);
