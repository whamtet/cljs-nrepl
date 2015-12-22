goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__12383__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__12383 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12384__i = 0, G__12384__a = new Array(arguments.length -  0);
while (G__12384__i < G__12384__a.length) {G__12384__a[G__12384__i] = arguments[G__12384__i + 0]; ++G__12384__i;}
  args = new cljs.core.IndexedSeq(G__12384__a,0);
} 
return G__12383__delegate.call(this,args);};
G__12383.cljs$lang$maxFixedArity = 0;
G__12383.cljs$lang$applyTo = (function (arglist__12385){
var args = cljs.core.seq(arglist__12385);
return G__12383__delegate(args);
});
G__12383.cljs$core$IFn$_invoke$arity$variadic = G__12383__delegate;
return G__12383;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__12386__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__12386 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12387__i = 0, G__12387__a = new Array(arguments.length -  0);
while (G__12387__i < G__12387__a.length) {G__12387__a[G__12387__i] = arguments[G__12387__i + 0]; ++G__12387__i;}
  args = new cljs.core.IndexedSeq(G__12387__a,0);
} 
return G__12386__delegate.call(this,args);};
G__12386.cljs$lang$maxFixedArity = 0;
G__12386.cljs$lang$applyTo = (function (arglist__12388){
var args = cljs.core.seq(arglist__12388);
return G__12386__delegate(args);
});
G__12386.cljs$core$IFn$_invoke$arity$variadic = G__12386__delegate;
return G__12386;
})()
;

return null;
});
