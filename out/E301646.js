goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__13563__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__13563 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13564__i = 0, G__13564__a = new Array(arguments.length -  0);
while (G__13564__i < G__13564__a.length) {G__13564__a[G__13564__i] = arguments[G__13564__i + 0]; ++G__13564__i;}
  args = new cljs.core.IndexedSeq(G__13564__a,0);
} 
return G__13563__delegate.call(this,args);};
G__13563.cljs$lang$maxFixedArity = 0;
G__13563.cljs$lang$applyTo = (function (arglist__13565){
var args = cljs.core.seq(arglist__13565);
return G__13563__delegate(args);
});
G__13563.cljs$core$IFn$_invoke$arity$variadic = G__13563__delegate;
return G__13563;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__13566__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__13566 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13567__i = 0, G__13567__a = new Array(arguments.length -  0);
while (G__13567__i < G__13567__a.length) {G__13567__a[G__13567__i] = arguments[G__13567__i + 0]; ++G__13567__i;}
  args = new cljs.core.IndexedSeq(G__13567__a,0);
} 
return G__13566__delegate.call(this,args);};
G__13566.cljs$lang$maxFixedArity = 0;
G__13566.cljs$lang$applyTo = (function (arglist__13568){
var args = cljs.core.seq(arglist__13568);
return G__13566__delegate(args);
});
G__13566.cljs$core$IFn$_invoke$arity$variadic = G__13566__delegate;
return G__13566;
})()
;

return null;
});
