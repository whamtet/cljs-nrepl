goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__5890__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__5890 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5891__i = 0, G__5891__a = new Array(arguments.length -  0);
while (G__5891__i < G__5891__a.length) {G__5891__a[G__5891__i] = arguments[G__5891__i + 0]; ++G__5891__i;}
  args = new cljs.core.IndexedSeq(G__5891__a,0);
} 
return G__5890__delegate.call(this,args);};
G__5890.cljs$lang$maxFixedArity = 0;
G__5890.cljs$lang$applyTo = (function (arglist__5892){
var args = cljs.core.seq(arglist__5892);
return G__5890__delegate(args);
});
G__5890.cljs$core$IFn$_invoke$arity$variadic = G__5890__delegate;
return G__5890;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__5893__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__5893 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5894__i = 0, G__5894__a = new Array(arguments.length -  0);
while (G__5894__i < G__5894__a.length) {G__5894__a[G__5894__i] = arguments[G__5894__i + 0]; ++G__5894__i;}
  args = new cljs.core.IndexedSeq(G__5894__a,0);
} 
return G__5893__delegate.call(this,args);};
G__5893.cljs$lang$maxFixedArity = 0;
G__5893.cljs$lang$applyTo = (function (arglist__5895){
var args = cljs.core.seq(arglist__5895);
return G__5893__delegate(args);
});
G__5893.cljs$core$IFn$_invoke$arity$variadic = G__5893__delegate;
return G__5893;
})()
;

return null;
});
