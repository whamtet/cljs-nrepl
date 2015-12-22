// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('redlobster.stream');
goog.require('cljs.core');
goog.require('redlobster.promise');
goog.require('redlobster.events');
goog.require('cljs.node');
goog.require('cljs.yunoincore');
redlobster.stream.Stream = require("stream");
redlobster.stream.createReadStream = (require("fs")["createReadStream"]);

redlobster.stream.createWriteStream = (require("fs")["createWriteStream"]);

/**
 * @interface
 */
redlobster.stream.IStream = function(){};

redlobster.stream.readable_QMARK_ = (function redlobster$stream$readable_QMARK_(this$){
if((!((this$ == null))) && (!((this$.redlobster$stream$IStream$readable_QMARK_$arity$1 == null)))){
return this$.redlobster$stream$IStream$readable_QMARK_$arity$1(this$);
} else {
var x__4798__auto__ = (((this$ == null))?null:this$);
var m__4799__auto__ = (redlobster.stream.readable_QMARK_[goog.typeOf(x__4798__auto__)]);
if(!((m__4799__auto__ == null))){
return m__4799__auto__.call(null,this$);
} else {
var m__4799__auto____$1 = (redlobster.stream.readable_QMARK_["_"]);
if(!((m__4799__auto____$1 == null))){
return m__4799__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IStream.readable?",this$);
}
}
}
});

redlobster.stream.writable_QMARK_ = (function redlobster$stream$writable_QMARK_(this$){
if((!((this$ == null))) && (!((this$.redlobster$stream$IStream$writable_QMARK_$arity$1 == null)))){
return this$.redlobster$stream$IStream$writable_QMARK_$arity$1(this$);
} else {
var x__4798__auto__ = (((this$ == null))?null:this$);
var m__4799__auto__ = (redlobster.stream.writable_QMARK_[goog.typeOf(x__4798__auto__)]);
if(!((m__4799__auto__ == null))){
return m__4799__auto__.call(null,this$);
} else {
var m__4799__auto____$1 = (redlobster.stream.writable_QMARK_["_"]);
if(!((m__4799__auto____$1 == null))){
return m__4799__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IStream.writable?",this$);
}
}
}
});

redlobster.stream.set_encoding = (function redlobster$stream$set_encoding(this$,encoding){
if((!((this$ == null))) && (!((this$.redlobster$stream$IStream$set_encoding$arity$2 == null)))){
return this$.redlobster$stream$IStream$set_encoding$arity$2(this$,encoding);
} else {
var x__4798__auto__ = (((this$ == null))?null:this$);
var m__4799__auto__ = (redlobster.stream.set_encoding[goog.typeOf(x__4798__auto__)]);
if(!((m__4799__auto__ == null))){
return m__4799__auto__.call(null,this$,encoding);
} else {
var m__4799__auto____$1 = (redlobster.stream.set_encoding["_"]);
if(!((m__4799__auto____$1 == null))){
return m__4799__auto____$1.call(null,this$,encoding);
} else {
throw cljs.core.missing_protocol.call(null,"IStream.set-encoding",this$);
}
}
}
});

redlobster.stream.pause = (function redlobster$stream$pause(this$){
if((!((this$ == null))) && (!((this$.redlobster$stream$IStream$pause$arity$1 == null)))){
return this$.redlobster$stream$IStream$pause$arity$1(this$);
} else {
var x__4798__auto__ = (((this$ == null))?null:this$);
var m__4799__auto__ = (redlobster.stream.pause[goog.typeOf(x__4798__auto__)]);
if(!((m__4799__auto__ == null))){
return m__4799__auto__.call(null,this$);
} else {
var m__4799__auto____$1 = (redlobster.stream.pause["_"]);
if(!((m__4799__auto____$1 == null))){
return m__4799__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IStream.pause",this$);
}
}
}
});

redlobster.stream.resume = (function redlobster$stream$resume(this$){
if((!((this$ == null))) && (!((this$.redlobster$stream$IStream$resume$arity$1 == null)))){
return this$.redlobster$stream$IStream$resume$arity$1(this$);
} else {
var x__4798__auto__ = (((this$ == null))?null:this$);
var m__4799__auto__ = (redlobster.stream.resume[goog.typeOf(x__4798__auto__)]);
if(!((m__4799__auto__ == null))){
return m__4799__auto__.call(null,this$);
} else {
var m__4799__auto____$1 = (redlobster.stream.resume["_"]);
if(!((m__4799__auto____$1 == null))){
return m__4799__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IStream.resume",this$);
}
}
}
});

redlobster.stream.destroy = (function redlobster$stream$destroy(this$){
if((!((this$ == null))) && (!((this$.redlobster$stream$IStream$destroy$arity$1 == null)))){
return this$.redlobster$stream$IStream$destroy$arity$1(this$);
} else {
var x__4798__auto__ = (((this$ == null))?null:this$);
var m__4799__auto__ = (redlobster.stream.destroy[goog.typeOf(x__4798__auto__)]);
if(!((m__4799__auto__ == null))){
return m__4799__auto__.call(null,this$);
} else {
var m__4799__auto____$1 = (redlobster.stream.destroy["_"]);
if(!((m__4799__auto____$1 == null))){
return m__4799__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IStream.destroy",this$);
}
}
}
});

redlobster.stream.pipe = (function redlobster$stream$pipe(this$,destination){
if((!((this$ == null))) && (!((this$.redlobster$stream$IStream$pipe$arity$2 == null)))){
return this$.redlobster$stream$IStream$pipe$arity$2(this$,destination);
} else {
var x__4798__auto__ = (((this$ == null))?null:this$);
var m__4799__auto__ = (redlobster.stream.pipe[goog.typeOf(x__4798__auto__)]);
if(!((m__4799__auto__ == null))){
return m__4799__auto__.call(null,this$,destination);
} else {
var m__4799__auto____$1 = (redlobster.stream.pipe["_"]);
if(!((m__4799__auto____$1 == null))){
return m__4799__auto____$1.call(null,this$,destination);
} else {
throw cljs.core.missing_protocol.call(null,"IStream.pipe",this$);
}
}
}
});

redlobster.stream.pipe = (function redlobster$stream$pipe(this$,destination,options){
if((!((this$ == null))) && (!((this$.redlobster$stream$IStream$pipe$arity$3 == null)))){
return this$.redlobster$stream$IStream$pipe$arity$3(this$,destination,options);
} else {
var x__4798__auto__ = (((this$ == null))?null:this$);
var m__4799__auto__ = (redlobster.stream.pipe[goog.typeOf(x__4798__auto__)]);
if(!((m__4799__auto__ == null))){
return m__4799__auto__.call(null,this$,destination,options);
} else {
var m__4799__auto____$1 = (redlobster.stream.pipe["_"]);
if(!((m__4799__auto____$1 == null))){
return m__4799__auto____$1.call(null,this$,destination,options);
} else {
throw cljs.core.missing_protocol.call(null,"IStream.pipe",this$);
}
}
}
});

redlobster.stream.write = (function redlobster$stream$write(this$,data){
if((!((this$ == null))) && (!((this$.redlobster$stream$IStream$write$arity$2 == null)))){
return this$.redlobster$stream$IStream$write$arity$2(this$,data);
} else {
var x__4798__auto__ = (((this$ == null))?null:this$);
var m__4799__auto__ = (redlobster.stream.write[goog.typeOf(x__4798__auto__)]);
if(!((m__4799__auto__ == null))){
return m__4799__auto__.call(null,this$,data);
} else {
var m__4799__auto____$1 = (redlobster.stream.write["_"]);
if(!((m__4799__auto____$1 == null))){
return m__4799__auto____$1.call(null,this$,data);
} else {
throw cljs.core.missing_protocol.call(null,"IStream.write",this$);
}
}
}
});

redlobster.stream.write = (function redlobster$stream$write(this$,data,encoding){
if((!((this$ == null))) && (!((this$.redlobster$stream$IStream$write$arity$3 == null)))){
return this$.redlobster$stream$IStream$write$arity$3(this$,data,encoding);
} else {
var x__4798__auto__ = (((this$ == null))?null:this$);
var m__4799__auto__ = (redlobster.stream.write[goog.typeOf(x__4798__auto__)]);
if(!((m__4799__auto__ == null))){
return m__4799__auto__.call(null,this$,data,encoding);
} else {
var m__4799__auto____$1 = (redlobster.stream.write["_"]);
if(!((m__4799__auto____$1 == null))){
return m__4799__auto____$1.call(null,this$,data,encoding);
} else {
throw cljs.core.missing_protocol.call(null,"IStream.write",this$);
}
}
}
});

redlobster.stream.end = (function redlobster$stream$end(this$){
if((!((this$ == null))) && (!((this$.redlobster$stream$IStream$end$arity$1 == null)))){
return this$.redlobster$stream$IStream$end$arity$1(this$);
} else {
var x__4798__auto__ = (((this$ == null))?null:this$);
var m__4799__auto__ = (redlobster.stream.end[goog.typeOf(x__4798__auto__)]);
if(!((m__4799__auto__ == null))){
return m__4799__auto__.call(null,this$);
} else {
var m__4799__auto____$1 = (redlobster.stream.end["_"]);
if(!((m__4799__auto____$1 == null))){
return m__4799__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IStream.end",this$);
}
}
}
});

redlobster.stream.end = (function redlobster$stream$end(this$,data){
if((!((this$ == null))) && (!((this$.redlobster$stream$IStream$end$arity$2 == null)))){
return this$.redlobster$stream$IStream$end$arity$2(this$,data);
} else {
var x__4798__auto__ = (((this$ == null))?null:this$);
var m__4799__auto__ = (redlobster.stream.end[goog.typeOf(x__4798__auto__)]);
if(!((m__4799__auto__ == null))){
return m__4799__auto__.call(null,this$,data);
} else {
var m__4799__auto____$1 = (redlobster.stream.end["_"]);
if(!((m__4799__auto____$1 == null))){
return m__4799__auto____$1.call(null,this$,data);
} else {
throw cljs.core.missing_protocol.call(null,"IStream.end",this$);
}
}
}
});

redlobster.stream.end = (function redlobster$stream$end(this$,data,encoding){
if((!((this$ == null))) && (!((this$.redlobster$stream$IStream$end$arity$3 == null)))){
return this$.redlobster$stream$IStream$end$arity$3(this$,data,encoding);
} else {
var x__4798__auto__ = (((this$ == null))?null:this$);
var m__4799__auto__ = (redlobster.stream.end[goog.typeOf(x__4798__auto__)]);
if(!((m__4799__auto__ == null))){
return m__4799__auto__.call(null,this$,data,encoding);
} else {
var m__4799__auto____$1 = (redlobster.stream.end["_"]);
if(!((m__4799__auto____$1 == null))){
return m__4799__auto____$1.call(null,this$,data,encoding);
} else {
throw cljs.core.missing_protocol.call(null,"IStream.end",this$);
}
}
}
});

redlobster.stream.destroy_soon = (function redlobster$stream$destroy_soon(this$){
if((!((this$ == null))) && (!((this$.redlobster$stream$IStream$destroy_soon$arity$1 == null)))){
return this$.redlobster$stream$IStream$destroy_soon$arity$1(this$);
} else {
var x__4798__auto__ = (((this$ == null))?null:this$);
var m__4799__auto__ = (redlobster.stream.destroy_soon[goog.typeOf(x__4798__auto__)]);
if(!((m__4799__auto__ == null))){
return m__4799__auto__.call(null,this$);
} else {
var m__4799__auto____$1 = (redlobster.stream.destroy_soon["_"]);
if(!((m__4799__auto____$1 == null))){
return m__4799__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IStream.destroy-soon",this$);
}
}
}
});

redlobster.stream.Stream.prototype.redlobster$stream$IStream$ = true;

redlobster.stream.Stream.prototype.redlobster$stream$IStream$readable_QMARK_$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.readable;
});

redlobster.stream.Stream.prototype.redlobster$stream$IStream$writable_QMARK_$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.writable;
});

redlobster.stream.Stream.prototype.redlobster$stream$IStream$set_encoding$arity$2 = (function (this$,encoding){
var this$__$1 = this;
return this$__$1.setEncoding(encoding);
});

redlobster.stream.Stream.prototype.redlobster$stream$IStream$pause$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.pause();
});

redlobster.stream.Stream.prototype.redlobster$stream$IStream$resume$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.resume();
});

redlobster.stream.Stream.prototype.redlobster$stream$IStream$destroy$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.destroy();
});

redlobster.stream.Stream.prototype.redlobster$stream$IStream$pipe$arity$2 = (function (this$,destination){
var this$__$1 = this;
return this$__$1.pipe(destination);
});

redlobster.stream.Stream.prototype.redlobster$stream$IStream$pipe$arity$3 = (function (this$,destination,options){
var this$__$1 = this;
return this$__$1.pipe(destination,cljs.yunoincore.clj__GT_js.call(null,options));
});

redlobster.stream.Stream.prototype.redlobster$stream$IStream$write$arity$2 = (function (this$,data){
var this$__$1 = this;
return this$__$1.write(data);
});

redlobster.stream.Stream.prototype.redlobster$stream$IStream$write$arity$3 = (function (this$,data,encoding){
var this$__$1 = this;
return this$__$1.write(data,encoding);
});

redlobster.stream.Stream.prototype.redlobster$stream$IStream$end$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.end();
});

redlobster.stream.Stream.prototype.redlobster$stream$IStream$end$arity$2 = (function (this$,data){
var this$__$1 = this;
return this$__$1.end(data);
});

redlobster.stream.Stream.prototype.redlobster$stream$IStream$end$arity$3 = (function (this$,data,encoding){
var this$__$1 = this;
return this$__$1.end(data,encoding);
});

redlobster.stream.Stream.prototype.redlobster$stream$IStream$destroy_soon$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.destroySoon();
});
redlobster.stream.slurp = (function redlobster$stream$slurp(path){
return redlobster.stream.createReadStream.call(null,path);
});
redlobster.stream.spit = (function redlobster$stream$spit(path){
return redlobster.stream.createWriteStream.call(null,path);
});
redlobster.stream.append_data = (function redlobster$stream$append_data(current,data,encoding){
var data__$1 = (((data instanceof Buffer))?data.toString(encoding):data);
return [cljs.core.str(current),cljs.core.str(data__$1)].join('');
});
redlobster.stream.read_stream = (function redlobster$stream$read_stream(var_args){
var args__5208__auto__ = [];
var len__5201__auto___9883 = arguments.length;
var i__5202__auto___9884 = (0);
while(true){
if((i__5202__auto___9884 < len__5201__auto___9883)){
args__5208__auto__.push((arguments[i__5202__auto___9884]));

var G__9885 = (i__5202__auto___9884 + (1));
i__5202__auto___9884 = G__9885;
continue;
} else {
}
break;
}

var argseq__5209__auto__ = ((((1) < args__5208__auto__.length))?(new cljs.core.IndexedSeq(args__5208__auto__.slice((1)),(0))):null);
return redlobster.stream.read_stream.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5209__auto__);
});

redlobster.stream.read_stream.cljs$core$IFn$_invoke$arity$variadic = (function (stream,p__9881){
var vec__9882 = p__9881;
var encoding = cljs.core.nth.call(null,vec__9882,(0),null);
var promise__9642__auto__ = redlobster.promise.promise.call(null);
var realise__9643__auto__ = ((function (promise__9642__auto__,vec__9882,encoding){
return (function (promise__9642__auto____$1,value__9644__auto__){
return redlobster.promise.realise.call(null,promise__9642__auto____$1,value__9644__auto__);
});})(promise__9642__auto__,vec__9882,encoding))
;
var realise_error__9645__auto__ = ((function (promise__9642__auto__,realise__9643__auto__,vec__9882,encoding){
return (function (promise__9642__auto____$1,value__9644__auto__){
return redlobster.promise.realise_error.call(null,promise__9642__auto____$1,value__9644__auto__);
});})(promise__9642__auto__,realise__9643__auto__,vec__9882,encoding))
;
var realise = cljs.core.partial.call(null,realise__9643__auto__,promise__9642__auto__);
var realise_error = cljs.core.partial.call(null,realise_error__9645__auto__,promise__9642__auto__);
var content_9886 = cljs.core.atom.call(null,"");
var encoding_9887__$1 = (function (){var or__4143__auto__ = encoding;
if(cljs.core.truth_(or__4143__auto__)){
return or__4143__auto__;
} else {
return "utf8";
}
})();
redlobster.events.on.call(null,stream,new cljs.core.Keyword(null,"error","error",-978969032),((function (content_9886,encoding_9887__$1,promise__9642__auto__,realise__9643__auto__,realise_error__9645__auto__,realise,realise_error,vec__9882,encoding){
return (function (p1__9878_SHARP_){
return realise_error.call(null,p1__9878_SHARP_);
});})(content_9886,encoding_9887__$1,promise__9642__auto__,realise__9643__auto__,realise_error__9645__auto__,realise,realise_error,vec__9882,encoding))
);

redlobster.events.on.call(null,stream,new cljs.core.Keyword(null,"data","data",-232669377),((function (content_9886,encoding_9887__$1,promise__9642__auto__,realise__9643__auto__,realise_error__9645__auto__,realise,realise_error,vec__9882,encoding){
return (function (data){
return cljs.core.swap_BANG_.call(null,content_9886,redlobster.stream.append_data,data,encoding_9887__$1);
});})(content_9886,encoding_9887__$1,promise__9642__auto__,realise__9643__auto__,realise_error__9645__auto__,realise,realise_error,vec__9882,encoding))
);

redlobster.events.on.call(null,stream,new cljs.core.Keyword(null,"end","end",-268185958),((function (content_9886,encoding_9887__$1,promise__9642__auto__,realise__9643__auto__,realise_error__9645__auto__,realise,realise_error,vec__9882,encoding){
return (function (){
return realise.call(null,cljs.core.deref.call(null,content_9886));
});})(content_9886,encoding_9887__$1,promise__9642__auto__,realise__9643__auto__,realise_error__9645__auto__,realise,realise_error,vec__9882,encoding))
);

return promise__9642__auto__;
});

redlobster.stream.read_stream.cljs$lang$maxFixedArity = (1);

redlobster.stream.read_stream.cljs$lang$applyTo = (function (seq9879){
var G__9880 = cljs.core.first.call(null,seq9879);
var seq9879__$1 = cljs.core.next.call(null,seq9879);
return redlobster.stream.read_stream.cljs$core$IFn$_invoke$arity$variadic(G__9880,seq9879__$1);
});

//# sourceMappingURL=stream.js.map