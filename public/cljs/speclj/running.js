// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('speclj.running');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('speclj.components');
goog.require('speclj.config');
goog.require('speclj.platform');
goog.require('speclj.reporting');
goog.require('speclj.results');
goog.require('speclj.tags');
speclj.running.focusable_QMARK_ = (function speclj$running$focusable_QMARK_(component){
return (((!((component == null)))) && (((speclj.components.is_description_QMARK_.call(null,component)) || (speclj.components.is_characteristic_QMARK_.call(null,component)))));
});
speclj.running.focused_QMARK_ = (function speclj$running$focused_QMARK_(component){
return cljs.core.deref.call(null,component.is_focused_QMARK_);
});
speclj.running.has_focus_QMARK_ = (function speclj$running$has_focus_QMARK_(component){
var and__5000__auto__ = speclj.components.is_description_QMARK_.call(null,component);
if(and__5000__auto__){
return cljs.core.deref.call(null,component.has_focus_QMARK_);
} else {
return and__5000__auto__;
}
});
speclj.running.focus_mode_QMARK_ = (function speclj$running$focus_mode_QMARK_(component){
while(true){
var or__5002__auto__ = speclj.running.focused_QMARK_.call(null,component);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = speclj.running.has_focus_QMARK_.call(null,component);
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
var temp__5804__auto__ = cljs.core.deref.call(null,component.parent);
if(cljs.core.truth_(temp__5804__auto__)){
var parent = temp__5804__auto__;
var G__6446 = parent;
component = G__6446;
continue;
} else {
return null;
}
}
}
break;
}
});
speclj.running.can_run_QMARK_ = (function speclj$running$can_run_QMARK_(component){
var or__5002__auto__ = speclj.running.focused_QMARK_.call(null,component);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = speclj.running.has_focus_QMARK_.call(null,component);
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
return cljs.core.not.call(null,speclj.running.focus_mode_QMARK_.call(null,component));
}
}
});
speclj.running.all_children = (function speclj$running$all_children(component){
if(speclj.components.is_description_QMARK_.call(null,component)){
return cljs.core.concat.call(null,cljs.core.deref.call(null,component.characteristics),cljs.core.deref.call(null,component.children));
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
speclj.running.focus_BANG_ = (function speclj$running$focus_BANG_(component){
return cljs.core.reset_BANG_.call(null,component.is_focused_QMARK_,true);
});
speclj.running.focus_characteristics_BANG_ = (function speclj$running$focus_characteristics_BANG_(component){
speclj.running.focus_BANG_.call(null,component);

return cljs.core.doall.call(null,cljs.core.map.call(null,speclj.running.focus_BANG_,cljs.core.deref.call(null,component.characteristics)));
});
speclj.running.focus_children_BANG_ = (function speclj$running$focus_children_BANG_(component){
speclj.running.focus_BANG_.call(null,component);

return cljs.core.doall.call(null,cljs.core.map.call(null,speclj.running.focus_children_BANG_,cljs.core.deref.call(null,component.children)));
});
speclj.running.enable_focus_mode_BANG_ = (function speclj$running$enable_focus_mode_BANG_(component){
while(true){
var temp__5804__auto__ = cljs.core.deref.call(null,component.parent);
if(cljs.core.truth_(temp__5804__auto__)){
var parent = temp__5804__auto__;
cljs.core.reset_BANG_.call(null,parent.has_focus_QMARK_,true);

var G__6447 = parent;
component = G__6447;
continue;
} else {
return null;
}
break;
}
});
speclj.running.track_focused_descriptions_BANG_ = (function speclj$running$track_focused_descriptions_BANG_(descriptions){
var seq__6448 = cljs.core.seq.call(null,descriptions);
var chunk__6449 = null;
var count__6450 = (0);
var i__6451 = (0);
while(true){
if((i__6451 < count__6450)){
var component = cljs.core._nth.call(null,chunk__6449,i__6451);
if(cljs.core.truth_(speclj.running.focused_QMARK_.call(null,component))){
speclj.running.enable_focus_mode_BANG_.call(null,component);

speclj.running.focus_children_BANG_.call(null,component);

speclj.running.focus_characteristics_BANG_.call(null,component);
} else {
}


var G__6452 = seq__6448;
var G__6453 = chunk__6449;
var G__6454 = count__6450;
var G__6455 = (i__6451 + (1));
seq__6448 = G__6452;
chunk__6449 = G__6453;
count__6450 = G__6454;
i__6451 = G__6455;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__6448);
if(temp__5804__auto__){
var seq__6448__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6448__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__6448__$1);
var G__6456 = cljs.core.chunk_rest.call(null,seq__6448__$1);
var G__6457 = c__5525__auto__;
var G__6458 = cljs.core.count.call(null,c__5525__auto__);
var G__6459 = (0);
seq__6448 = G__6456;
chunk__6449 = G__6457;
count__6450 = G__6458;
i__6451 = G__6459;
continue;
} else {
var component = cljs.core.first.call(null,seq__6448__$1);
if(cljs.core.truth_(speclj.running.focused_QMARK_.call(null,component))){
speclj.running.enable_focus_mode_BANG_.call(null,component);

speclj.running.focus_children_BANG_.call(null,component);

speclj.running.focus_characteristics_BANG_.call(null,component);
} else {
}


var G__6460 = cljs.core.next.call(null,seq__6448__$1);
var G__6461 = null;
var G__6462 = (0);
var G__6463 = (0);
seq__6448 = G__6460;
chunk__6449 = G__6461;
count__6450 = G__6462;
i__6451 = G__6463;
continue;
}
} else {
return null;
}
}
break;
}
});
speclj.running.track_focused_characteristics_BANG_ = (function speclj$running$track_focused_characteristics_BANG_(characteristics){
var seq__6464 = cljs.core.seq.call(null,characteristics);
var chunk__6466 = null;
var count__6467 = (0);
var i__6468 = (0);
while(true){
if((i__6468 < count__6467)){
var characteristic = cljs.core._nth.call(null,chunk__6466,i__6468);
if(cljs.core.truth_(speclj.running.focused_QMARK_.call(null,characteristic))){
speclj.running.enable_focus_mode_BANG_.call(null,characteristic);


var G__6470 = seq__6464;
var G__6471 = chunk__6466;
var G__6472 = count__6467;
var G__6473 = (i__6468 + (1));
seq__6464 = G__6470;
chunk__6466 = G__6471;
count__6467 = G__6472;
i__6468 = G__6473;
continue;
} else {
var G__6474 = seq__6464;
var G__6475 = chunk__6466;
var G__6476 = count__6467;
var G__6477 = (i__6468 + (1));
seq__6464 = G__6474;
chunk__6466 = G__6475;
count__6467 = G__6476;
i__6468 = G__6477;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__6464);
if(temp__5804__auto__){
var seq__6464__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6464__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__6464__$1);
var G__6478 = cljs.core.chunk_rest.call(null,seq__6464__$1);
var G__6479 = c__5525__auto__;
var G__6480 = cljs.core.count.call(null,c__5525__auto__);
var G__6481 = (0);
seq__6464 = G__6478;
chunk__6466 = G__6479;
count__6467 = G__6480;
i__6468 = G__6481;
continue;
} else {
var characteristic = cljs.core.first.call(null,seq__6464__$1);
if(cljs.core.truth_(speclj.running.focused_QMARK_.call(null,characteristic))){
speclj.running.enable_focus_mode_BANG_.call(null,characteristic);


var G__6482 = cljs.core.next.call(null,seq__6464__$1);
var G__6483 = null;
var G__6484 = (0);
var G__6485 = (0);
seq__6464 = G__6482;
chunk__6466 = G__6483;
count__6467 = G__6484;
i__6468 = G__6485;
continue;
} else {
var G__6486 = cljs.core.next.call(null,seq__6464__$1);
var G__6487 = null;
var G__6488 = (0);
var G__6489 = (0);
seq__6464 = G__6486;
chunk__6466 = G__6487;
count__6467 = G__6488;
i__6468 = G__6489;
continue;
}
}
} else {
return null;
}
}
break;
}
});
speclj.running.scan_for_focus_BANG_ = (function speclj$running$scan_for_focus_BANG_(description){
var all = cljs.core.tree_seq.call(null,cljs.core.some_QMARK_,speclj.running.all_children,description);
speclj.running.track_focused_descriptions_BANG_.call(null,cljs.core.filter.call(null,speclj.components.is_description_QMARK_,all));

speclj.running.track_focused_characteristics_BANG_.call(null,cljs.core.filter.call(null,speclj.components.is_characteristic_QMARK_,all));

return description;
});
speclj.running.filter_focused = (function speclj$running$filter_focused(descriptions){
var seq__6490_6494 = cljs.core.seq.call(null,descriptions);
var chunk__6491_6495 = null;
var count__6492_6496 = (0);
var i__6493_6497 = (0);
while(true){
if((i__6493_6497 < count__6492_6496)){
var description_6498 = cljs.core._nth.call(null,chunk__6491_6495,i__6493_6497);
speclj.running.scan_for_focus_BANG_.call(null,description_6498);


var G__6499 = seq__6490_6494;
var G__6500 = chunk__6491_6495;
var G__6501 = count__6492_6496;
var G__6502 = (i__6493_6497 + (1));
seq__6490_6494 = G__6499;
chunk__6491_6495 = G__6500;
count__6492_6496 = G__6501;
i__6493_6497 = G__6502;
continue;
} else {
var temp__5804__auto___6503 = cljs.core.seq.call(null,seq__6490_6494);
if(temp__5804__auto___6503){
var seq__6490_6504__$1 = temp__5804__auto___6503;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6490_6504__$1)){
var c__5525__auto___6505 = cljs.core.chunk_first.call(null,seq__6490_6504__$1);
var G__6506 = cljs.core.chunk_rest.call(null,seq__6490_6504__$1);
var G__6507 = c__5525__auto___6505;
var G__6508 = cljs.core.count.call(null,c__5525__auto___6505);
var G__6509 = (0);
seq__6490_6494 = G__6506;
chunk__6491_6495 = G__6507;
count__6492_6496 = G__6508;
i__6493_6497 = G__6509;
continue;
} else {
var description_6510 = cljs.core.first.call(null,seq__6490_6504__$1);
speclj.running.scan_for_focus_BANG_.call(null,description_6510);


var G__6511 = cljs.core.next.call(null,seq__6490_6504__$1);
var G__6512 = null;
var G__6513 = (0);
var G__6514 = (0);
seq__6490_6494 = G__6511;
chunk__6491_6495 = G__6512;
count__6492_6496 = G__6513;
i__6493_6497 = G__6514;
continue;
}
} else {
}
}
break;
}

var or__5002__auto__ = cljs.core.seq.call(null,cljs.core.filter.call(null,speclj.running.focus_mode_QMARK_,descriptions));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return descriptions;
}
});
speclj.running.eval_components = (function speclj$running$eval_components(components){
var seq__6515 = cljs.core.seq.call(null,components);
var chunk__6516 = null;
var count__6517 = (0);
var i__6518 = (0);
while(true){
if((i__6518 < count__6517)){
var component = cljs.core._nth.call(null,chunk__6516,i__6518);
component.body.call(null);


var G__6519 = seq__6515;
var G__6520 = chunk__6516;
var G__6521 = count__6517;
var G__6522 = (i__6518 + (1));
seq__6515 = G__6519;
chunk__6516 = G__6520;
count__6517 = G__6521;
i__6518 = G__6522;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__6515);
if(temp__5804__auto__){
var seq__6515__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6515__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__6515__$1);
var G__6523 = cljs.core.chunk_rest.call(null,seq__6515__$1);
var G__6524 = c__5525__auto__;
var G__6525 = cljs.core.count.call(null,c__5525__auto__);
var G__6526 = (0);
seq__6515 = G__6523;
chunk__6516 = G__6524;
count__6517 = G__6525;
i__6518 = G__6526;
continue;
} else {
var component = cljs.core.first.call(null,seq__6515__$1);
component.body.call(null);


var G__6527 = cljs.core.next.call(null,seq__6515__$1);
var G__6528 = null;
var G__6529 = (0);
var G__6530 = (0);
seq__6515 = G__6527;
chunk__6516 = G__6528;
count__6517 = G__6529;
i__6518 = G__6530;
continue;
}
} else {
return null;
}
}
break;
}
});
speclj.running.nested_fns = (function speclj$running$nested_fns(base,fns){
if(cljs.core.seq.call(null,fns)){
return cljs.core.partial.call(null,cljs.core.first.call(null,fns),speclj.running.nested_fns.call(null,base,cljs.core.rest.call(null,fns)));
} else {
return base;
}
});
speclj.running.eval_characteristic = (function speclj$running$eval_characteristic(befores,body,afters){
speclj.running.eval_components.call(null,befores);

try{return body.call(null);
}finally {speclj.running.eval_components.call(null,afters);
}});
speclj.running.reset_withs = (function speclj$running$reset_withs(withs){
var seq__6531 = cljs.core.seq.call(null,withs);
var chunk__6532 = null;
var count__6533 = (0);
var i__6534 = (0);
while(true){
if((i__6534 < count__6533)){
var with$ = cljs.core._nth.call(null,chunk__6532,i__6534);
speclj.components.reset_with.call(null,with$);


var G__6535 = seq__6531;
var G__6536 = chunk__6532;
var G__6537 = count__6533;
var G__6538 = (i__6534 + (1));
seq__6531 = G__6535;
chunk__6532 = G__6536;
count__6533 = G__6537;
i__6534 = G__6538;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__6531);
if(temp__5804__auto__){
var seq__6531__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6531__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__6531__$1);
var G__6539 = cljs.core.chunk_rest.call(null,seq__6531__$1);
var G__6540 = c__5525__auto__;
var G__6541 = cljs.core.count.call(null,c__5525__auto__);
var G__6542 = (0);
seq__6531 = G__6539;
chunk__6532 = G__6540;
count__6533 = G__6541;
i__6534 = G__6542;
continue;
} else {
var with$ = cljs.core.first.call(null,seq__6531__$1);
speclj.components.reset_with.call(null,with$);


var G__6543 = cljs.core.next.call(null,seq__6531__$1);
var G__6544 = null;
var G__6545 = (0);
var G__6546 = (0);
seq__6531 = G__6543;
chunk__6532 = G__6544;
count__6533 = G__6545;
i__6534 = G__6546;
continue;
}
} else {
return null;
}
}
break;
}
});
speclj.running.collect_components = (function speclj$running$collect_components(getter,description){
var description__$1 = description;
var components = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(description__$1)){
var G__6547 = cljs.core.deref.call(null,description__$1.parent);
var G__6548 = cljs.core.concat.call(null,getter.call(null,description__$1),components);
description__$1 = G__6547;
components = G__6548;
continue;
} else {
return components;
}
break;
}
});
speclj.running.report_result = (function speclj$running$report_result(result_constructor,characteristic,start_time,reporters,failure){
var present_args = cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [characteristic,speclj.platform.secs_since.call(null,start_time),failure], null));
var result = cljs.core.apply.call(null,result_constructor,present_args);
speclj.reporting.report_run.call(null,result,reporters);

return result;
});
speclj.running.do_characteristic = (function speclj$running$do_characteristic(characteristic,reporters){
var description = cljs.core.deref.call(null,characteristic.parent);
var befores = speclj.running.collect_components.call(null,(function (p1__6549_SHARP_){
return cljs.core.deref.call(null,p1__6549_SHARP_.befores);
}),description);
var afters = speclj.running.collect_components.call(null,(function (p1__6550_SHARP_){
return cljs.core.deref.call(null,p1__6550_SHARP_.afters);
}),description);
var core_body = characteristic.body;
var before_and_after_body = (function (){
return speclj.running.eval_characteristic.call(null,befores,core_body,afters);
});
var arounds = speclj.running.collect_components.call(null,(function (p1__6551_SHARP_){
return cljs.core.deref.call(null,p1__6551_SHARP_.arounds);
}),description);
var full_body = speclj.running.nested_fns.call(null,before_and_after_body,cljs.core.map.call(null,(function (p1__6552_SHARP_){
return p1__6552_SHARP_.body;
}),arounds));
var withs = speclj.running.collect_components.call(null,(function (p1__6553_SHARP_){
return cljs.core.deref.call(null,p1__6553_SHARP_.withs);
}),description);
var start_time = speclj.platform.current_time.call(null);
try{full_body.call(null);

return speclj.running.report_result.call(null,speclj.results.pass_result,characteristic,start_time,reporters,null);
}catch (e6554){var e = e6554;
if(speclj.platform.pending_QMARK_.call(null,e)){
return speclj.running.report_result.call(null,speclj.results.pending_result,characteristic,start_time,reporters,e);
} else {
return speclj.running.report_result.call(null,speclj.results.fail_result,characteristic,start_time,reporters,e);
}
}finally {speclj.running.reset_withs.call(null,withs);
}});
speclj.running.do_characteristics = (function speclj$running$do_characteristics(characteristics,reporters){
return cljs.core.doall.call(null,(function (){var iter__5480__auto__ = (function speclj$running$do_characteristics_$_iter__6555(s__6556){
return (new cljs.core.LazySeq(null,(function (){
var s__6556__$1 = s__6556;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__6556__$1);
if(temp__5804__auto__){
var s__6556__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6556__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__6556__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__6558 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__6557 = (0);
while(true){
if((i__6557 < size__5479__auto__)){
var characteristic = cljs.core._nth.call(null,c__5478__auto__,i__6557);
if(cljs.core.truth_(speclj.running.can_run_QMARK_.call(null,characteristic))){
cljs.core.chunk_append.call(null,b__6558,speclj.running.do_characteristic.call(null,characteristic,reporters));

var G__6559 = (i__6557 + (1));
i__6557 = G__6559;
continue;
} else {
var G__6560 = (i__6557 + (1));
i__6557 = G__6560;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6558),speclj$running$do_characteristics_$_iter__6555.call(null,cljs.core.chunk_rest.call(null,s__6556__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6558),null);
}
} else {
var characteristic = cljs.core.first.call(null,s__6556__$2);
if(cljs.core.truth_(speclj.running.can_run_QMARK_.call(null,characteristic))){
return cljs.core.cons.call(null,speclj.running.do_characteristic.call(null,characteristic,reporters),speclj$running$do_characteristics_$_iter__6555.call(null,cljs.core.rest.call(null,s__6556__$2)));
} else {
var G__6561 = cljs.core.rest.call(null,s__6556__$2);
s__6556__$1 = G__6561;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__.call(null,characteristics);
})());
});
speclj.running.do_child_contexts = (function speclj$running$do_child_contexts(context,results,reporters){
var results__$1 = results;
var children = cljs.core.deref.call(null,context.children);
while(true){
if(cljs.core.seq.call(null,children)){
var G__6562 = cljs.core.concat.call(null,results__$1,speclj.running.do_description.call(null,cljs.core.first.call(null,children),reporters));
var G__6563 = cljs.core.rest.call(null,children);
results__$1 = G__6562;
children = G__6563;
continue;
} else {
speclj.running.eval_components.call(null,cljs.core.deref.call(null,context.after_alls));

return results__$1;
}
break;
}
});
speclj.running.results_for_context = (function speclj$running$results_for_context(context,reporters){
if(cljs.core.truth_(speclj.tags.pass_tag_filter_QMARK_.call(null,speclj.tags.tags_for.call(null,context)))){
return speclj.running.do_characteristics.call(null,cljs.core.deref.call(null,context.characteristics),reporters);
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
speclj.running.with_withs_bound = (function speclj$running$with_withs_bound(description,body){
var withs = cljs.core.concat.call(null,cljs.core.deref.call(null,description.withs),cljs.core.deref.call(null,description.with_alls));
var ns = clojure.string.replace.call(null,description.ns,"-","_");
var var_names = cljs.core.map.call(null,(function (p1__6566_SHARP_){
return [ns,".",cljs.core.name.call(null,p1__6566_SHARP_.name)].join('');
}),withs);
var unique_names = cljs.core.map.call(null,(function (p1__6567_SHARP_){
return [ns,".",cljs.core.name.call(null,p1__6567_SHARP_.unique_name)].join('');
}),withs);
var seq__6568_6600 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,var_names,unique_names)));
var chunk__6569_6601 = null;
var count__6570_6602 = (0);
var i__6571_6603 = (0);
while(true){
if((i__6571_6603 < count__6570_6602)){
var vec__6578_6604 = cljs.core._nth.call(null,chunk__6569_6601,i__6571_6603);
var n_6605 = cljs.core.nth.call(null,vec__6578_6604,(0),null);
var un_6606 = cljs.core.nth.call(null,vec__6578_6604,(1),null);
var code_6607 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_6605)," = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(un_6606),";"].join('');
eval(code_6607);


var G__6608 = seq__6568_6600;
var G__6609 = chunk__6569_6601;
var G__6610 = count__6570_6602;
var G__6611 = (i__6571_6603 + (1));
seq__6568_6600 = G__6608;
chunk__6569_6601 = G__6609;
count__6570_6602 = G__6610;
i__6571_6603 = G__6611;
continue;
} else {
var temp__5804__auto___6612 = cljs.core.seq.call(null,seq__6568_6600);
if(temp__5804__auto___6612){
var seq__6568_6613__$1 = temp__5804__auto___6612;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6568_6613__$1)){
var c__5525__auto___6614 = cljs.core.chunk_first.call(null,seq__6568_6613__$1);
var G__6615 = cljs.core.chunk_rest.call(null,seq__6568_6613__$1);
var G__6616 = c__5525__auto___6614;
var G__6617 = cljs.core.count.call(null,c__5525__auto___6614);
var G__6618 = (0);
seq__6568_6600 = G__6615;
chunk__6569_6601 = G__6616;
count__6570_6602 = G__6617;
i__6571_6603 = G__6618;
continue;
} else {
var vec__6581_6619 = cljs.core.first.call(null,seq__6568_6613__$1);
var n_6620 = cljs.core.nth.call(null,vec__6581_6619,(0),null);
var un_6621 = cljs.core.nth.call(null,vec__6581_6619,(1),null);
var code_6622 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_6620)," = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(un_6621),";"].join('');
eval(code_6622);


var G__6623 = cljs.core.next.call(null,seq__6568_6613__$1);
var G__6624 = null;
var G__6625 = (0);
var G__6626 = (0);
seq__6568_6600 = G__6623;
chunk__6569_6601 = G__6624;
count__6570_6602 = G__6625;
i__6571_6603 = G__6626;
continue;
}
} else {
}
}
break;
}

try{return body.call(null);
}finally {var seq__6584_6627 = cljs.core.seq.call(null,var_names);
var chunk__6585_6628 = null;
var count__6586_6629 = (0);
var i__6587_6630 = (0);
while(true){
if((i__6587_6630 < count__6586_6629)){
var vec__6594_6631 = cljs.core._nth.call(null,chunk__6585_6628,i__6587_6630);
var n_6632 = cljs.core.nth.call(null,vec__6594_6631,(0),null);
var code_6633 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_6632)," = null;"].join('');
eval(code_6633);


var G__6634 = seq__6584_6627;
var G__6635 = chunk__6585_6628;
var G__6636 = count__6586_6629;
var G__6637 = (i__6587_6630 + (1));
seq__6584_6627 = G__6634;
chunk__6585_6628 = G__6635;
count__6586_6629 = G__6636;
i__6587_6630 = G__6637;
continue;
} else {
var temp__5804__auto___6638 = cljs.core.seq.call(null,seq__6584_6627);
if(temp__5804__auto___6638){
var seq__6584_6639__$1 = temp__5804__auto___6638;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6584_6639__$1)){
var c__5525__auto___6640 = cljs.core.chunk_first.call(null,seq__6584_6639__$1);
var G__6641 = cljs.core.chunk_rest.call(null,seq__6584_6639__$1);
var G__6642 = c__5525__auto___6640;
var G__6643 = cljs.core.count.call(null,c__5525__auto___6640);
var G__6644 = (0);
seq__6584_6627 = G__6641;
chunk__6585_6628 = G__6642;
count__6586_6629 = G__6643;
i__6587_6630 = G__6644;
continue;
} else {
var vec__6597_6645 = cljs.core.first.call(null,seq__6584_6639__$1);
var n_6646 = cljs.core.nth.call(null,vec__6597_6645,(0),null);
var code_6647 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_6646)," = null;"].join('');
eval(code_6647);


var G__6648 = cljs.core.next.call(null,seq__6584_6639__$1);
var G__6649 = null;
var G__6650 = (0);
var G__6651 = (0);
seq__6584_6627 = G__6648;
chunk__6585_6628 = G__6649;
count__6586_6629 = G__6650;
i__6587_6630 = G__6651;
continue;
}
} else {
}
}
break;
}
}});
speclj.running.nested_results_for_context = (function speclj$running$nested_results_for_context(description,reporters){
var results = speclj.running.results_for_context.call(null,description,reporters);
return speclj.running.do_child_contexts.call(null,description,results,reporters);
});
speclj.running.with_around_alls = (function speclj$running$with_around_alls(description,run_characteristics_fn){
return speclj.running.nested_fns.call(null,run_characteristics_fn,cljs.core.map.call(null,(function (p1__6652_SHARP_){
return p1__6652_SHARP_.body;
}),cljs.core.deref.call(null,description.around_alls))).call(null);
});
speclj.running.do_description = (function speclj$running$do_description(description,reporters){
if(cljs.core.truth_(speclj.running.can_run_QMARK_.call(null,description))){
var tag_sets = speclj.tags.tag_sets_for.call(null,description);
if(cljs.core.truth_(cljs.core.some.call(null,speclj.tags.pass_tag_filter_QMARK_,tag_sets))){
speclj.reporting.report_description_STAR_.call(null,reporters,description);

return speclj.running.with_withs_bound.call(null,description,(function (){
speclj.running.eval_components.call(null,cljs.core.deref.call(null,description.before_alls));

try{return speclj.running.with_around_alls.call(null,description,cljs.core.partial.call(null,speclj.running.nested_results_for_context,description,reporters));
}finally {speclj.running.reset_withs.call(null,cljs.core.deref.call(null,description.with_alls));
}}));
} else {
return null;
}
} else {
return null;
}
});
speclj.running.process_compile_error = (function speclj$running$process_compile_error(runner,e){
var error_result = speclj.results.error_result.call(null,e);
cljs.core.swap_BANG_.call(null,runner.results,cljs.core.conj,error_result);

return speclj.reporting.report_run.call(null,error_result,speclj.config.active_reporters.call(null));
});

/**
 * @interface
 */
speclj.running.Runner = function(){};

var speclj$running$Runner$run_directories$dyn_6653 = (function (this$,directories,reporters){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (speclj.running.run_directories[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,this$,directories,reporters);
} else {
var m__5349__auto__ = (speclj.running.run_directories["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,this$,directories,reporters);
} else {
throw cljs.core.missing_protocol.call(null,"Runner.run-directories",this$);
}
}
});
speclj.running.run_directories = (function speclj$running$run_directories(this$,directories,reporters){
if((((!((this$ == null)))) && ((!((this$.speclj$running$Runner$run_directories$arity$3 == null)))))){
return this$.speclj$running$Runner$run_directories$arity$3(this$,directories,reporters);
} else {
return speclj$running$Runner$run_directories$dyn_6653.call(null,this$,directories,reporters);
}
});

var speclj$running$Runner$submit_description$dyn_6654 = (function (this$,description){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (speclj.running.submit_description[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,this$,description);
} else {
var m__5349__auto__ = (speclj.running.submit_description["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,this$,description);
} else {
throw cljs.core.missing_protocol.call(null,"Runner.submit-description",this$);
}
}
});
speclj.running.submit_description = (function speclj$running$submit_description(this$,description){
if((((!((this$ == null)))) && ((!((this$.speclj$running$Runner$submit_description$arity$2 == null)))))){
return this$.speclj$running$Runner$submit_description$arity$2(this$,description);
} else {
return speclj$running$Runner$submit_description$dyn_6654.call(null,this$,description);
}
});

var speclj$running$Runner$run_description$dyn_6655 = (function (this$,description,reporters){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (speclj.running.run_description[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,this$,description,reporters);
} else {
var m__5349__auto__ = (speclj.running.run_description["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,this$,description,reporters);
} else {
throw cljs.core.missing_protocol.call(null,"Runner.run-description",this$);
}
}
});
speclj.running.run_description = (function speclj$running$run_description(this$,description,reporters){
if((((!((this$ == null)))) && ((!((this$.speclj$running$Runner$run_description$arity$3 == null)))))){
return this$.speclj$running$Runner$run_description$arity$3(this$,description,reporters);
} else {
return speclj$running$Runner$run_description$dyn_6655.call(null,this$,description,reporters);
}
});

var speclj$running$Runner$run_and_report$dyn_6656 = (function (this$,reporters){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (speclj.running.run_and_report[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,this$,reporters);
} else {
var m__5349__auto__ = (speclj.running.run_and_report["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,this$,reporters);
} else {
throw cljs.core.missing_protocol.call(null,"Runner.run-and-report",this$);
}
}
});
speclj.running.run_and_report = (function speclj$running$run_and_report(this$,reporters){
if((((!((this$ == null)))) && ((!((this$.speclj$running$Runner$run_and_report$arity$2 == null)))))){
return this$.speclj$running$Runner$run_and_report$arity$2(this$,reporters);
} else {
return speclj$running$Runner$run_and_report$dyn_6656.call(null,this$,reporters);
}
});


//# sourceMappingURL=running.js.map
