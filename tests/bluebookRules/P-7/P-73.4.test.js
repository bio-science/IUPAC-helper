/**
 * P-73.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “SKELETAL REPLACEMENT (‘a’) NOMENCLATURE FOR CATIONS
 * Two methods are used to name cationic centers by skeletal replacement (‘a’) nomenclature:
 * (1) name the compound using neutral skeletal replacement (‘a’) prefixes and then describe the
 * cationic centers by the appropriate suffix ‘ium’ and ‘ylium’;
 * (2) by using cationic skeletal replacement (‘a’) prefixes.
 * Cationic skeletal replacement (‘a’) prefixes to indicate a cationic center having a bonding number
 * one higher than the bonding number of the corresponding neutral mononuclear hydride, except for
 * bismuth, are formed by replacing the ‘a’ ending of the normal skeletal replacement (‘a’) prefixes by
 * ’onia’; the cationic skeletal replacement (‘a’) prefix corresponding to ‘bismuthonium’ is
 * ‘bismuthonia’.
 * Cationic skeletal replacement (‘a’) prefixes to indicate a cationic center having a bonding number
 * one lower than the bonding number of the corresponding neutral mononuclear hydride, except for …
 * Cationic skeletal replacement (‘a’) prefixes are used in the same way as neutral replacement
 * prefixes.
 * …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1099, P-73.4, example 1 on this page. [modified 30 March 2022]
 *     For 2-ethoxy-N-{2-[(2-ethoxyethyl)sulfaniumyl]ethyl}-N,N-dimethylethanaminium (PIN)
 *     read 2-ethoxy-N-{2-[(2-ethoxyethyl)(methyl)sulfaniumyl]ethyl}-N,N-dimethylethanaminium (PIN)
 *     for 2-ethoxy-N-{2-[(2-ethoxyethyl)sulfanyl]ethyl}-N-methylethanamine
 *     read 2-ethoxy-N-{2-[(2-ethoxyethyl)(methyl)sulfanyl]ethyl}-N-methylethanamine
 *     for N-(2-ethoxyethyl)-2-[(2-ethoxyethyl)sulfanyl]-N-methylethanamine
 *     read N-(2-ethoxyethyl)-2-[(2-ethoxyethyl)(methyl)sulfanyl]-N-methylethanamine
 *   Page 1100, P-73.4, example 3 on this page. [corrected 10 October 2018]
 *     Replace the structure with:
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-73.4', [
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73400a.gif', preselectedName: 'azonia' },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73400b.gif', preselectedName: 'thionia' },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73400c.gif', preselectedName: 'iodonia' },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73400d.gif', preselectedName: 'azanylia' },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73400e.gif', preselectedName: 'boranylia' },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73400f.gif', pin: '1-methyl-1-azabicyclo[2.2.1]heptan-1-ium chloride', otherNames: ['1-methyl-1-azoniabicyclo[2.2.1]heptane chloride'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73400g.gif', pin: '2-ethoxy-N-{2-[(2-ethoxyethyl)(methyl)sulfaniumyl]ethyl}-N,N-dimethylethanaminium', otherNames: ['{not 6,9,9-trimethyl-3,12-dioxa-6-thia-9-azatetradecane-6,9-diium', 'nor 6,9,9-trimethyl-3,12-dioxa-6-thionia-9-azoniatetradecane', '2-ethoxy-N-{2-[(2-ethoxyethyl)(methyl)sulfanyl]ethyl}-N-methylethanamine and', 'not N-(2-ethoxyethyl)-2-[(2-ethoxyethyl)(methyl)sulfanyl]-N-methylethanamine'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73400h.gif', pin: '3,12-dimethyl-6,9-dioxa-3,12-dithiatetradecane-3,12-diium', otherNames: ['3,12-dimethyl-6,9-dioxa-3,12-dithioniatetradecane'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73400i.gif', pin: '4-cyclohexyl-8-methyl-4-oxo-3,5-dioxa-8-thia-4λ⁵-phosphatetradecan-8-ium iodide', otherNames: ['4-cyclohexyl-8-methyl-4-oxo-3,5-dioxa-8-thionia-4λ⁵-phosphatetradecane iodide'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73400j.gif', pin: '1-methyl-1,4-diazabicyclo[2.2.1]heptan-1-ium' },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73400k.gif', pin: '5λ⁵-arsaspiro[4.4]nonan-5-ylium', otherNames: ['5-arsoniaspiro[4.4]nonane'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73400l.gif', pin: '5H-5λ⁵,5′-spirobi[benzo[b]phosphindol]-5-ylium', otherNames: ['9-phosphonia-9,9′-spirobi[fluorene]'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73400m.gif', pin: '1H-2λ⁵-spiro[isoquinoline-2,2′-pyrido[1,2-a]pyrazin]-2-ylium' },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73400n.gif', pin: '2′H-3λ⁵-spiro[3-azabicyclo[3.2.2]nonane-3,3′-[1,3]oxazol]-3-ylium' },
]);
