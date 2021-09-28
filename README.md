# sample-project


## What is this?

This project is a ClojureScript starter project, complete with:

1. A bare-bones `index.html` web page which loads a compiled [React](https://reactjs.org/) component (originates as ClojureScript).
1. A bare-bones suite of [Speclj](https://github.com/slagyr/speclj) specs/tests!

The Speclj specs are written in [Clojure](https://clojure.org)[(Script)](https://clojurescript.org/) are compiled (alongside the production code they exercise) to [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) and are then executed via [PhantomJS](https://phantomjs.org/) from the command-line or the web-browser console.


## Why does it exist?

Much of the value of this repository is in the 'glue' code that stitches all the moving parts and concepts together. There just didn't seem to be any other up-to-date and working example of this combination of utilities, so we built it. You're very welcome.


## How do I use it?

- Step 1: Clone it and run the commands below to make sure everything is working then dive in and start making changes.
- Step 2: Keep making changes until your project is complete.
- Step 3: There is no step 3.


## Commands

1. `lein cljs once development` - Run tests
1. `lein cljs auto development` - Run tests continuously on detection of changes
1. `lein cljs once production` - Compile ClojureScript to javascript
1. `lein cljs auto production` - Compile ClojureScript to javascript continuously on detection of changes
1. `lein clean` - Removes all compiled artifacts.


## Files

1. `/project.clj` - The project file interpreted by the [Leiningen](https://leiningen.org/) build tool.
	- Declares project metadata, dependencies, plugins, and entrypoints.
	- The `"cljs"` key within the `:aliases` structure is what provides the `lein` commands above.
1. `/bin/speclj` - I HAVE NO IDEA WHAT THIS IS FOR. TODO
1. `/resources/config/cljs.edn` - configuration profiles for compiling ClojureScript
	- The `:development` and `:production` keys correspond to the `lein` command arguments above.
1. `/resources/config/css.edn` - I HAVE NO IDEA WHAT THIS IS FOR. TODO
1. `/resources/public/cljs` - Will be created and populated with compiled artifacts upon running the `lein` commands above.
1. `/resources/public/specs/speclj.js` - This script is what enables the 'auto' test command above. It detects code that has been updated and runs only the associated specs.
1. `/resources/public/specs/specs.html` - references test (development) code compiled to javascript, a page from which to run the tests in the browser's console.
1. `/resources/public/index.html` - references production code compiled javascript, the page on which the sample-project is hosted.
1. `/spec/cljs/runner/cljs.clj` - The entry point for all `lein cljs` commands above.
	- Parses command line flags that come after `lein cljs`.
	- Reads configuration structure provided by `/resources/config/cljs.edn`.
	- Invokes the ClojureScript compiler library functions (from `cljs.build.api` namespace).
1. `/spec/cljs/sample_project/core_spec.cljs` - Actual test code!
	- Notice the use of `:require-macros` within the `(ns ...)` form.
1. `/src/cljs/sample_project/components.cljs` - A sample (and simple) reagent component
1. `/src/cljs/sample_project/core.cljs` - The main entrypoint providing reagent/react components for the rendered web page.


## Requirements

1. [Clojure](https://clojure.org/)
1. [Leiningen](https://leiningen.org/)
1. [PhantomJS](https://phantomjs.org/)
1. [Perserverence](https://www.dictionary.com/browse/perseverance)
