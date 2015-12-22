goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14399__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14399 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14400__i = 0, G__14400__a = new Array(arguments.length -  0);
while (G__14400__i < G__14400__a.length) {G__14400__a[G__14400__i] = arguments[G__14400__i + 0]; ++G__14400__i;}
  args = new cljs.core.IndexedSeq(G__14400__a,0);
} 
return G__14399__delegate.call(this,args);};
G__14399.cljs$lang$maxFixedArity = 0;
G__14399.cljs$lang$applyTo = (function (arglist__14401){
var args = cljs.core.seq(arglist__14401);
return G__14399__delegate(args);
});
G__14399.cljs$core$IFn$_invoke$arity$variadic = G__14399__delegate;
return G__14399;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14402__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14402 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14403__i = 0, G__14403__a = new Array(arguments.length -  0);
while (G__14403__i < G__14403__a.length) {G__14403__a[G__14403__i] = arguments[G__14403__i + 0]; ++G__14403__i;}
  args = new cljs.core.IndexedSeq(G__14403__a,0);
} 
return G__14402__delegate.call(this,args);};
G__14402.cljs$lang$maxFixedArity = 0;
G__14402.cljs$lang$applyTo = (function (arglist__14404){
var args = cljs.core.seq(arglist__14404);
return G__14402__delegate(args);
});
G__14402.cljs$core$IFn$_invoke$arity$variadic = G__14402__delegate;
return G__14402;
})()
;

return null;
});
