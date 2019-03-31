webpackJsonp([1],{NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("7+uW"),n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[t._m(0),t._v(" "),i("section",{attrs:{id:"work"}},[i("h2",{staticClass:"section-title"},[t._v("Work")]),t._v(" "),i("div",{staticClass:"content"},[t.more?i("ul",{staticClass:"projects"},[i("transition-group",{attrs:{name:"list",mode:"in-out"}},t._l(t.projects.slice(0,5),function(e,s){return i("li",{key:s},[i("h3",[i("a",{attrs:{href:e.url,target:"_blank"}},[t._v(t._s(e.title))])]),t._v(" "),i("p",[t._v(t._s(e.description))])])}),0)],1):i("ul",{staticClass:"projects"},[i("transition-group",{attrs:{name:"list",mode:"out-in"}},t._l(t.projects,function(e,s){return i("li",{key:s},[i("h3",[i("a",{attrs:{href:e.url,target:"_blank"}},[t._v(t._s(e.title))])]),t._v(" "),i("p",[t._v(t._s(e.description))])])}),0)],1),t._v(" "),i("span",{attrs:{id:"more-link"},on:{click:t.toggleButton}},[t._v(t._s(t.moreButton))])])]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{attrs:{id:"about"}},[i("h2",{staticClass:"section-title"},[t._v("About")]),t._v(" "),i("div",{staticClass:"content"},[i("p",[t._v("\n\t\t\t\tI am a seasoned full-stack web developer, focused on front-end, with a demonstrated history of\n\t\t\t\tworking in the web industry for over 5 years. I am well-versed CSS3 (Scss, Sass), JavaScript\n\t\t\t\t(Vue.js, ES6), Python (Django, Flask), and database technologies like PostgreSQL, MySQL, and\n\t\t\t\tMongoDB. I build scalable and performance-oriented responsive websites and write clean and\n\t\t\t\twell-documented code.\n\t\t\t")]),t._v(" "),i("p",[t._v("\n\t\t\t\tCurrently building cool things at\n\t\t\t\t"),i("a",{attrs:{href:"https://newscred.com",target:"_blank",id:"newscred-link"}},[t._v("NewsCred")]),t._v(".\n\t\t\t")]),t._v(" "),i("p",[t._v("Click "),i("a",{attrs:{href:"static/resume_sadman_shawmik.pdf",id:"resume-link"}},[t._v("here")]),t._v(" to see my resume.")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("section",[e("h2",{staticClass:"section-title"},[this._v("Contact")]),this._v(" "),e("div",{staticClass:"content"},[e("p",[this._v("\n\t\t\t\tWant to work together? Shoot me an email at\n\t\t\t\t"),e("a",{attrs:{href:"mailto:hello@sadmansh.com",id:"mail-link"}},[this._v("hello@sadmansh.com")]),this._v(".\n\t\t\t")])])])}]};var a=i("VU/8")({name:"Home",data:function(){return{more:!0,moreButton:"Show More",projects:[{title:"Rice",description:"Built the website for Rice Media, a Singaporean magazine, in collaboration with a specialized design team. Coded the whole theme and a bunch of custom PHP functions on top of WordPress.",url:"http://ricemedia.co"},{title:"Minimal Blog",description:"A feature-packed (not what the name suggests) multi-author blog written in Django.",url:"https://github.com/sadmansh/minimalblog"},{title:"Bottle and Heels",description:"Designed and created the website with a custom theme and plugins with WordPress.",url:"https://www.bottleandheels.com"},{title:"GradConnect",description:"Collaborated with a design team to build the front-end for GradConnect.",url:"https://grad-connect.com"},{title:"Yaffe Ruden & Associates",description:"Worked with an agency to build this site for a primary care medical group based in New York.",url:"http://yafferuden.com"},{title:"Bohner Bespoke",description:"Worked with their in-house design team to build the website using WordPress.",url:"https://bohnerbespoke.com"},{title:"Asian Film Archive",description:"Built both the back-end and front-end of this website that serves as a hub for the Asian film community",url:"http://asianfilmarchive.org"},{title:"SavyFool",description:"A simple WordPress blog built from a client-provided design.",url:"https://savyfool.com"},{title:"Glitch",description:"A super-minimal WordPress theme for blogs.",url:"https://github.com/sadmansh/glitch"},{title:"TMPLT.",description:"TMPLT was a project I started working on to keep all my HTML5 templates together. It is a list of responsive templates with flat & minimal designs that are free to use.",url:"https://sadmansh.com/tmplt"}]}},methods:{toggleButton:function(){this.more=!this.more,this.moreButton=this.more?"Show More":"Show Less"}}},n,!1,function(t){i("jiGy")},"data-v-499503f3",null).exports,o={name:"App",components:{Home:a}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("main",[this._m(0),this._v(" "),e("div",{staticClass:"right"},[e("Home")],1)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"left"},[s("div",{staticClass:"container"},[s("img",{attrs:{src:i("xXxd")}}),t._v(" "),s("h1",[t._v("Hey, I am Sadman,")]),t._v(" "),s("h2",[t._v("A full-stack web developer based in Dhaka, Bangladesh.")]),t._v(" "),s("ul",{staticClass:"social"},[s("li",[s("a",{attrs:{href:"https://github.com/sadmansh",target:"_blank",id:"github-link"}},[t._v("GitHub")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://linkedin.com/in/sadmansh",target:"_blank",id:"linkedin-link"}},[t._v("LinkedIn")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://instagram.com/sadmansh",target:"_blank",id:"instagram-link"}},[t._v("Instagram")])])])])])}]};var l=i("VU/8")(o,r,!1,function(t){i("nWxh")},null,null).exports,c=i("/ocq");s.a.use(c.a);var d=new c.a({routes:[{path:"/",name:"Home",component:a}]});s.a.config.productionTip=!1,new s.a({el:"#app",router:d,components:{App:l},template:"<App/>"})},jiGy:function(t,e){},nWxh:function(t,e){},xXxd:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA4MzQuNCA2MzIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDgzNC40IDYzMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiMyQzNFNTA7fQo8L3N0eWxlPgo8Zz4KCTxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iNjUyLDMxNiA0NjkuNiwwIDI4Ny4xLDMxNiAyNTUuMSwzNzEuNSAzMDQuMSw0NTYuNCA0MDUuNCw2MzIgNDY5LjYsNjMyIDgzNC40LDYzMiAJIi8+CjwvZz4KPGc+Cgk8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjEwMS40LDQ1Ni40IDAsNjMyIDEwNC43LDYzMiAyNTUuMSwzNzEuNSAyMDIuNywyODAuOSAJIi8+CjwvZz4KPC9zdmc+Cg=="}},["NHnr"]);
//# sourceMappingURL=app.98f86b1c59b386de0784.js.map