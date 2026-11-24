/**
 * P-66.4.2.1
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Amidrazone suffixes
 * Compounds having the general structure R-C(NH2)=N-NH2 or the tautomeric structure R-C(=NH)-NH-NH2
 * have the class name ‘amidrazones’ and are named substitutively using the suffixes ‘hydrazonamide’ or
 * ‘carbohydrazonamide’, and ‘imidohydrazide’ or ‘carboximidohydrazide’, respectively. N-Substitution,
 * when the position of the double bond is known, is designated with the following locants:
 * Preferred IUPAC names use the locants N, N′, and N′′ as shown. The previous methods of naming
 * amidrazones as ‘amide hydrazones’ or ‘hydrazide imides’, or as amidrazones when the structure is not
 * …
 * When the position of the double bond is unknown, the senior characteristic group,
 * carbohydrazonamide, is chosen to denote the tautomeric structure, with appropriate locants N and N′
 * to denote …
 * Retained names of amidrazones are formed by replacing the ‘amide’ ending in names of amides by
 * ‘ohydrazonamide’ and are only used in general nomenclature. …
 * Amidrazones derived from sulfonic acid, sulfinic acid, and related acids, are named in accordance
 * with the same principles.”
 *
 * The whole section is in the Blue Book.
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-66.4.2.1', [
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66421c.gif', pin: 'ethanehydrazonamide' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66421d.gif', pin: 'benzenecarbohydrazonamide' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66421e.gif', pin: 'methanimidohydrazide' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66421f.gif', pin: 'cyclohexanecarboximidohydrazide' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66421g.gif', pin: 'N,N-dimethyl-N′-(propan-2-ylidene)methanehydrazonamide', otherNames: ['N,N-dimethyl-N′-isopropylideneformohydrazonamide'], notNames: ['N,N-dimethylformamide isopropylidenehydrazone'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66421h.gif', pin: 'N′′-ethyl-N-methyl-N′-phenylbenzenecarboximidohydrazide', otherNames: ['N′′-ethyl-N-methyl-N′-phenylbenzimidohydrazide'], notNames: ['N¹-methyl-N²-phenylbenzohydrazide ethylimide'] },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66421i.gif', pin: 'ethanediimidohydrazide' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66421j.gif', pin: 'ethanedihydrazonamide' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66421k.gif', pin: '2-hydrazinyl-2-iminoethanehydrazonamide' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66421l.gif', pin: '4-(2-nitrosohydrazine-1-carboximidoyl)tetraaz-3-ene-1-carboximidamide' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66421m.gif', pin: 'N³,N³-diethyl-N¹,N¹-dimethylnaphthalene-1,3-dicarbohydrazonamide' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P66421n.gif', pin: 'N′¹,N′¹-diethyl-N′′′ ′¹,N′′′ ′¹-dimethylcyclohexane-1,1-dicarboximidohydrazide' },
  { formula: 'C6H5-S(=NNH2)-NH2', pin: 'benzenesulfinohydrazonamide' },
]);
