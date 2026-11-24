/**
 * P-65.6.3.3.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Fully esterified acids derived from a single acid are systematically named by placing the name(s)
 * of the hydroxylic component denoted by an organyl group(s) (alkyl, aryl, etc.) as separate word(s)
 * in front of the name of the acid component denoted by the anion name derived from the appropriate
 * acid (see P-72.2.2.2.1). Multiplicative prefixes are used to denote a multiplicity of identical
 * organyl groups; different organyl groups are cited in alphanumerical order (see P-14.5). …
 * This rule applies equally to carboxylic, sulfonic, sulfinic, etc. acids.”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 808, P-65.6.3.3.2.1, last example. [corrected 25 August 2016]
 *     For ethoxy... is alphabetically preferred to ethyl...)
 *     read butanedioate is preferred to propandioate)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.6.3.3.2.1', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650603q.gif', pin: 'dimethyl butanedioate', otherNames: ['dimethyl succinate'] },
  { formula: 'CH3-CH2-O-CO-CH2-CO-O-CH3', pin: 'ethyl methyl propanedioate', otherNames: ['ethyl methyl malonate'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650603r.gif', pin: 'ethyl methyl butanedioate' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650603s.gif', pin: 'trimethyl butane-1,1,3-tricarboxylate' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650603t.gif', pin: '1,1-diethyl 3-methyl butane-1,1,3-tricarboxylate' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650603u.gif', pin: 'dimethyl 2,6-dimethyl-4-(2-nitrophenyl)-1,4-dihydropyridine-3,5-dicarboxylate' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650603v.gif', pin: '4-[(3-ethoxy-3-oxopropanoyl)oxy]phenyl methyl butanedioate', notNames: ['ethyl 4-[(4-methoxy-4-oxobutanoyl)oxy]phenyl propanedioate'] },
]);
