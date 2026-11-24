/**
 * P-66.1.6.1.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The imidic acid tautomer of urea, H2N-C(OH)=NH, is named ‘carbamimidic acid’, a shortened form of
 * the systematic functional replacement name ‘carbonamidimidic acid’. The name ‘isourea’ is no longer
 * recommended, but is retained as a class name. In preferred IUPAC names, derivatives of carbamimidic
 * acid are named using the locants N and N′. Since the name isourea is no longer recommended, even for
 * general nomenclature, no numerical locants used in previous recommendations are needed. …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.1.6.1.2.1', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66161l.gif', pin: 'carbamimidic acid', notNames: ['isourea'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66161m.gif', name: 'ethyl N′-methyl-N,N-diphenylcarbamimidate(PIN)', notNames: ['O-ethyl-N′-methyl-N,N-diphenylisourea'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66161n.gif', pin: 'ethyl N,N-diphenylcarbamimidate', notNames: ['O-ethyl-N,N-diphenylisourea'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66161o.gif', pin: 'ethyl N-phenylcarbamimidate', notNames: ['O-ethyl-N-phenylisourea'] },
]);
