/**
 * P-65.2.3.1.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Superscripted italic letter locants N², N³, etc. are used to designate substitution on nitrogen
 * atoms that are not amide linkages that are part of the chain for which arabic numbers are used as
 * locants.
 * This is a change. Primed letter locants, N′, N′′, N′′′, etc. were previously used as locants for
 * nitrogen atoms that are not amide linkages that are part of the chain for which arabic numbers are
 * …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.2.3.1.2.1', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650203c.gif', pin: '2-thiodicarbonic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650203d.gif', pin: '2-imidodicarbonic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650203e.gif', pin: '2-peroxydicarbonic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650203f.gif', pin: '1-imidodicarbonic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650203g.gif', pin: '1,3-diimidodicarbonic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650203h.gif', pin: '1,2,3,4,5-pentaimidotricarbonic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650203i.gif', pin: '1,2,3,4,5,6,7-heptaimidotetracarbonic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650203j.gif', pin: '1-peroxydicarbonic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650203k.gif', pin: '1,3-diperoxydicarbonic acid' },
]);
