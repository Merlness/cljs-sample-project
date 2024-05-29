(ns sample-project.components
  (:require [reagent.core :as r]))

(defn create-initial-grid [size]
  (vec (repeat (* size size) "")))

(defonce grid-state (r/atom (create-initial-grid 3)))

(defn count-tokens [grid]
  (count (filter #(or (= % "X") (= % "O")) grid)))

(defn next-token [grid]
  (if (even? (count-tokens grid))
    "X"
    "O"))

(defn update-grid [index]
  (swap! grid-state assoc index (next-token @grid-state)))

(defn button [value index on-click]
  [:input {:id       (str "-my-button-" index)
           :type     "button"
           :value    value
           :on-click on-click}])

(defn new-line [side index]
  (when (= (dec side) (mod index side))
    [:br]))

(defn group-buttons [grid side index]
  [:<>
   [button (get grid index) index #(update-grid index)]
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
