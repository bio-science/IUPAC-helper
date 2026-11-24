/**
 * P-69.2.5
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Bridging organometallic groups with multicenter bonding to carbon atoms
 * The prefix ‘μ’ (see IR-9.2.5.2, ref. 12) is added at the front of the name of a bridging ligand to
 * indicate bridging between two metal atoms. Locants for the ‘η’ positions are separated by a colon
 * and a hyphen is added following the name of the bridging group. Direct bonding between metal atoms
 * is indicated as described in IR-10.2.5.1 (ref. 12).”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1040, P-69.2.5, example. [corrected 28 October 2016]
 *     For {μ-[2(1-3,3a,8a-η):1(4–6-η)]azulene}-(pentacarbonyl-1κ³C,2κ²C)diiron(Fe—Fe)
 *     read {μ-[2(1–3,3a,8a-η):1(4–6-η)]azulene}-(pentacarbonyl-1κ³C,2κ²C)diiron(Fe—Fe)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-69.2.5', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P69250a.gif', name: '{μ-[2(1–3,3a,8a-η):1(4−6-η)]azulene}-(pentacarbonyl-1κ³C,2κ²C)diiron(Fe—Fe)' },
]);
