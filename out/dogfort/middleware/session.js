// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('dogfort.middleware.session');
goog.require('cljs.core');
goog.require('dogfort.middleware.cookies');
goog.require('dogfort.middleware.session.store');
goog.require('dogfort.middleware.session.memory');
goog.require('redlobster.promise');
dogfort.middleware.session.session_options = (function dogfort$middleware$session$session_options(options){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"store","store",1512230022),new cljs.core.Keyword(null,"store","store",1512230022).cljs$core$IFn$_invoke$arity$2(options,dogfort.middleware.session.memory.memory_store.call(null)),new cljs.core.Keyword(null,"cookie-name","cookie-name",1560376745),new cljs.core.Keyword(null,"cookie-name","cookie-name",1560376745).cljs$core$IFn$_invoke$arity$2(options,"ring-session"),new cljs.core.Keyword(null,"cookie-attrs","cookie-attrs",-1318966946),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),"/",new cljs.core.Keyword(null,"http-only","http-only",-825379555),true], null),new cljs.core.Keyword(null,"cookie-attrs","cookie-attrs",-1318966946).cljs$core$IFn$_invoke$arity$1(options),(function (){var temp__4423__auto__ = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(temp__4423__auto__)){
var root = temp__4423__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),root], null);
} else {
return null;
}
})())], null);
});
dogfort.middleware.session.bare_session_request = (function dogfort$middleware$session$bare_session_request(var_args){
var args__5208__auto__ = [];
var len__5201__auto___9795 = arguments.length;
var i__5202__auto___9796 = (0);
while(true){
if((i__5202__auto___9796 < len__5201__auto___9795)){
args__5208__auto__.push((arguments[i__5202__auto___9796]));

var G__9797 = (i__5202__auto___9796 + (1));
i__5202__auto___9796 = G__9797;
continue;
} else {
}
break;
}

var argseq__5209__auto__ = ((((1) < args__5208__auto__.length))?(new cljs.core.IndexedSeq(args__5208__auto__.slice((1)),(0))):null);
return dogfort.middleware.session.bare_session_request.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5209__auto__);
});

dogfort.middleware.session.bare_session_request.cljs$core$IFn$_invoke$arity$variadic = (function (request,p__9791){
var vec__9792 = p__9791;
var map__9793 = cljs.core.nth.call(null,vec__9792,(0),null);
var map__9793__$1 = ((((!((map__9793 == null)))?((((map__9793.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9793.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9793):map__9793);
var store = cljs.core.get.call(null,map__9793__$1,new cljs.core.Keyword(null,"store","store",1512230022));
var cookie_name = cljs.core.get.call(null,map__9793__$1,new cljs.core.Keyword(null,"cookie-name","cookie-name",1560376745));
var req_key = cljs.core.get_in.call(null,request,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cookies","cookies",1839416329),cookie_name,new cljs.core.Keyword(null,"value","value",305978217)], null));
var session = dogfort.middleware.session.store.read_session.call(null,store,req_key);
var session_key = (cljs.core.truth_(session)?req_key:null);
return cljs.core.merge.call(null,request,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"session","session",1008279103),(function (){var or__4143__auto__ = session;
if(cljs.core.truth_(or__4143__auto__)){
return or__4143__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),new cljs.core.Keyword("session","key","session/key",756123603),session_key], null));
});

dogfort.middleware.session.bare_session_request.cljs$lang$maxFixedArity = (1);

dogfort.middleware.session.bare_session_request.cljs$lang$applyTo = (function (seq9789){
var G__9790 = cljs.core.first.call(null,seq9789);
var seq9789__$1 = cljs.core.next.call(null,seq9789);
return dogfort.middleware.session.bare_session_request.cljs$core$IFn$_invoke$arity$variadic(G__9790,seq9789__$1);
});
/**
 * Reads current HTTP session map and adds it to :session key of the request.
 *   See: wrap-session.
 */
dogfort.middleware.session.session_request = (function dogfort$middleware$session$session_request(var_args){
var args__5208__auto__ = [];
var len__5201__auto___9802 = arguments.length;
var i__5202__auto___9803 = (0);
while(true){
if((i__5202__auto___9803 < len__5201__auto___9802)){
args__5208__auto__.push((arguments[i__5202__auto___9803]));

var G__9804 = (i__5202__auto___9803 + (1));
i__5202__auto___9803 = G__9804;
continue;
} else {
}
break;
}

var argseq__5209__auto__ = ((((1) < args__5208__auto__.length))?(new cljs.core.IndexedSeq(args__5208__auto__.slice((1)),(0))):null);
return dogfort.middleware.session.session_request.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5209__auto__);
});

dogfort.middleware.session.session_request.cljs$core$IFn$_invoke$arity$variadic = (function (request,p__9800){
var vec__9801 = p__9800;
var options = cljs.core.nth.call(null,vec__9801,(0),null);
return dogfort.middleware.session.bare_session_request.call(null,dogfort.middleware.cookies.cookies_request.call(null,request),options);
});

dogfort.middleware.session.session_request.cljs$lang$maxFixedArity = (1);

dogfort.middleware.session.session_request.cljs$lang$applyTo = (function (seq9798){
var G__9799 = cljs.core.first.call(null,seq9798);
var seq9798__$1 = cljs.core.next.call(null,seq9798);
return dogfort.middleware.session.session_request.cljs$core$IFn$_invoke$arity$variadic(G__9799,seq9798__$1);
});
dogfort.middleware.session.bare_session_response = (function dogfort$middleware$session$bare_session_response(var_args){
var args__5208__auto__ = [];
var len__5201__auto___9815 = arguments.length;
var i__5202__auto___9816 = (0);
while(true){
if((i__5202__auto___9816 < len__5201__auto___9815)){
args__5208__auto__.push((arguments[i__5202__auto___9816]));

var G__9817 = (i__5202__auto___9816 + (1));
i__5202__auto___9816 = G__9817;
continue;
} else {
}
break;
}

var argseq__5209__auto__ = ((((2) < args__5208__auto__.length))?(new cljs.core.IndexedSeq(args__5208__auto__.slice((2)),(0))):null);
return dogfort.middleware.session.bare_session_response.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5209__auto__);
});

dogfort.middleware.session.bare_session_response.cljs$core$IFn$_invoke$arity$variadic = (function (response,p__9808,p__9809){
var map__9810 = p__9808;
var map__9810__$1 = ((((!((map__9810 == null)))?((((map__9810.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9810.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9810):map__9810);
var session_key = cljs.core.get.call(null,map__9810__$1,new cljs.core.Keyword("session","key","session/key",756123603));
var vec__9811 = p__9809;
var map__9812 = cljs.core.nth.call(null,vec__9811,(0),null);
var map__9812__$1 = ((((!((map__9812 == null)))?((((map__9812.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9812.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9812):map__9812);
var store = cljs.core.get.call(null,map__9812__$1,new cljs.core.Keyword(null,"store","store",1512230022));
var cookie_name = cljs.core.get.call(null,map__9812__$1,new cljs.core.Keyword(null,"cookie-name","cookie-name",1560376745));
var cookie_attrs = cljs.core.get.call(null,map__9812__$1,new cljs.core.Keyword(null,"cookie-attrs","cookie-attrs",-1318966946));
var new_session_key = ((cljs.core.contains_QMARK_.call(null,response,new cljs.core.Keyword(null,"session","session",1008279103)))?(function (){var temp__4423__auto__ = response.call(null,new cljs.core.Keyword(null,"session","session",1008279103));
if(cljs.core.truth_(temp__4423__auto__)){
var session = temp__4423__auto__;
if(cljs.core.truth_(new cljs.core.Keyword(null,"recreate","recreate",706397197).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,session)))){
dogfort.middleware.session.store.delete_session.call(null,store,session_key);

return dogfort.middleware.session.store.write_session.call(null,store,null,session);
} else {
return dogfort.middleware.session.store.write_session.call(null,store,session_key,session);
}
} else {
if(cljs.core.truth_(session_key)){
return dogfort.middleware.session.store.delete_session.call(null,store,session_key);
} else {
return null;
}
}
})():null);
var session_attrs = new cljs.core.Keyword(null,"session-cookie-attrs","session-cookie-attrs",-680857706).cljs$core$IFn$_invoke$arity$1(response);
var cookie = cljs.core.PersistentArrayMap.fromArray([cookie_name,cljs.core.merge.call(null,cookie_attrs,session_attrs,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4143__auto__ = new_session_key;
if(cljs.core.truth_(or__4143__auto__)){
return or__4143__auto__;
} else {
return session_key;
}
})()], null))], true, false);
var response__$1 = cljs.core.dissoc.call(null,response,new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"session-cookie-attrs","session-cookie-attrs",-680857706));
if(cljs.core.truth_((function (){var or__4143__auto__ = (function (){var and__4131__auto__ = new_session_key;
if(cljs.core.truth_(and__4131__auto__)){
return cljs.core.not_EQ_.call(null,session_key,new_session_key);
} else {
return and__4131__auto__;
}
})();
if(cljs.core.truth_(or__4143__auto__)){
return or__4143__auto__;
} else {
var and__4131__auto__ = session_attrs;
if(cljs.core.truth_(and__4131__auto__)){
var or__4143__auto____$1 = new_session_key;
if(cljs.core.truth_(or__4143__auto____$1)){
return or__4143__auto____$1;
} else {
return session_key;
}
} else {
return and__4131__auto__;
}
}
})())){
return cljs.core.assoc.call(null,response__$1,new cljs.core.Keyword(null,"cookies","cookies",1839416329),cljs.core.merge.call(null,response__$1.call(null,new cljs.core.Keyword(null,"cookies","cookies",1839416329)),cookie));
} else {
return response__$1;
}
});

dogfort.middleware.session.bare_session_response.cljs$lang$maxFixedArity = (2);

dogfort.middleware.session.bare_session_response.cljs$lang$applyTo = (function (seq9805){
var G__9806 = cljs.core.first.call(null,seq9805);
var seq9805__$1 = cljs.core.next.call(null,seq9805);
var G__9807 = cljs.core.first.call(null,seq9805__$1);
var seq9805__$2 = cljs.core.next.call(null,seq9805__$1);
return dogfort.middleware.session.bare_session_response.cljs$core$IFn$_invoke$arity$variadic(G__9806,G__9807,seq9805__$2);
});
/**
 * Updates session based on :session key in response. See: wrap-session.
 */
dogfort.middleware.session.session_response = (function dogfort$middleware$session$session_response(var_args){
var args__5208__auto__ = [];
var len__5201__auto___9824 = arguments.length;
var i__5202__auto___9825 = (0);
while(true){
if((i__5202__auto___9825 < len__5201__auto___9824)){
args__5208__auto__.push((arguments[i__5202__auto___9825]));

var G__9826 = (i__5202__auto___9825 + (1));
i__5202__auto___9825 = G__9826;
continue;
} else {
}
break;
}

var argseq__5209__auto__ = ((((2) < args__5208__auto__.length))?(new cljs.core.IndexedSeq(args__5208__auto__.slice((2)),(0))):null);
return dogfort.middleware.session.session_response.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5209__auto__);
});

dogfort.middleware.session.session_response.cljs$core$IFn$_invoke$arity$variadic = (function (response,request,p__9822){
var vec__9823 = p__9822;
var options = cljs.core.nth.call(null,vec__9823,(0),null);
if(cljs.core.truth_(response)){
return dogfort.middleware.cookies.cookies_response.call(null,(function (){var promise__9651__auto__ = redlobster.promise.promise.call(null);
var realise__9652__auto__ = ((function (promise__9651__auto__,vec__9823,options){
return (function (promise__9651__auto____$1,value__9653__auto__){
return redlobster.promise.realise.call(null,promise__9651__auto____$1,value__9653__auto__);
});})(promise__9651__auto__,vec__9823,options))
;
var realise_error__9654__auto__ = ((function (promise__9651__auto__,realise__9652__auto__,vec__9823,options){
return (function (promise__9651__auto____$1,value__9653__auto__){
return redlobster.promise.realise_error.call(null,promise__9651__auto____$1,value__9653__auto__);
});})(promise__9651__auto__,realise__9652__auto__,vec__9823,options))
;
var realise = cljs.core.partial.call(null,realise__9652__auto__,promise__9651__auto__);
var realise_error = cljs.core.partial.call(null,realise_error__9654__auto__,promise__9651__auto__);
redlobster.promise.on_realised.call(null,response,((function (promise__9651__auto__,realise__9652__auto__,realise_error__9654__auto__,realise,realise_error,vec__9823,options){
return (function (p1__9818_SHARP_){
return realise.call(null,dogfort.middleware.session.bare_session_response.call(null,p1__9818_SHARP_,request,options));
});})(promise__9651__auto__,realise__9652__auto__,realise_error__9654__auto__,realise,realise_error,vec__9823,options))
,((function (promise__9651__auto__,realise__9652__auto__,realise_error__9654__auto__,realise,realise_error,vec__9823,options){
return (function (){
return cljs.core.List.EMPTY;
});})(promise__9651__auto__,realise__9652__auto__,realise_error__9654__auto__,realise,realise_error,vec__9823,options))
);

return promise__9651__auto__;
})());
} else {
return null;
}
});

dogfort.middleware.session.session_response.cljs$lang$maxFixedArity = (2);

dogfort.middleware.session.session_response.cljs$lang$applyTo = (function (seq9819){
var G__9820 = cljs.core.first.call(null,seq9819);
var seq9819__$1 = cljs.core.next.call(null,seq9819);
var G__9821 = cljs.core.first.call(null,seq9819__$1);
var seq9819__$2 = cljs.core.next.call(null,seq9819__$1);
return dogfort.middleware.session.session_response.cljs$core$IFn$_invoke$arity$variadic(G__9820,G__9821,seq9819__$2);
});
/**
 * Reads in the current HTTP session map, and adds it to the :session key on
 *   the request. If a :session key is added to the response by the handler, the
 *   session is updated with the new value. If the value is nil, the session is
 *   deleted.
 * 
 *   Accepts the following options:
 * 
 *   :store        - An implementation of the SessionStore protocol in the
 *                dogfort.middleware.session.store namespace. This determines how
 *                the session is stored. Defaults to in-memory storage using
 *                dogfort.middleware.session.store/memory-store.
 * 
 *   :root         - The root path of the session. Any path above this will not be
 *                able to see this session. Equivalent to setting the cookie's
 *                path attribute. Defaults to "/".
 * 
 *   :cookie-name  - The name of the cookie that holds the session key. Defaults to
 *                "ring-session"
 * 
 *   :cookie-attrs - A map of attributes to associate with the session cookie.
 *                Defaults to {:http-only true}.
 */
dogfort.middleware.session.wrap_session = (function dogfort$middleware$session$wrap_session(var_args){
var args9827 = [];
var len__5201__auto___9830 = arguments.length;
var i__5202__auto___9831 = (0);
while(true){
if((i__5202__auto___9831 < len__5201__auto___9830)){
args9827.push((arguments[i__5202__auto___9831]));

var G__9832 = (i__5202__auto___9831 + (1));
i__5202__auto___9831 = G__9832;
continue;
} else {
}
break;
}

var G__9829 = args9827.length;
switch (G__9829) {
case 1:
return dogfort.middleware.session.wrap_session.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dogfort.middleware.session.wrap_session.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9827.length)].join('')));

}
});

dogfort.middleware.session.wrap_session.cljs$core$IFn$_invoke$arity$1 = (function (handler){
return dogfort.middleware.session.wrap_session.call(null,handler,cljs.core.PersistentArrayMap.EMPTY);
});

dogfort.middleware.session.wrap_session.cljs$core$IFn$_invoke$arity$2 = (function (handler,options){
var options__$1 = dogfort.middleware.session.session_options.call(null,options);
return ((function (options__$1){
return (function (request){
var new_request = dogfort.middleware.session.session_request.call(null,request,options__$1);
return dogfort.middleware.session.session_response.call(null,handler.call(null,new_request),new_request,options__$1);
});
;})(options__$1))
});

dogfort.middleware.session.wrap_session.cljs$lang$maxFixedArity = 2;

//# sourceMappingURL=session.js.map