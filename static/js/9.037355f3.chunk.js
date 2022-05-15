(this["webpackJsonppancake-frontend"] = this["webpackJsonppancake-frontend"] || []).push([
    [9], {
        1257: function(e, t, n) {
            "use strict";
            n.r(t);
            var i, r, c, a, o, l = n(6),
                s = n(8),
                d = n(1),
                b = n(5),
                j = n(881),
                u = n(42),
                x = n(90),
                h = n(245),
                p = n(185),
                O = n(2),
                m = n(13),
                f = n(105),
                g = n(0),
                v = function() {
                    var e = Object(m.b)().t,
                        t = Object(u.c)().account;
                    return Object(g.jsx)(g.Fragment, { children: Object(g.jsx)(O.R, { position: "relative", flexDirection: ["column-reverse", null, null, "row"], alignItems: ["flex-end", null, null, "center"], justifyContent: "center", id: "homepage-hero", children: Object(g.jsxs)(O.R, { flex: "1", flexDirection: "column", children: [Object(g.jsx)(O.T, { scale: "xxl", color: "#7327E3", mb: "24px", children: e("BRISESWAP ( BSwap )") }), Object(g.jsx)(O.T, { scale: "md", mb: "24px", children: e("Trade, earn, and win crypto on the most popular decentralized platform in the galaxy.") }), Object(g.jsxs)(O.R, { children: [!t && Object(g.jsx)(f.a, { mr: "8px" }), Object(g.jsx)(O.Z, { mr: "16px", href: "/swap", children: Object(g.jsx)(O.p, { variant: t ? "primary" : "secondary", children: e("Trade Now") }) })] })] }) }) })
                },
                y = { headingText: "Trade anything. No registration, no hassle.", bodyText: "Trade any token on Bigert Chain in seconds, just by connecting your BRISE wallet.", reverse: !1, primaryButton: { to: "/swap", text: "Trade Now", external: !1 }, secondaryButton: { to: "https://BrisePad.co/", text: "Visit BrisePad", external: !0 }, images: { path: "/images/home/trade/", attributes: [] } },
                w = { headingText: "Earn passive income with crypto.", bodyText: "BriseSwap makes it easy to make your crypto work for you.", reverse: !0, primaryButton: { to: "/farms", text: "Explore", external: !1 }, secondaryButton: { to: "https://Bswaptoken.com/", text: "Visit Us", external: !0 }, images: { path: "/images/home/earn/", attributes: [] } },
                k = { headingText: "BSWAP makes our world Fantastic.", bodyText: "BSWAP token is at the heart of the BriseSwap ecosystem. Buy it, win it, farm it, spend it, stake it... heck, you can even vote with it!", reverse: !1, primaryButton: { to: "/swap?outputCurrency=0xEEa9Fe24FFBc4F338d90695Be5bf9c0964b93e7E", text: "Buy BSWAP", external: !1 }, secondaryButton: { to: "https://docs.pancakeswap.finance/tokenomics/cake", text: "  ", external: !1 }, images: { path: "/images/home/cake/", attributes: [] } },
                C = n(9),
                F = n(3),
                B = n.n(F),
                S = n(12),
                P = n(30),
                D = function() {
                    var e = Object(m.b)().t,
                        t = function() {
                            var e = Object(d.useState)(null),
                                t = Object(C.a)(e, 2),
                                n = t[0],
                                i = t[1];
                            return Object(d.useEffect)((function() {
                                ! function() {
                                    var e = Object(S.a)(B.a.mark((function e() {
                                        var t, n;
                                        return B.a.wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    return e.prev = 0, e.next = 3, fetch("/protocol.json");
                                                case 3:
                                                    return t = e.sent, e.next = 6, t.json();
                                                case 6:
                                                    n = e.sent, i(n), e.next = 13;
                                                    break;
                                                case 10:
                                                    e.prev = 10, e.t0 = e.catch(0), console.error("Unable to fetch data:", e.t0);
                                                case 13:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e, null, [
                                            [0, 10]
                                        ])
                                    })));
                                    return function() { return e.apply(this, arguments) }
                                }()()
                            }), [i]), n
                        }(),
                        n = (Object(x.a)().theme, t ? Object(P.b)(t.tvl) : "-"),
                        i = (Object(P.b)(30841921), Object(P.b)(2751624), e("And those users are now entrusting the platform with over $%tvl% in funds.", { tvl: n }).split(n)),
                        r = Object(C.a)(i, 2),
                        c = r[0],
                        a = r[1];
                    O.J, O.Nb, O.z;
                    return Object(g.jsxs)(O.R, { justifyContent: "center", alignItems: "center", flexDirection: "column", children: [Object(g.jsx)(O.T, { textAlign: "center", scale: "xl", children: e("Used by millions.") }), Object(g.jsx)(O.T, { textAlign: "center", scale: "xl", mb: "32px", children: e("Trusted with billions.") }), Object(g.jsx)(O.Qb, { textAlign: "center", color: "textSubtle", children: e("BriseSwap has the most users of any decentralized platform, ever.") }), Object(g.jsx)(O.R, { flexWrap: "wrap", children: Object(g.jsxs)(O.Qb, { display: "inline", textAlign: "center", color: "textSubtle", mb: "20px", children: [c, Object(g.jsx)(g.Fragment, { children: t ? Object(g.jsx)(g.Fragment, { children: n }) : Object(g.jsx)(O.Db, { display: "inline-block", height: 16, width: 70, mt: "2px" }) }), a] }) }), Object(g.jsx)(O.Qb, { textAlign: "center", color: "textSubtle", bold: !0, mb: "32px", children: e("Will you join them?") })] })
                },
                R = function(e, t) { return Object(b.f)(i || (i = Object(s.a)(["\n  from {\n    transform: translate(0,  0px);\n  }\n  50% {\n    transform: translate(", ", ", ");\n  }\n  to {\n    transform: translate(0, 0px);\n  }  \n"])), e, t) },
                T = Object(b.e)(O.m)(r || (r = Object(s.a)(["\n  position: relative;\n  max-height: ", ";\n\n  & :nth-child(2) {\n    animation: ", " 3s ease-in-out infinite;\n    animation-delay: 1s;\n  }\n\n  & :nth-child(3) {\n    animation: ", " 3s ease-in-out infinite;\n    animation-delay: 0.66s;\n  }\n\n  & :nth-child(4) {\n    animation: ", " 3s ease-in-out infinite;\n    animation-delay: 0.33s;\n  }\n\n  & :nth-child(5) {\n    animation: ", " 3s ease-in-out infinite;\n    animation-delay: 0s;\n  }\n"])), (function(e) { return e.maxHeight }), R("3px", "15px"), R("5px", "10px"), R("6px", "5px"), R("4px", "12px")),
                Q = (b.e.img(c || (c = Object(s.a)(["\n  max-height: ", ";\n  visibility: hidden;\n"])), (function(e) { return e.maxHeight })), Object(b.e)(O.m)(a || (a = Object(s.a)(["\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n\n  img {\n    max-height: 100%;\n    width: auto;\n  }\n"]))));
            ! function(e) { e.MD = "1.5x", e.LG = "2x" }(o || (o = {}));
            var A, z, I, L, E, H, W, M, N, U, Z, G, _, V, q, J, $ = function(e, t, n) { return "".concat(e).concat(t).concat(n ? "@".concat(n, ".png") : ".png") },
                X = function(e) {
                    var t = e.path,
                        n = e.attributes,
                        i = e.maxHeight,
                        r = void 0 === i ? "512px" : i;
                    return Object(g.jsx)(T, { maxHeight: r, children: n.map((function(e) { return Object(g.jsx)(Q, { children: Object(g.jsx)("img", { src: $(t, e.src), srcSet: (n = t, i = e.src, "".concat($(n, i), " 512w, \n  ").concat($(n, i, o.MD), " 768w, \n  ").concat($(n, i, o.LG), " 1024w,")), alt: e.alt }) }, e.src); var n, i })) })
                },
                Y = n(51),
                K = ["text"],
                ee = function(e) {
                    var t = e.text,
                        n = Object(Y.a)(e, K),
                        i = Object(x.a)().theme,
                        r = t.split(" "),
                        c = r[0],
                        a = r.slice(1).join(" ");
                    return Object(g.jsxs)(O.T, Object(l.a)(Object(l.a)({ scale: "xl", mb: "24px" }, n), {}, { children: [Object(g.jsxs)("span", { style: { color: i.colors.secondary }, children: [c, " "] }), a] }))
                },
                te = function(e) {
                    var t = Object(m.b)().t,
                        n = e.headingText,
                        i = e.bodyText,
                        r = e.reverse,
                        c = e.primaryButton,
                        a = e.secondaryButton,
                        o = e.images,
                        s = t(n),
                        d = t(i);
                    return Object(g.jsx)(O.R, { flexDirection: "column", children: Object(g.jsxs)(O.R, { flexDirection: ["column-reverse", null, null, r ? "row-reverse" : "row"], alignItems: ["flex-end", null, null, "center"], justifyContent: "center", children: [Object(g.jsxs)(O.R, { flexDirection: "column", flex: "1", ml: [null, null, null, r && "64px"], mr: [null, null, null, !r && "64px"], alignSelf: ["flex-start", null, null, "center"], children: [Object(g.jsx)(ee, { text: s }), Object(g.jsx)(O.Qb, { color: "textSubtle", mb: "24px", children: d }), Object(g.jsxs)(O.R, { children: [Object(g.jsx)(O.Z, { mr: "16px", external: c.external, href: c.to, children: Object(g.jsx)(O.p, { children: Object(g.jsx)(O.Qb, { color: "card", bold: !0, fontSize: "16px", children: t(c.text) }) }) }), Object(g.jsx)(O.Z, { external: a.external, href: a.to, children: t(a.text) })] })] }), Object(g.jsx)(O.R, { height: ["192px", null, null, "100%"], width: ["192px", null, null, "100%"], flex: [null, null, null, "1"], mb: ["24px", null, null, "0"], children: Object(g.jsx)(X, Object(l.a)({}, o)) })] }) })
                },
                ne = n(380),
                ie = ["text"],
                re = function(e) {
                    var t = e.text,
                        n = Object(Y.a)(e, ie),
                        i = Object(x.a)().theme,
                        r = t.split(" "),
                        c = r[0],
                        a = r.slice(1).join(" ");
                    return Object(g.jsxs)(O.T, Object(l.a)(Object(l.a)({}, n), {}, { children: [c, Object(g.jsxs)("span", { style: { color: i.colors.secondary }, children: [" ", a] })] }))
                },
                ce = function() {
                    var e = Object(d.useState)(!1),
                        t = Object(C.a)(e, 2),
                        n = t[0],
                        i = t[1],
                        r = Object(m.b)().t,
                        c = Object(ne.a)().observerRef,
                        a = Object(d.useRef)(null),
                        o = Object(d.useCallback)((function() { a.current = setInterval((function() { i((function(e) { return !e })) }), 6e3) }), [a]);
                    return Object(g.jsx)("div", { ref: c, children: Object(g.jsx)(O.R, { flexDirection: "column", mt: "24px", children: Object(g.jsxs)(O.R, { mb: "24px", children: [Object(g.jsx)(re, { text: r(n ? "Top Farms" : " ") }), Object(g.jsx)(O.W, { variant: "text", height: "100%", width: "auto", onClick: function() { i((function(e) { return !e })), clearInterval(a.current), o() }, children: Object(g.jsx)(O.Ob, { height: "24px", width: "24px", color: "textSubtle" }) })] }) }) })
                },
                ae = function(e) { return Object(g.jsxs)(O.Mb, Object(l.a)(Object(l.a)({ viewBox: "0 0 1956 1956" }, e), {}, { children: [Object(g.jsx)("g", { filter: "url(#filter0_f)", children: Object(g.jsx)("path", { d: "M29 0l31 0c17,0 32,7 43,18 11,11 18,26 18,42 0,4 -1,7 -1,11l-1 1c13,2 25,8 33,17 11,10 18,25 18,42 0,17 -7,32 -18,43 -10,11 -26,17 -42,17l-81 0c-8,0 -15,-3 -21,-8 -5,-5 -8,-12 -8,-20l0 -50 0 -35 0 -49c0,-8 3,-15 8,-21 6,-5 13,-8 21,-8zm16 104l78 0c3,0 5,2 5,5l0 42c0,3 -2,6 -5,6l-78 0c-3,0 -5,-3 -5,-6l0 -42c0,-3 2,-5 5,-5zm15 -76c15,0 27,11 27,26 0,15 -12,26 -27,26 -14,0 -26,-11 -26,-26 0,-15 12,-26 26,-26zm0 -13l-31 0c-4,0 -8,1 -10,4 -3,2 -4,6 -4,10l0 49 0 35 0 50c0,3 1,7 4,9 2,3 6,4 10,4l81 0c12,0 24,-5 32,-13 8,-8 13,-19 13,-32 0,-12 -5,-24 -13,-32 -8,-8 -20,-13 -32,-13l0 0 0 0c-1,0 -2,0 -3,-1 -4,-1 -6,-5 -4,-9 1,-3 1,-5 2,-8 0,-2 1,-5 1,-8 0,-12 -5,-24 -14,-32 -8,-8 -19,-13 -32,-13z", fill: "url(#paint0_radial)", fillOpacity: "0.1" }) }), Object(g.jsxs)("defs", { children: [Object(g.jsxs)("filter", { id: "filter0_f", x: "0", y: "0", width: "1956", height: "1956", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB", children: [Object(g.jsx)("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }), Object(g.jsx)("feBlend", { mode: "normal", in: "SourceGraphic", in2: "BackgroundImageFix", result: "shape" }), Object(g.jsx)("feGaussianBlur", { stdDeviation: "10", result: "effect1_foregroundBlur" })] }), Object(g.jsxs)("radialGradient", { id: "paint0_radial", cx: "0", cy: "0", r: "1", gradientUnits: "userSpaceOnUse", gradientTransform: "translate(978 978) rotate(90) scale(958)", children: [Object(g.jsx)("stop", { offset: "0.114547", stopColor: "white", stopOpacity: "0" }), Object(g.jsx)("stop", { offset: "0.374975", stopColor: "white" }), Object(g.jsx)("stop", { offset: "1", stopColor: "white", stopOpacity: "0" })] })] })] })) },
                oe = b.e.div(A || (A = Object(s.a)(["\n  overflow: hidden;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n"]))),
                le = Object(b.e)(ae)(z || (z = Object(s.a)(["\n  height: 350%;\n  width: 350%;\n\n  ", " {\n    height: 400%;\n    width: 400%;\n  }\n"])), (function(e) { return e.theme.mediaQueries.xl })),
                se = Object(b.e)(O.R)(I || (I = Object(s.a)(["\n  z-index: 1;\n  position: relative;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n"]))),
                de = (Object(b.e)(h.a)(L || (L = Object(s.a)(["\n  overflow: hidden;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  visibility: hidden;\n\n  ", " {\n    visibility: visible;\n  }\n"])), (function(e) { return e.theme.mediaQueries.md })), function() { Object(m.b)().t; var e = Object(u.c)().account; return Object(g.jsxs)(g.Fragment, { children: [Object(g.jsx)(oe, { children: Object(g.jsx)(O.R, { alignItems: "center", justifyContent: "center", width: "100%", height: "100%", children: Object(g.jsx)(le, {}) }) }), Object(g.jsx)(se, { children: !e && Object(g.jsx)(f.a, { mt: "24px" }) })] }) }),
                be = n(129),
                je = n(43),
                ue = n(36),
                xe = Object(b.e)(O.R)(E || (E = Object(s.a)(["\n  flex-direction: column;\n  ", "\n"])), (function(e) {
                    var t = e.noMobileBorder,
                        n = e.theme;
                    return t ? "".concat(n.mediaQueries.md, " {\n           padding: 0 16px;\n           border-left: 1px ").concat(n.colors.inputSecondary, " solid;\n         }\n       ") : "border-left: 1px ".concat(n.colors.inputSecondary, " solid;\n         padding: 0 8px;\n         ").concat(n.mediaQueries.sm, " {\n           padding: 0 16px;\n         }\n       ")
                })),
                he = b.e.div(H || (H = Object(s.a)(["\n  display: grid;\n  grid-gap: 16px 8px;\n  margin-top: 24px;\n  grid-template-columns: repeat(2, auto);\n\n  ", " {\n    grid-gap: 16px;\n  }\n\n  ", " {\n    grid-gap: 32px;\n    grid-template-columns: repeat(4, auto);\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm }), (function(e) { return e.theme.mediaQueries.md })),
                pe = function() {
                    var e = Object(m.b)().t,
                        t = Object(be.f)(),
                        n = Object(P.e)(Object(be.c)(ue.a.cake.address)),
                        i = t ? Object(P.e)(t) - n : 0;
                    return Object(g.jsxs)(he, { children: [Object(g.jsxs)(O.R, { flexDirection: "column", children: [Object(g.jsx)(O.Qb, { color: "textSubtle", children: e("Total supply") }), i ? Object(g.jsx)(je.a, { decimals: 0, lineHeight: "1.1", fontSize: "24px", bold: !0, value: i }) : Object(g.jsx)(O.Db, { height: 24, width: 126, my: "4px" })] }), Object(g.jsxs)(xe, { children: [Object(g.jsx)(O.Qb, { color: "textSubtle", children: e("Burned to date") }), n ? Object(g.jsx)(je.a, { decimals: 0, lineHeight: "1.1", fontSize: "24px", bold: !0, value: n }) : Object(g.jsx)(O.Db, { height: 24, width: 126, my: "4px" })] }), Object(g.jsxs)(xe, { children: [Object(g.jsx)(O.Qb, { color: "textSubtle", children: e("Current emissions") }), Object(g.jsx)(O.T, { scale: "lg", children: e("%cakeEmissions%/block", { cakeEmissions: 15 }) })] })] })
                },
                Oe = b.e.div(W || (W = Object(s.a)(["\n  z-index: -1;\n  overflow: hidden;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  right: 0px;\n  top: 0px;\n"]))),
                me = b.e.div(M || (M = Object(s.a)(["\n  position: absolute;\n  display: flex;\n  width: 100%;\n  ", ";\n\n  svg {\n    fill: ", ";\n    width: ", ";\n    height: 100%;\n    max-height: 48px;\n  }\n"])), (function(e) { return e.top ? "top: 0px" : "bottom: 0px" }), (function(e) { return e.fill }), (function(e) { return e.width || "100%" })),
                fe = function(e) { return Object(g.jsx)(O.Mb, Object(l.a)(Object(l.a)({ viewBox: "0 0 1660 48" }, e), {}, { preserveAspectRatio: "none", children: Object(g.jsx)("path", { d: "M1660 48C1139.02 46.1887 336.256 15.2453 0 0H1660V48Z" }) })) },
                ge = function(e) { return Object(g.jsx)(O.Mb, Object(l.a)(Object(l.a)({ viewBox: "0 0 1660 48" }, e), {}, { preserveAspectRatio: "none", children: Object(g.jsx)("path", { d: "M-346 48C174.985 46.1887 977.744 15.2453 1314 0H-346V48Z" }) })) },
                ve = n(784),
                ye = n(14),
                we = n.n(ye),
                ke = n(95),
                Ce = n(92),
                Fe = n(44),
                Be = n(188),
                Se = n(52),
                Pe = n(34),
                De = n(176),
                Re = n(38),
                Te = n(107),
                Qe = n(49),
                Ae = function() {
                    var e = Object(d.useState)([]),
                        t = Object(C.a)(e, 2),
                        n = t[0],
                        i = t[1],
                        r = Object(d.useState)(null),
                        c = Object(C.a)(r, 2),
                        a = c[0],
                        o = c[1],
                        s = Object(u.c)().account,
                        b = Object(Te.a)().fastRefresh;
                    return Object(d.useEffect)((function() {
                        s && function() {
                            var e = Object(S.a)(B.a.mark((function e() {
                                var t, n, r, c, a;
                                return B.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return t = Re.v.map((function(e) { return { address: Object(Pe.m)(), name: "pendingBSWAP", params: [e.pid, s] } })), e.next = 3, Object(Se.a)(De, t);
                                        case 3:
                                            n = e.sent, r = Re.v.map((function(e, t) { return Object(l.a)(Object(l.a)({}, e), {}, { balance: new we.a(n[t]) }) })), c = r.filter((function(e) { return e.balance.gt(0) })), a = c.reduce((function(e, t) { var n = new we.a(t.balance); return n.eq(0) ? e : e + n.div(Qe.k).toNumber() }), 0), i(c), o(a);
                                        case 9:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() { return e.apply(this, arguments) }
                        }()()
                    }), [s, b]), { farmsWithStakedBalance: n, earningsSum: a }
                },
                ze = Object(b.e)(O.t)(N || (N = Object(s.a)(["\n  width: 100%;\n  height: fit-content;\n"]))),
                Ie = function() {
                    var e = Object(d.useState)(!1),
                        t = Object(C.a)(e, 2),
                        n = t[0],
                        i = t[1],
                        r = Object(m.b)().t,
                        c = Object(Ce.a)(),
                        a = c.toastSuccess,
                        o = c.toastError,
                        l = Ae(),
                        s = l.farmsWithStakedBalance,
                        b = l.earningsSum,
                        j = Object(Fe.l)(),
                        u = Object(ke.g)(),
                        x = new we.a(b).multipliedBy(u),
                        h = s.length,
                        p = s.filter((function(e) { return 0 !== e.pid })).length,
                        f = function(e, t, n, i) {
                            var r = { earningsBusd: n.toString(), count: e },
                                c = i("%earningsBusd% to collect", r);
                            return e > 0 && t ? c = i(e > 1 ? "%earningsBusd% to collect from %count% farms and BSWAP pool" : "%earningsBusd% to collect from %count% farm and BSWAP pool", r) : e > 0 ? c = i(e > 1 ? "%earningsBusd% to collect from %count% farms" : "%earningsBusd% to collect from %count% farm", r) : t && (c = i("%earningsBusd% to collect from BSWAP pool", r)), c
                        }(p, h - p > 0, x, r).split(x.toString()),
                        v = Object(C.a)(f, 2),
                        y = v[0],
                        w = v[1],
                        k = Object(d.useCallback)(Object(S.a)(B.a.mark((function e() {
                            var t, n, c;
                            return B.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        i(!0), t = Object(ve.a)(s), e.prev = 2, t.s();
                                    case 4:
                                        if ((n = t.n()).done) { e.next = 17; break }
                                        return c = n.value, e.prev = 6, e.next = 9, Object(Be.a)(j, c.pid);
                                    case 9:
                                        a("".concat(r("Harvested"), "!"), r("Your %symbol% earnings have been sent to your wallet!", { symbol: "BSWAP" })), e.next = 15;
                                        break;
                                    case 12:
                                        e.prev = 12, e.t0 = e.catch(6), o(r("Error"), r("Please try again. Confirm the transaction and make sure you are paying enough gas!"));
                                    case 15:
                                        e.next = 4;
                                        break;
                                    case 17:
                                        e.next = 22;
                                        break;
                                    case 19:
                                        e.prev = 19, e.t1 = e.catch(2), t.e(e.t1);
                                    case 22:
                                        return e.prev = 22, t.f(), e.finish(22);
                                    case 25:
                                        i(!1);
                                    case 26:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [2, 19, 22, 25],
                                [6, 12]
                            ])
                        }))), [s, j, a, o, r]);
                    return Object(g.jsx)(ze, { children: Object(g.jsx)(O.u, { children: Object(g.jsxs)(O.R, { flexDirection: ["column", null, null, "row"], justifyContent: "space-between", alignItems: "center", children: [Object(g.jsxs)(O.R, { flexDirection: "column", alignItems: ["center", null, null, "flex-start"], children: [y && Object(g.jsx)(O.Qb, { mb: "4px", color: "textSubtle", children: y }), x.isNaN() ? Object(g.jsx)(O.Db, { width: 96, height: 24, my: "2px" }) : Object(g.jsx)(je.a, { decimals: x.gt(0) ? 2 : 0, fontSize: "24px", bold: !0, prefix: x.gt(0) ? "~$" : "$", lineHeight: "1.1", value: x.toNumber() }), Object(g.jsx)(O.Qb, { mb: ["16px", null, null, "0"], color: "textSubtle", children: w })] }), h <= 0 ? Object(g.jsx)(O.Z, { href: "farms", children: Object(g.jsxs)(O.p, { width: ["100%", null, null, "auto"], variant: "secondary", children: [Object(g.jsx)(O.Qb, { color: "primary", bold: !0, children: r("Start earning") }), Object(g.jsx)(O.f, { ml: "4px", color: "primary" })] }) }) : Object(g.jsx)(O.p, { width: ["100%", null, null, "auto"], id: "harvest-all", isLoading: n, endIcon: n ? Object(g.jsx)(O.i, { spin: !0, color: "currentColor" }) : null, disabled: n, onClick: k, children: Object(g.jsx)(O.Qb, { color: "invertedContrast", bold: !0, children: r(n ? "Harvesting" : "Harvest all") }) })] }) }) })
                },
                Le = n(184),
                Ee = n(814),
                He = n(155),
                We = Object(b.e)(O.R)(U || (U = Object(s.a)(["\n  align-items: center;\n  display: none;\n  ", " {\n    display: flex;\n  }\n"])), (function(e) { return e.theme.mediaQueries.md })),
                Me = Object(b.e)(O.R)(Z || (Z = Object(s.a)(["\n  ", " {\n    display: none;\n  }\n"])), (function(e) { return e.theme.mediaQueries.md })),
                Ne = Object(b.e)(O.R)(G || (G = Object(s.a)(["\n  height: 92px;\n  width: 92px;\n  background-color: ", ";\n  border: 3px solid ", ";\n  border-radius: ", ";\n  box-shadow: ", ";\n"])), (function(e) { return e.theme.colors.invertedContrast }), (function(e) { return e.theme.colors.invertedContrast }), (function(e) { return e.theme.radii.circle }), (function(e) { return e.theme.card.boxShadow })),
                Ue = Object(b.e)(O.qb)(_ || (_ = Object(s.a)(["\n  height: 100%;\n  width: 100%;\n"]))),
                Ze = function() {
                    var e = Object(Le.b)(),
                        t = e.profile,
                        n = e.isLoading,
                        i = Object(m.b)().t,
                        r = Object(u.c)().account,
                        c = Object(He.a)(r);
                    return Object(g.jsxs)(g.Fragment, { children: [Object(g.jsxs)(We, { children: [Object(g.jsx)(O.m, { mr: "24px", children: Object(g.jsx)(Ne, { children: t ? Object(g.jsx)(Ee.a, { profile: t }) : Object(g.jsx)(Ue, {}) }) }), Object(g.jsxs)(O.R, { flexDirection: "column", children: [t ? Object(g.jsx)(O.T, { scale: "xl", children: i("Hi, %userName%!", { userName: t.username }) }) : n && !t ? Object(g.jsx)(O.Db, { width: 200, height: 40, my: "4px" }) : Object(g.jsx)(g.Fragment, {}), n || !r ? Object(g.jsx)(O.Db, { width: 160, height: 16, my: "4px" }) : Object(g.jsxs)(O.Qb, { fontSize: "16px", children: [" ", i("Connected with %address%", { address: c })] })] })] }), Object(g.jsx)(Me, { children: t ? Object(g.jsx)(O.T, { mb: "18px", textAlign: "center", children: i("Hi, %userName%!", { userName: t.username }) }) : n && !t ? Object(g.jsx)(O.Db, { width: 120, height: 20, mt: "2px", mb: "18px" }) : Object(g.jsx)(g.Fragment, {}) })] })
                },
                Ge = Object(b.e)(O.m)(V || (V = Object(s.a)(["\n  border-bottom: 1px ", " solid;\n  border-left: 1px ", " solid;\n  border-right: 1px ", " solid;\n  border-radius: ", ";\n  background: ", ";\n"])), (function(e) { return e.theme.colors.secondary }), (function(e) { return e.theme.colors.secondary }), (function(e) { return e.theme.colors.secondary }), (function(e) { var t = e.theme; return "0 0 ".concat(t.radii.card, " ").concat(t.radii.card) }), (function(e) { return e.theme.isDark ? "linear-gradient(360deg, rgba(49, 61, 92, 0.9) 0%, rgba(61, 42, 84, 0.9) 100%)" : "linear-gradient(180deg, rgba(202, 194, 236, 0.9) 0%,  rgba(204, 220, 239, 0.9) 51.04%, rgba(206, 236, 243, 0.9) 100%)" })),
                _e = function() { return Object(g.jsx)(Ge, { p: ["16px", null, null, "24px"], children: Object(g.jsxs)(O.R, { alignItems: "center", justifyContent: "center", flexDirection: ["column", null, null, "row"], children: [Object(g.jsx)(O.R, { flex: "1", mr: [null, null, null, "32px"], children: Object(g.jsx)(Ze, {}) }), Object(g.jsx)(O.R, { flex: "1", width: ["100%", null, "auto"], children: Object(g.jsx)(Ie, {}) })] }) }) },
                Ve = Object(b.e)(j.a)(q || (q = Object(s.a)(["\n  padding-top: 16px;\n\n  ", " {\n    padding-top: 48px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.md })),
                qe = Object(b.e)(h.a)(J || (J = Object(s.a)(["\n  z-index: 1;\n  position: absolute;\n  width: 100%;\n  top: 0px;\n  left: 50%;\n  transform: translate(-50%, 0);\n  padding-left: 0px;\n  padding-right: 0px;\n\n  ", " {\n    padding-left: 24px;\n    padding-right: 24px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.lg }));
            t.default = function() {
                var e = Object(x.a)().theme,
                    t = Object(u.c)().account,
                    n = { margin: "0", width: "100%", maxWidth: "968px" };
                return Object(g.jsxs)(g.Fragment, { children: [Object(g.jsx)(p.a, {}), Object(g.jsxs)(Ve, { innerProps: { style: { margin: "0", width: "100%" } }, background: e.isDark ? "radial-gradient(103.12% 50% at 50% 50%, #21193A 0%, #191326 100%)" : "linear-gradient(139.73deg, #6ed1d5 0%, #F3EFFF 100%)", index: 2, hasCurvedDivider: !1, children: [t && Object(g.jsx)(qe, { children: Object(g.jsx)(_e, {}) }), Object(g.jsx)(v, {})] }), Object(g.jsx)(j.a, { innerProps: { style: { margin: "0", width: "100%" } }, background: e.isDark ? "linear-gradient(180deg, #09070C 22%, #201335 100%)" : "linear-gradient(180deg, #FFFFFF 22%, #527dd4 100%)", index: 2, hasCurvedDivider: !1, children: Object(g.jsx)(D, {}) }), Object(g.jsxs)(j.a, { innerProps: { style: n }, background: e.colors.background, index: 2, hasCurvedDivider: !1, children: [Object(g.jsx)(Oe, { children: Object(g.jsx)(me, { top: !0, fill: e.isDark ? "#201335" : "#527dd4", children: Object(g.jsx)(fe, {}) }) }), Object(g.jsx)(te, Object(l.a)({}, y))] }), Object(g.jsxs)(j.a, { innerProps: { style: n }, background: e.colors.gradients.cardHeader, index: 2, hasCurvedDivider: !1, children: [Object(g.jsx)(Oe, { children: Object(g.jsx)(me, { width: "150%", top: !0, fill: e.colors.background, children: Object(g.jsx)(ge, {}) }) }), Object(g.jsx)(te, Object(l.a)({}, w)), Object(g.jsx)(ce, {})] }), Object(g.jsxs)(j.a, { innerProps: { style: n }, background: e.colors.background, index: 2, hasCurvedDivider: !1, children: [Object(g.jsx)(te, Object(l.a)({}, k)), Object(g.jsx)(pe, {})] }), Object(g.jsx)(j.a, { innerProps: { style: n }, background: "linear-gradient(180deg, #faf9fa 0%,   #20e3c6 100%)", index: 2, hasCurvedDivider: !1, children: Object(g.jsx)(de, {}) })] })
            }
        },
        784: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() { return r }));
            var i = n(250);

            function r(e, t) {
                var n;
                if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (n = Object(i.a)(e)) || t && e && "number" === typeof e.length) {
                        n && (e = n);
                        var r = 0,
                            c = function() {};
                        return { s: c, n: function() { return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] } }, e: function(e) { throw e }, f: c }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var a, o = !0,
                    l = !1;
                return { s: function() { n = e[Symbol.iterator]() }, n: function() { var e = n.next(); return o = e.done, e }, e: function(e) { l = !0, a = e }, f: function() { try { o || null == n.return || n.return() } finally { if (l) throw a } } }
            }
        },
        814: function(e, t, n) {
            "use strict";
            var i, r, c, a = n(8),
                o = (n(1), n(2)),
                l = n(5),
                s = n(0),
                d = l.e.img(i || (i = Object(a.a)(["\n  border: 1px solid ", ";\n  border-radius: 50%;\n  bottom: 0px;\n  position: absolute;\n  right: 0px;\n  min-width: 20px;\n  min-height: 20px;\n  width: 37.5%;\n  height: 37.5%;\n  z-index: 5;\n\n  ", " {\n    border-width: 2px;\n  }\n"])), (function(e) { return e.theme.card.background }), (function(e) { return e.theme.mediaQueries.sm })),
                b = l.e.div(r || (r = Object(a.a)(["\n  background: url('", "');\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 50%;\n  position: relative;\n  width: 100%;\n  height: 100%;\n\n  & > img {\n    border-radius: 50%;\n  }\n"])), (function(e) { return e.bg })),
                j = Object(l.e)(o.qb)(c || (c = Object(a.a)(["\n  width: 100%;\n  height: 100%;\n"])));
            t.a = function(e) { var t, n, i = e.profile; return Object(s.jsxs)(b, { bg: "/images/nfts/".concat(null === (t = i.nft) || void 0 === t || null === (n = t.images) || void 0 === n ? void 0 : n.md), children: [!i.isActive && Object(s.jsx)(j, {}), Object(s.jsx)(d, { src: "/images/teams/".concat(i.team.images.alt), alt: i.team.name })] }) }
        },
        881: function(e, t, n) {
            "use strict";
            var i, r, c, a, o, l, s, d = n(6),
                b = n(51),
                j = n(8),
                u = (n(1), n(5)),
                x = n(2),
                h = n(245),
                p = n(0),
                O = function(e, t, n) { return Object(u.d)(i || (i = Object(j.a)(["\n  width: 100%;\n  height: 20px;\n  clip-path: url(", ");\n\n  background: ", ";\n\n  & svg {\n    display: block;\n  }\n"])), t, (function() { return e.isDark ? (null === n || void 0 === n ? void 0 : n.dark) || (null === n || void 0 === n ? void 0 : n.light) || e.colors.background : (null === n || void 0 === n ? void 0 : n.light) || e.colors.background })) },
                m = Object(u.e)(x.m)(r || (r = Object(j.a)(["\n  ", "\n  transform: ", ";\n"])), (function(e) {
                    var t = e.theme,
                        n = e.clipPath,
                        i = e.clipFill;
                    return O(t, n, i)
                }), (function(e) { return "#bottomConcaveCurve" === e.clipPath ? "translate(0, -13px)" : "translate(0, 1px)" })),
                f = Object(u.e)(x.m)(c || (c = Object(j.a)(["\n  ", "\n  transform: ", ";\n"])), (function(e) {
                    var t = e.theme,
                        n = e.clipPath,
                        i = e.clipFill;
                    return O(t, n, i)
                }), (function(e) { return "#bottomConvexCurve" === e.clipPath ? "translate(0, -13px)" : "translate(0, -1px)" })),
                g = function(e) { var t = e.clipFill; return Object(p.jsx)(f, { clipFill: t, clipPath: "#topConvexCurve", children: Object(p.jsx)("svg", { width: "0", height: "0", children: Object(p.jsx)("defs", { children: Object(p.jsx)("clipPath", { id: "topConvexCurve", clipPathUnits: "objectBoundingBox", children: Object(p.jsx)("path", { d: "M 0,1 L 0,0 L 1,0 L 1,1 C 0.75 0, .25 0, 0 1 Z" }) }) }) }) }) },
                v = function(e) { var t = e.clipFill; return Object(p.jsx)(f, { clipFill: t, clipPath: "#bottomConvexCurve", children: Object(p.jsx)("svg", { width: "0", height: "0", children: Object(p.jsx)("defs", { children: Object(p.jsx)("clipPath", { id: "bottomConvexCurve", clipPathUnits: "objectBoundingBox", children: Object(p.jsx)("path", { d: "M 0,0 L 0,1 L 1,1 L 1,0 C .75 1, .25 1, 0 0 Z" }) }) }) }) }) },
                y = function(e) { var t = e.clipFill; return Object(p.jsx)(m, { clipFill: t, clipPath: "#topConcaveCurve", children: Object(p.jsx)("svg", { width: "0", height: "0", children: Object(p.jsx)("defs", { children: Object(p.jsx)("clipPath", { id: "topConcaveCurve", clipPathUnits: "objectBoundingBox", children: Object(p.jsx)("path", { d: "M 0,0 L 0,1 L 1,1 L 1,0 C .75 1, .25 1, 0 0 Z" }) }) }) }) }) },
                w = function(e) { var t = e.clipFill; return Object(p.jsx)(m, { clipFill: t, clipPath: "#bottomConcaveCurve", children: Object(p.jsx)("svg", { width: "0", height: "0", children: Object(p.jsx)("defs", { children: Object(p.jsx)("clipPath", { id: "bottomConcaveCurve", clipPathUnits: "objectBoundingBox", children: Object(p.jsx)("path", { d: "M 0,1 L 0,0 L 1,0 L 1,1 C .75 0.1, .25 0.1, 0 1 Z" }) }) }) }) }) },
                k = u.e.div(a || (a = Object(j.a)(["\n  background: ", ";\n  z-index: ", ";\n  position: relative;\n  display: flex;\n  align-items: center;\n  width: 100%;\n"])), (function(e) {
                    var t = e.theme,
                        n = e.dividerFill;
                    return t.isDark ? (null === n || void 0 === n ? void 0 : n.dark) || (null === n || void 0 === n ? void 0 : n.light) || "none" : (null === n || void 0 === n ? void 0 : n.light) || (null === n || void 0 === n ? void 0 : n.dark) || "none"
                }), (function(e) { return e.index })),
                C = u.e.div(o || (o = Object(j.a)(["\n  z-index: ", ";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"])), (function(e) { return e.index + 1 })),
                F = function(e) {
                    var t = e.index,
                        n = e.dividerPosition,
                        i = e.dividerComponent,
                        r = e.concave,
                        c = e.clipFill,
                        a = e.dividerFill,
                        o = "top" === n && !r,
                        l = "bottom" === n && !r,
                        s = "top" === n && r,
                        d = "bottom" === n && r;
                    return Object(p.jsxs)(k, { index: t, dividerFill: a, children: [i && Object(p.jsx)(C, { index: t, children: i }), Object(p.jsxs)(p.Fragment, { children: [s && Object(p.jsx)(y, { clipFill: c }), d && Object(p.jsx)(w, { clipFill: c })] }), Object(p.jsxs)(p.Fragment, { children: [o && Object(p.jsx)(g, { clipFill: c }), l && Object(p.jsx)(v, { clipFill: c })] })] })
                },
                B = ["children", "background", "svgFill", "index", "dividerComponent", "dividerPosition", "hasCurvedDivider", "concaveDivider", "clipFill", "dividerFill", "containerProps", "innerProps"],
                S = Object(u.e)(x.R)(l || (l = Object(j.a)(["\n  position: relative;\n  flex-direction: column;\n  align-items: center;\n  z-index: ", ";\n  background: ", ";\n  padding: ", ";\n"])), (function(e) { return e.index - 1 }), (function(e) {
                    var t = e.background,
                        n = e.theme;
                    return t || n.colors.background
                }), (function(e) { return (0, e.getPadding)() })),
                P = Object(u.e)(h.a)(s || (s = Object(j.a)(["\n  min-height: auto;\n  padding-top: 16px;\n  padding-bottom: 16px;\n\n  ", " {\n    padding-top: 32px;\n    padding-bottom: 32px;\n  }\n\n  ", " {\n    padding-top: 48px;\n    padding-bottom: 48px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm }), (function(e) { return e.theme.mediaQueries.lg }));
            t.a = function(e) {
                var t = e.children,
                    n = e.background,
                    i = e.svgFill,
                    r = e.index,
                    c = void 0 === r ? 1 : r,
                    a = e.dividerComponent,
                    o = e.dividerPosition,
                    l = void 0 === o ? "bottom" : o,
                    s = e.hasCurvedDivider,
                    j = void 0 === s || s,
                    u = e.concaveDivider,
                    h = void 0 !== u && u,
                    O = e.clipFill,
                    m = e.dividerFill,
                    f = e.containerProps,
                    g = e.innerProps,
                    v = Object(b.a)(e, B);
                return Object(p.jsxs)(x.m, Object(d.a)(Object(d.a)({}, f), {}, { children: [j && "top" === l && Object(p.jsx)(F, { svgFill: i, index: c, concave: h, dividerPosition: l, dividerComponent: a, clipFill: O, dividerFill: m }), Object(p.jsx)(S, Object(d.a)(Object(d.a)({ background: n, index: c, getPadding: function() { return j ? "bottom" === l ? "48px 0 14px" : "top" === l ? "14px 0 48px" : "48px 0" : "48px 0" } }, v), {}, { children: Object(p.jsx)(P, Object(d.a)(Object(d.a)({}, g), {}, { children: t })) })), j && "bottom" === l && Object(p.jsx)(F, { svgFill: i, index: c, concave: h, dividerPosition: l, dividerComponent: a, clipFill: O, dividerFill: m })] }))
            }
        }
    }
]);
//# sourceMappingURL=9.037355f3.chunk.js.map