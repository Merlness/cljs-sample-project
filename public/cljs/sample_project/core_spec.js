// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('sample_project.core_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('sample_project.components');
var description__8221__auto___9314 = speclj.components.new_description.call(null,"hello-world component",false,"sample-project.core-spec");
var _STAR_parent_description_STAR__orig_val__9308_9315 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9309_9316 = description__8221__auto___9314;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9309_9316);

try{var seq__9310_9317 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"says hello to the entire world",((function (_STAR_parent_description_STAR__orig_val__9308_9315,_STAR_parent_description_STAR__temp_val__9309_9316,description__8221__auto___9314){
return (function (){
var expected__8354__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Hello, all!"], null);
var actual__8355__auto__ = sample_project.components.hello_world.call(null);
if(cljs.core._EQ_.call(null,expected__8354__auto__,actual__8355__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8354__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8354__auto__)),speclj.platform.endl,"     got: ",(((actual__8355__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8355__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__9308_9315,_STAR_parent_description_STAR__temp_val__9309_9316,description__8221__auto___9314))
,false)],null)));
var chunk__9311_9318 = null;
var count__9312_9319 = (0);
var i__9313_9320 = (0);
while(true){
if((i__9313_9320 < count__9312_9319)){
var component__8222__auto___9321 = cljs.core._nth.call(null,chunk__9311_9318,i__9313_9320);
speclj.components.install.call(null,component__8222__auto___9321,description__8221__auto___9314);


var G__9322 = seq__9310_9317;
var G__9323 = chunk__9311_9318;
var G__9324 = count__9312_9319;
var G__9325 = (i__9313_9320 + (1));
seq__9310_9317 = G__9322;
chunk__9311_9318 = G__9323;
count__9312_9319 = G__9324;
i__9313_9320 = G__9325;
continue;
} else {
var temp__5804__auto___9326 = cljs.core.seq.call(null,seq__9310_9317);
if(temp__5804__auto___9326){
var seq__9310_9327__$1 = temp__5804__auto___9326;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9310_9327__$1)){
var c__5525__auto___9328 = cljs.core.chunk_first.call(null,seq__9310_9327__$1);
var G__9329 = cljs.core.chunk_rest.call(null,seq__9310_9327__$1);
var G__9330 = c__5525__auto___9328;
var G__9331 = cljs.core.count.call(null,c__5525__auto___9328);
var G__9332 = (0);
seq__9310_9317 = G__9329;
chunk__9311_9318 = G__9330;
count__9312_9319 = G__9331;
i__9313_9320 = G__9332;
continue;
} else {
var component__8222__auto___9333 = cljs.core.first.call(null,seq__9310_9327__$1);
speclj.components.install.call(null,component__8222__auto___9333,description__8221__auto___9314);


var G__9334 = cljs.core.next.call(null,seq__9310_9327__$1);
var G__9335 = null;
var G__9336 = (0);
var G__9337 = (0);
seq__9310_9317 = G__9334;
chunk__9311_9318 = G__9335;
count__9312_9319 = G__9336;
i__9313_9320 = G__9337;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9308_9315);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8221__auto___9314);
}


//# sourceMappingURL=core_spec.js.map
