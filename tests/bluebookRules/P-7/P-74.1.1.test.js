/**
 * P-74.1.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Ionic centers in the same parent structure
 * Zwitterionic compounds with the ionic centers in the same parent structure may be named by combining
 * appropriate cumulative suffixes at the end of the name of a parent hydride in the order ‘ium’,
 * ‘ylium’, ‘ide’, ‘uide’. This method is preferred to the one using ionic replacement prefixes, as
 * indicated in Sections P-72.4 and P-73.4. In either case anionic suffixes are cited after cationic
 * suffixes in the name, and are given seniority for low locants. …
 * For nomenclature purposes, zwitterionic compounds having the ionic centers in the same parent
 * structure are not considered as neutral compounds. …
 * Note: For the name of this structure drawn as an intramolecular adduct, see P-68.1.6.2.”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1109, P-74.1.1, example 1 on this page. [corrected 9 January 2019]
 *     For 5H-11λ⁵-5H-indolo[2,3-b]quinolizin-11-ylium-5-ide (PIN)
 *     read 5H-11λ⁵-indolo[2,3-b]quinolizin-11-ylium-5-ide (PIN)
 *   Page 1109, P-74.1.1, example 3 on this page.. [modified 12 May 2021]
 *     For 6,6-dihydroxy-6,11-dihydro-5λ⁵-benzimidazolo[1,2-b][2,1]benzazaborol-5-ylium-6-uide (PIN)
 *     read 6,6-dihydroxy-6,11-dihydro-5λ⁵-benzimidazolo[1,2-b][2,1]benzazaborol-5-ylium-6-uide
 *     add 6,6-dihydroxy-6,11-dihydro-5λ⁵-[1,3]benzimidazolo[1,2-b][2,1]benzazaborol-5-ylium-6-uide
 *     (PIN)
 *   Page 1109, P-74.1.1, example 4 on this page. [modified 21 November 2018]
 *     For 2-methyl-4-oxo-3,4-dihydro-1H-2-selenobenzopyran -2-ium-3-ide (PIN)
 *     read 2-methyl-4-oxo-3,4-dihydro-1H-2-benzoselenopyran-2-ium-3-ide (PIN)
 *     for not 2-methyl-3,4-dihydro-1H-2-selenobenzopyran-2-ium-3-id-4-one
 *     read not 2-methyl-3,4-dihydro-1H-2-benzoselenopyran-2-ium-3-id-4-one
 *     for 2-methyl-4-oxo-3,4-dihydro-1H-isoselenochromen-2-ium-3-ide (PIN)
 *     read 2-methyl-4-oxo-3,4-dihydro-1H-isoselenochromen-2-ium-3-ide
 *   Page 1110, P-74.1.1, example 1 on this page. [corrected 14 November 2018]
 *     For
 *     5λ⁵,7λ⁵-spiro[1,3,2-diazaborolo[3,4-a:5,1-a′]dipyridine-6,10′-phenoxaborinine]-5,7-bis(ylium)-6-uide
 *     read
 *     5λ⁵,7λ⁵-spiro[[1,3,2]diazaborolo[3,4-a:5,1-a′]dipyridine-6,10′-phenoxaborinine]-5,7-bis(ylium)-6-uide
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-74.1.1', [
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P74110a.gif', pin: '1,2,2,2-tetramethylhydrazin-2-ium-1-ide' },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P74110b.gif', pin: '5H-11λ⁵-indolo[2,3-b]quinolizin-11-ylium-5-ide' },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P74110c.gif', pin: '2,2-diphenyl-4λ⁵-[1,3,4,2]dioxazaborolo[4,5-a]pyridin-4-ylium-2-uide' },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P74110d.gif', name: '6,6-dihydroxy-6,11-dihydro-5λ⁵-[1,3]benzimidazolo[1,2-b][2,1]benzazaborol-5-ylium-6-uide (PIN) 6,6-dihydroxy-6,11-dihydro-5λ⁵-benzimidazolo[1,2-b][2,1]benzazaborol-5-ylium-6-uide' },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P74110e.gif', pin: '2-methyl-4-oxo-3,4-dihydro-1H-2-benzoselenopyran-2-ium-3-ide', otherNames: ['2-methyl-4-oxo-3,4-dihydro-1H-isoselenochromen-2-ium-3-ide'], notNames: ['2-methyl-3,4-dihydro-1H-2-benzoselenopyran-2-ium-3-id-4-one', '2-methyl-3,4-dihydro-1H-isoselenochromen-2-ium-3-id-4-one'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P74110f.gif', pin: '5λ⁵,7λ⁵-spiro[[1,3,2]diazaborolo[3,4-a:5,1-a′]dipyridine-6,10′-phenoxaborinine]-5,7-bis(ylium)-6-uide' },
]);
