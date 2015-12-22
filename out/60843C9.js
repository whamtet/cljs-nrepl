goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__12009__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__12009 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12010__i = 0, G__12010__a = new Array(arguments.length -  0);
while (G__12010__i < G__12010__a.length) {G__12010__a[G__12010__i] = arguments[G__12010__i + 0]; ++G__12010__i;}
  args = new cljs.core.IndexedSeq(G__12010__a,0);
} 
return G__12009__delegate.call(this,args);};
G__12009.cljs$lang$maxFixedArity = 0;
G__12009.cljs$lang$applyTo = (function (arglist__12011){
var args = cljs.core.seq(arglist__12011);
return G__12009__delegate(args);
});
G__12009.cljs$core$IFn$_invoke$arity$variadic = G__12009__delegate;
return G__12009;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__12012__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__12012 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12013__i = 0, G__12013__a = new Array(arguments.length -  0);
while (G__12013__i < G__12013__a.length) {G__12013__a[G__12013__i] = arguments[G__12013__i + 0]; ++G__12013__i;}
  args = new cljs.core.IndexedSeq(G__12013__a,0);
} 
return G__12012__delegate.call(this,args);};
G__12012.cljs$lang$maxFixedArity = 0;
G__12012.cljs$lang$applyTo = (function (arglist__12014){
var args = cljs.core.seq(arglist__12014);
return G__12012__delegate(args);
});
G__12012.cljs$core$IFn$_invoke$arity$variadic = G__12012__delegate;
return G__12012;
})()
;

return null;
});
