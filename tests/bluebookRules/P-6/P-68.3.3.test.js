/**
 * P-68.3.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Bismuth compounds
 * Bismuth compounds are named substitutively on the basis of parent hydrides named in accordance with
 * the rules described in Chapter P-2. Suffixes and prefixes are used as indicated for substitutive
 * nomenclature. There are no acids having retained names subject to functional class nomenclature.
 * Substitutive nomenclature is preferred to functional nomenclature to designate oxides, sulfides,
 * selenides, tellurides, and imides. …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1023, P-68.3.3, example 4. [corrected 5 June 2019]
 *     For triphenyl-λ⁵-bismuthanimine (PIN)
 *     read Bi,Bi,Bi-triphenyl-λ⁵-bismuthanimine (PIN)
 *   Page 1023, P-68.3.3, last example on this page. [modified 20 March 2019]
 *     For dichloro(triphenyl)-λ⁵-bismuthane (PIN)
 *     read dichlorotri(phenyl)-λ⁵-bismuthane (PIN)
 *     for dichloro(triphenyl)bismuthorane
 *     read dichlorotri(phenyl)bismuthorane
 *     for C6H5)3BiCl2
 *     read (C6H5)3BiCl2
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-68.3.3', [
  { formula: 'BiH3', preselectedName: 'bismuthane', otherNames: ['bismuthine'] },
  { formula: 'BiH5', preselectedName: 'λ⁵-bismuthane', otherNames: ['bismuthorane'] },
  { formula: 'H2Bi-BiH2', preselectedName: 'dibismuthane' },
  { formula: 'H2Bi–', preselectedPrefix: 'bismuthanyl' },
  { formula: 'H3Bi=', preselectedPrefix: 'λ⁵-bismuthanylidene' },
  { formula: '–HBi-BiH–', preselectedPrefix: 'dibismuthane-1,2-diyl' },
  { formula: 'Bi(CH=CH2)3', pin: 'triethenylbismuthane', otherNames: ['trivinylbismuthine'] },
  { formula: 'Bi(CH3)3', pin: 'trimethylbismuthane', otherNames: ['trimethylbismuthine'] },
  { formula: '(C6H5)3Bi=O', pin: 'triphenyl-λ⁵-bismuthanone', otherNames: ['triphenylbismuthane oxide'] },
  { formula: '(C6H5)3Bi=NH', pin: 'Bi.Bi,Bi-triphenyl-λ⁵-bismuthanimine', otherNames: ['triphenylbismuthane imide'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68330a.gif', pin: 'bis(oxobismuthanyl) carbonate', otherNames: ['2,4-dioxa-1,5-dibismapentane-1,3,5-trione'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68330b.gif', pin: '2,7-dihydroxy-2H-1,3,2-benzodioxabismole-5-carboxylic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68330c.gif', pin: '2,2,2-triphenyl-1,3,2λ⁵-dioxabismetan-4-one' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68330d.gif', pin: '1-chloro-1,1-bis(4-methylphenyl)-3,3-bis(trifluoromethyl)-1,3-dihydro-2,1λ⁵-benzoxabismole' },
]);
