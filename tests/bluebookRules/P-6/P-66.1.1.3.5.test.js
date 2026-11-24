/**
 * P-66.1.1.3.5
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “General substitution of amides
 * Substitution of amides is expressed by prefixes; numerical, N, and N′ locants are used as required.
 * N-Substitution of amides follows the substitution rules for carboxylic acids described in
 * P-65.1.2.4.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 847, P-66.1.1.3.5, example 2. [corrected 26 September 2018]
 *     Replace the structure with:
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.1.1.3.5', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66113p.gif', pin: '3-chloropropanamide', notNames: ['3-chloropropionamide'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66113q.gif', pin: '4-chloro-N,N-dimethylbutanamide', notNames: ['4-chloro-N,N-dimethylbutyramide'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66113r.gif', pin: '4-(pyridin-4-yl)benzamide', otherNames: ['4-(4-pyridyl)benzamide'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66113s.gif', pin: '2-chloropyridine-3-carboxamide', notNames: ['2-chloronicotinamide'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66113t.gif', pin: '4-methylbenzene-1,2-dicarboxamide', otherNames: ['4-methylphthalamide'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66113u.gif', pin: '2-hydroxybenzamide', notNames: ['salicylamide'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66113v.gif', pin: '3,5-diamino-6-chloropyrazine-2-carboxamide' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66113w.gif', pin: '2,2′-[ethane-1,2-diylbis(azanediyl)]di(cyclohexane-1-carboxamide)' },
]);
