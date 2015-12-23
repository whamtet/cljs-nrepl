goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10558__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10558 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10559__i = 0, G__10559__a = new Array(arguments.length -  0);
while (G__10559__i < G__10559__a.length) {G__10559__a[G__10559__i] = arguments[G__10559__i + 0]; ++G__10559__i;}
  args = new cljs.core.IndexedSeq(G__10559__a,0);
} 
return G__10558__delegate.call(this,args);};
G__10558.cljs$lang$maxFixedArity = 0;
G__10558.cljs$lang$applyTo = (function (arglist__10560){
var args = cljs.core.seq(arglist__10560);
return G__10558__delegate(args);
});
G__10558.cljs$core$IFn$_invoke$arity$variadic = G__10558__delegate;
return G__10558;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10561__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10561 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10562__i = 0, G__10562__a = new Array(arguments.length -  0);
while (G__10562__i < G__10562__a.length) {G__10562__a[G__10562__i] = arguments[G__10562__i + 0]; ++G__10562__i;}
  args = new cljs.core.IndexedSeq(G__10562__a,0);
} 
return G__10561__delegate.call(this,args);};
G__10561.cljs$lang$maxFixedArity = 0;
G__10561.cljs$lang$applyTo = (function (arglist__10563){
var args = cljs.core.seq(arglist__10563);
return G__10561__delegate(args);
});
G__10561.cljs$core$IFn$_invoke$arity$variadic = G__10561__delegate;
return G__10561;
})()
;

return null;
});
