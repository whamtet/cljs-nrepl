// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('cljs.node');
goog.require('cljs.core');
goog.require('cljs.yunoincore');
cljs.node.log = (function cljs$node$log(var_args){
var args__5208__auto__ = [];
var len__5201__auto___8289 = arguments.length;
var i__5202__auto___8290 = (0);
while(true){
if((i__5202__auto___8290 < len__5201__auto___8289)){
args__5208__auto__.push((arguments[i__5202__auto___8290]));

var G__8291 = (i__5202__auto___8290 + (1));
i__5202__auto___8290 = G__8291;
continue;
} else {
}
break;
}

var argseq__5209__auto__ = ((((0) < args__5208__auto__.length))?(new cljs.core.IndexedSeq(args__5208__auto__.slice((0)),(0))):null);
return cljs.node.log.cljs$core$IFn$_invoke$arity$variadic(argseq__5209__auto__);
});

cljs.node.log.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,console.log,cljs.core.map.call(null,cljs.core.str,args));
});

cljs.node.log.cljs$lang$maxFixedArity = (0);

cljs.node.log.cljs$lang$applyTo = (function (seq8288){
return cljs.node.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8288));
});

//# sourceMappingURL=node.js.map