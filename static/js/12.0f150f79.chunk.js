(this["webpackJsonppancake-frontend"] = this["webpackJsonppancake-frontend"] || []).push([
    [12], {
        1252: function(e, t, n) {
            "use strict";
            n.r(t);
            var r, c, a, o = n(1),
                i = n.n(o),
                s = n(75),
                l = n(3),
                u = n.n(l),
                d = n(12),
                b = n(9),
                j = n(8),
                p = n(69),
                f = n(93),
                x = .0025,
                m = .0017,
                O = 1619136e3,
                h = 86400,
                v = 10,
                k = ["0x495c7f3a713870f68f8b418b355c085dfdc412c3", "0xc3761eb917cd790b30dad99f6cc5b4ff93c4f9ea", "0xe31debd7abff90b06bca21010dd860d8701fd901", "0xfc989fbb6b3024de5ca0144dc23c18a063942ac1", "0xe40fc6ff5f2895b44268fd2e1a421e07f567e007", "0xfd158609228b43aa380140b46fff3cdf9ad315de", "0xc00af6212fcf0e6fd3143e692ccd4191dc308bea", "0x205969b3ad459f7eba0dee07231a6357183d3fb6", "0x0bd67d358636fd7b0597724aa4f20beedbf3073a", "0xedf5d2a561e8a3cb5a846fbce24d2ccd88f50075", "0x702b0789a3d4dade1688a0c8b7d944e5ba80fc30", "0x041929a760d7049edaef0db246fa76ec975e90cc", "0xba098df8c6409669f5e6ec971ac02cd5982ac108", "0x1bbed115afe9e8d6e9255f18ef10d43ce6608d94", "0xe99512305bf42745fae78003428dcaf662afb35d", "0xbE609EAcbFca10F6E5504D39E3B113F808389056", "0x847daf9dfdc22d5c61c4a857ec8733ef5950e82e", "0xdbf8913dfe14536c0dae5dd06805afb2731f7e7b", "0xF1D50dB2C40b63D2c598e2A808d1871a40b1E653", "0x4269e4090ff9dfc99d8846eb0d42e67f01c3ac8b"],
                y = function(e, t) { return e && t ? e - t : e || 0 },
                g = function(e, t) { return e && t ? (e - t) / t * 100 : 0 },
                D = function(e, t, n) {
                    var r = y(e, t),
                        c = y(t, n);
                    return [r, g(r, c)]
                },
                S = function(e, t, n) { var r = n > 0 ? t * m * 52.1429 * 100 / n : 0; return { totalFees24h: e * x, totalFees7d: t * x, lpFees24h: e * m, lpFees7d: t * m, lpApr7d: r !== 1 / 0 ? r : 0 } },
                w = n(6),
                C = n(1240),
                U = n(1241),
                T = n(493),
                Q = n(703),
                F = function() {
                    var e = Object(d.a)(u.a.mark((function e(t, n, r) {
                        var c, a, o, i, s, l, d, b = arguments;
                        return u.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    c = b.length > 3 && void 0 !== b[3] ? b[3] : 1e3, a = {}, o = !1, i = 0, e.prev = 4;
                                case 5:
                                    if (o) { e.next = 17; break }
                                    return s = n.length, i + c < n.length && (s = i + c), l = n.slice(i, s), e.next = 11, Object(p.request)(r, t(l));
                                case 11:
                                    d = e.sent, a = Object(w.a)(Object(w.a)({}, a), d), o = Object.keys(d).length < c || i + c > n.length, i += c, e.next = 5;
                                    break;
                                case 17:
                                    return e.abrupt("return", a);
                                case 20:
                                    return e.prev = 20, e.t0 = e.catch(4), console.error("Failed to fetch info data", e.t0), e.abrupt("return", null);
                                case 24:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [4, 20]
                        ])
                    })));
                    return function(t, n, r) { return e.apply(this, arguments) }
                }(),
                A = function() { var e = 1e3 * Object(C.a)(new Date); return [Object(C.a)(Object(U.a)(Object(T.default)(e, 1))), Object(C.a)(Object(U.a)(Object(T.default)(e, 2))), Object(C.a)(Object(U.a)(Object(Q.default)(e, 1))), Object(C.a)(Object(U.a)(Object(Q.default)(e, 2)))] },
                q = function(e) { return e.map((function(e) { return "t".concat(e, ":blocks(first: 1, orderBy: timestamp, orderDirection: desc, where: { timestamp_gt: ").concat(e, ", timestamp_lt: ").concat(e + 600, " }) {\n      number\n    }") })) },
                L = function(e) { return Object(p.gql)(r || (r = Object(j.a)(["query blocks {\n    ", "\n  }"])), e) },
                z = function() {
                    var e = Object(d.a)(u.a.mark((function e(t) {
                        var n, r, c, a, o, i, s, l, d = arguments;
                        return u.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (n = d.length > 1 && void 0 !== d[1] ? d[1] : "desc", r = d.length > 2 && void 0 !== d[2] ? d[2] : 500, 0 !== (null === t || void 0 === t ? void 0 : t.length)) { e.next = 4; break }
                                    return e.abrupt("return", []);
                                case 4:
                                    return e.next = 6, F(L, q(t), f.b, r);
                                case 6:
                                    if (c = e.sent, a = "desc" === n ? function(e, t) { return t.number - e.number } : function(e, t) { return e.number - t.number }, o = [], c) {
                                        for (i = 0, s = Object.keys(c); i < s.length; i++) l = s[i], c[l].length > 0 && o.push({ timestamp: l.split("t")[1], number: parseInt(c[l][0].number, 10) });
                                        o.sort(a)
                                    }
                                    return e.abrupt("return", o);
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) { return e.apply(this, arguments) }
                }(),
                $ = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "desc",
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e3,
                        r = Object(o.useState)(),
                        c = Object(b.a)(r, 2),
                        a = c[0],
                        i = c[1],
                        s = Object(o.useState)(!1),
                        l = Object(b.a)(s, 2),
                        j = l[0],
                        p = l[1];
                    return Object(o.useEffect)((function() {
                        a || j || function() {
                            var r = Object(d.a)(u.a.mark((function r() {
                                var c;
                                return u.a.wrap((function(r) {
                                    for (;;) switch (r.prev = r.next) {
                                        case 0:
                                            return r.next = 2, z(e, t, n);
                                        case 2:
                                            0 === (c = r.sent).length ? p(!0) : i(c);
                                        case 4:
                                        case "end":
                                            return r.stop()
                                    }
                                }), r)
                            })));
                            return function() { return r.apply(this, arguments) }
                        }()()
                    })), { blocks: a, error: j }
                },
                B = function() {
                    var e = Object(d.a)(u.a.mark((function e(t) {
                        var n, r;
                        return u.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, n = Object(p.gql)(c || (c = Object(j.a)(["query overview {\n      pancakeFactories(\n        ", " \n        first: 1) {\n        totalTransactions\n        totalVolumeUSD\n        totalLiquidityUSD\n      }\n    }"])), t ? "block: { number: ".concat(t, "}") : ""), e.next = 4, Object(p.request)(f.f, n);
                                case 4:
                                    return r = e.sent, e.abrupt("return", { data: r, error: !1 });
                                case 8:
                                    return e.prev = 8, e.t0 = e.catch(0), console.error("Failed to fetch info overview", e.t0), e.abrupt("return", { data: null, error: !0 });
                                case 12:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 8]
                        ])
                    })));
                    return function(t) { return e.apply(this, arguments) }
                }(),
                N = function(e) { return e ? { totalTransactions: parseFloat(e.totalTransactions), totalVolumeUSD: parseFloat(e.totalVolumeUSD), totalLiquidityUSD: parseFloat(e.totalLiquidityUSD) } : null },
                I = function() {
                    var e = Object(o.useState)({ error: !1 }),
                        t = Object(b.a)(e, 2),
                        n = t[0],
                        r = t[1],
                        c = A(),
                        a = Object(b.a)(c, 2),
                        i = a[0],
                        s = a[1],
                        l = $([i, s]),
                        j = l.blocks,
                        p = l.error,
                        f = null !== j && void 0 !== j ? j : [],
                        x = Object(b.a)(f, 2),
                        m = x[0],
                        O = x[1];
                    return Object(o.useEffect)((function() {
                        var e = function() {
                            var e = Object(d.a)(u.a.mark((function e() {
                                var t, n, c, a, o, i, s, l, d, j, p, f, x, h, v, k, y, S, w, C, U, T, Q, F, A, q, L, z, $;
                                return u.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, B();
                                        case 2:
                                            return i = e.sent, s = i.error, l = i.data, e.next = 7, B(null !== (t = null === m || void 0 === m ? void 0 : m.number) && void 0 !== t ? t : void 0);
                                        case 7:
                                            return d = e.sent, j = d.error, p = d.data, e.next = 12, B(null !== (n = null === O || void 0 === O ? void 0 : O.number) && void 0 !== n ? n : void 0);
                                        case 12:
                                            f = e.sent, x = f.error, h = f.data, v = s || j || x, k = N(null === l || void 0 === l || null === (c = l.pancakeFactories) || void 0 === c ? void 0 : c[0]), y = N(null === p || void 0 === p || null === (a = p.pancakeFactories) || void 0 === a ? void 0 : a[0]), S = N(null === h || void 0 === h || null === (o = h.pancakeFactories) || void 0 === o ? void 0 : o[0]), w = k && y && S, v || !w ? r({ error: !0 }) : (C = D(k.totalVolumeUSD, y.totalVolumeUSD, S.totalVolumeUSD), U = Object(b.a)(C, 2), T = U[0], Q = U[1], F = g(k.totalLiquidityUSD, y.totalLiquidityUSD), A = D(k.totalTransactions, y.totalTransactions, S.totalTransactions), q = Object(b.a)(A, 2), L = q[0], z = q[1], $ = { volumeUSD: T, volumeUSDChange: "number" === typeof Q ? Q : 0, liquidityUSD: k.totalLiquidityUSD, liquidityUSDChange: F, txCount: L, txCountChange: z }, r({ error: !1, data: $ }));
                                        case 21:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() { return e.apply(this, arguments) }
                        }();
                        !((null === m || void 0 === m ? void 0 : m.number) && (null === O || void 0 === O ? void 0 : O.number)) || p || n.data || e()
                    }), [m, O, p, n]), n
                },
                M = n(18);
            ! function(e) { e[e.SWAP = 0] = "SWAP", e[e.MINT = 1] = "MINT", e[e.BURN = 2] = "BURN" }(a || (a = {}));
            var P, R, E, V, W, H, _, Y, K, G, X, J, Z, ee, te, ne, re, ce, ae, oe, ie, se, le, ue, de, be, je, pe, fe, xe, me, Oe, he, ve, ke, ye, ge, De, Se, we, Ce, Ue, Te, Qe, Fe, Ae = function(e) { return { type: a.MINT, hash: e.id.split("-")[0], timestamp: e.timestamp, sender: e.to, token0Symbol: e.pair.token0.symbol, token1Symbol: e.pair.token1.symbol, token0Address: e.pair.token0.id, token1Address: e.pair.token1.id, amountUSD: parseFloat(e.amountUSD), amountToken0: parseFloat(e.amount0), amountToken1: parseFloat(e.amount1) } },
                qe = function(e) { return { type: a.BURN, hash: e.id.split("-")[0], timestamp: e.timestamp, sender: e.sender, token0Symbol: e.pair.token0.symbol, token1Symbol: e.pair.token1.symbol, token0Address: e.pair.token0.id, token1Address: e.pair.token1.id, amountUSD: parseFloat(e.amountUSD), amountToken0: parseFloat(e.amount0), amountToken1: parseFloat(e.amount1) } },
                Le = function(e) { return { type: a.SWAP, hash: e.id.split("-")[0], timestamp: e.timestamp, sender: e.from, token0Symbol: e.pair.token0.symbol, token1Symbol: e.pair.token1.symbol, token0Address: e.pair.token0.id, token1Address: e.pair.token1.id, amountUSD: parseFloat(e.amountUSD), amountToken0: parseFloat(e.amount0In) - parseFloat(e.amount0Out), amountToken1: parseFloat(e.amount1In) - parseFloat(e.amount1Out) } },
                ze = function(e) { return { date: e.date, volumeUSD: parseFloat(e.dailyVolumeUSD), liquidityUSD: parseFloat(e.totalLiquidityUSD) } },
                $e = function(e) { return { date: e.date, volumeUSD: parseFloat(e.dailyVolumeUSD), liquidityUSD: parseFloat(e.reserveUSD) } },
                Be = function() {
                    var e = Object(d.a)(u.a.mark((function e(t, n) {
                        var r, c, a, o, i, s, l, d, b, j, p, f, x, m, v, k;
                        return u.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    a = [], o = !1, i = 0, s = !1;
                                case 4:
                                    if (s) { e.next = 16; break }
                                    return e.next = 7, t(i, n);
                                case 7:
                                    l = e.sent, d = l.data, b = l.error, i += 1e3, s = d.length < 1e3, o = b, d && (a = a.concat(d)), e.next = 4;
                                    break;
                                case 16:
                                    if (!o && 0 !== a.length) { e.next = 18; break }
                                    return e.abrupt("return", { error: !0 });
                                case 18:
                                    for (j = a.reduce((function(e, t) { var n = parseInt((t.date / h).toFixed(0)); return Object(w.a)(Object(M.a)({}, n, t), e) }), {}), p = Object.keys(j).map((function(e) { return parseInt(e, 10) })), f = j[p[0]], x = null !== (r = null === f || void 0 === f ? void 0 : f.date) && void 0 !== r ? r : O, m = null !== (c = null === f || void 0 === f ? void 0 : f.liquidityUSD) && void 0 !== c ? c : 0, v = Object(C.a)(new Date); x < v - h;) x += h, k = parseInt((x / h).toFixed(0), 10), Object.keys(j).includes(k.toString()) ? m = j[k].liquidityUSD : j[k] = { date: x, volumeUSD: 0, liquidityUSD: m };
                                    return e.abrupt("return", { data: Object.values(j), error: !1 });
                                case 26:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) { return e.apply(this, arguments) }
                }(),
                Ne = Object(p.gql)(P || (P = Object(j.a)(["\n  query overviewCharts($startTime: Int!, $skip: Int!) {\n    pancakeDayDatas(first: 1000, skip: $skip, where: { date_gt: $startTime }, orderBy: date, orderDirection: asc) {\n      date\n      dailyVolumeUSD\n      totalLiquidityUSD\n    }\n  }\n"]))),
                Ie = function() {
                    var e = Object(d.a)(u.a.mark((function e(t) {
                        var n, r, c;
                        return u.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, Object(p.request)(f.f, Ne, { startTime: O, skip: t });
                                case 3:
                                    return n = e.sent, r = n.pancakeDayDatas, c = r.map(ze), e.abrupt("return", { data: c, error: !1 });
                                case 9:
                                    return e.prev = 9, e.t0 = e.catch(0), console.error("Failed to fetch overview chart data", e.t0), e.abrupt("return", { error: !0 });
                                case 13:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 9]
                        ])
                    })));
                    return function(t) { return e.apply(this, arguments) }
                }(),
                Me = function() {
                    var e = Object(o.useState)(),
                        t = Object(b.a)(e, 2),
                        n = t[0],
                        r = t[1],
                        c = Object(o.useState)(!1),
                        a = Object(b.a)(c, 2),
                        i = a[0],
                        s = a[1];
                    return Object(o.useEffect)((function() {
                        n || i || function() {
                            var e = Object(d.a)(u.a.mark((function e() {
                                var t, n;
                                return u.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, Be(Ie);
                                        case 2:
                                            t = e.sent, (n = t.data) ? r(n) : s(!0);
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() { return e.apply(this, arguments) }
                        }()()
                    }), [n, i]), { error: i, data: n }
                },
                Pe = n(31),
                Re = Object(p.gql)(R || (R = Object(j.a)(["\n  query overviewTransactions {\n    mints: mints(first: 33, orderBy: timestamp, orderDirection: desc) {\n      id\n      timestamp\n      pair {\n        token0 {\n          id\n          symbol\n        }\n        token1 {\n          id\n          symbol\n        }\n      }\n      to\n      amount0\n      amount1\n      amountUSD\n    }\n    swaps: swaps(first: 33, orderBy: timestamp, orderDirection: desc) {\n      id\n      timestamp\n      pair {\n        token0 {\n          id\n          symbol\n        }\n        token1 {\n          id\n          symbol\n        }\n      }\n      from\n      amount0In\n      amount1In\n      amount0Out\n      amount1Out\n      amountUSD\n    }\n    burns: burns(first: 33, orderBy: timestamp, orderDirection: desc) {\n      id\n      timestamp\n      pair {\n        token0 {\n          id\n          symbol\n        }\n        token1 {\n          id\n          symbol\n        }\n      }\n      sender\n      amount0\n      amount1\n      amountUSD\n    }\n  }\n"]))),
                Ee = function() {
                    var e = Object(d.a)(u.a.mark((function e() {
                        var t, n, r, c;
                        return u.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, Object(p.request)(f.f, Re);
                                case 3:
                                    if (t = e.sent) { e.next = 6; break }
                                    return e.abrupt("return", void 0);
                                case 6:
                                    return n = t.mints.map(Ae), r = t.burns.map(qe), c = t.swaps.map(Le), e.abrupt("return", [].concat(Object(Pe.a)(n), Object(Pe.a)(r), Object(Pe.a)(c)).sort((function(e, t) { return parseInt(t.timestamp, 10) - parseInt(e.timestamp, 10) })));
                                case 12:
                                    return e.prev = 12, e.t0 = e.catch(0), e.abrupt("return", void 0);
                                case 15:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 12]
                        ])
                    })));
                    return function() { return e.apply(this, arguments) }
                }(),
                Ve = Ee,
                We = function() {
                    var e = Object(d.a)(u.a.mark((function e(t) {
                        var n, r;
                        return u.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, n = Object(p.gql)(E || (E = Object(j.a)(["\n      query topPools($blacklist: [String!], $timestamp24hAgo: Int) {\n        pairDayDatas(\n          first: 30\n          where: { dailyTxns_gt: 300, token0_not_in: $blacklist, token1_not_in: $blacklist, date_gt: $timestamp24hAgo }\n          orderBy: dailyVolumeUSD\n          orderDirection: desc\n        ) {\n          id\n        }\n      }\n    "]))), e.next = 4, Object(p.request)(f.f, n, { blacklist: k, timestamp24hAgo: t });
                                case 4:
                                    return r = e.sent, e.abrupt("return", r.pairDayDatas.map((function(e) { return e.id.split("-")[0] })));
                                case 8:
                                    return e.prev = 8, e.t0 = e.catch(0), console.error("Failed to fetch top pools", e.t0), e.abrupt("return", []);
                                case 12:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 8]
                        ])
                    })));
                    return function(t) { return e.apply(this, arguments) }
                }(),
                He = function() {
                    var e = Object(o.useState)([]),
                        t = Object(b.a)(e, 2),
                        n = t[0],
                        r = t[1],
                        c = A(),
                        a = Object(b.a)(c, 1)[0];
                    return Object(o.useEffect)((function() {
                        var e = function() {
                            var e = Object(d.a)(u.a.mark((function e() {
                                var t;
                                return u.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, We(a);
                                        case 2:
                                            t = e.sent, r(t);
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() { return e.apply(this, arguments) }
                        }();
                        0 === n.length && e()
                    }), [n, a]), n
                },
                _e = function(e, t) {
                    var n = e ? "block: {number: ".concat(e, "}") : "",
                        r = '["'.concat(t.join('","'), '"]');
                    return "pairs(\n    where: { id_in: ".concat(r, " }\n    ").concat(n, "\n    orderBy: trackedReserveBNB\n    orderDirection: desc\n  ) {\n    id\n    reserve0\n    reserve1\n    reserveUSD\n    volumeUSD\n    token0Price\n    token1Price\n    token0 {\n      id\n      symbol\n      name\n    }\n    token1 {\n      id\n      symbol\n      name\n    }\n  }")
                },
                Ye = function() {
                    var e = Object(d.a)(u.a.mark((function e(t, n, r, c, a) {
                        var o, i;
                        return u.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, o = Object(p.gql)(V || (V = Object(j.a)(["\n      query pools {\n        now: ", "\n        oneDayAgo: ", "\n        twoDaysAgo: ", "\n        oneWeekAgo: ", "\n        twoWeeksAgo: ", "\n      }\n    "])), _e(null, a), _e(t, a), _e(n, a), _e(r, a), _e(c, a)), e.next = 4, Object(p.request)(f.f, o);
                                case 4:
                                    return i = e.sent, e.abrupt("return", { data: i, error: !1 });
                                case 8:
                                    return e.prev = 8, e.t0 = e.catch(0), console.error("Failed to fetch pool data", e.t0), e.abrupt("return", { erro: !0 });
                                case 12:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 8]
                        ])
                    })));
                    return function(t, n, r, c, a) { return e.apply(this, arguments) }
                }(),
                Ke = function(e) {
                    return e ? e.reduce((function(e, t) {
                        var n = t.volumeUSD,
                            r = t.reserveUSD,
                            c = t.reserve0,
                            a = t.reserve1,
                            o = t.token0Price,
                            i = t.token1Price;
                        return e[t.id] = Object(w.a)(Object(w.a)({}, t), {}, { volumeUSD: parseFloat(n), reserveUSD: parseFloat(r), reserve0: parseFloat(c), reserve1: parseFloat(a), token0Price: parseFloat(o), token1Price: parseFloat(i) }), e
                    }), {}) : {}
                },
                Ge = function(e) {
                    var t = Object(o.useState)({ error: !1 }),
                        n = Object(b.a)(t, 2),
                        r = n[0],
                        c = n[1],
                        a = A(),
                        i = Object(b.a)(a, 4),
                        s = i[0],
                        l = i[1],
                        j = i[2],
                        p = i[3],
                        f = $([s, l, j, p]),
                        x = f.blocks,
                        m = f.error,
                        O = null !== x && void 0 !== x ? x : [],
                        h = Object(b.a)(O, 4),
                        v = h[0],
                        k = h[1],
                        y = h[2],
                        w = h[3];
                    return Object(o.useEffect)((function() {
                        var t = function() {
                                var t = Object(d.a)(u.a.mark((function t() {
                                    var n, r, a, o, i, s, l, d, j;
                                    return u.a.wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return t.next = 2, Ye(v.number, k.number, y.number, w.number, e);
                                            case 2:
                                                n = t.sent, r = n.error, a = n.data, r ? c({ error: !0 }) : (o = Ke(null === a || void 0 === a ? void 0 : a.now), i = Ke(null === a || void 0 === a ? void 0 : a.oneDayAgo), s = Ke(null === a || void 0 === a ? void 0 : a.twoDaysAgo), l = Ke(null === a || void 0 === a ? void 0 : a.oneWeekAgo), d = Ke(null === a || void 0 === a ? void 0 : a.twoWeeksAgo), j = e.reduce((function(e, t) {
                                                    var n = o[t],
                                                        r = i[t],
                                                        c = s[t],
                                                        a = l[t],
                                                        u = d[t],
                                                        j = D(null === n || void 0 === n ? void 0 : n.volumeUSD, null === r || void 0 === r ? void 0 : r.volumeUSD, null === c || void 0 === c ? void 0 : c.volumeUSD),
                                                        p = Object(b.a)(j, 2),
                                                        f = p[0],
                                                        x = p[1],
                                                        m = D(null === n || void 0 === n ? void 0 : n.volumeUSD, null === a || void 0 === a ? void 0 : a.volumeUSD, null === u || void 0 === u ? void 0 : u.volumeUSD),
                                                        O = Object(b.a)(m, 2),
                                                        h = O[0],
                                                        v = O[1],
                                                        k = n ? n.reserveUSD : 0,
                                                        y = g(null === n || void 0 === n ? void 0 : n.reserveUSD, null === r || void 0 === r ? void 0 : r.reserveUSD),
                                                        w = n ? n.reserve0 : 0,
                                                        C = n ? n.reserve1 : 0,
                                                        U = S(f, h, k),
                                                        T = U.totalFees24h,
                                                        Q = U.totalFees7d,
                                                        F = U.lpFees24h,
                                                        A = U.lpFees7d,
                                                        q = U.lpApr7d;
                                                    return n && (e[t] = { address: t, token0: { address: n.token0.id, name: n.token0.name, symbol: n.token0.symbol }, token1: { address: n.token1.id, name: n.token1.name, symbol: n.token1.symbol }, token0Price: n.token0Price, token1Price: n.token1Price, volumeUSD: f, volumeUSDChange: x, volumeUSDWeek: h, volumeUSDChangeWeek: v, totalFees24h: T, totalFees7d: Q, lpFees24h: F, lpFees7d: A, lpApr7d: q, liquidityUSD: k, liquidityUSDChange: y, liquidityToken0: w, liquidityToken1: C }), e
                                                }), {}), c({ data: j, error: !1 }));
                                            case 6:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t)
                                })));
                                return function() { return t.apply(this, arguments) }
                            }(),
                            n = (null === v || void 0 === v ? void 0 : v.number) && (null === k || void 0 === k ? void 0 : k.number) && (null === y || void 0 === y ? void 0 : y.number) && (null === w || void 0 === w ? void 0 : w.number);
                        e.length > 0 && n && !m && t()
                    }), [e, v, k, y, w, m]), r
                },
                Xe = Object(p.gql)(W || (W = Object(j.a)(['\n  query prices($block24: Int!, $block48: Int!, $blockWeek: Int!) {\n    current: bundle(id: "1") {\n      bnbPrice\n    }\n    oneDay: bundle(id: "1", block: { number: $block24 }) {\n      bnbPrice\n    }\n    twoDay: bundle(id: "1", block: { number: $block48 }) {\n      bnbPrice\n    }\n    oneWeek: bundle(id: "1", block: { number: $blockWeek }) {\n      bnbPrice\n    }\n  }\n']))),
                Je = function() {
                    var e = Object(d.a)(u.a.mark((function e(t, n, r) {
                        var c, a, o, i, s, l, d, b, j;
                        return u.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, Object(p.request)(f.f, Xe, { block24: t, block48: n, blockWeek: r });
                                case 3:
                                    return j = e.sent, e.abrupt("return", { error: !1, bnbPrices: { current: parseFloat(null !== (c = null === (a = j.current) || void 0 === a ? void 0 : a.bnbPrice) && void 0 !== c ? c : "0"), oneDay: parseFloat(null !== (o = null === (i = j.oneDay) || void 0 === i ? void 0 : i.bnbPrice) && void 0 !== o ? o : "0"), twoDay: parseFloat(null !== (s = null === (l = j.twoDay) || void 0 === l ? void 0 : l.bnbPrice) && void 0 !== s ? s : "0"), week: parseFloat(null !== (d = null === (b = j.oneWeek) || void 0 === b ? void 0 : b.bnbPrice) && void 0 !== d ? d : "0") } });
                                case 7:
                                    return e.prev = 7, e.t0 = e.catch(0), console.error("Failed to fetch BNB prices", e.t0), e.abrupt("return", { error: !0, bnbPrices: void 0 });
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 7]
                        ])
                    })));
                    return function(t, n, r) { return e.apply(this, arguments) }
                }(),
                Ze = function(e, t) {
                    var n = '["'.concat(t.join('","'), '"]'),
                        r = e ? "block: {number: ".concat(e, "}") : "";
                    return "tokens(\n      where: {id_in: ".concat(n, "}\n      ").concat(r, "\n      orderBy: tradeVolumeUSD\n      orderDirection: desc\n    ) {\n      id\n      symbol\n      name\n      derivedBNB\n      derivedUSD\n      tradeVolumeUSD\n      totalTransactions\n      totalLiquidity\n    }\n  ")
                },
                et = function() {
                    var e = Object(d.a)(u.a.mark((function e(t, n, r, c, a) {
                        var o, i;
                        return u.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, o = Object(p.gql)(H || (H = Object(j.a)(["\n      query tokens {\n        now: ", "\n        oneDayAgo: ", "\n        twoDaysAgo: ", "\n        oneWeekAgo: ", "\n        twoWeeksAgo: ", "\n      }\n    "])), Ze(null, a), Ze(t, a), Ze(n, a), Ze(r, a), Ze(c, a)), e.next = 4, Object(p.request)(f.f, o);
                                case 4:
                                    return i = e.sent, e.abrupt("return", { data: i, error: !1 });
                                case 8:
                                    return e.prev = 8, e.t0 = e.catch(0), console.error("Failed to fetch token data", e.t0), e.abrupt("return", { erro: !0 });
                                case 12:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 8]
                        ])
                    })));
                    return function(t, n, r, c, a) { return e.apply(this, arguments) }
                }(),
                tt = function(e) {
                    return e ? e.reduce((function(e, t) {
                        var n = t.derivedBNB,
                            r = t.derivedUSD,
                            c = t.tradeVolumeUSD,
                            a = t.totalTransactions,
                            o = t.totalLiquidity;
                        return e[t.id] = Object(w.a)(Object(w.a)({}, t), {}, { derivedBNB: parseFloat(n), derivedUSD: parseFloat(r), tradeVolumeUSD: parseFloat(c), totalTransactions: parseFloat(a), totalLiquidity: parseFloat(o) }), e
                    }), {}) : {}
                },
                nt = function(e) {
                    var t = Object(o.useState)({ error: !1 }),
                        n = Object(b.a)(t, 2),
                        r = n[0],
                        c = n[1],
                        a = A(),
                        i = Object(b.a)(a, 4),
                        s = i[0],
                        l = i[1],
                        j = i[2],
                        p = i[3],
                        f = $([s, l, j, p]),
                        x = f.blocks,
                        m = f.error,
                        O = null !== x && void 0 !== x ? x : [],
                        h = Object(b.a)(O, 4),
                        v = h[0],
                        k = h[1],
                        S = h[2],
                        w = h[3],
                        C = function() {
                            var e = Object(o.useState)(),
                                t = Object(b.a)(e, 2),
                                n = t[0],
                                r = t[1],
                                c = Object(o.useState)(!1),
                                a = Object(b.a)(c, 2),
                                i = a[0],
                                s = a[1],
                                l = A(),
                                j = Object(b.a)(l, 3),
                                p = j[0],
                                f = j[1],
                                x = j[2],
                                m = $([p, f, x]),
                                O = m.blocks,
                                h = m.error;
                            return Object(o.useEffect)((function() {
                                n || i || !O || h || function() {
                                    var e = Object(d.a)(u.a.mark((function e() {
                                        var t, n, c, a, o, i;
                                        return u.a.wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    return t = Object(b.a)(O, 3), n = t[0], c = t[1], a = t[2], e.next = 3, Je(n.number, c.number, a.number);
                                                case 3:
                                                    o = e.sent, i = o.bnbPrices, o.error ? s(!0) : r(i);
                                                case 7:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e)
                                    })));
                                    return function() { return e.apply(this, arguments) }
                                }()()
                            }), [i, n, O, h]), n
                        }();
                    return Object(o.useEffect)((function() {
                        var t = function() {
                                var t = Object(d.a)(u.a.mark((function t() {
                                    var n, r, a, o, i, s, l, d, j;
                                    return u.a.wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return t.next = 2, et(v.number, k.number, S.number, w.number, e);
                                            case 2:
                                                n = t.sent, r = n.error, a = n.data, r ? c({ error: !0 }) : (o = tt(null === a || void 0 === a ? void 0 : a.now), i = tt(null === a || void 0 === a ? void 0 : a.oneDayAgo), s = tt(null === a || void 0 === a ? void 0 : a.twoDaysAgo), l = tt(null === a || void 0 === a ? void 0 : a.oneWeekAgo), d = tt(null === a || void 0 === a ? void 0 : a.twoWeeksAgo), j = e.reduce((function(e, t) {
                                                    var n = o[t],
                                                        r = i[t],
                                                        c = s[t],
                                                        a = l[t],
                                                        u = d[t],
                                                        j = D(null === n || void 0 === n ? void 0 : n.tradeVolumeUSD, null === r || void 0 === r ? void 0 : r.tradeVolumeUSD, null === c || void 0 === c ? void 0 : c.tradeVolumeUSD),
                                                        p = Object(b.a)(j, 2),
                                                        f = p[0],
                                                        x = p[1],
                                                        m = D(null === n || void 0 === n ? void 0 : n.tradeVolumeUSD, null === a || void 0 === a ? void 0 : a.tradeVolumeUSD, null === u || void 0 === u ? void 0 : u.tradeVolumeUSD),
                                                        O = Object(b.a)(m, 1)[0],
                                                        h = n ? n.totalLiquidity * n.derivedUSD : 0,
                                                        v = r ? r.totalLiquidity * r.derivedUSD : 0,
                                                        k = g(h, v),
                                                        S = n ? n.totalLiquidity : 0,
                                                        w = n ? n.derivedBNB * C.current : 0,
                                                        U = r ? r.derivedBNB * C.oneDay : 0,
                                                        T = a ? a.derivedBNB * C.week : 0,
                                                        Q = g(w, U),
                                                        F = g(w, T),
                                                        A = y(null === n || void 0 === n ? void 0 : n.totalTransactions, null === r || void 0 === r ? void 0 : r.totalTransactions);
                                                    return e[t] = { exists: !!n, address: t, name: n ? n.name : "", symbol: n ? n.symbol : "", volumeUSD: f, volumeUSDChange: x, volumeUSDWeek: O, txCount: A, liquidityUSD: h, liquidityUSDChange: k, liquidityToken: S, priceUSD: w, priceUSDChange: Q, priceUSDChangeWeek: F }, e
                                                }), {}), c({ data: j, error: !1 }));
                                            case 6:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t)
                                })));
                                return function() { return t.apply(this, arguments) }
                            }(),
                            n = (null === v || void 0 === v ? void 0 : v.number) && (null === k || void 0 === k ? void 0 : k.number) && (null === S || void 0 === S ? void 0 : S.number) && (null === w || void 0 === w ? void 0 : w.number);
                        e.length > 0 && n && !m && C && t()
                    }), [e, v, k, S, w, m, C]), r
                },
                rt = function() {
                    var e = Object(d.a)(u.a.mark((function e(t) {
                        var n, r;
                        return u.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, n = Object(p.gql)(_ || (_ = Object(j.a)(["\n      query topTokens($blacklist: [String!], $timestamp24hAgo: Int) {\n        tokenDayDatas(\n          first: 30\n          where: { dailyTxns_gt: 300, id_not_in: $blacklist, date_gt: $timestamp24hAgo }\n          orderBy: dailyVolumeUSD\n          orderDirection: desc\n        ) {\n          id\n        }\n      }\n    "]))), e.next = 4, Object(p.request)(f.f, n, { blacklist: k, timestamp24hAgo: t });
                                case 4:
                                    return r = e.sent, e.abrupt("return", r.tokenDayDatas.map((function(e) { return e.id.split("-")[0] })));
                                case 8:
                                    return e.prev = 8, e.t0 = e.catch(0), console.error("Failed to fetch top tokens", e.t0), e.abrupt("return", []);
                                case 12:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 8]
                        ])
                    })));
                    return function(t) { return e.apply(this, arguments) }
                }(),
                ct = function() {
                    var e = Object(o.useState)([]),
                        t = Object(b.a)(e, 2),
                        n = t[0],
                        r = t[1],
                        c = A(),
                        a = Object(b.a)(c, 1)[0];
                    return Object(o.useEffect)((function() {
                        var e = function() {
                            var e = Object(d.a)(u.a.mark((function e() {
                                var t;
                                return u.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, rt(a);
                                        case 2:
                                            t = e.sent, r(t);
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() { return e.apply(this, arguments) }
                        }();
                        0 === n.length && e()
                    }), [n, a]), n
                },
                at = n(22),
                ot = n(1242),
                it = n(1243),
                st = n(37),
                lt = function() {
                    var e = Object(d.a)(u.a.mark((function e(t, n) {
                        var r, c, a, o;
                        return u.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, r = Object(p.gql)(Y || (Y = Object(j.a)(["\n      query pairDayDatas($startTime: Int!, $skip: Int!, $address: Bytes!) {\n        pairDayDatas(\n          first: 1000\n          skip: $skip\n          where: { pairAddress: $address, date_gt: $startTime }\n          orderBy: date\n          orderDirection: asc\n        ) {\n          date\n          dailyVolumeUSD\n          reserveUSD\n        }\n      }\n    "]))), e.next = 4, Object(p.request)(f.f, r, { startTime: O, skip: t, address: n });
                                case 4:
                                    return c = e.sent, a = c.pairDayDatas, o = a.map($e), e.abrupt("return", { data: o, error: !1 });
                                case 10:
                                    return e.prev = 10, e.t0 = e.catch(0), console.error("Failed to fetch pool chart data", e.t0), e.abrupt("return", { error: !0 });
                                case 14:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 10]
                        ])
                    })));
                    return function(t, n) { return e.apply(this, arguments) }
                }(),
                ut = function() {
                    var e = Object(d.a)(u.a.mark((function e(t) {
                        return u.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", Be(lt, t));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) { return e.apply(this, arguments) }
                }(),
                dt = ut,
                bt = Object(p.gql)(K || (K = Object(j.a)(["\n  query poolTransactions($address: Bytes!) {\n    mints(first: 35, orderBy: timestamp, orderDirection: desc, where: { pair: $address }) {\n      id\n      timestamp\n      pair {\n        token0 {\n          id\n          symbol\n        }\n        token1 {\n          id\n          symbol\n        }\n      }\n      to\n      amount0\n      amount1\n      amountUSD\n    }\n    swaps(first: 35, orderBy: timestamp, orderDirection: desc, where: { pair: $address }) {\n      id\n      timestamp\n      pair {\n        token0 {\n          id\n          symbol\n        }\n        token1 {\n          id\n          symbol\n        }\n      }\n      from\n      amount0In\n      amount1In\n      amount0Out\n      amount1Out\n      amountUSD\n    }\n    burns(first: 35, orderBy: timestamp, orderDirection: desc, where: { pair: $address }) {\n      id\n      timestamp\n      pair {\n        token0 {\n          id\n          symbol\n        }\n        token1 {\n          id\n          symbol\n        }\n      }\n      sender\n      amount0\n      amount1\n      amountUSD\n    }\n  }\n"]))),
                jt = function() {
                    var e = Object(d.a)(u.a.mark((function e(t) {
                        var n, r, c, a;
                        return u.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, Object(p.request)(f.f, bt, { address: t });
                                case 3:
                                    return n = e.sent, r = n.mints.map(Ae), c = n.burns.map(qe), a = n.swaps.map(Le), e.abrupt("return", { data: [].concat(Object(Pe.a)(r), Object(Pe.a)(c), Object(Pe.a)(a)), error: !1 });
                                case 10:
                                    return e.prev = 10, e.t0 = e.catch(0), console.error("Failed to fetch transactions for pool ".concat(t), e.t0), e.abrupt("return", { error: !0 });
                                case 14:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 10]
                        ])
                    })));
                    return function(t) { return e.apply(this, arguments) }
                }(),
                pt = jt,
                ft = function() {
                    var e = Object(d.a)(u.a.mark((function e(t, n) {
                        var r, c, a, o;
                        return u.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, r = Object(p.gql)(G || (G = Object(j.a)(["\n      query tokenDayDatas($startTime: Int!, $skip: Int!, $address: Bytes!) {\n        tokenDayDatas(\n          first: 1000\n          skip: $skip\n          where: { token: $address, date_gt: $startTime }\n          orderBy: date\n          orderDirection: asc\n        ) {\n          date\n          dailyVolumeUSD\n          totalLiquidityUSD\n        }\n      }\n    "]))), e.next = 4, Object(p.request)(f.f, r, { startTime: O, skip: t, address: n });
                                case 4:
                                    return c = e.sent, a = c.tokenDayDatas, o = a.map(ze), e.abrupt("return", { data: o, error: !1 });
                                case 10:
                                    return e.prev = 10, e.t0 = e.catch(0), console.error("Failed to fetch token chart data", e.t0), e.abrupt("return", { error: !0 });
                                case 14:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 10]
                        ])
                    })));
                    return function(t, n) { return e.apply(this, arguments) }
                }(),
                xt = function() {
                    var e = Object(d.a)(u.a.mark((function e(t) {
                        return u.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", Be(ft, t));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) { return e.apply(this, arguments) }
                }(),
                mt = xt,
                Ot = Object(p.gql)(X || (X = Object(j.a)(["\n  query tokenTransactions($address: Bytes!) {\n    mintsAs0: mints(first: 10, orderBy: timestamp, orderDirection: desc, where: { token0: $address }) {\n      id\n      timestamp\n      pair {\n        token0 {\n          id\n          symbol\n        }\n        token1 {\n          id\n          symbol\n        }\n      }\n      to\n      amount0\n      amount1\n      amountUSD\n    }\n    mintsAs1: mints(first: 10, orderBy: timestamp, orderDirection: desc, where: { token0: $address }) {\n      id\n      timestamp\n      pair {\n        token0 {\n          id\n          symbol\n        }\n        token1 {\n          id\n          symbol\n        }\n      }\n      to\n      amount0\n      amount1\n      amountUSD\n    }\n    swapsAs0: swaps(first: 10, orderBy: timestamp, orderDirection: desc, where: { token0: $address }) {\n      id\n      timestamp\n      pair {\n        token0 {\n          id\n          symbol\n        }\n        token1 {\n          id\n          symbol\n        }\n      }\n      from\n      amount0In\n      amount1In\n      amount0Out\n      amount1Out\n      amountUSD\n    }\n    swapsAs1: swaps(first: 10, orderBy: timestamp, orderDirection: desc, where: { token1: $address }) {\n      id\n      timestamp\n      pair {\n        token0 {\n          id\n          symbol\n        }\n        token1 {\n          id\n          symbol\n        }\n      }\n      from\n      amount0In\n      amount1In\n      amount0Out\n      amount1Out\n      amountUSD\n    }\n    burnsAs0: burns(first: 10, orderBy: timestamp, orderDirection: desc, where: { token0: $address }) {\n      id\n      timestamp\n      pair {\n        token0 {\n          id\n          symbol\n        }\n        token1 {\n          id\n          symbol\n        }\n      }\n      sender\n      amount0\n      amount1\n      amountUSD\n    }\n    burnsAs1: burns(first: 10, orderBy: timestamp, orderDirection: desc, where: { token1: $address }) {\n      id\n      timestamp\n      pair {\n        token0 {\n          id\n          symbol\n        }\n        token1 {\n          id\n          symbol\n        }\n      }\n      sender\n      amount0\n      amount1\n      amountUSD\n    }\n  }\n"]))),
                ht = function() {
                    var e = Object(d.a)(u.a.mark((function e(t) {
                        var n, r, c, a, o, i, s;
                        return u.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, Object(p.request)(f.f, Ot, { address: t });
                                case 3:
                                    return n = e.sent, r = n.mintsAs0.map(Ae), c = n.mintsAs1.map(Ae), a = n.burnsAs0.map(qe), o = n.burnsAs1.map(qe), i = n.swapsAs0.map(Le), s = n.swapsAs1.map(Le), e.abrupt("return", { data: [].concat(Object(Pe.a)(r), Object(Pe.a)(c), Object(Pe.a)(a), Object(Pe.a)(o), Object(Pe.a)(i), Object(Pe.a)(s)), error: !1 });
                                case 13:
                                    return e.prev = 13, e.t0 = e.catch(0), console.error("Failed to fetch transactions for token ".concat(t), e.t0), e.abrupt("return", { error: !0 });
                                case 17:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 13]
                        ])
                    })));
                    return function(t) { return e.apply(this, arguments) }
                }(),
                vt = function(e, t) { return t.map((function(t) { return "\n      t".concat(t.timestamp, ':token(id:"').concat(e, '", block: { number: ').concat(t.number, " }) { \n        derivedBNB\n      }\n      b").concat(t.timestamp, ': bundle(id:"1", block: { number: ').concat(t.number, " }) { \n        bnbPrice\n      }\n    ") })) },
                kt = function(e) { return Object(p.gql)(J || (J = Object(j.a)(["\n    query tokenPriceData {\n      ", "\n    }\n  "])), e) },
                yt = function() {
                    var e = Object(d.a)(u.a.mark((function e(t, n, r) {
                        var c, a, o, i, s, l, d, b;
                        return u.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    for (c = Object(C.a)(new Date), a = [], o = r; o <= c;) a.push(o), o += n;
                                    return e.prev = 4, e.next = 7, z(a, "asc", 500);
                                case 7:
                                    if ((i = e.sent) && 0 !== i.length) { e.next = 11; break }
                                    return console.error("Error fetching blocks for timestamps", a), e.abrupt("return", { error: !1 });
                                case 11:
                                    return e.next = 13, F(kt, vt(t, i), f.f, 200);
                                case 13:
                                    if (s = e.sent) { e.next = 17; break }
                                    return console.error("Price data failed to load"), e.abrupt("return", { error: !1 });
                                case 17:
                                    for (l = [], Object.keys(s).forEach((function(e) {
                                            var t, n = e.split("t")[1];
                                            n && l.push({ timestamp: n, derivedBNB: (null === (t = s[e]) || void 0 === t ? void 0 : t.derivedBNB) ? parseFloat(s[e].derivedBNB) : 0, priceUSD: 0 })
                                        })), Object.keys(s).forEach((function(e) {
                                            var t = e.split("b")[1];
                                            if (t) {
                                                var n = l.findIndex((function(e) { return e.timestamp === t }));
                                                if (n >= 0) {
                                                    var r, c, a = l[n].derivedBNB;
                                                    l[n].priceUSD = parseFloat(null !== (r = null === (c = s[e]) || void 0 === c ? void 0 : c.bnbPrice) && void 0 !== r ? r : 0) * a
                                                }
                                            }
                                        })), l.sort((function(e, t) { return parseInt(e.timestamp, 10) - parseInt(t.timestamp, 10) })), d = [], b = 0; b < l.length - 1; b++) d.push({ time: parseFloat(l[b].timestamp), open: l[b].priceUSD, close: l[b + 1].priceUSD, high: l[b + 1].priceUSD, low: l[b].priceUSD });
                                    return e.abrupt("return", { data: d, error: !1 });
                                case 26:
                                    return e.prev = 26, e.t0 = e.catch(4), console.error("Failed to fetch price data for token ".concat(t), e.t0), e.abrupt("return", { error: !0 });
                                case 30:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [4, 26]
                        ])
                    })));
                    return function(t, n, r) { return e.apply(this, arguments) }
                }(),
                gt = Object(p.gql)(Z || (Z = Object(j.a)(["\n  query poolsForToken($address: Bytes!, $blacklist: [String!]) {\n    asToken0: pairs(\n      first: 15\n      orderBy: trackedReserveBNB\n      orderDirection: desc\n      where: { totalTransactions_gt: 100, token0: $address, token1_not_in: $blacklist }\n    ) {\n      id\n    }\n    asToken1: pairs(\n      first: 15\n      orderBy: trackedReserveBNB\n      orderDirection: desc\n      where: { totalTransactions_gt: 100, token1: $address, token0_not_in: $blacklist }\n    ) {\n      id\n    }\n  }\n"]))),
                Dt = function() {
                    var e = Object(d.a)(u.a.mark((function e(t) {
                        var n;
                        return u.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, Object(p.request)(f.f, gt, { address: t, blacklist: k });
                                case 3:
                                    return n = e.sent, e.abrupt("return", { error: !1, addresses: n.asToken0.concat(n.asToken1).map((function(e) { return e.id })) });
                                case 7:
                                    return e.prev = 7, e.t0 = e.catch(0), console.error("Failed to fetch pools for token ".concat(t), e.t0), e.abrupt("return", { error: !0 });
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 7]
                        ])
                    })));
                    return function(t) { return e.apply(this, arguments) }
                }(),
                St = n(112),
                wt = function() {
                    var e = Object(at.c)((function(e) { return e.info.protocol.overview })),
                        t = Object(at.b)();
                    return [e, Object(o.useCallback)((function(e) { return t(Object(St.h)({ protocolData: e })) }), [t])]
                },
                Ct = function() {
                    var e = Object(at.c)((function(e) { return e.info.protocol.chartData })),
                        t = Object(at.b)();
                    return [e, Object(o.useCallback)((function(e) { return t(Object(St.g)({ chartData: e })) }), [t])]
                },
                Ut = function() {
                    var e = Object(at.c)((function(e) { return e.info.protocol.transactions })),
                        t = Object(at.b)();
                    return [e, Object(o.useCallback)((function(e) { return t(Object(St.i)({ transactions: e })) }), [t])]
                },
                Tt = function() { return Object(at.c)((function(e) { return e.info.pools.byAddress })) },
                Qt = function() { var e = Object(at.b)(); return Object(o.useCallback)((function(t) { return e(Object(St.a)({ poolAddresses: t })) }), [e]) },
                Ft = function(e) {
                    var t = Tt(),
                        n = Qt(),
                        r = e.reduce((function(e, n) { return Object.keys(t).includes(n) || e.push(n), e }), []);
                    return Object(o.useEffect)((function() { r && n(r) }), [n, r]), e.map((function(e) { var n; return null === (n = t[e]) || void 0 === n ? void 0 : n.data })).filter((function(e) { return e }))
                },
                At = function() { return Object(at.c)((function(e) { return e.info.tokens.byAddress })) },
                qt = function() { var e = Object(at.b)(); return Object(o.useCallback)((function(t) { return e(Object(St.b)({ tokenAddresses: t })) }), [e]) },
                Lt = function(e) {
                    var t = At(),
                        n = qt();
                    return null === e || void 0 === e || e.forEach((function(e) { t[e] || n([e]) })), Object(o.useMemo)((function() { if (e) return e.map((function(e) { var n; return null === (n = t[e]) || void 0 === n ? void 0 : n.data })).filter((function(e) { return e })) }), [e, t])
                },
                zt = function() {
                    var e = wt(),
                        t = Object(b.a)(e, 2),
                        n = t[0],
                        r = t[1],
                        c = I(),
                        a = c.data,
                        i = c.error,
                        s = Ct(),
                        l = Object(b.a)(s, 2),
                        j = l[0],
                        p = l[1],
                        f = Me(),
                        x = f.data,
                        m = f.error,
                        O = Ut(),
                        h = Object(b.a)(O, 2),
                        v = h[0],
                        k = h[1];
                    return Object(o.useEffect)((function() { void 0 === n && a && !i && r(a) }), [i, a, n, r]), Object(o.useEffect)((function() { void 0 === j && x && !m && p(x) }), [j, m, x, p]), Object(o.useEffect)((function() {
                        v || function() {
                            var e = Object(d.a)(u.a.mark((function e() {
                                var t;
                                return u.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, Ve();
                                        case 2:
                                            (t = e.sent) && k(t);
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() { return e.apply(this, arguments) }
                        }()()
                    }), [v, k]), null
                },
                $t = function() {
                    var e = function() { var e = Object(at.b)(); return Object(o.useCallback)((function(t) { return e(Object(St.e)({ pools: t })) }), [e]) }(),
                        t = Qt(),
                        n = Tt(),
                        r = He();
                    Object(o.useEffect)((function() { r.length > 0 && t(r) }), [t, r]);
                    var c = Object(o.useMemo)((function() { return Object.keys(n).reduce((function(e, t) { return n[t].data || e.push(t), e }), []) }), [n]),
                        a = Ge(c),
                        i = a.error,
                        s = a.data;
                    return Object(o.useEffect)((function() { s && !i && e(Object.values(s)) }), [i, s, e]), null
                },
                Bt = function() {
                    var e = function() { var e = Object(at.b)(); return Object(o.useCallback)((function(t) { e(Object(St.k)({ tokens: t })) }), [e]) }(),
                        t = qt(),
                        n = At(),
                        r = ct();
                    Object(o.useEffect)((function() { r.length > 0 && t(r) }), [t, r]);
                    var c = Object(o.useMemo)((function() { return Object.keys(n).reduce((function(e, t) { return n[t].data || e.push(t), e }), []) }), [n]),
                        a = nt(c),
                        i = a.error,
                        s = a.data;
                    return Object(o.useEffect)((function() { s && !i && e(Object.values(s)) }), [i, s, e]), null
                },
                Nt = n(5),
                It = n(83),
                Mt = n(2),
                Pt = n(13),
                Rt = Object(p.gql)(ee || (ee = Object(j.a)(["\n  query tokens($symbol: String, $name: String, $id: String) {\n    asSymbol: tokens(first: 10, where: { symbol_contains: $symbol }, orderBy: tradeVolumeUSD, orderDirection: desc) {\n      id\n    }\n    asName: tokens(first: 10, where: { name_contains: $name }, orderBy: tradeVolumeUSD, orderDirection: desc) {\n      id\n    }\n    asAddress: tokens(first: 1, where: { id: $id }, orderBy: tradeVolumeUSD, orderDirection: desc) {\n      id\n    }\n  }\n"]))),
                Et = Object(p.gql)(te || (te = Object(j.a)(["\n  query pools($tokens: [Bytes]!, $id: String) {\n    as0: pairs(first: 10, where: { token0_in: $tokens }) {\n      id\n    }\n    as1: pairs(first: 10, where: { token1_in: $tokens }) {\n      id\n    }\n    asAddress: pairs(first: 1, where: { id: $id }) {\n      id\n    }\n  }\n"]))),
                Vt = function(e) { var t = e.reduce((function(e, t) { return [].concat(Object(Pe.a)(e), Object(Pe.a)(t)) }), []).map((function(e) { return e.id })); return Array.from(new Set(t)) },
                Wt = function(e) {
                    var t = Object(o.useState)({ tokens: [], pools: [], loading: !1, error: !1 }),
                        n = Object(b.a)(t, 2),
                        r = n[0],
                        c = n[1],
                        a = e.length < 2;
                    Object(o.useEffect)((function() { c({ tokens: [], pools: [], loading: !a, error: !1 }) }), [e, a]), Object(o.useEffect)((function() {
                        a || function() {
                            var t = Object(d.a)(u.a.mark((function t() {
                                var n, r, a;
                                return u.a.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, t.next = 3, Object(p.request)(f.f, Rt, { symbol: e.toUpperCase(), name: e.charAt(0).toUpperCase() + e.slice(1), id: e.toLowerCase() });
                                        case 3:
                                            return n = t.sent, r = Vt([n.asAddress, n.asSymbol, n.asName]), t.next = 7, Object(p.request)(f.f, Et, { tokens: r, id: e.toLowerCase() });
                                        case 7:
                                            a = t.sent, c({ tokens: r, pools: Vt([a.asAddress, a.as0, a.as1]), loading: !1, error: !1 }), t.next = 15;
                                            break;
                                        case 11:
                                            t.prev = 11, t.t0 = t.catch(0), console.error("Search failed for ".concat(e), t.t0), c({ tokens: [], pools: [], loading: !1, error: !0 });
                                        case 15:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, null, [
                                    [0, 11]
                                ])
                            })));
                            return function() { return t.apply(this, arguments) }
                        }()()
                    }), [e, a]);
                    var i = Lt(r.tokens),
                        s = Ft(r.pools);
                    return { tokens: i, pools: s, tokensLoading: i.length !== r.tokens.length || r.loading, poolsLoading: s.length !== r.pools.length || r.loading, error: r.error }
                },
                Ht = n(51),
                _t = n(0),
                Yt = ["src", "alt"],
                Kt = [],
                Gt = function(e) {
                    var t = e.src,
                        n = e.alt,
                        r = Object(Ht.a)(e, Yt),
                        c = Object(o.useState)(0),
                        a = Object(b.a)(c, 2)[1],
                        i = Kt.includes(t);
                    return t && !i ? Object(_t.jsx)("img", Object(w.a)(Object(w.a)({}, r), {}, { alt: n, src: t, onError: function() { t && Kt.push(t), a((function(e) { return e + 1 })) } })) : Object(_t.jsx)(Mt.U, Object(w.a)({}, r))
                },
                Xt = ["address", "size"],
                Jt = Object(Nt.e)(Gt)(ne || (ne = Object(j.a)(["\n  width: ", ";\n  height: ", ";\n  border-radius: ", ";\n  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.075);\n  background-color: ", ";\n  color: ", ";\n"])), (function(e) { return e.size }), (function(e) { return e.size }), (function(e) { return e.size }), (function(e) { return e.theme.colors.background }), (function(e) { return e.theme.colors.text })),
                Zt = function(e) {
                    var t = e.address,
                        n = e.size,
                        r = void 0 === n ? "24px" : n,
                        c = Object(Ht.a)(e, Xt),
                        a = Object(o.useMemo)((function() { var e = Object(st.h)(t); return e ? "https://assets.trustwalletapp.com/blockchains/smartchain/assets/".concat(e, "/logo.png") : null }), [t]);
                    return Object(_t.jsx)(Jt, Object(w.a)({ size: r, src: a, alt: "token logo" }, c))
                },
                en = Nt.e.div(re || (re = Object(j.a)(["\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  width: 32px;\n"]))),
                tn = function(e) {
                    var t = e.address0,
                        n = e.address1,
                        r = e.size,
                        c = void 0 === r ? 16 : r;
                    return Object(_t.jsxs)(en, { children: [t && Object(_t.jsx)(Zt, { address: t, size: "".concat(c.toString(), "px") }), n && Object(_t.jsx)(Zt, { address: n, size: "".concat(c.toString(), "px") })] })
                },
                nn = n(984),
                rn = n.n(nn),
                cn = function(e, t) {
                    var n = t || { notation: "compact" },
                        r = n.notation,
                        c = void 0 === r ? "compact" : r,
                        a = n.displayThreshold,
                        o = n.tokenPrecision,
                        i = n.isInteger;
                    if (0 === e) return i ? "0" : "0.00";
                    if (!e) return "-";
                    if (a && e < a) return "<".concat(a);
                    if (e < 1 && !o) return e.toFixed(9).match(/^-?\d*\.?0*\d{0,2}/)[0];
                    var s = 2;
                    o && (s = e < 1 ? 3 : 2);
                    var l = "0.".concat("0".repeat(s), "a");
                    "standard" === c && (l = "0,0.".concat("0".repeat(s))), i && e < 1e3 && (l = "0");
                    var u = parseFloat(e.toFixed(s));
                    return rn()(u).format(l).toUpperCase()
                },
                an = n(46),
                on = n(90),
                sn = ["fill"],
                ln = Nt.e.div(ce || (ce = Object(j.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  :hover {\n    cursor: pointer;\n    opacity: 0.6;\n  }\n"]))),
                un = function(e) {
                    var t = e.fill,
                        n = void 0 !== t && t,
                        r = Object(Ht.a)(e, sn),
                        c = Object(on.a)().theme;
                    return Object(_t.jsx)(ln, Object(w.a)(Object(w.a)({}, r), {}, { children: n ? Object(_t.jsx)(Mt.Gb, { stroke: c.colors.warning, color: c.colors.warning }) : Object(_t.jsx)(Mt.Hb, { stroke: c.colors.textDisabled }) }))
                },
                dn = n(160),
                bn = Nt.e.div(ae || (ae = Object(j.a)(["\n  position: relative;\n  z-index: 30;\n  width: 100%;\n"]))),
                jn = Object(Nt.e)(Mt.Y)(oe || (oe = Object(j.a)(["\n  z-index: 9999;\n  border: 1px solid ", ";\n"])), (function(e) { return e.theme.colors.inputSecondary })),
                pn = Nt.e.div(ie || (ie = Object(j.a)(["\n  display: flex;\n  flex-direction: column;\n  z-index: 9999;\n  width: 100%;\n  top: 50px;\n  max-height: 400px;\n  overflow: auto;\n  right: 0;\n  padding: 1.5rem;\n  padding-bottom: 2.5rem;\n  position: absolute;\n  background: ", ";\n  border-radius: 8px;\n  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.04), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04),\n    0px 24px 32px rgba(0, 0, 0, 0.04);\n  display: ", ";\n  border: 1px solid ", ";\n  margin-top: 4px;\n  ", " {\n    margin-top: 0;\n    width: 500px;\n    max-height: 600px;\n  }\n  ", " {\n    margin-top: 0;\n    width: 800px;\n    max-height: 600px;\n  }\n"])), (function(e) { return e.theme.colors.background }), (function(e) { return e.hide && "none" }), (function(e) { return e.theme.colors.secondary }), (function(e) { return e.theme.mediaQueries.sm }), (function(e) { return e.theme.mediaQueries.md })),
                fn = Nt.e.div(se || (se = Object(j.a)(["\n  position: absolute;\n  min-height: 100vh;\n  width: 100vw;\n  z-index: 10;\n  background-color: black;\n  opacity: 0.7;\n  left: 0;\n  top: 0;\n"]))),
                xn = Nt.e.div(le || (le = Object(j.a)(["\n  display: grid;\n  grid-gap: 1em;\n  grid-template-columns: 1fr;\n  margin: 8px 0;\n  align-items: center;\n  ", " {\n    grid-template-columns: 1.5fr repeat(3, 1fr);\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm })),
                mn = Nt.e.div(ue || (ue = Object(j.a)(["\n  height: 1px;\n  background-color: ", ";\n  width: 100%;\n  margin: 16px 0;\n"])), (function(e) { return e.theme.colors.cardBorder })),
                On = Nt.e.div(de || (de = Object(j.a)(["\n  color: ", ";\n  display: ", ";\n  margin-top: 16px;\n  :hover {\n    cursor: pointer;\n    opacity: 0.6;\n  }\n"])), (function(e) { return e.theme.colors.secondary }), (function(e) { return e.hide ? "none" : "block" })),
                hn = Nt.e.div(be || (be = Object(j.a)(["\n  :hover {\n    cursor: pointer;\n    opacity: 0.6;\n  }\n"]))),
                vn = Nt.e.div(je || (je = Object(j.a)(["\n  width: fit-content;\n  padding: 4px 8px;\n  border-radius: 8px;\n  display: flex;\n  font-size: 12px;\n  font-weight: 600;\n  margin-right: 10px;\n  justify-content: center;\n  align-items: center;\n  background-color: ", ";\n  color: ", ";\n  :hover {\n    opacity: 0.6;\n    cursor: pointer;\n  }\n"])), (function(e) { var t = e.theme; return e.enabled ? t.colors.primary : "transparent" }), (function(e) { var t = e.theme; return e.enabled ? t.card.background : t.colors.secondary })),
                kn = function(e, t) { return e.address.toLowerCase().includes(t.toLowerCase()) || e.symbol.toLowerCase().includes(t.toLowerCase()) || e.name.toLowerCase().includes(t.toLowerCase()) },
                yn = function() {
                    var e = Object(s.g)(),
                        t = Object(Mt.jc)(),
                        n = t.isXs,
                        r = t.isSm,
                        c = Object(Pt.b)().t,
                        a = Object(o.useRef)(null),
                        i = Object(o.useRef)(null),
                        l = Object(o.useRef)(null),
                        u = Object(o.useState)(!1),
                        d = Object(b.a)(u, 2),
                        j = d[0],
                        p = d[1],
                        f = Object(o.useState)(""),
                        x = Object(b.a)(f, 2),
                        m = x[0],
                        O = x[1],
                        h = Object(dn.a)(m, 600),
                        v = Wt(h),
                        k = v.tokens,
                        y = v.pools,
                        g = v.tokensLoading,
                        D = v.poolsLoading,
                        S = v.error,
                        w = Object(o.useState)(3),
                        C = Object(b.a)(w, 2),
                        U = C[0],
                        T = C[1],
                        Q = Object(o.useState)(3),
                        F = Object(b.a)(Q, 2),
                        A = F[0],
                        q = F[1];
                    Object(o.useEffect)((function() { T(3), q(3) }), [h]);
                    var L = function(e) {
                        var t = i.current && i.current.contains(e.target),
                            n = a.current && a.current.contains(e.target),
                            r = l.current && l.current.contains(e.target);
                        t || n || r || (q(3), T(3), p(!1))
                    };
                    Object(o.useEffect)((function() { j ? (document.addEventListener("click", L), document.querySelector("body").style.overflow = "hidden") : (document.removeEventListener("click", L), document.querySelector("body").style.overflow = "visible") }), [j]);
                    var z = Object(an.v)(),
                        $ = Object(b.a)(z, 2),
                        B = $[0],
                        N = $[1],
                        I = Object(an.u)(),
                        M = Object(b.a)(I, 2),
                        P = M[0],
                        R = M[1],
                        E = function(t) { p(!1), q(3), T(3), e.push(t) },
                        V = Lt(B),
                        W = V.length !== B.length,
                        H = Ft(P),
                        _ = H.length !== P.length,
                        Y = Object(o.useState)(!1),
                        K = Object(b.a)(Y, 2),
                        G = K[0],
                        X = K[1],
                        J = Object(o.useMemo)((function() { return G ? V.filter((function(e) { return kn(e, m) })) : k.sort((function(e, t) { return e.volumeUSD > t.volumeUSD ? -1 : 1 })) }), [G, k, V, m]),
                        Z = Object(o.useMemo)((function() { return G ? H.filter((function(e) { return function(e, t) { return e.address.toLowerCase().includes(t.toLowerCase()) || kn(e.token0, t) || kn(e.token1, t) }(e, m) })) : y.sort((function(e, t) { return e.volumeUSD > t.volumeUSD ? -1 : 1 })) }), [y, G, H, m]);
                    return Object(_t.jsxs)(_t.Fragment, {
                        children: [j ? Object(_t.jsx)(fn, {}) : null, Object(_t.jsxs)(bn, {
                            children: [Object(_t.jsx)(jn, { type: "text", value: m, onChange: function(e) { O(e.target.value) }, placeholder: c("Search pools or tokens"), ref: a, onFocus: function() { p(!0) } }), Object(_t.jsxs)(pn, {
                                hide: !j,
                                ref: i,
                                children: [Object(_t.jsxs)(Mt.R, { mb: "16px", children: [Object(_t.jsx)(vn, { enabled: !G, onClick: function() { return X(!1) }, children: c("Search") }), Object(_t.jsx)(vn, { enabled: G, onClick: function() { return X(!0) }, children: c("Watchlist") })] }), S && Object(_t.jsx)(Mt.Qb, { color: "failure", children: c("Error occurred, please try again") }), Object(_t.jsxs)(xn, { children: [Object(_t.jsx)(Mt.Qb, { bold: !0, color: "secondary", children: c("Tokens") }), !n && !r && Object(_t.jsx)(Mt.Qb, { textAlign: "end", fontSize: "12px", children: c("Price") }), !n && !r && Object(_t.jsx)(Mt.Qb, { textAlign: "end", fontSize: "12px", children: c("Volume 24H") }), !n && !r && Object(_t.jsx)(Mt.Qb, { textAlign: "end", fontSize: "12px", children: c("Liquidity") })] }), J.slice(0, U).map((function(e, t) { return Object(_t.jsx)(hn, { onClick: function() { return E("/info/token/".concat(e.address)) }, children: Object(_t.jsxs)(xn, { children: [Object(_t.jsxs)(Mt.R, { children: [Object(_t.jsx)(Zt, { address: e.address }), Object(_t.jsx)(Mt.Qb, { ml: "10px", children: Object(_t.jsx)(Mt.Qb, { children: "".concat(e.name, " (").concat(e.symbol, ")") }) }), Object(_t.jsx)(un, { id: "watchlist-icon", style: { marginLeft: "8px" }, fill: B.includes(e.address), onClick: function(t) { t.stopPropagation(), N(e.address) } })] }), !n && !r && Object(_t.jsxs)(Mt.Qb, { textAlign: "end", children: ["$", cn(e.priceUSD)] }), !n && !r && Object(_t.jsxs)(Mt.Qb, { textAlign: "end", children: ["$", cn(e.volumeUSD)] }), !n && !r && Object(_t.jsxs)(Mt.Qb, { textAlign: "end", children: ["$", cn(e.liquidityUSD)] })] }) }, t) })), function() {
                                    var e = G ? W : g,
                                        t = 0 === J.length && !e && h.length >= 2,
                                        n = 0 === J.length && !e,
                                        r = G ? n : t,
                                        a = c(G ? "Saved tokens will appear here" : "No results");
                                    return Object(_t.jsxs)(_t.Fragment, { children: [e && Object(_t.jsx)(Mt.Db, {}), r && Object(_t.jsx)(Mt.Qb, { children: a }), !G && h.length < 2 && Object(_t.jsx)(Mt.Qb, { children: c("Search pools or tokens") })] })
                                }(), Object(_t.jsx)(On, { onClick: function() { T(U + 5) }, hide: J.length <= U, ref: l, children: c("See more...") }), Object(_t.jsx)(mn, {}), Object(_t.jsxs)(xn, { children: [Object(_t.jsx)(Mt.Qb, { bold: !0, color: "secondary", mb: "8px", children: c("Pools") }), !n && !r && Object(_t.jsx)(Mt.Qb, { textAlign: "end", fontSize: "12px", children: c("Volume 24H") }), !n && !r && Object(_t.jsx)(Mt.Qb, { textAlign: "end", fontSize: "12px", children: c("Volume 7D") }), !n && !r && Object(_t.jsx)(Mt.Qb, { textAlign: "end", fontSize: "12px", children: c("Liquidity") })] }), Z.slice(0, A).map((function(e, t) { return Object(_t.jsx)(hn, { onClick: function() { return E("/info/pool/".concat(e.address)) }, children: Object(_t.jsxs)(xn, { children: [Object(_t.jsxs)(Mt.R, { children: [Object(_t.jsx)(tn, { address0: e.token0.address, address1: e.token1.address }), Object(_t.jsx)(Mt.Qb, { ml: "10px", style: { whiteSpace: "nowrap" }, children: Object(_t.jsx)(Mt.Qb, { children: "".concat(e.token0.symbol, " / ").concat(e.token1.symbol) }) }), Object(_t.jsx)(un, { id: "watchlist-icon", style: { marginLeft: "10px" }, fill: P.includes(e.address), onClick: function(t) { t.stopPropagation(), R(e.address) } })] }), !n && !r && Object(_t.jsxs)(Mt.Qb, { textAlign: "end", children: ["$", cn(e.volumeUSD)] }), !n && !r && Object(_t.jsxs)(Mt.Qb, { textAlign: "end", children: ["$", cn(e.volumeUSDWeek)] }), !n && !r && Object(_t.jsxs)(Mt.Qb, { textAlign: "end", children: ["$", cn(e.liquidityUSD)] })] }) }, t) })), function() {
                                    var e = G ? _ : D,
                                        t = 0 === Z.length && !D && h.length >= 2,
                                        n = 0 === Z.length && !e,
                                        r = G ? n : t,
                                        a = c(G ? "Saved tokens will appear here" : "No results");
                                    return Object(_t.jsxs)(_t.Fragment, { children: [e && Object(_t.jsx)(Mt.Db, {}), r && Object(_t.jsx)(Mt.Qb, { children: a }), !G && h.length < 2 && Object(_t.jsx)(Mt.Qb, { children: c("Search pools or tokens") })] })
                                }(), Object(_t.jsx)(On, { onClick: function() { q(A + 5) }, hide: Z.length <= A, ref: l, children: c("See more...") })]
                            })]
                        })]
                    })
                },
                gn = Object(Nt.e)(Mt.R)(pe || (pe = Object(j.a)(["\n  background: ", ";\n  justify-content: space-between;\n  padding: 20px 16px;\n  flex-direction: column;\n  gap: 8px;\n  ", " {\n    padding: 20px 40px;\n    flex-direction: row;\n  }\n"])), (function(e) { return e.theme.colors.gradients.cardHeader }), (function(e) { return e.theme.mediaQueries.sm })),
                Dn = function() {
                    var e = Object(Pt.b)().t,
                        t = 0;
                    return Object(s.i)(["/info/pools", "/info/pool", "/info/pair"]) && (t = 1), Object(s.i)(["/info/tokens", "/info/token"]) && (t = 2), Object(_t.jsxs)(gn, { children: [Object(_t.jsx)(Mt.m, { children: Object(_t.jsxs)(Mt.q, { activeIndex: t, scale: "sm", variant: "subtle", children: [Object(_t.jsx)(Mt.r, { as: It.a, to: "/info", children: e("Overview") }), Object(_t.jsx)(Mt.r, { as: It.a, to: "/info/pools", children: e("Pools") }), Object(_t.jsx)(Mt.r, { as: It.a, to: "/info/tokens", children: e("Tokens") })] }) }), Object(_t.jsx)(Mt.m, { width: ["100%", "100%", "250px"], children: Object(_t.jsx)(yn, {}) })] })
                },
                Sn = n(760),
                wn = n(1251),
                Cn = n(185),
                Un = n(1244),
                Tn = n(1245),
                Qn = n(906),
                Fn = n(907),
                An = n(1235),
                qn = n(1041),
                Ln = function(e) { return Object(_t.jsxs)(Mt.Mb, Object(w.a)(Object(w.a)({ width: "100%", height: "100%", preserveAspectRatio: "none", viewBox: "0 0 100 50" }, e), {}, { children: [Object(_t.jsx)("path", { d: "M 0 49 C 1 49 1 45 4 47 C 7 49 7 35 11 37 C 13 38 14 32 16 34 C 18 35.6667 20 40 22 39 C 24 38 24 34 26 34 C 27 34 29 39 32 36 C 33 35 34 32 35 32 C 37 32 37 35 39 34 C 40 33 39 29 43 31 C 46 32 45 28 47 30 C 50 32 49 22 51 24 Q 53 26 55 24 C 56 23 56 25 57 26 C 58 27 59 28 60 28 C 63 28 66 17 67 16 C 68 15 69 17 70 16 C 71 15 71 13 74 13 C 76 13 76 14 77 15 C 79 17 80 18 82 18 C 83 18 83 17 84 17 C 87 17 89 24 91 24 C 93 24 95 20 96 17 C 97.6667 13.3333 98 9 101 6", stroke: "#7645D9", strokeWidth: "0.2", strokeDasharray: "156", strokeDashoffset: "156", fill: "transparent", opacity: "0.5", filter: "url(#glow)", children: Object(_t.jsx)("animate", { id: "firstline", attributeName: "stroke-dashoffset", dur: "2s", from: "156", to: "-156", begin: "0s;firstline.end+0.5s" }) }), Object(_t.jsx)("path", { d: "M 0 49 C 1 49 1 45 4 47 C 7 49 7 35 11 37 C 13 38 14 32 16 34 C 18 35.6667 20 40 22 39 C 24 38 24 34 26 34 C 27 34 29 39 32 36 C 33 35 34 32 35 32 C 37 32 37 35 39 34 C 40 33 39 29 43 31 C 46 32 45 28 47 30 C 50 32 49 22 51 24 Q 53 26 55 24 C 56 23 56 25 57 26 C 58 27 59 28 60 28 C 63 28 66 17 67 16 C 68 15 69 17 70 16 C 71 15 71 13 74 13 C 76 13 76 14 77 15 C 79 17 80 18 82 18 C 83 18 83 17 84 17 C 87 17 89 24 91 24 C 93 24 95 20 96 17 C 97.6667 13.3333 98 9 101 6", stroke: "#7645D9", strokeWidth: "0.2", strokeDasharray: "156", strokeDashoffset: "156", fill: "transparent", opacity: "0.5", filter: "url(#glow)", children: Object(_t.jsx)("animate", { id: "secondline", attributeName: "stroke-dashoffset", dur: "2s", from: "156", to: "-156", begin: "1.3s;secondline.end+0.5s" }) }), Object(_t.jsx)("defs", { children: Object(_t.jsxs)("filter", { id: "glow", children: [Object(_t.jsx)("feGaussianBlur", { className: "blur", result: "coloredBlur", stdDeviation: "4" }), Object(_t.jsxs)("feMerge", { children: [Object(_t.jsx)("feMergeNode", { in: "coloredBlur" }), Object(_t.jsx)("feMergeNode", { in: "coloredBlur" }), Object(_t.jsx)("feMergeNode", { in: "coloredBlur" }), Object(_t.jsx)("feMergeNode", { in: "SourceGraphic" })] })] }) })] })) },
                zn = function(e) { return Object(_t.jsxs)(Mt.Mb, Object(w.a)(Object(w.a)({ width: "100%", height: "100%", viewBox: "0 0 50 25", preserveAspectRatio: "none", opacity: "0.1" }, e), {}, { children: [Object(_t.jsxs)("rect", { width: "8%", fill: "#1FC7D4", children: [Object(_t.jsx)("animate", { attributeName: "height", dur: "0.9s", values: "15%; 90%; 15%", keyTimes: "0; 0.55; 1", repeatCount: "indefinite", begin: "-0.9s" }), Object(_t.jsx)("animate", { attributeName: "y", dur: "0.9s", values: "85%; 10%; 85%", keyTimes: "0; 0.55; 1", repeatCount: "indefinite", begin: "-0.9s" })] }), Object(_t.jsxs)("rect", { x: "10.222%", width: "8%", fill: "#1FC7D4", children: [Object(_t.jsx)("animate", { attributeName: "height", dur: "0.9s", values: "15%; 90%; 15%", keyTimes: "0; 0.55; 1", repeatCount: "indefinite", begin: "-0.8s" }), Object(_t.jsx)("animate", { attributeName: "y", dur: "0.9s", values: "85%; 10%; 85%", keyTimes: "0; 0.55; 1", repeatCount: "indefinite", begin: "-0.8s" })] }), Object(_t.jsxs)("rect", { x: "20.444%", width: "8%", fill: "#1FC7D4", children: [Object(_t.jsx)("animate", { attributeName: "height", dur: "0.9s", values: "15%; 90%; 15%", keyTimes: "0; 0.55; 1", repeatCount: "indefinite", begin: "-0.7s" }), Object(_t.jsx)("animate", { attributeName: "y", dur: "0.9s", values: "85%; 10%; 85%", keyTimes: "0; 0.55; 1", repeatCount: "indefinite", begin: "-0.7s" })] }), Object(_t.jsxs)("rect", { x: "30.666%", width: "8%", fill: "#1FC7D4", children: [Object(_t.jsx)("animate", { attributeName: "height", dur: "0.9s", values: "15%; 90%; 15%", keyTimes: "0; 0.55; 1", repeatCount: "indefinite", begin: "-0.6s" }), Object(_t.jsx)("animate", { attributeName: "y", dur: "0.9s", values: "85%; 10%; 85%", keyTimes: "0; 0.55; 1", repeatCount: "indefinite", begin: "-0.6s" })] }), Object(_t.jsxs)("rect", { x: "40.888%", width: "8%", fill: "#1FC7D4", children: [Object(_t.jsx)("animate", { attributeName: "height", dur: "0.9s", values: "15%; 90%; 15%", keyTimes: "0; 0.55; 1", repeatCount: "indefinite", begin: "-0.5s" }), Object(_t.jsx)("animate", { attributeName: "y", dur: "0.9s", values: "85%; 10%; 85%", keyTimes: "0; 0.55; 1", repeatCount: "indefinite", begin: "-0.5s" })] }), Object(_t.jsxs)("rect", { x: "51.11%", width: "8%", fill: "#1FC7D4", children: [Object(_t.jsx)("animate", { attributeName: "height", dur: "0.9s", values: "15%; 90%; 15%", keyTimes: "0; 0.55; 1", repeatCount: "indefinite", begin: "-0.4s" }), Object(_t.jsx)("animate", { attributeName: "y", dur: "0.9s", values: "85%; 10%; 85%", keyTimes: "0; 0.55; 1", repeatCount: "indefinite", begin: "-0.4s" })] }), Object(_t.jsxs)("rect", { x: "61.332%", width: "8%", fill: "#1FC7D4", children: [Object(_t.jsx)("animate", { attributeName: "height", dur: "0.9s", values: "15%; 90%; 15%", keyTimes: "0; 0.55; 1", repeatCount: "indefinite", begin: "-0.3s" }), Object(_t.jsx)("animate", { attributeName: "y", dur: "0.9s", values: "85%; 10%; 85%", keyTimes: "0; 0.55; 1", repeatCount: "indefinite", begin: "-0.3s" })] }), Object(_t.jsxs)("rect", { x: "71.554%", width: "8%", fill: "#1FC7D4", children: [Object(_t.jsx)("animate", { attributeName: "height", dur: "0.9s", values: "15%; 90%; 15%", keyTimes: "0; 0.55; 1", repeatCount: "indefinite", begin: "-0.2s" }), Object(_t.jsx)("animate", { attributeName: "y", dur: "0.9s", values: "85%; 10%; 85%", keyTimes: "0; 0.55; 1", repeatCount: "indefinite", begin: "-0.2s" })] }), Object(_t.jsxs)("rect", { x: "81.776%", width: "8%", fill: "#1FC7D4", children: [Object(_t.jsx)("animate", { attributeName: "height", dur: "0.9s", values: "15%; 90%; 15%", keyTimes: "0; 0.55; 1", repeatCount: "indefinite", begin: "-0.1s" }), Object(_t.jsx)("animate", { attributeName: "y", dur: "0.9s", values: "85%; 10%; 85%", keyTimes: "0; 0.55; 1", repeatCount: "indefinite", begin: "-0.1s" })] }), Object(_t.jsxs)("rect", { x: "91.998%", width: "8%", fill: "#1FC7D4", children: [Object(_t.jsx)("animate", { attributeName: "height", dur: "0.9s", values: "15%; 90%; 15%", keyTimes: "0; 0.55; 1", repeatCount: "indefinite" }), Object(_t.jsx)("animate", { attributeName: "y", dur: "0.9s", values: "85%; 10%; 85%", keyTimes: "0; 0.55; 1", repeatCount: "indefinite" })] })] })) },
                $n = function(e) { return Object(_t.jsxs)(Mt.Mb, Object(w.a)(Object(w.a)({ width: "100%", height: "100%", viewBox: "0 0 100 50", opacity: "0.1" }, e), {}, { children: [Object(_t.jsxs)("rect", { width: "5%", fill: "#31D0AA", children: [Object(_t.jsx)("animate", { attributeName: "height", dur: "2s", values: "0%; 40%; 40%; 10%; 10%", keyTimes: "0; 0.125; 0.5; 0.625; 1", repeatCount: "indefinite" }), Object(_t.jsx)("animate", { attributeName: "y", dur: "2s", from: "50%", to: "30%", values: "30%; 10%; 10%; 25%; 25%", keyTimes: "0; 0.125; 0.5; 0.625; 1", repeatCount: "indefinite" }), Object(_t.jsx)("animate", { attributeName: "rx", dur: "2s", values: "0%; 0%; 100%; 100%;", keyTimes: "0; 0.6; 0.625; 1", repeatCount: "indefinite" }), Object(_t.jsx)("animate", { attributeName: "x", dur: "2s", values: "32.5%; 32.5%; 47.5%; 47.5%;", keyTimes: "0; 0.7; 0.8; 1", repeatCount: "indefinite" }), Object(_t.jsx)("animate", { attributeName: "opacity", dur: "2s", values: "1; 1; 0; 0;", keyTimes: "0; 0.75; 0.9; 1", repeatCount: "indefinite" })] }), Object(_t.jsxs)("rect", { width: "5%", fill: "#31D0AA", children: [Object(_t.jsx)("animate", { attributeName: "height", dur: "2s", values: "0%; 0%; 20%; 20%; 10%; 10%", keyTimes: "0; 0.125; 0.25; 0.5; 0.625; 1", repeatCount: "indefinite" }), Object(_t.jsx)("animate", { attributeName: "y", dur: "2s", values: "15%; 15%; 5%; 5%; 25%; 25%", keyTimes: "0; 0.125; 0.25; 0.5; 0.625; 1", repeatCount: "indefinite" }), Object(_t.jsx)("animate", { attributeName: "rx", dur: "2s", values: "0%; 0%; 100%; 100%;", keyTimes: "0; 0.6; 0.625; 1", repeatCount: "indefinite" }), Object(_t.jsx)("animate", { attributeName: "x", dur: "2s", values: "42.5%; 42.5%; 47.5%; 47.5%;", keyTimes: "0; 0.7; 0.8; 1", repeatCount: "indefinite" }), Object(_t.jsx)("animate", { attributeName: "opacity", dur: "2s", values: "1; 1; 0; 0;", keyTimes: "0; 0.75; 0.9; 1", repeatCount: "indefinite" })] }), Object(_t.jsxs)("rect", { width: "5%", fill: "#ED4B9E", children: [Object(_t.jsx)("animate", { attributeName: "height", dur: "2s", values: "0%; 0%; 35%; 35%; 10%; 10%", keyTimes: "0; 0.25; 0.375; 0.5; 0.625; 1", repeatCount: "indefinite" }), Object(_t.jsx)("animate", { attributeName: "y", dur: "2s", values: "25%; 25%; 10%; 10%; 25%; 25%", keyTimes: "0; 0.25; 0.375; 0.5; 0.625; 1", repeatCount: "indefinite" }), Object(_t.jsx)("animate", { attributeName: "rx", dur: "2s", values: "0%; 0%; 100%; 100%;", keyTimes: "0; 0.6; 0.625; 1", repeatCount: "indefinite" }), Object(_t.jsx)("animate", { attributeName: "x", dur: "2s", values: "52.5%; 52.5%; 47.5%; 47.5%;", keyTimes: "0; 0.7; 0.8; 1", repeatCount: "indefinite" }), Object(_t.jsx)("animate", { attributeName: "opacity", dur: "2s", values: "1; 1; 0; 0;", keyTimes: "0; 0.75; 0.9; 1", repeatCount: "indefinite" })] }), Object(_t.jsxs)("rect", { width: "5%", fill: "#31D0AA", children: [Object(_t.jsx)("animate", { attributeName: "height", dur: "2s", values: "0%; 0%; 35%; 35%; 10%; 10%", keyTimes: "0; 0.375; 0.5; 0.5; 0.625; 1", repeatCount: "indefinite" }), Object(_t.jsx)("animate", { attributeName: "y", dur: "2s", values: "15%; 15%; 0%; 0%; 25%; 25%", keyTimes: "0; 0.375; 0.5; 0.5; 0.625; 1", repeatCount: "indefinite" }), Object(_t.jsx)("animate", { attributeName: "rx", dur: "2s", values: "0%; 0%; 100%; 100%;", keyTimes: "0; 0.6; 0.625; 1", repeatCount: "indefinite" }), Object(_t.jsx)("animate", { attributeName: "x", dur: "2s", values: "62.5%; 62.5%; 47.5%; 47.5%;", keyTimes: "0; 0.7; 0.8; 1", repeatCount: "indefinite" }), Object(_t.jsx)("animate", { attributeName: "opacity", dur: "2s", values: "1; 1; 0; 0;", keyTimes: "0; 0.75; 0.9; 1", repeatCount: "indefinite" })] })] })) },
                Bn = Object(Nt.e)(Mt.m)(fe || (fe = Object(j.a)(["\n  position: absolute;\n  margin-left: auto;\n  margin-right: auto;\n  top: 50%;\n  left: 0;\n  right: 0;\n  text-align: center;\n"]))),
                Nn = Object(Nt.e)(Mt.m)(xe || (xe = Object(j.a)(["\n  height: 100%;\n  position: relative;\n"]))),
                In = function() { var e = Object(Pt.b)().t; return Object(_t.jsxs)(Nn, { children: [Object(_t.jsx)(zn, {}), Object(_t.jsx)(Bn, { children: Object(_t.jsx)(Mt.Qb, { color: "textSubtle", fontSize: "20px", children: e("Loading chart data...") }) })] }) },
                Mn = function() { var e = Object(Pt.b)().t; return Object(_t.jsxs)(Nn, { children: [Object(_t.jsx)(Ln, {}), Object(_t.jsx)(Bn, { children: Object(_t.jsx)(Mt.Qb, { color: "textSubtle", fontSize: "20px", children: e("Loading chart data...") }) })] }) },
                Pn = function() { var e = Object(Pt.b)().t; return Object(_t.jsxs)(Nn, { children: [Object(_t.jsx)($n, {}), Object(_t.jsx)(Bn, { children: Object(_t.jsx)(Mt.Qb, { color: "textSubtle", fontSize: "20px", children: e("Loading chart data...") }) })] }) },
                Rn = function(e) {
                    var t = e.payload,
                        n = e.setHoverValue,
                        r = e.setHoverDate;
                    return Object(o.useEffect)((function() { n(t.value), r(Object(Sn.default)(t.time, "MMM d, yyyy")) }), [t.value, t.time, n, r]), null
                },
                En = function(e) {
                    var t = e.data,
                        n = e.setHoverValue,
                        r = e.setHoverDate,
                        c = Object(on.a)().theme;
                    return t && 0 !== t.length ? Object(_t.jsx)(Un.a, { children: Object(_t.jsxs)(Tn.a, { data: t, width: 300, height: 308, margin: { top: 5, right: 15, left: 0, bottom: 5 }, onMouseLeave: function() { r && r(void 0), n && n(void 0) }, children: [Object(_t.jsx)("defs", { children: Object(_t.jsxs)("linearGradient", { id: "gradient", x1: "0", y1: "0", x2: "0", y2: "1", children: [Object(_t.jsx)("stop", { offset: "5%", stopColor: c.colors.inputSecondary, stopOpacity: .5 }), Object(_t.jsx)("stop", { offset: "100%", stopColor: c.colors.secondary, stopOpacity: 0 })] }) }), Object(_t.jsx)(Qn.a, { dataKey: "time", axisLine: !1, tickLine: !1, tickFormatter: function(e) { return Object(Sn.default)(e, "dd") }, minTickGap: 10 }), Object(_t.jsx)(Fn.a, { dataKey: "value", tickCount: 6, scale: "linear", axisLine: !1, tickLine: !1, fontSize: "12px", tickFormatter: function(e) { return "$".concat(cn(e)) }, orientation: "right", tick: { dx: 10, fill: c.colors.textSubtle } }), Object(_t.jsx)(An.a, { cursor: { stroke: c.colors.secondary }, contentStyle: { display: "none" }, formatter: function(e, t, c) { return Object(_t.jsx)(Rn, { payload: c.payload, setHoverValue: n, setHoverDate: r }) } }), Object(_t.jsx)(qn.a, { dataKey: "value", type: "monotone", stroke: c.colors.secondary, fill: "url(#gradient)", strokeWidth: 2 })] }) }) : Object(_t.jsx)(Mn, {})
                },
                Vn = ["value"],
                Wn = function(e) {
                    var t = e.value,
                        n = Object(Ht.a)(e, Vn);
                    if (!t || Number.isNaN(t)) return Object(_t.jsx)(Mt.Qb, Object(w.a)(Object(w.a)({}, n), {}, { children: "-" }));
                    var r = t < 0;
                    return Object(_t.jsxs)(Mt.Qb, Object(w.a)(Object(w.a)({}, n), {}, { color: r ? "failure" : "success", children: [r ? "\u2193" : "\u2191", Math.abs(t).toFixed(2), "%"] }))
                },
                Hn = Object(Nt.e)(Mt.Qb)(me || (me = Object(j.a)(["\n  cursor: pointer;\n"]))),
                _n = Object(Nt.e)(Mt.R)(Oe || (Oe = Object(j.a)(["\n  width: 100%;\n  padding-top: 16px;\n  flex-direction: column;\n  gap: 16px;\n  background-color: ", ";\n  border-radius: ", ";\n  border: 1px solid ", ";\n"])), (function(e) { return e.theme.card.background }), (function(e) { return e.theme.radii.card }), (function(e) { return e.theme.colors.cardBorder })),
                Yn = Nt.e.div(he || (he = Object(j.a)(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 0.2em;\n  margin-bottom: 1.2em;\n"]))),
                Kn = Nt.e.div(ve || (ve = Object(j.a)(["\n  color: ", ";\n  padding: 0 20px;\n  :hover {\n    cursor: pointer;\n  }\n"])), (function(e) { return e.theme.colors.primary })),
                Gn = Nt.e.div(ke || (ke = Object(j.a)(["\n  height: 1px;\n  background-color: ", ";\n  width: 100%;\n"])), (function(e) { return e.theme.colors.cardBorder })),
                Xn = Nt.e.div(ye || (ye = Object(j.a)(["\n  display: grid;\n  grid-gap: 1em;\n  align-items: center;\n\n  padding: 0 24px;\n\n  grid-template-columns: 20px 3fr repeat(4, 1fr);\n\n  @media screen and (max-width: 900px) {\n    grid-template-columns: 20px 2fr repeat(3, 1fr);\n    & :nth-child(4) {\n      display: none;\n    }\n  }\n\n  @media screen and (max-width: 800px) {\n    grid-template-columns: 20px 2fr repeat(2, 1fr);\n    & :nth-child(6) {\n      display: none;\n    }\n  }\n\n  @media screen and (max-width: 670px) {\n    grid-template-columns: 1fr 1fr;\n    > *:first-child {\n      display: none;\n    }\n    > *:nth-child(3) {\n      display: none;\n    }\n  }\n"]))),
                Jn = Object(Nt.e)(It.a)(ge || (ge = Object(j.a)(["\n  text-decoration: none;\n  :hover {\n    cursor: pointer;\n    opacity: 0.7;\n  }\n"]))),
                Zn = Object(Nt.e)(Zt)(De || (De = Object(j.a)(["\n  @media screen and (max-width: 670px) {\n    width: 16px;\n    height: 16px;\n  }\n"]))),
                er = function() { var e = Object(_t.jsxs)(Xn, { children: [Object(_t.jsx)(Mt.Db, {}), Object(_t.jsx)(Mt.Db, {}), Object(_t.jsx)(Mt.Db, {}), Object(_t.jsx)(Mt.Db, {}), Object(_t.jsx)(Mt.Db, {}), Object(_t.jsx)(Mt.Db, {})] }); return Object(_t.jsxs)(_t.Fragment, { children: [e, e, e] }) },
                tr = function(e) {
                    var t = e.tokenData,
                        n = e.index,
                        r = Object(Mt.jc)(),
                        c = r.isXs,
                        a = r.isSm;
                    return Object(_t.jsx)(Jn, { to: "/info/token/".concat(t.address), children: Object(_t.jsxs)(Xn, { children: [Object(_t.jsx)(Mt.R, { children: Object(_t.jsx)(Mt.Qb, { children: n + 1 }) }), Object(_t.jsxs)(Mt.R, { alignItems: "center", children: [Object(_t.jsx)(Zn, { address: t.address }), (c || a) && Object(_t.jsx)(Mt.Qb, { ml: "8px", children: t.symbol }), !c && !a && Object(_t.jsxs)(Mt.R, { marginLeft: "10px", children: [Object(_t.jsx)(Mt.Qb, { children: t.name }), Object(_t.jsxs)(Mt.Qb, { ml: "8px", children: ["(", t.symbol, ")"] })] })] }), Object(_t.jsxs)(Mt.Qb, { fontWeight: 400, children: ["$", cn(t.priceUSD, { notation: "standard" })] }), Object(_t.jsx)(Mt.Qb, { fontWeight: 400, children: Object(_t.jsx)(Wn, { value: t.priceUSDChange, fontWeight: 400 }) }), Object(_t.jsxs)(Mt.Qb, { fontWeight: 400, children: ["$", cn(t.volumeUSD)] }), Object(_t.jsxs)(Mt.Qb, { fontWeight: 400, children: ["$", cn(t.liquidityUSD)] })] }) })
                },
                nr = "name",
                rr = "volumeUSD",
                cr = "tvlUSD",
                ar = "priceUSD",
                or = "priceUSDChange",
                ir = function(e) {
                    var t = e.tokenDatas,
                        n = e.maxItems,
                        r = void 0 === n ? 10 : n,
                        c = Object(o.useState)(rr),
                        a = Object(b.a)(c, 2),
                        s = a[0],
                        l = a[1],
                        u = Object(o.useState)(!0),
                        d = Object(b.a)(u, 2),
                        j = d[0],
                        p = d[1],
                        f = Object(Pt.b)().t,
                        x = Object(o.useState)(1),
                        m = Object(b.a)(x, 2),
                        O = m[0],
                        h = m[1],
                        v = Object(o.useState)(1),
                        k = Object(b.a)(v, 2),
                        y = k[0],
                        g = k[1];
                    Object(o.useEffect)((function() {
                        var e = 1;
                        t && (t.length % r === 0 && (e = 0), g(Math.floor(t.length / r) + e))
                    }), [r, t]);
                    var D = Object(o.useMemo)((function() { return t ? t.sort((function(e, t) { return e && t ? e[s] > t[s] ? 1 * (j ? -1 : 1) : -1 * (j ? -1 : 1) : -1 })).slice(r * (O - 1), O * r) : [] }), [t, r, O, j, s]),
                        S = Object(o.useCallback)((function(e) { l(e), p(s !== e || !j) }), [j, s]),
                        w = Object(o.useCallback)((function(e) { return s === e ? j ? "\u2193" : "\u2191" : "" }), [j, s]);
                    return t ? Object(_t.jsxs)(_n, { children: [Object(_t.jsxs)(Xn, { children: [Object(_t.jsx)(Mt.Qb, { color: "secondary", fontSize: "12px", bold: !0, children: "#" }), Object(_t.jsxs)(Hn, { color: "secondary", fontSize: "12px", bold: !0, onClick: function() { return S(nr) }, textTransform: "uppercase", children: [f("Name"), " ", w(nr)] }), Object(_t.jsxs)(Hn, { color: "secondary", fontSize: "12px", bold: !0, onClick: function() { return S(ar) }, textTransform: "uppercase", children: [f("Price"), " ", w(ar)] }), Object(_t.jsxs)(Hn, { color: "secondary", fontSize: "12px", bold: !0, onClick: function() { return S(or) }, textTransform: "uppercase", children: [f("Price Change"), " ", w(or)] }), Object(_t.jsxs)(Hn, { color: "secondary", fontSize: "12px", bold: !0, onClick: function() { return S(rr) }, textTransform: "uppercase", children: [f("Volume 24H"), " ", w(rr)] }), Object(_t.jsxs)(Hn, { color: "secondary", fontSize: "12px", bold: !0, onClick: function() { return S(cr) }, textTransform: "uppercase", children: [f("Liquidity"), " ", w(cr)] })] }), Object(_t.jsx)(Gn, {}), D.length > 0 ? Object(_t.jsxs)(_t.Fragment, { children: [D.map((function(e, t) { return e ? Object(_t.jsxs)(i.a.Fragment, { children: [Object(_t.jsx)(tr, { index: 10 * (O - 1) + t, tokenData: e }), Object(_t.jsx)(Gn, {})] }, e.address) : null })), Object(_t.jsxs)(Yn, { children: [Object(_t.jsx)(Kn, { onClick: function() { h(1 === O ? O : O - 1) }, children: Object(_t.jsx)(Mt.c, { color: 1 === O ? "textDisabled" : "primary" }) }), Object(_t.jsx)(Mt.Qb, { children: f("Page %page% of %maxPage%", { page: O, maxPage: y }) }), Object(_t.jsx)(Kn, { onClick: function() { h(O === y ? O : O + 1) }, children: Object(_t.jsx)(Mt.f, { color: O === y ? "textDisabled" : "primary" }) })] })] }) : Object(_t.jsxs)(_t.Fragment, { children: [Object(_t.jsx)(er, {}), Object(_t.jsx)(Mt.m, {})] })] }) : Object(_t.jsx)(Mt.Db, {})
                },
                sr = Nt.e.div(Se || (Se = Object(j.a)(["\n  display: grid;\n  grid-gap: 1em;\n  align-items: center;\n  grid-template-columns: 20px 3.5fr repeat(5, 1fr);\n\n  padding: 0 24px;\n  @media screen and (max-width: 900px) {\n    grid-template-columns: 20px 1.5fr repeat(3, 1fr);\n    & :nth-child(4),\n    & :nth-child(5) {\n      display: none;\n    }\n  }\n  @media screen and (max-width: 500px) {\n    grid-template-columns: 20px 1.5fr repeat(1, 1fr);\n    & :nth-child(4),\n    & :nth-child(5),\n    & :nth-child(6),\n    & :nth-child(7) {\n      display: none;\n    }\n  }\n  @media screen and (max-width: 480px) {\n    grid-template-columns: 2.5fr repeat(1, 1fr);\n    > *:nth-child(1) {\n      display: none;\n    }\n  }\n"]))),
                lr = Object(Nt.e)(It.a)(we || (we = Object(j.a)(["\n  text-decoration: none;\n  :hover {\n    cursor: pointer;\n    opacity: 0.7;\n  }\n"]))),
                ur = "volumeUSD",
                dr = "tvlUSD",
                br = "volumeUSDWeek",
                jr = "lpFees24h",
                pr = "lpApr7d",
                fr = function() { return Object(_t.jsxs)(sr, { children: [Object(_t.jsx)(Mt.Db, {}), Object(_t.jsx)(Mt.Db, {}), Object(_t.jsx)(Mt.Db, {}), Object(_t.jsx)(Mt.Db, {}), Object(_t.jsx)(Mt.Db, {}), Object(_t.jsx)(Mt.Db, {}), Object(_t.jsx)(Mt.Db, {})] }) },
                xr = function() { return Object(_t.jsxs)(_t.Fragment, { children: [Object(_t.jsx)(fr, {}), Object(_t.jsx)(fr, {}), Object(_t.jsx)(fr, {})] }) },
                mr = function(e) {
                    var t = e.poolData,
                        n = e.index;
                    return Object(_t.jsx)(lr, { to: "/info/pool/".concat(t.address), children: Object(_t.jsxs)(sr, { children: [Object(_t.jsx)(Mt.Qb, { children: n + 1 }), Object(_t.jsxs)(Mt.R, { children: [Object(_t.jsx)(tn, { address0: t.token0.address, address1: t.token1.address }), Object(_t.jsxs)(Mt.Qb, { ml: "8px", children: [t.token0.symbol, "/", t.token1.symbol] })] }), Object(_t.jsxs)(Mt.Qb, { children: ["$", cn(t.volumeUSD)] }), Object(_t.jsxs)(Mt.Qb, { children: ["$", cn(t.volumeUSDWeek)] }), Object(_t.jsxs)(Mt.Qb, { children: ["$", cn(t.lpFees24h)] }), Object(_t.jsxs)(Mt.Qb, { children: [cn(t.lpApr7d), "%"] }), Object(_t.jsxs)(Mt.Qb, { children: ["$", cn(t.liquidityUSD)] })] }) })
                },
                Or = function(e) {
                    var t = e.poolDatas,
                        n = e.loading,
                        r = Object(o.useState)(ur),
                        c = Object(b.a)(r, 2),
                        a = c[0],
                        s = c[1],
                        l = Object(o.useState)(!0),
                        u = Object(b.a)(l, 2),
                        d = u[0],
                        j = u[1],
                        p = Object(Pt.b)().t,
                        f = Object(o.useState)(1),
                        x = Object(b.a)(f, 2),
                        m = x[0],
                        O = x[1],
                        h = Object(o.useState)(1),
                        k = Object(b.a)(h, 2),
                        y = k[0],
                        g = k[1];
                    Object(o.useEffect)((function() {
                        var e = 1;
                        t.length % v === 0 && (e = 0), g(Math.floor(t.length / v) + e)
                    }), [t]);
                    var D = Object(o.useMemo)((function() { return t ? t.sort((function(e, t) { return e && t ? e[a] > t[a] ? 1 * (d ? -1 : 1) : -1 * (d ? -1 : 1) : -1 })).slice(v * (m - 1), m * v) : [] }), [m, t, d, a]),
                        S = Object(o.useCallback)((function(e) { s(e), j(a !== e || !d) }), [d, a]),
                        w = Object(o.useCallback)((function(e) { return a === e ? d ? "\u2193" : "\u2191" : "" }), [d, a]);
                    return Object(_t.jsxs)(_n, { children: [Object(_t.jsxs)(sr, { children: [Object(_t.jsx)(Mt.Qb, { color: "secondary", fontSize: "12px", bold: !0, children: "#" }), Object(_t.jsx)(Mt.Qb, { color: "secondary", fontSize: "12px", bold: !0, textTransform: "uppercase", children: p("Pool") }), Object(_t.jsxs)(Hn, { color: "secondary", fontSize: "12px", bold: !0, onClick: function() { return S(ur) }, textTransform: "uppercase", children: [p("Volume 24H"), " ", w(ur)] }), Object(_t.jsxs)(Hn, { color: "secondary", fontSize: "12px", bold: !0, onClick: function() { return S(br) }, textTransform: "uppercase", children: [p("Volume 7D"), " ", w(br)] }), Object(_t.jsxs)(Hn, { color: "secondary", fontSize: "12px", bold: !0, onClick: function() { return S(jr) }, textTransform: "uppercase", children: [p("LP reward fees 24H"), " ", w(jr)] }), Object(_t.jsxs)(Hn, { color: "secondary", fontSize: "12px", bold: !0, onClick: function() { return S(pr) }, textTransform: "uppercase", children: [p("LP reward APR"), " ", w(pr)] }), Object(_t.jsxs)(Hn, { color: "secondary", fontSize: "12px", bold: !0, onClick: function() { return S(dr) }, textTransform: "uppercase", children: [p("Liquidity"), " ", w(dr)] })] }), Object(_t.jsx)(Gn, {}), D.length > 0 ? Object(_t.jsxs)(_t.Fragment, { children: [D.map((function(e, t) { return e ? Object(_t.jsxs)(i.a.Fragment, { children: [Object(_t.jsx)(mr, { index: (m - 1) * v + t, poolData: e }), Object(_t.jsx)(Gn, {})] }, e.address) : null })), n && Object(_t.jsx)(fr, {}), Object(_t.jsxs)(Yn, { children: [Object(_t.jsx)(Kn, { onClick: function() { O(1 === m ? m : m - 1) }, children: Object(_t.jsx)(Mt.c, { color: 1 === m ? "textDisabled" : "primary" }) }), Object(_t.jsx)(Mt.Qb, { children: p("Page %page% of %maxPage%", { page: m, maxPage: y }) }), Object(_t.jsx)(Kn, { onClick: function() { O(m === y ? m : m + 1) }, children: Object(_t.jsx)(Mt.f, { color: m === y ? "textDisabled" : "primary" }) })] })] }) : Object(_t.jsxs)(_t.Fragment, { children: [Object(_t.jsx)(xr, {}), Object(_t.jsx)(Mt.m, {})] })] })
                },
                hr = n(1250),
                vr = n(1232),
                kr = function(e) {
                    var t = e.x,
                        n = e.y,
                        r = e.width,
                        c = e.height,
                        a = e.fill;
                    return Object(_t.jsx)("g", { children: Object(_t.jsx)("rect", { x: t, y: n, fill: a, width: r, height: c, rx: "2" }) })
                },
                yr = function(e) {
                    var t = e.payload,
                        n = e.setHoverValue,
                        r = e.setHoverDate;
                    return Object(o.useEffect)((function() { n(t.value), r(Object(Sn.default)(t.time, "MMM d, yyyy")) }), [t.value, t.time, n, r]), null
                },
                gr = function(e) {
                    var t = e.data,
                        n = e.setHoverValue,
                        r = e.setHoverDate,
                        c = Object(on.a)().theme;
                    return t && 0 !== t.length ? Object(_t.jsx)(Un.a, { width: "100%", height: "100%", children: Object(_t.jsxs)(hr.a, { data: t, margin: { top: 5, right: 15, left: 0, bottom: 5 }, onMouseLeave: function() { r(void 0), n(void 0) }, children: [Object(_t.jsx)(Qn.a, { dataKey: "time", axisLine: !1, tickLine: !1, tickFormatter: function(e) { return Object(Sn.default)(e, "dd") }, minTickGap: 10 }), Object(_t.jsx)(Fn.a, { dataKey: "value", tickCount: 6, scale: "linear", axisLine: !1, tickLine: !1, color: c.colors.textSubtle, fontSize: "12px", tickFormatter: function(e) { return "$".concat(cn(e)) }, orientation: "right", tick: { dx: 10, fill: c.colors.textSubtle } }), Object(_t.jsx)(An.a, { cursor: { fill: c.colors.backgroundDisabled }, contentStyle: { display: "none" }, formatter: function(e, t, c) { return Object(_t.jsx)(yr, { payload: c.payload, setHoverValue: n, setHoverDate: r }) } }), Object(_t.jsx)(vr.a, { dataKey: "value", fill: c.colors.primary, shape: function(e) { return Object(_t.jsx)(kr, { height: e.height, width: e.width, x: e.x, y: e.y, fill: c.colors.primary }) } })] }) }) : Object(_t.jsx)(In, {})
                },
                Dr = n(1260),
                Sr = n(155),
                wr = Nt.e.div(Ce || (Ce = Object(j.a)(["\n  width: 100%;\n"]))),
                Cr = Nt.e.div(Ue || (Ue = Object(j.a)(["\n  display: grid;\n  grid-gap: 1em;\n  align-items: center;\n  grid-template-columns: 2fr 0.8fr repeat(4, 1fr);\n  padding: 0 24px;\n  @media screen and (max-width: 940px) {\n    grid-template-columns: 2fr repeat(4, 1fr);\n    & > *:nth-child(5) {\n      display: none;\n    }\n  }\n  @media screen and (max-width: 800px) {\n    grid-template-columns: 2fr repeat(2, 1fr);\n    & > *:nth-child(5) {\n      display: none;\n    }\n    & > *:nth-child(3) {\n      display: none;\n    }\n    & > *:nth-child(4) {\n      display: none;\n    }\n  }\n  @media screen and (max-width: 500px) {\n    grid-template-columns: 2fr 1fr;\n    & > *:nth-child(5) {\n      display: none;\n    }\n    & > *:nth-child(3) {\n      display: none;\n    }\n    & > *:nth-child(4) {\n      display: none;\n    }\n    & > *:nth-child(2) {\n      display: none;\n    }\n  }\n"]))),
                Ur = Object(Nt.e)(Mt.R)(Te || (Te = Object(j.a)(["\n  align-items: center;\n  margin-right: 16px;\n  margin-top: 8px;\n  cursor: pointer;\n"]))),
                Tr = "amountUSD",
                Qr = "timestamp",
                Fr = "sender",
                Ar = "amountToken0",
                qr = "amountToken1",
                Lr = function() { var e = Object(_t.jsxs)(Cr, { children: [Object(_t.jsx)(Mt.Db, {}), Object(_t.jsx)(Mt.Db, {}), Object(_t.jsx)(Mt.Db, {}), Object(_t.jsx)(Mt.Db, {}), Object(_t.jsx)(Mt.Db, {}), Object(_t.jsx)(Mt.Db, {})] }); return Object(_t.jsxs)(_t.Fragment, { children: [e, e, e] }) },
                zr = function(e) {
                    var t = e.transaction,
                        n = Object(Pt.b)().t,
                        r = Math.abs(t.amountToken0),
                        c = Math.abs(t.amountToken1),
                        o = t.amountToken0 < 0 ? t.token0Symbol : t.token1Symbol,
                        i = t.amountToken1 < 0 ? t.token0Symbol : t.token1Symbol;
                    return Object(_t.jsxs)(Cr, { children: [Object(_t.jsx)(Mt.ab, { href: Object(st.e)(t.hash, "transaction"), children: Object(_t.jsx)(Mt.Qb, { children: t.type === a.MINT ? n("Add %token0% and %token1%", { token0: t.token0Symbol, token1: t.token1Symbol }) : t.type === a.SWAP ? n("Swap %token0% for %token1%", { token0: i, token1: o }) : n("Remove %token0% and %token1%", { token0: t.token0Symbol, token1: t.token1Symbol }) }) }), Object(_t.jsxs)(Mt.Qb, { children: ["$", cn(t.amountUSD)] }), Object(_t.jsx)(Mt.Qb, { children: Object(_t.jsx)(Mt.Qb, { children: "".concat(cn(r), " ").concat(t.token0Symbol) }) }), Object(_t.jsx)(Mt.Qb, { children: Object(_t.jsx)(Mt.Qb, { children: "".concat(cn(c), " ").concat(t.token1Symbol) }) }), Object(_t.jsx)(Mt.ab, { href: Object(st.e)(t.sender, "address"), children: Object(Sr.a)(t.sender) }), Object(_t.jsx)(Mt.Qb, { children: Object(Dr.a)(1e3 * parseInt(t.timestamp, 10)) })] })
                },
                $r = function(e) {
                    var t = e.transactions,
                        n = Object(o.useState)(Qr),
                        r = Object(b.a)(n, 2),
                        c = r[0],
                        s = r[1],
                        l = Object(o.useState)(!0),
                        u = Object(b.a)(l, 2),
                        d = u[0],
                        j = u[1],
                        p = Object(Pt.b)().t,
                        f = Object(o.useState)(1),
                        x = Object(b.a)(f, 2),
                        m = x[0],
                        O = x[1],
                        h = Object(o.useState)(1),
                        k = Object(b.a)(h, 2),
                        y = k[0],
                        g = k[1],
                        D = Object(o.useState)(void 0),
                        S = Object(b.a)(D, 2),
                        w = S[0],
                        C = S[1],
                        U = Object(o.useMemo)((function() { return t ? t.slice().sort((function(e, t) { return e && t ? e[c] > t[c] ? 1 * (d ? -1 : 1) : -1 * (d ? -1 : 1) : -1 })).filter((function(e) { return void 0 === w || e.type === w })).slice(v * (m - 1), m * v) : [] }), [t, m, c, d, w]);
                    Object(o.useEffect)((function() {
                        if (t) {
                            var e = t.filter((function(e) { return void 0 === w || e.type === w }));
                            e.length % v === 0 ? g(Math.floor(e.length / v)) : g(Math.floor(e.length / v) + 1)
                        }
                    }), [t, w]);
                    var T = Object(o.useCallback)((function(e) { e !== w && (C(e), O(1)) }), [w]),
                        Q = Object(o.useCallback)((function(e) { s(e), j(c !== e || !d) }), [d, c]),
                        F = Object(o.useCallback)((function(e) { return c === e ? d ? "\u2193" : "\u2191" : "" }), [d, c]);
                    return Object(_t.jsxs)(wr, { children: [Object(_t.jsxs)(Mt.R, { mb: "16px", children: [Object(_t.jsxs)(Mt.R, { flexDirection: ["column", "row"], children: [Object(_t.jsxs)(Ur, { onClick: function() { return T(void 0) }, children: [Object(_t.jsx)(Mt.Ab, { onChange: function() { return null }, scale: "sm", checked: void 0 === w }), Object(_t.jsx)(Mt.Qb, { ml: "8px", children: p("All") })] }), Object(_t.jsxs)(Ur, { onClick: function() { return T(a.SWAP) }, children: [Object(_t.jsx)(Mt.Ab, { onChange: function() { return null }, scale: "sm", checked: w === a.SWAP }), Object(_t.jsx)(Mt.Qb, { ml: "8px", children: p("Swaps") })] })] }), Object(_t.jsxs)(Mt.R, { flexDirection: ["column", "row"], children: [Object(_t.jsxs)(Ur, { onClick: function() { return T(a.MINT) }, children: [Object(_t.jsx)(Mt.Ab, { onChange: function() { return null }, scale: "sm", checked: w === a.MINT }), Object(_t.jsx)(Mt.Qb, { ml: "8px", children: p("Adds") })] }), Object(_t.jsxs)(Ur, { onClick: function() { return T(a.BURN) }, children: [Object(_t.jsx)(Mt.Ab, { onChange: function() { return null }, scale: "sm", checked: w === a.BURN }), Object(_t.jsx)(Mt.Qb, { ml: "8px", children: p("Removes") })] })] })] }), Object(_t.jsxs)(_n, { children: [Object(_t.jsxs)(Cr, { children: [Object(_t.jsx)(Mt.Qb, { color: "secondary", fontSize: "12px", bold: !0, textTransform: "uppercase", children: p("Action") }), Object(_t.jsxs)(Hn, { color: "secondary", fontSize: "12px", bold: !0, onClick: function() { return Q(Tr) }, textTransform: "uppercase", children: [p("Total Value"), " ", F(Tr)] }), Object(_t.jsxs)(Hn, { color: "secondary", fontSize: "12px", bold: !0, onClick: function() { return Q(Ar) }, textTransform: "uppercase", children: [p("Token Amount"), " ", F(Ar)] }), Object(_t.jsxs)(Hn, { color: "secondary", fontSize: "12px", bold: !0, onClick: function() { return Q(qr) }, textTransform: "uppercase", children: [p("Token Amount"), " ", F(qr)] }), Object(_t.jsxs)(Hn, { color: "secondary", fontSize: "12px", bold: !0, onClick: function() { return Q(Fr) }, textTransform: "uppercase", children: [p("Account"), " ", F(Fr)] }), Object(_t.jsxs)(Hn, { color: "secondary", fontSize: "12px", bold: !0, onClick: function() { return Q(Qr) }, textTransform: "uppercase", children: [p("Time"), " ", F(Qr)] })] }), Object(_t.jsx)(Gn, {}), t ? Object(_t.jsxs)(_t.Fragment, { children: [U.map((function(e, t) { return e ? Object(_t.jsxs)(i.a.Fragment, { children: [Object(_t.jsx)(zr, { transaction: e }), Object(_t.jsx)(Gn, {})] }, t) : null })), 0 === U.length ? Object(_t.jsx)(Mt.R, { justifyContent: "center", children: Object(_t.jsx)(Mt.Qb, { children: p("No Transactions") }) }) : void 0, Object(_t.jsxs)(Yn, { children: [Object(_t.jsx)(Kn, { onClick: function() { O(1 === m ? m : m - 1) }, children: Object(_t.jsx)(Mt.c, { color: 1 === m ? "textDisabled" : "primary" }) }), Object(_t.jsx)(Mt.Qb, { children: p("Page %page% of %maxPage%", { page: m, maxPage: y }) }), Object(_t.jsx)(Kn, { onClick: function() { O(m === y ? m : m + 1) }, children: Object(_t.jsx)(Mt.f, { color: m === y ? "textDisabled" : "primary" }) })] })] }) : Object(_t.jsxs)(_t.Fragment, { children: [Object(_t.jsx)(Lr, {}), Object(_t.jsx)(Mt.m, {})] })] })] })
                },
                Br = Object(Nt.e)(Mt.R)(Qe || (Qe = Object(j.a)(["\n  justify-content: space-between;\n  flex-direction: column;\n  width: 100%;\n  padding: 0;\n  gap: 1em;\n\n  & > * {\n    width: 100%;\n  }\n\n  ", " {\n    flex-direction: row;\n  } ;\n"])), (function(e) { return e.theme.mediaQueries.md })),
                Nr = function() {
                    var e = Object(Pt.b)().t,
                        t = Object(o.useState)(),
                        n = Object(b.a)(t, 2),
                        r = n[0],
                        c = n[1],
                        a = Object(o.useState)(),
                        i = Object(b.a)(a, 2),
                        s = i[0],
                        l = i[1],
                        u = Object(o.useState)(),
                        d = Object(b.a)(u, 2),
                        j = d[0],
                        p = d[1],
                        f = Object(o.useState)(),
                        x = Object(b.a)(f, 2),
                        m = x[0],
                        O = x[1],
                        h = wt(),
                        v = Object(b.a)(h, 1)[0],
                        k = Ct(),
                        y = Object(b.a)(k, 1)[0],
                        g = Ut(),
                        D = Object(b.a)(g, 1)[0],
                        S = Object(Sn.default)(new Date, "MMM d, yyyy");
                    Object(o.useEffect)((function() { null == j && v && p(v.volumeUSD) }), [v, j]), Object(o.useEffect)((function() { null == r && v && c(v.liquidityUSD) }), [r, v]);
                    var w = Object(o.useMemo)((function() { return y ? y.map((function(e) { return { time: Object(wn.a)(e.date), value: e.liquidityUSD } })) : [] }), [y]),
                        C = Object(o.useMemo)((function() { return y ? y.map((function(e) { return { time: Object(wn.a)(e.date), value: e.volumeUSD } })) : [] }), [y]),
                        U = At(),
                        T = Object(o.useMemo)((function() { return Object.values(U).map((function(e) { return e.data })).filter((function(e) { return e })) }), [U]),
                        Q = Tt(),
                        F = Object(o.useMemo)((function() { return Object.values(Q).map((function(e) { return e.data })).filter((function(e) { return e })) }), [Q]),
                        A = Object(o.useMemo)((function() { return Object.values(Q).some((function(e) { return !e.data })) }), [Q]);
                    return Object(_t.jsxs)(Cn.b, { children: [Object(_t.jsx)(Mt.T, { scale: "lg", mb: "16px", id: "info-overview-title", children: e("BriseSwap Info & Analytics") }), Object(_t.jsxs)(Br, { children: [Object(_t.jsx)(Mt.t, { children: Object(_t.jsxs)(Mt.m, { p: ["16px", "16px", "24px"], children: [Object(_t.jsx)(Mt.Qb, { bold: !0, color: "secondary", children: e("Liquidity") }), r > 0 ? Object(_t.jsxs)(Mt.Qb, { bold: !0, fontSize: "24px", children: ["$", cn(r)] }) : Object(_t.jsx)(Mt.Db, { width: "128px", height: "36px" }), Object(_t.jsx)(Mt.Qb, { children: null !== s && void 0 !== s ? s : S }), Object(_t.jsx)(Mt.m, { height: "250px", children: Object(_t.jsx)(En, { data: w, setHoverValue: c, setHoverDate: l }) })] }) }), Object(_t.jsx)(Mt.t, { children: Object(_t.jsxs)(Mt.m, { p: ["16px", "16px", "24px"], children: [Object(_t.jsx)(Mt.Qb, { bold: !0, color: "secondary", children: e("Volume 24H") }), j > 0 ? Object(_t.jsxs)(Mt.Qb, { bold: !0, fontSize: "24px", children: ["$", cn(j)] }) : Object(_t.jsx)(Mt.Db, { width: "128px", height: "36px" }), Object(_t.jsx)(Mt.Qb, { children: null !== m && void 0 !== m ? m : S }), Object(_t.jsx)(Mt.m, { height: "250px", children: Object(_t.jsx)(gr, { data: C, setHoverValue: p, setHoverDate: O }) })] }) })] }), Object(_t.jsx)(Mt.T, { scale: "lg", mt: "40px", mb: "16px", children: e("Top Tokens") }), Object(_t.jsx)(ir, { tokenDatas: T }), Object(_t.jsx)(Mt.T, { scale: "lg", mt: "40px", mb: "16px", children: e("Top Pools") }), Object(_t.jsx)(Or, { poolDatas: F, loading: A }), Object(_t.jsx)(Mt.T, { scale: "lg", mt: "40px", mb: "16px", children: e("Transactions") }), Object(_t.jsx)($r, { transactions: D })] })
                },
                Ir = function() {
                    var e = Object(Pt.b)().t,
                        t = Tt(),
                        n = Object(o.useMemo)((function() { return Object.values(t).map((function(e) { return e.data })).filter((function(e) { return e })) }), [t]),
                        r = Object(an.u)(),
                        c = Object(b.a)(r, 1)[0],
                        a = Ft(c);
                    return Object(_t.jsxs)(Cn.b, { children: [Object(_t.jsx)(Mt.T, { scale: "lg", mb: "16px", children: e("Your Watchlist") }), Object(_t.jsx)(Mt.t, { children: a.length > 0 ? Object(_t.jsx)(Or, { poolDatas: a }) : Object(_t.jsx)(Mt.Qb, { px: "24px", py: "16px", children: e("Saved pools will appear here") }) }), Object(_t.jsx)(Mt.T, { scale: "lg", mt: "40px", mb: "16px", id: "info-pools-title", children: e("All Pools") }), Object(_t.jsx)(Or, { poolDatas: n })] })
                },
                Mr = n(1236),
                Pr = ["data", "setValue", "setLabel"],
                Rr = function(e) {
                    var t = e.data,
                        n = e.setValue,
                        r = e.setLabel,
                        c = Object(Ht.a)(e, Pr),
                        a = Object(on.a)().theme,
                        i = Object(o.useRef)(null),
                        s = Object(o.useState)(),
                        l = Object(b.a)(s, 2),
                        u = l[0],
                        d = l[1],
                        j = Object(o.useCallback)((function() {
                            var e;
                            u && (null === i || void 0 === i || null === (e = i.current) || void 0 === e ? void 0 : e.parentElement) && (u.resize(i.current.parentElement.clientWidth - 32, 250), u.timeScale().fitContent(), u.timeScale().scrollToPosition(0, !1))
                        }), [u, i]),
                        p = "object" === typeof window;
                    return Object(o.useEffect)((function() { return p ? (window.addEventListener("resize", j), function() { return window.removeEventListener("resize", j) }) : null }), [p, i, j]), Object(o.useEffect)((function() {
                        var e;
                        if (!u && t && (null === i || void 0 === i || null === (e = i.current) || void 0 === e ? void 0 : e.parentElement)) {
                            var n = Object(Mr.a)(i.current, { height: 250, width: i.current.parentElement.clientWidth - 32, layout: { backgroundColor: "transparent", textColor: a.colors.textSubtle, fontFamily: "Kanit, sans-serif", fontSize: 12 }, rightPriceScale: { scaleMargins: { top: .1, bottom: .1 }, borderVisible: !1 }, timeScale: { borderVisible: !1, secondsVisible: !0, tickMarkFormatter: function(e) { return Object(Sn.default)(1e3 * e, "MM/dd h:mm a") } }, watermark: { visible: !1 }, grid: { horzLines: { visible: !1 }, vertLines: { visible: !1 } }, crosshair: { horzLine: { visible: !1, labelVisible: !1 }, mode: 1, vertLine: { visible: !0, labelVisible: !1, style: 3, width: 1, color: a.colors.textSubtle, labelBackgroundColor: a.colors.primary } } });
                            n.timeScale().fitContent(), d(n)
                        }
                    }), [u, t, n, a]), Object(o.useEffect)((function() {
                        if (u && t) {
                            var e = u.addCandlestickSeries({ upColor: a.colors.success, downColor: a.colors.failure, borderDownColor: a.colors.failure, borderUpColor: a.colors.success, wickDownColor: a.colors.failure, wickUpColor: a.colors.success });
                            e.setData(t), u.subscribeCrosshairMove((function(t) {
                                if ((null === i || void 0 === i ? void 0 : i.current) && (void 0 === t || void 0 === t.time || t && t.point && t.point.x < 0 || t && t.point && t.point.x > i.current.clientWidth || t && t.point && t.point.y < 0 || t && t.point && t.point.y > 250)) n && n(void 0), r && r(void 0);
                                else if (e && t) {
                                    var c = t.time,
                                        a = new Date(1e3 * c),
                                        o = new Date(a.getTime() + 6e4 * a.getTimezoneOffset()),
                                        s = "".concat(Object(Sn.default)(o, "MMM d, yyyy h:mm a"), " (UTC)"),
                                        l = t.seriesPrices.get(e);
                                    n && n(null === l || void 0 === l ? void 0 : l.open), r && r(s)
                                }
                            }))
                        }
                    }), [u, t, n, r, a]), Object(_t.jsxs)(_t.Fragment, { children: [!u && Object(_t.jsx)(Pn, {}), Object(_t.jsx)("div", Object(w.a)({ ref: i, id: "candle-chart" }, c))] })
                },
                Er = n(832);
            ! function(e) { e[e.LIQUIDITY = 0] = "LIQUIDITY", e[e.VOLUME = 1] = "VOLUME", e[e.PRICE = 2] = "PRICE" }(Fe || (Fe = {}));
            var Vr, Wr, Hr, _r, Yr, Kr, Gr, Xr, Jr = function(e) {
                    var t = e.variant,
                        n = e.chartData,
                        r = e.tokenData,
                        c = e.tokenPriceData,
                        a = Object(o.useState)(Fe.VOLUME),
                        i = Object(b.a)(a, 2),
                        s = i[0],
                        l = i[1],
                        u = Object(o.useState)(),
                        d = Object(b.a)(u, 2),
                        j = d[0],
                        p = d[1],
                        f = Object(o.useState)(),
                        x = Object(b.a)(f, 2),
                        m = x[0],
                        O = x[1],
                        h = Object(Pt.b)().t,
                        v = Object(Sn.default)(new Date, "MMM d, yyyy"),
                        k = Object(o.useMemo)((function() { return n ? n.map((function(e) { return { time: Object(wn.a)(e.date), value: e.liquidityUSD } })) : [] }), [n]),
                        y = Object(o.useMemo)((function() { return n ? n.map((function(e) { return { time: Object(wn.a)(e.date), value: e.volumeUSD } })) : [] }), [n]);
                    return Object(_t.jsxs)(Mt.t, {
                        children: [Object(_t.jsxs)(Er.b, { children: [Object(_t.jsx)(Er.a, { isActive: s === Fe.VOLUME, onClick: function() { return l(Fe.VOLUME) }, children: Object(_t.jsx)(Mt.Qb, { children: h("Volume") }) }), Object(_t.jsx)(Er.a, { isActive: s === Fe.LIQUIDITY, onClick: function() { return l(Fe.LIQUIDITY) }, children: Object(_t.jsx)(Mt.Qb, { children: h("Liquidity") }) }), "token" === t && Object(_t.jsx)(Er.a, { isActive: s === Fe.PRICE, onClick: function() { return l(Fe.PRICE) }, children: Object(_t.jsx)(Mt.Qb, { children: h("Price") }) })] }), Object(_t.jsxs)(Mt.R, {
                            flexDirection: "column",
                            px: "24px",
                            pt: "24px",
                            children: [function() {
                                var e = null;
                                if (j) e = cn(j);
                                else if (s === Fe.VOLUME && y.length > 0) {
                                    var t;
                                    e = cn(null === (t = y[y.length - 1]) || void 0 === t ? void 0 : t.value)
                                } else if (s === Fe.LIQUIDITY && k.length > 0) {
                                    var n;
                                    e = cn(null === (n = k[k.length - 1]) || void 0 === n ? void 0 : n.value)
                                } else s === Fe.PRICE && (null === r || void 0 === r ? void 0 : r.priceUSD) && (e = cn(r.priceUSD));
                                return e ? Object(_t.jsxs)(Mt.Qb, { fontSize: "24px", bold: !0, children: ["$", e] }) : Object(_t.jsx)(Mt.Db, { height: "36px", width: "128px" })
                            }(), Object(_t.jsx)(Mt.Qb, { small: !0, color: "secondary", children: m || v })]
                        }), Object(_t.jsx)(Mt.m, { px: "24px", height: "token" === t ? "250px" : "335px", children: s === Fe.LIQUIDITY ? Object(_t.jsx)(En, { data: k, setHoverValue: p, setHoverDate: O }) : s === Fe.VOLUME ? Object(_t.jsx)(gr, { data: y, setHoverValue: p, setHoverDate: O }) : s === Fe.PRICE ? Object(_t.jsx)(Rr, { data: c, setValue: p, setLabel: O }) : null })]
                    })
                },
                Zr = Nt.e.div(Vr || (Vr = Object(j.a)(["\n  display: grid;\n  grid-template-columns: 300px 1fr;\n  grid-gap: 1em;\n  margin-top: 16px;\n  @media screen and (max-width: 800px) {\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 1fr;\n  }\n"]))),
                ec = Object(Nt.e)(Mt.R)(Wr || (Wr = Object(j.a)(["\n  padding: 8px 0px;\n  margin-right: 16px;\n  :hover {\n    cursor: pointer;\n    opacity: 0.6;\n  }\n"]))),
                tc = Object(Nt.e)(Mt.R)(Hr || (Hr = Object(j.a)(["\n  border: 1px solid ", ";\n  background-color: ", ";\n  padding: 16px;\n  flex-direction: column;\n  gap: 8px;\n  margin-top: 8px;\n  border-radius: 16px;\n  max-width: 280px;\n"])), (function(e) { return e.theme.colors.cardBorder }), (function(e) { return e.theme.colors.background })),
                nc = function(e) {
                    var t = e.match.params.address,
                        n = Object(Mt.jc)(),
                        r = n.isXs,
                        c = n.isSm,
                        a = Object(Pt.b)().t,
                        i = Object(o.useState)(0),
                        s = Object(b.a)(i, 2),
                        l = s[0],
                        j = s[1],
                        p = Object(Mt.mc)(a("Based on last 7 days' performance. Does not account for impermanent loss"), {}),
                        f = p.tooltip,
                        x = p.tooltipVisible,
                        m = p.targetRef;
                    Object(o.useEffect)((function() { window.scrollTo(0, 0) }), []);
                    var O = t.toLowerCase(),
                        h = Ft([O])[0],
                        v = function(e) {
                            var t = Object(at.b)(),
                                n = Object(at.c)((function(t) { return t.info.pools.byAddress[e] })),
                                r = null === n || void 0 === n ? void 0 : n.chartData,
                                c = Object(o.useState)(!1),
                                a = Object(b.a)(c, 2),
                                i = a[0],
                                s = a[1];
                            return Object(o.useEffect)((function() {
                                r || i || function() {
                                    var n = Object(d.a)(u.a.mark((function n() {
                                        var r, c, a;
                                        return u.a.wrap((function(n) {
                                            for (;;) switch (n.prev = n.next) {
                                                case 0:
                                                    return n.next = 2, dt(e);
                                                case 2:
                                                    r = n.sent, c = r.error, a = r.data, !c && a && t(Object(St.d)({ poolAddress: e, chartData: a })), c && s(c);
                                                case 7:
                                                case "end":
                                                    return n.stop()
                                            }
                                        }), n)
                                    })));
                                    return function() { return n.apply(this, arguments) }
                                }()()
                            }), [e, t, i, r]), r
                        }(O),
                        k = function(e) {
                            var t = Object(at.b)(),
                                n = Object(at.c)((function(t) { return t.info.pools.byAddress[e] })),
                                r = null === n || void 0 === n ? void 0 : n.transactions,
                                c = Object(o.useState)(!1),
                                a = Object(b.a)(c, 2),
                                i = a[0],
                                s = a[1];
                            return Object(o.useEffect)((function() {
                                r || i || function() {
                                    var n = Object(d.a)(u.a.mark((function n() {
                                        var r, c, a;
                                        return u.a.wrap((function(n) {
                                            for (;;) switch (n.prev = n.next) {
                                                case 0:
                                                    return n.next = 2, pt(e);
                                                case 2:
                                                    r = n.sent, c = r.error, a = r.data, c ? s(!0) : t(Object(St.f)({ poolAddress: e, transactions: a }));
                                                case 6:
                                                case "end":
                                                    return n.stop()
                                            }
                                        }), n)
                                    })));
                                    return function() { return n.apply(this, arguments) }
                                }()()
                            }), [e, t, i, r]), r
                        }(O),
                        y = Object(an.u)(),
                        g = Object(b.a)(y, 2),
                        D = g[0],
                        S = g[1];
                    return Object(_t.jsx)(Cn.b, { symbol: h ? "".concat(null === h || void 0 === h ? void 0 : h.token0.symbol, " / ").concat(null === h || void 0 === h ? void 0 : h.token1.symbol) : null, children: h ? Object(_t.jsxs)(_t.Fragment, { children: [Object(_t.jsxs)(Mt.R, { justifyContent: "space-between", mb: "16px", flexDirection: ["column", "column", "row"], children: [Object(_t.jsxs)(Mt.n, { mb: "32px", children: [Object(_t.jsx)(It.a, { to: "/info", children: Object(_t.jsx)(Mt.Qb, { color: "primary", children: a("Info") }) }), Object(_t.jsx)(It.a, { to: "/info/pools", children: Object(_t.jsx)(Mt.Qb, { color: "primary", children: a("Pools") }) }), Object(_t.jsx)(Mt.R, { children: Object(_t.jsx)(Mt.Qb, { mr: "8px", children: "".concat(h.token0.symbol, " / ").concat(h.token1.symbol) }) })] }), Object(_t.jsxs)(Mt.R, { justifyContent: [null, null, "flex-end"], mt: ["8px", "8px", 0], children: [Object(_t.jsx)(Mt.ab, { mr: "8px", href: Object(st.e)(O, "address"), children: a("View on BriseScan") }), Object(_t.jsx)(un, { fill: D.includes(O), onClick: function() { return S(O) } })] })] }), Object(_t.jsxs)(Mt.R, { flexDirection: "column", children: [Object(_t.jsxs)(Mt.R, { alignItems: "center", mb: ["8px", null], children: [Object(_t.jsx)(tn, { address0: h.token0.address, address1: h.token1.address, size: 32 }), Object(_t.jsx)(Mt.Qb, { ml: "38px", bold: !0, fontSize: r || c ? "24px" : "40px", id: "info-pool-pair-title", children: "".concat(h.token0.symbol, " / ").concat(h.token1.symbol) })] }), Object(_t.jsxs)(Mt.R, { justifyContent: "space-between", flexDirection: ["column", "column", "column", "row"], children: [Object(_t.jsxs)(Mt.R, { flexDirection: ["column", "column", "row"], mb: ["8px", "8px", null], children: [Object(_t.jsx)(It.a, { to: "/info/token/".concat(h.token0.address), children: Object(_t.jsxs)(ec, { children: [Object(_t.jsx)(Zt, { address: h.token0.address, size: "24px" }), Object(_t.jsx)(Mt.Qb, { fontSize: "16px", ml: "4px", style: { whiteSpace: "nowrap" }, width: "fit-content", children: "1 ".concat(h.token0.symbol, " =  ").concat(cn(h.token1Price, { notation: "standard", displayThreshold: .001, tokenPrecision: !0 }), " ").concat(h.token1.symbol) })] }) }), Object(_t.jsx)(It.a, { to: "/info/token/".concat(h.token1.address), children: Object(_t.jsxs)(ec, { ml: [null, null, "10px"], children: [Object(_t.jsx)(Zt, { address: h.token1.address, size: "24px" }), Object(_t.jsx)(Mt.Qb, { fontSize: "16px", ml: "4px", style: { whiteSpace: "nowrap" }, width: "fit-content", children: "1 ".concat(h.token1.symbol, " =  ").concat(cn(h.token0Price, { notation: "standard", displayThreshold: .001, tokenPrecision: !0 }), " ").concat(h.token0.symbol) })] }) })] }), Object(_t.jsxs)(Mt.R, { children: [Object(_t.jsx)(It.a, { to: "/add/".concat(h.token0.address, "/").concat(h.token1.address), children: Object(_t.jsx)(Mt.p, { mr: "8px", variant: "secondary", children: a("Add Liquidity") }) }), Object(_t.jsx)(It.a, { to: "/swap?inputCurrency=".concat(h.token0.address, "&outputCurrency=").concat(h.token1.address), children: Object(_t.jsx)(Mt.p, { children: a("Trade") }) })] })] })] }), Object(_t.jsxs)(Zr, { children: [Object(_t.jsxs)(Mt.m, { children: [Object(_t.jsx)(Mt.t, { children: Object(_t.jsxs)(Mt.m, { p: "24px", children: [Object(_t.jsxs)(Mt.R, { justifyContent: "space-between", children: [Object(_t.jsxs)(Mt.R, { flex: "1", flexDirection: "column", children: [Object(_t.jsx)(Mt.Qb, { color: "secondary", bold: !0, fontSize: "12px", textTransform: "uppercase", children: a("Liquidity") }), Object(_t.jsxs)(Mt.Qb, { fontSize: "24px", bold: !0, children: ["$", cn(h.liquidityUSD)] }), Object(_t.jsx)(Wn, { value: h.liquidityUSDChange })] }), Object(_t.jsxs)(Mt.R, { flex: "1", flexDirection: "column", children: [Object(_t.jsx)(Mt.Qb, { color: "secondary", bold: !0, fontSize: "12px", textTransform: "uppercase", children: a("LP reward APR") }), Object(_t.jsxs)(Mt.Qb, { fontSize: "24px", bold: !0, children: [cn(h.lpApr7d), "%"] }), Object(_t.jsxs)(Mt.R, { alignItems: "center", children: [Object(_t.jsx)("span", { ref: m, children: Object(_t.jsx)(Mt.U, { color: "textSubtle" }) }), Object(_t.jsx)(Mt.Qb, { ml: "4px", fontSize: "12px", color: "textSubtle", children: a("7D performance") }), x && f] })] })] }), Object(_t.jsx)(Mt.Qb, { color: "secondary", bold: !0, mt: "24px", fontSize: "12px", textTransform: "uppercase", children: a("Total Tokens Locked") }), Object(_t.jsxs)(tc, { children: [Object(_t.jsxs)(Mt.R, { justifyContent: "space-between", children: [Object(_t.jsxs)(Mt.R, { children: [Object(_t.jsx)(Zt, { address: h.token0.address, size: "24px" }), Object(_t.jsx)(Mt.Qb, { small: !0, color: "textSubtle", ml: "8px", children: h.token0.symbol })] }), Object(_t.jsx)(Mt.Qb, { small: !0, children: cn(h.liquidityToken0) })] }), Object(_t.jsxs)(Mt.R, { justifyContent: "space-between", children: [Object(_t.jsxs)(Mt.R, { children: [Object(_t.jsx)(Zt, { address: h.token1.address, size: "24px" }), Object(_t.jsx)(Mt.Qb, { small: !0, color: "textSubtle", ml: "8px", children: h.token1.symbol })] }), Object(_t.jsx)(Mt.Qb, { small: !0, children: cn(h.liquidityToken1) })] })] })] }) }), Object(_t.jsx)(Mt.t, { mt: "16px", children: Object(_t.jsxs)(Mt.R, { flexDirection: "column", p: "24px", children: [Object(_t.jsxs)(Mt.q, { activeIndex: l, onItemClick: function(e) { return j(e) }, scale: "sm", variant: "subtle", children: [Object(_t.jsx)(Mt.r, { width: "100%", children: a("24H") }), Object(_t.jsx)(Mt.r, { width: "100%", children: a("7D") })] }), Object(_t.jsxs)(Mt.R, { mt: "24px", children: [Object(_t.jsxs)(Mt.R, { flex: "1", flexDirection: "column", children: [Object(_t.jsx)(Mt.Qb, { color: "secondary", fontSize: "12px", bold: !0, textTransform: "uppercase", children: a(l ? "Volume 7D" : "Volume 24H") }), Object(_t.jsxs)(Mt.Qb, { fontSize: "24px", bold: !0, children: ["$", cn(l ? h.volumeUSDWeek : h.volumeUSD)] }), Object(_t.jsx)(Wn, { value: l ? h.volumeUSDChangeWeek : h.volumeUSDChange })] }), Object(_t.jsxs)(Mt.R, { flex: "1", flexDirection: "column", children: [Object(_t.jsx)(Mt.Qb, { color: "secondary", fontSize: "12px", bold: !0, textTransform: "uppercase", children: a(l ? "LP reward fees 7D" : "LP reward fees 24H") }), Object(_t.jsxs)(Mt.Qb, { fontSize: "24px", bold: !0, children: ["$", cn(l ? h.lpFees7d : h.lpFees24h)] }), Object(_t.jsx)(Mt.Qb, { color: "textSubtle", fontSize: "12px", children: a("out of $%totalFees% total fees", { totalFees: cn(l ? h.totalFees7d : h.totalFees24h) }) })] })] })] }) })] }), Object(_t.jsx)(Jr, { variant: "pool", chartData: v })] }), Object(_t.jsx)(Mt.T, { mb: "16px", mt: "40px", scale: "lg", children: a("Transactions") }), Object(_t.jsx)($r, { transactions: k })] }) : Object(_t.jsx)(Mt.R, { mt: "80px", justifyContent: "center", children: Object(_t.jsx)(Mt.Fb, {}) }) })
                },
                rc = Object(Nt.e)(It.a)(_r || (_r = Object(j.a)(["\n  display: inline-block;\n  min-width: 190px;\n  margin-left: 16px;\n  :hover {\n    cursor: pointer;\n    opacity: 0.6;\n  }\n"]))),
                cc = Object(Nt.e)(Mt.m)(Yr || (Yr = Object(j.a)(["\n  border: 1px solid ", ";\n  border-radius: ", ";\n  padding: 16px;\n"])), (function(e) { return e.theme.colors.cardBorder }), (function(e) { return e.theme.radii.card })),
                ac = Nt.e.div(Kr || (Kr = Object(j.a)(["\n  width: 100%;\n  overflow-x: auto;\n  padding: 16px 0;\n  white-space: nowrap;\n  ::-webkit-scrollbar {\n    display: none;\n  }\n"]))),
                oc = function(e) { var t = e.tokenData; return Object(_t.jsx)(rc, { to: "/info/token/".concat(t.address), children: Object(_t.jsx)(cc, { children: Object(_t.jsxs)(Mt.R, { children: [Object(_t.jsx)(Mt.m, { width: "32px", height: "32px", children: Object(_t.jsx)(Zt, { address: t.address, size: "32px" }) }), Object(_t.jsxs)(Mt.m, { ml: "16px", children: [Object(_t.jsx)(Mt.Qb, { children: t.symbol }), Object(_t.jsxs)(Mt.R, { alignItems: "center", children: [Object(_t.jsxs)(Mt.Qb, { fontSize: "14px", mr: "6px", lineHeight: "16px", children: ["$", cn(t.priceUSD)] }), Object(_t.jsx)(Wn, { fontSize: "14px", value: t.priceUSDChange })] })] })] }) }) }) },
                ic = function() {
                    var e = At(),
                        t = Object(Pt.b)().t,
                        n = Object(o.useMemo)((function() {
                            return Object.values(e).sort((function(e, t) {
                                var n = e.data,
                                    r = t.data;
                                return n && r ? Math.abs(null === n || void 0 === n ? void 0 : n.priceUSDChange) > Math.abs(null === r || void 0 === r ? void 0 : r.priceUSDChange) ? -1 : 1 : -1
                            })).slice(0, Math.min(20, Object.values(e).length))
                        }), [e]),
                        r = Object(o.useRef)(null),
                        c = Object(o.useState)(!1),
                        a = Object(b.a)(c, 2),
                        i = a[0],
                        s = a[1];
                    return Object(o.useEffect)((function() {!i && r && r.current && (setInterval((function() { r.current && r.current.scrollLeft !== r.current.scrollWidth && r.current.scrollTo(r.current.scrollLeft + 1, 0) }), 30), s(!0)) }), [r, i]), 0 !== n.length && n.some((function(e) { return e.data })) ? Object(_t.jsxs)(Mt.t, { my: "16px", children: [Object(_t.jsx)(Mt.Qb, { ml: "16px", mt: "8px", children: t("Top Movers") }), Object(_t.jsx)(ac, { ref: r, children: n.map((function(e) { var t; return e.data ? Object(_t.jsx)(oc, { tokenData: e.data }, "top-card-token-".concat(null === (t = e.data) || void 0 === t ? void 0 : t.address)) : null })) })] }) : null
                },
                sc = function() {
                    var e = Object(Pt.b)().t;
                    Object(o.useEffect)((function() { window.scrollTo(0, 0) }), []);
                    var t = At(),
                        n = Object(o.useMemo)((function() { return Object.values(t).map((function(e) { return e.data })).filter((function(e) { return e })) }), [t]),
                        r = Object(an.v)(),
                        c = Object(b.a)(r, 1)[0],
                        a = Lt(c);
                    return Object(_t.jsxs)(Cn.b, { children: [Object(_t.jsx)(Mt.T, { scale: "lg", mb: "16px", children: e("Your Watchlist") }), c.length > 0 ? Object(_t.jsx)(ir, { tokenDatas: a }) : Object(_t.jsx)(Mt.t, { children: Object(_t.jsx)(Mt.Qb, { py: "16px", px: "24px", children: e("Saved tokens will appear here") }) }), Object(_t.jsx)(ic, {}), Object(_t.jsx)(Mt.T, { scale: "lg", mt: "40px", mb: "16px", id: "info-tokens-title", children: e("All Tokens") }), Object(_t.jsx)(ir, { tokenDatas: n })] })
                },
                lc = n(61),
                uc = function(e) {
                    var t = Object(o.useState)(void 0),
                        n = Object(b.a)(t, 2),
                        r = n[0],
                        c = n[1];
                    return Object(o.useEffect)((function() {
                        e && function() {
                            var t = Object(d.a)(u.a.mark((function t() {
                                var n;
                                return u.a.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, fetch("".concat("https://3rdparty-apis.coinmarketcap.com/v1/cryptocurrency/contract?address=").concat(e));
                                        case 2:
                                            200 === (n = t.sent).status && n.json().then((function(e) {
                                                var t = e.data;
                                                c(t.url)
                                            }));
                                        case 4:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })));
                            return function() { return t.apply(this, arguments) }
                        }()()
                    }), [e]), r
                },
                dc = Nt.e.div(Gr || (Gr = Object(j.a)(["\n  margin-top: 16px;\n  display: grid;\n  grid-template-columns: 260px 1fr;\n  grid-gap: 1em;\n  @media screen and (max-width: 800px) {\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 1fr;\n  }\n"]))),
                bc = Object(Nt.e)(Mt.Z)(Xr || (Xr = Object(j.a)(["\n  width: 24px;\n  height: 24px;\n  margin-right: 8px;\n\n  & :hover {\n    opacity: 0.8;\n  }\n"]))),
                jc = { weeks: 1 },
                pc = function(e) {
                    var t = e.match.params.address,
                        n = Object(Mt.jc)(),
                        r = n.isXs,
                        c = n.isSm,
                        a = Object(Pt.b)().t;
                    Object(o.useEffect)((function() { window.scrollTo(0, 0) }), []);
                    var i = t.toLowerCase(),
                        s = uc(i),
                        l = function(e) {
                            var t, n = At(),
                                r = qt();
                            if (e && Object(st.h)(e)) return n[e] || r([e]), null === (t = n[e]) || void 0 === t ? void 0 : t.data
                        }(i),
                        j = function(e) {
                            var t = Object(at.b)(),
                                n = Object(at.c)((function(t) { return t.info.tokens.byAddress[e] })).poolAddresses,
                                r = Object(o.useState)(!1),
                                c = Object(b.a)(r, 2),
                                a = c[0],
                                i = c[1];
                            return Object(o.useEffect)((function() {
                                n || a || function() {
                                    var n = Object(d.a)(u.a.mark((function n() {
                                        var r, c, a;
                                        return u.a.wrap((function(n) {
                                            for (;;) switch (n.prev = n.next) {
                                                case 0:
                                                    return n.next = 2, Dt(e);
                                                case 2:
                                                    r = n.sent, c = r.error, a = r.addresses, !c && a && t(Object(St.c)({ tokenAddress: e, poolAddresses: a })), c && i(c);
                                                case 7:
                                                case "end":
                                                    return n.stop()
                                            }
                                        }), n)
                                    })));
                                    return function() { return n.apply(this, arguments) }
                                }()()
                            }), [e, t, a, n]), n
                        }(i),
                        p = Ft(null !== j && void 0 !== j ? j : []),
                        f = function(e) {
                            var t = Object(at.b)(),
                                n = Object(at.c)((function(t) { return t.info.tokens.byAddress[e] })).transactions,
                                r = Object(o.useState)(!1),
                                c = Object(b.a)(r, 2),
                                a = c[0],
                                i = c[1];
                            return Object(o.useEffect)((function() {
                                n || a || function() {
                                    var n = Object(d.a)(u.a.mark((function n() {
                                        var r, c, a;
                                        return u.a.wrap((function(n) {
                                            for (;;) switch (n.prev = n.next) {
                                                case 0:
                                                    return n.next = 2, ht(e);
                                                case 2:
                                                    r = n.sent, c = r.error, a = r.data, c ? i(!0) : a && t(Object(St.m)({ tokenAddress: e, transactions: a }));
                                                case 6:
                                                case "end":
                                                    return n.stop()
                                            }
                                        }), n)
                                    })));
                                    return function() { return n.apply(this, arguments) }
                                }()()
                            }), [e, t, a, n]), n
                        }(i),
                        x = function(e) {
                            var t = Object(at.b)(),
                                n = Object(at.c)((function(t) { return t.info.tokens.byAddress[e] })).chartData,
                                r = Object(o.useState)(!1),
                                c = Object(b.a)(r, 2),
                                a = c[0],
                                i = c[1];
                            return Object(o.useEffect)((function() {
                                n || a || function() {
                                    var n = Object(d.a)(u.a.mark((function n() {
                                        var r, c, a;
                                        return u.a.wrap((function(n) {
                                            for (;;) switch (n.prev = n.next) {
                                                case 0:
                                                    return n.next = 2, mt(e);
                                                case 2:
                                                    r = n.sent, c = r.error, a = r.data, !c && a && t(Object(St.j)({ tokenAddress: e, chartData: a })), c && i(c);
                                                case 7:
                                                case "end":
                                                    return n.stop()
                                            }
                                        }), n)
                                    })));
                                    return function() { return n.apply(this, arguments) }
                                }()()
                            }), [e, t, a, n]), n
                        }(i),
                        m = function(e, t, n) {
                            var r = Object(at.b)(),
                                c = Object(at.c)((function(t) { return t.info.tokens.byAddress[e] })),
                                a = c.priceData[t],
                                i = Object(o.useState)(!1),
                                s = Object(b.a)(i, 2),
                                l = s[0],
                                j = s[1],
                                p = c.priceData.oldestFetchedTimestamp,
                                f = 1e3 * Object(C.a)(new Date),
                                x = Object(C.a)(Object(ot.a)(Object(it.a)(f, n)));
                            return Object(o.useEffect)((function() {
                                a || l || function() {
                                    var n = Object(d.a)(u.a.mark((function n() {
                                        var c, a, o;
                                        return u.a.wrap((function(n) {
                                            for (;;) switch (n.prev = n.next) {
                                                case 0:
                                                    return n.next = 2, yt(e, t, x);
                                                case 2:
                                                    c = n.sent, a = c.data, o = c.error, a && r(Object(St.l)({ tokenAddress: e, secondsInterval: t, priceData: a, oldestFetchedTimestamp: x })), o && j(!0);
                                                case 7:
                                                case "end":
                                                    return n.stop()
                                            }
                                        }), n)
                                    })));
                                    return function() { return n.apply(this, arguments) }
                                }()()
                            }), [e, r, l, t, p, a, x, n]), a
                        }(i, 3600, jc),
                        O = Object(o.useMemo)((function() { if (m && l && m.length > 0) return [].concat(Object(Pe.a)(m), [{ time: (new Date).getTime() / 1e3, open: m[m.length - 1].close, close: null === l || void 0 === l ? void 0 : l.priceUSD, high: null === l || void 0 === l ? void 0 : l.priceUSD, low: m[m.length - 1].close }]) }), [m, l]),
                        h = Object(an.v)(),
                        v = Object(b.a)(h, 2),
                        k = v[0],
                        y = v[1];
                    return Object(_t.jsx)(Cn.b, { symbol: null === l || void 0 === l ? void 0 : l.symbol, children: l ? l.exists ? Object(_t.jsxs)(_t.Fragment, { children: [Object(_t.jsxs)(Mt.R, { justifyContent: "space-between", mb: "24px", flexDirection: ["column", "column", "row"], children: [Object(_t.jsxs)(Mt.n, { mb: "32px", children: [Object(_t.jsx)(It.a, { to: "/info", children: Object(_t.jsx)(Mt.Qb, { color: "primary", children: a("Info") }) }), Object(_t.jsx)(It.a, { to: "/info/tokens", children: Object(_t.jsx)(Mt.Qb, { color: "primary", children: a("Tokens") }) }), Object(_t.jsxs)(Mt.R, { children: [Object(_t.jsx)(Mt.Qb, { mr: "8px", children: l.symbol }), Object(_t.jsx)(Mt.Qb, { children: "(".concat(Object(Sr.a)(i), ")") })] })] }), Object(_t.jsxs)(Mt.R, { justifyContent: [null, null, "flex-end"], mt: ["8px", "8px", 0], children: [Object(_t.jsx)(Mt.ab, { mr: "8px", color: "primary", href: Object(st.e)(i, "address"), children: a("View on BriseScan") }), s && Object(_t.jsx)(bc, { href: s, rel: "noopener noreferrer nofollow", target: "_blank", children: Object(_t.jsx)(Mt.X, { src: "/images/CMC-logo.svg", height: 22, width: 22, alt: a("View token on CoinMarketCap") }) }), Object(_t.jsx)(un, { fill: k.includes(i), onClick: function() { return y(i) } })] })] }), Object(_t.jsxs)(Mt.R, { justifyContent: "space-between", flexDirection: ["column", "column", "column", "row"], children: [Object(_t.jsxs)(Mt.R, { flexDirection: "column", mb: ["8px", null], children: [Object(_t.jsxs)(Mt.R, { alignItems: "center", children: [Object(_t.jsx)(Zt, { size: "32px", address: i }), Object(_t.jsx)(Mt.Qb, { ml: "12px", bold: !0, lineHeight: "0.7", fontSize: r || c ? "24px" : "40px", id: "info-token-name-title", children: l.name }), Object(_t.jsxs)(Mt.Qb, { ml: "12px", lineHeight: "1", color: "textSubtle", fontSize: r || c ? "14px" : "20px", children: ["(", l.symbol, ")"] })] }), Object(_t.jsxs)(Mt.R, { mt: "8px", ml: "46px", alignItems: "center", children: [Object(_t.jsxs)(Mt.Qb, { mr: "16px", bold: !0, fontSize: "24px", children: ["$", cn(l.priceUSD, { notation: "standard" })] }), Object(_t.jsx)(Wn, { value: l.priceUSDChange, fontWeight: 600 })] })] }), Object(_t.jsxs)(Mt.R, { children: [Object(_t.jsx)(It.a, { to: "/add/".concat(i), children: Object(_t.jsx)(Mt.p, { mr: "8px", variant: "secondary", children: a("Add Liquidity") }) }), Object(_t.jsx)(It.a, { to: "/swap?inputCurrency=".concat(i), children: Object(_t.jsx)(Mt.p, { children: a("Trade") }) })] })] }), Object(_t.jsxs)(dc, { children: [Object(_t.jsx)(Mt.t, { children: Object(_t.jsxs)(Mt.m, { p: "24px", children: [Object(_t.jsx)(Mt.Qb, { bold: !0, small: !0, color: "secondary", fontSize: "12px", textTransform: "uppercase", children: a("Liquidity") }), Object(_t.jsxs)(Mt.Qb, { bold: !0, fontSize: "24px", children: ["$", cn(l.liquidityUSD)] }), Object(_t.jsx)(Wn, { value: l.liquidityUSDChange }), Object(_t.jsx)(Mt.Qb, { mt: "24px", bold: !0, color: "secondary", fontSize: "12px", textTransform: "uppercase", children: a("Volume 24H") }), Object(_t.jsxs)(Mt.Qb, { bold: !0, fontSize: "24px", textTransform: "uppercase", children: ["$", cn(l.volumeUSD)] }), Object(_t.jsx)(Wn, { value: l.volumeUSDChange }), Object(_t.jsx)(Mt.Qb, { mt: "24px", bold: !0, color: "secondary", fontSize: "12px", textTransform: "uppercase", children: a("Volume 7D") }), Object(_t.jsxs)(Mt.Qb, { bold: !0, fontSize: "24px", children: ["$", cn(l.volumeUSDWeek)] }), Object(_t.jsx)(Mt.Qb, { mt: "24px", bold: !0, color: "secondary", fontSize: "12px", textTransform: "uppercase", children: a("Transactions 24H") }), Object(_t.jsx)(Mt.Qb, { bold: !0, fontSize: "24px", children: cn(l.txCount, { isInteger: !0 }) })] }) }), Object(_t.jsx)(Jr, { variant: "token", chartData: x, tokenData: l, tokenPriceData: O })] }), Object(_t.jsx)(Mt.T, { scale: "lg", mb: "16px", mt: "40px", children: a("Pools") }), Object(_t.jsx)(Or, { poolDatas: p }), Object(_t.jsx)(Mt.T, { scale: "lg", mb: "16px", mt: "40px", children: a("Transactions") }), Object(_t.jsx)($r, { transactions: f })] }) : Object(_t.jsx)(Mt.t, { children: Object(_t.jsx)(Mt.m, { p: "16px", children: Object(_t.jsxs)(Mt.Qb, { children: [a("No pool has been created with this token yet. Create one"), Object(_t.jsx)(It.a, { style: { display: "inline", marginLeft: "6px" }, to: "/add/".concat(i), children: a("here.") })] }) }) }) : Object(_t.jsx)(Mt.R, { mt: "80px", justifyContent: "center", children: Object(_t.jsx)(Mt.Fb, {}) }) })
                },
                fc = function(e) { var t = e.match.params.address; return Object(lc.isAddress)(t.toLowerCase()) ? Object(_t.jsx)(pc, Object(w.a)({}, e)) : Object(_t.jsx)(s.a, { to: "/" }) };
            t.default = function() { return Object(_t.jsxs)(_t.Fragment, { children: [Object(_t.jsx)(zt, {}), Object(_t.jsx)($t, {}), Object(_t.jsx)(Bt, {}), Object(_t.jsx)(Dn, {}), Object(_t.jsx)(s.b, { path: "/info", exact: !0, children: Object(_t.jsx)(Nr, {}) }), Object(_t.jsx)(s.b, { path: "/info/pools", exact: !0, children: Object(_t.jsx)(Ir, {}) }), Object(_t.jsx)(s.b, { path: "/info/tokens", exact: !0, children: Object(_t.jsx)(sc, {}) }), Object(_t.jsx)(s.b, { exact: !0, path: ["/info/tokens/:address", "/info/token/:address"], component: fc }), Object(_t.jsx)(s.b, { exact: !0, path: ["/info/pools/:address", "/info/pool/:address", "/info/pair/:address"], component: nc })] }) }
        },
        832: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() { return b })), n.d(t, "b", (function() { return j }));
            var r, c, a, o = n(8),
                i = (n(1), n(2)),
                s = n(5),
                l = n(0),
                u = Object(s.e)(i.R)(r || (r = Object(o.a)(["\n  overflow-x: scroll;\n  padding: 0;\n  border-radius: 24px 24px 0 0;\n  ::-webkit-scrollbar {\n    display: none;\n  }\n  scrollbar-width: none; /* Firefox */\n"]))),
                d = Object(s.e)(i.R)(c || (c = Object(o.a)(["\n  justify-content: space-between;\n  background-color: ", ";\n  width: 100%;\n"])), (function(e) { return e.theme.colors.input })),
                b = s.e.button(a || (a = Object(o.a)(["\n  display: inline-flex;\n  justify-content: center;\n  cursor: pointer;\n  flex: 1;\n  border: 0;\n  outline: 0;\n  padding: 16px;\n  margin: 0;\n  border-radius: 24px 24px 0 0;\n  font-size: 16px;\n  font-weight: 600;\n  color: ", ";\n  background-color: ", ";\n"])), (function(e) { var t = e.theme; return e.isActive ? t.colors.text : t.colors.textSubtle }), (function(e) { var t = e.theme; return e.isActive ? t.card.background : t.colors.input })),
                j = function(e) { var t = e.children; return Object(l.jsx)(u, { p: ["0 4px", "0 16px"], children: Object(l.jsx)(d, { children: t }) }) }
        }
    }
]);
//# sourceMappingURL=12.0f150f79.chunk.js.map