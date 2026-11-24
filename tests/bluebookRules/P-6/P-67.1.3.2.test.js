/**
 * P-67.1.3.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Esters of mononuclear noncarbon oxoacids
 * Esters of mononuclear noncarbon acids are named in the same way as esters of organic acids (see
 * P-65.6.3.2). Alkyl groups, aryl groups, etc. are cited as separate words, in alphanumerical order
 * when more than one, and followed by the name of the appropriate anion. Partial acid esters of
 * polybasic acids are named by citing alkyl groups, aryl groups, etc. …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 932, P-67.1.3.2, example 4 on this page. [corrected 16 August 2016]
 *     For O-methyl phenylarsinothioate
 *     read O-methyl phenylarsinothioate (PIN)
 *   Page 932, P-67.1.3.2, example 15 on this page. [corrected 7 November 2018]
 *     For Sb(O)(F2)(S-CH3)
 *     read Sb(O)(F)2(S-CH3)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-67.1.3.2', [
  { formula: 'CH3-CH2-CH2-CH2-CH2-O-NO', pin: 'pentyl nitrite' },
  { formula: 'CH3-S-NO2', pin: 'S-methyl thionitrate' },
  { formula: '(C6H5)2P-O-CH3', pin: 'methyl diphenylphosphinite' },
  { formula: 'CH3-P(Cl)(S-CH2-CH3)', pin: 'ethyl methylphosphonochloridothioite' },
  { formula: 'CH3-P(NH-CH3)(OCH3)', pin: 'methyl N,P-dimethylphosphonamidite' },
  { formula: 'P(O-CH3)3', pin: 'trimethyl phosphite' },
  { formula: 'P(Cl)[N(CH3)2](O-CH3)', pin: 'methyl N,N-dimethylphosphoramidochloridite' },
  { formula: 'P(O)(O-CH3)3', pin: 'trimethyl phosphate' },
  { formula: 'P(O)(O-C2H5)(O-CH3)(O-C6H5)', pin: 'ethyl methyl phenyl phosphate' },
  { formula: 'P(O)(O-CH3)(OH)2', pin: 'methyl dihydrogen phosphate' },
  { formula: 'C6H5-HAs(S)(O-CH3)', pin: 'O-methyl phenylarsinothioate' },
  { formula: 'CH3-O-P(O)(OH)-O⁻ Na⁺', pin: 'sodium methyl hydrogen phosphate' },
  { formula: 'HP(O)(O-CH3)2', pin: 'dimethyl phosphonate' },
  { formula: '(CH3-CH2)2P(S)(S-CH2-CH3)', pin: 'ethyl diethylphosphinodithioate' },
  { formula: '(CH3)2As(O)(S-CH3)', pin: 'S-methyl dimethylarsinothioate' },
  { formula: 'CH3-P(O)(O-CH2-CH3)2', pin: 'diethyl methylphosphonate' },
  { formula: 'C6H5-P(O)(O-CH3)(S-CH2-CH3)', pin: 'S-ethyl O-methyl phenylphosphonothioate' },
  { formula: 'C6H5-P(O)(Cl)(O-CH3)', pin: 'methyl phenylphosphonochloridate' },
  { formula: '(CH3)2N-P(O)(O-CH3)2', pin: 'dimethyl N,N-dimethylphosphoramidate' },
  { formula: '(CH3-CH2)2N-P(O)(NCS)(O-CH2-CH3)', pin: 'ethyl N,N-diethylphosphoramid(isothiocyanatidate)' },
  { formula: 'As(O)(F)(O-CH3)2', pin: 'dimethyl arsorofluoridate' },
  { formula: 'Sb(O)(F)2(S-CH3)', pin: 'S-methyl stiborodifluoridothioate' },
  { formula: '(CH3)2B-O-C6H5', pin: 'phenyl dimethylborinate' },
  { formula: 'CH3-O-SO2-OH', pin: 'methyl hydrogen sulfate' },
  { formula: 'C6H5-O-F', pin: 'phenyl hypofluorite' },
  { formula: 'CH3-S-Cl', pin: 'methyl thiohypochlorite' },
  { formula: 'CH3-CO-CH2-CH2-O-BrO2', pin: '3-oxobutyl bromate' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P67132a.gif', pin: 'methyl bis(1-hydroxybutan-2-yl)borinate' },
  { formula: 'Si(S-CH3)3(O-CH2-CH3)', pin: 'O-ethyl S,S,S-trimethyl trithiosilicate' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P67132b.gif', name: 'S,S′-diethyl O,O′-dimethyl P,P′-(ethane-1,2-diyl)bis(phosphonothioate)(PIN)' },
]);
