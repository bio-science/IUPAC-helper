/**
 * P-102.5.6.7.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Intermolecular anhydrides
 * The cyclic product of condensation of two monosaccharide molecules with elimination of two molecules
 * of water (commonly called an intermolecular anhydride) is named by placing the term ‘dianhydride’
 * after the names of the two parent monosaccharides. When the two parents are different, the senior
 * parent, according to the selection criteria for selecting the parent structure (see P-102.4), is
 * cited first. …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-102.5.6.7.2', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102567c.gif', name: 'α-D-fructopyranose β-D-fructopyranose 1,2′:1′,2-dianhydride' },
]);
