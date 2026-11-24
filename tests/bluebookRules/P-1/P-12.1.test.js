/**
 * P-12.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “PREFERRED IUPAC NAMES
 * Preferred IUPAC names are names for structures or structural components that are preferred among two
 * or more names for the same structure generated from two or more recommended IUPAC rules for organic
 * compounds or the many synonyms that have been coined and used over the years.
 * Preferred IUPAC names, or PINs for short, are names selected according to the set of principles,
 * conventions, and rules given herein. They originate from the strict application of the rules; …
 * It is necessary to select a preferred alternative in many instances in the construction of the names
 * of organic compounds. Preferred IUPAC names are given to parent structures; …
 * Most commonly, a parent structure is a parent hydride, i.e., a structure containing, in addition to
 * one or more hydrogen atoms, a single atom of an element, for example, methane; …
 * It is sometimes convenient to employ parent hydrides of more complex structure, such as ring or
 * ring-chain assemblies, for example biphenyl and styrene. …
 * A special class of parent structures having retained names (see P-12.3) is called functional parent
 * compounds, for example, phenol and acetic acid. These two names are preferred IUPAC names; …
 * …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 4, P-12.1, paragraph 2, line 7. [corrected 26 January 2022]
 *     For ...substitutive names ‘vinylbenzene’, ‘phenylethene’, and ‘phenylethylene’. The name...
 *     read ...substitutive name ‘vinylbenzene’. The name...
 *   Page 4, P-12.1, example 6. [corrected 26 January 2022]
 *     Delete phenylethene and phenylethylene
 *   Page 6, P-12.1, Table 1.2, Formula 6, name. [corrected 31 July 2019]
 *     For 1-ethoxy-2-[2-(methoxyethoxy)ethoxy]ethane
 *     read 1-ethoxy-2-[2-(2-methoxyethoxy)ethoxy]ethane
 *   Page 7, P-12.1, paragraph 4, line 8. [corrected 31 July 2019]
 *     For 1-ethoxy-2-[2-(methoxyethoxy)ethoxy]ethane
 *     read 1-ethoxy-2-[2-(2-methoxyethoxy)ethoxy]ethane
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-12.1', [
  { formula: 'CH4', pin: 'methane', otherNames: ['carbane'] },
  { formula: 'CH3-CH2-CH2-CH2-CH3', pin: 'pentane' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1201a.gif', pin: 'cyclohexane' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1201b.gif', pin: 'quinoline', otherNames: ['1-benzopyridine (P-25.2.2.4)', 'benzo[b]pyridine (P-25.3.1.3)'], notNames: ['1-benzazine', 'see P-22.2.2.1.1'] },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1201c.gif', pin: '1,1′-biphenyl', otherNames: ['biphenyl'] },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1201d.gif', pin: 'ethenylbenzene', otherNames: ['styrene', 'vinylbenzene'] },
  { formula: 'C6H5-OH', pin: 'phenol', otherNames: ['benzenol'] },
  { formula: 'CH3-COOH', pin: 'acetic acid', otherNames: ['ethanoic acid'] },
  { formula: 'CH3-CO-CH3', pin: 'propan-2-one', otherNames: ['acetone'] },
  { pin: 'propane' },
  { pin: '1-ethoxypropane' },
  { pin: 'pentane' },
  { pin: '4-chloropentan-2-one' },
  { preselectedName: 'phosphane' },
  { pin: 'trimethyl phosphite' },
  { pin: 'cyclohexane' },
  { pin: 'cyclohexene' },
  { pin: 'pyridine' },
  { pin: '1,2-dihydropyridine' },
  { pin: 'ethane' },
  { pin: 'tridecane' },
  { pin: '2,5,8,11-tetraoxatridecane' },
  { pin: 'oxirane' },
  { pin: 'phenyloxirane' },
  { pin: 'bicyclo[2.2.1]heptane' },
  { pin: '7,7-dimethylbicyclo[2.2.1]heptane' },
]);
