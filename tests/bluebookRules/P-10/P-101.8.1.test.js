/**
 * P-101.8.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Inversion of configuration
 * Configurational inversion of all chirality centers is indicated by the italicized prefix ‘ent’ (a
 * contracted form for ‘enantio’) placed at the front of the complete name of the compound. This prefix
 * denotes inversion at all chirality centers (including those due to named substituents) whether these
 * are cited separately or are implied in the name. For kaurane and ent-kaurane illustrated below,
 * correct structures and names are given; the designations are reversed by Chemical Abstracts (see
 * ref. …”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-101.8.1', [
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101810a.gif', name: 'kaurane' },
  // Drawn in the Blue Book.
  { drawing: 'P10gif/P101810b.gif', name: 'ent-kaurane' },
]);
