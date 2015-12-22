// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('redlobster.promise');
goog.require('cljs.core');
goog.require('redlobster.events');

/**
 * @interface
 */
redlobster.promise.IPromise = function(){};

redlobster.promise.realised_QMARK_ = (function redlobster$promise$realised_QMARK_(this$){
if((!((this$ == null))) && (!((this$.redlobster$promise$IPromise$realised_QMARK_$arity$1 == null)))){
return this$.redlobster$promise$IPromise$realised_QMARK_$arity$1(this$);
} else {
var x__4798__auto__ = (((this$ == null))?null:this$);
var m__4799__auto__ = (redlobster.promise.realised_QMARK_[goog.typeOf(x__4798__auto__)]);
if(!((m__4799__auto__ == null))){
return m__4799__auto__.call(null,this$);
} else {
var m__4799__auto____$1 = (redlobster.promise.realised_QMARK_["_"]);
if(!((m__4799__auto____$1 == null))){
return m__4799__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IPromise.realised?",this$);
}
}
}
});

redlobster.promise.failed_QMARK_ = (function redlobster$promise$failed_QMARK_(this$){
if((!((this$ == null))) && (!((this$.redlobster$promise$IPromise$failed_QMARK_$arity$1 == null)))){
return this$.redlobster$promise$IPromise$failed_QMARK_$arity$1(this$);
} else {
var x__4798__auto__ = (((this$ == null))?null:this$);
var m__4799__auto__ = (redlobster.promise.failed_QMARK_[goog.typeOf(x__4798__auto__)]);
if(!((m__4799__auto__ == null))){
return m__4799__auto__.call(null,this$);
} else {
var m__4799__auto____$1 = (redlobster.promise.failed_QMARK_["_"]);
if(!((m__4799__auto____$1 == null))){
return m__4799__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IPromise.failed?",this$);
}
}
}
});

redlobster.promise.realise = (function redlobster$promise$realise(this$,value){
if((!((this$ == null))) && (!((this$.redlobster$promise$IPromise$realise$arity$2 == null)))){
return this$.redlobster$promise$IPromise$realise$arity$2(this$,value);
} else {
var x__4798__auto__ = (((this$ == null))?null:this$);
var m__4799__auto__ = (redlobster.promise.realise[goog.typeOf(x__4798__auto__)]);
if(!((m__4799__auto__ == null))){
return m__4799__auto__.call(null,this$,value);
} else {
var m__4799__auto____$1 = (redlobster.promise.realise["_"]);
if(!((m__4799__auto____$1 == null))){
return m__4799__auto____$1.call(null,this$,value);
} else {
throw cljs.core.missing_protocol.call(null,"IPromise.realise",this$);
}
}
}
});

redlobster.promise.realise_error = (function redlobster$promise$realise_error(this$,value){
if((!((this$ == null))) && (!((this$.redlobster$promise$IPromise$realise_error$arity$2 == null)))){
return this$.redlobster$promise$IPromise$realise_error$arity$2(this$,value);
} else {
var x__4798__auto__ = (((this$ == null))?null:this$);
var m__4799__auto__ = (redlobster.promise.realise_error[goog.typeOf(x__4798__auto__)]);
if(!((m__4799__auto__ == null))){
return m__4799__auto__.call(null,this$,value);
} else {
var m__4799__auto____$1 = (redlobster.promise.realise_error["_"]);
if(!((m__4799__auto____$1 == null))){
return m__4799__auto____$1.call(null,this$,value);
} else {
throw cljs.core.missing_protocol.call(null,"IPromise.realise-error",this$);
}
}
}
});

redlobster.promise.on_realised = (function redlobster$promise$on_realised(this$,on_success,on_error){
if((!((this$ == null))) && (!((this$.redlobster$promise$IPromise$on_realised$arity$3 == null)))){
return this$.redlobster$promise$IPromise$on_realised$arity$3(this$,on_success,on_error);
} else {
var x__4798__auto__ = (((this$ == null))?null:this$);
var m__4799__auto__ = (redlobster.promise.on_realised[goog.typeOf(x__4798__auto__)]);
if(!((m__4799__auto__ == null))){
return m__4799__auto__.call(null,this$,on_success,on_error);
} else {
var m__4799__auto____$1 = (redlobster.promise.on_realised["_"]);
if(!((m__4799__auto____$1 == null))){
return m__4799__auto____$1.call(null,this$,on_success,on_error);
} else {
throw cljs.core.missing_protocol.call(null,"IPromise.on-realised",this$);
}
}
}
});

redlobster.promise.promise_QMARK_ = (function redlobster$promise$promise_QMARK_(v){
if(!((v == null))){
if((false) || (v.redlobster$promise$IPromise$)){
return true;
} else {
if((!v.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,redlobster.promise.IPromise,v);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,redlobster.promise.IPromise,v);
}
});

/**
* @constructor
 * @implements {redlobster.promise.IPromise}
 * @implements {cljs.core.IDeref}
*/
redlobster.promise.Promise = (function (ee){
this.ee = ee;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
redlobster.promise.Promise.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var realised = self__.ee.__realised;
var value = self__.ee.__value;
if(cljs.core.not.call(null,realised)){
return new cljs.core.Keyword("redlobster.promise","not-realised","redlobster.promise/not-realised",332544846);
} else {
return value;

}
});

redlobster.promise.Promise.prototype.redlobster$promise$IPromise$ = true;

redlobster.promise.Promise.prototype.redlobster$promise$IPromise$realised_QMARK_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((self__.ee.__realised == null)){
return false;
} else {
return true;
}
});

redlobster.promise.Promise.prototype.redlobster$promise$IPromise$failed_QMARK_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var and__4131__auto__ = redlobster.promise.realised_QMARK_.call(null,this$__$1);
if(cljs.core.truth_(and__4131__auto__)){
return cljs.core._EQ_.call(null,"error",self__.ee.__realised);
} else {
return and__4131__auto__;
}
});

redlobster.promise.Promise.prototype.redlobster$promise$IPromise$realise$arity$2 = (function (this$,value){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(redlobster.promise.realised_QMARK_.call(null,this$__$1))){
throw new cljs.core.Keyword("redlobster.promise","already-realised","redlobster.promise/already-realised",-1081920201);
} else {
if(cljs.core.truth_(redlobster.promise.promise_QMARK_.call(null,value))){
return redlobster.promise.on_realised.call(null,value,((function (this$__$1){
return (function (p1__8298_SHARP_){
return redlobster.promise.realise.call(null,this$__$1,p1__8298_SHARP_);
});})(this$__$1))
,((function (this$__$1){
return (function (p1__8299_SHARP_){
return redlobster.promise.realise_error.call(null,this$__$1,p1__8299_SHARP_);
});})(this$__$1))
);
} else {
var G__8302 = self__.ee;
(G__8302["__realised"] = "success");

(G__8302["__value"] = value);

redlobster.events.emit.call(null,G__8302,new cljs.core.Keyword(null,"realise-success","realise-success",-1942827085),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null));

return G__8302;
}
}
});

redlobster.promise.Promise.prototype.redlobster$promise$IPromise$realise_error$arity$2 = (function (this$,value){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(redlobster.promise.realised_QMARK_.call(null,this$__$1))){
throw new cljs.core.Keyword("redlobster.promise","already-realised","redlobster.promise/already-realised",-1081920201);
} else {
if(cljs.core.truth_(redlobster.promise.promise_QMARK_.call(null,value))){
return redlobster.promise.on_realised.call(null,value,((function (this$__$1){
return (function (p1__8300_SHARP_){
return redlobster.promise.realise.call(null,this$__$1,p1__8300_SHARP_);
});})(this$__$1))
,((function (this$__$1){
return (function (p1__8301_SHARP_){
return redlobster.promise.realise_error.call(null,this$__$1,p1__8301_SHARP_);
});})(this$__$1))
);
} else {
var G__8303 = self__.ee;
(G__8303["__realised"] = "error");

(G__8303["__value"] = value);

redlobster.events.emit.call(null,G__8303,new cljs.core.Keyword(null,"realise-error","realise-error",402975089),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null));

return G__8303;
}
}
});

redlobster.promise.Promise.prototype.redlobster$promise$IPromise$on_realised$arity$3 = (function (this$,on_success,on_error){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(redlobster.promise.realised_QMARK_.call(null,this$__$1))){
if(cljs.core.truth_(redlobster.promise.failed_QMARK_.call(null,this$__$1))){
return on_error.call(null,cljs.core.deref.call(null,this$__$1));
} else {
return on_success.call(null,cljs.core.deref.call(null,this$__$1));
}
} else {
var G__8304 = self__.ee;
redlobster.events.on.call(null,G__8304,new cljs.core.Keyword(null,"realise-success","realise-success",-1942827085),on_success);

redlobster.events.on.call(null,G__8304,new cljs.core.Keyword(null,"realise-error","realise-error",402975089),on_error);

return G__8304;
}
});

redlobster.promise.Promise.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ee","ee",-2011118369,null)], null);
});

redlobster.promise.Promise.cljs$lang$type = true;

redlobster.promise.Promise.cljs$lang$ctorStr = "redlobster.promise/Promise";

redlobster.promise.Promise.cljs$lang$ctorPrWriter = (function (this__4741__auto__,writer__4742__auto__,opt__4743__auto__){
return cljs.core._write.call(null,writer__4742__auto__,"redlobster.promise/Promise");
});

redlobster.promise.__GT_Promise = (function redlobster$promise$__GT_Promise(ee){
return (new redlobster.promise.Promise(ee));
});

redlobster.promise.promise = (function redlobster$promise$promise(var_args){
var args8305 = [];
var len__5201__auto___8310 = arguments.length;
var i__5202__auto___8311 = (0);
while(true){
if((i__5202__auto___8311 < len__5201__auto___8310)){
args8305.push((arguments[i__5202__auto___8311]));

var G__8312 = (i__5202__auto___8311 + (1));
i__5202__auto___8311 = G__8312;
continue;
} else {
}
break;
}

var G__8307 = args8305.length;
switch (G__8307) {
case 0:
return redlobster.promise.promise.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return redlobster.promise.promise.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8305.length)].join('')));

}
});

redlobster.promise.promise.cljs$core$IFn$_invoke$arity$0 = (function (){
return (new redlobster.promise.Promise((function (){var G__8308 = redlobster.events.event_emitter.call(null);
(G__8308["__realised"] = null);

(G__8308["__value"] = null);

return G__8308;
})()));
});

redlobster.promise.promise.cljs$core$IFn$_invoke$arity$1 = (function (success_value){
var G__8309 = redlobster.promise.promise.call(null);
redlobster.promise.realise.call(null,G__8309,success_value);

return G__8309;
});

redlobster.promise.promise.cljs$lang$maxFixedArity = 1;
redlobster.promise.promise_fail = (function redlobster$promise$promise_fail(error_value){
var G__8315 = redlobster.promise.promise.call(null);
redlobster.promise.realise_error.call(null,G__8315,error_value);

return G__8315;
});
/**
 * Takes a list of promises, and creates a promise that will realise as
 * `:redlobster.promise/realised` when each promise has successfully realised,
 * or if one or more of the promises fail, fail with the value of the first
 * failing promise.
 */
redlobster.promise.await = (function redlobster$promise$await(var_args){
var args__5208__auto__ = [];
var len__5201__auto___8321 = arguments.length;
var i__5202__auto___8322 = (0);
while(true){
if((i__5202__auto___8322 < len__5201__auto___8321)){
args__5208__auto__.push((arguments[i__5202__auto___8322]));

var G__8323 = (i__5202__auto___8322 + (1));
i__5202__auto___8322 = G__8323;
continue;
} else {
}
break;
}

var argseq__5209__auto__ = ((((0) < args__5208__auto__.length))?(new cljs.core.IndexedSeq(args__5208__auto__.slice((0)),(0))):null);
return redlobster.promise.await.cljs$core$IFn$_invoke$arity$variadic(argseq__5209__auto__);
});

redlobster.promise.await.cljs$core$IFn$_invoke$arity$variadic = (function (promises){
var p = redlobster.promise.promise.call(null);
var total = cljs.core.count.call(null,promises);
var count = cljs.core.atom.call(null,(0));
var done = cljs.core.atom.call(null,false);
var seq__8317_8324 = cljs.core.seq.call(null,promises);
var chunk__8318_8325 = null;
var count__8319_8326 = (0);
var i__8320_8327 = (0);
while(true){
if((i__8320_8327 < count__8319_8326)){
var subp_8328 = cljs.core._nth.call(null,chunk__8318_8325,i__8320_8327);
redlobster.promise.on_realised.call(null,subp_8328,((function (seq__8317_8324,chunk__8318_8325,count__8319_8326,i__8320_8327,subp_8328,p,total,count,done){
return (function (_){
if(cljs.core.not.call(null,cljs.core.deref.call(null,done))){
cljs.core.swap_BANG_.call(null,count,cljs.core.inc);

if(cljs.core._EQ_.call(null,total,cljs.core.deref.call(null,count))){
cljs.core.reset_BANG_.call(null,done,true);

return redlobster.promise.realise.call(null,p,new cljs.core.Keyword("redlobster.promise","realised","redlobster.promise/realised",-398894750));
} else {
return null;
}
} else {
return null;
}
});})(seq__8317_8324,chunk__8318_8325,count__8319_8326,i__8320_8327,subp_8328,p,total,count,done))
,((function (seq__8317_8324,chunk__8318_8325,count__8319_8326,i__8320_8327,subp_8328,p,total,count,done){
return (function (err){
if(cljs.core.not.call(null,cljs.core.deref.call(null,done))){
cljs.core.reset_BANG_.call(null,done,true);

return redlobster.promise.realise_error.call(null,p,err);
} else {
return null;
}
});})(seq__8317_8324,chunk__8318_8325,count__8319_8326,i__8320_8327,subp_8328,p,total,count,done))
);

var G__8329 = seq__8317_8324;
var G__8330 = chunk__8318_8325;
var G__8331 = count__8319_8326;
var G__8332 = (i__8320_8327 + (1));
seq__8317_8324 = G__8329;
chunk__8318_8325 = G__8330;
count__8319_8326 = G__8331;
i__8320_8327 = G__8332;
continue;
} else {
var temp__4425__auto___8333 = cljs.core.seq.call(null,seq__8317_8324);
if(temp__4425__auto___8333){
var seq__8317_8334__$1 = temp__4425__auto___8333;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8317_8334__$1)){
var c__4946__auto___8335 = cljs.core.chunk_first.call(null,seq__8317_8334__$1);
var G__8336 = cljs.core.chunk_rest.call(null,seq__8317_8334__$1);
var G__8337 = c__4946__auto___8335;
var G__8338 = cljs.core.count.call(null,c__4946__auto___8335);
var G__8339 = (0);
seq__8317_8324 = G__8336;
chunk__8318_8325 = G__8337;
count__8319_8326 = G__8338;
i__8320_8327 = G__8339;
continue;
} else {
var subp_8340 = cljs.core.first.call(null,seq__8317_8334__$1);
redlobster.promise.on_realised.call(null,subp_8340,((function (seq__8317_8324,chunk__8318_8325,count__8319_8326,i__8320_8327,subp_8340,seq__8317_8334__$1,temp__4425__auto___8333,p,total,count,done){
return (function (_){
if(cljs.core.not.call(null,cljs.core.deref.call(null,done))){
cljs.core.swap_BANG_.call(null,count,cljs.core.inc);

if(cljs.core._EQ_.call(null,total,cljs.core.deref.call(null,count))){
cljs.core.reset_BANG_.call(null,done,true);

return redlobster.promise.realise.call(null,p,new cljs.core.Keyword("redlobster.promise","realised","redlobster.promise/realised",-398894750));
} else {
return null;
}
} else {
return null;
}
});})(seq__8317_8324,chunk__8318_8325,count__8319_8326,i__8320_8327,subp_8340,seq__8317_8334__$1,temp__4425__auto___8333,p,total,count,done))
,((function (seq__8317_8324,chunk__8318_8325,count__8319_8326,i__8320_8327,subp_8340,seq__8317_8334__$1,temp__4425__auto___8333,p,total,count,done){
return (function (err){
if(cljs.core.not.call(null,cljs.core.deref.call(null,done))){
cljs.core.reset_BANG_.call(null,done,true);

return redlobster.promise.realise_error.call(null,p,err);
} else {
return null;
}
});})(seq__8317_8324,chunk__8318_8325,count__8319_8326,i__8320_8327,subp_8340,seq__8317_8334__$1,temp__4425__auto___8333,p,total,count,done))
);

var G__8341 = cljs.core.next.call(null,seq__8317_8334__$1);
var G__8342 = null;
var G__8343 = (0);
var G__8344 = (0);
seq__8317_8324 = G__8341;
chunk__8318_8325 = G__8342;
count__8319_8326 = G__8343;
i__8320_8327 = G__8344;
continue;
}
} else {
}
}
break;
}

return p;
});

redlobster.promise.await.cljs$lang$maxFixedArity = (0);

redlobster.promise.await.cljs$lang$applyTo = (function (seq8316){
return redlobster.promise.await.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8316));
});
redlobster.promise.defer_until_realised = (function redlobster$promise$defer_until_realised(promises,callback){
var p = redlobster.promise.promise.call(null);
redlobster.promise.on_realised.call(null,cljs.core.apply.call(null,redlobster.promise.await,promises),((function (p){
return (function (_){
return redlobster.promise.realise.call(null,p,callback.call(null));
});})(p))
,((function (p){
return (function (error){
return redlobster.promise.realise_error.call(null,p,error);
});})(p))
);

return p;
});

//# sourceMappingURL=promise.js.map