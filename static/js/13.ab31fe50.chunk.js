(this["webpackJsonppancake-frontend"] = this["webpackJsonppancake-frontend"] || []).push([
    [13], { 1254: function(e, t, n) { "use strict";
            n.r(t), n.d(t, "default", (function() { return ur })); var r, a = n(6),
                c = n(9),
                i = n(8),
                s = n(1),
                l = n.n(s),
                o = n(75),
                d = n(14),
                b = n.n(d),
                j = n(42),
                u = n(2),
                p = n(4),
                x = n(5),
                O = n(433),
                h = n(185),
                m = n(95),
                f = n(380),
                g = n(13),
                v = n(30),
                y = n(396),
                k = n(119),
                w = n(395),
                S = n(352),
                C = n(46),
                T = n(41),
                D = n(383),
                A = n(439),
                R = n(434),
                Q = n(435),
                q = n(37),
                L = n(0),
                P = x.e.div(r || (r = Object(i.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n\n  svg {\n    fill: ", ";\n  }\n"])), (function(e) { return e.theme.colors.primary })),
                B = function(e) { var t = e.onClick,
                        n = e.expanded,
                        r = Object(g.b)().t; return Object(L.jsxs)(P, { "aria-label": r("Hide or show expandable content"), role: "button", onClick: function() { return t() }, children: [Object(L.jsx)(u.Qb, { color: "primary", bold: !0, children: r(n ? "Hide" : "Details") }), n ? Object(L.jsx)(u.G, {}) : Object(L.jsx)(u.D, {})] }) };
            B.defaultProps = { expanded: !1 }; var N, U, F, z, E, W, I, M, G, V, H, _, Y, X, $, J, Z, K, ee, te, ne, re, ae, ce, ie, se, le, oe, de, be, je, ue, pe, xe, Oe, he, me, fe, ge, ve, ye, ke, we, Se, Ce, Te, De, Ae, Re, Qe, qe, Le, Pe, Be, Ne, Ue, Fe, ze, Ee, We, Ie, Me, Ge, Ve, He, _e, Ye, Xe, $e = B,
                Je = n(49),
                Ze = n(34),
                Ke = n(36),
                et = function(e) { var t = e.quoteTokenAddress,
                        n = e.tokenAddress,
                        r = Ke.a.wbnb.address,
                        a = n && n !== r ? n : "BNB"; return "".concat(t && t !== r ? t : "BNB", "/").concat(a) },
                tt = x.e.div(N || (N = Object(i.a)(["\n  margin-top: 24px;\n"]))),
                nt = Object(x.e)(u.ab)(U || (U = Object(i.a)(["\n  font-weight: 400;\n"]))),
                rt = function(e) { var t = e.bscScanAddress,
                        n = e.infoAddress,
                        r = e.removed,
                        a = e.totalValueFormatted,
                        c = e.lpLabel,
                        i = e.addLiquidityUrl,
                        s = Object(g.b)().t; return Object(L.jsxs)(tt, { children: [Object(L.jsxs)(u.R, { justifyContent: "space-between", children: [Object(L.jsxs)(u.Qb, { children: [s("Total Liquidity"), ":"] }), a ? Object(L.jsx)(u.Qb, { children: a }) : Object(L.jsx)(u.Db, { width: 75, height: 25 })] }), !r && Object(L.jsx)(nt, { href: i, children: s("Get %symbol%", { symbol: c }) }), Object(L.jsx)(nt, { href: t, children: s("View Contract") }), Object(L.jsx)(nt, { href: n, children: s("See Pair Info") })] }) },
                at = n(195),
                ct = n(248),
                it = Object(x.e)(u.R)(F || (F = Object(i.a)(["\n  svg {\n    margin-right: 4px;\n  }\n"]))),
                st = Object(x.e)(u.Pb)(z || (z = Object(i.a)(["\n  margin-left: 4px;\n"]))),
                lt = function(e) { var t = e.lpLabel,
                        n = e.multiplier,
                        r = e.isCommunityFarm,
                        a = e.token,
                        c = e.quoteToken; return Object(L.jsxs)(it, { justifyContent: "space-between", alignItems: "center", mb: "12px", children: [Object(L.jsx)(ct.b, { variant: "inverted", primaryToken: a, secondaryToken: c, width: 64, height: 64 }), Object(L.jsxs)(u.R, { flexDirection: "column", alignItems: "flex-end", children: [Object(L.jsx)(u.T, { mb: "4px", children: t.split(" ")[0] }), Object(L.jsxs)(u.R, { justifyContent: "center", children: [r ? Object(L.jsx)(at.a, {}) : Object(L.jsx)(at.c, {}), n ? Object(L.jsx)(st, { variant: "secondary", children: n }) : Object(L.jsx)(u.Db, { ml: "4px", width: 42, height: 28 })] })] })] }) },
                ot = n(3),
                dt = n.n(ot),
                bt = n(12),
                jt = n(59),
                ut = n(121),
                pt = n(44),
                xt = n(105),
                Ot = n(43),
                ht = x.e.div(E || (E = Object(i.a)(["\n  height: ", "px;\n  width: ", "px;\n"])), (function(e) { return e.size }), (function(e) { return e.size })),
                mt = function(e) { var t, n = e.size,
                        r = void 0 === n ? "md" : n,
                        a = Object(s.useContext)(x.a).spacing; switch (r) {
                        case "lg":
                            t = a[6]; break;
                        case "sm":
                            t = a[2]; break;
                        case "md":
                        default:
                            t = a[4] } return Object(L.jsx)(ht, { size: t }) },
                ft = x.e.div(W || (W = Object(i.a)(["\n  align-items: center;\n  background-color: ", "00;\n  display: flex;\n  margin: 0;\n  padding: ", "px 0;\n"])), (function(e) { return e.theme.colors.primaryDark }), (function(e) { return e.theme.spacing[4] })),
                gt = x.e.div(I || (I = Object(i.a)(["\n  flex: 1;\n"]))),
                vt = function(e) { var t = e.children,
                        n = l.a.Children.toArray(t).length; return Object(L.jsx)(ft, { children: l.a.Children.map(t, (function(e, t) { return Object(L.jsxs)(L.Fragment, { children: [Object(L.jsx)(gt, { children: e }), t < n - 1 && Object(L.jsx)(mt, {})] }) })) }) },
                yt = n(61),
                kt = x.e.div(M || (M = Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n  background-color: ", ";\n  border-radius: 16px;\n  box-shadow: ", ";\n  color: ", ";\n  padding: 8px 16px 8px 0;\n  width: 100%;\n"])), (function(e) { return e.theme.colors.input }), (function(e) { var t = e.isWarning,
                        n = void 0 !== t && t,
                        r = e.theme; return n ? r.shadows.warning : r.shadows.inset }), (function(e) { return e.theme.colors.text })),
                wt = Object(x.e)(u.Y)(G || (G = Object(i.a)(["\n  box-shadow: none;\n  width: 60px;\n  margin: 0 8px;\n  padding: 0 8px;\n  border: none;\n\n  ", " {\n    width: 80px;\n  }\n\n  ", " {\n    width: auto;\n  }\n"])), (function(e) { return e.theme.mediaQueries.xs }), (function(e) { return e.theme.mediaQueries.sm })),
                St = Object(x.e)(u.Qb)(V || (V = Object(i.a)(["\n  position: absolute;\n  bottom: -22px;\n  a {\n    display: inline;\n  }\n"]))),
                Ct = function(e) { var t = e.max,
                        n = e.symbol,
                        r = e.onChange,
                        a = e.onSelectMax,
                        c = e.value,
                        i = e.addLiquidityUrl,
                        s = e.inputTitle,
                        l = e.decimals,
                        o = void 0 === l ? 18 : l,
                        d = Object(g.b)().t,
                        b = "0" === t || !t; return Object(L.jsxs)("div", { style: { position: "relative" }, children: [Object(L.jsxs)(kt, { isWarning: b, children: [Object(L.jsxs)(u.R, { justifyContent: "space-between", pl: "16px", children: [Object(L.jsx)(u.Qb, { fontSize: "14px", children: s }), Object(L.jsx)(u.Qb, { fontSize: "14px", children: d("Balance: %balance%", { balance: function(e) { if (b) return "0"; var t = Object(yt.parseUnits)(e, o); return Object(v.a)(t, o, o) }(t) }) })] }), Object(L.jsxs)(u.R, { alignItems: "flex-end", justifyContent: "space-around", children: [Object(L.jsx)(wt, { pattern: "^[0-9]*[.,]?[0-9]{0,".concat(o, "}$"), inputMode: "decimal", step: "any", min: "0", onChange: r, placeholder: "0", value: c }), Object(L.jsx)(u.p, { scale: "sm", onClick: a, mr: "8px", children: d("Max") }), Object(L.jsx)(u.Qb, { fontSize: "16px", children: n })] })] }), b && Object(L.jsxs)(St, { fontSize: "14px", color: "failure", children: [d("No tokens to stake"), ":", " ", Object(L.jsx)(u.Z, { fontSize: "14px", bold: !1, href: i, external: !0, color: "failure", children: d("Get %symbol%", { symbol: n }) })] })] }) },
                Tt = n(158),
                Dt = n(92),
                At = n(114),
                Rt = Object(x.e)(u.R)(H || (H = Object(i.a)(["\n  cursor: pointer;\n"]))),
                Qt = Object(x.e)(u.Qb)(_ || (_ = Object(i.a)(["\n  width: 72px;\n  max-width: 72px;\n  overflow: hidden;\n  text-align: right;\n  text-overflow: ellipsis;\n"]))),
                qt = function(e) { var t = e.max,
                        n = e.stakedBalance,
                        r = e.onConfirm,
                        a = e.onDismiss,
                        i = e.tokenName,
                        l = void 0 === i ? "" : i,
                        o = e.multiplier,
                        d = e.displayApr,
                        j = e.lpPrice,
                        p = e.lpLabel,
                        x = e.apr,
                        O = e.addLiquidityUrl,
                        h = e.cakePrice,
                        m = Object(s.useState)(""),
                        f = Object(c.a)(m, 2),
                        y = f[0],
                        k = f[1],
                        w = Object(Dt.a)(),
                        S = w.toastSuccess,
                        C = w.toastError,
                        T = Object(s.useState)(!1),
                        D = Object(c.a)(T, 2),
                        A = D[0],
                        R = D[1],
                        Q = Object(s.useState)(!1),
                        q = Object(c.a)(Q, 2),
                        P = q[0],
                        B = q[1],
                        N = Object(g.b)().t,
                        U = Object(s.useMemo)((function() { return Object(v.g)(t) }), [t]),
                        F = new b.a(y),
                        z = new b.a(U),
                        E = F.times(j),
                        W = Object(At.b)({ principalInUSD: F.isNaN() ? 0 : E.toNumber(), apr: x, earningTokenPrice: h.toNumber() }),
                        I = h.times(W[3]),
                        M = Object(v.c)(I.toNumber(), I.gt(1e4) ? 0 : 2, I.gt(1e4) ? 0 : 2),
                        G = Object(s.useCallback)((function(e) { e.currentTarget.validity.valid && k(e.currentTarget.value.replace(/,/g, ".")) }), [k]),
                        V = Object(s.useCallback)((function() { k(U) }), [U, k]); return P ? Object(L.jsx)(Tt.a, { linkLabel: N("Get %symbol%", { symbol: p }), stakingTokenBalance: n.plus(t), stakingTokenSymbol: l, stakingTokenPrice: j.toNumber(), earningTokenPrice: h.toNumber(), apr: x, multiplier: o, displayApr: d, linkHref: O, isFarm: !0, initialValue: y, onBack: function() { return B(!1) } }) : Object(L.jsxs)(u.ib, { title: N("Stake LP tokens"), onDismiss: a, children: [Object(L.jsx)(Ct, { value: y, onSelectMax: V, onChange: G, max: U, symbol: l, addLiquidityUrl: O, inputTitle: N("Stake") }), Object(L.jsxs)(u.R, { mt: "24px", alignItems: "center", justifyContent: "space-between", children: [Object(L.jsxs)(u.Qb, { mr: "8px", color: "textSubtle", children: [N("Annual ROI at current rates"), ":"] }), Object(L.jsxs)(Rt, { alignItems: "center", onClick: function() { return B(!0) }, children: [Object(L.jsxs)(Qt, { children: ["$", M] }), Object(L.jsx)(u.W, { variant: "text", scale: "sm", children: Object(L.jsx)(u.s, { color: "textSubtle", width: "18px" }) })] })] }), Object(L.jsxs)(vt, { children: [Object(L.jsx)(u.p, { variant: "secondary", onClick: a, width: "100%", disabled: A, children: N("Cancel") }), Object(L.jsx)(u.p, { width: "100%", disabled: A || !F.isFinite() || F.eq(0) || F.gt(z), onClick: Object(bt.a)(dt.a.mark((function e() { return dt.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return R(!0), e.prev = 1, e.next = 4, r(y);
                                            case 4:
                                                S(N("Staked!"), N("Your funds have been staked in the farm")), a(), e.next = 12; break;
                                            case 8:
                                                e.prev = 8, e.t0 = e.catch(1), C(N("Error"), N("Please try again. Confirm the transaction and make sure you are paying enough gas!")), console.error(e.t0);
                                            case 12:
                                                return e.prev = 12, R(!1), e.finish(12);
                                            case 15:
                                            case "end":
                                                return e.stop() } }), e, null, [
                                        [1, 8, 12, 15]
                                    ]) }))), children: N(A ? "Confirming" : "Confirm") })] }), Object(L.jsx)(u.ab, { href: O, style: { alignSelf: "center" }, children: N("Get %symbol%", { symbol: l }) })] }) },
                Lt = function(e) { var t = e.onConfirm,
                        n = e.onDismiss,
                        r = e.max,
                        a = e.tokenName,
                        i = void 0 === a ? "" : a,
                        l = Object(s.useState)(""),
                        o = Object(c.a)(l, 2),
                        d = o[0],
                        j = o[1],
                        p = Object(Dt.a)(),
                        x = p.toastSuccess,
                        O = p.toastError,
                        h = Object(s.useState)(!1),
                        m = Object(c.a)(h, 2),
                        f = m[0],
                        y = m[1],
                        k = Object(g.b)().t,
                        w = Object(s.useMemo)((function() { return Object(v.g)(r) }), [r]),
                        S = new b.a(d),
                        C = new b.a(w),
                        T = Object(s.useCallback)((function(e) { e.currentTarget.validity.valid && j(e.currentTarget.value.replace(/,/g, ".")) }), [j]),
                        D = Object(s.useCallback)((function() { j(w) }), [w, j]); return Object(L.jsxs)(u.ib, { title: k("Unstake LP tokens"), onDismiss: n, children: [Object(L.jsx)(Ct, { onSelectMax: D, onChange: T, value: d, max: w, symbol: i, inputTitle: k("Unstake") }), Object(L.jsxs)(vt, { children: [Object(L.jsx)(u.p, { variant: "secondary", onClick: n, width: "100%", disabled: f, children: k("Cancel") }), Object(L.jsx)(u.p, { disabled: f || !S.isFinite() || S.eq(0) || S.gt(C), onClick: Object(bt.a)(dt.a.mark((function e() { return dt.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return y(!0), e.prev = 1, e.next = 4, t(d);
                                            case 4:
                                                x(k("Unstaked!"), k("Your earnings have also been harvested to your wallet")), n(), e.next = 12; break;
                                            case 8:
                                                e.prev = 8, e.t0 = e.catch(1), O(k("Error"), k("Please try again. Confirm the transaction and make sure you are paying enough gas!")), console.error(e.t0);
                                            case 12:
                                                return e.prev = 12, y(!1), e.finish(12);
                                            case 15:
                                            case "end":
                                                return e.stop() } }), e, null, [
                                        [1, 8, 12, 15]
                                    ]) }))), width: "100%", children: k(f ? "Confirming" : "Confirm") })] })] }) },
                Pt = n(188),
                Bt = function(e) { var t = Object(pt.l)(); return { onUnstake: Object(s.useCallback)(function() { var n = Object(bt.a)(dt.a.mark((function n(r) { return dt.a.wrap((function(n) { for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            return n.next = 2, Object(Pt.c)(t, e, r);
                                        case 2:
                                        case "end":
                                            return n.stop() } }), n) }))); return function(e) { return n.apply(this, arguments) } }(), [t, e]) } },
                Nt = function(e) { var t = Object(pt.l)(); return { onStake: Object(s.useCallback)(function() { var n = Object(bt.a)(dt.a.mark((function n(r) { var a; return dt.a.wrap((function(n) { for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            return n.next = 2, Object(Pt.b)(t, e, r);
                                        case 2:
                                            a = n.sent, console.info(a);
                                        case 4:
                                        case "end":
                                            return n.stop() } }), n) }))); return function(e) { return n.apply(this, arguments) } }(), [t, e]) } },
                Ut = x.e.div(Y || (Y = Object(i.a)(["\n  display: flex;\n  svg {\n    width: 20px;\n  }\n"]))),
                Ft = function(e) { var t = e.stakedBalance,
                        n = e.tokenBalance,
                        r = e.tokenName,
                        a = e.pid,
                        i = e.multiplier,
                        l = e.apr,
                        d = e.displayApr,
                        p = e.addLiquidityUrl,
                        x = e.cakePrice,
                        O = e.lpLabel,
                        h = Object(g.b)().t,
                        f = Nt(a).onStake,
                        y = Bt(a).onUnstake,
                        k = Object(o.h)(),
                        w = Object(jt.b)(),
                        S = Object(j.c)().account,
                        C = Object(m.c)(r),
                        T = function() { var e = Object(bt.a)(dt.a.mark((function e(t) { return dt.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, f(t);
                                        case 2:
                                            w(Object(ut.b)({ account: S, pids: [a] }));
                                        case 3:
                                        case "end":
                                            return e.stop() } }), e) }))); return function(t) { return e.apply(this, arguments) } }(),
                        D = function() { var e = Object(bt.a)(dt.a.mark((function e(t) { return dt.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, y(t);
                                        case 2:
                                            w(Object(ut.b)({ account: S, pids: [a] }));
                                        case 3:
                                        case "end":
                                            return e.stop() } }), e) }))); return function(t) { return e.apply(this, arguments) } }(),
                        A = Object(s.useCallback)((function() { var e = Object(v.d)(t); return e.gt(0) && e.lt(1e-7) ? "<0.0000001" : e.gt(0) ? e.toFixed(8, b.a.ROUND_DOWN) : e.toFixed(3, b.a.ROUND_DOWN) }), [t]),
                        R = Object(u.kc)(Object(L.jsx)(qt, { max: n, stakedBalance: t, onConfirm: T, tokenName: r, multiplier: i, lpPrice: C, lpLabel: O, apr: l, displayApr: d, addLiquidityUrl: p, cakePrice: x })),
                        Q = Object(c.a)(R, 1)[0],
                        q = Object(u.kc)(Object(L.jsx)(Lt, { max: t, onConfirm: D, tokenName: r })),
                        P = Object(c.a)(q, 1)[0]; return Object(L.jsxs)(u.R, { justifyContent: "space-between", alignItems: "center", children: [Object(L.jsxs)(u.R, { flexDirection: "column", alignItems: "flex-start", children: [Object(L.jsx)(u.T, { color: t.eq(0) ? "textDisabled" : "text", children: A() }), t.gt(0) && C.gt(0) && Object(L.jsx)(Ot.a, { fontSize: "12px", color: "textSubtle", decimals: 2, value: Object(v.e)(C.times(t)), unit: " USD", prefix: "~" })] }), t.eq(0) ? Object(L.jsx)(u.p, { onClick: Q, disabled: ["history", "archived"].some((function(e) { return k.pathname.includes(e) })), children: h("Stake LP") }) : Object(L.jsxs)(Ut, { children: [Object(L.jsx)(u.W, { variant: "tertiary", onClick: P, mr: "6px", children: Object(L.jsx)(u.hb, { color: "primary", width: "14px" }) }), Object(L.jsx)(u.W, { variant: "tertiary", onClick: Q, disabled: ["history", "archived"].some((function(e) { return k.pathname.includes(e) })), children: Object(L.jsx)(u.a, { color: "primary", width: "14px" }) })] })] }) },
                zt = n(29),
                Et = function(e) { var t = Object(pt.l)(); return { onReward: Object(s.useCallback)(Object(bt.a)(dt.a.mark((function n() { return dt.a.wrap((function(n) { for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return n.next = 2, Object(Pt.a)(t, e);
                                    case 2:
                                    case "end":
                                        return n.stop() } }), n) }))), [e, t]) } },
                Wt = function(e) { var t = e.earnings,
                        n = e.pid,
                        r = Object(j.c)().account,
                        a = Object(Dt.a)(),
                        i = a.toastSuccess,
                        l = a.toastError,
                        o = Object(g.b)().t,
                        d = Object(s.useState)(!1),
                        p = Object(c.a)(d, 2),
                        x = p[0],
                        O = p[1],
                        h = Et(n).onReward,
                        f = Object(m.g)(),
                        y = Object(jt.b)(),
                        k = r ? Object(v.d)(t) : zt.c,
                        w = k.toFixed(3, b.a.ROUND_DOWN),
                        S = k ? k.multipliedBy(f).toNumber() : 0; return Object(L.jsxs)(u.R, { mb: "8px", justifyContent: "space-between", alignItems: "center", children: [Object(L.jsxs)(u.R, { flexDirection: "column", alignItems: "flex-start", children: [Object(L.jsx)(u.T, { color: k.eq(0) ? "textDisabled" : "text", children: w }), S > 0 && Object(L.jsx)(Ot.a, { fontSize: "12px", color: "textSubtle", decimals: 2, value: S, unit: " USD", prefix: "~" })] }), Object(L.jsx)(u.p, { disabled: k.eq(0) || x, onClick: Object(bt.a)(dt.a.mark((function e() { return dt.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return O(!0), e.prev = 1, e.next = 4, h();
                                        case 4:
                                            i("".concat(o("Harvested"), "!"), o("Your %symbol% earnings have been sent to your wallet!", { symbol: "" })), e.next = 11; break;
                                        case 7:
                                            e.prev = 7, e.t0 = e.catch(1), l(o("Error"), o("Please try again. Confirm the transaction and make sure you are paying enough gas!")), console.error(e.t0);
                                        case 11:
                                            return e.prev = 11, O(!1), e.finish(11);
                                        case 14:
                                            y(Object(ut.b)({ account: r, pids: [n] }));
                                        case 15:
                                        case "end":
                                            return e.stop() } }), e, null, [
                                    [1, 7, 11, 14]
                                ]) }))), children: o("Harvest") })] }) },
                It = n(54),
                Mt = n(126),
                Gt = function(e) { var t = Object(pt.l)(),
                        n = Object(Mt.a)().callWithGasPrice; return { onApprove: Object(s.useCallback)(Object(bt.a)(dt.a.mark((function r() { var a, c; return dt.a.wrap((function(r) { for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        return r.prev = 0, r.next = 3, n(e, "approve", [t.address, It.a.constants.MaxUint256]);
                                    case 3:
                                        return a = r.sent, r.next = 6, a.wait();
                                    case 6:
                                        return c = r.sent, r.abrupt("return", c.status);
                                    case 10:
                                        return r.prev = 10, r.t0 = r.catch(0), r.abrupt("return", !1);
                                    case 13:
                                    case "end":
                                        return r.stop() } }), r, null, [
                                [0, 10]
                            ]) }))), [e, t, n]) } },
                Vt = x.e.div(X || (X = Object(i.a)(["\n  padding-top: 16px;\n"]))),
                Ht = function(e) { var t = e.farm,
                        n = e.account,
                        r = e.addLiquidityUrl,
                        a = e.cakePrice,
                        i = e.lpLabel,
                        l = Object(g.b)().t,
                        o = Object(s.useState)(!1),
                        d = Object(c.a)(o, 2),
                        b = d[0],
                        j = d[1],
                        p = t.pid,
                        x = t.lpAddresses,
                        O = t.userData || {},
                        h = O.allowance,
                        m = O.tokenBalance,
                        f = O.stakedBalance,
                        v = O.earnings,
                        y = Object(Ze.a)(x),
                        k = n && h && h.isGreaterThan(0),
                        w = Object(jt.b)(),
                        S = Object(pt.h)(y),
                        C = Gt(S).onApprove,
                        T = Object(s.useCallback)(Object(bt.a)(dt.a.mark((function e() { return dt.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, j(!0), e.next = 4, C();
                                    case 4:
                                        w(Object(ut.b)({ account: n, pids: [p] })), j(!1), e.next = 11; break;
                                    case 8:
                                        e.prev = 8, e.t0 = e.catch(0), console.error(e.t0);
                                    case 11:
                                    case "end":
                                        return e.stop() } }), e, null, [
                                [0, 8]
                            ]) }))), [C, w, n, p]); return Object(L.jsxs)(Vt, { children: [Object(L.jsxs)(u.R, { children: [Object(L.jsx)(u.Qb, { bold: !0, textTransform: "uppercase", color: "secondary", fontSize: "12px", pr: "4px", children: "BSWAP" }), Object(L.jsx)(u.Qb, { bold: !0, textTransform: "uppercase", color: "textSubtle", fontSize: "12px", children: l("Earned") })] }), Object(L.jsx)(Wt, { earnings: v, pid: p }), Object(L.jsxs)(u.R, { children: [Object(L.jsx)(u.Qb, { bold: !0, textTransform: "uppercase", color: "secondary", fontSize: "12px", pr: "4px", children: t.lpSymbol }), Object(L.jsx)(u.Qb, { bold: !0, textTransform: "uppercase", color: "textSubtle", fontSize: "12px", children: l("Staked") })] }), n ? k ? Object(L.jsx)(Ft, { stakedBalance: f, tokenBalance: m, tokenName: t.lpSymbol, pid: p, apr: t.apr, lpLabel: i, cakePrice: a, addLiquidityUrl: r }) : Object(L.jsx)(u.p, { mt: "8px", width: "100%", disabled: b, onClick: T, children: l("Enable Contract") }) : Object(L.jsx)(xt.a, { mt: "8px", width: "100%" })] }) },
                _t = Object(x.e)(u.R)($ || ($ = Object(i.a)(["\n  cursor: pointer;\n\n  &:hover {\n    opacity: 0.5;\n  }\n"]))),
                Yt = function(e) { var t = e.variant,
                        n = e.pid,
                        r = e.lpLabel,
                        a = e.lpSymbol,
                        i = e.cakePrice,
                        s = e.apr,
                        l = e.multiplier,
                        o = e.displayApr,
                        d = e.addLiquidityUrl,
                        b = Object(g.b)().t,
                        j = Object(m.c)(a),
                        p = Object(m.a)(n),
                        x = p.tokenBalance,
                        O = p.stakedBalance,
                        h = Object(u.kc)(Object(L.jsx)(Tt.a, { linkLabel: b("Get %symbol%", { symbol: r }), stakingTokenBalance: O.plus(x), stakingTokenSymbol: a, stakingTokenPrice: j.toNumber(), earningTokenPrice: i.toNumber(), apr: s, multiplier: l, displayApr: o, linkHref: d, isFarm: !0 })),
                        f = Object(c.a)(h, 1)[0]; return Object(L.jsxs)(_t, { alignItems: "center", onClick: function(e) { e.stopPropagation(), f() }, children: [o, "%", "text-and-button" === t && Object(L.jsx)(u.W, { variant: "text", scale: "sm", ml: "4px", children: Object(L.jsx)(u.s, { width: "18px" }) })] }) },
                Xt = Object(x.e)(u.t)(J || (J = Object(i.a)(["\n  align-self: baseline;\n"]))),
                $t = Object(x.e)(u.R)(Z || (Z = Object(i.a)(["\n  flex-direction: column;\n  justify-content: space-around;\n  padding: 24px;\n"]))),
                Jt = x.e.div(K || (K = Object(i.a)(["\n  padding: 24px;\n  border-top: 2px solid ", ";\n  overflow: hidden;\n"])), (function(e) { return e.theme.colors.cardBorder })),
                Zt = function(e) { var t = e.farm,
                        n = e.displayApr,
                        r = e.removed,
                        a = e.cakePrice,
                        i = e.account,
                        l = Object(g.b)().t,
                        o = Object(s.useState)(!1),
                        d = Object(c.a)(o, 2),
                        b = d[0],
                        j = d[1],
                        p = t.liquidity && t.liquidity.gt(0) ? "$".concat(t.liquidity.toNumber().toLocaleString(void 0, { maximumFractionDigits: 0 })) : "",
                        x = t.lpSymbol && t.lpSymbol.toUpperCase().replace("BSWAP", ""),
                        O = t.dual ? t.dual.earnLabel : l("BSWAP + Fees"),
                        h = et({ quoteTokenAddress: t.quoteToken.address, tokenAddress: t.token.address }),
                        m = "".concat(Je.c, "/").concat(h),
                        f = Object(Ze.a)(t.lpAddresses),
                        v = "BSWAP" === t.token.symbol; return Object(L.jsxs)(Xt, { isActive: v, children: [Object(L.jsxs)($t, { children: [Object(L.jsx)(lt, { lpLabel: x, multiplier: t.multiplier, isCommunityFarm: t.isCommunity, token: t.token, quoteToken: t.quoteToken }), !r && Object(L.jsxs)(u.R, { justifyContent: "space-between", alignItems: "center", children: [Object(L.jsxs)(u.Qb, { children: [l("APR"), ":"] }), Object(L.jsx)(u.Qb, { bold: !0, style: { display: "flex", alignItems: "center" }, children: t.apr ? Object(L.jsx)(Yt, { variant: "text-and-button", pid: t.pid, lpSymbol: t.lpSymbol, multiplier: t.multiplier, lpLabel: x, addLiquidityUrl: m, cakePrice: a, apr: t.apr, displayApr: n }) : Object(L.jsx)(u.Db, { height: 24, width: 80 }) })] }), Object(L.jsxs)(u.R, { justifyContent: "space-between", children: [Object(L.jsxs)(u.Qb, { children: [l("Earn"), ":"] }), Object(L.jsx)(u.Qb, { bold: !0, children: O })] }), Object(L.jsx)(Ht, { farm: t, lpLabel: x, account: i, cakePrice: a, addLiquidityUrl: m })] }), Object(L.jsxs)(Jt, { children: [Object(L.jsx)($e, { onClick: function() { return j(!b) }, expanded: b }), b && Object(L.jsx)(rt, { removed: r, bscScanAddress: Object(q.e)(f, "address"), infoAddress: "/info/pool/".concat(f), totalValueFormatted: p, lpLabel: x, addLiquidityUrl: m })] })] }) },
                Kt = n(436),
                en = x.e.div(ee || (ee = Object(i.a)(["\n  display: flex;\n  align-items: center;\n  color: ", ";\n\n  button {\n    width: 20px;\n    height: 20px;\n\n    svg {\n      path {\n        fill: ", ";\n      }\n    }\n  }\n"])), (function(e) { return e.theme.colors.text }), (function(e) { return e.theme.colors.textSubtle })),
                tn = x.e.div(te || (te = Object(i.a)(["\n  min-width: 60px;\n  text-align: left;\n"]))),
                nn = function(e) { var t = e.value,
                        n = e.pid,
                        r = e.lpLabel,
                        a = e.lpSymbol,
                        c = e.multiplier,
                        i = e.tokenAddress,
                        s = e.quoteTokenAddress,
                        l = e.cakePrice,
                        o = e.originalValue,
                        d = e.hideButton,
                        b = void 0 !== d && d,
                        j = et({ quoteTokenAddress: s, tokenAddress: i }),
                        p = "".concat(Je.c, "/").concat(j); return 0 !== o ? Object(L.jsx)(en, { children: o ? Object(L.jsx)(Yt, { variant: b ? "text" : "text-and-button", pid: n, lpSymbol: a, lpLabel: r, multiplier: c, cakePrice: l, apr: o, displayApr: t, addLiquidityUrl: p }) : Object(L.jsx)(tn, { children: Object(L.jsx)(u.Db, { width: 60 }) }) }) : Object(L.jsx)(en, { children: Object(L.jsxs)(tn, { children: [o, "%"] }) }) },
                rn = x.e.div(ne || (ne = Object(i.a)(["\n  padding-left: 16px;\n  display: flex;\n  align-items: center;\n\n  ", " {\n    padding-left: 32px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm })),
                an = x.e.div(re || (re = Object(i.a)(["\n  padding-right: 8px;\n  width: 24px;\n\n  ", " {\n    width: 40px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm })),
                cn = function(e) { var t = e.token,
                        n = e.quoteToken,
                        r = e.label,
                        a = e.pid,
                        c = Object(m.a)(a).stakedBalance,
                        i = Object(g.b)().t,
                        s = Object(v.e)(c); return Object(L.jsxs)(rn, { children: [Object(L.jsx)(an, { children: Object(L.jsx)(ct.b, { variant: "inverted", primaryToken: t, secondaryToken: n, width: 40, height: 40 }) }), Object(L.jsxs)("div", { children: [s ? Object(L.jsx)(u.Qb, { color: "secondary", fontSize: "12px", bold: !0, textTransform: "uppercase", children: i("Farming") }) : null, Object(L.jsx)(u.Qb, { bold: !0, children: r })] })] }) },
                sn = x.e.span(ae || (ae = Object(i.a)(["\n  color: ", ";\n  display: flex;\n  align-items: center;\n"])), (function(e) { var t = e.earned,
                        n = e.theme; return t ? n.colors.text : n.colors.textDisabled })),
                ln = function(e) { var t = e.earnings; return e.userDataReady ? Object(L.jsx)(sn, { earned: t, children: t.toLocaleString() }) : Object(L.jsx)(sn, { earned: 0, children: Object(L.jsx)(u.Db, { width: 60 }) }) },
                on = x.e.div(ce || (ce = Object(i.a)(["\n  display: flex;\n  width: 100%;\n  justify-content: flex-end;\n  padding-right: 8px;\n  color: ", ";\n\n  ", " {\n    padding-right: 0px;\n  }\n"])), (function(e) { return e.theme.colors.primary }), (function(e) { return e.theme.mediaQueries.sm })),
                dn = Object(x.e)(u.D)(ie || (ie = Object(i.a)(["\n  transform: ", ";\n  height: 20px;\n"])), (function(e) { return e.toggled ? "rotate(180deg)" : "rotate(0)" })),
                bn = function(e) { var t = e.actionPanelToggled,
                        n = Object(g.b)().t,
                        r = Object(u.jc)().isDesktop; return Object(L.jsxs)(on, { children: [!r && n("Details"), Object(L.jsx)(dn, { color: "primary", toggled: t })] }) },
                jn = x.e.div(se || (se = Object(i.a)(["\n  display: inline-block;\n"]))),
                un = x.e.div(le || (le = Object(i.a)(["\n  color: ", ";\n  width: 36px;\n  text-align: right;\n  margin-right: 14px;\n\n  ", " {\n    text-align: left;\n    margin-right: 0;\n  }\n"])), (function(e) { return e.theme.colors.text }), (function(e) { return e.theme.mediaQueries.lg })),
                pn = x.e.div(oe || (oe = Object(i.a)(["\n  display: flex;\n  align-items: center;\n"]))),
                xn = function(e) { var t = e.multiplier,
                        n = t ? t.toLowerCase() : Object(L.jsx)(u.Db, { width: 30 }),
                        r = Object(g.b)().t,
                        a = Object(L.jsxs)(L.Fragment, { children: [Object(L.jsx)(u.Qb, { children: r("The Multiplier represents the proportion of  rewards each farm receives, as a proportion of the  produced each block.") }), Object(L.jsx)(u.Qb, { my: "24px", children: r("For example, if a 1x farm received 1  per block, a 40x farm would receive 40  per block.") }), Object(L.jsx)(u.Qb, { children: r("This amount is already included in all APR calculations for the farm.") })] }),
                        c = Object(u.mc)(a, { placement: "top-end", tooltipOffset: [20, 10] }),
                        i = c.targetRef,
                        s = c.tooltip,
                        l = c.tooltipVisible; return Object(L.jsxs)(pn, { children: [Object(L.jsx)(un, { children: n }), Object(L.jsx)(jn, { ref: i, children: Object(L.jsx)(u.U, { color: "textSubtle" }) }), l && s] }) },
                On = x.e.div(de || (de = Object(i.a)(["\n  display: inline-block;\n"]))),
                hn = x.e.div(be || (be = Object(i.a)(["\n  min-width: 110px;\n  font-weight: 600;\n  text-align: right;\n  margin-right: 14px;\n\n  ", " {\n    text-align: left;\n    margin-right: 0;\n  }\n"])), (function(e) { return e.theme.mediaQueries.lg })),
                mn = x.e.div(je || (je = Object(i.a)(["\n  display: flex;\n  align-items: center;\n"]))),
                fn = function(e) { var t = e.liquidity,
                        n = t && t.gt(0) ? "$".concat(Number(t).toLocaleString(void 0, { maximumFractionDigits: 0 })) : Object(L.jsx)(u.Db, { width: 60 }),
                        r = Object(g.b)().t,
                        a = Object(u.mc)(r("Total value of the funds in this farm\u2019s liquidity pool"), { placement: "top-end", tooltipOffset: [20, 10] }),
                        c = a.targetRef,
                        i = a.tooltip,
                        s = a.tooltipVisible; return Object(L.jsxs)(mn, { children: [Object(L.jsx)(hn, { children: Object(L.jsx)(u.Qb, { children: n }) }), Object(L.jsx)(On, { ref: c, children: Object(L.jsx)(u.U, { color: "textSubtle" }) }), s && i] }) },
                gn = x.e.div(ue || (ue = Object(i.a)(["\n  padding: 16px;\n  border: 2px solid ", ";\n  border-radius: 16px;\n  flex-grow: 1;\n  flex-basis: 0;\n  margin-bottom: 16px;\n\n  ", " {\n    margin-left: 12px;\n    margin-right: 12px;\n    margin-bottom: 0;\n    max-height: 100px;\n  }\n\n  ", " {\n    margin-left: 48px;\n    margin-right: 0;\n    margin-bottom: 0;\n    max-height: 100px;\n  }\n"])), (function(e) { return e.theme.colors.input }), (function(e) { return e.theme.mediaQueries.sm }), (function(e) { return e.theme.mediaQueries.xl })),
                vn = x.e.div(pe || (pe = Object(i.a)(["\n  display: flex;\n"]))),
                yn = x.e.div(xe || (xe = Object(i.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),
                kn = function(e) { var t = e.pid,
                        n = e.userData,
                        r = e.userDataReady,
                        a = Object(Dt.a)(),
                        i = a.toastSuccess,
                        l = a.toastError,
                        o = new b.a(n.earnings),
                        d = Object(m.g)(),
                        p = zt.c,
                        x = 0,
                        O = r ? p.toLocaleString() : Object(L.jsx)(u.Db, { width: 60 });
                    o.isZero() || (x = (p = Object(v.d)(o)).multipliedBy(d).toNumber(), O = p.toFixed(3, b.a.ROUND_DOWN)); var h = Object(s.useState)(!1),
                        f = Object(c.a)(h, 2),
                        y = f[0],
                        k = f[1],
                        w = Et(t).onReward,
                        S = Object(g.b)().t,
                        C = Object(jt.b)(),
                        T = Object(j.c)().account; return Object(L.jsxs)(gn, { children: [Object(L.jsxs)(vn, { children: [Object(L.jsx)(u.Qb, { bold: !0, textTransform: "uppercase", color: "secondary", fontSize: "12px", pr: "4px", children: "BSWAP" }), Object(L.jsx)(u.Qb, { bold: !0, textTransform: "uppercase", color: "textSubtle", fontSize: "12px", children: S("Earned") })] }), Object(L.jsxs)(yn, { children: [Object(L.jsxs)("div", { children: [Object(L.jsx)(u.T, { children: O }), x > 0 && Object(L.jsx)(Ot.a, { fontSize: "12px", color: "textSubtle", decimals: 2, value: x, unit: " USD", prefix: "~" })] }), Object(L.jsx)(u.p, { disabled: p.eq(0) || y || !r, onClick: Object(bt.a)(dt.a.mark((function e() { return dt.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return k(!0), e.prev = 1, e.next = 4, w();
                                            case 4:
                                                i("".concat(S("Harvested"), "!"), S("Your %symbol% earnings have been sent to your wallet!", { symbol: "Cyber Cows" })), e.next = 11; break;
                                            case 7:
                                                e.prev = 7, e.t0 = e.catch(1), l(S("Error"), S("Please try again. Confirm the transaction and make sure you are paying enough gas!")), console.error(e.t0);
                                            case 11:
                                                return e.prev = 11, k(!1), e.finish(11);
                                            case 14:
                                                C(Object(ut.b)({ account: T, pids: [t] }));
                                            case 15:
                                            case "end":
                                                return e.stop() } }), e, null, [
                                        [1, 7, 11, 14]
                                    ]) }))), ml: "4px", children: S("Harvest") })] })] }) },
                wn = x.e.div(Oe || (Oe = Object(i.a)(["\n  display: flex;\n"]))),
                Sn = function(e) { var t = e.pid,
                        n = e.apr,
                        r = e.multiplier,
                        a = e.lpSymbol,
                        i = e.lpLabel,
                        l = e.lpAddresses,
                        b = e.quoteToken,
                        p = e.token,
                        x = e.userDataReady,
                        O = e.displayApr,
                        h = Object(g.b)().t,
                        f = Object(j.c)().account,
                        y = Object(s.useState)(!1),
                        k = Object(c.a)(y, 2),
                        w = k[0],
                        S = k[1],
                        C = Object(m.a)(t),
                        T = C.allowance,
                        D = C.tokenBalance,
                        A = C.stakedBalance,
                        R = Nt(t).onStake,
                        Q = Bt(t).onUnstake,
                        q = Object(o.h)(),
                        P = Object(m.c)(a),
                        B = Object(m.g)(),
                        N = f && T && T.isGreaterThan(0),
                        U = Object(Ze.a)(l),
                        F = et({ quoteTokenAddress: b.address, tokenAddress: p.address }),
                        z = "".concat(Je.c, "/").concat(F),
                        E = function() { var e = Object(bt.a)(dt.a.mark((function e(n) { return dt.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, R(n);
                                        case 2:
                                            Y(Object(ut.b)({ account: f, pids: [t] }));
                                        case 3:
                                        case "end":
                                            return e.stop() } }), e) }))); return function(t) { return e.apply(this, arguments) } }(),
                        W = function() { var e = Object(bt.a)(dt.a.mark((function e(n) { return dt.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, Q(n);
                                        case 2:
                                            Y(Object(ut.b)({ account: f, pids: [t] }));
                                        case 3:
                                        case "end":
                                            return e.stop() } }), e) }))); return function(t) { return e.apply(this, arguments) } }(),
                        I = Object(s.useCallback)((function() { var e = Object(v.d)(A); return e.gt(0) && e.lt(1e-7) ? e.toFixed(10, d.BigNumber.ROUND_DOWN) : e.gt(0) && e.lt(1e-4) ? Object(v.g)(A).toLocaleString() : e.toFixed(3, d.BigNumber.ROUND_DOWN) }), [A]),
                        M = Object(u.kc)(Object(L.jsx)(qt, { max: D, lpPrice: P, lpLabel: i, apr: n, displayApr: O, stakedBalance: A, onConfirm: E, tokenName: a, multiplier: r, addLiquidityUrl: z, cakePrice: B })),
                        G = Object(c.a)(M, 1)[0],
                        V = Object(u.kc)(Object(L.jsx)(Lt, { max: A, onConfirm: W, tokenName: a })),
                        H = Object(c.a)(V, 1)[0],
                        _ = Object(pt.h)(U),
                        Y = Object(jt.b)(),
                        X = Gt(_).onApprove,
                        $ = Object(s.useCallback)(Object(bt.a)(dt.a.mark((function e() { return dt.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, S(!0), e.next = 4, X();
                                    case 4:
                                        Y(Object(ut.b)({ account: f, pids: [t] })), S(!1), e.next = 11; break;
                                    case 8:
                                        e.prev = 8, e.t0 = e.catch(0), console.error(e.t0);
                                    case 11:
                                    case "end":
                                        return e.stop() } }), e, null, [
                                [0, 8]
                            ]) }))), [X, Y, f, t]); return f ? N ? A.gt(0) ? Object(L.jsxs)(gn, { children: [Object(L.jsxs)(vn, { children: [Object(L.jsx)(u.Qb, { bold: !0, textTransform: "uppercase", color: "secondary", fontSize: "12px", pr: "4px", children: a }), Object(L.jsx)(u.Qb, { bold: !0, textTransform: "uppercase", color: "textSubtle", fontSize: "12px", children: h("Staked") })] }), Object(L.jsxs)(yn, { children: [Object(L.jsxs)("div", { children: [Object(L.jsx)(u.T, { children: I() }), A.gt(0) && P.gt(0) && Object(L.jsx)(Ot.a, { fontSize: "12px", color: "textSubtle", decimals: 2, value: Object(v.e)(P.times(A)), unit: " USD", prefix: "~" })] }), Object(L.jsxs)(wn, { children: [Object(L.jsx)(u.W, { variant: "secondary", onClick: H, mr: "6px", children: Object(L.jsx)(u.hb, { color: "primary", width: "14px" }) }), Object(L.jsx)(u.W, { variant: "secondary", onClick: G, disabled: ["history", "archived"].some((function(e) { return q.pathname.includes(e) })), children: Object(L.jsx)(u.a, { color: "primary", width: "14px" }) })] })] })] }) : Object(L.jsxs)(gn, { children: [Object(L.jsxs)(vn, { children: [Object(L.jsx)(u.Qb, { bold: !0, textTransform: "uppercase", color: "textSubtle", fontSize: "12px", pr: "4px", children: h("Stake").toUpperCase() }), Object(L.jsx)(u.Qb, { bold: !0, textTransform: "uppercase", color: "secondary", fontSize: "12px", children: a })] }), Object(L.jsx)(yn, { children: Object(L.jsx)(u.p, { width: "100%", onClick: G, variant: "secondary", disabled: ["history", "archived"].some((function(e) { return q.pathname.includes(e) })), children: h("Stake LP") }) })] }) : x ? Object(L.jsxs)(gn, { children: [Object(L.jsx)(vn, { children: Object(L.jsx)(u.Qb, { bold: !0, textTransform: "uppercase", color: "textSubtle", fontSize: "12px", children: h("Enable Farm") }) }), Object(L.jsx)(yn, { children: Object(L.jsx)(u.p, { width: "100%", disabled: w, onClick: $, variant: "secondary", children: h("Enable") }) })] }) : Object(L.jsxs)(gn, { children: [Object(L.jsx)(vn, { children: Object(L.jsx)(u.Qb, { bold: !0, textTransform: "uppercase", color: "textSubtle", fontSize: "12px", children: h("Start Farming") }) }), Object(L.jsx)(yn, { children: Object(L.jsx)(u.Db, { width: 180, marginBottom: 28, marginTop: 14 }) })] }) : Object(L.jsxs)(gn, { children: [Object(L.jsx)(vn, { children: Object(L.jsx)(u.Qb, { bold: !0, textTransform: "uppercase", color: "textSubtle", fontSize: "12px", children: h("Start Farming") }) }), Object(L.jsx)(yn, { children: Object(L.jsx)(xt.a, { width: "100%" }) })] }) },
                Cn = Object(x.f)(he || (he = Object(i.a)(["\n  from {\n    max-height: 0px;\n  }\n  to {\n    max-height: 500px;\n  }\n"]))),
                Tn = Object(x.f)(me || (me = Object(i.a)(["\n  from {\n    max-height: 500px;\n  }\n  to {\n    max-height: 0px;\n  }\n"]))),
                Dn = x.e.div(fe || (fe = Object(i.a)(["\n  animation: ", ";\n  overflow: hidden;\n  background: ", ";\n  display: flex;\n  width: 100%;\n  flex-direction: column-reverse;\n  padding: 24px;\n\n  ", " {\n    flex-direction: row;\n    padding: 16px 32px;\n  }\n"])), (function(e) { return e.expanded ? Object(x.d)(ge || (ge = Object(i.a)(["\n          ", " 300ms linear forwards\n        "])), Cn) : Object(x.d)(ve || (ve = Object(i.a)(["\n          ", " 300ms linear forwards\n        "])), Tn) }), (function(e) { return e.theme.colors.background }), (function(e) { return e.theme.mediaQueries.lg })),
                An = Object(x.e)(u.ab)(ye || (ye = Object(i.a)(["\n  font-weight: 400;\n"]))),
                Rn = x.e.div(ke || (ke = Object(i.a)(["\n  color: ", ";\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n\n  ", " {\n    justify-content: flex-start;\n  }\n"])), (function(e) { return e.theme.colors.text }), (function(e) { return e.theme.mediaQueries.sm })),
                Qn = x.e.div(we || (we = Object(i.a)(["\n  display: flex;\n  align-items: center;\n  margin-top: 25px;\n\n  ", " {\n    margin-top: 16px;\n  }\n\n  > div {\n    height: 24px;\n    padding: 0 6px;\n    font-size: 14px;\n    margin-right: 4px;\n\n    svg {\n      width: 14px;\n    }\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm })),
                qn = x.e.div(Se || (Se = Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n\n  ", " {\n    flex-direction: row;\n    align-items: center;\n    flex-grow: 1;\n    flex-basis: 0;\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm })),
                Ln = x.e.div(Ce || (Ce = Object(i.a)(["\n  min-width: 200px;\n"]))),
                Pn = x.e.div(Te || (Te = Object(i.a)(["\n  display: block;\n\n  ", " {\n    display: none;\n  }\n"])), (function(e) { return e.theme.mediaQueries.lg })),
                Bn = x.e.div(De || (De = Object(i.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 4px 0px;\n"]))),
                Nn = function(e) { var t = e.details,
                        n = e.apr,
                        r = e.multiplier,
                        c = e.liquidity,
                        i = e.userDataReady,
                        s = e.expanded,
                        l = t,
                        o = Object(g.b)().t,
                        d = "0X" !== l.multiplier,
                        b = l.quoteToken,
                        j = l.token,
                        p = l.dual,
                        x = l.lpSymbol && l.lpSymbol.toUpperCase().replace("CyberCows", ""),
                        O = et({ quoteTokenAddress: b.address, tokenAddress: j.address }),
                        h = Object(Ze.a)(l.lpAddresses),
                        m = Object(q.e)(h, "address"),
                        f = "/info/pool/".concat(h); return Object(L.jsxs)(Dn, { expanded: s, children: [Object(L.jsxs)(Ln, { children: [d && Object(L.jsx)(Rn, { children: Object(L.jsx)(An, { href: "/add/".concat(O), children: o("Get %symbol%", { symbol: x }) }) }), Object(L.jsx)(An, { href: m, children: o("View Contract") }), Object(L.jsx)(An, { href: f, children: o("See Pair Info") }), Object(L.jsxs)(Qn, { children: [l.isCommunity ? Object(L.jsx)(at.a, {}) : Object(L.jsx)(at.c, {}), p ? Object(L.jsx)(at.d, {}) : null] })] }), Object(L.jsxs)(Pn, { children: [Object(L.jsxs)(Bn, { children: [Object(L.jsx)(u.Qb, { children: o("APR") }), Object(L.jsx)(nn, Object(a.a)({}, n))] }), Object(L.jsxs)(Bn, { children: [Object(L.jsx)(u.Qb, { children: o("Multiplier") }), Object(L.jsx)(xn, Object(a.a)({}, r))] }), Object(L.jsxs)(Bn, { children: [Object(L.jsx)(u.Qb, { children: o("Liquidity") }), Object(L.jsx)(fn, Object(a.a)({}, c))] })] }), Object(L.jsxs)(qn, { children: [Object(L.jsx)(kn, Object(a.a)(Object(a.a)({}, l), {}, { userDataReady: i })), Object(L.jsx)(Sn, Object(a.a)(Object(a.a)({}, l), {}, { userDataReady: i, lpLabel: x, displayApr: n.value }))] })] }) },
                Un = x.e.div(Ae || (Ae = Object(i.a)(["\n  font-size: 12px;\n  color: ", ";\n  text-align: left;\n"])), (function(e) { return e.theme.colors.textSubtle })),
                Fn = x.e.div(Re || (Re = Object(i.a)(["\n  min-height: 24px;\n  display: flex;\n  align-items: center;\n"]))),
                zn = function(e) { var t = e.label,
                        n = void 0 === t ? "" : t,
                        r = e.children; return Object(L.jsxs)("div", { children: [n && Object(L.jsx)(Un, { children: n }), Object(L.jsx)(Fn, { children: r })] }) },
                En = [{ id: 1, name: "farm", sortable: !0, label: "" }, { id: 2, name: "earned", sortable: !0, label: "Earned" }, { id: 3, name: "apr", sortable: !0, label: "APR" }, { id: 6, name: "details", sortable: !0, label: "" }],
                Wn = [{ id: 1, name: "farm", sortable: !0, label: "" }, { id: 2, name: "earned", sortable: !0, label: "Earned" }, { id: 3, name: "apr", sortable: !0, label: "APR" }, { id: 4, name: "liquidity", sortable: !0, label: "Liquidity" }, { id: 5, name: "multiplier", sortable: !0, label: "Multiplier" }, { id: 6, name: "details", sortable: !0, label: "" }],
                In = { apr: nn, farm: cn, earned: ln, details: bn, multiplier: xn, liquidity: fn },
                Mn = x.e.div(Qe || (Qe = Object(i.a)(["\n  padding: 24px 0px;\n  display: flex;\n  width: 100%;\n  align-items: center;\n  padding-right: 8px;\n\n  ", " {\n    padding-right: 32px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.xl })),
                Gn = x.e.tr(qe || (qe = Object(i.a)(["\n  cursor: pointer;\n  border-bottom: 2px solid ", ";\n"])), (function(e) { return e.theme.colors.cardBorder })),
                Vn = x.e.td(Le || (Le = Object(i.a)(["\n  padding: 16px 0 24px 16px;\n"]))),
                Hn = x.e.td(Pe || (Pe = Object(i.a)(["\n  padding-top: 16px;\n  padding-bottom: 24px;\n"]))),
                _n = x.e.td(Be || (Be = Object(i.a)(["\n  padding-top: 24px;\n"]))),
                Yn = function(e) { var t = e.details,
                        n = e.userDataReady,
                        r = !!Object(m.a)(t.pid).stakedBalance.toNumber(),
                        i = Object(s.useState)(r),
                        o = Object(c.a)(i, 2),
                        d = o[0],
                        b = o[1],
                        j = Object(Kt.a)(d, 300),
                        p = Object(g.b)().t,
                        x = function() { b(!d) };
                    Object(s.useEffect)((function() { b(r) }), [r]); var O = Object(u.jc)(),
                        h = O.isDesktop,
                        f = O.isMobile,
                        v = !h,
                        y = v ? En : Wn,
                        k = y.map((function(e) { return e.name })); return Object(L.jsxs)(L.Fragment, { children: [f ? Object(L.jsxs)(Gn, { onClick: x, children: [Object(L.jsxs)("td", { children: [Object(L.jsx)("tr", { children: Object(L.jsx)(_n, { children: Object(L.jsx)(zn, { children: Object(L.jsx)(cn, Object(a.a)({}, e.farm)) }) }) }), Object(L.jsxs)("tr", { children: [Object(L.jsx)(Vn, { children: Object(L.jsx)(zn, { label: p("Earned"), children: Object(L.jsx)(ln, Object(a.a)(Object(a.a)({}, e.earned), {}, { userDataReady: n })) }) }), Object(L.jsx)(Hn, { children: Object(L.jsx)(zn, { label: p("APR"), children: Object(L.jsx)(nn, Object(a.a)(Object(a.a)({}, e.apr), {}, { hideButton: !0 })) }) })] })] }), Object(L.jsx)("td", { children: Object(L.jsx)(Mn, { children: Object(L.jsx)(zn, { children: Object(L.jsx)(bn, { actionPanelToggled: d }) }) }) })] }) : Object(L.jsx)(Gn, { onClick: x, children: Object.keys(e).map((function(t) { var r = k.indexOf(t); if (-1 === r) return null; switch (t) {
                                    case "details":
                                        return Object(L.jsx)("td", { children: Object(L.jsx)(Mn, { children: Object(L.jsx)(zn, { children: Object(L.jsx)(bn, { actionPanelToggled: d }) }) }) }, t);
                                    case "apr":
                                        return Object(L.jsx)("td", { children: Object(L.jsx)(Mn, { children: Object(L.jsx)(zn, { label: p("APR"), children: Object(L.jsx)(nn, Object(a.a)(Object(a.a)({}, e.apr), {}, { hideButton: v })) }) }) }, t);
                                    default:
                                        return Object(L.jsx)("td", { children: Object(L.jsx)(Mn, { children: Object(L.jsx)(zn, { label: p(y[r].label), children: l.a.createElement(In[t], Object(a.a)(Object(a.a)({}, e[t]), {}, { userDataReady: n })) }) }) }, t) } })) }), j && Object(L.jsx)("tr", { children: Object(L.jsx)("td", { colSpan: 6, children: Object(L.jsx)(Nn, Object(a.a)(Object(a.a)({}, e), {}, { expanded: d })) }) })] }) },
                Xn = x.e.div(Ne || (Ne = Object(i.a)(["\n  filter: ", ";\n  width: 100%;\n  background: ", ";\n  border-radius: 16px;\n  margin: 16px 0px;\n"])), (function(e) { return e.theme.card.dropShadow }), (function(e) { return e.theme.card.background })),
                $n = x.e.div(Ue || (Ue = Object(i.a)(["\n  overflow: visible;\n\n  &::-webkit-scrollbar {\n    display: none;\n  }\n"]))),
                Jn = x.e.table(Fe || (Fe = Object(i.a)(["\n  border-collapse: collapse;\n  font-size: 14px;\n  border-radius: 4px;\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n"]))),
                Zn = x.e.tbody(ze || (ze = Object(i.a)(["\n  & tr {\n    td {\n      font-size: 16px;\n      vertical-align: middle;\n    }\n  }\n"]))),
                Kn = x.e.div(Ee || (Ee = Object(i.a)(["\n  position: relative;\n"]))),
                er = x.e.div(We || (We = Object(i.a)(["\n  display: flex;\n  justify-content: center;\n  padding-top: 5px;\n  padding-bottom: 5px;\n"]))),
                tr = function(e) { var t = Object(s.useRef)(null),
                        n = Object(g.b)().t,
                        r = e.data,
                        c = e.columns,
                        i = e.userDataReady,
                        l = Object(u.lc)(c, r, { sortable: !0, sortColumn: "farm" }).rows; return Object(L.jsx)(Xn, { id: "farms-table", children: Object(L.jsxs)(Kn, { children: [Object(L.jsx)($n, { ref: t, children: Object(L.jsx)(Jn, { children: Object(L.jsx)(Zn, { children: l.map((function(e) { return Object(s.createElement)(Yn, Object(a.a)(Object(a.a)({}, e.original), {}, { userDataReady: i, key: "table-row-".concat(e.id) })) })) }) }) }), Object(L.jsx)(er, { children: Object(L.jsxs)(u.p, { variant: "text", onClick: function() { t.current.scrollIntoView({ behavior: "smooth" }) }, children: [n("To Top"), Object(L.jsx)(u.G, { color: "primary" })] }) })] }) }) },
                nr = n(83),
                rr = function(e) { var t, n = e.hasStakeInFinishedFarms,
                        r = Object(o.i)().url,
                        a = Object(o.h)(),
                        c = Object(g.b)().t; switch (a.pathname) {
                        case "/farms":
                            t = 0; break;
                        case "/farms/history":
                            t = 1; break;
                        case "/farms/archived":
                            t = 2; break;
                        default:
                            t = 0 } return Object(L.jsx)(ar, { children: Object(L.jsxs)(u.q, { activeIndex: t, scale: "sm", variant: "subtle", children: [Object(L.jsx)(u.r, { as: nr.a, to: "".concat(r), children: c("Live") }), Object(L.jsx)(u.rb, { show: n, children: Object(L.jsx)(u.r, { id: "finished-farms-button", as: nr.a, to: "".concat(r, "/history"), children: c("Finished") }) })] }) }) },
                ar = x.e.div(Ie || (Ie = Object(i.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  a {\n    padding-left: 12px;\n    padding-right: 12px;\n  }\n\n  ", " {\n    margin-left: 16px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm })),
                cr = x.e.div(Me || (Me = Object(i.a)(["\n  margin-left: -8px;\n\n  ", " {\n    margin-left: 0;\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm })),
                ir = function(e) { var t = e.viewMode,
                        n = e.onToggle,
                        r = function(e) { t !== e && n(e) }; return Object(L.jsxs)(cr, { children: [Object(L.jsx)(u.W, { variant: "text", scale: "sm", id: "clickFarmCardView", onClick: function() { return r(T.b.CARD) }, children: Object(L.jsx)(u.y, { color: t === T.b.CARD ? "primary" : "textDisabled" }) }), Object(L.jsx)(u.W, { variant: "text", scale: "sm", id: "clickFarmTableView", onClick: function() { return r(T.b.TABLE) }, children: Object(L.jsx)(u.bb, { color: t === T.b.TABLE ? "primary" : "textDisabled" }) })] }) },
                sr = x.e.div(Ge || (Ge = Object(i.a)(["\n  display: flex;\n  width: 100%;\n  align-items: center;\n  position: relative;\n\n  justify-content: space-between;\n  flex-direction: column;\n  margin-bottom: 32px;\n\n  ", " {\n    flex-direction: row;\n    flex-wrap: wrap;\n    padding: 16px 32px;\n    margin-bottom: 0;\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm })),
                lr = x.e.div(Ve || (Ve = Object(i.a)(["\n  display: flex;\n  align-items: center;\n  margin-left: 10px;\n\n  ", " {\n    margin-left: 8px;\n  }\n"])), u.Qb),
                or = x.e.div(He || (He = Object(i.a)(["\n  > ", " {\n    font-size: 12px;\n  }\n"])), u.Qb),
                dr = x.e.div(_e || (_e = Object(i.a)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  padding: 8px 0px;\n\n  ", " {\n    width: auto;\n    padding: 0;\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm })),
                br = x.e.div(Ye || (Ye = Object(i.a)(["\n  flex-wrap: wrap;\n  justify-content: space-between;\n  display: flex;\n  align-items: center;\n  width: 100%;\n\n  > div {\n    padding: 8px 0px;\n  }\n\n  ", " {\n    justify-content: flex-start;\n    width: auto;\n\n    > div {\n      padding: 0;\n    }\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm })),
                jr = (Object(x.e)(u.X)(Xe || (Xe = Object(i.a)(["\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 58px;\n"]))), function(e, t) { return e && t ? (e + t).toLocaleString("en-US", { maximumFractionDigits: 2 }) : e ? e.toLocaleString("en-US", { maximumFractionDigits: 2 }) : null }),
                ur = function() { var e = Object(o.i)().path,
                        t = Object(o.h)().pathname,
                        n = Object(g.b)().t,
                        r = Object(m.b)(),
                        i = r.data,
                        l = r.userDataLoaded,
                        d = Object(m.g)(),
                        x = Object(s.useState)(""),
                        q = Object(c.a)(x, 2),
                        P = q[0],
                        B = q[1],
                        N = Object(C.n)(),
                        U = Object(c.a)(N, 2),
                        F = U[0],
                        z = U[1],
                        E = Object(j.c)().account,
                        W = Object(s.useState)("hot"),
                        I = Object(c.a)(W, 2),
                        M = I[0],
                        G = I[1],
                        V = Object(f.a)(),
                        H = V.observerRef,
                        _ = V.isIntersecting,
                        Y = Object(s.useRef)(0),
                        X = t.includes("archived"),
                        $ = t.includes("history"),
                        J = !$ && !X;
                    Object(m.f)(X); var Z = !E || !!E && l,
                        K = Object(C.m)(J),
                        ee = Object(c.a)(K, 2),
                        te = ee[0],
                        ne = ee[1],
                        re = i.filter((function(e) { return 0 !== e.pid && "0X" !== e.multiplier && !Object(w.a)(e.pid) })),
                        ae = i.filter((function(e) { return 0 !== e.pid && "0X" === e.multiplier && !Object(w.a)(e.pid) })),
                        ce = i.filter((function(e) { return Object(w.a)(e.pid) })),
                        ie = re.filter((function(e) { return e.userData && new b.a(e.userData.stakedBalance).isGreaterThan(0) })),
                        se = ae.filter((function(e) { return e.userData && new b.a(e.userData.stakedBalance).isGreaterThan(0) })),
                        le = ce.filter((function(e) { return e.userData && new b.a(e.userData.stakedBalance).isGreaterThan(0) })),
                        oe = Object(s.useCallback)((function(e) { var t = e.map((function(e) { if (!e.lpTotalInQuoteToken || !e.quoteTokenPriceBusd) return e; var t = new b.a(e.lpTotalInQuoteToken).times(e.quoteTokenPriceBusd),
                                    n = J ? Object(y.a)(new b.a(e.poolWeight), d, t, e.lpAddresses[p.a.MAINNET]) : { cakeRewardsApr: 0, lpRewardsApr: 0 },
                                    r = n.cakeRewardsApr,
                                    c = n.lpRewardsApr; return Object(a.a)(Object(a.a)({}, e), {}, { apr: r, lpRewardsApr: c, liquidity: t }) })); if (P) { var n = Object(S.a)(P.toLowerCase());
                                t = t.filter((function(e) { return Object(S.a)(e.lpSymbol.toLowerCase()).includes(n) })) } return t }), [d, P, J]),
                        de = Object(s.useState)(12),
                        be = Object(c.a)(de, 2),
                        je = be[0],
                        ue = be[1],
                        pe = Object(s.useMemo)((function() { var e = []; return J && (e = oe(te ? ie : re)), $ && (e = oe(te ? se : ae)), X && (e = oe(te ? le : ce)),
                                function(e) { switch (M) {
                                        case "apr":
                                            return Object(k.orderBy)(e, (function(e) { return e.apr + e.lpRewardsApr }), "desc");
                                        case "multiplier":
                                            return Object(k.orderBy)(e, (function(e) { return e.multiplier ? Number(e.multiplier.slice(0, -1)) : 0 }), "desc");
                                        case "earned":
                                            return Object(k.orderBy)(e, (function(e) { return e.userData ? Number(e.userData.earnings) : 0 }), "desc");
                                        case "liquidity":
                                            return Object(k.orderBy)(e, (function(e) { return Number(e.liquidity) }), "desc");
                                        default:
                                            return e } }(e).slice(0, je) }), [M, re, oe, ae, ce, J, $, X, le, se, te, ie, je]);
                    Y.current = pe.length, Object(s.useEffect)((function() { _ && ue((function(e) { return e <= Y.current ? e + 12 : e })) }), [_]); var xe = pe.map((function(e) { var t = e.token,
                            n = e.quoteToken,
                            r = t.address,
                            a = n.address,
                            c = e.lpSymbol && e.lpSymbol.split(" ")[0].toUpperCase().replace("BSWAP", ""); return { apr: { value: jr(e.apr, e.lpRewardsApr), pid: e.pid, multiplier: e.multiplier, lpLabel: c, lpSymbol: e.lpSymbol, tokenAddress: r, quoteTokenAddress: a, cakePrice: d, originalValue: e.apr }, farm: { label: c, pid: e.pid, token: e.token, quoteToken: e.quoteToken }, earned: { earnings: Object(v.e)(new b.a(e.userData.earnings)), pid: e.pid }, liquidity: { liquidity: e.liquidity }, multiplier: { multiplier: e.multiplier }, details: e } })); return Object(L.jsxs)(L.Fragment, { children: [Object(L.jsxs)(D.a, { children: [Object(L.jsx)(u.T, { as: "h1", scale: "xxl", color: "White", mb: "24px", children: n("Farms") }), Object(L.jsx)(u.T, { scale: "lg", color: "text", children: n("Stake LP tokens to earn.") })] }), Object(L.jsxs)(h.b, { children: [Object(L.jsxs)(sr, { children: [Object(L.jsxs)(br, { children: [Object(L.jsx)(ir, { viewMode: F, onToggle: function(e) { return z(e) } }), Object(L.jsxs)(lr, { children: [Object(L.jsx)(u.Sb, { id: "staked-only-farms", checked: te, onChange: function() { return ne(!te) }, scale: "sm" }), Object(L.jsxs)(u.Qb, { children: [" ", n("Staked only")] })] }), Object(L.jsx)(rr, { hasStakeInFinishedFarms: se.length > 0 })] }), Object(L.jsxs)(dr, { children: [Object(L.jsxs)(or, { children: [Object(L.jsx)(u.Qb, { textTransform: "uppercase", children: n("Sort by") }), Object(L.jsx)(R.a, { options: [{ label: n("Hot"), value: "hot" }, { label: n("APR"), value: "apr" }, { label: n("Multiplier"), value: "multiplier" }, { label: n("Earned"), value: "earned" }, { label: n("Liquidity"), value: "liquidity" }], onOptionChange: function(e) { G(e.value) } })] }), Object(L.jsxs)(or, { style: { marginLeft: 16 }, children: [Object(L.jsx)(u.Qb, { textTransform: "uppercase", children: n("Search") }), Object(L.jsx)(A.a, { onChange: function(e) { B(e.target.value) }, placeholder: "Search Farms" })] })] })] }), function() { if (F === T.b.TABLE && xe.length) { var t = Wn.map((function(e) { return { id: e.id, name: e.name, label: e.label, sort: function(t, n) { switch (e.name) {
                                                    case "farm":
                                                        return n.id - t.id;
                                                    case "apr":
                                                        return t.original.apr.value && n.original.apr.value ? Number(t.original.apr.value) - Number(n.original.apr.value) : 0;
                                                    case "earned":
                                                        return t.original.earned.earnings - n.original.earned.earnings;
                                                    default:
                                                        return 1 } }, sortable: e.sortable } })); return Object(L.jsx)(tr, { data: xe, columns: t, userDataReady: Z }) } return Object(L.jsxs)(O.a, { children: [Object(L.jsx)(o.b, { exact: !0, path: "".concat(e), children: pe.map((function(e) { return Object(L.jsx)(Zt, { farm: e, displayApr: jr(e.apr, e.lpRewardsApr), cakePrice: d, account: E, removed: !1 }, e.pid) })) }), Object(L.jsx)(o.b, { exact: !0, path: "".concat(e, "/history"), children: pe.map((function(e) { return Object(L.jsx)(Zt, { farm: e, displayApr: jr(e.apr, e.lpRewardsApr), cakePrice: d, account: E, removed: !0 }, e.pid) })) }), Object(L.jsx)(o.b, { exact: !0, path: "".concat(e, "/archived"), children: pe.map((function(e) { return Object(L.jsx)(Zt, { farm: e, displayApr: jr(e.apr, e.lpRewardsApr), cakePrice: d, account: E, removed: !0 }, e.pid) })) })] }) }(), E && !l && te && Object(L.jsx)(u.R, { justifyContent: "center", children: Object(L.jsx)(Q.a, {}) }), Object(L.jsx)("div", { ref: H })] })] }) } } }
]);
//# sourceMappingURL=13.ab31fe50.chunk.js.map