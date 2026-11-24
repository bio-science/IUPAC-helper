/**
 * P-29.6.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Retained prefixes that are preferred prefixes
 * The traditional prefixes benzyl, benzylidene, benzylidyne are retained preferred prefixes, but are
 * not to be substituted; however, see P-29.6.2.
 * In the 1993 Guide (ref. 2), the names ‘benzyl’, ‘benzylidene’, and ‘benzylidyne’ could only be
 * substituted on the ring. …
 * The retained name ‘tert-butyl’ has never been recommended for further substitution; this is
 * maintained in these recommendations. Acceptable locants have never been adopted for this name. …
 * The retained prefixes ‘methylene’, ‘phenyl’, and ‘1,2-, 1,3-, and 1,4-phenylene’ have been used as
 * fully substitutable substituent groups; …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 366, P-29.6.1, example 3. [modified 18 September 2019]
 *     For tert-butyl(dimethyl)phosphane (PIN)
 *     read tert-butyldi(methyl)phosphane (PIN)
 *     for dimethyl(1-methylethyl)phosphane
 *     read (1,1-dimethylethyl)di(methyl)phosphane
 *   Page 366, P-29.6.1, example 3. [modified 20 February 2019] for dimethyl(1-methylethyl)phosphane
 *     read (1,1-dimethylethyl)dimethylphosphane
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-29.6.1', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P290601a.gif', pin: '2-benzylpyridine', otherNames: ['2-(phenylmethyl)pyridine'] },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P290601b.gif', pin: '2-[(4-bromophenyl)methyl]pyridine', otherNames: ['2-(4-bromobenzyl)pyridine'] },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P290601c.gif', pin: 'tert-butyldi(methyl)phosphane' },
  { formula: '–CHBr–', preferredPrefix: 'bromomethylene' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P290601e.gif', preferredPrefix: '4-methylphenyl' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P290601f.gif', preferredPrefix: '2,6-dimethyl-1,4-phenylene' },
]);
