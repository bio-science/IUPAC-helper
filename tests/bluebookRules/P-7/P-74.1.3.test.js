/**
 * P-74.1.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Anionic and cationic centers on different parent structures
 * Zwitterionic compounds with anionic and cationic centers on different parent structures may be named
 * by prefixing the name of the cationic center or the parts of the structure containing the cationic
 * centers to the name of the anionic parent structure.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1111, P-74.1.3, example 1. [modified 27 March 2019]
 *     For trimethyl[2-(methyldiphenylphosphaniumyl)ethenyl]boranuide (PIN)
 *     read trimethyl{2-[methyldi(phenyl)phosphaniumyl]ethen-1-yl}boranuide (PIN)
 *     for trimethyl[2-(methyldiphenylphosphoniumyl)ethenyl]boranuide
 *     read trimethyl{2-[methyldi(phenyl)phosphoniumyl]ethen-1-yl}boranuide
 *   Page 1111, P-74.1.3, example 2. [corrected 17 June 2020]
 *     For (trimethylazaniumyl)acetate (PIN)
 *     read (N,N-dimethylmethanaminiumyl)acetate (PIN)
 *   Page 1111, P-74.1.3, example 3. [modified 17 June 2020]
 *     For N-methyl-N′-(methylboranuidyl)boranuidediylbis(aminium) (PIN)
 *     read methyl{[(methanaminiumyl)boranuidyl]azaniumyl}boranuide (PIN)
 *     for [not 1-methyl-3-(methylazaniumyl)diborazan-2-ium-1,3-diide;
 *     read [not 1-methyl-3-(methanaminiumyl)diborazan-2-ium-1,3-diide;
 *     Replace the structure with:
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-74.1.3', [
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P74130a.gif', pin: 'trimethyl{2-[methyldi(phenyl)phosphaniumyl]ethen-1-yl}boranuide', otherNames: ['trimethyl{2-[methyldi(phenyl)phosphoniumyl]ethen-1-yl}boranuide'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P74130c.gif', pin: 'methyl{[(methanaminiumyl)boranuidyl]azaniumyl}boranuide', otherNames: ['2,4-diaza-3,5-diborahexane-2,4-diium-', '3,5-diuide 3,5-diazonia-2,4-diboranuidahexane'], notNames: ['1-methyl-3-(methanaminiumyl)diborazan-2-ium-1,3-diuide'] },
]);
