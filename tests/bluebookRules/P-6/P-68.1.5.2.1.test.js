/**
 * P-68.1.5.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Substituted parent hydrides
 * Normal prefix names are used to describe substituents of the B, Al, In, or Tl parent hydrides.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-68.1.5.2.1', [
  { formula: 'B(CH3)3', pin: 'trimethylborane' },
  { formula: 'Al(C2H5)3', name: 'triethylalumane' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68152a.gif', name: 'bis(3-methylbutyl)alumane' },
  { formula: 'Al(O-CH2-CH2-CH2-CH3)3', name: 'tributoxyalumane' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68152b.gif', pin: 'N,N′-bis(butylboranyl)boranediamine', notNames: ['1,5-dibutyltriborazane'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68152c.gif', pin: '2,9-dimethyl-4,7-dioxa-2,9-diboradecane' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68152d.gif', pin: 'N,N′-[ethane-1,2-diylbis(boranediyloxy)]bis(N-ethylethanamine)', otherNames: ['O,O′-[ethane-1,2-diylbis(boranediyl)]bis(N,N-diethylhydroxylamine)'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68152e.gif', pin: '2-(methylsulfanyl)-2H-1,3,2-oxathiaborepine' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68152f.gif', pin: '4,5-diethyl-2,2,3-trimethyl-2,5,7,8-tetrahydro-1,6,2,5-dioxasilaborocine' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68152g.gif', name: '1-ethyl-2,3-diphenyl-1H-aluminirene' },
]);
