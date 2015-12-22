goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__12642__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__12642 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12643__i = 0, G__12643__a = new Array(arguments.length -  0);
while (G__12643__i < G__12643__a.length) {G__12643__a[G__12643__i] = arguments[G__12643__i + 0]; ++G__12643__i;}
  args = new cljs.core.IndexedSeq(G__12643__a,0);
} 
return G__12642__delegate.call(this,args);};
G__12642.cljs$lang$maxFixedArity = 0;
G__12642.cljs$lang$applyTo = (function (arglist__12644){
var args = cljs.core.seq(arglist__12644);
return G__12642__delegate(args);
});
G__12642.cljs$core$IFn$_invoke$arity$variadic = G__12642__delegate;
return G__12642;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__12645__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__12645 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12646__i = 0, G__12646__a = new Array(arguments.length -  0);
while (G__12646__i < G__12646__a.length) {G__12646__a[G__12646__i] = arguments[G__12646__i + 0]; ++G__12646__i;}
  args = new cljs.core.IndexedSeq(G__12646__a,0);
} 
return G__12645__delegate.call(this,args);};
G__12645.cljs$lang$maxFixedArity = 0;
G__12645.cljs$lang$applyTo = (function (arglist__12647){
var args = cljs.core.seq(arglist__12647);
return G__12645__delegate(args);
});
G__12645.cljs$core$IFn$_invoke$arity$variadic = G__12645__delegate;
return G__12645;
})()
;

return null;
});
