/**
 * P-66.3.1.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Substitutive nomenclature
 * Hydrazides are named substitutively by using the following suffixes (see Table 4.4). The method of
 * naming hydrazides as acyl derivatives of hydrazine is no longer recommended.
 * For naming acyclic hydrazides, the suffix ‘hydrazide’ is recommended in place of ‘ohydrazide’ in
 * accordance with the general use of suffixes added to names of parent hydrides, for example …
 * The suffix ‘hydrazide’ is used to name acyclic compounds. The suffix ‘carbohydrazide’ is used to
 * denote the –CO-NH-NH2 characteristic group attached to cyclic compounds and in chains having more
 * than …
 * Nitrogen atoms in hydrazides are identified by the locants N and N′ as , even though hydrazine
 * itself, is numbered using the numerical locants 1 and 2, . …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 871, P-66.3.1.1, box, line 4. [corrected 26 September 2018]
 *     For ...CH3-CH3-CH2-CH2-CO-NH-NH2, not pentanohydrazide
 *     read ...CH3-CH2-CH2-CH2-CO-NH-NH2, not pentanohydrazide.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.3.1.1', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66311c.gif', pin: 'pentanehydrazide', notNames: ['pentanoylhydrazine'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66311d.gif', pin: 'butanedihydrazide', otherNames: ['succinohydrazide'], notNames: ['(ethane-1,2-diyldicarbonyl)dihydrazine', 'succinyldihydrazine'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66311e.gif', pin: 'cyclohexanecarbohydrazide', notNames: ['(cyclohexanecarbonyl)hydrazine'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66311f.gif', pin: 'piperidine-1-carbohydrazide', notNames: ['(piperidine-1-carbonyl)hydrazine'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66311g.gif', pin: 'methanesulfonohydrazide', notNames: ['(methanesulfonyl)hydrazine'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66311h.gif', pin: 'ethane-1,1,1-tricarbohydrazide' },
]);
