(ns sample-project.components
  (:require [reagent.core :as r]))

(defn create-initial-grid [size]
  (vec (repeat (* size size) "")))

(defonce grid-state (r/atom (create-initial-grid 3)))

(defn update-grid [index]
  (swap! grid-state assoc index "X"))

(defn button [label on-click-fn]
  [:input {:type     "button"
           :value    label
           :on-click on-click-fn}])

(defn new-line [side index]
  (when (= (dec side) (mod index side))
    [:br]))

(defn group-buttons [grid side index]
  [:<>
   [button (get grid index)
    #(update-grid index)]
   (new-line side index)])

(defn make-grid [grid side]
  [:div
   (for [index (range (count grid))]
     ^{:key index}
     [group-buttons grid side index])])

(defn hello-world []
  (let [side 3]
    [:div.container
     [:h1 "Welcome to Merl's Tic Tac Toe"]
     [make-grid @grid-state side]]))


#_(defn hello-world []
    [:h1 "Hello, all!"
     [:input {:type     "button"
              :value    "Click me!"
              :on-click "X"}]]
    )
