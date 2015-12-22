goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9642__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9642 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9643__i = 0, G__9643__a = new Array(arguments.length -  0);
while (G__9643__i < G__9643__a.length) {G__9643__a[G__9643__i] = arguments[G__9643__i + 0]; ++G__9643__i;}
  args = new cljs.core.IndexedSeq(G__9643__a,0);
} 
return G__9642__delegate.call(this,args);};
G__9642.cljs$lang$maxFixedArity = 0;
G__9642.cljs$lang$applyTo = (function (arglist__9644){
var args = cljs.core.seq(arglist__9644);
return G__9642__delegate(args);
});
G__9642.cljs$core$IFn$_invoke$arity$variadic = G__9642__delegate;
return G__9642;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9645__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9645 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9646__i = 0, G__9646__a = new Array(arguments.length -  0);
while (G__9646__i < G__9646__a.length) {G__9646__a[G__9646__i] = arguments[G__9646__i + 0]; ++G__9646__i;}
  args = new cljs.core.IndexedSeq(G__9646__a,0);
} 
return G__9645__delegate.call(this,args);};
G__9645.cljs$lang$maxFixedArity = 0;
G__9645.cljs$lang$applyTo = (function (arglist__9647){
var args = cljs.core.seq(arglist__9647);
return G__9645__delegate(args);
});
G__9645.cljs$core$IFn$_invoke$arity$variadic = G__9645__delegate;
return G__9645;
})()
;

return null;
});
