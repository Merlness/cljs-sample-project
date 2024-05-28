(defproject sample-project "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url  "http://www.eclipse.org/legal/epl-v10.html"}

  :dependencies [[org.clojure/clojure "1.11.3"]
                 [cljsjs/react "17.0.2-0"]
                 [cljsjs/react-dom "17.0.2-0"]
                 [reagent "1.2.0"]]

  :profiles {:dev {:dependencies [[speclj "3.4.7"]
                                  [org.clojure/clojurescript "1.11.132"]
                                  [com.cleancoders.c3kit/apron "2.1.3"]]}}
  :plugins [[speclj "3.4.7"]
            [lein-cljsbuild "1.1.8"]]

  :source-paths ["src/cljs"]
  :test-paths ["spec/cljs"]

  :clean-targets ^{:protect false} [:target-path "resources/public/cljs"]

  :aliases {"cljs" ["run" "-m" "runner.cljs"]})
