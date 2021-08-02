var e=Object.defineProperty,n=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,a=(n,t,l)=>t in n?e(n,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):n[t]=l;import{m as i,r as o,o as s,c as r,a as d,b as u,w as m,v as c,F as p,d as h,e as v,t as f,f as g,g as b,h as y,i as w,j as C,k,l as x,n as S,p as M,q as I,s as O,T as E,u as _,x as L,y as B,z as A,A as H,P as T,B as $,C as R,D as P}from"./vendor.6e2abeb8.js";const j={template:'<hr style="border-color: rgba(0, 0, 0, 0.1); margin: 20px;">'},D={name:"App",data:()=>({menu:[{header:"Getting Started",hiddenOnCollapse:!0},{href:"/",title:"Installation",icon:"fa fa-download"},{href:"/basic-usage",title:"Basic Usage",icon:"fa fa-code"},{header:"Usage",hiddenOnCollapse:!0},{href:"/props",title:"Props",icon:"fa fa-cogs"},{href:"/events",title:"Events",icon:"fa fa-bell"},{href:"/styling",title:"Styling",icon:"fa fa-palette"},{component:i(j)},{header:"Example",hiddenOnCollapse:!0},{href:"/disabled",title:"Disabled page",icon:"fa fa-lock",disabled:!0},{title:"Badge",icon:"fa fa-cog",badge:{text:"new",class:"vsm--badge_default"}},{href:"/page",title:"Dropdown Page",icon:"fa fa-list-ul",child:[{href:"/page/sub-page-1",title:"Sub Page 01",icon:"fa fa-file-alt"},{href:"/page/sub-page-2",title:"Sub Page 02",icon:"fa fa-file-alt"}]},{title:"Multiple Level",icon:"fa fa-list-alt",child:[{title:"page"},{title:"Level 2 ",child:[{title:"page"},{title:"Page"}]},{title:"Page"},{title:"Another Level 2",child:[{title:"Level 3",child:[{title:"Page"},{title:"Page"}]}]}]}],collapsed:!1,themes:[{name:"Default theme",input:""},{name:"White theme",input:"white-theme"}],selectedTheme:"white-theme",isOnMobile:!1}),mounted(){this.onResize(),window.addEventListener("resize",this.onResize)},methods:{onToggleCollapse(e){console.log("onToggleCollapse")},onItemClick(e,n){console.log("onItemClick")},onResize(){window.innerWidth<=767?(this.isOnMobile=!0,this.collapsed=!0):(this.isOnMobile=!1,this.collapsed=!1)}}},W={class:"demo"},z={class:"container"},U=d("h1",null,[v(" vue-sidebar-menu "),d("a",{style:{color:"#000","text-transform":"uppercase","font-size":"14px","font-weight":"400"},href:"https://github.com/yaminncco/vue-sidebar-menu"}," Github ")],-1),N=d("p",null,"A vue.js sidebar menu component",-1),q=v(" Select theme: "),F=d("hr",{style:{margin:"50px 0px",border:"1px solid #e3e3e3"}},null,-1);D.render=function(e,n,t,l,a,i){const v=o("sidebar-menu"),g=o("router-view");return s(),r(p,null,[d(v,{collapsed:a.collapsed,"onUpdate:collapsed":[n[1]||(n[1]=e=>a.collapsed=e),i.onToggleCollapse],menu:a.menu,theme:a.selectedTheme,"show-one-child":!0,onItemClick:i.onItemClick},null,8,["collapsed","menu","theme","onUpdate:collapsed","onItemClick"]),a.isOnMobile&&!a.collapsed?(s(),r("div",{key:0,class:"sidebar-overlay",onClick:n[2]||(n[2]=e=>a.collapsed=!0)})):u("",!0),d("div",{id:"demo",class:[{collapsed:a.collapsed},{onmobile:a.isOnMobile}]},[d("div",W,[d("div",z,[U,N,d("div",null,[q,m(d("select",{"onUpdate:modelValue":n[3]||(n[3]=e=>a.selectedTheme=e)},[(s(!0),r(p,null,h(a.themes,((e,n)=>(s(),r("option",{key:n,value:e.input},f(e.name),9,["value"])))),128))],512),[[c,a.selectedTheme]])]),F,d(g)])])],2)],64)};const Y=g(!1),V=g(null),G=g(null),K=b({top:0,height:0,padding:"",maxHeight:0,maxWidth:0}),J=g(null),Q=g(window.location.pathname+window.location.search+window.location.hash);function X(e,n){const t=y((()=>Y.value?e.widthCollapsed:e.width)),l=y((()=>[Y.value?"vsm_collapsed":"vsm_expanded",e.theme?`vsm_${e.theme}`:"",e.rtl?"vsm_rtl":"",e.relative?"vsm_relative":""])),a=y((()=>[{position:"absolute"},{top:`${K.top+K.height}px`},e.rtl?{right:e.widthCollapsed}:{left:e.widthCollapsed},{width:`${K.maxWidth}px`},{"max-height":`${K.maxHeight}px`},{"overflow-y":"auto"}])),i=y((()=>[{position:"absolute"},{top:`${K.top}px`},e.rtl?{right:e.widthCollapsed}:{left:e.widthCollapsed},{width:`${K.maxWidth}px`},{height:`${K.height}px`},{"padding-right":`${K.padding}`},{"padding-left":`${K.padding}`},{"z-index":"20"}])),o=y((()=>[{position:"absolute"},{top:`${K.top}px`},e.rtl?{right:"0px"}:{left:"0px"},{width:`${K.maxWidth+parseInt(e.widthCollapsed)}px`},{height:`${K.height}px`},{"z-index":"10"}])),s=(e=!0,n=800)=>{G.value&&(J.value&&clearTimeout(J.value),e?G.value=null:J.value=setTimeout((()=>{G.value=null}),n))};return{sidebarMenuRef:V,isCollapsed:Y,sidebarWidth:t,sidebarClass:l,currentRoute:Q,onToggleClick:()=>{s(),Y.value=!Y.value,n.emit("update:collapsed",Y.value)},onItemClick:(e,t)=>{n.emit("item-click",e,t)},onRouteChange:()=>{Q.value=window.location.pathname+window.location.search+window.location.hash},mobileItem:G,mobileItemStyle:i,mobileItemDropdownStyle:a,mobileItemBackgroundStyle:o,setMobileItem:({item:n,itemEl:t})=>{J.value&&clearTimeout(J.value);const l=t.children[0],{top:a,bottom:i,height:o}=l.getBoundingClientRect(),{left:s,right:r}=V.value.getBoundingClientRect(),d=l.offsetParent.getBoundingClientRect().top;let u,m,c=0,p=0;const h=parseInt(e.width)-parseInt(e.widthCollapsed);if(e.relative){const n=V.value.parentElement;u=n.clientHeight,m=n.clientWidth,c=n.getBoundingClientRect().top,p=e.rtl?m-(n.getBoundingClientRect().right-s):n.getBoundingClientRect().right-r}else u=window.innerHeight,m=window.innerWidth,p=e.rtl?m-(m-s):m-r;G.value=n,K.top=a-d,K.height=o,K.padding=window.getComputedStyle(l).paddingRight,K.maxWidth=p<=h?p:h,K.maxHeight=u-(i-c)},unsetMobileItem:s,mobileItemTimeout:J}}function Z(e,n){const{matched:t}=e,{length:l}=t,a=t[l-1],i=n.matched;if(!a||!i.length)return-1;const o=i.findIndex(ne.bind(null,a));if(o>-1)return o;const s=ee(t[l-2]);return l>1&&ee(a)===s&&i[i.length-1].path!==s?i.findIndex(ne.bind(null,t[l-2])):o}function ee(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function ne(e,n){return(e.aliasOf||e)===(n.aliasOf||n)}function te(e,n){return Array.isArray(e)?le(e,n):Array.isArray(n)?le(n,e):e===n}function le(e,n){return Array.isArray(n)?e.length===n.length&&e.every(((e,t)=>e===n[t])):1===e.length&&e[0]===n}const ae=g(null);function ie(e){const i=w().appContext.config.globalProperties.$router,o=C("vsm-props"),s=C("emitItemClick"),r=C("emitScrollUpdate"),{isCollapsed:d,currentRoute:u,mobileItem:m,setMobileItem:c,unsetMobileItem:p,mobileItemTimeout:h}=X(o),v=g(!1),f=g(!1),b=y((()=>x(e.item)||S(e.item.child))),k=y((()=>x(e.item))),x=e=>{if(!e.href||e.external)return!1;if(i){const n=i.resolve(e.href),t=i.currentRoute.value;return Z(n,t)>-1&&Z(n,t)===t.matched.length-1&&function(e,n){if(Object.keys(e).length!==Object.keys(n).length)return!1;for(const t in e)if(!te(e[t],n[t]))return!1;return!0}(t.params,n.params)}return e.href===u.value},S=e=>!!e&&e.some((e=>x(e)||S(e.child))),M=(n,t)=>{O.value||d.value&&E.value&&setTimeout((()=>{m.value!==e.item&&(c({item:e.item,itemEl:t}),I.value=!0),"click"!==n.type||L.value||p(!1)}),0)},I=y({get:()=>!!L.value&&(d.value&&E.value?O.value:!!o.showChild||(o.showOneChild&&E.value?e.item===ae.value:v.value)),set:n=>{o.showOneChild&&E.value&&(ae.value=n?e.item:null),v.value=n}}),O=y((()=>d.value&&E.value?e.item===m.value:f.value)),E=y((()=>1===e.level)),_=y((()=>d.value?!(!e.item.hidden||void 0!==e.item.hiddenOnCollapse)||!0===e.item.hiddenOnCollapse:!0===e.item.hidden)),L=y((()=>!!(e.item.child&&e.item.child.length>0))),B=y((()=>["vsm--link",`vsm--link_level-${e.level}`,{"vsm--link_mobile":T.value},{"vsm--link_hover":O.value},{"vsm--link_active":b.value},{"vsm--link_disabled":e.item.disabled},{"vsm--link_open":I.value},e.item.class])),A=y((()=>((e,i)=>{for(var o in i||(i={}))t.call(i,o)&&a(e,o,i[o]);if(n)for(var o of n(i))l.call(i,o)&&a(e,o,i[o]);return e})({href:e.item.href?e.item.href:"#",target:e.item.external?"_blank":"_self",tabindex:e.item.disabled?-1:null,"aria-current":k.value?"page":null,"aria-haspopup":!!L.value||null,"aria-expanded":!!I.value||null},e.item.attributes))),H=y((()=>["vsm--item",{"vsm--item_mobile":T.value}])),T=y((()=>d.value&&E.value&&O.value));return{active:b,exactActive:k,activeShow:ae,show:I,hover:O,isFirstLevel:E,isHidden:_,hasChild:L,linkClass:B,linkAttrs:A,itemClass:H,isMobileItem:T,onLinkClick:n=>{if(e.item.href&&!e.item.disabled||(n.preventDefault(),!e.item.disabled)){if(M(n,n.currentTarget.parentElement),L.value||!o.showChild){if(d.value&&E.value)return;e.item.href&&!b.value||(I.value=!I.value)}s(n,e.item)}},onMouseOver:n=>{e.item.disabled||(n.stopPropagation(),f.value=!0)},onMouseOut:e=>{e.stopPropagation(),f.value=!1},onMouseEnter:n=>{e.item.disabled||(T.value&&(o.disableHover&&L.value||!o.disableHover)&&h.value&&clearTimeout(h.value),o.disableHover||M(n,n.currentTarget))},onMouseLeave:()=>{if(o.disableHover&&!L.value)return;let e;o.disableHover||(e=300),p(!1,e)},onExpandEnter:e=>{e.style.height=e.scrollHeight+"px"},onExpandAfterEnter:e=>{e.style.height="auto",d.value||r()},onExpandBeforeLeave:e=>{d.value&&E.value?e.style.display="none":e.style.height=e.scrollHeight+"px"},onExpandAfterLeave:()=>{d.value||r()}}}const oe={name:"SidebarMenuLink",inheritAttrs:!1,props:{item:{type:Object,required:!0}},data:()=>({router:!1}),computed:{isHyperLink(){return!(this.item.href&&!this.item.external&&this.router)}},mounted(){this.router=!!this.$router}};oe.render=function(e,n,t,l,a,i){const u=o("router-link");return i.isHyperLink?(s(),r("a",x({key:0},e.$attrs),[k(e.$slots,"default")],16)):(s(),r(u,{key:1,custom:"",to:e.$attrs.href},{default:S((({href:n,navigate:t})=>[d("a",x(e.$attrs,{href:n,onClick:t}),[k(e.$slots,"default")],16,["href","onClick"])])),_:3},8,["to"]))};const se={name:"SidebarMenuIcon",props:{icon:{type:[String,Object],default:""}}};se.render=function(e,n,t,l,a,i){return s(),r(M(t.icon.element?t.icon.element:"i"),x({class:["vsm--icon","string"==typeof t.icon||t.icon instanceof String?t.icon:t.icon.class],"aria-hidden":"true"},t.icon.attributes),{default:S((()=>[v(f(t.icon.text),1)])),_:1},16,["class"])};const re={name:"SidebarMenuBadge",props:{badge:{type:Object,default:()=>{}}}};re.render=function(e,n,t,l,a,i){return s(),r(M(t.badge.element?t.badge.element:"span"),x({class:["vsm--badge",t.badge.class]},t.badge.attributes),{default:S((()=>[v(f(t.badge.text),1)])),_:1},16,["class"])};const de={name:"SidebarMenuItem",components:{SidebarMenuLink:oe,SidebarMenuIcon:se,SidebarMenuBadge:re},props:{item:{type:Object,required:!0},level:{type:Number,default:1}},setup(e){const n=C("vsm-props"),{isCollapsed:t,mobileItemStyle:l,mobileItemDropdownStyle:a,mobileItemBackgroundStyle:i}=X(n),{linkComponentName:o}=I(n),{active:s,exactActive:r,show:d,hover:u,isFirstLevel:m,isHidden:c,hasChild:p,linkClass:h,linkAttrs:v,itemClass:f,isMobileItem:g,onLinkClick:b,onMouseOver:y,onMouseOut:w,onMouseEnter:k,onMouseLeave:x,onExpandEnter:S,onExpandAfterEnter:M,onExpandBeforeLeave:E,onExpandAfterLeave:_}=ie(e);return O((()=>s.value),(()=>{s.value&&(d.value=!0)}),{immediate:!0}),{isCollapsed:t,linkComponentName:o,active:s,exactActive:r,isMobileItem:g,mobileItemStyle:l,mobileItemDropdownStyle:a,mobileItemBackgroundStyle:i,show:d,hover:u,isFirstLevel:m,isHidden:c,hasChild:p,linkClass:h,linkAttrs:v,itemClass:f,onLinkClick:b,onMouseOver:y,onMouseOut:w,onMouseEnter:k,onMouseLeave:x,onExpandEnter:S,onExpandAfterEnter:M,onExpandBeforeLeave:E,onExpandAfterLeave:_}}},ue={key:0},me={class:"vsm--dropdown"};de.render=function(e,n,t,l,a,i){const m=o("sidebar-menu-icon"),c=o("sidebar-menu-badge"),v=o("sidebar-menu-item",!0);return t.item.component&&!l.isHidden?(s(),r("li",ue,[(s(),r(M(t.item.component),t.item.props,null,16))])):t.item.header&&!l.isHidden?(s(),r("li",x({key:1,class:["vsm--header",t.item.class]},t.item.attributes),f(t.item.header),17)):l.isHidden?u("",!0):(s(),r("li",x({key:2,class:l.itemClass,onMouseover:n[1]||(n[1]=(...e)=>l.onMouseOver&&l.onMouseOver(...e)),onMouseout:n[2]||(n[2]=(...e)=>l.onMouseOut&&l.onMouseOut(...e))},_(l.isCollapsed&&l.isFirstLevel?{mouseenter:l.onMouseEnter,mouseleave:l.onMouseLeave}:{})),[(s(),r(M(l.linkComponentName?l.linkComponentName:"SidebarMenuLink"),x({item:t.item,class:l.linkClass},l.linkAttrs,{onClick:l.onLinkClick}),{default:S((()=>[l.isCollapsed&&l.isFirstLevel?(s(),r(E,{key:0,name:"slide-animation"},{default:S((()=>[l.hover?(s(),r("div",{key:0,class:"vsm--mobile-bg",style:l.mobileItemBackgroundStyle},null,4)):u("",!0)])),_:1})):u("",!0),t.item.icon?(s(),r(m,{key:1,icon:t.item.icon},null,8,["icon"])):u("",!0),d("div",{class:["vsm--title",l.isCollapsed&&l.isFirstLevel&&!l.isMobileItem&&"vsm--title_hidden"],style:l.isMobileItem&&l.mobileItemStyle},[d("span",null,f(t.item.title),1),t.item.badge?(s(),r(c,{key:0,badge:t.item.badge},null,8,["badge"])):u("",!0),l.hasChild?(s(),r("div",{key:1,class:["vsm--arrow",{"vsm--arrow_open":l.show}]},[k(e.$slots,"dropdown-icon",{isOpen:l.show})],2)):u("",!0)],6)])),_:3},16,["item","class","onClick"])),l.hasChild?(s(),r(E,{key:0,appear:l.isMobileItem,name:"expand",onEnter:l.onExpandEnter,onAfterEnter:l.onExpandAfterEnter,onBeforeLeave:l.onExpandBeforeLeave,onAfterLeave:l.onExpandAfterLeave},{default:S((()=>[l.show?(s(),r("div",{key:0,class:["vsm--child",l.isMobileItem&&"vsm--child_mobile"],style:l.isMobileItem&&l.mobileItemDropdownStyle},[d("ul",me,[(s(!0),r(p,null,h(t.item.child,((n,l)=>(s(),r(v,{key:l,item:n,level:t.level+1},{"dropdown-icon":S((({isOpen:n})=>[k(e.$slots,"dropdown-icon",{isOpen:n})])),_:2},1032,["item","level"])))),128))])],6)):u("",!0)])),_:1},8,["appear","onEnter","onAfterEnter","onBeforeLeave","onAfterLeave"])):u("",!0)],16))};const ce={name:"SidebarMenuScroll",setup(){const e=C("vsm-props"),{isCollapsed:n}=X(e),t=g(null),l=g(null),a=g(null),i=g(0),o=g(0);let s=0,r=!1;const d=y((()=>({height:`${o.value}%`,transform:`translateY(${i.value}%)`}))),u=()=>{H((()=>{p()}))};L("emitScrollUpdate",u),B((()=>{u(),window.addEventListener("resize",u)})),A((()=>{window.removeEventListener("resize",u)})),O((()=>n.value),(()=>{u()}));const m=e=>{if(!r)return;const n=e.clientY-l.value.getBoundingClientRect().y,t=a.value.offsetHeight-s;h(n-t)},c=e=>{r=!1,s=0,window.removeEventListener("mousemove",m),window.removeEventListener("mouseup",c)},p=()=>{const e=100*t.value.clientHeight/t.value.scrollHeight;o.value=e<100?e:0,i.value=100*t.value.scrollTop/t.value.clientHeight},h=e=>{const n=100*e/l.value.offsetHeight;t.value.scrollTop=n*t.value.scrollHeight/100};return{scrollRef:t,scrollBarRef:l,scrollThumbRef:a,thumbStyle:d,onScroll:()=>{requestAnimationFrame(u)},onClick:e=>{const n=Math.abs(l.value.getBoundingClientRect().y-e.clientY),t=a.value.offsetHeight/2;h(n-t)},onMouseDown:e=>{e.stopImmediatePropagation(),r=!0,window.addEventListener("mousemove",m),window.addEventListener("mouseup",c),s=a.value.offsetHeight-(e.clientY-a.value.getBoundingClientRect().y)}}}},pe={class:"vsm--scroll-wrapper"},he={class:"vsm--scroll-overflow"};ce.render=function(e,n,t,l,a,i){return s(),r("div",pe,[d("div",he,[d("div",{ref:"scrollRef",class:"vsm--scroll",onScroll:n[1]||(n[1]=(...e)=>l.onScroll&&l.onScroll(...e))},[k(e.$slots,"default")],544),d("div",{ref:"scrollBarRef",class:"vsm--scroll-bar",onMousedown:n[3]||(n[3]=(...e)=>l.onClick&&l.onClick(...e))},[d("div",{ref:"scrollThumbRef",class:"vsm--scroll-thumb",style:l.thumbStyle,onMousedown:n[2]||(n[2]=(...e)=>l.onMouseDown&&l.onMouseDown(...e))},null,36)],544)])])};const ve={name:"SidebarMenu",components:{SidebarMenuItem:de,SidebarMenuScroll:ce},props:{menu:{type:Array,required:!0},collapsed:{type:Boolean,default:!1},width:{type:String,default:"290px"},widthCollapsed:{type:String,default:"65px"},showChild:{type:Boolean,default:!1},theme:{type:String,default:""},showOneChild:{type:Boolean,default:!1},rtl:{type:Boolean,default:!1},relative:{type:Boolean,default:!1},hideToggle:{type:Boolean,default:!1},disableHover:{type:Boolean,default:!1},linkComponentName:{type:String,default:void 0}},emits:{"item-click":(e,n)=>!(!e||!n),"update:collapsed":e=>!("boolean"!=typeof e)},setup(e,n){L("vsm-props",e);const{sidebarMenuRef:t,isCollapsed:l,sidebarWidth:a,sidebarClass:i,onToggleClick:o,onItemClick:s,onRouteChange:r,unsetMobileItem:d}=X(e,n);L("emitItemClick",s),L("emitScrollUpdate"),L("onRouteChange",r);const{collapsed:u}=I(e);l.value=u.value,O((()=>e.collapsed),(e=>{d(),l.value=e}));return w().appContext.config.globalProperties.$router||(B((()=>{window.addEventListener("hashchange",r)})),A((()=>{window.removeEventListener("hashchange",r)}))),{sidebarMenuRef:t,isCollapsed:l,sidebarWidth:a,sidebarClass:i,onToggleClick:o,onItemClick:s,onRouteChange:r}}},fe=d("span",{class:"vsm--arrow_default"},null,-1),ge=d("span",{class:"vsm--toggle-btn_default"},null,-1);ve.render=function(e,n,t,l,a,i){const m=o("sidebar-menu-item"),c=o("sidebar-menu-scroll");return s(),r("div",{ref:"sidebarMenuRef",class:["v-sidebar-menu",l.sidebarClass],style:{"max-width":l.sidebarWidth}},[k(e.$slots,"header"),d(c,null,{default:S((()=>[d("ul",{class:"vsm--menu",style:{width:l.sidebarWidth,position:"static !important"}},[(s(!0),r(p,null,h(t.menu,((n,t)=>(s(),r(m,{key:t,item:n},{"dropdown-icon":S((({isOpen:n})=>[k(e.$slots,"dropdown-icon",{isOpen:n},(()=>[fe]))])),_:2},1032,["item"])))),128))],4)])),_:1}),k(e.$slots,"footer"),t.hideToggle?u("",!0):(s(),r("button",{key:0,class:"vsm--toggle-btn",onClick:n[1]||(n[1]=(...e)=>l.onToggleClick&&l.onToggleClick(...e))},[k(e.$slots,"toggle-icon",{},(()=>[ge]))]))],6)};var be={install(e){e.component("SidebarMenu",ve)}};const ye={},we=d("h2",null,"Installation",-1),Ce=d("p",null,"Use npm to install plugin",-1),ke=v(f("npm i vue-sidebar-menu@next --save")),xe=d("p",null,"Import the plugin globally",-1),Se=d("p",null,"Or import the component locally.",-1),Me=v(f("import { SidebarMenu } from 'vue-sidebar-menu'\nexport default {\n  components: {\n    SidebarMenu\n  }\n}"));ye.render=function(e,n){const t=o("prism-code");return s(),r("div",null,[we,Ce,d(t,{lang:"bash"},{default:S((()=>[ke])),_:1}),xe,d(t,{lang:"js"},{default:S((()=>[v(f("import { createApp } from 'vue'\nimport App from './App.vue'\nimport VueSidebarMenu from 'vue-sidebar-menu'\nimport 'vue-sidebar-menu/dist/vue-sidebar-menu.css'\n\nconst app = createApp(App)\napp.use(VueSidebarMenu)\napp.mount(\"#app\")"),1)])),_:1}),Se,d(t,{lang:"js"},{default:S((()=>[Me])),_:1})])};const Ie={},Oe=d("h2",null,"Basic Usage",-1),Ee=d("h3",null,"Item Properties",-1),_e=v(f("menu [\n  // item\n  {\n    // string or a location object\n    href: '/',\n    // href: { path: '/' }\n    // external: true\n\n    title: 'Dashboard',\n\n    // icon class\n    icon: 'fa fa-user'\n    /* or custom icon\n    icon: {\n      element: 'span',\n      class: 'fa fa-user',\n      // attributes: {}\n      // text: ''\n    }\n    */\n\n    /*\n    badge: {\n      text: 'new',\n      class: 'vsm--badge_default'\n      // attributes: {}\n      // element: 'span'\n    }\n    */\n\n    // child: []\n    // disabled: true\n    // class: ''\n    // attributes: {}\n    // hidden: false\n    // hiddenOnCollapse: true\n  },\n\n  // header item\n  {\n    header: 'Main Navigation'\n    // hidden: false\n    // hiddenOnCollapse: true\n    // class: ''\n    // attributes: {}\n  },\n\n  // component item\n  {\n    component: componentName\n    // props: componentProps\n    // hidden: false\n    // hiddenOnCollapse: true\n  }\n]"));Ie.render=function(e,n){const t=o("prism-code");return s(),r("div",null,[Oe,d(t,{lang:"html"},{default:S((()=>[v(f("<template>\n  <sidebar-menu :menu=\"menu\" />\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        menu: [\n          {\n            header: 'Main Navigation',\n            hiddenOnCollapse: true\n          },\n          {\n            href: '/',\n            title: 'Dashboard',\n            icon: 'fa fa-user'\n          },\n          {\n            href: '/charts',\n            title: 'Charts',\n            icon: 'fa fa-chart-area',\n            child: [\n              {\n                href: '/charts/sublink',\n                title: 'Sub Link'\n              }\n            ]\n          }\n        ]\n      }\n    }\n  }\n<\/script>"),1)])),_:1}),Ee,d(t,{lang:"js"},{default:S((()=>[_e])),_:1})])};const Le={},Be=d("h2",null,"Props",-1);Le.render=function(e,n){const t=o("prism-code");return s(),r("div",null,[Be,d(t,{lang:"js"},{default:S((()=>[v(f("props: {\n  // Sidebar menu (required)\n  menu: {\n    type: Array,\n    required: true\n  },\n\n  // Sidebar Collapse state (v-model:collapsed to enable two-way data binding)\n  collapsed: {\n    type: Boolean,\n    default: false\n  },\n\n  // Sidebar width (expanded)\n  width: {\n    type: String,\n    default: '290px'\n  },\n\n  // Sidebar width (collapsed)\n  widthCollapsed: {\n    type: String,\n    default: '65px'\n  },\n\n  // Keep only one child opened at a time (first level only)\n  showOneChild: {\n    type: Boolean,\n    default: false\n  },\n\n  // Keep all child open\n  showChild: {\n    type: Boolean,\n    default: false\n  },\n\n  // Sidebar right to left\n  rtl: {\n    type: Boolean,\n    default: false\n  },\n\n  // Make sidebar relative to the parent (by default the sidebar is relative to the viewport)\n  relative: {\n    type: Boolean,\n    default: false\n  },\n\n  // Hide toggle collapse btn\n  hideToggle: {\n    type: Boolean,\n    default: false\n  },\n\n  // Sidebar theme (available themes: 'white-theme')\n  theme: {\n    type: String,\n    default: ''\n  },\n\n  // Disable hover on collapse mode\n  disableHover: {\n    type: Boolean,\n    default: false\n  }\n\n  // The name of the custom link component (must be registered globally and define item as a prop)\n  linkComponentName: {\n    type: String,\n    default: undefined\n  }\n}"),1)])),_:1})])};const Ae={},He=d("h2",null,"Events",-1),Te=d("p",null,[d("b",null,"@update:collapsed(collapsed)"),v(" Trigger on toggle btn click")],-1),$e=d("p",null,[d("b",null,"@item-click(event, item)"),v(" Trigger on item link click")],-1);Ae.render=function(e,n){const t=o("prism-code");return s(),r("div",null,[He,d(t,{lang:"html"},{default:S((()=>[v(f('<sidebar-menu @update:collapsed="onToggleCollapse" @item-click="onItemClick" />\n...\nmethods: {\n  onToggleCollapse(collapsed) {},\n  onItemClick(event, item) {}\n}'),1)])),_:1}),Te,$e])};const Re={},Pe=d("h2",null,"Styling",-1),je=d("p",null,"All styles customization can be done in normal CSS by using this classes",-1),De=d("p",null,"or you can override Sass variables (complete list of all variables can be found in `src/scss/_variables.scss`) and create your own theme",-1),We=d("h2",null,"Slots",-1),ze=v(f('<sidebar-menu>\n  <template v-slot:header>header</template>\n  <template v-slot:footer>footer</template>\n  <template v-slot:toggle-icon>toggle-icon</template>\n  <template v-slot:dropdown-icon="{ isOpen }">\n    <span v-if="!isOpen">+</span>\n    <span v-else>-</span>\n  </template>\n</sidebar-menu>'));Re.render=function(e,n){const t=o("prism-code");return s(),r("div",null,[Pe,je,d(t,{lang:"css"},{default:S((()=>[v(f(".v-sidebar-menu {}\n.v-sidebar-menu.vsm_expanded {}\n.v-sidebar-menu.vsm_collapsed {}\n.v-sidebar-menu.vsm_rtl {}\n.v-sidebar-menu .vsm--item {}\n.v-sidebar-menu .vsm--link {}\n.v-sidebar-menu .vsm--link_active {}\n.v-sidebar-menu .vsm--link_open {}\n.v-sidebar-menu .vsm--link_mobile {}\n.v-sidebar-menu .vsm--link_level-[n] {}\n.v-sidebar-menu .vsm--link_disabled {}\n.v-sidebar-menu .vsm--title {}\n.v-sidebar-menu .vsm--icon {}\n.v-sidebar-menu .vsm--arrow {}\n.v-sidebar-menu .vsm--arrow_open {}\n.v-sidebar-menu .vsm--badge {}\n.v-sidebar-menu .vsm--badge_default {}\n.v-sidebar-menu .vsm--header {}\n.v-sidebar-menu .vsm--dropdown {}\n.v-sidebar-menu .vsm--mobile-bg {}\n.v-sidebar-menu .vsm--toggle-btn {}"),1)])),_:1}),De,d(t,{lang:"css"},{default:S((()=>[v(f('@import "custom-var.scss";\n@import "vue-sidebar-menu/src/scss/vue-sidebar-menu.scss";'),1)])),_:1}),We,d(t,{lang:"html"},{default:S((()=>[ze])),_:1})])};const Ue={props:{lang:{type:String,required:!0}},data:()=>({isHighlighted:!1}),mounted(){this.isHighlighted||(T.highlightElement(this.$refs.code),this.isHighlighted=!0)}},Ne=v("    "),qe=v("\r\n      "),Fe=v("\r\n    "),Ye=v("\r\n  ");Ue.render=function(e,n,t,l,a,i){return s(),r("pre",null,[Ne,d("code",{ref:"code",class:`language-${t.lang}`},[qe,k(e.$slots,"default"),Fe],2),Ye])};const Ve=$({history:R(),routes:[{path:"/",name:"Installation",component:ye},{path:"/basic-usage",name:"BasicUsage",component:Ie},{path:"/props",name:"Props",component:Le},{path:"/events",name:"Events",component:Ae},{path:"/styling",name:"Styling",component:Re},{path:"/:pathMatch(.*)",component:ye}]});P(D).use(Ve).use(be).component("prism-code",Ue).mount("#app");