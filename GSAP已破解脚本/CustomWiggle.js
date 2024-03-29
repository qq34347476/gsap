/*!
 * VERSION: 0.2.0
 * DATE: 2016-11-04
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2016, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        _gsScope._gsDefine("easing.CustomWiggle", ["easing.CustomEase", "easing.Ease"], function(a, b) {
            var g, c = { easeOut: new a("", "M0,1,C0.7,1,0.6,0,1,0"), easeInOut: new a("", "M0,0,C0.104,0,0.242,1,0.444,1,0.644,1,0.608,0,1,0"), anticipate: new a("", "M0,0,C0,0.222,0.024,0.386,0.06,0.402,0.181,0.455,0.647,0.646,0.7,0.67,0.9,0.76,1,0.846,1,1"), uniform: new a("", "M0,0,C0,0.95,0.01,1,0.01,1,0.01,1,1,1,1,1,1,1,1,0.01,1,0") },
                d = new a,
                e = function(c, d) { return c = c.getRatio ? c : b.map[c] || new a("", c), c.rawBezier || !d ? c : { getRatio: function(a) { return 1 - c.getRatio(a) } } },
                f = function(b, c) { this.vars = c || {}, a.call(this, b), this.update(this.vars) };
            return f.prototype = g = new a, g.constructor = f, g.update = function(a) {
                a = a || this.vars;
                var l, m, n, o, p, q, r, s, t, b = 0 | (a.wiggles || 10),
                    f = 1 / b,
                    g = f / 2,
                    h = "anticipate" === a.type,
                    i = c[a.type] || c.easeOut,
                    j = d,
                    k = 1e3;
                if (h && (j = i, i = c.easeOut), a.timingEase && (j = e(a.timingEase)), a.amplitudeEase && (i = e(a.amplitudeEase, !0)), q = j.getRatio(g), r = h ? -i.getRatio(g) : i.getRatio(g), s = [0, 0, q / 4, 0, q / 2, r, q, r], "random" === a.type) {
                    for (s.length = 4, l = j.getRatio(f), m = 2 * Math.random() - 1, t = 2; b > t; t++) g = l, r = m, l = j.getRatio(f * t), m = 2 * Math.random() - 1, n = Math.atan2(m - s[s.length - 3], l - s[s.length - 4]), o = Math.cos(n) * f, p = Math.sin(n) * f, s.push(g - o, r - p, g, r, g + o, r + p);
                    s.push(l, 0, 1, 0)
                } else {
                    for (t = 1; b > t; t++) s.push(j.getRatio(g + f / 2), r), g += f, r = (r > 0 ? -1 : 1) * i.getRatio(t * f), q = j.getRatio(g), s.push(j.getRatio(g - f / 2), r, q, r);
                    s.push(j.getRatio(g + f / 4), r, j.getRatio(g + f / 4), 0, 1, 0)
                }
                for (t = s.length; --t > -1;) s[t] = (s[t] * k | 0) / k;
                s[2] = "C" + s[2], this.setData("M" + s.join(","))
            }, f.create = function(a, b) { return new f(a, b) }, f.version = "0.2.0", f.eases = c, f
        }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(a) { "use strict"; var b = function() { return (_gsScope.GreenSockGlobals || _gsScope)[a] }; "function" == typeof define && define.amd ? define(["TweenLite", "CustomEase"], b) : "undefined" != typeof module && module.exports && (require("./CustomEase.js"), require("../TweenLite.js"), module.exports = b()) }("CustomWiggle");