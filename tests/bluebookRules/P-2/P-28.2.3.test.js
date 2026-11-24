/**
 * P-28.2.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Indicated hydrogen of components in two-component ring assemblies is named and numbered according
 * to P-58.2.1, ignoring the indicated hydrogen atoms of the component rings or ring systems. The
 * maximum number of noncumulative double bonds is then added taking into account the junction
 * positions. Any remaining saturated ring positions are designated as indicated hydrogen, placed
 * together with the appropriate locant(s) at the front of the name of the assembly.
 * The citation of indicated hydrogen, if needed, at the front of the name of the ring assembly is a
 * change from its position in previous editions (refs. …
 * Note: Citing the indicated hydrogen in front of the name of the ring assembly follows the method now
 * adopted for bridged fused systems (see P-25.7.1.3.2) and spiro ring systems (see P-24.3.2). …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-28.2.3', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P280203a.gif', pin: '6H,6′H-2,2′-bipyran', notNames: ['2,2′-bi-6H-pyran'] },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P280203b.gif', pin: '1,1′-bipyrrole', notNames: ['1,1′-bi-1H-pyrrole'] },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P280203c.gif', pin: '1H,1′H-1,1′-biindene', notNames: ['1,1′-bi-1H-indene'] },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P280203d.gif', pin: '3a,3′a-biindene', notNames: ['3a,3′a-bi-3aH-indene'] },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P280203e.gif', pin: '2′H-1,2′-biindole' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P280203f.gif', pin: '1H,3′H-4,4′-biazepine' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P280203g.gif', pin: '2H-1,2′-biisoindole' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P280203h.gif', pin: '2′H-1,4′a-binaphthalene' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P280203i.gif', pin: '2H-1,2′-bipyridine' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P280203j.gif', pin: '2′H,3H-2,3′-bifuranylidene' },
]);
