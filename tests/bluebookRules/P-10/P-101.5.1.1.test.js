/**
 * P-101.5.1.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “A ring or ring system considered as a mancude parent hydride in accordance with the rules
 * prescribed in Chapter P-2, carbocyclic or heterocyclic, fused to a parent structure is described by
 * its fusion prefix name (see P-25) preceding the name of the fundamental parent structure. The
 * skeletal atoms of the parent structure involved in the fusion are identified by plain (unprimed)
 * locants and not by italicized letters ‘a’, ‘b’, etc.; …
 * Terminal vowels, ‘o’ or ‘a’, in the name of the prefix are not elided when followed by a vowel, as
 * prescribed for normal fusion nomenclature in P-25.3.1.3.
 * No elision of vowels is a change from previous recommendations.”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1321, P-101.5.1.1, example 3. [corrected 9 January 2019]
 *     Replace the structure with:
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-101.5.1.1', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101511a.gif', name: 'benzo[2,3]-5α-androstane' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101511b.gif', name: 'naphtho[2′,1′:2,3]-5α-androstane' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101511c.gif', notNames: ['isothiazolo[5′,4′,3′:4,5,6]cholestane'] },
]);
