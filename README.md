# sample-project


## What is this repository?

This project is a ClojureScript starter project, complete with:

1. A bare-bones `index.html` web page which loads a compiled [React](https://reactjs.org/) component (originates as ClojureScript).
1. A bare-bones suite of [Speclj](https://github.com/slagyr/speclj) specs/tests!

The Speclj specs are written in [Clojure](https://clojure.org)[(Script)](https://clojurescript.org/) are compiled (alongside the production code they exercise) to [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) and are then executed via [PhantomJS](https://phantomjs.org/) from the command-line or the web-browser console.


## Why does it exist?

Much of the value of this repository is in the 'glue' code that stitches all the moving parts and concepts together. There just didn't seem to be any other up-to-date and working example of this combination of utilities, so we built it. You're very welcome.


## What do I need before I can get started?

1. [Clojure](https://clojure.org/)
1. [Leiningen](https://leiningen.org/)
1. [PhantomJS](https://phantomjs.org/)
1. [Perserverence](https://www.dictionary.com/browse/perseverance)


## How do I use it?

- Step 1: Fork/clone the repo and run the commands below to make sure everything is working.
- Step 2: Write tests and make changes until your project is complete.
- Step 3: There is no step 3.


## What commands should I run?

(Remember to `cd` into the cloned project!)

1. `lein cljs once development` - Runs tests
1. `lein cljs auto development` - Runs tests continuously on detection of changes
1. `lein cljs once production` - Compiles ClojureScript to javascript
1. `lein cljs auto production` - Compiles ClojureScript to javascript continuously on detection of changes
1. `lein clean` - Deletes all compiled artifacts.


## What is the purpose of each file?

1. `/README.md` - You're looking at it.
1. `/LICENSE.md` - The open-source license file.
1. `/.gitignore` - Listing of files that git should ignore (like project files and compiled artifacts).
1. `/project.clj` - The project file interpreted by the [Leiningen](https://leiningen.org/) build tool.
	- Declares project metadata, dependencies, plugins, and entrypoints.
	- The `"cljs"` key within the `:aliases` structure is what provides the `lein` commands above.
1. `/resources/config/cljs.edn` - configuration profiles for compiling ClojureScript
	- The `:development` and `:production` keys correspond to the `lein` command arguments above.
1. `/resources/public/cljs` - Will be created and populated with compiled artifacts upon running the `lein` commands above.
1. `/resources/public/specs/speclj.js` - This script is what enables the 'auto' test command above. It detects code that has been updated and runs only the associated specs.
1. `/resources/public/specs/specs.html` - references test (development) code compiled to javascript, a page from which to run the tests in the browser's console. Load this file in a web browser after running one of the `development` commands above.
1. `/resources/public/index.html` - references production code compiled javascript, the page on which the sample-project is hosted. Load this file in a web browser after running one of the `production` commands above.
1. `/spec/cljs/runner/cljs.clj` - The entry point for all `lein cljs` commands above.
	- Parses command line flags that come after `lein cljs`.
	- Reads configuration structure provided by `/resources/config/cljs.edn`.
	- Invokes the ClojureScript compiler library functions (from `cljs.build.api` namespace).
1. `/spec/cljs/sample_project/core_spec.cljs` - Actual test code!
	- Notice the use of `:require-macros` within the `(ns ...)` form, which is required when using speclj from ClojureScript (`.cljs`).
1. `/src/cljs/sample_project/components.cljs` - A sample (and simple) reagent component
1. `/src/cljs/sample_project/core.cljs` - The main entrypoint providing reagent/react components for the rendered web page.


## TODO

> If the plan is to turn it into a Leiningen template, we could probably simplify it a bit more... maybe get rid of the the speclj.html and speclj.js, or at least make it so that you don’t have to edit them, and maybe use c3kit.scafold.cljs instead of the copied cljs.clj...

