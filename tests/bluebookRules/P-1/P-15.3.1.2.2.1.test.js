/**
 * P-15.3.1.2.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Concatenation is the method used for the formation of multipart di- and polyvalent multiplicative
 * substituent groups. A concatenated multiplicative group is formed by first citing the central
 * multiplicative substituent group, followed by a multiplicative prefix, such as ‘di’, ‘tri’, etc. or
 * ‘bis’, ‘tris’, etc., and then, in order, and in the direction toward the identical parent
 * structures, the names of successive di- or polyvalent substituent groups.
 * Note: When two or more successive multiplicative groups follow the central multiplicative group they
 * are not prefixed by separate multiplicative prefixes. …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 73, P-15.3.1.2.2.1, example 1 on this page. [corrected 28 October 2016]
 *     For [benzene-1,2,4-triyltris(oxy)] (preferred prefix)
 *     read benzene-1,2,4-triyltris(oxy) (preferred prefix)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-15.3.1.2.2.1', [
  { formula: '–O-CH2-O–', name: 'methylenebis(oxy)', notNames: ['methylenedioxy'] },
  { formula: '–CH2-O-CH2–', preferredPrefix: 'oxybis(methylene)' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1503k.gif', preferredPrefix: 'benzene-1,2,4-triyltris(oxy)' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1503l.gif', preferredPrefix: 'ethane-1,1,2-triyltrinitrilo' },
  { formula: '–CH2-NH-CO-CH2-CO-NH-CH2–', preferredPrefix: 'propanedioylbis(azanediylmethylene)' },
]);
