goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__13945__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__13945 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13946__i = 0, G__13946__a = new Array(arguments.length -  0);
while (G__13946__i < G__13946__a.length) {G__13946__a[G__13946__i] = arguments[G__13946__i + 0]; ++G__13946__i;}
  args = new cljs.core.IndexedSeq(G__13946__a,0);
} 
return G__13945__delegate.call(this,args);};
G__13945.cljs$lang$maxFixedArity = 0;
G__13945.cljs$lang$applyTo = (function (arglist__13947){
var args = cljs.core.seq(arglist__13947);
return G__13945__delegate(args);
});
G__13945.cljs$core$IFn$_invoke$arity$variadic = G__13945__delegate;
return G__13945;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__13948__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__13948 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13949__i = 0, G__13949__a = new Array(arguments.length -  0);
while (G__13949__i < G__13949__a.length) {G__13949__a[G__13949__i] = arguments[G__13949__i + 0]; ++G__13949__i;}
  args = new cljs.core.IndexedSeq(G__13949__a,0);
} 
return G__13948__delegate.call(this,args);};
G__13948.cljs$lang$maxFixedArity = 0;
G__13948.cljs$lang$applyTo = (function (arglist__13950){
var args = cljs.core.seq(arglist__13950);
return G__13948__delegate(args);
});
G__13948.cljs$core$IFn$_invoke$arity$variadic = G__13948__delegate;
return G__13948;
})()
;

return null;
});
