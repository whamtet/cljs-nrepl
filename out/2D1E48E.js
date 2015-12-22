goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__13522__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__13522 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13523__i = 0, G__13523__a = new Array(arguments.length -  0);
while (G__13523__i < G__13523__a.length) {G__13523__a[G__13523__i] = arguments[G__13523__i + 0]; ++G__13523__i;}
  args = new cljs.core.IndexedSeq(G__13523__a,0);
} 
return G__13522__delegate.call(this,args);};
G__13522.cljs$lang$maxFixedArity = 0;
G__13522.cljs$lang$applyTo = (function (arglist__13524){
var args = cljs.core.seq(arglist__13524);
return G__13522__delegate(args);
});
G__13522.cljs$core$IFn$_invoke$arity$variadic = G__13522__delegate;
return G__13522;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__13525__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__13525 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13526__i = 0, G__13526__a = new Array(arguments.length -  0);
while (G__13526__i < G__13526__a.length) {G__13526__a[G__13526__i] = arguments[G__13526__i + 0]; ++G__13526__i;}
  args = new cljs.core.IndexedSeq(G__13526__a,0);
} 
return G__13525__delegate.call(this,args);};
G__13525.cljs$lang$maxFixedArity = 0;
G__13525.cljs$lang$applyTo = (function (arglist__13527){
var args = cljs.core.seq(arglist__13527);
return G__13525__delegate(args);
});
G__13525.cljs$core$IFn$_invoke$arity$variadic = G__13525__delegate;
return G__13525;
})()
;

return null;
});
