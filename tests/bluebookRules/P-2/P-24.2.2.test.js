/**
 * P-24.2.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Linear polyspiro alicyclic ring systems
 * Polyspiro parent hydrides consisting of unbranched assemblies of three or more saturated cycloalkane
 * rings are named using the nondetachable prefixes ‘dispiro’, ‘trispiro’, etc., according to the
 * number of spiro atoms present, cited in front of the name of the acyclic hydrocarbon that has the
 * same number of skeletal atoms. …
 * The use of superscript numbers was introduced in the publication ‘Extension and Revision of the
 * Nomenclature for Spiro Compounds and IUPAC Recommendations 1999’ (ref. 8). …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-24.2.2', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P240202a.gif', pin: 'dispiro[3.2.3⁷.2⁴]dodecane' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P240202b.gif', pin: 'dispiro[2.2.3⁶.2³]undecane' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P240202c.gif', pin: 'trispiro[2.2.2.2⁹.2⁶.2³]pentadecane' },
]);
