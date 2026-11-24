/**
 * P-66.1.1.4.1.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “In the presence of a characteristic group having priority for citation as suffix or if all
 * carbamoyl groups cannot be included in the suffix, the –CO-NH2 group is named in three different
 * ways:
 * (1) by using the two prefixes ‘amino’ and ‘oxo’ to denote such groups on terminal atoms of carbon
 * chains having more than one carbon atom;
 * (2) by using the acyl group name ‘carbamoyl’ (see P-65.2.1.5);
 * (3) by using the prefix ‘aminocarbonyl’.
 * For generation of IUPAC preferred names, method (1) is preferred for chains and method (2) for rings
 * and ring systems, heterogeneous chains, and on nonterminal atoms of carbon chains. Carbamoyl and
 * amino groups may be substituted in the normal way.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.1.1.4.1.1', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66114a.gif', pin: '3-(dimethylcarbamoyl)pentanedioic acid', otherNames: ['3-[(dimethylamino)carbonyl]pentanedioic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66114b.gif', pin: '5-(2-amino-2-oxoethyl)furan-2-carboxylic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66114b.gif', pin: '3-carbamoylnaphthalene-2-carboxylic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66114d.gif', pin: '2-carbamoylbenzoic acid', otherNames: ['2-(aminocarbonyl)benzoic acid', 'phthalamic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66114e.gif', pin: '6-carbamoylnaphthalene-2-sulfonic acid', otherNames: ['6-(aminocarbonyl)naphthalene-2-sulfonic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66114f.gif', pin: '5-methyl-2-[methyl(phenyl)carbamoyl]benzoic acid', otherNames: ['5-methyl-2-[(N-methylanilino)carbonyl]benzoic acid', '5-methyl-2-{[methyl(phenyl)amino]carbonyl}benzoic acid'] },
]);
