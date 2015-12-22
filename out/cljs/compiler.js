// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('cljs.compiler');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('cljs.tools.reader');
goog.require('cljs.env');
goog.require('cljs.analyzer');
goog.require('cljs.source_map');
goog.require('goog.string.StringBuffer');
goog.require('clojure.string');
cljs.compiler.js_reserved = cljs.analyzer.js_reserved;
cljs.compiler._STAR_recompiled_STAR_ = null;
cljs.compiler._STAR_inputs_STAR_ = null;
cljs.compiler._STAR_source_map_data_STAR_ = null;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.compiler.cljs_reserved_file_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["deps.cljs",null], null), null);
cljs.compiler.ns_first_segments = (function cljs$compiler$ns_first_segments(){
var get_first_ns_segment = (function cljs$compiler$ns_first_segments_$_get_first_ns_segment(ns){
return cljs.core.first.call(null,clojure.string.split.call(null,[cljs.core.str(ns)].join(''),/\./));
});
return cljs.core.map.call(null,get_first_ns_segment,cljs.core.keys.call(null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))));
});
cljs.compiler.shadow_depth = (function cljs$compiler$shadow_depth(s){
var map__7162 = s;
var map__7162__$1 = ((((!((map__7162 == null)))?((((map__7162.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7162.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7162):map__7162);
var name = cljs.core.get.call(null,map__7162__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__7162__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__7165 = info;
var map__7166 = G__7165;
var map__7166__$1 = ((((!((map__7166 == null)))?((((map__7166.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7166.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7166):map__7166);
var shadow = cljs.core.get.call(null,map__7166__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__7165__$1 = G__7165;
while(true){
var d__$2 = d__$1;
var map__7168 = G__7165__$1;
var map__7168__$1 = ((((!((map__7168 == null)))?((((map__7168.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7168.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7168):map__7168);
var shadow__$1 = cljs.core.get.call(null,map__7168__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__7170 = (d__$2 + (1));
var G__7171 = shadow__$1;
d__$1 = G__7170;
G__7165__$1 = G__7171;
continue;
} else {
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([[cljs.core.str(name)].join('')], true),cljs.compiler.ns_first_segments.call(null)))){
return (d__$2 + (1));
} else {
return d__$2;

}
}
break;
}
});
cljs.compiler.hash_scope = (function cljs$compiler$hash_scope(s){
return cljs.core.hash_combine.call(null,cljs.core._hash.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s)),cljs.compiler.shadow_depth.call(null,s));
});
cljs.compiler.munge;
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__7172){
var map__7177 = p__7172;
var map__7177__$1 = ((((!((map__7177 == null)))?((((map__7177.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7177.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7177):map__7177);
var name_var = map__7177__$1;
var name = cljs.core.get.call(null,map__7177__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__7177__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,[cljs.core.str(name)].join(''),"..","_DOT__DOT_");
var map__7179 = info;
var map__7179__$1 = ((((!((map__7179 == null)))?((((map__7179.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7179.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7179):map__7179);
var ns = cljs.core.get.call(null,map__7179__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__7179__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"_$_",cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.call(null,cljs.compiler.munge.call(null,[cljs.core.str(clojure.string.replace.call(null,[cljs.core.str(ns)].join(''),".","$")),cljs.core.str("$"),cljs.core.str(scoped_name)].join('')));
});
cljs.compiler.munge_reserved = (function cljs$compiler$munge_reserved(reserved){
return (function (s){
if(!((cljs.core.get.call(null,reserved,s) == null))){
return [cljs.core.str(s),cljs.core.str("$")].join('');
} else {
return s;
}
});
});
cljs.compiler.munge = (function cljs$compiler$munge(var_args){
var args7181 = [];
var len__5201__auto___7184 = arguments.length;
var i__5202__auto___7185 = (0);
while(true){
if((i__5202__auto___7185 < len__5201__auto___7184)){
args7181.push((arguments[i__5202__auto___7185]));

var G__7186 = (i__5202__auto___7185 + (1));
i__5202__auto___7185 = G__7186;
continue;
} else {
}
break;
}

var G__7183 = args7181.length;
switch (G__7183) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7181.length)].join('')));

}
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.compiler.munge.call(null,s,cljs.compiler.js_reserved);
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2 = (function (s,reserved){
if(cljs.analyzer.cljs_map_QMARK_.call(null,s)){
var name_var = s;
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(name_var);
var field = new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(name_var);
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(name_var);
if(!((new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531).cljs$core$IFn$_invoke$arity$1(info) == null))){
return cljs.compiler.fn_self_name.call(null,s);
} else {
var depth = cljs.compiler.shadow_depth.call(null,s);
var code = cljs.compiler.hash_scope.call(null,s);
var renamed = cljs.core.get.call(null,cljs.compiler._STAR_lexical_renames_STAR_,code);
var name__$1 = ((field === true)?[cljs.core.str("self__."),cljs.core.str(name)].join(''):((!((renamed == null)))?renamed:name
));
var munged_name = cljs.compiler.munge.call(null,name__$1,reserved);
if((field === true) || ((depth === (0)))){
return munged_name;
} else {
return cljs.core.symbol.call(null,[cljs.core.str(munged_name),cljs.core.str("__$"),cljs.core.str(depth)].join(''));
}
}
} else {
var ss = clojure.string.replace.call(null,[cljs.core.str(s)].join(''),"..","_DOT__DOT_");
var ss__$1 = clojure.string.replace.call(null,ss,(new RegExp("\\/(.)")),".$1");
var rf = cljs.compiler.munge_reserved.call(null,reserved);
var ss__$2 = cljs.core.map.call(null,rf,clojure.string.split.call(null,ss__$1,/\./));
var ss__$3 = clojure.string.join.call(null,".",ss__$2);
var ms = cljs.core.munge.call(null,ss__$3);
if((s instanceof cljs.core.Symbol)){
return cljs.core.symbol.call(null,ms);
} else {
return ms;
}
}
});

cljs.compiler.munge.cljs$lang$maxFixedArity = 2;
cljs.compiler.comma_sep = (function cljs$compiler$comma_sep(xs){
return cljs.core.interpose.call(null,",",xs);
});
cljs.compiler.escape_char = (function cljs$compiler$escape_char(c){
var cp = goog.string.hashCode(c);
var G__7189 = cp;
switch (G__7189) {
case (34):
return "\\\"";

break;
case (92):
return "\\\\";

break;
case (8):
return "\\b";

break;
case (12):
return "\\f";

break;
case (10):
return "\\n";

break;
case (13):
return "\\r";

break;
case (9):
return "\\t";

break;
default:
if((((31) < cp)) && ((cp < (127)))){
return c;
} else {
return [cljs.core.str("\\u"),cljs.core.str(cp.toString((16)))].join('');
}

}
});
cljs.compiler.escape_string = (function cljs$compiler$escape_string(s){
var sb = (new goog.string.StringBuffer());
var seq__7195_7199 = cljs.core.seq.call(null,s);
var chunk__7196_7200 = null;
var count__7197_7201 = (0);
var i__7198_7202 = (0);
while(true){
if((i__7198_7202 < count__7197_7201)){
var c_7203 = cljs.core._nth.call(null,chunk__7196_7200,i__7198_7202);
sb.append(cljs.compiler.escape_char.call(null,c_7203));

var G__7204 = seq__7195_7199;
var G__7205 = chunk__7196_7200;
var G__7206 = count__7197_7201;
var G__7207 = (i__7198_7202 + (1));
seq__7195_7199 = G__7204;
chunk__7196_7200 = G__7205;
count__7197_7201 = G__7206;
i__7198_7202 = G__7207;
continue;
} else {
var temp__4425__auto___7208 = cljs.core.seq.call(null,seq__7195_7199);
if(temp__4425__auto___7208){
var seq__7195_7209__$1 = temp__4425__auto___7208;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7195_7209__$1)){
var c__4946__auto___7210 = cljs.core.chunk_first.call(null,seq__7195_7209__$1);
var G__7211 = cljs.core.chunk_rest.call(null,seq__7195_7209__$1);
var G__7212 = c__4946__auto___7210;
var G__7213 = cljs.core.count.call(null,c__4946__auto___7210);
var G__7214 = (0);
seq__7195_7199 = G__7211;
chunk__7196_7200 = G__7212;
count__7197_7201 = G__7213;
i__7198_7202 = G__7214;
continue;
} else {
var c_7215 = cljs.core.first.call(null,seq__7195_7209__$1);
sb.append(cljs.compiler.escape_char.call(null,c_7215));

var G__7216 = cljs.core.next.call(null,seq__7195_7209__$1);
var G__7217 = null;
var G__7218 = (0);
var G__7219 = (0);
seq__7195_7199 = G__7216;
chunk__7196_7200 = G__7217;
count__7197_7201 = G__7218;
i__7198_7202 = G__7219;
continue;
}
} else {
}
}
break;
}

return sb.toString();
});
cljs.compiler.wrap_in_double_quotes = (function cljs$compiler$wrap_in_double_quotes(x){
return [cljs.core.str("\""),cljs.core.str(x),cljs.core.str("\"")].join('');
});
if(typeof cljs.compiler.emit_STAR_ !== 'undefined'){
} else {
cljs.compiler.emit_STAR_ = (function (){var method_table__5056__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5057__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5058__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5059__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5060__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5060__auto__,method_table__5056__auto__,prefer_table__5057__auto__,method_cache__5058__auto__,cached_hierarchy__5059__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
var val__5729__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__5729__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.call(null);
} else {
}

try{if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__7225_7230 = ast;
var map__7225_7231__$1 = ((((!((map__7225_7230 == null)))?((((map__7225_7230.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7225_7230.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7225_7230):map__7225_7230);
var env_7232 = cljs.core.get.call(null,map__7225_7231__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_7232))){
var map__7227_7233 = env_7232;
var map__7227_7234__$1 = ((((!((map__7227_7233 == null)))?((((map__7227_7233.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7227_7233.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7227_7233):map__7227_7233);
var line_7235 = cljs.core.get.call(null,map__7227_7234__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_7236 = cljs.core.get.call(null,map__7227_7234__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__7227_7233,map__7227_7234__$1,line_7235,column_7236,map__7225_7230,map__7225_7231__$1,env_7232,val__5729__auto__){
return (function (m){
var minfo = (function (){var G__7229 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
var G__7229__$1 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"var","var",-769682797)))?cljs.core.assoc.call(null,G__7229,new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast)))].join('')):G__7229);
return G__7229__$1;
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_7235 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__7227_7233,map__7227_7234__$1,line_7235,column_7236,map__7225_7230,map__7225_7231__$1,env_7232,val__5729__auto__){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_7236)?(column_7236 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__7227_7233,map__7227_7234__$1,line_7235,column_7236,map__7225_7230,map__7225_7231__$1,env_7232,val__5729__auto__){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__7227_7233,map__7227_7234__$1,line_7235,column_7236,map__7225_7230,map__7225_7231__$1,env_7232,val__5729__auto__))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__7227_7233,map__7227_7234__$1,line_7235,column_7236,map__7225_7230,map__7225_7231__$1,env_7232,val__5729__auto__))
,cljs.core.sorted_map.call(null)));
});})(map__7227_7233,map__7227_7234__$1,line_7235,column_7236,map__7225_7230,map__7225_7231__$1,env_7232,val__5729__auto__))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
}finally {if((val__5729__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var args__5208__auto__ = [];
var len__5201__auto___7243 = arguments.length;
var i__5202__auto___7244 = (0);
while(true){
if((i__5202__auto___7244 < len__5201__auto___7243)){
args__5208__auto__.push((arguments[i__5202__auto___7244]));

var G__7245 = (i__5202__auto___7244 + (1));
i__5202__auto___7244 = G__7245;
continue;
} else {
}
break;
}

var argseq__5209__auto__ = ((((0) < args__5208__auto__.length))?(new cljs.core.IndexedSeq(args__5208__auto__.slice((0)),(0))):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(argseq__5209__auto__);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var seq__7239_7246 = cljs.core.seq.call(null,xs);
var chunk__7240_7247 = null;
var count__7241_7248 = (0);
var i__7242_7249 = (0);
while(true){
if((i__7242_7249 < count__7241_7248)){
var x_7250 = cljs.core._nth.call(null,chunk__7240_7247,i__7242_7249);
if((x_7250 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_7250)){
cljs.compiler.emit.call(null,x_7250);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_7250)){
cljs.core.apply.call(null,cljs.compiler.emits,x_7250);
} else {
if(goog.isFunction(x_7250)){
x_7250.call(null);
} else {
var s_7251 = cljs.core.print_str.call(null,x_7250);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__7239_7246,chunk__7240_7247,count__7241_7248,i__7242_7249,s_7251,x_7250){
return (function (p1__7237_SHARP_){
return (p1__7237_SHARP_ + cljs.core.count.call(null,s_7251));
});})(seq__7239_7246,chunk__7240_7247,count__7241_7248,i__7242_7249,s_7251,x_7250))
);
}

cljs.core.print.call(null,s_7251);

}
}
}
}

var G__7252 = seq__7239_7246;
var G__7253 = chunk__7240_7247;
var G__7254 = count__7241_7248;
var G__7255 = (i__7242_7249 + (1));
seq__7239_7246 = G__7252;
chunk__7240_7247 = G__7253;
count__7241_7248 = G__7254;
i__7242_7249 = G__7255;
continue;
} else {
var temp__4425__auto___7256 = cljs.core.seq.call(null,seq__7239_7246);
if(temp__4425__auto___7256){
var seq__7239_7257__$1 = temp__4425__auto___7256;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7239_7257__$1)){
var c__4946__auto___7258 = cljs.core.chunk_first.call(null,seq__7239_7257__$1);
var G__7259 = cljs.core.chunk_rest.call(null,seq__7239_7257__$1);
var G__7260 = c__4946__auto___7258;
var G__7261 = cljs.core.count.call(null,c__4946__auto___7258);
var G__7262 = (0);
seq__7239_7246 = G__7259;
chunk__7240_7247 = G__7260;
count__7241_7248 = G__7261;
i__7242_7249 = G__7262;
continue;
} else {
var x_7263 = cljs.core.first.call(null,seq__7239_7257__$1);
if((x_7263 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_7263)){
cljs.compiler.emit.call(null,x_7263);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_7263)){
cljs.core.apply.call(null,cljs.compiler.emits,x_7263);
} else {
if(goog.isFunction(x_7263)){
x_7263.call(null);
} else {
var s_7264 = cljs.core.print_str.call(null,x_7263);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__7239_7246,chunk__7240_7247,count__7241_7248,i__7242_7249,s_7264,x_7263,seq__7239_7257__$1,temp__4425__auto___7256){
return (function (p1__7237_SHARP_){
return (p1__7237_SHARP_ + cljs.core.count.call(null,s_7264));
});})(seq__7239_7246,chunk__7240_7247,count__7241_7248,i__7242_7249,s_7264,x_7263,seq__7239_7257__$1,temp__4425__auto___7256))
);
}

cljs.core.print.call(null,s_7264);

}
}
}
}

var G__7265 = cljs.core.next.call(null,seq__7239_7257__$1);
var G__7266 = null;
var G__7267 = (0);
var G__7268 = (0);
seq__7239_7246 = G__7265;
chunk__7240_7247 = G__7266;
count__7241_7248 = G__7267;
i__7242_7249 = G__7268;
continue;
}
} else {
}
}
break;
}

return null;
});

cljs.compiler.emits.cljs$lang$maxFixedArity = (0);

cljs.compiler.emits.cljs$lang$applyTo = (function (seq7238){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7238));
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var args__5208__auto__ = [];
var len__5201__auto___7273 = arguments.length;
var i__5202__auto___7274 = (0);
while(true){
if((i__5202__auto___7274 < len__5201__auto___7273)){
args__5208__auto__.push((arguments[i__5202__auto___7274]));

var G__7275 = (i__5202__auto___7274 + (1));
i__5202__auto___7274 = G__7275;
continue;
} else {
}
break;
}

var argseq__5209__auto__ = ((((0) < args__5208__auto__.length))?(new cljs.core.IndexedSeq(args__5208__auto__.slice((0)),(0))):null);
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(argseq__5209__auto__);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
cljs.core.apply.call(null,cljs.compiler.emits,xs);

cljs.core.println.call(null);

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__7270){
var map__7271 = p__7270;
var map__7271__$1 = ((((!((map__7271 == null)))?((((map__7271.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7271.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7271):map__7271);
var m = map__7271__$1;
var gen_line = cljs.core.get.call(null,map__7271__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (0);

cljs.compiler.emitln.cljs$lang$applyTo = (function (seq7269){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7269));
});
cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__5117__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_7278_7280 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_7279_7281 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_7278_7280,_STAR_print_fn_STAR_7279_7281,sb__5117__auto__){
return (function (x__5118__auto__){
return sb__5117__auto__.append(x__5118__auto__);
});})(_STAR_print_newline_STAR_7278_7280,_STAR_print_fn_STAR_7279_7281,sb__5117__auto__))
;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_7279_7281;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_7278_7280;
}
return [cljs.core.str(sb__5117__auto__)].join('');
});
if(typeof cljs.compiler.emit_constant !== 'undefined'){
} else {
cljs.compiler.emit_constant = (function (){var method_table__5056__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5057__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5058__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5059__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5060__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit-constant"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5060__auto__,method_table__5056__auto__,prefer_table__5057__auto__,method_cache__5058__auto__,cached_hierarchy__5059__auto__));
})();
}
cljs.core._add_method.call(null,cljs.compiler.emit_constant,null,(function (x){
return cljs.compiler.emits.call(null,"null");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Number,(function (x){
return cljs.compiler.emits.call(null,x);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,String,(function (x){
return cljs.compiler.emits.call(null,cljs.compiler.wrap_in_double_quotes.call(null,cljs.compiler.escape_string.call(null,x)));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Boolean,(function (x){
return cljs.compiler.emits.call(null,(cljs.core.truth_(x)?"true":"false"));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,RegExp,(function (x){
if(cljs.core._EQ_.call(null,"",[cljs.core.str(x)].join(''))){
return cljs.compiler.emits.call(null,"(new RegExp(\"\"))");
} else {
var vec__7282 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,[cljs.core.str(x)].join(''));
var _ = cljs.core.nth.call(null,vec__7282,(0),null);
var flags = cljs.core.nth.call(null,vec__7282,(1),null);
var pattern = cljs.core.nth.call(null,vec__7282,(2),null);
return cljs.compiler.emits.call(null,pattern);
}
}));
cljs.compiler.emits_keyword = (function cljs$compiler$emits_keyword(kw){
var ns = cljs.core.namespace.call(null,kw);
var name = cljs.core.name.call(null,kw);
cljs.compiler.emits.call(null,"new cljs.core.Keyword(");

cljs.compiler.emit_constant.call(null,ns);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,name);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,(cljs.core.truth_(ns)?[cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(name)].join(''):name));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,kw));

return cljs.compiler.emits.call(null,")");
});
cljs.compiler.emits_symbol = (function cljs$compiler$emits_symbol(sym){
var ns = cljs.core.namespace.call(null,sym);
var name = cljs.core.name.call(null,sym);
var symstr = ((!((ns == null)))?[cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(name)].join(''):name);
cljs.compiler.emits.call(null,"new cljs.core.Symbol(");

cljs.compiler.emit_constant.call(null,ns);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,name);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,symstr);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,sym));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,null);

return cljs.compiler.emits.call(null,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.Keyword,(function (x){
if(cljs.core.truth_(new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))))){
var value = x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_keyword.call(null,x);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.Symbol,(function (x){
if(cljs.core.truth_(new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))))){
var value = x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_symbol.call(null,x);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Date,(function (date){
return cljs.compiler.emits.call(null,"new Date(",date.getTime(),")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.UUID,(function (uuid){
var uuid_str = uuid.toString();
return cljs.compiler.emits.call(null,"new cljs.core.UUID(\"",uuid_str,"\", ",cljs.core.hash.call(null,uuid_str),")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var","var",-769682797),(function (p__7284){
var map__7285 = p__7284;
var map__7285__$1 = ((((!((map__7285 == null)))?((((map__7285.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7285.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7285):map__7285);
var arg = map__7285__$1;
var info = cljs.core.get.call(null,map__7285__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__7285__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__7285__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.call(null,cljs.core.namespace.call(null,var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name.call(null,var_name)], null));
var or__4143__auto__ = js_module_name;
if(cljs.core.truth_(or__4143__auto__)){
return or__4143__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})():info);
if(cljs.core.truth_(new cljs.core.Keyword(null,"binding-form?","binding-form?",1728940169).cljs$core$IFn$_invoke$arity$1(arg))){
return cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,arg));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__7146__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7146__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,(function (){var G__7287 = info__$1;
var G__7287__$1 = ((cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null)))?cljs.compiler.munge.call(null,G__7287):G__7287);
return G__7287__$1;
})());

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7146__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var-special","var-special",1131576802),(function (p__7288){
var map__7289 = p__7288;
var map__7289__$1 = ((((!((map__7289 == null)))?((((map__7289.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7289.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7289):map__7289);
var arg = map__7289__$1;
var env = cljs.core.get.call(null,map__7289__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__7289__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__7289__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__7289__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("ana","ast?","ana/ast?",1470128118,null),new cljs.core.Symbol(null,"sym","sym",195671222,null))))].join('')));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("ana","ast?","ana/ast?",1470128118,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null))))].join('')));
}

var map__7291 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__7291__$1 = ((((!((map__7291 == null)))?((((map__7291.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7291.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7291):map__7291);
var name = cljs.core.get.call(null,map__7291__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__7146__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7146__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7146__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"meta","meta",1499536964),(function (p__7293){
var map__7294 = p__7293;
var map__7294__$1 = ((((!((map__7294 == null)))?((((map__7294.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7294.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7294):map__7294);
var expr = cljs.core.get.call(null,map__7294__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__7294__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__7294__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__7146__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7146__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7146__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.array_map_threshold = (8);
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
return (cljs.core.every_QMARK_.call(null,(function (p1__7296_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__7296_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),keys)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__7297){
var map__7298 = p__7297;
var map__7298__$1 = ((((!((map__7298 == null)))?((((map__7298.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7298.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7298):map__7298);
var env = cljs.core.get.call(null,map__7298__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__7298__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__7298__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__7146__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7146__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if((cljs.core.count.call(null,keys) === (0))){
cljs.compiler.emits.call(null,"cljs.core.PersistentArrayMap.EMPTY");
} else {
if((cljs.core.count.call(null,keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_(cljs.compiler.distinct_keys_QMARK_.call(null,keys))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentArrayMap(null, ",cljs.core.count.call(null,keys),", [",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,keys,vals)),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentArrayMap.fromArray([",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,keys,vals)),"], true, false)");
}
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentHashMap.fromArrays([",cljs.compiler.comma_sep.call(null,keys),"],[",cljs.compiler.comma_sep.call(null,vals),"])");

}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7146__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"list","list",765357683),(function (p__7300){
var map__7301 = p__7300;
var map__7301__$1 = ((((!((map__7301 == null)))?((((map__7301.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7301.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7301):map__7301);
var items = cljs.core.get.call(null,map__7301__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__7301__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__7146__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7146__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.List.EMPTY");
} else {
cljs.compiler.emits.call(null,"cljs.core.list(",cljs.compiler.comma_sep.call(null,items),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7146__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__7303){
var map__7304 = p__7303;
var map__7304__$1 = ((((!((map__7304 == null)))?((((map__7304.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7304.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7304):map__7304);
var items = cljs.core.get.call(null,map__7304__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__7304__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__7146__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7146__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.EMPTY");
} else {
var cnt_7306 = cljs.core.count.call(null,items);
if((cnt_7306 < (32))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentVector(null, ",cnt_7306,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",cljs.compiler.comma_sep.call(null,items),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.fromArray([",cljs.compiler.comma_sep.call(null,items),"], true)");
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7146__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
return (cljs.core.every_QMARK_.call(null,(function (p1__7307_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__7307_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),items)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,items)),cljs.core.count.call(null,items)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__7308){
var map__7309 = p__7308;
var map__7309__$1 = ((((!((map__7309 == null)))?((((map__7309.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7309.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7309):map__7309);
var items = cljs.core.get.call(null,map__7309__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__7309__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__7146__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7146__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.EMPTY");
} else {
if(cljs.core.truth_(cljs.compiler.distinct_constants_QMARK_.call(null,items))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count.call(null,items),", [",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,items,cljs.core.repeat.call(null,"null"))),"], null), null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.fromArray([",cljs.compiler.comma_sep.call(null,items),"], true)");

}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7146__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-value","js-value",-758336661),(function (p__7311){
var map__7312 = p__7311;
var map__7312__$1 = ((((!((map__7312 == null)))?((((map__7312.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7312.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7312):map__7312);
var items = cljs.core.get.call(null,map__7312__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var js_type = cljs.core.get.call(null,map__7312__$1,new cljs.core.Keyword(null,"js-type","js-type",539386702));
var env = cljs.core.get.call(null,map__7312__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__7146__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7146__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core._EQ_.call(null,js_type,new cljs.core.Keyword(null,"object","object",1474613949))){
cljs.compiler.emits.call(null,"{");

var temp__4425__auto___7322 = cljs.core.seq.call(null,items);
if(temp__4425__auto___7322){
var items_7323__$1 = temp__4425__auto___7322;
var vec__7314_7324 = items_7323__$1;
var vec__7315_7325 = cljs.core.nth.call(null,vec__7314_7324,(0),null);
var k_7326 = cljs.core.nth.call(null,vec__7315_7325,(0),null);
var v_7327 = cljs.core.nth.call(null,vec__7315_7325,(1),null);
var r_7328 = cljs.core.nthnext.call(null,vec__7314_7324,(1));
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_7326),"\": ",v_7327);

var seq__7316_7329 = cljs.core.seq.call(null,r_7328);
var chunk__7317_7330 = null;
var count__7318_7331 = (0);
var i__7319_7332 = (0);
while(true){
if((i__7319_7332 < count__7318_7331)){
var vec__7320_7333 = cljs.core._nth.call(null,chunk__7317_7330,i__7319_7332);
var k_7334__$1 = cljs.core.nth.call(null,vec__7320_7333,(0),null);
var v_7335__$1 = cljs.core.nth.call(null,vec__7320_7333,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_7334__$1),"\": ",v_7335__$1);

var G__7336 = seq__7316_7329;
var G__7337 = chunk__7317_7330;
var G__7338 = count__7318_7331;
var G__7339 = (i__7319_7332 + (1));
seq__7316_7329 = G__7336;
chunk__7317_7330 = G__7337;
count__7318_7331 = G__7338;
i__7319_7332 = G__7339;
continue;
} else {
var temp__4425__auto___7340__$1 = cljs.core.seq.call(null,seq__7316_7329);
if(temp__4425__auto___7340__$1){
var seq__7316_7341__$1 = temp__4425__auto___7340__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7316_7341__$1)){
var c__4946__auto___7342 = cljs.core.chunk_first.call(null,seq__7316_7341__$1);
var G__7343 = cljs.core.chunk_rest.call(null,seq__7316_7341__$1);
var G__7344 = c__4946__auto___7342;
var G__7345 = cljs.core.count.call(null,c__4946__auto___7342);
var G__7346 = (0);
seq__7316_7329 = G__7343;
chunk__7317_7330 = G__7344;
count__7318_7331 = G__7345;
i__7319_7332 = G__7346;
continue;
} else {
var vec__7321_7347 = cljs.core.first.call(null,seq__7316_7341__$1);
var k_7348__$1 = cljs.core.nth.call(null,vec__7321_7347,(0),null);
var v_7349__$1 = cljs.core.nth.call(null,vec__7321_7347,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_7348__$1),"\": ",v_7349__$1);

var G__7350 = cljs.core.next.call(null,seq__7316_7341__$1);
var G__7351 = null;
var G__7352 = (0);
var G__7353 = (0);
seq__7316_7329 = G__7350;
chunk__7317_7330 = G__7351;
count__7318_7331 = G__7352;
i__7319_7332 = G__7353;
continue;
}
} else {
}
}
break;
}
} else {
}

cljs.compiler.emits.call(null,"}");
} else {
cljs.compiler.emits.call(null,"[",cljs.compiler.comma_sep.call(null,items),"]");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7146__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"constant","constant",-379609303),(function (p__7354){
var map__7355 = p__7354;
var map__7355__$1 = ((((!((map__7355 == null)))?((((map__7355.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7355.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7355):map__7355);
var form = cljs.core.get.call(null,map__7355__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__7355__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__7146__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7146__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7146__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(p__7357){
var map__7360 = p__7357;
var map__7360__$1 = ((((!((map__7360 == null)))?((((map__7360.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7360.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7360):map__7360);
var op = cljs.core.get.call(null,map__7360__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__7360__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var and__4131__auto__ = cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303));
if(and__4131__auto__){
var and__4131__auto____$1 = form;
if(cljs.core.truth_(and__4131__auto____$1)){
return !(((typeof form === 'string') && (cljs.core._EQ_.call(null,form,""))) || ((typeof form === 'number') && ((form === (0)))));
} else {
return and__4131__auto____$1;
}
} else {
return and__4131__auto__;
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(p__7362){
var map__7365 = p__7362;
var map__7365__$1 = ((((!((map__7365 == null)))?((((map__7365.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7365.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7365):map__7365);
var op = cljs.core.get.call(null,map__7365__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__7365__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
return (cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303))) && ((form === false) || ((form == null)));
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag.call(null,env,e);
var or__4143__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,tag);
if(cljs.core.truth_(or__4143__auto__)){
return or__4143__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_.call(null,e);
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__7367){
var map__7368 = p__7367;
var map__7368__$1 = ((((!((map__7368 == null)))?((((map__7368.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7368.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7368):map__7368);
var test = cljs.core.get.call(null,map__7368__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__7368__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__7368__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__7368__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__7368__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not.call(null,(function (){var or__4143__auto__ = unchecked;
if(cljs.core.truth_(or__4143__auto__)){
return or__4143__auto__;
} else {
return cljs.compiler.safe_test_QMARK_.call(null,env,test);
}
})());
if(cljs.core.truth_(cljs.compiler.truthy_constant_QMARK_.call(null,test))){
return cljs.compiler.emitln.call(null,then);
} else {
if(cljs.core.truth_(cljs.compiler.falsey_constant_QMARK_.call(null,test))){
return cljs.compiler.emitln.call(null,else$);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"(",((checked)?"cljs.core.truth_":null),"(",test,")?",then,":",else$,")");
} else {
if(checked){
cljs.compiler.emitln.call(null,"if(cljs.core.truth_(",test,")){");
} else {
cljs.compiler.emitln.call(null,"if(",test,"){");
}

cljs.compiler.emitln.call(null,then,"} else {");

return cljs.compiler.emitln.call(null,else$,"}");
}

}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case*","case*",716180697),(function (p__7370){
var map__7371 = p__7370;
var map__7371__$1 = ((((!((map__7371 == null)))?((((map__7371.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7371.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7371):map__7371);
var v = cljs.core.get.call(null,map__7371__$1,new cljs.core.Keyword(null,"v","v",21465059));
var tests = cljs.core.get.call(null,map__7371__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var thens = cljs.core.get.call(null,map__7371__$1,new cljs.core.Keyword(null,"thens","thens",226631442));
var default$ = cljs.core.get.call(null,map__7371__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__7371__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"expr","expr",745722291))){
cljs.compiler.emitln.call(null,"(function(){");
} else {
}

var gs = cljs.core.gensym.call(null,"caseval__");
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"var ",gs,";");
} else {
}

cljs.compiler.emitln.call(null,"switch (",v,") {");

var seq__7373_7387 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,tests,thens)));
var chunk__7374_7388 = null;
var count__7375_7389 = (0);
var i__7376_7390 = (0);
while(true){
if((i__7376_7390 < count__7375_7389)){
var vec__7377_7391 = cljs.core._nth.call(null,chunk__7374_7388,i__7376_7390);
var ts_7392 = cljs.core.nth.call(null,vec__7377_7391,(0),null);
var then_7393 = cljs.core.nth.call(null,vec__7377_7391,(1),null);
var seq__7378_7394 = cljs.core.seq.call(null,ts_7392);
var chunk__7379_7395 = null;
var count__7380_7396 = (0);
var i__7381_7397 = (0);
while(true){
if((i__7381_7397 < count__7380_7396)){
var test_7398 = cljs.core._nth.call(null,chunk__7379_7395,i__7381_7397);
cljs.compiler.emitln.call(null,"case ",test_7398,":");

var G__7399 = seq__7378_7394;
var G__7400 = chunk__7379_7395;
var G__7401 = count__7380_7396;
var G__7402 = (i__7381_7397 + (1));
seq__7378_7394 = G__7399;
chunk__7379_7395 = G__7400;
count__7380_7396 = G__7401;
i__7381_7397 = G__7402;
continue;
} else {
var temp__4425__auto___7403 = cljs.core.seq.call(null,seq__7378_7394);
if(temp__4425__auto___7403){
var seq__7378_7404__$1 = temp__4425__auto___7403;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7378_7404__$1)){
var c__4946__auto___7405 = cljs.core.chunk_first.call(null,seq__7378_7404__$1);
var G__7406 = cljs.core.chunk_rest.call(null,seq__7378_7404__$1);
var G__7407 = c__4946__auto___7405;
var G__7408 = cljs.core.count.call(null,c__4946__auto___7405);
var G__7409 = (0);
seq__7378_7394 = G__7406;
chunk__7379_7395 = G__7407;
count__7380_7396 = G__7408;
i__7381_7397 = G__7409;
continue;
} else {
var test_7410 = cljs.core.first.call(null,seq__7378_7404__$1);
cljs.compiler.emitln.call(null,"case ",test_7410,":");

var G__7411 = cljs.core.next.call(null,seq__7378_7404__$1);
var G__7412 = null;
var G__7413 = (0);
var G__7414 = (0);
seq__7378_7394 = G__7411;
chunk__7379_7395 = G__7412;
count__7380_7396 = G__7413;
i__7381_7397 = G__7414;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_7393);
} else {
cljs.compiler.emitln.call(null,then_7393);
}

cljs.compiler.emitln.call(null,"break;");

var G__7415 = seq__7373_7387;
var G__7416 = chunk__7374_7388;
var G__7417 = count__7375_7389;
var G__7418 = (i__7376_7390 + (1));
seq__7373_7387 = G__7415;
chunk__7374_7388 = G__7416;
count__7375_7389 = G__7417;
i__7376_7390 = G__7418;
continue;
} else {
var temp__4425__auto___7419 = cljs.core.seq.call(null,seq__7373_7387);
if(temp__4425__auto___7419){
var seq__7373_7420__$1 = temp__4425__auto___7419;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7373_7420__$1)){
var c__4946__auto___7421 = cljs.core.chunk_first.call(null,seq__7373_7420__$1);
var G__7422 = cljs.core.chunk_rest.call(null,seq__7373_7420__$1);
var G__7423 = c__4946__auto___7421;
var G__7424 = cljs.core.count.call(null,c__4946__auto___7421);
var G__7425 = (0);
seq__7373_7387 = G__7422;
chunk__7374_7388 = G__7423;
count__7375_7389 = G__7424;
i__7376_7390 = G__7425;
continue;
} else {
var vec__7382_7426 = cljs.core.first.call(null,seq__7373_7420__$1);
var ts_7427 = cljs.core.nth.call(null,vec__7382_7426,(0),null);
var then_7428 = cljs.core.nth.call(null,vec__7382_7426,(1),null);
var seq__7383_7429 = cljs.core.seq.call(null,ts_7427);
var chunk__7384_7430 = null;
var count__7385_7431 = (0);
var i__7386_7432 = (0);
while(true){
if((i__7386_7432 < count__7385_7431)){
var test_7433 = cljs.core._nth.call(null,chunk__7384_7430,i__7386_7432);
cljs.compiler.emitln.call(null,"case ",test_7433,":");

var G__7434 = seq__7383_7429;
var G__7435 = chunk__7384_7430;
var G__7436 = count__7385_7431;
var G__7437 = (i__7386_7432 + (1));
seq__7383_7429 = G__7434;
chunk__7384_7430 = G__7435;
count__7385_7431 = G__7436;
i__7386_7432 = G__7437;
continue;
} else {
var temp__4425__auto___7438__$1 = cljs.core.seq.call(null,seq__7383_7429);
if(temp__4425__auto___7438__$1){
var seq__7383_7439__$1 = temp__4425__auto___7438__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7383_7439__$1)){
var c__4946__auto___7440 = cljs.core.chunk_first.call(null,seq__7383_7439__$1);
var G__7441 = cljs.core.chunk_rest.call(null,seq__7383_7439__$1);
var G__7442 = c__4946__auto___7440;
var G__7443 = cljs.core.count.call(null,c__4946__auto___7440);
var G__7444 = (0);
seq__7383_7429 = G__7441;
chunk__7384_7430 = G__7442;
count__7385_7431 = G__7443;
i__7386_7432 = G__7444;
continue;
} else {
var test_7445 = cljs.core.first.call(null,seq__7383_7439__$1);
cljs.compiler.emitln.call(null,"case ",test_7445,":");

var G__7446 = cljs.core.next.call(null,seq__7383_7439__$1);
var G__7447 = null;
var G__7448 = (0);
var G__7449 = (0);
seq__7383_7429 = G__7446;
chunk__7384_7430 = G__7447;
count__7385_7431 = G__7448;
i__7386_7432 = G__7449;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_7428);
} else {
cljs.compiler.emitln.call(null,then_7428);
}

cljs.compiler.emitln.call(null,"break;");

var G__7450 = cljs.core.next.call(null,seq__7373_7420__$1);
var G__7451 = null;
var G__7452 = (0);
var G__7453 = (0);
seq__7373_7387 = G__7450;
chunk__7374_7388 = G__7451;
count__7375_7389 = G__7452;
i__7376_7390 = G__7453;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(default$)){
cljs.compiler.emitln.call(null,"default:");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",default$);
} else {
cljs.compiler.emitln.call(null,default$);
}
} else {
}

cljs.compiler.emitln.call(null,"}");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"return ",gs,";})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__7454){
var map__7455 = p__7454;
var map__7455__$1 = ((((!((map__7455 == null)))?((((map__7455.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7455.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7455):map__7455);
var throw$ = cljs.core.get.call(null,map__7455__$1,new cljs.core.Keyword(null,"throw","throw",-1044625833));
var env = cljs.core.get.call(null,map__7455__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emits.call(null,"(function(){throw ",throw$,"})()");
} else {
return cljs.compiler.emitln.call(null,"throw ",throw$,";");
}
}));
cljs.compiler.base_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, ["boolean",null,"object",null,"*",null,"string",null,"Object",null,"Number",null,"null",null,"Date",null,"number",null,"String",null,"RegExp",null,"...*",null,"Array",null,"array",null,"Boolean",null], null), null);
cljs.compiler.mapped_types = new cljs.core.PersistentArrayMap(null, 1, ["nil","null"], null);
cljs.compiler.resolve_type = (function cljs$compiler$resolve_type(env,t){
if(cljs.core.truth_(cljs.core.get.call(null,cljs.compiler.base_types,t))){
return t;
} else {
if(cljs.core.truth_(cljs.core.get.call(null,cljs.compiler.mapped_types,t))){
return cljs.core.get.call(null,cljs.compiler.mapped_types,t);
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"!"))){
return [cljs.core.str("!"),cljs.core.str(cljs$compiler$resolve_type.call(null,env,cljs.core.subs.call(null,t,(1))))].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__7460 = ((!(((-1) === idx)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__7460,(0),null);
var rstr = cljs.core.nth.call(null,vec__7460,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs$compiler$resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__7460,fstr,rstr,ret_t,axstr){
return (function (p1__7457_SHARP_){
return cljs$compiler$resolve_type.call(null,env,p1__7457_SHARP_);
});})(idx,vec__7460,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__7461 = [cljs.core.str("function("),cljs.core.str(clojure.string.join.call(null,",",args_ts)),cljs.core.str(")")].join('');
var G__7461__$1 = (cljs.core.truth_(ret_t)?[cljs.core.str(G__7461),cljs.core.str(":"),cljs.core.str(ret_t)].join(''):G__7461);
return G__7461__$1;
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str(cljs$compiler$resolve_type.call(null,env,cljs.core.subs.call(null,t,(0),(cljs.core.count.call(null,t) - (1))))),cljs.core.str("=")].join('');
} else {
return cljs.compiler.munge.call(null,[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,env,cljs.core.symbol.call(null,t))))].join(''));

}
}
}
}
}
}
});
cljs.compiler.resolve_types = (function cljs$compiler$resolve_types(env,ts){
var ts__$1 = cljs.core.subs.call(null,clojure.string.trim.call(null,ts),(1),(cljs.core.count.call(null,ts) - (1)));
var xs = clojure.string.split.call(null,ts__$1,/\|/);
return [cljs.core.str("{"),cljs.core.str(clojure.string.join.call(null,"|",cljs.core.map.call(null,((function (ts__$1,xs){
return (function (p1__7462_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__7462_SHARP_);
});})(ts__$1,xs))
,xs))),cljs.core.str("}")].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__7465 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var p = cljs.core.nth.call(null,vec__7465,(0),null);
var ts = cljs.core.nth.call(null,vec__7465,(1),null);
var n = cljs.core.nth.call(null,vec__7465,(2),null);
var xs = cljs.core.nthnext.call(null,vec__7465,(3));
if(cljs.core.truth_((function (){var and__4131__auto__ = cljs.core._EQ_.call(null,"@param",p);
if(and__4131__auto__){
var and__4131__auto____$1 = ts;
if(cljs.core.truth_(and__4131__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__4131__auto____$1;
}
} else {
return and__4131__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts),cljs.compiler.munge.call(null,n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find.call(null,/@return/,line))){
var vec__7466 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var p = cljs.core.nth.call(null,vec__7466,(0),null);
var ts = cljs.core.nth.call(null,vec__7466,(1),null);
var xs = cljs.core.nthnext.call(null,vec__7466,(2));
if(cljs.core.truth_((function (){var and__4131__auto__ = cljs.core._EQ_.call(null,"@return",p);
if(and__4131__auto__){
var and__4131__auto____$1 = ts;
if(cljs.core.truth_(and__4131__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__4131__auto____$1;
}
} else {
return and__4131__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts)], null),xs));
} else {
return line;
}
} else {
return line;

}
}
});
cljs.compiler.checking_types_QMARK_ = (function cljs$compiler$checking_types_QMARK_(){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warn","warn",-436710552),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null).call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"closure-warnings","closure-warnings",1362834211),new cljs.core.Keyword(null,"check-types","check-types",-833794607)], null)));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var args7468 = [];
var len__5201__auto___7495 = arguments.length;
var i__5202__auto___7496 = (0);
while(true){
if((i__5202__auto___7496 < len__5201__auto___7495)){
args7468.push((arguments[i__5202__auto___7496]));

var G__7497 = (i__5202__auto___7496 + (1));
i__5202__auto___7496 = G__7497;
continue;
} else {
}
break;
}

var G__7470 = args7468.length;
switch (G__7470) {
case 2:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7468.length)].join('')));

}
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2 = (function (doc,jsdoc){
return cljs.compiler.emit_comment.call(null,null,doc,jsdoc);
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3 = (function (env,doc,jsdoc){
var docs = (cljs.core.truth_(doc)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc], null):null);
var docs__$1 = (cljs.core.truth_(jsdoc)?cljs.core.concat.call(null,docs,jsdoc):docs);
var docs__$2 = cljs.core.remove.call(null,cljs.core.nil_QMARK_,docs__$1);
var print_comment_lines = ((function (docs,docs__$1,docs__$2){
return (function cljs$compiler$print_comment_lines(e){
var vec__7486 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__7467_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__7467_SHARP_);
} else {
return p1__7467_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var x = cljs.core.nth.call(null,vec__7486,(0),null);
var ys = cljs.core.nthnext.call(null,vec__7486,(1));
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__7487 = cljs.core.seq.call(null,ys);
var chunk__7488 = null;
var count__7489 = (0);
var i__7490 = (0);
while(true){
if((i__7490 < count__7489)){
var next_line = cljs.core._nth.call(null,chunk__7488,i__7490);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__7499 = seq__7487;
var G__7500 = chunk__7488;
var G__7501 = count__7489;
var G__7502 = (i__7490 + (1));
seq__7487 = G__7499;
chunk__7488 = G__7500;
count__7489 = G__7501;
i__7490 = G__7502;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__7487);
if(temp__4425__auto__){
var seq__7487__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7487__$1)){
var c__4946__auto__ = cljs.core.chunk_first.call(null,seq__7487__$1);
var G__7503 = cljs.core.chunk_rest.call(null,seq__7487__$1);
var G__7504 = c__4946__auto__;
var G__7505 = cljs.core.count.call(null,c__4946__auto__);
var G__7506 = (0);
seq__7487 = G__7503;
chunk__7488 = G__7504;
count__7489 = G__7505;
i__7490 = G__7506;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__7487__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__7507 = cljs.core.next.call(null,seq__7487__$1);
var G__7508 = null;
var G__7509 = (0);
var G__7510 = (0);
seq__7487 = G__7507;
chunk__7488 = G__7508;
count__7489 = G__7509;
i__7490 = G__7510;
continue;
}
} else {
return null;
}
}
break;
}
});})(docs,docs__$1,docs__$2))
;
if(cljs.core.seq.call(null,docs__$2)){
cljs.compiler.emitln.call(null,"/**");

var seq__7491_7511 = cljs.core.seq.call(null,docs__$2);
var chunk__7492_7512 = null;
var count__7493_7513 = (0);
var i__7494_7514 = (0);
while(true){
if((i__7494_7514 < count__7493_7513)){
var e_7515 = cljs.core._nth.call(null,chunk__7492_7512,i__7494_7514);
if(cljs.core.truth_(e_7515)){
print_comment_lines.call(null,e_7515);
} else {
}

var G__7516 = seq__7491_7511;
var G__7517 = chunk__7492_7512;
var G__7518 = count__7493_7513;
var G__7519 = (i__7494_7514 + (1));
seq__7491_7511 = G__7516;
chunk__7492_7512 = G__7517;
count__7493_7513 = G__7518;
i__7494_7514 = G__7519;
continue;
} else {
var temp__4425__auto___7520 = cljs.core.seq.call(null,seq__7491_7511);
if(temp__4425__auto___7520){
var seq__7491_7521__$1 = temp__4425__auto___7520;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7491_7521__$1)){
var c__4946__auto___7522 = cljs.core.chunk_first.call(null,seq__7491_7521__$1);
var G__7523 = cljs.core.chunk_rest.call(null,seq__7491_7521__$1);
var G__7524 = c__4946__auto___7522;
var G__7525 = cljs.core.count.call(null,c__4946__auto___7522);
var G__7526 = (0);
seq__7491_7511 = G__7523;
chunk__7492_7512 = G__7524;
count__7493_7513 = G__7525;
i__7494_7514 = G__7526;
continue;
} else {
var e_7527 = cljs.core.first.call(null,seq__7491_7521__$1);
if(cljs.core.truth_(e_7527)){
print_comment_lines.call(null,e_7527);
} else {
}

var G__7528 = cljs.core.next.call(null,seq__7491_7521__$1);
var G__7529 = null;
var G__7530 = (0);
var G__7531 = (0);
seq__7491_7511 = G__7528;
chunk__7492_7512 = G__7529;
count__7493_7513 = G__7530;
i__7494_7514 = G__7531;
continue;
}
} else {
}
}
break;
}

return cljs.compiler.emitln.call(null," */");
} else {
return null;
}
});

cljs.compiler.emit_comment.cljs$lang$maxFixedArity = 3;
cljs.compiler.valid_define_value_QMARK_ = (function cljs$compiler$valid_define_value_QMARK_(x){
return (typeof x === 'string') || (x === true) || (x === false) || (typeof x === 'number');
});
cljs.compiler.get_define = (function cljs$compiler$get_define(mname,jsdoc){
var opts = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword(null,"options","options",99638489));
var and__4131__auto__ = cljs.core.some.call(null,((function (opts){
return (function (p1__7533_SHARP_){
return goog.string.startsWith(p1__7533_SHARP_,"@define");
});})(opts))
,jsdoc);
if(cljs.core.truth_(and__4131__auto__)){
var and__4131__auto____$1 = opts;
if(cljs.core.truth_(and__4131__auto____$1)){
var and__4131__auto____$2 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"none","none",1333468478));
if(and__4131__auto____$2){
var define = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),[cljs.core.str(mname)].join('')], null));
if(cljs.core.truth_(cljs.compiler.valid_define_value_QMARK_.call(null,define))){
return cljs.core.pr_str.call(null,define);
} else {
return null;
}
} else {
return and__4131__auto____$2;
}
} else {
return and__4131__auto____$1;
}
} else {
return and__4131__auto__;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__7534){
var map__7535 = p__7534;
var map__7535__$1 = ((((!((map__7535 == null)))?((((map__7535.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7535.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7535):map__7535);
var name = cljs.core.get.call(null,map__7535__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var var$ = cljs.core.get.call(null,map__7535__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var init = cljs.core.get.call(null,map__7535__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var env = cljs.core.get.call(null,map__7535__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var doc = cljs.core.get.call(null,map__7535__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__7535__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var export$ = cljs.core.get.call(null,map__7535__$1,new cljs.core.Keyword(null,"export","export",214356590));
var test = cljs.core.get.call(null,map__7535__$1,new cljs.core.Keyword(null,"test","test",577538877));
var var_ast = cljs.core.get.call(null,map__7535__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
var mname = cljs.compiler.munge.call(null,name);
cljs.compiler.emit_comment.call(null,env,doc,cljs.core.concat.call(null,jsdoc,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516).cljs$core$IFn$_invoke$arity$1(init)));

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"return (");
} else {
}

cljs.compiler.emitln.call(null,"(function (){");
} else {
}

cljs.compiler.emits.call(null,var$);

if(cljs.core.truth_(init)){
cljs.compiler.emits.call(null," = ",(function (){var temp__4423__auto__ = cljs.compiler.get_define.call(null,mname,jsdoc);
if(cljs.core.truth_(temp__4423__auto__)){
var define = temp__4423__auto__;
return define;
} else {
return init;
}
})());
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"; return (");

cljs.compiler.emits.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"var-special","var-special",1131576802),new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291))], null),var_ast));

cljs.compiler.emitln.call(null,");})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,")");
} else {
}
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emitln.call(null,";");
}

if(cljs.core.truth_(export$)){
cljs.compiler.emitln.call(null,"goog.exportSymbol('",cljs.compiler.munge.call(null,export$),"', ",mname,");");
} else {
}

if(cljs.core.truth_((function (){var and__4131__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(cljs.core.truth_(and__4131__auto__)){
return test;
} else {
return and__4131__auto__;
}
})())){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,";");
} else {
}

return cljs.compiler.emitln.call(null,var$,".cljs$lang$test = ",test,";");
} else {
return null;
}
}));
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__7537){
var map__7554 = p__7537;
var map__7554__$1 = ((((!((map__7554 == null)))?((((map__7554.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7554.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7554):map__7554);
var name = cljs.core.get.call(null,map__7554__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__7554__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__7554__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str(cljs.compiler.munge.call(null,name)),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__7556_7570 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__7557_7571 = null;
var count__7558_7572 = (0);
var i__7559_7573 = (0);
while(true){
if((i__7559_7573 < count__7558_7572)){
var vec__7560_7574 = cljs.core._nth.call(null,chunk__7557_7571,i__7559_7573);
var i_7575 = cljs.core.nth.call(null,vec__7560_7574,(0),null);
var param_7576 = cljs.core.nth.call(null,vec__7560_7574,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_7576);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__7577 = seq__7556_7570;
var G__7578 = chunk__7557_7571;
var G__7579 = count__7558_7572;
var G__7580 = (i__7559_7573 + (1));
seq__7556_7570 = G__7577;
chunk__7557_7571 = G__7578;
count__7558_7572 = G__7579;
i__7559_7573 = G__7580;
continue;
} else {
var temp__4425__auto___7581 = cljs.core.seq.call(null,seq__7556_7570);
if(temp__4425__auto___7581){
var seq__7556_7582__$1 = temp__4425__auto___7581;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7556_7582__$1)){
var c__4946__auto___7583 = cljs.core.chunk_first.call(null,seq__7556_7582__$1);
var G__7584 = cljs.core.chunk_rest.call(null,seq__7556_7582__$1);
var G__7585 = c__4946__auto___7583;
var G__7586 = cljs.core.count.call(null,c__4946__auto___7583);
var G__7587 = (0);
seq__7556_7570 = G__7584;
chunk__7557_7571 = G__7585;
count__7558_7572 = G__7586;
i__7559_7573 = G__7587;
continue;
} else {
var vec__7561_7588 = cljs.core.first.call(null,seq__7556_7582__$1);
var i_7589 = cljs.core.nth.call(null,vec__7561_7588,(0),null);
var param_7590 = cljs.core.nth.call(null,vec__7561_7588,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_7590);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__7591 = cljs.core.next.call(null,seq__7556_7582__$1);
var G__7592 = null;
var G__7593 = (0);
var G__7594 = (0);
seq__7556_7570 = G__7591;
chunk__7557_7571 = G__7592;
count__7558_7572 = G__7593;
i__7559_7573 = G__7594;
continue;
}
} else {
}
}
break;
}

if(((1) < cljs.core.count.call(null,params))){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,cljs.core.butlast.call(null,params)));

cljs.compiler.emitln.call(null," = cljs.core.first(",arglist,");");

cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = cljs.core.rest(",arglist,");");

cljs.compiler.emits.call(null,"return ",delegate_name,"(");

var seq__7562_7595 = cljs.core.seq.call(null,params);
var chunk__7563_7596 = null;
var count__7564_7597 = (0);
var i__7565_7598 = (0);
while(true){
if((i__7565_7598 < count__7564_7597)){
var param_7599 = cljs.core._nth.call(null,chunk__7563_7596,i__7565_7598);
cljs.compiler.emit.call(null,param_7599);

if(cljs.core._EQ_.call(null,param_7599,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__7600 = seq__7562_7595;
var G__7601 = chunk__7563_7596;
var G__7602 = count__7564_7597;
var G__7603 = (i__7565_7598 + (1));
seq__7562_7595 = G__7600;
chunk__7563_7596 = G__7601;
count__7564_7597 = G__7602;
i__7565_7598 = G__7603;
continue;
} else {
var temp__4425__auto___7604 = cljs.core.seq.call(null,seq__7562_7595);
if(temp__4425__auto___7604){
var seq__7562_7605__$1 = temp__4425__auto___7604;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7562_7605__$1)){
var c__4946__auto___7606 = cljs.core.chunk_first.call(null,seq__7562_7605__$1);
var G__7607 = cljs.core.chunk_rest.call(null,seq__7562_7605__$1);
var G__7608 = c__4946__auto___7606;
var G__7609 = cljs.core.count.call(null,c__4946__auto___7606);
var G__7610 = (0);
seq__7562_7595 = G__7607;
chunk__7563_7596 = G__7608;
count__7564_7597 = G__7609;
i__7565_7598 = G__7610;
continue;
} else {
var param_7611 = cljs.core.first.call(null,seq__7562_7605__$1);
cljs.compiler.emit.call(null,param_7611);

if(cljs.core._EQ_.call(null,param_7611,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__7612 = cljs.core.next.call(null,seq__7562_7605__$1);
var G__7613 = null;
var G__7614 = (0);
var G__7615 = (0);
seq__7562_7595 = G__7612;
chunk__7563_7596 = G__7613;
count__7564_7597 = G__7614;
i__7565_7598 = G__7615;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,");");
} else {
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = cljs.core.seq(",arglist,");");

cljs.compiler.emits.call(null,"return ",delegate_name,"(");

var seq__7566_7616 = cljs.core.seq.call(null,params);
var chunk__7567_7617 = null;
var count__7568_7618 = (0);
var i__7569_7619 = (0);
while(true){
if((i__7569_7619 < count__7568_7618)){
var param_7620 = cljs.core._nth.call(null,chunk__7567_7617,i__7569_7619);
cljs.compiler.emit.call(null,param_7620);

if(cljs.core._EQ_.call(null,param_7620,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__7621 = seq__7566_7616;
var G__7622 = chunk__7567_7617;
var G__7623 = count__7568_7618;
var G__7624 = (i__7569_7619 + (1));
seq__7566_7616 = G__7621;
chunk__7567_7617 = G__7622;
count__7568_7618 = G__7623;
i__7569_7619 = G__7624;
continue;
} else {
var temp__4425__auto___7625 = cljs.core.seq.call(null,seq__7566_7616);
if(temp__4425__auto___7625){
var seq__7566_7626__$1 = temp__4425__auto___7625;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7566_7626__$1)){
var c__4946__auto___7627 = cljs.core.chunk_first.call(null,seq__7566_7626__$1);
var G__7628 = cljs.core.chunk_rest.call(null,seq__7566_7626__$1);
var G__7629 = c__4946__auto___7627;
var G__7630 = cljs.core.count.call(null,c__4946__auto___7627);
var G__7631 = (0);
seq__7566_7616 = G__7628;
chunk__7567_7617 = G__7629;
count__7568_7618 = G__7630;
i__7569_7619 = G__7631;
continue;
} else {
var param_7632 = cljs.core.first.call(null,seq__7566_7626__$1);
cljs.compiler.emit.call(null,param_7632);

if(cljs.core._EQ_.call(null,param_7632,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__7633 = cljs.core.next.call(null,seq__7566_7626__$1);
var G__7634 = null;
var G__7635 = (0);
var G__7636 = (0);
seq__7566_7616 = G__7633;
chunk__7567_7617 = G__7634;
count__7568_7618 = G__7635;
i__7569_7619 = G__7636;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,");");
}

return cljs.compiler.emits.call(null,"})");
});
cljs.compiler.emit_fn_params = (function cljs$compiler$emit_fn_params(params){
var seq__7641 = cljs.core.seq.call(null,params);
var chunk__7642 = null;
var count__7643 = (0);
var i__7644 = (0);
while(true){
if((i__7644 < count__7643)){
var param = cljs.core._nth.call(null,chunk__7642,i__7644);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__7645 = seq__7641;
var G__7646 = chunk__7642;
var G__7647 = count__7643;
var G__7648 = (i__7644 + (1));
seq__7641 = G__7645;
chunk__7642 = G__7646;
count__7643 = G__7647;
i__7644 = G__7648;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__7641);
if(temp__4425__auto__){
var seq__7641__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7641__$1)){
var c__4946__auto__ = cljs.core.chunk_first.call(null,seq__7641__$1);
var G__7649 = cljs.core.chunk_rest.call(null,seq__7641__$1);
var G__7650 = c__4946__auto__;
var G__7651 = cljs.core.count.call(null,c__4946__auto__);
var G__7652 = (0);
seq__7641 = G__7649;
chunk__7642 = G__7650;
count__7643 = G__7651;
i__7644 = G__7652;
continue;
} else {
var param = cljs.core.first.call(null,seq__7641__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__7653 = cljs.core.next.call(null,seq__7641__$1);
var G__7654 = null;
var G__7655 = (0);
var G__7656 = (0);
seq__7641 = G__7653;
chunk__7642 = G__7654;
count__7643 = G__7655;
i__7644 = G__7656;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__7657){
var map__7660 = p__7657;
var map__7660__$1 = ((((!((map__7660 == null)))?((((map__7660.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7660.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7660):map__7660);
var type = cljs.core.get.call(null,map__7660__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__7660__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__7660__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__7660__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__7660__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__7660__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__7660__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__7660__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__7146__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7146__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(function ",cljs.compiler.munge.call(null,name),"(");

cljs.compiler.emit_fn_params.call(null,params);

cljs.compiler.emitln.call(null,"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}

cljs.compiler.emits.call(null,"})");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7146__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
/**
 * Emit code that copies function arguments into an array starting at an index.
 *   Returns name of var holding the array.
 */
cljs.compiler.emit_arguments_to_array = (function cljs$compiler$emit_arguments_to_array(startslice){
if(((startslice >= (0))) && (cljs.core.integer_QMARK_.call(null,startslice))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"startslice","startslice",1404029423,null),(0)),cljs.core.list(new cljs.core.Symbol(null,"integer?","integer?",1303791671,null),new cljs.core.Symbol(null,"startslice","startslice",1404029423,null)))))].join('')));
}

var mname = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
var i = [cljs.core.str(mname),cljs.core.str("__i")].join('');
var a = [cljs.core.str(mname),cljs.core.str("__a")].join('');
cljs.compiler.emitln.call(null,"var ",i," = 0, ",a," = new Array(arguments.length -  ",startslice,");");

cljs.compiler.emitln.call(null,"while (",i," < ",a,".length) {",a,"[",i,"] = arguments[",i," + ",startslice,"]; ++",i,";}");

return a;
});
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__7662){
var map__7673 = p__7662;
var map__7673__$1 = ((((!((map__7673 == null)))?((((map__7673.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7673.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7673):map__7673);
var f = map__7673__$1;
var type = cljs.core.get.call(null,map__7673__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__7673__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__7673__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__7673__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__7673__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__7673__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__7673__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__7673__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__7146__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7146__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_7683__$1 = (function (){var or__4143__auto__ = name;
if(cljs.core.truth_(or__4143__auto__)){
return or__4143__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_7684 = cljs.compiler.munge.call(null,name_7683__$1);
var delegate_name_7685 = [cljs.core.str(mname_7684),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_7685," = function (");

var seq__7675_7686 = cljs.core.seq.call(null,params);
var chunk__7676_7687 = null;
var count__7677_7688 = (0);
var i__7678_7689 = (0);
while(true){
if((i__7678_7689 < count__7677_7688)){
var param_7690 = cljs.core._nth.call(null,chunk__7676_7687,i__7678_7689);
cljs.compiler.emit.call(null,param_7690);

if(cljs.core._EQ_.call(null,param_7690,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__7691 = seq__7675_7686;
var G__7692 = chunk__7676_7687;
var G__7693 = count__7677_7688;
var G__7694 = (i__7678_7689 + (1));
seq__7675_7686 = G__7691;
chunk__7676_7687 = G__7692;
count__7677_7688 = G__7693;
i__7678_7689 = G__7694;
continue;
} else {
var temp__4425__auto___7695 = cljs.core.seq.call(null,seq__7675_7686);
if(temp__4425__auto___7695){
var seq__7675_7696__$1 = temp__4425__auto___7695;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7675_7696__$1)){
var c__4946__auto___7697 = cljs.core.chunk_first.call(null,seq__7675_7696__$1);
var G__7698 = cljs.core.chunk_rest.call(null,seq__7675_7696__$1);
var G__7699 = c__4946__auto___7697;
var G__7700 = cljs.core.count.call(null,c__4946__auto___7697);
var G__7701 = (0);
seq__7675_7686 = G__7698;
chunk__7676_7687 = G__7699;
count__7677_7688 = G__7700;
i__7678_7689 = G__7701;
continue;
} else {
var param_7702 = cljs.core.first.call(null,seq__7675_7696__$1);
cljs.compiler.emit.call(null,param_7702);

if(cljs.core._EQ_.call(null,param_7702,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__7703 = cljs.core.next.call(null,seq__7675_7696__$1);
var G__7704 = null;
var G__7705 = (0);
var G__7706 = (0);
seq__7675_7686 = G__7703;
chunk__7676_7687 = G__7704;
count__7677_7688 = G__7705;
i__7678_7689 = G__7706;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"){");

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,"var ",mname_7684," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_7707 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_7707,",0);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_7685,".call(this,");

var seq__7679_7708 = cljs.core.seq.call(null,params);
var chunk__7680_7709 = null;
var count__7681_7710 = (0);
var i__7682_7711 = (0);
while(true){
if((i__7682_7711 < count__7681_7710)){
var param_7712 = cljs.core._nth.call(null,chunk__7680_7709,i__7682_7711);
cljs.compiler.emit.call(null,param_7712);

if(cljs.core._EQ_.call(null,param_7712,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__7713 = seq__7679_7708;
var G__7714 = chunk__7680_7709;
var G__7715 = count__7681_7710;
var G__7716 = (i__7682_7711 + (1));
seq__7679_7708 = G__7713;
chunk__7680_7709 = G__7714;
count__7681_7710 = G__7715;
i__7682_7711 = G__7716;
continue;
} else {
var temp__4425__auto___7717 = cljs.core.seq.call(null,seq__7679_7708);
if(temp__4425__auto___7717){
var seq__7679_7718__$1 = temp__4425__auto___7717;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7679_7718__$1)){
var c__4946__auto___7719 = cljs.core.chunk_first.call(null,seq__7679_7718__$1);
var G__7720 = cljs.core.chunk_rest.call(null,seq__7679_7718__$1);
var G__7721 = c__4946__auto___7719;
var G__7722 = cljs.core.count.call(null,c__4946__auto___7719);
var G__7723 = (0);
seq__7679_7708 = G__7720;
chunk__7680_7709 = G__7721;
count__7681_7710 = G__7722;
i__7682_7711 = G__7723;
continue;
} else {
var param_7724 = cljs.core.first.call(null,seq__7679_7718__$1);
cljs.compiler.emit.call(null,param_7724);

if(cljs.core._EQ_.call(null,param_7724,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__7725 = cljs.core.next.call(null,seq__7679_7718__$1);
var G__7726 = null;
var G__7727 = (0);
var G__7728 = (0);
seq__7679_7708 = G__7725;
chunk__7680_7709 = G__7726;
count__7681_7710 = G__7727;
i__7682_7711 = G__7728;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_7684,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_7684,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_7683__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_7684,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_7685,";");

cljs.compiler.emitln.call(null,"return ",mname_7684,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7146__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__7732){
var map__7733 = p__7732;
var map__7733__$1 = ((((!((map__7733 == null)))?((((map__7733.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7733.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7733):map__7733);
var name = cljs.core.get.call(null,map__7733__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__7733__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__7733__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__7733__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var variadic = cljs.core.get.call(null,map__7733__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var recur_frames = cljs.core.get.call(null,map__7733__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__7733__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__7733,map__7733__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__7729_SHARP_){
var and__4131__auto__ = p1__7729_SHARP_;
if(cljs.core.truth_(and__4131__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__7729_SHARP_));
} else {
return and__4131__auto__;
}
});})(map__7733,map__7733__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,recur_frames)),cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),loop_lets))));
if(loop_locals){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"((function (",cljs.compiler.comma_sep.call(null,cljs.core.map.call(null,cljs.compiler.munge,loop_locals)),"){");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emits.call(null,"return ");
}
} else {
}

if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,methods$))){
if(cljs.core.truth_(variadic)){
cljs.compiler.emit_variadic_fn_method.call(null,cljs.core.assoc.call(null,cljs.core.first.call(null,methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
} else {
cljs.compiler.emit_fn_method.call(null,cljs.core.assoc.call(null,cljs.core.first.call(null,methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
}
} else {
var name_7754__$1 = (function (){var or__4143__auto__ = name;
if(cljs.core.truth_(or__4143__auto__)){
return or__4143__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_7755 = cljs.compiler.munge.call(null,name_7754__$1);
var maxparams_7756 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_7757 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_7754__$1,mname_7755,maxparams_7756,loop_locals,map__7733,map__7733__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str(mname_7755),cljs.core.str("__"),cljs.core.str(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_7754__$1,mname_7755,maxparams_7756,loop_locals,map__7733,map__7733__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,methods$));
var ms_7758 = cljs.core.sort_by.call(null,((function (name_7754__$1,mname_7755,maxparams_7756,mmap_7757,loop_locals,map__7733,map__7733__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__7730_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__7730_SHARP_)));
});})(name_7754__$1,mname_7755,maxparams_7756,mmap_7757,loop_locals,map__7733,map__7733__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_7757));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_7755," = null;");

var seq__7735_7759 = cljs.core.seq.call(null,ms_7758);
var chunk__7736_7760 = null;
var count__7737_7761 = (0);
var i__7738_7762 = (0);
while(true){
if((i__7738_7762 < count__7737_7761)){
var vec__7739_7763 = cljs.core._nth.call(null,chunk__7736_7760,i__7738_7762);
var n_7764 = cljs.core.nth.call(null,vec__7739_7763,(0),null);
var meth_7765 = cljs.core.nth.call(null,vec__7739_7763,(1),null);
cljs.compiler.emits.call(null,"var ",n_7764," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_7765))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_7765);
} else {
cljs.compiler.emit_fn_method.call(null,meth_7765);
}

cljs.compiler.emitln.call(null,";");

var G__7766 = seq__7735_7759;
var G__7767 = chunk__7736_7760;
var G__7768 = count__7737_7761;
var G__7769 = (i__7738_7762 + (1));
seq__7735_7759 = G__7766;
chunk__7736_7760 = G__7767;
count__7737_7761 = G__7768;
i__7738_7762 = G__7769;
continue;
} else {
var temp__4425__auto___7770 = cljs.core.seq.call(null,seq__7735_7759);
if(temp__4425__auto___7770){
var seq__7735_7771__$1 = temp__4425__auto___7770;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7735_7771__$1)){
var c__4946__auto___7772 = cljs.core.chunk_first.call(null,seq__7735_7771__$1);
var G__7773 = cljs.core.chunk_rest.call(null,seq__7735_7771__$1);
var G__7774 = c__4946__auto___7772;
var G__7775 = cljs.core.count.call(null,c__4946__auto___7772);
var G__7776 = (0);
seq__7735_7759 = G__7773;
chunk__7736_7760 = G__7774;
count__7737_7761 = G__7775;
i__7738_7762 = G__7776;
continue;
} else {
var vec__7740_7777 = cljs.core.first.call(null,seq__7735_7771__$1);
var n_7778 = cljs.core.nth.call(null,vec__7740_7777,(0),null);
var meth_7779 = cljs.core.nth.call(null,vec__7740_7777,(1),null);
cljs.compiler.emits.call(null,"var ",n_7778," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_7779))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_7779);
} else {
cljs.compiler.emit_fn_method.call(null,meth_7779);
}

cljs.compiler.emitln.call(null,";");

var G__7780 = cljs.core.next.call(null,seq__7735_7771__$1);
var G__7781 = null;
var G__7782 = (0);
var G__7783 = (0);
seq__7735_7759 = G__7780;
chunk__7736_7760 = G__7781;
count__7737_7761 = G__7782;
i__7738_7762 = G__7783;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_7755," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_7756),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_7756)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_7756));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__7741_7784 = cljs.core.seq.call(null,ms_7758);
var chunk__7742_7785 = null;
var count__7743_7786 = (0);
var i__7744_7787 = (0);
while(true){
if((i__7744_7787 < count__7743_7786)){
var vec__7745_7788 = cljs.core._nth.call(null,chunk__7742_7785,i__7744_7787);
var n_7789 = cljs.core.nth.call(null,vec__7745_7788,(0),null);
var meth_7790 = cljs.core.nth.call(null,vec__7745_7788,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_7790))){
cljs.compiler.emitln.call(null,"default:");

var restarg_7791 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_7791," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_7792 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_7791," = new cljs.core.IndexedSeq(",a_7792,",0);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_7789,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_7756)),(((cljs.core.count.call(null,maxparams_7756) > (1)))?", ":null),restarg_7791,");");
} else {
var pcnt_7793 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_7790));
cljs.compiler.emitln.call(null,"case ",pcnt_7793,":");

cljs.compiler.emitln.call(null,"return ",n_7789,".call(this",(((pcnt_7793 === (0)))?null:cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_7793,maxparams_7756))),",")),");");
}

var G__7794 = seq__7741_7784;
var G__7795 = chunk__7742_7785;
var G__7796 = count__7743_7786;
var G__7797 = (i__7744_7787 + (1));
seq__7741_7784 = G__7794;
chunk__7742_7785 = G__7795;
count__7743_7786 = G__7796;
i__7744_7787 = G__7797;
continue;
} else {
var temp__4425__auto___7798 = cljs.core.seq.call(null,seq__7741_7784);
if(temp__4425__auto___7798){
var seq__7741_7799__$1 = temp__4425__auto___7798;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7741_7799__$1)){
var c__4946__auto___7800 = cljs.core.chunk_first.call(null,seq__7741_7799__$1);
var G__7801 = cljs.core.chunk_rest.call(null,seq__7741_7799__$1);
var G__7802 = c__4946__auto___7800;
var G__7803 = cljs.core.count.call(null,c__4946__auto___7800);
var G__7804 = (0);
seq__7741_7784 = G__7801;
chunk__7742_7785 = G__7802;
count__7743_7786 = G__7803;
i__7744_7787 = G__7804;
continue;
} else {
var vec__7746_7805 = cljs.core.first.call(null,seq__7741_7799__$1);
var n_7806 = cljs.core.nth.call(null,vec__7746_7805,(0),null);
var meth_7807 = cljs.core.nth.call(null,vec__7746_7805,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_7807))){
cljs.compiler.emitln.call(null,"default:");

var restarg_7808 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_7808," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_7809 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_7808," = new cljs.core.IndexedSeq(",a_7809,",0);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_7806,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_7756)),(((cljs.core.count.call(null,maxparams_7756) > (1)))?", ":null),restarg_7808,");");
} else {
var pcnt_7810 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_7807));
cljs.compiler.emitln.call(null,"case ",pcnt_7810,":");

cljs.compiler.emitln.call(null,"return ",n_7806,".call(this",(((pcnt_7810 === (0)))?null:cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_7810,maxparams_7756))),",")),");");
}

var G__7811 = cljs.core.next.call(null,seq__7741_7799__$1);
var G__7812 = null;
var G__7813 = (0);
var G__7814 = (0);
seq__7741_7784 = G__7811;
chunk__7742_7785 = G__7812;
count__7743_7786 = G__7813;
i__7744_7787 = G__7814;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"throw(new Error('Invalid arity: ' + arguments.length));");

cljs.compiler.emitln.call(null,"};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.call(null,mname_7755,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_7755,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_7754__$1,mname_7755,maxparams_7756,mmap_7757,ms_7758,loop_locals,map__7733,map__7733__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__7731_SHARP_){
var vec__7747 = p1__7731_SHARP_;
var n = cljs.core.nth.call(null,vec__7747,(0),null);
var m = cljs.core.nth.call(null,vec__7747,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_7754__$1,mname_7755,maxparams_7756,mmap_7757,ms_7758,loop_locals,map__7733,map__7733__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,ms_7758),".cljs$lang$applyTo;");
} else {
}

var seq__7748_7815 = cljs.core.seq.call(null,ms_7758);
var chunk__7749_7816 = null;
var count__7750_7817 = (0);
var i__7751_7818 = (0);
while(true){
if((i__7751_7818 < count__7750_7817)){
var vec__7752_7819 = cljs.core._nth.call(null,chunk__7749_7816,i__7751_7818);
var n_7820 = cljs.core.nth.call(null,vec__7752_7819,(0),null);
var meth_7821 = cljs.core.nth.call(null,vec__7752_7819,(1),null);
var c_7822 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_7821));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_7821))){
cljs.compiler.emitln.call(null,mname_7755,".cljs$core$IFn$_invoke$arity$variadic = ",n_7820,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_7755,".cljs$core$IFn$_invoke$arity$",c_7822," = ",n_7820,";");
}

var G__7823 = seq__7748_7815;
var G__7824 = chunk__7749_7816;
var G__7825 = count__7750_7817;
var G__7826 = (i__7751_7818 + (1));
seq__7748_7815 = G__7823;
chunk__7749_7816 = G__7824;
count__7750_7817 = G__7825;
i__7751_7818 = G__7826;
continue;
} else {
var temp__4425__auto___7827 = cljs.core.seq.call(null,seq__7748_7815);
if(temp__4425__auto___7827){
var seq__7748_7828__$1 = temp__4425__auto___7827;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7748_7828__$1)){
var c__4946__auto___7829 = cljs.core.chunk_first.call(null,seq__7748_7828__$1);
var G__7830 = cljs.core.chunk_rest.call(null,seq__7748_7828__$1);
var G__7831 = c__4946__auto___7829;
var G__7832 = cljs.core.count.call(null,c__4946__auto___7829);
var G__7833 = (0);
seq__7748_7815 = G__7830;
chunk__7749_7816 = G__7831;
count__7750_7817 = G__7832;
i__7751_7818 = G__7833;
continue;
} else {
var vec__7753_7834 = cljs.core.first.call(null,seq__7748_7828__$1);
var n_7835 = cljs.core.nth.call(null,vec__7753_7834,(0),null);
var meth_7836 = cljs.core.nth.call(null,vec__7753_7834,(1),null);
var c_7837 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_7836));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_7836))){
cljs.compiler.emitln.call(null,mname_7755,".cljs$core$IFn$_invoke$arity$variadic = ",n_7835,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_7755,".cljs$core$IFn$_invoke$arity$",c_7837," = ",n_7835,";");
}

var G__7838 = cljs.core.next.call(null,seq__7748_7828__$1);
var G__7839 = null;
var G__7840 = (0);
var G__7841 = (0);
seq__7748_7815 = G__7838;
chunk__7749_7816 = G__7839;
count__7750_7817 = G__7840;
i__7751_7818 = G__7841;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_7755,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__7842){
var map__7843 = p__7842;
var map__7843__$1 = ((((!((map__7843 == null)))?((((map__7843.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7843.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7843):map__7843);
var statements = cljs.core.get.call(null,map__7843__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__7843__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__7843__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var and__4131__auto__ = statements;
if(cljs.core.truth_(and__4131__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__4131__auto__;
}
})())){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__7845_7849 = cljs.core.seq.call(null,statements);
var chunk__7846_7850 = null;
var count__7847_7851 = (0);
var i__7848_7852 = (0);
while(true){
if((i__7848_7852 < count__7847_7851)){
var s_7853 = cljs.core._nth.call(null,chunk__7846_7850,i__7848_7852);
cljs.compiler.emitln.call(null,s_7853);

var G__7854 = seq__7845_7849;
var G__7855 = chunk__7846_7850;
var G__7856 = count__7847_7851;
var G__7857 = (i__7848_7852 + (1));
seq__7845_7849 = G__7854;
chunk__7846_7850 = G__7855;
count__7847_7851 = G__7856;
i__7848_7852 = G__7857;
continue;
} else {
var temp__4425__auto___7858 = cljs.core.seq.call(null,seq__7845_7849);
if(temp__4425__auto___7858){
var seq__7845_7859__$1 = temp__4425__auto___7858;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7845_7859__$1)){
var c__4946__auto___7860 = cljs.core.chunk_first.call(null,seq__7845_7859__$1);
var G__7861 = cljs.core.chunk_rest.call(null,seq__7845_7859__$1);
var G__7862 = c__4946__auto___7860;
var G__7863 = cljs.core.count.call(null,c__4946__auto___7860);
var G__7864 = (0);
seq__7845_7849 = G__7861;
chunk__7846_7850 = G__7862;
count__7847_7851 = G__7863;
i__7848_7852 = G__7864;
continue;
} else {
var s_7865 = cljs.core.first.call(null,seq__7845_7859__$1);
cljs.compiler.emitln.call(null,s_7865);

var G__7866 = cljs.core.next.call(null,seq__7845_7859__$1);
var G__7867 = null;
var G__7868 = (0);
var G__7869 = (0);
seq__7845_7849 = G__7866;
chunk__7846_7850 = G__7867;
count__7847_7851 = G__7868;
i__7848_7852 = G__7869;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit.call(null,ret);

if(cljs.core.truth_((function (){var and__4131__auto__ = statements;
if(cljs.core.truth_(and__4131__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__4131__auto__;
}
})())){
return cljs.compiler.emitln.call(null,"})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__7870){
var map__7871 = p__7870;
var map__7871__$1 = ((((!((map__7871 == null)))?((((map__7871.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7871.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7871):map__7871);
var env = cljs.core.get.call(null,map__7871__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var try$ = cljs.core.get.call(null,map__7871__$1,new cljs.core.Keyword(null,"try","try",1380742522));
var catch$ = cljs.core.get.call(null,map__7871__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__7871__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__7871__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__4143__auto__ = name;
if(cljs.core.truth_(or__4143__auto__)){
return or__4143__auto__;
} else {
return finally$;
}
})())){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

cljs.compiler.emits.call(null,"try{",try$,"}");

if(cljs.core.truth_(name)){
cljs.compiler.emits.call(null,"catch (",cljs.compiler.munge.call(null,name),"){",catch$,"}");
} else {
}

if(cljs.core.truth_(finally$)){
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(finally$))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("finally block cannot contain constant"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Keyword(null,"constant","constant",-379609303),cljs.core.list(new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"finally","finally",-1065347064,null)))))].join('')));
}

cljs.compiler.emits.call(null,"finally {",finally$,"}");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
} else {
return cljs.compiler.emits.call(null,try$);
}
}));
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__7873,is_loop){
var map__7885 = p__7873;
var map__7885__$1 = ((((!((map__7885 == null)))?((((map__7885.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7885.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7885):map__7885);
var bindings = cljs.core.get.call(null,map__7885__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__7885__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__7885__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR_7887_7896 = cljs.compiler._STAR_lexical_renames_STAR_;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR_7887_7896,context,map__7885,map__7885__$1,bindings,expr,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str(name),cljs.core.str("-")].join(''))],null));
});})(_STAR_lexical_renames_STAR_7887_7896,context,map__7885,map__7885__$1,bindings,expr,env))
,bindings):null));

try{var seq__7888_7897 = cljs.core.seq.call(null,bindings);
var chunk__7889_7898 = null;
var count__7890_7899 = (0);
var i__7891_7900 = (0);
while(true){
if((i__7891_7900 < count__7890_7899)){
var map__7892_7901 = cljs.core._nth.call(null,chunk__7889_7898,i__7891_7900);
var map__7892_7902__$1 = ((((!((map__7892_7901 == null)))?((((map__7892_7901.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7892_7901.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7892_7901):map__7892_7901);
var binding_7903 = map__7892_7902__$1;
var init_7904 = cljs.core.get.call(null,map__7892_7902__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_7903);

cljs.compiler.emitln.call(null," = ",init_7904,";");

var G__7905 = seq__7888_7897;
var G__7906 = chunk__7889_7898;
var G__7907 = count__7890_7899;
var G__7908 = (i__7891_7900 + (1));
seq__7888_7897 = G__7905;
chunk__7889_7898 = G__7906;
count__7890_7899 = G__7907;
i__7891_7900 = G__7908;
continue;
} else {
var temp__4425__auto___7909 = cljs.core.seq.call(null,seq__7888_7897);
if(temp__4425__auto___7909){
var seq__7888_7910__$1 = temp__4425__auto___7909;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7888_7910__$1)){
var c__4946__auto___7911 = cljs.core.chunk_first.call(null,seq__7888_7910__$1);
var G__7912 = cljs.core.chunk_rest.call(null,seq__7888_7910__$1);
var G__7913 = c__4946__auto___7911;
var G__7914 = cljs.core.count.call(null,c__4946__auto___7911);
var G__7915 = (0);
seq__7888_7897 = G__7912;
chunk__7889_7898 = G__7913;
count__7890_7899 = G__7914;
i__7891_7900 = G__7915;
continue;
} else {
var map__7894_7916 = cljs.core.first.call(null,seq__7888_7910__$1);
var map__7894_7917__$1 = ((((!((map__7894_7916 == null)))?((((map__7894_7916.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7894_7916.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7894_7916):map__7894_7916);
var binding_7918 = map__7894_7917__$1;
var init_7919 = cljs.core.get.call(null,map__7894_7917__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_7918);

cljs.compiler.emitln.call(null," = ",init_7919,";");

var G__7920 = cljs.core.next.call(null,seq__7888_7910__$1);
var G__7921 = null;
var G__7922 = (0);
var G__7923 = (0);
seq__7888_7897 = G__7920;
chunk__7889_7898 = G__7921;
count__7890_7899 = G__7922;
i__7891_7900 = G__7923;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR_7887_7896;
}
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"let","let",-1282412701),(function (ast){
return cljs.compiler.emit_let.call(null,ast,false);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"loop","loop",-395552849),(function (ast){
return cljs.compiler.emit_let.call(null,ast,true);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__7924){
var map__7925 = p__7924;
var map__7925__$1 = ((((!((map__7925 == null)))?((((map__7925.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7925.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7925):map__7925);
var frame = cljs.core.get.call(null,map__7925__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__7925__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__7925__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__5046__auto___7927 = cljs.core.count.call(null,exprs);
var i_7928 = (0);
while(true){
if((i_7928 < n__5046__auto___7927)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_7928)," = ",exprs.call(null,i_7928),";");

var G__7929 = (i_7928 + (1));
i_7928 = G__7929;
continue;
} else {
}
break;
}

var n__5046__auto___7930 = cljs.core.count.call(null,exprs);
var i_7931 = (0);
while(true){
if((i_7931 < n__5046__auto___7930)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_7931))," = ",temps.call(null,i_7931),";");

var G__7932 = (i_7931 + (1));
i_7931 = G__7932;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__7933){
var map__7934 = p__7933;
var map__7934__$1 = ((((!((map__7934 == null)))?((((map__7934.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7934.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7934):map__7934);
var bindings = cljs.core.get.call(null,map__7934__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__7934__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__7934__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__7936_7944 = cljs.core.seq.call(null,bindings);
var chunk__7937_7945 = null;
var count__7938_7946 = (0);
var i__7939_7947 = (0);
while(true){
if((i__7939_7947 < count__7938_7946)){
var map__7940_7948 = cljs.core._nth.call(null,chunk__7937_7945,i__7939_7947);
var map__7940_7949__$1 = ((((!((map__7940_7948 == null)))?((((map__7940_7948.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7940_7948.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7940_7948):map__7940_7948);
var binding_7950 = map__7940_7949__$1;
var init_7951 = cljs.core.get.call(null,map__7940_7949__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_7950)," = ",init_7951,";");

var G__7952 = seq__7936_7944;
var G__7953 = chunk__7937_7945;
var G__7954 = count__7938_7946;
var G__7955 = (i__7939_7947 + (1));
seq__7936_7944 = G__7952;
chunk__7937_7945 = G__7953;
count__7938_7946 = G__7954;
i__7939_7947 = G__7955;
continue;
} else {
var temp__4425__auto___7956 = cljs.core.seq.call(null,seq__7936_7944);
if(temp__4425__auto___7956){
var seq__7936_7957__$1 = temp__4425__auto___7956;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7936_7957__$1)){
var c__4946__auto___7958 = cljs.core.chunk_first.call(null,seq__7936_7957__$1);
var G__7959 = cljs.core.chunk_rest.call(null,seq__7936_7957__$1);
var G__7960 = c__4946__auto___7958;
var G__7961 = cljs.core.count.call(null,c__4946__auto___7958);
var G__7962 = (0);
seq__7936_7944 = G__7959;
chunk__7937_7945 = G__7960;
count__7938_7946 = G__7961;
i__7939_7947 = G__7962;
continue;
} else {
var map__7942_7963 = cljs.core.first.call(null,seq__7936_7957__$1);
var map__7942_7964__$1 = ((((!((map__7942_7963 == null)))?((((map__7942_7963.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7942_7963.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7942_7963):map__7942_7963);
var binding_7965 = map__7942_7964__$1;
var init_7966 = cljs.core.get.call(null,map__7942_7964__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_7965)," = ",init_7966,";");

var G__7967 = cljs.core.next.call(null,seq__7936_7957__$1);
var G__7968 = null;
var G__7969 = (0);
var G__7970 = (0);
seq__7936_7944 = G__7967;
chunk__7937_7945 = G__7968;
count__7938_7946 = G__7969;
i__7939_7947 = G__7970;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,expr);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
}));
cljs.compiler.protocol_prefix = (function cljs$compiler$protocol_prefix(psym){
return cljs.core.symbol.call(null,[cljs.core.str([cljs.core.str(psym)].join('').replace((new RegExp("\\.","g")),"$").replace("/","$")),cljs.core.str("$")].join(''));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__7973){
var map__7974 = p__7973;
var map__7974__$1 = ((((!((map__7974 == null)))?((((map__7974.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7974.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7974):map__7974);
var expr = map__7974__$1;
var f = cljs.core.get.call(null,map__7974__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var args = cljs.core.get.call(null,map__7974__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__7974__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__4131__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__4131__auto__)){
var and__4131__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info));
if(and__4131__auto____$1){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__4131__auto____$1;
}
} else {
return and__4131__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__4131__auto__ = protocol;
if(cljs.core.truth_(and__4131__auto__)){
var and__4131__auto____$1 = tag;
if(cljs.core.truth_(and__4131__auto____$1)){
var or__4143__auto__ = (function (){var and__4131__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__4131__auto____$2)){
var and__4131__auto____$3 = protocol;
if(cljs.core.truth_(and__4131__auto____$3)){
return cljs.core._EQ_.call(null,tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
} else {
return and__4131__auto____$3;
}
} else {
return and__4131__auto____$2;
}
})();
if(cljs.core.truth_(or__4143__auto__)){
return or__4143__auto__;
} else {
var and__4131__auto____$2 = (function (){var or__4143__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(or__4143__auto____$1)){
return or__4143__auto____$1;
} else {
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__4131__auto____$2)){
var or__4143__auto____$1 = cljs.core._EQ_.call(null,protocol,tag);
if(or__4143__auto____$1){
return or__4143__auto____$1;
} else {
var and__4131__auto____$3 = !(cljs.core.set_QMARK_.call(null,tag));
if(and__4131__auto____$3){
var and__4131__auto____$4 = cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"clj","clj",980036099,null),null,new cljs.core.Symbol(null,"any","any",-948528346,null),null,new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),null], null), null).call(null,tag));
if(and__4131__auto____$4){
var temp__4425__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),tag));
if(cljs.core.truth_(temp__4425__auto__)){
var ps = temp__4425__auto__;
return ps.call(null,protocol);
} else {
return null;
}
} else {
return and__4131__auto____$4;
}
} else {
return and__4131__auto____$3;
}
}
} else {
return and__4131__auto____$2;
}
}
} else {
return and__4131__auto____$1;
}
} else {
return and__4131__auto__;
}
})();
var opt_not_QMARK_ = (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.call(null,cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr))),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var js_QMARK_ = (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"js","js",-886355190,null))) || (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null)));
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__4143__auto__ = cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__4143__auto__){
return or__4143__auto__;
} else {
var temp__4425__auto__ = [cljs.core.str(ns)].join('');
if(cljs.core.truth_(temp__4425__auto__)){
var ns_str = temp__4425__auto__;
return cljs.core._EQ_.call(null,cljs.core.get.call(null,clojure.string.split.call(null,ns_str,/\./),(0),null),"goog");
} else {
return null;
}
}
})():null);
var keyword_QMARK_ = (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f),new cljs.core.Keyword(null,"constant","constant",-379609303))) && ((new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(f) instanceof cljs.core.Keyword));
var vec__7976 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if((cljs.core.not.call(null,variadic_QMARK_)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,mps),(1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__4131__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__4131__auto__)){
return (arity > mfa);
} else {
return and__4131__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__7974,map__7974__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str(cljs.compiler.munge.call(null,info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$variadic")].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__7974,map__7974__$1,expr,f,args,env){
return (function (p1__7971_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__7971_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__7974,map__7974__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__7974,map__7974__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([arity], true),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__7974,map__7974__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str(cljs.compiler.munge.call(null,info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__7974,map__7974__$1,expr,f,args,env){
return (function (p1__7972_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__7972_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__7974,map__7974__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__7974,map__7974__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__7976,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__7976,(1),null);
var env__7146__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7146__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"!(",cljs.core.first.call(null,args),")");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_7977 = [cljs.core.str(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_7977,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_7978 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_7978,args)),(((mfa_7978 === (0)))?null:","),"cljs.core.array_seq([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_7978,args)),"], 0))");
} else {
if(cljs.core.truth_((function (){var or__4143__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__4143__auto__)){
return or__4143__auto__;
} else {
var or__4143__auto____$1 = js_QMARK_;
if(or__4143__auto____$1){
return or__4143__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_((function (){var and__4131__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__4131__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"var","var",-769682797));
} else {
return and__4131__auto__;
}
})())){
var fprop_7979 = [cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,"(",f__$1,fprop_7979," ? ",f__$1,fprop_7979,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7146__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__7980){
var map__7981 = p__7980;
var map__7981__$1 = ((((!((map__7981 == null)))?((((map__7981.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7981.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7981):map__7981);
var ctor = cljs.core.get.call(null,map__7981__$1,new cljs.core.Keyword(null,"ctor","ctor",1750864802));
var args = cljs.core.get.call(null,map__7981__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__7981__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__7146__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7146__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7146__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__7983){
var map__7984 = p__7983;
var map__7984__$1 = ((((!((map__7984 == null)))?((((map__7984.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7984.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7984):map__7984);
var target = cljs.core.get.call(null,map__7984__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__7984__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__7984__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__7146__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7146__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7146__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads){
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set();");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set();");
} else {
}

var seq__7990_7994 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.distinct.call(null,cljs.core.vals.call(null,libs))));
var chunk__7991_7995 = null;
var count__7992_7996 = (0);
var i__7993_7997 = (0);
while(true){
if((i__7993_7997 < count__7992_7996)){
var lib_7998 = cljs.core._nth.call(null,chunk__7991_7995,i__7993_7997);
if(cljs.core.truth_((function (){var or__4143__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4143__auto__)){
return or__4143__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_7998),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_7998),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4143__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4143__auto__)){
return or__4143__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_7998),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_7998),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_7998),"');");

}
}

var G__7999 = seq__7990_7994;
var G__8000 = chunk__7991_7995;
var G__8001 = count__7992_7996;
var G__8002 = (i__7993_7997 + (1));
seq__7990_7994 = G__7999;
chunk__7991_7995 = G__8000;
count__7992_7996 = G__8001;
i__7993_7997 = G__8002;
continue;
} else {
var temp__4425__auto___8003 = cljs.core.seq.call(null,seq__7990_7994);
if(temp__4425__auto___8003){
var seq__7990_8004__$1 = temp__4425__auto___8003;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7990_8004__$1)){
var c__4946__auto___8005 = cljs.core.chunk_first.call(null,seq__7990_8004__$1);
var G__8006 = cljs.core.chunk_rest.call(null,seq__7990_8004__$1);
var G__8007 = c__4946__auto___8005;
var G__8008 = cljs.core.count.call(null,c__4946__auto___8005);
var G__8009 = (0);
seq__7990_7994 = G__8006;
chunk__7991_7995 = G__8007;
count__7992_7996 = G__8008;
i__7993_7997 = G__8009;
continue;
} else {
var lib_8010 = cljs.core.first.call(null,seq__7990_8004__$1);
if(cljs.core.truth_((function (){var or__4143__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4143__auto__)){
return or__4143__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_8010),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_8010),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4143__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4143__auto__)){
return or__4143__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_8010),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_8010),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_8010),"');");

}
}

var G__8011 = cljs.core.next.call(null,seq__7990_8004__$1);
var G__8012 = null;
var G__8013 = (0);
var G__8014 = (0);
seq__7990_7994 = G__8011;
chunk__7991_7995 = G__8012;
count__7992_7996 = G__8013;
i__7993_7997 = G__8014;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
return cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.into(",loaded_libs_temp,", ",loaded_libs,");");
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__8015){
var map__8016 = p__8015;
var map__8016__$1 = ((((!((map__8016 == null)))?((((map__8016.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8016.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8016):map__8016);
var name = cljs.core.get.call(null,map__8016__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__8016__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__8016__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__8016__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__8016__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__8016__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,name),"');");

if(cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('cljs.core');");
}

cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads));

return cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype*","deftype*",-677871637),(function (p__8018){
var map__8019 = p__8018;
var map__8019__$1 = ((((!((map__8019 == null)))?((((map__8019.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8019.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8019):map__8019);
var t = cljs.core.get.call(null,map__8019__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__8019__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__8019__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__8019__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__8019__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__8021_8035 = cljs.core.seq.call(null,protocols);
var chunk__8022_8036 = null;
var count__8023_8037 = (0);
var i__8024_8038 = (0);
while(true){
if((i__8024_8038 < count__8023_8037)){
var protocol_8039 = cljs.core._nth.call(null,chunk__8022_8036,i__8024_8038);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_8039)].join('')),"}");

var G__8040 = seq__8021_8035;
var G__8041 = chunk__8022_8036;
var G__8042 = count__8023_8037;
var G__8043 = (i__8024_8038 + (1));
seq__8021_8035 = G__8040;
chunk__8022_8036 = G__8041;
count__8023_8037 = G__8042;
i__8024_8038 = G__8043;
continue;
} else {
var temp__4425__auto___8044 = cljs.core.seq.call(null,seq__8021_8035);
if(temp__4425__auto___8044){
var seq__8021_8045__$1 = temp__4425__auto___8044;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8021_8045__$1)){
var c__4946__auto___8046 = cljs.core.chunk_first.call(null,seq__8021_8045__$1);
var G__8047 = cljs.core.chunk_rest.call(null,seq__8021_8045__$1);
var G__8048 = c__4946__auto___8046;
var G__8049 = cljs.core.count.call(null,c__4946__auto___8046);
var G__8050 = (0);
seq__8021_8035 = G__8047;
chunk__8022_8036 = G__8048;
count__8023_8037 = G__8049;
i__8024_8038 = G__8050;
continue;
} else {
var protocol_8051 = cljs.core.first.call(null,seq__8021_8045__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_8051)].join('')),"}");

var G__8052 = cljs.core.next.call(null,seq__8021_8045__$1);
var G__8053 = null;
var G__8054 = (0);
var G__8055 = (0);
seq__8021_8035 = G__8052;
chunk__8022_8036 = G__8053;
count__8023_8037 = G__8054;
i__8024_8038 = G__8055;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__8025_8056 = cljs.core.seq.call(null,fields__$1);
var chunk__8026_8057 = null;
var count__8027_8058 = (0);
var i__8028_8059 = (0);
while(true){
if((i__8028_8059 < count__8027_8058)){
var fld_8060 = cljs.core._nth.call(null,chunk__8026_8057,i__8028_8059);
cljs.compiler.emitln.call(null,"this.",fld_8060," = ",fld_8060,";");

var G__8061 = seq__8025_8056;
var G__8062 = chunk__8026_8057;
var G__8063 = count__8027_8058;
var G__8064 = (i__8028_8059 + (1));
seq__8025_8056 = G__8061;
chunk__8026_8057 = G__8062;
count__8027_8058 = G__8063;
i__8028_8059 = G__8064;
continue;
} else {
var temp__4425__auto___8065 = cljs.core.seq.call(null,seq__8025_8056);
if(temp__4425__auto___8065){
var seq__8025_8066__$1 = temp__4425__auto___8065;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8025_8066__$1)){
var c__4946__auto___8067 = cljs.core.chunk_first.call(null,seq__8025_8066__$1);
var G__8068 = cljs.core.chunk_rest.call(null,seq__8025_8066__$1);
var G__8069 = c__4946__auto___8067;
var G__8070 = cljs.core.count.call(null,c__4946__auto___8067);
var G__8071 = (0);
seq__8025_8056 = G__8068;
chunk__8026_8057 = G__8069;
count__8027_8058 = G__8070;
i__8028_8059 = G__8071;
continue;
} else {
var fld_8072 = cljs.core.first.call(null,seq__8025_8066__$1);
cljs.compiler.emitln.call(null,"this.",fld_8072," = ",fld_8072,";");

var G__8073 = cljs.core.next.call(null,seq__8025_8066__$1);
var G__8074 = null;
var G__8075 = (0);
var G__8076 = (0);
seq__8025_8056 = G__8073;
chunk__8026_8057 = G__8074;
count__8027_8058 = G__8075;
i__8028_8059 = G__8076;
continue;
}
} else {
}
}
break;
}

var seq__8029_8077 = cljs.core.seq.call(null,pmasks);
var chunk__8030_8078 = null;
var count__8031_8079 = (0);
var i__8032_8080 = (0);
while(true){
if((i__8032_8080 < count__8031_8079)){
var vec__8033_8081 = cljs.core._nth.call(null,chunk__8030_8078,i__8032_8080);
var pno_8082 = cljs.core.nth.call(null,vec__8033_8081,(0),null);
var pmask_8083 = cljs.core.nth.call(null,vec__8033_8081,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_8082,"$ = ",pmask_8083,";");

var G__8084 = seq__8029_8077;
var G__8085 = chunk__8030_8078;
var G__8086 = count__8031_8079;
var G__8087 = (i__8032_8080 + (1));
seq__8029_8077 = G__8084;
chunk__8030_8078 = G__8085;
count__8031_8079 = G__8086;
i__8032_8080 = G__8087;
continue;
} else {
var temp__4425__auto___8088 = cljs.core.seq.call(null,seq__8029_8077);
if(temp__4425__auto___8088){
var seq__8029_8089__$1 = temp__4425__auto___8088;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8029_8089__$1)){
var c__4946__auto___8090 = cljs.core.chunk_first.call(null,seq__8029_8089__$1);
var G__8091 = cljs.core.chunk_rest.call(null,seq__8029_8089__$1);
var G__8092 = c__4946__auto___8090;
var G__8093 = cljs.core.count.call(null,c__4946__auto___8090);
var G__8094 = (0);
seq__8029_8077 = G__8091;
chunk__8030_8078 = G__8092;
count__8031_8079 = G__8093;
i__8032_8080 = G__8094;
continue;
} else {
var vec__8034_8095 = cljs.core.first.call(null,seq__8029_8089__$1);
var pno_8096 = cljs.core.nth.call(null,vec__8034_8095,(0),null);
var pmask_8097 = cljs.core.nth.call(null,vec__8034_8095,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_8096,"$ = ",pmask_8097,";");

var G__8098 = cljs.core.next.call(null,seq__8029_8089__$1);
var G__8099 = null;
var G__8100 = (0);
var G__8101 = (0);
seq__8029_8077 = G__8098;
chunk__8030_8078 = G__8099;
count__8031_8079 = G__8100;
i__8032_8080 = G__8101;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"})");

return cljs.compiler.emit.call(null,body);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord*","defrecord*",718069562),(function (p__8102){
var map__8103 = p__8102;
var map__8103__$1 = ((((!((map__8103 == null)))?((((map__8103.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8103.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8103):map__8103);
var t = cljs.core.get.call(null,map__8103__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__8103__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__8103__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__8103__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__8103__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__8105_8119 = cljs.core.seq.call(null,protocols);
var chunk__8106_8120 = null;
var count__8107_8121 = (0);
var i__8108_8122 = (0);
while(true){
if((i__8108_8122 < count__8107_8121)){
var protocol_8123 = cljs.core._nth.call(null,chunk__8106_8120,i__8108_8122);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_8123)].join('')),"}");

var G__8124 = seq__8105_8119;
var G__8125 = chunk__8106_8120;
var G__8126 = count__8107_8121;
var G__8127 = (i__8108_8122 + (1));
seq__8105_8119 = G__8124;
chunk__8106_8120 = G__8125;
count__8107_8121 = G__8126;
i__8108_8122 = G__8127;
continue;
} else {
var temp__4425__auto___8128 = cljs.core.seq.call(null,seq__8105_8119);
if(temp__4425__auto___8128){
var seq__8105_8129__$1 = temp__4425__auto___8128;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8105_8129__$1)){
var c__4946__auto___8130 = cljs.core.chunk_first.call(null,seq__8105_8129__$1);
var G__8131 = cljs.core.chunk_rest.call(null,seq__8105_8129__$1);
var G__8132 = c__4946__auto___8130;
var G__8133 = cljs.core.count.call(null,c__4946__auto___8130);
var G__8134 = (0);
seq__8105_8119 = G__8131;
chunk__8106_8120 = G__8132;
count__8107_8121 = G__8133;
i__8108_8122 = G__8134;
continue;
} else {
var protocol_8135 = cljs.core.first.call(null,seq__8105_8129__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_8135)].join('')),"}");

var G__8136 = cljs.core.next.call(null,seq__8105_8129__$1);
var G__8137 = null;
var G__8138 = (0);
var G__8139 = (0);
seq__8105_8119 = G__8136;
chunk__8106_8120 = G__8137;
count__8107_8121 = G__8138;
i__8108_8122 = G__8139;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__8109_8140 = cljs.core.seq.call(null,fields__$1);
var chunk__8110_8141 = null;
var count__8111_8142 = (0);
var i__8112_8143 = (0);
while(true){
if((i__8112_8143 < count__8111_8142)){
var fld_8144 = cljs.core._nth.call(null,chunk__8110_8141,i__8112_8143);
cljs.compiler.emitln.call(null,"this.",fld_8144," = ",fld_8144,";");

var G__8145 = seq__8109_8140;
var G__8146 = chunk__8110_8141;
var G__8147 = count__8111_8142;
var G__8148 = (i__8112_8143 + (1));
seq__8109_8140 = G__8145;
chunk__8110_8141 = G__8146;
count__8111_8142 = G__8147;
i__8112_8143 = G__8148;
continue;
} else {
var temp__4425__auto___8149 = cljs.core.seq.call(null,seq__8109_8140);
if(temp__4425__auto___8149){
var seq__8109_8150__$1 = temp__4425__auto___8149;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8109_8150__$1)){
var c__4946__auto___8151 = cljs.core.chunk_first.call(null,seq__8109_8150__$1);
var G__8152 = cljs.core.chunk_rest.call(null,seq__8109_8150__$1);
var G__8153 = c__4946__auto___8151;
var G__8154 = cljs.core.count.call(null,c__4946__auto___8151);
var G__8155 = (0);
seq__8109_8140 = G__8152;
chunk__8110_8141 = G__8153;
count__8111_8142 = G__8154;
i__8112_8143 = G__8155;
continue;
} else {
var fld_8156 = cljs.core.first.call(null,seq__8109_8150__$1);
cljs.compiler.emitln.call(null,"this.",fld_8156," = ",fld_8156,";");

var G__8157 = cljs.core.next.call(null,seq__8109_8150__$1);
var G__8158 = null;
var G__8159 = (0);
var G__8160 = (0);
seq__8109_8140 = G__8157;
chunk__8110_8141 = G__8158;
count__8111_8142 = G__8159;
i__8112_8143 = G__8160;
continue;
}
} else {
}
}
break;
}

var seq__8113_8161 = cljs.core.seq.call(null,pmasks);
var chunk__8114_8162 = null;
var count__8115_8163 = (0);
var i__8116_8164 = (0);
while(true){
if((i__8116_8164 < count__8115_8163)){
var vec__8117_8165 = cljs.core._nth.call(null,chunk__8114_8162,i__8116_8164);
var pno_8166 = cljs.core.nth.call(null,vec__8117_8165,(0),null);
var pmask_8167 = cljs.core.nth.call(null,vec__8117_8165,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_8166,"$ = ",pmask_8167,";");

var G__8168 = seq__8113_8161;
var G__8169 = chunk__8114_8162;
var G__8170 = count__8115_8163;
var G__8171 = (i__8116_8164 + (1));
seq__8113_8161 = G__8168;
chunk__8114_8162 = G__8169;
count__8115_8163 = G__8170;
i__8116_8164 = G__8171;
continue;
} else {
var temp__4425__auto___8172 = cljs.core.seq.call(null,seq__8113_8161);
if(temp__4425__auto___8172){
var seq__8113_8173__$1 = temp__4425__auto___8172;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8113_8173__$1)){
var c__4946__auto___8174 = cljs.core.chunk_first.call(null,seq__8113_8173__$1);
var G__8175 = cljs.core.chunk_rest.call(null,seq__8113_8173__$1);
var G__8176 = c__4946__auto___8174;
var G__8177 = cljs.core.count.call(null,c__4946__auto___8174);
var G__8178 = (0);
seq__8113_8161 = G__8175;
chunk__8114_8162 = G__8176;
count__8115_8163 = G__8177;
i__8116_8164 = G__8178;
continue;
} else {
var vec__8118_8179 = cljs.core.first.call(null,seq__8113_8173__$1);
var pno_8180 = cljs.core.nth.call(null,vec__8118_8179,(0),null);
var pmask_8181 = cljs.core.nth.call(null,vec__8118_8179,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_8180,"$ = ",pmask_8181,";");

var G__8182 = cljs.core.next.call(null,seq__8113_8173__$1);
var G__8183 = null;
var G__8184 = (0);
var G__8185 = (0);
seq__8113_8161 = G__8182;
chunk__8114_8162 = G__8183;
count__8115_8163 = G__8184;
i__8116_8164 = G__8185;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"})");

return cljs.compiler.emit.call(null,body);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"dot","dot",1442709401),(function (p__8186){
var map__8187 = p__8186;
var map__8187__$1 = ((((!((map__8187 == null)))?((((map__8187.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8187.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8187):map__8187);
var target = cljs.core.get.call(null,map__8187__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__8187__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__8187__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__8187__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__8187__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__7146__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7146__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7146__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__8189){
var map__8190 = p__8189;
var map__8190__$1 = ((((!((map__8190 == null)))?((((map__8190.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8190.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8190):map__8190);
var op = cljs.core.get.call(null,map__8190__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__8190__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__8190__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__8190__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__8190__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__4131__auto__ = code;
if(cljs.core.truth_(and__4131__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__4131__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__7146__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7146__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7146__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.build_affecting_options = (function cljs$compiler$build_affecting_options(opts){
return cljs.core.select_keys.call(null,opts,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),new cljs.core.Keyword(null,"optimize-constants","optimize-constants",232704518),new cljs.core.Keyword(null,"elide-asserts","elide-asserts",537063272),new cljs.core.Keyword(null,"target","target",253001721)], null));
});
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
var seq__8200 = cljs.core.seq.call(null,table);
var chunk__8201 = null;
var count__8202 = (0);
var i__8203 = (0);
while(true){
if((i__8203 < count__8202)){
var vec__8204 = cljs.core._nth.call(null,chunk__8201,i__8203);
var sym = cljs.core.nth.call(null,vec__8204,(0),null);
var value = cljs.core.nth.call(null,vec__8204,(1),null);
var ns_8206 = cljs.core.namespace.call(null,sym);
var name_8207 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot emit constant for type "),cljs.core.str(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471)], null));

}
}

cljs.compiler.emits.call(null,";\n");

var G__8208 = seq__8200;
var G__8209 = chunk__8201;
var G__8210 = count__8202;
var G__8211 = (i__8203 + (1));
seq__8200 = G__8208;
chunk__8201 = G__8209;
count__8202 = G__8210;
i__8203 = G__8211;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8200);
if(temp__4425__auto__){
var seq__8200__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8200__$1)){
var c__4946__auto__ = cljs.core.chunk_first.call(null,seq__8200__$1);
var G__8212 = cljs.core.chunk_rest.call(null,seq__8200__$1);
var G__8213 = c__4946__auto__;
var G__8214 = cljs.core.count.call(null,c__4946__auto__);
var G__8215 = (0);
seq__8200 = G__8212;
chunk__8201 = G__8213;
count__8202 = G__8214;
i__8203 = G__8215;
continue;
} else {
var vec__8205 = cljs.core.first.call(null,seq__8200__$1);
var sym = cljs.core.nth.call(null,vec__8205,(0),null);
var value = cljs.core.nth.call(null,vec__8205,(1),null);
var ns_8216 = cljs.core.namespace.call(null,sym);
var name_8217 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot emit constant for type "),cljs.core.str(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471)], null));

}
}

cljs.compiler.emits.call(null,";\n");

var G__8218 = cljs.core.next.call(null,seq__8200__$1);
var G__8219 = null;
var G__8220 = (0);
var G__8221 = (0);
seq__8200 = G__8218;
chunk__8201 = G__8219;
count__8202 = G__8220;
i__8203 = G__8221;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=compiler.js.map