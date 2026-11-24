/**
 * P-66.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Imides are compounds containing the structural grouping –CO-NH-CO–. Acyclic imides are N-acyl
 * derivatives of primary amides and are named as such (see P-66.1.2.1). Cyclic imides are preferably
 * named as heterocyclic pseudoketones. They may also be named by replacing the suffixes ‘dioic acid’,
 * or ‘dicarboxylic acid’ of the corresponding dibasic acid, or ‘ic acid’ in retained names of diacids,
 * by ‘imide’ or ‘dicarboximide’.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.2.1', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66210a.gif', pin: 'pyrrolidine-2,5-dione', otherNames: ['succinimide'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66210b.gif', pin: '1H-pyrrole-2,5-dione', otherNames: ['pyrrole-2,5-dione'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66210c.gif', pin: '1-bromopyrrolidine-2,5-dione', notNames: ['N-bromosuccinimide'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66210d.gif', pin: 'hexahydro-1H-isoindole-1,3(2H)-dione', otherNames: ['hexahydro-2H-isoindole-1,3-dione', 'cyclohexane-1,2-dicarboximide'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66210e.gif', pin: '2-phenyl-1H-isoindole-1,3(2H)-dione', otherNames: ['2-phenyl-2H-isoindole-1,3-dione', 'N-phenylphthalimide'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66210f.gif', pin: '1,3-oxazetidine-2,4-dione' },
]);
