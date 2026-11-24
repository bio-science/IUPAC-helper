/**
 * P-65.3.3
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Polyfunctional compounds
 * Polyfunctional compounds are named in accordance with the general order of seniority of suffixes
 * described in Sections P-41 and P-43. When required, numbering is based on the seniority order
 * described in P-61.1.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.3.3', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650303a.gif', pin: '4-aminonaphthalene-1-sulfonic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650303b.gif', pin: '8-ethoxyquinoline-5-sulfonic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650303c.gif', pin: '8-hydroxy-5,7-dinitronaphthalene-2-sulfonic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650303d.gif', pin: '7-aminonaphthalene-1,3-disulfonic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650303e.gif', pin: '2-(trithiosulfo)benzene-1-sulfonothioic S-acid' },
]);
