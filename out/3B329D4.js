goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11672__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11672 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11673__i = 0, G__11673__a = new Array(arguments.length -  0);
while (G__11673__i < G__11673__a.length) {G__11673__a[G__11673__i] = arguments[G__11673__i + 0]; ++G__11673__i;}
  args = new cljs.core.IndexedSeq(G__11673__a,0);
} 
return G__11672__delegate.call(this,args);};
G__11672.cljs$lang$maxFixedArity = 0;
G__11672.cljs$lang$applyTo = (function (arglist__11674){
var args = cljs.core.seq(arglist__11674);
return G__11672__delegate(args);
});
G__11672.cljs$core$IFn$_invoke$arity$variadic = G__11672__delegate;
return G__11672;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11675__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11675 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11676__i = 0, G__11676__a = new Array(arguments.length -  0);
while (G__11676__i < G__11676__a.length) {G__11676__a[G__11676__i] = arguments[G__11676__i + 0]; ++G__11676__i;}
  args = new cljs.core.IndexedSeq(G__11676__a,0);
} 
return G__11675__delegate.call(this,args);};
G__11675.cljs$lang$maxFixedArity = 0;
G__11675.cljs$lang$applyTo = (function (arglist__11677){
var args = cljs.core.seq(arglist__11677);
return G__11675__delegate(args);
});
G__11675.cljs$core$IFn$_invoke$arity$variadic = G__11675__delegate;
return G__11675;
})()
;

return null;
});
