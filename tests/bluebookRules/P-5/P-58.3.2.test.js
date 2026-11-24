/**
 * P-58.3.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “When one or more atoms of a homogeneous heteroatomic chain can be expressed by a principal
 * characteristic group, a functional parent compound, or a compulsory prefix, the principal
 * characteristic group or compulsory prefix group is expressed. Hence, an acyclic homogeneous
 * heterocyclic chain may be broken in order to recognize a senior function as a principle
 * characteristic groups, functional parent compound, or compulsory prefix.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 627, P-58.3.2, example 2. [modified 3 June 2020]
 *     For N-triazan-1-ylbenzamide (PIN)
 *     read N-(triazan-1-yl)benzamide (PIN)
 *     for (not phenyl(tetraazan-1-yl)methanone; nor 1-benzoyltetraazane)
 *     read [not phenyl(tetraazan-1-yl)methanone; nor 1-benzoyltetraazane]
 *   Page 627, P-58.3.2, example 3. [modified 3 June 2020]
 *     For tetrazane-1-carboxylic acid (PIN)
 *     read tetraazane-1-carboxylic acid (PIN)
 *     for (not triazan-1-ylcarbamic acid; the carboxylic acid is senior to the carbonic acid
 *     derivative)
 *     read [not (triazan-1-yl)carbamic acid; the carboxylic acid is senior to the carbonic acid
 *     derivative]
 *   Page 627, P-58.3.2, example 9. [corrected 24 March 2021]
 *     For N-isocyanatonitramide
 *     read isocyanatonitramide
 *   Page 628, P-58.3.2, example 1 on this page. [corrected 19 September 2018]
 *     For [not trisulfanyl benzenecarbothiaote;
 *     read [not trisulfanyl benzenecarbothioate;
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-58.3.2', [
  { formula: 'HS-SO2-S-S-S-SO2-SH', preselectedName: 'trisulfanedisulfonothioic S-acid', notNames: ['heptasulfane-2,2,6,6-tetrone'] },
  { formula: 'H2N-NH-NH-NH-CO-C6H5', pin: 'N-(triazan-1-yl)benzamide', notNames: ['phenyl(tetraazan-1-yl)methanone'] },
  { formula: 'H2N-NH-NH-NH-COOH', pin: 'tetraazane-1-carboxylic acid', notNames: ['(triazan-1-yl)carbamic acid'] },
  { formula: 'CH3-NH-N(COOH)-NH-CH3', pin: '1,3-dimethyltriazane-2-carboxylic acid', notNames: ['bis(methylamino)carbamic acid'] },
  { formula: '(CH3)2P-P(OH)-P(CH3)2', pin: 'bis(dimethylphosphanyl)phosphinous acid', notNames: ['1,1,3,3-tetramethyltriphosphan-2-ol'] },
  { formula: 'H2N-NO', preselectedName: 'nitrous amide', notNames: ['hydrazinone'] },
  { formula: 'H2N-NH-NH-NCO', pin: '1-isocyanatotriazane', notNames: ['1-(oxomethylidene)tetraazane'] },
  { formula: 'C6H5-CO-NH-NH-NH-NH-CO-C6H5', pin: 'N,N′-(hydrazine-1,2-diyl)dibenzamide' },
  { formula: 'OCN-NH-NO2', pin: 'N-isocyanatonitramide' },
  { formula: 'HS-S-S-S-CO-C6H5', pin: 'phenyl(tetrasulfanyl)methanone', notNames: ['trisulfanyl benzenecarbothioate'] },
]);
