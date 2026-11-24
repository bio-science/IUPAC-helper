/**
 * P-68.1.5.2.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Compounds with bridging atoms or groups
 * Derivatives of di- and polyheteranes of the Group 13 elements, such as diborane, polyboranes, and
 * related Al, Ga, In, and Tl congeners, are named using substitutive nomenclature. When a nonbridging
 * hydrogen is substituted, locants, including the locant ‘1’, are used in the customary way. Bridging
 * atoms or groups are indicated as follows:
 * (a) a bridging substituent is indicated by adding the Greek letter μ (mu) immediately before the
 * name of the substituent and separating its prefix name from that of the rest of the name by hyphens;
 * (b) two or more bridging substituents of the same kind are indicated by ‘di-μ’ or ‘bis-μ’, and so
 * on;
 * (c) bridging substituents are listed with the other substituents in alphanumerical order;
 * where the same substituent is present as a bridging group and as a nonbridging substituent it is
 * cited first as a bridging substituent.
 * For more examples of the application of the symbol ‘μ’, see Rule IR-9.2.5.2 and IR-10.2.3.1, in ref.
 * 12.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-68.1.5.2.2', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68152h.gif', pin: '1-methyldiborane(6)' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68152i.gif', name: 'di-μ-methyl-tetramethyldiindigane(6)' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68152j.gif', name: 'di-μ-iodo-1-iodo-1,2,2-tris(prop-2-en-1-yl)diindigane(6)' },
]);
