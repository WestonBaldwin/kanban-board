(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/graphql/__generated__/graphql.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable */ __turbopack_context__.s([
    "GetCountriesDocument",
    ()=>GetCountriesDocument,
    "useGetCountriesLazyQuery",
    ()=>useGetCountriesLazyQuery,
    "useGetCountriesQuery",
    ()=>useGetCountriesQuery,
    "useGetCountriesSuspenseQuery",
    ()=>useGetCountriesSuspenseQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/graphql-tag/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$core$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@apollo/client/core/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
;
;
const defaultOptions = {};
const GetCountriesDocument = {
    "kind": "Document",
    "definitions": [
        {
            "kind": "OperationDefinition",
            "operation": "query",
            "name": {
                "kind": "Name",
                "value": "GetCountries"
            },
            "selectionSet": {
                "kind": "SelectionSet",
                "selections": [
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "countries"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "code"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "name"
                                    }
                                }
                            ]
                        }
                    }
                ]
            }
        }
    ]
};
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
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$core$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"](GetCountriesDocument, options);
}
_s(useGetCountriesQuery, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$core$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useGetCountriesLazyQuery(baseOptions) {
    _s1();
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$core$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLazyQuery"](GetCountriesDocument, options);
}
_s1(useGetCountriesLazyQuery, "On+3mFuZjiEOS3MQLgFXtHkppJ4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$core$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLazyQuery"]
    ];
});
function useGetCountriesSuspenseQuery(baseOptions) {
    _s2();
    const options = baseOptions === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$core$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["skipToken"] ? baseOptions : {
        ...defaultOptions,
        ...baseOptions
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$core$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSuspenseQuery"](GetCountriesDocument, options);
}
_s2(useGetCountriesSuspenseQuery, "wenOueM1EC87NIZJSyP2AsMhIMU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$core$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSuspenseQuery"]
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$_$5f$generated_$5f2f$graphql$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/graphql/__generated__/graphql.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function CountriesPage() {
    _s();
    const { data, loading, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$_$5f$generated_$5f2f$graphql$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetCountriesQuery"])();
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        children: "Loading…"
    }, void 0, false, {
        fileName: "[project]/src/app/countries/page.tsx",
        lineNumber: 9,
        columnNumber: 23
    }, this);
    if (error) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        children: [
            "Error: ",
            error.message
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/countries/page.tsx",
        lineNumber: 10,
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
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "list-disc pl-6",
                children: data?.countries.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: c.name
                    }, c.code, false, {
                        fileName: "[project]/src/app/countries/page.tsx",
                        lineNumber: 17,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/countries/page.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/countries/page.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_s(CountriesPage, "utQUdsvBjeoEmPo1xOyua74GosU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$graphql$2f$_$5f$generated_$5f2f$graphql$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetCountriesQuery"]
    ];
});
_c = CountriesPage;
var _c;
__turbopack_context__.k.register(_c, "CountriesPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/@apollo/client/core/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/* Core */ __turbopack_context__.s([]);
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
;
 //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/@apollo/client/errors/LocalStateError.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LocalStateError",
    ()=>LocalStateError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$errors$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@apollo/client/errors/utils.js [app-client] (ecmascript)");
;
class LocalStateError extends Error {
    /**
     * A method that determines whether an error is a `LocalStateError`
     * object. This method enables TypeScript to narrow the error type.
     *
     * @example
     *
     * ```ts
     * if (LocalStateError.is(error)) {
     *   // TypeScript now knows `error` is a LocalStateError object
     *   console.log(error.path);
     * }
     * ```
     */ static is(error) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$errors$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBranded"])(error, "LocalStateError");
    }
    /**
    * The path to the field that caused the error.
    */ path;
    constructor(message, options = {}){
        super(message, {
            cause: options.sourceError
        });
        this.name = "LocalStateError";
        this.path = options.path;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$errors$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["brand"])(this);
        Object.setPrototypeOf(this, LocalStateError.prototype);
    }
} //# sourceMappingURL=LocalStateError.js.map
}),
"[project]/node_modules/@apollo/client/link/core/concat.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "concat",
    ()=>concat
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$link$2f$core$2f$ApolloLink$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@apollo/client/link/core/ApolloLink.js [app-client] (ecmascript)");
;
const concat = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$link$2f$core$2f$ApolloLink$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApolloLink"].concat; //# sourceMappingURL=concat.js.map
}),
"[project]/node_modules/@apollo/client/link/core/empty.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "empty",
    ()=>empty
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$link$2f$core$2f$ApolloLink$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@apollo/client/link/core/ApolloLink.js [app-client] (ecmascript)");
;
const empty = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$link$2f$core$2f$ApolloLink$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApolloLink"].empty; //# sourceMappingURL=empty.js.map
}),
"[project]/node_modules/@apollo/client/link/core/from.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "from",
    ()=>from
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$link$2f$core$2f$ApolloLink$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@apollo/client/link/core/ApolloLink.js [app-client] (ecmascript)");
;
const from = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$link$2f$core$2f$ApolloLink$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApolloLink"].from; //# sourceMappingURL=from.js.map
}),
"[project]/node_modules/@apollo/client/link/core/split.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "split",
    ()=>split
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$link$2f$core$2f$ApolloLink$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@apollo/client/link/core/ApolloLink.js [app-client] (ecmascript)");
;
const split = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$link$2f$core$2f$ApolloLink$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApolloLink"].split; //# sourceMappingURL=split.js.map
}),
"[project]/node_modules/@apollo/client/link/http/createSignalIfSupported.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @deprecated
 * This is not used internally any more and will be removed in
 * the next major version of Apollo Client.
 */ __turbopack_context__.s([
    "createSignalIfSupported",
    ()=>createSignalIfSupported
]);
const createSignalIfSupported = ()=>{
    if (typeof AbortController === "undefined") return {
        controller: false,
        signal: false
    };
    const controller = new AbortController();
    const signal = controller.signal;
    return {
        controller,
        signal
    };
}; //# sourceMappingURL=createSignalIfSupported.js.map
}),
"[project]/node_modules/@apollo/client/core/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ApolloCache",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$cache$2f$core$2f$cache$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApolloCache"],
    "ApolloClient",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$core$2f$ApolloClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApolloClient"],
    "ApolloLink",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$link$2f$core$2f$ApolloLink$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApolloLink"],
    "CombinedGraphQLErrors",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$errors$2f$CombinedGraphQLErrors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CombinedGraphQLErrors"],
    "CombinedProtocolErrors",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$errors$2f$CombinedProtocolErrors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CombinedProtocolErrors"],
    "DocumentTransform",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$graphql$2f$DocumentTransform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DocumentTransform"],
    "HttpLink",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$link$2f$http$2f$HttpLink$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HttpLink"],
    "InMemoryCache",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$cache$2f$inmemory$2f$inMemoryCache$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InMemoryCache"],
    "LinkError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$errors$2f$LinkError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinkError"],
    "LocalStateError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$errors$2f$LocalStateError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LocalStateError"],
    "MissingFieldError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$cache$2f$core$2f$types$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MissingFieldError"],
    "NetworkStatus",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$core$2f$networkStatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NetworkStatus"],
    "Observable",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$Observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"],
    "ObservableQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$core$2f$ObservableQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ObservableQuery"],
    "ServerError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$errors$2f$ServerError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ServerError"],
    "ServerParseError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$errors$2f$ServerParseError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ServerParseError"],
    "UnconventionalError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$errors$2f$UnconventionalError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnconventionalError"],
    "build",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["build"],
    "checkFetcher",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$link$2f$http$2f$checkFetcher$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkFetcher"],
    "concat",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$link$2f$core$2f$concat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["concat"],
    "createHttpLink",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$link$2f$http$2f$HttpLink$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createHttpLink"],
    "createSignalIfSupported",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$link$2f$http$2f$createSignalIfSupported$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSignalIfSupported"],
    "defaultDataIdFromObject",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$cache$2f$inmemory$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultDataIdFromObject"],
    "defaultPrinter",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$link$2f$http$2f$selectHttpOptionsAndBody$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultPrinter"],
    "disableExperimentalFragmentVariables",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["disableExperimentalFragmentVariables"],
    "disableFragmentWarnings",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["disableFragmentWarnings"],
    "empty",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$link$2f$core$2f$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["empty"],
    "enableExperimentalFragmentVariables",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["enableExperimentalFragmentVariables"],
    "execute",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$link$2f$core$2f$execute$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["execute"],
    "fallbackHttpConfig",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$link$2f$http$2f$selectHttpOptionsAndBody$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fallbackHttpConfig"],
    "from",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$link$2f$core$2f$from$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["from"],
    "gql",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"],
    "isNetworkRequestSettled",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$isNetworkRequestSettled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNetworkRequestSettled"],
    "isReference",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$graphql$2f$storeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isReference"],
    "makeVar",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$cache$2f$inmemory$2f$reactiveVars$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeVar"],
    "parseAndCheckHttpResponse",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$link$2f$http$2f$parseAndCheckHttpResponse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseAndCheckHttpResponse"],
    "resetCaches",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resetCaches"],
    "rewriteURIForGET",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$link$2f$http$2f$rewriteURIForGET$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rewriteURIForGET"],
    "selectHttpOptionsAndBody",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$link$2f$http$2f$selectHttpOptionsAndBody$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectHttpOptionsAndBody"],
    "selectHttpOptionsAndBodyInternal",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$link$2f$http$2f$selectHttpOptionsAndBody$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectHttpOptionsAndBodyInternal"],
    "selectURI",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$link$2f$http$2f$selectURI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectURI"],
    "setLogVerbosity",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setVerbosity"],
    "split",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$link$2f$core$2f$split$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["split"],
    "version",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["version"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$core$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@apollo/client/core/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$core$2f$ApolloClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@apollo/client/core/ApolloClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$core$2f$ObservableQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@apollo/client/core/ObservableQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$core$2f$networkStatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@apollo/client/core/networkStatus.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$errors$2f$CombinedGraphQLErrors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@apollo/client/errors/CombinedGraphQLErrors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$errors$2f$CombinedProtocolErrors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@apollo/client/errors/CombinedProtocolErrors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$errors$2f$LinkError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@apollo/client/errors/LinkError.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$errors$2f$LocalStateError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@apollo/client/errors/LocalStateError.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$errors$2f$ServerError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@apollo/client/errors/ServerError.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$errors$2f$ServerParseError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@apollo/client/errors/ServerParseError.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$errors$2f$UnconventionalError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@apollo/client/errors/UnconventionalError.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$cache$2f$core$2f$cache$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@apollo/client/cache/core/cache.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$cache$2f$inmemory$2f$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@apollo/client/cache/inmemory/helpers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$cache$2f$inmemory$2f$inMemoryCache$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@apollo/client/cache/inmemory/inMemoryCache.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$cache$2f$inmemory$2f$reactiveVars$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@apollo/client/cache/inmemory/reactiveVars.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$cache$2f$core$2f$types$2f$common$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@apollo/client/cache/core/types/common.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$link$2f$core$2f$ApolloLink$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@apollo/client/link/core/ApolloLink.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$link$2f$core$2f$concat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@apollo/client/link/core/concat.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$link$2f$core$2f$empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@apollo/client/link/core/empty.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$link$2f$core$2f$execute$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@apollo/client/link/core/execute.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$link$2f$core$2f$from$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@apollo/client/link/core/from.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$link$2f$core$2f$split$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@apollo/client/link/core/split.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$link$2f$http$2f$checkFetcher$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@apollo/client/link/http/checkFetcher.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$link$2f$http$2f$HttpLink$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@apollo/client/link/http/HttpLink.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$link$2f$http$2f$createSignalIfSupported$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@apollo/client/link/http/createSignalIfSupported.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$link$2f$http$2f$selectHttpOptionsAndBody$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@apollo/client/link/http/selectHttpOptionsAndBody.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$link$2f$http$2f$parseAndCheckHttpResponse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@apollo/client/link/http/parseAndCheckHttpResponse.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$link$2f$http$2f$rewriteURIForGET$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@apollo/client/link/http/rewriteURIForGET.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$link$2f$http$2f$selectURI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@apollo/client/link/http/selectURI.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$graphql$2f$DocumentTransform$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@apollo/client/utilities/graphql/DocumentTransform.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$isNetworkRequestSettled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@apollo/client/utilities/isNetworkRequestSettled.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$graphql$2f$storeUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@apollo/client/utilities/graphql/storeUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$Observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/rxjs/dist/esm5/internal/Observable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$utilities$2f$invariant$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@apollo/client/utilities/invariant/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/graphql-tag/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@apollo/client/version.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_9ef8ab0d._.js.map