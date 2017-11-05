webpackJsonp([1],{"/zMN":function(t,e){},"14Xc":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t._m(0),t._v(" "),n("board",{ref:"board",on:{victory:t.onVictory}}),t._v(" "),t._m(1),t._v(" "),t.victory?n("victory-overlay",{attrs:{winner:t.winner},on:{reset:t.onReset}}):t._e()],1)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("h1",[t._v("Taasen")]),t._v(" "),n("p",[t._v("the game of Tryslmaistan chess")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[n("p",[n("a",{attrs:{href:"https://github.com/canmom/taasen"}},[t._v("source")]),t._v(" — based on "),n("a",{attrs:{href:"http://unicornjelly.com/taasen1.html"}},[t._v("rules")]),t._v(" by "),n("a",{attrs:{href:"http://jenniverse.com/"}},[t._v("Jennifer Diane Reitz")])])])}],s={render:i,staticRenderFns:r};e.a=s},"5mem":function(t,e,n){"use strict";e.a={selectable:"#000",nonselectable:"#5f5f5f",selected:"#FF0",pushed:"#F00"}},"6DbU":function(t,e,n){"use strict";var i=n("sVEo"),r=n("o9mN");e.a={data:function(){return{x:.5,rOuter:.58,rInner:.3}},computed:{style:function(){return{fill:r.a.outer[this.faction]}},styleInner:function(){return{fill:r.a.inner[this.faction]}},y:function(){return.5+.09*this.u}},props:{faction:{validator:function(t){return["red","green"].includes(t)}},u:{type:Number,default:function(){return-1}}},components:{Triangle:i.a}}},"6aRf":function(t,e){},"82Oe":function(t,e,n){"use strict";function i(t){n("rX1u")}var r=n("vrgC"),s=n("Qx28"),a=n("VU/8"),u=i,o=a(r.a,s.a,!1,u,null,null);e.a=o.exports},"85vU":function(t,e,n){"use strict";var i=n("nMV3");e.a={components:{FactionTriangle:i.a},props:{winner:String},methods:{onPlayAgain:function(){this.$emit("reset")}}}},"8Kpg":function(t,e,n){"use strict";var i=n("sVEo");e.a={props:{x:Number,y:Number,up:{validator:function(t){return 1===t||-1===t}},r:Number},components:{Triangle:i.a},methods:{click:function(){this.$emit("move")}}}},"8MfB":function(t,e,n){"use strict";var i=n("P5kR");e.a={props:{x:Number,y:Number,up:{validator:function(t){return 1===t||-1===t}},r:Number},computed:{points:function(){var t=Object(i.a)(this.x,this.y,this.r,this.up);return t[0].x+","+t[0].y+" "+t[1].x+","+t[1].y+" "+t[2].x+","+t[2].y}}}},CCSv:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"victory"}},[n("faction-triangle",{attrs:{faction:t.winner,u:1}}),t._v(" "),n("h2",[t._v("Congratulations!")]),t._v(" "),n("p",[n("strong",[t._v(t._s(t.winner))]),t._v(" has put the right pieces in the right places.")]),t._v(" "),n("button",{on:{click:t.onPlayAgain}},[t._v("Play again?")])],1)},r=[],s={render:i,staticRenderFns:r};e.a=s},CvJW:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;return(t._self._c||e)("polygon",{attrs:{points:t.points}})},r=[],s={render:i,staticRenderFns:r};e.a=s},EBP0:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"game"},[n("move-indicator",{attrs:{faction:t.toMove,pushed:t.toBePushed,moving:t.moving,crushed:t.crushed}}),t._v(" "),n("svg",{staticClass:"board",attrs:{viewBox:"0 0 4 3.5"}},[t._l(t.tiles,function(e){return n("tile",{key:e.id(),attrs:{x:e.x(),y:e.y(),up:e.up(),r:t.tileRadius,t:e.terrain()}})}),t._v(" "),t._l(Array.from(t.pushed.values()),function(e){return n("pushed-overlay",{key:t.getTile(e.loc).id(),attrs:{x:t.getTile(e.loc).x(),y:t.getTile(e.loc).y(),up:t.getTile(e.loc).up(),r:t.tileRadius}})}),t._v(" "),t._l(t.destinations,function(e){return n("destination-overlay",{key:e.id(),attrs:{x:e.x(),y:e.y(),up:e.up(),r:t.tileRadius},on:{move:function(n){t.movePiece(e.id())}}})}),t._v(" "),t._l(t.pieces,function(e){return n("piece",{key:e.id,attrs:{loc:e.loc,r:t.pieceRadius,piece:e.piece,faction:e.faction,starting:e.starting,state:e.state},on:{select:function(n){t.beginMoving(e)}}})})],2)],1)},r=[],s={render:i,staticRenderFns:r};e.a=s},KRCx:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("g",[n("triangle",{staticClass:"pushedOverlay",attrs:{x:t.x,y:t.y,up:t.up,r:t.r}})],1)},r=[],s={render:i,staticRenderFns:r};e.a=s},LKj0:function(t,e,n){"use strict";function i(t){n("/zMN")}var r=n("85vU"),s=n("CCSv"),a=n("VU/8"),u=i,o=a(r.a,s.a,!1,u,null,null);e.a=o.exports},LYzt:function(t,e,n){"use strict";function i(){var t=[];return["red","green","blue"].map(function(e){["thaum","sciane","paupil"].map(function(n){t.push(new _(e,n))})}),{tiles:p.c,pieces:t,tileRadius:p.b,pieceRadius:.2*p.b,destinations:[],moving:null,pushed:new c.a,toMove:"red",toBePushed:null,crushed:[],pushedPreviousTurn:null,bluePieceMovedPreviousTurn:null}}var r=n("woOf"),s=n.n(r),a=n("BO1k"),u=n.n(a),o=n("lHA8"),c=n.n(o),l=n("Zrlr"),h=n.n(l),d=n("wxAW"),f=n.n(d),v=n("opib"),p=n("qrqH"),y=n("82Oe"),m=n("kE7l"),g=n("WaFa"),x=n("SHix"),_=function(){function t(e,n){h()(this,t),this.faction=e,this.piece=n,this.id=e+n,this.loc={red:"a1",green:"a7",blue:"d4"}[e],this.starting=!0,this.state="green"!==e?"selectable":"nonselectable"}return f()(t,[{key:"destinations",value:function(t){return Object(p.a)(this.loc).adjacent().filter(function(e){return Object(p.a)(e).unoccupied(t)}).map(function(t){return Object(p.a)(t)})}}]),t}();e.a={data:i,components:{Tile:v.a,Piece:y.a,DestinationOverlay:m.a,PushedOverlay:g.a,MoveIndicator:x.a},methods:{opposingSide:function(){return"red"===this.toMove?"green":"red"},resetMoving:function(){this.moving=null,this.destinations=[]},determineSelectable:function(t){var e=!0,n=!1,i=void 0;try{for(var r,s=u()(this.pieces);!(e=(r=s.next()).done);e=!0){var a=r.value;a.faction===t||a===this.pushedPreviousTurn||a===this.bluePieceMovedPreviousTurn?a.state="nonselectable":a.state="selectable"}}catch(t){n=!0,i=t}finally{try{!e&&s.return&&s.return()}finally{if(n)throw i}}},nextTurn:function(){var t=this.toMove;this.toMove=this.opposingSide(),this.checkDefeat()?this.declareVictory(this.opposingSide()):this.determineSelectable(t)},getPushed:function(t){this.pushed.clear();var e={thaum:"sciane",sciane:"paupil",paupil:"thaum"}[this.moving.piece],n=!0,i=!1,r=void 0;try{for(var s,a=u()(Object(p.a)(t).pushes());!(n=(s=a.next()).done);n=!0){var o=s.value,c=!0,l=!1,h=void 0;try{for(var d,f=u()(this.pieces);!(c=(d=f.next()).done);c=!0){var v=d.value;v.loc===o&&v.piece===e&&v.faction!==this.toMove&&v.faction!==this.moving.faction&&this.pushed.add(v)}}catch(t){l=!0,h=t}finally{try{!c&&f.return&&f.return()}finally{if(l)throw h}}}}catch(t){i=!0,r=t}finally{try{!n&&a.return&&a.return()}finally{if(i)throw r}}},setUpPush:function(){this.toBePushed=this.opposingSide();var t=!0,e=!1,n=void 0;try{for(var i,r=u()(this.pieces);!(t=(i=r.next()).done);t=!0){var s=i.value;this.pushed.has(s)?s.state="pushed":s.state="nonselectable"}}catch(t){e=!0,n=t}finally{try{!t&&r.return&&r.return()}finally{if(e)throw n}}},resolvePush:function(){this.pushed.clear(),this.pushedPreviousTurn=this.moving,this.toBePushed=null},movePiece:function(t){this.moving.loc=t,this.moving.starting=!1,this.pushedPreviousTurn=null,this.toBePushed?this.resolvePush():("blue"===this.moving.faction?this.bluePieceMovedPreviousTurn=this.moving:this.bluePieceMovedPreviousTurn=null,this.getPushed(t)),this.resetMoving(),0!==this.pushed.size?(this.setUpPush(),1===this.pushed.size&&this.beginMoving(this.pushed.values().next().value)):this.nextTurn()},crushPiece:function(t){this.crushed.push(t),this.pieces.splice(this.pieces.indexOf(t),1),this.pushed.clear(),this.toBePushed=null,this.resetMoving(),this.nextTurn()},beginMoving:function(t){"pushed"===t.state||"selectable"===t.state?(this.resetMoving(),this.determineSelectable(this.opposingSide()),this.moving=t,t.state="selected",this.destinations=t.destinations(this.pieces)):"selected"!==t.state||this.toBePushed||(this.resetMoving(),t.state="selectable"),this.toBePushed&&0===this.destinations.length&&this.crushPiece(t)},checkDefeat:function(){return this.factionHasNoPieces(this.toMove)},factionHasNoPieces:function(t){return!this.pieces.find(function(e){return e.faction===t})},declareVictory:function(t){this.$emit("victory",{winner:t})},resetBoard:function(t){s()(this.$data,i())},getTile:p.a}}},M93x:function(t,e,n){"use strict";function i(t){n("hlEH")}var r=n("xJD8"),s=n("14Xc"),a=n("VU/8"),u=i,o=a(r.a,s.a,!1,u,null,null);e.a=o.exports},Md1i:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("g",{on:{click:function(e){t.$emit("move")}}},[n("triangle",{staticClass:"destination",attrs:{x:t.x,y:t.y,up:t.up,r:t.r}})],1)},r=[],s={render:i,staticRenderFns:r};e.a=s},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),r=n("M93x");new i.a({el:"#app",render:function(t){return t(r.a)}})},P5kR:function(t,e,n){"use strict";function i(t,e,n,i){return[{x:t,y:e-i*n},{x:t+n*Math.sqrt(3)/2,y:e+.5*i*n},{x:t-n*Math.sqrt(3)/2,y:e+.5*i*n}]}e.a=i},Qx28:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("g",{class:t.elClass,on:{click:function(e){t.$emit("select")}}},[n("circle",{style:t.outlineStyle,attrs:{cx:t.x,cy:t.y,r:t.coreRadius+t.strokeWidth}}),t._v(" "),t.isSciane?n("line",{style:t.outlineStrokeStyle,attrs:{x1:t.x-t.scianeArmLength-t.strokeWidth/2,x2:t.x+t.scianeArmLength+t.strokeWidth/2,y1:t.y,y2:t.y}}):t._e(),t._v(" "),t.isSciane?n("line",{style:t.outlineStrokeStyle,attrs:{y1:t.y-t.scianeArmLength-t.strokeWidth/2,y2:t.y+t.scianeArmLength+t.strokeWidth/2,x1:t.x,x2:t.x}}):t._e(),t._v(" "),t.isSciane?n("line",{style:t.strokeStyle,attrs:{x1:t.x-t.scianeArmLength,x2:t.x+t.scianeArmLength,y1:t.y,y2:t.y}}):t._e(),t._v(" "),t.isSciane?n("line",{style:t.strokeStyle,attrs:{y1:t.y-t.scianeArmLength,y2:t.y+t.scianeArmLength,x1:t.x,x2:t.x}}):t._e(),t._v(" "),n("circle",{staticClass:"core",style:t.strokeStyle,attrs:{cx:t.x,cy:t.y,r:t.coreRadius}}),t._v(" "),t.isThaum?n("triangle",{style:t.strokeStyle,attrs:{x:t.x,y:t.y,r:.85*t.r,up:1}}):t._e()],1)},r=[],s={render:i,staticRenderFns:r};e.a=s},SHix:function(t,e,n){"use strict";function i(t){n("6aRf")}var r=n("yxz/"),s=n("xFBY"),a=n("VU/8"),u=i,o=a(r.a,s.a,!1,u,null,null);e.a=o.exports},TUcH:function(t,e,n){"use strict";function i(t){n("gR0n")}var r=n("LYzt"),s=n("EBP0"),a=n("VU/8"),u=i,o=a(r.a,s.a,!1,u,null,null);e.a=o.exports},Uiig:function(t,e){},WaFa:function(t,e,n){"use strict";function i(t){n("c6C7")}var r=n("dPoL"),s=n("KRCx"),a=n("VU/8"),u=i,o=a(r.a,s.a,!1,u,null,null);e.a=o.exports},c6C7:function(t,e){},dPoL:function(t,e,n){"use strict";var i=n("sVEo");e.a={props:{x:Number,y:Number,up:{validator:function(t){return 1===t||-1===t}},r:Number},components:{Triangle:i.a}}},gR0n:function(t,e){},hlEH:function(t,e){},jEC9:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;return(t._self._c||e)("triangle",{class:t.elClass,attrs:{x:t.x,y:t.y,up:t.up,r:t.r}})},r=[],s={render:i,staticRenderFns:r};e.a=s},"jU+n":function(t,e,n){"use strict";var i=n("lHA8"),r=n.n(i),s=n("sVEo");e.a={props:{x:Number,y:Number,up:{validator:function(t){return 1===t||-1===t}},r:Number,t:{validator:function(t){return new r.a(["void","desert1","desert2","grass","sea"]).has(t)}}},computed:{elClass:function(){return"tile "+this.t}},components:{Triangle:s.a}}},jV9m:function(t,e){},kE7l:function(t,e,n){"use strict";function i(t){n("jV9m")}var r=n("8Kpg"),s=n("Md1i"),a=n("VU/8"),u=i,o=a(r.a,s.a,!1,u,null,null);e.a=o.exports},nMV3:function(t,e,n){"use strict";var i=n("6DbU"),r=n("wFNk"),s=n("VU/8"),a=s(i.a,r.a,!1,null,null,null);e.a=a.exports},o9mN:function(t,e,n){"use strict";e.a={outer:{red:"#FF4452",green:"#64BC0D",blue:"#23F1FF"},inner:{red:"#820A13",green:"#306000",blue:"#00757C"}}},opib:function(t,e,n){"use strict";function i(t){n("Uiig")}var r=n("jU+n"),s=n("jEC9"),a=n("VU/8"),u=i,o=a(r.a,s.a,!1,u,null,null);e.a=o.exports},qrqH:function(t,e,n){"use strict";function i(t){return d.find(function(e){return e.id()===t})}n.d(e,"b",function(){return o}),n.d(e,"c",function(){return d}),e.a=i;var r=n("Zrlr"),s=n.n(r),a=n("wxAW"),u=n.n(a),o=1/Math.sqrt(3),c=3.1,l=1.5*-o,h=function(){function t(e){s()(this,t),this.params=e}return u()(t,[{key:"id",value:function(){return this.params.id}},{key:"x",value:function(){return this.params.x}},{key:"y",value:function(){return this.params.y}},{key:"up",value:function(){return this.params.u}},{key:"terrain",value:function(){return this.params.t}},{key:"adjacent",value:function(){return this.params.a}},{key:"pushes",value:function(){return this.params.p||this.params.a}},{key:"unoccupied",value:function(t){var e=this;return t.reduce(function(t,n){return t&&n.loc!==e.id()},!0)}}]),t}(),d=[new h({id:"a1",x:.5,y:c,u:1,t:"void",a:["a2"]}),new h({id:"a3",x:1.5,y:c,u:1,t:"desert2",a:["a2","a4"]}),new h({id:"a5",x:2.5,y:c,u:1,t:"desert2",a:["a4","a6"]}),new h({id:"a7",x:3.5,y:c,u:1,t:"void",a:["a6"]}),new h({id:"a2",x:1,y:c+l/3,u:-1,t:"desert1",a:["a1","b2","a3"]}),new h({id:"a4",x:2,y:c+l/3,u:-1,t:"grass",a:["a3","a5","b3","b5"],p:["a3","a5"]}),new h({id:"a6",x:3,y:c+l/3,u:-1,t:"desert1",a:["a5","b6","a7"]}),new h({id:"b2",x:1,y:c+l,u:1,t:"desert2",a:["a2","b3"]}),new h({id:"b4",x:2,y:c+l,u:1,t:"sea",a:[]}),new h({id:"b6",x:3,y:c+l,u:1,t:"desert2",a:["b5","a6"]}),new h({id:"b3",x:1.5,y:c+4*l/3,u:-1,t:"grass",a:["b2","c3","a4","b5"],p:["b2","c3"]}),new h({id:"b5",x:2.5,y:c+4*l/3,u:-1,t:"grass",a:["c5","b6","b3","a4"],p:["c5","b6"]}),new h({id:"c3",x:1.5,y:c+2*l,u:1,t:"desert2",a:["b3","c4"]}),new h({id:"c5",x:2.5,y:c+2*l,u:1,t:"desert2",a:["c4","b5"]}),new h({id:"c4",x:2,y:c+7*l/3,u:-1,t:"desert1",a:["c3","c5","d4"]}),new h({id:"d4",x:2,y:c+3*l,u:1,t:"void",a:["c4"]})]},rX1u:function(t,e){},sVEo:function(t,e,n){"use strict";var i=n("8MfB"),r=n("CvJW"),s=n("VU/8"),a=s(i.a,r.a,!1,null,null,null);e.a=a.exports},vrgC:function(t,e,n){"use strict";var i=n("fZjL"),r=n.n(i),s=n("pFYg"),a=n.n(s),u=n("lHA8"),o=n.n(u),c=n("sVEo"),l=n("qrqH"),h=n("P5kR"),d=n("5mem");e.a={props:{piece:{validator:function(t){return new o.a(["thaum","sciane","paupil"]).has(t)}},faction:{validator:function(t){return new o.a(["red","green","blue"]).has(t)}},loc:{validator:function(t){return"string"==typeof t&&2===t.length||"object"===(void 0===t?"undefined":a()(t))}},r:Number,starting:Boolean,state:{validator:function(t){return r()(d.a).includes(t)}}},computed:{offset:function(){if(this.starting){return Object(h.a)(0,0,2*this.r,1)[{thaum:0,sciane:1,paupil:2}[this.piece]]}return{x:0,y:0}},x:function(){return"string"==typeof this.loc?Object(l.a)(this.loc).x()+this.offset.x:this.loc.x()},y:function(){return"string"==typeof this.loc?Object(l.a)(this.loc).y()+this.offset.y:this.loc.y()},elClass:function(){return"piece "+this.piece+" "+this.faction},strokeWidth:function(){return.3*this.r},strokeStyle:function(){return{"stroke-width":this.strokeWidth}},outlineStyle:function(){return{stroke:"none",fill:d.a[this.state]}},outlineStrokeStyle:function(){return{stroke:d.a[this.state],"stroke-width":2*this.strokeWidth}},coreRadius:function(){return{thaum:1,sciane:.6,paupil:.8}[this.piece]*this.r},scianeArmLength:function(){return 1.1*this.r},isThaum:function(){return"thaum"===this.piece},isSciane:function(){return"sciane"===this.piece}},components:{Triangle:c.a}}},wFNk:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{viewBox:"0 0 1 1"}},[n("triangle",{style:t.style,attrs:{x:t.x,y:t.y,r:t.rOuter,up:t.u}}),t._v(" "),n("triangle",{style:t.styleInner,attrs:{x:t.x,y:t.y,r:t.rInner,up:t.u}})],1)},r=[],s={render:i,staticRenderFns:r};e.a=s},xFBY:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"indicator"}},[n("p",[n("faction-triangle",{attrs:{faction:t.faction}}),t._v(" "),n("strong",[t._v(t._s(t.faction))]),t._v(" "),null===t.pushed?n("span",[t._v("to move")]):n("span",[t._v("just moved")])],1),t._v(" "),null!==t.pushed?n("p",{attrs:{id:"pushedindicator"}},[n("faction-triangle",{attrs:{faction:t.pushed}}),t._v(" "),n("strong",[t._v(t._s(t.pushed))]),t._v(" "),null!==t.moving?n("span",[t._v("to choose where pushed piece goes")]):n("span",[t._v("will be pushed")])],1):t._e(),t._v(" "),null!==t.pushed&&null===t.moving?n("p",{attrs:{id:"choosepushedindicator"}},[n("faction-triangle",{attrs:{faction:t.faction}}),t._v(" "),n("strong",[t._v(t._s(t.faction))]),t._v(" to choose which piece to push\r\n  ")],1):t._e(),t._v(" "),t.crushed.length?n("div",{attrs:{id:"crushedindicator"}},[n("h2",[t._v("crushed pieces:")]),t._v(" "),n("svg",{attrs:{viewBox:"0 0 8 1"}},t._l(t.crushed,function(t,e){return n("piece",{key:t.id,attrs:{loc:{x:.5+1.02*e,y:.5},r:.35,piece:t.piece,faction:t.faction,starting:0,state:"selectable"}})}))]):t._e()])},r=[],s={render:i,staticRenderFns:r};e.a=s},xJD8:function(t,e,n){"use strict";var i=n("TUcH"),r=n("LKj0");e.a={data:function(){return{victory:!1,winner:null}},components:{Board:i.a,VictoryOverlay:r.a},methods:{onVictory:function(t){this.showVictoryOverlay(t.winner)},showVictoryOverlay:function(t){this.victory=!0,this.winner=t},onReset:function(){this.$refs.board.resetBoard(),this.victory=!1,this.winner=null}}}},"yxz/":function(t,e,n){"use strict";var i=n("nMV3"),r=n("82Oe");e.a={props:{faction:{validator:function(t){return["red","green"].includes(t)}},pushed:{validator:function(t){return function(t){return["red","green",null].includes(t)}}},moving:null,crushed:null},components:{FactionTriangle:i.a,Piece:r.a}}}},["NHnr"]);
//# sourceMappingURL=app.34d61bb3fc5f09b3b48d.js.map