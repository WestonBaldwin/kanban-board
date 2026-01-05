(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,2960,e=>{"use strict";var i=e.i(80506),t=e.i(85237),s=e.i(78419);e.i(40957);var a=e.i(778),r=e.i(38039),c=e.i(5006);e.i(12234),e.i(36043),e.i(4862),e.i(2441).canUseDOM?a.useLayoutEffect:a.useEffect,e.i(8424),e.i(84145),(0,c.maybeDeepFreeze)({data:void 0,dataState:"empty",loading:!1,networkStatus:r.NetworkStatus.ready,partial:!0});let l={},n=t.gql`
    query GetCountries {
  countries {
    code
    name
  }
}
    `;function o(){let e,{data:t,loading:a,error:r}=(e={...l,...void 0},s.useQuery(n,e));return a?(0,i.jsx)("p",{children:"Loading…"}):r?(0,i.jsxs)("p",{children:["Error: ",r.message]}):(0,i.jsxs)("main",{className:"p-6 space-y-2",children:[(0,i.jsx)("h1",{className:"text-2xl font-semibold",children:"Countries"}),(0,i.jsx)("ul",{className:"list-disc pl-6",children:t?.countries.map(e=>(0,i.jsx)("li",{children:e.name},e.code))})]})}e.s(["default",()=>o],2960)}]);