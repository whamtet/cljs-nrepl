goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__6908__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__6908 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6909__i = 0, G__6909__a = new Array(arguments.length -  0);
while (G__6909__i < G__6909__a.length) {G__6909__a[G__6909__i] = arguments[G__6909__i + 0]; ++G__6909__i;}
  args = new cljs.core.IndexedSeq(G__6909__a,0);
} 
return G__6908__delegate.call(this,args);};
G__6908.cljs$lang$maxFixedArity = 0;
G__6908.cljs$lang$applyTo = (function (arglist__6910){
var args = cljs.core.seq(arglist__6910);
return G__6908__delegate(args);
});
G__6908.cljs$core$IFn$_invoke$arity$variadic = G__6908__delegate;
return G__6908;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__6911__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__6911 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6912__i = 0, G__6912__a = new Array(arguments.length -  0);
while (G__6912__i < G__6912__a.length) {G__6912__a[G__6912__i] = arguments[G__6912__i + 0]; ++G__6912__i;}
  args = new cljs.core.IndexedSeq(G__6912__a,0);
} 
return G__6911__delegate.call(this,args);};
G__6911.cljs$lang$maxFixedArity = 0;
G__6911.cljs$lang$applyTo = (function (arglist__6913){
var args = cljs.core.seq(arglist__6913);
return G__6911__delegate(args);
});
G__6911.cljs$core$IFn$_invoke$arity$variadic = G__6911__delegate;
return G__6911;
})()
;

return null;
});
