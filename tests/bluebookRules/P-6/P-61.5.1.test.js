/**
 * P-61.5.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Nitro and nitroso compounds
 * Compounds containing the –NO2 or –NO group are named by means of the prefixes ‘nitro’ and ‘nitroso’,
 * respectively, unless these groups can be named on the basis of the parent structures nitric and
 * nitrous acids, NO2-OH and NO-OH, respectively, or their corresponding esters, anhydrides, amides and
 * hydrazides. Derivatives of nitric acid and nitrous acids are described in Section P-67. Acid halides
 * and pseudohalides are described in P-67.1.2.5; amides and hydrazides in P-67.1.2.6; …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-61.5.1', [
  { formula: 'CH3-NO2', pin: 'nitromethane' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P610501a.gif', pin: '2-nitronaphthalene' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P610501b.gif', pin: '1,4-dinitrosobenzene' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P610501c.gif', pin: '2-methyl-1,3,5-trinitrobenzene' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P610501d.gif', pin: '1-(chloromethyl)-4-nitrobenzene', otherNames: ['4-nitrobenzyl chloride'] },
  { formula: 'CH3-BH-NO2', pin: 'methyl(nitro)borane' },
  { formula: '(CH3)3Si-NO2', pin: 'trimethyl(nitro)silane' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P610501e.gif', pin: '1-methyl-2-nitrosodiphosphane' },
]);
