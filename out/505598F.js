goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8594__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8594 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8595__i = 0, G__8595__a = new Array(arguments.length -  0);
while (G__8595__i < G__8595__a.length) {G__8595__a[G__8595__i] = arguments[G__8595__i + 0]; ++G__8595__i;}
  args = new cljs.core.IndexedSeq(G__8595__a,0);
} 
return G__8594__delegate.call(this,args);};
G__8594.cljs$lang$maxFixedArity = 0;
G__8594.cljs$lang$applyTo = (function (arglist__8596){
var args = cljs.core.seq(arglist__8596);
return G__8594__delegate(args);
});
G__8594.cljs$core$IFn$_invoke$arity$variadic = G__8594__delegate;
return G__8594;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8597__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8597 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8598__i = 0, G__8598__a = new Array(arguments.length -  0);
while (G__8598__i < G__8598__a.length) {G__8598__a[G__8598__i] = arguments[G__8598__i + 0]; ++G__8598__i;}
  args = new cljs.core.IndexedSeq(G__8598__a,0);
} 
return G__8597__delegate.call(this,args);};
G__8597.cljs$lang$maxFixedArity = 0;
G__8597.cljs$lang$applyTo = (function (arglist__8599){
var args = cljs.core.seq(arglist__8599);
return G__8597__delegate(args);
});
G__8597.cljs$core$IFn$_invoke$arity$variadic = G__8597__delegate;
return G__8597;
})()
;

return null;
});
