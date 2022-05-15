(this["webpackJsonppancake-frontend"] = this["webpackJsonppancake-frontend"] || []).push([
    [7], {
        1255: function(e, t, n) {
            "use strict";
            n.r(t);
            var c, r, i, a = n(1),
                o = n(13),
                s = n(75),
                l = n(83),
                u = n(2),
                b = n(245),
                d = n(8),
                j = n(5),
                m = n(0),
                p = j.e.div(c || (c = Object(d.a)(["\n  background: ", ";\n  padding-bottom: 40px;\n  padding-top: 40px;\n"])), (function(e) { var t = e.theme; return t.isDark ? "repeating-linear-gradient(to right, #332453, #332453 40px, #281D44 40px, #281D44 80px)" : "repeating-linear-gradient(to right, #21d4e2, #21d4e2 40px, #53dee9 40px, #53dee9 80px)" })),
                f = j.e.div(r || (r = Object(d.a)(["\n  background-image: url('/images/curtain-bottom-", ".png');\n  background-repeat: repeat-x;\n  background-size: contain;\n  height: 20px;\n"])), (function(e) { return e.theme.isDark ? "dark" : "light" })),
                O = function() { var e = Object(o.b)().t; return Object(m.jsxs)(u.m, { mb: "32px", children: [Object(m.jsx)(p, { children: Object(m.jsxs)(b.a, { children: [Object(m.jsx)(u.T, { as: "h1", scale: "xl", mb: "24px", children: e("IFO: Initial Farm Offerings") }), Object(m.jsx)(u.Qb, { bold: !0, fontSize: "20px", children: e("Buy new tokens with a brand new token sale model.") })] }) }), Object(m.jsx)(f, {})] }) },
                x = n(38),
                h = n(3),
                g = n.n(h),
                v = n(6),
                y = n(12),
                I = n(9),
                k = n(14),
                w = n.n(k),
                P = n(49),
                S = n(97),
                A = n(95),
                C = n(107),
                D = n(52),
                L = n(374),
                T = n(29),
                B = function(e, t, n) { return 0 === e ? "idle" : e < t ? "coming_soon" : e >= t && e <= n ? "live" : e > n ? "finished" : "idle" },
                E = function(e) { return { raisingAmountPool: e ? new w.a(e[0].toString()) : T.c, offeringAmountPool: e ? new w.a(e[1].toString()) : T.c, limitPerUserInLP: e ? new w.a(e[2].toString()) : T.c, hasTax: !!e && e[3], totalAmountPool: e ? new w.a(e[4].toString()) : T.c, sumTaxesOverflow: e ? new w.a(e[5].toString()) : T.c } },
                U = function(e) {
                    var t = e.address,
                        n = e.releaseBlockNumber,
                        c = Object(A.c)(e.currency.symbol),
                        r = Object(C.a)().fastRefresh,
                        i = Object(a.useState)({ status: "idle", blocksRemaining: 0, secondsUntilStart: 0, progress: 5, secondsUntilEnd: 0, poolBasic: { raisingAmountPool: T.c, offeringAmountPool: T.c, limitPerUserInLP: T.c, taxRate: 0, totalAmountPool: T.c, sumTaxesOverflow: T.c }, poolUnlimited: { raisingAmountPool: T.c, offeringAmountPool: T.c, limitPerUserInLP: T.c, taxRate: 0, totalAmountPool: T.c, sumTaxesOverflow: T.c }, startBlockNum: 0, endBlockNum: 0, numberPoints: 0 }),
                        o = Object(I.a)(i, 2),
                        s = o[0],
                        l = o[1],
                        u = Object(S.a)().currentBlock,
                        b = Object(a.useCallback)(Object(y.a)(g.a.mark((function e() {
                            var c, r, i, a, o, s, b, d, j, m, p, f, O, x, h, y, k, w;
                            return g.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return c = [{ address: t, name: "startBlock" }, { address: t, name: "endBlock" }, { address: t, name: "viewPoolInformation", params: [0] }, { address: t, name: "viewPoolInformation", params: [1] }, { address: t, name: "viewPoolTaxRateOverflow", params: [1] }, { address: t, name: "numberPoints" }], e.next = 3, Object(D.b)(L, c);
                                    case 3:
                                        r = e.sent, i = Object(I.a)(r, 6), a = i[0], o = i[1], s = i[2], b = i[3], d = i[4], j = i[5], m = E(s), p = E(b), f = a ? a[0].toNumber() : 0, O = o ? o[0].toNumber() : 0, x = d ? d[0].div(1e10).toNumber() : 0, h = B(u, f, O), y = O - f, k = O - u, w = u > f ? (u - f) / y * 100 : (u - n) / (f - n) * 100, l((function(e) { return Object(v.a)(Object(v.a)({}, e), {}, { secondsUntilEnd: k * P.h, secondsUntilStart: (f - u) * P.h, poolBasic: Object(v.a)(Object(v.a)({}, m), {}, { taxRate: 0 }), poolUnlimited: Object(v.a)(Object(v.a)({}, p), {}, { taxRate: x }), status: h, progress: w, blocksRemaining: k, startBlockNum: f, endBlockNum: O, numberPoints: j ? j[0].toNumber() : 0 }) }));
                                    case 21:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), [t, u, n]);
                    return Object(a.useEffect)((function() { b() }), [b, r]), Object(v.a)(Object(v.a)({}, s), {}, { currencyPriceInUSD: c, fetchIfoData: b })
                },
                R = n(18),
                F = n(42),
                N = n(44),
                Q = function(e, t, n) {
                    var c = Object(F.c)().account,
                        r = Object(a.useState)(T.c),
                        i = Object(I.a)(r, 2),
                        o = i[0],
                        s = i[1];
                    return Object(a.useEffect)((function() {
                        c && function() {
                            var n = Object(y.a)(g.a.mark((function n() {
                                var r;
                                return g.a.wrap((function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            return n.prev = 0, n.next = 3, e.allowance(c, t);
                                        case 3:
                                            r = n.sent, s(new w.a(r.toString())), n.next = 10;
                                            break;
                                        case 7:
                                            n.prev = 7, n.t0 = n.catch(0), console.error(n.t0);
                                        case 10:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n, null, [
                                    [0, 7]
                                ])
                            })));
                            return function() { return n.apply(this, arguments) }
                        }()()
                    }), [c, t, e, n]), o
                },
                _ = function(e) {
                    var t = Object(C.a)().fastRefresh,
                        n = Object(a.useState)({ poolBasic: { amountTokenCommittedInLP: T.c, offeringAmountInToken: T.c, refundingAmountInLP: T.c, taxAmountInLP: T.c, hasClaimed: !1, isPendingTx: !1 }, poolUnlimited: { amountTokenCommittedInLP: T.c, offeringAmountInToken: T.c, refundingAmountInLP: T.c, taxAmountInLP: T.c, hasClaimed: !1, isPendingTx: !1 } }),
                        c = Object(I.a)(n, 2),
                        r = c[0],
                        i = c[1],
                        o = e.address,
                        s = e.currency,
                        l = Object(F.c)().account,
                        u = Object(N.k)(o),
                        b = Object(N.h)(s.address),
                        d = Q(b, o),
                        j = Object(a.useCallback)(Object(y.a)(g.a.mark((function e() {
                            var t, n, c, r, a;
                            return g.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t = ["viewUserInfo", "viewUserOfferingAndRefundingAmountsForPools"].map((function(e) { return { address: o, name: e, params: [l, [0, 1]] } })), e.next = 3, Object(D.b)(L, t);
                                    case 3:
                                        n = e.sent, c = Object(I.a)(n, 2), r = c[0], a = c[1], i((function(e) { return Object(v.a)(Object(v.a)({}, e), {}, { poolBasic: Object(v.a)(Object(v.a)({}, e.poolBasic), {}, { amountTokenCommittedInLP: new w.a(r[0][0].toString()), offeringAmountInToken: new w.a(a[0][0][0].toString()), refundingAmountInLP: new w.a(a[0][0][1].toString()), taxAmountInLP: new w.a(a[0][0][2].toString()), hasClaimed: r[1][0] }), poolUnlimited: Object(v.a)(Object(v.a)({}, e.poolUnlimited), {}, { amountTokenCommittedInLP: new w.a(r[0][1].toString()), offeringAmountInToken: new w.a(a[0][1][0].toString()), refundingAmountInLP: new w.a(a[0][1][1].toString()), taxAmountInLP: new w.a(a[0][1][2].toString()), hasClaimed: r[1][1] }) }) }));
                                    case 8:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), [l, o]);
                    return Object(a.useEffect)((function() { l && j() }), [l, j, t]), Object(v.a)(Object(v.a)({}, r), {}, { allowance: d, contract: u, setPendingTx: function(e, t) { return i((function(n) { return Object(v.a)(Object(v.a)({}, n), {}, Object(R.a)({}, t, Object(v.a)(Object(v.a)({}, n[t]), {}, { isPendingTx: e }))) })) }, setIsClaimed: function(e) { i((function(t) { return Object(v.a)(Object(v.a)({}, t), {}, Object(R.a)({}, e, Object(v.a)(Object(v.a)({}, t[e]), {}, { hasClaimed: !0 }))) })) }, fetchIfoData: j })
                },
                G = n(80),
                W = n(92),
                q = n(96);
            ! function(e) { e.ENABLED = "enabled", e.DISABLED = "disabled", e.IS_ENABLING = "is_enabling" }(i || (i = {}));
            var Y, V, z, H, K, M, J, Z, X, $, ee, te, ne, ce, re = n(184),
                ie = n(51),
                ae = n(36),
                oe = n(30),
                se = n(248),
                le = ["userAmount", "totalAmount"],
                ue = function(e) {
                    var t = e.userAmount,
                        n = e.totalAmount,
                        c = Object(ie.a)(e, le),
                        r = Object(o.b)().t,
                        i = (n.isGreaterThan(0) ? t.div(n).times(100).toNumber() : T.c).toLocaleString(void 0, { maximumFractionDigits: 5 });
                    return Object(m.jsx)(u.Qb, Object(v.a)(Object(v.a)({ fontSize: "14px", color: "textSubtle" }, c), {}, { children: r("%num% of total", { num: i }) }))
                },
                be = function() { return Object(m.jsx)(u.Db, { height: "48px" }) },
                de = function() { return Object(m.jsxs)("div", { children: [Object(m.jsxs)(u.R, { justifyContent: "space-between", alignItems: "center", mb: "24px", children: [Object(m.jsx)(u.Db, { variant: "circle", width: "32px", height: "32px", mr: "16px" }), Object(m.jsx)(u.Db, { width: "90%" })] }), Object(m.jsxs)(u.R, { justifyContent: "space-between", alignItems: "center", children: [Object(m.jsx)(u.Db, { variant: "circle", width: "32px", height: "32px", mr: "16px" }), Object(m.jsx)(u.Db, { width: "90%" })] })] }) },
                je = function() { return Object(m.jsxs)("div", { children: [Object(m.jsx)(u.Db, { mb: "8px" }), Object(m.jsx)(u.Db, {})] }) },
                me = ["primaryToken", "secondaryToken", "children"],
                pe = function(e) {
                    var t = e.primaryToken,
                        n = e.secondaryToken,
                        c = e.children,
                        r = Object(ie.a)(e, me);
                    return Object(m.jsxs)(u.R, Object(v.a)(Object(v.a)({}, r), {}, { children: [t ? t && n ? Object(m.jsx)(se.b, { variant: "inverted", primaryToken: t, height: 32, width: 32, secondaryToken: n, mr: "16px" }) : Object(m.jsx)(se.a, { token: t, height: 32, width: 32, mr: "16px" }) : Object(m.jsx)(u.o, { width: 32, mr: "16px" }), Object(m.jsx)("div", { children: c })] }))
                },
                fe = function(e) { return Object(m.jsx)(pe, Object(v.a)({ primaryToken: ae.a.cake, secondaryToken: ae.a.wbnb }, e)) },
                Oe = function(e) { return Object(m.jsx)(u.Qb, Object(v.a)({ bold: !0, fontSize: "12px", color: "secondary", textTransform: "uppercase" }, e)) },
                xe = function(e) { return Object(m.jsx)(u.Qb, Object(v.a)({ bold: !0, fontSize: "20px", style: { wordBreak: "break-all" } }, e)) },
                he = function(e) {
                    var t = e.poolId,
                        n = e.ifo,
                        c = e.publicIfoData,
                        r = e.walletIfoData,
                        a = e.hasProfile,
                        s = e.isLoading,
                        l = e.onApprove,
                        b = e.enableStatus,
                        d = Object(F.c)().account,
                        j = Object(o.b)().t,
                        p = Object(u.mc)(j("Sorry, you didn\u2019t contribute enough LP tokens to meet the minimum threshold. You didn\u2019t buy anything in this sale, but you can still reclaim your LP tokens."), { placement: "bottom" }),
                        f = p.targetRef,
                        O = p.tooltip,
                        x = p.tooltipVisible,
                        h = c[t],
                        g = r[t],
                        v = n.currency,
                        y = n.token,
                        I = g.hasClaimed,
                        k = 100 * n[t].distributionRatio;
                    return Object(m.jsxs)(u.m, { pb: "24px", children: [x && O, s ? Object(m.jsx)(de, {}) : d && !a ? "finished" === c.status ? Object(m.jsx)(u.Qb, { textAlign: "center", children: j("Activate BriseSwap Profile to take part in next IFO\u2018s!") }) : Object(m.jsx)(u.Qb, { textAlign: "center", children: j("You need an active BriseSwap Profile to take part in an IFO!") }) : "coming_soon" === c.status ? Object(m.jsxs)(m.Fragment, { children: [Object(m.jsxs)(pe, { children: [Object(m.jsx)(Oe, { children: j("On sale") }), Object(m.jsx)(xe, { children: n[t].saleAmount })] }), Object(m.jsx)(u.Qb, { fontSize: "14px", color: "textSubtle", pl: "48px", children: j("%ratio%% of total sale", { ratio: k }) }), b !== i.ENABLED && d && Object(m.jsx)(u.p, { width: "100%", mt: "16px", onClick: l, isLoading: b === i.IS_ENABLING, endIcon: b === i.IS_ENABLING ? Object(m.jsx)(u.i, { spin: !0, color: "currentColor" }) : null, children: j("Enable") })] }) : "live" === c.status ? Object(m.jsxs)(m.Fragment, { children: [Object(m.jsxs)(fe, { mb: "24px", children: [Object(m.jsx)(Oe, { children: j("Your %symbol% committed", { symbol: v.symbol }) }), Object(m.jsx)(xe, { children: Object(oe.e)(g.amountTokenCommittedInLP, v.decimals) }), Object(m.jsx)(ue, { userAmount: g.amountTokenCommittedInLP, totalAmount: h.totalAmountPool })] }), Object(m.jsxs)(pe, { primaryToken: n.token, children: [Object(m.jsx)(Oe, { children: j("%symbol% to receive", { symbol: y.symbol }) }), Object(m.jsx)(xe, { children: Object(oe.e)(g.offeringAmountInToken, y.decimals) })] })] }) : "finished" === c.status ? g.amountTokenCommittedInLP.isEqualTo(0) ? Object(m.jsxs)(u.R, { flexDirection: "column", alignItems: "center", children: [Object(m.jsx)(u.o, { width: 80, mb: "16px" }), Object(m.jsx)(u.Qb, { children: j("You didn\u2019t participate in this sale!") })] }) : Object(m.jsxs)(m.Fragment, { children: [Object(m.jsxs)(fe, { mb: "24px", children: [Object(m.jsx)(Oe, { children: j(I ? "Your %symbol% RECLAIMED" : "Your %symbol% TO RECLAIM", { symbol: v.symbol }) }), Object(m.jsxs)(u.R, { alignItems: "center", children: [Object(m.jsx)(xe, { children: Object(oe.e)(g.refundingAmountInLP, v.decimals) }), I && Object(m.jsx)(u.B, { color: "success", ml: "8px" })] }), Object(m.jsx)(ue, { userAmount: g.amountTokenCommittedInLP, totalAmount: h.totalAmountPool })] }), Object(m.jsxs)(pe, { primaryToken: n.token, children: [Object(m.jsxs)(Oe, { children: [" ", j(I ? "%symbol% received" : "%symbol% to receive", { symbol: y.symbol })] }), Object(m.jsxs)(u.R, { alignItems: "center", children: [Object(m.jsx)(xe, { children: Object(oe.e)(g.offeringAmountInToken, y.decimals) }), !I && g.offeringAmountInToken.isEqualTo(0) && Object(m.jsx)("div", { ref: f, style: { display: "flex", marginLeft: "8px" }, children: Object(m.jsx)(u.U, {}) }), I && Object(m.jsx)(u.B, { color: "success", ml: "8px" })] })] })] }) : null] })
                },
                ge = n(105),
                ve = n(129),
                ye = n(54),
                Ie = n(61),
                ke = n(788),
                we = n(787),
                Pe = n(126),
                Se = [.1, .25, .5, .75, 1],
                Ae = Object(Ie.parseUnits)("10", "gwei").toString(),
                Ce = function(e) {
                    var t = e.poolId,
                        n = e.ifo,
                        c = e.publicIfoData,
                        r = e.walletIfoData,
                        i = e.userCurrencyBalance,
                        s = e.onDismiss,
                        l = e.onSuccess,
                        b = c[t],
                        d = r[t],
                        j = n.currency,
                        p = b.limitPerUserInLP,
                        f = d.amountTokenCommittedInLP,
                        O = r.contract,
                        x = Object(a.useState)(""),
                        h = Object(I.a)(x, 2),
                        v = h[0],
                        k = h[1],
                        S = Object(F.c)().account,
                        A = Object(Pe.a)().callWithGasPrice,
                        C = Object(N.h)(j.address),
                        D = Object(o.b)().t,
                        L = new w.a(v).times(P.k),
                        T = Object(we.a)({
                            onRequiresApproval: function() {
                                var e = Object(y.a)(g.a.mark((function e() {
                                    var t, n;
                                    return g.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.prev = 0, e.next = 3, C.allowance(S, O.address);
                                            case 3:
                                                return t = e.sent, n = new w.a(t.toString()), e.abrupt("return", n.gt(0));
                                            case 8:
                                                return e.prev = 8, e.t0 = e.catch(0), e.abrupt("return", !1);
                                            case 11:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, null, [
                                        [0, 8]
                                    ])
                                })));
                                return function() { return e.apply(this, arguments) }
                            }(),
                            onApprove: function() { return A(C, "approve", [O.address, ye.a.constants.MaxUint256], { gasPrice: Ae }) },
                            onConfirm: function() { return A(O, "depositPool", [L.toString(), t === G.d.poolBasic ? 0 : 1], { gasPrice: Ae }) },
                            onSuccess: function() {
                                var e = Object(y.a)(g.a.mark((function e(t) {
                                    var n;
                                    return g.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return n = t.receipt, e.next = 3, l(L, n.transactionHash);
                                            case 3:
                                                s();
                                            case 4:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })));
                                return function(t) { return e.apply(this, arguments) }
                            }()
                        }),
                        B = T.isApproving,
                        E = T.isApproved,
                        U = T.isConfirmed,
                        R = T.isConfirming,
                        Q = T.handleApprove,
                        _ = T.handleConfirm,
                        W = p.isGreaterThan(0) && p.minus(f).isLessThanOrEqualTo(i) ? p : i;
                    return Object(m.jsx)(u.ib, { title: D("Contribute %symbol%", { symbol: j.symbol }), onDismiss: s, children: Object(m.jsxs)(u.kb, { maxWidth: "320px", children: [p.isGreaterThan(0) && Object(m.jsxs)(u.R, { justifyContent: "space-between", mb: "16px", children: [Object(m.jsx)(u.Qb, { children: D("Max. LP token entry") }), Object(m.jsx)(u.Qb, { children: Object(oe.d)(p, j.decimals).toString() })] }), Object(m.jsxs)(u.R, { justifyContent: "space-between", mb: "8px", children: [Object(m.jsxs)(u.Qb, { children: [D("Commit"), ":"] }), Object(m.jsxs)(u.R, { flexGrow: 1, justifyContent: "flex-end", children: [Object(m.jsx)(u.X, { src: "/images/farms/".concat(j.symbol.split(" ")[0].toLocaleLowerCase(), ".svg"), width: 24, height: 24 }), Object(m.jsx)(u.Qb, { children: j.symbol })] })] }), Object(m.jsx)(u.j, { value: v, currencyValue: c.currencyPriceInUSD.times(v || 0).toFixed(2), onUserInput: k, isWarning: L.isGreaterThan(W), decimals: j.decimals, mb: "8px" }), Object(m.jsx)(u.Qb, { color: "textSubtle", textAlign: "right", fontSize: "12px", mb: "16px", children: D("Balance: %balance%", { balance: Object(oe.d)(i, j.decimals).toString() }) }), Object(m.jsx)(u.R, { justifyContent: "space-between", mb: "16px", children: Se.map((function(e, t) { return Object(m.jsxs)(u.p, { scale: "xs", variant: "tertiary", onClick: function() { return k(Object(oe.d)(W.times(e)).toString()) }, mr: t < Se.length - 1 ? "8px" : 0, children: [100 * e, "%"] }, e) })) }), Object(m.jsx)(u.Qb, { color: "textSubtle", fontSize: "12px", mb: "24px", children: D("If you don\u2019t commit enough LP tokens, you may not receive any IFO tokens at all and will only receive a full refund of your LP tokens.") }), Object(m.jsx)(ke.b, { isApproveDisabled: U || R || E, isApproving: B, isConfirmDisabled: !E || U || L.isNaN() || L.eq(0), isConfirming: R, onApprove: Q, onConfirm: _ })] }) })
                },
                De = function(e) {
                    var t = e.currency,
                        n = e.onDismiss,
                        c = Object(o.b)().t;
                    return Object(m.jsx)(u.ib, { title: c("LP Tokens required"), onDismiss: n, children: Object(m.jsxs)(u.kb, { maxWidth: "288px", children: [Object(m.jsx)(u.X, { src: "/images/farms/".concat(t.symbol.split(" ")[0].toLocaleLowerCase(), ".svg"), width: 72, height: 72, margin: "auto", mb: "24px" }), Object(m.jsx)(u.Qb, { mb: "16px", children: c("You\u2019ll need CAKE-BNB LP tokens to participate in the IFO!") }), Object(m.jsx)(u.Qb, { mb: "24px", children: c("Get LP tokens, or make sure your tokens aren\u2019t staked somewhere else.") }), Object(m.jsx)(u.p, { as: u.Z, external: !0, href: "".concat(P.c, "/BSWAP/0xEEa9Fe24FFBc4F338d90695Be5bf9c0964b93e7E"), endIcon: Object(m.jsx)(u.sb, { color: "white" }), minWidth: "100%", children: c("Get LP tokens") })] }) })
                },
                Le = function(e) {
                    var t = e.poolId,
                        n = e.ifo,
                        c = e.publicIfoData,
                        r = e.walletIfoData,
                        i = c[t],
                        a = r[t],
                        s = a.isPendingTx,
                        l = a.amountTokenCommittedInLP,
                        b = i.limitPerUserInLP,
                        d = Object(o.b)().t,
                        j = Object(W.a)().toastSuccess,
                        p = Object(ve.b)(n.currency.address).balance,
                        f = function() {
                            var e = Object(y.a)(g.a.mark((function e(t, n) {
                                return g.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, Promise.all([c.fetchIfoData(), r.fetchIfoData()]);
                                        case 2:
                                            j(d("Success!"), Object(m.jsx)(q.b, { txHash: n, children: d("You have contributed %amount% CAKE-BNB LP tokens to this IFO!", { amount: Object(oe.e)(t) }) }));
                                        case 3:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t, n) { return e.apply(this, arguments) }
                        }(),
                        O = Object(u.kc)(Object(m.jsx)(Ce, { poolId: t, ifo: n, publicIfoData: c, walletIfoData: r, onSuccess: f, userCurrencyBalance: p }), !1),
                        x = Object(I.a)(O, 1)[0],
                        h = Object(u.kc)(Object(m.jsx)(De, { currency: n.currency }), !1),
                        v = Object(I.a)(h, 1)[0],
                        k = s || b.isGreaterThan(0) && l.isGreaterThanOrEqualTo(b);
                    return Object(m.jsx)(u.p, { onClick: p.isEqualTo(0) ? v : x, width: "100%", disabled: k, children: d(k ? "Max. Committed" : "Commit LP Tokens") })
                },
                Te = function(e) {
                    var t = e.poolId,
                        n = e.ifoVersion,
                        c = e.walletIfoData,
                        r = c[t],
                        i = Object(o.b)().t,
                        a = Object(W.a)(),
                        s = a.toastError,
                        l = a.toastSuccess,
                        b = function(e) { return c.setPendingTx(e, t) },
                        d = function() {
                            var e = Object(y.a)(g.a.mark((function e() {
                                var r, a, o, u, d;
                                return g.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (e.prev = 0, b(!0), 1 !== n) { e.next = 12; break }
                                            return e.next = 5, c.contract.harvest();
                                        case 5:
                                            return a = e.sent, e.next = 8, a.wait();
                                        case 8:
                                            o = e.sent, r = o.transactionHash, e.next = 19;
                                            break;
                                        case 12:
                                            return e.next = 14, c.contract.harvestPool(t === G.d.poolBasic ? 0 : 1);
                                        case 14:
                                            return u = e.sent, e.next = 17, u.wait();
                                        case 17:
                                            d = e.sent, r = d.transactionHash;
                                        case 19:
                                            c.setIsClaimed(t), l(i("Success!"), Object(m.jsx)(q.b, { txHash: r, children: i("You have successfully claimed your rewards.") })), e.next = 27;
                                            break;
                                        case 23:
                                            e.prev = 23, e.t0 = e.catch(0), s(i("Error"), i("Please try again. Confirm the transaction and make sure you are paying enough gas!")), console.error(e.t0);
                                        case 27:
                                            return e.prev = 27, b(!1), e.finish(27);
                                        case 30:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 23, 27, 30]
                                ])
                            })));
                            return function() { return e.apply(this, arguments) }
                        }();
                    return Object(m.jsx)(u.p, { onClick: d, disabled: r.isPendingTx, width: "100%", isLoading: r.isPendingTx, endIcon: r.isPendingTx ? Object(m.jsx)(u.i, { spin: !0, color: "currentColor" }) : null, children: i("Claim") })
                },
                Be = function(e) {
                    var t = e.poolId,
                        n = e.ifo,
                        c = e.publicIfoData,
                        r = e.walletIfoData,
                        i = e.hasProfile,
                        a = e.isLoading,
                        s = Object(o.b)().t,
                        b = Object(F.c)().account,
                        d = r[t];
                    return a ? Object(m.jsx)(be, {}) : b ? i ? Object(m.jsxs)(m.Fragment, { children: ["live" === c.status && Object(m.jsx)(Le, { poolId: t, ifo: n, publicIfoData: c, walletIfoData: r }), "finished" === c.status && !d.hasClaimed && (d.offeringAmountInToken.isGreaterThan(0) || d.refundingAmountInLP.isGreaterThan(0)) && Object(m.jsx)(Te, { poolId: t, ifoVersion: n.version, walletIfoData: r })] }) : Object(m.jsx)(u.p, { as: l.a, to: "/profile", width: "100%", children: s("Activate your Profile") }) : Object(m.jsx)(ge.a, { width: "100%" })
                },
                Ee = function(e) {
                    var t = e.label,
                        n = e.value;
                    return Object(m.jsxs)(u.R, { justifyContent: "space-between", alignItems: "center", children: [Object(m.jsx)(u.Qb, { small: !0, color: "textSubtle", children: t }), n ? Object(m.jsx)(u.Qb, { small: !0, textAlign: "right", children: n }) : Object(m.jsx)(u.Db, { height: 21, width: 80 })] })
                },
                Ue = function(e) {
                    var t = e.poolId,
                        n = e.ifo,
                        c = e.publicIfoData,
                        r = Object(o.b)().t,
                        i = c.status,
                        a = c.currencyPriceInUSD,
                        s = c[t],
                        l = Object(oe.e)(s.limitPerUserInLP, n.currency.decimals),
                        b = "".concat(s.taxRate, "%"),
                        d = s.totalAmountPool.div(s.raisingAmountPool).times(100).toFixed(2),
                        j = Object(oe.e)(s.totalAmountPool, n.currency.decimals),
                        p = a.times(j),
                        f = "~$".concat(Object(oe.c)(p.toNumber(), 0, 0), " (").concat(d, "%)");
                    return Object(m.jsx)(u.m, { paddingTop: "24px", children: "coming_soon" === i ? Object(m.jsxs)(m.Fragment, { children: [t === G.d.poolBasic && Object(m.jsx)(Ee, { label: r("Max. LP token entry"), value: l }), Object(m.jsx)(Ee, { label: r("Funds to raise:"), value: n[t].raiseAmount }), Object(m.jsx)(Ee, { label: r("CAKE to burn:"), value: n[t].cakeToBurn }), Object(m.jsx)(Ee, { label: r("Price per %symbol%:", { symbol: n.token.symbol }), value: "$".concat(n.tokenOfferingPrice) })] }) : "live" === i ? Object(m.jsxs)(m.Fragment, { children: [t === G.d.poolBasic && Object(m.jsx)(Ee, { label: r("Max. LP token entry"), value: l }), t === G.d.poolUnlimited && Object(m.jsx)(Ee, { label: r("Additional fee:"), value: b }), Object(m.jsx)(Ee, { label: r("Total committed:"), value: a.gt(0) ? f : null })] }) : "finished" === i ? Object(m.jsxs)(m.Fragment, { children: [t === G.d.poolBasic && Object(m.jsx)(Ee, { label: r("Max. LP token entry"), value: l }), t === G.d.poolUnlimited && Object(m.jsx)(Ee, { label: r("Additional fee:"), value: b }), Object(m.jsx)(Ee, { label: r("Total committed:"), value: a.gt(0) ? f : null }), Object(m.jsx)(Ee, { label: r("Funds to raise:"), value: n[t].raiseAmount }), Object(m.jsx)(Ee, { label: r("CAKE to burn:"), value: n[t].cakeToBurn }), Object(m.jsx)(Ee, { label: r("Price per %symbol%:", { symbol: n.token.symbol }), value: "$".concat(n.tokenOfferingPrice ? n.tokenOfferingPrice : "?") })] }) : Object(m.jsx)(je, {}) })
                },
                Re = (Y = {}, Object(R.a)(Y, G.d.poolBasic, { title: "Basic Sale", variant: "blue", tooltip: "Every person can only commit a limited amount, but may expect a higher return per token committed." }), Object(R.a)(Y, G.d.poolUnlimited, { title: "Unlimited Sale", variant: "violet", tooltip: "No limits on the amount you can commit. Additional fee applies when claiming." }), Y),
                Fe = function(e) {
                    var t = e.poolId,
                        n = e.ifo,
                        c = e.publicIfoData,
                        r = e.walletIfoData,
                        i = e.onApprove,
                        a = e.enableStatus,
                        s = Object(o.b)().t,
                        l = Re[t],
                        b = Object(re.b)(),
                        d = b.hasProfile,
                        j = b.isLoading,
                        p = Object(u.mc)(s(l.tooltip), { placement: "bottom" }),
                        f = p.targetRef,
                        O = p.tooltip,
                        x = p.tooltipVisible,
                        h = j || "idle" === c.status;
                    return Object(m.jsxs)(m.Fragment, { children: [x && O, Object(m.jsxs)(u.t, { children: [Object(m.jsx)(u.w, { variant: l.variant, children: Object(m.jsxs)(u.R, { justifyContent: "space-between", alignItems: "center", children: [Object(m.jsx)(u.Qb, { bold: !0, fontSize: "20px", children: s(l.title) }), Object(m.jsx)("div", { ref: f, children: Object(m.jsx)(u.U, {}) })] }) }), Object(m.jsxs)(u.u, { children: [Object(m.jsx)(he, { poolId: t, ifo: n, publicIfoData: c, walletIfoData: r, hasProfile: d, isLoading: h, onApprove: i, enableStatus: a }), Object(m.jsx)(Be, { poolId: t, ifo: n, publicIfoData: c, walletIfoData: r, hasProfile: d, isLoading: h }), Object(m.jsx)(Ue, { poolId: t, ifo: n, publicIfoData: c })] })] })] })
                },
                Ne = n(37),
                Qe = n(381),
                _e = function(e) {
                    var t = e.publicIfoData,
                        n = Object(o.b)().t,
                        c = t.status,
                        r = t.secondsUntilStart,
                        i = t.secondsUntilEnd,
                        a = t.startBlockNum,
                        s = "coming_soon" === c ? r : i,
                        l = Object(Qe.a)(s),
                        b = "coming_soon" === c ? n("Start").toLowerCase() : n("Finish").toLowerCase();
                    return Object(m.jsx)(u.R, { justifyContent: "center", mb: "32px", children: "idle" === c ? Object(m.jsx)(u.Db, { animation: "pulse", variant: "rect", width: "100%", height: "48px" }) : Object(m.jsxs)(m.Fragment, { children: [Object(m.jsx)(u.wb, { width: "48px", mr: "16px" }), Object(m.jsxs)(u.R, { alignItems: "center", children: [Object(m.jsxs)(u.Qb, { bold: !0, mr: "16px", children: [b, ":"] }), Object(m.jsx)(u.Qb, { children: n("%day%d %hour%h %minute%m", { day: l.days, hour: l.hours, minute: l.minutes }) }), Object(m.jsx)(u.Z, { href: Object(Ne.e)(a, "countdown"), target: "blank", rel: "noopener noreferrer", ml: "8px", textTransform: "lowercase", children: "(".concat(n("Blocks"), ")") })] })] }) })
                },
                Ge = T.b,
                We = Object(j.e)(u.R)(V || (V = Object(d.a)(["\n  justify-content: space-between;\n  flex-direction: column;\n  align-items: center;\n  ", " {\n    flex-direction: row;\n    align-items: initial;\n  }\n"])), (function(e) { return e.theme.mediaQueries.md })),
                qe = Object(j.e)(u.R)(z || (z = Object(d.a)(["\n  ", ";\n"])), (function(e) { return e.isFinished ? "filter: grayscale(100%)" : "" })),
                Ye = Object(j.e)(u.ab)(H || (H = Object(d.a)(["\n  margin-top: 32px;\n  ", " {\n    margin-top: 0;\n  }\n"])), (function(e) { return e.theme.mediaQueries.md })),
                Ve = function(e) {
                    var t, n = e.ifo,
                        c = e.publicIfoData,
                        r = Object(o.b)().t,
                        i = null === (t = n.token.symbol) || void 0 === t ? void 0 : t.toLowerCase(),
                        a = n.name,
                        s = Ge.div(c.currencyPriceInUSD).toNumber();
                    return Object(m.jsxs)(We, { children: [Object(m.jsxs)(qe, { isFinished: "finished" === c.status, alignItems: "center", flexGrow: 1, children: [Object(m.jsx)(u.X, { src: "/images/achievements/ifo-".concat(i, ".svg"), width: 56, height: 56, mr: "8px" }), Object(m.jsxs)(u.R, { flexDirection: "column", children: [Object(m.jsx)(u.Qb, { color: "secondary", fontSize: "12px", children: "".concat(r("Achievement"), ":") }), Object(m.jsxs)(u.R, { children: [Object(m.jsx)(u.Qb, { bold: !0, mr: "8px", children: r("IFO Shopper: %title%", { title: a }) }), Object(m.jsxs)(u.R, { alignItems: "center", mr: "8px", children: [Object(m.jsx)(u.yb, { color: "textSubtle", width: "16px", mr: "4px" }), Object(m.jsx)(u.Qb, { color: "textSubtle", children: c.numberPoints })] })] }), c.currencyPriceInUSD.gt(0) ? Object(m.jsx)(u.Qb, { color: "textSubtle", fontSize: "12px", children: r("Commit ~%amount% LP in total to earn!", { amount: s.toFixed(3) }) }) : Object(m.jsx)(u.Db, { minHeight: 18, width: 80 })] })] }), Object(m.jsxs)(u.R, { alignItems: "flex-end", flexDirection: "column", children: [Object(m.jsx)(Ye, { href: n.articleUrl, mb: "8px", children: r("Learn more about %title%", { title: a }) }), Object(m.jsx)(Ye, { href: Object(Ne.e)(n.address, "address"), children: r("View Contract") })] })] })
                },
                ze = function(e, t) {
                    var n = Object(Pe.a)().callWithGasPrice;
                    return Object(a.useCallback)(Object(y.a)(g.a.mark((function c() {
                        var r;
                        return g.a.wrap((function(c) {
                            for (;;) switch (c.prev = c.next) {
                                case 0:
                                    return c.next = 2, n(e, "approve", [t, ye.a.constants.MaxUint256]);
                                case 2:
                                    return r = c.sent, c.abrupt("return", r.wait());
                                case 4:
                                case "end":
                                    return c.stop()
                            }
                        }), c)
                    }))), [t, e, n])
                },
                He = Object(j.e)(u.t)(K || (K = Object(d.a)(["\n  max-width: 736px;\n  width: 100%;\n  margin: auto;\n"]))),
                Ke = Object(j.e)(u.w)(M || (M = Object(d.a)(["\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  height: 112px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  background-image: ", ";\n"])), (function(e) { var t = e.ifoId; return "url('/images/ifos/".concat(t, "-bg.svg')") })),
                Me = j.e.div(J || (J = Object(d.a)(["\n  display: ", ";\n  background: ", ";\n"])), (function(e) { return e.isVisible ? "block" : "none" }), (function(e) {
                    var t = e.isActive,
                        n = e.theme;
                    return t ? n.colors.gradients.bubblegum : n.colors.dropdown
                })),
                Je = j.e.div(Z || (Z = Object(d.a)(["\n  display: grid;\n  grid-gap: 32px;\n  grid-template-columns: 1fr;\n  margin-bottom: 32px;\n  ", " {\n    grid-template-columns: ", ";\n    justify-items: ", ";\n  }\n"])), (function(e) { return e.theme.mediaQueries.md }), (function(e) { return e.singleCard ? "1fr" : "1fr 1fr" }), (function(e) { return e.singleCard ? "center" : "unset" })),
                Ze = Object(j.e)(u.u)(X || (X = Object(d.a)(["\n  padding: 24px 16px;\n  ", " {\n    padding: 24px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.md })),
                Xe = Object(j.e)(u.v)($ || ($ = Object(d.a)(["\n  text-align: center;\n  padding: 8px;\n  background: ", ";\n"])), (function(e) { return e.theme.colors.backgroundAlt })),
                $e = function(e) {
                    var t = e.ifo,
                        n = e.publicIfoData,
                        c = e.walletIfoData,
                        r = e.isInitiallyVisible,
                        s = Object(a.useState)(r),
                        l = Object(I.a)(s, 2),
                        b = l[0],
                        d = l[1],
                        j = Object(a.useState)(i.DISABLED),
                        p = Object(I.a)(j, 2),
                        f = p[0],
                        O = p[1],
                        x = Object(o.b)().t,
                        h = Object(F.c)().account,
                        v = Object(N.h)(t.currency.address),
                        k = function(e, t, n) { return "coming_soon" === t ? Object(m.jsx)(u.x, { variantColor: "textDisabled", ribbonPosition: "left", text: n("Coming Soon") }) : "live" === t || "finished" === t && e.isActive ? Object(m.jsx)(u.x, { variantColor: "primary", ribbonPosition: "left", style: { textTransform: "uppercase" }, text: "".concat(n("live" === t ? "Live" : "Finished"), "!") }) : null }(t, n.status, x),
                        P = "finished" !== n.status && t.isActive,
                        S = c.contract,
                        A = ze(v, S.address),
                        C = Object(W.a)().toastSuccess,
                        D = function() {
                            var e = Object(y.a)(g.a.mark((function e() {
                                var n;
                                return g.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, O(i.IS_ENABLING), e.next = 4, A();
                                        case 4:
                                            n = e.sent, O(i.ENABLED), C(x("Successfully Enabled!"), Object(m.jsx)(q.b, { txHash: n.transactionHash, children: x("You can now participate in the %symbol% IFO.", { symbol: t.token.symbol }) })), e.next = 12;
                                            break;
                                        case 9:
                                            e.prev = 9, e.t0 = e.catch(0), O(i.DISABLED);
                                        case 12:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 9]
                                ])
                            })));
                            return function() { return e.apply(this, arguments) }
                        }();
                    return Object(a.useEffect)((function() {
                        h && function() {
                            var e = Object(y.a)(g.a.mark((function e() {
                                var t, n;
                                return g.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, v.allowance(h, S.address);
                                        case 3:
                                            t = e.sent, n = new w.a(t.toString()), O(n.lte(0) ? i.DISABLED : i.ENABLED), e.next = 11;
                                            break;
                                        case 8:
                                            e.prev = 8, e.t0 = e.catch(0), O(i.DISABLED);
                                        case 11:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 8]
                                ])
                            })));
                            return function() { return e.apply(this, arguments) }
                        }()()
                    }), [h, v, S, O]), Object(m.jsxs)(He, { ribbon: k, children: [Object(m.jsx)(Ke, { ifoId: t.id, children: Object(m.jsx)(u.O, { expanded: b, onClick: function() { return d((function(e) { return !e })) } }) }), Object(m.jsxs)(Me, { isVisible: b, isActive: "idle" !== n.status && P, children: [P && Object(m.jsx)(u.zb, { variant: "flat", primaryStep: n.progress }), Object(m.jsxs)(Ze, { children: [P && Object(m.jsx)(_e, { publicIfoData: n }), Object(m.jsxs)(Je, { singleCard: !n.poolBasic || !c.poolBasic, children: [n.poolBasic && c.poolBasic && Object(m.jsx)(Fe, { poolId: G.d.poolBasic, ifo: t, publicIfoData: n, walletIfoData: c, onApprove: D, enableStatus: f }), Object(m.jsx)(Fe, { poolId: G.d.poolUnlimited, ifo: t, publicIfoData: n, walletIfoData: c, onApprove: D, enableStatus: f })] }), Object(m.jsx)(Ve, { ifo: t, publicIfoData: n })] }), Object(m.jsx)(Xe, { children: Object(m.jsx)(u.p, { variant: "text", endIcon: Object(m.jsx)(u.G, { color: "primary" }), onClick: function() { return d(!1) }, children: x("Close") }) })] })] })
                },
                et = j.e.div(ee || (ee = Object(d.a)(["\n  display: grid;\n  grid-gap: 32px;\n  padding: 40px 0;\n  border-top: 2px solid ", ";\n"])), (function(e) { return e.theme.colors.textSubtle })),
                tt = n(816),
                nt = n.n(tt),
                ct = Object(j.e)(b.a)(te || (te = Object(d.a)(["\n  background: ", ";\n  margin-left: -16px;\n  margin-right: -16px;\n  padding-top: 48px;\n  padding-bottom: 48px;\n\n  ", " {\n    margin-left: -24px;\n    margin-right: -24px;\n  }\n"])), (function(e) { return e.theme.colors.gradients.bubblegum }), (function(e) { return e.theme.mediaQueries.sm })),
                rt = function(e) {
                    var t = e.ifo,
                        n = e.walletIfoData,
                        c = n.poolBasic,
                        r = n.poolUnlimited,
                        i = Object(re.b)().hasProfile,
                        a = Object(o.b)().t,
                        s = [i, Object(ve.b)(t.currency.address).balance.isGreaterThan(0), c.amountTokenCommittedInLP.isGreaterThan(0) || r.amountTokenCommittedInLP.isGreaterThan(0), c.hasClaimed || r.hasClaimed],
                        l = function(e) { var t = 0 === e || nt()(s.slice(0, e), Boolean); return s[e] ? t ? "past" : "future" : t ? "current" : "future" },
                        b = function(e) {
                            var t = s[e];
                            switch (e) {
                                case 0:
                                    return Object(m.jsxs)(u.u, { children: [Object(m.jsx)(u.T, { as: "h4", color: "secondary", mb: "16px", children: a("Activate your Profile") }), Object(m.jsx)(u.Qb, { color: "textSubtle", small: !0, mb: "16px", children: a("You\u2019ll need an active BriseSwap Profile to take part in an IFO!") }), t ? Object(m.jsx)(u.Qb, { color: "success", bold: !0, children: a("Profile Active!") }) : Object(m.jsx)(u.p, { as: u.Z, href: "/profile", children: a("Activate your Profile") })] });
                                case 1:
                                    return Object(m.jsxs)(u.u, { children: [Object(m.jsx)(u.T, { as: "h4", color: "secondary", mb: "16px", children: a("Get BSWAP-BNB LP Tokens") }), Object(m.jsxs)(u.Qb, { color: "textSubtle", small: !0, children: [a("Stake BSWAP and BNB in the liquidity pool to get LP tokens."), " ", Object(m.jsx)("br", {}), a("You\u2019ll spend them to buy IFO sale tokens.")] }), Object(m.jsx)(u.p, { as: u.Z, external: !0, href: "".concat(P.c, "/BSWAP/0xEEa9Fe24FFBc4F338d90695Be5bf9c0964b93e7E"), endIcon: Object(m.jsx)(u.sb, { color: "white" }), mt: "16px", children: a("Get LP tokens") })] });
                                case 2:
                                    return Object(m.jsxs)(u.u, { children: [Object(m.jsx)(u.T, { as: "h4", color: "secondary", mb: "16px", children: a("Commit LP Tokens") }), Object(m.jsxs)(u.Qb, { color: "textSubtle", small: !0, children: [a("When the IFO sales are live, you can \u201ccommit\u201d your LP tokens to buy the tokens being sold."), " ", Object(m.jsx)("br", {}), a("We recommend committing to the Basic Sale first, but you can do both if you like.")] })] });
                                case 3:
                                    return Object(m.jsxs)(u.u, { children: [Object(m.jsx)(u.T, { as: "h4", color: "secondary", mb: "16px", children: a("Claim your tokens and achievement") }), Object(m.jsx)(u.Qb, { color: "textSubtle", small: !0, children: a("After the IFO sales finish, you can claim any IFO tokens that you bought, and any unspent BSWAP-BNB LP tokens will be returned to your wallet.") })] });
                                default:
                                    return null
                            }
                        };
                    return Object(m.jsxs)(ct, { children: [Object(m.jsx)(u.T, { as: "h2", scale: "xl", color: "secondary", mb: "24px", textAlign: "center", children: a("How to Take Part") }), Object(m.jsx)(u.Jb, { children: s.map((function(e, t) { return Object(m.jsx)(u.Ib, { index: t, status: l(t), children: Object(m.jsx)(u.t, { children: b(t) }) }, t) })) })] })
                },
                it = n(831),
                at = [{ title: "What\u2019s the difference between a Basic Sale and Unlimited Sale?", description: ["In the Basic Sale, every user can commit a maximum of about 100 USD worth of BSWAP-BNB LP Tokens. We calculate the maximum LP amount about 30 minutes before each IFO. The Basic Sale has no participation fee.", "In the Unlimited Sale, there\u2019s no limit to the amount of BSWAP-BNB LP Tokens you can commit. However, there\u2019s a fee for participation: see below."] }, { title: "Which sale should I commit to? Can I do both?", description: ["You can choose one or both at the same time! If you\u2019re only committing a small amount, we recommend the Basic Sale first. Just remember you need a BriseSwap Profile in order to participate."] }, { title: "How much is the participation fee?", description: ["There\u2019s only a participation fee for the Unlimited Sale: there\u2019s no fee for the Basic Sale.", "The fee will start at 1%.", "The 1% participation fee decreases in cliffs, based on the percentage of overflow from the \u201cUnlimited\u201d portion of the sale."] }, { title: "Where does the participation fee go?", description: ["We burn it. The BSWAP-BNB LP tokens from the participation fee will be decomposed. We will then use the BNB portion to market buy the BSWAP equivalent, and finally throw all of the CAKE into the weekly token burn."] }, { title: "How can I get an achievement for participating in the IFO?", description: ["You need to contribute a minimum of about 10 USD worth of BSWAP-BNB LP Tokens to either sale.", "You can contribute to one or both, it doesn\u2019t matter: only your overall contribution is counted for the achievement."] }],
                ot = j.e.div(ne || (ne = Object(d.a)(["\n  flex: none;\n  order: 2;\n  max-width: 414px;\n  width: 100%;\n\n  ", " {\n    order: 1;\n  }\n"])), (function(e) { return e.theme.mediaQueries.md })),
                st = j.e.div(ce || (ce = Object(d.a)(["\n  order: 1;\n  margin-bottom: 40px;\n\n  ", " {\n    order: 2;\n    margin-bottom: 0;\n    margin-left: 40px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.md })),
                lt = function() {
                    var e = Object(o.b)().t;
                    return Object(m.jsxs)(u.R, {
                        alignItems: ["center", null, null, "start"],
                        flexDirection: ["column", null, null, "row"],
                        children: [Object(m.jsx)(ot, { children: Object(m.jsx)("img", { src: "/images/ifos/ifo-bunny.png", alt: "ifo bunny", width: "414px", height: "500px" }) }), Object(m.jsx)(st, {
                            children: Object(m.jsxs)(u.t, {
                                children: [Object(m.jsx)(u.w, { children: Object(m.jsx)(u.T, { scale: "lg", color: "secondary", children: e("Details") }) }), Object(m.jsx)(u.u, {
                                    children: at.map((function(t, n, c) {
                                        var r = t.title,
                                            i = t.description,
                                            a = c.length;
                                        return Object(m.jsx)(it.a, { id: r, mb: n + 1 === a ? "" : "24px", title: e(r), children: i.map((function(t) { return Object(m.jsx)(u.Qb, { color: "textSubtle", as: "p", children: e(t) }, t) })) }, r)
                                    }))
                                })]
                            })
                        })]
                    })
                },
                ut = x.w.find((function(e) { return e.isActive })),
                bt = function() {
                    var e = U(ut),
                        t = _(ut);
                    return Object(m.jsxs)(et, { id: "current-ifo", children: [Object(m.jsx)($e, { ifo: ut, publicIfoData: e, walletIfoData: t, isInitiallyVisible: !0 }), Object(m.jsx)(rt, { ifo: ut, walletIfoData: t }), Object(m.jsx)(lt, {})] })
                },
                dt = function(e) {
                    var t = e.ifo,
                        n = e.isInitiallyVisible,
                        c = U(t),
                        r = _(t);
                    return Object(m.jsx)($e, { ifo: t, publicIfoData: c, walletIfoData: r, isInitiallyVisible: n })
                },
                jt = n(373),
                mt = function(e) {
                    var t = e.address,
                        n = e.releaseBlockNumber,
                        c = Object(A.c)(e.currency.symbol),
                        r = Object(a.useState)(Object(R.a)({ status: "idle", blocksRemaining: 0, secondsUntilStart: 0, progress: 5, secondsUntilEnd: 0, startBlockNum: 0, endBlockNum: 0, numberPoints: null }, G.d.poolUnlimited, { raisingAmountPool: T.c, totalAmountPool: T.c, offeringAmountPool: T.c, limitPerUserInLP: T.c, taxRate: 0, sumTaxesOverflow: T.c })),
                        i = Object(I.a)(r, 2),
                        o = i[0],
                        s = i[1],
                        l = Object(S.a)().currentBlock,
                        u = Object(a.useCallback)(Object(y.a)(g.a.mark((function e() {
                            var c, r, i, a, o, u, b, d, j, m, p, f, O;
                            return g.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return c = ["startBlock", "endBlock", "raisingAmount", "totalAmount"].map((function(e) { return { address: t, name: e } })), e.next = 3, Object(D.b)(jt, c);
                                    case 3:
                                        r = e.sent, i = Object(I.a)(r, 4), a = i[0], o = i[1], u = i[2], b = i[3], d = a ? a[0].toNumber() : 0, j = o ? o[0].toNumber() : 0, m = B(l, d, j), p = j - d, f = j - l, O = l > d ? (l - d) / p * 100 : (l - n) / (d - n) * 100, s((function(e) { return Object(R.a)({ status: m, blocksRemaining: f, secondsUntilStart: (d - l) * P.h, progress: O, secondsUntilEnd: f * P.h, startBlockNum: d, endBlockNum: j, currencyPriceInUSD: null, numberPoints: null }, G.d.poolUnlimited, Object(v.a)(Object(v.a)({}, e.poolUnlimited), {}, { raisingAmountPool: u ? new w.a(u[0].toString()) : T.c, totalAmountPool: b ? new w.a(b[0].toString()) : T.c })) }));
                                    case 16:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), [t, l, n]);
                    return Object(a.useEffect)((function() { u() }), [u]), Object(v.a)(Object(v.a)({}, o), {}, { currencyPriceInUSD: c, fetchIfoData: u })
                },
                pt = function(e) {
                    var t = Object(a.useState)(Object(R.a)({}, G.d.poolUnlimited, { amountTokenCommittedInLP: T.c, hasClaimed: !1, isPendingTx: !1, offeringAmountInToken: T.c, refundingAmountInLP: T.c, taxAmountInLP: T.c })),
                        n = Object(I.a)(t, 2),
                        c = n[0],
                        r = n[1],
                        i = e.address,
                        o = e.currency,
                        s = c.poolUnlimited,
                        l = Object(F.c)().account,
                        u = Object(N.j)(i),
                        b = Object(N.h)(o.address),
                        d = Q(b, i, s.isPendingTx),
                        j = Object(a.useCallback)(Object(y.a)(g.a.mark((function e() {
                            var t, n, c, a, o, s, u;
                            return g.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t = ["getOfferingAmount", "userInfo", "getRefundingAmount"].map((function(e) { return { address: i, name: e, params: [l] } })), e.next = 3, Object(D.b)(jt, t);
                                    case 3:
                                        n = e.sent, c = Object(I.a)(n, 3), a = c[0], o = c[1], s = c[2], u = o ? { amount: new w.a(o.amount.toString()), claimed: o.claimed } : { amount: T.c, claimed: !1 }, r((function(e) { return Object(R.a)({}, G.d.poolUnlimited, Object(v.a)(Object(v.a)({}, e.poolUnlimited), {}, { amountTokenCommittedInLP: u.amount, hasClaimed: u.claimed, offeringAmountInToken: a ? new w.a(a[0].toString()) : T.c, refundingAmountInLP: s ? new w.a(s[0].toString()) : T.c })) }));
                                    case 10:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), [l, i]);
                    return Object(a.useEffect)((function() { l && j() }), [l, j]), Object(v.a)(Object(v.a)({}, c), {}, { allowance: d, contract: u, setPendingTx: function(e) { return r((function(t) { return Object(R.a)({}, G.d.poolUnlimited, Object(v.a)(Object(v.a)({}, t.poolUnlimited), {}, { isPendingTx: e })) })) }, setIsClaimed: function() { r((function(e) { return Object(R.a)({}, G.d.poolUnlimited, Object(v.a)(Object(v.a)({}, e.poolUnlimited), {}, { hasClaimed: !0 })) })) }, fetchIfoData: j })
                },
                ft = function(e) {
                    var t = e.ifo,
                        n = mt(t),
                        c = pt(t);
                    return Object(m.jsx)($e, { ifo: t, publicIfoData: n, walletIfoData: c, isInitiallyVisible: !1 })
                },
                Ot = x.w.filter((function(e) { return !e.isActive })),
                xt = function() { return Object(m.jsx)(et, { id: "past-ifos", children: Ot.map((function(e) { return 1 === e.version ? Object(m.jsx)(ft, { ifo: e }, e.id) : Object(m.jsx)(dt, { ifo: e, isInitiallyVisible: !1 }, e.id) })) }) };
            t.default = function() {
                var e = Object(o.b)().t,
                    t = Object(s.i)(),
                    n = t.path,
                    c = t.url,
                    r = t.isExact;
                return Object(m.jsxs)(m.Fragment, { children: [Object(m.jsx)(O, {}), Object(m.jsxs)(b.a, { children: [Object(m.jsx)(u.R, { justifyContent: "center", alignItems: "center", mb: "32px", children: Object(m.jsxs)(u.q, { activeIndex: r ? 0 : 1, scale: "sm", variant: "subtle", children: [Object(m.jsx)(u.r, { as: l.a, to: "".concat(c), children: e("Next IFO") }), Object(m.jsx)(u.r, { id: "past-ifos-button", as: l.a, to: "".concat(c, "/history"), children: e("Past IFOs") })] }) }), Object(m.jsx)(s.b, { exact: !0, path: "".concat(n), children: Object(m.jsx)(bt, {}) }), Object(m.jsx)(s.b, { path: "".concat(n, "/history"), children: Object(m.jsx)(xt, {}) })] })] })
            }
        },
        787: function(e, t, n) {
            "use strict";
            var c = n(3),
                r = n.n(c),
                i = n(12),
                a = n(9),
                o = n(6),
                s = n(1),
                l = n(119),
                u = n(42),
                b = n(92),
                d = n(13),
                j = { approvalState: "idle", confirmState: "idle" },
                m = function(e, t) {
                    switch (t.type) {
                        case "requires_approval":
                            return Object(o.a)(Object(o.a)({}, e), {}, { approvalState: "success" });
                        case "approve_sending":
                            return Object(o.a)(Object(o.a)({}, e), {}, { approvalState: "loading" });
                        case "approve_receipt":
                            return Object(o.a)(Object(o.a)({}, e), {}, { approvalState: "success" });
                        case "approve_error":
                            return Object(o.a)(Object(o.a)({}, e), {}, { approvalState: "fail" });
                        case "confirm_sending":
                            return Object(o.a)(Object(o.a)({}, e), {}, { confirmState: "loading" });
                        case "confirm_receipt":
                            return Object(o.a)(Object(o.a)({}, e), {}, { confirmState: "success" });
                        case "confirm_error":
                            return Object(o.a)(Object(o.a)({}, e), {}, { confirmState: "fail" });
                        default:
                            return e
                    }
                };
            t.a = function(e) {
                var t = e.onApprove,
                    n = e.onConfirm,
                    c = e.onRequiresApproval,
                    o = e.onSuccess,
                    p = void 0 === o ? l.noop : o,
                    f = e.onApproveSuccess,
                    O = void 0 === f ? l.noop : f,
                    x = Object(d.b)().t,
                    h = Object(u.c)().account,
                    g = Object(s.useReducer)(m, j),
                    v = Object(a.a)(g, 2),
                    y = v[0],
                    I = v[1],
                    k = Object(s.useRef)(c),
                    w = Object(b.a)().toastError;
                return Object(s.useEffect)((function() { h && k.current && k.current().then((function(e) { e && I({ type: "requires_approval" }) })) }), [h, k, I]), {
                    isApproving: "loading" === y.approvalState,
                    isApproved: "success" === y.approvalState,
                    isConfirming: "loading" === y.confirmState,
                    isConfirmed: "success" === y.confirmState,
                    handleApprove: function() {
                        var e = Object(i.a)(r.a.mark((function e() {
                            var n, c;
                            return r.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, t();
                                    case 3:
                                        return n = e.sent, I({ type: "approve_sending" }), e.next = 7, n.wait();
                                    case 7:
                                        (c = e.sent).status && (I({ type: "approve_receipt" }), O({ state: y, receipt: c })), e.next = 15;
                                        break;
                                    case 11:
                                        e.prev = 11, e.t0 = e.catch(0), I({ type: "approve_error" }), w(x("Error"), x("Please try again. Confirm the transaction and make sure you are paying enough gas!"));
                                    case 15:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 11]
                            ])
                        })));
                        return function() { return e.apply(this, arguments) }
                    }(),
                    handleConfirm: function() {
                        var e = Object(i.a)(r.a.mark((function e() {
                            var t, c;
                            return r.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return I({ type: "confirm_sending" }), e.prev = 1, e.next = 4, n();
                                    case 4:
                                        return t = e.sent, e.next = 7, t.wait();
                                    case 7:
                                        (c = e.sent).status && (I({ type: "confirm_receipt" }), p({ state: y, receipt: c })), e.next = 15;
                                        break;
                                    case 11:
                                        e.prev = 11, e.t0 = e.catch(1), I({ type: "confirm_error" }), w(x("Error"), x("Please try again. Confirm the transaction and make sure you are paying enough gas!"));
                                    case 15:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [1, 11]
                            ])
                        })));
                        return function() { return e.apply(this, arguments) }
                    }()
                }
            }
        },
        788: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() { return o }));
            var c, r, i, a, o, s = n(8),
                l = (n(1), n(5)),
                u = n(2),
                b = n(13),
                d = n(0);
            ! function(e) { e.ROW = "row", e.SEQUENTIAL = "sequential" }(o || (o = {}));
            var j = l.e.div(c || (c = Object(s.a)(["\n  align-items: center;\n  display: grid;\n  grid-template-columns: 1fr;\n  justify-content: center;\n\n  ", " {\n    grid-template-columns: 1fr 24px 1fr;\n  }\n"])), (function(e) { return e.theme.mediaQueries.md })),
                m = Object(l.e)(u.p)(r || (r = Object(s.a)(["\n  width: 100%;\n\n  ", " {\n    min-width: 160px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.md })),
                p = { width: "24px", color: "textDisabled" },
                f = Object(l.e)(u.F).attrs(p)(i || (i = Object(s.a)(["\n  display: none;\n\n  ", " {\n    display: block;\n  }\n"])), (function(e) { return e.theme.mediaQueries.md })),
                O = Object(l.e)(u.D).attrs(p)(a || (a = Object(s.a)(["\n  display: block;\n\n  ", " {\n    display: none;\n  }\n"])), (function(e) { return e.theme.mediaQueries.md })),
                x = Object(d.jsx)(u.i, { spin: !0, color: "currentColor" });
            t.b = function(e) {
                var t = e.isApproveDisabled,
                    n = e.isApproving,
                    c = e.isConfirming,
                    r = e.isConfirmDisabled,
                    i = e.onApprove,
                    a = e.onConfirm,
                    s = e.buttonArrangement,
                    l = void 0 === s ? o.ROW : s,
                    p = e.confirmLabel,
                    h = e.confirmId,
                    g = Object(b.b)().t,
                    v = null !== p && void 0 !== p ? p : g("Confirm");
                return l === o.ROW ? Object(d.jsxs)(j, { children: [Object(d.jsx)(u.m, { children: Object(d.jsx)(m, { disabled: t, onClick: i, endIcon: n ? x : void 0, isLoading: n, children: g(n ? "Enabling" : "Enable") }) }), Object(d.jsxs)(u.R, { justifyContent: "center", children: [Object(d.jsx)(f, {}), Object(d.jsx)(O, {})] }), Object(d.jsx)(u.m, { children: Object(d.jsx)(m, { id: h, onClick: a, disabled: r, isLoading: c, endIcon: c ? x : void 0, children: c ? g("Confirming") : v }) })] }) : Object(d.jsx)(d.Fragment, { children: t ? Object(d.jsx)(u.m, { children: Object(d.jsx)(m, { id: h, onClick: a, disabled: r, isLoading: c, endIcon: c ? x : void 0, children: c ? g("Confirming") : v }) }) : Object(d.jsx)(u.m, { children: Object(d.jsx)(m, { onClick: i, endIcon: n ? x : void 0, isLoading: n, children: g(n ? "Enabling" : "Enable") }) }) })
            }
        },
        816: function(e, t, n) {
            var c = n(833),
                r = n(834),
                i = n(244),
                a = n(99),
                o = n(367);
            e.exports = function(e, t, n) { var s = a(e) ? c : r; return n && o(e, t, n) && (t = void 0), s(e, i(t, 3)) }
        },
        831: function(e, t, n) {
            "use strict";
            var c, r, i, a = n(6),
                o = n(9),
                s = n(51),
                l = n(8),
                u = n(1),
                b = n(5),
                d = n(2),
                j = n(13),
                m = n(0),
                p = ["title", "children"],
                f = Object(b.e)(d.R)(c || (c = Object(l.a)(["\n  cursor: pointer;\n"]))),
                O = Object(b.e)(d.R)(r || (r = Object(l.a)(["\n  button {\n    align-items: center;\n    justify-content: flex-start;\n  }\n"]))),
                x = Object(b.e)(d.R)(i || (i = Object(l.a)(["\n  overflow: hidden;\n  height: ", ";\n  padding-bottom: ", ";\n  border-bottom: 1px solid ", ";\n"])), (function(e) { return e.isExpanded ? "100%" : "0px" }), (function(e) { return e.isExpanded ? "16px" : "0px" }), (function(e) { return e.theme.colors.inputSecondary }));
            t.a = function(e) {
                var t = e.title,
                    n = e.children,
                    c = Object(s.a)(e, p),
                    r = Object(j.b)().t,
                    i = Object(u.useState)(!1),
                    l = Object(o.a)(i, 2),
                    b = l[0],
                    h = l[1];
                return Object(m.jsxs)(f, Object(a.a)(Object(a.a)({}, c), {}, { flexDirection: "column", onClick: function() { return h(!b) }, children: [Object(m.jsxs)(d.R, { justifyContent: "space-between", alignItems: "center", pb: "16px", children: [Object(m.jsx)(d.Qb, { fontWeight: "bold", children: t }), Object(m.jsx)(O, { children: Object(m.jsx)(d.P, { expanded: b, onClick: function() { return h(!b) }, children: r(b ? "Hide" : "Details") }) })] }), Object(m.jsx)(x, { isExpanded: b, flexDirection: "column", children: n })] }))
            }
        },
        833: function(e, t) {
            e.exports = function(e, t) {
                for (var n = -1, c = null == e ? 0 : e.length; ++n < c;)
                    if (!t(e[n], n, e)) return !1;
                return !0
            }
        },
        834: function(e, t, n) {
            var c = n(369);
            e.exports = function(e, t) { var n = !0; return c(e, (function(e, c, r) { return n = !!t(e, c, r) })), n }
        }
    }
]);
//# sourceMappingURL=7.b83a308b.chunk.js.map