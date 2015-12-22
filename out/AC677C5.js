goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__7583__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__7583 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7584__i = 0, G__7584__a = new Array(arguments.length -  0);
while (G__7584__i < G__7584__a.length) {G__7584__a[G__7584__i] = arguments[G__7584__i + 0]; ++G__7584__i;}
  args = new cljs.core.IndexedSeq(G__7584__a,0);
} 
return G__7583__delegate.call(this,args);};
G__7583.cljs$lang$maxFixedArity = 0;
G__7583.cljs$lang$applyTo = (function (arglist__7585){
var args = cljs.core.seq(arglist__7585);
return G__7583__delegate(args);
});
G__7583.cljs$core$IFn$_invoke$arity$variadic = G__7583__delegate;
return G__7583;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__7586__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__7586 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7587__i = 0, G__7587__a = new Array(arguments.length -  0);
while (G__7587__i < G__7587__a.length) {G__7587__a[G__7587__i] = arguments[G__7587__i + 0]; ++G__7587__i;}
  args = new cljs.core.IndexedSeq(G__7587__a,0);
} 
return G__7586__delegate.call(this,args);};
G__7586.cljs$lang$maxFixedArity = 0;
G__7586.cljs$lang$applyTo = (function (arglist__7588){
var args = cljs.core.seq(arglist__7588);
return G__7586__delegate(args);
});
G__7586.cljs$core$IFn$_invoke$arity$variadic = G__7586__delegate;
return G__7586;
})()
;

return null;
});
