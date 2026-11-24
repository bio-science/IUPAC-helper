/**
 * P-67.1.4.4.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “If a sulfur-containing group is attached by oxygen (chalcogen) or nitrogen to a compound that
 * contains also another substituent having priority over the sulfur- containing group for citation as
 * principal group, then the sulfur-containing group is named by an appropriate prefix formed by
 * concatenation or substitution (see P-35.4) as described in P-65.3.2.3 and P-67.1.4.4.1.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 945, P-67.1.4.4.2, example 4. [corrected 25 August 2016]
 *     For [not (sulfonamidoyloxy)propanoic acid; ...
 *     read [not 3-(sulfonamidoyloxy)propanoic acid; ...
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-67.1.4.4.2', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P67144a.gif', pin: '3-(sulfooxy)propanoic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P67144b.gif', pin: '3-[(methoxysulfinyl)oxy]propanoic acid' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P67144c.gif', pin: '3-[(chlorosulfonyl)oxy]propanoic acid', otherNames: ['3-(sulfurochloridoyloxy)propanoic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P67144d.gif', pin: '3-(sulfamoyloxy)propanoic acid', otherNames: ['3-(sulfuramidoyloxy)propanoic acid'], notNames: ['3-(sulfonamidoyloxy)propanoic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P67144e.gif', pin: '3-[(aminosulfinyl)oxy]propanoic acid', notNames: ['3-(sulfinamidoyloxy)propanoic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P67144f.gif', pin: '3-[(methoxysulfonyl)amino]propanoic acid' },
]);
