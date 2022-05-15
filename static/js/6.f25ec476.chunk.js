(this["webpackJsonppancake-frontend"] = this["webpackJsonppancake-frontend"] || []).push([
    [6], {
        1256: function(e, t, n) {
            "use strict";
            n.r(t);
            var c = n(8),
                r = n(1),
                i = n(5),
                o = n(2),
                a = n(42),
                s = n(13),
                l = n(383),
                d = n(881),
                b = n(90),
                u = n(831),
                j = n(9),
                x = n(3),
                p = n.n(x),
                h = n(12),
                O = n(6),
                f = n(31),
                m = n(20),
                v = n(224),
                g = n(225),
                w = n(15),
                C = n(33);

            function y(e, t) {
                if (Object(w.a)(2, arguments), !t || "object" !== typeof t) return new Date(NaN);
                var n = "years" in t ? Object(C.a)(t.years) : 0,
                    c = "months" in t ? Object(C.a)(t.months) : 0,
                    r = "weeks" in t ? Object(C.a)(t.weeks) : 0,
                    i = "days" in t ? Object(C.a)(t.days) : 0,
                    o = "hours" in t ? Object(C.a)(t.hours) : 0,
                    a = "minutes" in t ? Object(C.a)(t.minutes) : 0,
                    s = "seconds" in t ? Object(C.a)(t.seconds) : 0,
                    l = Object(m.default)(e),
                    d = c || n ? Object(g.default)(l, c + 12 * n) : l,
                    b = i || r ? Object(v.default)(d, i + 7 * r) : d,
                    u = a + 60 * o,
                    j = s + 60 * u,
                    x = 1e3 * j,
                    p = new Date(b.getTime() + x);
                return p
            }
            var k = n(815),
                A = 36e5;

            function S(e, t) { Object(w.a)(2, arguments); var n = Object(k.a)(e, t) / A; return n > 0 ? Math.floor(n) : Math.ceil(n) }
            var D, B = n(49),
                Q = n(4),
                F = n(36),
                R = function(e, t) { var n = new Q.j(Q.a.MAINNET, e, 18); return Q.f.getAddress(n, t) },
                E = [{ account: "0x17EC35383E5DF8876DD4FF108C9002B616e40c31", farmName: "BRISE-BSWAP", tokenAddress: "0xEEa9Fe24FFBc4F338d90695Be5bf9c0964b93e7E", quoteToken: F.a.wbnb, tokenName: "Brise Swap", projectSite: "https://briseswap.com" }, { account: "0xE6444CCee2AB9dB962A7e918426118b3080926d2", farmName: "VEF-BSWAP", tokenAddress: "0xD6447d2fA919811c41a064bDbdaB1E281F8de9B2", quoteToken: F.a.wbnb, tokenName: "Vefi Ecosystem Token", projectSite: "https://vefinetwork.org/" }, { account: "0xE6444CCee2AB9dB962A7e918426118b3080926d2", farmName: "OMNIA-BSWAP", tokenAddress: "0x5d4685c2C75581C67b9D6292A065a767bC214681", quoteToken: F.a.wbnb, tokenName: "OmniaVerse", projectSite: "https://omniaverse.io/" }, { account: "0x5d5a64Eb4D7C59d098E63de96355E0158C72F7dD", farmName: "BPAD-BSWAP", tokenAddress: "0x71946a5C9dA7C95ee804a9BE561EC15A3F286A7D", quoteToken: F.a.busd, tokenName: "Brisepad", projectSite: "https://brisepad.co/" }, { account: "0x5d5a64Eb4D7C59d098E63de96355E0158C72F7dD", farmName: "SPHYNX-BSWAP", tokenAddress: "0x0e11DCE06eF2FeD6f78CEF5144F970E1184b4298", quoteToken: F.a.wbnb, tokenName: "SPHYNX BRC", projectSite: "https://thesphynx.co/" }, { account: "0x5d5a64Eb4D7C59d098E63de96355E0158C72F7dD", farmName: "BTXT-BSWAP", tokenAddress: "0xD48474E7444727bF500a32D5AbE01943f3A59A64", quoteToken: F.a.wbnb, tokenName: "BitsXT", projectSite: "https://www.bitsxt.com/" }, { account: "0xE6444CCee2AB9dB962A7e918426118b3080926d2", farmName: "PRDS-BSWAP", tokenAddress: "0x31226B28add9062c5064a9Bd35eA155F323C6ca6", quoteToken: F.a.busd, tokenName: "Brise Paradise", projectSite: "https://briseparadise.com/" }, { account: "0x5d5a64Eb4D7C59d098E63de96355E0158C72F7dD", farmName: "BRZILLA-BSWAP", tokenAddress: "0x9b8535Dd9281e48484725bC9Eb6Ed2f66CEA2a36", quoteToken: F.a.wbnb, tokenName: "BriseZilla", projectSite: "https://brisezilla.com/" }, { account: "0xE6444CCee2AB9dB962A7e918426118b3080926d2", farmName: "NUMI-BSWAP", tokenAddress: "0x6718e47e74497d1564EE76d832309144b83Ef8E8", quoteToken: F.a.wbnb, tokenName: "Numitor", projectSite: "https://numitor.org/" }, { account: "0x6555Fb23c7660c72c22a11659066C0b7f48C06Cd", farmName: "MAP-BSWAP", tokenAddress: "0x6D347fdCb302a5879545E01EceE7A176db23dCDa", quoteToken: F.a.wbnb, tokenName: "\t4D Twin Maps", projectSite: "https://4dtwinmaps.com/token" }, { account: "0x5d5a64Eb4D7C59d098E63de96355E0158C72F7dD", farmName: "Miidas-BSWAP", tokenAddress: "0x5B534A2Df329195Fd7e5c9AcA1D9ffbdA14A4963", quoteToken: F.a.wbnb, tokenName: "Miidas NFT", projectSite: "https://brise.miidas.com/" }, { account: "0x5d5a64Eb4D7C59d098E63de96355E0158C72F7dD", farmName: "YOGO-BSWAP", tokenAddress: "0xB361D5953e21Cfde5CD62B89FDf40bc21903A6bb", quoteToken: F.a.wbnb, tokenName: "YOGO Token", projectSite: "https://www.yo-go.net" }].map((function(e) { return Object(O.a)(Object(O.a)({}, e), {}, { lpAddress: R(e.tokenAddress, e.quoteToken) }) })),
                P = { account: "", tokenAddress: "", quoteToken: F.a.wbnb, farmName: "Unknown", tokenName: "Unknown" },
                T = function(e) { var t = E.find((function(t) { return t.account.toLowerCase() === e.toLowerCase() })); return t || Object(O.a)(Object(O.a)({}, P), {}, { account: e }) },
                N = n(94);
            ! function(e) { e[e.Pending = 0] = "Pending", e[e.Open = 1] = "Open", e[e.Close = 2] = "Close" }(D || (D = {}));
            var L, I, M, W, z, U, q, H, Y, _, Z, X, V, G, J, K, $, ee, te, ne = n(80),
                ce = n(29),
                re = "https://docs.google.com/forms/d/e/1FAIpQLScUkwbsMWwg7L5jjGjEcmv6RsoCNhFDkV3xEpRu2KcJrr47Sw/viewform",
                ie = function(e, t) {
                    var n = Object(f.a)(e).sort((function(e, t) { return e.amount.lt(t.amount) ? 1 : e.amount.gt(t.amount) ? -1 : 0 })).map((function(e, t) { var n = T(e.account); return Object(O.a)(Object(O.a)({}, n), {}, { position: t + 1, account: e.account, amount: e.amount }) })),
                        c = 0;
                    return n.map((function(e, n, r) {
                        var i = Object(ce.d)(e.amount),
                            o = 0 !== n && e.amount.eq(r[n - 1].amount);
                        c = o ? c : c + 1;
                        var a = !!t && n + 1 <= t.topLeaderboard;
                        return t && t.leaderboardThreshold.gt(0) && (a = t.leaderboardThreshold.lte(i)), Object(O.a)(Object(O.a)({}, e), {}, { position: c, isTopPosition: a, samePositionAsAbove: o, amount: i })
                    }))
                },
                oe = function(e, t, n, c) { return c !== D.Pending || t || n ? c === D.Close ? ne.a.Closed : e >= n ? ne.a.Finished : c === D.Open && e < t ? ne.a.Pending : c === D.Open && e > t ? ne.a.Open : ne.a.ToBeAnnounced : ne.a.ToBeAnnounced },
                ae = function() {
                    var e = Object(h.a)(p.a.mark((function e(t, n) {
                        var c, r, i;
                        return p.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (c = (n - t) * B.h, !(t > n)) { e.next = 14; break }
                                    return e.prev = 3, e.next = 6, N.a.getBlock(n);
                                case 6:
                                    return r = e.sent, i = r.timestamp, e.abrupt("return", Object(m.default)(1e3 * i));
                                case 11:
                                    e.prev = 11, e.t0 = e.catch(3), y(new Date, { seconds: c });
                                case 14:
                                    return e.abrupt("return", y(new Date, { seconds: c }));
                                case 15:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [3, 11]
                        ])
                    })));
                    return function(t, n) { return e.apply(this, arguments) }
                }(),
                se = function() {
                    var e = Object(h.a)(p.a.mark((function e(t, n) {
                        var c, r, i, o, a;
                        return p.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return c = Object(O.a)(Object(O.a)({}, n), {}, { topLeaderboard: n.leaderboard.toNumber(), initialBidAmount: Object(ce.d)(n.initialBidAmount).div(B.k).toNumber(), leaderboardThreshold: Object(ce.d)(n.leaderboardThreshold), startBlock: n.startBlock.toNumber(), endBlock: n.endBlock.toNumber() }), e.next = 3, N.a.getBlockNumber();
                                case 3:
                                    return r = e.sent, e.next = 6, ae(r, c.startBlock);
                                case 6:
                                    return i = e.sent, e.next = 9, ae(r, c.endBlock);
                                case 9:
                                    return o = e.sent, a = oe(r, c.startBlock, c.endBlock, c.status), e.abrupt("return", Object(O.a)(Object(O.a)({ id: t, startDate: i, endDate: o, auctionDuration: S(o, i) }, c), {}, { status: a }));
                                case 12:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) { return e.apply(this, arguments) }
                }(),
                le = function(e) {
                    var t = Object(j.a)(e, 4),
                        n = t[0],
                        c = t[1],
                        r = t[2],
                        i = t[3];
                    return { auctions: n.map((function(e, t) { return { id: e.toNumber(), amount: Object(ce.d)(c[t]), claimed: r[t] } })), nextCursor: i.toNumber() }
                },
                de = n(0),
                be = Object(i.e)(o.t)(L || (L = Object(c.a)(["\n  flex: 1;\n  height: fit-content;\n"]))),
                ue = Object(i.e)(o.Z)(I || (I = Object(c.a)(["\n  display: inline;\n"]))),
                je = i.e.ul(M || (M = Object(c.a)(["\n  list-style-position: outside;\n  padding: 0 24px;\n\n  li {\n    line-height: 1.5;\n    margin-bottom: 4px;\n  }\n\n  li::marker {\n    font-size: 12px;\n  }\n"]))),
                xe = i.e.li(W || (W = Object(c.a)(["\n  color: ", ";\n"])), (function(e) { return e.theme.colors.textSubtle })),
                pe = function() { var e = Object(s.b)().t; return Object(de.jsxs)(o.R, { flexDirection: "column", children: [Object(de.jsx)(o.T, { as: "h1", scale: "xxl", mb: "40px", children: e("FAQs") }), Object(de.jsx)(o.R, { flexDirection: ["column", null, null, null, "row"], children: Object(de.jsxs)(be, { mr: [null, null, null, null, "24px"], mb: ["24px", null, null, null, "0"], children: [Object(de.jsx)(o.w, { children: Object(de.jsx)(o.T, { children: e("How does it work?") }) }), Object(de.jsxs)(o.u, { p: "0 24px 24px", children: [Object(de.jsx)(u.a, { title: e("Step 1: Submit application"), mt: "24px", children: Object(de.jsxs)(o.m, { display: "inline", children: [Object(de.jsx)(o.Qb, { display: "inline", color: "textSubtle", children: e("Projects can submit an application to sponsor a yield farm and/or pool onBriseSwap via the ") }), Object(de.jsx)(ue, { href: re, external: !0, children: e("Application Form") })] }) }), Object(de.jsx)(u.a, { title: e("Step 2: Await whitelisting"), mt: "24px", children: Object(de.jsxs)(o.m, { color: "textSubtle", children: [Object(de.jsx)(o.Qb, { color: "textSubtle", mb: "4px", children: e("TheBriseSwap team will try to respond within a week.") }), Object(de.jsxs)(je, { children: [Object(de.jsx)(xe, { children: e("Community Farm qualifiers will be asked to provide the address of the wallet which you\u2019ll use for bidding Cyber Cows in the auction.") }), Object(de.jsx)(xe, { children: e("Core Farm/Pool qualifiers will receive further directions separately.") })] })] }) }), Object(de.jsxs)(u.a, { title: e("Step 3: During the auction"), mt: "24px", children: [Object(de.jsx)(o.Qb, { color: "textSubtle", children: e("During the auction period, if you connect your project\u2019s whitelisted wallet to the Auction page, you\u2019ll see a \u201cPlace Bid\u201d button during when the auction is live.") }), Object(de.jsx)(o.Qb, { color: "textSubtle", children: e("You can then commit Cyber Cows to bid during the auction, competing against other project for one of the available farms.") })] }), Object(de.jsxs)(u.a, { title: e("Step 4: After the auction"), mt: "24px", children: [Object(de.jsx)(o.Qb, { color: "textSubtle", children: e("If your bid was not successful, you can reclaim your Cyber Cows on this page.") }), Object(de.jsx)(o.Qb, { color: "textSubtle", children: e("If your bid was successful, your farm will begin at the specified time. The Cyber Cows you bid will not be returned to you and will be added to our weekly Cyber Cows burn.") }), Object(de.jsx)(o.Qb, { color: "textSubtle", children: e("So long as you are whitelisted, you\u2019ll be able to participate in each new auction.") }), Object(de.jsx)(o.Qb, { color: "textSubtle", children: e("If two or more projects bid the exact same Cyber Cows amount and are contending for a spot in the winning bidders, their bids may be invalidated.") })] })] })] }) })] }) },
                he = n(30),
                Oe = n(14),
                fe = n.n(Oe),
                me = n(54),
                ve = n(129),
                ge = n(787),
                we = n(44),
                Ce = n(92),
                ye = n(105),
                ke = n(788),
                Ae = n(95),
                Se = n(126),
                De = n(96),
                Be = Object(i.e)(o.ib)(z || (z = Object(c.a)(["\n  min-width: 280px;\n  max-width: 320px;\n  & > div:nth-child(2) {\n    padding: 0;\n  }\n"]))),
                Qe = Object(i.e)(o.m)(U || (U = Object(c.a)(["\n  padding: 24px;\n  background-color: ", ";\n"])), (function(e) { return e.theme.colors.dropdown })),
                Fe = Object(i.e)(o.m)(q || (q = Object(c.a)(["\n  padding: 24px;\n"]))),
                Re = function(e) {
                    var t = e.onDismiss,
                        n = e.initialBidAmount,
                        c = e.connectedBidder,
                        i = e.refreshBidders,
                        l = Object(a.c)().account,
                        d = Object(s.b)().t,
                        u = Object(b.a)().theme,
                        x = Object(Se.a)().callWithGasPrice,
                        O = Object(r.useState)(""),
                        f = Object(j.a)(O, 2),
                        m = f[0],
                        v = f[1],
                        g = Object(r.useState)(!1),
                        w = Object(j.a)(g, 2),
                        C = w[0],
                        y = w[1],
                        k = Object(r.useState)(!1),
                        A = Object(j.a)(k, 2),
                        S = A[0],
                        D = A[1],
                        Q = Object(r.useState)(!1),
                        R = Object(j.a)(Q, 2),
                        E = R[0],
                        P = R[1],
                        T = Object(r.useState)(null),
                        N = Object(j.a)(T, 2),
                        L = N[0],
                        I = N[1],
                        M = Object(ve.b)(F.a.cake.address),
                        W = M.balance,
                        z = M.fetchStatus,
                        U = Object(he.d)(W),
                        q = Object(Ae.g)(),
                        H = Object(we.i)(),
                        Y = Object(we.c)(),
                        _ = Object(Ce.a)().toastSuccess,
                        Z = c.bidderData,
                        X = Z.amount,
                        V = Z.position,
                        G = X.isZero(),
                        J = G && !S;
                    Object(r.useEffect)((function() { D(parseFloat(m) >= n), y(parseFloat(m) % 10 === 0 && 0 !== parseFloat(m)), z === ve.a.SUCCESS && U.lt(m) ? P(!0) : P(!1) }), [m, n, z, U]), Object(r.useEffect)((function() { I(E ? d("Insufficient Cyber Cows balance") : !S && G ? d("First bid must be %initialBidAmount% Cyber Cows or more.", { initialBidAmount: n }) : C ? null : d("Bid must be a multiple of 10")) }), [C, S, E, n, d, G]);
                    var K = Object(ge.a)({
                            onRequiresApproval: function() {
                                var e = Object(h.a)(p.a.mark((function e() {
                                    var t, n;
                                    return p.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.prev = 0, e.next = 3, Y.allowance(l, H.address);
                                            case 3:
                                                return t = e.sent, n = Object(ce.d)(t), e.abrupt("return", n.gt(0));
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
                            onApprove: function() { return x(Y, "approve", [H.address, me.a.constants.MaxUint256]) },
                            onApproveSuccess: function() {
                                var e = Object(h.a)(p.a.mark((function e(t) {
                                    var n;
                                    return p.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                n = t.receipt, _(d("Contract approved - you can now place your bid!"), Object(de.jsx)(De.b, { txHash: n.transactionHash }));
                                            case 2:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })));
                                return function(t) { return e.apply(this, arguments) }
                            }(),
                            onConfirm: function() { var e = new fe.a(m).times(B.k).toString(); return x(H, "bid", [e]) },
                            onSuccess: function() {
                                var e = Object(h.a)(p.a.mark((function e(n) {
                                    var c;
                                    return p.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                c = n.receipt, i(), t(), _(d("Bid placed!"), Object(de.jsx)(De.b, { txHash: c.transactionHash }));
                                            case 4:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })));
                                return function(t) { return e.apply(this, arguments) }
                            }()
                        }),
                        $ = K.isApproving,
                        ee = K.isApproved,
                        te = K.isConfirmed,
                        ne = K.isConfirming,
                        re = K.handleApprove,
                        ie = K.handleConfirm,
                        oe = function(e) {
                            var t = 1 === e ? fe.a.ROUND_FLOOR : fe.a.ROUND_CEIL,
                                n = Object(he.d)(W.times(e)).div(10).integerValue(t).times(10);
                            v(n.toString())
                        };
                    return Object(de.jsxs)(Be, { title: d("Place a Bid"), onDismiss: t, headerBackground: u.colors.gradients.cardHeader, children: [Object(de.jsxs)(Qe, { children: [Object(de.jsxs)(o.R, { justifyContent: "space-between", children: [Object(de.jsx)(o.Qb, { children: d("Your existing bid") }), Object(de.jsx)(o.Qb, { children: d("%num% Cyber Cows", { num: Object(he.e)(X).toLocaleString() }) })] }), Object(de.jsxs)(o.R, { justifyContent: "space-between", children: [Object(de.jsx)(o.Qb, { children: d("Your position") }), Object(de.jsx)(o.Qb, { children: V ? "#".concat(V) : "-" })] })] }), Object(de.jsxs)(Fe, { children: [Object(de.jsxs)(o.R, { justifyContent: "space-between", alignItems: "center", pb: "8px", children: [Object(de.jsx)(o.Qb, { children: d("Bid a multiple of 10") }), Object(de.jsxs)(o.R, { children: [Object(de.jsx)(o.tb, { width: "24px", height: "24px", mr: "4px" }), Object(de.jsx)(o.Qb, { bold: !0, children: "Cyber Cows" })] })] }), G && Object(de.jsx)(o.Qb, { pb: "8px", small: !0, children: d("First bid must be %initialBidAmount% Cyber Cows or more.", { initialBidAmount: n }) }), Object(de.jsx)(o.j, { isWarning: !C || J, placeholder: "0", value: m, onUserInput: function(e) { v(e) }, currencyValue: q.gt(0) && "~".concat(m ? q.times(new fe.a(m)).toNumber().toLocaleString() : "0.00", " USD") }), Object(de.jsxs)(o.R, { justifyContent: "flex-end", mt: "8px", children: [Object(de.jsxs)(o.Qb, { fontSize: "12px", color: "textSubtle", mr: "8px", children: [d("Balance"), ":"] }), Object(de.jsx)(o.Qb, { fontSize: "12px", color: "textSubtle", children: Object(he.c)(U.toNumber(), 3, 3) })] }), L && Object(de.jsx)(o.Qb, { color: "failure", textAlign: "right", fontSize: "12px", children: L }), Object(de.jsxs)(o.R, { justifyContent: "space-between", mt: "8px", mb: "24px", children: [Object(de.jsx)(o.p, { disabled: z !== ve.a.SUCCESS, scale: "xs", mx: "2px", p: "4px 16px", variant: "tertiary", onClick: function() { return oe(.25) }, children: "25%" }), Object(de.jsx)(o.p, { disabled: z !== ve.a.SUCCESS, scale: "xs", mx: "2px", p: "4px 16px", variant: "tertiary", onClick: function() { return oe(.5) }, children: "50%" }), Object(de.jsx)(o.p, { disabled: z !== ve.a.SUCCESS, scale: "xs", mx: "2px", p: "4px 16px", variant: "tertiary", onClick: function() { return oe(.75) }, children: "75%" }), Object(de.jsx)(o.p, { disabled: z !== ve.a.SUCCESS, scale: "xs", mx: "2px", p: "4px 16px", variant: "tertiary", onClick: function() { return oe(1) }, children: "MAX" })] }), Object(de.jsx)(o.R, { flexDirection: "column", children: l ? Object(de.jsx)(ke.b, { isApproveDisabled: ee, isApproving: $, isConfirmDisabled: !C || Object(he.d)(W).lt(m) || te || J || E, isConfirming: ne, onApprove: re, onConfirm: ie, buttonArrangement: ke.a.SEQUENTIAL }) : Object(de.jsx)(ye.a, {}) }), Object(de.jsx)(o.Qb, { color: "textSubtle", small: !0, mt: "24px", children: d("If your bid is unsuccessful, you\u2019ll be able to reclaim your Cyber Cows after the auction.") })] })] })
                },
                Ee = n(760),
                Pe = Object(i.e)(o.R)(H || (H = Object(c.a)(["\n  flex-direction: column;\n  padding: 16px;\n  border-radius: ", ";\n  background-color: ", ";\n  border: 1px ", " solid;\n"])), (function(e) { return e.theme.radii.default }), (function(e) { return e.theme.colors.background }), (function(e) { return e.theme.colors.cardBorder })),
                Te = function(e) {
                    var t = e.auction,
                        n = t.startBlock,
                        c = t.endBlock,
                        r = t.auctionDuration,
                        i = t.startDate,
                        a = t.endDate,
                        l = t.status,
                        d = Object(s.b)().t,
                        b = l === ne.a.ToBeAnnounced || l === ne.a.Closed;
                    return Object(de.jsxs)(de.Fragment, { children: [Object(de.jsx)(o.Qb, { fontSize: "12px", bold: !0, color: "secondary", textTransform: "uppercase", mb: "8px", children: d("Auction Schedule") }), Object(de.jsxs)(Pe, { children: [!b && Object(de.jsxs)(o.R, { justifyContent: "space-between", mb: "8px", children: [Object(de.jsx)(o.Qb, { small: !0, color: "textSubtle", children: d("Auction duration") }), Object(de.jsx)(o.Qb, { small: !0, children: d("%numHours% hours", { numHours: "~".concat(r.toString()) }) })] }), Object(de.jsxs)(o.R, { justifyContent: "space-between", mb: "8px", children: [Object(de.jsx)(o.Qb, { small: !0, color: "textSubtle", children: d("Start") }), b ? Object(de.jsx)(o.Qb, { small: !0, children: d("To be announced") }) : Object(de.jsxs)(o.m, { children: [Object(de.jsx)(o.Qb, { small: !0, children: Object(Ee.default)(i, "MMMM dd yyyy hh:mm aa") }), Object(de.jsx)(o.Qb, { small: !0, textAlign: "right", children: d("Block %num%", { num: n }) })] })] }), Object(de.jsxs)(o.R, { justifyContent: "space-between", children: [Object(de.jsx)(o.Qb, { small: !0, color: "textSubtle", children: d("End") }), b ? Object(de.jsx)(o.Qb, { small: !0, children: d("To be announced") }) : Object(de.jsxs)(o.m, { children: [Object(de.jsx)(o.Qb, { small: !0, children: Object(Ee.default)(a, "MMMM dd yyyy hh:mm aa") }), Object(de.jsx)(o.Qb, { small: !0, textAlign: "right", children: d("Block %num%", { num: c }) })] })] })] })] })
                },
                Ne = function() {
                    var e = Object(s.b)().t,
                        t = Object(o.mc)(Object(de.jsxs)(de.Fragment, { children: [Object(de.jsx)(o.Qb, { mb: "16px", children: e("Only whitelisted project wallets can bid in the auction to create Community Farms.") }), Object(de.jsx)(o.Qb, { mb: "16px", children: e("Bidding is only possible while the auction is live.") }), Object(de.jsx)(o.Qb, { children: e("If you\u2019re sure your project should be able to bid in this auction, make sure you\u2019re connected with the correct (whitelisted) wallet.") })] }), { placement: "bottom" }),
                        n = t.tooltip,
                        c = t.targetRef,
                        r = t.tooltipVisible;
                    return Object(de.jsxs)(o.R, { justifyContent: "center", alignItems: "center", children: [Object(de.jsx)(o.Qb, { color: "textSubtle", small: !0, mr: "8px", children: e("Why cant I bid for a farm?") }), Object(de.jsx)("span", { ref: c, children: Object(de.jsx)(o.U, { color: "textSubtle", height: "16px", width: "16px" }) }), r && n] })
                },
                Le = n(155),
                Ie = function() {
                    var e = Object(r.useState)(null),
                        t = Object(j.a)(e, 2),
                        n = t[0],
                        c = t[1],
                        i = Object(we.i)();
                    return Object(r.useEffect)((function() {
                        n || function() {
                            var e = Object(h.a)(p.a.mark((function e() {
                                var t, n, r, o;
                                return p.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, i.viewBidders(0, B.b);
                                        case 3:
                                            t = e.sent, n = Object(j.a)(t, 1), r = n[0], o = r.map((function(e) { return T(e) })), c(o), e.next = 13;
                                            break;
                                        case 10:
                                            e.prev = 10, e.t0 = e.catch(0), console.error("Failed to fetch list of whitelisted addresses", e.t0);
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
                    }), [i, n]), n
                },
                Me = Object(i.e)(o.ib)(Y || (Y = Object(c.a)(["\n  & > div:nth-child(2) {\n    padding: 0;\n  }\n"]))),
                We = Object(i.e)(o.R)(_ || (_ = Object(c.a)(["\n  border-bottom: 1px solid ", ";\n"])), (function(e) { return e.theme.colors.cardBorder })),
                ze = i.e.div(Z || (Z = Object(c.a)(["\n  display: grid;\n  grid-template-columns: 3fr 5fr 0.5fr;\n  border-bottom: 1px solid ", ";\n  padding: 8px 24px;\n  &:hover {\n    cursor: pointer;\n    opacity: 0.5;\n  }\n"])), (function(e) { return e.theme.colors.cardBorder })),
                Ue = function(e) {
                    var t = e.bidder,
                        n = e.isMobile,
                        c = t.farmName,
                        r = t.tokenName,
                        i = t.account,
                        a = t.projectSite;
                    return Object(de.jsx)("a", { href: a, target: "_blank", rel: "noopener noreferrer", children: Object(de.jsxs)(ze, { children: [Object(de.jsxs)(o.R, { flexDirection: "column", flex: "3", children: [Object(de.jsx)(o.Qb, { children: c }), Object(de.jsx)(o.Qb, { fontSize: "12px", color: "textSubtle", children: r })] }), Object(de.jsx)(o.R, { justifyContent: ["center", null, "flex-start"], alignItems: "center", flex: "6", children: Object(de.jsx)(o.Qb, { mr: "8px", children: n ? Object(Le.a)(i) : i }) }), Object(de.jsx)(o.sb, { color: "primary" })] }) })
                },
                qe = function(e) {
                    var t = e.onDismiss,
                        n = Object(r.useState)(""),
                        c = Object(j.a)(n, 2),
                        i = c[0],
                        a = c[1],
                        l = Object(s.b)().t,
                        d = Object(b.a)().theme,
                        u = Object(o.jc)().isMobile,
                        x = Ie(),
                        p = x ? x.filter((function(e) {
                            var t = e.farmName,
                                n = e.tokenName,
                                c = e.account;
                            return t.toLowerCase().includes(i.toLowerCase()) || n.toLowerCase().includes(i.toLowerCase()) || c.toLowerCase().includes(i.toLowerCase())
                        })) : [],
                        h = x ? p.map((function(e) { return Object(de.jsx)(Ue, { bidder: e, isMobile: u }, e.account) })) : Object(de.jsx)(o.R, { justifyContent: "center", alignItems: "center", py: "24px", children: Object(de.jsx)(o.Fb, {}) });
                    return Object(de.jsxs)(Me, { p: "0", title: l("All Whitelisted Project Wallets"), onDismiss: t, headerBackground: d.colors.gradients.cardHeader, children: [Object(de.jsx)(We, { py: "16px", px: "24px", children: Object(de.jsx)(o.Y, { placeholder: l("Search address or token"), value: i, onChange: function(e) { a(e.target.value) } }) }), Object(de.jsx)(o.m, { pb: "24px", overflow: "scroll", maxHeight: "245px", children: h })] })
                },
                He = function() {
                    var e = Ie(),
                        t = Object(o.kc)(Object(de.jsx)(qe, {})),
                        n = Object(j.a)(t, 1)[0];
                    return e ? Object(de.jsx)(o.p, { p: "0", variant: "text", scale: "sm", onClick: n, children: e.length }) : Object(de.jsx)(o.Db, { height: "24px", width: "46px" })
                },
                Ye = Object(i.e)(o.m)(X || (X = Object(c.a)(["\n  background-color: ", ";\n"])), (function(e) { return e.theme.colors.dropdown })),
                _e = function(e) {
                    var t = e.auction,
                        n = Object(r.useState)(!1),
                        c = Object(j.a)(n, 2),
                        i = c[0],
                        a = c[1],
                        l = Object(s.b)().t,
                        d = t.topLeaderboard,
                        b = t.status,
                        u = b === ne.a.Pending || b === ne.a.Open;
                    return Object(de.jsxs)(o.v, { p: "0", children: [i && Object(de.jsx)(Ye, { children: Object(de.jsxs)(o.R, { p: "16px", flexDirection: "column", children: [u && Object(de.jsxs)(o.R, { justifyContent: "space-between", width: "100%", pt: "8px", px: "8px", children: [Object(de.jsx)(o.Qb, { color: "textSubtle", children: l("Farms available") }), Object(de.jsxs)(o.Qb, { children: [d, " (", l("top %num% bidders", { num: d }), ")"] })] }), Object(de.jsxs)(o.R, { justifyContent: "space-between", width: "100%", pt: "8px", px: "8px", children: [Object(de.jsx)(o.Qb, { color: "textSubtle", children: l("Multiplier per farm") }), Object(de.jsxs)(o.Qb, { children: ["1x ", l("each")] })] }), Object(de.jsxs)(o.R, { justifyContent: "space-between", width: "100%", pt: "8px", px: "8px", children: [Object(de.jsx)(o.Qb, { color: "textSubtle", children: l("Total whitelisted bidders") }), Object(de.jsx)(He, {})] })] }) }), Object(de.jsx)(o.R, { p: "8px", alignItems: "center", justifyContent: "center", children: Object(de.jsx)(o.P, { expanded: i, onClick: function() { return a((function(e) { return !e })) }, children: l(i ? "Hide" : "Details") }) })] })
                },
                Ze = Object(i.e)(o.t)(V || (V = Object(c.a)(["\n  flex: 1;\n"]))),
                Xe = function(e) {
                    var t = e.auction,
                        n = e.connectedBidder,
                        c = e.refreshBidders,
                        r = Object(s.b)().t,
                        i = Object(o.kc)(Object(de.jsx)(Re, { connectedBidder: n, refreshBidders: c, initialBidAmount: null === t || void 0 === t ? void 0 : t.initialBidAmount })),
                        a = Object(j.a)(i, 1)[0];
                    if (!t) return Object(de.jsxs)(Ze, { mb: ["24px", null, null, "0"], children: [Object(de.jsx)(o.w, { children: Object(de.jsx)(o.T, { children: r("Current Auction") }) }), Object(de.jsx)(o.u, { children: Object(de.jsx)(o.R, { justifyContent: "center", alignItems: "center", height: "100%", children: Object(de.jsx)(o.Fb, {}) }) })] });
                    var l = t.status === ne.a.Closed ? r("Next Auction") : r("Current Auction");
                    return Object(de.jsxs)(Ze, {
                        mb: ["24px", null, null, "0"],
                        children: [Object(de.jsx)(o.w, { children: Object(de.jsx)(o.T, { children: l }) }), Object(de.jsxs)(o.u, {
                            children: [Object(de.jsx)(Te, { auction: t }), Object(de.jsx)(o.R, {
                                mt: "24px",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                children: function() {
                                    var e = !n || n && !n.isWhitelisted,
                                        c = !e && n.bidderData;
                                    if (e || t.status !== ne.a.Open) return Object(de.jsx)(Ne, {});
                                    if (c) {
                                        var i = n.bidderData,
                                            s = i.amount,
                                            l = i.position;
                                        return Object(de.jsxs)(de.Fragment, { children: [Object(de.jsx)(o.Pb, { outline: !0, variant: "success", startIcon: Object(de.jsx)(o.B, {}), children: r("Connected as %projectName%", { projectName: n.bidderData.tokenName }) }), Object(de.jsxs)(o.R, { justifyContent: "space-between", width: "100%", pt: "24px", children: [Object(de.jsx)(o.Qb, { small: !0, color: "textSubtle", children: r("Your existing bid") }), Object(de.jsxs)(o.Qb, { small: !0, children: [Object(he.e)(s).toLocaleString(), " Cyber Cows"] })] }), Object(de.jsxs)(o.R, { justifyContent: "space-between", width: "100%", pt: "8px", children: [Object(de.jsx)(o.Qb, { small: !0, color: "textSubtle", children: r("Your position") }), Object(de.jsx)(o.Qb, { small: !0, children: l ? "#".concat(l) : "-" })] }), Object(de.jsx)(o.p, { my: "24px", width: "100%", onClick: a, children: r("Place bid") }), Object(de.jsx)(o.Qb, { color: "textSubtle", small: !0, children: r("If your bid is unsuccessful, you\u2019ll be able to reclaim your Cyber Cows after the auction.") })] })
                                    }
                                    return Object(de.jsxs)(de.Fragment, { children: [Object(de.jsx)(o.Db, { width: "200px", height: "28px" }), Object(de.jsxs)(o.R, { justifyContent: "space-between", width: "100%", pt: "24px", px: "8px", children: [Object(de.jsx)(o.Db, { width: "120px", height: "24px" }), Object(de.jsx)(o.Db, { width: "86px", height: "24px" })] }), Object(de.jsxs)(o.R, { justifyContent: "space-between", width: "100%", pt: "8px", px: "8px", children: [Object(de.jsx)(o.Db, { width: "96px", height: "24px" }), Object(de.jsx)(o.Db, { width: "42px", height: "24px" })] })] })
                                }()
                            })]
                        }), Object(de.jsx)(_e, { auction: t })]
                    })
                },
                Ve = n(832),
                Ge = n(18),
                Je = function(e) {
                    var t = Object(r.useState)({}),
                        n = Object(j.a)(t, 2),
                        c = n[0],
                        i = n[1],
                        o = Object(we.i)();
                    return Object(r.useEffect)((function() {
                        var t = function() {
                            var t = Object(h.a)(p.a.mark((function t() {
                                var n, c, r, a, s, l;
                                return p.a.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, t.next = 3, o.auctions(e);
                                        case 3:
                                            return n = t.sent, t.next = 6, se(e, n);
                                        case 6:
                                            return c = t.sent, t.next = 9, o.viewBidsPerAuction(e, 0, B.a);
                                        case 9:
                                            r = t.sent, a = Object(j.a)(r, 1), s = a[0], l = ie(s, c), i((function(t) { return Object(O.a)(Object(O.a)({}, t), {}, Object(Ge.a)({}, e, { auction: c, bidders: l })) })), t.next = 19;
                                            break;
                                        case 16:
                                            t.prev = 16, t.t0 = t.catch(0), console.error("Failed to fetch auction history", t.t0);
                                        case 19:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, null, [
                                    [0, 16]
                                ])
                            })));
                            return function() { return t.apply(this, arguments) }
                        }();
                        !c[e] && e > 0 && t()
                    }), [o, c, e]), c
                },
                Ke = n(37),
                $e = i.e.div(G || (G = Object(c.a)(["\n  display: grid;\n  grid-template-columns: 1fr 5fr 3fr 1fr;\n  ", " {\n    grid-template-columns: 3fr 5fr 5fr 1fr;\n  }\n"])), (function(e) { return e.theme.mediaQueries.md })),
                et = Object(i.e)(o.R)(J || (J = Object(c.a)(["\n  height: 65px;\n  align-items: center;\n  border-bottom: 1px solid ", ";\n\n  ", "\n"])), (function(e) { return e.theme.colors.cardBorder }), (function(e) { var t = e.theme; return e.isTopPosition && "background-color: ".concat(t.colors.warning, "2D;") })),
                tt = function(e) {
                    var t = e.bidder,
                        n = e.cakePriceBusd,
                        c = e.isMobile,
                        r = Object(s.b)().t,
                        i = t.isTopPosition,
                        a = t.position,
                        l = t.samePositionAsAbove,
                        d = t.farmName,
                        b = t.tokenName,
                        u = t.amount,
                        j = t.projectSite,
                        x = t.lpAddress,
                        p = t.account;
                    return Object(de.jsxs)(de.Fragment, { children: [Object(de.jsx)(et, { isTopPosition: i, pl: ["12px", "24px"], children: Object(de.jsx)(o.R, { children: Object(de.jsxs)(o.Qb, { bold: i, color: l ? "textDisabled" : "text", textTransform: "uppercase", children: ["#", a] }) }) }), Object(de.jsx)(et, { isTopPosition: i, children: Object(de.jsxs)(o.R, { flexDirection: "column", pl: ["8px"], children: [Object(de.jsxs)(o.R, { children: [Object(de.jsx)(o.Qb, { bold: i, mr: "4px", children: d }), !c && Object(de.jsx)(o.Qb, { children: "(1x)" })] }), Object(de.jsx)(o.Qb, { fontSize: "12px", color: "textSubtle", children: b })] }) }), Object(de.jsx)(et, { isTopPosition: i, children: Object(de.jsxs)(o.R, { flexDirection: "column", width: "100%", justifyContent: "flex-end", pr: [null, null, "24px"], children: [Object(de.jsx)(o.Qb, { bold: !0, textTransform: "uppercase", width: "100%", textAlign: "right", children: Object(he.e)(u).toLocaleString() }), n.gt(0) ? Object(de.jsxs)(o.Qb, { fontSize: "12px", color: "textSubtle", textAlign: "right", children: ["~$", Object(he.e)(u.times(n)).toLocaleString("en", { maximumFractionDigits: 0 })] }) : Object(de.jsx)(o.R, { justifyContent: "flex-end", children: Object(de.jsx)(o.Db, { width: "48px" }) })] }) }), Object(de.jsx)(et, { isTopPosition: i, children: Object(de.jsxs)(o.Kb, { component: Object(de.jsx)(o.M, { height: "16px", width: "16px" }), children: [j && Object(de.jsx)(o.Lb, { as: o.ab, href: j, bold: !1, color: "text", children: r("Project Site") }), x && Object(de.jsx)(o.Lb, { as: o.ab, href: "/info/pool/".concat(x), bold: !1, color: "text", children: r("LP Info") }), p && Object(de.jsx)(o.Lb, { as: o.ab, href: Object(Ke.e)(p, "address"), bold: !1, color: "text", children: r("Bidder Address") })] }) })] })
                },
                nt = function(e) {
                    var t = e.bidders,
                        n = e.noBidsText,
                        c = Object(r.useState)(10),
                        i = Object(j.a)(c, 2),
                        a = i[0],
                        l = i[1],
                        d = Object(Ae.g)(),
                        b = Object(s.b)().t,
                        u = Object(o.jc)().isMobile,
                        x = Object(o.kc)(Object(de.jsx)(qe, {})),
                        p = Object(j.a)(x, 1)[0],
                        h = t.length;
                    return 0 === h ? Object(de.jsxs)(o.R, { justifyContent: "center", alignItems: "center", flexDirection: "column", py: "24px", children: [Object(de.jsx)(o.Qb, { mb: "8px", children: n }), Object(de.jsx)(o.o, { height: "64px", width: "64px" })] }) : Object(de.jsxs)(o.m, { children: [Object(de.jsxs)($e, { children: [Object(de.jsx)(o.Qb, { color: "secondary", bold: !0, fontSize: "12px", textTransform: "uppercase", pl: ["12px", "24px"], py: "16px", children: b("Position") }), Object(de.jsx)(o.Qb, { color: "secondary", bold: !0, fontSize: "12px", textTransform: "uppercase", pl: ["8px"], py: "16px", children: b("Farm") }), Object(de.jsx)(o.Qb, { color: "secondary", bold: !0, fontSize: "12px", textTransform: "uppercase", textAlign: "right", pr: [null, null, "24px"], py: "16px", children: b("Cyber Cows bid") }), Object(de.jsx)(o.m, {}), t.slice(0, a).map((function(e) { return Object(de.jsx)(tt, { bidder: e, cakePriceBusd: d, isMobile: u }, e.account) }))] }), Object(de.jsxs)(o.R, { mt: "16px", px: "24px", flexDirection: "column", justifyContent: "center", alignItems: "center", children: [a <= 10 && h > 10 && Object(de.jsxs)(o.Qb, { color: "textSubtle", textAlign: "center", children: [b("Showing top 10 bids only."), " ", Object(de.jsx)(o.p, { px: "0", variant: "text", onClick: p, children: b("See all whitelisted bidders") })] }), a < h && Object(de.jsx)(o.p, { mt: "16px", variant: "text", onClick: function() { return l((function(e) { return h - e > 10 ? e + 10 : h })) }, children: b("Show More") })] })] })
                },
                ct = Object(i.e)(o.W)(K || (K = Object(c.a)(["\n  width: 32px;\n\n  :disabled {\n    background: none;\n\n    svg {\n      fill: ", ";\n\n      path {\n        fill: ", ";\n      }\n    }\n  }\n"])), (function(e) { return e.theme.colors.textDisabled }), (function(e) { return e.theme.colors.textDisabled })),
                rt = function(e) {
                    var t = e.mostRecentClosedAuctionId,
                        n = Object(r.useState)(t ? t.toString() : "0"),
                        c = Object(j.a)(n, 2),
                        i = c[0],
                        a = c[1],
                        l = parseInt(i, 10),
                        d = Object(s.b)().t,
                        b = Object(o.jc)(),
                        u = b.isXs,
                        x = b.isSm,
                        p = b.isMd,
                        h = b.isLg,
                        O = b.isXl,
                        f = b.isXxl,
                        m = h || O || f,
                        v = u || x || p,
                        g = Je(l),
                        w = Object.values(g).find((function(e) { return e.auction.id === l })),
                        C = w ? Object(de.jsx)(nt, { bidders: w.bidders, noBidsText: "No bids were placed in this auction" }) : Object(de.jsx)(o.R, { justifyContent: "center", alignItems: "center", p: "24px", height: "250px", children: Object(de.jsx)(o.Fb, {}) });
                    Number.isNaN(l) && (C = Object(de.jsxs)(o.R, { flexDirection: "column", justifyContent: "center", alignItems: "center", p: "24px", height: "250px", children: [Object(de.jsx)(o.Qb, { mb: "8px", children: d("Please specify auction ID") }), Object(de.jsx)(o.o, { height: "64px", width: "64px" })] }));
                    var y = w ? Object(Ee.default)(w.auction.endDate, "MMM. dd yyyy, hh:mm aa") : null,
                        k = function(e) { a(e ? e.toString() : "1") };
                    return Object(de.jsxs)(o.m, {
                        py: "24px",
                        children: [Object(de.jsxs)(o.R, {
                            px: ["12px", "24px"],
                            justifyContent: "space-between",
                            alignItems: "center",
                            children: [Object(de.jsxs)(o.R, {
                                flex: "3",
                                alignItems: "center",
                                children: [Object(de.jsx)(o.Qb, { bold: !0, fontSize: m ? "20px" : "16px", mr: ["4px", "8px"], children: d("Auction #") }), Object(de.jsx)(o.m, {
                                    width: "62px",
                                    mr: ["4px", "16px"],
                                    children: Object(de.jsx)(o.Y, {
                                        disabled: !t,
                                        type: "input",
                                        value: i,
                                        onChange: function(e) {
                                            var n = e.target.value;
                                            if (n) {
                                                var c = n;
                                                parseInt(n, 10) <= 0 && (c = ""), parseInt(n, 10) >= t && (c = t.toString()), a(c)
                                            } else a("")
                                        }
                                    })
                                }), Object(de.jsx)(ct, { disabled: !l || l <= 1, variant: "text", scale: "sm", mr: ["8px", "12px"], onClick: function() { return k(l - 1) }, children: Object(de.jsx)(o.c, {}) }), Object(de.jsx)(ct, { disabled: l >= t, variant: "text", scale: "sm", mr: ["8px", "12px"], onClick: function() { return k(l + 1) }, children: Object(de.jsx)(o.f, {}) }), Object(de.jsx)(ct, { disabled: l >= t, variant: "text", scale: "sm", onClick: function() { return k(t) }, children: Object(de.jsx)(o.g, {}) })]
                            }), m && Object(de.jsx)(o.R, { flex: "2", justifyContent: "flex-end", children: y && Object(de.jsx)(o.Qb, { children: d("Ended %date%", { date: y }) }) })]
                        }), v && Object(de.jsx)(o.R, { px: ["12px", "24px"], pt: "8px", children: y && Object(de.jsx)(o.Qb, { children: d("Ended %date%", { date: y }) }) }), t ? C : Object(de.jsxs)(o.R, { flexDirection: "column", justifyContent: "center", alignItems: "center", p: "24px", height: "250px", children: [Object(de.jsx)(o.Qb, { mb: "8px", children: d("No history yet") }), Object(de.jsx)(o.o, { height: "64px", width: "64px" })] })]
                    })
                },
                it = n(887),
                ot = n(107),
                at = function(e) {
                    var t = e.auction,
                        n = Object(r.useState)(0),
                        c = Object(j.a)(n, 2),
                        i = c[0],
                        a = c[1],
                        s = Object(ot.a)().slowRefresh;
                    return Object(r.useEffect)((function() {
                        if (t.status === ne.a.ToBeAnnounced || t.status === ne.a.Pending) a(0);
                        else {
                            var e = new Date,
                                n = Object(it.a)(t.endDate, t.startDate),
                                c = 100 * Object(it.a)(e, t.startDate) / n;
                            a(c < 100 ? c : 100)
                        }
                    }), [s, t]), Object(de.jsx)(o.zb, { variant: "flat", primaryStep: i })
                },
                st = i.e.div($ || ($ = Object(c.a)(["\n  display: flex;\n  justify-content: center;\n  background-color: ", ";\n  color: white;\n  position: absolute;\n  right: 0;\n  top: 0;\n  text-align: center;\n  width: 94px;\n  height: 94px;\n  z-index: 1;\n  clip-path: polygon(0 0, 40% 0, 100% 60%, 100% 100%);\n\n  & > div {\n    padding-top: 23%;\n    overflow: hidden;\n    transform: rotate(45deg);\n  }\n"])), (function(e) {
                    var t = e.theme,
                        n = e.color;
                    return t.colors[n]
                })),
                lt = function(e) {
                    var t = e.auction,
                        n = e.noAuctionHistory,
                        c = Object(s.b)().t,
                        r = t.status;
                    if (n) return null;
                    var i = c("Finished"),
                        a = "textDisabled";
                    return r === ne.a.Open && (i = "".concat(c("Live"), "!"), a = "success"), r === ne.a.Pending && (i = "".concat(c("Get ready"), "!"), a = "warning"), Object(de.jsx)(st, { color: a, children: Object(de.jsx)(o.Qb, { color: "white", textTransform: "uppercase", children: i }) })
                },
                dt = Object(i.e)(o.t)(ee || (ee = Object(c.a)(["\n  width: 100%;\n  flex: 2;\n"])));
            ! function(e) { e[e.Latest = 0] = "Latest", e[e.Archive = 1] = "Archive" }(te || (te = {}));
            var bt, ut, jt, xt, pt, ht, Ot, ft, mt = function(e, t) { return t === ne.a.Closed ? e : 0 === e ? null : e - 1 },
                vt = function(e) {
                    var t = e.auction,
                        n = e.bidders,
                        c = Object(s.b)().t,
                        i = Object(r.useState)(te.Latest),
                        a = Object(j.a)(i, 2),
                        l = a[0],
                        d = a[1];
                    if (!t || !n) return Object(de.jsxs)(dt, { children: [Object(de.jsxs)(Ve.b, { children: [Object(de.jsx)(Ve.a, { isActive: l === te.Latest, onClick: function() { return d(te.Latest) }, children: c("Latest") }), Object(de.jsx)(Ve.a, { isActive: l === te.Archive, onClick: function() { return d(te.Archive) }, children: c("Archive") })] }), Object(de.jsx)(o.R, { justifyContent: "center", alignItems: "center", flexDirection: "column", height: "320px", children: Object(de.jsx)(o.Fb, {}) })] });
                    var b = t.id,
                        u = t.status;
                    return Object(de.jsxs)(dt, { children: [Object(de.jsxs)(Ve.b, { children: [Object(de.jsx)(Ve.a, { isActive: l === te.Latest, onClick: function() { return d(te.Latest) }, children: c("Latest") }), Object(de.jsx)(Ve.a, { isActive: l === te.Archive, onClick: function() { return d(te.Archive) }, children: c("Archive") })] }), l === te.Latest ? Object(de.jsxs)(o.m, { position: "relative", children: [Object(de.jsx)(o.Qb, { bold: !0, fontSize: "20px", py: "24px", px: ["12px", "24px"], children: c("Auction #%auctionId%", { auctionId: b }) }), Object(de.jsx)(lt, { auction: t, noAuctionHistory: null === mt(b, u) }), Object(de.jsx)(at, { auction: t }), Object(de.jsx)(nt, { bidders: n, noBidsText: "No bids yet" })] }) : Object(de.jsx)(rt, { mostRecentClosedAuctionId: mt(b, u) })] })
                },
                gt = n(803),
                wt = n.n(gt),
                Ct = n(268),
                yt = n(731),
                kt = n(381),
                At = Object(i.e)(o.R)(bt || (bt = Object(c.a)(["\n  align-items: flex-end;\n  margin: 0 16px 0 16px;\n"]))),
                St = function(e) {
                    var t = e.auction,
                        n = Object(s.b)().t;
                    if (!t) return Object(de.jsx)(o.R, { justifyContent: "center", alignItems: "center", mb: "48px", children: Object(de.jsx)(o.Db, { width: "256px", height: "40px" }) });
                    if (t.status === ne.a.ToBeAnnounced || t.status === ne.a.Closed) return null;
                    if (t.status === ne.a.Finished) return Object(de.jsxs)(o.R, { justifyContent: "center", alignItems: "center", mb: "48px", children: [Object(de.jsxs)(o.Qb, { bold: !0, children: [n("Closing"), "..."] }), Object(de.jsx)(o.wb, { height: "40px", width: "40px" })] });
                    var c = t.startDate,
                        r = t.endDate,
                        i = Object(yt.default)(c, new Date) ? c : r,
                        a = n(i === r ? "Ending in" : "Next auction"),
                        l = Object(it.a)(i, new Date),
                        d = Object(kt.a)(l),
                        b = d.days,
                        u = d.hours,
                        j = d.minutes;
                    return Object(de.jsxs)(o.R, { justifyContent: "center", alignItems: "center", mb: "48px", children: [Object(de.jsxs)(o.Qb, { bold: !0, children: [a, ": "] }), Object(de.jsxs)(At, { children: [0 !== b && Object(de.jsxs)(de.Fragment, { children: [Object(de.jsx)(o.Qb, { verticalAlign: "baseline", lineHeight: "28px", fontSize: "24px", bold: !0, color: "secondary", mr: "4px", children: b }), Object(de.jsx)(o.Qb, { verticalAlign: "baseline", bold: !0, mr: "4px", children: n("d") })] }), Object(de.jsx)(o.Qb, { verticalAlign: "baseline", lineHeight: "28px", fontSize: "24px", bold: !0, color: "secondary", mr: "4px", children: u }), Object(de.jsx)(o.Qb, { verticalAlign: "baseline", bold: !0, mr: "4px", children: n("h") }), Object(de.jsx)(o.Qb, { verticalAlign: "baseline", lineHeight: "28px", fontSize: "24px", bold: !0, color: "secondary", mr: "4px", children: j }), Object(de.jsx)(o.Qb, { verticalAlign: "baseline", bold: !0, children: n("m") })] }), Object(de.jsx)(o.wb, { height: "40px", width: "40px" })] })
                },
                Dt = { auctions: [], currentCursor: 0, nextCursor: 0, nextAuctionToCheck: 0, auctionToReclaim: null, loading: !1 },
                Bt = function(e, t) {
                    switch (t.type) {
                        case "setAuctions":
                            return { auctions: t.payload.auctions, currentCursor: e.currentCursor, nextCursor: t.payload.nextCursor, nextAuctionToCheck: 0, auctionToReclaim: null, loading: !1 };
                        case "setAuctionToReclaim":
                            return Object(O.a)(Object(O.a)({}, e), {}, { auctionToReclaim: t.payload.auctionToReclaim, loading: !1 });
                        case "checkNextAuction":
                            var n = e.nextAuctionToCheck + 1;
                            return n === e.auctions.length ? Object(O.a)(Object(O.a)({}, e), {}, { auctions: [], currentCursor: e.nextCursor, auctionToReclaim: null, loading: !1 }) : Object(O.a)(Object(O.a)({}, e), {}, { nextAuctionToCheck: n, auctionToReclaim: null, loading: !1 });
                        case "setLoading":
                            return Object(O.a)(Object(O.a)({}, e), {}, { loading: t.payload.loading });
                        case "reset":
                            return Dt;
                        default:
                            return e
                    }
                },
                Qt = function() {
                    var e = Object(a.c)().account,
                        t = Object(r.useReducer)(Bt, Dt),
                        n = Object(j.a)(t, 2),
                        c = n[0],
                        i = n[1],
                        o = Object(we.i)();
                    return Object(r.useEffect)((function() { i({ type: "reset" }) }), [e]), Object(r.useEffect)((function() {
                        var t = function() {
                            var t = Object(h.a)(p.a.mark((function t() {
                                var n, r, a, s;
                                return p.a.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, i({ type: "setLoading", payload: { loading: !0 } }), t.next = 4, o.viewBidderAuctions(e, c.currentCursor, B.m);
                                        case 4:
                                            n = t.sent, r = le(n), a = r.auctions, s = r.nextCursor, a.length > 0 && i({ type: "setAuctions", payload: { auctions: a, nextCursor: s } }), t.next = 13;
                                            break;
                                        case 9:
                                            t.prev = 9, t.t0 = t.catch(0), console.error("Failed to fetch auctions for bidder", t.t0), i({ type: "setLoading", payload: { loading: !1 } });
                                        case 13:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, null, [
                                    [0, 9]
                                ])
                            })));
                            return function() { return t.apply(this, arguments) }
                        }();
                        !c.loading && e && c.currentCursor === c.nextCursor && t()
                    }), [e, c, o]), Object(r.useEffect)((function() {
                        var t = function() {
                                var t = Object(h.a)(p.a.mark((function t(n) {
                                    var c, r, a, s, l, d, b;
                                    return p.a.wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return i({ type: "setLoading", payload: { loading: !0 } }), t.prev = 1, t.next = 4, o.claimable(n.id, e);
                                            case 4:
                                                if (!t.sent) { t.next = 18; break }
                                                return t.next = 8, o.viewBidsPerAuction(n.id, 0, 500);
                                            case 8:
                                                c = t.sent, r = Object(j.a)(c, 1), a = r[0], s = ie(a), l = s.find((function(t) { return t.account === e })), d = null === l || void 0 === l ? void 0 : l.position, b = { id: n.id, amount: n.amount, position: d }, i({ type: "setAuctionToReclaim", payload: { auctionToReclaim: b } }), t.next = 19;
                                                break;
                                            case 18:
                                                i({ type: "checkNextAuction" });
                                            case 19:
                                                t.next = 25;
                                                break;
                                            case 21:
                                                t.prev = 21, t.t0 = t.catch(1), i({ type: "setLoading", payload: { loading: !1 } }), console.error("Failed to check for unclaim bids", t.t0);
                                            case 25:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t, null, [
                                        [1, 21]
                                    ])
                                })));
                                return function(e) { return t.apply(this, arguments) }
                            }(),
                            n = c.auctions,
                            r = c.nextAuctionToCheck,
                            a = c.loading;
                        n.length > 0 && e && !a && t(n[r])
                    }), [e, c, o]), [c.auctionToReclaim, function() { i({ type: "checkNextAuction" }) }]
                },
                Ft = Object(i.e)(o.t)(ut || (ut = Object(c.a)(["\n  margin-top: 16px;\n  flex: 1;\n"]))),
                Rt = function() {
                    var e = Object(s.b)().t,
                        t = Object(a.c)().account,
                        n = Object(Se.a)().callWithGasPrice,
                        c = Qt(),
                        r = Object(j.a)(c, 2),
                        i = r[0],
                        l = r[1],
                        d = Object(we.c)(),
                        b = Object(we.i)(),
                        u = Object(Ce.a)().toastSuccess,
                        x = Object(ge.a)({
                            onRequiresApproval: function() {
                                var e = Object(h.a)(p.a.mark((function e() {
                                    var n, c;
                                    return p.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.prev = 0, e.next = 3, d.allowance(t, b.address);
                                            case 3:
                                                return n = e.sent, c = Object(ce.d)(n), e.abrupt("return", c.gt(0));
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
                            onApprove: function() { return n(d, "approve", [b.address, me.a.constants.MaxUint256]) },
                            onApproveSuccess: function() {
                                var t = Object(h.a)(p.a.mark((function t(n) {
                                    var c;
                                    return p.a.wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                c = n.receipt, u(e("Contract approved - you can now reclaim your bid!"), Object(de.jsx)(De.b, { txHash: c.transactionHash }));
                                            case 2:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t)
                                })));
                                return function(e) { return t.apply(this, arguments) }
                            }(),
                            onConfirm: function() { return n(b, "claimAuction", [i.id]) },
                            onSuccess: function() {
                                var t = Object(h.a)(p.a.mark((function t(n) {
                                    var c;
                                    return p.a.wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                c = n.receipt, l(), u(e("Bid reclaimed!"), Object(de.jsx)(De.b, { txHash: c.transactionHash }));
                                            case 3:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t)
                                })));
                                return function(e) { return t.apply(this, arguments) }
                            }()
                        }),
                        O = x.isApproving,
                        f = x.isApproved,
                        m = x.isConfirming,
                        v = x.handleApprove,
                        g = x.handleConfirm;
                    if (!i) return null;
                    var w = i.position,
                        C = i.amount;
                    return Object(de.jsxs)(Ft, { mb: ["24px", null, null, "0"], children: [Object(de.jsx)(o.w, { children: Object(de.jsx)(o.T, { children: e("Reclaim Bid") }) }), Object(de.jsxs)(o.u, { children: [Object(de.jsx)(o.Qb, { mb: "16px", children: e("Your bid in Auction #%auctionId% was unsuccessful.", { auctionId: i.id }) }), Object(de.jsx)(o.Qb, { bold: !0, mb: "16px", children: e("Reclaim your Cyber Cows now.") }), Object(de.jsxs)(o.R, { justifyContent: "space-between", mb: "8px", children: [Object(de.jsx)(o.Qb, { color: "textSubtle", children: e("Your total bid") }), Object(de.jsx)(o.Qb, { children: e("%num% Cyber Cows", { num: Object(he.e)(C).toLocaleString() }) })] }), Object(de.jsxs)(o.R, { justifyContent: "space-between", mb: "24px", children: [Object(de.jsx)(o.Qb, { color: "textSubtle", children: e("Your position") }), Object(de.jsxs)(o.Qb, { children: ["#", w] })] }), t ? Object(de.jsx)(ke.b, { isApproveDisabled: f, isApproving: O, isConfirmDisabled: !1, isConfirming: m, onApprove: v, onConfirm: g, buttonArrangement: ke.a.SEQUENTIAL, confirmLabel: e("Reclaim") }) : Object(de.jsx)(ye.a, {})] })] })
                },
                Et = function(e) {
                    var t = e.connectedBidder,
                        n = e.auction,
                        c = Object(s.b)().t;
                    return t && t.isWhitelisted || !n ? null : Object(de.jsx)(o.R, { mb: "24px", justifyContent: "center", children: Object(de.jsx)(o.fb, { variant: "warning", icon: Object(de.jsx)(o.U, { width: "24px" }), children: Object(de.jsxs)(o.m, { maxWidth: "800px", children: [Object(de.jsx)(o.Qb, { bold: !0, children: c("Notice") }), Object(de.jsx)(o.Qb, { children: c("This page is a functional page, for projects to bid for farms.") }), Object(de.jsx)(o.Qb, { children: c("If you\u2019re not a whitelisted project, you won\u2019t be able to participate, but you can still view the auction bids in real time!") }), Object(de.jsx)(o.Qb, { children: c("Connect a whitelisted project wallet to participate in Auctions.") })] }) }) })
                },
                Pt = function(e, t) {
                    var n = Object(r.useState)(null),
                        c = Object(j.a)(n, 2),
                        i = c[0],
                        o = c[1],
                        s = Object(a.c)().account,
                        l = Object(we.i)();
                    return Object(r.useEffect)((function() {
                        var n = function() {
                                var e = Object(h.a)(p.a.mark((function e(t) {
                                    var n, c, r, i, a, d, b, u;
                                    return p.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2, l.auctions(t);
                                            case 2:
                                                return n = e.sent, e.next = 5, se(t, n);
                                            case 5:
                                                return c = e.sent, e.next = 8, l.viewBidsPerAuction(t, 0, 500);
                                            case 8:
                                                r = e.sent, i = Object(j.a)(r, 1), a = i[0], d = ie(a), b = c.leaderboardThreshold, d.filter((function(e) { return b.lte(e.amount) })).map((function(e) { return e.account })).includes(s) && (u = d.find((function(e) { return e.account === s })), o({ auction: c, bidderData: u }));
                                            case 15:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })));
                                return function(t) { return e.apply(this, arguments) }
                            }(),
                            c = t.filter((function(t) { return e.leaderboardThreshold.lte(t.amount) })).map((function(e) { return e.account })),
                            r = e.id - 1;
                        if (e.status === ne.a.Closed && c.includes(s)) {
                            var i = t.find((function(e) { return e.account === s }));
                            o({ auction: e, bidderData: i })
                        } else r > 0 && n(r)
                    }), [e, t, s, l]), i
                },
                Tt = Object(i.e)(o.t)(jt || (jt = Object(c.a)(["\n  margin-top: 16px;\n  flex: 1;\n"]))),
                Nt = function(e) {
                    var t = e.currentAuction,
                        n = e.bidders,
                        c = Object(s.b)().t,
                        r = Pt(t, n);
                    if (!r) return null;
                    var i = r.auction,
                        a = r.bidderData,
                        l = a.amount,
                        d = a.position;
                    return Object(de.jsxs)(Tt, { mb: ["24px", null, null, "0"], children: [Object(de.jsx)(o.w, { children: Object(de.jsx)(o.T, { children: c("Congratulations!") }) }), Object(de.jsxs)(o.u, { children: [Object(de.jsx)(o.Qb, { mb: "16px", children: c("Your bid in Auction #%auctionId% was successful.", { auctionId: i.id }) }), Object(de.jsx)(o.Qb, { children: c("Your Farm will be launched as follows:") }), Object(de.jsxs)(o.R, { flexDirection: "column", mb: "24px", children: [Object(de.jsxs)(o.R, { justifyContent: "space-between", width: "100%", pt: "8px", children: [Object(de.jsx)(o.Qb, { color: "textSubtle", children: c("Multiplier per farm") }), Object(de.jsxs)(o.Qb, { children: ["1x ", c("each")] })] }), Object(de.jsxs)(o.R, { justifyContent: "space-between", width: "100%", pt: "8px", children: [Object(de.jsx)(o.Qb, { color: "textSubtle", children: c("Total whitelisted bidders") }), Object(de.jsx)(He, {})] })] }), Object(de.jsxs)(o.R, { justifyContent: "space-between", mb: "8px", children: [Object(de.jsx)(o.Qb, { color: "textSubtle", children: c("Your total bid") }), Object(de.jsxs)(o.Qb, { children: [Object(he.e)(l).toLocaleString(), " Cyber Cows"] })] }), Object(de.jsxs)(o.R, { justifyContent: "space-between", children: [Object(de.jsx)(o.Qb, { color: "textSubtle", children: c("Your position") }), Object(de.jsxs)(o.Qb, { children: ["#", d] })] })] })] })
                },
                Lt = n(43),
                It = Object(i.e)(o.Qb)(xt || (xt = Object(c.a)(["\n  font-size: 52px;\n\n  ", " {\n    font-size: 64px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm })),
                Mt = function() {
                    var e = Object(r.useState)(0),
                        t = Object(j.a)(e, 2),
                        n = t[0],
                        c = t[1],
                        i = Object(s.b)().t,
                        a = Object(we.i)(),
                        l = Object(Ae.g)().times(n);
                    return Object(r.useEffect)((function() {
                        0 === n && function() {
                            var e = Object(h.a)(p.a.mark((function e() {
                                var t, n;
                                return p.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, a.totalCollected();
                                        case 3:
                                            t = e.sent, n = Object(ce.d)(t), c(Object(he.e)(n)), e.next = 11;
                                            break;
                                        case 8:
                                            e.prev = 8, e.t0 = e.catch(0), console.error("Failed to fetch burned auction Cyber Cows", e.t0);
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
                    }), [n, a]), Object(de.jsx)(o.R, { flexDirection: ["column-reverse", null, "row"], children: Object(de.jsxs)(o.R, { flexDirection: "column", flex: "2", children: [0 !== n ? Object(de.jsx)(Lt.a, { fontSize: "64px", bold: !0, value: n, decimals: 0, unit: " Cyber Cows" }) : Object(de.jsx)(o.Db, { width: "256px", height: "64px" }), Object(de.jsx)(It, { textTransform: "uppercase", bold: !0, color: "secondary", children: i("Burned") }), Object(de.jsx)(o.Qb, { fontSize: "24px", bold: !0, children: i("through community auctions so far!") }), l.isNaN() || l.isZero() ? Object(de.jsx)(o.Db, { width: "128px" }) : Object(de.jsxs)(o.Qb, { color: "textSubtle", children: ["~$", l.toNumber().toLocaleString("en", { maximumFractionDigits: 0 })] })] }) })
                },
                Wt = Object(i.e)(l.a)(pt || (pt = Object(c.a)(["\n  max-height: max-content;\n  margin-bottom: -40px;\n  padding-bottom: 40px;\n  overflow: hidden;\n  ", " {\n    max-height: 600px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.md })),
                zt = Object(i.e)(o.R)(ht || (ht = Object(c.a)(["\n  flex-direction: column;\n  flex: 1;\n"]))),
                Ut = Object(i.e)(o.R)(Ot || (Ot = Object(c.a)(["\n  align-items: center;\n  justify-content: center;\n  flex: 0.5;\n  & img {\n    height: 50%;\n    width: 50%;\n    max-height: 330px;\n    margin-top: 24px;\n  }\n\n  ", " {\n    & img {\n      height: auto;\n      width: auto;\n    }\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm })),
                qt = Object(i.e)(o.R)(ft || (ft = Object(c.a)(["\n  width: 100%;\n  align-items: flex-start;\n\n  ", " {\n    gap: 24px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.md }));
            t.default = function() {
                var e = Object(s.b)().t,
                    t = Object(b.a)().theme,
                    n = function(e) {
                        var t = Object(r.useState)(null),
                            n = Object(j.a)(t, 2),
                            c = n[0],
                            i = n[1],
                            o = Object(r.useState)(null),
                            a = Object(j.a)(o, 2),
                            s = a[0],
                            l = a[1],
                            d = Object(r.useState)(null),
                            b = Object(j.a)(d, 2),
                            u = b[0],
                            x = b[1],
                            f = Object(Ct.a)(),
                            m = f.lastUpdated,
                            v = f.setLastUpdated,
                            g = Object(ot.a)().fastRefresh,
                            w = Object(we.i)();
                        return Object(r.useEffect)((function() {
                            ! function() {
                                var e = Object(h.a)(p.a.mark((function e() {
                                    var t, n, c;
                                    return p.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.prev = 0, e.next = 3, w.currentAuctionId();
                                            case 3:
                                                return t = e.sent, e.next = 6, w.auctions(t);
                                            case 6:
                                                return n = e.sent, e.next = 9, se(t.toNumber(), n);
                                            case 9:
                                                c = e.sent, i(c), e.next = 16;
                                                break;
                                            case 13:
                                                e.prev = 13, e.t0 = e.catch(0), console.error("Failed to fetch current auction", e.t0);
                                            case 16:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, null, [
                                        [0, 13]
                                    ])
                                })));
                                return function() { return e.apply(this, arguments) }
                            }()()
                        }), [w, g]), Object(r.useEffect)((function() {
                            c && function() {
                                var e = Object(h.a)(p.a.mark((function e() {
                                    var t, n, r, i;
                                    return p.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.prev = 0, e.next = 3, w.viewBidsPerAuction(c.id, 0, B.a);
                                            case 3:
                                                t = e.sent, n = Object(j.a)(t, 1), r = n[0], i = ie(r, c), l(i), e.next = 13;
                                                break;
                                            case 10:
                                                e.prev = 10, e.t0 = e.catch(0), console.error("Failed to fetch bidders", e.t0);
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
                        }), [c, w, m, g]), Object(r.useEffect)((function() {
                            var t = function() {
                                var t = Object(h.a)(p.a.mark((function t() {
                                    var n;
                                    return p.a.wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return t.prev = 0, t.next = 3, w.whitelisted(e);
                                            case 3:
                                                n = t.sent, x({ account: e, isWhitelisted: n }), t.next = 10;
                                                break;
                                            case 7:
                                                t.prev = 7, t.t0 = t.catch(0), console.error("Failed to check if account is whitelisted", t.t0);
                                            case 10:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t, null, [
                                        [0, 7]
                                    ])
                                })));
                                return function() { return t.apply(this, arguments) }
                            }();
                            !e || u && u.account === e || t(), e || x(null)
                        }), [e, u, w]), Object(r.useEffect)((function() {
                            if (u && u.isWhitelisted) {
                                var t = function() { if (s && s.length > 0) { var t = s.find((function(t) { return t.account === e })); if (t) return t } var n = T(e); return Object(O.a)({ position: null, samePositionAsAbove: !1, isTopPosition: !1, amount: ce.c }, n) }();
                                wt()(t, u.bidderData) || x({ account: e, isWhitelisted: !0, bidderData: t })
                            }
                        }), [e, u, s]), { currentAuction: c, bidders: s, connectedBidder: u, refreshBidders: v }
                    }(Object(a.c)().account),
                    c = n.currentAuction,
                    i = n.bidders,
                    l = n.connectedBidder,
                    u = n.refreshBidders,
                    x = "radial-gradient(50% 79.31% at 50% 50%, #FAF9FA 0%, #EAECF4 100%)",
                    f = "radial-gradient(103.12% 50% at 50% 50%, #152534 0%, #191326 100%)";
                return Object(de.jsxs)(de.Fragment, { children: [Object(de.jsxs)(Wt, { children: [Object(de.jsxs)(o.n, { children: [Object(de.jsx)(o.Z, { href: "/", color: "primary", style: { fontWeight: 400 }, children: e("Home") }), Object(de.jsx)(o.Z, { href: "/farms", color: "primary", style: { fontWeight: 400 }, children: e("Farms") }), Object(de.jsx)(o.Qb, { children: e("Community Farm Auction") })] }), Object(de.jsxs)(o.R, { flexDirection: ["column-reverse", null, "row"], children: [Object(de.jsxs)(zt, { children: [Object(de.jsx)(o.T, { as: "h1", scale: "xxl", my: "24px", children: e("Community Farm Auction") }), Object(de.jsx)(o.Qb, { color: "textSubtle", mb: "24px", children: e("Each week, qualifying projects can bid Cyber Cows for the right to host a 7-day Farm onBriseSwap.") }), Object(de.jsx)(o.Qb, { color: "textSubtle", children: e("This page is for projects to bid for farms.") }), Object(de.jsx)(o.Qb, { color: "textSubtle", mb: "24px", children: e("If you\u2019re not a whitelisted project, you won\u2019t be able to participate, but you can still view what\u2019s going on!") }), Object(de.jsx)(o.Z, { external: !0, href: re, children: Object(de.jsx)(o.p, { children: Object(de.jsx)(o.Qb, { color: "white", bold: !0, fontSize: "16px", mr: "4px", children: e("Apply for a Farm/Pool") }) }) })] }), Object(de.jsx)(Ut, { children: Object(de.jsx)("img", { src: "/images/decorations/auction-bunny.png", alt: e("auction bunny") }) })] })] }), Object(de.jsxs)(de.Fragment, { children: [Object(de.jsxs)(d.a, { innerProps: { style: { margin: "0", width: "100%" } }, background: t.colors.background, p: "24px 0", index: 2, concaveDivider: !0, dividerPosition: "top", children: [Object(de.jsx)(Et, { connectedBidder: l, auction: c }), Object(de.jsx)(St, { auction: c }), Object(de.jsxs)(qt, { flexDirection: ["column", null, null, "row"], children: [Object(de.jsxs)(o.R, { flex: "1", flexDirection: "column", width: "100%", minWidth: "288px", children: [Object(de.jsx)(Xe, { auction: c, connectedBidder: l, refreshBidders: u }), (null === l || void 0 === l ? void 0 : l.isWhitelisted) && i && c && Object(de.jsx)(Nt, { currentAuction: c, bidders: i }), (null === l || void 0 === l ? void 0 : l.isWhitelisted) && Object(de.jsx)(Rt, {})] }), Object(de.jsx)(vt, { auction: c, bidders: i })] })] }), Object(de.jsx)(d.a, { background: t.isDark ? f : x, index: 2, innerProps: { style: { width: "100%" } }, dividerPosition: "top", dividerFill: { light: "radial-gradient(ellipse at bottom, #f0f1f6, #EAECF4)", dark: "#191326" }, children: Object(de.jsx)(Mt, {}) }), Object(de.jsx)(d.a, { background: t.isDark ? "linear-gradient(180deg, #434575 0%, #66578D 100%)" : "linear-gradient(180deg, #CBD7EF 0%, #9A9FD0 100%)", clipFill: { light: "#CBD7EF", dark: "#434575" }, dividerFill: { light: x, dark: f }, concaveDivider: !0, index: 3, dividerPosition: "top", children: Object(de.jsx)(pe, {}) })] })] })
            }
        },
        787: function(e, t, n) {
            "use strict";
            var c = n(3),
                r = n.n(c),
                i = n(12),
                o = n(9),
                a = n(6),
                s = n(1),
                l = n(119),
                d = n(42),
                b = n(92),
                u = n(13),
                j = { approvalState: "idle", confirmState: "idle" },
                x = function(e, t) {
                    switch (t.type) {
                        case "requires_approval":
                            return Object(a.a)(Object(a.a)({}, e), {}, { approvalState: "success" });
                        case "approve_sending":
                            return Object(a.a)(Object(a.a)({}, e), {}, { approvalState: "loading" });
                        case "approve_receipt":
                            return Object(a.a)(Object(a.a)({}, e), {}, { approvalState: "success" });
                        case "approve_error":
                            return Object(a.a)(Object(a.a)({}, e), {}, { approvalState: "fail" });
                        case "confirm_sending":
                            return Object(a.a)(Object(a.a)({}, e), {}, { confirmState: "loading" });
                        case "confirm_receipt":
                            return Object(a.a)(Object(a.a)({}, e), {}, { confirmState: "success" });
                        case "confirm_error":
                            return Object(a.a)(Object(a.a)({}, e), {}, { confirmState: "fail" });
                        default:
                            return e
                    }
                };
            t.a = function(e) {
                var t = e.onApprove,
                    n = e.onConfirm,
                    c = e.onRequiresApproval,
                    a = e.onSuccess,
                    p = void 0 === a ? l.noop : a,
                    h = e.onApproveSuccess,
                    O = void 0 === h ? l.noop : h,
                    f = Object(u.b)().t,
                    m = Object(d.c)().account,
                    v = Object(s.useReducer)(x, j),
                    g = Object(o.a)(v, 2),
                    w = g[0],
                    C = g[1],
                    y = Object(s.useRef)(c),
                    k = Object(b.a)().toastError;
                return Object(s.useEffect)((function() { m && y.current && y.current().then((function(e) { e && C({ type: "requires_approval" }) })) }), [m, y, C]), {
                    isApproving: "loading" === w.approvalState,
                    isApproved: "success" === w.approvalState,
                    isConfirming: "loading" === w.confirmState,
                    isConfirmed: "success" === w.confirmState,
                    handleApprove: function() {
                        var e = Object(i.a)(r.a.mark((function e() {
                            var n, c;
                            return r.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, t();
                                    case 3:
                                        return n = e.sent, C({ type: "approve_sending" }), e.next = 7, n.wait();
                                    case 7:
                                        (c = e.sent).status && (C({ type: "approve_receipt" }), O({ state: w, receipt: c })), e.next = 15;
                                        break;
                                    case 11:
                                        e.prev = 11, e.t0 = e.catch(0), C({ type: "approve_error" }), k(f("Error"), f("Please try again. Confirm the transaction and make sure you are paying enough gas!"));
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
                                        return C({ type: "confirm_sending" }), e.prev = 1, e.next = 4, n();
                                    case 4:
                                        return t = e.sent, e.next = 7, t.wait();
                                    case 7:
                                        (c = e.sent).status && (C({ type: "confirm_receipt" }), p({ state: w, receipt: c })), e.next = 15;
                                        break;
                                    case 11:
                                        e.prev = 11, e.t0 = e.catch(1), C({ type: "confirm_error" }), k(f("Error"), f("Please try again. Confirm the transaction and make sure you are paying enough gas!"));
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
            n.d(t, "a", (function() { return a }));
            var c, r, i, o, a, s = n(8),
                l = (n(1), n(5)),
                d = n(2),
                b = n(13),
                u = n(0);
            ! function(e) { e.ROW = "row", e.SEQUENTIAL = "sequential" }(a || (a = {}));
            var j = l.e.div(c || (c = Object(s.a)(["\n  align-items: center;\n  display: grid;\n  grid-template-columns: 1fr;\n  justify-content: center;\n\n  ", " {\n    grid-template-columns: 1fr 24px 1fr;\n  }\n"])), (function(e) { return e.theme.mediaQueries.md })),
                x = Object(l.e)(d.p)(r || (r = Object(s.a)(["\n  width: 100%;\n\n  ", " {\n    min-width: 160px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.md })),
                p = { width: "24px", color: "textDisabled" },
                h = Object(l.e)(d.F).attrs(p)(i || (i = Object(s.a)(["\n  display: none;\n\n  ", " {\n    display: block;\n  }\n"])), (function(e) { return e.theme.mediaQueries.md })),
                O = Object(l.e)(d.D).attrs(p)(o || (o = Object(s.a)(["\n  display: block;\n\n  ", " {\n    display: none;\n  }\n"])), (function(e) { return e.theme.mediaQueries.md })),
                f = Object(u.jsx)(d.i, { spin: !0, color: "currentColor" });
            t.b = function(e) {
                var t = e.isApproveDisabled,
                    n = e.isApproving,
                    c = e.isConfirming,
                    r = e.isConfirmDisabled,
                    i = e.onApprove,
                    o = e.onConfirm,
                    s = e.buttonArrangement,
                    l = void 0 === s ? a.ROW : s,
                    p = e.confirmLabel,
                    m = e.confirmId,
                    v = Object(b.b)().t,
                    g = null !== p && void 0 !== p ? p : v("Confirm");
                return l === a.ROW ? Object(u.jsxs)(j, { children: [Object(u.jsx)(d.m, { children: Object(u.jsx)(x, { disabled: t, onClick: i, endIcon: n ? f : void 0, isLoading: n, children: v(n ? "Enabling" : "Enable") }) }), Object(u.jsxs)(d.R, { justifyContent: "center", children: [Object(u.jsx)(h, {}), Object(u.jsx)(O, {})] }), Object(u.jsx)(d.m, { children: Object(u.jsx)(x, { id: m, onClick: o, disabled: r, isLoading: c, endIcon: c ? f : void 0, children: c ? v("Confirming") : g }) })] }) : Object(u.jsx)(u.Fragment, { children: t ? Object(u.jsx)(d.m, { children: Object(u.jsx)(x, { id: m, onClick: o, disabled: r, isLoading: c, endIcon: c ? f : void 0, children: c ? v("Confirming") : g }) }) : Object(u.jsx)(d.m, { children: Object(u.jsx)(x, { onClick: i, endIcon: n ? f : void 0, isLoading: n, children: v(n ? "Enabling" : "Enable") }) }) })
            }
        },
        803: function(e, t, n) {
            var c = n(370);
            e.exports = function(e, t) { return c(e, t) }
        },
        815: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() { return i }));
            var c = n(20),
                r = n(15);

            function i(e, t) {
                Object(r.a)(2, arguments);
                var n = Object(c.default)(e),
                    i = Object(c.default)(t);
                return n.getTime() - i.getTime()
            }
        },
        831: function(e, t, n) {
            "use strict";
            var c, r, i, o = n(6),
                a = n(9),
                s = n(51),
                l = n(8),
                d = n(1),
                b = n(5),
                u = n(2),
                j = n(13),
                x = n(0),
                p = ["title", "children"],
                h = Object(b.e)(u.R)(c || (c = Object(l.a)(["\n  cursor: pointer;\n"]))),
                O = Object(b.e)(u.R)(r || (r = Object(l.a)(["\n  button {\n    align-items: center;\n    justify-content: flex-start;\n  }\n"]))),
                f = Object(b.e)(u.R)(i || (i = Object(l.a)(["\n  overflow: hidden;\n  height: ", ";\n  padding-bottom: ", ";\n  border-bottom: 1px solid ", ";\n"])), (function(e) { return e.isExpanded ? "100%" : "0px" }), (function(e) { return e.isExpanded ? "16px" : "0px" }), (function(e) { return e.theme.colors.inputSecondary }));
            t.a = function(e) {
                var t = e.title,
                    n = e.children,
                    c = Object(s.a)(e, p),
                    r = Object(j.b)().t,
                    i = Object(d.useState)(!1),
                    l = Object(a.a)(i, 2),
                    b = l[0],
                    m = l[1];
                return Object(x.jsxs)(h, Object(o.a)(Object(o.a)({}, c), {}, { flexDirection: "column", onClick: function() { return m(!b) }, children: [Object(x.jsxs)(u.R, { justifyContent: "space-between", alignItems: "center", pb: "16px", children: [Object(x.jsx)(u.Qb, { fontWeight: "bold", children: t }), Object(x.jsx)(O, { children: Object(x.jsx)(u.P, { expanded: b, onClick: function() { return m(!b) }, children: r(b ? "Hide" : "Details") }) })] }), Object(x.jsx)(f, { isExpanded: b, flexDirection: "column", children: n })] }))
            }
        },
        832: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() { return u })), n.d(t, "b", (function() { return j }));
            var c, r, i, o = n(8),
                a = (n(1), n(2)),
                s = n(5),
                l = n(0),
                d = Object(s.e)(a.R)(c || (c = Object(o.a)(["\n  overflow-x: scroll;\n  padding: 0;\n  border-radius: 24px 24px 0 0;\n  ::-webkit-scrollbar {\n    display: none;\n  }\n  scrollbar-width: none; /* Firefox */\n"]))),
                b = Object(s.e)(a.R)(r || (r = Object(o.a)(["\n  justify-content: space-between;\n  background-color: ", ";\n  width: 100%;\n"])), (function(e) { return e.theme.colors.input })),
                u = s.e.button(i || (i = Object(o.a)(["\n  display: inline-flex;\n  justify-content: center;\n  cursor: pointer;\n  flex: 1;\n  border: 0;\n  outline: 0;\n  padding: 16px;\n  margin: 0;\n  border-radius: 24px 24px 0 0;\n  font-size: 16px;\n  font-weight: 600;\n  color: ", ";\n  background-color: ", ";\n"])), (function(e) { var t = e.theme; return e.isActive ? t.colors.text : t.colors.textSubtle }), (function(e) { var t = e.theme; return e.isActive ? t.card.background : t.colors.input })),
                j = function(e) { var t = e.children; return Object(l.jsx)(d, { p: ["0 4px", "0 16px"], children: Object(l.jsx)(b, { children: t }) }) }
        },
        881: function(e, t, n) {
            "use strict";
            var c, r, i, o, a, s, l, d = n(6),
                b = n(51),
                u = n(8),
                j = (n(1), n(5)),
                x = n(2),
                p = n(245),
                h = n(0),
                O = function(e, t, n) { return Object(j.d)(c || (c = Object(u.a)(["\n  width: 100%;\n  height: 20px;\n  clip-path: url(", ");\n\n  background: ", ";\n\n  & svg {\n    display: block;\n  }\n"])), t, (function() { return e.isDark ? (null === n || void 0 === n ? void 0 : n.dark) || (null === n || void 0 === n ? void 0 : n.light) || e.colors.background : (null === n || void 0 === n ? void 0 : n.light) || e.colors.background })) },
                f = Object(j.e)(x.m)(r || (r = Object(u.a)(["\n  ", "\n  transform: ", ";\n"])), (function(e) {
                    var t = e.theme,
                        n = e.clipPath,
                        c = e.clipFill;
                    return O(t, n, c)
                }), (function(e) { return "#bottomConcaveCurve" === e.clipPath ? "translate(0, -13px)" : "translate(0, 1px)" })),
                m = Object(j.e)(x.m)(i || (i = Object(u.a)(["\n  ", "\n  transform: ", ";\n"])), (function(e) {
                    var t = e.theme,
                        n = e.clipPath,
                        c = e.clipFill;
                    return O(t, n, c)
                }), (function(e) { return "#bottomConvexCurve" === e.clipPath ? "translate(0, -13px)" : "translate(0, -1px)" })),
                v = function(e) { var t = e.clipFill; return Object(h.jsx)(m, { clipFill: t, clipPath: "#topConvexCurve", children: Object(h.jsx)("svg", { width: "0", height: "0", children: Object(h.jsx)("defs", { children: Object(h.jsx)("clipPath", { id: "topConvexCurve", clipPathUnits: "objectBoundingBox", children: Object(h.jsx)("path", { d: "M 0,1 L 0,0 L 1,0 L 1,1 C 0.75 0, .25 0, 0 1 Z" }) }) }) }) }) },
                g = function(e) { var t = e.clipFill; return Object(h.jsx)(m, { clipFill: t, clipPath: "#bottomConvexCurve", children: Object(h.jsx)("svg", { width: "0", height: "0", children: Object(h.jsx)("defs", { children: Object(h.jsx)("clipPath", { id: "bottomConvexCurve", clipPathUnits: "objectBoundingBox", children: Object(h.jsx)("path", { d: "M 0,0 L 0,1 L 1,1 L 1,0 C .75 1, .25 1, 0 0 Z" }) }) }) }) }) },
                w = function(e) { var t = e.clipFill; return Object(h.jsx)(f, { clipFill: t, clipPath: "#topConcaveCurve", children: Object(h.jsx)("svg", { width: "0", height: "0", children: Object(h.jsx)("defs", { children: Object(h.jsx)("clipPath", { id: "topConcaveCurve", clipPathUnits: "objectBoundingBox", children: Object(h.jsx)("path", { d: "M 0,0 L 0,1 L 1,1 L 1,0 C .75 1, .25 1, 0 0 Z" }) }) }) }) }) },
                C = function(e) { var t = e.clipFill; return Object(h.jsx)(f, { clipFill: t, clipPath: "#bottomConcaveCurve", children: Object(h.jsx)("svg", { width: "0", height: "0", children: Object(h.jsx)("defs", { children: Object(h.jsx)("clipPath", { id: "bottomConcaveCurve", clipPathUnits: "objectBoundingBox", children: Object(h.jsx)("path", { d: "M 0,1 L 0,0 L 1,0 L 1,1 C .75 0.1, .25 0.1, 0 1 Z" }) }) }) }) }) },
                y = j.e.div(o || (o = Object(u.a)(["\n  background: ", ";\n  z-index: ", ";\n  position: relative;\n  display: flex;\n  align-items: center;\n  width: 100%;\n"])), (function(e) {
                    var t = e.theme,
                        n = e.dividerFill;
                    return t.isDark ? (null === n || void 0 === n ? void 0 : n.dark) || (null === n || void 0 === n ? void 0 : n.light) || "none" : (null === n || void 0 === n ? void 0 : n.light) || (null === n || void 0 === n ? void 0 : n.dark) || "none"
                }), (function(e) { return e.index })),
                k = j.e.div(a || (a = Object(u.a)(["\n  z-index: ", ";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"])), (function(e) { return e.index + 1 })),
                A = function(e) {
                    var t = e.index,
                        n = e.dividerPosition,
                        c = e.dividerComponent,
                        r = e.concave,
                        i = e.clipFill,
                        o = e.dividerFill,
                        a = "top" === n && !r,
                        s = "bottom" === n && !r,
                        l = "top" === n && r,
                        d = "bottom" === n && r;
                    return Object(h.jsxs)(y, { index: t, dividerFill: o, children: [c && Object(h.jsx)(k, { index: t, children: c }), Object(h.jsxs)(h.Fragment, { children: [l && Object(h.jsx)(w, { clipFill: i }), d && Object(h.jsx)(C, { clipFill: i })] }), Object(h.jsxs)(h.Fragment, { children: [a && Object(h.jsx)(v, { clipFill: i }), s && Object(h.jsx)(g, { clipFill: i })] })] })
                },
                S = ["children", "background", "svgFill", "index", "dividerComponent", "dividerPosition", "hasCurvedDivider", "concaveDivider", "clipFill", "dividerFill", "containerProps", "innerProps"],
                D = Object(j.e)(x.R)(s || (s = Object(u.a)(["\n  position: relative;\n  flex-direction: column;\n  align-items: center;\n  z-index: ", ";\n  background: ", ";\n  padding: ", ";\n"])), (function(e) { return e.index - 1 }), (function(e) {
                    var t = e.background,
                        n = e.theme;
                    return t || n.colors.background
                }), (function(e) { return (0, e.getPadding)() })),
                B = Object(j.e)(p.a)(l || (l = Object(u.a)(["\n  min-height: auto;\n  padding-top: 16px;\n  padding-bottom: 16px;\n\n  ", " {\n    padding-top: 32px;\n    padding-bottom: 32px;\n  }\n\n  ", " {\n    padding-top: 48px;\n    padding-bottom: 48px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm }), (function(e) { return e.theme.mediaQueries.lg }));
            t.a = function(e) {
                var t = e.children,
                    n = e.background,
                    c = e.svgFill,
                    r = e.index,
                    i = void 0 === r ? 1 : r,
                    o = e.dividerComponent,
                    a = e.dividerPosition,
                    s = void 0 === a ? "bottom" : a,
                    l = e.hasCurvedDivider,
                    u = void 0 === l || l,
                    j = e.concaveDivider,
                    p = void 0 !== j && j,
                    O = e.clipFill,
                    f = e.dividerFill,
                    m = e.containerProps,
                    v = e.innerProps,
                    g = Object(b.a)(e, S);
                return Object(h.jsxs)(x.m, Object(d.a)(Object(d.a)({}, m), {}, { children: [u && "top" === s && Object(h.jsx)(A, { svgFill: c, index: i, concave: p, dividerPosition: s, dividerComponent: o, clipFill: O, dividerFill: f }), Object(h.jsx)(D, Object(d.a)(Object(d.a)({ background: n, index: i, getPadding: function() { return u ? "bottom" === s ? "48px 0 14px" : "top" === s ? "14px 0 48px" : "48px 0" : "48px 0" } }, g), {}, { children: Object(h.jsx)(B, Object(d.a)(Object(d.a)({}, v), {}, { children: t })) })), u && "bottom" === s && Object(h.jsx)(A, { svgFill: c, index: i, concave: p, dividerPosition: s, dividerComponent: o, clipFill: O, dividerFill: f })] }))
            }
        },
        887: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() { return i }));
            var c = n(815),
                r = n(15);

            function i(e, t) { Object(r.a)(2, arguments); var n = Object(c.a)(e, t) / 1e3; return n > 0 ? Math.floor(n) : Math.ceil(n) }
        }
    }
]);
//# sourceMappingURL=6.f25ec476.chunk.js.map