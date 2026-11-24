/**
 * P-14.3.4.5
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “All locants are omitted in compounds or substituent groups in which all substitutable positions are
 * completely substituted or modified, for example, by hydro, in the same way. Except for hydrogen
 * atoms attached to chalcogen atoms, such as in acids, alcohols, and to the carbon atoms of formyl
 * groups (aldehydes), all hydrogen atoms are considered substitutable.
 * In case of partial substitution or modification, all numerical prefixes must be indicated. The
 * prefix ‘per-’ is no longer recommended.”
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-14.3.4.5', [
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1403i.gif', pin: 'decahydronaphthalene' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1403j.gif', pin: 'octafluoropropanimidamide' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1403k.gif', pin: 'heptafluorobutanoic acid' },
  { formula: 'CF3-CF2-CH2-OH', pin: '2,2,3,3,3-pentafluoropropan-1-ol' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1403l.gif', preferredPrefix: 'benzenehexayl' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1403m.gif', pin: '1-chloro-2-(pentafluoroethyl)benzene' },
  { formula: 'F2N-CO-NF2', pin: 'tetrafluorourea' },
  // Drawn in the Blue Book.
  { drawing: 'P1gif/P1403n.gif', pin: 'dichlorotrioxetane' },
]);
