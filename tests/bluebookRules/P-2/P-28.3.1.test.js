/**
 * P-28.3.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Unbranched ring assemblies consisting of three or more identical cyclic systems are named by
 * placing the appropriate numerical Latin-based (see P-14.2.3) prefix, ‘ter’, ‘quater’, ‘quinque’,
 * etc., before the name of the parent hydride corresponding to the repeating unit. Indicated hydrogen
 * is applied as described above for two-component ring assemblies (see P-28.2.3).
 * Exceptionally, ring assemblies composed of three or more benzene rings are named by using the term
 * ‘phenyl’. …
 * This is a new numbering system recommended for ring assemblies consisting of more than two rings or
 * ring systems. …
 * Note: The elimination of primed locants for preferred IUPAC names is intended to improve the
 * perception of the relationship between structures and names. …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 343, P-28.3.1, line 8. [Corrected 8 October 2025]
 *     For ...usual way. Composite...
 *     read ...usual way provided the lowest locant set is selected and, if a choice remains, in the
 *     order of citation in the name. Composite...
 *   Page 344, P-28.3.1, example 1 on this page. [corrected 23 January 2019]
 *     For (not 1,1′:3′,1′′:2′,1′′′-quatercyclobutane; ...
 *     read (not 1,1′:3′,1′′:2′′,1′′′-quatercyclobutane; ...
 *   Page 344, P-28.3.1, add two new examples after example 4 on this page (example 5 of this section).
 *   [Corrected 8 October 2025]
 *     Add
 *     not
 *     1²,2⁵:2²,3⁴-terpyridine (PIN)
 *     (not 1²,2³:2⁶,3⁴-terpyridine);
 *     the locant set 1²,2²,2⁵,3⁴ is lower than the locant set 1²,2³,2⁶,3⁴)
 *     2,5′:2′,4′′-terpyridine
 *     (not 2,3′:6′,4′′-terpyridine
 *     the locant set 2,2′,5′,4′′ is lower than the locant set 2,6′,3′,4′′)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-28.3.1', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P280301a.gif', pin: '1¹,2¹:2²,3¹-tercyclopropane', otherNames: ['1,1′:2′,1′′-tercyclopropane'] },
  { pin: '1¹,2¹:2²,3¹:3³,4¹-quatercyclobutane', otherNames: ['1,1′:2′,1′′:3′′,1′′′-quatercyclobutane'], notNames: ['1¹,2¹:2³,3¹:3²,4¹-quatercyclobutane', '1,1′:3′,1′′:2′′,1′′′-quatercyclobutane'] },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P280301d.gif', pin: '1²,2²:2⁶,3²:3⁶,4²-quaterpyridine', otherNames: ['2,2′:6′,2′′:6′′,2′′′-quaterpyridine'] },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P280301e.gif', pin: '1¹H,3³H-1³,2³:2³,3³-terindole', otherNames: ['1H,3′′H-3,3′:3′,3′′-terindole'] },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P280301f.gif', pin: '1²H,2²H,2⁴H,3²H-1¹,2¹:2³,3¹-terpyrimidine', otherNames: ['2H,2′H,2′′H,4′H-1,1′:3′,1′′-terpyrimidine'] },
  { pin: '1²,2⁵:2²,3⁴-terpyridine', otherNames: ['2,5′:2′,4′′-terpyridine'], notNames: ['1²,2³:2⁶,3⁴-terpyridine', '2,3′:6′,4′′-terpyridine'] },
  { pin: '1³,2³:2⁵,3⁴-terpyridine', otherNames: ['3,3′:5′,4′′-terpyridine'], notNames: ['1³,2⁵:2³,3⁴-terpyridine', '3,5′:3′,4′′-terpyridine'] },
]);
