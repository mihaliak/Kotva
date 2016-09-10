webpackJsonp([1,0],[function(t,e,o){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),e.router=void 0;var s=o(33),r=a(s),n=o(32),i=a(n),u=o(31),c=a(u),p=o(24),l=a(p),d=o(28),f=a(d),m=o(29),v=a(m),h=o(30),x=a(h);r["default"].use(c["default"]),r["default"].use(i["default"]);var g=e.router=new i["default"];g.map({"/home":{name:"home",component:f["default"]},"/watch/:stream":{name:"watch",component:x["default"]},"/show/:name":{name:"show",component:v["default"]}}),g.redirect({"*":"/home"}),g.start(l["default"],"body")},function(t,e,o){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var s=o(7),r=a(s),n={getStreamers:function(){var t=localStorage.getItem("streamers");return t?JSON.parse(t):["resttpowered","zolik22"]},addStreamer:function(t){var e=this.getStreamers();return e.push(t),this.setStreamers(e)},removeStreamer:function(t){var e=this.getStreamers(),o=e.indexOf(t);return o>-1&&e.splice(o,1),this.setStreamers(e)},setStreamers:function(t){return localStorage.setItem("streamers",(0,r["default"])(t)),this}};e["default"]=n},function(t,e,o){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var s=o(26),r=a(s),n=o(25),i=a(n);e["default"]={components:{Logo:r["default"],Kappa:i["default"]},replace:!1}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={methods:{openGoldenKappa:function(){window.open("http://golden-kappa.online","Golden Kappa","toolbar=no ,location=0, status=no, titlebar=no, menubar=no, width=350px, height=350")}}}},function(t,e,o){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var s=o(1),r=a(s);e["default"]={props:["twitch"],data:function(){return{status:!1,game:"",viewers:0,logo:""}},methods:{getStreamInfo:function(){this.$http.get("https://api.twitch.tv/kraken/streams/"+this.twitch).then(function(t){var e=t.body.stream;e?(this.status=!0,this.game=e.game,this.viewers=e.viewers,this.logo=e.channel.logo):this.getChannelInfo()})["catch"](function(t){console.error(t)}),window.setTimeout(this.getStreamInfo,5e3)},getChannelInfo:function(){this.$http.get("https://api.twitch.tv/kraken/channels/"+this.twitch).then(function(t){this.logo=t.body.logo})["catch"](function(t){console.error(t)})},removeStreamer:function(t){r["default"].removeStreamer(t),this.$parent.streamers=r["default"].getStreamers()}},created:function(){this.getStreamInfo()}}},function(t,e,o){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var s=o(27),r=a(s),n=o(1),i=a(n);e["default"]={components:{Streamer:r["default"]},data:function(){return{streamers:this.getStreamers(),generated:!1}},methods:{getStreamers:function(){return i["default"].getStreamers()},addStreamer:function(){var t=prompt("Channel streamera");t&&i["default"].addStreamer(t),this.streamers=i["default"].getStreamers()},generate:function(){var t=prompt("Meno kotvy bez diakrity");t&&(t=t.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,""),this.generated="http://"+t+".kotva.online")}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={methods:{getName:function(t){return t=t.split("-").map(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}),t.join(" ")}}}},,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){t.exports=" <main class=container> <logo></logo> <router-view></router-view> <kappa v-if=\"$route.name != 'watch'\"></kappa> </main> "},function(t,e){t.exports=' <div v-on:click=openGoldenKappa() class=golden-kappa> <img src=/static/kappa.png alt=Kappa title="Golden Kappa sútaž"> </div> '},function(t,e){t.exports=' <header class=logo> <i class="fa fa-anchor" aria-hidden=true v-link="{ name: \'home\' }"></i> <h1 v-link="{ name: \'home\' }">Kotva <span>.Online</span></h1> </header> '},function(t,e){t.exports=" <div class=streamer> <div class=logo> <img v-bind:src=logo alt=Photo v-if=\"logo != ''\"> </div> <div class=details> <h3>{{ twitch }}</h3> <div class=list-item> <div class=label>Status:</div> <div class=content v-bind:class=\"{ 'online': status, 'offline': !status }\"> {{ status ? 'Online' : 'Offline' }} </div> </div> <div class=list-item v-if=status> <div class=label>Hra:</div> <div class=content> {{ game }} </div> </div> <div class=list-item v-if=status> <div class=label>Sleduje:</div> <div class=content> {{ viewers }} ľudí </div> </div> <div v-if=status class=buttons> <a v-link=\"{ name: 'watch', params: { stream: twitch } }\"> <button type=button><i class=\"fa fa-twitch\" aria-hidden=true></i> HTML5 Stream</button> </a> </div> </div> <div class=close> <span v-on:click=removeStreamer(twitch)>&times;</span> </div> </div> "},function(t,e){t.exports=' <div> <h2>Zisti či je tvoja obľúbená <strong>kotvička</strong> online.</h2> <section class=buttons> <a v-on:click=addStreamer()> <button> <i class="fa fa-anchor" aria-hidden=true></i> Pridaj kotvičku </button> </a> <a v-on:click=generate()> <button> <i class="fa fa-plus-circle" aria-hidden=true></i> Vygeneruj kotva stránku </button> </a> </section> <section class=generated v-if=generated> URL stránka pre kotvu je: <span>{{ generated }}</span> </section> <section class=row> <streamer v-for="streamer in streamers" :twitch=streamer></streamer> </section> </div> '},function(t,e){t.exports=" <div class=kotva> <h3>{{ getName($route.params.name) }}</h3> <h4>ty vyjebaná kotva</h4> <img src=/static/LUL.jpg alt=LUL> </div> "},function(t,e){t.exports=' <div class=watch-stream> <iframe src="https://player.twitch.tv/?channel={{ $route.params.stream }}&html5=1" class=stream-iframe autoplay></iframe> <iframe src="https://twitch.tv/{{ $route.params.stream }}/chat" class=stream-chat-iframe></iframe> </div> '},function(t,e,o){var a,s;o(10),a=o(2),s=o(17),t.exports=a||{},t.exports.__esModule&&(t.exports=t.exports["default"]),s&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=s)},function(t,e,o){var a,s;o(11),a=o(3),s=o(18),t.exports=a||{},t.exports.__esModule&&(t.exports=t.exports["default"]),s&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=s)},function(t,e,o){var a,s;o(12),s=o(19),t.exports=a||{},t.exports.__esModule&&(t.exports=t.exports["default"]),s&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=s)},function(t,e,o){var a,s;o(13),a=o(4),s=o(20),t.exports=a||{},t.exports.__esModule&&(t.exports=t.exports["default"]),s&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=s)},function(t,e,o){var a,s;o(14),a=o(5),s=o(21),t.exports=a||{},t.exports.__esModule&&(t.exports=t.exports["default"]),s&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=s)},function(t,e,o){var a,s;o(15),a=o(6),s=o(22),t.exports=a||{},t.exports.__esModule&&(t.exports=t.exports["default"]),s&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=s)},function(t,e,o){var a,s;o(16),s=o(23),t.exports=a||{},t.exports.__esModule&&(t.exports=t.exports["default"]),s&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=s)}]);
//# sourceMappingURL=app.13f32200f092d3672bfc.js.map