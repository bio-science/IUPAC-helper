/**
 * P-25.0
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “INTRODUCTION
 * This section is based on the document entitled ‘Nomenclature of Fused and Bridged Fused Ring
 * Systems, IUPAC Recommendations 1998’ (ref. 4).
 * In nomenclature, fusion is the operation that creates a common bond between two rings, each ring
 * contributing one bond and the two atoms directly attached to the bond. …
 * Explanation: Naphthalene results from the fusion (ortho-fusion) of two benzene rings (one bond and
 * two atoms in common).
 * Explanation: 1H-Phenalene results from the ortho- and peri-fusion of a naphthalene ring system and a
 * benzene ring (two bonds and three atoms in common).
 * Explanation: Spirobi[indene] results from the spirofusion of two indene ring systems (one atom in
 * common)
 * This section deals with fused (ortho- and ortho- and peri-fused) ring systems and bridged fused
 * (ortho- and ortho- and peri-fused) ring systems. Spirofusion is described in Section P-24. …”
 *
 * The whole section is in the Blue Book.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-25.0', [
  { pin: 'benzene' },
  { pin: 'benzene' },
  { pin: 'naphthalene' },
  { pin: 'naphthalene' },
  { pin: 'benzene' },
  { pin: '1H-phenalene' },
  { pin: '1H-indene' },
  { pin: '1H-indene' },
]);
