goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8931__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8931 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8932__i = 0, G__8932__a = new Array(arguments.length -  0);
while (G__8932__i < G__8932__a.length) {G__8932__a[G__8932__i] = arguments[G__8932__i + 0]; ++G__8932__i;}
  args = new cljs.core.IndexedSeq(G__8932__a,0);
} 
return G__8931__delegate.call(this,args);};
G__8931.cljs$lang$maxFixedArity = 0;
G__8931.cljs$lang$applyTo = (function (arglist__8933){
var args = cljs.core.seq(arglist__8933);
return G__8931__delegate(args);
});
G__8931.cljs$core$IFn$_invoke$arity$variadic = G__8931__delegate;
return G__8931;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8934__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8934 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8935__i = 0, G__8935__a = new Array(arguments.length -  0);
while (G__8935__i < G__8935__a.length) {G__8935__a[G__8935__i] = arguments[G__8935__i + 0]; ++G__8935__i;}
  args = new cljs.core.IndexedSeq(G__8935__a,0);
} 
return G__8934__delegate.call(this,args);};
G__8934.cljs$lang$maxFixedArity = 0;
G__8934.cljs$lang$applyTo = (function (arglist__8936){
var args = cljs.core.seq(arglist__8936);
return G__8934__delegate(args);
});
G__8934.cljs$core$IFn$_invoke$arity$variadic = G__8934__delegate;
return G__8934;
})()
;

return null;
});
