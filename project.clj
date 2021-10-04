(defproject sample-project "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url  "http://www.eclipse.org/legal/epl-v10.html"}

  :dependencies [[org.clojure/clojure "1.10.3"]
                 [cljsjs/react "17.0.2-0"]
                 [cljsjs/react-dom "17.0.2-0"]
                 [reagent "1.1.0"]
                 [com.cleancoders.c3kit/wire "1.0.8"]
                 [com.cleancoders.c3kit/scaffold "1.0.2"]
                 [com.cleancoders.c3kit/apron "1.0.2"]
                 [com.braintreepayments.gateway/braintree-java "3.12.0"]]

  :profiles {:dev {:dependencies [[speclj "3.3.2"]
                                  [org.clojure/clojurescript "1.10.764"]
                                  [com.cleancoders.c3kit/apron "1.0.2"]]}}
  :plugins [[speclj "3.3.2"]
            [lein-cljsbuild "1.1.8"]]

  :source-paths ["src/cljs"]
  :test-paths ["spec/cljs"]

  :clean-targets ^{:protect false} [:target-path "resources/public/cljs"]

  :aliases {"cljs" ["run" "-m" "runner.cljs"]})
