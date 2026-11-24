/**
 * P-93.5.6.6
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Superimposition of stereogenic elements in a fullerene molecule.
 * If a fullerene derivative with an inherently or noninherently chiral substitution pattern carries
 * chiral substituents, the configuration of both types of stereogenic elements has to be indicated. …
 * Explanation: The chiralities of the stereogenic centers in the esters are superimposed on the
 * descriptor for the fullerene with the inherently chiral substitution pattern. …
 * and similarly for the various diastereoisomers.”
 *
 * The whole section is in the Blue Book.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-93.5.6.6', [
  { pin: 'tetrakis[(1S)-1-phenylbutyl] (ᶠ,ˢC)-3′H,3′′H-dicyclopropa[8,25:33,34]-(C70-D5h(6))[5,6]fullerene-3′′3′,3′′,3′′-tetracarboxylate' },
  { pin: 'tetrakis[(1R)-1-phenylbutyl] (ᶠ,ˢA)-3′H,3′′H-dicyclopropa[8,25:33,34]-(C70-D5h(6))[5,6]fullerene-3′,3′,3′′,3′′-tetracarboxylate' },
]);
