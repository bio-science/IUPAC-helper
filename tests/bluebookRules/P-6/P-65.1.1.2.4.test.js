/**
 * P-65.1.1.2.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The following trivial names are no longer recommended.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 748, P-65.1.1.2.4, example 1. [modified 11 March 2020]
 *     For propiolic acid
 *     read (not propiolic acid)
 *     for but-2-ynoic acid (PIN)
 *     read prop-2-ynoic acid (PIN)
 *   Page 748, P-65.1.1.2.4, example 2. [modified 11 March 2020]
 *     For isobutyric acid
 *     read (not isobutyric acid)
 *     for 3-methylpropanoic acid (PIN)
 *     read 2-methylpropanoic acid (PIN)
 *   Page 748, P-65.1.1.2.4, example 3. [corrected 11 March 2020]
 *     For acetoacetic acid
 *     read (not acetoacetic acid)
 *   Page 748, P-65.1.1.2.4, example 4. [corrected 11 March 2020]
 *     For anthranilic acid (1,2-isomer only)
 *     read [not anthranilic acid (1,2-isomer only)]
 *   Page 748, P-65.1.1.2.4, example 5. [modified 11 March 2020]
 *     For benzilic acid
 *     read [not benzilic acid]
 *     for hydroxy(diphenyl)acetic acid (PIN)
 *     read hydroxydi(phenyl)acetic acid (PIN)
 *   Page 748, P-65.1.1.2.4, example 6. Move this example to P-65.1.1.2.2. [modified 3 March 2021]
 *     For N,N′-ethane-1,2-diylbis[N-(carboxymethyl)glycine]
 *     read N,N′-(ethane-1,2-diyl)bis[N-(carboxymethyl)glycine]
 *     Add 2,2′,2′′,2′′′-(ethane-1,2-diyldinitrilo)tetraacetic acid
 *     for (HOOC-CH2)2-N-CH2-CH2-N-(CH2-COOH)2
 *     read (HOOC-CH2)2N-CH2-CH2-N(CH2-COOH)2
 *   Page 748, P-65.1.1.2.4, example 7. [corrected 11 March 2020]
 *     For glycolic acid
 *     read (not glycolic acid)
 *   Page 748, P-65.1.1.2.4, example 8. [corrected 11 March 2020]
 *     For glycoxylic acid
 *     read (not glycoxylic acid)
 *   Page 749, P-65.1.1.2.4, examples 1-3 on this page. [corrected 7 August 2019]
 *     Delete these examples
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.1.1.2.4', [
  { formula: 'HC≡C-COOH', pin: 'prop-2-ynoic acid', notNames: ['propiolic acid'] },
  { formula: '(CH3)2CH-COOH', pin: '2-methylpropanoic acid', notNames: ['isobutyric acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650101n.gif', pin: '3-oxobutanoic acid', notNames: ['acetoacetic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650101o.gif', pin: '2-aminobenzoic acid', notNames: ['anthranilic acid (1,2-isomer only)'] },
  { formula: '(C6H5)2C(OH)-COOH', pin: 'hydroxydi(phenyl)acetic acid', notNames: ['benzilic acid'] },
  { formula: 'HO-CH2-COOH', pin: 'hydroxyacetic acid', notNames: ['glycolic acid'] },
  { formula: 'OHC-COOH', pin: 'oxoacetic acid', notNames: ['glyoxylic acid'] },
]);
