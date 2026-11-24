/**
 * P-65.3.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “When another group is also present that has seniority for citation as principal group (see P-41,
 * P-42, P-43), or when all groups cannot be expressed as suffixes, organic oxoacids of sulfur,
 * selenium or tellurium are named by adding to the name of the parent compound the appropriate prefix
 * given in Table 6.2. …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 792, P-65.3.2.1, example 5 on this page. [modified 6 March 2019]
 *     For 2-trithiosulfobenzoic acid (PIN)
 *     read 2-(trithiosulfo)benzoic acid (PIN)
 *     for sulfanylsulfonodithioyl
 *     read 2-(sulfanylsulfonodithioyl)benzoic acid
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.3.2.1', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650302a.gif', pin: '4-sulfobenzoic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650302b.gif', pin: '4-sulfobenzene-1,2-dicarboxylic acid', otherNames: ['4-sulfophthalic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650302c.gif', pin: '4-({[(3-sulfopropoxy)methyl]sulfanyl}oxy)butane-1-sulfonic acid' },
  { formula: 'HO-SO-CH2-COOH', pin: 'sulfinoacetic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650302d.gif', pin: '3-selenonopropanoic acid' },
  { formula: 'H{S/O}S-CH2-CH2-SO2-OH', name: '2-(thiosulfino)ethane-1-sulfonic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650302e.gif', pin: '2-(trithiosulfo)benzoic acid', otherNames: ['2-(sulfanylsulfonodithioyl)benzoic acid'] },
]);
