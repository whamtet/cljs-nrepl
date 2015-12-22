goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9268__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9268 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9269__i = 0, G__9269__a = new Array(arguments.length -  0);
while (G__9269__i < G__9269__a.length) {G__9269__a[G__9269__i] = arguments[G__9269__i + 0]; ++G__9269__i;}
  args = new cljs.core.IndexedSeq(G__9269__a,0);
} 
return G__9268__delegate.call(this,args);};
G__9268.cljs$lang$maxFixedArity = 0;
G__9268.cljs$lang$applyTo = (function (arglist__9270){
var args = cljs.core.seq(arglist__9270);
return G__9268__delegate(args);
});
G__9268.cljs$core$IFn$_invoke$arity$variadic = G__9268__delegate;
return G__9268;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9271__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9271 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9272__i = 0, G__9272__a = new Array(arguments.length -  0);
while (G__9272__i < G__9272__a.length) {G__9272__a[G__9272__i] = arguments[G__9272__i + 0]; ++G__9272__i;}
  args = new cljs.core.IndexedSeq(G__9272__a,0);
} 
return G__9271__delegate.call(this,args);};
G__9271.cljs$lang$maxFixedArity = 0;
G__9271.cljs$lang$applyTo = (function (arglist__9273){
var args = cljs.core.seq(arglist__9273);
return G__9271__delegate(args);
});
G__9271.cljs$core$IFn$_invoke$arity$variadic = G__9271__delegate;
return G__9271;
})()
;

return null;
});
