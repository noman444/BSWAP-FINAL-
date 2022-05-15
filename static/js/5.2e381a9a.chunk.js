(this["webpackJsonppancake-frontend"] = this["webpackJsonppancake-frontend"] || []).push([
    [5], {
        1253: function(e, t, n) {
            "use strict";
            n.r(t);
            var r, c, i, a, s, o, l, b = n(1),
                u = n(75),
                j = n(42),
                d = n(185),
                p = n(432),
                O = n(184),
                x = n(22),
                f = n(59),
                m = n(382),
                h = n(8),
                v = n(5),
                g = n(2),
                C = n(13),
                y = n(3),
                w = n.n(y),
                k = n(12),
                S = n(9),
                T = n(6),
                A = n(39),
                E = n(144),
                I = Object(E.parseUnits)("1"),
                Q = Object(E.parseUnits)("0.5"),
                R = ["sleepy", "dollop", "twinkle", "churro", "sunny"],
                D = n(0),
                P = I.add(Q),
                N = P.mul(5),
                F = { isInitialized: !1, currentStep: 0, teamId: null, selectedNft: { nftAddress: null, tokenId: null }, userName: "", minimumCakeRequired: P, allowance: N },
                z = function(e, t) {
                    switch (t.type) {
                        case "initialize":
                            return Object(T.a)(Object(T.a)({}, e), {}, { isInitialized: !0, currentStep: t.step });
                        case "next_step":
                            return Object(T.a)(Object(T.a)({}, e), {}, { currentStep: e.currentStep + 1 });
                        case "set_team":
                            return Object(T.a)(Object(T.a)({}, e), {}, { teamId: t.teamId });
                        case "set_selected_nft":
                            return Object(T.a)(Object(T.a)({}, e), {}, { selectedNft: { tokenId: t.tokenId, nftAddress: t.nftAddress } });
                        case "set_username":
                            return Object(T.a)(Object(T.a)({}, e), {}, { userName: t.userName });
                        default:
                            return e
                    }
                },
                _ = Object(b.createContext)(null),
                L = function(e) {
                    var t = e.children,
                        n = Object(b.useReducer)(z, F),
                        r = Object(S.a)(n, 2),
                        c = r[0],
                        i = r[1],
                        a = Object(j.c)().account;
                    Object(b.useEffect)((function() {
                        var e = !0;
                        return a && function() {
                                var t = Object(k.a)(w.a.mark((function t() {
                                    var n, r;
                                    return w.a.wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return n = Object(A.b)(), t.next = 3, n.canMint(a);
                                            case 3:
                                                r = t.sent, i({ type: "initialize", step: r ? 0 : 1 }), e && i({ type: "initialize", step: r ? 0 : 1 });
                                            case 6:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t)
                                })));
                                return function() { return t.apply(this, arguments) }
                            }()(),
                            function() { e = !1 }
                    }), [a, i]);
                    var s = Object(b.useMemo)((function() { return { nextStep: function() { return i({ type: "next_step" }) }, setTeamId: function(e) { return i({ type: "set_team", teamId: e }) }, setSelectedNft: function(e, t) { return i({ type: "set_selected_nft", tokenId: e, nftAddress: t }) }, setUserName: function(e) { return i({ type: "set_username", userName: e }) } } }), [i]);
                    return Object(D.jsx)(_.Provider, { value: Object(T.a)(Object(T.a)({}, c), {}, { actions: s }), children: t })
                },
                M = v.e.div(r || (r = Object(h.a)(["\n  border-bottom: 2px solid ", ";\n  margin-bottom: 24px;\n  padding-bottom: 24px;\n"])), (function(e) { return e.theme.colors.textSubtle })),
                W = ["Get Starter Collectible", "Set Profile Picture", "Join Team", "Set Name"],
                U = function() {
                    var e = Object(C.b)().t,
                        t = Object(b.useContext)(_).currentStep;
                    return Object(D.jsxs)(M, { children: [Object(D.jsx)(g.T, { as: "h1", scale: "xxl", color: "secondary", mb: "8px", id: "profile-setup-title", children: e("Profile Setup") }), Object(D.jsx)(g.T, { as: "h2", scale: "lg", mb: "8px", children: e("Show off your stats and collectibles with your unique profile") }), Object(D.jsx)(g.Qb, { color: "textSubtle", mb: "24px", children: e("Total cost: 1.5 CAKE") }), Object(D.jsx)(g.n, { children: W.map((function(n, r) { return Object(D.jsx)(g.Qb, { color: r <= t ? "text" : "textDisabled", children: e(n) }, n) })) })] })
                },
                q = n(105),
                V = function() { var e = Object(C.b)().t; return Object(D.jsxs)("div", { children: [Object(D.jsx)(g.T, { scale: "xl", mb: "8px", children: e("Oops!") }), Object(D.jsx)(g.Qb, { as: "p", mb: "16px", children: e("Please connect your wallet to continue") }), Object(D.jsx)(q.a, {})] }) },
                H = n(787),
                Y = n(44),
                G = n(129),
                K = n(138),
                B = n(126),
                X = n(788),
                J = n(51),
                Z = ["name", "value", "isChecked", "image", "onChange", "disabled", "children"],
                $ = v.e.label(c || (c = Object(h.a)(["\n  cursor: ", ";\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  opacity: ", ";\n"])), (function(e) { return e.isDisabled ? "not-allowed" : "pointer" }), (function(e) { return e.isDisabled ? "0.6" : "1" })),
                ee = v.e.div(i || (i = Object(h.a)(["\n  align-items: center;\n  display: flex;\n  flex-grow: 1;\n  height: 80px;\n  padding: 8px 16px;\n"]))),
                te = v.e.div(a || (a = Object(h.a)(["\n  margin-left: 16px;\n"]))),
                ne = v.e.div(s || (s = Object(h.a)(["\n  align-self: stretch;\n  background-image: url('", "');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  flex: none;\n  width: 80px;\n"])), (function(e) { return e.src })),
                re = function(e) {
                    var t = e.name,
                        n = e.value,
                        r = e.isChecked,
                        c = void 0 !== r && r,
                        i = e.image,
                        a = e.onChange,
                        s = e.disabled,
                        o = e.children,
                        l = Object(J.a)(e, Z);
                    return Object(D.jsx)(g.t, Object(T.a)(Object(T.a)({ isSuccess: c, isDisabled: s, mb: "16px" }, l), {}, { children: Object(D.jsxs)($, { isDisabled: s, children: [Object(D.jsxs)(ee, { children: [Object(D.jsx)(g.Ab, { name: t, checked: c, value: n, onChange: function(e) { return a(e.target.value) }, disabled: s, style: { flex: "none" } }), Object(D.jsx)(te, { children: o })] }), Object(D.jsx)(ne, { src: i })] }) }))
                },
                ce = function(e) { return Object(D.jsx)(g.p, Object(T.a)({ endIcon: Object(D.jsx)(g.f, { color: "currentColor" }) }, e)) },
                ie = function() { return Object(b.useContext)(_) },
                ae = K.a.pancake.filter((function(e) { return R.includes(e.identifier) })),
                se = function() {
                    var e = Object(b.useState)(null),
                        t = Object(S.a)(e, 2),
                        n = t[0],
                        r = t[1],
                        c = ie(),
                        i = c.actions,
                        a = c.minimumCakeRequired,
                        s = c.allowance,
                        o = Object(j.c)().account,
                        l = Object(Y.c)(),
                        u = Object(Y.a)(),
                        d = Object(C.b)().t,
                        p = Object(G.e)(),
                        O = p.balance,
                        x = p.fetchStatus === G.a.SUCCESS && O.gte(I),
                        f = Object(B.a)().callWithGasPrice,
                        m = Object(H.a)({
                            onRequiresApproval: function() {
                                var e = Object(k.a)(w.a.mark((function e() {
                                    var t;
                                    return w.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.prev = 0, e.next = 3, l.allowance(o, u.address);
                                            case 3:
                                                return t = e.sent, e.abrupt("return", t.gte(a));
                                            case 7:
                                                return e.prev = 7, e.t0 = e.catch(0), e.abrupt("return", !1);
                                            case 10:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, null, [
                                        [0, 7]
                                    ])
                                })));
                                return function() { return e.apply(this, arguments) }
                            }(),
                            onApprove: function() { return f(l, "approve", [u.address, s.toString()]) },
                            onConfirm: function() { return f(u, "mintNFT", [n]) },
                            onSuccess: function() { return i.nextStep() }
                        }),
                        h = m.isApproving,
                        v = m.isApproved,
                        y = m.isConfirmed,
                        T = m.isConfirming,
                        A = m.handleApprove,
                        Q = m.handleConfirm;
                    return Object(D.jsxs)(D.Fragment, { children: [Object(D.jsx)(g.Qb, { fontSize: "20px", color: "textSubtle", bold: !0, children: d("Step %num%", { num: 1 }) }), Object(D.jsx)(g.T, { as: "h3", scale: "xl", mb: "24px", children: d("Get Starter Collectible") }), Object(D.jsx)(g.Qb, { as: "p", children: d("Every profile starts by making a \u201cstarter\u201d collectible (NFT).") }), Object(D.jsx)(g.Qb, { as: "p", children: d("This starter will also become your first profile picture.") }), Object(D.jsx)(g.Qb, { as: "p", mb: "24px", children: d("You can change your profile pic later if you get another approved Pancake Collectible.") }), Object(D.jsx)(g.t, { mb: "24px", children: Object(D.jsxs)(g.u, { children: [Object(D.jsx)(g.T, { as: "h4", scale: "lg", mb: "8px", children: d("Choose your Starter!") }), Object(D.jsx)(g.Qb, { as: "p", color: "textSubtle", children: d("Choose wisely: you can only ever make one starter collectible!") }), Object(D.jsx)(g.Qb, { as: "p", mb: "24px", color: "textSubtle", children: d("Cost: %num% CAKE", { num: Object(E.formatUnits)(I) }) }), ae.map((function(e) { return Object(D.jsx)(re, { name: "mintStarter", value: e.id, image: "/images/nfts/".concat(e.images.md), isChecked: n === e.id, onChange: function(e) { return r(Number(e)) }, disabled: h || T || y || !x, children: Object(D.jsx)(g.Qb, { bold: !0, children: e.name }) }, e.identifier) })), !x && Object(D.jsx)(g.Qb, { color: "failure", mb: "16px", children: d("A minimum of %num% CAKE is required", { num: Object(E.formatUnits)(I) }) }), Object(D.jsx)(X.b, { isApproveDisabled: null === n || y || T || v, isApproving: h, isConfirmDisabled: !v || y || !x, isConfirming: T, onApprove: A, onConfirm: Q })] }) }), Object(D.jsx)(ce, { onClick: i.nextStep, disabled: !y, children: d("Next Step") })] })
                },
                oe = n(83),
                le = n(223),
                be = n(34),
                ue = n(413),
                je = function() {
                    var e = Object(j.c)().account,
                        t = Object(f.b)(),
                        n = Object(x.c)((function(e) { return e.collectibles })),
                        r = n.isInitialized,
                        c = n.isLoading,
                        i = n.data,
                        a = Object.keys(i);
                    return Object(b.useEffect)((function() {!r && e && t(Object(ue.b)(e)) }), [r, e, t]), { isInitialized: r, isLoading: c, tokenIds: i, nftsInWallet: K.a.pancake.filter((function(e) { return a.includes(e.identifier) })) }
                },
                de = n(92),
                pe = Object(v.e)(oe.a)(o || (o = Object(h.a)(["\n  color: ", ";\n"])), (function(e) { return e.theme.colors.primary })),
                Oe = v.e.div(l || (l = Object(h.a)(["\n  margin-bottom: 24px;\n"]))),
                xe = function() {
                    var e = Object(j.c)().library,
                        t = Object(b.useState)(!1),
                        n = Object(S.a)(t, 2),
                        r = n[0],
                        c = n[1],
                        i = Object(b.useState)(!1),
                        a = Object(S.a)(i, 2),
                        s = a[0],
                        o = a[1],
                        l = Object(b.useContext)(_),
                        u = l.selectedNft,
                        d = l.actions,
                        p = Object(C.b)().t,
                        O = je(),
                        x = O.isLoading,
                        f = O.nftsInWallet,
                        m = O.tokenIds,
                        h = Object(de.a)().toastError,
                        v = Object(B.a)().callWithGasPrice,
                        y = function() {
                            var t = Object(k.a)(w.a.mark((function t() {
                                var n, r;
                                return w.a.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return n = Object(A.l)(u.nftAddress, e.getSigner()), t.next = 3, v(n, "approve", [Object(be.o)(), u.tokenId]);
                                        case 3:
                                            return r = t.sent, o(!0), t.next = 7, r.wait();
                                        case 7:
                                            t.sent.status ? (o(!1), c(!0)) : (h(p("Error"), p("Please try again. Confirm the transaction and make sure you are paying enough gas!")), o(!1));
                                        case 9:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })));
                            return function() { return t.apply(this, arguments) }
                        }();
                    return x || 0 !== f.length ? Object(D.jsxs)(D.Fragment, {
                        children: [Object(D.jsx)(g.Qb, { fontSize: "20px", color: "textSubtle", bold: !0, children: p("Step %num%", { num: 2 }) }), Object(D.jsx)(g.T, { as: "h3", scale: "xl", mb: "24px", children: p("Set Profile Picture") }), Object(D.jsx)(g.t, {
                            mb: "24px",
                            children: Object(D.jsxs)(g.u, {
                                children: [Object(D.jsx)(g.T, { as: "h4", scale: "lg", mb: "8px", children: p("Choose collectible") }), Object(D.jsx)(g.Qb, { as: "p", color: "textSubtle", children: p("Choose a profile picture from the eligible collectibles (NFT) in your wallet, shown below.") }), Object(D.jsxs)(g.Qb, { as: "p", color: "textSubtle", mb: "24px", children: [p("Only approved Pancake Collectibles can be used."), Object(D.jsx)(pe, { to: "/collectibles", style: { marginLeft: "4px" }, children: p("See the list >") })] }), Object(D.jsx)(Oe, {
                                    children: x ? Object(D.jsx)(g.Db, { height: "80px", mb: "16px" }) : f.map((function(e) {
                                        var t = Object(S.a)(m[e.identifier], 1)[0],
                                            n = Object(le.a)();
                                        return Object(D.jsx)(re, { name: "profilePicture", value: t, image: "/images/nfts/".concat(e.images.md), isChecked: t === u.tokenId, onChange: function(e) { return d.setSelectedNft(parseInt(e, 10), n) }, children: Object(D.jsx)(g.Qb, { bold: !0, children: e.name }) }, e.identifier)
                                    }))
                                }), Object(D.jsx)(g.T, { as: "h4", scale: "lg", mb: "8px", children: p("Allow collectible to be locked") }), Object(D.jsx)(g.Qb, { as: "p", color: "textSubtle", mb: "16px", children: p("The collectible you've chosen will be locked in a smart contract while it\u2019s being used as your profile picture. Don't worry - you'll be able to get it back at any time.") }), Object(D.jsx)(g.p, { isLoading: s, disabled: r || s || null === u.tokenId, onClick: y, endIcon: s ? Object(D.jsx)(g.i, { spin: !0, color: "currentColor" }) : void 0, id: "approveStarterCollectible", children: p("Enable") })]
                            })
                        }), Object(D.jsx)(ce, { onClick: d.nextStep, disabled: null === u.tokenId || !r || s, children: p("Next Step") })]
                    }) : Object(D.jsxs)(D.Fragment, { children: [Object(D.jsx)(g.T, { scale: "xl", mb: "24px", children: p("Oops!") }), Object(D.jsx)(g.Qb, { bold: !0, fontSize: "20px", mb: "24px", children: p("We couldn\u2019t find any Pancake Collectibles in your wallet.") }), Object(D.jsx)(g.Qb, { as: "p", children: p("You need a Pancake Collectible to finish setting up your profile. If you sold or transferred your starter collectible to another wallet, you\u2019ll need to get it back or acquire a new one somehow. You can\u2019t make a new starter with this wallet address.") })] })
                },
                fe = n(981),
                me = n.n(fe),
                he = n(173),
                ve = function() {
                    var e = ie(),
                        t = e.teamId,
                        n = e.actions,
                        r = Object(C.b)().t,
                        c = function() {
                            var e = Object(x.c)((function(e) { return e.teams })),
                                t = e.isInitialized,
                                n = e.isLoading,
                                r = e.data,
                                c = Object(f.b)();
                            return Object(b.useEffect)((function() { c(Object(he.c)()) }), [c]), { teams: r, isInitialized: t, isLoading: n }
                        }().teams,
                        i = function(e) { return n.setTeamId(parseInt(e, 10)) },
                        a = Object(b.useMemo)((function() { return me()(Object.values(c)) }), [c]);
                    return Object(D.jsxs)(D.Fragment, { children: [Object(D.jsx)(g.Qb, { fontSize: "20px", color: "textSubtle", bold: !0, children: r("Step %num%", { num: 3 }) }), Object(D.jsx)(g.T, { as: "h3", scale: "xl", mb: "24px", children: r("Join a Team") }), Object(D.jsx)(g.Qb, { as: "p", mb: "24px", children: r("It won\u2019t be possible to undo the choice you make for the foreseeable future!") }), Object(D.jsx)(g.t, { mb: "24px", children: Object(D.jsxs)(g.u, { children: [Object(D.jsx)(g.T, { as: "h4", scale: "lg", mb: "8px", children: r("Join a Team") }), Object(D.jsx)(g.Qb, { as: "p", color: "textSubtle", mb: "24px", children: r("There\u2019s currently no big difference between teams, and no benefit of joining one team over another for now. So pick whichever one you like!") }), a && a.map((function(e) { return Object(D.jsxs)(re, { name: "teams-selection", value: e.id, isChecked: t === e.id, image: "/images/teams/".concat(e.images.md), onChange: i, disabled: !e.isJoinable, children: [Object(D.jsx)(g.Qb, { bold: !0, children: e.name }), Object(D.jsxs)(g.R, { children: [Object(D.jsx)(g.J, { mr: "8px" }), Object(D.jsx)(g.Qb, { children: e.users.toLocaleString() })] })] }, e.name) }))] }) }), Object(D.jsx)(ce, { onClick: n.nextStep, disabled: null === t, children: r("Next Step") })] })
                },
                ge = n(817),
                Ce = n(20),
                ye = n(496),
                we = n(15),
                ke = n(497),
                Se = n(498);

            function Te(e) { Object(we.a)(1, arguments); var t = Object(Ce.default)(e); return Object(ke.default)(t).getTime() === Object(Se.default)(t).getTime() }

            function Ae(e, t) {
                Object(we.a)(2, arguments);
                var n, r = Object(Ce.default)(e),
                    c = Object(Ce.default)(t),
                    i = Object(ge.a)(r, c),
                    a = Math.abs(Object(ye.default)(r, c));
                if (a < 1) n = 0;
                else {
                    1 === r.getMonth() && r.getDate() > 27 && r.setDate(30), r.setMonth(r.getMonth() - i * a);
                    var s = Object(ge.a)(r, c) === -i;
                    Te(Object(Ce.default)(e)) && 1 === a && 1 === Object(ge.a)(e, c) && (s = !1), n = i * (a - Number(s))
                }
                return 0 === n ? 0 : n
            }
            var Ee = n(887),
                Ie = n(262),
                Qe = n(835),
                Re = n(136),
                De = 1440,
                Pe = 43200;

            function Ne(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                Object(we.a)(2, arguments);
                var r = n.locale || Ie.a;
                if (!r.formatDistance) throw new RangeError("locale must contain formatDistance property");
                var c = Object(ge.a)(e, t);
                if (isNaN(c)) throw new RangeError("Invalid time value");
                var i, a, s = Object(Qe.a)(n);
                s.addSuffix = Boolean(n.addSuffix), s.comparison = c, c > 0 ? (i = Object(Ce.default)(t), a = Object(Ce.default)(e)) : (i = Object(Ce.default)(e), a = Object(Ce.default)(t));
                var o, l = Object(Ee.a)(a, i),
                    b = (Object(Re.a)(a) - Object(Re.a)(i)) / 1e3,
                    u = Math.round((l - b) / 60);
                if (u < 2) return n.includeSeconds ? l < 5 ? r.formatDistance("lessThanXSeconds", 5, s) : l < 10 ? r.formatDistance("lessThanXSeconds", 10, s) : l < 20 ? r.formatDistance("lessThanXSeconds", 20, s) : l < 40 ? r.formatDistance("halfAMinute", null, s) : l < 60 ? r.formatDistance("lessThanXMinutes", 1, s) : r.formatDistance("xMinutes", 1, s) : 0 === u ? r.formatDistance("lessThanXMinutes", 1, s) : r.formatDistance("xMinutes", u, s);
                if (u < 45) return r.formatDistance("xMinutes", u, s);
                if (u < 90) return r.formatDistance("aboutXHours", 1, s);
                if (u < De) { var j = Math.round(u / 60); return r.formatDistance("aboutXHours", j, s) }
                if (u < 2520) return r.formatDistance("xDays", 1, s);
                if (u < Pe) { var d = Math.round(u / De); return r.formatDistance("xDays", d, s) }
                if (u < 86400) return o = Math.round(u / Pe), r.formatDistance("aboutXMonths", o, s);
                if ((o = Ae(a, i)) < 12) { var p = Math.round(u / Pe); return r.formatDistance("xMonths", p, s) }
                var O = o % 12,
                    x = Math.floor(o / 12);
                return O < 3 ? r.formatDistance("aboutXYears", x, s) : O < 9 ? r.formatDistance("overXYears", x, s) : r.formatDistance("almostXYears", x + 1, s)
            }
            var Fe, ze, _e, Le, Me = n(734),
                We = n(93),
                Ue = n(200),
                qe = n(21),
                Ve = n(221),
                He = n.n(Ve),
                Ye = n(120),
                Ge = n(96),
                Ke = function(e) {
                    var t = e.account,
                        n = e.teamId,
                        r = e.selectedNft,
                        c = e.minimumCakeRequired,
                        i = e.allowance,
                        a = e.onDismiss,
                        s = Object(C.b)().t,
                        o = Object(Y.p)(),
                        l = Object(f.b)(),
                        b = Object(de.a)().toastSuccess,
                        u = Object(Y.c)(),
                        j = Object(B.a)().callWithGasPrice,
                        d = Object(H.a)({
                            onRequiresApproval: function() {
                                var e = Object(k.a)(w.a.mark((function e() {
                                    var n;
                                    return w.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.prev = 0, e.next = 3, u.allowance(t, o.address);
                                            case 3:
                                                return n = e.sent, e.abrupt("return", n.gte(c));
                                            case 7:
                                                return e.prev = 7, e.t0 = e.catch(0), e.abrupt("return", !1);
                                            case 10:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, null, [
                                        [0, 7]
                                    ])
                                })));
                                return function() { return e.apply(this, arguments) }
                            }(),
                            onApprove: function() { return j(u, "approve", [o.address, i.toJSON()]) },
                            onConfirm: function() { return j(o, "createProfile", [n, r.nftAddress, r.tokenId]) },
                            onSuccess: function() {
                                var e = Object(k.a)(w.a.mark((function e(n) {
                                    var r;
                                    return w.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return r = n.receipt, e.next = 3, l(Object(Ye.c)(t));
                                            case 3:
                                                a(), b(s("Profile created!"), Object(D.jsx)(Ge.b, { txHash: r.transactionHash }));
                                            case 5:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })));
                                return function(t) { return e.apply(this, arguments) }
                            }()
                        }),
                        p = d.isApproving,
                        O = d.isApproved,
                        x = d.isConfirmed,
                        m = d.isConfirming,
                        h = d.handleApprove,
                        v = d.handleConfirm;
                    return Object(D.jsxs)(g.ib, { title: s("Complete Profile"), onDismiss: a, children: [Object(D.jsx)(g.Qb, { color: "textSubtle", mb: "8px", children: s("Submitting NFT to contract and confirming User Name and Team.") }), Object(D.jsxs)(g.R, { justifyContent: "space-between", mb: "16px", children: [Object(D.jsx)(g.Qb, { children: s("Cost") }), Object(D.jsx)(g.Qb, { children: s("%num% CAKE", { num: Object(E.formatUnits)(Q) }) })] }), Object(D.jsx)(X.b, { isApproveDisabled: x || m || O, isApproving: p, isConfirmDisabled: !O || x, isConfirming: m, onApprove: h, onConfirm: v })] })
                };
            ! function(e) { e.IDLE = "idle", e.CREATED = "created", e.NEW = "new" }(Le || (Le = {}));
            var Be, Xe, Je = v.e.div(Fe || (Fe = Object(h.a)(["\n  position: relative;\n  max-width: 240px;\n"]))),
                Ze = Object(v.e)(g.Y)(ze || (ze = Object(h.a)(["\n  padding-right: 40px;\n"]))),
                $e = Object(v.e)(g.R)(_e || (_e = Object(h.a)(["\n  align-items: center;\n  height: 24px;\n  justify-content: center;\n  margin-top: -12px;\n  position: absolute;\n  right: 16px;\n  top: 50%;\n  width: 24px;\n"]))),
                et = function() {
                    var e = Object(b.useState)(!1),
                        t = Object(S.a)(e, 2),
                        n = t[0],
                        r = t[1],
                        c = ie(),
                        i = c.teamId,
                        a = c.selectedNft,
                        s = c.userName,
                        o = c.actions,
                        l = c.minimumCakeRequired,
                        u = c.allowance,
                        d = Object(C.b)().t,
                        p = Object(j.c)().account,
                        O = Object(de.a)().toastError,
                        x = Object(qe.a)().library,
                        f = Object(b.useState)(Le.IDLE),
                        m = Object(S.a)(f, 2),
                        h = m[0],
                        v = m[1],
                        y = Object(b.useState)(!1),
                        T = Object(S.a)(y, 2),
                        A = T[0],
                        I = T[1],
                        R = Object(b.useState)(!1),
                        P = Object(S.a)(R, 2),
                        N = P[0],
                        F = P[1],
                        z = Object(b.useState)(""),
                        _ = Object(S.a)(z, 2),
                        L = _[0],
                        M = _[1],
                        W = Object(G.e)(),
                        U = W.balance,
                        q = W.fetchStatus === G.a.SUCCESS && U.gte(Q),
                        V = Object(g.kc)(Object(D.jsx)(Ke, { userName: s, selectedNft: a, account: p, teamId: i, minimumCakeRequired: l, allowance: u }), !1),
                        H = Object(S.a)(V, 1)[0],
                        Y = h === Le.CREATED,
                        K = He()(function() {
                            var e = Object(k.a)(w.a.mark((function e(t) {
                                var n, r, c;
                                return w.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, F(!0), e.next = 4, fetch("".concat(We.a, "/api/users/valid/").concat(t));
                                        case 4:
                                            if (!(n = e.sent).ok) { e.next = 10; break }
                                            I(!0), M(""), e.next = 15;
                                            break;
                                        case 10:
                                            return e.next = 12, n.json();
                                        case 12:
                                            c = e.sent, I(!1), M(null === c || void 0 === c || null === (r = c.error) || void 0 === r ? void 0 : r.message);
                                        case 15:
                                            return e.prev = 15, F(!1), e.finish(15);
                                        case 18:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, , 15, 18]
                                ])
                            })));
                            return function(t) { return e.apply(this, arguments) }
                        }(), 200),
                        B = function() {
                            var e = Object(k.a)(w.a.mark((function e() {
                                var t, n, r, c;
                                return w.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, F(!0), e.next = 4, Object(Ue.c)(x, p, s);
                                        case 4:
                                            return t = e.sent, e.next = 7, fetch("".concat(We.a, "/api/users/register"), { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ address: p, username: s, signature: t }) });
                                        case 7:
                                            if (!(n = e.sent).ok) { e.next = 12; break }
                                            v(Le.CREATED), e.next = 16;
                                            break;
                                        case 12:
                                            return e.next = 14, n.json();
                                        case 14:
                                            c = e.sent, O(d("Error"), null === c || void 0 === c || null === (r = c.error) || void 0 === r ? void 0 : r.message);
                                        case 16:
                                            e.next = 21;
                                            break;
                                        case 18:
                                            e.prev = 18, e.t0 = e.catch(0), O((null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message) ? e.t0.message : JSON.stringify(e.t0));
                                        case 21:
                                            return e.prev = 21, F(!1), e.finish(21);
                                        case 24:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 18, 21, 24]
                                ])
                            })));
                            return function() { return e.apply(this, arguments) }
                        }();
                    return Object(b.useEffect)((function() {
                        p && function() {
                            var e = Object(k.a)(w.a.mark((function e() {
                                var t, n, r;
                                return w.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, fetch("".concat(We.a, "/api/users/").concat(p));
                                        case 3:
                                            return t = e.sent, e.next = 6, t.json();
                                        case 6:
                                            n = e.sent, t.ok ? (r = Ne(Object(Me.default)(n.created_at), new Date), M(d("Created %dateCreated% ago", { dateCreated: r })), o.setUserName(n.username), v(Le.CREATED), I(!0)) : v(Le.NEW), e.next = 13;
                                            break;
                                        case 10:
                                            e.prev = 10, e.t0 = e.catch(0), O(d("Error"), d("Unable to verify username"));
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
                    }), [p, v, I, M, o, O, d]), Object(D.jsxs)(D.Fragment, {
                        children: [Object(D.jsx)(g.Qb, { fontSize: "20px", color: "textSubtle", bold: !0, children: d("Step %num%", { num: 4 }) }), Object(D.jsx)(g.T, { as: "h3", scale: "xl", mb: "24px", children: d("Set Your Name") }), Object(D.jsx)(g.Qb, { as: "p", mb: "24px", children: d("This name will be shown in team leaderboards and search results as long as your profile is active.") }), Object(D.jsx)(g.t, {
                            mb: "24px",
                            children: Object(D.jsxs)(g.u, {
                                children: [Object(D.jsx)(g.T, { as: "h4", scale: "lg", mb: "8px", children: d("Set Your Name") }), Object(D.jsx)(g.Qb, { as: "p", color: "textSubtle", mb: "24px", children: d("Your name must be at least 3 and at most 15 standard letters and numbers long. You can\u2019t change this once you click Confirm.") }), h === Le.IDLE ? Object(D.jsx)(g.Db, { height: "40px", width: "240px" }) : Object(D.jsxs)(Je, {
                                    children: [Object(D.jsx)(Ze, {
                                        onChange: function(e) {
                                            var t = e.target.value;
                                            o.setUserName(t), K(t)
                                        },
                                        isWarning: s && !A,
                                        isSuccess: s && A,
                                        minLength: 3,
                                        maxLength: 15,
                                        disabled: Y,
                                        placeholder: d("Enter your name..."),
                                        value: s
                                    }), Object(D.jsxs)($e, { children: [N && Object(D.jsx)(g.i, { spin: !0 }), !N && A && s && Object(D.jsx)(g.C, { color: "success" }), !N && !A && s && Object(D.jsx)(g.dc, { color: "failure" })] })]
                                }), Object(D.jsx)(g.Qb, { color: "textSubtle", fontSize: "14px", py: "4px", mb: "16px", style: { minHeight: "30px" }, children: L }), Object(D.jsx)(g.Qb, { as: "p", color: "failure", mb: "8px", children: d("Only reuse a name from other social media if you're OK with people viewing your wallet. You can't change your name once you click Confirm.") }), Object(D.jsx)("label", { htmlFor: "checkbox", style: { display: "block", cursor: "pointer", marginBottom: "24px" }, children: Object(D.jsxs)(g.R, { alignItems: "center", children: [Object(D.jsx)("div", { style: { flex: "none" }, children: Object(D.jsx)(g.A, { id: "checkbox", scale: "sm", checked: n, onChange: function() { return r(!n) } }) }), Object(D.jsx)(g.Qb, { ml: "8px", children: d("I understand that people can view my wallet if they know my username") })] }) }), Object(D.jsx)(g.p, { onClick: B, disabled: !A || Y || N || !n, children: d("Confirm") })]
                            })
                        }), Object(D.jsx)(g.p, { onClick: H, disabled: !A || !Y, id: "completeProfileCreation", children: d("Complete Profile") }), !q && Object(D.jsx)(g.Qb, { color: "failure", mt: "16px", children: d("A minimum of %num% CAKE is required", { num: Object(E.formatUnits)(Q) }) })]
                    })
                },
                tt = function() {
                    var e = Object(C.b)().t,
                        t = Object(b.useContext)(_),
                        n = t.isInitialized,
                        r = t.currentStep;
                    return Object(j.c)().account ? n ? 0 === r ? Object(D.jsx)(se, {}) : 1 === r ? Object(D.jsx)(xe, {}) : 2 === r ? Object(D.jsx)(ve, {}) : 3 === r ? Object(D.jsx)(et, {}) : null : Object(D.jsx)("div", { children: e("Loading...") }) : Object(D.jsx)(V, {})
                },
                nt = function() { return Object(D.jsx)(L, { children: Object(D.jsxs)(d.b, { children: [Object(D.jsx)(U, {}), Object(D.jsx)(tt, {})] }) }) },
                rt = function() {
                    var e = Object(b.useState)(!1),
                        t = Object(S.a)(e, 2),
                        n = t[0],
                        r = t[1],
                        c = Object(b.useState)(1),
                        i = Object(S.a)(c, 2),
                        a = i[0],
                        s = i[1],
                        o = Object(j.c)().account,
                        l = Object(b.useCallback)((function() { s((function(e) { return e + 1 })) }), [s]);
                    return Object(b.useEffect)((function() {
                        o && function() {
                            var e = Object(k.a)(w.a.mark((function e() {
                                var t, n;
                                return w.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return t = Object(A.j)(), e.prev = 1, e.next = 4, t.canClaim(o);
                                        case 4:
                                            n = e.sent, r(n), e.next = 11;
                                            break;
                                        case 8:
                                            e.prev = 8, e.t0 = e.catch(1), console.error(e.t0);
                                        case 11:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [1, 8]
                                ])
                            })));
                            return function() { return e.apply(this, arguments) }
                        }()()
                    }), [o, a, r]), { canClaim: n, checkClaimStatus: l }
                },
                ct = function(e) {
                    var t = e.onSuccess,
                        n = e.onDismiss,
                        r = Object(b.useState)(!1),
                        c = Object(S.a)(r, 2),
                        i = c[0],
                        a = c[1],
                        s = Object(C.b)().t,
                        o = rt().canClaim,
                        l = Object(Y.e)(),
                        u = Object(de.a)(),
                        j = u.toastSuccess,
                        d = u.toastError,
                        p = Object(B.a)().callWithGasPrice,
                        O = function() {
                            var e = Object(k.a)(w.a.mark((function e() {
                                var r, c;
                                return w.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, p(l, "getCakeBack");
                                        case 2:
                                            return r = e.sent, a(!0), e.next = 6, r.wait();
                                        case 6:
                                            (c = e.sent).status ? (j(s("Success!"), Object(D.jsx)(Ge.b, { txHash: c.transactionHash })), t(), n()) : (a(!1), d(s("Error"), s("Please try again. Confirm the transaction and make sure you are paying enough gas!")));
                                        case 8:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() { return e.apply(this, arguments) }
                        }();
                    return Object(D.jsx)(g.ib, { title: s("Claim your Gift!"), onDismiss: n, children: Object(D.jsxs)("div", { style: { maxWidth: "640px" }, children: [Object(D.jsx)(g.Qb, { as: "p", children: s("Thank you for being a day-one user of Pancake Profiles!") }), Object(D.jsx)(g.Qb, { as: "p", mb: "8px", children: s("If you haven't already noticed, we made a mistake and the starter bunny you chose got mixed up and changed into another bunny. Oops!") }), Object(D.jsx)(g.Qb, { as: "p", children: s("To make it up to you, we\u2019ll refund you the full 4 CAKE it cost to make your bunny.") }), Object(D.jsx)(g.Qb, { as: "p", mb: "8px", children: s("We\u2019re also preparing an all-new collectible for you to claim (for free!) in the near future.") }), Object(D.jsx)(g.Qb, { as: "p", mb: "24px", children: s("Once you claim the refund, you can make another account with another wallet, mint a new bunny, and send it to your main account via the NFT page.") }), Object(D.jsx)(g.p, { endIcon: i ? Object(D.jsx)(g.i, { spin: !0, color: "currentColor" }) : null, isLoading: i, onClick: O, disabled: !o, children: s("Claim Your CAKE") })] }) })
                },
                it = v.e.div(Be || (Be = Object(h.a)(["\n  border-bottom: 2px solid ", ";\n  margin-bottom: 24px;\n  padding-bottom: 24px;\n"])), (function(e) { return e.theme.colors.textSubtle })),
                at = n(18);
            ! function(e) { e.START = "start", e.CHANGE = "change", e.REMOVE = "remove", e.APPROVE = "approve" }(Xe || (Xe = {}));
            var st, ot, lt, bt, ut, jt, dt, pt, Ot, xt, ft, mt, ht, vt, gt, Ct, yt = function(e, t) {
                    switch (t.type) {
                        case "set_view":
                            return Object(T.a)(Object(T.a)({}, e), {}, { currentView: t.view, previousView: e.currentView });
                        case "go_previous":
                            return Object(T.a)(Object(T.a)({}, e), {}, { currentView: e.previousView, previousView: e.currentView });
                        default:
                            return e
                    }
                },
                wt = function() {
                    var e = Object(b.useReducer)(yt, { currentView: Xe.START, previousView: null }),
                        t = Object(S.a)(e, 2),
                        n = t[0],
                        r = t[1];
                    return Object(T.a)(Object(T.a)({}, n), {}, { goToStart: function() { return r({ type: "set_view", view: Xe.START }) }, goToChange: function() { return r({ type: "set_view", view: Xe.CHANGE }) }, goToRemove: function() { return r({ type: "set_view", view: Xe.REMOVE }) }, goToApprove: function() { return r({ type: "set_view", view: Xe.APPROVE }) }, goPrevious: function() { return r({ type: "go_previous" }) } })
                },
                kt = n(30),
                St = n(54),
                Tt = n(52),
                At = n(266),
                Et = function() {
                    var e = Object(C.b)().t,
                        t = Object(b.useState)({ numberCakeToReactivate: St.a.BigNumber.from(0), numberCakeToRegister: St.a.BigNumber.from(0), numberCakeToUpdate: St.a.BigNumber.from(0) }),
                        n = Object(S.a)(t, 2),
                        r = n[0],
                        c = n[1],
                        i = Object(de.a)().toastError;
                    return Object(b.useEffect)((function() {
                        (function() {
                            var t = Object(k.a)(w.a.mark((function t() {
                                var n, r, a, s, o, l, b, u, j;
                                return w.a.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, n = ["numberCakeToReactivate", "numberCakeToRegister", "numberCakeToUpdate"].map((function(e) { return { address: Object(be.o)(), name: e } })), t.next = 4, Object(Tt.b)(At, n);
                                        case 4:
                                            r = t.sent, a = Object(S.a)(r, 3), s = Object(S.a)(a[0], 1), o = s[0], l = Object(S.a)(a[1], 1), b = l[0], u = Object(S.a)(a[2], 1), j = u[0], c({ numberCakeToReactivate: o, numberCakeToRegister: b, numberCakeToUpdate: j }), t.next = 18;
                                            break;
                                        case 15:
                                            t.prev = 15, t.t0 = t.catch(0), i(e("Error"), e("Could not retrieve CAKE costs for profile"));
                                        case 18:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, null, [
                                    [0, 15]
                                ])
                            })));
                            return function() { return t.apply(this, arguments) }
                        })()()
                    }), [c, i, e]), r
                },
                It = n(814),
                Qt = Object(v.e)(g.p).attrs({ variant: "secondary" })(st || (st = Object(h.a)(["\n  border-color: ", ";\n  color: ", ";\n  margin-bottom: 24px;\n\n  &:hover:not(:disabled):not(.button--disabled):not(:active) {\n    border-color: ", ";\n    opacity: 0.8;\n  }\n"])), (function(e) { return e.theme.colors.failure }), (function(e) { return e.theme.colors.failure }), (function(e) { return e.theme.colors.failure })),
                Rt = v.e.div(ot || (ot = Object(h.a)(["\n  height: 64px;\n  width: 64px;\n\n  ", " {\n    height: 128px;\n    width: 128px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm })),
                Dt = function(e) {
                    var t = e.goToApprove,
                        n = e.goToChange,
                        r = e.goToRemove,
                        c = e.onDismiss,
                        i = Object(b.useState)(null),
                        a = Object(S.a)(i, 2),
                        s = a[0],
                        o = a[1],
                        l = Object(O.b)().profile,
                        u = Et(),
                        d = u.numberCakeToUpdate,
                        p = u.numberCakeToReactivate,
                        x = l.isActive ? d : p,
                        f = Object(G.e)(),
                        m = f.balance,
                        h = f.fetchStatus === G.a.SUCCESS && m.gte(x),
                        v = Object(C.b)().t,
                        y = Object(j.c)().account,
                        T = Object(Y.c)(),
                        A = l.isActive ? d : p;
                    return Object(b.useEffect)((function() {
                        y && function() {
                            var e = Object(k.a)(w.a.mark((function e() {
                                var t;
                                return w.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, T.allowance(y, Object(be.o)());
                                        case 2:
                                            t = e.sent, o(t.lt(A));
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() { return e.apply(this, arguments) }
                        }()()
                    }), [y, A, o, T]), l ? Object(D.jsxs)(g.R, { alignItems: "center", justifyContent: "center", flexDirection: "column", children: [Object(D.jsx)(Rt, { children: Object(D.jsx)(It.a, { profile: l }) }), Object(D.jsx)(g.R, { alignItems: "center", style: { height: "48px" }, justifyContent: "center", children: Object(D.jsx)(g.Qb, { as: "p", color: "failure", children: !h && v("%minimum% CAKE required to change profile pic", { minimum: Object(kt.a)(x) }) }) }), l.isActive ? Object(D.jsxs)(D.Fragment, { children: [Object(D.jsx)(g.p, { width: "100%", mb: "8px", onClick: !0 === s ? t : n, disabled: !h || null === s, children: v("Change Profile Pic") }), Object(D.jsx)(Qt, { width: "100%", onClick: r, children: v("Remove Profile Pic") })] }) : Object(D.jsx)(g.p, { width: "100%", mb: "8px", onClick: !0 === s ? t : n, disabled: !h || null === s, children: v("Reactivate Profile") }), Object(D.jsx)(g.p, { variant: "text", width: "100%", onClick: c, children: v("Close Window") })] }) : null
                },
                Pt = function(e) {
                    var t = e.onDismiss,
                        n = Object(b.useState)(!1),
                        r = Object(S.a)(n, 2),
                        c = r[0],
                        i = r[1],
                        a = Object(b.useState)(!1),
                        s = Object(S.a)(a, 2),
                        o = s[0],
                        l = s[1],
                        u = Object(O.b)().profile,
                        d = Et().numberCakeToReactivate,
                        p = Object(C.b)().t,
                        x = Object(Y.p)(),
                        m = Object(B.a)().callWithGasPrice,
                        h = Object(j.c)().account,
                        v = Object(de.a)(),
                        y = v.toastSuccess,
                        T = v.toastError,
                        A = Object(f.b)(),
                        E = function() {
                            var e = Object(k.a)(w.a.mark((function e() {
                                var n, r;
                                return w.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, m(x, "pauseProfile");
                                        case 2:
                                            return n = e.sent, l(!0), e.next = 6, n.wait();
                                        case 6:
                                            if (!(r = e.sent).status) { e.next = 14; break }
                                            return e.next = 10, A(Object(Ye.c)(h));
                                        case 10:
                                            y(p("Profile Paused!"), Object(D.jsx)(Ge.b, { txHash: r.transactionHash })), t(), e.next = 16;
                                            break;
                                        case 14:
                                            T(p("Error"), p("Please try again. Confirm the transaction and make sure you are paying enough gas!")), l(!1);
                                        case 16:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() { return e.apply(this, arguments) }
                        }();
                    return u ? Object(D.jsxs)(D.Fragment, { children: [Object(D.jsx)(g.Qb, { as: "p", color: "failure", mb: "24px", children: p("This will suspend your profile and send your Collectible back to your wallet") }), Object(D.jsx)(g.Qb, { as: "p", color: "textSubtle", mb: "24px", children: p("While your profile is suspended, you won't be able to earn points, but your achievements and points will stay associated with your profile") }), Object(D.jsx)(g.Qb, { as: "p", color: "textSubtle", mb: "24px", children: p("Cost to reactivate in the future: %cost% CAKE", { cost: Object(kt.a)(d) }) }), Object(D.jsx)("label", { htmlFor: "acknowledgement", style: { cursor: "pointer", display: "block", marginBottom: "24px" }, children: Object(D.jsxs)(g.R, { alignItems: "center", children: [Object(D.jsx)(g.A, { id: "acknowledgement", checked: c, onChange: function() { return i(!c) }, scale: "sm" }), Object(D.jsx)(g.Qb, { ml: "8px", children: p("I understand") })] }) }), Object(D.jsx)(g.p, { width: "100%", isLoading: o, endIcon: o ? Object(D.jsx)(g.i, { spin: !0, color: "currentColor" }) : null, disabled: !c || o, onClick: E, mb: "8px", children: p("Confirm") }), Object(D.jsx)(g.p, { variant: "text", width: "100%", onClick: t, children: p("Close Window") })] }) : null
                },
                Nt = function(e) {
                    var t = e.onDismiss,
                        n = Object(b.useState)({ tokenId: null, nftAddress: null }),
                        r = Object(S.a)(n, 2),
                        c = r[0],
                        i = r[1],
                        a = Object(C.b)().t,
                        s = je(),
                        o = s.isLoading,
                        l = s.tokenIds,
                        u = s.nftsInWallet,
                        d = Object(f.b)(),
                        p = Object(O.b)().profile,
                        x = Object(Y.p)(),
                        m = Object(j.c)(),
                        h = m.account,
                        v = m.library,
                        y = Object(de.a)().toastSuccess,
                        T = Object(B.a)().callWithGasPrice,
                        E = Object(H.a)({
                            onApprove: function() { var e = Object(A.l)(c.nftAddress, v.getSigner()); return T(e, "approve", [Object(be.o)(), c.tokenId]) },
                            onConfirm: function() { return p.isActive ? T(x, "updateProfile", [c.nftAddress, c.tokenId]) : T(x, "reactivateProfile", [c.nftAddress, c.tokenId]) },
                            onSuccess: function() {
                                var e = Object(k.a)(w.a.mark((function e(n) {
                                    var r;
                                    return w.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return r = n.receipt, e.next = 3, d(Object(Ye.c)(h));
                                            case 3:
                                                y(a("Profile Updated!"), Object(D.jsx)(Ge.b, { txHash: r.transactionHash })), t();
                                            case 5:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })));
                                return function(t) { return e.apply(this, arguments) }
                            }()
                        }),
                        I = E.isApproving,
                        Q = E.isApproved,
                        R = E.isConfirmed,
                        P = E.isConfirming,
                        N = E.handleApprove,
                        F = E.handleConfirm;
                    return Object(D.jsxs)(D.Fragment, { children: [Object(D.jsx)(g.Qb, { as: "p", color: "textSubtle", mb: "24px", children: a("Choose a new Collectible to use as your profile pic.") }), o ? Object(D.jsx)(g.Db, { height: "80px", mb: "16px" }) : u.map((function(e) { var t = Object(S.a)(l[e.identifier], 1)[0]; return Object(D.jsx)(re, { name: "profilePicture", value: t, image: "/images/nfts/".concat(e.images.md), isChecked: t === c.tokenId, onChange: function(e) { i({ tokenId: Number(e), nftAddress: Object(le.a)() }) }, disabled: I || P || R, children: Object(D.jsx)(g.Qb, { bold: !0, children: e.name }) }, e.identifier) })), !o && 0 === u.length && Object(D.jsxs)(D.Fragment, { children: [Object(D.jsx)(g.Qb, { as: "p", color: "textSubtle", mb: "16px", children: a("Sorry! You don\u2019t have any eligible Collectibles in your wallet to use!") }), Object(D.jsx)(g.Qb, { as: "p", color: "textSubtle", mb: "24px", children: a("Make sure you have a Pancake Collectible in your wallet and try again!") })] }), Object(D.jsx)(X.b, { isApproveDisabled: R || P || Q || null === c.tokenId, isApproving: I, isConfirmDisabled: !Q || R || null === c.tokenId, isConfirming: P, onApprove: N, onConfirm: F }), Object(D.jsx)(g.p, { variant: "text", width: "100%", onClick: t, disabled: I || P, children: a("Close Window") })] })
                },
                Ft = function(e) {
                    var t = e.goToChange,
                        n = e.onDismiss,
                        r = Object(b.useState)(!1),
                        c = Object(S.a)(r, 2),
                        i = c[0],
                        a = c[1],
                        s = Object(O.b)().profile,
                        o = Object(C.b)().t,
                        l = Et(),
                        u = l.numberCakeToUpdate,
                        j = l.numberCakeToReactivate,
                        d = Object(Y.c)(),
                        p = Object(de.a)().toastError,
                        x = s.isActive ? u : j,
                        f = function() {
                            var e = Object(k.a)(w.a.mark((function e() {
                                var n;
                                return w.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, d.approve(Object(be.o)(), x.mul(2).toString());
                                        case 2:
                                            return n = e.sent, a(!0), e.next = 6, n.wait();
                                        case 6:
                                            e.sent.status ? t() : (p(o("Error"), o("Please try again. Confirm the transaction and make sure you are paying enough gas!")), a(!1));
                                        case 8:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() { return e.apply(this, arguments) }
                        }();
                    return s ? Object(D.jsxs)(g.R, { flexDirection: "column", children: [Object(D.jsxs)(g.R, { alignItems: "center", justifyContent: "space-between", mb: "24px", children: [Object(D.jsx)(g.Qb, { children: s.isActive ? o("Cost to update:") : o("Cost to reactivate:") }), Object(D.jsxs)(g.Qb, { children: [Object(kt.a)(x), " CAKE"] })] }), Object(D.jsx)(g.p, { disabled: i, isLoading: i, endIcon: i ? Object(D.jsx)(g.i, { spin: !0, color: "currentColor" }) : null, width: "100%", mb: "8px", onClick: f, children: o("Enable") }), Object(D.jsx)(g.p, { variant: "text", width: "100%", onClick: n, disabled: i, children: o("Close Window") })] }) : null
                },
                zt = (lt = {}, Object(at.a)(lt, Xe.START, "Edit Profile"), Object(at.a)(lt, Xe.CHANGE, "Change Profile Pic"), Object(at.a)(lt, Xe.REMOVE, "Remove Profile Pic"), Object(at.a)(lt, Xe.APPROVE, "Enable CAKE"), lt),
                _t = function(e) {
                    var t = e.onDismiss,
                        n = wt(),
                        r = n.currentView,
                        c = n.goToChange,
                        i = n.goToRemove,
                        a = n.goToApprove,
                        s = n.goPrevious,
                        o = Object(C.b)().t,
                        l = zt[r],
                        b = r === Xe.START,
                        u = b ? null : function() { return s() };
                    return Object(D.jsx)(g.ib, { title: o(l), onBack: u, onDismiss: t, hideCloseButton: !b, children: Object(D.jsxs)("div", { style: { maxWidth: "400px" }, children: [r === Xe.START && Object(D.jsx)(Dt, { goToApprove: a, goToChange: c, goToRemove: i, onDismiss: t }), r === Xe.REMOVE && Object(D.jsx)(Pt, { onDismiss: t }), r === Xe.CHANGE && Object(D.jsx)(Nt, { onDismiss: t }), r === Xe.APPROVE && Object(D.jsx)(Ft, { goToChange: c, onDismiss: t })] }) })
                },
                Lt = function() {
                    var e = Object(C.b)().t,
                        t = rt(),
                        n = t.canClaim,
                        r = t.checkClaimStatus,
                        c = Object(g.kc)(Object(D.jsx)(ct, { onSuccess: r })),
                        i = Object(S.a)(c, 1)[0],
                        a = Object(g.kc)(Object(D.jsx)(_t, {}), !1),
                        s = Object(S.a)(a, 1)[0],
                        o = Object(O.b)().hasProfile;
                    return Object(D.jsx)(it, { children: Object(D.jsxs)(g.R, { flexDirection: ["column", null, "row"], alignItems: ["start", null, "center"], justifyContent: "space-between", children: [Object(D.jsxs)("div", { children: [Object(D.jsx)(g.T, { as: "h1", scale: "xxl", mb: "8px", color: "secondary", children: e("Your Profile") }), Object(D.jsx)(g.T, { as: "h2", scale: "lg", mb: "16px", children: e("Check your stats and collect achievements") }), o && Object(D.jsx)(g.p, { onClick: s, children: e("Edit Profile") })] }), n && Object(D.jsx)(g.p, { variant: "tertiary", onClick: i, startIcon: Object(D.jsx)(g.xb, {}), children: e("You\u2019ve got a gift to claim!") })] }) })
                },
                Mt = ["badge"],
                Wt = Object(v.e)(g.o)(bt || (bt = Object(h.a)(["\n  height: 48px;\n  width: 48px;\n\n  ", " {\n    height: 64px;\n    width: 64px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm })),
                Ut = v.e.img(ut || (ut = Object(h.a)(["\n  height: 48px;\n  width: 48px;\n\n  ", " {\n    height: 64px;\n    width: 64px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm })),
                qt = function(e) {
                    var t = e.badge,
                        n = Object(J.a)(e, Mt);
                    return t ? Object(D.jsx)(Ut, Object(T.a)({ src: "/images/achievements/".concat(t), alt: "achievement badge" }, n)) : Object(D.jsx)(Wt, {})
                },
                Vt = ["title"],
                Ht = function(e) {
                    var t = e.title,
                        n = Object(J.a)(e, Vt),
                        r = Object(C.b)().t;
                    if ("string" === typeof t) return Object(D.jsx)(g.Qb, Object(T.a)(Object(T.a)({ bold: !0 }, n), {}, { children: t }));
                    var c = t.key,
                        i = t.data,
                        a = void 0 === i ? {} : i;
                    return Object(D.jsx)(g.Qb, Object(T.a)(Object(T.a)({ bold: !0 }, n), {}, { children: r(c, a) }))
                },
                Yt = ["description"],
                Gt = Object(v.e)(g.Qb).attrs({ as: "p", fontSize: "14px" })(jt || (jt = Object(h.a)(["\n  display: none;\n\n  ", " {\n    display: block;\n  }\n"])), (function(e) { return e.theme.mediaQueries.md })),
                Kt = function(e) {
                    var t = e.description,
                        n = Object(J.a)(e, Yt),
                        r = Object(C.b)().t;
                    if (!t) return null;
                    if ("string" === typeof t) return Object(D.jsx)(g.Qb, Object(T.a)(Object(T.a)({ as: "p", color: "textSubtle", fontSize: "14px" }, n), {}, { children: t }));
                    var c = t.key,
                        i = t.data,
                        a = void 0 === i ? {} : i;
                    return Object(D.jsx)(Gt, Object(T.a)(Object(T.a)({ color: "textSubtle" }, n), {}, { children: r(c, a) }))
                },
                Bt = Object(v.e)(g.R)(dt || (dt = Object(h.a)(["\n  flex: 1;\n  flex-direction: column;\n  justify-content: center;\n  padding-left: 8px;\n  padding-right: 8px;\n"]))),
                Xt = function(e) { var t = e.achievement; return Object(D.jsxs)(g.R, { children: [Object(D.jsx)(qt, { badge: t.badge }), Object(D.jsxs)(Bt, { children: [Object(D.jsx)(Ht, { title: t.title }), Object(D.jsx)(Kt, { description: t.description })] }), Object(D.jsxs)(g.R, { alignItems: "center", children: [Object(D.jsx)(g.yb, { width: "18px", color: "textSubtle", mr: "4px" }), Object(D.jsx)(g.Qb, { color: "textSubtle", children: t.points.toLocaleString() })] })] }) },
                Jt = v.e.div(pt || (pt = Object(h.a)(["\n  display: grid;\n  grid-gap: 16px;\n  grid-template-columns: 1fr;\n\n  ", " {\n    grid-template-columns: repeat(2, 1fr);\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm })),
                Zt = function() {
                    var e = Object(C.b)().t,
                        t = Object(x.c)((function(e) { return e.achievements.data }));
                    return Object(D.jsxs)(D.Fragment, { children: [Object(D.jsx)(Jt, { children: t.map((function(e) { return Object(D.jsx)(Xt, { achievement: e }, e.id) })) }), 0 === t.length && Object(D.jsx)(g.R, { alignItems: "center", justifyContent: "center", style: { height: "64px" }, children: Object(D.jsx)(g.T, { as: "h5", scale: "md", color: "textDisabled", children: e("No achievements yet!") }) })] })
                },
                $t = n(119),
                en = n(344),
                tn = v.e.div(Ot || (Ot = Object(h.a)(["\n  flex: none;\n  width: 100%;\n\n  ", " {\n    max-width: 160px;\n\n    & > button {\n      width: 100%;\n    }\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm })),
                nn = ["points"],
                rn = function(e) {
                    var t = e.points,
                        n = Object(J.a)(e, nn),
                        r = Object(C.b)().t,
                        c = t.toLocaleString();
                    return Object(D.jsxs)(g.R, Object(T.a)(Object(T.a)({ alignItems: "center" }, n), {}, { children: [Object(D.jsx)(g.yb, { mr: "4px", color: "textSubtle" }), Object(D.jsx)(g.Qb, { color: "textSubtle", children: r("%num% points", { num: c }) })] }))
                },
                cn = Object(v.e)(g.R)(xt || (xt = Object(h.a)(["\n  border-bottom: 1px solid ", ";\n  padding-bottom: 16px;\n  padding-top: 16px;\n"])), (function(e) { return e.theme.colors.cardBorder })),
                an = v.e.div(ft || (ft = Object(h.a)(["\n  flex: 1;\n"]))),
                sn = Object(v.e)(g.R)(mt || (mt = Object(h.a)(["\n  flex-direction: column;\n  flex: 1;\n  margin-left: 8px;\n\n  ", " {\n    align-items: center;\n    flex-direction: row;\n  }\n"])), (function(e) { return e.theme.mediaQueries.md })),
                on = function(e) {
                    var t = e.achievement,
                        n = e.onCollectSuccess,
                        r = Object(b.useState)(!1),
                        c = Object(S.a)(r, 2),
                        i = c[0],
                        a = c[1],
                        s = Object(C.b)().t,
                        o = Object(Y.o)(),
                        l = Object(de.a)(),
                        u = l.toastError,
                        j = l.toastSuccess,
                        d = Object(B.a)().callWithGasPrice,
                        p = function() {
                            var e = Object(k.a)(w.a.mark((function e() {
                                var r, c;
                                return w.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, d(o, "getPoints", [t.address]);
                                        case 2:
                                            return r = e.sent, a(!0), e.next = 6, r.wait();
                                        case 6:
                                            (c = e.sent).status ? (a(!1), n(t), j(s("Points Collected!"), Object(D.jsx)(Ge.b, { txHash: c.transactionHash }))) : (u(s("Error"), s("Please try again. Confirm the transaction and make sure you are paying enough gas!")), a(!1));
                                        case 8:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() { return e.apply(this, arguments) }
                        }();
                    return Object(D.jsxs)(cn, { children: [Object(D.jsx)(qt, { badge: t.badge }), Object(D.jsxs)(sn, { children: [Object(D.jsxs)(an, { children: [Object(D.jsx)(Ht, { title: t.title }), Object(D.jsx)(Kt, { description: t.description })] }), Object(D.jsx)(rn, { points: t.points, px: [0, null, null, "32px"], mb: ["16px", null, null, 0] }), Object(D.jsx)(tn, { children: Object(D.jsx)(g.p, { onClick: p, isLoading: i, endIcon: i ? Object(D.jsx)(g.i, { spin: !0, color: "currentColor" }) : null, disabled: i, variant: "secondary", children: s("Collect") }) })] })] })
                },
                ln = function() {
                    var e = Object(b.useState)([]),
                        t = Object(S.a)(e, 2),
                        n = t[0],
                        r = t[1],
                        c = Object(C.b)().t,
                        i = Object(f.b)(),
                        a = Object(O.b)().profile,
                        s = Object(j.c)().account;
                    Object(b.useEffect)((function() {
                        s && function() {
                            var e = Object(k.a)(w.a.mark((function e() {
                                var t;
                                return w.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, Object(en.c)(s);
                                        case 2:
                                            t = e.sent, r(t);
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() { return e.apply(this, arguments) }
                        }()()
                    }), [s, i, r]);
                    var o = function(e) { i(Object(m.a)(e)), i(Object(Ye.a)(e.points)), r((function(t) { return t.filter((function(t) { return t.id !== e.id })) })) };
                    if (!(null === a || void 0 === a ? void 0 : a.isActive)) return null;
                    if (0 === n.length) return null;
                    var l = Object($t.sumBy)(n, "points");
                    return Object(D.jsxs)(g.t, { isActive: !0, mb: "32px", children: [Object(D.jsx)(g.w, { children: Object(D.jsx)(g.R, { flexDirection: ["column", null, "row"], justifyContent: ["start", null, "space-between"], children: Object(D.jsxs)(g.R, { alignItems: "center", mb: ["16px", null, 0], children: [Object(D.jsx)(g.yb, { width: "32px", mr: "8px" }), Object(D.jsx)(g.T, { scale: "lg", children: c("%num% Points to Collect", { num: l }) })] }) }) }), Object(D.jsx)(g.u, { children: n.map((function(e) { return Object(D.jsx)(on, { achievement: e, onCollectSuccess: o }, e.address) })) })] })
                },
                bn = function(e) {
                    var t = e.children,
                        n = Object(C.b)().t;
                    return Object(D.jsxs)(g.R, { flexDirection: "column", alignItems: "center", justifyContent: "center", p: "24px", children: [Object(D.jsx)(g.o, { width: "72px", height: "72px" }), Object(D.jsx)(g.T, { as: "h5", scale: "md", color: "textDisabled", children: t || n("Coming Soon!") })] })
                },
                un = function(e) {
                    var t = e.activeIndex,
                        n = void 0 === t ? 0 : t,
                        r = Object(C.b)().t;
                    return Object(D.jsxs)(D.Fragment, { children: [Object(D.jsx)(g.R, { mb: "24px", children: Object(D.jsx)(oe.a, { to: "/teams", children: Object(D.jsxs)(g.R, { alignItems: "center", children: [Object(D.jsx)(g.E, { color: "primary" }), Object(D.jsx)(g.Qb, { color: "primary", children: r("Teams Overview") })] }) }) }), Object(D.jsx)(g.R, { mb: "24px", justifyContent: "center", children: Object(D.jsxs)(g.q, { activeIndex: n, variant: "subtle", scale: "sm", children: [Object(D.jsx)(g.r, { as: oe.a, to: "/profile/tasks", children: r("Task Center") }), Object(D.jsx)(g.r, { as: oe.a, to: "/profile", children: r("Public Profile") })] }) })] })
                },
                jn = function() { var e = Object(C.b)().t; return Object(D.jsxs)(D.Fragment, { children: [Object(D.jsx)(un, {}), Object(D.jsx)(ln, {}), Object(D.jsxs)(g.t, { mb: "32px", children: [Object(D.jsx)(g.w, { children: Object(D.jsx)(g.R, { alignItems: "center", justifyContent: "space-between", children: Object(D.jsxs)("div", { children: [Object(D.jsx)(g.T, { scale: "lg", mb: "8px", children: e("Achievements") }), Object(D.jsx)(g.Qb, { as: "p", children: e("Earn more points for completing larger quests!") })] }) }) }), Object(D.jsx)(g.u, { children: Object(D.jsx)(Zt, {}) })] }), Object(D.jsxs)(g.t, { mb: "32px", children: [Object(D.jsx)(g.w, { children: Object(D.jsx)(g.R, { alignItems: "center", justifyContent: "space-between", children: Object(D.jsxs)("div", { children: [Object(D.jsx)(g.T, { scale: "lg", mb: "8px", children: e("Task Center") }), Object(D.jsx)(g.Qb, { as: "p", children: e("Earn points by completing regular tasks!") }), Object(D.jsx)(g.Qb, { as: "p", children: e("Collecting points for these tasks makes them available again.") })] }) }) }), Object(D.jsx)(g.u, { children: Object(D.jsx)(bn, {}) })] })] }) },
                dn = n(46),
                pn = n(37),
                On = Object(v.e)(g.w)(ht || (ht = Object(h.a)(["\n  background: ", ";\n  position: relative;\n"])), (function(e) { return function(e) { return e.isDark ? "linear-gradient(139.73deg, #142339 0%, #24243D 47.4%, #37273F 100%)" : "linear-gradient(139.73deg, #6ed1d5 0%, #EFF4F5 46.87%, #F3EFFF 100%)" }(e.theme) })),
                xn = v.e.img(vt || (vt = Object(h.a)(["\n  border-radius: 4px;\n  margin-bottom: 8px;\n"]))),
                fn = function(e) { var t = e.nft; return Object(D.jsxs)("div", { children: [Object(D.jsx)(xn, { src: "/images/nfts/".concat(t.images.lg) }), Object(D.jsx)(g.Qb, { bold: !0, mb: "8px", children: t.name }), Object(D.jsx)(g.Qb, { as: "p", fontSize: "12px", color: "textSubtle", children: t.description })] }) },
                mn = v.e.div(gt || (gt = Object(h.a)(["\n  display: grid;\n  grid-gap: 16px;\n  grid-template-columns: repeat(2, 1fr);\n  padding: 16px 0;\n\n  ", " {\n    grid-gap: 24px;\n    grid-template-columns: repeat(3, 1fr);\n    padding: 24px 0;\n  }\n\n  ", " {\n    grid-template-columns: repeat(4, 1fr);\n  }\n\n  ", " {\n    grid-template-columns: repeat(5, 1fr);\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm }), (function(e) { return e.theme.mediaQueries.md }), (function(e) { return e.theme.mediaQueries.lg })),
                hn = function() {
                    var e = Object(C.b)().t,
                        t = je().nftsInWallet;
                    return Object(D.jsxs)(D.Fragment, { children: [Object(D.jsx)(g.T, { as: "h4", scale: "md", mb: "8px", children: e("Pancake Collectibles") }), Object(D.jsx)(g.Qb, { as: "p", children: e(" Collectibles are special ERC-721 NFTs that can be used on platform.") }), Object(D.jsx)(g.Qb, { as: "p", children: e("NFTs in this user\u2019s wallet that aren\u2019t approved Pancake Collectibles won\u2019t be shown here.") }), t.length > 0 && Object(D.jsx)(mn, { children: t.map((function(e) { return Object(D.jsx)(fn, { nft: e }, e.identifier) })) }), 0 === t.length && Object(D.jsx)(g.R, { justifyContent: "center", p: "32px", children: Object(D.jsx)(g.Qb, { fontSize: "20px", bold: !0, color: "textDisabled", children: e("No NFTs Found") }) }), Object(D.jsxs)(g.R, { alignItems: "center", justifyContent: "flex-end", children: [Object(D.jsx)(oe.a, { to: "/collectibles", children: e("See all approved Pancake Collectibles") }), Object(D.jsx)(g.F, {})] })] })
                },
                vn = Object(v.e)(g.Qb)(Ct || (Ct = Object(h.a)(["\n  border: 2px solid ", ";\n  border-radius: 16px;\n"])), (function(e) { return e.theme.colors.tertiary }));
            vn.defaultProps = { p: "24px" };
            var gn, Cn, yn, wn, kn, Sn, Tn, An, En, In = vn,
                Qn = ["icon", "title", "subtitle", "isDisabled"],
                Rn = function(e) {
                    var t = e.icon,
                        n = e.title,
                        r = e.subtitle,
                        c = e.isDisabled,
                        i = void 0 !== c && c,
                        a = Object(J.a)(e, Qn);
                    return Object(D.jsx)(In, Object(T.a)(Object(T.a)({}, a), {}, { children: Object(D.jsxs)(g.R, { alignItems: "start", children: [Object(D.jsx)(t, { width: "44px", mr: "24px", color: i ? "textDisabled" : "currentColor" }), Object(D.jsxs)("div", { children: [Object(D.jsx)(g.T, { as: "h3", scale: "xl", color: i ? "textDisabled" : "text", children: n }), Object(D.jsx)(g.Qb, { textTransform: "uppercase", color: i ? "textDisabled" : "textSubtle", fontSize: "12px", bold: !0, children: r })] })] }) }))
                },
                Dn = v.e.div(gn || (gn = Object(h.a)(["\n  background: rgba(0, 0, 0, 0.6) url('/images/camera.svg') no-repeat center center;\n  background-size: 24px;\n  border-radius: 50%;\n  left: 0;\n  height: 100%;\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  transition: opacity 300ms;\n  width: 100%;\n  z-index: 3;\n\n  ", " {\n    background-size: 48px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm })),
                Pn = v.e.div(Cn || (Cn = Object(h.a)(["\n  position: relative;\n\n  &:hover {\n    cursor: pointer;\n\n    ", " {\n      opacity: 1;\n    }\n  }\n"])), Dn),
                Nn = v.e.div(yn || (yn = Object(h.a)(["\n  height: 64px;\n  width: 64px;\n\n  ", " {\n    height: 128px;\n    width: 128px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm })),
                Fn = function(e) {
                    var t = e.profile,
                        n = Object(g.kc)(Object(D.jsx)(_t, {}), !1),
                        r = Object(S.a)(n, 1)[0];
                    return Object(D.jsxs)(Pn, { onClick: r, children: [Object(D.jsx)(Nn, { children: Object(D.jsx)(It.a, { profile: t }) }), Object(D.jsx)(Dn, {})] })
                },
                zn = v.e.div(wn || (wn = Object(h.a)(["\n  flex: 1;\n  padding: 16px 0;\n\n  ", " {\n    padding: 0 16px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm })),
                _n = Object(v.e)(g.T)(kn || (kn = Object(h.a)(["\n  font-size: 16px;\n  line-height: 24px;\n  margin-bottom: 8px;\n\n  ", " {\n    font-size: 40px;\n    line-height: 44px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm })),
                Ln = v.e.div(Sn || (Sn = Object(h.a)(["\n  position: absolute;\n  right: 24px;\n  top: 24px;\n"]))),
                Mn = Object(v.e)(g.Qb)(Tn || (Tn = Object(h.a)(["\n  font-size: 12px;\n\n  ", " {\n    font-size: 16px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm })),
                Wn = Object(v.e)(g.Z)(An || (An = Object(h.a)(["\n  display: inline-block;\n  font-weight: 400;\n  font-size: 12px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: 80px;\n  white-space: nowrap;\n\n  ", " {\n    font-size: 16px;\n    width: auto;\n  }\n"])), (function(e) { return e.theme.mediaQueries.sm })),
                Un = v.e.div(En || (En = Object(h.a)(["\n  margin-bottom: 40px;\n"]))),
                qn = function() {
                    var e = Object(j.c)().account,
                        t = Object(O.b)().profile,
                        n = Object(dn.t)(),
                        r = Object(S.a)(n, 2),
                        c = r[0],
                        i = r[1],
                        a = Object(C.b)().t;
                    if (!e) return Object(D.jsx)(V, {});
                    var s = t.username,
                        o = t.team,
                        l = t.isActive,
                        b = t.points,
                        u = c ? g.ac : g.bc;
                    return Object(D.jsxs)(D.Fragment, { children: [Object(D.jsx)(un, { activeIndex: 1 }), Object(D.jsx)("div", { children: Object(D.jsxs)(g.t, { children: [Object(D.jsxs)(On, { children: [Object(D.jsxs)(g.R, { alignItems: ["start", null, "center"], flexDirection: ["column", null, "row"], children: [Object(D.jsx)(Fn, { profile: t }), Object(D.jsxs)(zn, { children: [Object(D.jsxs)(g.R, { alignItems: "center", children: [Object(D.jsxs)(_n, { children: ["@", c ? s : s.replace(/./g, "*")] }), Object(D.jsx)(u, { ml: "4px", onClick: function() { i(!c) }, cursor: "pointer" })] }), Object(D.jsx)(g.R, { alignItems: "center", children: Object(D.jsxs)(Wn, { href: Object(pn.e)(e, "address"), color: "text", external: !0, children: [e, Object(D.jsx)(g.sb, { ml: "4px" })] }) }), Object(D.jsx)(Mn, { bold: !0, children: o.name })] })] }), Object(D.jsx)(Ln, { children: l ? Object(D.jsx)(g.Pb, { startIcon: Object(D.jsx)(g.B, { width: "18px" }), outline: !0, children: a("Active") }) : Object(D.jsx)(g.Pb, { variant: "failure", startIcon: Object(D.jsx)(g.l, { width: "18px" }), outline: !0, children: a("Paused") }) })] }), Object(D.jsxs)(g.u, { children: [Object(D.jsx)(Rn, { icon: g.yb, title: b, subtitle: a("Points"), mb: "24px" }), Object(D.jsxs)(Un, { children: [Object(D.jsx)(g.T, { as: "h4", scale: "md", mb: "16px", children: a("Achievements") }), Object(D.jsx)(Zt, {})] }), Object(D.jsx)(hn, {})] })] }) })] })
                };
            t.default = function() {
                var e = Object(O.b)(),
                    t = e.isInitialized,
                    n = e.isLoading,
                    r = e.hasProfile,
                    c = Object(j.c)().account;
                return function() {
                    var e = Object(j.c)().account,
                        t = Object(f.b)();
                    Object(b.useEffect)((function() { e && t(Object(m.c)(e)) }), [e, t])
                }(), !t || n ? Object(D.jsx)(p.a, {}) : c && !r ? Object(D.jsx)(d.b, { children: Object(D.jsx)(nt, {}) }) : Object(D.jsxs)(d.b, { children: [Object(D.jsx)(Lt, {}), Object(D.jsx)(u.b, { exact: !0, path: "/profile", children: Object(D.jsx)(qn, {}) }), Object(D.jsx)(u.b, { path: "/profile/tasks", children: Object(D.jsx)(jn, {}) })] })
            }
        },
        787: function(e, t, n) {
            "use strict";
            var r = n(3),
                c = n.n(r),
                i = n(12),
                a = n(9),
                s = n(6),
                o = n(1),
                l = n(119),
                b = n(42),
                u = n(92),
                j = n(13),
                d = { approvalState: "idle", confirmState: "idle" },
                p = function(e, t) {
                    switch (t.type) {
                        case "requires_approval":
                            return Object(s.a)(Object(s.a)({}, e), {}, { approvalState: "success" });
                        case "approve_sending":
                            return Object(s.a)(Object(s.a)({}, e), {}, { approvalState: "loading" });
                        case "approve_receipt":
                            return Object(s.a)(Object(s.a)({}, e), {}, { approvalState: "success" });
                        case "approve_error":
                            return Object(s.a)(Object(s.a)({}, e), {}, { approvalState: "fail" });
                        case "confirm_sending":
                            return Object(s.a)(Object(s.a)({}, e), {}, { confirmState: "loading" });
                        case "confirm_receipt":
                            return Object(s.a)(Object(s.a)({}, e), {}, { confirmState: "success" });
                        case "confirm_error":
                            return Object(s.a)(Object(s.a)({}, e), {}, { confirmState: "fail" });
                        default:
                            return e
                    }
                };
            t.a = function(e) {
                var t = e.onApprove,
                    n = e.onConfirm,
                    r = e.onRequiresApproval,
                    s = e.onSuccess,
                    O = void 0 === s ? l.noop : s,
                    x = e.onApproveSuccess,
                    f = void 0 === x ? l.noop : x,
                    m = Object(j.b)().t,
                    h = Object(b.c)().account,
                    v = Object(o.useReducer)(p, d),
                    g = Object(a.a)(v, 2),
                    C = g[0],
                    y = g[1],
                    w = Object(o.useRef)(r),
                    k = Object(u.a)().toastError;
                return Object(o.useEffect)((function() { h && w.current && w.current().then((function(e) { e && y({ type: "requires_approval" }) })) }), [h, w, y]), {
                    isApproving: "loading" === C.approvalState,
                    isApproved: "success" === C.approvalState,
                    isConfirming: "loading" === C.confirmState,
                    isConfirmed: "success" === C.confirmState,
                    handleApprove: function() {
                        var e = Object(i.a)(c.a.mark((function e() {
                            var n, r;
                            return c.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, t();
                                    case 3:
                                        return n = e.sent, y({ type: "approve_sending" }), e.next = 7, n.wait();
                                    case 7:
                                        (r = e.sent).status && (y({ type: "approve_receipt" }), f({ state: C, receipt: r })), e.next = 15;
                                        break;
                                    case 11:
                                        e.prev = 11, e.t0 = e.catch(0), y({ type: "approve_error" }), k(m("Error"), m("Please try again. Confirm the transaction and make sure you are paying enough gas!"));
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
                        var e = Object(i.a)(c.a.mark((function e() {
                            var t, r;
                            return c.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return y({ type: "confirm_sending" }), e.prev = 1, e.next = 4, n();
                                    case 4:
                                        return t = e.sent, e.next = 7, t.wait();
                                    case 7:
                                        (r = e.sent).status && (y({ type: "confirm_receipt" }), O({ state: C, receipt: r })), e.next = 15;
                                        break;
                                    case 11:
                                        e.prev = 11, e.t0 = e.catch(1), y({ type: "confirm_error" }), k(m("Error"), m("Please try again. Confirm the transaction and make sure you are paying enough gas!"));
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
            n.d(t, "a", (function() { return s }));
            var r, c, i, a, s, o = n(8),
                l = (n(1), n(5)),
                b = n(2),
                u = n(13),
                j = n(0);
            ! function(e) { e.ROW = "row", e.SEQUENTIAL = "sequential" }(s || (s = {}));
            var d = l.e.div(r || (r = Object(o.a)(["\n  align-items: center;\n  display: grid;\n  grid-template-columns: 1fr;\n  justify-content: center;\n\n  ", " {\n    grid-template-columns: 1fr 24px 1fr;\n  }\n"])), (function(e) { return e.theme.mediaQueries.md })),
                p = Object(l.e)(b.p)(c || (c = Object(o.a)(["\n  width: 100%;\n\n  ", " {\n    min-width: 160px;\n  }\n"])), (function(e) { return e.theme.mediaQueries.md })),
                O = { width: "24px", color: "textDisabled" },
                x = Object(l.e)(b.F).attrs(O)(i || (i = Object(o.a)(["\n  display: none;\n\n  ", " {\n    display: block;\n  }\n"])), (function(e) { return e.theme.mediaQueries.md })),
                f = Object(l.e)(b.D).attrs(O)(a || (a = Object(o.a)(["\n  display: block;\n\n  ", " {\n    display: none;\n  }\n"])), (function(e) { return e.theme.mediaQueries.md })),
                m = Object(j.jsx)(b.i, { spin: !0, color: "currentColor" });
            t.b = function(e) {
                var t = e.isApproveDisabled,
                    n = e.isApproving,
                    r = e.isConfirming,
                    c = e.isConfirmDisabled,
                    i = e.onApprove,
                    a = e.onConfirm,
                    o = e.buttonArrangement,
                    l = void 0 === o ? s.ROW : o,
                    O = e.confirmLabel,
                    h = e.confirmId,
                    v = Object(u.b)().t,
                    g = null !== O && void 0 !== O ? O : v("Confirm");
                return l === s.ROW ? Object(j.jsxs)(d, { children: [Object(j.jsx)(b.m, { children: Object(j.jsx)(p, { disabled: t, onClick: i, endIcon: n ? m : void 0, isLoading: n, children: v(n ? "Enabling" : "Enable") }) }), Object(j.jsxs)(b.R, { justifyContent: "center", children: [Object(j.jsx)(x, {}), Object(j.jsx)(f, {})] }), Object(j.jsx)(b.m, { children: Object(j.jsx)(p, { id: h, onClick: a, disabled: c, isLoading: r, endIcon: r ? m : void 0, children: r ? v("Confirming") : g }) })] }) : Object(j.jsx)(j.Fragment, { children: t ? Object(j.jsx)(b.m, { children: Object(j.jsx)(p, { id: h, onClick: a, disabled: c, isLoading: r, endIcon: r ? m : void 0, children: r ? v("Confirming") : g }) }) : Object(j.jsx)(b.m, { children: Object(j.jsx)(p, { onClick: i, endIcon: n ? m : void 0, isLoading: n, children: v(n ? "Enabling" : "Enable") }) }) })
            }
        },
        814: function(e, t, n) {
            "use strict";
            var r, c, i, a = n(8),
                s = (n(1), n(2)),
                o = n(5),
                l = n(0),
                b = o.e.img(r || (r = Object(a.a)(["\n  border: 1px solid ", ";\n  border-radius: 50%;\n  bottom: 0px;\n  position: absolute;\n  right: 0px;\n  min-width: 20px;\n  min-height: 20px;\n  width: 37.5%;\n  height: 37.5%;\n  z-index: 5;\n\n  ", " {\n    border-width: 2px;\n  }\n"])), (function(e) { return e.theme.card.background }), (function(e) { return e.theme.mediaQueries.sm })),
                u = o.e.div(c || (c = Object(a.a)(["\n  background: url('", "');\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 50%;\n  position: relative;\n  width: 100%;\n  height: 100%;\n\n  & > img {\n    border-radius: 50%;\n  }\n"])), (function(e) { return e.bg })),
                j = Object(o.e)(s.qb)(i || (i = Object(a.a)(["\n  width: 100%;\n  height: 100%;\n"])));
            t.a = function(e) { var t, n, r = e.profile; return Object(l.jsxs)(u, { bg: "/images/nfts/".concat(null === (t = r.nft) || void 0 === t || null === (n = t.images) || void 0 === n ? void 0 : n.md), children: [!r.isActive && Object(l.jsx)(j, {}), Object(l.jsx)(b, { src: "/images/teams/".concat(r.team.images.alt), alt: r.team.name })] }) }
        },
        815: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() { return i }));
            var r = n(20),
                c = n(15);

            function i(e, t) {
                Object(c.a)(2, arguments);
                var n = Object(r.default)(e),
                    i = Object(r.default)(t);
                return n.getTime() - i.getTime()
            }
        },
        817: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() { return i }));
            var r = n(20),
                c = n(15);

            function i(e, t) {
                Object(c.a)(2, arguments);
                var n = Object(r.default)(e),
                    i = Object(r.default)(t),
                    a = n.getTime() - i.getTime();
                return a < 0 ? -1 : a > 0 ? 1 : a
            }
        },
        835: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() { return c }));
            var r = n(379);

            function c(e) { return Object(r.a)({}, e) }
        },
        887: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() { return i }));
            var r = n(815),
                c = n(15);

            function i(e, t) { Object(c.a)(2, arguments); var n = Object(r.a)(e, t) / 1e3; return n > 0 ? Math.floor(n) : Math.ceil(n) }
        },
        888: function(e, t, n) {
            var r = n(482);
            e.exports = function(e, t) {
                var n = -1,
                    c = e.length,
                    i = c - 1;
                for (t = void 0 === t ? c : t; ++n < t;) {
                    var a = r(n, i),
                        s = e[a];
                    e[a] = e[n], e[n] = s
                }
                return e.length = t, e
            }
        },
        981: function(e, t, n) {
            var r = n(982),
                c = n(983),
                i = n(99);
            e.exports = function(e) { return (i(e) ? r : c)(e) }
        },
        982: function(e, t, n) {
            var r = n(489),
                c = n(888);
            e.exports = function(e) { return c(r(e)) }
        },
        983: function(e, t, n) {
            var r = n(888),
                c = n(483);
            e.exports = function(e) { return r(c(e)) }
        }
    }
]);
//# sourceMappingURL=5.2e381a9a.chunk.js.map