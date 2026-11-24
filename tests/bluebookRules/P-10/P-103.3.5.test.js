/**
 * P-103.3.5
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Modification of named peptides
 * It is often convenient to specify the structure of a peptide by reference to a named sequence to
 * which it is a variant. The recommendations that follow allow this, but they apply only to
 * modification of the sequence involving normal amide links between residues. The retained names
 * angiotensin II, bradikinin, oxytocin, and insulin (human) are used to illustrate these
 * recommendations.
 * Specification of a sequence may require the species as well as the peptide to be named (see insulin
 * below). …
 * P-103.3.5.1 Replacement of residues
 * P-103.3.5.2 Extension of the peptide chain
 * P-103.3.5.3 Insertion of residues
 * P-103.3.5.4 Removal of residues”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-103.3.5', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P103350a.gif', name: 'angiotensin II' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P103350b.gif', name: 'oxytocin' },
]);
