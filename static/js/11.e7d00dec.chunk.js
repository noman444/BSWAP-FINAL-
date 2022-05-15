(this["webpackJsonppancake-frontend"] = this["webpackJsonppancake-frontend"] || []).push([
    [11], { 1259: function(e, t, n) { "use strict";
            n.r(t), n.d(t, "default", (function() { return K })); var i = n(31),
                a = n(3),
                c = n.n(a),
                r = n(12),
                o = n(18),
                l = n(9),
                s = n(8),
                d = n(1),
                u = n(5),
                b = n(7),
                j = n(4),
                O = n(2),
                v = n(57),
                x = n(13),
                p = n(35),
                m = n(179),
                h = n(207),
                C = n(371),
                f = n(192),
                y = n(26),
                R = n(105),
                I = n(113),
                E = n(63),
                g = n(38),
                T = n(21),
                U = n(62),
                w = n(44),
                Y = n(270),
                N = n(108),
                _ = n(836),
                k = n(37),
                S = n(165); var Q = n(58),
                B = n(67),
                P = n(222),
                A = n(22),
                D = n(103),
                L = n(228),
                q = n(124),
                V = n(100),
                z = n(328);

            function M() { return Object(A.c)((function(e) { return e.burn })) } var F, H = n(46),
                W = n(249),
                G = n(0),
                J = u.e.div(F || (F = Object(s.a)(["\n  border: solid 1px ", ";\n  border-radius: 16px;\n  padding: 16px;\n"])), (function(e) { return e.theme.colors.cardBorder }));

            function K(e) { var t, n, a, s, u, F, K, X, Z, $, ee, te, ne, ie, ae, ce, re, oe, le, se = e.history,
                    de = e.match.params,
                    ue = de.currencyIdA,
                    be = de.currencyIdB,
                    je = null !== (t = Object(U.c)(ue)) && void 0 !== t ? t : void 0,
                    Oe = null !== (n = Object(U.c)(be)) && void 0 !== n ? n : void 0,
                    ve = Object(T.a)(),
                    xe = ve.account,
                    pe = ve.chainId,
                    me = ve.library,
                    he = Object(d.useMemo)((function() { return [Object(Q.b)(je, pe), Object(Q.b)(Oe, pe)] }), [je, Oe, pe]),
                    Ce = Object(l.a)(he, 2),
                    fe = Ce[0],
                    ye = Ce[1],
                    Re = Object(x.b)().t,
                    Ie = Object(H.e)(),
                    Ee = M(),
                    ge = Ee.independentField,
                    Te = Ee.typedValue,
                    Ue = function(e, t) { var n, i, a, c, r, s = Object(T.a)(),
                            d = s.account,
                            u = s.chainId,
                            b = M(),
                            O = b.independentField,
                            v = b.typedValue,
                            x = Object(D.b)(e, t),
                            p = Object(l.a)(x, 2)[1],
                            m = Object(V.e)(null !== d && void 0 !== d ? d : void 0, [null === p || void 0 === p ? void 0 : p.liquidityToken]),
                            h = null === m || void 0 === m ? void 0 : m[null !== (n = null === p || void 0 === p || null === (i = p.liquidityToken) || void 0 === i ? void 0 : i.address) && void 0 !== n ? n : ""],
                            C = [Object(Q.b)(e, u), Object(Q.b)(t, u)],
                            f = C[0],
                            y = C[1],
                            R = (a = {}, Object(o.a)(a, z.a.CURRENCY_A, f), Object(o.a)(a, z.a.CURRENCY_B, y), Object(o.a)(a, z.a.LIQUIDITY, null === p || void 0 === p ? void 0 : p.liquidityToken), a),
                            I = Object(L.a)(null === p || void 0 === p ? void 0 : p.liquidityToken),
                            E = p && I && h && f && j.e.greaterThanOrEqual(I.raw, h.raw) ? new j.k(f, p.getLiquidityValue(f, I, h, !1).raw) : void 0,
                            g = p && I && h && y && j.e.greaterThanOrEqual(I.raw, h.raw) ? new j.k(y, p.getLiquidityValue(y, I, h, !1).raw) : void 0,
                            U = (c = {}, Object(o.a)(c, z.a.CURRENCY_A, E), Object(o.a)(c, z.a.CURRENCY_B, g), c),
                            w = new j.g("0", "100"); if (O === z.a.LIQUIDITY_PERCENT) w = new j.g(v, "100");
                        else if (O === z.a.LIQUIDITY) { if (null === p || void 0 === p ? void 0 : p.liquidityToken) { var Y = Object(q.a)(v, p.liquidityToken);
                                Y && h && !Y.greaterThan(h) && (w = new j.g(Y.raw, h.raw)) } } else if (R[O]) { var N = Object(q.a)(v, R[O]),
                                _ = U[O];
                            N && _ && !N.greaterThan(_) && (w = new j.g(N.raw, _.raw)) } var k, S, B = (r = {}, Object(o.a)(r, z.a.LIQUIDITY_PERCENT, w), Object(o.a)(r, z.a.LIQUIDITY, h && w && w.greaterThan("0") ? new j.k(h.token, w.multiply(h.raw).quotient) : void 0), Object(o.a)(r, z.a.CURRENCY_A, f && w && w.greaterThan("0") && E ? new j.k(f, w.multiply(E.raw).quotient) : void 0), Object(o.a)(r, z.a.CURRENCY_B, y && w && w.greaterThan("0") && g ? new j.k(y, w.multiply(g.raw).quotient) : void 0), r); return d || (k = "Connect Wallet"), B[z.a.LIQUIDITY] && B[z.a.CURRENCY_A] && B[z.a.CURRENCY_B] || (k = null !== (S = k) && void 0 !== S ? S : "Enter an amount"), { pair: p, parsedAmounts: B, error: k } }(null !== je && void 0 !== je ? je : void 0, null !== Oe && void 0 !== Oe ? Oe : void 0),
                    we = Ue.pair,
                    Ye = Ue.parsedAmounts,
                    Ne = Ue.error,
                    _e = function() { var e = Object(A.b)(); return { onUserInput: Object(d.useCallback)((function(t, n) { e(Object(z.b)({ field: t, typedValue: n })) }), [e]) } }().onUserInput,
                    ke = !Ne,
                    Se = Object(d.useState)(!1),
                    Qe = Object(l.a)(Se, 2),
                    Be = Qe[0],
                    Pe = Qe[1],
                    Ae = Object(d.useState)(!1),
                    De = Object(l.a)(Ae, 2),
                    Le = De[0],
                    qe = De[1],
                    Ve = Object(d.useState)(""),
                    ze = Object(l.a)(Ve, 2),
                    Me = ze[0],
                    Fe = ze[1],
                    He = Object(Y.a)(),
                    We = Object(H.r)(),
                    Ge = Object(l.a)(We, 1)[0],
                    Je = (Z = {}, Object(o.a)(Z, z.a.LIQUIDITY_PERCENT, Ye[z.a.LIQUIDITY_PERCENT].equalTo("0") ? "0" : Ye[z.a.LIQUIDITY_PERCENT].lessThan(new j.g("1", "100")) ? "<1" : Ye[z.a.LIQUIDITY_PERCENT].toFixed(0)), Object(o.a)(Z, z.a.LIQUIDITY, ge === z.a.LIQUIDITY ? Te : null !== (a = null === (s = Ye[z.a.LIQUIDITY]) || void 0 === s ? void 0 : s.toSignificant(6)) && void 0 !== a ? a : ""), Object(o.a)(Z, z.a.CURRENCY_A, ge === z.a.CURRENCY_A ? Te : null !== (u = null === (F = Ye[z.a.CURRENCY_A]) || void 0 === F ? void 0 : F.toSignificant(6)) && void 0 !== u ? u : ""), Object(o.a)(Z, z.a.CURRENCY_B, ge === z.a.CURRENCY_B ? Te : null !== (K = null === (X = Ye[z.a.CURRENCY_B]) || void 0 === X ? void 0 : X.toSignificant(6)) && void 0 !== K ? K : ""), Z),
                    Ke = null === ($ = Ye[z.a.LIQUIDITY_PERCENT]) || void 0 === $ ? void 0 : $.equalTo(new j.g("1")),
                    Xe = Object(w.n)(null === we || void 0 === we || null === (ee = we.liquidityToken) || void 0 === ee ? void 0 : ee.address),
                    Ze = Object(d.useState)(null),
                    $e = Object(l.a)(Ze, 2),
                    et = $e[0],
                    tt = $e[1],
                    nt = Object(B.b)(Ye[z.a.LIQUIDITY], g.t),
                    it = Object(l.a)(nt, 2),
                    at = it[0],
                    ct = it[1];

                function rt() { return (rt = Object(r.a)(c.a.mark((function e() { var t, n, i, a, r, o, l; return c.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (Xe && we && me && He) { e.next = 2; break } throw new Error("missing dependencies");
                                case 2:
                                    if (t = Ye[z.a.LIQUIDITY]) { e.next = 5; break } throw new Error("missing liquidity amount");
                                case 5:
                                    return e.next = 7, Xe.nonces(xe);
                                case 7:
                                    n = e.sent, i = [{ name: "name", type: "string" }, { name: "version", type: "string" }, { name: "chainId", type: "uint256" }, { name: "verifyingContract", type: "address" }], a = { name: "Pancake LPs", version: "1", chainId: pe, verifyingContract: we.liquidityToken.address }, r = [{ name: "owner", type: "address" }, { name: "spender", type: "address" }, { name: "value", type: "uint256" }, { name: "nonce", type: "uint256" }, { name: "deadline", type: "uint256" }], o = { owner: xe, spender: g.t, value: t.raw.toString(), nonce: n.toHexString(), deadline: He.toNumber() }, l = JSON.stringify({ types: { EIP712Domain: i, Permit: r }, domain: a, primaryType: "Permit", message: o }), me.send("eth_signTypedData_v4", [xe, l]).then(b.splitSignature).then((function(e) { tt({ v: e.v, r: e.r, s: e.s, deadline: He.toNumber() }) })).catch((function(e) { 4001 !== (null === e || void 0 === e ? void 0 : e.code) && ct() }));
                                case 14:
                                case "end":
                                    return e.stop() } }), e) })))).apply(this, arguments) } var ot = Object(d.useCallback)((function(e, t) { return tt(null), _e(e, t) }), [_e]),
                    lt = Object(d.useCallback)((function(e) { return ot(z.a.LIQUIDITY, e) }), [ot]),
                    st = Object(d.useCallback)((function(e) { return ot(z.a.CURRENCY_A, e) }), [ot]),
                    dt = Object(d.useCallback)((function(e) { return ot(z.a.CURRENCY_B, e) }), [ot]),
                    ut = Object(N.d)();

                function bt() { return jt.apply(this, arguments) }

                function jt() { return (jt = Object(r.a)(c.a.mark((function e() { var t, n, a, r, l, s, d, u, b, O, x, p, m, h; return c.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (pe && me && xe && He) { e.next = 2; break } throw new Error("missing dependencies");
                                case 2:
                                    if (n = Ye[z.a.CURRENCY_A], a = Ye[z.a.CURRENCY_B], n && a) { e.next = 5; break } throw new Error("missing currency amounts");
                                case 5:
                                    if (r = Object(k.g)(pe, me, xe), t = {}, Object(o.a)(t, z.a.CURRENCY_A, Object(k.c)(n, Ge)[0]), Object(o.a)(t, z.a.CURRENCY_B, Object(k.c)(a, Ge)[0]), l = t, je && Oe) { e.next = 9; break } throw new Error("missing tokens");
                                case 9:
                                    if (s = Ye[z.a.LIQUIDITY]) { e.next = 12; break } throw new Error("missing liquidity amount");
                                case 12:
                                    if (d = Oe === j.d, u = je === j.d || d, fe && ye) { e.next = 16; break } throw new Error("could not wrap");
                                case 16:
                                    if (at !== B.a.APPROVED) { e.next = 20; break }
                                    u ? (b = ["removeLiquidityETH", "removeLiquidityETHSupportingFeeOnTransferTokens"], O = [d ? fe.address : ye.address, s.raw.toString(), l[d ? z.a.CURRENCY_A : z.a.CURRENCY_B].toString(), l[d ? z.a.CURRENCY_B : z.a.CURRENCY_A].toString(), xe, He.toHexString()]) : (b = ["removeLiquidity"], O = [fe.address, ye.address, s.raw.toString(), l[z.a.CURRENCY_A].toString(), l[z.a.CURRENCY_B].toString(), xe, He.toHexString()]), e.next = 25; break;
                                case 20:
                                    if (null === et) { e.next = 24; break }
                                    u ? (b = ["removeLiquidityETHWithPermit", "removeLiquidityETHWithPermitSupportingFeeOnTransferTokens"], O = [d ? fe.address : ye.address, s.raw.toString(), l[d ? z.a.CURRENCY_A : z.a.CURRENCY_B].toString(), l[d ? z.a.CURRENCY_B : z.a.CURRENCY_A].toString(), xe, et.deadline, !1, et.v, et.r, et.s]) : (b = ["removeLiquidityWithPermit"], O = [fe.address, ye.address, s.raw.toString(), l[z.a.CURRENCY_A].toString(), l[z.a.CURRENCY_B].toString(), xe, et.deadline, !1, et.v, et.r, et.s]), e.next = 25; break;
                                case 24:
                                    throw new Error("Attempting to confirm without approval or a signature. Please contact support.");
                                case 25:
                                    return e.next = 27, Promise.all(b.map((function(e) { var t; return (t = r.estimateGas)[e].apply(t, Object(i.a)(O)).then(k.b).catch((function(t) { console.error("estimateGas failed", e, O, t) })) })));
                                case 27:
                                    if (x = e.sent, -1 !== (p = x.findIndex((function(e) { return v.a.isBigNumber(e) })))) { e.next = 33; break }
                                    console.error("This transaction would fail. Please contact support."), e.next = 38; break;
                                case 33:
                                    return m = b[p], h = x[p], qe(!0), e.next = 38, r[m].apply(r, Object(i.a)(O).concat([{ gasLimit: h, gasPrice: Ie }])).then((function(e) { var t, n;
                                        qe(!1), ut(e, { summary: "Remove ".concat(null === (t = Ye[z.a.CURRENCY_A]) || void 0 === t ? void 0 : t.toSignificant(3), " ").concat(null === je || void 0 === je ? void 0 : je.symbol, " and ").concat(null === (n = Ye[z.a.CURRENCY_B]) || void 0 === n ? void 0 : n.toSignificant(3), " ").concat(null === Oe || void 0 === Oe ? void 0 : Oe.symbol) }), Fe(e.hash) })).catch((function(e) { qe(!1), console.error(e) }));
                                case 38:
                                case "end":
                                    return e.stop() } }), e) })))).apply(this, arguments) }

                function Ot() { var e, t; return Object(G.jsxs)(p.a, { gap: "md", children: [Object(G.jsxs)(y.b, { align: "flex-end", children: [Object(G.jsx)(O.Qb, { fontSize: "24px", children: null === (e = Ye[z.a.CURRENCY_A]) || void 0 === e ? void 0 : e.toSignificant(6) }), Object(G.jsxs)(y.c, { gap: "4px", children: [Object(G.jsx)(E.a, { currency: je, size: "24px" }), Object(G.jsx)(O.Qb, { fontSize: "24px", ml: "10px", children: null === je || void 0 === je ? void 0 : je.symbol })] })] }), Object(G.jsx)(y.c, { children: Object(G.jsx)(O.a, { width: "16px" }) }), Object(G.jsxs)(y.b, { align: "flex-end", children: [Object(G.jsx)(O.Qb, { fontSize: "24px", children: null === (t = Ye[z.a.CURRENCY_B]) || void 0 === t ? void 0 : t.toSignificant(6) }), Object(G.jsxs)(y.c, { gap: "4px", children: [Object(G.jsx)(E.a, { currency: Oe, size: "24px" }), Object(G.jsx)(O.Qb, { fontSize: "24px", ml: "10px", children: null === Oe || void 0 === Oe ? void 0 : Oe.symbol })] })] }), Object(G.jsx)(O.Qb, { small: !0, textAlign: "left", pt: "12px", children: Re("Output is estimated. If the price changes by more than %slippage%% your transaction will revert.", { slippage: Ge / 100 }) })] }) }

                function vt() { var e, t, n; return Object(G.jsxs)(G.Fragment, { children: [Object(G.jsxs)(y.b, { children: [Object(G.jsx)(O.Qb, { children: Re("%assetA%/%assetB% Burned", { assetA: null !== (e = null === je || void 0 === je ? void 0 : je.symbol) && void 0 !== e ? e : "", assetB: null !== (t = null === Oe || void 0 === Oe ? void 0 : Oe.symbol) && void 0 !== t ? t : "" }) }), Object(G.jsxs)(y.c, { children: [Object(G.jsx)(E.b, { currency0: je, currency1: Oe, margin: !0 }), Object(G.jsx)(O.Qb, { children: null === (n = Ye[z.a.LIQUIDITY]) || void 0 === n ? void 0 : n.toSignificant(6) })] })] }), we && Object(G.jsxs)(G.Fragment, { children: [Object(G.jsxs)(y.b, { children: [Object(G.jsx)(O.Qb, { children: Re("Price") }), Object(G.jsxs)(O.Qb, { children: ["1 ", null === je || void 0 === je ? void 0 : je.symbol, " = ", fe ? we.priceOf(fe).toSignificant(6) : "-", " ", null === Oe || void 0 === Oe ? void 0 : Oe.symbol] })] }), Object(G.jsxs)(y.b, { children: [Object(G.jsx)("div", {}), Object(G.jsxs)(O.Qb, { children: ["1 ", null === Oe || void 0 === Oe ? void 0 : Oe.symbol, " = ", ye ? we.priceOf(ye).toSignificant(6) : "-", " ", null === je || void 0 === je ? void 0 : je.symbol] })] })] }), Object(G.jsx)(O.p, { disabled: !(at === B.a.APPROVED || null !== et), onClick: bt, children: Re("Confirm") })] }) } var xt = Re("Removing %amountA% %symbolA% and %amountB% %symbolB%", { amountA: null !== (te = null === (ne = Ye[z.a.CURRENCY_A]) || void 0 === ne ? void 0 : ne.toSignificant(6)) && void 0 !== te ? te : "", symbolA: null !== (ie = null === je || void 0 === je ? void 0 : je.symbol) && void 0 !== ie ? ie : "", amountB: null !== (ae = null === (ce = Ye[z.a.CURRENCY_B]) || void 0 === ce ? void 0 : ce.toSignificant(6)) && void 0 !== ae ? ae : "", symbolB: null !== (re = null === Oe || void 0 === Oe ? void 0 : Oe.symbol) && void 0 !== re ? re : "" }),
                    pt = Object(d.useCallback)((function(e) { ot(z.a.LIQUIDITY_PERCENT, e.toString()) }), [ot]),
                    mt = je === j.d || Oe === j.d,
                    ht = Boolean(pe && (je && Object(j.o)(j.n[pe], je) || Oe && Object(j.o)(j.n[pe], Oe))),
                    Ct = Object(d.useCallback)((function(e) { be && Object(S.a)(e) === be ? se.push("/remove/".concat(Object(S.a)(e), "/").concat(ue)) : se.push("/remove/".concat(Object(S.a)(e), "/").concat(be)) }), [ue, be, se]),
                    ft = Object(d.useCallback)((function(e) { ue && Object(S.a)(e) === ue ? se.push("/remove/".concat(be, "/").concat(Object(S.a)(e))) : se.push("/remove/".concat(ue, "/").concat(Object(S.a)(e))) }), [ue, be, se]),
                    yt = Object(d.useCallback)((function() { tt(null), Me && ot(z.a.LIQUIDITY_PERCENT, "0"), Fe("") }), [ot, Me]),
                    Rt = function(e, t) { var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
                            i = Object(d.useState)((function() { return e })),
                            a = Object(l.a)(i, 2),
                            c = a[0],
                            r = a[1],
                            o = Object(d.useRef)(),
                            s = Object(d.useCallback)((function(e) { r(e), o.current && clearTimeout(o.current), o.current = setTimeout((function() { t(e), o.current = void 0 }), n) }), [n, t]); return Object(d.useEffect)((function() { o.current && (clearTimeout(o.current), o.current = void 0), r(e) }), [e]), [c, s] }(Number.parseInt(Ye[z.a.LIQUIDITY_PERCENT].toFixed(0)), pt),
                    It = Object(l.a)(Rt, 2),
                    Et = It[0],
                    gt = It[1],
                    Tt = Object(O.kc)(Object(G.jsx)(m.c, { title: Re("You will receive"), customOnDismiss: yt, attemptingTxn: Le, hash: Me || "", content: function() { return Object(G.jsx)(m.a, { topContent: Ot, bottomContent: vt }) }, pendingText: xt }), !0, !0, "removeLiquidityModal"),
                    Ut = Object(l.a)(Tt, 1)[0]; return Object(G.jsxs)(W.a, { children: [Object(G.jsxs)(f.a, { children: [Object(G.jsx)(f.b, { backTo: "/pool", title: Re("Remove %assetA%-%assetB% liquidity", { assetA: null !== (oe = null === je || void 0 === je ? void 0 : je.symbol) && void 0 !== oe ? oe : "", assetB: null !== (le = null === Oe || void 0 === Oe ? void 0 : Oe.symbol) && void 0 !== le ? le : "" }), subtitle: "To receive ".concat(null === je || void 0 === je ? void 0 : je.symbol, " and ").concat(null === Oe || void 0 === Oe ? void 0 : Oe.symbol), noConfig: !0 }), Object(G.jsxs)(O.u, { children: [Object(G.jsxs)(p.a, { gap: "20px", children: [Object(G.jsxs)(y.b, { children: [Object(G.jsx)(O.Qb, { children: Re("Amount") }), Object(G.jsx)(O.p, { variant: "text", scale: "sm", onClick: function() { return Pe(!Be) }, children: Re(Be ? "Simple" : "Detailed") })] }), !Be && Object(G.jsxs)(J, { children: [Object(G.jsxs)(O.Qb, { fontSize: "40px", bold: !0, mb: "16px", style: { lineHeight: 1 }, children: [Je[z.a.LIQUIDITY_PERCENT], "%"] }), Object(G.jsx)(O.Eb, { name: "lp-amount", min: 0, max: 100, value: Et, onValueChanged: function(e) { return gt(Math.ceil(e)) }, mb: "16px" }), Object(G.jsxs)(O.R, { flexWrap: "wrap", justifyContent: "space-evenly", children: [Object(G.jsx)(O.p, { variant: "tertiary", scale: "sm", onClick: function() { return ot(z.a.LIQUIDITY_PERCENT, "25") }, children: "25%" }), Object(G.jsx)(O.p, { variant: "tertiary", scale: "sm", onClick: function() { return ot(z.a.LIQUIDITY_PERCENT, "50") }, children: "50%" }), Object(G.jsx)(O.p, { variant: "tertiary", scale: "sm", onClick: function() { return ot(z.a.LIQUIDITY_PERCENT, "75") }, children: "75%" }), Object(G.jsx)(O.p, { variant: "tertiary", scale: "sm", onClick: function() { return ot(z.a.LIQUIDITY_PERCENT, "100") }, children: "Max" })] })] })] }), !Be && Object(G.jsxs)(G.Fragment, { children: [Object(G.jsx)(p.b, { children: Object(G.jsx)(O.d, { color: "textSubtle", width: "24px", my: "16px" }) }), Object(G.jsxs)(p.a, { gap: "10px", children: [Object(G.jsx)(O.Qb, { bold: !0, color: "secondary", fontSize: "12px", textTransform: "uppercase", children: Re("You will receive") }), Object(G.jsxs)(I.c, { children: [Object(G.jsxs)(O.R, { justifyContent: "space-between", mb: "8px", children: [Object(G.jsxs)(O.R, { children: [Object(G.jsx)(E.a, { currency: je }), Object(G.jsx)(O.Qb, { small: !0, color: "textSubtle", id: "remove-liquidity-tokena-symbol", ml: "4px", children: null === je || void 0 === je ? void 0 : je.symbol })] }), Object(G.jsx)(O.Qb, { small: !0, children: Je[z.a.CURRENCY_A] || "-" })] }), Object(G.jsxs)(O.R, { justifyContent: "space-between", children: [Object(G.jsxs)(O.R, { children: [Object(G.jsx)(E.a, { currency: Oe }), Object(G.jsx)(O.Qb, { small: !0, color: "textSubtle", id: "remove-liquidity-tokenb-symbol", ml: "4px", children: null === Oe || void 0 === Oe ? void 0 : Oe.symbol })] }), Object(G.jsx)(O.Qb, { small: !0, children: Je[z.a.CURRENCY_B] || "-" })] }), pe && (ht || mt) ? Object(G.jsx)(y.b, { style: { justifyContent: "flex-end", fontSize: "14px" }, children: mt ? Object(G.jsx)(_.a, { to: "/remove/".concat(je === j.d ? j.n[pe].address : ue, "/").concat(Oe === j.d ? j.n[pe].address : be), children: Re("Receive WBNB") }) : ht ? Object(G.jsx)(_.a, { to: "/remove/".concat(je && Object(j.o)(je, j.n[pe]) ? "BNB" : ue, "/").concat(Oe && Object(j.o)(Oe, j.n[pe]) ? "BNB" : be), children: Re("Receive BNB") }) : null }) : null] })] })] }), Be && Object(G.jsxs)(O.m, { my: "16px", children: [Object(G.jsx)(h.a, { value: Je[z.a.LIQUIDITY], onUserInput: lt, onMax: function() { ot(z.a.LIQUIDITY_PERCENT, "100") }, showMaxButton: !Ke, disableCurrencySelect: !0, currency: null === we || void 0 === we ? void 0 : we.liquidityToken, pair: we, id: "liquidity-amount", onCurrencySelect: function() { return null } }), Object(G.jsx)(p.b, { children: Object(G.jsx)(O.d, { width: "24px", my: "16px" }) }), Object(G.jsx)(h.a, { hideBalance: !0, value: Je[z.a.CURRENCY_A], onUserInput: st, onMax: function() { return ot(z.a.LIQUIDITY_PERCENT, "100") }, showMaxButton: !Ke, currency: je, label: Re("Output"), onCurrencySelect: Ct, id: "remove-liquidity-tokena" }), Object(G.jsx)(p.b, { children: Object(G.jsx)(O.a, { width: "24px", my: "16px" }) }), Object(G.jsx)(h.a, { hideBalance: !0, value: Je[z.a.CURRENCY_B], onUserInput: dt, onMax: function() { return ot(z.a.LIQUIDITY_PERCENT, "100") }, showMaxButton: !Ke, currency: Oe, label: Re("Output"), onCurrencySelect: ft, id: "remove-liquidity-tokenb" })] }), we && Object(G.jsxs)(p.a, { gap: "10px", style: { marginTop: "16px" }, children: [Object(G.jsx)(O.Qb, { bold: !0, color: "secondary", fontSize: "12px", textTransform: "uppercase", children: Re("Prices") }), Object(G.jsxs)(I.c, { children: [Object(G.jsxs)(O.R, { justifyContent: "space-between", children: [Object(G.jsxs)(O.Qb, { small: !0, color: "textSubtle", children: ["1 ", null === je || void 0 === je ? void 0 : je.symbol, " ="] }), Object(G.jsxs)(O.Qb, { small: !0, children: [fe ? we.priceOf(fe).toSignificant(6) : "-", " ", null === Oe || void 0 === Oe ? void 0 : Oe.symbol] })] }), Object(G.jsxs)(O.R, { justifyContent: "space-between", children: [Object(G.jsxs)(O.Qb, { small: !0, color: "textSubtle", children: ["1 ", null === Oe || void 0 === Oe ? void 0 : Oe.symbol, " ="] }), Object(G.jsxs)(O.Qb, { small: !0, children: [ye ? we.priceOf(ye).toSignificant(6) : "-", " ", null === je || void 0 === je ? void 0 : je.symbol] })] })] })] }), Object(G.jsx)(O.m, { position: "relative", mt: "16px", children: xe ? Object(G.jsxs)(y.b, { children: [Object(G.jsx)(O.p, { variant: at === B.a.APPROVED || null !== et ? "success" : "primary", onClick: function() { return rt.apply(this, arguments) }, disabled: at !== B.a.NOT_APPROVED || null !== et, width: "100%", mr: "0.5rem", children: at === B.a.PENDING ? Object(G.jsx)(P.a, { children: Re("Enabling") }) : at === B.a.APPROVED || null !== et ? Re("Enabled") : Re("Enable") }), Object(G.jsx)(O.p, { variant: !ke && Ye[z.a.CURRENCY_A] && Ye[z.a.CURRENCY_B] ? "danger" : "primary", onClick: function() { Ut() }, width: "100%", disabled: !ke || null === et && at !== B.a.APPROVED, children: Ne || Re("Remove") })] }) : Object(G.jsx)(R.a, {}) })] })] }), we ? Object(G.jsx)(p.a, { style: { minWidth: "20rem", width: "100%", maxWidth: "400px", marginTop: "1rem" }, children: Object(G.jsx)(C.a, { showUnwrapped: ht, pair: we }) }) : null] }) } }, 836: function(e, t, n) { "use strict"; var i, a = n(8),
                c = n(83),
                r = n(5),
                o = Object(r.e)(c.a)(i || (i = Object(a.a)(["\n  text-decoration: none;\n  cursor: pointer;\n  color: ", ";\n  font-weight: 500;\n\n  :hover {\n    text-decoration: underline;\n  }\n\n  :focus {\n    outline: none;\n    text-decoration: underline;\n  }\n\n  :active {\n    text-decoration: none;\n  }\n"])), (function(e) { return e.theme.colors.primary }));
            t.a = o } }
]);
//# sourceMappingURL=11.e7d00dec.chunk.js.map