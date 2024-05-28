(ns sample-project.core
  (:require [goog.dom :as gdom]
            [reagent.core :as reagent]
            [reagent.dom :as rdom]
            [sample-project.components :as components]))

(defonce state (reagent/atom {}))

(defn ^:export main []
  (println "Hello, from main!")
  (let [app (js/document.getElementById "ttt_merlness_dev")]
    (js-invoke js/console "log" app)
    (rdom/render [components/hello-world] app)))

;(main)
;how to get cljs into an html page
