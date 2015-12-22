goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__12420__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__12420 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12421__i = 0, G__12421__a = new Array(arguments.length -  0);
while (G__12421__i < G__12421__a.length) {G__12421__a[G__12421__i] = arguments[G__12421__i + 0]; ++G__12421__i;}
  args = new cljs.core.IndexedSeq(G__12421__a,0);
} 
return G__12420__delegate.call(this,args);};
G__12420.cljs$lang$maxFixedArity = 0;
G__12420.cljs$lang$applyTo = (function (arglist__12422){
var args = cljs.core.seq(arglist__12422);
return G__12420__delegate(args);
});
G__12420.cljs$core$IFn$_invoke$arity$variadic = G__12420__delegate;
return G__12420;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__12423__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__12423 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12424__i = 0, G__12424__a = new Array(arguments.length -  0);
while (G__12424__i < G__12424__a.length) {G__12424__a[G__12424__i] = arguments[G__12424__i + 0]; ++G__12424__i;}
  args = new cljs.core.IndexedSeq(G__12424__a,0);
} 
return G__12423__delegate.call(this,args);};
G__12423.cljs$lang$maxFixedArity = 0;
G__12423.cljs$lang$applyTo = (function (arglist__12425){
var args = cljs.core.seq(arglist__12425);
return G__12423__delegate(args);
});
G__12423.cljs$core$IFn$_invoke$arity$variadic = G__12423__delegate;
return G__12423;
})()
;

return null;
});
