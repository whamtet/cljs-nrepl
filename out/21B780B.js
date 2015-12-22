goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__13356__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__13356 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13357__i = 0, G__13357__a = new Array(arguments.length -  0);
while (G__13357__i < G__13357__a.length) {G__13357__a[G__13357__i] = arguments[G__13357__i + 0]; ++G__13357__i;}
  args = new cljs.core.IndexedSeq(G__13357__a,0);
} 
return G__13356__delegate.call(this,args);};
G__13356.cljs$lang$maxFixedArity = 0;
G__13356.cljs$lang$applyTo = (function (arglist__13358){
var args = cljs.core.seq(arglist__13358);
return G__13356__delegate(args);
});
G__13356.cljs$core$IFn$_invoke$arity$variadic = G__13356__delegate;
return G__13356;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__13359__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__13359 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13360__i = 0, G__13360__a = new Array(arguments.length -  0);
while (G__13360__i < G__13360__a.length) {G__13360__a[G__13360__i] = arguments[G__13360__i + 0]; ++G__13360__i;}
  args = new cljs.core.IndexedSeq(G__13360__a,0);
} 
return G__13359__delegate.call(this,args);};
G__13359.cljs$lang$maxFixedArity = 0;
G__13359.cljs$lang$applyTo = (function (arglist__13361){
var args = cljs.core.seq(arglist__13361);
return G__13359__delegate(args);
});
G__13359.cljs$core$IFn$_invoke$arity$variadic = G__13359__delegate;
return G__13359;
})()
;

return null;
});
