/**
 * P-73.2.2.1.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “General method
 * According to the general method, cations formally derived by the removal of one hydride ion, H⁻,
 * from any position of a parent hydride are named by adding the suffix ‘-ylium’ to the name of the
 * parent hydride, with elision of the final ‘e’ in the name of the parent hydride, if present. Di- and
 * polycations formally derived by the removal of two or more hydride ions from the parent hydride are
 * named by using the suffix ‘ylium’ and the multiplying prefixes ‘bis’, ‘tris’, etc. …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-73.2.2.1.2', [
  { formula: 'H2N⁺', preselectedName: 'azanylium', otherNames: ['aminylium', 'nitrenium'] },
  { formula: 'C6H5-S⁺', pin: 'phenylsulfanylium' },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73221c.gif', pin: '3-methyltriaz-1-en-1-ylium' },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73221d.gif', pin: 'heptamethyltrisilan-2-ylium' },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73221e.gif', pin: 'furan-2-ylium' },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73221f.gif', pin: 'spiro[4.5]decan-8-ylium' },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73221g.gif', pin: 'propane-1,3-bis(ylium)' },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73221h.gif', pin: '2,2-dimethylhydrazine-1,1-bis(ylium)', otherNames: ['2,2-dimethyldiazane-1,1-bis(ylium)'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73221i.gif', pin: 'propane-2,2-bis(ylium)', otherNames: ['1-methylethane-1,1-bis(ylium)'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73221j.gif', pin: 'cyclobut-3-ene-1,2-bis(ylium)' },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73221k.gif', pin: 'cyclopenta-2,4-dien-1-ylium', otherNames: ['cyclopentadienylium'] },
  // Drawn in the Blue Book.
  { drawing: 'P7gif/P73221l.gif', pin: '2,5-dioxopyrrolidin-1-ylium', otherNames: ['succinimidylium'] },
]);
