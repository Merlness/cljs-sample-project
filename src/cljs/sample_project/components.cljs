(ns sample-project.components
  (:require [goog.dom :as gdom]
            [reagent.core :as reagent]
            [reagent.dom :as rdom]))

(defn hello-world []
  [:div
   [:h1 "Hello, world!"]])
