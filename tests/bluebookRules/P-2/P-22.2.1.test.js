/**
 * P-22.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Retained names of heteromonocycles
 * Retained names for ‘mancude’ heteromonocycles and their chalcogen analogues are listed in Table 2.2.
 * Note: The term ‘mancude’ is an acronym for MAximum number of NonCUmulative DoublE bonds.
 * The name ‘pyran’ is modified by functional replacement nomenclature to generate names for chalcogen
 * analogues.
 * Retained names for saturated heteromonocycles are given in Table 2.3.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-22.2.1', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P220201a.gif', pin: 'furan' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P220201b.gif', name: 'imidazole (1H-isomer shown' },
  { pin: '1,3-oxazole', otherNames: ['oxazole'] },
  { pin: '1,3-thiazole' },
  { pin: '1,3-selenazole' },
  { pin: '1,3-tellurazole' },
  { pin: '1,2-oxazole', otherNames: ['isoxazole'] },
  { pin: '1,2-thiazole' },
  { pin: '1,2-tellurazole' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P220201e.gif', name: 'pyran (2H-isomer shown' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P220201f.gif', pin: 'pyrazine' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P220201g.gif', name: 'pyrazole (1H-isomer shown' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P220201h.gif', pin: 'pyridazine' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P220201i.gif', pin: 'pyridine' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P220201j.gif', pin: 'pyrimidine' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P220201k.gif', name: 'pyrrole (1H-isomer shown' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P220201l.gif', pin: 'selenophene' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P220201m.gif', pin: 'tellurophene' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P220201n.gif', pin: 'thiophene' },
  { pin: '1,3-oxazolidine', otherNames: ['oxazolidine'] },
  { pin: '1,3-thiazolidine' },
  { pin: '1,3-selenazolidine' },
  { pin: '1,3-tellurazolidine' },
  { pin: '1,2-oxazolidine', otherNames: ['isoxazolidine'] },
  { pin: '1,2-thiazolidine' },
  { pin: '1,2-selenazolidine' },
  { pin: '1,2-tellurazolidine' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P220201q.gif', pin: 'pyrrolidine' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P220201r.gif', pin: 'morpholine' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P220201s.gif', pin: 'pyrazolidine' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P220201t.gif', pin: 'imidazolidine' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P220201u.gif', pin: 'piperidine' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P220201v.gif', pin: 'piperazine' },
]);
