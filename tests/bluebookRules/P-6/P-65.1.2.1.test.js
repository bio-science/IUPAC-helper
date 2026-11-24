/**
 * P-65.1.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Carboxylic acid groups, –COOH, that conceptually replace a –CH3 group of methane or terminate an
 * unbranched hydrocarbon chain are named by replacing the final ‘e’ of the name of the corresponding
 * hydrocarbon by the suffix ‘oic acid’. No locants are necessary to denote the positions of the
 * carboxylic acid groups in a hydrocarbon chain; locants are used when hydrocarbon chains are modified
 * by skeletal replacement, as shown in P-15.4.3.2.3. …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 749, P-65.1.2.1, example 3. [corrected 24 October 2018]
 *     Replace the structure with:
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.1.2.1', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650102a.gif', pin: 'butanoic acid', otherNames: ['butyric acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650102b.gif', pin: 'decanoic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650102c.gif', pin: 'dodecanedioic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650102d.gif', pin: '3,6,9,12-tetraoxapentadecan-1-oic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650102e.gif', pin: '3,6,9,12-tetraoxapentadecan-15-oic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650102f.gif', pin: '3,6,10,13-tetrathiapentadecane-1,15-dioic acid' },
]);
