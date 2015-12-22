goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14668__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14668 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14669__i = 0, G__14669__a = new Array(arguments.length -  0);
while (G__14669__i < G__14669__a.length) {G__14669__a[G__14669__i] = arguments[G__14669__i + 0]; ++G__14669__i;}
  args = new cljs.core.IndexedSeq(G__14669__a,0);
} 
return G__14668__delegate.call(this,args);};
G__14668.cljs$lang$maxFixedArity = 0;
G__14668.cljs$lang$applyTo = (function (arglist__14670){
var args = cljs.core.seq(arglist__14670);
return G__14668__delegate(args);
});
G__14668.cljs$core$IFn$_invoke$arity$variadic = G__14668__delegate;
return G__14668;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14671__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14671 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14672__i = 0, G__14672__a = new Array(arguments.length -  0);
while (G__14672__i < G__14672__a.length) {G__14672__a[G__14672__i] = arguments[G__14672__i + 0]; ++G__14672__i;}
  args = new cljs.core.IndexedSeq(G__14672__a,0);
} 
return G__14671__delegate.call(this,args);};
G__14671.cljs$lang$maxFixedArity = 0;
G__14671.cljs$lang$applyTo = (function (arglist__14673){
var args = cljs.core.seq(arglist__14673);
return G__14671__delegate(args);
});
G__14671.cljs$core$IFn$_invoke$arity$variadic = G__14671__delegate;
return G__14671;
})()
;

return null;
});
