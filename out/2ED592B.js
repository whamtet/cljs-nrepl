goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9979__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9979 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9980__i = 0, G__9980__a = new Array(arguments.length -  0);
while (G__9980__i < G__9980__a.length) {G__9980__a[G__9980__i] = arguments[G__9980__i + 0]; ++G__9980__i;}
  args = new cljs.core.IndexedSeq(G__9980__a,0);
} 
return G__9979__delegate.call(this,args);};
G__9979.cljs$lang$maxFixedArity = 0;
G__9979.cljs$lang$applyTo = (function (arglist__9981){
var args = cljs.core.seq(arglist__9981);
return G__9979__delegate(args);
});
G__9979.cljs$core$IFn$_invoke$arity$variadic = G__9979__delegate;
return G__9979;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9982__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9982 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9983__i = 0, G__9983__a = new Array(arguments.length -  0);
while (G__9983__i < G__9983__a.length) {G__9983__a[G__9983__i] = arguments[G__9983__i + 0]; ++G__9983__i;}
  args = new cljs.core.IndexedSeq(G__9983__a,0);
} 
return G__9982__delegate.call(this,args);};
G__9982.cljs$lang$maxFixedArity = 0;
G__9982.cljs$lang$applyTo = (function (arglist__9984){
var args = cljs.core.seq(arglist__9984);
return G__9982__delegate(args);
});
G__9982.cljs$core$IFn$_invoke$arity$variadic = G__9982__delegate;
return G__9982;
})()
;

return null;
});
