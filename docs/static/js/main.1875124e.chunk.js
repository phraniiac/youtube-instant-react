(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{185:function(e,t,n){e.exports=n(320)},190:function(e,t,n){},192:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},193:function(e,t,n){},320:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),o=n(16),c=n.n(o),r=(n(190),n(17)),l=n(18),s=n(21),d=n(19),h=n(20),u=n(15),p=(n(192),n(193),n(43)),m=n.n(p),v=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(s.a)(this,Object(d.a)(t).call(this,e))).searchYoutube=function(e){n.props.searchVideos(e)},n.handleChange=function(e){var t=e.target.value;n.setState({query:t}),n.searchYoutube(t)},n.state={query:"Search for Video"},n.handleChange=n.handleChange.bind(Object(u.a)(Object(u.a)(n))),n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(m.a,{id:"outlined-name",label:"Name",value:this.state.query,onChange:this.handleChange,margin:"normal",variant:"outlined"}),i.a.createElement("p",null,this.state.query))}}]),t}(i.a.Component),b=n(47),f=n.n(b),O=n(107),j=n.n(O),S={videoSearch:function(e,t){j()({key:"AIzaSyAAv7C7URXnHF0E2BPCIf_nRtveowe43uQ",term:e},function(e){return t(e)})}},g=n(14),E=n(44),y=n.n(E),V=n(46),w=n.n(V),C=n(45),k=n.n(C),x=n(34),L=n.n(x),I=function(e){return{card:{display:"flex",width:600,height:150,margin:5},details:{display:"flex",flexDirection:"column"},content:{flex:"1 0 auto"},cover:{minWidth:200,maxWidth:200},controls:{display:"flex",alignItems:"center",paddingLeft:e.spacing.unit,paddingBottom:e.spacing.unit},playIcon:{height:38,width:38}}},N=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).handleOnClick=function(e){n.props.onClick(n.props.video)},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.classes;return i.a.createElement(y.a,{onClick:this.handleOnClick,className:e.card},i.a.createElement(k.a,{className:e.cover,image:this.props.video.snippet.thumbnails.default.url,title:this.props.video.snippet.title}),i.a.createElement("div",{className:e.details},i.a.createElement(w.a,{className:e.content},i.a.createElement(L.a,{component:"h2",variant:"headline"},this.props.video.snippet.title),i.a.createElement(L.a,{variant:"subheading",color:"textSecondary"},this.props.video.snippet.description))))}}]),t}(i.a.Component),A=Object(g.withStyles)(I)(N),B=function(e){return{videoList:{margin:10},videoEle:{margin:10}}},q=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(s.a)(this,Object(d.a)(t).call(this,e))).handleVideoSelection=function(e){n.setState({selectedVideo:e}),n.props.handleVideoSelection(e)},n.state={selectedVideo:{}},n.handleVideoSelection=n.handleVideoSelection.bind(Object(u.a)(Object(u.a)(n))),n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes;return i.a.createElement("div",{className:t.videoList},this.props.videoList.map(function(t){return i.a.createElement(A,{onClick:e.handleVideoSelection,video:t})}))}}]),t}(i.a.Component),W=Object(g.withStyles)(B)(q),F=n(24),R=n.n(F),J=function(e){return{root:{flexGrow:1},paper:{padding:2*e.spacing.unit,textAlign:"center",color:e.palette.text.secondary}}},Y=n(108),z=function(e){return{}},D=n(5),G=n.n(D),H=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){this.props.classes;var e="";return this.props.video.id&&(this.props.video.id.videoId,e="http://youtube.com/embed/"+this.props.video.id.videoId),i.a.createElement("div",null,i.a.createElement("iframe",{width:"640",height:"360",frameBorder:"0",allowFullScreen:!0,title:"a",src:e}))}}]),t}(i.a.Component),P=G()(z)(H),Q=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(s.a)(this,Object(d.a)(t).call(this,e))).setVideoState=function(e){n.setState({videoList:e}),n.setState({selectedVideo:e[0]})},n.handleSearch=function(e){S.videoSearch(e,n.setVideoState)},n.handleVideoSelection=function(e){return n.setState({selectedVideo:e})},n.state={videoList:[],selectedVideo:{}},n.handleSearch=n.handleSearch.bind(Object(u.a)(Object(u.a)(n))),n.setVideoState=n.setVideoState.bind(Object(u.a)(Object(u.a)(n))),n.handleVideoSelection=n.handleVideoSelection.bind(Object(u.a)(Object(u.a)(n))),n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.classes;return i.a.createElement(i.a.Fragment,null,i.a.createElement(f.a,null,i.a.createElement("div",{className:e.root},i.a.createElement(R.a,{container:!0},i.a.createElement(R.a,{item:!0,xs:12},i.a.createElement(v,{searchVideos:this.handleSearch})),i.a.createElement(R.a,{item:!0,xs:8},i.a.createElement(P,{video:this.state.selectedVideo})),i.a.createElement(R.a,{item:!0,xs:4},i.a.createElement(Y.a,{component:"h2",variant:"headline"},"Search Results"),i.a.createElement(W,{videoList:this.state.videoList,handleVideoSelection:this.handleVideoSelection}))))))}}]),t}(a.Component),U=Object(g.withStyles)(J)(Q);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[185,2,1]]]);
//# sourceMappingURL=main.1875124e.chunk.js.map