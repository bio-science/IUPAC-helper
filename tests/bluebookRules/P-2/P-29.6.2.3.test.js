/**
 * P-29.6.2.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The prefix ethylene and the following traditional prefixes for ring substituents are retained but
 * only for general nomenclature and are fully substitutable.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-29.6.2.3', [
  { formula: '–CH2-CH2–', preferredPrefix: 'ethane-1,2-diyl' },
  { formula: '–CHCl-CHCl–', preferredPrefix: '1,2-dichloroethane-1,2-diyl' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P290602i.gif', preferredPrefix: 'adamantan-2-yl' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P290602j.gif', preferredPrefix: 'anthracen-2-yl' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P290602k.gif', name: '3-furyl' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P290602l.gif', name: '7-isoquinolyl' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P290602m.gif', name: '2-naphthyl' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P290602n.gif', name: '9-phenanthryl' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P290602o.gif', name: '2-piperidyl' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P290602p.gif', name: '2-pyridyl' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P290602q.gif', name: '2-quinolyl' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P290602r.gif', name: '2-thienyl' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P290602s.gif', name: 'o-tolyl' },
]);
