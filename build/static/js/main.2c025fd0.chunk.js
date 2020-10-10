(this.webpackJsonpmovierate=this.webpackJsonpmovierate||[]).push([[0],{24:function(e,t,a){e.exports=a(41)},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(20),r=a.n(l),m=a(6),o=a(2),i=a(7),s=a(10),d=a(1),u=function(e,t){switch(t.type){case"ADD_MOVIE_TO_WATCHLIST":return Object(d.a)(Object(d.a)({},e),{},{watchlist:[t.payload].concat(Object(s.a)(e.watchlist))});case"REMOVE_MOVIE_FROM_WATCHLIST":return Object(d.a)(Object(d.a)({},e),{},{watchlist:e.watchlist.filter((function(e){return e.id!==t.payload}))});case"ADD_MOVIE_TO_WATCHED":return Object(d.a)(Object(d.a)({},e),{},{watchlist:e.watchlist.filter((function(e){return e.id!==t.payload.id})),watched:[t.payload].concat(Object(s.a)(e.watched))});case"REMOVE_MOVIE_FROM_WATCHED":return Object(d.a)(Object(d.a)({},e),{},{watched:e.watched.filter((function(e){return e.id!==t.payload}))});case"MOVE_TO_WATCHLIST":return Object(d.a)(Object(d.a)({},e),{},{watchlist:[t.payload].concat(Object(s.a)(e.watchlist)),watched:e.watched.filter((function(e){return e.id!==t.payload.id}))});case"ADD_COMMENT_TO_MOVIES":return console.log("payload",t.payload),Object(d.a)(Object(d.a)({},e),{},{comments:[t.payload].concat(Object(s.a)(e.comments))});default:return e}},E={watchlist:localStorage.getItem("watchlist")?JSON.parse(localStorage.getItem("watchlist")):[],watched:localStorage.getItem("watched")?JSON.parse(localStorage.getItem("watched")):[],comments:localStorage.getItem("comments")?JSON.parse(localStorage.getItem("comments")):[]},v=Object(n.createContext)(E),h=function(e){var t=Object(n.useReducer)(u,E),a=Object(i.a)(t,2),l=a[0],r=a[1];Object(n.useEffect)((function(){localStorage.setItem("watchlist",JSON.stringify(l.watchlist)),localStorage.setItem("watched",JSON.stringify(l.watched)),localStorage.setItem("comments",JSON.stringify(l.comments))}),[l]);return c.a.createElement(v.Provider,{value:{watchlist:l.watchlist,watched:l.watched,addMovieToWatchlist:function(e){r({type:"ADD_MOVIE_TO_WATCHLIST",payload:e})},removeMovieFromWatchlist:function(e){r({type:"REMOVE_MOVIE_FROM_WATCHLIST",payload:e})},addMovieToWatched:function(e){r({type:"ADD_MOVIE_TO_WATCHED",payload:e})},removeFromWatched:function(e){r({type:"REMOVE_MOVIE_FROM_WATCHED",payload:e})},moveToWatchlist:function(e){r({type:"MOVE_TO_WATCHLIST",payload:e})},addCommentToMovies:function(e){r({type:"ADD_COMMENT_TO_MOVIES",payload:e})}}},e.children)},f=function(){return c.a.createElement("header",null,c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"inner-content"},c.a.createElement("div",{className:"brand"},c.a.createElement(m.b,{to:"/"}," WatchList")),c.a.createElement("ul",{className:"nav-links"},c.a.createElement("li",null,c.a.createElement(m.b,{to:"/"},"WatchList")),c.a.createElement("li",null,c.a.createElement(m.b,{to:"/watched"},"Watched")),c.a.createElement("li",null,c.a.createElement(m.b,{to:"/add",className:"btn"},"Add"))))))},b=function(e){var t=e.type,a=e.movie,l=Object(n.useContext)(v),r=l.removeMovieFromWatchlist,o=l.addMovieToWatched,i=l.moveToWatchlist,s=l.removeFromWatched;return c.a.createElement("div",{className:"inner-card-controls"},"watchlist"===t&&c.a.createElement(c.a.Fragment,null,c.a.createElement("button",{className:"ctrl-btn",onClick:function(){return o(a)}},c.a.createElement("i",{className:"fa-fw far fa-eye"})),c.a.createElement("button",{className:"ctrl-btn",onClick:function(){return r(a.id)}},c.a.createElement("i",{className:"fa-fw fa fa-times"})),c.a.createElement("button",{className:"ctrl-btn"},c.a.createElement(m.b,{to:"/watchlist/".concat(a.id)},c.a.createElement("i",{className:"fa fa-info-circle"}," ")))),"watched"===t&&c.a.createElement(c.a.Fragment,null,c.a.createElement("button",{className:"ctrl-btn",onClick:function(){return i(a)}},c.a.createElement("i",{className:"fa-fw far fa-eye-slash"})),c.a.createElement("button",{className:"ctrl-btn",onClick:function(){return s(a.id)}},c.a.createElement("i",{className:"fa-fw fa fa-times","aria-hidden":"true"})),c.a.createElement("button",{className:"ctrl-btn"},c.a.createElement(m.b,{to:"/wacthed/".concat(a.id)},c.a.createElement("i",{className:"fa fa-info-circle","aria-hidden":"true"})))))},g=function(e){var t=e.movie,a=e.type;return c.a.createElement("div",{className:"movie-card"},c.a.createElement("div",{className:"overlay"}),t.poster_path?c.a.createElement("img",{src:"https://image.tmdb.org/t/p/w200".concat(t.poster_path),alt:"".concat(t.title," Poster")}):c.a.createElement("div",{className:"filler-poster"}),c.a.createElement(b,{type:a,movie:t}))},p=function(){var e=Object(n.useContext)(v).watchlist;return c.a.createElement("div",{className:"movie-page"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"header"},c.a.createElement("h1",{className:"heading"},"My Watchlist"),c.a.createElement("span",{className:"count-pill"},e.length," ",1===e.length?"Movie":"Movies")),e.length>0?c.a.createElement("div",{className:"movie-grid"},e.map((function(e){return c.a.createElement(g,{movie:e,key:e.id,type:"watchlist"})}))):c.a.createElement("h2",{className:"no-movies"},"No movies in your list! Add some!")))},N=function(){var e=Object(n.useContext)(v).watched;return c.a.createElement("div",{className:"movie-page"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"header"},c.a.createElement("h1",{className:"heading"},"Watched Movies"),c.a.createElement("span",{className:"count-pill"},e.length," ",1===e.length?"Movie":"Movies")),e.length>0?c.a.createElement("div",{className:"movie-grid"},e.map((function(e){return c.a.createElement(g,{movie:e,key:e.id,type:"watched"})}))):c.a.createElement("h2",{className:"no-movies"},"No movies in your list! Add some!")))},O=function(e){var t=e.movie,a=Object(n.useContext)(v),l=a.addMovieToWatchlist,r=a.addMovieToWatched,m=a.watchlist,o=a.watched,i=m.find((function(e){return e.id===t.id})),s=o.find((function(e){return e.id===t.id})),d=!!i||!!s,u=!!s;return c.a.createElement("div",{className:"result-card"},c.a.createElement("div",{className:"poster-wrapper"},t.poster_path?c.a.createElement("img",{src:"https://image.tmdb.org/t/p/w200".concat(t.poster_path),alt:"".concat(t.title," Poster")}):c.a.createElement("div",{className:"filler-poster"})),"\xa0",c.a.createElement("div",{className:"info"},c.a.createElement("div",{className:"header"},c.a.createElement("h3",{className:"title"},t.title),c.a.createElement("h4",{className:"release-date"},t.release_date?t.release_date.substring(0,4):"-")),c.a.createElement("div",{className:"controls"},c.a.createElement("button",{className:"btn",disabled:d,onClick:function(){return l(t)}},"Add to Wacthlist"),c.a.createElement("button",{className:"btn",disabled:u,onClick:function(){return r(t)}},"Add to Watched"))))},_=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)([]),m=Object(i.a)(r,2),o=m[0],s=m[1];return c.a.createElement("div",{className:"add-page"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"add-content"},c.a.createElement("div",{className:"input-wrapper"},c.a.createElement("input",{type:"text",placeholder:"Search for a movie",value:a,onChange:function(e){e.preventDefault(),l(e.target.value),fetch("https://api.themoviedb.org/3/search/movie?api_key=9c443d139a8d7c65a0c155d19fa3bc19&language=en-US&page=1&include_adult=false&query=".concat(e.target.value)).then((function(e){return e.json()})).then((function(e){console.log("add ",e),e.errors?s([]):s(e.results)}))}})),o.length>0&&c.a.createElement("ul",{className:"results"},o.map((function(e){return c.a.createElement("li",{key:e.id},c.a.createElement(O,{movie:e}))}))))))},w=a(23),j=a(22),y=a.n(j),M=function(e){var t=e.value,a=e.size,n=e.color,l=Object(w.a)(e,["value","size","color"]),r={size:a,count:5,color:"red",activeColor:n,value:t,a11y:!0,isHalf:!0,emptyIcon:c.a.createElement("i",{className:"far fa-star"}),halfIcon:c.a.createElement("i",{className:"fa fa-star-half-alt"}),filledIcon:c.a.createElement("i",{className:"fa fa-star"})};return c.a.createElement("div",null,c.a.createElement(y.a,Object.assign({},r,l)))},S=(a(36),function(e){var t=e.movie,a=e.average,n=e.visibility,l=e.setVisibility,r=t.title,m=t.overview,o=t.poster_path;return console.log("average movieCard Special",a),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"container__movie-card"},c.a.createElement("div",{className:"movie"},c.a.createElement("div",{className:"movie-img",style:{backgroundImage:"url(https://image.tmdb.org/t/p/w200".concat(o,")")}}),c.a.createElement("div",{className:"text-movie-cont"},c.a.createElement("div",{className:"mr-grid"},c.a.createElement("div",{className:"col1"},c.a.createElement("h1",null,r))),c.a.createElement("div",{className:"mr-grid summary-row"},c.a.createElement("div",{className:"col2"},c.a.createElement("h5",null,"SUMMARY"))),c.a.createElement("div",{className:"mr-grid"},c.a.createElement("div",{className:"col1"},c.a.createElement("p",{className:"movie-description"},m),c.a.createElement("div",null,c.a.createElement(M,{value:a,edit:!1,size:35,isHalf:!0}))))))),c.a.createElement("div",{className:"btn__form_visible"},c.a.createElement("button",{className:"btn",onClick:function(){return l(!n)}},n?"Cancel":"Please Rate and Write a Comment")))}),C=(a(37),function(e){var t=e.comments;return c.a.createElement("div",null,c.a.createElement("h3",{className:"comment__header"},"Comments And Ratings"),null!==t&&t.map((function(e,t){var a=e.comment,n=e.name,l=e.date,r=e.rating;return c.a.createElement("div",{className:"comment",key:t},c.a.createElement("div",{className:"comment__details"},c.a.createElement("div",{className:"comment__author"},n),c.a.createElement("p",{className:"comment__date"},l),c.a.createElement(M,{value:r,edit:!1,size:18})),c.a.createElement("p",{className:"comment__text"},a),c.a.createElement("hr",null))})))}),I=a(13),T=(a(38),{name:"",comment:"",rating:0}),W=function(e){var t=e.setComments,a=e.setVisible,l=e.comments,r=Object(o.f)().movieId,m=Object(n.useContext)(v).addCommentToMovies,u=Object(n.useState)({name:"",comment:"",rating:0,date:(new Date).toLocaleDateString("en-US"),movieId:r}),E=Object(i.a)(u,2),h=E[0],f=E[1],b=Object(n.useState)(T),g=Object(i.a)(b,2),p=g[0],N=g[1],O=Object(n.useState)(!0),_=Object(i.a)(O,2),w=_[0],j=_[1],y=p.name,S=p.comment,C=p.rating;function W(e){N(Object(d.a)(Object(d.a)({},p),{},Object(I.a)({},e.target.name,e.target.value))),f(Object(d.a)(Object(d.a)({},h),{},Object(I.a)({},e.target.name,e.target.value))),console.log("handle change",h.rating)}return Object(n.useEffect)((function(){S.length>3&&C>0&&""!==y?j(!1):j(!0)}),[y,C,S]),c.a.createElement("div",{className:"container__form"},c.a.createElement("div",null,c.a.createElement(M,{onChange:function(e){N(Object(d.a)(Object(d.a)({},p),{},{rating:e})),f(Object(d.a)(Object(d.a)({},h),{},{rating:e}))},value:p.rating,size:25})),c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t([h].concat(Object(s.a)(l))),a(!1),N(T),m(h)}},c.a.createElement("label",{for:"name"},"First Name"),c.a.createElement("input",{type:"text",id:"name",name:"name",placeholder:"Your name..",value:p.name,onChange:W}),c.a.createElement("label",{for:"comment"},"Comment"),c.a.createElement("textarea",{id:"subject",name:"comment",placeholder:"Write your comment about the movie here..",style:{height:"200px"},value:p.comment,onChange:W}),c.a.createElement("button",{disabled:w,type:"submit",className:"btn"},"Submit")))},A=function(e,t){var a=e.filter((function(e){return e.movieId===t}));console.log(e),console.log("movieComments",a);var n=a.reduce((function(e,t){return e+t.rating}),0);return console.log(Math.round(n/a.length*10)/10),0===a.length?0:Math.round(n/a.length*10)/10},x=function(){var e=Object(n.useContext)(v),t=e.watched,a=e.watchlist,l=Object(o.f)().movieId,r=Object(n.useState)(!1),m=Object(i.a)(r,2),s=m[0],d=m[1],u=Object(n.useState)(JSON.parse(localStorage.getItem("comments")).filter((function(e){return e.movieId===l}))),E=Object(i.a)(u,2),h=E[0],f=E[1],b=a.concat(t).find((function(e){return e.id.toString()===l}));return c.a.createElement("div",{className:"movie-container"},c.a.createElement("div",{className:"movie-container__movie-card"},c.a.createElement(S,{movie:b,average:A(h,l),visibility:s,setVisibility:d})),c.a.createElement("div",{className:"movie-container__comment-form"},s&&c.a.createElement(W,{setComments:f,comments:h,setVisible:d})),c.a.createElement("div",{className:"movie-container__comments"},c.a.createElement(C,{comments:h})))};function D(){return c.a.createElement("div",{className:"flex h-screen"},c.a.createElement("h1",{className:"text-4xl m-auto"},"Page Not Found"))}a(39),a(40);var V=function(){return c.a.createElement(h,null,c.a.createElement(m.a,null,c.a.createElement(f,null),c.a.createElement(o.c,null,c.a.createElement(o.a,{path:"/",exact:!0},c.a.createElement(p,null)),c.a.createElement(o.a,{path:"/watchlist",exact:!0},c.a.createElement(p,null)),c.a.createElement(o.a,{path:"/watched",exact:!0},c.a.createElement(N,null)),c.a.createElement(o.a,{path:"/add",exact:!0},c.a.createElement(_,null)),c.a.createElement(o.a,{path:"/:listName/:movieId",exact:!0},c.a.createElement(x,null)),c.a.createElement(o.a,{path:"*"},c.a.createElement(D,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(V,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.2c025fd0.chunk.js.map