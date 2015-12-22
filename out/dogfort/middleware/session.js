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
var len__5201__auto___14916 = arguments.length;
var i__5202__auto___14917 = (0);
while(true){
if((i__5202__auto___14917 < len__5201__auto___14916)){
args__5208__auto__.push((arguments[i__5202__auto___14917]));

var G__14918 = (i__5202__auto___14917 + (1));
i__5202__auto___14917 = G__14918;
continue;
} else {
}
break;
}

var argseq__5209__auto__ = ((((1) < args__5208__auto__.length))?(new cljs.core.IndexedSeq(args__5208__auto__.slice((1)),(0))):null);
return dogfort.middleware.session.bare_session_request.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5209__auto__);
});

dogfort.middleware.session.bare_session_request.cljs$core$IFn$_invoke$arity$variadic = (function (request,p__14912){
var vec__14913 = p__14912;
var map__14914 = cljs.core.nth.call(null,vec__14913,(0),null);
var map__14914__$1 = ((((!((map__14914 == null)))?((((map__14914.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14914.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14914):map__14914);
var store = cljs.core.get.call(null,map__14914__$1,new cljs.core.Keyword(null,"store","store",1512230022));
var cookie_name = cljs.core.get.call(null,map__14914__$1,new cljs.core.Keyword(null,"cookie-name","cookie-name",1560376745));
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

dogfort.middleware.session.bare_session_request.cljs$lang$applyTo = (function (seq14910){
var G__14911 = cljs.core.first.call(null,seq14910);
var seq14910__$1 = cljs.core.next.call(null,seq14910);
return dogfort.middleware.session.bare_session_request.cljs$core$IFn$_invoke$arity$variadic(G__14911,seq14910__$1);
});
/**
 * Reads current HTTP session map and adds it to :session key of the request.
 *   See: wrap-session.
 */
dogfort.middleware.session.session_request = (function dogfort$middleware$session$session_request(var_args){
var args__5208__auto__ = [];
var len__5201__auto___14923 = arguments.length;
var i__5202__auto___14924 = (0);
while(true){
if((i__5202__auto___14924 < len__5201__auto___14923)){
args__5208__auto__.push((arguments[i__5202__auto___14924]));

var G__14925 = (i__5202__auto___14924 + (1));
i__5202__auto___14924 = G__14925;
continue;
} else {
}
break;
}

var argseq__5209__auto__ = ((((1) < args__5208__auto__.length))?(new cljs.core.IndexedSeq(args__5208__auto__.slice((1)),(0))):null);
return dogfort.middleware.session.session_request.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5209__auto__);
});

dogfort.middleware.session.session_request.cljs$core$IFn$_invoke$arity$variadic = (function (request,p__14921){
var vec__14922 = p__14921;
var options = cljs.core.nth.call(null,vec__14922,(0),null);
return dogfort.middleware.session.bare_session_request.call(null,dogfort.middleware.cookies.cookies_request.call(null,request),options);
});

dogfort.middleware.session.session_request.cljs$lang$maxFixedArity = (1);

dogfort.middleware.session.session_request.cljs$lang$applyTo = (function (seq14919){
var G__14920 = cljs.core.first.call(null,seq14919);
var seq14919__$1 = cljs.core.next.call(null,seq14919);
return dogfort.middleware.session.session_request.cljs$core$IFn$_invoke$arity$variadic(G__14920,seq14919__$1);
});
dogfort.middleware.session.bare_session_response = (function dogfort$middleware$session$bare_session_response(var_args){
var args__5208__auto__ = [];
var len__5201__auto___14936 = arguments.length;
var i__5202__auto___14937 = (0);
while(true){
if((i__5202__auto___14937 < len__5201__auto___14936)){
args__5208__auto__.push((arguments[i__5202__auto___14937]));

var G__14938 = (i__5202__auto___14937 + (1));
i__5202__auto___14937 = G__14938;
continue;
} else {
}
break;
}

var argseq__5209__auto__ = ((((2) < args__5208__auto__.length))?(new cljs.core.IndexedSeq(args__5208__auto__.slice((2)),(0))):null);
return dogfort.middleware.session.bare_session_response.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5209__auto__);
});

dogfort.middleware.session.bare_session_response.cljs$core$IFn$_invoke$arity$variadic = (function (response,p__14929,p__14930){
var map__14931 = p__14929;
var map__14931__$1 = ((((!((map__14931 == null)))?((((map__14931.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14931.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14931):map__14931);
var session_key = cljs.core.get.call(null,map__14931__$1,new cljs.core.Keyword("session","key","session/key",756123603));
var vec__14932 = p__14930;
var map__14933 = cljs.core.nth.call(null,vec__14932,(0),null);
var map__14933__$1 = ((((!((map__14933 == null)))?((((map__14933.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14933.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14933):map__14933);
var store = cljs.core.get.call(null,map__14933__$1,new cljs.core.Keyword(null,"store","store",1512230022));
var cookie_name = cljs.core.get.call(null,map__14933__$1,new cljs.core.Keyword(null,"cookie-name","cookie-name",1560376745));
var cookie_attrs = cljs.core.get.call(null,map__14933__$1,new cljs.core.Keyword(null,"cookie-attrs","cookie-attrs",-1318966946));
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

dogfort.middleware.session.bare_session_response.cljs$lang$applyTo = (function (seq14926){
var G__14927 = cljs.core.first.call(null,seq14926);
var seq14926__$1 = cljs.core.next.call(null,seq14926);
var G__14928 = cljs.core.first.call(null,seq14926__$1);
var seq14926__$2 = cljs.core.next.call(null,seq14926__$1);
return dogfort.middleware.session.bare_session_response.cljs$core$IFn$_invoke$arity$variadic(G__14927,G__14928,seq14926__$2);
});
/**
 * Updates session based on :session key in response. See: wrap-session.
 */
dogfort.middleware.session.session_response = (function dogfort$middleware$session$session_response(var_args){
var args__5208__auto__ = [];
var len__5201__auto___14945 = arguments.length;
var i__5202__auto___14946 = (0);
while(true){
if((i__5202__auto___14946 < len__5201__auto___14945)){
args__5208__auto__.push((arguments[i__5202__auto___14946]));

var G__14947 = (i__5202__auto___14946 + (1));
i__5202__auto___14946 = G__14947;
continue;
} else {
}
break;
}

var argseq__5209__auto__ = ((((2) < args__5208__auto__.length))?(new cljs.core.IndexedSeq(args__5208__auto__.slice((2)),(0))):null);
return dogfort.middleware.session.session_response.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5209__auto__);
});

dogfort.middleware.session.session_response.cljs$core$IFn$_invoke$arity$variadic = (function (response,request,p__14943){
var vec__14944 = p__14943;
var options = cljs.core.nth.call(null,vec__14944,(0),null);
if(cljs.core.truth_(response)){
return dogfort.middleware.cookies.cookies_response.call(null,(function (){var promise__5386__auto__ = redlobster.promise.promise.call(null);
var realise__5387__auto__ = ((function (promise__5386__auto__,vec__14944,options){
return (function (promise__5386__auto____$1,value__5388__auto__){
return redlobster.promise.realise.call(null,promise__5386__auto____$1,value__5388__auto__);
});})(promise__5386__auto__,vec__14944,options))
;
var realise_error__5389__auto__ = ((function (promise__5386__auto__,realise__5387__auto__,vec__14944,options){
return (function (promise__5386__auto____$1,value__5388__auto__){
return redlobster.promise.realise_error.call(null,promise__5386__auto____$1,value__5388__auto__);
});})(promise__5386__auto__,realise__5387__auto__,vec__14944,options))
;
var realise = cljs.core.partial.call(null,realise__5387__auto__,promise__5386__auto__);
var realise_error = cljs.core.partial.call(null,realise_error__5389__auto__,promise__5386__auto__);
redlobster.promise.on_realised.call(null,response,((function (promise__5386__auto__,realise__5387__auto__,realise_error__5389__auto__,realise,realise_error,vec__14944,options){
return (function (p1__14939_SHARP_){
return realise.call(null,dogfort.middleware.session.bare_session_response.call(null,p1__14939_SHARP_,request,options));
});})(promise__5386__auto__,realise__5387__auto__,realise_error__5389__auto__,realise,realise_error,vec__14944,options))
,((function (promise__5386__auto__,realise__5387__auto__,realise_error__5389__auto__,realise,realise_error,vec__14944,options){
return (function (){
return cljs.core.List.EMPTY;
});})(promise__5386__auto__,realise__5387__auto__,realise_error__5389__auto__,realise,realise_error,vec__14944,options))
);

return promise__5386__auto__;
})());
} else {
return null;
}
});

dogfort.middleware.session.session_response.cljs$lang$maxFixedArity = (2);

dogfort.middleware.session.session_response.cljs$lang$applyTo = (function (seq14940){
var G__14941 = cljs.core.first.call(null,seq14940);
var seq14940__$1 = cljs.core.next.call(null,seq14940);
var G__14942 = cljs.core.first.call(null,seq14940__$1);
var seq14940__$2 = cljs.core.next.call(null,seq14940__$1);
return dogfort.middleware.session.session_response.cljs$core$IFn$_invoke$arity$variadic(G__14941,G__14942,seq14940__$2);
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
var args14948 = [];
var len__5201__auto___14951 = arguments.length;
var i__5202__auto___14952 = (0);
while(true){
if((i__5202__auto___14952 < len__5201__auto___14951)){
args14948.push((arguments[i__5202__auto___14952]));

var G__14953 = (i__5202__auto___14952 + (1));
i__5202__auto___14952 = G__14953;
continue;
} else {
}
break;
}

var G__14950 = args14948.length;
switch (G__14950) {
case 1:
return dogfort.middleware.session.wrap_session.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dogfort.middleware.session.wrap_session.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14948.length)].join('')));

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