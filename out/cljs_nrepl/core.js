// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('cljs_nrepl.core');
goog.require('cljs.core');
goog.require('redlobster.promise');
goog.require('cljs.js');
goog.require('dogfort.middleware.defaults');
goog.require('dogfort.middleware.routes');
goog.require('cljs.nodejs');
goog.require('dogfort.http');
goog.require('cljs.reader');
cljs.nodejs.enable_util_print_BANG_.call(null);
cljs_nrepl.core.st = cljs.js.empty_state.call(null);
cljs_nrepl.core.clj__GT_json = (function cljs_nrepl$core$clj__GT_json(ds){
return JSON.stringify(cljs.core.clj__GT_js.call(null,ds));
});
cljs_nrepl.core.clj__GT_json2 = (function cljs_nrepl$core$clj__GT_json2(ds){
var ds__$1 = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["["], null),ds,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["]"], null));
return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"\n",cljs.core.map.call(null,cljs_nrepl.core.clj__GT_json,ds__$1)));
});
cljs_nrepl.core.response = (function cljs_nrepl$core$response(session,id,m){
if(cljs.core.truth_((function (){var and__4131__auto__ = session;
if(cljs.core.truth_(and__4131__auto__)){
var and__4131__auto____$1 = id;
if(cljs.core.truth_(and__4131__auto____$1)){
return m;
} else {
return and__4131__auto____$1;
}
} else {
return and__4131__auto__;
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),new cljs.core.Symbol(null,"session","session",-1646156666,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"m","m",-1021758608,null))))].join('')));
}

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"session","session",1008279103),session,new cljs.core.Keyword(null,"body","body",-2049205669),cljs_nrepl.core.clj__GT_json2.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"session","session",1008279103),session,new cljs.core.Keyword(null,"id","id",-1388402092),id], null),m),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"session","session",1008279103),session,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"done","done",-889844188),null], null), null)], null)], null))], null);
});
cljs_nrepl.core.my_eval = (function cljs_nrepl$core$my_eval(p__15020){
var map__15024 = p__15020;
var map__15024__$1 = ((((!((map__15024 == null)))?((((map__15024.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15024.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15024):map__15024);
var source = cljs.core.get.call(null,map__15024__$1,new cljs.core.Keyword(null,"source","source",-433931539));
try{return eval(source);
}catch (e15026){var e = e15026;
return null;
}});
cljs_nrepl.core.eval = (function cljs_nrepl$core$eval(s){
var promise__5377__auto__ = redlobster.promise.promise.call(null);
var realise__5378__auto__ = ((function (promise__5377__auto__){
return (function (promise__5377__auto____$1,value__5379__auto__){
return redlobster.promise.realise.call(null,promise__5377__auto____$1,value__5379__auto__);
});})(promise__5377__auto__))
;
var realise_error__5380__auto__ = ((function (promise__5377__auto__,realise__5378__auto__){
return (function (promise__5377__auto____$1,value__5379__auto__){
return redlobster.promise.realise_error.call(null,promise__5377__auto____$1,value__5379__auto__);
});})(promise__5377__auto__,realise__5378__auto__))
;
var realise = cljs.core.partial.call(null,realise__5378__auto__,promise__5377__auto__);
var realise_error = cljs.core.partial.call(null,realise_error__5380__auto__,promise__5377__auto__);
cljs.js.eval.call(null,cljs_nrepl.core.st,s,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"eval","eval",-1103567905),cljs_nrepl.core.my_eval,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null)], null),((function (promise__5377__auto__,realise__5378__auto__,realise_error__5380__auto__,realise,realise_error){
return (function (p1__15027_SHARP_){
return realise.call(null,cljs.core.pr_str.call(null,p1__15027_SHARP_));
});})(promise__5377__auto__,realise__5378__auto__,realise_error__5380__auto__,realise,realise_error))
);

return promise__5377__auto__;
});
cljs_nrepl.core.eval_str = (function cljs_nrepl$core$eval_str(s){
try{var s__$1 = s.trim();
var form = cljs.reader.read_string.call(null,s__$1);
var form__$1 = ((cljs.core.coll_QMARK_.call(null,form))?form:cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"identity","identity",-1007039734,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,form)))));
if(cljs.core.empty_QMARK_.call(null,s__$1)){
var promise__5377__auto__ = redlobster.promise.promise.call(null);
var realise__5378__auto__ = ((function (promise__5377__auto__,s__$1,form,form__$1){
return (function (promise__5377__auto____$1,value__5379__auto__){
return redlobster.promise.realise.call(null,promise__5377__auto____$1,value__5379__auto__);
});})(promise__5377__auto__,s__$1,form,form__$1))
;
var realise_error__5380__auto__ = ((function (promise__5377__auto__,realise__5378__auto__,s__$1,form,form__$1){
return (function (promise__5377__auto____$1,value__5379__auto__){
return redlobster.promise.realise_error.call(null,promise__5377__auto____$1,value__5379__auto__);
});})(promise__5377__auto__,realise__5378__auto__,s__$1,form,form__$1))
;
var realise = cljs.core.partial.call(null,realise__5378__auto__,promise__5377__auto__);
var realise_error = cljs.core.partial.call(null,realise_error__5380__auto__,promise__5377__auto__);
realise.call(null,"");

return promise__5377__auto__;
} else {
return cljs_nrepl.core.eval.call(null,form__$1);
}
}catch (e15029){var e = e15029;
cljs.core.println.call(null,"error",e);

var promise__5377__auto__ = redlobster.promise.promise.call(null);
var realise__5378__auto__ = ((function (promise__5377__auto__,e){
return (function (promise__5377__auto____$1,value__5379__auto__){
return redlobster.promise.realise.call(null,promise__5377__auto____$1,value__5379__auto__);
});})(promise__5377__auto__,e))
;
var realise_error__5380__auto__ = ((function (promise__5377__auto__,realise__5378__auto__,e){
return (function (promise__5377__auto____$1,value__5379__auto__){
return redlobster.promise.realise_error.call(null,promise__5377__auto____$1,value__5379__auto__);
});})(promise__5377__auto__,realise__5378__auto__,e))
;
var realise = cljs.core.partial.call(null,realise__5378__auto__,promise__5377__auto__);
var realise_error = cljs.core.partial.call(null,realise_error__5380__auto__,promise__5377__auto__);
realise.call(null,"");

return promise__5377__auto__;
}});
cljs_nrepl.core.rand_subseq = (function cljs_nrepl$core$rand_subseq(n){
return cljs.core.repeatedly.call(null,n,(function (){
return cljs.core.rand_nth.call(null,"abcdefghijklmnopqrstuvwxyz0123456789");
}));
});
cljs_nrepl.core.uuid = (function cljs_nrepl$core$uuid(){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.flatten.call(null,cljs.core.interpose.call(null,"-",cljs.core.map.call(null,cljs_nrepl.core.rand_subseq,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(4),(4),(4),(12)], null)))));
});
if(typeof cljs_nrepl.core.op_handle !== 'undefined'){
} else {
cljs_nrepl.core.op_handle = (function (){var method_table__5056__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5057__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5058__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5059__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5060__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs-nrepl.core","op-handle"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5060__auto__,method_table__5056__auto__,prefer_table__5057__auto__,method_cache__5058__auto__,cached_hierarchy__5059__auto__));
})();
}
cljs.core._add_method.call(null,cljs_nrepl.core.op_handle,"clone",(function (p__15030,cookie_session){
var map__15031 = p__15030;
var map__15031__$1 = ((((!((map__15031 == null)))?((((map__15031.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15031.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15031):map__15031);
var session = cljs.core.get.call(null,map__15031__$1,new cljs.core.Keyword(null,"session","session",1008279103));
var id = cljs.core.get.call(null,map__15031__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var new_session = (function (){var or__4143__auto__ = session;
if(cljs.core.truth_(or__4143__auto__)){
return or__4143__auto__;
} else {
return cljs_nrepl.core.uuid.call(null);
}
})();
return cljs_nrepl.core.response.call(null,new_session,id,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"new-session","new-session",-1358977165),new_session], null));
}));
cljs.core._add_method.call(null,cljs_nrepl.core.op_handle,"close",(function (p__15033,cookie_session){
var map__15034 = p__15033;
var map__15034__$1 = ((((!((map__15034 == null)))?((((map__15034.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15034.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15034):map__15034);
var id = cljs.core.get.call(null,map__15034__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs_nrepl.core.response.call(null,cookie_session,id,cljs.core.PersistentArrayMap.EMPTY);
}));
cljs.core._add_method.call(null,cljs_nrepl.core.op_handle,"eval",(function (p__15036,cookie_session){
var map__15037 = p__15036;
var map__15037__$1 = ((((!((map__15037 == null)))?((((map__15037.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15037.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15037):map__15037);
var id = cljs.core.get.call(null,map__15037__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var code = cljs.core.get.call(null,map__15037__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var session = cljs.core.get.call(null,map__15037__$1,new cljs.core.Keyword(null,"session","session",1008279103));
if(cljs.core.truth_(session)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"session","session",-1646156666,null)))].join('')));
}

var value = cljs_nrepl.core.eval_str.call(null,code);
return redlobster.promise.defer_until_realised.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null),((function (value,map__15037,map__15037__$1,id,code,session){
return (function (){
return cljs_nrepl.core.response.call(null,session,id,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,value),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null)], null));
});})(value,map__15037,map__15037__$1,id,code,session))
);
}));
cljs.core._add_method.call(null,cljs_nrepl.core.op_handle,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__15039,cookie_session){
var map__15040 = p__15039;
var map__15040__$1 = ((((!((map__15040 == null)))?((((map__15040.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15040.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15040):map__15040);
var op = cljs.core.get.call(null,map__15040__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
throw (new Error([cljs.core.str(op),cljs.core.str(" not supported.")].join('')));
}));
cljs_nrepl.core.handler = dogfort.middleware.routes.routes.call(null,(function (request__5666__auto__){
return dogfort.middleware.routes.eval_route.call(null,request__5666__auto__,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/repl"], null),(function (request__5666__auto____$1){
var req = request__5666__auto____$1;
var map__15042 = req;
var map__15042__$1 = ((((!((map__15042 == null)))?((((map__15042.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15042.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15042):map__15042);
var params = cljs.core.get.call(null,map__15042__$1,new cljs.core.Keyword(null,"params","params",710516235));
var session = cljs.core.get.call(null,map__15042__$1,new cljs.core.Keyword(null,"session","session",1008279103));
if(cljs.core.truth_(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(params))){
return cljs_nrepl.core.op_handle.call(null,params,session);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"body","body",-2049205669),"[\n\n]",new cljs.core.Keyword(null,"status","status",-1997798413),(200)], null);
}
}));
}),(function (request__5666__auto__){
return dogfort.middleware.routes.eval_route.call(null,request__5666__auto__,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/test"], null),(function (request__5666__auto____$1){
var result = cljs_nrepl.core.eval_str.call(null,"(+ 1 2)");
return redlobster.promise.defer_until_realised.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [result], null),((function (result){
return (function (){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"body","body",-2049205669),[cljs.core.str(cljs.core.deref.call(null,result))].join(''),new cljs.core.Keyword(null,"status","status",-1997798413),(200)], null);
});})(result))
);
}));
}));
cljs_nrepl.core.main = (function cljs_nrepl$core$main(var_args){
var args__5208__auto__ = [];
var len__5201__auto___15045 = arguments.length;
var i__5202__auto___15046 = (0);
while(true){
if((i__5202__auto___15046 < len__5201__auto___15045)){
args__5208__auto__.push((arguments[i__5202__auto___15046]));

var G__15047 = (i__5202__auto___15046 + (1));
i__5202__auto___15046 = G__15047;
continue;
} else {
}
break;
}

var argseq__5209__auto__ = ((((0) < args__5208__auto__.length))?(new cljs.core.IndexedSeq(args__5208__auto__.slice((0)),(0))):null);
return cljs_nrepl.core.main.cljs$core$IFn$_invoke$arity$variadic(argseq__5209__auto__);
});

cljs_nrepl.core.main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
cljs.core.println.call(null,"starting");

return dogfort.http.run_http.call(null,dogfort.middleware.defaults.wrap_defaults.call(null,cljs_nrepl.core.handler,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrap-file","wrap-file",-1438240540),"static"], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"port","port",1534937262),(function (){var or__4143__auto__ = process.env.PORT;
if(cljs.core.truth_(or__4143__auto__)){
return or__4143__auto__;
} else {
return (5000);
}
})()], null));
});

cljs_nrepl.core.main.cljs$lang$maxFixedArity = (0);

cljs_nrepl.core.main.cljs$lang$applyTo = (function (seq15044){
return cljs_nrepl.core.main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15044));
});
cljs.core._STAR_main_cli_fn_STAR_ = cljs_nrepl.core.main;

//# sourceMappingURL=core.js.map