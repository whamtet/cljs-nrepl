// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('dogfort.http');
goog.require('cljs.core');
goog.require('redlobster.promise');
goog.require('cljs.node');
goog.require('dogfort.util.response');
goog.require('redlobster.stream');
goog.require('redlobster.events');
dogfort.http.http = require("http");
dogfort.http.url = require("url");
dogfort.http.Stream = require("stream");
dogfort.http.ws = require("ws");

/**
 * @interface
 */
dogfort.http.IHTTPResponseWriter = function(){};

/**
 * Write data to a http.ServerResponse
 */
dogfort.http._write_response = (function dogfort$http$_write_response(data,res){
if((!((data == null))) && (!((data.dogfort$http$IHTTPResponseWriter$_write_response$arity$2 == null)))){
return data.dogfort$http$IHTTPResponseWriter$_write_response$arity$2(data,res);
} else {
var x__4798__auto__ = (((data == null))?null:data);
var m__4799__auto__ = (dogfort.http._write_response[goog.typeOf(x__4798__auto__)]);
if(!((m__4799__auto__ == null))){
return m__4799__auto__.call(null,data,res);
} else {
var m__4799__auto____$1 = (dogfort.http._write_response["_"]);
if(!((m__4799__auto____$1 == null))){
return m__4799__auto____$1.call(null,data,res);
} else {
throw cljs.core.missing_protocol.call(null,"IHTTPResponseWriter.-write-response",data);
}
}
}
});

dogfort.http.send_result = (function dogfort$http$send_result(res,ring_result){
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"keep-alive","keep-alive",-47515827).cljs$core$IFn$_invoke$arity$1(ring_result))){
if(cljs.core.truth_(ring_result)){
var map__10414 = ring_result;
var map__10414__$1 = ((((!((map__10414 == null)))?((((map__10414.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10414.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10414):map__10414);
var status = cljs.core.get.call(null,map__10414__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var headers = cljs.core.get.call(null,map__10414__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.call(null,map__10414__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
res.statusCode = status;

var seq__10416_10422 = cljs.core.seq.call(null,headers);
var chunk__10417_10423 = null;
var count__10418_10424 = (0);
var i__10419_10425 = (0);
while(true){
if((i__10419_10425 < count__10418_10424)){
var vec__10420_10426 = cljs.core._nth.call(null,chunk__10417_10423,i__10419_10425);
var header_10427 = cljs.core.nth.call(null,vec__10420_10426,(0),null);
var value_10428 = cljs.core.nth.call(null,vec__10420_10426,(1),null);
res.setHeader(cljs.core.clj__GT_js.call(null,header_10427),cljs.core.clj__GT_js.call(null,value_10428));

var G__10429 = seq__10416_10422;
var G__10430 = chunk__10417_10423;
var G__10431 = count__10418_10424;
var G__10432 = (i__10419_10425 + (1));
seq__10416_10422 = G__10429;
chunk__10417_10423 = G__10430;
count__10418_10424 = G__10431;
i__10419_10425 = G__10432;
continue;
} else {
var temp__4425__auto___10433 = cljs.core.seq.call(null,seq__10416_10422);
if(temp__4425__auto___10433){
var seq__10416_10434__$1 = temp__4425__auto___10433;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10416_10434__$1)){
var c__4946__auto___10435 = cljs.core.chunk_first.call(null,seq__10416_10434__$1);
var G__10436 = cljs.core.chunk_rest.call(null,seq__10416_10434__$1);
var G__10437 = c__4946__auto___10435;
var G__10438 = cljs.core.count.call(null,c__4946__auto___10435);
var G__10439 = (0);
seq__10416_10422 = G__10436;
chunk__10417_10423 = G__10437;
count__10418_10424 = G__10438;
i__10419_10425 = G__10439;
continue;
} else {
var vec__10421_10440 = cljs.core.first.call(null,seq__10416_10434__$1);
var header_10441 = cljs.core.nth.call(null,vec__10421_10440,(0),null);
var value_10442 = cljs.core.nth.call(null,vec__10421_10440,(1),null);
res.setHeader(cljs.core.clj__GT_js.call(null,header_10441),cljs.core.clj__GT_js.call(null,value_10442));

var G__10443 = cljs.core.next.call(null,seq__10416_10434__$1);
var G__10444 = null;
var G__10445 = (0);
var G__10446 = (0);
seq__10416_10422 = G__10443;
chunk__10417_10423 = G__10444;
count__10418_10424 = G__10445;
i__10419_10425 = G__10446;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(dogfort.http._write_response.call(null,body,res))){
return res.end();
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
dogfort.http.send_error_page = (function dogfort$http$send_error_page(res,status,err){
return dogfort.util.response.default_response.call(null,(500));
});
(dogfort.http.IHTTPResponseWriter["null"] = true);

(dogfort.http._write_response["null"] = (function (data,res){
return true;
}));

(dogfort.http.IHTTPResponseWriter["string"] = true);

(dogfort.http._write_response["string"] = (function (data,res){
res.write(data);

return true;
}));

cljs.core.PersistentVector.prototype.dogfort$http$IHTTPResponseWriter$ = true;

cljs.core.PersistentVector.prototype.dogfort$http$IHTTPResponseWriter$_write_response$arity$2 = (function (data,res){
var data__$1 = this;
var seq__10448_10460 = cljs.core.seq.call(null,data__$1);
var chunk__10449_10461 = null;
var count__10450_10462 = (0);
var i__10451_10463 = (0);
while(true){
if((i__10451_10463 < count__10450_10462)){
var i_10464 = cljs.core._nth.call(null,chunk__10449_10461,i__10451_10463);
dogfort.http._write_response.call(null,i_10464,res);

var G__10465 = seq__10448_10460;
var G__10466 = chunk__10449_10461;
var G__10467 = count__10450_10462;
var G__10468 = (i__10451_10463 + (1));
seq__10448_10460 = G__10465;
chunk__10449_10461 = G__10466;
count__10450_10462 = G__10467;
i__10451_10463 = G__10468;
continue;
} else {
var temp__4425__auto___10469 = cljs.core.seq.call(null,seq__10448_10460);
if(temp__4425__auto___10469){
var seq__10448_10470__$1 = temp__4425__auto___10469;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10448_10470__$1)){
var c__4946__auto___10471 = cljs.core.chunk_first.call(null,seq__10448_10470__$1);
var G__10472 = cljs.core.chunk_rest.call(null,seq__10448_10470__$1);
var G__10473 = c__4946__auto___10471;
var G__10474 = cljs.core.count.call(null,c__4946__auto___10471);
var G__10475 = (0);
seq__10448_10460 = G__10472;
chunk__10449_10461 = G__10473;
count__10450_10462 = G__10474;
i__10451_10463 = G__10475;
continue;
} else {
var i_10476 = cljs.core.first.call(null,seq__10448_10470__$1);
dogfort.http._write_response.call(null,i_10476,res);

var G__10477 = cljs.core.next.call(null,seq__10448_10470__$1);
var G__10478 = null;
var G__10479 = (0);
var G__10480 = (0);
seq__10448_10460 = G__10477;
chunk__10449_10461 = G__10478;
count__10450_10462 = G__10479;
i__10451_10463 = G__10480;
continue;
}
} else {
}
}
break;
}

return true;
});

cljs.core.List.prototype.dogfort$http$IHTTPResponseWriter$ = true;

cljs.core.List.prototype.dogfort$http$IHTTPResponseWriter$_write_response$arity$2 = (function (data,res){
var data__$1 = this;
var seq__10452_10481 = cljs.core.seq.call(null,data__$1);
var chunk__10453_10482 = null;
var count__10454_10483 = (0);
var i__10455_10484 = (0);
while(true){
if((i__10455_10484 < count__10454_10483)){
var i_10485 = cljs.core._nth.call(null,chunk__10453_10482,i__10455_10484);
dogfort.http._write_response.call(null,i_10485,res);

var G__10486 = seq__10452_10481;
var G__10487 = chunk__10453_10482;
var G__10488 = count__10454_10483;
var G__10489 = (i__10455_10484 + (1));
seq__10452_10481 = G__10486;
chunk__10453_10482 = G__10487;
count__10454_10483 = G__10488;
i__10455_10484 = G__10489;
continue;
} else {
var temp__4425__auto___10490 = cljs.core.seq.call(null,seq__10452_10481);
if(temp__4425__auto___10490){
var seq__10452_10491__$1 = temp__4425__auto___10490;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10452_10491__$1)){
var c__4946__auto___10492 = cljs.core.chunk_first.call(null,seq__10452_10491__$1);
var G__10493 = cljs.core.chunk_rest.call(null,seq__10452_10491__$1);
var G__10494 = c__4946__auto___10492;
var G__10495 = cljs.core.count.call(null,c__4946__auto___10492);
var G__10496 = (0);
seq__10452_10481 = G__10493;
chunk__10453_10482 = G__10494;
count__10454_10483 = G__10495;
i__10455_10484 = G__10496;
continue;
} else {
var i_10497 = cljs.core.first.call(null,seq__10452_10491__$1);
dogfort.http._write_response.call(null,i_10497,res);

var G__10498 = cljs.core.next.call(null,seq__10452_10491__$1);
var G__10499 = null;
var G__10500 = (0);
var G__10501 = (0);
seq__10452_10481 = G__10498;
chunk__10453_10482 = G__10499;
count__10454_10483 = G__10500;
i__10455_10484 = G__10501;
continue;
}
} else {
}
}
break;
}

return true;
});

cljs.core.LazySeq.prototype.dogfort$http$IHTTPResponseWriter$ = true;

cljs.core.LazySeq.prototype.dogfort$http$IHTTPResponseWriter$_write_response$arity$2 = (function (data,res){
var data__$1 = this;
var seq__10456_10502 = cljs.core.seq.call(null,data__$1);
var chunk__10457_10503 = null;
var count__10458_10504 = (0);
var i__10459_10505 = (0);
while(true){
if((i__10459_10505 < count__10458_10504)){
var i_10506 = cljs.core._nth.call(null,chunk__10457_10503,i__10459_10505);
dogfort.http._write_response.call(null,i_10506,res);

var G__10507 = seq__10456_10502;
var G__10508 = chunk__10457_10503;
var G__10509 = count__10458_10504;
var G__10510 = (i__10459_10505 + (1));
seq__10456_10502 = G__10507;
chunk__10457_10503 = G__10508;
count__10458_10504 = G__10509;
i__10459_10505 = G__10510;
continue;
} else {
var temp__4425__auto___10511 = cljs.core.seq.call(null,seq__10456_10502);
if(temp__4425__auto___10511){
var seq__10456_10512__$1 = temp__4425__auto___10511;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10456_10512__$1)){
var c__4946__auto___10513 = cljs.core.chunk_first.call(null,seq__10456_10512__$1);
var G__10514 = cljs.core.chunk_rest.call(null,seq__10456_10512__$1);
var G__10515 = c__4946__auto___10513;
var G__10516 = cljs.core.count.call(null,c__4946__auto___10513);
var G__10517 = (0);
seq__10456_10502 = G__10514;
chunk__10457_10503 = G__10515;
count__10458_10504 = G__10516;
i__10459_10505 = G__10517;
continue;
} else {
var i_10518 = cljs.core.first.call(null,seq__10456_10512__$1);
dogfort.http._write_response.call(null,i_10518,res);

var G__10519 = cljs.core.next.call(null,seq__10456_10512__$1);
var G__10520 = null;
var G__10521 = (0);
var G__10522 = (0);
seq__10456_10502 = G__10519;
chunk__10457_10503 = G__10520;
count__10458_10504 = G__10521;
i__10459_10505 = G__10522;
continue;
}
} else {
}
}
break;
}

return true;
});

Buffer.prototype.dogfort$http$IHTTPResponseWriter$ = true;

Buffer.prototype.dogfort$http$IHTTPResponseWriter$_write_response$arity$2 = (function (data,res){
var data__$1 = this;
res.write(data__$1);

return true;
});

dogfort.http.Stream.prototype.dogfort$http$IHTTPResponseWriter$ = true;

dogfort.http.Stream.prototype.dogfort$http$IHTTPResponseWriter$_write_response$arity$2 = (function (data,res){
var data__$1 = this;
redlobster.events.on.call(null,data__$1,new cljs.core.Keyword(null,"error","error",-978969032),((function (data__$1){
return (function (p1__10447_SHARP_){
return dogfort.http.send_error_page.call(null,res,(500),p1__10447_SHARP_);
});})(data__$1))
);

data__$1.pipe(res);

return false;
});
dogfort.http.build_listener = (function dogfort$http$build_listener(handler,options){
return (function (req,res){
var url = dogfort.http.url.parse(req.url);
var uri = url.pathname;
var query = url.search;
var query__$1 = (cljs.core.truth_(query)?query.substring((1)):null);
var headers = cljs.core.js__GT_clj.call(null,req.headers);
var conn = req.connection;
var address = cljs.core.js__GT_clj.call(null,conn.address());
var peer_cert_fn = conn.getPeerCertificate;
var ring_req = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.Keyword(null,"ssl-client-cert","ssl-client-cert",661784516),new cljs.core.Keyword(null,"remote-addr","remote-addr",815723977),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"server-port","server-port",663745648),new cljs.core.Keyword(null,"content-length","content-length",441319507),new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.Keyword(null,"character-encoding","character-encoding",-1946080777),new cljs.core.Keyword(null,"uri","uri",-774711847),new cljs.core.Keyword(null,"server-name","server-name",-1012104295),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"scheme","scheme",90199613),new cljs.core.Keyword(null,"request-method","request-method",1764796830)],[res,(cljs.core.truth_(peer_cert_fn)?peer_cert_fn.call(null):null),conn.remoteAddress,headers,address.call(null,"port"),headers.call(null,"content-length"),headers.call(null,"content-type"),null,uri,address.call(null,"address"),query__$1,req,"http",cljs.core.keyword.call(null,req.method.toLowerCase())]);
var result = handler.call(null,ring_req);
return redlobster.promise.on_realised.call(null,result,((function (url,uri,query,query__$1,headers,conn,address,peer_cert_fn,ring_req,result){
return (function (p1__10523_SHARP_){
return dogfort.http.send_result.call(null,res,p1__10523_SHARP_);
});})(url,uri,query,query__$1,headers,conn,address,peer_cert_fn,ring_req,result))
,((function (url,uri,query,query__$1,headers,conn,address,peer_cert_fn,ring_req,result){
return (function (p1__10524_SHARP_){
return dogfort.http.send_error_page.call(null,res,(500),p1__10524_SHARP_);
});})(url,uri,query,query__$1,headers,conn,address,peer_cert_fn,ring_req,result))
);
});
});
dogfort.http.ws_handler = (function dogfort$http$ws_handler(handler,websocket){
var upgrade_req = websocket.upgradeReq;
var url = dogfort.http.url.parse(upgrade_req.url);
var uri = url.pathname;
var query = url.search;
var query__$1 = (cljs.core.truth_(query)?query.substring((1)):null);
var headers = cljs.core.js__GT_clj.call(null,upgrade_req.headers);
var conn = upgrade_req.connection;
var address = cljs.core.js__GT_clj.call(null,conn.address());
return handler.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"server-port","server-port",663745648),address.call(null,"port"),new cljs.core.Keyword(null,"server-name","server-name",-1012104295),address.call(null,"address"),new cljs.core.Keyword(null,"uri","uri",-774711847),uri,new cljs.core.Keyword(null,"query-string","query-string",-1018845061),query__$1,new cljs.core.Keyword(null,"headers","headers",-835030129),headers,new cljs.core.Keyword(null,"websocket","websocket",-1714963101),websocket,new cljs.core.Keyword(null,"websocket?","websocket?",1552493139),true,new cljs.core.Keyword(null,"request-method","request-method",1764796830),new cljs.core.Keyword(null,"get","get",1683182755)], null));
});
dogfort.http.run_http = (function dogfort$http$run_http(handler,options){
var server = dogfort.http.http.createServer(dogfort.http.build_listener.call(null,handler,options));
var wss = (new dogfort.http.ws.Server({"server": server}));
wss.on("connection",((function (server,wss){
return (function (p1__10525_SHARP_){
return dogfort.http.ws_handler.call(null,handler,p1__10525_SHARP_);
});})(server,wss))
);

return server.listen(new cljs.core.Keyword(null,"port","port",1534937262).cljs$core$IFn$_invoke$arity$1(options));
});

//# sourceMappingURL=http.js.map