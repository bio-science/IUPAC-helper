/**
 * P-62.2.5.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Locants for nitrogen atoms in identical parent structures
 * The use of priming on the italic letter N to differentiate among different nitrogen atoms of parent
 * structures requires special methods to indicate the attachment of identical parent structures to the
 * multiplying substituent group through a nitrogen atom.
 * (1) Multiplied parent structures containing one nitrogen atom. The nitrogen atoms attached to the
 * central substituent group are denoted by the symbols N, N′, N′′, etc.
 * (2) Multiplied parent structures containing two nitrogen atoms.
 * (i) The symbols N,N′ are used for the ‘unprimed’ parent structure and N′′,N′′′ for the ‘primed
 * parent structure‘.
 * (ii) A combination of unprimed and primed numerical and letter locants is used as needed (see
 * P-16.9.3). …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 680, P-62.2.5.2 (1), example. [modified 5 June 2019]
 *     For N,N-diethylmethanediamine (PIN)
 *     read N,N′-diethylmethanediamine
 *     for N,N′-methylenedi(ethan-1-amine)
 *     read N,N′-methylenediethanamine (PIN)
 *     replace structure with:
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-62.2.5.2', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P620205c.gif', pin: 'N,N′-methylenediethanamine', otherNames: ['N,N′-diethylmethanediamine'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P620205d.gif', pin: 'N′,N′′′-methylenediacetohydrazide' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P620205e.gif', pin: 'N¹,N¹′-methylenedi(ethane-1,2-diamine)' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P620205f.gif', pin: 'N¹,N¹′-methylenedi(benzene-1,4-diamine)' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P620205g.gif', pin: 'N¹,N¹′-methylenedi(pentane-1,3,4-triamine)' },
]);
