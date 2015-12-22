goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15459__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15459 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15460__i = 0, G__15460__a = new Array(arguments.length -  0);
while (G__15460__i < G__15460__a.length) {G__15460__a[G__15460__i] = arguments[G__15460__i + 0]; ++G__15460__i;}
  args = new cljs.core.IndexedSeq(G__15460__a,0);
} 
return G__15459__delegate.call(this,args);};
G__15459.cljs$lang$maxFixedArity = 0;
G__15459.cljs$lang$applyTo = (function (arglist__15461){
var args = cljs.core.seq(arglist__15461);
return G__15459__delegate(args);
});
G__15459.cljs$core$IFn$_invoke$arity$variadic = G__15459__delegate;
return G__15459;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15462__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15462 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15463__i = 0, G__15463__a = new Array(arguments.length -  0);
while (G__15463__i < G__15463__a.length) {G__15463__a[G__15463__i] = arguments[G__15463__i + 0]; ++G__15463__i;}
  args = new cljs.core.IndexedSeq(G__15463__a,0);
} 
return G__15462__delegate.call(this,args);};
G__15462.cljs$lang$maxFixedArity = 0;
G__15462.cljs$lang$applyTo = (function (arglist__15464){
var args = cljs.core.seq(arglist__15464);
return G__15462__delegate(args);
});
G__15462.cljs$core$IFn$_invoke$arity$variadic = G__15462__delegate;
return G__15462;
})()
;

return null;
});
