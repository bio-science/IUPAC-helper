/**
 * P-64.3.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Cyclic anhydrides, esters and amides are named as pseudoketones; the resulting names are preferred
 * IUPAC names.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-64.3.1', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640301a.gif', pin: 'oxolane-2,5-dione', otherNames: ['succinic anhydride'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640301b.gif', pin: 'azepan-2-one', otherNames: ['hexano-6-lactam'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640301c.gif', pin: 'imidazolidine-2,4-dione' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640301d.gif', pin: 'pyrrolidin-2-one', notNames: ['2-pyrrolidone'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640301e.gif', pin: 'quinolin-2(1H)-one', notNames: ['1,2-dihydroquinolin-2-one'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640301f.gif', pin: 'isoquinolin-1(2H)-one', notNames: ['1,2-dihydroisoquinolin-1-one'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640301g.gif', pin: '1,2-dihydro-3H-indol-3-one', notNames: ['1H-indol-3(2H)-one'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640301h.gif', pin: '1,3-diazinane-2,4,6-trione', otherNames: ['pyrimidine-2,4,6(1H,3H,5H)-trione'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640301i.gif', pin: '1,3,5-triazinane-2,4,6-trione', otherNames: ['1,3,5-triazine-2,4,6(1H,3H,5H)-trione'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640301j.gif', pin: '2′H,5H-[2,3′-bifuranylidene]-2′,5-dione' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640301k.gif', pin: '2′H,4′H-[2,3′-bipyranylidene]-2′,5(6H)-dione' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640301l.gif', pin: '2′H,4′H-[2,3′-bipyranylidene]-4′,6(5H)-dione' },
]);
