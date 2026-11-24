/**
 * P-61.3.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Halogen compounds in which the halogen atom is in its standard bonding number are named in two
 * ways:
 * (1) by substitutive nomenclature, using the prefixes ‘bromo’, ‘chloro’, ‘fluoro’, and ‘iodo’ and
 * appropriate multiplicative prefixes, as required;
 * (2) by functional class nomenclature, in which names are formed by citing the name of the organic
 * ‘groups’ followed by the class name ‘fluoride’, ‘chloride’, ‘bromide’, or ‘iodide’, as a separate …
 * Method (1) leads to preferred IUPAC names (see P-51.1).”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 659, P-61.3.1, examples 2 and 3, I and II. [modified 5 June 2019].
 *     For C60Ih
 *     read C60-Ih
 *     replace the structure of I with:
 *     Replace the structure of II with:
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-61.3.1', [
  { formula: 'CH3-I', pin: 'iodomethane', otherNames: ['methyl iodide'] },
  { formula: 'C6H5-CH2-Br', name: 'α-bromotoluene' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P610301a.gif', pin: '2-chloro-2-methylpropane', otherNames: ['tert-butyl chloride'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P610301b.gif', pin: '1,2-dibromoethane', otherNames: ['ethylene dibromide'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P610301c.gif', pin: '1,4-bis(2-chloropropan-2-yl)benzene', otherNames: ['1,4-bis(1-chloro-1-methylethyl)benzene'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P610301d.gif', pin: '1,1′-(1,2-dibromoethane-1,2-diyl)dibenzene', otherNames: ['1,2-dibromo-1,2-diphenylethane'], notNames: ['stilbene dibromide'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P610301e.gif', pin: '1,1,1,2,2,3,3,4,4,5,5,6,6,7,8,8,9,9,10,10,11,11,12,12,12-pentacosafluoro-7-(1,1,1,3,3,3-hexafluoro-2-methylpropan-2-yl)dodecane', otherNames: ['1,1,1,2,2,3,3,4,4,5,5,6,6,7,8,8,9,9,10,10,11,11,12,12,12-pentacosafluoro-7-[2,2,2-trifluoro-1-methyl-1-(trifluoromethyl)ethyl]dodecane'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P610301f.gif', pin: '4a,8a-dichloro-4a,8a-dihydronaphthalene' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P610301g.gif', pin: '1-chloro-4-(chloromethyl)benzene', otherNames: ['α,4-dichlorotoluene'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P610301h.gif', pin: '1,2-bis(bromomethyl)benzene', otherNames: ['α-bromo-2-(bromomethyl)toluene'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P610301i.gif', pin: '2-chlorohexane', otherNames: ['hexan-2-yl chloride', '1-methylpentyl chloride'] },
  { formula: 'F2N-CO-NF2', pin: 'tetrafluorourea', otherNames: ['tetrafluorocarbonic diamide'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P610301j.gif', name: '5-bromo-2-cyclopropylpent-2-ene' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P610301k.gif', pin: '3-fluoro-1-oxacyclotetradecane', otherNames: ['1-oxacyclotetradecan-3-yl fluoride'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P610301l.gif', pin: '6-bromo-2-(bromomethyl)hept-1-ene', otherNames: ['2-methylideneheptane-1,6-diyl dibromide'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P610301m.gif', pin: '1-(trifluoromethyl)-1,9-dihydro(C60-Ih)[5,6]fullerene' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P610301n.gif', pin: '1,9,52,60-tetrafluoro-1,9,52,60-tetrahydro(C60-Ih)[5,6]fullerene' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P610301o.gif', pin: '10-chloro-2,4,6,8-tetrasiladecane', otherNames: ['2,4,6,8-tetrasiladecan-10-yl chloride'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P610301p.gif', pin: '5-iodopent-1-ene', otherNames: ['pent-4-en-1-yl iodide'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P610301q.gif', pin: '1-bromohex-3-ene', otherNames: ['hex-3-en-1-yl bromide'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P610301r.gif', pin: '5,6,7,8-tetrabromo-1,2,3,4-tetrahydronaphthalene', otherNames: ['5,6,7,8-tetrahydronaphthalene-1,2,3,4-tetrayl tetrabromide'] },
]);
