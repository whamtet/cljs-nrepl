// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('dogfort.util.codec');
goog.require('cljs.core');
goog.require('dogfort.util.data');
goog.require('clojure.string');
goog.require('cljs.nodejs');
cljs.nodejs.enable_util_print_BANG_.call(null);
dogfort.util.codec.double_escape = (function dogfort$util$codec$double_escape(x){
return x.replace("\\","\\\\").replace("$","\\$");
});
dogfort.util.codec.number__GT_hex = (function dogfort$util$codec$number__GT_hex(num){
return num.toString((16)).toUpperCase();
});
/**
 * Percent-encode every character in the given string using either the specified
 *   encoding, or UTF-8 by default.
 */
dogfort.util.codec.percent_encode = (function dogfort$util$codec$percent_encode(var_args){
var args__5208__auto__ = [];
var len__5201__auto___9560 = arguments.length;
var i__5202__auto___9561 = (0);
while(true){
if((i__5202__auto___9561 < len__5201__auto___9560)){
args__5208__auto__.push((arguments[i__5202__auto___9561]));

var G__9562 = (i__5202__auto___9561 + (1));
i__5202__auto___9561 = G__9562;
continue;
} else {
}
break;
}

var argseq__5209__auto__ = ((((1) < args__5208__auto__.length))?(new cljs.core.IndexedSeq(args__5208__auto__.slice((1)),(0))):null);
return dogfort.util.codec.percent_encode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5209__auto__);
});

dogfort.util.codec.percent_encode.cljs$core$IFn$_invoke$arity$variadic = (function (unencoded,p__9558){
var vec__9559 = p__9558;
var encoding = cljs.core.nth.call(null,vec__9559,(0),null);
var buf = (new Buffer(unencoded,(function (){var or__4143__auto__ = encoding;
if(cljs.core.truth_(or__4143__auto__)){
return or__4143__auto__;
} else {
return "utf8";
}
})()));
var bytes = cljs.core.map.call(null,((function (buf,vec__9559,encoding){
return (function (p1__9555_SHARP_){
return [cljs.core.str("%"),cljs.core.str(dogfort.util.codec.number__GT_hex.call(null,(buf[p1__9555_SHARP_])))].join('');
});})(buf,vec__9559,encoding))
,cljs.core.range.call(null,buf.length));
return clojure.string.join.call(null,bytes);
});

dogfort.util.codec.percent_encode.cljs$lang$maxFixedArity = (1);

dogfort.util.codec.percent_encode.cljs$lang$applyTo = (function (seq9556){
var G__9557 = cljs.core.first.call(null,seq9556);
var seq9556__$1 = cljs.core.next.call(null,seq9556);
return dogfort.util.codec.percent_encode.cljs$core$IFn$_invoke$arity$variadic(G__9557,seq9556__$1);
});
dogfort.util.codec.parse_bytes = (function dogfort$util$codec$parse_bytes(encoded_bytes){
return (new Buffer(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,(function (p1__9564_SHARP_){
return parseInt(p1__9564_SHARP_,(16));
}),cljs.core.map.call(null,(function (p1__9563_SHARP_){
return cljs.core.subs.call(null,p1__9563_SHARP_,(1));
}),cljs.core.re_seq.call(null,/%../,encoded_bytes))))));
});
/**
 * Decode every percent-encoded character in the given string using the
 *   specified encoding, or UTF-8 by default.
 */
dogfort.util.codec.percent_decode = (function dogfort$util$codec$percent_decode(var_args){
var args__5208__auto__ = [];
var len__5201__auto___9569 = arguments.length;
var i__5202__auto___9570 = (0);
while(true){
if((i__5202__auto___9570 < len__5201__auto___9569)){
args__5208__auto__.push((arguments[i__5202__auto___9570]));

var G__9571 = (i__5202__auto___9570 + (1));
i__5202__auto___9570 = G__9571;
continue;
} else {
}
break;
}

var argseq__5209__auto__ = ((((1) < args__5208__auto__.length))?(new cljs.core.IndexedSeq(args__5208__auto__.slice((1)),(0))):null);
return dogfort.util.codec.percent_decode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5209__auto__);
});

dogfort.util.codec.percent_decode.cljs$core$IFn$_invoke$arity$variadic = (function (encoded,p__9567){
var vec__9568 = p__9567;
var encoding = cljs.core.nth.call(null,vec__9568,(0),null);
return clojure.string.replace.call(null,encoded,/(?:%..)+/,((function (vec__9568,encoding){
return (function (chars){
return dogfort.util.codec.parse_bytes.call(null,chars).toString((function (){var or__4143__auto__ = encoding;
if(cljs.core.truth_(or__4143__auto__)){
return or__4143__auto__;
} else {
return "utf8";
}
})()).replace("\\","\\\\");
});})(vec__9568,encoding))
);
});

dogfort.util.codec.percent_decode.cljs$lang$maxFixedArity = (1);

dogfort.util.codec.percent_decode.cljs$lang$applyTo = (function (seq9565){
var G__9566 = cljs.core.first.call(null,seq9565);
var seq9565__$1 = cljs.core.next.call(null,seq9565);
return dogfort.util.codec.percent_decode.cljs$core$IFn$_invoke$arity$variadic(G__9566,seq9565__$1);
});
/**
 * Returns the url-encoded version of the given string, using either a specified
 *   encoding or UTF-8 by default.
 */
dogfort.util.codec.url_encode = (function dogfort$util$codec$url_encode(var_args){
var args__5208__auto__ = [];
var len__5201__auto___9577 = arguments.length;
var i__5202__auto___9578 = (0);
while(true){
if((i__5202__auto___9578 < len__5201__auto___9577)){
args__5208__auto__.push((arguments[i__5202__auto___9578]));

var G__9579 = (i__5202__auto___9578 + (1));
i__5202__auto___9578 = G__9579;
continue;
} else {
}
break;
}

var argseq__5209__auto__ = ((((1) < args__5208__auto__.length))?(new cljs.core.IndexedSeq(args__5208__auto__.slice((1)),(0))):null);
return dogfort.util.codec.url_encode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5209__auto__);
});

dogfort.util.codec.url_encode.cljs$core$IFn$_invoke$arity$variadic = (function (unencoded,p__9575){
var vec__9576 = p__9575;
var encoding = cljs.core.nth.call(null,vec__9576,(0),null);
return clojure.string.replace.call(null,unencoded,/[^A-Za-z0-9_~.+-]+/,((function (vec__9576,encoding){
return (function (p1__9572_SHARP_){
return dogfort.util.codec.double_escape.call(null,dogfort.util.codec.percent_encode.call(null,p1__9572_SHARP_,encoding));
});})(vec__9576,encoding))
);
});

dogfort.util.codec.url_encode.cljs$lang$maxFixedArity = (1);

dogfort.util.codec.url_encode.cljs$lang$applyTo = (function (seq9573){
var G__9574 = cljs.core.first.call(null,seq9573);
var seq9573__$1 = cljs.core.next.call(null,seq9573);
return dogfort.util.codec.url_encode.cljs$core$IFn$_invoke$arity$variadic(G__9574,seq9573__$1);
});
/**
 * Returns the url-decoded version of the given string, using either a specified
 *   encoding or UTF-8 by default. If the encoding is invalid, nil is returned.
 */
dogfort.util.codec.url_decode = (function dogfort$util$codec$url_decode(var_args){
var args__5208__auto__ = [];
var len__5201__auto___9584 = arguments.length;
var i__5202__auto___9585 = (0);
while(true){
if((i__5202__auto___9585 < len__5201__auto___9584)){
args__5208__auto__.push((arguments[i__5202__auto___9585]));

var G__9586 = (i__5202__auto___9585 + (1));
i__5202__auto___9585 = G__9586;
continue;
} else {
}
break;
}

var argseq__5209__auto__ = ((((1) < args__5208__auto__.length))?(new cljs.core.IndexedSeq(args__5208__auto__.slice((1)),(0))):null);
return dogfort.util.codec.url_decode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5209__auto__);
});

dogfort.util.codec.url_decode.cljs$core$IFn$_invoke$arity$variadic = (function (encoded,p__9582){
var vec__9583 = p__9582;
var encoding = cljs.core.nth.call(null,vec__9583,(0),null);
return dogfort.util.codec.percent_decode.call(null,clojure.string.replace.call(null,encoded,/[+]/," "),encoding);
});

dogfort.util.codec.url_decode.cljs$lang$maxFixedArity = (1);

dogfort.util.codec.url_decode.cljs$lang$applyTo = (function (seq9580){
var G__9581 = cljs.core.first.call(null,seq9580);
var seq9580__$1 = cljs.core.next.call(null,seq9580);
return dogfort.util.codec.url_decode.cljs$core$IFn$_invoke$arity$variadic(G__9581,seq9580__$1);
});
/**
 * Encode a Buffer into a base64 encoded string.
 */
dogfort.util.codec.base64_encode = (function dogfort$util$codec$base64_encode(unencoded){
return unencoded.toString("base64");
});
/**
 * Decode a base64 encoded string into a Buffer.
 */
dogfort.util.codec.base64_decode = (function dogfort$util$codec$base64_decode(encoded){
return (new Buffer(encoded,"base64"));
});
dogfort.util.codec.form_encode_STAR_ = (function dogfort$util$codec$form_encode_STAR_(params,encoding){
if(cljs.core.map_QMARK_.call(null,params)){
var encode = (function dogfort$util$codec$form_encode_STAR__$_encode(x){
return dogfort$util$codec$form_encode_STAR_.call(null,x,encoding);
});
var encode_param = (function dogfort$util$codec$form_encode_STAR__$_encode_param(p__9600){
var vec__9602 = p__9600;
var k = cljs.core.nth.call(null,vec__9602,(0),null);
var v = cljs.core.nth.call(null,vec__9602,(1),null);
return [cljs.core.str(encode.call(null,cljs.core.name.call(null,k))),cljs.core.str("="),cljs.core.str(encode.call(null,v))].join('');
});
return clojure.string.join.call(null,"&",cljs.core.mapcat.call(null,(function (p__9603){
var vec__9604 = p__9603;
var k = cljs.core.nth.call(null,vec__9604,(0),null);
var v = cljs.core.nth.call(null,vec__9604,(1),null);
if((cljs.core.seq_QMARK_.call(null,v)) || (cljs.core.sequential_QMARK_.call(null,v))){
return cljs.core.map.call(null,((function (vec__9604,k,v){
return (function (p1__9588_SHARP_){
return encode_param.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,p1__9588_SHARP_], null));
});})(vec__9604,k,v))
,v);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [encode_param.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null))], null);
}
}),params));
} else {
return dogfort.util.codec.url_encode.call(null,[cljs.core.str(params)].join(''),encoding);
}
});
/**
 * Encode the supplied value into www-form-urlencoded format, often used in
 *   URL query strings and POST request bodies, using the specified encoding.
 *   If the encoding is not specified, it defaults to UTF-8
 */
dogfort.util.codec.form_encode = (function dogfort$util$codec$form_encode(var_args){
var args__5208__auto__ = [];
var len__5201__auto___9609 = arguments.length;
var i__5202__auto___9610 = (0);
while(true){
if((i__5202__auto___9610 < len__5201__auto___9609)){
args__5208__auto__.push((arguments[i__5202__auto___9610]));

var G__9611 = (i__5202__auto___9610 + (1));
i__5202__auto___9610 = G__9611;
continue;
} else {
}
break;
}

var argseq__5209__auto__ = ((((1) < args__5208__auto__.length))?(new cljs.core.IndexedSeq(args__5208__auto__.slice((1)),(0))):null);
return dogfort.util.codec.form_encode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5209__auto__);
});

dogfort.util.codec.form_encode.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__9607){
var vec__9608 = p__9607;
var encoding = cljs.core.nth.call(null,vec__9608,(0),null);
return clojure.string.replace.call(null,clojure.string.replace.call(null,dogfort.util.codec.form_encode_STAR_.call(null,x,(function (){var or__4143__auto__ = encoding;
if(cljs.core.truth_(or__4143__auto__)){
return or__4143__auto__;
} else {
return "utf8";
}
})()),/\+/,"%2B"),/%20/,"+");
});

dogfort.util.codec.form_encode.cljs$lang$maxFixedArity = (1);

dogfort.util.codec.form_encode.cljs$lang$applyTo = (function (seq9605){
var G__9606 = cljs.core.first.call(null,seq9605);
var seq9605__$1 = cljs.core.next.call(null,seq9605);
return dogfort.util.codec.form_encode.cljs$core$IFn$_invoke$arity$variadic(G__9606,seq9605__$1);
});
/**
 * Decode the supplied www-form-urlencoded string using the specified encoding,
 *   or UTF-8 by default.
 */
dogfort.util.codec.form_decode_str = (function dogfort$util$codec$form_decode_str(var_args){
var args__5208__auto__ = [];
var len__5201__auto___9616 = arguments.length;
var i__5202__auto___9617 = (0);
while(true){
if((i__5202__auto___9617 < len__5201__auto___9616)){
args__5208__auto__.push((arguments[i__5202__auto___9617]));

var G__9618 = (i__5202__auto___9617 + (1));
i__5202__auto___9617 = G__9618;
continue;
} else {
}
break;
}

var argseq__5209__auto__ = ((((1) < args__5208__auto__.length))?(new cljs.core.IndexedSeq(args__5208__auto__.slice((1)),(0))):null);
return dogfort.util.codec.form_decode_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5209__auto__);
});

dogfort.util.codec.form_decode_str.cljs$core$IFn$_invoke$arity$variadic = (function (encoded,p__9614){
var vec__9615 = p__9614;
var encoding = cljs.core.nth.call(null,vec__9615,(0),null);
return dogfort.util.codec.url_decode.call(null,encoded,(function (){var or__4143__auto__ = encoding;
if(cljs.core.truth_(or__4143__auto__)){
return or__4143__auto__;
} else {
return "utf8";
}
})());
});

dogfort.util.codec.form_decode_str.cljs$lang$maxFixedArity = (1);

dogfort.util.codec.form_decode_str.cljs$lang$applyTo = (function (seq9612){
var G__9613 = cljs.core.first.call(null,seq9612);
var seq9612__$1 = cljs.core.next.call(null,seq9612);
return dogfort.util.codec.form_decode_str.cljs$core$IFn$_invoke$arity$variadic(G__9613,seq9612__$1);
});
/**
 * Decode the supplied www-form-urlencoded string using the specified encoding,
 *   or UTF-8 by default. If the encoded value is a string, a string is returned.
 *   If the encoded value is a map of parameters, a map is returned.
 */
dogfort.util.codec.form_decode = (function dogfort$util$codec$form_decode(var_args){
var args__5208__auto__ = [];
var len__5201__auto___9624 = arguments.length;
var i__5202__auto___9625 = (0);
while(true){
if((i__5202__auto___9625 < len__5201__auto___9624)){
args__5208__auto__.push((arguments[i__5202__auto___9625]));

var G__9626 = (i__5202__auto___9625 + (1));
i__5202__auto___9625 = G__9626;
continue;
} else {
}
break;
}

var argseq__5209__auto__ = ((((1) < args__5208__auto__.length))?(new cljs.core.IndexedSeq(args__5208__auto__.slice((1)),(0))):null);
return dogfort.util.codec.form_decode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5209__auto__);
});

dogfort.util.codec.form_decode.cljs$core$IFn$_invoke$arity$variadic = (function (encoded,p__9621){
var vec__9622 = p__9621;
var encoding = cljs.core.nth.call(null,vec__9622,(0),null);
if((encoded.indexOf("=") < (0))){
return dogfort.util.codec.form_decode_str.call(null,encoded,encoding);
} else {
return cljs.core.reduce.call(null,((function (vec__9622,encoding){
return (function (m,param){
var temp__4423__auto__ = clojure.string.split.call(null,param,/=/,(2));
if(cljs.core.truth_(temp__4423__auto__)){
var vec__9623 = temp__4423__auto__;
var k = cljs.core.nth.call(null,vec__9623,(0),null);
var v = cljs.core.nth.call(null,vec__9623,(1),null);
return dogfort.util.data.assoc_conj.call(null,m,dogfort.util.codec.form_decode_str.call(null,k,encoding),dogfort.util.codec.form_decode_str.call(null,v,encoding));
} else {
return m;
}
});})(vec__9622,encoding))
,cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,encoded,/&/));
}
});

dogfort.util.codec.form_decode.cljs$lang$maxFixedArity = (1);

dogfort.util.codec.form_decode.cljs$lang$applyTo = (function (seq9619){
var G__9620 = cljs.core.first.call(null,seq9619);
var seq9619__$1 = cljs.core.next.call(null,seq9619);
return dogfort.util.codec.form_decode.cljs$core$IFn$_invoke$arity$variadic(G__9620,seq9619__$1);
});

//# sourceMappingURL=codec.js.map