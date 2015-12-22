goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__12759__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__12759 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12760__i = 0, G__12760__a = new Array(arguments.length -  0);
while (G__12760__i < G__12760__a.length) {G__12760__a[G__12760__i] = arguments[G__12760__i + 0]; ++G__12760__i;}
  args = new cljs.core.IndexedSeq(G__12760__a,0);
} 
return G__12759__delegate.call(this,args);};
G__12759.cljs$lang$maxFixedArity = 0;
G__12759.cljs$lang$applyTo = (function (arglist__12761){
var args = cljs.core.seq(arglist__12761);
return G__12759__delegate(args);
});
G__12759.cljs$core$IFn$_invoke$arity$variadic = G__12759__delegate;
return G__12759;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__12762__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__12762 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12763__i = 0, G__12763__a = new Array(arguments.length -  0);
while (G__12763__i < G__12763__a.length) {G__12763__a[G__12763__i] = arguments[G__12763__i + 0]; ++G__12763__i;}
  args = new cljs.core.IndexedSeq(G__12763__a,0);
} 
return G__12762__delegate.call(this,args);};
G__12762.cljs$lang$maxFixedArity = 0;
G__12762.cljs$lang$applyTo = (function (arglist__12764){
var args = cljs.core.seq(arglist__12764);
return G__12762__delegate(args);
});
G__12762.cljs$core$IFn$_invoke$arity$variadic = G__12762__delegate;
return G__12762;
})()
;

return null;
});
