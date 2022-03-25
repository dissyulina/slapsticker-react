(this["webpackJsonpambassadors-frontend-dev-eval-2021"]=this["webpackJsonpambassadors-frontend-dev-eval-2021"]||[]).push([[0],{41:function(e,t,i){"use strict";i.r(t);var a=i(0),s=i.n(a),c=i(25),n=i.n(c),r=(i(33),i(9)),l=i(17),o=i(10),d=i(19),h=i(42),j=i(44),u=i(46),b=i(43),p=i(45),m=i(47),x=i.p+"static/media/slap-ori.5f0cd602.png",O=i.p+"static/media/slap-orange.b0857a2f.png",g=i.p+"static/media/slap-cartoon.243e7374.png",f=i.p+"static/media/slap-green.c7cac66f.png",v=i.p+"static/media/slap-fast.757dc4ff.png",w=i(3),y=i(1),k=Object(d.a)((function(e){return{"@import":"url('https://fonts.googleapis.com/css2?family=Lobster+Two:wght@400;700&family=Open+Sans&display=swap')","@global body":{background:e.palette.background,color:e.palette.text,fontFamily:"Open Sans",lineHeight:1.5},App:{"&  h2":{fontFamily:"Lobster Two",fontWeight:"700",fontSize:"2rem",letterSpacing:"1px"},padding:"20px",background:e.palette.primary,maxWidth:"800px",minHeight:"600px",margin:"auto","& a":{textDecoration:"none"}},Header:{"&  h1":{fontFamily:"Lobster Two",cursor:"pointer",fontSize:"4rem",fontWeight:"700",textAlign:"center"},"&  ul":{listStyle:"none",display:"flex",paddingLeft:"0"},"&  li":{paddingRight:"2rem"},"& a":{color:e.palette.text}},Main:{"& canvas":{background:e.palette.secondary,padding:"1rem",width:"100%",height:"auto"},"& video":{display:"none"}},Stickers:{"& img":{height:"4rem"}},Gallery:{"& img":{height:"16rem"}},Picture:{background:"white",padding:"0.5rem",position:"relative",display:"inline-block","& h3":{padding:8,textAlign:"center",width:"100%"}},DownloadBtn:{padding:"1rem 2rem",background:e.palette.button,borderRadius:"25px",color:"white"},Share:{textAlign:"center"},ShareBtn:{paddingRight:"5px"}}})),S=[x,O,g,f,v].map((function(e){var t=document.createElement("img");return t.src=e,{img:t,url:e}}));var A=function(e){var t=k(e),i=Object(a.useState)(),s=Object(o.a)(i,2),c=s[0],n=s[1],r=Object(a.useState)("SLAPPE!"),d=Object(o.a)(r,2),x=d[0],O=d[1],g=function(e,t){var i=Object(a.useState)(),s=Object(o.a)(i,2),c=s[0],n=s[1],r=Object(a.useState)(),l=Object(o.a)(r,2),d=l[0],h=l[1],j=Object(a.useState)(),u=Object(o.a)(j,2),b=u[0],p=u[1],m=Object(a.useCallback)((function(e){n(e)})),x=Object(a.useCallback)((function(e){h(e)})),O=Object(a.useState)(!1),g=Object(o.a)(O,2),f=g[0],v=g[1];Object(a.useEffect)((function(){c&&d&&!f?(navigator.mediaDevices.getUserMedia({video:{width:{min:1024,ideal:1280,max:1920},height:{min:576,ideal:720,max:1080}},audio:!1}).then((function(e){c.srcObject=e,c.play()})).catch((function(e){console.log("Couldn't start webcam: "+e)})),c.addEventListener("canplay",(function e(t){var i=c.videoWidth,a=c.videoHeight/(c.videoWidth/i);c.setAttribute("width",i),c.setAttribute("height",a),d.setAttribute("width",i),d.setAttribute("height",a),c.removeEventListener("canplay",e,!1)}),!1),v(!0)):c&&d||v(!1)}),[c,d,f]);var w=Object(a.useRef)({x:0,y:0}),y=Object(a.useCallback)((function(){d&&c&&requestAnimationFrame((function t(){var i=d.getContext("2d"),a=d.getAttribute("width"),s=d.getAttribute("height");if(i.drawImage(c,0,0,a,s),e){var n=d.getBoundingClientRect(),r=(w.current.x-n.left)/n.width*a,l=(w.current.y-n.top)/n.height*s;i.drawImage(e,r-.2*a,l-.2*a,.4*a,.4*a)}requestAnimationFrame(t)}))}),[d,c,e]);return Object(a.useEffect)((function(){y()}),[y]),Object(a.useEffect)((function(){if(d){var e=function(e){w.current={x:e.clientX,y:e.clientY}};return d.addEventListener("mousemove",e),d.addEventListener("mousedown",e),function(){d.removeEventListener("mousemove",e),d.removeEventListener("mousedown",e)}}}),[d]),[m,x,Object(a.useCallback)((function(e){if(d){var i=d.toDataURL("image/png");p({dataUri:i,title:t})}}),[d,t]),b]}(null===c||void 0===c?void 0:c.img,x),f=Object(o.a)(g,4),v=f[0],A=f[1],C=f[2],L=f[3];return Object(y.jsxs)("div",{className:t.App,children:[Object(y.jsxs)("header",{className:t.Header,children:[Object(y.jsx)("h1",{children:"SlapSticker"}),Object(y.jsx)("nav",{children:Object(y.jsxs)("ul",{children:[Object(y.jsx)("li",{children:Object(y.jsx)(l.b,{to:"/",children:"Home"})}),Object(y.jsx)("li",{children:Object(y.jsx)(l.b,{to:"/readme",children:"Readme"})})]})}),Object(y.jsx)("p",{children:"Have you ever said something so dumb, you just wanted to slap yourself? Well now you can!"})]}),Object(y.jsxs)(w.d,{children:["/** * Main app route */",Object(y.jsx)(w.b,{path:"/",exact:!0,children:Object(y.jsxs)("main",{children:[Object(y.jsxs)("section",{className:t.Gallery,children:[Object(y.jsx)("h2",{children:"Step 1: Give it a name"}),Object(y.jsx)("input",{type:"text",value:x,onChange:function(e){return O(e.target.value)}})]}),Object(y.jsxs)("section",{className:t.Stickers,children:[Object(y.jsx)("h2",{children:"Step 2: Select your sticker..."}),S.map((function(e){return Object(y.jsx)("button",{onClick:function(){return n(e)},children:Object(y.jsx)("img",{src:e.url})})}))]}),Object(y.jsxs)("section",{className:t.Main,children:[Object(y.jsx)("h2",{children:"Step 3: Slap your self!"}),Object(y.jsx)("video",{ref:v}),Object(y.jsx)("canvas",{ref:A,width:2,height:2,onClick:C})]}),Object(y.jsxs)("section",{className:t.Gallery,children:[Object(y.jsx)("h2",{children:"Step 4: Cherish this moment forever"}),L&&Object(y.jsxs)("div",{className:t.Picture,children:[Object(y.jsx)("img",{src:L.dataUri}),Object(y.jsx)("h3",{children:L.title})]}),L&&Object(y.jsx)("a",{href:L.dataUri,download:!0,target:"_blank",role:"button",className:t.DownloadBtn,children:"Download"})]}),Object(y.jsxs)("section",{className:t.Share,children:[Object(y.jsx)("p",{children:"Share this app to your friends who want to slap themselves too!"}),Object(y.jsx)(h.a,{url:"https://3000-dissyulina-slapstickerre-lyh5w20js28.ws-eu38.gitpod.io/",quote:"Check out this cool app!",hashtag:"#slapsticker",description:"Have you ever said something so dumb, you just wanted to slap yourself? Well now you can!",children:Object(y.jsx)(b.a,{size:40,round:!0,className:t.ShareBtn})}),Object(y.jsx)(j.a,{title:"SlapSticker - Check out this cool app!",url:"https://3000-dissyulina-slapstickerre-lyh5w20js28.ws-eu38.gitpod.io/",hashtags:["slapsticker","slapyourself"],className:t.Sharebtn,children:Object(y.jsx)(p.a,{size:40,round:!0,className:t.ShareBtn})}),Object(y.jsx)(u.a,{title:"SlapSticker - Check out this cool app!",url:"https://3000-dissyulina-slapstickerre-lyh5w20js28.ws-eu38.gitpod.io/",className:t.Sharebtn,children:Object(y.jsx)(m.a,{size:40,round:!0,className:t.ShareBtn})})]})]})}),"/** * Readme route */",Object(y.jsx)(w.b,{path:"/readme",children:Object(y.jsxs)("main",{children:[Object(y.jsx)("h2",{children:"Devtest Readme"}),Object(y.jsx)("p",{children:"Hello candidate, Welcome to our little dev test. The goal of this exercise, is to asses your general skill level, and give us something to talk about at our next appointment."}),Object(y.jsxs)("section",{children:[Object(y.jsx)("h3",{children:"What this app should do"}),Object(y.jsx)("p",{children:"SlapSticker is an app that lets users to slap stickers on their face, using their webcam. Functionality wise the app works, but the ui needs some love. We'd like for you to extend this prototype to make it look and feel it bit better."}),Object(y.jsx)("p",{children:"These are the basic requirements:"}),Object(y.jsxs)("ul",{children:[Object(y.jsx)("li",{children:"User can pick a sticker"}),Object(y.jsx)("li",{children:"User can give the captured image a title"}),Object(y.jsx)("li",{children:"User can place the sticker over the webcam image"}),Object(y.jsx)("li",{children:"User can capture the webcam image with sticker"})]})]}),Object(y.jsxs)("section",{children:[Object(y.jsx)("h3",{children:"What we want you to do"}),Object(y.jsx)("p",{children:"Off course we didn't expect you to build a full fledged app in such a short time frame. That's why the basic requirements are already implemented."}),Object(y.jsx)("p",{children:"However, we would like for you to show off your strengths as a developer by improving the app."}),Object(y.jsx)("p",{children:"Some ideas (no need to do all):"}),Object(y.jsxs)("ul",{children:[Object(y.jsx)("li",{children:"Make it look really nice"}),Object(y.jsx)("li",{children:"Let users pick from multiple (custom) stickers"}),Object(y.jsx)("li",{children:"Improve the workflow and ux"}),Object(y.jsx)("li",{children:"Show multiple captured images in a gallery"}),Object(y.jsx)("li",{children:"Let users download or share the captured pics"}),Object(y.jsx)("li",{children:"Add super cool effects to webcam feed"}),Object(y.jsx)("li",{children:"Organize, document and test the code"}),Object(y.jsx)("li",{children:"Integrate with zoom, teams, meet..."})]})]}),Object(y.jsxs)("section",{children:[Object(y.jsx)("h3",{children:" quickstart"}),Object(y.jsxs)("ul",{children:[Object(y.jsx)("li",{children:"You can clone this repo to get started "}),Object(y.jsx)("li",{children:"run `$ npm install` to install deps"}),Object(y.jsx)("li",{children:"run `$ npm run start` to start dev environment"}),Object(y.jsx)("li",{children:"push it to github or gitlab to share it with us. "})]})]}),Object(y.jsx)("section",{children:Object(y.jsx)("p",{children:"P.s. We've already added some libraries to make your life easier (Create React App, Jss, React Router), but feel free to add more."})})]})}),Object(y.jsx)(w.a,{to:"/"})]})]})},C=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,48)).then((function(t){var i=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,n=t.getTTFB;i(e),a(e),s(e),c(e),n(e)}))};n.a.render(Object(y.jsx)(s.a.StrictMode,{children:Object(y.jsx)(l.a,{children:Object(y.jsx)(r.b,{theme:{palette:{primary:"#FAF0E6",secondary:"#7698B3",button:"#ED6A5E",text:"#202030"}},children:Object(y.jsx)(A,{})})})}),document.getElementById("root")),C(console.log)}},[[41,1,2]]]);
//# sourceMappingURL=main.ce56dfed.chunk.js.map