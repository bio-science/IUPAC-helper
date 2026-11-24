/**
 * P-66.1.1.3.1.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Substituted primary amides, with general structures such as R-CO-NHR′ and R-CO-NR′R′′, and the
 * corresponding amides derived from chalcogen acids are named by citing the substituents R′ and R′′ as
 * prefixes preceded by the locant N when one amide group is present. In di- and polyamides, except for
 * geminal diamides, N locants with superscripted arabic numbers, which are the locants of the parent
 * structure, are used to differentiate the nitrogen atoms, for example, N¹, N³, etc. …
 * Superscript arabic numbers are now used to differentiate the nitrogen atoms of diamides, where
 * primes (′), double primes (′′), triple primes (′′′), etc. were formerly used.
 * N-Substitution of primary amides is not allowed when amides having retained names are designated as
 * not substitutable.”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 843, P-66.1.1.3.1.1, line 6. [corrected 13 March 2019]
 *     For ... for example, N¹, N′1, etc. (see ...
 *     read ... for example, N¹, N³, etc. (see ...
 *   Page 844, P-66.1.1.3.1.1, example 1. [corrected 26 January 2022]
 *     For N,N-dimethylformamide (PIN)
 *     read dimethylformamide (PIN)
 *     Delete dimethylformamide
 *   Page 844, P-66.1.1.3.1.1, example 2. [corrected 10 October 2018]
 *     Replace the structure with:
 *   Page 844, P-66.1.1.3.1.1, example 3. [corrected 26 September 2018]
 *     Replace the structure with:
 *   Page 844, P-66.1.1.3.1.1, example 5. [corrected 19 September 2018]
 *     For N,N-diethyl-2-furanamide
 *     read N,N-diethyl-2-furamide
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.1.1.3.1.1', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66113a.gif', pin: 'dimethylformamide' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66113b.gif', pin: 'N-(propan-2-yl)acetamide' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66113c.gif', pin: 'N,N-dimethylpropanamide', notNames: ['N,N-dimethylpropionamide'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66113d.gif', pin: 'N-methylbenzamide' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66113e.gif', pin: 'N,N-diethylfuran-2-carboxamide', otherNames: ['N,N-diethyl-2-furamide'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66113f.gif', pin: 'N¹-methylbutanediamide' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66113g.gif', pin: 'N¹,N⁵-dimethylpentanediamide' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66113h.gif', pin: 'N³-ethyl-N¹-methylnaphthalene-1,3-disulfonamide' },
]);
