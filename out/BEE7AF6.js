goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10881__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10881 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10882__i = 0, G__10882__a = new Array(arguments.length -  0);
while (G__10882__i < G__10882__a.length) {G__10882__a[G__10882__i] = arguments[G__10882__i + 0]; ++G__10882__i;}
  args = new cljs.core.IndexedSeq(G__10882__a,0);
} 
return G__10881__delegate.call(this,args);};
G__10881.cljs$lang$maxFixedArity = 0;
G__10881.cljs$lang$applyTo = (function (arglist__10883){
var args = cljs.core.seq(arglist__10883);
return G__10881__delegate(args);
});
G__10881.cljs$core$IFn$_invoke$arity$variadic = G__10881__delegate;
return G__10881;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10884__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10884 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10885__i = 0, G__10885__a = new Array(arguments.length -  0);
while (G__10885__i < G__10885__a.length) {G__10885__a[G__10885__i] = arguments[G__10885__i + 0]; ++G__10885__i;}
  args = new cljs.core.IndexedSeq(G__10885__a,0);
} 
return G__10884__delegate.call(this,args);};
G__10884.cljs$lang$maxFixedArity = 0;
G__10884.cljs$lang$applyTo = (function (arglist__10886){
var args = cljs.core.seq(arglist__10886);
return G__10884__delegate(args);
});
G__10884.cljs$core$IFn$_invoke$arity$variadic = G__10884__delegate;
return G__10884;
})()
;

return null;
});
