/**
 * P-31.2.3.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Names of saturated heteromonocyclic compounds
 * Preferred IUPAC names of saturated heteromonocyclic compounds are either Hantzsch-Widman names
 * described in P-22.2.2.1.1 or retained names described in Table 2.3. Names of saturated rings derived
 * by using hydro prefixes from Hantzsch-Widman names, retained names modified by adding the maximum of
 * hydro prefixes, or ‘cyclo’ names described in P-22.2.5 are not preferred IUPAC names, but they may
 * be used in general nomenclature.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 393, P-31.2.3.2, example 3 on this page. [modified 27 May 2020]
 *     For pentazolidine
 *     read pentazolidine (preselected name; see P-12.1; P-22.2.2.1.5.2, P-22.2.5)
 *     delete pentazolane
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-31.2.3.2', [
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P310203g.gif', pin: '1H-phosphole' },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P310203h.gif', pin: 'phospholane', otherNames: ['tetrahydro-1H-phosphole'] },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P310203i.gif', pin: 'siline' },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P310203j.gif', pin: 'silinane', otherNames: ['hexahydrosiline'] },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P310203k.gif', pin: 'furan' },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P310203l.gif', pin: 'oxolane', otherNames: ['tetrahydrofuran'] },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P310203m.gif', pin: 'pyridine' },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P310203n.gif', pin: 'piperidine', otherNames: ['hexahydropyridine'] },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P310203o.gif', pin: '2H-pyran' },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P310203p.gif', pin: 'oxane', otherNames: ['tetrahydropyran'] },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P310203q.gif', pin: '1,4-thiazepine' },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P310203r.gif', pin: '1,4-thiazepane', otherNames: ['hexahydro-1,4-thiazepine'] },
  // Drawn in the Blue Book.
  { drawing: 'P3gif/P310203s.gif', preselectedName: 'pentazolidine', otherNames: ['cyclopentaazane'] },
]);
