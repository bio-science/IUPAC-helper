/**
 * P-51.4.1.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Skeletal replacement (‘a’) nomenclature generates new acyclic parent hydrides whose numbering is
 * fixed, as it is for heterocyclic rings and ring systems. Suffixes, endings, and prefixes are added
 * in accordance with this fixed numbering.
 * Fixed numbering for heteroacyclic parent structures named by skeletal replacement (‘a’) nomenclature
 * is a major change to Rule C-0.6 (ref. …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 564, P-51.4.1.2, example 3. [corrected 29 January 2020]
 *     For 3,6,9,12-tetraoxatetradecane-1,14-dioic acid [PIN,
 *     read 3,6,9,12-tetraoxatetradecanedioic acid [PIN,
 *     for ...a multiplicative name]
 *     read ...(a multiplicative name)
 *     for ...a substitutive name]
 *     read ...(a substitutive name)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-51.4.1.2', [
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P510401a.gif', pin: '3-phospha-2,5,7-trisilaoctane' },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P510401b.gif', pin: '8-thia-2,4,6-trisiladecane', otherNames: ['1-[(ethylsulfanyl)methyl]-1′-methyl-1,1′-[silanediylbis(methylene)]bis(silane);'] },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P510401c.gif', pin: '3,6,9,12-tetraoxatetradecanedioic acid', otherNames: ['2,2′-{ethane-1,2-diylbis[(oxyethane-2,1-diyl)oxy]diacetic acid;', '2-(2-{2-[2-(carboxymethoxy)ethoxy]ethoxy}ethoxy)acetic acid;'] },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P510401d.gif', pin: '1-amino-13-oxa-3,6,9-triazahenicosan-11-ol', otherNames: ['1-{[2-({2-[(2-aminoethyl)amino]ethyl}amino)ethyl]amino}-3-(octyloxy)propan-2-ol;'] },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P510401e.gif', pin: '6,11-dioxa-3,14-dithia-2,4,7,10,13,15-hexaazahexadeca-7,9-dienedioyl difluoride' },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P510401f.gif', pin: '4-ethoxy-N,N,N-trimethyl-3,5,8-trioxa-4-phosphadecan-10-aminium' },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P510401g.gif', pin: '7-cyano-3-methyl-4-oxo-2,5-dioxa-3,6-diazaoct-6-en-8-amide' },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P510401h.gif', pin: '1,1′-(ethane-1,2-diyl)bis(3-methyltrisulfane)', notNames: ['2,3,4,7,8,9-hexathiadecane'] },
  { formula: '(CH3)3C-OO-Si(CH3)2-O-CO-CH2-CH3', notNames: ['2,2,5,5-tetramethyl-3,4,6-trioxa-5-silanonan-7-one'] },
  { formula: 'CH3-O-PH(O)-O-CH2-O-CH3', pin: 'methoxymethyl methyl phosphonate', notNames: ['2,4,6-trioxa-3λ⁵-phosphaheptan-3-one'] },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P510401i.gif', pin: 'dimethyl 2,4,6,8-tetrasilanonan-1-yl phosphate' },
]);
