// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('dogfort.middleware.routes');
goog.require('cljs.core');
goog.require('cljs.node');
goog.require('redlobster.promise');
goog.require('dogfort.util.response');
goog.require('dogfort.util.codec');
/**
 * Matches the URL to the matcher and (if they coincide) returns a set of
 * route bindings.
 */
dogfort.middleware.routes.route_match = (function dogfort$middleware$routes$route_match(url,matcher){
var G__10384 = matcher;
var vec__10385 = G__10384;
var m = cljs.core.nth.call(null,vec__10385,(0),null);
var matcher__$1 = cljs.core.nthnext.call(null,vec__10385,(1));
var url__$1 = url;
var res = cljs.core.PersistentArrayMap.EMPTY;
var G__10384__$1 = G__10384;
var url__$2 = url__$1;
var res__$1 = res;
while(true){
var vec__10386 = G__10384__$1;
var m__$1 = cljs.core.nth.call(null,vec__10386,(0),null);
var matcher__$2 = cljs.core.nthnext.call(null,vec__10386,(1));
var url__$3 = url__$2;
var res__$2 = res__$1;
if(cljs.core.empty_QMARK_.call(null,url__$3)){
if(cljs.core.empty_QMARK_.call(null,matcher__$2)){
return res__$2;
} else {
return null;
}
} else {
if(cljs.core._EQ_.call(null,"*",m__$1)){
return cljs.core.assoc.call(null,res__$2,new cljs.core.Keyword(null,"*","*",-1294732318),url__$3);
} else {
var r = cljs.core.re_find.call(null,/\/[^\/]*/,url__$3).substring((1));
var url__$4 = url__$3.substring((cljs.core.count.call(null,r) + (1)));
if((m__$1 instanceof cljs.core.Keyword)){
var G__10387 = matcher__$2;
var G__10388 = url__$4;
var G__10389 = cljs.core.assoc.call(null,res__$2,m__$1,dogfort.util.codec.url_decode.call(null,r));
G__10384__$1 = G__10387;
url__$2 = G__10388;
res__$1 = G__10389;
continue;
} else {
if(cljs.core._EQ_.call(null,m__$1,[cljs.core.str("/"),cljs.core.str(r)].join(''))){
var G__10390 = matcher__$2;
var G__10391 = url__$4;
var G__10392 = res__$2;
G__10384__$1 = G__10390;
url__$2 = G__10391;
res__$1 = G__10392;
continue;
} else {
return null;
}
}
}
}
break;
}
});
dogfort.middleware.routes.merge_params = (function dogfort$middleware$routes$merge_params(request,params){
return cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.merge.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$2(request,cljs.core.PersistentArrayMap.EMPTY),params));
});
dogfort.middleware.routes.eval_route = (function dogfort$middleware$routes$eval_route(request,method,matcher,handler){
if((cljs.core.not.call(null,method)) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request),method))){
var temp__4425__auto__ = dogfort.middleware.routes.route_match.call(null,new cljs.core.Keyword(null,"uri","uri",-774711847).cljs$core$IFn$_invoke$arity$1(request),matcher);
if(cljs.core.truth_(temp__4425__auto__)){
var matches = temp__4425__auto__;
return handler.call(null,dogfort.middleware.routes.merge_params.call(null,request,matches));
} else {
return null;
}
} else {
return null;
}
});
dogfort.middleware.routes.routing = (function dogfort$middleware$routes$routing(var_args){
var args__5208__auto__ = [];
var len__5201__auto___10396 = arguments.length;
var i__5202__auto___10397 = (0);
while(true){
if((i__5202__auto___10397 < len__5201__auto___10396)){
args__5208__auto__.push((arguments[i__5202__auto___10397]));

var G__10398 = (i__5202__auto___10397 + (1));
i__5202__auto___10397 = G__10398;
continue;
} else {
}
break;
}

var argseq__5209__auto__ = ((((1) < args__5208__auto__.length))?(new cljs.core.IndexedSeq(args__5208__auto__.slice((1)),(0))):null);
return dogfort.middleware.routes.routing.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5209__auto__);
});

dogfort.middleware.routes.routing.cljs$core$IFn$_invoke$arity$variadic = (function (request,handlers){
var response = (function (){var or__4143__auto__ = cljs.core.some.call(null,(function (p1__10393_SHARP_){
return p1__10393_SHARP_.call(null,request);
}),handlers);
if(cljs.core.truth_(or__4143__auto__)){
return or__4143__auto__;
} else {
return redlobster.promise.promise.call(null,dogfort.util.response.default_response.call(null,(404)));
}
})();
if(cljs.core.truth_(redlobster.promise.promise_QMARK_.call(null,response))){
return response;
} else {
if(cljs.core.map_QMARK_.call(null,response)){
return redlobster.promise.promise.call(null,response);
} else {
return redlobster.promise.promise.call(null,dogfort.util.response.response.call(null,(200),response));

}
}
});

dogfort.middleware.routes.routing.cljs$lang$maxFixedArity = (1);

dogfort.middleware.routes.routing.cljs$lang$applyTo = (function (seq10394){
var G__10395 = cljs.core.first.call(null,seq10394);
var seq10394__$1 = cljs.core.next.call(null,seq10394);
return dogfort.middleware.routes.routing.cljs$core$IFn$_invoke$arity$variadic(G__10395,seq10394__$1);
});
dogfort.middleware.routes.routes = (function dogfort$middleware$routes$routes(var_args){
var args__5208__auto__ = [];
var len__5201__auto___10401 = arguments.length;
var i__5202__auto___10402 = (0);
while(true){
if((i__5202__auto___10402 < len__5201__auto___10401)){
args__5208__auto__.push((arguments[i__5202__auto___10402]));

var G__10403 = (i__5202__auto___10402 + (1));
i__5202__auto___10402 = G__10403;
continue;
} else {
}
break;
}

var argseq__5209__auto__ = ((((0) < args__5208__auto__.length))?(new cljs.core.IndexedSeq(args__5208__auto__.slice((0)),(0))):null);
return dogfort.middleware.routes.routes.cljs$core$IFn$_invoke$arity$variadic(argseq__5209__auto__);
});

dogfort.middleware.routes.routes.cljs$core$IFn$_invoke$arity$variadic = (function (handlers){
return (function (p1__10399_SHARP_){
return cljs.core.apply.call(null,dogfort.middleware.routes.routing,p1__10399_SHARP_,handlers);
});
});

dogfort.middleware.routes.routes.cljs$lang$maxFixedArity = (0);

dogfort.middleware.routes.routes.cljs$lang$applyTo = (function (seq10400){
return dogfort.middleware.routes.routes.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10400));
});

//# sourceMappingURL=routes.js.map