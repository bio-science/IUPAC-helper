/**
 * P-69.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “METALLACYCLES
 * Metallacycles are organic heterocycles in which one or more heteroatoms is (are) metal atoms other
 * than the metals normally included in the nomenclature systems for heteromonocycles (see P-22.2). …
 * The option to include the metallic elements in addition to the metals in Groups 13 through 16 in the
 * Hantzsch-Widman system and their skeletal replacement (‘a’) prefixes is a major change from …
 * Note: A project to consider the nomenclature for metallacycles containing transition metals has been
 * established.”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1045, P-69.4, example 2 on this page. [modified 24.8.2017]
 *     Delete 1-carbonyl-3,5-dimethyl-bis(triethylphosphane)iridine (Hantzsch-Widman type name)
 *     for 1-carbonyl-3,5-dimethyl-bis(triethylphosphane)-1-iridabenzene
 *     read 1-carbonyl-3,5-dimethyl-1,1-bis(triethylphosphane)-1-iridabenzene
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-69.4', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P69400a.gif', name: '1,1-dichloro-2,3,4,5-tetramethylplatinole' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P69400b.gif', name: '2,2,2,2-tetracarbonyl-1,1-dichloro-1,2-silaferrolane' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P69400c.gif', name: '6,6-di(η⁵-cyclopenta-2,4-dien-1-ido)-6-titanabicyclo[3.2.0]heptane' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P69400d.gif', name: '1-carbonyl-3,5-dimethyl-1,1-bis(triethylphosphane)-1-iridabenzene' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P69400e.gif', name: '9,9-[methylenebis(dimethylphosphane)]-10H-9-platinaanthracene' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P69400f.gif', name: '2,5-dimethoxy-7,7-bis(triphenylphosphane)-7-platinabicyclo[4.1.1]octane' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P69400g.gif', name: 'methyl 3-[1-iodo-1-methyl-1,1-bis(triethylphosphane)platinetan-3-yl]-2-methylpropanoate' },
]);
