/**
 * P-25.4.3.4.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Selection of fused ring system to be bridged
 * If there is a choice for selecting the fused ring system to be bridged, the criteria in the
 * following list are applied in order until a complete decision is reached. Two structures might
 * differ in the distribution of double bonds as described in P-25.4.3.4.1. Locants of the fused ring
 * system where bridges are attached are then cited in front of the name of the bridge and in the same
 * order as the locants for the free valences of the bridge (see P-25.4.3.2.2). …
 * (a) contain the maximum number of rings;
 * (b) include the maximum number of skeletal atoms;
 * (c) have the fewer heteroatoms in the fused ring system before bridging;
 * (d) consist of the most senior ring system, when the seniority order is applied to the parent fused
 * ring system (see P-44.2);
 * (e) have the minimum number of polyvalent bridges;
 * (f) have the minimum number of dependent bridges;
 * (g) have the minimum number of atoms in dependent bridges;
 * (h) have the maximum number of divalent bridges; thus ‘diyl’ is senior to ‘ylylidene’, ‘triyl’,
 * ‘diylidene’, ‘diylylidene’, or ‘tetrayl’, etc. Similarly ‘ylylidene’ is senior to ‘triyl’, etc.
 * …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 278, P-25.4.3.4.2 (e), example 2.. [corrected 12 May 2021]
 *     For [not 7,5,13-(epoxyepimethanetriyl)benzo[4,5]cyclohepta[1,2-f]isochromene (II)
 *     read [not 7,5,13-(epoxymethanetriyl)benzo[4,5]cyclohepta[1,2-f]isochromene (II)
 *   Page 279, P-25.4.3.4.2 (h), example. [modified 27 May 2020]
 *     For 8,7-(azenoetheno)cyclohepta[4.5]cycloocta[1,2-b]pyridine (I) (PIN)
 *     read 8,7-(azenoepietheno)cyclohepta[4.5]cycloocta[1,2-b]pyridine (I) (PIN)
 *     for [8,7-(azenoepiethanediylidene)cyclohepta[4,5]cycloocta[1,2-b]pyridine (II);
 *     read [not 8,7-(azenoepiethanediylidene)cyclohepta[4,5]cycloocta[1,2-b]pyridine (II);
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-25.4.3.4.2', [
  { pin: '1H-1,3-propanocyclobuta[a]indene (I)', notNames: ['8,10,1-(epiethane[1,1,2]triyl)benzo[8]annulene(II) (for order of ring attachment locants see P-25.4.3.2.2'] },
  { pin: '6,7-(epiprop[1]en[1]yl[3]ylidene)benzo[a]cyclohepta[e][8]annulene (I)', notNames: ['7,6-(epiprop[1]en[1]yl[3]ylidene)benzo[a]cyclohepta[e][8]annulene (II)'] },
  { pin: '1,4:8,5-bis(epoxymethano)anthracene (I)' },
  { notNames: ['1H,3H-1,4:6,9-bisethenobenzo[1,2-c:5,4-c′]dipyran (II)'] },
  { pin: '1,7-ethano[4,1,2]benzoxadiazine (I)' },
  { notNames: ['4,6-ethanopyrido[1,2-d][1,3,4]oxadiazine (II)'] },
  { pin: '1,12-ethenobenzo[4,5]cyclohepta[1,2,3-de]naphthalene (I)', otherNames: ['{not 1,12-ethenobenzo[c]phenanthrene (II)'] },
  { pin: 'octadecahydro-6,13-methano-2,14:7,9-dipropanodicyclohepta[a,e][8]annulene (I)', otherNames: ['{not octadecahydro-7,14-methano-4,6:8,10-dipropanodicyclohepta[a,d][8]annulene (II)', 'hexacyclo[15.3.2.2³,⁷.1²,¹².0¹³,²¹.0¹¹,²⁵]pentacosane'] },
  { pin: '2,6:5,7-dimethanoindeno[7,1-bc]furan (I)', notNames: ['5,7,2-(epiethane[1,1,2]triyl)indeno[7,1-bc]furan (II)'] },
  { pin: '6,12-epoxy-5,13-methanobenzo[4,5]cyclohepta[1,2-f][2]benzopyran (I)', otherNames: ['6,12-epoxy-5,13-methanobenzo[4,5]cyclohepta[1,2-f]isochromene (I)'], notNames: ['7,5,13-(epoxymethanetriyl)benzo[4,5]cyclohepta[1,2-f]isochromene (II)'] },
  { pin: '6,11-buta[1,3]dieno-3,8-phosphano[1,4]diazocino[2,3-g]cinnoline (I)', notNames: ['3,15-phosphano-6,11-buta[1,3]dieno[1,4]diazocino[2,3-g]cinnoline (II)'] },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250403ak.gif', pin: '6,17-methano-10,13-pentanonaphtho[2,3-c][1]benzazocine', otherNames: ['nor 10,17-ethano-6,13-butanonaphtho[2,3-c][1]benzazocine)'], notNames: ['13,17-ethano-6,10-butanonaphtho[2,3-c][1]benzazocine'] },
  { pin: '8,7-(azenoepietheno)cyclohepta[4,5]cycloocta[1,2-b]pyridine (I)', notNames: ['8,7-(azenoepiethanediylidene)cyclohepta[4,5]cycloocta[1,2-b]pyridine (II)'] },
  { pin: '14,5-(metheno)-3,2,4-(epiprop[2]en[1,3]diyl[1]ylidene)dicyclopenta[f,f′]pentaleno[1,2-a:6,5-a′]dipentalene', otherNames: ['not 14,5-(metheno)-4,2,3-(epiprop[2]en[1,3]diyl[1]ylidene)dicyclopenta[f,f′]]pentaleno[1,2-a:6,5-a′]dipentalene', 'not 5,14-(metheno)-4,3,2-(epipropan[1]yl[1,3]diylidene)dicyclopenta[f,f′]]pentaleno[1,2-a:6,5-a′]dipentalene'], notNames: ['5,14-(metheno)-3,4,2-(epipropan[1]yl[1,3]diylidene)dicyclopenta[f,f′]]pentaleno[1,2-a:6,5-a′]dipentalene'] },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250403ao.gif', pin: '1,4-dihydro-1,4-ethanoanthracene', notNames: ['1,2,3,4-tetrahydro-1,4-ethenoanthracene'] },
]);
