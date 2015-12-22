goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__17199__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__17199 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17200__i = 0, G__17200__a = new Array(arguments.length -  0);
while (G__17200__i < G__17200__a.length) {G__17200__a[G__17200__i] = arguments[G__17200__i + 0]; ++G__17200__i;}
  args = new cljs.core.IndexedSeq(G__17200__a,0);
} 
return G__17199__delegate.call(this,args);};
G__17199.cljs$lang$maxFixedArity = 0;
G__17199.cljs$lang$applyTo = (function (arglist__17201){
var args = cljs.core.seq(arglist__17201);
return G__17199__delegate(args);
});
G__17199.cljs$core$IFn$_invoke$arity$variadic = G__17199__delegate;
return G__17199;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__17202__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__17202 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17203__i = 0, G__17203__a = new Array(arguments.length -  0);
while (G__17203__i < G__17203__a.length) {G__17203__a[G__17203__i] = arguments[G__17203__i + 0]; ++G__17203__i;}
  args = new cljs.core.IndexedSeq(G__17203__a,0);
} 
return G__17202__delegate.call(this,args);};
G__17202.cljs$lang$maxFixedArity = 0;
G__17202.cljs$lang$applyTo = (function (arglist__17204){
var args = cljs.core.seq(arglist__17204);
return G__17202__delegate(args);
});
G__17202.cljs$core$IFn$_invoke$arity$variadic = G__17202__delegate;
return G__17202;
})()
;

return null;
});
