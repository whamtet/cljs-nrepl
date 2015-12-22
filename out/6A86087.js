goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__6230__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__6230 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6231__i = 0, G__6231__a = new Array(arguments.length -  0);
while (G__6231__i < G__6231__a.length) {G__6231__a[G__6231__i] = arguments[G__6231__i + 0]; ++G__6231__i;}
  args = new cljs.core.IndexedSeq(G__6231__a,0);
} 
return G__6230__delegate.call(this,args);};
G__6230.cljs$lang$maxFixedArity = 0;
G__6230.cljs$lang$applyTo = (function (arglist__6232){
var args = cljs.core.seq(arglist__6232);
return G__6230__delegate(args);
});
G__6230.cljs$core$IFn$_invoke$arity$variadic = G__6230__delegate;
return G__6230;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__6233__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__6233 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6234__i = 0, G__6234__a = new Array(arguments.length -  0);
while (G__6234__i < G__6234__a.length) {G__6234__a[G__6234__i] = arguments[G__6234__i + 0]; ++G__6234__i;}
  args = new cljs.core.IndexedSeq(G__6234__a,0);
} 
return G__6233__delegate.call(this,args);};
G__6233.cljs$lang$maxFixedArity = 0;
G__6233.cljs$lang$applyTo = (function (arglist__6235){
var args = cljs.core.seq(arglist__6235);
return G__6233__delegate(args);
});
G__6233.cljs$core$IFn$_invoke$arity$variadic = G__6233__delegate;
return G__6233;
})()
;

return null;
});
