goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__12273__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__12273 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12274__i = 0, G__12274__a = new Array(arguments.length -  0);
while (G__12274__i < G__12274__a.length) {G__12274__a[G__12274__i] = arguments[G__12274__i + 0]; ++G__12274__i;}
  args = new cljs.core.IndexedSeq(G__12274__a,0);
} 
return G__12273__delegate.call(this,args);};
G__12273.cljs$lang$maxFixedArity = 0;
G__12273.cljs$lang$applyTo = (function (arglist__12275){
var args = cljs.core.seq(arglist__12275);
return G__12273__delegate(args);
});
G__12273.cljs$core$IFn$_invoke$arity$variadic = G__12273__delegate;
return G__12273;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__12276__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__12276 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12277__i = 0, G__12277__a = new Array(arguments.length -  0);
while (G__12277__i < G__12277__a.length) {G__12277__a[G__12277__i] = arguments[G__12277__i + 0]; ++G__12277__i;}
  args = new cljs.core.IndexedSeq(G__12277__a,0);
} 
return G__12276__delegate.call(this,args);};
G__12276.cljs$lang$maxFixedArity = 0;
G__12276.cljs$lang$applyTo = (function (arglist__12278){
var args = cljs.core.seq(arglist__12278);
return G__12276__delegate(args);
});
G__12276.cljs$core$IFn$_invoke$arity$variadic = G__12276__delegate;
return G__12276;
})()
;

return null;
});
