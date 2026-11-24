/**
 * P-24.4.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Three identical heterocyclic ring components spirofused together.
 * Dispiro compounds with three identical heterocyclic components may be named:
 * (a) by using heterocyclic monocyclic or polycyclic mancude components in the same way as for
 * ‘spiroter’ hydrocarbons (see P-24.4.1); …
 * (b) by skeletal replacement (‘a’) nomenclature when the ring components are polycyclic von Baeyer
 * ring systems; the numbering of the ‘spiroter’ von Baeyer hydrocarbon remains unchanged.
 * Explanation: The locant set ‘2′,3,7′,7′′....’ in the correct name, the PIN, is lower than the locant
 * set ‘2′,3′′,7,7′... ’ in the incorrect name”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 184, P-24.4.3, example 1, Explanation. [corrected 23 January 2019]
 *     For The locant set ‘1′,2,3′′...’ in the correct name, the PIN, is lower than the locant set
 *     ‘1′,2′′,3′′...’ in the incorrect name
 *     read The locant set ‘2′,3,7′,7′′...’ in the correct name, the PIN, is lower than the locant set
 *     ‘2′,3′′,7,7′...’ in the incorrect name.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-24.4.3', [
  { pin: '1′H,2H,3′′H,4′aH-3,7′:2′,7′′-dispiroter[quinoline]' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P240403c.gif', pin: '7-oxa-2,3′:7′,7′′-dispiroter[bicyclo[4.1.0]heptane]' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P240403d.gif', pin: '6,6′,6′′,8,8′,8′′-hexaoxa-2,7′:2′,7′′-dispiroter[bicyclo[3.2.1]octane]' },
]);
