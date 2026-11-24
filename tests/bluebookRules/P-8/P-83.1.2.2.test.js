/**
 * P-83.1.2.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “All rules given in P-82 to construct names of isotopically substituted compounds are applicable to
 * construct names of specifically labeled compounds, with the exception that the isotopic descriptor
 * is placed in brackets and parentheses are used around complex prefixes. For examples of geminal
 * dicarboxylic acids, see P-82.2.2.2.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1147, P-83.1.2.2, example 2. [modified 7 August 2019]
 *     For 3-carboxy-5-[¹³C]carboxybenzene-1-[¹⁸O]carboxylic acid (PIN)
 *     read 3-[¹³C]carboxy-5-carboxybenzene-1-[¹⁸O]carboxylic acid (PIN)
 *     replace the structure with:
 *   Page 1147, P-83.1.2.2, example 3. [corrected 8 July 2020]
 *     For (not benzene-1,3,5-[1,5-¹³C2,1,3-¹⁸O2]tricarboxylic acid)
 *     read (not benzene-1,3,5-[1,3-¹³C2,1,5-¹⁸O2]tricarboxylic acid)
 *   Page 1148, P-83.1.2.2, example 4 on this page. [modified 19 June 2019]
 *     For 2-[¹⁵N]amino-3-hydroxy[2,3-²H2 ,3-¹⁴C]propanoic acid
 *     read (2S)-2-[¹⁵N]amino-3-hydroxy[2,3-²H2,3-¹⁴C]propanoic acid [delete space from name]
 *   Page 1148, P-83.1.2.2, example 6 on this page. [corrected 19 September 2018]
 *     For O-ethyl ¹⁸O-methyl naphthlene-2-yl[¹⁸O]phosphonate (PIN)
 *     read O-ethyl ¹⁸O-methyl naphthlen-2-yl[¹⁸O]phosphonate (PIN)
 *   Page 1148, P-83.1.2.2, example 5 on this page. [corrected 1 December 2021]
 *     For ...(see P-82.6.3.2)
 *     read ...(see P-82.6.3.3)
 *   Page 1148, P-83.1.2.2, example 6 on this page [modified 30 March 2022]
 *     For O-ethyl ¹⁸O-methyl naphthalene-2-yl[¹⁸O]phosphonate (PIN)
 *     read O-ethyl ¹⁸O-methyl (naphthalene-2-yl)[¹⁸O]phosphonate (PIN)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-83.1.2.2', [
  // Drawn in the Blue Book.
  { drawing: 'P8gif/P83122a.gif', pin: 'benzene-1,3,5-tri([¹³C]carboxylic acid)', notNames: ['benzene-1,3,5-[1,3,5-¹³C3]tricarboxylic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P8gif/P83122b.gif', pin: '3-[¹³C]carboxy-5-carboxybenzene-1-[¹⁸O]carboxylic acid', notNames: ['benzene-1,3,5-[3-¹³C,1-¹⁸O]tricarboxylic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P8gif/P83122c.gif', pin: '3-[¹³C]carboxy-5-[¹⁸O]carboxybenzene-1-[¹³C,¹⁸O]carboxylic acid', notNames: ['benzene-1,3,5-[1,3-¹³C2,1,5-¹⁸O2]tricarboxylic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P8gif/P83122d.gif', pin: '2-carboxy[1-¹⁴C]benzene-1-[¹⁴C]carboxylic acid', notNames: ['[1-¹⁴C]benzene-1,2-[1-¹⁴C]dicarboxylic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P8gif/P83122e.gif', name: 'di([4-²H]benzoyl) peroxide' },
  // Drawn in the Blue Book.
  { drawing: 'P8gif/P83122f.gif', name: 'L-[3-¹⁴C,2,3-²H2,¹⁵N]serine' },
  // Drawn in the Blue Book.
  { drawing: 'P8gif/P83122g.gif', pin: '1-(naphthalen-2-yl)-2-phenyl[2-¹⁵N]diazene', otherNames: ['naphthalene-2-[N=¹⁵N]azobenzene'] },
  // Drawn in the Blue Book.
  { drawing: 'P8gif/P83122h.gif', pin: 'O-ethyl ¹⁸O-methyl (naphthalen-2-yl)[¹⁸O]phosphonate' },
  // Drawn in the Blue Book.
  { drawing: 'P8gif/P83122i.gif', name: '2-[(1-carboxyethyl)amino][1-¹⁵N]pyrazine 1-oxide' },
]);
