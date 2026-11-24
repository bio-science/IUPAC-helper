/**
 * P-68.3.1.1.1.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Substitution on the oxygen atom of hydroxylamine
 * Substitution of hydroxylamine on the oxygen atom by hydrocarbyl or acyl groups is expressed as
 * O-substitution. Names such as ‘alkyloxyamines’ are not recommended and the class ‘peroxyamide’ has
 * never been recognized.
 * O-Substitution of hydroxylamine by –NHR or –NRR′ leads to N-(aminooxy)amines not derivatives of
 * diazoxane.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 994, P-68.3.1.1.1.2, example 4. [modified 3 March 2021]
 *     For O-benzoylhydroxylamine (PIN)
 *     read O-benzoylhydroxylamine
 *     for (not azanyl acetate)
 *     read (not azanyl benzoate)
 *     add aminooxy(phenyl)methanone (PIN)
 *   Page 994, P-68.3.1.1.1.2, last example on this page. [corrected 28 October 2016]
 *     For (not 1-methyldioxazane)
 *     read (not 1-methyldiazoxane)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-68.3.1.1.1.2', [
  { formula: 'H2N-O-CH3', pin: 'O-methylhydroxylamine', notNames: ['methoxyamine'] },
  { formula: 'H2N-O-C6H5', pin: 'O-phenylhydroxylamine', notNames: ['phenoxyamine'] },
  { formula: 'H2N-O-CH2-CH2-O-NH2', pin: 'O,O′-(ethane-1,2-diyl)bis(hydroxylamine)' },
  { formula: 'H2N-O-CO-C6H5', pin: 'aminooxy(phenyl)methanone', otherNames: ['O-benzoylhydroxylamine'], notNames: ['azanyl benzoate'] },
  { formula: 'H2N-O-SO-CH3', pin: 'O-(methanesulfinyl)hydroxylamine', notNames: ['azanyl methanesulfinate'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68311a.gif', pin: 'N-(aminooxy)methanamine', notNames: ['1-methyldiazoxane'] },
]);
