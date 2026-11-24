/**
 * P-63.5
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “CYCLIC ETHERS, SULFIDES, SELENIDES AND TELLURIDES
 * Cyclic ethers, sulfides, selenides and tellurides are heterocycles named by the following methods:
 * (1) by using preferred retained names described in P-22.2.1 (chosen first);
 * (2) for monocycles, by the extended Hantzsch-Widman system (see P-22.2.2) or by skeletal replacement
 * (‘a’) nomenclature for cycles having more than ten members (see P-22.2.3);
 * (3) by bridged fused nomenclature (see P-25.4);
 * (4) by using detachable prefixes ‘epoxy’, ‘epithio’, ‘episeleno’, or ‘epitelluro’ in substitutive
 * nomenclature; these are used primarily in the nomenclature of natural products (see P-101.5.2); …
 * (5) by using additive names formed by the addition of the terms ‘oxide’, ‘sulfide’, ‘selenide’, or
 * ‘telluride’ to the name of an unsaturated compound.
 * Names of heterocyclic compounds are preferred IUPAC names.”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-63.5', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630500a.gif', pin: 'thiophene' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630500b.gif', pin: 'tellurophene' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630500c.gif', pin: 'oxolane', otherNames: ['tetrahydrofuran'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630500d.gif', pin: 'thiocane' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630500e.gif', pin: 'oxacyclotridecane' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630500f.gif', pin: '1,4-dihydro-1,4-sulfanonaphthalene' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630500g.gif', pin: '2-ethyl-2-methyloxirane', otherNames: ['1,2-epoxy-2-methylbutane'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630500h.gif', pin: 'oxirane', otherNames: ['ethene oxide'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630500i.gif', pin: '1,2-dioxane' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630500j.gif', pin: '1,2-oxathiolane' },
]);
