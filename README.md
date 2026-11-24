# IUPAC Organic Molecule Naming Helper

An in-browser tool to help chemistry students understand the IUPAC naming of organic
molecules. Draw or type a molecule to see its name and how that name is worked out step
by step, or hide the name and practise naming it yourself.

Everything runs in your browser. Nothing is sent anywhere.

Names follow the IUPAC 2013 Recommendations (the "Blue Book":
*Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013*).

**Still in development.** Many common kinds of organic molecule are supported, but not all
of them yet.

## Building it

You need [Node.js](https://nodejs.org/) 22 or newer to build it.

```
npm install
npm run build
```

The built site needs no server: open `dist/index.html` straight from your file explorer and
it runs fully.

## How the code is organised

The chemistry is kept separate from the display, so you can read how a name is worked
out without reading any React.

```
src/
  chemistry/   Plain functions, no React. Naming rules, parsing, isomers, answer checking.
  geometry/    Plain functions for positions and drawing maths.
  installApp/  Installing the app and working offline.
  languages/   Every sentence the page shows.
  hooks/       React hooks.
  components/  React components. They only draw things and call the functions above.
  styles/      CSS.
public/        The app manifest and icons.
buildPlugins/  Extra build steps, such as writing the offline service worker.
tests/
  app/            Tests for the app.
  bluebookRules/  One check file for each numbered section of the IUPAC Blue Book.
scripts/       Commands for running the Blue Book checks.
```

The chemistry code never writes sentences itself. It returns messages such as
`message('naming.chainTooLong', { chainLength: 11, maxCarbons: 10 })`, and the components
put them into words.

A good place to start reading is `src/chemistry/nameCarbonSkeleton.js`, which names a
molecule step by step and links to the files that do each step.

## Disclaimer

Free and open-source. Still in development, and provided as-is with no guarantee.
