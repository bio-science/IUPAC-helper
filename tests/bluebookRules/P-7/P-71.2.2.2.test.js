/**
 * P-71.2.2.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “General method
 * With the exception of the radicals named in P-71.2.2.1, the names of divalent and trivalent radicals
 * derived by the removal of two or three hydrogen atoms from one position of a parent hydride are
 * formed by adding the suffixes ‘-ylidene’ or ‘-diyl’ and ‘-ylidyne’ or ‘-triyl’, respectively, to the
 * name of the parent hydride, with elision of the final letter ‘e’, if present. The name azanylidene
 * is the preselected name for HN²•; …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-71.2.2.2', [
  { formula: 'HN²•', preselectedName: 'azanylidene', otherNames: ['azanediyl', 'aminylidene', 'aminylene', 'nitrene'] },
  { formula: 'H2P³•', preselectedName: 'λ⁵-phosphanylidyne', otherNames: ['λ⁵-phosphanetriyl', 'phosphoranylidyne', 'phosphoranetriyl'] },
  { formula: 'H2N-N²•', preselectedName: 'hydrazinylidene', otherNames: ['diazanylidene', 'hydrazine-1,1-diyl', 'diazane-1,1-diyl'], notNames: ['aminonitrene'] },
  { formula: 'H2P-P²•', preselectedName: 'diphosphanylidene', otherNames: ['diphosphane-1,1-diyl'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P71222a.gif', pin: '4H-thiopyran-4-ylidene', otherNames: ['4H-thiopyran-4,4-diyl'] },
]);
