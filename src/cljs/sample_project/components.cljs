(ns sample-project.components
  (:require [reagent.core :as r]))

(def click-count (r/atom 0))
(defn create-initial-grid []
  (vec (repeat 3 (vec (repeat 3 "Click me!")))))

(defonce grid-state (r/atom (create-initial-grid)))

(defn handle-click [row col]
  (fn []
    (swap! grid-state
           (fn [grid]
             (assoc-in grid [row col] "X")))))

(defn button [label on-click-fn]
  [:input {:type "button"
           :value label
           :on-click on-click-fn}])

(defn render-row [row row-idx]
  [:div
   (for [col-idx (range (count row))]
     ^{:key col-idx}
     [button (get row col-idx)
      (handle-click row-idx col-idx)])])

(defn hello-world []
  [:div.container
   [:h1 "Welcome to Merl's Tic Tac Toe"]
   (for [row-idx (range (count @grid-state))]
     ^{:key row-idx}
     [render-row (get @grid-state row-idx) row-idx])])

#_(defn hello-world []
  [:h1 "Hello, all!"
   [:input {:type "button"
            :value "Click me!"
            :on-click "X"}]]
  )
