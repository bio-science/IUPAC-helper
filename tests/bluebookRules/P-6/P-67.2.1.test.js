/**
 * P-67.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Preselected names
 * The following traditional names are retained as preselected names (for consistency in the names of
 * polynuclear oxoacids, the numerical infix ‘di’ has been uniformly used in naming dinuclear ‘hypo’
 * acids). Although the ‘meta’ acids are for general nomenclature only, they are preselected names if
 * the structure is unknown.
 * For consistency in the names of polynuclear oxoacids, the numerical infix ‘di’ has been uniformly
 * used in naming dinuclear ‘hypo’ acids, for example, hypodiphosphorous acid, rather than …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 949, P-67.2.1, example 8. [corrected 25 August 2016]
 *     For HO)2P(O)-O-P(O)(OH)2
 *     read (HO)2P(O)-O-P(O)(OH)2
 *   Page 949, P-67.2.1, example 10. [corrected 25 August 2016]
 *     For HO)2P-O-P(OH)2
 *     read (HO)2P-O-P(OH)2
 *   Page 949, P-67.2.1, last example on this page. [corrected 25 August 2016]
 *     For HO)2As(O)-O-As(O)(OH)2
 *     read (HO)2As(O)-O-As(O)(OH)2
 *   Page 950, P-67.2.1, example 2 on this page. [corrected 25 August 2016]
 *     For HO)2As-O-As(OH)2
 *     read (HO)2As-O-As(OH)2
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-67.2.1', [
  { formula: '(HO)2B-O-B(OH)2', preselectedName: 'diboric acid' },
  { formula: '(HO)2B-B(OH)2', preselectedName: 'hypodiboric acid' },
  { formula: '(HO)3Si-O-Si(OH)3', preselectedName: 'disilicic acid' },
  { formula: '(HO)HP(O)-O-HP(O)(OH)', preselectedName: 'diphosphonic acid' },
  { formula: '(HO)(O)HP-PH(O)(OH)', preselectedName: 'hypodiphosphonic acid' },
  { formula: 'HO-PH-O-PH-OH', preselectedName: 'diphosphonous acid' },
  { formula: '(HO)HP-PH(OH)', preselectedName: 'hypodiphosphonous acid' },
  { formula: '(HO)2P(O)-O-P(O)(OH)2', preselectedName: 'diphosphoric acid' },
  { formula: '(HO)2(O)P-P(O)(OH)2', preselectedName: 'hypodiphosphoric acid' },
  { formula: '(HO)2P-O-P(OH)2', preselectedName: 'diphosphorous acid' },
  { formula: '(HO)2P-P(OH)2', preselectedName: 'hypodiphosphorous acid' },
  { formula: '(HO)HAs(O)-O-HAs(O)(OH)', preselectedName: 'diarsonic acid' },
  { formula: '(HO)(O)HAs-HAs(O)(OH)', preselectedName: 'hypodiarsonic acid' },
  { formula: 'HO-AsH-O-AsH-OH', preselectedName: 'diarsonous acid' },
  { formula: '(HO)HAs-AsH(OH)', preselectedName: 'hypodiarsonous acid' },
  { formula: '(HO)2As(O)-O-As(O)(OH)2', preselectedName: 'diarsoric acid', otherNames: ['diarsenic acid'] },
  { formula: '(HO)2(O)As-As(O)(OH)2', preselectedName: 'hypodiarsoric acid', otherNames: ['hypodiarsenic acid'] },
  { formula: '(HO)2As-O-As(OH)2', preselectedName: 'diarsorous acid', otherNames: ['diarsenous acid'] },
  { formula: '(HO)2As-As(OH)2', preselectedName: 'hypodiarsorous acid', otherNames: ['hypodiarsenous acid'] },
  { formula: '(HO)HSb(O)-O-HSb(O)(OH)', preselectedName: 'distibonic acid' },
  { formula: '(HO)(O)HSb-HSb(O)(OH)', preselectedName: 'hypodistibonic acid' },
  { formula: 'HO-SbH-O-SbH-OH', preselectedName: 'distibonous acid' },
  { formula: '(HO)HSb-SbH(OH)', preselectedName: 'hypodistibonous acid' },
  { formula: '(HO)2Sb(O)-O-Sb(O)(OH)2', preselectedName: 'distiboric acid' },
  { formula: '(HO)2(O)Sb-Sb(O)(OH)2', preselectedName: 'hypodistiboric acid' },
  { formula: '(HO)2Sb-O-Sb(OH)2', preselectedName: 'distiborous acid' },
  { formula: '(HO)2Sb-Sb(OH)2', preselectedName: 'hypodistiborous acid' },
  { formula: 'HO-SO2-O-SO2-OH', preselectedName: 'disulfuric acid' },
  { formula: 'HO-SO2-SO2-OH', preselectedName: 'dithionic acid', otherNames: ['hypodisulfuric acid'] },
  { formula: 'HO-SO-SO-OH', preselectedName: 'dithionous acid', otherNames: ['hypodisulfurous acid'] },
  { formula: '[HAsO3]n = (-As(O)(OH)O-)n', name: 'metaarsoric acid' },
  { formula: '[HAsO2]n = (-As(OH)O-)n', name: 'metaarsorous acid' },
  { formula: '[HBO]n = (-B(OH)O-)n', name: 'metaboric acid' },
  { formula: '[HPO3]n = (-P(O)(OH)O-)n', name: 'metaphosphoric acid' },
  { formula: '[HPO2]n = (-P(OH)O-)n', name: 'metaphosphorous acid' },
  { formula: '[H2SiO3]n = (-Si(OH)2O-)n', name: 'metasilicic acid' },
  { formula: '[HSbO3]n = (-Sb(O)(OH)O-)n', name: 'metastiboric acid' },
  { formula: '[HSbO2]n = (-Sb(OH)O-)n', name: 'metastiborous acid' },
  { formula: '(HO)HP(O)-O-HP(O)-O-HP(O)(OH)', preselectedName: 'triphosphonic acid' },
  { formula: '(HO)2P(O)-O-P(O)(OH)-O-P(O)(OH)2', preselectedName: 'triphosphoric acid' },
  { formula: 'HO-SO2-O-SO2-O-SO2-OH', preselectedName: 'trisulfuric acid' },
]);
