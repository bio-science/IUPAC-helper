/**
 * P-63.2.4.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Names of ethers, when R and R′ are both aliphatic groups or when one is cyclic, are formed by
 * method (1), (2), or (4). Method (1) or (4) leads to preferred IUPAC names.
 * Skeletal replacement (‘a’) nomenclature [method (4)] generates preferred IUPAC names, when the
 * conditions for using this type of nomenclature are met (see P-15.4); …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-63.2.4.1', [
  { formula: 'CH3-O-CH3', pin: 'methoxymethane', otherNames: ['dimethyl ether'] },
  { formula: 'CH3-CH2-O-CH3', pin: 'methoxyethane', otherNames: ['ethyl methyl ether'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630204a.gif', pin: 'anisole', otherNames: ['methoxybenzene', 'methyl phenyl ether'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630204b.gif', pin: '2-methoxynaphthalene', otherNames: ['methyl naphthalen-2-yl ether', 'methyl 2-naphthyl ether'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630204c.gif', pin: '1-chloro-2-ethoxyethane', otherNames: ['2-chloroethyl ethyl ether'], notNames: ['2-chloroethyl ethyl oxide'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630204d.gif', pin: '1,2-dimethoxyethane', otherNames: ['ethane-1,2-diyl dimethyl ether'] },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630204e.gif', pin: '1-methoxy-2-(2-methoxyethoxy)ethane' },
  // Drawn in the Blue Book.
  { drawing: 'P6gif/P630204f.gif', pin: '2,5,8,11-tetraoxadodecane', otherNames: ['1-methoxy-2-[2-(2-methoxyethoxy)ethoxy]ethane'] },
]);
