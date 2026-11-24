/**
 * P-52.1.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Preselected names for heterogeneous acyclic parent hydrides composed of alternating ‘ab’ atoms,
 * i.e., [a(ba)n parent hydrides], except carbon or halogen, are described in P-21.2.3.1.
 * In these recommendations, the ‘amine’ characteristic group is recognized in a(ba)n parent hydrides,
 * which is a change from earlier recommendations where it was not recognized. …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 572, P-52.1.3, lines 2/3. [corrected 3 June 2020]
 *     For ...except where 'b' is carbon or nitrogen, are described...
 *     read ...except carbon or halogen, are described...
 *   Page 572, P-52.1.3, example 1. [corrected 20 February 2019]
 *     For [not (distannyloxy)stannane]
 *     read [not bis(stannyloxy)stannane]
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-52.1.3', [
  { formula: 'SnH3-O-SnH2-O-SnH3', preselectedName: 'tristannoxane', notNames: ['bis(stannyloxy)stannane'] },
  { formula: 'CH3-NH-CH3', pin: 'N-methylmethanamine', notNames: ['dicarbazane'] },
  { formula: 'HSe-S-Se-S-SeH', preselectedName: 'triselenathiane' },
  { formula: 'SiH3-NH-SiH2-NH-SiH3', notNames: ['trisilazane'] },
]);
