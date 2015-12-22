goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__12046__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__12046 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12047__i = 0, G__12047__a = new Array(arguments.length -  0);
while (G__12047__i < G__12047__a.length) {G__12047__a[G__12047__i] = arguments[G__12047__i + 0]; ++G__12047__i;}
  args = new cljs.core.IndexedSeq(G__12047__a,0);
} 
return G__12046__delegate.call(this,args);};
G__12046.cljs$lang$maxFixedArity = 0;
G__12046.cljs$lang$applyTo = (function (arglist__12048){
var args = cljs.core.seq(arglist__12048);
return G__12046__delegate(args);
});
G__12046.cljs$core$IFn$_invoke$arity$variadic = G__12046__delegate;
return G__12046;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__12049__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__12049 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12050__i = 0, G__12050__a = new Array(arguments.length -  0);
while (G__12050__i < G__12050__a.length) {G__12050__a[G__12050__i] = arguments[G__12050__i + 0]; ++G__12050__i;}
  args = new cljs.core.IndexedSeq(G__12050__a,0);
} 
return G__12049__delegate.call(this,args);};
G__12049.cljs$lang$maxFixedArity = 0;
G__12049.cljs$lang$applyTo = (function (arglist__12051){
var args = cljs.core.seq(arglist__12051);
return G__12049__delegate(args);
});
G__12049.cljs$core$IFn$_invoke$arity$variadic = G__12049__delegate;
return G__12049;
})()
;

return null;
});
