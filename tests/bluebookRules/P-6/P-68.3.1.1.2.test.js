/**
 * P-68.3.1.1.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Oximes
 * Compounds having the general structure R-CH=N-OH or RR′C=N-OH have the class name ‘oxime’ and have
 * been further classified as ‘aldoximes’ and ‘ketoximes’, respectively. For general nomenclature they
 * are named according to the principles of functional class nomenclature by placing the class name
 * ‘oxime’ as a separate word after the name of the aldehyde or ketone. Preferred IUPAC names are
 * formed substitutively as N-hydroxy derivatives of imines. …
 * In these recommendations preferred IUPAC names for oximes are generated substitutively as N-hydroxy
 * derivatives of imines rather than by functional class nomenclature as in previous recommendations”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 997, P-68.3.1.1.2, lines 1/2 on this page. [corrected 11 December 2019]
 *     For ...substitutively as ‘ylidene’ derivatives of hydroxylamine. Compounds...
 *     read ...substitutively as N-hydroxy derivatives of imines. Compounds...
 *   Page 997, P-68.3.1.1.2, box, line 2. [corrected 11 December 2019]
 *     For ...substitutively as ‘ylidene’ derivatives of hydroxylamine rather...
 *     read ...substitutively as N-hydroxy derivatives of imines rather...
 *   Page 997, P-68.3.1.1.2, example 1. [corrected 24 July 2019]
 *     For (pentan-2-ylidene)hydroxylamine (PIN)
 *     read (pentan-2-ylidene)hydroxylamine
 *     add N-hydroxypentan-2-imine (PIN)
 *   Page 997, P-68.3.1.1.2, example 2. [corrected 26 September 2018]
 *     Replace the structure with:
 *   Page 997, P-68.3.1.1.2, example 3. [corrected 24 July 2019]
 *     For butane-2,3-diylidenebis(hydroxylamine) (PIN)
 *     read (butane-2,3-diylidene)bis(hydroxylamine)
 *     add N²,N³-dihydroxybutane-2,3-diimine (PIN)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-68.3.1.1.2', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68311f.gif', pin: 'N-hydroxypentan-2-imine', otherNames: ['pentan-2-one oxime'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68311g.gif', pin: 'N-ethoxypropan-1-imine', otherNames: ['propanal O-ethyloxime'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68311h.gif', pin: 'N²,N³-dihydroxybutane-2,3-diimine', otherNames: ['butane-2,3-dione dioxime'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68311i.gif', pin: '3-(hydroxyimino)butan-2-one', otherNames: ['butane-2,3-dione oxime'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68311j.gif', pin: '4-(hydroxyimino)-1-methylcyclohexa-2,5-diene-1-carboxylic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68311k.gif', pin: '4-[(ethoxyimino)methyl]benzene-1-sulfonic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68311l.gif', pin: '3-(hydroxyimino)butanal' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68311m.gif', pin: '2-(hydroxyimino)pentan-3-one', otherNames: ['pentane-2,3-dione 2-oxime'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68311n.gif', pin: 'N²,N⁴-diphenoxypentane-2,4-diimine', otherNames: ['pentane-2,4-dione bis(O-phenyloxime)'] },
]);
