/**
 * P-45.6.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “General principles. The choice of a parent structure based on the number and location of multiple
 * bonds and double bonds (see P-44.4.1.1, P-44.4.1.2, and P-44.4.1.12) is not configuration dependent.
 * As an example, the configuration of the double bond may be Z or E in the following alkene that is
 * named according to P-31.1. The names with and without stereodescriptors are the same, i.e. butene. …
 * In contrast, multiplicative names (see P-45.1 and P-15.3) are configuration dependent as shown
 * below. …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 536, P-45.6.2, lines 2/3. [corrected 3 January 2020]
 *     For ...and P-44.4.1.10 is not...
 *     read ...and P-44.4.1.12) is not...
 *   Page 538, P-45.6.2, Example 3, second compound on this page. [modified 3 January 2020]
 *     For 1,2-bis[(1S)-1-chloroethyl]-4-{4-[(1S)-1-chloroethyl]-2-[(1R)-1-chloroethyl]phenoxy}benzene
 *     (PIN)
 *     read 1,2-bis[(1S)-1-chloroethyl]-4-{3-[(1R)-1-chloroethyl]-4-[(1S)-1-chloroethyl]phenoxy}benzene
 *     (PIN)
 *     for ...; ‘bis.....chloroethyl....chloroethyl’ is lower alphabetically than
 *     ‘bis.....chloroethylphenoxy’]
 *     read ...; ‘1,2,4’ is senior to ‘4,2,1’ (see P-45.2.3)]
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-45.6.2', [
  // Drawn in the Blue Book.
  { drawing: 'P4gif/P450602a.gif', pin: 'but-2-ene' },
  // Drawn in the Blue Book.
  { drawing: 'P4gif/P450602f.gif', pin: '1,1′-sulfanediylbis{4-[(2R)-butan-2-yl]benzene}' },
  // Drawn in the Blue Book.
  { drawing: 'P4gif/P450602g.gif', pin: '1-[(2R)-butan-2-yl]-4-({4-[(2S)-butan-2-yl]phenyl}sulfanyl)benzene', notNames: ['1-[(2S)-butan-2-yl]-4-({4-[(2R)-butan-2-yl]phenyl}sulfanyl)benzene'] },
  // Drawn in the Blue Book.
  { drawing: 'P4gif/P450602h.gif', pin: '1,1′-oxybis[3,4-bis(1-chloroethyl)benzene]' },
  // Drawn in the Blue Book.
  { drawing: 'P4gif/P450602i.gif', pin: '4-{3,4-bis[(1R)-1-chloroethyl]phenoxy}-1,2-bis[(1S)-1-chloroethyl]benzene', notNames: ['4-{3,4-bis[(1S)-1-chloroethyl]phenoxy}-1,2-bis[(1R)-1-chloroethyl]benzene'] },
  // Drawn in the Blue Book.
  { drawing: 'P4gif/P450602j.gif', pin: '1,2-bis[(1S)-1-chloroethyl]-4-{3-[(1R)-1-chloroethyl]-4-[(1S)-1-chloroethyl]phenoxy}benzene', notNames: ['4-{3,4-bis[(1S)-1-chloroethyl]phenoxy}-2-[(1R)-1-chloroethyl]-1-[(1S)-1-chloroethyl]benzene'] },
]);
