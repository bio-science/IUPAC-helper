/**
 * P-68.2.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Substituent groups derived from parent hydrides
 * Names of substituent groups –XH3, =XH2, and ≡XH derived from mononuclear parent hydrides where X =
 * Si, Ge, Sn, and Pb, but not B, are formed by the method (1) described in P-29.2; all other
 * substituent groups are named by using the general method (2) described in P-29.2.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-68.2.2', [
  { formula: '–SiH3', preselectedPrefix: 'silyl' },
  { formula: '–GeH3', preselectedPrefix: 'germyl' },
  { formula: '–SnH3', preselectedPrefix: 'stannyl' },
  { formula: '–PbH3', preselectedPrefix: 'plumbyl' },
  { formula: '–SiH2–', preselectedPrefix: 'silanediyl', notNames: ['silylene'] },
  { formula: '–GeH2–', preselectedPrefix: 'germanediyl', notNames: ['germylene'] },
  { formula: '–SnH2–', preselectedPrefix: 'stannanediyl', notNames: ['stannylene'] },
  { formula: '–PbH2–', preselectedPrefix: 'plumbanediyl', notNames: ['plumbylene'] },
  { formula: '=SiH2', preselectedPrefix: 'silylidene', notNames: ['silylene'] },
  { formula: '=PbH2', preselectedPrefix: 'plumbylidene', notNames: ['plumbylene'] },
  { formula: '≡GeH', preselectedPrefix: 'germylidyne' },
  { formula: '≡SnH', preselectedPrefix: 'stannylidyne', notNames: ['stannylene'] },
  { formula: '≡SiH', preselectedPrefix: 'silylidyne' },
  { formula: '–SiH=', preselectedPrefix: 'silanylylidene' },
  { formula: '–SnH<', preselectedPrefix: 'stannanetriyl' },
  { formula: '=Ge=', preselectedPrefix: 'germanediylidene' },
  { formula: '>Pb<', preselectedPrefix: 'plumbanetetrayl' },
  { formula: 'H3Si-SiH2–', preselectedPrefix: 'disilanyl', notNames: ['disilyl'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68220a.gif', preselectedPrefix: 'trigerman-1-ylidene' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68220b.gif', preselectedPrefix: 'disilane-1,2-diyl' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68220c.gif', preselectedPrefix: 'disilane-1,1-diyl' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68220d.gif', preselectedPrefix: 'hexasilinanyl' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68220e.gif', preferredPrefix: '2-benzosilin-2-yl' },
]);
