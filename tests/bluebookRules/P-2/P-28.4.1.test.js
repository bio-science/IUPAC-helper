/**
 * P-28.4.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Assemblies composed of identical heterocyclic compounds are named by using the names of parent
 * hydrides, except in the case of heterocyclic compounds of the von Baeyer type and of monocyclic
 * compounds having more than 10 members that are named by using skeletal replacement (‘a’)
 * nomenclature. In the latter cases, the ‘a’ prefixes are placed at the front of the name of the
 * hydrocarbon ring assembly.”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 345, P-28.4.1, example 2. [Corrected 8 October 2025]
 *     Replace structure by
 *     for 1³,213,3³-trioxa-1¹,2¹:2⁷:3¹-tercyclotetradecane (PIN)
 *     read 1³,2⁹,3³-trioxa-1¹,2¹:2⁷:3¹-tercyclotetradecane (PIN)
 *     (not 1³,213,3³-trioxa-1¹,2¹:2⁷:3¹-tercyclotetradecane; 1³,2⁹,3³ is lower than 1³,213,3³)
 *     for 3′,3′′,13′-trioxa-1,1′:7′,1′′-tercyclotetradecane
 *     read 3,3′′,9′-trioxa-1,1′:7′,1′′-tercyclotetradecane
 *     (not 3,3′′,13′-trioxa-1,1′:7′,1′′-tercyclotetradecane; 3,3′′,9′ is lower than 3,3′′,13′)
 *   Page 346, P-28.4.1, example 2 on this page. [corrected 19 September 2018]
 *     For 2,2′-dithia-1,1′-bi(cyclododecan-2-ylidene) (PIN)
 *     read 2,2′-dithia-1,1′-bi(cyclododecylidene) (PIN)
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-28.4.1', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P280401a.gif', pin: '3,3′-dioxa-1,1′-bi(cyclotetradecane)' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P280401b.gif', pin: '1³,2⁹,3³-trioxa-1¹,2¹:2⁷:3¹-tercyclotetradecane', otherNames: ['3,3′′,9′-trioxa-1,1′:7′,1′′-tercyclotetradecane'], notNames: ['1³,213,3³-trioxa-1¹,2¹:2⁷:3¹-tercyclotetradecane', '3,3′′,13′-trioxa-1,1′:7′,1′′-tercyclotetradecane'] },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P280401c.gif', pin: '5,6′-diaza-2,2′-bi(bicyclo[2.2.2]octane)' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P280401d.gif', pin: '2,2′-dithia-1,1′-bi(cyclododecylidene)' },
]);
