goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__13904__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__13904 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13905__i = 0, G__13905__a = new Array(arguments.length -  0);
while (G__13905__i < G__13905__a.length) {G__13905__a[G__13905__i] = arguments[G__13905__i + 0]; ++G__13905__i;}
  args = new cljs.core.IndexedSeq(G__13905__a,0);
} 
return G__13904__delegate.call(this,args);};
G__13904.cljs$lang$maxFixedArity = 0;
G__13904.cljs$lang$applyTo = (function (arglist__13906){
var args = cljs.core.seq(arglist__13906);
return G__13904__delegate(args);
});
G__13904.cljs$core$IFn$_invoke$arity$variadic = G__13904__delegate;
return G__13904;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__13907__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__13907 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13908__i = 0, G__13908__a = new Array(arguments.length -  0);
while (G__13908__i < G__13908__a.length) {G__13908__a[G__13908__i] = arguments[G__13908__i + 0]; ++G__13908__i;}
  args = new cljs.core.IndexedSeq(G__13908__a,0);
} 
return G__13907__delegate.call(this,args);};
G__13907.cljs$lang$maxFixedArity = 0;
G__13907.cljs$lang$applyTo = (function (arglist__13909){
var args = cljs.core.seq(arglist__13909);
return G__13907__delegate(args);
});
G__13907.cljs$core$IFn$_invoke$arity$variadic = G__13907__delegate;
return G__13907;
})()
;

return null;
});
