(ns redlobster.promise
  (:require-macros [cljs.node-macros :as n])
  (:require [redlobster.events :as e]))

(defprotocol IPromise
  (realised? [this])
  (failed? [this])
  (realise [this value])
  (realise-error [this value])
  (on-realised [this on-success on-error]))

(defn promise? [v]
  (satisfies? IPromise v))

(deftype Promise [ee]
  IDeref
  (-deref [this]
    (let [realised (.-__realised ee)
          value (.-__value ee)]
      (cond
       (not realised) :redlobster.promise/not-realised
       :else value)))
  IPromise
  (realised? [this]
    (if (nil? (.-__realised ee)) false true))
  (failed? [this]
    (and (realised? this) (= "error" (.-__realised ee))))
  (realise [this value]
    (if (realised? this)
      (throw :redlobster.promise/already-realised)
      (if (promise? value)
        (on-realised value
                     #(realise this %)
                     #(realise-error this %))
        (doto ee
          (aset "__realised" "success")
          (aset "__value" value)
          (e/emit :realise-success [value])))))
  (realise-error [this value]
    (if (realised? this)
      (throw :redlobster.promise/already-realised)
      (if (promise? value)
        (on-realised value
                     #(realise this %)
                     #(realise-error this %))
        (doto ee
          (aset "__realised" "error")
          (aset "__value" value)
          (e/emit :realise-error [value])))))
  (on-realised [this on-success on-error]
    (if (realised? this)
      (if (failed? this) (on-error @this) (on-success @this))
      (doto ee
        (e/on :realise-success on-success)
        (e/on :realise-error on-error)))))

(defn promise
  ([]
     (Promise.
      (doto (e/event-emitter)
        (aset "__realised" nil)
        (aset "__value" nil))))
  ([success-value]
     (doto (promise)
       (realise success-value))))

(defn promise-fail [error-value]
  (doto (promise)
    (realise-error error-value)))

(defn await
  "Takes a list of promises, and creates a promise that will realise as
`:redlobster.promise/realised` when each promise has successfully realised,
or if one or more of the promises fail, fail with the value of the first
failing promise."
  [& promises]
  (let [p (promise)
        total (count promises)
        count (atom 0)
        done (atom false)]
    (doseq [subp promises]
      (on-realised
       subp
       (fn [_]
         (when (not @done)
           (swap! count inc)
           (when (= total @count)
             (reset! done true)
             (realise p :redlobster.promise/realised))))
       (fn [err]
         (when (not @done)
           (reset! done true)
           (realise-error p err)))))
    p))

(defn defer-until-realised [promises callback]
  (let [p (promise)]
    (on-realised (apply await promises)
                 (fn [_] (realise p (callback)))
                 (fn [error] (realise-error p error)))
    p))
