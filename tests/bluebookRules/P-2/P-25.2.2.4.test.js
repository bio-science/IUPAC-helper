/**
 * P-25.2.2.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Heteromonocyclic components fused to a benzene ring
 * If the initial identified preferred components for naming a fused ring system include an isolated
 * benzo component (i.e. not forming part of a component with a retained name such as quinoline or
 * anthracene) ortho-fused to a heteromonocyclic component of five or more members, these two
 * components are treated together as a one-component unit (a benzoheterocycle). See P-25.3.5 for the
 * use of benzoheterocycles in fusion nomenclature and limitations on its use. …
 * ‘Benzo names’ offer several advantages. They are simpler in the sense that they do not require
 * fusion descriptors. However, their primary advantage is in their use as components of fusion names;
 * …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 217, P-25.2.2.4, lines 1/2. [corrected 22 April 2020]
 *     For Unless listed as a retained name in Table 2.8, for example quinoline and cinnoline, a
 *     benzene ring fused to a heteromonocycle of five or more members (a benzoheterocycle) is named...
 *     read If the initial identified preferred components for naming a fused ring system include an
 *     isolated benzo component (i.e. not forming part of a component with a retained name such as
 *     quinoline or anthracene) ortho-fused to a heteromonocyclic component of five or more members,
 *     these two components are treated together as a one-component unit (a benzoheterocycle). See
 *     P-25.3.5 for the use of benzoheterocycles in fusion nomenclature and limitations on its use.. It
 *     is named....
 *   Page 218, P-25.2.2.4, example 1. [corrected 26 January 2022]
 *     Delete 3-benzooxepine
 *   Page 218, P-25.2.2.4, example 2. [corrected 26 January 2022]
 *     Delete 4H-3,1-benzooxazine
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-25.2.2.4', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250202h.gif', pin: '3-benzoxepine', otherNames: ['benzo[d]oxepine'] },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250202i.gif', pin: '4H-3,1-benzoxazine', otherNames: ['4H-benzo[d][1,3]oxazine'] },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250202j.gif', pin: '1-benzofuran', otherNames: ['benzofuran'] },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250202k.gif', pin: '2-benzofuran', otherNames: ['isobenzofuran', 'benzo[c]furan'] },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250202l.gif', pin: '5,12-benzodioxacyclooctadecine', otherNames: ['benzo[m][1,8]dioxacyclooctadecine'] },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250202m.gif', pin: '1H-3-benzazacycloundecine', otherNames: ['1H-benzo[h][1]azacycloundecine', '1H-3-benzoazacycloundecine'] },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250202n.gif', pin: '9,2,5-benzoxathiaazacyclododecine', otherNames: ['benzo[j][1,8,5]oxathiaazacyclododecine'], notNames: ['2,9,6-benzoxathiaazacyclododecine'] },
]);
