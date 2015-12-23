(defproject cljs-nrepl "0.1.0-SNAPSHOT"
  :description "Pure Clojurescript Nrepl Server"
  :url "https://github.com/whamtet/cljs-nrepl"
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.170"]
                 [org.clojure/data.json "0.2.6" :classifier "aot"]
                 [dogfort "0.2.0-SNAPSHOT"]
                 ]
  :jvm-opts ^:replace ["-Xmx1g" "-server"]
  :plugins [[lein-npm "0.6.1"]]
  :npm {:dependencies [[source-map-support "0.3.2"]]}
  :source-paths ["src" "target/classes"]
  :clean-targets ["out" "release"]
  :target-path "target"
  :aliases
  {"build" ["run" "-m" "dogfort.build" "cljs-nrepl.core"]})
