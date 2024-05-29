(ns sample-project.core-spec
  (:require-macros [speclj.core :refer [describe it should= should-contain before-all before should-not-be-nil]])
  (:require
    [reagent.core :as reagent]
    [reagent.dom :as rdom]
    [sample-project.components :as sut]
    [speclj.core]))

(describe "hello-world component"
  (before
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
    (let [id-button-0 (js-invoke js/document "querySelector" "#-my-button-0")
          id-button-1 (js-invoke js/document "querySelector" "#-my-button-1")
          id-button-2 (js-invoke js/document "querySelector" "#-my-button-2")
          id-button-3 (js-invoke js/document "querySelector" "#-my-button-3")
          id-button-4 (js-invoke js/document "querySelector" "#-my-button-4")
          id-button-5 (js-invoke js/document "querySelector" "#-my-button-5")
          id-button-6 (js-invoke js/document "querySelector" "#-my-button-6")
          id-button-7 (js-invoke js/document "querySelector" "#-my-button-7")
          id-button-8 (js-invoke js/document "querySelector" "#-my-button-8")]
      (.click id-button-1)
      (reagent/flush)
      (should= "X" (.-value id-button-1))
      (.click id-button-2)
      (reagent/flush)
      (should= "O" (.-value id-button-2))
      (reagent/flush)
      (should= "" (.-value id-button-0))
      (should= "" (.-value id-button-3))
      (should= "" (.-value id-button-4))
      (should= "" (.-value id-button-5))
      (should= "" (.-value id-button-6))
      (should= "" (.-value id-button-7))
      (should= "" (.-value id-button-8))))

  (it "checks if there are line breaks"
    (let [breaks (js-invoke js/document "querySelectorAll" ".container br")]
      (should= 3 (count (seq breaks)))))
  )
