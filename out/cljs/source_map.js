// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('cljs.source_map');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.source_map.base64_vlq');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.call(null,(function (m,p__6472){
var vec__6473 = p__6472;
var i = cljs.core.nth.call(null,vec__6473,(0),null);
var v = cljs.core.nth.call(null,vec__6473,(1),null);
return cljs.core.assoc.call(null,m,v,i);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,(function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}),sources));
});
/**
 * Take a seq of source file names and return a comparator
 * that can be used to construct a sorted map. For reverse
 * source maps.
 */
cljs.source_map.source_compare = (function cljs$source_map$source_compare(sources){
var sources__$1 = cljs.source_map.indexed_sources.call(null,sources);
return ((function (sources__$1){
return (function (a,b){
return cljs.core.compare.call(null,sources__$1.call(null,a),sources__$1.call(null,b));
});
;})(sources__$1))
});
/**
 * Take a source map segment represented as a vector
 * and return a map.
 */
cljs.source_map.seg__GT_map = (function cljs$source_map$seg__GT_map(seg,source_map){
var vec__6475 = seg;
var gcol = cljs.core.nth.call(null,vec__6475,(0),null);
var source = cljs.core.nth.call(null,vec__6475,(1),null);
var line = cljs.core.nth.call(null,vec__6475,(2),null);
var col = cljs.core.nth.call(null,vec__6475,(3),null);
var name = cljs.core.nth.call(null,vec__6475,(4),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol,new cljs.core.Keyword(null,"source","source",-433931539),(goog.object.get(source_map,"sources")[source]),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"name","name",1843675177),(function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,seg));
if(cljs.core.truth_(temp__4425__auto__)){
var name__$1 = temp__4425__auto__;
return (goog.object.get(source_map,"names")[name__$1]);
} else {
return null;
}
})()], null);
});
/**
 * Combine a source map segment vector and a relative
 * source map segment vector and combine them to get
 * an absolute segment posititon information as a vector.
 */
cljs.source_map.seg_combine = (function cljs$source_map$seg_combine(seg,relseg){
var vec__6478 = seg;
var gcol = cljs.core.nth.call(null,vec__6478,(0),null);
var source = cljs.core.nth.call(null,vec__6478,(1),null);
var line = cljs.core.nth.call(null,vec__6478,(2),null);
var col = cljs.core.nth.call(null,vec__6478,(3),null);
var name = cljs.core.nth.call(null,vec__6478,(4),null);
var vec__6479 = relseg;
var rgcol = cljs.core.nth.call(null,vec__6479,(0),null);
var rsource = cljs.core.nth.call(null,vec__6479,(1),null);
var rline = cljs.core.nth.call(null,vec__6479,(2),null);
var rcol = cljs.core.nth.call(null,vec__6479,(3),null);
var rname = cljs.core.nth.call(null,vec__6479,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__4143__auto__ = source;
if(cljs.core.truth_(or__4143__auto__)){
return or__4143__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__4143__auto__ = line;
if(cljs.core.truth_(or__4143__auto__)){
return or__4143__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__4143__auto__ = col;
if(cljs.core.truth_(or__4143__auto__)){
return or__4143__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__4143__auto__ = name;
if(cljs.core.truth_(or__4143__auto__)){
return or__4143__auto__;
} else {
return (0);
}
})() + rname)], null);
if(cljs.core.truth_(name)){
return cljs.core.with_meta.call(null,nseg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),(name + rname)], null));
} else {
return nseg;
}
});
/**
 * Helper for decode-reverse. Take a reverse source map and
 *   update it with a segment map.
 */
cljs.source_map.update_reverse_result = (function cljs$source_map$update_reverse_result(result,segmap,gline){
var map__6482 = segmap;
var map__6482__$1 = ((((!((map__6482 == null)))?((((map__6482.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6482.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6482):map__6482);
var gcol = cljs.core.get.call(null,map__6482__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__6482__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__6482__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__6482__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__6482__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__6482,map__6482__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__6482,map__6482__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__6482,map__6482__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__6482,map__6482__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__6482,map__6482__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__6482,map__6482__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var args6484 = [];
var len__5201__auto___6488 = arguments.length;
var i__5202__auto___6489 = (0);
while(true){
if((i__5202__auto___6489 < len__5201__auto___6488)){
args6484.push((arguments[i__5202__auto___6489]));

var G__6490 = (i__5202__auto___6489 + (1));
i__5202__auto___6489 = G__6490;
continue;
} else {
}
break;
}

var G__6486 = args6484.length;
switch (G__6486) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6484.length)].join('')));

}
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode_reverse.call(null,goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.sorted_map_by.call(null,cljs.source_map.source_compare.call(null,sources));
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__6487 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__6492 = cljs.core.next.call(null,segs__$1);
var G__6493 = nrelseg;
var G__6494 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__6492;
relseg__$1 = G__6493;
result__$1 = G__6494;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__6487,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__6487,(1),null);
var G__6495 = (gline + (1));
var G__6496 = cljs.core.next.call(null,lines__$1);
var G__6497 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__6498 = result__$1;
gline = G__6495;
lines__$1 = G__6496;
relseg = G__6497;
result = G__6498;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode_reverse.cljs$lang$maxFixedArity = 2;
/**
 * Helper for decode. Take a source map and update it based on a
 *   segment map.
 */
cljs.source_map.update_result = (function cljs$source_map$update_result(result,segmap,gline){
var map__6502 = segmap;
var map__6502__$1 = ((((!((map__6502 == null)))?((((map__6502.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6502.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6502):map__6502);
var gcol = cljs.core.get.call(null,map__6502__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__6502__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__6502__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__6502__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__6502__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__6502,map__6502__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__6502,map__6502__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__6499_SHARP_){
return cljs.core.conj.call(null,p1__6499_SHARP_,d__$1);
});})(map__6502,map__6502__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__6502,map__6502__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var args6504 = [];
var len__5201__auto___6508 = arguments.length;
var i__5202__auto___6509 = (0);
while(true){
if((i__5202__auto___6509 < len__5201__auto___6508)){
args6504.push((arguments[i__5202__auto___6509]));

var G__6510 = (i__5202__auto___6509 + (1));
i__5202__auto___6509 = G__6510;
continue;
} else {
}
break;
}

var G__6506 = args6504.length;
switch (G__6506) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6504.length)].join('')));

}
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode.call(null,goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__6507 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__6512 = cljs.core.next.call(null,segs__$1);
var G__6513 = nrelseg;
var G__6514 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__6512;
relseg__$1 = G__6513;
result__$1 = G__6514;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__6507,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__6507,(1),null);
var G__6515 = (gline + (1));
var G__6516 = cljs.core.next.call(null,lines__$1);
var G__6517 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__6518 = result__$1;
gline = G__6515;
lines__$1 = G__6516;
relseg = G__6517;
result = G__6518;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode.cljs$lang$maxFixedArity = 2;
/**
 * Take a nested sorted map encoding line and column information
 * for a file and return a vector of vectors of encoded segments.
 * Each vector represents a line, and the internal vectors are segments
 * representing the contents of the line.
 */
cljs.source_map.lines__GT_segs = (function cljs$source_map$lines__GT_segs(lines){
var relseg = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null));
return cljs.core.reduce.call(null,((function (relseg){
return (function (segs,cols){
cljs.core.swap_BANG_.call(null,relseg,((function (relseg){
return (function (p__6525){
var vec__6526 = p__6525;
var _ = cljs.core.nth.call(null,vec__6526,(0),null);
var source = cljs.core.nth.call(null,vec__6526,(1),null);
var line = cljs.core.nth.call(null,vec__6526,(2),null);
var col = cljs.core.nth.call(null,vec__6526,(3),null);
var name = cljs.core.nth.call(null,vec__6526,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__6527){
var vec__6528 = p__6527;
var gcol = cljs.core.nth.call(null,vec__6528,(0),null);
var sidx = cljs.core.nth.call(null,vec__6528,(1),null);
var line = cljs.core.nth.call(null,vec__6528,(2),null);
var col = cljs.core.nth.call(null,vec__6528,(3),null);
var name = cljs.core.nth.call(null,vec__6528,(4),null);
var seg = vec__6528;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__6528,gcol,sidx,line,col,name,seg,relseg){
return (function (p__6529){
var vec__6530 = p__6529;
var _ = cljs.core.nth.call(null,vec__6530,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__6530,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__6530,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__6530,(3),null);
var lname = cljs.core.nth.call(null,vec__6530,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__4143__auto__ = name;
if(cljs.core.truth_(or__4143__auto__)){
return or__4143__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__6528,gcol,sidx,line,col,name,seg,relseg))
);

return cljs.core.conj.call(null,cols__$1,cljs.source_map.base64_vlq.encode.call(null,offset));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,cols));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,lines);
});
/**
 * Take an internal source map representation represented as nested
 * sorted maps of file, line, column and return a source map v3 JSON
 * string.
 */
cljs.source_map.encode = (function cljs$source_map$encode(m,opts){
var lines = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));
var names__GT_idx = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var name_idx = cljs.core.atom.call(null,(0));
var preamble_lines = cljs.core.take.call(null,(function (){var or__4143__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4143__auto__)){
return or__4143__auto__;
} else {
return (0);
}
})(),cljs.core.repeat.call(null,cljs.core.PersistentVector.EMPTY));
var info__GT_segv = ((function (lines,names__GT_idx,name_idx,preamble_lines){
return (function (info,source_idx,line,col){
var segv = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gcol","gcol",309250807).cljs$core$IFn$_invoke$arity$1(info),source_idx,line,col], null);
var temp__4423__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(temp__4423__auto__)){
var name = temp__4423__auto__;
var idx = (function (){var temp__4423__auto____$1 = cljs.core.get.call(null,cljs.core.deref.call(null,names__GT_idx),name);
if(cljs.core.truth_(temp__4423__auto____$1)){
var idx = temp__4423__auto____$1;
return idx;
} else {
var cidx = cljs.core.deref.call(null,name_idx);
cljs.core.swap_BANG_.call(null,names__GT_idx,cljs.core.assoc,name,cidx);

cljs.core.swap_BANG_.call(null,name_idx,cljs.core.inc);

return cidx;
}
})();
return cljs.core.conj.call(null,segv,idx);
} else {
return segv;
}
});})(lines,names__GT_idx,name_idx,preamble_lines))
;
var encode_cols = ((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (infos,source_idx,line,col){
var seq__6584 = cljs.core.seq.call(null,infos);
var chunk__6585 = null;
var count__6586 = (0);
var i__6587 = (0);
while(true){
if((i__6587 < count__6586)){
var info = cljs.core._nth.call(null,chunk__6585,i__6587);
var segv_6634 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_6635 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_6636 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_6635 > (lc_6636 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__6584,chunk__6585,count__6586,i__6587,segv_6634,gline_6635,lc_6636,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_6635 - (lc_6636 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_6634], null));
});})(seq__6584,chunk__6585,count__6586,i__6587,segv_6634,gline_6635,lc_6636,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__6584,chunk__6585,count__6586,i__6587,segv_6634,gline_6635,lc_6636,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_6635], null),cljs.core.conj,segv_6634);
});})(seq__6584,chunk__6585,count__6586,i__6587,segv_6634,gline_6635,lc_6636,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__6637 = seq__6584;
var G__6638 = chunk__6585;
var G__6639 = count__6586;
var G__6640 = (i__6587 + (1));
seq__6584 = G__6637;
chunk__6585 = G__6638;
count__6586 = G__6639;
i__6587 = G__6640;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__6584);
if(temp__4425__auto__){
var seq__6584__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6584__$1)){
var c__4946__auto__ = cljs.core.chunk_first.call(null,seq__6584__$1);
var G__6641 = cljs.core.chunk_rest.call(null,seq__6584__$1);
var G__6642 = c__4946__auto__;
var G__6643 = cljs.core.count.call(null,c__4946__auto__);
var G__6644 = (0);
seq__6584 = G__6641;
chunk__6585 = G__6642;
count__6586 = G__6643;
i__6587 = G__6644;
continue;
} else {
var info = cljs.core.first.call(null,seq__6584__$1);
var segv_6645 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_6646 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_6647 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_6646 > (lc_6647 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__6584,chunk__6585,count__6586,i__6587,segv_6645,gline_6646,lc_6647,info,seq__6584__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_6646 - (lc_6647 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_6645], null));
});})(seq__6584,chunk__6585,count__6586,i__6587,segv_6645,gline_6646,lc_6647,info,seq__6584__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__6584,chunk__6585,count__6586,i__6587,segv_6645,gline_6646,lc_6647,info,seq__6584__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_6646], null),cljs.core.conj,segv_6645);
});})(seq__6584,chunk__6585,count__6586,i__6587,segv_6645,gline_6646,lc_6647,info,seq__6584__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__6648 = cljs.core.next.call(null,seq__6584__$1);
var G__6649 = null;
var G__6650 = (0);
var G__6651 = (0);
seq__6584 = G__6648;
chunk__6585 = G__6649;
count__6586 = G__6650;
i__6587 = G__6651;
continue;
}
} else {
return null;
}
}
break;
}
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
;
var seq__6588_6652 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__6589_6653 = null;
var count__6590_6654 = (0);
var i__6591_6655 = (0);
while(true){
if((i__6591_6655 < count__6590_6654)){
var vec__6592_6656 = cljs.core._nth.call(null,chunk__6589_6653,i__6591_6655);
var source_idx_6657 = cljs.core.nth.call(null,vec__6592_6656,(0),null);
var vec__6593_6658 = cljs.core.nth.call(null,vec__6592_6656,(1),null);
var __6659 = cljs.core.nth.call(null,vec__6593_6658,(0),null);
var lines_6660__$1 = cljs.core.nth.call(null,vec__6593_6658,(1),null);
var seq__6594_6661 = cljs.core.seq.call(null,lines_6660__$1);
var chunk__6595_6662 = null;
var count__6596_6663 = (0);
var i__6597_6664 = (0);
while(true){
if((i__6597_6664 < count__6596_6663)){
var vec__6598_6665 = cljs.core._nth.call(null,chunk__6595_6662,i__6597_6664);
var line_6666 = cljs.core.nth.call(null,vec__6598_6665,(0),null);
var cols_6667 = cljs.core.nth.call(null,vec__6598_6665,(1),null);
var seq__6599_6668 = cljs.core.seq.call(null,cols_6667);
var chunk__6600_6669 = null;
var count__6601_6670 = (0);
var i__6602_6671 = (0);
while(true){
if((i__6602_6671 < count__6601_6670)){
var vec__6603_6672 = cljs.core._nth.call(null,chunk__6600_6669,i__6602_6671);
var col_6673 = cljs.core.nth.call(null,vec__6603_6672,(0),null);
var infos_6674 = cljs.core.nth.call(null,vec__6603_6672,(1),null);
encode_cols.call(null,infos_6674,source_idx_6657,line_6666,col_6673);

var G__6675 = seq__6599_6668;
var G__6676 = chunk__6600_6669;
var G__6677 = count__6601_6670;
var G__6678 = (i__6602_6671 + (1));
seq__6599_6668 = G__6675;
chunk__6600_6669 = G__6676;
count__6601_6670 = G__6677;
i__6602_6671 = G__6678;
continue;
} else {
var temp__4425__auto___6679 = cljs.core.seq.call(null,seq__6599_6668);
if(temp__4425__auto___6679){
var seq__6599_6680__$1 = temp__4425__auto___6679;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6599_6680__$1)){
var c__4946__auto___6681 = cljs.core.chunk_first.call(null,seq__6599_6680__$1);
var G__6682 = cljs.core.chunk_rest.call(null,seq__6599_6680__$1);
var G__6683 = c__4946__auto___6681;
var G__6684 = cljs.core.count.call(null,c__4946__auto___6681);
var G__6685 = (0);
seq__6599_6668 = G__6682;
chunk__6600_6669 = G__6683;
count__6601_6670 = G__6684;
i__6602_6671 = G__6685;
continue;
} else {
var vec__6604_6686 = cljs.core.first.call(null,seq__6599_6680__$1);
var col_6687 = cljs.core.nth.call(null,vec__6604_6686,(0),null);
var infos_6688 = cljs.core.nth.call(null,vec__6604_6686,(1),null);
encode_cols.call(null,infos_6688,source_idx_6657,line_6666,col_6687);

var G__6689 = cljs.core.next.call(null,seq__6599_6680__$1);
var G__6690 = null;
var G__6691 = (0);
var G__6692 = (0);
seq__6599_6668 = G__6689;
chunk__6600_6669 = G__6690;
count__6601_6670 = G__6691;
i__6602_6671 = G__6692;
continue;
}
} else {
}
}
break;
}

var G__6693 = seq__6594_6661;
var G__6694 = chunk__6595_6662;
var G__6695 = count__6596_6663;
var G__6696 = (i__6597_6664 + (1));
seq__6594_6661 = G__6693;
chunk__6595_6662 = G__6694;
count__6596_6663 = G__6695;
i__6597_6664 = G__6696;
continue;
} else {
var temp__4425__auto___6697 = cljs.core.seq.call(null,seq__6594_6661);
if(temp__4425__auto___6697){
var seq__6594_6698__$1 = temp__4425__auto___6697;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6594_6698__$1)){
var c__4946__auto___6699 = cljs.core.chunk_first.call(null,seq__6594_6698__$1);
var G__6700 = cljs.core.chunk_rest.call(null,seq__6594_6698__$1);
var G__6701 = c__4946__auto___6699;
var G__6702 = cljs.core.count.call(null,c__4946__auto___6699);
var G__6703 = (0);
seq__6594_6661 = G__6700;
chunk__6595_6662 = G__6701;
count__6596_6663 = G__6702;
i__6597_6664 = G__6703;
continue;
} else {
var vec__6605_6704 = cljs.core.first.call(null,seq__6594_6698__$1);
var line_6705 = cljs.core.nth.call(null,vec__6605_6704,(0),null);
var cols_6706 = cljs.core.nth.call(null,vec__6605_6704,(1),null);
var seq__6606_6707 = cljs.core.seq.call(null,cols_6706);
var chunk__6607_6708 = null;
var count__6608_6709 = (0);
var i__6609_6710 = (0);
while(true){
if((i__6609_6710 < count__6608_6709)){
var vec__6610_6711 = cljs.core._nth.call(null,chunk__6607_6708,i__6609_6710);
var col_6712 = cljs.core.nth.call(null,vec__6610_6711,(0),null);
var infos_6713 = cljs.core.nth.call(null,vec__6610_6711,(1),null);
encode_cols.call(null,infos_6713,source_idx_6657,line_6705,col_6712);

var G__6714 = seq__6606_6707;
var G__6715 = chunk__6607_6708;
var G__6716 = count__6608_6709;
var G__6717 = (i__6609_6710 + (1));
seq__6606_6707 = G__6714;
chunk__6607_6708 = G__6715;
count__6608_6709 = G__6716;
i__6609_6710 = G__6717;
continue;
} else {
var temp__4425__auto___6718__$1 = cljs.core.seq.call(null,seq__6606_6707);
if(temp__4425__auto___6718__$1){
var seq__6606_6719__$1 = temp__4425__auto___6718__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6606_6719__$1)){
var c__4946__auto___6720 = cljs.core.chunk_first.call(null,seq__6606_6719__$1);
var G__6721 = cljs.core.chunk_rest.call(null,seq__6606_6719__$1);
var G__6722 = c__4946__auto___6720;
var G__6723 = cljs.core.count.call(null,c__4946__auto___6720);
var G__6724 = (0);
seq__6606_6707 = G__6721;
chunk__6607_6708 = G__6722;
count__6608_6709 = G__6723;
i__6609_6710 = G__6724;
continue;
} else {
var vec__6611_6725 = cljs.core.first.call(null,seq__6606_6719__$1);
var col_6726 = cljs.core.nth.call(null,vec__6611_6725,(0),null);
var infos_6727 = cljs.core.nth.call(null,vec__6611_6725,(1),null);
encode_cols.call(null,infos_6727,source_idx_6657,line_6705,col_6726);

var G__6728 = cljs.core.next.call(null,seq__6606_6719__$1);
var G__6729 = null;
var G__6730 = (0);
var G__6731 = (0);
seq__6606_6707 = G__6728;
chunk__6607_6708 = G__6729;
count__6608_6709 = G__6730;
i__6609_6710 = G__6731;
continue;
}
} else {
}
}
break;
}

var G__6732 = cljs.core.next.call(null,seq__6594_6698__$1);
var G__6733 = null;
var G__6734 = (0);
var G__6735 = (0);
seq__6594_6661 = G__6732;
chunk__6595_6662 = G__6733;
count__6596_6663 = G__6734;
i__6597_6664 = G__6735;
continue;
}
} else {
}
}
break;
}

var G__6736 = seq__6588_6652;
var G__6737 = chunk__6589_6653;
var G__6738 = count__6590_6654;
var G__6739 = (i__6591_6655 + (1));
seq__6588_6652 = G__6736;
chunk__6589_6653 = G__6737;
count__6590_6654 = G__6738;
i__6591_6655 = G__6739;
continue;
} else {
var temp__4425__auto___6740 = cljs.core.seq.call(null,seq__6588_6652);
if(temp__4425__auto___6740){
var seq__6588_6741__$1 = temp__4425__auto___6740;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6588_6741__$1)){
var c__4946__auto___6742 = cljs.core.chunk_first.call(null,seq__6588_6741__$1);
var G__6743 = cljs.core.chunk_rest.call(null,seq__6588_6741__$1);
var G__6744 = c__4946__auto___6742;
var G__6745 = cljs.core.count.call(null,c__4946__auto___6742);
var G__6746 = (0);
seq__6588_6652 = G__6743;
chunk__6589_6653 = G__6744;
count__6590_6654 = G__6745;
i__6591_6655 = G__6746;
continue;
} else {
var vec__6612_6747 = cljs.core.first.call(null,seq__6588_6741__$1);
var source_idx_6748 = cljs.core.nth.call(null,vec__6612_6747,(0),null);
var vec__6613_6749 = cljs.core.nth.call(null,vec__6612_6747,(1),null);
var __6750 = cljs.core.nth.call(null,vec__6613_6749,(0),null);
var lines_6751__$1 = cljs.core.nth.call(null,vec__6613_6749,(1),null);
var seq__6614_6752 = cljs.core.seq.call(null,lines_6751__$1);
var chunk__6615_6753 = null;
var count__6616_6754 = (0);
var i__6617_6755 = (0);
while(true){
if((i__6617_6755 < count__6616_6754)){
var vec__6618_6756 = cljs.core._nth.call(null,chunk__6615_6753,i__6617_6755);
var line_6757 = cljs.core.nth.call(null,vec__6618_6756,(0),null);
var cols_6758 = cljs.core.nth.call(null,vec__6618_6756,(1),null);
var seq__6619_6759 = cljs.core.seq.call(null,cols_6758);
var chunk__6620_6760 = null;
var count__6621_6761 = (0);
var i__6622_6762 = (0);
while(true){
if((i__6622_6762 < count__6621_6761)){
var vec__6623_6763 = cljs.core._nth.call(null,chunk__6620_6760,i__6622_6762);
var col_6764 = cljs.core.nth.call(null,vec__6623_6763,(0),null);
var infos_6765 = cljs.core.nth.call(null,vec__6623_6763,(1),null);
encode_cols.call(null,infos_6765,source_idx_6748,line_6757,col_6764);

var G__6766 = seq__6619_6759;
var G__6767 = chunk__6620_6760;
var G__6768 = count__6621_6761;
var G__6769 = (i__6622_6762 + (1));
seq__6619_6759 = G__6766;
chunk__6620_6760 = G__6767;
count__6621_6761 = G__6768;
i__6622_6762 = G__6769;
continue;
} else {
var temp__4425__auto___6770__$1 = cljs.core.seq.call(null,seq__6619_6759);
if(temp__4425__auto___6770__$1){
var seq__6619_6771__$1 = temp__4425__auto___6770__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6619_6771__$1)){
var c__4946__auto___6772 = cljs.core.chunk_first.call(null,seq__6619_6771__$1);
var G__6773 = cljs.core.chunk_rest.call(null,seq__6619_6771__$1);
var G__6774 = c__4946__auto___6772;
var G__6775 = cljs.core.count.call(null,c__4946__auto___6772);
var G__6776 = (0);
seq__6619_6759 = G__6773;
chunk__6620_6760 = G__6774;
count__6621_6761 = G__6775;
i__6622_6762 = G__6776;
continue;
} else {
var vec__6624_6777 = cljs.core.first.call(null,seq__6619_6771__$1);
var col_6778 = cljs.core.nth.call(null,vec__6624_6777,(0),null);
var infos_6779 = cljs.core.nth.call(null,vec__6624_6777,(1),null);
encode_cols.call(null,infos_6779,source_idx_6748,line_6757,col_6778);

var G__6780 = cljs.core.next.call(null,seq__6619_6771__$1);
var G__6781 = null;
var G__6782 = (0);
var G__6783 = (0);
seq__6619_6759 = G__6780;
chunk__6620_6760 = G__6781;
count__6621_6761 = G__6782;
i__6622_6762 = G__6783;
continue;
}
} else {
}
}
break;
}

var G__6784 = seq__6614_6752;
var G__6785 = chunk__6615_6753;
var G__6786 = count__6616_6754;
var G__6787 = (i__6617_6755 + (1));
seq__6614_6752 = G__6784;
chunk__6615_6753 = G__6785;
count__6616_6754 = G__6786;
i__6617_6755 = G__6787;
continue;
} else {
var temp__4425__auto___6788__$1 = cljs.core.seq.call(null,seq__6614_6752);
if(temp__4425__auto___6788__$1){
var seq__6614_6789__$1 = temp__4425__auto___6788__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6614_6789__$1)){
var c__4946__auto___6790 = cljs.core.chunk_first.call(null,seq__6614_6789__$1);
var G__6791 = cljs.core.chunk_rest.call(null,seq__6614_6789__$1);
var G__6792 = c__4946__auto___6790;
var G__6793 = cljs.core.count.call(null,c__4946__auto___6790);
var G__6794 = (0);
seq__6614_6752 = G__6791;
chunk__6615_6753 = G__6792;
count__6616_6754 = G__6793;
i__6617_6755 = G__6794;
continue;
} else {
var vec__6625_6795 = cljs.core.first.call(null,seq__6614_6789__$1);
var line_6796 = cljs.core.nth.call(null,vec__6625_6795,(0),null);
var cols_6797 = cljs.core.nth.call(null,vec__6625_6795,(1),null);
var seq__6626_6798 = cljs.core.seq.call(null,cols_6797);
var chunk__6627_6799 = null;
var count__6628_6800 = (0);
var i__6629_6801 = (0);
while(true){
if((i__6629_6801 < count__6628_6800)){
var vec__6630_6802 = cljs.core._nth.call(null,chunk__6627_6799,i__6629_6801);
var col_6803 = cljs.core.nth.call(null,vec__6630_6802,(0),null);
var infos_6804 = cljs.core.nth.call(null,vec__6630_6802,(1),null);
encode_cols.call(null,infos_6804,source_idx_6748,line_6796,col_6803);

var G__6805 = seq__6626_6798;
var G__6806 = chunk__6627_6799;
var G__6807 = count__6628_6800;
var G__6808 = (i__6629_6801 + (1));
seq__6626_6798 = G__6805;
chunk__6627_6799 = G__6806;
count__6628_6800 = G__6807;
i__6629_6801 = G__6808;
continue;
} else {
var temp__4425__auto___6809__$2 = cljs.core.seq.call(null,seq__6626_6798);
if(temp__4425__auto___6809__$2){
var seq__6626_6810__$1 = temp__4425__auto___6809__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6626_6810__$1)){
var c__4946__auto___6811 = cljs.core.chunk_first.call(null,seq__6626_6810__$1);
var G__6812 = cljs.core.chunk_rest.call(null,seq__6626_6810__$1);
var G__6813 = c__4946__auto___6811;
var G__6814 = cljs.core.count.call(null,c__4946__auto___6811);
var G__6815 = (0);
seq__6626_6798 = G__6812;
chunk__6627_6799 = G__6813;
count__6628_6800 = G__6814;
i__6629_6801 = G__6815;
continue;
} else {
var vec__6631_6816 = cljs.core.first.call(null,seq__6626_6810__$1);
var col_6817 = cljs.core.nth.call(null,vec__6631_6816,(0),null);
var infos_6818 = cljs.core.nth.call(null,vec__6631_6816,(1),null);
encode_cols.call(null,infos_6818,source_idx_6748,line_6796,col_6817);

var G__6819 = cljs.core.next.call(null,seq__6626_6810__$1);
var G__6820 = null;
var G__6821 = (0);
var G__6822 = (0);
seq__6626_6798 = G__6819;
chunk__6627_6799 = G__6820;
count__6628_6800 = G__6821;
i__6629_6801 = G__6822;
continue;
}
} else {
}
}
break;
}

var G__6823 = cljs.core.next.call(null,seq__6614_6789__$1);
var G__6824 = null;
var G__6825 = (0);
var G__6826 = (0);
seq__6614_6752 = G__6823;
chunk__6615_6753 = G__6824;
count__6616_6754 = G__6825;
i__6617_6755 = G__6826;
continue;
}
} else {
}
}
break;
}

var G__6827 = cljs.core.next.call(null,seq__6588_6741__$1);
var G__6828 = null;
var G__6829 = (0);
var G__6830 = (0);
seq__6588_6652 = G__6827;
chunk__6589_6653 = G__6828;
count__6590_6654 = G__6829;
i__6591_6655 = G__6830;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__6632 = {"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__6531_SHARP_){
return [cljs.core.str(p1__6531_SHARP_),cljs.core.str("?rel="),cljs.core.str((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__6532_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__6532_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__6533_SHARP_){
return clojure.string.join.call(null,",",p1__6533_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))};
var G__6632__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))?(function (){var G__6633 = G__6632;
goog.object.set(G__6633,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__6633;
})():G__6632);
return G__6632__$1;
})();
return JSON.stringify(source_map_file_contents);
});
/**
 * Merge an internal source map representation of a single
 * ClojureScript file mapping original to generated with a
 * second source map mapping original JS to generated JS.
 * The is to support source maps that work through multiple
 * compilation steps like Google Closure optimization passes.
 */
cljs.source_map.merge_source_maps = (function cljs$source_map$merge_source_maps(cljs_map,js_map){
var line_map_seq = cljs.core.seq.call(null,cljs_map);
var new_lines = cljs.core.sorted_map.call(null);
while(true){
if(line_map_seq){
var vec__6836 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__6836,(0),null);
var col_map = cljs.core.nth.call(null,vec__6836,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__6837 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__6837,(0),null);
var infos = cljs.core.nth.call(null,vec__6837,(1),null);
var G__6841 = cljs.core.next.call(null,col_map_seq);
var G__6842 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__6837,col,infos,vec__6836,line,col_map){
return (function (v,p__6838){
var map__6839 = p__6838;
var map__6839__$1 = ((((!((map__6839 == null)))?((((map__6839.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6839.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6839):map__6839);
var gline = cljs.core.get.call(null,map__6839__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__6839__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__6837,col,infos,vec__6836,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__6841;
new_cols = G__6842;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__6843 = cljs.core.next.call(null,line_map_seq);
var G__6844 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__6843;
new_lines = G__6844;
continue;
} else {
return new_lines;
}
break;
}
});
/**
 * Given a ClojureScript to JavaScript source map, invert it. Useful when
 * mapping JavaScript stack traces when environment support is unavailable.
 */
cljs.source_map.invert_reverse_map = (function cljs$source_map$invert_reverse_map(reverse_map){
var inverted = cljs.core.atom.call(null,cljs.core.sorted_map.call(null));
var seq__6895_6945 = cljs.core.seq.call(null,reverse_map);
var chunk__6896_6946 = null;
var count__6897_6947 = (0);
var i__6898_6948 = (0);
while(true){
if((i__6898_6948 < count__6897_6947)){
var vec__6899_6949 = cljs.core._nth.call(null,chunk__6896_6946,i__6898_6948);
var line_6950 = cljs.core.nth.call(null,vec__6899_6949,(0),null);
var columns_6951 = cljs.core.nth.call(null,vec__6899_6949,(1),null);
var seq__6900_6952 = cljs.core.seq.call(null,columns_6951);
var chunk__6901_6953 = null;
var count__6902_6954 = (0);
var i__6903_6955 = (0);
while(true){
if((i__6903_6955 < count__6902_6954)){
var vec__6904_6956 = cljs.core._nth.call(null,chunk__6901_6953,i__6903_6955);
var column_6957 = cljs.core.nth.call(null,vec__6904_6956,(0),null);
var column_info_6958 = cljs.core.nth.call(null,vec__6904_6956,(1),null);
var seq__6905_6959 = cljs.core.seq.call(null,column_info_6958);
var chunk__6906_6960 = null;
var count__6907_6961 = (0);
var i__6908_6962 = (0);
while(true){
if((i__6908_6962 < count__6907_6961)){
var map__6909_6963 = cljs.core._nth.call(null,chunk__6906_6960,i__6908_6962);
var map__6909_6964__$1 = ((((!((map__6909_6963 == null)))?((((map__6909_6963.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6909_6963.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6909_6963):map__6909_6963);
var gline_6965 = cljs.core.get.call(null,map__6909_6964__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_6966 = cljs.core.get.call(null,map__6909_6964__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_6967 = cljs.core.get.call(null,map__6909_6964__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_6965], null),cljs.core.fnil.call(null,((function (seq__6905_6959,chunk__6906_6960,count__6907_6961,i__6908_6962,seq__6900_6952,chunk__6901_6953,count__6902_6954,i__6903_6955,seq__6895_6945,chunk__6896_6946,count__6897_6947,i__6898_6948,map__6909_6963,map__6909_6964__$1,gline_6965,gcol_6966,name_6967,vec__6904_6956,column_6957,column_info_6958,vec__6899_6949,line_6950,columns_6951,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_6957], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_6950,new cljs.core.Keyword(null,"col","col",-1959363084),column_6957,new cljs.core.Keyword(null,"name","name",1843675177),name_6967], null));
});})(seq__6905_6959,chunk__6906_6960,count__6907_6961,i__6908_6962,seq__6900_6952,chunk__6901_6953,count__6902_6954,i__6903_6955,seq__6895_6945,chunk__6896_6946,count__6897_6947,i__6898_6948,map__6909_6963,map__6909_6964__$1,gline_6965,gcol_6966,name_6967,vec__6904_6956,column_6957,column_info_6958,vec__6899_6949,line_6950,columns_6951,inverted))
,cljs.core.sorted_map.call(null)));

var G__6968 = seq__6905_6959;
var G__6969 = chunk__6906_6960;
var G__6970 = count__6907_6961;
var G__6971 = (i__6908_6962 + (1));
seq__6905_6959 = G__6968;
chunk__6906_6960 = G__6969;
count__6907_6961 = G__6970;
i__6908_6962 = G__6971;
continue;
} else {
var temp__4425__auto___6972 = cljs.core.seq.call(null,seq__6905_6959);
if(temp__4425__auto___6972){
var seq__6905_6973__$1 = temp__4425__auto___6972;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6905_6973__$1)){
var c__4946__auto___6974 = cljs.core.chunk_first.call(null,seq__6905_6973__$1);
var G__6975 = cljs.core.chunk_rest.call(null,seq__6905_6973__$1);
var G__6976 = c__4946__auto___6974;
var G__6977 = cljs.core.count.call(null,c__4946__auto___6974);
var G__6978 = (0);
seq__6905_6959 = G__6975;
chunk__6906_6960 = G__6976;
count__6907_6961 = G__6977;
i__6908_6962 = G__6978;
continue;
} else {
var map__6911_6979 = cljs.core.first.call(null,seq__6905_6973__$1);
var map__6911_6980__$1 = ((((!((map__6911_6979 == null)))?((((map__6911_6979.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6911_6979.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6911_6979):map__6911_6979);
var gline_6981 = cljs.core.get.call(null,map__6911_6980__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_6982 = cljs.core.get.call(null,map__6911_6980__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_6983 = cljs.core.get.call(null,map__6911_6980__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_6981], null),cljs.core.fnil.call(null,((function (seq__6905_6959,chunk__6906_6960,count__6907_6961,i__6908_6962,seq__6900_6952,chunk__6901_6953,count__6902_6954,i__6903_6955,seq__6895_6945,chunk__6896_6946,count__6897_6947,i__6898_6948,map__6911_6979,map__6911_6980__$1,gline_6981,gcol_6982,name_6983,seq__6905_6973__$1,temp__4425__auto___6972,vec__6904_6956,column_6957,column_info_6958,vec__6899_6949,line_6950,columns_6951,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_6957], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_6950,new cljs.core.Keyword(null,"col","col",-1959363084),column_6957,new cljs.core.Keyword(null,"name","name",1843675177),name_6983], null));
});})(seq__6905_6959,chunk__6906_6960,count__6907_6961,i__6908_6962,seq__6900_6952,chunk__6901_6953,count__6902_6954,i__6903_6955,seq__6895_6945,chunk__6896_6946,count__6897_6947,i__6898_6948,map__6911_6979,map__6911_6980__$1,gline_6981,gcol_6982,name_6983,seq__6905_6973__$1,temp__4425__auto___6972,vec__6904_6956,column_6957,column_info_6958,vec__6899_6949,line_6950,columns_6951,inverted))
,cljs.core.sorted_map.call(null)));

var G__6984 = cljs.core.next.call(null,seq__6905_6973__$1);
var G__6985 = null;
var G__6986 = (0);
var G__6987 = (0);
seq__6905_6959 = G__6984;
chunk__6906_6960 = G__6985;
count__6907_6961 = G__6986;
i__6908_6962 = G__6987;
continue;
}
} else {
}
}
break;
}

var G__6988 = seq__6900_6952;
var G__6989 = chunk__6901_6953;
var G__6990 = count__6902_6954;
var G__6991 = (i__6903_6955 + (1));
seq__6900_6952 = G__6988;
chunk__6901_6953 = G__6989;
count__6902_6954 = G__6990;
i__6903_6955 = G__6991;
continue;
} else {
var temp__4425__auto___6992 = cljs.core.seq.call(null,seq__6900_6952);
if(temp__4425__auto___6992){
var seq__6900_6993__$1 = temp__4425__auto___6992;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6900_6993__$1)){
var c__4946__auto___6994 = cljs.core.chunk_first.call(null,seq__6900_6993__$1);
var G__6995 = cljs.core.chunk_rest.call(null,seq__6900_6993__$1);
var G__6996 = c__4946__auto___6994;
var G__6997 = cljs.core.count.call(null,c__4946__auto___6994);
var G__6998 = (0);
seq__6900_6952 = G__6995;
chunk__6901_6953 = G__6996;
count__6902_6954 = G__6997;
i__6903_6955 = G__6998;
continue;
} else {
var vec__6913_6999 = cljs.core.first.call(null,seq__6900_6993__$1);
var column_7000 = cljs.core.nth.call(null,vec__6913_6999,(0),null);
var column_info_7001 = cljs.core.nth.call(null,vec__6913_6999,(1),null);
var seq__6914_7002 = cljs.core.seq.call(null,column_info_7001);
var chunk__6915_7003 = null;
var count__6916_7004 = (0);
var i__6917_7005 = (0);
while(true){
if((i__6917_7005 < count__6916_7004)){
var map__6918_7006 = cljs.core._nth.call(null,chunk__6915_7003,i__6917_7005);
var map__6918_7007__$1 = ((((!((map__6918_7006 == null)))?((((map__6918_7006.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6918_7006.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6918_7006):map__6918_7006);
var gline_7008 = cljs.core.get.call(null,map__6918_7007__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_7009 = cljs.core.get.call(null,map__6918_7007__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_7010 = cljs.core.get.call(null,map__6918_7007__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_7008], null),cljs.core.fnil.call(null,((function (seq__6914_7002,chunk__6915_7003,count__6916_7004,i__6917_7005,seq__6900_6952,chunk__6901_6953,count__6902_6954,i__6903_6955,seq__6895_6945,chunk__6896_6946,count__6897_6947,i__6898_6948,map__6918_7006,map__6918_7007__$1,gline_7008,gcol_7009,name_7010,vec__6913_6999,column_7000,column_info_7001,seq__6900_6993__$1,temp__4425__auto___6992,vec__6899_6949,line_6950,columns_6951,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_7000], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_6950,new cljs.core.Keyword(null,"col","col",-1959363084),column_7000,new cljs.core.Keyword(null,"name","name",1843675177),name_7010], null));
});})(seq__6914_7002,chunk__6915_7003,count__6916_7004,i__6917_7005,seq__6900_6952,chunk__6901_6953,count__6902_6954,i__6903_6955,seq__6895_6945,chunk__6896_6946,count__6897_6947,i__6898_6948,map__6918_7006,map__6918_7007__$1,gline_7008,gcol_7009,name_7010,vec__6913_6999,column_7000,column_info_7001,seq__6900_6993__$1,temp__4425__auto___6992,vec__6899_6949,line_6950,columns_6951,inverted))
,cljs.core.sorted_map.call(null)));

var G__7011 = seq__6914_7002;
var G__7012 = chunk__6915_7003;
var G__7013 = count__6916_7004;
var G__7014 = (i__6917_7005 + (1));
seq__6914_7002 = G__7011;
chunk__6915_7003 = G__7012;
count__6916_7004 = G__7013;
i__6917_7005 = G__7014;
continue;
} else {
var temp__4425__auto___7015__$1 = cljs.core.seq.call(null,seq__6914_7002);
if(temp__4425__auto___7015__$1){
var seq__6914_7016__$1 = temp__4425__auto___7015__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6914_7016__$1)){
var c__4946__auto___7017 = cljs.core.chunk_first.call(null,seq__6914_7016__$1);
var G__7018 = cljs.core.chunk_rest.call(null,seq__6914_7016__$1);
var G__7019 = c__4946__auto___7017;
var G__7020 = cljs.core.count.call(null,c__4946__auto___7017);
var G__7021 = (0);
seq__6914_7002 = G__7018;
chunk__6915_7003 = G__7019;
count__6916_7004 = G__7020;
i__6917_7005 = G__7021;
continue;
} else {
var map__6920_7022 = cljs.core.first.call(null,seq__6914_7016__$1);
var map__6920_7023__$1 = ((((!((map__6920_7022 == null)))?((((map__6920_7022.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6920_7022.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6920_7022):map__6920_7022);
var gline_7024 = cljs.core.get.call(null,map__6920_7023__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_7025 = cljs.core.get.call(null,map__6920_7023__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_7026 = cljs.core.get.call(null,map__6920_7023__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_7024], null),cljs.core.fnil.call(null,((function (seq__6914_7002,chunk__6915_7003,count__6916_7004,i__6917_7005,seq__6900_6952,chunk__6901_6953,count__6902_6954,i__6903_6955,seq__6895_6945,chunk__6896_6946,count__6897_6947,i__6898_6948,map__6920_7022,map__6920_7023__$1,gline_7024,gcol_7025,name_7026,seq__6914_7016__$1,temp__4425__auto___7015__$1,vec__6913_6999,column_7000,column_info_7001,seq__6900_6993__$1,temp__4425__auto___6992,vec__6899_6949,line_6950,columns_6951,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_7000], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_6950,new cljs.core.Keyword(null,"col","col",-1959363084),column_7000,new cljs.core.Keyword(null,"name","name",1843675177),name_7026], null));
});})(seq__6914_7002,chunk__6915_7003,count__6916_7004,i__6917_7005,seq__6900_6952,chunk__6901_6953,count__6902_6954,i__6903_6955,seq__6895_6945,chunk__6896_6946,count__6897_6947,i__6898_6948,map__6920_7022,map__6920_7023__$1,gline_7024,gcol_7025,name_7026,seq__6914_7016__$1,temp__4425__auto___7015__$1,vec__6913_6999,column_7000,column_info_7001,seq__6900_6993__$1,temp__4425__auto___6992,vec__6899_6949,line_6950,columns_6951,inverted))
,cljs.core.sorted_map.call(null)));

var G__7027 = cljs.core.next.call(null,seq__6914_7016__$1);
var G__7028 = null;
var G__7029 = (0);
var G__7030 = (0);
seq__6914_7002 = G__7027;
chunk__6915_7003 = G__7028;
count__6916_7004 = G__7029;
i__6917_7005 = G__7030;
continue;
}
} else {
}
}
break;
}

var G__7031 = cljs.core.next.call(null,seq__6900_6993__$1);
var G__7032 = null;
var G__7033 = (0);
var G__7034 = (0);
seq__6900_6952 = G__7031;
chunk__6901_6953 = G__7032;
count__6902_6954 = G__7033;
i__6903_6955 = G__7034;
continue;
}
} else {
}
}
break;
}

var G__7035 = seq__6895_6945;
var G__7036 = chunk__6896_6946;
var G__7037 = count__6897_6947;
var G__7038 = (i__6898_6948 + (1));
seq__6895_6945 = G__7035;
chunk__6896_6946 = G__7036;
count__6897_6947 = G__7037;
i__6898_6948 = G__7038;
continue;
} else {
var temp__4425__auto___7039 = cljs.core.seq.call(null,seq__6895_6945);
if(temp__4425__auto___7039){
var seq__6895_7040__$1 = temp__4425__auto___7039;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6895_7040__$1)){
var c__4946__auto___7041 = cljs.core.chunk_first.call(null,seq__6895_7040__$1);
var G__7042 = cljs.core.chunk_rest.call(null,seq__6895_7040__$1);
var G__7043 = c__4946__auto___7041;
var G__7044 = cljs.core.count.call(null,c__4946__auto___7041);
var G__7045 = (0);
seq__6895_6945 = G__7042;
chunk__6896_6946 = G__7043;
count__6897_6947 = G__7044;
i__6898_6948 = G__7045;
continue;
} else {
var vec__6922_7046 = cljs.core.first.call(null,seq__6895_7040__$1);
var line_7047 = cljs.core.nth.call(null,vec__6922_7046,(0),null);
var columns_7048 = cljs.core.nth.call(null,vec__6922_7046,(1),null);
var seq__6923_7049 = cljs.core.seq.call(null,columns_7048);
var chunk__6924_7050 = null;
var count__6925_7051 = (0);
var i__6926_7052 = (0);
while(true){
if((i__6926_7052 < count__6925_7051)){
var vec__6927_7053 = cljs.core._nth.call(null,chunk__6924_7050,i__6926_7052);
var column_7054 = cljs.core.nth.call(null,vec__6927_7053,(0),null);
var column_info_7055 = cljs.core.nth.call(null,vec__6927_7053,(1),null);
var seq__6928_7056 = cljs.core.seq.call(null,column_info_7055);
var chunk__6929_7057 = null;
var count__6930_7058 = (0);
var i__6931_7059 = (0);
while(true){
if((i__6931_7059 < count__6930_7058)){
var map__6932_7060 = cljs.core._nth.call(null,chunk__6929_7057,i__6931_7059);
var map__6932_7061__$1 = ((((!((map__6932_7060 == null)))?((((map__6932_7060.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6932_7060.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6932_7060):map__6932_7060);
var gline_7062 = cljs.core.get.call(null,map__6932_7061__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_7063 = cljs.core.get.call(null,map__6932_7061__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_7064 = cljs.core.get.call(null,map__6932_7061__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_7062], null),cljs.core.fnil.call(null,((function (seq__6928_7056,chunk__6929_7057,count__6930_7058,i__6931_7059,seq__6923_7049,chunk__6924_7050,count__6925_7051,i__6926_7052,seq__6895_6945,chunk__6896_6946,count__6897_6947,i__6898_6948,map__6932_7060,map__6932_7061__$1,gline_7062,gcol_7063,name_7064,vec__6927_7053,column_7054,column_info_7055,vec__6922_7046,line_7047,columns_7048,seq__6895_7040__$1,temp__4425__auto___7039,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_7054], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_7047,new cljs.core.Keyword(null,"col","col",-1959363084),column_7054,new cljs.core.Keyword(null,"name","name",1843675177),name_7064], null));
});})(seq__6928_7056,chunk__6929_7057,count__6930_7058,i__6931_7059,seq__6923_7049,chunk__6924_7050,count__6925_7051,i__6926_7052,seq__6895_6945,chunk__6896_6946,count__6897_6947,i__6898_6948,map__6932_7060,map__6932_7061__$1,gline_7062,gcol_7063,name_7064,vec__6927_7053,column_7054,column_info_7055,vec__6922_7046,line_7047,columns_7048,seq__6895_7040__$1,temp__4425__auto___7039,inverted))
,cljs.core.sorted_map.call(null)));

var G__7065 = seq__6928_7056;
var G__7066 = chunk__6929_7057;
var G__7067 = count__6930_7058;
var G__7068 = (i__6931_7059 + (1));
seq__6928_7056 = G__7065;
chunk__6929_7057 = G__7066;
count__6930_7058 = G__7067;
i__6931_7059 = G__7068;
continue;
} else {
var temp__4425__auto___7069__$1 = cljs.core.seq.call(null,seq__6928_7056);
if(temp__4425__auto___7069__$1){
var seq__6928_7070__$1 = temp__4425__auto___7069__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6928_7070__$1)){
var c__4946__auto___7071 = cljs.core.chunk_first.call(null,seq__6928_7070__$1);
var G__7072 = cljs.core.chunk_rest.call(null,seq__6928_7070__$1);
var G__7073 = c__4946__auto___7071;
var G__7074 = cljs.core.count.call(null,c__4946__auto___7071);
var G__7075 = (0);
seq__6928_7056 = G__7072;
chunk__6929_7057 = G__7073;
count__6930_7058 = G__7074;
i__6931_7059 = G__7075;
continue;
} else {
var map__6934_7076 = cljs.core.first.call(null,seq__6928_7070__$1);
var map__6934_7077__$1 = ((((!((map__6934_7076 == null)))?((((map__6934_7076.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6934_7076.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6934_7076):map__6934_7076);
var gline_7078 = cljs.core.get.call(null,map__6934_7077__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_7079 = cljs.core.get.call(null,map__6934_7077__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_7080 = cljs.core.get.call(null,map__6934_7077__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_7078], null),cljs.core.fnil.call(null,((function (seq__6928_7056,chunk__6929_7057,count__6930_7058,i__6931_7059,seq__6923_7049,chunk__6924_7050,count__6925_7051,i__6926_7052,seq__6895_6945,chunk__6896_6946,count__6897_6947,i__6898_6948,map__6934_7076,map__6934_7077__$1,gline_7078,gcol_7079,name_7080,seq__6928_7070__$1,temp__4425__auto___7069__$1,vec__6927_7053,column_7054,column_info_7055,vec__6922_7046,line_7047,columns_7048,seq__6895_7040__$1,temp__4425__auto___7039,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_7054], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_7047,new cljs.core.Keyword(null,"col","col",-1959363084),column_7054,new cljs.core.Keyword(null,"name","name",1843675177),name_7080], null));
});})(seq__6928_7056,chunk__6929_7057,count__6930_7058,i__6931_7059,seq__6923_7049,chunk__6924_7050,count__6925_7051,i__6926_7052,seq__6895_6945,chunk__6896_6946,count__6897_6947,i__6898_6948,map__6934_7076,map__6934_7077__$1,gline_7078,gcol_7079,name_7080,seq__6928_7070__$1,temp__4425__auto___7069__$1,vec__6927_7053,column_7054,column_info_7055,vec__6922_7046,line_7047,columns_7048,seq__6895_7040__$1,temp__4425__auto___7039,inverted))
,cljs.core.sorted_map.call(null)));

var G__7081 = cljs.core.next.call(null,seq__6928_7070__$1);
var G__7082 = null;
var G__7083 = (0);
var G__7084 = (0);
seq__6928_7056 = G__7081;
chunk__6929_7057 = G__7082;
count__6930_7058 = G__7083;
i__6931_7059 = G__7084;
continue;
}
} else {
}
}
break;
}

var G__7085 = seq__6923_7049;
var G__7086 = chunk__6924_7050;
var G__7087 = count__6925_7051;
var G__7088 = (i__6926_7052 + (1));
seq__6923_7049 = G__7085;
chunk__6924_7050 = G__7086;
count__6925_7051 = G__7087;
i__6926_7052 = G__7088;
continue;
} else {
var temp__4425__auto___7089__$1 = cljs.core.seq.call(null,seq__6923_7049);
if(temp__4425__auto___7089__$1){
var seq__6923_7090__$1 = temp__4425__auto___7089__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6923_7090__$1)){
var c__4946__auto___7091 = cljs.core.chunk_first.call(null,seq__6923_7090__$1);
var G__7092 = cljs.core.chunk_rest.call(null,seq__6923_7090__$1);
var G__7093 = c__4946__auto___7091;
var G__7094 = cljs.core.count.call(null,c__4946__auto___7091);
var G__7095 = (0);
seq__6923_7049 = G__7092;
chunk__6924_7050 = G__7093;
count__6925_7051 = G__7094;
i__6926_7052 = G__7095;
continue;
} else {
var vec__6936_7096 = cljs.core.first.call(null,seq__6923_7090__$1);
var column_7097 = cljs.core.nth.call(null,vec__6936_7096,(0),null);
var column_info_7098 = cljs.core.nth.call(null,vec__6936_7096,(1),null);
var seq__6937_7099 = cljs.core.seq.call(null,column_info_7098);
var chunk__6938_7100 = null;
var count__6939_7101 = (0);
var i__6940_7102 = (0);
while(true){
if((i__6940_7102 < count__6939_7101)){
var map__6941_7103 = cljs.core._nth.call(null,chunk__6938_7100,i__6940_7102);
var map__6941_7104__$1 = ((((!((map__6941_7103 == null)))?((((map__6941_7103.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6941_7103.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6941_7103):map__6941_7103);
var gline_7105 = cljs.core.get.call(null,map__6941_7104__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_7106 = cljs.core.get.call(null,map__6941_7104__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_7107 = cljs.core.get.call(null,map__6941_7104__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_7105], null),cljs.core.fnil.call(null,((function (seq__6937_7099,chunk__6938_7100,count__6939_7101,i__6940_7102,seq__6923_7049,chunk__6924_7050,count__6925_7051,i__6926_7052,seq__6895_6945,chunk__6896_6946,count__6897_6947,i__6898_6948,map__6941_7103,map__6941_7104__$1,gline_7105,gcol_7106,name_7107,vec__6936_7096,column_7097,column_info_7098,seq__6923_7090__$1,temp__4425__auto___7089__$1,vec__6922_7046,line_7047,columns_7048,seq__6895_7040__$1,temp__4425__auto___7039,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_7097], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_7047,new cljs.core.Keyword(null,"col","col",-1959363084),column_7097,new cljs.core.Keyword(null,"name","name",1843675177),name_7107], null));
});})(seq__6937_7099,chunk__6938_7100,count__6939_7101,i__6940_7102,seq__6923_7049,chunk__6924_7050,count__6925_7051,i__6926_7052,seq__6895_6945,chunk__6896_6946,count__6897_6947,i__6898_6948,map__6941_7103,map__6941_7104__$1,gline_7105,gcol_7106,name_7107,vec__6936_7096,column_7097,column_info_7098,seq__6923_7090__$1,temp__4425__auto___7089__$1,vec__6922_7046,line_7047,columns_7048,seq__6895_7040__$1,temp__4425__auto___7039,inverted))
,cljs.core.sorted_map.call(null)));

var G__7108 = seq__6937_7099;
var G__7109 = chunk__6938_7100;
var G__7110 = count__6939_7101;
var G__7111 = (i__6940_7102 + (1));
seq__6937_7099 = G__7108;
chunk__6938_7100 = G__7109;
count__6939_7101 = G__7110;
i__6940_7102 = G__7111;
continue;
} else {
var temp__4425__auto___7112__$2 = cljs.core.seq.call(null,seq__6937_7099);
if(temp__4425__auto___7112__$2){
var seq__6937_7113__$1 = temp__4425__auto___7112__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6937_7113__$1)){
var c__4946__auto___7114 = cljs.core.chunk_first.call(null,seq__6937_7113__$1);
var G__7115 = cljs.core.chunk_rest.call(null,seq__6937_7113__$1);
var G__7116 = c__4946__auto___7114;
var G__7117 = cljs.core.count.call(null,c__4946__auto___7114);
var G__7118 = (0);
seq__6937_7099 = G__7115;
chunk__6938_7100 = G__7116;
count__6939_7101 = G__7117;
i__6940_7102 = G__7118;
continue;
} else {
var map__6943_7119 = cljs.core.first.call(null,seq__6937_7113__$1);
var map__6943_7120__$1 = ((((!((map__6943_7119 == null)))?((((map__6943_7119.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6943_7119.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6943_7119):map__6943_7119);
var gline_7121 = cljs.core.get.call(null,map__6943_7120__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_7122 = cljs.core.get.call(null,map__6943_7120__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_7123 = cljs.core.get.call(null,map__6943_7120__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_7121], null),cljs.core.fnil.call(null,((function (seq__6937_7099,chunk__6938_7100,count__6939_7101,i__6940_7102,seq__6923_7049,chunk__6924_7050,count__6925_7051,i__6926_7052,seq__6895_6945,chunk__6896_6946,count__6897_6947,i__6898_6948,map__6943_7119,map__6943_7120__$1,gline_7121,gcol_7122,name_7123,seq__6937_7113__$1,temp__4425__auto___7112__$2,vec__6936_7096,column_7097,column_info_7098,seq__6923_7090__$1,temp__4425__auto___7089__$1,vec__6922_7046,line_7047,columns_7048,seq__6895_7040__$1,temp__4425__auto___7039,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_7097], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_7047,new cljs.core.Keyword(null,"col","col",-1959363084),column_7097,new cljs.core.Keyword(null,"name","name",1843675177),name_7123], null));
});})(seq__6937_7099,chunk__6938_7100,count__6939_7101,i__6940_7102,seq__6923_7049,chunk__6924_7050,count__6925_7051,i__6926_7052,seq__6895_6945,chunk__6896_6946,count__6897_6947,i__6898_6948,map__6943_7119,map__6943_7120__$1,gline_7121,gcol_7122,name_7123,seq__6937_7113__$1,temp__4425__auto___7112__$2,vec__6936_7096,column_7097,column_info_7098,seq__6923_7090__$1,temp__4425__auto___7089__$1,vec__6922_7046,line_7047,columns_7048,seq__6895_7040__$1,temp__4425__auto___7039,inverted))
,cljs.core.sorted_map.call(null)));

var G__7124 = cljs.core.next.call(null,seq__6937_7113__$1);
var G__7125 = null;
var G__7126 = (0);
var G__7127 = (0);
seq__6937_7099 = G__7124;
chunk__6938_7100 = G__7125;
count__6939_7101 = G__7126;
i__6940_7102 = G__7127;
continue;
}
} else {
}
}
break;
}

var G__7128 = cljs.core.next.call(null,seq__6923_7090__$1);
var G__7129 = null;
var G__7130 = (0);
var G__7131 = (0);
seq__6923_7049 = G__7128;
chunk__6924_7050 = G__7129;
count__6925_7051 = G__7130;
i__6926_7052 = G__7131;
continue;
}
} else {
}
}
break;
}

var G__7132 = cljs.core.next.call(null,seq__6895_7040__$1);
var G__7133 = null;
var G__7134 = (0);
var G__7135 = (0);
seq__6895_6945 = G__7132;
chunk__6896_6946 = G__7133;
count__6897_6947 = G__7134;
i__6898_6948 = G__7135;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,inverted);
});

//# sourceMappingURL=source_map.js.map