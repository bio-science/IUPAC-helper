/**
 * P-64.6.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Chalcogen analogues of ketones, pseudoketones and heterones are named by using the following
 * suffixes and prefixes:
 * =S ‘-thione’ and ‘sulfanylidene’ (preferred to ‘thioxo’)
 * =Se ‘-selone’ and ‘selanylidene’ (preferred to ‘selenoxo’)
 * =Te ‘-tellone’ and ‘tellanylidene’ (preferred to ‘telluroxo’)
 * Acyl group prefixes are named by functional replacement of O by S, Se, and Te using infixes (see
 * P-65.1.7). …
 * The use of the prefixes ‘sulfanylidene’, ‘selanylidene’ and ‘tellanylidene’, for =S, =Se, and =Te,
 * respectively, is a change for designating of chalcogen analogs of the ‘oxo’ prefix in preferred …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-64.6.1', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640601a.gif', pin: 'butane-2-thione' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640601b.gif', pin: 'hexane-3-selone' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640601c.gif', pin: 'pentane-2,4-dithione' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640601d.gif', pin: 'propane-2-thione', notNames: ['thioacetone'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640601e.gif', pin: '3-(ethanethioyl)pentane-2,4-dithione', otherNames: ['3-(thioacetyl)pentane-2,4-dithione', '3-(1-sulfanylideneethyl)pentane-2,4-dithione'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640601f.gif', pin: '4-(propaneselenoyl)heptane-2,6-dithione', otherNames: ['4-(1-selanylidenepropyl)heptane-2,6-dithione'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640601g.gif', pin: 'anthracene-1,9,10(2H)-trithione' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640601h.gif', pin: 'di(1H-imidazol-1-yl)methanethione' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640601i.gif', pin: '1,3-thiazolidine-2,4-dithione' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640601j.gif', pin: 'azepane-2-thione' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640601k.gif', pin: '3-sulfanylidenebutanoic acid', otherNames: ['3-thioxobutanoic acid'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P640601l.gif', pin: '4-(3-selanylidenebutyl)benzoic acid', otherNames: ['4-(3-selenoxobutyl)benzoic acid'] },
]);
