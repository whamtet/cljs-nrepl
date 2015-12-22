// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('dogfort.middleware.cookies');
goog.require('cljs.core');
goog.require('dogfort.util.codec');
goog.require('clojure.string');
goog.require('redlobster.promise');
/**
 * HTTP token: 1*<any CHAR except CTLs or tspecials>. See RFC2068
 */
dogfort.middleware.cookies.re_token = /[!#$%&'*\-+.0-9A-Z\^_`a-z\|~]+/;
/**
 * RFC6265 cookie-octet
 */
dogfort.middleware.cookies.re_cookie_octet = /[!#$%&'()*+\-.\/0-9:<=>?@A-Z\[\]\^_`a-z\{\|\}~]/;
/**
 * RFC6265 cookie-value
 */
dogfort.middleware.cookies.re_cookie_value = cljs.core.re_pattern.call(null,[cljs.core.str("\""),cljs.core.str(dogfort.middleware.cookies.re_cookie_octet.source),cljs.core.str("*\"|"),cljs.core.str(dogfort.middleware.cookies.re_cookie_octet.source),cljs.core.str("*")].join(''));
/**
 * RFC6265 set-cookie-string
 */
dogfort.middleware.cookies.re_cookie = cljs.core.re_pattern.call(null,[cljs.core.str("\\s*("),cljs.core.str(dogfort.middleware.cookies.re_token.source),cljs.core.str(")=("),cljs.core.str(dogfort.middleware.cookies.re_cookie_value.source),cljs.core.str(")\\s*[;,]?")].join(''));
/**
 * Attributes defined by RFC6265 that apply to the Set-Cookie header.
 */
dogfort.middleware.cookies.set_cookie_attrs = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"domain","domain",1847214937),"Domain",new cljs.core.Keyword(null,"max-age","max-age",-270129271),"Max-Age",new cljs.core.Keyword(null,"path","path",-188191168),"Path",new cljs.core.Keyword(null,"secure","secure",176883900),"Secure",new cljs.core.Keyword(null,"expires","expires",1393008816),"Expires",new cljs.core.Keyword(null,"http-only","http-only",-825379555),"HttpOnly"], null);
/**
 * Turn a HTTP Cookie header into a list of name/value pairs.
 */
dogfort.middleware.cookies.parse_cookie_header = (function dogfort$middleware$cookies$parse_cookie_header(header){
var iter__4915__auto__ = (function dogfort$middleware$cookies$parse_cookie_header_$_iter__14810(s__14811){
return (new cljs.core.LazySeq(null,(function (){
var s__14811__$1 = s__14811;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__14811__$1);
if(temp__4425__auto__){
var s__14811__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14811__$2)){
var c__4913__auto__ = cljs.core.chunk_first.call(null,s__14811__$2);
var size__4914__auto__ = cljs.core.count.call(null,c__4913__auto__);
var b__14813 = cljs.core.chunk_buffer.call(null,size__4914__auto__);
if((function (){var i__14812 = (0);
while(true){
if((i__14812 < size__4914__auto__)){
var vec__14816 = cljs.core._nth.call(null,c__4913__auto__,i__14812);
var _ = cljs.core.nth.call(null,vec__14816,(0),null);
var name = cljs.core.nth.call(null,vec__14816,(1),null);
var value = cljs.core.nth.call(null,vec__14816,(2),null);
cljs.core.chunk_append.call(null,b__14813,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,value], null));

var G__14818 = (i__14812 + (1));
i__14812 = G__14818;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14813),dogfort$middleware$cookies$parse_cookie_header_$_iter__14810.call(null,cljs.core.chunk_rest.call(null,s__14811__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14813),null);
}
} else {
var vec__14817 = cljs.core.first.call(null,s__14811__$2);
var _ = cljs.core.nth.call(null,vec__14817,(0),null);
var name = cljs.core.nth.call(null,vec__14817,(1),null);
var value = cljs.core.nth.call(null,vec__14817,(2),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,value], null),dogfort$middleware$cookies$parse_cookie_header_$_iter__14810.call(null,cljs.core.rest.call(null,s__14811__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4915__auto__.call(null,cljs.core.re_seq.call(null,dogfort.middleware.cookies.re_cookie,header));
});
/**
 * Strip quotes from a cookie value.
 */
dogfort.middleware.cookies.strip_quotes = (function dogfort$middleware$cookies$strip_quotes(value){
return clojure.string.replace.call(null,value,/^\"|\"$/,"");
});
dogfort.middleware.cookies.decode_values = (function dogfort$middleware$cookies$decode_values(cookies,decoder){
var iter__4915__auto__ = (function dogfort$middleware$cookies$decode_values_$_iter__14827(s__14828){
return (new cljs.core.LazySeq(null,(function (){
var s__14828__$1 = s__14828;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__14828__$1);
if(temp__4425__auto__){
var s__14828__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14828__$2)){
var c__4913__auto__ = cljs.core.chunk_first.call(null,s__14828__$2);
var size__4914__auto__ = cljs.core.count.call(null,c__4913__auto__);
var b__14830 = cljs.core.chunk_buffer.call(null,size__4914__auto__);
if((function (){var i__14829 = (0);
while(true){
if((i__14829 < size__4914__auto__)){
var vec__14833 = cljs.core._nth.call(null,c__4913__auto__,i__14829);
var name = cljs.core.nth.call(null,vec__14833,(0),null);
var value = cljs.core.nth.call(null,vec__14833,(1),null);
cljs.core.chunk_append.call(null,b__14830,(function (){var temp__4423__auto__ = decoder.call(null,dogfort.middleware.cookies.strip_quotes.call(null,value));
if(cljs.core.truth_(temp__4423__auto__)){
var value__$1 = temp__4423__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),value__$1], null)], null);
} else {
return null;
}
})());

var G__14835 = (i__14829 + (1));
i__14829 = G__14835;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14830),dogfort$middleware$cookies$decode_values_$_iter__14827.call(null,cljs.core.chunk_rest.call(null,s__14828__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14830),null);
}
} else {
var vec__14834 = cljs.core.first.call(null,s__14828__$2);
var name = cljs.core.nth.call(null,vec__14834,(0),null);
var value = cljs.core.nth.call(null,vec__14834,(1),null);
return cljs.core.cons.call(null,(function (){var temp__4423__auto__ = decoder.call(null,dogfort.middleware.cookies.strip_quotes.call(null,value));
if(cljs.core.truth_(temp__4423__auto__)){
var value__$1 = temp__4423__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),value__$1], null)], null);
} else {
return null;
}
})(),dogfort$middleware$cookies$decode_values_$_iter__14827.call(null,cljs.core.rest.call(null,s__14828__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4915__auto__.call(null,cookies);
});
/**
 * Parse the cookies from a request map.
 */
dogfort.middleware.cookies.parse_cookies = (function dogfort$middleware$cookies$parse_cookies(request,encoder){
var temp__4423__auto__ = cljs.core.get_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"cookie"], null));
if(cljs.core.truth_(temp__4423__auto__)){
var cookie = temp__4423__auto__;
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,cljs.core.nil_QMARK_,((function (cookie,temp__4423__auto__){
return (function (c){
return dogfort.middleware.cookies.decode_values.call(null,c,encoder);
});})(cookie,temp__4423__auto__))
.call(null,dogfort.middleware.cookies.parse_cookie_header.call(null,cookie))));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
/**
 * Write the main cookie value.
 */
dogfort.middleware.cookies.write_value = (function dogfort$middleware$cookies$write_value(key,value,encoder){
return encoder.call(null,cljs.core.PersistentArrayMap.fromArray([key,value], true, false));
});
/**
 * Is the attribute valid?
 */
dogfort.middleware.cookies.valid_attr_QMARK_ = (function dogfort$middleware$cookies$valid_attr_QMARK_(p__14836){
var vec__14841 = p__14836;
var key = cljs.core.nth.call(null,vec__14841,(0),null);
var value = cljs.core.nth.call(null,vec__14841,(1),null);
var and__4131__auto__ = cljs.core.contains_QMARK_.call(null,dogfort.middleware.cookies.set_cookie_attrs,key);
if(and__4131__auto__){
var and__4131__auto____$1 = cljs.core._EQ_.call(null,(-1),[cljs.core.str(value)].join('').indexOf(";"));
if(and__4131__auto____$1){
var G__14844 = (((key instanceof cljs.core.Keyword))?key.fqn:null);
switch (G__14844) {
case "max-age":
return cljs.core.integer_QMARK_.call(null,value);

break;
case "expires":
return ((value instanceof Date)) || (typeof value === 'string');

break;
default:
return true;

}
} else {
return and__4131__auto____$1;
}
} else {
return and__4131__auto__;
}
});
/**
 * Write a map of cookie attributes to a string.
 */
dogfort.middleware.cookies.write_attr_map = (function dogfort$middleware$cookies$write_attr_map(attrs){
if(cljs.core.every_QMARK_.call(null,dogfort.middleware.cookies.valid_attr_QMARK_,attrs)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),new cljs.core.Symbol(null,"valid-attr?","valid-attr?",657119621,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null))))].join('')));
}

var iter__4915__auto__ = (function dogfort$middleware$cookies$write_attr_map_$_iter__14854(s__14855){
return (new cljs.core.LazySeq(null,(function (){
var s__14855__$1 = s__14855;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__14855__$1);
if(temp__4425__auto__){
var s__14855__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14855__$2)){
var c__4913__auto__ = cljs.core.chunk_first.call(null,s__14855__$2);
var size__4914__auto__ = cljs.core.count.call(null,c__4913__auto__);
var b__14857 = cljs.core.chunk_buffer.call(null,size__4914__auto__);
if((function (){var i__14856 = (0);
while(true){
if((i__14856 < size__4914__auto__)){
var vec__14860 = cljs.core._nth.call(null,c__4913__auto__,i__14856);
var key = cljs.core.nth.call(null,vec__14860,(0),null);
var value = cljs.core.nth.call(null,vec__14860,(1),null);
cljs.core.chunk_append.call(null,b__14857,(function (){var attr_name = cljs.core.name.call(null,dogfort.middleware.cookies.set_cookie_attrs.call(null,key));
if(value === true){
return [cljs.core.str(";"),cljs.core.str(attr_name)].join('');
} else {
if(value === false){
return "";
} else {
return [cljs.core.str(";"),cljs.core.str(attr_name),cljs.core.str("="),cljs.core.str(value)].join('');

}
}
})());

var G__14862 = (i__14856 + (1));
i__14856 = G__14862;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14857),dogfort$middleware$cookies$write_attr_map_$_iter__14854.call(null,cljs.core.chunk_rest.call(null,s__14855__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14857),null);
}
} else {
var vec__14861 = cljs.core.first.call(null,s__14855__$2);
var key = cljs.core.nth.call(null,vec__14861,(0),null);
var value = cljs.core.nth.call(null,vec__14861,(1),null);
return cljs.core.cons.call(null,(function (){var attr_name = cljs.core.name.call(null,dogfort.middleware.cookies.set_cookie_attrs.call(null,key));
if(value === true){
return [cljs.core.str(";"),cljs.core.str(attr_name)].join('');
} else {
if(value === false){
return "";
} else {
return [cljs.core.str(";"),cljs.core.str(attr_name),cljs.core.str("="),cljs.core.str(value)].join('');

}
}
})(),dogfort$middleware$cookies$write_attr_map_$_iter__14854.call(null,cljs.core.rest.call(null,s__14855__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4915__auto__.call(null,attrs);
});
/**
 * Turn a map of cookies into a seq of strings for a Set-Cookie header.
 */
dogfort.middleware.cookies.write_cookies = (function dogfort$middleware$cookies$write_cookies(cookies,encoder){
var iter__4915__auto__ = (function dogfort$middleware$cookies$write_cookies_$_iter__14871(s__14872){
return (new cljs.core.LazySeq(null,(function (){
var s__14872__$1 = s__14872;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__14872__$1);
if(temp__4425__auto__){
var s__14872__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14872__$2)){
var c__4913__auto__ = cljs.core.chunk_first.call(null,s__14872__$2);
var size__4914__auto__ = cljs.core.count.call(null,c__4913__auto__);
var b__14874 = cljs.core.chunk_buffer.call(null,size__4914__auto__);
if((function (){var i__14873 = (0);
while(true){
if((i__14873 < size__4914__auto__)){
var vec__14877 = cljs.core._nth.call(null,c__4913__auto__,i__14873);
var key = cljs.core.nth.call(null,vec__14877,(0),null);
var value = cljs.core.nth.call(null,vec__14877,(1),null);
cljs.core.chunk_append.call(null,b__14874,((cljs.core.map_QMARK_.call(null,value))?cljs.core.apply.call(null,cljs.core.str,dogfort.middleware.cookies.write_value.call(null,key,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(value),encoder),dogfort.middleware.cookies.write_attr_map.call(null,cljs.core.dissoc.call(null,value,new cljs.core.Keyword(null,"value","value",305978217)))):dogfort.middleware.cookies.write_value.call(null,key,value,encoder)));

var G__14879 = (i__14873 + (1));
i__14873 = G__14879;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14874),dogfort$middleware$cookies$write_cookies_$_iter__14871.call(null,cljs.core.chunk_rest.call(null,s__14872__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14874),null);
}
} else {
var vec__14878 = cljs.core.first.call(null,s__14872__$2);
var key = cljs.core.nth.call(null,vec__14878,(0),null);
var value = cljs.core.nth.call(null,vec__14878,(1),null);
return cljs.core.cons.call(null,((cljs.core.map_QMARK_.call(null,value))?cljs.core.apply.call(null,cljs.core.str,dogfort.middleware.cookies.write_value.call(null,key,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(value),encoder),dogfort.middleware.cookies.write_attr_map.call(null,cljs.core.dissoc.call(null,value,new cljs.core.Keyword(null,"value","value",305978217)))):dogfort.middleware.cookies.write_value.call(null,key,value,encoder)),dogfort$middleware$cookies$write_cookies_$_iter__14871.call(null,cljs.core.rest.call(null,s__14872__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4915__auto__.call(null,cookies);
});
/**
 * Add a Set-Cookie header to a response if there is a :cookies key.
 */
dogfort.middleware.cookies.set_cookies = (function dogfort$middleware$cookies$set_cookies(response,encoder){
var temp__4423__auto__ = new cljs.core.Keyword(null,"cookies","cookies",1839416329).cljs$core$IFn$_invoke$arity$1(response);
if(cljs.core.truth_(temp__4423__auto__)){
var cookies = temp__4423__auto__;
return cljs.core.update_in.call(null,response,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"Set-Cookie"], null),cljs.core.concat,cljs.core.doall.call(null,dogfort.middleware.cookies.write_cookies.call(null,cookies,encoder)));
} else {
return response;
}
});
/**
 * Parses cookies in the request map. See: wrap-cookies.
 */
dogfort.middleware.cookies.cookies_request = (function dogfort$middleware$cookies$cookies_request(var_args){
var args__5208__auto__ = [];
var len__5201__auto___14886 = arguments.length;
var i__5202__auto___14887 = (0);
while(true){
if((i__5202__auto___14887 < len__5201__auto___14886)){
args__5208__auto__.push((arguments[i__5202__auto___14887]));

var G__14888 = (i__5202__auto___14887 + (1));
i__5202__auto___14887 = G__14888;
continue;
} else {
}
break;
}

var argseq__5209__auto__ = ((((1) < args__5208__auto__.length))?(new cljs.core.IndexedSeq(args__5208__auto__.slice((1)),(0))):null);
return dogfort.middleware.cookies.cookies_request.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5209__auto__);
});

dogfort.middleware.cookies.cookies_request.cljs$core$IFn$_invoke$arity$variadic = (function (request,p__14882){
var vec__14883 = p__14882;
var map__14884 = cljs.core.nth.call(null,vec__14883,(0),null);
var map__14884__$1 = ((((!((map__14884 == null)))?((((map__14884.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14884.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14884):map__14884);
var decoder = cljs.core.get.call(null,map__14884__$1,new cljs.core.Keyword(null,"decoder","decoder",1169558843),dogfort.util.codec.form_decode_str);
if(cljs.core.truth_(request.call(null,new cljs.core.Keyword(null,"cookies","cookies",1839416329)))){
return request;
} else {
return cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"cookies","cookies",1839416329),dogfort.middleware.cookies.parse_cookies.call(null,request,decoder));
}
});

dogfort.middleware.cookies.cookies_request.cljs$lang$maxFixedArity = (1);

dogfort.middleware.cookies.cookies_request.cljs$lang$applyTo = (function (seq14880){
var G__14881 = cljs.core.first.call(null,seq14880);
var seq14880__$1 = cljs.core.next.call(null,seq14880);
return dogfort.middleware.cookies.cookies_request.cljs$core$IFn$_invoke$arity$variadic(G__14881,seq14880__$1);
});
/**
 * For responses with :cookies, adds Set-Cookie header and returns response
 *   without :cookies. See: wrap-cookies.
 */
dogfort.middleware.cookies.cookies_response = (function dogfort$middleware$cookies$cookies_response(var_args){
var args__5208__auto__ = [];
var len__5201__auto___14896 = arguments.length;
var i__5202__auto___14897 = (0);
while(true){
if((i__5202__auto___14897 < len__5201__auto___14896)){
args__5208__auto__.push((arguments[i__5202__auto___14897]));

var G__14898 = (i__5202__auto___14897 + (1));
i__5202__auto___14897 = G__14898;
continue;
} else {
}
break;
}

var argseq__5209__auto__ = ((((1) < args__5208__auto__.length))?(new cljs.core.IndexedSeq(args__5208__auto__.slice((1)),(0))):null);
return dogfort.middleware.cookies.cookies_response.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5209__auto__);
});

dogfort.middleware.cookies.cookies_response.cljs$core$IFn$_invoke$arity$variadic = (function (response,p__14892){
var vec__14893 = p__14892;
var map__14894 = cljs.core.nth.call(null,vec__14893,(0),null);
var map__14894__$1 = ((((!((map__14894 == null)))?((((map__14894.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14894.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14894):map__14894);
var encoder = cljs.core.get.call(null,map__14894__$1,new cljs.core.Keyword(null,"encoder","encoder",-1113127834),dogfort.util.codec.form_encode);
var promise__5386__auto__ = redlobster.promise.promise.call(null);
var realise__5387__auto__ = ((function (promise__5386__auto__,vec__14893,map__14894,map__14894__$1,encoder){
return (function (promise__5386__auto____$1,value__5388__auto__){
return redlobster.promise.realise.call(null,promise__5386__auto____$1,value__5388__auto__);
});})(promise__5386__auto__,vec__14893,map__14894,map__14894__$1,encoder))
;
var realise_error__5389__auto__ = ((function (promise__5386__auto__,realise__5387__auto__,vec__14893,map__14894,map__14894__$1,encoder){
return (function (promise__5386__auto____$1,value__5388__auto__){
return redlobster.promise.realise_error.call(null,promise__5386__auto____$1,value__5388__auto__);
});})(promise__5386__auto__,realise__5387__auto__,vec__14893,map__14894,map__14894__$1,encoder))
;
var realise = cljs.core.partial.call(null,realise__5387__auto__,promise__5386__auto__);
var realise_error = cljs.core.partial.call(null,realise_error__5389__auto__,promise__5386__auto__);
redlobster.promise.on_realised.call(null,response,((function (promise__5386__auto__,realise__5387__auto__,realise_error__5389__auto__,realise,realise_error,vec__14893,map__14894,map__14894__$1,encoder){
return (function (p1__14889_SHARP_){
return realise.call(null,cljs.core.dissoc.call(null,dogfort.middleware.cookies.set_cookies.call(null,p1__14889_SHARP_,encoder),new cljs.core.Keyword(null,"cookies","cookies",1839416329)));
});})(promise__5386__auto__,realise__5387__auto__,realise_error__5389__auto__,realise,realise_error,vec__14893,map__14894,map__14894__$1,encoder))
,((function (promise__5386__auto__,realise__5387__auto__,realise_error__5389__auto__,realise,realise_error,vec__14893,map__14894,map__14894__$1,encoder){
return (function (){
return cljs.core.List.EMPTY;
});})(promise__5386__auto__,realise__5387__auto__,realise_error__5389__auto__,realise,realise_error,vec__14893,map__14894,map__14894__$1,encoder))
);

return promise__5386__auto__;
});

dogfort.middleware.cookies.cookies_response.cljs$lang$maxFixedArity = (1);

dogfort.middleware.cookies.cookies_response.cljs$lang$applyTo = (function (seq14890){
var G__14891 = cljs.core.first.call(null,seq14890);
var seq14890__$1 = cljs.core.next.call(null,seq14890);
return dogfort.middleware.cookies.cookies_response.cljs$core$IFn$_invoke$arity$variadic(G__14891,seq14890__$1);
});
/**
 * Parses the cookies in the request map, then assocs the resulting map
 *   to the :cookies key on the request.
 * 
 *   Accepts the following options:
 * 
 *   :decoder - a function to decode the cookie value. Expects a function that
 *   takes a string and returns a string. Defaults to URL-decoding.
 * 
 *   :encoder - a function to encode the cookie name and value. Expects a
 *   function that takes a name/value map and returns a string.
 *   Defaults to URL-encoding.
 * 
 *   Each cookie is represented as a map, with its value being held in the
 *   :value key. A cookie may optionally contain a :path, :domain or :port
 *   attribute.
 * 
 *   To set cookies, add a map to the :cookies key on the response. The values
 *   of the cookie map can either be strings, or maps containing the following
 *   keys:
 * 
 *   :value     - the new value of the cookie
 *   :path      - the subpath the cookie is valid for
 *   :domain    - the domain the cookie is valid for
 *   :max-age   - the maximum age in seconds of the cookie
 *   :expires   - a date string at which the cookie will expire
 *   :secure    - set to true if the cookie requires HTTPS, prevent HTTP access
 *   :http-only - set to true if the cookie is valid for HTTP and HTTPS only
 *   (ie. prevent JavaScript access)
 */
dogfort.middleware.cookies.wrap_cookies = (function dogfort$middleware$cookies$wrap_cookies(var_args){
var args__5208__auto__ = [];
var len__5201__auto___14905 = arguments.length;
var i__5202__auto___14906 = (0);
while(true){
if((i__5202__auto___14906 < len__5201__auto___14905)){
args__5208__auto__.push((arguments[i__5202__auto___14906]));

var G__14907 = (i__5202__auto___14906 + (1));
i__5202__auto___14906 = G__14907;
continue;
} else {
}
break;
}

var argseq__5209__auto__ = ((((1) < args__5208__auto__.length))?(new cljs.core.IndexedSeq(args__5208__auto__.slice((1)),(0))):null);
return dogfort.middleware.cookies.wrap_cookies.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5209__auto__);
});

dogfort.middleware.cookies.wrap_cookies.cljs$core$IFn$_invoke$arity$variadic = (function (handler,p__14901){
var vec__14902 = p__14901;
var map__14903 = cljs.core.nth.call(null,vec__14902,(0),null);
var map__14903__$1 = ((((!((map__14903 == null)))?((((map__14903.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14903.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14903):map__14903);
var decoder = cljs.core.get.call(null,map__14903__$1,new cljs.core.Keyword(null,"decoder","decoder",1169558843),dogfort.util.codec.form_decode_str);
var encoder = cljs.core.get.call(null,map__14903__$1,new cljs.core.Keyword(null,"encoder","encoder",-1113127834),dogfort.util.codec.form_encode);
return ((function (vec__14902,map__14903,map__14903__$1,decoder,encoder){
return (function (request){
return dogfort.middleware.cookies.cookies_response.call(null,handler.call(null,dogfort.middleware.cookies.cookies_request.call(null,request,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"decoder","decoder",1169558843),decoder], null))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"encoder","encoder",-1113127834),encoder], null));
});
;})(vec__14902,map__14903,map__14903__$1,decoder,encoder))
});

dogfort.middleware.cookies.wrap_cookies.cljs$lang$maxFixedArity = (1);

dogfort.middleware.cookies.wrap_cookies.cljs$lang$applyTo = (function (seq14899){
var G__14900 = cljs.core.first.call(null,seq14899);
var seq14899__$1 = cljs.core.next.call(null,seq14899);
return dogfort.middleware.cookies.wrap_cookies.cljs$core$IFn$_invoke$arity$variadic(G__14900,seq14899__$1);
});

//# sourceMappingURL=cookies.js.map