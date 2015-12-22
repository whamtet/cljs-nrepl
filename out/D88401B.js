goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__12979__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__12979 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12980__i = 0, G__12980__a = new Array(arguments.length -  0);
while (G__12980__i < G__12980__a.length) {G__12980__a[G__12980__i] = arguments[G__12980__i + 0]; ++G__12980__i;}
  args = new cljs.core.IndexedSeq(G__12980__a,0);
} 
return G__12979__delegate.call(this,args);};
G__12979.cljs$lang$maxFixedArity = 0;
G__12979.cljs$lang$applyTo = (function (arglist__12981){
var args = cljs.core.seq(arglist__12981);
return G__12979__delegate(args);
});
G__12979.cljs$core$IFn$_invoke$arity$variadic = G__12979__delegate;
return G__12979;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__12982__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__12982 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12983__i = 0, G__12983__a = new Array(arguments.length -  0);
while (G__12983__i < G__12983__a.length) {G__12983__a[G__12983__i] = arguments[G__12983__i + 0]; ++G__12983__i;}
  args = new cljs.core.IndexedSeq(G__12983__a,0);
} 
return G__12982__delegate.call(this,args);};
G__12982.cljs$lang$maxFixedArity = 0;
G__12982.cljs$lang$applyTo = (function (arglist__12984){
var args = cljs.core.seq(arglist__12984);
return G__12982__delegate(args);
});
G__12982.cljs$core$IFn$_invoke$arity$variadic = G__12982__delegate;
return G__12982;
})()
;

return null;
});
