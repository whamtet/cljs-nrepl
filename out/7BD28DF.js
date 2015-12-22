goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__6570__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__6570 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6571__i = 0, G__6571__a = new Array(arguments.length -  0);
while (G__6571__i < G__6571__a.length) {G__6571__a[G__6571__i] = arguments[G__6571__i + 0]; ++G__6571__i;}
  args = new cljs.core.IndexedSeq(G__6571__a,0);
} 
return G__6570__delegate.call(this,args);};
G__6570.cljs$lang$maxFixedArity = 0;
G__6570.cljs$lang$applyTo = (function (arglist__6572){
var args = cljs.core.seq(arglist__6572);
return G__6570__delegate(args);
});
G__6570.cljs$core$IFn$_invoke$arity$variadic = G__6570__delegate;
return G__6570;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__6573__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__6573 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6574__i = 0, G__6574__a = new Array(arguments.length -  0);
while (G__6574__i < G__6574__a.length) {G__6574__a[G__6574__i] = arguments[G__6574__i + 0]; ++G__6574__i;}
  args = new cljs.core.IndexedSeq(G__6574__a,0);
} 
return G__6573__delegate.call(this,args);};
G__6573.cljs$lang$maxFixedArity = 0;
G__6573.cljs$lang$applyTo = (function (arglist__6575){
var args = cljs.core.seq(arglist__6575);
return G__6573__delegate(args);
});
G__6573.cljs$core$IFn$_invoke$arity$variadic = G__6573__delegate;
return G__6573;
})()
;

return null;
});
