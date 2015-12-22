goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10653__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10653 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10654__i = 0, G__10654__a = new Array(arguments.length -  0);
while (G__10654__i < G__10654__a.length) {G__10654__a[G__10654__i] = arguments[G__10654__i + 0]; ++G__10654__i;}
  args = new cljs.core.IndexedSeq(G__10654__a,0);
} 
return G__10653__delegate.call(this,args);};
G__10653.cljs$lang$maxFixedArity = 0;
G__10653.cljs$lang$applyTo = (function (arglist__10655){
var args = cljs.core.seq(arglist__10655);
return G__10653__delegate(args);
});
G__10653.cljs$core$IFn$_invoke$arity$variadic = G__10653__delegate;
return G__10653;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10656__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10656 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10657__i = 0, G__10657__a = new Array(arguments.length -  0);
while (G__10657__i < G__10657__a.length) {G__10657__a[G__10657__i] = arguments[G__10657__i + 0]; ++G__10657__i;}
  args = new cljs.core.IndexedSeq(G__10657__a,0);
} 
return G__10656__delegate.call(this,args);};
G__10656.cljs$lang$maxFixedArity = 0;
G__10656.cljs$lang$applyTo = (function (arglist__10658){
var args = cljs.core.seq(arglist__10658);
return G__10656__delegate(args);
});
G__10656.cljs$core$IFn$_invoke$arity$variadic = G__10656__delegate;
return G__10656;
})()
;

return null;
});
