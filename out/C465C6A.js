goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16139__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__16139 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16140__i = 0, G__16140__a = new Array(arguments.length -  0);
while (G__16140__i < G__16140__a.length) {G__16140__a[G__16140__i] = arguments[G__16140__i + 0]; ++G__16140__i;}
  args = new cljs.core.IndexedSeq(G__16140__a,0);
} 
return G__16139__delegate.call(this,args);};
G__16139.cljs$lang$maxFixedArity = 0;
G__16139.cljs$lang$applyTo = (function (arglist__16141){
var args = cljs.core.seq(arglist__16141);
return G__16139__delegate(args);
});
G__16139.cljs$core$IFn$_invoke$arity$variadic = G__16139__delegate;
return G__16139;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__16142__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__16142 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16143__i = 0, G__16143__a = new Array(arguments.length -  0);
while (G__16143__i < G__16143__a.length) {G__16143__a[G__16143__i] = arguments[G__16143__i + 0]; ++G__16143__i;}
  args = new cljs.core.IndexedSeq(G__16143__a,0);
} 
return G__16142__delegate.call(this,args);};
G__16142.cljs$lang$maxFixedArity = 0;
G__16142.cljs$lang$applyTo = (function (arglist__16144){
var args = cljs.core.seq(arglist__16144);
return G__16142__delegate(args);
});
G__16142.cljs$core$IFn$_invoke$arity$variadic = G__16142__delegate;
return G__16142;
})()
;

return null;
});
