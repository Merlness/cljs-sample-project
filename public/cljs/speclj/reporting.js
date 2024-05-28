// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('speclj.reporting');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('speclj.config');
goog.require('speclj.platform');
goog.require('speclj.results');
speclj.reporting.tally_time = (function speclj$reporting$tally_time(results){
return cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,(function (p1__6212_SHARP_){
return p1__6212_SHARP_.seconds;
}),results));
});

/**
 * @interface
 */
speclj.reporting.Reporter = function(){};

var speclj$reporting$Reporter$report_message$dyn_6213 = (function (reporter,message){
var x__5350__auto__ = (((reporter == null))?null:reporter);
var m__5351__auto__ = (speclj.reporting.report_message[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,reporter,message);
} else {
var m__5349__auto__ = (speclj.reporting.report_message["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,reporter,message);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-message",reporter);
}
}
});
speclj.reporting.report_message = (function speclj$reporting$report_message(reporter,message){
if((((!((reporter == null)))) && ((!((reporter.speclj$reporting$Reporter$report_message$arity$2 == null)))))){
return reporter.speclj$reporting$Reporter$report_message$arity$2(reporter,message);
} else {
return speclj$reporting$Reporter$report_message$dyn_6213.call(null,reporter,message);
}
});

var speclj$reporting$Reporter$report_description$dyn_6214 = (function (this$,description){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (speclj.reporting.report_description[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,this$,description);
} else {
var m__5349__auto__ = (speclj.reporting.report_description["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,this$,description);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-description",this$);
}
}
});
speclj.reporting.report_description = (function speclj$reporting$report_description(this$,description){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_description$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_description$arity$2(this$,description);
} else {
return speclj$reporting$Reporter$report_description$dyn_6214.call(null,this$,description);
}
});

var speclj$reporting$Reporter$report_pass$dyn_6215 = (function (this$,result){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (speclj.reporting.report_pass[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,this$,result);
} else {
var m__5349__auto__ = (speclj.reporting.report_pass["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,this$,result);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-pass",this$);
}
}
});
speclj.reporting.report_pass = (function speclj$reporting$report_pass(this$,result){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_pass$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_pass$arity$2(this$,result);
} else {
return speclj$reporting$Reporter$report_pass$dyn_6215.call(null,this$,result);
}
});

var speclj$reporting$Reporter$report_pending$dyn_6216 = (function (this$,result){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (speclj.reporting.report_pending[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,this$,result);
} else {
var m__5349__auto__ = (speclj.reporting.report_pending["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,this$,result);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-pending",this$);
}
}
});
speclj.reporting.report_pending = (function speclj$reporting$report_pending(this$,result){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_pending$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_pending$arity$2(this$,result);
} else {
return speclj$reporting$Reporter$report_pending$dyn_6216.call(null,this$,result);
}
});

var speclj$reporting$Reporter$report_fail$dyn_6217 = (function (this$,result){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (speclj.reporting.report_fail[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,this$,result);
} else {
var m__5349__auto__ = (speclj.reporting.report_fail["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,this$,result);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-fail",this$);
}
}
});
speclj.reporting.report_fail = (function speclj$reporting$report_fail(this$,result){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_fail$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_fail$arity$2(this$,result);
} else {
return speclj$reporting$Reporter$report_fail$dyn_6217.call(null,this$,result);
}
});

var speclj$reporting$Reporter$report_runs$dyn_6218 = (function (this$,results){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (speclj.reporting.report_runs[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,this$,results);
} else {
var m__5349__auto__ = (speclj.reporting.report_runs["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,this$,results);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-runs",this$);
}
}
});
speclj.reporting.report_runs = (function speclj$reporting$report_runs(this$,results){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_runs$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_runs$arity$2(this$,results);
} else {
return speclj$reporting$Reporter$report_runs$dyn_6218.call(null,this$,results);
}
});

var speclj$reporting$Reporter$report_error$dyn_6219 = (function (this$,exception){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (speclj.reporting.report_error[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,this$,exception);
} else {
var m__5349__auto__ = (speclj.reporting.report_error["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,this$,exception);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-error",this$);
}
}
});
speclj.reporting.report_error = (function speclj$reporting$report_error(this$,exception){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_error$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_error$arity$2(this$,exception);
} else {
return speclj$reporting$Reporter$report_error$dyn_6219.call(null,this$,exception);
}
});

if((typeof speclj !== 'undefined') && (typeof speclj.reporting !== 'undefined') && (typeof speclj.reporting.report_run !== 'undefined')){
} else {
speclj.reporting.report_run = (function (){var method_table__5599__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"speclj.reporting","report-run"),(function (result,reporters){
return cljs.core.type.call(null,result);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
cljs.core._add_method.call(null,speclj.reporting.report_run,speclj.results.PassResult,(function (result,reporters){
var seq__6220 = cljs.core.seq.call(null,reporters);
var chunk__6221 = null;
var count__6222 = (0);
var i__6223 = (0);
while(true){
if((i__6223 < count__6222)){
var reporter = cljs.core._nth.call(null,chunk__6221,i__6223);
speclj.reporting.report_pass.call(null,reporter,result);


var G__6224 = seq__6220;
var G__6225 = chunk__6221;
var G__6226 = count__6222;
var G__6227 = (i__6223 + (1));
seq__6220 = G__6224;
chunk__6221 = G__6225;
count__6222 = G__6226;
i__6223 = G__6227;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__6220);
if(temp__5804__auto__){
var seq__6220__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6220__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__6220__$1);
var G__6228 = cljs.core.chunk_rest.call(null,seq__6220__$1);
var G__6229 = c__5525__auto__;
var G__6230 = cljs.core.count.call(null,c__5525__auto__);
var G__6231 = (0);
seq__6220 = G__6228;
chunk__6221 = G__6229;
count__6222 = G__6230;
i__6223 = G__6231;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__6220__$1);
speclj.reporting.report_pass.call(null,reporter,result);


var G__6232 = cljs.core.next.call(null,seq__6220__$1);
var G__6233 = null;
var G__6234 = (0);
var G__6235 = (0);
seq__6220 = G__6232;
chunk__6221 = G__6233;
count__6222 = G__6234;
i__6223 = G__6235;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,speclj.reporting.report_run,speclj.results.FailResult,(function (result,reporters){
var seq__6236 = cljs.core.seq.call(null,reporters);
var chunk__6237 = null;
var count__6238 = (0);
var i__6239 = (0);
while(true){
if((i__6239 < count__6238)){
var reporter = cljs.core._nth.call(null,chunk__6237,i__6239);
speclj.reporting.report_fail.call(null,reporter,result);


var G__6240 = seq__6236;
var G__6241 = chunk__6237;
var G__6242 = count__6238;
var G__6243 = (i__6239 + (1));
seq__6236 = G__6240;
chunk__6237 = G__6241;
count__6238 = G__6242;
i__6239 = G__6243;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__6236);
if(temp__5804__auto__){
var seq__6236__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6236__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__6236__$1);
var G__6244 = cljs.core.chunk_rest.call(null,seq__6236__$1);
var G__6245 = c__5525__auto__;
var G__6246 = cljs.core.count.call(null,c__5525__auto__);
var G__6247 = (0);
seq__6236 = G__6244;
chunk__6237 = G__6245;
count__6238 = G__6246;
i__6239 = G__6247;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__6236__$1);
speclj.reporting.report_fail.call(null,reporter,result);


var G__6248 = cljs.core.next.call(null,seq__6236__$1);
var G__6249 = null;
var G__6250 = (0);
var G__6251 = (0);
seq__6236 = G__6248;
chunk__6237 = G__6249;
count__6238 = G__6250;
i__6239 = G__6251;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,speclj.reporting.report_run,speclj.results.PendingResult,(function (result,reporters){
var seq__6252 = cljs.core.seq.call(null,reporters);
var chunk__6253 = null;
var count__6254 = (0);
var i__6255 = (0);
while(true){
if((i__6255 < count__6254)){
var reporter = cljs.core._nth.call(null,chunk__6253,i__6255);
speclj.reporting.report_pending.call(null,reporter,result);


var G__6256 = seq__6252;
var G__6257 = chunk__6253;
var G__6258 = count__6254;
var G__6259 = (i__6255 + (1));
seq__6252 = G__6256;
chunk__6253 = G__6257;
count__6254 = G__6258;
i__6255 = G__6259;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__6252);
if(temp__5804__auto__){
var seq__6252__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6252__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__6252__$1);
var G__6260 = cljs.core.chunk_rest.call(null,seq__6252__$1);
var G__6261 = c__5525__auto__;
var G__6262 = cljs.core.count.call(null,c__5525__auto__);
var G__6263 = (0);
seq__6252 = G__6260;
chunk__6253 = G__6261;
count__6254 = G__6262;
i__6255 = G__6263;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__6252__$1);
speclj.reporting.report_pending.call(null,reporter,result);


var G__6264 = cljs.core.next.call(null,seq__6252__$1);
var G__6265 = null;
var G__6266 = (0);
var G__6267 = (0);
seq__6252 = G__6264;
chunk__6253 = G__6265;
count__6254 = G__6266;
i__6255 = G__6267;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,speclj.reporting.report_run,speclj.results.ErrorResult,(function (result,reporters){
var seq__6268 = cljs.core.seq.call(null,reporters);
var chunk__6269 = null;
var count__6270 = (0);
var i__6271 = (0);
while(true){
if((i__6271 < count__6270)){
var reporter = cljs.core._nth.call(null,chunk__6269,i__6271);
speclj.reporting.report_error.call(null,reporter,result);


var G__6272 = seq__6268;
var G__6273 = chunk__6269;
var G__6274 = count__6270;
var G__6275 = (i__6271 + (1));
seq__6268 = G__6272;
chunk__6269 = G__6273;
count__6270 = G__6274;
i__6271 = G__6275;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__6268);
if(temp__5804__auto__){
var seq__6268__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6268__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__6268__$1);
var G__6276 = cljs.core.chunk_rest.call(null,seq__6268__$1);
var G__6277 = c__5525__auto__;
var G__6278 = cljs.core.count.call(null,c__5525__auto__);
var G__6279 = (0);
seq__6268 = G__6276;
chunk__6269 = G__6277;
count__6270 = G__6278;
i__6271 = G__6279;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__6268__$1);
speclj.reporting.report_error.call(null,reporter,result);


var G__6280 = cljs.core.next.call(null,seq__6268__$1);
var G__6281 = null;
var G__6282 = (0);
var G__6283 = (0);
seq__6268 = G__6280;
chunk__6269 = G__6281;
count__6270 = G__6282;
i__6271 = G__6283;
continue;
}
} else {
return null;
}
}
break;
}
}));
speclj.reporting.stylizer = (function speclj$reporting$stylizer(code){
return (function (text){
if(cljs.core.truth_(speclj.config._STAR_color_QMARK__STAR_)){
return ["\u001B[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(code),"m",cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"\u001B[0m"].join('');
} else {
return text;
}
});
});
speclj.reporting.red = speclj.reporting.stylizer.call(null,"31");
speclj.reporting.green = speclj.reporting.stylizer.call(null,"32");
speclj.reporting.yellow = speclj.reporting.stylizer.call(null,"33");
speclj.reporting.grey = speclj.reporting.stylizer.call(null,"90");
speclj.reporting.print_elides = (function speclj$reporting$print_elides(n){
if((n > (0))){
return cljs.core.println.call(null,"\t...",n,"stack levels elided ...");
} else {
return null;
}
});
speclj.reporting.print_stack_levels = (function speclj$reporting$print_stack_levels(exception){
var levels_6284 = speclj.platform.stack_trace.call(null,exception);
var elides_6285 = (0);
while(true){
if(cljs.core.seq.call(null,levels_6284)){
var level_6286 = cljs.core.first.call(null,levels_6284);
if(speclj.platform.elide_level_QMARK_.call(null,level_6286)){
var G__6287 = cljs.core.rest.call(null,levels_6284);
var G__6288 = (elides_6285 + (1));
levels_6284 = G__6287;
elides_6285 = G__6288;
continue;
} else {
speclj.reporting.print_elides.call(null,elides_6285);

cljs.core.println.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(level_6286));

var G__6289 = cljs.core.rest.call(null,levels_6284);
var G__6290 = (0);
levels_6284 = G__6289;
elides_6285 = G__6290;
continue;
}
} else {
speclj.reporting.print_elides.call(null,elides_6285);
}
break;
}

var temp__5802__auto__ = speclj.platform.cause.call(null,exception);
if(cljs.core.truth_(temp__5802__auto__)){
var cause = temp__5802__auto__;
return speclj.reporting.print_exception.call(null,"Caused by:",cause);
} else {
return null;
}
});
speclj.reporting.print_exception = (function speclj$reporting$print_exception(prefix,exception){
if(cljs.core.truth_(prefix)){
cljs.core.println.call(null,prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(exception));
} else {
cljs.core.println.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(exception));
}

return speclj.reporting.print_stack_levels.call(null,exception);
});
speclj.reporting.stack_trace_str = (function speclj$reporting$stack_trace_str(exception){
var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__6291_6295 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__6292_6296 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__6293_6297 = true;
var _STAR_print_fn_STAR__temp_val__6294_6298 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__6293_6297);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__6294_6298);

try{if(cljs.core.truth_(speclj.config._STAR_full_stack_trace_QMARK__STAR_)){
speclj.platform.print_stack_trace.call(null,exception);
} else {
speclj.reporting.print_exception.call(null,null,exception);
}
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__6292_6296);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__6291_6295);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
});
speclj.reporting.prefix = (function speclj$reporting$prefix(var_args){
var args__5732__auto__ = [];
var len__5726__auto___6302 = arguments.length;
var i__5727__auto___6303 = (0);
while(true){
if((i__5727__auto___6303 < len__5726__auto___6302)){
args__5732__auto__.push((arguments[i__5727__auto___6303]));

var G__6304 = (i__5727__auto___6303 + (1));
i__5727__auto___6303 = G__6304;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return speclj.reporting.prefix.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(speclj.reporting.prefix.cljs$core$IFn$_invoke$arity$variadic = (function (pre,args){
var value = cljs.core.apply.call(null,cljs.core.str,args);
var lines = clojure.string.split.call(null,value,/[\r\n]+/);
var prefixed_lines = cljs.core.map.call(null,(function (p1__6299_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pre),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__6299_SHARP_)].join('');
}),lines);
return clojure.string.join.call(null,speclj.platform.endl,prefixed_lines);
}));

(speclj.reporting.prefix.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(speclj.reporting.prefix.cljs$lang$applyTo = (function (seq6300){
var G__6301 = cljs.core.first.call(null,seq6300);
var seq6300__$1 = cljs.core.next.call(null,seq6300);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6301,seq6300__$1);
}));

speclj.reporting.indent = (function speclj$reporting$indent(var_args){
var args__5732__auto__ = [];
var len__5726__auto___6307 = arguments.length;
var i__5727__auto___6308 = (0);
while(true){
if((i__5727__auto___6308 < len__5726__auto___6307)){
args__5732__auto__.push((arguments[i__5727__auto___6308]));

var G__6309 = (i__5727__auto___6308 + (1));
i__5727__auto___6308 = G__6309;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return speclj.reporting.indent.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(speclj.reporting.indent.cljs$core$IFn$_invoke$arity$variadic = (function (n,args){
var spaces = ((n * 2.0) | (0));
var indention = cljs.core.reduce.call(null,(function (p,_){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p)].join('');
}),"",cljs.core.range.call(null,spaces));
return cljs.core.apply.call(null,speclj.reporting.prefix,indention,args);
}));

(speclj.reporting.indent.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(speclj.reporting.indent.cljs$lang$applyTo = (function (seq6305){
var G__6306 = cljs.core.first.call(null,seq6305);
var seq6305__$1 = cljs.core.next.call(null,seq6305);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6306,seq6305__$1);
}));

speclj.reporting.report_description_STAR_ = (function speclj$reporting$report_description_STAR_(reporters,description){
var seq__6310 = cljs.core.seq.call(null,reporters);
var chunk__6311 = null;
var count__6312 = (0);
var i__6313 = (0);
while(true){
if((i__6313 < count__6312)){
var reporter = cljs.core._nth.call(null,chunk__6311,i__6313);
speclj.reporting.report_description.call(null,reporter,description);


var G__6314 = seq__6310;
var G__6315 = chunk__6311;
var G__6316 = count__6312;
var G__6317 = (i__6313 + (1));
seq__6310 = G__6314;
chunk__6311 = G__6315;
count__6312 = G__6316;
i__6313 = G__6317;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__6310);
if(temp__5804__auto__){
var seq__6310__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6310__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__6310__$1);
var G__6318 = cljs.core.chunk_rest.call(null,seq__6310__$1);
var G__6319 = c__5525__auto__;
var G__6320 = cljs.core.count.call(null,c__5525__auto__);
var G__6321 = (0);
seq__6310 = G__6318;
chunk__6311 = G__6319;
count__6312 = G__6320;
i__6313 = G__6321;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__6310__$1);
speclj.reporting.report_description.call(null,reporter,description);


var G__6322 = cljs.core.next.call(null,seq__6310__$1);
var G__6323 = null;
var G__6324 = (0);
var G__6325 = (0);
seq__6310 = G__6322;
chunk__6311 = G__6323;
count__6312 = G__6324;
i__6313 = G__6325;
continue;
}
} else {
return null;
}
}
break;
}
});
speclj.reporting.report_runs_STAR_ = (function speclj$reporting$report_runs_STAR_(reporters,results){
var seq__6326 = cljs.core.seq.call(null,reporters);
var chunk__6327 = null;
var count__6328 = (0);
var i__6329 = (0);
while(true){
if((i__6329 < count__6328)){
var reporter = cljs.core._nth.call(null,chunk__6327,i__6329);
speclj.reporting.report_runs.call(null,reporter,results);


var G__6330 = seq__6326;
var G__6331 = chunk__6327;
var G__6332 = count__6328;
var G__6333 = (i__6329 + (1));
seq__6326 = G__6330;
chunk__6327 = G__6331;
count__6328 = G__6332;
i__6329 = G__6333;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__6326);
if(temp__5804__auto__){
var seq__6326__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6326__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__6326__$1);
var G__6334 = cljs.core.chunk_rest.call(null,seq__6326__$1);
var G__6335 = c__5525__auto__;
var G__6336 = cljs.core.count.call(null,c__5525__auto__);
var G__6337 = (0);
seq__6326 = G__6334;
chunk__6327 = G__6335;
count__6328 = G__6336;
i__6329 = G__6337;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__6326__$1);
speclj.reporting.report_runs.call(null,reporter,results);


var G__6338 = cljs.core.next.call(null,seq__6326__$1);
var G__6339 = null;
var G__6340 = (0);
var G__6341 = (0);
seq__6326 = G__6338;
chunk__6327 = G__6339;
count__6328 = G__6340;
i__6329 = G__6341;
continue;
}
} else {
return null;
}
}
break;
}
});
speclj.reporting.report_message_STAR_ = (function speclj$reporting$report_message_STAR_(reporters,message){
var seq__6342 = cljs.core.seq.call(null,reporters);
var chunk__6343 = null;
var count__6344 = (0);
var i__6345 = (0);
while(true){
if((i__6345 < count__6344)){
var reporter = cljs.core._nth.call(null,chunk__6343,i__6345);
speclj.reporting.report_message.call(null,reporter,message);


var G__6346 = seq__6342;
var G__6347 = chunk__6343;
var G__6348 = count__6344;
var G__6349 = (i__6345 + (1));
seq__6342 = G__6346;
chunk__6343 = G__6347;
count__6344 = G__6348;
i__6345 = G__6349;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__6342);
if(temp__5804__auto__){
var seq__6342__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6342__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__6342__$1);
var G__6350 = cljs.core.chunk_rest.call(null,seq__6342__$1);
var G__6351 = c__5525__auto__;
var G__6352 = cljs.core.count.call(null,c__5525__auto__);
var G__6353 = (0);
seq__6342 = G__6350;
chunk__6343 = G__6351;
count__6344 = G__6352;
i__6345 = G__6353;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__6342__$1);
speclj.reporting.report_message.call(null,reporter,message);


var G__6354 = cljs.core.next.call(null,seq__6342__$1);
var G__6355 = null;
var G__6356 = (0);
var G__6357 = (0);
seq__6342 = G__6354;
chunk__6343 = G__6355;
count__6344 = G__6356;
i__6345 = G__6357;
continue;
}
} else {
return null;
}
}
break;
}
});
speclj.reporting.report_error_STAR_ = (function speclj$reporting$report_error_STAR_(reporters,exception){
var seq__6358 = cljs.core.seq.call(null,reporters);
var chunk__6359 = null;
var count__6360 = (0);
var i__6361 = (0);
while(true){
if((i__6361 < count__6360)){
var reporter = cljs.core._nth.call(null,chunk__6359,i__6361);
speclj.reporting.report_error.call(null,reporter,exception);


var G__6362 = seq__6358;
var G__6363 = chunk__6359;
var G__6364 = count__6360;
var G__6365 = (i__6361 + (1));
seq__6358 = G__6362;
chunk__6359 = G__6363;
count__6360 = G__6364;
i__6361 = G__6365;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__6358);
if(temp__5804__auto__){
var seq__6358__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6358__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__6358__$1);
var G__6366 = cljs.core.chunk_rest.call(null,seq__6358__$1);
var G__6367 = c__5525__auto__;
var G__6368 = cljs.core.count.call(null,c__5525__auto__);
var G__6369 = (0);
seq__6358 = G__6366;
chunk__6359 = G__6367;
count__6360 = G__6368;
i__6361 = G__6369;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__6358__$1);
speclj.reporting.report_error.call(null,reporter,exception);


var G__6370 = cljs.core.next.call(null,seq__6358__$1);
var G__6371 = null;
var G__6372 = (0);
var G__6373 = (0);
seq__6358 = G__6370;
chunk__6359 = G__6371;
count__6360 = G__6372;
i__6361 = G__6373;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=reporting.js.map
