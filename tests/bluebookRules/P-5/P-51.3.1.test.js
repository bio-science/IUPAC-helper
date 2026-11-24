/**
 * P-51.3.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Preferred IUPAC multiplicative names
 * For a multiplicative name to be categorized as an IUPAC preferred name, certain restrictive
 * conditions must be met. Multiplicative nomenclature is preferred to substitutive nomenclature for
 * generating preferred IUPAC names to express multiple occurrences of identical parent structures,
 * other than alkanes when
 * (1) the linking bonds (single or multiple) between the central substituent group of the
 * multiplicative group and all subsequent structural units are identical and
 * (2) the multiplicative groups, other than the central multiplicative group, are symmetrically
 * substituted; and
 * (3) the locants of all substituent groups on the identical parent structures, including suffix
 * groups, are identical.
 * In these recommendations, all substituent groups, including the principal characteristic groups must
 * be identical and have the same locant in order to construct a multiplicative name. …
 * The first two specific conditions are related to the linking di- or polyvalent groups. They are
 * defined and exemplified in Section P-15.3.1.2. …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 558, P-51.3.1, example 1 on this page. [corrected 29 January 2020]
 *     Replace the structures with:
 *   Page 558, P-51.3.1, example 6 on this page (example 7 of section). [corrected 9 April 2025]
 *     For 2,2′-{ethane-1,2-diylbis[(oxyethane-2,1-diyl)oxy]diacetic acid (a multiplicative name)
 *     read 2,2′-[ethane-1,2-diylbis(oxyethane-2,1-diyloxy)]diacetic acid (a multiplicative name)
 *   Page 559, P-51.3.1, last example. [corrected 7 November 2018]
 *     For 2,2′-{[ethane-1,2-diylbis(oxyethane-2,1-diyloxyethane-2,1-diyl)}dibenzoic acid
 *     read 2,2′-[ethane-1,2-diylbis(oxyethane-2,1-diyloxyethane-2,1-diyl)]dibenzoic acid
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-51.3.1', [
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P510301a.gif', pin: '2,2′-sulfanediyldiacetic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P510301b.gif', pin: '4,4′-oxydi(cyclohexane-1-carboxylic acid)', otherNames: ['4-[(4-carboxycyclohexyl)oxy]cyclohexane-1-carboxylic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P510301c.gif', name: '3,3′-{oxybis[(1-chloroethane-2,1-diyl)]oxy}di(propan-1-ol) (PIN,' },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P510301d.gif', pin: '2,2′,2′′-phosphanetriyltriacetic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P510301e.gif', pin: '2,2′-[ethane-1,2-diylbis(oxy)]diacetic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P510301f.gif', pin: '2,2′-[oxybis(ethane-2,1-diyloxy)]diacetic acid', otherNames: ['{2-[2-(carboxymethoxy)ethoxy]ethoxy}acetic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P510301g.gif', name: '3,6,9,12-tetraoxatetradecane-1,14-dioic acid [PIN,' },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P510301h.gif', pin: '4,4′-[ethane-1,2-diylbis(oxy)]dibenzoic acid', otherNames: ['4-[2-(4-carboxyphenoxy)ethoxy]benzoic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P510301i.gif', pin: '4,4′-[oxybis(ethane-2,1-diyloxy)]dibenzoic acid', otherNames: ['4-{2-[2-(4-carboxyphenoxy)ethoxy]ethoxy}benzoic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P510301j.gif', name: '2,2′-[oxybis(ethane-2,1-diyloxyethane-2,1-diyl)]dibenzoic acid (PIN,' },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P510301k.gif', name: '2,2′-(3,6,9,12-tetraoxatetradecane-1,14-diyl)dibenzoic acid (PIN,' },
]);
