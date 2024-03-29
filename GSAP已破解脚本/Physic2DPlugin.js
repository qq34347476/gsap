/*!
 * VERSION: 0.2.0
 * DATE: 2016-07-12
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2016, GreenSock. All rights reserved.
 * Physics2DPlugin is a Club GreenSock membership benefit; You must have a valid membership to use
 * this code without violating the terms of use. Visit http://greensock.com/club/ to sign up or get more details.
 * This work is subject to the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
    "use strict";
    var t = Math.PI / 180,
        i = function(t, i, e, r, o) { this.p = i, this.f = "function" == typeof t[i], this.start = this.value = this.f ? t[i.indexOf("set") || "function" != typeof t["get" + i.substr(3)] ? i : "get" + i.substr(3)]() : parseFloat(t[i]), this.velocity = e || 0, this.v = this.velocity / o, r || 0 === r ? (this.acceleration = r, this.a = this.acceleration / (o * o)) : this.acceleration = this.a = 0 },
        e = "codepen",
        r = "Physics2DPlugin",
        o = String.fromCharCode(103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109),
        s = String.fromCharCode(47, 114, 101, 113, 117, 105, 114, 101, 115, 45, 109, 101, 109, 98, 101, 114, 115, 104, 105, 112, 47),
        n = function(t) {
            for (var i = -1 !== (window ? window.location.href : "").indexOf(String.fromCharCode(103, 114, 101, 101, 110, 115, 111, 99, 107)) && -1 !== t.indexOf(String.fromCharCode(108, 111, 99, 97, 108, 104, 111, 115, 116)), e = [o, String.fromCharCode(99, 111, 100, 101, 112, 101, 110, 46, 105, 111), String.fromCharCode(99, 111, 100, 101, 112, 101, 110, 46, 100, 101, 118), String.fromCharCode(99, 115, 115, 45, 116, 114, 105, 99, 107, 115, 46, 99, 111, 109), String.fromCharCode(99, 100, 112, 110, 46, 105, 111), String.fromCharCode(103, 97, 110, 110, 111, 110, 46, 116, 118), String.fromCharCode(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 110, 101, 116), String.fromCharCode(116, 104, 101, 109, 101, 102, 111, 114, 101, 115, 116, 46, 110, 101, 116), String.fromCharCode(99, 101, 114, 101, 98, 114, 97, 120, 46, 99, 111, 46, 117, 107), String.fromCharCode(116, 121, 109, 112, 97, 110, 117, 115, 46, 110, 101, 116), String.fromCharCode(116, 119, 101, 101, 110, 109, 97, 120, 46, 99, 111, 109), String.fromCharCode(116, 119, 101, 101, 110, 108, 105, 116, 101, 46, 99, 111, 109), String.fromCharCode(112, 108, 110, 107, 114, 46, 99, 111), String.fromCharCode(104, 111, 116, 106, 97, 114, 46, 99, 111, 109), String.fromCharCode(106, 115, 102, 105, 100, 100, 108, 101, 46, 110, 101, 116)], s = e.length; --s > -1;)
                if (-1 === t.indexOf(e[s])) return !0;
            return i && window && window.console && console.log(String.fromCharCode(87, 65, 82, 78, 73, 78, 71, 58, 32, 97, 32, 115, 112, 101, 99, 105, 97, 108, 32, 118, 101, 114, 115, 105, 111, 110, 32, 111, 102, 32) + r + String.fromCharCode(32, 105, 115, 32, 114, 117, 110, 110, 105, 110, 103, 32, 108, 111, 99, 97, 108, 108, 121, 44, 32, 98, 117, 116, 32, 105, 116, 32, 119, 105, 108, 108, 32, 110, 111, 116, 32, 119, 111, 114, 107, 32, 111, 110, 32, 97, 32, 108, 105, 118, 101, 32, 100, 111, 109, 97, 105, 110, 32, 98, 101, 99, 97, 117, 115, 101, 32, 105, 116, 32, 105, 115, 32, 97, 32, 109, 101, 109, 98, 101, 114, 115, 104, 105, 112, 32, 98, 101, 110, 101, 102, 105, 116, 32, 111, 102, 32, 67, 108, 117, 98, 32, 71, 114, 101, 101, 110, 83, 111, 99, 107, 46, 32, 80, 108, 101, 97, 115, 101, 32, 115, 105, 103, 110, 32, 117, 112, 32, 97, 116, 32, 104, 116, 116, 112, 58, 47, 47, 103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109, 47, 99, 108, 117, 98, 47, 32, 97, 110, 100, 32, 116, 104, 101, 110, 32, 100, 111, 119, 110, 108, 111, 97, 100, 32, 116, 104, 101, 32, 39, 114, 101, 97, 108, 39, 32, 118, 101, 114, 115, 105, 111, 110, 32, 102, 114, 111, 109, 32, 121, 111, 117, 114, 32, 71, 114, 101, 101, 110, 83, 111, 99, 107, 32, 97, 99, 99, 111, 117, 110, 116, 32, 119, 104, 105, 99, 104, 32, 104, 97, 115, 32, 110, 111, 32, 115, 117, 99, 104, 32, 108, 105, 109, 105, 116, 97, 116, 105, 111, 110, 115, 46, 32, 84, 104, 101, 32, 102, 105, 108, 101, 32, 121, 111, 117, 39, 114, 101, 32, 117, 115, 105, 110, 103, 32, 119, 97, 115, 32, 108, 105, 107, 101, 108, 121, 32, 100, 111, 119, 110, 108, 111, 97, 100, 101, 100, 32, 102, 114, 111, 109, 32, 101, 108, 115, 101, 119, 104, 101, 114, 101, 32, 111, 110, 32, 116, 104, 101, 32, 119, 101, 98, 32, 97, 110, 100, 32, 105, 115, 32, 114, 101, 115, 116, 114, 105, 99, 116, 101, 100, 32, 116, 111, 32, 108, 111, 99, 97, 108, 32, 117, 115, 101, 32, 111, 114, 32, 111, 110, 32, 115, 105, 116, 101, 115, 32, 108, 105, 107, 101, 32, 99, 111, 100, 101, 112, 101, 110, 46, 105, 111, 46)), i
        }(window ? window.location.host : ""),
        a = Math.random(),
        h = _gsScope._gsDefine.globals,
        p = h.com.greensock.core.Animation._rootFramesTimeline,
        f = _gsScope._gsDefine.plugin({
            propName: "physics2D",
            version: "0.2.0",
            API: 2,
            init: function(a, h, f, c) {
                if ("function" == typeof h && (h = h(c, a)), !n) return window.location.href = "http://" + o + s + "?plugin=" + r + "&source=" + e, !1;
                this._target = a, this._tween = f, this._runBackwards = f.vars.runBackwards === !0, this._step = 0;
                for (var _, l = f._timeline, g = +h.angle || 0, u = +h.velocity || 0, d = +h.acceleration || 0, C = h.xProp || "x", m = h.yProp || "y", v = h.accelerationAngle || 0 === h.accelerationAngle ? +h.accelerationAngle : g; l._timeline;) l = l._timeline;
                return this._stepsPerTimeUnit = _ = l === p ? 1 : 30, h.gravity && (d = +h.gravity, v = 90), g *= t, v *= t, this._friction = 1 - +(h.friction || 0), this._overwriteProps.push(C), this._overwriteProps.push(m), this._x = new i(a, C, Math.cos(g) * u, Math.cos(v) * d, _), this._y = new i(a, m, Math.sin(g) * u, Math.sin(v) * d, _), this._skipX = this._skipY = !1, n
            },
            set: function() {
                var t, i, e, r, o, s, n = this._tween._time,
                    a = this._x,
                    h = this._y;
                if (this._runBackwards === !0 && (n = this._tween._duration - n), 1 === this._friction) e = n * n * .5, t = a.start + (a.velocity * n + a.acceleration * e), i = h.start + (h.velocity * n + h.acceleration * e);
                else {
                    if (n *= this._stepsPerTimeUnit, r = s = (0 | n) - this._step, o = n % 1, 0 > s)
                        for (s = -s; --s > -1;) a.value -= a.v, h.value -= h.v, a.v /= this._friction, h.v /= this._friction, a.v -= a.a, h.v -= h.a;
                    else
                        for (; --s > -1;) a.v += a.a, h.v += h.a, a.v *= this._friction, h.v *= this._friction, a.value += a.v, h.value += h.v;
                    t = a.value + a.v * o, i = h.value + h.v * o, this._step += r
                }
                this._skipX || (a.m && (t = a.m(t, this._target)), a.f ? this._target[a.p](t) : this._target[a.p] = t), this._skipY || (h.m && (i = h.m(i, this._target)), h.f ? this._target[h.p](i) : this._target[h.p] = i)
            }
        }),
        c = f.prototype;
    c._kill = function(t) { return null != t[this._x.p] && (this._skipX = !0), null != t[this._y.p] && (this._skipY = !0), this._super._kill.call(this, t) }, c._mod = function(t) {
        var i = t[this._x.p] || t.physics2D;
        i && "function" == typeof i && (this._x.m = i), i = t[this._y.p] || t.physics2D, i && "function" == typeof i && (this._y.m = i)
    }, f._autoCSS = !0, f._cssRegister = function() {
        var t = h.CSSPlugin;
        if (t) {
            var i = t._internals,
                e = i._parseToProxy,
                r = i._setPluginRatio,
                o = i.CSSPropTween;
            i._registerComplexSpecialProp("physics2D", {
                parser: function(t, i, s, n, h, p) {
                    p = new f;
                    var c, _ = i.xProp || "x",
                        l = i.yProp || "y",
                        g = {};
                    return g[_] = g[l] = a++, c = e(t, g, n, h, p), h = new o(t, "physics2D", 0, 0, c.pt, 2), h.data = c, h.plugin = p, h.setRatio = r, p._onInitTween(c.proxy, i, n._tween), h
                }
            })
        }
    }
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()();