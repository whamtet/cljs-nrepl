goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__12241__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__12241 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12242__i = 0, G__12242__a = new Array(arguments.length -  0);
while (G__12242__i < G__12242__a.length) {G__12242__a[G__12242__i] = arguments[G__12242__i + 0]; ++G__12242__i;}
  args = new cljs.core.IndexedSeq(G__12242__a,0);
} 
return G__12241__delegate.call(this,args);};
G__12241.cljs$lang$maxFixedArity = 0;
G__12241.cljs$lang$applyTo = (function (arglist__12243){
var args = cljs.core.seq(arglist__12243);
return G__12241__delegate(args);
});
G__12241.cljs$core$IFn$_invoke$arity$variadic = G__12241__delegate;
return G__12241;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__12244__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__12244 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12245__i = 0, G__12245__a = new Array(arguments.length -  0);
while (G__12245__i < G__12245__a.length) {G__12245__a[G__12245__i] = arguments[G__12245__i + 0]; ++G__12245__i;}
  args = new cljs.core.IndexedSeq(G__12245__a,0);
} 
return G__12244__delegate.call(this,args);};
G__12244.cljs$lang$maxFixedArity = 0;
G__12244.cljs$lang$applyTo = (function (arglist__12246){
var args = cljs.core.seq(arglist__12246);
return G__12244__delegate(args);
});
G__12244.cljs$core$IFn$_invoke$arity$variadic = G__12244__delegate;
return G__12244;
})()
;

return null;
});
