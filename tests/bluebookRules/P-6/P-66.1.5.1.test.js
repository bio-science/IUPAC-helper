/**
 * P-66.1.5.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Lactams and lactims
 * Intramolecular amides of amino carboxylic acids, –CO-NH–, are called ‘lactams’ and their tautomers,
 * –C(OH)=N–, are ‘lactims’. Lactams are named in two ways:
 * (1) as heterocyclic pseudoketones;
 * (2) by substituting ‘lactam’ for the ‘ic acid’ ending of a systematic ‘oic acid’ name for the parent
 * acid without the amino substituent, and inserting a locant designating the position of the amino …
 * Method (1) generates preferred IUPAC names.”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.1.5.1', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66151a.gif', pin: 'pyrrolidin-2-one', otherNames: ['butano-4-lactam'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66151b.gif', pin: '1-azacyclotridecan-2-one', otherNames: ['dodecano-12-lactam'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66151c.gif', pin: '3,4,5,6-tetrahydropyridin-2-ol', otherNames: ['pentano-5-lactim'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66151d.gif', pin: '3,4,5,6,7,8-hexahydroazocin-2-ol', otherNames: ['1,2-didehydroazocan-2-ol', 'heptano-7-lactim'] },
]);
