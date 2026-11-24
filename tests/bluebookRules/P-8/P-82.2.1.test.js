/**
 * P-82.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The name of an isotopically substituted compound is formed by adding or inserting the nuclide
 * symbol(s) enclosed in parentheses, preceded by any necessary locant(s), letters, and/or numerals,
 * before the part of the compound that is isotopically substituted. Immediately after the parentheses
 * there is neither space nor hyphen, except that when the name, or a part of a name, includes a
 * preceding locant, a hyphen is inserted. …
 * When polysubstitution at a single position is possible, the number of atoms substituted is always
 * specified as a right subscript to the atomic symbol(s), even in case of monosubstitution.
 * For polysubstitution with isotopically modified and unmodified atoms or groups, see P-82.2.2. For
 * compounds modified by hydro prefixes, see P-82.2.3.”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1132, P-82.2.1, example 6. [modified 3 April 2019]
 *     For 1-phenyl(1,2-¹³C2)ethanone (PIN)
 *     read 1-phenyl(1,2-¹³C2)ethan-1-one (PIN)
 *     for (1,2-¹³C)acetophenone
 *     read (1,2-¹³C2)acetophenone
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-82.2.1', [
  { formula: '¹²CHCl3', pin: 'trichloro(¹²C)methane' },
  { formula: 'C²H2Cl2', pin: 'dichloro(²H2)methane' },
  { formula: 'C6H5-¹³CO-¹³CH3', pin: '1-phenyl(1,2-¹³C2)ethan-1-one' },
  // Drawn in the Blue Book.
  { drawing: 'P8gif/P82210b.gif', pin: '1,2-di[(¹³C)methyl]benzene' },
  // Drawn in the Blue Book.
  { drawing: 'P8gif/P82210c.gif', pin: '1-(¹³C)methyl(2-¹³C)benzene' },
  // Drawn in the Blue Book.
  { drawing: 'P8gif/P82210d.gif', pin: '1-[amino(¹⁴C)methyl]cyclopentan-1-ol' },
  // Drawn in the Blue Book.
  { drawing: 'P8gif/P82210e.gif', pin: '1-(aminomethyl)cyclopentan-1-(¹⁸O)ol' },
  // Drawn in the Blue Book.
  { drawing: 'P8gif/P82210f.gif', pin: 'N-[7-(¹³¹I)iodo-9H-fluoren-2-yl]acetamide' },
  // Drawn in the Blue Book.
  { drawing: 'P8gif/P82210g.gif', pin: 'sodium 4-ethoxy-4-oxo(2,3-¹⁴C2)butanoate', otherNames: ['sodium ethyl (2,3-¹⁴C2)butanedioate', 'sodium ethyl (2,3-¹⁴C2)succinate'] },
  // Drawn in the Blue Book.
  { drawing: 'P8gif/P82210h.gif', pin: '4-[(3-¹⁴C)thiolan-2-yl]pyridine', otherNames: ['4-[tetrahydro(3-¹⁴C)thiophen-2-yl]pyridine'] },
  // Drawn in the Blue Book.
  { drawing: 'P8gif/P82210i.gif', pin: '2-(³⁵Cl)chloro-3-(²H3)methyl(1-²H1)pentane' },
]);
