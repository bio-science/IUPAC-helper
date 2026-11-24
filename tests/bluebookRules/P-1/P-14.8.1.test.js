/**
 * P-14.8.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Organic adducts
 * An adduct is a chemical species, each molecular entity of which is formed by direct combination of
 * separate molecular entities in such a way that there may be a change of connectivity but no loss of
 * atoms from any of the molecular entities (see ref. 19).
 * In this subsection, only adducts formed from organic compounds are considered. Inorganic adducts are
 * discussed in ref. 12, IR-5.5. …
 * Formulas for these adducts are written in the order that follows the general seniority of organic
 * compounds given in P-41. …
 * Salts and Lewis adducts between boron compounds and the Group 15 elements in which the mode of
 * attachment is specified by italic element symbols are considered in P-68.1.6.
 * For adducts composed solely of organic compounds, the individual components are cited in the order
 * of seniority of classes (see P-41) in formulas, no longer according to the number of species in the
 * …
 * Solvates, including hydrates (see P-14.8.2), are treated as adducts and preferred IUPAC names must
 * use the notation for denoting the proportion of components described above. …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 50, P-14.8.1, example 1 on this page. [modified 11 December 2019]
 *     For [(HOOC-CH2-NH)(CH2)2]2-N-CH2-COOH • HN[CH2-P(O)(OH)2]2 • H2N-(CH2)2-NH2
 *     read (HOOC-CH2-NH-[CH2]2)2N-CH2-COOH • HN[CH2-P(O)(OH)2]2 • H2N-[CH2]2-NH2
 *     for {[(carboxymethyl)azanediyl]bis(ethane-2,1-diylazanediyl)}diacetic
 *     acid—[iminobis(methylene)]bis(phosphonic acid—ethane-1,2-diamine (1/1/1)
 *     read 2,2′-{[(carboxymethyl)azanediyl]bis(ethane-2,1-diylazanediyl)}diacetic
 *     acid—[azanediylbis(methylene)]bis(phosphonic acid—ethane-1,2-diamine (1/1/1)
 *     for N,N-bis{2-[(carboxymethyl)amino]ethyl}glycine—[iminobis(methylene)]bis(phosphonic
 *     acid)—ethane-1,2-diamine (1/1/1)
 *     read
 *     N-{[(carboxymethyl)azanediyl]ethyl}-N,N′-(ethane-2,1-diyl)diglycine—[azanediylbis(methylene)]bis(phosphonic
 *     acid)—ethane-1,2-diamine (1/1/1)
 *   Page 51, P-14.8.1, example 2 on this page. [corrected 6 May 2020]
 *     For ---2,2′-diylbis(diphenyl-λ⁵phosphanone) (1/1/1/1) (PIN)
 *     read ---3,3′-diylbis(diphenyl-λ⁵phosphanone) (1/1/1/1) (PIN)
 *   Page 51, P-14.8.1, example 3 on this page. [modified 18 September 2019]
 *     For {piperazin-1-ium 11⁵-[2-(2,4-dinitrophenyl)diazen-1-yl]-3,6,9,13,16,19-hexaoxa-...
 *     read {piperazin-1-ium 11⁵-[(2,4-dinitrophenyl)diazenyl]-3,6,9,13,16,19-hexaoxa-...
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-14.8.1', [
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1408a.gif', pin: 'coronene—1,3,5-trinitrobenzene (1/1)' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1408b.gif', pin: '9H-fluorene—1-methylnaphthalene (1/1)' },
  { formula: '(HOOC-CH2-NH-[CH2]2)2N-CH2-COOH • HN[CH2-P(O)(OH)2]2 • H2N-[CH2]2-NH2', name: '2,2′-{[(carboxymethyl)azanediyl]bis(ethane-2,1-diylazanediyl)}diacetic acid—[azanediylbis(methylene)]bis(phosphonic acid)—ethane-1,2-diamine (1/1/1)' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1408c.gif', pin: '4,5-dichloro-3,6-dioxocyclohexa-1,4-diene-1,2-dicarbonitrile—1-methyl-1H-perimidine—iodomethane (1/1/1)' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1408d.gif', pin: 'benzene-1,2,3-triol—quinolin-8-ol (1/2)' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1408e.gif', pin: '4-nitrobenzoic acid—quinolin-8-ol (1/1)' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1408f.gif', pin: '1H-indole-2-carboxylic acid—3,5-dinitrobenzoic acid (1/1)' },
  { formula: '(C5H5)Fe(C5H4-CHO) • C6H6 • CBr4', name: 'ferrocenecarbaldehyde—benzene—tetrabromomethane (1/1/1)' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1408g.gif', pin: '4-aminobenzoic acid—1,3,5-trinitrobenzene (1/1)' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1408h.gif', pin: 'acetic acid—(7,7-dimethyl-2-oxobicyclo[2.2.1]heptan-1-yl)methanesulfonic acid—ethyl acetate—[1,1′-binaphthalene]-3,3′-diylbis(diphenyl-λ⁵-phosphanone) (1/1/1/1)' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1408i.gif', pin: '{piperazin-1-ium 11⁵-[(2,4-dinitrophenyl)diazenyl]-3,6,9,13,16,19-hexaoxa-1,11(1,3)-dibenzenacycloicosaphane-1²-carboxylate}—ethyl acetate—dichloromethane (1/1/1)', otherNames: ['{piperazin-1-ium 13-[(2,4-dinitrophenyl)azo]-3,6,9,17,20,23-hexaoxatricyclo[23.3.1.1¹¹,¹⁵]triaconta-1(29),11(30),12,14,25,27-hexaene-29-carboxylate}—ethyl acetate—dichloromethane (1/1/1)'] },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1408j.gif', pin: 'ethanol—pyridine (1/1)' },
]);
