/**
 * P-73.1.1.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “General rule for systematically naming cationic centers in parent hydrides
 * A cation derived formally by adding one or more hydrons to any position of a neutral parent hydride
 * (listed in Chapter P-2), or whose degree of hydrogenation has been modified (see P-31) is named by
 * replacing the final letter ‘e’ of the parent hydride name, if any, by the suffix ‘ium’, preceded by
 * multiplying prefixes ‘di’, ‘tri’, etc. to denote the multiplicity of identical cationic centers. …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-73.1.1.2', [
  { formula: '⁺CH5', pin: 'methanium' },
  { formula: '[C6H7]⁺', preselectedName: 'azanium', otherNames: ['benzenium (PIN) H4N⁺', 'ammonium'] },
  { formula: 'H4P⁺', preselectedName: 'phosphanium', otherNames: ['phosphonium'] },
  { formula: 'H3S⁺', preselectedName: 'sulfanium', otherNames: ['sulfonium'] },
  { formula: 'H2Cl⁺', preselectedName: 'chloranium', otherNames: ['chloronium'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73112a.gif', pin: 'tetrafluoro(methyl)-λ⁴-sulfanium', otherNames: ['tetrafluoro(methyl)-λ⁴-sulfonium'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73112b.gif', pin: 'pentamethylhydrazinium', otherNames: ['pentamethyldiazanium'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73112c.gif', pin: '1,2,3-trimethyltrisulfan-2-ium' },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73112d.gif', pin: '2,2-dichloro-1,1,1-trimethyldiphosphan-1-ium' },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73112e.gif', pin: '1-methylpyridin-1-ium' },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73112f.gif', pin: '1H-imidazol-3-ium' },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73112g.gif', pin: '1,1,3,3-tetraphenyl-4,5-dihydro-1H-1,2,3λ⁵-triphosphol-1-ium' },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73112h.gif', pin: 'tetramethyldiazene-1,2-diium' },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73112i.gif', pin: '1,4-dioxane-1,4-diium' },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73112j.gif', pin: 'N,N′-bis(trimethylsilyl)silanebis(aminium)' },
]);
