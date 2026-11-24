/**
 * P-102.6.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Substituent groups other than glycosyl groups
 * A hydrogen atom may be removed from any position of a monosaccharide other than C-1. This formation
 * of a free valence is denoted by the suffix ‘yl’, but a locant is necessary to indicate the position
 * of the free valence and to distinguish such a name from that of glycosyl substituents for which the
 * locant ‘1’ is omitted. These prefixes can be formed by replacing the final letter ‘e’ of the
 * systematic or trivial name of a monosaccharide by n-C-yl, n-O-yl. …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-102.6.2', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102620a.gif', name: '1-deoxy-D-fructos-1-yl' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102620b.gif', name: '2-amino-2-deoxy-D-glucos-2-C-yl' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102620c.gif', name: 'D-glucos-2-C-yl' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102620d.gif', name: 'methyl β-D-ribopyranosid-2-O-yl' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102620e.gif', notNames: ['2-O-(carboxymethyl)-β-D-glucopyranose'] },
]);
