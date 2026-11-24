/**
 * P-67.1.2.6.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Amides and hydrazides of nitric and nitrous acids
 * Nitramines are amides of nitric acid (see ref. 23). The class is composed of ‘nitramide’ (a
 * shortened form of nitric amide), NO2-NH2, and the names of its derivatives are formed by
 * substitution. Nitrosamines are amides of nitrous acid, NO-NH2 (see ref. 23); and the names of its
 * derivatives are formed by substitution. Nitric acid and nitrous acid are preselected names, see
 * P-12.
 * Similarly, nitric hydrazide (I) and nitrous hydrazide (II) are preselected names used as parent
 * structures for generation of preferred IUPAC names.
 * Preferred IUPAC names for amides and hydrazides of nitric and nitrous acids are now systematically
 * based on nitric or nitrous amide and hydrazide, in accordance with the seniority order of classes …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 930, P-67.1.2.6.3, example 1. [corrected 24 March 2021]
 *     For N,N-dipropylnitrous amide (PIN)
 *     read dipropylnitrous amide (PIN)
 *   Page 930, P-67.1.2.6.3, example 2. [corrected 24 March 2021]
 *     For N-butyl-N-ethylnitrous amide (PIN)
 *     read butyl(ethyl)nitrous amide (PIN)
 *   Page 930, P-67.1.2.6.3, example 3. [corrected 24 March 2021]
 *     For N-(chloromethyl)-N-methylnitramide (PIN)
 *     read (chloromethyl)(methyl)nitramide (PIN)
 *   Page 930, P-67.1.2.6.3, example 4. [corrected 24 March 2021]
 *     For N-methyl-N-nitronitramide (PIN)
 *     read methyl(nitro)nitramide (PIN)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-67.1.2.6.3', [
  { formula: 'ON-N(CH2-CH2-CH3)2', pin: 'dipropylnitrous amide', otherNames: ['N-nitroso-N-propylpropan-1-amine'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P67126l.gif', pin: 'butyl(ethyl)nitrous amide', otherNames: ['N-ethyl-N-nitrosobutan-1-amine'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P67126m.gif', name: '1-chloro-N-methyl-N-nitromethanamine' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P67126n.gif', pin: 'methyl(nitro)nitramide', otherNames: ['N,N-dinitromethanamine'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P67126o.gif', pin: 'N′-hexylidenenitrous hydrazide' },
]);
