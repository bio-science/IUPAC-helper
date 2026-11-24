/**
 * P-64.7.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Ketones, pseudoketones and heterones, and their chalcogen analogues in the order =O > =S > =Se >
 * =Te, are senior to hydroxy compounds and their chalcogen analogues, amines, and imines in the
 * seniority order of classes. In the presence of a characteristic group having priority to be cited as
 * suffix as described in P-64.5 and P-64.6, they are cited as prefixes (see P-41).”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   P-64.7.1, example 2. [corrected 19 October 2026]
 *     For 6-hydroxy-8-methyltropan-3-one
 *     read 6-hydroxytropan-3-one
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-64.7.1', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640701a.gif', pin: '2,6-dihydroxy-3,5-dimethylideneheptan-4-one' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640701b.gif', pin: '3-oxobutanoic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640701c.gif', name: '6-hydroxy-8-methyl-8-azabicyclo[3.2.1]octan-3-one' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640701d.gif', pin: '1-hydroxy-1H-pyrrole-2,5-dione' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640701e.gif', pin: '3-aminoazepan-2-one' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640701f.gif', pin: '3-imino-2,3-dihydro-1H-isoindol-1-one' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640701g.gif', pin: '3-methyl-4-(morpholin-4-yl)-2,2-diphenyl-1-(pyrrolidin-1-yl)butan-1-one' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640701h.gif', name: '1-[4-(3,4-dihydroisoquinoline-2(1H)-carbonyl)piperidin-1-yl]-2,2,3,3,4,4,5,5,6,6,7,7,8,8,8-pentadecafluorooctan-1-one (PIN,' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640701i.gif', pin: '2,5-dichloro-3,6-dihydroxycyclohexa-2,5-diene-1,4-dione', otherNames: ['2,5-dichloro-3,6-dihydroxy-1,4-benzoquinone'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640701j.gif', pin: '1,8-dihydroxy-3-methylanthracene-9,10-dione', otherNames: ['1,8-dihydroxy-3-methyl-9,10-anthraquinone'] },
]);
