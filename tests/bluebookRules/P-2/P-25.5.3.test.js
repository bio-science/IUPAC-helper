/**
 * P-25.5.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Use of bridging nomenclature
 * A bridged fused system (see Section P-25.4) is used to generate names for structures that cannot be
 * named by normal fusion nomenclature. A fused system is first envisaged; additional rings are created
 * by using bridges.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 186, P-25.5.3, line 4/8. [corrected 8 May 2019]
 *     For Locants present in bicyclic fused benzo ring components are cited directly in front of the
 *     component and name when they correspond to the numbering of the spiro ring system; when they do
 *     not correspond to those of the spiro ring system, they are placed in brackets (see third and
 *     fourth examples below).
 *     read All locants present in a bicyclic fused benzo ring component or Hantzsch-Widman named
 *     component are placed in brackets (without primes for the second component, see third and fourth
 *     examples below).
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-25.5.3', [
  { pin: '12,19:13,18-di(metheno)dinaphtho[2,3-a:2′,3′-o]pentaphene' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250503c.gif', pin: '1-oxa-5,9,2-(epiethane[1,1,2]triyl)cycloocta[cd]pentalene' },
]);
