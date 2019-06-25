(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){e.exports=a(34)},20:function(e,t,a){},21:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(14),s=a.n(l),c=(a(20),a(2)),i=a(3),o=a(6),u=a(4),m=a(7),d=a(5),b=(a(21),a(11)),h=a.n(b);a(24),a(26),a(30);h.a.initializeApp({apiKey:"AIzaSyBkOV24lMbrTIVbPE3KVlEPLxE-u5S80MA",authDomain:"creditdb-r.firebaseapp.com",databaseURL:"https://creditdb-r.firebaseio.com",projectId:"creditdb-r",storageBucket:"creditdb-r.appspot.com",messagingSenderId:"46852241260",appId:"1:46852241260:web:e7a954bec4864f2e"});var p=h.a,f=a(12),v=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).name="",a.email="",a.credits="",a.state={value:"-1",usersList:[]},a.handleChange=a.handleChange.bind(Object(m.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(m.a)(a)),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"handleChange",value:function(e){this.setState({value:e.target.value,usersList:this.state.usersList})}},{key:"handleSubmit",value:function(e){var t=e.target[1].value;0!=t&&-1!=this.state.value&&(this.transferCredit(t,this.props.uid,this.state.value),e.target[1].value=null,e.preventDefault())}},{key:"transferCredit",value:function(e,t,a){var n,r;p.database().ref("users").once("value",function(l){var s=l.val();n={name:s[t].name,email:s[t].email,credits:Number(s[t].credits)-Number(e)},r={name:s[a].name,email:s[a].email,credits:Number(s[a].credits)+Number(e)}}),p.database().ref("users/"+t).set(n),p.database().ref("users/"+a).set(r),this.updateTransactions(e,t,a)}},{key:"updateTransactions",value:function(e,t,a){p.database().ref("transfers").push({from:t,to:a,credits:Number(e)}),this.openPopupbox()}},{key:"openPopupbox",value:function(){var e=r.a.createElement("div",null,r.a.createElement("p",{style:{color:"green"}},"Your transaction was successful"));f.PopupboxManager.open({content:e})}},{key:"componentDidMount",value:function(){var e=this;p.database().ref("users").on("value",function(t){var a=t.val(),n=[];for(var r in a)n.push({uid:r,name:a[r].name});e.name=a[e.props.uid].name,e.email=a[e.props.uid].email,e.credits=a[e.props.uid].credits,e.setState({value:e.state.value,usersList:n})})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,this.name),r.a.createElement("p",null,this.email),r.a.createElement("p",null,"Credits : ",this.credits),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("label",{class:"formlabels"},"Select User",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("select",{value:this.state.value,onChange:this.handleChange},r.a.createElement("option",{value:"-1"},"Select user to transfer to"),this.state.usersList.map(function(e){return r.a.createElement("option",{value:e.uid},e.name)}))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",{class:"formlabels"},"Enter Amount",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{type:"number",min:"0",max:this.credits})),r.a.createElement(f.PopupboxContainer,{fadeIn:!0,fadeInSpeed:500}),r.a.createElement("br",null),r.a.createElement("input",{class:"styledbutton",type:"submit",value:"Transfer"})))}}]),t}(r.a.Component),E=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={user:""},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;p.database().ref("users").on("value",function(t){var a={user:t.val()[e.props.uid]};e.setState(a)})}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,this.state.user.name),r.a.createElement("p",null,this.state.user.email),r.a.createElement("p",null,"Credits : ",this.state.user.credits),r.a.createElement("button",{class:"styledbutton",onClick:function(){e.props.onClick(r.a.createElement(v,{uid:e.props.uid}))}},"Transfer Credits"))}}]),t}(r.a.Component),k=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={users:[]},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=p.database().ref("users"),a=[];t.on("value",function(t){var n=t.val();for(var r in n)a.push({name:n[r].name,email:n[r].email,credits:n[r].credits,uid:r});e.setState({users:a})})}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"All Users"),r.a.createElement("table",{class:"users"},r.a.createElement("thead",{class:"tableheader"},r.a.createElement("td",null,"Name"),r.a.createElement("td",null,"Email"),r.a.createElement("td",null,"Credits"),r.a.createElement("td",null,"View User")),r.a.createElement("tbody",null,this.state.users.map(function(t){return r.a.createElement("tr",null,r.a.createElement("td",{class:"userdata"},t.name),r.a.createElement("td",{class:"userdata"},t.email),r.a.createElement("td",{class:"userdata"},t.credits),r.a.createElement("td",{class:"userdata"},r.a.createElement("button",{onClick:function(){e.props.onClick(r.a.createElement(E,{uid:t.uid,onClick:function(t){e.props.onClick(t)}}))}},"View")))}))))}}]),t}(r.a.Component),y=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={items:[]},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=p.database().ref("transfers"),a=p.database().ref("users"),n=[];t.on("value",function(t){var r=t.val(),l=function(t){var l=void 0,s=void 0;a.once("value",function(a){var c=a.val();l=c[r[t].from].name,s=c[r[t].to].name,n.push({from:l,to:s,credits:r[t].credits}),e.setState({items:n})})};for(var s in r)l(s)})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"All Transactions"),r.a.createElement("table",{class:"transactions"},r.a.createElement("thead",{class:"tableheader"},r.a.createElement("td",null,"From"),r.a.createElement("td",null,"To"),r.a.createElement("td",null,"Credits")),r.a.createElement("tbody",null,this.state.items.map(function(e){return r.a.createElement("tr",null,r.a.createElement("td",{class:"transdata"},e.from),r.a.createElement("td",{class:"transdata"},e.to),r.a.createElement("td",{class:"transdata"},e.credits))}))))}}]),t}(r.a.Component),j=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{class:"styledbutton",onClick:function(){return e.props.onClick(r.a.createElement(k,{onClick:function(t){e.props.onClick(t)}}))}},"Show All Users"),r.a.createElement("button",{class:"styledbutton",onClick:function(){return e.props.onClick(r.a.createElement(y,null))}},"Show All Transactions"))}}]),t}(r.a.Component),O=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{class:"gobackContainer"},r.a.createElement("div",null,r.a.createElement("button",{class:"goback ",onClick:function(){e.props.goBack()}},"<< Back")))}}]),t}(r.a.Component),g=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{class:"gobackContainer"},r.a.createElement("div",null,r.a.createElement("button",{class:"goback ",onClick:function(){e.props.goHome()}},"<< Home")))}}]),t}(r.a.Component),C=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={content:r.a.createElement(j,{onClick:function(e){a.handlePageRequest(e)}}),history:[]},a.handleGoingBack.bind(Object(m.a)(a)),a.handleGoHomeRequest.bind(Object(m.a)(a)),a.handlePageRequest.bind(Object(m.a)(a)),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"handlePageRequest",value:function(e){this.setState({content:e,history:this.state.history.concat(this.state.content)})}},{key:"handleGoingBack",value:function(){this.state.history[0]&&this.setState({content:this.state.history.pop(),history:this.state.history})}},{key:"handleGoHomeRequest",value:function(){this.state.history[0]&&this.setState({content:this.state.history[0],history:[]})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("p",null,"Credit ",r.a.createElement("br",null),"Management ",r.a.createElement("br",null),"App"),r.a.createElement(g,{goHome:function(){return e.handleGoHomeRequest()}}),r.a.createElement(O,{goBack:function(){return e.handleGoingBack()}})),r.a.createElement("main",{style:{backgroundImage:"linear-gradient(to bottom left, rgba(198,80,192,0.1),rgba(67,88,208,0.1))",paddingTop:"100px",paddingBottom:"100px",minHeight:"68vh"}},r.a.createElement("div",{class:"maincontainer"},this.state.content)))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[15,1,2]]]);
//# sourceMappingURL=main.02487c6e.chunk.js.map