/**
 * P-64.2.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Acyclic ketones
 * Unsubstituted acyclic ketones are systematically named in two ways:
 * (1) substitutively, using the suffix ‘one’ and the prefix ‘oxo’; the presence of several ‘one’
 * characteristic groups is denoted by the numerical multiplying prefixes ‘di’, ‘tri’, etc.; …
 * (2) by functional class nomenclature using the class names ‘ketone’, ‘diketone’ etc.; substituent
 * groups are placed, as separate words, in alphanumerical order before the class name.
 * Method (1) generates preferred IUPAC names.”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-64.2.2.1', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640202a.gif', pin: 'propan-2-one', otherNames: ['dimethyl ketone', 'acetone'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640202b.gif', pin: 'butan-2-one', otherNames: ['ethyl methyl ketone'], notNames: ['methyl ethyl ketone'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640202c.gif', pin: 'heptan-3-one', otherNames: ['butyl ethyl ketone'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640202d.gif', pin: 'pentacosane-7,9,17,19-tetrone' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640202e.gif', pin: '5-methylhexan-2-one', otherNames: ['methyl 3-methylbutyl ketone'], notNames: ['isopentyl methyl ketone'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640202f.gif', pin: '1-phenylpropan-2-one', otherNames: ['benzyl methyl ketone'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640202g.gif', pin: '1-phenylethan-1-one', otherNames: ['acetophenone (no substitution)'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640202h.gif', pin: '1-(3-chlorophenyl)ethan-1-one', notNames: ['3′-chloroacetophenone'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640202i.gif', pin: '2-bromo-1-(4-chlorophenyl)ethan-1-one', notNames: ['4-chlorophenacyl bromide', '2-bromo-4′-chloroacetophenone'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640202j.gif', pin: 'diphenylmethanone', otherNames: ['benzophenone', 'diphenyl ketone'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640202k.gif', pin: 'di(naphthalen-2-yl)ethanedione', otherNames: ['di(2-naphthyl)ethanedione', 'di(2-naphthyl) diketone'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640202l.gif', pin: '1-(furan-2-yl)-3-(1H-pyrrol-2-yl)propane-1,2,3-trione', otherNames: ['1-(2-furyl)-3-(pyrrol-2-yl)propanetrione', '2-furyl pyrrol-2-yl triketone'] },
]);
