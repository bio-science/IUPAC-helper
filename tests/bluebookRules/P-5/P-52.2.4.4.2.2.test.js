/**
 * P-52.2.4.4.2.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “If the fused ring system can only be named using skeletal (‘a’) replacement nomenclature, any
 * heteroatoms in bridges are also named using skeletal replacement (‘a’) nomenclature. The replacement
 * terms are cited at the front of the corresponding bridged fused hydrocarbon ring system.
 * Alternatively, the heteroatomic bridge may be named by an appropriate compound or complex bridge
 * prefix.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 582, P-52.2.4.4.2.2, example 2. [corrected 20 February 2019]
 *     For 4H-9,2b-(epoxymethano)-2-oxacycloocta[cd]pentalene
 *     read 4H-9,2a¹-(epoxymethano)-2-oxacycloocta[cd]pentalene
 *   Page 583, P-52.2.4.4.2.2, example 1 on this page. [corrected 20 February 2019]
 *     For 2H-4,7,12-trioxa-1-thia-5,9b-[1,2]epicyclopentacyclopenta[2′,3′:6,7]cyclohepta[cd]pentalene
 *     (PIN)
 *     read 2H-4,7,12-trioxa-1-thia-5,9b-[1,2]epicyclopentadicyclopenta[cd,h]azulene (PIN)
 *     for 2H-5,9b-[2,3]furano-4,7-dioxa-1-thiacyclopenta[2′,3′:6,7]cyclohepta[cd]pentalene
 *     read 2H-5,9b-[2,3]furano-4,7-dioxa-1-thiadicyclopenta[cd,h]azulene
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-52.2.4.4.2.2', [
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P520204m.gif', pin: '2,3,9-trioxa-5,8-methanocyclopenta[cd]azulene', otherNames: ['5,8-epoxy-2,3-dioxacyclopenta[cd]azulene'] },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P520204n.gif', pin: '1H-3,10-dioxa-2a¹,5-ethanocycloocta[cd]pentalene', otherNames: ['4H-9,2a¹-(epoxymethano)-2-oxacycloocta[cd]pentalene'] },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P520204o.gif', pin: '1-oxa-5,9,2-(epiethane[1,1,2]triyl)cycloocta[cd]pentalene', otherNames: ['5,9,2-(epiethane[1,1,2]triyl)-1-oxacycloocta[cd]pentalene'] },
  // Drawn in the Blue Book.
  { drawing: 'P5gif/P520204p.gif', pin: '2H-4,7,12-trioxa-1-thia-5,9b-[1,2]epicyclopentadicyclopenta[cd,h]azulene', otherNames: ['2H-5,9b-[2,3]furano-4,7-dioxa-1-thiadicyclopenta[cd,h]azulene'] },
]);
