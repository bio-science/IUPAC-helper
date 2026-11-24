/**
 * P-66.1.7
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Polyfunctional amides
 * Amides follow acids, anhydrides, esters, and acid halides in the seniority order of compound classes
 * expressed by suffixes (see P-41); within the amide class, amides rank in the same order as the
 * corresponding acid. Seniority for numbering polyfunctional amides follows that described for acids,
 * for which see P-65.1.2.3 and P-65.1.2.4.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 868, P-66.1.7, example 2. [modified 23 December 2020]
 *     For N-[({[(acetamidomethyl)nitroamino]methyl}nitroamino)methyl]prop-2-enamide (PIN)
 *     read N-{[{[(acetamidomethyl)(nitro)amino]methyl}(nitro)amino]methyl}prop-2-enamide
 *     for N-{[({[(acetylamino)methyl]nitroamino}methyl)nitroamino]methyl}prop-2-enamide
 *     read N-{[({[(acetylamino)methyl](nitro)amino}methyl)(nitro)amino]methyl}prop-2-enamide
 *     add N-[({[(acetamidomethyl)nitramido]methyl}nitramido)methyl]prop-2-enamide (PIN)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.1.7', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66170a.gif', pin: '1-(dinitromethyl)hydrazine-1,2-dicarboxamide' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66170b.gif', pin: 'N-[({[(acetamidomethyl)nitramido]methyl}nitramido)methyl]prop-2-enamide', otherNames: ['N-{[{[(acetamidomethyl)(nitro)amino]methyl}(nitro)amino]methyl}prop-2-enamide', 'N-{[({[(acetylamino)methyl](nitro)amino}methyl)(nitro)amino]methyl}prop-2-enamide'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66170c.gif', pin: '2-(1-aminopropan-2-ylidene)hydrazine-1-carboxamide' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66170d.gif', pin: '4-[(2-hydroxyethyl)amino]-N-{2-[(2-hydroxyethyl)amino]ethyl}butanamide' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66170e.gif', pin: '2-amino-N-(2,3-dihydroxypropyl)-N-methylacetamide' },
]);
