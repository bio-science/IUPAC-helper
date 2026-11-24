/**
 * P-67.1.4.1.1.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Fundamental acyl groups for substituents derived from mononuclear noncarbon oxoacids;
 * Acyl prefix groups are formed by removing all –OH groups from a mononuclear noncarbon oxoacid having
 * the general structures E(=O)(OH)3, R-E(=O)(OH)2 or R,R′E(=O)OH, where R and R′ = H or an organyl …
 * The prefix ‘nitroryl’ (not azoryl), for the acyl group –N(O)<, derived from the hypothetical
 * nitroric acid, N(O)(OH)3, has been recommended since 1993 (see R-3.3, ref. 2).”
 *
 * The whole section is in the Blue Book.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-67.1.4.1.1.2', [
  { preselectedPrefix: 'nitroryl' },
  { preselectedName: 'phosphoric acid' },
  { preselectedPrefix: 'phosphoryl' },
  { preselectedName: 'arsoric acid', notNames: ['arsenic acid'] },
  { preselectedPrefix: 'arsoryl', notNames: ['arsenyl'] },
  { preselectedName: 'stiboric acid', notNames: ['antimonic acid'] },
  { preselectedPrefix: 'stiboryl', notNames: ['antimonyl'] },
  { preselectedName: 'azonic acid' },
  { preselectedPrefix: 'azonoyl' },
  { preselectedName: 'azinic acid' },
  { preselectedPrefix: 'azinoyl' },
  { preselectedName: 'phosphonic acid' },
  { preselectedPrefix: 'phosphonoyl' },
  { preselectedName: 'phosphinic acid' },
  { preselectedPrefix: 'phosphinoyl', notNames: ['phosphinyl'] },
  { preselectedName: 'arsonic acid' },
  { preselectedPrefix: 'arsonoyl' },
  { preselectedName: 'arsinic acid' },
  { name: 'arsinoyl (preselected prefix', notNames: ['arsinyl'] },
  { preselectedName: 'stibonic acid' },
  { preselectedPrefix: 'stibonoyl' },
  { preselectedName: 'stibinic acid' },
  { preselectedPrefix: 'stibinoyl' },
]);
