/**
 * P-102.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “The bases for carbohydrate names are the structures of the parent monosaccharides in their acyclic
 * form. Tables 10.2 and 10.3 give retained names for parent aldoses and ketoses with up to six carbon
 * atoms. These retained names are customarily used when the acyclic aldose or ketose has a carbon
 * chain consisting of four, five, or six carbon atoms. Names of monosaccharides whose carbon skeleton
 * is composed of more than six carbon atoms are systematic carbohydrate names.
 * In Table 10.2 structures and retained names of the aldoses (in the aldehydic, acyclic form) with
 * three through six carbon atoms are described. Only the D-forms are shown; …
 * In Table 10.3 structures and retained names of the 2-ketoses (in the ketonic, acyclic form) with
 * three through six carbon atoms are described. Only the D-forms are shown; …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-102.2.1', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102210a.gif', name: 'D-glyceraldehyde' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102210b.gif', name: 'D-erythrose' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102210c.gif', name: 'D-threose' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102210d.gif', name: 'D-ribose' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102210e.gif', name: 'D-arabinose' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102210f.gif', name: 'D-xylose' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102210g.gif', name: 'D-lyxose' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102210h.gif', name: 'D-allose' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102210i.gif', name: 'D-altrose' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102210j.gif', name: 'D-glucose' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102210k.gif', name: 'D-mannose' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102210l.gif', name: 'D-gulose' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102210m.gif', name: 'D-idose' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102210n.gif', name: 'D-galactose' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102210o.gif', name: 'D-talose' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102210p.gif', name: '1,3-dihydroxypropan-2-one' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102210q.gif', name: 'D-erythrulose' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102210r.gif', name: 'D-ribulose' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102210s.gif', name: 'D-xylulose' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102210t.gif', name: 'D-psicose' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102210u.gif', name: 'D-fructose' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102210v.gif', name: 'D-sorbose' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P102210w.gif', name: 'D-tagatose' },
]);
