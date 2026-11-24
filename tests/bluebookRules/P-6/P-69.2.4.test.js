/**
 * P-69.2.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Organometallic groups with multicenter bonding to carbon atoms
 * In order to indicate multicenter bonding to carbon atoms, for example in an unsaturated system, the
 * name of the ligand is preceded by the prefix η (eta). A right superscript is added to the symbol η
 * to indicate the number of atoms that bind to the metal. When it is necessary to indicate that not
 * all unsaturation sites are bonded to the metal, numerical locants are added in front of the symbol
 * η. …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1039, P-69.2.4, example 2. [corrected 21 August 2019]
 *     For [(2,3,5,6-η4)-bicyclo[2.2.1]hepta-2,5-diene]tricarbonyliron
 *     read [(2,3,5,6-η)-bicyclo[2.2.1]hepta-2,5-diene]tricarbonyliron
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-69.2.4', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P69240a.gif', name: 'tris(η³-allyl)chromium' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P69240c.gif', name: 'dicarbonyl[(1−3-η)-cyclohepta-2,4,6-trien-1-ido](η⁵-cyclopenta-2,4-dien-1-ido)molybdenum' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P69240d.gif', name: 'tricarbonyl(η⁷-cycloheptatrienylium)molybdenum(1+)' },
]);
