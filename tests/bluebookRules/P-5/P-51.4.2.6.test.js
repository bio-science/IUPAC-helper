/**
 * P-51.4.2.6
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “When necessary, the choice of a preferred IUPAC name of a heterocyclic parent structure is made
 * before the insertion of skeletal replacement (‘a’) prefixes. This is the case with assemblies of
 * identical heterocyclic compounds (see P-28.4) composed of heterocyclic compounds of the von Baeyer
 * type and with monocyclic compounds having more than ten members.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-51.4.2.6', [
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P510402f.gif', pin: '1³,2³,3⁴-trioxa-1¹,2¹:2⁶,3¹-tercycloundecane', otherNames: ['3,3′,4′′-trioxa-1,1′:6′,1′′-tercycloundecane'], notNames: ['1³,2³:2⁹,3⁴-ter-1-oxacycloundecane'] },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P510402g.gif', pin: '2³-thia-1²,2²:2⁶,3²-terbicyclo[2.2.1]heptane', otherNames: ['{not 2,6-bis(bicyclo[2.2.1]heptan-2-yl)-3-thiabicyclo[2.2.1]heptane}', '3′-thia-2,2′:6′,2′′-terbicyclo[2.2.1]heptane'] },
]);
