/*! For license information please see 4.174bdd8e.chunk.js.LICENSE.txt */
(this["webpackJsonppancake-frontend"] = this["webpackJsonppancake-frontend"] || []).push([
    [4], { 1e3: function(t, e, n) { var r = n(479),
                i = n(1001),
                o = n(247);
            t.exports = function(t) { return t && t.length ? r(t, o, i) : void 0 } }, 1001: function(t, e) { t.exports = function(t, e) { return t < e } }, 1002: function(t, e, n) { var r = n(481);
            t.exports = function(t) { return (null == t ? 0 : t.length) ? r(t, 1) : [] } }, 1003: function(t, e, n) { "use strict";
            t.exports = n(1004) }, 1004: function(t, e, n) { "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }); var r = "function" === typeof Symbol && Symbol.for,
                i = r ? Symbol.for("react.element") : 60103,
                o = r ? Symbol.for("react.portal") : 60106,
                a = r ? Symbol.for("react.fragment") : 60107,
                s = r ? Symbol.for("react.strict_mode") : 60108,
                u = r ? Symbol.for("react.profiler") : 60114,
                c = r ? Symbol.for("react.provider") : 60109,
                l = r ? Symbol.for("react.context") : 60110,
                h = r ? Symbol.for("react.async_mode") : 60111,
                f = r ? Symbol.for("react.concurrent_mode") : 60111,
                p = r ? Symbol.for("react.forward_ref") : 60112,
                d = r ? Symbol.for("react.suspense") : 60113,
                y = r ? Symbol.for("react.suspense_list") : 60120,
                v = r ? Symbol.for("react.memo") : 60115,
                g = r ? Symbol.for("react.lazy") : 60116,
                b = r ? Symbol.for("react.fundamental") : 60117,
                m = r ? Symbol.for("react.responder") : 60118,
                x = r ? Symbol.for("react.scope") : 60119;

            function w(t) { if ("object" === typeof t && null !== t) { var e = t.$$typeof; switch (e) {
                        case i:
                            switch (t = t.type) {
                                case h:
                                case f:
                                case a:
                                case u:
                                case s:
                                case d:
                                    return t;
                                default:
                                    switch (t = t && t.$$typeof) {
                                        case l:
                                        case p:
                                        case c:
                                            return t;
                                        default:
                                            return e } }
                        case g:
                        case v:
                        case o:
                            return e } } }

            function O(t) { return w(t) === f }
            e.typeOf = w, e.AsyncMode = h, e.ConcurrentMode = f, e.ContextConsumer = l, e.ContextProvider = c, e.Element = i, e.ForwardRef = p, e.Fragment = a, e.Lazy = g, e.Memo = v, e.Portal = o, e.Profiler = u, e.StrictMode = s, e.Suspense = d, e.isValidElementType = function(t) { return "string" === typeof t || "function" === typeof t || t === a || t === f || t === u || t === s || t === d || t === y || "object" === typeof t && null !== t && (t.$$typeof === g || t.$$typeof === v || t.$$typeof === c || t.$$typeof === l || t.$$typeof === p || t.$$typeof === b || t.$$typeof === m || t.$$typeof === x) }, e.isAsyncMode = function(t) { return O(t) || w(t) === h }, e.isConcurrentMode = O, e.isContextConsumer = function(t) { return w(t) === l }, e.isContextProvider = function(t) { return w(t) === c }, e.isElement = function(t) { return "object" === typeof t && null !== t && t.$$typeof === i }, e.isForwardRef = function(t) { return w(t) === p }, e.isFragment = function(t) { return w(t) === a }, e.isLazy = function(t) { return w(t) === g }, e.isMemo = function(t) { return w(t) === v }, e.isPortal = function(t) { return w(t) === o }, e.isProfiler = function(t) { return w(t) === u }, e.isStrictMode = function(t) { return w(t) === s }, e.isSuspense = function(t) { return w(t) === d } }, 1005: function(t, e, n) { var r = n(485),
                i = n(1006),
                o = n(1010),
                a = n(487),
                s = n(1011),
                u = n(480);
            t.exports = function(t, e, n) { var c = -1,
                    l = i,
                    h = t.length,
                    f = !0,
                    p = [],
                    d = p; if (n) f = !1, l = o;
                else if (h >= 200) { var y = e ? null : s(t); if (y) return u(y);
                    f = !1, l = a, d = new r } else d = e ? [] : p;
                t: for (; ++c < h;) { var v = t[c],
                        g = e ? e(v) : v; if (v = n || 0 !== v ? v : 0, f && g === g) { for (var b = d.length; b--;)
                            if (d[b] === g) continue t;
                        e && d.push(g), p.push(v) } else l(d, g, n) || (d !== p && d.push(g), p.push(v)) }
                return p } }, 1006: function(t, e, n) { var r = n(1007);
            t.exports = function(t, e) { return !!(null == t ? 0 : t.length) && r(t, e, 0) > -1 } }, 1007: function(t, e, n) { var r = n(891),
                i = n(1008),
                o = n(1009);
            t.exports = function(t, e, n) { return e === e ? o(t, e, n) : r(t, i, n) } }, 1008: function(t, e) { t.exports = function(t) { return t !== t } }, 1009: function(t, e) { t.exports = function(t, e, n) { for (var r = n - 1, i = t.length; ++r < i;)
                    if (t[r] === e) return r;
                return -1 } }, 1010: function(t, e) { t.exports = function(t, e, n) { for (var r = -1, i = null == t ? 0 : t.length; ++r < i;)
                    if (n(e, t[r])) return !0;
                return !1 } }, 1011: function(t, e, n) { var r = n(488),
                i = n(311),
                o = n(480),
                a = r && 1 / o(new r([, -0]))[1] == 1 / 0 ? function(t) { return new r(t) } : i;
            t.exports = a }, 1012: function(t, e, n) { "use strict";
            n.d(e, "a", (function() { return i })); var r = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

            function i(t) { if (!(e = r.exec(t))) throw new Error("invalid format: " + t); var e; return new o({ fill: e[1], align: e[2], sign: e[3], symbol: e[4], zero: e[5], width: e[6], comma: e[7], precision: e[8] && e[8].slice(1), trim: e[9], type: e[10] }) }

            function o(t) { this.fill = void 0 === t.fill ? " " : t.fill + "", this.align = void 0 === t.align ? ">" : t.align + "", this.sign = void 0 === t.sign ? "-" : t.sign + "", this.symbol = void 0 === t.symbol ? "" : t.symbol + "", this.zero = !!t.zero, this.width = void 0 === t.width ? void 0 : +t.width, this.comma = !!t.comma, this.precision = void 0 === t.precision ? void 0 : +t.precision, this.trim = !!t.trim, this.type = void 0 === t.type ? "" : t.type + "" }
            i.prototype = o.prototype, o.prototype.toString = function() { return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (void 0 === this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + (this.trim ? "~" : "") + this.type } }, 1013: function(t, e, n) { "use strict"; var r = n(843);
            e.a = function(t) { var e = t,
                    n = t;

                function i(t, e, r, i) { for (null == r && (r = 0), null == i && (i = t.length); r < i;) { var o = r + i >>> 1;
                        n(t[o], e) < 0 ? r = o + 1 : i = o } return r } return 1 === t.length && (e = function(e, n) { return t(e) - n }, n = function(t) { return function(e, n) { return Object(r.a)(t(e), n) } }(t)), { left: i, center: function(t, n, r, o) { null == r && (r = 0), null == o && (o = t.length); var a = i(t, n, r, o - 1); return a > r && e(t[a - 1], n) > -e(t[a], n) ? a - 1 : a }, right: function(t, e, r, i) { for (null == r && (r = 0), null == i && (i = t.length); r < i;) { var o = r + i >>> 1;
                            n(t[o], e) > 0 ? i = o : r = o + 1 } return r } } } }, 1014: function(t, e, n) { var r = n(486),
                i = n(244),
                o = n(1015),
                a = n(99),
                s = n(367);
            t.exports = function(t, e, n) { var u = a(t) ? r : o; return n && s(t, e, n) && (e = void 0), u(t, i(e, 3)) } }, 1015: function(t, e, n) { var r = n(369);
            t.exports = function(t, e) { var n; return r(t, (function(t, r, i) { return !(n = e(t, r, i)) })), !!n } }, 1016: function(t, e, n) { var r = n(312),
                i = n(499),
                o = n(244);
            t.exports = function(t, e) { var n = {}; return e = o(e, 3), i(t, (function(t, i, o) { r(n, i, e(t, i, o)) })), n } }, 1017: function(t, e, n) { "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }); var r = s(n(1018)),
                i = n(1023),
                o = s(n(898)),
                a = s(n(1026));

            function s(t) { return t && t.__esModule ? t : { default: t } } var u = /((?:\-[a-z]+\-)?calc)/;
            e.default = function(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5; return (0, r.default)(t).walk((function(t) { if ("function" === t.type && u.test(t.value)) { var n = r.default.stringify(t.nodes); if (!(n.indexOf("constant") >= 0 || n.indexOf("env") >= 0)) { var s = i.parser.parse(n),
                                c = (0, o.default)(s, e);
                            t.type = "word", t.value = (0, a.default)(t.value, c, e) } } }), !0).toString() }, t.exports = e.default }, 1018: function(t, e, n) { var r = n(1019),
                i = n(1020),
                o = n(1021);

            function a(t) { return this instanceof a ? (this.nodes = r(t), this) : new a(t) }
            a.prototype.toString = function() { return Array.isArray(this.nodes) ? o(this.nodes) : "" }, a.prototype.walk = function(t, e) { return i(this.nodes, t, e), this }, a.unit = n(1022), a.walk = i, a.stringify = o, t.exports = a }, 1019: function(t, e) { var n = "(".charCodeAt(0),
                r = ")".charCodeAt(0),
                i = "'".charCodeAt(0),
                o = '"'.charCodeAt(0),
                a = "\\".charCodeAt(0),
                s = "/".charCodeAt(0),
                u = ",".charCodeAt(0),
                c = ":".charCodeAt(0),
                l = "*".charCodeAt(0);
            t.exports = function(t) { for (var e, h, f, p, d, y, v, g, b = [], m = t, x = 0, w = m.charCodeAt(x), O = m.length, _ = [{ nodes: b }], M = 0, j = "", S = "", E = ""; x < O;)
                    if (w <= 32) { e = x;
                        do { e += 1, w = m.charCodeAt(e) } while (w <= 32);
                        p = m.slice(x, e), f = b[b.length - 1], w === r && M ? E = p : f && "div" === f.type ? f.after = p : w === u || w === c || w === s && m.charCodeAt(e + 1) !== l ? S = p : b.push({ type: "space", sourceIndex: x, value: p }), x = e } else if (w === i || w === o) { e = x, p = { type: "string", sourceIndex: x, quote: h = w === i ? "'" : '"' };
                    do { if (d = !1, ~(e = m.indexOf(h, e + 1)))
                            for (y = e; m.charCodeAt(y - 1) === a;) y -= 1, d = !d;
                        else e = (m += h).length - 1, p.unclosed = !0 } while (d);
                    p.value = m.slice(x + 1, e), b.push(p), x = e + 1, w = m.charCodeAt(x) } else if (w === s && m.charCodeAt(x + 1) === l) p = { type: "comment", sourceIndex: x }, -1 === (e = m.indexOf("*/", x)) && (p.unclosed = !0, e = m.length), p.value = m.slice(x + 2, e), b.push(p), x = e + 2, w = m.charCodeAt(x);
                else if (w === s || w === u || w === c) p = m[x], b.push({ type: "div", sourceIndex: x - S.length, value: p, before: S, after: "" }), S = "", x += 1, w = m.charCodeAt(x);
                else if (n === w) { e = x;
                    do { e += 1, w = m.charCodeAt(e) } while (w <= 32); if (p = { type: "function", sourceIndex: x - j.length, value: j, before: m.slice(x + 1, e) }, x = e, "url" === j && w !== i && w !== o) { e -= 1;
                        do { if (d = !1, ~(e = m.indexOf(")", e + 1)))
                                for (y = e; m.charCodeAt(y - 1) === a;) y -= 1, d = !d;
                            else e = (m += ")").length - 1, p.unclosed = !0 } while (d);
                        v = e;
                        do { v -= 1, w = m.charCodeAt(v) } while (w <= 32);
                        p.nodes = x !== v + 1 ? [{ type: "word", sourceIndex: x, value: m.slice(x, v + 1) }] : [], p.unclosed && v + 1 !== e ? (p.after = "", p.nodes.push({ type: "space", sourceIndex: v + 1, value: m.slice(v + 1, e) })) : p.after = m.slice(v + 1, e), x = e + 1, w = m.charCodeAt(x), b.push(p) } else M += 1, p.after = "", b.push(p), _.push(p), b = p.nodes = [], g = p;
                    j = "" } else if (r === w && M) x += 1, w = m.charCodeAt(x), g.after = E, E = "", M -= 1, _.pop(), b = (g = _[M]).nodes;
                else { e = x;
                    do { w === a && (e += 1), e += 1, w = m.charCodeAt(e) } while (e < O && !(w <= 32 || w === i || w === o || w === u || w === c || w === s || w === n || w === r && M));
                    p = m.slice(x, e), n === w ? j = p : b.push({ type: "word", sourceIndex: x, value: p }), x = e } for (x = _.length - 1; x; x -= 1) _[x].unclosed = !0; return _[0].nodes } }, 1020: function(t, e) { t.exports = function t(e, n, r) { var i, o, a, s; for (i = 0, o = e.length; i < o; i += 1) a = e[i], r || (s = n(a, i, e)), !1 !== s && "function" === a.type && Array.isArray(a.nodes) && t(a.nodes, n, r), r && n(a, i, e) } }, 1021: function(t, e) {
            function n(t, e) { var n, i, o = t.type,
                    a = t.value; return e && void 0 !== (i = e(t)) ? i : "word" === o || "space" === o ? a : "string" === o ? (n = t.quote || "") + a + (t.unclosed ? "" : n) : "comment" === o ? "/*" + a + (t.unclosed ? "" : "*/") : "div" === o ? (t.before || "") + a + (t.after || "") : Array.isArray(t.nodes) ? (n = r(t.nodes), "function" !== o ? n : a + "(" + (t.before || "") + n + (t.after || "") + (t.unclosed ? "" : ")")) : a }

            function r(t, e) { var r, i; if (Array.isArray(t)) { for (r = "", i = t.length - 1; ~i; i -= 1) r = n(t[i], e) + r; return r } return n(t, e) }
            t.exports = r }, 1022: function(t, e) { var n = "-".charCodeAt(0),
                r = "+".charCodeAt(0),
                i = ".".charCodeAt(0),
                o = "e".charCodeAt(0),
                a = "E".charCodeAt(0);
            t.exports = function(t) { for (var e, s = 0, u = t.length, c = !1, l = -1, h = !1; s < u;) { if ((e = t.charCodeAt(s)) >= 48 && e <= 57) h = !0;
                    else if (e === o || e === a) { if (l > -1) break;
                        l = s } else if (e === i) { if (c) break;
                        c = !0 } else { if (e !== r && e !== n) break; if (0 !== s) break }
                    s += 1 } return l + 1 === s && s--, !!h && { number: t.slice(0, s), unit: t.slice(s) } } }, 1023: function(t, e, n) { var r = function() {
                function t(t, e) { var n; if (Object.defineProperty(this, "name", { enumerable: !1, writable: !1, value: "JisonParserError" }), null == t && (t = "???"), Object.defineProperty(this, "message", { enumerable: !1, writable: !0, value: t }), this.hash = e, e && e.exception instanceof Error) { var r = e.exception;
                        this.message = r.message || t, n = r.stack }
                    n || (Error.hasOwnProperty("captureStackTrace") ? Error.captureStackTrace(this, this.constructor) : n = new Error(t).stack), n && Object.defineProperty(this, "stack", { enumerable: !1, writable: !1, value: n }) }

                function e(t, e, n) { n = n || 0; for (var r = 0; r < e; r++) this.push(t), t += n }

                function n(t, e) { for (e += t = this.length - t; t < e; t++) this.push(this[t]) }

                function r(t) { for (var e = [], n = 0, r = t.length; n < r; n++) { var i = t[n]; "function" === typeof i ? (n++, i.apply(e, t[n])) : e.push(i) } return e } "function" === typeof Object.setPrototypeOf ? Object.setPrototypeOf(t.prototype, Error.prototype) : t.prototype = Object.create(Error.prototype), t.prototype.constructor = t, t.prototype.name = "JisonParserError"; var i = { trace: function() {}, JisonParserError: t, yy: {}, options: { type: "lalr", hasPartialLrUpgradeOnConflict: !0, errorRecoveryTokenDiscardCount: 3 }, symbols_: { $accept: 0, $end: 1, ADD: 3, ANGLE: 16, CHS: 22, COMMA: 14, CSS_CPROP: 13, CSS_VAR: 12, DIV: 6, EMS: 20, EOF: 1, EXS: 21, FREQ: 18, LENGTH: 15, LPAREN: 7, MUL: 5, NESTED_CALC: 9, NUMBER: 11, PERCENTAGE: 28, PREFIX: 10, REMS: 23, RES: 19, RPAREN: 8, SUB: 4, TIME: 17, VHS: 24, VMAXS: 27, VMINS: 26, VWS: 25, css_value: 33, css_variable: 32, error: 2, expression: 29, math_expression: 30, value: 31 }, terminals_: { 1: "EOF", 2: "error", 3: "ADD", 4: "SUB", 5: "MUL", 6: "DIV", 7: "LPAREN", 8: "RPAREN", 9: "NESTED_CALC", 10: "PREFIX", 11: "NUMBER", 12: "CSS_VAR", 13: "CSS_CPROP", 14: "COMMA", 15: "LENGTH", 16: "ANGLE", 17: "TIME", 18: "FREQ", 19: "RES", 20: "EMS", 21: "EXS", 22: "CHS", 23: "REMS", 24: "VHS", 25: "VWS", 26: "VMINS", 27: "VMAXS", 28: "PERCENTAGE" }, TERROR: 2, EOF: 1, originalQuoteName: null, originalParseError: null, cleanupAfterParse: null, constructParseErrorInfo: null, yyMergeLocationInfo: null, __reentrant_call_depth: 0, __error_infos: [], __error_recovery_infos: [], quoteName: function(t) { return '"' + t + '"' }, getSymbolName: function(t) { if (this.terminals_[t]) return this.terminals_[t]; var e = this.symbols_; for (var n in e)
                            if (e[n] === t) return n;
                        return null }, describeSymbol: function(t) { if (t !== this.EOF && this.terminal_descriptions_ && this.terminal_descriptions_[t]) return this.terminal_descriptions_[t]; if (t === this.EOF) return "end of input"; var e = this.getSymbolName(t); return e ? this.quoteName(e) : null }, collect_expected_token_set: function(t, e) { var n = this.TERROR,
                            r = [],
                            i = {}; if (!e && this.state_descriptions_ && this.state_descriptions_[t]) return [this.state_descriptions_[t]]; for (var o in this.table[t])
                            if ((o = +o) !== n) { var a = e ? o : this.describeSymbol(o);
                                a && !i[a] && (r.push(a), i[a] = !0) }
                        return r }, productions_: function(t) { for (var e = [], n = t.pop, r = t.rule, i = 0, o = n.length; i < o; i++) e.push([n[i], r[i]]); return e }({ pop: r([29, e, [30, 10], 31, 31, 32, 32, e, [33, 15]]), rule: r([2, e, [3, 5], 4, 7, e, [1, 4], 2, 4, 6, e, [1, 14], 2]) }), performAction: function(t, e, n) { var r = this.yy;
                        r.parser, r.lexer; switch (t) {
                            case 0:
                                this.$ = n[e - 1]; break;
                            case 1:
                                return this.$ = n[e - 1], n[e - 1];
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                                this.$ = { type: "MathExpression", operator: n[e - 1], left: n[e - 2], right: n[e] }; break;
                            case 6:
                                this.$ = n[e - 1]; break;
                            case 7:
                                this.$ = { type: "Calc", value: n[e - 1] }; break;
                            case 8:
                                this.$ = { type: "Calc", value: n[e - 1], prefix: n[e - 5] }; break;
                            case 9:
                            case 10:
                            case 11:
                                this.$ = n[e]; break;
                            case 12:
                                this.$ = { type: "Value", value: parseFloat(n[e]) }; break;
                            case 13:
                                this.$ = { type: "Value", value: -1 * parseFloat(n[e]) }; break;
                            case 14:
                                this.$ = { type: "CssVariable", value: n[e - 1] }; break;
                            case 15:
                                this.$ = { type: "CssVariable", value: n[e - 3], fallback: n[e - 1] }; break;
                            case 16:
                                this.$ = { type: "LengthValue", value: parseFloat(n[e]), unit: /[a-z]+/.exec(n[e])[0] }; break;
                            case 17:
                                this.$ = { type: "AngleValue", value: parseFloat(n[e]), unit: /[a-z]+/.exec(n[e])[0] }; break;
                            case 18:
                                this.$ = { type: "TimeValue", value: parseFloat(n[e]), unit: /[a-z]+/.exec(n[e])[0] }; break;
                            case 19:
                                this.$ = { type: "FrequencyValue", value: parseFloat(n[e]), unit: /[a-z]+/.exec(n[e])[0] }; break;
                            case 20:
                                this.$ = { type: "ResolutionValue", value: parseFloat(n[e]), unit: /[a-z]+/.exec(n[e])[0] }; break;
                            case 21:
                                this.$ = { type: "EmValue", value: parseFloat(n[e]), unit: "em" }; break;
                            case 22:
                                this.$ = { type: "ExValue", value: parseFloat(n[e]), unit: "ex" }; break;
                            case 23:
                                this.$ = { type: "ChValue", value: parseFloat(n[e]), unit: "ch" }; break;
                            case 24:
                                this.$ = { type: "RemValue", value: parseFloat(n[e]), unit: "rem" }; break;
                            case 25:
                                this.$ = { type: "VhValue", value: parseFloat(n[e]), unit: "vh" }; break;
                            case 26:
                                this.$ = { type: "VwValue", value: parseFloat(n[e]), unit: "vw" }; break;
                            case 27:
                                this.$ = { type: "VminValue", value: parseFloat(n[e]), unit: "vmin" }; break;
                            case 28:
                                this.$ = { type: "VmaxValue", value: parseFloat(n[e]), unit: "vmax" }; break;
                            case 29:
                                this.$ = { type: "PercentageValue", value: parseFloat(n[e]), unit: "%" }; break;
                            case 30:
                                var i = n[e];
                                i.value *= -1, this.$ = i } }, table: function(t) { for (var e = [], n = t.len, r = t.symbol, i = t.type, o = t.state, a = t.mode, s = t.goto, u = 0, c = n.length; u < c; u++) { for (var l = n[u], h = {}, f = 0; f < l; f++) { var p = r.shift(); switch (i.shift()) {
                                    case 2:
                                        h[p] = [a.shift(), s.shift()]; break;
                                    case 0:
                                        h[p] = o.shift(); break;
                                    default:
                                        h[p] = [3] } }
                            e.push(h) } return e }({ len: r([24, 1, 5, 23, 1, 18, e, [0, 3], 1, e, [0, 16], e, [23, 4], n, [28, 3], 0, 0, 16, 1, 6, 6, e, [0, 3], 5, 1, 2, n, [37, 3], n, [20, 3], 5, 0, 0]), symbol: r([4, 7, 9, 11, 12, e, [15, 19, 1], 1, 1, e, [3, 4, 1], n, [30, 19], n, [29, 4], 7, 4, 10, 11, n, [22, 14], n, [19, 3], n, [43, 22], n, [23, 69], n, [139, 4], 8, n, [51, 24], 4, n, [138, 15], 13, n, [186, 5], 8, n, [6, 6], n, [5, 5], 9, 8, 14, n, [159, 47], n, [60, 10]]), type: r([e, [2, 19], e, [0, 5], 1, e, [2, 24], e, [0, 4], n, [22, 19], n, [43, 42], n, [23, 70], n, [28, 25], n, [45, 25], n, [113, 54]]), state: r([1, 2, 8, 6, 7, 30, n, [4, 3], 33, 37, n, [5, 3], 38, n, [4, 3], 39, n, [4, 3], 40, n, [4, 3], 42, n, [21, 4], 50, n, [5, 3], 51, n, [4, 3]]), mode: r([e, [1, 179], e, [2, 3], n, [5, 5], n, [6, 4], e, [1, 57]]), goto: r([5, 3, 4, 24, e, [9, 15, 1], e, [25, 5, 1], n, [24, 19], 31, 35, 32, 34, n, [18, 14], 36, n, [38, 19], n, [19, 57], n, [118, 4], 41, n, [24, 19], 43, 35, n, [16, 14], 44, e, [2, 3], 28, 29, 2, e, [3, 3], 28, 29, 3, n, [53, 4], e, [45, 5, 1], n, [100, 42], 52, n, [5, 4], 53]) }), defaultActions: function(t) { for (var e = {}, n = t.idx, r = t.goto, i = 0, o = n.length; i < o; i++) { e[n[i]] = r[i] } return e }({ idx: r([6, 7, 8, e, [10, 16, 1], 33, 34, 39, 40, 41, 45, 47, 52, 53]), goto: r([9, 10, 11, e, [16, 14, 1], 12, 1, 30, 13, e, [4, 4, 1], 14, 15, 8]) }), parseError: function(t, e, n) { if (!e.recoverable) throw "function" === typeof this.trace && this.trace(t), n || (n = this.JisonParserError), new n(t, e); "function" === typeof this.trace && this.trace(t), e.destroy() }, parse: function(t) { var e, n = this,
                            r = new Array(128),
                            i = new Array(128),
                            o = new Array(128),
                            a = this.table,
                            s = 0,
                            u = 0,
                            c = (this.TERROR, this.EOF),
                            l = (this.options.errorRecoveryTokenDiscardCount, [0, 54]);
                        e = this.__lexer__ ? this.__lexer__ : this.__lexer__ = Object.create(this.lexer); var h = { parseError: void 0, quoteName: void 0, lexer: void 0, parser: void 0, pre_parse: void 0, post_parse: void 0, pre_lex: void 0, post_lex: void 0 };

                        function f() { var t = e.fastLex(); return "number" !== typeof t && (t = n.symbols_[t] || t), t || c } "function" !== typeof assert || assert, this.yyGetSharedState = function() { return h },
                            function(t, e) { for (var n in e) "undefined" === typeof t[n] && Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]) }(h, this.yy), h.lexer = e, h.parser = this, "function" === typeof h.parseError ? this.parseError = function(t, e, n) { return n || (n = this.JisonParserError), h.parseError.call(this, t, e, n) } : this.parseError = this.originalParseError, "function" === typeof h.quoteName ? this.quoteName = function(t) { return h.quoteName.call(this, t) } : this.quoteName = this.originalQuoteName, this.cleanupAfterParse = function(t, n, a) { var u, c;
                                n && ((h.post_parse || this.post_parse) && (c = this.constructParseErrorInfo(null, null, null, !1)), h.post_parse && "undefined" !== typeof(u = h.post_parse.call(this, h, t, c)) && (t = u), this.post_parse && "undefined" !== typeof(u = this.post_parse.call(this, h, t, c)) && (t = u), c && c.destroy && c.destroy()); if (this.__reentrant_call_depth > 1) return t; if (e.cleanupAfterLex && e.cleanupAfterLex(a), h && (h.lexer = void 0, h.parser = void 0, e.yy === h && (e.yy = void 0)), h = void 0, this.parseError = this.originalParseError, this.quoteName = this.originalQuoteName, r.length = 0, i.length = 0, o.length = 0, s = 0, !a) { for (var l = this.__error_infos.length - 1; l >= 0; l--) { var f = this.__error_infos[l];
                                        f && "function" === typeof f.destroy && f.destroy() }
                                    this.__error_infos.length = 0 } return t }, this.constructParseErrorInfo = function(t, n, a, c) { var l = { errStr: t, exception: n, text: e.match, value: e.yytext, token: this.describeSymbol(u) || u, token_id: u, line: e.yylineno, expected: a, recoverable: c, state: p, action: d, new_state: x, symbol_stack: r, state_stack: i, value_stack: o, stack_pointer: s, yy: h, lexer: e, parser: this, destroy: function() { var t = !!this.recoverable; for (var e in this) this.hasOwnProperty(e) && "object" === typeof e && (this[e] = void 0);
                                        this.recoverable = t } }; return this.__error_infos.push(l), l }; var p, d, y, v, g, b, m, x, w = function() { var t = e.lex(); return "number" !== typeof t && (t = n.symbols_[t] || t), t || c },
                            O = { $: !0, _$: void 0, yy: h },
                            _ = !1; try { if (this.__reentrant_call_depth++, e.setInput(t, h), "function" === typeof e.canIUse) e.canIUse().fastLex && (w = f); for (o[s] = null, i[s] = 0, r[s] = 0, ++s, this.pre_parse && this.pre_parse.call(this, h), h.pre_parse && h.pre_parse.call(this, h), x = i[s - 1];;) { if (p = x, this.defaultActions[p]) d = 2, x = this.defaultActions[p];
                                else if (u || (u = w()), v = a[p] && a[p][u] || l, x = v[1], !(d = v[0])) { var M, j = this.describeSymbol(u) || u,
                                        S = this.collect_expected_token_set(p);
                                    M = "number" === typeof e.yylineno ? "Parse error on line " + (e.yylineno + 1) + ": " : "Parse error: ", "function" === typeof e.showPosition && (M += "\n" + e.showPosition(69, 10) + "\n"), S.length ? M += "Expecting " + S.join(", ") + ", got unexpected " + j : M += "Unexpected " + j, g = this.constructParseErrorInfo(M, null, S, !1), "undefined" !== typeof(y = this.parseError(g.errStr, g, this.JisonParserError)) && (_ = y); break } switch (d) { default: if (d instanceof Array) { g = this.constructParseErrorInfo("Parse Error: multiple actions possible at state: " + p + ", token: " + u, null, null, !1), "undefined" !== typeof(y = this.parseError(g.errStr, g, this.JisonParserError)) && (_ = y); break }g = this.constructParseErrorInfo("Parsing halted. No viable error recovery approach available due to internal system failure.", null, null, !1), "undefined" !== typeof(y = this.parseError(g.errStr, g, this.JisonParserError)) && (_ = y); break;
                                    case 1:
                                            r[s] = u, o[s] = e.yytext, i[s] = x, ++s, u = 0; continue;
                                    case 2:
                                            if (b = (m = this.productions_[x - 1])[1], "undefined" !== typeof(y = this.performAction.call(O, x, s - 1, o))) { _ = y; break }s -= b; var E = m[0];r[s] = E, o[s] = O.$, x = a[i[s - 1]][E], i[s] = x, ++s; continue;
                                    case 3:
                                            -2 !== s && (_ = !0, s--, "undefined" !== typeof o[s] && (_ = o[s])) } break } } catch (k) { if (k instanceof this.JisonParserError) throw k; if (e && "function" === typeof e.JisonLexerError && k instanceof e.JisonLexerError) throw k;
                            g = this.constructParseErrorInfo("Parsing aborted due to exception.", k, null, !1), _ = !1, "undefined" !== typeof(y = this.parseError(g.errStr, g, this.JisonParserError)) && (_ = y) } finally { _ = this.cleanupAfterParse(_, !0, !0), this.__reentrant_call_depth-- } return _ } };
                i.originalParseError = i.parseError, i.originalQuoteName = i.quoteName; var o = function() {
                    function t(t, e) { var n; if (Object.defineProperty(this, "name", { enumerable: !1, writable: !1, value: "JisonLexerError" }), null == t && (t = "???"), Object.defineProperty(this, "message", { enumerable: !1, writable: !0, value: t }), this.hash = e, e && e.exception instanceof Error) { var r = e.exception;
                            this.message = r.message || t, n = r.stack }
                        n || (Error.hasOwnProperty("captureStackTrace") ? Error.captureStackTrace(this, this.constructor) : n = new Error(t).stack), n && Object.defineProperty(this, "stack", { enumerable: !1, writable: !1, value: n }) } return "function" === typeof Object.setPrototypeOf ? Object.setPrototypeOf(t.prototype, Error.prototype) : t.prototype = Object.create(Error.prototype), t.prototype.constructor = t, t.prototype.name = "JisonLexerError", { EOF: 1, ERROR: 2, __currentRuleSet__: null, __error_infos: [], __decompressed: !1, done: !1, _backtrack: !1, _input: "", _more: !1, _signaled_error_token: !1, conditionStack: [], match: "", matched: "", matches: !1, yytext: "", offset: 0, yyleng: 0, yylineno: 0, yylloc: null, constructLexErrorInfo: function(t, e, n) { if (t = "" + t, void 0 == n && (n = !(t.indexOf("\n") > 0 && t.indexOf("^") > 0)), this.yylloc && n)
                                if ("function" === typeof this.prettyPrintRange) { this.prettyPrintRange(this.yylloc); /\n\s*$/.test(t) || (t += "\n"), t += "\n  Erroneous area:\n" + this.prettyPrintRange(this.yylloc) } else if ("function" === typeof this.showPosition) { var r = this.showPosition();
                                r && (t.length && "\n" !== t[t.length - 1] && "\n" !== r[0] ? t += "\n" + r : t += r) } var i = { errStr: t, recoverable: !!e, text: this.match, token: null, line: this.yylineno, loc: this.yylloc, yy: this.yy, lexer: this, destroy: function() { var t = !!this.recoverable; for (var e in this) this.hasOwnProperty(e) && "object" === typeof e && (this[e] = void 0);
                                    this.recoverable = t } }; return this.__error_infos.push(i), i }, parseError: function(t, e, n) { if (n || (n = this.JisonLexerError), this.yy) { if (this.yy.parser && "function" === typeof this.yy.parser.parseError) return this.yy.parser.parseError.call(this, t, e, n) || this.ERROR; if ("function" === typeof this.yy.parseError) return this.yy.parseError.call(this, t, e, n) || this.ERROR } throw new n(t, e) }, yyerror: function(t) { var e = "";
                            this.yylloc && (e = " on line " + (this.yylineno + 1)); var n = this.constructLexErrorInfo("Lexical error" + e + ": " + t, this.options.lexerErrorsAreRecoverable),
                                r = Array.prototype.slice.call(arguments, 1); return r.length && (n.extra_error_attributes = r), this.parseError(n.errStr, n, this.JisonLexerError) || this.ERROR }, cleanupAfterLex: function(t) { if (this.setInput("", {}), !t) { for (var e = this.__error_infos.length - 1; e >= 0; e--) { var n = this.__error_infos[e];
                                    n && "function" === typeof n.destroy && n.destroy() }
                                this.__error_infos.length = 0 } return this }, clear: function() { this.yytext = "", this.yyleng = 0, this.match = "", this.matches = !1, this._more = !1, this._backtrack = !1; var t = this.yylloc ? this.yylloc.last_column : 0;
                            this.yylloc = { first_line: this.yylineno + 1, first_column: t, last_line: this.yylineno + 1, last_column: t, range: [this.offset, this.offset] } }, setInput: function(t, e) { if (this.yy = e || this.yy || {}, !this.__decompressed) { for (var n = this.rules, r = 0, i = n.length; r < i; r++) { "number" === typeof(f = n[r]) && (n[r] = n[f]) } var o = this.conditions; for (var a in o) { var s = o[a],
                                        u = s.rules,
                                        c = (i = u.length, new Array(i + 1)),
                                        l = new Array(i + 1); for (r = 0; r < i; r++) { var h = u[r],
                                            f = n[h];
                                        c[r + 1] = f, l[r + 1] = h }
                                    s.rules = l, s.__rule_regexes = c, s.__rule_count = i }
                                this.__decompressed = !0 } return this._input = t || "", this.clear(), this._signaled_error_token = !1, this.done = !1, this.yylineno = 0, this.matched = "", this.conditionStack = ["INITIAL"], this.__currentRuleSet__ = null, this.yylloc = { first_line: 1, first_column: 0, last_line: 1, last_column: 0, range: [0, 0] }, this.offset = 0, this }, editRemainingInput: function(t, e) { var n = t.call(this, this._input, e); return "string" !== typeof n ? n && (this._input = "" + n) : this._input = n, this }, input: function() { if (!this._input) return null; var t = this._input[0];
                            this.yytext += t, this.yyleng++, this.offset++, this.match += t, this.matched += t; var e = 1,
                                n = !1; if ("\n" === t) n = !0;
                            else if ("\r" === t) { n = !0; var r = this._input[1]; "\n" === r && (e++, t += r, this.yytext += r, this.yyleng++, this.offset++, this.match += r, this.matched += r, this.yylloc.range[1]++) } return n ? (this.yylineno++, this.yylloc.last_line++, this.yylloc.last_column = 0) : this.yylloc.last_column++, this.yylloc.range[1]++, this._input = this._input.slice(e), t }, unput: function(t) { var e = t.length,
                                n = t.split(/(?:\r\n?|\n)/g); if (this._input = t + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - e), this.yyleng = this.yytext.length, this.offset -= e, this.match = this.match.substr(0, this.match.length - e), this.matched = this.matched.substr(0, this.matched.length - e), n.length > 1) { this.yylineno -= n.length - 1, this.yylloc.last_line = this.yylineno + 1; var r = this.match,
                                    i = r.split(/(?:\r\n?|\n)/g);
                                1 === i.length && (i = (r = this.matched).split(/(?:\r\n?|\n)/g)), this.yylloc.last_column = i[i.length - 1].length } else this.yylloc.last_column -= e; return this.yylloc.range[1] = this.yylloc.range[0] + this.yyleng, this.done = !1, this }, more: function() { return this._more = !0, this }, reject: function() { if (this.options.backtrack_lexer) this._backtrack = !0;
                            else { var t = "";
                                this.yylloc && (t = " on line " + (this.yylineno + 1)); var e = this.constructLexErrorInfo("Lexical error" + t + ": You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).", !1);
                                this._signaled_error_token = this.parseError(e.errStr, e, this.JisonLexerError) || this.ERROR } return this }, less: function(t) { return this.unput(this.match.slice(t)) }, pastInput: function(t, e) { var n = this.matched.substring(0, this.matched.length - this.match.length);
                            t < 0 ? t = n.length : t || (t = 20), e < 0 ? e = n.length : e || (e = 1); var r = (n = n.substr(2 * -t - 2)).replace(/\r\n|\r/g, "\n").split("\n"); return (n = (r = r.slice(-e)).join("\n")).length > t && (n = "..." + n.substr(-t)), n }, upcomingInput: function(t, e) { var n = this.match;
                            t < 0 ? t = n.length + this._input.length : t || (t = 20), e < 0 ? e = t : e || (e = 1), n.length < 2 * t + 2 && (n += this._input.substring(0, 2 * t + 2)); var r = n.replace(/\r\n|\r/g, "\n").split("\n"); return (n = (r = r.slice(0, e)).join("\n")).length > t && (n = n.substring(0, t) + "..."), n }, showPosition: function(t, e) { var n = this.pastInput(t).replace(/\s/g, " "),
                                r = new Array(n.length + 1).join("-"); return n + this.upcomingInput(e).replace(/\s/g, " ") + "\n" + r + "^" }, deriveLocationInfo: function(t, e, n, r) { var i = { first_line: 1, first_column: 0, last_line: 1, last_column: 0, range: [0, 0] }; return t && (i.first_line = 0 | t.first_line, i.last_line = 0 | t.last_line, i.first_column = 0 | t.first_column, i.last_column = 0 | t.last_column, t.range && (i.range[0] = 0 | t.range[0], i.range[1] = 0 | t.range[1])), (i.first_line <= 0 || i.last_line < i.first_line) && (i.first_line <= 0 && e && (i.first_line = 0 | e.last_line, i.first_column = 0 | e.last_column, e.range && (i.range[0] = 0 | t.range[1])), (i.last_line <= 0 || i.last_line < i.first_line) && n && (i.last_line = 0 | n.first_line, i.last_column = 0 | n.first_column, n.range && (i.range[1] = 0 | t.range[0])), i.first_line <= 0 && r && (i.last_line <= 0 || r.last_line <= i.last_line) && (i.first_line = 0 | r.first_line, i.first_column = 0 | r.first_column, r.range && (i.range[0] = 0 | r.range[0])), i.last_line <= 0 && r && (i.first_line <= 0 || r.first_line >= i.first_line) && (i.last_line = 0 | r.last_line, i.last_column = 0 | r.last_column, r.range && (i.range[1] = 0 | r.range[1]))), i.last_line <= 0 && (i.first_line <= 0 ? (i.first_line = this.yylloc.first_line, i.last_line = this.yylloc.last_line, i.first_column = this.yylloc.first_column, i.last_column = this.yylloc.last_column, i.range[0] = this.yylloc.range[0], i.range[1] = this.yylloc.range[1]) : (i.last_line = this.yylloc.last_line, i.last_column = this.yylloc.last_column, i.range[1] = this.yylloc.range[1])), i.first_line <= 0 && (i.first_line = i.last_line, i.first_column = 0, i.range[1] = i.range[0]), i.first_column < 0 && (i.first_column = 0), i.last_column < 0 && (i.last_column = i.first_column > 0 ? i.first_column : 80), i }, prettyPrintRange: function(t, e, n) { t = this.deriveLocationInfo(t, e, n); var r = (this.matched + this._input).split("\n"),
                                i = Math.max(1, e ? e.first_line : t.first_line - 3),
                                o = Math.max(1, n ? n.last_line : t.last_line + 1),
                                a = 1 + Math.log10(1 | o) | 0,
                                s = new Array(a).join(" "),
                                u = [],
                                c = r.slice(i - 1, o + 1).map((function(e, n) { var r = n + i,
                                        o = (s + r).substr(-a) + ": " + e,
                                        c = new Array(a + 1).join("^"),
                                        l = 3,
                                        h = 0;
                                    (r === t.first_line ? (l += t.first_column, h = Math.max(2, (r === t.last_line ? t.last_column : e.length) - t.first_column + 1)) : r === t.last_line ? h = Math.max(2, t.last_column + 1) : r > t.first_line && r < t.last_line && (h = Math.max(2, e.length + 1)), h) && (o += "\n" + c + new Array(l).join(".") + new Array(h).join("^"), e.trim().length > 0 && u.push(n)); return o = o.replace(/\t/g, " ") })); if (u.length > 4) { var l = u[1] + 1,
                                    h = u[u.length - 2] - 1,
                                    f = new Array(a + 1).join(" ") + "  (...continued...)";
                                f += "\n" + new Array(a + 1).join("-") + "  (---------------)", c.splice(l, h - l + 1, f) } return c.join("\n") }, describeYYLLOC: function(t, e) { var n, r = t.first_line,
                                i = t.last_line,
                                o = t.first_column,
                                a = t.last_column; if (0 === i - r ? (n = "line " + r + ", ", n += a - o <= 1 ? "column " + o : "columns " + o + " .. " + a) : n = "lines " + r + "(column " + o + ") .. " + i + "(column " + a + ")", t.range && e) { var s = t.range[0],
                                    u = t.range[1] - 1;
                                n += u <= s ? " {String Offset: " + s + "}" : " {String Offset range: " + s + " .. " + u + "}" } return n }, test_match: function(t, e) { var n, r, i, o, a; if (this.options.backtrack_lexer && (i = { yylineno: this.yylineno, yylloc: { first_line: this.yylloc.first_line, last_line: this.yylloc.last_line, first_column: this.yylloc.first_column, last_column: this.yylloc.last_column, range: this.yylloc.range.slice(0) }, yytext: this.yytext, match: this.match, matches: this.matches, matched: this.matched, yyleng: this.yyleng, offset: this.offset, _more: this._more, _input: this._input, yy: this.yy, conditionStack: this.conditionStack.slice(0), done: this.done }), a = (o = t[0]).length, (r = o.split(/(?:\r\n?|\n)/g)).length > 1 ? (this.yylineno += r.length - 1, this.yylloc.last_line = this.yylineno + 1, this.yylloc.last_column = r[r.length - 1].length) : this.yylloc.last_column += a, this.yytext += o, this.match += o, this.matched += o, this.matches = t, this.yyleng = this.yytext.length, this.yylloc.range[1] += a, this.offset += a, this._more = !1, this._backtrack = !1, this._input = this._input.slice(a), n = this.performAction.call(this, this.yy, e, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), n) return n; if (this._backtrack) { for (var s in i) this[s] = i[s]; return this.__currentRuleSet__ = null, !1 } return !!this._signaled_error_token && (n = this._signaled_error_token, this._signaled_error_token = !1, n) }, next: function() { if (this.done) return this.clear(), this.EOF; var t, e, n, r;
                            this._input || (this.done = !0), this._more || this.clear(); var i = this.__currentRuleSet__; if (!i && (!(i = this.__currentRuleSet__ = this._currentRules()) || !i.rules)) { var o = "";
                                this.options.trackPosition && (o = " on line " + (this.yylineno + 1)); var a = this.constructLexErrorInfo("Internal lexer engine error" + o + ': The lex grammar programmer pushed a non-existing condition name "' + this.topState() + '"; this is a fatal error and should be reported to the application programmer team!', !1); return this.parseError(a.errStr, a, this.JisonLexerError) || this.ERROR } for (var s = i.rules, u = i.__rule_regexes, c = i.__rule_count, l = 1; l <= c; l++)
                                if ((n = this._input.match(u[l])) && (!e || n[0].length > e[0].length)) { if (e = n, r = l, this.options.backtrack_lexer) { if (!1 !== (t = this.test_match(n, s[l]))) return t; if (this._backtrack) { e = void 0; continue } return !1 } if (!this.options.flex) break }
                            if (e) return !1 !== (t = this.test_match(e, s[r])) && t; if (this._input) { o = "";
                                this.options.trackPosition && (o = " on line " + (this.yylineno + 1));
                                a = this.constructLexErrorInfo("Lexical error" + o + ": Unrecognized text.", this.options.lexerErrorsAreRecoverable); var h = this._input,
                                    f = this.topState(),
                                    p = this.conditionStack.length; return (t = this.parseError(a.errStr, a, this.JisonLexerError) || this.ERROR) === this.ERROR && (this.matches || h !== this._input || f !== this.topState() || p !== this.conditionStack.length || this.input()), t } return this.done = !0, this.clear(), this.EOF }, lex: function() { var t; for ("function" === typeof this.pre_lex && (t = this.pre_lex.call(this, 0)), "function" === typeof this.options.pre_lex && (t = this.options.pre_lex.call(this, t) || t), this.yy && "function" === typeof this.yy.pre_lex && (t = this.yy.pre_lex.call(this, t) || t); !t;) t = this.next(); return this.yy && "function" === typeof this.yy.post_lex && (t = this.yy.post_lex.call(this, t) || t), "function" === typeof this.options.post_lex && (t = this.options.post_lex.call(this, t) || t), "function" === typeof this.post_lex && (t = this.post_lex.call(this, t) || t), t }, fastLex: function() { for (var t; !t;) t = this.next(); return t }, canIUse: function() { return { fastLex: !("function" === typeof this.pre_lex || "function" === typeof this.options.pre_lex || this.yy && "function" === typeof this.yy.pre_lex || this.yy && "function" === typeof this.yy.post_lex || "function" === typeof this.options.post_lex || "function" === typeof this.post_lex) && "function" === typeof this.fastLex } }, begin: function(t) { return this.pushState(t) }, pushState: function(t) { return this.conditionStack.push(t), this.__currentRuleSet__ = null, this }, popState: function() { return this.conditionStack.length - 1 > 0 ? (this.__currentRuleSet__ = null, this.conditionStack.pop()) : this.conditionStack[0] }, topState: function(t) { return (t = this.conditionStack.length - 1 - Math.abs(t || 0)) >= 0 ? this.conditionStack[t] : "INITIAL" }, _currentRules: function() { return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]] : this.conditions.INITIAL }, stateStackSize: function() { return this.conditionStack.length }, options: { trackPosition: !0 }, JisonLexerError: t, performAction: function(t, e, n) { switch (e) {
                                case 1:
                                    break;
                                default:
                                    return this.simpleCaseActionClusters[e] } }, simpleCaseActionClusters: { 0: 13, 2: 5, 3: 6, 4: 3, 5: 4, 6: 15, 7: 15, 8: 15, 9: 15, 10: 15, 11: 15, 12: 16, 13: 16, 14: 16, 15: 16, 16: 17, 17: 17, 18: 18, 19: 18, 20: 19, 21: 19, 22: 19, 23: 20, 24: 21, 25: 22, 26: 23, 27: 25, 28: 24, 29: 26, 30: 27, 31: 28, 32: 11, 33: 9, 34: 12, 35: 10, 36: 7, 37: 8, 38: 14, 39: 1 }, rules: [/^(?:(--[\d\-A-Za-z]*))/, /^(?:\s+)/, /^(?:\*)/, /^(?:\/)/, /^(?:\+)/, /^(?:-)/, /^(?:(\d+(\.\d*)?|\.\d+)px\b)/, /^(?:(\d+(\.\d*)?|\.\d+)cm\b)/, /^(?:(\d+(\.\d*)?|\.\d+)mm\b)/, /^(?:(\d+(\.\d*)?|\.\d+)in\b)/, /^(?:(\d+(\.\d*)?|\.\d+)pt\b)/, /^(?:(\d+(\.\d*)?|\.\d+)pc\b)/, /^(?:(\d+(\.\d*)?|\.\d+)deg\b)/, /^(?:(\d+(\.\d*)?|\.\d+)grad\b)/, /^(?:(\d+(\.\d*)?|\.\d+)rad\b)/, /^(?:(\d+(\.\d*)?|\.\d+)turn\b)/, /^(?:(\d+(\.\d*)?|\.\d+)s\b)/, /^(?:(\d+(\.\d*)?|\.\d+)ms\b)/, /^(?:(\d+(\.\d*)?|\.\d+)Hz\b)/, /^(?:(\d+(\.\d*)?|\.\d+)kHz\b)/, /^(?:(\d+(\.\d*)?|\.\d+)dpi\b)/, /^(?:(\d+(\.\d*)?|\.\d+)dpcm\b)/, /^(?:(\d+(\.\d*)?|\.\d+)dppx\b)/, /^(?:(\d+(\.\d*)?|\.\d+)em\b)/, /^(?:(\d+(\.\d*)?|\.\d+)ex\b)/, /^(?:(\d+(\.\d*)?|\.\d+)ch\b)/, /^(?:(\d+(\.\d*)?|\.\d+)rem\b)/, /^(?:(\d+(\.\d*)?|\.\d+)vw\b)/, /^(?:(\d+(\.\d*)?|\.\d+)vh\b)/, /^(?:(\d+(\.\d*)?|\.\d+)vmin\b)/, /^(?:(\d+(\.\d*)?|\.\d+)vmax\b)/, /^(?:(\d+(\.\d*)?|\.\d+)%)/, /^(?:(\d+(\.\d*)?|\.\d+)\b)/, /^(?:(calc))/, /^(?:(var))/, /^(?:([a-z]+))/, /^(?:\()/, /^(?:\))/, /^(?:,)/, /^(?:$)/], conditions: { INITIAL: { rules: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39], inclusive: !0 } } } }();

                function a() { this.yy = {} } return i.lexer = o, a.prototype = i, i.Parser = a, new a }();
            e.parser = r, e.Parser = r.Parser, e.parse = function() { return r.parse.apply(r, arguments) } }, 1024: function(t, e, n) { "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }); var r, i = n(1025),
                o = (r = i) && r.__esModule ? r : { default: r };
            e.default = function(t, e, n) { switch (t.type) {
                    case "LengthValue":
                    case "AngleValue":
                    case "TimeValue":
                    case "FrequencyValue":
                    case "ResolutionValue":
                        return function(t, e, n) { e.type === t.type && (e = { type: t.type, value: (0, o.default)(e.value, e.unit, t.unit, n), unit: t.unit }); return { left: t, right: e } }(t, e, n);
                    default:
                        return { left: t, right: e } } }, t.exports = e.default }, 1025: function(t, e) { var n = { px: { px: 1, cm: 96 / 2.54, mm: 96 / 25.4, in: 96, pt: 96 / 72, pc: 16 }, cm: { px: 2.54 / 96, cm: 1, mm: .1, in: 2.54, pt: 2.54 / 72, pc: 2.54 / 6 }, mm: { px: 25.4 / 96, cm: 10, mm: 1, in: 25.4, pt: 25.4 / 72, pc: 25.4 / 6 }, in: { px: 1 / 96, cm: 1 / 2.54, mm: 1 / 25.4, in: 1, pt: 1 / 72, pc: 1 / 6 }, pt: { px: .75, cm: 72 / 2.54, mm: 72 / 25.4, in: 72, pt: 1, pc: 12 }, pc: { px: 6 / 96, cm: 6 / 2.54, mm: 6 / 25.4, in: 6, pt: 6 / 72, pc: 1 }, deg: { deg: 1, grad: .9, rad: 180 / Math.PI, turn: 360 }, grad: { deg: 400 / 360, grad: 1, rad: 200 / Math.PI, turn: 400 }, rad: { deg: Math.PI / 180, grad: Math.PI / 200, rad: 1, turn: 2 * Math.PI }, turn: { deg: 1 / 360, grad: 1 / 400, rad: .5 / Math.PI, turn: 1 }, s: { s: 1, ms: .001 }, ms: { s: 1e3, ms: 1 }, Hz: { Hz: 1, kHz: 1e3 }, kHz: { Hz: .001, kHz: 1 }, dpi: { dpi: 1, dpcm: 1 / 2.54, dppx: 1 / 96 }, dpcm: { dpi: 2.54, dpcm: 1, dppx: 2.54 / 96 }, dppx: { dpi: 96, dpcm: 96 / 2.54, dppx: 1 } };
            t.exports = function(t, e, r, i) { if (!n.hasOwnProperty(r)) throw new Error("Cannot convert to " + r); if (!n[r].hasOwnProperty(e)) throw new Error("Cannot convert from " + e + " to " + r); var o = n[r][e] * t; return !1 !== i ? (i = Math.pow(10, parseInt(i) || 5), Math.round(o * i) / i) : o } }, 1026: function(t, e, n) { "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }), e.default = function(t, e, n) { var r = a(e, n); return "MathExpression" === e.type && (r = t + "(" + r + ")"), r }; var r = n(898),
                i = { "*": 0, "/": 0, "+": 1, "-": 1 };

            function o(t, e) { if (!1 !== e) { var n = Math.pow(10, e); return Math.round(t * n) / n } return t }

            function a(t, e) { switch (t.type) {
                    case "MathExpression":
                        var n = t.left,
                            s = t.right,
                            u = t.operator,
                            c = ""; return "MathExpression" === n.type && i[u] < i[n.operator] ? c += "(" + a(n, e) + ")" : c += a(n, e), c += " " + t.operator + " ", "MathExpression" === s.type && i[u] < i[s.operator] ? c += "(" + a(s, e) + ")" : "MathExpression" === s.type && "-" === u && ["+", "-"].includes(s.operator) ? (s.operator = (0, r.flip)(s.operator), c += a(s, e)) : c += a(s, e), c;
                    case "Value":
                        return o(t.value, e);
                    case "CssVariable":
                        return t.fallback ? "var(" + t.value + ", " + a(t.fallback, e) + ")" : "var(" + t.value + ")";
                    case "Calc":
                        return t.prefix ? "-" + t.prefix + "-calc(" + a(t.value, e) + ")" : "calc(" + a(t.value, e) + ")";
                    default:
                        return o(t.value, e) + t.unit } }
            t.exports = e.default }, 1027: function(t, e, n) {
            (function(e) {
                (function() { var n, r, i, o, a, s; "undefined" !== typeof performance && null !== performance && performance.now ? t.exports = function() { return performance.now() } : "undefined" !== typeof e && null !== e && e.hrtime ? (t.exports = function() { return (n() - a) / 1e6 }, r = e.hrtime, o = (n = function() { var t; return 1e9 * (t = r())[0] + t[1] })(), s = 1e9 * e.uptime(), a = o - s) : Date.now ? (t.exports = function() { return Date.now() - i }, i = Date.now()) : (t.exports = function() { return (new Date).getTime() - i }, i = (new Date).getTime()) }).call(this) }).call(this, n(241)) }, 1028: function(t, e, n) {! function(t) { "use strict"; var e = "function" === typeof WeakSet,
                    n = Object.keys;

                function r(t, e) { return t === e || t !== t && e !== e }

                function i(t) { return t.constructor === Object || null == t.constructor }

                function o(t) { return !!t && "function" === typeof t.then }

                function a(t) { return !(!t || !t.$$typeof) }

                function s() { var t = []; return { add: function(e) { t.push(e) }, has: function(e) { return -1 !== t.indexOf(e) } } } var u = e ? function() { return new WeakSet } : s;

                function c(t) { return function(e) { var n = t || e; return function(t, e, r) { void 0 === r && (r = u()); var i = !!t && "object" === typeof t,
                                o = !!e && "object" === typeof e; if (i || o) { var a = i && r.has(t),
                                    s = o && r.has(e); if (a || s) return a && s;
                                i && r.add(t), o && r.add(e) } return n(t, e, r) } } }

                function l(t, e, n, r) { var i = t.length; if (e.length !== i) return !1; for (; i-- > 0;)
                        if (!n(t[i], e[i], r)) return !1;
                    return !0 }

                function h(t, e, n, r) { var i = t.size === e.size; return i && t.size && t.forEach((function(t, o) { i && (i = !1, e.forEach((function(e, a) {!i && n(o, a, r) && (i = n(t, e, r)) }))) })), i } var f = "_owner",
                    p = Function.prototype.bind.call(Function.prototype.call, Object.prototype.hasOwnProperty);

                function d(t, e, r, i) { var o = n(t),
                        s = o.length; if (n(e).length !== s) return !1; if (s)
                        for (var u = void 0; s-- > 0;) { if ((u = o[s]) === f) { var c = a(t),
                                    l = a(e); if ((c || l) && c !== l) return !1 } if (!p(e, u) || !r(t[u], e[u], i)) return !1 }
                    return !0 }

                function y(t, e) { return t.source === e.source && t.global === e.global && t.ignoreCase === e.ignoreCase && t.multiline === e.multiline && t.unicode === e.unicode && t.sticky === e.sticky && t.lastIndex === e.lastIndex }

                function v(t, e, n, r) { var i = t.size === e.size; return i && t.size && t.forEach((function(t) { i && (i = !1, e.forEach((function(e) { i || (i = n(t, e, r)) }))) })), i } var g = "function" === typeof Map,
                    b = "function" === typeof Set;

                function m(t) { var e = "function" === typeof t ? t(n) : n;

                    function n(t, n, a) { if (t === n) return !0; if (t && n && "object" === typeof t && "object" === typeof n) { if (i(t) && i(n)) return d(t, n, e, a); var s = Array.isArray(t),
                                u = Array.isArray(n); return s || u ? s === u && l(t, n, e, a) : (s = t instanceof Date, u = n instanceof Date, s || u ? s === u && r(t.getTime(), n.getTime()) : (s = t instanceof RegExp, u = n instanceof RegExp, s || u ? s === u && y(t, n) : o(t) || o(n) ? t === n : g && (s = t instanceof Map, u = n instanceof Map, s || u) ? s === u && h(t, n, e, a) : b && (s = t instanceof Set, u = n instanceof Set, s || u) ? s === u && v(t, n, e, a) : d(t, n, e, a))) } return t !== t && n !== n } return n } var x = m(),
                    w = m((function() { return r })),
                    O = m(c()),
                    _ = m(c(r));
                t.circularDeepEqual = O, t.circularShallowEqual = _, t.createCustomEqual = m, t.deepEqual = x, t.sameValueZeroEqual = r, t.shallowEqual = w, Object.defineProperty(t, "__esModule", { value: !0 }) }(e) }, 1029: function(t, e, n) { "use strict";
            e.__esModule = !0, e.default = void 0;! function(t) { if (t && t.__esModule) return t; var e = {}; if (null != t)
                    for (var n in t)
                        if (Object.prototype.hasOwnProperty.call(t, n)) { var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(t, n) : {};
                            r.get || r.set ? Object.defineProperty(e, n, r) : e[n] = t[n] }
                e.default = t }(n(48)); var r = s(n(1030)),
                i = s(n(1033)),
                o = s(n(1)),
                a = s(n(901));
            n(903);

            function s(t) { return t && t.__esModule ? t : { default: t } }

            function u() { return (u = Object.assign || function(t) { for (var e = 1; e < arguments.length; e++) { var n = arguments[e]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]) } return t }).apply(this, arguments) } var c = function(t, e) { return t && e && e.split(" ").forEach((function(e) { return (0, r.default)(t, e) })) },
                l = function(t, e) { return t && e && e.split(" ").forEach((function(e) { return (0, i.default)(t, e) })) },
                h = function(t) { var e, n;

                    function r() { for (var e, n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i]; return (e = t.call.apply(t, [this].concat(r)) || this).onEnter = function(t, n) { var r = e.getClassNames(n ? "appear" : "enter").className;
                            e.removeClasses(t, "exit"), c(t, r), e.props.onEnter && e.props.onEnter(t, n) }, e.onEntering = function(t, n) { var r = e.getClassNames(n ? "appear" : "enter").activeClassName;
                            e.reflowAndAddClass(t, r), e.props.onEntering && e.props.onEntering(t, n) }, e.onEntered = function(t, n) { var r = e.getClassNames("appear").doneClassName,
                                i = e.getClassNames("enter").doneClassName,
                                o = n ? r + " " + i : i;
                            e.removeClasses(t, n ? "appear" : "enter"), c(t, o), e.props.onEntered && e.props.onEntered(t, n) }, e.onExit = function(t) { var n = e.getClassNames("exit").className;
                            e.removeClasses(t, "appear"), e.removeClasses(t, "enter"), c(t, n), e.props.onExit && e.props.onExit(t) }, e.onExiting = function(t) { var n = e.getClassNames("exit").activeClassName;
                            e.reflowAndAddClass(t, n), e.props.onExiting && e.props.onExiting(t) }, e.onExited = function(t) { var n = e.getClassNames("exit").doneClassName;
                            e.removeClasses(t, "exit"), c(t, n), e.props.onExited && e.props.onExited(t) }, e.getClassNames = function(t) { var n = e.props.classNames,
                                r = "string" === typeof n,
                                i = r ? (r && n ? n + "-" : "") + t : n[t]; return { className: i, activeClassName: r ? i + "-active" : n[t + "Active"], doneClassName: r ? i + "-done" : n[t + "Done"] } }, e }
                    n = t, (e = r).prototype = Object.create(n.prototype), e.prototype.constructor = e, e.__proto__ = n; var i = r.prototype; return i.removeClasses = function(t, e) { var n = this.getClassNames(e),
                            r = n.className,
                            i = n.activeClassName,
                            o = n.doneClassName;
                        r && l(t, r), i && l(t, i), o && l(t, o) }, i.reflowAndAddClass = function(t, e) { e && (t && t.scrollTop, c(t, e)) }, i.render = function() { var t = u({}, this.props); return delete t.classNames, o.default.createElement(a.default, u({}, t, { onEnter: this.onEnter, onEntered: this.onEntered, onEntering: this.onEntering, onExit: this.onExit, onExiting: this.onExiting, onExited: this.onExited })) }, r }(o.default.Component);
            h.defaultProps = { classNames: "" }, h.propTypes = {}; var f = h;
            e.default = f, t.exports = e.default }, 1030: function(t, e, n) { "use strict"; var r = n(1031);
            e.__esModule = !0, e.default = function(t, e) { t.classList ? t.classList.add(e) : (0, i.default)(t, e) || ("string" === typeof t.className ? t.className = t.className + " " + e : t.setAttribute("class", (t.className && t.className.baseVal || "") + " " + e)) }; var i = r(n(1032));
            t.exports = e.default }, 1031: function(t, e) { t.exports = function(t) { return t && t.__esModule ? t : { default: t } }, t.exports.default = t.exports, t.exports.__esModule = !0 }, 1032: function(t, e, n) { "use strict";
            e.__esModule = !0, e.default = function(t, e) { return t.classList ? !!e && t.classList.contains(e) : -1 !== (" " + (t.className.baseVal || t.className) + " ").indexOf(" " + e + " ") }, t.exports = e.default }, 1033: function(t, e, n) { "use strict";

            function r(t, e) { return t.replace(new RegExp("(^|\\s)" + e + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "") }
            t.exports = function(t, e) { t.classList ? t.classList.remove(e) : "string" === typeof t.className ? t.className = r(t.className, e) : t.setAttribute("class", r(t.className && t.className.baseVal || "", e)) } }, 1034: function(t, e, n) { "use strict";
            e.__esModule = !0, e.default = void 0;
            a(n(48)); var r = a(n(1)),
                i = n(106),
                o = a(n(904));

            function a(t) { return t && t.__esModule ? t : { default: t } } var s = function(t) { var e, n;

                function a() { for (var e, n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i]; return (e = t.call.apply(t, [this].concat(r)) || this).handleEnter = function() { for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r]; return e.handleLifecycle("onEnter", 0, n) }, e.handleEntering = function() { for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r]; return e.handleLifecycle("onEntering", 0, n) }, e.handleEntered = function() { for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r]; return e.handleLifecycle("onEntered", 0, n) }, e.handleExit = function() { for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r]; return e.handleLifecycle("onExit", 1, n) }, e.handleExiting = function() { for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r]; return e.handleLifecycle("onExiting", 1, n) }, e.handleExited = function() { for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r]; return e.handleLifecycle("onExited", 1, n) }, e }
                n = t, (e = a).prototype = Object.create(n.prototype), e.prototype.constructor = e, e.__proto__ = n; var s = a.prototype; return s.handleLifecycle = function(t, e, n) { var o, a = this.props.children,
                        s = r.default.Children.toArray(a)[e];
                    s.props[t] && (o = s.props)[t].apply(o, n), this.props[t] && this.props[t]((0, i.findDOMNode)(this)) }, s.render = function() { var t = this.props,
                        e = t.children,
                        n = t.in,
                        i = function(t, e) { if (null == t) return {}; var n, r, i = {},
                                o = Object.keys(t); for (r = 0; r < o.length; r++) n = o[r], e.indexOf(n) >= 0 || (i[n] = t[n]); return i }(t, ["children", "in"]),
                        a = r.default.Children.toArray(e),
                        s = a[0],
                        u = a[1]; return delete i.onEnter, delete i.onEntering, delete i.onEntered, delete i.onExit, delete i.onExiting, delete i.onExited, r.default.createElement(o.default, i, n ? r.default.cloneElement(s, { key: "first", onEnter: this.handleEnter, onEntering: this.handleEntering, onEntered: this.handleEntered }) : r.default.cloneElement(u, { key: "second", onEnter: this.handleExit, onEntering: this.handleExiting, onEntered: this.handleExited })) }, a }(r.default.Component);
            s.propTypes = {}; var u = s;
            e.default = u, t.exports = e.default }, 1035: function(t, e, n) { "use strict";
            e.__esModule = !0, e.getChildMapping = i, e.mergeChildMappings = o, e.getInitialChildMapping = function(t, e) { return i(t.children, (function(n) { return (0, r.cloneElement)(n, { onExited: e.bind(null, n), in: !0, appear: a(n, "appear", t), enter: a(n, "enter", t), exit: a(n, "exit", t) }) })) }, e.getNextChildMapping = function(t, e, n) { var s = i(t.children),
                    u = o(e, s); return Object.keys(u).forEach((function(i) { var o = u[i]; if ((0, r.isValidElement)(o)) { var c = i in e,
                            l = i in s,
                            h = e[i],
                            f = (0, r.isValidElement)(h) && !h.props.in;!l || c && !f ? l || !c || f ? l && c && (0, r.isValidElement)(h) && (u[i] = (0, r.cloneElement)(o, { onExited: n.bind(null, o), in: h.props.in, exit: a(o, "exit", t), enter: a(o, "enter", t) })) : u[i] = (0, r.cloneElement)(o, { in: !1 }) : u[i] = (0, r.cloneElement)(o, { onExited: n.bind(null, o), in: !0, exit: a(o, "exit", t), enter: a(o, "enter", t) }) } })), u }; var r = n(1);

            function i(t, e) { var n = Object.create(null); return t && r.Children.map(t, (function(t) { return t })).forEach((function(t) { n[t.key] = function(t) { return e && (0, r.isValidElement)(t) ? e(t) : t }(t) })), n }

            function o(t, e) {
                function n(n) { return n in e ? e[n] : t[n] }
                t = t || {}, e = e || {}; var r, i = Object.create(null),
                    o = []; for (var a in t) a in e ? o.length && (i[a] = o, o = []) : o.push(a); var s = {}; for (var u in e) { if (i[u])
                        for (r = 0; r < i[u].length; r++) { var c = i[u][r];
                            s[i[u][r]] = n(c) }
                    s[u] = n(u) } for (r = 0; r < o.length; r++) s[o[r]] = n(o[r]); return s }

            function a(t, e, n) { return null != n[e] ? n[e] : t.props[e] } }, 1036: function(t, e, n) { "use strict";
            n.d(e, "a", (function() { return C })); var r = n(213),
                i = n.n(r),
                o = n(310),
                a = n.n(o),
                s = n(1),
                u = n.n(s),
                c = n(477),
                l = n.n(c),
                h = n(842),
                f = n(847),
                p = n(782),
                d = n(846),
                y = n(805),
                v = n(797),
                g = n(772),
                b = n(773);

            function m(t) { return (m = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t })(t) }

            function x() { return (x = Object.assign || function(t) { for (var e = 1; e < arguments.length; e++) { var n = arguments[e]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]) } return t }).apply(this, arguments) }

            function w(t, e) { var n = Object.keys(t); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), n.push.apply(n, r) } return n }

            function O(t) { for (var e = 1; e < arguments.length; e++) { var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? w(Object(n), !0).forEach((function(e) { _(t, e, n[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : w(Object(n)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })) } return t }

            function _(t, e, n) { return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t }

            function M(t, e) { if (null == t) return {}; var n, r, i = function(t, e) { if (null == t) return {}; var n, r, i = {},
                        o = Object.keys(t); for (r = 0; r < o.length; r++) n = o[r], e.indexOf(n) >= 0 || (i[n] = t[n]); return i }(t, e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(t); for (r = 0; r < o.length; r++) n = o[r], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (i[n] = t[n]) } return i }

            function j(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

            function S(t, e) { for (var n = 0; n < e.length; n++) { var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r) } }

            function E(t, e) { return (E = Object.setPrototypeOf || function(t, e) { return t.__proto__ = e, t })(t, e) }

            function k(t) { var e = function() { if ("undefined" === typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" === typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = P(t); if (e) { var i = P(this).constructor;
                        n = Reflect.construct(r, arguments, i) } else n = r.apply(this, arguments); return A(this, n) } }

            function A(t, e) { return !e || "object" !== m(e) && "function" !== typeof e ? function(t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t }(t) : e }

            function P(t) { return (P = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) { return t.__proto__ || Object.getPrototypeOf(t) })(t) } var C = function(t) {! function(t, e) { if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), e && E(t, e) }(s, t); var e, n, r, o = k(s);

                function s() { return j(this, s), o.apply(this, arguments) } return e = s, r = [{ key: "getTicks", value: function(t) { var e = t.tick,
                            n = t.ticks,
                            r = t.viewBox,
                            i = t.minTickGap,
                            o = t.orientation,
                            a = t.interval,
                            u = t.tickFormatter,
                            c = t.unit; return n && n.length && e ? Object(g.g)(a) || v.a.isSsr ? s.getNumberIntervalTicks(n, "number" === typeof a && Object(g.g)(a) ? a : 0) : "preserveStartEnd" === a ? s.getTicksStart({ ticks: n, tickFormatter: u, viewBox: r, orientation: o, minTickGap: i, unit: c }, !0) : "preserveStart" === a ? s.getTicksStart({ ticks: n, tickFormatter: u, viewBox: r, orientation: o, minTickGap: i, unit: c }) : s.getTicksEnd({ ticks: n, tickFormatter: u, viewBox: r, orientation: o, minTickGap: i, unit: c }) : [] } }, { key: "getNumberIntervalTicks", value: function(t, e) { return t.filter((function(t, n) { return n % (e + 1) === 0 })) } }, { key: "getTicksStart", value: function(t, e) { var n, r, i = t.ticks,
                            o = t.tickFormatter,
                            s = t.viewBox,
                            u = t.orientation,
                            c = t.minTickGap,
                            l = t.unit,
                            h = s.x,
                            p = s.y,
                            d = s.width,
                            y = s.height,
                            v = "top" === u || "bottom" === u ? "width" : "height",
                            b = (i || []).slice(),
                            m = l && "width" === v ? Object(f.c)(l)[v] : 0,
                            x = b.length,
                            w = x >= 2 ? Object(g.i)(b[1].coordinate - b[0].coordinate) : 1; if (1 === w ? (n = "width" === v ? h : p, r = "width" === v ? h + d : p + y) : (n = "width" === v ? h + d : p + y, r = "width" === v ? h : p), e) { var _ = i[x - 1],
                                M = a()(o) ? o(_.value, x - 1) : _.value,
                                j = Object(f.c)(M)[v] + m,
                                S = w * (_.coordinate + w * j / 2 - r);
                            b[x - 1] = _ = O(O({}, _), {}, { tickCoord: S > 0 ? _.coordinate - S * w : _.coordinate }), w * (_.tickCoord - w * j / 2 - n) >= 0 && w * (_.tickCoord + w * j / 2 - r) <= 0 && (r = _.tickCoord - w * (j / 2 + c), b[x - 1] = O(O({}, _), {}, { isShow: !0 })) } for (var E = e ? x - 1 : x, k = 0; k < E; k++) { var A = b[k],
                                P = a()(o) ? o(A.value, k) : A.value,
                                C = Object(f.c)(P)[v] + m; if (0 === k) { var T = w * (A.coordinate - w * C / 2 - n);
                                b[k] = A = O(O({}, A), {}, { tickCoord: T < 0 ? A.coordinate - T * w : A.coordinate }) } else b[k] = A = O(O({}, A), {}, { tickCoord: A.coordinate });
                            w * (A.tickCoord - w * C / 2 - n) >= 0 && w * (A.tickCoord + w * C / 2 - r) <= 0 && (n = A.tickCoord + w * (C / 2 + c), b[k] = O(O({}, A), {}, { isShow: !0 })) } return b.filter((function(t) { return t.isShow })) } }, { key: "getTicksEnd", value: function(t) { var e, n, r = t.ticks,
                            i = t.tickFormatter,
                            o = t.viewBox,
                            s = t.orientation,
                            u = t.minTickGap,
                            c = t.unit,
                            l = o.x,
                            h = o.y,
                            p = o.width,
                            d = o.height,
                            y = "top" === s || "bottom" === s ? "width" : "height",
                            v = c && "width" === y ? Object(f.c)(c)[y] : 0,
                            b = (r || []).slice(),
                            m = b.length,
                            x = m >= 2 ? Object(g.i)(b[1].coordinate - b[0].coordinate) : 1;
                        1 === x ? (e = "width" === y ? l : h, n = "width" === y ? l + p : h + d) : (e = "width" === y ? l + p : h + d, n = "width" === y ? l : h); for (var w = m - 1; w >= 0; w--) { var _ = b[w],
                                M = a()(i) ? i(_.value, m - w - 1) : _.value,
                                j = Object(f.c)(M)[y] + v; if (w === m - 1) { var S = x * (_.coordinate + x * j / 2 - n);
                                b[w] = _ = O(O({}, _), {}, { tickCoord: S > 0 ? _.coordinate - S * x : _.coordinate }) } else b[w] = _ = O(O({}, _), {}, { tickCoord: _.coordinate });
                            x * (_.tickCoord - x * j / 2 - e) >= 0 && x * (_.tickCoord + x * j / 2 - n) <= 0 && (n = _.tickCoord - x * (j / 2 + u), b[w] = O(O({}, _), {}, { isShow: !0 })) } return b.filter((function(t) { return t.isShow })) } }, { key: "renderTickItem", value: function(t, e, n) { return u.a.isValidElement(t) ? u.a.cloneElement(t, e) : a()(t) ? t(e) : u.a.createElement(d.a, x({}, e, { className: "recharts-cartesian-axis-tick-value" }), n) } }], (n = [{ key: "shouldComponentUpdate", value: function(t) { var e = t.viewBox,
                            n = M(t, ["viewBox"]),
                            r = this.props,
                            i = r.viewBox,
                            o = M(r, ["viewBox"]); return !Object(h.a)(e, i) || !Object(h.a)(n, o) } }, { key: "getTickLineCoord", value: function(t) { var e, n, r, i, o, a, s = this.props,
                            u = s.x,
                            c = s.y,
                            l = s.width,
                            h = s.height,
                            f = s.orientation,
                            p = s.tickSize,
                            d = s.mirror,
                            y = s.tickMargin,
                            v = d ? -1 : 1,
                            b = t.tickSize || p,
                            m = Object(g.g)(t.tickCoord) ? t.tickCoord : t.coordinate; switch (f) {
                            case "top":
                                e = n = t.coordinate, a = (r = (i = c + +!d * h) - v * b) - v * y, o = m; break;
                            case "left":
                                r = i = t.coordinate, o = (e = (n = u + +!d * l) - v * b) - v * y, a = m; break;
                            case "right":
                                r = i = t.coordinate, o = (e = (n = u + +d * l) + v * b) + v * y, a = m; break;
                            default:
                                e = n = t.coordinate, a = (r = (i = c + +d * h) + v * b) + v * y, o = m } return { line: { x1: e, y1: r, x2: n, y2: i }, tick: { x: o, y: a } } } }, { key: "getTickTextAnchor", value: function() { var t, e = this.props,
                            n = e.orientation,
                            r = e.mirror; switch (n) {
                            case "left":
                                t = r ? "start" : "end"; break;
                            case "right":
                                t = r ? "end" : "start"; break;
                            default:
                                t = "middle" } return t } }, { key: "getTickVerticalAnchor", value: function() { var t = this.props,
                            e = t.orientation,
                            n = t.mirror,
                            r = "end"; switch (e) {
                            case "left":
                            case "right":
                                r = "middle"; break;
                            case "top":
                                r = n ? "start" : "end"; break;
                            default:
                                r = n ? "end" : "start" } return r } }, { key: "renderAxisLine", value: function() { var t = this.props,
                            e = t.x,
                            n = t.y,
                            r = t.width,
                            o = t.height,
                            a = t.orientation,
                            s = t.mirror,
                            c = t.axisLine,
                            h = O(O(O({}, Object(b.c)(this.props)), Object(b.c)(c)), {}, { fill: "none" }); if ("top" === a || "bottom" === a) { var f = +("top" === a && !s || "bottom" === a && s);
                            h = O(O({}, h), {}, { x1: e, y1: n + f * o, x2: e + r, y2: n + f * o }) } else { var p = +("left" === a && !s || "right" === a && s);
                            h = O(O({}, h), {}, { x1: e + p * r, y1: n, x2: e + p * r, y2: n + o }) } return u.a.createElement("line", x({}, h, { className: l()("recharts-cartesian-axis-line", i()(c, "className")) })) } }, { key: "renderTicks", value: function(t) { var e = this,
                            n = this.props,
                            r = n.tickLine,
                            o = n.stroke,
                            c = n.tick,
                            h = n.tickFormatter,
                            f = n.unit,
                            d = s.getTicks(O(O({}, this.props), {}, { ticks: t })),
                            y = this.getTickTextAnchor(),
                            v = this.getTickVerticalAnchor(),
                            g = Object(b.c)(this.props),
                            m = Object(b.c)(c),
                            w = O(O({}, g), {}, { fill: "none" }, Object(b.c)(r)),
                            _ = d.map((function(t, n) { var _ = e.getTickLineCoord(t),
                                    M = _.line,
                                    j = _.tick,
                                    S = O(O(O(O({ textAnchor: y, verticalAnchor: v }, g), {}, { stroke: "none", fill: o }, m), j), {}, { index: n, payload: t, visibleTicksCount: d.length, tickFormatter: h }); return u.a.createElement(p.a, x({ className: "recharts-cartesian-axis-tick", key: "tick-".concat(n) }, Object(b.b)(e.props, t, n)), r && u.a.createElement("line", x({}, w, M, { className: l()("recharts-cartesian-axis-tick-line", i()(r, "className")) })), c && s.renderTickItem(c, S, "".concat(a()(h) ? h(t.value, n) : t.value).concat(f || ""))) })); return u.a.createElement("g", { className: "recharts-cartesian-axis-ticks" }, _) } }, { key: "render", value: function() { var t = this.props,
                            e = t.axisLine,
                            n = t.width,
                            r = t.height,
                            i = t.ticksGenerator,
                            o = t.className; if (t.hide) return null; var s = this.props,
                            c = s.ticks,
                            h = M(s, ["ticks"]),
                            f = c; return a()(i) && (f = c && c.length > 0 ? i(this.props) : i(h)), n <= 0 || r <= 0 || !f || !f.length ? null : u.a.createElement(p.a, { className: l()("recharts-cartesian-axis", o) }, e && this.renderAxisLine(), this.renderTicks(f), y.a.renderCallByParent(this.props)) } }]) && S(e.prototype, n), r && S(e, r), s }(s.Component);
            C.displayName = "CartesianAxis", C.defaultProps = { x: 0, y: 0, width: 0, height: 0, viewBox: { x: 0, y: 0, width: 0, height: 0 }, orientation: "bottom", ticks: [], stroke: "#666", tickLine: !0, axisLine: !0, tick: !0, mirror: !1, minTickGap: 5, tickSize: 6, tickMargin: 2, interval: "preserveEnd" } }, 1037: function(t, e, n) { "use strict";
            n.d(e, "a", (function() { return g })); var r = n(1),
                i = n.n(r),
                o = n(477),
                a = n.n(o),
                s = n(772),
                u = n(773);

            function c(t) { return (c = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t })(t) }

            function l() { return (l = Object.assign || function(t) { for (var e = 1; e < arguments.length; e++) { var n = arguments[e]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]) } return t }).apply(this, arguments) }

            function h(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

            function f(t, e) { for (var n = 0; n < e.length; n++) { var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r) } }

            function p(t, e) { return (p = Object.setPrototypeOf || function(t, e) { return t.__proto__ = e, t })(t, e) }

            function d(t) { var e = function() { if ("undefined" === typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" === typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = v(t); if (e) { var i = v(this).constructor;
                        n = Reflect.construct(r, arguments, i) } else n = r.apply(this, arguments); return y(this, n) } }

            function y(t, e) { return !e || "object" !== c(e) && "function" !== typeof e ? function(t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t }(t) : e }

            function v(t) { return (v = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) { return t.__proto__ || Object.getPrototypeOf(t) })(t) } var g = function(t) {! function(t, e) { if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), e && p(t, e) }(c, t); var e, n, r, o = d(c);

                function c() { return h(this, c), o.apply(this, arguments) } return e = c, r = [{ key: "getPath", value: function(t, e, n, r, i, o) { return "M".concat(t, ",").concat(i, "v").concat(r, "M").concat(o, ",").concat(e, "h").concat(n) } }], (n = [{ key: "render", value: function() { var t = this.props,
                            e = t.x,
                            n = t.y,
                            r = t.width,
                            o = t.height,
                            h = t.top,
                            f = t.left,
                            p = t.className; return Object(s.g)(e) && Object(s.g)(n) && Object(s.g)(r) && Object(s.g)(o) && Object(s.g)(h) && Object(s.g)(f) ? i.a.createElement("path", l({}, Object(u.c)(this.props, !0), { className: a()("recharts-cross", p), d: c.getPath(e, n, r, o, h, f) })) : null } }]) && f(e.prototype, n), r && f(e, r), c }(r.PureComponent);
            g.defaultProps = { x: 0, y: 0, top: 0, left: 0, width: 0, height: 0 } }, 1038: function(t, e, n) { "use strict";
            n.d(e, "a", (function() { return x })); var r = n(1),
                i = n.n(r),
                o = n(477),
                a = n.n(o),
                s = n(773),
                u = n(840),
                c = n(772);

            function l(t) { return (l = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t })(t) }

            function h() { return (h = Object.assign || function(t) { for (var e = 1; e < arguments.length; e++) { var n = arguments[e]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]) } return t }).apply(this, arguments) }

            function f(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

            function p(t, e) { for (var n = 0; n < e.length; n++) { var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r) } }

            function d(t, e) { return (d = Object.setPrototypeOf || function(t, e) { return t.__proto__ = e, t })(t, e) }

            function y(t) { var e = function() { if ("undefined" === typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" === typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = g(t); if (e) { var i = g(this).constructor;
                        n = Reflect.construct(r, arguments, i) } else n = r.apply(this, arguments); return v(this, n) } }

            function v(t, e) { return !e || "object" !== l(e) && "function" !== typeof e ? function(t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t }(t) : e }

            function g(t) { return (g = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) { return t.__proto__ || Object.getPrototypeOf(t) })(t) } var b = function(t) { var e = t.cx,
                        n = t.cy,
                        r = t.radius,
                        i = t.angle,
                        o = t.sign,
                        a = t.isExternal,
                        s = t.cornerRadius,
                        c = t.cornerIsExternal,
                        l = s * (a ? 1 : -1) + r,
                        h = Math.asin(s / l) / u.a,
                        f = c ? i : i + o * h,
                        p = c ? i - o * h : i; return { center: Object(u.c)(e, n, l, f), circleTangency: Object(u.c)(e, n, r, f), lineTangency: Object(u.c)(e, n, l * Math.cos(h * u.a), p), theta: h } },
                m = function(t) { var e = t.cx,
                        n = t.cy,
                        r = t.innerRadius,
                        i = t.outerRadius,
                        o = t.startAngle,
                        a = function(t, e) { return Object(c.i)(e - t) * Math.min(Math.abs(e - t), 359.999) }(o, t.endAngle),
                        s = o + a,
                        l = Object(u.c)(e, n, i, o),
                        h = Object(u.c)(e, n, i, s),
                        f = "M ".concat(l.x, ",").concat(l.y, "\n    A ").concat(i, ",").concat(i, ",0,\n    ").concat(+(Math.abs(a) > 180), ",").concat(+(o > s), ",\n    ").concat(h.x, ",").concat(h.y, "\n  "); if (r > 0) { var p = Object(u.c)(e, n, r, o),
                            d = Object(u.c)(e, n, r, s);
                        f += "L ".concat(d.x, ",").concat(d.y, "\n            A ").concat(r, ",").concat(r, ",0,\n            ").concat(+(Math.abs(a) > 180), ",").concat(+(o <= s), ",\n            ").concat(p.x, ",").concat(p.y, " Z") } else f += "L ".concat(e, ",").concat(n, " Z"); return f },
                x = function(t) {! function(t, e) { if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), e && d(t, e) }(u, t); var e, n, r, o = y(u);

                    function u() { return f(this, u), o.apply(this, arguments) } return e = u, (n = [{ key: "render", value: function() { var t = this.props,
                                e = t.cx,
                                n = t.cy,
                                r = t.innerRadius,
                                o = t.outerRadius,
                                u = t.cornerRadius,
                                l = t.forceCornerRadius,
                                f = t.cornerIsExternal,
                                p = t.startAngle,
                                d = t.endAngle,
                                y = t.className; if (o < r || p === d) return null; var v, g = a()("recharts-sector", y),
                                x = o - r,
                                w = Object(c.c)(u, x, 0, !0); return v = w > 0 && Math.abs(p - d) < 360 ? function(t) { var e = t.cx,
                                    n = t.cy,
                                    r = t.innerRadius,
                                    i = t.outerRadius,
                                    o = t.cornerRadius,
                                    a = t.forceCornerRadius,
                                    s = t.cornerIsExternal,
                                    u = t.startAngle,
                                    l = t.endAngle,
                                    h = Object(c.i)(l - u),
                                    f = b({ cx: e, cy: n, radius: i, angle: u, sign: h, cornerRadius: o, cornerIsExternal: s }),
                                    p = f.circleTangency,
                                    d = f.lineTangency,
                                    y = f.theta,
                                    v = b({ cx: e, cy: n, radius: i, angle: l, sign: -h, cornerRadius: o, cornerIsExternal: s }),
                                    g = v.circleTangency,
                                    x = v.lineTangency,
                                    w = v.theta,
                                    O = s ? Math.abs(u - l) : Math.abs(u - l) - y - w; if (O < 0) return a ? "M ".concat(d.x, ",").concat(d.y, "\n        a").concat(o, ",").concat(o, ",0,0,1,").concat(2 * o, ",0\n        a").concat(o, ",").concat(o, ",0,0,1,").concat(2 * -o, ",0\n      ") : m({ cx: e, cy: n, innerRadius: r, outerRadius: i, startAngle: u, endAngle: l }); var _ = "M ".concat(d.x, ",").concat(d.y, "\n    A").concat(o, ",").concat(o, ",0,0,").concat(+(h < 0), ",").concat(p.x, ",").concat(p.y, "\n    A").concat(i, ",").concat(i, ",0,").concat(+(O > 180), ",").concat(+(h < 0), ",").concat(g.x, ",").concat(g.y, "\n    A").concat(o, ",").concat(o, ",0,0,").concat(+(h < 0), ",").concat(x.x, ",").concat(x.y, "\n  "); if (r > 0) { var M = b({ cx: e, cy: n, radius: r, angle: u, sign: h, isExternal: !0, cornerRadius: o, cornerIsExternal: s }),
                                        j = M.circleTangency,
                                        S = M.lineTangency,
                                        E = M.theta,
                                        k = b({ cx: e, cy: n, radius: r, angle: l, sign: -h, isExternal: !0, cornerRadius: o, cornerIsExternal: s }),
                                        A = k.circleTangency,
                                        P = k.lineTangency,
                                        C = k.theta,
                                        T = s ? Math.abs(u - l) : Math.abs(u - l) - E - C; if (T < 0 && 0 === o) return "".concat(_, "L").concat(e, ",").concat(n, "Z");
                                    _ += "L".concat(P.x, ",").concat(P.y, "\n      A").concat(o, ",").concat(o, ",0,0,").concat(+(h < 0), ",").concat(A.x, ",").concat(A.y, "\n      A").concat(r, ",").concat(r, ",0,").concat(+(T > 180), ",").concat(+(h > 0), ",").concat(j.x, ",").concat(j.y, "\n      A").concat(o, ",").concat(o, ",0,0,").concat(+(h < 0), ",").concat(S.x, ",").concat(S.y, "Z") } else _ += "L".concat(e, ",").concat(n, "Z"); return _ }({ cx: e, cy: n, innerRadius: r, outerRadius: o, cornerRadius: Math.min(w, x / 2), forceCornerRadius: l, cornerIsExternal: f, startAngle: p, endAngle: d }) : m({ cx: e, cy: n, innerRadius: r, outerRadius: o, startAngle: p, endAngle: d }), i.a.createElement("path", h({}, Object(s.c)(this.props, !0), { className: g, d: v })) } }]) && p(e.prototype, n), r && p(e, r), u }(r.PureComponent);
            x.defaultProps = { cx: 0, cy: 0, innerRadius: 0, outerRadius: 0, startAngle: 0, endAngle: 0, cornerRadius: 0, forceCornerRadius: !1, cornerIsExternal: !1 } }, 1039: function(t, e, n) { "use strict";
            n.d(e, "b", (function() { return i })), n.d(e, "a", (function() { return o })); var r = n(1040),
                i = new(n.n(r).a);
            i.setMaxListeners && i.setMaxListeners(10); var o = "recharts.syncMouseEvents" }, 1040: function(t, e, n) { "use strict"; var r = Object.prototype.hasOwnProperty,
                i = "~";

            function o() {}

            function a(t, e, n) { this.fn = t, this.context = e, this.once = n || !1 }

            function s(t, e, n, r, o) { if ("function" !== typeof n) throw new TypeError("The listener must be a function"); var s = new a(n, r || t, o),
                    u = i ? i + e : e; return t._events[u] ? t._events[u].fn ? t._events[u] = [t._events[u], s] : t._events[u].push(s) : (t._events[u] = s, t._eventsCount++), t }

            function u(t, e) { 0 === --t._eventsCount ? t._events = new o : delete t._events[e] }

            function c() { this._events = new o, this._eventsCount = 0 }
            Object.create && (o.prototype = Object.create(null), (new o).__proto__ || (i = !1)), c.prototype.eventNames = function() { var t, e, n = []; if (0 === this._eventsCount) return n; for (e in t = this._events) r.call(t, e) && n.push(i ? e.slice(1) : e); return Object.getOwnPropertySymbols ? n.concat(Object.getOwnPropertySymbols(t)) : n }, c.prototype.listeners = function(t) { var e = i ? i + t : t,
                    n = this._events[e]; if (!n) return []; if (n.fn) return [n.fn]; for (var r = 0, o = n.length, a = new Array(o); r < o; r++) a[r] = n[r].fn; return a }, c.prototype.listenerCount = function(t) { var e = i ? i + t : t,
                    n = this._events[e]; return n ? n.fn ? 1 : n.length : 0 }, c.prototype.emit = function(t, e, n, r, o, a) { var s = i ? i + t : t; if (!this._events[s]) return !1; var u, c, l = this._events[s],
                    h = arguments.length; if (l.fn) { switch (l.once && this.removeListener(t, l.fn, void 0, !0), h) {
                        case 1:
                            return l.fn.call(l.context), !0;
                        case 2:
                            return l.fn.call(l.context, e), !0;
                        case 3:
                            return l.fn.call(l.context, e, n), !0;
                        case 4:
                            return l.fn.call(l.context, e, n, r), !0;
                        case 5:
                            return l.fn.call(l.context, e, n, r, o), !0;
                        case 6:
                            return l.fn.call(l.context, e, n, r, o, a), !0 } for (c = 1, u = new Array(h - 1); c < h; c++) u[c - 1] = arguments[c];
                    l.fn.apply(l.context, u) } else { var f, p = l.length; for (c = 0; c < p; c++) switch (l[c].once && this.removeListener(t, l[c].fn, void 0, !0), h) {
                        case 1:
                            l[c].fn.call(l[c].context); break;
                        case 2:
                            l[c].fn.call(l[c].context, e); break;
                        case 3:
                            l[c].fn.call(l[c].context, e, n); break;
                        case 4:
                            l[c].fn.call(l[c].context, e, n, r); break;
                        default:
                            if (!u)
                                for (f = 1, u = new Array(h - 1); f < h; f++) u[f - 1] = arguments[f];
                            l[c].fn.apply(l[c].context, u) } } return !0 }, c.prototype.on = function(t, e, n) { return s(this, t, e, n, !1) }, c.prototype.once = function(t, e, n) { return s(this, t, e, n, !0) }, c.prototype.removeListener = function(t, e, n, r) { var o = i ? i + t : t; if (!this._events[o]) return this; if (!e) return u(this, o), this; var a = this._events[o]; if (a.fn) a.fn !== e || r && !a.once || n && a.context !== n || u(this, o);
                else { for (var s = 0, c = [], l = a.length; s < l; s++)(a[s].fn !== e || r && !a[s].once || n && a[s].context !== n) && c.push(a[s]);
                    c.length ? this._events[o] = 1 === c.length ? c[0] : c : u(this, o) } return this }, c.prototype.removeAllListeners = function(t) { var e; return t ? (e = i ? i + t : t, this._events[e] && u(this, e)) : (this._events = new o, this._eventsCount = 0), this }, c.prototype.off = c.prototype.removeListener, c.prototype.addListener = c.prototype.on, c.prefixed = i, c.EventEmitter = c, t.exports = c }, 1041: function(t, e, n) { "use strict";
            n.d(e, "a", (function() { return U })); var r = n(803),
                i = n.n(r),
                o = n(837),
                a = n.n(o),
                s = n(893),
                u = n.n(s),
                c = n(310),
                l = n.n(c),
                h = n(213),
                f = n.n(h),
                p = n(781),
                d = n.n(p),
                y = n(99),
                v = n.n(y),
                g = n(1),
                b = n.n(g),
                m = n(477),
                x = n.n(m),
                w = n(830),
                O = n(975),
                _ = n(848),
                M = n(782),
                j = n(905),
                S = n(797),
                E = n(772),
                k = n(795),
                A = n(773);

            function P(t) { return (P = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t })(t) }

            function C(t, e) { if (null == t) return {}; var n, r, i = function(t, e) { if (null == t) return {}; var n, r, i = {},
                        o = Object.keys(t); for (r = 0; r < o.length; r++) n = o[r], e.indexOf(n) >= 0 || (i[n] = t[n]); return i }(t, e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(t); for (r = 0; r < o.length; r++) n = o[r], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (i[n] = t[n]) } return i }

            function T() { return (T = Object.assign || function(t) { for (var e = 1; e < arguments.length; e++) { var n = arguments[e]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]) } return t }).apply(this, arguments) }

            function I(t, e) { var n = Object.keys(t); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), n.push.apply(n, r) } return n }

            function N(t) { for (var e = 1; e < arguments.length; e++) { var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? I(Object(n), !0).forEach((function(e) { D(t, e, n[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : I(Object(n)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })) } return t }

            function D(t, e, n) { return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t }

            function R(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

            function L(t, e) { for (var n = 0; n < e.length; n++) { var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r) } }

            function B(t, e) { return (B = Object.setPrototypeOf || function(t, e) { return t.__proto__ = e, t })(t, e) }

            function F(t) { var e = function() { if ("undefined" === typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" === typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = V(t); if (e) { var i = V(this).constructor;
                        n = Reflect.construct(r, arguments, i) } else n = r.apply(this, arguments); return z(this, n) } }

            function z(t, e) { return !e || "object" !== P(e) && "function" !== typeof e ? function(t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t }(t) : e }

            function V(t) { return (V = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) { return t.__proto__ || Object.getPrototypeOf(t) })(t) } var U = function(t) {! function(t, e) { if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), e && B(t, e) }(s, t); var e, n, r, o = F(s);

                function s() { var t;
                    R(this, s); for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r]; return (t = o.call.apply(o, [this].concat(n))).state = { isAnimationFinished: !0 }, t.id = Object(E.j)("recharts-area-"), t.handleAnimationEnd = function() { var e = t.props.onAnimationEnd;
                        t.setState({ isAnimationFinished: !0 }), l()(e) && e() }, t.handleAnimationStart = function() { var e = t.props.onAnimationStart;
                        t.setState({ isAnimationFinished: !1 }), l()(e) && e() }, t } return e = s, r = [{ key: "getDerivedStateFromProps", value: function(t, e) { return t.animationId !== e.prevAnimationId ? { prevAnimationId: t.animationId, curPoints: t.points, curBaseLine: t.baseLine, prevPoints: e.curPoints, prevBaseLine: e.curBaseLine } : t.points !== e.curPoints || t.baseLine !== e.curBaseLine ? { curPoints: t.points, curBaseLine: t.baseLine } : null } }], (n = [{ key: "renderDots", value: function(t, e) { var n = this.props.isAnimationActive,
                            r = this.state.isAnimationFinished; if (n && !r) return null; var i = this.props,
                            o = i.dot,
                            a = i.points,
                            u = i.dataKey,
                            c = Object(A.c)(this.props),
                            l = Object(A.c)(o, !0),
                            h = a.map((function(t, e) { var n = N(N(N({ key: "dot-".concat(e), r: 3 }, c), l), {}, { dataKey: u, cx: t.x, cy: t.y, index: e, value: t.value, payload: t.payload }); return s.renderDotItem(o, n) })),
                            f = { clipPath: t ? "url(#clipPath-".concat(e, ")") : null }; return b.a.createElement(M.a, T({ className: "recharts-area-dots" }, f), h) } }, { key: "renderHorizontalRect", value: function(t) { var e = this.props,
                            n = e.baseLine,
                            r = e.points,
                            i = e.strokeWidth,
                            o = r[0].x,
                            a = r[r.length - 1].x,
                            s = t * Math.abs(o - a),
                            c = u()(r.map((function(t) { return t.y || 0 }))); return Object(E.g)(n) && "number" === typeof n ? c = Math.max(n, c) : n && v()(n) && n.length && (c = Math.max(u()(n.map((function(t) { return t.y || 0 }))), c)), Object(E.g)(c) ? b.a.createElement("rect", { x: o < a ? o : o - s, y: 0, width: s, height: Math.floor(c + (i ? parseInt("".concat(i), 10) : 1)) }) : null } }, { key: "renderVerticalRect", value: function(t) { var e = this.props,
                            n = e.baseLine,
                            r = e.points,
                            i = e.strokeWidth,
                            o = r[0].y,
                            a = r[r.length - 1].y,
                            s = t * Math.abs(o - a),
                            c = u()(r.map((function(t) { return t.x || 0 }))); return Object(E.g)(n) && "number" === typeof n ? c = Math.max(n, c) : n && v()(n) && n.length && (c = Math.max(u()(n.map((function(t) { return t.x || 0 }))), c)), Object(E.g)(c) ? b.a.createElement("rect", { x: 0, y: o < a ? o : o - s, width: c + (i ? parseInt("".concat(i), 10) : 1), height: Math.floor(s) }) : null } }, { key: "renderClipRect", value: function(t) { return "vertical" === this.props.layout ? this.renderVerticalRect(t) : this.renderHorizontalRect(t) } }, { key: "renderAreaStatically", value: function(t, e, n, r) { var i = this.props,
                            o = i.layout,
                            a = i.type,
                            s = i.stroke,
                            u = i.connectNulls,
                            c = i.isRange,
                            l = (i.ref, C(i, ["layout", "type", "stroke", "connectNulls", "isRange", "ref"])); return b.a.createElement(M.a, { clipPath: n ? "url(#clipPath-".concat(r, ")") : null }, b.a.createElement(O.a, T({}, Object(A.c)(l, !0), { points: t, connectNulls: u, type: a, baseLine: e, layout: o, stroke: "none", className: "recharts-area-area" })), "none" !== s && b.a.createElement(O.a, T({}, Object(A.c)(this.props), { className: "recharts-area-curve", layout: o, type: a, connectNulls: u, fill: "none", points: t })), "none" !== s && c && b.a.createElement(O.a, T({}, Object(A.c)(this.props), { className: "recharts-area-curve", layout: o, type: a, connectNulls: u, fill: "none", points: e }))) } }, { key: "renderAreaWithAnimation", value: function(t, e) { var n = this,
                            r = this.props,
                            i = r.points,
                            o = r.baseLine,
                            s = r.isAnimationActive,
                            u = r.animationBegin,
                            c = r.animationDuration,
                            l = r.animationEasing,
                            h = r.animationId,
                            f = this.state,
                            p = f.prevPoints,
                            y = f.prevBaseLine; return b.a.createElement(w.a, { begin: u, duration: c, isActive: s, easing: l, from: { t: 0 }, to: { t: 1 }, key: "area-".concat(h), onAnimationEnd: this.handleAnimationEnd, onAnimationStart: this.handleAnimationStart }, (function(r) { var s = r.t; if (p) { var u, c = p.length / i.length,
                                    l = i.map((function(t, e) { var n = Math.floor(e * c); if (p[n]) { var r = p[n],
                                                i = Object(E.e)(r.x, t.x),
                                                o = Object(E.e)(r.y, t.y); return N(N({}, t), {}, { x: i(s), y: o(s) }) } return t })); return u = Object(E.g)(o) && "number" === typeof o ? Object(E.e)(y, o)(s) : d()(o) || a()(o) ? Object(E.e)(y, 0)(s) : o.map((function(t, e) { var n = Math.floor(e * c); if (y[n]) { var r = y[n],
                                            i = Object(E.e)(r.x, t.x),
                                            o = Object(E.e)(r.y, t.y); return N(N({}, t), {}, { x: i(s), y: o(s) }) } return t })), n.renderAreaStatically(l, u, t, e) } return b.a.createElement(M.a, null, b.a.createElement("defs", null, b.a.createElement("clipPath", { id: "animationClipPath-".concat(e) }, n.renderClipRect(s))), b.a.createElement(M.a, { clipPath: "url(#animationClipPath-".concat(e, ")") }, n.renderAreaStatically(i, o, t, e))) })) } }, { key: "renderArea", value: function(t, e) { var n = this.props,
                            r = n.points,
                            o = n.baseLine,
                            a = n.isAnimationActive,
                            s = this.state,
                            u = s.prevPoints,
                            c = s.prevBaseLine,
                            l = s.totalLength; return a && r && r.length && (!u && l > 0 || !i()(u, r) || !i()(c, o)) ? this.renderAreaWithAnimation(t, e) : this.renderAreaStatically(r, o, t, e) } }, { key: "render", value: function() { var t = this.props,
                            e = t.hide,
                            n = t.dot,
                            r = t.points,
                            i = t.className,
                            o = t.top,
                            a = t.left,
                            s = t.xAxis,
                            u = t.yAxis,
                            c = t.width,
                            l = t.height,
                            h = t.isAnimationActive,
                            f = t.id; if (e || !r || !r.length) return null; var p = this.state.isAnimationFinished,
                            y = 1 === r.length,
                            v = x()("recharts-area", i),
                            g = s && s.allowDataOverflow || u && u.allowDataOverflow,
                            m = d()(f) ? this.id : f; return b.a.createElement(M.a, { className: v }, g ? b.a.createElement("defs", null, b.a.createElement("clipPath", { id: "clipPath-".concat(m) }, b.a.createElement("rect", { x: a, y: o, width: c, height: Math.floor(l) }))) : null, y ? null : this.renderArea(g, m), (n || y) && this.renderDots(g, m), (!h || p) && j.a.renderCallByParent(this.props, r)) } }]) && L(e.prototype, n), r && L(e, r), s }(g.PureComponent);
            U.displayName = "Area", U.defaultProps = { stroke: "#3182bd", fill: "#3182bd", fillOpacity: .6, xAxisId: 0, yAxisId: 0, legendType: "line", connectNulls: !1, points: [], dot: !1, activeDot: !0, hide: !1, isAnimationActive: !S.a.isSsr, animationBegin: 0, animationDuration: 1500, animationEasing: "ease" }, U.getBaseValue = function(t, e, n) { var r = t.layout,
                    i = t.baseValue; if (Object(E.g)(i) && "number" === typeof i) return i; var o = "horizontal" === r ? n : e,
                    a = o.scale.domain(); if ("number" === o.type) { var s = Math.max(a[0], a[1]),
                        u = Math.min(a[0], a[1]); return "dataMin" === i ? u : "dataMax" === i || s < 0 ? s : Math.max(Math.min(a[0], a[1]), 0) } return "dataMin" === i ? a[0] : "dataMax" === i ? a[1] : a[0] }, U.getComposedData = function(t) { var e, n = t.props,
                    r = t.xAxis,
                    i = t.yAxis,
                    o = t.xAxisTicks,
                    a = t.yAxisTicks,
                    s = t.bandSize,
                    u = t.dataKey,
                    c = t.stackedData,
                    l = t.dataStartIndex,
                    h = t.displayedData,
                    p = t.offset,
                    y = n.layout,
                    g = c && c.length,
                    b = U.getBaseValue(n, r, i),
                    m = !1,
                    x = h.map((function(t, e) { var n, h = Object(k.w)(t, u);
                        g ? n = c[l + e] : (n = h, v()(n) ? m = !0 : n = [b, n]); var f = d()(n[1]) || g && d()(h); return "horizontal" === y ? { x: Object(k.k)({ axis: r, ticks: o, bandSize: s, entry: t, index: e }), y: f ? null : i.scale(n[1]), value: n, payload: t } : { x: f ? null : r.scale(n[1]), y: Object(k.k)({ axis: i, ticks: a, bandSize: s, entry: t, index: e }), value: n, payload: t } })); return e = g || m ? x.map((function(t) { return "horizontal" === y ? { x: t.x, y: d()(f()(t, "value[0]")) || d()(f()(t, "y")) ? null : i.scale(f()(t, "value[0]")) } : { x: d()(f()(t, "value[0]")) ? null : r.scale(f()(t, "value[0]")), y: t.y } })) : "horizontal" === y ? i.scale(b) : r.scale(b), N({ points: x, baseLine: e, layout: y, isRange: m }, p) }, U.renderDotItem = function(t, e) { return b.a.isValidElement(t) ? b.a.cloneElement(t, e) : l()(t) ? t(e) : b.a.createElement(_.a, T({}, e, { className: "recharts-area-dot" })) } }, 1042: function(t, e) { t.exports = function(t) { var e = null == t ? 0 : t.length; return e ? t[e - 1] : void 0 } }, 1229: function(t, e, n) { "use strict"; var r = function(t, e, n) { t.prototype = e.prototype = n, n.constructor = t };

            function i(t, e) { var n = Object.create(t.prototype); for (var r in e) n[r] = e[r]; return n }

            function o() {} var a = .7,
                s = 1 / a,
                u = "\\s*([+-]?\\d+)\\s*",
                c = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
                l = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
                h = /^#([0-9a-f]{3,8})$/,
                f = new RegExp("^rgb\\(" + [u, u, u] + "\\)$"),
                p = new RegExp("^rgb\\(" + [l, l, l] + "\\)$"),
                d = new RegExp("^rgba\\(" + [u, u, u, c] + "\\)$"),
                y = new RegExp("^rgba\\(" + [l, l, l, c] + "\\)$"),
                v = new RegExp("^hsl\\(" + [c, l, l] + "\\)$"),
                g = new RegExp("^hsla\\(" + [c, l, l, c] + "\\)$"),
                b = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 };

            function m() { return this.rgb().formatHex() }

            function x() { return this.rgb().formatRgb() }

            function w(t) { var e, n; return t = (t + "").trim().toLowerCase(), (e = h.exec(t)) ? (n = e[1].length, e = parseInt(e[1], 16), 6 === n ? O(e) : 3 === n ? new S(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | 240 & e, (15 & e) << 4 | 15 & e, 1) : 8 === n ? _(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (255 & e) / 255) : 4 === n ? _(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | 240 & e, ((15 & e) << 4 | 15 & e) / 255) : null) : (e = f.exec(t)) ? new S(e[1], e[2], e[3], 1) : (e = p.exec(t)) ? new S(255 * e[1] / 100, 255 * e[2] / 100, 255 * e[3] / 100, 1) : (e = d.exec(t)) ? _(e[1], e[2], e[3], e[4]) : (e = y.exec(t)) ? _(255 * e[1] / 100, 255 * e[2] / 100, 255 * e[3] / 100, e[4]) : (e = v.exec(t)) ? P(e[1], e[2] / 100, e[3] / 100, 1) : (e = g.exec(t)) ? P(e[1], e[2] / 100, e[3] / 100, e[4]) : b.hasOwnProperty(t) ? O(b[t]) : "transparent" === t ? new S(NaN, NaN, NaN, 0) : null }

            function O(t) { return new S(t >> 16 & 255, t >> 8 & 255, 255 & t, 1) }

            function _(t, e, n, r) { return r <= 0 && (t = e = n = NaN), new S(t, e, n, r) }

            function M(t) { return t instanceof o || (t = w(t)), t ? new S((t = t.rgb()).r, t.g, t.b, t.opacity) : new S }

            function j(t, e, n, r) { return 1 === arguments.length ? M(t) : new S(t, e, n, null == r ? 1 : r) }

            function S(t, e, n, r) { this.r = +t, this.g = +e, this.b = +n, this.opacity = +r }

            function E() { return "#" + A(this.r) + A(this.g) + A(this.b) }

            function k() { var t = this.opacity; return (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))) ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (1 === t ? ")" : ", " + t + ")") }

            function A(t) { return ((t = Math.max(0, Math.min(255, Math.round(t) || 0))) < 16 ? "0" : "") + t.toString(16) }

            function P(t, e, n, r) { return r <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new T(t, e, n, r) }

            function C(t) { if (t instanceof T) return new T(t.h, t.s, t.l, t.opacity); if (t instanceof o || (t = w(t)), !t) return new T; if (t instanceof T) return t; var e = (t = t.rgb()).r / 255,
                    n = t.g / 255,
                    r = t.b / 255,
                    i = Math.min(e, n, r),
                    a = Math.max(e, n, r),
                    s = NaN,
                    u = a - i,
                    c = (a + i) / 2; return u ? (s = e === a ? (n - r) / u + 6 * (n < r) : n === a ? (r - e) / u + 2 : (e - n) / u + 4, u /= c < .5 ? a + i : 2 - a - i, s *= 60) : u = c > 0 && c < 1 ? 0 : s, new T(s, u, c, t.opacity) }

            function T(t, e, n, r) { this.h = +t, this.s = +e, this.l = +n, this.opacity = +r }

            function I(t, e, n) { return 255 * (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e) }

            function N(t, e, n, r, i) { var o = t * t,
                    a = o * t; return ((1 - 3 * t + 3 * o - a) * e + (4 - 6 * o + 3 * a) * n + (1 + 3 * t + 3 * o - 3 * a) * r + a * i) / 6 }
            r(o, w, { copy: function(t) { return Object.assign(new this.constructor, this, t) }, displayable: function() { return this.rgb().displayable() }, hex: m, formatHex: m, formatHsl: function() { return C(this).formatHsl() }, formatRgb: x, toString: x }), r(S, j, i(o, { brighter: function(t) { return t = null == t ? s : Math.pow(s, t), new S(this.r * t, this.g * t, this.b * t, this.opacity) }, darker: function(t) { return t = null == t ? a : Math.pow(a, t), new S(this.r * t, this.g * t, this.b * t, this.opacity) }, rgb: function() { return this }, displayable: function() { return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1 }, hex: E, formatHex: E, formatRgb: k, toString: k })), r(T, (function(t, e, n, r) { return 1 === arguments.length ? C(t) : new T(t, e, n, null == r ? 1 : r) }), i(o, { brighter: function(t) { return t = null == t ? s : Math.pow(s, t), new T(this.h, this.s, this.l * t, this.opacity) }, darker: function(t) { return t = null == t ? a : Math.pow(a, t), new T(this.h, this.s, this.l * t, this.opacity) }, rgb: function() { var t = this.h % 360 + 360 * (this.h < 0),
                        e = isNaN(t) || isNaN(this.s) ? 0 : this.s,
                        n = this.l,
                        r = n + (n < .5 ? n : 1 - n) * e,
                        i = 2 * n - r; return new S(I(t >= 240 ? t - 240 : t + 120, i, r), I(t, i, r), I(t < 120 ? t + 240 : t - 120, i, r), this.opacity) }, displayable: function() { return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1 }, formatHsl: function() { var t = this.opacity; return (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))) ? "hsl(" : "hsla(") + (this.h || 0) + ", " + 100 * (this.s || 0) + "%, " + 100 * (this.l || 0) + "%" + (1 === t ? ")" : ", " + t + ")") } })); var D = function(t) { return function() { return t } };

            function R(t, e) { return function(n) { return t + n * e } }

            function L(t) { return 1 === (t = +t) ? B : function(e, n) { return n - e ? function(t, e, n) { return t = Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n,
                            function(r) { return Math.pow(t + r * e, n) } }(e, n, t) : D(isNaN(e) ? n : e) } }

            function B(t, e) { var n = e - t; return n ? R(t, n) : D(isNaN(t) ? e : t) } var F = function t(e) { var n = L(e);

                function r(t, e) { var r = n((t = j(t)).r, (e = j(e)).r),
                        i = n(t.g, e.g),
                        o = n(t.b, e.b),
                        a = B(t.opacity, e.opacity); return function(e) { return t.r = r(e), t.g = i(e), t.b = o(e), t.opacity = a(e), t + "" } } return r.gamma = t, r }(1);

            function z(t) { return function(e) { var n, r, i = e.length,
                        o = new Array(i),
                        a = new Array(i),
                        s = new Array(i); for (n = 0; n < i; ++n) r = j(e[n]), o[n] = r.r || 0, a[n] = r.g || 0, s[n] = r.b || 0; return o = t(o), a = t(a), s = t(s), r.opacity = 1,
                        function(t) { return r.r = o(t), r.g = a(t), r.b = s(t), r + "" } } }
            z((function(t) { var e = t.length - 1; return function(n) { var r = n <= 0 ? n = 0 : n >= 1 ? (n = 1, e - 1) : Math.floor(n * e),
                        i = t[r],
                        o = t[r + 1],
                        a = r > 0 ? t[r - 1] : 2 * i - o,
                        s = r < e - 1 ? t[r + 2] : 2 * o - i; return N((n - r / e) * e, a, i, o, s) } })), z((function(t) { var e = t.length; return function(n) { var r = Math.floor(((n %= 1) < 0 ? ++n : n) * e),
                        i = t[(r + e - 1) % e],
                        o = t[r % e],
                        a = t[(r + 1) % e],
                        s = t[(r + 2) % e]; return N((n - r / e) * e, i, o, a, s) } })); var V = function(t, e) { e || (e = []); var n, r = t ? Math.min(e.length, t.length) : 0,
                    i = e.slice(); return function(o) { for (n = 0; n < r; ++n) i[n] = t[n] * (1 - o) + e[n] * o; return i } };

            function U(t) { return ArrayBuffer.isView(t) && !(t instanceof DataView) }

            function W(t, e) { var n, r = e ? e.length : 0,
                    i = t ? Math.min(r, t.length) : 0,
                    o = new Array(i),
                    a = new Array(r); for (n = 0; n < i; ++n) o[n] = X(t[n], e[n]); for (; n < r; ++n) a[n] = e[n]; return function(t) { for (n = 0; n < i; ++n) a[n] = o[n](t); return a } } var H = function(t, e) { var n = new Date; return t = +t, e = +e,
                        function(r) { return n.setTime(t * (1 - r) + e * r), n } },
                q = n(897),
                Y = function(t, e) { var n, r = {},
                        i = {}; for (n in null !== t && "object" === typeof t || (t = {}), null !== e && "object" === typeof e || (e = {}), e) n in t ? r[n] = X(t[n], e[n]) : i[n] = e[n]; return function(t) { for (n in r) i[n] = r[n](t); return i } },
                $ = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
                J = new RegExp($.source, "g"); var G = function(t, e) { var n, r, i, o = $.lastIndex = J.lastIndex = 0,
                        a = -1,
                        s = [],
                        u = []; for (t += "", e += "";
                        (n = $.exec(t)) && (r = J.exec(e));)(i = r.index) > o && (i = e.slice(o, i), s[a] ? s[a] += i : s[++a] = i), (n = n[0]) === (r = r[0]) ? s[a] ? s[a] += r : s[++a] = r : (s[++a] = null, u.push({ i: a, x: Object(q.a)(n, r) })), o = J.lastIndex; return o < e.length && (i = e.slice(o), s[a] ? s[a] += i : s[++a] = i), s.length < 2 ? u[0] ? function(t) { return function(e) { return t(e) + "" } }(u[0].x) : function(t) { return function() { return t } }(e) : (e = u.length, function(t) { for (var n, r = 0; r < e; ++r) s[(n = u[r]).i] = n.x(t); return s.join("") }) },
                X = e.a = function(t, e) { var n, r = typeof e; return null == e || "boolean" === r ? D(e) : ("number" === r ? q.a : "string" === r ? (n = w(e)) ? (e = n, F) : G : e instanceof w ? F : e instanceof Date ? H : U(e) ? V : Array.isArray(e) ? W : "function" !== typeof e.valueOf && "function" !== typeof e.toString || isNaN(e) ? Y : q.a)(t, e) } }, 1231: function(t, e, n) { "use strict";
            n.d(e, "a", (function() { return B })); var r = n(310),
                i = n.n(r),
                o = n(1),
                a = n.n(o),
                s = n(477),
                u = n.n(s),
                c = n(782),
                l = n(848),
                h = n(805),
                f = n(772),
                p = function(t, e) { var n = t.alwaysShow,
                        r = t.ifOverflow; return n && (r = "extendDomain"), r === e },
                d = n(804),
                y = n(818),
                v = n(773);

            function g() { return (g = Object.assign || function(t) { for (var e = 1; e < arguments.length; e++) { var n = arguments[e]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]) } return t }).apply(this, arguments) }

            function b(t, e) { var n = Object.keys(t); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), n.push.apply(n, r) } return n }

            function m(t) { for (var e = 1; e < arguments.length; e++) { var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? b(Object(n), !0).forEach((function(e) { x(t, e, n[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : b(Object(n)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })) } return t }

            function x(t, e, n) { return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t }

            function w(t) { var e = t.x,
                    n = t.y,
                    r = t.r,
                    i = t.alwaysShow,
                    o = t.clipPathId,
                    s = Object(f.f)(e),
                    l = Object(f.f)(n); if (Object(y.a)(void 0 === i, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'), !s || !l) return null; var g = function(t) { var e = t.x,
                        n = t.y,
                        r = t.xAxis,
                        i = t.yAxis,
                        o = Object(d.a)({ x: r.scale, y: i.scale }),
                        a = o.apply({ x: e, y: n }, { bandAware: !0 }); return p(t, "discard") && !o.isInRange(a) ? null : a }(t); if (!g) return null; var b = g.x,
                    x = g.y,
                    O = t.shape,
                    _ = t.className,
                    M = m(m({ clipPath: p(t, "hidden") ? "url(#".concat(o, ")") : void 0 }, Object(v.c)(t, !0)), {}, { cx: b, cy: x }); return a.a.createElement(c.a, { className: u()("recharts-reference-dot", _) }, w.renderDot(O, M), h.a.renderCallByParent(t, { x: b - r, y: x - r, width: 2 * r, height: 2 * r })) }
            w.displayName = "ReferenceDot", w.defaultProps = { isFront: !1, ifOverflow: "discard", xAxisId: 0, yAxisId: 0, r: 10, fill: "#fff", stroke: "#ccc", fillOpacity: 1, strokeWidth: 1 }, w.renderDot = function(t, e) { return a.a.isValidElement(t) ? a.a.cloneElement(t, e) : i()(t) ? t(e) : a.a.createElement(l.a, g({}, e, { cx: e.cx, cy: e.cy, className: "recharts-reference-dot-dot" })) }; var O = n(1014),
                _ = n.n(O);

            function M(t, e) { var n = Object.keys(t); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), n.push.apply(n, r) } return n }

            function j(t) { for (var e = 1; e < arguments.length; e++) { var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? M(Object(n), !0).forEach((function(e) { S(t, e, n[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : M(Object(n)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })) } return t }

            function S(t, e, n) { return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t }

            function E(t, e) { return function(t) { if (Array.isArray(t)) return t }(t) || function(t, e) { if ("undefined" === typeof Symbol || !(Symbol.iterator in Object(t))) return; var n = [],
                        r = !0,
                        i = !1,
                        o = void 0; try { for (var a, s = t[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0); } catch (u) { i = !0, o = u } finally { try { r || null == s.return || s.return() } finally { if (i) throw o } } return n }(t, e) || function(t, e) { if (!t) return; if ("string" === typeof t) return k(t, e); var n = Object.prototype.toString.call(t).slice(8, -1); "Object" === n && t.constructor && (n = t.constructor.name); if ("Map" === n || "Set" === n) return Array.from(t); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return k(t, e) }(t, e) || function() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() }

            function k(t, e) {
                (null == e || e > t.length) && (e = t.length); for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n]; return r }

            function A() { return (A = Object.assign || function(t) { for (var e = 1; e < arguments.length; e++) { var n = arguments[e]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]) } return t }).apply(this, arguments) }

            function P(t) { var e = t.x,
                    n = t.y,
                    r = t.segment,
                    o = t.xAxis,
                    s = t.yAxis,
                    l = t.shape,
                    g = t.className,
                    b = t.alwaysShow,
                    m = t.clipPathId;
                Object(y.a)(void 0 === b, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'); var x = function(t, e, n, r, i) { var o = i.viewBox,
                        a = o.x,
                        s = o.y,
                        u = o.width,
                        c = o.height,
                        l = i.position; if (n) { var h = i.y,
                            f = i.yAxis.orientation,
                            d = t.y.apply(h, { position: l }); if (p(i, "discard") && !t.y.isInRange(d)) return null; var y = [{ x: a + u, y: d }, { x: a, y: d }]; return "left" === f ? y.reverse() : y } if (e) { var v = i.x,
                            g = i.xAxis.orientation,
                            b = t.x.apply(v, { position: l }); if (p(i, "discard") && !t.x.isInRange(b)) return null; var m = [{ x: b, y: s + c }, { x: b, y: s }]; return "top" === g ? m.reverse() : m } if (r) { var x = i.segment.map((function(e) { return t.apply(e, { position: l }) })); return p(i, "discard") && _()(x, (function(e) { return !t.isInRange(e) })) ? null : x } return null }(Object(d.a)({ x: o.scale, y: s.scale }), Object(f.f)(e), Object(f.f)(n), r && 2 === r.length, t); if (!x) return null; var w = E(x, 2),
                    O = w[0],
                    M = O.x,
                    S = O.y,
                    k = w[1],
                    P = k.x,
                    C = k.y,
                    T = j(j({ clipPath: p(t, "hidden") ? "url(#".concat(m, ")") : void 0 }, Object(v.c)(t, !0)), {}, { x1: M, y1: S, x2: P, y2: C }); return a.a.createElement(c.a, { className: u()("recharts-reference-line", g) }, function(t, e) { return a.a.isValidElement(t) ? a.a.cloneElement(t, e) : i()(t) ? t(e) : a.a.createElement("line", A({}, e, { className: "recharts-reference-line-line" })) }(l, T), h.a.renderCallByParent(t, Object(d.c)({ x1: M, y1: S, x2: P, y2: C }))) }
            P.displayName = "ReferenceLine", P.defaultProps = { isFront: !1, ifOverflow: "discard", xAxisId: 0, yAxisId: 0, fill: "none", stroke: "#ccc", fillOpacity: 1, strokeWidth: 1, position: "middle" }; var C = n(849);

            function T() { return (T = Object.assign || function(t) { for (var e = 1; e < arguments.length; e++) { var n = arguments[e]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]) } return t }).apply(this, arguments) }

            function I(t, e) { var n = Object.keys(t); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), n.push.apply(n, r) } return n }

            function N(t) { for (var e = 1; e < arguments.length; e++) { var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? I(Object(n), !0).forEach((function(e) { D(t, e, n[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : I(Object(n)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })) } return t }

            function D(t, e, n) { return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t }

            function R(t) { var e = t.x1,
                    n = t.x2,
                    r = t.y1,
                    i = t.y2,
                    o = t.className,
                    s = t.alwaysShow,
                    l = t.clipPathId;
                Object(y.a)(void 0 === s, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'); var g = Object(f.f)(e),
                    b = Object(f.f)(n),
                    m = Object(f.f)(r),
                    x = Object(f.f)(i),
                    w = t.shape; if (!g && !b && !m && !x && !w) return null; var O = function(t, e, n, r, i) { var o = i.x1,
                        a = i.x2,
                        s = i.y1,
                        u = i.y2,
                        c = i.xAxis,
                        l = i.yAxis,
                        h = Object(d.a)({ x: c.scale, y: l.scale }),
                        f = { x: t ? h.x.apply(o, { position: "start" }) : h.x.rangeMin, y: n ? h.y.apply(s, { position: "start" }) : h.y.rangeMin },
                        y = { x: e ? h.x.apply(a, { position: "end" }) : h.x.rangeMax, y: r ? h.y.apply(u, { position: "end" }) : h.y.rangeMax }; return !p(i, "discard") || h.isInRange(f) && h.isInRange(y) ? Object(d.d)(f, y) : null }(g, b, m, x, t); if (!O && !w) return null; var _ = p(t, "hidden") ? "url(#".concat(l, ")") : void 0; return a.a.createElement(c.a, { className: u()("recharts-reference-area", o) }, R.renderRect(w, N(N({ clipPath: _ }, Object(v.c)(t, !0)), O)), h.a.renderCallByParent(t, O)) }
            R.displayName = "ReferenceArea", R.defaultProps = { isFront: !1, ifOverflow: "discard", xAxisId: 0, yAxisId: 0, r: 10, fill: "#ccc", fillOpacity: .5, stroke: "none", strokeWidth: 1 }, R.renderRect = function(t, e) { return a.a.isValidElement(t) ? a.a.cloneElement(t, e) : i()(t) ? t(e) : a.a.createElement(C.a, T({}, e, { className: "recharts-reference-area-rect" })) }; var L = n(789),
                B = function(t, e, n, r, i) { var o = Object(L.a)(t, P.displayName),
                        a = Object(L.a)(t, w.displayName),
                        s = o.concat(a),
                        u = Object(L.a)(t, R.displayName),
                        c = "".concat(r, "Id"),
                        l = r[0],
                        h = e; if (s.length && (h = s.reduce((function(t, e) { if (e.props[c] === n && p(e.props, "extendDomain") && Object(f.g)(e.props[l])) { var r = e.props[l]; return [Math.min(t[0], r), Math.max(t[1], r)] } return t }), h)), u.length) { var d = "".concat(l, "1"),
                            y = "".concat(l, "2");
                        h = u.reduce((function(t, e) { if (e.props[c] === n && p(e.props, "extendDomain") && Object(f.g)(e.props[d]) && Object(f.g)(e.props[y])) { var r = e.props[d],
                                    i = e.props[y]; return [Math.min(t[0], r, i), Math.max(t[1], r, i)] } return t }), h) } return i && i.length && (h = i.reduce((function(t, e) { return Object(f.g)(e) ? [Math.min(t[0], e), Math.max(t[1], e)] : t }), h)), h } }, 1232: function(t, e, n) { "use strict";
            n.d(e, "a", (function() { return U })); var r = n(781),
                i = n.n(r),
                o = n(803),
                a = n.n(o),
                s = n(310),
                u = n.n(s),
                c = n(99),
                l = n.n(c),
                h = n(1),
                f = n.n(h),
                p = n(477),
                d = n.n(p),
                y = n(830),
                v = n(849),
                g = n(782),
                b = n(773);

            function m() { return (m = Object.assign || function(t) { for (var e = 1; e < arguments.length; e++) { var n = arguments[e]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]) } return t }).apply(this, arguments) }

            function x(t, e) { return function(t) { if (Array.isArray(t)) return t }(t) || function(t, e) { if ("undefined" === typeof Symbol || !(Symbol.iterator in Object(t))) return; var n = [],
                        r = !0,
                        i = !1,
                        o = void 0; try { for (var a, s = t[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0); } catch (u) { i = !0, o = u } finally { try { r || null == s.return || s.return() } finally { if (i) throw o } } return n }(t, e) || function(t, e) { if (!t) return; if ("string" === typeof t) return w(t, e); var n = Object.prototype.toString.call(t).slice(8, -1); "Object" === n && t.constructor && (n = t.constructor.name); if ("Map" === n || "Set" === n) return Array.from(t); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return w(t, e) }(t, e) || function() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() }

            function w(t, e) {
                (null == e || e > t.length) && (e = t.length); for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n]; return r }

            function O(t, e) { if (null == t) return {}; var n, r, i = function(t, e) { if (null == t) return {}; var n, r, i = {},
                        o = Object.keys(t); for (r = 0; r < o.length; r++) n = o[r], e.indexOf(n) >= 0 || (i[n] = t[n]); return i }(t, e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(t); for (r = 0; r < o.length; r++) n = o[r], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (i[n] = t[n]) } return i }

            function _(t) { var e = t.offset,
                    n = t.layout,
                    r = t.width,
                    i = t.dataKey,
                    o = t.data,
                    a = t.dataPointFormatter,
                    s = t.xAxis,
                    u = t.yAxis,
                    c = O(t, ["offset", "layout", "width", "dataKey", "data", "dataPointFormatter", "xAxis", "yAxis"]),
                    l = Object(b.c)(c),
                    h = o.map((function(t, o) { var c = a(t, i),
                            h = c.x,
                            p = c.y,
                            d = c.value,
                            y = c.errorVal; if (!y) return null; var v, b, w = []; if (Array.isArray(y)) { var O = x(y, 2);
                            v = O[0], b = O[1] } else v = b = y; if ("vertical" === n) { var _ = s.scale,
                                M = p + e,
                                j = M + r,
                                S = M - r,
                                E = _(d - v),
                                k = _(d + b);
                            w.push({ x1: k, y1: j, x2: k, y2: S }), w.push({ x1: E, y1: M, x2: k, y2: M }), w.push({ x1: E, y1: j, x2: E, y2: S }) } else if ("horizontal" === n) { var A = u.scale,
                                P = h + e,
                                C = P - r,
                                T = P + r,
                                I = A(d - v),
                                N = A(d + b);
                            w.push({ x1: C, y1: N, x2: T, y2: N }), w.push({ x1: P, y1: I, x2: P, y2: N }), w.push({ x1: C, y1: I, x2: T, y2: I }) } return f.a.createElement(g.a, m({ className: "recharts-errorBar", key: "bar-".concat(o) }, l), w.map((function(t, e) { return f.a.createElement("line", m({}, t, { key: "line-".concat(e) })) }))) })); return f.a.createElement(g.a, { className: "recharts-errorBars" }, h) }
            _.defaultProps = { stroke: "black", strokeWidth: 1.5, width: 5, offset: 0, layout: "horizontal" }, _.displayName = "ErrorBar"; var M = function(t) { return null };
            M.displayName = "Cell"; var j = n(905),
                S = n(772),
                E = n(789),
                k = n(797),
                A = n(795);

            function P(t) { return (P = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t })(t) }

            function C(t, e) { if (null == t) return {}; var n, r, i = function(t, e) { if (null == t) return {}; var n, r, i = {},
                        o = Object.keys(t); for (r = 0; r < o.length; r++) n = o[r], e.indexOf(n) >= 0 || (i[n] = t[n]); return i }(t, e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(t); for (r = 0; r < o.length; r++) n = o[r], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (i[n] = t[n]) } return i }

            function T() { return (T = Object.assign || function(t) { for (var e = 1; e < arguments.length; e++) { var n = arguments[e]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]) } return t }).apply(this, arguments) }

            function I(t, e) { var n = Object.keys(t); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), n.push.apply(n, r) } return n }

            function N(t) { for (var e = 1; e < arguments.length; e++) { var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? I(Object(n), !0).forEach((function(e) { D(t, e, n[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : I(Object(n)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })) } return t }

            function D(t, e, n) { return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t }

            function R(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

            function L(t, e) { for (var n = 0; n < e.length; n++) { var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r) } }

            function B(t, e) { return (B = Object.setPrototypeOf || function(t, e) { return t.__proto__ = e, t })(t, e) }

            function F(t) { var e = function() { if ("undefined" === typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" === typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = V(t); if (e) { var i = V(this).constructor;
                        n = Reflect.construct(r, arguments, i) } else n = r.apply(this, arguments); return z(this, n) } }

            function z(t, e) { return !e || "object" !== P(e) && "function" !== typeof e ? function(t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t }(t) : e }

            function V(t) { return (V = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) { return t.__proto__ || Object.getPrototypeOf(t) })(t) } var U = function(t) {! function(t, e) { if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), e && B(t, e) }(s, t); var e, n, r, o = F(s);

                function s() { var t;
                    R(this, s); for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r]; return (t = o.call.apply(o, [this].concat(n))).state = { isAnimationFinished: !1 }, t.id = Object(S.j)("recharts-bar-"), t.handleAnimationEnd = function() { var e = t.props.onAnimationEnd;
                        t.setState({ isAnimationFinished: !0 }), e && e() }, t.handleAnimationStart = function() { var e = t.props.onAnimationStart;
                        t.setState({ isAnimationFinished: !1 }), e && e() }, t } return e = s, r = [{ key: "getDerivedStateFromProps", value: function(t, e) { return t.animationId !== e.prevAnimationId ? { prevAnimationId: t.animationId, curData: t.data, prevData: e.curData } : t.data !== e.curData ? { curData: t.data } : null } }, { key: "renderRectangle", value: function(t, e) { return f.a.isValidElement(t) ? f.a.cloneElement(t, e) : u()(t) ? t(e) : f.a.createElement(v.a, e) } }], (n = [{ key: "renderRectanglesStatically", value: function(t) { var e = this,
                            n = this.props.shape,
                            r = Object(b.c)(this.props); return t && t.map((function(t, i) { var o = N(N(N({}, r), t), {}, { index: i }); return f.a.createElement(g.a, T({ className: "recharts-bar-rectangle" }, Object(b.b)(e.props, t, i), { key: "rectangle-".concat(i) }), s.renderRectangle(n, o)) })) } }, { key: "renderRectanglesWithAnimation", value: function() { var t = this,
                            e = this.props,
                            n = e.data,
                            r = e.layout,
                            i = e.isAnimationActive,
                            o = e.animationBegin,
                            a = e.animationDuration,
                            s = e.animationEasing,
                            u = e.animationId,
                            c = this.state.prevData; return f.a.createElement(y.a, { begin: o, duration: a, isActive: i, easing: s, from: { t: 0 }, to: { t: 1 }, key: "bar-".concat(u), onAnimationEnd: this.handleAnimationEnd, onAnimationStart: this.handleAnimationStart }, (function(e) { var i = e.t,
                                o = n.map((function(t, e) { var n = c && c[e]; if (n) { var o = Object(S.e)(n.x, t.x),
                                            a = Object(S.e)(n.y, t.y),
                                            s = Object(S.e)(n.width, t.width),
                                            u = Object(S.e)(n.height, t.height); return N(N({}, t), {}, { x: o(i), y: a(i), width: s(i), height: u(i) }) } if ("horizontal" === r) { var l = Object(S.e)(0, t.height)(i); return N(N({}, t), {}, { y: t.y + t.height - l, height: l }) } var h = Object(S.e)(0, t.width)(i); return N(N({}, t), {}, { width: h }) })); return f.a.createElement(g.a, null, t.renderRectanglesStatically(o)) })) } }, { key: "renderRectangles", value: function() { var t = this.props,
                            e = t.data,
                            n = t.isAnimationActive,
                            r = this.state.prevData; return !(n && e && e.length) || r && a()(r, e) ? this.renderRectanglesStatically(e) : this.renderRectanglesWithAnimation() } }, { key: "renderBackground", value: function() { var t = this,
                            e = this.props.data,
                            n = Object(b.c)(this.props.background); return e.map((function(e, r) { e.value; var i = e.background,
                                o = C(e, ["value", "background"]); if (!i) return null; var a = N(N(N(N(N({}, o), {}, { fill: "#eee" }, i), n), Object(b.b)(t.props, e, r)), {}, { index: r, key: "background-bar-".concat(r), className: "recharts-bar-background-rectangle" }); return s.renderRectangle(t.props.background, a) })) } }, { key: "renderErrorBar", value: function() { if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null; var t = this.props,
                            e = t.data,
                            n = t.xAxis,
                            r = t.yAxis,
                            i = t.layout,
                            o = t.children,
                            a = Object(E.a)(o, _.displayName); if (!a) return null; var s = "vertical" === i ? e[0].height / 2 : e[0].width / 2;

                        function u(t, e) { return { x: t.x, y: t.y, value: t.value, errorVal: Object(A.w)(t, e) } } return a.map((function(t, o) { return f.a.cloneElement(t, { key: "error-bar-".concat(o), data: e, xAxis: n, yAxis: r, layout: i, offset: s, dataPointFormatter: u }) })) } }, { key: "render", value: function() { var t = this.props,
                            e = t.hide,
                            n = t.data,
                            r = t.className,
                            o = t.xAxis,
                            a = t.yAxis,
                            s = t.left,
                            u = t.top,
                            c = t.width,
                            l = t.height,
                            h = t.isAnimationActive,
                            p = t.background,
                            y = t.id; if (e || !n || !n.length) return null; var v = this.state.isAnimationFinished,
                            b = d()("recharts-bar", r),
                            m = o && o.allowDataOverflow || a && a.allowDataOverflow,
                            x = i()(y) ? this.id : y; return f.a.createElement(g.a, { className: b }, m ? f.a.createElement("defs", null, f.a.createElement("clipPath", { id: "clipPath-".concat(x) }, f.a.createElement("rect", { x: s, y: u, width: c, height: l }))) : null, f.a.createElement(g.a, { className: "recharts-bar-rectangles", clipPath: m ? "url(#clipPath-".concat(x, ")") : null }, p ? this.renderBackground() : null, this.renderRectangles()), this.renderErrorBar(), (!h || v) && j.a.renderCallByParent(this.props, n)) } }]) && L(e.prototype, n), r && L(e, r), s }(h.PureComponent);
            U.displayName = "Bar", U.defaultProps = { xAxisId: 0, yAxisId: 0, legendType: "rect", minPointSize: 0, hide: !1, data: [], layout: "vertical", isAnimationActive: !k.a.isSsr, animationBegin: 0, animationDuration: 400, animationEasing: "ease" }, U.getComposedData = function(t) { var e = t.props,
                    n = t.item,
                    r = t.barPosition,
                    i = t.bandSize,
                    o = t.xAxis,
                    a = t.yAxis,
                    s = t.xAxisTicks,
                    u = t.yAxisTicks,
                    c = t.stackedData,
                    h = t.dataStartIndex,
                    f = t.displayedData,
                    p = t.offset,
                    d = Object(A.e)(r, n); if (!d) return null; var y = e.layout,
                    v = n.props,
                    g = v.dataKey,
                    b = v.children,
                    m = v.minPointSize,
                    x = "horizontal" === y ? a : o,
                    w = c ? x.scale.domain() : null,
                    O = Object(A.i)({ numericAxis: x }),
                    _ = Object(E.a)(b, M.displayName),
                    j = f.map((function(t, e) { var r, f, p, v, b, x; if (c ? r = Object(A.C)(c[h + e], w) : (r = Object(A.w)(t, g), l()(r) || (r = [O, r])), "horizontal" === y) { if (f = Object(A.j)({ axis: o, ticks: s, bandSize: i, offset: d.offset, entry: t, index: e }), p = a.scale(r[1]), v = d.size, b = a.scale(r[0]) - a.scale(r[1]), x = { x: f, y: a.y, width: v, height: a.height }, Math.abs(m) > 0 && Math.abs(b) < Math.abs(m)) { var M = Object(S.i)(b || m) * (Math.abs(m) - Math.abs(b));
                                p -= M, b += M } } else f = o.scale(r[0]), p = Object(A.j)({ axis: a, ticks: u, bandSize: i, offset: d.offset, entry: t, index: e }), v = o.scale(r[1]) - o.scale(r[0]), b = d.size, x = { x: o.x, y: p, width: o.width, height: b }, Math.abs(m) > 0 && Math.abs(v) < Math.abs(m) && (v += Object(S.i)(v || m) * (Math.abs(m) - Math.abs(v))); return N(N(N({}, t), {}, { x: f, y: p, width: v, height: b, value: c ? r : r[1], payload: t, background: x }, _ && _[e] && _[e].props), {}, { tooltipPayload: [Object(A.v)(n, t)], tooltipPosition: { x: f + v / 2, y: p + b / 2 } }) })); return N({ data: j, layout: y }, p) } }, 1234: function(t, e, n) { "use strict";
            n.d(e, "a", (function() { return I })); var r = n(310),
                i = n.n(r),
                o = n(376),
                a = n.n(o),
                s = n(1),
                u = n.n(s),
                c = n(477),
                l = n.n(c),
                h = n(882),
                f = n(782),
                p = n(846),
                d = n(795),
                y = n(772);

            function v(t, e) { var n = Object.keys(t); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), n.push.apply(n, r) } return n }

            function g(t) { for (var e = 1; e < arguments.length; e++) { var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? v(Object(n), !0).forEach((function(e) { b(t, e, n[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : v(Object(n)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })) } return t }

            function b(t, e, n) { return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t } var m = ["Webkit", "Moz", "O", "ms"],
                x = n(773);

            function w(t) { return (w = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t })(t) }

            function O() { return (O = Object.assign || function(t) { for (var e = 1; e < arguments.length; e++) { var n = arguments[e]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]) } return t }).apply(this, arguments) }

            function _(t, e) { var n = Object.keys(t); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), n.push.apply(n, r) } return n }

            function M(t) { for (var e = 1; e < arguments.length; e++) { var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? _(Object(n), !0).forEach((function(e) { j(t, e, n[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : _(Object(n)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })) } return t }

            function j(t, e, n) { return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t }

            function S(t, e) { for (var n = 0; n < e.length; n++) { var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r) } }

            function E(t, e) { return (E = Object.setPrototypeOf || function(t, e) { return t.__proto__ = e, t })(t, e) }

            function k(t) { var e = function() { if ("undefined" === typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" === typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = C(t); if (e) { var i = C(this).constructor;
                        n = Reflect.construct(r, arguments, i) } else n = r.apply(this, arguments); return A(this, n) } }

            function A(t, e) { return !e || "object" !== w(e) && "function" !== typeof e ? P(t) : e }

            function P(t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t }

            function C(t) { return (C = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) { return t.__proto__ || Object.getPrototypeOf(t) })(t) } var T = function(t) { return t.changedTouches && !!t.changedTouches.length },
                I = function(t) {! function(t, e) { if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), e && E(t, e) }(c, t); var e, n, r, o = k(c);

                    function c(t) { var e; return function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, c), (e = o.call(this, t)).leaveTimer = void 0, e.travellerDragStartHandlers = void 0, e.handleDrag = function(t) { e.leaveTimer && (clearTimeout(e.leaveTimer), e.leaveTimer = null), e.state.isTravellerMoving ? e.handleTravellerMove(t) : e.state.isSlideMoving && e.handleSlideDrag(t) }, e.handleTouchMove = function(t) { null != t.changedTouches && t.changedTouches.length > 0 && e.handleDrag(t.changedTouches[0]) }, e.handleDragEnd = function() { e.setState({ isTravellerMoving: !1, isSlideMoving: !1 }), e.detachDragEndListener() }, e.handleLeaveWrapper = function() {
                            (e.state.isTravellerMoving || e.state.isSlideMoving) && (e.leaveTimer = window.setTimeout(e.handleDragEnd, e.props.leaveTimeOut)) }, e.handleEnterSlideOrTraveller = function() { e.setState({ isTextActive: !0 }) }, e.handleLeaveSlideOrTraveller = function() { e.setState({ isTextActive: !1 }) }, e.handleSlideDragStart = function(t) { var n = T(t) ? t.changedTouches[0] : t;
                            e.setState({ isTravellerMoving: !1, isSlideMoving: !0, slideMoveStartX: n.pageX }), e.attachDragEndListener() }, e.travellerDragStartHandlers = { startX: e.handleTravellerDragStart.bind(P(e), "startX"), endX: e.handleTravellerDragStart.bind(P(e), "endX") }, e.state = {}, e } return e = c, r = [{ key: "renderDefaultTraveller", value: function(t) { var e = t.x,
                                n = t.y,
                                r = t.width,
                                i = t.height,
                                o = t.stroke,
                                a = Math.floor(n + i / 2) - 1; return u.a.createElement(u.a.Fragment, null, u.a.createElement("rect", { x: e, y: n, width: r, height: i, fill: o, stroke: "none" }), u.a.createElement("line", { x1: e + 1, y1: a, x2: e + r - 1, y2: a, fill: "none", stroke: "#fff" }), u.a.createElement("line", { x1: e + 1, y1: a + 2, x2: e + r - 1, y2: a + 2, fill: "none", stroke: "#fff" })) } }, { key: "renderTraveller", value: function(t, e) { return u.a.isValidElement(t) ? u.a.cloneElement(t, e) : i()(t) ? t(e) : c.renderDefaultTraveller(e) } }, { key: "getDerivedStateFromProps", value: function(t, e) { var n = t.data,
                                r = t.width,
                                i = t.x,
                                o = t.travellerWidth,
                                s = t.updateId,
                                u = t.startIndex,
                                c = t.endIndex; if (n !== e.prevData || s !== e.prevUpdateId) return M({ prevData: n, prevTravellerWidth: o, prevUpdateId: s, prevX: i, prevWidth: r }, n && n.length ? function(t) { var e = t.data,
                                    n = t.startIndex,
                                    r = t.endIndex,
                                    i = t.x,
                                    o = t.width,
                                    s = t.travellerWidth; if (!e || !e.length) return {}; var u = e.length,
                                    c = Object(h.b)().domain(a()(0, u)).range([i, i + o - s]),
                                    l = c.domain().map((function(t) { return c(t) })); return { isTextActive: !1, isSlideMoving: !1, isTravellerMoving: !1, startX: c(n), endX: c(r), scale: c, scaleValues: l } }({ data: n, width: r, x: i, travellerWidth: o, startIndex: u, endIndex: c }) : { scale: null, scaleValues: null }); if (e.scale && (r !== e.prevWidth || i !== e.prevX || o !== e.prevTravellerWidth)) { e.scale.range([i, i + r - o]); var l = e.scale.domain().map((function(t) { return e.scale(t) })); return { prevData: n, prevTravellerWidth: o, prevUpdateId: s, prevX: i, prevWidth: r, startX: e.scale(t.startIndex), endX: e.scale(t.endIndex), scaleValues: l } } return null } }, { key: "getIndexInRange", value: function(t, e) { for (var n = 0, r = t.length - 1; r - n > 1;) { var i = Math.floor((n + r) / 2);
                                t[i] > e ? r = i : n = i } return e >= t[r] ? r : n } }], (n = [{ key: "componentWillUnmount", value: function() { this.leaveTimer && (clearTimeout(this.leaveTimer), this.leaveTimer = null), this.detachDragEndListener() } }, { key: "getIndex", value: function(t) { var e = t.startX,
                                n = t.endX,
                                r = this.state.scaleValues,
                                i = this.props,
                                o = i.gap,
                                a = i.data.length - 1,
                                s = Math.min(e, n),
                                u = Math.max(e, n),
                                l = c.getIndexInRange(r, s),
                                h = c.getIndexInRange(r, u); return { startIndex: l - l % o, endIndex: h === a ? a : h - h % o } } }, { key: "getTextOfTick", value: function(t) { var e = this.props,
                                n = e.data,
                                r = e.tickFormatter,
                                o = e.dataKey,
                                a = Object(d.w)(n[t], o, t); return i()(r) ? r(a, t) : a } }, { key: "attachDragEndListener", value: function() { window.addEventListener("mouseup", this.handleDragEnd, !0), window.addEventListener("touchend", this.handleDragEnd, !0) } }, { key: "detachDragEndListener", value: function() { window.removeEventListener("mouseup", this.handleDragEnd, !0), window.removeEventListener("touchend", this.handleDragEnd, !0) } }, { key: "handleSlideDrag", value: function(t) { var e = this.state,
                                n = e.slideMoveStartX,
                                r = e.startX,
                                i = e.endX,
                                o = this.props,
                                a = o.x,
                                s = o.width,
                                u = o.travellerWidth,
                                c = o.startIndex,
                                l = o.endIndex,
                                h = o.onChange,
                                f = t.pageX - n;
                            f > 0 ? f = Math.min(f, a + s - u - i, a + s - u - r) : f < 0 && (f = Math.max(f, a - r, a - i)); var p = this.getIndex({ startX: r + f, endX: i + f });
                            p.startIndex === c && p.endIndex === l || !h || h(p), this.setState({ startX: r + f, endX: i + f, slideMoveStartX: t.pageX }) } }, { key: "handleTravellerDragStart", value: function(t, e) { var n = T(e) ? e.changedTouches[0] : e;
                            this.setState({ isSlideMoving: !1, isTravellerMoving: !0, movingTravellerId: t, brushMoveStartX: n.pageX }), this.attachDragEndListener() } }, { key: "handleTravellerMove", value: function(t) { var e, n = this.state,
                                r = n.brushMoveStartX,
                                i = n.movingTravellerId,
                                o = n.endX,
                                a = n.startX,
                                s = this.state[i],
                                u = this.props,
                                c = u.x,
                                l = u.width,
                                h = u.travellerWidth,
                                f = u.onChange,
                                p = u.gap,
                                d = u.data,
                                y = { startX: this.state.startX, endX: this.state.endX },
                                v = t.pageX - r;
                            v > 0 ? v = Math.min(v, c + l - h - s) : v < 0 && (v = Math.max(v, c - s)), y[i] = s + v; var g = this.getIndex(y),
                                b = g.startIndex,
                                m = g.endIndex;
                            this.setState((j(e = {}, i, s + v), j(e, "brushMoveStartX", t.pageX), e), (function() { f && function() { var t = d.length - 1; return "startX" === i && (o > a ? b % p === 0 : m % p === 0) || o < a && m === t || "endX" === i && (o > a ? m % p === 0 : b % p === 0) || o > a && m === t }() && f(g) })) } }, { key: "renderBackground", value: function() { var t = this.props,
                                e = t.x,
                                n = t.y,
                                r = t.width,
                                i = t.height,
                                o = t.fill,
                                a = t.stroke; return u.a.createElement("rect", { stroke: a, fill: o, x: e, y: n, width: r, height: i }) } }, { key: "renderPanorama", value: function() { var t = this.props,
                                e = t.x,
                                n = t.y,
                                r = t.width,
                                i = t.height,
                                o = t.data,
                                a = t.children,
                                c = t.padding,
                                l = s.Children.only(a); return l ? u.a.cloneElement(l, { x: e, y: n, width: r, height: i, margin: c, compact: !0, data: o }) : null } }, { key: "renderTravellerLayer", value: function(t, e) { var n = this.props,
                                r = n.y,
                                i = n.travellerWidth,
                                o = n.height,
                                a = n.traveller,
                                s = Math.max(t, this.props.x),
                                l = M(M({}, Object(x.c)(this.props)), {}, { x: s, y: r, width: i, height: o }); return u.a.createElement(f.a, { className: "recharts-brush-traveller", onMouseEnter: this.handleEnterSlideOrTraveller, onMouseLeave: this.handleLeaveSlideOrTraveller, onMouseDown: this.travellerDragStartHandlers[e], onTouchStart: this.travellerDragStartHandlers[e], style: { cursor: "col-resize" } }, c.renderTraveller(a, l)) } }, { key: "renderSlide", value: function(t, e) { var n = this.props,
                                r = n.y,
                                i = n.height,
                                o = n.stroke,
                                a = n.travellerWidth,
                                s = Math.min(t, e) + a,
                                c = Math.max(Math.abs(e - t) - a, 0); return u.a.createElement("rect", { className: "recharts-brush-slide", onMouseEnter: this.handleEnterSlideOrTraveller, onMouseLeave: this.handleLeaveSlideOrTraveller, onMouseDown: this.handleSlideDragStart, onTouchStart: this.handleSlideDragStart, style: { cursor: "move" }, stroke: "none", fill: o, fillOpacity: .2, x: s, y: r, width: c, height: i }) } }, { key: "renderText", value: function() { var t = this.props,
                                e = t.startIndex,
                                n = t.endIndex,
                                r = t.y,
                                i = t.height,
                                o = t.travellerWidth,
                                a = t.stroke,
                                s = this.state,
                                c = s.startX,
                                l = s.endX,
                                h = { pointerEvents: "none", fill: a }; return u.a.createElement(f.a, { className: "recharts-brush-texts" }, u.a.createElement(p.a, O({ textAnchor: "end", verticalAnchor: "middle", x: Math.min(c, l) - 5, y: r + i / 2 }, h), this.getTextOfTick(e)), u.a.createElement(p.a, O({ textAnchor: "start", verticalAnchor: "middle", x: Math.max(c, l) + o + 5, y: r + i / 2 }, h), this.getTextOfTick(n))) } }, { key: "render", value: function() { var t = this.props,
                                e = t.data,
                                n = t.className,
                                r = t.children,
                                i = t.x,
                                o = t.y,
                                a = t.width,
                                s = t.height,
                                c = t.alwaysShowText,
                                h = this.state,
                                p = h.startX,
                                d = h.endX,
                                v = h.isTextActive,
                                x = h.isSlideMoving,
                                w = h.isTravellerMoving; if (!e || !e.length || !Object(y.g)(i) || !Object(y.g)(o) || !Object(y.g)(a) || !Object(y.g)(s) || a <= 0 || s <= 0) return null; var O = l()("recharts-brush", n),
                                _ = 1 === u.a.Children.count(r),
                                M = function(t, e) { if (!t) return null; var n = t.replace(/(\w)/, (function(t) { return t.toUpperCase() })),
                                        r = m.reduce((function(t, r) { return g(g({}, t), {}, b({}, r + n, e)) }), {}); return r[t] = e, r }("userSelect", "none"); return u.a.createElement(f.a, { className: O, onMouseMove: this.handleDrag, onMouseLeave: this.handleLeaveWrapper, onTouchMove: this.handleTouchMove, style: M }, this.renderBackground(), _ && this.renderPanorama(), this.renderSlide(p, d), this.renderTravellerLayer(p, "startX"), this.renderTravellerLayer(d, "endX"), (v || x || w || c) && this.renderText()) } }]) && S(e.prototype, n), r && S(e, r), c }(s.PureComponent);
            I.displayName = "Brush", I.defaultProps = { height: 40, travellerWidth: 5, gap: 1, fill: "#fff", stroke: "#666", padding: { top: 1, right: 1, bottom: 1, left: 1 }, leaveTimeOut: 1e3, alwaysShowText: !1 } }, 1235: function(t, e, n) { "use strict";
            n.d(e, "a", (function() { return Y })); var r = n(781),
                i = n.n(r),
                o = n(310),
                a = n.n(o),
                s = n(894),
                u = n.n(s),
                c = n(1),
                l = n.n(c),
                h = n(830),
                f = n(477),
                p = n.n(f),
                d = n(839),
                y = n.n(d),
                v = n(99),
                g = n.n(v),
                b = n(772);

            function m(t) { return (m = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t })(t) }

            function x(t, e) { return function(t) { if (Array.isArray(t)) return t }(t) || function(t, e) { if ("undefined" === typeof Symbol || !(Symbol.iterator in Object(t))) return; var n = [],
                        r = !0,
                        i = !1,
                        o = void 0; try { for (var a, s = t[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0); } catch (u) { i = !0, o = u } finally { try { r || null == s.return || s.return() } finally { if (i) throw o } } return n }(t, e) || function(t, e) { if (!t) return; if ("string" === typeof t) return w(t, e); var n = Object.prototype.toString.call(t).slice(8, -1); "Object" === n && t.constructor && (n = t.constructor.name); if ("Map" === n || "Set" === n) return Array.from(t); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return w(t, e) }(t, e) || function() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() }

            function w(t, e) {
                (null == e || e > t.length) && (e = t.length); for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n]; return r }

            function O(t, e) { var n = Object.keys(t); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), n.push.apply(n, r) } return n }

            function _(t) { for (var e = 1; e < arguments.length; e++) { var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? O(Object(n), !0).forEach((function(e) { M(t, e, n[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : O(Object(n)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })) } return t }

            function M(t, e, n) { return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t }

            function j(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

            function S(t, e) { for (var n = 0; n < e.length; n++) { var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r) } }

            function E(t, e) { return (E = Object.setPrototypeOf || function(t, e) { return t.__proto__ = e, t })(t, e) }

            function k(t) { var e = function() { if ("undefined" === typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" === typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = P(t); if (e) { var i = P(this).constructor;
                        n = Reflect.construct(r, arguments, i) } else n = r.apply(this, arguments); return A(this, n) } }

            function A(t, e) { return !e || "object" !== m(e) && "function" !== typeof e ? function(t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t }(t) : e }

            function P(t) { return (P = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) { return t.__proto__ || Object.getPrototypeOf(t) })(t) }

            function C(t) { return g()(t) && Object(b.f)(t[0]) && Object(b.f)(t[1]) ? t.join(" ~ ") : t } var T = function(t) {! function(t, e) { if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), e && E(t, e) }(a, t); var e, n, r, o = k(a);

                function a() { return j(this, a), o.apply(this, arguments) } return e = a, (n = [{ key: "renderContent", value: function() { var t = this.props,
                            e = t.payload,
                            n = t.separator,
                            r = t.formatter,
                            i = t.itemStyle,
                            o = t.itemSorter; if (e && e.length) { var a = (o ? y()(e, o) : e).map((function(t, o) { if ("none" === t.type) return null; var a = _({ display: "block", paddingTop: 4, paddingBottom: 4, color: t.color || "#000" }, i),
                                    s = t.formatter || r || C,
                                    u = t.name,
                                    c = t.value; if (s) { var h = s(c, u, t, o, e); if (Array.isArray(h)) { var f = x(h, 2);
                                        c = f[0], u = f[1] } else c = h } return l.a.createElement("li", { className: "recharts-tooltip-item", key: "tooltip-item-".concat(o), style: a }, Object(b.f)(u) ? l.a.createElement("span", { className: "recharts-tooltip-item-name" }, u) : null, Object(b.f)(u) ? l.a.createElement("span", { className: "recharts-tooltip-item-separator" }, n) : null, l.a.createElement("span", { className: "recharts-tooltip-item-value" }, c), l.a.createElement("span", { className: "recharts-tooltip-item-unit" }, t.unit || "")) })); return l.a.createElement("ul", { className: "recharts-tooltip-item-list", style: { padding: 0, margin: 0 } }, a) } return null } }, { key: "render", value: function() { var t = this.props,
                            e = t.wrapperClassName,
                            n = t.contentStyle,
                            r = t.labelClassName,
                            o = t.labelStyle,
                            a = t.label,
                            s = t.labelFormatter,
                            u = t.payload,
                            c = _({ margin: 0, padding: 10, backgroundColor: "#fff", border: "1px solid #ccc", whiteSpace: "nowrap" }, n),
                            h = _({ margin: 0 }, o),
                            f = !i()(a),
                            d = f ? a : "",
                            y = p()("recharts-default-tooltip", e),
                            v = p()("recharts-tooltip-label", r); return f && s && (d = s(a, u)), l.a.createElement("div", { className: y, style: c }, l.a.createElement("p", { className: v, style: h }, l.a.isValidElement(d) ? d : "".concat(d)), this.renderContent()) } }]) && S(e.prototype, n), r && S(e, r), a }(c.PureComponent);
            T.displayName = "DefaultTooltipContent", T.defaultProps = { separator: " : ", contentStyle: {}, itemStyle: {}, labelStyle: {} }; var I = n(797);

            function N(t) { return (N = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t })(t) }

            function D(t, e) { var n = Object.keys(t); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), n.push.apply(n, r) } return n }

            function R(t) { for (var e = 1; e < arguments.length; e++) { var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? D(Object(n), !0).forEach((function(e) { L(t, e, n[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : D(Object(n)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })) } return t }

            function L(t, e, n) { return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t }

            function B(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

            function F(t, e) { for (var n = 0; n < e.length; n++) { var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r) } }

            function z(t, e) { return (z = Object.setPrototypeOf || function(t, e) { return t.__proto__ = e, t })(t, e) }

            function V(t) { var e = function() { if ("undefined" === typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" === typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = W(t); if (e) { var i = W(this).constructor;
                        n = Reflect.construct(r, arguments, i) } else n = r.apply(this, arguments); return U(this, n) } }

            function U(t, e) { return !e || "object" !== N(e) && "function" !== typeof e ? function(t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t }(t) : e }

            function W(t) { return (W = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) { return t.__proto__ || Object.getPrototypeOf(t) })(t) } var H = "recharts-tooltip-wrapper";

            function q(t) { return t.dataKey } var Y = function(t) {! function(t, e) { if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), e && z(t, e) }(s, t); var e, n, r, o = V(s);

                function s() { var t;
                    B(this, s); for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r]; return (t = o.call.apply(o, [this].concat(n))).state = { boxWidth: -1, boxHeight: -1 }, t.wrapperNode = void 0, t.getTranslate = function(e) { var n = e.key,
                            r = e.tooltipDimension,
                            i = e.viewBoxDimension,
                            o = t.props,
                            a = o.allowEscapeViewBox,
                            s = o.coordinate,
                            u = o.offset,
                            c = o.position,
                            l = o.viewBox; if (c && Object(b.g)(c[n])) return c[n]; var h = s[n] - r - u,
                            f = s[n] + u; return a[n] ? f : s[n] + r + u > l[n] + i ? Math.max(h, l[n]) : Math.max(f, l[n]) }, t } return e = s, (n = [{ key: "componentDidMount", value: function() { this.updateBBox() } }, { key: "componentDidUpdate", value: function() { this.updateBBox() } }, { key: "updateBBox", value: function() { var t = this.state,
                            e = t.boxWidth,
                            n = t.boxHeight; if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) { var r = this.wrapperNode.getBoundingClientRect();
                            (Math.abs(r.width - e) > 1 || Math.abs(r.height - n) > 1) && this.setState({ boxWidth: r.width, boxHeight: r.height }) } else -1 === e && -1 === n || this.setState({ boxWidth: -1, boxHeight: -1 }) } }, { key: "render", value: function() { var t, e, n, r = this,
                            o = this.props,
                            s = o.payload,
                            c = o.isAnimationActive,
                            f = o.animationDuration,
                            d = o.animationEasing,
                            y = o.filterNull,
                            v = function(t, e) { return !0 === t ? u()(e, q) : a()(t) ? u()(e, t) : e }(o.payloadUniqBy, y && s && s.length ? s.filter((function(t) { return !i()(t.value) })) : s),
                            g = v && v.length,
                            m = this.props,
                            x = m.content,
                            w = m.viewBox,
                            O = m.coordinate,
                            _ = m.position,
                            M = m.active,
                            j = R({ pointerEvents: "none", visibility: M && g ? "visible" : "hidden", position: "absolute", top: 0, left: 0 }, m.wrapperStyle); if (_ && Object(b.g)(_.x) && Object(b.g)(_.y)) e = _.x, n = _.y;
                        else { var S = this.state,
                                E = S.boxWidth,
                                k = S.boxHeight;
                            E > 0 && k > 0 && O ? (e = this.getTranslate({ key: "x", tooltipDimension: E, viewBoxDimension: w.width }), n = this.getTranslate({ key: "y", tooltipDimension: k, viewBoxDimension: w.height })) : j.visibility = "hidden" }
                        j = R(R({}, Object(h.b)({ transform: this.props.useTranslate3d ? "translate3d(".concat(e, "px, ").concat(n, "px, 0)") : "translate(".concat(e, "px, ").concat(n, "px)") })), j), c && M && (j = R(R({}, Object(h.b)({ transition: "transform ".concat(f, "ms ").concat(d) })), j)); var A = p()(H, (L(t = {}, "".concat(H, "-right"), Object(b.g)(e) && O && Object(b.g)(O.x) && e >= O.x), L(t, "".concat(H, "-left"), Object(b.g)(e) && O && Object(b.g)(O.x) && e < O.x), L(t, "".concat(H, "-bottom"), Object(b.g)(n) && O && Object(b.g)(O.y) && n >= O.y), L(t, "".concat(H, "-top"), Object(b.g)(n) && O && Object(b.g)(O.y) && n < O.y), t)); return l.a.createElement("div", { className: A, style: j, ref: function(t) { r.wrapperNode = t } }, function(t, e) { return l.a.isValidElement(t) ? l.a.cloneElement(t, e) : a()(t) ? l.a.createElement(t, e) : l.a.createElement(T, e) }(x, R(R({}, this.props), {}, { payload: v }))) } }]) && F(e.prototype, n), r && F(e, r), s }(c.PureComponent);
            Y.displayName = "Tooltip", Y.defaultProps = { active: !1, allowEscapeViewBox: { x: !1, y: !1 }, offset: 10, viewBox: { x1: 0, x2: 0, y1: 0, y2: 0 }, coordinate: { x: 0, y: 0 }, cursorStyle: {}, separator: " : ", wrapperStyle: {}, contentStyle: {}, itemStyle: {}, labelStyle: {}, cursor: !0, trigger: "hover", isAnimationActive: !I.a.isSsr, animationEasing: "ease", animationDuration: 400, filterNull: !0, useTranslate3d: !1 } }, 1236: function(t, e, n) { "use strict";
            n.d(e, "a", (function() { return er })); var r = { allowDownsampling: !0 }; var i, o, a, s = function() {
                function t(t, e) { var n = this;
                    this._resolutionMediaQueryList = null, this._resolutionListener = function(t) { return n._onResolutionChanged() }, this._canvasConfiguredListeners = [], this.canvas = t, this._canvasSize = { width: this.canvas.clientWidth, height: this.canvas.clientHeight }, this._options = e, this._configureCanvas(), this._installResolutionListener() } return t.prototype.destroy = function() { this._canvasConfiguredListeners.length = 0, this._uninstallResolutionListener(), this.canvas = null }, Object.defineProperty(t.prototype, "canvasSize", { get: function() { return { width: this._canvasSize.width, height: this._canvasSize.height } }, enumerable: !0, configurable: !0 }), t.prototype.resizeCanvas = function(t) { this._canvasSize = { width: t.width, height: t.height }, this._configureCanvas() }, Object.defineProperty(t.prototype, "pixelRatio", { get: function() { var t = this.canvas.ownerDocument.defaultView; if (null == t) throw new Error("No window is associated with the canvas"); return t.devicePixelRatio > 1 || this._options.allowDownsampling ? t.devicePixelRatio : 1 }, enumerable: !0, configurable: !0 }), t.prototype.subscribeCanvasConfigured = function(t) { this._canvasConfiguredListeners.push(t) }, t.prototype.unsubscribeCanvasConfigured = function(t) { this._canvasConfiguredListeners = this._canvasConfiguredListeners.filter((function(e) { return e != t })) }, t.prototype._configureCanvas = function() { var t = this.pixelRatio;
                    this.canvas.style.width = this._canvasSize.width + "px", this.canvas.style.height = this._canvasSize.height + "px", this.canvas.width = this._canvasSize.width * t, this.canvas.height = this._canvasSize.height * t, this._emitCanvasConfigured() }, t.prototype._emitCanvasConfigured = function() { var t = this;
                    this._canvasConfiguredListeners.forEach((function(e) { return e.call(t) })) }, t.prototype._installResolutionListener = function() { if (null !== this._resolutionMediaQueryList) throw new Error("Resolution listener is already installed"); var t = this.canvas.ownerDocument.defaultView; if (null == t) throw new Error("No window is associated with the canvas"); var e = t.devicePixelRatio;
                    this._resolutionMediaQueryList = t.matchMedia("all and (resolution: " + e + "dppx)"), this._resolutionMediaQueryList.addListener(this._resolutionListener) }, t.prototype._uninstallResolutionListener = function() { null !== this._resolutionMediaQueryList && (this._resolutionMediaQueryList.removeListener(this._resolutionListener), this._resolutionMediaQueryList = null) }, t.prototype._reinstallResolutionListener = function() { this._uninstallResolutionListener(), this._installResolutionListener() }, t.prototype._onResolutionChanged = function() { this._configureCanvas(), this._reinstallResolutionListener() }, t }();

            function u(t, e) { var n, r = ((n = {})[0] = [], n[1] = [t.lineWidth, t.lineWidth], n[2] = [2 * t.lineWidth, 2 * t.lineWidth], n[3] = [6 * t.lineWidth, 6 * t.lineWidth], n[4] = [t.lineWidth, 4 * t.lineWidth], n)[e];
                t.setLineDash(r) }

            function c(t, e, n, r) { t.beginPath(); var i = t.lineWidth % 2 ? .5 : 0;
                t.moveTo(n, e + i), t.lineTo(r, e + i), t.stroke() }(a = i || (i = {}))[a.Simple = 0] = "Simple", a[a.WithSteps = 1] = "WithSteps",
                function(t) { t[t.Solid = 0] = "Solid", t[t.Dotted = 1] = "Dotted", t[t.Dashed = 2] = "Dashed", t[t.LargeDashed = 3] = "LargeDashed", t[t.SparseDotted = 4] = "SparseDotted" }(o || (o = {})); var l = function(t, e) { return (l = Object.setPrototypeOf || { __proto__: [] }
                    instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]) })(t, e) };

            function h(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

                function n() { this.constructor = t }
                l(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n) } var f = function() { return (f = Object.assign || function(t) { for (var e, n = 1, r = arguments.length; n < r; n++)
                        for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]); return t }).apply(this, arguments) };

            function p(t, e) { for (var n = 0, r = e.length, i = t.length; n < r; n++, i++) t[i] = e[n]; return t }

            function d(t, e) { if (!t) throw new Error("Assertion failed" + (e ? ": " + e : "")) }

            function y(t) { if (void 0 === t) throw new Error("Value is undefined"); return t }

            function v(t) { if (null === t) throw new Error("Value is null"); return t }

            function g(t) { return v(y(t)) }

            function b(t) { for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n]; for (var r = 0, i = e; r < i.length; r++) { var o = i[r]; for (var a in o) void 0 !== o[a] && ("object" != typeof o[a] || void 0 === t[a] ? t[a] = o[a] : b(t[a], o[a])) } return t }

            function m(t) { return "number" == typeof t && isFinite(t) }

            function x(t) { return "number" == typeof t && t % 1 == 0 }

            function w(t) { return "string" == typeof t }

            function O(t) { return "boolean" == typeof t }

            function _(t) { var e, n, r, i = t; if (!i || "object" != typeof i) return i; for (n in e = Array.isArray(i) ? [] : {}, i) i.hasOwnProperty(n) && (r = i[n], e[n] = r && "object" == typeof r ? _(r) : r); return e }

            function M(t) { return null !== t }

            function j(t) { return null === t ? void 0 : t } var S = function() {
                    function t() { this.t = [] } return t.prototype.i = function(t) { this.t = t }, t.prototype.h = function(t, e, n, r) { this.t.forEach((function(i) { t.save(), i.h(t, e, n, r), t.restore() })) }, t }(),
                E = function() {
                    function t() {} return t.prototype.h = function(t, e, n, r) { t.save(), t.scale(e, e), this.u(t, n, r), t.restore() }, t.prototype.o = function(t, e, n, r) { t.save(), t.scale(e, e), this.l(t, n, r), t.restore() }, t.prototype.l = function(t, e, n) {}, t }(),
                k = function(t) {
                    function e() { var e = null !== t && t.apply(this, arguments) || this; return e.v = null, e } return h(e, t), e.prototype._ = function(t) { this.v = t }, e.prototype.u = function(t) { if (null !== this.v && null !== this.v.M) { var e = this.v.M,
                                n = this.v,
                                r = function(r) { t.beginPath(); for (var i = e.to - 1; i >= e.from; --i) { var o = n.m[i];
                                        t.moveTo(o.g, o.p), t.arc(o.g, o.p, r, 0, 2 * Math.PI) }
                                    t.fill() };
                            t.fillStyle = n.k, r(n.N + 2), t.fillStyle = n.S, r(n.N) } }, e }(E),
                A = { from: 0, to: 1 },
                P = function() {
                    function t(t, e) { this.C = new S, this.D = [], this.T = [], this.B = !0, this.L = t, this.A = e, this.C.i(this.D) } return t.prototype.V = function(t) { var e = this,
                            n = this.L.O();
                        n.length !== this.D.length && (this.T = n.map((function() { return { m: [{ g: 0, p: 0, P: 0, F: 0 }], S: "", k: e.L.I().layout.backgroundColor, N: 0, M: null } })), this.D = this.T.map((function(t) { var e = new k; return e._(t), e })), this.C.i(this.D)), this.B = !0 }, t.prototype.W = function(t, e, n) { return this.B && (this.R(), this.B = !1), this.C }, t.prototype.R = function() { var t = this,
                            e = this.L.O(),
                            n = this.A.j(),
                            r = this.L.U();
                        e.forEach((function(e, i) { var o = t.T[i],
                                a = e.q(n); if (null !== a && e.H()) { var s = v(e.Y());
                                o.S = a.K, o.k = a.$, o.N = a.N, o.m[0].F = a.F, o.m[0].p = e.Z().X(a.F, s.J), o.m[0].P = n, o.m[0].g = r.G(n), o.M = A } else o.M = null })) }, t }(),
                C = function() {
                    function t(t) { this.tt = t } return t.prototype.h = function(t, e, n, r) { if (null !== this.tt) { var i = this.tt.it.H,
                                o = this.tt.nt.H; if (i || o) { t.save(); var a = Math.round(this.tt.g * e),
                                    s = Math.round(this.tt.p * e),
                                    l = Math.ceil(this.tt.ht * e),
                                    h = Math.ceil(this.tt.st * e);
                                t.lineCap = "butt", i && a >= 0 && (t.lineWidth = Math.floor(this.tt.it.rt * e), t.strokeStyle = this.tt.it.et, t.fillStyle = this.tt.it.et, u(t, this.tt.it.ut), function(t, e, n, r) { t.beginPath(); var i = t.lineWidth % 2 ? .5 : 0;
                                    t.moveTo(e + i, 0), t.lineTo(e + i, r), t.stroke() }(t, a, 0, h)), o && s >= 0 && (t.lineWidth = Math.floor(this.tt.nt.rt * e), t.strokeStyle = this.tt.nt.et, t.fillStyle = this.tt.nt.et, u(t, this.tt.nt.ut), c(t, s, 0, l)), t.restore() } } }, t }(),
                T = function() {
                    function t(t) { this.B = !0, this.at = { it: { rt: 1, ut: 0, et: "", H: !1 }, nt: { rt: 1, ut: 0, et: "", H: !1 }, ht: 0, st: 0, g: 0, p: 0 }, this.ot = new C(this.at), this.lt = t } return t.prototype.V = function() { this.B = !0 }, t.prototype.W = function(t, e) { return this.B && (this.R(), this.B = !1), this.ot }, t.prototype.R = function() { var t = this.lt.H(),
                            e = v(this.lt.ft()),
                            n = e.ct().I().crosshair,
                            r = this.at;
                        r.nt.H = t && this.lt.vt(e), r.it.H = t && this.lt._t(), r.nt.rt = n.horzLine.width, r.nt.ut = n.horzLine.style, r.nt.et = n.horzLine.color, r.it.rt = n.vertLine.width, r.it.ut = n.vertLine.style, r.it.et = n.vertLine.color, r.ht = e.dt(), r.st = e.wt(), r.g = this.lt.Mt(), r.p = this.lt.bt() }, t }(),
                I = { khaki: "#f0e68c", azure: "#f0ffff", aliceblue: "#f0f8ff", ghostwhite: "#f8f8ff", gold: "#ffd700", goldenrod: "#daa520", gainsboro: "#dcdcdc", gray: "#808080", green: "#008000", honeydew: "#f0fff0", floralwhite: "#fffaf0", lightblue: "#add8e6", lightcoral: "#f08080", lemonchiffon: "#fffacd", hotpink: "#ff69b4", lightyellow: "#ffffe0", greenyellow: "#adff2f", lightgoldenrodyellow: "#fafad2", limegreen: "#32cd32", linen: "#faf0e6", lightcyan: "#e0ffff", magenta: "#f0f", maroon: "#800000", olive: "#808000", orange: "#ffa500", oldlace: "#fdf5e6", mediumblue: "#0000cd", transparent: "#0000", lime: "#0f0", lightpink: "#ffb6c1", mistyrose: "#ffe4e1", moccasin: "#ffe4b5", midnightblue: "#191970", orchid: "#da70d6", mediumorchid: "#ba55d3", mediumturquoise: "#48d1cc", orangered: "#ff4500", royalblue: "#4169e1", powderblue: "#b0e0e6", red: "#f00", coral: "#ff7f50", turquoise: "#40e0d0", white: "#fff", whitesmoke: "#f5f5f5", wheat: "#f5deb3", teal: "#008080", steelblue: "#4682b4", bisque: "#ffe4c4", aquamarine: "#7fffd4", aqua: "#0ff", sienna: "#a0522d", silver: "#c0c0c0", springgreen: "#00ff7f", antiquewhite: "#faebd7", burlywood: "#deb887", brown: "#a52a2a", beige: "#f5f5dc", chocolate: "#d2691e", chartreuse: "#7fff00", cornflowerblue: "#6495ed", cornsilk: "#fff8dc", crimson: "#dc143c", cadetblue: "#5f9ea0", tomato: "#ff6347", fuchsia: "#f0f", blue: "#00f", salmon: "#fa8072", blanchedalmond: "#ffebcd", slateblue: "#6a5acd", slategray: "#708090", thistle: "#d8bfd8", tan: "#d2b48c", cyan: "#0ff", darkblue: "#00008b", darkcyan: "#008b8b", darkgoldenrod: "#b8860b", darkgray: "#a9a9a9", blueviolet: "#8a2be2", black: "#000", darkmagenta: "#8b008b", darkslateblue: "#483d8b", darkkhaki: "#bdb76b", darkorchid: "#9932cc", darkorange: "#ff8c00", darkgreen: "#006400", darkred: "#8b0000", dodgerblue: "#1e90ff", darkslategray: "#2f4f4f", dimgray: "#696969", deepskyblue: "#00bfff", firebrick: "#b22222", forestgreen: "#228b22", indigo: "#4b0082", ivory: "#fffff0", lavenderblush: "#fff0f5", feldspar: "#d19275", indianred: "#cd5c5c", lightgreen: "#90ee90", lightgrey: "#d3d3d3", lightskyblue: "#87cefa", lightslategray: "#789", lightslateblue: "#8470ff", snow: "#fffafa", lightseagreen: "#20b2aa", lightsalmon: "#ffa07a", darksalmon: "#e9967a", darkviolet: "#9400d3", mediumpurple: "#9370d8", mediumaquamarine: "#66cdaa", skyblue: "#87ceeb", lavender: "#e6e6fa", lightsteelblue: "#b0c4de", mediumvioletred: "#c71585", mintcream: "#f5fffa", navajowhite: "#ffdead", navy: "#000080", olivedrab: "#6b8e23", palevioletred: "#d87093", violetred: "#d02090", yellow: "#ff0", yellowgreen: "#9acd32", lawngreen: "#7cfc00", pink: "#ffc0cb", paleturquoise: "#afeeee", palegoldenrod: "#eee8aa", darkolivegreen: "#556b2f", darkseagreen: "#8fbc8f", darkturquoise: "#00ced1", peachpuff: "#ffdab9", deeppink: "#ff1493", violet: "#ee82ee", palegreen: "#98fb98", mediumseagreen: "#3cb371", peru: "#cd853f", saddlebrown: "#8b4513", sandybrown: "#f4a460", rosybrown: "#bc8f8f", purple: "#800080", seagreen: "#2e8b57", seashell: "#fff5ee", papayawhip: "#ffefd5", mediumslateblue: "#7b68ee", plum: "#dda0dd", mediumspringgreen: "#00fa9a" };

            function N(t) { return t < 0 ? 0 : t > 255 ? 255 : Math.round(t) || 0 } var D = /^#([0-9a-f])([0-9a-f])([0-9a-f])([0-9a-f])?$/i,
                R = /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})?$/i,
                L = /^rgb\(\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*\)$/,
                B = /^rgba\(\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?[\d]{0,10}(?:\.\d+)?)\s*\)$/;

            function F(t) { var e, n = function(t) { var e; if ((t = t.toLowerCase()) in I && (t = I[t]), e = B.exec(t) || L.exec(t)) return [N(parseInt(e[1], 10)), N(parseInt(e[2], 10)), N(parseInt(e[3], 10))]; if (e = R.exec(t)) return [N(parseInt(e[1], 16)), N(parseInt(e[2], 16)), N(parseInt(e[3], 16))]; if (e = D.exec(t)) return [N(17 * parseInt(e[1], 16)), N(17 * parseInt(e[2], 16)), N(17 * parseInt(e[3], 16))]; throw new Error("Cannot parse color: " + t) }(t); return { gt: "rgb(" + n[0] + ", " + n[1] + ", " + n[2] + ")", yt: (e = n, .199 * e[0] + .687 * e[1] + .114 * e[2] > 160 ? "black" : "white") } }

            function z(t, e, n, r, i, o) { t.fillRect(e + o, n, r - 2 * o, o), t.fillRect(e + o, n + i - o, r - 2 * o, o), t.fillRect(e, n, o, i), t.fillRect(e + r - o, n, o, i) }

            function V(t, e, n) { t.save(), t.scale(e, e), n(), t.restore() }

            function U(t, e, n, r, i, o) { t.save(), t.globalCompositeOperation = "copy", t.fillStyle = o, t.fillRect(e, n, r, i), t.restore() } var W, H = function() {
                    function t(t, e) { this._(t, e) } return t.prototype._ = function(t, e) { this.tt = t, this.kt = e }, t.prototype.h = function(t, e, n, r, i, o) { if (this.tt.H) { t.font = e.xt; var a = this.tt.Nt || !this.tt.St ? e.Ct : 0,
                                s = e.Dt,
                                u = e.Tt,
                                c = e.Bt,
                                l = e.Et,
                                h = e.Lt,
                                f = this.tt.At,
                                p = Math.ceil(n.Vt(t, f)),
                                d = e.Ot,
                                y = e.zt + u + c,
                                v = Math.ceil(.5 * y),
                                g = s + p + l + h + a,
                                b = this.kt.Pt;
                            this.kt.Ft && (b = this.kt.Ft); var m, x, w = (b = Math.round(b)) - v,
                                O = w + y,
                                _ = "right" === i,
                                M = _ ? r : 0,
                                j = Math.ceil(r * o),
                                S = M; if (t.fillStyle = this.kt.gt, t.lineWidth = 1, t.lineCap = "butt", f) { _ ? (m = M - a, x = (S = M - g) + h) : (S = M + g, m = M + a, x = M + s + a + l); var E = Math.max(1, Math.floor(o)),
                                    k = Math.max(1, Math.floor(s * o)),
                                    A = _ ? j : 0,
                                    P = Math.round(w * o),
                                    C = Math.round(S * o),
                                    T = Math.round(b * o) - Math.floor(.5 * o),
                                    I = T + E + (T - P),
                                    N = Math.round(m * o);
                                t.save(), t.beginPath(), t.moveTo(A, P), t.lineTo(C, P), t.lineTo(C, I), t.lineTo(A, I), t.fill(), t.fillStyle = this.tt.$, t.fillRect(_ ? j - k : 0, P, k, I - P), this.tt.Nt && (t.fillStyle = this.kt.et, t.fillRect(A, T, N - A, E)), t.textAlign = "left", t.fillStyle = this.kt.et, V(t, o, (function() { t.fillText(f, x, O - c - d) })), t.restore() } } }, t.prototype.wt = function(t, e) { return this.tt.H ? t.zt + t.Tt + t.Bt : 0 }, t }(),
                q = function() {
                    function t(t) { this.It = { Pt: 0, et: "#FFF", gt: "#000" }, this.Wt = { At: "", H: !1, Nt: !0, St: !1, $: "" }, this.Rt = { At: "", H: !1, Nt: !1, St: !0, $: "" }, this.B = !0, this.jt = new(t || H)(this.Wt, this.It), this.Ut = new(t || H)(this.Rt, this.It) } return t.prototype.At = function() { return this.Wt.At }, t.prototype.Pt = function() { return this.qt(), this.It.Pt }, t.prototype.V = function() { this.B = !0 }, t.prototype.wt = function(t, e) { return void 0 === e && (e = !1), Math.max(this.jt.wt(t, e), this.Ut.wt(t, e)) }, t.prototype.Ht = function() { return this.It.Ft || 0 }, t.prototype.Yt = function(t) { this.It.Ft = t }, t.prototype.Kt = function() { return this.qt(), this.Wt.H || this.Rt.H }, t.prototype.$t = function() { return this.qt(), this.Wt.H }, t.prototype.W = function(t) { return this.qt(), this.Wt.Nt = this.Wt.Nt && t.I().drawTicks, this.Rt.Nt = this.Rt.Nt && t.I().drawTicks, this.jt._(this.Wt, this.It), this.Ut._(this.Rt, this.It), this.jt }, t.prototype.Xt = function() { return this.qt(), this.jt._(this.Wt, this.It), this.Ut._(this.Rt, this.It), this.Ut }, t.prototype.qt = function() { this.B && (this.Wt.Nt = !0, this.Rt.Nt = !1, this.Zt(this.Wt, this.Rt, this.It)) }, t }(),
                Y = function(t) {
                    function e(e, n, r) { var i = t.call(this) || this; return i.lt = e, i.Jt = n, i.Gt = r, i } return h(e, t), e.prototype.Zt = function(t, e, n) { t.H = !1; var r = this.lt.I().horzLine; if (r.labelVisible) { var i = this.Jt.Y(); if (this.lt.H() && !this.Jt.Qt() && null !== i) { var o = F(r.labelBackgroundColor);
                                n.gt = o.gt, n.et = o.yt; var a = this.Gt(this.Jt);
                                n.Pt = a.Pt, t.At = this.Jt.ti(a.F, i), t.H = !0 } } }, e }(q),
                $ = /[1-9]/g,
                J = function() {
                    function t() { this.tt = null } return t.prototype._ = function(t) { this.tt = t }, t.prototype.h = function(t, e, n) { var r = this; if (null !== this.tt && !1 !== this.tt.H && 0 !== this.tt.At.length) { t.font = e.xt; var i = Math.round(e.ii.Vt(t, this.tt.At, $)); if (!(i <= 0)) { t.save(); var o = e.ni,
                                    a = i + 2 * o,
                                    s = a / 2,
                                    u = this.tt.dt,
                                    c = this.tt.Pt,
                                    l = Math.floor(c - s) + .5;
                                l < 0 ? (c += Math.abs(0 - l), l = Math.floor(c - s) + .5) : l + a > u && (c -= Math.abs(u - (l + a)), l = Math.floor(c - s) + .5); var h = l + a,
                                    f = 0 + e.Dt + e.Tt + e.zt + e.Bt;
                                t.fillStyle = this.tt.gt; var p = Math.round(l * n),
                                    d = Math.round(0 * n),
                                    y = Math.round(h * n),
                                    g = Math.round(f * n);
                                t.fillRect(p, d, y - p, g - d); var b = Math.round(this.tt.Pt * n),
                                    m = d,
                                    x = Math.round((m + e.Dt + e.Ct) * n);
                                t.fillStyle = this.tt.et; var w = Math.max(1, Math.floor(n)),
                                    O = Math.floor(.5 * n);
                                t.fillRect(b - O, m, w, x - m); var _ = f - e.Ot - e.Bt;
                                t.textAlign = "left", t.fillStyle = this.tt.et, V(t, n, (function() { t.fillText(v(r.tt).At, l + o, _) })), t.restore() } } }, t }(),
                G = function() {
                    function t(t, e, n) { this.B = !0, this.ot = new J, this.at = { H: !1, gt: "#4c525e", et: "white", At: "", dt: 0, Pt: NaN }, this.A = t, this.hi = e, this.Gt = n } return t.prototype.V = function() { this.B = !0 }, t.prototype.W = function() { return this.B && (this.R(), this.B = !1), this.ot._(this.at), this.ot }, t.prototype.R = function() { var t = this.at;
                        t.H = !1; var e = this.A.I().vertLine; if (e.labelVisible) { var n = this.hi.U(); if (!n.Qt()) { var r = n.si(this.A.j());
                                t.dt = n.dt(); var i = this.Gt(); if (i.P) { t.Pt = i.Pt, t.At = n.ri(v(r)), t.H = !0; var o = F(e.labelBackgroundColor);
                                    t.gt = o.gt, t.et = o.yt } } } }, t }(),
                X = function() {
                    function t() { this.ei = null, this.ui = 0 } return t.prototype.ai = function() { return this.ui }, t.prototype.oi = function(t) { this.ui = t }, t.prototype.Z = function() { return this.ei }, t.prototype.li = function(t) { this.ei = t }, t.prototype.fi = function(t, e) { return [] }, t.prototype.ci = function(t) { return [] }, t.prototype.vi = function() { return [] }, t.prototype.H = function() { return !0 }, t }();! function(t) { t[t.Normal = 0] = "Normal", t[t.Magnet = 1] = "Magnet" }(W || (W = {})); var Q = function(t) {
                function e(e, n) { var r, i, o = t.call(this) || this;
                    o._i = null, o.di = NaN, o.wi = 0, o.Mi = !0, o.bi = new Map, o.mi = !1, o.gi = NaN, o.pi = NaN, o.yi = NaN, o.ki = NaN, o.hi = e, o.xi = n, o.Ni = new P(e, o), o.Si = (r = function() { return o.di }, i = function() { return o.pi }, function(t) { var e = i(),
                            n = r(); if (t === v(o._i).Ci()) return { F: n, Pt: e }; var a = v(t.Y()); return { F: t.Di(e, a), Pt: e } }); var a = function() { return { P: o.hi.U().si(o.wi), Pt: o.Mt() } }; return o.Ti = new G(o, e, a), o.Bi = new T(o), o } return h(e, t), e.prototype.I = function() { return this.xi }, e.prototype.Ei = function(t, e) { this.yi = t, this.ki = e }, e.prototype.Li = function() { this.yi = NaN, this.ki = NaN }, e.prototype.Ai = function() { return this.yi }, e.prototype.Vi = function() { return this.ki }, e.prototype.Oi = function(t, e, n) { this.mi || (this.mi = !0), this.Mi = !0, this.zi(t, e, n) }, e.prototype.j = function() { return this.wi }, e.prototype.Mt = function() { return this.gi }, e.prototype.bt = function() { return this.pi }, e.prototype.H = function() { return this.Mi }, e.prototype.Pi = function() { this.Mi = !1, this.Fi(), this.di = NaN, this.gi = NaN, this.pi = NaN, this._i = null, this.Li() }, e.prototype.ci = function(t) { return null !== this._i ? [this.Bi, this.Ni] : [] }, e.prototype.vt = function(t) { return t === this._i && this.xi.horzLine.visible }, e.prototype._t = function() { return this.xi.vertLine.visible }, e.prototype.fi = function(t, e) { this.Mi && this._i === t || this.bi.clear(); var n = []; return this._i === t && n.push(this.Ii(this.bi, e, this.Si)), n }, e.prototype.vi = function() { return this.Mi ? [this.Ti] : [] }, e.prototype.ft = function() { return this._i }, e.prototype.Wi = function() { this.Bi.V(), this.bi.forEach((function(t) { return t.V() })), this.Ti.V(), this.Ni.V() }, e.prototype.Ri = function(t) { return t && !t.Ci().Qt() ? t.Ci() : null }, e.prototype.zi = function(t, e, n) { this.ji(t, e, n) && this.Wi() }, e.prototype.ji = function(t, e, n) { var r = this.gi,
                        i = this.pi,
                        o = this.di,
                        a = this.wi,
                        s = this._i,
                        u = this.Ri(n);
                    this.wi = t, this.gi = isNaN(t) ? NaN : this.hi.U().G(t), this._i = n; var c = null !== u ? u.Y() : null; return null !== u && null !== c ? (this.di = e, this.pi = u.X(e, c)) : (this.di = NaN, this.pi = NaN), r !== this.gi || i !== this.pi || a !== this.wi || o !== this.di || s !== this._i }, e.prototype.Fi = function() { var t = this.hi.O().map((function(t) { return t.qi().Ui() })).filter(M),
                        e = 0 === t.length ? null : Math.max.apply(Math, t);
                    this.wi = null !== e ? e : NaN }, e.prototype.Ii = function(t, e, n) { var r = t.get(e); return void 0 === r && (r = new Y(this, e, n), t.set(e, r)), r }, e }(X);

            function Z(t, e) { if (!m(t)) return "n/a"; if (!x(e)) throw new TypeError("invalid length"); if (e < 0 || e > 16) throw new TypeError("invalid length"); return 0 === e ? t.toString() : ("0000000000000000" + t.toString()).slice(-e) } var K = function() {
                    function t(t, e) { if (e || (e = 1), m(t) && x(t) || (t = 100), t < 0) throw new TypeError("invalid base");
                        this.Jt = t, this.Hi = e, this.Yi() } return t.prototype.format = function(t) { var e = t < 0 ? "\u2212" : ""; return t = Math.abs(t), e + this.Ki(t) }, t.prototype.Yi = function() { if (this.$i = 0, this.Jt > 0 && this.Hi > 0)
                            for (var t = this.Jt; t > 1;) t /= 10, this.$i++ }, t.prototype.Ki = function(t) { var e = this.Jt / this.Hi,
                            n = Math.floor(t),
                            r = "",
                            i = void 0 !== this.$i ? this.$i : NaN; if (e > 1) { var o = +(Math.round(t * e) - n * e).toFixed(this.$i);
                            o >= e && (o -= e, n += 1), r = "." + Z(+o.toFixed(this.$i) * this.Hi, i) } else n = Math.round(n * e) / e, i > 0 && (r = "." + Z(0, i)); return n.toFixed(0) + r }, t }(),
                tt = function(t) {
                    function e(e) { return void 0 === e && (e = 100), t.call(this, e) || this } return h(e, t), e.prototype.format = function(e) { return t.prototype.format.call(this, e) + "%" }, e }(K),
                et = function() {
                    function t() { this.Xi = [] } return t.prototype.Zi = function(t, e, n) { var r = { Ji: t, Gi: e, Qi: !0 === n };
                        this.Xi.push(r) }, t.prototype.tn = function(t) { var e = this.Xi.findIndex((function(e) { return t === e.Ji }));
                        e > -1 && this.Xi.splice(e, 1) }, t.prototype.nn = function(t) { this.Xi = this.Xi.filter((function(e) { return e.Gi === t })) }, t.prototype.hn = function(t, e) { var n = p([], this.Xi);
                        this.Xi = this.Xi.filter((function(t) { return !t.Qi })), n.forEach((function(n) { return n.Ji(t, e) })) }, t.prototype.sn = function() { return this.Xi.length > 0 }, t.prototype.rn = function() { this.Xi = [] }, t }(),
                nt = function() {
                    function t(t, e) { this.en = t, this.un = e } return t.prototype.an = function(t) { return null !== t && this.en === t.en && this.un === t.un }, t.prototype.on = function() { return new t(this.en, this.un) }, t.prototype.ln = function() { return this.en }, t.prototype.fn = function() { return this.un }, t.prototype.cn = function() { return this.un - this.en }, t.prototype.Qt = function() { return this.un === this.en || Number.isNaN(this.un) || Number.isNaN(this.en) }, t.prototype.vn = function(e) { return null === e ? this : new t(Math.min(this.ln(), e.ln()), Math.max(this.fn(), e.fn())) }, t.prototype._n = function(t) { if (m(t) && 0 !== this.un - this.en) { var e = .5 * (this.un + this.en),
                                n = this.un - e,
                                r = this.en - e;
                            n *= t, r *= t, this.un = e + n, this.en = e + r } }, t.prototype.dn = function(t) { m(t) && (this.un += t, this.en += t) }, t.prototype.wn = function() { return { minValue: this.en, maxValue: this.un } }, t.Mn = function(e) { return null === e ? null : new t(e.minValue, e.maxValue) }, t }();

            function rt(t, e, n) { return Math.min(Math.max(t, e), n) }

            function it(t, e, n) { return e - t <= n }

            function ot(t) { return t <= 0 ? NaN : Math.log(t) / Math.log(10) }

            function at(t) { var e = Math.ceil(t); return e % 2 != 0 ? e - 1 : e }

            function st(t) { var e = Math.ceil(t); return e % 2 == 0 ? e - 1 : e }

            function ut(t, e) { var n = 100 * (t - e) / e; return e < 0 ? -n : n }

            function ct(t, e) { var n = ut(t.ln(), e),
                    r = ut(t.fn(), e); return new nt(n, r) }

            function lt(t, e) { var n = 100 * (t - e) / e + 100; return e < 0 ? -n : n }

            function ht(t, e) { var n = lt(t.ln(), e),
                    r = lt(t.fn(), e); return new nt(n, r) }

            function ft(t) { var e = Math.abs(t); if (e < 1e-8) return 0; var n = ot(e + 1e-4) + 4; return t < 0 ? -n : n }

            function pt(t) { var e = Math.abs(t); if (e < 1e-8) return 0; var n = Math.pow(10, e - 4) - 1e-4; return t < 0 ? -n : n }

            function dt(t) { if (null === t) return null; var e = ft(t.ln()),
                    n = ft(t.fn()); return new nt(e, n) } var yt, vt = function() {
                    function t(t, e) { if (this.bn = t, this.mn = e, function(t) { if (t < 0) return !1; for (var e = t; e > 1; e /= 10)
                                    if (e % 10 != 0) return !1;
                                return !0 }(this.bn)) this.gn = [2, 2.5, 2];
                        else { this.gn = []; for (var n = this.bn; 1 !== n;) { if (n % 2 == 0) this.gn.push(2), n /= 2;
                                else { if (n % 5 != 0) throw new Error("unexpected base");
                                    this.gn.push(2, 2.5), n /= 5 } if (this.gn.length > 100) throw new Error("something wrong with base") } } } return t.prototype.pn = function(t, e, n) { for (var r, i = 0 === this.bn ? 0 : 1 / this.bn, o = 1e-9, a = Math.pow(10, Math.max(0, Math.ceil(ot(t - e)))), s = 0, u = this.mn[0];;) { var c = it(a, i, o) && a > i + o,
                                l = it(a, n * u, o),
                                h = it(a, 1, o); if (!(c && l && h)) break;
                            a /= u, u = this.mn[++s % this.mn.length] } if (a <= i + o && (a = i), a = Math.max(1, a), this.gn.length > 0 && (r = a, 1, o, Math.abs(r - 1) < 1e-9))
                            for (s = 0, u = this.gn[0]; it(a, n * u, o) && a > i + o;) a /= u, u = this.gn[++s % this.gn.length]; return a }, t }(),
                gt = function() {
                    function t(t, e, n, r) { this.yn = [], this.Jt = t, this.bn = e, this.kn = n, this.xn = r } return t.prototype.pn = function(t, e) { if (t < e) throw new Error("high < low"); var n = this.Jt.wt(),
                            r = (t - e) * this.Nn() / n,
                            i = new vt(this.bn, [2, 2.5, 2]),
                            o = new vt(this.bn, [2, 2, 2.5]),
                            a = new vt(this.bn, [2.5, 2, 2]),
                            s = []; return s.push(i.pn(t, e, r), o.pn(t, e, r), a.pn(t, e, r)),
                            function(t) { if (t.length < 1) throw Error("array is empty"); for (var e = t[0], n = 1; n < t.length; ++n) t[n] < e && (e = t[n]); return e }(s) }, t.prototype.Sn = function() { var t = this.Jt,
                            e = t.Y(); if (null !== e) { var n = t.wt(),
                                r = this.kn(n - 1, e),
                                i = this.kn(0, e),
                                o = this.Jt.I().entireTextOnly ? this.Cn() / 2 : 0,
                                a = o,
                                s = n - 1 - o,
                                u = Math.max(r, i),
                                c = Math.min(r, i); if (u !== c) { for (var l = this.pn(u, c), h = u % l, f = u >= c ? 1 : -1, p = null, d = 0, y = u - (h += h < 0 ? l : 0); y > c; y -= l) { var v = this.xn(y, e, !0);
                                    null !== p && Math.abs(v - p) < this.Nn() || v < a || v > s || (d < this.yn.length ? (this.yn[d].Dn = v, this.yn[d].Tn = t.Bn(y)) : this.yn.push({ Dn: v, Tn: t.Bn(y) }), d++, p = v, t.En() && (l = this.pn(y * f, c))) }
                                this.yn.length = d } else this.yn = [] } else this.yn = [] }, t.prototype.Ln = function() { return this.yn }, t.prototype.Cn = function() { return this.Jt.zt() }, t.prototype.Nn = function() { return Math.ceil(2.5 * this.Cn()) }, t }();

            function bt(t) { return t.slice().sort((function(t, e) { return v(t.ai()) - v(e.ai()) })) }! function(t) { t[t.Normal = 0] = "Normal", t[t.Logarithmic = 1] = "Logarithmic", t[t.Percentage = 2] = "Percentage", t[t.IndexedTo100 = 3] = "IndexedTo100" }(yt || (yt = {})); var mt, xt = new tt,
                wt = new K(100, 1),
                Ot = function() {
                    function t(t, e, n, r) { this.An = 0, this.Vn = null, this.On = null, this.zn = null, this.Pn = { Fn: !1, In: null }, this.Wn = 0, this.Rn = 0, this.jn = new et, this.Un = new et, this.qn = [], this.Hn = null, this.Yn = null, this.Kn = null, this.$n = null, this.Xn = wt, this.Zn = t, this.xi = e, this.Jn = n, this.Gn = r, this.Qn = new gt(this, 100, this.th.bind(this), this.ih.bind(this)) } return t.prototype.nh = function() { return this.Zn }, t.prototype.I = function() { return this.xi }, t.prototype.hh = function(t) { if (b(this.xi, t), this.sh(), void 0 !== t.mode && this.rh({ eh: t.mode }), void 0 !== t.scaleMargins) { var e = y(t.scaleMargins.top),
                                n = y(t.scaleMargins.bottom); if (e < 0 || e > 1) throw new Error("Invalid top margin - expect value between 0 and 1, given=" + e); if (n < 0 || n > 1 || e + n > 1) throw new Error("Invalid bottom margin - expect value between 0 and 1, given=" + n); if (e + n > 1) throw new Error("Invalid margins - sum of margins must be less than 1, given=" + (e + n));
                            this.uh(), this.Yn = null } }, t.prototype.ah = function() { return this.xi.autoScale }, t.prototype.En = function() { return 1 === this.xi.mode }, t.prototype.oh = function() { return 2 === this.xi.mode }, t.prototype.lh = function() { return 3 === this.xi.mode }, t.prototype.eh = function() { return { fh: this.xi.autoScale, _h: this.xi.invertScale, eh: this.xi.mode } }, t.prototype.rh = function(t) { var e = this.eh(),
                            n = null;
                        void 0 !== t.fh && (this.xi.autoScale = t.fh), void 0 !== t.eh && (this.xi.mode = t.eh, 2 !== t.eh && 3 !== t.eh || (this.xi.autoScale = !0), this.Pn.Fn = !1), 1 === e.eh && t.eh !== e.eh && (function(t) { if (null === t) return !1; var e = pt(t.ln()),
                                n = pt(t.fn()); return isFinite(e) && isFinite(n) }(this.On) ? null !== (n = function(t) { if (null === t) return null; var e = pt(t.ln()),
                                n = pt(t.fn()); return new nt(e, n) }(this.On)) && this.dh(n) : this.xi.autoScale = !0), 1 === t.eh && t.eh !== e.eh && null !== (n = dt(this.On)) && this.dh(n); var r = e.eh !== this.xi.mode;
                        r && (2 === e.eh || this.oh()) && this.sh(), r && (3 === e.eh || this.lh()) && this.sh(), void 0 !== t._h && e._h !== t._h && (this.xi.invertScale = t._h, this.wh()), this.Un.hn(e, this.eh()) }, t.prototype.Mh = function() { return this.Un }, t.prototype.zt = function() { return this.Jn.fontSize }, t.prototype.wt = function() { return this.An }, t.prototype.bh = function(t) { this.An !== t && (this.An = t, this.uh(), this.Yn = null) }, t.prototype.mh = function() { if (this.Vn) return this.Vn; var t = this.wt() - this.gh() - this.ph(); return this.Vn = t, t }, t.prototype.yh = function() { return this.kh(), this.On }, t.prototype.dh = function(t, e) { var n = this.On;
                        (e || null === n && null !== t || null !== n && !n.an(t)) && (this.Yn = null, this.On = t) }, t.prototype.Qt = function() { return this.kh(), 0 === this.An || !this.On || this.On.Qt() }, t.prototype.xh = function(t) { return this._h() ? t : this.wt() - 1 - t }, t.prototype.X = function(t, e) { return this.oh() ? t = ut(t, e) : this.lh() && (t = lt(t, e)), this.ih(t, e) }, t.prototype.Nh = function(t, e, n) { this.kh(); for (var r = this.ph(), i = v(this.yh()), o = i.ln(), a = i.fn(), s = this.mh() - 1, u = this._h(), c = s / (a - o), l = void 0 === n ? 0 : n.from, h = void 0 === n ? t.length : n.to, f = this.Sh(), p = l; p < h; p++) { var d = t[p],
                                y = d.F; if (!isNaN(y)) { var g = y;
                                null !== f && (g = f(d.F, e)); var b = r + c * (g - o),
                                    m = u ? b : this.An - 1 - b;
                                d.p = m } } }, t.prototype.Ch = function(t, e, n) { this.kh(); for (var r = this.ph(), i = v(this.yh()), o = i.ln(), a = i.fn(), s = this.mh() - 1, u = this._h(), c = s / (a - o), l = void 0 === n ? 0 : n.from, h = void 0 === n ? t.length : n.to, f = this.Sh(), p = l; p < h; p++) { var d = t[p],
                                y = d.open,
                                g = d.high,
                                b = d.low,
                                m = d.close;
                            null !== f && (y = f(d.open, e), g = f(d.high, e), b = f(d.low, e), m = f(d.close, e)); var x = r + c * (y - o),
                                w = u ? x : this.An - 1 - x;
                            d.Dh = w, x = r + c * (g - o), w = u ? x : this.An - 1 - x, d.Th = w, x = r + c * (b - o), w = u ? x : this.An - 1 - x, d.Bh = w, x = r + c * (m - o), w = u ? x : this.An - 1 - x, d.Eh = w } }, t.prototype.Di = function(t, e) { var n = this.th(t, e); return this.Lh(n, e) }, t.prototype.Lh = function(t, e) { var n = t; return this.oh() ? n = function(t, e) { return e < 0 && (t = -t), t / 100 * e + e }(n, e) : this.lh() && (n = function(t, e) { return t -= 100, e < 0 && (t = -t), t / 100 * e + e }(n, e)), n }, t.prototype.Ah = function() { return this.qn }, t.prototype.Vh = function() { if (this.Hn) return this.Hn; for (var t = [], e = 0; e < this.qn.length; e++) { var n = this.qn[e];
                            null === n.ai() && n.oi(e + 1), t.push(n) } return t = bt(t), this.Hn = t, this.Hn }, t.prototype.Oh = function(t) {-1 === this.qn.indexOf(t) && (this.qn.push(t), this.sh(), this.zh()) }, t.prototype.Ph = function(t) { var e = this.qn.indexOf(t); if (-1 === e) throw new Error("source is not attached to scale");
                        this.qn.splice(e, 1), 0 === this.qn.length && (this.rh({ fh: !0 }), this.dh(null)), this.sh(), this.zh() }, t.prototype.Y = function() { for (var t = null, e = 0, n = this.qn; e < n.length; e++) { var r = n[e].Y();
                            null !== r && (null === t || r.Fh < t.Fh) && (t = r) } return null === t ? null : t.J }, t.prototype._h = function() { return this.xi.invertScale }, t.prototype.Ln = function() { return this.Yn || (this.Qn.Sn(), this.Yn = this.Qn.Ln(), this.jn.hn()), this.Yn }, t.prototype.Ih = function() { return this.jn }, t.prototype.Wh = function(t) { this.oh() || this.lh() || null === this.Kn && null === this.zn && (this.Qt() || (this.Kn = this.An - t, this.zn = v(this.yh()).on())) }, t.prototype.Rh = function(t) { if (!this.oh() && !this.lh() && null !== this.Kn) { this.rh({ fh: !1 }), (t = this.An - t) < 0 && (t = 0); var e = (this.Kn + .2 * (this.An - 1)) / (t + .2 * (this.An - 1)),
                                n = v(this.zn).on();
                            e = Math.max(e, .1), n._n(e), this.dh(n) } }, t.prototype.jh = function() { this.oh() || this.lh() || (this.Kn = null, this.zn = null) }, t.prototype.Uh = function(t) { this.ah() || null === this.$n && null === this.zn && (this.Qt() || (this.$n = t, this.zn = v(this.yh()).on())) }, t.prototype.qh = function(t) { if (!this.ah() && null !== this.$n) { var e = v(this.yh()).cn() / (this.mh() - 1),
                                n = t - this.$n;
                            this._h() && (n *= -1); var r = n * e,
                                i = v(this.zn).on();
                            i.dn(r), this.dh(i, !0), this.Yn = null } }, t.prototype.Hh = function() { this.ah() || null !== this.$n && (this.$n = null, this.zn = null) }, t.prototype.Yh = function() { return this.Xn || this.sh(), this.Xn }, t.prototype.ti = function(t, e) { switch (this.xi.mode) {
                            case 2:
                                return this.Yh().format(ut(t, e));
                            case 3:
                                return this.Yh().format(lt(t, e));
                            default:
                                return this.Kh(t) } }, t.prototype.Bn = function(t) { switch (this.xi.mode) {
                            case 2:
                            case 3:
                                return this.Yh().format(t);
                            default:
                                return this.Kh(t) } }, t.prototype.$h = function(t) { return this.Kh(t, v(this.Xh()).Yh()) }, t.prototype.Zh = function(t, e) { return t = ut(t, e), xt.format(t) }, t.prototype.Jh = function() { return this.qn }, t.prototype.Gh = function(t) { this.Pn = { In: t, Fn: !1 } }, t.prototype.Wi = function() { this.qn.forEach((function(t) { return t.Wi() })) }, t.prototype.sh = function() { this.Yn = null; var t = this.Xh(),
                            e = 100;
                        null !== t && (e = Math.round(1 / t.Qh())), this.Xn = wt, this.oh() ? (this.Xn = xt, e = 100) : this.lh() ? (this.Xn = new K(100, 1), e = 100) : null !== t && (this.Xn = t.Yh()), this.Qn = new gt(this, e, this.th.bind(this), this.ih.bind(this)), this.Qn.Sn() }, t.prototype.zh = function() { this.Hn = null }, t.prototype.Xh = function() { return this.qn[0] || null }, t.prototype.gh = function() { return this._h() ? this.xi.scaleMargins.bottom * this.wt() + this.Rn : this.xi.scaleMargins.top * this.wt() + this.Wn }, t.prototype.ph = function() { return this._h() ? this.xi.scaleMargins.top * this.wt() + this.Wn : this.xi.scaleMargins.bottom * this.wt() + this.Rn }, t.prototype.kh = function() { this.Pn.Fn || (this.Pn.Fn = !0, this.ts()) }, t.prototype.uh = function() { this.Vn = null }, t.prototype.ih = function(t, e) { if (this.kh(), this.Qt()) return 0;
                        t = this.En() && t ? ft(t) : t; var n = v(this.yh()),
                            r = this.ph() + (this.mh() - 1) * (t - n.ln()) / n.cn(); return this.xh(r) }, t.prototype.th = function(t, e) { if (this.kh(), this.Qt()) return 0; var n = this.xh(t),
                            r = v(this.yh()),
                            i = r.ln() + r.cn() * ((n - this.ph()) / (this.mh() - 1)); return this.En() ? pt(i) : i }, t.prototype.wh = function() { this.Yn = null, this.Qn.Sn() }, t.prototype.ts = function() { var t = this.Pn.In; if (null !== t) { for (var e = null, n = 0, r = 0, i = 0, o = this.Jh(); i < o.length; i++) { var a = o[i]; if (a.H()) { var s = a.Y(); if (null !== s) { var u = a.ns(t.hs(), t.ss()),
                                            c = u && u.yh(); if (null !== c) { switch (this.xi.mode) {
                                                case 1:
                                                    c = dt(c); break;
                                                case 2:
                                                    c = ct(c, s.J); break;
                                                case 3:
                                                    c = ht(c, s.J) } if (e = null === e ? c : e.vn(v(c)), null !== u) { var l = u.rs();
                                                null !== l && (n = Math.max(n, l.above), r = Math.max(n, l.below)) } } } } } if (n === this.Wn && r === this.Rn || (this.Wn = n, this.Rn = r, this.Yn = null, this.uh()), null !== e) { if (e.ln() === e.fn()) { var h = this.Xh(),
                                        f = 5 * (null === h || this.oh() || this.lh() ? 1 : h.Qh());
                                    e = new nt(e.ln() - f, e.fn() + f) }
                                this.dh(e) } else null === this.On && this.dh(new nt(-.5, .5));
                            this.Pn.Fn = !0 } }, t.prototype.Sh = function() { return this.oh() ? ut : this.lh() ? lt : this.En() ? ft : null }, t.prototype.Kh = function(t, e) { return void 0 === this.Gn.priceFormatter ? (void 0 === e && (e = this.Yh()), e.format(t)) : this.Gn.priceFormatter(t) }, t }();

            function _t(t) { void 0 !== t.borderColor && (t.borderUpColor = t.borderColor, t.borderDownColor = t.borderColor), void 0 !== t.wickColor && (t.wickUpColor = t.wickColor, t.wickDownColor = t.wickColor) }! function(t) { t[t.LastBar = 0] = "LastBar", t[t.LastVisible = 1] = "LastVisible" }(mt || (mt = {})); var Mt = function(t) { return t.getUTCFullYear() }; var jt = function() {
                    function t(t, e) { void 0 === t && (t = "yyyy-MM-dd"), void 0 === e && (e = "default"), this.es = t, this.us = e } return t.prototype.os = function(t) { return function(t, e, n) { return e.replace(/yyyy/g, function(t) { return Z(Mt(t), 4) }(t)).replace(/yy/g, function(t) { return Z(Mt(t) % 100, 2) }(t)).replace(/MMMM/g, function(t, e) { return new Date(t.getUTCFullYear(), t.getUTCMonth(), 1).toLocaleString(e, { month: "long" }) }(t, n)).replace(/MMM/g, function(t, e) { return new Date(t.getUTCFullYear(), t.getUTCMonth(), 1).toLocaleString(e, { month: "short" }) }(t, n)).replace(/MM/g, function(t) { return Z(function(t) { return t.getUTCMonth() + 1 }(t), 2) }(t)).replace(/dd/g, function(t) { return Z(function(t) { return t.getUTCDate() }(t), 2) }(t)) }(t, this.es, this.us) }, t }(),
                St = function() {
                    function t(t) { this.ls = t || "%h:%m:%s" } return t.prototype.os = function(t) { return this.ls.replace("%h", Z(t.getUTCHours(), 2)).replace("%m", Z(t.getUTCMinutes(), 2)).replace("%s", Z(t.getUTCSeconds(), 2)) }, t }(),
                Et = { fs: "yyyy-MM-dd", cs: "%h:%m:%s", vs: " ", _s: "default" },
                kt = function() {
                    function t(t) { void 0 === t && (t = {}); var e = f(f({}, Et), t);
                        this.ds = new jt(e.fs, e._s), this.ws = new St(e.cs), this.Ms = e.vs } return t.prototype.os = function(t) { return "" + this.ds.os(t) + this.Ms + this.ws.os(t) }, t }(),
                At = function() {
                    function t(t, e) { void 0 === e && (e = 50), this.bs = 0, this.gs = 1, this.ps = 1, this.ys = new Map, this.ks = new Map, this.xs = t, this.Ns = e } return t.prototype.os = function(t) { var e = void 0 === t.Ss ? new Date(1e3 * t.Cs).getTime() : new Date(Date.UTC(t.Ss.year, t.Ss.month - 1, t.Ss.day)).getTime(),
                            n = this.ys.get(e); if (void 0 !== n) return n.Ds; if (this.bs === this.Ns) { var r = this.ks.get(this.ps);
                            this.ks.delete(this.ps), this.ys.delete(y(r)), this.ps++, this.bs-- } var i = this.xs(t); return this.ys.set(e, { Ds: i, Ts: this.gs }), this.ks.set(this.gs, e), this.bs++, this.gs++, i }, t }(),
                Pt = function() {
                    function t(t, e) { d(t <= e, "right should be >= left"), this.Bs = t, this.Es = e } return t.prototype.hs = function() { return this.Bs }, t.prototype.ss = function() { return this.Es }, t.prototype.Ls = function() { return this.Es - this.Bs + 1 }, t.prototype.As = function(t) { return this.Bs <= t && t <= this.Es }, t.prototype.an = function(t) { return this.Bs === t.hs() && this.Es === t.ss() }, t }();

            function Ct(t, e) { return null === t || null === e ? t === e : t.an(e) } var Tt, It = function() {
                    function t() { this.Vs = new Map, this.ys = null } return t.prototype.Os = function(t) { var e = this;
                        this.ys = null, this.Vs.clear(), t.forEach((function(t, n) { var r = e.Vs.get(t.zs);
                            void 0 === r && (r = [], e.Vs.set(t.zs, r)), r.push({ Ps: n, P: t.P, Fs: t.zs }) })) }, t.prototype.Is = function(t, e) { var n = Math.ceil(e / t); return null !== this.ys && this.ys.Ws === n || (this.ys = { Ln: this.Rs(n), Ws: n }), this.ys.Ln }, t.prototype.Rs = function(t) { for (var e = [], n = 0, r = Array.from(this.Vs.keys()).sort((function(t, e) { return e - t })); n < r.length; n++) { var i = r[n]; if (this.Vs.get(i)) { var o = e;
                                e = []; for (var a = o.length, s = 0, u = y(this.Vs.get(i)), c = u.length, l = 1 / 0, h = -1 / 0, f = 0; f < c; f++) { for (var p = u[f], d = p.Ps; s < a;) { var v = o[s],
                                            g = v.Ps; if (!(g < d)) { l = g; break }
                                        s++, e.push(v), h = g, l = 1 / 0 }
                                    l - d >= t && d - h >= t && (e.push(p), h = d) } for (; s < a; s++) e.push(o[s]) } } return e }, t }(),
                Nt = function() {
                    function t(t) { this.js = t } return t.prototype.Us = function() { return null === this.js ? null : new Pt(Math.floor(this.js.hs()), Math.ceil(this.js.ss())) }, t.prototype.qs = function() { return this.js }, t.Hs = function() { return new t(null) }, t }();! function(t) { t[t.Year = 0] = "Year", t[t.Month = 1] = "Month", t[t.DayOfMonth = 2] = "DayOfMonth", t[t.Time = 3] = "Time", t[t.TimeWithSeconds = 4] = "TimeWithSeconds" }(Tt || (Tt = {})); var Dt = function() {
                function t(t, e, n) { this.Ys = 0, this.Ks = null, this.$s = [], this.$n = null, this.Kn = null, this.Xs = new It, this.Zs = new Map, this.Js = Nt.Hs(), this.Gs = !0, this.Qs = new et, this.tr = new et, this.ir = new et, this.nr = null, this.hr = null, this.sr = [], this.xi = e, this.Gn = n, this.rr = e.rightOffset, this.er = e.barSpacing, this.hi = t, this.ur() } return t.prototype.I = function() { return this.xi }, t.prototype.ar = function(t) { b(this.Gn, t), this.lr(), this.ur() }, t.prototype.hh = function(t, e) { var n;
                    b(this.xi, t), this.xi.fixLeftEdge && this.cr(), this.xi.fixRightEdge && this.vr(), void 0 !== t.barSpacing && this.hi._r(t.barSpacing), void 0 !== t.rightOffset && this.hi.dr(t.rightOffset), void 0 !== t.minBarSpacing && this.hi._r(null !== (n = t.barSpacing) && void 0 !== n ? n : this.er), this.lr(), this.ur(), this.ir.hn() }, t.prototype.si = function(t) { var e; return (null === (e = this.$s[t]) || void 0 === e ? void 0 : e.P) || null }, t.prototype.wr = function(t, e) { if (this.$s.length < 1) return null; if (t.Cs > this.$s[this.$s.length - 1].P.Cs) return e ? this.$s.length - 1 : null; for (var n = 0; n < this.$s.length; ++n) { if (t.Cs === this.$s[n].P.Cs) return n; if (t.Cs < this.$s[n].P.Cs) return e ? n : null } return null }, t.prototype.Qt = function() { return 0 === this.Ys || 0 === this.$s.length }, t.prototype.Mr = function() { return this.br(), this.Js.Us() }, t.prototype.mr = function() { return this.br(), this.Js.qs() }, t.prototype.gr = function() { var t = this.Mr(); if (null === t) return null; var e = { from: t.hs(), to: t.ss() }; return this.pr(e) }, t.prototype.pr = function(t) { var e = Math.round(t.from),
                        n = Math.round(t.to),
                        r = v(this.yr()),
                        i = v(this.kr()); return { from: v(this.si(Math.max(r, e))), to: v(this.si(Math.min(i, n))) } }, t.prototype.Nr = function(t) { return { from: v(this.wr(t.from, !0)), to: v(this.wr(t.to, !0)) } }, t.prototype.Sr = function() { return this.Xs }, t.prototype.dt = function() { return this.Ys }, t.prototype.Cr = function(t) { if (isFinite(t) && !(t <= 0) && this.Ys !== t) { if (this.xi.lockVisibleTimeRangeOnResize && this.Ys) { var e = this.er * t / this.Ys;
                            this.Dr(e) } if (this.xi.fixLeftEdge) { var n = this.Mr(); if (null !== n && n.hs() <= 0) { var r = this.Ys - t;
                                this.rr -= Math.round(r / this.er) + 1 } }
                        this.Ys = t, this.Gs = !0, this.Tr(), this.Br() } }, t.prototype.G = function(t) { if (this.Qt() || !x(t)) return 0; var e = this.Er() + this.rr - t; return this.Ys - (e + .5) * this.er - 1 }, t.prototype.Lr = function(t, e) { for (var n = this.Er(), r = void 0 === e ? 0 : e.from, i = void 0 === e ? t.length : e.to, o = r; o < i; o++) { var a = t[o].P,
                            s = n + this.rr - a,
                            u = this.Ys - (s + .5) * this.er - 1;
                        t[o].g = u } }, t.prototype.Ar = function(t) { return Math.ceil(this.Vr(t)) }, t.prototype.dr = function(t) { this.Gs = !0, this.rr = t, this.Br(), this.hi.Or(), this.hi.zr() }, t.prototype.Pr = function() { return this.er }, t.prototype._r = function(t) { this.Dr(t), this.Br(), this.hi.Or(), this.hi.zr() }, t.prototype.Fr = function() { return this.rr }, t.prototype.Ln = function() { if (this.Qt()) return null; if (null !== this.hr) return this.hr; for (var t = this.er, e = 5 * (this.hi.I().layout.fontSize + 4), n = Math.round(e / t), r = v(this.Mr()), i = Math.max(r.hs(), r.hs() - n), o = Math.max(r.ss(), r.ss() - n), a = 0, s = 0, u = this.Xs.Is(t, e); s < u.length; s++) { var c = u[s]; if (i <= c.Ps && c.Ps <= o) { var l = this.si(c.Ps); if (null !== l) { if (a < this.sr.length) { var h = this.sr[a];
                                    h.Dn = this.G(c.Ps), h.Tn = this.Ir(l, c.Fs), h.Fs = c.Fs } else this.sr.push({ Dn: this.G(c.Ps), Tn: this.Ir(l, c.Fs), Fs: c.Fs });
                                a++ } } } return this.sr.length = a, this.hr = this.sr, this.sr }, t.prototype.Wr = function() { this.Gs = !0, this._r(this.xi.barSpacing), this.dr(this.xi.rightOffset) }, t.prototype.Rr = function(t) { this.Gs = !0, this.Ks = t, this.Br(), this.cr() }, t.prototype.jr = function(t, e) { var n = this.Vr(t),
                        r = this.Pr(),
                        i = r + e * (r / 10);
                    this._r(i), this.xi.rightBarStaysOnScroll || this.dr(this.Fr() + (n - this.Vr(t))) }, t.prototype.Wh = function(t) { this.$n && this.Hh(), null === this.Kn && null === this.nr && (this.Qt() || (this.Kn = t, this.Ur())) }, t.prototype.Rh = function(t) { if (null !== this.nr) { var e = rt(this.Ys - t, 0, this.Ys),
                            n = rt(this.Ys - v(this.Kn), 0, this.Ys);
                        0 !== e && 0 !== n && this._r(this.nr.Pr * e / n) } }, t.prototype.jh = function() { null !== this.Kn && (this.Kn = null, this.qr()) }, t.prototype.Uh = function(t) { null === this.$n && null === this.nr && (this.Qt() || (this.$n = t, this.Ur())) }, t.prototype.qh = function(t) { if (null !== this.$n) { var e = (this.$n - t) / this.Pr();
                        this.rr = v(this.nr).Fr + e, this.Gs = !0, this.Br() } }, t.prototype.Hh = function() { null !== this.$n && (this.$n = null, this.qr()) }, t.prototype.Hr = function() { this.Yr(this.xi.rightOffset) }, t.prototype.Yr = function(t, e) { var n = this; if (void 0 === e && (e = 400), !isFinite(t)) throw new RangeError("offset is required and must be finite number"); if (!isFinite(e) || e <= 0) throw new RangeError("animationDuration (optional) must be finite positive number"); var r = this.rr,
                        i = Date.now();! function o() { var a = (Date.now() - i) / e,
                            s = a >= 1,
                            u = s ? t : r + (t - r) * a;
                        n.dr(u), s || setTimeout(o, 20) }() }, t.prototype.V = function(t) { this.Gs = !0, this.$s = t, this.Xs.Os(t), this.Br() }, t.prototype.Kr = function() { return this.Qs }, t.prototype.$r = function() { return this.tr }, t.prototype.Xr = function() { return this.ir }, t.prototype.Er = function() { return this.Ks || 0 }, t.prototype.Zr = function(t) { var e = t.Ls();
                    this.Dr(this.Ys / e), this.rr = t.ss() - this.Er(), this.Br(), this.Gs = !0, this.hi.Or(), this.hi.zr() }, t.prototype.Jr = function() { var t = this.yr(),
                        e = this.kr();
                    null !== t && null !== e && this.Zr(new Pt(t, e + this.xi.rightOffset)) }, t.prototype.Gr = function(t) { var e = new Pt(t.from, t.to);
                    this.Zr(e) }, t.prototype.ri = function(t) { return void 0 !== this.Gn.timeFormatter ? this.Gn.timeFormatter(t.Ss || t.Cs) : this.Qr.os(new Date(1e3 * t.Cs)) }, t.prototype.yr = function() { return 0 === this.$s.length ? null : 0 }, t.prototype.kr = function() { return 0 === this.$s.length ? null : this.$s.length - 1 }, t.prototype.te = function(t) { return (this.Ys - 1 - t) / this.er }, t.prototype.Vr = function(t) { var e = this.te(t),
                        n = this.Er() + this.rr - e; return Math.round(1e6 * n) / 1e6 }, t.prototype.Dr = function(t) { var e = this.er;
                    this.er = t, this.Tr(), e !== this.er && (this.Gs = !0, this.ie()) }, t.prototype.br = function() { if (this.Gs)
                        if (this.Gs = !1, this.Qt()) this.ne(Nt.Hs());
                        else { var t = this.Er(),
                                e = this.Ys / this.er,
                                n = this.rr + t,
                                r = new Pt(n - e + 1, n);
                            this.ne(new Nt(r)) } }, t.prototype.Tr = function() { var t = this.he(); if (this.er < t && (this.er = t, this.Gs = !0), 0 !== this.Ys) { var e = .5 * this.Ys;
                        this.er > e && (this.er = e, this.Gs = !0) } }, t.prototype.he = function() { return this.xi.fixLeftEdge && this.xi.fixRightEdge ? this.Ys / this.$s.length : this.xi.minBarSpacing }, t.prototype.Br = function() { var t = this.se();
                    this.rr > t && (this.rr = t, this.Gs = !0); var e = this.re();
                    null !== e && this.rr < e && (this.rr = e, this.Gs = !0) }, t.prototype.re = function() { var t = this.yr(),
                        e = this.Ks; return null === t || null === e ? null : t - e - 1 + (this.xi.fixLeftEdge ? this.Ys / this.er : Math.min(2, this.$s.length)) }, t.prototype.se = function() { return this.xi.fixRightEdge ? 0 : this.Ys / this.er - Math.min(2, this.$s.length) }, t.prototype.Ur = function() { this.nr = { Pr: this.Pr(), Fr: this.Fr() } }, t.prototype.qr = function() { this.nr = null }, t.prototype.Ir = function(t, e) { var n = this,
                        r = this.Zs.get(e); return void 0 === r && (r = new At((function(t) { return n.ee(t, e) })), this.Zs.set(e, r)), r.os(t) }, t.prototype.ee = function(t, e) { var n, r, i = this.xi.timeVisible; return r = e < 20 && i ? this.xi.secondsVisible ? 4 : 3 : e < 40 && i ? 3 : e < 50 || e < 60 ? 2 : e < 70 ? 1 : 0, void 0 !== this.xi.tickMarkFormatter ? this.xi.tickMarkFormatter(null !== (n = t.Ss) && void 0 !== n ? n : t.Cs, r, this.Gn.locale) : function(t, e, n) { var r = {}; switch (e) {
                            case 0:
                                r.year = "numeric"; break;
                            case 1:
                                r.month = "short"; break;
                            case 2:
                                r.day = "numeric"; break;
                            case 3:
                                r.hour12 = !1, r.hour = "2-digit", r.minute = "2-digit"; break;
                            case 4:
                                r.hour12 = !1, r.hour = "2-digit", r.minute = "2-digit", r.second = "2-digit" } var i = void 0 === t.Ss ? new Date(1e3 * t.Cs) : new Date(Date.UTC(t.Ss.year, t.Ss.month - 1, t.Ss.day)); return new Date(i.getUTCFullYear(), i.getUTCMonth(), i.getUTCDate(), i.getUTCHours(), i.getUTCMinutes(), i.getUTCSeconds(), i.getUTCMilliseconds()).toLocaleString(n, r) }(t, r, this.Gn.locale) }, t.prototype.ne = function(t) { var e = this.Js;
                    this.Js = t, Ct(e.Us(), this.Js.Us()) || this.Qs.hn(), Ct(e.qs(), this.Js.qs()) || this.tr.hn(), this.ie() }, t.prototype.ie = function() { this.hr = null }, t.prototype.lr = function() { this.ie(), this.Zs.clear() }, t.prototype.ur = function() { var t = this.Gn.dateFormat;
                    this.xi.timeVisible ? this.Qr = new kt({ fs: t, cs: this.xi.secondsVisible ? "%h:%m:%s" : "%h:%m", vs: "   ", _s: this.Gn.locale }) : this.Qr = new jt(t, this.Gn.locale) }, t.prototype.cr = function() { if (this.xi.fixLeftEdge) { var t = this.yr(); if (null !== t) { var e = v(this.Mr()).hs() - t; if (e < 0) { var n = this.rr - e - 1;
                                this.dr(n) }
                            this.Tr() } } }, t.prototype.vr = function() { this.Br(), this.Tr() }, t }();

            function Rt(t) { return !m(t) && !w(t) }

            function Lt(t) { return m(t) } var Bt = "'Trebuchet MS', Roboto, Ubuntu, sans-serif";

            function Ft(t, e, n) { return void 0 !== n ? n += " " : n = "", void 0 === e && (e = Bt), "" + n + t + "px " + e } var zt = function() {
                function t(t) { this.ue = { Dt: 1, Ct: 4, zt: NaN, xt: "", ae: "", et: "", Bt: 0, Et: 0, Lt: 0, Tt: 0, Ot: 0 }, this.L = t } return t.prototype.I = function() { var t = this.ue,
                        e = this.oe(),
                        n = this.le(); return t.zt === e && t.ae === n || (t.zt = e, t.ae = n, t.xt = Ft(e, n), t.Tt = Math.floor(e / 3.5), t.Bt = t.Tt, t.Et = Math.max(Math.ceil(e / 2 - t.Ct / 2), 0), t.Lt = Math.ceil(e / 2 + t.Ct / 2), t.Ot = Math.round(e / 10)), t.et = this.fe(), this.ue }, t.prototype.fe = function() { return this.L.I().layout.textColor }, t.prototype.oe = function() { return this.L.I().layout.fontSize }, t.prototype.le = function() { return this.L.I().layout.fontFamily }, t }();

            function Vt(t) { return "left" === t || "right" === t } var Ut = function() {
                    function t(t) { this.ce = new Map, this.ve = !1, this._e = [], this.de = t } return t.prototype.we = function(t, e) { var n = function(t, e) { return void 0 === t ? e : { Me: Math.max(t.Me, e.Me), fh: t.fh || e.fh } }(this.ce.get(t), e);
                        this.ce.set(t, n) }, t.prototype.be = function() { return this.de }, t.prototype.me = function(t) { var e = this.ce.get(t); return void 0 === e ? { Me: this.de } : { Me: Math.max(this.de, e.Me), fh: e.fh } }, t.prototype.ge = function() { this._e = [{ pe: 0 }] }, t.prototype.ye = function(t) { this._e = [{ pe: 1, J: t }] }, t.prototype.ke = function() { this._e = [{ pe: 4 }] }, t.prototype._r = function(t) { this._e.push({ pe: 2, J: t }) }, t.prototype.dr = function(t) { this._e.push({ pe: 3, J: t }) }, t.prototype.xe = function() { return this._e }, t.prototype.vn = function(t) { var e = this;
                        this.ve = this.ve || t.ve, this._e = this._e.concat(t._e); for (var n = 0, r = t._e; n < r.length; n++) { var i = r[n];
                            this.Ne(i) }
                        this.de = Math.max(this.de, t.de), t.ce.forEach((function(t, n) { e.we(n, t) })) }, t.prototype.Ne = function(t) { switch (t.pe) {
                            case 0:
                                this.ge(); break;
                            case 1:
                                this.ye(t.J); break;
                            case 2:
                                this._r(t.J); break;
                            case 3:
                                this.dr(t.J); break;
                            case 4:
                                this.ke() } }, t }(),
                Wt = function() {
                    function t(t) { this.Se = t } return t.prototype.format = function(t) { var e = ""; return t < 0 && (e = "-", t = -t), t < 995 ? e + this.Ce(t) : t < 999995 ? e + this.Ce(t / 1e3) + "K" : t < 999999995 ? (t = 1e3 * Math.round(t / 1e3), e + this.Ce(t / 1e6) + "M") : (t = 1e6 * Math.round(t / 1e6), e + this.Ce(t / 1e9) + "B") }, t.prototype.Ce = function(t) { var e = Math.pow(10, this.Se); return ((t = Math.round(t * e) / e) >= 1e-15 && t < 1 ? t.toFixed(this.Se).replace(/\.?0+$/, "") : String(t)).replace(/(\.[1-9]*)0+$/, (function(t, e) { return e })) }, t }();

            function Ht(t, e, n, r) { if (0 !== e.length) { var i = e[r.from].g,
                        o = e[r.from].p;
                    t.moveTo(i, o); for (var a = r.from + 1; a < r.to; ++a) { var s = e[a]; if (1 === n) { var u = e[a - 1].p,
                                c = s.g;
                            t.lineTo(c, u) }
                        t.lineTo(s.g, s.p) } } } var qt = function(t) {
                    function e() { var e = null !== t && t.apply(this, arguments) || this; return e.v = null, e } return h(e, t), e.prototype._ = function(t) { this.v = t }, e.prototype.u = function(t) { if (null !== this.v && 0 !== this.v.m.length && null !== this.v.M) { if (t.lineCap = "butt", t.lineJoin = "round", t.strokeStyle = this.v.S, t.lineWidth = this.v.rt, u(t, this.v.ut), t.lineWidth = 1, t.beginPath(), 1 === this.v.m.length) { var e = this.v.m[0],
                                    n = this.v.De / 2;
                                t.moveTo(e.g - n, this.v.Te), t.lineTo(e.g - n, e.p), t.lineTo(e.g + n, e.p), t.lineTo(e.g + n, this.v.Te) } else t.moveTo(this.v.m[this.v.M.from].g, this.v.Te), t.lineTo(this.v.m[this.v.M.from].g, this.v.m[this.v.M.from].p), Ht(t, this.v.m, this.v.Be, this.v.M), this.v.M.to > this.v.M.from && (t.lineTo(this.v.m[this.v.M.to - 1].g, this.v.Te), t.lineTo(this.v.m[this.v.M.from].g, this.v.Te));
                            t.closePath(); var r = t.createLinearGradient(0, 0, 0, this.v.Te);
                            r.addColorStop(0, this.v.Ee), r.addColorStop(1, this.v.Le), t.fillStyle = r, t.fill() } }, e }(E),
                Yt = function(t) {
                    function e() { var e = null !== t && t.apply(this, arguments) || this; return e.v = null, e } return h(e, t), e.prototype._ = function(t) { this.v = t }, e.prototype.u = function(t) { if (null !== this.v && 0 !== this.v.m.length && null !== this.v.M) { if (t.lineCap = "butt", t.lineWidth = this.v.rt, u(t, this.v.ut), t.strokeStyle = this.v.S, t.lineJoin = "round", t.beginPath(), 1 === this.v.m.length) { var e = this.v.m[0];
                                t.moveTo(e.g - this.v.De / 2, e.p), t.lineTo(e.g + this.v.De / 2, e.p) } else Ht(t, this.v.m, this.v.Be, this.v.M);
                            t.stroke() } }, e }(E);

            function $t(t, e, n, r, i) { void 0 === r && (r = 0), void 0 === i && (i = t.length); for (var o = i - r; 0 < o;) { var a = o >> 1,
                        s = r + a;
                    n(t[s], e) ? (r = s + 1, o -= a + 1) : o = a } return r }

            function Jt(t, e, n, r, i) { void 0 === r && (r = 0), void 0 === i && (i = t.length); for (var o = i - r; 0 < o;) { var a = o >> 1,
                        s = r + a;
                    n(e, t[s]) ? o = a : (r = s + 1, o -= a + 1) } return r }

            function Gt(t, e) { return t.P < e }

            function Xt(t, e) { return t < e.P }

            function Qt(t, e, n) { var r = e.hs(),
                    i = e.ss(),
                    o = $t(t, r, Gt),
                    a = Jt(t, i, Xt); if (!n) return { from: o, to: a }; var s = o,
                    u = a; return o > 0 && o < t.length && t[o].P >= r && (s = o - 1), a > 0 && a < t.length && t[a - 1].P <= i && (u = a + 1), { from: s, to: u } } var Zt = function() {
                    function t(t, e, n) { this.Ae = !0, this.Ve = !0, this.Oe = !0, this.ze = [], this.Pe = null, this.Fe = t, this.Ie = e, this.We = n } return t.prototype.V = function(t) { this.Ae = !0, "data" === t && (this.Ve = !0), "options" === t && (this.Oe = !0) }, t.prototype.Re = function() { this.Ve && (this.je(), this.Ve = !1), this.Ae && (this.Ue(), this.Ae = !1), this.Oe && (this.qe(), this.Oe = !1) }, t.prototype.He = function() { this.Pe = null }, t.prototype.Ue = function() { var t = this.Fe.Z(),
                            e = this.Ie.U(); if (this.He(), !e.Qt() && !t.Qt()) { var n = e.Mr(); if (null !== n && 0 !== this.Fe.qi().Ye()) { var r = this.Fe.Y();
                                null !== r && (this.Pe = Qt(this.ze, n, this.We), this.Ke(t, e, r.J)) } } }, t }(),
                Kt = function(t) {
                    function e(e, n) { return t.call(this, e, n, !0) || this } return h(e, t), e.prototype.Ke = function(t, e, n) { e.Lr(this.ze, j(this.Pe)), t.Nh(this.ze, n, j(this.Pe)) }, e.prototype.$e = function(t, e) { return { P: t, F: e, g: NaN, p: NaN } }, e.prototype.qe = function() {}, e.prototype.je = function() { var t = this,
                            e = this.Fe.Xe();
                        this.ze = this.Fe.qi().Ze().map((function(n) { var r = n.J[3]; return t.Je(n.Ps, r, e) })) }, e }(Zt),
                te = function(t) {
                    function e(e, n) { var r = t.call(this, e, n) || this; return r.ot = new S, r.Ge = new qt, r.Qe = new Yt, r.ot.i([r.Ge, r.Qe]), r } return h(e, t), e.prototype.W = function(t, e) { if (!this.Fe.H()) return null; var n = this.Fe.I();
                        this.Re(); var r = { Be: n.lineType, m: this.ze, S: n.lineColor, ut: n.lineStyle, rt: n.lineWidth, Ee: n.topColor, Le: n.bottomColor, Te: t, M: this.Pe, De: this.Ie.U().Pr() }; return this.Ge._(r), this.Qe._(r), this.ot }, e.prototype.Je = function(t, e) { return this.$e(t, e) }, e }(Kt),
                ee = function() {
                    function t() { this.tt = null, this.tu = 0, this.iu = 0 } return t.prototype._ = function(t) { this.tt = t }, t.prototype.h = function(t, e, n, r) { if (null !== this.tt && 0 !== this.tt.qi.length && null !== this.tt.M) { this.tu = this.nu(e), this.tu >= 2 && Math.max(1, Math.floor(e)) % 2 != this.tu % 2 && this.tu--, this.iu = this.tt.hu ? Math.min(this.tu, Math.floor(e)) : this.tu; for (var i = null, o = this.iu <= this.tu && this.tt.Pr >= Math.floor(1.5 * e), a = this.tt.M.from; a < this.tt.M.to; ++a) { var s = this.tt.qi[a];
                                i !== s.et && (t.fillStyle = s.et, i = s.et); var u = Math.floor(.5 * this.iu),
                                    c = Math.round(s.g * e),
                                    l = c - u,
                                    h = this.iu,
                                    f = l + h - 1,
                                    p = Math.min(s.Th, s.Bh),
                                    d = Math.max(s.Th, s.Bh),
                                    y = Math.round(p * e) - u,
                                    v = Math.round(d * e) + u,
                                    g = Math.max(v - y, this.iu);
                                t.fillRect(l, y, h, g); var b = Math.ceil(1.5 * this.tu); if (o) { if (this.tt.su) { var m = c - b,
                                            x = Math.max(y, Math.round(s.Dh * e) - u),
                                            w = x + h - 1;
                                        w > y + g - 1 && (x = (w = y + g - 1) - h + 1), t.fillRect(m, x, l - m, w - x + 1) } var O = c + b,
                                        _ = Math.max(y, Math.round(s.Eh * e) - u),
                                        M = _ + h - 1;
                                    M > y + g - 1 && (_ = (M = y + g - 1) - h + 1), t.fillRect(f + 1, _, O - f, M - _ + 1) } } } }, t.prototype.nu = function(t) { var e = Math.floor(t); return Math.max(e, Math.floor(function(t, e) { return Math.floor(.3 * t * e) }(v(this.tt).Pr, t))) }, t }(),
                ne = function(t) {
                    function e(e, n) { return t.call(this, e, n, !1) || this } return h(e, t), e.prototype.Ke = function(t, e, n) { e.Lr(this.ze, j(this.Pe)), t.Ch(this.ze, n, j(this.Pe)) }, e.prototype.ru = function(t, e, n) { return { P: t, open: e.J[0], high: e.J[1], low: e.J[2], close: e.J[3], g: NaN, Dh: NaN, Th: NaN, Bh: NaN, Eh: NaN } }, e.prototype.je = function() { var t = this,
                            e = this.Fe.Xe();
                        this.ze = this.Fe.qi().Ze().map((function(n) { return t.Je(n.Ps, n, e) })) }, e }(Zt),
                re = function(t) {
                    function e() { var e = null !== t && t.apply(this, arguments) || this; return e.ot = new ee, e } return h(e, t), e.prototype.W = function(t, e) { if (!this.Fe.H()) return null; var n = this.Fe.I();
                        this.Re(); var r = { qi: this.ze, Pr: this.Ie.U().Pr(), su: n.openVisible, hu: n.thinBars, M: this.Pe }; return this.ot._(r), this.ot }, e.prototype.qe = function() { var t = this;
                        this.ze.forEach((function(e) { e.et = t.Fe.Xe().uu(e.P).eu })) }, e.prototype.Je = function(t, e, n) { return f(f({}, this.ru(t, e, n)), { et: n.uu(t).eu }) }, e }(ne),
                ie = function() {
                    function t() { this.tt = null, this.tu = 0 } return t.prototype._ = function(t) { this.tt = t }, t.prototype.h = function(t, e, n, r) { if (null !== this.tt && 0 !== this.tt.qi.length && null !== this.tt.M) { this.tu = function(t, e) { if (t >= 2.5 && t <= 4) return Math.floor(3 * e); var n = 1 - .2 * Math.atan(Math.max(4, t) - 4) / (.5 * Math.PI),
                                    r = Math.floor(t * n * e),
                                    i = Math.floor(t * e),
                                    o = Math.min(r, i); return Math.max(Math.floor(e), o) }(this.tt.Pr, e), this.tu >= 2 && Math.floor(e) % 2 != this.tu % 2 && this.tu--; var i = this.tt.qi;
                            this.tt.au && this.ou(t, i, this.tt.M, e), this.tt.lu && this.fu(t, i, this.tt.M, this.tt.Pr, e); var o = this.cu(e);
                            (!this.tt.lu || this.tu > 2 * o) && this.vu(t, i, this.tt.M, e) } }, t.prototype.ou = function(t, e, n, r) { if (null !== this.tt) { var i = "",
                                o = Math.min(Math.floor(r), Math.floor(this.tt.Pr * r));
                            o = Math.max(Math.floor(r), Math.min(o, this.tu)); for (var a = Math.floor(.5 * o), s = null, u = n.from; u < n.to; u++) { var c = e[u];
                                c._u !== i && (t.fillStyle = c._u, i = c._u); var l = Math.round(Math.min(c.Dh, c.Eh) * r),
                                    h = Math.round(Math.max(c.Dh, c.Eh) * r),
                                    f = Math.round(c.Th * r),
                                    p = Math.round(c.Bh * r),
                                    d = Math.round(r * c.g) - a,
                                    y = d + o - 1;
                                null !== s && (d = Math.max(s + 1, d), d = Math.min(d, y)); var v = y - d + 1;
                                t.fillRect(d, f, v, l - f), t.fillRect(d, h + 1, v, p - h), s = y } } }, t.prototype.cu = function(t) { var e = Math.floor(1 * t);
                        this.tu <= 2 * e && (e = Math.floor(.5 * (this.tu - 1))); var n = Math.max(Math.floor(t), e); return this.tu <= 2 * n ? Math.max(Math.floor(t), Math.floor(1 * t)) : n }, t.prototype.fu = function(t, e, n, r, i) { if (null !== this.tt)
                            for (var o = "", a = this.cu(i), s = null, u = n.from; u < n.to; u++) { var c = e[u];
                                c.$ !== o && (t.fillStyle = c.$, o = c.$); var l = Math.round(c.g * i) - Math.floor(.5 * this.tu),
                                    h = l + this.tu - 1,
                                    f = Math.round(Math.min(c.Dh, c.Eh) * i),
                                    p = Math.round(Math.max(c.Dh, c.Eh) * i); if (null !== s && (l = Math.max(s + 1, l), l = Math.min(l, h)), this.tt.Pr * i > 2 * a) z(t, l, f, h - l + 1, p - f + 1, a);
                                else { var d = h - l + 1;
                                    t.fillRect(l, f, d, p - f + 1) }
                                s = h } }, t.prototype.vu = function(t, e, n, r) { if (null !== this.tt)
                            for (var i = "", o = this.cu(r), a = n.from; a < n.to; a++) { var s = e[a],
                                    u = Math.round(Math.min(s.Dh, s.Eh) * r),
                                    c = Math.round(Math.max(s.Dh, s.Eh) * r),
                                    l = Math.round(s.g * r) - Math.floor(.5 * this.tu),
                                    h = l + this.tu - 1; if (s.et !== i) { var f = s.et;
                                    t.fillStyle = f, i = f }
                                this.tt.lu && (l += o, u += o, h -= o, c -= o), u > c || t.fillRect(l, u, h - l + 1, c - u + 1) } }, t }(),
                oe = function(t) {
                    function e() { var e = null !== t && t.apply(this, arguments) || this; return e.ot = new ie, e } return h(e, t), e.prototype.W = function(t, e) { if (!this.Fe.H()) return null; var n = this.Fe.I();
                        this.Re(); var r = { qi: this.ze, Pr: this.Ie.U().Pr(), au: n.wickVisible, lu: n.borderVisible, M: this.Pe }; return this.ot._(r), this.ot }, e.prototype.qe = function() { var t = this;
                        this.ze.forEach((function(e) { var n = t.Fe.Xe().uu(e.P);
                            e.et = n.eu, e._u = n.du, e.$ = n.wu })) }, e.prototype.Je = function(t, e, n) { var r = n.uu(t); return f(f({}, this.ru(t, e, n)), { et: r.eu, _u: r.du, $: r.wu }) }, e }(ne),
                ae = function() {
                    function t() { this.tt = null, this.Mu = [] } return t.prototype._ = function(t) { this.tt = t, this.Mu = [] }, t.prototype.h = function(t, e, n, r) { if (null !== this.tt && 0 !== this.tt.m.length && null !== this.tt.M) { this.Mu.length || this.bu(e); for (var i = Math.max(1, Math.floor(e)), o = Math.round(this.tt.mu * e) - Math.floor(i / 2), a = o + i, s = this.tt.M.from; s < this.tt.M.to; s++) { var u = this.tt.m[s],
                                    c = this.Mu[s - this.tt.M.from],
                                    l = Math.round(u.p * e);
                                t.fillStyle = u.et; var h = void 0,
                                    f = void 0;
                                l <= o ? (h = l, f = a) : (h = o, f = l - Math.floor(i / 2) + i), t.fillRect(c.hs, h, c.ss - c.hs + 1, f - h) } } }, t.prototype.bu = function(t) { if (null !== this.tt && 0 !== this.tt.m.length && null !== this.tt.M) { var e = Math.ceil(this.tt.Pr * t) <= 1 ? 0 : Math.max(1, Math.floor(t)),
                                n = Math.round(this.tt.Pr * t) - e;
                            this.Mu = new Array(this.tt.M.to - this.tt.M.from); for (var r = this.tt.M.from; r < this.tt.M.to; r++) { var i, o = this.tt.m[r],
                                    a = Math.round(o.g * t),
                                    s = void 0,
                                    u = void 0;
                                n % 2 ? (s = a - (i = (n - 1) / 2), u = a + i) : (s = a - (i = n / 2), u = a + i - 1), this.Mu[r - this.tt.M.from] = { hs: s, ss: u, gu: a, pu: o.g * t, P: o.P } } for (r = this.tt.M.from + 1; r < this.tt.M.to; r++) { var c = this.Mu[r - this.tt.M.from],
                                    l = this.Mu[r - this.tt.M.from - 1];
                                c.P === l.P + 1 && c.hs - l.ss !== e + 1 && (l.gu > l.pu ? l.ss = c.hs - e - 1 : c.hs = l.ss + e + 1) } var h = Math.ceil(this.tt.Pr * t); for (r = this.tt.M.from; r < this.tt.M.to; r++) {
                                (c = this.Mu[r - this.tt.M.from]).ss < c.hs && (c.ss = c.hs); var f = c.ss - c.hs + 1;
                                h = Math.min(f, h) } if (e > 0 && h < 4)
                                for (r = this.tt.M.from; r < this.tt.M.to; r++)(f = (c = this.Mu[r - this.tt.M.from]).ss - c.hs + 1) > h && (c.gu > c.pu ? c.ss -= 1 : c.hs += 1) } else this.Mu = [] }, t }();

            function se(t) { return { m: [], Pr: t, mu: NaN, M: null } }

            function ue(t, e, n) { return { P: t, F: e, g: NaN, p: NaN, et: n } } var ce = function(t) {
                    function e(e, n) { var r = t.call(this, e, n, !1) || this; return r.C = new S, r.yu = se(0), r.ot = new ae, r } return h(e, t), e.prototype.W = function(t, e) { return this.Fe.H() ? (this.Re(), this.C) : null }, e.prototype.je = function() { var t = this.Ie.U().Pr();
                        this.yu = se(t); for (var e = 0, n = 0, r = this.Fe.I().color, i = 0, o = this.Fe.qi().Ze(); i < o.length; i++) { var a = o[i],
                                s = a.J[3],
                                u = void 0 !== a.et ? a.et : r,
                                c = ue(a.Ps, s, u);++e < this.yu.m.length ? this.yu.m[e] = c : this.yu.m.push(c), this.ze[n++] = { P: a.Ps, g: 0 } }
                        this.ot._(this.yu), this.C.i([this.ot]) }, e.prototype.qe = function() {}, e.prototype.He = function() { t.prototype.He.call(this), this.yu.M = null }, e.prototype.Ke = function(t, e, n) { if (null !== this.Pe) { var r = e.Pr(),
                                i = v(e.Mr()),
                                o = t.X(this.Fe.I().base, n);
                            e.Lr(this.yu.m), t.Nh(this.yu.m, n), this.yu.mu = o, this.yu.M = Qt(this.yu.m, i, !1), this.yu.Pr = r, this.ot._(this.yu) } }, e }(Zt),
                le = function(t) {
                    function e(e, n) { var r = t.call(this, e, n) || this; return r.Qe = new Yt, r } return h(e, t), e.prototype.W = function(t, e) { if (!this.Fe.H()) return null; var n = this.Fe.I();
                        this.Re(); var r = { m: this.ze, S: n.color, ut: n.lineStyle, Be: n.lineType, rt: n.lineWidth, M: this.Pe, De: this.Ie.U().Pr() }; return this.Qe._(r), this.Qe }, e.prototype.Je = function(t, e) { return this.$e(t, e) }, e }(Kt),
                he = /[2-9]/g,
                fe = function() {
                    function t(t) { void 0 === t && (t = 50), this.ys = new Map, this.ku = 0, this.xu = Array.from(new Array(t)) } return t.prototype.Nu = function() { this.ys.clear(), this.xu.fill(void 0) }, t.prototype.Vt = function(t, e, n) { var r = n || he,
                            i = String(e).replace(r, "0"),
                            o = this.ys.get(i); if (void 0 === o) { if (0 === (o = t.measureText(i).width) && 0 !== e.length) return 0; var a = this.xu[this.ku];
                            void 0 !== a && this.ys.delete(a), this.xu[this.ku] = i, this.ku = (this.ku + 1) % this.xu.length, this.ys.set(i, o) } return o }, t }(),
                pe = function() {
                    function t(t) { this.Su = null, this.ue = null, this.Cu = "right", this.Ys = 0, this.Du = t } return t.prototype.Tu = function(t, e, n, r) { this.Su = t, this.ue = e, this.Ys = n, this.Cu = r }, t.prototype.h = function(t, e) { null !== this.ue && null !== this.Su && this.Su.h(t, this.ue, this.Du, this.Ys, this.Cu, e) }, t }(),
                de = function() {
                    function t(t, e, n) { this.Bu = t, this.Du = new fe(50), this.Eu = e, this.L = n, this.oe = -1, this.ot = new pe(this.Du) } return t.prototype.W = function(t, e) { var n = this.L.Lu(this.Eu); if (null === n) return null; var r = n.Au(this.Eu) ? n.Ci() : this.Eu.Z(); if (null === r) return null; var i = n.Vu(r); if ("overlay" === i) return null; var o = this.L.Ou(); return o.zt !== this.oe && (this.oe = o.zt, this.Du.Nu()), this.ot.Tu(this.Bu.Xt(), o, e, i), this.ot }, t }(),
                ye = function() {
                    function t() { this.tt = null } return t.prototype._ = function(t) { this.tt = t }, t.prototype.h = function(t, e, n, r) { if (null !== this.tt && !1 !== this.tt.H) { var i = Math.round(this.tt.p * e); if (!(i < 0 || i > Math.ceil(this.tt.wt * e))) { var o = Math.ceil(this.tt.dt * e);
                                t.lineCap = "butt", t.strokeStyle = this.tt.et, t.lineWidth = Math.floor(this.tt.rt * e), u(t, this.tt.ut), c(t, i, 0, o) } } }, t }(),
                ve = function() {
                    function t(t) { this.zu = { dt: 0, wt: 0, p: 0, et: "rgba(0, 0, 0, 0)", rt: 1, ut: 0, H: !1 }, this.Pu = new ye, this.B = !0, this.Fe = t, this.Ie = t.ct(), this.Pu._(this.zu) } return t.prototype.V = function() { this.B = !0 }, t.prototype.W = function(t, e) { return this.Fe.H() ? (this.B && (this.Fu(t, e), this.B = !1), this.Pu) : null }, t }(),
                ge = function(t) {
                    function e(e) { return t.call(this, e) || this } return h(e, t), e.prototype.Fu = function(t, e) { this.zu.H = !1; var n = this.Fe.Z(),
                            r = n.eh().eh; if (2 === r || 3 === r) { var i = this.Fe.I(); if (i.baseLineVisible && this.Fe.H()) { var o = this.Fe.Y();
                                null !== o && (this.zu.H = !0, this.zu.p = n.X(o.J, o.J), this.zu.dt = e, this.zu.wt = t, this.zu.et = i.baseLineColor, this.zu.rt = i.baseLineWidth, this.zu.ut = i.baseLineStyle) } } }, e }(ve);

            function be(t, e) { return st(Math.min(Math.max(t, 12), 30) * e) }

            function me(t, e) { switch (t) {
                    case "arrowDown":
                    case "arrowUp":
                        return be(e, 1);
                    case "circle":
                        return be(e, .8);
                    case "square":
                        return be(e, .7) } }

            function xe(t) { return at(be(t, 1)) }

            function we(t) { return Math.max(be(t, .1), 3) }

            function Oe(t, e, n, r, i) { var o = me("square", n),
                    a = (o - 1) / 2,
                    s = t - a,
                    u = e - a; return r >= s && r <= s + o && i >= u && i <= u + o }

            function _e(t, e, n, r, i) { var o = (me("arrowUp", i) - 1) / 2,
                    a = (st(i / 2) - 1) / 2;
                e.beginPath(), t ? (e.moveTo(n - o, r), e.lineTo(n, r - o), e.lineTo(n + o, r), e.lineTo(n + a, r), e.lineTo(n + a, r + o), e.lineTo(n - a, r + o), e.lineTo(n - a, r)) : (e.moveTo(n - o, r), e.lineTo(n, r + o), e.lineTo(n + o, r), e.lineTo(n + a, r), e.lineTo(n + a, r - o), e.lineTo(n - a, r - o), e.lineTo(n - a, r)), e.fill() } var Me = function(t) {
                function e() { var e = null !== t && t.apply(this, arguments) || this; return e.tt = null, e.Du = new fe, e.oe = -1, e.le = "", e.Iu = "", e } return h(e, t), e.prototype._ = function(t) { this.tt = t }, e.prototype.Tu = function(t, e) { this.oe === t && this.le === e || (this.oe = t, this.le = e, this.Iu = Ft(t, e), this.Du.Nu()) }, e.prototype.Wu = function(t, e) { if (null === this.tt || null === this.tt.M) return null; for (var n = this.tt.M.from; n < this.tt.M.to; n++) { var r = this.tt.m[n]; if (Se(r, t, e)) return { Ru: r.ju, Uu: r.Uu } } return null }, e.prototype.u = function(t, e, n) { if (null !== this.tt && null !== this.tt.M) { t.textBaseline = "middle", t.font = this.Iu; for (var r = this.tt.M.from; r < this.tt.M.to; r++) { var i = this.tt.m[r];
                            void 0 !== i.At && (i.At.dt = this.Du.Vt(t, i.At.qu), i.At.wt = this.oe), je(i, t) } } }, e }(E);

            function je(t, e) { e.fillStyle = t.et, void 0 !== t.At && function(t, e, n, r) { t.fillText(e, n, r) }(e, t.At.qu, t.g - t.At.dt / 2, t.At.p),
                    function(t, e) { if (0 !== t.Ye) { switch (t.Hu) {
                                case "arrowDown":
                                    return void _e(!1, e, t.g, t.p, t.Ye);
                                case "arrowUp":
                                    return void _e(!0, e, t.g, t.p, t.Ye);
                                case "circle":
                                    return void
                                    function(t, e, n, r) { var i = (me("circle", r) - 1) / 2;
                                        t.beginPath(), t.arc(e, n, i, 0, 2 * Math.PI, !1), t.fill() }(e, t.g, t.p, t.Ye);
                                case "square":
                                    return void
                                    function(t, e, n, r) { var i = me("square", r),
                                            o = (i - 1) / 2,
                                            a = e - o,
                                            s = n - o;
                                        t.fillRect(a, s, i, i) }(e, t.g, t.p, t.Ye) }
                            t.Hu } }(t, e) }

            function Se(t, e, n) { return !(void 0 === t.At || ! function(t, e, n, r, i, o) { var a = r / 2; return i >= t && i <= t + n && o >= e - a && o <= e + a }(t.g, t.At.p, t.At.dt, t.At.wt, e, n)) || function(t, e, n) { if (0 === t.Ye) return !1; switch (t.Hu) {
                        case "arrowDown":
                        case "arrowUp":
                            return function(t, e, n, r, i, o) { return Oe(e, n, r, i, o) }(0, t.g, t.p, t.Ye, e, n);
                        case "circle":
                            return function(t, e, n, r, i) { var o = 2 + me("circle", n) / 2,
                                    a = t - r,
                                    s = e - i; return Math.sqrt(a * a + s * s) <= o }(t.g, t.p, t.Ye, e, n);
                        case "square":
                            return Oe(t.g, t.p, t.Ye, e, n) }
                    t.Hu }(t, e, n) }

            function Ee(t, e, n, r, i, o, a, s, u) { var c = m(n) ? n : n.close,
                    l = m(n) ? n : n.high,
                    h = m(n) ? n : n.low,
                    f = m(e.size) ? Math.max(e.size, 0) : 1,
                    p = xe(s.Pr()) * f,
                    d = p / 2; switch (t.Ye = p, e.position) {
                    case "inBar":
                        return t.p = a.X(c, u), void(void 0 !== t.At && (t.At.p = t.p + d + o + .6 * i));
                    case "aboveBar":
                        return t.p = a.X(l, u) - d - r.Yu, void 0 !== t.At && (t.At.p = t.p - d - .6 * i, r.Yu += 1.2 * i), void(r.Yu += p + o);
                    case "belowBar":
                        return t.p = a.X(h, u) + d + r.Ku, void 0 !== t.At && (t.At.p = t.p + d + o + .6 * i, r.Ku += 1.2 * i), void(r.Ku += p + o) }
                e.position } var ke = function() {
                    function t(t, e) { this.B = !0, this.$u = !0, this.Xu = !0, this.Zu = null, this.ot = new Me, this.Ju = t, this.hi = e, this.tt = { m: [], M: null } } return t.prototype.V = function(t) { this.B = !0, this.Xu = !0, "data" === t && (this.$u = !0) }, t.prototype.W = function(t, e, n) { if (!this.Ju.H()) return null;
                        this.B && this.Re(); var r = this.hi.I().layout; return this.ot.Tu(r.fontSize, r.fontFamily), this.ot._(this.tt), this.ot }, t.prototype.Gu = function() { if (this.Xu) { if (this.Ju.Qu().length > 0) { var t = this.hi.U().Pr(),
                                    e = we(t),
                                    n = 1.5 * xe(t) + 2 * e;
                                this.Zu = { above: n, below: n } } else this.Zu = null;
                            this.Xu = !1 } return this.Zu }, t.prototype.Re = function() { var t = this.Ju.Z(),
                            e = this.hi.U(),
                            n = this.Ju.Qu();
                        this.$u && (this.tt.m = n.map((function(t) { return { P: t.time, g: 0, p: 0, Ye: 0, Hu: t.shape, et: t.color, ju: t.ju, Uu: t.id, At: void 0 } })), this.$u = !1); var r = this.hi.I().layout;
                        this.tt.M = null; var i = e.Mr(); if (null !== i) { var o = this.Ju.Y(); if (null !== o && 0 !== this.tt.m.length) { var a = NaN,
                                    s = we(e.Pr()),
                                    u = { Yu: s, Ku: s };
                                this.tt.M = Qt(this.tt.m, i, !0); for (var c = this.tt.M.from; c < this.tt.M.to; c++) { var l = n[c];
                                    l.time !== a && (u.Yu = s, u.Ku = s, a = l.time); var h = this.tt.m[c];
                                    h.g = e.G(l.time), void 0 !== l.text && l.text.length > 0 && (h.At = { qu: l.text, p: 0, dt: 0, wt: 0 }); var f = this.Ju.ta(l.time);
                                    null !== f && Ee(h, l, f, u, r.fontSize, s, t, e, o.J) }
                                this.B = !1 } } }, t }(),
                Ae = function(t) {
                    function e(e) { return t.call(this, e) || this } return h(e, t), e.prototype.Fu = function(t, e) { var n = this.zu;
                        n.H = !1; var r = this.Fe.I(); if (r.priceLineVisible && this.Fe.H()) { var i = this.Fe.ia(0 === r.priceLineSource);
                            i.na || (n.H = !0, n.p = i.Pt, n.et = this.Fe.ha(i.et), n.dt = e, n.wt = t, n.rt = r.priceLineWidth, n.ut = r.priceLineStyle) } }, e }(ve),
                Pe = function(t) {
                    function e(e) { var n = t.call(this) || this; return n.lt = e, n } return h(e, t), e.prototype.Zt = function(t, e, n) { if (t.H = !1, e.H = !1, this.lt.H()) { var r = this.lt.I(),
                                i = r.lastValueVisible,
                                o = "" !== this.lt.sa(),
                                a = 0 === r.seriesLastValueMode,
                                s = this.lt.ia(!1); if (!s.na) { i && (t.At = this.ra(s, i, a), t.H = 0 !== t.At.length), (o || a) && (e.At = this.ea(s, i, o, a), e.H = e.At.length > 0); var u = this.lt.ha(s.et),
                                    c = F(u);
                                n.gt = c.gt, n.et = c.yt, n.Pt = s.Pt, e.$ = this.lt.ct().I().layout.backgroundColor, t.$ = u } } }, e.prototype.ea = function(t, e, n, r) { var i = "",
                            o = this.lt.sa(); return n && 0 !== o.length && (i += o + " "), e && r && (i += this.lt.Z().oh() ? t.ua : t.aa), i.trim() }, e.prototype.ra = function(t, e, n) { return e ? n ? this.lt.Z().oh() ? t.aa : t.ua : t.At : "" }, e }(q),
                Ce = function() {
                    function t(t, e) { this.On = t, this.oa = e || null } return t.prototype.yh = function() { return this.On }, t.prototype.rs = function() { return this.oa }, t.prototype.wn = function() { return null === this.On ? null : { priceRange: this.On.wn(), margins: this.oa || void 0 } }, t.Mn = function(e) { return null === e ? null : new t(nt.Mn(e.priceRange), e.margins) }, t }(),
                Te = function(t) {
                    function e(e, n) { var r = t.call(this, e) || this; return r.la = n, r } return h(e, t), e.prototype.Fu = function(t, e) { var n = this.zu; if (n.H = !1, this.Fe.H()) { var r = this.la.fa(); if (null !== r) { var i = this.la.I();
                                n.H = !0, n.p = r, n.et = i.color, n.dt = e, n.wt = t, n.rt = i.lineWidth, n.ut = i.lineStyle } } }, e }(ve),
                Ie = function(t) {
                    function e(e, n) { var r = t.call(this) || this; return r.Ju = e, r.la = n, r } return h(e, t), e.prototype.Zt = function(t, e, n) { t.H = !1, e.H = !1; var r = this.la.I(),
                            i = r.axisLabelVisible,
                            o = "" !== r.title; if (i && this.Ju.H()) { var a = this.la.fa(); if (null !== a) { o && (e.At = r.title, e.H = !0), e.$ = this.Ju.ct().I().layout.backgroundColor, t.At = this.Ju.Z().$h(r.price), t.H = !0; var s = F(r.color);
                                n.gt = s.gt, n.et = s.yt, n.Pt = a } } }, e }(q),
                Ne = function() {
                    function t(t, e) { this.Ju = t, this.xi = e, this.ca = new Te(t, this), this.Bu = new Ie(t, this), this.va = new de(this.Bu, t, t.ct()) } return t.prototype.hh = function(t) { b(this.xi, t), this.V(), this.Ju.ct().zr() }, t.prototype.I = function() { return this.xi }, t.prototype.ci = function() { return [this.ca, this.va] }, t.prototype._a = function() { return this.Bu }, t.prototype.V = function() { this.ca.V(), this.Bu.V() }, t.prototype.fa = function() { var t = this.Ju,
                            e = t.Z(); if (t.ct().U().Qt() || e.Qt()) return null; var n = t.Y(); return null === n ? null : e.X(this.xi.price, n.J) }, t }(),
                De = function(t) {
                    function e(e) { var n = t.call(this) || this; return n.hi = e, n } return h(e, t), e.prototype.ct = function() { return this.hi }, e }(X),
                Re = { eu: "", wu: "", du: "" },
                Le = function() {
                    function t(t) { this.Ju = t } return t.prototype.uu = function(t, e) { var n = this.Ju.da(),
                            r = this.Ju.I(); switch (n) {
                            case "Line":
                                return this.wa(r);
                            case "Area":
                                return this.Ma(r);
                            case "Bar":
                                return this.ba(r, t, e);
                            case "Candlestick":
                                return this.ma(r, t, e);
                            case "Histogram":
                                return this.ga(r, t, e) } throw new Error("Unknown chart style") }, t.prototype.ba = function(t, e, n) { var r = f({}, Re),
                            i = t.upColor,
                            o = t.downColor,
                            a = i,
                            s = o,
                            u = v(this.pa(e, n)),
                            c = g(u.J[0]) <= g(u.J[3]); return r.eu = c ? i : o, r.wu = c ? a : s, r }, t.prototype.ma = function(t, e, n) { var r = f({}, Re),
                            i = t.upColor,
                            o = t.downColor,
                            a = t.borderUpColor,
                            s = t.borderDownColor,
                            u = t.wickUpColor,
                            c = t.wickDownColor,
                            l = v(this.pa(e, n)),
                            h = g(l.J[0]) <= g(l.J[3]); return r.eu = h ? i : o, r.wu = h ? a : s, r.du = h ? u : c, r }, t.prototype.Ma = function(t) { return f(f({}, Re), { eu: t.lineColor }) }, t.prototype.wa = function(t) { return f(f({}, Re), { eu: t.color }) }, t.prototype.ga = function(t, e, n) { var r = f({}, Re),
                            i = v(this.pa(e, n)); return r.eu = void 0 !== i.et ? i.et : t.color, r }, t.prototype.pa = function(t, e) { return void 0 !== e ? e.J : this.Ju.qi().ya(t) }, t }(),
                Be = function() {
                    function t() { this.ka = [], this.xa = new Map, this.Na = new Map } return t.prototype.Sa = function() { this.ka = [], this.xa.clear(), this.Na.clear() }, t.prototype.Ca = function() { return this.Ye() > 0 ? this.ka[this.ka.length - 1] : null }, t.prototype.Da = function() { return this.Ye() > 0 ? this.Ta(0) : null }, t.prototype.Ui = function() { return this.Ye() > 0 ? this.Ta(this.ka.length - 1) : null }, t.prototype.Ye = function() { return this.ka.length }, t.prototype.Qt = function() { return 0 === this.Ye() }, t.prototype.As = function(t) { return null !== this.Ba(t, 0) }, t.prototype.ya = function(t) { return this.Ea(t) }, t.prototype.Ea = function(t, e) { void 0 === e && (e = 0); var n = this.Ba(t, e); return null === n ? null : f(f({}, this.La(n)), { Ps: this.Ta(n) }) }, t.prototype.Ze = function() { return this.ka }, t.prototype.Aa = function(t, e, n) { if (this.Qt()) return null; for (var r = null, i = 0, o = n; i < o.length; i++) { var a = o[i];
                            r = Fe(r, this.Va(t, e, a)) } return r }, t.prototype.vn = function(t) { 0 !== t.length && (this.Qt() || t[t.length - 1].Ps < this.ka[0].Ps ? this.Oa(t) : t[0].Ps > this.ka[this.ka.length - 1].Ps ? this.za(t) : 1 !== t.length || t[0].Ps !== this.ka[this.ka.length - 1].Ps ? this.Pa(t) : this.Fa(t[0])) }, t.prototype.Ta = function(t) { return this.ka[t].Ps }, t.prototype.La = function(t) { return this.ka[t] }, t.prototype.Ba = function(t, e) { var n = this.Ia(t); if (null === n && 0 !== e) switch (e) {
                            case -1:
                                return this.Wa(t);
                            case 1:
                                return this.Ra(t);
                            default:
                                throw new TypeError("Unknown search mode") }
                        return n }, t.prototype.Wa = function(t) { var e = this.ja(t); return e > 0 && (e -= 1), e !== this.ka.length && this.Ta(e) < t ? e : null }, t.prototype.Ra = function(t) { var e = this.Ua(t); return e !== this.ka.length && t < this.Ta(e) ? e : null }, t.prototype.Ia = function(t) { var e = this.ja(t); return e === this.ka.length || t < this.ka[e].Ps ? null : e }, t.prototype.ja = function(t) { return $t(this.ka, t, (function(t, e) { return t.Ps < e })) }, t.prototype.Ua = function(t) { return Jt(this.ka, t, (function(t, e) { return e.Ps > t })) }, t.prototype.qa = function(t, e, n) { for (var r = null, i = t; i < e; i++) { var o = this.ka[i].J[n];
                            Number.isNaN(o) || (null === r ? r = { Ha: o, Ya: o } : (o < r.Ha && (r.Ha = o), o > r.Ya && (r.Ya = o))) } return r }, t.prototype.Ka = function(t) { var e = Math.floor(t.Ps / 30);
                        this.xa.forEach((function(t) { return t.delete(e) })) }, t.prototype.Oa = function(t) { d(0 !== t.length, "plotRows should not be empty"), this.Na.clear(), this.xa.clear(), this.ka = t.concat(this.ka) }, t.prototype.za = function(t) { d(0 !== t.length, "plotRows should not be empty"), this.Na.clear(), this.xa.clear(), this.ka = this.ka.concat(t) }, t.prototype.Fa = function(t) { d(!this.Qt(), "plot list should not be empty"), d(this.ka[this.ka.length - 1].Ps === t.Ps, "last row index should match new row index"), this.Ka(t), this.Na.delete(t.Ps), this.ka[this.ka.length - 1] = t }, t.prototype.Pa = function(t) { d(0 !== t.length, "plot rows should not be empty"), this.Na.clear(), this.xa.clear(), this.ka = function(t, e) { for (var n = function(t, e) { for (var n = t.length, r = e.length, i = n + r, o = 0, a = 0; o < n && a < r;) t[o].Ps < e[a].Ps ? o++ : t[o].Ps > e[a].Ps ? a++ : (o++, a++, i--); return i }(t, e), r = new Array(n), i = 0, o = 0, a = t.length, s = e.length, u = 0; i < a && o < s;) t[i].Ps < e[o].Ps ? (r[u] = t[i], i++) : t[i].Ps > e[o].Ps ? (r[u] = e[o], o++) : (r[u] = e[o], i++, o++), u++; for (; i < a;) r[u] = t[i], i++, u++; for (; o < s;) r[u] = e[o], o++, u++; return r }(this.ka, t) }, t.prototype.Va = function(t, e, n) { if (this.Qt()) return null; var r = null,
                            i = v(this.Da()),
                            o = v(this.Ui()),
                            a = Math.max(t, i),
                            s = Math.min(e, o),
                            u = 30 * Math.ceil(a / 30),
                            c = Math.max(u, 30 * Math.floor(s / 30)),
                            l = this.ja(a),
                            h = this.Ua(Math.min(s, u, e));
                        r = Fe(r, this.qa(l, h, n)); var f = this.xa.get(n);
                        void 0 === f && (f = new Map, this.xa.set(n, f)); for (var p = Math.max(u + 1, a); p < c; p += 30) { var d = Math.floor(p / 30),
                                y = f.get(d); if (void 0 === y) { var g = this.ja(30 * d),
                                    b = this.Ua(30 * (d + 1) - 1);
                                y = this.qa(g, b, n), f.set(d, y) }
                            r = Fe(r, y) } return l = this.ja(c), h = this.Ua(s), Fe(r, this.qa(l, h, n)) }, t }();

            function Fe(t, e) { return null === t ? e : null === e ? t : { Ha: Math.min(t.Ha, e.Ha), Ya: Math.max(t.Ya, e.Ya) } } var ze = function(t) {
                    function e(e, n, r) { var i = t.call(this, e) || this;
                        i.tt = new Be, i.ca = new Ae(i), i.$a = [], i.Xa = new ge(i), i.Za = null, i.Ja = [], i.Ga = [], i.xi = n, i.Qa = r; var o = new Pe(i); return i.bi = [o], i.va = new de(o, i, e), i.io(), i.no(), i } return h(e, t), e.prototype.rn = function() {}, e.prototype.ha = function(t) { return this.xi.priceLineColor || t }, e.prototype.ia = function(t, e) { var n = { na: !0 },
                            r = this.Z(); if (this.ct().U().Qt() || r.Qt() || this.tt.Qt()) return n; var i, o, a = this.ct().U().Mr(),
                            s = this.Y(); if (null === a || null === s) return n; if (t) { var u = this.tt.Ca(); if (null === u) return n;
                            i = u, o = u.Ps } else { var c = this.tt.Ea(a.ss(), -1); if (null === c) return n; if (null === (i = this.tt.ya(c.Ps))) return n;
                            o = c.Ps } var l = i.J[3],
                            h = this.Xe().uu(o, { J: i }),
                            f = r.X(l, s.J); return { na: !1, F: e ? l : void 0, At: r.ti(l, s.J), ua: r.$h(l), aa: r.Zh(l, s.J), et: h.eu, Pt: f, Ps: o } }, e.prototype.Xe = function() { return null !== this.Za || (this.Za = new Le(this)), this.Za }, e.prototype.I = function() { return this.xi }, e.prototype.hh = function(t) { var e = t.priceScaleId;
                        void 0 !== e && e !== this.xi.priceScaleId && this.ct().ho(this, e), b(this.xi, t), null !== this.ei && void 0 !== t.scaleMargins && this.ei.hh({ scaleMargins: t.scaleMargins }), void 0 !== t.priceFormat && this.io(), this.ct().so(this), this.ct().ro(), this.Bi.V("options") }, e.prototype.eo = function() { this.tt.Sa(), this.no() }, e.prototype.uo = function(t, e) { e && this.tt.Sa(), this.tt.vn(t), this.ao(), this.Bi.V("data"), this.Ni.V("data"); var n = this.ct().Lu(this);
                        this.ct().oo(n), this.ct().so(this), this.ct().ro(), this.ct().zr() }, e.prototype.lo = function(t) { this.Ja = t.map((function(t) { return f({}, t) })), this.ao(); var e = this.ct().Lu(this);
                        this.Ni.V("data"), this.ct().oo(e), this.ct().so(this), this.ct().ro(), this.ct().zr() }, e.prototype.Qu = function() { return this.Ga }, e.prototype.fo = function(t) { var e = new Ne(this, t); return this.$a.push(e), this.ct().so(this), e }, e.prototype.co = function(t) { var e = this.$a.indexOf(t); - 1 !== e && this.$a.splice(e, 1), this.ct().so(this) }, e.prototype.da = function() { return this.Qa }, e.prototype.Y = function() { var t = this.vo(); return null === t ? null : { J: t.J[3], Fh: t.P } }, e.prototype.vo = function() { var t = this.ct().U().Mr(); if (null === t) return null; var e = t.hs(); return this.tt.Ea(e, 1) }, e.prototype.qi = function() { return this.tt }, e.prototype.ta = function(t) { var e = this.tt.ya(t); return null === e ? null : "Bar" === this.Qa || "Candlestick" === this.Qa ? { open: e.J[0], high: e.J[1], low: e.J[2], close: e.J[3] } : e.J[3] }, e.prototype.ci = function() { var t = [];
                        this._o() || t.push(this.Xa); for (var e = 0, n = this.$a; e < n.length; e++) { var r = n[e];
                            t.push.apply(t, r.ci()) } return t.push(this.Bi, this.ca, this.va, this.Ni), t }, e.prototype.fi = function(t, e) { if (e !== this.ei && !this._o()) return []; for (var n = p([], this.bi), r = 0, i = this.$a; r < i.length; r++) { var o = i[r];
                            n.push(o._a()) } return n }, e.prototype.ns = function(t, e) { var n = this; if (void 0 !== this.xi.autoscaleInfoProvider) { var r = this.xi.autoscaleInfoProvider((function() { var r = n.do(t, e); return null === r ? null : r.wn() })); return Ce.Mn(r) } return this.do(t, e) }, e.prototype.Qh = function() { return this.xi.priceFormat.minMove }, e.prototype.Yh = function() { return this.Xn }, e.prototype.Wi = function() { this.Bi.V(), this.Ni.V(); for (var t = 0, e = this.bi; t < e.length; t++) e[t].V(); for (var n = 0, r = this.$a; n < r.length; n++) r[n].V();
                        this.ca.V(), this.Xa.V() }, e.prototype.Z = function() { return v(this.ei) }, e.prototype.q = function(t) { if ("Line" !== this.Qa && "Area" !== this.Qa || !this.xi.crosshairMarkerVisible) return null; var e = this.tt.ya(t); return null === e ? null : { F: e.J[3], N: this.wo(), $: this.Mo(), K: this.bo(t) } }, e.prototype.sa = function() { return this.xi.title }, e.prototype.H = function() { return this.xi.visible }, e.prototype._o = function() { return !Vt(this.Z().nh()) }, e.prototype.do = function(t, e) { if (!x(t) || !x(e) || this.tt.Qt()) return null; var n = "Line" === this.Qa || "Area" === this.Qa || "Histogram" === this.Qa ? [3] : [2, 1],
                            r = this.tt.Aa(t, e, n),
                            i = null !== r ? new nt(r.Ha, r.Ya) : null; if ("Histogram" === this.da()) { var o = this.xi.base,
                                a = new nt(o, o);
                            i = null !== i ? i.vn(a) : a } return new Ce(i, this.Ni.Gu()) }, e.prototype.wo = function() { switch (this.Qa) {
                            case "Line":
                            case "Area":
                                return this.xi.crosshairMarkerRadius } return 0 }, e.prototype.Mo = function() { switch (this.Qa) {
                            case "Line":
                            case "Area":
                                var t = this.xi.crosshairMarkerBorderColor; if (0 !== t.length) return t } return this.ct().I().layout.backgroundColor }, e.prototype.bo = function(t) { switch (this.Qa) {
                            case "Line":
                            case "Area":
                                var e = this.xi.crosshairMarkerBackgroundColor; if (0 !== e.length) return e } return this.Xe().uu(t).eu }, e.prototype.io = function() { switch (this.xi.priceFormat.type) {
                            case "custom":
                                this.Xn = { format: this.xi.priceFormat.formatter }; break;
                            case "volume":
                                this.Xn = new Wt(this.xi.priceFormat.precision); break;
                            case "percent":
                                this.Xn = new tt(this.xi.priceFormat.precision); break;
                            default:
                                var t = Math.pow(10, this.xi.priceFormat.precision);
                                this.Xn = new K(t, this.xi.priceFormat.minMove * t) }
                        null !== this.ei && this.ei.sh() }, e.prototype.ao = function() { var t = this,
                            e = this.ct().U(); if (e.Qt() || 0 === this.tt.Ye()) this.Ga = [];
                        else { var n = v(this.tt.Da());
                            this.Ga = this.Ja.map((function(r, i) { var o = v(e.wr(r.time, !0)),
                                    a = o < n ? 1 : -1; return { time: v(t.tt.Ea(o, a)).Ps, position: r.position, shape: r.shape, color: r.color, id: r.id, ju: i, text: r.text, size: r.size } })) } }, e.prototype.no = function() { switch (this.Ni = new ke(this, this.ct()), this.Qa) {
                            case "Bar":
                                this.Bi = new re(this, this.ct()); break;
                            case "Candlestick":
                                this.Bi = new oe(this, this.ct()); break;
                            case "Line":
                                this.Bi = new le(this, this.ct()); break;
                            case "Area":
                                this.Bi = new te(this, this.ct()); break;
                            case "Histogram":
                                this.Bi = new ce(this, this.ct()); break;
                            default:
                                throw Error("Unknown chart style assigned: " + this.Qa) } }, e }(De),
                Ve = function() {
                    function t(t) { this.xi = t } return t.prototype.mo = function(t, e, n) { var r = t; if (0 === this.xi.mode) return r; var i = n.Ci(),
                            o = i.Y(); if (null === o) return r; var a = i.X(t, o),
                            s = n.Ah().filter((function(t) { return t instanceof ze })).reduce((function(t, r) { if (n.Au(r) || !r.H()) return t; var i = r.Z(),
                                    o = r.qi(); if (i.Qt() || !o.As(e)) return t; var a = o.ya(e); if (null === a) return t; var s = g(r.Y()); return t.concat([i.X(a.J[3], s.J)]) }), []); if (0 === s.length) return r;
                        s.sort((function(t, e) { return Math.abs(t - a) - Math.abs(e - a) })); var u = s[0]; return i.Di(u, o) }, t }(),
                Ue = function() {
                    function t() { this.tt = null } return t.prototype._ = function(t) { this.tt = t }, t.prototype.h = function(t, e, n, r) { var i = this; if (null !== this.tt) { var o = Math.max(1, Math.floor(e));
                            t.lineWidth = o; var a = Math.ceil(this.tt.st * e),
                                s = Math.ceil(this.tt.ht * e);! function(t, e) { t.save(), t.lineWidth % 2 && t.translate(.5, .5), e(), t.restore() }(t, (function() { var n = v(i.tt); if (n.po) { t.strokeStyle = n.yo, u(t, n.ko), t.beginPath(); for (var r = 0, c = n.xo; r < c.length; r++) { var l = c[r],
                                            h = Math.round(l.Dn * e);
                                        t.moveTo(h, -o), t.lineTo(h, a + o) }
                                    t.stroke() } if (n.No) { t.strokeStyle = n.So, u(t, n.Co), t.beginPath(); for (var f = 0, p = n.Do; f < p.length; f++) { var d = p[f],
                                            y = Math.round(d.Dn * e);
                                        t.moveTo(-o, y), t.lineTo(s + o, y) }
                                    t.stroke() } })) } }, t }(),
                We = function() {
                    function t(t) { this.ot = new Ue, this.B = !0, this._i = t } return t.prototype.V = function() { this.B = !0 }, t.prototype.W = function(t, e) { if (this.B) { var n = this._i.ct().I().grid,
                                r = { st: t, ht: e, No: n.horzLines.visible, po: n.vertLines.visible, So: n.horzLines.color, yo: n.vertLines.color, Co: n.horzLines.style, ko: n.vertLines.style, Do: this._i.Ci().Ln(), xo: this._i.ct().U().Ln() || [] };
                            this.ot._(r), this.B = !1 } return this.ot }, t }(),
                He = function() {
                    function t(t) { this.Bi = new We(t) } return t.prototype.To = function() { return this.Bi }, t }(),
                qe = function() {
                    function t(t, e) { this.qn = [], this.Bo = new Map, this.An = 0, this.Ys = 0, this.Eo = 1e3, this.Hn = null, this.Lo = new et, this.Ao = t, this.hi = e, this.Vo = new He(this); var n = e.I();
                        this.Oo = this.zo("left", n.leftPriceScale), this.Po = this.zo("right", n.rightPriceScale), this.Oo.Mh().Zi(this.Fo.bind(this, this.Oo), this), this.Po.Mh().Zi(this.Fo.bind(this, this.Oo), this), this.Io(n) } return t.prototype.Io = function(t) { if (t.leftPriceScale && this.Oo.hh(t.leftPriceScale), t.rightPriceScale && this.Po.hh(t.rightPriceScale), t.localization && (this.Oo.sh(), this.Po.sh()), t.overlayPriceScales)
                            for (var e = 0, n = Array.from(this.Bo.values()); e < n.length; e++) { var r = v(n[e][0].Z());
                                r.hh(t.overlayPriceScales), t.localization && r.sh() } }, t.prototype.Wo = function(t) { switch (t) {
                            case "left":
                                return this.Oo;
                            case "right":
                                return this.Po } return this.Bo.has(t) ? y(this.Bo.get(t))[0].Z() : null }, t.prototype.rn = function() { this.ct().Ro().nn(this), this.Oo.Mh().nn(this), this.Po.Mh().nn(this), this.qn.forEach((function(t) { t.rn && t.rn() })), this.Lo.hn() }, t.prototype.jo = function() { return this.Eo }, t.prototype.Uo = function(t) { this.Eo = t }, t.prototype.ct = function() { return this.hi }, t.prototype.dt = function() { return this.Ys }, t.prototype.wt = function() { return this.An }, t.prototype.Cr = function(t) { this.Ys = t, this.qo() }, t.prototype.bh = function(t) { var e = this;
                        this.An = t, this.Oo.bh(t), this.Po.bh(t), this.qn.forEach((function(n) { if (e.Au(n)) { var r = n.Z();
                                null !== r && r.bh(t) } })), this.qo() }, t.prototype.Ah = function() { return this.qn }, t.prototype.Au = function(t) { var e = t.Z(); return null === e || this.Oo !== e && this.Po !== e }, t.prototype.Oh = function(t, e, n) { var r = void 0 !== n ? n : this.Yo().Ho + 1;
                        this.Ko(t, e, r) }, t.prototype.Ph = function(t) { var e = this.qn.indexOf(t);
                        d(-1 !== e, "removeDataSource: invalid data source"), this.qn.splice(e, 1); var n = v(t.Z()).nh(); if (this.Bo.has(n)) { var r = y(this.Bo.get(n)),
                                i = r.indexOf(t); - 1 !== i && (r.splice(i, 1), 0 === r.length && this.Bo.delete(n)) } var o = t.Z();
                        o && o.Ah().indexOf(t) >= 0 && o.Ph(t), null !== o && (o.zh(), this.$o(o)), this.Hn = null }, t.prototype.Vu = function(t) { return t === this.Oo ? "left" : t === this.Po ? "right" : "overlay" }, t.prototype.Xo = function() { return this.Oo }, t.prototype.Zo = function() { return this.Po }, t.prototype.Jo = function(t, e) { t.Wh(e) }, t.prototype.Go = function(t, e) { t.Rh(e), this.qo() }, t.prototype.Qo = function(t) { t.jh() }, t.prototype.tl = function(t, e) { t.Uh(e) }, t.prototype.il = function(t, e) { t.qh(e), this.qo() }, t.prototype.nl = function(t) { t.Hh() }, t.prototype.qo = function() { this.qn.forEach((function(t) { t.Wi() })) }, t.prototype.Ci = function() { var t = null; return this.hi.I().rightPriceScale.visible && 0 !== this.Po.Ah().length ? t = this.Po : this.hi.I().leftPriceScale.visible && 0 !== this.Oo.Ah().length ? t = this.Oo : 0 !== this.qn.length && (t = this.qn[0].Z()), null === t && (t = this.Po), t }, t.prototype.$o = function(t) { null !== t && t.ah() && this.hl(t) }, t.prototype.sl = function(t) { var e = this.Ao.Mr();
                        t.rh({ fh: !0 }), null !== e && t.Gh(e), this.qo() }, t.prototype.rl = function() { this.hl(this.Oo), this.hl(this.Po) }, t.prototype.el = function() { var t = this;
                        this.$o(this.Oo), this.$o(this.Po), this.qn.forEach((function(e) { t.Au(e) && t.$o(e.Z()) })), this.qo(), this.hi.zr() }, t.prototype.Vh = function() { return null === this.Hn && (this.Hn = bt(this.qn)), this.Hn }, t.prototype.ul = function() { return this.Lo }, t.prototype.al = function() { return this.Vo }, t.prototype.hl = function(t) { var e = t.Jh(); if (e && e.length > 0 && !this.Ao.Qt()) { var n = this.Ao.Mr();
                            null !== n && t.Gh(n) }
                        t.Wi() }, t.prototype.Yo = function() { var t = this.Vh(); if (0 === t.length) return { ol: 0, Ho: 0 }; for (var e = 0, n = 0, r = 0; r < t.length; r++) { var i = t[r].ai();
                            null !== i && (i < e && (e = i), i > n && (n = i)) } return { ol: e, Ho: n } }, t.prototype.Ko = function(t, e, n) { var r = this.Wo(e); if (null === r && (r = this.zo(e, this.hi.I().overlayPriceScales)), this.qn.push(t), !Vt(e)) { var i = this.Bo.get(e) || [];
                            i.push(t), this.Bo.set(e, i) }
                        r.Oh(t), t.li(r), t.oi(n), this.$o(r), this.Hn = null }, t.prototype.Fo = function(t, e, n) { e.eh !== n.eh && this.hl(t) }, t.prototype.zo = function(t, e) { var n = f({ visible: !0, autoScale: !0 }, _(e)),
                            r = new Ot(t, n, this.hi.I().layout, this.hi.I().localization); return r.bh(this.wt()), r }, t }(),
                Ye = function(t) {
                    function e(e) { var n = t.call(this) || this; return n.ll = new Map, n.tt = e, n } return h(e, t), e.prototype.u = function(t) {}, e.prototype.l = function(t) { if (this.tt.H) { t.save(); for (var e = 0, n = 0, r = this.tt.fl; n < r.length; n++)
                                if (0 !== (u = r[n]).At.length) { t.font = u.xt; var i = this.cl(t, u.At);
                                    i > this.tt.dt ? u.jr = this.tt.dt / i : u.jr = 1, e += u.vl * u.jr }
                            var o = 0; switch (this.tt._l) {
                                case "top":
                                    o = 0; break;
                                case "center":
                                    o = Math.max((this.tt.wt - e) / 2, 0); break;
                                case "bottom":
                                    o = Math.max(this.tt.wt - e, 0) }
                            t.fillStyle = this.tt.et; for (var a = 0, s = this.tt.fl; a < s.length; a++) { var u = s[a];
                                t.save(); var c = 0; switch (this.tt.dl) {
                                    case "left":
                                        t.textAlign = "left", c = u.vl / 2; break;
                                    case "center":
                                        t.textAlign = "center", c = this.tt.dt / 2; break;
                                    case "right":
                                        t.textAlign = "right", c = this.tt.dt - 1 - u.vl / 2 }
                                t.translate(c, o), t.textBaseline = "top", t.font = u.xt, t.scale(u.jr, u.jr), t.fillText(u.At, 0, u.wl), t.restore(), o += u.vl * u.jr }
                            t.restore() } }, e.prototype.cl = function(t, e) { var n = this.Ml(t.font),
                            r = n.get(e); return void 0 === r && (r = t.measureText(e).width, n.set(e, r)), r }, e.prototype.Ml = function(t) { var e = this.ll.get(t); return void 0 === e && (e = new Map, this.ll.set(t, e)), e }, e }(E),
                $e = function() {
                    function t(t) { this.B = !0, this.at = { H: !1, et: "", wt: 0, dt: 0, fl: [], _l: "center", dl: "center" }, this.ot = new Ye(this.at), this.lt = t } return t.prototype.V = function() { this.B = !0 }, t.prototype.W = function(t, e) { return this.B && (this.R(t, e), this.B = !1), this.ot }, t.prototype.R = function(t, e) { var n = this.lt.I(),
                            r = this.at;
                        r.H = n.visible, r.H && (r.et = n.color, r.dt = e, r.wt = t, r.dl = n.horzAlign, r._l = n.vertAlign, r.fl = [{ At: n.text, xt: Ft(n.fontSize, n.fontFamily, n.fontStyle), vl: 1.2 * n.fontSize, wl: 0, jr: 0 }]) }, t }(),
                Je = function(t) {
                    function e(e, n) { var r = t.call(this) || this; return r.xi = n, r.Bi = new $e(r), r } return h(e, t), e.prototype.ci = function() { return [this.Bi] }, e.prototype.I = function() { return this.xi }, e.prototype.Wi = function() { this.Bi.V() }, e }(X),
                Ge = function() {
                    function t(t, e) { this.bl = [], this.ml = [], this.Ys = 0, this.gl = null, this.pl = null, this.yl = new et, this.kl = new et, this.xl = t, this.xi = e, this.Nl = new zt(this), this.Ao = new Dt(this, e.timeScale, this.xi.localization), this.A = new Q(this, e.crosshair), this.Sl = new Ve(e.crosshair), this.Cl = new Je(this, e.watermark), this.Dl(), this.bl[0].Uo(2e3) } return t.prototype.Tl = function() { this.Bl(new Ut(3)) }, t.prototype.zr = function() { this.Bl(new Ut(2)) }, t.prototype.so = function(t) { var e = this.El(t);
                        this.Bl(e) }, t.prototype.Ll = function() { return this.pl }, t.prototype.Al = function(t) { var e = this.pl;
                        this.pl = t, null !== e && this.so(e.Vl), null !== t && this.so(t.Vl) }, t.prototype.I = function() { return this.xi }, t.prototype.hh = function(t) { b(this.xi, t), this.bl.forEach((function(e) { return e.Io(t) })), void 0 !== t.timeScale && this.Ao.hh(t.timeScale), void 0 !== t.localization && this.Ao.ar(t.localization), (t.leftPriceScale || t.rightPriceScale) && this.yl.hn(), this.Tl() }, t.prototype.Ol = function(t, e) { var n = this.zl(t);
                        null !== n && (n.Z.hh(e), this.yl.hn()) }, t.prototype.zl = function(t) { for (var e = 0, n = this.bl; e < n.length; e++) { var r = n[e],
                                i = r.Wo(t); if (null !== i) return { ft: r, Z: i } } return null }, t.prototype.U = function() { return this.Ao }, t.prototype.Pl = function() { return this.bl }, t.prototype.Fl = function() { return this.Cl }, t.prototype.Il = function() { return this.A }, t.prototype.Wl = function() { return this.kl }, t.prototype.Rl = function(t, e) { t.bh(e), this.Or() }, t.prototype.Cr = function(t) { this.Ys = t, this.Ao.Cr(this.Ys), this.bl.forEach((function(e) { return e.Cr(t) })), this.Or() }, t.prototype.Dl = function(t) { var e = new qe(this.Ao, this);
                        void 0 !== t ? this.bl.splice(t, 0, e) : this.bl.push(e); var n = void 0 === t ? this.bl.length - 1 : t,
                            r = new Ut(3); return r.we(n, { Me: 0, fh: !0 }), this.Bl(r), e }, t.prototype.Jo = function(t, e, n) { t.Jo(e, n) }, t.prototype.Go = function(t, e, n) { t.Go(e, n), this.ro(), this.Bl(this.jl(t, 2)) }, t.prototype.Qo = function(t, e) { t.Qo(e), this.Bl(this.jl(t, 2)) }, t.prototype.tl = function(t, e, n) { e.ah() || t.tl(e, n) }, t.prototype.il = function(t, e, n) { e.ah() || (t.il(e, n), this.ro(), this.Bl(this.jl(t, 2))) }, t.prototype.nl = function(t, e) { e.ah() || (t.nl(e), this.Bl(this.jl(t, 2))) }, t.prototype.sl = function(t, e) { t.sl(e), this.Bl(this.jl(t, 2)) }, t.prototype.Ul = function(t) { this.Ao.Wh(t) }, t.prototype.ql = function(t, e) { var n = this.U(); if (!n.Qt() && 0 !== e) { var r = n.dt();
                            t = Math.max(1, Math.min(t, r)), n.jr(t, e), this.Or() } }, t.prototype.Hl = function(t) { this.Yl(0), this.Kl(t), this.$l() }, t.prototype.Xl = function(t) { this.Ao.Rh(t), this.Or() }, t.prototype.Zl = function() { this.Ao.jh(), this.zr() }, t.prototype.Yl = function(t) { this.gl = t, this.Ao.Uh(t) }, t.prototype.Kl = function(t) { var e = !1; return null !== this.gl && Math.abs(t - this.gl) > 20 && (this.gl = null, e = !0), this.Ao.qh(t), this.Or(), e }, t.prototype.$l = function() { this.Ao.Hh(), this.zr(), this.gl = null }, t.prototype.O = function() { return this.ml }, t.prototype.Jl = function(t, e, n) { this.A.Ei(t, e); var r = NaN,
                            i = this.Ao.Ar(t),
                            o = this.Ao.Mr();
                        null !== o && (i = Math.min(Math.max(o.hs(), i), o.ss())); var a = n.Ci(),
                            s = a.Y();
                        null !== s && (r = a.Di(e, s)), r = this.Sl.mo(r, i, n), this.A.Oi(i, r, n), this.Gl(), this.kl.hn(this.A.j(), { x: t, y: e }) }, t.prototype.Ql = function() { this.Il().Pi(), this.Gl(), this.kl.hn(null, null) }, t.prototype.ro = function() { var t = this.A.ft(); if (null !== t) { var e = this.A.Ai(),
                                n = this.A.Vi();
                            this.Jl(e, n, t) }
                        this.A.Wi() }, t.prototype.tf = function(t, e) { var n = this.Ao.si(0);
                        void 0 !== e && this.Ao.V(e); var r = this.Ao.si(0),
                            i = this.Ao.Er(),
                            o = this.Ao.Mr(); if (null !== o && null !== n && null !== r) { var a = o.As(i),
                                s = n.Cs > r.Cs,
                                u = null !== t && t > i && !s,
                                c = a && this.Ao.I().shiftVisibleRangeOnNewBar; if (u && !c && null !== t) { var l = t - i;
                                this.Ao.dr(this.Ao.Fr() - l) } }
                        this.Ao.Rr(t) }, t.prototype.oo = function(t) { null !== t && t.el() }, t.prototype.Lu = function(t) { var e = this.bl.find((function(e) { return e.Vh().includes(t) })); return void 0 === e ? null : e }, t.prototype.Or = function() { this.Cl.Wi(), this.bl.forEach((function(t) { return t.el() })), this.ro() }, t.prototype.rn = function() { this.bl.forEach((function(t) { return t.rn() })), this.bl.length = 0, this.xi.localization.priceFormatter = void 0, this.xi.localization.timeFormatter = void 0 }, t.prototype.if = function() { return this.Nl }, t.prototype.Ou = function() { return this.Nl.I() }, t.prototype.Ro = function() { return this.yl }, t.prototype.nf = function(t, e) { var n = this.bl[0],
                            r = this.hf(e, t, n); return this.ml.push(r), 1 === this.ml.length ? this.Tl() : this.zr(), r }, t.prototype.sf = function(t) { var e = this.Lu(t),
                            n = this.ml.indexOf(t);
                        d(-1 !== n, "Series not found"), this.ml.splice(n, 1), v(e).Ph(t), t.rn && t.rn() }, t.prototype.ho = function(t, e) { var n = v(this.Lu(t));
                        n.Ph(t); var r = this.zl(e); if (null === r) { var i = t.ai();
                            n.Oh(t, e, i) } else i = r.ft === n ? t.ai() : void 0, r.ft.Oh(t, e, i) }, t.prototype.Jr = function() { var t = new Ut(2);
                        t.ge(), this.Bl(t) }, t.prototype.rf = function(t) { var e = new Ut(2);
                        e.ye(t), this.Bl(e) }, t.prototype.ke = function() { var t = new Ut(2);
                        t.ke(), this.Bl(t) }, t.prototype._r = function(t) { var e = new Ut(2);
                        e._r(t), this.Bl(e) }, t.prototype.dr = function(t) { var e = new Ut(2);
                        e.dr(t), this.Bl(e) }, t.prototype.ef = function() { return this.xi.rightPriceScale.visible ? "right" : "left" }, t.prototype.jl = function(t, e) { var n = new Ut(e); if (null !== t) { var r = this.bl.indexOf(t);
                            n.we(r, { Me: e }) } return n }, t.prototype.El = function(t, e) { return void 0 === e && (e = 2), this.jl(this.Lu(t), e) }, t.prototype.Bl = function(t) { this.xl && this.xl(t), this.bl.forEach((function(t) { return t.al().To().V() })) }, t.prototype.Gl = function() { this.Bl(new Ut(1)) }, t.prototype.hf = function(t, e, n) { var r = new ze(this, t, e),
                            i = void 0 !== t.priceScaleId ? t.priceScaleId : this.ef(); return n.Oh(r, i), Vt(i) || r.hh(t), r }, t }(),
                Xe = function() {
                    function t(t, e) { this.ht = t, this.st = e } return t.prototype.an = function(t) { return this.ht === t.ht && this.st === t.st }, t }();

            function Qe(t) { return t.ownerDocument && t.ownerDocument.defaultView && t.ownerDocument.defaultView.devicePixelRatio || 1 }

            function Ze(t) { var e = v(t.getContext("2d")); return e.setTransform(1, 0, 0, 1, 0, 0), e }

            function Ke(t, e) { var n = t.createElement("canvas"),
                    r = Qe(n); return n.style.width = e.ht + "px", n.style.height = e.st + "px", n.width = e.ht * r, n.height = e.st * r, n }

            function tn(t, e) { var n = v(t.ownerDocument).createElement("canvas");
                t.appendChild(n); var i, o = (void 0 === i && (i = r), new s(n, i)); return o.resizeCanvas({ width: e.ht, height: e.st }), o } var en = "undefined" != typeof window,
                nn = function() { if (!en) return !1; var t = !!navigator.maxTouchPoints || !!navigator.msMaxTouchPoints || !!en && ("ontouchstart" in window || Boolean(window.DocumentTouch && document instanceof window.DocumentTouch)); return "onorientationchange" in window && t }(),
                rn = function() { if (!en) return !1; var t = /Android/i.test(navigator.userAgent),
                        e = /iPhone|iPad|iPod|AppleWebKit.+Mobile/i.test(navigator.userAgent); return t || e }(),
                on = function() {
                    function t(t, e, n) { this.uf = 0, this.af = null, this.lf = null, this.ff = !1, this.cf = null, this.vf = !1, this._f = !1, this.df = null, this.wf = null, this.Mf = null, this.bf = null, this.mf = 0, this.gf = !1, this.pf = !1, this.yf = !1, this.kf = t, this.xf = e, this.xi = n, this.Nf() } return t.prototype.rn = function() { null !== this.df && (this.df(), this.df = null), null !== this.wf && (this.wf(), this.wf = null), null !== this.Mf && (this.Mf(), this.Mf = null), this.Sf(), this.Cf() }, t.prototype.Df = function(t) { var e = this;
                        this.wf && this.wf(); var n = this.Tf.bind(this);
                        this.wf = function() { e.kf.removeEventListener("mousemove", n) }, this.kf.addEventListener("mousemove", n), un(t) && this.Tf(t); var r = this.Bf(t);
                        this.Ef(r, this.xf.Lf) }, t.prototype.Cf = function() { null !== this.af && clearTimeout(this.af), this.uf = 0, this.af = null }, t.prototype.Tf = function(t) { if (!this.yf || un(t)) { var e = this.Bf(t);
                            this.Ef(e, this.xf.Af) } }, t.prototype.Vf = function(t) { if ((!("button" in t) || 0 === t.button) && null === this.bf) { var e = un(t); if (!this.pf || !e) { this.gf = !0; var n = this.Bf(t),
                                    r = g(this.cf),
                                    i = Math.abs(r.g - n.Of),
                                    o = Math.abs(r.p - n.zf),
                                    a = i + o > 5; if (a || !e) { if (a && !this.vf && e) { var s = .5 * i,
                                            u = o >= s && !this.xi.Pf,
                                            c = s > o && !this.xi.Ff;
                                        u || c || (this.pf = !0) }
                                    a && (this.vf = !0, this._f = !0, e && this.Sf()), this.pf || (this.Ef(n, this.xf.If), e && cn(t)) } } } }, t.prototype.Wf = function(t) { if (!("button" in t) || 0 === t.button) { var e = this.Bf(t);
                            this.Sf(), this.cf = null, this.yf = !1, this.Mf && (this.Mf(), this.Mf = null), un(t) && this.Rf(t), this.Ef(e, this.xf.jf), ++this.uf, this.af && this.uf > 1 ? (this.Ef(e, this.xf.Uf), this.Cf()) : this._f || this.Ef(e, this.xf.qf), un(t) && (cn(t), this.Rf(t), 0 === t.touches.length && (this.ff = !1)) } }, t.prototype.Sf = function() { null !== this.lf && (clearTimeout(this.lf), this.lf = null) }, t.prototype.Hf = function(t) { if (!("button" in t) || 0 === t.button) { var e = this.Bf(t);
                            this._f = !1, this.vf = !1, this.pf = !1, un(t) && this.Df(t), this.cf = { g: e.Of, p: e.zf }, this.Mf && (this.Mf(), this.Mf = null); var n = this.Vf.bind(this),
                                r = this.Wf.bind(this),
                                i = this.kf.ownerDocument.documentElement;
                            this.Mf = function() { i.removeEventListener("touchmove", n), i.removeEventListener("touchend", r), i.removeEventListener("mousemove", n), i.removeEventListener("mouseup", r) }, i.addEventListener("touchmove", n, { passive: !1 }), i.addEventListener("touchend", r, { passive: !1 }), this.Sf(), un(t) && 1 === t.touches.length ? this.lf = setTimeout(this.Yf.bind(this, t), 240) : (i.addEventListener("mousemove", n), i.addEventListener("mouseup", r)), this.yf = !0, this.Ef(e, this.xf.Kf), this.af || (this.uf = 0, this.af = setTimeout(this.Cf.bind(this), 500)) } }, t.prototype.Nf = function() { var t = this;
                        this.kf.addEventListener("mouseenter", this.Df.bind(this)), this.kf.addEventListener("touchcancel", this.Sf.bind(this)); var e = this.kf.ownerDocument,
                            n = function(e) { t.xf.$f && (e.composed && t.kf.contains(e.composedPath()[0]) || e.target && t.kf.contains(e.target) || t.xf.$f()) };
                        this.df = function() { e.removeEventListener("mousedown", n), e.removeEventListener("touchstart", n) }, e.addEventListener("mousedown", n), e.addEventListener("touchstart", n, { passive: !0 }), this.kf.addEventListener("mouseleave", this.Rf.bind(this)), this.kf.addEventListener("touchstart", this.Hf.bind(this), { passive: !0 }), nn || this.kf.addEventListener("mousedown", this.Hf.bind(this)), this.Xf(), this.kf.addEventListener("touchmove", (function() {}), { passive: !1 }) }, t.prototype.Xf = function() { var t = this;
                        void 0 === this.xf.Zf && void 0 === this.xf.Jf && void 0 === this.xf.Gf || (this.kf.addEventListener("touchstart", (function(e) { return t.Qf(e.touches) }), { passive: !0 }), this.kf.addEventListener("touchmove", (function(e) { if (2 === e.touches.length && null !== t.bf && void 0 !== t.xf.Jf) { var n = sn(e.touches[0], e.touches[1]) / t.mf;
                                t.xf.Jf(t.bf, n), cn(e) } }), { passive: !1 }), this.kf.addEventListener("touchend", (function(e) { t.Qf(e.touches) }))) }, t.prototype.Qf = function(t) { 1 === t.length && (this.gf = !1), 2 !== t.length || this.gf || this.ff ? this.tc() : this.ic(t) }, t.prototype.ic = function(t) { var e = an(this.kf);
                        this.bf = { g: (t[0].clientX - e.left + (t[1].clientX - e.left)) / 2, p: (t[0].clientY - e.top + (t[1].clientY - e.top)) / 2 }, this.mf = sn(t[0], t[1]), void 0 !== this.xf.Zf && this.xf.Zf(), this.Sf() }, t.prototype.tc = function() { null !== this.bf && (this.bf = null, void 0 !== this.xf.Gf && this.xf.Gf()) }, t.prototype.Rf = function(t) { this.wf && this.wf(); var e = this.Bf(t);
                        this.Ef(e, this.xf.nc) }, t.prototype.Yf = function(t) { var e = this.Bf(t);
                        this.Ef(e, this.xf.hc), this._f = !0, this.ff = !0 }, t.prototype.Ef = function(t, e) { e && e.call(this.xf, t) }, t.prototype.Bf = function(t) { var e;
                        e = "touches" in t && t.touches.length ? t.touches[0] : "changedTouches" in t && t.changedTouches.length ? t.changedTouches[0] : t; var n = an(this.kf); return { sc: e.clientX, rc: e.clientY, Of: e.pageX, zf: e.pageY, ec: e.screenX, uc: e.screenY, ac: e.clientX - n.left, oc: e.clientY - n.top, lc: t.ctrlKey, fc: t.altKey, cc: t.shiftKey, vc: t.metaKey, pe: t.type.startsWith("mouse") ? "mouse" : "touch", _c: t.view } }, t }();

            function an(t) { return t.getBoundingClientRect() || { left: 0, top: 0 } }

            function sn(t, e) { var n = t.clientX - e.clientX,
                    r = t.clientY - e.clientY; return Math.sqrt(n * n + r * r) }

            function un(t) { return Boolean(t.touches) }

            function cn(t) { t.cancelable && t.preventDefault() } var ln = function() {
                    function t(t, e, n, r) { this.Du = new fe(200), this.oe = 0, this.dc = "", this.Iu = "", this.xu = [], this.wc = new Map, this.oe = t, this.dc = e, this.Iu = Ft(t, n, r) } return t.prototype.rn = function() { this.Du.Nu(), this.xu = [], this.wc.clear() }, t.prototype.Mc = function(t, e, n, r, i) { var o = this.bc(t, e); if ("left" !== i) { var a = Qe(t.canvas);
                            n -= Math.floor(o.mc * a) }
                        r -= Math.floor(o.wt / 2), t.drawImage(o.gc, n, r, o.dt, o.wt) }, t.prototype.bc = function(t, e) { var n, r = this; if (this.wc.has(e)) n = y(this.wc.get(e));
                        else { if (this.xu.length >= 200) { var i = y(this.xu.shift());
                                this.wc.delete(i) } var o = Qe(t.canvas),
                                a = Math.ceil(this.oe / 4.5),
                                s = Math.round(this.oe / 10),
                                u = Math.ceil(this.Du.Vt(t, e)),
                                c = at(Math.round(u + 2 * a)),
                                l = at(this.oe + 2 * a),
                                h = Ke(document, new Xe(c, l));
                            n = { At: e, mc: Math.round(Math.max(1, u)), dt: Math.ceil(c * o), wt: Math.ceil(l * o), gc: h }, 0 !== u && (this.xu.push(n.At), this.wc.set(n.At, n)), V(t = Ze(n.gc), o, (function() { t.font = r.Iu, t.fillStyle = r.dc, t.fillText(e, 0, l - a - s) })) } return n }, t }(),
                hn = function() {
                    function t(t, e, n, r) { var i = this;
                        this.Jt = null, this.yc = null, this.kc = null, this.xc = !1, this.Nc = new fe(50), this.Sc = new ln(11, "#000"), this.dc = null, this.Iu = null, this.Cc = 0, this.Dc = function() { i.Tc(i.Nl.I()), i._i.Bc().ct().zr() }, this.Ec = function() { i._i.Bc().ct().zr() }, this._i = t, this.xi = e, this.Nl = n, this.Lc = "left" === r, this.Ac = document.createElement("div"), this.Ac.style.height = "100%", this.Ac.style.overflow = "hidden", this.Ac.style.width = "25px", this.Ac.style.left = "0", this.Ac.style.position = "relative", this.Vc = tn(this.Ac, new Xe(16, 16)), this.Vc.subscribeCanvasConfigured(this.Dc); var o = this.Vc.canvas;
                        o.style.position = "absolute", o.style.zIndex = "1", o.style.left = "0", o.style.top = "0", this.Oc = tn(this.Ac, new Xe(16, 16)), this.Oc.subscribeCanvasConfigured(this.Ec); var a = this.Oc.canvas;
                        a.style.position = "absolute", a.style.zIndex = "2", a.style.left = "0", a.style.top = "0"; var s = { Kf: this.zc.bind(this), If: this.Pc.bind(this), $f: this.Fc.bind(this), jf: this.Ic.bind(this), Uf: this.Wc.bind(this), Lf: this.Rc.bind(this), nc: this.jc.bind(this) };
                        this.Uc = new on(this.Oc.canvas, s, { Pf: !1, Ff: !0 }) } return t.prototype.rn = function() { this.Uc.rn(), this.Oc.unsubscribeCanvasConfigured(this.Ec), this.Oc.destroy(), this.Vc.unsubscribeCanvasConfigured(this.Dc), this.Vc.destroy(), null !== this.Jt && this.Jt.Ih().nn(this), this.Jt = null, null !== this.kc && (clearTimeout(this.kc), this.kc = null), this.Sc.rn() }, t.prototype.qc = function() { return this.Ac }, t.prototype.K = function() { return this.xi.backgroundColor }, t.prototype.S = function() { return v(this.Jt).I().borderColor }, t.prototype.Hc = function() { return this.xi.textColor }, t.prototype.zt = function() { return this.xi.fontSize }, t.prototype.Yc = function() { return Ft(this.zt(), this.xi.fontFamily) }, t.prototype.Kc = function() { var t = this.Nl.I(),
                            e = this.dc !== t.et,
                            n = this.Iu !== t.xt; return (e || n) && (this.Tc(t), this.dc = t.et), n && (this.Nc.Nu(), this.Iu = t.xt), t }, t.prototype.$c = function() { if (null === this.Jt) return 0; var t = 34,
                            e = this.Kc(),
                            n = Ze(this.Vc.canvas),
                            r = this.Jt.Ln();
                        n.font = this.Yc(), r.length > 0 && (t = Math.max(this.Nc.Vt(n, r[0].Tn), this.Nc.Vt(n, r[r.length - 1].Tn))); for (var i = this.Xc(), o = i.length; o--;) { var a = this.Nc.Vt(n, i[o].At());
                            a > t && (t = a) } var s = Math.ceil(e.Dt + e.Ct + e.Et + e.Lt + t); return s + s % 2 }, t.prototype.Zc = function(t) { if (t.ht < 0 || t.st < 0) throw new Error("Try to set invalid size to PriceAxisWidget " + JSON.stringify(t));
                        null !== this.yc && this.yc.an(t) || (this.yc = t, this.Vc.resizeCanvas({ width: t.ht, height: t.st }), this.Oc.resizeCanvas({ width: t.ht, height: t.st }), this.Ac.style.width = t.ht + "px", this.Ac.style.height = t.st + "px", this.Ac.style.minWidth = t.ht + "px") }, t.prototype.Jc = function() { return v(this.yc).ht }, t.prototype.li = function(t) { this.Jt !== t && (null !== this.Jt && this.Jt.Ih().nn(this), this.Jt = t, t.Ih().Zi(this.jn.bind(this), this)) }, t.prototype.Z = function() { return this.Jt }, t.prototype.Nu = function() { var t = this._i.Gc();
                        this._i.Bc().ct().sl(t, v(this.Z())) }, t.prototype.Qc = function(t) { if (null !== this.yc) { if (1 !== t) { var e = Ze(this.Vc.canvas);
                                this.tv(), this.iv(e, this.Vc.pixelRatio), this.fu(e, this.Vc.pixelRatio), this.nv(e, this.Vc.pixelRatio), this.hv(e, this.Vc.pixelRatio) } var n = Ze(this.Oc.canvas),
                                r = this.yc.ht,
                                i = this.yc.st;
                            V(n, this.Oc.pixelRatio, (function() { n.clearRect(0, 0, r, i) })), this.sv(n, this.Oc.pixelRatio) } }, t.prototype.rv = function() { return this.Vc.canvas }, t.prototype.zc = function(t) { if (null !== this.Jt && !this.Jt.Qt() && this._i.Bc().I().handleScale.axisPressedMouseMove.price) { var e = this._i.Bc().ct(),
                                n = this._i.Gc();
                            this.xc = !0, e.Jo(n, this.Jt, t.oc) } }, t.prototype.Pc = function(t) { if (null !== this.Jt && this._i.Bc().I().handleScale.axisPressedMouseMove.price) { var e = this._i.Bc().ct(),
                                n = this._i.Gc(),
                                r = this.Jt;
                            e.Go(n, r, t.oc) } }, t.prototype.Fc = function() { if (null !== this.Jt && this._i.Bc().I().handleScale.axisPressedMouseMove.price) { var t = this._i.Bc().ct(),
                                e = this._i.Gc(),
                                n = this.Jt;
                            this.xc && (this.xc = !1, t.Qo(e, n)) } }, t.prototype.Ic = function(t) { if (null !== this.Jt && this._i.Bc().I().handleScale.axisPressedMouseMove.price) { var e = this._i.Bc().ct(),
                                n = this._i.Gc();
                            this.xc = !1, e.Qo(n, this.Jt) } }, t.prototype.Wc = function(t) { this._i.Bc().I().handleScale.axisDoubleClickReset && this.Nu() }, t.prototype.Rc = function(t) { null !== this.Jt && (!this._i.Bc().ct().I().handleScale.axisPressedMouseMove.price || this.Jt.oh() || this.Jt.lh() || this.ev(1)) }, t.prototype.jc = function(t) { this.ev(0) }, t.prototype.Xc = function() { var t = this,
                            e = [],
                            n = null === this.Jt ? void 0 : this.Jt; return function(r) { for (var i = 0; i < r.length; ++i)
                                for (var o = r[i].fi(t._i.Gc(), n), a = 0; a < o.length; a++) e.push(o[a]) }(this._i.Gc().Vh()), e }, t.prototype.iv = function(t, e) { var n = this; if (null !== this.yc) { var r = this.yc.ht,
                                i = this.yc.st;
                            V(t, e, (function() { U(t, 0, 0, r, i, n.K()) })) } }, t.prototype.fu = function(t, e) { if (null !== this.yc && null !== this.Jt && this.Jt.I().borderVisible) { t.save(), t.fillStyle = this.S(); var n, r = Math.max(1, Math.floor(this.Kc().Dt * e));
                            n = this.Lc ? Math.floor(this.yc.ht * e) - r : 0, t.fillRect(n, 0, r, Math.ceil(this.yc.st * e)), t.restore() } }, t.prototype.nv = function(t, e) { if (null !== this.yc && null !== this.Jt) { var n = this.Jt.Ln();
                            t.save(), t.strokeStyle = this.S(), t.font = this.Yc(), t.fillStyle = this.S(); var r = this.Kc(),
                                i = this.Jt.I().borderVisible && this.Jt.I().drawTicks,
                                o = this.Lc ? Math.floor((this.yc.ht - r.Ct) * e - r.Dt * e) : Math.floor(r.Dt * e),
                                a = this.Lc ? Math.round(o - r.Et * e) : Math.round(o + r.Ct * e + r.Et * e),
                                s = this.Lc ? "right" : "left",
                                u = Math.max(1, Math.floor(e)),
                                c = Math.floor(.5 * e); if (i) { var l = Math.round(r.Ct * e);
                                t.beginPath(); for (var h = 0, f = n; h < f.length; h++) { var p = f[h];
                                    t.rect(o, Math.round(p.Dn * e) - c, l, u) }
                                t.fill() }
                            t.fillStyle = this.Hc(); for (var d = 0, y = n; d < y.length; d++) p = y[d], this.Sc.Mc(t, p.Tn, a, Math.round(p.Dn * e), s);
                            t.restore() } }, t.prototype.tv = function() { if (null !== this.yc && null !== this.Jt) { var t = this.yc.st / 2,
                                e = [],
                                n = this.Jt.Vh().slice(),
                                r = this._i.Gc(),
                                i = this.Kc();
                            this.Jt === r.Ci() && this._i.Gc().Vh().forEach((function(t) { r.Au(t) && n.push(t) })); var o = this.Jt.Ah()[0],
                                a = this.Jt;
                            n.forEach((function(n) { var i = n.fi(r, a);
                                i.forEach((function(t) { t.Yt(null), t.Kt() && e.push(t) })), o === n && i.length > 0 && (t = i[0].Pt()) })); var s = e.filter((function(e) { return e.Pt() <= t })),
                                u = e.filter((function(e) { return e.Pt() > t })); if (s.sort((function(t, e) { return e.Pt() - t.Pt() })), s.length && u.length && u.push(s[0]), u.sort((function(t, e) { return t.Pt() - e.Pt() })), e.forEach((function(t) { return t.Yt(t.Pt()) })), this.Jt.I().alignLabels) { for (var c = 1; c < s.length; c++) { var l = s[c],
                                        h = (p = s[c - 1]).wt(i, !1);
                                    l.Pt() > (d = p.Ht()) - h && l.Yt(d - h) } for (var f = 1; f < u.length; f++) { var p, d;
                                    l = u[f], h = (p = u[f - 1]).wt(i, !0), l.Pt() < (d = p.Ht()) + h && l.Yt(d + h) } } } }, t.prototype.hv = function(t, e) { var n = this; if (null !== this.yc) { t.save(); var r = this.yc,
                                i = this.Xc(),
                                o = this.Kc(),
                                a = this.Lc ? "right" : "left";
                            i.forEach((function(i) { if (i.$t()) { var s = i.W(v(n.Jt));
                                    t.save(), s.h(t, o, n.Nc, r.ht, a, e), t.restore() } })), t.restore() } }, t.prototype.sv = function(t, e) { var n = this; if (null !== this.yc && null !== this.Jt) { t.save(); var r = this.yc,
                                i = this._i.Bc().ct(),
                                o = [],
                                a = this._i.Gc(),
                                s = i.Il().fi(a, this.Jt);
                            s.length && o.push(s); var u = this.Kc(),
                                c = this.Lc ? "right" : "left";
                            o.forEach((function(i) { i.forEach((function(i) { t.save(), i.W(v(n.Jt)).h(t, u, n.Nc, r.ht, c, e), t.restore() })) })), t.restore() } }, t.prototype.ev = function(t) { this.Ac.style.cursor = 1 === t ? "ns-resize" : "default" }, t.prototype.jn = function() { var t = this,
                            e = this.$c(); if (this.Cc < e) { var n = this._i.Bc();
                            null === this.kc && (this.kc = setTimeout((function() { n && n.ct().Tl(), t.kc = null }), 100)) }
                        this.Cc = e }, t.prototype.Tc = function(t) { this.Sc.rn(), this.Sc = new ln(t.zt, t.et, t.ae) }, t }(),
                fn = rn,
                pn = function() {
                    function t(t, e) { var n = this;
                        this.yc = new Xe(0, 0), this.uv = null, this.av = null, this.ov = null, this.lv = !1, this.fv = new et, this.cv = 0, this.vv = !1, this._v = null, this.dv = !1, this.wv = null, this.Dc = function() { return n.Mv && n.hi().zr() }, this.Ec = function() { return n.Mv && n.hi().zr() }, this.bv = t, this.Mv = e, this.Mv.ul().Zi(this.mv.bind(this), this, !0), this.gv = document.createElement("td"), this.gv.style.padding = "0", this.gv.style.position = "relative"; var r = document.createElement("div");
                        r.style.width = "100%", r.style.height = "100%", r.style.position = "relative", r.style.overflow = "hidden", this.pv = document.createElement("td"), this.pv.style.padding = "0", this.yv = document.createElement("td"), this.yv.style.padding = "0", this.gv.appendChild(r), this.Vc = tn(r, new Xe(16, 16)), this.Vc.subscribeCanvasConfigured(this.Dc); var i = this.Vc.canvas;
                        i.style.position = "absolute", i.style.zIndex = "1", i.style.left = "0", i.style.top = "0", this.Oc = tn(r, new Xe(16, 16)), this.Oc.subscribeCanvasConfigured(this.Ec); var o = this.Oc.canvas;
                        o.style.position = "absolute", o.style.zIndex = "2", o.style.left = "0", o.style.top = "0", this.kv = document.createElement("tr"), this.kv.appendChild(this.pv), this.kv.appendChild(this.gv), this.kv.appendChild(this.yv), this.xv(); var a = this.Bc().I().handleScroll;
                        this.Uc = new on(this.Oc.canvas, this, { Pf: !a.vertTouchDrag, Ff: !a.horzTouchDrag }) } return t.prototype.rn = function() { null !== this.uv && this.uv.rn(), null !== this.av && this.av.rn(), this.Oc.unsubscribeCanvasConfigured(this.Ec), this.Oc.destroy(), this.Vc.unsubscribeCanvasConfigured(this.Dc), this.Vc.destroy(), null !== this.Mv && this.Mv.ul().nn(this), this.Uc.rn() }, t.prototype.Gc = function() { return v(this.Mv) }, t.prototype.Nv = function(e) { null !== this.Mv && this.Mv.ul().nn(this), this.Mv = e, null !== this.Mv && this.Mv.ul().Zi(t.prototype.mv.bind(this), this, !0), this.xv() }, t.prototype.Bc = function() { return this.bv }, t.prototype.qc = function() { return this.kv }, t.prototype.xv = function() { if (null !== this.Mv && (this.Sv(), 0 !== this.hi().O().length)) { if (null !== this.uv) { var t = this.Mv.Xo();
                                this.uv.li(v(t)) } if (null !== this.av) { var e = this.Mv.Zo();
                                this.av.li(v(e)) } } }, t.prototype.jo = function() { return null !== this.Mv ? this.Mv.jo() : 0 }, t.prototype.Uo = function(t) { this.Mv && this.Mv.Uo(t) }, t.prototype.Lf = function(t) { if (this.Mv) { var e = t.ac,
                                n = t.oc;
                            nn || this.Cv(e, n) } }, t.prototype.Kf = function(t) { if (this.vv = !1, this.dv = null !== this._v, this.Mv) { if (document.activeElement !== document.body && document.activeElement !== document.documentElement) v(document.activeElement).blur();
                            else { var e = document.getSelection();
                                null !== e && e.removeAllRanges() } var n = this.hi(); if (!this.Mv.Ci().Qt() && !n.U().Qt()) { if (null !== this._v) { var r = n.Il();
                                    this.wv = { x: r.Mt(), y: r.bt() }, this._v = { x: t.ac, y: t.oc } }
                                nn || this.Cv(t.ac, t.oc) } } }, t.prototype.Af = function(t) { if (this.Mv) { var e = t.ac,
                                n = t.oc; if (this.Dv() && this.Tv(), !nn) { this.Cv(e, n); var r = this.Wu(e, n);
                                this.hi().Al(r && { Vl: r.Vl, Bv: r.Bv }), null !== r && void 0 !== r._c.Ev && r._c.Ev(e, n) } } }, t.prototype.qf = function(t) { if (null !== this.Mv) { var e = t.ac,
                                n = t.oc,
                                r = this.Wu(e, n); if (null !== r && void 0 !== r._c.Lv && r._c.Lv(e, n), this.fv.sn()) { var i = this.hi().Il().j();
                                this.fv.hn(i, { x: e, y: n }) }
                            this.Av() } }, t.prototype.If = function(t) { if (null !== this.Mv) { var e = this.hi(),
                                n = t.ac,
                                r = t.oc; if (null !== this._v) { this.dv = !1; var i = v(this.wv),
                                    o = i.x + (n - this._v.x),
                                    a = i.y + (r - this._v.y);
                                this.Cv(o, a) } else this.Dv() || this.Cv(n, r); if (!e.U().Qt()) { var s = this.bv.I().handleScroll; if (s.pressedMouseMove && "touch" !== t.pe || (s.horzTouchDrag || s.vertTouchDrag) && "mouse" !== t.pe) { var u = this.Mv.Ci();
                                    null !== this.ov || this.Vv() || (this.ov = { x: t.sc, y: t.rc }), null === this.ov || this.ov.x === t.sc && this.ov.y === t.rc || this.lv || (u.Qt() || e.tl(this.Mv, u, t.oc), e.Yl(t.ac), this.lv = !0), this.lv && (u.Qt() || e.il(this.Mv, u, t.oc), e.Kl(t.ac)) } } } }, t.prototype.jf = function(t) { if (null !== this.Mv) { this.vv = !1; var e = this.hi(); if (this.lv) { var n = this.Mv.Ci();
                                e.nl(this.Mv, n), e.$l(), this.ov = null, this.lv = !1 } } }, t.prototype.hc = function(t) { if (this.vv = !0, null === this._v && fn) { var e = { x: t.ac, y: t.oc };
                            this.Ov(e, e) } }, t.prototype.nc = function(t) { null !== this.Mv && (this.Mv.ct().Al(null), rn || this.Tv()) }, t.prototype.zv = function() { return this.fv }, t.prototype.Zf = function() { this.cv = 1 }, t.prototype.Jf = function(t, e) { if (this.bv.I().handleScale.pinch) { var n = 5 * (e - this.cv);
                            this.cv = e, this.hi().ql(t.g, n) } }, t.prototype.Wu = function(t, e) { var n = this.Mv; if (null === n) return null; for (var r = 0, i = n.Vh(); r < i.length; r++) { var o = i[r],
                                a = this.Pv(o.ci(n), t, e); if (null !== a) return { Vl: o, _c: a._c, Bv: a.Bv } } return null }, t.prototype.Fv = function(t, e) { v("left" === e ? this.uv : this.av).Zc(new Xe(t, this.yc.st)) }, t.prototype.Iv = function() { return this.yc }, t.prototype.Zc = function(t) { if (t.ht < 0 || t.st < 0) throw new Error("Try to set invalid size to PaneWidget " + JSON.stringify(t));
                        this.yc.an(t) || (this.yc = t, this.Vc.resizeCanvas({ width: t.ht, height: t.st }), this.Oc.resizeCanvas({ width: t.ht, height: t.st }), this.gv.style.width = t.ht + "px", this.gv.style.height = t.st + "px") }, t.prototype.Wv = function() { var t = v(this.Mv);
                        t.$o(t.Xo()), t.$o(t.Zo()); for (var e = 0, n = t.Ah(); e < n.length; e++) { var r = n[e]; if (t.Au(r)) { var i = r.Z();
                                null !== i && t.$o(i), r.Wi() } } }, t.prototype.rv = function() { return this.Vc.canvas }, t.prototype.Qc = function(t) { if (0 !== t && null !== this.Mv) { if (t > 1 && this.Wv(), null !== this.uv && this.uv.Qc(t), null !== this.av && this.av.Qc(t), 1 !== t) { var e = Ze(this.Vc.canvas);
                                e.save(), this.iv(e, this.Rv(), this.Vc.pixelRatio), this.Mv && (this.jv(e, this.Vc.pixelRatio), this.Uv(e, this.Vc.pixelRatio), this.qv(e, this.Vc.pixelRatio)), e.restore() } var n = Ze(this.Oc.canvas);
                            n.clearRect(0, 0, Math.ceil(this.yc.ht * this.Oc.pixelRatio), Math.ceil(this.yc.st * this.Oc.pixelRatio)), this.Hv(n, this.Oc.pixelRatio) } }, t.prototype.Yv = function() { return this.uv }, t.prototype.Kv = function() { return this.av }, t.prototype.Rv = function() { return this.bv.I().layout.backgroundColor }, t.prototype.mv = function() { null !== this.Mv && this.Mv.ul().nn(this), this.Mv = null }, t.prototype.iv = function(t, e, n) { var r = this;
                        V(t, n, (function() { U(t, 0, 0, r.yc.ht, r.yc.st, e) })) }, t.prototype.jv = function(t, e) { var n = v(this.Mv),
                            r = n.al().To().W(n.wt(), n.dt());
                        null !== r && (t.save(), r.h(t, e, !1), t.restore()) }, t.prototype.Uv = function(t, e) { var n = this.hi().Fl();
                        this.$v(n, t, e), this.Xv(n, t, e) }, t.prototype.Hv = function(t, e) { this.Xv(this.hi().Il(), t, e) }, t.prototype.qv = function(t, e) { for (var n = v(this.Mv).Vh(), r = 0, i = n; r < i.length; r++) { var o = i[r];
                            this.$v(o, t, e) } for (var a = 0, s = n; a < s.length; a++) o = s[a], this.Xv(o, t, e) }, t.prototype.Xv = function(t, e, n) { for (var r = v(this.Mv), i = t.ci(r), o = r.wt(), a = r.dt(), s = r.ct().Ll(), u = null !== s && s.Vl === t, c = null !== s && u && void 0 !== s.Bv ? s.Bv.Ru : void 0, l = 0, h = i; l < h.length; l++) { var f = h[l].W(o, a);
                            null !== f && (e.save(), f.h(e, n, u, c), e.restore()) } }, t.prototype.$v = function(t, e, n) { for (var r = v(this.Mv), i = t.ci(r), o = r.wt(), a = r.dt(), s = r.ct().Ll(), u = null !== s && s.Vl === t, c = null !== s && u && void 0 !== s.Bv ? s.Bv.Ru : void 0, l = 0, h = i; l < h.length; l++) { var f = h[l].W(o, a);
                            null !== f && void 0 !== f.o && (e.save(), f.o(e, n, u, c), e.restore()) } }, t.prototype.Pv = function(t, e, n) { for (var r = 0, i = t; r < i.length; r++) { var o = i[r],
                                a = o.W(this.yc.st, this.yc.ht); if (null !== a && a.Wu) { var s = a.Wu(e, n); if (null !== s) return { _c: o, Bv: s } } } return null }, t.prototype.Sv = function() { if (null !== this.Mv) { var t = this.bv;
                            t.I().leftPriceScale.visible || null === this.uv || (this.pv.removeChild(this.uv.qc()), this.uv.rn(), this.uv = null), t.I().rightPriceScale.visible || null === this.av || (this.yv.removeChild(this.av.qc()), this.av.rn(), this.av = null); var e = t.ct().if();
                            t.I().leftPriceScale.visible && null === this.uv && (this.uv = new hn(this, t.I().layout, e, "left"), this.pv.appendChild(this.uv.qc())), t.I().rightPriceScale.visible && null === this.av && (this.av = new hn(this, t.I().layout, e, "right"), this.yv.appendChild(this.av.qc())) } }, t.prototype.Dv = function() { return fn && null === this._v }, t.prototype.Vv = function() { return fn && this.vv || null !== this._v }, t.prototype.Zv = function(t) { return Math.max(0, Math.min(t, this.yc.ht - 1)) }, t.prototype.Jv = function(t) { return Math.max(0, Math.min(t, this.yc.st - 1)) }, t.prototype.Cv = function(t, e) { this.hi().Jl(this.Zv(t), this.Jv(e), v(this.Mv)) }, t.prototype.Tv = function() { this.hi().Ql() }, t.prototype.Av = function() { this.dv && (this._v = null, this.Tv()) }, t.prototype.Ov = function(t, e) { this._v = t, this.dv = !1, this.Cv(e.x, e.y); var n = this.hi().Il();
                        this.wv = { x: n.Mt(), y: n.bt() } }, t.prototype.hi = function() { return this.bv.ct() }, t }(),
                dn = function() {
                    function t(t, e, n, r) { var i = this;
                        this.B = !0, this.yc = new Xe(0, 0), this.Dc = function() { return i.Qc(3) }, this.Lc = "left" === t, this.Nl = n.if, this.xi = e, this.Gv = r, this.Ac = document.createElement("div"), this.Ac.style.width = "25px", this.Ac.style.height = "100%", this.Ac.style.overflow = "hidden", this.Vc = tn(this.Ac, new Xe(16, 16)), this.Vc.subscribeCanvasConfigured(this.Dc) } return t.prototype.rn = function() { this.Vc.unsubscribeCanvasConfigured(this.Dc), this.Vc.destroy() }, t.prototype.qc = function() { return this.Ac }, t.prototype.Iv = function() { return this.yc }, t.prototype.Zc = function(t) { if (t.ht < 0 || t.st < 0) throw new Error("Try to set invalid size to PriceAxisStub " + JSON.stringify(t));
                        this.yc.an(t) || (this.yc = t, this.Vc.resizeCanvas({ width: t.ht, height: t.st }), this.Ac.style.width = t.ht + "px", this.Ac.style.minWidth = t.ht + "px", this.Ac.style.height = t.st + "px", this.B = !0) }, t.prototype.Qc = function(t) { if ((!(t < 3) || this.B) && 0 !== this.yc.ht && 0 !== this.yc.st) { this.B = !1; var e = Ze(this.Vc.canvas);
                            this.iv(e, this.Vc.pixelRatio), this.fu(e, this.Vc.pixelRatio) } }, t.prototype.rv = function() { return this.Vc.canvas }, t.prototype.fu = function(t, e) { if (this.Gv()) { var n = this.yc.ht;
                            t.save(), t.fillStyle = this.xi.timeScale.borderColor; var r = Math.floor(this.Nl.I().Dt * e),
                                i = this.Lc ? Math.round(n * e) - r : 0;
                            t.fillRect(i, 0, r, r), t.restore() } }, t.prototype.iv = function(t, e) { var n = this;
                        V(t, e, (function() { U(t, 0, 0, n.yc.ht, n.yc.st, n.xi.layout.backgroundColor) })) }, t }();

            function yn(t, e) { return t.Fs > e.Fs ? t : e } var vn = function() {
                    function t(t) { var e = this;
                        this.Qv = null, this.t_ = null, this.ue = null, this.i_ = !1, this.yc = new Xe(0, 0), this.Dc = function() { return e.bv.ct().zr() }, this.Ec = function() { return e.bv.ct().zr() }, this.bv = t, this.xi = t.I().layout, this.n_ = document.createElement("tr"), this.h_ = document.createElement("td"), this.h_.style.padding = "0", this.s_ = document.createElement("td"), this.s_.style.padding = "0", this.Ac = document.createElement("td"), this.Ac.style.height = "25px", this.Ac.style.padding = "0", this.r_ = document.createElement("div"), this.r_.style.width = "100%", this.r_.style.height = "100%", this.r_.style.position = "relative", this.r_.style.overflow = "hidden", this.Ac.appendChild(this.r_), this.Vc = tn(this.r_, new Xe(16, 16)), this.Vc.subscribeCanvasConfigured(this.Dc); var n = this.Vc.canvas;
                        n.style.position = "absolute", n.style.zIndex = "1", n.style.left = "0", n.style.top = "0", this.Oc = tn(this.r_, new Xe(16, 16)), this.Oc.subscribeCanvasConfigured(this.Ec); var r = this.Oc.canvas;
                        r.style.position = "absolute", r.style.zIndex = "2", r.style.left = "0", r.style.top = "0", this.n_.appendChild(this.h_), this.n_.appendChild(this.Ac), this.n_.appendChild(this.s_), this.e_(), this.bv.ct().Ro().Zi(this.e_.bind(this), this), this.Uc = new on(this.Oc.canvas, this, { Pf: !0, Ff: !1 }) } return t.prototype.rn = function() { this.Uc.rn(), null !== this.Qv && this.Qv.rn(), null !== this.t_ && this.t_.rn(), this.Oc.unsubscribeCanvasConfigured(this.Ec), this.Oc.destroy(), this.Vc.unsubscribeCanvasConfigured(this.Dc), this.Vc.destroy() }, t.prototype.qc = function() { return this.n_ }, t.prototype.u_ = function() { return this.Qv }, t.prototype.a_ = function() { return this.t_ }, t.prototype.Kf = function(t) { if (!this.i_) { this.i_ = !0; var e = this.bv.ct();!e.U().Qt() && this.bv.I().handleScale.axisPressedMouseMove.time && e.Ul(t.ac) } }, t.prototype.$f = function() { var t = this.bv.ct();!t.U().Qt() && this.i_ && (this.i_ = !1, this.bv.I().handleScale.axisPressedMouseMove.time && t.Zl()) }, t.prototype.If = function(t) { var e = this.bv.ct();!e.U().Qt() && this.bv.I().handleScale.axisPressedMouseMove.time && e.Xl(t.ac) }, t.prototype.jf = function(t) { this.i_ = !1; var e = this.bv.ct();
                        e.U().Qt() && !this.bv.I().handleScale.axisPressedMouseMove.time || e.Zl() }, t.prototype.Uf = function() { this.bv.I().handleScale.axisDoubleClickReset && this.bv.ct().ke() }, t.prototype.Lf = function(t) { this.bv.ct().I().handleScale.axisPressedMouseMove.time && this.ev(1) }, t.prototype.nc = function(t) { this.ev(0) }, t.prototype.Iv = function() { return this.yc }, t.prototype.o_ = function(t, e, n) { this.yc && this.yc.an(t) || (this.yc = t, this.Vc.resizeCanvas({ width: t.ht, height: t.st }), this.Oc.resizeCanvas({ width: t.ht, height: t.st }), this.Ac.style.width = t.ht + "px", this.Ac.style.height = t.st + "px"), null !== this.Qv && this.Qv.Zc(new Xe(e, t.st)), null !== this.t_ && this.t_.Zc(new Xe(n, t.st)) }, t.prototype.l_ = function() { var t = this.f_(); return Math.ceil(t.Dt + t.Ct + t.zt + t.Tt + t.Bt) }, t.prototype.V = function() { this.bv.ct().U().Ln() }, t.prototype.rv = function() { return this.Vc.canvas }, t.prototype.Qc = function(t) { if (0 !== t) { if (1 !== t) { var e = Ze(this.Vc.canvas);
                                this.iv(e, this.Vc.pixelRatio), this.fu(e, this.Vc.pixelRatio), this.nv(e, this.Vc.pixelRatio), null !== this.Qv && this.Qv.Qc(t), null !== this.t_ && this.t_.Qc(t) } var n = Ze(this.Oc.canvas),
                                r = this.Oc.pixelRatio;
                            n.clearRect(0, 0, Math.ceil(this.yc.ht * r), Math.ceil(this.yc.st * r)), this.c_([this.bv.ct().Il()], n, r) } }, t.prototype.iv = function(t, e) { var n = this;
                        V(t, e, (function() { U(t, 0, 0, n.yc.ht, n.yc.st, n.Rv()) })) }, t.prototype.fu = function(t, e) { if (this.bv.I().timeScale.borderVisible) { t.save(), t.fillStyle = this.v_(); var n = Math.max(1, Math.floor(this.f_().Dt * e));
                            t.fillRect(0, 0, Math.ceil(this.yc.ht * e), n), t.restore() } }, t.prototype.nv = function(t, e) { var n = this,
                            r = this.bv.ct().U().Ln(); if (r && 0 !== r.length) { var i = r.reduce(yn, r[0]).Fs;
                            i > 30 && i < 40 && (i = 30), t.save(), t.strokeStyle = this.v_(); var o = this.f_(),
                                a = o.Dt + o.Ct + o.Tt + o.zt - o.Ot;
                            t.textAlign = "center", t.fillStyle = this.v_(); var s = Math.floor(this.f_().Dt * e),
                                u = Math.max(1, Math.floor(e)),
                                c = Math.floor(.5 * e); if (this.bv.ct().U().I().borderVisible) { t.beginPath(); for (var l = Math.round(o.Ct * e), h = r.length; h--;) { var f = Math.round(r[h].Dn * e);
                                    t.rect(f - c, s, u, l) }
                                t.fill() }
                            t.fillStyle = this.fe(), V(t, e, (function() { t.font = n.__(); for (var e = 0, o = r; e < o.length; e++)(c = o[e]).Fs < i && t.fillText(c.Tn, c.Dn, a);
                                t.font = n.d_(); for (var s = 0, u = r; s < u.length; s++) { var c;
                                    (c = u[s]).Fs >= i && t.fillText(c.Tn, c.Dn, a) } })) } }, t.prototype.c_ = function(t, e, n) { for (var r = this.f_(), i = 0, o = t; i < o.length; i++)
                            for (var a = 0, s = o[i].vi(); a < s.length; a++) { var u = s[a];
                                e.save(), u.W().h(e, r, n), e.restore() } }, t.prototype.Rv = function() { return this.xi.backgroundColor }, t.prototype.v_ = function() { return this.bv.I().timeScale.borderColor }, t.prototype.fe = function() { return this.xi.textColor }, t.prototype.oe = function() { return this.xi.fontSize }, t.prototype.__ = function() { return Ft(this.oe(), this.xi.fontFamily) }, t.prototype.d_ = function() { return Ft(this.oe(), this.xi.fontFamily, "bold") }, t.prototype.f_ = function() { null === this.ue && (this.ue = { Dt: 1, Ot: NaN, Tt: NaN, Bt: NaN, ni: NaN, Ct: 3, zt: NaN, xt: "", ii: new fe }); var t = this.ue,
                            e = this.__(); if (t.xt !== e) { var n = this.oe();
                            t.zt = n, t.xt = e, t.Tt = Math.ceil(n / 2.5), t.Bt = t.Tt, t.ni = Math.ceil(n / 2), t.Ot = Math.round(this.oe() / 5), t.ii.Nu() } return this.ue }, t.prototype.ev = function(t) { this.Ac.style.cursor = 1 === t ? "ew-resize" : "default" }, t.prototype.e_ = function() { var t = this.bv.ct(),
                            e = t.I();
                        e.leftPriceScale.visible || null === this.Qv || (this.h_.removeChild(this.Qv.qc()), this.Qv.rn(), this.Qv = null), e.rightPriceScale.visible || null === this.t_ || (this.s_.removeChild(this.t_.qc()), this.t_.rn(), this.t_ = null); var n = { if: this.bv.ct().if() }; if (e.leftPriceScale.visible && null === this.Qv) { var r = function() { return e.leftPriceScale.borderVisible && t.U().I().borderVisible };
                            this.Qv = new dn("left", this.bv.I(), n, r), this.h_.appendChild(this.Qv.qc()) }
                        e.rightPriceScale.visible && null === this.t_ && (r = function() { return e.rightPriceScale.borderVisible && t.U().I().borderVisible }, this.t_ = new dn("right", this.bv.I(), n, r), this.s_.appendChild(this.t_.qc())) }, t }(),
                gn = function() {
                    function t(t, e) { var n;
                        this.w_ = [], this.M_ = 0, this.An = 0, this.Ys = 0, this.b_ = 0, this.m_ = 0, this.g_ = null, this.p_ = !1, this.fv = new et, this.kl = new et, this.xi = e, this.n_ = document.createElement("div"), this.n_.classList.add("tv-lightweight-charts"), this.n_.style.overflow = "hidden", this.n_.style.width = "100%", this.n_.style.height = "100%", (n = this.n_).style.userSelect = "none", n.style.webkitUserSelect = "none", n.style.msUserSelect = "none", n.style.MozUserSelect = "none", n.style.webkitTapHighlightColor = "transparent", this.y_ = document.createElement("table"), this.y_.setAttribute("cellspacing", "0"), this.n_.appendChild(this.y_), this.k_ = this.x_.bind(this), this.n_.addEventListener("wheel", this.k_, { passive: !1 }), this.hi = new Ge(this.xl.bind(this), this.xi), this.ct().Wl().Zi(this.N_.bind(this), this), this.S_ = new vn(this), this.y_.appendChild(this.S_.qc()); var r = this.xi.width,
                            i = this.xi.height; if (0 === r || 0 === i) { var o = t.getBoundingClientRect();
                            0 === r && (r = Math.floor(o.width), r -= r % 2), 0 === i && (i = Math.floor(o.height), i -= i % 2) }
                        this.C_(r, i), this.D_(), t.appendChild(this.n_), this.T_(), this.hi.U().Xr().Zi(this.hi.Tl.bind(this.hi), this), this.hi.Ro().Zi(this.hi.Tl.bind(this.hi), this) } return t.prototype.ct = function() { return this.hi }, t.prototype.I = function() { return this.xi }, t.prototype.B_ = function() { return this.w_ }, t.prototype.rn = function() { this.n_.removeEventListener("wheel", this.k_), 0 !== this.M_ && window.cancelAnimationFrame(this.M_), this.hi.Wl().nn(this), this.hi.U().Xr().nn(this), this.hi.Ro().nn(this), this.hi.rn(); for (var t = 0, e = this.w_; t < e.length; t++) { var n = e[t];
                            this.y_.removeChild(n.qc()), n.zv().nn(this), n.rn() }
                        this.w_ = [], v(this.S_).rn(), null !== this.n_.parentElement && this.n_.parentElement.removeChild(this.n_), this.kl.rn(), this.fv.rn() }, t.prototype.C_ = function(t, e, n) { if (void 0 === n && (n = !1), this.An !== e || this.Ys !== t) { this.An = e, this.Ys = t; var r = e + "px",
                                i = t + "px";
                            v(this.n_).style.height = r, v(this.n_).style.width = i, this.y_.style.height = r, this.y_.style.width = i, n ? this.E_(new Ut(3)) : this.hi.Tl() } }, t.prototype.Qc = function(t) { void 0 === t && (t = new Ut(3)); for (var e = 0; e < this.w_.length; e++) this.w_[e].Qc(t.me(e).Me);
                        this.S_.Qc(t.be()) }, t.prototype.hh = function(t) { this.hi.hh(t), this.T_(); var e = t.width || this.Ys,
                            n = t.height || this.An;
                        this.C_(e, n) }, t.prototype.zv = function() { return this.fv }, t.prototype.Wl = function() { return this.kl }, t.prototype.L_ = function() { var t = this;
                        null !== this.g_ && (this.E_(this.g_), this.g_ = null); var e = this.w_[0],
                            n = Ke(document, new Xe(this.Ys, this.An)),
                            r = Ze(n),
                            i = Qe(n); return V(r, i, (function() { var n = 0,
                                i = 0,
                                o = function(e) { for (var o = 0; o < t.w_.length; o++) { var a = t.w_[o],
                                            s = a.Iv().st,
                                            u = v("left" === e ? a.Yv() : a.Kv()),
                                            c = u.rv();
                                        r.drawImage(c, n, i, u.Jc(), s), i += s } };
                            t.A_() && (o("left"), n = v(e.Yv()).Jc()), i = 0; for (var a = 0; a < t.w_.length; a++) { var s = t.w_[a],
                                    u = s.Iv(),
                                    c = s.rv();
                                r.drawImage(c, n, i, u.ht, u.st), i += u.st }
                            n += e.Iv().ht, t.V_() && (i = 0, o("right")); var l = function(e) { var o = v("left" === e ? t.S_.u_() : t.S_.a_()),
                                    a = o.Iv(),
                                    s = o.rv();
                                r.drawImage(s, n, i, a.ht, a.st) }; if (t.xi.timeScale.visible) { n = 0, t.A_() && (l("left"), n = v(e.Yv()).Jc()); var h = t.S_.Iv();
                                c = t.S_.rv(), r.drawImage(c, n, i, h.ht, h.st), t.V_() && (n += e.Iv().ht, l("right"), r.restore()) } })), n }, t.prototype.O_ = function(t) { return "none" === t || "left" === t && !this.A_() || "right" === t && !this.V_() || 0 === this.w_.length ? 0 : v("left" === t ? this.w_[0].Yv() : this.w_[0].Kv()).Jc() }, t.prototype.z_ = function() { for (var t = 0, e = 0, n = 0, r = 0, i = this.w_; r < i.length; r++) { var o = i[r];
                            this.A_() && (e = Math.max(e, v(o.Yv()).$c())), this.V_() && (n = Math.max(n, v(o.Kv()).$c())), t += o.jo() } var a = this.Ys,
                            s = this.An,
                            u = Math.max(a - e - n, 0),
                            c = this.xi.timeScale.visible ? this.S_.l_() : 0;
                        c % 2 && (c += 1); for (var l = 0 + c, h = s < l ? 0 : s - l, f = h / t, p = 0, d = 0; d < this.w_.length; ++d) {
                            (o = this.w_[d]).Nv(this.hi.Pl()[d]); var y, g;
                            g = d === this.w_.length - 1 ? h - p : Math.round(o.jo() * f), p += y = Math.max(g, 2), o.Zc(new Xe(u, y)), this.A_() && o.Fv(e, "left"), this.V_() && o.Fv(n, "right"), o.Gc() && this.hi.Rl(o.Gc(), y) }
                        this.S_.o_(new Xe(u, c), e, n), this.hi.Cr(u), this.b_ !== e && (this.b_ = e), this.m_ !== n && (this.m_ = n) }, t.prototype.x_ = function(t) { var e = t.deltaX / 100,
                            n = -t.deltaY / 100; if (0 !== e && this.xi.handleScroll.mouseWheel || 0 !== n && this.xi.handleScale.mouseWheel) { switch (t.cancelable && t.preventDefault(), t.deltaMode) {
                                case t.DOM_DELTA_PAGE:
                                    e *= 120, n *= 120; break;
                                case t.DOM_DELTA_LINE:
                                    e *= 32, n *= 32 } if (0 !== n && this.xi.handleScale.mouseWheel) { var r = Math.sign(n) * Math.min(1, Math.abs(n)),
                                    i = t.clientX - this.n_.getBoundingClientRect().left;
                                this.ct().ql(i, r) }
                            0 !== e && this.xi.handleScroll.mouseWheel && this.ct().Hl(-80 * e) } }, t.prototype.E_ = function(t) { var e = t.be(); if (3 === e && this.P_(), 3 === e || 2 === e) { for (var n = this.hi.Pl(), r = 0; r < n.length; r++) t.me(r).fh && n[r].rl(); for (var i = t.xe(), o = 0, a = i; o < a.length; o++) { var s = a[o];
                                this.Ne(s) }
                            i.length > 0 && (this.hi.Or(), this.hi.ro(), this.hi.zr()), this.S_.V() }
                        this.Qc(t) }, t.prototype.Ne = function(t) { var e = this.hi.U(); switch (t.pe) {
                            case 0:
                                e.Jr(); break;
                            case 1:
                                e.Gr(t.J); break;
                            case 2:
                                e._r(t.J); break;
                            case 3:
                                e.dr(t.J); break;
                            case 4:
                                e.Wr() } }, t.prototype.xl = function(t) { var e = this;
                        null !== this.g_ ? this.g_.vn(t) : this.g_ = t, this.p_ || (this.p_ = !0, this.M_ = window.requestAnimationFrame((function() { e.p_ = !1, e.M_ = 0, null !== e.g_ && (e.E_(e.g_), e.g_ = null) }))) }, t.prototype.P_ = function() { this.D_() }, t.prototype.D_ = function() { for (var t = this.hi.Pl(), e = t.length, n = this.w_.length, r = e; r < n; r++) { var i = y(this.w_.pop());
                            this.y_.removeChild(i.qc()), i.zv().nn(this), i.rn() } for (r = n; r < e; r++)(i = new pn(this, t[r])).zv().Zi(this.F_.bind(this), this), this.w_.push(i), this.y_.insertBefore(i.qc(), this.S_.qc()); for (r = 0; r < e; r++) { var o = t[r];
                            (i = this.w_[r]).Gc() !== o ? i.Nv(o) : i.xv() }
                        this.T_(), this.z_() }, t.prototype.I_ = function(t, e) { var n, r = new Map; if (null !== t && this.hi.O().forEach((function(e) { var n = e.ta(t);
                                null !== n && r.set(e, n) })), null !== t) { var i = this.hi.U().si(t);
                            null !== i && (n = i) } var o = this.ct().Ll(),
                            a = null !== o && o.Vl instanceof ze ? o.Vl : void 0,
                            s = null !== o && void 0 !== o.Bv ? o.Bv.Uu : void 0; return { P: n, W_: e || void 0, R_: a, j_: r, U_: s } }, t.prototype.F_ = function(t, e) { var n = this;
                        this.fv.hn((function() { return n.I_(t, e) })) }, t.prototype.N_ = function(t, e) { var n = this;
                        this.kl.hn((function() { return n.I_(t, e) })) }, t.prototype.T_ = function() { var t = this.xi.timeScale.visible ? "" : "none";
                        this.S_.qc().style.display = t }, t.prototype.A_ = function() { return this.xi.leftPriceScale.visible }, t.prototype.V_ = function() { return this.xi.rightPriceScale.visible }, t }();

            function bn(t, e, n) { var r = n.value,
                    i = { Ps: e, P: t, J: [r, r, r, r] }; return "color" in n && void 0 !== n.color && (i.et = n.color), i }

            function mn(t, e, n) { return { Ps: e, P: t, J: [n.open, n.high, n.low, n.close] } }

            function xn(t) { return void 0 !== t.J }

            function wn(t) { return function(e, n, r) { return void 0 === (i = r).open && void 0 === i.value ? { P: e, Ps: n } : t(e, n, r); var i } } var On = { Candlestick: wn(mn), Bar: wn(mn), Area: wn(bn), Histogram: wn(bn), Line: wn(bn) };

            function _n(t) { return On[t] }

            function Mn(t) { return 60 * t * 60 * 1e3 }

            function jn(t) { return 60 * t * 1e3 } var Sn = [{ q_: 1, Fs: 20 }, { q_: (1, 1e3), Fs: 19 }, { q_: jn(1), Fs: 20 }, { q_: jn(5), Fs: 21 }, { q_: jn(30), Fs: 22 }, { q_: Mn(1), Fs: 30 }, { q_: Mn(3), Fs: 31 }, { q_: Mn(6), Fs: 32 }, { q_: Mn(12), Fs: 33 }];

            function En(t, e) { if (null !== e) { var n = new Date(1e3 * e),
                        r = new Date(1e3 * t); if (r.getUTCFullYear() !== n.getUTCFullYear()) return 70; if (r.getUTCMonth() !== n.getUTCMonth()) return 60; if (r.getUTCDate() !== n.getUTCDate()) return 50; for (var i = Sn.length - 1; i >= 0; --i)
                        if (Math.floor(n.getTime() / Sn[i].q_) !== Math.floor(r.getTime() / Sn[i].q_)) return Sn[i].Fs } return 20 }

            function kn(t) { if (!Rt(t)) throw new Error("time must be of type BusinessDay"); var e = new Date(Date.UTC(t.year, t.month - 1, t.day, 0, 0, 0, 0)); return { Cs: Math.round(e.getTime() / 1e3), Ss: t } }

            function An(t) { if (!Lt(t)) throw new Error("time must be of type isUTCTimestamp"); return { Cs: t } }

            function Pn(t) { return 0 === t.length ? null : Rt(t[0].time) ? kn : An }

            function Cn(t) { return Lt(t) ? An(t) : Rt(t) ? kn(t) : kn(Tn(t)) }

            function Tn(t) { var e = new Date(t); if (isNaN(e.getTime())) throw new Error("Invalid date string=" + t + ", expected format=yyyy-mm-dd"); return { day: e.getUTCDate(), month: e.getUTCMonth() + 1, year: e.getUTCFullYear() } }

            function In(t) { w(t.time) && (t.time = Tn(t.time)) }

            function Nn(t) { return { Ps: 0, H_: new Map, Fh: t } } var Dn = function() {
                    function t() { this.Y_ = new Map, this.K_ = new Map, this.X_ = new Map, this.Z_ = [] } return t.prototype.rn = function() { this.Y_.clear(), this.K_.clear(), this.X_.clear(), this.Z_ = [] }, t.prototype.J_ = function(t, e) { var n = this;
                        this.X_.has(t) && this.Y_.forEach((function(e) { return e.H_.delete(t) })); var r = []; if (0 !== e.length) {! function(t) { t.forEach(In) }(e); var i = v(Pn(e)),
                                o = _n(t.da());
                            r = e.map((function(e) { var r = i(e.time),
                                    a = n.Y_.get(r.Cs);
                                void 0 === a && (a = Nn(r), n.Y_.set(r.Cs, a)); var s = o(r, a.Ps, e); return a.H_.set(t, s), s })) } return this.G_(), this.Q_(t, r), this.td(t) }, t.prototype.sf = function(t) { return this.J_(t, []) }, t.prototype.nd = function(t, e) { In(e); var n = v(Pn([e]))(e.time),
                            r = this.X_.get(t); if (void 0 !== r && n.Cs < r.Cs) throw new Error("Cannot update oldest data, last time=" + r.Cs + ", new time=" + n.Cs); var i = this.Y_.get(n.Cs),
                            o = void 0 === i;
                        void 0 === i && (i = Nn(n), this.Y_.set(n.Cs, i)); var a = _n(t.da())(n, i.Ps, e);
                        i.H_.set(t, a); var s = this.hd(t, a); if (!o) { var u = new Map; return null !== s && u.set(t, s), { sd: u, U: { Er: this.rd() } } } return this.td(t) }, t.prototype.hd = function(t, e) { var n = this.K_.get(t);
                        void 0 === n && (n = [], this.K_.set(t, n)); var r = 0 !== n.length ? n[n.length - 1] : null,
                            i = null; return null === r || e.P.Cs > r.P.Cs ? xn(e) && (n.push(e), i = { Tl: !1, ed: [e] }) : xn(e) ? (n[n.length - 1] = e, i = { Tl: !1, ed: [e] }) : (n.splice(-1, 1), i = { Tl: !0, ed: n }), this.X_.set(t, e.P), i }, t.prototype.Q_ = function(t, e) { 0 !== e.length ? (this.K_.set(t, e.filter(xn)), this.X_.set(t, e[e.length - 1].P)) : (this.K_.delete(t), this.X_.delete(t)) }, t.prototype.G_ = function() { var t = new Map;
                        this.Y_.forEach((function(e, n) { e.H_.size > 0 && t.set(n, e) })), this.Y_ = t }, t.prototype.ud = function(t) { for (var e = -1, n = 0; n < this.Z_.length && n < t.length; ++n) { var r = this.Z_[n],
                                i = t[n]; if (r.P.Cs !== i.P.Cs) { e = n; break }
                            i.zs = r.zs } if (-1 === e && this.Z_.length !== t.length && (e = Math.min(this.Z_.length, t.length)), -1 === e) return -1; var o = function(e) { var n = y(a.Y_.get(t[e].P.Cs));
                                n.Ps = e, n.H_.forEach((function(t) { t.Ps = e })) },
                            a = this; for (n = e; n < t.length; ++n) o(n); return function(t, e) { void 0 === e && (e = 0); for (var n = 0 === e || 0 === t.length ? null : t[e - 1].P.Cs, r = 0, i = e; i < t.length; ++i) { var o = t[i];
                                o.zs = En(o.P.Cs, n), r += o.P.Cs - (n || o.P.Cs), n = o.P.Cs } if (0 === e && t.length > 1) { var a = Math.ceil(r / (t.length - 1)),
                                    s = t[0].P.Cs - a;
                                t[0].zs = En(t[0].P.Cs, s) } }(t, e), this.Z_ = t, e }, t.prototype.rd = function() { if (0 === this.K_.size) return null; var t = 0; return this.K_.forEach((function(e) { 0 !== e.length && (t = Math.max(t, e[e.length - 1].Ps)) })), t }, t.prototype.td = function(t) { var e = Array.from(this.Y_.values()).map((function(t) { return { zs: 0, P: t.Fh } }));
                        e.sort((function(t, e) { return t.P.Cs - e.P.Cs })); var n = this.ud(e),
                            r = { sd: new Map, U: { Er: this.rd() } }; if (-1 !== n) this.K_.forEach((function(t, e) { r.sd.set(e, { ed: t, Tl: !0 }) })), this.K_.has(t) || r.sd.set(t, { ed: [], Tl: !0 }), r.U.ad = this.Z_;
                        else { var i = this.K_.get(t);
                            r.sd.set(t, { ed: i || [], Tl: !0 }) } return r }, t }(),
                Rn = { color: "#FF0000", price: 0, lineStyle: 2, lineWidth: 1, axisLabelVisible: !0, title: "" },
                Ln = function() {
                    function t(t) { this.la = t } return t.prototype.applyOptions = function(t) { this.la.hh(t) }, t.prototype.options = function() { return this.la.I() }, t.prototype.od = function() { return this.la }, t }();

            function Bn(t) { var e = t.overlay,
                    n = function(t, e) { var n = {}; for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]); if (null != t && "function" == typeof Object.getOwnPropertySymbols) { var i = 0; for (r = Object.getOwnPropertySymbols(t); i < r.length; i++) e.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[i]) && (n[r[i]] = t[r[i]]) } return n }(t, ["overlay"]); return e && (n.priceScaleId = ""), n } var Fn = function() {
                    function t(t, e, n) { this.Fe = t, this.ld = e, this.fd = n } return t.prototype.priceFormatter = function() { return this.Fe.Yh() }, t.prototype.priceToCoordinate = function(t) { var e = this.Fe.Y(); return null === e ? null : this.Fe.Z().X(t, e.J) }, t.prototype.coordinateToPrice = function(t) { var e = this.Fe.Y(); return null === e ? null : this.Fe.Z().Di(t, e.J) }, t.prototype.barsInLogicalRange = function(t) { if (null === t) return null; var e = new Nt(new Pt(t.from, t.to)).Us(),
                            n = this.Fe.qi(); if (n.Qt()) return null; var r = n.Ea(e.hs(), 1),
                            i = n.Ea(e.ss(), -1),
                            o = v(n.Da()),
                            a = v(n.Ui()); if (null !== r && null !== i && r.Ps > i.Ps) return { barsBefore: t.from - o, barsAfter: a - t.to }; var s = { barsBefore: null === r || r.Ps === o ? t.from - o : r.Ps - o, barsAfter: null === i || i.Ps === a ? a - t.to : a - i.Ps }; return null !== r && null !== i && (s.from = r.P.Ss || r.P.Cs, s.to = i.P.Ss || i.P.Cs), s }, t.prototype.setData = function(t) { this.Fe.da(), this.ld.vd(this.Fe, t) }, t.prototype.update = function(t) { this.Fe.da(), this.ld.uo(this.Fe, t) }, t.prototype.setMarkers = function(t) { var e = t.map((function(t) { return f(f({}, t), { time: Cn(t.time) }) }));
                        this.Fe.lo(e) }, t.prototype.applyOptions = function(t) { var e = Bn(t);
                        this.Fe.hh(e) }, t.prototype.options = function() { return _(this.Fe.I()) }, t.prototype.priceScale = function() { return this.fd.priceScale(this.Fe.Z().nh()) }, t.prototype.createPriceLine = function(t) { var e = b(_(Rn), t),
                            n = this.Fe.fo(e); return new Ln(n) }, t.prototype.removePriceLine = function(t) { this.Fe.co(t.od()) }, t.prototype.seriesType = function() { return this.Fe.da() }, t }(),
                zn = function(t) {
                    function e() { return null !== t && t.apply(this, arguments) || this } return h(e, t), e.prototype.applyOptions = function(e) { _t(e), t.prototype.applyOptions.call(this, e) }, e }(Fn),
                Vn = { autoScale: !0, mode: 0, invertScale: !1, alignLabels: !0, borderVisible: !0, borderColor: "#2B2B43", entireTextOnly: !1, visible: !1, drawTicks: !0, scaleMargins: { bottom: .1, top: .2 } },
                Un = { color: "rgba(0, 0, 0, 0)", visible: !1, fontSize: 48, fontFamily: Bt, fontStyle: "", text: "", horzAlign: "center", vertAlign: "center" },
                Wn = { width: 0, height: 0, layout: { backgroundColor: "#FFFFFF", textColor: "#191919", fontSize: 11, fontFamily: Bt }, crosshair: { vertLine: { color: "#758696", width: 1, style: 3, visible: !0, labelVisible: !0, labelBackgroundColor: "#4c525e" }, horzLine: { color: "#758696", width: 1, style: 3, visible: !0, labelVisible: !0, labelBackgroundColor: "#4c525e" }, mode: 1 }, grid: { vertLines: { color: "#D6DCDE", style: 0, visible: !0 }, horzLines: { color: "#D6DCDE", style: 0, visible: !0 } }, overlayPriceScales: f({}, Vn), leftPriceScale: f(f({}, Vn), { visible: !1 }), rightPriceScale: f(f({}, Vn), { visible: !0 }), timeScale: { rightOffset: 0, barSpacing: 6, minBarSpacing: .5, fixLeftEdge: !1, fixRightEdge: !1, lockVisibleTimeRangeOnResize: !1, rightBarStaysOnScroll: !1, borderVisible: !0, borderColor: "#2B2B43", visible: !0, timeVisible: !1, secondsVisible: !0, shiftVisibleRangeOnNewBar: !0 }, watermark: Un, localization: { locale: en ? navigator.language : "", dateFormat: "dd MMM 'yy" }, handleScroll: { mouseWheel: !0, pressedMouseMove: !0, horzTouchDrag: !0, vertTouchDrag: !0 }, handleScale: { axisPressedMouseMove: { time: !0, price: !0 }, axisDoubleClickReset: !0, mouseWheel: !0, pinch: !0 } },
                Hn = { upColor: "#26a69a", downColor: "#ef5350", wickVisible: !0, borderVisible: !0, borderColor: "#378658", borderUpColor: "#26a69a", borderDownColor: "#ef5350", wickColor: "#737375", wickUpColor: "#26a69a", wickDownColor: "#ef5350" },
                qn = { upColor: "#26a69a", downColor: "#ef5350", openVisible: !0, thinBars: !0 },
                Yn = { color: "#2196f3", lineStyle: 0, lineWidth: 3, lineType: 0, crosshairMarkerVisible: !0, crosshairMarkerRadius: 4, crosshairMarkerBorderColor: "", crosshairMarkerBackgroundColor: "" },
                $n = { topColor: "rgba( 46, 220, 135, 0.4)", bottomColor: "rgba( 40, 221, 100, 0)", lineColor: "#33D778", lineStyle: 0, lineWidth: 3, lineType: 0, crosshairMarkerVisible: !0, crosshairMarkerRadius: 4, crosshairMarkerBorderColor: "", crosshairMarkerBackgroundColor: "" },
                Jn = { color: "#26a69a", base: 0 },
                Gn = { title: "", visible: !0, lastValueVisible: !0, priceLineVisible: !0, priceLineSource: 0, priceLineWidth: 1, priceLineColor: "", priceLineStyle: 2, baseLineVisible: !0, baseLineWidth: 1, baseLineColor: "#B2B5BE", baseLineStyle: 0, priceFormat: { type: "price", precision: 2, minMove: .01 } },
                Xn = function() {
                    function t(t, e) { this._d = t, this.dd = e } return t.prototype.applyOptions = function(t) { this._d.ct().Ol(this.dd, t) }, t.prototype.options = function() { return this.Jt().I() }, t.prototype.width = function() { return Vt(this.dd) ? this._d.O_("left" === this.dd ? "left" : "right") : 0 }, t.prototype.Jt = function() { return v(this._d.ct().zl(this.dd)).Z }, t }(),
                Qn = function() {
                    function t(t) { this.wd = new et, this.tr = new et, this.hi = t, this.Ao().Kr().Zi(this.Md.bind(this)), this.Ao().$r().Zi(this.bd.bind(this)) } return t.prototype.rn = function() { this.Ao().Kr().nn(this), this.Ao().$r().nn(this), this.wd.rn() }, t.prototype.scrollPosition = function() { return this.Ao().Fr() }, t.prototype.scrollToPosition = function(t, e) { e ? this.Ao().Yr(t, 1e3) : this.hi.dr(t) }, t.prototype.scrollToRealTime = function() { this.Ao().Hr() }, t.prototype.getVisibleRange = function() { var t, e, n = this.Ao().gr(); return null === n ? null : { from: null !== (t = n.from.Ss) && void 0 !== t ? t : n.from.Cs, to: null !== (e = n.to.Ss) && void 0 !== e ? e : n.to.Cs } }, t.prototype.setVisibleRange = function(t) { var e = { from: Cn(t.from), to: Cn(t.to) },
                            n = this.Ao().Nr(e);
                        this.hi.rf(n) }, t.prototype.getVisibleLogicalRange = function() { var t = this.Ao().mr(); return null === t ? null : { from: t.hs(), to: t.ss() } }, t.prototype.setVisibleLogicalRange = function(t) { d(t.from <= t.to, "The from index cannot be after the to index."), this.hi.rf(t) }, t.prototype.resetTimeScale = function() { this.hi.ke() }, t.prototype.fitContent = function() { this.hi.Jr() }, t.prototype.logicalToCoordinate = function(t) { var e = this.hi.U(); return e.Qt() ? null : e.G(t) }, t.prototype.coordinateToLogical = function(t) { var e = this.hi.U(); return e.Qt() ? null : e.Ar(t) }, t.prototype.timeToCoordinate = function(t) { var e = Cn(t),
                            n = this.hi.U(),
                            r = n.wr(e, !1); return null === r ? null : n.G(r) }, t.prototype.coordinateToTime = function(t) { var e, n = this.hi.U(),
                            r = n.Ar(t),
                            i = n.si(r); return null === i ? null : null !== (e = i.Ss) && void 0 !== e ? e : i.Cs }, t.prototype.subscribeVisibleTimeRangeChange = function(t) { this.wd.Zi(t) }, t.prototype.unsubscribeVisibleTimeRangeChange = function(t) { this.wd.tn(t) }, t.prototype.subscribeVisibleLogicalRangeChange = function(t) { this.tr.Zi(t) }, t.prototype.unsubscribeVisibleLogicalRangeChange = function(t) { this.tr.tn(t) }, t.prototype.applyOptions = function(t) { this.Ao().hh(t) }, t.prototype.options = function() { return _(this.Ao().I()) }, t.prototype.Ao = function() { return this.hi.U() }, t.prototype.Md = function() { this.wd.sn() && this.wd.hn(this.getVisibleRange()) }, t.prototype.bd = function() { this.tr.sn() && this.tr.hn(this.getVisibleLogicalRange()) }, t }();

            function Zn(t) { if (void 0 !== t && "custom" !== t.type) { var e = t;
                    void 0 !== e.minMove && void 0 === e.precision && (e.precision = function(t) { if (t >= 1) return 0; for (var e = 0; e < 8; e++) { var n = Math.round(t); if (Math.abs(n - t) < 1e-8) return e;
                            t *= 10 } return e }(e.minMove)) } }

            function Kn(t) { return function(t) { if (O(t.handleScale)) { var e = t.handleScale;
                            t.handleScale = { axisDoubleClickReset: e, axisPressedMouseMove: { time: e, price: e }, mouseWheel: e, pinch: e } } else if (void 0 !== t.handleScale && O(t.handleScale.axisPressedMouseMove)) { var n = t.handleScale.axisPressedMouseMove;
                            t.handleScale.axisPressedMouseMove = { time: n, price: n } } var r = t.handleScroll;
                        O(r) && (t.handleScroll = { horzTouchDrag: r, vertTouchDrag: r, mouseWheel: r, pressedMouseMove: r }) }(t),
                    function(t) { if (t.priceScale) { t.leftPriceScale = t.leftPriceScale || {}, t.rightPriceScale = t.rightPriceScale || {}; var e = t.priceScale.position;
                            delete t.priceScale.position, t.leftPriceScale = b(t.leftPriceScale, t.priceScale), t.rightPriceScale = b(t.rightPriceScale, t.priceScale), "left" === e && (t.leftPriceScale.visible = !0, t.rightPriceScale.visible = !1), "right" === e && (t.leftPriceScale.visible = !1, t.rightPriceScale.visible = !0), "none" === e && (t.leftPriceScale.visible = !1, t.rightPriceScale.visible = !1), t.overlayPriceScales = t.overlayPriceScales || {}, void 0 !== t.priceScale.invertScale && (t.overlayPriceScales.invertScale = t.priceScale.invertScale), void 0 !== t.priceScale.scaleMargins && (t.overlayPriceScales.scaleMargins = t.priceScale.scaleMargins) } }(t), t } var tr = function() {
                function t(t, e) { var n = this;
                    this.md = new Dn, this.gd = new Map, this.pd = new Map, this.yd = new et, this.kd = new et; var r = void 0 === e ? _(Wn) : b(_(Wn), Kn(e));
                    this._d = new gn(t, r), this._d.zv().Zi((function(t) { n.yd.sn() && n.yd.hn(n.xd(t())) }), this), this._d.Wl().Zi((function(t) { n.kd.sn() && n.kd.hn(n.xd(t())) }), this); var i = this._d.ct();
                    this.Nd = new Qn(i) } return t.prototype.remove = function() { this._d.zv().nn(this), this._d.Wl().nn(this), this.Nd.rn(), this._d.rn(), this.gd.clear(), this.pd.clear(), this.yd.rn(), this.kd.rn(), this.md.rn() }, t.prototype.resize = function(t, e, n) { this._d.C_(t, e, n) }, t.prototype.addAreaSeries = function(t) { void 0 === t && (t = {}), Zn((t = Bn(t)).priceFormat); var e = b(_(Gn), $n, t),
                        n = this._d.ct().nf("Area", e),
                        r = new Fn(n, this, this); return this.gd.set(r, n), this.pd.set(n, r), r }, t.prototype.addBarSeries = function(t) { void 0 === t && (t = {}), Zn((t = Bn(t)).priceFormat); var e = b(_(Gn), qn, t),
                        n = this._d.ct().nf("Bar", e),
                        r = new Fn(n, this, this); return this.gd.set(r, n), this.pd.set(n, r), r }, t.prototype.addCandlestickSeries = function(t) { void 0 === t && (t = {}), _t(t = Bn(t)), Zn(t.priceFormat); var e = b(_(Gn), Hn, t),
                        n = this._d.ct().nf("Candlestick", e),
                        r = new zn(n, this, this); return this.gd.set(r, n), this.pd.set(n, r), r }, t.prototype.addHistogramSeries = function(t) { void 0 === t && (t = {}), Zn((t = Bn(t)).priceFormat); var e = b(_(Gn), Jn, t),
                        n = this._d.ct().nf("Histogram", e),
                        r = new Fn(n, this, this); return this.gd.set(r, n), this.pd.set(n, r), r }, t.prototype.addLineSeries = function(t) { void 0 === t && (t = {}), Zn((t = Bn(t)).priceFormat); var e = b(_(Gn), Yn, t),
                        n = this._d.ct().nf("Line", e),
                        r = new Fn(n, this, this); return this.gd.set(r, n), this.pd.set(n, r), r }, t.prototype.removeSeries = function(t) { var e = y(this.gd.get(t)),
                        n = this.md.sf(e);
                    this._d.ct().sf(e), this.Sd(n), this.gd.delete(t), this.pd.delete(e) }, t.prototype.vd = function(t, e) { this.Sd(this.md.J_(t, e)) }, t.prototype.uo = function(t, e) { this.Sd(this.md.nd(t, e)) }, t.prototype.subscribeClick = function(t) { this.yd.Zi(t) }, t.prototype.unsubscribeClick = function(t) { this.yd.tn(t) }, t.prototype.subscribeCrosshairMove = function(t) { this.kd.Zi(t) }, t.prototype.unsubscribeCrosshairMove = function(t) { this.kd.tn(t) }, t.prototype.priceScale = function(t) { return void 0 === t && (t = this._d.ct().ef()), new Xn(this._d, t) }, t.prototype.timeScale = function() { return this.Nd }, t.prototype.applyOptions = function(t) { this._d.hh(Kn(t)) }, t.prototype.options = function() { return this._d.I() }, t.prototype.takeScreenshot = function() { return this._d.L_() }, t.prototype.Sd = function(t) { var e = this._d.ct();
                    e.tf(t.U.Er, t.U.ad), t.sd.forEach((function(t, e) { return e.uo(t.ed, t.Tl) })), e.Or() }, t.prototype.Cd = function(t) { return y(this.pd.get(t)) }, t.prototype.xd = function(t) { var e = this,
                        n = new Map;
                    t.j_.forEach((function(t, r) { n.set(e.Cd(r), t) })); var r = void 0 === t.R_ ? void 0 : this.Cd(t.R_); return { time: t.P && (t.P.Ss || t.P.Cs), point: t.W_, hoveredSeries: r, hoveredMarkerId: t.U_, seriesPrices: n } }, t }();

            function er(t, e) { var n; if (w(t)) { var r = document.getElementById(t);
                    d(null !== r, "Cannot find element in DOM with id=" + t), n = r } else n = t; return new tr(n, e) } }, 1240: function(t, e, n) { "use strict";
            n.d(e, "a", (function() { return o })); var r = n(495),
                i = n(15);

            function o(t) { return Object(i.a)(1, arguments), Math.floor(Object(r.default)(t) / 1e3) } }, 1241: function(t, e, n) { "use strict";
            n.d(e, "a", (function() { return o })); var r = n(20),
                i = n(15);

            function o(t) { Object(i.a)(1, arguments); var e = Object(r.default)(t); return e.setSeconds(0, 0), e } }, 1242: function(t, e, n) { "use strict";
            n.d(e, "a", (function() { return o })); var r = n(20),
                i = n(15);

            function o(t) { Object(i.a)(1, arguments); var e = Object(r.default)(t); return e.setMinutes(0, 0, 0), e } }, 1243: function(t, e, n) { "use strict";
            n.d(e, "a", (function() { return u })); var r = n(493),
                i = n(494),
                o = n(20),
                a = n(15),
                s = n(33);

            function u(t, e) { if (Object(a.a)(2, arguments), !e || "object" !== typeof e) return new Date(NaN); var n = "years" in e ? Object(s.a)(e.years) : 0,
                    u = "months" in e ? Object(s.a)(e.months) : 0,
                    c = "weeks" in e ? Object(s.a)(e.weeks) : 0,
                    l = "days" in e ? Object(s.a)(e.days) : 0,
                    h = "hours" in e ? Object(s.a)(e.hours) : 0,
                    f = "minutes" in e ? Object(s.a)(e.minutes) : 0,
                    p = "seconds" in e ? Object(s.a)(e.seconds) : 0,
                    d = Object(i.default)(Object(o.default)(t), u + 12 * n),
                    y = Object(r.default)(d, l + 7 * c),
                    v = f + 60 * h,
                    g = p + 60 * v,
                    b = 1e3 * g,
                    m = new Date(y.getTime() - b); return m } }, 1244: function(t, e, n) { "use strict";
            n.d(e, "a", (function() { return v })); var r = n(477),
                i = n.n(r),
                o = n(221),
                a = n.n(o),
                s = n(1),
                u = n.n(s),
                c = n(985),
                l = n.n(c),
                h = n(772),
                f = n(818);

            function p() { return (p = Object.assign || function(t) { for (var e = 1; e < arguments.length; e++) { var n = arguments[e]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]) } return t }).apply(this, arguments) }

            function d(t, e) { return function(t) { if (Array.isArray(t)) return t }(t) || function(t, e) { if ("undefined" === typeof Symbol || !(Symbol.iterator in Object(t))) return; var n = [],
                        r = !0,
                        i = !1,
                        o = void 0; try { for (var a, s = t[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0); } catch (u) { i = !0, o = u } finally { try { r || null == s.return || s.return() } finally { if (i) throw o } } return n }(t, e) || function(t, e) { if (!t) return; if ("string" === typeof t) return y(t, e); var n = Object.prototype.toString.call(t).slice(8, -1); "Object" === n && t.constructor && (n = t.constructor.name); if ("Map" === n || "Set" === n) return Array.from(t); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return y(t, e) }(t, e) || function() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() }

            function y(t, e) {
                (null == e || e > t.length) && (e = t.length); for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n]; return r } var v = Object(s.forwardRef)((function(t, e) { var n, r = t.aspect,
                    o = t.width,
                    c = void 0 === o ? "100%" : o,
                    y = t.height,
                    v = void 0 === y ? "100%" : y,
                    g = t.minWidth,
                    b = t.minHeight,
                    m = t.maxHeight,
                    x = t.children,
                    w = t.debounce,
                    O = void 0 === w ? 0 : w,
                    _ = t.id,
                    M = t.className,
                    j = d(Object(s.useState)({ containerWidth: -1, containerHeight: -1 }), 2),
                    S = j[0],
                    E = j[1],
                    k = Object(s.useRef)(null);
                Object(s.useImperativeHandle)(e, (function() { return k }), [k]); var A = function() { return k.current ? { containerWidth: k.current.clientWidth, containerHeight: k.current.clientHeight } : null },
                    P = function() { if (n) { var t = A(); if (t) { var e = S.containerWidth,
                                    r = S.containerHeight,
                                    i = t.containerWidth,
                                    o = t.containerHeight;
                                i === e && o === r || E({ containerWidth: i, containerHeight: o }) } } },
                    C = O > 0 ? a()(P, O) : P;
                Object(s.useEffect)((function() { n = !0; var t = A(); return t && E(t),
                        function() { n = !1 } }), []); var T = { width: c, height: v, minWidth: g, minHeight: b, maxHeight: m }; return u.a.createElement(l.a, { handleWidth: !0, handleHeight: !0, onResize: C, targetRef: k }, u.a.createElement("div", p({}, null != _ ? { id: "".concat(_) } : {}, { className: i()("recharts-responsive-container", M), style: T, ref: k }), function() { var t = S.containerWidth,
                        e = S.containerHeight; if (t < 0 || e < 0) return null;
                    Object(f.a)(Object(h.h)(c) || Object(h.h)(v), "The width(%s) and height(%s) are both fixed numbers,\n       maybe you don't need to use a ResponsiveContainer.", c, v), Object(f.a)(!r || r > 0, "The aspect(%s) must be greater than zero.", r); var n = Object(h.h)(c) ? t : c,
                        i = Object(h.h)(v) ? e : v; return r && r > 0 && (n ? i = n / r : i && (n = i * r), m && i > m && (i = m)), Object(f.a)(n > 0 || i > 0, "The width(%s) and height(%s) of chart should be greater than 0,\n       please check the style of container, or the props width(%s) and height(%s),\n       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the\n       height and width.", n, i, c, v, g, b, r), Object(s.cloneElement)(x, { width: n, height: i }) }())) })) }, 1245: function(t, e, n) { "use strict";
            n.d(e, "a", (function() { return u })); var r = n(890),
                i = n(1041),
                o = n(906),
                a = n(907),
                s = n(804),
                u = Object(r.a)({ chartName: "AreaChart", GraphicalChild: i.a, axisComponents: [{ axisType: "xAxis", AxisComp: o.a }, { axisType: "yAxis", AxisComp: a.a }], formatAxisMap: s.b }) }, 1246: function(t, e, n) { "use strict"; var r = Math.PI,
                i = 2 * r,
                o = 1e-6,
                a = i - o;

            function s() { this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "" }

            function u() { return new s }
            s.prototype = u.prototype = { constructor: s, moveTo: function(t, e) { this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +e) }, closePath: function() { null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z") }, lineTo: function(t, e) { this._ += "L" + (this._x1 = +t) + "," + (this._y1 = +e) }, quadraticCurveTo: function(t, e, n, r) { this._ += "Q" + +t + "," + +e + "," + (this._x1 = +n) + "," + (this._y1 = +r) }, bezierCurveTo: function(t, e, n, r, i, o) { this._ += "C" + +t + "," + +e + "," + +n + "," + +r + "," + (this._x1 = +i) + "," + (this._y1 = +o) }, arcTo: function(t, e, n, i, a) { t = +t, e = +e, n = +n, i = +i, a = +a; var s = this._x1,
                        u = this._y1,
                        c = n - t,
                        l = i - e,
                        h = s - t,
                        f = u - e,
                        p = h * h + f * f; if (a < 0) throw new Error("negative radius: " + a); if (null === this._x1) this._ += "M" + (this._x1 = t) + "," + (this._y1 = e);
                    else if (p > o)
                        if (Math.abs(f * c - l * h) > o && a) { var d = n - s,
                                y = i - u,
                                v = c * c + l * l,
                                g = d * d + y * y,
                                b = Math.sqrt(v),
                                m = Math.sqrt(p),
                                x = a * Math.tan((r - Math.acos((v + p - g) / (2 * b * m))) / 2),
                                w = x / m,
                                O = x / b;
                            Math.abs(w - 1) > o && (this._ += "L" + (t + w * h) + "," + (e + w * f)), this._ += "A" + a + "," + a + ",0,0," + +(f * d > h * y) + "," + (this._x1 = t + O * c) + "," + (this._y1 = e + O * l) } else this._ += "L" + (this._x1 = t) + "," + (this._y1 = e);
                    else; }, arc: function(t, e, n, s, u, c) { t = +t, e = +e, c = !!c; var l = (n = +n) * Math.cos(s),
                        h = n * Math.sin(s),
                        f = t + l,
                        p = e + h,
                        d = 1 ^ c,
                        y = c ? s - u : u - s; if (n < 0) throw new Error("negative radius: " + n);
                    null === this._x1 ? this._ += "M" + f + "," + p : (Math.abs(this._x1 - f) > o || Math.abs(this._y1 - p) > o) && (this._ += "L" + f + "," + p), n && (y < 0 && (y = y % i + i), y > a ? this._ += "A" + n + "," + n + ",0,1," + d + "," + (t - l) + "," + (e - h) + "A" + n + "," + n + ",0,1," + d + "," + (this._x1 = f) + "," + (this._y1 = p) : y > o && (this._ += "A" + n + "," + n + ",0," + +(y >= r) + "," + d + "," + (this._x1 = t + n * Math.cos(u)) + "," + (this._y1 = e + n * Math.sin(u)))) }, rect: function(t, e, n, r) { this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +e) + "h" + +n + "v" + +r + "h" + -n + "Z" }, toString: function() { return this._ } }, e.a = u }, 1247: function(t, e, n) { "use strict";
            n.d(e, "b", (function() { return a })), n.d(e, "c", (function() { return s })); var r = Math.sqrt(50),
                i = Math.sqrt(10),
                o = Math.sqrt(2);

            function a(t, e, n) { var a = (e - t) / Math.max(0, n),
                    s = Math.floor(Math.log(a) / Math.LN10),
                    u = a / Math.pow(10, s); return s >= 0 ? (u >= r ? 10 : u >= i ? 5 : u >= o ? 2 : 1) * Math.pow(10, s) : -Math.pow(10, -s) / (u >= r ? 10 : u >= i ? 5 : u >= o ? 2 : 1) }

            function s(t, e, n) { var a = Math.abs(e - t) / Math.max(0, n),
                    s = Math.pow(10, Math.floor(Math.log(a) / Math.LN10)),
                    u = a / s; return u >= r ? s *= 10 : u >= i ? s *= 5 : u >= o && (s *= 2), e < t ? -s : s }
            e.a = function(t, e, n) { var r, i, o, s, u = -1; if (n = +n, (t = +t) === (e = +e) && n > 0) return [t]; if ((r = e < t) && (i = t, t = e, e = i), 0 === (s = a(t, e, n)) || !isFinite(s)) return []; if (s > 0) { var c = Math.round(t / s),
                        l = Math.round(e / s); for (c * s < t && ++c, l * s > e && --l, o = new Array(i = l - c + 1); ++u < i;) o[u] = (c + u) * s } else { s = -s; var h = Math.round(t * s),
                        f = Math.round(e * s); for (h / s < t && ++h, f / s > e && --f, o = new Array(i = f - h + 1); ++u < i;) o[u] = (h + u) / s } return r && o.reverse(), o } }, 1248: function(t, e, n) { "use strict"; var r = n(843),
                i = n(1013),
                o = n(896),
                a = Object(i.a)(r.a),
                s = a.right;
            a.left, Object(i.a)(o.a).center;
            e.a = s }, 1249: function(t, e, n) { "use strict";
            e.a = function(t, e) { return t = +t, e = +e,
                    function(n) { return Math.round(t * (1 - n) + e * n) } } }, 1250: function(t, e, n) { "use strict";
            n.d(e, "a", (function() { return u })); var r = n(890),
                i = n(1232),
                o = n(906),
                a = n(907),
                s = n(804),
                u = Object(r.a)({ chartName: "BarChart", GraphicalChild: i.a, defaultTooltipEventType: "axis", validateTooltipEventTypes: ["axis", "item"], axisComponents: [{ axisType: "xAxis", AxisComp: o.a }, { axisType: "yAxis", AxisComp: a.a }], formatAxisMap: s.b }) }, 1251: function(t, e, n) { "use strict";
            n.d(e, "a", (function() { return a })); var r = n(20),
                i = n(33),
                o = n(15);

            function a(t) { Object(o.a)(1, arguments); var e = Object(i.a)(t); return Object(r.default)(1e3 * e) } }, 1258: function(t, e, n) { "use strict";
            n.d(e, "a", (function() { return o })), n.d(e, "b", (function() { return a })); var r, i, o, a, s = n(821),
                u = n(1012),
                c = n(822),
                l = function(t, e) { var n = Object(c.b)(t, e); if (!n) return t + ""; var r = n[0],
                        i = n[1]; return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0") },
                h = { "%": function(t, e) { return (100 * t).toFixed(e) }, b: function(t) { return Math.round(t).toString(2) }, c: function(t) { return t + "" }, d: c.a, e: function(t, e) { return t.toExponential(e) }, f: function(t, e) { return t.toFixed(e) }, g: function(t, e) { return t.toPrecision(e) }, o: function(t) { return Math.round(t).toString(8) }, p: function(t, e) { return l(100 * t, e) }, r: l, s: function(t, e) { var n = Object(c.b)(t, e); if (!n) return t + ""; var i = n[0],
                            o = n[1],
                            a = o - (r = 3 * Math.max(-8, Math.min(8, Math.floor(o / 3)))) + 1,
                            s = i.length; return a === s ? i : a > s ? i + new Array(a - s + 1).join("0") : a > 0 ? i.slice(0, a) + "." + i.slice(a) : "0." + new Array(1 - a).join("0") + Object(c.b)(t, Math.max(0, e + a - 1))[0] }, X: function(t) { return Math.round(t).toString(16).toUpperCase() }, x: function(t) { return Math.round(t).toString(16) } },
                f = function(t) { return t },
                p = Array.prototype.map,
                d = ["y", "z", "a", "f", "p", "n", "\xb5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
            i = function(t) { var e, n, i = void 0 === t.grouping || void 0 === t.thousands ? f : (e = p.call(t.grouping, Number), n = t.thousands + "", function(t, r) { for (var i = t.length, o = [], a = 0, s = e[0], u = 0; i > 0 && s > 0 && (u + s + 1 > r && (s = Math.max(1, r - u)), o.push(t.substring(i -= s, i + s)), !((u += s + 1) > r));) s = e[a = (a + 1) % e.length]; return o.reverse().join(n) }),
                    o = void 0 === t.currency ? "" : t.currency[0] + "",
                    a = void 0 === t.currency ? "" : t.currency[1] + "",
                    c = void 0 === t.decimal ? "." : t.decimal + "",
                    l = void 0 === t.numerals ? f : function(t) { return function(e) { return e.replace(/[0-9]/g, (function(e) { return t[+e] })) } }(p.call(t.numerals, String)),
                    y = void 0 === t.percent ? "%" : t.percent + "",
                    v = void 0 === t.minus ? "\u2212" : t.minus + "",
                    g = void 0 === t.nan ? "NaN" : t.nan + "";

                function b(t) { var e = (t = Object(u.a)(t)).fill,
                        n = t.align,
                        s = t.sign,
                        f = t.symbol,
                        p = t.zero,
                        b = t.width,
                        m = t.comma,
                        x = t.precision,
                        w = t.trim,
                        O = t.type; "n" === O ? (m = !0, O = "g") : h[O] || (void 0 === x && (x = 12), w = !0, O = "g"), (p || "0" === e && "=" === n) && (p = !0, e = "0", n = "="); var _ = "$" === f ? o : "#" === f && /[boxX]/.test(O) ? "0" + O.toLowerCase() : "",
                        M = "$" === f ? a : /[%p]/.test(O) ? y : "",
                        j = h[O],
                        S = /[defgprs%]/.test(O);

                    function E(t) { var o, a, u, h = _,
                            f = M; if ("c" === O) f = j(t) + f, t = "";
                        else { var y = (t = +t) < 0 || 1 / t < 0; if (t = isNaN(t) ? g : j(Math.abs(t), x), w && (t = function(t) { t: for (var e, n = t.length, r = 1, i = -1; r < n; ++r) switch (t[r]) {
                                        case ".":
                                            i = e = r; break;
                                        case "0":
                                            0 === i && (i = r), e = r; break;
                                        default:
                                            if (!+t[r]) break t;
                                            i > 0 && (i = 0) }
                                    return i > 0 ? t.slice(0, i) + t.slice(e + 1) : t }(t)), y && 0 === +t && "+" !== s && (y = !1), h = (y ? "(" === s ? s : v : "-" === s || "(" === s ? "" : s) + h, f = ("s" === O ? d[8 + r / 3] : "") + f + (y && "(" === s ? ")" : ""), S)
                                for (o = -1, a = t.length; ++o < a;)
                                    if (48 > (u = t.charCodeAt(o)) || u > 57) { f = (46 === u ? c + t.slice(o + 1) : t.slice(o)) + f, t = t.slice(0, o); break } }
                        m && !p && (t = i(t, 1 / 0)); var E = h.length + t.length + f.length,
                            k = E < b ? new Array(b - E + 1).join(e) : ""; switch (m && p && (t = i(k + t, k.length ? b - f.length : 1 / 0), k = ""), n) {
                            case "<":
                                t = h + t + f + k; break;
                            case "=":
                                t = h + k + t + f; break;
                            case "^":
                                t = k.slice(0, E = k.length >> 1) + h + t + f + k.slice(E); break;
                            default:
                                t = k + h + t + f } return l(t) } return x = void 0 === x ? 6 : /[gprs]/.test(O) ? Math.max(1, Math.min(21, x)) : Math.max(0, Math.min(20, x)), E.toString = function() { return t + "" }, E } return { format: b, formatPrefix: function(t, e) { var n = b(((t = Object(u.a)(t)).type = "f", t)),
                            r = 3 * Math.max(-8, Math.min(8, Math.floor(Object(s.a)(e) / 3))),
                            i = Math.pow(10, -r),
                            o = d[8 + r / 3]; return function(t) { return n(i * t) + o } } } }({ thousands: ",", grouping: [3], currency: ["$", ""] }), o = i.format, a = i.formatPrefix }, 1260: function(t, e, n) { "use strict";
            n.d(e, "a", (function() { return d })); var r = n(136),
                i = n(817),
                o = n(20),
                a = n(835),
                s = n(262),
                u = n(15),
                c = 6e4,
                l = 1440,
                h = 43200,
                f = 525600;

            function p(t, e) { var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                Object(u.a)(2, arguments); var p = n.locale || s.a; if (!p.formatDistance) throw new RangeError("locale must contain localize.formatDistance property"); var d = Object(i.a)(t, e); if (isNaN(d)) throw new RangeError("Invalid time value"); var y, v, g = Object(a.a)(n);
                g.addSuffix = Boolean(n.addSuffix), g.comparison = d, d > 0 ? (y = Object(o.default)(e), v = Object(o.default)(t)) : (y = Object(o.default)(t), v = Object(o.default)(e)); var b, m = null == n.roundingMethod ? "round" : String(n.roundingMethod); if ("floor" === m) b = Math.floor;
                else if ("ceil" === m) b = Math.ceil;
                else { if ("round" !== m) throw new RangeError("roundingMethod must be 'floor', 'ceil' or 'round'");
                    b = Math.round } var x, w = v.getTime() - y.getTime(),
                    O = w / c,
                    _ = Object(r.a)(v) - Object(r.a)(y),
                    M = (w - _) / c; if ("second" === (x = null == n.unit ? O < 1 ? "second" : O < 60 ? "minute" : O < l ? "hour" : M < h ? "day" : M < f ? "month" : "year" : String(n.unit))) { var j = b(w / 1e3); return p.formatDistance("xSeconds", j, g) } if ("minute" === x) { var S = b(O); return p.formatDistance("xMinutes", S, g) } if ("hour" === x) { var E = b(O / 60); return p.formatDistance("xHours", E, g) } if ("day" === x) { var k = b(M / l); return p.formatDistance("xDays", k, g) } if ("month" === x) { var A = b(M / h); return 12 === A && "month" !== n.unit ? p.formatDistance("xYears", 1, g) : p.formatDistance("xMonths", A, g) } if ("year" === x) { var P = b(M / f); return p.formatDistance("xYears", P, g) } throw new RangeError("unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'") }

            function d(t, e) { return Object(u.a)(1, arguments), p(t, Date.now(), e) } }, 772: function(t, e, n) { "use strict";
            n.d(e, "i", (function() { return p })), n.d(e, "h", (function() { return d })), n.d(e, "g", (function() { return y })), n.d(e, "f", (function() { return v })), n.d(e, "j", (function() { return b })), n.d(e, "c", (function() { return m })), n.d(e, "b", (function() { return x })), n.d(e, "d", (function() { return w })), n.d(e, "e", (function() { return O })), n.d(e, "a", (function() { return _ })); var r = n(213),
                i = n.n(r),
                o = n(99),
                a = n.n(o),
                s = n(837),
                u = n.n(s),
                c = n(889),
                l = n.n(c),
                h = n(838),
                f = n.n(h),
                p = function(t) { return 0 === t ? 0 : t > 0 ? 1 : -1 },
                d = function(t) { return f()(t) && t.indexOf("%") === t.length - 1 },
                y = function(t) { return l()(t) && !u()(t) },
                v = function(t) { return y(t) || f()(t) },
                g = 0,
                b = function(t) { var e = ++g; return "".concat(t || "").concat(e) },
                m = function(t, e) { var n, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3]; if (!y(t) && !f()(t)) return r; if (d(t)) { var o = t.indexOf("%");
                        n = e * parseFloat(t.slice(0, o)) / 100 } else n = +t; return u()(n) && (n = r), i && n > e && (n = e), n },
                x = function(t) { if (!t) return null; var e = Object.keys(t); return e && e.length ? t[e[0]] : null },
                w = function(t) { if (!a()(t)) return !1; for (var e = t.length, n = {}, r = 0; r < e; r++) { if (n[t[r]]) return !0;
                        n[t[r]] = !0 } return !1 },
                O = function(t, e) { return y(t) && y(e) ? function(n) { return t + n * (e - t) } : function() { return e } };

            function _(t, e, n) { return t && t.length ? t.find((function(t) { return t && ("function" === typeof e ? e(t) : i()(t, e)) === n })) : null } }, 773: function(t, e, n) { "use strict";
            n.d(e, "c", (function() { return l })), n.d(e, "a", (function() { return h })), n.d(e, "b", (function() { return f })); var r = n(127),
                i = n.n(r),
                o = n(1);

            function a(t) { return (a = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t })(t) } var s = ["viewBox", "children"],
                u = ["className", "color", "height", "id", "lang", "max", "media", "method", "min", "name", "style", "target", "type", "width", "role", "tabIndex", "accentHeight", "accumulate", "additive", "alignmentBaseline", "allowReorder", "alphabetic", "amplitude", "arabicForm", "ascent", "attributeName", "attributeType", "autoReverse", "azimuth", "baseFrequency", "baselineShift", "baseProfile", "bbox", "begin", "bias", "by", "calcMode", "capHeight", "clip", "clipPath", "clipPathUnits", "clipRule", "colorInterpolation", "colorInterpolationFilters", "colorProfile", "colorRendering", "contentScriptType", "contentStyleType", "cursor", "cx", "cy", "d", "decelerate", "descent", "diffuseConstant", "direction", "display", "divisor", "dominantBaseline", "dur", "dx", "dy", "edgeMode", "elevation", "enableBackground", "end", "exponent", "externalResourcesRequired", "fill", "fillOpacity", "fillRule", "filter", "filterRes", "filterUnits", "floodColor", "floodOpacity", "focusable", "fontFamily", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontWeight", "format", "from", "fx", "fy", "g1", "g2", "glyphName", "glyphOrientationHorizontal", "glyphOrientationVertical", "glyphRef", "gradientTransform", "gradientUnits", "hanging", "horizAdvX", "horizOriginX", "href", "ideographic", "imageRendering", "in2", "in", "intercept", "k1", "k2", "k3", "k4", "k", "kernelMatrix", "kernelUnitLength", "kerning", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "letterSpacing", "lightingColor", "limitingConeAngle", "local", "markerEnd", "markerHeight", "markerMid", "markerStart", "markerUnits", "markerWidth", "mask", "maskContentUnits", "maskUnits", "mathematical", "mode", "numOctaves", "offset", "opacity", "operator", "order", "orient", "orientation", "origin", "overflow", "overlinePosition", "overlineThickness", "paintOrder", "panose1", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointerEvents", "points", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "r", "radius", "refX", "refY", "renderingIntent", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "restart", "result", "rotate", "rx", "ry", "seed", "shapeRendering", "slope", "spacing", "specularConstant", "specularExponent", "speed", "spreadMethod", "startOffset", "stdDeviation", "stemh", "stemv", "stitchTiles", "stopColor", "stopOpacity", "strikethroughPosition", "strikethroughThickness", "string", "stroke", "strokeDasharray", "strokeDashoffset", "strokeLinecap", "strokeLinejoin", "strokeMiterlimit", "strokeOpacity", "strokeWidth", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textAnchor", "textDecoration", "textLength", "textRendering", "to", "transform", "u1", "u2", "underlinePosition", "underlineThickness", "unicode", "unicodeBidi", "unicodeRange", "unitsPerEm", "vAlphabetic", "values", "vectorEffect", "version", "vertAdvY", "vertOriginX", "vertOriginY", "vHanging", "vIdeographic", "viewTarget", "visibility", "vMathematical", "widths", "wordSpacing", "writingMode", "x1", "x2", "x", "xChannelSelector", "xHeight", "xlinkActuate", "xlinkArcrole", "xlinkHref", "xlinkRole", "xlinkShow", "xlinkTitle", "xlinkType", "xmlBase", "xmlLang", "xmlns", "xmlnsXlink", "xmlSpace", "y1", "y2", "y", "yChannelSelector", "z", "zoomAndPan", "ref", "key", "angle"],
                c = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"],
                l = function(t, e, n) { if (!t || "function" === typeof t || "boolean" === typeof t) return null; var r = t; if (Object(o.isValidElement)(t) && (r = t.props), !i()(r)) return null; var a = {}; return Object.keys(r).forEach((function(t) {
                        (u.includes(t) || n && s.includes(t) || e && c.includes(t)) && (a[t] = r[t]) })), a },
                h = function(t, e) { if (!t || "function" === typeof t || "boolean" === typeof t) return null; var n = t; if (Object(o.isValidElement)(t) && (n = t.props), !i()(n)) return null; var r = {}; return Object.keys(n).forEach((function(t) { c.includes(t) && (r[t] = e || function(e) { return n[t](n, e) }) })), r },
                f = function(t, e, n) { if (!i()(t) || "object" !== a(t)) return null; var r = null; return Object.keys(t).forEach((function(i) { var o = t[i];
                        c.includes(i) && "function" === typeof o && (r || (r = {}), r[i] = function(t, e, n) { return function(r) { return t(e, n, r), null } }(o, e, n)) })), r } }, 777: function(t, e, n) { "use strict";

            function r(t, e) { switch (arguments.length) {
                    case 0:
                        break;
                    case 1:
                        this.range(t); break;
                    default:
                        this.range(e).domain(t) } return this }

            function i(t, e) { switch (arguments.length) {
                    case 0:
                        break;
                    case 1:
                        "function" === typeof t ? this.interpolator(t) : this.range(t); break;
                    default:
                        this.domain(t), "function" === typeof e ? this.interpolator(e) : this.range(e) } return this }
            n.d(e, "b", (function() { return r })), n.d(e, "a", (function() { return i })) }, 781: function(t, e) { t.exports = function(t) { return null == t } }, 782: function(t, e, n) { "use strict";
            n.d(e, "a", (function() { return l })); var r = n(1),
                i = n.n(r),
                o = n(477),
                a = n.n(o),
                s = n(773);

            function u() { return (u = Object.assign || function(t) { for (var e = 1; e < arguments.length; e++) { var n = arguments[e]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]) } return t }).apply(this, arguments) }

            function c(t, e) { if (null == t) return {}; var n, r, i = function(t, e) { if (null == t) return {}; var n, r, i = {},
                        o = Object.keys(t); for (r = 0; r < o.length; r++) n = o[r], e.indexOf(n) >= 0 || (i[n] = t[n]); return i }(t, e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(t); for (r = 0; r < o.length; r++) n = o[r], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (i[n] = t[n]) } return i }

            function l(t) { var e = t.children,
                    n = t.className,
                    r = c(t, ["children", "className"]),
                    o = a()("recharts-layer", n); return i.a.createElement("g", u({ className: o }, Object(s.c)(r, !0)), e) } }, 784: function(t, e, n) { "use strict";
            n.d(e, "a", (function() { return i })); var r = n(250);

            function i(t, e) { var n; if ("undefined" === typeof Symbol || null == t[Symbol.iterator]) { if (Array.isArray(t) || (n = Object(r.a)(t)) || e && t && "number" === typeof t.length) { n && (t = n); var i = 0,
                            o = function() {}; return { s: o, n: function() { return i >= t.length ? { done: !0 } : { done: !1, value: t[i++] } }, e: function(t) { throw t }, f: o } } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") } var a, s = !0,
                    u = !1; return { s: function() { n = t[Symbol.iterator]() }, n: function() { var t = n.next(); return s = t.done, t }, e: function(t) { u = !0, a = t }, f: function() { try { s || null == n.return || n.return() } finally { if (u) throw a } } } } }, 785: function(t, e, n) { "use strict";
            n.d(e, "b", (function() { return s })), n.d(e, "a", (function() { return u })); var r = n(1247),
                i = n(786),
                o = n(777),
                a = n(880);

            function s(t) { var e = t.domain; return t.ticks = function(t) { var n = e(); return Object(r.a)(n[0], n[n.length - 1], null == t ? 10 : t) }, t.tickFormat = function(t, n) { var r = e(); return Object(a.a)(r[0], r[r.length - 1], null == t ? 10 : t, n) }, t.nice = function(n) { null == n && (n = 10); var i, o, a = e(),
                        s = 0,
                        u = a.length - 1,
                        c = a[s],
                        l = a[u],
                        h = 10; for (l < c && (o = c, c = l, l = o, o = s, s = u, u = o); h-- > 0;) { if ((o = Object(r.b)(c, l, n)) === i) return a[s] = c, a[u] = l, e(a); if (o > 0) c = Math.floor(c / o) * o, l = Math.ceil(l / o) * o;
                        else { if (!(o < 0)) break;
                            c = Math.ceil(c * o) / o, l = Math.floor(l * o) / o }
                        i = o } return t }, t }

            function u() { var t = Object(i.b)(); return t.copy = function() { return Object(i.a)(t, u()) }, o.b.apply(t, arguments), s(t) } }, 786: function(t, e, n) { "use strict";
            n.d(e, "c", (function() { return c })), n.d(e, "a", (function() { return p })), n.d(e, "d", (function() { return d })), n.d(e, "b", (function() { return y })); var r = n(1248),
                i = n(1229),
                o = n(897),
                a = n(1249); var s = n(844),
                u = [0, 1];

            function c(t) { return t }

            function l(t, e) { return (e -= t = +t) ? function(n) { return (n - t) / e } : (n = isNaN(e) ? NaN : .5, function() { return n }); var n }

            function h(t, e, n) { var r = t[0],
                    i = t[1],
                    o = e[0],
                    a = e[1]; return i < r ? (r = l(i, r), o = n(a, o)) : (r = l(r, i), o = n(o, a)),
                    function(t) { return o(r(t)) } }

            function f(t, e, n) { var i = Math.min(t.length, e.length) - 1,
                    o = new Array(i),
                    a = new Array(i),
                    s = -1; for (t[i] < t[0] && (t = t.slice().reverse(), e = e.slice().reverse()); ++s < i;) o[s] = l(t[s], t[s + 1]), a[s] = n(e[s], e[s + 1]); return function(e) { var n = Object(r.a)(t, e, 1, i) - 1; return a[n](o[n](e)) } }

            function p(t, e) { return e.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown()) }

            function d() { var t, e, n, r, l, p, d = u,
                    y = u,
                    v = i.a,
                    g = c;

                function b() { var t = Math.min(d.length, y.length); return g !== c && (g = function(t, e) { var n; return t > e && (n = t, t = e, e = n),
                            function(n) { return Math.max(t, Math.min(e, n)) } }(d[0], d[t - 1])), r = t > 2 ? f : h, l = p = null, m }

                function m(e) { return null == e || isNaN(e = +e) ? n : (l || (l = r(d.map(t), y, v)))(t(g(e))) } return m.invert = function(n) { return g(e((p || (p = r(y, d.map(t), o.a)))(n))) }, m.domain = function(t) { return arguments.length ? (d = Array.from(t, s.a), b()) : d.slice() }, m.range = function(t) { return arguments.length ? (y = Array.from(t), b()) : y.slice() }, m.rangeRound = function(t) { return y = Array.from(t), v = a.a, b() }, m.clamp = function(t) { return arguments.length ? (g = !!t || c, b()) : g !== c }, m.interpolate = function(t) { return arguments.length ? (v = t, b()) : v }, m.unknown = function(t) { return arguments.length ? (n = t, m) : n },
                    function(n, r) { return t = n, e = r, b() } }

            function y() { return d()(c, c) } }, 789: function(t, e, n) { "use strict";
            n.d(e, "c", (function() { return x })), n.d(e, "a", (function() { return w })), n.d(e, "b", (function() { return O })), n.d(e, "h", (function() { return _ })), n.d(e, "e", (function() { return S })), n.d(e, "g", (function() { return k })), n.d(e, "d", (function() { return A })), n.d(e, "f", (function() { return P })); var r = n(1002),
                i = n.n(r),
                o = n(781),
                a = n.n(o),
                s = n(838),
                u = n.n(s),
                c = n(213),
                l = n.n(c),
                h = n(99),
                f = n.n(h),
                p = n(1),
                d = n.n(p),
                y = n(1003),
                v = n(772),
                g = n(842);

            function b(t, e) { if (null == t) return {}; var n, r, i = function(t, e) { if (null == t) return {}; var n, r, i = {},
                        o = Object.keys(t); for (r = 0; r < o.length; r++) n = o[r], e.indexOf(n) >= 0 || (i[n] = t[n]); return i }(t, e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(t); for (r = 0; r < o.length; r++) n = o[r], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (i[n] = t[n]) } return i } var m = { click: "onClick", mousedown: "onMouseDown", mouseup: "onMouseUp", mouseover: "onMouseOver", mousemove: "onMouseMove", mouseout: "onMouseOut", mouseenter: "onMouseEnter", mouseleave: "onMouseLeave", touchcancel: "onTouchCancel", touchend: "onTouchEnd", touchmove: "onTouchMove", touchstart: "onTouchStart" },
                x = function(t) { return "string" === typeof t ? t : t ? t.displayName || t.name || "Component" : "" },
                w = function t(e, n) { var r = [],
                        i = []; return i = f()(n) ? n.map((function(t) { return x(t) })) : [x(n)], d.a.Children.forEach(e, (function(e) { Object(y.isFragment)(e) && (r = r.concat(t(e.props.children, n))); var o = l()(e, "type.displayName") || l()(e, "type.name"); - 1 !== i.indexOf(o) && r.push(e) })), r },
                O = function(t, e) { var n = w(t, e); return n && n[0] },
                _ = function(t) { if (!t || !t.props) return !1; var e = t.props,
                        n = e.width,
                        r = e.height; return !(!Object(v.g)(n) || n <= 0 || !Object(v.g)(r) || r <= 0) },
                M = ["a", "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColormatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-url", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "lineGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "script", "set", "stop", "style", "svg", "switch", "symbol", "text", "textPath", "title", "tref", "tspan", "use", "view", "vkern"],
                j = function(t) { return t && t.type && u()(t.type) && M.indexOf(t.type) >= 0 },
                S = function t(e, n) { if (e === n) return !0; if (p.Children.count(e) !== p.Children.count(n)) return !1; var r = p.Children.count(e); if (0 === r) return !0; if (1 === r) return E(f()(e) ? e[0] : e, f()(n) ? n[0] : n); for (var i = 0; i < r; i++) { var o = e[i],
                            a = n[i]; if (f()(o) || f()(a)) { if (!t(o, a)) return !1 } else if (!E(o, a)) return !1 } return !0 },
                E = function(t, e) { if (a()(t) && a()(e)) return !0; if (!a()(t) && !a()(e)) { var n = t.props || {},
                            r = n.children,
                            i = b(n, ["children"]),
                            o = e.props || {},
                            s = o.children,
                            u = b(o, ["children"]); return r && s ? Object(g.a)(i, u) && S(r, s) : !r && !s && Object(g.a)(i, u) } return !1 },
                k = function(t, e) { var n = [],
                        r = {}; return p.Children.forEach(t, (function(t, i) { if (j(t)) n.push(t);
                        else if (t) { var o = x(t.type),
                                a = e[o] || {},
                                s = a.handler,
                                u = a.once; if (s && (!u || !r[o])) { var c = s(t, o, i);
                                n.push(c), r[o] = !0 } } })), i()(n).filter((function(t) { return !a()(t) })) },
                A = function(t) { var e = t && t.type; return e && m[e] ? m[e] : null },
                P = function(t, e) { var n = -1; return p.Children.forEach(e, (function(e, r) { e === t && (n = r) })), n } }, 795: function(t, e, n) { "use strict";
            n.d(e, "w", (function() { return bt })), n.d(e, "m", (function() { return mt })), n.d(e, "b", (function() { return xt })), n.d(e, "q", (function() { return wt })), n.d(e, "p", (function() { return Ot })), n.d(e, "h", (function() { return _t })), n.d(e, "g", (function() { return Mt })), n.d(e, "a", (function() { return jt })), n.d(e, "z", (function() { return Et })), n.d(e, "n", (function() { return kt })), n.d(e, "x", (function() { return At })), n.d(e, "l", (function() { return Pt })), n.d(e, "t", (function() { return Ct })), n.d(e, "d", (function() { return Tt })), n.d(e, "A", (function() { return It })), n.d(e, "c", (function() { return Dt })), n.d(e, "e", (function() { return Rt })), n.d(e, "C", (function() { return Lt })), n.d(e, "r", (function() { return zt })), n.d(e, "u", (function() { return Vt })), n.d(e, "k", (function() { return Ut })), n.d(e, "j", (function() { return Wt })), n.d(e, "i", (function() { return Ht })), n.d(e, "s", (function() { return qt })), n.d(e, "o", (function() { return Yt })), n.d(e, "B", (function() { return Gt })), n.d(e, "f", (function() { return Xt })), n.d(e, "y", (function() { return Qt })), n.d(e, "v", (function() { return Zt })); var r = n(803),
                i = n.n(r),
                o = n(839),
                a = n.n(o),
                s = n(837),
                u = n.n(s),
                c = n(841),
                l = n.n(c),
                h = n(838),
                f = n.n(h),
                p = n(99),
                d = n.n(p),
                y = n(893),
                v = n.n(y),
                g = n(1e3),
                b = n.n(g),
                m = n(267),
                x = n.n(m),
                w = n(310),
                O = n.n(w),
                _ = n(213),
                M = n.n(_),
                j = n(781),
                S = n.n(j),
                E = n(372),
                k = n.n(E);

            function A(t) { return function(t) { if (Array.isArray(t)) return P(t) }(t) || function(t) { if ("undefined" !== typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t) }(t) || function(t, e) { if (!t) return; if ("string" === typeof t) return P(t, e); var n = Object.prototype.toString.call(t).slice(8, -1); "Object" === n && t.constructor && (n = t.constructor.name); if ("Map" === n || "Set" === n) return Array.from(t); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return P(t, e) }(t) || function() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() }

            function P(t, e) {
                (null == e || e > t.length) && (e = t.length); for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n]; return r } var C = function(t) { return t },
                T = { "@@functional/placeholder": !0 },
                I = function(t) { return t === T },
                N = function(t) { return function e() { return 0 === arguments.length || 1 === arguments.length && I(arguments.length <= 0 ? void 0 : arguments[0]) ? e : t.apply(void 0, arguments) } },
                D = function t(e, n) { return 1 === e ? n : N((function() { for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o]; var a = i.filter((function(t) { return t !== T })).length; return a >= e ? n.apply(void 0, i) : t(e - a, N((function() { for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r]; var o = i.map((function(t) { return I(t) ? e.shift() : t })); return n.apply(void 0, A(o).concat(e)) }))) })) },
                R = function(t) { return D(t.length, t) },
                L = function(t, e) { for (var n = [], r = t; r < e; ++r) n[r - t] = r; return n },
                B = R((function(t, e) { return Array.isArray(e) ? e.map(t) : Object.keys(e).map((function(t) { return e[t] })).map(t) })),
                F = function() { for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n]; if (!e.length) return C; var r = e.reverse(),
                        i = r[0],
                        o = r.slice(1); return function() { return o.reduce((function(t, e) { return e(t) }), i.apply(void 0, arguments)) } },
                z = function(t) { return Array.isArray(t) ? t.reverse() : t.split("").reverse.join("") },
                V = function(t) { var e = null,
                        n = null; return function() { for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o]; return e && i.every((function(t, n) { return t === e[n] })) ? n : (e = i, n = t.apply(void 0, i)) } }; var U = { rangeStep: function(t, e, n) { for (var r = new k.a(t), i = 0, o = []; r.lt(e) && i < 1e5;) o.push(r.toNumber()), r = r.add(n), i++; return o }, getDigitCount: function(t) { return 0 === t ? 1 : Math.floor(new k.a(t).abs().log(10).toNumber()) + 1 }, interpolateNumber: R((function(t, e, n) { var r = +t; return r + n * (+e - r) })), uninterpolateNumber: R((function(t, e, n) { var r = e - +t; return (n - t) / (r = r || 1 / 0) })), uninterpolateTruncation: R((function(t, e, n) { var r = e - +t; return r = r || 1 / 0, Math.max(0, Math.min(1, (n - t) / r)) })) };

            function W(t) { return function(t) { if (Array.isArray(t)) return Y(t) }(t) || function(t) { if ("undefined" !== typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t) }(t) || q(t) || function() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() }

            function H(t, e) { return function(t) { if (Array.isArray(t)) return t }(t) || function(t, e) { if ("undefined" === typeof Symbol || !(Symbol.iterator in Object(t))) return; var n = [],
                        r = !0,
                        i = !1,
                        o = void 0; try { for (var a, s = t[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0); } catch (u) { i = !0, o = u } finally { try { r || null == s.return || s.return() } finally { if (i) throw o } } return n }(t, e) || q(t, e) || function() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() }

            function q(t, e) { if (t) { if ("string" === typeof t) return Y(t, e); var n = Object.prototype.toString.call(t).slice(8, -1); return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Y(t, e) : void 0 } }

            function Y(t, e) {
                (null == e || e > t.length) && (e = t.length); for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n]; return r }

            function $(t) { var e = H(t, 2),
                    n = e[0],
                    r = e[1],
                    i = n,
                    o = r; return n > r && (i = r, o = n), [i, o] }

            function J(t, e, n) { if (t.lte(0)) return new k.a(0); var r = U.getDigitCount(t.toNumber()),
                    i = new k.a(10).pow(r),
                    o = t.div(i),
                    a = 1 !== r ? .05 : .1,
                    s = new k.a(Math.ceil(o.div(a).toNumber())).add(n).mul(a).mul(i); return e ? s : new k.a(Math.ceil(s)) }

            function G(t, e, n) { var r = 1,
                    i = new k.a(t); if (!i.isint() && n) { var o = Math.abs(t);
                    o < 1 ? (r = new k.a(10).pow(U.getDigitCount(t) - 1), i = new k.a(Math.floor(i.div(r).toNumber())).mul(r)) : o > 1 && (i = new k.a(Math.floor(t))) } else 0 === t ? i = new k.a(Math.floor((e - 1) / 2)) : n || (i = new k.a(Math.floor(t))); var a = Math.floor((e - 1) / 2); return F(B((function(t) { return i.add(new k.a(t - a).mul(r)).toNumber() })), L)(0, e) }

            function X(t, e, n, r) { var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0; if (!Number.isFinite((e - t) / (n - 1))) return { step: new k.a(0), tickMin: new k.a(0), tickMax: new k.a(0) }; var o, a = J(new k.a(e).sub(t).div(n - 1), r, i);
                o = t <= 0 && e >= 0 ? new k.a(0) : (o = new k.a(t).add(e).div(2)).sub(new k.a(o).mod(a)); var s = Math.ceil(o.sub(t).div(a).toNumber()),
                    u = Math.ceil(new k.a(e).sub(o).div(a).toNumber()),
                    c = s + u + 1; return c > n ? X(t, e, n, r, i + 1) : (c < n && (u = e > 0 ? u + (n - c) : u, s = e > 0 ? s : s + (n - c)), { step: a, tickMin: o.sub(new k.a(s).mul(a)), tickMax: o.add(new k.a(u).mul(a)) }) } var Q = V((function(t) { var e = H(t, 2),
                        n = e[0],
                        r = e[1],
                        i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
                        o = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                        a = Math.max(i, 2),
                        s = $([n, r]),
                        u = H(s, 2),
                        c = u[0],
                        l = u[1]; if (c === -1 / 0 || l === 1 / 0) { var h = l === 1 / 0 ? [c].concat(W(L(0, i - 1).map((function() { return 1 / 0 })))) : [].concat(W(L(0, i - 1).map((function() { return -1 / 0 }))), [l]); return n > r ? z(h) : h } if (c === l) return G(c, i, o); var f = X(c, l, a, o),
                        p = f.step,
                        d = f.tickMin,
                        y = f.tickMax,
                        v = U.rangeStep(d, y.add(new k.a(.1).mul(p)), p); return n > r ? z(v) : v })),
                Z = (V((function(t) { var e = H(t, 2),
                        n = e[0],
                        r = e[1],
                        i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
                        o = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                        a = Math.max(i, 2),
                        s = $([n, r]),
                        u = H(s, 2),
                        c = u[0],
                        l = u[1]; if (c === -1 / 0 || l === 1 / 0) return [n, r]; if (c === l) return G(c, i, o); var h = J(new k.a(l).sub(c).div(a - 1), o, 0),
                        f = F(B((function(t) { return new k.a(c).add(new k.a(t).mul(h)).toNumber() })), L),
                        p = f(0, a).filter((function(t) { return t >= c && t <= l })); return n > r ? z(p) : p })), V((function(t, e) { var n = H(t, 2),
                        r = n[0],
                        i = n[1],
                        o = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                        a = $([r, i]),
                        s = H(a, 2),
                        u = s[0],
                        c = s[1]; if (u === -1 / 0 || c === 1 / 0) return [r, i]; if (u === c) return [u]; var l = Math.max(e, 2),
                        h = J(new k.a(c).sub(u).div(l - 1), o, 0),
                        f = [].concat(W(U.rangeStep(new k.a(u), new k.a(c).sub(new k.a(.99).mul(h)), h)), [c]); return r > i ? z(f) : f }))),
                K = n(882),
                tt = n(785),
                et = n(974),
                nt = function(t, e) { if ((i = t.length) > 1)
                        for (var n, r, i, o = 1, a = t[e[0]], s = a.length; o < i; ++o)
                            for (r = a, a = t[e[o]], n = 0; n < s; ++n) a[n][1] += a[n][0] = isNaN(r[n][1]) ? r[n][0] : r[n][1] },
                rt = n(784),
                it = n(845),
                ot = n(819),
                at = function(t) { for (var e = t.length, n = new Array(e); --e >= 0;) n[e] = e; return n };

            function st(t, e) { return t[e] }

            function ut(t) { var e = []; return e.key = t, e } var ct = n(772),
                lt = n(976),
                ht = n(789),
                ft = n(773);

            function pt(t) { return function(t) { if (Array.isArray(t)) return dt(t) }(t) || function(t) { if ("undefined" !== typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t) }(t) || function(t, e) { if (!t) return; if ("string" === typeof t) return dt(t, e); var n = Object.prototype.toString.call(t).slice(8, -1); "Object" === n && t.constructor && (n = t.constructor.name); if ("Map" === n || "Set" === n) return Array.from(t); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return dt(t, e) }(t) || function() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() }

            function dt(t, e) {
                (null == e || e > t.length) && (e = t.length); for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n]; return r }

            function yt(t, e) { var n = Object.keys(t); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), n.push.apply(n, r) } return n }

            function vt(t) { for (var e = 1; e < arguments.length; e++) { var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? yt(Object(n), !0).forEach((function(e) { gt(t, e, n[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : yt(Object(n)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })) } return t }

            function gt(t, e, n) { return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t }

            function bt(t, e, n) { return S()(t) || S()(e) ? n : Object(ct.f)(e) ? M()(t, e, n) : O()(e) ? e(t) : n }

            function mt(t, e, n, r) { var i = x()(t, (function(t) { return bt(t, e) })); if ("number" === n) { var o = i.filter((function(t) { return Object(ct.g)(t) || parseFloat(t) })); return o.length ? [b()(o), v()(o)] : [1 / 0, -1 / 0] } return (r ? i.filter((function(t) { return !S()(t) })) : i).map((function(t) { return Object(ct.f)(t) || t instanceof Date ? t : "" })) } var xt = function(t) { var e, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                        r = arguments.length > 2 ? arguments[2] : void 0,
                        i = arguments.length > 3 ? arguments[3] : void 0,
                        o = -1,
                        a = null !== (e = null === n || void 0 === n ? void 0 : n.length) && void 0 !== e ? e : 0; if (a > 1) { if (i && "angleAxis" === i.axisType && Math.abs(Math.abs(i.range[1] - i.range[0]) - 360) <= 1e-6)
                            for (var s = i.range, u = 0; u < a; u++) { var c = u > 0 ? r[u - 1].coordinate : r[a - 1].coordinate,
                                    l = r[u].coordinate,
                                    h = u >= a - 1 ? r[0].coordinate : r[u + 1].coordinate,
                                    f = void 0; if (Object(ct.i)(l - c) !== Object(ct.i)(h - l)) { var p = []; if (Object(ct.i)(h - l) === Object(ct.i)(s[1] - s[0])) { f = h; var d = l + s[1] - s[0];
                                        p[0] = Math.min(d, (d + c) / 2), p[1] = Math.max(d, (d + c) / 2) } else { f = c; var y = h + s[1] - s[0];
                                        p[0] = Math.min(l, (y + l) / 2), p[1] = Math.max(l, (y + l) / 2) } var v = [Math.min(l, (f + l) / 2), Math.max(l, (f + l) / 2)]; if (t > v[0] && t <= v[1] || t >= p[0] && t <= p[1]) { o = r[u].index; break } } else { var g = Math.min(c, h),
                                        b = Math.max(c, h); if (t > (g + l) / 2 && t <= (b + l) / 2) { o = r[u].index; break } } } else
                                for (var m = 0; m < a; m++)
                                    if (0 === m && t <= (n[m].coordinate + n[m + 1].coordinate) / 2 || m > 0 && m < a - 1 && t > (n[m].coordinate + n[m - 1].coordinate) / 2 && t <= (n[m].coordinate + n[m + 1].coordinate) / 2 || m === a - 1 && t > (n[m].coordinate + n[m - 1].coordinate) / 2) { o = n[m].index; break } } else o = 0; return o },
                wt = function(t) { var e, n = t.type.displayName,
                        r = t.props,
                        i = r.stroke,
                        o = r.fill; switch (n) {
                        case "Line":
                            e = i; break;
                        case "Area":
                        case "Radar":
                            e = i && "none" !== i ? i : o; break;
                        default:
                            e = o } return e },
                Ot = function(t) { var e, n = t.children,
                        r = t.formatedGraphicalItems,
                        i = t.legendWidth,
                        o = t.legendContent,
                        a = Object(ht.b)(n, lt.a.displayName); return a ? (e = a.props && a.props.payload ? a.props && a.props.payload : "children" === o ? (r || []).reduce((function(t, e) { var n = e.item,
                            r = e.props,
                            i = r.sectors || r.data || []; return t.concat(i.map((function(t) { return { type: a.props.iconType || n.props.legendType, value: t.name, color: t.fill, payload: t } }))) }), []) : (r || []).map((function(t) { var e = t.item,
                            n = e.props,
                            r = n.dataKey,
                            i = n.name,
                            o = n.legendType; return { inactive: n.hide, dataKey: r, type: a.props.iconType || o || "square", color: wt(e), value: i || r, payload: e.props } })), vt(vt(vt({}, a.props), lt.a.getWithHeight(a, i)), {}, { payload: e, item: a })) : null },
                _t = function(t) { var e = t.barSize,
                        n = t.stackGroups,
                        r = void 0 === n ? {} : n; if (!r) return {}; for (var i = {}, o = Object.keys(r), a = 0, s = o.length; a < s; a++)
                        for (var u = r[o[a]].stackGroups, c = Object.keys(u), l = 0, h = c.length; l < h; l++) { var f = u[c[l]],
                                p = f.items,
                                d = f.cateAxisId,
                                y = p.filter((function(t) { return Object(ht.c)(t.type).indexOf("Bar") >= 0 })); if (y && y.length) { var v = y[0].props.barSize,
                                    g = y[0].props[d];
                                i[g] || (i[g] = []), i[g].push({ item: y[0], stackList: y.slice(1), barSize: S()(v) ? e : v }) } }
                    return i },
                Mt = function(t) { var e = t.barGap,
                        n = t.barCategoryGap,
                        r = t.bandSize,
                        i = t.sizeList,
                        o = void 0 === i ? [] : i,
                        a = t.maxBarSize,
                        s = o.length; if (s < 1) return null; var u, c = Object(ct.c)(e, r, 0, !0); if (o[0].barSize === +o[0].barSize) { var l = !1,
                            h = r / s,
                            f = o.reduce((function(t, e) { return t + e.barSize || 0 }), 0);
                        (f += (s - 1) * c) >= r && (f -= (s - 1) * c, c = 0), f >= r && h > 0 && (l = !0, f = s * (h *= .9)); var p = { offset: ((r - f) / 2 >> 0) - c, size: 0 };
                        u = o.reduce((function(t, e) { var n = [].concat(pt(t), [{ item: e.item, position: { offset: p.offset + p.size + c, size: l ? h : e.barSize } }]); return p = n[n.length - 1].position, e.stackList && e.stackList.length && e.stackList.forEach((function(t) { n.push({ item: t, position: p }) })), n }), []) } else { var d = Object(ct.c)(n, r, 0, !0);
                        r - 2 * d - (s - 1) * c <= 0 && (c = 0); var y = (r - 2 * d - (s - 1) * c) / s;
                        y > 1 && (y >>= 0); var v = a === +a ? Math.min(y, a) : y;
                        u = o.reduce((function(t, e, n) { var r = [].concat(pt(t), [{ item: e.item, position: { offset: d + (y + c) * n + (y - v) / 2, size: v } }]); return e.stackList && e.stackList.length && e.stackList.forEach((function(t) { r.push({ item: t, position: r[r.length - 1].position }) })), r }), []) } return u },
                jt = function(t, e, n, r) { var i = n.children,
                        o = n.width,
                        a = n.margin,
                        s = o - (a.left || 0) - (a.right || 0),
                        u = Ot({ children: i, legendWidth: s }),
                        c = t; if (u) { var l = r || {},
                            h = u.align,
                            f = u.verticalAlign,
                            p = u.layout;
                        ("vertical" === p || "horizontal" === p && "center" === f) && Object(ct.g)(t[h]) && (c = vt(vt({}, t), {}, gt({}, h, c[h] + (l.width || 0)))), ("horizontal" === p || "vertical" === p && "center" === h) && Object(ct.g)(t[f]) && (c = vt(vt({}, t), {}, gt({}, f, c[f] + (l.height || 0)))) } return c },
                St = function(t, e, n, r) { var i = e.props.children,
                        o = Object(ht.a)(i, "ErrorBar").filter((function(t) { var e = t.props.direction; return !(!S()(e) && !S()(r)) || r.indexOf(e) >= 0 })); if (o && o.length) { var a = o.map((function(t) { return t.props.dataKey })); return t.reduce((function(t, e) { var r = bt(e, n, 0),
                                i = d()(r) ? [b()(r), v()(r)] : [r, r],
                                o = a.reduce((function(t, n) { var r = bt(e, n, 0),
                                        o = i[0] - Math.abs(d()(r) ? r[0] : r),
                                        a = i[1] + Math.abs(d()(r) ? r[1] : r); return [Math.min(o, t[0]), Math.max(a, t[1])] }), [1 / 0, -1 / 0]); return [Math.min(o[0], t[0]), Math.max(o[1], t[1])] }), [1 / 0, -1 / 0]) } return null },
                Et = function(t, e, n, r) { var i = e.map((function(e) { return St(t, e, n, r) })).filter((function(t) { return !S()(t) })); return i && i.length ? i.reduce((function(t, e) { return [Math.min(t[0], e[0]), Math.max(t[1], e[1])] }), [1 / 0, -1 / 0]) : null },
                kt = function(t, e, n, r) { var i = e.map((function(e) { var i = e.props.dataKey; return "number" === n && i && St(t, e, i) || mt(t, i, n, r) })); if ("number" === n) return i.reduce((function(t, e) { return [Math.min(t[0], e[0]), Math.max(t[1], e[1])] }), [1 / 0, -1 / 0]); var o = {}; return i.reduce((function(t, e) { for (var n = 0, r = e.length; n < r; n++) o[e[n]] || (o[e[n]] = !0, t.push(e[n])); return t }), []) },
                At = function(t, e) { return "horizontal" === t && "xAxis" === e || "vertical" === t && "yAxis" === e || "centric" === t && "angleAxis" === e || "radial" === t && "radiusAxis" === e },
                Pt = function(t, e, n) { var r, i, o = t.map((function(t) { return t.coordinate === e && (r = !0), t.coordinate === n && (i = !0), t.coordinate })); return r || o.push(e), i || o.push(n), o },
                Ct = function(t, e, n) { if (!t) return null; var r = t.scale,
                        i = t.duplicateDomain,
                        o = t.type,
                        a = t.range,
                        s = (e || n) && "category" === o && r.bandwidth ? r.bandwidth() / 2 : 0; return s = "angleAxis" === t.axisType ? 2 * Object(ct.i)(a[0] - a[1]) * s : s, e && (t.ticks || t.niceTicks) ? (t.ticks || t.niceTicks).map((function(t) { var e = i ? i.indexOf(t) : t; return { coordinate: r(e) + s, value: t, offset: s } })) : t.isCategorical && t.categoricalDomain ? t.categoricalDomain.map((function(t, e) { return { coordinate: r(t) + s, value: t, index: e, offset: s } })) : r.ticks && !n ? r.ticks(t.tickCount).map((function(t) { return { coordinate: r(t) + s, value: t, offset: s } })) : r.domain().map((function(t, e) { return { coordinate: r(t) + s, value: i ? i[t] : t, index: e, offset: s } })) },
                Tt = function(t, e, n) { var r; return O()(n) ? r = n : O()(e) && (r = e), O()(t) || r ? function(e, n, i, o) { O()(t) && t(e, n, i, o), O()(r) && r(e, n, i, o) } : null },
                It = function(t, e, n) { var r = t.scale,
                        i = t.type,
                        o = t.layout,
                        a = t.axisType; if ("auto" === r) return "radial" === o && "radiusAxis" === a ? { scale: K.a(), realScaleType: "band" } : "radial" === o && "angleAxis" === a ? { scale: tt.a(), realScaleType: "linear" } : "category" === i && e && (e.indexOf("LineChart") >= 0 || e.indexOf("AreaChart") >= 0 || e.indexOf("ComposedChart") >= 0 && !n) ? { scale: K.b(), realScaleType: "point" } : "category" === i ? { scale: K.a(), realScaleType: "band" } : { scale: tt.a(), realScaleType: "linear" }; if (f()(r)) { var s = "scale".concat(l()(r)); return { scale: (et[s] || K.b)(), realScaleType: et[s] ? s : "point" } } return O()(r) ? { scale: r } : { scale: K.b(), realScaleType: "point" } },
                Nt = 1e-4,
                Dt = function(t) { var e = t.domain(); if (e && !(e.length <= 2)) { var n = e.length,
                            r = t.range(),
                            i = Math.min(r[0], r[1]) - Nt,
                            o = Math.max(r[0], r[1]) + Nt,
                            a = t(e[0]),
                            s = t(e[n - 1]);
                        (a < i || a > o || s < i || s > o) && t.domain([e[0], e[n - 1]]) } },
                Rt = function(t, e) { if (!t) return null; for (var n = 0, r = t.length; n < r; n++)
                        if (t[n].item === e) return t[n].position;
                    return null },
                Lt = function(t, e) { if (!e || 2 !== e.length || !Object(ct.g)(e[0]) || !Object(ct.g)(e[1])) return t; var n = Math.min(e[0], e[1]),
                        r = Math.max(e[0], e[1]),
                        i = [t[0], t[1]]; return (!Object(ct.g)(t[0]) || t[0] < n) && (i[0] = n), (!Object(ct.g)(t[1]) || t[1] > r) && (i[1] = r), i[0] > r && (i[0] = r), i[1] < n && (i[1] = n), i },
                Bt = { sign: function(t) { var e = t.length; if (!(e <= 0))
                            for (var n = 0, r = t[0].length; n < r; ++n)
                                for (var i = 0, o = 0, a = 0; a < e; ++a) { var s = u()(t[a][n][1]) ? t[a][n][0] : t[a][n][1];
                                    s >= 0 ? (t[a][n][0] = i, t[a][n][1] = i + s, i = t[a][n][1]) : (t[a][n][0] = o, t[a][n][1] = o + s, o = t[a][n][1]) } }, expand: function(t, e) { if ((r = t.length) > 0) { for (var n, r, i, o = 0, a = t[0].length; o < a; ++o) { for (i = n = 0; n < r; ++n) i += t[n][o][1] || 0; if (i)
                                    for (n = 0; n < r; ++n) t[n][o][1] /= i }
                            nt(t, e) } }, none: nt, silhouette: function(t, e) { if ((n = t.length) > 0) { for (var n, r = 0, i = t[e[0]], o = i.length; r < o; ++r) { for (var a = 0, s = 0; a < n; ++a) s += t[a][r][1] || 0;
                                i[r][1] += i[r][0] = -s / 2 }
                            nt(t, e) } }, wiggle: function(t, e) { if ((i = t.length) > 0 && (r = (n = t[e[0]]).length) > 0) { for (var n, r, i, o = 0, a = 1; a < r; ++a) { for (var s = 0, u = 0, c = 0; s < i; ++s) { for (var l = t[e[s]], h = l[a][1] || 0, f = (h - (l[a - 1][1] || 0)) / 2, p = 0; p < s; ++p) { var d = t[e[p]];
                                        f += (d[a][1] || 0) - (d[a - 1][1] || 0) }
                                    u += h, c += f * h }
                                n[a - 1][1] += n[a - 1][0] = o, u && (o -= c / u) }
                            n[a - 1][1] += n[a - 1][0] = o, nt(t, e) } }, positive: function(t) { var e = t.length; if (!(e <= 0))
                            for (var n = 0, r = t[0].length; n < r; ++n)
                                for (var i = 0, o = 0; o < e; ++o) { var a = u()(t[o][n][1]) ? t[o][n][0] : t[o][n][1];
                                    a >= 0 ? (t[o][n][0] = i, t[o][n][1] = i + a, i = t[o][n][1]) : (t[o][n][0] = 0, t[o][n][1] = 0) } } },
                Ft = function(t, e, n) { var r = e.map((function(t) { return t.props.dataKey })); return function() { var t = Object(ot.a)([]),
                            e = at,
                            n = nt,
                            r = st;

                        function i(i) { var o, a, s, u = Array.from(t.apply(this, arguments), ut),
                                c = u.length,
                                l = -1,
                                h = Object(rt.a)(i); try { for (h.s(); !(s = h.n()).done;) { var f = s.value; for (o = 0, ++l; o < c; ++o)(u[o][l] = [0, +r(f, u[o].key, l, i)]).data = f } } catch (p) { h.e(p) } finally { h.f() } for (o = 0, a = Object(it.a)(e(u)); o < c; ++o) u[a[o]].index = o; return n(u, a), u } return i.keys = function(e) { return arguments.length ? (t = "function" === typeof e ? e : Object(ot.a)(Array.from(e)), i) : t }, i.value = function(t) { return arguments.length ? (r = "function" === typeof t ? t : Object(ot.a)(+t), i) : r }, i.order = function(t) { return arguments.length ? (e = null == t ? at : "function" === typeof t ? t : Object(ot.a)(Array.from(t)), i) : e }, i.offset = function(t) { return arguments.length ? (n = null == t ? nt : t, i) : n }, i }().keys(r).value((function(t, e) { return +bt(t, e, 0) })).order(at).offset(Bt[n])(t) },
                zt = function(t, e, n, r, i, o) { if (!t) return null; var a = (o ? e.reverse() : e).reduce((function(t, e) { var i = e.props,
                            o = i.stackId; if (i.hide) return t; var a = e.props[n],
                            s = t[a] || { hasStack: !1, stackGroups: {} }; if (Object(ct.f)(o)) { var u = s.stackGroups[o] || { numericAxisId: n, cateAxisId: r, items: [] };
                            u.items.push(e), s.hasStack = !0, s.stackGroups[o] = u } else s.stackGroups[Object(ct.j)("_stackId_")] = { numericAxisId: n, cateAxisId: r, items: [e] }; return vt(vt({}, t), {}, gt({}, a, s)) }), {}); return Object.keys(a).reduce((function(e, o) { var s = a[o]; return s.hasStack && (s.stackGroups = Object.keys(s.stackGroups).reduce((function(e, o) { var a = s.stackGroups[o]; return vt(vt({}, e), {}, gt({}, o, { numericAxisId: n, cateAxisId: r, items: a.items, stackedData: Ft(t, a.items, i) })) }), {})), vt(vt({}, e), {}, gt({}, o, s)) }), {}) },
                Vt = function(t, e) { var n = e.realScaleType,
                        r = e.type,
                        i = e.tickCount,
                        o = e.originalDomain,
                        a = e.allowDecimals,
                        s = n || e.scale; if ("auto" !== s && "linear" !== s) return null; if (i && "number" === r && o && ("auto" === o[0] || "auto" === o[1])) { var u = t.domain(); if (!u.length) return null; var c = Q(u, i, a); return t.domain(function(t, e) { return "number" === e ? [b()(t), v()(t)] : t }(c, r)), { niceTicks: c } } if (i && "number" === r) { var l = t.domain(); return { niceTicks: Z(l, i, a) } } return null },
                Ut = function(t) { var e = t.axis,
                        n = t.ticks,
                        r = t.bandSize,
                        i = t.entry,
                        o = t.index,
                        a = t.dataKey; if ("category" === e.type) { if (!e.allowDuplicatedCategory && e.dataKey && !S()(i[e.dataKey])) { var s = Object(ct.a)(n, "value", i[e.dataKey]); if (s) return s.coordinate + r / 2 } return n[o] ? n[o].coordinate + r / 2 : null } var u = bt(i, S()(a) ? e.dataKey : a); return S()(u) ? null : e.scale(u) },
                Wt = function(t) { var e = t.axis,
                        n = t.ticks,
                        r = t.offset,
                        i = t.bandSize,
                        o = t.entry,
                        a = t.index; if ("category" === e.type) return n[a] ? n[a].coordinate + r : null; var s = bt(o, e.dataKey, e.domain[a]); return S()(s) ? null : e.scale(s) - i / 2 + r },
                Ht = function(t) { var e = t.numericAxis,
                        n = e.scale.domain(); if ("number" === e.type) { var r = Math.min(n[0], n[1]),
                            i = Math.max(n[0], n[1]); return r <= 0 && i >= 0 ? 0 : i < 0 ? i : r } return n[0] },
                qt = function(t, e) { var n = t.props.stackId; if (Object(ct.f)(n)) { var r = e[n]; if (r && r.items.length) { for (var i = -1, o = 0, a = r.items.length; o < a; o++)
                                if (r.items[o] === t) { i = o; break }
                            return i >= 0 ? r.stackedData[i] : null } } return null },
                Yt = function(t, e, n) { return Object.keys(t).reduce((function(r, i) { var o = t[i].stackedData.reduce((function(t, r) { var i = r.slice(e, n + 1).reduce((function(t, e) { return [b()(e.concat([t[0]]).filter(ct.g)), v()(e.concat([t[1]]).filter(ct.g))] }), [1 / 0, -1 / 0]); return [Math.min(t[0], i[0]), Math.max(t[1], i[1])] }), [1 / 0, -1 / 0]); return [Math.min(o[0], r[0]), Math.max(o[1], r[1])] }), [1 / 0, -1 / 0]).map((function(t) { return t === 1 / 0 || t === -1 / 0 ? 0 : t })) },
                $t = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
                Jt = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
                Gt = function(t, e, n) { if (!d()(t)) return e; var r = []; if (Object(ct.g)(t[0])) r[0] = n ? t[0] : Math.min(t[0], e[0]);
                    else if ($t.test(t[0])) { var i = +$t.exec(t[0])[1];
                        r[0] = e[0] - i } else O()(t[0]) ? r[0] = t[0](e[0]) : r[0] = e[0]; if (Object(ct.g)(t[1])) r[1] = n ? t[1] : Math.max(t[1], e[1]);
                    else if (Jt.test(t[1])) { var o = +Jt.exec(t[1])[1];
                        r[1] = e[1] + o } else O()(t[1]) ? r[1] = t[1](e[1]) : r[1] = e[1]; return r },
                Xt = function(t, e, n) { if (t && t.scale && t.scale.bandwidth) { var r = t.scale.bandwidth(); if (!n || r > 0) return r } if (t && e && e.length >= 2) { for (var i = a()(e, (function(t) { return t.coordinate })), o = 1 / 0, s = 1, u = i.length; s < u; s++) { var c = i[s],
                                l = i[s - 1];
                            o = Math.min((c.coordinate || 0) - (l.coordinate || 0), o) } return o === 1 / 0 ? 0 : o } return 0 },
                Qt = function(t, e, n) { return t && t.length ? i()(t, M()(n, "type.defaultProps.domain")) ? e : t : e },
                Zt = function(t, e) { var n = t.props,
                        r = n.dataKey,
                        i = n.name,
                        o = n.unit,
                        a = n.formatter,
                        s = n.tooltipType,
                        u = n.chartType; return vt(vt({}, Object(ft.c)(t)), {}, { dataKey: r, unit: o, formatter: a, name: i || r, color: wt(t), value: bt(e, r), type: s, payload: e, chartType: u }) } }, 797: function(t, e, n) { "use strict";
            n.d(e, "a", (function() { return r })); var r = { isSsr: !("undefined" !== typeof window && window.document && window.document.createElement && window.setTimeout), get: function(t) { return r[t] }, set: function(t, e) { if ("string" === typeof t) r[t] = e;
                    else { var n = Object.keys(t);
                        n && n.length && n.forEach((function(e) { r[e] = t[e] })) } } } }, 803: function(t, e, n) { var r = n(370);
            t.exports = function(t, e) { return r(t, e) } }, 804: function(t, e, n) { "use strict";
            n.d(e, "b", (function() { return d })), n.d(e, "d", (function() { return y })), n.d(e, "c", (function() { return v })), n.d(e, "a", (function() { return b })); var r = n(816),
                i = n.n(r),
                o = n(1016),
                a = n.n(o),
                s = n(795),
                u = n(789),
                c = n(772);

            function l(t, e) { for (var n = 0; n < e.length; n++) { var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r) } }

            function h(t, e) { var n = Object.keys(t); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), n.push.apply(n, r) } return n }

            function f(t) { for (var e = 1; e < arguments.length; e++) { var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? h(Object(n), !0).forEach((function(e) { p(t, e, n[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : h(Object(n)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })) } return t }

            function p(t, e, n) { return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t } var d = function(t, e, n, r, i) { var o = t.width,
                        a = t.height,
                        l = t.layout,
                        h = t.children,
                        d = Object.keys(e),
                        y = { left: n.left, leftMirror: n.left, right: o - n.right, rightMirror: o - n.right, top: n.top, topMirror: n.top, bottom: a - n.bottom, bottomMirror: a - n.bottom },
                        v = !!Object(u.b)(h, "Bar"); return d.reduce((function(o, a) { var u, h, d, g, b, m = e[a],
                            x = m.orientation,
                            w = m.domain,
                            O = m.padding,
                            _ = void 0 === O ? {} : O,
                            M = m.mirror,
                            j = m.reversed,
                            S = "".concat(x).concat(M ? "Mirror" : ""); if ("number" === m.type && ("gap" === m.padding || "no-gap" === m.padding)) { var E = w[1] - w[0],
                                k = 1 / 0,
                                A = m.categoricalDomain.sort();
                            A.forEach((function(t, e) { e > 0 && (k = Math.min((t || 0) - (A[e - 1] || 0), k)) })); var P = k / E,
                                C = "vertical" === m.layout ? n.height : n.width; if ("gap" === m.padding && (u = P * C / 2), "no-gap" === m.padding) { var T = Object(c.c)(t.barCategoryGap, P * C),
                                    I = P * C / 2;
                                u = I - T - (I - T) / C * T } }
                        h = "xAxis" === r ? [n.left + (_.left || 0) + (u || 0), n.left + n.width - (_.right || 0) - (u || 0)] : "yAxis" === r ? "horizontal" === l ? [n.top + n.height - (_.bottom || 0), n.top + (_.top || 0)] : [n.top + (_.top || 0) + (u || 0), n.top + n.height - (_.bottom || 0) - (u || 0)] : m.range, j && (h = [h[1], h[0]]); var N = Object(s.A)(m, i, v),
                            D = N.scale,
                            R = N.realScaleType;
                        D.domain(w).range(h), Object(s.c)(D); var L = Object(s.u)(D, f(f({}, m), {}, { realScaleType: R })); "xAxis" === r ? (b = "top" === x && !M || "bottom" === x && M, d = n.left, g = y[S] - b * m.height) : "yAxis" === r && (b = "left" === x && !M || "right" === x && M, d = y[S] - b * m.width, g = n.top); var B = f(f(f({}, m), L), {}, { realScaleType: R, x: d, y: g, scale: D, width: "xAxis" === r ? n.width : m.width, height: "yAxis" === r ? n.height : m.height }); return B.bandSize = Object(s.f)(B, L), m.hide || "xAxis" !== r ? m.hide || (y[S] += (b ? -1 : 1) * B.width) : y[S] += (b ? -1 : 1) * B.height, f(f({}, o), {}, p({}, a, B)) }), {}) },
                y = function(t, e) { var n = t.x,
                        r = t.y,
                        i = e.x,
                        o = e.y; return { x: Math.min(n, i), y: Math.min(r, o), width: Math.abs(i - n), height: Math.abs(o - r) } },
                v = function(t) { var e = t.x1,
                        n = t.y1,
                        r = t.x2,
                        i = t.y2; return y({ x: e, y: n }, { x: r, y: i }) },
                g = function() {
                    function t(e) {! function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, t), this.scale = void 0, this.scale = e } var e, n, r; return e = t, r = [{ key: "create", value: function(e) { return new t(e) } }], (n = [{ key: "domain", get: function() { return this.scale.domain } }, { key: "range", get: function() { return this.scale.range } }, { key: "rangeMin", get: function() { return this.range()[0] } }, { key: "rangeMax", get: function() { return this.range()[1] } }, { key: "bandwidth", get: function() { return this.scale.bandwidth } }, { key: "apply", value: function(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                n = e.bandAware,
                                r = e.position; if (void 0 !== t) { if (r) switch (r) {
                                    case "start":
                                        return this.scale(t);
                                    case "middle":
                                        var i = this.bandwidth ? this.bandwidth() / 2 : 0; return this.scale(t) + i;
                                    case "end":
                                        var o = this.bandwidth ? this.bandwidth() : 0; return this.scale(t) + o;
                                    default:
                                        return this.scale(t) }
                                if (n) { var a = this.bandwidth ? this.bandwidth() / 2 : 0; return this.scale(t) + a } return this.scale(t) } } }, { key: "isInRange", value: function(t) { var e = this.range(),
                                n = e[0],
                                r = e[e.length - 1]; return n <= r ? t >= n && t <= r : t >= r && t <= n } }]) && l(e.prototype, n), r && l(e, r), t }();
            g.EPS = 1e-4; var b = function(t) { var e = Object.keys(t).reduce((function(e, n) { return f(f({}, e), {}, p({}, n, g.create(t[n]))) }), {}); return f(f({}, e), {}, { apply: function(t) { var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            r = n.bandAware,
                            i = n.position; return a()(t, (function(t, n) { return e[n].apply(t, { bandAware: r, position: i }) })) }, isInRange: function(t) { return i()(t, (function(t, n) { return e[n].isInRange(t) })) } }) } }, 805: function(t, e, n) { "use strict";
            n.d(e, "a", (function() { return j })); var r = n(127),
                i = n.n(r),
                o = n(310),
                a = n.n(o),
                s = n(781),
                u = n.n(s),
                c = n(1),
                l = n.n(c),
                h = n(477),
                f = n.n(h),
                p = n(846),
                d = n(789),
                y = n(772),
                v = n(840),
                g = n(773);

            function b(t) { return function(t) { if (Array.isArray(t)) return m(t) }(t) || function(t) { if ("undefined" !== typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t) }(t) || function(t, e) { if (!t) return; if ("string" === typeof t) return m(t, e); var n = Object.prototype.toString.call(t).slice(8, -1); "Object" === n && t.constructor && (n = t.constructor.name); if ("Map" === n || "Set" === n) return Array.from(t); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return m(t, e) }(t) || function() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() }

            function m(t, e) {
                (null == e || e > t.length) && (e = t.length); for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n]; return r }

            function x(t, e) { var n = Object.keys(t); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), n.push.apply(n, r) } return n }

            function w(t) { for (var e = 1; e < arguments.length; e++) { var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? x(Object(n), !0).forEach((function(e) { O(t, e, n[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : x(Object(n)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })) } return t }

            function O(t, e, n) { return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t }

            function _() { return (_ = Object.assign || function(t) { for (var e = 1; e < arguments.length; e++) { var n = arguments[e]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]) } return t }).apply(this, arguments) } var M = function(t, e, n) { var r, i, o = t.position,
                    a = t.viewBox,
                    s = t.offset,
                    c = t.className,
                    h = a,
                    p = h.cx,
                    d = h.cy,
                    g = h.innerRadius,
                    b = h.outerRadius,
                    m = h.startAngle,
                    x = h.endAngle,
                    w = h.clockWise,
                    O = (g + b) / 2,
                    M = function(t, e) { return Object(y.i)(e - t) * Math.min(Math.abs(e - t), 360) }(m, x),
                    j = M >= 0 ? 1 : -1; "insideStart" === o ? (r = m + j * s, i = w) : "insideEnd" === o ? (r = x - j * s, i = !w) : "end" === o && (r = x + j * s, i = w), i = M <= 0 ? i : !i; var S = Object(v.c)(p, d, O, r),
                    E = Object(v.c)(p, d, O, r + 359 * (i ? 1 : -1)),
                    k = "M".concat(S.x, ",").concat(S.y, "\n    A").concat(O, ",").concat(O, ",0,1,").concat(i ? 0 : 1, ",\n    ").concat(E.x, ",").concat(E.y),
                    A = u()(t.id) ? Object(y.j)("recharts-radial-line-") : t.id; return l.a.createElement("text", _({}, n, { dominantBaseline: "central", className: f()("recharts-radial-bar-label", c) }), l.a.createElement("defs", null, l.a.createElement("path", { id: A, d: k })), l.a.createElement("textPath", { xlinkHref: "#".concat(A) }, e)) };

            function j(t) { var e, n = t.viewBox,
                    r = t.position,
                    o = t.value,
                    s = t.children,
                    h = t.content,
                    d = t.className,
                    b = void 0 === d ? "" : d,
                    m = t.textBreakAll; if (!n || u()(o) && u()(s) && !Object(c.isValidElement)(h) && !a()(h)) return null; if (Object(c.isValidElement)(h)) return Object(c.cloneElement)(h, t); if (a()(h)) { if (e = Object(c.createElement)(h, t), Object(c.isValidElement)(e)) return e } else e = function(t) { var e = t.value,
                        n = t.formatter,
                        r = u()(t.children) ? e : t.children; return a()(n) ? n(r) : r }(t); var x = function(t) { return Object(y.g)(t.cx) }(n),
                    O = Object(g.c)(t, !0); if (x && ("insideStart" === r || "insideEnd" === r || "end" === r)) return M(t, e, O); var j = x ? function(t) { var e = t.viewBox,
                        n = t.offset,
                        r = t.position,
                        i = e,
                        o = i.cx,
                        a = i.cy,
                        s = i.innerRadius,
                        u = i.outerRadius,
                        c = (i.startAngle + i.endAngle) / 2; if ("outside" === r) { var l = Object(v.c)(o, a, u + n, c),
                            h = l.x; return { x: h, y: l.y, textAnchor: h >= o ? "start" : "end", verticalAnchor: "middle" } } if ("center" === r) return { x: o, y: a, textAnchor: "middle", verticalAnchor: "middle" }; if ("centerTop" === r) return { x: o, y: a, textAnchor: "middle", verticalAnchor: "start" }; if ("centerBottom" === r) return { x: o, y: a, textAnchor: "middle", verticalAnchor: "end" }; var f = (s + u) / 2,
                        p = Object(v.c)(o, a, f, c); return { x: p.x, y: p.y, textAnchor: "middle", verticalAnchor: "middle" } }(t) : function(t) { var e = t.viewBox,
                        n = t.parentViewBox,
                        r = t.offset,
                        o = t.position,
                        a = e,
                        s = a.x,
                        u = a.y,
                        c = a.width,
                        l = a.height,
                        h = l >= 0 ? 1 : -1,
                        f = h * r,
                        p = h > 0 ? "end" : "start",
                        d = h > 0 ? "start" : "end",
                        v = c >= 0 ? 1 : -1,
                        g = v * r,
                        b = v > 0 ? "end" : "start",
                        m = v > 0 ? "start" : "end"; if ("top" === o) return w(w({}, { x: s + c / 2, y: u - h * r, textAnchor: "middle", verticalAnchor: p }), n ? { height: Math.max(u - n.y, 0), width: c } : {}); if ("bottom" === o) return w(w({}, { x: s + c / 2, y: u + l + f, textAnchor: "middle", verticalAnchor: d }), n ? { height: Math.max(n.y + n.height - (u + l), 0), width: c } : {}); if ("left" === o) { var x = { x: s - g, y: u + l / 2, textAnchor: b, verticalAnchor: "middle" }; return w(w({}, x), n ? { width: Math.max(x.x - n.x, 0), height: l } : {}) } if ("right" === o) { var O = { x: s + c + g, y: u + l / 2, textAnchor: m, verticalAnchor: "middle" }; return w(w({}, O), n ? { width: Math.max(n.x + n.width - O.x, 0), height: l } : {}) } var _ = n ? { width: c, height: l } : {}; return "insideLeft" === o ? w({ x: s + g, y: u + l / 2, textAnchor: m, verticalAnchor: "middle" }, _) : "insideRight" === o ? w({ x: s + c - g, y: u + l / 2, textAnchor: b, verticalAnchor: "middle" }, _) : "insideTop" === o ? w({ x: s + c / 2, y: u + f, textAnchor: "middle", verticalAnchor: d }, _) : "insideBottom" === o ? w({ x: s + c / 2, y: u + l - f, textAnchor: "middle", verticalAnchor: p }, _) : "insideTopLeft" === o ? w({ x: s + g, y: u + f, textAnchor: m, verticalAnchor: d }, _) : "insideTopRight" === o ? w({ x: s + c - g, y: u + f, textAnchor: b, verticalAnchor: d }, _) : "insideBottomLeft" === o ? w({ x: s + g, y: u + l - f, textAnchor: m, verticalAnchor: p }, _) : "insideBottomRight" === o ? w({ x: s + c - g, y: u + l - f, textAnchor: b, verticalAnchor: p }, _) : i()(o) && (Object(y.g)(o.x) || Object(y.h)(o.x)) && (Object(y.g)(o.y) || Object(y.h)(o.y)) ? w({ x: s + Object(y.c)(o.x, c), y: u + Object(y.c)(o.y, l), textAnchor: "end", verticalAnchor: "end" }, _) : w({ x: s + c / 2, y: u + l / 2, textAnchor: "middle", verticalAnchor: "middle" }, _) }(t); return l.a.createElement(p.a, _({ className: f()("recharts-label", b) }, O, j, { breakAll: m }), e) }
            j.displayName = "Label", j.defaultProps = { offset: 5 }; var S = function(t) { var e = t.cx,
                        n = t.cy,
                        r = t.angle,
                        i = t.startAngle,
                        o = t.endAngle,
                        a = t.r,
                        s = t.radius,
                        u = t.innerRadius,
                        c = t.outerRadius,
                        l = t.x,
                        h = t.y,
                        f = t.top,
                        p = t.left,
                        d = t.width,
                        v = t.height,
                        g = t.clockWise,
                        b = t.labelViewBox; if (b) return b; if (Object(y.g)(d) && Object(y.g)(v)) { if (Object(y.g)(l) && Object(y.g)(h)) return { x: l, y: h, width: d, height: v }; if (Object(y.g)(f) && Object(y.g)(p)) return { x: f, y: p, width: d, height: v } } return Object(y.g)(l) && Object(y.g)(h) ? { x: l, y: h, width: 0, height: 0 } : Object(y.g)(e) && Object(y.g)(n) ? { cx: e, cy: n, startAngle: i || r || 0, endAngle: o || r || 0, innerRadius: u || 0, outerRadius: c || s || a || 0, clockWise: g } : t.viewBox ? t.viewBox : {} },
                E = function(t, e) { return t ? !0 === t ? l.a.createElement(j, { key: "label-implicit", viewBox: e }) : Object(y.f)(t) ? l.a.createElement(j, { key: "label-implicit", viewBox: e, value: t }) : Object(c.isValidElement)(t) ? t.type === j ? Object(c.cloneElement)(t, { key: "label-implicit", viewBox: e }) : l.a.createElement(j, { key: "label-implicit", content: t, viewBox: e }) : a()(t) ? l.a.createElement(j, { key: "label-implicit", content: t, viewBox: e }) : i()(t) ? l.a.createElement(j, _({ viewBox: e }, t, { key: "label-implicit" })) : null : null };
            j.parseViewBox = S, j.renderCallByParent = function(t, e) { var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2]; if (!t || !t.children && n && !t.label) return null; var r = t.children,
                    i = S(t),
                    o = Object(d.a)(r, j.displayName).map((function(t, n) { return Object(c.cloneElement)(t, { viewBox: e || i, key: "label-".concat(n) }) })); if (!n) return o; var a = E(t.label, e || i); return [a].concat(b(o)) } }, 816: function(t, e, n) { var r = n(833),
                i = n(834),
                o = n(244),
                a = n(99),
                s = n(367);
            t.exports = function(t, e, n) { var u = a(t) ? r : i; return n && s(t, e, n) && (e = void 0), u(t, o(e, 3)) } }, 817: function(t, e, n) { "use strict";
            n.d(e, "a", (function() { return o })); var r = n(20),
                i = n(15);

            function o(t, e) { Object(i.a)(2, arguments); var n = Object(r.default)(t),
                    o = Object(r.default)(e),
                    a = n.getTime() - o.getTime(); return a < 0 ? -1 : a > 0 ? 1 : a } }, 818: function(t, e, n) { "use strict";
            n.d(e, "a", (function() { return r })); var r = function(t, e) { for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++) r[i - 2] = arguments[i] } }, 819: function(t, e, n) { "use strict";
            e.a = function(t) { return function() { return t } } }, 820: function(t, e, n) { "use strict";
            n.d(e, "b", (function() { return o })), n.d(e, "a", (function() { return a })); var r = n(784),
                i = n(777),
                o = Symbol("implicit");

            function a() { var t = new Map,
                    e = [],
                    n = [],
                    s = o;

                function u(r) { var i = r + "",
                        a = t.get(i); if (!a) { if (s !== o) return s;
                        t.set(i, a = e.push(r)) } return n[(a - 1) % n.length] } return u.domain = function(n) { if (!arguments.length) return e.slice();
                    e = [], t = new Map; var i, o = Object(r.a)(n); try { for (o.s(); !(i = o.n()).done;) { var a = i.value,
                                s = a + "";
                            t.has(s) || t.set(s, e.push(a)) } } catch (c) { o.e(c) } finally { o.f() } return u }, u.range = function(t) { return arguments.length ? (n = Array.from(t), u) : n.slice() }, u.unknown = function(t) { return arguments.length ? (s = t, u) : s }, u.copy = function() { return a(e, n).unknown(s) }, i.b.apply(u, arguments), u } }, 821: function(t, e, n) { "use strict"; var r = n(822);
            e.a = function(t) { return (t = Object(r.b)(Math.abs(t))) ? t[1] : NaN } }, 822: function(t, e, n) { "use strict";

            function r(t, e) { if ((n = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf("e")) < 0) return null; var n, r = t.slice(0, n); return [r.length > 1 ? r[0] + r.slice(2) : r, +t.slice(n + 1)] }
            n.d(e, "b", (function() { return r })), e.a = function(t) { return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10) } }, 830: function(t, e, n) { "use strict";
            n.d(e, "b", (function() { return _ })); var r = n(1),
                i = n.n(r),
                o = n(48),
                a = n.n(o),
                s = n(1028),
                u = n(899),
                c = n.n(u);

            function l(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    n = -1,
                    r = function r(i) { n < 0 && (n = i), i - n > e ? (t(i), n = -1) : c()(r) };
                c()(r) }

            function h(t) { return (h = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t })(t) }

            function f(t) { return function(t) { if (Array.isArray(t)) return t }(t) || function(t) { if ("undefined" !== typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t) }(t) || function(t, e) { if (!t) return; if ("string" === typeof t) return p(t, e); var n = Object.prototype.toString.call(t).slice(8, -1); "Object" === n && t.constructor && (n = t.constructor.name); if ("Map" === n || "Set" === n) return Array.from(t); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return p(t, e) }(t) || function() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() }

            function p(t, e) {
                (null == e || e > t.length) && (e = t.length); for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n]; return r }

            function d() { var t = function() { return null },
                    e = !1,
                    n = function n(r) { if (!e) { if (Array.isArray(r)) { if (!r.length) return; var i = f(r),
                                    o = i[0],
                                    a = i.slice(1); return "number" === typeof o ? void l(n.bind(null, a), o) : (n(o), void l(n.bind(null, a))) } "object" === h(r) && t(r), "function" === typeof r && r() } }; return { stop: function() { e = !0 }, start: function(t) { e = !1, n(t) }, subscribe: function(e) { return t = e,
                            function() { t = function() { return null } } } } }

            function y(t, e) { var n = Object.keys(t); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), n.push.apply(n, r) } return n }

            function v(t) { for (var e = 1; e < arguments.length; e++) { var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? y(Object(n), !0).forEach((function(e) { g(t, e, n[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : y(Object(n)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })) } return t }

            function g(t, e, n) { return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t } var b = ["Webkit", "Moz", "O", "ms"],
                m = ["-webkit-", "-moz-", "-o-", "-ms-"],
                x = ["transform", "transformOrigin", "transition"],
                w = function(t) { return t },
                O = function(t, e) { return Object.keys(e).reduce((function(n, r) { return v(v({}, n), {}, g({}, r, t(r, e[r]))) }), {}) },
                _ = function(t) { return Object.keys(t).reduce((function(t, e) { return v(v({}, t), function(t, e) { if (-1 === x.indexOf(t)) return g({}, t, e); var n = "transition" === t,
                                r = t.replace(/(\w)/, (function(t) { return t.toUpperCase() })),
                                i = e; return b.reduce((function(t, o, a) { return n && (i = e.replace(/(transform|transform-origin)/gim, "".concat(m[a], "$1"))), v(v({}, t), {}, g({}, o + r, i)) }), {}) }(e, t[e])) }), t) },
                M = function(t, e, n) { return t.map((function(t) { return "".concat((r = t, r.replace(/([A-Z])/g, (function(t) { return "-".concat(t.toLowerCase()) }))), " ").concat(e, "ms ").concat(n); var r })).join(",") };

            function j(t, e) { return function(t) { if (Array.isArray(t)) return t }(t) || function(t, e) { if ("undefined" === typeof Symbol || !(Symbol.iterator in Object(t))) return; var n = [],
                        r = !0,
                        i = !1,
                        o = void 0; try { for (var a, s = t[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0); } catch (u) { i = !0, o = u } finally { try { r || null == s.return || s.return() } finally { if (i) throw o } } return n }(t, e) || E(t, e) || function() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() }

            function S(t) { return function(t) { if (Array.isArray(t)) return k(t) }(t) || function(t) { if ("undefined" !== typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t) }(t) || E(t) || function() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() }

            function E(t, e) { if (t) { if ("string" === typeof t) return k(t, e); var n = Object.prototype.toString.call(t).slice(8, -1); return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? k(t, e) : void 0 } }

            function k(t, e) {
                (null == e || e > t.length) && (e = t.length); for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n]; return r } var A = 1e-4,
                P = function(t, e) { return [0, 3 * t, 3 * e - 6 * t, 3 * t - 3 * e + 1] },
                C = function(t, e) { return t.map((function(t, n) { return t * Math.pow(e, n) })).reduce((function(t, e) { return t + e })) },
                T = function(t, e) { return function(n) { var r = P(t, e); return C(r, n) } },
                I = function(t, e) { return function(n) { var r = P(t, e),
                            i = [].concat(S(r.map((function(t, e) { return t * e })).slice(1)), [0]); return C(i, n) } },
                N = function() { for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n]; var r = e[0],
                        i = e[1],
                        o = e[2],
                        a = e[3]; if (1 === e.length) switch (e[0]) {
                        case "linear":
                            r = 0, i = 0, o = 1, a = 1; break;
                        case "ease":
                            r = .25, i = .1, o = .25, a = 1; break;
                        case "ease-in":
                            r = .42, i = 0, o = 1, a = 1; break;
                        case "ease-out":
                            r = .42, i = 0, o = .58, a = 1; break;
                        case "ease-in-out":
                            r = 0, i = 0, o = .58, a = 1; break;
                        default:
                            var s = e[0].split("("); if ("cubic-bezier" === s[0] && 4 === s[1].split(")")[0].split(",").length) { var u = s[1].split(")")[0].split(",").map((function(t) { return parseFloat(t) })),
                                    c = j(u, 4);
                                r = c[0], i = c[1], o = c[2], a = c[3] } }[r, o, i, a].every((function(t) { return "number" === typeof t && t >= 0 && t <= 1 })); var l = T(r, o),
                        h = T(i, a),
                        f = I(r, o),
                        p = function(t) { return t > 1 ? 1 : t < 0 ? 0 : t },
                        d = function(t) { for (var e = t > 1 ? 1 : t, n = e, r = 0; r < 8; ++r) { var i = l(n) - e,
                                    o = f(n); if (Math.abs(i - e) < A || o < A) return h(n);
                                n = p(n - i / o) } return h(n) }; return d.isStepper = !1, d },
                D = function() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        e = t.stiff,
                        n = void 0 === e ? 100 : e,
                        r = t.damping,
                        i = void 0 === r ? 8 : r,
                        o = t.dt,
                        a = void 0 === o ? 17 : o,
                        s = function(t, e, r) { var o = r + (-(t - e) * n - r * i) * a / 1e3,
                                s = r * a / 1e3 + t; return Math.abs(s - e) < A && Math.abs(o) < A ? [e, 0] : [s, o] }; return s.isStepper = !0, s.dt = a, s };

            function R(t) { return function(t) { if (Array.isArray(t)) return U(t) }(t) || function(t) { if ("undefined" !== typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t) }(t) || V(t) || function() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() }

            function L(t, e) { var n = Object.keys(t); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), n.push.apply(n, r) } return n }

            function B(t) { for (var e = 1; e < arguments.length; e++) { var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? L(Object(n), !0).forEach((function(e) { F(t, e, n[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : L(Object(n)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })) } return t }

            function F(t, e, n) { return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t }

            function z(t, e) { return function(t) { if (Array.isArray(t)) return t }(t) || function(t, e) { if ("undefined" === typeof Symbol || !(Symbol.iterator in Object(t))) return; var n = [],
                        r = !0,
                        i = !1,
                        o = void 0; try { for (var a, s = t[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0); } catch (u) { i = !0, o = u } finally { try { r || null == s.return || s.return() } finally { if (i) throw o } } return n }(t, e) || V(t, e) || function() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() }

            function V(t, e) { if (t) { if ("string" === typeof t) return U(t, e); var n = Object.prototype.toString.call(t).slice(8, -1); return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? U(t, e) : void 0 } }

            function U(t, e) {
                (null == e || e > t.length) && (e = t.length); for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n]; return r } var W = function(t, e, n) { return t + (e - t) * n },
                H = function(t) { return t.from !== t.to },
                q = function t(e, n, r) { var i = O((function(t, n) { if (H(n)) { var r = z(e(n.from, n.to, n.velocity), 2),
                                i = r[0],
                                o = r[1]; return B(B({}, n), {}, { from: i, velocity: o }) } return n }), n); return r < 1 ? O((function(t, e) { return H(e) ? B(B({}, e), {}, { velocity: W(e.velocity, i[t].velocity, r), from: W(e.from, i[t].from, r) }) : e }), n) : t(e, i, r - 1) },
                Y = function(t, e, n, r, i) { var o, a, s, l, h = (o = t, a = e, [Object.keys(o), Object.keys(a)].reduce((function(t, e) { return t.filter((function(t) { return e.includes(t) })) }))),
                        f = h.reduce((function(n, r) { return B(B({}, n), {}, F({}, r, [t[r], e[r]])) }), {}),
                        p = h.reduce((function(n, r) { return B(B({}, n), {}, F({}, r, { from: t[r], velocity: 0, to: e[r] })) }), {}),
                        d = -1,
                        y = function() { return null }; return y = n.isStepper ? function(r) { s || (s = r); var o = (r - s) / n.dt;
                            p = q(n, p, o), i(B(B(B({}, t), e), O((function(t, e) { return e.from }), p))), s = r, Object.values(p).filter(H).length && (d = c()(y)) } : function(o) { l || (l = o); var a = (o - l) / r,
                                s = O((function(t, e) { return W.apply(void 0, R(e).concat([n(a)])) }), f); if (i(B(B(B({}, t), e), s)), a < 1) d = c()(y);
                            else { var u = O((function(t, e) { return W.apply(void 0, R(e).concat([n(1)])) }), f);
                                i(B(B(B({}, t), e), u)) } },
                        function() { return c()(y),
                                function() { Object(u.cancel)(d) } } };

            function $(t) { return ($ = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t })(t) }

            function J(t, e) { if (null == t) return {}; var n, r, i = function(t, e) { if (null == t) return {}; var n, r, i = {},
                        o = Object.keys(t); for (r = 0; r < o.length; r++) n = o[r], e.indexOf(n) >= 0 || (i[n] = t[n]); return i }(t, e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(t); for (r = 0; r < o.length; r++) n = o[r], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (i[n] = t[n]) } return i }

            function G(t) { return function(t) { if (Array.isArray(t)) return X(t) }(t) || function(t) { if ("undefined" !== typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t) }(t) || function(t, e) { if (!t) return; if ("string" === typeof t) return X(t, e); var n = Object.prototype.toString.call(t).slice(8, -1); "Object" === n && t.constructor && (n = t.constructor.name); if ("Map" === n || "Set" === n) return Array.from(t); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return X(t, e) }(t) || function() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() }

            function X(t, e) {
                (null == e || e > t.length) && (e = t.length); for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n]; return r }

            function Q(t, e) { var n = Object.keys(t); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), n.push.apply(n, r) } return n }

            function Z(t) { for (var e = 1; e < arguments.length; e++) { var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Q(Object(n), !0).forEach((function(e) { K(t, e, n[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Q(Object(n)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })) } return t }

            function K(t, e, n) { return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t }

            function tt(t, e) { for (var n = 0; n < e.length; n++) { var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r) } }

            function et(t, e) { return (et = Object.setPrototypeOf || function(t, e) { return t.__proto__ = e, t })(t, e) }

            function nt(t) { var e = function() { if ("undefined" === typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" === typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = ot(t); if (e) { var i = ot(this).constructor;
                        n = Reflect.construct(r, arguments, i) } else n = r.apply(this, arguments); return rt(this, n) } }

            function rt(t, e) { return !e || "object" !== $(e) && "function" !== typeof e ? it(t) : e }

            function it(t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t }

            function ot(t) { return (ot = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) { return t.__proto__ || Object.getPrototypeOf(t) })(t) } var at = function(t) {! function(t, e) { if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), e && et(t, e) }(u, t); var e, n, o, a = nt(u);

                function u(t, e) { var n;! function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, u); var r = (n = a.call(this, t, e)).props,
                        i = r.isActive,
                        o = r.attributeName,
                        s = r.from,
                        c = r.to,
                        l = r.steps,
                        h = r.children; if (n.handleStyleChange = n.handleStyleChange.bind(it(n)), n.changeStyle = n.changeStyle.bind(it(n)), !i) return n.state = { style: {} }, "function" === typeof h && (n.state = { style: c }), rt(n); if (l && l.length) n.state = { style: l[0].style };
                    else if (s) { if ("function" === typeof h) return n.state = { style: s }, rt(n);
                        n.state = { style: o ? K({}, o, s) : s } } else n.state = { style: {} }; return n } return e = u, (n = [{ key: "componentDidMount", value: function() { var t = this.props,
                            e = t.isActive,
                            n = t.canBegin;
                        this.mounted = !0, e && n && this.runAnimation(this.props) } }, { key: "componentDidUpdate", value: function(t) { var e = this.props,
                            n = e.isActive,
                            r = e.canBegin,
                            i = e.attributeName,
                            o = e.shouldReAnimate; if (r)
                            if (n) { if (!(Object(s.deepEqual)(t.to, this.props.to) && t.canBegin && t.isActive)) { var a = !t.canBegin || !t.isActive;
                                    this.manager && this.manager.stop(), this.stopJSAnimation && this.stopJSAnimation(); var u = a || o ? this.props.from : t.to; if (this.state && this.state.style) { var c = { style: i ? K({}, i, u) : u };
                                        (i && this.state.style[i] !== u || !i && this.state.style !== u) && this.setState(c) }
                                    this.runAnimation(Z(Z({}, this.props), {}, { from: u, begin: 0 })) } } else { var l = { style: i ? K({}, i, this.props.to) : this.props.to };
                                this.state && this.state.style && (i && this.state.style[i] !== this.props.to || !i && this.state.style !== this.props.to) && this.setState(l) } } }, { key: "componentWillUnmount", value: function() { this.mounted = !1, this.unSubscribe && this.unSubscribe(), this.manager && (this.manager.stop(), this.manager = null), this.stopJSAnimation && this.stopJSAnimation() } }, { key: "runJSAnimation", value: function(t) { var e = this,
                            n = t.from,
                            r = t.to,
                            i = t.duration,
                            o = t.easing,
                            a = t.begin,
                            s = t.onAnimationEnd,
                            u = t.onAnimationStart,
                            c = Y(n, r, function() { for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n]; var r = e[0]; if ("string" === typeof r) switch (r) {
                                    case "ease":
                                    case "ease-in-out":
                                    case "ease-out":
                                    case "ease-in":
                                    case "linear":
                                        return N(r);
                                    case "spring":
                                        return D();
                                    default:
                                        if ("cubic-bezier" === r.split("(")[0]) return N(r) }
                                return "function" === typeof r ? r : null }(o), i, this.changeStyle);
                        this.manager.start([u, a, function() { e.stopJSAnimation = c() }, i, s]) } }, { key: "runStepAnimation", value: function(t) { var e = this,
                            n = t.steps,
                            r = t.begin,
                            i = t.onAnimationStart,
                            o = n[0],
                            a = o.style,
                            s = o.duration,
                            u = void 0 === s ? 0 : s; return this.manager.start([i].concat(G(n.reduce((function(t, r, i) { if (0 === i) return t; var o = r.duration,
                                a = r.easing,
                                s = void 0 === a ? "ease" : a,
                                u = r.style,
                                c = r.properties,
                                l = r.onAnimationEnd,
                                h = i > 0 ? n[i - 1] : r,
                                f = c || Object.keys(u); if ("function" === typeof s || "spring" === s) return [].concat(G(t), [e.runJSAnimation.bind(e, { from: h.style, to: u, duration: o, easing: s }), o]); var p = M(f, o, s),
                                d = Z(Z(Z({}, h.style), u), {}, { transition: p }); return [].concat(G(t), [d, o, l]).filter(w) }), [a, Math.max(u, r)])), [t.onAnimationEnd])) } }, { key: "runAnimation", value: function(t) { this.manager || (this.manager = d()); var e = t.begin,
                            n = t.duration,
                            r = t.attributeName,
                            i = t.to,
                            o = t.easing,
                            a = t.onAnimationStart,
                            s = t.onAnimationEnd,
                            u = t.steps,
                            c = t.children,
                            l = this.manager; if (this.unSubscribe = l.subscribe(this.handleStyleChange), "function" !== typeof o && "function" !== typeof c && "spring" !== o)
                            if (u.length > 1) this.runStepAnimation(t);
                            else { var h = r ? K({}, r, i) : i,
                                    f = M(Object.keys(h), n, o);
                                l.start([a, e, Z(Z({}, h), {}, { transition: f }), n, s]) }
                        else this.runJSAnimation(t) } }, { key: "handleStyleChange", value: function(t) { this.changeStyle(t) } }, { key: "changeStyle", value: function(t) { this.mounted && this.setState({ style: t }) } }, { key: "render", value: function() { var t = this.props,
                            e = t.children,
                            n = (t.begin, t.duration, t.attributeName, t.easing, t.isActive),
                            o = (t.steps, t.from, t.to, t.canBegin, t.onAnimationEnd, t.shouldReAnimate, t.onAnimationReStart, J(t, ["children", "begin", "duration", "attributeName", "easing", "isActive", "steps", "from", "to", "canBegin", "onAnimationEnd", "shouldReAnimate", "onAnimationReStart"])),
                            a = r.Children.count(e),
                            s = _(this.state.style); if ("function" === typeof e) return e(s); if (!n || 0 === a) return e; var u = function(t) { var e = t.props,
                                n = e.style,
                                i = void 0 === n ? {} : n,
                                a = e.className; return Object(r.cloneElement)(t, Z(Z({}, o), {}, { style: Z(Z({}, i), s), className: a })) }; return 1 === a ? u(r.Children.only(e)) : i.a.createElement("div", null, r.Children.map(e, (function(t) { return u(t) }))) } }]) && tt(e.prototype, n), o && tt(e, o), u }(r.PureComponent);
            at.displayName = "Animate", at.propTypes = { from: a.a.oneOfType([a.a.object, a.a.string]), to: a.a.oneOfType([a.a.object, a.a.string]), attributeName: a.a.string, duration: a.a.number, begin: a.a.number, easing: a.a.oneOfType([a.a.string, a.a.func]), steps: a.a.arrayOf(a.a.shape({ duration: a.a.number.isRequired, style: a.a.object.isRequired, easing: a.a.oneOfType([a.a.oneOf(["ease", "ease-in", "ease-out", "ease-in-out", "linear"]), a.a.func]), properties: a.a.arrayOf("string"), onAnimationEnd: a.a.func })), children: a.a.oneOfType([a.a.node, a.a.func]), isActive: a.a.bool, canBegin: a.a.bool, onAnimationEnd: a.a.func, shouldReAnimate: a.a.bool, onAnimationStart: a.a.func, onAnimationReStart: a.a.func }, at.defaultProps = { begin: 0, duration: 1e3, from: "", to: "", attributeName: "", easing: "ease", isActive: !0, canBegin: !0, steps: [], onAnimationEnd: function() {}, onAnimationStart: function() {} }; var st = at,
                ut = n(900);

            function ct(t) { return (ct = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t })(t) }

            function lt() { return (lt = Object.assign || function(t) { for (var e = 1; e < arguments.length; e++) { var n = arguments[e]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]) } return t }).apply(this, arguments) }

            function ht(t, e) { if (null == t) return {}; var n, r, i = function(t, e) { if (null == t) return {}; var n, r, i = {},
                        o = Object.keys(t); for (r = 0; r < o.length; r++) n = o[r], e.indexOf(n) >= 0 || (i[n] = t[n]); return i }(t, e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(t); for (r = 0; r < o.length; r++) n = o[r], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (i[n] = t[n]) } return i }

            function ft(t, e) { var n = Object.keys(t); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), n.push.apply(n, r) } return n }

            function pt(t) { for (var e = 1; e < arguments.length; e++) { var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? ft(Object(n), !0).forEach((function(e) { dt(t, e, n[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ft(Object(n)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })) } return t }

            function dt(t, e, n) { return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t }

            function yt(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

            function vt(t, e) { for (var n = 0; n < e.length; n++) { var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r) } }

            function gt(t, e) { return (gt = Object.setPrototypeOf || function(t, e) { return t.__proto__ = e, t })(t, e) }

            function bt(t) { var e = function() { if ("undefined" === typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" === typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = xt(t); if (e) { var i = xt(this).constructor;
                        n = Reflect.construct(r, arguments, i) } else n = r.apply(this, arguments); return mt(this, n) } }

            function mt(t, e) { return !e || "object" !== ct(e) && "function" !== typeof e ? function(t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t }(t) : e }

            function xt(t) { return (xt = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) { return t.__proto__ || Object.getPrototypeOf(t) })(t) }
            void 0 === Number.isFinite && (Number.isFinite = function(t) { return "number" === typeof t && isFinite(t) }); var wt = function() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        e = t.steps,
                        n = t.duration; return e && e.length ? e.reduce((function(t, e) { return t + (Number.isFinite(e.duration) && e.duration > 0 ? e.duration : 0) }), 0) : Number.isFinite(n) ? n : 0 },
                Ot = function(t) {! function(t, e) { if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), e && gt(t, e) }(s, t); var e, n, o, a = bt(s);

                    function s() { var t;
                        yt(this, s); for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r]; return (t = a.call.apply(a, [this].concat(n))).state = { isActive: !1 }, t.handleEnter = function(e, n) { var r = t.props,
                                i = r.appearOptions,
                                o = r.enterOptions;
                            t.handleStyleActive(n ? i : o) }, t.handleExit = function() { t.handleStyleActive(t.props.leaveOptions) }, t } return e = s, (n = [{ key: "handleStyleActive", value: function(t) { if (t) { var e = t.onAnimationEnd ? function() { t.onAnimationEnd() } : null;
                                this.setState(pt(pt({}, t), {}, { onAnimationEnd: e, isActive: !0 })) } } }, { key: "parseTimeout", value: function() { var t = this.props,
                                e = t.appearOptions,
                                n = t.enterOptions,
                                r = t.leaveOptions; return wt(e) + wt(n) + wt(r) } }, { key: "render", value: function() { var t = this,
                                e = this.props,
                                n = e.children,
                                o = (e.appearOptions, e.enterOptions, e.leaveOptions, ht(e, ["children", "appearOptions", "enterOptions", "leaveOptions"])); return i.a.createElement(ut.Transition, lt({}, o, { onEnter: this.handleEnter, onExit: this.handleExit, timeout: this.parseTimeout() }), (function() { return i.a.createElement(st, t.state, r.Children.only(n)) })) } }]) && vt(e.prototype, n), o && vt(e, o), s }(r.Component);
            Ot.propTypes = { appearOptions: a.a.object, enterOptions: a.a.object, leaveOptions: a.a.object, children: a.a.element }; var _t = Ot;

            function Mt(t) { var e = t.component,
                    n = t.children,
                    o = t.appear,
                    a = t.enter,
                    s = t.leave; return i.a.createElement(ut.TransitionGroup, { component: e }, r.Children.map(n, (function(t, e) { return i.a.createElement(_t, { appearOptions: o, enterOptions: a, leaveOptions: s, key: "child-".concat(e) }, t) }))) }
            Mt.propTypes = { appear: a.a.object, enter: a.a.object, leave: a.a.object, children: a.a.oneOfType([a.a.array, a.a.element]), component: a.a.any }, Mt.defaultProps = { component: "span" };
            e.a = st }, 833: function(t, e) { t.exports = function(t, e) { for (var n = -1, r = null == t ? 0 : t.length; ++n < r;)
                    if (!e(t[n], n, t)) return !1;
                return !0 } }, 834: function(t, e, n) { var r = n(369);
            t.exports = function(t, e) { var n = !0; return r(t, (function(t, r, i) { return n = !!e(t, r, i) })), n } }, 835: function(t, e, n) { "use strict";
            n.d(e, "a", (function() { return i })); var r = n(379);

            function i(t) { return Object(r.a)({}, t) } }, 837: function(t, e, n) { var r = n(889);
            t.exports = function(t) { return r(t) && t != +t } }, 838: function(t, e, n) { var r = n(187),
                i = n(99),
                o = n(170);
            t.exports = function(t) { return "string" == typeof t || !i(t) && o(t) && "[object String]" == r(t) } }, 839: function(t, e, n) { var r = n(481),
                i = n(500),
                o = n(490),
                a = n(367),
                s = o((function(t, e) { if (null == t) return []; var n = e.length; return n > 1 && a(t, e[0], e[1]) ? e = [] : n > 2 && a(e[0], e[1], e[2]) && (e = [e[0]]), i(t, r(e, 1), []) }));
            t.exports = s }, 840: function(t, e, n) { "use strict";
            n.d(e, "a", (function() { return a })), n.d(e, "c", (function() { return u })), n.d(e, "b", (function() { return h }));
            n(781), n(772), n(795);

            function r(t, e) { var n = Object.keys(t); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), n.push.apply(n, r) } return n }

            function i(t) { for (var e = 1; e < arguments.length; e++) { var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? r(Object(n), !0).forEach((function(e) { o(t, e, n[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })) } return t }

            function o(t, e, n) { return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t } var a = Math.PI / 180,
                s = function(t) { return 180 * t / Math.PI },
                u = function(t, e, n, r) { return { x: t + Math.cos(-a * r) * n, y: e + Math.sin(-a * r) * n } },
                c = function(t, e) { var n = t.x,
                        r = t.y,
                        i = e.cx,
                        o = e.cy,
                        a = function(t, e) { var n = t.x,
                                r = t.y,
                                i = e.x,
                                o = e.y; return Math.sqrt(Math.pow(n - i, 2) + Math.pow(r - o, 2)) }({ x: n, y: r }, { x: i, y: o }); if (a <= 0) return { radius: a }; var u = (n - i) / a,
                        c = Math.acos(u); return r > o && (c = 2 * Math.PI - c), { radius: a, angle: s(c), angleInRadian: c } },
                l = function(t, e) { var n = e.startAngle,
                        r = e.endAngle,
                        i = Math.floor(n / 360),
                        o = Math.floor(r / 360); return t + 360 * Math.min(i, o) },
                h = function(t, e) { var n = t.x,
                        r = t.y,
                        o = c({ x: n, y: r }, e),
                        a = o.radius,
                        s = o.angle,
                        u = e.innerRadius,
                        h = e.outerRadius; if (a < u || a > h) return !1; if (0 === a) return !0; var f, p = function(t) { var e = t.startAngle,
                                n = t.endAngle,
                                r = Math.floor(e / 360),
                                i = Math.floor(n / 360),
                                o = Math.min(r, i); return { startAngle: e - 360 * o, endAngle: n - 360 * o } }(e),
                        d = p.startAngle,
                        y = p.endAngle,
                        v = s; if (d <= y) { for (; v > y;) v -= 360; for (; v < d;) v += 360;
                        f = v >= d && v <= y } else { for (; v > d;) v -= 360; for (; v < y;) v += 360;
                        f = v >= y && v <= d } return f ? i(i({}, e), {}, { radius: a, angle: l(v, e) }) : null } }, 841: function(t, e, n) { var r = n(994)("toUpperCase");
            t.exports = r }, 842: function(t, e, n) { "use strict";

            function r(t, e) { for (var n in t)
                    if ({}.hasOwnProperty.call(t, n) && (!{}.hasOwnProperty.call(e, n) || t[n] !== e[n])) return !1;
                for (var r in e)
                    if ({}.hasOwnProperty.call(e, r) && !{}.hasOwnProperty.call(t, r)) return !1;
                return !0 }
            n.d(e, "a", (function() { return r })) }, 843: function(t, e, n) { "use strict";
            e.a = function(t, e) { return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN } }, 844: function(t, e, n) { "use strict";

            function r(t) { return +t }
            n.d(e, "a", (function() { return r })) }, 845: function(t, e, n) { "use strict";
            Array.prototype.slice;
            e.a = function(t) { return "object" === typeof t && "length" in t ? t : Array.from(t) } }, 846: function(t, e, n) { "use strict";
            n.d(e, "a", (function() { return I })); var r = n(781),
                i = n.n(r),
                o = n(1),
                a = n.n(o),
                s = n(1017),
                u = n.n(s),
                c = n(477),
                l = n.n(c),
                h = n(772),
                f = n(797),
                p = n(773),
                d = n(847);

            function y(t) { return (y = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t })(t) }

            function v() { return (v = Object.assign || function(t) { for (var e = 1; e < arguments.length; e++) { var n = arguments[e]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]) } return t }).apply(this, arguments) }

            function g(t, e) { if (null == t) return {}; var n, r, i = function(t, e) { if (null == t) return {}; var n, r, i = {},
                        o = Object.keys(t); for (r = 0; r < o.length; r++) n = o[r], e.indexOf(n) >= 0 || (i[n] = t[n]); return i }(t, e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(t); for (r = 0; r < o.length; r++) n = o[r], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (i[n] = t[n]) } return i }

            function b(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

            function m(t, e) { for (var n = 0; n < e.length; n++) { var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r) } }

            function x(t, e) { return (x = Object.setPrototypeOf || function(t, e) { return t.__proto__ = e, t })(t, e) }

            function w(t) { var e = function() { if ("undefined" === typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" === typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = _(t); if (e) { var i = _(this).constructor;
                        n = Reflect.construct(r, arguments, i) } else n = r.apply(this, arguments); return O(this, n) } }

            function O(t, e) { return !e || "object" !== y(e) && "function" !== typeof e ? function(t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t }(t) : e }

            function _(t) { return (_ = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) { return t.__proto__ || Object.getPrototypeOf(t) })(t) }

            function M(t, e) { return function(t) { if (Array.isArray(t)) return t }(t) || function(t, e) { if ("undefined" === typeof Symbol || !(Symbol.iterator in Object(t))) return; var n = [],
                        r = !0,
                        i = !1,
                        o = void 0; try { for (var a, s = t[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0); } catch (u) { i = !0, o = u } finally { try { r || null == s.return || s.return() } finally { if (i) throw o } } return n }(t, e) || function(t, e) { if (!t) return; if ("string" === typeof t) return j(t, e); var n = Object.prototype.toString.call(t).slice(8, -1); "Object" === n && t.constructor && (n = t.constructor.name); if ("Map" === n || "Set" === n) return Array.from(t); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return j(t, e) }(t, e) || function() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() }

            function j(t, e) {
                (null == e || e > t.length) && (e = t.length); for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n]; return r }

            function S(t, e) { var n = Object.keys(t); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), n.push.apply(n, r) } return n }

            function E(t) { for (var e = 1; e < arguments.length; e++) { var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? S(Object(n), !0).forEach((function(e) { k(t, e, n[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : S(Object(n)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })) } return t }

            function k(t, e, n) { return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t } var A = /[ \f\n\r\t\v\u2028\u2029]+/,
                P = function(t) { try { var e = []; return i()(t.children) || (e = t.breakAll ? t.children.toString().split("") : t.children.toString().split(A)), { wordsWithComputedWidth: e.map((function(e) { return { word: e, width: Object(d.c)(e, t.style).width } })), spaceWidth: t.breakAll ? 0 : Object(d.c)("\xa0", t.style).width } } catch (n) { return null } },
                C = function(t) { return [{ words: i()(t) ? [] : t.toString().split(A) }] },
                T = function(t, e) { if ((t.width || t.scaleToFit) && !f.a.isSsr && e) { var n = P(t); return n ? function(t, e, n, r, i) { var o = Object(h.g)(t.maxLines),
                                a = t.children,
                                s = function() { return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).reduce((function(t, e) { var o = e.word,
                                            a = e.width,
                                            s = t[t.length - 1]; if (s && (null == r || i || s.width + a + n < r)) s.words.push(o), s.width += a + n;
                                        else { var u = { words: [o], width: a };
                                            t.push(u) } return t }), []) },
                                u = s(e); if (!o) return u; for (var c, l = function(e) { var n = a.slice(0, e),
                                        i = P(E(E({}, t), {}, { children: n + "\u2026" })).wordsWithComputedWidth,
                                        o = s(i); return [o.length > t.maxLines || function(t) { return t.reduce((function(t, e) { return t.width > e.width ? t : e })) }(o).width > r, o] }, f = 0, p = a.length - 1, d = 0; f <= p && d <= a.length - 1;) { var y = Math.floor((f + p) / 2),
                                    v = M(l(y - 1), 2),
                                    g = v[0],
                                    b = v[1],
                                    m = M(l(y), 1)[0]; if (g || m || (f = y + 1), g && m && (p = y - 1), !g && m) { c = b; break }
                                d++ } return c || u }(t, n.wordsWithComputedWidth, n.spaceWidth, t.width, t.scaleToFit) : C(t.children) } return C(t.children) },
                I = function(t) {! function(t, e) { if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), e && x(t, e) }(o, t); var e, n, r, i = w(o);

                    function o() { var t;
                        b(this, o); for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r]; return (t = i.call.apply(i, [this].concat(n))).state = {}, t } return e = o, r = [{ key: "getDerivedStateFromProps", value: function(t, e) { if (t.width !== e.prevWidth || t.scaleToFit !== e.prevScaleToFit || t.children !== e.prevChildren || t.style !== e.prevStyle || t.breakAll !== e.prevBreakAll) { var n = t.children !== e.prevChildren || t.style !== e.prevStyle || t.breakAll !== e.prevBreakAll; return { prevWidth: t.width, prevScaleToFit: t.scaleToFit, prevChildren: t.children, prevStyle: t.style, wordsByLines: T(t, n) } } return null } }], (n = [{ key: "render", value: function() { var t = this.props,
                                e = t.dx,
                                n = t.dy,
                                r = t.textAnchor,
                                i = t.verticalAnchor,
                                o = t.scaleToFit,
                                s = t.angle,
                                c = t.lineHeight,
                                f = t.capHeight,
                                d = t.className,
                                y = t.breakAll,
                                b = g(t, ["dx", "dy", "textAnchor", "verticalAnchor", "scaleToFit", "angle", "lineHeight", "capHeight", "className", "breakAll"]),
                                m = this.state.wordsByLines; if (!Object(h.f)(b.x) || !Object(h.f)(b.y)) return null; var x, w = b.x + (Object(h.g)(e) ? e : 0),
                                O = b.y + (Object(h.g)(n) ? n : 0); switch (i) {
                                case "start":
                                    x = u()("calc(".concat(f, ")")); break;
                                case "middle":
                                    x = u()("calc(".concat((m.length - 1) / 2, " * -").concat(c, " + (").concat(f, " / 2))")); break;
                                default:
                                    x = u()("calc(".concat(m.length - 1, " * -").concat(c, ")")) } var _ = []; if (o) { var M = m[0].width,
                                    j = this.props.width;
                                _.push("scale(".concat((Object(h.g)(j) ? j / M : 1) / M, ")")) } return s && _.push("rotate(".concat(s, ", ").concat(w, ", ").concat(O, ")")), _.length && (b.transform = _.join(" ")), a.a.createElement("text", v({}, Object(p.c)(b, !0), { x: w, y: O, className: l()("recharts-text", d), textAnchor: r }), m.map((function(t, e) { return a.a.createElement("tspan", { x: w, dy: 0 === e ? x : c, key: e }, t.words.join(y ? "" : " ")) }))) } }]) && m(e.prototype, n), r && m(e, r), o }(o.Component);
            I.defaultProps = { x: 0, y: 0, lineHeight: "1em", capHeight: "0.71em", scaleToFit: !1, textAnchor: "start", verticalAnchor: "end" } }, 847: function(t, e, n) { "use strict";
            n.d(e, "c", (function() { return d })), n.d(e, "b", (function() { return y })), n.d(e, "a", (function() { return v })); var r = n(797);

            function i(t, e) { var n = Object.keys(t); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), n.push.apply(n, r) } return n }

            function o(t) { for (var e = 1; e < arguments.length; e++) { var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? i(Object(n), !0).forEach((function(e) { a(t, e, n[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })) } return t }

            function a(t, e, n) { return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t }

            function s(t) { return function(t) { if (Array.isArray(t)) return u(t) }(t) || function(t) { if ("undefined" !== typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t) }(t) || function(t, e) { if (!t) return; if ("string" === typeof t) return u(t, e); var n = Object.prototype.toString.call(t).slice(8, -1); "Object" === n && t.constructor && (n = t.constructor.name); if ("Map" === n || "Set" === n) return Array.from(t); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return u(t, e) }(t) || function() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() }

            function u(t, e) {
                (null == e || e > t.length) && (e = t.length); for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n]; return r } var c = { widthCache: {}, cacheCount: 0 },
                l = { position: "absolute", top: "-20000px", left: 0, padding: 0, margin: 0, border: "none", whiteSpace: "pre" },
                h = ["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height", "top", "left", "fontSize", "lineHeight", "padding", "margin", "paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom"],
                f = "recharts_measurement_span"; var p = function(t) { return Object.keys(t).reduce((function(e, n) { return "".concat(e).concat((o = n, o.split("").reduce((function(t, e) { return e === e.toUpperCase() ? [].concat(s(t), ["-", e.toLowerCase()]) : [].concat(s(t), [e]) }), []).join("")), ":").concat((r = n, i = t[n], h.indexOf(r) >= 0 && i === +i ? "".concat(i, "px") : i), ";"); var r, i, o }), "") },
                d = function(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; if (void 0 === t || null === t || r.a.isSsr) return { width: 0, height: 0 }; var n = "".concat(t),
                        i = p(e),
                        a = "".concat(n, "-").concat(i); if (c.widthCache[a]) return c.widthCache[a]; try { var s = document.getElementById(f);
                        s || ((s = document.createElement("span")).setAttribute("id", f), s.setAttribute("aria-hidden", "true"), document.body.appendChild(s)); var u = o(o({}, l), e);
                        Object.keys(u).map((function(t) { return s.style[t] = u[t], t })), s.textContent = n; var h = s.getBoundingClientRect(),
                            d = { width: h.width, height: h.height }; return c.widthCache[a] = d, ++c.cacheCount > 2e3 && (c.cacheCount = 0, c.widthCache = {}), d } catch (y) { return { width: 0, height: 0 } } },
                y = function(t) { var e = t.ownerDocument.documentElement,
                        n = { top: 0, left: 0 }; return "undefined" !== typeof t.getBoundingClientRect && (n = t.getBoundingClientRect()), { top: n.top + window.pageYOffset - e.clientTop, left: n.left + window.pageXOffset - e.clientLeft } },
                v = function(t, e) { return { chartX: Math.round(t.pageX - e.left), chartY: Math.round(t.pageY - e.top) } } }, 848: function(t, e, n) { "use strict";
            n.d(e, "a", (function() { return v })); var r = n(1),
                i = n.n(r),
                o = n(477),
                a = n.n(o),
                s = n(773);

            function u(t) { return (u = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t })(t) }

            function c() { return (c = Object.assign || function(t) { for (var e = 1; e < arguments.length; e++) { var n = arguments[e]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]) } return t }).apply(this, arguments) }

            function l(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

            function h(t, e) { for (var n = 0; n < e.length; n++) { var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r) } }

            function f(t, e) { return (f = Object.setPrototypeOf || function(t, e) { return t.__proto__ = e, t })(t, e) }

            function p(t) { var e = function() { if ("undefined" === typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" === typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = y(t); if (e) { var i = y(this).constructor;
                        n = Reflect.construct(r, arguments, i) } else n = r.apply(this, arguments); return d(this, n) } }

            function d(t, e) { return !e || "object" !== u(e) && "function" !== typeof e ? function(t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t }(t) : e }

            function y(t) { return (y = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) { return t.__proto__ || Object.getPrototypeOf(t) })(t) } var v = function(t) {! function(t, e) { if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), e && f(t, e) }(u, t); var e, n, r, o = p(u);

                function u() { return l(this, u), o.apply(this, arguments) } return e = u, (n = [{ key: "render", value: function() { var t = this.props,
                            e = t.cx,
                            n = t.cy,
                            r = t.r,
                            o = t.className,
                            u = a()("recharts-dot", o); return e === +e && n === +n && r === +r ? i.a.createElement("circle", c({}, Object(s.c)(this.props), Object(s.a)(this.props), { className: u, cx: e, cy: n, r: r })) : null } }]) && h(e.prototype, n), r && h(e, r), u }(r.PureComponent) }, 849: function(t, e, n) { "use strict";
            n.d(e, "b", (function() { return b })), n.d(e, "a", (function() { return m })); var r = n(1),
                i = n.n(r),
                o = n(477),
                a = n.n(o),
                s = n(830),
                u = n(773);

            function c(t) { return (c = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t })(t) }

            function l() { return (l = Object.assign || function(t) { for (var e = 1; e < arguments.length; e++) { var n = arguments[e]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]) } return t }).apply(this, arguments) }

            function h(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

            function f(t, e) { for (var n = 0; n < e.length; n++) { var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r) } }

            function p(t, e) { return (p = Object.setPrototypeOf || function(t, e) { return t.__proto__ = e, t })(t, e) }

            function d(t) { var e = function() { if ("undefined" === typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" === typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = v(t); if (e) { var i = v(this).constructor;
                        n = Reflect.construct(r, arguments, i) } else n = r.apply(this, arguments); return y(this, n) } }

            function y(t, e) { return !e || "object" !== c(e) && "function" !== typeof e ? function(t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t }(t) : e }

            function v(t) { return (v = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) { return t.__proto__ || Object.getPrototypeOf(t) })(t) } var g = function(t, e, n, r, i) { var o, a = Math.min(Math.abs(n) / 2, Math.abs(r) / 2),
                        s = r >= 0 ? 1 : -1,
                        u = n >= 0 ? 1 : -1,
                        c = r >= 0 && n >= 0 || r < 0 && n < 0 ? 1 : 0; if (a > 0 && i instanceof Array) { for (var l = [0, 0, 0, 0], h = 0; h < 4; h++) l[h] = i[h] > a ? a : i[h];
                        o = "M".concat(t, ",").concat(e + s * l[0]), l[0] > 0 && (o += "A ".concat(l[0], ",").concat(l[0], ",0,0,").concat(c, ",").concat(t + u * l[0], ",").concat(e)), o += "L ".concat(t + n - u * l[1], ",").concat(e), l[1] > 0 && (o += "A ".concat(l[1], ",").concat(l[1], ",0,0,").concat(c, ",\n        ").concat(t + n, ",").concat(e + s * l[1])), o += "L ".concat(t + n, ",").concat(e + r - s * l[2]), l[2] > 0 && (o += "A ".concat(l[2], ",").concat(l[2], ",0,0,").concat(c, ",\n        ").concat(t + n - u * l[2], ",").concat(e + r)), o += "L ".concat(t + u * l[3], ",").concat(e + r), l[3] > 0 && (o += "A ".concat(l[3], ",").concat(l[3], ",0,0,").concat(c, ",\n        ").concat(t, ",").concat(e + r - s * l[3])), o += "Z" } else if (a > 0 && i === +i && i > 0) { var f = Math.min(a, i);
                        o = "M ".concat(t, ",").concat(e + s * f, "\n            A ").concat(f, ",").concat(f, ",0,0,").concat(c, ",").concat(t + u * f, ",").concat(e, "\n            L ").concat(t + n - u * f, ",").concat(e, "\n            A ").concat(f, ",").concat(f, ",0,0,").concat(c, ",").concat(t + n, ",").concat(e + s * f, "\n            L ").concat(t + n, ",").concat(e + r - s * f, "\n            A ").concat(f, ",").concat(f, ",0,0,").concat(c, ",").concat(t + n - u * f, ",").concat(e + r, "\n            L ").concat(t + u * f, ",").concat(e + r, "\n            A ").concat(f, ",").concat(f, ",0,0,").concat(c, ",").concat(t, ",").concat(e + r - s * f, " Z") } else o = "M ".concat(t, ",").concat(e, " h ").concat(n, " v ").concat(r, " h ").concat(-n, " Z"); return o },
                b = function(t, e) { if (!t || !e) return !1; var n = t.x,
                        r = t.y,
                        i = e.x,
                        o = e.y,
                        a = e.width,
                        s = e.height; if (Math.abs(a) > 0 && Math.abs(s) > 0) { var u = Math.min(i, i + a),
                            c = Math.max(i, i + a),
                            l = Math.min(o, o + s),
                            h = Math.max(o, o + s); return n >= u && n <= c && r >= l && r <= h } return !1 },
                m = function(t) {! function(t, e) { if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), e && p(t, e) }(c, t); var e, n, r, o = d(c);

                    function c() { var t;
                        h(this, c); for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r]; return (t = o.call.apply(o, [this].concat(n))).state = { totalLength: -1 }, t.node = void 0, t } return e = c, (n = [{ key: "componentDidMount", value: function() { if (this.node && this.node.getTotalLength) try { var t = this.node.getTotalLength();
                                t && this.setState({ totalLength: t }) } catch (e) {} } }, { key: "render", value: function() { var t = this,
                                e = this.props,
                                n = e.x,
                                r = e.y,
                                o = e.width,
                                c = e.height,
                                h = e.radius,
                                f = e.className,
                                p = this.state.totalLength,
                                d = this.props,
                                y = d.animationEasing,
                                v = d.animationDuration,
                                b = d.animationBegin,
                                m = d.isAnimationActive,
                                x = d.isUpdateAnimationActive; if (n !== +n || r !== +r || o !== +o || c !== +c || 0 === o || 0 === c) return null; var w = a()("recharts-rectangle", f); return x ? i.a.createElement(s.a, { canBegin: p > 0, from: { width: o, height: c, x: n, y: r }, to: { width: o, height: c, x: n, y: r }, duration: v, animationEasing: y, isActive: x }, (function(e) { var n = e.width,
                                    r = e.height,
                                    o = e.x,
                                    a = e.y; return i.a.createElement(s.a, { canBegin: p > 0, from: "0px ".concat(-1 === p ? 1 : p, "px"), to: "".concat(p, "px 0px"), attributeName: "strokeDasharray", begin: b, duration: v, isActive: m, easing: y }, i.a.createElement("path", l({}, Object(u.c)(t.props, !0), { className: w, d: g(o, a, n, r, h), ref: function(e) { t.node = e } }))) })) : i.a.createElement("path", l({}, Object(u.c)(this.props, !0), { className: w, d: g(n, r, o, c, h) })) } }]) && f(e.prototype, n), r && f(e, r), c }(r.PureComponent);
            m.defaultProps = { x: 0, y: 0, width: 0, height: 0, radius: 0, isAnimationActive: !1, isUpdateAnimationActive: !1, animationBegin: 0, animationDuration: 1500, animationEasing: "ease" } }, 880: function(t, e, n) { "use strict";
            n.d(e, "a", (function() { return s })); var r = n(1247),
                i = n(1012),
                o = n(821),
                a = n(1258);

            function s(t, e, n, s) { var u, c = Object(r.c)(t, e, n); switch ((s = Object(i.a)(null == s ? ",f" : s)).type) {
                    case "s":
                        var l = Math.max(Math.abs(t), Math.abs(e)); return null != s.precision || isNaN(u = function(t, e) { return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(Object(o.a)(e) / 3))) - Object(o.a)(Math.abs(t))) }(c, l)) || (s.precision = u), Object(a.b)(s, l);
                    case "":
                    case "e":
                    case "g":
                    case "p":
                    case "r":
                        null != s.precision || isNaN(u = function(t, e) { return t = Math.abs(t), e = Math.abs(e) - t, Math.max(0, Object(o.a)(e) - Object(o.a)(t)) + 1 }(c, Math.max(Math.abs(t), Math.abs(e)))) || (s.precision = u - ("e" === s.type)); break;
                    case "f":
                    case "%":
                        null != s.precision || isNaN(u = function(t) { return Math.max(0, -Object(o.a)(Math.abs(t))) }(c)) || (s.precision = u - 2 * ("%" === s.type)) } return Object(a.a)(s) } }, 882: function(t, e, n) { "use strict";
            n.d(e, "a", (function() { return s })), n.d(e, "b", (function() { return c })); var r = n(9),
                i = function(t, e, n) { t = +t, e = +e, n = (i = arguments.length) < 2 ? (e = t, t = 0, 1) : i < 3 ? 1 : +n; for (var r = -1, i = 0 | Math.max(0, Math.ceil((e - t) / n)), o = new Array(i); ++r < i;) o[r] = t + r * n; return o },
                o = n(777),
                a = n(820);

            function s() { var t, e, n = Object(a.a)().unknown(void 0),
                    u = n.domain,
                    c = n.range,
                    l = 0,
                    h = 1,
                    f = !1,
                    p = 0,
                    d = 0,
                    y = .5;

                function v() { var n = u().length,
                        r = h < l,
                        o = r ? h : l,
                        a = r ? l : h;
                    t = (a - o) / Math.max(1, n - p + 2 * d), f && (t = Math.floor(t)), o += (a - o - t * (n - p)) * y, e = t * (1 - p), f && (o = Math.round(o), e = Math.round(e)); var s = i(n).map((function(e) { return o + t * e })); return c(r ? s.reverse() : s) } return delete n.unknown, n.domain = function(t) { return arguments.length ? (u(t), v()) : u() }, n.range = function(t) { var e, n; return arguments.length ? (e = t, n = Object(r.a)(e, 2), l = n[0], h = n[1], l = +l, h = +h, v()) : [l, h] }, n.rangeRound = function(t) { var e, n; return e = t, n = Object(r.a)(e, 2), l = n[0], h = n[1], l = +l, h = +h, f = !0, v() }, n.bandwidth = function() { return e }, n.step = function() { return t }, n.round = function(t) { return arguments.length ? (f = !!t, v()) : f }, n.padding = function(t) { return arguments.length ? (p = Math.min(1, d = +t), v()) : p }, n.paddingInner = function(t) { return arguments.length ? (p = Math.min(1, t), v()) : p }, n.paddingOuter = function(t) { return arguments.length ? (d = +t, v()) : d }, n.align = function(t) { return arguments.length ? (y = Math.max(0, Math.min(1, t)), v()) : y }, n.copy = function() { return s(u(), [l, h]).round(f).paddingInner(p).paddingOuter(d).align(y) }, o.b.apply(v(), arguments) }

            function u(t) { var e = t.copy; return t.padding = t.paddingOuter, delete t.paddingInner, delete t.paddingOuter, t.copy = function() { return u(e()) }, t }

            function c() { return u(s.apply(null, arguments).paddingInner(1)) } }, 889: function(t, e, n) { var r = n(187),
                i = n(170);
            t.exports = function(t) { return "number" == typeof t || i(t) && "[object Number]" == r(t) } }, 890: function(t, e, n) { "use strict";
            (function(t, r) { n.d(e, "a", (function() { return wt })); var i = n(816),
                    o = n.n(i),
                    a = n(989),
                    s = n.n(a),
                    u = n(310),
                    c = n.n(u),
                    l = n(429),
                    h = n.n(l),
                    f = n(839),
                    p = n.n(f),
                    d = n(213),
                    y = n.n(d),
                    v = n(376),
                    g = n.n(v),
                    b = n(781),
                    m = n.n(b),
                    x = n(993),
                    w = n.n(x),
                    O = n(99),
                    _ = n.n(O),
                    M = n(1),
                    j = n.n(M),
                    S = n(477),
                    E = n.n(S),
                    k = n(895),
                    A = n(782),
                    P = n(1235),
                    C = n(976),
                    T = n(975),
                    I = n(1037),
                    N = n(1038),
                    D = n(848),
                    R = n(849),
                    L = n(789),
                    B = n(1036),
                    F = n(1234),
                    z = n(847),
                    V = n(772),
                    U = n(795),
                    W = n(1231),
                    H = n(840),
                    q = n(842),
                    Y = n(1039),
                    $ = n(773);

                function J(t) { return (J = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t })(t) }

                function G(t, e) { return function(t) { if (Array.isArray(t)) return t }(t) || function(t, e) { if ("undefined" === typeof Symbol || !(Symbol.iterator in Object(t))) return; var n = [],
                            r = !0,
                            i = !1,
                            o = void 0; try { for (var a, s = t[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0); } catch (u) { i = !0, o = u } finally { try { r || null == s.return || s.return() } finally { if (i) throw o } } return n }(t, e) || ot(t, e) || function() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() }

                function X() { return (X = Object.assign || function(t) { for (var e = 1; e < arguments.length; e++) { var n = arguments[e]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]) } return t }).apply(this, arguments) }

                function Q(t, e) { if (null == t) return {}; var n, r, i = function(t, e) { if (null == t) return {}; var n, r, i = {},
                            o = Object.keys(t); for (r = 0; r < o.length; r++) n = o[r], e.indexOf(n) >= 0 || (i[n] = t[n]); return i }(t, e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(t); for (r = 0; r < o.length; r++) n = o[r], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (i[n] = t[n]) } return i }

                function Z(t, e) { for (var n = 0; n < e.length; n++) { var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r) } }

                function K(t, e) { return (K = Object.setPrototypeOf || function(t, e) { return t.__proto__ = e, t })(t, e) }

                function tt(t) { var e = function() { if ("undefined" === typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" === typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = rt(t); if (e) { var i = rt(this).constructor;
                            n = Reflect.construct(r, arguments, i) } else n = r.apply(this, arguments); return et(this, n) } }

                function et(t, e) { return !e || "object" !== J(e) && "function" !== typeof e ? nt(t) : e }

                function nt(t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t }

                function rt(t) { return (rt = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) { return t.__proto__ || Object.getPrototypeOf(t) })(t) }

                function it(t) { return function(t) { if (Array.isArray(t)) return at(t) }(t) || function(t) { if ("undefined" !== typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t) }(t) || ot(t) || function() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() }

                function ot(t, e) { if (t) { if ("string" === typeof t) return at(t, e); var n = Object.prototype.toString.call(t).slice(8, -1); return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? at(t, e) : void 0 } }

                function at(t, e) {
                    (null == e || e > t.length) && (e = t.length); for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n]; return r }

                function st(t, e) { var n = Object.keys(t); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(t);
                        e && (r = r.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), n.push.apply(n, r) } return n }

                function ut(t) { for (var e = 1; e < arguments.length; e++) { var n = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? st(Object(n), !0).forEach((function(e) { ct(t, e, n[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : st(Object(n)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })) } return t }

                function ct(t, e, n) { return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t } var lt = { xAxis: ["bottom", "top"], yAxis: ["left", "right"] },
                    ht = { x: 0, y: 0 },
                    ft = Number.isFinite ? Number.isFinite : isFinite,
                    pt = "function" === typeof requestAnimationFrame ? requestAnimationFrame : "function" === typeof t ? t : setTimeout,
                    dt = "function" === typeof cancelAnimationFrame ? cancelAnimationFrame : "function" === typeof r ? r : clearTimeout,
                    yt = function(t, e, n) { var r = e.graphicalItems,
                            i = e.dataStartIndex,
                            o = e.dataEndIndex,
                            a = (r || []).reduce((function(t, e) { var n = e.props.data; return n && n.length ? [].concat(it(t), it(n)) : t }), []); return a && a.length > 0 ? a : n && n.props && n.props.data && n.props.data.length > 0 ? n.props.data : t && t.length && Object(V.g)(i) && Object(V.g)(o) ? t.slice(i, o + 1) : [] },
                    vt = function(t, e, n, r) { var i = t.graphicalItems,
                            o = t.tooltipAxis,
                            a = yt(e, t); return n < 0 || !i || !i.length || n >= a.length ? null : i.reduce((function(t, e) { if (e.props.hide) return t; var i, s = e.props.data; if (o.dataKey && !o.allowDuplicatedCategory) { var u = void 0 === s ? a : s;
                                i = Object(V.a)(u, o.dataKey, r) } else i = s && s[n] || a[n]; return i ? [].concat(it(t), [Object(U.v)(e, i)]) : t }), []) },
                    gt = function(t, e, n, r) { var i = r || { x: t.chartX, y: t.chartY },
                            o = function(t, e) { return "horizontal" === e ? t.x : "vertical" === e ? t.y : "centric" === e ? t.angle : t.radius }(i, n),
                            a = t.orderedTooltipTicks,
                            s = t.tooltipAxis,
                            u = t.tooltipTicks,
                            c = Object(U.b)(o, a, u, s); if (c >= 0 && u) { var l = u[c] && u[c].value; return { activeTooltipIndex: c, activeLabel: l, activePayload: vt(t, e, c, l), activeCoordinate: function(t, e, n, r) { var i = e.find((function(t) { return t && t.index === n })); if (i) { if ("horizontal" === t) return { x: i.coordinate, y: r.y }; if ("vertical" === t) return { x: r.x, y: i.coordinate }; if ("centric" === t) { var o = i.coordinate,
                                                a = r.radius; return ut(ut(ut({}, r), Object(H.c)(r.cx, r.cy, a, o)), {}, { angle: o, radius: a }) } var s = i.coordinate,
                                            u = r.angle; return ut(ut(ut({}, r), Object(H.c)(r.cx, r.cy, s, u)), {}, { angle: u, radius: s }) } return ht }(n, a, c, i) } } return null },
                    bt = function(t, e) { var n = e.axisType,
                            r = void 0 === n ? "xAxis" : n,
                            i = e.AxisComp,
                            o = e.graphicalItems,
                            a = e.stackGroups,
                            s = e.dataStartIndex,
                            u = e.dataEndIndex,
                            c = t.children,
                            l = "".concat(r, "Id"),
                            h = Object(L.a)(c, i),
                            f = {}; return h && h.length ? f = function(t, e) { var n = e.axes,
                                r = e.graphicalItems,
                                i = e.axisType,
                                o = e.axisIdKey,
                                a = e.stackGroups,
                                s = e.dataStartIndex,
                                u = e.dataEndIndex,
                                c = t.layout,
                                l = t.children,
                                h = t.stackOffset,
                                f = Object(U.x)(c, i); return n.reduce((function(e, n) { var p = n.props,
                                    d = p.type,
                                    y = p.dataKey,
                                    v = p.allowDataOverflow,
                                    b = p.allowDuplicatedCategory,
                                    x = p.scale,
                                    w = p.ticks,
                                    O = n.props[o],
                                    _ = yt(t.data, { graphicalItems: r.filter((function(t) { return t.props[o] === O })), dataStartIndex: s, dataEndIndex: u }),
                                    M = _.length; if (!e[O]) { var j, S, E; if (y) { if (j = Object(U.m)(_, y, d), "category" === d && f) { var k = Object(V.d)(j);
                                            b && k ? (S = j, j = g()(0, M)) : b || (j = Object(U.y)(n.props.domain, j, n).reduce((function(t, e) { return t.indexOf(e) >= 0 ? t : [].concat(it(t), [e]) }), [])) } else if ("category" === d) j = b ? j.filter((function(t) { return "" !== t && !m()(t) })) : Object(U.y)(n.props.domain, j, n).reduce((function(t, e) { return t.indexOf(e) >= 0 || "" === e || m()(e) ? t : [].concat(it(t), [e]) }), []);
                                        else if ("number" === d) { var A = Object(U.z)(_, r.filter((function(t) { return t.props[o] === O && !t.props.hide })), y, i);
                                            A && (j = A) }!f || "number" !== d && "auto" === x || (E = Object(U.m)(_, y, "category")) } else j = f ? g()(0, M) : a && a[O] && a[O].hasStack && "number" === d ? "expand" === h ? [0, 1] : Object(U.o)(a[O].stackGroups, s, u) : Object(U.n)(_, r.filter((function(t) { return t.props[o] === O && !t.props.hide })), d, !0); if ("number" === d) j = Object(W.a)(l, j, O, i, w), n.props.domain && (j = Object(U.B)(n.props.domain, j, v));
                                    else if ("category" === d && n.props.domain) { var P = n.props.domain;
                                        j.every((function(t) { return P.indexOf(t) >= 0 })) && (j = P) } return ut(ut({}, e), {}, ct({}, O, ut(ut({}, n.props), {}, { axisType: i, domain: j, categoricalDomain: E, duplicateDomain: S, originalDomain: n.props.domain, isCategorical: f, layout: c }))) } return e }), {}) }(t, { axes: h, graphicalItems: o, axisType: r, axisIdKey: l, stackGroups: a, dataStartIndex: s, dataEndIndex: u }) : o && o.length && (f = function(t, e) { var n = e.graphicalItems,
                                r = e.Axis,
                                i = e.axisType,
                                o = e.axisIdKey,
                                a = e.stackGroups,
                                s = e.dataStartIndex,
                                u = e.dataEndIndex,
                                c = t.layout,
                                l = t.children,
                                h = yt(t.data, { graphicalItems: n, dataStartIndex: s, dataEndIndex: u }),
                                f = h.length,
                                p = Object(U.x)(c, i),
                                d = -1; return n.reduce((function(t, e) { var v, b = e.props[o]; return t[b] ? t : (d++, p ? v = g()(0, f) : a && a[b] && a[b].hasStack ? (v = Object(U.o)(a[b].stackGroups, s, u), v = Object(W.a)(l, v, b, i)) : (v = Object(U.B)(r.defaultProps.domain, Object(U.n)(h, n.filter((function(t) { return t.props[o] === b && !t.props.hide })), "number"), r.defaultProps.allowDataOverflow), v = Object(W.a)(l, v, b, i)), ut(ut({}, t), {}, ct({}, b, ut(ut({ axisType: i }, r.defaultProps), {}, { hide: !0, orientation: y()(lt, "".concat(i, ".").concat(d % 2), null), domain: v, originalDomain: r.defaultProps.domain, isCategorical: p, layout: c })))) }), {}) }(t, { Axis: i, graphicalItems: o, axisType: r, axisIdKey: l, stackGroups: a, dataStartIndex: s, dataEndIndex: u })), f },
                    mt = function(t) { var e = t.children,
                            n = t.defaultShowTooltip,
                            r = Object(L.b)(e, F.a.displayName); return { chartX: 0, chartY: 0, dataStartIndex: r && r.props && r.props.startIndex || 0, dataEndIndex: r && r.props && r.props.endIndex || t.data && t.data.length - 1 || 0, activeTooltipIndex: -1, isTooltipActive: !m()(n) && n } },
                    xt = function(t) { return "horizontal" === t ? { numericAxisName: "yAxis", cateAxisName: "xAxis" } : "vertical" === t ? { numericAxisName: "xAxis", cateAxisName: "yAxis" } : "centric" === t ? { numericAxisName: "radiusAxis", cateAxisName: "angleAxis" } : { numericAxisName: "angleAxis", cateAxisName: "radiusAxis" } },
                    wt = function(t) { var e, n, r = t.chartName,
                            i = t.GraphicalChild,
                            a = t.defaultTooltipEventType,
                            u = void 0 === a ? "axis" : a,
                            l = t.validateTooltipEventTypes,
                            f = void 0 === l ? ["axis"] : l,
                            d = t.axisComponents,
                            v = t.legendContent,
                            g = t.formatAxisMap,
                            b = t.defaultProps,
                            x = function(t, e) { var n = e.graphicalItems,
                                    r = e.stackGroups,
                                    i = e.offset,
                                    o = e.updateId,
                                    a = e.dataStartIndex,
                                    s = e.dataEndIndex,
                                    u = t.barSize,
                                    c = t.layout,
                                    l = t.barGap,
                                    h = t.barCategoryGap,
                                    f = t.maxBarSize,
                                    p = xt(c),
                                    y = p.numericAxisName,
                                    v = p.cateAxisName,
                                    g = function(t) { return !(!t || !t.length) && t.some((function(t) { var e = Object(L.c)(t && t.type); return e && e.indexOf("Bar") >= 0 })) }(n) && Object(U.h)({ barSize: u, stackGroups: r }),
                                    b = []; return n.forEach((function(n, u) { var p = yt(t.data, { dataStartIndex: a, dataEndIndex: s }, n),
                                        x = n.props,
                                        w = x.dataKey,
                                        O = x.maxBarSize,
                                        _ = n.props["".concat(y, "Id")],
                                        M = n.props["".concat(v, "Id")],
                                        j = d.reduce((function(t, r) { var i, o = e["".concat(r.axisType, "Map")],
                                                a = n.props["".concat(r.axisType, "Id")],
                                                s = o && o[a]; return ut(ut({}, t), {}, (ct(i = {}, r.axisType, s), ct(i, "".concat(r.axisType, "Ticks"), Object(U.t)(s)), i)) }), {}),
                                        S = j[v],
                                        E = j["".concat(v, "Ticks")],
                                        k = r && r[_] && r[_].hasStack && Object(U.s)(n, r[_].stackGroups),
                                        A = Object(L.c)(n.type).indexOf("Bar") >= 0,
                                        P = Object(U.f)(S, E),
                                        C = []; if (A) { var T = m()(O) ? f : O,
                                            I = Object(U.f)(S, E, !0) || T;
                                        C = Object(U.g)({ barGap: l, barCategoryGap: h, bandSize: I !== P ? I : P, sizeList: g[M], maxBarSize: T }), I !== P && (C = C.map((function(t) { return ut(ut({}, t), {}, { position: ut(ut({}, t.position), {}, { offset: t.position.offset - I / 2 }) }) }))) } var N, D = n && n.type && n.type.getComposedData;
                                    D && b.push({ props: ut(ut({}, D(ut(ut({}, j), {}, { displayedData: p, props: t, dataKey: w, item: n, bandSize: P, barPosition: C, offset: i, stackedData: k, layout: c, dataStartIndex: a, dataEndIndex: s }))), {}, (N = { key: n.key || "item-".concat(u) }, ct(N, y, j[y]), ct(N, v, j[v]), ct(N, "animationId", o), N)), childIndex: Object(L.f)(n, t.children), item: n }) })), b },
                            O = function(t, e) { var n = t.props,
                                    o = t.dataStartIndex,
                                    a = t.dataEndIndex,
                                    s = t.updateId; if (!Object(L.h)({ props: n })) return null; var u = n.children,
                                    c = n.layout,
                                    l = n.stackOffset,
                                    h = n.data,
                                    f = n.reverseStackOrder,
                                    v = xt(c),
                                    b = v.numericAxisName,
                                    m = v.cateAxisName,
                                    w = Object(L.a)(u, i),
                                    O = Object(U.r)(h, w, "".concat(b, "Id"), "".concat(m, "Id"), l, f),
                                    _ = d.reduce((function(t, e) { var r = "".concat(e.axisType, "Map"); return ut(ut({}, t), {}, ct({}, r, bt(n, ut(ut({}, e), {}, { graphicalItems: w, stackGroups: e.axisType === b && O, dataStartIndex: o, dataEndIndex: a })))) }), {}),
                                    M = function(t, e) { var n = t.props,
                                            r = t.graphicalItems,
                                            i = t.xAxisMap,
                                            o = void 0 === i ? {} : i,
                                            a = t.yAxisMap,
                                            s = void 0 === a ? {} : a,
                                            u = n.width,
                                            c = n.height,
                                            l = n.children,
                                            h = n.margin || {},
                                            f = Object(L.b)(l, F.a.displayName),
                                            p = Object(L.b)(l, C.a.displayName),
                                            d = Object.keys(s).reduce((function(t, e) { var n = s[e],
                                                    r = n.orientation; return n.mirror || n.hide ? t : ut(ut({}, t), {}, ct({}, r, t[r] + n.width)) }), { left: h.left || 0, right: h.right || 0 }),
                                            v = Object.keys(o).reduce((function(t, e) { var n = o[e],
                                                    r = n.orientation; return n.mirror || n.hide ? t : ut(ut({}, t), {}, ct({}, r, y()(t, "".concat(r)) + n.height)) }), { top: h.top || 0, bottom: h.bottom || 0 }),
                                            g = ut(ut({}, v), d),
                                            b = g.bottom; return f && (g.bottom += f.props.height || F.a.defaultProps.height), p && e && (g = Object(U.a)(g, r, n, e)), ut(ut({ brushBottom: b }, g), {}, { width: u - g.left - g.right, height: c - g.top - g.bottom }) }(ut(ut({}, _), {}, { props: n, graphicalItems: w }), null === e || void 0 === e ? void 0 : e.legendBBox);
                                Object.keys(_).forEach((function(t) { _[t] = g(n, _[t], M, t.replace("Map", ""), r) })); var j = function(t) { var e = Object(V.b)(t),
                                            n = Object(U.t)(e, !1, !0); return { tooltipTicks: n, orderedTooltipTicks: p()(n, (function(t) { return t.coordinate })), tooltipAxis: e, tooltipAxisBandSize: Object(U.f)(e, n) } }(_["".concat(m, "Map")]),
                                    S = x(n, ut(ut({}, _), {}, { dataStartIndex: o, dataEndIndex: a, updateId: s, graphicalItems: w, stackGroups: O, offset: M })); return ut(ut({ formatedGraphicalItems: S, graphicalItems: w, offset: M, stackGroups: O }, j), _) }; return n = e = function(t) {! function(t, e) { if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                                t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), e && K(t, e) }(l, t); var e, n, i, a = tt(l);

                            function l(t) { var e; return function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, l), (e = a.call(this, t)).uniqueChartId = void 0, e.clipPathId = void 0, e.legendInstance = void 0, e.deferId = void 0, e.container = void 0, e.clearDeferId = function() {!m()(e.deferId) && dt && dt(e.deferId), e.deferId = null }, e.handleLegendBBoxUpdate = function(t) { if (t && e.legendInstance) { var n = e.state,
                                            r = n.dataStartIndex,
                                            i = n.dataEndIndex,
                                            o = n.updateId;
                                        e.setState(ut({ legendBBox: t }, O({ props: e.props, dataStartIndex: r, dataEndIndex: i, updateId: o }, ut(ut({}, e.state), {}, { legendBBox: t })))) } }, e.handleReceiveSyncEvent = function(t, n, r) { e.props.syncId === t && n !== e.uniqueChartId && (e.clearDeferId(), e.deferId = pt && pt(e.applySyncEvent.bind(nt(e), r))) }, e.handleBrushChange = function(t) { var n = t.startIndex,
                                        r = t.endIndex; if (n !== e.state.dataStartIndex || r !== e.state.dataEndIndex) { var i = e.state.updateId;
                                        e.setState((function() { return ut({ dataStartIndex: n, dataEndIndex: r }, O({ props: e.props, dataStartIndex: n, dataEndIndex: r, updateId: i }, e.state)) })), e.triggerSyncEvent({ dataStartIndex: n, dataEndIndex: r }) } }, e.handleMouseEnter = function(t) { var n = e.props.onMouseEnter,
                                        r = e.getMouseInfo(t); if (r) { var i = ut(ut({}, r), {}, { isTooltipActive: !0 });
                                        e.setState(i), e.triggerSyncEvent(i), c()(n) && n(i, t) } }, e.triggeredAfterMouseMove = function(t) { var n = e.props.onMouseMove,
                                        r = e.getMouseInfo(t),
                                        i = r ? ut(ut({}, r), {}, { isTooltipActive: !0 }) : { isTooltipActive: !1 };
                                    e.setState(i), e.triggerSyncEvent(i), c()(n) && n(i, t) }, e.handleItemMouseEnter = function(t) { e.setState((function() { return { isTooltipActive: !0, activeItem: t, activePayload: t.tooltipPayload, activeCoordinate: t.tooltipPosition || { x: t.cx, y: t.cy } } })) }, e.handleItemMouseLeave = function() { e.setState((function() { return { isTooltipActive: !1 } })) }, e.handleMouseMove = function(t) { t && c()(t.persist) && t.persist(), e.triggeredAfterMouseMove(t) }, e.handleMouseLeave = function(t) { var n = e.props.onMouseLeave,
                                        r = { isTooltipActive: !1 };
                                    e.setState(r), e.triggerSyncEvent(r), c()(n) && n(r, t), e.cancelThrottledTriggerAfterMouseMove() }, e.handleOuterEvent = function(t) { var n = Object(L.d)(t),
                                        r = y()(e.props, "".concat(n));
                                    n && c()(r) && r(/.*touch.*/i.test(n) ? e.getMouseInfo(t.changedTouches[0]) : e.getMouseInfo(t), t) }, e.handleClick = function(t) { var n = e.props.onClick,
                                        r = e.getMouseInfo(t); if (r) { var i = ut(ut({}, r), {}, { isTooltipActive: !0 });
                                        e.setState(i), e.triggerSyncEvent(i), c()(n) && n(i, t) } }, e.handleMouseDown = function(t) { var n = e.props.onMouseDown;
                                    c()(n) && n(e.getMouseInfo(t), t) }, e.handleMouseUp = function(t) { var n = e.props.onMouseUp;
                                    c()(n) && n(e.getMouseInfo(t), t) }, e.handleTouchMove = function(t) { null != t.changedTouches && t.changedTouches.length > 0 && e.handleMouseMove(t.changedTouches[0]) }, e.handleTouchStart = function(t) { null != t.changedTouches && t.changedTouches.length > 0 && e.handleMouseDown(t.changedTouches[0]) }, e.handleTouchEnd = function(t) { null != t.changedTouches && t.changedTouches.length > 0 && e.handleMouseUp(t.changedTouches[0]) }, e.verticalCoordinatesGenerator = function(t) { var e = t.xAxis,
                                        n = t.width,
                                        r = t.height,
                                        i = t.offset; return Object(U.l)(B.a.getTicks(ut(ut(ut({}, B.a.defaultProps), e), {}, { ticks: Object(U.t)(e, !0), viewBox: { x: 0, y: 0, width: n, height: r } })), i.left, i.left + i.width) }, e.horizontalCoordinatesGenerator = function(t) { var e = t.yAxis,
                                        n = t.width,
                                        r = t.height,
                                        i = t.offset; return Object(U.l)(B.a.getTicks(ut(ut(ut({}, B.a.defaultProps), e), {}, { ticks: Object(U.t)(e, !0), viewBox: { x: 0, y: 0, width: n, height: r } })), i.top, i.top + i.height) }, e.axesTicksGenerator = function(t) { return Object(U.t)(t, !0) }, e.renderCursor = function(t) { var n = e.state,
                                        i = n.isTooltipActive,
                                        o = n.activeCoordinate,
                                        a = n.activePayload,
                                        s = n.offset,
                                        u = n.activeTooltipIndex,
                                        c = e.getTooltipEventType(); if (!t || !t.props.cursor || !i || !o || "ScatterChart" !== r && "axis" !== c) return null; var l, h = e.props.layout,
                                        f = T.a; if ("ScatterChart" === r) l = o, f = I.a;
                                    else if ("BarChart" === r) l = e.getCursorRectangle(), f = R.a;
                                    else if ("radial" === h) { var p = e.getCursorPoints(),
                                            d = p.cx,
                                            y = p.cy,
                                            v = p.radius;
                                        l = { cx: d, cy: y, startAngle: p.startAngle, endAngle: p.endAngle, innerRadius: v, outerRadius: v }, f = N.a } else l = { points: e.getCursorPoints() }, f = T.a; var g = t.key || "_recharts-cursor",
                                        b = ut(ut(ut(ut({ stroke: "#ccc", pointerEvents: "none" }, s), l), Object($.c)(t.props.cursor)), {}, { payload: a, payloadIndex: u, key: g, className: "recharts-tooltip-cursor" }); return Object(M.isValidElement)(t.props.cursor) ? Object(M.cloneElement)(t.props.cursor, b) : Object(M.createElement)(f, b) }, e.renderPolarAxis = function(t, n, r) { var i = y()(t, "type.axisType"),
                                        o = y()(e.state, "".concat(i, "Map"))[t.props["".concat(i, "Id")]]; return Object(M.cloneElement)(t, ut(ut({}, o), {}, { className: i, key: t.key || "".concat(n, "-").concat(r), ticks: Object(U.t)(o, !0) })) }, e.renderXAxis = function(t, n, r) { var i = e.state.xAxisMap[t.props.xAxisId]; return e.renderAxis(i, t, n, r) }, e.renderYAxis = function(t, n, r) { var i = e.state.yAxisMap[t.props.yAxisId]; return e.renderAxis(i, t, n, r) }, e.renderGrid = function(t) { var n = e.state,
                                        r = n.xAxisMap,
                                        i = n.yAxisMap,
                                        a = n.offset,
                                        u = e.props,
                                        c = u.width,
                                        l = u.height,
                                        h = Object(V.b)(r),
                                        f = s()(i, (function(t) { return o()(t.domain, ft) })) || Object(V.b)(i),
                                        p = t.props || {}; return Object(M.cloneElement)(t, { key: t.key || "grid", x: Object(V.g)(p.x) ? p.x : a.left, y: Object(V.g)(p.y) ? p.y : a.top, width: Object(V.g)(p.width) ? p.width : a.width, height: Object(V.g)(p.height) ? p.height : a.height, xAxis: h, yAxis: f, offset: a, chartWidth: c, chartHeight: l, verticalCoordinatesGenerator: p.verticalCoordinatesGenerator || e.verticalCoordinatesGenerator, horizontalCoordinatesGenerator: p.horizontalCoordinatesGenerator || e.horizontalCoordinatesGenerator }) }, e.renderPolarGrid = function(t) { var n = t.props,
                                        r = n.radialLines,
                                        i = n.polarAngles,
                                        o = n.polarRadius,
                                        a = e.state,
                                        s = a.radiusAxisMap,
                                        u = a.angleAxisMap,
                                        c = Object(V.b)(s),
                                        l = Object(V.b)(u),
                                        h = l.cx,
                                        f = l.cy,
                                        p = l.innerRadius,
                                        d = l.outerRadius;
                                    t.props; return Object(M.cloneElement)(t, { polarAngles: _()(i) ? i : Object(U.t)(l, !0).map((function(t) { return t.coordinate })), polarRadius: _()(o) ? o : Object(U.t)(c, !0).map((function(t) { return t.coordinate })), cx: h, cy: f, innerRadius: p, outerRadius: d, key: t.key || "polar-grid", radialLines: r }) }, e.renderLegend = function() { var t = e.state.formatedGraphicalItems,
                                        n = e.props,
                                        r = n.children,
                                        i = n.width,
                                        o = n.height,
                                        a = e.props.margin || {},
                                        s = i - (a.left || 0) - (a.right || 0),
                                        u = Object(U.p)({ children: r, formatedGraphicalItems: t, legendWidth: s, legendContent: v }); if (!u) return null; var c = u.item,
                                        l = Q(u, ["item"]); return Object(M.cloneElement)(c, ut(ut({}, l), {}, { chartWidth: i, chartHeight: o, margin: a, ref: function(t) { e.legendInstance = t }, onBBoxUpdate: e.handleLegendBBoxUpdate })) }, e.renderTooltip = function() { var t = e.props.children,
                                        n = Object(L.b)(t, P.a.displayName); if (!n) return null; var r = e.state,
                                        i = r.isTooltipActive,
                                        o = r.activeCoordinate,
                                        a = r.activePayload,
                                        s = r.activeLabel,
                                        u = r.offset; return Object(M.cloneElement)(n, { viewBox: ut(ut({}, u), {}, { x: u.left, y: u.top }), active: i, label: s, payload: i ? a : [], coordinate: o }) }, e.renderBrush = function(t) { var n = e.props,
                                        r = n.margin,
                                        i = n.data,
                                        o = e.state,
                                        a = o.offset,
                                        s = o.dataStartIndex,
                                        u = o.dataEndIndex,
                                        c = o.updateId; return Object(M.cloneElement)(t, { key: t.key || "_recharts-brush", onChange: Object(U.d)(e.handleBrushChange, null, t.props.onChange), data: i, x: Object(V.g)(t.props.x) ? t.props.x : a.left, y: Object(V.g)(t.props.y) ? t.props.y : a.top + a.height + a.brushBottom - (r.bottom || 0), width: Object(V.g)(t.props.width) ? t.props.width : a.width, startIndex: s, endIndex: u, updateId: "brush-".concat(c) }) }, e.renderReferenceElement = function(t, n, r) { if (!t) return null; var i = nt(e).clipPathId,
                                        o = e.state,
                                        a = o.xAxisMap,
                                        s = o.yAxisMap,
                                        u = o.offset,
                                        c = t.props,
                                        l = c.xAxisId,
                                        h = c.yAxisId; return Object(M.cloneElement)(t, { key: t.key || "".concat(n, "-").concat(r), xAxis: a[l], yAxis: s[h], viewBox: { x: u.left, y: u.top, width: u.width, height: u.height }, clipPathId: i }) }, e.renderActivePoints = function(t) { var e = t.item,
                                        n = t.activePoint,
                                        r = t.basePoint,
                                        i = t.childIndex,
                                        o = t.isRange,
                                        a = [],
                                        s = e.props.key,
                                        u = e.item.props,
                                        c = u.activeDot,
                                        h = ut(ut({ index: i, dataKey: u.dataKey, cx: n.x, cy: n.y, r: 4, fill: Object(U.q)(e.item), strokeWidth: 2, stroke: "#fff", payload: n.payload, value: n.value, key: "".concat(s, "-activePoint-").concat(i) }, Object($.c)(c)), Object($.a)(c)); return a.push(l.renderActiveDot(c, h)), r ? a.push(l.renderActiveDot(c, ut(ut({}, h), {}, { cx: r.x, cy: r.y, key: "".concat(s, "-basePoint-").concat(i) }))) : o && a.push(null), a }, e.renderGraphicChild = function(t, n, r) { var i = e.filterFormatItem(t, n, r); if (!i) return null; var o = e.getTooltipEventType(),
                                        a = e.state,
                                        s = a.isTooltipActive,
                                        u = a.tooltipAxis,
                                        c = a.activeTooltipIndex,
                                        l = a.activeLabel,
                                        h = e.props.children,
                                        f = Object(L.b)(h, P.a.displayName),
                                        p = i.props,
                                        d = p.points,
                                        y = p.isRange,
                                        v = p.baseLine,
                                        g = i.item.props,
                                        b = g.activeDot,
                                        x = !g.hide && s && f && b && c >= 0,
                                        w = {}; "axis" !== o && f && "click" === f.props.trigger ? w = { onClick: Object(U.d)(e.handleItemMouseEnter, null, t.props.onCLick) } : "axis" !== o && (w = { onMouseLeave: Object(U.d)(e.handleItemMouseLeave, null, t.props.onMouseLeave), onMouseEnter: Object(U.d)(e.handleItemMouseEnter, null, t.props.onMouseEnter) }); var O = Object(M.cloneElement)(t, ut(ut({}, i.props), w)); if (x) { var _, j; if (u.dataKey && !u.allowDuplicatedCategory) { var S = "function" === typeof u.dataKey ? function(t) { return "function" === typeof u.dataKey ? u.dataKey(t.payload) : null } : "payload.".concat(u.dataKey.toString());
                                            _ = Object(V.a)(d, S, l), j = y && v && Object(V.a)(v, S, l) } else _ = d[c], j = y && v && v[c]; if (!m()(_)) return [O].concat(it(e.renderActivePoints({ item: i, activePoint: _, basePoint: j, childIndex: c, isRange: y }))) } return y ? [O, null, null] : [O, null] }, e.renderCustomized = function(t) { return Object(M.cloneElement)(t, ut(ut({}, e.props), e.state)) }, e.uniqueChartId = m()(t.id) ? Object(V.j)("recharts") : t.id, e.clipPathId = "".concat(e.uniqueChartId, "-clip"), t.throttleDelay && (e.triggeredAfterMouseMove = h()(e.triggeredAfterMouseMove, t.throttleDelay)), e.state = {}, e } return e = l, (n = [{ key: "componentDidMount", value: function() { m()(this.props.syncId) || this.addListener() } }, { key: "componentDidUpdate", value: function(t) { m()(t.syncId) && !m()(this.props.syncId) && this.addListener(), !m()(t.syncId) && m()(this.props.syncId) && this.removeListener() } }, { key: "componentWillUnmount", value: function() { this.clearDeferId(), m()(this.props.syncId) || this.removeListener(), this.cancelThrottledTriggerAfterMouseMove() } }, { key: "cancelThrottledTriggerAfterMouseMove", value: function() { "function" === typeof this.triggeredAfterMouseMove.cancel && this.triggeredAfterMouseMove.cancel() } }, { key: "getTooltipEventType", value: function() { var t = Object(L.b)(this.props.children, P.a.displayName); if (t && w()(t.props.shared)) { var e = t.props.shared ? "axis" : "item"; return f.indexOf(e) >= 0 ? e : u } return u } }, { key: "getMouseInfo", value: function(t) { if (!this.container) return null; var e = Object(z.b)(this.container),
                                        n = Object(z.a)(t, e),
                                        r = this.inRange(n.chartX, n.chartY); if (!r) return null; var i = this.state,
                                        o = i.xAxisMap,
                                        a = i.yAxisMap; if ("axis" !== this.getTooltipEventType() && o && a) { var s = Object(V.b)(o).scale,
                                            u = Object(V.b)(a).scale,
                                            c = s && s.invert ? s.invert(n.chartX) : null,
                                            l = u && u.invert ? u.invert(n.chartY) : null; return ut(ut({}, n), {}, { xValue: c, yValue: l }) } var h = gt(this.state, this.props.data, this.props.layout, r); return h ? ut(ut({}, n), h) : null } }, { key: "getCursorRectangle", value: function() { var t = this.props.layout,
                                        e = this.state,
                                        n = e.activeCoordinate,
                                        r = e.offset,
                                        i = e.tooltipAxisBandSize,
                                        o = i / 2; return { stroke: "none", fill: "#ccc", x: "horizontal" === t ? n.x - o : r.left + .5, y: "horizontal" === t ? r.top + .5 : n.y - o, width: "horizontal" === t ? i : r.width - 1, height: "horizontal" === t ? r.height - 1 : i } } }, { key: "getCursorPoints", value: function() { var t, e, n, r, i = this.props.layout,
                                        o = this.state,
                                        a = o.activeCoordinate,
                                        s = o.offset; if ("horizontal" === i) n = t = a.x, e = s.top, r = s.top + s.height;
                                    else if ("vertical" === i) r = e = a.y, t = s.left, n = s.left + s.width;
                                    else if (!m()(a.cx) || !m()(a.cy)) { if ("centric" !== i) { var u = a.cx,
                                                c = a.cy,
                                                l = a.radius,
                                                h = a.startAngle,
                                                f = a.endAngle; return { points: [Object(H.c)(u, c, l, h), Object(H.c)(u, c, l, f)], cx: u, cy: c, radius: l, startAngle: h, endAngle: f } } var p = a.cx,
                                            d = a.cy,
                                            y = a.innerRadius,
                                            v = a.outerRadius,
                                            g = a.angle,
                                            b = Object(H.c)(p, d, y, g),
                                            x = Object(H.c)(p, d, v, g);
                                        t = b.x, e = b.y, n = x.x, r = x.y } return [{ x: t, y: e }, { x: n, y: r }] } }, { key: "inRange", value: function(t, e) { var n = this.props.layout; if ("horizontal" === n || "vertical" === n) { var r = this.state.offset; return t >= r.left && t <= r.left + r.width && e >= r.top && e <= r.top + r.height ? { x: t, y: e } : null } var i = this.state,
                                        o = i.angleAxisMap,
                                        a = i.radiusAxisMap; if (o && a) { var s = Object(V.b)(o); return Object(H.b)({ x: t, y: e }, s) } return null } }, { key: "parseEventsOfWrapper", value: function() { var t = this.props.children,
                                        e = this.getTooltipEventType(),
                                        n = Object(L.b)(t, P.a.displayName),
                                        r = {}; return n && "axis" === e && (r = "click" === n.props.trigger ? { onClick: this.handleClick } : { onMouseEnter: this.handleMouseEnter, onMouseMove: this.handleMouseMove, onMouseLeave: this.handleMouseLeave, onTouchMove: this.handleTouchMove, onTouchStart: this.handleTouchStart, onTouchEnd: this.handleTouchEnd }), ut(ut({}, Object($.a)(this.props, this.handleOuterEvent)), r) } }, { key: "addListener", value: function() { Y.b.on(Y.a, this.handleReceiveSyncEvent), Y.b.setMaxListeners && Y.b._maxListeners && Y.b.setMaxListeners(Y.b._maxListeners + 1) } }, { key: "removeListener", value: function() { Y.b.removeListener(Y.a, this.handleReceiveSyncEvent), Y.b.setMaxListeners && Y.b._maxListeners && Y.b.setMaxListeners(Y.b._maxListeners - 1) } }, { key: "triggerSyncEvent", value: function(t) { var e = this.props.syncId;
                                    m()(e) || Y.b.emit(Y.a, e, this.uniqueChartId, t) } }, { key: "applySyncEvent", value: function(t) { var e = this.props,
                                        n = e.layout,
                                        r = e.syncMethod,
                                        i = this.state.updateId,
                                        o = t.dataStartIndex,
                                        a = t.dataEndIndex; if (m()(t.dataStartIndex) && m()(t.dataEndIndex))
                                        if (m()(t.activeTooltipIndex)) this.setState(t);
                                        else { var s = t.chartX,
                                                u = t.chartY,
                                                c = t.activeTooltipIndex,
                                                l = this.state,
                                                h = l.offset,
                                                f = l.tooltipTicks; if (!h) return; if ("function" === typeof r) c = r(f, t);
                                            else if ("value" === r) { c = -1; for (var p = 0; p < f.length; p++)
                                                    if (f[p].value === t.activeLabel) { c = p; break } } var d = ut(ut({}, h), {}, { x: h.left, y: h.top }),
                                                y = Math.min(s, d.x + d.width),
                                                v = Math.min(u, d.y + d.height),
                                                g = f[c] && f[c].value,
                                                b = vt(this.state, this.props.data, c),
                                                x = f[c] ? { x: "horizontal" === n ? f[c].coordinate : y, y: "horizontal" === n ? v : f[c].coordinate } : ht;
                                            this.setState(ut(ut({}, t), {}, { activeLabel: g, activeCoordinate: x, activePayload: b, activeTooltipIndex: c })) }
                                    else this.setState(ut({ dataStartIndex: o, dataEndIndex: a }, O({ props: this.props, dataStartIndex: o, dataEndIndex: a, updateId: i }, this.state))) } }, { key: "filterFormatItem", value: function(t, e, n) { for (var r = this.state.formatedGraphicalItems, i = 0, o = r.length; i < o; i++) { var a = r[i]; if (a.item === t || a.props.key === t.key || e === Object(L.c)(a.item.type) && n === a.childIndex) return a } return null } }, { key: "renderAxis", value: function(t, e, n, r) { var i = this.props,
                                        o = i.width,
                                        a = i.height; return j.a.createElement(B.a, X({}, t, { className: "recharts-".concat(t.axisType, " ").concat(t.axisType), key: e.key || "".concat(n, "-").concat(r), viewBox: { x: 0, y: 0, width: o, height: a }, ticksGenerator: this.axesTicksGenerator })) } }, { key: "renderClipPath", value: function() { var t = this.clipPathId,
                                        e = this.state.offset,
                                        n = e.left,
                                        r = e.top,
                                        i = e.height,
                                        o = e.width; return j.a.createElement("defs", null, j.a.createElement("clipPath", { id: t }, j.a.createElement("rect", { x: n, y: r, height: i, width: o }))) } }, { key: "getXScales", value: function() { var t = this.state.xAxisMap; return t ? Object.entries(t).reduce((function(t, e) { var n = G(e, 2),
                                            r = n[0],
                                            i = n[1]; return ut(ut({}, t), {}, ct({}, r, i.scale)) }), {}) : null } }, { key: "getYScales", value: function() { var t = this.state.yAxisMap; return t ? Object.entries(t).reduce((function(t, e) { var n = G(e, 2),
                                            r = n[0],
                                            i = n[1]; return ut(ut({}, t), {}, ct({}, r, i.scale)) }), {}) : null } }, { key: "getXScaleByAxisId", value: function(t) { var e, n; return null === (e = this.state.xAxisMap) || void 0 === e || null === (n = e[t]) || void 0 === n ? void 0 : n.scale } }, { key: "getYScaleByAxisId", value: function(t) { var e, n; return null === (e = this.state.yAxisMap) || void 0 === e || null === (n = e[t]) || void 0 === n ? void 0 : n.scale } }, { key: "getItemByXY", value: function(t) { var e = this.state.formatedGraphicalItems; if (e && e.length)
                                        for (var n = 0, r = e.length; n < r; n++) { var i = e[n],
                                                o = i.props,
                                                a = i.item,
                                                s = Object(L.c)(a.type); if ("Bar" === s) { var u = (o.data || []).find((function(e) { return Object(R.b)(t, e) })); if (u) return { graphicalItem: i, payload: u } } else if ("RadialBar" === s) { var c = (o.data || []).find((function(e) { return Object(H.b)(t, e) })); if (c) return { graphicalItem: i, payload: c } } }
                                    return null } }, { key: "render", value: function() { var t = this; if (!Object(L.h)(this)) return null; var e = this.props,
                                        n = e.children,
                                        r = e.className,
                                        i = e.width,
                                        o = e.height,
                                        a = e.style,
                                        s = e.compact,
                                        u = Q(e, ["children", "className", "width", "height", "style", "compact"]),
                                        c = Object($.c)(u),
                                        l = { CartesianGrid: { handler: this.renderGrid, once: !0 }, ReferenceArea: { handler: this.renderReferenceElement }, ReferenceLine: { handler: this.renderReferenceElement }, ReferenceDot: { handler: this.renderReferenceElement }, XAxis: { handler: this.renderXAxis }, YAxis: { handler: this.renderYAxis }, Brush: { handler: this.renderBrush, once: !0 }, Bar: { handler: this.renderGraphicChild }, Line: { handler: this.renderGraphicChild }, Area: { handler: this.renderGraphicChild }, Radar: { handler: this.renderGraphicChild }, RadialBar: { handler: this.renderGraphicChild }, Scatter: { handler: this.renderGraphicChild }, Pie: { handler: this.renderGraphicChild }, Funnel: { handler: this.renderGraphicChild }, Tooltip: { handler: this.renderCursor, once: !0 }, PolarGrid: { handler: this.renderPolarGrid, once: !0 }, PolarAngleAxis: { handler: this.renderPolarAxis }, PolarRadiusAxis: { handler: this.renderPolarAxis }, Customized: { handler: this.renderCustomized } }; if (s) return j.a.createElement(k.a, X({}, c, { width: i, height: o }), this.renderClipPath(), Object(L.g)(n, l)); var h = this.parseEventsOfWrapper(); return j.a.createElement("div", X({ className: E()("recharts-wrapper", r), style: ut({ position: "relative", cursor: "default", width: i, height: o }, a) }, h, { ref: function(e) { t.container = e } }), j.a.createElement(k.a, X({}, c, { width: i, height: o }), this.renderClipPath(), Object(L.g)(n, l)), this.renderLegend(), this.renderTooltip()) } }]) && Z(e.prototype, n), i && Z(e, i), l }(M.Component), e.displayName = r, e.defaultProps = ut({ layout: "horizontal", stackOffset: "none", barCategoryGap: "10%", barGap: 4, margin: { top: 5, right: 5, bottom: 5, left: 5 }, reverseStackOrder: !1, syncMethod: "index" }, b), e.getDerivedStateFromProps = function(t, e) { var n = t.data,
                                r = t.children,
                                i = t.width,
                                o = t.height,
                                a = t.layout,
                                s = t.stackOffset,
                                u = t.margin; if (m()(e.updateId)) { var c = mt(t); return ut(ut(ut({}, c), {}, { updateId: 0 }, O(ut(ut({ props: t }, c), {}, { updateId: 0 }), e)), {}, { prevData: n, prevWidth: i, prevHeight: o, prevLayout: a, prevStackOffset: s, prevMargin: u, prevChildren: r }) } if (n !== e.prevData || i !== e.prevWidth || o !== e.prevHeight || a !== e.prevLayout || s !== e.prevStackOffset || !Object(q.a)(u, e.prevMargin)) { var l = mt(t),
                                    h = { chartX: e.chartX, chartY: e.chartY, isTooltipActive: e.isTooltipActive },
                                    f = ut(ut({}, gt(e, n, a)), {}, { updateId: e.updateId + 1 }),
                                    p = ut(ut(ut({}, l), h), f); return ut(ut(ut({}, p), O(ut({ props: t }, p), e)), {}, { prevData: n, prevWidth: i, prevHeight: o, prevLayout: a, prevStackOffset: s, prevMargin: u, prevChildren: r }) } if (!Object(L.e)(r, e.prevChildren)) { var d = !m()(n) ? e.updateId : e.updateId + 1; return ut(ut({ updateId: d }, O(ut(ut({ props: t }, e), {}, { updateId: d }), e)), {}, { prevChildren: r }) } return null }, e.renderActiveDot = function(t, e) { var n; return n = Object(M.isValidElement)(t) ? Object(M.cloneElement)(t, e) : c()(t) ? t(e) : j.a.createElement(D.a, e), j.a.createElement(A.a, { className: "recharts-active-dot", key: e.key }, n) }, n } }).call(this, n(478).setImmediate, n(478).clearImmediate) }, 891: function(t, e) { t.exports = function(t, e, n, r) { for (var i = t.length, o = n + (r ? 1 : -1); r ? o-- : ++o < i;)
                    if (e(t[o], o, t)) return o;
                return -1 } }, 892: function(t, e) { var n = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
            t.exports = function(t) { return n.test(t) } }, 893: function(t, e, n) { var r = n(479),
                i = n(484),
                o = n(247);
            t.exports = function(t) { return t && t.length ? r(t, o, i) : void 0 } }, 894: function(t, e, n) { var r = n(244),
                i = n(1005);
            t.exports = function(t, e) { return t && t.length ? i(t, r(e, 2)) : [] } }, 895: function(t, e, n) { "use strict";
            n.d(e, "a", (function() { return l })); var r = n(1),
                i = n.n(r),
                o = n(477),
                a = n.n(o),
                s = n(773);

            function u() { return (u = Object.assign || function(t) { for (var e = 1; e < arguments.length; e++) { var n = arguments[e]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]) } return t }).apply(this, arguments) }

            function c(t, e) { if (null == t) return {}; var n, r, i = function(t, e) { if (null == t) return {}; var n, r, i = {},
                        o = Object.keys(t); for (r = 0; r < o.length; r++) n = o[r], e.indexOf(n) >= 0 || (i[n] = t[n]); return i }(t, e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(t); for (r = 0; r < o.length; r++) n = o[r], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (i[n] = t[n]) } return i }

            function l(t) { var e = t.children,
                    n = t.width,
                    r = t.height,
                    o = t.viewBox,
                    l = t.className,
                    h = t.style,
                    f = c(t, ["children", "width", "height", "viewBox", "className", "style"]),
                    p = o || { width: n, height: r, x: 0, y: 0 },
                    d = a()("recharts-surface", l); return i.a.createElement("svg", u({}, Object(s.c)(f, !0, !0), { className: d, width: n, height: r, style: h, viewBox: "".concat(p.x, " ").concat(p.y, " ").concat(p.width, " ").concat(p.height), version: "1.1" }), e) } }, 896: function(t, e, n) { "use strict";
            n.d(e, "b", (function() { return s })); var r = n(3),
                i = n.n(r),
                o = n(784),
                a = i.a.mark(s);

            function s(t, e) { var n, r, s, u, c, l, h; return i.a.wrap((function(i) { for (;;) switch (i.prev = i.next) {
                        case 0:
                            if (void 0 !== e) { i.next = 21; break }
                            n = Object(o.a)(t), i.prev = 2, n.s();
                        case 4:
                            if ((r = n.n()).done) { i.next = 11; break } if (!(null != (s = r.value) && (s = +s) >= s)) { i.next = 9; break } return i.next = 9, s;
                        case 9:
                            i.next = 4; break;
                        case 11:
                            i.next = 16; break;
                        case 13:
                            i.prev = 13, i.t0 = i.catch(2), n.e(i.t0);
                        case 16:
                            return i.prev = 16, n.f(), i.finish(16);
                        case 19:
                            i.next = 40; break;
                        case 21:
                            u = -1, c = Object(o.a)(t), i.prev = 23, c.s();
                        case 25:
                            if ((l = c.n()).done) { i.next = 32; break } if (h = l.value, !(null != (h = e(h, ++u, t)) && (h = +h) >= h)) { i.next = 30; break } return i.next = 30, h;
                        case 30:
                            i.next = 25; break;
                        case 32:
                            i.next = 37; break;
                        case 34:
                            i.prev = 34, i.t1 = i.catch(23), c.e(i.t1);
                        case 37:
                            return i.prev = 37, c.f(), i.finish(37);
                        case 40:
                        case "end":
                            return i.stop() } }), a, null, [
                    [2, 13, 16, 19],
                    [23, 34, 37, 40]
                ]) }
            e.a = function(t) { return null === t ? NaN : +t } }, 897: function(t, e, n) { "use strict";
            e.a = function(t, e) { return t = +t, e = +e,
                    function(n) { return t * (1 - n) + e * n } } }, 898: function(t, e, n) { "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }), e.flip = c; var r, i = n(1024),
                o = (r = i) && r.__esModule ? r : { default: r };

            function a(t, e) { return "MathExpression" === t.type ? function(t, e) { switch ((t = function(t, e) { var n = (0, o.default)(t.left, t.right, e),
                            r = a(n.left, e),
                            i = a(n.right, e); "MathExpression" === r.type && "MathExpression" === i.type && ("/" === r.operator && "*" === i.operator || "-" === r.operator && "+" === i.operator || "*" === r.operator && "/" === i.operator || "+" === r.operator && "-" === i.operator) && (s(r.right, i.right) ? n = (0, o.default)(r.left, i.left, e) : s(r.right, i.left) && (n = (0, o.default)(r.left, i.right, e)), r = a(n.left, e), i = a(n.right, e)); return t.left = r, t.right = i, t }(t, e)).operator) {
                        case "+":
                        case "-":
                            return function(t, e) { var n = t,
                                    r = n.left,
                                    i = n.right,
                                    o = n.operator; if ("CssVariable" === r.type || "CssVariable" === i.type) return t; if (0 === i.value) return r; if (0 === r.value && "+" === o) return i; if (0 === r.value && "-" === o) return l(i);
                                r.type === i.type && u(r.type) && ((t = Object.assign({}, r)).value = "+" === o ? r.value + i.value : r.value - i.value); if (u(r.type) && ("+" === i.operator || "-" === i.operator) && "MathExpression" === i.type) { if (r.type === i.left.type) return (t = Object.assign({}, t)).left = a({ type: "MathExpression", operator: o, left: r, right: i.left }, e), t.right = i.right, t.operator = "-" === o ? c(i.operator) : i.operator, a(t, e); if (r.type === i.right.type) return (t = Object.assign({}, t)).left = a({ type: "MathExpression", operator: "-" === o ? c(i.operator) : i.operator, left: r, right: i.right }, e), t.right = i.left, a(t, e) } if ("MathExpression" === r.type && ("+" === r.operator || "-" === r.operator) && u(i.type)) { if (i.type === r.left.type) return (t = Object.assign({}, r)).left = a({ type: "MathExpression", operator: o, left: r.left, right: i }, e), a(t, e); if (i.type === r.right.type) return t = Object.assign({}, r), "-" === r.operator ? (t.right = a({ type: "MathExpression", operator: "-" === o ? "+" : "-", left: i, right: r.right }, e), t.operator = "-" === o ? "-" : "+") : t.right = a({ type: "MathExpression", operator: o, left: r.right, right: i }, e), t.right.value < 0 && (t.right.value *= -1, t.operator = "-" === t.operator ? "+" : "-"), a(t, e) } return t }(t, e);
                        case "/":
                            return function(t, e) { if (!u(t.right.type)) return t; if ("Value" !== t.right.type) throw new Error('Cannot divide by "' + t.right.unit + '", number expected'); if (0 === t.right.value) throw new Error("Cannot divide by zero"); if ("MathExpression" === t.left.type) return u(t.left.left.type) && u(t.left.right.type) ? (t.left.left.value /= t.right.value, t.left.right.value /= t.right.value, a(t.left, e)) : t; if (u(t.left.type)) return t.left.value /= t.right.value, t.left; return t }(t, e);
                        case "*":
                            return function(t) { if ("MathExpression" === t.left.type && "Value" === t.right.type) { if (u(t.left.left.type) && u(t.left.right.type)) return t.left.left.value *= t.right.value, t.left.right.value *= t.right.value, t.left } else { if (u(t.left.type) && "Value" === t.right.type) return t.left.value *= t.right.value, t.left; if ("Value" === t.left.type && "MathExpression" === t.right.type) { if (u(t.right.left.type) && u(t.right.right.type)) return t.right.left.value *= t.left.value, t.right.right.value *= t.left.value, t.right } else if ("Value" === t.left.type && u(t.right.type)) return t.right.value *= t.left.value, t.right } return t }(t) } return t }(t, e) : "Calc" === t.type ? a(t.value, e) : t }

            function s(t, e) { return t.type === e.type && t.value === e.value }

            function u(t) { switch (t) {
                    case "LengthValue":
                    case "AngleValue":
                    case "TimeValue":
                    case "FrequencyValue":
                    case "ResolutionValue":
                    case "EmValue":
                    case "ExValue":
                    case "ChValue":
                    case "RemValue":
                    case "VhValue":
                    case "VwValue":
                    case "VminValue":
                    case "VmaxValue":
                    case "PercentageValue":
                    case "Value":
                        return !0 } return !1 }

            function c(t) { return "+" === t ? "-" : "+" }

            function l(t) { return u(t.type) ? t.value = -t.value : "MathExpression" == t.type && (t.left = l(t.left), t.right = l(t.right)), t }
            e.default = a }, 899: function(t, e, n) {
            (function(e) { for (var r = n(1027), i = "undefined" === typeof window ? e : window, o = ["moz", "webkit"], a = "AnimationFrame", s = i["request" + a], u = i["cancel" + a] || i["cancelRequest" + a], c = 0; !s && c < o.length; c++) s = i[o[c] + "Request" + a], u = i[o[c] + "Cancel" + a] || i[o[c] + "CancelRequest" + a]; if (!s || !u) { var l = 0,
                        h = 0,
                        f = [];
                    s = function(t) { if (0 === f.length) { var e = r(),
                                n = Math.max(0, 16.666666666666668 - (e - l));
                            l = n + e, setTimeout((function() { var t = f.slice(0);
                                f.length = 0; for (var e = 0; e < t.length; e++)
                                    if (!t[e].cancelled) try { t[e].callback(l) } catch (n) { setTimeout((function() { throw n }), 0) } }), Math.round(n)) } return f.push({ handle: ++h, callback: t, cancelled: !1 }), h }, u = function(t) { for (var e = 0; e < f.length; e++) f[e].handle === t && (f[e].cancelled = !0) } }
                t.exports = function(t) { return s.call(i, t) }, t.exports.cancel = function() { u.apply(i, arguments) }, t.exports.polyfill = function(t) { t || (t = i), t.requestAnimationFrame = s, t.cancelAnimationFrame = u } }).call(this, n(143)) }, 900: function(t, e, n) { "use strict"; var r = s(n(1029)),
                i = s(n(1034)),
                o = s(n(904)),
                a = s(n(901));

            function s(t) { return t && t.__esModule ? t : { default: t } }
            t.exports = { Transition: a.default, TransitionGroup: o.default, ReplaceTransition: i.default, CSSTransition: r.default } }, 901: function(t, e, n) { "use strict";
            e.__esModule = !0, e.default = e.EXITING = e.ENTERED = e.ENTERING = e.EXITED = e.UNMOUNTED = void 0; var r = function(t) { if (t && t.__esModule) return t; var e = {}; if (null != t)
                        for (var n in t)
                            if (Object.prototype.hasOwnProperty.call(t, n)) { var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(t, n) : {};
                                r.get || r.set ? Object.defineProperty(e, n, r) : e[n] = t[n] }
                    return e.default = t, e }(n(48)),
                i = s(n(1)),
                o = s(n(106)),
                a = n(902);
            n(903);

            function s(t) { return t && t.__esModule ? t : { default: t } } var u = "unmounted";
            e.UNMOUNTED = u; var c = "exited";
            e.EXITED = c; var l = "entering";
            e.ENTERING = l; var h = "entered";
            e.ENTERED = h; var f = "exiting";
            e.EXITING = f; var p = function(t) { var e, n;

                function r(e, n) { var r;
                    r = t.call(this, e, n) || this; var i, o = n.transitionGroup,
                        a = o && !o.isMounting ? e.enter : e.appear; return r.appearStatus = null, e.in ? a ? (i = c, r.appearStatus = l) : i = h : i = e.unmountOnExit || e.mountOnEnter ? u : c, r.state = { status: i }, r.nextCallback = null, r }
                n = t, (e = r).prototype = Object.create(n.prototype), e.prototype.constructor = e, e.__proto__ = n; var a = r.prototype; return a.getChildContext = function() { return { transitionGroup: null } }, r.getDerivedStateFromProps = function(t, e) { return t.in && e.status === u ? { status: c } : null }, a.componentDidMount = function() { this.updateStatus(!0, this.appearStatus) }, a.componentDidUpdate = function(t) { var e = null; if (t !== this.props) { var n = this.state.status;
                        this.props.in ? n !== l && n !== h && (e = l) : n !== l && n !== h || (e = f) }
                    this.updateStatus(!1, e) }, a.componentWillUnmount = function() { this.cancelNextCallback() }, a.getTimeouts = function() { var t, e, n, r = this.props.timeout; return t = e = n = r, null != r && "number" !== typeof r && (t = r.exit, e = r.enter, n = void 0 !== r.appear ? r.appear : e), { exit: t, enter: e, appear: n } }, a.updateStatus = function(t, e) { if (void 0 === t && (t = !1), null !== e) { this.cancelNextCallback(); var n = o.default.findDOMNode(this);
                        e === l ? this.performEnter(n, t) : this.performExit(n) } else this.props.unmountOnExit && this.state.status === c && this.setState({ status: u }) }, a.performEnter = function(t, e) { var n = this,
                        r = this.props.enter,
                        i = this.context.transitionGroup ? this.context.transitionGroup.isMounting : e,
                        o = this.getTimeouts(),
                        a = i ? o.appear : o.enter;
                    e || r ? (this.props.onEnter(t, i), this.safeSetState({ status: l }, (function() { n.props.onEntering(t, i), n.onTransitionEnd(t, a, (function() { n.safeSetState({ status: h }, (function() { n.props.onEntered(t, i) })) })) }))) : this.safeSetState({ status: h }, (function() { n.props.onEntered(t) })) }, a.performExit = function(t) { var e = this,
                        n = this.props.exit,
                        r = this.getTimeouts();
                    n ? (this.props.onExit(t), this.safeSetState({ status: f }, (function() { e.props.onExiting(t), e.onTransitionEnd(t, r.exit, (function() { e.safeSetState({ status: c }, (function() { e.props.onExited(t) })) })) }))) : this.safeSetState({ status: c }, (function() { e.props.onExited(t) })) }, a.cancelNextCallback = function() { null !== this.nextCallback && (this.nextCallback.cancel(), this.nextCallback = null) }, a.safeSetState = function(t, e) { e = this.setNextCallback(e), this.setState(t, e) }, a.setNextCallback = function(t) { var e = this,
                        n = !0; return this.nextCallback = function(r) { n && (n = !1, e.nextCallback = null, t(r)) }, this.nextCallback.cancel = function() { n = !1 }, this.nextCallback }, a.onTransitionEnd = function(t, e, n) { this.setNextCallback(n); var r = null == e && !this.props.addEndListener;
                    t && !r ? (this.props.addEndListener && this.props.addEndListener(t, this.nextCallback), null != e && setTimeout(this.nextCallback, e)) : setTimeout(this.nextCallback, 0) }, a.render = function() { var t = this.state.status; if (t === u) return null; var e = this.props,
                        n = e.children,
                        r = function(t, e) { if (null == t) return {}; var n, r, i = {},
                                o = Object.keys(t); for (r = 0; r < o.length; r++) n = o[r], e.indexOf(n) >= 0 || (i[n] = t[n]); return i }(e, ["children"]); if (delete r.in, delete r.mountOnEnter, delete r.unmountOnExit, delete r.appear, delete r.enter, delete r.exit, delete r.timeout, delete r.addEndListener, delete r.onEnter, delete r.onEntering, delete r.onEntered, delete r.onExit, delete r.onExiting, delete r.onExited, "function" === typeof n) return n(t, r); var o = i.default.Children.only(n); return i.default.cloneElement(o, r) }, r }(i.default.Component);

            function d() {}
            p.contextTypes = { transitionGroup: r.object }, p.childContextTypes = { transitionGroup: function() {} }, p.propTypes = {}, p.defaultProps = { in: !1, mountOnEnter: !1, unmountOnExit: !1, appear: !1, enter: !0, exit: !0, onEnter: d, onEntering: d, onEntered: d, onExit: d, onExiting: d, onExited: d }, p.UNMOUNTED = 0, p.EXITED = 1, p.ENTERING = 2, p.ENTERED = 3, p.EXITING = 4; var y = (0, a.polyfill)(p);
            e.default = y }, 902: function(t, e, n) { "use strict";

            function r() { var t = this.constructor.getDerivedStateFromProps(this.props, this.state);
                null !== t && void 0 !== t && this.setState(t) }

            function i(t) { this.setState(function(e) { var n = this.constructor.getDerivedStateFromProps(t, e); return null !== n && void 0 !== n ? n : null }.bind(this)) }

            function o(t, e) { try { var n = this.props,
                        r = this.state;
                    this.props = t, this.state = e, this.__reactInternalSnapshotFlag = !0, this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(n, r) } finally { this.props = n, this.state = r } }

            function a(t) { var e = t.prototype; if (!e || !e.isReactComponent) throw new Error("Can only polyfill class components"); if ("function" !== typeof t.getDerivedStateFromProps && "function" !== typeof e.getSnapshotBeforeUpdate) return t; var n = null,
                    a = null,
                    s = null; if ("function" === typeof e.componentWillMount ? n = "componentWillMount" : "function" === typeof e.UNSAFE_componentWillMount && (n = "UNSAFE_componentWillMount"), "function" === typeof e.componentWillReceiveProps ? a = "componentWillReceiveProps" : "function" === typeof e.UNSAFE_componentWillReceiveProps && (a = "UNSAFE_componentWillReceiveProps"), "function" === typeof e.componentWillUpdate ? s = "componentWillUpdate" : "function" === typeof e.UNSAFE_componentWillUpdate && (s = "UNSAFE_componentWillUpdate"), null !== n || null !== a || null !== s) { var u = t.displayName || t.name,
                        c = "function" === typeof t.getDerivedStateFromProps ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()"; throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n" + u + " uses " + c + " but also contains the following legacy lifecycles:" + (null !== n ? "\n  " + n : "") + (null !== a ? "\n  " + a : "") + (null !== s ? "\n  " + s : "") + "\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks") } if ("function" === typeof t.getDerivedStateFromProps && (e.componentWillMount = r, e.componentWillReceiveProps = i), "function" === typeof e.getSnapshotBeforeUpdate) { if ("function" !== typeof e.componentDidUpdate) throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");
                    e.componentWillUpdate = o; var l = e.componentDidUpdate;
                    e.componentDidUpdate = function(t, e, n) { var r = this.__reactInternalSnapshotFlag ? this.__reactInternalSnapshot : n;
                        l.call(this, t, e, r) } } return t }
            n.r(e), n.d(e, "polyfill", (function() { return a })), r.__suppressDeprecationWarning = !0, i.__suppressDeprecationWarning = !0, o.__suppressDeprecationWarning = !0 }, 903: function(t, e, n) { "use strict";
            e.__esModule = !0, e.classNamesShape = e.timeoutsShape = void 0; var r;
            (r = n(48)) && r.__esModule;
            e.timeoutsShape = null;
            e.classNamesShape = null }, 904: function(t, e, n) { "use strict";
            e.__esModule = !0, e.default = void 0; var r = s(n(48)),
                i = s(n(1)),
                o = n(902),
                a = n(1035);

            function s(t) { return t && t.__esModule ? t : { default: t } }

            function u() { return (u = Object.assign || function(t) { for (var e = 1; e < arguments.length; e++) { var n = arguments[e]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]) } return t }).apply(this, arguments) }

            function c(t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t } var l = Object.values || function(t) { return Object.keys(t).map((function(e) { return t[e] })) },
                h = function(t) { var e, n;

                    function r(e, n) { var r, i = (r = t.call(this, e, n) || this).handleExited.bind(c(c(r))); return r.state = { handleExited: i, firstRender: !0 }, r }
                    n = t, (e = r).prototype = Object.create(n.prototype), e.prototype.constructor = e, e.__proto__ = n; var o = r.prototype; return o.getChildContext = function() { return { transitionGroup: { isMounting: !this.appeared } } }, o.componentDidMount = function() { this.appeared = !0, this.mounted = !0 }, o.componentWillUnmount = function() { this.mounted = !1 }, r.getDerivedStateFromProps = function(t, e) { var n = e.children,
                            r = e.handleExited; return { children: e.firstRender ? (0, a.getInitialChildMapping)(t, r) : (0, a.getNextChildMapping)(t, n, r), firstRender: !1 } }, o.handleExited = function(t, e) { var n = (0, a.getChildMapping)(this.props.children);
                        t.key in n || (t.props.onExited && t.props.onExited(e), this.mounted && this.setState((function(e) { var n = u({}, e.children); return delete n[t.key], { children: n } }))) }, o.render = function() { var t = this.props,
                            e = t.component,
                            n = t.childFactory,
                            r = function(t, e) { if (null == t) return {}; var n, r, i = {},
                                    o = Object.keys(t); for (r = 0; r < o.length; r++) n = o[r], e.indexOf(n) >= 0 || (i[n] = t[n]); return i }(t, ["component", "childFactory"]),
                            o = l(this.state.children).map(n); return delete r.appear, delete r.enter, delete r.exit, null === e ? o : i.default.createElement(e, r, o) }, r }(i.default.Component);
            h.childContextTypes = { transitionGroup: r.default.object.isRequired }, h.propTypes = {}, h.defaultProps = { component: "div", childFactory: function(t) { return t } }; var f = (0, o.polyfill)(h);
            e.default = f, t.exports = e.default }, 905: function(t, e, n) { "use strict";
            n.d(e, "a", (function() { return k })); var r = n(127),
                i = n.n(r),
                o = n(310),
                a = n.n(o),
                s = n(781),
                u = n.n(s),
                c = n(1042),
                l = n.n(c),
                h = n(99),
                f = n.n(h),
                p = n(1),
                d = n.n(p),
                y = n(805),
                v = n(782),
                g = n(789),
                b = n(795),
                m = n(773);

            function x(t) { return function(t) { if (Array.isArray(t)) return w(t) }(t) || function(t) { if ("undefined" !== typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t) }(t) || function(t, e) { if (!t) return; if ("string" === typeof t) return w(t, e); var n = Object.prototype.toString.call(t).slice(8, -1); "Object" === n && t.constructor && (n = t.constructor.name); if ("Map" === n || "Set" === n) return Array.from(t); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return w(t, e) }(t) || function() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() }

            function w(t, e) {
                (null == e || e > t.length) && (e = t.length); for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n]; return r }

            function O() { return (O = Object.assign || function(t) { for (var e = 1; e < arguments.length; e++) { var n = arguments[e]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]) } return t }).apply(this, arguments) }

            function _(t, e) { var n = Object.keys(t); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), n.push.apply(n, r) } return n }

            function M(t) { for (var e = 1; e < arguments.length; e++) { var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? _(Object(n), !0).forEach((function(e) { j(t, e, n[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : _(Object(n)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })) } return t }

            function j(t, e, n) { return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t }

            function S(t, e) { if (null == t) return {}; var n, r, i = function(t, e) { if (null == t) return {}; var n, r, i = {},
                        o = Object.keys(t); for (r = 0; r < o.length; r++) n = o[r], e.indexOf(n) >= 0 || (i[n] = t[n]); return i }(t, e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(t); for (r = 0; r < o.length; r++) n = o[r], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (i[n] = t[n]) } return i } var E = { valueAccessor: function(t) { return f()(t.value) ? l()(t.value) : t.value } };

            function k(t) { var e = t.data,
                    n = t.valueAccessor,
                    r = t.dataKey,
                    i = t.clockWise,
                    o = t.id,
                    a = t.textBreakAll,
                    s = S(t, ["data", "valueAccessor", "dataKey", "clockWise", "id", "textBreakAll"]); return e && e.length ? d.a.createElement(v.a, { className: "recharts-label-list" }, e.map((function(t, e) { var c = u()(r) ? n(t, e) : Object(b.w)(t && t.payload, r),
                        l = u()(o) ? {} : { id: "".concat(o, "-").concat(e) }; return d.a.createElement(y.a, O({}, Object(m.c)(t, !0), s, l, { parentViewBox: t.parentViewBox, index: e, value: c, textBreakAll: a, viewBox: y.a.parseViewBox(u()(i) ? t : M(M({}, t), {}, { clockWise: i })), key: "label-".concat(e) })) }))) : null }

            function A(t, e) { return t ? !0 === t ? d.a.createElement(k, { key: "labelList-implicit", data: e }) : d.a.isValidElement(t) || a()(t) ? d.a.createElement(k, { key: "labelList-implicit", data: e, content: t }) : i()(t) ? d.a.createElement(k, O({ data: e }, t, { key: "labelList-implicit" })) : null : null }
            k.displayName = "LabelList", k.renderCallByParent = function(t, e) { var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2]; if (!t || !t.children && n && !t.label) return null; var r = t.children,
                    i = Object(g.a)(r, k.displayName).map((function(t, n) { return Object(p.cloneElement)(t, { data: e, key: "labelList-".concat(n) }) })); if (!n) return i; var o = A(t.label, e); return [o].concat(x(i)) }, k.defaultProps = E }, 906: function(t, e, n) { "use strict";
            n.d(e, "a", (function() { return r })); var r = function() { return null };
            r.displayName = "XAxis", r.defaultProps = { allowDecimals: !0, hide: !1, orientation: "bottom", width: 0, height: 30, mirror: !1, xAxisId: 0, tickCount: 5, type: "category", domain: [0, "auto"], padding: { left: 0, right: 0 }, allowDataOverflow: !1, scale: "auto", reversed: !1, allowDuplicatedCategory: !0 } }, 907: function(t, e, n) { "use strict";
            n.d(e, "a", (function() { return r })); var r = function() { return null };
            r.displayName = "YAxis", r.defaultProps = { allowDuplicatedCategory: !0, allowDecimals: !0, hide: !1, orientation: "left", width: 60, height: 0, mirror: !1, yAxisId: 0, tickCount: 5, type: "number", domain: [0, "auto"], padding: { top: 0, bottom: 0 }, allowDataOverflow: !1, scale: "auto", reversed: !1 } }, 974: function(t, e, n) { "use strict";
            n.r(e), n.d(e, "scaleBand", (function() { return r.a })), n.d(e, "scalePoint", (function() { return r.b })), n.d(e, "scaleIdentity", (function() { return a })), n.d(e, "scaleLinear", (function() { return i.a })), n.d(e, "scaleLog", (function() { return m })), n.d(e, "scaleSymlog", (function() { return _ })), n.d(e, "scaleOrdinal", (function() { return M.a })), n.d(e, "scaleImplicit", (function() { return M.b })), n.d(e, "scalePow", (function() { return A })), n.d(e, "scaleSqrt", (function() { return P })), n.d(e, "scaleRadial", (function() { return I })), n.d(e, "scaleQuantile", (function() { return H })), n.d(e, "scaleQuantize", (function() { return Y })), n.d(e, "scaleThreshold", (function() { return $ })), n.d(e, "scaleTime", (function() { return En })), n.d(e, "scaleUtc", (function() { return kn })), n.d(e, "scaleSequential", (function() { return In })), n.d(e, "scaleSequentialLog", (function() { return Nn })), n.d(e, "scaleSequentialPow", (function() { return Rn })), n.d(e, "scaleSequentialSqrt", (function() { return Ln })), n.d(e, "scaleSequentialSymlog", (function() { return Dn })), n.d(e, "scaleSequentialQuantile", (function() { return Bn })), n.d(e, "scaleDiverging", (function() { return Vn })), n.d(e, "scaleDivergingLog", (function() { return Un })), n.d(e, "scaleDivergingPow", (function() { return Hn })), n.d(e, "scaleDivergingSqrt", (function() { return qn })), n.d(e, "scaleDivergingSymlog", (function() { return Wn })), n.d(e, "tickFormat", (function() { return Yn.a })); var r = n(882),
                i = n(785),
                o = n(844);

            function a(t) { var e;

                function n(t) { return null == t || isNaN(t = +t) ? e : t } return n.invert = n, n.domain = n.range = function(e) { return arguments.length ? (t = Array.from(e, o.a), n) : t.slice() }, n.unknown = function(t) { return arguments.length ? (e = t, n) : e }, n.copy = function() { return a(t).unknown(e) }, t = arguments.length ? Array.from(t, o.a) : [0, 1], Object(i.b)(n) } var s = n(1247),
                u = n(1258);

            function c(t, e) { var n, r = 0,
                    i = (t = t.slice()).length - 1,
                    o = t[r],
                    a = t[i]; return a < o && (n = r, r = i, i = n, n = o, o = a, a = n), t[r] = e.floor(o), t[i] = e.ceil(a), t } var l = n(786),
                h = n(777);

            function f(t) { return Math.log(t) }

            function p(t) { return Math.exp(t) }

            function d(t) { return -Math.log(-t) }

            function y(t) { return -Math.exp(-t) }

            function v(t) { return isFinite(t) ? +("1e" + t) : t < 0 ? 0 : t }

            function g(t) { return function(e) { return -t(-e) } }

            function b(t) { var e, n, r = t(f, p),
                    i = r.domain,
                    o = 10;

                function a() { return e = function(t) { return t === Math.E ? Math.log : 10 === t && Math.log10 || 2 === t && Math.log2 || (t = Math.log(t), function(e) { return Math.log(e) / t }) }(o), n = function(t) { return 10 === t ? v : t === Math.E ? Math.exp : function(e) { return Math.pow(t, e) } }(o), i()[0] < 0 ? (e = g(e), n = g(n), t(d, y)) : t(f, p), r } return r.base = function(t) { return arguments.length ? (o = +t, a()) : o }, r.domain = function(t) { return arguments.length ? (i(t), a()) : i() }, r.ticks = function(t) { var r, a = i(),
                        u = a[0],
                        c = a[a.length - 1];
                    (r = c < u) && (p = u, u = c, c = p); var l, h, f, p = e(u),
                        d = e(c),
                        y = null == t ? 10 : +t,
                        v = []; if (!(o % 1) && d - p < y) { if (p = Math.floor(p), d = Math.ceil(d), u > 0) { for (; p <= d; ++p)
                                for (h = 1, l = n(p); h < o; ++h)
                                    if (!((f = l * h) < u)) { if (f > c) break;
                                        v.push(f) } } else
                            for (; p <= d; ++p)
                                for (h = o - 1, l = n(p); h >= 1; --h)
                                    if (!((f = l * h) < u)) { if (f > c) break;
                                        v.push(f) }
                        2 * v.length < y && (v = Object(s.a)(u, c, y)) } else v = Object(s.a)(p, d, Math.min(d - p, y)).map(n); return r ? v.reverse() : v }, r.tickFormat = function(t, i) { if (null == i && (i = 10 === o ? ".0e" : ","), "function" !== typeof i && (i = Object(u.a)(i)), t === 1 / 0) return i;
                    null == t && (t = 10); var a = Math.max(1, o * t / r.ticks().length); return function(t) { var r = t / n(Math.round(e(t))); return r * o < o - .5 && (r *= o), r <= a ? i(t) : "" } }, r.nice = function() { return i(c(i(), { floor: function(t) { return n(Math.floor(e(t))) }, ceil: function(t) { return n(Math.ceil(e(t))) } })) }, r }

            function m() { var t = b(Object(l.d)()).domain([1, 10]); return t.copy = function() { return Object(l.a)(t, m()).base(t.base()) }, h.b.apply(t, arguments), t }

            function x(t) { return function(e) { return Math.sign(e) * Math.log1p(Math.abs(e / t)) } }

            function w(t) { return function(e) { return Math.sign(e) * Math.expm1(Math.abs(e)) * t } }

            function O(t) { var e = 1,
                    n = t(x(e), w(e)); return n.constant = function(n) { return arguments.length ? t(x(e = +n), w(e)) : e }, Object(i.b)(n) }

            function _() { var t = O(Object(l.d)()); return t.copy = function() { return Object(l.a)(t, _()).constant(t.constant()) }, h.b.apply(t, arguments) } var M = n(820);

            function j(t) { return function(e) { return e < 0 ? -Math.pow(-e, t) : Math.pow(e, t) } }

            function S(t) { return t < 0 ? -Math.sqrt(-t) : Math.sqrt(t) }

            function E(t) { return t < 0 ? -t * t : t * t }

            function k(t) { var e = t(l.c, l.c),
                    n = 1;

                function r() { return 1 === n ? t(l.c, l.c) : .5 === n ? t(S, E) : t(j(n), j(1 / n)) } return e.exponent = function(t) { return arguments.length ? (n = +t, r()) : n }, Object(i.b)(e) }

            function A() { var t = k(Object(l.d)()); return t.copy = function() { return Object(l.a)(t, A()).exponent(t.exponent()) }, h.b.apply(t, arguments), t }

            function P() { return A.apply(null, arguments).exponent(.5) }

            function C(t) { return Math.sign(t) * t * t }

            function T(t) { return Math.sign(t) * Math.sqrt(Math.abs(t)) }

            function I() { var t, e = Object(l.b)(),
                    n = [0, 1],
                    r = !1;

                function a(n) { var i = T(e(n)); return isNaN(i) ? t : r ? Math.round(i) : i } return a.invert = function(t) { return e.invert(C(t)) }, a.domain = function(t) { return arguments.length ? (e.domain(t), a) : e.domain() }, a.range = function(t) { return arguments.length ? (e.range((n = Array.from(t, o.a)).map(C)), a) : n.slice() }, a.rangeRound = function(t) { return a.range(t).round(!0) }, a.round = function(t) { return arguments.length ? (r = !!t, a) : r }, a.clamp = function(t) { return arguments.length ? (e.clamp(t), a) : e.clamp() }, a.unknown = function(e) { return arguments.length ? (t = e, a) : t }, a.copy = function() { return I(e.domain(), n).round(r).clamp(e.clamp()).unknown(t) }, h.b.apply(a, arguments), Object(i.b)(a) } var N = n(784);

            function D(t, e) { var n; if (void 0 === e) { var r, i = Object(N.a)(t); try { for (i.s(); !(r = i.n()).done;) { var o = r.value;
                            null != o && (n < o || void 0 === n && o >= o) && (n = o) } } catch (l) { i.e(l) } finally { i.f() } } else { var a, s = -1,
                        u = Object(N.a)(t); try { for (u.s(); !(a = u.n()).done;) { var c = a.value;
                            null != (c = e(c, ++s, t)) && (n < c || void 0 === n && c >= c) && (n = c) } } catch (l) { u.e(l) } finally { u.f() } } return n }

            function R(t, e) { var n; if (void 0 === e) { var r, i = Object(N.a)(t); try { for (i.s(); !(r = i.n()).done;) { var o = r.value;
                            null != o && (n > o || void 0 === n && o >= o) && (n = o) } } catch (l) { i.e(l) } finally { i.f() } } else { var a, s = -1,
                        u = Object(N.a)(t); try { for (u.s(); !(a = u.n()).done;) { var c = a.value;
                            null != (c = e(c, ++s, t)) && (n > c || void 0 === n && c >= c) && (n = c) } } catch (l) { u.e(l) } finally { u.f() } } return n } var L = n(843);

            function B(t, e) { for (var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : t.length - 1, i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : L.a; r > n;) { if (r - n > 600) { var o = r - n + 1,
                            a = e - n + 1,
                            s = Math.log(o),
                            u = .5 * Math.exp(2 * s / 3),
                            c = .5 * Math.sqrt(s * u * (o - u) / o) * (a - o / 2 < 0 ? -1 : 1),
                            l = Math.max(n, Math.floor(e - a * u / o + c)),
                            h = Math.min(r, Math.floor(e + (o - a) * u / o + c));
                        B(t, e, l, h, i) } var f = t[e],
                        p = n,
                        d = r; for (F(t, n, e), i(t[r], f) > 0 && F(t, n, r); p < d;) { for (F(t, p, d), ++p, --d; i(t[p], f) < 0;) ++p; for (; i(t[d], f) > 0;) --d }
                    0 === i(t[n], f) ? F(t, n, d) : F(t, ++d, r), d <= e && (n = d + 1), e <= d && (r = d - 1) } return t }

            function F(t, e, n) { var r = t[e];
                t[e] = t[n], t[n] = r } var z = n(896);

            function V(t, e, n) { if (r = (t = Float64Array.from(Object(z.b)(t, n))).length) { if ((e = +e) <= 0 || r < 2) return R(t); if (e >= 1) return D(t); var r, i = (r - 1) * e,
                        o = Math.floor(i),
                        a = D(B(t, o).subarray(0, o + 1)); return a + (R(t.subarray(o + 1)) - a) * (i - o) } }

            function U(t, e) { var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : z.a; if (r = t.length) { if ((e = +e) <= 0 || r < 2) return +n(t[0], 0, t); if (e >= 1) return +n(t[r - 1], r - 1, t); var r, i = (r - 1) * e,
                        o = Math.floor(i),
                        a = +n(t[o], o, t),
                        s = +n(t[o + 1], o + 1, t); return a + (s - a) * (i - o) } } var W = n(1248);

            function H() { var t, e = [],
                    n = [],
                    r = [];

                function i() { var t = 0,
                        i = Math.max(1, n.length); for (r = new Array(i - 1); ++t < i;) r[t - 1] = U(e, t / i); return o }

                function o(e) { return null == e || isNaN(e = +e) ? t : n[Object(W.a)(r, e)] } return o.invertExtent = function(t) { var i = n.indexOf(t); return i < 0 ? [NaN, NaN] : [i > 0 ? r[i - 1] : e[0], i < r.length ? r[i] : e[e.length - 1]] }, o.domain = function(t) { if (!arguments.length) return e.slice();
                    e = []; var n, r = Object(N.a)(t); try { for (r.s(); !(n = r.n()).done;) { var o = n.value;
                            null == o || isNaN(o = +o) || e.push(o) } } catch (a) { r.e(a) } finally { r.f() } return e.sort(L.a), i() }, o.range = function(t) { return arguments.length ? (n = Array.from(t), i()) : n.slice() }, o.unknown = function(e) { return arguments.length ? (t = e, o) : t }, o.quantiles = function() { return r.slice() }, o.copy = function() { return H().domain(e).range(n).unknown(t) }, h.b.apply(o, arguments) } var q = n(9);

            function Y() { var t, e = 0,
                    n = 1,
                    r = 1,
                    o = [.5],
                    a = [0, 1];

                function s(e) { return null != e && e <= e ? a[Object(W.a)(o, e, 0, r)] : t }

                function u() { var t = -1; for (o = new Array(r); ++t < r;) o[t] = ((t + 1) * n - (t - r) * e) / (r + 1); return s } return s.domain = function(t) { var r, i; return arguments.length ? (r = t, i = Object(q.a)(r, 2), e = i[0], n = i[1], e = +e, n = +n, u()) : [e, n] }, s.range = function(t) { return arguments.length ? (r = (a = Array.from(t)).length - 1, u()) : a.slice() }, s.invertExtent = function(t) { var i = a.indexOf(t); return i < 0 ? [NaN, NaN] : i < 1 ? [e, o[0]] : i >= r ? [o[r - 1], n] : [o[i - 1], o[i]] }, s.unknown = function(e) { return arguments.length ? (t = e, s) : s }, s.thresholds = function() { return o.slice() }, s.copy = function() { return Y().domain([e, n]).range(a).unknown(t) }, h.b.apply(Object(i.b)(s), arguments) }

            function $() { var t, e = [.5],
                    n = [0, 1],
                    r = 1;

                function i(i) { return null != i && i <= i ? n[Object(W.a)(e, i, 0, r)] : t } return i.domain = function(t) { return arguments.length ? (e = Array.from(t), r = Math.min(e.length, n.length - 1), i) : e.slice() }, i.range = function(t) { return arguments.length ? (n = Array.from(t), r = Math.min(e.length, n.length - 1), i) : n.slice() }, i.invertExtent = function(t) { var r = n.indexOf(t); return [e[r - 1], e[r]] }, i.unknown = function(e) { return arguments.length ? (t = e, i) : t }, i.copy = function() { return $().domain(e).range(n).unknown(t) }, h.b.apply(i, arguments) } var J = n(1013),
                G = 1e3,
                X = 6e4,
                Q = 36e5,
                Z = 864e5,
                K = 6048e5,
                tt = 2592e6,
                et = 31536e6,
                nt = new Date,
                rt = new Date;

            function it(t, e, n, r) {
                function i(e) { return t(e = 0 === arguments.length ? new Date : new Date(+e)), e } return i.floor = function(e) { return t(e = new Date(+e)), e }, i.ceil = function(n) { return t(n = new Date(n - 1)), e(n, 1), t(n), n }, i.round = function(t) { var e = i(t),
                        n = i.ceil(t); return t - e < n - t ? e : n }, i.offset = function(t, n) { return e(t = new Date(+t), null == n ? 1 : Math.floor(n)), t }, i.range = function(n, r, o) { var a, s = []; if (n = i.ceil(n), o = null == o ? 1 : Math.floor(o), !(n < r) || !(o > 0)) return s;
                    do { s.push(a = new Date(+n)), e(n, o), t(n) } while (a < n && n < r); return s }, i.filter = function(n) { return it((function(e) { if (e >= e)
                            for (; t(e), !n(e);) e.setTime(e - 1) }), (function(t, r) { if (t >= t)
                            if (r < 0)
                                for (; ++r <= 0;)
                                    for (; e(t, -1), !n(t););
                            else
                                for (; --r >= 0;)
                                    for (; e(t, 1), !n(t);); })) }, n && (i.count = function(e, r) { return nt.setTime(+e), rt.setTime(+r), t(nt), t(rt), Math.floor(n(nt, rt)) }, i.every = function(t) { return t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? i.filter(r ? function(e) { return r(e) % t === 0 } : function(e) { return i.count(0, e) % t === 0 }) : i : null }), i } var ot = it((function() {}), (function(t, e) { t.setTime(+t + e) }), (function(t, e) { return e - t }));
            ot.every = function(t) { return t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? it((function(e) { e.setTime(Math.floor(e / t) * t) }), (function(e, n) { e.setTime(+e + n * t) }), (function(e, n) { return (n - e) / t })) : ot : null }; var at = ot,
                st = (ot.range, it((function(t) { t.setTime(t - t.getMilliseconds()) }), (function(t, e) { t.setTime(+t + e * G) }), (function(t, e) { return (e - t) / G }), (function(t) { return t.getUTCSeconds() }))),
                ut = st,
                ct = (st.range, it((function(t) { t.setTime(t - t.getMilliseconds() - t.getSeconds() * G) }), (function(t, e) { t.setTime(+t + e * X) }), (function(t, e) { return (e - t) / X }), (function(t) { return t.getMinutes() }))),
                lt = ct,
                ht = (ct.range, it((function(t) { t.setTime(t - t.getMilliseconds() - t.getSeconds() * G - t.getMinutes() * X) }), (function(t, e) { t.setTime(+t + e * Q) }), (function(t, e) { return (e - t) / Q }), (function(t) { return t.getHours() }))),
                ft = ht,
                pt = (ht.range, it((function(t) { return t.setHours(0, 0, 0, 0) }), (function(t, e) { return t.setDate(t.getDate() + e) }), (function(t, e) { return (e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * X) / Z }), (function(t) { return t.getDate() - 1 }))),
                dt = pt;
            pt.range;

            function yt(t) { return it((function(e) { e.setDate(e.getDate() - (e.getDay() + 7 - t) % 7), e.setHours(0, 0, 0, 0) }), (function(t, e) { t.setDate(t.getDate() + 7 * e) }), (function(t, e) { return (e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * X) / K })) } var vt = yt(0),
                gt = yt(1),
                bt = yt(2),
                mt = yt(3),
                xt = yt(4),
                wt = yt(5),
                Ot = yt(6),
                _t = (vt.range, gt.range, bt.range, mt.range, xt.range, wt.range, Ot.range, it((function(t) { t.setDate(1), t.setHours(0, 0, 0, 0) }), (function(t, e) { t.setMonth(t.getMonth() + e) }), (function(t, e) { return e.getMonth() - t.getMonth() + 12 * (e.getFullYear() - t.getFullYear()) }), (function(t) { return t.getMonth() }))),
                Mt = _t,
                jt = (_t.range, it((function(t) { t.setMonth(0, 1), t.setHours(0, 0, 0, 0) }), (function(t, e) { t.setFullYear(t.getFullYear() + e) }), (function(t, e) { return e.getFullYear() - t.getFullYear() }), (function(t) { return t.getFullYear() })));
            jt.every = function(t) { return isFinite(t = Math.floor(t)) && t > 0 ? it((function(e) { e.setFullYear(Math.floor(e.getFullYear() / t) * t), e.setMonth(0, 1), e.setHours(0, 0, 0, 0) }), (function(e, n) { e.setFullYear(e.getFullYear() + n * t) })) : null }; var St = jt,
                Et = (jt.range, it((function(t) { t.setUTCSeconds(0, 0) }), (function(t, e) { t.setTime(+t + e * X) }), (function(t, e) { return (e - t) / X }), (function(t) { return t.getUTCMinutes() }))),
                kt = Et,
                At = (Et.range, it((function(t) { t.setUTCMinutes(0, 0, 0) }), (function(t, e) { t.setTime(+t + e * Q) }), (function(t, e) { return (e - t) / Q }), (function(t) { return t.getUTCHours() }))),
                Pt = At,
                Ct = (At.range, it((function(t) { t.setUTCHours(0, 0, 0, 0) }), (function(t, e) { t.setUTCDate(t.getUTCDate() + e) }), (function(t, e) { return (e - t) / Z }), (function(t) { return t.getUTCDate() - 1 }))),
                Tt = Ct;
            Ct.range;

            function It(t) { return it((function(e) { e.setUTCDate(e.getUTCDate() - (e.getUTCDay() + 7 - t) % 7), e.setUTCHours(0, 0, 0, 0) }), (function(t, e) { t.setUTCDate(t.getUTCDate() + 7 * e) }), (function(t, e) { return (e - t) / K })) } var Nt = It(0),
                Dt = It(1),
                Rt = It(2),
                Lt = It(3),
                Bt = It(4),
                Ft = It(5),
                zt = It(6),
                Vt = (Nt.range, Dt.range, Rt.range, Lt.range, Bt.range, Ft.range, zt.range, it((function(t) { t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0) }), (function(t, e) { t.setUTCMonth(t.getUTCMonth() + e) }), (function(t, e) { return e.getUTCMonth() - t.getUTCMonth() + 12 * (e.getUTCFullYear() - t.getUTCFullYear()) }), (function(t) { return t.getUTCMonth() }))),
                Ut = Vt,
                Wt = (Vt.range, it((function(t) { t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0) }), (function(t, e) { t.setUTCFullYear(t.getUTCFullYear() + e) }), (function(t, e) { return e.getUTCFullYear() - t.getUTCFullYear() }), (function(t) { return t.getUTCFullYear() })));
            Wt.every = function(t) { return isFinite(t = Math.floor(t)) && t > 0 ? it((function(e) { e.setUTCFullYear(Math.floor(e.getUTCFullYear() / t) * t), e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0) }), (function(e, n) { e.setUTCFullYear(e.getUTCFullYear() + n * t) })) : null }; var Ht = Wt;
            Wt.range;

            function qt(t, e, n, r, i, o) { var a = [
                    [ut, 1, G],
                    [ut, 5, 5e3],
                    [ut, 15, 15e3],
                    [ut, 30, 3e4],
                    [o, 1, X],
                    [o, 5, 3e5],
                    [o, 15, 9e5],
                    [o, 30, 18e5],
                    [i, 1, Q],
                    [i, 3, 108e5],
                    [i, 6, 216e5],
                    [i, 12, 432e5],
                    [r, 1, Z],
                    [r, 2, 1728e5],
                    [n, 1, K],
                    [e, 1, tt],
                    [e, 3, 7776e6],
                    [t, 1, et]
                ];

                function u(e, n, r) { var i = Math.abs(n - e) / r,
                        o = Object(J.a)((function(t) { return Object(q.a)(t, 3)[2] })).right(a, i); if (o === a.length) return t.every(Object(s.c)(e / et, n / et, r)); if (0 === o) return at.every(Math.max(Object(s.c)(e, n, r), 1)); var u = Object(q.a)(a[i / a[o - 1][2] < a[o][2] / i ? o - 1 : o], 2),
                        c = u[0],
                        l = u[1]; return c.every(l) } return [function(t, e, n) { var r = e < t; if (r) { var i = [e, t];
                        t = i[0], e = i[1] } var o = n && "function" === typeof n.range ? n : u(t, e, n),
                        a = o ? o.range(t, +e + 1) : []; return r ? a.reverse() : a }, u] } var Yt = qt(Ht, Ut, Nt, Tt, Pt, kt),
                $t = Object(q.a)(Yt, 2),
                Jt = $t[0],
                Gt = $t[1],
                Xt = qt(St, Mt, vt, dt, ft, lt),
                Qt = Object(q.a)(Xt, 2),
                Zt = Qt[0],
                Kt = Qt[1];

            function te(t) { if (0 <= t.y && t.y < 100) { var e = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L); return e.setFullYear(t.y), e } return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L) }

            function ee(t) { if (0 <= t.y && t.y < 100) { var e = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L)); return e.setUTCFullYear(t.y), e } return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L)) }

            function ne(t, e, n) { return { y: t, m: e, d: n, H: 0, M: 0, S: 0, L: 0 } } var re, ie, oe, ae = { "-": "", _: " ", 0: "0" },
                se = /^\s*\d+/,
                ue = /^%/,
                ce = /[\\^$*+?|[\]().{}]/g;

            function le(t, e, n) { var r = t < 0 ? "-" : "",
                    i = (r ? -t : t) + "",
                    o = i.length; return r + (o < n ? new Array(n - o + 1).join(e) + i : i) }

            function he(t) { return t.replace(ce, "\\$&") }

            function fe(t) { return new RegExp("^(?:" + t.map(he).join("|") + ")", "i") }

            function pe(t) { return new Map(t.map((function(t, e) { return [t.toLowerCase(), e] }))) }

            function de(t, e, n) { var r = se.exec(e.slice(n, n + 1)); return r ? (t.w = +r[0], n + r[0].length) : -1 }

            function ye(t, e, n) { var r = se.exec(e.slice(n, n + 1)); return r ? (t.u = +r[0], n + r[0].length) : -1 }

            function ve(t, e, n) { var r = se.exec(e.slice(n, n + 2)); return r ? (t.U = +r[0], n + r[0].length) : -1 }

            function ge(t, e, n) { var r = se.exec(e.slice(n, n + 2)); return r ? (t.V = +r[0], n + r[0].length) : -1 }

            function be(t, e, n) { var r = se.exec(e.slice(n, n + 2)); return r ? (t.W = +r[0], n + r[0].length) : -1 }

            function me(t, e, n) { var r = se.exec(e.slice(n, n + 4)); return r ? (t.y = +r[0], n + r[0].length) : -1 }

            function xe(t, e, n) { var r = se.exec(e.slice(n, n + 2)); return r ? (t.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), n + r[0].length) : -1 }

            function we(t, e, n) { var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(e.slice(n, n + 6)); return r ? (t.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), n + r[0].length) : -1 }

            function Oe(t, e, n) { var r = se.exec(e.slice(n, n + 1)); return r ? (t.q = 3 * r[0] - 3, n + r[0].length) : -1 }

            function _e(t, e, n) { var r = se.exec(e.slice(n, n + 2)); return r ? (t.m = r[0] - 1, n + r[0].length) : -1 }

            function Me(t, e, n) { var r = se.exec(e.slice(n, n + 2)); return r ? (t.d = +r[0], n + r[0].length) : -1 }

            function je(t, e, n) { var r = se.exec(e.slice(n, n + 3)); return r ? (t.m = 0, t.d = +r[0], n + r[0].length) : -1 }

            function Se(t, e, n) { var r = se.exec(e.slice(n, n + 2)); return r ? (t.H = +r[0], n + r[0].length) : -1 }

            function Ee(t, e, n) { var r = se.exec(e.slice(n, n + 2)); return r ? (t.M = +r[0], n + r[0].length) : -1 }

            function ke(t, e, n) { var r = se.exec(e.slice(n, n + 2)); return r ? (t.S = +r[0], n + r[0].length) : -1 }

            function Ae(t, e, n) { var r = se.exec(e.slice(n, n + 3)); return r ? (t.L = +r[0], n + r[0].length) : -1 }

            function Pe(t, e, n) { var r = se.exec(e.slice(n, n + 6)); return r ? (t.L = Math.floor(r[0] / 1e3), n + r[0].length) : -1 }

            function Ce(t, e, n) { var r = ue.exec(e.slice(n, n + 1)); return r ? n + r[0].length : -1 }

            function Te(t, e, n) { var r = se.exec(e.slice(n)); return r ? (t.Q = +r[0], n + r[0].length) : -1 }

            function Ie(t, e, n) { var r = se.exec(e.slice(n)); return r ? (t.s = +r[0], n + r[0].length) : -1 }

            function Ne(t, e) { return le(t.getDate(), e, 2) }

            function De(t, e) { return le(t.getHours(), e, 2) }

            function Re(t, e) { return le(t.getHours() % 12 || 12, e, 2) }

            function Le(t, e) { return le(1 + dt.count(St(t), t), e, 3) }

            function Be(t, e) { return le(t.getMilliseconds(), e, 3) }

            function Fe(t, e) { return Be(t, e) + "000" }

            function ze(t, e) { return le(t.getMonth() + 1, e, 2) }

            function Ve(t, e) { return le(t.getMinutes(), e, 2) }

            function Ue(t, e) { return le(t.getSeconds(), e, 2) }

            function We(t) { var e = t.getDay(); return 0 === e ? 7 : e }

            function He(t, e) { return le(vt.count(St(t) - 1, t), e, 2) }

            function qe(t) { var e = t.getDay(); return e >= 4 || 0 === e ? xt(t) : xt.ceil(t) }

            function Ye(t, e) { return t = qe(t), le(xt.count(St(t), t) + (4 === St(t).getDay()), e, 2) }

            function $e(t) { return t.getDay() }

            function Je(t, e) { return le(gt.count(St(t) - 1, t), e, 2) }

            function Ge(t, e) { return le(t.getFullYear() % 100, e, 2) }

            function Xe(t, e) { return le((t = qe(t)).getFullYear() % 100, e, 2) }

            function Qe(t, e) { return le(t.getFullYear() % 1e4, e, 4) }

            function Ze(t, e) { var n = t.getDay(); return le((t = n >= 4 || 0 === n ? xt(t) : xt.ceil(t)).getFullYear() % 1e4, e, 4) }

            function Ke(t) { var e = t.getTimezoneOffset(); return (e > 0 ? "-" : (e *= -1, "+")) + le(e / 60 | 0, "0", 2) + le(e % 60, "0", 2) }

            function tn(t, e) { return le(t.getUTCDate(), e, 2) }

            function en(t, e) { return le(t.getUTCHours(), e, 2) }

            function nn(t, e) { return le(t.getUTCHours() % 12 || 12, e, 2) }

            function rn(t, e) { return le(1 + Tt.count(Ht(t), t), e, 3) }

            function on(t, e) { return le(t.getUTCMilliseconds(), e, 3) }

            function an(t, e) { return on(t, e) + "000" }

            function sn(t, e) { return le(t.getUTCMonth() + 1, e, 2) }

            function un(t, e) { return le(t.getUTCMinutes(), e, 2) }

            function cn(t, e) { return le(t.getUTCSeconds(), e, 2) }

            function ln(t) { var e = t.getUTCDay(); return 0 === e ? 7 : e }

            function hn(t, e) { return le(Nt.count(Ht(t) - 1, t), e, 2) }

            function fn(t) { var e = t.getUTCDay(); return e >= 4 || 0 === e ? Bt(t) : Bt.ceil(t) }

            function pn(t, e) { return t = fn(t), le(Bt.count(Ht(t), t) + (4 === Ht(t).getUTCDay()), e, 2) }

            function dn(t) { return t.getUTCDay() }

            function yn(t, e) { return le(Dt.count(Ht(t) - 1, t), e, 2) }

            function vn(t, e) { return le(t.getUTCFullYear() % 100, e, 2) }

            function gn(t, e) { return le((t = fn(t)).getUTCFullYear() % 100, e, 2) }

            function bn(t, e) { return le(t.getUTCFullYear() % 1e4, e, 4) }

            function mn(t, e) { var n = t.getUTCDay(); return le((t = n >= 4 || 0 === n ? Bt(t) : Bt.ceil(t)).getUTCFullYear() % 1e4, e, 4) }

            function xn() { return "+0000" }

            function wn() { return "%" }

            function On(t) { return +t }

            function _n(t) { return Math.floor(+t / 1e3) }

            function Mn(t) { return new Date(t) }

            function jn(t) { return t instanceof Date ? +t : +new Date(+t) }

            function Sn(t, e, n, r, i, o, a, s, u, h) { var f = Object(l.b)(),
                    p = f.invert,
                    d = f.domain,
                    y = h(".%L"),
                    v = h(":%S"),
                    g = h("%I:%M"),
                    b = h("%I %p"),
                    m = h("%a %d"),
                    x = h("%b %d"),
                    w = h("%B"),
                    O = h("%Y");

                function _(t) { return (u(t) < t ? y : s(t) < t ? v : a(t) < t ? g : o(t) < t ? b : r(t) < t ? i(t) < t ? m : x : n(t) < t ? w : O)(t) } return f.invert = function(t) { return new Date(p(t)) }, f.domain = function(t) { return arguments.length ? d(Array.from(t, jn)) : d().map(Mn) }, f.ticks = function(e) { var n = d(); return t(n[0], n[n.length - 1], null == e ? 10 : e) }, f.tickFormat = function(t, e) { return null == e ? _ : h(e) }, f.nice = function(t) { var n = d(); return t && "function" === typeof t.range || (t = e(n[0], n[n.length - 1], null == t ? 10 : t)), t ? d(c(n, t)) : f }, f.copy = function() { return Object(l.a)(f, Sn(t, e, n, r, i, o, a, s, u, h)) }, f }

            function En() { return h.b.apply(Sn(Zt, Kt, St, Mt, vt, dt, ft, lt, ut, ie).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments) }

            function kn() { return h.b.apply(Sn(Jt, Gt, Ht, Ut, Nt, Tt, Pt, kt, ut, oe).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments) }
            re = function(t) { var e = t.dateTime,
                    n = t.date,
                    r = t.time,
                    i = t.periods,
                    o = t.days,
                    a = t.shortDays,
                    s = t.months,
                    u = t.shortMonths,
                    c = fe(i),
                    l = pe(i),
                    h = fe(o),
                    f = pe(o),
                    p = fe(a),
                    d = pe(a),
                    y = fe(s),
                    v = pe(s),
                    g = fe(u),
                    b = pe(u),
                    m = { a: function(t) { return a[t.getDay()] }, A: function(t) { return o[t.getDay()] }, b: function(t) { return u[t.getMonth()] }, B: function(t) { return s[t.getMonth()] }, c: null, d: Ne, e: Ne, f: Fe, g: Xe, G: Ze, H: De, I: Re, j: Le, L: Be, m: ze, M: Ve, p: function(t) { return i[+(t.getHours() >= 12)] }, q: function(t) { return 1 + ~~(t.getMonth() / 3) }, Q: On, s: _n, S: Ue, u: We, U: He, V: Ye, w: $e, W: Je, x: null, X: null, y: Ge, Y: Qe, Z: Ke, "%": wn },
                    x = { a: function(t) { return a[t.getUTCDay()] }, A: function(t) { return o[t.getUTCDay()] }, b: function(t) { return u[t.getUTCMonth()] }, B: function(t) { return s[t.getUTCMonth()] }, c: null, d: tn, e: tn, f: an, g: gn, G: mn, H: en, I: nn, j: rn, L: on, m: sn, M: un, p: function(t) { return i[+(t.getUTCHours() >= 12)] }, q: function(t) { return 1 + ~~(t.getUTCMonth() / 3) }, Q: On, s: _n, S: cn, u: ln, U: hn, V: pn, w: dn, W: yn, x: null, X: null, y: vn, Y: bn, Z: xn, "%": wn },
                    w = { a: function(t, e, n) { var r = p.exec(e.slice(n)); return r ? (t.w = d.get(r[0].toLowerCase()), n + r[0].length) : -1 }, A: function(t, e, n) { var r = h.exec(e.slice(n)); return r ? (t.w = f.get(r[0].toLowerCase()), n + r[0].length) : -1 }, b: function(t, e, n) { var r = g.exec(e.slice(n)); return r ? (t.m = b.get(r[0].toLowerCase()), n + r[0].length) : -1 }, B: function(t, e, n) { var r = y.exec(e.slice(n)); return r ? (t.m = v.get(r[0].toLowerCase()), n + r[0].length) : -1 }, c: function(t, n, r) { return M(t, e, n, r) }, d: Me, e: Me, f: Pe, g: xe, G: me, H: Se, I: Se, j: je, L: Ae, m: _e, M: Ee, p: function(t, e, n) { var r = c.exec(e.slice(n)); return r ? (t.p = l.get(r[0].toLowerCase()), n + r[0].length) : -1 }, q: Oe, Q: Te, s: Ie, S: ke, u: ye, U: ve, V: ge, w: de, W: be, x: function(t, e, r) { return M(t, n, e, r) }, X: function(t, e, n) { return M(t, r, e, n) }, y: xe, Y: me, Z: we, "%": Ce };

                function O(t, e) { return function(n) { var r, i, o, a = [],
                            s = -1,
                            u = 0,
                            c = t.length; for (n instanceof Date || (n = new Date(+n)); ++s < c;) 37 === t.charCodeAt(s) && (a.push(t.slice(u, s)), null != (i = ae[r = t.charAt(++s)]) ? r = t.charAt(++s) : i = "e" === r ? " " : "0", (o = e[r]) && (r = o(n, i)), a.push(r), u = s + 1); return a.push(t.slice(u, s)), a.join("") } }

                function _(t, e) { return function(n) { var r, i, o = ne(1900, void 0, 1); if (M(o, t, n += "", 0) != n.length) return null; if ("Q" in o) return new Date(o.Q); if ("s" in o) return new Date(1e3 * o.s + ("L" in o ? o.L : 0)); if (e && !("Z" in o) && (o.Z = 0), "p" in o && (o.H = o.H % 12 + 12 * o.p), void 0 === o.m && (o.m = "q" in o ? o.q : 0), "V" in o) { if (o.V < 1 || o.V > 53) return null; "w" in o || (o.w = 1), "Z" in o ? (i = (r = ee(ne(o.y, 0, 1))).getUTCDay(), r = i > 4 || 0 === i ? Dt.ceil(r) : Dt(r), r = Tt.offset(r, 7 * (o.V - 1)), o.y = r.getUTCFullYear(), o.m = r.getUTCMonth(), o.d = r.getUTCDate() + (o.w + 6) % 7) : (i = (r = te(ne(o.y, 0, 1))).getDay(), r = i > 4 || 0 === i ? gt.ceil(r) : gt(r), r = dt.offset(r, 7 * (o.V - 1)), o.y = r.getFullYear(), o.m = r.getMonth(), o.d = r.getDate() + (o.w + 6) % 7) } else("W" in o || "U" in o) && ("w" in o || (o.w = "u" in o ? o.u % 7 : "W" in o ? 1 : 0), i = "Z" in o ? ee(ne(o.y, 0, 1)).getUTCDay() : te(ne(o.y, 0, 1)).getDay(), o.m = 0, o.d = "W" in o ? (o.w + 6) % 7 + 7 * o.W - (i + 5) % 7 : o.w + 7 * o.U - (i + 6) % 7); return "Z" in o ? (o.H += o.Z / 100 | 0, o.M += o.Z % 100, ee(o)) : te(o) } }

                function M(t, e, n, r) { for (var i, o, a = 0, s = e.length, u = n.length; a < s;) { if (r >= u) return -1; if (37 === (i = e.charCodeAt(a++))) { if (i = e.charAt(a++), !(o = w[i in ae ? e.charAt(a++) : i]) || (r = o(t, n, r)) < 0) return -1 } else if (i != n.charCodeAt(r++)) return -1 } return r } return m.x = O(n, m), m.X = O(r, m), m.c = O(e, m), x.x = O(n, x), x.X = O(r, x), x.c = O(e, x), { format: function(t) { var e = O(t += "", m); return e.toString = function() { return t }, e }, parse: function(t) { var e = _(t += "", !1); return e.toString = function() { return t }, e }, utcFormat: function(t) { var e = O(t += "", x); return e.toString = function() { return t }, e }, utcParse: function(t) { var e = _(t += "", !0); return e.toString = function() { return t }, e } } }({ dateTime: "%x, %X", date: "%-m/%-d/%Y", time: "%-I:%M:%S %p", periods: ["AM", "PM"], days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] }), ie = re.format, re.parse, oe = re.utcFormat, re.utcParse; var An = n(1229),
                Pn = n(1249);

            function Cn() { var t, e, n, r, i, o = 0,
                    a = 1,
                    s = l.c,
                    u = !1;

                function c(e) { return null == e || isNaN(e = +e) ? i : s(0 === n ? .5 : (e = (r(e) - t) * n, u ? Math.max(0, Math.min(1, e)) : e)) }

                function h(t) { return function(e) { var n, r, i, o; return arguments.length ? (n = e, i = (r = Object(q.a)(n, 2))[0], o = r[1], s = t(i, o), c) : [s(0), s(1)] } } return c.domain = function(i) { var s, u; return arguments.length ? (s = i, u = Object(q.a)(s, 2), o = u[0], a = u[1], t = r(o = +o), e = r(a = +a), n = t === e ? 0 : 1 / (e - t), c) : [o, a] }, c.clamp = function(t) { return arguments.length ? (u = !!t, c) : u }, c.interpolator = function(t) { return arguments.length ? (s = t, c) : s }, c.range = h(An.a), c.rangeRound = h(Pn.a), c.unknown = function(t) { return arguments.length ? (i = t, c) : i },
                    function(i) { return r = i, t = i(o), e = i(a), n = t === e ? 0 : 1 / (e - t), c } }

            function Tn(t, e) { return e.domain(t.domain()).interpolator(t.interpolator()).clamp(t.clamp()).unknown(t.unknown()) }

            function In() { var t = Object(i.b)(Cn()(l.c)); return t.copy = function() { return Tn(t, In()) }, h.a.apply(t, arguments) }

            function Nn() { var t = b(Cn()).domain([1, 10]); return t.copy = function() { return Tn(t, Nn()).base(t.base()) }, h.a.apply(t, arguments) }

            function Dn() { var t = O(Cn()); return t.copy = function() { return Tn(t, Dn()).constant(t.constant()) }, h.a.apply(t, arguments) }

            function Rn() { var t = k(Cn()); return t.copy = function() { return Tn(t, Rn()).exponent(t.exponent()) }, h.a.apply(t, arguments) }

            function Ln() { return Rn.apply(null, arguments).exponent(.5) }

            function Bn() { var t = [],
                    e = l.c;

                function n(n) { if (null != n && !isNaN(n = +n)) return e((Object(W.a)(t, n, 1) - 1) / (t.length - 1)) } return n.domain = function(e) { if (!arguments.length) return t.slice();
                    t = []; var r, i = Object(N.a)(e); try { for (i.s(); !(r = i.n()).done;) { var o = r.value;
                            null == o || isNaN(o = +o) || t.push(o) } } catch (a) { i.e(a) } finally { i.f() } return t.sort(L.a), n }, n.interpolator = function(t) { return arguments.length ? (e = t, n) : e }, n.range = function() { return t.map((function(n, r) { return e(r / (t.length - 1)) })) }, n.quantiles = function(e) { return Array.from({ length: e + 1 }, (function(n, r) { return V(t, r / e) })) }, n.copy = function() { return Bn(e).domain(t) }, h.a.apply(n, arguments) }

            function Fn(t, e) { void 0 === e && (e = t, t = An.a); for (var n = 0, r = e.length - 1, i = e[0], o = new Array(r < 0 ? 0 : r); n < r;) o[n] = t(i, i = e[++n]); return function(t) { var e = Math.max(0, Math.min(r - 1, Math.floor(t *= r))); return o[e](t - e) } }

            function zn() { var t, e, n, r, i, o, a, s = 0,
                    u = .5,
                    c = 1,
                    h = 1,
                    f = l.c,
                    p = !1;

                function d(t) { return isNaN(t = +t) ? a : (t = .5 + ((t = +o(t)) - e) * (h * t < h * e ? r : i), f(p ? Math.max(0, Math.min(1, t)) : t)) }

                function y(t) { return function(e) { var n, r, i, o, a; return arguments.length ? (n = e, i = (r = Object(q.a)(n, 3))[0], o = r[1], a = r[2], f = Fn(t, [i, o, a]), d) : [f(0), f(.5), f(1)] } } return d.domain = function(a) { var l, f; return arguments.length ? (l = a, f = Object(q.a)(l, 3), s = f[0], u = f[1], c = f[2], t = o(s = +s), e = o(u = +u), n = o(c = +c), r = t === e ? 0 : .5 / (e - t), i = e === n ? 0 : .5 / (n - e), h = e < t ? -1 : 1, d) : [s, u, c] }, d.clamp = function(t) { return arguments.length ? (p = !!t, d) : p }, d.interpolator = function(t) { return arguments.length ? (f = t, d) : f }, d.range = y(An.a), d.rangeRound = y(Pn.a), d.unknown = function(t) { return arguments.length ? (a = t, d) : a },
                    function(a) { return o = a, t = a(s), e = a(u), n = a(c), r = t === e ? 0 : .5 / (e - t), i = e === n ? 0 : .5 / (n - e), h = e < t ? -1 : 1, d } }

            function Vn() { var t = Object(i.b)(zn()(l.c)); return t.copy = function() { return Tn(t, Vn()) }, h.a.apply(t, arguments) }

            function Un() { var t = b(zn()).domain([.1, 1, 10]); return t.copy = function() { return Tn(t, Un()).base(t.base()) }, h.a.apply(t, arguments) }

            function Wn() { var t = O(zn()); return t.copy = function() { return Tn(t, Wn()).constant(t.constant()) }, h.a.apply(t, arguments) }

            function Hn() { var t = k(zn()); return t.copy = function() { return Tn(t, Hn()).exponent(t.exponent()) }, h.a.apply(t, arguments) }

            function qn() { return Hn.apply(null, arguments).exponent(.5) } var Yn = n(880) }, 975: function(t, e, n) { "use strict";
            n.d(e, "a", (function() { return et })); var r = n(99),
                i = n.n(r),
                o = n(841),
                a = n.n(o),
                s = n(310),
                u = n.n(s),
                c = n(1),
                l = n.n(c),
                h = function() {};

            function f(t, e, n) { t._context.bezierCurveTo((2 * t._x0 + t._x1) / 3, (2 * t._y0 + t._y1) / 3, (t._x0 + 2 * t._x1) / 3, (t._y0 + 2 * t._y1) / 3, (t._x0 + 4 * t._x1 + e) / 6, (t._y0 + 4 * t._y1 + n) / 6) }

            function p(t) { this._context = t }
            p.prototype = { areaStart: function() { this._line = 0 }, areaEnd: function() { this._line = NaN }, lineStart: function() { this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0 }, lineEnd: function() { switch (this._point) {
                        case 3:
                            f(this, this._x1, this._y1);
                        case 2:
                            this._context.lineTo(this._x1, this._y1) }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line }, point: function(t, e) { switch (t = +t, e = +e, this._point) {
                        case 0:
                            this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e); break;
                        case 1:
                            this._point = 2; break;
                        case 2:
                            this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
                        default:
                            f(this, t, e) }
                    this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = e } };

            function d(t) { this._context = t }
            d.prototype = { areaStart: h, areaEnd: h, lineStart: function() { this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0 }, lineEnd: function() { switch (this._point) {
                        case 1:
                            this._context.moveTo(this._x2, this._y2), this._context.closePath(); break;
                        case 2:
                            this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath(); break;
                        case 3:
                            this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4) } }, point: function(t, e) { switch (t = +t, e = +e, this._point) {
                        case 0:
                            this._point = 1, this._x2 = t, this._y2 = e; break;
                        case 1:
                            this._point = 2, this._x3 = t, this._y3 = e; break;
                        case 2:
                            this._point = 3, this._x4 = t, this._y4 = e, this._context.moveTo((this._x0 + 4 * this._x1 + t) / 6, (this._y0 + 4 * this._y1 + e) / 6); break;
                        default:
                            f(this, t, e) }
                    this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = e } };

            function y(t) { this._context = t }
            y.prototype = { areaStart: function() { this._line = 0 }, areaEnd: function() { this._line = NaN }, lineStart: function() { this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0 }, lineEnd: function() {
                    (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line }, point: function(t, e) { switch (t = +t, e = +e, this._point) {
                        case 0:
                            this._point = 1; break;
                        case 1:
                            this._point = 2; break;
                        case 2:
                            this._point = 3; var n = (this._x0 + 4 * this._x1 + t) / 6,
                                r = (this._y0 + 4 * this._y1 + e) / 6;
                            this._line ? this._context.lineTo(n, r) : this._context.moveTo(n, r); break;
                        case 3:
                            this._point = 4;
                        default:
                            f(this, t, e) }
                    this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = e } };

            function v(t) { this._context = t }
            v.prototype = { areaStart: h, areaEnd: h, lineStart: function() { this._point = 0 }, lineEnd: function() { this._point && this._context.closePath() }, point: function(t, e) { t = +t, e = +e, this._point ? this._context.lineTo(t, e) : (this._point = 1, this._context.moveTo(t, e)) } };

            function g(t) { this._context = t }
            g.prototype = { areaStart: function() { this._line = 0 }, areaEnd: function() { this._line = NaN }, lineStart: function() { this._point = 0 }, lineEnd: function() {
                    (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line }, point: function(t, e) { switch (t = +t, e = +e, this._point) {
                        case 0:
                            this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e); break;
                        case 1:
                            this._point = 2;
                        default:
                            this._context.lineTo(t, e) } } }; var b = function(t) { return new g(t) };

            function m(t) { return t < 0 ? -1 : 1 }

            function x(t, e, n) { var r = t._x1 - t._x0,
                    i = e - t._x1,
                    o = (t._y1 - t._y0) / (r || i < 0 && -0),
                    a = (n - t._y1) / (i || r < 0 && -0),
                    s = (o * i + a * r) / (r + i); return (m(o) + m(a)) * Math.min(Math.abs(o), Math.abs(a), .5 * Math.abs(s)) || 0 }

            function w(t, e) { var n = t._x1 - t._x0; return n ? (3 * (t._y1 - t._y0) / n - e) / 2 : e }

            function O(t, e, n) { var r = t._x0,
                    i = t._y0,
                    o = t._x1,
                    a = t._y1,
                    s = (o - r) / 3;
                t._context.bezierCurveTo(r + s, i + s * e, o - s, a - s * n, o, a) }

            function _(t) { this._context = t }

            function M(t) { this._context = new j(t) }

            function j(t) { this._context = t }

            function S(t) { this._context = t }

            function E(t) { var e, n, r = t.length - 1,
                    i = new Array(r),
                    o = new Array(r),
                    a = new Array(r); for (i[0] = 0, o[0] = 2, a[0] = t[0] + 2 * t[1], e = 1; e < r - 1; ++e) i[e] = 1, o[e] = 4, a[e] = 4 * t[e] + 2 * t[e + 1]; for (i[r - 1] = 2, o[r - 1] = 7, a[r - 1] = 8 * t[r - 1] + t[r], e = 1; e < r; ++e) n = i[e] / o[e - 1], o[e] -= n, a[e] -= n * a[e - 1]; for (i[r - 1] = a[r - 1] / o[r - 1], e = r - 2; e >= 0; --e) i[e] = (a[e] - i[e + 1]) / o[e]; for (o[r - 1] = (t[r] + i[r - 1]) / 2, e = 0; e < r - 1; ++e) o[e] = 2 * t[e + 1] - i[e + 1]; return [i, o] }
            _.prototype = { areaStart: function() { this._line = 0 }, areaEnd: function() { this._line = NaN }, lineStart: function() { this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0 }, lineEnd: function() { switch (this._point) {
                        case 2:
                            this._context.lineTo(this._x1, this._y1); break;
                        case 3:
                            O(this, this._t0, w(this, this._t0)) }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line }, point: function(t, e) { var n = NaN; if (e = +e, (t = +t) !== this._x1 || e !== this._y1) { switch (this._point) {
                            case 0:
                                this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e); break;
                            case 1:
                                this._point = 2; break;
                            case 2:
                                this._point = 3, O(this, w(this, n = x(this, t, e)), n); break;
                            default:
                                O(this, this._t0, n = x(this, t, e)) }
                        this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = e, this._t0 = n } } }, (M.prototype = Object.create(_.prototype)).point = function(t, e) { _.prototype.point.call(this, e, t) }, j.prototype = { moveTo: function(t, e) { this._context.moveTo(e, t) }, closePath: function() { this._context.closePath() }, lineTo: function(t, e) { this._context.lineTo(e, t) }, bezierCurveTo: function(t, e, n, r, i, o) { this._context.bezierCurveTo(e, t, r, n, o, i) } }, S.prototype = { areaStart: function() { this._line = 0 }, areaEnd: function() { this._line = NaN }, lineStart: function() { this._x = [], this._y = [] }, lineEnd: function() { var t = this._x,
                        e = this._y,
                        n = t.length; if (n)
                        if (this._line ? this._context.lineTo(t[0], e[0]) : this._context.moveTo(t[0], e[0]), 2 === n) this._context.lineTo(t[1], e[1]);
                        else
                            for (var r = E(t), i = E(e), o = 0, a = 1; a < n; ++o, ++a) this._context.bezierCurveTo(r[0][o], i[0][o], r[1][o], i[1][o], t[a], e[a]);
                        (this._line || 0 !== this._line && 1 === n) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null }, point: function(t, e) { this._x.push(+t), this._y.push(+e) } };

            function k(t, e) { this._context = t, this._t = e }
            k.prototype = { areaStart: function() { this._line = 0 }, areaEnd: function() { this._line = NaN }, lineStart: function() { this._x = this._y = NaN, this._point = 0 }, lineEnd: function() { 0 < this._t && this._t < 1 && 2 === this._point && this._context.lineTo(this._x, this._y), (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line) }, point: function(t, e) { switch (t = +t, e = +e, this._point) {
                        case 0:
                            this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e); break;
                        case 1:
                            this._point = 2;
                        default:
                            if (this._t <= 0) this._context.lineTo(this._x, e), this._context.lineTo(t, e);
                            else { var n = this._x * (1 - this._t) + t * this._t;
                                this._context.lineTo(n, this._y), this._context.lineTo(n, e) } }
                    this._x = t, this._y = e } }; var A = n(1246),
                P = n(845),
                C = n(819);

            function T(t) { return t[0] }

            function I(t) { return t[1] } var N = function(t, e) { var n = Object(C.a)(!0),
                        r = null,
                        i = b,
                        o = null;

                    function a(a) { var s, u, c, l = (a = Object(P.a)(a)).length,
                            h = !1; for (null == r && (o = i(c = Object(A.a)())), s = 0; s <= l; ++s) !(s < l && n(u = a[s], s, a)) === h && ((h = !h) ? o.lineStart() : o.lineEnd()), h && o.point(+t(u, s, a), +e(u, s, a)); if (c) return o = null, c + "" || null } return t = "function" === typeof t ? t : void 0 === t ? T : Object(C.a)(t), e = "function" === typeof e ? e : void 0 === e ? I : Object(C.a)(e), a.x = function(e) { return arguments.length ? (t = "function" === typeof e ? e : Object(C.a)(+e), a) : t }, a.y = function(t) { return arguments.length ? (e = "function" === typeof t ? t : Object(C.a)(+t), a) : e }, a.defined = function(t) { return arguments.length ? (n = "function" === typeof t ? t : Object(C.a)(!!t), a) : n }, a.curve = function(t) { return arguments.length ? (i = t, null != r && (o = i(r)), a) : i }, a.context = function(t) { return arguments.length ? (null == t ? r = o = null : o = i(r = t), a) : r }, a },
                D = function(t, e, n) { var r = null,
                        i = Object(C.a)(!0),
                        o = null,
                        a = b,
                        s = null;

                    function u(u) { var c, l, h, f, p, d = (u = Object(P.a)(u)).length,
                            y = !1,
                            v = new Array(d),
                            g = new Array(d); for (null == o && (s = a(p = Object(A.a)())), c = 0; c <= d; ++c) { if (!(c < d && i(f = u[c], c, u)) === y)
                                if (y = !y) l = c, s.areaStart(), s.lineStart();
                                else { for (s.lineEnd(), s.lineStart(), h = c - 1; h >= l; --h) s.point(v[h], g[h]);
                                    s.lineEnd(), s.areaEnd() }
                            y && (v[c] = +t(f, c, u), g[c] = +e(f, c, u), s.point(r ? +r(f, c, u) : v[c], n ? +n(f, c, u) : g[c])) } if (p) return s = null, p + "" || null }

                    function c() { return N().defined(i).curve(a).context(o) } return t = "function" === typeof t ? t : void 0 === t ? T : Object(C.a)(+t), e = "function" === typeof e ? e : void 0 === e ? Object(C.a)(0) : Object(C.a)(+e), n = "function" === typeof n ? n : void 0 === n ? I : Object(C.a)(+n), u.x = function(e) { return arguments.length ? (t = "function" === typeof e ? e : Object(C.a)(+e), r = null, u) : t }, u.x0 = function(e) { return arguments.length ? (t = "function" === typeof e ? e : Object(C.a)(+e), u) : t }, u.x1 = function(t) { return arguments.length ? (r = null == t ? null : "function" === typeof t ? t : Object(C.a)(+t), u) : r }, u.y = function(t) { return arguments.length ? (e = "function" === typeof t ? t : Object(C.a)(+t), n = null, u) : e }, u.y0 = function(t) { return arguments.length ? (e = "function" === typeof t ? t : Object(C.a)(+t), u) : e }, u.y1 = function(t) { return arguments.length ? (n = null == t ? null : "function" === typeof t ? t : Object(C.a)(+t), u) : n }, u.lineX0 = u.lineY0 = function() { return c().x(t).y(e) }, u.lineY1 = function() { return c().x(t).y(n) }, u.lineX1 = function() { return c().x(r).y(e) }, u.defined = function(t) { return arguments.length ? (i = "function" === typeof t ? t : Object(C.a)(!!t), u) : i }, u.curve = function(t) { return arguments.length ? (a = t, null != o && (s = a(o)), u) : a }, u.context = function(t) { return arguments.length ? (null == t ? o = s = null : s = a(o = t), u) : o }, u },
                R = n(477),
                L = n.n(R),
                B = n(773),
                F = n(772);

            function z(t) { return (z = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t })(t) }

            function V() { return (V = Object.assign || function(t) { for (var e = 1; e < arguments.length; e++) { var n = arguments[e]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]) } return t }).apply(this, arguments) }

            function U(t, e) { var n = Object.keys(t); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), n.push.apply(n, r) } return n }

            function W(t) { for (var e = 1; e < arguments.length; e++) { var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? U(Object(n), !0).forEach((function(e) { H(t, e, n[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : U(Object(n)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })) } return t }

            function H(t, e, n) { return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t }

            function q(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

            function Y(t, e) { for (var n = 0; n < e.length; n++) { var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r) } }

            function $(t, e) { return ($ = Object.setPrototypeOf || function(t, e) { return t.__proto__ = e, t })(t, e) }

            function J(t) { var e = function() { if ("undefined" === typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" === typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = X(t); if (e) { var i = X(this).constructor;
                        n = Reflect.construct(r, arguments, i) } else n = r.apply(this, arguments); return G(this, n) } }

            function G(t, e) { return !e || "object" !== z(e) && "function" !== typeof e ? function(t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t }(t) : e }

            function X(t) { return (X = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) { return t.__proto__ || Object.getPrototypeOf(t) })(t) } var Q = { curveBasisClosed: function(t) { return new d(t) }, curveBasisOpen: function(t) { return new y(t) }, curveBasis: function(t) { return new p(t) }, curveLinearClosed: function(t) { return new v(t) }, curveLinear: b, curveMonotoneX: function(t) { return new _(t) }, curveMonotoneY: function(t) { return new M(t) }, curveNatural: function(t) { return new S(t) }, curveStep: function(t) { return new k(t, .5) }, curveStepAfter: function(t) { return new k(t, 1) }, curveStepBefore: function(t) { return new k(t, 0) } },
                Z = function(t) { return t.x === +t.x && t.y === +t.y },
                K = function(t) { return t.x },
                tt = function(t) { return t.y },
                et = function(t) {! function(t, e) { if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), e && $(t, e) }(s, t); var e, n, r, o = J(s);

                    function s() { return q(this, s), o.apply(this, arguments) } return e = s, (n = [{ key: "getPath", value: function() { var t, e = this.props,
                                n = e.type,
                                r = e.points,
                                o = e.baseLine,
                                s = e.layout,
                                c = e.connectNulls,
                                l = function(t, e) { if (u()(t)) return t; var n = "curve".concat(a()(t)); return "curveMonotone" === n && e ? Q["".concat(n).concat("vertical" === e ? "Y" : "X")] : Q[n] || b }(n, s),
                                h = c ? r.filter((function(t) { return Z(t) })) : r; if (i()(o)) { var f = c ? o.filter((function(t) { return Z(t) })) : o,
                                    p = h.map((function(t, e) { return W(W({}, t), {}, { base: f[e] }) })); return (t = "vertical" === s ? D().y(tt).x1(K).x0((function(t) { return t.base.x })) : D().x(K).y1(tt).y0((function(t) { return t.base.y }))).defined(Z).curve(l), t(p) } return (t = "vertical" === s && Object(F.g)(o) ? D().y(tt).x1(K).x0(o) : Object(F.g)(o) ? D().x(K).y1(tt).y0(o) : N().x(K).y(tt)).defined(Z).curve(l), t(h) } }, { key: "render", value: function() { var t = this.props,
                                e = t.className,
                                n = t.points,
                                r = t.path,
                                i = t.pathRef; if ((!n || !n.length) && !r) return null; var o = n && n.length ? this.getPath() : r; return l.a.createElement("path", V({}, Object(B.c)(this.props), Object(B.a)(this.props), { className: L()("recharts-curve", e), d: o, ref: i })) } }]) && Y(e.prototype, n), r && Y(e, r), s }(c.PureComponent);
            et.defaultProps = { type: "linear", points: [], connectNulls: !1 } }, 976: function(t, e, n) { "use strict";
            n.d(e, "a", (function() { return mt })); var r = n(310),
                i = n.n(r),
                o = n(894),
                a = n.n(o),
                s = n(1),
                u = n.n(s),
                c = n(477),
                l = n.n(c),
                h = n(895),
                f = n(841),
                p = n.n(f),
                d = (Math.abs, Math.atan2, Math.cos, Math.max, Math.min, Math.sin, Math.sqrt, Math.PI),
                y = 2 * d; var v = { draw: function(t, e) { var n = Math.sqrt(e / d);
                        t.moveTo(n, 0), t.arc(0, 0, n, 0, y) } },
                g = { draw: function(t, e) { var n = Math.sqrt(e / 5) / 2;
                        t.moveTo(-3 * n, -n), t.lineTo(-n, -n), t.lineTo(-n, -3 * n), t.lineTo(n, -3 * n), t.lineTo(n, -n), t.lineTo(3 * n, -n), t.lineTo(3 * n, n), t.lineTo(n, n), t.lineTo(n, 3 * n), t.lineTo(-n, 3 * n), t.lineTo(-n, n), t.lineTo(-3 * n, n), t.closePath() } },
                b = Math.sqrt(1 / 3),
                m = 2 * b,
                x = { draw: function(t, e) { var n = Math.sqrt(e / m),
                            r = n * b;
                        t.moveTo(0, -n), t.lineTo(r, 0), t.lineTo(0, n), t.lineTo(-r, 0), t.closePath() } },
                w = { draw: function(t, e) { var n = Math.sqrt(e),
                            r = -n / 2;
                        t.rect(r, r, n, n) } },
                O = Math.sin(d / 10) / Math.sin(7 * d / 10),
                _ = Math.sin(y / 10) * O,
                M = -Math.cos(y / 10) * O,
                j = { draw: function(t, e) { var n = Math.sqrt(.8908130915292852 * e),
                            r = _ * n,
                            i = M * n;
                        t.moveTo(0, -n), t.lineTo(r, i); for (var o = 1; o < 5; ++o) { var a = y * o / 5,
                                s = Math.cos(a),
                                u = Math.sin(a);
                            t.lineTo(u * n, -s * n), t.lineTo(s * r - u * i, u * r + s * i) }
                        t.closePath() } },
                S = Math.sqrt(3),
                E = { draw: function(t, e) { var n = -Math.sqrt(e / (3 * S));
                        t.moveTo(0, 2 * n), t.lineTo(-S * n, -n), t.lineTo(S * n, -n), t.closePath() } },
                k = -.5,
                A = Math.sqrt(3) / 2,
                P = 1 / Math.sqrt(12),
                C = 3 * (P / 2 + 1),
                T = { draw: function(t, e) { var n = Math.sqrt(e / C),
                            r = n / 2,
                            i = n * P,
                            o = r,
                            a = n * P + n,
                            s = -o,
                            u = a;
                        t.moveTo(r, i), t.lineTo(o, a), t.lineTo(s, u), t.lineTo(k * r - A * i, A * r + k * i), t.lineTo(k * o - A * a, A * o + k * a), t.lineTo(k * s - A * u, A * s + k * u), t.lineTo(k * r + A * i, k * i - A * r), t.lineTo(k * o + A * a, k * a - A * o), t.lineTo(k * s + A * u, k * u - A * s), t.closePath() } },
                I = n(1246),
                N = n(819),
                D = n(773);

            function R(t) { return (R = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t })(t) }

            function L() { return (L = Object.assign || function(t) { for (var e = 1; e < arguments.length; e++) { var n = arguments[e]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]) } return t }).apply(this, arguments) }

            function B(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

            function F(t, e) { for (var n = 0; n < e.length; n++) { var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r) } }

            function z(t, e) { return (z = Object.setPrototypeOf || function(t, e) { return t.__proto__ = e, t })(t, e) }

            function V(t) { var e = function() { if ("undefined" === typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" === typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = W(t); if (e) { var i = W(this).constructor;
                        n = Reflect.construct(r, arguments, i) } else n = r.apply(this, arguments); return U(this, n) } }

            function U(t, e) { return !e || "object" !== R(e) && "function" !== typeof e ? function(t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t }(t) : e }

            function W(t) { return (W = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) { return t.__proto__ || Object.getPrototypeOf(t) })(t) } var H = { symbolCircle: v, symbolCross: g, symbolDiamond: x, symbolSquare: w, symbolStar: j, symbolTriangle: E, symbolWye: T },
                q = Math.PI / 180,
                Y = function(t) {! function(t, e) { if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), e && z(t, e) }(o, t); var e, n, r, i = V(o);

                    function o() { return B(this, o), i.apply(this, arguments) } return e = o, (n = [{ key: "getPath", value: function() { var t = this.props,
                                e = t.size,
                                n = t.sizeType,
                                r = t.type,
                                i = function(t) { var e = "symbol".concat(p()(t)); return H[e] || v }(r); return function(t, e) { var n = null;

                                function r() { var r; if (n || (n = r = Object(I.a)()), t.apply(this, arguments).draw(n, +e.apply(this, arguments)), r) return n = null, r + "" || null } return t = "function" === typeof t ? t : Object(N.a)(t || v), e = "function" === typeof e ? e : Object(N.a)(void 0 === e ? 64 : +e), r.type = function(e) { return arguments.length ? (t = "function" === typeof e ? e : Object(N.a)(e), r) : t }, r.size = function(t) { return arguments.length ? (e = "function" === typeof t ? t : Object(N.a)(+t), r) : e }, r.context = function(t) { return arguments.length ? (n = null == t ? null : t, r) : n }, r }().type(i).size(function(t, e, n) { if ("area" === e) return t; switch (n) {
                                    case "cross":
                                        return 5 * t * t / 9;
                                    case "diamond":
                                        return .5 * t * t / Math.sqrt(3);
                                    case "square":
                                        return t * t;
                                    case "star":
                                        var r = 18 * q; return 1.25 * t * t * (Math.tan(r) - Math.tan(2 * r) * Math.pow(Math.tan(r), 2));
                                    case "triangle":
                                        return Math.sqrt(3) * t * t / 4;
                                    case "wye":
                                        return (21 - 10 * Math.sqrt(3)) * t * t / 8;
                                    default:
                                        return Math.PI * t * t / 4 } }(e, n, r))() } }, { key: "render", value: function() { var t = this.props,
                                e = t.className,
                                n = t.cx,
                                r = t.cy,
                                i = t.size; return n === +n && r === +r && i === +i ? u.a.createElement("path", L({}, Object(D.c)(this.props, !0), { className: l()("recharts-symbols", e), transform: "translate(".concat(n, ", ").concat(r, ")"), d: this.getPath() })) : null } }]) && F(e.prototype, n), r && F(e, r), o }(s.PureComponent);

            function $(t) { return ($ = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t })(t) }

            function J() { return (J = Object.assign || function(t) { for (var e = 1; e < arguments.length; e++) { var n = arguments[e]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]) } return t }).apply(this, arguments) }

            function G(t, e) { var n = Object.keys(t); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), n.push.apply(n, r) } return n }

            function X(t, e, n) { return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t }

            function Q(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

            function Z(t, e) { for (var n = 0; n < e.length; n++) { var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r) } }

            function K(t, e) { return (K = Object.setPrototypeOf || function(t, e) { return t.__proto__ = e, t })(t, e) }

            function tt(t) { var e = function() { if ("undefined" === typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" === typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = nt(t); if (e) { var i = nt(this).constructor;
                        n = Reflect.construct(r, arguments, i) } else n = r.apply(this, arguments); return et(this, n) } }

            function et(t, e) { return !e || "object" !== $(e) && "function" !== typeof e ? function(t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t }(t) : e }

            function nt(t) { return (nt = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) { return t.__proto__ || Object.getPrototypeOf(t) })(t) }
            Y.defaultProps = { type: "circle", size: 64, sizeType: "area" }, Y.registerSymbol = function(t, e) { H["symbol".concat(p()(t))] = e }; var rt = 32,
                it = function(t) {! function(t, e) { if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), e && K(t, e) }(o, t); var e, n, r, i = tt(o);

                    function o() { return Q(this, o), i.apply(this, arguments) } return e = o, (n = [{ key: "renderIcon", value: function(t) { var e = this.props.inactiveColor,
                                n = 16,
                                r = rt / 6,
                                i = rt / 3,
                                o = t.inactive ? e : t.color; if ("plainline" === t.type) return u.a.createElement("line", { strokeWidth: 4, fill: "none", stroke: o, strokeDasharray: t.payload.strokeDasharray, x1: 0, y1: n, x2: rt, y2: n, className: "recharts-legend-icon" }); if ("line" === t.type) return u.a.createElement("path", { strokeWidth: 4, fill: "none", stroke: o, d: "M0,".concat(n, "h").concat(i, "\n            A").concat(r, ",").concat(r, ",0,1,1,").concat(2 * i, ",").concat(n, "\n            H").concat(rt, "M").concat(2 * i, ",").concat(n, "\n            A").concat(r, ",").concat(r, ",0,1,1,").concat(i, ",").concat(n), className: "recharts-legend-icon" }); if ("rect" === t.type) return u.a.createElement("path", { stroke: "none", fill: o, d: "M0,".concat(4, "h").concat(rt, "v").concat(24, "h").concat(-32, "z"), className: "recharts-legend-icon" }); if (u.a.isValidElement(t.legendIcon)) { var a = function(t) { for (var e = 1; e < arguments.length; e++) { var n = null != arguments[e] ? arguments[e] : {};
                                        e % 2 ? G(Object(n), !0).forEach((function(e) { X(t, e, n[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : G(Object(n)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })) } return t }({}, t); return delete a.legendIcon, u.a.cloneElement(t.legendIcon, a) } return u.a.createElement(Y, { fill: o, cx: n, cy: n, size: rt, sizeType: "diameter", type: t.type }) } }, { key: "renderItems", value: function() { var t = this,
                                e = this.props,
                                n = e.payload,
                                r = e.iconSize,
                                i = e.layout,
                                o = e.formatter,
                                a = e.inactiveColor,
                                s = { x: 0, y: 0, width: rt, height: rt },
                                c = { display: "horizontal" === i ? "inline-block" : "block", marginRight: 10 },
                                f = { display: "inline-block", verticalAlign: "middle", marginRight: 4 }; return n.map((function(e, n) { var i, p = e.formatter || o,
                                    d = l()((X(i = { "recharts-legend-item": !0 }, "legend-item-".concat(n), !0), X(i, "inactive", e.inactive), i)); if ("none" === e.type) return null; var y = e.inactive ? a : e.color; return u.a.createElement("li", J({ className: d, style: c, key: "legend-item-".concat(n) }, Object(D.b)(t.props, e, n)), u.a.createElement(h.a, { width: r, height: r, viewBox: s, style: f }, t.renderIcon(e)), u.a.createElement("span", { className: "recharts-legend-item-text", style: { color: y } }, p ? p(e.value, e, n) : e.value)) })) } }, { key: "render", value: function() { var t = this.props,
                                e = t.payload,
                                n = t.layout,
                                r = t.align; if (!e || !e.length) return null; var i = { padding: 0, margin: 0, textAlign: "horizontal" === n ? r : "left" }; return u.a.createElement("ul", { className: "recharts-default-legend", style: i }, this.renderItems()) } }]) && Z(e.prototype, n), r && Z(e, r), o }(s.PureComponent);
            it.displayName = "Legend", it.defaultProps = { iconSize: 14, layout: "horizontal", align: "center", verticalAlign: "middle", inactiveColor: "#ccc" }; var ot = n(772);

            function at(t) { return (at = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t })(t) }

            function st(t, e) { var n = Object.keys(t); if (Object.getOwnPropertySymbols) { var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), n.push.apply(n, r) } return n }

            function ut(t) { for (var e = 1; e < arguments.length; e++) { var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? st(Object(n), !0).forEach((function(e) { ct(t, e, n[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : st(Object(n)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })) } return t }

            function ct(t, e, n) { return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t }

            function lt(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

            function ht(t, e) { for (var n = 0; n < e.length; n++) { var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r) } }

            function ft(t, e) { return (ft = Object.setPrototypeOf || function(t, e) { return t.__proto__ = e, t })(t, e) }

            function pt(t) { var e = function() { if ("undefined" === typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" === typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (t) { return !1 } }(); return function() { var n, r = yt(t); if (e) { var i = yt(this).constructor;
                        n = Reflect.construct(r, arguments, i) } else n = r.apply(this, arguments); return dt(this, n) } }

            function dt(t, e) { return !e || "object" !== at(e) && "function" !== typeof e ? function(t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t }(t) : e }

            function yt(t) { return (yt = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) { return t.__proto__ || Object.getPrototypeOf(t) })(t) }

            function vt(t, e) { if (null == t) return {}; var n, r, i = function(t, e) { if (null == t) return {}; var n, r, i = {},
                        o = Object.keys(t); for (r = 0; r < o.length; r++) n = o[r], e.indexOf(n) >= 0 || (i[n] = t[n]); return i }(t, e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(t); for (r = 0; r < o.length; r++) n = o[r], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (i[n] = t[n]) } return i }

            function gt(t) { return t.value }

            function bt(t, e) { return !0 === t ? a()(e, gt) : i()(t) ? a()(e, t) : e } var mt = function(t) {! function(t, e) { if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), e && ft(t, e) }(a, t); var e, n, r, o = pt(a);

                function a() { var t;
                    lt(this, a); for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r]; return (t = o.call.apply(o, [this].concat(n))).wrapperNode = void 0, t.state = { boxWidth: -1, boxHeight: -1 }, t } return e = a, r = [{ key: "getWithHeight", value: function(t, e) { var n = t.props.layout; return "vertical" === n && Object(ot.g)(t.props.height) ? { height: t.props.height } : "horizontal" === n ? { width: t.props.width || e } : null } }], (n = [{ key: "componentDidMount", value: function() { this.updateBBox() } }, { key: "componentDidUpdate", value: function() { this.updateBBox() } }, { key: "getBBox", value: function() { return this.wrapperNode && this.wrapperNode.getBoundingClientRect ? this.wrapperNode.getBoundingClientRect() : null } }, { key: "getBBoxSnapshot", value: function() { var t = this.state,
                            e = t.boxWidth,
                            n = t.boxHeight; return e >= 0 && n >= 0 ? { width: e, height: n } : null } }, { key: "getDefaultPosition", value: function(t) { var e, n, r = this.props,
                            i = r.layout,
                            o = r.align,
                            a = r.verticalAlign,
                            s = r.margin,
                            u = r.chartWidth,
                            c = r.chartHeight; return t && (void 0 !== t.left && null !== t.left || void 0 !== t.right && null !== t.right) || (e = "center" === o && "vertical" === i ? { left: ((u || 0) - (this.getBBoxSnapshot() || { width: 0 }).width) / 2 } : "right" === o ? { right: s && s.right || 0 } : { left: s && s.left || 0 }), t && (void 0 !== t.top && null !== t.top || void 0 !== t.bottom && null !== t.bottom) || (n = "middle" === a ? { top: ((c || 0) - (this.getBBoxSnapshot() || { height: 0 }).height) / 2 } : "bottom" === a ? { bottom: s && s.bottom || 0 } : { top: s && s.top || 0 }), ut(ut({}, e), n) } }, { key: "updateBBox", value: function() { var t = this.state,
                            e = t.boxWidth,
                            n = t.boxHeight,
                            r = this.props.onBBoxUpdate; if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) { var i = this.wrapperNode.getBoundingClientRect();
                            (Math.abs(i.width - e) > 1 || Math.abs(i.height - n) > 1) && this.setState({ boxWidth: i.width, boxHeight: i.height }, (function() { r && r(i) })) } else -1 === e && -1 === n || this.setState({ boxWidth: -1, boxHeight: -1 }, (function() { r && r(null) })) } }, { key: "render", value: function() { var t = this,
                            e = this.props,
                            n = e.content,
                            r = e.width,
                            o = e.height,
                            a = e.wrapperStyle,
                            s = e.payloadUniqBy,
                            c = e.payload,
                            l = ut(ut({ position: "absolute", width: r || "auto", height: o || "auto" }, this.getDefaultPosition(a)), a); return u.a.createElement("div", { className: "recharts-legend-wrapper", style: l, ref: function(e) { t.wrapperNode = e } }, function(t, e) { if (u.a.isValidElement(t)) return u.a.cloneElement(t, e); if (i()(t)) return u.a.createElement(t, e);
                            e.ref; var n = vt(e, ["ref"]); return u.a.createElement(it, n) }(n, ut(ut({}, this.props), {}, { payload: bt(s, c) }))) } }]) && ht(e.prototype, n), r && ht(e, r), a }(s.PureComponent);
            mt.displayName = "Legend", mt.defaultProps = { iconSize: 14, layout: "horizontal", align: "center", verticalAlign: "bottom" } }, 984: function(t, e, n) { var r, i;
            void 0 === (i = "function" === typeof(r = function() { var t, e, n = "2.0.6",
                    r = {},
                    i = {},
                    o = { currentLocale: "en", zeroFormat: null, nullFormat: null, defaultFormat: "0,0", scalePercentBy100: !0 },
                    a = { currentLocale: o.currentLocale, zeroFormat: o.zeroFormat, nullFormat: o.nullFormat, defaultFormat: o.defaultFormat, scalePercentBy100: o.scalePercentBy100 };

                function s(t, e) { this._input = t, this._value = e } return (t = function(n) { var i, o, u, c; if (t.isNumeral(n)) i = n.value();
                        else if (0 === n || "undefined" === typeof n) i = 0;
                        else if (null === n || e.isNaN(n)) i = null;
                        else if ("string" === typeof n)
                            if (a.zeroFormat && n === a.zeroFormat) i = 0;
                            else if (a.nullFormat && n === a.nullFormat || !n.replace(/[^0-9]+/g, "").length) i = null;
                        else { for (o in r)
                                if ((c = "function" === typeof r[o].regexps.unformat ? r[o].regexps.unformat() : r[o].regexps.unformat) && n.match(c)) { u = r[o].unformat; break }
                            i = (u = u || t._.stringToNumber)(n) } else i = Number(n) || null; return new s(n, i) }).version = n, t.isNumeral = function(t) { return t instanceof s }, t._ = e = { numberToFormat: function(e, n, r) { var o, a, s, u, c, l, h, f = i[t.options.currentLocale],
                                p = !1,
                                d = !1,
                                y = 0,
                                v = "",
                                g = 1e12,
                                b = 1e9,
                                m = 1e6,
                                x = 1e3,
                                w = "",
                                O = !1; if (e = e || 0, a = Math.abs(e), t._.includes(n, "(") ? (p = !0, n = n.replace(/[\(|\)]/g, "")) : (t._.includes(n, "+") || t._.includes(n, "-")) && (c = t._.includes(n, "+") ? n.indexOf("+") : e < 0 ? n.indexOf("-") : -1, n = n.replace(/[\+|\-]/g, "")), t._.includes(n, "a") && (o = !!(o = n.match(/a(k|m|b|t)?/)) && o[1], t._.includes(n, " a") && (v = " "), n = n.replace(new RegExp(v + "a[kmbt]?"), ""), a >= g && !o || "t" === o ? (v += f.abbreviations.trillion, e /= g) : a < g && a >= b && !o || "b" === o ? (v += f.abbreviations.billion, e /= b) : a < b && a >= m && !o || "m" === o ? (v += f.abbreviations.million, e /= m) : (a < m && a >= x && !o || "k" === o) && (v += f.abbreviations.thousand, e /= x)), t._.includes(n, "[.]") && (d = !0, n = n.replace("[.]", ".")), s = e.toString().split(".")[0], u = n.split(".")[1], l = n.indexOf(","), y = (n.split(".")[0].split(",")[0].match(/0/g) || []).length, u ? (t._.includes(u, "[") ? (u = (u = u.replace("]", "")).split("["), w = t._.toFixed(e, u[0].length + u[1].length, r, u[1].length)) : w = t._.toFixed(e, u.length, r), s = w.split(".")[0], w = t._.includes(w, ".") ? f.delimiters.decimal + w.split(".")[1] : "", d && 0 === Number(w.slice(1)) && (w = "")) : s = t._.toFixed(e, 0, r), v && !o && Number(s) >= 1e3 && v !== f.abbreviations.trillion) switch (s = String(Number(s) / 1e3), v) {
                                case f.abbreviations.thousand:
                                    v = f.abbreviations.million; break;
                                case f.abbreviations.million:
                                    v = f.abbreviations.billion; break;
                                case f.abbreviations.billion:
                                    v = f.abbreviations.trillion }
                            if (t._.includes(s, "-") && (s = s.slice(1), O = !0), s.length < y)
                                for (var _ = y - s.length; _ > 0; _--) s = "0" + s; return l > -1 && (s = s.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1" + f.delimiters.thousands)), 0 === n.indexOf(".") && (s = ""), h = s + w + (v || ""), p ? h = (p && O ? "(" : "") + h + (p && O ? ")" : "") : c >= 0 ? h = 0 === c ? (O ? "-" : "+") + h : h + (O ? "-" : "+") : O && (h = "-" + h), h }, stringToNumber: function(t) { var e, n, r, o = i[a.currentLocale],
                                s = t,
                                u = { thousand: 3, million: 6, billion: 9, trillion: 12 }; if (a.zeroFormat && t === a.zeroFormat) n = 0;
                            else if (a.nullFormat && t === a.nullFormat || !t.replace(/[^0-9]+/g, "").length) n = null;
                            else { for (e in n = 1, "." !== o.delimiters.decimal && (t = t.replace(/\./g, "").replace(o.delimiters.decimal, ".")), u)
                                    if (r = new RegExp("[^a-zA-Z]" + o.abbreviations[e] + "(?:\\)|(\\" + o.currency.symbol + ")?(?:\\))?)?$"), s.match(r)) { n *= Math.pow(10, u[e]); break }
                                n *= (t.split("-").length + Math.min(t.split("(").length - 1, t.split(")").length - 1)) % 2 ? 1 : -1, t = t.replace(/[^0-9\.]+/g, ""), n *= Number(t) } return n }, isNaN: function(t) {
                            function e(e) { return t.apply(this, arguments) } return e.toString = function() { return t.toString() }, e }((function(t) { return "number" === typeof t && isNaN(t) })), includes: function(t, e) { return -1 !== t.indexOf(e) }, insert: function(t, e, n) { return t.slice(0, n) + e + t.slice(n) }, reduce: function(t, e) { if (null === this) throw new TypeError("Array.prototype.reduce called on null or undefined"); if ("function" !== typeof e) throw new TypeError(e + " is not a function"); var n, r = Object(t),
                                i = r.length >>> 0,
                                o = 0; if (3 === arguments.length) n = arguments[2];
                            else { for (; o < i && !(o in r);) o++; if (o >= i) throw new TypeError("Reduce of empty array with no initial value");
                                n = r[o++] } for (; o < i; o++) o in r && (n = e(n, r[o], o, r)); return n }, multiplier: function(t) { var e = t.toString().split("."); return e.length < 2 ? 1 : Math.pow(10, e[1].length) }, correctionFactor: function() { return Array.prototype.slice.call(arguments).reduce((function(t, n) { var r = e.multiplier(n); return t > r ? t : r }), 1) }, toFixed: function(t, e, n, r) { var i, o, a, s, u = t.toString().split("."),
                                c = e - (r || 0); return i = 2 === u.length ? Math.min(Math.max(u[1].length, c), e) : c, a = Math.pow(10, i), s = (n(t + "e+" + i) / a).toFixed(i), r > e - i && (o = new RegExp("\\.?0{1," + (r - (e - i)) + "}$"), s = s.replace(o, "")), s } }, t.options = a, t.formats = r, t.locales = i, t.locale = function(t) { return t && (a.currentLocale = t.toLowerCase()), a.currentLocale }, t.localeData = function(t) { if (!t) return i[a.currentLocale]; if (t = t.toLowerCase(), !i[t]) throw new Error("Unknown locale : " + t); return i[t] }, t.reset = function() { for (var t in o) a[t] = o[t] }, t.zeroFormat = function(t) { a.zeroFormat = "string" === typeof t ? t : null }, t.nullFormat = function(t) { a.nullFormat = "string" === typeof t ? t : null }, t.defaultFormat = function(t) { a.defaultFormat = "string" === typeof t ? t : "0.0" }, t.register = function(t, e, n) { if (e = e.toLowerCase(), this[t + "s"][e]) throw new TypeError(e + " " + t + " already registered."); return this[t + "s"][e] = n, n }, t.validate = function(e, n) { var r, i, o, a, s, u, c, l; if ("string" !== typeof e && (e += "", console.warn && console.warn("Numeral.js: Value is not string. It has been co-erced to: ", e)), (e = e.trim()).match(/^\d+$/)) return !0; if ("" === e) return !1; try { c = t.localeData(n) } catch (h) { c = t.localeData(t.locale()) } return o = c.currency.symbol, s = c.abbreviations, r = c.delimiters.decimal, i = "." === c.delimiters.thousands ? "\\." : c.delimiters.thousands, (null === (l = e.match(/^[^\d]+/)) || (e = e.substr(1), l[0] === o)) && (null === (l = e.match(/[^\d]+$/)) || (e = e.slice(0, -1), l[0] === s.thousand || l[0] === s.million || l[0] === s.billion || l[0] === s.trillion)) && (u = new RegExp(i + "{2}"), !e.match(/[^\d.,]/g) && !((a = e.split(r)).length > 2) && (a.length < 2 ? !!a[0].match(/^\d+.*\d$/) && !a[0].match(u) : 1 === a[0].length ? !!a[0].match(/^\d+$/) && !a[0].match(u) && !!a[1].match(/^\d+$/) : !!a[0].match(/^\d+.*\d$/) && !a[0].match(u) && !!a[1].match(/^\d+$/))) }, t.fn = s.prototype = { clone: function() { return t(this) }, format: function(e, n) { var i, o, s, u = this._value,
                                c = e || a.defaultFormat; if (n = n || Math.round, 0 === u && null !== a.zeroFormat) o = a.zeroFormat;
                            else if (null === u && null !== a.nullFormat) o = a.nullFormat;
                            else { for (i in r)
                                    if (c.match(r[i].regexps.format)) { s = r[i].format; break }
                                o = (s = s || t._.numberToFormat)(u, c, n) } return o }, value: function() { return this._value }, input: function() { return this._input }, set: function(t) { return this._value = Number(t), this }, add: function(t) { var n = e.correctionFactor.call(null, this._value, t);

                            function r(t, e, r, i) { return t + Math.round(n * e) } return this._value = e.reduce([this._value, t], r, 0) / n, this }, subtract: function(t) { var n = e.correctionFactor.call(null, this._value, t);

                            function r(t, e, r, i) { return t - Math.round(n * e) } return this._value = e.reduce([t], r, Math.round(this._value * n)) / n, this }, multiply: function(t) {
                            function n(t, n, r, i) { var o = e.correctionFactor(t, n); return Math.round(t * o) * Math.round(n * o) / Math.round(o * o) } return this._value = e.reduce([this._value, t], n, 1), this }, divide: function(t) {
                            function n(t, n, r, i) { var o = e.correctionFactor(t, n); return Math.round(t * o) / Math.round(n * o) } return this._value = e.reduce([this._value, t], n), this }, difference: function(e) { return Math.abs(t(this._value).subtract(e).value()) } }, t.register("locale", "en", { delimiters: { thousands: ",", decimal: "." }, abbreviations: { thousand: "k", million: "m", billion: "b", trillion: "t" }, ordinal: function(t) { var e = t % 10; return 1 === ~~(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th" }, currency: { symbol: "$" } }), t.register("format", "bps", { regexps: { format: /(BPS)/, unformat: /(BPS)/ }, format: function(e, n, r) { var i, o = t._.includes(n, " BPS") ? " " : ""; return e *= 1e4, n = n.replace(/\s?BPS/, ""), i = t._.numberToFormat(e, n, r), t._.includes(i, ")") ? ((i = i.split("")).splice(-1, 0, o + "BPS"), i = i.join("")) : i = i + o + "BPS", i }, unformat: function(e) { return +(1e-4 * t._.stringToNumber(e)).toFixed(15) } }),
                    function() { var e = { base: 1e3, suffixes: ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"] },
                            n = { base: 1024, suffixes: ["B", "KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"] },
                            r = e.suffixes.concat(n.suffixes.filter((function(t) { return e.suffixes.indexOf(t) < 0 }))).join("|");
                        r = "(" + r.replace("B", "B(?!PS)") + ")", t.register("format", "bytes", { regexps: { format: /([0\s]i?b)/, unformat: new RegExp(r) }, format: function(r, i, o) { var a, s, u, c = t._.includes(i, "ib") ? n : e,
                                    l = t._.includes(i, " b") || t._.includes(i, " ib") ? " " : ""; for (i = i.replace(/\s?i?b/, ""), a = 0; a <= c.suffixes.length; a++)
                                    if (s = Math.pow(c.base, a), u = Math.pow(c.base, a + 1), null === r || 0 === r || r >= s && r < u) { l += c.suffixes[a], s > 0 && (r /= s); break }
                                return t._.numberToFormat(r, i, o) + l }, unformat: function(r) { var i, o, a = t._.stringToNumber(r); if (a) { for (i = e.suffixes.length - 1; i >= 0; i--) { if (t._.includes(r, e.suffixes[i])) { o = Math.pow(e.base, i); break } if (t._.includes(r, n.suffixes[i])) { o = Math.pow(n.base, i); break } }
                                    a *= o || 1 } return a } }) }(), t.register("format", "currency", { regexps: { format: /(\$)/ }, format: function(e, n, r) { var i, o, a = t.locales[t.options.currentLocale],
                                s = { before: n.match(/^([\+|\-|\(|\s|\$]*)/)[0], after: n.match(/([\+|\-|\)|\s|\$]*)$/)[0] }; for (n = n.replace(/\s?\$\s?/, ""), i = t._.numberToFormat(e, n, r), e >= 0 ? (s.before = s.before.replace(/[\-\(]/, ""), s.after = s.after.replace(/[\-\)]/, "")) : e < 0 && !t._.includes(s.before, "-") && !t._.includes(s.before, "(") && (s.before = "-" + s.before), o = 0; o < s.before.length; o++) switch (s.before[o]) {
                                case "$":
                                    i = t._.insert(i, a.currency.symbol, o); break;
                                case " ":
                                    i = t._.insert(i, " ", o + a.currency.symbol.length - 1) }
                            for (o = s.after.length - 1; o >= 0; o--) switch (s.after[o]) {
                                case "$":
                                    i = o === s.after.length - 1 ? i + a.currency.symbol : t._.insert(i, a.currency.symbol, -(s.after.length - (1 + o))); break;
                                case " ":
                                    i = o === s.after.length - 1 ? i + " " : t._.insert(i, " ", -(s.after.length - (1 + o) + a.currency.symbol.length - 1)) }
                            return i } }), t.register("format", "exponential", { regexps: { format: /(e\+|e-)/, unformat: /(e\+|e-)/ }, format: function(e, n, r) { var i = ("number" !== typeof e || t._.isNaN(e) ? "0e+0" : e.toExponential()).split("e"); return n = n.replace(/e[\+|\-]{1}0/, ""), t._.numberToFormat(Number(i[0]), n, r) + "e" + i[1] }, unformat: function(e) { var n = t._.includes(e, "e+") ? e.split("e+") : e.split("e-"),
                                r = Number(n[0]),
                                i = Number(n[1]);

                            function o(e, n, r, i) { var o = t._.correctionFactor(e, n); return e * o * (n * o) / (o * o) } return i = t._.includes(e, "e-") ? i *= -1 : i, t._.reduce([r, Math.pow(10, i)], o, 1) } }), t.register("format", "ordinal", { regexps: { format: /(o)/ }, format: function(e, n, r) { var i = t.locales[t.options.currentLocale],
                                o = t._.includes(n, " o") ? " " : ""; return n = n.replace(/\s?o/, ""), o += i.ordinal(e), t._.numberToFormat(e, n, r) + o } }), t.register("format", "percentage", { regexps: { format: /(%)/, unformat: /(%)/ }, format: function(e, n, r) { var i, o = t._.includes(n, " %") ? " " : ""; return t.options.scalePercentBy100 && (e *= 100), n = n.replace(/\s?\%/, ""), i = t._.numberToFormat(e, n, r), t._.includes(i, ")") ? ((i = i.split("")).splice(-1, 0, o + "%"), i = i.join("")) : i = i + o + "%", i }, unformat: function(e) { var n = t._.stringToNumber(e); return t.options.scalePercentBy100 ? .01 * n : n } }), t.register("format", "time", { regexps: { format: /(:)/, unformat: /(:)/ }, format: function(t, e, n) { var r = Math.floor(t / 60 / 60),
                                i = Math.floor((t - 60 * r * 60) / 60),
                                o = Math.round(t - 60 * r * 60 - 60 * i); return r + ":" + (i < 10 ? "0" + i : i) + ":" + (o < 10 ? "0" + o : o) }, unformat: function(t) { var e = t.split(":"),
                                n = 0; return 3 === e.length ? (n += 60 * Number(e[0]) * 60, n += 60 * Number(e[1]), n += Number(e[2])) : 2 === e.length && (n += 60 * Number(e[0]), n += Number(e[1])), Number(n) } }), t }) ? r.call(e, n, e, t) : r) || (t.exports = i) }, 985: function(t, e, n) { "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 }); var r = n(986),
                i = n(1),
                o = n(106),
                a = n(987),
                s = n(988);

            function u(t) { return t && "object" === typeof t && "default" in t ? t : { default: t } }

            function c(t) { if (t && t.__esModule) return t; var e = Object.create(null); return t && Object.keys(t).forEach((function(n) { if ("default" !== n) { var r = Object.getOwnPropertyDescriptor(t, n);
                        Object.defineProperty(e, n, r.get ? r : { enumerable: !0, get: function() { return t[n] } }) } })), e.default = t, Object.freeze(e) } var l = u(r),
                h = c(i),
                f = u(a),
                p = u(s),
                d = function(t, e) { return (d = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e) };

            function y(t, e) {
                function n() { this.constructor = t }
                d(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n) } var v = function() { return (v = Object.assign || function(t) { for (var e, n = 1, r = arguments.length; n < r; n++)
                        for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]); return t }).apply(this, arguments) };

            function g(t, e) { var n = {}; for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]); if (null != t && "function" === typeof Object.getOwnPropertySymbols) { var i = 0; for (r = Object.getOwnPropertySymbols(t); i < r.length; i++) e.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[i]) && (n[r[i]] = t[r[i]]) } return n } var b = function(t, e, n, r) { switch (e) {
                        case "debounce":
                            return f.default(t, n, r);
                        case "throttle":
                            return p.default(t, n, r);
                        default:
                            return t } },
                m = function(t) { return "function" === typeof t },
                x = function() { return "undefined" === typeof window },
                w = function(t) { return t instanceof Element || t instanceof HTMLDocument },
                O = function(t, e, n, r) { return function(i) { var o = i.width,
                            a = i.height;
                        e((function(e) { return e.width === o && e.height === a || e.width === o && !r || e.height === a && !n ? e : (t && m(t) && t(o, a), { width: o, height: a }) })) } },
                _ = function(t) {
                    function e(e) { var n = t.call(this, e) || this;
                        n.cancelHandler = function() { n.resizeHandler && n.resizeHandler.cancel && (n.resizeHandler.cancel(), n.resizeHandler = null) }, n.attachObserver = function() { var t = n.props,
                                e = t.targetRef,
                                r = t.observerOptions; if (!x()) { e && e.current && (n.targetRef.current = e.current); var i = n.getElement();
                                i && (n.observableElement && n.observableElement === i || (n.observableElement = i, n.resizeObserver.observe(i, r))) } }, n.getElement = function() { var t = n.props,
                                e = t.querySelector,
                                r = t.targetDomEl; if (x()) return null; if (e) return document.querySelector(e); if (r && w(r)) return r; if (n.targetRef && w(n.targetRef.current)) return n.targetRef.current; var i = o.findDOMNode(n); if (!i) return null; switch (n.getRenderType()) {
                                case "renderProp":
                                case "childFunction":
                                case "child":
                                case "childArray":
                                    return i;
                                default:
                                    return i.parentElement } }, n.createResizeHandler = function(t) { var e = n.props,
                                r = e.handleWidth,
                                i = void 0 === r || r,
                                o = e.handleHeight,
                                a = void 0 === o || o,
                                s = e.onResize; if (i || a) { var u = O(s, n.setState.bind(n), i, a);
                                t.forEach((function(t) { var e = t && t.contentRect || {},
                                        r = e.width,
                                        i = e.height;!n.skipOnMount && !x() && u({ width: r, height: i }), n.skipOnMount = !1 })) } }, n.getRenderType = function() { var t = n.props,
                                e = t.render,
                                r = t.children; return m(e) ? "renderProp" : m(r) ? "childFunction" : i.isValidElement(r) ? "child" : Array.isArray(r) ? "childArray" : "parent" }; var r = e.skipOnMount,
                            a = e.refreshMode,
                            s = e.refreshRate,
                            u = void 0 === s ? 1e3 : s,
                            c = e.refreshOptions; return n.state = { width: void 0, height: void 0 }, n.skipOnMount = r, n.targetRef = i.createRef(), n.observableElement = null, x() || (n.resizeHandler = b(n.createResizeHandler, a, u, c), n.resizeObserver = new l.default(n.resizeHandler)), n } return y(e, t), e.prototype.componentDidMount = function() { this.attachObserver() }, e.prototype.componentDidUpdate = function() { this.attachObserver() }, e.prototype.componentWillUnmount = function() { x() || (this.resizeObserver.disconnect(), this.cancelHandler()) }, e.prototype.render = function() { var t, e = this.props,
                            n = e.render,
                            r = e.children,
                            o = e.nodeType,
                            a = void 0 === o ? "div" : o,
                            s = this.state,
                            u = { width: s.width, height: s.height, targetRef: this.targetRef }; switch (this.getRenderType()) {
                            case "renderProp":
                                return n && n(u);
                            case "childFunction":
                                return (t = r)(u);
                            case "child":
                                if ((t = r).type && "string" === typeof t.type) { var c = g(u, ["targetRef"]); return i.cloneElement(t, c) } return i.cloneElement(t, u);
                            case "childArray":
                                return (t = r).map((function(t) { return !!t && i.cloneElement(t, u) }));
                            default:
                                return h.createElement(a, null) } }, e }(i.PureComponent); var M = x() ? i.useEffect : i.useLayoutEffect;
            e.default = _, e.useResizeDetector = function(t) { void 0 === t && (t = {}); var e = t.skipOnMount,
                    n = void 0 !== e && e,
                    r = t.refreshMode,
                    o = t.refreshRate,
                    a = void 0 === o ? 1e3 : o,
                    s = t.refreshOptions,
                    u = t.handleWidth,
                    c = void 0 === u || u,
                    h = t.handleHeight,
                    f = void 0 === h || h,
                    p = t.targetRef,
                    d = t.observerOptions,
                    y = t.onResize,
                    g = i.useRef(n),
                    m = i.useRef(null),
                    w = null !== p && void 0 !== p ? p : m,
                    _ = i.useRef(),
                    j = i.useState({ width: void 0, height: void 0 }),
                    S = j[0],
                    E = j[1]; return M((function() { if (!x()) { var t = O(y, E, c, f);
                        _.current = b((function(e) {
                            (c || f) && e.forEach((function(e) { var n = e && e.contentRect || {},
                                    r = n.width,
                                    i = n.height;!g.current && !x() && t({ width: r, height: i }), g.current = !1 })) }), r, a, s); var e = new l.default(_.current); return w.current && e.observe(w.current, d),
                            function() { e.disconnect(); var t = _.current;
                                t && t.cancel && t.cancel() } } }), [r, a, s, c, f, y, d, w.current]), v({ ref: w }, S) }, e.withResizeDetector = function(t, e) { void 0 === e && (e = {}); var n = function(n) {
                    function r() { var t = null !== n && n.apply(this, arguments) || this; return t.ref = i.createRef(), t } return y(r, n), r.prototype.render = function() { var n = this.props,
                            r = n.forwardedRef,
                            i = g(n, ["forwardedRef"]),
                            o = null !== r && void 0 !== r ? r : this.ref; return h.createElement(_, v({}, e, { targetRef: o }), h.createElement(t, v({ targetRef: o }, i))) }, r }(i.Component);

                function r(t, e) { return h.createElement(n, v({}, t, { forwardedRef: e })) } var o = t.displayName || t.name; return r.displayName = "withResizeDetector(" + o + ")", i.forwardRef(r) } }, 986: function(t, e, n) { "use strict";
            n.r(e),
                function(t) { var n = function() { if ("undefined" !== typeof Map) return Map;

                            function t(t, e) { var n = -1; return t.some((function(t, r) { return t[0] === e && (n = r, !0) })), n } return function() {
                                function e() { this.__entries__ = [] } return Object.defineProperty(e.prototype, "size", { get: function() { return this.__entries__.length }, enumerable: !0, configurable: !0 }), e.prototype.get = function(e) { var n = t(this.__entries__, e),
                                        r = this.__entries__[n]; return r && r[1] }, e.prototype.set = function(e, n) { var r = t(this.__entries__, e);~r ? this.__entries__[r][1] = n : this.__entries__.push([e, n]) }, e.prototype.delete = function(e) { var n = this.__entries__,
                                        r = t(n, e);~r && n.splice(r, 1) }, e.prototype.has = function(e) { return !!~t(this.__entries__, e) }, e.prototype.clear = function() { this.__entries__.splice(0) }, e.prototype.forEach = function(t, e) { void 0 === e && (e = null); for (var n = 0, r = this.__entries__; n < r.length; n++) { var i = r[n];
                                        t.call(e, i[1], i[0]) } }, e }() }(),
                        r = "undefined" !== typeof window && "undefined" !== typeof document && window.document === document,
                        i = "undefined" !== typeof t && t.Math === Math ? t : "undefined" !== typeof self && self.Math === Math ? self : "undefined" !== typeof window && window.Math === Math ? window : Function("return this")(),
                        o = "function" === typeof requestAnimationFrame ? requestAnimationFrame.bind(i) : function(t) { return setTimeout((function() { return t(Date.now()) }), 1e3 / 60) }; var a = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
                        s = "undefined" !== typeof MutationObserver,
                        u = function() {
                            function t() { this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(t, e) { var n = !1,
                                        r = !1,
                                        i = 0;

                                    function a() { n && (n = !1, t()), r && u() }

                                    function s() { o(a) }

                                    function u() { var t = Date.now(); if (n) { if (t - i < 2) return;
                                            r = !0 } else n = !0, r = !1, setTimeout(s, e);
                                        i = t } return u }(this.refresh.bind(this), 20) } return t.prototype.addObserver = function(t) {~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_() }, t.prototype.removeObserver = function(t) { var e = this.observers_,
                                    n = e.indexOf(t);~n && e.splice(n, 1), !e.length && this.connected_ && this.disconnect_() }, t.prototype.refresh = function() { this.updateObservers_() && this.refresh() }, t.prototype.updateObservers_ = function() { var t = this.observers_.filter((function(t) { return t.gatherActive(), t.hasActive() })); return t.forEach((function(t) { return t.broadcastActive() })), t.length > 0 }, t.prototype.connect_ = function() { r && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), s ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, { attributes: !0, childList: !0, characterData: !0, subtree: !0 })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0) }, t.prototype.disconnect_ = function() { r && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1) }, t.prototype.onTransitionEnd_ = function(t) { var e = t.propertyName,
                                    n = void 0 === e ? "" : e;
                                a.some((function(t) { return !!~n.indexOf(t) })) && this.refresh() }, t.getInstance = function() { return this.instance_ || (this.instance_ = new t), this.instance_ }, t.instance_ = null, t }(),
                        c = function(t, e) { for (var n = 0, r = Object.keys(e); n < r.length; n++) { var i = r[n];
                                Object.defineProperty(t, i, { value: e[i], enumerable: !1, writable: !1, configurable: !0 }) } return t },
                        l = function(t) { return t && t.ownerDocument && t.ownerDocument.defaultView || i },
                        h = g(0, 0, 0, 0);

                    function f(t) { return parseFloat(t) || 0 }

                    function p(t) { for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n]; return e.reduce((function(e, n) { return e + f(t["border-" + n + "-width"]) }), 0) }

                    function d(t) { var e = t.clientWidth,
                            n = t.clientHeight; if (!e && !n) return h; var r = l(t).getComputedStyle(t),
                            i = function(t) { for (var e = {}, n = 0, r = ["top", "right", "bottom", "left"]; n < r.length; n++) { var i = r[n],
                                        o = t["padding-" + i];
                                    e[i] = f(o) } return e }(r),
                            o = i.left + i.right,
                            a = i.top + i.bottom,
                            s = f(r.width),
                            u = f(r.height); if ("border-box" === r.boxSizing && (Math.round(s + o) !== e && (s -= p(r, "left", "right") + o), Math.round(u + a) !== n && (u -= p(r, "top", "bottom") + a)), ! function(t) { return t === l(t).document.documentElement }(t)) { var c = Math.round(s + o) - e,
                                d = Math.round(u + a) - n;
                            1 !== Math.abs(c) && (s -= c), 1 !== Math.abs(d) && (u -= d) } return g(i.left, i.top, s, u) } var y = "undefined" !== typeof SVGGraphicsElement ? function(t) { return t instanceof l(t).SVGGraphicsElement } : function(t) { return t instanceof l(t).SVGElement && "function" === typeof t.getBBox };

                    function v(t) { return r ? y(t) ? function(t) { var e = t.getBBox(); return g(0, 0, e.width, e.height) }(t) : d(t) : h }

                    function g(t, e, n, r) { return { x: t, y: e, width: n, height: r } } var b = function() {
                            function t(t) { this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = g(0, 0, 0, 0), this.target = t } return t.prototype.isActive = function() { var t = v(this.target); return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight }, t.prototype.broadcastRect = function() { var t = this.contentRect_; return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t }, t }(),
                        m = function(t, e) { var n = function(t) { var e = t.x,
                                    n = t.y,
                                    r = t.width,
                                    i = t.height,
                                    o = "undefined" !== typeof DOMRectReadOnly ? DOMRectReadOnly : Object,
                                    a = Object.create(o.prototype); return c(a, { x: e, y: n, width: r, height: i, top: n, right: e + r, bottom: i + n, left: e }), a }(e);
                            c(this, { target: t, contentRect: n }) },
                        x = function() {
                            function t(t, e, r) { if (this.activeObservations_ = [], this.observations_ = new n, "function" !== typeof t) throw new TypeError("The callback provided as parameter 1 is not a function.");
                                this.callback_ = t, this.controller_ = e, this.callbackCtx_ = r } return t.prototype.observe = function(t) { if (!arguments.length) throw new TypeError("1 argument required, but only 0 present."); if ("undefined" !== typeof Element && Element instanceof Object) { if (!(t instanceof l(t).Element)) throw new TypeError('parameter 1 is not of type "Element".'); var e = this.observations_;
                                    e.has(t) || (e.set(t, new b(t)), this.controller_.addObserver(this), this.controller_.refresh()) } }, t.prototype.unobserve = function(t) { if (!arguments.length) throw new TypeError("1 argument required, but only 0 present."); if ("undefined" !== typeof Element && Element instanceof Object) { if (!(t instanceof l(t).Element)) throw new TypeError('parameter 1 is not of type "Element".'); var e = this.observations_;
                                    e.has(t) && (e.delete(t), e.size || this.controller_.removeObserver(this)) } }, t.prototype.disconnect = function() { this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this) }, t.prototype.gatherActive = function() { var t = this;
                                this.clearActive(), this.observations_.forEach((function(e) { e.isActive() && t.activeObservations_.push(e) })) }, t.prototype.broadcastActive = function() { if (this.hasActive()) { var t = this.callbackCtx_,
                                        e = this.activeObservations_.map((function(t) { return new m(t.target, t.broadcastRect()) }));
                                    this.callback_.call(t, e, t), this.clearActive() } }, t.prototype.clearActive = function() { this.activeObservations_.splice(0) }, t.prototype.hasActive = function() { return this.activeObservations_.length > 0 }, t }(),
                        w = "undefined" !== typeof WeakMap ? new WeakMap : new n,
                        O = function t(e) { if (!(this instanceof t)) throw new TypeError("Cannot call a class as a function."); if (!arguments.length) throw new TypeError("1 argument required, but only 0 present."); var n = u.getInstance(),
                                r = new x(e, n, this);
                            w.set(this, r) };
                    ["observe", "unobserve", "disconnect"].forEach((function(t) { O.prototype[t] = function() { var e; return (e = w.get(this))[t].apply(e, arguments) } })); var _ = "undefined" !== typeof i.ResizeObserver ? i.ResizeObserver : O;
                    e.default = _ }.call(this, n(143)) }, 987: function(t, e, n) {
            (function(e) { var n = /^\s+|\s+$/g,
                    r = /^[-+]0x[0-9a-f]+$/i,
                    i = /^0b[01]+$/i,
                    o = /^0o[0-7]+$/i,
                    a = parseInt,
                    s = "object" == typeof e && e && e.Object === Object && e,
                    u = "object" == typeof self && self && self.Object === Object && self,
                    c = s || u || Function("return this")(),
                    l = Object.prototype.toString,
                    h = Math.max,
                    f = Math.min,
                    p = function() { return c.Date.now() };

                function d(t) { var e = typeof t; return !!t && ("object" == e || "function" == e) }

                function y(t) { if ("number" == typeof t) return t; if (function(t) { return "symbol" == typeof t || function(t) { return !!t && "object" == typeof t }(t) && "[object Symbol]" == l.call(t) }(t)) return NaN; if (d(t)) { var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                        t = d(e) ? e + "" : e } if ("string" != typeof t) return 0 === t ? t : +t;
                    t = t.replace(n, ""); var s = i.test(t); return s || o.test(t) ? a(t.slice(2), s ? 2 : 8) : r.test(t) ? NaN : +t }
                t.exports = function(t, e, n) { var r, i, o, a, s, u, c = 0,
                        l = !1,
                        v = !1,
                        g = !0; if ("function" != typeof t) throw new TypeError("Expected a function");

                    function b(e) { var n = r,
                            o = i; return r = i = void 0, c = e, a = t.apply(o, n) }

                    function m(t) { return c = t, s = setTimeout(w, e), l ? b(t) : a }

                    function x(t) { var n = t - u; return void 0 === u || n >= e || n < 0 || v && t - c >= o }

                    function w() { var t = p(); if (x(t)) return O(t);
                        s = setTimeout(w, function(t) { var n = e - (t - u); return v ? f(n, o - (t - c)) : n }(t)) }

                    function O(t) { return s = void 0, g && r ? b(t) : (r = i = void 0, a) }

                    function _() { var t = p(),
                            n = x(t); if (r = arguments, i = this, u = t, n) { if (void 0 === s) return m(u); if (v) return s = setTimeout(w, e), b(u) } return void 0 === s && (s = setTimeout(w, e)), a } return e = y(e) || 0, d(n) && (l = !!n.leading, o = (v = "maxWait" in n) ? h(y(n.maxWait) || 0, e) : o, g = "trailing" in n ? !!n.trailing : g), _.cancel = function() { void 0 !== s && clearTimeout(s), c = 0, r = u = i = s = void 0 }, _.flush = function() { return void 0 === s ? a : O(p()) }, _ } }).call(this, n(143)) }, 988: function(t, e, n) {
            (function(e) { var n = "Expected a function",
                    r = /^\s+|\s+$/g,
                    i = /^[-+]0x[0-9a-f]+$/i,
                    o = /^0b[01]+$/i,
                    a = /^0o[0-7]+$/i,
                    s = parseInt,
                    u = "object" == typeof e && e && e.Object === Object && e,
                    c = "object" == typeof self && self && self.Object === Object && self,
                    l = u || c || Function("return this")(),
                    h = Object.prototype.toString,
                    f = Math.max,
                    p = Math.min,
                    d = function() { return l.Date.now() };

                function y(t, e, r) { var i, o, a, s, u, c, l = 0,
                        h = !1,
                        y = !1,
                        b = !0; if ("function" != typeof t) throw new TypeError(n);

                    function m(e) { var n = i,
                            r = o; return i = o = void 0, l = e, s = t.apply(r, n) }

                    function x(t) { return l = t, u = setTimeout(O, e), h ? m(t) : s }

                    function w(t) { var n = t - c; return void 0 === c || n >= e || n < 0 || y && t - l >= a }

                    function O() { var t = d(); if (w(t)) return _(t);
                        u = setTimeout(O, function(t) { var n = e - (t - c); return y ? p(n, a - (t - l)) : n }(t)) }

                    function _(t) { return u = void 0, b && i ? m(t) : (i = o = void 0, s) }

                    function M() { var t = d(),
                            n = w(t); if (i = arguments, o = this, c = t, n) { if (void 0 === u) return x(c); if (y) return u = setTimeout(O, e), m(c) } return void 0 === u && (u = setTimeout(O, e)), s } return e = g(e) || 0, v(r) && (h = !!r.leading, a = (y = "maxWait" in r) ? f(g(r.maxWait) || 0, e) : a, b = "trailing" in r ? !!r.trailing : b), M.cancel = function() { void 0 !== u && clearTimeout(u), l = 0, i = c = o = u = void 0 }, M.flush = function() { return void 0 === u ? s : _(d()) }, M }

                function v(t) { var e = typeof t; return !!t && ("object" == e || "function" == e) }

                function g(t) { if ("number" == typeof t) return t; if (function(t) { return "symbol" == typeof t || function(t) { return !!t && "object" == typeof t }(t) && "[object Symbol]" == h.call(t) }(t)) return NaN; if (v(t)) { var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                        t = v(e) ? e + "" : e } if ("string" != typeof t) return 0 === t ? t : +t;
                    t = t.replace(r, ""); var n = o.test(t); return n || a.test(t) ? s(t.slice(2), n ? 2 : 8) : i.test(t) ? NaN : +t }
                t.exports = function(t, e, r) { var i = !0,
                        o = !0; if ("function" != typeof t) throw new TypeError(n); return v(r) && (i = "leading" in r ? !!r.leading : i, o = "trailing" in r ? !!r.trailing : o), y(t, e, { leading: i, maxWait: e, trailing: o }) } }).call(this, n(143)) }, 989: function(t, e, n) { var r = n(990)(n(991));
            t.exports = r }, 990: function(t, e, n) { var r = n(244),
                i = n(186),
                o = n(246);
            t.exports = function(t) { return function(e, n, a) { var s = Object(e); if (!i(e)) { var u = r(n, 3);
                        e = o(e), n = function(t) { return u(s[t], t, s) } } var c = t(e, n, a); return c > -1 ? s[u ? e[c] : c] : void 0 } } }, 991: function(t, e, n) { var r = n(891),
                i = n(244),
                o = n(992),
                a = Math.max;
            t.exports = function(t, e, n) { var s = null == t ? 0 : t.length; if (!s) return -1; var u = null == n ? 0 : o(n); return u < 0 && (u = a(s + u, 0)), r(t, i(e, 3), u) } }, 992: function(t, e, n) { var r = n(491);
            t.exports = function(t) { var e = r(t),
                    n = e % 1; return e === e ? n ? e - n : e : 0 } }, 993: function(t, e, n) { var r = n(187),
                i = n(170);
            t.exports = function(t) { return !0 === t || !1 === t || i(t) && "[object Boolean]" == r(t) } }, 994: function(t, e, n) { var r = n(995),
                i = n(892),
                o = n(997),
                a = n(375);
            t.exports = function(t) { return function(e) { e = a(e); var n = i(e) ? o(e) : void 0,
                        s = n ? n[0] : e.charAt(0),
                        u = n ? r(n, 1).join("") : e.slice(1); return s[t]() + u } } }, 995: function(t, e, n) { var r = n(996);
            t.exports = function(t, e, n) { var i = t.length; return n = void 0 === n ? i : n, !e && n >= i ? t : r(t, e, n) } }, 996: function(t, e) { t.exports = function(t, e, n) { var r = -1,
                    i = t.length;
                e < 0 && (e = -e > i ? 0 : i + e), (n = n > i ? i : n) < 0 && (n += i), i = e > n ? 0 : n - e >>> 0, e >>>= 0; for (var o = Array(i); ++r < i;) o[r] = t[r + e]; return o } }, 997: function(t, e, n) { var r = n(998),
                i = n(892),
                o = n(999);
            t.exports = function(t) { return i(t) ? o(t) : r(t) } }, 998: function(t, e) { t.exports = function(t) { return t.split("") } }, 999: function(t, e) { var n = "[\\ud800-\\udfff]",
                r = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
                i = "\\ud83c[\\udffb-\\udfff]",
                o = "[^\\ud800-\\udfff]",
                a = "(?:\\ud83c[\\udde6-\\uddff]){2}",
                s = "[\\ud800-\\udbff][\\udc00-\\udfff]",
                u = "(?:" + r + "|" + i + ")" + "?",
                c = "[\\ufe0e\\ufe0f]?",
                l = c + u + ("(?:\\u200d(?:" + [o, a, s].join("|") + ")" + c + u + ")*"),
                h = "(?:" + [o + r + "?", r, a, s, n].join("|") + ")",
                f = RegExp(i + "(?=" + i + ")|" + h + l, "g");
            t.exports = function(t) { return t.match(f) || [] } } }
]);
//# sourceMappingURL=4.174bdd8e.chunk.js.map