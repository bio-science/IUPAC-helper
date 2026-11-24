/**
 * P-72.6.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Systematically formed prefixes that include anionic center(s)
 * These prefixes are formed by adding the cumulative suffixes ‘yl’ or ‘ylidene’ to the name of the
 * parent anion, with elision of the final letter ‘e’ in the name of the parent anion. Multiplying
 * prefixes ‘di’, ‘tri’, etc, are used to denote multiplicity of free valences. Where there is a
 * choice, low locants are assigned to the free valences.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-72.6.3', [
  { formula: '–CH2⁻', preferredPrefix: 'methanidyl' },
  { formula: '–NH⁻', preselectedPrefix: 'azanidyl' },
  { formula: '–N²⁻', preselectedPrefix: 'azanediidyl' },
  { formula: '–BH3⁻', preselectedPrefix: 'boranuidyl' },
  { formula: '=N⁻', preselectedPrefix: 'azanidylidene' },
  { formula: '–S-S⁻', preselectedPrefix: 'disulfanidyl' },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P72630a.gif', preferredPrefix: 'cyclopenta-1,4-dien-3-ide-1,2-diyl' },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P72630b.gif', preferredPrefix: '2H-2-benzoborol-2-uid-2-ylidene' },
]);
