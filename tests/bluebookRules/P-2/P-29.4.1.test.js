/**
 * P-29.4.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Compound substituted substituent groups
 * A compound substituted substituent group is formed by substituting one or more simple substituents
 * into another simple substituent that is considered as the principal chain. The choice of the
 * principal chain is fully discussed in Section P-44.3. The first criterion to be applied is that the
 * principal chain is the longest chain; it will be applied in the following examples of acyclic
 * compound substituent groups.
 * Mono-, di-, and polyvalent substituent groups derived from homogeneous chains are named by prefixing
 * the designation of the side chains to the name of the unbranched substituent group possessing the …
 * Names of substituent groups are formed in accordance with P-29.3. Substituent groups of compound
 * substitutive groups must be named by the preferred IUPAC name, as described in Chapter P-5, or …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-29.4.1', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P290401a.gif', preferredPrefix: 'pentan-2-yl' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P290401b.gif', preferredPrefix: '2-methylbutyl' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P290401c.gif', preselectedPrefix: '3-silyltetrasilan-1-yl' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P290401d.gif', preferredPrefix: '1-methyltetrasilan-1-yl' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P290401e.gif', preferredPrefix: 'propan-2-ylidene' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P290401f.gif', preferredPrefix: 'tert-butyl' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P290401g.gif', preferredPrefix: '2-methylpentan-3-yl', notNames: ['4-methylpentan-3-yl'] },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P290401h.gif', preferredPrefix: 'pentane-1,4-diyl' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P290401i.gif', preferredPrefix: 'butane-1,1,2-triyl' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P290401j.gif', preferredPrefix: '2-methylcyclopentyl' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P290401k.gif', preferredPrefix: '2,6-di(butan-2-yl)cyclohexyl' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P290401l.gif', preferredPrefix: '7-methylnaphthalen-2-yl' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P290401m.gif', preferredPrefix: '6-disiloxanylpyridin-2-yl' },
]);
