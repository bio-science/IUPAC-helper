/**
 * P-22.2.3.2.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “When heteroatoms of different kinds are present, the locant ‘1’ is given to the heteroatom first
 * cited in the order of seniority given above (see P-22.2.3.1). The direction of numbering is then
 * chosen to give lower locants to the heteroatoms as a set without regard to the kind of heteroatom,
 * and then, if necessary, according to the order of seniority above (see P-22.2.3.1). Low locants are
 * assigned first to the heteroatoms and then to unsaturated sites (see P-31.1.3.2). …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-22.2.3.2.3', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P220203g.gif', pin: '1-thia-5-selenacyclododecane' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P220203h.gif', pin: '1-oxa-2-azacyclododeca-3,5,7,9,11-pentaene', otherNames: ['2H-1-oxa-2-aza[12]annulene'] },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P220203i.gif', pin: '1-oxa-2-aza-11-silacyclotetradecane' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P220203j.gif', pin: '1-oxa-4-selena-11-azacyclotrideca-2,5,7,9,12-pentaene', otherNames: ['11H-1-oxa-4-selena-11-aza[13]annulene'] },
]);
