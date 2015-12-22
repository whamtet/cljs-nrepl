// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('dogfort.middleware.params');
goog.require('cljs.core');
goog.require('dogfort.util.codec');
goog.require('dogfort.util.request');
goog.require('redlobster.promise');
dogfort.middleware.params.parse_params = (function dogfort$middleware$params$parse_params(params,encoding){
var params__$1 = dogfort.util.codec.form_decode.call(null,params,encoding);
if(cljs.core.map_QMARK_.call(null,params__$1)){
return params__$1;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
/**
 * Parse and assoc parameters from the query string with the request.
 */
dogfort.middleware.params.assoc_query_params = (function dogfort$middleware$params$assoc_query_params(request,encoding){
return cljs.core.merge_with.call(null,cljs.core.merge,request,(function (){var temp__4423__auto__ = new cljs.core.Keyword(null,"query-string","query-string",-1018845061).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4423__auto__)){
var query_string = temp__4423__auto__;
var params = dogfort.middleware.params.parse_params.call(null,query_string,encoding);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-params","query-params",900640534),params,new cljs.core.Keyword(null,"params","params",710516235),params], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-params","query-params",900640534),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY], null);
}
})());
});
dogfort.middleware.params.slurp = (function dogfort$middleware$params$slurp(body){
var promise__5377__auto__ = redlobster.promise.promise.call(null);
var realise__5378__auto__ = ((function (promise__5377__auto__){
return (function (promise__5377__auto____$1,value__5379__auto__){
return redlobster.promise.realise.call(null,promise__5377__auto____$1,value__5379__auto__);
});})(promise__5377__auto__))
;
var realise_error__5380__auto__ = ((function (promise__5377__auto__,realise__5378__auto__){
return (function (promise__5377__auto____$1,value__5379__auto__){
return redlobster.promise.realise_error.call(null,promise__5377__auto____$1,value__5379__auto__);
});})(promise__5377__auto__,realise__5378__auto__))
;
var realise = cljs.core.partial.call(null,realise__5378__auto__,promise__5377__auto__);
var realise_error = cljs.core.partial.call(null,realise_error__5380__auto__,promise__5377__auto__);
var sb_14958 = (new Array());
body.on("data",((function (sb_14958,promise__5377__auto__,realise__5378__auto__,realise_error__5380__auto__,realise,realise_error){
return (function (p1__14957_SHARP_){
return sb_14958.push(p1__14957_SHARP_);
});})(sb_14958,promise__5377__auto__,realise__5378__auto__,realise_error__5380__auto__,realise,realise_error))
);

body.on("end",((function (sb_14958,promise__5377__auto__,realise__5378__auto__,realise_error__5380__auto__,realise,realise_error){
return (function (){
return realise.call(null,sb_14958.join(""));
});})(sb_14958,promise__5377__auto__,realise__5378__auto__,realise_error__5380__auto__,realise,realise_error))
);

return promise__5377__auto__;
});
/**
 * Parse and assoc parameters from the request body with the request.
 */
dogfort.middleware.params.assoc_form_params = (function dogfort$middleware$params$assoc_form_params(handler,request,encoding){
var temp__4423__auto__ = (function (){var and__4131__auto__ = dogfort.util.request.urlencoded_form_QMARK_.call(null,request);
if(cljs.core.truth_(and__4131__auto__)){
return new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(request);
} else {
return and__4131__auto__;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var body = temp__4423__auto__;
var body__$1 = dogfort.middleware.params.slurp.call(null,body);
return redlobster.promise.defer_until_realised.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [body__$1], null),((function (body__$1,body,temp__4423__auto__){
return (function (){
var params = dogfort.middleware.params.parse_params.call(null,cljs.core.deref.call(null,body__$1),encoding);
var request__$1 = cljs.core.merge_with.call(null,cljs.core.merge,request,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"form-params","form-params",1884296467),params,new cljs.core.Keyword(null,"params","params",710516235),params], null));
var response = handler.call(null,request__$1);
return redlobster.promise.defer_until_realised.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [response], null),((function (response,params,request__$1,body__$1,body,temp__4423__auto__){
return (function (){
return cljs.core.deref.call(null,response);
});})(response,params,request__$1,body__$1,body,temp__4423__auto__))
);
});})(body__$1,body,temp__4423__auto__))
);
} else {
return handler.call(null,cljs.core.merge_with.call(null,cljs.core.merge,request,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"form-params","form-params",1884296467),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY], null)));
}
});
/**
 * Adds parameters from the query string and the request body to the request
 *   map. See: wrap-params.
 */
dogfort.middleware.params.params_request = (function dogfort$middleware$params$params_request(var_args){
var args__5208__auto__ = [];
var len__5201__auto___14964 = arguments.length;
var i__5202__auto___14965 = (0);
while(true){
if((i__5202__auto___14965 < len__5201__auto___14964)){
args__5208__auto__.push((arguments[i__5202__auto___14965]));

var G__14966 = (i__5202__auto___14965 + (1));
i__5202__auto___14965 = G__14966;
continue;
} else {
}
break;
}

var argseq__5209__auto__ = ((((2) < args__5208__auto__.length))?(new cljs.core.IndexedSeq(args__5208__auto__.slice((2)),(0))):null);
return dogfort.middleware.params.params_request.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5209__auto__);
});

dogfort.middleware.params.params_request.cljs$core$IFn$_invoke$arity$variadic = (function (handler,request,p__14962){
var vec__14963 = p__14962;
var opts = cljs.core.nth.call(null,vec__14963,(0),null);
var encoding = (function (){var or__4143__auto__ = new cljs.core.Keyword(null,"encoding","encoding",1728578272).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4143__auto__)){
return or__4143__auto__;
} else {
var or__4143__auto____$1 = dogfort.util.request.character_encoding.call(null,request);
if(cljs.core.truth_(or__4143__auto____$1)){
return or__4143__auto____$1;
} else {
return "UTF-8";
}
}
})();
var request__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"query-params","query-params",900640534).cljs$core$IFn$_invoke$arity$1(request))?request:dogfort.middleware.params.assoc_query_params.call(null,request,encoding));
if(cljs.core.truth_(new cljs.core.Keyword(null,"form-params","form-params",1884296467).cljs$core$IFn$_invoke$arity$1(request__$1))){
return handler.call(null,request__$1);
} else {
return dogfort.middleware.params.assoc_form_params.call(null,handler,request__$1,encoding);
}
});

dogfort.middleware.params.params_request.cljs$lang$maxFixedArity = (2);

dogfort.middleware.params.params_request.cljs$lang$applyTo = (function (seq14959){
var G__14960 = cljs.core.first.call(null,seq14959);
var seq14959__$1 = cljs.core.next.call(null,seq14959);
var G__14961 = cljs.core.first.call(null,seq14959__$1);
var seq14959__$2 = cljs.core.next.call(null,seq14959__$1);
return dogfort.middleware.params.params_request.cljs$core$IFn$_invoke$arity$variadic(G__14960,G__14961,seq14959__$2);
});
/**
 * Middleware to parse urlencoded parameters from the query string and form
 *   body (if the request is a url-encoded form). Adds the following keys to
 *   the request map:
 * 
 *   :query-params - a map of parameters from the query string
 *   :form-params  - a map of parameters from the body
 *   :params       - a merged map of all types of parameter
 * 
 *   Accepts the following options:
 * 
 *   :encoding - encoding to use for url-decoding. If not specified, uses
 *   the request character encoding, or "UTF-8" if no request
 *   character encoding is set.
 */
dogfort.middleware.params.wrap_params = (function dogfort$middleware$params$wrap_params(var_args){
var args__5208__auto__ = [];
var len__5201__auto___14971 = arguments.length;
var i__5202__auto___14972 = (0);
while(true){
if((i__5202__auto___14972 < len__5201__auto___14971)){
args__5208__auto__.push((arguments[i__5202__auto___14972]));

var G__14973 = (i__5202__auto___14972 + (1));
i__5202__auto___14972 = G__14973;
continue;
} else {
}
break;
}

var argseq__5209__auto__ = ((((1) < args__5208__auto__.length))?(new cljs.core.IndexedSeq(args__5208__auto__.slice((1)),(0))):null);
return dogfort.middleware.params.wrap_params.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5209__auto__);
});

dogfort.middleware.params.wrap_params.cljs$core$IFn$_invoke$arity$variadic = (function (handler,p__14969){
var vec__14970 = p__14969;
var options = cljs.core.nth.call(null,vec__14970,(0),null);
return ((function (vec__14970,options){
return (function (request){
return dogfort.middleware.params.params_request.call(null,handler,request,options);
});
;})(vec__14970,options))
});

dogfort.middleware.params.wrap_params.cljs$lang$maxFixedArity = (1);

dogfort.middleware.params.wrap_params.cljs$lang$applyTo = (function (seq14967){
var G__14968 = cljs.core.first.call(null,seq14967);
var seq14967__$1 = cljs.core.next.call(null,seq14967);
return dogfort.middleware.params.wrap_params.cljs$core$IFn$_invoke$arity$variadic(G__14968,seq14967__$1);
});

//# sourceMappingURL=params.js.map