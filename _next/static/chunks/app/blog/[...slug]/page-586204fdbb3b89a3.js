(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[797],{2229:function(e,t,n){Promise.resolve().then(n.bind(n,104)),Promise.resolve().then(n.bind(n,3630)),Promise.resolve().then(n.t.bind(n,1182,23)),Promise.resolve().then(n.t.bind(n,3756,23)),Promise.resolve().then(n.t.bind(n,413,23)),Promise.resolve().then(n.t.bind(n,8326,23)),Promise.resolve().then(n.bind(n,7031)),Promise.resolve().then(n.bind(n,5352))},2914:function(e){"use strict";e.exports={title:"Poon Nguyen | Dev & Lifestyle",author:"Poon Nguyen",headerTitle:"Poon Nguyen | Dev & Lifestyle",description:"Write whatever I thinking!",language:"vi,en",theme:"system",siteUrl:"https://doonpy.github.io",siteRepo:"https://github.com/doonpy/blog",siteLogo:"/static/images/logo.png",socialBanner:"/static/images/social-banner.png",email:"nguyenduypoon@gmail.com",github:"https://github.com/doonpy",facebook:"https://facebook.com/doonpy",linkedin:"https://www.linkedin.com/in/poonnguyen",locale:"vi-VN",analytics:{googleAnalytics:{googleAnalyticsId:"G-N8K4F9MRED"}},newsletter:{provider:"buttondown"},comments:{provider:"giscus",giscusConfig:{repo:"doonpy/doonpy.github.io",repositoryId:"R_kgDOLkUqYQ",category:"Blog comments",categoryId:"DIC_kwDOLkUqYc4CeLDI",mapping:"pathname",reactions:"1",metadata:"0",theme:"light",darkTheme:"transparent_dark",themeURL:"",lang:"en"}},search:{provider:"kbar",kbarConfig:{searchDocumentsPath:"search.json"}}}},8948:function(e,t,n){"use strict";n.d(t,{F:function(){return l},f:function(){return c}});var r=n(5874);let o=["light","dark"],a="(prefers-color-scheme: dark)",s=(0,r.createContext)(void 0),i={setTheme:e=>{},themes:[]},l=()=>{var e;return null!==(e=(0,r.useContext)(s))&&void 0!==e?e:i},c=e=>(0,r.useContext)(s)?r.createElement(r.Fragment,null,e.children):r.createElement(u,e),d=["light","dark"],u=e=>{let{forcedTheme:t,disableTransitionOnChange:n=!1,enableSystem:i=!0,enableColorScheme:l=!0,storageKey:c="theme",themes:u=d,defaultTheme:f=i?"system":"light",attribute:v="data-theme",value:y,children:b,nonce:x}=e,[k,w]=(0,r.useState)(()=>h(c,f)),[j,C]=(0,r.useState)(()=>h(c)),S=y?Object.values(y):u,N=(0,r.useCallback)(e=>{let t=e;if(!t)return;"system"===e&&i&&(t=p());let r=y?y[t]:t,a=n?g():null,s=document.documentElement;if("class"===v?(s.classList.remove(...S),r&&s.classList.add(r)):r?s.setAttribute(v,r):s.removeAttribute(v),l){let e=o.includes(f)?f:null,n=o.includes(t)?t:e;s.style.colorScheme=n}null==a||a()},[]),E=(0,r.useCallback)(e=>{w(e);try{localStorage.setItem(c,e)}catch(e){}},[t]),T=(0,r.useCallback)(e=>{C(p(e)),"system"===k&&i&&!t&&N("system")},[k,t]);(0,r.useEffect)(()=>{let e=window.matchMedia(a);return e.addListener(T),T(e),()=>e.removeListener(T)},[T]),(0,r.useEffect)(()=>{let e=e=>{e.key===c&&E(e.newValue||f)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[E]),(0,r.useEffect)(()=>{N(null!=t?t:k)},[t,k]);let L=(0,r.useMemo)(()=>({theme:k,setTheme:E,forcedTheme:t,resolvedTheme:"system"===k?j:k,themes:i?[...u,"system"]:u,systemTheme:i?j:void 0}),[k,E,t,j,i,u]);return r.createElement(s.Provider,{value:L},r.createElement(m,{forcedTheme:t,disableTransitionOnChange:n,enableSystem:i,enableColorScheme:l,storageKey:c,themes:u,defaultTheme:f,attribute:v,value:y,children:b,attrs:S,nonce:x}),b)},m=(0,r.memo)(e=>{let{forcedTheme:t,storageKey:n,attribute:s,enableSystem:i,enableColorScheme:l,defaultTheme:c,value:d,attrs:u,nonce:m}=e,h="system"===c,g="class"===s?"var d=document.documentElement,c=d.classList;c.remove(".concat(u.map(e=>"'".concat(e,"'")).join(","),");"):"var d=document.documentElement,n='".concat(s,"',s='setAttribute';"),p=l?o.includes(c)&&c?"if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'".concat(c,"'"):"if(e==='light'||e==='dark')d.style.colorScheme=e":"",f=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!(arguments.length>2)||void 0===arguments[2]||arguments[2],r=d?d[e]:e,a=t?e+"|| ''":"'".concat(r,"'"),i="";return l&&n&&!t&&o.includes(e)&&(i+="d.style.colorScheme = '".concat(e,"';")),"class"===s?i+=t||r?"c.add(".concat(a,")"):"null":r&&(i+="d[s](n,".concat(a,")")),i},v=t?"!function(){".concat(g).concat(f(t),"}()"):i?"!function(){try{".concat(g,"var e=localStorage.getItem('").concat(n,"');if('system'===e||(!e&&").concat(h,")){var t='").concat(a,"',m=window.matchMedia(t);if(m.media!==t||m.matches){").concat(f("dark"),"}else{").concat(f("light"),"}}else if(e){").concat(d?"var x=".concat(JSON.stringify(d),";"):"").concat(f(d?"x[e]":"e",!0),"}").concat(h?"":"else{"+f(c,!1,!1)+"}").concat(p,"}catch(e){}}()"):"!function(){try{".concat(g,"var e=localStorage.getItem('").concat(n,"');if(e){").concat(d?"var x=".concat(JSON.stringify(d),";"):"").concat(f(d?"x[e]":"e",!0),"}else{").concat(f(c,!1,!1),";}").concat(p,"}catch(t){}}();");return r.createElement("script",{nonce:m,dangerouslySetInnerHTML:{__html:v}})},()=>!0),h=(e,t)=>{let n;try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t},g=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},p=e=>(e||(e=window.matchMedia(a)),e.matches?"dark":"light")},7031:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var r=n(5874),o=n(7651),a=(e,t,n)=>new Promise((r,o)=>{var a=e=>{try{i(n.next(e))}catch(e){o(e)}},s=e=>{try{i(n.throw(e))}catch(e){o(e)}},i=e=>e.done?r(e.value):Promise.resolve(e.value).then(a,s);i((n=n.apply(e,t)).next())}),s=e=>{let{title:t="Subscribe to the newsletter",apiUrl:n="/api/newsletter"}=e,s=(0,r.useRef)(null),[i,l]=(0,r.useState)(!1),[c,d]=(0,r.useState)(""),[u,m]=(0,r.useState)(!1);return(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{className:"pb-1 text-lg font-semibold text-gray-800 dark:text-gray-100",children:t}),(0,o.jsxs)("form",{className:"flex flex-col sm:flex-row",onSubmit:e=>a(void 0,null,function*(){e.preventDefault();let t=yield fetch(n,{body:JSON.stringify({email:s.current.value}),headers:{"Content-Type":"application/json"},method:"POST"}),{error:r}=yield t.json();if(r){l(!0),d("Your e-mail address is invalid or you are already subscribed!");return}s.current.value="",l(!1),m(!0)}),children:[(0,o.jsx)("div",{children:(0,o.jsxs)("label",{htmlFor:"email-input",children:[(0,o.jsx)("span",{className:"sr-only",children:"Email address"}),(0,o.jsx)("input",{autoComplete:"email",className:"focus:ring-primary-600 w-72 rounded-md px-4 focus:border-transparent focus:outline-none focus:ring-2 dark:bg-black",id:"email-input",name:"email",placeholder:u?"You're subscribed !  \uD83C\uDF89":"Enter your email",ref:s,required:!0,type:"email",disabled:u})]})}),(0,o.jsx)("div",{className:"mt-2 flex w-full rounded-md shadow-sm sm:mt-0 sm:ml-3",children:(0,o.jsx)("button",{className:"bg-primary-500 w-full rounded-md py-2 px-4 font-medium text-white sm:py-0 ".concat(u?"cursor-default":"hover:bg-primary-700 dark:hover:bg-primary-400"," focus:ring-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:ring-offset-black"),type:"submit",disabled:u,children:u?"Thank you!":"Sign up"})})]}),i&&(0,o.jsx)("div",{className:"w-72 pt-2 text-sm text-red-500 dark:text-red-400 sm:w-96",children:c})]})},i=e=>{let{title:t,apiUrl:n}=e;return(0,o.jsx)("div",{className:"flex items-center justify-center",children:(0,o.jsx)("div",{className:"bg-gray-100 p-6 dark:bg-gray-800 sm:px-14 sm:py-8",children:(0,o.jsx)(s,{title:t,apiUrl:n})})})}},5352:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return a}});var r=n(5874),o=n(7651),a=e=>{let{children:t}=e,n=(0,r.useRef)(null),[a,s]=(0,r.useState)(!1),[i,l]=(0,r.useState)(!1);return(0,o.jsxs)("div",{ref:n,onMouseEnter:()=>{s(!0)},onMouseLeave:()=>{s(!1),l(!1)},className:"relative",children:[a&&(0,o.jsx)("button",{"aria-label":"Copy code",className:"absolute right-2 top-2 h-8 w-8 rounded border-2 bg-gray-700 p-1 dark:bg-gray-800 ".concat(i?"border-green-400 focus:border-green-400 focus:outline-none":"border-gray-300"),onClick:()=>{l(!0),navigator.clipboard.writeText(n.current.textContent),setTimeout(()=>{l(!1)},2e3)},children:(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",stroke:"currentColor",fill:"none",className:i?"text-green-400":"text-gray-300",children:i?(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"})}):(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"})})})}),(0,o.jsx)("pre",{children:t})]})}},104:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var r=n(7651),o=n(5874);function a(e){let{id:t,host:a,repo:s,repoId:i,category:l,categoryId:c,mapping:d,term:u,strict:m,reactionsEnabled:h,emitMetadata:g,inputPosition:p,theme:f,lang:v,loading:y}=e,[b,x]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{b||(n.e(611).then(n.bind(n,611)),x(!0))},[]),b?(0,r.jsx)("giscus-widget",{id:t,host:a,repo:s,repoid:i,category:l,categoryid:c,mapping:d,term:u,strict:m,reactionsenabled:h,emitmetadata:g,inputposition:p,theme:f,lang:v,loading:y}):null}var s=n(8948),i=n(2914),l=n.n(i);function c(e){let{slug:t}=e,{theme:n,resolvedTheme:o}=(0,s.F)();if(!l().comments||"giscus"!==l().comments.provider)return(0,r.jsx)(r.Fragment,{});let{themeURL:i,theme:c,darkTheme:d,repo:u,repositoryId:m,category:h,categoryId:g,reactions:p,metadata:f,inputPosition:v,lang:y,mapping:b}=l().comments.giscusConfig;return(0,r.jsx)(a,{id:"comments-container",repo:u,repoId:m,category:h,categoryId:g,mapping:b,reactionsEnabled:p,emitMetadata:f,inputPosition:v,theme:""===i?"dark"===n||"dark"===o?d:c:i,lang:y,loading:"lazy",strict:"1"})}},3630:function(e,t,n){"use strict";n.r(t);var r=n(7651),o=n(5874),a=n(2914),s=n.n(a);t.default=()=>{var e;let[t,n]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{let e=()=>{window.scrollY>50?n(!0):n(!1)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),(0,r.jsxs)("div",{className:"fixed bottom-8 right-8 hidden flex-col gap-3 ".concat(t?"md:flex":"md:hidden"),children:[(null===(e=s().comments)||void 0===e?void 0:e.provider)&&(0,r.jsx)("button",{"aria-label":"Scroll To Comment",onClick:()=>{var e;null===(e=document.getElementById("comment"))||void 0===e||e.scrollIntoView()},className:"rounded-full bg-gray-200 p-2 text-gray-500 transition-all hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600",children:(0,r.jsx)("svg",{className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z",clipRule:"evenodd"})})}),(0,r.jsx)("button",{"aria-label":"Scroll To Top",onClick:()=>{window.scrollTo({top:0})},className:"rounded-full bg-gray-200 p-2 text-gray-500 transition-all hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600",children:(0,r.jsx)("svg",{className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z",clipRule:"evenodd"})})})]})}},3756:function(){},1182:function(){}},function(e){e.O(0,[326,413,971,618,744],function(){return e(e.s=2229)}),_N_E=e.O()}]);