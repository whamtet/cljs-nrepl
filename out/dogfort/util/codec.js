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
var len__5201__auto___14733 = arguments.length;
var i__5202__auto___14734 = (0);
while(true){
if((i__5202__auto___14734 < len__5201__auto___14733)){
args__5208__auto__.push((arguments[i__5202__auto___14734]));

var G__14735 = (i__5202__auto___14734 + (1));
i__5202__auto___14734 = G__14735;
continue;
} else {
}
break;
}

var argseq__5209__auto__ = ((((1) < args__5208__auto__.length))?(new cljs.core.IndexedSeq(args__5208__auto__.slice((1)),(0))):null);
return dogfort.util.codec.percent_encode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5209__auto__);
});

dogfort.util.codec.percent_encode.cljs$core$IFn$_invoke$arity$variadic = (function (unencoded,p__14731){
var vec__14732 = p__14731;
var encoding = cljs.core.nth.call(null,vec__14732,(0),null);
var buf = (new Buffer(unencoded,(function (){var or__4143__auto__ = encoding;
if(cljs.core.truth_(or__4143__auto__)){
return or__4143__auto__;
} else {
return "utf8";
}
})()));
var bytes = cljs.core.map.call(null,((function (buf,vec__14732,encoding){
return (function (p1__14728_SHARP_){
return [cljs.core.str("%"),cljs.core.str(dogfort.util.codec.number__GT_hex.call(null,(buf[p1__14728_SHARP_])))].join('');
});})(buf,vec__14732,encoding))
,cljs.core.range.call(null,buf.length));
return clojure.string.join.call(null,bytes);
});

dogfort.util.codec.percent_encode.cljs$lang$maxFixedArity = (1);

dogfort.util.codec.percent_encode.cljs$lang$applyTo = (function (seq14729){
var G__14730 = cljs.core.first.call(null,seq14729);
var seq14729__$1 = cljs.core.next.call(null,seq14729);
return dogfort.util.codec.percent_encode.cljs$core$IFn$_invoke$arity$variadic(G__14730,seq14729__$1);
});
dogfort.util.codec.parse_bytes = (function dogfort$util$codec$parse_bytes(encoded_bytes){
return (new Buffer(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,(function (p1__14737_SHARP_){
return parseInt(p1__14737_SHARP_,(16));
}),cljs.core.map.call(null,(function (p1__14736_SHARP_){
return cljs.core.subs.call(null,p1__14736_SHARP_,(1));
}),cljs.core.re_seq.call(null,/%../,encoded_bytes))))));
});
/**
 * Decode every percent-encoded character in the given string using the
 *   specified encoding, or UTF-8 by default.
 */
dogfort.util.codec.percent_decode = (function dogfort$util$codec$percent_decode(var_args){
var args__5208__auto__ = [];
var len__5201__auto___14742 = arguments.length;
var i__5202__auto___14743 = (0);
while(true){
if((i__5202__auto___14743 < len__5201__auto___14742)){
args__5208__auto__.push((arguments[i__5202__auto___14743]));

var G__14744 = (i__5202__auto___14743 + (1));
i__5202__auto___14743 = G__14744;
continue;
} else {
}
break;
}

var argseq__5209__auto__ = ((((1) < args__5208__auto__.length))?(new cljs.core.IndexedSeq(args__5208__auto__.slice((1)),(0))):null);
return dogfort.util.codec.percent_decode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5209__auto__);
});

dogfort.util.codec.percent_decode.cljs$core$IFn$_invoke$arity$variadic = (function (encoded,p__14740){
var vec__14741 = p__14740;
var encoding = cljs.core.nth.call(null,vec__14741,(0),null);
return clojure.string.replace.call(null,encoded,/(?:%..)+/,((function (vec__14741,encoding){
return (function (chars){
return dogfort.util.codec.parse_bytes.call(null,chars).toString((function (){var or__4143__auto__ = encoding;
if(cljs.core.truth_(or__4143__auto__)){
return or__4143__auto__;
} else {
return "utf8";
}
})()).replace("\\","\\\\");
});})(vec__14741,encoding))
);
});

dogfort.util.codec.percent_decode.cljs$lang$maxFixedArity = (1);

dogfort.util.codec.percent_decode.cljs$lang$applyTo = (function (seq14738){
var G__14739 = cljs.core.first.call(null,seq14738);
var seq14738__$1 = cljs.core.next.call(null,seq14738);
return dogfort.util.codec.percent_decode.cljs$core$IFn$_invoke$arity$variadic(G__14739,seq14738__$1);
});
/**
 * Returns the url-encoded version of the given string, using either a specified
 *   encoding or UTF-8 by default.
 */
dogfort.util.codec.url_encode = (function dogfort$util$codec$url_encode(var_args){
var args__5208__auto__ = [];
var len__5201__auto___14750 = arguments.length;
var i__5202__auto___14751 = (0);
while(true){
if((i__5202__auto___14751 < len__5201__auto___14750)){
args__5208__auto__.push((arguments[i__5202__auto___14751]));

var G__14752 = (i__5202__auto___14751 + (1));
i__5202__auto___14751 = G__14752;
continue;
} else {
}
break;
}

var argseq__5209__auto__ = ((((1) < args__5208__auto__.length))?(new cljs.core.IndexedSeq(args__5208__auto__.slice((1)),(0))):null);
return dogfort.util.codec.url_encode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5209__auto__);
});

dogfort.util.codec.url_encode.cljs$core$IFn$_invoke$arity$variadic = (function (unencoded,p__14748){
var vec__14749 = p__14748;
var encoding = cljs.core.nth.call(null,vec__14749,(0),null);
return clojure.string.replace.call(null,unencoded,/[^A-Za-z0-9_~.+-]+/,((function (vec__14749,encoding){
return (function (p1__14745_SHARP_){
return dogfort.util.codec.double_escape.call(null,dogfort.util.codec.percent_encode.call(null,p1__14745_SHARP_,encoding));
});})(vec__14749,encoding))
);
});

dogfort.util.codec.url_encode.cljs$lang$maxFixedArity = (1);

dogfort.util.codec.url_encode.cljs$lang$applyTo = (function (seq14746){
var G__14747 = cljs.core.first.call(null,seq14746);
var seq14746__$1 = cljs.core.next.call(null,seq14746);
return dogfort.util.codec.url_encode.cljs$core$IFn$_invoke$arity$variadic(G__14747,seq14746__$1);
});
/**
 * Returns the url-decoded version of the given string, using either a specified
 *   encoding or UTF-8 by default. If the encoding is invalid, nil is returned.
 */
dogfort.util.codec.url_decode = (function dogfort$util$codec$url_decode(var_args){
var args__5208__auto__ = [];
var len__5201__auto___14757 = arguments.length;
var i__5202__auto___14758 = (0);
while(true){
if((i__5202__auto___14758 < len__5201__auto___14757)){
args__5208__auto__.push((arguments[i__5202__auto___14758]));

var G__14759 = (i__5202__auto___14758 + (1));
i__5202__auto___14758 = G__14759;
continue;
} else {
}
break;
}

var argseq__5209__auto__ = ((((1) < args__5208__auto__.length))?(new cljs.core.IndexedSeq(args__5208__auto__.slice((1)),(0))):null);
return dogfort.util.codec.url_decode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5209__auto__);
});

dogfort.util.codec.url_decode.cljs$core$IFn$_invoke$arity$variadic = (function (encoded,p__14755){
var vec__14756 = p__14755;
var encoding = cljs.core.nth.call(null,vec__14756,(0),null);
return dogfort.util.codec.percent_decode.call(null,clojure.string.replace.call(null,encoded,/[+]/," "),encoding);
});

dogfort.util.codec.url_decode.cljs$lang$maxFixedArity = (1);

dogfort.util.codec.url_decode.cljs$lang$applyTo = (function (seq14753){
var G__14754 = cljs.core.first.call(null,seq14753);
var seq14753__$1 = cljs.core.next.call(null,seq14753);
return dogfort.util.codec.url_decode.cljs$core$IFn$_invoke$arity$variadic(G__14754,seq14753__$1);
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
var encode_param = (function dogfort$util$codec$form_encode_STAR__$_encode_param(p__14773){
var vec__14775 = p__14773;
var k = cljs.core.nth.call(null,vec__14775,(0),null);
var v = cljs.core.nth.call(null,vec__14775,(1),null);
return [cljs.core.str(encode.call(null,cljs.core.name.call(null,k))),cljs.core.str("="),cljs.core.str(encode.call(null,v))].join('');
});
return clojure.string.join.call(null,"&",cljs.core.mapcat.call(null,(function (p__14776){
var vec__14777 = p__14776;
var k = cljs.core.nth.call(null,vec__14777,(0),null);
var v = cljs.core.nth.call(null,vec__14777,(1),null);
if((cljs.core.seq_QMARK_.call(null,v)) || (cljs.core.sequential_QMARK_.call(null,v))){
return cljs.core.map.call(null,((function (vec__14777,k,v){
return (function (p1__14761_SHARP_){
return encode_param.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,p1__14761_SHARP_], null));
});})(vec__14777,k,v))
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
var len__5201__auto___14782 = arguments.length;
var i__5202__auto___14783 = (0);
while(true){
if((i__5202__auto___14783 < len__5201__auto___14782)){
args__5208__auto__.push((arguments[i__5202__auto___14783]));

var G__14784 = (i__5202__auto___14783 + (1));
i__5202__auto___14783 = G__14784;
continue;
} else {
}
break;
}

var argseq__5209__auto__ = ((((1) < args__5208__auto__.length))?(new cljs.core.IndexedSeq(args__5208__auto__.slice((1)),(0))):null);
return dogfort.util.codec.form_encode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5209__auto__);
});

dogfort.util.codec.form_encode.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__14780){
var vec__14781 = p__14780;
var encoding = cljs.core.nth.call(null,vec__14781,(0),null);
return clojure.string.replace.call(null,clojure.string.replace.call(null,dogfort.util.codec.form_encode_STAR_.call(null,x,(function (){var or__4143__auto__ = encoding;
if(cljs.core.truth_(or__4143__auto__)){
return or__4143__auto__;
} else {
return "utf8";
}
})()),/\+/,"%2B"),/%20/,"+");
});

dogfort.util.codec.form_encode.cljs$lang$maxFixedArity = (1);

dogfort.util.codec.form_encode.cljs$lang$applyTo = (function (seq14778){
var G__14779 = cljs.core.first.call(null,seq14778);
var seq14778__$1 = cljs.core.next.call(null,seq14778);
return dogfort.util.codec.form_encode.cljs$core$IFn$_invoke$arity$variadic(G__14779,seq14778__$1);
});
/**
 * Decode the supplied www-form-urlencoded string using the specified encoding,
 *   or UTF-8 by default.
 */
dogfort.util.codec.form_decode_str = (function dogfort$util$codec$form_decode_str(var_args){
var args__5208__auto__ = [];
var len__5201__auto___14789 = arguments.length;
var i__5202__auto___14790 = (0);
while(true){
if((i__5202__auto___14790 < len__5201__auto___14789)){
args__5208__auto__.push((arguments[i__5202__auto___14790]));

var G__14791 = (i__5202__auto___14790 + (1));
i__5202__auto___14790 = G__14791;
continue;
} else {
}
break;
}

var argseq__5209__auto__ = ((((1) < args__5208__auto__.length))?(new cljs.core.IndexedSeq(args__5208__auto__.slice((1)),(0))):null);
return dogfort.util.codec.form_decode_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5209__auto__);
});

dogfort.util.codec.form_decode_str.cljs$core$IFn$_invoke$arity$variadic = (function (encoded,p__14787){
var vec__14788 = p__14787;
var encoding = cljs.core.nth.call(null,vec__14788,(0),null);
return dogfort.util.codec.url_decode.call(null,encoded,(function (){var or__4143__auto__ = encoding;
if(cljs.core.truth_(or__4143__auto__)){
return or__4143__auto__;
} else {
return "utf8";
}
})());
});

dogfort.util.codec.form_decode_str.cljs$lang$maxFixedArity = (1);

dogfort.util.codec.form_decode_str.cljs$lang$applyTo = (function (seq14785){
var G__14786 = cljs.core.first.call(null,seq14785);
var seq14785__$1 = cljs.core.next.call(null,seq14785);
return dogfort.util.codec.form_decode_str.cljs$core$IFn$_invoke$arity$variadic(G__14786,seq14785__$1);
});
/**
 * Decode the supplied www-form-urlencoded string using the specified encoding,
 *   or UTF-8 by default. If the encoded value is a string, a string is returned.
 *   If the encoded value is a map of parameters, a map is returned.
 */
dogfort.util.codec.form_decode = (function dogfort$util$codec$form_decode(var_args){
var args__5208__auto__ = [];
var len__5201__auto___14797 = arguments.length;
var i__5202__auto___14798 = (0);
while(true){
if((i__5202__auto___14798 < len__5201__auto___14797)){
args__5208__auto__.push((arguments[i__5202__auto___14798]));

var G__14799 = (i__5202__auto___14798 + (1));
i__5202__auto___14798 = G__14799;
continue;
} else {
}
break;
}

var argseq__5209__auto__ = ((((1) < args__5208__auto__.length))?(new cljs.core.IndexedSeq(args__5208__auto__.slice((1)),(0))):null);
return dogfort.util.codec.form_decode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5209__auto__);
});

dogfort.util.codec.form_decode.cljs$core$IFn$_invoke$arity$variadic = (function (encoded,p__14794){
var vec__14795 = p__14794;
var encoding = cljs.core.nth.call(null,vec__14795,(0),null);
if((encoded.indexOf("=") < (0))){
return dogfort.util.codec.form_decode_str.call(null,encoded,encoding);
} else {
return cljs.core.reduce.call(null,((function (vec__14795,encoding){
return (function (m,param){
var temp__4423__auto__ = clojure.string.split.call(null,param,/=/,(2));
if(cljs.core.truth_(temp__4423__auto__)){
var vec__14796 = temp__4423__auto__;
var k = cljs.core.nth.call(null,vec__14796,(0),null);
var v = cljs.core.nth.call(null,vec__14796,(1),null);
return dogfort.util.data.assoc_conj.call(null,m,dogfort.util.codec.form_decode_str.call(null,k,encoding),dogfort.util.codec.form_decode_str.call(null,v,encoding));
} else {
return m;
}
});})(vec__14795,encoding))
,cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,encoded,/&/));
}
});

dogfort.util.codec.form_decode.cljs$lang$maxFixedArity = (1);

dogfort.util.codec.form_decode.cljs$lang$applyTo = (function (seq14792){
var G__14793 = cljs.core.first.call(null,seq14792);
var seq14792__$1 = cljs.core.next.call(null,seq14792);
return dogfort.util.codec.form_decode.cljs$core$IFn$_invoke$arity$variadic(G__14793,seq14792__$1);
});

//# sourceMappingURL=codec.js.map