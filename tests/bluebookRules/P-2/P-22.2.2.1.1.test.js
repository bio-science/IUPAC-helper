/**
 * P-22.2.2.1.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Hantzsch-Widman names are formed by combining skeletal replacement (‘a’) prefix(es) for the
 * heteroatom(s) (Table 2.4) with a stem indicating the size of the ring and the degree of
 * hydrogenation (Table 2.5). The final ‘a’ vowel between ‘a’ prefixes and between the ‘a’ prefix and
 * the stem are elided. Unsaturated compounds are those having the maximum number of noncumulative
 * double bonds (mancude compounds) and at least one double bond. …
 * Hantzsch-Widman names, except for azine and oxine, are preferred IUPAC names for both the
 * unsaturated and saturated compounds. …
 * Hantzsch-Widman names are preselected names for homogeneous heteromonocycles other than hydrocarbons
 * (see P-22.2.5).
 * The final ‘e’ in Hantzsch-Widman names is required in preferred IUPAC names; it is still optional in
 * general nomenclature. In the 1979 Rules (ref. …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-22.2.2.1.1', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P220202a.gif', pin: 'thiepine' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P220202b.gif', pin: 'oxocane' },
  { name: 'aluma¹', notNames: ['alumina'] },
  { name: 'indiga¹', notNames: ['inda'] },
]);
