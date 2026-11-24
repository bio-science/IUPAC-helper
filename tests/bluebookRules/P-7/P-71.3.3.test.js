/**
 * P-71.3.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Polyamine, polyimine and polyamide radicals
 * Polyradicals with radical centres identically derived but located on two or more amine, imine, or
 * amide characteristic groups are named in two ways:
 * (1) by using suffixes (see P-71.3.2) denoting the removal of one hydrogen atom from each
 * characteristic group and the multiplying prefixes ‘bis-’, ‘tris-’, etc.;
 * (2) by multiplicative nomenclature based on the parent radicals ‘azanyl’ and ‘azanylidene’.
 * In order to avoid any confusion, the name ‘aminyl’ is reserved for denoting the suffix in
 * substitutive nomenclature; the parent radical ‘azanyl’ (not ‘aminyl’) is used in multiplicative
 * nomenclature. Method (1) leads to preferred IUPAC names when a suffix described in P-71.3.2 is
 * available.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1060, P-71.3.3, example 1. [modified 7 August 2019]
 *     For (1) ethane-1,2-bis(aminyl) (PIN)
 *     read (1) (ethane-1,2-diyl)bis(aminyl) (PIN)
 *   Page 1060, P-71.3.3, example 3. [corrected 7 August 2019]
 *     For (2) benzene-1,2-dicarbonylbis(azanyl)
 *     read (2) (benzene-1,2-dicarbonyl)bis(azanyl)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-71.3.3', [
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P71330a.gif', pin: '(ethane-1,2-diyl)bis(aminyl)', otherNames: ['ethane-1,2-diylbis(azanyl)'] },
  { formula: '•N=C=N•', pin: 'methanebis(iminyl)', otherNames: ['methanediylidenebis(azanyl)'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P71330b.gif', pin: 'benzene-1,2-bis(carboxamidyl)', otherNames: ['(benzene-1,2-dicarbonyl)bis(azanyl)'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P71330c.gif', pin: 'butanebis(amidyl)', otherNames: ['butanedioylbis(azanyl)'] },
  { formula: '²•N-CO-[CH2]4-CO-N²•', pin: 'hexanebis(amidylidene)', otherNames: ['hexanedioylbis(azanylidene)', 'hexanedioylbis(aminylidene)', 'hexanedioylbis(nitrene)'] },
]);
