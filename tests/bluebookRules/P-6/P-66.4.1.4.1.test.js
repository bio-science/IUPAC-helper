/**
 * P-66.4.1.4.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “N-Substituted amidines are named by prefixing the name of the appropriate substituent to the name
 * of the unsubstituted imidamides, with N and N′ as locants when there is only one imidamide suffix;
 * the locant N refers to the amino group and N′ refers to the imino group. The locants N and N′ with
 * superscripted numbers for example, N¹ or N′², are used when there are two or more imidamide
 * suffixes. Because of tautomerism, the locants N, N′, etc. …
 * The locants N and N′ are used for the NH2 and NH group of amidines, respectively, rather than the
 * locants N¹ and N² which were used in the 1979 recommendations (ref. 1).”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.4.1.4.1', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66414a.gif', pin: 'N′-methyl-N,N-diphenylbenzenecarboximidamide', notNames: ['N′-methyl-N,N-diphenylbenzenecarboxamidine'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66414b.gif', pin: 'N′-ethyl-N-methylbenzenecarboximidamide', notNames: ['N′-ethyl-N-methylbenzenecarboxamidine'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66414c.gif', pin: 'N-phenylbenzenecarboximidamide', notNames: ['N-phenylbenzenecarboxamidine', 'benzimidanilide'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66414d.gif', pin: 'N¹,N¹,N′³-triethyl-N′¹,N³,N³-trimethylnaphthalene-1,3-dicarboximidamide' },
]);
