/**
 * P-65.6.3.5.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Lactones
 * Intramolecular esters of hydroxy carboxylic acids are ‘lactones’ and are named in three ways.
 * (1) as heterocyclic pseudoketones by adding the suffix ‘one’, ‘dione’, ‘thione’, etc. and the
 * appropriate multiplicative prefixes to the name of the heterocyclic parent hydride;
 * (2) by changing the ‘ic acid’ ending of a systematic ‘oic acid’ name for the nonhydroxylated parent
 * acid to ‘lactone’, and inserting a locant designating the position of the hydroxy group between the
 * …
 * (3) by citing the term ‘carbolactone’ denoting the group –O-CO– in a ring or ring system after the
 * name of the appropriate parent hydride preceded by a pair of locants describing the points of …
 * Method (1) gives preferred IUPAC names.
 * A lactone, as a pseudoketone, ranks lower in the seniority of classes than an acid or an ester, but
 * higher than an alcohol, amine, or imine.”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 823, P-65.6.3.5.1, example 2 on this page. [corrected 6 March 2019]
 *     For 2-oxohexahydro-2H-benzooxete-5,6-dicarboxylic acid
 *     read 2-oxohexahydro-2H-benzoxete-5,6-dicarboxylic acid
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.6.3.5.1', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650603bq.gif', pin: 'oxolan-2-one', otherNames: ['tetrahydrofuran-2-one', 'butano-4-lactone'], notNames: ['γ-butyrolactone'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650603br.gif', pin: '1-oxacyclododecan-2-one', otherNames: ['undecano-11-lactone'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650603bs.gif', pin: 'oxolane-2-thione' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650603bt.gif', pin: 'phenanthro[1,10-bc:9,8-b′c′]difuran-2,10-dione', otherNames: ['phenanthrene-1,10:9,8-dicarbolactone'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650603bu.gif', pin: '8-oxo-7-oxabicyclo[4.2.0]octane-4,5-dicarboxylic acid', otherNames: ['2-oxohexahydro-2H-benzooxete-5,6-dicarboxylic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650603bv.gif', pin: 'ethyl 3-(2-oxooxan-3-yl)propanoate', otherNames: ['ethyl 3-(2-oxo-3,4,5,6-tetrahydro-2H-pyran-3-yl)propanoate'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650603bw.gif', pin: '2-sulfanylideneoxolane-3-carbonitrile' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650603bx.gif', pin: '5-hydroxyoxolan-2-one' },
]);
