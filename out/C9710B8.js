goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__13719__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__13719 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13720__i = 0, G__13720__a = new Array(arguments.length -  0);
while (G__13720__i < G__13720__a.length) {G__13720__a[G__13720__i] = arguments[G__13720__i + 0]; ++G__13720__i;}
  args = new cljs.core.IndexedSeq(G__13720__a,0);
} 
return G__13719__delegate.call(this,args);};
G__13719.cljs$lang$maxFixedArity = 0;
G__13719.cljs$lang$applyTo = (function (arglist__13721){
var args = cljs.core.seq(arglist__13721);
return G__13719__delegate(args);
});
G__13719.cljs$core$IFn$_invoke$arity$variadic = G__13719__delegate;
return G__13719;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__13722__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__13722 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13723__i = 0, G__13723__a = new Array(arguments.length -  0);
while (G__13723__i < G__13723__a.length) {G__13723__a[G__13723__i] = arguments[G__13723__i + 0]; ++G__13723__i;}
  args = new cljs.core.IndexedSeq(G__13723__a,0);
} 
return G__13722__delegate.call(this,args);};
G__13722.cljs$lang$maxFixedArity = 0;
G__13722.cljs$lang$applyTo = (function (arglist__13724){
var args = cljs.core.seq(arglist__13724);
return G__13722__delegate(args);
});
G__13722.cljs$core$IFn$_invoke$arity$variadic = G__13722__delegate;
return G__13722;
})()
;

return null;
});
