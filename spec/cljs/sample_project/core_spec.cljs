(ns sample-project.core-spec
  (:require-macros [speclj.core :refer [describe it should=]])
  (:require [reagent.dom :as rdom]
            [speclj.core]
            [sample-project.components :as sut]))

(describe "hello-world component"
  #_(it "says hello to the entire world"
    (should= [:h1 "Hello, all!"] (sut/hello-world)))

  (it "rendering app"
    (set! (.-innerHTML (.-body js/document)) "<div id=\"root\"></div>")
    (let [root (js-invoke js/document "getElementById" "root")]
      (rdom/render [sut/hello-world] root)
      (should= "Welcome to Merl's Tic Tac Toe" (.-textContent (js-invoke js/document "querySelector" "h1")))
      (should= "button" (.-type (js-invoke js/document "querySelector" "input")))
      (should= "Click me!" (.-value (js-invoke js/document "querySelector" "input")))
      (.click (js-invoke js/document "querySelector" "input"))
      (should= 1 @sut/click-count)))
  )
