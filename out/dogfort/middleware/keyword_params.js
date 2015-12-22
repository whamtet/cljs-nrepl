// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('dogfort.middleware.keyword_params');
goog.require('cljs.core');
dogfort.middleware.keyword_params.keyword_syntax_QMARK_ = (function dogfort$middleware$keyword_params$keyword_syntax_QMARK_(s){
return cljs.core.re_matches.call(null,/[A-Za-z*+!_?-][A-Za-z0-9*+!_?-]*/,s);
});
dogfort.middleware.keyword_params.keyify_params = (function dogfort$middleware$keyword_params$keyify_params(target){
if(cljs.core.map_QMARK_.call(null,target)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4915__auto__ = (function dogfort$middleware$keyword_params$keyify_params_$_iter__9844(s__9845){
return (new cljs.core.LazySeq(null,(function (){
var s__9845__$1 = s__9845;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__9845__$1);
if(temp__4425__auto__){
var s__9845__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9845__$2)){
var c__4913__auto__ = cljs.core.chunk_first.call(null,s__9845__$2);
var size__4914__auto__ = cljs.core.count.call(null,c__4913__auto__);
var b__9847 = cljs.core.chunk_buffer.call(null,size__4914__auto__);
if((function (){var i__9846 = (0);
while(true){
if((i__9846 < size__4914__auto__)){
var vec__9850 = cljs.core._nth.call(null,c__4913__auto__,i__9846);
var k = cljs.core.nth.call(null,vec__9850,(0),null);
var v = cljs.core.nth.call(null,vec__9850,(1),null);
cljs.core.chunk_append.call(null,b__9847,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var and__4131__auto__ = typeof k === 'string';
if(and__4131__auto__){
return dogfort.middleware.keyword_params.keyword_syntax_QMARK_.call(null,k);
} else {
return and__4131__auto__;
}
})())?cljs.core.keyword.call(null,k):k),dogfort$middleware$keyword_params$keyify_params.call(null,v)], null));

var G__9852 = (i__9846 + (1));
i__9846 = G__9852;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9847),dogfort$middleware$keyword_params$keyify_params_$_iter__9844.call(null,cljs.core.chunk_rest.call(null,s__9845__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9847),null);
}
} else {
var vec__9851 = cljs.core.first.call(null,s__9845__$2);
var k = cljs.core.nth.call(null,vec__9851,(0),null);
var v = cljs.core.nth.call(null,vec__9851,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var and__4131__auto__ = typeof k === 'string';
if(and__4131__auto__){
return dogfort.middleware.keyword_params.keyword_syntax_QMARK_.call(null,k);
} else {
return and__4131__auto__;
}
})())?cljs.core.keyword.call(null,k):k),dogfort$middleware$keyword_params$keyify_params.call(null,v)], null),dogfort$middleware$keyword_params$keyify_params_$_iter__9844.call(null,cljs.core.rest.call(null,s__9845__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4915__auto__.call(null,target);
})());
} else {
if(cljs.core.vector_QMARK_.call(null,target)){
return cljs.core.vec.call(null,cljs.core.map.call(null,dogfort$middleware$keyword_params$keyify_params,target));
} else {
return target;

}
}
});
/**
 * Converts string keys in :params map to keywords. See: wrap-keyword-params.
 */
dogfort.middleware.keyword_params.keyword_params_request = (function dogfort$middleware$keyword_params$keyword_params_request(request){
return cljs.core.update_in.call(null,request,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235)], null),dogfort.middleware.keyword_params.keyify_params);
});
/**
 * Middleware that converts the any string keys in the :params map to keywords.
 *   Only keys that can be turned into valid keywords are converted.
 * 
 *   This middleware does not alter the maps under :*-params keys. These are left
 *   as strings.
 */
dogfort.middleware.keyword_params.wrap_keyword_params = (function dogfort$middleware$keyword_params$wrap_keyword_params(handler){
return (function (request){
return handler.call(null,dogfort.middleware.keyword_params.keyword_params_request.call(null,request));
});
});

//# sourceMappingURL=keyword_params.js.map