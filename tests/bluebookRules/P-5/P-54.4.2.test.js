/**
 * P-54.4.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Saturated heteromonocyclic compounds
 * Preferred IUPAC names for saturated heteromonocyclic compounds are either Hantzsch-Widman names
 * described in P-22.2.2.1.1 or retained names given in Table 2.3. Names of saturated rings derived by
 * using hydro prefixes with Hantzsch-Widman names (see P-54.4.1) and retained names by adding the
 * maximum of hydro prefixes, or ‘cyclo’ names described in P-22.2.5, are not preferred IUPAC names,
 * but they may be used in general nomenclature.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 600, P-54.4.2, example 7 on this page. [corrected 27 May 2020]
 *     Delete pentazolane
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-54.4.2', [
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P540402a.gif', pin: '1H-phosphole' },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P540402b.gif', pin: 'phospholane', otherNames: ['2,3,4,5-tetrahydro-1H-phosphole'] },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P540402c.gif', pin: 'siline' },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P540402d.gif', pin: 'silinane', otherNames: ['hexahydrosiline'] },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P540402e.gif', pin: 'furan' },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P540402f.gif', pin: 'oxolane', otherNames: ['tetrahydrofuran'] },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P540402g.gif', pin: 'pyridine' },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P540402h.gif', pin: 'piperidine', otherNames: ['hexahydropyridine'] },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P540402i.gif', pin: '1,4-thiazepine' },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P540402j.gif', pin: '1,4-thiazepane', otherNames: ['hexahydro-1,4-thiazepine'] },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P540402k.gif', preselectedName: 'pentazolidine', otherNames: ['cylopentaazane'] },
]);
