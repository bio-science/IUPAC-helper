/**
 * P-102.5.2.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Systematic carbohydrate names
 * The systematic carbohydrate names of ketoses having four through six carbon atoms are formed from
 * the stem name and the appropriate configurational prefix listed in Table 10.3. The stem names are
 * formed from the corresponding aldoses stem names by replacing the ending ‘ose’ with ‘ulose’,
 * preceded by the locant of the carbonyl group, e.g. ‘pent-2-ulose’ and ‘hex-3-ulose’. The chain is
 * numbered so that the carbonyl group receives the lowest possible locant. …
 * For 2-ketoses, configurational prefixes are given in the same way as for aldoses.
 * Substitutive names are given after the ‘systematic carbohydrate names’ to illustrate the two types
 * of systematic names that are recommended in carbohydrate nomenclature.
 * For ketoses with the carbonyl group at C-3, or at a higher-numbered carbon atom, the carbonyl group
 * is ignored and the set of chirality centers is given the appropriate prefix or prefixes according …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1361, P-102.5.2.3, example 1 left structure on this page. [corrected 3 October 2018]
 *     For [not D-threo-D-allo-non-5-ulose; ...
 *     read [not D-threo-D-allo-non-5-ulose; ...
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-102.5.2.3', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102523a.gif', name: 'L-xylo-hex-2-ulose' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102523b.gif', name: 'L-glycero-D-manno-oct-2-ulose' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102523c.gif', name: 'D-arabino-hex-3-ulose' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102523d.gif', name: 'L-threo-D-allo-non-3-ulose' },
  { name: 'L-gluco-hept-4-ulose', notNames: ['D-gulo-hept-4-ulose', '(2S,3S,5S,6R)-1,2,3,5,6,7-hexahydroxyheptan-4-one'] },
  { name: 'L-erythro-L-gluco-non-5-ulose', notNames: ['D-threo-D-allo-non-5-ulose'] },
]);
