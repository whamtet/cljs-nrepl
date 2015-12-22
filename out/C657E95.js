goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11213__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11213 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11214__i = 0, G__11214__a = new Array(arguments.length -  0);
while (G__11214__i < G__11214__a.length) {G__11214__a[G__11214__i] = arguments[G__11214__i + 0]; ++G__11214__i;}
  args = new cljs.core.IndexedSeq(G__11214__a,0);
} 
return G__11213__delegate.call(this,args);};
G__11213.cljs$lang$maxFixedArity = 0;
G__11213.cljs$lang$applyTo = (function (arglist__11215){
var args = cljs.core.seq(arglist__11215);
return G__11213__delegate(args);
});
G__11213.cljs$core$IFn$_invoke$arity$variadic = G__11213__delegate;
return G__11213;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11216__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11216 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11217__i = 0, G__11217__a = new Array(arguments.length -  0);
while (G__11217__i < G__11217__a.length) {G__11217__a[G__11217__i] = arguments[G__11217__i + 0]; ++G__11217__i;}
  args = new cljs.core.IndexedSeq(G__11217__a,0);
} 
return G__11216__delegate.call(this,args);};
G__11216.cljs$lang$maxFixedArity = 0;
G__11216.cljs$lang$applyTo = (function (arglist__11218){
var args = cljs.core.seq(arglist__11218);
return G__11216__delegate(args);
});
G__11216.cljs$core$IFn$_invoke$arity$variadic = G__11216__delegate;
return G__11216;
})()
;

return null;
});
