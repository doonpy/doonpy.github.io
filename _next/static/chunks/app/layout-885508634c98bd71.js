(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{9157:function(e,t,a){Promise.resolve().then(a.bind(a,5597)),Promise.resolve().then(a.bind(a,2052)),Promise.resolve().then(a.bind(a,3046)),Promise.resolve().then(a.t.bind(a,8136,23)),Promise.resolve().then(a.t.bind(a,8326,23)),Promise.resolve().then(a.t.bind(a,3994,23)),Promise.resolve().then(a.t.bind(a,2585,23)),Promise.resolve().then(a.bind(a,8817)),Promise.resolve().then(a.bind(a,9592)),Promise.resolve().then(a.bind(a,3247)),Promise.resolve().then(a.t.bind(a,9948,23)),Promise.resolve().then(a.bind(a,2547)),Promise.resolve().then(a.bind(a,7616))},2914:function(e){"use strict";e.exports={title:"Poon Nguyen | Dev & Lifestyle",author:"Poon Nguyen",headerTitle:"Poon Nguyen | Dev & Lifestyle",description:"Write whatever I thinking!",language:"vi-vn, en-us",theme:"system",siteUrl:"https://doonpy.github.io",siteRepo:"https://github.com/doonpy/blog",siteLogo:"/static/images/logo.png",socialBanner:"/static/images/social-banner.png",email:"nguyenduypoon@gmail.com",github:"https://github.com/doonpy",facebook:"https://facebook.com/doonpy",linkedin:"https://www.linkedin.com/in/poonnguyen",locale:"vi-VN",analytics:{googleAnalytics:{googleAnalyticsId:"G-N8K4F9MRED"}},newsletter:{provider:"buttondown"},comments:{provider:"giscus",giscusConfig:{repo:"doonpy/doonpy.github.io",repositoryId:"R_kgDOLkUqYQ",category:"Blog comments",categoryId:"DIC_kwDOLkUqYc4CeLDI",mapping:"pathname",reactions:"1",metadata:"0",theme:"light",darkTheme:"transparent_dark",themeURL:"",lang:"en"}},search:{provider:"kbar",kbarConfig:{searchDocumentsPath:"search.json"}}}},5597:function(e,t,a){"use strict";a.r(t),a.d(t,{ThemeProviders:function(){return s}});var n=a(7651),r=a(8948),o=a(2914),l=a.n(o);function s(e){let{children:t}=e;return(0,n.jsx)(r.f,{attribute:"class",defaultTheme:l().theme,enableSystem:!0,children:t})}},6900:function(e,t,a){"use strict";var n=a(7651),r=a(677);t.Z=e=>{let{href:t,...a}=e,o=t&&t.startsWith("/"),l=t&&t.startsWith("#");return o?(0,n.jsx)(r.default,{href:t,...a}):l?(0,n.jsx)("a",{href:t,...a}):(0,n.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:t,...a})}},2052:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return s}});var n=a(7651),r=a(5874),o=[{href:"/",title:"Home"},{href:"/blog",title:"Blog"},{href:"/tags",title:"Tags"},{href:"/projects",title:"Projects"},{href:"/about",title:"About"}],l=a(6900),s=()=>{let[e,t]=(0,r.useState)(!1),a=()=>{t(e=>(e?document.body.style.overflow="auto":document.body.style.overflow="hidden",!e))};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("button",{"aria-label":"Toggle Menu",onClick:a,className:"sm:hidden",children:(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"h-8 w-8 text-gray-900 dark:text-gray-100",children:(0,n.jsx)("path",{fillRule:"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",clipRule:"evenodd"})})}),(0,n.jsxs)("div",{className:"fixed left-0 top-0 z-10 h-full w-full transform bg-white opacity-95 duration-300 ease-in-out dark:bg-gray-950 dark:opacity-[0.98] ".concat(e?"translate-x-0":"translate-x-full"),children:[(0,n.jsx)("div",{className:"flex justify-end",children:(0,n.jsx)("button",{className:"mr-8 mt-11 h-8 w-8","aria-label":"Toggle Menu",onClick:a,children:(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"text-gray-900 dark:text-gray-100",children:(0,n.jsx)("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})})})}),(0,n.jsx)("nav",{className:"fixed mt-8 h-full",children:o.map(e=>(0,n.jsx)("div",{className:"px-12 py-4",children:(0,n.jsx)(l.Z,{href:e.href,className:"text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100",onClick:a,children:e.title})},e.title))})]})]})}},3046:function(e,t,a){"use strict";a.r(t);var n=a(7651),r=a(8948),o=a(5874);t.default=()=>{let[e,t]=(0,o.useState)(!1),{theme:a,setTheme:l,resolvedTheme:s}=(0,r.F)();return((0,o.useEffect)(()=>t(!0),[]),e)?(0,n.jsx)("button",{"aria-label":"Toggle Dark Mode",onClick:()=>l("dark"===a||"dark"===s?"light":"dark"),children:(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"h-6 w-6 text-gray-900 dark:text-gray-100",children:e&&("dark"===a||"dark"===s)?(0,n.jsx)("path",{fillRule:"evenodd",d:"M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z",clipRule:"evenodd"}):(0,n.jsx)("path",{d:"M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"})})}):null}},8136:function(){}},function(e){e.O(0,[326,521,971,618,744],function(){return e(e.s=9157)}),_N_E=e.O()}]);