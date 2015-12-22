(ns cljs-nrepl.core
  (:use-macros [dogfort.middleware.routes-macros :only [defroutes GET POST ANY]])
  (:require-macros
   [redlobster.macros :refer [promise let-realised]])
  (:use [dogfort.http :only [run-http]]
        )
  (:require [cljs.nodejs]
            [dogfort.middleware.defaults :as defaults]
            [dogfort.middleware.routes]
            [redlobster.promise :as redlobster]
            [cljs.js :as cljs]
            [cljs.reader :as reader]
            ))

(cljs.nodejs/enable-util-print!)
(def st (cljs/empty-state))

(defn redirect [url]
  {:status 302
   :headers {:location url}
   :body ""})

(defn clj->json
  [ds]
  (-> ds clj->js js/JSON.stringify))

(defn clj->json2
  [ds]
  (let [
        ds (concat ["["] ds ["]"])
        ]
    (apply str
           (interpose "\n"
                      (map clj->json ds)))))

(defn response [session id m]
  (assert (and session id m))
  {:status 200
   :session session
   :body
   (clj->json2
    [
     (merge {:session session :id id} m)
     {:session session :id id :status #{:done}}
     ])})

(defn my-eval [{:keys [source]}]
  (try
    (js/eval source)
    (catch :default e)))

(defn eval [s]
  (promise
   (cljs/eval
    st
    s
    {:eval my-eval
     :ns 'cljs.core
     }
    #(-> % pr-str realise))))

(defn eval-str [s]
  (try
    (let [
          s (.trim s)
          form (reader/read-string s)
          form (if (coll? form) form `(~'identity ~form))
          ]
      (if (empty? s)
        (promise (realise ""))
        (eval form)))
    (catch :default e
      (println "error" e)
      (promise (realise "")))))

(defn rand-subseq [n] (repeatedly n #(rand-nth "abcdefghijklmnopqrstuvwxyz0123456789")))
(defn uuid []
  (apply str
         (flatten
          (interpose "-"
                     (map rand-subseq [8 4 4 4 12])))))

;;handle the messages
;;lazy, all synchronous

(defmulti op-handle :op)

(defmethod op-handle "clone" [{:keys [session id]} cookie-session]
  (let [
        new-session (or session (uuid))
        ]
    (response new-session id {:new-session new-session})))

(defmethod op-handle "close" [{:keys [id]} cookie-session]
  (response cookie-session id {}))

(defmethod op-handle "eval" [{:keys [id code session]} cookie-session]
  (assert session)
  (let-realised [value (eval-str code)]
                (response
                 session
                 id
                 {:value @value
                  :ns 'cljs.core
                  })))

(defmethod op-handle :default [{:keys [op]} cookie-session]
  (throw (js/Error. (str op " not supported."))))

(defroutes handler
  (ANY "/repl" req
       (let [
             {:keys [params session]} req
             ]
         (if (:op params)
           (op-handle params session)
           {:body "[\n\n]" :status 200})
         ))
  (ANY "/test" []
       (let-realised [result (eval-str "(+ 1 2)")]
                     {:body (str @result) :status 200}))
  (GET "/" []
       (redirect "/index.html"))
  )

(defn main [& args]
  (println "starting")
  (-> handler
      (defaults/wrap-defaults {:wrap-file "static"})
      (run-http {:port (or (.-PORT (.-env js/process)) 5000)})))

(set! *main-cli-fn* main)
