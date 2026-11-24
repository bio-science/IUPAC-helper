/**
 * P-25.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Retained names for heterocycles (also called trivial names) with the maximum number of
 * noncumulative double bonds (called mancude ring systems) used for parent components and as attached
 * components are given in Table 2.8.
 * Ring systems are arranged in decreasing order of seniority for parent compounds in accordance with
 * the seniority order described in Section P-25.3.2.4 and exemplified in Section P-25.8.1.
 * Skeletal replacement nomenclature, as described in Section P-15.5.2 , is used to replace O by S, Se,
 * and Te of chromene, isochromene, and xanthene (PIN) to generate names for chalcogen analogues of …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 211, P-25.2.1, lines 7/8. [corrected 8.11.2023]
 *     For Skeletal replacement (‘a’) nomenclature (see P-15.4), as described in Section P-25.5.4, is
 *     used...
 *     read Skeletal replacement nomenclature, as described in Section P-15.5.2, is used...
 *   Page 212/3, P-25.2.1, Table 2.8 entries (13), (14) and (15). [modified 11 November 2020]
 *     For *
 *     read *†
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-25.2.1', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250201a.gif', pin: 'phenazine' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250201b.gif', name: 'phenanthroline' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250201d.gif', pin: 'acridine' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250201e.gif', pin: 'phenanthridine' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250201f.gif', name: 'carbazole' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250201g.gif', pin: 'pteridine' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250201h.gif', pin: 'cinnoline' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250201i.gif', pin: 'quinazoline' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250201j.gif', pin: 'quinoxaline' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250201k.gif', name: 'naphthyridine' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250201l.gif', pin: 'phthalazine' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250201m.gif', pin: 'quinoline' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250201n.gif', pin: 'isoquinoline' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250201o.gif', name: 'quinolizine' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250201p.gif', name: 'purine' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250201q.gif', name: 'indazole' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250201r.gif', name: 'indole' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250201s.gif', name: 'isoindole' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250201t.gif', pin: 'indolizine' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250201v.gif', name: 'xanthene' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250201w.gif', name: 'chromene' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250201x.gif', name: 'isochromene' },
  { pin: 'acridine' },
  { pin: 'indole' },
  { pin: 'arsindole' },
  { pin: 'phosphindole' },
  { pin: 'indolizine' },
  { pin: 'arsindolizine' },
  { pin: 'phosphindolizine' },
  { pin: 'isoindole' },
  { pin: 'isoarsindole' },
  { pin: 'isophosphindole' },
  { pin: 'isoarsinoline' },
  { pin: 'isophosphinoline' },
  { pin: 'phenanthridine' },
  { pin: 'arsanthridine' },
  { pin: 'phosphanthridine' },
  { pin: 'arsinoline' },
  { pin: 'phosphinoline' },
  { pin: 'rsinolizine' },
  { pin: 'phosphinolizine' },
]);
