/**
 * P-65.1.2.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Seniority order for numbering
 * When required, numbering is based on the seniority order given in P-14.4.
 * Heteroatoms in chains are now considered to be an integral part of the parent hydride and as such
 * they have seniority over suffixes for numbering (see P-14.4; see also P-15.4).”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.1.2.3', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650102s.gif', pin: '1-oxacycloundecane-3-carboxylic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650102t.gif', pin: '2,5,8-trioxa-11-thiatetradecan-14-oic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650102u.gif', pin: '2-ethylideneoctanoic acid', notNames: ['2-hexylbut-2-enoic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650102v.gif', pin: 'naphthalene-4a,8a-dicarboxylic acid', otherNames: ['4a,8a-dihydronaphthalene-4a,8a-dicarboxylic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650102w.gif', pin: 'naphthalene-4a(2H)-carboxylic acid', otherNames: ['2,4a-dihydronaphthalene-4a-carboxylic acid'] },
]);
