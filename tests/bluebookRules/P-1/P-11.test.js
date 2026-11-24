/**
 * P-11
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “SCOPE OF NOMENCLATURE FOR ORGANIC COMPOUNDS
 * For nomenclature purposes we consider all compounds containing carbon as the principal element to be
 * organic compounds as qualified above (see P-10). Oxygen, hydrogen, and nitrogen are the three
 * elements usually associated with carbon to form the system of functional or characteristic groups.
 * Other elements, among them the halogens and sulfur, complete the basic core of elements found in
 * organic compounds. Substitutive nomenclature was first applied to compounds containing this set of
 * atoms. …
 * Table 1.1 Elements included in these recommendations
 * The ending ‘ane’, characteristic of alkanes, was borrowed from methane, ethane, etc., and attached
 * to terms forming the roots of the names of the various elements, for example sulfane, H2S; …
 * Organometallic compounds, i.e., compounds in which one or more carbon atom(s) is (are) directly
 * attached to a metal atom, have been regarded as organic compounds for nomenclature purposes. …
 * Likewise, IUPAC preferred names for polymers and IUPAC preferred names for Natural Products and
 * related compounds are outside the scope of this book. …
 * …”
 *
 * The whole section is in the Blue Book.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-11', [
  { formula: 'B', name: 'boron' },
  { formula: 'C', name: 'carbon' },
  { formula: 'N', name: 'nitrogen' },
  { formula: 'O', name: 'oxygen' },
  { formula: 'F', name: 'fluorine' },
  { formula: 'Al', name: 'aluminium' },
  { formula: 'Si', name: 'silicon' },
  { formula: 'P', name: 'phosphorus' },
  { formula: 'S', name: 'sulfur' },
  { formula: 'Cl', name: 'chlorine' },
  { formula: 'Ga', name: 'gallium' },
  { formula: 'Ge', name: 'germanium' },
  { formula: 'As', name: 'arsenic' },
  { formula: 'Se', name: 'selenium' },
  { formula: 'Br', name: 'bromine' },
  { formula: 'In', name: 'indium' },
  { formula: 'Sn', name: 'tin' },
  { formula: 'Sb', name: 'antimony' },
  { formula: 'Te', name: 'tellurium' },
  { formula: 'I', name: 'iodine' },
  { formula: 'Tl', name: 'thallium' },
  { formula: 'Pb', name: 'lead' },
  { formula: 'Bi', name: 'bismuth' },
  { formula: 'Po', name: 'polonium' },
  { formula: 'At', name: 'astatine' },
]);
