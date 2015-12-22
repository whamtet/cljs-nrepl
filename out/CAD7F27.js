goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14327__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14327 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14328__i = 0, G__14328__a = new Array(arguments.length -  0);
while (G__14328__i < G__14328__a.length) {G__14328__a[G__14328__i] = arguments[G__14328__i + 0]; ++G__14328__i;}
  args = new cljs.core.IndexedSeq(G__14328__a,0);
} 
return G__14327__delegate.call(this,args);};
G__14327.cljs$lang$maxFixedArity = 0;
G__14327.cljs$lang$applyTo = (function (arglist__14329){
var args = cljs.core.seq(arglist__14329);
return G__14327__delegate(args);
});
G__14327.cljs$core$IFn$_invoke$arity$variadic = G__14327__delegate;
return G__14327;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14330__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14330 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14331__i = 0, G__14331__a = new Array(arguments.length -  0);
while (G__14331__i < G__14331__a.length) {G__14331__a[G__14331__i] = arguments[G__14331__i + 0]; ++G__14331__i;}
  args = new cljs.core.IndexedSeq(G__14331__a,0);
} 
return G__14330__delegate.call(this,args);};
G__14330.cljs$lang$maxFixedArity = 0;
G__14330.cljs$lang$applyTo = (function (arglist__14332){
var args = cljs.core.seq(arglist__14332);
return G__14330__delegate(args);
});
G__14330.cljs$core$IFn$_invoke$arity$variadic = G__14330__delegate;
return G__14330;
})()
;

return null;
});
