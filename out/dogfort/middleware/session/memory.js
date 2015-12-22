// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('dogfort.middleware.session.memory');
goog.require('cljs.core');
goog.require('dogfort.middleware.session.store');

/**
* @constructor
 * @implements {dogfort.middleware.session.store.SessionStore}
*/
dogfort.middleware.session.memory.MemoryStore = (function (session_map){
this.session_map = session_map;
})
dogfort.middleware.session.memory.MemoryStore.prototype.dogfort$middleware$session$store$SessionStore$ = true;

dogfort.middleware.session.memory.MemoryStore.prototype.dogfort$middleware$session$store$SessionStore$read_session$arity$2 = (function (_,key){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.session_map).call(null,key);
});

dogfort.middleware.session.memory.MemoryStore.prototype.dogfort$middleware$session$store$SessionStore$write_session$arity$3 = (function (_,key,data){
var self__ = this;
var ___$1 = this;
var key__$1 = (function (){var or__4143__auto__ = key;
if(cljs.core.truth_(or__4143__auto__)){
return or__4143__auto__;
} else {
return [cljs.core.str(cljs.core.gensym.call(null))].join('');
}
})();
cljs.core.swap_BANG_.call(null,self__.session_map,cljs.core.assoc,key__$1,data);

return key__$1;
});

dogfort.middleware.session.memory.MemoryStore.prototype.dogfort$middleware$session$store$SessionStore$delete_session$arity$2 = (function (_,key){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.session_map,cljs.core.dissoc,key);

return null;
});

dogfort.middleware.session.memory.MemoryStore.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"session-map","session-map",-691443532,null)], null);
});

dogfort.middleware.session.memory.MemoryStore.cljs$lang$type = true;

dogfort.middleware.session.memory.MemoryStore.cljs$lang$ctorStr = "dogfort.middleware.session.memory/MemoryStore";

dogfort.middleware.session.memory.MemoryStore.cljs$lang$ctorPrWriter = (function (this__4741__auto__,writer__4742__auto__,opt__4743__auto__){
return cljs.core._write.call(null,writer__4742__auto__,"dogfort.middleware.session.memory/MemoryStore");
});

dogfort.middleware.session.memory.__GT_MemoryStore = (function dogfort$middleware$session$memory$__GT_MemoryStore(session_map){
return (new dogfort.middleware.session.memory.MemoryStore(session_map));
});

/**
 * Creates an in-memory session storage engine. Accepts an atom as an optional
 *   argument; if supplied, the atom is used to hold the session data.
 */
dogfort.middleware.session.memory.memory_store = (function dogfort$middleware$session$memory$memory_store(var_args){
var args9538 = [];
var len__5201__auto___9541 = arguments.length;
var i__5202__auto___9542 = (0);
while(true){
if((i__5202__auto___9542 < len__5201__auto___9541)){
args9538.push((arguments[i__5202__auto___9542]));

var G__9543 = (i__5202__auto___9542 + (1));
i__5202__auto___9542 = G__9543;
continue;
} else {
}
break;
}

var G__9540 = args9538.length;
switch (G__9540) {
case 0:
return dogfort.middleware.session.memory.memory_store.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return dogfort.middleware.session.memory.memory_store.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9538.length)].join('')));

}
});

dogfort.middleware.session.memory.memory_store.cljs$core$IFn$_invoke$arity$0 = (function (){
return dogfort.middleware.session.memory.memory_store.call(null,cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY));
});

dogfort.middleware.session.memory.memory_store.cljs$core$IFn$_invoke$arity$1 = (function (session_atom){
return (new dogfort.middleware.session.memory.MemoryStore(session_atom));
});

dogfort.middleware.session.memory.memory_store.cljs$lang$maxFixedArity = 1;

//# sourceMappingURL=memory.js.map