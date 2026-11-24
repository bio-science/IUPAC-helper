/**
 * P-93.5.1.4.2.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Specification of exo-cyclic double bonds by stereodescriptors other than ‘E’ and ‘Z’.
 * Compounds composed of a substituted ring and an exo-cyclic double bond can be considered as an
 * allene system and named in two ways:
 * (1) by identifying and specifying individual stereogenic units
 * (2) by considering the entire molecule as a unique system and naming as such
 * IUPAC names are based on method (1).
 * Explanation: The following digraphs are used for specifying the configurations ‘C-1’ and ‘C-4’:
 * Explanation: The following digraphs are used for specifying the configurations ‘C-1’ and ‘C-4’:
 * Explanation: The following digraphs are used in the specification of the configuration at the
 * stereogenic double bond and the stereogenic center ‘C-4’ (shown):
 * Explanation: The configuration of the double bond ‘C-1=C-1′’ is determined as follows. The auxiliary
 * stereodescriptors on each side of the double bond are ‘R0’ and ‘S0’; …
 * Note: While there is a cis arrangement of substituents, CIP descriptors include E, which cannot be
 * used alone, to describe the configuration of the structure.”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1251, P-93.5.1.4.2.2, example 1. [modified 24 March 2021]
 *     For N-[(1seqCis,4R)-4-methylcyclohexylidene]hydroxylamine (PIN)
 *     read [(1seqCis,4R)-4-methylcyclohexylidene]hydroxylamine
 *     add (1seqCis,4R)-N-hydroxy-4-methylcyclohexan-1-imine (PIN)
 *   Page 1252, P-93.5.1.4.2.2, Example 2. [corrected 9 January 2019]
 *     For (3P)-1-(bromomethylidene)-3-propylcyclobutane
 *     read (P)-1-(bromomethylidene)-3-propylcyclobutane
 *     Add (Sa)-1-(bromomethylidene)-3-propylcyclobutane
 *   Page 1253, P-93.5.1.4.2.2, Example 4, Explanation, lines 8-10. [corrected 10 April 2019]
 *     For ... the double bonds ‘C-1–C-1′’; priority being assigned to Sequence Rule 5, the ligand
 *     ‘C-4’ has priority over ligand ‘C-3’, ...
 *     read ... the double bonds ‘C-1=C-1′’; priority being assigned to Sequence Rule 5, the ligand
 *     ‘C-5’ has priority over ligand ‘C-3’, ...
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-93.5.1.4.2.2', [
  // Drawn in the Blue Book.
  { drawing: 'P9gif/P93514x.gif', name: 'cis-4,4′-diethyl-1,1′-bi(cyclohexylidene)' },
  // Drawn in the Blue Book.
  { drawing: 'P9gif/P93514z.gif', name: 'simplified digraphs' },
]);
