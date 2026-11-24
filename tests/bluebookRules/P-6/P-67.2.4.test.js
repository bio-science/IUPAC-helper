/**
 * P-67.2.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Amides and hydrazides of di- and polynuclear noncarbon oxoacids
 * Polynuclear noncarbon oxoacids in which all –OH groups have been replaced by –NH2 or –NHNH2 groups
 * are named as amides or hydrazides, respectively, by functional class nomenclature. Amides are
 * expressed by the class name ‘amide’, preceded by an appropriate multiplying prefix, ‘di’, ‘tri’,
 * etc. Similarly, hydrazides are expressed by the class name ‘hydrazide’. Functional replacement is
 * described by prefixes cited before the whole name and not in front of the class name. …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 957, P-67.2.4, example 3 on this page. [corrected 25 August 2016]
 *     For N¹methyl-1,2,3-triimidodiphosphoric tetraamide (PIN)
 *     read N¹-methyl-1,2,3-triimidodiphosphoric tetraamide (PIN)
 *   Page 958, P-67.2.4, example 2 on this page. [corrected 25 August 2016]
 *     For heptaimidoimidotetraphosphoric hexaamide
 *     read heptaimidotetraphosphoric hexaamide
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-67.2.4', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P67240a.gif', name: 'hypodiphosphoric tetraamide' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P67240b.gif', name: 'hypodiphosphonic diamide' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P67240c.gif', name: 'diphosphoric tetraamide' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P67240d.gif', name: '2,4-diimidotrisulfuric diamide' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P67240e.gif', name: 'diphosphonic dihydrazide' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P67240f.gif', name: '2-thiodiphosphoric tetraamide' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P67240g.gif', name: 'triphosphonic diamide' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P67240h.gif', pin: 'N¹-methyl-1,2,3-triimidodiphosphoric tetraamide' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P67240i.gif', name: '2,4-diimidotriphosphoric pentaamide' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P67240j.gif', name: '2,4,6-triimidotetraphosphoric hexaamide' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P67240k.gif', name: 'pentaimidotriphosphoric pentaamide' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P67240l.gif', name: 'heptaimidotetraphosphoric hexaamide' },
  { formula: 'H2N-SO2-O-SO2-NH2', name: 'disulfuric diamide' },
  { formula: 'H2N-SeO2-O-SeO2-NH2', name: 'diselenic diamide' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P67240m.gif', name: '3-hydrazidodiphosphonic 1-amide' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P67240n.gif', name: '1,3-dihydrazidodiphosphoric 1,3-diamide' },
]);
