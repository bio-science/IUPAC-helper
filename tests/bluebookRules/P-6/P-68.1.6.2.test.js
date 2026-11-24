/**
 * P-68.1.6.2
 * Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (the Blue Book)
 *
 * “General organic method for naming Lewis adducts
 * Adducts (addition compounds) between neutral Lewis bases and Lewis acids are named by citing the
 * name of each component in the order given by the formula and connecting the name of each component
 * by an ‘em’ dash (see P-16.2.4.5) or by the set of connected atomic symbols separated by an ‘em’ dash
 * and enclosed in parentheses. The number of molecules of each component is denoted by two methods:
 * (1) appropriate multiplying prefixes, except for mono; or
 * (2) by indicating the proportions of the species, if necessary, after the complete name by arabic
 * numbers separated by a solidus (/) and placed in parentheses with a space in front of the first …
 * When desired, and especially when there may be more than one possible donor or acceptor atom, the
 * attachments are indicated in the name by italicized atomic symbols joined by an ‘em’ dash (see …
 * However, these ‘adduct names’ are not PINs; the latter are coordination or ‘inorganic’ names (see
 * ref. 12). Thus, in this document, PINs for these adducts are not assigned. …”
 *
 * The whole section is in the Blue Book.
 *
 * Corrections from the IUPAC list of Blue Book errors, already in the Blue Book's web text:
 *   Page 981, P-68.1.6.2 (formerly P-68.1.6.1.1), example 3 on this page. [corrected 28 October 2016]
 *     For ethaneamine(N→B2)(N→B⁴)pentaborane(9) (2/1)
 *     read ethanamine(N→B²)(N→B⁴)pentaborane(9) (2/1)
 *   Page 981, P-68.1.6.2 (formerly P-68.1.6.1.1), example 4 on this page. [modified 11 September 2919]
 *     For μ-(ethane-1,2-diamine-1κN-2κN′)bis(trihydridoboron)
 *     read μ-(ethane-1,2-diamine-1κN¹,2κN²)bis(trihydridoboron)
 *   Page 981, P-68.1.6.2 (formerly P-68.1.6.1.1), example 5 on this page. [corrected 20 March 2019]
 *     For trimethylamine—(methylsulfanyl)methane—dodecaborane(10) (1/1/1)
 *     read (trimethyl)amine—(methylsulfanyl)methane—dodecaborane(10) (1/1/1)
 *   Page 982, P-68.1.6.2 (formerly P-68.1.6.1.1), example 2 on this page. [modified 20 March 2019]
 *     For N,N,N′,N′-tetramethylguanidine(N′′—Ga)gallane
 *     read N,N,N′,N′-tetramethylguanidine(N′′—Ga)gallane (1/1)
 *     delete 1,1,3,3-tetramethylguanidine(N²—Ga)gallane (1/ 1)
 *     for trihydrido[1,1,3,3-tetramethylguanidine-κN2]gallium
 *     read trihydrido[N,N,N′,N′-tetramethylguanidine-κN′′]gallium
 *
 * Examples with a drawing are drawn, not written out, in the Blue Book. The checks read
 * their names, but can only check the structure against the drawing once the drawings are used.
 */
import { checkRule } from '../support/checkRule.js';

checkRule('P-68.1.6.2', [
  { formula: 'BF3 • 2 H2O', name: 'trifluoroborane—water (1/2)' },
  { formula: '(CH3)3N→BCl3', name: 'N,N-dimethylmethanamine—trichloroborane (1/1)' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68161d.gif', name: 'ethanamine(N→B²)(N→B⁴)pentaborane(9) (2/1)' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68161e.gif', name: 'ethane-1,2-diamine—borane (1/2)' },
  { formula: '(CH3)3N • (CH3)2S • B12H10', name: 'N,N-dimethylmethanamine–(methylsulfanyl)methane–dodecaborane(10) (1/1/1)' },
  { formula: 'H3C-O-NH2→BH3', name: 'O-methylhydroxylamine(N—B)borane (1/1)' },
  { formula: '(CH3)2NPF2 • B4H8', name: 'N,N-dimethylphosphoramidous difluoride(P—B)tetraborane(8) (1/1)' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68161f.gif', name: 'N-phenylurea(N′—B)borane (1/1)' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68161g.gif', name: '2,2′-bipyridine(N¹,N¹′—B)-10H-phenoxaborin-10-ylium perchlorate' },
  // Drawn in the Blue Book.
  { drawing: 'P6agif/P68161h.gif', name: 'N,N,N′,N′-tetramethylguanidine(N′′—Ga)gallane (1/1)' },
]);
