// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('dogfort.middleware.file');
goog.require('cljs.core');
goog.require('redlobster.promise');
goog.require('cljs.node');
goog.require('redlobster.stream');
goog.require('dogfort.util.time');
goog.require('dogfort.util.codec');
goog.require('dogfort.util.mime_type');
dogfort.middleware.file.fs = require("fs");
dogfort.middleware.file.path = require("path");
dogfort.middleware.file.crypto = require("crypto");
dogfort.middleware.file.normalise_path = (function dogfort$middleware$file$normalise_path(file,root){
var file__$1 = dogfort.middleware.file.path.join(root,file);
if(((cljs.core.count.call(null,file__$1) > cljs.core.count.call(null,root))) && (cljs.core._EQ_.call(null,root,file__$1.slice((0),cljs.core.count.call(null,root))))){
return file__$1;
} else {
return null;
}
});
dogfort.middleware.file.stat_file = (function dogfort$middleware$file$stat_file(file,opts){
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
var temp__4423__auto___9901 = dogfort.middleware.file.normalise_path.call(null,file,new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(opts));
if(cljs.core.truth_(temp__4423__auto___9901)){
var file_9902__$1 = temp__4423__auto___9901;
dogfort.middleware.file.fs.stat(file_9902__$1,((function (file_9902__$1,temp__4423__auto___9901,promise__9642__auto__,realise__9643__auto__,realise_error__9645__auto__,realise,realise_error){
return (function (err,stats){
if(cljs.core.truth_(err)){
return realise_error.call(null,err);
} else {
(stats["path"] = file_9902__$1);

return realise.call(null,stats);
}
});})(file_9902__$1,temp__4423__auto___9901,promise__9642__auto__,realise__9643__auto__,realise_error__9645__auto__,realise,realise_error))
);
} else {
realise_error.call(null,null);
}

return promise__9642__auto__;
});
dogfort.middleware.file.etag = (function dogfort$middleware$file$etag(stats){
return dogfort.middleware.file.crypto.createHash("md5").update([cljs.core.str(stats.ino),cljs.core.str("/"),cljs.core.str(stats.mtime),cljs.core.str("/"),cljs.core.str(stats.size)].join('')).digest("hex");
});
dogfort.middleware.file.last_modified = (function dogfort$middleware$file$last_modified(stats){
return dogfort.util.time.rfc822_date.call(null,stats.mtime);
});
dogfort.middleware.file.expand_dir = (function dogfort$middleware$file$expand_dir(path){
try{return dogfort.middleware.file.fs.realpathSync(path);
}catch (e9904){var e = e9904;
throw [cljs.core.str("Directory does not exist: "),cljs.core.str(path)].join('');
}});
dogfort.middleware.file.file_response = (function dogfort$middleware$file$file_response(stats){
var file = stats.path;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"content-type","content-type",-508222634),dogfort.util.mime_type.ext_mime_type.call(null,file),new cljs.core.Keyword(null,"content-length","content-length",441319507),stats.size,new cljs.core.Keyword(null,"last-modified","last-modified",1593411791),dogfort.middleware.file.last_modified.call(null,stats),new cljs.core.Keyword(null,"etag","etag",-329255476),dogfort.middleware.file.etag.call(null,stats)], null),new cljs.core.Keyword(null,"body","body",-2049205669),redlobster.stream.slurp.call(null,file)], null);
});
dogfort.middleware.file.wrap_file = (function dogfort$middleware$file$wrap_file(var_args){
var args__5208__auto__ = [];
var len__5201__auto___9911 = arguments.length;
var i__5202__auto___9912 = (0);
while(true){
if((i__5202__auto___9912 < len__5201__auto___9911)){
args__5208__auto__.push((arguments[i__5202__auto___9912]));

var G__9913 = (i__5202__auto___9912 + (1));
i__5202__auto___9912 = G__9913;
continue;
} else {
}
break;
}

var argseq__5209__auto__ = ((((2) < args__5208__auto__.length))?(new cljs.core.IndexedSeq(args__5208__auto__.slice((2)),(0))):null);
return dogfort.middleware.file.wrap_file.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5209__auto__);
});

dogfort.middleware.file.wrap_file.cljs$core$IFn$_invoke$arity$variadic = (function (app,root_path,p__9909){
var vec__9910 = p__9909;
var opts = cljs.core.nth.call(null,vec__9910,(0),null);
var opts__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"root","root",-448657453),dogfort.middleware.file.expand_dir.call(null,root_path),new cljs.core.Keyword(null,"index-files?","index-files?",1158816198),true,new cljs.core.Keyword(null,"allow-symlinks?","allow-symlinks?",885237804),false], null),opts);
return ((function (opts__$1,vec__9910,opts){
return (function (req){
if(!((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(req))) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(req))))){
return app.call(null,req);
} else {
var file = dogfort.util.codec.url_decode.call(null,new cljs.core.Keyword(null,"uri","uri",-774711847).cljs$core$IFn$_invoke$arity$1(req)).slice((1));
var stat_p = dogfort.middleware.file.stat_file.call(null,file,opts__$1);
var promise__9651__auto__ = redlobster.promise.promise.call(null);
var realise__9652__auto__ = ((function (promise__9651__auto__,file,stat_p,opts__$1,vec__9910,opts){
return (function (promise__9651__auto____$1,value__9653__auto__){
return redlobster.promise.realise.call(null,promise__9651__auto____$1,value__9653__auto__);
});})(promise__9651__auto__,file,stat_p,opts__$1,vec__9910,opts))
;
var realise_error__9654__auto__ = ((function (promise__9651__auto__,realise__9652__auto__,file,stat_p,opts__$1,vec__9910,opts){
return (function (promise__9651__auto____$1,value__9653__auto__){
return redlobster.promise.realise_error.call(null,promise__9651__auto____$1,value__9653__auto__);
});})(promise__9651__auto__,realise__9652__auto__,file,stat_p,opts__$1,vec__9910,opts))
;
var realise = cljs.core.partial.call(null,realise__9652__auto__,promise__9651__auto__);
var realise_error = cljs.core.partial.call(null,realise_error__9654__auto__,promise__9651__auto__);
redlobster.promise.on_realised.call(null,stat_p,((function (promise__9651__auto__,realise__9652__auto__,realise_error__9654__auto__,realise,realise_error,file,stat_p,opts__$1,vec__9910,opts){
return (function (p1__9905_SHARP_){
return realise.call(null,dogfort.middleware.file.file_response.call(null,p1__9905_SHARP_));
});})(promise__9651__auto__,realise__9652__auto__,realise_error__9654__auto__,realise,realise_error,file,stat_p,opts__$1,vec__9910,opts))
,((function (promise__9651__auto__,realise__9652__auto__,realise_error__9654__auto__,realise,realise_error,file,stat_p,opts__$1,vec__9910,opts){
return (function (){
return realise.call(null,app.call(null,req));
});})(promise__9651__auto__,realise__9652__auto__,realise_error__9654__auto__,realise,realise_error,file,stat_p,opts__$1,vec__9910,opts))
);

return promise__9651__auto__;
}
});
;})(opts__$1,vec__9910,opts))
});

dogfort.middleware.file.wrap_file.cljs$lang$maxFixedArity = (2);

dogfort.middleware.file.wrap_file.cljs$lang$applyTo = (function (seq9906){
var G__9907 = cljs.core.first.call(null,seq9906);
var seq9906__$1 = cljs.core.next.call(null,seq9906);
var G__9908 = cljs.core.first.call(null,seq9906__$1);
var seq9906__$2 = cljs.core.next.call(null,seq9906__$1);
return dogfort.middleware.file.wrap_file.cljs$core$IFn$_invoke$arity$variadic(G__9907,G__9908,seq9906__$2);
});

//# sourceMappingURL=file.js.map