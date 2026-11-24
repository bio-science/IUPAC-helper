/**
 * P-101.5.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Rings and ring systems incorporated by bridged fused ring nomenclature
 * Atomic bridges added to fundamental parent structures may be described by the methods used in fusion
 * nomenclature for bridged fused ring systems. The names of the bridges are those prescribed in
 * P-25.4. This method is often used with heteroatom bridges. …
 * Explanation: The inversion of configuration at C-13 is not counted as an operation since it is not
 * modifying the skeleton of the molecule.
 * Contrary to the recommendations for systematic nomenclature of organic compounds, in carotenoid
 * nomenclature (see ref. …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1325, P-101.5.2, example 3 on this page. [corrected 17 April 2019]
 *     For (7α,8α,8′β,9′α)-7,9a′:8′,9-diepoxy-7-oxa-9a′-homo-8,9′-neolignane
 *     read (7α,8α,8′β,9′α)-7,9a′:8′,9-diepoxy-7′-oxa-9a′-homo-8,9′-neolignane
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-101.5.2', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101520a.gif', name: '4,5α-epoxymorphinan' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101520b.gif', name: '3α,8-epidioxy-5α,8α-androstane' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101520c.gif', name: '16α,17-epithio-5α-pregnane' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101520d.gif', name: '11α,18-ethano-5α,13α-pregnane' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101520e.gif', name: '8,9′-neolignane' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101520g.gif', name: 'β,β-carotene' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101520h.gif', name: '5,8:5′,8′-diepoxy-5,8,5′,8′-tetrahydro-β,β-carotene' },
]);
