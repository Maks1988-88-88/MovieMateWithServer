(window.webpackJsonp=window.webpackJsonp||[]).push([[0],Array(22).concat([function(e,t,a){e.exports=a.p+"static/media/clapperboard.2e065d52.eeab5a51.svg"},function(e,t,a){e.exports=a.p+"static/media/css-3.5c5290a5.svg"},function(e,t,a){e.exports=a.p+"static/media/html5.8b5d045a.svg"},function(e,t,a){e.exports=a.p+"static/media/javascript.08120d91.svg"},function(e,t,a){e.exports=a.p+"static/media/react.5e6a502e.svg"},function(e,t,a){e.exports=a.p+"static/media/react-router.11998540.svg"},function(e,t,a){e.exports=a.p+"static/media/redux.b0c820b5.svg"},function(e,t,a){e.exports=a.p+"static/media/webpack-icon.eb48a824.svg"},function(e,t,a){e.exports=a(72)},,,,,function(e,t,a){},,,,function(e,t,a){},,function(e,t,a){},,,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),i=a.n(c);a(35),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=a(4),o=a(1),l=a(2),m=a(5),u=a(3),p=a(6),h=a(9),d=a.n(h),_=(a(39),a(41),function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.items,a=e.headerLogo;return console.log(t),r.a.createElement("header",{className:"Header"},r.a.createElement("h1",{className:"Header__logo"},r.a.createElement(s.b,{to:"/"},a)),r.a.createElement("ul",{className:"Navigation"},t.map(function(e){return r.a.createElement("li",{key:e.path,className:"Navigation__item"},r.a.createElement(s.b,{className:"Navigation__link",to:e.path},e.text))})))}}]),t}(r.a.Component)),b=a(15),v=(a(48),a(50),function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.tittle,a=e.descr,n=e.rating,c=e.onClickAddWatchlist,i=e.img,s=e.release_date;return r.a.createElement("div",{className:"MovieCard"},r.a.createElement("div",null,r.a.createElement("span",{className:"MovieInfo__rating"},n),r.a.createElement("img",{src:i,alt:"img",className:"MovieCard__poster"}),r.a.createElement("h2",{className:"MovieInfo__title"},t),r.a.createElement("p",{className:"MovieInfo__descr"},a," "),r.a.createElement("p",{className:"MovieInfo__release"},"Release date: ",s)),r.a.createElement("button",{className:"MovieCard__btn ",onClick:c},"+"))}}]),t}(r.a.Component)),f=(a(52),function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.children;return r.a.createElement("div",{className:"MovieList"},e)}}]),t}(r.a.Component)),E=a(21),g=(a(54),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={InputValues:""},a._searchValues=function(e){var t=e.target.name;a.props.Categories__btn(t)},a._searchInputValues=function(e){var t=e.target.value,n=e.target.name;a.setState(Object(E.a)({},n,t))},a._searchInputValuesonSubmit=function(e){e.preventDefault();var t=a.state.InputValues;a.props.SearchForm(t),a.setState({InputValues:""})},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state.InputValues,t=this.props.children;return r.a.createElement("div",{className:"App__sidebar"},r.a.createElement("form",{className:"SearchForm",onSubmit:this._searchInputValuesonSubmit},r.a.createElement("input",{type:"text",className:"SearchForm__input",name:"InputValues",value:e,onChange:this._searchInputValues,placeholder:"Search for movies by name..."}),r.a.createElement("button",{className:"SearchForm__btn",type:"submit"},"search")),r.a.createElement("div",{className:"SearchCategories"},r.a.createElement("button",{className:"SearchCategories__btn SearchCategories__btn--active",name:"popular",onClick:this._searchValues},"popular"),r.a.createElement("button",{className:"SearchCategories__btn SearchCategories__btn--active",name:"top_rated",onClick:this._searchValues},"top rated"),r.a.createElement("button",{className:"SearchCategories__btn SearchCategories__btn--active",name:"upcoming",onClick:this._searchValues},"upcoming")),r.a.createElement("div",{className:"Watchlist"},r.a.createElement("h2",{className:"Watchlist__title"},"Watchlist"),t))}}]),t}(r.a.Component)),N=(a(56),function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.rating,a=e.img,n=e.tittle,c=e.release_date,i=e.onClick;return r.a.createElement("div",{className:"WatchlistCard"},r.a.createElement("img",{className:"WatchlistCard__img",src:a,alt:"img"}),r.a.createElement("div",{className:"WatchlistCard__body"},r.a.createElement("h3",{className:"WatchlistCard__title"},n),r.a.createElement("p",{className:"WatchlistCard__release"},"Released:",c),r.a.createElement("p",{className:"WatchlistCard__rating"},"Rating:",t),r.a.createElement("button",{className:"WatchlistCard__btn",onClick:i},"-")))}}]),t}(n.Component)),k=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={post:[],watchList:JSON.parse(localStorage.getItem("movie-mate-watchlist"))||[],checkId:[]},a.SearchCategories__btn=function(e){fetch("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=680d1c453082be4c031bb516ed6208df&page=1&query=1&include_adult=false")).then(function(e){if(e.ok)return e.json();throw new Error("Error"+e.statusText)}).then(function(e){var t=e.results.map(function(e){return{id:e.id,release_date:e.release_date.slice(0,4),descr:e.overview.slice(0,100)+"...",tittle:e.title,rating:e.vote_average,poster_path:"https://image.tmdb.org/t/p/w300_and_h450_bestv2"+e.poster_path}});a.setState({post:t})}).catch(function(e){return console.error(e)})},a.SearchForm__input=function(e){fetch("https://api.themoviedb.org/3/search/movie?api_key=680d1c453082be4c031bb516ed6208df&page=1&query=".concat(e,"&include_adult=false")).then(function(e){if(e.ok)return e.json();throw new Error("Error"+e.statusText)}).then(function(e){var t=e.results.map(function(e){return{id:e.id,release_date:e.release_date.slice(0,4),descr:e.overview.slice(0,100)+"...",tittle:e.title,rating:e.vote_average,poster_path:"https://image.tmdb.org/t/p/w300_and_h450_bestv2"+e.poster_path}});a.setState({post:t})}).catch(function(e){return console.error(e)})},a.onAddWatchlist=function(e,t,n,r,c){var i={id:e,rating:t,poster_path:n,tittle:r,release_date:c},s=e;a.setState({checkId:Object(b.a)(a.state.checkId).concat([s])}),a.state.checkId.includes(e)||a.setState({watchList:Object(b.a)(a.state.watchList).concat([i])})},a.onDeleteWatchlist=function(e){a.setState({watchList:a.state.watchList.filter(function(t){return t.id!==e}),checkId:a.state.checkId.filter(function(t){return t!==e})})},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){var e=this;fetch("https://api.themoviedb.org/3/movie/popular?api_key=680d1c453082be4c031bb516ed6208df&page=1&query=1&include_adult=false").then(function(e){if(e.ok)return e.json();throw new Error("Error"+e.statusText)}).then(function(t){var a=t.results.map(function(e){return{id:e.id,release_date:e.release_date.slice(0,4),descr:e.overview.slice(0,100)+"...",tittle:e.title,rating:e.vote_average,poster_path:"https://image.tmdb.org/t/p/w300_and_h450_bestv2"+e.poster_path}});e.setState({post:a})}).catch(function(e){return console.error(e)})}},{key:"render",value:function(){var e=this,t=this.state,a=t.post,n=t.watchList;return localStorage.setItem("movie-mate-watchlist",JSON.stringify(this.state.watchList)),a.length>0?r.a.createElement("div",{className:"App__body"},r.a.createElement(g,{Categories__btn:this.SearchCategories__btn,SearchForm:this.SearchForm__input},n.map(function(t){return r.a.createElement(N,{img:t.poster_path,tittle:t.tittle,rating:t.rating,key:t.id,release_date:t.release_date,onClick:function(){e.onDeleteWatchlist(t.id)}})})),r.a.createElement(f,null,a.map(function(t){return r.a.createElement(v,{img:t.poster_path,tittle:t.tittle,descr:t.descr,rating:t.rating,key:t.id,release_date:t.release_date,onClickAddWatchlist:function(){e.onAddWatchlist(t.id,t.rating,t.poster_path,t.tittle,t.release_date)}})}))):r.a.createElement("div",{className:"App__body"},r.a.createElement(g,{Categories__btn:this.SearchCategories__btn,SearchForm:this.SearchForm__input},n.map(function(t){return r.a.createElement(N,{img:t.poster_path,tittle:t.tittle,rating:t.rating,key:t.id,release_date:t.release_date,onClick:function(){e.onDeleteWatchlist(t.id)}})})),r.a.createElement(f,null,r.a.createElement("p",{className:"MovieCardCollection__msg"},"sorry, we did't find anything")))}}]),t}(r.a.Component),y=a(22),C=a.n(y),w=(a(58),function(){return r.a.createElement("div",{className:"Home"},r.a.createElement("img",{className:"Home__icon",src:C.a,alt:"home icon"}),r.a.createElement("h1",{className:"Home__title"},"Welcome to Movie Mate"),r.a.createElement("p",{className:"Home__text"},"This is a single page application that lets you manage all kinds of movies."),r.a.createElement("p",{className:"Home__text"},"If you wish to learn more about Movie Mate visit"," ",r.a.createElement(s.b,{to:"/about",className:"Home__link"},"About Page"),"."),r.a.createElement("p",{className:"Home__text"},"Or start browsing right now in"," ",r.a.createElement(s.b,{to:"/movies",className:"Home__link"},"Movie Gallery"),"."))}),S=a(12),j=(a(60),a(62),function(e){var t=e.items,a=e.currentPath;return r.a.createElement("nav",{className:"AboutNav"},t.map(function(e,t){return r.a.createElement(s.c,{to:"".concat(a).concat(e.path),className:"AboutNav__link",activeClassName:"AboutNav__link--active",key:t},e.text)}))});j.defaultProps={currentPath:""};var O=j,x=(a(64),[{id:d()(),name:"Mango",photo:"https://placeimg.com/400/400/tech",position:"Front-end developer"},{id:d()(),name:"Ajax",photo:"https://placeimg.com/500/500/tech",position:"Back-end developer"},{id:d()(),name:"Poly",photo:"https://placeimg.com/450/450/tech",position:"Project Manager"}]),M=(a(66),function(e){var t=e.name,a=e.photo,n=e.position;return r.a.createElement("div",{className:"MemberCard"},r.a.createElement("img",{className:"MemberCard__img",src:a,alt:t}),r.a.createElement("div",{className:"MemberCard__info"},r.a.createElement("h2",{className:"MemberCard__name"},t),r.a.createElement("p",{className:"MemberCard__pos"},n)))}),I=function(e,t){return e.map(function(e){return{path:"".concat(t,"/").concat(e.id),name:e.name,photo:e.photo,position:e.position}})},W=function(e){var t=e.match;console.log(I(x,t.path));var a=I(x,t.path);return r.a.createElement("div",{className:"TeamList"},r.a.createElement("ul",{className:"TeamList__members"},a.map(function(e,t){return r.a.createElement("li",{key:t},r.a.createElement(s.c,{to:e.path,className:"TeamList__members__link",activeClassName:"TeamList__members__link--active",key:t},e.name))})),r.a.createElement("div",{className:"TeamList__card"},r.a.createElement(S.b,{path:"".concat(t.path,"/:userID"),render:function(e){var t,a=e.match.params.userID,n=(t=a,x.find(function(e){return e.id===t}));return n?r.a.createElement(M,Object.assign({},n,e)):r.a.createElement("p",null)}})))},A=(a(68),function(e){return r.a.createElement("table",{className:"CareerInfo"},r.a.createElement("caption",null,"Currently we are looking for"),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Front-end developer"),r.a.createElement("td",null,r.a.createElement("ul",null,r.a.createElement("li",null,"- Strong experience with HTML5, CSS3"),r.a.createElement("li",null,"- Deep knowledge of JavaScript"),r.a.createElement("li",null,"- Experience in Responsive Web Design"),r.a.createElement("li",null,"- Experience with Git"),r.a.createElement("li",null,"- SFluent in English both spoken and written")))),r.a.createElement("tr",null,r.a.createElement("td",null,"Back-end developer"),r.a.createElement("td",null,r.a.createElement("ul",null,r.a.createElement("li",null,"- Understanding accessibility and security compliance"),r.a.createElement("li",null,"- User authentication and authorization between multiple systems and environments"),r.a.createElement("li",null,"- Integration of multiple data sources and databases into one system"),r.a.createElement("li",null,"- Data migration, transformation, and scripting"),r.a.createElement("li",null,"- Setup and administration of backups"),r.a.createElement("li",null,"- Proficient understanding of code versioning tools, such as Git"),r.a.createElement("li",null,"- Fluent in English both spoken and written"))))))}),L=(a(70),a(23)),V=a.n(L),F=a(24),T=a.n(F),H=a(25),P=a.n(H),D=a(26),J=a.n(D),q=a(27),B=a.n(q),R=a(28),G=a.n(R),U=a(29),z=a.n(U),$=[{path:T.a,id:"html5"},{path:V.a,id:"css3"},{path:P.a,id:"javascript"},{path:J.a,id:"react"},{path:B.a,id:"reactrouter"},{path:G.a,id:"redux"},{path:z.a,id:"webpack"}],K=function(e){return r.a.createElement("ul",{className:"StackList"},$.map(function(e){return r.a.createElement("li",{className:"StackList_item",key:e.id},r.a.createElement("img",{className:"StackList_icon",src:e.path,alt:e.id}))}))},Q=[{path:"/team",text:"The Team"},{path:"/stack",text:"Our Stack"},{path:"/career",text:"Career"}],X=function(e){return console.log(e.match.path),r.a.createElement("div",{className:"AboutPage"},r.a.createElement("div",{className:"AboutPage__nav"},r.a.createElement(O,{items:Q,currentPath:e.match.path})),r.a.createElement("div",{className:"AboutPage__body"},r.a.createElement(S.d,null,r.a.createElement(S.b,{path:"".concat(e.match.path,"/team"),component:W}),r.a.createElement(S.b,{path:"".concat(e.match.path,"/stack"),component:K}),r.a.createElement(S.b,{path:"".concat(e.match.path,"/career"),component:A}))))},Y=[{path:"/about",text:"ABOUT"},{path:"/movies",text:"MOVIES"},{path:"/",text:"HOME"}],Z=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App",id:d()()},r.a.createElement(_,{headerLogo:"Movie Mate",items:Y}),r.a.createElement(S.d,null,r.a.createElement(S.b,{exact:!0,path:"/",component:w})," />",r.a.createElement(S.b,{path:"/movies",component:k}),r.a.createElement(S.b,{path:"/about",component:X}),r.a.createElement(S.a,{to:"/"})))}}]),t}(r.a.Component),ee=function(){return r.a.createElement(s.a,{basename:"/MovieMateWithServer/build"},r.a.createElement(Z,null))},te=document.querySelector("#root");i.a.render(r.a.createElement(ee,null),te),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}]),[[30,2,1]]]);
//# sourceMappingURL=main.6c021683.chunk.js.map