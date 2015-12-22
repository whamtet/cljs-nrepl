// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('redlobster.events');
goog.require('cljs.core');
goog.require('cljs.node');
goog.require('cljs.yunoincore');
redlobster.events.EventEmitter = (require("events")["EventEmitter"]);
redlobster.events.event_emitter = (function redlobster$events$event_emitter(){
return (new redlobster.events.EventEmitter());
});

/**
 * @interface
 */
redlobster.events.IEventEmitter = function(){};

redlobster.events.on = (function redlobster$events$on(emitter,event,listener){
if((!((emitter == null))) && (!((emitter.redlobster$events$IEventEmitter$on$arity$3 == null)))){
return emitter.redlobster$events$IEventEmitter$on$arity$3(emitter,event,listener);
} else {
var x__4798__auto__ = (((emitter == null))?null:emitter);
var m__4799__auto__ = (redlobster.events.on[goog.typeOf(x__4798__auto__)]);
if(!((m__4799__auto__ == null))){
return m__4799__auto__.call(null,emitter,event,listener);
} else {
var m__4799__auto____$1 = (redlobster.events.on["_"]);
if(!((m__4799__auto____$1 == null))){
return m__4799__auto____$1.call(null,emitter,event,listener);
} else {
throw cljs.core.missing_protocol.call(null,"IEventEmitter.on",emitter);
}
}
}
});

redlobster.events.once = (function redlobster$events$once(emitter,event,listener){
if((!((emitter == null))) && (!((emitter.redlobster$events$IEventEmitter$once$arity$3 == null)))){
return emitter.redlobster$events$IEventEmitter$once$arity$3(emitter,event,listener);
} else {
var x__4798__auto__ = (((emitter == null))?null:emitter);
var m__4799__auto__ = (redlobster.events.once[goog.typeOf(x__4798__auto__)]);
if(!((m__4799__auto__ == null))){
return m__4799__auto__.call(null,emitter,event,listener);
} else {
var m__4799__auto____$1 = (redlobster.events.once["_"]);
if(!((m__4799__auto____$1 == null))){
return m__4799__auto____$1.call(null,emitter,event,listener);
} else {
throw cljs.core.missing_protocol.call(null,"IEventEmitter.once",emitter);
}
}
}
});

redlobster.events.remove_listener = (function redlobster$events$remove_listener(emitter,event,listener){
if((!((emitter == null))) && (!((emitter.redlobster$events$IEventEmitter$remove_listener$arity$3 == null)))){
return emitter.redlobster$events$IEventEmitter$remove_listener$arity$3(emitter,event,listener);
} else {
var x__4798__auto__ = (((emitter == null))?null:emitter);
var m__4799__auto__ = (redlobster.events.remove_listener[goog.typeOf(x__4798__auto__)]);
if(!((m__4799__auto__ == null))){
return m__4799__auto__.call(null,emitter,event,listener);
} else {
var m__4799__auto____$1 = (redlobster.events.remove_listener["_"]);
if(!((m__4799__auto____$1 == null))){
return m__4799__auto____$1.call(null,emitter,event,listener);
} else {
throw cljs.core.missing_protocol.call(null,"IEventEmitter.remove-listener",emitter);
}
}
}
});

redlobster.events.remove_all_listeners = (function redlobster$events$remove_all_listeners(emitter){
if((!((emitter == null))) && (!((emitter.redlobster$events$IEventEmitter$remove_all_listeners$arity$1 == null)))){
return emitter.redlobster$events$IEventEmitter$remove_all_listeners$arity$1(emitter);
} else {
var x__4798__auto__ = (((emitter == null))?null:emitter);
var m__4799__auto__ = (redlobster.events.remove_all_listeners[goog.typeOf(x__4798__auto__)]);
if(!((m__4799__auto__ == null))){
return m__4799__auto__.call(null,emitter);
} else {
var m__4799__auto____$1 = (redlobster.events.remove_all_listeners["_"]);
if(!((m__4799__auto____$1 == null))){
return m__4799__auto____$1.call(null,emitter);
} else {
throw cljs.core.missing_protocol.call(null,"IEventEmitter.remove-all-listeners",emitter);
}
}
}
});

redlobster.events.remove_all_listeners = (function redlobster$events$remove_all_listeners(emitter,event){
if((!((emitter == null))) && (!((emitter.redlobster$events$IEventEmitter$remove_all_listeners$arity$2 == null)))){
return emitter.redlobster$events$IEventEmitter$remove_all_listeners$arity$2(emitter,event);
} else {
var x__4798__auto__ = (((emitter == null))?null:emitter);
var m__4799__auto__ = (redlobster.events.remove_all_listeners[goog.typeOf(x__4798__auto__)]);
if(!((m__4799__auto__ == null))){
return m__4799__auto__.call(null,emitter,event);
} else {
var m__4799__auto____$1 = (redlobster.events.remove_all_listeners["_"]);
if(!((m__4799__auto____$1 == null))){
return m__4799__auto____$1.call(null,emitter,event);
} else {
throw cljs.core.missing_protocol.call(null,"IEventEmitter.remove-all-listeners",emitter);
}
}
}
});

redlobster.events.listeners = (function redlobster$events$listeners(emitter,event){
if((!((emitter == null))) && (!((emitter.redlobster$events$IEventEmitter$listeners$arity$2 == null)))){
return emitter.redlobster$events$IEventEmitter$listeners$arity$2(emitter,event);
} else {
var x__4798__auto__ = (((emitter == null))?null:emitter);
var m__4799__auto__ = (redlobster.events.listeners[goog.typeOf(x__4798__auto__)]);
if(!((m__4799__auto__ == null))){
return m__4799__auto__.call(null,emitter,event);
} else {
var m__4799__auto____$1 = (redlobster.events.listeners["_"]);
if(!((m__4799__auto____$1 == null))){
return m__4799__auto____$1.call(null,emitter,event);
} else {
throw cljs.core.missing_protocol.call(null,"IEventEmitter.listeners",emitter);
}
}
}
});

redlobster.events.emit = (function redlobster$events$emit(emitter,event,args){
if((!((emitter == null))) && (!((emitter.redlobster$events$IEventEmitter$emit$arity$3 == null)))){
return emitter.redlobster$events$IEventEmitter$emit$arity$3(emitter,event,args);
} else {
var x__4798__auto__ = (((emitter == null))?null:emitter);
var m__4799__auto__ = (redlobster.events.emit[goog.typeOf(x__4798__auto__)]);
if(!((m__4799__auto__ == null))){
return m__4799__auto__.call(null,emitter,event,args);
} else {
var m__4799__auto____$1 = (redlobster.events.emit["_"]);
if(!((m__4799__auto____$1 == null))){
return m__4799__auto____$1.call(null,emitter,event,args);
} else {
throw cljs.core.missing_protocol.call(null,"IEventEmitter.emit",emitter);
}
}
}
});

redlobster.events.unpack_event = (function redlobster$events$unpack_event(event){
if((event instanceof cljs.core.Keyword)){
return cljs.core.name.call(null,event);
} else {
return event;
}
});
redlobster.events.EventEmitter.prototype.redlobster$events$IEventEmitter$ = true;

redlobster.events.EventEmitter.prototype.redlobster$events$IEventEmitter$on$arity$3 = (function (emitter,event,listener){
var emitter__$1 = this;
return emitter__$1.on(redlobster.events.unpack_event.call(null,event),listener);
});

redlobster.events.EventEmitter.prototype.redlobster$events$IEventEmitter$once$arity$3 = (function (emitter,event,listener){
var emitter__$1 = this;
return emitter__$1.once(redlobster.events.unpack_event.call(null,event),listener);
});

redlobster.events.EventEmitter.prototype.redlobster$events$IEventEmitter$remove_listener$arity$3 = (function (emitter,event,listener){
var emitter__$1 = this;
return emitter__$1.removeListener(redlobster.events.unpack_event.call(null,event),listener);
});

redlobster.events.EventEmitter.prototype.redlobster$events$IEventEmitter$remove_all_listeners$arity$1 = (function (emitter){
var emitter__$1 = this;
return emitter__$1.removeAllListeners();
});

redlobster.events.EventEmitter.prototype.redlobster$events$IEventEmitter$remove_all_listeners$arity$2 = (function (emitter,event){
var emitter__$1 = this;
return emitter__$1.removeAllListeners(redlobster.events.unpack_event.call(null,event));
});

redlobster.events.EventEmitter.prototype.redlobster$events$IEventEmitter$listeners$arity$2 = (function (emitter,event){
var emitter__$1 = this;
return cljs.core.js__GT_clj.call(null,emitter__$1.listeners(redlobster.events.unpack_event.call(null,event)));
});

redlobster.events.EventEmitter.prototype.redlobster$events$IEventEmitter$emit$arity$3 = (function (emitter,event,args){
var emitter__$1 = this;
return emitter__$1.emit.apply(emitter__$1,cljs.core.apply.call(null,cljs.core.array,cljs.core.cons.call(null,redlobster.events.unpack_event.call(null,event),args)));
});

//# sourceMappingURL=events.js.map