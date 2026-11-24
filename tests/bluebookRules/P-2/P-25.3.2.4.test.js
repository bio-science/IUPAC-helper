/**
 * P-25.3.2.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Seniority criteria for selecting the parent component
 * The components of the fused ring system are selected and named according to P-25.3.2.1 and
 * P-25.3.2.2. When it is necessary to locate nomenclatural features, such as indicated hydrogen or
 * atoms with nonstandard bonding numbers, another system of locants must be used, i.e., the locants
 * that are used to number the completed fused ring system. In these recommendations, such locants are
 * placed outside the structure, as shown for retained names in Tables 2.2, 2.7, and 2.8. …
 * If there is a choice for selecting the parent component, the following criteria are considered, in
 * order, until a decision can be made:
 * (a) a component containing at least one of the heteroatoms occurring earlier in the following order:
 * N > F > Cl > Br > I > O > S > Se > Te > P > As > Sb > Bi > Si > Ge > Sn > Pb > B > Al > Ga > In > …
 * (b) a component containing the greater number of rings;
 * (c) A component containing the larger ring at the first point of difference when comparing rings in
 * order of decreasing size;
 * Examples
 * (d) A component containing the greater number of heteroatoms of any kind;
 * (e) A component containing the greater variety of heteroatoms;
 * …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 231, P-25.3.2.4 (c), example 1. [corrected 24 October 2018]
 *     Replace the structure with:
 *   Page 232, P-25.3.2.4 (f), example 1. [corrected 24 October 2018]
 *     Replace the structure with:
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-25.3.2.4', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250302ag.gif', pin: 'azuleno[6,5-b]pyridine' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250302ah.gif', pin: '1H,18H-naphtho[1,8-rs][1,4,7,10,13,16]hexaoxacyclohenicosine' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250302ai.gif', name: 'chromeno[2,3-c]pyrrole' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250302aj.gif', pin: '2H-[1,4]dithiepino[2,3-c]furan' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250302ak.gif', pin: '6H-pyrazino[2,3-b]carbazole' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250302al.gif', pin: '2H-furo[3,2-b]pyran' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250302am.gif', pin: 'naphtho[2,3-f]azulene' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250302an.gif', pin: '5H-pyrido[2,3-d][1,2]oxazine' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250302ao.gif', pin: '2H-furo[2,3-d][1,3]dioxole' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250302ap.gif', pin: '5H-[1,3]dioxolo[4,5-d][1,2]oxaphosphole' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250302as.gif', pin: 'quinolino[4,3-b]acridine' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250302at.gif', pin: 'benzo[pqr]tetraphene' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250302au.gif', pin: 'pyrazino[2,3-d]pyridazine' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250302av.gif', pin: '3H,5H-[1,3,2]oxathiazolo[4,5-d][1,2,3]oxathiazole' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250302aw.gif', pin: 'acephenanthryleno[5,4-k]aceanthrylene' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250302ax.gif', pin: 'aceanthrylene' },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250302ay.gif', pin: 'acephenanthrylene' },
]);
