(this["webpackJsonpstarter-code"]=this["webpackJsonpstarter-code"]||[]).push([[0],{20:function(e,t,a){},35:function(e){e.exports=JSON.parse('{"genres":[{"id":139,"name":"VR & AR","parent_id":127},{"id":140,"name":"Web Design","parent_id":127},{"id":141,"name":"Golf","parent_id":77},{"id":142,"name":"English Learning","parent_id":116},{"id":143,"name":"Programming","parent_id":127},{"id":144,"name":"Personal Finance","parent_id":67},{"id":145,"name":"Parenting","parent_id":132},{"id":146,"name":"LGBTQ","parent_id":122},{"id":147,"name":"SEO","parent_id":97},{"id":148,"name":"American History","parent_id":125},{"id":149,"name":"Venture Capital","parent_id":93},{"id":138,"name":"Movie","parent_id":68},{"id":150,"name":"Chinese History","parent_id":125},{"id":151,"name":"Locally Focused","parent_id":67},{"id":154,"name":"San Francisco Bay Area","parent_id":152},{"id":155,"name":"Denver","parent_id":152},{"id":157,"name":"Startup","parent_id":93},{"id":158,"name":"NFL","parent_id":78},{"id":159,"name":"Harry Potter","parent_id":68},{"id":162,"name":"Game of Thrones","parent_id":68},{"id":165,"name":"Storytelling","parent_id":122},{"id":166,"name":"YouTube","parent_id":68},{"id":83,"name":"Other Games","parent_id":82},{"id":84,"name":"Automotive","parent_id":82},{"id":85,"name":"Video Games","parent_id":82},{"id":86,"name":"Hobbies","parent_id":82},{"id":87,"name":"Aviation","parent_id":82},{"id":152,"name":"United States","parent_id":151},{"id":156,"name":"China","parent_id":151},{"id":160,"name":"Star Wars","parent_id":68},{"id":163,"name":"AI & Data Science","parent_id":127},{"id":67,"name":"Podcasts","parent_id":null},{"id":68,"name":"TV & Film","parent_id":67},{"id":69,"name":"Religion & Spirituality","parent_id":67},{"id":70,"name":"Spirituality","parent_id":69},{"id":71,"name":"Islam","parent_id":69},{"id":72,"name":"Buddhism","parent_id":69},{"id":73,"name":"Judaism","parent_id":69},{"id":74,"name":"Other","parent_id":69},{"id":75,"name":"Christianity","parent_id":69},{"id":76,"name":"Hinduism","parent_id":69},{"id":77,"name":"Sports & Recreation","parent_id":67},{"id":78,"name":"Professional","parent_id":77},{"id":79,"name":"Outdoor","parent_id":77},{"id":80,"name":"College & High School","parent_id":77},{"id":81,"name":"Amateur","parent_id":77},{"id":82,"name":"Games & Hobbies","parent_id":67},{"id":88,"name":"Health","parent_id":67},{"id":89,"name":"Fitness & Nutrition","parent_id":88},{"id":90,"name":"Self-Help","parent_id":88},{"id":91,"name":"Alternative Health","parent_id":88},{"id":92,"name":"Sexuality","parent_id":88},{"id":93,"name":"Business","parent_id":67},{"id":94,"name":"Careers","parent_id":93},{"id":95,"name":"Business News","parent_id":93},{"id":96,"name":"Shopping","parent_id":93},{"id":97,"name":"Management & Marketing","parent_id":93},{"id":98,"name":"Investing","parent_id":93},{"id":99,"name":"News & Politics","parent_id":67},{"id":100,"name":"Arts","parent_id":67},{"id":101,"name":"Performing Arts","parent_id":100},{"id":102,"name":"Food","parent_id":100},{"id":103,"name":"Visual Arts","parent_id":100},{"id":104,"name":"Literature","parent_id":100},{"id":105,"name":"Design","parent_id":100},{"id":106,"name":"Fashion & Beauty","parent_id":100},{"id":107,"name":"Science & Medicine","parent_id":67},{"id":108,"name":"Social Sciences","parent_id":107},{"id":109,"name":"Medicine","parent_id":107},{"id":110,"name":"Natural Sciences","parent_id":107},{"id":111,"name":"Education","parent_id":67},{"id":112,"name":"Educational Technology","parent_id":111},{"id":113,"name":"Higher Education","parent_id":111},{"id":114,"name":"K-12","parent_id":111},{"id":115,"name":"Training","parent_id":111},{"id":116,"name":"Language Courses","parent_id":111},{"id":117,"name":"Government & Organizations","parent_id":67},{"id":118,"name":"Local","parent_id":117},{"id":136,"name":"Crypto & Blockchain","parent_id":127},{"id":135,"name":"True Crime","parent_id":122},{"id":119,"name":"Non-Profit","parent_id":117},{"id":120,"name":"Regional","parent_id":117},{"id":121,"name":"National","parent_id":117},{"id":122,"name":"Society & Culture","parent_id":67},{"id":123,"name":"Places & Travel","parent_id":122},{"id":124,"name":"Personal Journals","parent_id":122},{"id":126,"name":"Philosophy","parent_id":122},{"id":128,"name":"Software How-To","parent_id":127},{"id":129,"name":"Podcasting","parent_id":127},{"id":130,"name":"Gadgets","parent_id":127},{"id":131,"name":"Tech News","parent_id":127},{"id":132,"name":"Kids & Family","parent_id":67},{"id":133,"name":"Comedy","parent_id":67},{"id":134,"name":"Music","parent_id":67},{"id":153,"name":"New York","parent_id":152},{"id":161,"name":"Star Trek","parent_id":68},{"id":164,"name":"Apple","parent_id":127},{"id":125,"name":"History","parent_id":122},{"id":137,"name":"NBA","parent_id":78},{"id":127,"name":"Technology","parent_id":67},{"id":167,"name":"Audio Drama","parent_id":122},{"id":168,"name":"Fiction","parent_id":122},{"id":169,"name":"Sales","parent_id":93}]}')},39:function(e,t,a){e.exports=a(68)},44:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(33),r=a.n(i),l=(a(44),a(8)),s=a(9),c=a(11),m=a(10),d=a(12),p=(a(20),a(14)),u=a.n(p),E=a(35),g=a(6),v=a(13),h=a(69),f=a(70),_=a(71),P=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).getEpisodes=function(){var e=a.props.match.params.id,t=encodeURIComponent(e),n=a.props.time||60;return u.a.get("https://listen-api.listennotes.com/api/v2/search?q=".concat(t,"&sort_by_date=1&type=episode&len_max=").concat(n,"&language=English&safe_mode=0"),{headers:{"X-ListenAPI-Key":"f92e4a4b6c304ce4b3710775385e3efb"}}).then((function(e){console.log(e.data.results),a.setState({episodeInfo:e.data.results}),a.convertMinutes()})).catch((function(e){return console.error(e)}))},a.convertMinutes=function(){a.setState({minutes:[a.state.episodeInfo.audio_length_sec/60]})},a.showEpisodeNames=function(){return console.log("Showing episodes"),console.log(a.state.episodeInfo),a.state.episodeInfo.map((function(e,t){return console.log(e),o.a.createElement("li",{key:t},o.a.createElement("a",{className:"pod-names",href:e.audio},e.title_original," "),o.a.createElement("hr",null))}))},a.state={episodeInfo:[],minutes:[]},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getEpisodes()}},{key:"render",value:function(){return console.log(this.props.match.params.id),console.log(this.props),console.log(this.state.commuteTime),o.a.createElement(o.a.Fragment,null,o.a.createElement(h.a,{fluid:!0,className:"font"},">",o.a.createElement(f.a,null,o.a.createElement(_.a,null,o.a.createElement("h4",{className:"pod-header"},"Episodes You Can Finish During Your Daily Commute"))),o.a.createElement(f.a,null,o.a.createElement(_.a,null,o.a.createElement("ul",null,this.showEpisodeNames())))))}}]),t}(n.Component),S=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).name=function(){return a.state.podcastName.find((function(e){return console.log(e),a.props.match.params.id===e}))},a.pic=function(){var e=a.state.podcastName.findIndex((function(e){return e===a.props.match.params.id}));return console.log(e),a.state.podcastPic[e]},a.des=function(){var e=a.state.podcastName.findIndex((function(e){return e===a.props.match.params.id}));return console.log(e),a.state.podcastDescription[e]},a.link=function(){var e=a.state.podcastName.findIndex((function(e){return e===a.props.match.params.id}));return console.log(e),a.state.podcastLink[e]},a.id=function(){var e=a.state.podcastName.findIndex((function(e){return e===a.props.match.params.id}));return console.log(e),a.state.podcastId[e]},a.setCommuteTime=function(e){e.preventDefault(),a.setState({commuteTime:e.target.value,commuteSeconds:60*a.state.commuteTime},(function(){console.log(a.state)}));return o.a.createElement(P,{commuteTime:a.state.commuteTime})},a.state={podcastName:e.podcastName,podcastPic:e.podcastPic,podcast:e.podcast,index:0,commuteTime:0,commuteSeconds:0,podcastDescription:e.podcastDescription,podcastLink:e.podcastLink,podcastId:e.podcastId,podcastEpisodeName:"",podcastEpisodeId:""},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return console.log(this.props.match.params.id),console.log(this.props),o.a.createElement(o.a.Fragment,null,o.a.createElement(h.a,{fluid:!0,className:"font"},o.a.createElement(f.a,null,o.a.createElement(_.a,{className:"pic-detail"},o.a.createElement("img",{src:this.pic(),alt:""}))),o.a.createElement(f.a,null,o.a.createElement(_.a,null,o.a.createElement("h3",null,o.a.createElement("a",{className:"pod-header",href:this.link()},this.name())))),o.a.createElement(f.a,null,o.a.createElement(_.a,{className:"description"},this.des(),o.a.createElement("hr",null))),o.a.createElement(f.a,null,o.a.createElement(_.a,{className:"commute-form"},o.a.createElement("form",null,o.a.createElement("h5",null,"Want Commute friendly episodes?"),o.a.createElement("h6",null,"Daily Commute Time (in Minutes):"),o.a.createElement("input",{type:"number",value:this.props.time,onChange:this.setCommuteTime}),o.a.createElement(g.b,{className:"sub-button",to:"/podcasts/episodes/".concat(this.name())},o.a.createElement("button",{onClick:function(){return e.props.sendCommute(e.state.commuteTime)},type:"submit"},"Submit"))))),o.a.createElement(v.a,{exact:!0,path:"/podcasts/episodes/:id",component:function(t){return o.a.createElement(P,Object.assign({},t,{commuteTime:e.state.commuteTime}))}})))}}]),t}(n.Component),N=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).showPodcastNames=function(){return console.log("Showing podcasts"),console.log(a.state.podcastsNames),a.state.podcastsNames.map((function(e,t){return console.log(e),o.a.createElement("li",{key:t},o.a.createElement(g.b,{className:"pod-names",to:"/podcasts/".concat(e)},e),o.a.createElement("hr",null))}))},a.state={podcastsNames:e.podcastNamesProp,podcastPics:e.podcastPicsProp,commuteTime:0,commuteSeconds:0,podcastsIds:e.podcastIdsProps,podcastEpisodes:[]},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return console.log(this.state.podcastsNames),console.log(this.props),o.a.createElement(o.a.Fragment,null,o.a.createElement(h.a,{className:"font",fluid:!0},o.a.createElement(f.a,{className:"pod-row"},o.a.createElement(_.a,null),o.a.createElement(_.a,{xs:6},o.a.createElement("h3",{className:"pod-header"},"Top Rated Podcasts")),o.a.createElement(_.a,null)),o.a.createElement(f.a,null,o.a.createElement(_.a,null,o.a.createElement("ul",null,this.showPodcastNames()))),o.a.createElement(v.a,{exact:!0,path:"/podcasts/:id",component:function(t){return o.a.createElement(S,Object.assign({},t,{podcastName:e.state.podcastsNames}))}})))}}]),t}(n.Component),y=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={quote:null,podcast:"",max:1,min:0,offset:0,allGenres:E.genres,allGenreIds:[],genreId:0,genrePods:[],genrePodIds:[],genrePodNames:[],genrePodPics:[],genrePodLinks:[],genrePodDescription:[],genreName:"",landing:!0,time:60},a.getGenreIds=function(){var e=[];a.state.allGenres.map((function(t){return e.push(t.id)})),a.setState({allGenreIds:e})},a.sendCommute=function(e){console.log(e),a.setState({time:e})},a.kanyeQuote=function(){return a.state.quote?o.a.createElement("p",null,'Kanye quote of the day: "',a.state.quote,'"'):o.a.createElement("div",null)},a.getGenre=function(){u.a.get("https://listen-api.listennotes.com/api/v2/best_podcasts?genre_id=".concat(a.state.genreId,"&page=1&region=us&safe_mode=0"),{headers:{"X-ListenAPI-Key":"f92e4a4b6c304ce4b3710775385e3efb"}}).then((function(e){a.setState({genrePods:e.data.podcasts}),a.getSearchedGenreIds(),a.getSearchedGenreNames(),a.getSearchedGenrePics(),a.getSearchedGenreDescriptions(),a.getSearchedGenreLinks(),console.log(e)})).catch((function(e){return console.error(e)}))},a.getSearchedGenreIds=function(){console.log(a.state.genrePods);var e=a.state.genrePods.map((function(e){return e.id}));a.setState({genrePodIds:e})},a.getSearchedGenreNames=function(){console.log(a.state.genrePods);var e=a.state.genrePods.map((function(e){return e.title}));a.setState({genrePodNames:e},(function(){console.log(e)}))},a.getSearchedGenreLinks=function(){console.log(a.state.genrePods);var e=a.state.genrePods.map((function(e){return e.listennotes_url}));a.setState({genrePodLinks:e},(function(){console.log(e)}))},a.getSearchedGenreDescriptions=function(){console.log(a.state.genrePods);var e=a.state.genrePods.map((function(e){return e.description}));a.setState({genrePodDescription:e},(function(){console.log(e)}))},a.getSearchedGenrePics=function(){console.log(a.state.genrePods);var e=a.state.genrePods.map((function(e){return e.image}));a.setState({genrePodPics:e},(function(){console.log(e)}))},a.setGenre=function(e){e.preventDefault(),a.setState({genreId:e.target.value},(function(){a.getGenre()}))},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){this.getGenreIds()}},{key:"componentDidMount",value:function(){var e=this;u.a.get("https://api.kanye.rest").then((function(t){console.log(t),e.setState({quote:t.data.quote})}))}},{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement(h.a,{fluid:!0,className:"App-header "+(this.state.landing?"new-height":"")},o.a.createElement(f.a,null,o.a.createElement(_.a,null,o.a.createElement(g.b,{to:"/"},o.a.createElement("img",{className:"logo",src:"./images/logo.png",alt:"My Commute Pods"}))),o.a.createElement(_.a,{xs:6},o.a.createElement("form",{onSubmit:"/podcasts"},o.a.createElement("div",null,o.a.createElement("label",{className:"pick-genre"},o.a.createElement("h4",null,"Pick a Genre")),o.a.createElement("select",{className:"select-form",name:"genre",onChange:this.setGenre},o.a.createElement("option",{value:"139",selected:!0},"VR & AR"),o.a.createElement("option",{value:"140"},"Web Design"),o.a.createElement("option",{value:"141"},"Golf"),o.a.createElement("option",{value:"142"},"English Learning"),o.a.createElement("option",{value:"143"},"Programming"),o.a.createElement("option",{value:"144"},"Personal Finance"),o.a.createElement("option",{value:"145"},"Parenting"),o.a.createElement("option",{value:"146"},"LGBTQ"),o.a.createElement("option",{value:"147"},"SEO"),o.a.createElement("option",{value:"148"},"American History"),o.a.createElement("option",{value:"149"},"Venture Capital"),o.a.createElement("option",{value:"138"},"Movie"),o.a.createElement("option",{value:"150"},"Chinese History"),o.a.createElement("option",{value:"151"},"Locally Focused"),o.a.createElement("option",{value:"154"},"San Francisco Bay Area"),o.a.createElement("option",{value:"155"},"Denver"),o.a.createElement("option",{value:"157"},"Startup"),o.a.createElement("option",{value:"158"},"NFL"),o.a.createElement("option",{value:"159"},"Harry Potter"),o.a.createElement("option",{value:"162"},"Game of Thrones"),o.a.createElement("option",{value:"165"},"Storytelling"),o.a.createElement("option",{value:"166"},"YouTube"),o.a.createElement("option",{value:"83"},"Other Games"),o.a.createElement("option",{value:"84"},"Automotive"),o.a.createElement("option",{value:"85"},"Video Games"),o.a.createElement("option",{value:"86"},"Hobbies"),o.a.createElement("option",{value:"87"},"Aviation"),o.a.createElement("option",{value:"152"},"United States"),o.a.createElement("option",{value:"156"},"China"),o.a.createElement("option",{value:"160"},"Star Wars"),o.a.createElement("option",{value:"163"},"AI & Data Science"),o.a.createElement("option",{value:"67"},"Podcasts"),o.a.createElement("option",{value:"68"},"TV & Film"),o.a.createElement("option",{value:"69"},"Hinduism"),o.a.createElement("option",{value:"70"},"Christianity"),o.a.createElement("option",{value:"71"},"Other"),o.a.createElement("option",{value:"72"},"Judaism"),o.a.createElement("option",{value:"73"},"Buddhism"),o.a.createElement("option",{value:"74"},"Islam"),o.a.createElement("option",{value:"75"},"Spirituality"),o.a.createElement("option",{value:"76"},"Religion & Spirituality"),o.a.createElement("option",{value:"77"},"Sports & Recreation"),o.a.createElement("option",{value:"78"},"Professional"),o.a.createElement("option",{value:"79"},"Outdoor"),o.a.createElement("option",{value:"80"},"College & High School"),o.a.createElement("option",{value:"81"},"Amateur"),o.a.createElement("option",{value:"82"},"Games & Hobbies"),o.a.createElement("option",{value:"88"},"Health"),o.a.createElement("option",{value:"89"},"Fitness & Nutrition"),o.a.createElement("option",{value:"90"},"Self-Help"),o.a.createElement("option",{value:"91"},"Alternative Health"),o.a.createElement("option",{value:"92"},"Sexuality"),o.a.createElement("option",{value:"93"},"Business"),o.a.createElement("option",{value:"94"},"Careers"),o.a.createElement("option",{value:"95"},"Business News"),o.a.createElement("option",{value:"96"},"Shopping"),o.a.createElement("option",{value:"97"},"Management & Marketing"),o.a.createElement("option",{value:"98"},"Investing"),o.a.createElement("option",{value:"99"},"News & Politics"),o.a.createElement("option",{value:"100"},"Arts"),o.a.createElement("option",{value:"101"},"Performing Arts"),o.a.createElement("option",{value:"102"},"Food"),o.a.createElement("option",{value:"103"},"Visual Arts"),o.a.createElement("option",{value:"104"},"Literature"),o.a.createElement("option",{value:"105"},"Design"),o.a.createElement("option",{value:"106"},"Fashion & Beauty"),o.a.createElement("option",{value:"107"},"Science & Medicine"),o.a.createElement("option",{value:"108"},"Social Sciences"),o.a.createElement("option",{value:"109"},"Medicine"),o.a.createElement("option",{value:"110"},"Natural Sciences"),o.a.createElement("option",{value:"111"},"Education"),o.a.createElement("option",{value:"112"},"Educational Technology"),o.a.createElement("option",{value:"113"},"Higher Education"),o.a.createElement("option",{value:"114"},"K-12"),o.a.createElement("option",{value:"115"},"Training"),o.a.createElement("option",{value:"116"},"Language Courses"),o.a.createElement("option",{value:"117"},"Government & Organizations"),o.a.createElement("option",{value:"118"},"Local"),o.a.createElement("option",{value:"136"},"Crypto & Blockchain"),o.a.createElement("option",{value:"135"},"True Crime"),o.a.createElement("option",{value:"119"},"Non-Profit"),o.a.createElement("option",{value:"120"},"Regional"),o.a.createElement("option",{value:"121"},"National"),o.a.createElement("option",{value:"122"},"Society & Culture"),o.a.createElement("option",{value:"123"},"Places & Travel"),o.a.createElement("option",{value:"124"},"Personal Journals"),o.a.createElement("option",{value:"126"},"Philosophy"),o.a.createElement("option",{value:"128"},"Software How-To"),o.a.createElement("option",{value:"129"},"Podcasting"),o.a.createElement("option",{value:"130"},"Gadgets"),o.a.createElement("option",{value:"131"},"Tech News"),o.a.createElement("option",{value:"132"},"TKids & Family"),o.a.createElement("option",{value:"133"},"Comedy"),o.a.createElement("option",{value:"134"},"Music"),o.a.createElement("option",{value:"153"},"New York"),o.a.createElement("option",{value:"161"},"Star Trek"),o.a.createElement("option",{value:"164"},"Apple"),o.a.createElement("option",{value:"125"},"History"),o.a.createElement("option",{value:"137"},"NBA"),o.a.createElement("option",{value:"127"},"Technology"),o.a.createElement("option",{value:"167"},"Audio Drama"),o.a.createElement("option",{value:"168"},"Fiction"),o.a.createElement("option",{value:"169"},"Sales"))),o.a.createElement(g.b,{to:"/podcasts",className:"button-align"},o.a.createElement("button",{className:"button-color",onClick:function(){return e.setState({landing:!1})},type:"submit"},"Search")))),o.a.createElement(_.a,{className:"kanye"},this.kanyeQuote()))),o.a.createElement("div",null,o.a.createElement(v.c,null,o.a.createElement(v.a,{exact:!0,path:"/podcasts",component:function(t){return o.a.createElement(N,Object.assign({},t,{podcastNamesProp:e.state.genrePodNames,podcastPicsProp:e.state.genrePodPics,podcastsProp:e.state.genrePods}))}}),o.a.createElement(v.a,{exact:!0,path:"/podcasts/episodes/:id",component:function(t){return o.a.createElement(P,Object.assign({},t,{time:e.state.time}))}}),o.a.createElement(v.a,{exact:!0,path:"/podcasts/:id",component:function(t){return o.a.createElement(S,Object.assign({},t,{sendCommute:e.sendCommute,podcastId:e.state.genrePodIds,podcastLink:e.state.genrePodLinks,podcastName:e.state.genrePodNames,podcastPic:e.state.genrePodPics,podcastDescription:e.state.genrePodDescription}))}}),o.a.createElement(v.a,{exact:!0,path:"/"}))))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(67);r.a.render(o.a.createElement(g.a,null,o.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[39,1,2]]]);
//# sourceMappingURL=main.a2d11a56.chunk.js.map