goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14779__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14779 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14780__i = 0, G__14780__a = new Array(arguments.length -  0);
while (G__14780__i < G__14780__a.length) {G__14780__a[G__14780__i] = arguments[G__14780__i + 0]; ++G__14780__i;}
  args = new cljs.core.IndexedSeq(G__14780__a,0);
} 
return G__14779__delegate.call(this,args);};
G__14779.cljs$lang$maxFixedArity = 0;
G__14779.cljs$lang$applyTo = (function (arglist__14781){
var args = cljs.core.seq(arglist__14781);
return G__14779__delegate(args);
});
G__14779.cljs$core$IFn$_invoke$arity$variadic = G__14779__delegate;
return G__14779;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14782__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14782 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14783__i = 0, G__14783__a = new Array(arguments.length -  0);
while (G__14783__i < G__14783__a.length) {G__14783__a[G__14783__i] = arguments[G__14783__i + 0]; ++G__14783__i;}
  args = new cljs.core.IndexedSeq(G__14783__a,0);
} 
return G__14782__delegate.call(this,args);};
G__14782.cljs$lang$maxFixedArity = 0;
G__14782.cljs$lang$applyTo = (function (arglist__14784){
var args = cljs.core.seq(arglist__14784);
return G__14782__delegate(args);
});
G__14782.cljs$core$IFn$_invoke$arity$variadic = G__14782__delegate;
return G__14782;
})()
;

return null;
});
