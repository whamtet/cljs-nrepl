goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__13141__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__13141 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13142__i = 0, G__13142__a = new Array(arguments.length -  0);
while (G__13142__i < G__13142__a.length) {G__13142__a[G__13142__i] = arguments[G__13142__i + 0]; ++G__13142__i;}
  args = new cljs.core.IndexedSeq(G__13142__a,0);
} 
return G__13141__delegate.call(this,args);};
G__13141.cljs$lang$maxFixedArity = 0;
G__13141.cljs$lang$applyTo = (function (arglist__13143){
var args = cljs.core.seq(arglist__13143);
return G__13141__delegate(args);
});
G__13141.cljs$core$IFn$_invoke$arity$variadic = G__13141__delegate;
return G__13141;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__13144__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__13144 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13145__i = 0, G__13145__a = new Array(arguments.length -  0);
while (G__13145__i < G__13145__a.length) {G__13145__a[G__13145__i] = arguments[G__13145__i + 0]; ++G__13145__i;}
  args = new cljs.core.IndexedSeq(G__13145__a,0);
} 
return G__13144__delegate.call(this,args);};
G__13144.cljs$lang$maxFixedArity = 0;
G__13144.cljs$lang$applyTo = (function (arglist__13146){
var args = cljs.core.seq(arglist__13146);
return G__13144__delegate(args);
});
G__13144.cljs$core$IFn$_invoke$arity$variadic = G__13144__delegate;
return G__13144;
})()
;

return null;
});
