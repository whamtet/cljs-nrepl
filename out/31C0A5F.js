goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10990__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10990 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10991__i = 0, G__10991__a = new Array(arguments.length -  0);
while (G__10991__i < G__10991__a.length) {G__10991__a[G__10991__i] = arguments[G__10991__i + 0]; ++G__10991__i;}
  args = new cljs.core.IndexedSeq(G__10991__a,0);
} 
return G__10990__delegate.call(this,args);};
G__10990.cljs$lang$maxFixedArity = 0;
G__10990.cljs$lang$applyTo = (function (arglist__10992){
var args = cljs.core.seq(arglist__10992);
return G__10990__delegate(args);
});
G__10990.cljs$core$IFn$_invoke$arity$variadic = G__10990__delegate;
return G__10990;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10993__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10993 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10994__i = 0, G__10994__a = new Array(arguments.length -  0);
while (G__10994__i < G__10994__a.length) {G__10994__a[G__10994__i] = arguments[G__10994__i + 0]; ++G__10994__i;}
  args = new cljs.core.IndexedSeq(G__10994__a,0);
} 
return G__10993__delegate.call(this,args);};
G__10993.cljs$lang$maxFixedArity = 0;
G__10993.cljs$lang$applyTo = (function (arglist__10995){
var args = cljs.core.seq(arglist__10995);
return G__10993__delegate(args);
});
G__10993.cljs$core$IFn$_invoke$arity$variadic = G__10993__delegate;
return G__10993;
})()
;

return null;
});
