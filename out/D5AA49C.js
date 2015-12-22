goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14439__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14439 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14440__i = 0, G__14440__a = new Array(arguments.length -  0);
while (G__14440__i < G__14440__a.length) {G__14440__a[G__14440__i] = arguments[G__14440__i + 0]; ++G__14440__i;}
  args = new cljs.core.IndexedSeq(G__14440__a,0);
} 
return G__14439__delegate.call(this,args);};
G__14439.cljs$lang$maxFixedArity = 0;
G__14439.cljs$lang$applyTo = (function (arglist__14441){
var args = cljs.core.seq(arglist__14441);
return G__14439__delegate(args);
});
G__14439.cljs$core$IFn$_invoke$arity$variadic = G__14439__delegate;
return G__14439;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14442__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14442 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14443__i = 0, G__14443__a = new Array(arguments.length -  0);
while (G__14443__i < G__14443__a.length) {G__14443__a[G__14443__i] = arguments[G__14443__i + 0]; ++G__14443__i;}
  args = new cljs.core.IndexedSeq(G__14443__a,0);
} 
return G__14442__delegate.call(this,args);};
G__14442.cljs$lang$maxFixedArity = 0;
G__14442.cljs$lang$applyTo = (function (arglist__14444){
var args = cljs.core.seq(arglist__14444);
return G__14442__delegate(args);
});
G__14442.cljs$core$IFn$_invoke$arity$variadic = G__14442__delegate;
return G__14442;
})()
;

return null;
});
