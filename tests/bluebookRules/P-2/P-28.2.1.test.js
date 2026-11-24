/**
 * P-28.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Ring assemblies with a single bond junction
 * Assemblies of two identical cyclic systems joined by a single bond are named by one of two methods:
 * (1) by placing the prefix ‘bi’ (see P-14.2.3) before the name of the corresponding parent hydride
 * enclosed in parentheses, if necessary. Parentheses are used to avoid confusion with von Baeyer
 * names;
 * (2) by placing the prefix ‘bi’ (see P-14.2.3) before the name of the corresponding substituent group
 * (for names of substituent groups, see P-29), enclosed in parentheses, if necessary.
 * Each cyclic system is numbered in the traditional way, one with unprimed locants, the other with
 * primed locants. Lowest possible locants must be used to denote the positions of attachment. These
 * locants must be cited in preferred IUPAC names; they can be omitted in general nomenclature when no
 * ambiguity would result.
 * The name biphenyl is retained as 1,1′-biphenyl.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-28.2.1', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P280201a.gif', pin: '1,1′-bi(cyclopropane)', otherNames: ['1,1′-bi(cyclopropyl)'] },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P280201b.gif', pin: '1,1′-biphenyl', otherNames: ['biphenyl'] },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P280201c.gif', pin: '2,2′-bipyridine', otherNames: ['2,2′-bipyridyl'] },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P280201d.gif', pin: '1,2′-binaphthalene', otherNames: ['1,2′-binaphthyl'] },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P280201e.gif', pin: '2,3′-bifuran', otherNames: ['2,3′-bifuryl'] },
]);
