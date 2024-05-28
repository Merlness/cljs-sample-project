(ns sample-project.core-spec
  (:require-macros [speclj.core :refer [describe it should=]])
  (:require [speclj.core]
            [sample-project.components :as sut]))

(describe "hello-world component"
  (it "says hello to the entire world"
    (should= [:h1 "Hello, all!"] (sut/hello-world)))
  )
