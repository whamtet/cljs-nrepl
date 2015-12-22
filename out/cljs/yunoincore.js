// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('cljs.yunoincore');
goog.require('cljs.core');

/**
 * @interface
 */
cljs.yunoincore.IEncodeJS = function(){};

/**
 * Recursively transforms clj values to JavaScript
 */
cljs.yunoincore._clj__GT_js = (function cljs$yunoincore$_clj__GT_js(x){
if((!((x == null))) && (!((x.cljs$core$IEncodeJS$_clj__GT_js$arity$1 == null)))){
return x.cljs$core$IEncodeJS$_clj__GT_js$arity$1(x);
} else {
var x__4798__auto__ = (((x == null))?null:x);
var m__4799__auto__ = (cljs.yunoincore._clj__GT_js[goog.typeOf(x__4798__auto__)]);
if(!((m__4799__auto__ == null))){
return m__4799__auto__.call(null,x);
} else {
var m__4799__auto____$1 = (cljs.yunoincore._clj__GT_js["_"]);
if(!((m__4799__auto____$1 == null))){
return m__4799__auto____$1.call(null,x);
} else {
throw cljs.core.missing_protocol.call(null,"IEncodeJS.-clj->js",x);
}
}
}
});

/**
 * Transforms map keys to valid JavaScript keys. Arbitrary keys are
 *   encoded to their string representation via (pr-str x)
 */
cljs.yunoincore._key__GT_js = (function cljs$yunoincore$_key__GT_js(x){
if((!((x == null))) && (!((x.cljs$core$IEncodeJS$_key__GT_js$arity$1 == null)))){
return x.cljs$core$IEncodeJS$_key__GT_js$arity$1(x);
} else {
var x__4798__auto__ = (((x == null))?null:x);
var m__4799__auto__ = (cljs.yunoincore._key__GT_js[goog.typeOf(x__4798__auto__)]);
if(!((m__4799__auto__ == null))){
return m__4799__auto__.call(null,x);
} else {
var m__4799__auto____$1 = (cljs.yunoincore._key__GT_js["_"]);
if(!((m__4799__auto____$1 == null))){
return m__4799__auto____$1.call(null,x);
} else {
throw cljs.core.missing_protocol.call(null,"IEncodeJS.-key->js",x);
}
}
}
});

(cljs.yunoincore.IEncodeJS["_"] = true);

(cljs.yunoincore._key__GT_js["_"] = (function (k){
if((typeof k === 'string') || (typeof k === 'number') || ((k instanceof cljs.core.Keyword)) || ((k instanceof cljs.core.Symbol))){
return cljs.yunoincore._clj__GT_js.call(null,k);
} else {
return cljs.core.pr_str.call(null,k);
}
}));

(cljs.yunoincore._clj__GT_js["_"] = (function (x){
if((x instanceof cljs.core.Keyword)){
return cljs.core.name.call(null,x);
} else {
if((x instanceof cljs.core.Symbol)){
return [cljs.core.str(x)].join('');
} else {
if(cljs.core.map_QMARK_.call(null,x)){
var m = {};
var seq__8226_8232 = cljs.core.seq.call(null,x);
var chunk__8227_8233 = null;
var count__8228_8234 = (0);
var i__8229_8235 = (0);
while(true){
if((i__8229_8235 < count__8228_8234)){
var vec__8230_8236 = cljs.core._nth.call(null,chunk__8227_8233,i__8229_8235);
var k_8237 = cljs.core.nth.call(null,vec__8230_8236,(0),null);
var v_8238 = cljs.core.nth.call(null,vec__8230_8236,(1),null);
(m[cljs.yunoincore._key__GT_js.call(null,k_8237)] = cljs.yunoincore._clj__GT_js.call(null,v_8238));

var G__8239 = seq__8226_8232;
var G__8240 = chunk__8227_8233;
var G__8241 = count__8228_8234;
var G__8242 = (i__8229_8235 + (1));
seq__8226_8232 = G__8239;
chunk__8227_8233 = G__8240;
count__8228_8234 = G__8241;
i__8229_8235 = G__8242;
continue;
} else {
var temp__4425__auto___8243 = cljs.core.seq.call(null,seq__8226_8232);
if(temp__4425__auto___8243){
var seq__8226_8244__$1 = temp__4425__auto___8243;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8226_8244__$1)){
var c__4946__auto___8245 = cljs.core.chunk_first.call(null,seq__8226_8244__$1);
var G__8246 = cljs.core.chunk_rest.call(null,seq__8226_8244__$1);
var G__8247 = c__4946__auto___8245;
var G__8248 = cljs.core.count.call(null,c__4946__auto___8245);
var G__8249 = (0);
seq__8226_8232 = G__8246;
chunk__8227_8233 = G__8247;
count__8228_8234 = G__8248;
i__8229_8235 = G__8249;
continue;
} else {
var vec__8231_8250 = cljs.core.first.call(null,seq__8226_8244__$1);
var k_8251 = cljs.core.nth.call(null,vec__8231_8250,(0),null);
var v_8252 = cljs.core.nth.call(null,vec__8231_8250,(1),null);
(m[cljs.yunoincore._key__GT_js.call(null,k_8251)] = cljs.yunoincore._clj__GT_js.call(null,v_8252));

var G__8253 = cljs.core.next.call(null,seq__8226_8244__$1);
var G__8254 = null;
var G__8255 = (0);
var G__8256 = (0);
seq__8226_8232 = G__8253;
chunk__8227_8233 = G__8254;
count__8228_8234 = G__8255;
i__8229_8235 = G__8256;
continue;
}
} else {
}
}
break;
}

return m;
} else {
if(cljs.core.coll_QMARK_.call(null,x)){
return cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,cljs.yunoincore._clj__GT_js,x));
} else {
return x;

}
}
}
}
}));

(cljs.yunoincore.IEncodeJS["null"] = true);

(cljs.yunoincore._clj__GT_js["null"] = (function (x){
return null;
}));
/**
 * Recursively transforms ClojureScript values to JavaScript.
 * sets/vectors/lists become Arrays, Keywords and Symbol become Strings,
 * Maps become Objects. Arbitrary keys are encoded to by key->js.
 */
cljs.yunoincore.clj__GT_js = (function cljs$yunoincore$clj__GT_js(x){
return cljs.yunoincore._clj__GT_js.call(null,x);
});

//# sourceMappingURL=yunoincore.js.map