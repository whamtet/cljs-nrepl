goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__12605__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__12605 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12606__i = 0, G__12606__a = new Array(arguments.length -  0);
while (G__12606__i < G__12606__a.length) {G__12606__a[G__12606__i] = arguments[G__12606__i + 0]; ++G__12606__i;}
  args = new cljs.core.IndexedSeq(G__12606__a,0);
} 
return G__12605__delegate.call(this,args);};
G__12605.cljs$lang$maxFixedArity = 0;
G__12605.cljs$lang$applyTo = (function (arglist__12607){
var args = cljs.core.seq(arglist__12607);
return G__12605__delegate(args);
});
G__12605.cljs$core$IFn$_invoke$arity$variadic = G__12605__delegate;
return G__12605;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__12608__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__12608 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12609__i = 0, G__12609__a = new Array(arguments.length -  0);
while (G__12609__i < G__12609__a.length) {G__12609__a[G__12609__i] = arguments[G__12609__i + 0]; ++G__12609__i;}
  args = new cljs.core.IndexedSeq(G__12609__a,0);
} 
return G__12608__delegate.call(this,args);};
G__12608.cljs$lang$maxFixedArity = 0;
G__12608.cljs$lang$applyTo = (function (arglist__12610){
var args = cljs.core.seq(arglist__12610);
return G__12608__delegate(args);
});
G__12608.cljs$core$IFn$_invoke$arity$variadic = G__12608__delegate;
return G__12608;
})()
;

return null;
});
