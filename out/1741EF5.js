goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__7246__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__7246 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7247__i = 0, G__7247__a = new Array(arguments.length -  0);
while (G__7247__i < G__7247__a.length) {G__7247__a[G__7247__i] = arguments[G__7247__i + 0]; ++G__7247__i;}
  args = new cljs.core.IndexedSeq(G__7247__a,0);
} 
return G__7246__delegate.call(this,args);};
G__7246.cljs$lang$maxFixedArity = 0;
G__7246.cljs$lang$applyTo = (function (arglist__7248){
var args = cljs.core.seq(arglist__7248);
return G__7246__delegate(args);
});
G__7246.cljs$core$IFn$_invoke$arity$variadic = G__7246__delegate;
return G__7246;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__7249__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__7249 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7250__i = 0, G__7250__a = new Array(arguments.length -  0);
while (G__7250__i < G__7250__a.length) {G__7250__a[G__7250__i] = arguments[G__7250__i + 0]; ++G__7250__i;}
  args = new cljs.core.IndexedSeq(G__7250__a,0);
} 
return G__7249__delegate.call(this,args);};
G__7249.cljs$lang$maxFixedArity = 0;
G__7249.cljs$lang$applyTo = (function (arglist__7251){
var args = cljs.core.seq(arglist__7251);
return G__7249__delegate(args);
});
G__7249.cljs$core$IFn$_invoke$arity$variadic = G__7249__delegate;
return G__7249;
})()
;

return null;
});
