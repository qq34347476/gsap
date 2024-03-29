/*!
 * VERSION: 0.11.0
 * DATE: 2017-01-09
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2017, GreenSock. All rights reserved.
 * ThrowPropsPlugin is a Club GreenSock membership benefit; You must have a valid membership to use
 * this code without violating the terms of use. Visit http://greensock.com/club/ to sign up or get more details.
 * This work is subject to the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        _gsScope._gsDefine("plugins.ThrowPropsPlugin", ["plugins.TweenPlugin", "TweenLite", "easing.Ease", "utils.VelocityTracker"], function(e, t, r, o) {
            var n, i, s, a, c = function() { e.call(this, "throwProps"), this._overwriteProps.length = 0 },
                p = 999999999999999,
                f = 1e-10,
                u = _gsScope._gsDefine.globals,
                l = !1,
                g = { x: 1, y: 1, z: 2, scale: 1, scaleX: 1, scaleY: 1, rotation: 1, rotationZ: 1, rotationX: 2, rotationY: 2, skewX: 1, skewY: 1, xPercent: 1, yPercent: 1 },
                d = "codepen",
                h = "ThrowPropsPlugin",
                v = String.fromCharCode(103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109),
                y = String.fromCharCode(47, 114, 101, 113, 117, 105, 114, 101, 115, 45, 109, 101, 109, 98, 101, 114, 115, 104, 105, 112, 47),
                _ = function(e) {
                    for (var t = -1 !== (window ? window.location.href : "").indexOf(String.fromCharCode(103, 114, 101, 101, 110, 115, 111, 99, 107)) && -1 !== e.indexOf(String.fromCharCode(108, 111, 99, 97, 108, 104, 111, 115, 116)), r = [v, String.fromCharCode(99, 111, 100, 101, 112, 101, 110, 46, 105, 111), String.fromCharCode(99, 111, 100, 101, 112, 101, 110, 46, 100, 101, 118), String.fromCharCode(99, 115, 115, 45, 116, 114, 105, 99, 107, 115, 46, 99, 111, 109), String.fromCharCode(99, 100, 112, 110, 46, 105, 111), String.fromCharCode(103, 97, 110, 110, 111, 110, 46, 116, 118), String.fromCharCode(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 110, 101, 116), String.fromCharCode(116, 104, 101, 109, 101, 102, 111, 114, 101, 115, 116, 46, 110, 101, 116), String.fromCharCode(99, 101, 114, 101, 98, 114, 97, 120, 46, 99, 111, 46, 117, 107), String.fromCharCode(116, 121, 109, 112, 97, 110, 117, 115, 46, 110, 101, 116), String.fromCharCode(116, 119, 101, 101, 110, 109, 97, 120, 46, 99, 111, 109), String.fromCharCode(116, 119, 101, 101, 110, 108, 105, 116, 101, 46, 99, 111, 109), String.fromCharCode(112, 108, 110, 107, 114, 46, 99, 111), String.fromCharCode(104, 111, 116, 106, 97, 114, 46, 99, 111, 109), String.fromCharCode(106, 115, 102, 105, 100, 100, 108, 101, 46, 110, 101, 116)], o = r.length; --o > -1;)
                        if (-1 === e.indexOf(r[o])) return !0;
                    return t && window && window.console && console.log(String.fromCharCode(87, 65, 82, 78, 73, 78, 71, 58, 32, 97, 32, 115, 112, 101, 99, 105, 97, 108, 32, 118, 101, 114, 115, 105, 111, 110, 32, 111, 102, 32) + h + String.fromCharCode(32, 105, 115, 32, 114, 117, 110, 110, 105, 110, 103, 32, 108, 111, 99, 97, 108, 108, 121, 44, 32, 98, 117, 116, 32, 105, 116, 32, 119, 105, 108, 108, 32, 110, 111, 116, 32, 119, 111, 114, 107, 32, 111, 110, 32, 97, 32, 108, 105, 118, 101, 32, 100, 111, 109, 97, 105, 110, 32, 98, 101, 99, 97, 117, 115, 101, 32, 105, 116, 32, 105, 115, 32, 97, 32, 109, 101, 109, 98, 101, 114, 115, 104, 105, 112, 32, 98, 101, 110, 101, 102, 105, 116, 32, 111, 102, 32, 67, 108, 117, 98, 32, 71, 114, 101, 101, 110, 83, 111, 99, 107, 46, 32, 80, 108, 101, 97, 115, 101, 32, 115, 105, 103, 110, 32, 117, 112, 32, 97, 116, 32, 104, 116, 116, 112, 58, 47, 47, 103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109, 47, 99, 108, 117, 98, 47, 32, 97, 110, 100, 32, 116, 104, 101, 110, 32, 100, 111, 119, 110, 108, 111, 97, 100, 32, 116, 104, 101, 32, 39, 114, 101, 97, 108, 39, 32, 118, 101, 114, 115, 105, 111, 110, 32, 102, 114, 111, 109, 32, 121, 111, 117, 114, 32, 71, 114, 101, 101, 110, 83, 111, 99, 107, 32, 97, 99, 99, 111, 117, 110, 116, 32, 119, 104, 105, 99, 104, 32, 104, 97, 115, 32, 110, 111, 32, 115, 117, 99, 104, 32, 108, 105, 109, 105, 116, 97, 116, 105, 111, 110, 115, 46, 32, 84, 104, 101, 32, 102, 105, 108, 101, 32, 121, 111, 117, 39, 114, 101, 32, 117, 115, 105, 110, 103, 32, 119, 97, 115, 32, 108, 105, 107, 101, 108, 121, 32, 100, 111, 119, 110, 108, 111, 97, 100, 101, 100, 32, 102, 114, 111, 109, 32, 101, 108, 115, 101, 119, 104, 101, 114, 101, 32, 111, 110, 32, 116, 104, 101, 32, 119, 101, 98, 32, 97, 110, 100, 32, 105, 115, 32, 114, 101, 115, 116, 114, 105, 99, 116, 101, 100, 32, 116, 111, 32, 108, 111, 99, 97, 108, 32, 117, 115, 101, 32, 111, 114, 32, 111, 110, 32, 115, 105, 116, 101, 115, 32, 108, 105, 107, 101, 32, 99, 111, 100, 101, 112, 101, 110, 46, 105, 111, 46)), t
                }(window ? window.location.host : ""),
                m = function(e, t, r, o, n) {
                    var i, s, a, c, f = t.length,
                        u = 0,
                        l = p;
                    if ("object" == typeof e) {
                        for (; --f > -1;) {
                            i = t[f], s = 0;
                            for (a in e) c = i[a] - e[a], s += c * c;
                            l > s && (u = f, l = s)
                        }
                        if (p > (n || p) && n < Math.sqrt(l)) return e
                    } else
                        for (; --f > -1;) i = t[f], s = i - e, 0 > s && (s = -s), s >= l || o > i || i > r || (u = f, l = s);
                    return t[u]
                },
                w = function(e, t, r, o, n, i) {
                    if ("auto" === e.end) return e;
                    var s, a, c = e.end;
                    if (r = isNaN(r) ? p : r, o = isNaN(o) ? -p : o, "object" == typeof t) {
                        if (s = t.calculated ? t : ("function" == typeof c ? c(t) : m(t, c, r, o, i)) || t, !t.calculated) {
                            for (a in s) t[a] = s[a];
                            t.calculated = !0
                        }
                        s = s[n]
                    } else s = "function" == typeof c ? c(t) : c instanceof Array ? m(t, c, r, o, i) : +c;
                    return s > r ? s = r : o > s && (s = o), { max: s, min: s, unitFactor: e.unitFactor }
                },
                P = function(e, t, r) { for (var o in t) void 0 === e[o] && o !== r && (e[o] = t[o]); return e },
                k = c.calculateChange = function(e, o, n, i) { null == i && (i = .05); var s = o instanceof r ? o : o ? new r(o) : t.defaultEase; return n * i * e / s.getRatio(i) },
                x = c.calculateDuration = function(e, o, n, i, s) { s = s || .05; var a = i instanceof r ? i : i ? new r(i) : t.defaultEase; return Math.abs((o - e) * a.getRatio(s) / n / s) },
                C = c.calculateTweenDuration = function(e, n, i, s, a, p) {
                    if ("string" == typeof e && (e = t.selector(e)), !e) return 0;
                    null == i && (i = 10), null == s && (s = .2), null == a && (a = 1), e.length && (e = e[0] || e);
                    var u, g, d, h, v, y, _, m, C, T, S, b, V, O = 0,
                        N = 9999999999,
                        R = n.throwProps || n,
                        B = n.ease instanceof r ? n.ease : n.ease ? new r(n.ease) : t.defaultEase,
                        j = isNaN(R.checkpoint) ? .05 : +R.checkpoint,
                        F = isNaN(R.resistance) ? c.defaultResistance : +R.resistance;
                    if (R.linkedProps)
                        for (b = R.linkedProps.split(","), S = {}, V = 0; V < b.length; V++) u = b[V], g = R[u], g && (void 0 !== g.velocity && "number" == typeof g.velocity ? h = +g.velocity || 0 : (C = C || o.getByTarget(e), h = C && C.isTrackingProp(u) ? C.getVelocity(u) : 0), v = isNaN(g.resistance) ? F : +g.resistance, d = h * v > 0 ? h / v : h / -v, y = "function" == typeof e[u] ? e[u.indexOf("set") || "function" != typeof e["get" + u.substr(3)] ? u : "get" + u.substr(3)]() : e[u] || 0, S[u] = y + k(h, B, d, j));
                    for (u in R) "resistance" !== u && "checkpoint" !== u && "preventOvershoot" !== u && "linkedProps" !== u && "radius" !== u && (g = R[u], "object" != typeof g && (C = C || o.getByTarget(e), C && C.isTrackingProp(u) ? g = "number" == typeof g ? { velocity: g } : { velocity: C.getVelocity(u) } : (h = +g || 0, d = h * F > 0 ? h / F : h / -F)), "object" == typeof g && (void 0 !== g.velocity && "number" == typeof g.velocity ? h = +g.velocity || 0 : (C = C || o.getByTarget(e), h = C && C.isTrackingProp(u) ? C.getVelocity(u) : 0), v = isNaN(g.resistance) ? F : +g.resistance, d = h * v > 0 ? h / v : h / -v, y = "function" == typeof e[u] ? e[u.indexOf("set") || "function" != typeof e["get" + u.substr(3)] ? u : "get" + u.substr(3)]() : e[u] || 0, _ = y + k(h, B, d, j), void 0 !== g.end && (g = w(g, S && u in S ? S : _, g.max, g.min, u, R.radius), (p || l) && (R[u] = P(g, R[u], "end"))), void 0 !== g.max && _ > +g.max + f ? (T = g.unitFactor || c.defaultUnitFactors[u] || 1, m = y > g.max && g.min !== g.max || h * T > -15 && 45 > h * T ? s + .1 * (i - s) : x(y, g.max, h, B, j), N > m + a && (N = m + a)) : void 0 !== g.min && _ < +g.min - f && (T = g.unitFactor || c.defaultUnitFactors[u] || 1, m = y < g.min && g.min !== g.max || h * T > -45 && 15 > h * T ? s + .1 * (i - s) : x(y, g.min, h, B, j), N > m + a && (N = m + a)), m > O && (O = m)), d > O && (O = d));
                    return O > N && (O = N), O > i ? i : s > O ? s : O
                },
                T = c.prototype = new e("throwProps");
            return T.constructor = c, c.version = "0.11.0", c.API = 2, c._autoCSS = !0, c.defaultResistance = 100, c.defaultUnitFactors = { time: 1e3, totalTime: 1e3 }, c.track = function(e, t, r) { return o.track(e, t, r) }, c.untrack = function(e, t) { o.untrack(e, t) }, c.isTracking = function(e, t) { return o.isTracking(e, t) }, c.getVelocity = function(e, t) { var r = o.getByTarget(e); return r ? r.getVelocity(t) : 0 / 0 }, c._cssRegister = function() {
                var e = u.com.greensock.plugins.CSSPlugin;
                if (e) {
                    var t = e._internals,
                        r = t._parseToProxy,
                        s = t._setPluginRatio,
                        a = t.CSSPropTween;
                    t._registerComplexSpecialProp("throwProps", {
                        parser: function(e, t, p, f, u, l) {
                            l = new c;
                            var d, h, v, y, _, m = {},
                                w = {},
                                P = {},
                                k = {},
                                x = {},
                                C = {};
                            i = {};
                            for (v in t) "resistance" !== v && "preventOvershoot" !== v && "linkedProps" !== v && "radius" !== v && (h = t[v], "object" == typeof h ? (void 0 !== h.velocity && "number" == typeof h.velocity ? m[v] = +h.velocity || 0 : (_ = _ || o.getByTarget(e), m[v] = _ && _.isTrackingProp(v) ? _.getVelocity(v) : 0), void 0 !== h.end && (k[v] = h.end), void 0 !== h.min && (w[v] = h.min), void 0 !== h.max && (P[v] = h.max), h.preventOvershoot && (C[v] = !0), void 0 !== h.resistance && (d = !0, x[v] = h.resistance)) : "number" == typeof h ? m[v] = h : (_ = _ || o.getByTarget(e), m[v] = _ && _.isTrackingProp(v) ? _.getVelocity(v) : h || 0), g[v] && f._enableTransforms(2 === g[v]));
                            y = r(e, m, f, u, l), n = y.proxy, m = y.end;
                            for (v in n) i[v] = { velocity: m[v], min: w[v], max: P[v], end: k[v], resistance: x[v], preventOvershoot: C[v] };
                            return null != t.resistance && (i.resistance = t.resistance), null != t.linkedProps && (i.linkedProps = t.linkedProps), null != t.radius && (i.radius = t.radius), t.preventOvershoot && (i.preventOvershoot = !0), u = new a(e, "throwProps", 0, 0, y.pt, 2), f._overwriteProps.pop(), u.plugin = l, u.setRatio = s, u.data = y, l._onInitTween(n, i, f._tween), u
                        }
                    })
                }
            }, c.to = function(e, r, o, c, p) { r.throwProps || (r = { throwProps: r }), 0 === p && (r.throwProps.preventOvershoot = !0), l = !0; var f = new t(e, c || 1, r); return f.render(0, !0, !0), f.vars.css ? (f.duration(C(n, { throwProps: i, ease: r.ease }, o, c, p)), f._delay && !f.vars.immediateRender ? f.invalidate() : s._onInitTween(n, a, f), l = !1, f) : (f.kill(), f = new t(e, C(e, r, o, c, p), r), l = !1, f) }, T._onInitTween = function(e, t, r, n) {
                this.target = e, this._props = [], s = this, a = t;
                var i, c, p, f, u, g, m, x, C, T, S, b, V = r._ease,
                    O = isNaN(t.checkpoint) ? .05 : +t.checkpoint,
                    N = r._duration,
                    R = t.preventOvershoot,
                    B = 0;
                if (!_) return window.location.href = "http://" + v + y + "?plugin=" + h + "&source=" + d, !1;
                if (t.linkedProps)
                    for (S = t.linkedProps.split(","), T = {}, b = 0; b < S.length; b++) i = S[b], c = t[i], c && (void 0 !== c.velocity && "number" == typeof c.velocity ? u = +c.velocity || 0 : (C = C || o.getByTarget(e), u = C && C.isTrackingProp(i) ? C.getVelocity(i) : 0), p = "function" == typeof e[i] ? e[i.indexOf("set") || "function" != typeof e["get" + i.substr(3)] ? i : "get" + i.substr(3)]() : e[i] || 0, T[i] = p + k(u, V, N, O));
                for (i in t)
                    if ("resistance" !== i && "checkpoint" !== i && "preventOvershoot" !== i && "linkedProps" !== i && "radius" !== i) {
                        if (c = t[i], "function" == typeof c && (c = c(n, e)), "number" == typeof c) u = +c || 0;
                        else if ("object" != typeof c || isNaN(c.velocity)) {
                            if (C = C || o.getByTarget(e), !C || !C.isTrackingProp(i)) throw "ERROR: No velocity was defined in the throwProps tween of " + e + " property: " + i;
                            u = C.getVelocity(i)
                        } else u = +c.velocity;
                        g = k(u, V, N, O), x = 0, f = "function" == typeof e[i], p = f ? e[i.indexOf("set") || "function" != typeof e["get" + i.substr(3)] ? i : "get" + i.substr(3)]() : e[i], "object" == typeof c && (m = p + g, void 0 !== c.end && (c = w(c, T && i in T ? T : m, c.max, c.min, i, t.radius), l && (t[i] = P(c, t[i], "end"))), void 0 !== c.max && +c.max < m ? R || c.preventOvershoot ? g = c.max - p : x = c.max - p - g : void 0 !== c.min && +c.min > m && (R || c.preventOvershoot ? g = c.min - p : x = c.min - p - g)), this._overwriteProps[B] = i, this._props[B++] = { p: i, s: p, c1: g, c2: x, f: f, r: !1 }
                    }
                return _
            }, T._kill = function(t) { for (var r = this._props.length; --r > -1;) null != t[this._props[r].p] && this._props.splice(r, 1); return e.prototype._kill.call(this, t) }, T._mod = function(e) { for (var t, r = this._props, o = r.length; --o > -1;) t = e[r[o].p] || e.throwProps, "function" == typeof t && (r[o].m = t) }, T.setRatio = function(e) { for (var t, r, o = this._props.length; --o > -1;) t = this._props[o], r = t.s + t.c1 * e + t.c2 * e * e, t.m ? r = t.m(r, this.target) : 1 === e && (r = (1e4 * r + (0 > r ? -.5 : .5) | 0) / 1e4), t.f ? this.target[t.p](r) : this.target[t.p] = r }, e.activate([c]), c
        }, !0), _gsScope._gsDefine("utils.VelocityTracker", ["TweenLite"], function(e) {
            var t, r, o, n, i = /([A-Z])/g,
                s = {},
                a = { x: 1, y: 1, z: 2, scale: 1, scaleX: 1, scaleY: 1, rotation: 1, rotationZ: 1, rotationX: 2, rotationY: 2, skewX: 1, skewY: 1, xPercent: 1, yPercent: 1 },
                c = document.defaultView ? document.defaultView.getComputedStyle : function() {},
                p = function(e, t, r) { var o = (e._gsTransform || s)[t]; return o || 0 === o ? o : (e.style[t] ? o = e.style[t] : (r = r || c(e, null)) ? o = r[t] || r.getPropertyValue(t) || r.getPropertyValue(t.replace(i, "-$1").toLowerCase()) : e.currentStyle && (o = e.currentStyle[t]), parseFloat(o) || 0) },
                f = e.ticker,
                u = function(e, t, r) { this.p = e, this.f = t, this.v1 = this.v2 = 0, this.t1 = this.t2 = f.time, this.css = !1, this.type = "", this._prev = null, r && (this._next = r, r._prev = this) },
                l = function() {
                    var e, r, i = t,
                        s = f.time;
                    if (s - o >= .03)
                        for (n = o, o = s; i;) {
                            for (r = i._firstVP; r;) e = r.css ? p(i.target, r.p) : r.f ? i.target[r.p]() : i.target[r.p], (e !== r.v1 || s - r.t1 > .15) && (r.v2 = r.v1, r.v1 = e, r.t2 = r.t1, r.t1 = s), r = r._next;
                            i = i._next
                        }
                },
                g = function(e) { this._lookup = {}, this.target = e, this.elem = e.style && e.nodeType ? !0 : !1, r || (f.addEventListener("tick", l, null, !1, -100), o = n = f.time, r = !0), t && (this._next = t, t._prev = this), t = this },
                d = g.getByTarget = function(e) {
                    for (var r = t; r;) {
                        if (r.target === e) return r;
                        r = r._next
                    }
                },
                h = g.prototype;
            return h.addProp = function(t, r) {
                if (!this._lookup[t]) {
                    var o = this.target,
                        n = "function" == typeof o[t],
                        i = n ? this._altProp(t) : t,
                        s = this._firstVP;
                    this._firstVP = this._lookup[t] = this._lookup[i] = s = new u(i !== t && 0 === t.indexOf("set") ? i : t, n, s), s.css = this.elem && (void 0 !== this.target.style[s.p] || a[s.p]), s.css && a[s.p] && !o._gsTransform && e.set(o, { x: "+=0", overwrite: !1 }), s.type = r || s.css && 0 === t.indexOf("rotation") ? "deg" : "", s.v1 = s.v2 = s.css ? p(o, s.p) : n ? o[s.p]() : o[s.p]
                }
            }, h.removeProp = function(e) {
                var t = this._lookup[e];
                t && (t._prev ? t._prev._next = t._next : t === this._firstVP && (this._firstVP = t._next), t._next && (t._next._prev = t._prev), this._lookup[e] = 0, t.f && (this._lookup[this._altProp(e)] = 0))
            }, h.isTrackingProp = function(e) { return this._lookup[e] instanceof u }, h.getVelocity = function(e) {
                var t, r, o, n = this._lookup[e],
                    i = this.target;
                if (!n) throw "The velocity of " + e + " is not being tracked.";
                return t = n.css ? p(i, n.p) : n.f ? i[n.p]() : i[n.p], r = t - n.v2, ("rad" === n.type || "deg" === n.type) && (o = "rad" === n.type ? 2 * Math.PI : 360, r %= o, r !== r % (o / 2) && (r = 0 > r ? r + o : r - o)), r / (f.time - n.t2)
            }, h._altProp = function(e) {
                var t = e.substr(0, 3),
                    r = ("get" === t ? "set" : "set" === t ? "get" : t) + e.substr(3);
                return "function" == typeof this.target[r] ? r : e
            }, g.getByTarget = function(r) {
                var o = t;
                for ("string" == typeof r && (r = e.selector(r)), r.length && r !== window && r[0] && r[0].style && !r.nodeType && (r = r[0]); o;) {
                    if (o.target === r) return o;
                    o = o._next
                }
            }, g.track = function(e, t, r) {
                var o = d(e),
                    n = t.split(","),
                    i = n.length;
                for (r = (r || "").split(","), o || (o = new g(e)); --i > -1;) o.addProp(n[i], r[i] || r[0]);
                return o
            }, g.untrack = function(e, r) {
                var o = d(e),
                    n = (r || "").split(","),
                    i = n.length;
                if (o) {
                    for (; --i > -1;) o.removeProp(n[i]);
                    o._firstVP && r || (o._prev ? o._prev._next = o._next : o === t && (t = o._next), o._next && (o._next._prev = o._prev))
                }
            }, g.isTracking = function(e, t) { var r = d(e); return r ? !t && r._firstVP ? !0 : r.isTrackingProp(t) : !1 }, g
        }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(e) { "use strict"; var t = function() { return (_gsScope.GreenSockGlobals || _gsScope)[e] }; "function" == typeof define && define.amd ? define(["TweenLite"], t) : "undefined" != typeof module && module.exports && (require("../TweenLite.js"), module.exports = t()) }("ThrowPropsPlugin");