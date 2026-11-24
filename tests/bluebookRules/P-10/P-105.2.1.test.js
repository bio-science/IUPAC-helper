/**
 * P-105.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Nucleosides having retained names can be fully substituted on the purine or pyrimidine ring.
 * Replacement of oxo groups of nucleosides is described by functional replacement prefixes. The
 * ribofuranosyl component may be modified as prescribed for carbohydrates (see P-102.5).”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 1424, P-105.2.1, example on this page. [corrected 19 September 2018]
 *     For 2′,3′,5′-tri-O-acetylguanosine
 *     read 2′,3′,5′-tri-O-acetyladenosine
 *     for guanosine 2′,3′,5′-triacetate
 *     read adenosine 2′,3′,5′-triacetate
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-105.2.1', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P105210a.gif', name: '2′-deoxy-1-methylguanosine' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P105210b.gif', name: '2′-deoxy-2′-fluoro-5-iodo-5′-O-methylcytidine' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P105210c.gif', name: '4-amino-1-[(2R,3E,4S,5R)-3-(fluoromethylidene)-4-hydroxy-5-(hydroxymethyl)oxolan-2-yl]pyrimidin-2(1H)-one' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P105210d.gif', name: '5-ethyl-4-thiouridine' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P105210e.gif', name: 'N²-(2-hydroxyethyl)-5′-S-methyl-5′-thioguanosine' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P105210f.gif', name: '2′,3′,5′-tri-O-acetyladenosine' },
]);
