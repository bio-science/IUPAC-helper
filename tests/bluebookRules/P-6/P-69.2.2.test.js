/**
 * P-69.2.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “Definitions of terms
 * In the rules that follow, certain terms are used in the sense indicated here. A ‘coordination
 * entity’ refers to molecules or ions in which there is an atom (A) to which attached other atoms (B)
 * or groups (C). The atom (A) is known as the ‘central atom’, and all other atoms which are directly
 * attached to (A) are called ‘ligands’. Each central atom (A) has a ‘coordination number’ which is the
 * number of atoms directly attached to it. …
 * Linear formulae are composed of the symbol of the central atom, followed by the ligands, in
 * alphabetical order (as written) if more than one is present (IR-4.4.3.2, ref. 12). …
 * In names of coordination compounds, the name of the central atom is placed after that of the
 * ligand(s), which are listed in alphabetical order, regardless of the number of each. …
 * Because of a long established tradition, names for substituent groups as defined in Section P-29 can
 * also be used as ligand names.
 * The name of a coordinated molecule (neutral ligand) or of a cation as a ligand is used without
 * change.
 * Exceptionally, the molecules H2O, NH3, CO, and NO are named ‘aqua’, ‘ammine’, ‘carbonyl’, and
 * ‘nitrosyl’ when used as ligands.”
 *
 * The whole section is in the Blue Book.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-69.2.2', [
  { formula: 'CH3⁻', name: 'methanido' },
  { formula: 'C6H5⁻', name: 'benzenido' },
  { formula: '(CH3)2As⁻', name: 'dimethylarsanido' },
  { formula: 'CH3-COO⁻', name: 'acetato' },
  { formula: 'CH3⁻', name: 'methyl' },
  { formula: 'C6H5⁻', name: 'phenyl' },
  { formula: '(CH3)3Si⁻', name: 'trimethylsilyl' },
  { formula: '(CH3-CH2)3P', name: 'triethylphosphane' },
  { formula: 'CH3-NH2', name: 'methanamine' },
]);
