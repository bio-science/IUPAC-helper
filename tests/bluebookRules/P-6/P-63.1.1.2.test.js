/**
 * P-63.1.1.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The following names are retained but only for general nomenclature and only when unsubstituted.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-63.1.1.2', [
  { formula: 'HO-CH2-CH2-OH', pin: 'ethane-1,2-diol', otherNames: ['ethylene glycol'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630101c.gif', pin: 'propane-1,2,3-triol', otherNames: ['glycerol'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630101d.gif', pin: '2,2-bis(hydroxymethyl)propane-1,3-diol', otherNames: ['pentaerythritol'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630101e.gif', pin: '2,3-dimethylbutane-2,3-diol', otherNames: ['pinacol'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630101f.gif', pin: '4-methylphenol' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630101g.gif', pin: '2-methyl-5-(propan-2-yl)phenol', otherNames: ['carvacrol'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630101h.gif', pin: '5-methyl-2-(propan-2-yl)phenol', otherNames: ['thymol'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630101i.gif', pin: 'benzene-1,2-diol', otherNames: ['pyrocatehol'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630101j.gif', pin: 'benzene-1,3-diol', otherNames: ['resorcinol'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630101k.gif', pin: 'benzene-1,4-diol', otherNames: ['hydroquinone'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630101l.gif', pin: '2,4,6-trinitrophenol', otherNames: ['picric acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630101m.gif', pin: 'naphthalen-1-ol', otherNames: ['1-naphthol'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630101n.gif', pin: 'anthracen-9-ol', otherNames: ['9-anthrol'] },
]);
