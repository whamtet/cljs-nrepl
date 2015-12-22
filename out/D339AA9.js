goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8257__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8257 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8258__i = 0, G__8258__a = new Array(arguments.length -  0);
while (G__8258__i < G__8258__a.length) {G__8258__a[G__8258__i] = arguments[G__8258__i + 0]; ++G__8258__i;}
  args = new cljs.core.IndexedSeq(G__8258__a,0);
} 
return G__8257__delegate.call(this,args);};
G__8257.cljs$lang$maxFixedArity = 0;
G__8257.cljs$lang$applyTo = (function (arglist__8259){
var args = cljs.core.seq(arglist__8259);
return G__8257__delegate(args);
});
G__8257.cljs$core$IFn$_invoke$arity$variadic = G__8257__delegate;
return G__8257;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8260__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8260 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8261__i = 0, G__8261__a = new Array(arguments.length -  0);
while (G__8261__i < G__8261__a.length) {G__8261__a[G__8261__i] = arguments[G__8261__i + 0]; ++G__8261__i;}
  args = new cljs.core.IndexedSeq(G__8261__a,0);
} 
return G__8260__delegate.call(this,args);};
G__8260.cljs$lang$maxFixedArity = 0;
G__8260.cljs$lang$applyTo = (function (arglist__8262){
var args = cljs.core.seq(arglist__8262);
return G__8260__delegate(args);
});
G__8260.cljs$core$IFn$_invoke$arity$variadic = G__8260__delegate;
return G__8260;
})()
;

return null;
});
