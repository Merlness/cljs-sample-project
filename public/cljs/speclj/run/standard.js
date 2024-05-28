// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('speclj.run.standard');
goog.require('cljs.core');
goog.require('speclj.components');
goog.require('speclj.config');
goog.require('speclj.report.progress');
goog.require('speclj.reporting');
goog.require('speclj.results');
goog.require('speclj.running');
goog.require('speclj.tags');
speclj.run.standard.counter = cljs.core.atom.call(null,(0));

/**
* @constructor
 * @implements {speclj.running.Runner}
*/
speclj.run.standard.StandardRunner = (function (num,descriptions,results){
this.num = num;
this.descriptions = descriptions;
this.results = results;
});
(speclj.run.standard.StandardRunner.prototype.speclj$running$Runner$ = cljs.core.PROTOCOL_SENTINEL);

(speclj.run.standard.StandardRunner.prototype.speclj$running$Runner$run_directories$arity$3 = (function (this$,directories,reporters){
var self__ = this;
var this$__$1 = this;
return alert("StandardRunner.run-directories:  I don't know how to do this.");
}));

(speclj.run.standard.StandardRunner.prototype.speclj$running$Runner$submit_description$arity$2 = (function (this$,description){
var self__ = this;
var this$__$1 = this;
return cljs.core.swap_BANG_.call(null,self__.descriptions,cljs.core.conj,description);
}));

(speclj.run.standard.StandardRunner.prototype.speclj$running$Runner$run_description$arity$3 = (function (this$,description,reporters){
var self__ = this;
var this$__$1 = this;
var run_results = speclj.running.do_description.call(null,description,reporters);
return cljs.core.swap_BANG_.call(null,self__.results,cljs.core.into,run_results);
}));

(speclj.run.standard.StandardRunner.prototype.speclj$running$Runner$run_and_report$arity$2 = (function (this$,reporters){
var self__ = this;
var this$__$1 = this;
var seq__6723_6727 = cljs.core.seq.call(null,speclj.running.filter_focused.call(null,cljs.core.deref.call(null,self__.descriptions)));
var chunk__6724_6728 = null;
var count__6725_6729 = (0);
var i__6726_6730 = (0);
while(true){
if((i__6726_6730 < count__6725_6729)){
var description_6731 = cljs.core._nth.call(null,chunk__6724_6728,i__6726_6730);
speclj.running.run_description.call(null,this$__$1,description_6731,reporters);


var G__6732 = seq__6723_6727;
var G__6733 = chunk__6724_6728;
var G__6734 = count__6725_6729;
var G__6735 = (i__6726_6730 + (1));
seq__6723_6727 = G__6732;
chunk__6724_6728 = G__6733;
count__6725_6729 = G__6734;
i__6726_6730 = G__6735;
continue;
} else {
var temp__5804__auto___6736 = cljs.core.seq.call(null,seq__6723_6727);
if(temp__5804__auto___6736){
var seq__6723_6737__$1 = temp__5804__auto___6736;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6723_6737__$1)){
var c__5525__auto___6738 = cljs.core.chunk_first.call(null,seq__6723_6737__$1);
var G__6739 = cljs.core.chunk_rest.call(null,seq__6723_6737__$1);
var G__6740 = c__5525__auto___6738;
var G__6741 = cljs.core.count.call(null,c__5525__auto___6738);
var G__6742 = (0);
seq__6723_6727 = G__6739;
chunk__6724_6728 = G__6740;
count__6725_6729 = G__6741;
i__6726_6730 = G__6742;
continue;
} else {
var description_6743 = cljs.core.first.call(null,seq__6723_6737__$1);
speclj.running.run_description.call(null,this$__$1,description_6743,reporters);


var G__6744 = cljs.core.next.call(null,seq__6723_6737__$1);
var G__6745 = null;
var G__6746 = (0);
var G__6747 = (0);
seq__6723_6727 = G__6744;
chunk__6724_6728 = G__6745;
count__6725_6729 = G__6746;
i__6726_6730 = G__6747;
continue;
}
} else {
}
}
break;
}

return speclj.reporting.report_runs_STAR_.call(null,reporters,cljs.core.deref.call(null,self__.results));
}));

(speclj.run.standard.StandardRunner.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"num","num",-669195096,null),new cljs.core.Symbol(null,"descriptions","descriptions",817338403,null),new cljs.core.Symbol(null,"results","results",506361414,null)], null);
}));

(speclj.run.standard.StandardRunner.cljs$lang$type = true);

(speclj.run.standard.StandardRunner.cljs$lang$ctorStr = "speclj.run.standard/StandardRunner");

(speclj.run.standard.StandardRunner.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write.call(null,writer__5288__auto__,"speclj.run.standard/StandardRunner");
}));

/**
 * Positional factory function for speclj.run.standard/StandardRunner.
 */
speclj.run.standard.__GT_StandardRunner = (function speclj$run$standard$__GT_StandardRunner(num,descriptions,results){
return (new speclj.run.standard.StandardRunner(num,descriptions,results));
});

(speclj.run.standard.StandardRunner.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(speclj.run.standard.StandardRunner.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (x,writer,opts){
var x__$1 = this;
cljs.core._write.call(null,writer,["#<speclj.run.standard.StandardRunner(num: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x__$1.num),", descriptions: "].join(''));

cljs.core._pr_writer.call(null,cljs.core.deref.call(null,x__$1.descriptions),writer,opts);

return cljs.core._write.call(null,writer,")>");
}));

(speclj.components.Description.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(speclj.components.Description.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (x,writer,opts){
var x__$1 = this;
return cljs.core._write.call(null,writer,["#<speclj.component.Description(name: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x__$1.name),")>"].join(''));
}));
speclj.run.standard.new_standard_runner = (function speclj$run$standard$new_standard_runner(){
return (new speclj.run.standard.StandardRunner(cljs.core.swap_BANG_.call(null,speclj.run.standard.counter,cljs.core.inc),cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY)));
});
cljs.core.reset_BANG_.call(null,speclj.config.default_runner_fn,speclj.run.standard.new_standard_runner);
cljs.core.reset_BANG_.call(null,speclj.config.default_runner,speclj.run.standard.new_standard_runner.call(null));
speclj.run.standard.armed = false;
speclj.run.standard.run_specs = (function speclj$run$standard$run_specs(var_args){
var args__5732__auto__ = [];
var len__5726__auto___6749 = arguments.length;
var i__5727__auto___6750 = (0);
while(true){
if((i__5727__auto___6750 < len__5726__auto___6749)){
args__5732__auto__.push((arguments[i__5727__auto___6750]));

var G__6751 = (i__5727__auto___6750 + (1));
i__5727__auto___6750 = G__6751;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return speclj.run.standard.run_specs.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(speclj.run.standard.run_specs.cljs$core$IFn$_invoke$arity$variadic = (function (configurations){

if(speclj.run.standard.armed){
return speclj.config.with_config.call(null,cljs.core.merge.call(null,cljs.core.dissoc.call(null,speclj.config.default_config,new cljs.core.Keyword(null,"runner","runner",1945441304)),cljs.core.apply.call(null,cljs.core.hash_map,configurations)),(function (){
var temp__5802__auto___6752 = speclj.tags.describe_filter.call(null);
if(cljs.core.truth_(temp__5802__auto___6752)){
var filter_msg_6753 = temp__5802__auto___6752;
speclj.reporting.report_message_STAR_.call(null,speclj.config.active_reporters.call(null),filter_msg_6753);
} else {
}

speclj.running.run_and_report.call(null,speclj.config.active_runner.call(null),speclj.config.active_reporters.call(null));

return speclj.results.fail_count.call(null,cljs.core.deref.call(null,speclj.config.active_runner.call(null).results));
}));
} else {
return null;
}
}));

(speclj.run.standard.run_specs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(speclj.run.standard.run_specs.cljs$lang$applyTo = (function (seq6748){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq6748));
}));


//# sourceMappingURL=standard.js.map
