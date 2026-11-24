/**
 * P-65.6.3.3.4.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Polyester names formed by using substitutive nomenclature, and/or multiplicative nomenclature, and
 * functional class nomenclature
 * Polyesters that cannot be named by functional class multiplicative nomenclature as described above,
 * are named by using substitutive nomenclature to generate the names of the organyl substituents and
 * those of the anions. When required, seniority of rings, ring systems, and chains; number and
 * location of substituents; and alphanumerical order is applied in forming the alcoholic component of
 * a functional class ester name (see P-41 through P-45):”
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 812, P-65.6.3.3.4.2, example 1. [corrected 6 March 2019]
 *     Replace the structure with:
 *   Page 813, P-65.6.3.3.4.2, example 3 on this page. [corrected 6 March 2019]
 *     For (not ethyl 4-[(4-methoxy-4-oxobutanoyl)oxy]phenyl propanedioate; butanedioic acid is
 *     preferred to propanoic acid
 *     read (not ethyl 4-[(4-methoxy-4-oxobutanoyl)oxy]phenyl propanedioate; butanedioic acid is
 *     preferred to propanedioic acid)
 *   Page 813, P-65.6.3.3.4.2, example 4 on this page. [corrected 5 July 2018]
 *     For the organyl groups in the PIN name are lower alphanumerically; see P-14.5
 *     read 3-(methoxycarbonyl)phenyl is alphabetically before 2-methoxy-2-oxoethyl; see P-14.5
 *   Page 813, P-65.6.3.3.4.2, replace structure of example 5 on this page. [corrected 26 January 2022]
 *   Page 814, P-65.6.3.3.4.2, example 1 on this page (example 10 of this section). [corrected 9 April
 *   2025]
 *     For 1-{2-[2-(acetyloxy)-1-(formyloxy)ethyl]cyclohexyl}-2-(propanoyloxy)ethyl butanoate (PIN)
 *     read 1-{2-[2-(acetyloxy)-1-(formyloxy)ethyl]cyclohexyl}ethane-1,2-diyl 1-butanoate 2-propanoate
 *     (PIN)
 *   Page 814, P-65.6.3.3.4.2, example 2 on this page. [corrected 26 September 2018]
 *     Replace the structure with:
 *   Page 814, P-65.6.3.3.4.2, example 4 on this page. [corrected 19 September 2018]
 *     For (not 2-{2-[(acetyloxy)methyl]phenyl}ethyl acetate; ...
 *     read (not 2-{2-[(acetyloxy)ethyl]phenyl}methyl acetate; ...
 *   Page 814, P-65.6.3.3.4.2, example 5 on this page. [corrected 28 October 2016]
 *     Delete this example [Duplicate of example 3].
 *   Page 814, P-65.6.3.3.4.2, example 6 on this page. [corrected 28 October 2016]
 *     Delete this example [Duplicate of example 4].
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-65.6.3.3.4.2', [
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650603ag.gif', pin: '2-(acetyloxy)ethyl methyl butanedioate', otherNames: ['2-acetoxyethyl methyl butanedioate'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650603ah.gif', pin: '2-(acetyloxy)ethyl methyl ethane-1,2-diyl dibutanedioate' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650603ai.gif', pin: 'bis[2-(acetyloxy)ethyl] propanedioate', otherNames: ['propanedioylbis(oxyethane-2,1-diyl) diacetate'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650603aj.gif', pin: '2-(acetyloxy)ethyl 2-(propanoyloxy)ethyl butanedioate', otherNames: ['butanedioylbis(oxyethane-2,1-diyl) acetate propanoate'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650603ak.gif', pin: 'phenyl 3-(benzoyloxy)benzoate', notNames: ['3-(phenoxycarbonyl)phenyl benzoate'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650603al.gif', pin: '2-[3-(formyloxy)propyl]cyclohexane-1,1-diyldi(propane-3,1-diyl) diacetate' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650603am.gif', pin: '4-[(3-ethoxy-3-oxopropanoyl)oxy]phenyl methyl butanedioate', notNames: ['ethyl 4-[(4-methoxy-4-oxobutanoyl)oxy]phenyl propanedioate'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650603an.gif', pin: '3-(methoxycarbonyl)phenyl 2-methoxy-2-oxoethyl butanedioate', notNames: ['2-methoxy-2-oxoethyl 3-(methoxycarbonyl)phenyl butanedioate'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650603ao.gif', pin: 'bis[3-(methoxycarbonyl)phenyl] butanedioate', notNames: ['dimethyl 3,3′-[butanedioylbis(oxy)]dibenzoate'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650603ap.gif', pin: '1-{2-[2-(acetyloxy)-1-(formyloxy)ethyl]cyclohexyl}ethane-1,2-diyl 1-butanoate 2-propanoate' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650603aq.gif', pin: '6-[4-(acetyloxy)phenyl]pyridin-3-yl acetate', notNames: ['4-[5-(acetyloxy)pyridin-2-yl]phenyl acetate'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650603ar.gif', pin: '2-[2-(acetyloxy)ethyl]phenyl acetate', notNames: ['2-[2-(acetyloxy)phenyl]ethyl acetate'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P650603as.gif', pin: '2-{2-[(acetyloxy)methyl]phenyl}ethyl acetate', notNames: ['2-{2-[(acetyloxy)ethyl]phenyl}methyl acetate'] },
]);
