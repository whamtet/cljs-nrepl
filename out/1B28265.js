goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11877__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11877 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11878__i = 0, G__11878__a = new Array(arguments.length -  0);
while (G__11878__i < G__11878__a.length) {G__11878__a[G__11878__i] = arguments[G__11878__i + 0]; ++G__11878__i;}
  args = new cljs.core.IndexedSeq(G__11878__a,0);
} 
return G__11877__delegate.call(this,args);};
G__11877.cljs$lang$maxFixedArity = 0;
G__11877.cljs$lang$applyTo = (function (arglist__11879){
var args = cljs.core.seq(arglist__11879);
return G__11877__delegate(args);
});
G__11877.cljs$core$IFn$_invoke$arity$variadic = G__11877__delegate;
return G__11877;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11880__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11880 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11881__i = 0, G__11881__a = new Array(arguments.length -  0);
while (G__11881__i < G__11881__a.length) {G__11881__a[G__11881__i] = arguments[G__11881__i + 0]; ++G__11881__i;}
  args = new cljs.core.IndexedSeq(G__11881__a,0);
} 
return G__11880__delegate.call(this,args);};
G__11880.cljs$lang$maxFixedArity = 0;
G__11880.cljs$lang$applyTo = (function (arglist__11882){
var args = cljs.core.seq(arglist__11882);
return G__11880__delegate(args);
});
G__11880.cljs$core$IFn$_invoke$arity$variadic = G__11880__delegate;
return G__11880;
})()
;

return null;
});
