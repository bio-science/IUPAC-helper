/**
 * P-107.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “GLYCERIDES
 * Glycerides are esters of glycerol (propane-1,2,3-triol) with fatty acids. They are by long
 * established custom subdivided into triglycerides, 1,2- or 1,3-diglycerides, and 1- or
 * 2-monoglycerides, according to the number and position of the acyl groups. Individual glycerides are
 * named as mono-, di- or tri-O-acylglycerol. The name glycerol is allowed in general nomenclature to
 * name organic compounds; …
 * Phospholipids are lipids containing phosphoric acid as mono- or diesters, including ‘phosphatidic
 * acids’ and ‘phosphoglycerides’.
 * Phosphatidic acids are derivatives of glycerol in which one hydroxy group, commonly but not
 * necessarily primary, is esterified with phosphoric acid, and the other two hydroxy groups are
 * esterified …
 * Phosphoglycerides are phosphoric diesters, esters of phosphatidic acids, generally having a polar
 * head group (–OH or –NH2) on the esterified alcohol which typically is 2-aminoethanol (not …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1432, P-107.2, example 2. [corrected 28 October 2016]
 *     For (2S)-2-O-acetyl-1-O-hexadecanoyl-3-O-(9Z)-octadec-9-enoylglycerol
 *     read (2S)-2-O-acetyl-1-O-hexadecanoyl-3-O-[(9Z)-octadec-9-enoyl]glycerol
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-107.2', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P107200a.gif', name: 'tri-O-octadecanoylglycerol' },
]);
