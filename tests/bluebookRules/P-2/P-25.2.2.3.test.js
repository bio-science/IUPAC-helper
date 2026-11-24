/**
 * P-25.2.2.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Pheno...ine components
 * A heterotricyclic parent component consisting of two benzene rings fused to a 1,4-dihetera-benzene
 * in which the heteroatoms are different is named by adding the prefix ‘pheno’ (derived from
 * phenanthrene) to the appropriate Hantzsch-Widman name (see P- 22.2.2), eliding the ‘o’ before a
 * following vowel. Numbering is standard and depends on the nature of the heteroatoms. Rules for
 * numbering are described in Section P-25.3.3.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-25.2.2.3', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250202f.gif', pin: 'X = P phenazaphosphinine', otherNames: ['phenophosphazine'] },
  { pin: 'X = As phenazarsinine', otherNames: ['phenarsazine'] },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250202g.gif', pin: 'X = S phenoxathiine' },
  { pin: 'X = Se phenoxaselenine' },
  { pin: 'X = Te phenoxatellurine' },
  { pin: 'X = PH phenoxaphosphinine', otherNames: ['phenoxaphosphine (10H-isomer shown)'] },
  { pin: 'X = AsH phenoxarsinine', otherNames: ['phenoxarsine (10H-isomer shown)'] },
  { pin: 'X = SbH phenoxastibinine', otherNames: ['phenoxantimonine (10H-isomer shown)'] },
]);
