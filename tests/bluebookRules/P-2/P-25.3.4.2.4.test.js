/**
 * P-25.3.4.2.4
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Order of seniority of locants (letters and numbers)
 * If there is a choice of locants, letters, or numerals (consistent with the numbering of the
 * component), the lower letters or numbers are selected in accordance with the following criteria,
 * which are considered in order until a complete decision can be made:
 * (a) parent component letters as a set;
 * (b) Parent component letters in order of citation;
 * (c) Set of locants of the first-order attached components for fusion to the parent component;
 * (d) First-order attached component locants for fusion to the parent component in order of citation;
 * (e) Locants for lower-order attached components as a set for fusion to higher-order attached
 * component;
 * (f) Locants for lower-order attached components for fusion to higher-order attached components in
 * order of citation;
 * (g) Locants for higher-order attached components as a set for fusion to the lower-order attached
 * component.
 * (h) Locants for higher-order components in fusion to lower-order components in order of citation.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-25.3.4.2.4', [
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250304w.gif', pin: 'furo[3,2-h]pyrrolo[3,4-a]carbazole', notNames: ['furo[2,3-b]pyrrolo[3,4-i]carbazole'] },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250304x.gif', pin: 'furo[3,4-b]thieno[2,3-e]pyrazine', notNames: ['furo[3,4-e]thieno[2,3-b]pyrazine'] },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250304y.gif', pin: '2H,10H-dipyrano[4,3-b:2′,3′-d]pyridine', notNames: ['2H,10H-dipyrano[2,3-d:4′,3′-b]pyridine'] },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250304z.gif', pin: 'diindeno[1,2-i:6′.7′,1′-mna]anthracene', notNames: ['diindeno[6,7,1-mna:1′,2′-i]anthracene'] },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250304aa.gif', pin: '10H-furo[3′,2′:5,6]pyrido[3,4-a]carbazole', notNames: ['10H-furo[2′,3′:2,3]pyrido[5,4-a]carbazole'] },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250304ab.gif', pin: 'cyclopenta[1,2-b:5,1-b′]difuran', notNames: ['cyclopenta[1,2-b:2,3-b′]difuran'] },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250304ac.gif', pin: 'pyrazolo[4′,3′:6,7]oxepino[4,5-b]indole', notNames: ['pyrazolo[3′,4′:2,3]oxepino[5,4-b]indole'] },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250304ad.gif', pin: 'pyrano[3′,2′:4,5]cyclohepta[1,2-d]oxepine', notNames: ['pyrano[2′,3′:5,6]cyclohepta[1,2-d]oxepine'] },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250304ae.gif', pin: 'pyrrolo[3′,2′:4,5]cyclohepta[1,2-b]quinoline', notNames: ['pyrrolo[2′,3′:5,4]cyclohepta[1,2-b]quinoline'] },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250304af.gif', pin: '7H-indeno[7′,1′:5,6,7]cycloocta[1,2,3-de]quinoline', notNames: ['7H-indeno[3′,4′:5,6,7]cycloocta[1,2,3-de]quinoline'] },
  // Drawn in the Blue Book.
  { drawing: 'P2gif/P250304ag.gif', pin: 'pyrano[2′′,3′′:6′,7′]thiepino[4′,5′:4,5]furo[3,2-c]pyrazole', notNames: ['pyrano[3′′,2′′:2′,3′]thiepino[5′,4′:4,5]furo[3,2-c]pyrazole'] },
]);
