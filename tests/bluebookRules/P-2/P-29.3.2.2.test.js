/**
 * P-29.3.2.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Names for simple substituent groups other than those described in P-29.3.2.1 are formed according
 * to method (2) of P-29.2 For hydrocarbon groups, these substituent groups are generically called
 * ‘alkanyl’, ‘alkanylidene’, ‘alkanylidyne’, ‘alkanediyl’, ‘alkanylylidene’, etc. substituent groups
 * Low locants are assigned to free valences considered as a set, in accordance with the numbering of
 * the chain. …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-29.3.2.2', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P290302b.gif', preferredPrefix: 'propyl' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P290200b.gif', preferredPrefix: 'propan-2-yl', notNames: ['prop-2-yl'] },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P290302f.gif', preferredPrefix: 'butan-2-yl', notNames: ['but-2-yl'] },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P290302e.gif', preferredPrefix: 'butylidyne' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P290302g.gif', preferredPrefix: 'propan-2-ylidene' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P290302h.gif', preferredPrefix: 'pentan-3-ylidene' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P290302i.gif', preferredPrefix: 'propane-1,3-diyl', notNames: ['trimethylene'] },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P290302j.gif', preferredPrefix: 'ethane-1,1-diyl', notNames: ['ethylidene'] },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P290302k.gif', preferredPrefix: 'butane-1,3-diyl' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P290302l.gif', preferredPrefix: 'ethan-1-yl-2-ylidene' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P290302m.gif', preferredPrefix: 'propan-1-yl-1-ylidene' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P290302n.gif', preferredPrefix: 'butan-3-yl-1-ylidene' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P290302o.gif', preferredPrefix: 'butan-2-yl-3-ylidene' },
  { formula: 'AsH2-AsH–', preselectedPrefix: 'diarsanyl' },
  { formula: 'SiH3-SiH2–', preselectedPrefix: 'disilanyl' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P290302p.gif', preselectedPrefix: 'triazan-1-yl' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P290302q.gif', preselectedPrefix: 'trisilan-2-yl' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P290302r.gif', preselectedPrefix: 'disiloxanyl' },
  { formula: 'SiH3-NH-SiH2–', notNames: ['disilazan-1-yl'] },
  { formula: '(SiH3)2N–', preselectedPrefix: 'disilylamino', notNames: ['disilazan-2-yl'] },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P290302s.gif', preselectedPrefix: 'bis(silylamino)silyl', notNames: ['trisilazan-3-yl'] },
  { formula: 'H2N-NH–', preselectedPrefix: 'hydrazinyl' },
  { formula: 'H2N-N=', preselectedPrefix: 'hydrazinylidene' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P290302t.gif', preferredPrefix: '2,5,8,11-tetraoxatetradecan-14-yl' },
]);
