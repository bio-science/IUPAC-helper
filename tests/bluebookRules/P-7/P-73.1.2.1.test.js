/**
 * P-73.1.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Cationic compounds derived from neutral compounds expressed by suffixes are named in two ways.
 * (1) Cationic suffixes derived from names of acids named by a suffix, amides, imides, nitriles,
 * amines, and imines are formed by adding the suffix ‘ium’ to the basic suffix, as indicated in Table
 * 7.4. …
 * (2) by substituting cationic parent hydrides described in P-73.1.2 when no nitrogen atom is present
 * or when they are nitrogen containing compounds other than those described in (1).
 * Methods (1) and (2) are used to generate preferred IUPAC names as illustrated by the examples below.
 * Note: The term ‘acidium’ covers the two tautomeric structures; individual tautomers are named
 * systematically on the basis of the ‘oxidanium ion’.”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1086, P-73.1.2.1, example 2. [corrected 12 June 2019]
 *     For benzoyltrimethylammonium
 *     read benzoyltri(methyl)ammonium
 *   Page 1086, P-73.1.2.1, example 5. [corrected 12 June 2019]
 *     For (1,4-dithian-2-yl)trimethylammonium
 *     read (1,4-dithian-2-yl)tri(methyl)ammonium
 *   Page 1087, P-73.1.2.1, example 6 on this page. [corrected 12 June 2019]
 *     For (cyclohexanecarbonyl)dimethyloxidanium (PIN)
 *     read (cyclohexanecarbonyl)di(methyl)oxidanium (PIN)
 *     for (cyclohexanecarbonyl)dimethyloxonium
 *     read (cyclohexanecarbonyl)di(methyl)oxonium
 *   Page 1087, P-73.1.2.1, example 7 on this page. [corrected 27 March 2019]
 *     For (1-hydroxyethylidene)(dimethyl)azanium (PIN)
 *     read (1-hydroxyethylidene)di(methyl)azanium (PIN)
 *     for (1-hydroxyethylidene)(dimethyl)ammonium
 *     read (1-hydroxyethylidene)di(methyl)ammonium
 *   Page 1088, P-73.1.2.1, example 1 on this page. [corrected 12 June 2019]
 *     For benzoyldimethylsulfanium
 *     read benzoyldi(methyl)sulfanium
 *     for benzoyldimethylsulfonium
 *     read benzoyldi(methyl)sulfonium
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-73.1.2.1', [
  { formula: '(CH3)4N⁺', pin: 'N,N,N-trimethylmethanaminium', otherNames: ['tetramethylammonium'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73121a.gif', pin: 'N,N,N-trimethylbenzamidium', otherNames: ['benzoyltri(methyl)ammonium'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73121b.gif', pin: 'N′,N′,N′-trimethylbenzohydrazid-N′-ium', otherNames: ['2-benzoyl-1,1,1-trimethylhydrazinium', '2-benzoyl-1,1,1-trimethyldiazan-1-ium'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73121c.gif', pin: '2,2-dimethyl-1,3-dioxo-2,3-dihydro-1H-isoindol-2-ium', otherNames: ['N,N-dimethylphthalimidium'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73121d.gif', pin: 'N,N,N-trimethyl-1,4-dithian-2-aminium' },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73121e.gif', pin: 'benzonitrilium', otherNames: ['benzylidyneammonium', 'benzylidyneazanium'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73121f.gif', pin: 'N,N,N-trimethylanilinium', otherNames: ['N,N,N-trimethylbenzenaminium', 'trimethyl(phenyl)ammonium'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73121g.gif', pin: 'N,N-dimethylguanidinium' },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73121h.gif', pin: 'ethylideneoxidanium', otherNames: ['ethylideneoxonium'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73121i.gif', pin: 'ethyl(propan-2-ylidene)oxidanium', otherNames: ['ethyl(propan-2-ylidene)oxonium'] },
  { pin: 'acetyloxidanium' },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73121l.gif', name: 'acetic acidodiium' },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73121m.gif', notNames: ['O,O-dimethylcyclohexanecarboxylic acidium'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73121n.gif', notNames: ['N,N-dimethylethanimidic acidium'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73121o.gif', pin: 'benzoyldi(methyl)sulfanium', otherNames: ['benzoyldi(methyl)sulfonium'], notNames: ['S,S-dimethylbenzenecarbothioic acidium'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73121p.gif', pin: '2-benzoyldioxidan-1-ium', notNames: ['peroxybenzoic OO-acidium'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73121q.gif', pin: 'acetyl(methyl)chloranium' },
]);
