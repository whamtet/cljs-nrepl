goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11909__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11909 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11910__i = 0, G__11910__a = new Array(arguments.length -  0);
while (G__11910__i < G__11910__a.length) {G__11910__a[G__11910__i] = arguments[G__11910__i + 0]; ++G__11910__i;}
  args = new cljs.core.IndexedSeq(G__11910__a,0);
} 
return G__11909__delegate.call(this,args);};
G__11909.cljs$lang$maxFixedArity = 0;
G__11909.cljs$lang$applyTo = (function (arglist__11911){
var args = cljs.core.seq(arglist__11911);
return G__11909__delegate(args);
});
G__11909.cljs$core$IFn$_invoke$arity$variadic = G__11909__delegate;
return G__11909;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11912__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11912 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11913__i = 0, G__11913__a = new Array(arguments.length -  0);
while (G__11913__i < G__11913__a.length) {G__11913__a[G__11913__i] = arguments[G__11913__i + 0]; ++G__11913__i;}
  args = new cljs.core.IndexedSeq(G__11913__a,0);
} 
return G__11912__delegate.call(this,args);};
G__11912.cljs$lang$maxFixedArity = 0;
G__11912.cljs$lang$applyTo = (function (arglist__11914){
var args = cljs.core.seq(arglist__11914);
return G__11912__delegate(args);
});
G__11912.cljs$core$IFn$_invoke$arity$variadic = G__11912__delegate;
return G__11912;
})()
;

return null;
});
