(ns sample-project.core
  (:require [goog.dom :as gdom]
            [c3kit.apron.log :as log]
            [reagent.core :as reagent]
            [reagent.dom :as rdom]
            [sample-project.components :as components]))

(defonce state (reagent/atom {}))

(defn ^:export main []
  (do
    (log/info "hello")
    (let [braintree js/braintree
          dropin (.-dropin braintree)
          created (.create dropin
                           (clj->js {:container     "#dropin-container"
                                     :authorization "sandbox_nd62th7s_qyt7f9j9929dt8d7"})
                           (fn [error dropin-instance]
                             (clj->js {})))]
      (log/info (.-value (.getElementById js/document "dropin-container")))
      (log/info created))
    (rdom/render [components/hello-world] (js/document.getElementById "app"))))

(main)