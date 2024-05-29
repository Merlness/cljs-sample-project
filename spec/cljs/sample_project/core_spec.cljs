(ns sample-project.core-spec
  (:require-macros [speclj.core :refer [describe it should= should-contain before-all]])
  (:require
    [reagent.core :as reagent]
    [reagent.dom :as rdom]
    [sample-project.components :as sut]
    [speclj.core]))

(describe "hello-world component"
  (before-all
    (set! (.-innerHTML (.-body js/document)) "<div id=\"root\"></div>")
    (let [root (js-invoke js/document "getElementById" "root")]
      (rdom/render [sut/hello-world] root)))

  (it "has the title"
    (should= "Welcome to Merl's Tic Tac Toe" (.-textContent (js-invoke js/document "querySelector" "h1"))))

  (it "produces the correct number of buttons"
    (let [buttons (js-invoke js/document "querySelectorAll" "input[type='button']")]
      (should= 9 (.-length buttons))))

  (it "makes buttons with correct initial labels"
    (let [buttons (js-invoke js/document "querySelector" "input[type='button']")]
      (should-contain "" (.-innerHTML buttons))))

  (it "updates button label on click"
    (let [button (js-invoke js/document "querySelector" "input[type='button']")]
      (should= "" (.-value button))
      (.click button)
      (should= "X" (.-value button))))

  (it "checks if there are line breaks"
    (let [container (js-invoke js/document "querySelector" ".container")]
      (let [html (.-innerHTML container)]
        (should-contain "<br>" html))))
  )
