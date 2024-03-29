/*!
 * VERSION: 0.4.0
 * DATE: 2016-11-29
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2016, GreenSock. All rights reserved.
 * ScrambleTextPlugin is a Club GreenSock membership benefit; You must have a valid membership to use
 * this code without violating the terms of use. Visit http://greensock.com/club/ to sign up or get more details.
 * This work is subject to the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
    "use strict";
    var t = function(e) {
            var s = e.nodeType,
                i = "";
            if (1 === s || 9 === s || 11 === s) { if ("string" == typeof e.textContent) return e.textContent; for (e = e.firstChild; e; e = e.nextSibling) i += t(e) } else if (3 === s || 4 === s) return e.nodeValue;
            return i
        },
        e = function(t, e) { for (var s = e.length, i = ""; --t > -1;) i += e[Math.random() * s | 0]; return i },
        s = function(t) {
            this.chars = t.split(""), this.sets = [], this.length = 50;
            var s;
            for (s = 0; 20 > s; s++) this.sets[s] = e(80, this.chars);
            this.grow = function(t) {
                for (s = 0; 20 > s; s++) this.sets[s] += e(t - this.length, this.chars);
                this.length = t
            }
        },
        i = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        r = i.toLowerCase(),
        n = { upperCase: new s(i), lowerCase: new s(r), upperAndLowerCase: new s(i + r) },
        h = "codepen",
        o = "ScrambleTextPlugin",
        a = String.fromCharCode(103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109),
        l = String.fromCharCode(47, 114, 101, 113, 117, 105, 114, 101, 115, 45, 109, 101, 109, 98, 101, 114, 115, 104, 105, 112, 47),
        _ = function(t) {
            for (var e = -1 !== (window ? window.location.href : "").indexOf(String.fromCharCode(103, 114, 101, 101, 110, 115, 111, 99, 107)) && -1 !== t.indexOf(String.fromCharCode(108, 111, 99, 97, 108, 104, 111, 115, 116)), s = [a, String.fromCharCode(99, 111, 100, 101, 112, 101, 110, 46, 105, 111), String.fromCharCode(99, 111, 100, 101, 112, 101, 110, 46, 100, 101, 118), String.fromCharCode(99, 115, 115, 45, 116, 114, 105, 99, 107, 115, 46, 99, 111, 109), String.fromCharCode(99, 100, 112, 110, 46, 105, 111), String.fromCharCode(103, 97, 110, 110, 111, 110, 46, 116, 118), String.fromCharCode(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 110, 101, 116), String.fromCharCode(116, 104, 101, 109, 101, 102, 111, 114, 101, 115, 116, 46, 110, 101, 116), String.fromCharCode(99, 101, 114, 101, 98, 114, 97, 120, 46, 99, 111, 46, 117, 107), String.fromCharCode(116, 121, 109, 112, 97, 110, 117, 115, 46, 110, 101, 116), String.fromCharCode(116, 119, 101, 101, 110, 109, 97, 120, 46, 99, 111, 109), String.fromCharCode(116, 119, 101, 101, 110, 108, 105, 116, 101, 46, 99, 111, 109), String.fromCharCode(112, 108, 110, 107, 114, 46, 99, 111), String.fromCharCode(104, 111, 116, 106, 97, 114, 46, 99, 111, 109), String.fromCharCode(106, 115, 102, 105, 100, 100, 108, 101, 46, 110, 101, 116)], i = s.length; --i > -1;)
                if (-1 === t.indexOf(s[i])) return !0;
            return e && window && window.console && console.log(String.fromCharCode(87, 65, 82, 78, 73, 78, 71, 58, 32, 97, 32, 115, 112, 101, 99, 105, 97, 108, 32, 118, 101, 114, 115, 105, 111, 110, 32, 111, 102, 32) + o + String.fromCharCode(32, 105, 115, 32, 114, 117, 110, 110, 105, 110, 103, 32, 108, 111, 99, 97, 108, 108, 121, 44, 32, 98, 117, 116, 32, 105, 116, 32, 119, 105, 108, 108, 32, 110, 111, 116, 32, 119, 111, 114, 107, 32, 111, 110, 32, 97, 32, 108, 105, 118, 101, 32, 100, 111, 109, 97, 105, 110, 32, 98, 101, 99, 97, 117, 115, 101, 32, 105, 116, 32, 105, 115, 32, 97, 32, 109, 101, 109, 98, 101, 114, 115, 104, 105, 112, 32, 98, 101, 110, 101, 102, 105, 116, 32, 111, 102, 32, 67, 108, 117, 98, 32, 71, 114, 101, 101, 110, 83, 111, 99, 107, 46, 32, 80, 108, 101, 97, 115, 101, 32, 115, 105, 103, 110, 32, 117, 112, 32, 97, 116, 32, 104, 116, 116, 112, 58, 47, 47, 103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109, 47, 99, 108, 117, 98, 47, 32, 97, 110, 100, 32, 116, 104, 101, 110, 32, 100, 111, 119, 110, 108, 111, 97, 100, 32, 116, 104, 101, 32, 39, 114, 101, 97, 108, 39, 32, 118, 101, 114, 115, 105, 111, 110, 32, 102, 114, 111, 109, 32, 121, 111, 117, 114, 32, 71, 114, 101, 101, 110, 83, 111, 99, 107, 32, 97, 99, 99, 111, 117, 110, 116, 32, 119, 104, 105, 99, 104, 32, 104, 97, 115, 32, 110, 111, 32, 115, 117, 99, 104, 32, 108, 105, 109, 105, 116, 97, 116, 105, 111, 110, 115, 46, 32, 84, 104, 101, 32, 102, 105, 108, 101, 32, 121, 111, 117, 39, 114, 101, 32, 117, 115, 105, 110, 103, 32, 119, 97, 115, 32, 108, 105, 107, 101, 108, 121, 32, 100, 111, 119, 110, 108, 111, 97, 100, 101, 100, 32, 102, 114, 111, 109, 32, 101, 108, 115, 101, 119, 104, 101, 114, 101, 32, 111, 110, 32, 116, 104, 101, 32, 119, 101, 98, 32, 97, 110, 100, 32, 105, 115, 32, 114, 101, 115, 116, 114, 105, 99, 116, 101, 100, 32, 116, 111, 32, 108, 111, 99, 97, 108, 32, 117, 115, 101, 32, 111, 114, 32, 111, 110, 32, 115, 105, 116, 101, 115, 32, 108, 105, 107, 101, 32, 99, 111, 100, 101, 112, 101, 110, 46, 105, 111, 46)), e
        }(window ? window.location.host : ""),
        g = _gsScope._gsDefine.plugin({
            propName: "scrambleText",
            version: "0.4.0",
            API: 2,
            overwriteProps: ["scrambleText", "text"],
            init: function(e, i, r, g) { if (this._prop = "innerHTML" in e ? "innerHTML" : "textContent" in e ? "textContent" : 0, !this._prop) return !1; if (!_) return window.location.href = "http://" + a + l + "?plugin=" + o + "&source=" + h, !1; "function" == typeof i && (i = i(g, e)), this._target = e, "object" != typeof i && (i = { text: i }); var f, C, d, p; return this._delimiter = f = i.delimiter || "", this._original = t(e).replace(/\s+/g, " ").split("&nbsp;").join("").split(f), this._text = (i.text || i.value || "").replace(/\s+/g, " ").split(f), this._hasClass = !1, "string" == typeof i.newClass && (this._newClass = i.newClass, this._hasClass = !0), "string" == typeof i.oldClass && (this._oldClass = i.oldClass, this._hasClass = !0), C = this._text.length - this._original.length, this._length = this._original.join(f).length, this._lengthDif = this._text.join(f).length - this._length, this._fillChar = i.fillChar || i.chars && -1 !== i.chars.indexOf(" ") ? "&nbsp;" : "", this._charSet = p = n[i.chars || "upperCase"] || new s(i.chars), this._speed = .016 / (i.speed || 1), this._prevScrambleTime = 0, this._setIndex = 20 * Math.random() | 0, d = this._length + Math.max(this._lengthDif, 0), d > p.length && p.grow(d), this._chars = p.sets[this._setIndex], this._revealDelay = i.revealDelay || 0, this._tweenLength = i.tweenLength !== !1, this._tween = r, this._rightToLeft = !!i.rightToLeft, _ },
            set: function(t) {
                var e, s, i, r, n, h, o, a, l = this._text.length,
                    _ = this._delimiter,
                    g = this._tween._time,
                    f = g - this._prevScrambleTime;
                this._revealDelay && (this._tween.vars.runBackwards && (g = this._tween._duration - g), t = 0 === g ? 0 : g < this._revealDelay ? 1e-6 : g === this._tween._duration ? 1 : this._tween._ease.getRatio((g - this._revealDelay) / (this._tween._duration - this._revealDelay))), 0 > t ? t = 0 : t > 1 && (t = 1), this._rightToLeft && (t = 1 - t), e = t * l + .5 | 0, t ? ((f > this._speed || f < -this._speed) && (this._setIndex = (this._setIndex + (19 * Math.random() | 0)) % 20, this._chars = this._charSet.sets[this._setIndex], this._prevScrambleTime += f), i = this._chars) : i = this._original.join(_), this._rightToLeft ? 1 !== t || !this._tween.vars.runBackwards && "isFromStart" !== this._tween.data ? (s = i.substr(0, this._length + (this._tweenLength ? 1 - t * t * t : 1) * this._lengthDif - (l - e) + .5 | 0), i = this._text.slice(e).join(_)) : (s = "", i = this._original.join(_)) : (s = this._text.slice(0, e).join(_), i = i.substr(e, this._length + (this._tweenLength ? 1 - (t = 1 - t) * t * t * t : 1) * this._lengthDif - e + .5 | 0)), this._hasClass ? (o = this._rightToLeft ? this._oldClass : this._newClass, a = this._rightToLeft ? this._newClass : this._oldClass, r = o && 0 !== e, n = a && e !== l, h = (r ? "<span class='" + o + "'>" : "") + s + (r ? "</span>" : "") + (n ? "<span class='" + a + "'>" : "") + _ + i + (n ? "</span>" : "")) : h = s + _ + i, this._target[this._prop] = "&nbsp;" === this._fillChar && -1 !== h.indexOf("  ") ? h.split("  ").join("&nbsp;&nbsp;") : h
            }
        }),
        f = g.prototype;
    f._newClass = f._oldClass = "";
    for (f in n) n[f.toLowerCase()] = n[f], n[f.toUpperCase()] = n[f]
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()();