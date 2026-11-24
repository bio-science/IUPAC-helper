/**
 * P-65.1.7.3.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Traditional names are maintained for acyl groups derived from acids having retained names for use
 * only in general nomenclature (see P-65.1.1.2); substitution on acyl groups is identical to that of
 * acids. The rule of having acyl groups ending in ‘oyl’ is applied, with certain exceptions that end
 * in ‘yl’. The following exceptions below are limiting. Preferred IUPAC names are systematic
 * substitutive names.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 772, P-65.1.7.3.1, line 2. [corrected 25 August 2016]
 *     For ...nomenclature (see P-65-4.3.2); substitution...
 *     read ...nomenclature (see P-65.1.1.2); substitution...
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.1.7.3.1', [
  { formula: 'CH3-CH2-CH2-CO–', name: 'butyryl' },
  { formula: 'CH3-CH2-CO–', preferredPrefix: 'propanoyl' },
  { formula: '–OC-CH2-CO–', preferredPrefix: 'propanedioyl' },
  { formula: '–CO-CH2-CH2-CO–', preferredPrefix: 'butanedioyl' },
  { formula: '–OC-[CH2]3-CO–', preferredPrefix: 'pentanedioyl' },
  { formula: 'CH2=CH-CO–', preferredPrefix: 'prop-2-enoyl' },
  { formula: 'CH2=C(CH3)-CO–', preferredPrefix: '2-methylprop-2-enoyl' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650107a.gif', preferredPrefix: 'benzene-1,2-dicarbonyl' },
]);
