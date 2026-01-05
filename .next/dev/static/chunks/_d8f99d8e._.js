(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/graphql/types.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GetCountriesDocument",
    ()=>GetCountriesDocument,
    "useGetCountriesLazyQuery",
    ()=>useGetCountriesLazyQuery,
    "useGetCountriesQuery",
    ()=>useGetCountriesQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/graphql-tag/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$useLazyQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@apollo/client/react/hooks/useLazyQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@apollo/client/react/hooks/useQuery.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
;
;
const defaultOptions = {};
const GetCountriesDocument = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"]`
    query GetCountries {
  countries {
    code
    name
  }
}
    `;
function useGetCountriesQuery(baseOptions) {
    _s();
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"](GetCountriesDocument, options);
}
_s(useGetCountriesQuery, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useGetCountriesLazyQuery(baseOptions) {
    _s1();
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$useLazyQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLazyQuery"](GetCountriesDocument, options);
}
_s1(useGetCountriesLazyQuery, "On+3mFuZjiEOS3MQLgFXtHkppJ4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$useLazyQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLazyQuery"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/countries/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CountriesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/graphql/types.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function CountriesPage() {
    _s();
    const { data, loading, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetCountriesQuery"])();
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        children: "Loading…"
    }, void 0, false, {
        fileName: "[project]/src/app/countries/page.tsx",
        lineNumber: 8,
        columnNumber: 23
    }, this);
    if (error) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        children: [
            "Error: ",
            error.message
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/countries/page.tsx",
        lineNumber: 9,
        columnNumber: 21
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "p-6 space-y-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-2xl font-semibold",
                children: "Countries"
            }, void 0, false, {
                fileName: "[project]/src/app/countries/page.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "list-disc pl-6",
                children: data?.countries.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: c.name
                    }, c.code, false, {
                        fileName: "[project]/src/app/countries/page.tsx",
                        lineNumber: 16,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/countries/page.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/countries/page.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_s(CountriesPage, "utQUdsvBjeoEmPo1xOyua74GosU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetCountriesQuery"]
    ];
});
_c = CountriesPage;
var _c;
__turbopack_context__.k.register(_c, "CountriesPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/@apollo/client/react/hooks/internal/useRenderGuard.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useRenderGuard",
    ()=>useRenderGuard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
let Ctx;
function noop() {}
function useRenderGuard() {
    if (!Ctx) {
        // we want the initialization to be lazy because `createContext` would error on import in a RSC
        Ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createContext(null);
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "useRenderGuard.useCallback": /**
     * @returns true if the hook was called during render
     */ ()=>{
            const orig = console.error;
            try {
                console.error = noop;
                /**
             * `useContext` can be called conditionally during render, so this is safe.
             * (Also, during render we would want to throw as a reaction to this anyways, so it
             * wouldn't even matter if we got the order of hooks mixed up...)
             *
             * They cannot however be called outside of Render, and that's what we're testing here.
             *
             * Different versions of React have different behaviour on an invalid hook call:
             *
             * React 16.8 - 17: throws an error
             * https://github.com/facebook/react/blob/2b93d686e359c7afa299e2ec5cf63160a32a1155/packages/react/src/ReactHooks.js#L18-L26
             *
             * React 18 & 19: `console.error` in development, then `resolveDispatcher` returns `null` and a member access on `null` throws.
             * https://github.com/facebook/react/blob/58e8304483ebfadd02a295339b5e9a989ac98c6e/packages/react/src/ReactHooks.js#L28-L35
             */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext" /* hide this from the linter */ ](Ctx);
                return true;
            } catch (e) {
                return false;
            } finally{
                console.error = orig;
            }
        }
    }["useRenderGuard.useCallback"], []);
} //# sourceMappingURL=useRenderGuard.js.map
}),
"[project]/node_modules/@apollo/client/react/hooks/internal/useDeepMemo.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDeepMemo",
    ()=>useDeepMemo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wry$2f$equality$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@wry/equality/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
function useDeepMemo(memoFn, deps) {
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](void 0);
    if (!ref.current || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wry$2f$equality$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["equal"])(ref.current.deps, deps)) {
        ref.current = {
            value: memoFn(),
            deps
        };
    }
    return ref.current.value;
} //# sourceMappingURL=useDeepMemo.js.map
}),
"[project]/node_modules/@apollo/client/utilities/internal/canUseDOM.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "canUseDOM",
    ()=>canUseDOM
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$globals$2f$maybe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@apollo/client/utilities/internal/globals/maybe.js [app-client] (ecmascript)");
;
const canUseDOM = typeof (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$globals$2f$maybe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["maybe"])(()=>window.document.createElement) === "function"; //# sourceMappingURL=canUseDOM.js.map
}),
"[project]/node_modules/@apollo/client/react/hooks/internal/useIsomorphicLayoutEffect.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useIsomorphicLayoutEffect",
    ()=>useIsomorphicLayoutEffect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$canUseDOM$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@apollo/client/utilities/internal/canUseDOM.js [app-client] (ecmascript)");
;
;
const useIsomorphicLayoutEffect = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$canUseDOM$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canUseDOM"] ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]; //# sourceMappingURL=useIsomorphicLayoutEffect.js.map
}),
"[project]/node_modules/@apollo/client/react/hooks/useSyncExternalStore.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSyncExternalStore",
    ()=>useSyncExternalStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$environment$2f$index$2e$development$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@apollo/client/utilities/environment/index.development.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$canUseDOM$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@apollo/client/utilities/internal/canUseDOM.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$globals$2f$maybe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@apollo/client/utilities/internal/globals/maybe.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@apollo/client/utilities/invariant/index.development.js [app-client] (ecmascript) <locals>");
;
;
;
;
;
let didWarnUncachedGetSnapshot = false;
// Prevent webpack from complaining about our feature detection of the
// useSyncExternalStore property of the React namespace, which is expected not
// to exist when using React 17 and earlier, and that's fine.
const uSESKey = "useSyncExternalStore";
const realHook = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[uSESKey];
const isReactNative = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$globals$2f$maybe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["maybe"])(()=>navigator.product) == "ReactNative";
const usingJSDOM = // Following advice found in this comment from @domenic (maintainer of jsdom):
// https://github.com/jsdom/jsdom/issues/1537#issuecomment-229405327
//
// Since we control the version of Jest and jsdom used when running Apollo
// Client tests, and that version is recent enough to include " jsdom/x.y.z"
// at the end of the user agent string, I believe this case is all we need to
// check. Testing for "Node.js" was recommended for backwards compatibility
// with older version of jsdom, but we don't have that problem.
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$globals$2f$maybe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["maybe"])(()=>navigator.userAgent.indexOf("jsdom") >= 0) || false;
// Our tests should all continue to pass if we remove this !usingJSDOM
// condition, thereby allowing useLayoutEffect when using jsdom. Unfortunately,
// if we allow useLayoutEffect, then useSyncExternalStore generates many
// warnings about useLayoutEffect doing nothing on the server. While these
// warnings are harmless, this !usingJSDOM condition seems to be the best way to
// prevent them (i.e. skipping useLayoutEffect when using jsdom).
const canUseLayoutEffect = (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$canUseDOM$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canUseDOM"] || isReactNative) && !usingJSDOM;
const useSyncExternalStore = realHook || ((subscribe, getSnapshot, getServerSnapshot)=>{
    // Read the current snapshot from the store on every render. Again, this
    // breaks the rules of React, and only works here because of specific
    // implementation details, most importantly that updates are
    // always synchronous.
    const value = getSnapshot();
    if (// DEVIATION: Using __DEV__
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$environment$2f$index$2e$development$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__DEV__"] && !didWarnUncachedGetSnapshot && // DEVIATION: Not using Object.is because we know our snapshots will never
    // be exotic primitive values like NaN, which is !== itself.
    value !== getSnapshot()) {
        didWarnUncachedGetSnapshot = true;
        // DEVIATION: Using invariant.error instead of console.error directly.
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["invariant"].error(34);
    }
    // Because updates are synchronous, we don't queue them. Instead we force a
    // re-render whenever the subscribed state changes by updating an some
    // arbitrary useState hook. Then, during render, we call getSnapshot to read
    // the current value.
    //
    // Because we don't actually use the state returned by the useState hook, we
    // can save a bit of memory by storing other stuff in that slot.
    //
    // To implement the early bailout, we need to track some things on a mutable
    // object. Usually, we would put that in a useRef hook, but we can stash it in
    // our useState hook instead.
    //
    // To force a re-render, we call forceUpdate({inst}). That works because the
    // new object always fails an equality check.
    const [{ inst }, forceUpdate] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState({
        inst: {
            value,
            getSnapshot
        }
    });
    // Track the latest getSnapshot function with a ref. This needs to be updated
    // in the layout phase so we can access it during the tearing check that
    // happens on subscribe.
    if (canUseLayoutEffect) {
        // DEVIATION: We avoid calling useLayoutEffect when !canUseLayoutEffect,
        // which may seem like a conditional hook, but this code ends up behaving
        // unconditionally (one way or the other) because canUseLayoutEffect is
        // constant.
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useLayoutEffect(()=>{
            Object.assign(inst, {
                value,
                getSnapshot
            });
            // Whenever getSnapshot or subscribe changes, we need to check in the
            // commit phase if there was an interleaved mutation. In concurrent mode
            // this can happen all the time, but even in synchronous mode, an earlier
            // effect may have mutated the store.
            if (checkIfSnapshotChanged(inst)) {
                // Force a re-render.
                forceUpdate({
                    inst
                });
            }
        // React Hook React.useLayoutEffect has a missing dependency: 'inst'. Either include it or remove the dependency array.
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [
            subscribe,
            value,
            getSnapshot
        ]);
    } else {
        Object.assign(inst, {
            value,
            getSnapshot
        });
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect(()=>{
        // Check for changes right before subscribing. Subsequent changes will be
        // detected in the subscription handler.
        if (checkIfSnapshotChanged(inst)) {
            // Force a re-render.
            forceUpdate({
                inst
            });
        }
        // Subscribe to the store and return a clean-up function.
        return subscribe(function handleStoreChange() {
            // TODO: Because there is no cross-renderer API for batching updates, it's
            // up to the consumer of this library to wrap their subscription event
            // with unstable_batchedUpdates. Should we try to detect when this isn't
            // the case and print a warning in development?
            // The store changed. Check if the snapshot changed since the last time we
            // read from the store.
            if (checkIfSnapshotChanged(inst)) {
                // Force a re-render.
                forceUpdate({
                    inst
                });
            }
        });
    // React Hook React.useEffect has a missing dependency: 'inst'. Either include it or remove the dependency array.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        subscribe
    ]);
    return value;
});
function checkIfSnapshotChanged({ value, getSnapshot }) {
    try {
        return value !== getSnapshot();
    } catch  {
        return true;
    }
} //# sourceMappingURL=useSyncExternalStore.js.map
}),
"[project]/node_modules/@apollo/client/react/hooks/useLazyQuery.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useLazyQuery",
    ()=>useLazyQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wry$2f$equality$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@wry/equality/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$core$2f$networkStatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@apollo/client/core/networkStatus.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$maybeDeepFreeze$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@apollo/client/utilities/internal/maybeDeepFreeze.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@apollo/client/utilities/internal/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@apollo/client/utilities/invariant/index.development.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$internal$2f$useRenderGuard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@apollo/client/react/hooks/internal/useRenderGuard.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$internal$2f$useDeepMemo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@apollo/client/react/hooks/internal/useDeepMemo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$internal$2f$useIsomorphicLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@apollo/client/react/hooks/internal/useIsomorphicLayoutEffect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$useApolloClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@apollo/client/react/hooks/useApolloClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$useSyncExternalStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@apollo/client/react/hooks/useSyncExternalStore.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
// The following methods, when called will execute the query, regardless of
// whether the useLazyQuery execute function was called before.
const EAGER_METHODS = [
    "refetch",
    "fetchMore",
    "updateQuery",
    "startPolling",
    "stopPolling",
    "subscribeToMore"
];
function useLazyQuery(query, options) {
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$useApolloClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApolloClient"])(options?.client);
    const previousDataRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](undefined);
    const resultRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](undefined);
    const stableOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$internal$2f$useDeepMemo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeepMemo"])({
        "useLazyQuery.useDeepMemo[stableOptions]": ()=>options
    }["useLazyQuery.useDeepMemo[stableOptions]"], [
        options
    ]);
    const calledDuringRender = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$internal$2f$useRenderGuard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRenderGuard"])();
    function createObservable() {
        return client.watchQuery({
            ...options,
            query,
            initialFetchPolicy: options?.fetchPolicy,
            fetchPolicy: "standby",
            [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["variablesUnknownSymbol"]]: true
        });
    }
    const [currentClient, setCurrentClient] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](client);
    const [observable, setObservable] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](createObservable);
    if (currentClient !== client) {
        setCurrentClient(client);
        setObservable(createObservable());
    }
    // TODO: Revisit after we have RxJS in place. We should be able to use
    // observable.getCurrentResult() (or equivalent) to get these values which
    // will hopefully alleviate the need for us to use refs to track these values.
    const updateResult = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useLazyQuery.useCallback[updateResult]": (result, forceUpdate)=>{
            const previousData = resultRef.current?.data;
            if (previousData && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wry$2f$equality$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["equal"])(previousData, result.data)) {
                previousDataRef.current = previousData;
            }
            resultRef.current = result;
            forceUpdate();
        }
    }["useLazyQuery.useCallback[updateResult]"], []);
    const observableResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$useSyncExternalStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useLazyQuery.useSyncExternalStore[observableResult]": (forceUpdate)=>{
            const subscription = observable.subscribe({
                "useLazyQuery.useSyncExternalStore[observableResult].subscription": (result)=>{
                    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wry$2f$equality$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["equal"])(resultRef.current, result)) {
                        updateResult(result, forceUpdate);
                    }
                }
            }["useLazyQuery.useSyncExternalStore[observableResult].subscription"]);
            return ({
                "useLazyQuery.useSyncExternalStore[observableResult]": ()=>{
                    subscription.unsubscribe();
                }
            })["useLazyQuery.useSyncExternalStore[observableResult]"];
        }
    }["useLazyQuery.useSyncExternalStore[observableResult]"], [
        observable,
        updateResult
    ]), {
        "useLazyQuery.useSyncExternalStore[observableResult]": ()=>resultRef.current || initialResult
    }["useLazyQuery.useSyncExternalStore[observableResult]"], {
        "useLazyQuery.useSyncExternalStore[observableResult]": ()=>initialResult
    }["useLazyQuery.useSyncExternalStore[observableResult]"]);
    // We use useMemo here to make sure the eager methods have a stable identity.
    const eagerMethods = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useLazyQuery.useMemo[eagerMethods]": ()=>{
            const eagerMethods = {};
            for (const key of EAGER_METHODS){
                eagerMethods[key] = ({
                    "useLazyQuery.useMemo[eagerMethods]": function(...args) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["invariant"])(resultRef.current, 29, key);
                        // @ts-expect-error this is just to generic to type
                        return observable[key](...args);
                    }
                })["useLazyQuery.useMemo[eagerMethods]"];
            }
            return eagerMethods;
        }
    }["useLazyQuery.useMemo[eagerMethods]"], [
        observable
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useLazyQuery.useEffect": ()=>{
            const updatedOptions = {
                query,
                errorPolicy: stableOptions?.errorPolicy,
                refetchWritePolicy: stableOptions?.refetchWritePolicy,
                returnPartialData: stableOptions?.returnPartialData,
                notifyOnNetworkStatusChange: stableOptions?.notifyOnNetworkStatusChange,
                nextFetchPolicy: options?.nextFetchPolicy,
                skipPollAttempt: options?.skipPollAttempt
            };
            // Wait to apply the changed fetch policy until after the execute
            // function has been called. The execute function will handle setting the
            // the fetch policy away from standby for us when called for the first time.
            if (observable.options.fetchPolicy !== "standby" && stableOptions?.fetchPolicy) {
                updatedOptions.fetchPolicy = stableOptions.fetchPolicy;
            }
            observable.applyOptions(updatedOptions);
        }
    }["useLazyQuery.useEffect"], [
        query,
        observable,
        stableOptions,
        // Ensure inline functions don't suffer from stale closures by checking for
        // these deps separately. @wry/equality doesn't compare function identity
        // so `stableOptions` isn't updated when using inline functions.
        options?.nextFetchPolicy,
        options?.skipPollAttempt
    ]);
    const execute = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useLazyQuery.useCallback[execute]": (...args)=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$development$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["invariant"])(!calledDuringRender(), 30);
            const [executeOptions] = args;
            let fetchPolicy = observable.options.fetchPolicy;
            if (fetchPolicy === "standby") {
                fetchPolicy = observable.options.initialFetchPolicy;
            }
            return observable.reobserve({
                fetchPolicy,
                // If `variables` is not given, reset back to empty variables by
                // ensuring the key exists in options
                variables: executeOptions?.variables,
                context: executeOptions?.context ?? {}
            });
        }
    }["useLazyQuery.useCallback[execute]"], [
        observable,
        calledDuringRender
    ]);
    const executeRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](execute);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$internal$2f$useIsomorphicLayoutEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsomorphicLayoutEffect"])({
        "useLazyQuery.useIsomorphicLayoutEffect": ()=>{
            executeRef.current = execute;
        }
    }["useLazyQuery.useIsomorphicLayoutEffect"]);
    const stableExecute = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useLazyQuery.useCallback[stableExecute]": (...args)=>executeRef.current(...args)
    }["useLazyQuery.useCallback[stableExecute]"], []);
    const result = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useLazyQuery.useMemo[result]": ()=>{
            const { partial, ...result } = observableResult;
            return {
                ...eagerMethods,
                ...result,
                client,
                previousData: previousDataRef.current,
                variables: observable.variables,
                observable,
                called: !!resultRef.current
            };
        }
    }["useLazyQuery.useMemo[result]"], [
        client,
        observableResult,
        eagerMethods,
        observable
    ]);
    return [
        stableExecute,
        result
    ];
}
const initialResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$maybeDeepFreeze$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["maybeDeepFreeze"])({
    data: undefined,
    dataState: "empty",
    loading: false,
    networkStatus: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$core$2f$networkStatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NetworkStatus"].ready,
    partial: true
}); //# sourceMappingURL=useLazyQuery.js.map
}),
"[project]/node_modules/rxjs/dist/esm5/internal/scheduler/Action.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Action",
    ()=>Action
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$Subscription$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/rxjs/dist/esm5/internal/Subscription.js [app-client] (ecmascript)");
;
;
var Action = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(Action, _super);
    function Action(scheduler, work) {
        return _super.call(this) || this;
    }
    Action.prototype.schedule = function(state, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        return this;
    };
    return Action;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$Subscription$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Subscription"]);
;
 //# sourceMappingURL=Action.js.map
}),
"[project]/node_modules/rxjs/dist/esm5/internal/scheduler/intervalProvider.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "intervalProvider",
    ()=>intervalProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript)");
;
var intervalProvider = {
    setInterval: function(handler, timeout) {
        var args = [];
        for(var _i = 2; _i < arguments.length; _i++){
            args[_i - 2] = arguments[_i];
        }
        var delegate = intervalProvider.delegate;
        if (delegate === null || delegate === void 0 ? void 0 : delegate.setInterval) {
            return delegate.setInterval.apply(delegate, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__spreadArray"])([
                handler,
                timeout
            ], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__read"])(args)));
        }
        return setInterval.apply(void 0, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__spreadArray"])([
            handler,
            timeout
        ], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__read"])(args)));
    },
    clearInterval: function(handle) {
        var delegate = intervalProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearInterval) || clearInterval)(handle);
    },
    delegate: undefined
}; //# sourceMappingURL=intervalProvider.js.map
}),
"[project]/node_modules/rxjs/dist/esm5/internal/scheduler/AsyncAction.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AsyncAction",
    ()=>AsyncAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$scheduler$2f$Action$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/rxjs/dist/esm5/internal/scheduler/Action.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$scheduler$2f$intervalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/rxjs/dist/esm5/internal/scheduler/intervalProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$arrRemove$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/rxjs/dist/esm5/internal/util/arrRemove.js [app-client] (ecmascript)");
;
;
;
;
var AsyncAction = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(AsyncAction, _super);
    function AsyncAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        _this.pending = false;
        return _this;
    }
    AsyncAction.prototype.schedule = function(state, delay) {
        var _a;
        if (delay === void 0) {
            delay = 0;
        }
        if (this.closed) {
            return this;
        }
        this.state = state;
        var id = this.id;
        var scheduler = this.scheduler;
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, delay);
        }
        this.pending = true;
        this.delay = delay;
        this.id = (_a = this.id) !== null && _a !== void 0 ? _a : this.requestAsyncId(scheduler, this.id, delay);
        return this;
    };
    AsyncAction.prototype.requestAsyncId = function(scheduler, _id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$scheduler$2f$intervalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["intervalProvider"].setInterval(scheduler.flush.bind(scheduler, this), delay);
    };
    AsyncAction.prototype.recycleAsyncId = function(_scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if (delay != null && this.delay === delay && this.pending === false) {
            return id;
        }
        if (id != null) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$scheduler$2f$intervalProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["intervalProvider"].clearInterval(id);
        }
        return undefined;
    };
    AsyncAction.prototype.execute = function(state, delay) {
        if (this.closed) {
            return new Error('executing a cancelled action');
        }
        this.pending = false;
        var error = this._execute(state, delay);
        if (error) {
            return error;
        } else if (this.pending === false && this.id != null) {
            this.id = this.recycleAsyncId(this.scheduler, this.id, null);
        }
    };
    AsyncAction.prototype._execute = function(state, _delay) {
        var errored = false;
        var errorValue;
        try {
            this.work(state);
        } catch (e) {
            errored = true;
            errorValue = e ? e : new Error('Scheduled action threw falsy error');
        }
        if (errored) {
            this.unsubscribe();
            return errorValue;
        }
    };
    AsyncAction.prototype.unsubscribe = function() {
        if (!this.closed) {
            var _a = this, id = _a.id, scheduler = _a.scheduler;
            var actions = scheduler.actions;
            this.work = this.state = this.scheduler = null;
            this.pending = false;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$arrRemove$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["arrRemove"])(actions, this);
            if (id != null) {
                this.id = this.recycleAsyncId(scheduler, id, null);
            }
            this.delay = null;
            _super.prototype.unsubscribe.call(this);
        }
    };
    return AsyncAction;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$scheduler$2f$Action$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Action"]);
;
 //# sourceMappingURL=AsyncAction.js.map
}),
"[project]/node_modules/rxjs/dist/esm5/internal/util/Immediate.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Immediate",
    ()=>Immediate,
    "TestTools",
    ()=>TestTools
]);
var nextHandle = 1;
var resolved;
var activeHandles = {};
function findAndClearHandle(handle) {
    if (handle in activeHandles) {
        delete activeHandles[handle];
        return true;
    }
    return false;
}
var Immediate = {
    setImmediate: function(cb) {
        var handle = nextHandle++;
        activeHandles[handle] = true;
        if (!resolved) {
            resolved = Promise.resolve();
        }
        resolved.then(function() {
            return findAndClearHandle(handle) && cb();
        });
        return handle;
    },
    clearImmediate: function(handle) {
        findAndClearHandle(handle);
    }
};
var TestTools = {
    pending: function() {
        return Object.keys(activeHandles).length;
    }
}; //# sourceMappingURL=Immediate.js.map
}),
"[project]/node_modules/rxjs/dist/esm5/internal/scheduler/immediateProvider.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "immediateProvider",
    ()=>immediateProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$Immediate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/rxjs/dist/esm5/internal/util/Immediate.js [app-client] (ecmascript)");
;
;
var setImmediate = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$Immediate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Immediate"].setImmediate, clearImmediate = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$util$2f$Immediate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Immediate"].clearImmediate;
var immediateProvider = {
    setImmediate: function() {
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++){
            args[_i] = arguments[_i];
        }
        var delegate = immediateProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.setImmediate) || setImmediate).apply(void 0, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__spreadArray"])([], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__read"])(args)));
    },
    clearImmediate: function(handle) {
        var delegate = immediateProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearImmediate) || clearImmediate)(handle);
    },
    delegate: undefined
}; //# sourceMappingURL=immediateProvider.js.map
}),
"[project]/node_modules/rxjs/dist/esm5/internal/scheduler/AsapAction.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AsapAction",
    ()=>AsapAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$scheduler$2f$AsyncAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/rxjs/dist/esm5/internal/scheduler/AsyncAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$scheduler$2f$immediateProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/rxjs/dist/esm5/internal/scheduler/immediateProvider.js [app-client] (ecmascript)");
;
;
;
var AsapAction = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(AsapAction, _super);
    function AsapAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        return _this;
    }
    AsapAction.prototype.requestAsyncId = function(scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if (delay !== null && delay > 0) {
            return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        scheduler.actions.push(this);
        return scheduler._scheduled || (scheduler._scheduled = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$scheduler$2f$immediateProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["immediateProvider"].setImmediate(scheduler.flush.bind(scheduler, undefined)));
    };
    AsapAction.prototype.recycleAsyncId = function(scheduler, id, delay) {
        var _a;
        if (delay === void 0) {
            delay = 0;
        }
        if (delay != null ? delay > 0 : this.delay > 0) {
            return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
        }
        var actions = scheduler.actions;
        if (id != null && ((_a = actions[actions.length - 1]) === null || _a === void 0 ? void 0 : _a.id) !== id) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$scheduler$2f$immediateProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["immediateProvider"].clearImmediate(id);
            if (scheduler._scheduled === id) {
                scheduler._scheduled = undefined;
            }
        }
        return undefined;
    };
    return AsapAction;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$scheduler$2f$AsyncAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AsyncAction"]);
;
 //# sourceMappingURL=AsapAction.js.map
}),
"[project]/node_modules/rxjs/dist/esm5/internal/Scheduler.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Scheduler",
    ()=>Scheduler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$scheduler$2f$dateTimestampProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/rxjs/dist/esm5/internal/scheduler/dateTimestampProvider.js [app-client] (ecmascript)");
;
var Scheduler = function() {
    function Scheduler(schedulerActionCtor, now) {
        if (now === void 0) {
            now = Scheduler.now;
        }
        this.schedulerActionCtor = schedulerActionCtor;
        this.now = now;
    }
    Scheduler.prototype.schedule = function(work, delay, state) {
        if (delay === void 0) {
            delay = 0;
        }
        return new this.schedulerActionCtor(this, work).schedule(state, delay);
    };
    Scheduler.now = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$scheduler$2f$dateTimestampProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dateTimestampProvider"].now;
    return Scheduler;
}();
;
 //# sourceMappingURL=Scheduler.js.map
}),
"[project]/node_modules/rxjs/dist/esm5/internal/scheduler/AsyncScheduler.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AsyncScheduler",
    ()=>AsyncScheduler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$Scheduler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/rxjs/dist/esm5/internal/Scheduler.js [app-client] (ecmascript)");
;
;
var AsyncScheduler = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(AsyncScheduler, _super);
    function AsyncScheduler(SchedulerAction, now) {
        if (now === void 0) {
            now = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$Scheduler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scheduler"].now;
        }
        var _this = _super.call(this, SchedulerAction, now) || this;
        _this.actions = [];
        _this._active = false;
        return _this;
    }
    AsyncScheduler.prototype.flush = function(action) {
        var actions = this.actions;
        if (this._active) {
            actions.push(action);
            return;
        }
        var error;
        this._active = true;
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        }while (action = actions.shift())
        this._active = false;
        if (error) {
            while(action = actions.shift()){
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AsyncScheduler;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$Scheduler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scheduler"]);
;
 //# sourceMappingURL=AsyncScheduler.js.map
}),
"[project]/node_modules/rxjs/dist/esm5/internal/scheduler/AsapScheduler.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AsapScheduler",
    ()=>AsapScheduler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$scheduler$2f$AsyncScheduler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/rxjs/dist/esm5/internal/scheduler/AsyncScheduler.js [app-client] (ecmascript)");
;
;
var AsapScheduler = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(AsapScheduler, _super);
    function AsapScheduler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AsapScheduler.prototype.flush = function(action) {
        this._active = true;
        var flushId = this._scheduled;
        this._scheduled = undefined;
        var actions = this.actions;
        var error;
        action = action || actions.shift();
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        }while ((action = actions[0]) && action.id === flushId && actions.shift())
        this._active = false;
        if (error) {
            while((action = actions[0]) && action.id === flushId && actions.shift()){
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AsapScheduler;
}(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$scheduler$2f$AsyncScheduler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AsyncScheduler"]);
;
 //# sourceMappingURL=AsapScheduler.js.map
}),
"[project]/node_modules/rxjs/dist/esm5/internal/scheduler/asap.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "asap",
    ()=>asap,
    "asapScheduler",
    ()=>asapScheduler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$scheduler$2f$AsapAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/rxjs/dist/esm5/internal/scheduler/AsapAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$scheduler$2f$AsapScheduler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/rxjs/dist/esm5/internal/scheduler/AsapScheduler.js [app-client] (ecmascript)");
;
;
var asapScheduler = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$scheduler$2f$AsapScheduler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AsapScheduler"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$scheduler$2f$AsapAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AsapAction"]);
var asap = asapScheduler; //# sourceMappingURL=asap.js.map
}),
"[project]/node_modules/@apollo/client/react/hooks/constants.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "skipToken",
    ()=>skipToken
]);
const skipToken = Symbol.for("apollo.skipToken"); //# sourceMappingURL=constants.js.map
}),
"[project]/node_modules/@apollo/client/react/internal/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "wrapperSymbol",
    ()=>wrapperSymbol
]);
;
;
const wrapperSymbol = Symbol.for("apollo.hook.wrappers"); //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/@apollo/client/react/hooks/internal/wrapHook.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "wrapHook",
    ()=>wrapHook
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$react$2f$internal$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@apollo/client/react/internal/index.js [app-client] (ecmascript) <locals>");
// direct import to avoid circular dependency
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$react$2f$context$2f$ApolloContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@apollo/client/react/context/ApolloContext.js [app-client] (ecmascript)");
;
;
;
function wrapHook(hookName, useHook, clientOrObsQuery) {
    // Priority-wise, the later entries in this array wrap
    // previous entries and could prevent them (and in the end,
    // even the original hook) from running
    const wrapperSources = [
        clientOrObsQuery["queryManager"],
        // if we are a hook (not `preloadQuery`), we are guaranteed to be inside of
        // a React render and can use context
        hookName.startsWith("use") ? // eslint-disable-next-line react-hooks/rules-of-hooks
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$react$2f$context$2f$ApolloContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApolloContext"])()) : undefined
    ];
    let wrapped = useHook;
    for (const source of wrapperSources){
        const wrapper = source?.[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$react$2f$internal$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["wrapperSymbol"]]?.[hookName];
        if (wrapper) {
            wrapped = wrapper(wrapped);
        }
    }
    return wrapped;
} //# sourceMappingURL=wrapHook.js.map
}),
"[project]/node_modules/@apollo/client/react/hooks/useQuery.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useQuery",
    ()=>useQuery
]);
/**
 * Function parameters in this file try to follow a common order for the sake of
 * readability and consistency. The order is as follows:
 *
 * resultData
 * observable
 * client
 * query
 * options
 * watchQueryOptions
 * makeWatchQueryOptions
 */ /**  */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wry$2f$equality$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@wry/equality/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$scheduler$2f$asap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/rxjs/dist/esm5/internal/scheduler/asap.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$observeOn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/rxjs/dist/esm5/internal/operators/observeOn.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$core$2f$networkStatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@apollo/client/core/networkStatus.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$maybeDeepFreeze$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@apollo/client/utilities/internal/maybeDeepFreeze.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$mergeOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@apollo/client/utilities/internal/mergeOptions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@apollo/client/utilities/internal/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@apollo/client/react/hooks/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$internal$2f$useDeepMemo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@apollo/client/react/hooks/internal/useDeepMemo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$internal$2f$wrapHook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@apollo/client/react/hooks/internal/wrapHook.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$useApolloClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@apollo/client/react/hooks/useApolloClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$useSyncExternalStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@apollo/client/react/hooks/useSyncExternalStore.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
const lastWatchOptions = Symbol();
function useQuery(query, ...[options]) {
    "use no memo";
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$internal$2f$wrapHook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wrapHook"])("useQuery", // eslint-disable-next-line react-compiler/react-compiler
    useQuery_, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$useApolloClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApolloClient"])(typeof options === "object" ? options.client : undefined))(query, options);
}
function useQuery_(query, options = {}) {
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$useApolloClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApolloClient"])(typeof options === "object" ? options.client : undefined);
    const { ssr } = typeof options === "object" ? options : {};
    const watchQueryOptions = useOptions(query, options, client.defaultOptions.watchQuery);
    function createState(previous) {
        const observable = client.watchQuery(watchQueryOptions);
        return {
            client,
            query,
            observable,
            resultData: {
                current: observable.getCurrentResult(),
                // Reuse previousData from previous InternalState (if any) to provide
                // continuity of previousData even if/when the query or client changes.
                previousData: previous?.resultData.current.data,
                variables: observable.variables
            }
        };
    }
    let [state, setState] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](createState);
    if (client !== state.client || query !== state.query) {
        // If the client or query have changed, we need to create a new InternalState.
        // This will trigger a re-render with the new state, but it will also continue
        // to run the current render function to completion.
        // Since we sometimes trigger some side-effects in the render function, we
        // re-assign `state` to the new state to ensure that those side-effects are
        // triggered with the new state.
        setState(state = createState(state));
    }
    const { observable, resultData } = state;
    useInitialFetchPolicyIfNecessary(watchQueryOptions, observable);
    useResubscribeIfNecessary(resultData, observable, watchQueryOptions);
    const result = useResult(observable, resultData, ssr);
    const obsQueryFields = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useQuery_.useMemo[obsQueryFields]": ()=>({
                refetch: observable.refetch.bind(observable),
                fetchMore: observable.fetchMore.bind(observable),
                updateQuery: observable.updateQuery.bind(observable),
                startPolling: observable.startPolling.bind(observable),
                stopPolling: observable.stopPolling.bind(observable),
                subscribeToMore: observable.subscribeToMore.bind(observable)
            })
    }["useQuery_.useMemo[obsQueryFields]"], [
        observable
    ]);
    const previousData = resultData.previousData;
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useQuery_.useMemo": ()=>{
            const { partial, ...rest } = result;
            return {
                ...rest,
                client,
                observable,
                variables: observable.variables,
                previousData,
                ...obsQueryFields
            };
        }
    }["useQuery_.useMemo"], [
        result,
        client,
        observable,
        previousData,
        obsQueryFields
    ]);
}
const fromSkipToken = Symbol();
function useOptions(query, options, defaultOptions) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$internal$2f$useDeepMemo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeepMemo"])({
        "useOptions.useDeepMemo": ()=>{
            if (options === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["skipToken"]) {
                const opts = {
                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$mergeOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeOptions"])(defaultOptions, {
                        query,
                        fetchPolicy: "standby"
                    }),
                    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["variablesUnknownSymbol"]]: true
                };
                opts[fromSkipToken] = true;
                return opts;
            }
            const watchQueryOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$mergeOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeOptions"])(defaultOptions, {
                ...options,
                query
            });
            if (options.skip) {
                watchQueryOptions.initialFetchPolicy = options.initialFetchPolicy || options.fetchPolicy;
                watchQueryOptions.fetchPolicy = "standby";
            }
            return watchQueryOptions;
        }
    }["useOptions.useDeepMemo"], [
        query,
        options,
        defaultOptions
    ]);
}
function useInitialFetchPolicyIfNecessary(watchQueryOptions, observable) {
    "use no memo";
    if (!watchQueryOptions.fetchPolicy) {
        watchQueryOptions.fetchPolicy = observable.options.initialFetchPolicy;
    }
}
function useResult(observable, resultData, ssr) {
    "use no memo";
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$react$2f$hooks$2f$useSyncExternalStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useResult.useSyncExternalStore.useCallback": (handleStoreChange)=>{
            const subscription = observable// We use the asapScheduler here to prevent issues with trying to
            // update in the middle of a render. `reobserve` is kicked off in the
            // middle of a render and because RxJS emits values synchronously,
            // its possible for this `handleStoreChange` to be called in that same
            // render. This allows the render to complete before trying to emit a
            // new value.
            .pipe((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$operators$2f$observeOn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["observeOn"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$scheduler$2f$asap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asapScheduler"])).subscribe({
                "useResult.useSyncExternalStore.useCallback.subscription": (result)=>{
                    const previous = resultData.current;
                    if (// Avoid rerendering if the result is the same
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wry$2f$equality$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["equal"])(previous, result) && // Force rerender if the value was emitted because variables
                    // changed, such as when calling `refetch(newVars)` which returns
                    // the same data when `notifyOnNetworkStatusChange` is `false`.
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wry$2f$equality$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["equal"])(resultData.variables, observable.variables)) {
                        return;
                    }
                    // eslint-disable-next-line react-compiler/react-compiler
                    resultData.variables = observable.variables;
                    if (previous.data && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wry$2f$equality$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["equal"])(previous.data, result.data)) {
                        resultData.previousData = previous.data;
                    }
                    resultData.current = result;
                    handleStoreChange();
                }
            }["useResult.useSyncExternalStore.useCallback.subscription"]);
            // Do the "unsubscribe" with a short delay.
            // This way, an existing subscription can be reused without an additional
            // request if "unsubscribe"  and "resubscribe" to the same ObservableQuery
            // happen in very fast succession.
            return ({
                "useResult.useSyncExternalStore.useCallback": ()=>{
                    setTimeout({
                        "useResult.useSyncExternalStore.useCallback": ()=>subscription.unsubscribe()
                    }["useResult.useSyncExternalStore.useCallback"]);
                }
            })["useResult.useSyncExternalStore.useCallback"];
        }
    }["useResult.useSyncExternalStore.useCallback"], [
        observable,
        resultData
    ]), {
        "useResult.useSyncExternalStore": ()=>resultData.current
    }["useResult.useSyncExternalStore"], {
        "useResult.useSyncExternalStore": ()=>ssr === false ? useQuery.ssrDisabledResult : resultData.current
    }["useResult.useSyncExternalStore"]);
}
// this hook is not compatible with any rules of React, and there's no good way to rewrite it.
// it should stay a separate hook that will not be optimized by the compiler
function useResubscribeIfNecessary(/** this hook will mutate properties on `resultData` */ resultData, /** this hook will mutate properties on `observable` */ observable, watchQueryOptions) {
    "use no memo";
    if (observable[lastWatchOptions] && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wry$2f$equality$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["equal"])(observable[lastWatchOptions], watchQueryOptions)) {
        // If skipToken was used to generate options, we won't know the correct
        // initialFetchPolicy until the hook is rerendered with real options, so we
        // set it the next time we get real options
        if (observable[lastWatchOptions][fromSkipToken] && !watchQueryOptions.initialFetchPolicy) {
            watchQueryOptions.initialFetchPolicy = watchQueryOptions.fetchPolicy;
        }
        // Though it might be tempting to postpone this reobserve call to the
        // useEffect block, we need getCurrentResult to return an appropriate
        // loading:true result synchronously (later within the same call to
        // useQuery). Since we already have this.observable here (not true for
        // the very first call to useQuery), we are not initiating any new
        // subscriptions, though it does feel less than ideal that reobserve
        // (potentially) kicks off a network request (for example, when the
        // variables have changed), which is technically a side-effect.
        if (shouldReobserve(observable[lastWatchOptions], watchQueryOptions)) {
            observable.reobserve(watchQueryOptions);
        } else {
            observable.applyOptions(watchQueryOptions);
        }
        // Make sure getCurrentResult returns a fresh ApolloQueryResult<TData>,
        // but save the current data as this.previousData, just like setResult
        // usually does.
        const result = observable.getCurrentResult();
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wry$2f$equality$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["equal"])(result.data, resultData.current.data)) {
            resultData.previousData = resultData.current.data || resultData.previousData;
        }
        resultData.current = result;
        resultData.variables = observable.variables;
    }
    observable[lastWatchOptions] = watchQueryOptions;
}
function shouldReobserve(previousOptions, options) {
    return previousOptions.query !== options.query || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$wry$2f$equality$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["equal"])(previousOptions.variables, options.variables) || previousOptions.fetchPolicy !== options.fetchPolicy && (options.fetchPolicy === "standby" || previousOptions.fetchPolicy === "standby");
}
useQuery.ssrDisabledResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$internal$2f$maybeDeepFreeze$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["maybeDeepFreeze"])({
    loading: true,
    data: void 0,
    dataState: "empty",
    error: void 0,
    networkStatus: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$core$2f$networkStatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NetworkStatus"].loading,
    partial: true
}); //# sourceMappingURL=useQuery.js.map
}),
]);

//# sourceMappingURL=_d8f99d8e._.js.map