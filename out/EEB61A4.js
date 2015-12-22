goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10549__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10549 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10550__i = 0, G__10550__a = new Array(arguments.length -  0);
while (G__10550__i < G__10550__a.length) {G__10550__a[G__10550__i] = arguments[G__10550__i + 0]; ++G__10550__i;}
  args = new cljs.core.IndexedSeq(G__10550__a,0);
} 
return G__10549__delegate.call(this,args);};
G__10549.cljs$lang$maxFixedArity = 0;
G__10549.cljs$lang$applyTo = (function (arglist__10551){
var args = cljs.core.seq(arglist__10551);
return G__10549__delegate(args);
});
G__10549.cljs$core$IFn$_invoke$arity$variadic = G__10549__delegate;
return G__10549;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10552__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10552 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10553__i = 0, G__10553__a = new Array(arguments.length -  0);
while (G__10553__i < G__10553__a.length) {G__10553__a[G__10553__i] = arguments[G__10553__i + 0]; ++G__10553__i;}
  args = new cljs.core.IndexedSeq(G__10553__a,0);
} 
return G__10552__delegate.call(this,args);};
G__10552.cljs$lang$maxFixedArity = 0;
G__10552.cljs$lang$applyTo = (function (arglist__10554){
var args = cljs.core.seq(arglist__10554);
return G__10552__delegate(args);
});
G__10552.cljs$core$IFn$_invoke$arity$variadic = G__10552__delegate;
return G__10552;
})()
;

return null;
});
