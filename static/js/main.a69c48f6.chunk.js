(this.webpackJsonphearthstone=this.webpackJsonphearthstone||[]).push([[0],{25:function(e,t,c){},26:function(e,t,c){},27:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c(1),n=c.n(s),i=c(18),r=c.n(i),o=(c(25),c(26),c(7)),l=c(2),d=c(8),j=(c(27),c.p+"static/media/HSlogo.c6d9eed8.png"),u=function(){var e=Object(s.useState)(!1),t=Object(d.a)(e,2),c=t[0],n=t[1];return Object(a.jsxs)("nav",{className:c?"nav-active nav":"",children:[Object(a.jsxs)("div",{className:"logo",children:[Object(a.jsx)("img",{src:j,alt:"logo",className:"logo-pic"}),Object(a.jsx)("p",{children:"HearthStone Deck Creator"})]}),Object(a.jsxs)("ul",{className:c?"nav-links-toggle nav":"nav-links",id:"nav",children:[Object(a.jsx)("li",{children:Object(a.jsx)(o.b,{to:"/",children:"Home"})}),Object(a.jsx)("li",{children:Object(a.jsx)(o.b,{to:"/deckbuilder",children:"DeckBuilder"})}),Object(a.jsx)("li",{children:Object(a.jsx)(o.b,{to:"/contact",children:"Contact"})}),Object(a.jsx)("li",{children:Object(a.jsx)(o.b,{to:"/about",children:"About"})})]}),Object(a.jsxs)("div",{className:c?"toggle burger":"burger",id:"burger",onClick:function(e){e.preventDefault(),n(!c)},children:[Object(a.jsx)("div",{className:"line1"}),Object(a.jsx)("div",{className:"line2"}),Object(a.jsx)("div",{className:"line3"})]})]})},b=(c(33),function(){return Object(a.jsxs)(n.a.Fragment,{children:[Object(a.jsx)(u,{}),Object(a.jsxs)("div",{class:"about-body",children:[Object(a.jsx)("h1",{className:"about-header",children:" Lorem Ipsum "}),Object(a.jsx)("p",{class:"about-text",children:"Duis nisi nisi aliquip deserunt sint ad elit. Dolor laborum ex sit id proident non nulla dolore id id. Tempor esse amet incididunt do ad nostrud enim. Deserunt est magna minim cillum ad incididunt ea est. Tempor enim adipisicing adipisicing consectetur non sit labore elit nostrud officia. Ipsum proident ad in nulla eiusmod exercitation eu occaecat deserunt quis. Sint dolor excepteur aliqua et Lorem ex mollit. Nulla in ipsum cupidatat ullamco labore ullamco amet ipsum velit. Pariatur laborum ut esse nulla nisi aliquip culpa. Nulla duis mollit id voluptate dolor veniam et cupidatat. In eiusmod in consectetur aute. Quis cupidatat ipsum exercitation aliquip minim quis adipisicing. Ad reprehenderit consectetur ipsum adipisicing reprehenderit et fugiat tempor Lorem sunt velit et incididunt."}),Object(a.jsx)(o.b,{to:"/",className:"button-search",children:"Go Home"})]})]})}),h=(c(34),function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(u,{}),Object(a.jsxs)("div",{className:"error",children:[Object(a.jsx)("h1",{children:" Something went wrong or the page couldnt be found, please go back to the home page"}),Object(a.jsx)(o.b,{to:"/",className:"button-search",children:"Go Home"})]})]})}),m=c(11),x=c.n(m),O=c(16),p=(c(36),c(37),function(e){var t=Object(s.useRef)("");Object(s.useEffect)((function(){t.current.focus()}),[]);return Object(a.jsxs)("form",{children:[Object(a.jsx)("input",{className:"input-search",type:"text",placeholder:"Search for Cards by Name...",ref:t,onChange:function(t){e.setSearchTerm(t.target.value)}}),Object(a.jsxs)("div",{className:"search-buttons",children:[Object(a.jsx)("input",{type:"submit",className:"button-search",onClick:function(t){t.preventDefault(),e.setWild(""),e.getCards(),e.setHasSearched(!0)},value:"Wild Cards"}),Object(a.jsx)("input",{type:"submit",className:"button-search",onClick:function(t){t.preventDefault(),e.setWild("&set=standard"),e.getCards(),e.setHasSearched(!0)},value:"Standard Set"})]})]})}),f=(c(38),c(39),function(){return Object(a.jsx)("div",{className:"loader"})}),g=(c(40),c.p+"static/media/Attack.2d188e45.png"),v=c.p+"static/media/health.22749e36.png",N=c.p+"static/media/mana.20bbacf7.png",y=function(e){return Object(a.jsx)("div",{className:"modal",onClick:e.onClose,children:Object(a.jsxs)("div",{className:"modal-content",onClick:function(e){return e.stopPropagation()},children:[Object(a.jsxs)("div",{className:"modal-images",children:[Object(a.jsx)("img",{src:e.card.image,alt:"regular card"}),Object(a.jsx)("img",{src:e.card.goldImage,alt:"gold card",className:e.card.goldImage?"gold-image":"hide"})]}),Object(a.jsxs)("div",{className:"modal-body",children:[Object(a.jsxs)("div",{className:"modal-info",children:[Object(a.jsxs)("p",{className:"flavor-text",children:[" ",Object(a.jsxs)("i",{children:[" ",function(e){var t=document.createElement("textarea");return t.innerHTML=e,t.value}(e.card.text)," "]})]}),Object(a.jsxs)("p",{children:[" Artist: ",e.card.artist," "]})]}),Object(a.jsxs)("div",{className:"stats",children:[Object(a.jsxs)("p",{className:e.card.attack?"":"hide",children:[Object(a.jsx)("img",{src:g,alt:"attack logo"}),e.card.attack]}),Object(a.jsxs)("p",{className:e.card.attack?"":"hide",children:[" ",Object(a.jsx)("img",{src:v,alt:"health logo"}),e.card.health]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("img",{src:N,alt:"mana logo"}),e.card.mana]})]})]}),Object(a.jsx)("div",{className:"modal-footer",children:Object(a.jsx)("button",{onClick:e.onClose,className:"button-search",children:"Close"})})]})})},k=function(e){var t=Object(s.useState)(!1),c=Object(d.a)(t,2),n=c[0],i=c[1];return n?Object(a.jsx)(y,{card:e.card,onClose:function(){i(!1),document.body.style.position=""}}):Object(a.jsx)("img",{src:e.card.image,alt:e.card.name,className:"list-image",onClick:function(e){i(!0),document.body.style.position="fixed"}},e.card.id)},S=function(e){return e.loading?Object(a.jsx)(f,{}):e.cards.length<1?Object(a.jsx)("h1",{className:e.hasSearched?"sorry":"not-active",children:" Sorry no cards matched your search... "}):e.searchTerm?e.searchTerm?Object(a.jsx)("div",{className:"card-list",children:e.cards.map((function(e){return Object(a.jsx)(k,{card:e},e.id)}))}):void 0:(e.setCards([]),Object(a.jsx)("h1",{className:"sorry",children:" Please enter a search term "}))},w=c.p+"static/media/HSwordlogo.c882678e.png",C=function(){var e,t=Object(s.useState)(""),c=Object(d.a)(t,2),n=c[0],i=c[1],r=Object(s.useState)([]),o=Object(d.a)(r,2),l=o[0],j=o[1],b=Object(s.useState)(!1),h=Object(d.a)(b,2),m=h[0],f=h[1],g=Object(s.useState)(!1),v=Object(d.a)(g,2),N=v[0],y=v[1],k=Object(s.useState)(""),C=Object(d.a)(k,2),H=C[0],I=C[1],D=function(){var t=Object(O.a)(x.a.mark((function t(){var c,a;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://eu.battle.net/oauth/token?client_id=a569196e691a46268cc45bfdf10f17a6&client_secret=IyXkzOP4X7WQGUmpiltYV3oc2DduokWK&grant_type=client_credentials");case 3:return c=t.sent,t.next=6,c.json();case 6:a=t.sent,e=a.access_token,t.next=14;break;case 10:t.prev=10,t.t0=t.catch(0),window.location="/*",console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}}(),W=function(){var t=Object(O.a)(x.a.mark((function t(){var c,a,s,i;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return y(!1),f(!0),t.prev=2,t.next=5,D();case 5:return t.next=7,fetch("https://eu.api.blizzard.com/hearthstone/cards/?collectible=1".concat(H,"&textFilter=").concat(n,"&locale=en-US$access_token=").concat(e),{headers:{Authorization:"Bearer ".concat(e)}});case 7:return c=t.sent,t.next=10,c.json();case 10:a=t.sent,s=a.cards,console.log(a),s&&(i=s.map((function(e){var t=e.artistName,c=e.cropImage,a=e.id,s=e.image,n=e.imageGold,i=e.flavorText,r=e.attack,o=e.health,l=e.manaCost,d=e.classId;return{id:a,name:e.name,attack:r,health:o,mana:l,image:s,goldImage:n,cutImage:c,class:d,artist:t,text:i,rarity:e.rarityId}})),j(i),f(!1),y(!0)),t.next=20;break;case 16:t.prev=16,t.t0=t.catch(2),console.log(t.t0),f(!1);case 20:case"end":return t.stop()}}),t,null,[[2,16]])})));return function(){return t.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:"home-body fixed",children:[Object(a.jsx)(u,{}),Object(a.jsxs)("div",{className:"main-body",children:[Object(a.jsx)("img",{src:w,alt:"HSlogo",className:"main-logo"}),Object(a.jsx)("div",{className:"area",children:Object(a.jsx)("div",{className:"bubble",children:Object(a.jsx)("p",{className:"intro-text",children:" Welcome to the Hearthstone Deckbuilder, powered by Blizzards own game data. Use the searchbar to search any card in hearthstone, either by 'Standard Sets' or wild cards.  Click on the cards for more information and to add to your deck or click on a class button to filter cards by their class. Head to deckbuider to view your deck, make changes and see your collection!"})})}),Object(a.jsx)(p,{getCards:W,setWild:I,setSearchTerm:i,setHasSearched:y}),Object(a.jsx)(S,{cards:l,loading:m,hasSearched:N,searchTerm:n,setCards:j})]})]})},H=(c(41),function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(u,{}),Object(a.jsx)("div",{className:"coming-soon",children:Object(a.jsx)("h1",{children:" Coming Soon... "})})]})}),I=(c(42),function(){return Object(a.jsxs)(s.Fragment,{children:[Object(a.jsx)(u,{}),Object(a.jsxs)("form",{className:"contact-form",onSubmit:function(e){e.preventDefault()},children:[Object(a.jsx)("div",{className:"header-wrapper",children:Object(a.jsx)("div",{className:"header-wrapper-bubble",children:Object(a.jsx)("h1",{className:"form-header",children:" Please enter your details and one of the team will be in touch as soon as possible "})})}),Object(a.jsx)("label",{for:"name",children:"Name:"}),Object(a.jsx)("input",{type:"text",minLength:"3",placeholder:"enter your name",id:"name"}),Object(a.jsx)("label",{for:"email",children:"Email:"}),Object(a.jsx)("input",{type:"email",placeholder:"Enter e-mail address",id:"email"}),Object(a.jsx)("label",{for:"confirm-email",children:"Confirm Email:"}),Object(a.jsx)("input",{type:"email",placeholder:"Enter e-mail address",id:"confirm-email"}),Object(a.jsxs)("div",{className:"select-input",children:[Object(a.jsx)("label",{for:"select",children:"What is the purpose of your enquiry?"}),Object(a.jsxs)("select",{id:"select",children:[Object(a.jsx)("option",{value:"report-bug",children:" Report an Issue with the website"}),Object(a.jsx)("option",{value:"commercial",children:" Commercial"}),Object(a.jsx)("option",{value:"advertising",children:" Advertising"}),Object(a.jsx)("option",{value:"other",children:" Any Other Query"})]})]}),Object(a.jsx)("div",{className:"checkbox-input-section",children:Object(a.jsx)("div",{className:"header-wrapper checkbox-input",children:Object(a.jsxs)("div",{className:"header-wrapper-bubble",children:[Object(a.jsx)("p",{className:"form-header",children:"Do you wish to be notified when new features are added to our site? We may also contcat you from time to time with Hearthstone news and events.  If you do not wish to receive these emails please check this box"}),Object(a.jsx)("input",{type:"checkbox",id:"newsletter"})]})})}),Object(a.jsx)("label",{for:"text-area",children:" What is your Enquiry? "}),Object(a.jsx)("textarea",{rows:"15",cols:"50"}),Object(a.jsx)("input",{type:"submit",value:"Submit",className:"form-button"})]})]})});var D=function(){return Object(a.jsx)(o.a,{children:Object(a.jsxs)(l.c,{children:[Object(a.jsx)(l.a,{exact:!0,path:"/",children:Object(a.jsx)(C,{})}),Object(a.jsx)(l.a,{path:"/about",children:Object(a.jsx)(b,{})}),Object(a.jsx)(l.a,{path:"/contact",children:Object(a.jsx)(I,{})}),Object(a.jsx)(l.a,{path:"/deckbuilder",children:Object(a.jsx)(H,{})}),Object(a.jsx)(l.a,{path:"*",children:Object(a.jsx)(h,{})})]})})};r.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(D,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.a69c48f6.chunk.js.map