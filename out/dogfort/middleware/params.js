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
var promise__9642__auto__ = redlobster.promise.promise.call(null);
var realise__9643__auto__ = ((function (promise__9642__auto__){
return (function (promise__9642__auto____$1,value__9644__auto__){
return redlobster.promise.realise.call(null,promise__9642__auto____$1,value__9644__auto__);
});})(promise__9642__auto__))
;
var realise_error__9645__auto__ = ((function (promise__9642__auto__,realise__9643__auto__){
return (function (promise__9642__auto____$1,value__9644__auto__){
return redlobster.promise.realise_error.call(null,promise__9642__auto____$1,value__9644__auto__);
});})(promise__9642__auto__,realise__9643__auto__))
;
var realise = cljs.core.partial.call(null,realise__9643__auto__,promise__9642__auto__);
var realise_error = cljs.core.partial.call(null,realise_error__9645__auto__,promise__9642__auto__);
var sb_9860 = (new Array());
body.on("data",((function (sb_9860,promise__9642__auto__,realise__9643__auto__,realise_error__9645__auto__,realise,realise_error){
return (function (p1__9859_SHARP_){
return sb_9860.push(p1__9859_SHARP_);
});})(sb_9860,promise__9642__auto__,realise__9643__auto__,realise_error__9645__auto__,realise,realise_error))
);

body.on("end",((function (sb_9860,promise__9642__auto__,realise__9643__auto__,realise_error__9645__auto__,realise,realise_error){
return (function (){
return realise.call(null,sb_9860.join(""));
});})(sb_9860,promise__9642__auto__,realise__9643__auto__,realise_error__9645__auto__,realise,realise_error))
);

return promise__9642__auto__;
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
var len__5201__auto___9866 = arguments.length;
var i__5202__auto___9867 = (0);
while(true){
if((i__5202__auto___9867 < len__5201__auto___9866)){
args__5208__auto__.push((arguments[i__5202__auto___9867]));

var G__9868 = (i__5202__auto___9867 + (1));
i__5202__auto___9867 = G__9868;
continue;
} else {
}
break;
}

var argseq__5209__auto__ = ((((2) < args__5208__auto__.length))?(new cljs.core.IndexedSeq(args__5208__auto__.slice((2)),(0))):null);
return dogfort.middleware.params.params_request.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5209__auto__);
});

dogfort.middleware.params.params_request.cljs$core$IFn$_invoke$arity$variadic = (function (handler,request,p__9864){
var vec__9865 = p__9864;
var opts = cljs.core.nth.call(null,vec__9865,(0),null);
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

dogfort.middleware.params.params_request.cljs$lang$applyTo = (function (seq9861){
var G__9862 = cljs.core.first.call(null,seq9861);
var seq9861__$1 = cljs.core.next.call(null,seq9861);
var G__9863 = cljs.core.first.call(null,seq9861__$1);
var seq9861__$2 = cljs.core.next.call(null,seq9861__$1);
return dogfort.middleware.params.params_request.cljs$core$IFn$_invoke$arity$variadic(G__9862,G__9863,seq9861__$2);
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
var len__5201__auto___9873 = arguments.length;
var i__5202__auto___9874 = (0);
while(true){
if((i__5202__auto___9874 < len__5201__auto___9873)){
args__5208__auto__.push((arguments[i__5202__auto___9874]));

var G__9875 = (i__5202__auto___9874 + (1));
i__5202__auto___9874 = G__9875;
continue;
} else {
}
break;
}

var argseq__5209__auto__ = ((((1) < args__5208__auto__.length))?(new cljs.core.IndexedSeq(args__5208__auto__.slice((1)),(0))):null);
return dogfort.middleware.params.wrap_params.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5209__auto__);
});

dogfort.middleware.params.wrap_params.cljs$core$IFn$_invoke$arity$variadic = (function (handler,p__9871){
var vec__9872 = p__9871;
var options = cljs.core.nth.call(null,vec__9872,(0),null);
return ((function (vec__9872,options){
return (function (request){
return dogfort.middleware.params.params_request.call(null,handler,request,options);
});
;})(vec__9872,options))
});

dogfort.middleware.params.wrap_params.cljs$lang$maxFixedArity = (1);

dogfort.middleware.params.wrap_params.cljs$lang$applyTo = (function (seq9869){
var G__9870 = cljs.core.first.call(null,seq9869);
var seq9869__$1 = cljs.core.next.call(null,seq9869);
return dogfort.middleware.params.wrap_params.cljs$core$IFn$_invoke$arity$variadic(G__9870,seq9869__$1);
});

//# sourceMappingURL=params.js.map