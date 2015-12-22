goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__7920__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__7920 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7921__i = 0, G__7921__a = new Array(arguments.length -  0);
while (G__7921__i < G__7921__a.length) {G__7921__a[G__7921__i] = arguments[G__7921__i + 0]; ++G__7921__i;}
  args = new cljs.core.IndexedSeq(G__7921__a,0);
} 
return G__7920__delegate.call(this,args);};
G__7920.cljs$lang$maxFixedArity = 0;
G__7920.cljs$lang$applyTo = (function (arglist__7922){
var args = cljs.core.seq(arglist__7922);
return G__7920__delegate(args);
});
G__7920.cljs$core$IFn$_invoke$arity$variadic = G__7920__delegate;
return G__7920;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__7923__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__7923 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7924__i = 0, G__7924__a = new Array(arguments.length -  0);
while (G__7924__i < G__7924__a.length) {G__7924__a[G__7924__i] = arguments[G__7924__i + 0]; ++G__7924__i;}
  args = new cljs.core.IndexedSeq(G__7924__a,0);
} 
return G__7923__delegate.call(this,args);};
G__7923.cljs$lang$maxFixedArity = 0;
G__7923.cljs$lang$applyTo = (function (arglist__7925){
var args = cljs.core.seq(arglist__7925);
return G__7923__delegate(args);
});
G__7923.cljs$core$IFn$_invoke$arity$variadic = G__7923__delegate;
return G__7923;
})()
;

return null;
});
