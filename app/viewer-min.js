/*! Storymaps-Shortlist - v2.9.0 - 2020-01-22, 03:11:47 PM - This application is released under the Apache License V2.0 by Esri http://www.esri.com/ - https://github.com/Esri/map-series-storytelling-template-js */ function FastClick(
  e
) {
  "use strict";
  var t,
    n = this;
  if (
    ((this.trackingClick = !1),
    (this.trackingClickStart = 0),
    (this.targetElement = null),
    (this.touchStartX = 0),
    (this.touchStartY = 0),
    (this.lastTouchIdentifier = 0),
    (this.touchBoundary = 10),
    (this.layer = e),
    !e || !e.nodeType)
  )
    throw new TypeError("Layer must be a document node");
  (this.onClick = function () {
    return FastClick.prototype.onClick.apply(n, arguments);
  }),
    (this.onMouse = function () {
      return FastClick.prototype.onMouse.apply(n, arguments);
    }),
    (this.onTouchStart = function () {
      return FastClick.prototype.onTouchStart.apply(n, arguments);
    }),
    (this.onTouchMove = function () {
      return FastClick.prototype.onTouchMove.apply(n, arguments);
    }),
    (this.onTouchEnd = function () {
      return FastClick.prototype.onTouchEnd.apply(n, arguments);
    }),
    (this.onTouchCancel = function () {
      return FastClick.prototype.onTouchCancel.apply(n, arguments);
    }),
    FastClick.notNeeded(e) ||
      (this.deviceIsAndroid &&
        (e.addEventListener("mouseover", this.onMouse, !0),
        e.addEventListener("mousedown", this.onMouse, !0),
        e.addEventListener("mouseup", this.onMouse, !0)),
      e.addEventListener("click", this.onClick, !0),
      e.addEventListener("touchstart", this.onTouchStart, !1),
      e.addEventListener("touchmove", this.onTouchMove, !1),
      e.addEventListener("touchend", this.onTouchEnd, !1),
      e.addEventListener("touchcancel", this.onTouchCancel, !1),
      Event.prototype.stopImmediatePropagation ||
        ((e.removeEventListener = function (t, n, i) {
          var a = Node.prototype.removeEventListener;
          "click" === t ? a.call(e, t, n.hijacked || n, i) : a.call(e, t, n, i);
        }),
        (e.addEventListener = function (t, n, i) {
          var a = Node.prototype.addEventListener;
          "click" === t
            ? a.call(
                e,
                t,
                n.hijacked ||
                  (n.hijacked = function (e) {
                    e.propagationStopped || n(e);
                  }),
                i
              )
            : a.call(e, t, n, i);
        })),
      "function" == typeof e.onclick &&
        ((t = e.onclick),
        e.addEventListener(
          "click",
          function (e) {
            t(e);
          },
          !1
        ),
        (e.onclick = null)));
}
if (
  (define("lib-build/css", [], function () {
    if ("undefined" == typeof window)
      return {
        load: function (e, t, n) {
          n();
        },
      };
    var e = document.getElementsByTagName("head")[0],
      t =
        window.navigator.userAgent.match(
          /Trident\/([^ ;]*)|AppleWebKit\/([^ ;]*)|Opera\/([^ ;]*)|rv\:([^ ;]*)(.*?)Gecko\/([^ ;]*)|MSIE\s([^ ;]*)/
        ) || 0,
      n = !1,
      i = !0;
    t[1] || t[7]
      ? (n = parseInt(t[1]) < 6 || parseInt(t[7]) <= 9)
      : t[2]
      ? (i = !1)
      : t[4] && (n = parseInt(t[4]) < 18);
    var a = {};
    a.pluginBuilder = "./css-builder";
    var r,
      o = function () {
        (r = document.createElement("style")), e.appendChild(r);
      },
      s = function (e, t) {
        o();
        var n = r.styleSheet || r.sheet;
        if (n && n.addImport) n.addImport(e), (r.onload = t);
        else {
          r.textContent = '@import "' + e + '";';
          var i = setInterval(function () {
            try {
              r.sheet.cssRules, clearInterval(i), t();
            } catch (e) {}
          }, 10);
        }
      },
      l = function (t, n) {
        var a = document.createElement("link");
        if (((a.type = "text/css"), (a.rel = "stylesheet"), i))
          a.onload = function () {
            (a.onload = function () {}), setTimeout(n, 7);
          };
        else
          var r = setInterval(function () {
            for (var e = 0; e < document.styleSheets.length; e++) {
              if (document.styleSheets[e].href == a.href)
                return clearInterval(r), n();
            }
          }, 10);
        (a.href = t), e.appendChild(a);
      };
    return (
      (a.normalize = function (e, t) {
        return (
          ".css" == e.substr(e.length - 4, 4) &&
            (e = e.substr(0, e.length - 4)),
          t(e)
        );
      }),
      (a.load = function (e, t, i, a) {
        (n ? s : l)(t.toUrl(e + ".css"), i);
      }),
      a
    );
  }),
  define(
    "lib-build/css!lib-app/bootstrap/css/bootstrap.min",
    [],
    function () {}
  ),
  define("lib-build/css!storymaps/common/ui/Modal", [], function () {}),
  define("lib-build/css!storymaps/common/Core", [], function () {}),
  (function (e, t) {
    "object" == typeof module && "object" == typeof module.exports
      ? (module.exports = e.document
          ? t(e, !0)
          : function (e) {
              if (!e.document)
                throw new Error("jQuery requires a window with a document");
              return t(e);
            })
      : t(e);
  })("undefined" != typeof window ? window : this, function (e, t) {
    function n(e) {
      var t = e.length,
        n = re.type(e);
      return (
        "function" !== n &&
        !re.isWindow(e) &&
        (!(1 !== e.nodeType || !t) ||
          "array" === n ||
          0 === t ||
          ("number" == typeof t && t > 0 && t - 1 in e))
      );
    }
    function i(e, t, n) {
      if (re.isFunction(t))
        return re.grep(e, function (e, i) {
          return !!t.call(e, i, e) !== n;
        });
      if (t.nodeType)
        return re.grep(e, function (e) {
          return (e === t) !== n;
        });
      if ("string" == typeof t) {
        if (fe.test(t)) return re.filter(t, e, n);
        t = re.filter(t, e);
      }
      return re.grep(e, function (e) {
        return re.inArray(e, t) >= 0 !== n;
      });
    }
    function a(e, t) {
      do {
        e = e[t];
      } while (e && 1 !== e.nodeType);
      return e;
    }
    function r(e) {
      var t = (we[e] = {});
      return (
        re.each(e.match(ye) || [], function (e, n) {
          t[n] = !0;
        }),
        t
      );
    }
    function o() {
      me.addEventListener
        ? (me.removeEventListener("DOMContentLoaded", s, !1),
          e.removeEventListener("load", s, !1))
        : (me.detachEvent("onreadystatechange", s), e.detachEvent("onload", s));
    }
    function s() {
      (me.addEventListener ||
        "load" === event.type ||
        "complete" === me.readyState) &&
        (o(), re.ready());
    }
    function l(e, t, n) {
      if (void 0 === n && 1 === e.nodeType) {
        var i = "data-" + t.replace(ke, "-$1").toLowerCase();
        if ("string" == typeof (n = e.getAttribute(i))) {
          try {
            n =
              "true" === n ||
              ("false" !== n &&
                ("null" === n
                  ? null
                  : +n + "" === n
                  ? +n
                  : Se.test(n)
                  ? re.parseJSON(n)
                  : n));
          } catch (e) {}
          re.data(e, t, n);
        } else n = void 0;
      }
      return n;
    }
    function p(e) {
      var t;
      for (t in e)
        if (("data" !== t || !re.isEmptyObject(e[t])) && "toJSON" !== t)
          return !1;
      return !0;
    }
    function c(e, t, n, i) {
      if (re.acceptData(e)) {
        var a,
          r,
          o = re.expando,
          s = e.nodeType,
          l = s ? re.cache : e,
          p = s ? e[o] : e[o] && o;
        if (
          (p && l[p] && (i || l[p].data)) ||
          void 0 !== n ||
          "string" != typeof t
        )
          return (
            p || (p = s ? (e[o] = X.pop() || re.guid++) : o),
            l[p] || (l[p] = s ? {} : { toJSON: re.noop }),
            ("object" == typeof t || "function" == typeof t) &&
              (i
                ? (l[p] = re.extend(l[p], t))
                : (l[p].data = re.extend(l[p].data, t))),
            (r = l[p]),
            i || (r.data || (r.data = {}), (r = r.data)),
            void 0 !== n && (r[re.camelCase(t)] = n),
            "string" == typeof t
              ? null == (a = r[t]) && (a = r[re.camelCase(t)])
              : (a = r),
            a
          );
      }
    }
    function d(e, t, n) {
      if (re.acceptData(e)) {
        var i,
          a,
          r = e.nodeType,
          o = r ? re.cache : e,
          s = r ? e[re.expando] : re.expando;
        if (o[s]) {
          if (t && (i = n ? o[s] : o[s].data)) {
            re.isArray(t)
              ? (t = t.concat(re.map(t, re.camelCase)))
              : t in i
              ? (t = [t])
              : ((t = re.camelCase(t)), (t = t in i ? [t] : t.split(" "))),
              (a = t.length);
            for (; a--; ) delete i[t[a]];
            if (n ? !p(i) : !re.isEmptyObject(i)) return;
          }
          (n || (delete o[s].data, p(o[s]))) &&
            (r
              ? re.cleanData([e], !0)
              : ie.deleteExpando || o != o.window
              ? delete o[s]
              : (o[s] = null));
        }
      }
    }
    function u() {
      return !0;
    }
    function f() {
      return !1;
    }
    function h() {
      try {
        return me.activeElement;
      } catch (e) {}
    }
    function m(e) {
      var t = Be.split("|"),
        n = e.createDocumentFragment();
      if (n.createElement) for (; t.length; ) n.createElement(t.pop());
      return n;
    }
    function g(e, t) {
      var n,
        i,
        a = 0,
        r =
          typeof e.getElementsByTagName !== Te
            ? e.getElementsByTagName(t || "*")
            : typeof e.querySelectorAll !== Te
            ? e.querySelectorAll(t || "*")
            : void 0;
      if (!r)
        for (r = [], n = e.childNodes || e; null != (i = n[a]); a++)
          !t || re.nodeName(i, t) ? r.push(i) : re.merge(r, g(i, t));
      return void 0 === t || (t && re.nodeName(e, t)) ? re.merge([e], r) : r;
    }
    function v(e) {
      $e.test(e.type) && (e.defaultChecked = e.checked);
    }
    function b(e, t) {
      return re.nodeName(e, "table") &&
        re.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr")
        ? e.getElementsByTagName("tbody")[0] ||
            e.appendChild(e.ownerDocument.createElement("tbody"))
        : e;
    }
    function y(e) {
      return (e.type = (null !== re.find.attr(e, "type")) + "/" + e.type), e;
    }
    function w(e) {
      var t = Ve.exec(e.type);
      return t ? (e.type = t[1]) : e.removeAttribute("type"), e;
    }
    function x(e, t) {
      for (var n, i = 0; null != (n = e[i]); i++)
        re._data(n, "globalEval", !t || re._data(t[i], "globalEval"));
    }
    function C(e, t) {
      if (1 === t.nodeType && re.hasData(e)) {
        var n,
          i,
          a,
          r = re._data(e),
          o = re._data(t, r),
          s = r.events;
        if (s) {
          delete o.handle, (o.events = {});
          for (n in s)
            for (i = 0, a = s[n].length; a > i; i++)
              re.event.add(t, n, s[n][i]);
        }
        o.data && (o.data = re.extend({}, o.data));
      }
    }
    function T(e, t) {
      var n, i, a;
      if (1 === t.nodeType) {
        if (
          ((n = t.nodeName.toLowerCase()), !ie.noCloneEvent && t[re.expando])
        ) {
          a = re._data(t);
          for (i in a.events) re.removeEvent(t, i, a.handle);
          t.removeAttribute(re.expando);
        }
        "script" === n && t.text !== e.text
          ? ((y(t).text = e.text), w(t))
          : "object" === n
          ? (t.parentNode && (t.outerHTML = e.outerHTML),
            ie.html5Clone &&
              e.innerHTML &&
              !re.trim(t.innerHTML) &&
              (t.innerHTML = e.innerHTML))
          : "input" === n && $e.test(e.type)
          ? ((t.defaultChecked = t.checked = e.checked),
            t.value !== e.value && (t.value = e.value))
          : "option" === n
          ? (t.defaultSelected = t.selected = e.defaultSelected)
          : ("input" === n || "textarea" === n) &&
            (t.defaultValue = e.defaultValue);
      }
    }
    function S(t, n) {
      var i = re(n.createElement(t)).appendTo(n.body),
        a = e.getDefaultComputedStyle
          ? e.getDefaultComputedStyle(i[0]).display
          : re.css(i[0], "display");
      return i.detach(), a;
    }
    function k(e) {
      var t = me,
        n = Ze[e];
      return (
        n ||
          ((n = S(e, t)),
          ("none" !== n && n) ||
            ((Je = (
              Je || re("<iframe frameborder='0' width='0' height='0'/>")
            ).appendTo(t.documentElement)),
            (t = (Je[0].contentWindow || Je[0].contentDocument).document),
            t.write(),
            t.close(),
            (n = S(e, t)),
            Je.detach()),
          (Ze[e] = n)),
        n
      );
    }
    function E(e, t) {
      return {
        get: function () {
          var n = e();
          if (null != n)
            return n
              ? void delete this.get
              : (this.get = t).apply(this, arguments);
        },
      };
    }
    function I(e, t) {
      if (t in e) return t;
      for (
        var n = t.charAt(0).toUpperCase() + t.slice(1), i = t, a = ut.length;
        a--;

      )
        if ((t = ut[a] + n) in e) return t;
      return i;
    }
    function A(e, t) {
      for (var n, i, a, r = [], o = 0, s = e.length; s > o; o++)
        (i = e[o]),
          i.style &&
            ((r[o] = re._data(i, "olddisplay")),
            (n = i.style.display),
            t
              ? (r[o] || "none" !== n || (i.style.display = ""),
                "" === i.style.display &&
                  Ae(i) &&
                  (r[o] = re._data(i, "olddisplay", k(i.nodeName))))
              : r[o] ||
                ((a = Ae(i)),
                ((n && "none" !== n) || !a) &&
                  re._data(i, "olddisplay", a ? n : re.css(i, "display"))));
      for (o = 0; s > o; o++)
        (i = e[o]),
          i.style &&
            ((t && "none" !== i.style.display && "" !== i.style.display) ||
              (i.style.display = t ? r[o] || "" : "none"));
      return e;
    }
    function L(e, t, n) {
      var i = lt.exec(t);
      return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t;
    }
    function $(e, t, n, i, a) {
      for (
        var r = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0,
          o = 0;
        4 > r;
        r += 2
      )
        "margin" === n && (o += re.css(e, n + Ie[r], !0, a)),
          i
            ? ("content" === n && (o -= re.css(e, "padding" + Ie[r], !0, a)),
              "margin" !== n &&
                (o -= re.css(e, "border" + Ie[r] + "Width", !0, a)))
            : ((o += re.css(e, "padding" + Ie[r], !0, a)),
              "padding" !== n &&
                (o += re.css(e, "border" + Ie[r] + "Width", !0, a)));
      return o;
    }
    function _(e, t, n) {
      var i = !0,
        a = "width" === t ? e.offsetWidth : e.offsetHeight,
        r = et(e),
        o = ie.boxSizing() && "border-box" === re.css(e, "boxSizing", !1, r);
      if (0 >= a || null == a) {
        if (
          ((a = tt(e, t, r)),
          (0 > a || null == a) && (a = e.style[t]),
          it.test(a))
        )
          return a;
        (i = o && (ie.boxSizingReliable() || a === e.style[t])),
          (a = parseFloat(a) || 0);
      }
      return a + $(e, t, n || (o ? "border" : "content"), i, r) + "px";
    }
    function D(e, t, n, i, a) {
      return new D.prototype.init(e, t, n, i, a);
    }
    function O() {
      return (
        setTimeout(function () {
          ft = void 0;
        }),
        (ft = re.now())
      );
    }
    function P(e, t) {
      var n,
        i = { height: e },
        a = 0;
      for (t = t ? 1 : 0; 4 > a; a += 2 - t)
        (n = Ie[a]), (i["margin" + n] = i["padding" + n] = e);
      return t && (i.opacity = i.width = e), i;
    }
    function M(e, t, n) {
      for (
        var i, a = (yt[t] || []).concat(yt["*"]), r = 0, o = a.length;
        o > r;
        r++
      )
        if ((i = a[r].call(n, t, e))) return i;
    }
    function B(e, t, n) {
      var i,
        a,
        r,
        o,
        s,
        l,
        p,
        c,
        d = this,
        u = {},
        f = e.style,
        h = e.nodeType && Ae(e),
        m = re._data(e, "fxshow");
      n.queue ||
        ((s = re._queueHooks(e, "fx")),
        null == s.unqueued &&
          ((s.unqueued = 0),
          (l = s.empty.fire),
          (s.empty.fire = function () {
            s.unqueued || l();
          })),
        s.unqueued++,
        d.always(function () {
          d.always(function () {
            s.unqueued--, re.queue(e, "fx").length || s.empty.fire();
          });
        })),
        1 === e.nodeType &&
          ("height" in t || "width" in t) &&
          ((n.overflow = [f.overflow, f.overflowX, f.overflowY]),
          (p = re.css(e, "display")),
          (c = k(e.nodeName)),
          "none" === p && (p = c),
          "inline" === p &&
            "none" === re.css(e, "float") &&
            (ie.inlineBlockNeedsLayout && "inline" !== c
              ? (f.zoom = 1)
              : (f.display = "inline-block"))),
        n.overflow &&
          ((f.overflow = "hidden"),
          ie.shrinkWrapBlocks() ||
            d.always(function () {
              (f.overflow = n.overflow[0]),
                (f.overflowX = n.overflow[1]),
                (f.overflowY = n.overflow[2]);
            }));
      for (i in t)
        if (((a = t[i]), mt.exec(a))) {
          if (
            (delete t[i],
            (r = r || "toggle" === a),
            a === (h ? "hide" : "show"))
          ) {
            if ("show" !== a || !m || void 0 === m[i]) continue;
            h = !0;
          }
          u[i] = (m && m[i]) || re.style(e, i);
        }
      if (!re.isEmptyObject(u)) {
        m ? "hidden" in m && (h = m.hidden) : (m = re._data(e, "fxshow", {})),
          r && (m.hidden = !h),
          h
            ? re(e).show()
            : d.done(function () {
                re(e).hide();
              }),
          d.done(function () {
            var t;
            re._removeData(e, "fxshow");
            for (t in u) re.style(e, t, u[t]);
          });
        for (i in u)
          (o = M(h ? m[i] : 0, i, d)),
            i in m ||
              ((m[i] = o.start),
              h &&
                ((o.end = o.start),
                (o.start = "width" === i || "height" === i ? 1 : 0)));
      }
    }
    function R(e, t) {
      var n, i, a, r, o;
      for (n in e)
        if (
          ((i = re.camelCase(n)),
          (a = t[i]),
          (r = e[n]),
          re.isArray(r) && ((a = r[1]), (r = e[n] = r[0])),
          n !== i && ((e[i] = r), delete e[n]),
          (o = re.cssHooks[i]) && "expand" in o)
        ) {
          (r = o.expand(r)), delete e[i];
          for (n in r) n in e || ((e[n] = r[n]), (t[n] = a));
        } else t[i] = a;
    }
    function z(e, t, n) {
      var i,
        a,
        r = 0,
        o = bt.length,
        s = re.Deferred().always(function () {
          delete l.elem;
        }),
        l = function () {
          if (a) return !1;
          for (
            var t = ft || O(),
              n = Math.max(0, p.startTime + p.duration - t),
              i = n / p.duration || 0,
              r = 1 - i,
              o = 0,
              l = p.tweens.length;
            l > o;
            o++
          )
            p.tweens[o].run(r);
          return (
            s.notifyWith(e, [p, r, n]),
            1 > r && l ? n : (s.resolveWith(e, [p]), !1)
          );
        },
        p = s.promise({
          elem: e,
          props: re.extend({}, t),
          opts: re.extend(!0, { specialEasing: {} }, n),
          originalProperties: t,
          originalOptions: n,
          startTime: ft || O(),
          duration: n.duration,
          tweens: [],
          createTween: function (t, n) {
            var i = re.Tween(
              e,
              p.opts,
              t,
              n,
              p.opts.specialEasing[t] || p.opts.easing
            );
            return p.tweens.push(i), i;
          },
          stop: function (t) {
            var n = 0,
              i = t ? p.tweens.length : 0;
            if (a) return this;
            for (a = !0; i > n; n++) p.tweens[n].run(1);
            return t ? s.resolveWith(e, [p, t]) : s.rejectWith(e, [p, t]), this;
          },
        }),
        c = p.props;
      for (R(c, p.opts.specialEasing); o > r; r++)
        if ((i = bt[r].call(p, e, c, p.opts))) return i;
      return (
        re.map(c, M, p),
        re.isFunction(p.opts.start) && p.opts.start.call(e, p),
        re.fx.timer(re.extend(l, { elem: e, anim: p, queue: p.opts.queue })),
        p
          .progress(p.opts.progress)
          .done(p.opts.done, p.opts.complete)
          .fail(p.opts.fail)
          .always(p.opts.always)
      );
    }
    function N(e) {
      return function (t, n) {
        "string" != typeof t && ((n = t), (t = "*"));
        var i,
          a = 0,
          r = t.toLowerCase().match(ye) || [];
        if (re.isFunction(n))
          for (; (i = r[a++]); )
            "+" === i.charAt(0)
              ? ((i = i.slice(1) || "*"), (e[i] = e[i] || []).unshift(n))
              : (e[i] = e[i] || []).push(n);
      };
    }
    function j(e, t, n, i) {
      function a(s) {
        var l;
        return (
          (r[s] = !0),
          re.each(e[s] || [], function (e, s) {
            var p = s(t, n, i);
            return "string" != typeof p || o || r[p]
              ? o
                ? !(l = p)
                : void 0
              : (t.dataTypes.unshift(p), a(p), !1);
          }),
          l
        );
      }
      var r = {},
        o = e === Ft;
      return a(t.dataTypes[0]) || (!r["*"] && a("*"));
    }
    function H(e, t) {
      var n,
        i,
        a = re.ajaxSettings.flatOptions || {};
      for (i in t) void 0 !== t[i] && ((a[i] ? e : n || (n = {}))[i] = t[i]);
      return n && re.extend(!0, e, n), e;
    }
    function W(e, t, n) {
      for (var i, a, r, o, s = e.contents, l = e.dataTypes; "*" === l[0]; )
        l.shift(),
          void 0 === a &&
            (a = e.mimeType || t.getResponseHeader("Content-Type"));
      if (a)
        for (o in s)
          if (s[o] && s[o].test(a)) {
            l.unshift(o);
            break;
          }
      if (l[0] in n) r = l[0];
      else {
        for (o in n) {
          if (!l[0] || e.converters[o + " " + l[0]]) {
            r = o;
            break;
          }
          i || (i = o);
        }
        r = r || i;
      }
      return r ? (r !== l[0] && l.unshift(r), n[r]) : void 0;
    }
    function F(e, t, n, i) {
      var a,
        r,
        o,
        s,
        l,
        p = {},
        c = e.dataTypes.slice();
      if (c[1]) for (o in e.converters) p[o.toLowerCase()] = e.converters[o];
      for (r = c.shift(); r; )
        if (
          (e.responseFields[r] && (n[e.responseFields[r]] = t),
          !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
          (l = r),
          (r = c.shift()))
        )
          if ("*" === r) r = l;
          else if ("*" !== l && l !== r) {
            if (!(o = p[l + " " + r] || p["* " + r]))
              for (a in p)
                if (
                  ((s = a.split(" ")),
                  s[1] === r && (o = p[l + " " + s[0]] || p["* " + s[0]]))
                ) {
                  !0 === o
                    ? (o = p[a])
                    : !0 !== p[a] && ((r = s[0]), c.unshift(s[1]));
                  break;
                }
            if (!0 !== o)
              if (o && e.throws) t = o(t);
              else
                try {
                  t = o(t);
                } catch (e) {
                  return {
                    state: "parsererror",
                    error: o ? e : "No conversion from " + l + " to " + r,
                  };
                }
          }
      return { state: "success", data: t };
    }
    function U(e, t, n, i) {
      var a;
      if (re.isArray(t))
        re.each(t, function (t, a) {
          n || qt.test(e)
            ? i(e, a)
            : U(e + "[" + ("object" == typeof a ? t : "") + "]", a, n, i);
        });
      else if (n || "object" !== re.type(t)) i(e, t);
      else for (a in t) U(e + "[" + a + "]", t[a], n, i);
    }
    function G() {
      try {
        return new e.XMLHttpRequest();
      } catch (e) {}
    }
    function q() {
      try {
        return new e.ActiveXObject("Microsoft.XMLHTTP");
      } catch (e) {}
    }
    function V(e) {
      return re.isWindow(e)
        ? e
        : 9 === e.nodeType && (e.defaultView || e.parentWindow);
    }
    var X = [],
      Y = X.slice,
      K = X.concat,
      Q = X.push,
      J = X.indexOf,
      Z = {},
      ee = Z.toString,
      te = Z.hasOwnProperty,
      ne = "".trim,
      ie = {},
      ae = "1.11.0",
      re = function (e, t) {
        return new re.fn.init(e, t);
      },
      oe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      se = /^-ms-/,
      le = /-([\da-z])/gi,
      pe = function (e, t) {
        return t.toUpperCase();
      };
    (re.fn = re.prototype =
      {
        jquery: ae,
        constructor: re,
        selector: "",
        length: 0,
        toArray: function () {
          return Y.call(this);
        },
        get: function (e) {
          return null != e
            ? 0 > e
              ? this[e + this.length]
              : this[e]
            : Y.call(this);
        },
        pushStack: function (e) {
          var t = re.merge(this.constructor(), e);
          return (t.prevObject = this), (t.context = this.context), t;
        },
        each: function (e, t) {
          return re.each(this, e, t);
        },
        map: function (e) {
          return this.pushStack(
            re.map(this, function (t, n) {
              return e.call(t, n, t);
            })
          );
        },
        slice: function () {
          return this.pushStack(Y.apply(this, arguments));
        },
        first: function () {
          return this.eq(0);
        },
        last: function () {
          return this.eq(-1);
        },
        eq: function (e) {
          var t = this.length,
            n = +e + (0 > e ? t : 0);
          return this.pushStack(n >= 0 && t > n ? [this[n]] : []);
        },
        end: function () {
          return this.prevObject || this.constructor(null);
        },
        push: Q,
        sort: X.sort,
        splice: X.splice,
      }),
      (re.extend = re.fn.extend =
        function () {
          var e,
            t,
            n,
            i,
            a,
            r,
            o = arguments[0] || {},
            s = 1,
            l = arguments.length,
            p = !1;
          for (
            "boolean" == typeof o && ((p = o), (o = arguments[s] || {}), s++),
              "object" == typeof o || re.isFunction(o) || (o = {}),
              s === l && ((o = this), s--);
            l > s;
            s++
          )
            if (null != (a = arguments[s]))
              for (i in a)
                (e = o[i]),
                  (n = a[i]),
                  o !== n &&
                    (p && n && (re.isPlainObject(n) || (t = re.isArray(n)))
                      ? (t
                          ? ((t = !1), (r = e && re.isArray(e) ? e : []))
                          : (r = e && re.isPlainObject(e) ? e : {}),
                        (o[i] = re.extend(p, r, n)))
                      : void 0 !== n && (o[i] = n));
          return o;
        }),
      re.extend({
        expando: "jQuery" + (ae + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (e) {
          throw new Error(e);
        },
        noop: function () {},
        isFunction: function (e) {
          return "function" === re.type(e);
        },
        isArray:
          Array.isArray ||
          function (e) {
            return "array" === re.type(e);
          },
        isWindow: function (e) {
          return null != e && e == e.window;
        },
        isNumeric: function (e) {
          return e - parseFloat(e) >= 0;
        },
        isEmptyObject: function (e) {
          var t;
          for (t in e) return !1;
          return !0;
        },
        isPlainObject: function (e) {
          var t;
          if (!e || "object" !== re.type(e) || e.nodeType || re.isWindow(e))
            return !1;
          try {
            if (
              e.constructor &&
              !te.call(e, "constructor") &&
              !te.call(e.constructor.prototype, "isPrototypeOf")
            )
              return !1;
          } catch (e) {
            return !1;
          }
          if (ie.ownLast) for (t in e) return te.call(e, t);
          for (t in e);
          return void 0 === t || te.call(e, t);
        },
        type: function (e) {
          return null == e
            ? e + ""
            : "object" == typeof e || "function" == typeof e
            ? Z[ee.call(e)] || "object"
            : typeof e;
        },
        globalEval: function (t) {
          t &&
            re.trim(t) &&
            (
              e.execScript ||
              function (t) {
                e.eval.call(e, t);
              }
            )(t);
        },
        camelCase: function (e) {
          return e.replace(se, "ms-").replace(le, pe);
        },
        nodeName: function (e, t) {
          return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
        },
        each: function (e, t, i) {
          var a = 0,
            r = e.length,
            o = n(e);
          if (i) {
            if (o) for (; r > a && !1 !== t.apply(e[a], i); a++);
            else for (a in e) if (!1 === t.apply(e[a], i)) break;
          } else if (o) for (; r > a && !1 !== t.call(e[a], a, e[a]); a++);
          else for (a in e) if (!1 === t.call(e[a], a, e[a])) break;
          return e;
        },
        trim:
          ne && !ne.call("\ufeff ")
            ? function (e) {
                return null == e ? "" : ne.call(e);
              }
            : function (e) {
                return null == e ? "" : (e + "").replace(oe, "");
              },
        makeArray: function (e, t) {
          var i = t || [];
          return (
            null != e &&
              (n(Object(e))
                ? re.merge(i, "string" == typeof e ? [e] : e)
                : Q.call(i, e)),
            i
          );
        },
        inArray: function (e, t, n) {
          var i;
          if (t) {
            if (J) return J.call(t, e, n);
            for (
              i = t.length, n = n ? (0 > n ? Math.max(0, i + n) : n) : 0;
              i > n;
              n++
            )
              if (n in t && t[n] === e) return n;
          }
          return -1;
        },
        merge: function (e, t) {
          for (var n = +t.length, i = 0, a = e.length; n > i; ) e[a++] = t[i++];
          if (n !== n) for (; void 0 !== t[i]; ) e[a++] = t[i++];
          return (e.length = a), e;
        },
        grep: function (e, t, n) {
          for (var i = [], a = 0, r = e.length, o = !n; r > a; a++)
            !t(e[a], a) !== o && i.push(e[a]);
          return i;
        },
        map: function (e, t, i) {
          var a,
            r = 0,
            o = e.length,
            s = n(e),
            l = [];
          if (s) for (; o > r; r++) null != (a = t(e[r], r, i)) && l.push(a);
          else for (r in e) null != (a = t(e[r], r, i)) && l.push(a);
          return K.apply([], l);
        },
        guid: 1,
        proxy: function (e, t) {
          var n, i, a;
          return (
            "string" == typeof t && ((a = e[t]), (t = e), (e = a)),
            re.isFunction(e)
              ? ((n = Y.call(arguments, 2)),
                (i = function () {
                  return e.apply(t || this, n.concat(Y.call(arguments)));
                }),
                (i.guid = e.guid = e.guid || re.guid++),
                i)
              : void 0
          );
        },
        now: function () {
          return +new Date();
        },
        support: ie,
      }),
      re.each(
        "Boolean Number String Function Array Date RegExp Object Error".split(
          " "
        ),
        function (e, t) {
          Z["[object " + t + "]"] = t.toLowerCase();
        }
      );
    var ce = (function (e) {
      function t(e, t, n, i) {
        var a, r, o, s, p, u, f, h, m, g;
        if (
          ((t ? t.ownerDocument || t : z) !== $ && L(t),
          (t = t || $),
          (n = n || []),
          !e || "string" != typeof e)
        )
          return n;
        if (1 !== (s = t.nodeType) && 9 !== s) return [];
        if (D && !i) {
          if ((a = ge.exec(e)))
            if ((o = a[1])) {
              if (9 === s) {
                if (!(r = t.getElementById(o)) || !r.parentNode) return n;
                if (r.id === o) return n.push(r), n;
              } else if (
                t.ownerDocument &&
                (r = t.ownerDocument.getElementById(o)) &&
                B(t, r) &&
                r.id === o
              )
                return n.push(r), n;
            } else {
              if (a[2]) return Q.apply(n, t.getElementsByTagName(e)), n;
              if (
                (o = a[3]) &&
                x.getElementsByClassName &&
                t.getElementsByClassName
              )
                return Q.apply(n, t.getElementsByClassName(o)), n;
            }
          if (x.qsa && (!O || !O.test(e))) {
            if (
              ((h = f = R),
              (m = t),
              (g = 9 === s && e),
              1 === s && "object" !== t.nodeName.toLowerCase())
            ) {
              for (
                u = c(e),
                  (f = t.getAttribute("id"))
                    ? (h = f.replace(be, "\\$&"))
                    : t.setAttribute("id", h),
                  h = "[id='" + h + "'] ",
                  p = u.length;
                p--;

              )
                u[p] = h + d(u[p]);
              (m = (ve.test(e) && l(t.parentNode)) || t), (g = u.join(","));
            }
            if (g)
              try {
                return Q.apply(n, m.querySelectorAll(g)), n;
              } catch (e) {
              } finally {
                f || t.removeAttribute("id");
              }
          }
        }
        return y(e.replace(oe, "$1"), t, n, i);
      }
      function n() {
        function e(n, i) {
          return (
            t.push(n + " ") > C.cacheLength && delete e[t.shift()],
            (e[n + " "] = i)
          );
        }
        var t = [];
        return e;
      }
      function i(e) {
        return (e[R] = !0), e;
      }
      function a(e) {
        var t = $.createElement("div");
        try {
          return !!e(t);
        } catch (e) {
          return !1;
        } finally {
          t.parentNode && t.parentNode.removeChild(t), (t = null);
        }
      }
      function r(e, t) {
        for (var n = e.split("|"), i = e.length; i--; ) C.attrHandle[n[i]] = t;
      }
      function o(e, t) {
        var n = t && e,
          i =
            n &&
            1 === e.nodeType &&
            1 === t.nodeType &&
            (~t.sourceIndex || q) - (~e.sourceIndex || q);
        if (i) return i;
        if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
        return e ? 1 : -1;
      }
      function s(e) {
        return i(function (t) {
          return (
            (t = +t),
            i(function (n, i) {
              for (var a, r = e([], n.length, t), o = r.length; o--; )
                n[(a = r[o])] && (n[a] = !(i[a] = n[a]));
            })
          );
        });
      }
      function l(e) {
        return e && typeof e.getElementsByTagName !== G && e;
      }
      function p() {}
      function c(e, n) {
        var i,
          a,
          r,
          o,
          s,
          l,
          p,
          c = W[e + " "];
        if (c) return n ? 0 : c.slice(0);
        for (s = e, l = [], p = C.preFilter; s; ) {
          (!i || (a = se.exec(s))) &&
            (a && (s = s.slice(a[0].length) || s), l.push((r = []))),
            (i = !1),
            (a = le.exec(s)) &&
              ((i = a.shift()),
              r.push({ value: i, type: a[0].replace(oe, " ") }),
              (s = s.slice(i.length)));
          for (o in C.filter)
            !(a = ue[o].exec(s)) ||
              (p[o] && !(a = p[o](a))) ||
              ((i = a.shift()),
              r.push({ value: i, type: o, matches: a }),
              (s = s.slice(i.length)));
          if (!i) break;
        }
        return n ? s.length : s ? t.error(e) : W(e, l).slice(0);
      }
      function d(e) {
        for (var t = 0, n = e.length, i = ""; n > t; t++) i += e[t].value;
        return i;
      }
      function u(e, t, n) {
        var i = t.dir,
          a = n && "parentNode" === i,
          r = j++;
        return t.first
          ? function (t, n, r) {
              for (; (t = t[i]); ) if (1 === t.nodeType || a) return e(t, n, r);
            }
          : function (t, n, o) {
              var s,
                l,
                p = [N, r];
              if (o) {
                for (; (t = t[i]); )
                  if ((1 === t.nodeType || a) && e(t, n, o)) return !0;
              } else
                for (; (t = t[i]); )
                  if (1 === t.nodeType || a) {
                    if (
                      ((l = t[R] || (t[R] = {})),
                      (s = l[i]) && s[0] === N && s[1] === r)
                    )
                      return (p[2] = s[2]);
                    if (((l[i] = p), (p[2] = e(t, n, o)))) return !0;
                  }
            };
      }
      function f(e) {
        return e.length > 1
          ? function (t, n, i) {
              for (var a = e.length; a--; ) if (!e[a](t, n, i)) return !1;
              return !0;
            }
          : e[0];
      }
      function h(e, t, n, i, a) {
        for (var r, o = [], s = 0, l = e.length, p = null != t; l > s; s++)
          (r = e[s]) && (!n || n(r, i, a)) && (o.push(r), p && t.push(s));
        return o;
      }
      function m(e, t, n, a, r, o) {
        return (
          a && !a[R] && (a = m(a)),
          r && !r[R] && (r = m(r, o)),
          i(function (i, o, s, l) {
            var p,
              c,
              d,
              u = [],
              f = [],
              m = o.length,
              g = i || b(t || "*", s.nodeType ? [s] : s, []),
              v = !e || (!i && t) ? g : h(g, u, e, s, l),
              y = n ? (r || (i ? e : m || a) ? [] : o) : v;
            if ((n && n(v, y, s, l), a))
              for (p = h(y, f), a(p, [], s, l), c = p.length; c--; )
                (d = p[c]) && (y[f[c]] = !(v[f[c]] = d));
            if (i) {
              if (r || e) {
                if (r) {
                  for (p = [], c = y.length; c--; )
                    (d = y[c]) && p.push((v[c] = d));
                  r(null, (y = []), p, l);
                }
                for (c = y.length; c--; )
                  (d = y[c]) &&
                    (p = r ? Z.call(i, d) : u[c]) > -1 &&
                    (i[p] = !(o[p] = d));
              }
            } else (y = h(y === o ? y.splice(m, y.length) : y)), r ? r(null, o, y, l) : Q.apply(o, y);
          })
        );
      }
      function g(e) {
        for (
          var t,
            n,
            i,
            a = e.length,
            r = C.relative[e[0].type],
            o = r || C.relative[" "],
            s = r ? 1 : 0,
            l = u(
              function (e) {
                return e === t;
              },
              o,
              !0
            ),
            p = u(
              function (e) {
                return Z.call(t, e) > -1;
              },
              o,
              !0
            ),
            c = [
              function (e, n, i) {
                return (
                  (!r && (i || n !== E)) ||
                  ((t = n).nodeType ? l(e, n, i) : p(e, n, i))
                );
              },
            ];
          a > s;
          s++
        )
          if ((n = C.relative[e[s].type])) c = [u(f(c), n)];
          else {
            if (((n = C.filter[e[s].type].apply(null, e[s].matches)), n[R])) {
              for (i = ++s; a > i && !C.relative[e[i].type]; i++);
              return m(
                s > 1 && f(c),
                s > 1 &&
                  d(
                    e
                      .slice(0, s - 1)
                      .concat({ value: " " === e[s - 2].type ? "*" : "" })
                  ).replace(oe, "$1"),
                n,
                i > s && g(e.slice(s, i)),
                a > i && g((e = e.slice(i))),
                a > i && d(e)
              );
            }
            c.push(n);
          }
        return f(c);
      }
      function v(e, n) {
        var a = n.length > 0,
          r = e.length > 0,
          o = function (i, o, s, l, p) {
            var c,
              d,
              u,
              f = 0,
              m = "0",
              g = i && [],
              v = [],
              b = E,
              y = i || (r && C.find.TAG("*", p)),
              w = (N += null == b ? 1 : Math.random() || 0.1),
              x = y.length;
            for (p && (E = o !== $ && o); m !== x && null != (c = y[m]); m++) {
              if (r && c) {
                for (d = 0; (u = e[d++]); )
                  if (u(c, o, s)) {
                    l.push(c);
                    break;
                  }
                p && (N = w);
              }
              a && ((c = !u && c) && f--, i && g.push(c));
            }
            if (((f += m), a && m !== f)) {
              for (d = 0; (u = n[d++]); ) u(g, v, o, s);
              if (i) {
                if (f > 0) for (; m--; ) g[m] || v[m] || (v[m] = Y.call(l));
                v = h(v);
              }
              Q.apply(l, v),
                p && !i && v.length > 0 && f + n.length > 1 && t.uniqueSort(l);
            }
            return p && ((N = w), (E = b)), g;
          };
        return a ? i(o) : o;
      }
      function b(e, n, i) {
        for (var a = 0, r = n.length; r > a; a++) t(e, n[a], i);
        return i;
      }
      function y(e, t, n, i) {
        var a,
          r,
          o,
          s,
          p,
          u = c(e);
        if (!i && 1 === u.length) {
          if (
            ((r = u[0] = u[0].slice(0)),
            r.length > 2 &&
              "ID" === (o = r[0]).type &&
              x.getById &&
              9 === t.nodeType &&
              D &&
              C.relative[r[1].type])
          ) {
            if (!(t = (C.find.ID(o.matches[0].replace(ye, we), t) || [])[0]))
              return n;
            e = e.slice(r.shift().value.length);
          }
          for (
            a = ue.needsContext.test(e) ? 0 : r.length;
            a-- && ((o = r[a]), !C.relative[(s = o.type)]);

          )
            if (
              (p = C.find[s]) &&
              (i = p(
                o.matches[0].replace(ye, we),
                (ve.test(r[0].type) && l(t.parentNode)) || t
              ))
            ) {
              if ((r.splice(a, 1), !(e = i.length && d(r))))
                return Q.apply(n, i), n;
              break;
            }
        }
        return k(e, u)(i, t, !D, n, (ve.test(e) && l(t.parentNode)) || t), n;
      }
      var w,
        x,
        C,
        T,
        S,
        k,
        E,
        I,
        A,
        L,
        $,
        _,
        D,
        O,
        P,
        M,
        B,
        R = "sizzle" + -new Date(),
        z = e.document,
        N = 0,
        j = 0,
        H = n(),
        W = n(),
        F = n(),
        U = function (e, t) {
          return e === t && (A = !0), 0;
        },
        G = "undefined",
        q = 1 << 31,
        V = {}.hasOwnProperty,
        X = [],
        Y = X.pop,
        K = X.push,
        Q = X.push,
        J = X.slice,
        Z =
          X.indexOf ||
          function (e) {
            for (var t = 0, n = this.length; n > t; t++)
              if (this[t] === e) return t;
            return -1;
          },
        ee =
          "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        te = "[\\x20\\t\\r\\n\\f]",
        ne = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        ie = ne.replace("w", "w#"),
        ae =
          "\\[" +
          te +
          "*(" +
          ne +
          ")" +
          te +
          "*(?:([*^$|!~]?=)" +
          te +
          "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" +
          ie +
          ")|)|)" +
          te +
          "*\\]",
        re =
          ":(" +
          ne +
          ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" +
          ae.replace(3, 8) +
          ")*)|.*)\\)|)",
        oe = new RegExp(
          "^" + te + "+|((?:^|[^\\\\])(?:\\\\.)*)" + te + "+$",
          "g"
        ),
        se = new RegExp("^" + te + "*," + te + "*"),
        le = new RegExp("^" + te + "*([>+~]|" + te + ")" + te + "*"),
        pe = new RegExp("=" + te + "*([^\\]'\"]*?)" + te + "*\\]", "g"),
        ce = new RegExp(re),
        de = new RegExp("^" + ie + "$"),
        ue = {
          ID: new RegExp("^#(" + ne + ")"),
          CLASS: new RegExp("^\\.(" + ne + ")"),
          TAG: new RegExp("^(" + ne.replace("w", "w*") + ")"),
          ATTR: new RegExp("^" + ae),
          PSEUDO: new RegExp("^" + re),
          CHILD: new RegExp(
            "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
              te +
              "*(even|odd|(([+-]|)(\\d*)n|)" +
              te +
              "*(?:([+-]|)" +
              te +
              "*(\\d+)|))" +
              te +
              "*\\)|)",
            "i"
          ),
          bool: new RegExp("^(?:" + ee + ")$", "i"),
          needsContext: new RegExp(
            "^" +
              te +
              "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
              te +
              "*((?:-\\d)?\\d*)" +
              te +
              "*\\)|)(?=[^-]|$)",
            "i"
          ),
        },
        fe = /^(?:input|select|textarea|button)$/i,
        he = /^h\d$/i,
        me = /^[^{]+\{\s*\[native \w/,
        ge = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        ve = /[+~]/,
        be = /'|\\/g,
        ye = new RegExp("\\\\([\\da-f]{1,6}" + te + "?|(" + te + ")|.)", "ig"),
        we = function (e, t, n) {
          var i = "0x" + t - 65536;
          return i !== i || n
            ? t
            : 0 > i
            ? String.fromCharCode(i + 65536)
            : String.fromCharCode((i >> 10) | 55296, (1023 & i) | 56320);
        };
      try {
        Q.apply((X = J.call(z.childNodes)), z.childNodes),
          X[z.childNodes.length].nodeType;
      } catch (e) {
        Q = {
          apply: X.length
            ? function (e, t) {
                K.apply(e, J.call(t));
              }
            : function (e, t) {
                for (var n = e.length, i = 0; (e[n++] = t[i++]); );
                e.length = n - 1;
              },
        };
      }
      (x = t.support = {}),
        (S = t.isXML =
          function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName;
          }),
        (L = t.setDocument =
          function (e) {
            var t,
              n = e ? e.ownerDocument || e : z,
              i = n.defaultView;
            return n !== $ && 9 === n.nodeType && n.documentElement
              ? (($ = n),
                (_ = n.documentElement),
                (D = !S(n)),
                i &&
                  i !== i.top &&
                  (i.addEventListener
                    ? i.addEventListener(
                        "unload",
                        function () {
                          L();
                        },
                        !1
                      )
                    : i.attachEvent &&
                      i.attachEvent("onunload", function () {
                        L();
                      })),
                (x.attributes = a(function (e) {
                  return (e.className = "i"), !e.getAttribute("className");
                })),
                (x.getElementsByTagName = a(function (e) {
                  return (
                    e.appendChild(n.createComment("")),
                    !e.getElementsByTagName("*").length
                  );
                })),
                (x.getElementsByClassName =
                  me.test(n.getElementsByClassName) &&
                  a(function (e) {
                    return (
                      (e.innerHTML =
                        "<div class='a'></div><div class='a i'></div>"),
                      (e.firstChild.className = "i"),
                      2 === e.getElementsByClassName("i").length
                    );
                  })),
                (x.getById = a(function (e) {
                  return (
                    (_.appendChild(e).id = R),
                    !n.getElementsByName || !n.getElementsByName(R).length
                  );
                })),
                x.getById
                  ? ((C.find.ID = function (e, t) {
                      if (typeof t.getElementById !== G && D) {
                        var n = t.getElementById(e);
                        return n && n.parentNode ? [n] : [];
                      }
                    }),
                    (C.filter.ID = function (e) {
                      var t = e.replace(ye, we);
                      return function (e) {
                        return e.getAttribute("id") === t;
                      };
                    }))
                  : (delete C.find.ID,
                    (C.filter.ID = function (e) {
                      var t = e.replace(ye, we);
                      return function (e) {
                        var n =
                          typeof e.getAttributeNode !== G &&
                          e.getAttributeNode("id");
                        return n && n.value === t;
                      };
                    })),
                (C.find.TAG = x.getElementsByTagName
                  ? function (e, t) {
                      return typeof t.getElementsByTagName !== G
                        ? t.getElementsByTagName(e)
                        : void 0;
                    }
                  : function (e, t) {
                      var n,
                        i = [],
                        a = 0,
                        r = t.getElementsByTagName(e);
                      if ("*" === e) {
                        for (; (n = r[a++]); ) 1 === n.nodeType && i.push(n);
                        return i;
                      }
                      return r;
                    }),
                (C.find.CLASS =
                  x.getElementsByClassName &&
                  function (e, t) {
                    return typeof t.getElementsByClassName !== G && D
                      ? t.getElementsByClassName(e)
                      : void 0;
                  }),
                (P = []),
                (O = []),
                (x.qsa = me.test(n.querySelectorAll)) &&
                  (a(function (e) {
                    (e.innerHTML =
                      "<select t=''><option selected=''></option></select>"),
                      e.querySelectorAll("[t^='']").length &&
                        O.push("[*^$]=" + te + "*(?:''|\"\")"),
                      e.querySelectorAll("[selected]").length ||
                        O.push("\\[" + te + "*(?:value|" + ee + ")"),
                      e.querySelectorAll(":checked").length ||
                        O.push(":checked");
                  }),
                  a(function (e) {
                    var t = n.createElement("input");
                    t.setAttribute("type", "hidden"),
                      e.appendChild(t).setAttribute("name", "D"),
                      e.querySelectorAll("[name=d]").length &&
                        O.push("name" + te + "*[*^$|!~]?="),
                      e.querySelectorAll(":enabled").length ||
                        O.push(":enabled", ":disabled"),
                      e.querySelectorAll("*,:x"),
                      O.push(",.*:");
                  })),
                (x.matchesSelector = me.test(
                  (M =
                    _.webkitMatchesSelector ||
                    _.mozMatchesSelector ||
                    _.oMatchesSelector ||
                    _.msMatchesSelector)
                )) &&
                  a(function (e) {
                    (x.disconnectedMatch = M.call(e, "div")),
                      M.call(e, "[s!='']:x"),
                      P.push("!=", re);
                  }),
                (O = O.length && new RegExp(O.join("|"))),
                (P = P.length && new RegExp(P.join("|"))),
                (t = me.test(_.compareDocumentPosition)),
                (B =
                  t || me.test(_.contains)
                    ? function (e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e,
                          i = t && t.parentNode;
                        return (
                          e === i ||
                          !(
                            !i ||
                            1 !== i.nodeType ||
                            !(n.contains
                              ? n.contains(i)
                              : e.compareDocumentPosition &&
                                16 & e.compareDocumentPosition(i))
                          )
                        );
                      }
                    : function (e, t) {
                        if (t)
                          for (; (t = t.parentNode); ) if (t === e) return !0;
                        return !1;
                      }),
                (U = t
                  ? function (e, t) {
                      if (e === t) return (A = !0), 0;
                      var i =
                        !e.compareDocumentPosition - !t.compareDocumentPosition;
                      return (
                        i ||
                        ((i =
                          (e.ownerDocument || e) === (t.ownerDocument || t)
                            ? e.compareDocumentPosition(t)
                            : 1),
                        1 & i ||
                        (!x.sortDetached && t.compareDocumentPosition(e) === i)
                          ? e === n || (e.ownerDocument === z && B(z, e))
                            ? -1
                            : t === n || (t.ownerDocument === z && B(z, t))
                            ? 1
                            : I
                            ? Z.call(I, e) - Z.call(I, t)
                            : 0
                          : 4 & i
                          ? -1
                          : 1)
                      );
                    }
                  : function (e, t) {
                      if (e === t) return (A = !0), 0;
                      var i,
                        a = 0,
                        r = e.parentNode,
                        s = t.parentNode,
                        l = [e],
                        p = [t];
                      if (!r || !s)
                        return e === n
                          ? -1
                          : t === n
                          ? 1
                          : r
                          ? -1
                          : s
                          ? 1
                          : I
                          ? Z.call(I, e) - Z.call(I, t)
                          : 0;
                      if (r === s) return o(e, t);
                      for (i = e; (i = i.parentNode); ) l.unshift(i);
                      for (i = t; (i = i.parentNode); ) p.unshift(i);
                      for (; l[a] === p[a]; ) a++;
                      return a
                        ? o(l[a], p[a])
                        : l[a] === z
                        ? -1
                        : p[a] === z
                        ? 1
                        : 0;
                    }),
                n)
              : $;
          }),
        (t.matches = function (e, n) {
          return t(e, null, null, n);
        }),
        (t.matchesSelector = function (e, n) {
          if (
            ((e.ownerDocument || e) !== $ && L(e),
            (n = n.replace(pe, "='$1']")),
            !(!x.matchesSelector || !D || (P && P.test(n)) || (O && O.test(n))))
          )
            try {
              var i = M.call(e, n);
              if (
                i ||
                x.disconnectedMatch ||
                (e.document && 11 !== e.document.nodeType)
              )
                return i;
            } catch (e) {}
          return t(n, $, null, [e]).length > 0;
        }),
        (t.contains = function (e, t) {
          return (e.ownerDocument || e) !== $ && L(e), B(e, t);
        }),
        (t.attr = function (e, t) {
          (e.ownerDocument || e) !== $ && L(e);
          var n = C.attrHandle[t.toLowerCase()],
            i =
              n && V.call(C.attrHandle, t.toLowerCase()) ? n(e, t, !D) : void 0;
          return void 0 !== i
            ? i
            : x.attributes || !D
            ? e.getAttribute(t)
            : (i = e.getAttributeNode(t)) && i.specified
            ? i.value
            : null;
        }),
        (t.error = function (e) {
          throw new Error("Syntax error, unrecognized expression: " + e);
        }),
        (t.uniqueSort = function (e) {
          var t,
            n = [],
            i = 0,
            a = 0;
          if (
            ((A = !x.detectDuplicates),
            (I = !x.sortStable && e.slice(0)),
            e.sort(U),
            A)
          ) {
            for (; (t = e[a++]); ) t === e[a] && (i = n.push(a));
            for (; i--; ) e.splice(n[i], 1);
          }
          return (I = null), e;
        }),
        (T = t.getText =
          function (e) {
            var t,
              n = "",
              i = 0,
              a = e.nodeType;
            if (a) {
              if (1 === a || 9 === a || 11 === a) {
                if ("string" == typeof e.textContent) return e.textContent;
                for (e = e.firstChild; e; e = e.nextSibling) n += T(e);
              } else if (3 === a || 4 === a) return e.nodeValue;
            } else for (; (t = e[i++]); ) n += T(t);
            return n;
          }),
        (C = t.selectors =
          {
            cacheLength: 50,
            createPseudo: i,
            match: ue,
            attrHandle: {},
            find: {},
            relative: {
              ">": { dir: "parentNode", first: !0 },
              " ": { dir: "parentNode" },
              "+": { dir: "previousSibling", first: !0 },
              "~": { dir: "previousSibling" },
            },
            preFilter: {
              ATTR: function (e) {
                return (
                  (e[1] = e[1].replace(ye, we)),
                  (e[3] = (e[4] || e[5] || "").replace(ye, we)),
                  "~=" === e[2] && (e[3] = " " + e[3] + " "),
                  e.slice(0, 4)
                );
              },
              CHILD: function (e) {
                return (
                  (e[1] = e[1].toLowerCase()),
                  "nth" === e[1].slice(0, 3)
                    ? (e[3] || t.error(e[0]),
                      (e[4] = +(e[4]
                        ? e[5] + (e[6] || 1)
                        : 2 * ("even" === e[3] || "odd" === e[3]))),
                      (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                    : e[3] && t.error(e[0]),
                  e
                );
              },
              PSEUDO: function (e) {
                var t,
                  n = !e[5] && e[2];
                return ue.CHILD.test(e[0])
                  ? null
                  : (e[3] && void 0 !== e[4]
                      ? (e[2] = e[4])
                      : n &&
                        ce.test(n) &&
                        (t = c(n, !0)) &&
                        (t = n.indexOf(")", n.length - t) - n.length) &&
                        ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                    e.slice(0, 3));
              },
            },
            filter: {
              TAG: function (e) {
                var t = e.replace(ye, we).toLowerCase();
                return "*" === e
                  ? function () {
                      return !0;
                    }
                  : function (e) {
                      return e.nodeName && e.nodeName.toLowerCase() === t;
                    };
              },
              CLASS: function (e) {
                var t = H[e + " "];
                return (
                  t ||
                  ((t = new RegExp("(^|" + te + ")" + e + "(" + te + "|$)")) &&
                    H(e, function (e) {
                      return t.test(
                        ("string" == typeof e.className && e.className) ||
                          (typeof e.getAttribute !== G &&
                            e.getAttribute("class")) ||
                          ""
                      );
                    }))
                );
              },
              ATTR: function (e, n, i) {
                return function (a) {
                  var r = t.attr(a, e);
                  return null == r
                    ? "!=" === n
                    : !n ||
                        ((r += ""),
                        "=" === n
                          ? r === i
                          : "!=" === n
                          ? r !== i
                          : "^=" === n
                          ? i && 0 === r.indexOf(i)
                          : "*=" === n
                          ? i && r.indexOf(i) > -1
                          : "$=" === n
                          ? i && r.slice(-i.length) === i
                          : "~=" === n
                          ? (" " + r + " ").indexOf(i) > -1
                          : "|=" === n &&
                            (r === i || r.slice(0, i.length + 1) === i + "-"));
                };
              },
              CHILD: function (e, t, n, i, a) {
                var r = "nth" !== e.slice(0, 3),
                  o = "last" !== e.slice(-4),
                  s = "of-type" === t;
                return 1 === i && 0 === a
                  ? function (e) {
                      return !!e.parentNode;
                    }
                  : function (t, n, l) {
                      var p,
                        c,
                        d,
                        u,
                        f,
                        h,
                        m = r !== o ? "nextSibling" : "previousSibling",
                        g = t.parentNode,
                        v = s && t.nodeName.toLowerCase(),
                        b = !l && !s;
                      if (g) {
                        if (r) {
                          for (; m; ) {
                            for (d = t; (d = d[m]); )
                              if (
                                s
                                  ? d.nodeName.toLowerCase() === v
                                  : 1 === d.nodeType
                              )
                                return !1;
                            h = m = "only" === e && !h && "nextSibling";
                          }
                          return !0;
                        }
                        if (((h = [o ? g.firstChild : g.lastChild]), o && b)) {
                          for (
                            c = g[R] || (g[R] = {}),
                              p = c[e] || [],
                              f = p[0] === N && p[1],
                              u = p[0] === N && p[2],
                              d = f && g.childNodes[f];
                            (d = (++f && d && d[m]) || (u = f = 0) || h.pop());

                          )
                            if (1 === d.nodeType && ++u && d === t) {
                              c[e] = [N, f, u];
                              break;
                            }
                        } else if (
                          b &&
                          (p = (t[R] || (t[R] = {}))[e]) &&
                          p[0] === N
                        )
                          u = p[1];
                        else
                          for (
                            ;
                            (d =
                              (++f && d && d[m]) || (u = f = 0) || h.pop()) &&
                            ((s
                              ? d.nodeName.toLowerCase() !== v
                              : 1 !== d.nodeType) ||
                              !++u ||
                              (b && ((d[R] || (d[R] = {}))[e] = [N, u]),
                              d !== t));

                          );
                        return (u -= a) === i || (u % i == 0 && u / i >= 0);
                      }
                    };
              },
              PSEUDO: function (e, n) {
                var a,
                  r =
                    C.pseudos[e] ||
                    C.setFilters[e.toLowerCase()] ||
                    t.error("unsupported pseudo: " + e);
                return r[R]
                  ? r(n)
                  : r.length > 1
                  ? ((a = [e, e, "", n]),
                    C.setFilters.hasOwnProperty(e.toLowerCase())
                      ? i(function (e, t) {
                          for (var i, a = r(e, n), o = a.length; o--; )
                            (i = Z.call(e, a[o])), (e[i] = !(t[i] = a[o]));
                        })
                      : function (e) {
                          return r(e, 0, a);
                        })
                  : r;
              },
            },
            pseudos: {
              not: i(function (e) {
                var t = [],
                  n = [],
                  a = k(e.replace(oe, "$1"));
                return a[R]
                  ? i(function (e, t, n, i) {
                      for (var r, o = a(e, null, i, []), s = e.length; s--; )
                        (r = o[s]) && (e[s] = !(t[s] = r));
                    })
                  : function (e, i, r) {
                      return (t[0] = e), a(t, null, r, n), !n.pop();
                    };
              }),
              has: i(function (e) {
                return function (n) {
                  return t(e, n).length > 0;
                };
              }),
              contains: i(function (e) {
                return function (t) {
                  return (t.textContent || t.innerText || T(t)).indexOf(e) > -1;
                };
              }),
              lang: i(function (e) {
                return (
                  de.test(e || "") || t.error("unsupported lang: " + e),
                  (e = e.replace(ye, we).toLowerCase()),
                  function (t) {
                    var n;
                    do {
                      if (
                        (n = D
                          ? t.lang
                          : t.getAttribute("xml:lang") ||
                            t.getAttribute("lang"))
                      )
                        return (
                          (n = n.toLowerCase()) === e ||
                          0 === n.indexOf(e + "-")
                        );
                    } while ((t = t.parentNode) && 1 === t.nodeType);
                    return !1;
                  }
                );
              }),
              target: function (t) {
                var n = e.location && e.location.hash;
                return n && n.slice(1) === t.id;
              },
              root: function (e) {
                return e === _;
              },
              focus: function (e) {
                return (
                  e === $.activeElement &&
                  (!$.hasFocus || $.hasFocus()) &&
                  !!(e.type || e.href || ~e.tabIndex)
                );
              },
              enabled: function (e) {
                return !1 === e.disabled;
              },
              disabled: function (e) {
                return !0 === e.disabled;
              },
              checked: function (e) {
                var t = e.nodeName.toLowerCase();
                return (
                  ("input" === t && !!e.checked) ||
                  ("option" === t && !!e.selected)
                );
              },
              selected: function (e) {
                return (
                  e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                );
              },
              empty: function (e) {
                for (e = e.firstChild; e; e = e.nextSibling)
                  if (e.nodeType < 6) return !1;
                return !0;
              },
              parent: function (e) {
                return !C.pseudos.empty(e);
              },
              header: function (e) {
                return he.test(e.nodeName);
              },
              input: function (e) {
                return fe.test(e.nodeName);
              },
              button: function (e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t && "button" === e.type) || "button" === t;
              },
              text: function (e) {
                var t;
                return (
                  "input" === e.nodeName.toLowerCase() &&
                  "text" === e.type &&
                  (null == (t = e.getAttribute("type")) ||
                    "text" === t.toLowerCase())
                );
              },
              first: s(function () {
                return [0];
              }),
              last: s(function (e, t) {
                return [t - 1];
              }),
              eq: s(function (e, t, n) {
                return [0 > n ? n + t : n];
              }),
              even: s(function (e, t) {
                for (var n = 0; t > n; n += 2) e.push(n);
                return e;
              }),
              odd: s(function (e, t) {
                for (var n = 1; t > n; n += 2) e.push(n);
                return e;
              }),
              lt: s(function (e, t, n) {
                for (var i = 0 > n ? n + t : n; --i >= 0; ) e.push(i);
                return e;
              }),
              gt: s(function (e, t, n) {
                for (var i = 0 > n ? n + t : n; ++i < t; ) e.push(i);
                return e;
              }),
            },
          }),
        (C.pseudos.nth = C.pseudos.eq);
      for (w in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
        C.pseudos[w] = (function (e) {
          return function (t) {
            return "input" === t.nodeName.toLowerCase() && t.type === e;
          };
        })(w);
      for (w in { submit: !0, reset: !0 })
        C.pseudos[w] = (function (e) {
          return function (t) {
            var n = t.nodeName.toLowerCase();
            return ("input" === n || "button" === n) && t.type === e;
          };
        })(w);
      return (
        (p.prototype = C.filters = C.pseudos),
        (C.setFilters = new p()),
        (k = t.compile =
          function (e, t) {
            var n,
              i = [],
              a = [],
              r = F[e + " "];
            if (!r) {
              for (t || (t = c(e)), n = t.length; n--; )
                (r = g(t[n])), r[R] ? i.push(r) : a.push(r);
              r = F(e, v(a, i));
            }
            return r;
          }),
        (x.sortStable = R.split("").sort(U).join("") === R),
        (x.detectDuplicates = !!A),
        L(),
        (x.sortDetached = a(function (e) {
          return 1 & e.compareDocumentPosition($.createElement("div"));
        })),
        a(function (e) {
          return (
            (e.innerHTML = "<a href='#'></a>"),
            "#" === e.firstChild.getAttribute("href")
          );
        }) ||
          r("type|href|height|width", function (e, t, n) {
            return n
              ? void 0
              : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
          }),
        (x.attributes &&
          a(function (e) {
            return (
              (e.innerHTML = "<input/>"),
              e.firstChild.setAttribute("value", ""),
              "" === e.firstChild.getAttribute("value")
            );
          })) ||
          r("value", function (e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase()
              ? void 0
              : e.defaultValue;
          }),
        a(function (e) {
          return null == e.getAttribute("disabled");
        }) ||
          r(ee, function (e, t, n) {
            var i;
            return n
              ? void 0
              : !0 === e[t]
              ? t.toLowerCase()
              : (i = e.getAttributeNode(t)) && i.specified
              ? i.value
              : null;
          }),
        t
      );
    })(e);
    (re.find = ce),
      (re.expr = ce.selectors),
      (re.expr[":"] = re.expr.pseudos),
      (re.unique = ce.uniqueSort),
      (re.text = ce.getText),
      (re.isXMLDoc = ce.isXML),
      (re.contains = ce.contains);
    var de = re.expr.match.needsContext,
      ue = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
      fe = /^.[^:#\[\.,]*$/;
    (re.filter = function (e, t, n) {
      var i = t[0];
      return (
        n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === i.nodeType
          ? re.find.matchesSelector(i, e)
            ? [i]
            : []
          : re.find.matches(
              e,
              re.grep(t, function (e) {
                return 1 === e.nodeType;
              })
            )
      );
    }),
      re.fn.extend({
        find: function (e) {
          var t,
            n = [],
            i = this,
            a = i.length;
          if ("string" != typeof e)
            return this.pushStack(
              re(e).filter(function () {
                for (t = 0; a > t; t++) if (re.contains(i[t], this)) return !0;
              })
            );
          for (t = 0; a > t; t++) re.find(e, i[t], n);
          return (
            (n = this.pushStack(a > 1 ? re.unique(n) : n)),
            (n.selector = this.selector ? this.selector + " " + e : e),
            n
          );
        },
        filter: function (e) {
          return this.pushStack(i(this, e || [], !1));
        },
        not: function (e) {
          return this.pushStack(i(this, e || [], !0));
        },
        is: function (e) {
          return !!i(
            this,
            "string" == typeof e && de.test(e) ? re(e) : e || [],
            !1
          ).length;
        },
      });
    var he,
      me = e.document,
      ge = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    ((re.fn.init = function (e, t) {
      var n, i;
      if (!e) return this;
      if ("string" == typeof e) {
        if (
          !(n =
            "<" === e.charAt(0) &&
            ">" === e.charAt(e.length - 1) &&
            e.length >= 3
              ? [null, e, null]
              : ge.exec(e)) ||
          (!n[1] && t)
        )
          return !t || t.jquery
            ? (t || he).find(e)
            : this.constructor(t).find(e);
        if (n[1]) {
          if (
            ((t = t instanceof re ? t[0] : t),
            re.merge(
              this,
              re.parseHTML(
                n[1],
                t && t.nodeType ? t.ownerDocument || t : me,
                !0
              )
            ),
            ue.test(n[1]) && re.isPlainObject(t))
          )
            for (n in t)
              re.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
          return this;
        }
        if ((i = me.getElementById(n[2])) && i.parentNode) {
          if (i.id !== n[2]) return he.find(e);
          (this.length = 1), (this[0] = i);
        }
        return (this.context = me), (this.selector = e), this;
      }
      return e.nodeType
        ? ((this.context = this[0] = e), (this.length = 1), this)
        : re.isFunction(e)
        ? void 0 !== he.ready
          ? he.ready(e)
          : e(re)
        : (void 0 !== e.selector &&
            ((this.selector = e.selector), (this.context = e.context)),
          re.makeArray(e, this));
    }).prototype = re.fn),
      (he = re(me));
    var ve = /^(?:parents|prev(?:Until|All))/,
      be = { children: !0, contents: !0, next: !0, prev: !0 };
    re.extend({
      dir: function (e, t, n) {
        for (
          var i = [], a = e[t];
          a &&
          9 !== a.nodeType &&
          (void 0 === n || 1 !== a.nodeType || !re(a).is(n));

        )
          1 === a.nodeType && i.push(a), (a = a[t]);
        return i;
      },
      sibling: function (e, t) {
        for (var n = []; e; e = e.nextSibling)
          1 === e.nodeType && e !== t && n.push(e);
        return n;
      },
    }),
      re.fn.extend({
        has: function (e) {
          var t,
            n = re(e, this),
            i = n.length;
          return this.filter(function () {
            for (t = 0; i > t; t++) if (re.contains(this, n[t])) return !0;
          });
        },
        closest: function (e, t) {
          for (
            var n,
              i = 0,
              a = this.length,
              r = [],
              o =
                de.test(e) || "string" != typeof e
                  ? re(e, t || this.context)
                  : 0;
            a > i;
            i++
          )
            for (n = this[i]; n && n !== t; n = n.parentNode)
              if (
                n.nodeType < 11 &&
                (o
                  ? o.index(n) > -1
                  : 1 === n.nodeType && re.find.matchesSelector(n, e))
              ) {
                r.push(n);
                break;
              }
          return this.pushStack(r.length > 1 ? re.unique(r) : r);
        },
        index: function (e) {
          return e
            ? "string" == typeof e
              ? re.inArray(this[0], re(e))
              : re.inArray(e.jquery ? e[0] : e, this)
            : this[0] && this[0].parentNode
            ? this.first().prevAll().length
            : -1;
        },
        add: function (e, t) {
          return this.pushStack(re.unique(re.merge(this.get(), re(e, t))));
        },
        addBack: function (e) {
          return this.add(
            null == e ? this.prevObject : this.prevObject.filter(e)
          );
        },
      }),
      re.each(
        {
          parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null;
          },
          parents: function (e) {
            return re.dir(e, "parentNode");
          },
          parentsUntil: function (e, t, n) {
            return re.dir(e, "parentNode", n);
          },
          next: function (e) {
            return a(e, "nextSibling");
          },
          prev: function (e) {
            return a(e, "previousSibling");
          },
          nextAll: function (e) {
            return re.dir(e, "nextSibling");
          },
          prevAll: function (e) {
            return re.dir(e, "previousSibling");
          },
          nextUntil: function (e, t, n) {
            return re.dir(e, "nextSibling", n);
          },
          prevUntil: function (e, t, n) {
            return re.dir(e, "previousSibling", n);
          },
          siblings: function (e) {
            return re.sibling((e.parentNode || {}).firstChild, e);
          },
          children: function (e) {
            return re.sibling(e.firstChild);
          },
          contents: function (e) {
            return re.nodeName(e, "iframe")
              ? e.contentDocument || e.contentWindow.document
              : re.merge([], e.childNodes);
          },
        },
        function (e, t) {
          re.fn[e] = function (n, i) {
            var a = re.map(this, t, n);
            return (
              "Until" !== e.slice(-5) && (i = n),
              i && "string" == typeof i && (a = re.filter(i, a)),
              this.length > 1 &&
                (be[e] || (a = re.unique(a)), ve.test(e) && (a = a.reverse())),
              this.pushStack(a)
            );
          };
        }
      );
    var ye = /\S+/g,
      we = {};
    (re.Callbacks = function (e) {
      e = "string" == typeof e ? we[e] || r(e) : re.extend({}, e);
      var t,
        n,
        i,
        a,
        o,
        s,
        l = [],
        p = !e.once && [],
        c = function (r) {
          for (
            n = e.memory && r, i = !0, o = s || 0, s = 0, a = l.length, t = !0;
            l && a > o;
            o++
          )
            if (!1 === l[o].apply(r[0], r[1]) && e.stopOnFalse) {
              n = !1;
              break;
            }
          (t = !1),
            l && (p ? p.length && c(p.shift()) : n ? (l = []) : d.disable());
        },
        d = {
          add: function () {
            if (l) {
              var i = l.length;
              !(function t(n) {
                re.each(n, function (n, i) {
                  var a = re.type(i);
                  "function" === a
                    ? (e.unique && d.has(i)) || l.push(i)
                    : i && i.length && "string" !== a && t(i);
                });
              })(arguments),
                t ? (a = l.length) : n && ((s = i), c(n));
            }
            return this;
          },
          remove: function () {
            return (
              l &&
                re.each(arguments, function (e, n) {
                  for (var i; (i = re.inArray(n, l, i)) > -1; )
                    l.splice(i, 1), t && (a >= i && a--, o >= i && o--);
                }),
              this
            );
          },
          has: function (e) {
            return e ? re.inArray(e, l) > -1 : !(!l || !l.length);
          },
          empty: function () {
            return (l = []), (a = 0), this;
          },
          disable: function () {
            return (l = p = n = void 0), this;
          },
          disabled: function () {
            return !l;
          },
          lock: function () {
            return (p = void 0), n || d.disable(), this;
          },
          locked: function () {
            return !p;
          },
          fireWith: function (e, n) {
            return (
              !l ||
                (i && !p) ||
                ((n = n || []),
                (n = [e, n.slice ? n.slice() : n]),
                t ? p.push(n) : c(n)),
              this
            );
          },
          fire: function () {
            return d.fireWith(this, arguments), this;
          },
          fired: function () {
            return !!i;
          },
        };
      return d;
    }),
      re.extend({
        Deferred: function (e) {
          var t = [
              ["resolve", "done", re.Callbacks("once memory"), "resolved"],
              ["reject", "fail", re.Callbacks("once memory"), "rejected"],
              ["notify", "progress", re.Callbacks("memory")],
            ],
            n = "pending",
            i = {
              state: function () {
                return n;
              },
              always: function () {
                return a.done(arguments).fail(arguments), this;
              },
              then: function () {
                var e = arguments;
                return re
                  .Deferred(function (n) {
                    re.each(t, function (t, r) {
                      var o = re.isFunction(e[t]) && e[t];
                      a[r[1]](function () {
                        var e = o && o.apply(this, arguments);
                        e && re.isFunction(e.promise)
                          ? e
                              .promise()
                              .done(n.resolve)
                              .fail(n.reject)
                              .progress(n.notify)
                          : n[r[0] + "With"](
                              this === i ? n.promise() : this,
                              o ? [e] : arguments
                            );
                      });
                    }),
                      (e = null);
                  })
                  .promise();
              },
              promise: function (e) {
                return null != e ? re.extend(e, i) : i;
              },
            },
            a = {};
          return (
            (i.pipe = i.then),
            re.each(t, function (e, r) {
              var o = r[2],
                s = r[3];
              (i[r[1]] = o.add),
                s &&
                  o.add(
                    function () {
                      n = s;
                    },
                    t[1 ^ e][2].disable,
                    t[2][2].lock
                  ),
                (a[r[0]] = function () {
                  return (
                    a[r[0] + "With"](this === a ? i : this, arguments), this
                  );
                }),
                (a[r[0] + "With"] = o.fireWith);
            }),
            i.promise(a),
            e && e.call(a, a),
            a
          );
        },
        when: function (e) {
          var t,
            n,
            i,
            a = 0,
            r = Y.call(arguments),
            o = r.length,
            s = 1 !== o || (e && re.isFunction(e.promise)) ? o : 0,
            l = 1 === s ? e : re.Deferred(),
            p = function (e, n, i) {
              return function (a) {
                (n[e] = this),
                  (i[e] = arguments.length > 1 ? Y.call(arguments) : a),
                  i === t ? l.notifyWith(n, i) : --s || l.resolveWith(n, i);
              };
            };
          if (o > 1)
            for (
              t = new Array(o), n = new Array(o), i = new Array(o);
              o > a;
              a++
            )
              r[a] && re.isFunction(r[a].promise)
                ? r[a]
                    .promise()
                    .done(p(a, i, r))
                    .fail(l.reject)
                    .progress(p(a, n, t))
                : --s;
          return s || l.resolveWith(i, r), l.promise();
        },
      });
    var xe;
    (re.fn.ready = function (e) {
      return re.ready.promise().done(e), this;
    }),
      re.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function (e) {
          e ? re.readyWait++ : re.ready(!0);
        },
        ready: function (e) {
          if (!0 === e ? !--re.readyWait : !re.isReady) {
            if (!me.body) return setTimeout(re.ready);
            (re.isReady = !0),
              (!0 !== e && --re.readyWait > 0) ||
                (xe.resolveWith(me, [re]),
                re.fn.trigger && re(me).trigger("ready").off("ready"));
          }
        },
      }),
      (re.ready.promise = function (t) {
        if (!xe)
          if (((xe = re.Deferred()), "complete" === me.readyState))
            setTimeout(re.ready);
          else if (me.addEventListener)
            me.addEventListener("DOMContentLoaded", s, !1),
              e.addEventListener("load", s, !1);
          else {
            me.attachEvent("onreadystatechange", s), e.attachEvent("onload", s);
            var n = !1;
            try {
              n = null == e.frameElement && me.documentElement;
            } catch (e) {}
            n &&
              n.doScroll &&
              (function e() {
                if (!re.isReady) {
                  try {
                    n.doScroll("left");
                  } catch (t) {
                    return setTimeout(e, 50);
                  }
                  o(), re.ready();
                }
              })();
          }
        return xe.promise(t);
      });
    var Ce,
      Te = "undefined";
    for (Ce in re(ie)) break;
    (ie.ownLast = "0" !== Ce),
      (ie.inlineBlockNeedsLayout = !1),
      re(function () {
        var e,
          t,
          n = me.getElementsByTagName("body")[0];
        n &&
          ((e = me.createElement("div")),
          (e.style.cssText =
            "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px"),
          (t = me.createElement("div")),
          n.appendChild(e).appendChild(t),
          typeof t.style.zoom !== Te &&
            ((t.style.cssText =
              "border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1"),
            (ie.inlineBlockNeedsLayout = 3 === t.offsetWidth) &&
              (n.style.zoom = 1)),
          n.removeChild(e),
          (e = t = null));
      }),
      (function () {
        var e = me.createElement("div");
        if (null == ie.deleteExpando) {
          ie.deleteExpando = !0;
          try {
            delete e.test;
          } catch (e) {
            ie.deleteExpando = !1;
          }
        }
        e = null;
      })(),
      (re.acceptData = function (e) {
        var t = re.noData[(e.nodeName + " ").toLowerCase()],
          n = +e.nodeType || 1;
        return (
          (1 === n || 9 === n) &&
          (!t || (!0 !== t && e.getAttribute("classid") === t))
        );
      });
    var Se = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      ke = /([A-Z])/g;
    re.extend({
      cache: {},
      noData: {
        "applet ": !0,
        "embed ": !0,
        "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
      },
      hasData: function (e) {
        return (
          !!(e = e.nodeType ? re.cache[e[re.expando]] : e[re.expando]) && !p(e)
        );
      },
      data: function (e, t, n) {
        return c(e, t, n);
      },
      removeData: function (e, t) {
        return d(e, t);
      },
      _data: function (e, t, n) {
        return c(e, t, n, !0);
      },
      _removeData: function (e, t) {
        return d(e, t, !0);
      },
    }),
      re.fn.extend({
        data: function (e, t) {
          var n,
            i,
            a,
            r = this[0],
            o = r && r.attributes;
          if (void 0 === e) {
            if (
              this.length &&
              ((a = re.data(r)),
              1 === r.nodeType && !re._data(r, "parsedAttrs"))
            ) {
              for (n = o.length; n--; )
                (i = o[n].name),
                  0 === i.indexOf("data-") &&
                    ((i = re.camelCase(i.slice(5))), l(r, i, a[i]));
              re._data(r, "parsedAttrs", !0);
            }
            return a;
          }
          return "object" == typeof e
            ? this.each(function () {
                re.data(this, e);
              })
            : arguments.length > 1
            ? this.each(function () {
                re.data(this, e, t);
              })
            : r
            ? l(r, e, re.data(r, e))
            : void 0;
        },
        removeData: function (e) {
          return this.each(function () {
            re.removeData(this, e);
          });
        },
      }),
      re.extend({
        queue: function (e, t, n) {
          var i;
          return e
            ? ((t = (t || "fx") + "queue"),
              (i = re._data(e, t)),
              n &&
                (!i || re.isArray(n)
                  ? (i = re._data(e, t, re.makeArray(n)))
                  : i.push(n)),
              i || [])
            : void 0;
        },
        dequeue: function (e, t) {
          t = t || "fx";
          var n = re.queue(e, t),
            i = n.length,
            a = n.shift(),
            r = re._queueHooks(e, t),
            o = function () {
              re.dequeue(e, t);
            };
          "inprogress" === a && ((a = n.shift()), i--),
            a &&
              ("fx" === t && n.unshift("inprogress"),
              delete r.stop,
              a.call(e, o, r)),
            !i && r && r.empty.fire();
        },
        _queueHooks: function (e, t) {
          var n = t + "queueHooks";
          return (
            re._data(e, n) ||
            re._data(e, n, {
              empty: re.Callbacks("once memory").add(function () {
                re._removeData(e, t + "queue"), re._removeData(e, n);
              }),
            })
          );
        },
      }),
      re.fn.extend({
        queue: function (e, t) {
          var n = 2;
          return (
            "string" != typeof e && ((t = e), (e = "fx"), n--),
            arguments.length < n
              ? re.queue(this[0], e)
              : void 0 === t
              ? this
              : this.each(function () {
                  var n = re.queue(this, e, t);
                  re._queueHooks(this, e),
                    "fx" === e && "inprogress" !== n[0] && re.dequeue(this, e);
                })
          );
        },
        dequeue: function (e) {
          return this.each(function () {
            re.dequeue(this, e);
          });
        },
        clearQueue: function (e) {
          return this.queue(e || "fx", []);
        },
        promise: function (e, t) {
          var n,
            i = 1,
            a = re.Deferred(),
            r = this,
            o = this.length,
            s = function () {
              --i || a.resolveWith(r, [r]);
            };
          for (
            "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
            o--;

          )
            (n = re._data(r[o], e + "queueHooks")) &&
              n.empty &&
              (i++, n.empty.add(s));
          return s(), a.promise(t);
        },
      });
    var Ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      Ie = ["Top", "Right", "Bottom", "Left"],
      Ae = function (e, t) {
        return (
          (e = t || e),
          "none" === re.css(e, "display") || !re.contains(e.ownerDocument, e)
        );
      },
      Le = (re.access = function (e, t, n, i, a, r, o) {
        var s = 0,
          l = e.length,
          p = null == n;
        if ("object" === re.type(n)) {
          a = !0;
          for (s in n) re.access(e, t, s, n[s], !0, r, o);
        } else if (
          void 0 !== i &&
          ((a = !0),
          re.isFunction(i) || (o = !0),
          p &&
            (o
              ? (t.call(e, i), (t = null))
              : ((p = t),
                (t = function (e, t, n) {
                  return p.call(re(e), n);
                }))),
          t)
        )
          for (; l > s; s++) t(e[s], n, o ? i : i.call(e[s], s, t(e[s], n)));
        return a ? e : p ? t.call(e) : l ? t(e[0], n) : r;
      }),
      $e = /^(?:checkbox|radio)$/i;
    !(function () {
      var e = me.createDocumentFragment(),
        t = me.createElement("div"),
        n = me.createElement("input");
      if (
        (t.setAttribute("className", "t"),
        (t.innerHTML = "  <link/><table></table><a href='/a'>a</a>"),
        (ie.leadingWhitespace = 3 === t.firstChild.nodeType),
        (ie.tbody = !t.getElementsByTagName("tbody").length),
        (ie.htmlSerialize = !!t.getElementsByTagName("link").length),
        (ie.html5Clone =
          "<:nav></:nav>" !== me.createElement("nav").cloneNode(!0).outerHTML),
        (n.type = "checkbox"),
        (n.checked = !0),
        e.appendChild(n),
        (ie.appendChecked = n.checked),
        (t.innerHTML = "<textarea>x</textarea>"),
        (ie.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue),
        e.appendChild(t),
        (t.innerHTML = "<input type='radio' checked='checked' name='t'/>"),
        (ie.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (ie.noCloneEvent = !0),
        t.attachEvent &&
          (t.attachEvent("onclick", function () {
            ie.noCloneEvent = !1;
          }),
          t.cloneNode(!0).click()),
        null == ie.deleteExpando)
      ) {
        ie.deleteExpando = !0;
        try {
          delete t.test;
        } catch (e) {
          ie.deleteExpando = !1;
        }
      }
      e = t = n = null;
    })(),
      (function () {
        var t,
          n,
          i = me.createElement("div");
        for (t in { submit: !0, change: !0, focusin: !0 })
          (n = "on" + t),
            (ie[t + "Bubbles"] = n in e) ||
              (i.setAttribute(n, "t"),
              (ie[t + "Bubbles"] = !1 === i.attributes[n].expando));
        i = null;
      })();
    var _e = /^(?:input|select|textarea)$/i,
      De = /^key/,
      Oe = /^(?:mouse|contextmenu)|click/,
      Pe = /^(?:focusinfocus|focusoutblur)$/,
      Me = /^([^.]*)(?:\.(.+)|)$/;
    (re.event = {
      global: {},
      add: function (e, t, n, i, a) {
        var r,
          o,
          s,
          l,
          p,
          c,
          d,
          u,
          f,
          h,
          m,
          g = re._data(e);
        if (g) {
          for (
            n.handler && ((l = n), (n = l.handler), (a = l.selector)),
              n.guid || (n.guid = re.guid++),
              (o = g.events) || (o = g.events = {}),
              (c = g.handle) ||
                ((c = g.handle =
                  function (e) {
                    return typeof re === Te ||
                      (e && re.event.triggered === e.type)
                      ? void 0
                      : re.event.dispatch.apply(c.elem, arguments);
                  }),
                (c.elem = e)),
              t = (t || "").match(ye) || [""],
              s = t.length;
            s--;

          )
            (r = Me.exec(t[s]) || []),
              (f = m = r[1]),
              (h = (r[2] || "").split(".").sort()),
              f &&
                ((p = re.event.special[f] || {}),
                (f = (a ? p.delegateType : p.bindType) || f),
                (p = re.event.special[f] || {}),
                (d = re.extend(
                  {
                    type: f,
                    origType: m,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: a,
                    needsContext: a && re.expr.match.needsContext.test(a),
                    namespace: h.join("."),
                  },
                  l
                )),
                (u = o[f]) ||
                  ((u = o[f] = []),
                  (u.delegateCount = 0),
                  (p.setup && !1 !== p.setup.call(e, i, h, c)) ||
                    (e.addEventListener
                      ? e.addEventListener(f, c, !1)
                      : e.attachEvent && e.attachEvent("on" + f, c))),
                p.add &&
                  (p.add.call(e, d),
                  d.handler.guid || (d.handler.guid = n.guid)),
                a ? u.splice(u.delegateCount++, 0, d) : u.push(d),
                (re.event.global[f] = !0));
          e = null;
        }
      },
      remove: function (e, t, n, i, a) {
        var r,
          o,
          s,
          l,
          p,
          c,
          d,
          u,
          f,
          h,
          m,
          g = re.hasData(e) && re._data(e);
        if (g && (c = g.events)) {
          for (t = (t || "").match(ye) || [""], p = t.length; p--; )
            if (
              ((s = Me.exec(t[p]) || []),
              (f = m = s[1]),
              (h = (s[2] || "").split(".").sort()),
              f)
            ) {
              for (
                d = re.event.special[f] || {},
                  f = (i ? d.delegateType : d.bindType) || f,
                  u = c[f] || [],
                  s =
                    s[2] &&
                    new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                  l = r = u.length;
                r--;

              )
                (o = u[r]),
                  (!a && m !== o.origType) ||
                    (n && n.guid !== o.guid) ||
                    (s && !s.test(o.namespace)) ||
                    (i && i !== o.selector && ("**" !== i || !o.selector)) ||
                    (u.splice(r, 1),
                    o.selector && u.delegateCount--,
                    d.remove && d.remove.call(e, o));
              l &&
                !u.length &&
                ((d.teardown && !1 !== d.teardown.call(e, h, g.handle)) ||
                  re.removeEvent(e, f, g.handle),
                delete c[f]);
            } else for (f in c) re.event.remove(e, f + t[p], n, i, !0);
          re.isEmptyObject(c) && (delete g.handle, re._removeData(e, "events"));
        }
      },
      trigger: function (t, n, i, a) {
        var r,
          o,
          s,
          l,
          p,
          c,
          d,
          u = [i || me],
          f = te.call(t, "type") ? t.type : t,
          h = te.call(t, "namespace") ? t.namespace.split(".") : [];
        if (
          ((s = c = i = i || me),
          3 !== i.nodeType &&
            8 !== i.nodeType &&
            !Pe.test(f + re.event.triggered) &&
            (f.indexOf(".") >= 0 &&
              ((h = f.split(".")), (f = h.shift()), h.sort()),
            (o = f.indexOf(":") < 0 && "on" + f),
            (t = t[re.expando]
              ? t
              : new re.Event(f, "object" == typeof t && t)),
            (t.isTrigger = a ? 2 : 3),
            (t.namespace = h.join(".")),
            (t.namespace_re = t.namespace
              ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")
              : null),
            (t.result = void 0),
            t.target || (t.target = i),
            (n = null == n ? [t] : re.makeArray(n, [t])),
            (p = re.event.special[f] || {}),
            a || !p.trigger || !1 !== p.trigger.apply(i, n)))
        ) {
          if (!a && !p.noBubble && !re.isWindow(i)) {
            for (
              l = p.delegateType || f, Pe.test(l + f) || (s = s.parentNode);
              s;
              s = s.parentNode
            )
              u.push(s), (c = s);
            c === (i.ownerDocument || me) &&
              u.push(c.defaultView || c.parentWindow || e);
          }
          for (d = 0; (s = u[d++]) && !t.isPropagationStopped(); )
            (t.type = d > 1 ? l : p.bindType || f),
              (r =
                (re._data(s, "events") || {})[t.type] && re._data(s, "handle")),
              r && r.apply(s, n),
              (r = o && s[o]) &&
                r.apply &&
                re.acceptData(s) &&
                ((t.result = r.apply(s, n)),
                !1 === t.result && t.preventDefault());
          if (
            ((t.type = f),
            !a &&
              !t.isDefaultPrevented() &&
              (!p._default || !1 === p._default.apply(u.pop(), n)) &&
              re.acceptData(i) &&
              o &&
              i[f] &&
              !re.isWindow(i))
          ) {
            (c = i[o]), c && (i[o] = null), (re.event.triggered = f);
            try {
              i[f]();
            } catch (e) {}
            (re.event.triggered = void 0), c && (i[o] = c);
          }
          return t.result;
        }
      },
      dispatch: function (e) {
        e = re.event.fix(e);
        var t,
          n,
          i,
          a,
          r,
          o = [],
          s = Y.call(arguments),
          l = (re._data(this, "events") || {})[e.type] || [],
          p = re.event.special[e.type] || {};
        if (
          ((s[0] = e),
          (e.delegateTarget = this),
          !p.preDispatch || !1 !== p.preDispatch.call(this, e))
        ) {
          for (
            o = re.event.handlers.call(this, e, l), t = 0;
            (a = o[t++]) && !e.isPropagationStopped();

          )
            for (
              e.currentTarget = a.elem, r = 0;
              (i = a.handlers[r++]) && !e.isImmediatePropagationStopped();

            )
              (!e.namespace_re || e.namespace_re.test(i.namespace)) &&
                ((e.handleObj = i),
                (e.data = i.data),
                void 0 !==
                  (n = (
                    (re.event.special[i.origType] || {}).handle || i.handler
                  ).apply(a.elem, s)) &&
                  !1 === (e.result = n) &&
                  (e.preventDefault(), e.stopPropagation()));
          return p.postDispatch && p.postDispatch.call(this, e), e.result;
        }
      },
      handlers: function (e, t) {
        var n,
          i,
          a,
          r,
          o = [],
          s = t.delegateCount,
          l = e.target;
        if (s && l.nodeType && (!e.button || "click" !== e.type))
          for (; l != this; l = l.parentNode || this)
            if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
              for (a = [], r = 0; s > r; r++)
                (i = t[r]),
                  (n = i.selector + " "),
                  void 0 === a[n] &&
                    (a[n] = i.needsContext
                      ? re(n, this).index(l) >= 0
                      : re.find(n, this, null, [l]).length),
                  a[n] && a.push(i);
              a.length && o.push({ elem: l, handlers: a });
            }
        return s < t.length && o.push({ elem: this, handlers: t.slice(s) }), o;
      },
      fix: function (e) {
        if (e[re.expando]) return e;
        var t,
          n,
          i,
          a = e.type,
          r = e,
          o = this.fixHooks[a];
        for (
          o ||
            (this.fixHooks[a] = o =
              Oe.test(a) ? this.mouseHooks : De.test(a) ? this.keyHooks : {}),
            i = o.props ? this.props.concat(o.props) : this.props,
            e = new re.Event(r),
            t = i.length;
          t--;

        )
          (n = i[t]), (e[n] = r[n]);
        return (
          e.target || (e.target = r.srcElement || me),
          3 === e.target.nodeType && (e.target = e.target.parentNode),
          (e.metaKey = !!e.metaKey),
          o.filter ? o.filter(e, r) : e
        );
      },
      props:
        "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
          " "
        ),
      fixHooks: {},
      keyHooks: {
        props: "char charCode key keyCode".split(" "),
        filter: function (e, t) {
          return (
            null == e.which &&
              (e.which = null != t.charCode ? t.charCode : t.keyCode),
            e
          );
        },
      },
      mouseHooks: {
        props:
          "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(
            " "
          ),
        filter: function (e, t) {
          var n,
            i,
            a,
            r = t.button,
            o = t.fromElement;
          return (
            null == e.pageX &&
              null != t.clientX &&
              ((i = e.target.ownerDocument || me),
              (a = i.documentElement),
              (n = i.body),
              (e.pageX =
                t.clientX +
                ((a && a.scrollLeft) || (n && n.scrollLeft) || 0) -
                ((a && a.clientLeft) || (n && n.clientLeft) || 0)),
              (e.pageY =
                t.clientY +
                ((a && a.scrollTop) || (n && n.scrollTop) || 0) -
                ((a && a.clientTop) || (n && n.clientTop) || 0))),
            !e.relatedTarget &&
              o &&
              (e.relatedTarget = o === e.target ? t.toElement : o),
            e.which ||
              void 0 === r ||
              (e.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0),
            e
          );
        },
      },
      special: {
        load: { noBubble: !0 },
        focus: {
          trigger: function () {
            if (this !== h() && this.focus)
              try {
                return this.focus(), !1;
              } catch (e) {}
          },
          delegateType: "focusin",
        },
        blur: {
          trigger: function () {
            return this === h() && this.blur ? (this.blur(), !1) : void 0;
          },
          delegateType: "focusout",
        },
        click: {
          trigger: function () {
            return re.nodeName(this, "input") &&
              "checkbox" === this.type &&
              this.click
              ? (this.click(), !1)
              : void 0;
          },
          _default: function (e) {
            return re.nodeName(e.target, "a");
          },
        },
        beforeunload: {
          postDispatch: function (e) {
            void 0 !== e.result && (e.originalEvent.returnValue = e.result);
          },
        },
      },
      simulate: function (e, t, n, i) {
        var a = re.extend(new re.Event(), n, {
          type: e,
          isSimulated: !0,
          originalEvent: {},
        });
        i ? re.event.trigger(a, null, t) : re.event.dispatch.call(t, a),
          a.isDefaultPrevented() && n.preventDefault();
      },
    }),
      (re.removeEvent = me.removeEventListener
        ? function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n, !1);
          }
        : function (e, t, n) {
            var i = "on" + t;
            e.detachEvent &&
              (typeof e[i] === Te && (e[i] = null), e.detachEvent(i, n));
          }),
      (re.Event = function (e, t) {
        return this instanceof re.Event
          ? (e && e.type
              ? ((this.originalEvent = e),
                (this.type = e.type),
                (this.isDefaultPrevented =
                  e.defaultPrevented ||
                  (void 0 === e.defaultPrevented &&
                    (!1 === e.returnValue ||
                      (e.getPreventDefault && e.getPreventDefault())))
                    ? u
                    : f))
              : (this.type = e),
            t && re.extend(this, t),
            (this.timeStamp = (e && e.timeStamp) || re.now()),
            void (this[re.expando] = !0))
          : new re.Event(e, t);
      }),
      (re.Event.prototype = {
        isDefaultPrevented: f,
        isPropagationStopped: f,
        isImmediatePropagationStopped: f,
        preventDefault: function () {
          var e = this.originalEvent;
          (this.isDefaultPrevented = u),
            e && (e.preventDefault ? e.preventDefault() : (e.returnValue = !1));
        },
        stopPropagation: function () {
          var e = this.originalEvent;
          (this.isPropagationStopped = u),
            e &&
              (e.stopPropagation && e.stopPropagation(), (e.cancelBubble = !0));
        },
        stopImmediatePropagation: function () {
          (this.isImmediatePropagationStopped = u), this.stopPropagation();
        },
      }),
      re.each(
        { mouseenter: "mouseover", mouseleave: "mouseout" },
        function (e, t) {
          re.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (e) {
              var n,
                i = this,
                a = e.relatedTarget,
                r = e.handleObj;
              return (
                (!a || (a !== i && !re.contains(i, a))) &&
                  ((e.type = r.origType),
                  (n = r.handler.apply(this, arguments)),
                  (e.type = t)),
                n
              );
            },
          };
        }
      ),
      ie.submitBubbles ||
        (re.event.special.submit = {
          setup: function () {
            return (
              !re.nodeName(this, "form") &&
              void re.event.add(
                this,
                "click._submit keypress._submit",
                function (e) {
                  var t = e.target,
                    n =
                      re.nodeName(t, "input") || re.nodeName(t, "button")
                        ? t.form
                        : void 0;
                  n &&
                    !re._data(n, "submitBubbles") &&
                    (re.event.add(n, "submit._submit", function (e) {
                      e._submit_bubble = !0;
                    }),
                    re._data(n, "submitBubbles", !0));
                }
              )
            );
          },
          postDispatch: function (e) {
            e._submit_bubble &&
              (delete e._submit_bubble,
              this.parentNode &&
                !e.isTrigger &&
                re.event.simulate("submit", this.parentNode, e, !0));
          },
          teardown: function () {
            return (
              !re.nodeName(this, "form") &&
              void re.event.remove(this, "._submit")
            );
          },
        }),
      ie.changeBubbles ||
        (re.event.special.change = {
          setup: function () {
            return _e.test(this.nodeName)
              ? (("checkbox" === this.type || "radio" === this.type) &&
                  (re.event.add(this, "propertychange._change", function (e) {
                    "checked" === e.originalEvent.propertyName &&
                      (this._just_changed = !0);
                  }),
                  re.event.add(this, "click._change", function (e) {
                    this._just_changed &&
                      !e.isTrigger &&
                      (this._just_changed = !1),
                      re.event.simulate("change", this, e, !0);
                  })),
                !1)
              : void re.event.add(this, "beforeactivate._change", function (e) {
                  var t = e.target;
                  _e.test(t.nodeName) &&
                    !re._data(t, "changeBubbles") &&
                    (re.event.add(t, "change._change", function (e) {
                      !this.parentNode ||
                        e.isSimulated ||
                        e.isTrigger ||
                        re.event.simulate("change", this.parentNode, e, !0);
                    }),
                    re._data(t, "changeBubbles", !0));
                });
          },
          handle: function (e) {
            var t = e.target;
            return this !== t ||
              e.isSimulated ||
              e.isTrigger ||
              ("radio" !== t.type && "checkbox" !== t.type)
              ? e.handleObj.handler.apply(this, arguments)
              : void 0;
          },
          teardown: function () {
            return re.event.remove(this, "._change"), !_e.test(this.nodeName);
          },
        }),
      ie.focusinBubbles ||
        re.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
          var n = function (e) {
            re.event.simulate(t, e.target, re.event.fix(e), !0);
          };
          re.event.special[t] = {
            setup: function () {
              var i = this.ownerDocument || this,
                a = re._data(i, t);
              a || i.addEventListener(e, n, !0), re._data(i, t, (a || 0) + 1);
            },
            teardown: function () {
              var i = this.ownerDocument || this,
                a = re._data(i, t) - 1;
              a
                ? re._data(i, t, a)
                : (i.removeEventListener(e, n, !0), re._removeData(i, t));
            },
          };
        }),
      re.fn.extend({
        on: function (e, t, n, i, a) {
          var r, o;
          if ("object" == typeof e) {
            "string" != typeof t && ((n = n || t), (t = void 0));
            for (r in e) this.on(r, t, n, e[r], a);
            return this;
          }
          if (
            (null == n && null == i
              ? ((i = t), (n = t = void 0))
              : null == i &&
                ("string" == typeof t
                  ? ((i = n), (n = void 0))
                  : ((i = n), (n = t), (t = void 0))),
            !1 === i)
          )
            i = f;
          else if (!i) return this;
          return (
            1 === a &&
              ((o = i),
              (i = function (e) {
                return re().off(e), o.apply(this, arguments);
              }),
              (i.guid = o.guid || (o.guid = re.guid++))),
            this.each(function () {
              re.event.add(this, e, i, n, t);
            })
          );
        },
        one: function (e, t, n, i) {
          return this.on(e, t, n, i, 1);
        },
        off: function (e, t, n) {
          var i, a;
          if (e && e.preventDefault && e.handleObj)
            return (
              (i = e.handleObj),
              re(e.delegateTarget).off(
                i.namespace ? i.origType + "." + i.namespace : i.origType,
                i.selector,
                i.handler
              ),
              this
            );
          if ("object" == typeof e) {
            for (a in e) this.off(a, t, e[a]);
            return this;
          }
          return (
            (!1 === t || "function" == typeof t) && ((n = t), (t = void 0)),
            !1 === n && (n = f),
            this.each(function () {
              re.event.remove(this, e, n, t);
            })
          );
        },
        trigger: function (e, t) {
          return this.each(function () {
            re.event.trigger(e, t, this);
          });
        },
        triggerHandler: function (e, t) {
          var n = this[0];
          return n ? re.event.trigger(e, t, n, !0) : void 0;
        },
      });
    var Be =
        "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
      Re = / jQuery\d+="(?:null|\d+)"/g,
      ze = new RegExp("<(?:" + Be + ")[\\s/>]", "i"),
      Ne = /^\s+/,
      je =
        /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
      He = /<([\w:]+)/,
      We = /<tbody/i,
      Fe = /<|&#?\w+;/,
      Ue = /<(?:script|style|link)/i,
      Ge = /checked\s*(?:[^=]|=\s*.checked.)/i,
      qe = /^$|\/(?:java|ecma)script/i,
      Ve = /^true\/(.*)/,
      Xe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
      Ye = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: ie.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"],
      },
      Ke = m(me),
      Qe = Ke.appendChild(me.createElement("div"));
    (Ye.optgroup = Ye.option),
      (Ye.tbody = Ye.tfoot = Ye.colgroup = Ye.caption = Ye.thead),
      (Ye.th = Ye.td),
      re.extend({
        clone: function (e, t, n) {
          var i,
            a,
            r,
            o,
            s,
            l = re.contains(e.ownerDocument, e);
          if (
            (ie.html5Clone || re.isXMLDoc(e) || !ze.test("<" + e.nodeName + ">")
              ? (r = e.cloneNode(!0))
              : ((Qe.innerHTML = e.outerHTML),
                Qe.removeChild((r = Qe.firstChild))),
            !(
              (ie.noCloneEvent && ie.noCloneChecked) ||
              (1 !== e.nodeType && 11 !== e.nodeType) ||
              re.isXMLDoc(e)
            ))
          )
            for (i = g(r), s = g(e), o = 0; null != (a = s[o]); ++o)
              i[o] && T(a, i[o]);
          if (t)
            if (n)
              for (s = s || g(e), i = i || g(r), o = 0; null != (a = s[o]); o++)
                C(a, i[o]);
            else C(e, r);
          return (
            (i = g(r, "script")),
            i.length > 0 && x(i, !l && g(e, "script")),
            (i = s = a = null),
            r
          );
        },
        buildFragment: function (e, t, n, i) {
          for (
            var a, r, o, s, l, p, c, d = e.length, u = m(t), f = [], h = 0;
            d > h;
            h++
          )
            if ((r = e[h]) || 0 === r)
              if ("object" === re.type(r)) re.merge(f, r.nodeType ? [r] : r);
              else if (Fe.test(r)) {
                for (
                  s = s || u.appendChild(t.createElement("div")),
                    l = (He.exec(r) || ["", ""])[1].toLowerCase(),
                    c = Ye[l] || Ye._default,
                    s.innerHTML = c[1] + r.replace(je, "<$1></$2>") + c[2],
                    a = c[0];
                  a--;

                )
                  s = s.lastChild;
                if (
                  (!ie.leadingWhitespace &&
                    Ne.test(r) &&
                    f.push(t.createTextNode(Ne.exec(r)[0])),
                  !ie.tbody)
                )
                  for (
                    r =
                      "table" !== l || We.test(r)
                        ? "<table>" !== c[1] || We.test(r)
                          ? 0
                          : s
                        : s.firstChild,
                      a = r && r.childNodes.length;
                    a--;

                  )
                    re.nodeName((p = r.childNodes[a]), "tbody") &&
                      !p.childNodes.length &&
                      r.removeChild(p);
                for (
                  re.merge(f, s.childNodes), s.textContent = "";
                  s.firstChild;

                )
                  s.removeChild(s.firstChild);
                s = u.lastChild;
              } else f.push(t.createTextNode(r));
          for (
            s && u.removeChild(s),
              ie.appendChecked || re.grep(g(f, "input"), v),
              h = 0;
            (r = f[h++]);

          )
            if (
              (!i || -1 === re.inArray(r, i)) &&
              ((o = re.contains(r.ownerDocument, r)),
              (s = g(u.appendChild(r), "script")),
              o && x(s),
              n)
            )
              for (a = 0; (r = s[a++]); ) qe.test(r.type || "") && n.push(r);
          return (s = null), u;
        },
        cleanData: function (e, t) {
          for (
            var n,
              i,
              a,
              r,
              o = 0,
              s = re.expando,
              l = re.cache,
              p = ie.deleteExpando,
              c = re.event.special;
            null != (n = e[o]);
            o++
          )
            if ((t || re.acceptData(n)) && ((a = n[s]), (r = a && l[a]))) {
              if (r.events)
                for (i in r.events)
                  c[i] ? re.event.remove(n, i) : re.removeEvent(n, i, r.handle);
              l[a] &&
                (delete l[a],
                p
                  ? delete n[s]
                  : typeof n.removeAttribute !== Te
                  ? n.removeAttribute(s)
                  : (n[s] = null),
                X.push(a));
            }
        },
      }),
      re.fn.extend({
        text: function (e) {
          return Le(
            this,
            function (e) {
              return void 0 === e
                ? re.text(this)
                : this.empty().append(
                    ((this[0] && this[0].ownerDocument) || me).createTextNode(e)
                  );
            },
            null,
            e,
            arguments.length
          );
        },
        append: function () {
          return this.domManip(arguments, function (e) {
            if (
              1 === this.nodeType ||
              11 === this.nodeType ||
              9 === this.nodeType
            ) {
              b(this, e).appendChild(e);
            }
          });
        },
        prepend: function () {
          return this.domManip(arguments, function (e) {
            if (
              1 === this.nodeType ||
              11 === this.nodeType ||
              9 === this.nodeType
            ) {
              var t = b(this, e);
              t.insertBefore(e, t.firstChild);
            }
          });
        },
        before: function () {
          return this.domManip(arguments, function (e) {
            this.parentNode && this.parentNode.insertBefore(e, this);
          });
        },
        after: function () {
          return this.domManip(arguments, function (e) {
            this.parentNode &&
              this.parentNode.insertBefore(e, this.nextSibling);
          });
        },
        remove: function (e, t) {
          for (
            var n, i = e ? re.filter(e, this) : this, a = 0;
            null != (n = i[a]);
            a++
          )
            t || 1 !== n.nodeType || re.cleanData(g(n)),
              n.parentNode &&
                (t && re.contains(n.ownerDocument, n) && x(g(n, "script")),
                n.parentNode.removeChild(n));
          return this;
        },
        empty: function () {
          for (var e, t = 0; null != (e = this[t]); t++) {
            for (1 === e.nodeType && re.cleanData(g(e, !1)); e.firstChild; )
              e.removeChild(e.firstChild);
            e.options && re.nodeName(e, "select") && (e.options.length = 0);
          }
          return this;
        },
        clone: function (e, t) {
          return (
            (e = null != e && e),
            (t = null == t ? e : t),
            this.map(function () {
              return re.clone(this, e, t);
            })
          );
        },
        html: function (e) {
          return Le(
            this,
            function (e) {
              var t = this[0] || {},
                n = 0,
                i = this.length;
              if (void 0 === e)
                return 1 === t.nodeType ? t.innerHTML.replace(Re, "") : void 0;
              if (
                !(
                  "string" != typeof e ||
                  Ue.test(e) ||
                  (!ie.htmlSerialize && ze.test(e)) ||
                  (!ie.leadingWhitespace && Ne.test(e)) ||
                  Ye[(He.exec(e) || ["", ""])[1].toLowerCase()]
                )
              ) {
                e = e.replace(je, "<$1></$2>");
                try {
                  for (; i > n; n++)
                    (t = this[n] || {}),
                      1 === t.nodeType &&
                        (re.cleanData(g(t, !1)), (t.innerHTML = e));
                  t = 0;
                } catch (e) {}
              }
              t && this.empty().append(e);
            },
            null,
            e,
            arguments.length
          );
        },
        replaceWith: function () {
          var e = arguments[0];
          return (
            this.domManip(arguments, function (t) {
              (e = this.parentNode),
                re.cleanData(g(this)),
                e && e.replaceChild(t, this);
            }),
            e && (e.length || e.nodeType) ? this : this.remove()
          );
        },
        detach: function (e) {
          return this.remove(e, !0);
        },
        domManip: function (e, t) {
          e = K.apply([], e);
          var n,
            i,
            a,
            r,
            o,
            s,
            l = 0,
            p = this.length,
            c = this,
            d = p - 1,
            u = e[0],
            f = re.isFunction(u);
          if (
            f ||
            (p > 1 && "string" == typeof u && !ie.checkClone && Ge.test(u))
          )
            return this.each(function (n) {
              var i = c.eq(n);
              f && (e[0] = u.call(this, n, i.html())), i.domManip(e, t);
            });
          if (
            p &&
            ((s = re.buildFragment(e, this[0].ownerDocument, !1, this)),
            (n = s.firstChild),
            1 === s.childNodes.length && (s = n),
            n)
          ) {
            for (r = re.map(g(s, "script"), y), a = r.length; p > l; l++)
              (i = s),
                l !== d &&
                  ((i = re.clone(i, !0, !0)), a && re.merge(r, g(i, "script"))),
                t.call(this[l], i, l);
            if (a)
              for (
                o = r[r.length - 1].ownerDocument, re.map(r, w), l = 0;
                a > l;
                l++
              )
                (i = r[l]),
                  qe.test(i.type || "") &&
                    !re._data(i, "globalEval") &&
                    re.contains(o, i) &&
                    (i.src
                      ? re._evalUrl && re._evalUrl(i.src)
                      : re.globalEval(
                          (
                            i.text ||
                            i.textContent ||
                            i.innerHTML ||
                            ""
                          ).replace(Xe, "")
                        ));
            s = n = null;
          }
          return this;
        },
      }),
      re.each(
        {
          appendTo: "append",
          prependTo: "prepend",
          insertBefore: "before",
          insertAfter: "after",
          replaceAll: "replaceWith",
        },
        function (e, t) {
          re.fn[e] = function (e) {
            for (var n, i = 0, a = [], r = re(e), o = r.length - 1; o >= i; i++)
              (n = i === o ? this : this.clone(!0)),
                re(r[i])[t](n),
                Q.apply(a, n.get());
            return this.pushStack(a);
          };
        }
      );
    var Je,
      Ze = {};
    !(function () {
      var e,
        t,
        n = me.createElement("div");
      (n.innerHTML =
        "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
        (e = n.getElementsByTagName("a")[0]),
        (e.style.cssText = "float:left;opacity:.5"),
        (ie.opacity = /^0.5/.test(e.style.opacity)),
        (ie.cssFloat = !!e.style.cssFloat),
        (n.style.backgroundClip = "content-box"),
        (n.cloneNode(!0).style.backgroundClip = ""),
        (ie.clearCloneStyle = "content-box" === n.style.backgroundClip),
        (e = n = null),
        (ie.shrinkWrapBlocks = function () {
          var e, n, i;
          if (null == t) {
            if (!(e = me.getElementsByTagName("body")[0])) return;
            "border:0;width:0;height:0;position:absolute;top:0;left:-9999px",
              (n = me.createElement("div")),
              (i = me.createElement("div")),
              e.appendChild(n).appendChild(i),
              (t = !1),
              typeof i.style.zoom !== Te &&
                ((i.style.cssText =
                  "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0;width:1px;padding:1px;zoom:1"),
                (i.innerHTML = "<div></div>"),
                (i.firstChild.style.width = "5px"),
                (t = 3 !== i.offsetWidth)),
              e.removeChild(n),
              (e = n = i = null);
          }
          return t;
        });
    })();
    var et,
      tt,
      nt = /^margin/,
      it = new RegExp("^(" + Ee + ")(?!px)[a-z%]+$", "i"),
      at = /^(top|right|bottom|left)$/;
    e.getComputedStyle
      ? ((et = function (e) {
          return e.ownerDocument.defaultView.getComputedStyle(e, null);
        }),
        (tt = function (e, t, n) {
          var i,
            a,
            r,
            o,
            s = e.style;
          return (
            (n = n || et(e)),
            (o = n ? n.getPropertyValue(t) || n[t] : void 0),
            n &&
              ("" !== o ||
                re.contains(e.ownerDocument, e) ||
                (o = re.style(e, t)),
              it.test(o) &&
                nt.test(t) &&
                ((i = s.width),
                (a = s.minWidth),
                (r = s.maxWidth),
                (s.minWidth = s.maxWidth = s.width = o),
                (o = n.width),
                (s.width = i),
                (s.minWidth = a),
                (s.maxWidth = r))),
            void 0 === o ? o : o + ""
          );
        }))
      : me.documentElement.currentStyle &&
        ((et = function (e) {
          return e.currentStyle;
        }),
        (tt = function (e, t, n) {
          var i,
            a,
            r,
            o,
            s = e.style;
          return (
            (n = n || et(e)),
            (o = n ? n[t] : void 0),
            null == o && s && s[t] && (o = s[t]),
            it.test(o) &&
              !at.test(t) &&
              ((i = s.left),
              (a = e.runtimeStyle),
              (r = a && a.left),
              r && (a.left = e.currentStyle.left),
              (s.left = "fontSize" === t ? "1em" : o),
              (o = s.pixelLeft + "px"),
              (s.left = i),
              r && (a.left = r)),
            void 0 === o ? o : o + "" || "auto"
          );
        })),
      !(function () {
        function t() {
          var t,
            n,
            i = me.getElementsByTagName("body")[0];
          i &&
            ((t = me.createElement("div")),
            (n = me.createElement("div")),
            (t.style.cssText = p),
            i.appendChild(t).appendChild(n),
            (n.style.cssText =
              "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%"),
            re.swap(i, null != i.style.zoom ? { zoom: 1 } : {}, function () {
              a = 4 === n.offsetWidth;
            }),
            (r = !0),
            (o = !1),
            (s = !0),
            e.getComputedStyle &&
              ((o = "1%" !== (e.getComputedStyle(n, null) || {}).top),
              (r =
                "4px" ===
                (e.getComputedStyle(n, null) || { width: "4px" }).width)),
            i.removeChild(t),
            (n = i = null));
        }
        var n,
          i,
          a,
          r,
          o,
          s,
          l = me.createElement("div"),
          p = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px";
        (l.innerHTML =
          "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
          (n = l.getElementsByTagName("a")[0]),
          (n.style.cssText = "float:left;opacity:.5"),
          (ie.opacity = /^0.5/.test(n.style.opacity)),
          (ie.cssFloat = !!n.style.cssFloat),
          (l.style.backgroundClip = "content-box"),
          (l.cloneNode(!0).style.backgroundClip = ""),
          (ie.clearCloneStyle = "content-box" === l.style.backgroundClip),
          (n = l = null),
          re.extend(ie, {
            reliableHiddenOffsets: function () {
              if (null != i) return i;
              var e,
                t,
                n,
                a = me.createElement("div"),
                r = me.getElementsByTagName("body")[0];
              return r
                ? (a.setAttribute("className", "t"),
                  (a.innerHTML =
                    "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
                  (e = me.createElement("div")),
                  (e.style.cssText = p),
                  r.appendChild(e).appendChild(a),
                  (a.innerHTML = "<table><tr><td></td><td>t</td></tr></table>"),
                  (t = a.getElementsByTagName("td")),
                  (t[0].style.cssText =
                    "padding:0;margin:0;border:0;display:none"),
                  (n = 0 === t[0].offsetHeight),
                  (t[0].style.display = ""),
                  (t[1].style.display = "none"),
                  (i = n && 0 === t[0].offsetHeight),
                  r.removeChild(e),
                  (a = r = null),
                  i)
                : void 0;
            },
            boxSizing: function () {
              return null == a && t(), a;
            },
            boxSizingReliable: function () {
              return null == r && t(), r;
            },
            pixelPosition: function () {
              return null == o && t(), o;
            },
            reliableMarginRight: function () {
              var t, n, i, a;
              if (null == s && e.getComputedStyle) {
                if (!(t = me.getElementsByTagName("body")[0])) return;
                (n = me.createElement("div")),
                  (i = me.createElement("div")),
                  (n.style.cssText = p),
                  t.appendChild(n).appendChild(i),
                  (a = i.appendChild(me.createElement("div"))),
                  (a.style.cssText = i.style.cssText =
                    "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0"),
                  (a.style.marginRight = a.style.width = "0"),
                  (i.style.width = "1px"),
                  (s = !parseFloat(
                    (e.getComputedStyle(a, null) || {}).marginRight
                  )),
                  t.removeChild(n);
              }
              return s;
            },
          });
      })(),
      (re.swap = function (e, t, n, i) {
        var a,
          r,
          o = {};
        for (r in t) (o[r] = e.style[r]), (e.style[r] = t[r]);
        a = n.apply(e, i || []);
        for (r in t) e.style[r] = o[r];
        return a;
      });
    var rt = /alpha\([^)]*\)/i,
      ot = /opacity\s*=\s*([^)]*)/,
      st = /^(none|table(?!-c[ea]).+)/,
      lt = new RegExp("^(" + Ee + ")(.*)$", "i"),
      pt = new RegExp("^([+-])=(" + Ee + ")", "i"),
      ct = { position: "absolute", visibility: "hidden", display: "block" },
      dt = { letterSpacing: 0, fontWeight: 400 },
      ut = ["Webkit", "O", "Moz", "ms"];
    re.extend({
      cssHooks: {
        opacity: {
          get: function (e, t) {
            if (t) {
              var n = tt(e, "opacity");
              return "" === n ? "1" : n;
            }
          },
        },
      },
      cssNumber: {
        columnCount: !0,
        fillOpacity: !0,
        fontWeight: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
      },
      cssProps: { float: ie.cssFloat ? "cssFloat" : "styleFloat" },
      style: function (e, t, n, i) {
        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
          var a,
            r,
            o,
            s = re.camelCase(t),
            l = e.style;
          if (
            ((t = re.cssProps[s] || (re.cssProps[s] = I(l, s))),
            (o = re.cssHooks[t] || re.cssHooks[s]),
            void 0 === n)
          )
            return o && "get" in o && void 0 !== (a = o.get(e, !1, i))
              ? a
              : l[t];
          if (
            ((r = typeof n),
            "string" === r &&
              (a = pt.exec(n)) &&
              ((n = (a[1] + 1) * a[2] + parseFloat(re.css(e, t))),
              (r = "number")),
            null != n &&
              n === n &&
              ("number" !== r || re.cssNumber[s] || (n += "px"),
              ie.clearCloneStyle ||
                "" !== n ||
                0 !== t.indexOf("background") ||
                (l[t] = "inherit"),
              !(o && "set" in o && void 0 === (n = o.set(e, n, i)))))
          )
            try {
              (l[t] = ""), (l[t] = n);
            } catch (e) {}
        }
      },
      css: function (e, t, n, i) {
        var a,
          r,
          o,
          s = re.camelCase(t);
        return (
          (t = re.cssProps[s] || (re.cssProps[s] = I(e.style, s))),
          (o = re.cssHooks[t] || re.cssHooks[s]),
          o && "get" in o && (r = o.get(e, !0, n)),
          void 0 === r && (r = tt(e, t, i)),
          "normal" === r && t in dt && (r = dt[t]),
          "" === n || n
            ? ((a = parseFloat(r)), !0 === n || re.isNumeric(a) ? a || 0 : r)
            : r
        );
      },
    }),
      re.each(["height", "width"], function (e, t) {
        re.cssHooks[t] = {
          get: function (e, n, i) {
            return n
              ? 0 === e.offsetWidth && st.test(re.css(e, "display"))
                ? re.swap(e, ct, function () {
                    return _(e, t, i);
                  })
                : _(e, t, i)
              : void 0;
          },
          set: function (e, n, i) {
            var a = i && et(e);
            return L(
              e,
              n,
              i
                ? $(
                    e,
                    t,
                    i,
                    ie.boxSizing() &&
                      "border-box" === re.css(e, "boxSizing", !1, a),
                    a
                  )
                : 0
            );
          },
        };
      }),
      ie.opacity ||
        (re.cssHooks.opacity = {
          get: function (e, t) {
            return ot.test(
              (t && e.currentStyle ? e.currentStyle.filter : e.style.filter) ||
                ""
            )
              ? 0.01 * parseFloat(RegExp.$1) + ""
              : t
              ? "1"
              : "";
          },
          set: function (e, t) {
            var n = e.style,
              i = e.currentStyle,
              a = re.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
              r = (i && i.filter) || n.filter || "";
            (n.zoom = 1),
              ((t >= 1 || "" === t) &&
                "" === re.trim(r.replace(rt, "")) &&
                n.removeAttribute &&
                (n.removeAttribute("filter"), "" === t || (i && !i.filter))) ||
                (n.filter = rt.test(r) ? r.replace(rt, a) : r + " " + a);
          },
        }),
      (re.cssHooks.marginRight = E(ie.reliableMarginRight, function (e, t) {
        return t
          ? re.swap(e, { display: "inline-block" }, tt, [e, "marginRight"])
          : void 0;
      })),
      re.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
        (re.cssHooks[e + t] = {
          expand: function (n) {
            for (
              var i = 0, a = {}, r = "string" == typeof n ? n.split(" ") : [n];
              4 > i;
              i++
            )
              a[e + Ie[i] + t] = r[i] || r[i - 2] || r[0];
            return a;
          },
        }),
          nt.test(e) || (re.cssHooks[e + t].set = L);
      }),
      re.fn.extend({
        css: function (e, t) {
          return Le(
            this,
            function (e, t, n) {
              var i,
                a,
                r = {},
                o = 0;
              if (re.isArray(t)) {
                for (i = et(e), a = t.length; a > o; o++)
                  r[t[o]] = re.css(e, t[o], !1, i);
                return r;
              }
              return void 0 !== n ? re.style(e, t, n) : re.css(e, t);
            },
            e,
            t,
            arguments.length > 1
          );
        },
        show: function () {
          return A(this, !0);
        },
        hide: function () {
          return A(this);
        },
        toggle: function (e) {
          return "boolean" == typeof e
            ? e
              ? this.show()
              : this.hide()
            : this.each(function () {
                Ae(this) ? re(this).show() : re(this).hide();
              });
        },
      }),
      (re.Tween = D),
      (D.prototype = {
        constructor: D,
        init: function (e, t, n, i, a, r) {
          (this.elem = e),
            (this.prop = n),
            (this.easing = a || "swing"),
            (this.options = t),
            (this.start = this.now = this.cur()),
            (this.end = i),
            (this.unit = r || (re.cssNumber[n] ? "" : "px"));
        },
        cur: function () {
          var e = D.propHooks[this.prop];
          return e && e.get ? e.get(this) : D.propHooks._default.get(this);
        },
        run: function (e) {
          var t,
            n = D.propHooks[this.prop];
          return (
            (this.pos = t =
              this.options.duration
                ? re.easing[this.easing](
                    e,
                    this.options.duration * e,
                    0,
                    1,
                    this.options.duration
                  )
                : e),
            (this.now = (this.end - this.start) * t + this.start),
            this.options.step &&
              this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : D.propHooks._default.set(this),
            this
          );
        },
      }),
      (D.prototype.init.prototype = D.prototype),
      (D.propHooks = {
        _default: {
          get: function (e) {
            var t;
            return null == e.elem[e.prop] ||
              (e.elem.style && null != e.elem.style[e.prop])
              ? ((t = re.css(e.elem, e.prop, "")), t && "auto" !== t ? t : 0)
              : e.elem[e.prop];
          },
          set: function (e) {
            re.fx.step[e.prop]
              ? re.fx.step[e.prop](e)
              : e.elem.style &&
                (null != e.elem.style[re.cssProps[e.prop]] ||
                  re.cssHooks[e.prop])
              ? re.style(e.elem, e.prop, e.now + e.unit)
              : (e.elem[e.prop] = e.now);
          },
        },
      }),
      (D.propHooks.scrollTop = D.propHooks.scrollLeft =
        {
          set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
          },
        }),
      (re.easing = {
        linear: function (e) {
          return e;
        },
        swing: function (e) {
          return 0.5 - Math.cos(e * Math.PI) / 2;
        },
      }),
      (re.fx = D.prototype.init),
      (re.fx.step = {});
    var ft,
      ht,
      mt = /^(?:toggle|show|hide)$/,
      gt = new RegExp("^(?:([+-])=|)(" + Ee + ")([a-z%]*)$", "i"),
      vt = /queueHooks$/,
      bt = [B],
      yt = {
        "*": [
          function (e, t) {
            var n = this.createTween(e, t),
              i = n.cur(),
              a = gt.exec(t),
              r = (a && a[3]) || (re.cssNumber[e] ? "" : "px"),
              o =
                (re.cssNumber[e] || ("px" !== r && +i)) &&
                gt.exec(re.css(n.elem, e)),
              s = 1,
              l = 20;
            if (o && o[3] !== r) {
              (r = r || o[3]), (a = a || []), (o = +i || 1);
              do {
                (s = s || ".5"), (o /= s), re.style(n.elem, e, o + r);
              } while (s !== (s = n.cur() / i) && 1 !== s && --l);
            }
            return (
              a &&
                ((o = n.start = +o || +i || 0),
                (n.unit = r),
                (n.end = a[1] ? o + (a[1] + 1) * a[2] : +a[2])),
              n
            );
          },
        ],
      };
    (re.Animation = re.extend(z, {
      tweener: function (e, t) {
        re.isFunction(e) ? ((t = e), (e = ["*"])) : (e = e.split(" "));
        for (var n, i = 0, a = e.length; a > i; i++)
          (n = e[i]), (yt[n] = yt[n] || []), yt[n].unshift(t);
      },
      prefilter: function (e, t) {
        t ? bt.unshift(e) : bt.push(e);
      },
    })),
      (re.speed = function (e, t, n) {
        var i =
          e && "object" == typeof e
            ? re.extend({}, e)
            : {
                complete: n || (!n && t) || (re.isFunction(e) && e),
                duration: e,
                easing: (n && t) || (t && !re.isFunction(t) && t),
              };
        return (
          (i.duration = re.fx.off
            ? 0
            : "number" == typeof i.duration
            ? i.duration
            : i.duration in re.fx.speeds
            ? re.fx.speeds[i.duration]
            : re.fx.speeds._default),
          (null == i.queue || !0 === i.queue) && (i.queue = "fx"),
          (i.old = i.complete),
          (i.complete = function () {
            re.isFunction(i.old) && i.old.call(this),
              i.queue && re.dequeue(this, i.queue);
          }),
          i
        );
      }),
      re.fn.extend({
        fadeTo: function (e, t, n, i) {
          return this.filter(Ae)
            .css("opacity", 0)
            .show()
            .end()
            .animate({ opacity: t }, e, n, i);
        },
        animate: function (e, t, n, i) {
          var a = re.isEmptyObject(e),
            r = re.speed(t, n, i),
            o = function () {
              var t = z(this, re.extend({}, e), r);
              (a || re._data(this, "finish")) && t.stop(!0);
            };
          return (
            (o.finish = o),
            a || !1 === r.queue ? this.each(o) : this.queue(r.queue, o)
          );
        },
        stop: function (e, t, n) {
          var i = function (e) {
            var t = e.stop;
            delete e.stop, t(n);
          };
          return (
            "string" != typeof e && ((n = t), (t = e), (e = void 0)),
            t && !1 !== e && this.queue(e || "fx", []),
            this.each(function () {
              var t = !0,
                a = null != e && e + "queueHooks",
                r = re.timers,
                o = re._data(this);
              if (a) o[a] && o[a].stop && i(o[a]);
              else for (a in o) o[a] && o[a].stop && vt.test(a) && i(o[a]);
              for (a = r.length; a--; )
                r[a].elem !== this ||
                  (null != e && r[a].queue !== e) ||
                  (r[a].anim.stop(n), (t = !1), r.splice(a, 1));
              (t || !n) && re.dequeue(this, e);
            })
          );
        },
        finish: function (e) {
          return (
            !1 !== e && (e = e || "fx"),
            this.each(function () {
              var t,
                n = re._data(this),
                i = n[e + "queue"],
                a = n[e + "queueHooks"],
                r = re.timers,
                o = i ? i.length : 0;
              for (
                n.finish = !0,
                  re.queue(this, e, []),
                  a && a.stop && a.stop.call(this, !0),
                  t = r.length;
                t--;

              )
                r[t].elem === this &&
                  r[t].queue === e &&
                  (r[t].anim.stop(!0), r.splice(t, 1));
              for (t = 0; o > t; t++)
                i[t] && i[t].finish && i[t].finish.call(this);
              delete n.finish;
            })
          );
        },
      }),
      re.each(["toggle", "show", "hide"], function (e, t) {
        var n = re.fn[t];
        re.fn[t] = function (e, i, a) {
          return null == e || "boolean" == typeof e
            ? n.apply(this, arguments)
            : this.animate(P(t, !0), e, i, a);
        };
      }),
      re.each(
        {
          slideDown: P("show"),
          slideUp: P("hide"),
          slideToggle: P("toggle"),
          fadeIn: { opacity: "show" },
          fadeOut: { opacity: "hide" },
          fadeToggle: { opacity: "toggle" },
        },
        function (e, t) {
          re.fn[e] = function (e, n, i) {
            return this.animate(t, e, n, i);
          };
        }
      ),
      (re.timers = []),
      (re.fx.tick = function () {
        var e,
          t = re.timers,
          n = 0;
        for (ft = re.now(); n < t.length; n++)
          (e = t[n])() || t[n] !== e || t.splice(n--, 1);
        t.length || re.fx.stop(), (ft = void 0);
      }),
      (re.fx.timer = function (e) {
        re.timers.push(e), e() ? re.fx.start() : re.timers.pop();
      }),
      (re.fx.interval = 13),
      (re.fx.start = function () {
        ht || (ht = setInterval(re.fx.tick, re.fx.interval));
      }),
      (re.fx.stop = function () {
        clearInterval(ht), (ht = null);
      }),
      (re.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
      (re.fn.delay = function (e, t) {
        return (
          (e = re.fx ? re.fx.speeds[e] || e : e),
          (t = t || "fx"),
          this.queue(t, function (t, n) {
            var i = setTimeout(t, e);
            n.stop = function () {
              clearTimeout(i);
            };
          })
        );
      }),
      (function () {
        var e,
          t,
          n,
          i,
          a = me.createElement("div");
        a.setAttribute("className", "t"),
          (a.innerHTML =
            "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
          (e = a.getElementsByTagName("a")[0]),
          (n = me.createElement("select")),
          (i = n.appendChild(me.createElement("option"))),
          (t = a.getElementsByTagName("input")[0]),
          (e.style.cssText = "top:1px"),
          (ie.getSetAttribute = "t" !== a.className),
          (ie.style = /top/.test(e.getAttribute("style"))),
          (ie.hrefNormalized = "/a" === e.getAttribute("href")),
          (ie.checkOn = !!t.value),
          (ie.optSelected = i.selected),
          (ie.enctype = !!me.createElement("form").enctype),
          (n.disabled = !0),
          (ie.optDisabled = !i.disabled),
          (t = me.createElement("input")),
          t.setAttribute("value", ""),
          (ie.input = "" === t.getAttribute("value")),
          (t.value = "t"),
          t.setAttribute("type", "radio"),
          (ie.radioValue = "t" === t.value),
          (e = t = n = i = a = null);
      })();
    var wt = /\r/g;
    re.fn.extend({
      val: function (e) {
        var t,
          n,
          i,
          a = this[0];
        return arguments.length
          ? ((i = re.isFunction(e)),
            this.each(function (n) {
              var a;
              1 === this.nodeType &&
                ((a = i ? e.call(this, n, re(this).val()) : e),
                null == a
                  ? (a = "")
                  : "number" == typeof a
                  ? (a += "")
                  : re.isArray(a) &&
                    (a = re.map(a, function (e) {
                      return null == e ? "" : e + "";
                    })),
                ((t =
                  re.valHooks[this.type] ||
                  re.valHooks[this.nodeName.toLowerCase()]) &&
                  "set" in t &&
                  void 0 !== t.set(this, a, "value")) ||
                  (this.value = a));
            }))
          : a
          ? ((t = re.valHooks[a.type] || re.valHooks[a.nodeName.toLowerCase()]),
            t && "get" in t && void 0 !== (n = t.get(a, "value"))
              ? n
              : ((n = a.value),
                "string" == typeof n ? n.replace(wt, "") : null == n ? "" : n))
          : void 0;
      },
    }),
      re.extend({
        valHooks: {
          option: {
            get: function (e) {
              var t = re.find.attr(e, "value");
              return null != t ? t : re.text(e);
            },
          },
          select: {
            get: function (e) {
              for (
                var t,
                  n,
                  i = e.options,
                  a = e.selectedIndex,
                  r = "select-one" === e.type || 0 > a,
                  o = r ? null : [],
                  s = r ? a + 1 : i.length,
                  l = 0 > a ? s : r ? a : 0;
                s > l;
                l++
              )
                if (
                  ((n = i[l]),
                  !(
                    (!n.selected && l !== a) ||
                    (ie.optDisabled
                      ? n.disabled
                      : null !== n.getAttribute("disabled")) ||
                    (n.parentNode.disabled &&
                      re.nodeName(n.parentNode, "optgroup"))
                  ))
                ) {
                  if (((t = re(n).val()), r)) return t;
                  o.push(t);
                }
              return o;
            },
            set: function (e, t) {
              for (
                var n, i, a = e.options, r = re.makeArray(t), o = a.length;
                o--;

              )
                if (((i = a[o]), re.inArray(re.valHooks.option.get(i), r) >= 0))
                  try {
                    i.selected = n = !0;
                  } catch (e) {
                    i.scrollHeight;
                  }
                else i.selected = !1;
              return n || (e.selectedIndex = -1), a;
            },
          },
        },
      }),
      re.each(["radio", "checkbox"], function () {
        (re.valHooks[this] = {
          set: function (e, t) {
            return re.isArray(t)
              ? (e.checked = re.inArray(re(e).val(), t) >= 0)
              : void 0;
          },
        }),
          ie.checkOn ||
            (re.valHooks[this].get = function (e) {
              return null === e.getAttribute("value") ? "on" : e.value;
            });
      });
    var xt,
      Ct,
      Tt = re.expr.attrHandle,
      St = /^(?:checked|selected)$/i,
      kt = ie.getSetAttribute,
      Et = ie.input;
    re.fn.extend({
      attr: function (e, t) {
        return Le(this, re.attr, e, t, arguments.length > 1);
      },
      removeAttr: function (e) {
        return this.each(function () {
          re.removeAttr(this, e);
        });
      },
    }),
      re.extend({
        attr: function (e, t, n) {
          var i,
            a,
            r = e.nodeType;
          if (e && 3 !== r && 8 !== r && 2 !== r)
            return typeof e.getAttribute === Te
              ? re.prop(e, t, n)
              : ((1 === r && re.isXMLDoc(e)) ||
                  ((t = t.toLowerCase()),
                  (i =
                    re.attrHooks[t] || (re.expr.match.bool.test(t) ? Ct : xt))),
                void 0 === n
                  ? i && "get" in i && null !== (a = i.get(e, t))
                    ? a
                    : ((a = re.find.attr(e, t)), null == a ? void 0 : a)
                  : null !== n
                  ? i && "set" in i && void 0 !== (a = i.set(e, n, t))
                    ? a
                    : (e.setAttribute(t, n + ""), n)
                  : void re.removeAttr(e, t));
        },
        removeAttr: function (e, t) {
          var n,
            i,
            a = 0,
            r = t && t.match(ye);
          if (r && 1 === e.nodeType)
            for (; (n = r[a++]); )
              (i = re.propFix[n] || n),
                re.expr.match.bool.test(n)
                  ? (Et && kt) || !St.test(n)
                    ? (e[i] = !1)
                    : (e[re.camelCase("default-" + n)] = e[i] = !1)
                  : re.attr(e, n, ""),
                e.removeAttribute(kt ? n : i);
        },
        attrHooks: {
          type: {
            set: function (e, t) {
              if (!ie.radioValue && "radio" === t && re.nodeName(e, "input")) {
                var n = e.value;
                return e.setAttribute("type", t), n && (e.value = n), t;
              }
            },
          },
        },
      }),
      (Ct = {
        set: function (e, t, n) {
          return (
            !1 === t
              ? re.removeAttr(e, n)
              : (Et && kt) || !St.test(n)
              ? e.setAttribute((!kt && re.propFix[n]) || n, n)
              : (e[re.camelCase("default-" + n)] = e[n] = !0),
            n
          );
        },
      }),
      re.each(re.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = Tt[t] || re.find.attr;
        Tt[t] =
          (Et && kt) || !St.test(t)
            ? function (e, t, i) {
                var a, r;
                return (
                  i ||
                    ((r = Tt[t]),
                    (Tt[t] = a),
                    (a = null != n(e, t, i) ? t.toLowerCase() : null),
                    (Tt[t] = r)),
                  a
                );
              }
            : function (e, t, n) {
                return n
                  ? void 0
                  : e[re.camelCase("default-" + t)]
                  ? t.toLowerCase()
                  : null;
              };
      }),
      (Et && kt) ||
        (re.attrHooks.value = {
          set: function (e, t, n) {
            return re.nodeName(e, "input")
              ? void (e.defaultValue = t)
              : xt && xt.set(e, t, n);
          },
        }),
      kt ||
        ((xt = {
          set: function (e, t, n) {
            var i = e.getAttributeNode(n);
            return (
              i || e.setAttributeNode((i = e.ownerDocument.createAttribute(n))),
              (i.value = t += ""),
              "value" === n || t === e.getAttribute(n) ? t : void 0
            );
          },
        }),
        (Tt.id =
          Tt.name =
          Tt.coords =
            function (e, t, n) {
              var i;
              return n
                ? void 0
                : (i = e.getAttributeNode(t)) && "" !== i.value
                ? i.value
                : null;
            }),
        (re.valHooks.button = {
          get: function (e, t) {
            var n = e.getAttributeNode(t);
            return n && n.specified ? n.value : void 0;
          },
          set: xt.set,
        }),
        (re.attrHooks.contenteditable = {
          set: function (e, t, n) {
            xt.set(e, "" !== t && t, n);
          },
        }),
        re.each(["width", "height"], function (e, t) {
          re.attrHooks[t] = {
            set: function (e, n) {
              return "" === n ? (e.setAttribute(t, "auto"), n) : void 0;
            },
          };
        })),
      ie.style ||
        (re.attrHooks.style = {
          get: function (e) {
            return e.style.cssText || void 0;
          },
          set: function (e, t) {
            return (e.style.cssText = t + "");
          },
        });
    var It = /^(?:input|select|textarea|button|object)$/i,
      At = /^(?:a|area)$/i;
    re.fn.extend({
      prop: function (e, t) {
        return Le(this, re.prop, e, t, arguments.length > 1);
      },
      removeProp: function (e) {
        return (
          (e = re.propFix[e] || e),
          this.each(function () {
            try {
              (this[e] = void 0), delete this[e];
            } catch (e) {}
          })
        );
      },
    }),
      re.extend({
        propFix: { for: "htmlFor", class: "className" },
        prop: function (e, t, n) {
          var i,
            a,
            r,
            o = e.nodeType;
          if (e && 3 !== o && 8 !== o && 2 !== o)
            return (
              (r = 1 !== o || !re.isXMLDoc(e)),
              r && ((t = re.propFix[t] || t), (a = re.propHooks[t])),
              void 0 !== n
                ? a && "set" in a && void 0 !== (i = a.set(e, n, t))
                  ? i
                  : (e[t] = n)
                : a && "get" in a && null !== (i = a.get(e, t))
                ? i
                : e[t]
            );
        },
        propHooks: {
          tabIndex: {
            get: function (e) {
              var t = re.find.attr(e, "tabindex");
              return t
                ? parseInt(t, 10)
                : It.test(e.nodeName) || (At.test(e.nodeName) && e.href)
                ? 0
                : -1;
            },
          },
        },
      }),
      ie.hrefNormalized ||
        re.each(["href", "src"], function (e, t) {
          re.propHooks[t] = {
            get: function (e) {
              return e.getAttribute(t, 4);
            },
          };
        }),
      ie.optSelected ||
        (re.propHooks.selected = {
          get: function (e) {
            var t = e.parentNode;
            return (
              t &&
                (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex),
              null
            );
          },
        }),
      re.each(
        [
          "tabIndex",
          "readOnly",
          "maxLength",
          "cellSpacing",
          "cellPadding",
          "rowSpan",
          "colSpan",
          "useMap",
          "frameBorder",
          "contentEditable",
        ],
        function () {
          re.propFix[this.toLowerCase()] = this;
        }
      ),
      ie.enctype || (re.propFix.enctype = "encoding");
    var Lt = /[\t\r\n\f]/g;
    re.fn.extend({
      addClass: function (e) {
        var t,
          n,
          i,
          a,
          r,
          o,
          s = 0,
          l = this.length,
          p = "string" == typeof e && e;
        if (re.isFunction(e))
          return this.each(function (t) {
            re(this).addClass(e.call(this, t, this.className));
          });
        if (p)
          for (t = (e || "").match(ye) || []; l > s; s++)
            if (
              ((n = this[s]),
              (i =
                1 === n.nodeType &&
                (n.className
                  ? (" " + n.className + " ").replace(Lt, " ")
                  : " ")))
            ) {
              for (r = 0; (a = t[r++]); )
                i.indexOf(" " + a + " ") < 0 && (i += a + " ");
              (o = re.trim(i)), n.className !== o && (n.className = o);
            }
        return this;
      },
      removeClass: function (e) {
        var t,
          n,
          i,
          a,
          r,
          o,
          s = 0,
          l = this.length,
          p = 0 === arguments.length || ("string" == typeof e && e);
        if (re.isFunction(e))
          return this.each(function (t) {
            re(this).removeClass(e.call(this, t, this.className));
          });
        if (p)
          for (t = (e || "").match(ye) || []; l > s; s++)
            if (
              ((n = this[s]),
              (i =
                1 === n.nodeType &&
                (n.className
                  ? (" " + n.className + " ").replace(Lt, " ")
                  : "")))
            ) {
              for (r = 0; (a = t[r++]); )
                for (; i.indexOf(" " + a + " ") >= 0; )
                  i = i.replace(" " + a + " ", " ");
              (o = e ? re.trim(i) : ""), n.className !== o && (n.className = o);
            }
        return this;
      },
      toggleClass: function (e, t) {
        var n = typeof e;
        return "boolean" == typeof t && "string" === n
          ? t
            ? this.addClass(e)
            : this.removeClass(e)
          : this.each(
              re.isFunction(e)
                ? function (n) {
                    re(this).toggleClass(e.call(this, n, this.className, t), t);
                  }
                : function () {
                    if ("string" === n)
                      for (
                        var t, i = 0, a = re(this), r = e.match(ye) || [];
                        (t = r[i++]);

                      )
                        a.hasClass(t) ? a.removeClass(t) : a.addClass(t);
                    else
                      (n === Te || "boolean" === n) &&
                        (this.className &&
                          re._data(this, "__className__", this.className),
                        (this.className =
                          this.className || !1 === e
                            ? ""
                            : re._data(this, "__className__") || ""));
                  }
            );
      },
      hasClass: function (e) {
        for (var t = " " + e + " ", n = 0, i = this.length; i > n; n++)
          if (
            1 === this[n].nodeType &&
            (" " + this[n].className + " ").replace(Lt, " ").indexOf(t) >= 0
          )
            return !0;
        return !1;
      },
    }),
      re.each(
        "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
          " "
        ),
        function (e, t) {
          re.fn[t] = function (e, n) {
            return arguments.length > 0
              ? this.on(t, null, e, n)
              : this.trigger(t);
          };
        }
      ),
      re.fn.extend({
        hover: function (e, t) {
          return this.mouseenter(e).mouseleave(t || e);
        },
        bind: function (e, t, n) {
          return this.on(e, null, t, n);
        },
        unbind: function (e, t) {
          return this.off(e, null, t);
        },
        delegate: function (e, t, n, i) {
          return this.on(t, e, n, i);
        },
        undelegate: function (e, t, n) {
          return 1 === arguments.length
            ? this.off(e, "**")
            : this.off(t, e || "**", n);
        },
      });
    var $t = re.now(),
      _t = /\?/,
      Dt =
        /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    (re.parseJSON = function (t) {
      if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
      var n,
        i = null,
        a = re.trim(t + "");
      return a &&
        !re.trim(
          a.replace(Dt, function (e, t, a, r) {
            return (
              n && t && (i = 0),
              0 === i ? e : ((n = a || t), (i += !r - !a), "")
            );
          })
        )
        ? Function("return " + a)()
        : re.error("Invalid JSON: " + t);
    }),
      (re.parseXML = function (t) {
        var n, i;
        if (!t || "string" != typeof t) return null;
        try {
          e.DOMParser
            ? ((i = new DOMParser()), (n = i.parseFromString(t, "text/xml")))
            : ((n = new ActiveXObject("Microsoft.XMLDOM")),
              (n.async = "false"),
              n.loadXML(t));
        } catch (e) {
          n = void 0;
        }
        return (
          (n &&
            n.documentElement &&
            !n.getElementsByTagName("parsererror").length) ||
            re.error("Invalid XML: " + t),
          n
        );
      });
    var Ot,
      Pt,
      Mt = /#.*$/,
      Bt = /([?&])_=[^&]*/,
      Rt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
      zt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      Nt = /^(?:GET|HEAD)$/,
      jt = /^\/\//,
      Ht = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
      Wt = {},
      Ft = {},
      Ut = "*/".concat("*");
    try {
      Pt = location.href;
    } catch (e) {
      (Pt = me.createElement("a")), (Pt.href = ""), (Pt = Pt.href);
    }
    (Ot = Ht.exec(Pt.toLowerCase()) || []),
      re.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
          url: Pt,
          type: "GET",
          isLocal: zt.test(Ot[1]),
          global: !0,
          processData: !0,
          async: !0,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          accepts: {
            "*": Ut,
            text: "text/plain",
            html: "text/html",
            xml: "application/xml, text/xml",
            json: "application/json, text/javascript",
          },
          contents: { xml: /xml/, html: /html/, json: /json/ },
          responseFields: {
            xml: "responseXML",
            text: "responseText",
            json: "responseJSON",
          },
          converters: {
            "* text": String,
            "text html": !0,
            "text json": re.parseJSON,
            "text xml": re.parseXML,
          },
          flatOptions: { url: !0, context: !0 },
        },
        ajaxSetup: function (e, t) {
          return t ? H(H(e, re.ajaxSettings), t) : H(re.ajaxSettings, e);
        },
        ajaxPrefilter: N(Wt),
        ajaxTransport: N(Ft),
        ajax: function (e, t) {
          function n(e, t, n, i) {
            var a,
              c,
              v,
              b,
              w,
              C = t;
            2 !== y &&
              ((y = 2),
              s && clearTimeout(s),
              (p = void 0),
              (o = i || ""),
              (x.readyState = e > 0 ? 4 : 0),
              (a = (e >= 200 && 300 > e) || 304 === e),
              n && (b = W(d, x, n)),
              (b = F(d, b, x, a)),
              a
                ? (d.ifModified &&
                    ((w = x.getResponseHeader("Last-Modified")),
                    w && (re.lastModified[r] = w),
                    (w = x.getResponseHeader("etag")) && (re.etag[r] = w)),
                  204 === e || "HEAD" === d.type
                    ? (C = "nocontent")
                    : 304 === e
                    ? (C = "notmodified")
                    : ((C = b.state), (c = b.data), (v = b.error), (a = !v)))
                : ((v = C), (e || !C) && ((C = "error"), 0 > e && (e = 0))),
              (x.status = e),
              (x.statusText = (t || C) + ""),
              a ? h.resolveWith(u, [c, C, x]) : h.rejectWith(u, [x, C, v]),
              x.statusCode(g),
              (g = void 0),
              l &&
                f.trigger(a ? "ajaxSuccess" : "ajaxError", [x, d, a ? c : v]),
              m.fireWith(u, [x, C]),
              l &&
                (f.trigger("ajaxComplete", [x, d]),
                --re.active || re.event.trigger("ajaxStop")));
          }
          "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
          var i,
            a,
            r,
            o,
            s,
            l,
            p,
            c,
            d = re.ajaxSetup({}, t),
            u = d.context || d,
            f = d.context && (u.nodeType || u.jquery) ? re(u) : re.event,
            h = re.Deferred(),
            m = re.Callbacks("once memory"),
            g = d.statusCode || {},
            v = {},
            b = {},
            y = 0,
            w = "canceled",
            x = {
              readyState: 0,
              getResponseHeader: function (e) {
                var t;
                if (2 === y) {
                  if (!c)
                    for (c = {}; (t = Rt.exec(o)); )
                      c[t[1].toLowerCase()] = t[2];
                  t = c[e.toLowerCase()];
                }
                return null == t ? null : t;
              },
              getAllResponseHeaders: function () {
                return 2 === y ? o : null;
              },
              setRequestHeader: function (e, t) {
                var n = e.toLowerCase();
                return y || ((e = b[n] = b[n] || e), (v[e] = t)), this;
              },
              overrideMimeType: function (e) {
                return y || (d.mimeType = e), this;
              },
              statusCode: function (e) {
                var t;
                if (e)
                  if (2 > y) for (t in e) g[t] = [g[t], e[t]];
                  else x.always(e[x.status]);
                return this;
              },
              abort: function (e) {
                var t = e || w;
                return p && p.abort(t), n(0, t), this;
              },
            };
          if (
            ((h.promise(x).complete = m.add),
            (x.success = x.done),
            (x.error = x.fail),
            (d.url = ((e || d.url || Pt) + "")
              .replace(Mt, "")
              .replace(jt, Ot[1] + "//")),
            (d.type = t.method || t.type || d.method || d.type),
            (d.dataTypes = re
              .trim(d.dataType || "*")
              .toLowerCase()
              .match(ye) || [""]),
            null == d.crossDomain &&
              ((i = Ht.exec(d.url.toLowerCase())),
              (d.crossDomain = !(
                !i ||
                (i[1] === Ot[1] &&
                  i[2] === Ot[2] &&
                  (i[3] || ("http:" === i[1] ? "80" : "443")) ===
                    (Ot[3] || ("http:" === Ot[1] ? "80" : "443")))
              ))),
            d.data &&
              d.processData &&
              "string" != typeof d.data &&
              (d.data = re.param(d.data, d.traditional)),
            j(Wt, d, t, x),
            2 === y)
          )
            return x;
          (l = d.global),
            l && 0 == re.active++ && re.event.trigger("ajaxStart"),
            (d.type = d.type.toUpperCase()),
            (d.hasContent = !Nt.test(d.type)),
            (r = d.url),
            d.hasContent ||
              (d.data &&
                ((r = d.url += (_t.test(r) ? "&" : "?") + d.data),
                delete d.data),
              !1 === d.cache &&
                (d.url = Bt.test(r)
                  ? r.replace(Bt, "$1_=" + $t++)
                  : r + (_t.test(r) ? "&" : "?") + "_=" + $t++)),
            d.ifModified &&
              (re.lastModified[r] &&
                x.setRequestHeader("If-Modified-Since", re.lastModified[r]),
              re.etag[r] && x.setRequestHeader("If-None-Match", re.etag[r])),
            ((d.data && d.hasContent && !1 !== d.contentType) ||
              t.contentType) &&
              x.setRequestHeader("Content-Type", d.contentType),
            x.setRequestHeader(
              "Accept",
              d.dataTypes[0] && d.accepts[d.dataTypes[0]]
                ? d.accepts[d.dataTypes[0]] +
                    ("*" !== d.dataTypes[0] ? ", " + Ut + "; q=0.01" : "")
                : d.accepts["*"]
            );
          for (a in d.headers) x.setRequestHeader(a, d.headers[a]);
          if (d.beforeSend && (!1 === d.beforeSend.call(u, x, d) || 2 === y))
            return x.abort();
          w = "abort";
          for (a in { success: 1, error: 1, complete: 1 }) x[a](d[a]);
          if ((p = j(Ft, d, t, x))) {
            (x.readyState = 1),
              l && f.trigger("ajaxSend", [x, d]),
              d.async &&
                d.timeout > 0 &&
                (s = setTimeout(function () {
                  x.abort("timeout");
                }, d.timeout));
            try {
              (y = 1), p.send(v, n);
            } catch (e) {
              if (!(2 > y)) throw e;
              n(-1, e);
            }
          } else n(-1, "No Transport");
          return x;
        },
        getJSON: function (e, t, n) {
          return re.get(e, t, n, "json");
        },
        getScript: function (e, t) {
          return re.get(e, void 0, t, "script");
        },
      }),
      re.each(["get", "post"], function (e, t) {
        re[t] = function (e, n, i, a) {
          return (
            re.isFunction(n) && ((a = a || i), (i = n), (n = void 0)),
            re.ajax({ url: e, type: t, dataType: a, data: n, success: i })
          );
        };
      }),
      re.each(
        [
          "ajaxStart",
          "ajaxStop",
          "ajaxComplete",
          "ajaxError",
          "ajaxSuccess",
          "ajaxSend",
        ],
        function (e, t) {
          re.fn[t] = function (e) {
            return this.on(t, e);
          };
        }
      ),
      (re._evalUrl = function (e) {
        return re.ajax({
          url: e,
          type: "GET",
          dataType: "script",
          async: !1,
          global: !1,
          throws: !0,
        });
      }),
      re.fn.extend({
        wrapAll: function (e) {
          if (re.isFunction(e))
            return this.each(function (t) {
              re(this).wrapAll(e.call(this, t));
            });
          if (this[0]) {
            var t = re(e, this[0].ownerDocument).eq(0).clone(!0);
            this[0].parentNode && t.insertBefore(this[0]),
              t
                .map(function () {
                  for (
                    var e = this;
                    e.firstChild && 1 === e.firstChild.nodeType;

                  )
                    e = e.firstChild;
                  return e;
                })
                .append(this);
          }
          return this;
        },
        wrapInner: function (e) {
          return this.each(
            re.isFunction(e)
              ? function (t) {
                  re(this).wrapInner(e.call(this, t));
                }
              : function () {
                  var t = re(this),
                    n = t.contents();
                  n.length ? n.wrapAll(e) : t.append(e);
                }
          );
        },
        wrap: function (e) {
          var t = re.isFunction(e);
          return this.each(function (n) {
            re(this).wrapAll(t ? e.call(this, n) : e);
          });
        },
        unwrap: function () {
          return this.parent()
            .each(function () {
              re.nodeName(this, "body") ||
                re(this).replaceWith(this.childNodes);
            })
            .end();
        },
      }),
      (re.expr.filters.hidden = function (e) {
        return (
          (e.offsetWidth <= 0 && e.offsetHeight <= 0) ||
          (!ie.reliableHiddenOffsets() &&
            "none" === ((e.style && e.style.display) || re.css(e, "display")))
        );
      }),
      (re.expr.filters.visible = function (e) {
        return !re.expr.filters.hidden(e);
      });
    var Gt = /%20/g,
      qt = /\[\]$/,
      Vt = /\r?\n/g,
      Xt = /^(?:submit|button|image|reset|file)$/i,
      Yt = /^(?:input|select|textarea|keygen)/i;
    (re.param = function (e, t) {
      var n,
        i = [],
        a = function (e, t) {
          (t = re.isFunction(t) ? t() : null == t ? "" : t),
            (i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t));
        };
      if (
        (void 0 === t && (t = re.ajaxSettings && re.ajaxSettings.traditional),
        re.isArray(e) || (e.jquery && !re.isPlainObject(e)))
      )
        re.each(e, function () {
          a(this.name, this.value);
        });
      else for (n in e) U(n, e[n], t, a);
      return i.join("&").replace(Gt, "+");
    }),
      re.fn.extend({
        serialize: function () {
          return re.param(this.serializeArray());
        },
        serializeArray: function () {
          return this.map(function () {
            var e = re.prop(this, "elements");
            return e ? re.makeArray(e) : this;
          })
            .filter(function () {
              var e = this.type;
              return (
                this.name &&
                !re(this).is(":disabled") &&
                Yt.test(this.nodeName) &&
                !Xt.test(e) &&
                (this.checked || !$e.test(e))
              );
            })
            .map(function (e, t) {
              var n = re(this).val();
              return null == n
                ? null
                : re.isArray(n)
                ? re.map(n, function (e) {
                    return { name: t.name, value: e.replace(Vt, "\r\n") };
                  })
                : { name: t.name, value: n.replace(Vt, "\r\n") };
            })
            .get();
        },
      }),
      (re.ajaxSettings.xhr =
        void 0 !== e.ActiveXObject
          ? function () {
              return (
                (!this.isLocal &&
                  /^(get|post|head|put|delete|options)$/i.test(this.type) &&
                  G()) ||
                q()
              );
            }
          : G);
    var Kt = 0,
      Qt = {},
      Jt = re.ajaxSettings.xhr();
    e.ActiveXObject &&
      re(e).on("unload", function () {
        for (var e in Qt) Qt[e](void 0, !0);
      }),
      (ie.cors = !!Jt && "withCredentials" in Jt),
      (Jt = ie.ajax = !!Jt) &&
        re.ajaxTransport(function (e) {
          if (!e.crossDomain || ie.cors) {
            var t;
            return {
              send: function (n, i) {
                var a,
                  r = e.xhr(),
                  o = ++Kt;
                if (
                  (r.open(e.type, e.url, e.async, e.username, e.password),
                  e.xhrFields)
                )
                  for (a in e.xhrFields) r[a] = e.xhrFields[a];
                e.mimeType &&
                  r.overrideMimeType &&
                  r.overrideMimeType(e.mimeType),
                  e.crossDomain ||
                    n["X-Requested-With"] ||
                    (n["X-Requested-With"] = "XMLHttpRequest");
                for (a in n)
                  void 0 !== n[a] && r.setRequestHeader(a, n[a] + "");
                r.send((e.hasContent && e.data) || null),
                  (t = function (n, a) {
                    var s, l, p;
                    if (t && (a || 4 === r.readyState))
                      if (
                        (delete Qt[o],
                        (t = void 0),
                        (r.onreadystatechange = re.noop),
                        a)
                      )
                        4 !== r.readyState && r.abort();
                      else {
                        (p = {}),
                          (s = r.status),
                          "string" == typeof r.responseText &&
                            (p.text = r.responseText);
                        try {
                          l = r.statusText;
                        } catch (e) {
                          l = "";
                        }
                        s || !e.isLocal || e.crossDomain
                          ? 1223 === s && (s = 204)
                          : (s = p.text ? 200 : 404);
                      }
                    p && i(s, l, p, r.getAllResponseHeaders());
                  }),
                  e.async
                    ? 4 === r.readyState
                      ? setTimeout(t)
                      : (r.onreadystatechange = Qt[o] = t)
                    : t();
              },
              abort: function () {
                t && t(void 0, !0);
              },
            };
          }
        }),
      re.ajaxSetup({
        accepts: {
          script:
            "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
        },
        contents: { script: /(?:java|ecma)script/ },
        converters: {
          "text script": function (e) {
            return re.globalEval(e), e;
          },
        },
      }),
      re.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1),
          e.crossDomain && ((e.type = "GET"), (e.global = !1));
      }),
      re.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
          var t,
            n = me.head || re("head")[0] || me.documentElement;
          return {
            send: function (i, a) {
              (t = me.createElement("script")),
                (t.async = !0),
                e.scriptCharset && (t.charset = e.scriptCharset),
                (t.src = e.url),
                (t.onload = t.onreadystatechange =
                  function (e, n) {
                    (n ||
                      !t.readyState ||
                      /loaded|complete/.test(t.readyState)) &&
                      ((t.onload = t.onreadystatechange = null),
                      t.parentNode && t.parentNode.removeChild(t),
                      (t = null),
                      n || a(200, "success"));
                  }),
                n.insertBefore(t, n.firstChild);
            },
            abort: function () {
              t && t.onload(void 0, !0);
            },
          };
        }
      });
    var Zt = [],
      en = /(=)\?(?=&|$)|\?\?/;
    re.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function () {
        var e = Zt.pop() || re.expando + "_" + $t++;
        return (this[e] = !0), e;
      },
    }),
      re.ajaxPrefilter("json jsonp", function (t, n, i) {
        var a,
          r,
          o,
          s =
            !1 !== t.jsonp &&
            (en.test(t.url)
              ? "url"
              : "string" == typeof t.data &&
                !(t.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
                en.test(t.data) &&
                "data");
        return s || "jsonp" === t.dataTypes[0]
          ? ((a = t.jsonpCallback =
              re.isFunction(t.jsonpCallback)
                ? t.jsonpCallback()
                : t.jsonpCallback),
            s
              ? (t[s] = t[s].replace(en, "$1" + a))
              : !1 !== t.jsonp &&
                (t.url += (_t.test(t.url) ? "&" : "?") + t.jsonp + "=" + a),
            (t.converters["script json"] = function () {
              return o || re.error(a + " was not called"), o[0];
            }),
            (t.dataTypes[0] = "json"),
            (r = e[a]),
            (e[a] = function () {
              o = arguments;
            }),
            i.always(function () {
              (e[a] = r),
                t[a] && ((t.jsonpCallback = n.jsonpCallback), Zt.push(a)),
                o && re.isFunction(r) && r(o[0]),
                (o = r = void 0);
            }),
            "script")
          : void 0;
      }),
      (re.parseHTML = function (e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && ((n = t), (t = !1)), (t = t || me);
        var i = ue.exec(e),
          a = !n && [];
        return i
          ? [t.createElement(i[1])]
          : ((i = re.buildFragment([e], t, a)),
            a && a.length && re(a).remove(),
            re.merge([], i.childNodes));
      });
    var tn = re.fn.load;
    (re.fn.load = function (e, t, n) {
      if ("string" != typeof e && tn) return tn.apply(this, arguments);
      var i,
        a,
        r,
        o = this,
        s = e.indexOf(" ");
      return (
        s >= 0 && ((i = e.slice(s, e.length)), (e = e.slice(0, s))),
        re.isFunction(t)
          ? ((n = t), (t = void 0))
          : t && "object" == typeof t && (r = "POST"),
        o.length > 0 &&
          re
            .ajax({ url: e, type: r, dataType: "html", data: t })
            .done(function (e) {
              (a = arguments),
                o.html(i ? re("<div>").append(re.parseHTML(e)).find(i) : e);
            })
            .complete(
              n &&
                function (e, t) {
                  o.each(n, a || [e.responseText, t, e]);
                }
            ),
        this
      );
    }),
      (re.expr.filters.animated = function (e) {
        return re.grep(re.timers, function (t) {
          return e === t.elem;
        }).length;
      });
    var nn = e.document.documentElement;
    (re.offset = {
      setOffset: function (e, t, n) {
        var i,
          a,
          r,
          o,
          s,
          l,
          p,
          c = re.css(e, "position"),
          d = re(e),
          u = {};
        "static" === c && (e.style.position = "relative"),
          (s = d.offset()),
          (r = re.css(e, "top")),
          (l = re.css(e, "left")),
          (p =
            ("absolute" === c || "fixed" === c) &&
            re.inArray("auto", [r, l]) > -1),
          p
            ? ((i = d.position()), (o = i.top), (a = i.left))
            : ((o = parseFloat(r) || 0), (a = parseFloat(l) || 0)),
          re.isFunction(t) && (t = t.call(e, n, s)),
          null != t.top && (u.top = t.top - s.top + o),
          null != t.left && (u.left = t.left - s.left + a),
          "using" in t ? t.using.call(e, u) : d.css(u);
      },
    }),
      re.fn.extend({
        offset: function (e) {
          if (arguments.length)
            return void 0 === e
              ? this
              : this.each(function (t) {
                  re.offset.setOffset(this, e, t);
                });
          var t,
            n,
            i = { top: 0, left: 0 },
            a = this[0],
            r = a && a.ownerDocument;
          return r
            ? ((t = r.documentElement),
              re.contains(t, a)
                ? (typeof a.getBoundingClientRect !== Te &&
                    (i = a.getBoundingClientRect()),
                  (n = V(r)),
                  {
                    top:
                      i.top +
                      (n.pageYOffset || t.scrollTop) -
                      (t.clientTop || 0),
                    left:
                      i.left +
                      (n.pageXOffset || t.scrollLeft) -
                      (t.clientLeft || 0),
                  })
                : i)
            : void 0;
        },
        position: function () {
          if (this[0]) {
            var e,
              t,
              n = { top: 0, left: 0 },
              i = this[0];
            return (
              "fixed" === re.css(i, "position")
                ? (t = i.getBoundingClientRect())
                : ((e = this.offsetParent()),
                  (t = this.offset()),
                  re.nodeName(e[0], "html") || (n = e.offset()),
                  (n.top += re.css(e[0], "borderTopWidth", !0)),
                  (n.left += re.css(e[0], "borderLeftWidth", !0))),
              {
                top: t.top - n.top - re.css(i, "marginTop", !0),
                left: t.left - n.left - re.css(i, "marginLeft", !0),
              }
            );
          }
        },
        offsetParent: function () {
          return this.map(function () {
            for (
              var e = this.offsetParent || nn;
              e &&
              !re.nodeName(e, "html") &&
              "static" === re.css(e, "position");

            )
              e = e.offsetParent;
            return e || nn;
          });
        },
      }),
      re.each(
        { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
        function (e, t) {
          var n = /Y/.test(t);
          re.fn[e] = function (i) {
            return Le(
              this,
              function (e, i, a) {
                var r = V(e);
                return void 0 === a
                  ? r
                    ? t in r
                      ? r[t]
                      : r.document.documentElement[i]
                    : e[i]
                  : void (r
                      ? r.scrollTo(
                          n ? re(r).scrollLeft() : a,
                          n ? a : re(r).scrollTop()
                        )
                      : (e[i] = a));
              },
              e,
              i,
              arguments.length,
              null
            );
          };
        }
      ),
      re.each(["top", "left"], function (e, t) {
        re.cssHooks[t] = E(ie.pixelPosition, function (e, n) {
          return n
            ? ((n = tt(e, t)), it.test(n) ? re(e).position()[t] + "px" : n)
            : void 0;
        });
      }),
      re.each({ Height: "height", Width: "width" }, function (e, t) {
        re.each(
          { padding: "inner" + e, content: t, "": "outer" + e },
          function (n, i) {
            re.fn[i] = function (i, a) {
              var r = arguments.length && (n || "boolean" != typeof i),
                o = n || (!0 === i || !0 === a ? "margin" : "border");
              return Le(
                this,
                function (t, n, i) {
                  var a;
                  return re.isWindow(t)
                    ? t.document.documentElement["client" + e]
                    : 9 === t.nodeType
                    ? ((a = t.documentElement),
                      Math.max(
                        t.body["scroll" + e],
                        a["scroll" + e],
                        t.body["offset" + e],
                        a["offset" + e],
                        a["client" + e]
                      ))
                    : void 0 === i
                    ? re.css(t, n, o)
                    : re.style(t, n, i, o);
                },
                t,
                r ? i : void 0,
                r,
                null
              );
            };
          }
        );
      }),
      (re.fn.size = function () {
        return this.length;
      }),
      (re.fn.andSelf = re.fn.addBack),
      "function" == typeof define &&
        define.amd &&
        define("jquery", [], function () {
          return re;
        });
    var an = e.jQuery,
      rn = e.$;
    return (
      (re.noConflict = function (t) {
        return (
          e.$ === re && (e.$ = rn), t && e.jQuery === re && (e.jQuery = an), re
        );
      }),
      typeof t === Te && (e.jQuery = e.$ = re),
      re
    );
  }),
  define("lib-app/jquery", function () {}),
  define("storymaps/common/utils/Polyfills", [], function () {
    return {
      apply: function () {
        "function" != typeof String.prototype.trim &&
          (String.prototype.trim = function () {
            return this.replace(/^\s+|\s+$/g, "");
          }),
          Date.now ||
            (Date.now = function () {
              return new Date().valueOf();
            }),
          (Object.keys =
            Object.keys ||
            function (e, t, n) {
              n = [];
              for (t in e) n.hasOwnProperty.call(e, t) && n.push(t);
              return n;
            }),
          (function () {
            function e(e) {
              this.message = e;
            }
            var t = "undefined" != typeof exports ? exports : this,
              n =
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
            (e.prototype = new Error()),
              (e.prototype.name = "InvalidCharacterError"),
              t.btoa ||
                (t.btoa = function (t) {
                  for (
                    var i, a, r = String(t), o = 0, s = n, l = "";
                    r.charAt(0 | o) || ((s = "="), o % 1);
                    l += s.charAt(63 & (i >> (8 - (o % 1) * 8)))
                  ) {
                    if ((a = r.charCodeAt((o += 0.75))) > 255)
                      throw new e(
                        "'btoa' failed: The string to be encoded contains characters outside of the Latin1 range."
                      );
                    i = (i << 8) | a;
                  }
                  return l;
                }),
              t.atob ||
                (t.atob = function (t) {
                  var i = String(t).replace(/=+$/, "");
                  if (i.length % 4 == 1)
                    throw new e(
                      "'atob' failed: The string to be decoded is not correctly encoded."
                    );
                  for (
                    var a, r, o = 0, s = 0, l = "";
                    (r = i.charAt(s++));
                    ~r && ((a = o % 4 ? 64 * a + r : r), o++ % 4)
                      ? (l += String.fromCharCode(255 & (a >> ((-2 * o) & 6))))
                      : 0
                  )
                    r = n.indexOf(r);
                  return l;
                });
          })();
      },
    };
  }),
  define(
    "storymaps/common/utils/SocialSharing",
    ["dojo/Deferred", "esri/urlUtils"],
    function (e, t) {
      return {
        shareFacebook: function (e, t, n, i) {
          var a = this.cleanURL(i || document.location.href);
          window.open(
            "http://www.facebook.com/sharer/sharer.php?u=" + a,
            "",
            "toolbar=0,status=0,width=626,height=436"
          );
        },
        shareTwitter: function (e, t) {
          var n =
            "text=" +
            encodeURIComponent(e || "") +
            "&url=" +
            this.cleanURL(t || document.location.href) +
            "&related=EsriStoryMaps&hashtags=StoryMaps";
          window.open(
            "https://twitter.com/intent/tweet?" + n,
            "",
            "toolbar=0,status=0,width=626,height=436"
          );
        },
        requestShortUrl: function (t) {
          var n = t || document.location.href,
            i = new e();
          return (
            $.getJSON(
              "https://arcg.is/prod/shorten?callback=?",
              { longUrl: n },
              function (e) {
                console.log(e),
                  e && e && e.data.url ? i.resolve(e.data.url) : i.reject();
              }
            ),
            i
          );
        },
        cleanURL: function (e, n) {
          var i = t.urlToObject(e),
            a = i.path;
          return (
            i.query &&
              (delete i.query.edit,
              delete i.query.locale,
              delete i.query.folderId,
              delete i.query.webmap,
              delete i.query.autoplay,
              $.each(Object.keys(i.query), function (e, t) {
                (a += 0 === e ? "?" : "&"),
                  void 0 !== i.query[t] && "" !== i.query[t]
                    ? (a += t + "=" + i.query[t])
                    : (a += t);
              })),
            n ? a : encodeURIComponent(a)
          );
        },
      };
    }
  ),
  define(
    "storymaps/common/utils/CommonHelper",
    [
      "dojo/cookie",
      "dojo/has",
      "dojo/_base/lang",
      "dojo/_base/Color",
      "dojo/Deferred",
      "dojo/DeferredList",
      "./SocialSharing",
      "esri/IdentityManager",
      "esri/request",
      "esri/dijit/Search",
      "esri/tasks/locator",
      "esri/urlUtils",
      "esri/arcgis/utils",
      "esri/geometry/webMercatorUtils",
      "esri/geometry/Point",
      "esri/geometry/Extent",
      "esri/geometry/Polygon",
      "esri/layers/FeatureLayer",
      "esri/layers/ArcGISDynamicMapServiceLayer",
      "esri/layers/ArcGISTiledMapServiceLayer",
      "esri/layers/OpenStreetMapLayer",
      "dojo/i18n!commonResources/nls/webmap.js?v=" + app.version,
      "dojo/i18n!commonResources/nls/media.js?v=" + app.version,
    ],
    function (
      e,
      t,
      n,
      i,
      a,
      r,
      o,
      s,
      l,
      p,
      c,
      d,
      u,
      f,
      h,
      m,
      g,
      v,
      b,
      y,
      w,
      x,
      C
    ) {
      return {
        isMobile: function () {
          return (
            navigator.userAgent.match(/iPhone|iPad|iPod/i) ||
            navigator.userAgent.match(/Android/i) ||
            navigator.userAgent.match(/BlackBerry/i) ||
            navigator.userAgent.match(/IEMobile/i)
          );
        },
        switchToBuilder: function () {
          document.location.search.match(/appid/)
            ? (document.location =
                o.cleanURL(
                  document.location.protocol +
                    "//" +
                    document.location.host +
                    document.location.pathname +
                    document.location.search,
                  !0
                ) +
                "&edit" +
                document.location.hash)
            : (document.location.search.slice(-1),
              (document.location =
                o.cleanURL(
                  document.location.protocol +
                    "//" +
                    document.location.host +
                    document.location.pathname,
                  !0
                ) +
                "?edit" +
                document.location.hash));
        },
        isArcGISHosted: function () {
          return /(\/)([a-zA-Z0-9]+(\/))*(apps\/|home\/)([a-zA-Z0-9\-\_]+\/)/.test(
            document.location.pathname
          );
        },
        browserSupportHistory: function () {
          return !(!window.history || !history.pushState);
        },
        getUrlParams: function () {
          var e = d.urlToObject(document.location.search).query;
          return (
            e ||
            (this.browserSupportHistory() || e
              ? {}
              : d.urlToObject(document.location.hash).query || {})
          );
        },
        getWebmapID: function (e) {
          var t = this.getUrlParams();
          return app.indexCfg && app.indexCfg.webmap
            ? app.indexCfg.webmap
            : this.isArcGISHosted() || !e
            ? t.webmap
            : app.indexCfg.authorizedOwners &&
              app.indexCfg.authorizedOwners.length > 0 &&
              app.indexCfg.authorizedOwners[0]
            ? t.webmap
            : void 0;
        },
        getAppID: function (e) {
          var t = this.getUrlParams();
          return app.indexCfg && app.indexCfg.appid
            ? app.indexCfg.appid
            : this.isArcGISHosted() || !e
            ? t.appid
            : app.indexCfg.authorizedOwners &&
              app.indexCfg.authorizedOwners.length > 0 &&
              app.indexCfg.authorizedOwners[0]
            ? t.appid
            : void 0;
        },
        getGraphicsLayerByName: function (e, t) {
          for (var n, i = 0; i < e.graphicsLayerIds.length; i++)
            if (((n = e.getLayer(e.graphicsLayerIds[i])), n.name == t))
              return n;
          return null;
        },
        getWebMapExtentFromItem: function (e) {
          if (!e.extent || 2 != e.extent.length) return null;
          var t = f.geographicToWebMercator(
              new h(e.extent[0][0], e.extent[0][1])
            ),
            n = f.geographicToWebMercator(
              new h(e.extent[1][0], e.extent[1][1])
            );
          return new m({
            xmax: n.x,
            xmin: t.x,
            ymax: n.y,
            ymin: t.y,
            spatialReference: { wkid: 102100 },
          });
        },
        serializeExtentToItem: function (e) {
          if (!e || !e.spatialReference) return null;
          var t =
            4326 == e.spatialReference.wkid ? e : f.webMercatorToGeographic(e);
          return [
            [Math.round(1e4 * t.xmin) / 1e4, Math.round(1e4 * t.ymin) / 1e4],
            [Math.round(1e4 * t.xmax) / 1e4, Math.round(1e4 * t.ymax) / 1e4],
          ];
        },
        serializedExtentEquals: function (e, t) {
          return (
            e &&
            t &&
            e.length == t.length &&
            2 == e.length &&
            e[0][0] == t[0][0] &&
            e[0][1] == t[0][1] &&
            e[1][0] == t[1][0] &&
            e[1][1] == t[1][1]
          );
        },
        extentsAreCloseEnough: function (e, t, n, i) {
          if ((n = n || app.map)) {
            void 0 === i && (i = 30);
            var a = n.toScreen(
                new h({
                  x: e.xmin,
                  y: e.ymin,
                  spatialReference: e.spatialReference,
                })
              ),
              r = n.toScreen(
                new h({
                  x: t.xmin,
                  y: t.ymin,
                  spatialReference: t.spatialReference,
                })
              );
            if (Math.abs(a.x - r.x) > i || Math.abs(a.y - r.y) > i) return !1;
            var o = n.toScreen(
                new h({
                  x: e.xmax,
                  y: e.ymax,
                  spatialReference: e.spatialReference,
                })
              ),
              s = n.toScreen(
                new h({
                  x: t.xmax,
                  y: t.ymax,
                  spatialReference: t.spatialReference,
                })
              );
            return !(Math.abs(o.x - s.x) > i || Math.abs(o.y - s.y) > i);
          }
        },
        cloneLayer: function (e) {
          return e.url && e.url.match(/virtualearth\./)
            ? new y(
                "http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer"
              )
            : e instanceof y
            ? new y(e.url)
            : e instanceof b
            ? new b(e.url)
            : "OpenStreetMap" == e.id
            ? new w()
            : new y(
                "http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer"
              );
        },
        extentToPolygon: function (e) {
          var t = new g(e.spatialReference);
          return (
            t.addRing([
              [e.xmin, e.ymin],
              [e.xmin, e.ymax],
              [e.xmax, e.ymax],
              [e.xmax, e.ymin],
              [e.xmin, e.ymin],
            ]),
            t
          );
        },
        getFirstLevelWhereExtentFit: function (e, t) {
          var n = t.width,
            i = t.height,
            a = t._params.lods;
          if (!a) return -1;
          for (var r = a.length - 1; r >= 0; r--)
            if (
              n * t._params.lods[r].resolution > e.getWidth() &&
              i * t._params.lods[r].resolution > e.getHeight()
            )
              return r;
          return -1;
        },
        getPortalUser: function () {
          var t = e("esri_auth");
          if (
            t &&
            ((t = JSON.parse(t.replace('"ssl":undefined', '"ssl":""'))),
            !t.urlKey ||
              !t.customBaseUrl ||
              (t.urlKey + "." + t.customBaseUrl).toLowerCase() ==
                document.location.hostname.toLowerCase())
          )
            return t ? t.email : null;
        },
        getPortalRole: function () {
          var t = e("esri_auth");
          if (
            t &&
            ((t = JSON.parse(t.replace('"ssl":undefined', '"ssl":""'))),
            !t.urlKey ||
              !t.customBaseUrl ||
              (t.urlKey + "." + t.customBaseUrl).toLowerCase() ==
                document.location.hostname.toLowerCase())
          )
            return t ? t.role : null;
        },
        getAppViewModeURL: function () {
          return (
            document.location.protocol +
            "//" +
            document.location.host +
            document.location.pathname +
            "?appid=" +
            app.data.getWebAppItem().id
          );
        },
        getWebmapViewerLinkFromSharingURL: function (e) {
          return e.split("/sharing/")[0] + "/home/webmap/viewer.html";
        },
        getPortalURL: function () {
          return u.arcgisUrl.split("/sharing/")[0];
        },
        getItemURL: function (e) {
          return this.getPortalURL() + "/home/item.html?id=" + e;
        },
        getItemId: function () {
          return (
            app.data && app.data.getWebAppItem && app.data.getWebAppItem().id
          );
        },
        getMyContentURL: function () {
          return this.getPortalURL() + "/home/content.html";
        },
        getMyStoriesURL: function () {
          return app.isPortal
            ? this.getPortalURL() + "/apps/MyStories/"
            : "//storymaps.arcgis.com/en/my-stories/";
        },
        browserSupportAttachementUsingFileReader: function () {
          return !!(
            window.FileReader &&
            window.FormData &&
            this.browserSupportCanvas() &&
            window.Blob
          );
        },
        browserSupportCanvas: function () {
          var e = document.createElement("canvas");
          return !(!e.getContext || !e.getContext("2d"));
        },
        browserSupportFileReaderBinaryString: function () {
          return (
            !!window.FileReader &&
            !!("readAsArrayBuffer" in new window.FileReader())
          );
        },
        getBinaryStringFromArrayBuffer: function (e) {
          for (var t = new Uint8Array(e), n = "", i = 0; i < t.length; i++)
            n += String.fromCharCode(t[i]);
          return n;
        },
        addCSSRule: function (e, n, i) {
          var a = "head";
          if (!(t("ie") <= 8)) {
            if ((i && (a = i.contents().find("head")), n)) {
              var r = $(a)
                .find("#" + n)
                .eq(0);
              if (r.length) return void r.html(e);
            }
            $("<style>")
              .prop("type", "text/css")
              .attr("id", n)
              .html(e)
              .appendTo(a);
          }
        },
        hex2rgba: function (e, t) {
          if (!e || "" === e) return "";
          var n,
            i = e.replace("#", "").match(/../g),
            a = [];
          for (n in i) a.push(parseInt(i[n], 16));
          return a.push(t), "rgba(" + a.join() + ")";
        },
        prependURLHTTP: function (e) {
          return !e || "" === e || e.match(/^mailto:/)
            ? e
            : /^(https?:\/\/)|^(\/\/)/i.test(e)
            ? e
            : "http://" + e;
        },
        convertURLHTTPS: function (e) {
          return !e || "" === e || e.match(/^mailto:/)
            ? e
            : ((e = e.replace(/http:\/\//, "https://")),
              (e = e.replace(/^\/\//, "https://")),
              /^(https:\/\/)/i.test(e) ? e : "https://" + e);
        },
        convertURLHTTP: function (e) {
          return !e || "" === e || e.match(/^mailto:/)
            ? e
            : ((e = e.replace(/https:\/\//, "http://")),
              (e = e.replace(/^\/\//, "http://")),
              /^(http:\/\/)/i.test(e) ? e : "http://" + e);
        },
        checkImageURL: function (e) {
          return e && e.match(/((\.png)|(\.jp(e)?g))$/i);
        },
        createGeocoder: function (e) {
          var t = new a();
          if (!e || !e.map || !e.domNode) return t.resolve(), t;
          if (!app.cfg.HELPER_SERVICES.geocode) return t.resolve(), t;
          var n = [],
            i = [],
            o = [],
            s = this;
          e.searchOptions &&
            e.searchOptions.layers &&
            e.searchOptions.layers.length &&
            e.searchOptions.enabled &&
            (i = this.getLayerSources(
              e.searchOptions.layers,
              e.map,
              e.searchOptions.hintText
            ));
          var l = s.processAppDataGeocoders(e.placeHolder);
          if (
            (i.length && (o = i),
            (!e.searchOptions ||
              (e.searchOptions && !e.searchOptions.disablePlaceFinder)) &&
              ((o = o.concat(l || [])),
              $.each(app.cfg.HELPER_SERVICES.geocode, function (e, t) {
                n.push(s.getGeocoderRequest(t));
              })),
            e.searchOptions && e.searchOptions.disablePlaceFinder && !o.length)
          )
            if (l && l.length) o.push(l[0]);
            else if (
              app.cfg.HELPER_SERVICES.geocode &&
              app.cfg.HELPER_SERVICES.geocode.length
            ) {
              var c = !1;
              $.each(app.cfg.HELPER_SERVICES.geocode, function (e, t) {
                !c && t.url && (n.push(s.getGeocoderRequest(t)), (c = !0));
              });
            } else o = null;
          var d = {
            map: e.map,
            allPlaceholder: e.placeHolder,
            enableButtonMode: e.enableButtonMode,
          };
          o && o.length
            ? (this.checkForSourceNameDuplicates(o), (d.sources = o))
            : (d.placeholder =
                e.placeHolder || C.commonMedia.editorActionGeocode.lblTitle);
          var u = new p(d, e.domNode);
          if (n.length) {
            new r(n).then(function (n) {
              var i = s.processGeocoderRequestReturn(n, e.placeHolder),
                a = u.get("sources").concat(i || []);
              a.length && (s.setGeocodeSources(u, a), t.resolve(u));
            });
          } else {
            var f = u.get("sources");
            f.length && (s.setGeocodeSources(u, f), t.resolve(u));
          }
          return t;
        },
        getGeocoderRequest: function (e) {
          var t = { url: e.url, content: { f: "json" }, handleAs: "json" };
          return (
            app.isInBuilder || app.portal.user
              ? (t.callbackParamName = "callback")
              : (t.disableIdentityLookup = !0),
            l(t)
          );
        },
        getLayerSources: function (e, t, n) {
          var i = this;
          return $.map(e, function (e) {
            var a = t.getLayer(e.id),
              r = {
                featureLayer: a,
                searchFields: [e.field.name],
                displayField: e.field.name,
                exactMatch: e.field.exactMatch,
                outFields: ["*"],
                maxResults: 6,
                name: i.findGeocoderName(a, e),
                placeholder: n,
              };
            if (e.subLayer || 0 === e.subLayer) {
              var o;
              e.subLayer;
              (o = a.dynamicLayerInfos) &&
                (o = o[e.subLayer]) &&
                (o = o.source) &&
                o.mapLayerId,
                (r.featureLayer = new v(a.url + "/" + e.subLayer));
            }
            return r;
          });
        },
        processGeocoderRequestReturn: function (e, t) {
          var n = [],
            i = this;
          return (
            $.each(e, function (e, a) {
              if (a[0] && a[1] && a[1].singleLineAddressField) {
                var r = app.cfg.HELPER_SERVICES.geocode[e],
                  o = new c(r.url),
                  s = {
                    singleLineFieldName: a[1].singleLineAddressField.name,
                    name: r.name ? r.name : a[1].name,
                    placeholder:
                      r.placeholder ||
                      t ||
                      C.commonMedia.editorActionGeocode.lblTitle,
                    locator: o,
                  };
                (s.name = s.name || i.findGeocoderName({ url: o.url })),
                  i.isEsriGeocoder({ url: r.url }) &&
                    (s.placeholder =
                      C.commonMedia.editorActionGeocode.lblTitle),
                  (!a[1].capabilities ||
                    a[1].capabilities.toLowerCase().indexOf("suggest") < 0) &&
                    (s.enableSuggestions = !1),
                  n.push(s);
              }
            }),
            n
          );
        },
        processAppDataGeocoders: function (e) {
          if (app.data.getWebAppData().getAppGeocoders) {
            var t = app.data.getWebAppData().getAppGeocoders();
            if (
              (t ||
                (t = [
                  {
                    name: "Esri World Geocoder",
                    url: "//geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer",
                    singleLineFieldName: "SingleLine",
                  },
                ]),
              !t.length)
            )
              return [];
            t = t.slice();
            var i = [],
              a = this;
            return (
              $.each(t, function (t, r) {
                if (r.url) {
                  var o = n.mixin({}, r);
                  (o.locator = new c(o.url)),
                    a.isEsriGeocoder({ url: o.url })
                      ? ((o.placeholder =
                          C.commonMedia.editorActionGeocode.lblTitle),
                        (o.name = x.commonWebmap.selector.lblEsriGeocoder))
                      : ((o.placeholder = o.placeholder || e),
                        (o.name =
                          o.name || a.findGeocoderName({ url: o.url }))),
                    i.push(o);
                }
              }),
              i
            );
          }
        },
        setGeocodeSources: function (e, t) {
          this.checkForSourceNameDuplicates(t),
            e.set("sources", t),
            e.set("activeSourceIndex", 0),
            e.startup(),
            app.data.getWebAppData().getAppGeocoders &&
              !app.data.getWebAppData().getAppGeocoders() &&
              e._allIndex &&
              e.set("activeSourceIndex", e._allIndex);
        },
        checkForSourceNameDuplicates: function (e) {
          var t = [],
            n = this;
          $.each(e, function (e, i) {
            t.indexOf(i.name) >= 0 &&
              (i.name = n.getAdjustedSourceName(t, i.name)),
              t.push(i.name);
          });
        },
        getAdjustedSourceName: function (e, t) {
          for (var n = 2, i = t + " - " + n; e.indexOf(i) >= 0; )
            n++, (i = t + " - " + n);
          return i;
        },
        isEsriGeocoder: function (e) {
          return e.url
            ? e.url.match(
                /geocode(.){0,3}\.arcgis.com\/arcgis\/rest\/services\/World\/GeocodeServer/g
              )
            : (console.warn("no url on locator", e), !1);
        },
        findGeocoderName: function (e, t) {
          var n = t ? t.name || t.title : "";
          if (!n) {
            (app.mapItem ? app.mapItem.itemData.operationalLayers : []).some(
              function (t) {
                return t.id === e.id && ((n = t.title), !0);
              }
            );
          }
          if (!(n = n || e.name || e.title)) {
            if (!this.isEsriGeocoder(e)) {
              if ("string" == typeof e.url && e.url.split) {
                var i = e.url.split("/"),
                  a = i[i.length - 2];
                return void (a && (n = a));
              }
              return;
            }
            n = x.commonWebmap.selector.lblEsriGeocoder;
          }
          if (t && (t.subLayer || 0 === t.subLayer)) {
            var r = e.dynamicLayerInfos || e.layerInfos,
              o = r[t.subLayer];
            o && o.name && (n += " - " + o.name);
          }
          return n.replace(/_/g, " ");
        },
        colorsAreSimilar: function (e, t, n) {
          var i = this.getLuminance(e),
            a = this.getLuminance(t),
            r = (i + 0.05) / (a + 0.05);
          return a > i && (r = 1 / r), !(r >= 2.85 || (n && r >= 2.2));
        },
        getLuminance: function (e) {
          var t = new i(e),
            n = t.toRgb().map(function (e) {
              return (
                (e /= 255),
                e < 0.03928 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4)
              );
            });
          return 0.2126 * n[0] + 0.7152 * n[1] + 0.0722 * n[2];
        },
        convertToDegrees: function (e) {
          var t = e[0].numerator,
            n = e[0].denominator,
            i = parseFloat(t) / parseFloat(n),
            a = e[1].numerator,
            r = e[1].denominator,
            o = parseFloat(a) / parseFloat(r),
            s = e[2].numerator,
            l = e[2].denominator;
          return i + o / 60 + parseFloat(s) / parseFloat(l) / 3600;
        },
        debounce: function (e, t, n) {
          var i;
          return function () {
            var a = this,
              r = arguments;
            clearTimeout(i),
              (i = setTimeout(function () {
                (i = null), n || e.apply(a, r);
              }, t)),
              n && !i && e.apply(a, r);
          };
        },
        findDifferences: function (e, t) {
          var n = [],
            i = ["this"];
          return (
            (function (e, t) {
              if (e.constructor == Array)
                if (t && t.constructor == Array && t.length == e.length)
                  for (var a = 0; a < e.length; a++)
                    i.push("[" + a.toString() + "]"),
                      arguments.callee(e[a], t[a]),
                      i.pop();
                else n.push({ Property: i.join(""), ObjectA: e, ObjectB: t });
              else if (
                e.constructor == Object ||
                (e.constructor != Number &&
                  e.constructor != String &&
                  e.constructor != Date &&
                  e.constructor != RegExp &&
                  e.constructor != Function &&
                  e.constructor != Boolean)
              )
                for (var r in e)
                  i.push("." + r),
                    t[r]
                      ? e[r] &&
                        e[r].constructor != Function &&
                        arguments.callee(e[r], t[r])
                      : n.push({
                          Property: i.join(""),
                          ObjectA: e[r],
                          ObjectB: null,
                        }),
                    i.pop();
              else
                e.constructor != Function &&
                  e != t &&
                  n.push({ Property: i.join(""), ObjectA: e, ObjectB: t });
            })(e, t),
            n
          );
        },
        possiblyAddToken: function (e) {
          if (!this.isAppResource(e)) return e;
          if (((e = this.removeToken(e)), !this.needsTokenAdded(e))) return e;
          var t = "";
          return (
            (t =
              app.portal && app.portal.getPortalUser()
                ? app.portal.getPortalUser().credential.token
                : s.findCredential(document.location.origin)
                ? s.findCredential(document.location.origin).token
                : s.findCredential(app.portal.url)
                ? s.findCredential(app.portal.url).token
                : this.getCookieToken()),
            this.forceHttps(e) + "?token=" + t
          );
        },
        forceHttps: function (e) {
          return "https://" + e.replace(/^.*?\/\//, "");
        },
        isAppResource: function (e, t) {
          return (
            t ||
              (t =
                app.data && app.data.getWebAppItem && app.data.getWebAppItem()),
            !!t &&
              t &&
              t.id &&
              e &&
              e.match(
                new RegExp(
                  "/sharing/rest/content/items/" + t.id + "/resources/"
                )
              )
          );
        },
        needsTokenAdded: function (e) {
          var t =
            app.data && app.data.getWebAppItem && app.data.getWebAppItem();
          return !!t && this.isAppResource(e, t) && "public" !== t.access;
        },
        getCookieToken: function () {
          var t = e("esri_auth");
          if (
            t &&
            ((t = JSON.parse(t.replace('"ssl":undefined', '"ssl":""'))),
            !t.urlKey ||
              !t.customBaseUrl ||
              (t.urlKey + "." + t.customBaseUrl).toLowerCase() ==
                document.location.hostname.toLowerCase())
          )
            return t ? t.token : null;
        },
        possiblyRemoveToken: function (e) {
          return this.isAppResource(e) ? this.removeToken(e) : e;
        },
        removeToken: function (e) {
          return e.split("?token=")[0];
        },
      };
    }
  ),
  define("storymaps/common/ui/EmbedBar/EmbedBar", [], function () {
    "use strict";
    return function (e) {
      function t() {
        var t = document.location.href;
        $.getJSON(
          "https://arcg.is/prod/shorten?callback=?",
          {
            format: "json",
            apiKey: e.bitlyCreds[0],
            login: e.bitlyCreds[1],
            longUrl: t,
          },
          function (e) {
            e &&
              e &&
              e.data.url &&
              (document.querySelector(".embed-bitlylink").value = e.data.url);
          }
        );
      }
      if (
        ((this.initiated = !1),
        !(
          e.isBuilder ||
          e.classicEmbedMode ||
          e.appCreationDate < e.june2018ReleaseDate
        ) && ((window.app.isEsriStoryMap = !0), window.top !== window.self))
      ) {
        try {
          parent.window.app.isEsriStoryMap &&
            (window.app.isEmbeddedInEsriStoryMap = !0);
        } catch (e) {
          window.app.isEmbeddedInEsriStoryMap = !1;
        }
        if (!window.app.isEmbeddedInEsriStoryMap) {
          var n =
              '      <div class="embed-left">        <div class="esri-logo-embed">          <a target="_blank" href="https://www.esri.com">\t\t\t\t\t\t<img alt="Esri logo" class="embedLogoImg" src=' +
              e.logoPath +
              ' style="outline: none;">          </a>        </div>        <div class="esri-tagline-embed"><a href="https://storymaps.arcgis.com" target="_blank">' +
              e.strings.tagline +
              '</a></div>      </div>      <div class="embed-right">        <div class="share-embed" title="' +
              e.strings.share +
              '">          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path id="shareIcon" fill="#505050" d="M352 320c-22.608 0-43.387 7.819-59.79 20.895l-102.486-64.054a96.551 96.551 0 0 0 0-41.683l102.486-64.054C308.613 184.181 329.392 192 352 192c53.019 0 96-42.981 96-96S405.019 0 352 0s-96 42.981-96 96c0 7.158.79 14.13 2.276 20.841L155.79 180.895C139.387 167.819 118.608 160 96 160c-53.019 0-96 42.981-96 96s42.981 96 96 96c22.608 0 43.387-7.819 59.79-20.895l102.486 64.054A96.301 96.301 0 0 0 256 416c0 53.019 42.981 96 96 96s96-42.981 96-96-42.981-96-96-96z"/></svg>        </div>        <div class="open-newtab-embed" title="' +
              e.strings.newTab +
              '">          <a href=' +
              window.location.href +
              ' target="_blank">            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 577 512"><path id="newTabIcon" fill="#505050" d="M576 24v127.984c0 21.461-25.96 31.98-40.971 16.971l-35.707-35.709-243.523 243.523c-9.373 9.373-24.568 9.373-33.941 0l-22.627-22.627c-9.373-9.373-9.373-24.569 0-33.941L442.756 76.676l-35.703-35.705C391.982 25.9 402.656 0 424.024 0H552c13.255 0 24 10.745 24 24zM407.029 270.794l-16 16A23.999 23.999 0 0 0 384 303.765V448H64V128h264a24.003 24.003 0 0 0 16.97-7.029l16-16C376.089 89.851 365.381 64 344 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V287.764c0-21.382-25.852-32.09-40.971-16.97z"/></svg>          </a>        </div>        <div class="fullscreen-embed " title="' +
              e.strings.fullScreen +
              '">          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path id="fullscreenIcon" fill="#505050" d="M0 180V56c0-13.3 10.7-24 24-24h124c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H64v84c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12zM288 44v40c0 6.6 5.4 12 12 12h84v84c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12V56c0-13.3-10.7-24-24-24H300c-6.6 0-12 5.4-12 12zm148 276h-40c-6.6 0-12 5.4-12 12v84h-84c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h124c13.3 0 24-10.7 24-24V332c0-6.6-5.4-12-12-12zM160 468v-40c0-6.6-5.4-12-12-12H64v-84c0-6.6-5.4-12-12-12H12c-6.6 0-12 5.4-12 12v124c0 13.3 10.7 24 24 24h124c6.6 0 12-5.4 12-12z"/></svg>          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path id="compressIcon" fill="#505050" d="M436 192H312c-13.3 0-24-10.7-24-24V44c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v84h84c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm-276-24V44c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v84H12c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h124c13.3 0 24-10.7 24-24zm0 300V344c0-13.3-10.7-24-24-24H12c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h84v84c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-84h84c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12H312c-13.3 0-24 10.7-24 24v124c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12z"/></svg>        </div>      </div>    ',
            i =
              '      <div class="embed-share-modal">        <div class="embed-modal-content">          <div class="embed-modal-logo">            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path id="shareIconLogo" fill="#fff" d="M352 320c-22.608 0-43.387 7.819-59.79 20.895l-102.486-64.054a96.551 96.551 0 0 0 0-41.683l102.486-64.054C308.613 184.181 329.392 192 352 192c53.019 0 96-42.981 96-96S405.019 0 352 0s-96 42.981-96 96c0 7.158.79 14.13 2.276 20.841L155.79 180.895C139.387 167.819 118.608 160 96 160c-53.019 0-96 42.981-96 96s42.981 96 96 96c22.608 0 43.387-7.819 59.79-20.895l102.486 64.054A96.301 96.301 0 0 0 256 416c0 53.019 42.981 96 96 96s96-42.981 96-96-42.981-96-96-96z"/></svg>          </div>          <div class="embed-modal-header">            <h4 class="embed-modal-title">' +
              e.strings.share +
              '</h4>          </div>          <div class="embed-modal-body">            <div class="embed-share-url-social">              <div class="embed-share-url-panel">                <div class="embed-share-url-container">                  <input type="text" id="embed-bitlylink" class="form-control embed-bitlylink" aria-label="bitly link">                  <a class="btn embed-bar-btn btn-primary btn-bitlylink-open" target="_blank" href="' +
              window.location.href +
              '">' +
              e.strings.open +
              '</a>                </div>              </div>            </div>            <div class="embed-share-social-container">              <div class="social-icon embed-share-facebook" title="' +
              e.strings.shareFacebook +
              '" aria-label="Share on Facebook button">                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path id="facebookIcon" fill="#505050" d="M448 80v352c0 26.5-21.5 48-48 48h-85.3V302.8h60.6l8.7-67.6h-69.3V192c0-19.6 5.4-32.9 33.5-32.9H384V98.7c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9H184v67.6h60.9V480H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48z"/></svg>              </div>              <div class="social-icon embed-share-twitter" title="' +
              e.strings.shareTwitter +
              '" aria-label="Share on Twitter button">                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path id="twitterIcon" fill="#505050" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg>              </div>            </div>          </div>          <div class="embed-modal-footer">            <button type="button" class="btn embed-bar-btn btnCancel btn-naked btn-close" data-dismiss="modal">' +
              e.strings.close +
              "</button>          </div>        </div>      </div>    ",
            a = !1,
            r = null,
            o = function () {
              document.querySelector("body").appendChild(C),
                document.querySelector("body").appendChild(S),
                s()
                  ? (document.querySelector(
                      ".open-newtab-embed"
                    ).style.display = "none")
                  : (document.querySelector(".fullscreen-embed").style.display =
                      "none"),
                p(),
                c();
            },
            s = function () {
              return (
                document.fullscreenEnabled ||
                document.webkitFullscreenEnabled ||
                document.mozFullScreenEnabled ||
                document.msFullscreenEnabled
              );
            },
            l = function () {
              return (
                document.fullscreenElement ||
                document.webkitFullscreenElement ||
                document.mozFullScreenElement ||
                document.msFullscreenElement
              );
            },
            p = function () {
              if (e.isEsriLogo)
                for (var t = 0; t < e.logoElements.length; t++)
                  document.querySelector(
                    e.logoElements[t].selector
                  ).style.display = "none";
              for (var n = 0; n < e.shareElements.length; n++)
                if (e.shareElements[n].length > 1)
                  for (var i = 0; i < e.shareElements[n].length; i++)
                    e.shareElements[n][i].style.display = "none";
                else
                  document.querySelector(
                    e.shareElements[n].selector
                  ).style.display = "none";
              for (var a = 0; a < e.taglineElements.length; a++)
                if (e.taglineElements[a].length > 1)
                  for (var r = 0; r < e.taglineElements[a].length; r++)
                    e.taglineElements[a][r].textContent &&
                      "a story map" ==
                        e.taglineElements[a][r].textContent.toLowerCase() &&
                      (e.taglineElements[a][r].style.display = "none");
                else
                  e.taglineElements[a].text() &&
                    "a story map" ==
                      e.taglineElements[a].text().toLowerCase() &&
                    (document.querySelector(
                      e.taglineElements[a].selector
                    ).style.display = "none");
            },
            c = function () {
              document
                .querySelector(".fullscreen-embed")
                .addEventListener("click", u),
                document
                  .querySelector(".share-embed")
                  .addEventListener("click", v),
                document
                  .querySelector(".embed-modal-footer .btn-close")
                  .addEventListener("click", b),
                document
                  .querySelector(".embed-share-facebook")
                  .addEventListener("click", y),
                document
                  .querySelector(".embed-share-twitter")
                  .addEventListener("click", w),
                window.addEventListener("fullscreenchange", d),
                window.addEventListener("webkitfullscreenchange", d),
                window.addEventListener("mozfullscreenchange", d),
                window.addEventListener("msfullscreenchange", d);
            },
            d = function () {
              s() &&
                (l()
                  ? f()
                  : (document
                      .querySelector("body")
                      .classList.contains("fullscreen") &&
                      document
                        .querySelector("body")
                        .classList.toggle("fullscreen"),
                    (document.querySelectorAll(
                      ".fullscreen-embed svg"
                    )[0].style.display = "block"),
                    (document.querySelectorAll(
                      ".fullscreen-embed svg"
                    )[1].style.display = "none"),
                    a || h()));
            },
            u = function () {
              var t = document.querySelector("body");
              s()
                ? (m(),
                  t.classList.contains("fullscreen")
                    ? (document.exitFullscreen
                        ? document.exitFullscreen()
                        : document.webkitExitFullscreen
                        ? document.webkitExitFullscreen()
                        : document.mozCancelFullScreen
                        ? document.mozCancelFullScreen()
                        : document.msExitFullscreen &&
                          document.msExitFullscreen(),
                      (document.querySelector(".fullscreen-embed").title =
                        e.strings.fullScreen),
                      (document.querySelectorAll(
                        ".fullscreen-embed svg"
                      )[0].style.display = "block"),
                      (document.querySelectorAll(
                        ".fullscreen-embed svg"
                      )[1].style.display = "none"))
                    : (t.requestFullscreen
                        ? t.requestFullscreen()
                        : t.webkitRequestFullscreen
                        ? t.webkitRequestFullscreen()
                        : t.mozRequestFullScreen
                        ? t.mozRequestFullScreen()
                        : t.msRequestFullscreen && t.msRequestFullscreen(),
                      t.classList.toggle("fullscreen"),
                      (document.querySelector(".fullscreen-embed").title =
                        e.strings.exitFullScreen),
                      (document.querySelectorAll(
                        ".fullscreen-embed svg"
                      )[1].style.display = "block"),
                      (document.querySelectorAll(
                        ".fullscreen-embed svg"
                      )[0].style.display = "none")))
                : ((document.querySelector(".fullscreen-embed").style.display =
                    "none"),
                  (document.querySelector(".open-newtab-embed").style.display =
                    "block"),
                  console.log("Full screen not available"));
            },
            f = function () {
              var e = app && app.map;
              e && (r = { height: e.height, width: e.width });
            },
            h = function () {
              var e = app && app.map ? app.map.extent.getCenter() : null;
              if (e && r) {
                var t = app.map.toScreen(e);
                (t.x = r.width / 2),
                  (t.y = r.height / 2),
                  app.map.centerAt(app.map.toMap(t));
              }
            },
            m = function () {
              var e = app && app.map ? app.map.extent.getCenter() : null;
              if (e) {
                a = !0;
                var t = g(function () {
                    app.map.centerAt(e), n.remove(), (a = !1);
                  }, 250),
                  n = app.map.on("resize", t);
              }
            },
            g = function (e, t, n) {
              var i;
              return function () {
                var a = this,
                  r = arguments,
                  o = function () {
                    (i = null), n || e.apply(a, r);
                  },
                  s = n && !i;
                clearTimeout(i), (i = setTimeout(o, t)), s && e.apply(a, r);
              };
            },
            v = function () {
              "block" ==
              document.querySelector(".embed-share-modal").style.display
                ? (document.querySelector(".embed-share-modal").style.display =
                    "none")
                : (document.querySelector(".embed-share-modal").style.display =
                    "block"),
                t();
            },
            b = function () {
              document.querySelector(".embed-share-modal").style.display =
                "none";
            },
            y = function () {
              window.open(
                "http://www.facebook.com/sharer/sharer.php?u=" +
                  document.location.href,
                "",
                "toolbar=0,status=0,width=626,height=436"
              );
            },
            w = function () {
              var t =
                "text=" +
                e.appTitle +
                "&url=" +
                document.location.href +
                "&related=EsriStoryMaps&hashtags=StoryMaps";
              window.open(
                "https://twitter.com/intent/tweet?" + t,
                "",
                "toolbar=0,status=0,width=626,height=436"
              );
            },
            x =
              '      <style type="text/css">        .embed-bar {          position: absolute;          bottom: 0;          left: 0;          width: 100%;          height: 26px;          font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;          background-color: #f1f1f1;          color: #505050;          z-index: 99999;          line-height: normal;        }        .embed-left {          position: absolute;          left: 10px;          margin-top: 5px;        }        .embed-right {          position: absolute;          right: 10px;          margin-top: 4px;        }        .embedLogoImg {          position: absolute;          top: 50%;          bottom: 50%;          left: 0px;          max-width: 250px;          max-height: 20px;          margin: auto 0;        }        .esri-tagline-embed {          margin-left: 70px;        }        .esri-tagline-embed :hover{          color: #036765;        }        .esri-tagline-embed a {          font-size: 15px;          font-weight: normal;          color: #505050;        }        .share-embed {          position: absolute;          top: 2px;          right: 22px;          padding-right: 8px;          outline: none;          cursor: pointer;        }        .open-newtab-embed {          position: absolute;          top: 2px;          right: 0px;          outline: none;        }        .fullscreen-embed {          position: absolute;          top: 2px;          right: 0px;          outline: none;          cursor: pointer;        }        .fullScreen {          width: 100%;          height: 100%;          position: absolute;          top: 0;          left: 0;        }        .embed-right svg {          width: 16px;          height: 16px;          cursor: pointer;        }        svg:hover #shareIcon,        svg:hover #newTabIcon,        svg:hover #fullscreenIcon,        svg:hover #compressIcon {          fill: #036765;        }      </style>    ' +
              n,
            C = document.createElement("div");
          (C.className = "embed-bar"), (C.innerHTML = x);
          var T =
              '      <style type="text/css">        .embed-share-modal {          display: none;          position: fixed;          z-index: 999;          left: 0;          top: 0;          width: 100%;          height: 100%;          overflow: auto;          background-color: rgba(0,0,0, 0.4);        }        .embed-modal-content {          background-color: #fff;          margin: 15% auto;          padding: 20px;          border: 1px solid #888;          width: 80%;          max-width: 500px;          display: flex;          flex-direction: column;        }        .embed-modal-logo {          margin-top: -40px;          margin-left: -40px;          width: 40px;          height: 40px;          border: 4px solid #FFF;          border-radius: 24px;          background-color: #196fa6;          color: white;          font-size: 16px;          box-sizing: content-box;        }        .embed-modal-logo i{          margin-left: 8px;          margin-top: 7px;          font-size: 24px;        }        .embed-modal-header {          padding-bottom: 15px;        }        .embed-modal-title {          line-height: 1.1;          font-size: 19px;          font-weight: 200;          margin-top: -4px;        }        .embed-modal-body {          height: 60px;        }        .embed-share-url-social {          font-size: 10px;        }        .embed-share-social-container {          font-size: 2.5em;          color: #4c4c4c;        }        .embed-share-social-container i:hover {          cursor: pointer;          color: #036765;        }        .embed-share-facebook {          float: left;        }        .embed-share-twitter {          margin-left: 5px;          float: left;        }        #embed-bitlylink {          display: inline-block;          height: 38px;          width: 240px;          text-align: left;          font-size: 20px;          cursor: text;          padding: 0 0 0 10px;          line-height: 20px;          border: 1px solid #959595;          border-radius: 0;          background-color: #f8f8f8;          opacity: 1;        }        .embed-bar-btn {          background-image: none;          border: 1px solid transparent;          padding: 6px 12px;          font-size: 15px;          line-height: 1.5;          border-radius: 0;          margin-bottom: 0;          font-weight: 400;        }        .btn-bitlylink-open {          margin-top: 1px;          margin-bottom: 11px;          margin-left: 10px;          color: #fff;          background-color: #196fa6;          border-color: #166090;          text-transform: uppercase;        }        .btn-bitlylink-open:hover {          background-color: #005e95;          border-color: #005e95;        }        .embed-modal-footer {          margin-left: auto;          text-align: right;        }        .embed-modal-footer .btn-close {          background-color: #eee;          color: #6e6e6e;          margin-top: 20px;        }        .embed-modal-footer .btn-close:hover {          background-color: #ccc;          color: #6e6e6e;        }        .embed-modal-body svg {          width: 36px;          height: 36px;          cursor: pointer;        }        svg:hover #facebookIcon,        svg:hover #twitterIcon {          fill: #036765;        }        .embed-modal-logo svg  {          width: 24px;          height: 24px;          margin-top: 8px;          margin-left: 6px;        }        @media(max-width: 530px) {          .embed-share-url-container {            display: flex;            justify-content: flex-start;            align-items: stretch;            margin-bottom: 11px;          }          #embed-bitlylink {            width: auto;            min-width: 0;            max-width: 200px;            flex-grow: 1;            flex-shrink: 1;            flex-basis: 0;            padding-right: 10px;          }          .btn-bitlylink-open {            flex: 0 0 auto;          }        }      </style>    ' +
              i,
            S = document.createElement("div");
          (S.className = "embedbar-share-modal"),
            (S.innerHTML = T),
            setTimeout(function () {
              o();
            }, 0),
            (this.initiated = !0);
        }
      }
    };
  }),
  define(
    "storymaps/common/builder/PortalVersionTest",
    ["esri/arcgis/utils", "dojo/Deferred"],
    function (e, t) {
      function n() {
        return e.arcgisUrl.split("/sharing/")[0];
      }
      return {
        run: function () {
          var e = new t(),
            i = null;
          app.portal.hasMyStories = null;
          var a = new Image(),
            r = app.isProduction ? n() + "/apps/" : "../";
          return (
            (a.src = r + "MyStories/assets/my-stories-portal-detector.png"),
            (a.onload = function () {
              (app.portal.hasMyStories = !0), i && clearTimeout(i), e.resolve();
            }),
            (a.onerror = a.onabort =
              function () {
                (app.portal.hasMyStories = !1),
                  i && clearTimeout(i),
                  e.reject();
              }),
            (i = setTimeout(function () {
              e.reject();
            }, 2e3)),
            e
          );
        },
      };
    }
  ),
  define(
    "storymaps/common/builder/MyStoriesWrapper",
    [
      "./PortalVersionTest",
      "esri/IdentityManager",
      "storymaps/common/utils/CommonHelper",
      "dojo/topic",
    ],
    function (e, t, n, i) {
      function a() {
        e.run().then(function () {
          app.isProduction && !p() ? r() : o();
        }, r);
      }
      function r() {
        $(".check-story").hide(), $(window).resize();
      }
      function o() {
        (window.myStoriesInit = s), i.publish("MYSTORIES_SCAN", "start");
        var e = "../MyStories/index.html?fromBuilder";
        (e += "&locale=" + dojo.locale),
          setTimeout(function () {
            $("#my-stories-frame").attr("src", e);
          }, 1e3);
      }
      function s() {
        var e = $("#my-stories-frame")[0].contentWindow;
        return e && e.init && e.check && e.share
          ? app.data.getStoryLength() || app.appCfg.noStoryLengthRequired
            ? ((app.mystories = {
                init: e.init,
                check: e.check,
                share: e.share,
                isChecking: !1,
                hasCheckErrors: !1,
                hasScanErrors: !1,
              }),
              void app.mystories
                .init(
                  app.isInBuilder ? t.toJson() : null,
                  app.isDirectCreationFirstSave || app.isGalleryCreation
                    ? null
                    : app.data.getWebAppItem(),
                  app.cfg.TPL_ID,
                  app.isPortal,
                  function (e, t, n) {
                    i.publish("MY-STORIES-EDIT-MEDIA", {
                      index: e,
                      type: t,
                      actionId: n,
                    });
                  },
                  function (e) {
                    i.publish("MY-STORIES-EDIT-MAP", { id: e });
                  },
                  function () {
                    (app.mystories.hasCheckErrors = !1),
                      i.publish("MY-STORIES-REFRESH");
                  },
                  function (e) {
                    (e = e || { completed: !1, ignoreAllIssues: !1 }),
                      (app.mystories.hasCheckErrors = !e.ignoreAllIssues),
                      (app.mystories.forcedIgnoreIssues = e.ignoreAllIssues),
                      i.publish("MY-STORIES-REFRESH");
                  }
                )
                .then(l, function () {
                  console.error("Failed to initialize My Stories");
                }))
            : void console.log(
                "Skipping the initialization of My Stories until the story has content"
              )
          : void console.error("Failed to load My Stories");
      }
      function l() {
        if (app.mystories)
          return app.mystories.init
            ? void (
                app.mystories.check &&
                ((app.mystories.isChecking = !0),
                (app.mystories.hasCheckErrors = !1),
                i.publish("MYSTORIES_SCAN", "start"),
                app.mystories.check(app.data.getWebAppData().get()).then(
                  function (e) {
                    (e = e || { ignoreAllIssues: !1 }),
                      (app.mystories.isChecking = !1),
                      (app.mystories.hasCheckErrors = !1),
                      (app.mystories.forcedIgnoreIssues = e.ignoreAllIssues),
                      i.publish("MYSTORIES_SCAN", "success"),
                      $("#sharePopup").is(":visible") &&
                        app.builder.openSharePopup();
                  },
                  function (e) {
                    (e = e || { completed: !1, ignoreAllIssues: !1 }),
                      (app.mystories.isChecking = !1),
                      (app.mystories.hasCheckErrors = !0),
                      (app.mystories.forcedIgnoreIssues = e.ignoreAllIssues),
                      i.publish("MYSTORIES_SCAN", "error"),
                      $("#sharePopup").is(":visible") &&
                        app.builder.openSharePopup();
                  }
                ))
              )
            : void s();
      }
      function p() {
        var e = n.getPortalURL().split("//").slice(-1)[0],
          t = e.split("."),
          i = document.location.host,
          a = i.split(".");
        return (
          e == i ||
          (e.split("/").length > 1 && e.split("/")[0] == i) ||
          (a.length < 3
            ? i == e
            : a.slice(1).join(".") == t.slice(-2).join("."))
        );
      }
      return { loadMyStories: a, scanStory: l, myStoriesIsSameDomain: p };
    }
  ),
  (FastClick.prototype.deviceIsAndroid =
    navigator.userAgent.indexOf("Android") > 0),
  (FastClick.prototype.deviceIsIOS = /iP(ad|hone|od)/.test(
    navigator.userAgent
  )),
  (FastClick.prototype.deviceIsIOS4 =
    FastClick.prototype.deviceIsIOS &&
    /OS 4_\d(_\d)?/.test(navigator.userAgent)),
  (FastClick.prototype.deviceIsIOSWithBadTarget =
    FastClick.prototype.deviceIsIOS &&
    /OS ([6-9]|\d{2})_\d/.test(navigator.userAgent)),
  (FastClick.prototype.needsClick = function (e) {
    "use strict";
    switch (e.nodeName.toLowerCase()) {
      case "button":
      case "select":
      case "textarea":
        if (e.disabled) return !0;
        break;
      case "input":
        if ((this.deviceIsIOS && "file" === e.type) || e.disabled) return !0;
        break;
      case "label":
      case "video":
        return !0;
    }
    return /\bneedsclick\b/.test(e.className);
  }),
  (FastClick.prototype.needsFocus = function (e) {
    "use strict";
    switch (e.nodeName.toLowerCase()) {
      case "textarea":
        return !0;
      case "select":
        return !this.deviceIsAndroid;
      case "input":
        switch (e.type) {
          case "button":
          case "checkbox":
          case "file":
          case "image":
          case "radio":
          case "submit":
            return !1;
        }
        return !e.disabled && !e.readOnly;
      default:
        return /\bneedsfocus\b/.test(e.className);
    }
  }),
  (FastClick.prototype.sendClick = function (e, t) {
    "use strict";
    var n, i;
    document.activeElement &&
      document.activeElement !== e &&
      document.activeElement.blur(),
      (i = t.changedTouches[0]),
      (n = document.createEvent("MouseEvents")),
      n.initMouseEvent(
        this.determineEventType(e),
        !0,
        !0,
        window,
        1,
        i.screenX,
        i.screenY,
        i.clientX,
        i.clientY,
        !1,
        !1,
        !1,
        !1,
        0,
        null
      ),
      (n.forwardedTouchEvent = !0),
      e.dispatchEvent(n);
  }),
  (FastClick.prototype.determineEventType = function (e) {
    "use strict";
    return this.deviceIsAndroid && "select" === e.tagName.toLowerCase()
      ? "mousedown"
      : "click";
  }),
  (FastClick.prototype.focus = function (e) {
    "use strict";
    var t;
    this.deviceIsIOS &&
    e.setSelectionRange &&
    0 !== e.type.indexOf("date") &&
    "time" !== e.type
      ? ((t = e.value.length), e.setSelectionRange(t, t))
      : e.focus();
  }),
  (FastClick.prototype.updateScrollParent = function (e) {
    "use strict";
    var t, n;
    if (!(t = e.fastClickScrollParent) || !t.contains(e)) {
      n = e;
      do {
        if (n.scrollHeight > n.offsetHeight) {
          (t = n), (e.fastClickScrollParent = n);
          break;
        }
        n = n.parentElement;
      } while (n);
    }
    t && (t.fastClickLastScrollTop = t.scrollTop);
  }),
  (FastClick.prototype.getTargetElementFromEventTarget = function (e) {
    "use strict";
    return e.nodeType === Node.TEXT_NODE ? e.parentNode : e;
  }),
  (FastClick.prototype.onTouchStart = function (e) {
    "use strict";
    var t, n, i;
    if (e.targetTouches.length > 1) return !0;
    if (
      ((t = this.getTargetElementFromEventTarget(e.target)),
      (n = e.targetTouches[0]),
      this.deviceIsIOS)
    ) {
      if (((i = window.getSelection()), i.rangeCount && !i.isCollapsed))
        return !0;
      if (!this.deviceIsIOS4) {
        if (n.identifier === this.lastTouchIdentifier)
          return e.preventDefault(), !1;
        (this.lastTouchIdentifier = n.identifier), this.updateScrollParent(t);
      }
    }
    return (
      (this.trackingClick = !0),
      (this.trackingClickStart = e.timeStamp),
      (this.targetElement = t),
      (this.touchStartX = n.pageX),
      (this.touchStartY = n.pageY),
      e.timeStamp - this.lastClickTime < 200 && e.preventDefault(),
      !0
    );
  }),
  (FastClick.prototype.touchHasMoved = function (e) {
    "use strict";
    var t = e.changedTouches[0],
      n = this.touchBoundary;
    return (
      Math.abs(t.pageX - this.touchStartX) > n ||
      Math.abs(t.pageY - this.touchStartY) > n
    );
  }),
  (FastClick.prototype.onTouchMove = function (e) {
    "use strict";
    return (
      !this.trackingClick ||
      ((this.targetElement !== this.getTargetElementFromEventTarget(e.target) ||
        this.touchHasMoved(e)) &&
        ((this.trackingClick = !1), (this.targetElement = null)),
      !0)
    );
  }),
  (FastClick.prototype.findControl = function (e) {
    "use strict";
    return void 0 !== e.control
      ? e.control
      : e.htmlFor
      ? document.getElementById(e.htmlFor)
      : e.querySelector(
          "button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea"
        );
  }),
  (FastClick.prototype.onTouchEnd = function (e) {
    "use strict";
    var t,
      n,
      i,
      a,
      r,
      o = this.targetElement;
    if (!this.trackingClick) return !0;
    if (e.timeStamp - this.lastClickTime < 200)
      return (this.cancelNextClick = !0), !0;
    if (
      ((this.cancelNextClick = !1),
      (this.lastClickTime = e.timeStamp),
      (n = this.trackingClickStart),
      (this.trackingClick = !1),
      (this.trackingClickStart = 0),
      this.deviceIsIOSWithBadTarget &&
        ((r = e.changedTouches[0]),
        (o =
          document.elementFromPoint(
            r.pageX - window.pageXOffset,
            r.pageY - window.pageYOffset
          ) || o),
        (o.fastClickScrollParent = this.targetElement.fastClickScrollParent)),
      "label" === (i = o.tagName.toLowerCase()))
    ) {
      if ((t = this.findControl(o))) {
        if ((this.focus(o), this.deviceIsAndroid)) return !1;
        o = t;
      }
    } else if (this.needsFocus(o))
      return e.timeStamp - n > 100 ||
        (this.deviceIsIOS && window.top !== window && "input" === i)
        ? ((this.targetElement = null), !1)
        : (this.focus(o),
          (this.deviceIsIOS4 && "select" === i) ||
            ((this.targetElement = null), e.preventDefault()),
          !1);
    return (
      !(
        !this.deviceIsIOS ||
        this.deviceIsIOS4 ||
        !(a = o.fastClickScrollParent) ||
        a.fastClickLastScrollTop === a.scrollTop
      ) ||
      (this.needsClick(o) || (e.preventDefault(), this.sendClick(o, e)), !1)
    );
  }),
  (FastClick.prototype.onTouchCancel = function () {
    "use strict";
    (this.trackingClick = !1), (this.targetElement = null);
  }),
  (FastClick.prototype.onMouse = function (e) {
    "use strict";
    return (
      !this.targetElement ||
      !!e.forwardedTouchEvent ||
      !e.cancelable ||
      !(!this.needsClick(this.targetElement) || this.cancelNextClick) ||
      (e.stopImmediatePropagation
        ? e.stopImmediatePropagation()
        : (e.propagationStopped = !0),
      e.stopPropagation(),
      e.preventDefault(),
      !1)
    );
  }),
  (FastClick.prototype.onClick = function (e) {
    "use strict";
    var t;
    return this.trackingClick
      ? ((this.targetElement = null), (this.trackingClick = !1), !0)
      : ("submit" === e.target.type && 0 === e.detail) ||
          ((t = this.onMouse(e)), t || (this.targetElement = null), t);
  }),
  (FastClick.prototype.destroy = function () {
    "use strict";
    var e = this.layer;
    this.deviceIsAndroid &&
      (e.removeEventListener("mouseover", this.onMouse, !0),
      e.removeEventListener("mousedown", this.onMouse, !0),
      e.removeEventListener("mouseup", this.onMouse, !0)),
      e.removeEventListener("click", this.onClick, !0),
      e.removeEventListener("touchstart", this.onTouchStart, !1),
      e.removeEventListener("touchmove", this.onTouchMove, !1),
      e.removeEventListener("touchend", this.onTouchEnd, !1),
      e.removeEventListener("touchcancel", this.onTouchCancel, !1);
  }),
  (FastClick.notNeeded = function (e) {
    "use strict";
    var t, n;
    if (void 0 === window.ontouchstart) return !0;
    if ((n = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1])) {
      if (!FastClick.prototype.deviceIsAndroid) return !0;
      if ((t = document.querySelector("meta[name=viewport]"))) {
        if (-1 !== t.content.indexOf("user-scalable=no")) return !0;
        if (n > 31 && window.innerWidth <= window.screen.width) return !0;
      }
    }
    return "none" === e.style.msTouchAction;
  }),
  (FastClick.attach = function (e) {
    "use strict";
    return new FastClick(e);
  }),
  "undefined" != typeof define && define.amd
    ? define("lib-app/jquery.fastClick", [], function () {
        "use strict";
        return FastClick;
      })
    : "undefined" != typeof module && module.exports
    ? ((module.exports = FastClick.attach),
      (module.exports.FastClick = FastClick))
    : (window.FastClick = FastClick),
  "undefined" == typeof jQuery)
)
  throw new Error("Bootstrap's JavaScript requires jQuery");
+(function (e) {
  "use strict";
  var t = e.fn.jquery.split(" ")[0].split(".");
  if ((t[0] < 2 && t[1] < 9) || (1 == t[0] && 9 == t[1] && t[2] < 1))
    throw new Error(
      "Bootstrap's JavaScript requires jQuery version 1.9.1 or higher"
    );
})(jQuery),
  (function (e) {
    "use strict";
    function t(t) {
      var n = t.attr("data-target");
      n ||
        ((n = t.attr("href")),
        (n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, "")));
      var i = n && e(n);
      return i && i.length ? i : t.parent();
    }
    function n(n) {
      (n && 3 === n.which) ||
        (e(a).remove(),
        e(r).each(function () {
          var i = e(this),
            a = t(i),
            r = { relatedTarget: this };
          a.hasClass("open") &&
            ((n &&
              "click" == n.type &&
              /input|textarea/i.test(n.target.tagName) &&
              e.contains(a[0], n.target)) ||
              (a.trigger((n = e.Event("hide.bs.dropdown", r))),
              n.isDefaultPrevented() ||
                (i.attr("aria-expanded", "false"),
                a.removeClass("open").trigger("hidden.bs.dropdown", r))));
        }));
    }
    function i(t) {
      return this.each(function () {
        var n = e(this),
          i = n.data("bs.dropdown");
        i || n.data("bs.dropdown", (i = new o(this))),
          "string" == typeof t && i[t].call(n);
      });
    }
    var a = ".dropdown-backdrop",
      r = '[data-toggle="dropdown"]',
      o = function (t) {
        e(t).on("click.bs.dropdown", this.toggle);
      };
    (o.VERSION = "3.3.5"),
      (o.prototype.toggle = function (i) {
        var a = e(this);
        if (!a.is(".disabled, :disabled")) {
          var r = t(a),
            o = r.hasClass("open");
          if ((n(), !o)) {
            "ontouchstart" in document.documentElement &&
              !r.closest(".navbar-nav").length &&
              e(document.createElement("div"))
                .addClass("dropdown-backdrop")
                .insertAfter(e(this))
                .on("click", n);
            var s = { relatedTarget: this };
            if (
              (r.trigger((i = e.Event("show.bs.dropdown", s))),
              i.isDefaultPrevented())
            )
              return;
            a.trigger("focus").attr("aria-expanded", "true"),
              r.toggleClass("open").trigger("shown.bs.dropdown", s);
          }
          return !1;
        }
      }),
      (o.prototype.keydown = function (n) {
        if (
          /(38|40|27|32)/.test(n.which) &&
          !/input|textarea/i.test(n.target.tagName)
        ) {
          var i = e(this);
          if (
            (n.preventDefault(),
            n.stopPropagation(),
            !i.is(".disabled, :disabled"))
          ) {
            var a = t(i),
              o = a.hasClass("open");
            if ((!o && 27 != n.which) || (o && 27 == n.which))
              return (
                27 == n.which && a.find(r).trigger("focus"), i.trigger("click")
              );
            var s = a.find(".dropdown-menu li:not(.disabled):visible a");
            if (s.length) {
              var l = s.index(n.target);
              38 == n.which && l > 0 && l--,
                40 == n.which && l < s.length - 1 && l++,
                ~l || (l = 0),
                s.eq(l).trigger("focus");
            }
          }
        }
      });
    var s = e.fn.dropdown;
    (e.fn.dropdown = i),
      (e.fn.dropdown.Constructor = o),
      (e.fn.dropdown.noConflict = function () {
        return (e.fn.dropdown = s), this;
      }),
      e(document)
        .on("click.bs.dropdown.data-api", n)
        .on("click.bs.dropdown.data-api", ".dropdown form", function (e) {
          e.stopPropagation();
        })
        .on("click.bs.dropdown.data-api", r, o.prototype.toggle)
        .on("keydown.bs.dropdown.data-api", r, o.prototype.keydown)
        .on(
          "keydown.bs.dropdown.data-api",
          ".dropdown-menu",
          o.prototype.keydown
        );
  })(jQuery),
  (function (e) {
    "use strict";
    function t(t, i) {
      return this.each(function () {
        var a = e(this),
          r = a.data("bs.modal"),
          o = e.extend({}, n.DEFAULTS, a.data(), "object" == typeof t && t);
        r || a.data("bs.modal", (r = new n(this, o))),
          "string" == typeof t ? r[t](i) : o.show && r.show(i);
      });
    }
    var n = function (t, n) {
      (this.options = n),
        (this.$body = e(document.body)),
        (this.$element = e(t)),
        (this.$dialog = this.$element.find(".modal-dialog")),
        (this.$backdrop = null),
        (this.isShown = null),
        (this.originalBodyPad = null),
        (this.scrollbarWidth = 0),
        (this.ignoreBackdropClick = !1),
        this.options.remote &&
          this.$element.find(".modal-content").load(
            this.options.remote,
            e.proxy(function () {
              this.$element.trigger("loaded.bs.modal");
            }, this)
          );
    };
    (n.VERSION = "3.3.5"),
      (n.TRANSITION_DURATION = 300),
      (n.BACKDROP_TRANSITION_DURATION = 150),
      (n.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }),
      (n.prototype.toggle = function (e) {
        return this.isShown ? this.hide() : this.show(e);
      }),
      (n.prototype.show = function (t) {
        var i = this,
          a = e.Event("show.bs.modal", { relatedTarget: t });
        this.$element.trigger(a),
          this.isShown ||
            a.isDefaultPrevented() ||
            ((this.isShown = !0),
            this.checkScrollbar(),
            this.setScrollbar(),
            this.$body.addClass("modal-open"),
            this.escape(),
            this.resize(),
            this.$element.on(
              "click.dismiss.bs.modal",
              '[data-dismiss="modal"]',
              e.proxy(this.hide, this)
            ),
            this.$dialog.on("mousedown.dismiss.bs.modal", function () {
              i.$element.one("mouseup.dismiss.bs.modal", function (t) {
                e(t.target).is(i.$element) && (i.ignoreBackdropClick = !0);
              });
            }),
            this.backdrop(function () {
              var a = e.support.transition && i.$element.hasClass("fade");
              i.$element.parent().length || i.$element.appendTo(i.$body),
                i.$element.show().scrollTop(0),
                i.adjustDialog(),
                a && i.$element[0].offsetWidth,
                i.$element.addClass("in"),
                i.enforceFocus();
              var r = e.Event("shown.bs.modal", { relatedTarget: t });
              a
                ? i.$dialog
                    .one("bsTransitionEnd", function () {
                      i.$element.trigger("focus").trigger(r);
                    })
                    .emulateTransitionEnd(n.TRANSITION_DURATION)
                : i.$element.trigger("focus").trigger(r);
            }));
      }),
      (n.prototype.hide = function (t) {
        t && t.preventDefault(),
          (t = e.Event("hide.bs.modal")),
          this.$element.trigger(t),
          this.isShown &&
            !t.isDefaultPrevented() &&
            ((this.isShown = !1),
            this.escape(),
            this.resize(),
            e(document).off("focusin.bs.modal"),
            this.$element
              .removeClass("in")
              .off("click.dismiss.bs.modal")
              .off("mouseup.dismiss.bs.modal"),
            this.$dialog.off("mousedown.dismiss.bs.modal"),
            e.support.transition && this.$element.hasClass("fade")
              ? this.$element
                  .one("bsTransitionEnd", e.proxy(this.hideModal, this))
                  .emulateTransitionEnd(n.TRANSITION_DURATION)
              : this.hideModal());
      }),
      (n.prototype.enforceFocus = function () {
        e(document)
          .off("focusin.bs.modal")
          .on(
            "focusin.bs.modal",
            e.proxy(function (e) {
              this.$element[0] === e.target ||
                this.$element.has(e.target).length ||
                this.$element.trigger("focus");
            }, this)
          );
      }),
      (n.prototype.escape = function () {
        this.isShown && this.options.keyboard
          ? this.$element.on(
              "keydown.dismiss.bs.modal",
              e.proxy(function (e) {
                27 == e.which && this.hide();
              }, this)
            )
          : this.isShown || this.$element.off("keydown.dismiss.bs.modal");
      }),
      (n.prototype.resize = function () {
        this.isShown
          ? e(window).on("resize.bs.modal", e.proxy(this.handleUpdate, this))
          : e(window).off("resize.bs.modal");
      }),
      (n.prototype.hideModal = function () {
        var e = this;
        this.$element.hide(),
          this.backdrop(function () {
            e.$body.removeClass("modal-open"),
              e.resetAdjustments(),
              e.resetScrollbar(),
              e.$element.trigger("hidden.bs.modal");
          });
      }),
      (n.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), (this.$backdrop = null);
      }),
      (n.prototype.backdrop = function (t) {
        var i = this,
          a = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
          var r = e.support.transition && a;
          if (
            ((this.$backdrop = e(document.createElement("div"))
              .addClass("modal-backdrop " + a)
              .appendTo(this.$body)),
            this.$element.on(
              "click.dismiss.bs.modal",
              e.proxy(function (e) {
                return this.ignoreBackdropClick
                  ? void (this.ignoreBackdropClick = !1)
                  : void (
                      e.target === e.currentTarget &&
                      ("static" == this.options.backdrop
                        ? this.$element[0].focus()
                        : this.hide())
                    );
              }, this)
            ),
            r && this.$backdrop[0].offsetWidth,
            this.$backdrop.addClass("in"),
            !t)
          )
            return;
          r
            ? this.$backdrop
                .one("bsTransitionEnd", t)
                .emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION)
            : t();
        } else if (!this.isShown && this.$backdrop) {
          this.$backdrop.removeClass("in");
          var o = function () {
            i.removeBackdrop(), t && t();
          };
          e.support.transition && this.$element.hasClass("fade")
            ? this.$backdrop
                .one("bsTransitionEnd", o)
                .emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION)
            : o();
        } else t && t();
      }),
      (n.prototype.handleUpdate = function () {
        this.adjustDialog();
      }),
      (n.prototype.adjustDialog = function () {
        var e =
          this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
          paddingLeft: !this.bodyIsOverflowing && e ? this.scrollbarWidth : "",
          paddingRight: this.bodyIsOverflowing && !e ? this.scrollbarWidth : "",
        });
      }),
      (n.prototype.resetAdjustments = function () {
        this.$element.css({ paddingLeft: "", paddingRight: "" });
      }),
      (n.prototype.checkScrollbar = function () {
        var e = window.innerWidth;
        if (!e) {
          var t = document.documentElement.getBoundingClientRect();
          e = t.right - Math.abs(t.left);
        }
        (this.bodyIsOverflowing = document.body.clientWidth < e),
          (this.scrollbarWidth = this.measureScrollbar());
      }),
      (n.prototype.setScrollbar = function () {
        var e = parseInt(this.$body.css("padding-right") || 0, 10);
        (this.originalBodyPad = document.body.style.paddingRight || ""),
          this.bodyIsOverflowing &&
            this.$body.css("padding-right", e + this.scrollbarWidth);
      }),
      (n.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", this.originalBodyPad);
      }),
      (n.prototype.measureScrollbar = function () {
        var e = document.createElement("div");
        (e.className = "modal-scrollbar-measure"), this.$body.append(e);
        var t = e.offsetWidth - e.clientWidth;
        return this.$body[0].removeChild(e), t;
      });
    var i = e.fn.modal;
    (e.fn.modal = t),
      (e.fn.modal.Constructor = n),
      (e.fn.modal.noConflict = function () {
        return (e.fn.modal = i), this;
      }),
      e(document).on(
        "click.bs.modal.data-api",
        '[data-toggle="modal"]',
        function (n) {
          var i = e(this),
            a = i.attr("href"),
            r = e(
              i.attr("data-target") || (a && a.replace(/.*(?=#[^\s]+$)/, ""))
            ),
            o = r.data("bs.modal")
              ? "toggle"
              : e.extend({ remote: !/#/.test(a) && a }, r.data(), i.data());
          i.is("a") && n.preventDefault(),
            r.one("show.bs.modal", function (e) {
              e.isDefaultPrevented() ||
                r.one("hidden.bs.modal", function () {
                  i.is(":visible") && i.trigger("focus");
                });
            }),
            t.call(r, o, this);
        }
      );
  })(jQuery),
  (function (e) {
    "use strict";
    function t(t) {
      return this.each(function () {
        var i = e(this),
          a = i.data("bs.tooltip"),
          r = "object" == typeof t && t;
        (a || !/destroy|hide/.test(t)) &&
          (a || i.data("bs.tooltip", (a = new n(this, r))),
          "string" == typeof t && a[t]());
      });
    }
    var n = function (e, t) {
      (this.type = null),
        (this.options = null),
        (this.enabled = null),
        (this.timeout = null),
        (this.hoverState = null),
        (this.$element = null),
        (this.inState = null),
        this.init("tooltip", e, t);
    };
    (n.VERSION = "3.3.5"),
      (n.TRANSITION_DURATION = 150),
      (n.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template:
          '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: { selector: "body", padding: 0 },
      }),
      (n.prototype.init = function (t, n, i) {
        if (
          ((this.enabled = !0),
          (this.type = t),
          (this.$element = e(n)),
          (this.options = this.getOptions(i)),
          (this.$viewport =
            this.options.viewport &&
            e(
              e.isFunction(this.options.viewport)
                ? this.options.viewport.call(this, this.$element)
                : this.options.viewport.selector || this.options.viewport
            )),
          (this.inState = { click: !1, hover: !1, focus: !1 }),
          this.$element[0] instanceof document.constructor &&
            !this.options.selector)
        )
          throw new Error(
            "`selector` option must be specified when initializing " +
              this.type +
              " on the window.document object!"
          );
        for (var a = this.options.trigger.split(" "), r = a.length; r--; ) {
          var o = a[r];
          if ("click" == o)
            this.$element.on(
              "click." + this.type,
              this.options.selector,
              e.proxy(this.toggle, this)
            );
          else if ("manual" != o) {
            var s = "hover" == o ? "mouseenter" : "focusin",
              l = "hover" == o ? "mouseleave" : "focusout";
            this.$element.on(
              s + "." + this.type,
              this.options.selector,
              e.proxy(this.enter, this)
            ),
              this.$element.on(
                l + "." + this.type,
                this.options.selector,
                e.proxy(this.leave, this)
              );
          }
        }
        this.options.selector
          ? (this._options = e.extend({}, this.options, {
              trigger: "manual",
              selector: "",
            }))
          : this.fixTitle();
      }),
      (n.prototype.getDefaults = function () {
        return n.DEFAULTS;
      }),
      (n.prototype.getOptions = function (t) {
        return (
          (t = e.extend({}, this.getDefaults(), this.$element.data(), t)),
          t.delay &&
            "number" == typeof t.delay &&
            (t.delay = { show: t.delay, hide: t.delay }),
          t
        );
      }),
      (n.prototype.getDelegateOptions = function () {
        var t = {},
          n = this.getDefaults();
        return (
          this._options &&
            e.each(this._options, function (e, i) {
              n[e] != i && (t[e] = i);
            }),
          t
        );
      }),
      (n.prototype.enter = function (t) {
        var n =
          t instanceof this.constructor
            ? t
            : e(t.currentTarget).data("bs." + this.type);
        return (
          n ||
            ((n = new this.constructor(
              t.currentTarget,
              this.getDelegateOptions()
            )),
            e(t.currentTarget).data("bs." + this.type, n)),
          t instanceof e.Event &&
            (n.inState["focusin" == t.type ? "focus" : "hover"] = !0),
          n.tip().hasClass("in") || "in" == n.hoverState
            ? void (n.hoverState = "in")
            : (clearTimeout(n.timeout),
              (n.hoverState = "in"),
              n.options.delay && n.options.delay.show
                ? void (n.timeout = setTimeout(function () {
                    "in" == n.hoverState && n.show();
                  }, n.options.delay.show))
                : n.show())
        );
      }),
      (n.prototype.isInStateTrue = function () {
        for (var e in this.inState) if (this.inState[e]) return !0;
        return !1;
      }),
      (n.prototype.leave = function (t) {
        var n =
          t instanceof this.constructor
            ? t
            : e(t.currentTarget).data("bs." + this.type);
        return (
          n ||
            ((n = new this.constructor(
              t.currentTarget,
              this.getDelegateOptions()
            )),
            e(t.currentTarget).data("bs." + this.type, n)),
          t instanceof e.Event &&
            (n.inState["focusout" == t.type ? "focus" : "hover"] = !1),
          n.isInStateTrue()
            ? void 0
            : (clearTimeout(n.timeout),
              (n.hoverState = "out"),
              n.options.delay && n.options.delay.hide
                ? void (n.timeout = setTimeout(function () {
                    "out" == n.hoverState && n.hide();
                  }, n.options.delay.hide))
                : n.hide())
        );
      }),
      (n.prototype.show = function () {
        var t = e.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
          this.$element.trigger(t);
          var i = e.contains(
            this.$element[0].ownerDocument.documentElement,
            this.$element[0]
          );
          if (t.isDefaultPrevented() || !i) return;
          var a = this,
            r = this.tip(),
            o = this.getUID(this.type);
          this.setContent(),
            r.attr("id", o),
            this.$element.attr("aria-describedby", o),
            this.options.animation && r.addClass("fade");
          var s =
              "function" == typeof this.options.placement
                ? this.options.placement.call(this, r[0], this.$element[0])
                : this.options.placement,
            l = /\s?auto?\s?/i,
            p = l.test(s);
          p && (s = s.replace(l, "") || "top"),
            r
              .detach()
              .css({ top: 0, left: 0, display: "block" })
              .addClass(s)
              .data("bs." + this.type, this),
            this.options.container
              ? r.appendTo(this.options.container)
              : r.insertAfter(this.$element),
            this.$element.trigger("inserted.bs." + this.type);
          var c = this.getPosition(),
            d = r[0].offsetWidth,
            u = r[0].offsetHeight;
          if (p) {
            var f = s,
              h = this.getPosition(this.$viewport);
            (s =
              "bottom" == s && c.bottom + u > h.bottom
                ? "top"
                : "top" == s && c.top - u < h.top
                ? "bottom"
                : "right" == s && c.right + d > h.width
                ? "left"
                : "left" == s && c.left - d < h.left
                ? "right"
                : s),
              r.removeClass(f).addClass(s);
          }
          var m = this.getCalculatedOffset(s, c, d, u);
          this.applyPlacement(m, s);
          var g = function () {
            var e = a.hoverState;
            a.$element.trigger("shown.bs." + a.type),
              (a.hoverState = null),
              "out" == e && a.leave(a);
          };
          e.support.transition && this.$tip.hasClass("fade")
            ? r
                .one("bsTransitionEnd", g)
                .emulateTransitionEnd(n.TRANSITION_DURATION)
            : g();
        }
      }),
      (n.prototype.applyPlacement = function (t, n) {
        var i = this.tip(),
          a = i[0].offsetWidth,
          r = i[0].offsetHeight,
          o = parseInt(i.css("margin-top"), 10),
          s = parseInt(i.css("margin-left"), 10);
        isNaN(o) && (o = 0),
          isNaN(s) && (s = 0),
          (t.top += o),
          (t.left += s),
          e.offset.setOffset(
            i[0],
            e.extend(
              {
                using: function (e) {
                  i.css({ top: Math.round(e.top), left: Math.round(e.left) });
                },
              },
              t
            ),
            0
          ),
          i.addClass("in");
        var l = i[0].offsetWidth,
          p = i[0].offsetHeight;
        "top" == n && p != r && (t.top = t.top + r - p);
        var c = this.getViewportAdjustedDelta(n, t, l, p);
        c.left ? (t.left += c.left) : (t.top += c.top);
        var d = /top|bottom/.test(n),
          u = d ? 2 * c.left - a + l : 2 * c.top - r + p,
          f = d ? "offsetWidth" : "offsetHeight";
        i.offset(t), this.replaceArrow(u, i[0][f], d);
      }),
      (n.prototype.replaceArrow = function (e, t, n) {
        this.arrow()
          .css(n ? "left" : "top", 50 * (1 - e / t) + "%")
          .css(n ? "top" : "left", "");
      }),
      (n.prototype.setContent = function () {
        var e = this.tip(),
          t = this.getTitle();
        e.find(".tooltip-inner")[this.options.html ? "html" : "text"](t),
          e.removeClass("fade in top bottom left right");
      }),
      (n.prototype.hide = function (t) {
        function i() {
          "in" != a.hoverState && r.detach(),
            a.$element
              .removeAttr("aria-describedby")
              .trigger("hidden.bs." + a.type),
            t && t();
        }
        var a = this,
          r = e(this.$tip),
          o = e.Event("hide.bs." + this.type);
        return (
          this.$element.trigger(o),
          o.isDefaultPrevented()
            ? void 0
            : (r.removeClass("in"),
              e.support.transition && r.hasClass("fade")
                ? r
                    .one("bsTransitionEnd", i)
                    .emulateTransitionEnd(n.TRANSITION_DURATION)
                : i(),
              (this.hoverState = null),
              this)
        );
      }),
      (n.prototype.fixTitle = function () {
        var e = this.$element;
        (e.attr("title") || "string" != typeof e.attr("data-original-title")) &&
          e
            .attr("data-original-title", e.attr("title") || "")
            .attr("title", "");
      }),
      (n.prototype.hasContent = function () {
        return this.getTitle();
      }),
      (n.prototype.getPosition = function (t) {
        t = t || this.$element;
        var n = t[0],
          i = "BODY" == n.tagName,
          a = n.getBoundingClientRect();
        null == a.width &&
          (a = e.extend({}, a, {
            width: a.right - a.left,
            height: a.bottom - a.top,
          }));
        var r = i ? { top: 0, left: 0 } : t.offset(),
          o = {
            scroll: i
              ? document.documentElement.scrollTop || document.body.scrollTop
              : t.scrollTop(),
          },
          s = i
            ? { width: e(window).width(), height: e(window).height() }
            : null;
        return e.extend({}, a, o, s, r);
      }),
      (n.prototype.getCalculatedOffset = function (e, t, n, i) {
        return "bottom" == e
          ? { top: t.top + t.height, left: t.left + t.width / 2 - n / 2 }
          : "top" == e
          ? { top: t.top - i, left: t.left + t.width / 2 - n / 2 }
          : "left" == e
          ? { top: t.top + t.height / 2 - i / 2, left: t.left - n }
          : { top: t.top + t.height / 2 - i / 2, left: t.left + t.width };
      }),
      (n.prototype.getViewportAdjustedDelta = function (e, t, n, i) {
        var a = { top: 0, left: 0 };
        if (!this.$viewport) return a;
        var r = (this.options.viewport && this.options.viewport.padding) || 0,
          o = this.getPosition(this.$viewport);
        if (/right|left/.test(e)) {
          var s = t.top - r - o.scroll,
            l = t.top + r - o.scroll + i;
          s < o.top
            ? (a.top = o.top - s)
            : l > o.top + o.height && (a.top = o.top + o.height - l);
        } else {
          var p = t.left - r,
            c = t.left + r + n;
          p < o.left
            ? (a.left = o.left - p)
            : c > o.right && (a.left = o.left + o.width - c);
        }
        return a;
      }),
      (n.prototype.getTitle = function () {
        var e = this.$element,
          t = this.options;
        return (
          e.attr("data-original-title") ||
          ("function" == typeof t.title ? t.title.call(e[0]) : t.title)
        );
      }),
      (n.prototype.getUID = function (e) {
        do {
          e += ~~(1e6 * Math.random());
        } while (document.getElementById(e));
        return e;
      }),
      (n.prototype.tip = function () {
        if (
          !this.$tip &&
          ((this.$tip = e(this.options.template)), 1 != this.$tip.length)
        )
          throw new Error(
            this.type +
              " `template` option must consist of exactly 1 top-level element!"
          );
        return this.$tip;
      }),
      (n.prototype.arrow = function () {
        return (this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow"));
      }),
      (n.prototype.enable = function () {
        this.enabled = !0;
      }),
      (n.prototype.disable = function () {
        this.enabled = !1;
      }),
      (n.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled;
      }),
      (n.prototype.toggle = function (t) {
        var n = this;
        t &&
          ((n = e(t.currentTarget).data("bs." + this.type)) ||
            ((n = new this.constructor(
              t.currentTarget,
              this.getDelegateOptions()
            )),
            e(t.currentTarget).data("bs." + this.type, n))),
          t
            ? ((n.inState.click = !n.inState.click),
              n.isInStateTrue() ? n.enter(n) : n.leave(n))
            : n.tip().hasClass("in")
            ? n.leave(n)
            : n.enter(n);
      }),
      (n.prototype.destroy = function () {
        var e = this;
        clearTimeout(this.timeout),
          this.hide(function () {
            e.$element.off("." + e.type).removeData("bs." + e.type),
              e.$tip && e.$tip.detach(),
              (e.$tip = null),
              (e.$arrow = null),
              (e.$viewport = null);
          });
      });
    var i = e.fn.tooltip;
    (e.fn.tooltip = t),
      (e.fn.tooltip.Constructor = n),
      (e.fn.tooltip.noConflict = function () {
        return (e.fn.tooltip = i), this;
      });
  })(jQuery),
  (function (e) {
    "use strict";
    function t(t) {
      return this.each(function () {
        var i = e(this),
          a = i.data("bs.popover"),
          r = "object" == typeof t && t;
        (a || !/destroy|hide/.test(t)) &&
          (a || i.data("bs.popover", (a = new n(this, r))),
          "string" == typeof t && a[t]());
      });
    }
    var n = function (e, t) {
      this.init("popover", e, t);
    };
    if (!e.fn.tooltip) throw new Error("Popover requires tooltip.js");
    (n.VERSION = "3.3.5"),
      (n.DEFAULTS = e.extend({}, e.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template:
          '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',
      })),
      (n.prototype = e.extend({}, e.fn.tooltip.Constructor.prototype)),
      (n.prototype.constructor = n),
      (n.prototype.getDefaults = function () {
        return n.DEFAULTS;
      }),
      (n.prototype.setContent = function () {
        var e = this.tip(),
          t = this.getTitle(),
          n = this.getContent();
        e.find(".popover-title")[this.options.html ? "html" : "text"](t),
          e
            .find(".popover-content")
            .children()
            .detach()
            .end()
            [
              this.options.html
                ? "string" == typeof n
                  ? "html"
                  : "append"
                : "text"
            ](n),
          e.removeClass("fade top bottom left right in"),
          e.find(".popover-title").html() || e.find(".popover-title").hide();
      }),
      (n.prototype.hasContent = function () {
        return this.getTitle() || this.getContent();
      }),
      (n.prototype.getContent = function () {
        var e = this.$element,
          t = this.options;
        return (
          e.attr("data-content") ||
          ("function" == typeof t.content ? t.content.call(e[0]) : t.content)
        );
      }),
      (n.prototype.arrow = function () {
        return (this.$arrow = this.$arrow || this.tip().find(".arrow"));
      });
    var i = e.fn.popover;
    (e.fn.popover = t),
      (e.fn.popover.Constructor = n),
      (e.fn.popover.noConflict = function () {
        return (e.fn.popover = i), this;
      });
  })(jQuery),
  (function (e) {
    "use strict";
    function t(t) {
      return this.each(function () {
        var i = e(this),
          a = i.data("bs.tab");
        a || i.data("bs.tab", (a = new n(this))),
          "string" == typeof t && a[t]();
      });
    }
    var n = function (t) {
      this.element = e(t);
    };
    (n.VERSION = "3.3.5"),
      (n.TRANSITION_DURATION = 150),
      (n.prototype.show = function () {
        var t = this.element,
          n = t.closest("ul:not(.dropdown-menu)"),
          i = t.data("target");
        if (
          (i ||
            ((i = t.attr("href")), (i = i && i.replace(/.*(?=#[^\s]*$)/, ""))),
          !t.parent("li").hasClass("active"))
        ) {
          var a = n.find(".active:last a"),
            r = e.Event("hide.bs.tab", { relatedTarget: t[0] }),
            o = e.Event("show.bs.tab", { relatedTarget: a[0] });
          if (
            (a.trigger(r),
            t.trigger(o),
            !o.isDefaultPrevented() && !r.isDefaultPrevented())
          ) {
            var s = e(i);
            this.activate(t.closest("li"), n),
              this.activate(s, s.parent(), function () {
                a.trigger({ type: "hidden.bs.tab", relatedTarget: t[0] }),
                  t.trigger({ type: "shown.bs.tab", relatedTarget: a[0] });
              });
          }
        }
      }),
      (n.prototype.activate = function (t, i, a) {
        function r() {
          o
            .removeClass("active")
            .find("> .dropdown-menu > .active")
            .removeClass("active")
            .end()
            .find('[data-toggle="tab"]')
            .attr("aria-expanded", !1),
            t
              .addClass("active")
              .find('[data-toggle="tab"]')
              .attr("aria-expanded", !0),
            s ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"),
            t.parent(".dropdown-menu").length &&
              t
                .closest("li.dropdown")
                .addClass("active")
                .end()
                .find('[data-toggle="tab"]')
                .attr("aria-expanded", !0),
            a && a();
        }
        var o = i.find("> .active"),
          s =
            a &&
            e.support.transition &&
            ((o.length && o.hasClass("fade")) || !!i.find("> .fade").length);
        o.length && s
          ? o
              .one("bsTransitionEnd", r)
              .emulateTransitionEnd(n.TRANSITION_DURATION)
          : r(),
          o.removeClass("in");
      });
    var i = e.fn.tab;
    (e.fn.tab = t),
      (e.fn.tab.Constructor = n),
      (e.fn.tab.noConflict = function () {
        return (e.fn.tab = i), this;
      });
    var a = function (n) {
      n.preventDefault(), t.call(e(this), "show");
    };
    e(document)
      .on("click.bs.tab.data-api", '[data-toggle="tab"]', a)
      .on("click.bs.tab.data-api", '[data-toggle="pill"]', a);
  })(jQuery),
  (function (e) {
    "use strict";
    function t(t) {
      var n,
        i =
          t.attr("data-target") ||
          ((n = t.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""));
      return e(i);
    }
    function n(t) {
      return this.each(function () {
        var n = e(this),
          a = n.data("bs.collapse"),
          r = e.extend({}, i.DEFAULTS, n.data(), "object" == typeof t && t);
        !a && r.toggle && /show|hide/.test(t) && (r.toggle = !1),
          a || n.data("bs.collapse", (a = new i(this, r))),
          "string" == typeof t && a[t]();
      });
    }
    var i = function (t, n) {
      (this.$element = e(t)),
        (this.options = e.extend({}, i.DEFAULTS, n)),
        (this.$trigger = e(
          '[data-toggle="collapse"][href="#' +
            t.id +
            '"],[data-toggle="collapse"][data-target="#' +
            t.id +
            '"]'
        )),
        (this.transitioning = null),
        this.options.parent
          ? (this.$parent = this.getParent())
          : this.addAriaAndCollapsedClass(this.$element, this.$trigger),
        this.options.toggle && this.toggle();
    };
    (i.VERSION = "3.3.5"),
      (i.TRANSITION_DURATION = 350),
      (i.DEFAULTS = { toggle: !0 }),
      (i.prototype.dimension = function () {
        return this.$element.hasClass("width") ? "width" : "height";
      }),
      (i.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
          var t,
            a =
              this.$parent &&
              this.$parent.children(".panel").children(".in, .collapsing");
          if (
            !(a && a.length && (t = a.data("bs.collapse")) && t.transitioning)
          ) {
            var r = e.Event("show.bs.collapse");
            if ((this.$element.trigger(r), !r.isDefaultPrevented())) {
              a &&
                a.length &&
                (n.call(a, "hide"), t || a.data("bs.collapse", null));
              var o = this.dimension();
              this.$element
                .removeClass("collapse")
                .addClass("collapsing")
                [o](0)
                .attr("aria-expanded", !0),
                this.$trigger
                  .removeClass("collapsed")
                  .attr("aria-expanded", !0),
                (this.transitioning = 1);
              var s = function () {
                this.$element
                  .removeClass("collapsing")
                  .addClass("collapse in")
                  [o](""),
                  (this.transitioning = 0),
                  this.$element.trigger("shown.bs.collapse");
              };
              if (!e.support.transition) return s.call(this);
              var l = e.camelCase(["scroll", o].join("-"));
              this.$element
                .one("bsTransitionEnd", e.proxy(s, this))
                .emulateTransitionEnd(i.TRANSITION_DURATION)
                [o](this.$element[0][l]);
            }
          }
        }
      }),
      (i.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
          var t = e.Event("hide.bs.collapse");
          if ((this.$element.trigger(t), !t.isDefaultPrevented())) {
            var n = this.dimension();
            this.$element[n](this.$element[n]())[0].offsetHeight,
              this.$element
                .addClass("collapsing")
                .removeClass("collapse in")
                .attr("aria-expanded", !1),
              this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
              (this.transitioning = 1);
            var a = function () {
              (this.transitioning = 0),
                this.$element
                  .removeClass("collapsing")
                  .addClass("collapse")
                  .trigger("hidden.bs.collapse");
            };
            return e.support.transition
              ? void this.$element[n](0)
                  .one("bsTransitionEnd", e.proxy(a, this))
                  .emulateTransitionEnd(i.TRANSITION_DURATION)
              : a.call(this);
          }
        }
      }),
      (i.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]();
      }),
      (i.prototype.getParent = function () {
        return e(this.options.parent)
          .find(
            '[data-toggle="collapse"][data-parent="' +
              this.options.parent +
              '"]'
          )
          .each(
            e.proxy(function (n, i) {
              var a = e(i);
              this.addAriaAndCollapsedClass(t(a), a);
            }, this)
          )
          .end();
      }),
      (i.prototype.addAriaAndCollapsedClass = function (e, t) {
        var n = e.hasClass("in");
        e.attr("aria-expanded", n),
          t.toggleClass("collapsed", !n).attr("aria-expanded", n);
      });
    var a = e.fn.collapse;
    (e.fn.collapse = n),
      (e.fn.collapse.Constructor = i),
      (e.fn.collapse.noConflict = function () {
        return (e.fn.collapse = a), this;
      }),
      e(document).on(
        "click.bs.collapse.data-api",
        '[data-toggle="collapse"]',
        function (i) {
          var a = e(this);
          a.attr("data-target") || i.preventDefault();
          var r = t(a),
            o = r.data("bs.collapse"),
            s = o ? "toggle" : a.data();
          n.call(r, s);
        }
      );
  })(jQuery),
  (function (e) {
    "use strict";
    function t() {
      var e = document.createElement("bootstrap"),
        t = {
          WebkitTransition: "webkitTransitionEnd",
          MozTransition: "transitionend",
          OTransition: "oTransitionEnd otransitionend",
          transition: "transitionend",
        };
      for (var n in t) if (void 0 !== e.style[n]) return { end: t[n] };
      return !1;
    }
    (e.fn.emulateTransitionEnd = function (t) {
      var n = !1,
        i = this;
      e(this).one("bsTransitionEnd", function () {
        n = !0;
      });
      var a = function () {
        n || e(i).trigger(e.support.transition.end);
      };
      return setTimeout(a, t), this;
    }),
      e(function () {
        (e.support.transition = t()),
          e.support.transition &&
            (e.event.special.bsTransitionEnd = {
              bindType: e.support.transition.end,
              delegateType: e.support.transition.end,
              handle: function (t) {
                return e(t.target).is(this)
                  ? t.handleObj.handler.apply(this, arguments)
                  : void 0;
              },
            });
      });
  })(jQuery),
  define("lib-app/bootstrap/js/bootstrap.min", function () {}),
  "object" != typeof JSON && (JSON = {}),
  (function () {
    "use strict";
    function f(e) {
      return e < 10 ? "0" + e : e;
    }
    function quote(e) {
      return (
        (escapable.lastIndex = 0),
        escapable.test(e)
          ? '"' +
            e.replace(escapable, function (e) {
              var t = meta[e];
              return "string" == typeof t
                ? t
                : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4);
            }) +
            '"'
          : '"' + e + '"'
      );
    }
    function str(e, t) {
      var n,
        i,
        a,
        r,
        o,
        s = gap,
        l = t[e];
      switch (
        (l &&
          "object" == typeof l &&
          "function" == typeof l.toJSON &&
          (l = l.toJSON(e)),
        "function" == typeof rep && (l = rep.call(t, e, l)),
        typeof l)
      ) {
        case "string":
          return quote(l);
        case "number":
          return isFinite(l) ? String(l) : "null";
        case "boolean":
        case "null":
          return String(l);
        case "object":
          if (!l) return "null";
          if (
            ((gap += indent),
            (o = []),
            "[object Array]" === Object.prototype.toString.apply(l))
          ) {
            for (r = l.length, n = 0; n < r; n += 1) o[n] = str(n, l) || "null";
            return (
              (a =
                0 === o.length
                  ? "[]"
                  : gap
                  ? "[\n" + gap + o.join(",\n" + gap) + "\n" + s + "]"
                  : "[" + o.join(",") + "]"),
              (gap = s),
              a
            );
          }
          if (rep && "object" == typeof rep)
            for (r = rep.length, n = 0; n < r; n += 1)
              "string" == typeof rep[n] &&
                ((i = rep[n]),
                (a = str(i, l)) && o.push(quote(i) + (gap ? ": " : ":") + a));
          else
            for (i in l)
              Object.prototype.hasOwnProperty.call(l, i) &&
                (a = str(i, l)) &&
                o.push(quote(i) + (gap ? ": " : ":") + a);
          return (
            (a =
              0 === o.length
                ? "{}"
                : gap
                ? "{\n" + gap + o.join(",\n" + gap) + "\n" + s + "}"
                : "{" + o.join(",") + "}"),
            (gap = s),
            a
          );
      }
    }
    "function" != typeof Date.prototype.toJSON &&
      ((Date.prototype.toJSON = function (e) {
        return isFinite(this.valueOf())
          ? this.getUTCFullYear() +
              "-" +
              f(this.getUTCMonth() + 1) +
              "-" +
              f(this.getUTCDate()) +
              "T" +
              f(this.getUTCHours()) +
              ":" +
              f(this.getUTCMinutes()) +
              ":" +
              f(this.getUTCSeconds()) +
              "Z"
          : null;
      }),
      (String.prototype.toJSON =
        Number.prototype.toJSON =
        Boolean.prototype.toJSON =
          function (e) {
            return this.valueOf();
          }));
    var cx =
        /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
      escapable =
        /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
      gap,
      indent,
      meta = {
        "\b": "\\b",
        "\t": "\\t",
        "\n": "\\n",
        "\f": "\\f",
        "\r": "\\r",
        '"': '\\"',
        "\\": "\\\\",
      },
      rep;
    "function" != typeof JSON.stringify &&
      (JSON.stringify = function (e, t, n) {
        var i;
        if (((gap = ""), (indent = ""), "number" == typeof n))
          for (i = 0; i < n; i += 1) indent += " ";
        else "string" == typeof n && (indent = n);
        if (
          ((rep = t),
          !t ||
            "function" == typeof t ||
            ("object" == typeof t && "number" == typeof t.length))
        )
          return str("", { "": e });
        throw new Error("JSON.stringify");
      }),
      "function" != typeof JSON.parse &&
        (JSON.parse = function (text, reviver) {
          function walk(e, t) {
            var n,
              i,
              a = e[t];
            if (a && "object" == typeof a)
              for (n in a)
                Object.prototype.hasOwnProperty.call(a, n) &&
                  ((i = walk(a, n)), void 0 !== i ? (a[n] = i) : delete a[n]);
            return reviver.call(e, t, a);
          }
          var j;
          if (
            ((text = String(text)),
            (cx.lastIndex = 0),
            cx.test(text) &&
              (text = text.replace(cx, function (e) {
                return (
                  "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
                );
              })),
            /^[\],:{}\s]*$/.test(
              text
                .replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@")
                .replace(
                  /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                  "]"
                )
                .replace(/(?:^|:|,)(?:\s*\[)+/g, "")
            ))
          )
            return (
              (j = eval("(" + text + ")")),
              "function" == typeof reviver ? walk({ "": j }, "") : j
            );
          throw new SyntaxError("JSON.parse");
        });
  })(),
  (function (e, t) {
    "use strict";
    var n = (e.History = e.History || {});
    if (void 0 !== n.Adapter)
      throw new Error("History.js Adapter has already been loaded...");
    (n.Adapter = {
      handlers: {},
      _uid: 1,
      uid: function (e) {
        return e._uid || (e._uid = n.Adapter._uid++);
      },
      bind: function (e, t, i) {
        var a = n.Adapter.uid(e);
        (n.Adapter.handlers[a] = n.Adapter.handlers[a] || {}),
          (n.Adapter.handlers[a][t] = n.Adapter.handlers[a][t] || []),
          n.Adapter.handlers[a][t].push(i),
          (e["on" + t] = (function (e, t) {
            return function (i) {
              n.Adapter.trigger(e, t, i);
            };
          })(e, t));
      },
      trigger: function (e, t, i) {
        i = i || {};
        var a,
          r,
          o = n.Adapter.uid(e);
        for (
          n.Adapter.handlers[o] = n.Adapter.handlers[o] || {},
            n.Adapter.handlers[o][t] = n.Adapter.handlers[o][t] || [],
            a = 0,
            r = n.Adapter.handlers[o][t].length;
          a < r;
          ++a
        )
          n.Adapter.handlers[o][t][a].apply(this, [i]);
      },
      extractEventData: function (e, t) {
        return (t && t[e]) || void 0;
      },
      onDomLoad: function (t) {
        var n = e.setTimeout(function () {
          t();
        }, 2e3);
        e.onload = function () {
          clearTimeout(n), t();
        };
      },
    }),
      void 0 !== n.init && n.init();
  })(window),
  (function (e, t) {
    "use strict";
    var n = e.document,
      i = e.setTimeout || i,
      a = e.clearTimeout || a,
      r = e.setInterval || r,
      o = (e.History = e.History || {});
    if (void 0 !== o.initHtml4)
      throw new Error("History.js HTML4 Support has already been loaded...");
    (o.initHtml4 = function () {
      if (void 0 !== o.initHtml4.initialized) return !1;
      (o.initHtml4.initialized = !0),
        (o.enabled = !0),
        (o.savedHashes = []),
        (o.isLastHash = function (e) {
          var t = o.getHashByIndex();
          return e === t;
        }),
        (o.isHashEqual = function (e, t) {
          return (
            (e = encodeURIComponent(e).replace(/%25/g, "%")),
            (t = encodeURIComponent(t).replace(/%25/g, "%")),
            e === t
          );
        }),
        (o.saveHash = function (e) {
          return !o.isLastHash(e) && (o.savedHashes.push(e), !0);
        }),
        (o.getHashByIndex = function (e) {
          return void 0 === e
            ? o.savedHashes[o.savedHashes.length - 1]
            : e < 0
            ? o.savedHashes[o.savedHashes.length + e]
            : o.savedHashes[e];
        }),
        (o.discardedHashes = {}),
        (o.discardedStates = {}),
        (o.discardState = function (e, t, n) {
          var i,
            a = o.getHashByState(e);
          return (
            (i = { discardedState: e, backState: n, forwardState: t }),
            (o.discardedStates[a] = i),
            !0
          );
        }),
        (o.discardHash = function (e, t, n) {
          var i = { discardedHash: e, backState: n, forwardState: t };
          return (o.discardedHashes[e] = i), !0;
        }),
        (o.discardedState = function (e) {
          var t = o.getHashByState(e);
          return o.discardedStates[t] || !1;
        }),
        (o.discardedHash = function (e) {
          return o.discardedHashes[e] || !1;
        }),
        (o.recycleState = function (e) {
          var t = o.getHashByState(e);
          return o.discardedState(e) && delete o.discardedStates[t], !0;
        }),
        o.emulated.hashChange &&
          ((o.hashChangeInit = function () {
            o.checkerFunction = null;
            var t,
              i,
              a,
              s,
              l = "",
              p = Boolean(o.getHash());
            return (
              o.isInternetExplorer()
                ? ((t = "historyjs-iframe"),
                  (i = n.createElement("iframe")),
                  i.setAttribute("id", t),
                  i.setAttribute("src", "#"),
                  (i.style.display = "none"),
                  n.body.appendChild(i),
                  i.contentWindow.document.open(),
                  i.contentWindow.document.close(),
                  (a = ""),
                  (s = !1),
                  (o.checkerFunction = function () {
                    if (s) return !1;
                    s = !0;
                    var t = o.getHash(),
                      n = o.getHash(i.contentWindow.document);
                    return (
                      t !== l
                        ? ((l = t),
                          n !== t &&
                            ((a = n = t),
                            i.contentWindow.document.open(),
                            i.contentWindow.document.close(),
                            (i.contentWindow.document.location.hash =
                              o.escapeHash(t))),
                          o.Adapter.trigger(e, "hashchange"))
                        : n !== a &&
                          ((a = n),
                          p && "" === n ? o.back() : o.setHash(n, !1)),
                      (s = !1),
                      !0
                    );
                  }))
                : (o.checkerFunction = function () {
                    var t = o.getHash() || "";
                    return (
                      t !== l && ((l = t), o.Adapter.trigger(e, "hashchange")),
                      !0
                    );
                  }),
              o.intervalList.push(
                r(o.checkerFunction, o.options.hashChangeInterval)
              ),
              !0
            );
          }),
          o.Adapter.onDomLoad(o.hashChangeInit)),
        o.emulated.pushState &&
          ((o.onHashChange = function (t) {
            var n,
              i = (t && t.newURL) || o.getLocationHref(),
              a = o.getHashByUrl(i),
              r = null;
            return o.isLastHash(a)
              ? (o.busy(!1), !1)
              : (o.doubleCheckComplete(),
                o.saveHash(a),
                a && o.isTraditionalAnchor(a)
                  ? (o.Adapter.trigger(e, "anchorchange"), o.busy(!1), !1)
                  : ((r = o.extractState(
                      o.getFullUrl(a || o.getLocationHref()),
                      !0
                    )),
                    o.isLastSavedState(r)
                      ? (o.busy(!1), !1)
                      : (o.getHashByState(r),
                        (n = o.discardedState(r)),
                        n
                          ? (o.getHashByIndex(-2) ===
                            o.getHashByState(n.forwardState)
                              ? o.back(!1)
                              : o.forward(!1),
                            !1)
                          : (o.pushState(r.data, r.title, encodeURI(r.url), !1),
                            !0))));
          }),
          o.Adapter.bind(e, "hashchange", o.onHashChange),
          (o.pushState = function (t, n, i, a) {
            if (((i = encodeURI(i).replace(/%25/g, "%")), o.getHashByUrl(i)))
              throw new Error(
                "History.js does not support states with fragment-identifiers (hashes/anchors)."
              );
            if (!1 !== a && o.busy())
              return (
                o.pushQueue({
                  scope: o,
                  callback: o.pushState,
                  args: arguments,
                  queue: a,
                }),
                !1
              );
            o.busy(!0);
            var r = o.createStateObject(t, n, i),
              s = o.getHashByState(r),
              l = o.getState(!1),
              p = o.getHashByState(l),
              c = o.getHash(),
              d = o.expectedStateId == r.id;
            return (
              o.storeState(r),
              (o.expectedStateId = r.id),
              o.recycleState(r),
              o.setTitle(r),
              s === p
                ? (o.busy(!1), !1)
                : (o.saveState(r),
                  d || o.Adapter.trigger(e, "statechange"),
                  !o.isHashEqual(s, c) &&
                    !o.isHashEqual(s, o.getShortUrl(o.getLocationHref())) &&
                    o.setHash(s, !1),
                  o.busy(!1),
                  !0)
            );
          }),
          (o.replaceState = function (t, n, i, a) {
            if (((i = encodeURI(i).replace(/%25/g, "%")), o.getHashByUrl(i)))
              throw new Error(
                "History.js does not support states with fragment-identifiers (hashes/anchors)."
              );
            if (!1 !== a && o.busy())
              return (
                o.pushQueue({
                  scope: o,
                  callback: o.replaceState,
                  args: arguments,
                  queue: a,
                }),
                !1
              );
            o.busy(!0);
            var r = o.createStateObject(t, n, i),
              s = o.getHashByState(r),
              l = o.getState(!1),
              p = o.getHashByState(l),
              c = o.getStateByIndex(-2);
            return (
              o.discardState(l, r, c),
              s === p
                ? (o.storeState(r),
                  (o.expectedStateId = r.id),
                  o.recycleState(r),
                  o.setTitle(r),
                  o.saveState(r),
                  o.Adapter.trigger(e, "statechange"),
                  o.busy(!1))
                : o.pushState(r.data, r.title, r.url, !1),
              !0
            );
          })),
        o.emulated.pushState &&
          o.getHash() &&
          !o.emulated.hashChange &&
          o.Adapter.onDomLoad(function () {
            o.Adapter.trigger(e, "hashchange");
          });
    }),
      void 0 !== o.init && o.init();
  })(window),
  (function (e, t) {
    "use strict";
    var n = e.console || t,
      i = e.document,
      a = e.navigator,
      r = !1,
      o = e.setTimeout,
      s = e.clearTimeout,
      l = e.setInterval,
      p = e.clearInterval,
      c = e.JSON,
      d = e.alert,
      u = (e.History = e.History || {}),
      f = e.history;
    try {
      (r = e.sessionStorage), r.setItem("TEST", "1"), r.removeItem("TEST");
    } catch (e) {
      r = !1;
    }
    if (
      ((c.stringify = c.stringify || c.encode),
      (c.parse = c.parse || c.decode),
      void 0 !== u.init)
    )
      throw new Error("History.js Core has already been loaded...");
    (u.init = function (e) {
      return (
        void 0 !== u.Adapter &&
        (void 0 !== u.initCore && u.initCore(),
        void 0 !== u.initHtml4 && u.initHtml4(),
        !0)
      );
    }),
      (u.initCore = function (h) {
        if (void 0 !== u.initCore.initialized) return !1;
        if (
          ((u.initCore.initialized = !0),
          (u.options = u.options || {}),
          (u.options.hashChangeInterval = u.options.hashChangeInterval || 100),
          (u.options.safariPollInterval = u.options.safariPollInterval || 500),
          (u.options.doubleCheckInterval =
            u.options.doubleCheckInterval || 500),
          (u.options.disableSuid = u.options.disableSuid || !1),
          (u.options.storeInterval = u.options.storeInterval || 1e3),
          (u.options.busyDelay = u.options.busyDelay || 250),
          (u.options.debug = u.options.debug || !1),
          (u.options.initialTitle = u.options.initialTitle || i.title),
          (u.options.html4Mode = u.options.html4Mode || !1),
          (u.options.delayInit = u.options.delayInit || !1),
          (u.intervalList = []),
          (u.clearAllIntervals = function () {
            var e,
              t = u.intervalList;
            if (void 0 !== t && null !== t) {
              for (e = 0; e < t.length; e++) p(t[e]);
              u.intervalList = null;
            }
          }),
          (u.debug = function () {
            (u.options.debug || !1) && u.log.apply(u, arguments);
          }),
          (u.log = function () {
            var e,
              t,
              a,
              r,
              o,
              s = void 0 !== n && void 0 !== n.log && void 0 !== n.log.apply,
              l = i.getElementById("log");
            for (
              s
                ? ((r = Array.prototype.slice.call(arguments)),
                  (e = r.shift()),
                  void 0 !== n.debug
                    ? n.debug.apply(n, [e, r])
                    : n.log.apply(n, [e, r]))
                : (e = "\n" + arguments[0] + "\n"),
                t = 1,
                a = arguments.length;
              t < a;
              ++t
            ) {
              if ("object" == typeof (o = arguments[t]) && void 0 !== c)
                try {
                  o = c.stringify(o);
                } catch (e) {}
              e += "\n" + o + "\n";
            }
            return (
              l
                ? ((l.value += e + "\n-----\n"),
                  (l.scrollTop = l.scrollHeight - l.clientHeight))
                : s || d(e),
              !0
            );
          }),
          (u.getInternetExplorerMajorVersion = function () {
            return (u.getInternetExplorerMajorVersion.cached =
              void 0 !== u.getInternetExplorerMajorVersion.cached
                ? u.getInternetExplorerMajorVersion.cached
                : (function () {
                    for (
                      var e = 3,
                        t = i.createElement("div"),
                        n = t.getElementsByTagName("i");
                      (t.innerHTML =
                        "\x3c!--[if gt IE " +
                        ++e +
                        "]><i></i><![endif]--\x3e") && n[0];

                    );
                    return e > 4 && e;
                  })());
          }),
          (u.isInternetExplorer = function () {
            return (u.isInternetExplorer.cached =
              void 0 !== u.isInternetExplorer.cached
                ? u.isInternetExplorer.cached
                : Boolean(u.getInternetExplorerMajorVersion()));
          }),
          u.options.html4Mode
            ? (u.emulated = { pushState: !0, hashChange: !0 })
            : (u.emulated = {
                pushState: !Boolean(
                  e.history &&
                    e.history.pushState &&
                    e.history.replaceState &&
                    !/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i.test(
                      a.userAgent
                    ) &&
                    !/AppleWebKit\/5([0-2]|3[0-2])/i.test(a.userAgent)
                ),
                hashChange: Boolean(
                  !("onhashchange" in e || "onhashchange" in i) ||
                    (u.isInternetExplorer() &&
                      u.getInternetExplorerMajorVersion() < 8)
                ),
              }),
          (u.enabled = !u.emulated.pushState),
          (u.bugs = {
            setHash: Boolean(
              !u.emulated.pushState &&
                "Apple Computer, Inc." === a.vendor &&
                /AppleWebKit\/5([0-2]|3[0-3])/.test(a.userAgent)
            ),
            safariPoll: Boolean(
              !u.emulated.pushState &&
                "Apple Computer, Inc." === a.vendor &&
                /AppleWebKit\/5([0-2]|3[0-3])/.test(a.userAgent)
            ),
            ieDoubleCheck: Boolean(
              u.isInternetExplorer() && u.getInternetExplorerMajorVersion() < 8
            ),
            hashEscape: Boolean(
              u.isInternetExplorer() && u.getInternetExplorerMajorVersion() < 7
            ),
          }),
          (u.isEmptyObject = function (e) {
            for (var t in e) if (e.hasOwnProperty(t)) return !1;
            return !0;
          }),
          (u.cloneObject = function (e) {
            var t, n;
            return e ? ((t = c.stringify(e)), (n = c.parse(t))) : (n = {}), n;
          }),
          (u.getRootUrl = function () {
            var e =
              i.location.protocol +
              "//" +
              (i.location.hostname || i.location.host);
            return i.location.port && (e += ":" + i.location.port), (e += "/");
          }),
          (u.getBaseHref = function () {
            var e = i.getElementsByTagName("base"),
              t = null,
              n = "";
            return (
              1 === e.length &&
                ((t = e[0]), (n = t.href.replace(/[^\/]+$/, ""))),
              (n = n.replace(/\/+$/, "")),
              n && (n += "/"),
              n
            );
          }),
          (u.getBaseUrl = function () {
            return u.getBaseHref() || u.getBasePageUrl() || u.getRootUrl();
          }),
          (u.getPageUrl = function () {
            var e = u.getState(!1, !1),
              t = (e || {}).url || u.getLocationHref();
            return t.replace(/\/+$/, "").replace(/[^\/]+$/, function (e, t, n) {
              return /\./.test(e) ? e : e + "/";
            });
          }),
          (u.getBasePageUrl = function () {
            return (
              u
                .getLocationHref()
                .replace(/[#\?].*/, "")
                .replace(/[^\/]+$/, function (e, t, n) {
                  return /[^\/]$/.test(e) ? "" : e;
                })
                .replace(/\/+$/, "") + "/"
            );
          }),
          (u.getFullUrl = function (e, t) {
            var n = e,
              i = e.substring(0, 1);
            return (
              (t = void 0 === t || t),
              /[a-z]+\:\/\//.test(e) ||
                (n =
                  "/" === i
                    ? u.getRootUrl() + e.replace(/^\/+/, "")
                    : "#" === i
                    ? u.getPageUrl().replace(/#.*/, "") + e
                    : "?" === i
                    ? u.getPageUrl().replace(/[\?#].*/, "") + e
                    : t
                    ? u.getBaseUrl() + e.replace(/^(\.\/)+/, "")
                    : u.getBasePageUrl() + e.replace(/^(\.\/)+/, "")),
              n.replace(/\#$/, "")
            );
          }),
          (u.getShortUrl = function (e) {
            var t = e,
              n = u.getBaseUrl(),
              i = u.getRootUrl();
            return (
              u.emulated.pushState && (t = t.replace(n, "")),
              (t = t.replace(i, "/")),
              u.isTraditionalAnchor(t) && (t = "./" + t),
              (t = t.replace(/^(\.\/)+/g, "./").replace(/\#$/, ""))
            );
          }),
          (u.getLocationHref = function (e) {
            return (
              (e = e || i),
              e.URL === e.location.href
                ? e.location.href
                : e.location.href === decodeURIComponent(e.URL)
                ? e.URL
                : e.location.hash &&
                  decodeURIComponent(e.location.href.replace(/^[^#]+/, "")) ===
                    e.location.hash
                ? e.location.href
                : -1 == e.URL.indexOf("#") && -1 != e.location.href.indexOf("#")
                ? e.location.href
                : e.URL || e.location.href
            );
          }),
          (u.store = {}),
          (u.idToState = u.idToState || {}),
          (u.stateToId = u.stateToId || {}),
          (u.urlToId = u.urlToId || {}),
          (u.storedStates = u.storedStates || []),
          (u.savedStates = u.savedStates || []),
          (u.normalizeStore = function () {
            (u.store.idToState = u.store.idToState || {}),
              (u.store.urlToId = u.store.urlToId || {}),
              (u.store.stateToId = u.store.stateToId || {});
          }),
          (u.getState = function (e, t) {
            void 0 === e && (e = !0), void 0 === t && (t = !0);
            var n = u.getLastSavedState();
            return (
              !n && t && (n = u.createStateObject()),
              e && ((n = u.cloneObject(n)), (n.url = n.cleanUrl || n.url)),
              n
            );
          }),
          (u.getIdByState = function (e) {
            var t,
              n = u.extractId(e.url);
            if (!n)
              if (((t = u.getStateString(e)), void 0 !== u.stateToId[t]))
                n = u.stateToId[t];
              else if (void 0 !== u.store.stateToId[t])
                n = u.store.stateToId[t];
              else {
                for (
                  ;
                  (n =
                    new Date().getTime() +
                    String(Math.random()).replace(/\D/g, "")),
                    void 0 !== u.idToState[n] ||
                      void 0 !== u.store.idToState[n];

                );
                (u.stateToId[t] = n), (u.idToState[n] = e);
              }
            return n;
          }),
          (u.normalizeState = function (e) {
            var t, n;
            return (
              (e && "object" == typeof e) || (e = {}),
              void 0 !== e.normalized
                ? e
                : ((e.data && "object" == typeof e.data) || (e.data = {}),
                  (t = {}),
                  (t.normalized = !0),
                  (t.title = e.title || ""),
                  (t.url = u.getFullUrl(e.url ? e.url : u.getLocationHref())),
                  (t.hash = u.getShortUrl(t.url)),
                  (t.data = u.cloneObject(e.data)),
                  (t.id = u.getIdByState(t)),
                  (t.cleanUrl = t.url.replace(/\??\&_suid.*/, "")),
                  (t.url = t.cleanUrl),
                  (n = !u.isEmptyObject(t.data)),
                  (t.title || n) &&
                    !0 !== u.options.disableSuid &&
                    ((t.hash = u
                      .getShortUrl(t.url)
                      .replace(/\??\&_suid.*/, "")),
                    /\?/.test(t.hash) || (t.hash += "?"),
                    (t.hash += "&_suid=" + t.id)),
                  (t.hashedUrl = u.getFullUrl(t.hash)),
                  (u.emulated.pushState || u.bugs.safariPoll) &&
                    u.hasUrlDuplicate(t) &&
                    (t.url = t.hashedUrl),
                  t)
            );
          }),
          (u.createStateObject = function (e, t, n) {
            var i = { data: e, title: t, url: n };
            return (i = u.normalizeState(i));
          }),
          (u.getStateById = function (e) {
            return (e = String(e)), u.idToState[e] || u.store.idToState[e] || t;
          }),
          (u.getStateString = function (e) {
            var t, n;
            return (
              (t = u.normalizeState(e)),
              (n = { data: t.data, title: e.title, url: e.url }),
              c.stringify(n)
            );
          }),
          (u.getStateId = function (e) {
            var t;
            return (t = u.normalizeState(e)), t.id;
          }),
          (u.getHashByState = function (e) {
            var t;
            return (t = u.normalizeState(e)), t.hash;
          }),
          (u.extractId = function (e) {
            var t, n;
            return (
              (n = -1 != e.indexOf("#") ? e.split("#")[0] : e),
              (t = /(.*)\&_suid=([0-9]+)$/.exec(n)),
              t ? t[1] || e : e,
              (t ? String(t[2] || "") : "") || !1
            );
          }),
          (u.isTraditionalAnchor = function (e) {
            return !/[\/\?\.]/.test(e);
          }),
          (u.extractState = function (e, t) {
            var n,
              i,
              a = null;
            return (
              (t = t || !1),
              (n = u.extractId(e)),
              n && (a = u.getStateById(n)),
              a ||
                ((i = u.getFullUrl(e)),
                (n = u.getIdByUrl(i) || !1),
                n && (a = u.getStateById(n)),
                !a &&
                  t &&
                  !u.isTraditionalAnchor(e) &&
                  (a = u.createStateObject(null, null, i))),
              a
            );
          }),
          (u.getIdByUrl = function (e) {
            return u.urlToId[e] || u.store.urlToId[e] || t;
          }),
          (u.getLastSavedState = function () {
            return u.savedStates[u.savedStates.length - 1] || t;
          }),
          (u.getLastStoredState = function () {
            return u.storedStates[u.storedStates.length - 1] || t;
          }),
          (u.hasUrlDuplicate = function (e) {
            var t;
            return (t = u.extractState(e.url)), t && t.id !== e.id;
          }),
          (u.storeState = function (e) {
            return (
              (u.urlToId[e.url] = e.id),
              u.storedStates.push(u.cloneObject(e)),
              e
            );
          }),
          (u.isLastSavedState = function (e) {
            var t,
              n,
              i,
              a = !1;
            return (
              u.savedStates.length &&
                ((t = e.id),
                (n = u.getLastSavedState()),
                (i = n.id),
                (a = t === i)),
              a
            );
          }),
          (u.saveState = function (e) {
            return (
              !u.isLastSavedState(e) &&
              (u.savedStates.push(u.cloneObject(e)), !0)
            );
          }),
          (u.getStateByIndex = function (e) {
            return void 0 === e
              ? u.savedStates[u.savedStates.length - 1]
              : e < 0
              ? u.savedStates[u.savedStates.length + e]
              : u.savedStates[e];
          }),
          (u.getCurrentIndex = function () {
            return u.savedStates.length < 1 ? 0 : u.savedStates.length - 1;
          }),
          (u.getHash = function (e) {
            var t = u.getLocationHref(e);
            return u.getHashByUrl(t);
          }),
          (u.unescapeHash = function (e) {
            var t = u.normalizeHash(e);
            return (t = decodeURIComponent(t));
          }),
          (u.normalizeHash = function (e) {
            return e.replace(/[^#]*#/, "").replace(/#.*/, "");
          }),
          (u.setHash = function (e, t) {
            var n, a;
            return !1 !== t && u.busy()
              ? (u.pushQueue({
                  scope: u,
                  callback: u.setHash,
                  args: arguments,
                  queue: t,
                }),
                !1)
              : (u.busy(!0),
                (n = u.extractState(e, !0)),
                n && !u.emulated.pushState
                  ? u.pushState(n.data, n.title, n.url, !1)
                  : u.getHash() !== e &&
                    (u.bugs.setHash
                      ? ((a = u.getPageUrl()),
                        u.pushState(null, null, a + "#" + e, !1))
                      : (i.location.hash = e)),
                u);
          }),
          (u.escapeHash = function (t) {
            var n = u.normalizeHash(t);
            return (
              (n = e.encodeURIComponent(n)),
              u.bugs.hashEscape ||
                (n = n
                  .replace(/\%21/g, "!")
                  .replace(/\%26/g, "&")
                  .replace(/\%3D/g, "=")
                  .replace(/\%3F/g, "?")),
              n
            );
          }),
          (u.getHashByUrl = function (e) {
            var t = String(e).replace(/([^#]*)#?([^#]*)#?(.*)/, "$2");
            return (t = u.unescapeHash(t));
          }),
          (u.setTitle = function (e) {
            var t,
              n = e.title;
            n ||
              ((t = u.getStateByIndex(0)) &&
                t.url === e.url &&
                (n = t.title || u.options.initialTitle));
            try {
              i.getElementsByTagName("title")[0].innerHTML = n
                .replace("<", "&lt;")
                .replace(">", "&gt;")
                .replace(" & ", " &amp; ");
            } catch (e) {}
            return (i.title = n), u;
          }),
          (u.queues = []),
          (u.busy = function (e) {
            if (
              (void 0 !== e
                ? (u.busy.flag = e)
                : void 0 === u.busy.flag && (u.busy.flag = !1),
              !u.busy.flag)
            ) {
              s(u.busy.timeout);
              var t = function () {
                var e, n, i;
                if (!u.busy.flag)
                  for (e = u.queues.length - 1; e >= 0; --e)
                    (n = u.queues[e]),
                      0 !== n.length &&
                        ((i = n.shift()),
                        u.fireQueueItem(i),
                        (u.busy.timeout = o(t, u.options.busyDelay)));
              };
              u.busy.timeout = o(t, u.options.busyDelay);
            }
            return u.busy.flag;
          }),
          (u.busy.flag = !1),
          (u.fireQueueItem = function (e) {
            return e.callback.apply(e.scope || u, e.args || []);
          }),
          (u.pushQueue = function (e) {
            return (
              (u.queues[e.queue || 0] = u.queues[e.queue || 0] || []),
              u.queues[e.queue || 0].push(e),
              u
            );
          }),
          (u.queue = function (e, t) {
            return (
              "function" == typeof e && (e = { callback: e }),
              void 0 !== t && (e.queue = t),
              u.busy() ? u.pushQueue(e) : u.fireQueueItem(e),
              u
            );
          }),
          (u.clearQueue = function () {
            return (u.busy.flag = !1), (u.queues = []), u;
          }),
          (u.stateChanged = !1),
          (u.doubleChecker = !1),
          (u.doubleCheckComplete = function () {
            return (u.stateChanged = !0), u.doubleCheckClear(), u;
          }),
          (u.doubleCheckClear = function () {
            return (
              u.doubleChecker && (s(u.doubleChecker), (u.doubleChecker = !1)), u
            );
          }),
          (u.doubleCheck = function (e) {
            return (
              (u.stateChanged = !1),
              u.doubleCheckClear(),
              u.bugs.ieDoubleCheck &&
                (u.doubleChecker = o(function () {
                  return u.doubleCheckClear(), u.stateChanged || e(), !0;
                }, u.options.doubleCheckInterval)),
              u
            );
          }),
          (u.safariStatePoll = function () {
            var t,
              n = u.extractState(u.getLocationHref());
            if (!u.isLastSavedState(n))
              return (
                (t = n),
                t || (t = u.createStateObject()),
                u.Adapter.trigger(e, "popstate"),
                u
              );
          }),
          (u.back = function (e) {
            return !1 !== e && u.busy()
              ? (u.pushQueue({
                  scope: u,
                  callback: u.back,
                  args: arguments,
                  queue: e,
                }),
                !1)
              : (u.busy(!0),
                u.doubleCheck(function () {
                  u.back(!1);
                }),
                f.go(-1),
                !0);
          }),
          (u.forward = function (e) {
            return !1 !== e && u.busy()
              ? (u.pushQueue({
                  scope: u,
                  callback: u.forward,
                  args: arguments,
                  queue: e,
                }),
                !1)
              : (u.busy(!0),
                u.doubleCheck(function () {
                  u.forward(!1);
                }),
                f.go(1),
                !0);
          }),
          (u.go = function (e, t) {
            var n;
            if (e > 0) for (n = 1; n <= e; ++n) u.forward(t);
            else {
              if (!(e < 0))
                throw new Error(
                  "History.go: History.go requires a positive or negative integer passed."
                );
              for (n = -1; n >= e; --n) u.back(t);
            }
            return u;
          }),
          u.emulated.pushState)
        ) {
          var m = function () {};
          (u.pushState = u.pushState || m),
            (u.replaceState = u.replaceState || m);
        } else
          (u.onPopState = function (t, n) {
            var i,
              a,
              r = !1,
              o = !1;
            return (
              u.doubleCheckComplete(),
              (i = u.getHash()),
              i
                ? ((a = u.extractState(i || u.getLocationHref(), !0)),
                  a
                    ? u.replaceState(a.data, a.title, a.url, !1)
                    : (u.Adapter.trigger(e, "anchorchange"), u.busy(!1)),
                  (u.expectedStateId = !1),
                  !1)
                : ((r = u.Adapter.extractEventData("state", t, n) || !1),
                  (o = r
                    ? u.getStateById(r)
                    : u.expectedStateId
                    ? u.getStateById(u.expectedStateId)
                    : u.extractState(u.getLocationHref())),
                  o ||
                    (o = u.createStateObject(null, null, u.getLocationHref())),
                  (u.expectedStateId = !1),
                  u.isLastSavedState(o)
                    ? (u.busy(!1), !1)
                    : (u.storeState(o),
                      u.saveState(o),
                      u.setTitle(o),
                      u.Adapter.trigger(e, "statechange"),
                      u.busy(!1),
                      !0))
            );
          }),
            u.Adapter.bind(e, "popstate", u.onPopState),
            (u.pushState = function (t, n, i, a) {
              if (u.getHashByUrl(i) && u.emulated.pushState)
                throw new Error(
                  "History.js does not support states with fragement-identifiers (hashes/anchors)."
                );
              if (!1 !== a && u.busy())
                return (
                  u.pushQueue({
                    scope: u,
                    callback: u.pushState,
                    args: arguments,
                    queue: a,
                  }),
                  !1
                );
              u.busy(!0);
              var r = u.createStateObject(t, n, i);
              return (
                u.isLastSavedState(r)
                  ? u.busy(!1)
                  : (u.storeState(r),
                    (u.expectedStateId = r.id),
                    f.pushState(r.id, r.title, r.url),
                    u.Adapter.trigger(e, "popstate")),
                !0
              );
            }),
            (u.replaceState = function (t, n, i, a) {
              if (u.getHashByUrl(i) && u.emulated.pushState)
                throw new Error(
                  "History.js does not support states with fragement-identifiers (hashes/anchors)."
                );
              if (!1 !== a && u.busy())
                return (
                  u.pushQueue({
                    scope: u,
                    callback: u.replaceState,
                    args: arguments,
                    queue: a,
                  }),
                  !1
                );
              u.busy(!0);
              var r = u.createStateObject(t, n, i);
              return (
                u.isLastSavedState(r)
                  ? u.busy(!1)
                  : (u.storeState(r),
                    (u.expectedStateId = r.id),
                    f.replaceState(r.id, r.title, r.url),
                    u.Adapter.trigger(e, "popstate")),
                !0
              );
            });
        if (r) {
          try {
            u.store = c.parse(r.getItem("History.store")) || {};
          } catch (e) {
            u.store = {};
          }
          u.normalizeStore();
        } else (u.store = {}), u.normalizeStore();
        u.Adapter.bind(e, "unload", u.clearAllIntervals),
          u.saveState(u.storeState(u.extractState(u.getLocationHref(), !0))),
          r &&
            ((u.onUnload = function () {
              var e, t, n;
              try {
                e = c.parse(r.getItem("History.store")) || {};
              } catch (t) {
                e = {};
              }
              (e.idToState = e.idToState || {}),
                (e.urlToId = e.urlToId || {}),
                (e.stateToId = e.stateToId || {});
              for (t in u.idToState)
                u.idToState.hasOwnProperty(t) &&
                  (e.idToState[t] = u.idToState[t]);
              for (t in u.urlToId)
                u.urlToId.hasOwnProperty(t) && (e.urlToId[t] = u.urlToId[t]);
              for (t in u.stateToId)
                u.stateToId.hasOwnProperty(t) &&
                  (e.stateToId[t] = u.stateToId[t]);
              (u.store = e), u.normalizeStore(), (n = c.stringify(e));
              try {
                r.setItem("History.store", n);
              } catch (e) {
                if (e.code !== DOMException.QUOTA_EXCEEDED_ERR) throw e;
                r.length &&
                  (r.removeItem("History.store"),
                  r.setItem("History.store", n));
              }
            }),
            u.intervalList.push(l(u.onUnload, u.options.storeInterval)),
            u.Adapter.bind(e, "beforeunload", u.onUnload),
            u.Adapter.bind(e, "unload", u.onUnload)),
          u.emulated.pushState ||
            (u.bugs.safariPoll &&
              u.intervalList.push(
                l(u.safariStatePoll, u.options.safariPollInterval)
              ),
            ("Apple Computer, Inc." !== a.vendor &&
              "Mozilla" !== (a.appCodeName || "")) ||
              (u.Adapter.bind(e, "hashchange", function () {
                u.Adapter.trigger(e, "popstate");
              }),
              u.getHash() &&
                u.Adapter.onDomLoad(function () {
                  u.Adapter.trigger(e, "hashchange");
                })));
      }),
      (!u.options || !u.options.delayInit) && u.init();
  })(window),
  define("lib-app/history.min", function () {}),
  define(
    "storymaps/common/Core",
    [
      "lib-build/css!lib-app/bootstrap/css/bootstrap.min",
      "lib-build/css!storymaps/common/ui/Modal.css",
      "lib-build/css!./Core",
      "lib-app/jquery",
      "./utils/Polyfills",
      "esri/map",
      "esri/arcgis/Portal",
      "esri/arcgis/utils",
      "./utils/CommonHelper",
      "esri/urlUtils",
      "storymaps/common/ui/EmbedBar/EmbedBar",
      "./builder/MyStoriesWrapper",
      "dojo/has",
      "esri/IdentityManager",
      "esri/arcgis/OAuthInfo",
      "esri/config",
      "esri/tasks/GeometryService",
      "esri/request",
      "dojo/topic",
      "dojo/on",
      "dojo/_base/lang",
      "dojo/_base/array",
      "dojo/_base/kernel",
      "dojo/Deferred",
      "dojo/DeferredList",
      "dojo/query",
      "lib-app/jquery.fastClick",
      "lib-app/bootstrap/js/bootstrap.min",
      "lib-app/history.min",
    ],
    function (
      e,
      t,
      n,
      i,
      a,
      r,
      o,
      s,
      l,
      p,
      c,
      d,
      u,
      f,
      h,
      m,
      g,
      v,
      b,
      y,
      w,
      x,
      C,
      T,
      S,
      k,
      E
    ) {
      function I(e, t) {
        var n = !1,
          i = !1;
        if (
          (console.log("common.core.Core - init", t),
          (pe = e),
          (app.userCanEdit = !1),
          ne(),
          null != t &&
            ((n = null != ce.fromScratch || null != ce.fromscratch),
            (i = null != ce.fromGallery)),
          l.browserSupportHistory() ||
            (!n && !i) ||
            null != ce.ieredirected ||
            (window.location =
              document.location.protocol +
              "//" +
              document.location.host +
              document.location.pathname +
              "#" +
              document.location.search +
              "&ieredirected"),
          l.isArcGISHosted()
            ? (app.indexCfg = {})
            : ie() ||
              (app.indexCfg = {
                proxyurl: app.indexCfg.proxyurl,
                sharingurl: app.indexCfg.sharingurl,
                username: app.indexCfg.username,
                password: app.indexCfg.password,
                oAuthAppId: app.indexCfg.oAuthAppId,
              }),
          ce.sharinghost && (app.indexCfg.sharingurl = ce.sharinghost),
          !pe.checkConfigFileIsOK())
        )
          return void j("invalidConfig");
        if (
          ((document.title = app.cfg.TPL_NAME),
          u("touch") && $("body").addClass("hasTouch"),
          app.appCfg.noFastClick ||
            ((E.prototype._needsClick = E.prototype.needsClick),
            (E.prototype.needsClick = function (e) {
              return (
                !!$(e).parents(".esriPopup").length ||
                E.prototype._needsClick.call(this, e)
              );
            }),
            E.attach(document.body)),
          window != window.top && $("body").addClass("isEmbed"),
          w.mixin(app, {
            map: null,
            maps: {},
            portal: null,
            builder: t,
            isDirectCreation: n,
            isGalleryCreation: i,
            isDirectCreationFirstSave: n,
            isLoading: !0,
            loadingTimeout: null,
            ui: {},
          }),
          app.appCfg.useStandardHeader &&
            require(["storymaps/common/ui/header/Desktop"], function (e) {
              app.ui.headerDesktop = new e(
                $("#headerDesktop"),
                app.isInBuilder
              );
            }),
          pe.init(this))
        ) {
          if (
            (!ie() &&
              app.indexCfg.username &&
              app.indexCfg.password &&
              y(f, "dialog-create", function () {
                y(f.dialog, "show", function () {
                  f.dialog.txtUser_.set("value", app.indexCfg.username),
                    f.dialog.txtPwd_.set("value", app.indexCfg.password),
                    f.dialog.btnSubmit_.onClick();
                });
              }),
            Z(),
            !app.indexCfg.sharingurl)
          ) {
            var a = document.location.pathname.indexOf("/apps/");
            if (
              (-1 == a && (a = document.location.pathname.indexOf("/home/")),
              -1 != a)
            ) {
              var r = location.pathname.substr(0, a);
              (app.indexCfg.sharingurl =
                "//" + location.host + r + "/sharing/rest/content/items"),
                (app.indexCfg.proxyurl =
                  "//" + location.host + r + "/sharing/proxy");
            } else app.indexCfg.sharingurl = app.cfg.DEFAULT_SHARING_URL;
          }
          ce.sharinghost && (app.indexCfg.sharingurl = ce.sharinghost),
            app.indexCfg.sharingurl.match(/^http/)
              ? (s.arcgisUrl = app.indexCfg.sharingurl)
              : (s.arcgisUrl = location.protocol + app.indexCfg.sharingurl),
            app.indexCfg.proxyurl ||
              (app.indexCfg.proxyurl = app.cfg.DEFAULT_PROXY_URL),
            (m.defaults.io.proxyUrl =
              location.protocol + app.indexCfg.proxyurl),
            f &&
              f.setProtocolErrorHandler(function () {
                return !0;
              }),
            app.isInBuilder &&
              app.cfg.CORS_SERVER &&
              $.each(app.cfg.CORS_SERVER, function (e, t) {
                m.defaults.io.corsEnabledServers.push(t);
              }),
            app.cfg.PROXY_RULES &&
              app.cfg.PROXY_RULES.length &&
              $.each(app.cfg.PROXY_RULES, function (e, t) {
                t && t.urlPrefix && t.proxyUrl && p.addProxyRule(t);
              }),
            (m.defaults.io.timeout = app.isInBuilder
              ? app.cfg.TIMEOUT_BUILDER_REQUEST
              : app.cfg.TIMEOUT_VIEWER_REQUEST),
            ($.fn.modal.Constructor.prototype.enforceFocus = function () {}),
            pe.initLocalization(),
            $(window).resize(q),
            $("form").bind("keydown", function (e) {
              if (13 == e.keyCode) return !1;
            }),
            y(f, "dialog-create", X),
            b.subscribe("CORE_UPDATE_UI", U),
            b.subscribe("CORE_RESIZE", q),
            b.subscribe("CORE_UPDATE_EXTENT", W),
            (app.portal = new o.Portal(
              app.indexCfg.sharingurl.split("/sharing/")[0]
            )),
            app.portal.on("load", function (e) {
              if (
                ((app.isPortal = !!e.isPortal),
                ae(),
                f.checkSignInStatus(app.portal.portalUrl),
                app.indexCfg.oAuthAppId)
              ) {
                var n = new h({
                  appId: app.indexCfg.oAuthAppId,
                  popup: !1,
                  portalUrl:
                    "https:" + app.indexCfg.sharingurl.split("/sharing/")[0],
                });
                f.registerOAuthInfos([n]),
                  f.checkSignInStatus(n.portalUrl).then(
                    function () {
                      O().then(A);
                    },
                    function () {
                      t ? O().then(A) : A();
                    }
                  );
              } else A();
            });
        }
      }
      function A() {
        console.log("common.core.Core - initStep2");
        var e = l.getAppID(ie()),
          t = l.getWebmapID(ie()),
          n = !(app.appCfg && !app.appCfg.supportWebmapPreviewAGOL);
        if (e) return void L(e);
        var i = l.getUrlParams().insights;
        if (app.isDirectCreation && i)
          return i.match(/^[a-fA-F0-9]{32}$/)
            ? void O().then(function () {
                R(),
                  (app.isInitializing = !1),
                  app.data.setStoryStorage("WEBAPP"),
                  s.getItem(i).then(
                    function (e) {
                      if (!e) return void j("appLoadingFail");
                      var t = e.item;
                      if (!t.url) return void j("appLoadingFail");
                      app.data.getWebAppData().setTitle(t.title + " - story");
                      var n =
                        location.protocol +
                        app.indexCfg.sharingurl.split("/sharing/")[0] +
                        "/apps/insights/#/embed/" +
                        i;
                      app.data.addStorySection({
                        title: t.title,
                        creaDate: Date.now(),
                        status: "PUBLISHED",
                        media: {
                          type: "webpage",
                          webpage: { url: n, display: "stretch", unload: !1 },
                        },
                        description: t.description,
                      }),
                        app.data.getWebAppData().setLayout({ id: "tab" }),
                        app.data
                          .getWebAppData()
                          .setLayoutOptions({
                            description: !0,
                            legend: "panel",
                            panel: { position: "right", size: "medium" },
                            panelMapOverlap: !1,
                          }),
                        app.data.setCurrentSectionIndex(0),
                        b.publish("story-update-entries"),
                        b.publish("BUILDER_INCREMENT_COUNTER", 1),
                        z(),
                        b.publish("CORE_UPDATE_UI"),
                        N();
                    },
                    function () {
                      j("appLoadingFail");
                    }
                  );
              })
            : void j("appLoadingFail");
        var a = l.getUrlParams().webmap;
        return app.isDirectCreation && (t || a)
          ? void O().then(function () {
              R(),
                "opendata" == l.getUrlParams().source &&
                  (app.isDirectCreationOpenData = !0),
                (app.isInitializing = !1),
                app.data.setStoryStorage("WEBAPP");
              var e = (t || a).split(","),
                n = [];
              $.each(e, function (e, t) {
                if (
                  t.match(/^[a-fA-F0-9]{32}$/) &&
                  !(app.data.getStoryLength() >= app.cfg.MAX_NB_ENTRIES)
                ) {
                  var i = {
                    title: "",
                    contentActions: [],
                    creaDate: Date.now(),
                    status: "PUBLISHED",
                    media: {
                      type: "webmap",
                      webmap: {
                        id: t,
                        extent: null,
                        layers: null,
                        popup: null,
                        legend: { enable: !1, openByDefault: !1 },
                      },
                    },
                    description: "",
                  };
                  n.push(i), app.data.addStorySection(i);
                }
              }),
                app.data.getWebAppData().setLayout({ id: "tab" }),
                app.data.getWebAppData().setDefaultLayoutOptions(),
                app.data.getWebAppData().setMapOptions({ mapsSync: !1 });
              var i = 0,
                r = n.length,
                o = b.subscribe("story-loaded-map", function (e) {
                  if (app.maps[e.id]) {
                    var t = app.maps[e.id].response.itemInfo.item;
                    $.each(n, function (n, a) {
                      a.media.webmap.id == e.id &&
                        (0 === n && app.data.getWebAppData().setTitle(t.title),
                        (a.title = t.title),
                        (a.description = t.description),
                        app.data.editSection(n, a),
                        i++);
                    });
                  } else
                    console.log("Could not load web map with id:", e.id), r--;
                  i == r &&
                    (o.remove(),
                    z(),
                    b.publish("CORE_UPDATE_UI"),
                    b.publish("story-update-entries"),
                    N());
                });
              app.data.setCurrentSectionIndex(0),
                b.publish("story-update-entries"),
                b.publish("BUILDER_INCREMENT_COUNTER", 1),
                app.ui.mainStage.preloadAllMaps(!0);
            })
          : t && !n
          ? void (l.isArcGISHosted() ? B() : P(t))
          : app.isDirectCreation &&
            ie() &&
            l.isArcGISHosted() &&
            !l.getPortalUser() &&
            !app.portal.getPortalUser()
          ? void Q()
          : app.isDirectCreation
          ? void O().then(function () {
              var e = new h({
                appId: "storymaps",
                portalUrl:
                  "https:" + app.indexCfg.sharingurl.split("/sharing")[0],
                popup: !0,
              });
              f.registerOAuthInfos([e]),
                f
                  .checkAppAccess(
                    "https:" + app.indexCfg.sharingurl,
                    "storymaps"
                  )
                  .then(
                    function (e) {
                      return e && e.code && "IdentityManagerBase.1" === e.code
                        ? void j("notAuthorizedBuilder")
                        : e.viewOnly
                        ? void j("viewOnlyLicense")
                        : (R(), pe.startFromScratch(), z(), void 0);
                    },
                    function () {
                      j("notAuthorizedBuilder");
                    }
                  );
            })
          : void (l.isArcGISHosted()
              ? B()
              : j(
                  !ce.appid ||
                    (app.indexCfg.authorizedOwners &&
                      app.indexCfg.authorizedOwners[0])
                    ? app.isProduction
                      ? "invalidConfigNoApp"
                      : "invalidConfigNoAppDev"
                    : "unspecifiedConfigOwner"
                ));
      }
      function L(e) {
        console.log("common.core.Core - loadWebMappingApp - appId:", e),
          void 0 !== ce.forceLogin || app.isInBuilder
            ? O().then(
                function () {
                  _(e);
                },
                function () {
                  j("notAuthorized");
                }
              )
            : _(e);
      }
      function _(e) {
        s.getItem(e).then(
          function (e) {
            if (!e) return void j("appLoadingFail");
            var t = new h({
              appId: "storymaps",
              portalUrl:
                "https:" + app.indexCfg.sharingurl.split("/sharing")[0],
              popup: !0,
            });
            if (
              (f.registerOAuthInfos([t]),
              "public" === e.item.access && !app.isInBuilder)
            )
              return void D(e);
            f.checkAppAccess(
              "https:" + app.indexCfg.sharingurl,
              "storymaps"
            ).then(
              function (t) {
                return t && t.code && "IdentityManagerBase.1" === t.code
                  ? void j("notAuthorizedLicense")
                  : app.isInBuilder && t.viewOnly
                  ? void j("viewOnlyLicense")
                  : void D(e);
              },
              function () {
                j("notAuthorizedLicense");
              }
            );
          },
          function (e) {
            j(
              e && 400 == e.httpCode
                ? "invalidApp"
                : e && 403 == e.httpCode
                ? "notAuthorized"
                : "appLoadingFail"
            );
          }
        );
      }
      function D(e) {
        var t = e.item,
          n = e.itemData;
        if (
          (app.data.setWebAppItem(t),
          "shortlist" == app.appCfg.mediaPickerConfigureForceMode &&
            app.cfg.HTML_SANITIZER_DATE &&
            t.created > app.cfg.HTML_SANITIZER_DATE &&
            (n = app.sanitizer.sanitize(n)),
          app.data.getWebAppData().set(n),
          (app.userCanEdit = app.data.userIsAppOwner()),
          app.indexCfg.authorizedOwners &&
            app.indexCfg.authorizedOwners.length > 0 &&
            app.indexCfg.authorizedOwners[0])
        ) {
          var i = t.owner,
            a = !1;
          if (
            (i && (a = -1 != $.inArray(i, app.indexCfg.authorizedOwners)),
            a || "*" != app.indexCfg.authorizedOwners[0] || (a = !0),
            a ||
              $.each(app.indexCfg.authorizedOwners, function (e, n) {
                var i = n.match(/^\[(.*)\]$/);
                i && t.orgId == i[1] && (a = !0);
              }),
            !a)
          )
            return void j("invalidConfigOwner");
        }
        if (t && t.appProxies) {
          var r = x.map(t.appProxies, function (e) {
            return { url: e.sourceUrl, mixin: { url: e.proxyUrl } };
          });
          app.data.setAppProxies(r);
        }
        if (app.isInBuilder && ie() && !app.userCanEdit)
          return void j("notAuthorized");
        pe.webAppConfigLoaded();
        var o = !(app.appCfg && !app.appCfg.useWebmapInApp),
          s = app.data.getWebAppData().getWebmap() || l.getWebmapID(ie());
        (s && o && app.data.getWebAppData().isBlank()) || app.isGalleryCreation
          ? (pe.startFromScratch(), R())
          : s && o
          ? P(s)
          : !o || (!s && o)
          ? (R(), pe.loadWebmapFromData())
          : l.getPortalUser() || (!ie() && app.data.getWebAppData().isBlank())
          ? J()
          : app.data.getWebAppData().isBlank()
          ? j("appLoadingFail")
          : P(app.data.getWebAppData().getViews()[0].cfg.webmap.id);
      }
      function O() {
        var e = new T();
        return (
          y(f, "dialog-create", Y),
          app.portal.signIn().then(
            function () {
              if (app.isInBuilder && !app.data.checkUserItemPrivileges())
                return void j("notAuthorizedBuilder");
              (app.userCanEdit = app.data.userIsAppOwner()), ae(), e.resolve();
            },
            function () {
              e.reject();
            }
          ),
          e
        );
      }
      function P(e) {
        pe.loadFirstWebmap(e).then(
          w.hitch(this, function (e) {
            M(e);
          }),
          w.hitch(this, function () {
            j("createMap");
          })
        );
      }
      function M(e) {
        console.log("common.core.Core - webMapInitCallback"),
          (app.maps[e.itemInfo.item.id] = pe.getMapConfig(e)),
          (app.map = e.map),
          app.data.setWebMap(e.itemInfo),
          app.map.disableKeyboardNavigation(),
          R(),
          pe.firstWebmapLoaded();
      }
      function B() {
        window.location =
          app.isPortal && app.cfg.HELP_URL_PORTAL
            ? app.cfg.HELP_URL_PORTAL
            : app.cfg.HELP_URL;
      }
      function R() {
        var e = app.indexCfg.title || app.data.getWebAppData().getTitle(),
          t = app.indexCfg.subtitle || app.data.getWebAppData().getSubtitle(),
          n = app.data.getWebAppData().getColors();
        app.ui.headerDesktop &&
          app.ui.headerDesktop.init(
            !app.isInBuilder && (app.cfg.EMBED || ce.embed || "" === ce.embed),
            e,
            t,
            G(),
            n,
            V(),
            app.appCfg.headerCompactByDefault
          ),
          app.appCfg.useAppTitleAsPageTitle &&
            (document.title = e
              ? $("<div>" + e + "</div>").text()
              : app.cfg.TPL_NAME);
      }
      function z() {
        if (
          (console.log("common.core.Core - initApp"),
          !app.embedBar || (app.embedBar && !app.embedBar.initiated))
        ) {
          var e = esri.urlToObject(document.location.search).query || {},
            t =
              !!e.classicEmbedMode ||
              "" === e.classicEmbedMode ||
              !!e.classicembedmode ||
              "" === e.classicembedmode,
            n =
              "resources/tpl/viewer/icons/esri-logo-white.png" ==
              app.data.getWebAppData().getLogoURL(),
            i = i18n.commonCore.embedBar;
          w.mixin(i, {
            open: i18n.viewer.shareFromCommon.open,
            close: i18n.viewer.common.close,
            shareFacebook: i18n.viewer.headerFromCommon.facebookTooltip,
            shareTwitter: i18n.viewer.headerFromCommon.twitterTooltip,
          });
          var a = [$(".shareBtns")];
          "shortlist" != app.appCfg.mediaPickerConfigureForceMode &&
            a.push($(".share-btn")),
            (app.embedBar = new c({
              classicEmbedMode: t,
              strings: i,
              appCreationDate: app.data.getWebAppItem().created,
              june2018ReleaseDate: app.cfg.JUNE_RELEASE_DATE,
              isBuilder: app.isInBuilder,
              isEsriLogo: n,
              logoPath: "resources/common/icons/esri-logo-black.png",
              logoElements: [$(".logoContainer")],
              taglineElements: [$(".linkContainer")],
              shareElements: a,
              appTitle: app.data.getWebAppData().getTitle(),
              bitlyCreds: [
                app.cfg.HEADER_SOCIAL.bitly.key,
                app.cfg.HEADER_SOCIAL.bitly.login,
              ],
            }));
        }
        q(),
          location.hash && l.browserSupportHistory() && (location.hash = "map"),
          (window.onhashchange = function () {
            pe.prepareMobileViewSwitch(), pe.onHashChange();
          }),
          pe.appInitComplete(),
          app.builder && app.builder.appInitComplete();
        var r = "true" === ce.preview || "" === ce.preview,
          o = "true" === ce.autoplay || "" === ce.autoplay;
        (!app.isInBuilder && !app.userCanEdit) ||
          9 == u("ie") ||
          r ||
          o ||
          (u("ff") && $(".builderShare #my-stories-frame").remove(),
          (!u("ff") && app.isInBuilder) ||
            $("body").append(
              '<div id="my-stories-hidden-container"><iframe id="my-stories-frame"></iframe></div>'
            ),
          d.loadMyStories()),
          document.location.pathname.match(/\/apps\/[a-zA-Z]+\/$/) &&
            document.location.search.match(/^\?appid=/) &&
            (!u("ie") || u("ie") >= 10) &&
            History.replaceState(
              {},
              "",
              "index.html" + document.location.search + document.location.hash
            );
        var s = document.location.search;
        s &&
          (s = s.replace("&preview", "")) != document.location.search &&
          window.history.replaceState(
            {},
            "",
            "index.html" + s + document.location.hash
          );
      }
      function N() {
        (app.isLoading = !1),
          $("#headerDesktop").removeAttr("aria-hidden"),
          $("#loadingIndicator, #loadingMessage")
            .addClass("fadeOut")
            .fadeOut(400),
          $("#loadingOverlay").fadeOut(800);
      }
      function j(e, t, n) {
        var i = i18n.viewer.errors[e];
        ee(),
          $("#loadingIndicator").hide(),
          "notAuthorizedLicense" == e
            ? ((i = i18n.commonCore.licenseChange2018.noAccess),
              (i = i.replace(
                /%USER_NAME%/g,
                l.getPortalUser() ? l.getPortalUser() : ""
              )))
            : "viewOnlyLicense" == e
            ? ((i = i18n.commonCore.storyTellerUserType.notCreatorError),
              (i = i.replace(
                /%USER_NAME%/g,
                l.getPortalUser() ? l.getPortalUser() : ""
              )))
            : (i = i.replace(/%TPL_NAME%/g, app.cfg.TPL_NAME)),
          "notAuthorized" == e &&
            app.indexCfg.oAuthAppId &&
            (i +=
              '<div><button class="btn btn-sm btn-default" onclick="esri.id.destroyCredentials(); window.location.reload();">' +
              i18n.viewer.errors.signOut +
              "</button></div>"),
          "appLoadingFail" == e
            ? $("#loadingMessage")
                .html(
                  '<div id="loadingRetry"> <button type="button" class="btn btn-naked btn-sm" onclick="document.location.reload()">' +
                    i18n.viewer.loading.failButton +
                    " </button></div>"
                )
                .hide()
                .fadeIn(1200, function () {
                  $("#loadingMessage").addClass("loaded");
                })
            : $("#loadingMessage").hide(),
          8 == u("ie") &&
            ($("#fatalError-icon").css({
              filter:
                "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='_resources/icons/warning-icon.png', sizingMethod='scale')",
              backgroundPosition: "2px 3px",
              width: 78,
            }),
            $("#fatalError-msg").css({ paddingLeft: 5 })),
          $("#fatalError .error-msg").html(i),
          n || $("#fatalError").show();
      }
      function H(e) {
        $("#fatalError .error-msg").html(i18n.viewer.errors[e]);
      }
      function W(e, t) {
        if (
          ((t = t || app.map),
          !(
            e &&
            e.spatialReference &&
            t &&
            t.extent.spatialReference &&
            t.spatialReference
          ))
        ) {
          var n = new T();
          return n.resolve(), n;
        }
        var i = !!app.appCfg.mapExtentFit && app.appCfg.mapExtentFit;
        if (t.spatialReference.wkid == e.spatialReference.wkid)
          return t.setExtent(pe.getLayoutExtent(e, !1), i);
        var a = new T();
        return (
          m.defaults.geometryService.project(
            [e],
            t.spatialReference,
            function (e) {
              if (e && e[0]) {
                var n = pe.getLayoutExtent(e[0], !1);
                t.setExtent(n, i), a.resolve();
              }
            }
          ),
          a
        );
      }
      function F(e, t) {
        e
          ? 102100 != app.map.spatialReference.wkid &&
            4326 != app.map.spatialReference.wkid
            ? m.defaults.geometryService.project(
                [t],
                app.map.spatialReference,
                function (e) {
                  e &&
                    e[0] &&
                    (app.map.extent.contains(e[0]) || app.map.centerAt(e[0]));
                }
              )
            : app.map.extent.contains(t) || app.map.centerAt(t)
          : ($(".mainMediaContainer.active .mapLocationMsg").html(
              i18n.viewer.locatorFromCommon.error
            ),
            $(".mainMediaContainer.active .mapLocationError").fadeIn(),
            setTimeout(function () {
              $(".mainMediaContainer.active .mapLocationError").fadeOut();
            }, 5e3));
      }
      function U() {
        console.log("common.core.Core - updateUI");
        var e = app.data.getWebAppData().getColors();
        app.ui.headerDesktop &&
          (app.ui.headerDesktop.setTitleAndSubtitle(
            app.data.getWebAppData().getTitle() ||
              (app.data.getWebMap() ? app.data.getWebMap().item.title : ""),
            app.data.getWebAppData().getSubtitle() ||
              (app.data.getWebMap() ? app.data.getWebMap().item.snippet : "")
          ),
          app.ui.headerDesktop.update(
            G(),
            e,
            app.appCfg.headerCompactByDefault
          )),
          pe.updateUI(),
          q();
      }
      function G(e) {
        return {
          logoURL: app.data.getWebAppData().getLogoURL(e && e.useMobileLogo),
          logoTarget: app.data.getWebAppData().getLogoTarget(),
          linkText: app.data.getWebAppData().getHeaderLinkText(),
          linkURL: app.data.getWebAppData().getHeaderLinkURL(),
          socialBtn: app.data.getWebAppData().getSocial(),
          compactSize: app.data.getWebAppData().getHeaderCompactSize(),
        };
      }
      function q() {
        var e = $("body").width(),
          t = $("body").height(),
          n = 0,
          i = 0,
          a = void 0 !== ce.forceDesktop || app.indexCfg.forceDesktop,
          r = void 0 !== ce.forceMobile || app.indexCfg.forceMobile,
          o = e <= 768 || r,
          s = !$(".centerLink").length || $(".centerLink").hasClass("current");
        if (
          (a && (o = !1),
          o
            ? $("body").addClass("mobile-view")
            : $("body").removeClass("mobile-view"),
          $(".mainViewAboveMap, .mainViewBelowMap").each(function (e, t) {
            var i = $(t);
            n += i.is(":visible") ? i.outerHeight() : 0;
          }),
          $(".mainViewSideMap").each(function (e, t) {
            var n = $(t);
            i += n.is(":visible") ? n.outerWidth() : 0;
          }),
          app.ui.headerDesktop && app.ui.headerDesktop.resize(e),
          app.initScreenIsOpen &&
            ($("#header").css("display", o ? "none" : "block"),
            $("#fatalError").css("display", o ? "block" : "none")),
          app.initScreenIsOpen || $("#contentPanel").height(t - n),
          pe.resize({
            isMobileView: o,
            isOnMobileMapView: s,
            width: e,
            height: t - n,
          }),
          app.isInBuilder && app.builder.resize({ isMobileView: o }),
          app.map && (!o || (o && s)))
        )
          try {
            app.map.resize(!!app.appCfg.mapsImmediateResize);
          } catch (e) {}
        o
          ? $(".mapContainer .esriControlsBR > div")
              .first()
              .removeClass("logo-med")
              .addClass("logo-sm")
          : $(".mapContainer .esriControlsBR > div")
              .first()
              .removeClass("logo-sm")
              .addClass("logo-med");
      }
      function V() {
        return (
          !app.isInBuilder &&
          ((!ie() && !!l.getAppID(ie())) || (ie() && app.userCanEdit)) &&
          (void 0 === ce.autoplay || "false" == ce.autoplay) &&
          (void 0 === ce.preview || "false" == ce.preview)
        );
      }
      function X() {
        $(".esriSignInDialog td label").siblings("br").css("display", "none"),
          $(".esriSignInDialog .dijitDialogPaneContentArea div:nth(1)").css(
            "display",
            "none"
          ),
          $(".esriSignInDialog .dijitReset.dijitInputInner").css(
            "padding",
            "0px"
          ),
          $(".esriSignInDialog .dijitReset.dijitInputInner").css(
            "margin-bottom",
            "0px"
          ),
          $(".esriSignInDialog .dijitReset.dijitInputInner").css(
            "border",
            "none"
          ),
          $(".esriSignInDialog .dijitReset.dijitInputInner").css(
            "border-radius",
            "0px"
          ),
          $(".esriSignInDialog .dijitReset.dijitInputInner").css(
            "-webkit-border-radius",
            "0px"
          ),
          $(".esriSignInDialog .dijitReset.dijitInputInner").css(
            "-moz-border-radius",
            "0px"
          ),
          $(".esriSignInDialog .dijitReset.dijitInputInner").css(
            "box-shadow",
            "none"
          ),
          $(".esriSignInDialog .dijitReset.dijitInputInner").css(
            "-webkit-box-shadow",
            "none"
          ),
          $(".esriSignInDialog .dijitReset.dijitInputInner").css(
            "-moz-box-shadow",
            "none"
          ),
          $(".esriSignInDialog .dijitReset.dijitValidationContainer").css(
            "display",
            "none"
          ),
          $(".esriSignInDialog .esriErrorMsg").css("margin-top", "10px"),
          $(".esriSignInDialog")
            .find(".dijitDialogTitleBar")
            .find(".dijitDialogTitle")
            .first()
            .html(i18n.viewer.signin.title),
          f._arcgisUrl &&
            ($(".esriSignInDialog")
              .find(".dijitDialogPaneContentArea:first-child")
              .find(":first-child")
              .first()
              .css("display", "none"),
            $(".esriSignInDialog")
              .find(".dijitDialogPaneContentArea:first-child")
              .find(":first-child")
              .first()
              .after(
                "<div id='dijitDialogPaneContentAreaLoginText'>" +
                  i18n.viewer.signin.explainViewer.replace(
                    "%PORTAL_LINK%",
                    "<a href='http://" +
                      f._arcgisUrl +
                      "' title='" +
                      f._arcgisUrl +
                      "' target='_blank'>" +
                      f._arcgisUrl +
                      "</a>"
                  ) +
                  "</div>"
              ));
      }
      function Y() {
        f._arcgisUrl &&
          $(".esriSignInDialog")
            .find("#dijitDialogPaneContentAreaLoginText")
            .html(
              i18n.viewer.signin.explainBuilder.replace(
                "%PORTAL_LINK%",
                "<a href='http://" +
                  f._arcgisUrl +
                  "' title='" +
                  f._arcgisUrl +
                  "' target='_blank'>" +
                  f._arcgisUrl +
                  "</a>"
              )
            );
      }
      function K() {
        $("#header").css("display", "inherit"),
          $(".mobileView").css("display", "inherit"),
          $("#fatalError").css("display", "none"),
          $("#loadingOverlay").css("top", "0px"),
          Z(),
          q();
      }
      function Q() {
        window.location =
          s.arcgisUrl.split("/sharing/")[0] +
          "/home/signin.html?returnUrl=" +
          encodeURIComponent(document.location.href);
      }
      function J() {
        window.location = document.location.href + "&fromGallery";
      }
      function Z() {
        app.loadingTimeout = setTimeout(te, app.cfg.TIMEOUT_VIEWER_LOAD);
      }
      function ee() {
        "undefined" != typeof app &&
          app.loadingTimeout &&
          (clearTimeout(app.loadingTimeout), (app.loadingTimeout = null));
      }
      function te() {
        if (
          f &&
          f.dialog &&
          f.dialog._alreadyInitialized &&
          !f.loadingTimeoutAlreadyFired
        )
          return (
            clearTimeout(app.loadingTimeout),
            Z(),
            void (f._busy || (f.loadingTimeoutAlreadyFired = !0))
          );
        $("#loadingMessage")
          .html(
            '<div class="mainMessage">' +
              i18n.viewer.loading.long +
              "<br />" +
              i18n.viewer.loading.long2 +
              "</div>"
          )
          .fadeIn("slow", function () {
            $("#loadingMessage").addClass("loaded");
          });
      }
      function ne() {
        (document.documentElement.lang = C.locale),
          (k("#fatalError .error-title")[0].innerHTML =
            i18n.viewer.errors.boxTitle);
        var e = i18n.viewer.a11y;
        e &&
          ($(".skip-to-content").html(e.skipToContent),
          $('header[role="banner"]').attr("aria-label", e.headerAria),
          $('#nav-bar[role="navigation"]').attr("aria-label", e.navAria),
          $('[role="main"]').attr("aria-label", e.panelAria),
          $(".loop-to-top").html(e.toTop),
          $(".loading-gif").attr("alt", e.loadingAria).html(),
          $(".mainStagePanel").attr("aria-label", e.mainStageAria));
      }
      function ie() {
        return le.environment != ["TPL", "ENV", "DEV"].join("_");
      }
      function ae() {
        if ((console.log("common.core.Core - parsePortalConfig"), app.portal)) {
          if (app.data.getWebAppData().getAppGeocoders) {
            var e = app.data.getWebAppData().getAppGeocoders(),
              t = e
                ? e.map(function (e) {
                    return e.url;
                  })
                : [],
              n = [];
            app.cfg.HELPER_SERVICES.geocode &&
              app.cfg.HELPER_SERVICES.geocode.length &&
              ($.each(app.portal.helperServices.geocode, function (e, i) {
                i.url && t.indexOf(i.url) < 0 && n.push(i);
              }),
              (app.cfg.HELPER_SERVICES.geocode = n));
          }
          var i;
          if (
            (app.cfg.HELPER_SERVICES.geometry &&
            app.cfg.HELPER_SERVICES.geometry.url
              ? (i = app.cfg.HELPER_SERVICES.geometry.url)
              : app.portal.helperServices.geometry &&
                app.portal.helperServices.geometry.url &&
                (i = app.portal.helperServices.geometry.url),
            (m.defaults.geometryService = new g(i)),
            !app.cfg.BING_MAPS_KEY &&
              app.portal.bingKey &&
              (app.cfg.BING_MAPS_KEY = app.portal.bingKey),
            app.portal.isPortal &&
              app.cfg &&
              app.cfg.AUTHORIZED_IMPORT_SOURCE &&
              (app.cfg.AUTHORIZED_IMPORT_SOURCE.featureService = !1),
            (app.isPortal = !!app.portal.isPortal),
            app.isPortal &&
              app.portal.helpBase &&
              app.portal.portalHostname &&
              !app.cfg.HELP_URL_PORTAL.match("^//"))
          ) {
            var a = app.portal.portalHostname.split("/")[0];
            app.cfg.HELP_URL_PORTAL =
              "//" + a + app.portal.helpBase + app.cfg.HELP_URL_PORTAL;
          }
        }
      }
      function re() {
        var e = "notConfiguredMobile";
        ee(),
          (app.isInitializing = !0),
          (app.initScreenIsOpen = !0),
          u("touch") &&
            l.isMobile() &&
            (window.innerHeight > window.innerWidth
              ? window.innerHeight > 768 && (e = "notConfiguredMobile2")
              : window.innerWidth > 768 && (e = "notConfiguredMobile2")),
          j(e, null, !0),
          setTimeout(q, 50);
      }
      function oe() {
        $("#initPopup").modal("hide"), (app.initScreenIsOpen = !1);
      }
      function se() {
        H("notConfiguredDesktop"),
          $("#loadingOverlay").css("top", "0px"),
          $("#header").css("display", "inherit"),
          $("#fatalError").css("display", "block"),
          (app.initScreenIsOpen = !1),
          q();
      }
      var le = { environment: "TPL_ENV_PRODUCTION" },
        pe = null,
        ce = l.getUrlParams();
      return (
        a.apply(),
        {
          init: I,
          isProd: ie,
          appInitComplete: z,
          displayApp: N,
          loadWebMap: P,
          handleWindowResize: q,
          hasSwitchBuilderButton: V,
          initPopupPrepare: re,
          initPopupComplete: oe,
          initPopupFail: se,
          setMapExtent: W,
          zoomToDeviceLocation: F,
          getHeaderUserCfg: G,
          cleanLoadingTimeout: ee,
          initError: j,
          prepareAppForWebmapReload: K,
          replaceInitErrorMessage: H,
          portalLogin: O,
        }
      );
    }
  ),
  define(
    "lib-build/css!storymaps/common/ui/header/Desktop",
    [],
    function () {}
  ),
  define("text", {}),
  function () {
    function e(e, t, n) {
      n = (n || 0) - 1;
      for (var i = e ? e.length : 0; ++n < i; ) if (e[n] === t) return n;
      return -1;
    }
    function t(t, n) {
      var i = typeof n;
      if (((t = t.l), "boolean" == i || null == n)) return t[n] ? 0 : -1;
      "number" != i && "string" != i && (i = "object");
      var a = "number" == i ? n : v + n;
      return (
        (t = (t = t[i]) && t[a]),
        "object" == i ? (t && -1 < e(t, n) ? 0 : -1) : t ? 0 : -1
      );
    }
    function n(e) {
      var t = this.l,
        n = typeof e;
      if ("boolean" == n || null == e) t[e] = !0;
      else {
        "number" != n && "string" != n && (n = "object");
        var i = "number" == n ? e : v + e,
          t = t[n] || (t[n] = {});
        "object" == n ? (t[i] || (t[i] = [])).push(e) : (t[i] = !0);
      }
    }
    function i(e) {
      return e.charCodeAt(0);
    }
    function a(e, t) {
      for (var n = e.m, i = t.m, a = -1, r = n.length; ++a < r; ) {
        var o = n[a],
          s = i[a];
        if (o !== s) {
          if (o > s || void 0 === o) return 1;
          if (o < s || void 0 === s) return -1;
        }
      }
      return e.n - t.n;
    }
    function r(e) {
      var t = -1,
        i = e.length,
        a = e[0],
        r = e[(i / 2) | 0],
        o = e[i - 1];
      if (
        a &&
        "object" == typeof a &&
        r &&
        "object" == typeof r &&
        o &&
        "object" == typeof o
      )
        return !1;
      for (
        a = l(),
          a.false = a.null = a.true = a.undefined = !1,
          r = l(),
          r.k = e,
          r.l = a,
          r.push = n;
        ++t < i;

      )
        r.push(e[t]);
      return r;
    }
    function o(e) {
      return "\\" + q[e];
    }
    function s() {
      return h.pop() || [];
    }
    function l() {
      return (
        m.pop() || {
          k: null,
          l: null,
          m: null,
          false: !1,
          n: 0,
          null: !1,
          number: null,
          object: null,
          push: null,
          string: null,
          true: !1,
          undefined: !1,
          o: null,
        }
      );
    }
    function p(e) {
      (e.length = 0), h.length < y && h.push(e);
    }
    function c(e) {
      var t = e.l;
      t && c(t),
        (e.k = e.l = e.m = e.object = e.number = e.string = e.o = null),
        m.length < y && m.push(e);
    }
    function d(e, t, n) {
      t || (t = 0), void 0 === n && (n = e ? e.length : 0);
      var i = -1;
      n = n - t || 0;
      for (var a = Array(0 > n ? 0 : n); ++i < n; ) a[i] = e[t + i];
      return a;
    }
    function u(n) {
      function h(e, t, n) {
        if (!e || !G[typeof e]) return e;
        t = t && void 0 === n ? t : te(t, n, 3);
        for (
          var i = -1, a = G[typeof e] && Bt(e), r = a ? a.length : 0;
          ++i < r && ((n = a[i]), !1 !== t(e[n], n, e));

        );
        return e;
      }
      function m(e, t, n) {
        var i;
        if (!e || !G[typeof e]) return e;
        t = t && void 0 === n ? t : te(t, n, 3);
        for (i in e) if (!1 === t(e[i], i, e)) break;
        return e;
      }
      function y(e, t, n) {
        var i,
          a = e,
          r = a;
        if (!a) return r;
        for (
          var o = arguments, s = 0, l = "number" == typeof n ? 2 : o.length;
          ++s < l;

        )
          if ((a = o[s]) && G[typeof a])
            for (
              var p = -1, c = G[typeof a] && Bt(a), d = c ? c.length : 0;
              ++p < d;

            )
              (i = c[p]), void 0 === r[i] && (r[i] = a[i]);
        return r;
      }
      function q(e, t, n) {
        var i,
          a = e,
          r = a;
        if (!a) return r;
        var o = arguments,
          s = 0,
          l = "number" == typeof n ? 2 : o.length;
        if (3 < l && "function" == typeof o[l - 2])
          var p = te(o[--l - 1], o[l--], 2);
        else 2 < l && "function" == typeof o[l - 1] && (p = o[--l]);
        for (; ++s < l; )
          if ((a = o[s]) && G[typeof a])
            for (
              var c = -1, d = G[typeof a] && Bt(a), u = d ? d.length : 0;
              ++c < u;

            )
              (i = d[c]), (r[i] = p ? p(r[i], a[i]) : a[i]);
        return r;
      }
      function X(e) {
        var t,
          n = [];
        if (!e || !G[typeof e]) return n;
        for (t in e) vt.call(e, t) && n.push(t);
        return n;
      }
      function Y(e) {
        return e && "object" == typeof e && !Mt(e) && vt.call(e, "__wrapped__")
          ? e
          : new K(e);
      }
      function K(e, t) {
        (this.__chain__ = !!t), (this.__wrapped__ = e);
      }
      function Q(e) {
        function t() {
          if (i) {
            var e = d(i);
            bt.apply(e, arguments);
          }
          if (this instanceof t) {
            var r = ee(n.prototype),
              e = n.apply(r, e || arguments);
            return xe(e) ? e : r;
          }
          return n.apply(a, e || arguments);
        }
        var n = e[0],
          i = e[2],
          a = e[4];
        return Pt(t, e), t;
      }
      function Z(e, t, n, i, a) {
        if (n) {
          var r = n(e);
          if (void 0 !== r) return r;
        }
        if (!xe(e)) return e;
        var o = ct.call(e);
        if (!W[o]) return e;
        var l = Dt[o];
        switch (o) {
          case M:
          case B:
            return new l(+e);
          case z:
          case H:
            return new l(e);
          case j:
            return (r = l(e.source, k.exec(e))), (r.lastIndex = e.lastIndex), r;
        }
        if (((o = Mt(e)), t)) {
          var c = !i;
          i || (i = s()), a || (a = s());
          for (var u = i.length; u--; ) if (i[u] == e) return a[u];
          r = o ? l(e.length) : {};
        } else r = o ? d(e) : q({}, e);
        return (
          o &&
            (vt.call(e, "index") && (r.index = e.index),
            vt.call(e, "input") && (r.input = e.input)),
          t
            ? (i.push(e),
              a.push(r),
              (o ? Le : h)(e, function (e, o) {
                r[o] = Z(e, t, n, i, a);
              }),
              c && (p(i), p(a)),
              r)
            : r
        );
      }
      function ee(e) {
        return xe(e) ? Tt(e) : {};
      }
      function te(e, t, n) {
        if ("function" != typeof e) return qe;
        if (void 0 === t || !("prototype" in e)) return e;
        var i = e.__bindData__;
        if (
          void 0 === i &&
          (Ot.funcNames && (i = !e.name), !(i = i || !Ot.funcDecomp))
        ) {
          var a = mt.call(e);
          Ot.funcNames || (i = !E.test(a)), i || ((i = $.test(a)), Pt(e, i));
        }
        if (!1 === i || (!0 !== i && 1 & i[1])) return e;
        switch (n) {
          case 1:
            return function (n) {
              return e.call(t, n);
            };
          case 2:
            return function (n, i) {
              return e.call(t, n, i);
            };
          case 3:
            return function (n, i, a) {
              return e.call(t, n, i, a);
            };
          case 4:
            return function (n, i, a, r) {
              return e.call(t, n, i, a, r);
            };
        }
        return Ue(e, t);
      }
      function ne(e) {
        function t() {
          var e = l ? o : this;
          if (a) {
            var h = d(a);
            bt.apply(h, arguments);
          }
          return (r || c) &&
            (h || (h = d(arguments)), r && bt.apply(h, r), c && h.length < s)
            ? ((i |= 16), ne([n, u ? i : -4 & i, h, null, o, s]))
            : (h || (h = arguments),
              p && (n = e[f]),
              this instanceof t
                ? ((e = ee(n.prototype)), (h = n.apply(e, h)), xe(h) ? h : e)
                : n.apply(e, h));
        }
        var n = e[0],
          i = e[1],
          a = e[2],
          r = e[3],
          o = e[4],
          s = e[5],
          l = 1 & i,
          p = 2 & i,
          c = 4 & i,
          u = 8 & i,
          f = n;
        return Pt(t, e), t;
      }
      function ie(n, i) {
        var a = -1,
          o = ue(),
          s = n ? n.length : 0,
          l = s >= b && o === e,
          p = [];
        if (l) {
          var d = r(i);
          d ? ((o = t), (i = d)) : (l = !1);
        }
        for (; ++a < s; ) (d = n[a]), 0 > o(i, d) && p.push(d);
        return l && c(i), p;
      }
      function ae(e, t, n, i) {
        i = (i || 0) - 1;
        for (var a = e ? e.length : 0, r = []; ++i < a; ) {
          var o = e[i];
          if (
            o &&
            "object" == typeof o &&
            "number" == typeof o.length &&
            (Mt(o) || ge(o))
          ) {
            t || (o = ae(o, t, n));
            var s = -1,
              l = o.length,
              p = r.length;
            for (r.length += l; ++s < l; ) r[p++] = o[s];
          } else n || r.push(o);
        }
        return r;
      }
      function re(e, t, n, i, a, r) {
        if (n) {
          var o = n(e, t);
          if (void 0 !== o) return !!o;
        }
        if (e === t) return 0 !== e || 1 / e == 1 / t;
        if (e === e && !((e && G[typeof e]) || (t && G[typeof t]))) return !1;
        if (null == e || null == t) return e === t;
        var l = ct.call(e),
          c = ct.call(t);
        if ((l == O && (l = N), c == O && (c = N), l != c)) return !1;
        switch (l) {
          case M:
          case B:
            return +e == +t;
          case z:
            return e != +e ? t != +t : 0 == e ? 1 / e == 1 / t : e == +t;
          case j:
          case H:
            return e == rt(t);
        }
        if (!(c = l == P)) {
          var d = vt.call(e, "__wrapped__"),
            u = vt.call(t, "__wrapped__");
          if (d || u)
            return re(d ? e.__wrapped__ : e, u ? t.__wrapped__ : t, n, i, a, r);
          if (l != N) return !1;
          if (
            ((l = e.constructor),
            (d = t.constructor),
            l != d &&
              !(we(l) && l instanceof l && we(d) && d instanceof d) &&
              "constructor" in e &&
              "constructor" in t)
          )
            return !1;
        }
        for (l = !a, a || (a = s()), r || (r = s()), d = a.length; d--; )
          if (a[d] == e) return r[d] == t;
        var f = 0,
          o = !0;
        if ((a.push(e), r.push(t), c)) {
          if (((d = e.length), (f = t.length), (o = f == d) || i))
            for (; f--; )
              if (((c = d), (u = t[f]), i))
                for (; c-- && !(o = re(e[c], u, n, i, a, r)); );
              else if (!(o = re(e[f], u, n, i, a, r))) break;
        } else
          m(t, function (t, s, l) {
            return vt.call(l, s)
              ? (f++, (o = vt.call(e, s) && re(e[s], t, n, i, a, r)))
              : void 0;
          }),
            o &&
              !i &&
              m(e, function (e, t, n) {
                return vt.call(n, t) ? (o = -1 < --f) : void 0;
              });
        return a.pop(), r.pop(), l && (p(a), p(r)), o;
      }
      function oe(e, t, n, i, a) {
        (Mt(t) ? Le : h)(t, function (t, r) {
          var o,
            s,
            l = t,
            p = e[r];
          if (t && ((s = Mt(t)) || Ht(t))) {
            for (l = i.length; l--; )
              if ((o = i[l] == t)) {
                p = a[l];
                break;
              }
            if (!o) {
              var c;
              n && ((l = n(p, t)), (c = void 0 !== l)) && (p = l),
                c || (p = s ? (Mt(p) ? p : []) : Ht(p) ? p : {}),
                i.push(t),
                a.push(p),
                c || oe(p, t, n, i, a);
            }
          } else n && void 0 === (l = n(p, t)) && (l = t), void 0 !== l && (p = l);
          e[r] = p;
        });
      }
      function se(e, t) {
        return e + ht(_t() * (t - e + 1));
      }
      function le(n, i, a) {
        var o = -1,
          l = ue(),
          d = n ? n.length : 0,
          u = [],
          f = !i && d >= b && l === e,
          h = a || f ? s() : u;
        for (f && ((h = r(h)), (l = t)); ++o < d; ) {
          var m = n[o],
            g = a ? a(m, o, n) : m;
          (i ? !o || h[h.length - 1] !== g : 0 > l(h, g)) &&
            ((a || f) && h.push(g), u.push(m));
        }
        return f ? (p(h.k), c(h)) : a && p(h), u;
      }
      function pe(e) {
        return function (t, n, i) {
          var a = {};
          (n = Y.createCallback(n, i, 3)), (i = -1);
          var r = t ? t.length : 0;
          if ("number" == typeof r)
            for (; ++i < r; ) {
              var o = t[i];
              e(a, o, n(o, i, t), t);
            }
          else
            h(t, function (t, i, r) {
              e(a, t, n(t, i, r), r);
            });
          return a;
        };
      }
      function ce(e, t, n, i, a, r) {
        var o = 1 & t,
          s = 4 & t,
          l = 16 & t,
          p = 32 & t;
        if (!(2 & t || we(e))) throw new ot();
        l && !n.length && ((t &= -17), (l = n = !1)),
          p && !i.length && ((t &= -33), (p = i = !1));
        var c = e && e.__bindData__;
        return c && !0 !== c
          ? ((c = d(c)),
            c[2] && (c[2] = d(c[2])),
            c[3] && (c[3] = d(c[3])),
            !o || 1 & c[1] || (c[4] = a),
            !o && 1 & c[1] && (t |= 8),
            !s || 4 & c[1] || (c[5] = r),
            l && bt.apply(c[2] || (c[2] = []), n),
            p && xt.apply(c[3] || (c[3] = []), i),
            (c[1] |= t),
            ce.apply(null, c))
          : (1 == t || 17 === t ? Q : ne)([e, t, n, i, a, r]);
      }
      function de(e) {
        return Rt[e];
      }
      function ue() {
        var t = (t = Y.indexOf) === ze ? e : t;
        return t;
      }
      function fe(e) {
        return "function" == typeof e && dt.test(e);
      }
      function he(e) {
        var t, n;
        return (
          !!(
            e &&
            ct.call(e) == N &&
            ((t = e.constructor), !we(t) || t instanceof t)
          ) &&
          (m(e, function (e, t) {
            n = t;
          }),
          void 0 === n || vt.call(e, n))
        );
      }
      function me(e) {
        return zt[e];
      }
      function ge(e) {
        return (
          (e &&
            "object" == typeof e &&
            "number" == typeof e.length &&
            ct.call(e) == O) ||
          !1
        );
      }
      function ve(e, t, n) {
        var i = Bt(e),
          a = i.length;
        for (t = te(t, n, 3); a-- && ((n = i[a]), !1 !== t(e[n], n, e)); );
        return e;
      }
      function be(e) {
        var t = [];
        return (
          m(e, function (e, n) {
            we(e) && t.push(n);
          }),
          t.sort()
        );
      }
      function ye(e) {
        for (var t = -1, n = Bt(e), i = n.length, a = {}; ++t < i; ) {
          var r = n[t];
          a[e[r]] = r;
        }
        return a;
      }
      function we(e) {
        return "function" == typeof e;
      }
      function xe(e) {
        return !(!e || !G[typeof e]);
      }
      function Ce(e) {
        return (
          "number" == typeof e ||
          (e && "object" == typeof e && ct.call(e) == z) ||
          !1
        );
      }
      function Te(e) {
        return (
          "string" == typeof e ||
          (e && "object" == typeof e && ct.call(e) == H) ||
          !1
        );
      }
      function Se(e) {
        for (var t = -1, n = Bt(e), i = n.length, a = Qe(i); ++t < i; )
          a[t] = e[n[t]];
        return a;
      }
      function ke(e, t, n) {
        var i = -1,
          a = ue(),
          r = e ? e.length : 0,
          o = !1;
        return (
          (n = (0 > n ? At(0, r + n) : n) || 0),
          Mt(e)
            ? (o = -1 < a(e, t, n))
            : "number" == typeof r
            ? (o = -1 < (Te(e) ? e.indexOf(t, n) : a(e, t, n)))
            : h(e, function (e) {
                return ++i < n ? void 0 : !(o = e === t);
              }),
          o
        );
      }
      function Ee(e, t, n) {
        var i = !0;
        (t = Y.createCallback(t, n, 3)), (n = -1);
        var a = e ? e.length : 0;
        if ("number" == typeof a) for (; ++n < a && (i = !!t(e[n], n, e)); );
        else
          h(e, function (e, n, a) {
            return (i = !!t(e, n, a));
          });
        return i;
      }
      function Ie(e, t, n) {
        var i = [];
        (t = Y.createCallback(t, n, 3)), (n = -1);
        var a = e ? e.length : 0;
        if ("number" == typeof a)
          for (; ++n < a; ) {
            var r = e[n];
            t(r, n, e) && i.push(r);
          }
        else
          h(e, function (e, n, a) {
            t(e, n, a) && i.push(e);
          });
        return i;
      }
      function Ae(e, t, n) {
        (t = Y.createCallback(t, n, 3)), (n = -1);
        var i = e ? e.length : 0;
        if ("number" != typeof i) {
          var a;
          return (
            h(e, function (e, n, i) {
              return t(e, n, i) ? ((a = e), !1) : void 0;
            }),
            a
          );
        }
        for (; ++n < i; ) {
          var r = e[n];
          if (t(r, n, e)) return r;
        }
      }
      function Le(e, t, n) {
        var i = -1,
          a = e ? e.length : 0;
        if (((t = t && void 0 === n ? t : te(t, n, 3)), "number" == typeof a))
          for (; ++i < a && !1 !== t(e[i], i, e); );
        else h(e, t);
        return e;
      }
      function $e(e, t, n) {
        var i = e ? e.length : 0;
        if (((t = t && void 0 === n ? t : te(t, n, 3)), "number" == typeof i))
          for (; i-- && !1 !== t(e[i], i, e); );
        else {
          var a = Bt(e),
            i = a.length;
          h(e, function (e, n, r) {
            return (n = a ? a[--i] : --i), t(r[n], n, r);
          });
        }
        return e;
      }
      function _e(e, t, n) {
        var i = -1,
          a = e ? e.length : 0;
        if (((t = Y.createCallback(t, n, 3)), "number" == typeof a))
          for (var r = Qe(a); ++i < a; ) r[i] = t(e[i], i, e);
        else
          (r = []),
            h(e, function (e, n, a) {
              r[++i] = t(e, n, a);
            });
        return r;
      }
      function De(e, t, n) {
        var a = -1 / 0,
          r = a;
        if (
          ("function" != typeof t && n && n[t] === e && (t = null),
          null == t && Mt(e))
        ) {
          n = -1;
          for (var o = e.length; ++n < o; ) {
            var s = e[n];
            s > r && (r = s);
          }
        } else
          (t = null == t && Te(e) ? i : Y.createCallback(t, n, 3)),
            Le(e, function (e, n, i) {
              (n = t(e, n, i)) > a && ((a = n), (r = e));
            });
        return r;
      }
      function Oe(e, t, n, i) {
        if (!e) return n;
        var a = 3 > arguments.length;
        t = Y.createCallback(t, i, 4);
        var r = -1,
          o = e.length;
        if ("number" == typeof o)
          for (a && (n = e[++r]); ++r < o; ) n = t(n, e[r], r, e);
        else
          h(e, function (e, i, r) {
            n = a ? ((a = !1), e) : t(n, e, i, r);
          });
        return n;
      }
      function Pe(e, t, n, i) {
        var a = 3 > arguments.length;
        return (
          (t = Y.createCallback(t, i, 4)),
          $e(e, function (e, i, r) {
            n = a ? ((a = !1), e) : t(n, e, i, r);
          }),
          n
        );
      }
      function Me(e) {
        var t = -1,
          n = e ? e.length : 0,
          i = Qe("number" == typeof n ? n : 0);
        return (
          Le(e, function (e) {
            var n = se(0, ++t);
            (i[t] = i[n]), (i[n] = e);
          }),
          i
        );
      }
      function Be(e, t, n) {
        var i;
        (t = Y.createCallback(t, n, 3)), (n = -1);
        var a = e ? e.length : 0;
        if ("number" == typeof a) for (; ++n < a && !(i = t(e[n], n, e)); );
        else
          h(e, function (e, n, a) {
            return !(i = t(e, n, a));
          });
        return !!i;
      }
      function Re(e, t, n) {
        var i = 0,
          a = e ? e.length : 0;
        if ("number" != typeof t && null != t) {
          var r = -1;
          for (t = Y.createCallback(t, n, 3); ++r < a && t(e[r], r, e); ) i++;
        } else if (null == (i = t) || n) return e ? e[0] : f;
        return d(e, 0, Lt(At(0, i), a));
      }
      function ze(t, n, i) {
        if ("number" == typeof i) {
          var a = t ? t.length : 0;
          i = 0 > i ? At(0, a + i) : i || 0;
        } else if (i) return (i = je(t, n)), t[i] === n ? i : -1;
        return e(t, n, i);
      }
      function Ne(e, t, n) {
        if ("number" != typeof t && null != t) {
          var i = 0,
            a = -1,
            r = e ? e.length : 0;
          for (t = Y.createCallback(t, n, 3); ++a < r && t(e[a], a, e); ) i++;
        } else i = null == t || n ? 1 : At(0, t);
        return d(e, i);
      }
      function je(e, t, n, i) {
        var a = 0,
          r = e ? e.length : a;
        for (n = n ? Y.createCallback(n, i, 1) : qe, t = n(t); a < r; )
          (i = (a + r) >>> 1), n(e[i]) < t ? (a = i + 1) : (r = i);
        return a;
      }
      function He(e, t, n, i) {
        return (
          "boolean" != typeof t &&
            null != t &&
            ((i = n),
            (n = "function" != typeof t && i && i[t] === e ? null : t),
            (t = !1)),
          null != n && (n = Y.createCallback(n, i, 3)),
          le(e, t, n)
        );
      }
      function We() {
        for (
          var e = 1 < arguments.length ? arguments : arguments[0],
            t = -1,
            n = e ? De(Gt(e, "length")) : 0,
            i = Qe(0 > n ? 0 : n);
          ++t < n;

        )
          i[t] = Gt(e, t);
        return i;
      }
      function Fe(e, t) {
        var n = -1,
          i = e ? e.length : 0,
          a = {};
        for (t || !i || Mt(e[0]) || (t = []); ++n < i; ) {
          var r = e[n];
          t ? (a[r] = t[n]) : r && (a[r[0]] = r[1]);
        }
        return a;
      }
      function Ue(e, t) {
        return 2 < arguments.length
          ? ce(e, 17, d(arguments, 2), null, t)
          : ce(e, 1, null, null, t);
      }
      function Ge(e, t, n) {
        function i() {
          c && ft(c),
            (o = c = d = f),
            (m || h !== t) &&
              ((u = qt()), (s = e.apply(p, r)), c || o || (r = p = null));
        }
        function a() {
          var n = t - (qt() - l);
          0 < n
            ? (c = yt(a, n))
            : (o && ft(o),
              (n = d),
              (o = c = d = f),
              n && ((u = qt()), (s = e.apply(p, r)), c || o || (r = p = null)));
        }
        var r,
          o,
          s,
          l,
          p,
          c,
          d,
          u = 0,
          h = !1,
          m = !0;
        if (!we(e)) throw new ot();
        if (((t = At(0, t) || 0), !0 === n))
          var g = !0,
            m = !1;
        else
          xe(n) &&
            ((g = n.leading),
            (h = "maxWait" in n && (At(t, n.maxWait) || 0)),
            (m = "trailing" in n ? n.trailing : m));
        return function () {
          if (
            ((r = arguments),
            (l = qt()),
            (p = this),
            (d = m && (c || !g)),
            !1 === h)
          )
            var n = g && !c;
          else {
            o || g || (u = l);
            var f = h - (l - u),
              v = 0 >= f;
            v
              ? (o && (o = ft(o)), (u = l), (s = e.apply(p, r)))
              : o || (o = yt(i, f));
          }
          return (
            v && c ? (c = ft(c)) : c || t === h || (c = yt(a, t)),
            n && ((v = !0), (s = e.apply(p, r))),
            !v || c || o || (r = p = null),
            s
          );
        };
      }
      function qe(e) {
        return e;
      }
      function Ve(e, t, n) {
        var i = !0,
          a = t && be(t);
        (t && (n || a.length)) ||
          (null == n && (n = t), (r = K), (t = e), (e = Y), (a = be(t))),
          !1 === n ? (i = !1) : xe(n) && "chain" in n && (i = n.chain);
        var r = e,
          o = we(r);
        Le(a, function (n) {
          var a = (e[n] = t[n]);
          o &&
            (r.prototype[n] = function () {
              var t = this.__chain__,
                n = this.__wrapped__,
                o = [n];
              if ((bt.apply(o, arguments), (o = a.apply(e, o)), i || t)) {
                if (n === o && xe(o)) return this;
                (o = new r(o)), (o.__chain__ = t);
              }
              return o;
            });
        });
      }
      function Xe() {}
      function Ye(e) {
        return function (t) {
          return t[e];
        };
      }
      function Ke() {
        return this.__wrapped__;
      }
      n = n ? J.defaults(V.Object(), n, J.pick(V, D)) : V;
      var Qe = n.Array,
        Je = n.Boolean,
        Ze = n.Date,
        et = n.Function,
        tt = n.Math,
        nt = n.Number,
        it = n.Object,
        at = n.RegExp,
        rt = n.String,
        ot = n.TypeError,
        st = [],
        lt = it.prototype,
        pt = n._,
        ct = lt.toString,
        dt = at(
          "^" +
            rt(ct)
              .replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
              .replace(/toString| for [^\]]+/g, ".*?") +
            "$"
        ),
        ut = tt.ceil,
        ft = n.clearTimeout,
        ht = tt.floor,
        mt = et.prototype.toString,
        gt = fe((gt = it.getPrototypeOf)) && gt,
        vt = lt.hasOwnProperty,
        bt = st.push,
        yt = n.setTimeout,
        wt = st.splice,
        xt = st.unshift,
        Ct = (function () {
          try {
            var e = {},
              t = fe((t = it.defineProperty)) && t,
              n = t(e, e, e) && t;
          } catch (e) {}
          return n;
        })(),
        Tt = fe((Tt = it.create)) && Tt,
        St = fe((St = Qe.isArray)) && St,
        kt = n.isFinite,
        Et = n.isNaN,
        It = fe((It = it.keys)) && It,
        At = tt.max,
        Lt = tt.min,
        $t = n.parseInt,
        _t = tt.random,
        Dt = {};
      (Dt[P] = Qe),
        (Dt[M] = Je),
        (Dt[B] = Ze),
        (Dt[R] = et),
        (Dt[N] = it),
        (Dt[z] = nt),
        (Dt[j] = at),
        (Dt[H] = rt),
        (K.prototype = Y.prototype);
      var Ot = (Y.support = {});
      (Ot.funcDecomp = !fe(n.a) && $.test(u)),
        (Ot.funcNames = "string" == typeof et.name),
        (Y.templateSettings = {
          escape: /<%-([\s\S]+?)%>/g,
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: I,
          variable: "",
          imports: { _: Y },
        }),
        Tt ||
          (ee = (function () {
            function e() {}
            return function (t) {
              if (xe(t)) {
                e.prototype = t;
                var i = new e();
                e.prototype = null;
              }
              return i || n.Object();
            };
          })());
      var Pt = Ct
          ? function (e, t) {
              (U.value = t), Ct(e, "__bindData__", U);
            }
          : Xe,
        Mt =
          St ||
          function (e) {
            return (
              (e &&
                "object" == typeof e &&
                "number" == typeof e.length &&
                ct.call(e) == P) ||
              !1
            );
          },
        Bt = It
          ? function (e) {
              return xe(e) ? It(e) : [];
            }
          : X,
        Rt = {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        },
        zt = ye(Rt),
        Nt = at("(" + Bt(zt).join("|") + ")", "g"),
        jt = at("[" + Bt(Rt).join("") + "]", "g"),
        Ht = gt
          ? function (e) {
              if (!e || ct.call(e) != N) return !1;
              var t = e.valueOf,
                n = fe(t) && (n = gt(t)) && gt(n);
              return n ? e == n || gt(e) == n : he(e);
            }
          : he,
        Wt = pe(function (e, t, n) {
          vt.call(e, n) ? e[n]++ : (e[n] = 1);
        }),
        Ft = pe(function (e, t, n) {
          (vt.call(e, n) ? e[n] : (e[n] = [])).push(t);
        }),
        Ut = pe(function (e, t, n) {
          e[n] = t;
        }),
        Gt = _e,
        qt =
          (fe((qt = Ze.now)) && qt) ||
          function () {
            return new Ze().getTime();
          },
        Vt =
          8 == $t(w + "08")
            ? $t
            : function (e, t) {
                return $t(Te(e) ? e.replace(A, "") : e, t || 0);
              };
      return (
        (Y.after = function (e, t) {
          if (!we(t)) throw new ot();
          return function () {
            return 1 > --e ? t.apply(this, arguments) : void 0;
          };
        }),
        (Y.assign = q),
        (Y.at = function (e) {
          for (
            var t = arguments,
              n = -1,
              i = ae(t, !0, !1, 1),
              t = t[2] && t[2][t[1]] === e ? 1 : i.length,
              a = Qe(t);
            ++n < t;

          )
            a[n] = e[i[n]];
          return a;
        }),
        (Y.bind = Ue),
        (Y.bindAll = function (e) {
          for (
            var t = 1 < arguments.length ? ae(arguments, !0, !1, 1) : be(e),
              n = -1,
              i = t.length;
            ++n < i;

          ) {
            var a = t[n];
            e[a] = ce(e[a], 1, null, null, e);
          }
          return e;
        }),
        (Y.bindKey = function (e, t) {
          return 2 < arguments.length
            ? ce(t, 19, d(arguments, 2), null, e)
            : ce(t, 3, null, null, e);
        }),
        (Y.chain = function (e) {
          return (e = new K(e)), (e.__chain__ = !0), e;
        }),
        (Y.compact = function (e) {
          for (var t = -1, n = e ? e.length : 0, i = []; ++t < n; ) {
            var a = e[t];
            a && i.push(a);
          }
          return i;
        }),
        (Y.compose = function () {
          for (var e = arguments, t = e.length; t--; )
            if (!we(e[t])) throw new ot();
          return function () {
            for (var t = arguments, n = e.length; n--; )
              t = [e[n].apply(this, t)];
            return t[0];
          };
        }),
        (Y.constant = function (e) {
          return function () {
            return e;
          };
        }),
        (Y.countBy = Wt),
        (Y.create = function (e, t) {
          var n = ee(e);
          return t ? q(n, t) : n;
        }),
        (Y.createCallback = function (e, t, n) {
          var i = typeof e;
          if (null == e || "function" == i) return te(e, t, n);
          if ("object" != i) return Ye(e);
          var a = Bt(e),
            r = a[0],
            o = e[r];
          return 1 != a.length || o !== o || xe(o)
            ? function (t) {
                for (
                  var n = a.length, i = !1;
                  n-- && (i = re(t[a[n]], e[a[n]], null, !0));

                );
                return i;
              }
            : function (e) {
                return (e = e[r]), o === e && (0 !== o || 1 / o == 1 / e);
              };
        }),
        (Y.curry = function (e, t) {
          return (
            (t = "number" == typeof t ? t : +t || e.length),
            ce(e, 4, null, null, null, t)
          );
        }),
        (Y.debounce = Ge),
        (Y.defaults = y),
        (Y.defer = function (e) {
          if (!we(e)) throw new ot();
          var t = d(arguments, 1);
          return yt(function () {
            e.apply(f, t);
          }, 1);
        }),
        (Y.delay = function (e, t) {
          if (!we(e)) throw new ot();
          var n = d(arguments, 2);
          return yt(function () {
            e.apply(f, n);
          }, t);
        }),
        (Y.difference = function (e) {
          return ie(e, ae(arguments, !0, !0, 1));
        }),
        (Y.filter = Ie),
        (Y.flatten = function (e, t, n, i) {
          return (
            "boolean" != typeof t &&
              null != t &&
              ((i = n),
              (n = "function" != typeof t && i && i[t] === e ? null : t),
              (t = !1)),
            null != n && (e = _e(e, n, i)),
            ae(e, t)
          );
        }),
        (Y.forEach = Le),
        (Y.forEachRight = $e),
        (Y.forIn = m),
        (Y.forInRight = function (e, t, n) {
          var i = [];
          m(e, function (e, t) {
            i.push(t, e);
          });
          var a = i.length;
          for (t = te(t, n, 3); a-- && !1 !== t(i[a--], i[a], e); );
          return e;
        }),
        (Y.forOwn = h),
        (Y.forOwnRight = ve),
        (Y.functions = be),
        (Y.groupBy = Ft),
        (Y.indexBy = Ut),
        (Y.initial = function (e, t, n) {
          var i = 0,
            a = e ? e.length : 0;
          if ("number" != typeof t && null != t) {
            var r = a;
            for (t = Y.createCallback(t, n, 3); r-- && t(e[r], r, e); ) i++;
          } else i = null == t || n ? 1 : t || i;
          return d(e, 0, Lt(At(0, a - i), a));
        }),
        (Y.intersection = function () {
          for (
            var n = [],
              i = -1,
              a = arguments.length,
              o = s(),
              l = ue(),
              d = l === e,
              u = s();
            ++i < a;

          ) {
            var f = arguments[i];
            (Mt(f) || ge(f)) &&
              (n.push(f), o.push(d && f.length >= b && r(i ? n[i] : u)));
          }
          var d = n[0],
            h = -1,
            m = d ? d.length : 0,
            g = [];
          e: for (; ++h < m; ) {
            var v = o[0],
              f = d[h];
            if (0 > (v ? t(v, f) : l(u, f))) {
              for (i = a, (v || u).push(f); --i; )
                if (((v = o[i]), 0 > (v ? t(v, f) : l(n[i], f)))) continue e;
              g.push(f);
            }
          }
          for (; a--; ) (v = o[a]) && c(v);
          return p(o), p(u), g;
        }),
        (Y.invert = ye),
        (Y.invoke = function (e, t) {
          var n = d(arguments, 2),
            i = -1,
            a = "function" == typeof t,
            r = e ? e.length : 0,
            o = Qe("number" == typeof r ? r : 0);
          return (
            Le(e, function (e) {
              o[++i] = (a ? t : e[t]).apply(e, n);
            }),
            o
          );
        }),
        (Y.keys = Bt),
        (Y.map = _e),
        (Y.mapValues = function (e, t, n) {
          var i = {};
          return (
            (t = Y.createCallback(t, n, 3)),
            h(e, function (e, n, a) {
              i[n] = t(e, n, a);
            }),
            i
          );
        }),
        (Y.max = De),
        (Y.memoize = function (e, t) {
          function n() {
            var i = n.cache,
              a = t ? t.apply(this, arguments) : v + arguments[0];
            return vt.call(i, a) ? i[a] : (i[a] = e.apply(this, arguments));
          }
          if (!we(e)) throw new ot();
          return (n.cache = {}), n;
        }),
        (Y.merge = function (e) {
          var t = arguments,
            n = 2;
          if (!xe(e)) return e;
          if (
            ("number" != typeof t[2] && (n = t.length),
            3 < n && "function" == typeof t[n - 2])
          )
            var i = te(t[--n - 1], t[n--], 2);
          else 2 < n && "function" == typeof t[n - 1] && (i = t[--n]);
          for (var t = d(arguments, 1, n), a = -1, r = s(), o = s(); ++a < n; )
            oe(e, t[a], i, r, o);
          return p(r), p(o), e;
        }),
        (Y.min = function (e, t, n) {
          var a = 1 / 0,
            r = a;
          if (
            ("function" != typeof t && n && n[t] === e && (t = null),
            null == t && Mt(e))
          ) {
            n = -1;
            for (var o = e.length; ++n < o; ) {
              var s = e[n];
              s < r && (r = s);
            }
          } else
            (t = null == t && Te(e) ? i : Y.createCallback(t, n, 3)),
              Le(e, function (e, n, i) {
                (n = t(e, n, i)) < a && ((a = n), (r = e));
              });
          return r;
        }),
        (Y.omit = function (e, t, n) {
          var i = {};
          if ("function" != typeof t) {
            var a = [];
            m(e, function (e, t) {
              a.push(t);
            });
            for (
              var a = ie(a, ae(arguments, !0, !1, 1)), r = -1, o = a.length;
              ++r < o;

            ) {
              var s = a[r];
              i[s] = e[s];
            }
          } else
            (t = Y.createCallback(t, n, 3)),
              m(e, function (e, n, a) {
                t(e, n, a) || (i[n] = e);
              });
          return i;
        }),
        (Y.once = function (e) {
          var t, n;
          if (!we(e)) throw new ot();
          return function () {
            return t
              ? n
              : ((t = !0), (n = e.apply(this, arguments)), (e = null), n);
          };
        }),
        (Y.pairs = function (e) {
          for (var t = -1, n = Bt(e), i = n.length, a = Qe(i); ++t < i; ) {
            var r = n[t];
            a[t] = [r, e[r]];
          }
          return a;
        }),
        (Y.partial = function (e) {
          return ce(e, 16, d(arguments, 1));
        }),
        (Y.partialRight = function (e) {
          return ce(e, 32, null, d(arguments, 1));
        }),
        (Y.pick = function (e, t, n) {
          var i = {};
          if ("function" != typeof t)
            for (
              var a = -1,
                r = ae(arguments, !0, !1, 1),
                o = xe(e) ? r.length : 0;
              ++a < o;

            ) {
              var s = r[a];
              s in e && (i[s] = e[s]);
            }
          else
            (t = Y.createCallback(t, n, 3)),
              m(e, function (e, n, a) {
                t(e, n, a) && (i[n] = e);
              });
          return i;
        }),
        (Y.pluck = Gt),
        (Y.property = Ye),
        (Y.pull = function (e) {
          for (
            var t = arguments, n = 0, i = t.length, a = e ? e.length : 0;
            ++n < i;

          )
            for (var r = -1, o = t[n]; ++r < a; )
              e[r] === o && (wt.call(e, r--, 1), a--);
          return e;
        }),
        (Y.range = function (e, t, n) {
          (e = +e || 0),
            (n = "number" == typeof n ? n : +n || 1),
            null == t && ((t = e), (e = 0));
          var i = -1;
          t = At(0, ut((t - e) / (n || 1)));
          for (var a = Qe(t); ++i < t; ) (a[i] = e), (e += n);
          return a;
        }),
        (Y.reject = function (e, t, n) {
          return (
            (t = Y.createCallback(t, n, 3)),
            Ie(e, function (e, n, i) {
              return !t(e, n, i);
            })
          );
        }),
        (Y.remove = function (e, t, n) {
          var i = -1,
            a = e ? e.length : 0,
            r = [];
          for (t = Y.createCallback(t, n, 3); ++i < a; )
            (n = e[i]), t(n, i, e) && (r.push(n), wt.call(e, i--, 1), a--);
          return r;
        }),
        (Y.rest = Ne),
        (Y.shuffle = Me),
        (Y.sortBy = function (e, t, n) {
          var i = -1,
            r = Mt(t),
            o = e ? e.length : 0,
            d = Qe("number" == typeof o ? o : 0);
          for (
            r || (t = Y.createCallback(t, n, 3)),
              Le(e, function (e, n, a) {
                var o = (d[++i] = l());
                r
                  ? (o.m = _e(t, function (t) {
                      return e[t];
                    }))
                  : ((o.m = s())[0] = t(e, n, a)),
                  (o.n = i),
                  (o.o = e);
              }),
              o = d.length,
              d.sort(a);
            o--;

          )
            (e = d[o]), (d[o] = e.o), r || p(e.m), c(e);
          return d;
        }),
        (Y.tap = function (e, t) {
          return t(e), e;
        }),
        (Y.throttle = function (e, t, n) {
          var i = !0,
            a = !0;
          if (!we(e)) throw new ot();
          return (
            !1 === n
              ? (i = !1)
              : xe(n) &&
                ((i = "leading" in n ? n.leading : i),
                (a = "trailing" in n ? n.trailing : a)),
            (F.leading = i),
            (F.maxWait = t),
            (F.trailing = a),
            Ge(e, t, F)
          );
        }),
        (Y.times = function (e, t, n) {
          e = -1 < (e = +e) ? e : 0;
          var i = -1,
            a = Qe(e);
          for (t = te(t, n, 1); ++i < e; ) a[i] = t(i);
          return a;
        }),
        (Y.toArray = function (e) {
          return e && "number" == typeof e.length ? d(e) : Se(e);
        }),
        (Y.transform = function (e, t, n, i) {
          var a = Mt(e);
          if (null == n)
            if (a) n = [];
            else {
              var r = e && e.constructor;
              n = ee(r && r.prototype);
            }
          return (
            t &&
              ((t = Y.createCallback(t, i, 4)),
              (a ? Le : h)(e, function (e, i, a) {
                return t(n, e, i, a);
              })),
            n
          );
        }),
        (Y.union = function () {
          return le(ae(arguments, !0, !0));
        }),
        (Y.uniq = He),
        (Y.values = Se),
        (Y.where = Ie),
        (Y.without = function (e) {
          return ie(e, d(arguments, 1));
        }),
        (Y.wrap = function (e, t) {
          return ce(t, 16, [e]);
        }),
        (Y.xor = function () {
          for (var e = -1, t = arguments.length; ++e < t; ) {
            var n = arguments[e];
            if (Mt(n) || ge(n)) var i = i ? le(ie(i, n).concat(ie(n, i))) : n;
          }
          return i || [];
        }),
        (Y.zip = We),
        (Y.zipObject = Fe),
        (Y.collect = _e),
        (Y.drop = Ne),
        (Y.each = Le),
        (Y.eachRight = $e),
        (Y.extend = q),
        (Y.methods = be),
        (Y.object = Fe),
        (Y.select = Ie),
        (Y.tail = Ne),
        (Y.unique = He),
        (Y.unzip = We),
        Ve(Y),
        (Y.clone = function (e, t, n, i) {
          return (
            "boolean" != typeof t && null != t && ((i = n), (n = t), (t = !1)),
            Z(e, t, "function" == typeof n && te(n, i, 1))
          );
        }),
        (Y.cloneDeep = function (e, t, n) {
          return Z(e, !0, "function" == typeof t && te(t, n, 1));
        }),
        (Y.contains = ke),
        (Y.escape = function (e) {
          return null == e ? "" : rt(e).replace(jt, de);
        }),
        (Y.every = Ee),
        (Y.find = Ae),
        (Y.findIndex = function (e, t, n) {
          var i = -1,
            a = e ? e.length : 0;
          for (t = Y.createCallback(t, n, 3); ++i < a; )
            if (t(e[i], i, e)) return i;
          return -1;
        }),
        (Y.findKey = function (e, t, n) {
          var i;
          return (
            (t = Y.createCallback(t, n, 3)),
            h(e, function (e, n, a) {
              return t(e, n, a) ? ((i = n), !1) : void 0;
            }),
            i
          );
        }),
        (Y.findLast = function (e, t, n) {
          var i;
          return (
            (t = Y.createCallback(t, n, 3)),
            $e(e, function (e, n, a) {
              return t(e, n, a) ? ((i = e), !1) : void 0;
            }),
            i
          );
        }),
        (Y.findLastIndex = function (e, t, n) {
          var i = e ? e.length : 0;
          for (t = Y.createCallback(t, n, 3); i--; )
            if (t(e[i], i, e)) return i;
          return -1;
        }),
        (Y.findLastKey = function (e, t, n) {
          var i;
          return (
            (t = Y.createCallback(t, n, 3)),
            ve(e, function (e, n, a) {
              return t(e, n, a) ? ((i = n), !1) : void 0;
            }),
            i
          );
        }),
        (Y.has = function (e, t) {
          return !!e && vt.call(e, t);
        }),
        (Y.identity = qe),
        (Y.indexOf = ze),
        (Y.isArguments = ge),
        (Y.isArray = Mt),
        (Y.isBoolean = function (e) {
          return (
            !0 === e ||
            !1 === e ||
            (e && "object" == typeof e && ct.call(e) == M) ||
            !1
          );
        }),
        (Y.isDate = function (e) {
          return (e && "object" == typeof e && ct.call(e) == B) || !1;
        }),
        (Y.isElement = function (e) {
          return (e && 1 === e.nodeType) || !1;
        }),
        (Y.isEmpty = function (e) {
          var t = !0;
          if (!e) return t;
          var n = ct.call(e),
            i = e.length;
          return n == P ||
            n == H ||
            n == O ||
            (n == N && "number" == typeof i && we(e.splice))
            ? !i
            : (h(e, function () {
                return (t = !1);
              }),
              t);
        }),
        (Y.isEqual = function (e, t, n, i) {
          return re(e, t, "function" == typeof n && te(n, i, 2));
        }),
        (Y.isFinite = function (e) {
          return kt(e) && !Et(parseFloat(e));
        }),
        (Y.isFunction = we),
        (Y.isNaN = function (e) {
          return Ce(e) && e != +e;
        }),
        (Y.isNull = function (e) {
          return null === e;
        }),
        (Y.isNumber = Ce),
        (Y.isObject = xe),
        (Y.isPlainObject = Ht),
        (Y.isRegExp = function (e) {
          return (e && "object" == typeof e && ct.call(e) == j) || !1;
        }),
        (Y.isString = Te),
        (Y.isUndefined = function (e) {
          return void 0 === e;
        }),
        (Y.lastIndexOf = function (e, t, n) {
          var i = e ? e.length : 0;
          for (
            "number" == typeof n &&
            (i = (0 > n ? At(0, i + n) : Lt(n, i - 1)) + 1);
            i--;

          )
            if (e[i] === t) return i;
          return -1;
        }),
        (Y.mixin = Ve),
        (Y.noConflict = function () {
          return (n._ = pt), this;
        }),
        (Y.noop = Xe),
        (Y.now = qt),
        (Y.parseInt = Vt),
        (Y.random = function (e, t, n) {
          var i = null == e,
            a = null == t;
          return (
            null == n &&
              ("boolean" == typeof e && a
                ? ((n = e), (e = 1))
                : a || "boolean" != typeof t || ((n = t), (a = !0))),
            i && a && (t = 1),
            (e = +e || 0),
            a ? ((t = e), (e = 0)) : (t = +t || 0),
            n || e % 1 || t % 1
              ? ((n = _t()),
                Lt(
                  e + n * (t - e + parseFloat("1e-" + ((n + "").length - 1))),
                  t
                ))
              : se(e, t)
          );
        }),
        (Y.reduce = Oe),
        (Y.reduceRight = Pe),
        (Y.result = function (e, t) {
          if (e) {
            var n = e[t];
            return we(n) ? e[t]() : n;
          }
        }),
        (Y.runInContext = u),
        (Y.size = function (e) {
          var t = e ? e.length : 0;
          return "number" == typeof t ? t : Bt(e).length;
        }),
        (Y.some = Be),
        (Y.sortedIndex = je),
        (Y.template = function (e, t, n) {
          var i = Y.templateSettings;
          (e = rt(e || "")), (n = y({}, n, i));
          var a,
            r = y({}, n.imports, i.imports),
            i = Bt(r),
            r = Se(r),
            s = 0,
            l = n.interpolate || L,
            p = "__p+='",
            l = at(
              (n.escape || L).source +
                "|" +
                l.source +
                "|" +
                (l === I ? S : L).source +
                "|" +
                (n.evaluate || L).source +
                "|$",
              "g"
            );
          e.replace(l, function (t, n, i, r, l, c) {
            return (
              i || (i = r),
              (p += e.slice(s, c).replace(_, o)),
              n && (p += "'+__e(" + n + ")+'"),
              l && ((a = !0), (p += "';" + l + ";\n__p+='")),
              i && (p += "'+((__t=(" + i + "))==null?'':__t)+'"),
              (s = c + t.length),
              t
            );
          }),
            (p += "';"),
            (l = n = n.variable),
            l || ((n = "obj"), (p = "with(" + n + "){" + p + "}")),
            (p = (a ? p.replace(x, "") : p).replace(C, "$1").replace(T, "$1;")),
            (p =
              "function(" +
              n +
              "){" +
              (l ? "" : n + "||(" + n + "={});") +
              "var __t,__p='',__e=_.escape" +
              (a
                ? ",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}"
                : ";") +
              p +
              "return __p}");
          try {
            var c = et(i, "return " + p).apply(f, r);
          } catch (e) {
            throw ((e.source = p), e);
          }
          return t ? c(t) : ((c.source = p), c);
        }),
        (Y.unescape = function (e) {
          return null == e ? "" : rt(e).replace(Nt, me);
        }),
        (Y.uniqueId = function (e) {
          var t = ++g;
          return rt(null == e ? "" : e) + t;
        }),
        (Y.all = Ee),
        (Y.any = Be),
        (Y.detect = Ae),
        (Y.findWhere = Ae),
        (Y.foldl = Oe),
        (Y.foldr = Pe),
        (Y.include = ke),
        (Y.inject = Oe),
        Ve(
          (function () {
            var e = {};
            return (
              h(Y, function (t, n) {
                Y.prototype[n] || (e[n] = t);
              }),
              e
            );
          })(),
          !1
        ),
        (Y.first = Re),
        (Y.last = function (e, t, n) {
          var i = 0,
            a = e ? e.length : 0;
          if ("number" != typeof t && null != t) {
            var r = a;
            for (t = Y.createCallback(t, n, 3); r-- && t(e[r], r, e); ) i++;
          } else if (null == (i = t) || n) return e ? e[a - 1] : f;
          return d(e, At(0, a - i));
        }),
        (Y.sample = function (e, t, n) {
          return (
            e && "number" != typeof e.length && (e = Se(e)),
            null == t || n
              ? e
                ? e[se(0, e.length - 1)]
                : f
              : ((e = Me(e)), (e.length = Lt(At(0, t), e.length)), e)
          );
        }),
        (Y.take = Re),
        (Y.head = Re),
        h(Y, function (e, t) {
          var n = "sample" !== t;
          Y.prototype[t] ||
            (Y.prototype[t] = function (t, i) {
              var a = this.__chain__,
                r = e(this.__wrapped__, t, i);
              return a || (null != t && (!i || (n && "function" == typeof t)))
                ? new K(r, a)
                : r;
            });
        }),
        (Y.VERSION = "2.4.1"),
        (Y.prototype.chain = function () {
          return (this.__chain__ = !0), this;
        }),
        (Y.prototype.toString = function () {
          return rt(this.__wrapped__);
        }),
        (Y.prototype.value = Ke),
        (Y.prototype.valueOf = Ke),
        Le(["join", "pop", "shift"], function (e) {
          var t = st[e];
          Y.prototype[e] = function () {
            var e = this.__chain__,
              n = t.apply(this.__wrapped__, arguments);
            return e ? new K(n, e) : n;
          };
        }),
        Le(["push", "reverse", "sort", "unshift"], function (e) {
          var t = st[e];
          Y.prototype[e] = function () {
            return t.apply(this.__wrapped__, arguments), this;
          };
        }),
        Le(["concat", "slice", "splice"], function (e) {
          var t = st[e];
          Y.prototype[e] = function () {
            return new K(t.apply(this.__wrapped__, arguments), this.__chain__);
          };
        }),
        Y
      );
    }
    var f,
      h = [],
      m = [],
      g = 0,
      v = +new Date() + "",
      b = 75,
      y = 40,
      w = " \t\v\f \ufeff\n\r\u2028\u2029 ᠎             　",
      x = /\b__p\+='';/g,
      C = /\b(__p\+=)''\+/g,
      T = /(__e\(.*?\)|\b__t\))\+'';/g,
      S = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
      k = /\w*$/,
      E = /^\s*function[ \n\r\t]+\w/,
      I = /<%=([\s\S]+?)%>/g,
      A = RegExp("^[" + w + "]*0+(?=.$)"),
      L = /($^)/,
      $ = /\bthis\b/,
      _ = /['\n\r\t\u2028\u2029\\]/g,
      D =
        "Array Boolean Date Function Math Number Object RegExp String _ attachEvent clearTimeout isFinite isNaN parseInt setTimeout".split(
          " "
        ),
      O = "[object Arguments]",
      P = "[object Array]",
      M = "[object Boolean]",
      B = "[object Date]",
      R = "[object Function]",
      z = "[object Number]",
      N = "[object Object]",
      j = "[object RegExp]",
      H = "[object String]",
      W = {};
    (W[R] = !1), (W[O] = W[P] = W[M] = W[B] = W[z] = W[N] = W[j] = W[H] = !0);
    var F = { leading: !1, maxWait: 0, trailing: !1 },
      U = { configurable: !1, enumerable: !1, value: null, writable: !1 },
      G = {
        boolean: !1,
        function: !0,
        object: !0,
        number: !1,
        string: !1,
        undefined: !1,
      },
      q = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\t": "t",
        "\u2028": "u2028",
        "\u2029": "u2029",
      },
      V = (G[typeof window] && window) || this,
      X = G[typeof exports] && exports && !exports.nodeType && exports,
      Y = G[typeof module] && module && !module.nodeType && module,
      K = Y && Y.exports === X && X,
      Q = G[typeof global] && global;
    !Q || (Q.global !== Q && Q.window !== Q) || (V = Q);
    var J = u();
    "function" == typeof define && "object" == typeof define.amd && define.amd
      ? ((V._ = J),
        define("underscore", [], function () {
          return J;
        }))
      : X && Y
      ? K
        ? ((Y.exports = J)._ = J)
        : (X._ = J)
      : (V._ = J);
  }.call(this),
  define("lib-build/tpl", {
    load: function (e) {
      throw new Error("Dynamic load not allowed: " + e);
    },
  }),
  define(
    "lib-build/tpl!storymaps/common/ui/share/ShareDialog",
    [],
    function () {
      return function (obj) {
        obj || (obj = {});
        var __t,
          __p = "",
          __e = _.escape;
        with (obj)
          __p +=
            '<div class="modal-dialog">\n\t<div class="modal-content">\n\t\t<div class="modal-logo"></div>\n\t\t<div class="modal-header">\n\t\t\t<span class="modal-title"></span>\n\t\t</div>\n\n\t\t<div class="modal-body">\n\t\t\t<div class="social-container">\n\t\t\t\t<i class="shareIcon blackHover share_facebook icon-facebook-squared"></i>\n\t\t\t\t<i class="shareIcon blackHover share_twitter icon-twitter"></i>\n\t\t\t</div>\n\n\t\t\t<div class="share-url-panel"></div>\n\n\t\t\t<div class="embed-title"></div>\n\t\t\t<div class="share-embed-panel"></div>\n\n\t\t\t<div class="checkbox autoplay-container">\n\t\t\t\t<label>\n\t\t\t\t\t<input type="checkbox" class="autoplay-checkbox" value="autoplay" />\n\t\t\t\t\t<span class="autoplay-label"></span>\n\t\t\t\t</label>\n\t\t\t\t<a href="#" class="help autoplay-help" data-toggle="tooltip">\n\t\t\t\t\t<img src="resources/tpl/builder/icons/builder-help.png" style="vertical-align: -5px;"/>\n\t\t\t\t</a>\n\t\t\t\t<span class="autoplay-notification"></span>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class="modal-footer">\n\t\t\t<button type="button" class="btn btnCancel btn-naked btn-close" data-dismiss="modal"></button>\n\t\t</div>\n\t</div>\n</div>\n';
        return __p;
      };
    }
  ),
  define(
    "lib-build/css!storymaps/common/ui/share/ShareDialog",
    [],
    function () {}
  ),
  define(
    "lib-build/tpl!storymaps/common/ui/share/ShareURLPanel",
    [],
    function () {
      return function (obj) {
        obj || (obj = {});
        var __t,
          __p = "",
          __e = _.escape;
        with (obj)
          __p +=
            '<div class="share-url-container">\n\t<span class="share-btn share-clipboard"></span>\n\t<input type="text" class="form-control bitlylink" readonly="true"/>\n\t<a class="btn btn-primary btn-bitlylink-open" target="_blank"></a>\n\t<div class="share-status-wrapper"><span class="share-status"></span></div>\n</div>\n';
        return __p;
      };
    }
  ),
  define(
    "lib-build/css!storymaps/common/ui/share/ShareURLPanel",
    [],
    function () {}
  ),
  (function (e) {
    if ("object" == typeof exports && "undefined" != typeof module)
      module.exports = e();
    else if ("function" == typeof define && define.amd)
      define("lib-app/clipboard/clipboard", [], e);
    else {
      var t;
      (t =
        "undefined" != typeof window
          ? window
          : "undefined" != typeof global
          ? global
          : "undefined" != typeof self
          ? self
          : this),
        (t.Clipboard = e());
    }
  })(function () {
    var e;
    return (function e(t, n, i) {
      function a(o, s) {
        if (!n[o]) {
          if (!t[o]) {
            var l = "function" == typeof require && require;
            if (!s && l) return l(o, !0);
            if (r) return r(o, !0);
            var p = new Error("Cannot find module '" + o + "'");
            throw ((p.code = "MODULE_NOT_FOUND"), p);
          }
          var c = (n[o] = { exports: {} });
          t[o][0].call(
            c.exports,
            function (e) {
              var n = t[o][1][e];
              return a(n || e);
            },
            c,
            c.exports,
            e,
            t,
            n,
            i
          );
        }
        return n[o].exports;
      }
      for (
        var r = "function" == typeof require && require, o = 0;
        o < i.length;
        o++
      )
        a(i[o]);
      return a;
    })(
      {
        1: [
          function (e, t, n) {
            function i(e, t) {
              for (; e && e !== document; ) {
                if (e.matches(t)) return e;
                e = e.parentNode;
              }
            }
            if (Element && !Element.prototype.matches) {
              var a = Element.prototype;
              a.matches =
                a.matchesSelector ||
                a.mozMatchesSelector ||
                a.msMatchesSelector ||
                a.oMatchesSelector ||
                a.webkitMatchesSelector;
            }
            t.exports = i;
          },
          {},
        ],
        2: [
          function (e, t, n) {
            function i(e, t, n, i, r) {
              var o = a.apply(this, arguments);
              return (
                e.addEventListener(n, o, r),
                {
                  destroy: function () {
                    e.removeEventListener(n, o, r);
                  },
                }
              );
            }
            function a(e, t, n, i) {
              return function (n) {
                (n.delegateTarget = r(n.target, t)),
                  n.delegateTarget && i.call(e, n);
              };
            }
            var r = e("./closest");
            t.exports = i;
          },
          { "./closest": 1 },
        ],
        3: [
          function (e, t, n) {
            (n.node = function (e) {
              return (
                void 0 !== e && e instanceof HTMLElement && 1 === e.nodeType
              );
            }),
              (n.nodeList = function (e) {
                var t = Object.prototype.toString.call(e);
                return (
                  void 0 !== e &&
                  ("[object NodeList]" === t ||
                    "[object HTMLCollection]" === t) &&
                  "length" in e &&
                  (0 === e.length || n.node(e[0]))
                );
              }),
              (n.string = function (e) {
                return "string" == typeof e || e instanceof String;
              }),
              (n.fn = function (e) {
                return (
                  "[object Function]" === Object.prototype.toString.call(e)
                );
              });
          },
          {},
        ],
        4: [
          function (e, t, n) {
            function i(e, t, n) {
              if (!e && !t && !n) throw new Error("Missing required arguments");
              if (!s.string(t))
                throw new TypeError("Second argument must be a String");
              if (!s.fn(n))
                throw new TypeError("Third argument must be a Function");
              if (s.node(e)) return a(e, t, n);
              if (s.nodeList(e)) return r(e, t, n);
              if (s.string(e)) return o(e, t, n);
              throw new TypeError(
                "First argument must be a String, HTMLElement, HTMLCollection, or NodeList"
              );
            }
            function a(e, t, n) {
              return (
                e.addEventListener(t, n),
                {
                  destroy: function () {
                    e.removeEventListener(t, n);
                  },
                }
              );
            }
            function r(e, t, n) {
              return (
                Array.prototype.forEach.call(e, function (e) {
                  e.addEventListener(t, n);
                }),
                {
                  destroy: function () {
                    Array.prototype.forEach.call(e, function (e) {
                      e.removeEventListener(t, n);
                    });
                  },
                }
              );
            }
            function o(e, t, n) {
              return l(document.body, e, t, n);
            }
            var s = e("./is"),
              l = e("delegate");
            t.exports = i;
          },
          { "./is": 3, delegate: 2 },
        ],
        5: [
          function (e, t, n) {
            function i(e) {
              var t;
              if ("SELECT" === e.nodeName) e.focus(), (t = e.value);
              else if ("INPUT" === e.nodeName || "TEXTAREA" === e.nodeName)
                e.focus(),
                  e.setSelectionRange(0, e.value.length),
                  (t = e.value);
              else {
                e.hasAttribute("contenteditable") && e.focus();
                var n = window.getSelection(),
                  i = document.createRange();
                i.selectNodeContents(e),
                  n.removeAllRanges(),
                  n.addRange(i),
                  (t = n.toString());
              }
              return t;
            }
            t.exports = i;
          },
          {},
        ],
        6: [
          function (e, t, n) {
            function i() {}
            (i.prototype = {
              on: function (e, t, n) {
                var i = this.e || (this.e = {});
                return (i[e] || (i[e] = [])).push({ fn: t, ctx: n }), this;
              },
              once: function (e, t, n) {
                function i() {
                  a.off(e, i), t.apply(n, arguments);
                }
                var a = this;
                return (i._ = t), this.on(e, i, n);
              },
              emit: function (e) {
                var t = [].slice.call(arguments, 1),
                  n = ((this.e || (this.e = {}))[e] || []).slice(),
                  i = 0,
                  a = n.length;
                for (i; i < a; i++) n[i].fn.apply(n[i].ctx, t);
                return this;
              },
              off: function (e, t) {
                var n = this.e || (this.e = {}),
                  i = n[e],
                  a = [];
                if (i && t)
                  for (var r = 0, o = i.length; r < o; r++)
                    i[r].fn !== t && i[r].fn._ !== t && a.push(i[r]);
                return a.length ? (n[e] = a) : delete n[e], this;
              },
            }),
              (t.exports = i);
          },
          {},
        ],
        7: [
          function (t, n, i) {
            !(function (a, r) {
              if ("function" == typeof e && e.amd) e(["module", "select"], r);
              else if (void 0 !== i) r(n, t("select"));
              else {
                var o = { exports: {} };
                r(o, a.select), (a.clipboardAction = o.exports);
              }
            })(this, function (e, t) {
              "use strict";
              function n(e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              }
              var i = (function (e) {
                  return e && e.__esModule ? e : { default: e };
                })(t),
                a =
                  "function" == typeof Symbol &&
                  "symbol" == typeof Symbol.iterator
                    ? function (e) {
                        return typeof e;
                      }
                    : function (e) {
                        return e &&
                          "function" == typeof Symbol &&
                          e.constructor === Symbol &&
                          e !== Symbol.prototype
                          ? "symbol"
                          : typeof e;
                      },
                r = (function () {
                  function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                      var i = t[n];
                      (i.enumerable = i.enumerable || !1),
                        (i.configurable = !0),
                        "value" in i && (i.writable = !0),
                        Object.defineProperty(e, i.key, i);
                    }
                  }
                  return function (t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t;
                  };
                })(),
                o = (function () {
                  function e(t) {
                    n(this, e), this.resolveOptions(t), this.initSelection();
                  }
                  return (
                    r(e, [
                      {
                        key: "resolveOptions",
                        value: function () {
                          var e =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : {};
                          (this.action = e.action),
                            (this.emitter = e.emitter),
                            (this.target = e.target),
                            (this.text = e.text),
                            (this.trigger = e.trigger),
                            (this.selectedText = "");
                        },
                      },
                      {
                        key: "initSelection",
                        value: function () {
                          this.text
                            ? this.selectFake()
                            : this.target && this.selectTarget();
                        },
                      },
                      {
                        key: "selectFake",
                        value: function () {
                          var e = this,
                            t =
                              "rtl" ==
                              document.documentElement.getAttribute("dir");
                          this.removeFake(),
                            (this.fakeHandlerCallback = function () {
                              return e.removeFake();
                            }),
                            (this.fakeHandler =
                              document.body.addEventListener(
                                "click",
                                this.fakeHandlerCallback
                              ) || !0),
                            (this.fakeElem =
                              document.createElement("textarea")),
                            (this.fakeElem.style.fontSize = "12pt"),
                            (this.fakeElem.style.border = "0"),
                            (this.fakeElem.style.padding = "0"),
                            (this.fakeElem.style.margin = "0"),
                            (this.fakeElem.style.position = "absolute"),
                            (this.fakeElem.style[t ? "right" : "left"] =
                              "-9999px");
                          var n =
                            window.pageYOffset ||
                            document.documentElement.scrollTop;
                          this.fakeElem.addEventListener(
                            "focus",
                            window.scrollTo(0, n)
                          ),
                            (this.fakeElem.style.top = n + "px"),
                            this.fakeElem.setAttribute("readonly", ""),
                            (this.fakeElem.value = this.text),
                            document.body.appendChild(this.fakeElem),
                            (this.selectedText = (0, i.default)(this.fakeElem)),
                            this.copyText();
                        },
                      },
                      {
                        key: "removeFake",
                        value: function () {
                          this.fakeHandler &&
                            (document.body.removeEventListener(
                              "click",
                              this.fakeHandlerCallback
                            ),
                            (this.fakeHandler = null),
                            (this.fakeHandlerCallback = null)),
                            this.fakeElem &&
                              (document.body.removeChild(this.fakeElem),
                              (this.fakeElem = null));
                        },
                      },
                      {
                        key: "selectTarget",
                        value: function () {
                          (this.selectedText = (0, i.default)(this.target)),
                            this.copyText();
                        },
                      },
                      {
                        key: "copyText",
                        value: function () {
                          var e = void 0;
                          try {
                            e = document.execCommand(this.action);
                          } catch (t) {
                            e = !1;
                          }
                          this.handleResult(e);
                        },
                      },
                      {
                        key: "handleResult",
                        value: function (e) {
                          this.emitter.emit(e ? "success" : "error", {
                            action: this.action,
                            text: this.selectedText,
                            trigger: this.trigger,
                            clearSelection: this.clearSelection.bind(this),
                          });
                        },
                      },
                      {
                        key: "clearSelection",
                        value: function () {
                          this.target && this.target.blur(),
                            window.getSelection().removeAllRanges();
                        },
                      },
                      {
                        key: "destroy",
                        value: function () {
                          this.removeFake();
                        },
                      },
                      {
                        key: "action",
                        set: function () {
                          var e =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : "copy";
                          if (
                            ((this._action = e),
                            "copy" !== this._action && "cut" !== this._action)
                          )
                            throw new Error(
                              'Invalid "action" value, use either "copy" or "cut"'
                            );
                        },
                        get: function () {
                          return this._action;
                        },
                      },
                      {
                        key: "target",
                        set: function (e) {
                          if (void 0 !== e) {
                            if (
                              !e ||
                              "object" !==
                                (void 0 === e ? "undefined" : a(e)) ||
                              1 !== e.nodeType
                            )
                              throw new Error(
                                'Invalid "target" value, use a valid Element'
                              );
                            if (
                              "copy" === this.action &&
                              e.hasAttribute("disabled")
                            )
                              throw new Error(
                                'Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute'
                              );
                            if (
                              "cut" === this.action &&
                              (e.hasAttribute("readonly") ||
                                e.hasAttribute("disabled"))
                            )
                              throw new Error(
                                'Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes'
                              );
                            this._target = e;
                          }
                        },
                        get: function () {
                          return this._target;
                        },
                      },
                    ]),
                    e
                  );
                })();
              e.exports = o;
            });
          },
          { select: 5 },
        ],
        8: [
          function (t, n, i) {
            !(function (a, r) {
              if ("function" == typeof e && e.amd)
                e(
                  [
                    "module",
                    "./clipboard-action",
                    "tiny-emitter",
                    "good-listener",
                  ],
                  r
                );
              else if (void 0 !== i)
                r(
                  n,
                  t("./clipboard-action"),
                  t("tiny-emitter"),
                  t("good-listener")
                );
              else {
                var o = { exports: {} };
                r(o, a.clipboardAction, a.tinyEmitter, a.goodListener),
                  (a.clipboard = o.exports);
              }
            })(this, function (e, t, n, i) {
              "use strict";
              function a(e) {
                return e && e.__esModule ? e : { default: e };
              }
              function r(e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              }
              function o(e, t) {
                if (!e)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return !t || ("object" != typeof t && "function" != typeof t)
                  ? e
                  : t;
              }
              function s(e, t) {
                if ("function" != typeof t && null !== t)
                  throw new TypeError(
                    "Super expression must either be null or a function, not " +
                      typeof t
                  );
                (e.prototype = Object.create(t && t.prototype, {
                  constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                  t &&
                    (Object.setPrototypeOf
                      ? Object.setPrototypeOf(e, t)
                      : (e.__proto__ = t));
              }
              function l(e, t) {
                var n = "data-clipboard-" + e;
                if (t.hasAttribute(n)) return t.getAttribute(n);
              }
              var p = a(t),
                c = a(n),
                d = a(i),
                u = (function () {
                  function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                      var i = t[n];
                      (i.enumerable = i.enumerable || !1),
                        (i.configurable = !0),
                        "value" in i && (i.writable = !0),
                        Object.defineProperty(e, i.key, i);
                    }
                  }
                  return function (t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t;
                  };
                })(),
                f = (function (e) {
                  function t(e, n) {
                    r(this, t);
                    var i = o(
                      this,
                      (t.__proto__ || Object.getPrototypeOf(t)).call(this)
                    );
                    return i.resolveOptions(n), i.listenClick(e), i;
                  }
                  return (
                    s(t, e),
                    u(t, [
                      {
                        key: "resolveOptions",
                        value: function () {
                          var e =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : {};
                          (this.action =
                            "function" == typeof e.action
                              ? e.action
                              : this.defaultAction),
                            (this.target =
                              "function" == typeof e.target
                                ? e.target
                                : this.defaultTarget),
                            (this.text =
                              "function" == typeof e.text
                                ? e.text
                                : this.defaultText);
                        },
                      },
                      {
                        key: "listenClick",
                        value: function (e) {
                          var t = this;
                          this.listener = (0, d.default)(
                            e,
                            "click",
                            function (e) {
                              return t.onClick(e);
                            }
                          );
                        },
                      },
                      {
                        key: "onClick",
                        value: function (e) {
                          var t = e.delegateTarget || e.currentTarget;
                          this.clipboardAction && (this.clipboardAction = null),
                            (this.clipboardAction = new p.default({
                              action: this.action(t),
                              target: this.target(t),
                              text: this.text(t),
                              trigger: t,
                              emitter: this,
                            }));
                        },
                      },
                      {
                        key: "defaultAction",
                        value: function (e) {
                          return l("action", e);
                        },
                      },
                      {
                        key: "defaultTarget",
                        value: function (e) {
                          var t = l("target", e);
                          if (t) return document.querySelector(t);
                        },
                      },
                      {
                        key: "defaultText",
                        value: function (e) {
                          return l("text", e);
                        },
                      },
                      {
                        key: "destroy",
                        value: function () {
                          this.listener.destroy(),
                            this.clipboardAction &&
                              (this.clipboardAction.destroy(),
                              (this.clipboardAction = null));
                        },
                      },
                    ]),
                    t
                  );
                })(c.default);
              e.exports = f;
            });
          },
          { "./clipboard-action": 7, "good-listener": 4, "tiny-emitter": 6 },
        ],
      },
      {},
      [8]
    )(8);
  }),
  define(
    "lib-build/css!storymaps/common/_resources/font/builder-share/css/share-font",
    [],
    function () {}
  ),
  define(
    "storymaps/common/ui/share/ShareURLPanel",
    [
      "lib-build/tpl!./ShareURLPanel",
      "lib-build/css!./ShareURLPanel",
      "../../utils/SocialSharing",
      "lib-app/clipboard/clipboard",
      "lib-build/css!storymaps/common/_resources/font/builder-share/css/share-font.css",
    ],
    function (e, t, n, i) {
      return function (t) {
        function a(e, a) {
          o.val(e),
            t.find(".btn-bitlylink-open").attr("href", e),
            n.requestShortUrl(e).then(function (e) {
              o.val(e), (void 0 !== a && !0 !== a) || o.select();
            }),
            new i(t.find(".share-btn").get(0), {
              text: function () {
                return t.find(".bitlylink").val();
              },
            }).on("success", function () {
              t
                .find(".share-btn")
                .removeClass("share-clipboard")
                .addClass("share-ok"),
                t.find(".share-status").show(),
                (t.find(".bitlylink")[0].selectionStart = t.find(
                  ".bitlylink"
                )[0].selectionEnd =
                  -1),
                t.find(".bitlylink").focus(),
                setTimeout(function () {
                  t
                    .find(".share-btn")
                    .addClass("share-clipboard")
                    .removeClass("share-ok"),
                    t.find(".share-status").hide();
                }, 2e3);
            });
        }
        var r = document.queryCommandSupported("copy");
        t.append(e({}));
        var o = t.find(".bitlylink"),
          s = null;
        !(function () {
          t.find(".bitlylink").click(function () {
            this.setSelectionRange(0, this.value.length);
          });
        })(),
          (this.present = function (e, i) {
            (s = n.cleanURL(e, !0)),
              a(s, i),
              t
                .find(".btn-bitlylink-open")
                .html(i18n.viewer.shareFromCommon.open),
              t.find(".share-url-container").toggleClass("touch", !r),
              t
                .find(".share-btn")
                .attr("title", i18n.viewer.shareFromCommon.copy),
              t.find(".share-status").html(i18n.viewer.shareFromCommon.copied);
          }),
          (this.focus = function () {
            o.select();
          }),
          (this.setAutoplay = function (e) {
            var t = s;
            e && ((t += t.match(/\?/) ? "&" : "?"), (t += "autoplay")), a(t);
          });
      };
    }
  ),
  define(
    "lib-build/tpl!storymaps/common/ui/share/ShareEmbedPanel",
    [],
    function () {
      return function (obj) {
        obj || (obj = {});
        var __t,
          __p = "",
          __e = _.escape;
        with (obj)
          __p +=
            '<div class="share-embed-container">\n\t<div class="embed-explain"></div>\n\n\t<div class="share-embed-wrapper">\n\t\t<div class="share-btn share-clipboard"></div>\n\t\t<textarea class="form-control embedTextarea" readonly="true"></textarea>\n\t</div>\n\t<div class="share-status-wrapper"><span class="share-status"></span></div>\n\n\t<div>\n\t\t<span class="embed-lbl-size"></span>\n\t\t<div class="btn-group">\n\t\t\t<button class="btn btn-default btn-sm dropdown-toggle" type="button" data-toggle="dropdown">\n\t\t\t\t<span class="embed-sizes-btn"></span>&nbsp;<span class="caret"></span>\n\t\t\t</button>\n\t\t\t<ul class="dropdown-menu embed-sizes" role="menu"></ul>\n\t\t</div>\n\t</div>\n</div>\n';
        return __p;
      };
    }
  ),
  define(
    "lib-build/css!storymaps/common/ui/share/ShareEmbedPanel",
    [],
    function () {}
  ),
  define(
    "storymaps/common/ui/share/ShareEmbedPanel",
    [
      "lib-build/tpl!./ShareEmbedPanel",
      "lib-build/css!./ShareEmbedPanel",
      "lib-app/clipboard/clipboard",
      "lib-build/css!storymaps/common/_resources/font/builder-share/css/share-font.css",
    ],
    function (e, t, n) {
      return function (t) {
        function i(e, i) {
          t
            .find(".embedTextarea")
            .val(
              a.replace("%URL%", o).replace("%WIDTH%", e).replace("%HEIGHT%", i)
            ),
            new n(t.find(".share-btn").get(0), {
              text: function () {
                return t.find(".embedTextarea").val();
              },
            }).on("success", function () {
              t
                .find(".share-btn")
                .removeClass("share-clipboard")
                .addClass("share-ok"),
                t.find(".share-status").show(),
                (t.find(".embedTextarea")[0].selectionStart = t.find(
                  ".embedTextarea"
                )[0].selectionEnd =
                  -1),
                t.find(".bitlylink").focus(),
                setTimeout(function () {
                  t
                    .find(".share-btn")
                    .addClass("share-clipboard")
                    .removeClass("share-ok"),
                    t.find(".share-status").hide();
                }, 2e3);
            });
        }
        var a =
            '<iframe width="%WIDTH%" height="%HEIGHT%" src="%URL%" frameborder="0" scrolling="no"></iframe>',
          r = [
            { width: "100%", height: "800px" },
            { width: "100%", height: "640px" },
            { width: "800px", height: "600px" },
            { width: "640px", height: "480px" },
          ],
          o = null,
          s = null;
        t.append(e({})),
          (function () {
            $.each(r, function (e, n) {
              t.find(".embed-sizes").append(
                '<li><a data-width="' +
                  n.width +
                  '" data-height="' +
                  n.height +
                  '">' +
                  n.width +
                  " / " +
                  n.height +
                  "</a></li>"
              );
            }),
              t.find(".embed-sizes a").click(function () {
                var e = $(this);
                e.parents(".btn-group").find(".embed-sizes-btn").text(e.text()),
                  i(e.data("width"), e.data("height"));
              });
          })(),
          (function () {
            t.find(".embedTextarea").click(function () {
              this.setSelectionRange(0, this.value.length);
            });
          })(),
          (this.present = function (e) {
            var n = document.queryCommandSupported("copy");
            (s = e),
              (o = e),
              t
                .find(".embed-explain")
                .html(i18n.viewer.shareFromCommon.embedExplain),
              t.find(".embed-lbl-size").html(i18n.viewer.shareFromCommon.size),
              t.find(".embed-sizes a").eq(0).click(),
              t.find(".share-embed-wrapper").toggleClass("touch", !n),
              t
                .find(".share-clipboard")
                .attr("title", i18n.viewer.shareFromCommon.copy),
              t.find(".share-status").html(i18n.viewer.shareFromCommon.copied);
          }),
          (this.setAutoplay = function (e) {
            var n = s;
            e && ((n += n.match(/\?/) ? "&" : "?"), (n += "autoplay")),
              (o = n),
              t.find(".embed-sizes a").eq(0).click();
          });
      };
    }
  ),
  define(
    "storymaps/common/ui/share/ShareDialog",
    [
      "lib-build/tpl!./ShareDialog",
      "lib-build/css!./ShareDialog",
      "./ShareURLPanel",
      "./ShareEmbedPanel",
      "../../utils/SocialSharing",
    ],
    function (e, t, n, i, a) {
      return function (t) {
        function r(e) {
          var n = $(
            "<div>" + app.data.getWebAppData().getTitle() + "</div>"
          ).text();
          t.find(".share_facebook").toggle(e.facebook),
            e.facebook &&
              t
                .find(".share_facebook")
                .off("click")
                .click(function () {
                  a.shareFacebook("", "", null, $(this).data("url"));
                }),
            t.find(".share_twitter").toggle(e.twitter),
            e.twitter &&
              t
                .find(".share_twitter")
                .off("click")
                .click(function () {
                  a.shareTwitter(n, $(this).data("url"));
                });
        }
        t.append(e({}));
        var o = new n(t.find(".share-url-panel")),
          s = new i(t.find(".share-embed-panel"));
        t.on("shown.bs.modal", function () {
          o.focus();
        }),
          t.find(".autoplay-checkbox").change(function () {
            o.setAutoplay(!!this.checked),
              s.setAutoplay(!!this.checked),
              t
                .find(".autoplay-notification")
                .html(i18n.viewer.shareFromCommon.linksupdated)
                .fadeIn(),
              setTimeout(function () {
                t.find(".autoplay-notification").fadeOut();
              }, 1e3);
          }),
          (this.present = function (e, n) {
            (n = n || { facebook: !1, twitter: !1 }),
              t.find(".social-container").toggle(n.facebook || n.twitter),
              r(n),
              o.present(e),
              s.present(e),
              t.find(".modal-title").html(i18n.viewer.headerFromCommon.share),
              t.find(".embed-title").html(i18n.viewer.shareFromCommon.embed),
              t.find(".btn-close").html(i18n.viewer.common.close),
              t
                .find(".autoplay-label")
                .html(i18n.viewer.shareFromCommon.autoplayLabel),
              t
                .find(".autoplay-help")
                .tooltip({
                  title:
                    i18n.viewer.shareFromCommon.autoplayExplain1 +
                    "<br /><br />" +
                    i18n.viewer.shareFromCommon.autoplayExplain2,
                  html: !0,
                }),
              t.find(".autoplay-checkbox").prop("checked", !1),
              t.modal({ keyboard: !0 }),
              app.appCfg.disableAutoPlay &&
                t.find(".autoplay-container").hide();
          });
      };
    }
  ),
  define(
    "storymaps/common/utils/HeaderHelper",
    [
      "./SocialSharing",
      "../ui/share/ShareDialog",
      "storymaps/common/utils/CommonHelper",
    ],
    function (e, t, n) {
      function i(e) {
        e.find(".linkContainer").parent().length &&
          e
            .find(".linkContainer")
            .css(
              "width",
              (e.find(".logoContainer").position() || { left: 186 }).left -
                e.find(".linkContainer").parent().position().left -
                e.find(".shareBtns").outerWidth() -
                ($(".logoContainer").width() > 1 ? 14 : 4)
            );
      }
      var a = new t($("#shareDialog"));
      return {
        setLogo: function (e, t, a) {
          if (t.logoURL && "NO_LOGO" != t.logoURL) {
            var r = e.find(".logoLink");
            t.logoTarget
              ? r
                  .css("cursor", "pointer")
                  .attr(
                    "aria-label",
                    i18n.viewer.a11y ? i18n.viewer.a11y.logoLinkAria : ""
                  )
                  .attr("href", t.logoTarget)
              : r.css("cursor", "default").removeAttr("href"),
              i(e);
            var o = e.find(".logoImg");
            (o[0].onload = function () {
              i(e), a && "function" == typeof a && a();
            }),
              (o[0].onerror = function () {
                i(e);
              }),
              o
                .attr("src", n.possiblyAddToken(t.logoURL))
                .attr("alt", i18n.viewer.a11y ? i18n.viewer.a11y.logoAria : "")
                .show();
          } else e.find(".logoImg").hide(), i(e);
        },
        setLink: function (e, t) {
          t.linkURL && t.linkText
            ? e
                .find(".linkContainer")
                .html(
                  '<a href="' +
                    t.linkURL +
                    '" class="link" target="_blank">' +
                    t.linkText +
                    "</a>"
                )
            : e.find(".linkContainer").html(t.linkText);
        },
        setSocial: function (e, t) {
          var n = app.cfg.HEADER_SOCIAL,
            i = t.socialBtn,
            a = n && n.facebook && (!i || i.facebook),
            r = n && n.twitter && (!i || i.twitter),
            o =
              n &&
              n.bitly &&
              n.bitly.enable &&
              n.bitly.login &&
              n.bitly.key &&
              (!i || i.bitly);
          e.find(".share_facebook").toggleClass("active", a),
            e.find(".share_twitter").toggleClass("active", r),
            e.find(".share_bitly").toggleClass("active", o),
            e
              .find(".share-all")
              .data("share-facebook", a)
              .data("share-twitter", r)
              .toggleClass("active", a || r || o);
        },
        toggleSocialBtnAppSharing: function (e, t) {
          t && e.find(".shareIcon").attr("title", ""),
            e
              .find(".shareIcon")
              .toggleClass("disabled", !!t)
              .tooltip(
                t
                  ? {
                      title: i18n.commonCore
                        ? i18n.commonCore.builderPanel.tooltipNotShared
                        : "",
                      container: "body",
                    }
                  : "destroy"
              );
        },
        disableSocialBtnAppSharingAutoplay: function (e, t) {
          e.find(".shareIcon").attr("title", ""),
            e
              .find(".shareIcon")
              .toggleClass("disabled", !0)
              .tooltip({
                title: i18n.viewer.headerFromCommon.tooltipAutoplayDisabled,
                container: "body",
                placement: t || "bottom",
              });
        },
        initEvents: function (t) {
          app.ui &&
            app.ui.accordionPanel &&
            t.off("keydown").on("keydown", function (e) {
              if (
                9 === e.keyCode &&
                !e.shiftKey &&
                !app.isInBuilder &&
                "accordion" === app.data.getWebAppData().getLayoutId()
              ) {
                var n = t.find(app.appCfg.focusable).filter(":visible"),
                  i = $(":focus");
                return n.index(i) === n.length - 1
                  ? (app.ui.accordionPanel.focus(0), !1)
                  : void 0;
              }
            }),
            t
              .find(".share_facebook")
              .off("click")
              .click(function () {
                if (!$(this).hasClass("disabled")) {
                  var t = $(
                      "<div>" +
                        (app.data.getWebAppData().getTitle() || "") +
                        "</div>"
                    ).text(),
                    n = $(
                      "<div>" +
                        (app.data.getWebAppData().getSubtitle() || "") +
                        "</div>"
                    ).text();
                  e.shareFacebook(t, n, null, $(this).data("url"));
                }
              }),
            t
              .find(".share_twitter")
              .off("click")
              .click(function () {
                if (!$(this).hasClass("disabled")) {
                  var t = $(
                    "<div>" +
                      (app.data.getWebAppData().getTitle() || "") +
                      "</div>"
                  ).text();
                  e.shareTwitter(t, $(this).data("url"));
                }
              }),
            t
              .find(".share_bitly")
              .off("click")
              .click(function () {
                if (!$(this).hasClass("disabled")) {
                  var t = $(this).data("url") || document.location.href;
                  a.present(e.cleanURL(t, !0));
                }
              }),
            t
              .find(".share-all")
              .off("click")
              .click(function () {
                if (!$(this).hasClass("disabled")) {
                  var t = $(this).data("url") || document.location.href;
                  a.present(e.cleanURL(t, !0), {
                    facebook: !!$(this).data("share-facebook"),
                    twitter: !!$(this).data("share-twitter"),
                  });
                }
              }),
            t
              .find(".shareIcon, .share-all")
              .off("keypress")
              .keypress(function (e) {
                if (13 == e.which) return $(this).click(), !1;
              });
          var n = i18n.viewer.headerFromCommon;
          t
            .find(".share_facebook")
            .attr("title", n.facebookTooltip)
            .attr("aria-label", n.facebookTooltip),
            t
              .find(".share_twitter")
              .attr("title", n.twitterTooltip)
              .attr("aria-label", n.twitterTooltip),
            t
              .find(".share_bitly")
              .attr("title", n.bitlyTooltip)
              .attr("aria-label", n.bitlyTooltip),
            $(window).resize(function () {
              i(t);
            });
        },
      };
    }
  ),
  define(
    "lib-build/css!storymaps/common/builder/InlineFieldEdit",
    [],
    function () {}
  ),
  define(
    "storymaps/common/builder/InlineFieldEdit",
    ["lib-build/css!./InlineFieldEdit", "dojo/has"],
    function (e, t) {
      return function (e, n, i) {
        function a(e, t, i) {
          e &&
            t &&
            i &&
            ("function" == typeof n && n(),
            (o = i),
            t.parent().parent().addClass("isEditing"),
            t.hide(),
            e.hide(),
            i.val(t.html()),
            i.show(),
            i.select());
        }
        function r(e) {
          if (e && e.get(0)) {
            o = null;
            var n = e.get(0).value,
              a = e.parent().find(".text_edit_label"),
              r = e.parent().find(".text_edit_icon"),
              s = a.parent().first();
            "" === n &&
              (n = $(e).parents("h1.title")
                ? i18n.commonCore.inlineFieldEdit.enterTitle
                : i18n.commonCore.inlineFieldEdit.enterSubtitle),
              (n =
                !app.data.getWebAppItem().created ||
                app.data.getWebAppItem().created > app.cfg.HTML_SANITIZER_DATE
                  ? app.sanitizer.sanitize(n)
                  : n.replace(/<\/?script>/g, "")),
              a.parent().parent().removeClass("isEditing"),
              a.html(n),
              a.show(),
              e.hide(),
              r.css("display", "inline-block"),
              t("ios") && document.activeElement.blur(),
              "function" == typeof i && i(s, n);
          }
        }
        var o = null;
        e.find(".text_edit_icon").click(function () {
          a(
            $(this),
            $(this).parent().find(".text_edit_label"),
            $(this).parent().find(".text_edit_input")
          );
        }),
          e.find(".text_edit_label").click(function () {
            a(
              $(this).parent().find(".text_edit_icon"),
              $(this),
              $(this).parent().find(".text_edit_input")
            );
          }),
          e.find(".text_edit_input").blur(function () {
            r($(this));
          }),
          t("ios") &&
            $("body").bind("touchstart", function (e) {
              o && e.target != o.get(0) && r(o);
            }),
          e.find(".text_edit_input").keypress(function (e) {
            "13" == (e.keyCode ? e.keyCode : e.which) && r($(this));
          });
      };
    }
  ),
  define(
    "storymaps/common/ui/header/Desktop",
    [
      "lib-build/css!./Desktop",
      "../../utils/HeaderHelper",
      "../../builder/InlineFieldEdit",
      "../../utils/CommonHelper",
      "dojo/has",
      "dojo/topic",
    ],
    function (e, t, n, i, a, r) {
      return function (e, o) {
        function s() {
          $("#headerDesktop .subtitle:visible").length
            ? $("#headerDesktop .subtitle")[0].focus()
            : $("#headerDesktop .title")[0].focus();
        }
        function l(t) {
          if (!app.appCfg.noAppThemes) {
            e.css("background-color", t.header),
              e.find(".textArea").css("color", t.headerTitle),
              e.find(".rightArea").css("color", t.headerText);
            var n = e.find(".subtitle");
            t.name.match(/-org$|-modified$/)
              ? n.css({ color: t.headerTitle, opacity: 0.8 })
              : n.css({ color: t.headerText });
          }
        }
        function p(n, i) {
          var a = void 0 === n.compactSize ? i : n.compactSize;
          t.setLogo(e, n, m.resize),
            t.setLink(e, n),
            t.setSocial(e, n),
            t.initEvents(e, "bottom"),
            e.toggleClass("compact", a),
            a &&
              (e.find(".rightArea").hide(),
              setTimeout(function () {
                e.find(".rightArea").show();
              }, 0));
        }
        function c() {
          return (
            e.find(".check-story").hide(),
            e.find(".check-story").is(":visible") ||
              e.find(".share-story").is(":visible") ||
              e.find(".error-status").removeClass("enabled"),
            m.resize(),
            !1
          );
        }
        function d() {
          return (
            e.find(".share-story").hide(),
            e.find(".check-story").is(":visible") ||
              e.find(".share-story").is(":visible") ||
              e.find(".error-status").removeClass("enabled"),
            m.resize(),
            !1
          );
        }
        function u(t) {
          var n = e.find(".check-story"),
            r = $(
              '<span aria-hidden="true" class="check-story-close">×</span>'
            ),
            o = $(
              '<span aria-hidden="true" class="check-story-close">×</span>'
            );
          n.off("click").removeClass("forceEvent").show(),
            r.click(c),
            o.click(d),
            "start" == t
              ? n
                  .html(
                    '<span class="small-loader"></span>' +
                      i18n.viewer.headerFromCommon.checking
                  )
                  .append(r)
                  .css("cursor", "default")
              : "error" == t
              ? n
                  .html(i18n.viewer.headerFromCommon.fix)
                  .append(r)
                  .css("cursor", "pointer")
                  .click(i.switchToBuilder)
                  .removeClass("btn-warning")
                  .addClass("btn-danger")
              : n
                  .html(i18n.viewer.headerFromCommon.noerrors)
                  .append(r)
                  .removeClass("btn-warning")
                  .addClass("btn-success"),
            (a("ff") || a("ie") || 7 == a("trident")) &&
              "error" != t &&
              n.click(c).addClass("forceEvent");
          var s = e
              .find(".share-story")
              .html(i18n.viewer.headerFromCommon.notshared)
              .append(o)
              .toggle(
                "private" == app.data.getWebAppItem().access ||
                  "shared" == app.data.getWebAppItem().access
              ),
            l = s.css("background-color");
          if (!app.appCfg.noAppThemes) {
            var p = app.data.getWebAppData().getColors();
            l &&
              p &&
              p.header &&
              i.colorsAreSimilar(l, p.header, !0) &&
              s.css("box-shadow", "0 0 2px 1px white");
          }
          m.resize();
        }
        function f() {}
        function h(e, t) {
          setTimeout(
            function () {
              r.publish("HEADER_EDITED", {
                src: $(e).attr("class").split(" ")[0],
                value: t,
              }),
                $(e).removeClass("error");
            },
            a("ios") || a("ie") >= 10 ? 700 : 0
          ),
            app.builder.hideSaveConfirmation();
        }
        var m = this;
        (this.init = function (t, s, c, d, m, g, v) {
          if ((l(m), t)) return void e.addClass("hideDesktop");
          if (
            (o &&
              (e.addClass("isBuilder"),
              (s =
                "<div class='text_edit_label'>" +
                (s || i18n.commonCore.inlineFieldEdit.enterTitle) +
                "</div>"),
              (s +=
                "<div class='text_edit_icon' title='" +
                i18n.commonCore.header.title.replace(
                  "%TPL_NAME%",
                  app.cfg.TPL_NAME
                ) +
                "'></div>"),
              (s +=
                "<textarea rows='1' class='text_edit_input form-control' type='text' spellcheck='true'></textarea>"),
              (c =
                "<span class='text_edit_label'>" +
                (c || i18n.commonCore.inlineFieldEdit.enterSubtitle) +
                "</span>"),
              (c +=
                "<div class='text_edit_icon' title='" +
                i18n.commonCore.header.subtitle.replace(
                  "%TPL_NAME%",
                  app.cfg.TPL_NAME
                ) +
                "'></div>"),
              (c +=
                "<textarea rows='3' class='text_edit_input form-control' type='text' spellcheck='true'></textarea>")),
            e.find(".title").html(s),
            e.find(".subtitle").html(c),
            o && new n(e, f, h),
            !o && !c)
          ) {
            (void 0 === d.compactSize ? v : d.compactSize) ||
              (e.find(".title").css({ paddingTop: 30, height: 90 }),
              e.find(".subtitle").css("height", 32).attr("tabindex", "-1"));
          }
          if (g) {
            var b = e
                .find(".switchBuilder")
                .html(
                  '<span class="glyphicon glyphicon-cog"></span>' +
                    i18n.viewer.headerFromCommon.builderButton +
                    '<span aria-hidden="true" class="switch-builder-close">×</span>'
                )
                .click(i.switchToBuilder)
                .show(),
              y = b.css("background-color");
            if (!app.appCfg.noAppThemes) {
              var w = app.data.getWebAppData().getColors();
              y &&
                w &&
                w.header &&
                i.colorsAreSimilar(y, w.header, !0) &&
                b.css("box-shadow", "0 0 2px 1px white");
            }
            a("ff") || a("ie") || 7 == a("trident")
              ? b.find(".switch-builder-close").hide()
              : b.find(".switch-builder-close").click(function () {
                  return b.hide(), $(window).resize(), !1;
                });
          }
          var x = i.getUrlParams(),
            C = "true" === x.preview || "" === x.preview,
            T = "true" === x.autoplay || "" === x.autoplay;
          app.isInBuilder ||
            !app.userCanEdit ||
            9 == a("ie") ||
            C ||
            T ||
            (e.find(".error-status").addClass("enabled"),
            r.subscribe("MYSTORIES_SCAN", u),
            u("start")),
            p(d, v);
        }),
          (this.resize = function (t) {
            t || (t = $(document).width());
            var n = Math.max(
              e.find(".logoImg").outerWidth() + 50,
              e.find(".rightArea").outerWidth() + 20
            );
            e.find(".textArea").width(t - n - 15);
          }),
          (this.update = function (e, t, n) {
            l(t), p(e, n);
          }),
          (this.getTitle = function () {
            return o
              ? e.find(".title .text_edit_label").html()
              : e.find(".title").html();
          }),
          (this.getSubtitle = function () {
            return o
              ? e.find(".subtitle .text_edit_label").html()
              : e.find(".subtitle").html();
          }),
          (this.setTitleAndSubtitle = function (t, n) {
            var i = o ? i18n.commonCore.inlineFieldEdit.enterTitle : "",
              a = o ? i18n.commonCore.inlineFieldEdit.enterSubtitle : "";
            e.find(".title" + (o ? " .text_edit_label" : "")).html(t || i),
              e.find(".subtitle" + (o ? " .text_edit_label" : "")).html(n || a);
          }),
          (this.toggleSocialBtnAppSharing = function (n) {
            t.toggleSocialBtnAppSharing(e, n);
          }),
          (this.focus = function (e) {
            e && "social" != e.area
              ? s()
              : ($("#headerDesktop .shareIcon").attr("tabindex", "0"),
                $("#headerDesktop .linkContainer a").length
                  ? $("#headerDesktop .linkContainer a")
                      .attr("tabindex", "0")[0]
                      .focus()
                  : $("#headerDesktop .linkContainer").length
                  ? $("#headerDesktop .linkContainer")
                      .attr("tabindex", "0")[0]
                      .focus()
                  : $("#headerDesktop .shareIcon:visible").length
                  ? $("#headerDesktop .shareIcon")[0].focus()
                  : s());
          }),
          (this.enableAutoplay = function () {
            t.disableSocialBtnAppSharingAutoplay(e);
          }),
          (this.setTitleError = function () {
            e.find(".title").addClass("error");
          }),
          (this.initLocalization = function () {});
      };
    }
  ),
  define("lib-build/css!storymaps/tpl/core/MainView", [], function () {}),
  define("storymaps/tpl/core/Config", [], function () {
    return (
      (app.appCfg = {
        supportWebmapPreviewAGOL: !1,
        webmapStory: !0,
        createWebmap: !0,
        useWebmapInApp: !0,
        useStandardHeader: !0,
        useAppTitleAsPageTitle: !0,
        headerCompactOpt: !0,
        headerCompactByDefault: !1,
        mapsImmediateResize: !0,
        mapCommandLargerTouch: !1,
        mediaPickerDisableVideo: !0,
        mediaPickerDisableWebPage: !0,
        mediaPickerSkipConfigure: !0,
        mediaPickerConfigureForceMode: "shortlist",
        disableAutoPlay: !1,
        noAppTitleInitScreen: !0,
        mapExtentFit: !0,
        noFastClick: !0,
        deleteProtect: !!app.isProduction,
        noStoryLengthRequired: !0,
        disableImageUpload: !1,
        disableImageImportUpload: !0,
        disableFBWarning: !0,
        disableBuilderTour: !0,
        imageUploadThumbWidth: 250,
        useImageEXIF: !0,
        noAppThemes: !0,
        disableGalleryCreationSaveGeocoders: !0,
        useWebmapOwnerAsSave: !0,
      }),
      {
        checkConfigFileIsOK: function () {
          return (
            (app.cfg.HEADER_LOGO_URL =
              "resources/tpl/viewer/icons/esri-logo-white.png"),
            (app.cfg.HEADER_LOGO_TARGET = "https://www.esri.com"),
            (app.cfg.HEADER_LINK_TEXT =
              i18n.viewer.headerFromCommon.storymapsText),
            (app.cfg.HEADER_LINK_URL = "https://storymaps.arcgis.com"),
            app.cfg &&
              void 0 !== app.cfg.HEADER_LOGO_URL &&
              void 0 !== app.cfg.HEADER_LOGO_TARGET &&
              void 0 !== app.cfg.HEADER_LINK_TEXT &&
              void 0 !== app.cfg.HEADER_LINK_URL &&
              app.cfg.HEADER_SOCIAL &&
              app.cfg.TIMEOUT_VIEWER_LOAD &&
              app.cfg.TIMEOUT_VIEWER_REQUEST &&
              app.cfg.TIMEOUT_BUILDER_REQUEST &&
              app.cfg.HELP_URL &&
              app.cfg.HELP_URL_PORTAL &&
              app.cfg.TPL_NAME &&
              app.cfg.WEBAPP_TAG &&
              app.cfg.WEBAPP_KEYWORD_GENERIC &&
              app.cfg.WEBAPP_KEYWORD_APP &&
              app.cfg.AUTHORIZED_IMPORT_SOURCE &&
              app.cfg.FLICKR_API_KEY &&
              app.cfg.CORS_SERVER &&
              app.cfg.DEFAULT_SHARING_URL &&
              app.cfg.DEFAULT_PROXY_URL
          );
        },
      }
    );
  }),
  define(
    "storymaps/tpl/core/WebApplicationData",
    ["dojo/_base/lang"],
    function (e) {
      var t = {},
        n = { values: { tabs: [] } };
      return {
        set: function (i) {
          (t = e.clone(i)), i && i.values && (n = i);
        },
        get: function () {
          var t = e.clone(n);
          return (
            (t.values.template = t.values.template || {}),
            (t.values.template = {
              name: t.values.template.name || app.cfg.TPL_NAME,
              createdWith: t.values.template.createdWith || app.version,
              editedWith: app.version,
            }),
            t
          );
        },
        getOriginalData: function () {
          return t;
        },
        isBlank: function () {
          return Object.keys(n.values).length <= 2;
        },
        getBlank: function () {
          return { values: { webmap: t.values.webmap } };
        },
        getSourceWebmap: function () {
          return t && t.values ? t.values.webmap : null;
        },
        cleanWebAppAfterInitialization: function () {
          return !1;
        },
        restoreOriginalData: function () {
          this.set(t);
        },
        updateAfterSave: function () {
          t = e.clone(n);
        },
        getTemplateVersion: function () {
          return n.values.template ? n.values.template.editedWith : null;
        },
        getTemplateCreation: function () {
          return n.values.template ? n.values.template.creaedWith : null;
        },
        getDoNotWarnTitle: function () {
          return n.values.doNotWarnTitle || !1;
        },
        setDoNotWarnTitle: function (e) {
          n.values.doNotWarnTitle = e;
        },
        getIsExternalData: function () {
          return n.values.isExternalData;
        },
        setIsExternalData: function (e) {
          n.values.isExternalData = e;
        },
        getWebmap: function () {
          return n.values.webmap;
        },
        setWebmap: function (e) {
          n.values.webmap = e;
        },
        getResponse: function () {
          return n.values.response;
        },
        setResponse: function (e) {
          n.values.response = e;
        },
        getOriginalWebmap: function () {
          return n.values.originalWebmap;
        },
        setOriginalWebmap: function (e) {
          n.values.originalWebmap = e;
        },
        getMapExtent: function () {
          return n.values.mapExtent;
        },
        setMapExtent: function (e) {
          n.values.mapExtent = e;
        },
        getTitle: function () {
          return n.values.title;
        },
        setTitle: function (e) {
          n.values.title = e;
        },
        getSubtitle: function () {
          return n.values.subtitle;
        },
        setSubtitle: function (e) {
          n.values.subtitle = e;
        },
        getSettings: function () {
          return n.values.settings || {};
        },
        getLayoutId: function () {
          return "shortlist-classic";
        },
        getAppGeocoders: function () {
          return this.getSettings().appGeocoders;
        },
        setAppGeocoders: function (e) {
          (n.values.settings = n.values.settings || {}),
            (n.values.settings.appGeocoders = e);
        },
        getLayers: function () {
          return n.values.layers;
        },
        setLayers: function (e) {
          n.values.layers || (n.values.layers = []), n.values.layers.push(e);
        },
        getShortlistLayerId: function () {
          return n.values.shortlistLayerId;
        },
        setShortlistLayerId: function (e) {
          n.values.shortlistLayerId = e;
        },
        getTabs: function () {
          return n.values.tabs;
        },
        setTabs: function (e) {
          n.values.tabs = e;
        },
        clearTabs: function () {
          n.values.tabs = {};
        },
        clearLayers: function () {
          n.values.layers = [];
        },
        reverseContentLayers: function () {
          n.values.contentLayers.reverse();
        },
        getSupportLayers: function () {
          return n.values.supportLayers;
        },
        setSupportLayers: function (e) {
          n.values.supportLayers || (n.values.supportLayers = []),
            n.values.supportLayers.push(e);
        },
        getStoryTestPanel: function () {
          return n.values.testPanel;
        },
        setStoryTestPanel: function (e) {
          n.values.testPanel = e;
        },
        getLocateButton: function () {
          return !0;
        },
        getGeneralOptions: function () {
          return e.clone(this.getSettings().generalOptions) || {};
        },
        setGeneralOptions: function (e) {
          (n.values.settings = n.values.settings || {}),
            (n.values.settings.generalOptions = e);
        },
        setDefaultGeneralOptions: function () {
          this.setGeneralOptions({
            extentMode: "default",
            numberedIcons: !1,
            filterByExtent: !0,
            bookmarks: !1,
            bookmarksAlias: app.cfg.BOOKMARKS_ALIAS,
            geocoder: !1,
            locateButton: !1,
          });
        },
        getLayoutOptions: function () {
          return e.clone(this.getSettings().layoutOptions) || {};
        },
        setLayoutOptions: function (e) {
          (n.values.settings = n.values.settings || {}),
            (n.values.settings.layoutOptions = e);
        },
        setDefaultLayoutOptions: function () {
          this.setLayoutOptions({ description: !0 });
        },
        getThemeOptions: function () {
          return e.clone(this.getSettings().themeOptions) || {};
        },
        setThemeOptions: function (e) {
          (n.values.settings = n.values.settings || {}),
            (n.values.settings.themeOptions = e);
        },
        setDefaultThemeOptions: function () {
          this.setThemeOptions({ headerColor: "#444" });
        },
        getColors: function () {
          return {};
        },
        getHeader: function () {
          return this.getSettings().header || {};
        },
        setHeader: function (e) {
          (app.isInitializing &&
            app.data.getWebAppData().getShortlistLayerId()) ||
            ((n.values.settings = n.values.settings || {}),
            (n.values.settings.header = e));
        },
        getHeaderLinkText: function () {
          return void 0 === this.getHeader().linkText
            ? app.cfg.HEADER_LINK_TEXT
            : this.getHeader().linkText;
        },
        getHeaderLinkURL: function () {
          return void 0 === this.getHeader().linkURL
            ? app.cfg.HEADER_LINK_URL
            : this.getHeader().linkURL;
        },
        getLogoURL: function (e) {
          var t = this.getHeader().logoURL
            ? this.getHeader().logoURL
            : app.cfg.HEADER_LOGO_URL;
          return (
            t == app.cfg.HEADER_LOGO_URL &&
              this.getColors() &&
              (e
                ? "white" == this.getColors().esriLogoMobile &&
                  (t = "resources/tpl/viewer/icons/esri-logo-white.png")
                : "white" == this.getColors().esriLogo &&
                  (t = "resources/tpl/viewer/icons/esri-logo-white.png")),
            t
          );
        },
        getLogoTarget: function () {
          return this.getHeader().logoURL &&
            this.getHeader().logoURL != app.cfg.HEADER_LOGO_URL
            ? this.getHeader().logoTarget
            : app.cfg.HEADER_LOGO_TARGET;
        },
        getSocial: function () {
          return this.getHeader().social;
        },
        getHeaderCompactSize: function () {
          return this.getHeader().compactSize;
        },
      };
    }
  ),
  define(
    "storymaps/tpl/core/Data",
    ["./WebApplicationData", "storymaps/common/utils/CommonHelper"],
    function (e, t) {
      return function () {
        var n = null,
          i = null,
          a = null,
          r = null,
          o = {},
          s = null;
        (this.getWebMap = function () {
          return n;
        }),
          (this.setWebMap = function (e) {
            n = e;
          }),
          (this.getShortlistLayerId = function () {
            return r;
          }),
          (this.setShortlistLayerId = function (e) {
            r = e;
          }),
          (this.getWebAppItem = function () {
            return i || {};
          }),
          (this.setWebAppItem = function (e) {
            i = e;
          }),
          (this.getResponse = function () {
            return a;
          }),
          (this.setResponse = function (e) {
            a = e;
          }),
          (this.getWebAppData = function () {
            return e;
          }),
          (this.updateAfterSave = function () {
            e.updateAfterSave();
          }),
          (this.userIsAppOwner = function () {
            var e = app.portal ? app.portal.getPortalUser() : null;
            return (
              (e && e.username == this.getWebAppItem().owner) ||
              (null != t.getPortalUser() &&
                t.getPortalUser() == this.getWebAppItem().owner) ||
              (e &&
                e.privileges &&
                $.inArray("portal:admin:updateItems", e.privileges) > -1) ||
              "admin" == this.getWebAppItem().itemControl ||
              "update" == this.getWebAppItem().itemControl
            );
          }),
          (this.userIsOrgaPublisher = function () {
            var e = app.portal ? app.portal.getPortalUser() : null;
            return (
              e &&
              e.orgId &&
              ("org_admin" == e.role || "org_publisher" == e.role)
            );
          }),
          (this.checkUserItemPrivileges = function () {
            var e = app.portal ? app.portal.getPortalUser() : null;
            return (
              (e && !e.orgId && !e.privileges) ||
              (e &&
                e.privileges &&
                $.inArray("portal:user:createItem", e.privileges) > -1)
            );
          }),
          (this.isOrga = function () {
            return (
              !(!app.portal || !app.portal.getPortalUser()) &&
              !!app.portal.getPortalUser().orgId
            );
          }),
          (this.getAppProxies = function () {
            return s;
          }),
          (this.setAppProxies = function (e) {
            s = e;
          });
        var l = null;
        (this.getStoryStorage = function () {
          return l;
        }),
          (this.setStoryStorage = function (e) {
            l = e;
          }),
          (this.debug = function () {}),
          (this.getStory = function () {
            return o;
          }),
          (this.setStory = function (e, t, n, i) {
            e in o || (o[e] = { title: "", id: e, color: null, extent: null }),
              t && (o[e].title = t),
              n && (o[e].color = n),
              i && (o[e].extent = i);
          }),
          (this.clearStory = function () {
            o = {};
          }),
          (this.getStoryByIndex = function (e) {
            return o[e];
          }),
          (this.getStoryLength = function () {
            return app.data.getShortlistLayerId() &&
              app.map.getLayer(app.data.getShortlistLayerId()) &&
              app.map.getLayer(app.data.getShortlistLayerId()).graphics.length
              ? !!app.map.getLayer(app.data.getShortlistLayerId()).graphics
                  .length
              : 0;
          }),
          (this.storyReadyToScan = function () {
            return !app.isGalleryCreation || app.data.getWebMap().item.id;
          }),
          (this.getStoryEntries = function () {
            var t = [],
              n = [];
            return (
              "WEBAPP" == l && (t = e.getStoryEntries()),
              (t = t.slice(0, app.cfg.MAX_NB_ENTRIES)),
              app.isInBuilder
                ? t || []
                : ($.each(t || [], function (e, t) {
                    "PUBLISHED" == t.status && n.push(t);
                  }),
                  n)
            );
          }),
          (this.getImages = function () {
            var e = $.map(this.getStoryEntries(), function (e) {
              return e.media && "image" == e.media.type && e.media.image
                ? e.media.image.url
                : null;
            });
            return (e = $.grep(e, function (t, n) {
              return n == $.inArray(t, e);
            }));
          }),
          (this.getAllImageUrls = function () {
            return _.map(
              this.getImages().concat(
                this.getSidebarImages().concat([e.getLogoURL()])
              ),
              this.getNonProtocolNonDoubleSlashUrl
            );
          }),
          (this.getSidebarImages = function () {
            var e = this.getStoryEntries(),
              n = [];
            return (
              _.each(e, function (e) {
                var i = $(e.description);
                _.each(i.find("img"), function (e) {
                  n.push(t.possiblyRemoveToken(e.src));
                });
              }),
              n
            );
          }),
          (this.getNonProtocolNonDoubleSlashUrl = function (e) {
            return e.replace(/http[s]?\:\/\//, "").replace("//", "/");
          });
      };
    }
  ),
  define("storymaps/tpl/core/Helper", [], function () {
    return function () {
      (this.isMobile = function () {
        var e = !!navigator.userAgent.match(/Android/i),
          t = !!navigator.userAgent.match(/BlackBerry/i),
          n = !!navigator.userAgent.match(/iPhone|iPad|iPod/i),
          i = !!navigator.userAgent.match(/IEMobile/i);
        return e || t || n || i;
      }),
        (this.isIE = function () {
          return (
            navigator.appVersion.indexOf("MSIE") > -1 ||
            navigator.userAgent.match(/Trident.*rv\:11\./) ||
            navigator.appVersion.indexOf("Edge")
          );
        }),
        (this.isIE8 = function () {
          return (
            parseInt(navigator.userAgent.toLowerCase().split("msie")[1]) < 9
          );
        }),
        (this.prependURLHTTP = function (e) {
          return !e || "" === e || e.match(/^mailto:/)
            ? e
            : /^(https?:\/\/)|^(\/\/)/i.test(e)
            ? e
            : "http://" + e;
        });
    };
  }),
  (function (e, t) {
    "object" == typeof exports && "object" == typeof module
      ? (module.exports = t())
      : "function" == typeof define && define.amd
      ? define("storymaps/tpl/core/arcgis-html-sanitizer", [], t)
      : "object" == typeof exports
      ? (exports.Sanitizer = t())
      : (e.Sanitizer = t());
  })(window, function () {
    return (function (e) {
      function t(i) {
        if (n[i]) return n[i].exports;
        var a = (n[i] = { i: i, l: !1, exports: {} });
        return e[i].call(a.exports, a, a.exports, t), (a.l = !0), a.exports;
      }
      var n = {};
      return (
        (t.m = e),
        (t.c = n),
        (t.d = function (e, n, i) {
          t.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: i });
        }),
        (t.r = function (e) {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (t.t = function (e, n) {
          if ((1 & n && (e = t(e)), 8 & n)) return e;
          if (4 & n && "object" == typeof e && e && e.__esModule) return e;
          var i = Object.create(null);
          if (
            (t.r(i),
            Object.defineProperty(i, "default", { enumerable: !0, value: e }),
            2 & n && "string" != typeof e)
          )
            for (var a in e)
              t.d(
                i,
                a,
                function (t) {
                  return e[t];
                }.bind(null, a)
              );
          return i;
        }),
        (t.n = function (e) {
          var n =
            e && e.__esModule
              ? function () {
                  return e.default;
                }
              : function () {
                  return e;
                };
          return t.d(n, "a", n), n;
        }),
        (t.o = function (e, t) {
          return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (t.p = ""),
        t((t.s = "./src/index.ts"))
      );
    })({
      "./node_modules/cssfilter/lib/css.js": function (e, t, n) {
        function i(e) {
          return void 0 === e || null === e;
        }
        function a(e) {
          var t = {};
          for (var n in e) t[n] = e[n];
          return t;
        }
        function r(e) {
          (e = a(e || {})),
            (e.whiteList = e.whiteList || o.whiteList),
            (e.onAttr = e.onAttr || o.onAttr),
            (e.onIgnoreAttr = e.onIgnoreAttr || o.onIgnoreAttr),
            (e.safeAttrValue = e.safeAttrValue || o.safeAttrValue),
            (this.options = e);
        }
        var o = n("./node_modules/cssfilter/lib/default.js"),
          s = n("./node_modules/cssfilter/lib/parser.js");
        n("./node_modules/cssfilter/lib/util.js");
        (r.prototype.process = function (e) {
          if (((e = e || ""), !(e = e.toString()))) return "";
          var t = this,
            n = t.options,
            a = n.whiteList,
            r = n.onAttr,
            o = n.onIgnoreAttr,
            l = n.safeAttrValue;
          return s(e, function (e, t, n, s, p) {
            var c = a[n],
              d = !1;
            if (
              (!0 === c
                ? (d = c)
                : "function" == typeof c
                ? (d = c(s))
                : c instanceof RegExp && (d = c.test(s)),
              !0 !== d && (d = !1),
              (s = l(n, s)))
            ) {
              var u = { position: t, sourcePosition: e, source: p, isWhite: d };
              if (d) {
                var f = r(n, s, u);
                return i(f) ? n + ":" + s : f;
              }
              var f = o(n, s, u);
              return i(f) ? void 0 : f;
            }
          });
        }),
          (e.exports = r);
      },
      "./node_modules/cssfilter/lib/default.js": function (e, t) {
        function n() {
          var e = {};
          return (
            (e["align-content"] = !1),
            (e["align-items"] = !1),
            (e["align-self"] = !1),
            (e["alignment-adjust"] = !1),
            (e["alignment-baseline"] = !1),
            (e.all = !1),
            (e["anchor-point"] = !1),
            (e.animation = !1),
            (e["animation-delay"] = !1),
            (e["animation-direction"] = !1),
            (e["animation-duration"] = !1),
            (e["animation-fill-mode"] = !1),
            (e["animation-iteration-count"] = !1),
            (e["animation-name"] = !1),
            (e["animation-play-state"] = !1),
            (e["animation-timing-function"] = !1),
            (e.azimuth = !1),
            (e["backface-visibility"] = !1),
            (e.background = !0),
            (e["background-attachment"] = !0),
            (e["background-clip"] = !0),
            (e["background-color"] = !0),
            (e["background-image"] = !0),
            (e["background-origin"] = !0),
            (e["background-position"] = !0),
            (e["background-repeat"] = !0),
            (e["background-size"] = !0),
            (e["baseline-shift"] = !1),
            (e.binding = !1),
            (e.bleed = !1),
            (e["bookmark-label"] = !1),
            (e["bookmark-level"] = !1),
            (e["bookmark-state"] = !1),
            (e.border = !0),
            (e["border-bottom"] = !0),
            (e["border-bottom-color"] = !0),
            (e["border-bottom-left-radius"] = !0),
            (e["border-bottom-right-radius"] = !0),
            (e["border-bottom-style"] = !0),
            (e["border-bottom-width"] = !0),
            (e["border-collapse"] = !0),
            (e["border-color"] = !0),
            (e["border-image"] = !0),
            (e["border-image-outset"] = !0),
            (e["border-image-repeat"] = !0),
            (e["border-image-slice"] = !0),
            (e["border-image-source"] = !0),
            (e["border-image-width"] = !0),
            (e["border-left"] = !0),
            (e["border-left-color"] = !0),
            (e["border-left-style"] = !0),
            (e["border-left-width"] = !0),
            (e["border-radius"] = !0),
            (e["border-right"] = !0),
            (e["border-right-color"] = !0),
            (e["border-right-style"] = !0),
            (e["border-right-width"] = !0),
            (e["border-spacing"] = !0),
            (e["border-style"] = !0),
            (e["border-top"] = !0),
            (e["border-top-color"] = !0),
            (e["border-top-left-radius"] = !0),
            (e["border-top-right-radius"] = !0),
            (e["border-top-style"] = !0),
            (e["border-top-width"] = !0),
            (e["border-width"] = !0),
            (e.bottom = !1),
            (e["box-decoration-break"] = !0),
            (e["box-shadow"] = !0),
            (e["box-sizing"] = !0),
            (e["box-snap"] = !0),
            (e["box-suppress"] = !0),
            (e["break-after"] = !0),
            (e["break-before"] = !0),
            (e["break-inside"] = !0),
            (e["caption-side"] = !1),
            (e.chains = !1),
            (e.clear = !0),
            (e.clip = !1),
            (e["clip-path"] = !1),
            (e["clip-rule"] = !1),
            (e.color = !0),
            (e["color-interpolation-filters"] = !0),
            (e["column-count"] = !1),
            (e["column-fill"] = !1),
            (e["column-gap"] = !1),
            (e["column-rule"] = !1),
            (e["column-rule-color"] = !1),
            (e["column-rule-style"] = !1),
            (e["column-rule-width"] = !1),
            (e["column-span"] = !1),
            (e["column-width"] = !1),
            (e.columns = !1),
            (e.contain = !1),
            (e.content = !1),
            (e["counter-increment"] = !1),
            (e["counter-reset"] = !1),
            (e["counter-set"] = !1),
            (e.crop = !1),
            (e.cue = !1),
            (e["cue-after"] = !1),
            (e["cue-before"] = !1),
            (e.cursor = !1),
            (e.direction = !1),
            (e.display = !0),
            (e["display-inside"] = !0),
            (e["display-list"] = !0),
            (e["display-outside"] = !0),
            (e["dominant-baseline"] = !1),
            (e.elevation = !1),
            (e["empty-cells"] = !1),
            (e.filter = !1),
            (e.flex = !1),
            (e["flex-basis"] = !1),
            (e["flex-direction"] = !1),
            (e["flex-flow"] = !1),
            (e["flex-grow"] = !1),
            (e["flex-shrink"] = !1),
            (e["flex-wrap"] = !1),
            (e.float = !1),
            (e["float-offset"] = !1),
            (e["flood-color"] = !1),
            (e["flood-opacity"] = !1),
            (e["flow-from"] = !1),
            (e["flow-into"] = !1),
            (e.font = !0),
            (e["font-family"] = !0),
            (e["font-feature-settings"] = !0),
            (e["font-kerning"] = !0),
            (e["font-language-override"] = !0),
            (e["font-size"] = !0),
            (e["font-size-adjust"] = !0),
            (e["font-stretch"] = !0),
            (e["font-style"] = !0),
            (e["font-synthesis"] = !0),
            (e["font-variant"] = !0),
            (e["font-variant-alternates"] = !0),
            (e["font-variant-caps"] = !0),
            (e["font-variant-east-asian"] = !0),
            (e["font-variant-ligatures"] = !0),
            (e["font-variant-numeric"] = !0),
            (e["font-variant-position"] = !0),
            (e["font-weight"] = !0),
            (e.grid = !1),
            (e["grid-area"] = !1),
            (e["grid-auto-columns"] = !1),
            (e["grid-auto-flow"] = !1),
            (e["grid-auto-rows"] = !1),
            (e["grid-column"] = !1),
            (e["grid-column-end"] = !1),
            (e["grid-column-start"] = !1),
            (e["grid-row"] = !1),
            (e["grid-row-end"] = !1),
            (e["grid-row-start"] = !1),
            (e["grid-template"] = !1),
            (e["grid-template-areas"] = !1),
            (e["grid-template-columns"] = !1),
            (e["grid-template-rows"] = !1),
            (e["hanging-punctuation"] = !1),
            (e.height = !0),
            (e.hyphens = !1),
            (e.icon = !1),
            (e["image-orientation"] = !1),
            (e["image-resolution"] = !1),
            (e["ime-mode"] = !1),
            (e["initial-letters"] = !1),
            (e["inline-box-align"] = !1),
            (e["justify-content"] = !1),
            (e["justify-items"] = !1),
            (e["justify-self"] = !1),
            (e.left = !1),
            (e["letter-spacing"] = !0),
            (e["lighting-color"] = !0),
            (e["line-box-contain"] = !1),
            (e["line-break"] = !1),
            (e["line-grid"] = !1),
            (e["line-height"] = !1),
            (e["line-snap"] = !1),
            (e["line-stacking"] = !1),
            (e["line-stacking-ruby"] = !1),
            (e["line-stacking-shift"] = !1),
            (e["line-stacking-strategy"] = !1),
            (e["list-style"] = !0),
            (e["list-style-image"] = !0),
            (e["list-style-position"] = !0),
            (e["list-style-type"] = !0),
            (e.margin = !0),
            (e["margin-bottom"] = !0),
            (e["margin-left"] = !0),
            (e["margin-right"] = !0),
            (e["margin-top"] = !0),
            (e["marker-offset"] = !1),
            (e["marker-side"] = !1),
            (e.marks = !1),
            (e.mask = !1),
            (e["mask-box"] = !1),
            (e["mask-box-outset"] = !1),
            (e["mask-box-repeat"] = !1),
            (e["mask-box-slice"] = !1),
            (e["mask-box-source"] = !1),
            (e["mask-box-width"] = !1),
            (e["mask-clip"] = !1),
            (e["mask-image"] = !1),
            (e["mask-origin"] = !1),
            (e["mask-position"] = !1),
            (e["mask-repeat"] = !1),
            (e["mask-size"] = !1),
            (e["mask-source-type"] = !1),
            (e["mask-type"] = !1),
            (e["max-height"] = !0),
            (e["max-lines"] = !1),
            (e["max-width"] = !0),
            (e["min-height"] = !0),
            (e["min-width"] = !0),
            (e["move-to"] = !1),
            (e["nav-down"] = !1),
            (e["nav-index"] = !1),
            (e["nav-left"] = !1),
            (e["nav-right"] = !1),
            (e["nav-up"] = !1),
            (e["object-fit"] = !1),
            (e["object-position"] = !1),
            (e.opacity = !1),
            (e.order = !1),
            (e.orphans = !1),
            (e.outline = !1),
            (e["outline-color"] = !1),
            (e["outline-offset"] = !1),
            (e["outline-style"] = !1),
            (e["outline-width"] = !1),
            (e.overflow = !1),
            (e["overflow-wrap"] = !1),
            (e["overflow-x"] = !1),
            (e["overflow-y"] = !1),
            (e.padding = !0),
            (e["padding-bottom"] = !0),
            (e["padding-left"] = !0),
            (e["padding-right"] = !0),
            (e["padding-top"] = !0),
            (e.page = !1),
            (e["page-break-after"] = !1),
            (e["page-break-before"] = !1),
            (e["page-break-inside"] = !1),
            (e["page-policy"] = !1),
            (e.pause = !1),
            (e["pause-after"] = !1),
            (e["pause-before"] = !1),
            (e.perspective = !1),
            (e["perspective-origin"] = !1),
            (e.pitch = !1),
            (e["pitch-range"] = !1),
            (e["play-during"] = !1),
            (e.position = !1),
            (e["presentation-level"] = !1),
            (e.quotes = !1),
            (e["region-fragment"] = !1),
            (e.resize = !1),
            (e.rest = !1),
            (e["rest-after"] = !1),
            (e["rest-before"] = !1),
            (e.richness = !1),
            (e.right = !1),
            (e.rotation = !1),
            (e["rotation-point"] = !1),
            (e["ruby-align"] = !1),
            (e["ruby-merge"] = !1),
            (e["ruby-position"] = !1),
            (e["shape-image-threshold"] = !1),
            (e["shape-outside"] = !1),
            (e["shape-margin"] = !1),
            (e.size = !1),
            (e.speak = !1),
            (e["speak-as"] = !1),
            (e["speak-header"] = !1),
            (e["speak-numeral"] = !1),
            (e["speak-punctuation"] = !1),
            (e["speech-rate"] = !1),
            (e.stress = !1),
            (e["string-set"] = !1),
            (e["tab-size"] = !1),
            (e["table-layout"] = !1),
            (e["text-align"] = !0),
            (e["text-align-last"] = !0),
            (e["text-combine-upright"] = !0),
            (e["text-decoration"] = !0),
            (e["text-decoration-color"] = !0),
            (e["text-decoration-line"] = !0),
            (e["text-decoration-skip"] = !0),
            (e["text-decoration-style"] = !0),
            (e["text-emphasis"] = !0),
            (e["text-emphasis-color"] = !0),
            (e["text-emphasis-position"] = !0),
            (e["text-emphasis-style"] = !0),
            (e["text-height"] = !0),
            (e["text-indent"] = !0),
            (e["text-justify"] = !0),
            (e["text-orientation"] = !0),
            (e["text-overflow"] = !0),
            (e["text-shadow"] = !0),
            (e["text-space-collapse"] = !0),
            (e["text-transform"] = !0),
            (e["text-underline-position"] = !0),
            (e["text-wrap"] = !0),
            (e.top = !1),
            (e.transform = !1),
            (e["transform-origin"] = !1),
            (e["transform-style"] = !1),
            (e.transition = !1),
            (e["transition-delay"] = !1),
            (e["transition-duration"] = !1),
            (e["transition-property"] = !1),
            (e["transition-timing-function"] = !1),
            (e["unicode-bidi"] = !1),
            (e["vertical-align"] = !1),
            (e.visibility = !1),
            (e["voice-balance"] = !1),
            (e["voice-duration"] = !1),
            (e["voice-family"] = !1),
            (e["voice-pitch"] = !1),
            (e["voice-range"] = !1),
            (e["voice-rate"] = !1),
            (e["voice-stress"] = !1),
            (e["voice-volume"] = !1),
            (e.volume = !1),
            (e["white-space"] = !1),
            (e.widows = !1),
            (e.width = !0),
            (e["will-change"] = !1),
            (e["word-break"] = !0),
            (e["word-spacing"] = !0),
            (e["word-wrap"] = !0),
            (e["wrap-flow"] = !1),
            (e["wrap-through"] = !1),
            (e["writing-mode"] = !1),
            (e["z-index"] = !1),
            e
          );
        }
        function i(e, t, n) {}
        function a(e, t, n) {}
        function r(e, t) {
          return o.test(t) ? "" : t;
        }
        var o = /javascript\s*\:/gim;
        (t.whiteList = n()),
          (t.getDefaultWhiteList = n),
          (t.onAttr = i),
          (t.onIgnoreAttr = a),
          (t.safeAttrValue = r);
      },
      "./node_modules/cssfilter/lib/index.js": function (e, t, n) {
        function i(e, t) {
          return new r(t).process(e);
        }
        var a = n("./node_modules/cssfilter/lib/default.js"),
          r = n("./node_modules/cssfilter/lib/css.js");
        (t = e.exports = i), (t.FilterCSS = r);
        for (var o in a) t[o] = a[o];
        "undefined" != typeof window && (window.filterCSS = e.exports);
      },
      "./node_modules/cssfilter/lib/parser.js": function (e, t, n) {
        function i(e, t) {
          function n() {
            if (!r) {
              var n = a.trim(e.slice(o, s)),
                i = n.indexOf(":");
              if (-1 !== i) {
                var p = a.trim(n.slice(0, i)),
                  c = a.trim(n.slice(i + 1));
                if (p) {
                  var d = t(o, l.length, p, c, n);
                  d && (l += d + "; ");
                }
              }
            }
            o = s + 1;
          }
          (e = a.trimRight(e)), ";" !== e[e.length - 1] && (e += ";");
          for (var i = e.length, r = !1, o = 0, s = 0, l = ""; s < i; s++) {
            var p = e[s];
            if ("/" === p && "*" === e[s + 1]) {
              var c = e.indexOf("*/", s + 2);
              if (-1 === c) break;
              (s = c + 1), (o = s + 1), (r = !1);
            } else
              "(" === p
                ? (r = !0)
                : ")" === p
                ? (r = !1)
                : ";" === p
                ? r || n()
                : "\n" === p && n();
          }
          return a.trim(l);
        }
        var a = n("./node_modules/cssfilter/lib/util.js");
        e.exports = i;
      },
      "./node_modules/cssfilter/lib/util.js": function (e, t) {
        e.exports = {
          indexOf: function (e, t) {
            var n, i;
            if (Array.prototype.indexOf) return e.indexOf(t);
            for (n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
            return -1;
          },
          forEach: function (e, t, n) {
            var i, a;
            if (Array.prototype.forEach) return e.forEach(t, n);
            for (i = 0, a = e.length; i < a; i++) t.call(n, e[i], i, e);
          },
          trim: function (e) {
            return String.prototype.trim
              ? e.trim()
              : e.replace(/(^\s*)|(\s*$)/g, "");
          },
          trimRight: function (e) {
            return String.prototype.trimRight
              ? e.trimRight()
              : e.replace(/(\s*$)/g, "");
          },
        };
      },
      "./node_modules/lodash.isplainobject/index.js": function (e, t) {
        function n(e) {
          var t = !1;
          if (null != e && "function" != typeof e.toString)
            try {
              t = !!(e + "");
            } catch (e) {}
          return t;
        }
        function i(e) {
          return !!e && "object" == typeof e;
        }
        function a(e) {
          if (!i(e) || d.call(e) != r || n(e)) return !1;
          var t = u(e);
          if (null === t) return !0;
          var a = p.call(t, "constructor") && t.constructor;
          return "function" == typeof a && a instanceof a && l.call(a) == c;
        }
        var r = "[object Object]",
          o = Function.prototype,
          s = Object.prototype,
          l = o.toString,
          p = s.hasOwnProperty,
          c = l.call(Object),
          d = s.toString,
          u = (function (e, t) {
            return function (n) {
              return e(t(n));
            };
          })(Object.getPrototypeOf, Object);
        e.exports = a;
      },
      "./node_modules/xss/lib/default.js": function (e, t, n) {
        function i() {
          return {
            a: ["target", "href", "title"],
            abbr: ["title"],
            address: [],
            area: ["shape", "coords", "href", "alt"],
            article: [],
            aside: [],
            audio: ["autoplay", "controls", "loop", "preload", "src"],
            b: [],
            bdi: ["dir"],
            bdo: ["dir"],
            big: [],
            blockquote: ["cite"],
            br: [],
            caption: [],
            center: [],
            cite: [],
            code: [],
            col: ["align", "valign", "span", "width"],
            colgroup: ["align", "valign", "span", "width"],
            dd: [],
            del: ["datetime"],
            details: ["open"],
            div: [],
            dl: [],
            dt: [],
            em: [],
            font: ["color", "size", "face"],
            footer: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            header: [],
            hr: [],
            i: [],
            img: ["src", "alt", "title", "width", "height"],
            ins: ["datetime"],
            li: [],
            mark: [],
            nav: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            section: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            table: ["width", "border", "align", "valign"],
            tbody: ["align", "valign"],
            td: ["width", "rowspan", "colspan", "align", "valign"],
            tfoot: ["align", "valign"],
            th: ["width", "rowspan", "colspan", "align", "valign"],
            thead: ["align", "valign"],
            tr: ["rowspan", "align", "valign"],
            tt: [],
            u: [],
            ul: [],
            video: [
              "autoplay",
              "controls",
              "loop",
              "preload",
              "src",
              "height",
              "width",
            ],
          };
        }
        function a(e, t, n) {}
        function r(e, t, n) {}
        function o(e, t, n) {}
        function s(e, t, n) {}
        function l(e) {
          return e.replace(k, "&lt;").replace(E, "&gt;");
        }
        function p(e, t, n, i) {
          if (((n = m(n)), "href" === t || "src" === t)) {
            if ("#" === (n = T.trim(n))) return "#";
            if (
              "http://" !== n.substr(0, 7) &&
              "https://" !== n.substr(0, 8) &&
              "mailto:" !== n.substr(0, 7) &&
              "tel:" !== n.substr(0, 4) &&
              "#" !== n[0] &&
              "/" !== n[0]
            )
              return "";
          } else if ("background" === t) {
            if (((D.lastIndex = 0), D.test(n))) return "";
          } else if ("style" === t) {
            if (((O.lastIndex = 0), O.test(n))) return "";
            if (
              ((P.lastIndex = 0), P.test(n) && ((D.lastIndex = 0), D.test(n)))
            )
              return "";
            !1 !== i && ((i = i || S), (n = i.process(n)));
          }
          return (n = g(n));
        }
        function c(e) {
          return e.replace(I, "&quot;");
        }
        function d(e) {
          return e.replace(A, '"');
        }
        function u(e) {
          return e.replace(L, function (e, t) {
            return "x" === t[0] || "X" === t[0]
              ? String.fromCharCode(parseInt(t.substr(1), 16))
              : String.fromCharCode(parseInt(t, 10));
          });
        }
        function f(e) {
          return e.replace($, ":").replace(_, " ");
        }
        function h(e) {
          for (var t = "", n = 0, i = e.length; n < i; n++)
            t += e.charCodeAt(n) < 32 ? " " : e.charAt(n);
          return T.trim(t);
        }
        function m(e) {
          return (e = d(e)), (e = u(e)), (e = f(e)), (e = h(e));
        }
        function g(e) {
          return (e = c(e)), (e = l(e));
        }
        function v() {
          return "";
        }
        function b(e, t) {
          function n(t) {
            return !!i || -1 !== T.indexOf(e, t);
          }
          "function" != typeof t && (t = function () {});
          var i = !Array.isArray(e),
            a = [],
            r = !1;
          return {
            onIgnoreTag: function (e, i, o) {
              if (n(e)) {
                if (o.isClosing) {
                  var s = "[/removed]",
                    l = o.position + s.length;
                  return a.push([!1 !== r ? r : o.position, l]), (r = !1), s;
                }
                return r || (r = o.position), "[removed]";
              }
              return t(e, i, o);
            },
            remove: function (e) {
              var t = "",
                n = 0;
              return (
                T.forEach(a, function (i) {
                  (t += e.slice(n, i[0])), (n = i[1]);
                }),
                (t += e.slice(n))
              );
            },
          };
        }
        function y(e) {
          return e.replace(M, "");
        }
        function w(e) {
          var t = e.split("");
          return (
            (t = t.filter(function (e) {
              var t = e.charCodeAt(0);
              return 127 !== t && (!(t <= 31) || 10 === t || 13 === t);
            })),
            t.join("")
          );
        }
        var x = n("./node_modules/cssfilter/lib/index.js").FilterCSS,
          C = n("./node_modules/cssfilter/lib/index.js").getDefaultWhiteList,
          T = n("./node_modules/xss/lib/util.js"),
          S = new x(),
          k = /</g,
          E = />/g,
          I = /"/g,
          A = /&quot;/g,
          L = /&#([a-zA-Z0-9]*);?/gim,
          $ = /&colon;?/gim,
          _ = /&newline;?/gim,
          D =
            /((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a)\:/gi,
          O = /e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi,
          P = /u\s*r\s*l\s*\(.*/gi,
          M = /<!--[\s\S]*?-->/g;
        (t.whiteList = i()),
          (t.getDefaultWhiteList = i),
          (t.onTag = a),
          (t.onIgnoreTag = r),
          (t.onTagAttr = o),
          (t.onIgnoreTagAttr = s),
          (t.safeAttrValue = p),
          (t.escapeHtml = l),
          (t.escapeQuote = c),
          (t.unescapeQuote = d),
          (t.escapeHtmlEntities = u),
          (t.escapeDangerHtml5Entities = f),
          (t.clearNonPrintableCharacter = h),
          (t.friendlyAttrValue = m),
          (t.escapeAttrValue = g),
          (t.onIgnoreTagStripAll = v),
          (t.StripTagBody = b),
          (t.stripCommentTag = y),
          (t.stripBlankChar = w),
          (t.cssFilter = S),
          (t.getDefaultCSSWhiteList = C);
      },
      "./node_modules/xss/lib/index.js": function (e, t, n) {
        function i(e, t) {
          return new o(t).process(e);
        }
        var a = n("./node_modules/xss/lib/default.js"),
          r = n("./node_modules/xss/lib/parser.js"),
          o = n("./node_modules/xss/lib/xss.js");
        (t = e.exports = i), (t.FilterXSS = o);
        for (var s in a) t[s] = a[s];
        for (var s in r) t[s] = r[s];
        "undefined" != typeof window && (window.filterXSS = e.exports);
      },
      "./node_modules/xss/lib/parser.js": function (e, t, n) {
        function i(e) {
          var t = d.spaceIndex(e);
          if (-1 === t) var n = e.slice(1, -1);
          else var n = e.slice(1, t + 1);
          return (
            (n = d.trim(n).toLowerCase()),
            "/" === n.slice(0, 1) && (n = n.slice(1)),
            "/" === n.slice(-1) && (n = n.slice(0, -1)),
            n
          );
        }
        function a(e) {
          return "</" === e.slice(0, 2);
        }
        function r(e, t, n) {
          "user strict";
          var r = "",
            o = 0,
            s = !1,
            l = !1,
            p = 0,
            c = e.length,
            d = "",
            u = "";
          for (p = 0; p < c; p++) {
            var f = e.charAt(p);
            if (!1 === s) {
              if ("<" === f) {
                s = p;
                continue;
              }
            } else if (!1 === l) {
              if ("<" === f) {
                (r += n(e.slice(o, p))), (s = p), (o = p);
                continue;
              }
              if (">" === f) {
                (r += n(e.slice(o, s))),
                  (u = e.slice(s, p + 1)),
                  (d = i(u)),
                  (r += t(s, r.length, d, u, a(u))),
                  (o = p + 1),
                  (s = !1);
                continue;
              }
              if (('"' === f || "'" === f) && "=" === e.charAt(p - 1)) {
                l = f;
                continue;
              }
            } else if (f === l) {
              l = !1;
              continue;
            }
          }
          return o < e.length && (r += n(e.substr(o))), r;
        }
        function o(e, t) {
          "user strict";
          function n(e, n) {
            if (
              ((e = d.trim(e)),
              (e = e.replace(u, "").toLowerCase()),
              !(e.length < 1))
            ) {
              var i = t(e, n || "");
              i && a.push(i);
            }
          }
          for (var i = 0, a = [], r = !1, o = e.length, p = 0; p < o; p++) {
            var f,
              h,
              m = e.charAt(p);
            if (!1 !== r || "=" !== m)
              if (
                !1 === r ||
                p !== i ||
                ('"' !== m && "'" !== m) ||
                "=" !== e.charAt(p - 1)
              )
                if (/\s|\n|\t/.test(m)) {
                  if (((e = e.replace(/\s|\n|\t/g, " ")), !1 === r)) {
                    if (-1 === (h = s(e, p))) {
                      (f = d.trim(e.slice(i, p))), n(f), (r = !1), (i = p + 1);
                      continue;
                    }
                    p = h - 1;
                    continue;
                  }
                  if (-1 === (h = l(e, p - 1))) {
                    (f = d.trim(e.slice(i, p))),
                      (f = c(f)),
                      n(r, f),
                      (r = !1),
                      (i = p + 1);
                    continue;
                  }
                } else;
              else {
                if (-1 === (h = e.indexOf(m, p + 1))) break;
                (f = d.trim(e.slice(i + 1, h))),
                  n(r, f),
                  (r = !1),
                  (p = h),
                  (i = p + 1);
              }
            else (r = e.slice(i, p)), (i = p + 1);
          }
          return (
            i < e.length &&
              (!1 === r ? n(e.slice(i)) : n(r, c(d.trim(e.slice(i))))),
            d.trim(a.join(" "))
          );
        }
        function s(e, t) {
          for (; t < e.length; t++) {
            var n = e[t];
            if (" " !== n) return "=" === n ? t : -1;
          }
        }
        function l(e, t) {
          for (; t > 0; t--) {
            var n = e[t];
            if (" " !== n) return "=" === n ? t : -1;
          }
        }
        function p(e) {
          return (
            ('"' === e[0] && '"' === e[e.length - 1]) ||
            ("'" === e[0] && "'" === e[e.length - 1])
          );
        }
        function c(e) {
          return p(e) ? e.substr(1, e.length - 2) : e;
        }
        var d = n("./node_modules/xss/lib/util.js"),
          u = /[^a-zA-Z0-9_:\.\-]/gim;
        (t.parseTag = r), (t.parseAttr = o);
      },
      "./node_modules/xss/lib/util.js": function (e, t) {
        e.exports = {
          indexOf: function (e, t) {
            var n, i;
            if (Array.prototype.indexOf) return e.indexOf(t);
            for (n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
            return -1;
          },
          forEach: function (e, t, n) {
            var i, a;
            if (Array.prototype.forEach) return e.forEach(t, n);
            for (i = 0, a = e.length; i < a; i++) t.call(n, e[i], i, e);
          },
          trim: function (e) {
            return String.prototype.trim
              ? e.trim()
              : e.replace(/(^\s*)|(\s*$)/g, "");
          },
          spaceIndex: function (e) {
            var t = /\s|\n|\t/,
              n = t.exec(e);
            return n ? n.index : -1;
          },
        };
      },
      "./node_modules/xss/lib/xss.js": function (e, t, n) {
        function i(e) {
          return void 0 === e || null === e;
        }
        function a(e) {
          var t = u.spaceIndex(e);
          if (-1 === t) return { html: "", closing: "/" === e[e.length - 2] };
          e = u.trim(e.slice(t + 1, -1));
          var n = "/" === e[e.length - 1];
          return n && (e = u.trim(e.slice(0, -1))), { html: e, closing: n };
        }
        function r(e) {
          var t = {};
          for (var n in e) t[n] = e[n];
          return t;
        }
        function o(e) {
          (e = r(e || {})),
            e.stripIgnoreTag &&
              (e.onIgnoreTag &&
                console.error(
                  'Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time'
                ),
              (e.onIgnoreTag = l.onIgnoreTagStripAll)),
            (e.whiteList = e.whiteList || l.whiteList),
            (e.onTag = e.onTag || l.onTag),
            (e.onTagAttr = e.onTagAttr || l.onTagAttr),
            (e.onIgnoreTag = e.onIgnoreTag || l.onIgnoreTag),
            (e.onIgnoreTagAttr = e.onIgnoreTagAttr || l.onIgnoreTagAttr),
            (e.safeAttrValue = e.safeAttrValue || l.safeAttrValue),
            (e.escapeHtml = e.escapeHtml || l.escapeHtml),
            (this.options = e),
            !1 === e.css
              ? (this.cssFilter = !1)
              : ((e.css = e.css || {}), (this.cssFilter = new s(e.css)));
        }
        var s = n("./node_modules/cssfilter/lib/index.js").FilterCSS,
          l = n("./node_modules/xss/lib/default.js"),
          p = n("./node_modules/xss/lib/parser.js"),
          c = p.parseTag,
          d = p.parseAttr,
          u = n("./node_modules/xss/lib/util.js");
        (o.prototype.process = function (e) {
          if (((e = e || ""), !(e = e.toString()))) return "";
          var t = this,
            n = t.options,
            r = n.whiteList,
            o = n.onTag,
            s = n.onIgnoreTag,
            p = n.onTagAttr,
            f = n.onIgnoreTagAttr,
            h = n.safeAttrValue,
            m = n.escapeHtml,
            g = t.cssFilter;
          n.stripBlankChar && (e = l.stripBlankChar(e)),
            n.allowCommentTag || (e = l.stripCommentTag(e));
          var v = !1;
          if (n.stripIgnoreTagBody) {
            var v = l.StripTagBody(n.stripIgnoreTagBody, s);
            s = v.onIgnoreTag;
          }
          var b = c(
            e,
            function (e, t, n, l, c) {
              var v = {
                  sourcePosition: e,
                  position: t,
                  isClosing: c,
                  isWhite: r.hasOwnProperty(n),
                },
                b = o(n, l, v);
              if (!i(b)) return b;
              if (v.isWhite) {
                if (v.isClosing) return "</" + n + ">";
                var y = a(l),
                  w = r[n],
                  x = d(y.html, function (e, t) {
                    var a = -1 !== u.indexOf(w, e),
                      r = p(n, e, t, a);
                    if (!i(r)) return r;
                    if (a)
                      return (t = h(n, e, t, g)), t ? e + '="' + t + '"' : e;
                    var r = f(n, e, t, a);
                    return i(r) ? void 0 : r;
                  }),
                  l = "<" + n;
                return (
                  x && (l += " " + x), y.closing && (l += " /"), (l += ">")
                );
              }
              var b = s(n, l, v);
              return i(b) ? m(l) : b;
            },
            m
          );
          return v && (b = v.remove(b)), b;
        }),
          (e.exports = o);
      },
      "./src/index.ts": function (e, t, n) {
        n.r(t),
          n.d(t, "Sanitizer", function () {
            return s;
          });
        var i = n("./node_modules/lodash.isplainobject/index.js"),
          a = n.n(i),
          r = n("./node_modules/xss/lib/index.js"),
          o = n.n(r),
          s = (function () {
            function e(e, t) {
              var n = this;
              (this.arcgisWhiteList = {
                a: ["href", "target", "style"],
                img: ["src", "width", "height", "border", "alt", "style"],
                video: [
                  "autoplay",
                  "controls",
                  "height",
                  "loop",
                  "muted",
                  "poster",
                  "preload",
                  "src",
                  "width",
                ],
                audio: [
                  "autoplay",
                  "controls",
                  "loop",
                  "muted",
                  "preload",
                  "src",
                ],
                span: ["style"],
                table: [
                  "width",
                  "height",
                  "cellpadding",
                  "cellspacing",
                  "border",
                  "style",
                ],
                div: ["style", "class"],
                font: ["size", "color", "style"],
                tr: ["height", "valign", "align", "style"],
                td: [
                  "height",
                  "width",
                  "valign",
                  "align",
                  "colspan",
                  "rowspan",
                  "nowrap",
                  "style",
                ],
                th: [
                  "height",
                  "width",
                  "valign",
                  "align",
                  "colspan",
                  "rowspan",
                  "nowrap",
                  "style",
                ],
                p: ["style"],
                b: [],
                strong: [],
                i: [],
                em: [],
                br: [],
                li: [],
                ul: [],
                tbody: [],
              }),
                (this.arcgisFilterOptions = { allowCommentTag: !0 });
              var i;
              e && !t
                ? (i = e)
                : e && t
                ? ((i = Object.create(this.arcgisFilterOptions)),
                  Object.keys(e).forEach(function (t) {
                    "whiteList" === t
                      ? (i.whiteList = n._extendObjectOfArrays([
                          n.arcgisWhiteList,
                          e.whiteList || {},
                        ]))
                      : (i[t] = e[t]);
                  }))
                : ((i = Object.create(this.arcgisFilterOptions)),
                  (i.whiteList = this.arcgisWhiteList)),
                (this.xssFilterOptions = i),
                (this._xssFilter = new o.a.FilterXSS(i));
            }
            return (
              (e.prototype.sanitize = function (e) {
                switch (typeof e) {
                  case "number":
                    return isNaN(e) || !isFinite(e) ? null : e;
                  case "boolean":
                    return e;
                  case "string":
                    return this._xssFilter.process(e);
                  case "object":
                    return this._iterateOverObject(e);
                  default:
                    return null;
                }
              }),
              (e.prototype.validate = function (e) {
                var t = this.sanitize(e);
                return { isValid: e === t, sanitized: t };
              }),
              (e.prototype._extendObjectOfArrays = function (e) {
                var t = {};
                return (
                  e.forEach(function (e) {
                    Object.keys(e).forEach(function (n) {
                      Array.isArray(e[n]) && Array.isArray(t[n])
                        ? (t[n] = t[n].concat(e[n]))
                        : (t[n] = e[n]);
                    });
                  }),
                  t
                );
              }),
              (e.prototype._iterateOverObject = function (e) {
                var t = this;
                try {
                  var n = !1,
                    i = void 0;
                  if (Array.isArray(e))
                    i = e.reduce(function (e, i) {
                      var a = t.validate(i);
                      return a.isValid
                        ? e.concat([i])
                        : ((n = !0), e.concat([a.sanitized]));
                    }, []);
                  else {
                    if (!a()(e)) return null;
                    i = Object.keys(e).reduce(function (i, a) {
                      var r = e[a],
                        o = t.validate(r);
                      return (
                        o.isValid
                          ? (i[a] = r)
                          : ((n = !0), (i[a] = o.sanitized)),
                        i
                      );
                    }, {});
                  }
                  return n ? i : e;
                } catch (e) {
                  return null;
                }
              }),
              e
            );
          })();
      },
    }).Sanitizer;
  }),
  define("lib-build/tpl!storymaps/tpl/ui/desktop/TestPanel", [], function () {
    return function (obj) {
      obj || (obj = {});
      var __t,
        __p = "",
        __e = _.escape;
      with (obj) __p += '<div class="userInput"></div>';
      return __p;
    };
  }),
  define(
    "lib-build/css!storymaps/tpl/ui/desktop/TestPanel",
    [],
    function () {}
  ),
  define("lib-build/css!storymaps/tpl/ui/desktop/Common", [], function () {}),
  define(
    "storymaps/tpl/ui/desktop/TestPanel",
    [
      "lib-build/tpl!./TestPanel",
      "lib-build/css!./TestPanel",
      "lib-build/css!./Common",
    ],
    function (e) {
      return function (t, n, i) {
        function a() {
          t.find(".userInput").attr("contenteditable", "true");
        }
        function r() {
          n &&
            t.find(".userInput").blur(function () {
              i($(this).html());
            });
        }
        (this.init = function (i) {
          (i = i || {}), t.html(e({})), t.show(), n && a(), r();
        }),
          (this.update = function (e) {
            (e = e || {}), t.find(".userInput").html(e.data);
          }),
          (this.resize = function () {}),
          (this.showEntryIndex = function () {}),
          (this.destroy = function () {});
      };
    }
  ),
  define("lib-build/tpl!storymaps/tpl/ui/desktop/TilePanel", [], function () {
    return function (obj) {
      obj || (obj = {});
      var __t,
        __p = "",
        __e = _.escape;
      with (obj)
        __p +=
          '<div id="paneLeft">\r\n\t<ul id="myList" class="tilelist"></ul>\r\n\t<div class="noFeature">\r\n\t\t<span class="noFeatureText">\r\n\t\t\t' +
          (null == (__t = noPlaces) ? "" : __t) +
          "\r\n\t\t</span>\r\n\t</div>\r\n</div>\r\n";
      return __p;
    };
  }),
  define(
    "lib-build/css!storymaps/tpl/ui/desktop/TilePanel",
    [],
    function () {}
  ),
  define(
    "storymaps/tpl/ui/desktop/TilePanel",
    [
      "esri/geometry/screenUtils",
      "../../core/Helper",
      "storymaps/common/utils/CommonHelper",
      "lib-build/tpl!./TilePanel",
      "lib-build/css!./TilePanel",
      "../../core/WebApplicationData",
    ],
    function (e, t, n, i) {
      return function (e, a, r) {
        var o = this,
          s = a,
          l = new t(),
          p = /iPhone|iPod/.test(navigator.userAgent) && !window.MSStream,
          c = !1;
        (this.tileClick = !0),
          $(document).bind("cbox_complete", function () {
            $(".details .rightDiv").height(
              $(".details").height() - $(".detailsTitle").height() - 20
            );
          }),
          (this.init = function () {
            $(e).prepend(i({ noPlaces: i18n.viewer.general.noPlaces })),
              $("#mainStagePanel").width(
                $("#contentPanel").width() - $("#paneLeft").width()
              ),
              $("#mainStagePanel").css({ left: $("#paneLeft").width() });
          }),
          (this.resize = function (e) {
            $("#paneLeft").width(e), $(".tilelist").width(e);
          }),
          (this.createTab = function (e, t) {
            $("#tabs").append(
              '<div class="tab" tabindex="0">' + t.title + "</div>"
            );
          }),
          (this.setTabClick = function () {
            $.each($(".entry.visible"), function (e) {
              $(this).click(function () {
                (s.selected = null),
                  s.activateLayer(e),
                  $(".detailContainer").hide(),
                  app.mapTips && app.mapTips.clean();
              });
            });
          }),
          (this.clearTilePanel = function () {
            p &&
              ($.each($("#mobileList").find("img"), function (e, t) {
                $(t).attr(
                  "src",
                  "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                );
              }),
              $("#mobileList").empty()),
              $("#myList").empty();
          }),
          (this.buildTilePanel = function () {
            o.clearTilePanel();
            var e,
              t,
              i,
              a,
              s,
              l,
              p = !1;
            if (
              app.layerCurrent &&
              app.layerCurrent.graphics &&
              app.layerCurrent.graphics.length
            ) {
              var c = app.layerCurrent.graphics[0].attributes,
                d = c.number
                  ? "number"
                  : c.Number
                  ? "Number"
                  : c.NUMBER
                  ? "NUMBER"
                  : c.PLACENUMSL
                  ? "PLACENUMSL"
                  : null;
              d &&
                app.layerCurrent.graphics.sort(function (e, t) {
                  return parseInt(e.attributes[d]) - parseInt(t.attributes[d]);
                }),
                $.each(app.layerCurrent.graphics, function (o, c) {
                  app.map.extent.contains(c.geometry)
                    ? ((e = "block"), (p = !0))
                    : app.data.getWebAppData().getGeneralOptions()
                        .filterByExtent &&
                      !app.isInBuilder &&
                      (e = "none"),
                    (t = $(
                      '<li tabindex="0" id="item' +
                        c.attributes.shortlist_id +
                        '" style="display:' +
                        e +
                        '">'
                    )),
                    (i = $('<div class="tileImage"></div>')),
                    $(i).attr("alt", "");
                  var d = c.attributes,
                    u =
                      d[
                        $.grep(Object.keys(d), function (e) {
                          return "thumb_url" == e.toLowerCase();
                        })[0]
                      ],
                    f =
                      d[
                        $.grep(Object.keys(d), function (e) {
                          return "pic_url" == e.toLowerCase();
                        })[0]
                      ];
                  u
                    ? (u.indexOf("sharing/rest/content/items/") > -1 &&
                        (u = n.possiblyAddToken(u)),
                      $(i).css("background-image", "url(" + u + ")"),
                      $(i).find("i").hide())
                    : f
                    ? ((u = f),
                      u.indexOf("sharing/rest/content/items/") > -1 &&
                        (u = n.possiblyAddToken(u)),
                      $(i).css("background-image", "url(" + u + ")"),
                      $(i).find("i").hide())
                    : $(i).append(
                        '<i class=" fa fa-camera" aria-hidden="true"></i>'
                      ),
                    (a = $('<div class="footer"></div>'));
                  var h =
                      d[
                        $.grep(Object.keys(d), function (e) {
                          return "name" == e.toLowerCase();
                        })[0]
                      ],
                    m = h || "Unnamed Place";
                  if (
                    ((l = $('<div class="blurb">' + m + "</div>")),
                    r.getGeneralOptions().numberedIcons)
                  ) {
                    var g =
                      app.layerCurrent.graphics[o].attributes.number ||
                      app.layerCurrent.graphics[o].attributes.Number ||
                      app.layerCurrent.graphics[o].attributes.NUMBER ||
                      app.layerCurrent.graphics[o].attributes.PLACENUMSL;
                    c.attributes.number < 100
                      ? (s = $(
                          '<div class="num" style="background-color:' +
                            app.layerCurrent.color +
                            '">' +
                            g +
                            "</div>"
                        ))
                      : ((s = $(
                          '<div class="num longNum" style="background-color:' +
                            app.layerCurrent.color +
                            '">' +
                            g +
                            "</div>"
                        )),
                        (l = $(
                          '<div class="blurb longNumBlurb">' + h + "</div>"
                        ))),
                      $(a).append(s);
                  }
                  $(a).append(l),
                    $(t).append(a),
                    $(t).data("shortlist-id", c.attributes.shortlist_id),
                    app.ui.mobileFeatureList.buildList(o, c, t),
                    $(t).append(i),
                    app.isInBuilder &&
                      (c.attributes.locationSet ||
                      app.data.getWebAppData().getIsExternalData()
                        ? $(t).addClass("located")
                        : $(t)
                            .find(".tileImage")
                            .append(
                              '<div class="unlocated" style="outline: none;"></div>'
                            )),
                    $("#myList").append(t);
                }),
                o.setTileEvents(),
                $("ul.tilelist").animate({ scrollTop: 0 }, { duration: 200 }),
                p ||
                !app.data.getWebAppData().getGeneralOptions().filterByExtent ||
                app.isInBuilder
                  ? $(".noFeature").css("display", "none")
                  : $(".noFeature").css("display", "block"),
                r.getGeneralOptions().numberedIcons ||
                  $("ul.tilelist .blurb").addClass("unNumBlurb");
            }
          }),
          (this.findTile = function (t) {
            return $.grep($(e).find($("ul.tilelist li")), function (e) {
              return $(e).data("shortlist-id") == t;
            })[0];
          }),
          (this.findMobileTile = function (e) {
            return $.grep($("ul.mobileTileList li"), function (t) {
              return $(t).data("shortlist-id") == e;
            })[0];
          }),
          (this.setTileEvents = function () {
            $("ul.tilelist li").mouseover(o.tile_onMouseOver),
              $("ul.tilelist li").mouseout(o.tile_onMouseOut),
              $("ul.tilelist li").click(o.tile_onClick),
              $("ul.tilelist li").on("touchmove", function () {
                c = !0;
              }),
              $("ul.tilelist li").on("touchend", o.tile_onClick);
          }),
          (this.refreshList = function () {
            var e,
              t,
              n = !1;
            app.layerCurrent &&
              app.layerCurrent.graphics.length &&
              setTimeout(function () {
                $.each(app.layerCurrent.graphics, function (i, a) {
                  (e = o.findTile(a.attributes.shortlist_id)),
                    (t = o.findMobileTile(a.attributes.shortlist_id)),
                    app.data.getWebAppData().getGeneralOptions()
                      .filterByExtent &&
                      !app.isInBuilder &&
                      (app.map.extent.contains(a.geometry)
                        ? ("none" == $(e).css("display") &&
                            $(e).stop().fadeIn(),
                          (n = !0))
                        : "none" != $(e).css("display") &&
                          $(e).stop().fadeOut(1e3));
                }),
                  n ||
                  !app.data.getWebAppData().getGeneralOptions()
                    .filterByExtent ||
                  app.isInBuilder
                    ? $(".noFeature").css("display", "none")
                    : $(".noFeature").css("display", "block");
              }, 100);
          }),
          (this.initSortable = function () {
            $("#myList").sortable({
              update: function () {
                app.addFeatureBar.updateNumber();
              },
            }),
              $("#myList").addClass("organize");
          }),
          (this.destroySortable = function () {
            $("#myList").sortable("destroy"),
              $("#myList").css("background-color", "#C7C7C7"),
              $("body").removeClass("organizeFeatures"),
              $("#myList").removeClass("organize");
          }),
          (this.tile_onMouseOver = function () {
            var e = this,
              t = $.grep(app.layerCurrent.graphics, function (t) {
                return t.attributes.shortlist_id == $(e).data("shortlist-id");
              });
            if (t[0]) {
              t[0].symbol.setWidth(s.lutIconSpecs.medium.getWidth()),
                t[0].symbol.setHeight(s.lutIconSpecs.medium.getHeight()),
                t[0].symbol.setOffset(
                  s.lutIconSpecs.medium.getOffsetX(),
                  s.lutIconSpecs.medium.getOffsetY()
                ),
                t[0].draw(),
                l.isIE() || s.moveGraphicToFront(t[0]);
              var n = t[0].attributes,
                i =
                  n[
                    $.grep(Object.keys(n), function (e) {
                      return "name" == e.toLowerCase();
                    })[0]
                  ];
              s.buildMapHoverTips(i, t[0]);
            }
          }),
          (this.tile_onMouseOut = function () {
            if (null != s.selected) {
              var e = parseInt($(this).attr("id").substring(4));
              if (s.selected.attributes.shortlist_id == e) return;
            }
            var t = this,
              n = $.grep(app.layerCurrent.graphics, function (e) {
                return e.attributes.shortlist_id == $(t).data("shortlist-id");
              });
            n[0] &&
              (n[0].symbol.setWidth(s.lutIconSpecs.tiny.getWidth()),
              n[0].symbol.setHeight(s.lutIconSpecs.tiny.getHeight()),
              n[0].symbol.setOffset(
                s.lutIconSpecs.tiny.getOffsetX(),
                s.lutIconSpecs.tiny.getOffsetY()
              ),
              n[0].draw()),
              app.mapTips && app.mapTips.clean(!0);
          }),
          (this.tile_onClick = function (e) {
            if (!$("body").hasClass("organizeFeatures")) {
              if (c) return void (c = !1);
              1 == e.which || 2 == e.which || 3 == e.which
                ? (o.tileClick = !0)
                : (o.tileClick = !1);
              var t = $(this).data("shortlist-id");
              s.preSelection(),
                (s.selected = $.grep(app.layerCurrent.graphics, function (e) {
                  return e.attributes.shortlist_id == t;
                })[0]),
                s.postSelection(),
                $("#mobileTitlePage").css("display", "none"),
                s.themeSelected || app.ui.mobileFeatureList.selectTheme(0),
                (s.themeSelected = !0);
            }
          });
      };
    }
  ),
  define("lib-build/tpl!storymaps/tpl/ui/desktop/DetailPanel", [], function () {
    return function (obj) {
      obj || (obj = {});
      var __t,
        __p = "",
        __e = _.escape;
      with (obj)
        __p +=
          '<div class="detailContainer swiper-container">\r\n\t<button type="button" class=\'detailClose ion-android-close\' style=""></button>\r\n\t<div class="detail-btn-container detail-btn-left">\r\n\t\t<div class="detail-btn ion-chevron-left" style="outline: none;"></div>\r\n\t</div>\r\n\t<div class="detail-btn-container detail-btn-right">\r\n\t\t<div class="detail-btn ion-chevron-right" style="outline: none;"></div>\r\n\t</div>\r\n\t<div class="detailView swiper-wrapper"></div>\r\n</div>\r\n';
      return __p;
    };
  }),
  define("lib-build/tpl!storymaps/tpl/ui/desktop/DetailSlide", [], function () {
    return function (obj) {
      obj || (obj = {});
      var __t,
        __p = "",
        __e = _.escape;
      with (obj)
        __p +=
          '<div class=\'swiper-slide\'>\r\n\t<div class=\'detailHeader\'>\r\n\t\t<div class="detailFeatureNum" ></div>\r\n\t\t<div class=\'detailFeatureTitle\'></div>\r\n\t</div>\r\n\t<div class="detailTextContainer">\r\n\t\t<div class="detailPictureDiv">\r\n\t\t\t<img class="swiper-lazy">\r\n\t\t\t<div class="swiper-lazy-preloader"></div>\r\n\t\t</div>\r\n\t\t<div class=\'shortDesc\'></div>\r\n\t\t<div class=\'description detailFeatureDesc\'></div>\r\n\t\t<div class="website"></div>\r\n\t</div>\r\n</div>\r\n';
      return __p;
    };
  }),
  define(
    "lib-build/css!storymaps/tpl/ui/desktop/DetailPanel",
    [],
    function () {}
  ),
  define(
    "storymaps/tpl/ui/desktop/DetailPanel",
    [
      "../../core/Helper",
      "storymaps/common/utils/CommonHelper",
      "lib-build/tpl!./DetailPanel",
      "lib-build/tpl!./DetailSlide",
      "lib-build/css!./DetailPanel",
    ],
    function (e, t, n, i) {
      return function (a, r, o, s, l) {
        function p() {
          var e = $(".entry.active").index();
          e < 0 && (e = 0),
            $(".detailContainer").show(),
            b[e].slideNext(),
            b[e].slidePrev(),
            h.resize(),
            $(".detailContainer").hide();
        }
        function c() {
          a.find(".userInput").attr("contenteditable", "true");
        }
        function d() {
          r &&
            a.find(".userInput").blur(function () {
              o($(this).html());
            });
        }
        var u,
          f = s,
          h = this,
          m = new e(),
          g = 0,
          v = !1,
          b = [],
          y = {},
          w = !1,
          x = l,
          C = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream,
          T = /(android)/i.test(navigator.userAgent),
          S = {};
        (h.loaded = !1),
          (h.viewed = !1),
          (this.init = function (e) {
            (e = e || {}), $(a).show(), r && c(), d();
          }),
          (this.buildFeatureViews = function (e) {
            var t = $(".entry.active").index();
            t < 0 && (t = 0);
            var i = e || [];
            if (!i.length) {
              var r = app.map.getLayer(app.data.getShortlistLayerId());
              $.each(app.data.getStory(), function (e, t) {
                var n = {
                  title: t.title ? t.title : "tab " + (i.length + 1),
                  features: [],
                };
                i.push(n);
              }),
                $.each(r.graphics, function (e, t) {
                  t.attributes.locationSet &&
                    t.attributes.pic_url &&
                    t.attributes.name &&
                    "Unnamed Place" != t.attributes.name &&
                    i[t.attributes.tab_id].features.push(t);
                });
            }
            if (!v)
              if (C) {
                $(a).prepend(n({}));
                var o = $(".detailView")[0];
                $(o).attr("id", "detailView0"),
                  (S = new Swiper($(".detailContainer")[0], {
                    speed: 0,
                    setWrapperSize: !0,
                  })),
                  S.init(),
                  (v = !0),
                  a.find(".detailClose").click(function () {
                    a.find(".detailContainer").hide(),
                      "small" == app.ui.mobileIntro.screenSize &&
                        app.ui.mobileFeatureList.showMobileList(),
                      f.unselect();
                  }),
                  a.find($(".detail-btn-left")[0]).click(function () {
                    var e = app.layerCurrent.graphics,
                      t = null,
                      n = [];
                    $.each(e, function (e, t) {
                      (!app.map.extent.contains(t.geometry) &&
                        app.data.getWebAppData().getGeneralOptions()
                          .filterByExtent) ||
                        n.push(t);
                    });
                    var i = null;
                    $.grep(n, function (e, t) {
                      e.attributes.shortlist_id ==
                        app.ui.mainView.selected.attributes.shortlist_id &&
                        (i = t);
                    }),
                      (t = 0 !== i ? n[i - 1] : n[n.length - 1]),
                      f.unselect(),
                      (f.selected = t),
                      app.map.extent.contains(t.geometry) ||
                        app.map.centerAt(t.geometry),
                      f.selectSymbol(),
                      h.buildSlide();
                  }),
                  a.find($(".detail-btn-right")[0]).click(function () {
                    var e = app.layerCurrent.graphics,
                      t = null,
                      n = [];
                    $.each(e, function (e, t) {
                      (!app.map.extent.contains(t.geometry) &&
                        app.data.getWebAppData().getGeneralOptions()
                          .filterByExtent) ||
                        n.push(t);
                    });
                    var i = null;
                    $.grep(n, function (e, t) {
                      e.attributes.shortlist_id ==
                        app.ui.mainView.selected.attributes.shortlist_id &&
                        (i = t);
                    }),
                      (t = i !== n.length - 1 ? n[i + 1] : n[0]),
                      f.unselect(),
                      (f.selected = t),
                      app.map.extent.contains(t.geometry) ||
                        app.map.centerAt(t.geometry),
                      f.selectSymbol(),
                      h.buildSlide();
                  }),
                  a.find(".detailPictureDiv img").click(function () {
                    var e = app.layerCurrent.graphics,
                      t = null,
                      n = [];
                    $.each(e, function (e, t) {
                      (!app.map.extent.contains(t.geometry) &&
                        app.data.getWebAppData().getGeneralOptions()
                          .filterByExtent) ||
                        n.push(t);
                    });
                    var i = null;
                    $.grep(n, function (e, t) {
                      e.attributes.shortlist_id ==
                        app.ui.mainView.selected.attributes.shortlist_id &&
                        (i = t);
                    }),
                      (t = i !== n.length - 1 ? n[i + 1] : n[0]),
                      f.unselect(),
                      (f.selected = t),
                      f.selectSymbol(),
                      h.buildSlide();
                  });
              } else
                $.each(i, function (e) {
                  if (
                    0 !== e ||
                    (app.isInBuilder &&
                      !app.data.getWebAppData().getIsExternalData())
                  ) {
                    var t = $(a).find(" .detailContainer")[e - 1];
                    $(t).after(n({}));
                  } else $(a).prepend(n({}));
                  app.isInBuilder &&
                    app.data.getWebAppData().getIsExternalData() &&
                    ($(".detailContainer.swiper-container").addClass(
                      "externalData"
                    ),
                    $(".detail-btn-add").addClass("externalData"));
                  var i = $(".detailView")[e];
                  $(i).attr("id", "detailView" + e),
                    (b[e] = {}),
                    (y[String(e)] = []);
                });
            if (!C && ((v = !0), !y[String(t)].length)) {
              $(".detailContainer").css("z-index", "0");
              var s = $(".detailContainer")[t];
              $(s).css("z-index", "99"), (g = 0), C || h.buildSlides(i);
            }
          }),
          (this.buildSlide = function () {
            var e = $(".entry.active").index();
            e < 0 && (e = 0),
              S.removeAllSlides(),
              a.find("#detailView0").append(i()),
              $(".swiper-lazy-preloader").addClass("iOS-hidden");
            var n = $(".detailContainer")[0],
              r = $(n).find(".swiper-slide")[0];
            $(r).addClass("swiper-no-swiping");
            var o = app.ui.mainView.selected.attributes,
              s =
                o[
                  $.grep(Object.keys(o), function (e) {
                    return "name" == e.toLowerCase();
                  })[0]
                ],
              l =
                o[
                  $.grep(Object.keys(o), function (e) {
                    return "description" == e.toLowerCase();
                  })[0]
                ],
              p = "";
            if (app.data.getWebAppData().getIsExternalData()) {
              p =
                o[
                  $.grep(Object.keys(o), function (e) {
                    return "short_desc" == e.toLowerCase();
                  })[0]
                ];
              var c =
                  o[
                    $.grep(Object.keys(o), function (e) {
                      return "desc1" == e.toLowerCase();
                    })[0]
                  ],
                d =
                  o[
                    $.grep(Object.keys(o), function (e) {
                      return "desc2" == e.toLowerCase();
                    })[0]
                  ],
                u =
                  o[
                    $.grep(Object.keys(o), function (e) {
                      return "desc3" == e.toLowerCase();
                    })[0]
                  ],
                f =
                  o[
                    $.grep(Object.keys(o), function (e) {
                      return "desc4" == e.toLowerCase();
                    })[0]
                  ],
                m =
                  o[
                    $.grep(Object.keys(o), function (e) {
                      return "desc5" == e.toLowerCase();
                    })[0]
                  ];
              c && (l ? (l += "<p>" + c + "</p>") : (l = "<p>" + c + "</p>")),
                d && (l ? (l += "<p>" + d + "</p>") : (l = "<p>" + d + "</p>")),
                u && (l ? (l += "<p>" + u + "</p>") : (l = "<p>" + u + "</p>")),
                f && (l ? (l += "<p>" + f + "</p>") : (l = "<p>" + f + "</p>")),
                m && (l ? (l += "<p>" + m + "</p>") : (l = "<p>" + m + "</p>"));
            }
            var g =
                o[
                  $.grep(Object.keys(o), function (e) {
                    return "pic_url" == e.toLowerCase();
                  })[0]
                ],
              v =
                o[
                  $.grep(Object.keys(o), function (e) {
                    return "thumb_url" == e.toLowerCase();
                  })[0]
                ],
              b =
                o[
                  $.grep(Object.keys(o), function (e) {
                    return "website" == e.toLowerCase();
                  })[0]
                ];
            if (
              (app.data.getWebAppData().getGeneralOptions().numberedIcons
                ? ($(r)
                    .find(".detailFeatureNum")
                    .css("background-color", app.data.getStory()[e].color),
                  $(r)
                    .find(".detailFeatureNum")
                    .text(o.PLACENUMSL ? o.PLACENUMSL : o.number))
                : ($(r).find(".detailFeatureNum").hide(),
                  $(r).find(".detailFeatureTitle").addClass("notNumbered")),
              s && $(r).find(".detailFeatureTitle").html(s),
              g)
            ) {
              (g = v || g),
                g.indexOf("sharing/rest/content/items/") > -1 &&
                  (g = t.possiblyAddToken(g));
              ($(r).find("img")[0].onload = function () {
                $(this)
                  .parent()
                  .find(".imageLoadingIndicator")
                  .css("display", "none"),
                  h.resize();
              }),
                $(r).find("img").attr("src", g);
            } else $(r).find(".imageLoadingIndicator").css("display", "none");
            p
              ? $(r).find(".shortDesc").html(p)
              : $(r).find(".shortDesc").remove(),
              l && $(r).find(".description").html(l),
              b &&
                ($(r).find(".website").empty(),
                $(r)
                  .find(".website")
                  .append("<a href=" + b + ' target="_blank" >More info</a>'),
                $(".website").show()),
              $(r).data("shortlist-id", o.shortlist_id);
            var y = app.data.getStory()[e].color;
            $("#detailView0").find(".detailHeader").css("border-top-color", y),
              h.resize(),
              $("#mobilePaneList").hide(),
              setTimeout(function () {
                $(n).show(), $(n).css("z-index", 99);
              }, 0);
          }),
          (this.buildSlides = function (e) {
            (w = !0), (h.loaded = !1), (u = e);
            var n = $(".entry.active").index();
            n < 0 && (n = 0);
            var r = u[n],
              o = r.features;
            if (o[0] && o[0].attributes) {
              o[0].attributes[
                $.grep(Object.keys(o[0].attributes), function (e) {
                  return "number" == e.toLowerCase();
                })[0]
              ] &&
                o.sort(function (e, t) {
                  var n =
                      e.attributes[
                        $.grep(Object.keys(e.attributes), function (e) {
                          return "number" == e.toLowerCase();
                        })[0]
                      ],
                    i =
                      t.attributes[
                        $.grep(Object.keys(t.attributes), function (e) {
                          return "number" == e.toLowerCase();
                        })[0]
                      ];
                  return parseInt(n) - parseInt(i);
                });
            }
            for (; g < o.length; g++) {
              var s = $(".detailContainer")[n];
              a.find("#detailView" + n).append(i());
              var l = $(s).find(".swiper-slide")[g];
              $(l).on("mousedown", function () {
                $(this).addClass("swiper-no-swiping");
              }),
                navigator.userAgent.match(/Trident.*rv\:11\./) &&
                  navigator.userAgent.match(/Trident.*rv\:11\./).length &&
                  $(l).on("pointerdown", function () {
                    $(this).addClass("swiper-no-swiping");
                  }),
                $(l).on("mouseup", function () {
                  $(this).removeClass("swiper-no-swiping");
                });
              var c = o[g].attributes,
                d =
                  c[
                    $.grep(Object.keys(c), function (e) {
                      return "name" == e.toLowerCase();
                    })[0]
                  ],
                v =
                  c[
                    $.grep(Object.keys(c), function (e) {
                      return "description" == e.toLowerCase();
                    })[0]
                  ],
                x = "";
              if (app.data.getWebAppData().getIsExternalData()) {
                x =
                  c[
                    $.grep(Object.keys(c), function (e) {
                      return "short_desc" == e.toLowerCase();
                    })[0]
                  ];
                var C =
                    c[
                      $.grep(Object.keys(c), function (e) {
                        return "desc1" == e.toLowerCase();
                      })[0]
                    ],
                  S =
                    c[
                      $.grep(Object.keys(c), function (e) {
                        return "desc2" == e.toLowerCase();
                      })[0]
                    ],
                  k =
                    c[
                      $.grep(Object.keys(c), function (e) {
                        return "desc3" == e.toLowerCase();
                      })[0]
                    ],
                  E =
                    c[
                      $.grep(Object.keys(c), function (e) {
                        return "desc4" == e.toLowerCase();
                      })[0]
                    ],
                  I =
                    c[
                      $.grep(Object.keys(c), function (e) {
                        return "desc5" == e.toLowerCase();
                      })[0]
                    ];
                C && (v ? (v += "<p>" + C + "</p>") : (v = "<p>" + C + "</p>")),
                  S &&
                    (v ? (v += "<p>" + S + "</p>") : (v = "<p>" + S + "</p>")),
                  k &&
                    (v ? (v += "<p>" + k + "</p>") : (v = "<p>" + k + "</p>")),
                  E &&
                    (v ? (v += "<p>" + E + "</p>") : (v = "<p>" + E + "</p>")),
                  I &&
                    (v ? (v += "<p>" + I + "</p>") : (v = "<p>" + I + "</p>"));
              }
              var A =
                  c[
                    $.grep(Object.keys(c), function (e) {
                      return "pic_url" == e.toLowerCase();
                    })[0]
                  ],
                L =
                  c[
                    $.grep(Object.keys(c), function (e) {
                      return "thumb_url" == e.toLowerCase();
                    })[0]
                  ],
                _ =
                  c[
                    $.grep(Object.keys(c), function (e) {
                      return "website" == e.toLowerCase();
                    })[0]
                  ];
              if (
                (m.prependURLHTTP(_),
                app.data.getWebAppData().getGeneralOptions().numberedIcons
                  ? ($(l)
                      .find(".detailFeatureNum")
                      .css("background-color", app.data.getStory()[n].color),
                    $(l)
                      .find(".detailFeatureNum")
                      .text(c.PLACENUMSL ? c.PLACENUMSL : c.number))
                  : ($(l).find(".detailFeatureNum").hide(),
                    $(l).find(".detailFeatureTitle").addClass("notNumbered")),
                d && $(l).find(".detailFeatureTitle").html(d),
                A)
              ) {
                var D = $(l).find("img")[0];
                if (A.indexOf("sharing/rest/content/items/") > -1) {
                  A.indexOf("http") > -1 &&
                    5 == A.indexOf("https") &&
                    (A = A.slice(5));
                  (A.match(/https/g) || [].length).length > 1 &&
                    (A = A.slice(6));
                }
                T
                  ? ((A = L || A),
                    A.indexOf("sharing/rest/content/items/") > -1 &&
                      (A = t.possiblyAddToken(A)),
                    $(l).find("img").attr("src", A))
                  : (A.indexOf("sharing/rest/content/items/") > -1 &&
                      (A = t.possiblyAddToken(A)),
                    $(l).find("img").attr("data-src", A),
                    $(l).find("img").attr("alt", "")),
                  D.complete && $(l).find(".imageLoadingIndicator").hide();
              } else $(l).find(".imageLoadingIndicator").css("display", "none");
              if (
                (x
                  ? $(l).find(".shortDesc").html(x)
                  : $(l).find(".shortDesc").remove(),
                v && $(l).find(".description").html(v),
                _ &&
                  ($(l)
                    .find(".website")
                    .append("<a href=" + _ + ' target="_blank" >More info</a>'),
                  $(".website").show(),
                  app.data.getWebAppData().getIsExternalData() &&
                    $(".website").css("margin-top", 0)),
                $(l).data("shortlist-id", c.shortlist_id),
                $(l)
                  .find(".detailPictureDiv img")
                  .click(function () {
                    var e = $(".entry.active").index();
                    if ((e < 0 && (e = 0), !f.selected)) {
                      var t = b[e].activeIndex + 1;
                      b[e].activeIndex === b[e].slides.length - 1 && (t = 0);
                      var n = b[e].slides[t],
                        i = $(n).data("shortlist-id"),
                        a = app.map.getLayer(
                          app.data.getWebAppData().getShortlistLayerId()
                        );
                      app.ui.mainView.selected = $.grep(
                        a.graphics,
                        function (e) {
                          return e.attributes.shortlist_id == i;
                        }
                      )[0];
                    }
                    (f.selected.updated = !1),
                      b[e].activeIndex == b[e].slides.length - 1
                        ? ((P || M) &&
                            $(".swiper-slide-active .detailTextContainer").css({
                              "overflow-y": "visible",
                            }),
                          b[e].slideTo(0, 0),
                          (P || M) &&
                            $(".swiper-slide-active .detailTextContainer").css({
                              "overflow-y": "auto",
                            }))
                        : ((P || M) &&
                            $(".swiper-slide-active .detailTextContainer").css({
                              "overflow-y": "visible",
                            }),
                          b[e].slideNext(),
                          (P || M) &&
                            $(".swiper-slide-active .detailTextContainer").css({
                              "overflow-y": "auto",
                            }));
                  }),
                y[String(n)].push(l),
                g % 10 == 0 && g + 1 < o.length)
              )
                return (
                  setTimeout(function () {
                    g++, h.buildSlides(e);
                  }, 0),
                  !1
                );
              if (g + 1 == o.length) {
                var O = new Swiper($(".detailContainer")[n], {
                  speed: 0,
                  setWrapperSize: !0,
                  lazyLoading: !0,
                });
                (b[n] = O),
                  O.init(),
                  O.update(),
                  O.on("onSlideChangeEnd", function (e) {
                    if (!w) {
                      if ((f.preSelection(), f.selected.updated))
                        return void (
                          !f.selected ||
                          app.map.extent.contains(f.selected.geometry) ||
                          app.data.getWebAppData().getGeneralOptions()
                            .filterByExtent ||
                          app.map.centerAt(f.selected.geometry)
                        );
                      var t = $(".entry.active").index();
                      if ((t < 0 && (t = 0), h.viewed && !f.selected.updated)) {
                        var n = O.slides[O.activeIndex],
                          i = $(n).data("shortlist-id"),
                          a = $.grep(app.layerCurrent.graphics, function (e) {
                            return e.attributes.shortlist_id == i;
                          })[0];
                        (f.selected = a),
                          !f.selected ||
                            app.map.extent.contains(f.selected.geometry) ||
                            app.data.getWebAppData().getGeneralOptions()
                              .filterByExtent ||
                            app.map.centerAt(f.selected.geometry);
                      }
                      if (
                        (setTimeout(function () {
                          f.buildMapTips();
                        }, 0),
                        $(".showOnce").length)
                      ) {
                        var r = $(".showOnce")[0];
                        $(r).hasClass("swiper-slide-active") ||
                          ($(".swiper-slide").removeClass("showOnce"),
                          b[t].removeSlide(b[t].previousIndex),
                          b[t].update());
                      }
                      1 == b[t].slides.length
                        ? $(".detail-btn-container").hide()
                        : $(".detail-btn-container").show(),
                        h.resize(),
                        O.update(),
                        $(".esriPopup").hide();
                    }
                  }),
                  a.find(".detail-btn-left").mouseover(function () {
                    $(".detail-btn-left").css("opacity", 1),
                      $(".detail-btn-right").css("opacity", 0.8);
                  }),
                  a.find(".detail-btn-right").mouseover(function () {
                    $(".detail-btn-right").css("opacity", 1),
                      $(".detail-btn-left").css("opacity", 0.8);
                  }),
                  a.find(".detail-btn-left").mouseout(function () {
                    $(".detail-btn-left").css("opacity", 0.8);
                  }),
                  a.find(".detail-btn-right").mouseout(function () {
                    $(".detail-btn-right").css("opacity", 0.8);
                  }),
                  a.find(".detailClose").click(function () {
                    a.find(".detailContainer").hide(),
                      "small" == app.ui.mobileIntro.screenSize &&
                        app.ui.mobileFeatureList.showMobileList(),
                      f.unselect();
                  });
                var P = navigator.appVersion.indexOf("Edge") > 0,
                  M = navigator.userAgent.indexOf("Windows NT 10.0") > 0;
                a.find($(".detail-btn-left")[n]).click(function () {
                  if (!f.selected) {
                    var e = b[n].activeIndex - 1;
                    0 === b[n].activeIndex && (e = b[n].slides.length - 1);
                    var t = b[n].slides[e],
                      i = $(t).data("shortlist-id"),
                      a = app.map.getLayer(
                        app.data.getWebAppData().getShortlistLayerId()
                      );
                    app.ui.mainView.selected = $.grep(a.graphics, function (e) {
                      return e.attributes.shortlist_id == i;
                    })[0];
                  }
                  (f.selected.updated = !1),
                    0 === b[n].activeIndex
                      ? ((P || M) &&
                          $(".swiper-slide-active .detailTextContainer").css({
                            "overflow-y": "visible",
                          }),
                        b[n].slideTo(b[n].slides.length - 1, 0),
                        (P || M) &&
                          $(".swiper-slide-active .detailTextContainer").css({
                            "overflow-y": "auto",
                          }))
                      : ((P || M) &&
                          $(".swiper-slide-active .detailTextContainer").css({
                            "overflow-y": "visible",
                          }),
                        b[n].slidePrev(),
                        (P || M) &&
                          $(".swiper-slide-active .detailTextContainer").css({
                            "overflow-y": "auto",
                          }));
                }),
                  a.find($(".detail-btn-right")[n]).click(function () {
                    if (!f.selected) {
                      var e = b[n].activeIndex + 1;
                      b[n].activeIndex === b[n].slides.length - 1 && (e = 0);
                      var t = b[n].slides[e],
                        i = $(t).data("shortlist-id"),
                        a = app.map.getLayer(
                          app.data.getWebAppData().getShortlistLayerId()
                        );
                      app.ui.mainView.selected = $.grep(
                        a.graphics,
                        function (e) {
                          return e.attributes.shortlist_id == i;
                        }
                      )[0];
                    }
                    (f.selected.updated = !1),
                      b[n].activeIndex == b[n].slides.length - 1
                        ? ((P || M) &&
                            $(".swiper-slide-active .detailTextContainer").css({
                              "overflow-y": "visible",
                            }),
                          b[n].slideTo(0, 0),
                          (P || M) &&
                            $(".swiper-slide-active .detailTextContainer").css({
                              "overflow-y": "auto",
                            }))
                        : ((P || M) &&
                            $(".swiper-slide-active .detailTextContainer").css({
                              "overflow-y": "visible",
                            }),
                          b[n].slideNext(),
                          (P || M) &&
                            $(".swiper-slide-active .detailTextContainer").css({
                              "overflow-y": "auto",
                            }));
                  });
                var B = app.data.getStory()[n].color;
                $("#detailView" + n)
                  .find(".detailHeader")
                  .css("border-top-color", B),
                  b[n].update(),
                  p(),
                  h.resize();
              }
            }
            (h.loaded = !0), (h.viewed = !1), (w = !1);
          }),
          (this.showDetails = function (e) {
            if (
              (app.data.getWebAppData().getGeneralOptions().filterByExtent ||
                ((f.selected = e), (f.selected.updated = !0)),
              null != e)
            ) {
              h.resize(),
                app.data.getWebAppData().getGeneralOptions().filterByExtent &&
                  p();
              var n = $(".entry.active").index();
              n < 0 && (n = 0);
              var i = $(".detailContainer")[n],
                a = b[n];
              $("#mobilePaneList").hide();
              var r;
              $.each(
                $("#detailView" + n).find($(".swiper-slide")),
                function (t, n) {
                  if (
                    parseInt($(n).data("shortlist-id")) ==
                    e.attributes.shortlist_id
                  )
                    return (r = t), !1;
                }
              ),
                x.getGeneralOptions().numberedIcons ||
                  $(".detailFeatureTitle").addClass("notNumbered");
              var o = navigator.userAgent.indexOf("Windows NT 10.0") > 0,
                s = navigator.appVersion.indexOf("Edge") > 0;
              if (
                (b[n].on("onSlideChangeEnd", function () {
                  $(i).show(), $(i).css("z-index", 99);
                }),
                0 === r && 0 === a.activeIndex
                  ? ($(i).show(),
                    !s && o && 0 == n && (b[n].slideNext(), b[n].slidePrev()),
                    $(i).hide(),
                    $(i).show(),
                    $(i).css("z-index", 99))
                  : setTimeout(function () {
                      b[n].slideTo(r, 0), r === a.activeIndex && $(i).show();
                    }, 0),
                1 == b[n].slides.length
                  ? $(".detail-btn-container").hide()
                  : $(".detail-btn-container").show(),
                b[n].update(),
                0 === $(".swiper-slide-active img").width())
              ) {
                var l = $(".swiper-slide-active img")[0],
                  c = $(l).attr("data-src")
                    ? $(l).attr("data-src")
                    : $(l).attr("src");
                c &&
                  c.indexOf("sharing/rest/content/items/") > -1 &&
                  (c = t.possiblyAddToken(c)),
                  $(l).attr("src", c),
                  $(l).attr("alt", "");
              }
              h.resize(), (h.viewed = !0);
            }
          }),
          (this.refreshSlides = function () {
            if (
              ((w = !0),
              !app.data.getWebAppData().getGeneralOptions().filterByExtent &&
                !app.isInBuilder)
            )
              return void (w = !1);
            var e = $(".entry.active").index();
            if ((e < 0 && (e = 0), !(b[e] && b[e].init && y && y[String(e)]))) {
              return;
            }
            $(".detailContainer").css("z-index", "0");
            var t = $(".detailContainer")[e];
            if (($(t).css("z-index", "99"), !u)) return void (w = !1);
            var n = u[e],
              i = n.features,
              a = null;
            b[e].slides && b[e].removeAllSlides(),
              $.each(i, function (t, n) {
                app.map.extent.contains(n.geometry) &&
                  $.each(y[String(e)], function (t, i) {
                    parseInt($(i).data("shortlist-id")) ==
                      n.attributes.shortlist_id &&
                      (b[e].appendSlide($(i)[0]),
                      f.selected &&
                        parseInt($(i).data("shortlist-id")) ==
                          f.selected.attributes.shortlist_id &&
                        (a = parseInt(t)));
                  }),
                  f.selected &&
                    !app.map.extent.contains(f.selected.geometry) &&
                    $.each(y[String(e)], function (t, n) {
                      parseInt($(n).data("shortlist-id")) ==
                        f.selected.attributes.shortlist_id &&
                        (b[e].appendSlide($(n)[0]), $(n).addClass("showOnce"));
                    });
              }),
              f.selected &&
                $.each(
                  $("#detailView" + e).find($(".swiper-slide")),
                  function (e, t) {
                    parseInt($(t).data("shortlist-id")) ==
                      f.selected.attributes.shortlist_id && (a = parseInt(e));
                  }
                ),
              b[e].update(),
              null != a && b[e].slideTo(a, 0),
              1 == b[e].slides.length
                ? $(".detail-btn-container").hide()
                : $(".detail-btn-container").show(),
              (w = !1);
          }),
          (this.update = function (e) {
            (e = e || {}), a.find(".detailContainer").html(e.data);
          }),
          (this.resize = function () {
            setTimeout(function () {
              var e = 40;
              C && (e = 80),
                "small" == app.ui.mobileIntro.screenSize &&
                  ($("#paneLeft").css(
                    "height",
                    $("#contentPanel").height() - $("#map").height() + 10
                  ),
                  $("#paneLeft").css("width", "100%"),
                  $("#paneLeft").css({ top: $("#map").height() - 10 }),
                  (e = 20),
                  C && (e = 110));
              var t,
                n = $(".entry.active").index();
              n < 0 && (n = 0);
              var i;
              $.isEmptyObject(b[n]) ||
                ((i = b[n]), (t = i.slides[i.activeIndex])),
                $(t).height(
                  $("#paneLeft").outerHeight() -
                    5 +
                    (app.embedBar && app.embedBar.initiated ? -26 : 0)
                );
              var a = $(t).find(".detailHeader").outerHeight();
              $(".detailTextContainer").height(
                $("#paneLeft").outerHeight() - a - e + "px"
              ),
                $(".detailPictureDiv img").css(
                  "max-width",
                  $("#paneLeft").outerWidth()
                );
              var r =
                $("#paneLeft").outerHeight() - a - 60 <
                0.6 * $("#paneLeft").outerHeight()
                  ? $("#paneLeft").outerHeight() - a - 60
                  : 0.6 * $("#paneLeft").outerHeight();
              $(".detailPictureDiv img").css("max-height", parseInt(r) + "px"),
                $(".detailContainer").width($("#paneLeft").outerWidth()),
                $(".detailContainer").height($("#paneLeft").outerHeight()),
                i &&
                  (app.data.getWebAppData().getGeneralOptions().filterByExtent
                    ? setTimeout(function () {
                        b[n].slideTo(i.activeIndex),
                          i.update(),
                          b[n].slideTo(i.activeIndex);
                      }, 800)
                    : (b[n].slideTo(i.activeIndex),
                      i.update(),
                      b[n].slideTo(i.activeIndex)));
            }, 0);
          }),
          (this.showEntryIndex = function () {}),
          (this.destroy = function () {});
      };
    }
  ),
  define("lib-build/tpl!storymaps/tpl/ui/desktop/NavBar", [], function () {
    return function (obj) {
      obj || (obj = {});
      var __t,
        __p = "",
        __e = _.escape;
      with (obj)
        __p +=
          '<div class="nav-bar">\r\n\t<div class="entries">\r\n\t\t<ul class="nav nav-tabs">\r\n\t\t\t\x3c!--\r\n\t\t\t\ttabs and the more button are injected here\r\n\t\t\t--\x3e\r\n\t\t</ul>\r\n\t</div>\r\n\t<div class="builder-content-panel inline">\r\n\t\t<span class="builder-content-panel-group builder-edit btn btn-sm btn-default">\r\n\t\t\t<div class="builder-btn"></div>\r\n\t\t\t<div class="builder-lbl"></div>\r\n\t\t</span>\r\n\r\n\t\t<span class="builder-content-panel-group builder-add btn btn-sm btn-default">\r\n\t\t\t<div class="builder-btn"></div>\r\n\t\t\t<div class="builder-lbl"></div>\r\n\t\t</span>\r\n\t\t<span class="builder-content-panel-group builder-organize btn btn-sm btn-default">\r\n\t\t\t<div class="builder-btn"></div>\r\n\t\t\t<div class="builder-lbl"></div>\r\n\t\t</span>\r\n\t</div>\r\n\t<div class="builder-mask"></div>\r\n\t<div id="bookmarksCon">\r\n\t\t<div id="bookmarksButton"></div>\r\n\t\t<div id="bookmarksToggle"> \x3c!--tabindex="0"--\x3e\r\n\t\t\t<span id="bookmarksTogText"></span>\r\n\t\t</div>\r\n\t\t<div id="bookmarksDiv"></div>\r\n\t</div>\r\n</div>\r\n';
      return __p;
    };
  }),
  define("lib-build/css!storymaps/tpl/ui/desktop/NavBar", [], function () {}),
  define("lib-build/tpl!storymaps/tpl/ui/desktop/NavBarEntry", [], function () {
    return function (obj) {
      obj || (obj = {});
      var __t,
        __p = "",
        __e = _.escape;
      with (obj)
        __p +=
          '<li class="entry ' +
          (null == (__t = optHtmlClass) ? "" : __t) +
          '" data-title="' +
          (null == (__t = tooltip) ? "" : __t) +
          '">\r\n\t<a class="entryLbl" tabindex="0">' +
          (null == (__t = value) ? "" : __t) +
          "</a>\r\n</li>\r\n";
      return __p;
    };
  }),
  define(
    "lib-build/tpl!storymaps/tpl/ui/desktop/NavBarEntryMore",
    [],
    function () {
      return function (obj) {
        obj || (obj = {});
        var __t,
          __p = "",
          __e = _.escape;
        with (obj)
          __p +=
            '<li class="dropdown pull-right"> \x3c!-- tabindex="0" --\x3e\r\n\t<a class="dropdown-toggle" data-toggle="dropdown">\r\n\t\t<span class="glyphicon glyphicon-th-list"></span> <span class="caret"></span>\r\n\t</a>\r\n\t<ul class="dropdown-menu">\r\n\t\t\x3c!--\r\n\t\t\ttabs are injected here a second time\r\n\t\t\tthat way they are just toggled and not moved around\r\n\t\t--\x3e\r\n\t\t' +
            (null == (__t = entries) ? "" : __t) +
            "\r\n\t</ul>\r\n</li>\r\n";
        return __p;
      };
    }
  ),
  define(
    "storymaps/tpl/ui/desktop/NavBar",
    [
      "lib-build/tpl!./NavBar",
      "lib-build/css!./NavBar",
      "lib-build/tpl!./NavBarEntry",
      "lib-build/tpl!./NavBarEntryMore",
      "storymaps/common/utils/CommonHelper",
      "esri/graphicsUtils",
      "esri/layers/GraphicsLayer",
      "esri/geometry/webMercatorUtils",
      "esri/geometry/Extent",
      "dojo/topic",
      "dojo/has",
    ],
    function (e, t, n, i, a, r, o, s, l, p, c) {
      return function (t, r, o, s) {
        function l(e, a) {
          (g = g || []), $(".nav-bar").addClass("isTab");
          var r = (g.length, "");
          $.each(g, function (e, t) {
            var i = t.alias ? t.alias : t.title;
            r += n({ value: i, tooltip: "", optHtmlClass: "" });
          }),
            t.find(".nav-tabs").html(r + i({ entries: r })),
            c(e),
            t.find(".entry").click(d),
            t.find(".entryLbl").on("keydown", function (e) {
              if (9 === e.keyCode)
                return (
                  p.publish("story-tab-navigation", {
                    from: "nav",
                    direction: e.shiftKey ? "backward" : "forward",
                  }),
                  !1
                );
            }),
            t
              .find(".entryLbl")
              .eq(0)
              .focus(function () {
                $(this).data("mouseDown") ||
                  $(this).parent(".entry").hasClass("active") ||
                  $(this).parent(".entry").click();
              })
              .mousedown(function () {
                $(this).data("mouseDown", !0);
              })
              .mouseup(function () {
                $(this).removeData("mouseDown");
              }),
            $("#nav-bar").show(),
            app.isInBuilder && app.addFeatureBar.updateLocatedFeatures(a),
            m.resize();
        }
        function c(e) {
          t.css("background-color", e.header),
            a.addCSSRule(
              ".nav-bar .nav > .entry .entryLbl, \t\t\t\t\t.nav-bar .dropdown-toggle { \t\t\t\t\t\tcolor: " +
                e.tabText +
                "; \t\t\t\t\t\tbackground-color: " +
                e.tab +
                " !important; \t\t\t\t\t}",
              "NavBarTab"
            ),
            a.addCSSRule(
              ".nav-bar .entry.active > .entryLbl, \t\t\t\t\t.nav-bar .dropdown.active .dropdown-toggle { \t\t\t\t\t\tcolor: " +
                e.tabTextActive +
                "; \t\t\t\t\t\tbackground-color: " +
                e.tabActive +
                " !important; \t\t\t\t\t}",
              "NavBarActive"
            ),
            a.addCSSRule(
              ".nav-bar .dropdown:not(.active):hover .dropdown-toggle, \t\t\t\t\t.nav-bar li:not(.active) .entryLbl:hover { \t\t\t\t\t\tcolor: " +
                e.tabTextHover +
                "; \t\t\t\t\t\tbackground-color: " +
                e.tabHover +
                " !important; \t\t\t\t\t}",
              "NavBarHover"
            ),
            a.addCSSRule(
              ".nav-bar .dropdown-menu, \t\t\t\t\t.nav-bar .dropdown-menu .entryLbl { \t\t\t\t\t\tcolor: " +
                e.tabText +
                " !important; \t\t\t\t\t\tbackground-color: " +
                e.header +
                " !important; \t\t\t\t\t}",
              "NavBarMore"
            );
        }
        function d() {
          if (!$("body").hasClass("organizeFeatures")) {
            var e = $(this).index();
            o(e),
              app.isInBuilder &&
                !app.data.getWebAppData().getIsExternalData() &&
                (app.addFeatureBar.updateLocatedFeatures(),
                app.addFeatureBar.exitOrganizeMode());
          }
        }
        function u() {
          t.find(".builder-content-panel").css("display", "inline-block"),
            t
              .find(".builder-edit")
              .off("click")
              .click(f)
              .find(".builder-lbl")
              .html(i18n.builder.addEditPopup.editTab),
            t
              .find(".builder-add")
              .off("click")
              .click(m.onClickAdd)
              .find(".builder-lbl")
              .html(i18n.builder.addEditPopup.addTab);
        }
        function f() {
          $("body").hasClass("organizeFeatures") ||
            app.builder.openEditPopup({ entryIndex: m.getEntryIndex() });
        }
        function h(e, t, n) {
          return e.hasOwnProperty(t) && e[t] === n;
        }
        var m = this,
          g = null,
          v = null,
          b = null;
        t.html(e({})),
          (this.init = function (e, t, n, i) {
            (g = e),
              (v = null),
              (b = i),
              l(n, t),
              this.showEntryIndex(t),
              1 == g.length && app.ui.navBar.disableOrganize(),
              r && u();
          }),
          (this.update = function (e) {
            l(e), this.showEntryIndex(v);
          }),
          (this.resize = function () {
            t.find(".nav-tabs > li").addClass("visible"),
              t.find(".nav-tabs .dropdown").removeClass("visible"),
              t.find(".nav-tabs .dropdown-menu li").removeClass("visible");
            var e = 0,
              n = 0,
              i = !1,
              a = t.find(".nav-tabs > li:not(.dropdown)"),
              r = t.find("li.dropdown").outerWidth(),
              o =
                t.width() -
                t.find(".builder-content-panel:visible").outerWidth() -
                30 -
                4;
            a.each(function () {
              n++,
                ((e += $(this).outerWidth()) > o ||
                  (e + r > o && n < a.length)) &&
                  ((i = !0),
                  $(this).removeClass("visible"),
                  t
                    .find(".nav-tabs .dropdown-menu li")
                    .eq($(this).index())
                    .addClass("visible"));
            });
            var s = t.find(".nav-tabs > .entry.active"),
              l = t.find(".nav-tabs .dropdown-menu li.active");
            s.length && !s.hasClass("visible")
              ? (s.removeClass("active"),
                t
                  .find(".nav-tabs .dropdown-menu li")
                  .eq(s.index())
                  .addClass("active"),
                t.find(".nav-tabs > .dropdown").addClass("active"))
              : l.length &&
                !l.hasClass("visible") &&
                (l.removeClass("active"),
                t.find(".nav-tabs > .entry").eq(l.index()).addClass("active"),
                t.find(".nav-tabs > .dropdown").removeClass("active")),
              i && t.find(".nav-tabs .dropdown").addClass("visible");
          }),
          (this.showEntryIndex = function (e) {
            var n = t.find(".nav-tabs > .entry.visible").length;
            t.find("li").removeClass("active"),
              e < n
                ? (t.find(".entry").eq(e).addClass("active"),
                  app.isLoading ||
                    (t.find(".entry").eq(e).find(".entryLbl").focus(),
                    t.find(".dropdown").hasClass("open") &&
                      t.find(".dropdown-toggle").click()))
                : (t.find(".dropdown").addClass("active"),
                  t.find(".dropdown .entry").eq(e).addClass("active"),
                  app.isLoading ||
                    (t.find(".dropdown").hasClass("open") ||
                      t.find(".dropdown-toggle").click(),
                    t.find(".dropdown .entry").eq(e).focus())),
              app.isInBuilder &&
                setTimeout(function () {
                  m.resize();
                }, 50),
              (v = e);
          }),
          (this.getEntryIndex = function () {
            return v;
          }),
          (this.destroy = function () {
            t.hide();
          }),
          (this.bookmarksLoaded = !1),
          (this.initBookmarks = function () {
            var e = app.data.getResponse()
              ? app.data.getResponse().itemInfo.itemData.bookmarks
              : app.maps[app.data.getWebAppData().getWebmap()].response.itemInfo
                  .itemData.bookmarks;
            e.length &&
              app.data.getWebAppData().getGeneralOptions().bookmarks &&
              ($("#bookmarksCon").show(),
              $("#bookmarksTogText").html(
                app.data.getWebAppData().getGeneralOptions().bookmarksAlias +
                  " &#x25BC;"
              ),
              $("#mobileBookmarksTogText").html(
                app.data.getWebAppData().getGeneralOptions().bookmarksAlias +
                  " &#x25BC;"
              ),
              $("#bookmarksToggle").addClass("closed"),
              $("#mobileBookmarksToggle").addClass("closed"),
              $("#bookmarksToggle").click(function () {
                "none" == $("#bookmarksDiv").css("display")
                  ? ($("#bookmarksTogText").html(
                      app.data.getWebAppData().getGeneralOptions()
                        .bookmarksAlias + " &#x25B2;"
                    ),
                    $("#bookmarksDiv").css("display", "inline-block"),
                    $("#bookmarksToggle").removeClass("closed"),
                    $("#bookmarksToggle").addClass("open"))
                  : ($("#bookmarksTogText").html(
                      app.data.getWebAppData().getGeneralOptions()
                        .bookmarksAlias + " &#x25BC;"
                    ),
                    $("#bookmarksDiv").css("display", "none"),
                    $("#bookmarksToggle").removeClass("open"),
                    $("#bookmarksToggle").addClass("closed")),
                  $("#mobileBookmarksTogText").html(
                    app.data.getWebAppData().getGeneralOptions()
                      .bookmarksAlias + " &#x25BC;"
                  );
              }),
              $("#mobileBookmarksToggle").click(function () {
                "none" == $("#mobileBookmarksDiv").css("display")
                  ? ($("#mobileBookmarksDiv").css("display", "inline-block"),
                    $("#mobileBookmarksTogText").html(
                      app.data.getWebAppData().getGeneralOptions()
                        .bookmarksAlias + " &#x25B2;"
                    ),
                    $("#mobileBookmarksToggle").removeClass("closed"),
                    $("#mobileBookmarksToggle").addClass("open"))
                  : ($("#mobileBookmarksDiv").css("display", "none"),
                    $("#mobileBookmarksTogText").html(
                      app.data.getWebAppData().getGeneralOptions()
                        .bookmarksAlias + " &#x25BC;"
                    ),
                    $("#mobileBookmarksToggle").removeClass("open"),
                    $("#mobileBookmarksToggle").addClass("closed"));
              }),
              $.each(e, function (e, t) {
                $("#bookmarksDiv").append(
                  "<p><a tabindex='0'>" + t.name + "</a></p>"
                ),
                  $("#mobileBookmarksDiv").append(
                    "<p><a>" + t.name + "</a></p>"
                  );
              }),
              $("#bookmarksDiv a").click(function () {
                var t = $(this).html(),
                  n = new esri.geometry.Extent(
                    $.grep(e, function (e) {
                      return e.name == t;
                    })[0].extent
                  );
                app.map.setExtent(n),
                  $("#bookmarksTogText").html(
                    app.data.getWebAppData().getGeneralOptions()
                      .bookmarksAlias + " &#x25BC;"
                  ),
                  $("#bookmarksDiv").css("display", "none"),
                  $("#bookmarksToggle").removeClass("open"),
                  $("#bookmarksToggle").addClass("closed");
              }),
              $("#mobileBookmarksDiv a").click(function () {
                var t = $(this).html(),
                  n = new esri.geometry.Extent(
                    $.grep(e, function (e) {
                      return e.name == t;
                    })[0].extent
                  );
                app.map.setExtent(n),
                  $("#mobileBookmarksTogText").html(
                    app.data.getWebAppData().getGeneralOptions()
                      .bookmarksAlias + " &#x25BC;"
                  ),
                  $("#mobileBookmarksToggle").removeClass("open"),
                  $("#mobileBookmarksToggle").addClass("closed"),
                  $("#mobileBookmarksDiv").css("display", "none");
              }),
              !app.isInBuilder &&
                app.data.getWebAppData().getTabs() &&
                1 == Object.keys(app.data.getWebAppData().getTabs()).length &&
                $("#bookmarksCon").css({ top: "10px" })),
              $("#nav-bar").show(),
              $("#bookmarksDiv").show(),
              $("#bookmarksCon").width($("#bookmarksDiv").outerWidth()),
              $("#bookmarksDiv").hide(),
              (m.bookmarksLoaded = !0);
          }),
          (this.hideBookmarks = function () {
            $("#bookmarksCon").hide();
          }),
          (this.showBookmarks = function () {
            $("#bookmarksCon").show();
          }),
          (this.updateBookmarksAlias = function (e) {
            $("#bookmarksTogText").html(e + " &#x25BC;"),
              $("#mobileBookmarksTogText").html(e + " &#x25BC;");
          }),
          (this.disableOrganize = function () {
            t.find(".builder-organize").attr("disabled", !0),
              t.find(".builder-organize").addClass("disabled"),
              $.each(t.find(".builder-organize").children(), function (e, t) {
                $(t).addClass("disabled");
              });
          }),
          (this.enableOrganize = function () {
            t.find(".builder-organize").attr("disabled", !1),
              t.find(".builder-organize").removeClass("disabled"),
              $.each(t.find(".builder-organize").children(), function (e, t) {
                $(t).removeClass("disabled");
              });
          }),
          (this.onClickAdd = function (e, n) {
            if (!$("body").hasClass("organizeFeatures")) {
              app.detailPanelBuilder.hideSearch();
              var i = t.find(".nav-tabs .entry.visible").length,
                a =
                  "customHome" ==
                  app.data.getWebAppData().getGeneralOptions().extentMode
                    ? app.data.getWebAppData().getMapExtent()
                    : null,
                r = {
                  id: i,
                  title: n || "Tab " + (i + 1),
                  features: [],
                  extent: a,
                };
              h(g, "id", i) || (g[i] = r);
              var s = app.cfg.COLOR_ORDER.split(","),
                l = i;
              l > 7 && (l %= 7);
              var c = $.grep(app.cfg.COLOR_SCHEMES, function (e) {
                return e.name == s[l];
              });
              (r.color = c),
                $("#contentPanel").css("border-top-color", c[0].color),
                app.ui.tilePanel.clearTilePanel();
              var d = {
                header: app.data.getWebAppData().getThemeOptions().headerColor,
                tabText: "#d8d8d8",
                tab: "#666",
                tabTextActive: "#fff",
                tabActive: c[0].color,
                tabTextHover: "#fff",
                tabHover: "#666",
              };
              app.isGalleryCreation &&
                app.data.getStory()[0].title &&
                (g[0].title = app.data.getStory()[0].title),
                m.init(g, t.find(".nav-tabs .entry.visible").length, d, b);
              var u = app.map.getLayer(app.data.getShortlistLayerId());
              $.each(u.graphics, function (e, t) {
                t.hide();
              });
              var f = new esri.layers.GraphicsLayer(),
                v = c[0].color;
              (f.color = v),
                (app.layerCurrent = f),
                app.detailPanelBuilder.addDetailPanelSwiper(i),
                app.addFeatureBar.exitOrganizeMode(),
                app.data.setStory(i, r.title, v, a),
                app.data.getWebAppData().setTabs(app.data.getStory()),
                o(i),
                m.enableOrganize(),
                b.getTitle() && p.publish("BUILDER_INCREMENT_COUNTER");
            }
          });
      };
    }
  ),
  define(
    "storymaps/tpl/ui/desktop/MultiTips",
    [
      "dojo/dom-style",
      "dojo/dom-construct",
      "dojo/_base/lang",
      "dojo/on",
      "dojo/_base/array",
      "dojo/query",
      "dojo/dom",
      "dojo/has",
    ],
    function (e, t, n, i, a, r, o, s) {
      return function (l) {
        function p(n, o) {
          c();
          var s = i(x.map, "zoom-start", function () {
              f();
            }),
            l = i(x.map, "zoom-end", function (e) {
              C || d(e.extent, !0);
            }),
            p = i(x.map, "pan", function (e) {
              e && (e.delta.x || e.delta.y) && (C || u(e.extent, e.delta));
            }),
            h = i(x.map, "extent-change", function (e) {
              (e && e.delta && 0 === e.delta.x && 0 === e.delta.y) ||
                C ||
                d(e.extent, !0);
            });
          o && (x.visible = !0),
            x.selected &&
              (x.pointArray.push(x.selected),
              x.pointArray.reverse(),
              x.selected.geometry.x == x.pointArray[1].geometry.x &&
                x.selected.geometry.y == x.pointArray[1].geometry.y &&
                x.pointArray.splice(1, 1)),
            a.forEach(x.pointArray, function (i, a) {
              t.place(
                "<div id='arrow" +
                  a +
                  "' class='mtArrow'></div><div id='multiTip" +
                  a +
                  "' class='multiTip'></div>",
                n,
                "last"
              );
              var o;
              x.selected &&
                (o =
                  x.selected.attributes.name ||
                  x.selected.attributes.Name ||
                  x.selected.attributes.NAME),
                (r("#multiTip" + a)[0].innerHTML =
                  0 === a && x.selected ? o : x.content);
              var s = $("#multiTip" + a),
                l = $("#arrow" + a);
              if (
                (0 === a && x.selected && $(s).addClass("selected"),
                0 === a && x.selected && $(l).addClass("selected"),
                e.set("multiTip" + a, {
                  backgroundColor:
                    0 === a && x.selected
                      ? app.cfg.SELECTED_POPUP_BACKGROUND_COLOR
                      : x.backgroundColor,
                  borderColor:
                    0 === a && x.selected
                      ? app.cfg.SELECTED_POPUP_BORDER_COLOR
                      : x.borderColor,
                  color: x.textColor,
                  padding: "5px",
                  position: "absolute",
                }),
                x.minWidth &&
                  e.set("multiTip" + a, "minWidth", x.minWidth + "px"),
                e.set("arrow" + a, {
                  pointerColor:
                    0 === a && x.selected
                      ? app.cfg.SELECTED_POPUP_ARROW_COLOR
                      : x.pointerColor,
                  position: "absolute",
                  width: "0px",
                  height: "0px",
                }),
                x.map.extent.contains(i.geometry))
              ) {
                g(x.map.toScreen(i.geometry), a, x);
              }
            }),
            (T = [s, l, p, h]);
        }
        function c(e) {
          (C = !1),
            a.forEach(T, function (e) {
              e.remove();
            }),
            e
              ? (r(".multiTip").forEach(function (e) {
                  $(e).remove();
                }),
                r(".mtArrow").forEach(function (e) {
                  $(e).remove();
                }),
                (C = !0))
              : (r(".multiTip").forEach(function (e) {
                  $(e).hasClass("selected") || $(e).remove();
                }),
                r(".mtArrow").forEach(function (e) {
                  $(e).hasClass("selected") || $(e).remove();
                }));
        }
        function d(e, t) {
          a.forEach(x.pointArray, function (n, i) {
            e.contains(n.geometry) && (m(i) || t)
              ? g(x.map.toScreen(n.geometry), i, x)
              : h(i);
          });
        }
        function u(e, t) {
          a.forEach(x.pointArray, function (n, i) {
            if (e.contains(n.geometry)) {
              var a = x.map.toScreen(n.geometry);
              (a.x += t.x), (a.y += t.y);
              g(a, i, x);
            } else h(i);
          });
        }
        function f() {
          r(".multiTip, .mtArrow").forEach(function (e) {
            $(e).hasClass("selected") || (e.style.display = "none");
          });
        }
        function h(t) {
          o.byId("multiTip" + t) &&
            "none" != e.get(o.byId("multiTip" + t), "display") &&
            (e.set(o.byId("multiTip" + t), "display", "none"),
            e.set(o.byId("arrow" + t), "display", "none"));
        }
        function m(t) {
          if (o.byId("multiTip" + t))
            return "block" == e.get(o.byId("multiTip" + t), "display");
        }
        function g(t, n, i) {
          if (o.byId("multiTip" + n)) {
            if (t.x > i.mapAuthorizedWidth || t.y > i.mapAuthorizedHeight)
              return void h(n);
            var a = 0 === n && i.selected ? 44 : i.offsetTop;
            (s("ie") > 0 || /Trident\/7\./.test(navigator.userAgent)) &&
              (a += 10);
            var r = e.get("multiTip" + n, "width"),
              l = e.get("multiTip" + n, "height");
            if (
              (8 == s("ie") && ((r -= 7), (l -= 14)),
              (r && l) ||
                (e.set(
                  o.byId("multiTip" + n),
                  "display",
                  i.visible ? "block" : "none"
                ),
                e.set(
                  o.byId("arrow" + n),
                  "display",
                  i.visible ? "block" : "none"
                ),
                (r = e.get("multiTip" + n, "width")),
                (l = e.get("multiTip" + n, "height"))),
              i.minWidth && r < i.minWidth && (r = i.minWidth),
              "auto" != i.labelDirection)
            )
              "left" == i.labelDirection
                ? w(t, n, i, r, l)
                : "right" == i.labelDirection
                ? y(t, n, i, r, l)
                : "down" == i.labelDirection
                ? v(t, n, i, r)
                : b(t, n, i, r, l, a);
            else if (
              t.x < r / 2 + 25 + i.offsetSide + i.topLeftNotAuthorizedArea[0] &&
              t.y < i.topLeftNotAuthorizedArea[1] + l
            ) {
              if (
                t.y < l - 15 ||
                (t.x < 35 + i.topLeftNotAuthorizedArea[0] &&
                  t.y < i.topLeftNotAuthorizedArea[1])
              )
                return void h(n);
              y(t, n, i, r, l);
            } else if (t.x < r / 2 + 25 + i.offsetSide) {
              if (t.y < l - 15 || t.y > i.mapAuthorizedHeight - l / 2 - 10)
                return void h(n);
              y(t, n, i, r, l);
            } else if (t.x > i.mapAuthorizedWidth - r / 2 - 10) {
              if (t.y < l - 15 || t.y > i.mapAuthorizedHeight - l / 2 - 10)
                return void h(n);
              w(t, n, i, r, l);
            } else if (t.x < i.mapAuthorizedMinWidth + r / 2) {
              if (
                t.y < l - 15 ||
                t.y > i.mapAuthorizedHeight - l / 2 - 10 ||
                t.x < i.mapAuthorizedMinWidth
              )
                return void h(n);
              y(t, n, i, r, l);
            } else t.y > l + 25 + a ? b(t, n, i, r, l, a) : v(t, n, i, r);
            e.set(
              o.byId("multiTip" + n),
              "display",
              i.visible ? "block" : "none"
            ),
              e.set(
                o.byId("arrow" + n),
                "display",
                i.visible ? "block" : "none"
              );
          }
        }
        function v(t, n, i, a) {
          e.set("multiTip" + n, {
            top: t.y + 3 + i.offsetBottom + "px",
            left: t.x - a / 2 - 5 + "px",
          }),
            e.set("arrow" + n, {
              left: t.x - 10 + "px",
              top: t.y + i.offsetBottom - 5 + "px",
              borderLeft: "10px solid transparent",
              borderRight: "10px solid transparent",
              borderBottom: "10px solid",
              borderBottomColor:
                0 === n && i.selected
                  ? app.cfg.SELECTED_POPUP_ARROW_COLOR
                  : i.pointerColor,
              borderTop: "none",
            });
        }
        function b(t, n, i, a, r, o) {
          e.set("multiTip" + n, {
            top: t.y - r - 10 - o + "px",
            left: t.x - a / 2 + 0 + "px",
          }),
            (s("ie") > 0 || /Trident\/7\./.test(navigator.userAgent)) &&
              (o -= 10),
            e.set("arrow" + n, {
              left: t.x - 10 + "px",
              top: t.y - 10 - o + "px",
              borderLeft: "10px solid transparent",
              borderRight: "10px solid transparent",
              borderTop: "10px solid",
              borderTopColor:
                0 === n && i.selected
                  ? app.cfg.SELECTED_POPUP_ARROW_COLOR
                  : i.pointerColor,
              borderBottom: "none",
            });
        }
        function y(t, n, i, a, r) {
          var o = 0 === n && i.selected ? 5 : 0,
            l = 0;
          (s("ie") > 0 || /Trident\/7\./.test(navigator.userAgent)) && (l += 5),
            e.set("arrow" + n, {
              left: t.x + 8 + i.offsetSide + "px",
              top: t.y - 26 - o + "px",
              borderTop: "10px solid transparent",
              borderBottom: "10px solid transparent",
              borderRight: "10px solid",
              borderRightColor:
                0 === n && i.selected
                  ? app.cfg.SELECTED_POPUP_ARROW_COLOR
                  : i.pointerColor,
              borderLeft: "none",
            }),
            e.set("multiTip" + n, {
              top: t.y - 22 - o - l - (r - 10) / 2 + "px",
              left: t.x + 17 + i.offsetSide + "px",
            });
        }
        function w(t, n, i, a, r) {
          var o = 0 === n && i.selected ? 5 : 0,
            l = 0,
            p = 0;
          (s("ie") > 0 || /Trident\/7\./.test(navigator.userAgent)) &&
            ((l += 5), (p += 10)),
            e.set("arrow" + n, {
              left: t.x - 18 - i.offsetSide + "px",
              top: t.y - 26 - o + "px",
              borderTop: "10px solid transparent",
              borderBottom: "10px solid transparent",
              borderLeft: "10px solid",
              borderLeftColor:
                0 === n && i.selected
                  ? app.cfg.SELECTED_POPUP_ARROW_COLOR
                  : i.pointerColor,
              borderRight: "none",
            }),
            e.set("multiTip" + n, {
              top: t.y - 22 - o - l - (r - 10) / 2 + "px",
              left: t.x - 18 - a - p - i.offsetSide + "px",
            });
        }
        var x = null,
          C = !1,
          T = [];
        !(function (e) {
          (x = n.mixin(
            {
              pointArray: [],
              map: null,
              attributeLabelField: "",
              content: "",
              selected: !1,
              zoomToPoints: !1,
              backgroundColor: "#000000",
              borderColor: "#000000",
              pointerColor: "#000000",
              textColor: "#ffffff",
              minWidth: "",
              labelDirection: "auto",
              offsetTop: 8,
              offsetSide: 3,
              offsetBottom: 8,
              mapAuthorizedMinWidth: -1,
              mapAuthorizedWidth: -1,
              mapAuthorizedHeight: -1,
              visible: !0,
            },
            e
          )),
            -1 == e.mapAuthorizedWidth && (x.mapAuthorizedWidth = x.map.width),
            -1 == e.mapAuthorizedHeight &&
              (x.mapAuthorizedHeight = x.map.height),
            p(e.map.container);
        })(l),
          (this.current = function () {
            return x.pointArray;
          }),
          (this.clean = function (e) {
            (x = null), c(e);
          }),
          (this.hide = function () {
            (C = !0), f();
          }),
          (this.show = function () {
            x && ((C = !1), (x.visible = !0), d(x.map.extent, !0));
          });
      };
    }
  ),
  define(
    "lib-build/tpl!storymaps/common/ui/autoplay/Autoplay",
    [],
    function () {
      return function (obj) {
        obj || (obj = {});
        var __t,
          __p = "",
          __e = _.escape;
        with (obj)
          __p +=
            '<div class="autoplay-container">\n\t<div class="backdrop"></div>\n\t<div class="btn-play-container status-pause">\n\t\t<span class="btn-play glyphicon glyphicon-play"></span>\n\t</div>\n\t<div class="slider-container ">\n\t\t<input type="text" class="span2" value="" />\n\t</div>\n</div>\n';
        return __p;
      };
    }
  ),
  define(
    "lib-build/css!storymaps/common/ui/autoplay/Autoplay",
    [],
    function () {}
  ),
  (function (e) {
    var t = function (t, n) {
      (this.element = e(t)),
        (this.picker = e(
          '<div class="slider"><div class="slider-track"><div class="slider-selection"></div><div class="slider-handle"></div><div class="slider-handle"></div></div><div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div></div>'
        )
          .insertBefore(this.element)
          .append(this.element)),
        (this.id = this.element.data("slider-id") || n.id),
        this.id && (this.picker[0].id = this.id),
        "undefined" != typeof Modernizr &&
          Modernizr.touch &&
          (this.touchCapable = !0);
      var i = this.element.data("slider-tooltip") || n.tooltip;
      switch (
        ((this.tooltip = this.picker.find(".tooltip")),
        (this.tooltipInner = this.tooltip.find("div.tooltip-inner")),
        (this.orientation =
          this.element.data("slider-orientation") || n.orientation),
        this.orientation)
      ) {
        case "vertical":
          this.picker.addClass("slider-vertical"),
            (this.stylePos = "top"),
            (this.mousePos = "pageY"),
            (this.sizePos = "offsetHeight"),
            (this.tooltip.addClass("right")[0].style.left = "100%");
          break;
        default:
          this.picker
            .addClass("slider-horizontal")
            .css("width", this.element.outerWidth()),
            (this.orientation = "horizontal"),
            (this.stylePos = "left"),
            (this.mousePos = "pageX"),
            (this.sizePos = "offsetWidth"),
            (this.tooltip.addClass("top")[0].style.top =
              -this.tooltip.outerHeight() - 14 + "px");
      }
      switch (
        ((this.min = this.element.data("slider-min") || n.min),
        (this.max = this.element.data("slider-max") || n.max),
        (this.step = this.element.data("slider-step") || n.step),
        (this.value = this.element.data("slider-value") || n.value),
        this.value[1] && (this.range = !0),
        (this.selection = this.element.data("slider-selection") || n.selection),
        (this.selectionEl = this.picker.find(".slider-selection")),
        "none" === this.selection && this.selectionEl.addClass("hide"),
        (this.selectionElStyle = this.selectionEl[0].style),
        (this.handle1 = this.picker.find(".slider-handle:first")),
        (this.handle1Stype = this.handle1[0].style),
        (this.handle2 = this.picker.find(".slider-handle:last")),
        (this.handle2Stype = this.handle2[0].style),
        this.element.data("slider-handle") || n.handle)
      ) {
        case "round":
          this.handle1.addClass("round"), this.handle2.addClass("round");
          break;
        case "triangle":
          this.handle1.addClass("triangle"), this.handle2.addClass("triangle");
      }
      this.range
        ? ((this.value[0] = Math.max(
            this.min,
            Math.min(this.max, this.value[0])
          )),
          (this.value[1] = Math.max(
            this.min,
            Math.min(this.max, this.value[1])
          )))
        : ((this.value = [Math.max(this.min, Math.min(this.max, this.value))]),
          this.handle2.addClass("hide"),
          "after" == this.selection
            ? (this.value[1] = this.max)
            : (this.value[1] = this.min)),
        (this.diff = this.max - this.min),
        (this.percentage = [
          (100 * (this.value[0] - this.min)) / this.diff,
          (100 * (this.value[1] - this.min)) / this.diff,
          (100 * this.step) / this.diff,
        ]),
        (this.offset = this.picker.offset()),
        (this.size = this.picker[0][this.sizePos]),
        (this.formater = n.formater),
        this.layout(),
        this.touchCapable
          ? this.picker.on({ touchstart: e.proxy(this.mousedown, this) })
          : this.picker.on({ mousedown: e.proxy(this.mousedown, this) }),
        "show" === i
          ? this.picker.on({
              mouseenter: e.proxy(this.showTooltip, this),
              mouseleave: e.proxy(this.hideTooltip, this),
            })
          : this.tooltip.addClass("hide");
    };
    (t.prototype = {
      constructor: t,
      over: !1,
      inDrag: !1,
      showTooltip: function () {
        this.tooltip.addClass("in"), (this.over = !0);
      },
      hideTooltip: function () {
        !1 === this.inDrag && this.tooltip.removeClass("in"), (this.over = !1);
      },
      layout: function () {
        (this.handle1Stype[this.stylePos] = this.percentage[0] + "%"),
          (this.handle2Stype[this.stylePos] = this.percentage[1] + "%"),
          "vertical" == this.orientation
            ? ((this.selectionElStyle.top =
                Math.min(this.percentage[0], this.percentage[1]) + "%"),
              (this.selectionElStyle.height =
                Math.abs(this.percentage[0] - this.percentage[1]) + "%"))
            : ((this.selectionElStyle.left =
                Math.min(this.percentage[0], this.percentage[1]) + "%"),
              (this.selectionElStyle.width =
                Math.abs(this.percentage[0] - this.percentage[1]) + "%")),
          this.range
            ? (this.tooltipInner.text(
                this.formater(this.value[0]) +
                  " : " +
                  this.formater(this.value[1])
              ),
              (this.tooltip[0].style[this.stylePos] =
                (this.size *
                  (this.percentage[0] +
                    (this.percentage[1] - this.percentage[0]) / 2)) /
                  100 -
                ("vertical" === this.orientation
                  ? this.tooltip.outerHeight() / 2
                  : this.tooltip.outerWidth() / 2) +
                "px"))
            : (this.tooltipInner.text(this.formater(this.value[0])),
              (this.tooltip[0].style[this.stylePos] =
                (this.size * this.percentage[0]) / 100 -
                ("vertical" === this.orientation
                  ? this.tooltip.outerHeight() / 2
                  : this.tooltip.outerWidth() / 2) +
                "px"));
      },
      mousedown: function (t) {
        this.touchCapable && "touchstart" === t.type && (t = t.originalEvent),
          (this.offset = this.picker.offset()),
          (this.size = this.picker[0][this.sizePos]);
        var n = this.getPercentage(t);
        if (this.range) {
          var i = Math.abs(this.percentage[0] - n),
            a = Math.abs(this.percentage[1] - n);
          this.dragged = i < a ? 0 : 1;
        } else this.dragged = 0;
        (this.percentage[this.dragged] = n),
          this.layout(),
          this.touchCapable
            ? e(document).on({
                touchmove: e.proxy(this.mousemove, this),
                touchend: e.proxy(this.mouseup, this),
              })
            : e(document).on({
                mousemove: e.proxy(this.mousemove, this),
                mouseup: e.proxy(this.mouseup, this),
              }),
          (this.inDrag = !0);
        var r = this.calculateValue();
        return (
          this.element
            .trigger({ type: "slideStart", value: r })
            .trigger({ type: "slide", value: r }),
          !1
        );
      },
      mousemove: function (e) {
        this.touchCapable && "touchmove" === e.type && (e = e.originalEvent);
        var t = this.getPercentage(e);
        this.range &&
          (0 === this.dragged && this.percentage[1] < t
            ? ((this.percentage[0] = this.percentage[1]), (this.dragged = 1))
            : 1 === this.dragged &&
              this.percentage[0] > t &&
              ((this.percentage[1] = this.percentage[0]), (this.dragged = 0))),
          (this.percentage[this.dragged] = t),
          this.layout();
        var n = this.calculateValue();
        return (
          this.element
            .trigger({ type: "slide", value: n })
            .data("value", n)
            .prop("value", n),
          !1
        );
      },
      mouseup: function (t) {
        this.touchCapable
          ? e(document).off({
              touchmove: this.mousemove,
              touchend: this.mouseup,
            })
          : e(document).off({
              mousemove: this.mousemove,
              mouseup: this.mouseup,
            }),
          (this.inDrag = !1),
          0 == this.over && this.hideTooltip(),
          this.element;
        var n = this.calculateValue();
        return (
          this.element
            .trigger({ type: "slideStop", value: n })
            .data("value", n)
            .prop("value", n),
          !1
        );
      },
      calculateValue: function () {
        var e;
        return (
          this.range
            ? ((e = [
                this.min +
                  Math.round(
                    (this.diff * this.percentage[0]) / 100 / this.step
                  ) *
                    this.step,
                this.min +
                  Math.round(
                    (this.diff * this.percentage[1]) / 100 / this.step
                  ) *
                    this.step,
              ]),
              (this.value = e))
            : ((e =
                this.min +
                Math.round((this.diff * this.percentage[0]) / 100 / this.step) *
                  this.step),
              (this.value = [e, this.value[1]])),
          e
        );
      },
      getPercentage: function (e) {
        this.touchCapable && (e = e.touches[0]);
        var t =
          (100 * (e[this.mousePos] - this.offset[this.stylePos])) / this.size;
        return (
          (t = Math.round(t / this.percentage[2]) * this.percentage[2]),
          Math.max(0, Math.min(100, t))
        );
      },
      getValue: function () {
        return this.range ? this.value : this.value[0];
      },
      setValue: function (e) {
        (this.value = e),
          this.range
            ? ((this.value[0] = Math.max(
                this.min,
                Math.min(this.max, this.value[0])
              )),
              (this.value[1] = Math.max(
                this.min,
                Math.min(this.max, this.value[1])
              )))
            : ((this.value = [
                Math.max(this.min, Math.min(this.max, this.value)),
              ]),
              this.handle2.addClass("hide"),
              "after" == this.selection
                ? (this.value[1] = this.max)
                : (this.value[1] = this.min)),
          (this.diff = this.max - this.min),
          (this.percentage = [
            (100 * (this.value[0] - this.min)) / this.diff,
            (100 * (this.value[1] - this.min)) / this.diff,
            (100 * this.step) / this.diff,
          ]),
          this.layout();
      },
    }),
      (e.fn.slider = function (n, i) {
        return this.each(function () {
          var a = e(this),
            r = a.data("slider"),
            o = "object" == typeof n && n;
          r ||
            a.data(
              "slider",
              (r = new t(this, e.extend({}, e.fn.slider.defaults, o)))
            ),
            "string" == typeof n && r[n](i);
        });
      }),
      (e.fn.slider.defaults = {
        min: 0,
        max: 10,
        step: 1,
        orientation: "horizontal",
        value: 5,
        selection: "before",
        tooltip: "show",
        handle: "round",
        formater: function (e) {
          return e;
        },
      }),
      (e.fn.slider.Constructor = t);
  })(window.jQuery),
  define("lib-app/bootstrap-slider/js/bootstrap-slider", function () {}),
  define(
    "lib-build/css!lib-app/bootstrap-slider/css/slider",
    [],
    function () {}
  ),
  define(
    "storymaps/common/ui/autoplay/Autoplay",
    [
      "lib-build/tpl!./Autoplay",
      "lib-build/css!./Autoplay",
      "dojo/topic",
      "dojo/has",
      "lib-app/bootstrap-slider/js/bootstrap-slider",
      "lib-build/css!lib-app/bootstrap-slider/css/slider",
    ],
    function (e, t, n, i) {
      var a = 10;
      return function (t, n) {
        function r(e, t) {
          console.log("Autoplay: start, delay:", e, "immediate:", t),
            (h = !0),
            m && clearTimeout(m),
            t
              ? s(e)
              : (m = setTimeout(function () {
                  s(e);
                }, e));
        }
        function o() {
          h && (console.log("Autoplay: pause"), (h = !1), m && clearTimeout(m));
        }
        function s(e) {
          (g = n()),
            (m = setTimeout(function () {
              s(e);
            }, e));
        }
        function l() {
          return t.find(".btn-play-container").hasClass("status-play");
        }
        function p(e) {
          t.find(".btn-play-container").removeClass("status-play status-pause"),
            t.find(".btn-play").removeClass("glyphicon-play glyphicon-pause"),
            t
              .find(".btn-play-container")
              .addClass(e ? "status-play" : "status-pause"),
            t
              .find(".btn-play")
              .addClass(e ? "glyphicon-pause" : "glyphicon-play");
        }
        function c() {
          var e = !l();
          e ? d(!0) : o(), p(e);
        }
        function d(e) {
          r(1e3 * (t.find(".slider input").slider("getValue").val() || a), e);
        }
        function u() {
          var e = Date.now();
          v > Date.now() - 150 && t.removeClass("fade"), (v = e);
        }
        function f() {
          !b && Date.now() > v + 6e3 && t.addClass("fade");
        }
        var h = !1,
          m = null,
          g = null,
          v = null,
          b = !1;
        (t && n && "function" == typeof n) ||
          console.log("Autoplay: failed to initialize"),
          t.append(e({})).show(),
          (function () {
            t.find(".btn-play-container").click(c),
              t.find(".slider-container input").slider({
                min: 5,
                max: 60,
                value: a,
                formater: function (e) {
                  return e + "s";
                },
              }),
              t.find(".slider-container input").on("slideStop", function () {
                l() && d(!1);
              }),
              i("touch") ||
                ((v = Date.now()),
                t.hover(
                  function () {
                    b = !0;
                  },
                  function () {
                    (b = !1), f();
                  }
                ),
                $(window).mousemove(u),
                setInterval(f, 1e3));
          })(),
          (this.init = function (e) {
            e &&
              (e.color &&
                (e.useBackdrop
                  ? (t
                      .find(".backdrop")
                      .css({ backgroundColor: e.color, display: "block" }),
                    t
                      .find(".autoplay-container")
                      .css({ backgroundColor: "inherit" }))
                  : (t
                      .find(".autoplay-container")
                      .css({ backgroundColor: e.color }),
                    ("#FFF8E9" != e.color &&
                      "#FFFFFF" != e.color &&
                      "#D4E6C3" != e.color) ||
                      (e.themeMajor = "white2"))),
              e.themeMajor && t.addClass("theme-" + e.themeMajor));
          }),
          (this.start = function () {
            d(!1), p(!0);
          }),
          (this.stop = function () {
            o(), p(!1);
          }),
          (this.onNavigationEvent = function (e) {
            l() && e != g && c();
          });
      };
    }
  ),
  define("lib-build/tpl!storymaps/tpl/ui/mobile/MobileIntro", [], function () {
    return function (obj) {
      obj || (obj = {});
      var __t,
        __p = "",
        __e = _.escape;
      with (obj) __p += '<div id="mobileIntro"></div>\r\n';
      return __p;
    };
  }),
  define(
    "lib-build/css!storymaps/tpl/ui/mobile/MobileIntro",
    [],
    function () {}
  ),
  define(
    "storymaps/tpl/ui/mobile/MobileIntro",
    [
      "esri/geometry/Extent",
      "lib-build/tpl!./MobileIntro",
      "lib-build/css!./MobileIntro",
      "dojo/on",
    ],
    function (e, t, n) {
      return function (n, i, a, r) {
        function o() {
          app.map.on("click", function () {
            $("#mobileIntro").css("display", "none");
          });
        }
        var s = r,
          l = this;
        (this.screenSize = "desktop"),
          (this.init = function () {
            $(n).prepend(t({}));
          }),
          (this.hide = function () {
            $("#mobileIntro").hide();
          }),
          (this.setTitle = function () {
            var e = app.data.getWebAppData().getTitle(),
              t = app.data.getWebAppData().getSubtitle();
            $("#mobileIntro").append(
              '<div class="mobileTitle">' + e + "</div>"
            ),
              app.data.getWebAppData().getSettings().header &&
              !app.data.getWebAppData().getSettings().header.compactSize
                ? ($("#mobileIntro").append(
                    '<div class="mobileSnippet"></div>'
                  ),
                  t && $(".mobileSnippet").html(t))
                : t &&
                  !app.data.getWebAppData().getSettings().header &&
                  ($("#mobileIntro").append(
                    '<div class="mobileSnippet"></div>'
                  ),
                  t && $(".mobileSnippet").html(t)),
              o();
          }),
          (this.fillList = function (e, t, n) {
            if (1 == n.length) {
              if ($("#mobileThemeList .mobileTitleTheme")[e]) return;
              $("#mobileIntro").append("<br><hr></hr>"),
                $("#mobileIntro").append(
                  '<ul id="mobileThemeList" class="mobileTileList">'
                );
              var i = $('<li class="mobileTitleTheme">').append(
                '<div class="startButton">' +
                  i18n.viewer.general.start +
                  "</div>"
              );
              i.on("click", function () {
                l.selectMobileTheme(0);
              }),
                $("#mobileThemeList").append(i);
            } else {
              if ($("#mobileThemeList .mobileTitleThemes")[e]) return;
              0 === e &&
                $("#mobileIntro").append(
                  '<ul id="mobileThemeList" style=" height: 80px; line-height: 80px;" class="mobileTileList introList">'
                );
              var i = $('<li class="mobileTitleThemes">').append(
                '<span style="width: 100%;margin-left: 30px; margin-right: 30px; vertical-align: middle; line-height: 20px; display: inline-block;">' +
                  t.title +
                  "</span>"
              );
              i.on("click", function () {
                l.selectMobileTheme(e);
              }),
                0 === e && $(i).css("border-width", "2px 0px 1px 0px"),
                e == n.length - 1 &&
                  $(i).css("border-width", "1px 0px 2px 0px"),
                $("#mobileThemeList").append(i);
            }
          }),
          (this.resizeMobileElements = function () {
            "desktop" != l.screenSize ||
              s.selected ||
              app.ui.mobileFeatureList.showMobileList(),
              setTimeout(function () {
                app.ui.detailPanel.resize();
              }, 50),
              $("#contentPanel").height($("body").height());
            var e = 0.48 * $(window).height() - 20;
            $("#mobileIntro").height(
              $("body").height() -
                (app.embedBar && app.embedBar.initiated ? 26 : 0)
            ),
              $("#map").css("height", e),
              $("#map").css({ top: 0 }),
              $("#mainStagePanel").css({ left: 0 }),
              $("#mainStagePanel").css("width", "100%"),
              $("#map").css("width", "100%"),
              $("#mainStagePanel").height($("#map").height()),
              $("#paneLeft").css("height", "52%").css("height", "+=20px");
            var t = 0.52 * $("#paneLeft").css("top");
            (t -= 20),
              $("#paneLeft").css("top", t),
              app.embedBar &&
                app.embedBar.initiated &&
                $("#mobilePaneList").css("bottom", "26px"),
              $("#mobileThemeBar")
                .css("top", "48%")
                .css("top", $("#mobileThemeBar").position().top - 20 + "px");
            var n = $(".mobileThemeTitle").length;
            $("#mobileThemeBarSlider").width($(window).width() * n),
              $("#returnHiddenBar").css("width", "100%").css("width", "-=80px");
            var i =
              0.52 * $("body").height() -
              (app.embedBar && app.embedBar.initiated ? 41 : 20);
            $("#mobilePaneList").css("height", "52%").css("height", i),
              $(".mobileTileList.blurb")
                .css("width", "100%")
                .css("width", "-=125px"),
              setTimeout(function () {
                app.ui.detailPanel.resize();
              }, 50),
              (l.screenSize = "small");
          }),
          (this.selectMobileTheme = function (t) {
            0 !== t && s.activateLayer(t),
              $("#contentPanel").css("display", "block"),
              $("#mobileIntro").css("display", "none"),
              $(window).resize(),
              app.ui.mobileFeatureList.selectTheme(t),
              (s.themeSelected = !0);
            var n = new e(app.data.getWebAppData().getMapExtent());
            102100 != app.map.spatialReference.wkid &&
            4326 != app.map.spatialReference.wkid
              ? (n = esriConfig.defaults.geometryService.project(
                  [n],
                  app.map.spatialReference,
                  function (e) {
                    (n = e[0]), app.map.setExtent(n, !0);
                  }
                ))
              : app.map.setExtent(n, !0);
          });
      };
    }
  ),
  define(
    "lib-build/css!storymaps/tpl/ui/mobile/MobileFeatureList",
    [],
    function () {}
  ),
  define("lib-build/css!lib-app/Swiper/swiper", [], function () {}),
  (function () {
    "use strict";
    var e,
      t = function (i, a) {
        function r(e) {
          return Math.floor(e);
        }
        function o() {
          w.autoplayTimeoutId = setTimeout(function () {
            w.params.loop
              ? (w.fixLoop(), w._slideNext(), w.emit("onAutoplay", w))
              : w.isEnd
              ? a.autoplayStopOnLast
                ? w.stopAutoplay()
                : (w._slideTo(0), w.emit("onAutoplay", w))
              : (w._slideNext(), w.emit("onAutoplay", w));
          }, w.params.autoplay);
        }
        function s(t, n) {
          var i = e(t.target);
          if (!i.is(n))
            if ("string" == typeof n) i = i.parents(n);
            else if (n.nodeType) {
              var a;
              return (
                i.parents().each(function (e, t) {
                  t === n && (a = n);
                }),
                a ? n : void 0
              );
            }
          if (0 !== i.length) return i[0];
        }
        function l(e, t) {
          t = t || {};
          var n = window.MutationObserver || window.WebkitMutationObserver,
            i = new n(function (e) {
              e.forEach(function (e) {
                w.onResize(!0), w.emit("onObserverUpdate", w, e);
              });
            });
          i.observe(e, {
            attributes: void 0 === t.attributes || t.attributes,
            childList: void 0 === t.childList || t.childList,
            characterData: void 0 === t.characterData || t.characterData,
          }),
            w.observers.push(i);
        }
        function p(e) {
          e.originalEvent && (e = e.originalEvent);
          var t = e.keyCode || e.charCode;
          if (
            !w.params.allowSwipeToNext &&
            ((w.isHorizontal() && 39 === t) || (!w.isHorizontal() && 40 === t))
          )
            return !1;
          if (
            !w.params.allowSwipeToPrev &&
            ((w.isHorizontal() && 37 === t) || (!w.isHorizontal() && 38 === t))
          )
            return !1;
          if (
            !(
              e.shiftKey ||
              e.altKey ||
              e.ctrlKey ||
              e.metaKey ||
              (document.activeElement &&
                document.activeElement.nodeName &&
                ("input" === document.activeElement.nodeName.toLowerCase() ||
                  "textarea" === document.activeElement.nodeName.toLowerCase()))
            )
          ) {
            if (37 === t || 39 === t || 38 === t || 40 === t) {
              var n = !1;
              if (
                w.container.parents(".swiper-slide").length > 0 &&
                0 === w.container.parents(".swiper-slide-active").length
              )
                return;
              var i = { left: window.pageXOffset, top: window.pageYOffset },
                a = window.innerWidth,
                r = window.innerHeight,
                o = w.container.offset();
              w.rtl && (o.left = o.left - w.container[0].scrollLeft);
              for (
                var s = [
                    [o.left, o.top],
                    [o.left + w.width, o.top],
                    [o.left, o.top + w.height],
                    [o.left + w.width, o.top + w.height],
                  ],
                  l = 0;
                l < s.length;
                l++
              ) {
                var p = s[l];
                p[0] >= i.left &&
                  p[0] <= i.left + a &&
                  p[1] >= i.top &&
                  p[1] <= i.top + r &&
                  (n = !0);
              }
              if (!n) return;
            }
            w.isHorizontal()
              ? ((37 !== t && 39 !== t) ||
                  (e.preventDefault
                    ? e.preventDefault()
                    : (e.returnValue = !1)),
                ((39 === t && !w.rtl) || (37 === t && w.rtl)) && w.slideNext(),
                ((37 === t && !w.rtl) || (39 === t && w.rtl)) && w.slidePrev())
              : ((38 !== t && 40 !== t) ||
                  (e.preventDefault
                    ? e.preventDefault()
                    : (e.returnValue = !1)),
                40 === t && w.slideNext(),
                38 === t && w.slidePrev());
          }
        }
        function c(e) {
          e.originalEvent && (e = e.originalEvent);
          var t = w.mousewheel.event,
            n = 0,
            i = w.rtl ? -1 : 1;
          if ("mousewheel" === t)
            if (w.params.mousewheelForceToAxis)
              if (w.isHorizontal()) {
                if (!(Math.abs(e.wheelDeltaX) > Math.abs(e.wheelDeltaY)))
                  return;
                n = e.wheelDeltaX * i;
              } else {
                if (!(Math.abs(e.wheelDeltaY) > Math.abs(e.wheelDeltaX)))
                  return;
                n = e.wheelDeltaY;
              }
            else
              n =
                Math.abs(e.wheelDeltaX) > Math.abs(e.wheelDeltaY)
                  ? -e.wheelDeltaX * i
                  : -e.wheelDeltaY;
          else if ("DOMMouseScroll" === t) n = -e.detail;
          else if ("wheel" === t)
            if (w.params.mousewheelForceToAxis)
              if (w.isHorizontal()) {
                if (!(Math.abs(e.deltaX) > Math.abs(e.deltaY))) return;
                n = -e.deltaX * i;
              } else {
                if (!(Math.abs(e.deltaY) > Math.abs(e.deltaX))) return;
                n = -e.deltaY;
              }
            else
              n =
                Math.abs(e.deltaX) > Math.abs(e.deltaY)
                  ? -e.deltaX * i
                  : -e.deltaY;
          if (0 !== n) {
            if ((w.params.mousewheelInvert && (n = -n), w.params.freeMode)) {
              var a =
                  w.getWrapperTranslate() + n * w.params.mousewheelSensitivity,
                r = w.isBeginning,
                o = w.isEnd;
              if (
                (a >= w.minTranslate() && (a = w.minTranslate()),
                a <= w.maxTranslate() && (a = w.maxTranslate()),
                w.setWrapperTransition(0),
                w.setWrapperTranslate(a),
                w.updateProgress(),
                w.updateActiveIndex(),
                ((!r && w.isBeginning) || (!o && w.isEnd)) && w.updateClasses(),
                w.params.freeModeSticky
                  ? (clearTimeout(w.mousewheel.timeout),
                    (w.mousewheel.timeout = setTimeout(function () {
                      w.slideReset();
                    }, 300)))
                  : w.params.lazyLoading && w.lazy && w.lazy.load(),
                0 === a || a === w.maxTranslate())
              )
                return;
            } else {
              if (
                new window.Date().getTime() - w.mousewheel.lastScrollTime >
                60
              )
                if (n < 0)
                  if ((w.isEnd && !w.params.loop) || w.animating) {
                    if (w.params.mousewheelReleaseOnEdges) return !0;
                  } else w.slideNext();
                else if ((w.isBeginning && !w.params.loop) || w.animating) {
                  if (w.params.mousewheelReleaseOnEdges) return !0;
                } else w.slidePrev();
              w.mousewheel.lastScrollTime = new window.Date().getTime();
            }
            return (
              w.params.autoplay && w.stopAutoplay(),
              e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
              !1
            );
          }
        }
        function d(t, n) {
          t = e(t);
          var i,
            a,
            r,
            o = w.rtl ? -1 : 1;
          (i = t.attr("data-swiper-parallax") || "0"),
            (a = t.attr("data-swiper-parallax-x")),
            (r = t.attr("data-swiper-parallax-y")),
            a || r
              ? ((a = a || "0"), (r = r || "0"))
              : w.isHorizontal()
              ? ((a = i), (r = "0"))
              : ((r = i), (a = "0")),
            (a =
              a.indexOf("%") >= 0
                ? parseInt(a, 10) * n * o + "%"
                : a * n * o + "px"),
            (r =
              r.indexOf("%") >= 0 ? parseInt(r, 10) * n + "%" : r * n + "px"),
            t.transform("translate3d(" + a + ", " + r + ",0px)");
        }
        function u(e) {
          return (
            0 !== e.indexOf("on") &&
              (e =
                e[0] !== e[0].toUpperCase()
                  ? "on" + e[0].toUpperCase() + e.substring(1)
                  : "on" + e),
            e
          );
        }
        if (!(this instanceof t)) return new t(i, a);
        var f = {
            direction: "horizontal",
            touchEventsTarget: "container",
            initialSlide: 0,
            speed: 300,
            autoplay: !1,
            autoplayDisableOnInteraction: !0,
            autoplayStopOnLast: !1,
            iOSEdgeSwipeDetection: !1,
            iOSEdgeSwipeThreshold: 20,
            freeMode: !1,
            freeModeMomentum: !0,
            freeModeMomentumRatio: 1,
            freeModeMomentumBounce: !0,
            freeModeMomentumBounceRatio: 1,
            freeModeSticky: !1,
            freeModeMinimumVelocity: 0.02,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            coverflow: {
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: !0,
            },
            flip: { slideShadows: !0, limitRotation: !0 },
            cube: {
              slideShadows: !0,
              shadow: !0,
              shadowOffset: 20,
              shadowScale: 0.94,
            },
            fade: { crossFade: !1 },
            parallax: !1,
            scrollbar: null,
            scrollbarHide: !0,
            scrollbarDraggable: !1,
            scrollbarSnapOnRelease: !1,
            keyboardControl: !1,
            mousewheelControl: !1,
            mousewheelReleaseOnEdges: !1,
            mousewheelInvert: !1,
            mousewheelForceToAxis: !1,
            mousewheelSensitivity: 1,
            hashnav: !1,
            breakpoints: void 0,
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerColumnFill: "column",
            slidesPerGroup: 1,
            centeredSlides: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: 0.5,
            longSwipesMs: 300,
            followFinger: !0,
            onlyExternal: !1,
            threshold: 0,
            touchMoveStopPropagation: !0,
            uniqueNavElements: !0,
            pagination: null,
            paginationElement: "span",
            paginationClickable: !1,
            paginationHide: !1,
            paginationBulletRender: null,
            paginationProgressRender: null,
            paginationFractionRender: null,
            paginationCustomRender: null,
            paginationType: "bullets",
            resistance: !0,
            resistanceRatio: 0.85,
            nextButton: null,
            prevButton: null,
            watchSlidesProgress: !1,
            watchSlidesVisibility: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            lazyLoading: !1,
            lazyLoadingInPrevNext: !1,
            lazyLoadingInPrevNextAmount: 1,
            lazyLoadingOnTransitionStart: !1,
            preloadImages: !0,
            updateOnImagesReady: !0,
            loop: !1,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            control: void 0,
            controlInverse: !1,
            controlBy: "slide",
            allowSwipeToPrev: !0,
            allowSwipeToNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            slideClass: "swiper-slide",
            slideActiveClass: "swiper-slide-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slidePrevClass: "swiper-slide-prev",
            wrapperClass: "swiper-wrapper",
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
            buttonDisabledClass: "swiper-button-disabled",
            paginationCurrentClass: "swiper-pagination-current",
            paginationTotalClass: "swiper-pagination-total",
            paginationHiddenClass: "swiper-pagination-hidden",
            paginationProgressbarClass: "swiper-pagination-progressbar",
            observer: !1,
            observeParents: !1,
            a11y: !1,
            prevSlideMessage: "Previous slide",
            nextSlideMessage: "Next slide",
            firstSlideMessage: "This is the first slide",
            lastSlideMessage: "This is the last slide",
            paginationBulletMessage: "Go to slide {{index}}",
            runCallbacksOnInit: !0,
          },
          h = a && a.virtualTranslate;
        a = a || {};
        var m = {};
        for (var g in a)
          if (
            "object" != typeof a[g] ||
            null === a[g] ||
            a[g].nodeType ||
            a[g] === window ||
            a[g] === document ||
            (void 0 !== n && a[g] instanceof n) ||
            ("undefined" != typeof jQuery && a[g] instanceof jQuery)
          )
            m[g] = a[g];
          else {
            m[g] = {};
            for (var v in a[g]) m[g][v] = a[g][v];
          }
        for (var b in f)
          if (void 0 === a[b]) a[b] = f[b];
          else if ("object" == typeof a[b])
            for (var y in f[b]) void 0 === a[b][y] && (a[b][y] = f[b][y]);
        var w = this;
        if (
          ((w.params = a),
          (w.originalParams = m),
          (w.classNames = []),
          void 0 !== e && void 0 !== n && (e = n),
          (void 0 !== e ||
            (e =
              void 0 === n
                ? window.Dom7 || window.Zepto || window.jQuery
                : n)) &&
            ((w.$ = e),
            (w.currentBreakpoint = void 0),
            (w.getActiveBreakpoint = function () {
              if (!w.params.breakpoints) return !1;
              var e,
                t = !1,
                n = [];
              for (e in w.params.breakpoints)
                w.params.breakpoints.hasOwnProperty(e) && n.push(e);
              n.sort(function (e, t) {
                return parseInt(e, 10) > parseInt(t, 10);
              });
              for (var i = 0; i < n.length; i++)
                (e = n[i]) >= window.innerWidth && !t && (t = e);
              return t || "max";
            }),
            (w.setBreakpoint = function () {
              var e = w.getActiveBreakpoint();
              if (e && w.currentBreakpoint !== e) {
                var t =
                    e in w.params.breakpoints
                      ? w.params.breakpoints[e]
                      : w.originalParams,
                  n =
                    w.params.loop && t.slidesPerView !== w.params.slidesPerView;
                for (var i in t) w.params[i] = t[i];
                (w.currentBreakpoint = e), n && w.destroyLoop && w.reLoop(!0);
              }
            }),
            w.params.breakpoints && w.setBreakpoint(),
            (w.container = e(i)),
            0 !== w.container.length))
        ) {
          if (w.container.length > 1) {
            var x = [];
            return (
              w.container.each(function () {
                x.push(new t(this, a));
              }),
              x
            );
          }
          (w.container[0].swiper = w),
            w.container.data("swiper", w),
            w.classNames.push("swiper-container-" + w.params.direction),
            w.params.freeMode &&
              w.classNames.push("swiper-container-free-mode"),
            w.support.flexbox ||
              (w.classNames.push("swiper-container-no-flexbox"),
              (w.params.slidesPerColumn = 1)),
            w.params.autoHeight &&
              w.classNames.push("swiper-container-autoheight"),
            (w.params.parallax || w.params.watchSlidesVisibility) &&
              (w.params.watchSlidesProgress = !0),
            ["cube", "coverflow", "flip"].indexOf(w.params.effect) >= 0 &&
              (w.support.transforms3d
                ? ((w.params.watchSlidesProgress = !0),
                  w.classNames.push("swiper-container-3d"))
                : (w.params.effect = "slide")),
            "slide" !== w.params.effect &&
              w.classNames.push("swiper-container-" + w.params.effect),
            "cube" === w.params.effect &&
              ((w.params.resistanceRatio = 0),
              (w.params.slidesPerView = 1),
              (w.params.slidesPerColumn = 1),
              (w.params.slidesPerGroup = 1),
              (w.params.centeredSlides = !1),
              (w.params.spaceBetween = 0),
              (w.params.virtualTranslate = !0),
              (w.params.setWrapperSize = !1)),
            ("fade" !== w.params.effect && "flip" !== w.params.effect) ||
              ((w.params.slidesPerView = 1),
              (w.params.slidesPerColumn = 1),
              (w.params.slidesPerGroup = 1),
              (w.params.watchSlidesProgress = !0),
              (w.params.spaceBetween = 0),
              (w.params.setWrapperSize = !1),
              void 0 === h && (w.params.virtualTranslate = !0)),
            w.params.grabCursor &&
              w.support.touch &&
              (w.params.grabCursor = !1),
            (w.wrapper = w.container.children("." + w.params.wrapperClass)),
            w.params.pagination &&
              ((w.paginationContainer = e(w.params.pagination)),
              w.params.uniqueNavElements &&
                "string" == typeof w.params.pagination &&
                w.paginationContainer.length > 1 &&
                1 === w.container.find(w.params.pagination).length &&
                (w.paginationContainer = w.container.find(w.params.pagination)),
              "bullets" === w.params.paginationType &&
              w.params.paginationClickable
                ? w.paginationContainer.addClass("swiper-pagination-clickable")
                : (w.params.paginationClickable = !1),
              w.paginationContainer.addClass(
                "swiper-pagination-" + w.params.paginationType
              )),
            (w.params.nextButton || w.params.prevButton) &&
              (w.params.nextButton &&
                ((w.nextButton = e(w.params.nextButton)),
                w.params.uniqueNavElements &&
                  "string" == typeof w.params.nextButton &&
                  w.nextButton.length > 1 &&
                  1 === w.container.find(w.params.nextButton).length &&
                  (w.nextButton = w.container.find(w.params.nextButton))),
              w.params.prevButton &&
                ((w.prevButton = e(w.params.prevButton)),
                w.params.uniqueNavElements &&
                  "string" == typeof w.params.prevButton &&
                  w.prevButton.length > 1 &&
                  1 === w.container.find(w.params.prevButton).length &&
                  (w.prevButton = w.container.find(w.params.prevButton)))),
            (w.isHorizontal = function () {
              return "horizontal" === w.params.direction;
            }),
            (w.rtl =
              w.isHorizontal() &&
              ("rtl" === w.container[0].dir.toLowerCase() ||
                "rtl" === w.container.css("direction"))),
            w.rtl && w.classNames.push("swiper-container-rtl"),
            w.rtl && (w.wrongRTL = "-webkit-box" === w.wrapper.css("display")),
            w.params.slidesPerColumn > 1 &&
              w.classNames.push("swiper-container-multirow"),
            w.device.android && w.classNames.push("swiper-container-android"),
            w.container.addClass(w.classNames.join(" ")),
            (w.translate = 0),
            (w.progress = 0),
            (w.velocity = 0),
            (w.lockSwipeToNext = function () {
              w.params.allowSwipeToNext = !1;
            }),
            (w.lockSwipeToPrev = function () {
              w.params.allowSwipeToPrev = !1;
            }),
            (w.lockSwipes = function () {
              w.params.allowSwipeToNext = w.params.allowSwipeToPrev = !1;
            }),
            (w.unlockSwipeToNext = function () {
              w.params.allowSwipeToNext = !0;
            }),
            (w.unlockSwipeToPrev = function () {
              w.params.allowSwipeToPrev = !0;
            }),
            (w.unlockSwipes = function () {
              w.params.allowSwipeToNext = w.params.allowSwipeToPrev = !0;
            }),
            w.params.grabCursor &&
              ((w.container[0].style.cursor = "move"),
              (w.container[0].style.cursor = "-webkit-grab"),
              (w.container[0].style.cursor = "-moz-grab"),
              (w.container[0].style.cursor = "grab")),
            (w.imagesToLoad = []),
            (w.imagesLoaded = 0),
            (w.loadImage = function (e, t, n, i, a) {
              function r() {
                a && a();
              }
              var o;
              e.complete && i
                ? r()
                : t
                ? ((o = new window.Image()),
                  (o.onload = r),
                  (o.onerror = r),
                  n && (o.srcset = n),
                  t && (o.src = t))
                : r();
            }),
            (w.preloadImages = function () {
              function e() {
                void 0 !== w &&
                  null !== w &&
                  (void 0 !== w.imagesLoaded && w.imagesLoaded++,
                  w.imagesLoaded === w.imagesToLoad.length &&
                    (w.params.updateOnImagesReady && w.update(),
                    w.emit("onImagesReady", w)));
              }
              w.imagesToLoad = w.container.find("img");
              for (var t = 0; t < w.imagesToLoad.length; t++)
                w.loadImage(
                  w.imagesToLoad[t],
                  w.imagesToLoad[t].currentSrc ||
                    w.imagesToLoad[t].getAttribute("src"),
                  w.imagesToLoad[t].srcset ||
                    w.imagesToLoad[t].getAttribute("srcset"),
                  !0,
                  e
                );
            }),
            (w.autoplayTimeoutId = void 0),
            (w.autoplaying = !1),
            (w.autoplayPaused = !1),
            (w.startAutoplay = function () {
              return (
                void 0 === w.autoplayTimeoutId &&
                !!w.params.autoplay &&
                !w.autoplaying &&
                ((w.autoplaying = !0), w.emit("onAutoplayStart", w), void o())
              );
            }),
            (w.stopAutoplay = function (e) {
              w.autoplayTimeoutId &&
                (w.autoplayTimeoutId && clearTimeout(w.autoplayTimeoutId),
                (w.autoplaying = !1),
                (w.autoplayTimeoutId = void 0),
                w.emit("onAutoplayStop", w));
            }),
            (w.pauseAutoplay = function (e) {
              w.autoplayPaused ||
                (w.autoplayTimeoutId && clearTimeout(w.autoplayTimeoutId),
                (w.autoplayPaused = !0),
                0 === e
                  ? ((w.autoplayPaused = !1), o())
                  : w.wrapper.transitionEnd(function () {
                      w &&
                        ((w.autoplayPaused = !1),
                        w.autoplaying ? o() : w.stopAutoplay());
                    }));
            }),
            (w.minTranslate = function () {
              return -w.snapGrid[0];
            }),
            (w.maxTranslate = function () {
              return -w.snapGrid[w.snapGrid.length - 1];
            }),
            (w.updateAutoHeight = function () {
              var e = w.slides.eq(w.activeIndex)[0];
              if (void 0 !== e) {
                var t = e.offsetHeight;
                t && w.wrapper.css("height", t + "px");
              }
            }),
            (w.updateContainerSize = function () {
              var e, t;
              (e =
                void 0 !== w.params.width
                  ? w.params.width
                  : w.container[0].clientWidth),
                (t =
                  void 0 !== w.params.height
                    ? w.params.height
                    : w.container[0].clientHeight),
                (0 === e && w.isHorizontal()) ||
                  (0 === t && !w.isHorizontal()) ||
                  ((e =
                    e -
                    parseInt(w.container.css("padding-left"), 10) -
                    parseInt(w.container.css("padding-right"), 10)),
                  (t =
                    t -
                    parseInt(w.container.css("padding-top"), 10) -
                    parseInt(w.container.css("padding-bottom"), 10)),
                  (w.width = e),
                  (w.height = t),
                  (w.size = w.isHorizontal() ? w.width : w.height));
            }),
            (w.updateSlidesSize = function () {
              (w.slides = w.wrapper.children("." + w.params.slideClass)),
                (w.snapGrid = []),
                (w.slidesGrid = []),
                (w.slidesSizesGrid = []);
              var e,
                t = w.params.spaceBetween,
                n = -w.params.slidesOffsetBefore,
                i = 0,
                a = 0;
              if (void 0 !== w.size) {
                "string" == typeof t &&
                  t.indexOf("%") >= 0 &&
                  (t = (parseFloat(t.replace("%", "")) / 100) * w.size),
                  (w.virtualSize = -t),
                  w.rtl
                    ? w.slides.css({ marginLeft: "", marginTop: "" })
                    : w.slides.css({ marginRight: "", marginBottom: "" });
                var o;
                w.params.slidesPerColumn > 1 &&
                  ((o =
                    Math.floor(w.slides.length / w.params.slidesPerColumn) ===
                    w.slides.length / w.params.slidesPerColumn
                      ? w.slides.length
                      : Math.ceil(w.slides.length / w.params.slidesPerColumn) *
                        w.params.slidesPerColumn),
                  "auto" !== w.params.slidesPerView &&
                    "row" === w.params.slidesPerColumnFill &&
                    (o = Math.max(
                      o,
                      w.params.slidesPerView * w.params.slidesPerColumn
                    )));
                var s,
                  l = w.params.slidesPerColumn,
                  p = o / l,
                  c = p - (w.params.slidesPerColumn * p - w.slides.length);
                for (e = 0; e < w.slides.length; e++) {
                  s = 0;
                  var d = w.slides.eq(e);
                  if (w.params.slidesPerColumn > 1) {
                    var u, f, h;
                    "column" === w.params.slidesPerColumnFill
                      ? ((f = Math.floor(e / l)),
                        (h = e - f * l),
                        (f > c || (f === c && h === l - 1)) &&
                          ++h >= l &&
                          ((h = 0), f++),
                        (u = f + (h * o) / l),
                        d.css({
                          "-webkit-box-ordinal-group": u,
                          "-moz-box-ordinal-group": u,
                          "-ms-flex-order": u,
                          "-webkit-order": u,
                          order: u,
                        }))
                      : ((h = Math.floor(e / p)), (f = e - h * p)),
                      d
                        .css({
                          "margin-top":
                            0 !== h &&
                            w.params.spaceBetween &&
                            w.params.spaceBetween + "px",
                        })
                        .attr("data-swiper-column", f)
                        .attr("data-swiper-row", h);
                  }
                  "none" !== d.css("display") &&
                    ("auto" === w.params.slidesPerView
                      ? ((s = w.isHorizontal()
                          ? d.outerWidth(!0)
                          : d.outerHeight(!0)),
                        w.params.roundLengths && (s = r(s)))
                      : ((s =
                          (w.size - (w.params.slidesPerView - 1) * t) /
                          w.params.slidesPerView),
                        w.params.roundLengths && (s = r(s)),
                        w.isHorizontal()
                          ? (w.slides[e].style.width = s + "px")
                          : (w.slides[e].style.height = s + "px")),
                    (w.slides[e].swiperSlideSize = s),
                    w.slidesSizesGrid.push(s),
                    w.params.centeredSlides
                      ? ((n = n + s / 2 + i / 2 + t),
                        0 === e && (n = n - w.size / 2 - t),
                        Math.abs(n) < 0.001 && (n = 0),
                        a % w.params.slidesPerGroup == 0 && w.snapGrid.push(n),
                        w.slidesGrid.push(n))
                      : (a % w.params.slidesPerGroup == 0 && w.snapGrid.push(n),
                        w.slidesGrid.push(n),
                        (n = n + s + t)),
                    (w.virtualSize += s + t),
                    (i = s),
                    a++);
                }
                w.virtualSize =
                  Math.max(w.virtualSize, w.size) + w.params.slidesOffsetAfter;
                var m;
                if (
                  (w.rtl &&
                    w.wrongRTL &&
                    ("slide" === w.params.effect ||
                      "coverflow" === w.params.effect) &&
                    w.wrapper.css({
                      width: w.virtualSize + w.params.spaceBetween + "px",
                    }),
                  (w.support.flexbox && !w.params.setWrapperSize) ||
                    (w.isHorizontal()
                      ? w.wrapper.css({
                          width: w.virtualSize + w.params.spaceBetween + "px",
                        })
                      : w.wrapper.css({
                          height: w.virtualSize + w.params.spaceBetween + "px",
                        })),
                  w.params.slidesPerColumn > 1 &&
                    ((w.virtualSize = (s + w.params.spaceBetween) * o),
                    (w.virtualSize =
                      Math.ceil(w.virtualSize / w.params.slidesPerColumn) -
                      w.params.spaceBetween),
                    w.wrapper.css({
                      width: w.virtualSize + w.params.spaceBetween + "px",
                    }),
                    w.params.centeredSlides))
                ) {
                  for (m = [], e = 0; e < w.snapGrid.length; e++)
                    w.snapGrid[e] < w.virtualSize + w.snapGrid[0] &&
                      m.push(w.snapGrid[e]);
                  w.snapGrid = m;
                }
                if (!w.params.centeredSlides) {
                  for (m = [], e = 0; e < w.snapGrid.length; e++)
                    w.snapGrid[e] <= w.virtualSize - w.size &&
                      m.push(w.snapGrid[e]);
                  (w.snapGrid = m),
                    Math.floor(w.virtualSize - w.size) -
                      Math.floor(w.snapGrid[w.snapGrid.length - 1]) >
                      1 && w.snapGrid.push(w.virtualSize - w.size);
                }
                0 === w.snapGrid.length && (w.snapGrid = [0]),
                  0 !== w.params.spaceBetween &&
                    (w.isHorizontal()
                      ? w.rtl
                        ? w.slides.css({ marginLeft: t + "px" })
                        : w.slides.css({ marginRight: t + "px" })
                      : w.slides.css({ marginBottom: t + "px" })),
                  w.params.watchSlidesProgress && w.updateSlidesOffset();
              }
            }),
            (w.updateSlidesOffset = function () {
              for (var e = 0; e < w.slides.length; e++)
                w.slides[e].swiperSlideOffset = w.isHorizontal()
                  ? w.slides[e].offsetLeft
                  : w.slides[e].offsetTop;
            }),
            (w.updateSlidesProgress = function (e) {
              if (
                (void 0 === e && (e = w.translate || 0), 0 !== w.slides.length)
              ) {
                void 0 === w.slides[0].swiperSlideOffset &&
                  w.updateSlidesOffset();
                var t = -e;
                w.rtl && (t = e),
                  w.slides.removeClass(w.params.slideVisibleClass);
                for (var n = 0; n < w.slides.length; n++) {
                  var i = w.slides[n],
                    a =
                      (t - i.swiperSlideOffset) /
                      (i.swiperSlideSize + w.params.spaceBetween);
                  if (w.params.watchSlidesVisibility) {
                    var r = -(t - i.swiperSlideOffset),
                      o = r + w.slidesSizesGrid[n];
                    ((r >= 0 && r < w.size) ||
                      (o > 0 && o <= w.size) ||
                      (r <= 0 && o >= w.size)) &&
                      w.slides.eq(n).addClass(w.params.slideVisibleClass);
                  }
                  i.progress = w.rtl ? -a : a;
                }
              }
            }),
            (w.updateProgress = function (e) {
              void 0 === e && (e = w.translate || 0);
              var t = w.maxTranslate() - w.minTranslate(),
                n = w.isBeginning,
                i = w.isEnd;
              0 === t
                ? ((w.progress = 0), (w.isBeginning = w.isEnd = !0))
                : ((w.progress = (e - w.minTranslate()) / t),
                  (w.isBeginning = w.progress <= 0),
                  (w.isEnd = w.progress >= 1)),
                w.isBeginning && !n && w.emit("onReachBeginning", w),
                w.isEnd && !i && w.emit("onReachEnd", w),
                w.params.watchSlidesProgress && w.updateSlidesProgress(e),
                w.emit("onProgress", w, w.progress);
            }),
            (w.updateActiveIndex = function () {
              var e,
                t,
                n,
                i = w.rtl ? w.translate : -w.translate;
              for (t = 0; t < w.slidesGrid.length; t++)
                void 0 !== w.slidesGrid[t + 1]
                  ? i >= w.slidesGrid[t] &&
                    i <
                      w.slidesGrid[t + 1] -
                        (w.slidesGrid[t + 1] - w.slidesGrid[t]) / 2
                    ? (e = t)
                    : i >= w.slidesGrid[t] &&
                      i < w.slidesGrid[t + 1] &&
                      (e = t + 1)
                  : i >= w.slidesGrid[t] && (e = t);
              (e < 0 || void 0 === e) && (e = 0),
                (n = Math.floor(e / w.params.slidesPerGroup)),
                n >= w.snapGrid.length && (n = w.snapGrid.length - 1),
                e !== w.activeIndex &&
                  ((w.snapIndex = n),
                  (w.previousIndex = w.activeIndex),
                  (w.activeIndex = e),
                  w.updateClasses());
            }),
            (w.updateClasses = function () {
              w.slides.removeClass(
                w.params.slideActiveClass +
                  " " +
                  w.params.slideNextClass +
                  " " +
                  w.params.slidePrevClass
              );
              var t = w.slides.eq(w.activeIndex);
              t.addClass(w.params.slideActiveClass);
              var n = t
                .next("." + w.params.slideClass)
                .addClass(w.params.slideNextClass);
              w.params.loop &&
                0 === n.length &&
                w.slides.eq(0).addClass(w.params.slideNextClass);
              var i = t
                .prev("." + w.params.slideClass)
                .addClass(w.params.slidePrevClass);
              if (
                (w.params.loop &&
                  0 === i.length &&
                  w.slides.eq(-1).addClass(w.params.slidePrevClass),
                w.paginationContainer && w.paginationContainer.length > 0)
              ) {
                var a,
                  r = w.params.loop
                    ? Math.ceil(
                        (w.slides.length - 2 * w.loopedSlides) /
                          w.params.slidesPerGroup
                      )
                    : w.snapGrid.length;
                if (
                  (w.params.loop
                    ? ((a = Math.ceil(
                        (w.activeIndex - w.loopedSlides) /
                          w.params.slidesPerGroup
                      )),
                      a > w.slides.length - 1 - 2 * w.loopedSlides &&
                        (a -= w.slides.length - 2 * w.loopedSlides),
                      a > r - 1 && (a -= r),
                      a < 0 &&
                        "bullets" !== w.params.paginationType &&
                        (a = r + a))
                    : (a =
                        void 0 !== w.snapIndex
                          ? w.snapIndex
                          : w.activeIndex || 0),
                  "bullets" === w.params.paginationType &&
                    w.bullets &&
                    w.bullets.length > 0 &&
                    (w.bullets.removeClass(w.params.bulletActiveClass),
                    w.paginationContainer.length > 1
                      ? w.bullets.each(function () {
                          e(this).index() === a &&
                            e(this).addClass(w.params.bulletActiveClass);
                        })
                      : w.bullets.eq(a).addClass(w.params.bulletActiveClass)),
                  "fraction" === w.params.paginationType &&
                    (w.paginationContainer
                      .find("." + w.params.paginationCurrentClass)
                      .text(a + 1),
                    w.paginationContainer
                      .find("." + w.params.paginationTotalClass)
                      .text(r)),
                  "progress" === w.params.paginationType)
                ) {
                  var o = (a + 1) / r,
                    s = o,
                    l = 1;
                  w.isHorizontal() || ((l = o), (s = 1)),
                    w.paginationContainer
                      .find("." + w.params.paginationProgressbarClass)
                      .transform(
                        "translate3d(0,0,0) scaleX(" + s + ") scaleY(" + l + ")"
                      )
                      .transition(w.params.speed);
                }
                "custom" === w.params.paginationType &&
                  w.params.paginationCustomRender &&
                  (w.paginationContainer.html(
                    w.params.paginationCustomRender(w, a + 1, r)
                  ),
                  w.emit("onPaginationRendered", w, w.paginationContainer[0]));
              }
              w.params.loop ||
                (w.params.prevButton &&
                  w.prevButton &&
                  w.prevButton.length > 0 &&
                  (w.isBeginning
                    ? (w.prevButton.addClass(w.params.buttonDisabledClass),
                      w.params.a11y && w.a11y && w.a11y.disable(w.prevButton))
                    : (w.prevButton.removeClass(w.params.buttonDisabledClass),
                      w.params.a11y && w.a11y && w.a11y.enable(w.prevButton))),
                w.params.nextButton &&
                  w.nextButton &&
                  w.nextButton.length > 0 &&
                  (w.isEnd
                    ? (w.nextButton.addClass(w.params.buttonDisabledClass),
                      w.params.a11y && w.a11y && w.a11y.disable(w.nextButton))
                    : (w.nextButton.removeClass(w.params.buttonDisabledClass),
                      w.params.a11y && w.a11y && w.a11y.enable(w.nextButton))));
            }),
            (w.updatePagination = function () {
              if (
                w.params.pagination &&
                w.paginationContainer &&
                w.paginationContainer.length > 0
              ) {
                var e = "";
                if ("bullets" === w.params.paginationType) {
                  for (
                    var t = w.params.loop
                        ? Math.ceil(
                            (w.slides.length - 2 * w.loopedSlides) /
                              w.params.slidesPerGroup
                          )
                        : w.snapGrid.length,
                      n = 0;
                    n < t;
                    n++
                  )
                    w.params.paginationBulletRender
                      ? (e += w.params.paginationBulletRender(
                          n,
                          w.params.bulletClass
                        ))
                      : (e +=
                          "<" +
                          w.params.paginationElement +
                          ' class="' +
                          w.params.bulletClass +
                          '"></' +
                          w.params.paginationElement +
                          ">");
                  w.paginationContainer.html(e),
                    (w.bullets = w.paginationContainer.find(
                      "." + w.params.bulletClass
                    )),
                    w.params.paginationClickable &&
                      w.params.a11y &&
                      w.a11y &&
                      w.a11y.initPagination();
                }
                "fraction" === w.params.paginationType &&
                  ((e = w.params.paginationFractionRender
                    ? w.params.paginationFractionRender(
                        w,
                        w.params.paginationCurrentClass,
                        w.params.paginationTotalClass
                      )
                    : '<span class="' +
                      w.params.paginationCurrentClass +
                      '"></span> / <span class="' +
                      w.params.paginationTotalClass +
                      '"></span>'),
                  w.paginationContainer.html(e)),
                  "progress" === w.params.paginationType &&
                    ((e = w.params.paginationProgressRender
                      ? w.params.paginationProgressRender(
                          w,
                          w.params.paginationProgressbarClass
                        )
                      : '<span class="' +
                        w.params.paginationProgressbarClass +
                        '"></span>'),
                    w.paginationContainer.html(e)),
                  "custom" !== w.params.paginationType &&
                    w.emit("onPaginationRendered", w, w.paginationContainer[0]);
              }
            }),
            (w.update = function (e) {
              function t() {
                (n = Math.min(
                  Math.max(w.translate, w.maxTranslate()),
                  w.minTranslate()
                )),
                  w.setWrapperTranslate(n),
                  w.updateActiveIndex(),
                  w.updateClasses();
              }
              if (
                (w.updateContainerSize(),
                w.updateSlidesSize(),
                w.updateProgress(),
                w.updatePagination(),
                w.updateClasses(),
                w.params.scrollbar && w.scrollbar && w.scrollbar.set(),
                e)
              ) {
                var n;
                w.controller &&
                  w.controller.spline &&
                  (w.controller.spline = void 0),
                  w.params.freeMode
                    ? (t(), w.params.autoHeight && w.updateAutoHeight())
                    : (("auto" === w.params.slidesPerView ||
                        w.params.slidesPerView > 1) &&
                      w.isEnd &&
                      !w.params.centeredSlides
                        ? w.slideTo(w.slides.length - 1, 0, !1, !0)
                        : w.slideTo(w.activeIndex, 0, !1, !0)) || t();
              } else w.params.autoHeight && w.updateAutoHeight();
            }),
            (w.onResize = function (e) {
              w.params.breakpoints && w.setBreakpoint();
              var t = w.params.allowSwipeToPrev,
                n = w.params.allowSwipeToNext;
              (w.params.allowSwipeToPrev = w.params.allowSwipeToNext = !0),
                w.updateContainerSize(),
                w.updateSlidesSize(),
                ("auto" === w.params.slidesPerView || w.params.freeMode || e) &&
                  w.updatePagination(),
                w.params.scrollbar && w.scrollbar && w.scrollbar.set(),
                w.controller &&
                  w.controller.spline &&
                  (w.controller.spline = void 0);
              var i = !1;
              if (w.params.freeMode) {
                var a = Math.min(
                  Math.max(w.translate, w.maxTranslate()),
                  w.minTranslate()
                );
                w.setWrapperTranslate(a),
                  w.updateActiveIndex(),
                  w.updateClasses(),
                  w.params.autoHeight && w.updateAutoHeight();
              } else
                w.updateClasses(),
                  (i =
                    ("auto" === w.params.slidesPerView ||
                      w.params.slidesPerView > 1) &&
                    w.isEnd &&
                    !w.params.centeredSlides
                      ? w.slideTo(w.slides.length - 1, 0, !1, !0)
                      : w.slideTo(w.activeIndex, 0, !1, !0));
              w.params.lazyLoading && !i && w.lazy && w.lazy.load(),
                (w.params.allowSwipeToPrev = t),
                (w.params.allowSwipeToNext = n);
            });
          var C = ["mousedown", "mousemove", "mouseup"];
          window.navigator.pointerEnabled
            ? (C = ["pointerdown", "pointermove", "pointerup"])
            : window.navigator.msPointerEnabled &&
              (C = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]),
            (w.touchEvents = {
              start:
                w.support.touch || !w.params.simulateTouch
                  ? "touchstart"
                  : C[0],
              move:
                w.support.touch || !w.params.simulateTouch ? "touchmove" : C[1],
              end:
                w.support.touch || !w.params.simulateTouch ? "touchend" : C[2],
            }),
            (window.navigator.pointerEnabled ||
              window.navigator.msPointerEnabled) &&
              ("container" === w.params.touchEventsTarget
                ? w.container
                : w.wrapper
              ).addClass("swiper-wp8-" + w.params.direction),
            (w.initEvents = function (e) {
              var t = e ? "off" : "on",
                n = e ? "removeEventListener" : "addEventListener",
                i =
                  "container" === w.params.touchEventsTarget
                    ? w.container[0]
                    : w.wrapper[0],
                r = w.support.touch ? i : document,
                o = !!w.params.nested;
              w.browser.ie
                ? (i[n](w.touchEvents.start, w.onTouchStart, !1),
                  r[n](w.touchEvents.move, w.onTouchMove, o),
                  r[n](w.touchEvents.end, w.onTouchEnd, !1))
                : (w.support.touch &&
                    (i[n](w.touchEvents.start, w.onTouchStart, !1),
                    i[n](w.touchEvents.move, w.onTouchMove, o),
                    i[n](w.touchEvents.end, w.onTouchEnd, !1)),
                  !a.simulateTouch ||
                    w.device.ios ||
                    w.device.android ||
                    (i[n]("mousedown", w.onTouchStart, !1),
                    document[n]("mousemove", w.onTouchMove, o),
                    document[n]("mouseup", w.onTouchEnd, !1))),
                window[n]("resize", w.onResize),
                w.params.nextButton &&
                  w.nextButton &&
                  w.nextButton.length > 0 &&
                  (w.nextButton[t]("click", w.onClickNext),
                  w.params.a11y &&
                    w.a11y &&
                    w.nextButton[t]("keydown", w.a11y.onEnterKey)),
                w.params.prevButton &&
                  w.prevButton &&
                  w.prevButton.length > 0 &&
                  (w.prevButton[t]("click", w.onClickPrev),
                  w.params.a11y &&
                    w.a11y &&
                    w.prevButton[t]("keydown", w.a11y.onEnterKey)),
                w.params.pagination &&
                  w.params.paginationClickable &&
                  (w.paginationContainer[t](
                    "click",
                    "." + w.params.bulletClass,
                    w.onClickIndex
                  ),
                  w.params.a11y &&
                    w.a11y &&
                    w.paginationContainer[t](
                      "keydown",
                      "." + w.params.bulletClass,
                      w.a11y.onEnterKey
                    )),
                (w.params.preventClicks || w.params.preventClicksPropagation) &&
                  i[n]("click", w.preventClicks, !0);
            }),
            (w.attachEvents = function () {
              w.initEvents();
            }),
            (w.detachEvents = function () {
              w.initEvents(!0);
            }),
            (w.allowClick = !0),
            (w.preventClicks = function (e) {
              w.allowClick ||
                (w.params.preventClicks && e.preventDefault(),
                w.params.preventClicksPropagation &&
                  w.animating &&
                  (e.stopPropagation(), e.stopImmediatePropagation()));
            }),
            (w.onClickNext = function (e) {
              e.preventDefault(), (w.isEnd && !w.params.loop) || w.slideNext();
            }),
            (w.onClickPrev = function (e) {
              e.preventDefault(),
                (w.isBeginning && !w.params.loop) || w.slidePrev();
            }),
            (w.onClickIndex = function (t) {
              t.preventDefault();
              var n = e(this).index() * w.params.slidesPerGroup;
              w.params.loop && (n += w.loopedSlides), w.slideTo(n);
            }),
            (w.updateClickedSlide = function (t) {
              var n = s(t, "." + w.params.slideClass),
                i = !1;
              if (n)
                for (var a = 0; a < w.slides.length; a++)
                  w.slides[a] === n && (i = !0);
              if (!n || !i)
                return (
                  (w.clickedSlide = void 0), void (w.clickedIndex = void 0)
                );
              if (
                ((w.clickedSlide = n),
                (w.clickedIndex = e(n).index()),
                w.params.slideToClickedSlide &&
                  void 0 !== w.clickedIndex &&
                  w.clickedIndex !== w.activeIndex)
              ) {
                var r,
                  o = w.clickedIndex;
                if (w.params.loop) {
                  if (w.animating) return;
                  (r = e(w.clickedSlide).attr("data-swiper-slide-index")),
                    w.params.centeredSlides
                      ? o < w.loopedSlides - w.params.slidesPerView / 2 ||
                        o >
                          w.slides.length -
                            w.loopedSlides +
                            w.params.slidesPerView / 2
                        ? (w.fixLoop(),
                          (o = w.wrapper
                            .children(
                              "." +
                                w.params.slideClass +
                                '[data-swiper-slide-index="' +
                                r +
                                '"]:not(.swiper-slide-duplicate)'
                            )
                            .eq(0)
                            .index()),
                          setTimeout(function () {
                            w.slideTo(o);
                          }, 0))
                        : w.slideTo(o)
                      : o > w.slides.length - w.params.slidesPerView
                      ? (w.fixLoop(),
                        (o = w.wrapper
                          .children(
                            "." +
                              w.params.slideClass +
                              '[data-swiper-slide-index="' +
                              r +
                              '"]:not(.swiper-slide-duplicate)'
                          )
                          .eq(0)
                          .index()),
                        setTimeout(function () {
                          w.slideTo(o);
                        }, 0))
                      : w.slideTo(o);
                } else w.slideTo(o);
              }
            });
          var T,
            S,
            k,
            E,
            I,
            A,
            L,
            $,
            _,
            D,
            O = "input, select, textarea, button",
            P = Date.now(),
            M = [];
          (w.animating = !1),
            (w.touches = {
              startX: 0,
              startY: 0,
              currentX: 0,
              currentY: 0,
              diff: 0,
            });
          var B, R;
          if (
            ((w.onTouchStart = function (t) {
              if (
                (t.originalEvent && (t = t.originalEvent),
                (B = "touchstart" === t.type) ||
                  !("which" in t) ||
                  3 !== t.which)
              ) {
                if (w.params.noSwiping && s(t, "." + w.params.noSwipingClass))
                  return void (w.allowClick = !0);
                if (!w.params.swipeHandler || s(t, w.params.swipeHandler)) {
                  var n = (w.touches.currentX =
                      "touchstart" === t.type
                        ? t.targetTouches[0].pageX
                        : t.pageX),
                    i = (w.touches.currentY =
                      "touchstart" === t.type
                        ? t.targetTouches[0].pageY
                        : t.pageY);
                  if (
                    !(
                      w.device.ios &&
                      w.params.iOSEdgeSwipeDetection &&
                      n <= w.params.iOSEdgeSwipeThreshold
                    )
                  ) {
                    if (
                      ((T = !0),
                      (S = !1),
                      (k = !0),
                      (I = void 0),
                      (R = void 0),
                      (w.touches.startX = n),
                      (w.touches.startY = i),
                      (E = Date.now()),
                      (w.allowClick = !0),
                      w.updateContainerSize(),
                      (w.swipeDirection = void 0),
                      w.params.threshold > 0 && ($ = !1),
                      "touchstart" !== t.type)
                    ) {
                      var a = !0;
                      e(t.target).is(O) && (a = !1),
                        document.activeElement &&
                          e(document.activeElement).is(O) &&
                          document.activeElement.blur(),
                        a && t.preventDefault();
                    }
                    w.emit("onTouchStart", w, t);
                  }
                }
              }
            }),
            (w.onTouchMove = function (t) {
              if (
                (t.originalEvent && (t = t.originalEvent),
                !B || "mousemove" !== t.type)
              ) {
                if (t.preventedByNestedSwiper)
                  return (
                    (w.touches.startX =
                      "touchmove" === t.type
                        ? t.targetTouches[0].pageX
                        : t.pageX),
                    void (w.touches.startY =
                      "touchmove" === t.type
                        ? t.targetTouches[0].pageY
                        : t.pageY)
                  );
                if (w.params.onlyExternal)
                  return (
                    (w.allowClick = !1),
                    void (
                      T &&
                      ((w.touches.startX = w.touches.currentX =
                        "touchmove" === t.type
                          ? t.targetTouches[0].pageX
                          : t.pageX),
                      (w.touches.startY = w.touches.currentY =
                        "touchmove" === t.type
                          ? t.targetTouches[0].pageY
                          : t.pageY),
                      (E = Date.now()))
                    )
                  );
                if (
                  B &&
                  document.activeElement &&
                  t.target === document.activeElement &&
                  e(t.target).is(O)
                )
                  return (S = !0), void (w.allowClick = !1);
                if (
                  (k && w.emit("onTouchMove", w, t),
                  !(t.targetTouches && t.targetTouches.length > 1))
                ) {
                  if (
                    ((w.touches.currentX =
                      "touchmove" === t.type
                        ? t.targetTouches[0].pageX
                        : t.pageX),
                    (w.touches.currentY =
                      "touchmove" === t.type
                        ? t.targetTouches[0].pageY
                        : t.pageY),
                    void 0 === I)
                  ) {
                    var n =
                      (180 *
                        Math.atan2(
                          Math.abs(w.touches.currentY - w.touches.startY),
                          Math.abs(w.touches.currentX - w.touches.startX)
                        )) /
                      Math.PI;
                    I = w.isHorizontal()
                      ? n > w.params.touchAngle
                      : 90 - n > w.params.touchAngle;
                  }
                  if (
                    (I && w.emit("onTouchMoveOpposite", w, t),
                    void 0 === R &&
                      w.browser.ieTouch &&
                      ((w.touches.currentX === w.touches.startX &&
                        w.touches.currentY === w.touches.startY) ||
                        (R = !0)),
                    T)
                  ) {
                    if (I) return void (T = !1);
                    if (R || !w.browser.ieTouch) {
                      (w.allowClick = !1),
                        w.emit("onSliderMove", w, t),
                        t.preventDefault(),
                        w.params.touchMoveStopPropagation &&
                          !w.params.nested &&
                          t.stopPropagation(),
                        S ||
                          (a.loop && w.fixLoop(),
                          (L = w.getWrapperTranslate()),
                          w.setWrapperTransition(0),
                          w.animating &&
                            w.wrapper.trigger(
                              "webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"
                            ),
                          w.params.autoplay &&
                            w.autoplaying &&
                            (w.params.autoplayDisableOnInteraction
                              ? w.stopAutoplay()
                              : w.pauseAutoplay()),
                          (D = !1),
                          w.params.grabCursor &&
                            ((w.container[0].style.cursor = "move"),
                            (w.container[0].style.cursor = "-webkit-grabbing"),
                            (w.container[0].style.cursor = "-moz-grabbin"),
                            (w.container[0].style.cursor = "grabbing"))),
                        (S = !0);
                      var i = (w.touches.diff = w.isHorizontal()
                        ? w.touches.currentX - w.touches.startX
                        : w.touches.currentY - w.touches.startY);
                      (i *= w.params.touchRatio),
                        w.rtl && (i = -i),
                        (w.swipeDirection = i > 0 ? "prev" : "next"),
                        (A = i + L);
                      var r = !0;
                      if (
                        (i > 0 && A > w.minTranslate()
                          ? ((r = !1),
                            w.params.resistance &&
                              (A =
                                w.minTranslate() -
                                1 +
                                Math.pow(
                                  -w.minTranslate() + L + i,
                                  w.params.resistanceRatio
                                )))
                          : i < 0 &&
                            A < w.maxTranslate() &&
                            ((r = !1),
                            w.params.resistance &&
                              (A =
                                w.maxTranslate() +
                                1 -
                                Math.pow(
                                  w.maxTranslate() - L - i,
                                  w.params.resistanceRatio
                                ))),
                        r && (t.preventedByNestedSwiper = !0),
                        !w.params.allowSwipeToNext &&
                          "next" === w.swipeDirection &&
                          A < L &&
                          (A = L),
                        !w.params.allowSwipeToPrev &&
                          "prev" === w.swipeDirection &&
                          A > L &&
                          (A = L),
                        w.params.followFinger)
                      ) {
                        if (w.params.threshold > 0) {
                          if (!(Math.abs(i) > w.params.threshold || $))
                            return void (A = L);
                          if (!$)
                            return (
                              ($ = !0),
                              (w.touches.startX = w.touches.currentX),
                              (w.touches.startY = w.touches.currentY),
                              (A = L),
                              void (w.touches.diff = w.isHorizontal()
                                ? w.touches.currentX - w.touches.startX
                                : w.touches.currentY - w.touches.startY)
                            );
                        }
                        (w.params.freeMode || w.params.watchSlidesProgress) &&
                          w.updateActiveIndex(),
                          w.params.freeMode &&
                            (0 === M.length &&
                              M.push({
                                position:
                                  w.touches[
                                    w.isHorizontal() ? "startX" : "startY"
                                  ],
                                time: E,
                              }),
                            M.push({
                              position:
                                w.touches[
                                  w.isHorizontal() ? "currentX" : "currentY"
                                ],
                              time: new window.Date().getTime(),
                            })),
                          w.updateProgress(A),
                          w.setWrapperTranslate(A);
                      }
                    }
                  }
                }
              }
            }),
            (w.onTouchEnd = function (t) {
              if (
                (t.originalEvent && (t = t.originalEvent),
                k && w.emit("onTouchEnd", w, t),
                (k = !1),
                T)
              ) {
                w.params.grabCursor &&
                  S &&
                  T &&
                  ((w.container[0].style.cursor = "move"),
                  (w.container[0].style.cursor = "-webkit-grab"),
                  (w.container[0].style.cursor = "-moz-grab"),
                  (w.container[0].style.cursor = "grab"));
                var n = Date.now(),
                  i = n - E;
                if (
                  (w.allowClick &&
                    (w.updateClickedSlide(t),
                    w.emit("onTap", w, t),
                    i < 300 &&
                      n - P > 300 &&
                      (_ && clearTimeout(_),
                      (_ = setTimeout(function () {
                        w &&
                          (w.params.paginationHide &&
                            w.paginationContainer.length > 0 &&
                            !e(t.target).hasClass(w.params.bulletClass) &&
                            w.paginationContainer.toggleClass(
                              w.params.paginationHiddenClass
                            ),
                          w.emit("onClick", w, t));
                      }, 300))),
                    i < 300 &&
                      n - P < 300 &&
                      (_ && clearTimeout(_), w.emit("onDoubleTap", w, t))),
                  (P = Date.now()),
                  setTimeout(function () {
                    w && (w.allowClick = !0);
                  }, 0),
                  !T ||
                    !S ||
                    !w.swipeDirection ||
                    0 === w.touches.diff ||
                    A === L)
                )
                  return void (T = S = !1);
                T = S = !1;
                var a;
                if (
                  ((a = w.params.followFinger
                    ? w.rtl
                      ? w.translate
                      : -w.translate
                    : -A),
                  w.params.freeMode)
                ) {
                  if (a < -w.minTranslate())
                    return void w.slideTo(w.activeIndex);
                  if (a > -w.maxTranslate())
                    return void (w.slides.length < w.snapGrid.length
                      ? w.slideTo(w.snapGrid.length - 1)
                      : w.slideTo(w.slides.length - 1));
                  if (w.params.freeModeMomentum) {
                    if (M.length > 1) {
                      var r = M.pop(),
                        o = M.pop(),
                        s = r.position - o.position,
                        l = r.time - o.time;
                      (w.velocity = s / l),
                        (w.velocity = w.velocity / 2),
                        Math.abs(w.velocity) <
                          w.params.freeModeMinimumVelocity && (w.velocity = 0),
                        (l > 150 ||
                          new window.Date().getTime() - r.time > 300) &&
                          (w.velocity = 0);
                    } else w.velocity = 0;
                    M.length = 0;
                    var p = 1e3 * w.params.freeModeMomentumRatio,
                      c = w.velocity * p,
                      d = w.translate + c;
                    w.rtl && (d = -d);
                    var u,
                      f = !1,
                      h =
                        20 *
                        Math.abs(w.velocity) *
                        w.params.freeModeMomentumBounceRatio;
                    if (d < w.maxTranslate())
                      w.params.freeModeMomentumBounce
                        ? (d + w.maxTranslate() < -h &&
                            (d = w.maxTranslate() - h),
                          (u = w.maxTranslate()),
                          (f = !0),
                          (D = !0))
                        : (d = w.maxTranslate());
                    else if (d > w.minTranslate())
                      w.params.freeModeMomentumBounce
                        ? (d - w.minTranslate() > h &&
                            (d = w.minTranslate() + h),
                          (u = w.minTranslate()),
                          (f = !0),
                          (D = !0))
                        : (d = w.minTranslate());
                    else if (w.params.freeModeSticky) {
                      var m,
                        g = 0;
                      for (g = 0; g < w.snapGrid.length; g += 1)
                        if (w.snapGrid[g] > -d) {
                          m = g;
                          break;
                        }
                      (d =
                        Math.abs(w.snapGrid[m] - d) <
                          Math.abs(w.snapGrid[m - 1] - d) ||
                        "next" === w.swipeDirection
                          ? w.snapGrid[m]
                          : w.snapGrid[m - 1]),
                        w.rtl || (d = -d);
                    }
                    if (0 !== w.velocity)
                      p = w.rtl
                        ? Math.abs((-d - w.translate) / w.velocity)
                        : Math.abs((d - w.translate) / w.velocity);
                    else if (w.params.freeModeSticky)
                      return void w.slideReset();
                    w.params.freeModeMomentumBounce && f
                      ? (w.updateProgress(u),
                        w.setWrapperTransition(p),
                        w.setWrapperTranslate(d),
                        w.onTransitionStart(),
                        (w.animating = !0),
                        w.wrapper.transitionEnd(function () {
                          w &&
                            D &&
                            (w.emit("onMomentumBounce", w),
                            w.setWrapperTransition(w.params.speed),
                            w.setWrapperTranslate(u),
                            w.wrapper.transitionEnd(function () {
                              w && w.onTransitionEnd();
                            }));
                        }))
                      : w.velocity
                      ? (w.updateProgress(d),
                        w.setWrapperTransition(p),
                        w.setWrapperTranslate(d),
                        w.onTransitionStart(),
                        w.animating ||
                          ((w.animating = !0),
                          w.wrapper.transitionEnd(function () {
                            w && w.onTransitionEnd();
                          })))
                      : w.updateProgress(d),
                      w.updateActiveIndex();
                  }
                  return void (
                    (!w.params.freeModeMomentum ||
                      i >= w.params.longSwipesMs) &&
                    (w.updateProgress(), w.updateActiveIndex())
                  );
                }
                var v,
                  b = 0,
                  y = w.slidesSizesGrid[0];
                for (
                  v = 0;
                  v < w.slidesGrid.length;
                  v += w.params.slidesPerGroup
                )
                  void 0 !== w.slidesGrid[v + w.params.slidesPerGroup]
                    ? a >= w.slidesGrid[v] &&
                      a < w.slidesGrid[v + w.params.slidesPerGroup] &&
                      ((b = v),
                      (y =
                        w.slidesGrid[v + w.params.slidesPerGroup] -
                        w.slidesGrid[v]))
                    : a >= w.slidesGrid[v] &&
                      ((b = v),
                      (y =
                        w.slidesGrid[w.slidesGrid.length - 1] -
                        w.slidesGrid[w.slidesGrid.length - 2]));
                var x = (a - w.slidesGrid[b]) / y;
                if (i > w.params.longSwipesMs) {
                  if (!w.params.longSwipes)
                    return void w.slideTo(w.activeIndex);
                  "next" === w.swipeDirection &&
                    (x >= w.params.longSwipesRatio
                      ? w.slideTo(b + w.params.slidesPerGroup)
                      : w.slideTo(b)),
                    "prev" === w.swipeDirection &&
                      (x > 1 - w.params.longSwipesRatio
                        ? w.slideTo(b + w.params.slidesPerGroup)
                        : w.slideTo(b));
                } else {
                  if (!w.params.shortSwipes)
                    return void w.slideTo(w.activeIndex);
                  "next" === w.swipeDirection &&
                    w.slideTo(b + w.params.slidesPerGroup),
                    "prev" === w.swipeDirection && w.slideTo(b);
                }
              }
            }),
            (w._slideTo = function (e, t) {
              return w.slideTo(e, t, !0, !0);
            }),
            (w.slideTo = function (e, t, n, i) {
              void 0 === n && (n = !0),
                void 0 === e && (e = 0),
                e < 0 && (e = 0),
                (w.snapIndex = Math.floor(e / w.params.slidesPerGroup)),
                w.snapIndex >= w.snapGrid.length &&
                  (w.snapIndex = w.snapGrid.length - 1);
              var a = -w.snapGrid[w.snapIndex];
              w.params.autoplay &&
                w.autoplaying &&
                (i || !w.params.autoplayDisableOnInteraction
                  ? w.pauseAutoplay(t)
                  : w.stopAutoplay()),
                w.updateProgress(a);
              for (var r = 0; r < w.slidesGrid.length; r++)
                -Math.floor(100 * a) >= Math.floor(100 * w.slidesGrid[r]) &&
                  (e = r);
              return (
                !(
                  !w.params.allowSwipeToNext &&
                  a < w.translate &&
                  a < w.minTranslate()
                ) &&
                !(
                  !w.params.allowSwipeToPrev &&
                  a > w.translate &&
                  a > w.maxTranslate() &&
                  (w.activeIndex || 0) !== e
                ) &&
                (void 0 === t && (t = w.params.speed),
                (w.previousIndex = w.activeIndex || 0),
                (w.activeIndex = e),
                (w.rtl && -a === w.translate) || (!w.rtl && a === w.translate)
                  ? (w.params.autoHeight && w.updateAutoHeight(),
                    w.updateClasses(),
                    "slide" !== w.params.effect && w.setWrapperTranslate(a),
                    !1)
                  : (w.updateClasses(),
                    w.onTransitionStart(n),
                    0 === t
                      ? (w.setWrapperTranslate(a),
                        w.setWrapperTransition(0),
                        w.onTransitionEnd(n))
                      : (w.setWrapperTranslate(a),
                        w.setWrapperTransition(t),
                        w.animating ||
                          ((w.animating = !0),
                          w.wrapper.transitionEnd(function () {
                            w && w.onTransitionEnd(n);
                          }))),
                    !0))
              );
            }),
            (w.onTransitionStart = function (e) {
              void 0 === e && (e = !0),
                w.params.autoHeight && w.updateAutoHeight(),
                w.lazy && w.lazy.onTransitionStart(),
                e &&
                  (w.emit("onTransitionStart", w),
                  w.activeIndex !== w.previousIndex &&
                    (w.emit("onSlideChangeStart", w),
                    w.activeIndex > w.previousIndex
                      ? w.emit("onSlideNextStart", w)
                      : w.emit("onSlidePrevStart", w)));
            }),
            (w.onTransitionEnd = function (e) {
              (w.animating = !1),
                w.setWrapperTransition(0),
                void 0 === e && (e = !0),
                w.lazy && w.lazy.onTransitionEnd(),
                e &&
                  (w.emit("onTransitionEnd", w),
                  w.activeIndex !== w.previousIndex &&
                    (w.emit("onSlideChangeEnd", w),
                    w.activeIndex > w.previousIndex
                      ? w.emit("onSlideNextEnd", w)
                      : w.emit("onSlidePrevEnd", w))),
                w.params.hashnav && w.hashnav && w.hashnav.setHash();
            }),
            (w.slideNext = function (e, t, n) {
              if (w.params.loop) {
                if (w.animating) return !1;
                w.fixLoop();
                w.container[0].clientLeft;
                return w.slideTo(
                  w.activeIndex + w.params.slidesPerGroup,
                  t,
                  e,
                  n
                );
              }
              return w.slideTo(
                w.activeIndex + w.params.slidesPerGroup,
                t,
                e,
                n
              );
            }),
            (w._slideNext = function (e) {
              return w.slideNext(!0, e, !0);
            }),
            (w.slidePrev = function (e, t, n) {
              if (w.params.loop) {
                if (w.animating) return !1;
                w.fixLoop();
                w.container[0].clientLeft;
                return w.slideTo(w.activeIndex - 1, t, e, n);
              }
              return w.slideTo(w.activeIndex - 1, t, e, n);
            }),
            (w._slidePrev = function (e) {
              return w.slidePrev(!0, e, !0);
            }),
            (w.slideReset = function (e, t, n) {
              return w.slideTo(w.activeIndex, t, e);
            }),
            (w.setWrapperTransition = function (e, t) {
              w.wrapper.transition(e),
                "slide" !== w.params.effect &&
                  w.effects[w.params.effect] &&
                  w.effects[w.params.effect].setTransition(e),
                w.params.parallax && w.parallax && w.parallax.setTransition(e),
                w.params.scrollbar &&
                  w.scrollbar &&
                  w.scrollbar.setTransition(e),
                w.params.control &&
                  w.controller &&
                  w.controller.setTransition(e, t),
                w.emit("onSetTransition", w, e);
            }),
            (w.setWrapperTranslate = function (e, t, n) {
              var i = 0,
                a = 0;
              w.isHorizontal() ? (i = w.rtl ? -e : e) : (a = e),
                w.params.roundLengths && ((i = r(i)), (a = r(a))),
                w.params.virtualTranslate ||
                  (w.support.transforms3d
                    ? w.wrapper.transform(
                        "translate3d(" + i + "px, " + a + "px, 0px)"
                      )
                    : w.wrapper.transform(
                        "translate(" + i + "px, " + a + "px)"
                      )),
                (w.translate = w.isHorizontal() ? i : a);
              var o,
                s = w.maxTranslate() - w.minTranslate();
              (o = 0 === s ? 0 : (e - w.minTranslate()) / s),
                o !== w.progress && w.updateProgress(e),
                t && w.updateActiveIndex(),
                "slide" !== w.params.effect &&
                  w.effects[w.params.effect] &&
                  w.effects[w.params.effect].setTranslate(w.translate),
                w.params.parallax &&
                  w.parallax &&
                  w.parallax.setTranslate(w.translate),
                w.params.scrollbar &&
                  w.scrollbar &&
                  w.scrollbar.setTranslate(w.translate),
                w.params.control &&
                  w.controller &&
                  w.controller.setTranslate(w.translate, n),
                w.emit("onSetTranslate", w, w.translate);
            }),
            (w.getTranslate = function (e, t) {
              var n, i, a, r;
              return (
                void 0 === t && (t = "x"),
                w.params.virtualTranslate
                  ? w.rtl
                    ? -w.translate
                    : w.translate
                  : ((a = window.getComputedStyle(e, null)),
                    window.WebKitCSSMatrix
                      ? ((i = a.transform || a.webkitTransform),
                        i.split(",").length > 6 &&
                          (i = i
                            .split(", ")
                            .map(function (e) {
                              return e.replace(",", ".");
                            })
                            .join(", ")),
                        (r = new window.WebKitCSSMatrix("none" === i ? "" : i)))
                      : ((r =
                          a.MozTransform ||
                          a.OTransform ||
                          a.MsTransform ||
                          a.msTransform ||
                          a.transform ||
                          a
                            .getPropertyValue("transform")
                            .replace("translate(", "matrix(1, 0, 0, 1,")),
                        (n = r.toString().split(","))),
                    "x" === t &&
                      (i = window.WebKitCSSMatrix
                        ? r.m41
                        : 16 === n.length
                        ? parseFloat(n[12])
                        : parseFloat(n[4])),
                    "y" === t &&
                      (i = window.WebKitCSSMatrix
                        ? r.m42
                        : 16 === n.length
                        ? parseFloat(n[13])
                        : parseFloat(n[5])),
                    w.rtl && i && (i = -i),
                    i || 0)
              );
            }),
            (w.getWrapperTranslate = function (e) {
              return (
                void 0 === e && (e = w.isHorizontal() ? "x" : "y"),
                w.getTranslate(w.wrapper[0], e)
              );
            }),
            (w.observers = []),
            (w.initObservers = function () {
              if (w.params.observeParents)
                for (var e = w.container.parents(), t = 0; t < e.length; t++)
                  l(e[t]);
              l(w.container[0], { childList: !1 }),
                l(w.wrapper[0], { attributes: !1 });
            }),
            (w.disconnectObservers = function () {
              for (var e = 0; e < w.observers.length; e++)
                w.observers[e].disconnect();
              w.observers = [];
            }),
            (w.createLoop = function () {
              w.wrapper
                .children(
                  "." + w.params.slideClass + "." + w.params.slideDuplicateClass
                )
                .remove();
              var t = w.wrapper.children("." + w.params.slideClass);
              "auto" !== w.params.slidesPerView ||
                w.params.loopedSlides ||
                (w.params.loopedSlides = t.length),
                (w.loopedSlides = parseInt(
                  w.params.loopedSlides || w.params.slidesPerView,
                  10
                )),
                (w.loopedSlides =
                  w.loopedSlides + w.params.loopAdditionalSlides),
                w.loopedSlides > t.length && (w.loopedSlides = t.length);
              var n,
                i = [],
                a = [];
              for (
                t.each(function (n, r) {
                  var o = e(this);
                  n < w.loopedSlides && a.push(r),
                    n < t.length && n >= t.length - w.loopedSlides && i.push(r),
                    o.attr("data-swiper-slide-index", n);
                }),
                  n = 0;
                n < a.length;
                n++
              )
                w.wrapper.append(
                  e(a[n].cloneNode(!0)).addClass(w.params.slideDuplicateClass)
                );
              for (n = i.length - 1; n >= 0; n--)
                w.wrapper.prepend(
                  e(i[n].cloneNode(!0)).addClass(w.params.slideDuplicateClass)
                );
            }),
            (w.destroyLoop = function () {
              w.wrapper
                .children(
                  "." + w.params.slideClass + "." + w.params.slideDuplicateClass
                )
                .remove(),
                w.slides.removeAttr("data-swiper-slide-index");
            }),
            (w.reLoop = function (e) {
              var t = w.activeIndex - w.loopedSlides;
              w.destroyLoop(),
                w.createLoop(),
                w.updateSlidesSize(),
                e && w.slideTo(t + w.loopedSlides, 0, !1);
            }),
            (w.fixLoop = function () {
              var e;
              w.activeIndex < w.loopedSlides
                ? ((e = w.slides.length - 3 * w.loopedSlides + w.activeIndex),
                  (e += w.loopedSlides),
                  w.slideTo(e, 0, !1, !0))
                : (("auto" === w.params.slidesPerView &&
                    w.activeIndex >= 2 * w.loopedSlides) ||
                    w.activeIndex >
                      w.slides.length - 2 * w.params.slidesPerView) &&
                  ((e = -w.slides.length + w.activeIndex + w.loopedSlides),
                  (e += w.loopedSlides),
                  w.slideTo(e, 0, !1, !0));
            }),
            (w.appendSlide = function (e) {
              if (
                (w.params.loop && w.destroyLoop(),
                "object" == typeof e && e.length)
              )
                for (var t = 0; t < e.length; t++)
                  e[t] && w.wrapper.append(e[t]);
              else w.wrapper.append(e);
              w.params.loop && w.createLoop(),
                (w.params.observer && w.support.observer) || w.update(!0);
            }),
            (w.prependSlide = function (e) {
              w.params.loop && w.destroyLoop();
              var t = w.activeIndex + 1;
              if ("object" == typeof e && e.length) {
                for (var n = 0; n < e.length; n++)
                  e[n] && w.wrapper.prepend(e[n]);
                t = w.activeIndex + e.length;
              } else w.wrapper.prepend(e);
              w.params.loop && w.createLoop(),
                (w.params.observer && w.support.observer) || w.update(!0),
                w.slideTo(t, 0, !1);
            }),
            (w.removeSlide = function (e) {
              w.params.loop &&
                (w.destroyLoop(),
                (w.slides = w.wrapper.children("." + w.params.slideClass)));
              var t,
                n = w.activeIndex;
              if ("object" == typeof e && e.length) {
                for (var i = 0; i < e.length; i++)
                  (t = e[i]),
                    w.slides[t] && w.slides.eq(t).remove(),
                    t < n && n--;
                n = Math.max(n, 0);
              } else
                (t = e),
                  w.slides[t] && w.slides.eq(t).remove(),
                  t < n && n--,
                  (n = Math.max(n, 0));
              w.params.loop && w.createLoop(),
                (w.params.observer && w.support.observer) || w.update(!0),
                w.params.loop
                  ? w.slideTo(n + w.loopedSlides, 0, !1)
                  : w.slideTo(n, 0, !1);
            }),
            (w.removeAllSlides = function () {
              for (var e = [], t = 0; t < w.slides.length; t++) e.push(t);
              w.removeSlide(e);
            }),
            (w.effects = {
              fade: {
                setTranslate: function () {
                  for (var e = 0; e < w.slides.length; e++) {
                    var t = w.slides.eq(e),
                      n = t[0].swiperSlideOffset,
                      i = -n;
                    w.params.virtualTranslate || (i -= w.translate);
                    var a = 0;
                    w.isHorizontal() || ((a = i), (i = 0));
                    var r = w.params.fade.crossFade
                      ? Math.max(1 - Math.abs(t[0].progress), 0)
                      : 1 + Math.min(Math.max(t[0].progress, -1), 0);
                    t.css({ opacity: r }).transform(
                      "translate3d(" + i + "px, " + a + "px, 0px)"
                    );
                  }
                },
                setTransition: function (e) {
                  if (
                    (w.slides.transition(e),
                    w.params.virtualTranslate && 0 !== e)
                  ) {
                    var t = !1;
                    w.slides.transitionEnd(function () {
                      if (!t && w) {
                        (t = !0), (w.animating = !1);
                        for (
                          var e = [
                              "webkitTransitionEnd",
                              "transitionend",
                              "oTransitionEnd",
                              "MSTransitionEnd",
                              "msTransitionEnd",
                            ],
                            n = 0;
                          n < e.length;
                          n++
                        )
                          w.wrapper.trigger(e[n]);
                      }
                    });
                  }
                },
              },
              flip: {
                setTranslate: function () {
                  for (var t = 0; t < w.slides.length; t++) {
                    var n = w.slides.eq(t),
                      i = n[0].progress;
                    w.params.flip.limitRotation &&
                      (i = Math.max(Math.min(n[0].progress, 1), -1));
                    var a = n[0].swiperSlideOffset,
                      r = -180 * i,
                      o = r,
                      s = 0,
                      l = -a,
                      p = 0;
                    if (
                      (w.isHorizontal()
                        ? w.rtl && (o = -o)
                        : ((p = l), (l = 0), (s = -o), (o = 0)),
                      (n[0].style.zIndex =
                        -Math.abs(Math.round(i)) + w.slides.length),
                      w.params.flip.slideShadows)
                    ) {
                      var c = w.isHorizontal()
                          ? n.find(".swiper-slide-shadow-left")
                          : n.find(".swiper-slide-shadow-top"),
                        d = w.isHorizontal()
                          ? n.find(".swiper-slide-shadow-right")
                          : n.find(".swiper-slide-shadow-bottom");
                      0 === c.length &&
                        ((c = e(
                          '<div class="swiper-slide-shadow-' +
                            (w.isHorizontal() ? "left" : "top") +
                            '"></div>'
                        )),
                        n.append(c)),
                        0 === d.length &&
                          ((d = e(
                            '<div class="swiper-slide-shadow-' +
                              (w.isHorizontal() ? "right" : "bottom") +
                              '"></div>'
                          )),
                          n.append(d)),
                        c.length && (c[0].style.opacity = Math.max(-i, 0)),
                        d.length && (d[0].style.opacity = Math.max(i, 0));
                    }
                    n.transform(
                      "translate3d(" +
                        l +
                        "px, " +
                        p +
                        "px, 0px) rotateX(" +
                        s +
                        "deg) rotateY(" +
                        o +
                        "deg)"
                    );
                  }
                },
                setTransition: function (t) {
                  if (
                    (w.slides
                      .transition(t)
                      .find(
                        ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                      )
                      .transition(t),
                    w.params.virtualTranslate && 0 !== t)
                  ) {
                    var n = !1;
                    w.slides.eq(w.activeIndex).transitionEnd(function () {
                      if (
                        !n &&
                        w &&
                        e(this).hasClass(w.params.slideActiveClass)
                      ) {
                        (n = !0), (w.animating = !1);
                        for (
                          var t = [
                              "webkitTransitionEnd",
                              "transitionend",
                              "oTransitionEnd",
                              "MSTransitionEnd",
                              "msTransitionEnd",
                            ],
                            i = 0;
                          i < t.length;
                          i++
                        )
                          w.wrapper.trigger(t[i]);
                      }
                    });
                  }
                },
              },
              cube: {
                setTranslate: function () {
                  var t,
                    n = 0;
                  w.params.cube.shadow &&
                    (w.isHorizontal()
                      ? ((t = w.wrapper.find(".swiper-cube-shadow")),
                        0 === t.length &&
                          ((t = e('<div class="swiper-cube-shadow"></div>')),
                          w.wrapper.append(t)),
                        t.css({ height: w.width + "px" }))
                      : ((t = w.container.find(".swiper-cube-shadow")),
                        0 === t.length &&
                          ((t = e('<div class="swiper-cube-shadow"></div>')),
                          w.container.append(t))));
                  for (var i = 0; i < w.slides.length; i++) {
                    var a = w.slides.eq(i),
                      r = 90 * i,
                      o = Math.floor(r / 360);
                    w.rtl && ((r = -r), (o = Math.floor(-r / 360)));
                    var s = Math.max(Math.min(a[0].progress, 1), -1),
                      l = 0,
                      p = 0,
                      c = 0;
                    i % 4 == 0
                      ? ((l = 4 * -o * w.size), (c = 0))
                      : (i - 1) % 4 == 0
                      ? ((l = 0), (c = 4 * -o * w.size))
                      : (i - 2) % 4 == 0
                      ? ((l = w.size + 4 * o * w.size), (c = w.size))
                      : (i - 3) % 4 == 0 &&
                        ((l = -w.size), (c = 3 * w.size + 4 * w.size * o)),
                      w.rtl && (l = -l),
                      w.isHorizontal() || ((p = l), (l = 0));
                    var d =
                      "rotateX(" +
                      (w.isHorizontal() ? 0 : -r) +
                      "deg) rotateY(" +
                      (w.isHorizontal() ? r : 0) +
                      "deg) translate3d(" +
                      l +
                      "px, " +
                      p +
                      "px, " +
                      c +
                      "px)";
                    if (
                      (s <= 1 &&
                        s > -1 &&
                        ((n = 90 * i + 90 * s),
                        w.rtl && (n = 90 * -i - 90 * s)),
                      a.transform(d),
                      w.params.cube.slideShadows)
                    ) {
                      var u = w.isHorizontal()
                          ? a.find(".swiper-slide-shadow-left")
                          : a.find(".swiper-slide-shadow-top"),
                        f = w.isHorizontal()
                          ? a.find(".swiper-slide-shadow-right")
                          : a.find(".swiper-slide-shadow-bottom");
                      0 === u.length &&
                        ((u = e(
                          '<div class="swiper-slide-shadow-' +
                            (w.isHorizontal() ? "left" : "top") +
                            '"></div>'
                        )),
                        a.append(u)),
                        0 === f.length &&
                          ((f = e(
                            '<div class="swiper-slide-shadow-' +
                              (w.isHorizontal() ? "right" : "bottom") +
                              '"></div>'
                          )),
                          a.append(f)),
                        u.length && (u[0].style.opacity = Math.max(-s, 0)),
                        f.length && (f[0].style.opacity = Math.max(s, 0));
                    }
                  }
                  if (
                    (w.wrapper.css({
                      "-webkit-transform-origin":
                        "50% 50% -" + w.size / 2 + "px",
                      "-moz-transform-origin": "50% 50% -" + w.size / 2 + "px",
                      "-ms-transform-origin": "50% 50% -" + w.size / 2 + "px",
                      "transform-origin": "50% 50% -" + w.size / 2 + "px",
                    }),
                    w.params.cube.shadow)
                  )
                    if (w.isHorizontal())
                      t.transform(
                        "translate3d(0px, " +
                          (w.width / 2 + w.params.cube.shadowOffset) +
                          "px, " +
                          -w.width / 2 +
                          "px) rotateX(90deg) rotateZ(0deg) scale(" +
                          w.params.cube.shadowScale +
                          ")"
                      );
                    else {
                      var h = Math.abs(n) - 90 * Math.floor(Math.abs(n) / 90),
                        m =
                          1.5 -
                          (Math.sin((2 * h * Math.PI) / 360) / 2 +
                            Math.cos((2 * h * Math.PI) / 360) / 2),
                        g = w.params.cube.shadowScale,
                        v = w.params.cube.shadowScale / m,
                        b = w.params.cube.shadowOffset;
                      t.transform(
                        "scale3d(" +
                          g +
                          ", 1, " +
                          v +
                          ") translate3d(0px, " +
                          (w.height / 2 + b) +
                          "px, " +
                          -w.height / 2 / v +
                          "px) rotateX(-90deg)"
                      );
                    }
                  var y = w.isSafari || w.isUiWebView ? -w.size / 2 : 0;
                  w.wrapper.transform(
                    "translate3d(0px,0," +
                      y +
                      "px) rotateX(" +
                      (w.isHorizontal() ? 0 : n) +
                      "deg) rotateY(" +
                      (w.isHorizontal() ? -n : 0) +
                      "deg)"
                  );
                },
                setTransition: function (e) {
                  w.slides
                    .transition(e)
                    .find(
                      ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                    )
                    .transition(e),
                    w.params.cube.shadow &&
                      !w.isHorizontal() &&
                      w.container.find(".swiper-cube-shadow").transition(e);
                },
              },
              coverflow: {
                setTranslate: function () {
                  for (
                    var t = w.translate,
                      n = w.isHorizontal()
                        ? -t + w.width / 2
                        : -t + w.height / 2,
                      i = w.isHorizontal()
                        ? w.params.coverflow.rotate
                        : -w.params.coverflow.rotate,
                      a = w.params.coverflow.depth,
                      r = 0,
                      o = w.slides.length;
                    r < o;
                    r++
                  ) {
                    var s = w.slides.eq(r),
                      l = w.slidesSizesGrid[r],
                      p = s[0].swiperSlideOffset,
                      c = ((n - p - l / 2) / l) * w.params.coverflow.modifier,
                      d = w.isHorizontal() ? i * c : 0,
                      u = w.isHorizontal() ? 0 : i * c,
                      f = -a * Math.abs(c),
                      h = w.isHorizontal() ? 0 : w.params.coverflow.stretch * c,
                      m = w.isHorizontal() ? w.params.coverflow.stretch * c : 0;
                    Math.abs(m) < 0.001 && (m = 0),
                      Math.abs(h) < 0.001 && (h = 0),
                      Math.abs(f) < 0.001 && (f = 0),
                      Math.abs(d) < 0.001 && (d = 0),
                      Math.abs(u) < 0.001 && (u = 0);
                    var g =
                      "translate3d(" +
                      m +
                      "px," +
                      h +
                      "px," +
                      f +
                      "px)  rotateX(" +
                      u +
                      "deg) rotateY(" +
                      d +
                      "deg)";
                    if (
                      (s.transform(g),
                      (s[0].style.zIndex = 1 - Math.abs(Math.round(c))),
                      w.params.coverflow.slideShadows)
                    ) {
                      var v = w.isHorizontal()
                          ? s.find(".swiper-slide-shadow-left")
                          : s.find(".swiper-slide-shadow-top"),
                        b = w.isHorizontal()
                          ? s.find(".swiper-slide-shadow-right")
                          : s.find(".swiper-slide-shadow-bottom");
                      0 === v.length &&
                        ((v = e(
                          '<div class="swiper-slide-shadow-' +
                            (w.isHorizontal() ? "left" : "top") +
                            '"></div>'
                        )),
                        s.append(v)),
                        0 === b.length &&
                          ((b = e(
                            '<div class="swiper-slide-shadow-' +
                              (w.isHorizontal() ? "right" : "bottom") +
                              '"></div>'
                          )),
                          s.append(b)),
                        v.length && (v[0].style.opacity = c > 0 ? c : 0),
                        b.length && (b[0].style.opacity = -c > 0 ? -c : 0);
                    }
                  }
                  if (w.browser.ie) {
                    w.wrapper[0].style.perspectiveOrigin = n + "px 50%";
                  }
                },
                setTransition: function (e) {
                  w.slides
                    .transition(e)
                    .find(
                      ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                    )
                    .transition(e);
                },
              },
            }),
            (w.lazy = {
              initialImageLoaded: !1,
              loadImageInSlide: function (t, n) {
                if (
                  void 0 !== t &&
                  (void 0 === n && (n = !0), 0 !== w.slides.length)
                ) {
                  var i = w.slides.eq(t),
                    a = i.find(
                      ".swiper-lazy:not(.swiper-lazy-loaded):not(.swiper-lazy-loading)"
                    );
                  !i.hasClass("swiper-lazy") ||
                    i.hasClass("swiper-lazy-loaded") ||
                    i.hasClass("swiper-lazy-loading") ||
                    (a = a.add(i[0])),
                    0 !== a.length &&
                      a.each(function () {
                        var t = e(this);
                        t.addClass("swiper-lazy-loading");
                        var a = t.attr("data-background"),
                          r = t.attr("data-src"),
                          o = t.attr("data-srcset");
                        w.loadImage(t[0], r || a, o, !1, function () {
                          if (
                            (a
                              ? (t.css("background-image", 'url("' + a + '")'),
                                t.removeAttr("data-background"))
                              : (o &&
                                  (t.attr("srcset", o),
                                  t.removeAttr("data-srcset")),
                                r &&
                                  (t.attr("src", r), t.removeAttr("data-src"))),
                            t
                              .addClass("swiper-lazy-loaded")
                              .removeClass("swiper-lazy-loading"),
                            i
                              .find(".swiper-lazy-preloader, .preloader")
                              .remove(),
                            w.params.loop && n)
                          ) {
                            var e = i.attr("data-swiper-slide-index");
                            if (i.hasClass(w.params.slideDuplicateClass)) {
                              var s = w.wrapper.children(
                                '[data-swiper-slide-index="' +
                                  e +
                                  '"]:not(.' +
                                  w.params.slideDuplicateClass +
                                  ")"
                              );
                              w.lazy.loadImageInSlide(s.index(), !1);
                            } else {
                              var l = w.wrapper.children(
                                "." +
                                  w.params.slideDuplicateClass +
                                  '[data-swiper-slide-index="' +
                                  e +
                                  '"]'
                              );
                              w.lazy.loadImageInSlide(l.index(), !1);
                            }
                          }
                          w.emit("onLazyImageReady", w, i[0], t[0]);
                        }),
                          w.emit("onLazyImageLoad", w, i[0], t[0]);
                      });
                }
              },
              load: function () {
                var t;
                if (w.params.watchSlidesVisibility)
                  w.wrapper
                    .children("." + w.params.slideVisibleClass)
                    .each(function () {
                      w.lazy.loadImageInSlide(e(this).index());
                    });
                else if (w.params.slidesPerView > 1)
                  for (
                    t = w.activeIndex;
                    t < w.activeIndex + w.params.slidesPerView;
                    t++
                  )
                    w.slides[t] && w.lazy.loadImageInSlide(t);
                else w.lazy.loadImageInSlide(w.activeIndex);
                if (w.params.lazyLoadingInPrevNext)
                  if (
                    w.params.slidesPerView > 1 ||
                    (w.params.lazyLoadingInPrevNextAmount &&
                      w.params.lazyLoadingInPrevNextAmount > 1)
                  ) {
                    var n = w.params.lazyLoadingInPrevNextAmount,
                      i = w.params.slidesPerView,
                      a = Math.min(
                        w.activeIndex + i + Math.max(n, i),
                        w.slides.length
                      ),
                      r = Math.max(w.activeIndex - Math.max(i, n), 0);
                    for (t = w.activeIndex + w.params.slidesPerView; t < a; t++)
                      w.slides[t] && w.lazy.loadImageInSlide(t);
                    for (t = r; t < w.activeIndex; t++)
                      w.slides[t] && w.lazy.loadImageInSlide(t);
                  } else {
                    var o = w.wrapper.children("." + w.params.slideNextClass);
                    o.length > 0 && w.lazy.loadImageInSlide(o.index());
                    var s = w.wrapper.children("." + w.params.slidePrevClass);
                    s.length > 0 && w.lazy.loadImageInSlide(s.index());
                  }
              },
              onTransitionStart: function () {
                w.params.lazyLoading &&
                  (w.params.lazyLoadingOnTransitionStart ||
                    (!w.params.lazyLoadingOnTransitionStart &&
                      !w.lazy.initialImageLoaded)) &&
                  w.lazy.load();
              },
              onTransitionEnd: function () {
                w.params.lazyLoading &&
                  !w.params.lazyLoadingOnTransitionStart &&
                  w.lazy.load();
              },
            }),
            (w.scrollbar = {
              isTouched: !1,
              setDragPosition: function (e) {
                var t = w.scrollbar,
                  n = w.isHorizontal()
                    ? "touchstart" === e.type || "touchmove" === e.type
                      ? e.targetTouches[0].pageX
                      : e.pageX || e.clientX
                    : "touchstart" === e.type || "touchmove" === e.type
                    ? e.targetTouches[0].pageY
                    : e.pageY || e.clientY,
                  i =
                    n -
                    t.track.offset()[w.isHorizontal() ? "left" : "top"] -
                    t.dragSize / 2,
                  a = -w.minTranslate() * t.moveDivider,
                  r = -w.maxTranslate() * t.moveDivider;
                i < a ? (i = a) : i > r && (i = r),
                  (i = -i / t.moveDivider),
                  w.updateProgress(i),
                  w.setWrapperTranslate(i, !0);
              },
              dragStart: function (e) {
                var t = w.scrollbar;
                (t.isTouched = !0),
                  e.preventDefault(),
                  e.stopPropagation(),
                  t.setDragPosition(e),
                  clearTimeout(t.dragTimeout),
                  t.track.transition(0),
                  w.params.scrollbarHide && t.track.css("opacity", 1),
                  w.wrapper.transition(100),
                  t.drag.transition(100),
                  w.emit("onScrollbarDragStart", w);
              },
              dragMove: function (e) {
                var t = w.scrollbar;
                t.isTouched &&
                  (e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
                  t.setDragPosition(e),
                  w.wrapper.transition(0),
                  t.track.transition(0),
                  t.drag.transition(0),
                  w.emit("onScrollbarDragMove", w));
              },
              dragEnd: function (e) {
                var t = w.scrollbar;
                t.isTouched &&
                  ((t.isTouched = !1),
                  w.params.scrollbarHide &&
                    (clearTimeout(t.dragTimeout),
                    (t.dragTimeout = setTimeout(function () {
                      t.track.css("opacity", 0), t.track.transition(400);
                    }, 1e3))),
                  w.emit("onScrollbarDragEnd", w),
                  w.params.scrollbarSnapOnRelease && w.slideReset());
              },
              enableDraggable: function () {
                var t = w.scrollbar,
                  n = w.support.touch ? t.track : document;
                e(t.track).on(w.touchEvents.start, t.dragStart),
                  e(n).on(w.touchEvents.move, t.dragMove),
                  e(n).on(w.touchEvents.end, t.dragEnd);
              },
              disableDraggable: function () {
                var t = w.scrollbar,
                  n = w.support.touch ? t.track : document;
                e(t.track).off(w.touchEvents.start, t.dragStart),
                  e(n).off(w.touchEvents.move, t.dragMove),
                  e(n).off(w.touchEvents.end, t.dragEnd);
              },
              set: function () {
                if (w.params.scrollbar) {
                  var t = w.scrollbar;
                  (t.track = e(w.params.scrollbar)),
                    w.params.uniqueNavElements &&
                      "string" == typeof w.params.scrollbar &&
                      t.track.length > 1 &&
                      1 === w.container.find(w.params.scrollbar).length &&
                      (t.track = w.container.find(w.params.scrollbar)),
                    (t.drag = t.track.find(".swiper-scrollbar-drag")),
                    0 === t.drag.length &&
                      ((t.drag = e(
                        '<div class="swiper-scrollbar-drag"></div>'
                      )),
                      t.track.append(t.drag)),
                    (t.drag[0].style.width = ""),
                    (t.drag[0].style.height = ""),
                    (t.trackSize = w.isHorizontal()
                      ? t.track[0].offsetWidth
                      : t.track[0].offsetHeight),
                    (t.divider = w.size / w.virtualSize),
                    (t.moveDivider = t.divider * (t.trackSize / w.size)),
                    (t.dragSize = t.trackSize * t.divider),
                    w.isHorizontal()
                      ? (t.drag[0].style.width = t.dragSize + "px")
                      : (t.drag[0].style.height = t.dragSize + "px"),
                    t.divider >= 1
                      ? (t.track[0].style.display = "none")
                      : (t.track[0].style.display = ""),
                    w.params.scrollbarHide && (t.track[0].style.opacity = 0);
                }
              },
              setTranslate: function () {
                if (w.params.scrollbar) {
                  var e,
                    t = w.scrollbar,
                    n = (w.translate, t.dragSize);
                  (e = (t.trackSize - t.dragSize) * w.progress),
                    w.rtl && w.isHorizontal()
                      ? ((e = -e),
                        e > 0
                          ? ((n = t.dragSize - e), (e = 0))
                          : -e + t.dragSize > t.trackSize &&
                            (n = t.trackSize + e))
                      : e < 0
                      ? ((n = t.dragSize + e), (e = 0))
                      : e + t.dragSize > t.trackSize && (n = t.trackSize - e),
                    w.isHorizontal()
                      ? (w.support.transforms3d
                          ? t.drag.transform("translate3d(" + e + "px, 0, 0)")
                          : t.drag.transform("translateX(" + e + "px)"),
                        (t.drag[0].style.width = n + "px"))
                      : (w.support.transforms3d
                          ? t.drag.transform("translate3d(0px, " + e + "px, 0)")
                          : t.drag.transform("translateY(" + e + "px)"),
                        (t.drag[0].style.height = n + "px")),
                    w.params.scrollbarHide &&
                      (clearTimeout(t.timeout),
                      (t.track[0].style.opacity = 1),
                      (t.timeout = setTimeout(function () {
                        (t.track[0].style.opacity = 0), t.track.transition(400);
                      }, 1e3)));
                }
              },
              setTransition: function (e) {
                w.params.scrollbar && w.scrollbar.drag.transition(e);
              },
            }),
            (w.controller = {
              LinearSpline: function (e, t) {
                (this.x = e), (this.y = t), (this.lastIndex = e.length - 1);
                var n, i;
                this.x.length;
                this.interpolate = function (e) {
                  return e
                    ? ((i = a(this.x, e)),
                      (n = i - 1),
                      ((e - this.x[n]) * (this.y[i] - this.y[n])) /
                        (this.x[i] - this.x[n]) +
                        this.y[n])
                    : 0;
                };
                var a = (function () {
                  var e, t, n;
                  return function (i, a) {
                    for (t = -1, e = i.length; e - t > 1; )
                      i[(n = (e + t) >> 1)] <= a ? (t = n) : (e = n);
                    return e;
                  };
                })();
              },
              getInterpolateFunction: function (e) {
                w.controller.spline ||
                  (w.controller.spline = w.params.loop
                    ? new w.controller.LinearSpline(w.slidesGrid, e.slidesGrid)
                    : new w.controller.LinearSpline(w.snapGrid, e.snapGrid));
              },
              setTranslate: function (e, n) {
                function i(t) {
                  (e =
                    t.rtl && "horizontal" === t.params.direction
                      ? -w.translate
                      : w.translate),
                    "slide" === w.params.controlBy &&
                      (w.controller.getInterpolateFunction(t),
                      (r = -w.controller.spline.interpolate(-e))),
                    (r && "container" !== w.params.controlBy) ||
                      ((a =
                        (t.maxTranslate() - t.minTranslate()) /
                        (w.maxTranslate() - w.minTranslate())),
                      (r = (e - w.minTranslate()) * a + t.minTranslate())),
                    w.params.controlInverse && (r = t.maxTranslate() - r),
                    t.updateProgress(r),
                    t.setWrapperTranslate(r, !1, w),
                    t.updateActiveIndex();
                }
                var a,
                  r,
                  o = w.params.control;
                if (w.isArray(o))
                  for (var s = 0; s < o.length; s++)
                    o[s] !== n && o[s] instanceof t && i(o[s]);
                else o instanceof t && n !== o && i(o);
              },
              setTransition: function (e, n) {
                function i(t) {
                  t.setWrapperTransition(e, w),
                    0 !== e &&
                      (t.onTransitionStart(),
                      t.wrapper.transitionEnd(function () {
                        r &&
                          (t.params.loop &&
                            "slide" === w.params.controlBy &&
                            t.fixLoop(),
                          t.onTransitionEnd());
                      }));
                }
                var a,
                  r = w.params.control;
                if (w.isArray(r))
                  for (a = 0; a < r.length; a++)
                    r[a] !== n && r[a] instanceof t && i(r[a]);
                else r instanceof t && n !== r && i(r);
              },
            }),
            (w.hashnav = {
              init: function () {
                if (w.params.hashnav) {
                  w.hashnav.initialized = !0;
                  var e = document.location.hash.replace("#", "");
                  if (e)
                    for (var t = 0, n = w.slides.length; t < n; t++) {
                      var i = w.slides.eq(t),
                        a = i.attr("data-hash");
                      if (
                        a === e &&
                        !i.hasClass(w.params.slideDuplicateClass)
                      ) {
                        var r = i.index();
                        w.slideTo(r, 0, w.params.runCallbacksOnInit, !0);
                      }
                    }
                }
              },
              setHash: function () {
                w.hashnav.initialized &&
                  w.params.hashnav &&
                  (document.location.hash =
                    w.slides.eq(w.activeIndex).attr("data-hash") || "");
              },
            }),
            (w.disableKeyboardControl = function () {
              (w.params.keyboardControl = !1), e(document).off("keydown", p);
            }),
            (w.enableKeyboardControl = function () {
              (w.params.keyboardControl = !0), e(document).on("keydown", p);
            }),
            (w.mousewheel = {
              event: !1,
              lastScrollTime: new window.Date().getTime(),
            }),
            w.params.mousewheelControl)
          ) {
            try {
              new window.WheelEvent("wheel"), (w.mousewheel.event = "wheel");
            } catch (e) {
              (window.WheelEvent ||
                (w.container[0] && "wheel" in w.container[0])) &&
                (w.mousewheel.event = "wheel");
            }
            !w.mousewheel.event && window.WheelEvent,
              w.mousewheel.event ||
                void 0 === document.onmousewheel ||
                (w.mousewheel.event = "mousewheel"),
              w.mousewheel.event || (w.mousewheel.event = "DOMMouseScroll");
          }
          (w.disableMousewheelControl = function () {
            return (
              !!w.mousewheel.event &&
              (w.container.off(w.mousewheel.event, c), !0)
            );
          }),
            (w.enableMousewheelControl = function () {
              return (
                !!w.mousewheel.event &&
                (w.container.on(w.mousewheel.event, c), !0)
              );
            }),
            (w.parallax = {
              setTranslate: function () {
                w.container
                  .children(
                    "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]"
                  )
                  .each(function () {
                    d(this, w.progress);
                  }),
                  w.slides.each(function () {
                    var t = e(this);
                    t.find(
                      "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]"
                    ).each(function () {
                      d(this, Math.min(Math.max(t[0].progress, -1), 1));
                    });
                  });
              },
              setTransition: function (t) {
                void 0 === t && (t = w.params.speed),
                  w.container
                    .find(
                      "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]"
                    )
                    .each(function () {
                      var n = e(this),
                        i =
                          parseInt(
                            n.attr("data-swiper-parallax-duration"),
                            10
                          ) || t;
                      0 === t && (i = 0), n.transition(i);
                    });
              },
            }),
            (w._plugins = []);
          for (var z in w.plugins) {
            var N = w.plugins[z](w, w.params[z]);
            N && w._plugins.push(N);
          }
          return (
            (w.callPlugins = function (e) {
              for (var t = 0; t < w._plugins.length; t++)
                e in w._plugins[t] &&
                  w._plugins[t][e](
                    arguments[1],
                    arguments[2],
                    arguments[3],
                    arguments[4],
                    arguments[5]
                  );
            }),
            (w.emitterEventListeners = {}),
            (w.emit = function (e) {
              w.params[e] &&
                w.params[e](
                  arguments[1],
                  arguments[2],
                  arguments[3],
                  arguments[4],
                  arguments[5]
                );
              var t;
              if (w.emitterEventListeners[e])
                for (t = 0; t < w.emitterEventListeners[e].length; t++)
                  w.emitterEventListeners[e][t](
                    arguments[1],
                    arguments[2],
                    arguments[3],
                    arguments[4],
                    arguments[5]
                  );
              w.callPlugins &&
                w.callPlugins(
                  e,
                  arguments[1],
                  arguments[2],
                  arguments[3],
                  arguments[4],
                  arguments[5]
                );
            }),
            (w.on = function (e, t) {
              return (
                (e = u(e)),
                w.emitterEventListeners[e] || (w.emitterEventListeners[e] = []),
                w.emitterEventListeners[e].push(t),
                w
              );
            }),
            (w.off = function (e, t) {
              var n;
              if (((e = u(e)), void 0 === t))
                return (w.emitterEventListeners[e] = []), w;
              if (
                w.emitterEventListeners[e] &&
                0 !== w.emitterEventListeners[e].length
              ) {
                for (n = 0; n < w.emitterEventListeners[e].length; n++)
                  w.emitterEventListeners[e][n] === t &&
                    w.emitterEventListeners[e].splice(n, 1);
                return w;
              }
            }),
            (w.once = function (e, t) {
              e = u(e);
              var n = function () {
                t(
                  arguments[0],
                  arguments[1],
                  arguments[2],
                  arguments[3],
                  arguments[4]
                ),
                  w.off(e, n);
              };
              return w.on(e, n), w;
            }),
            (w.a11y = {
              makeFocusable: function (e) {
                return e.attr("tabIndex", "0"), e;
              },
              addRole: function (e, t) {
                return e.attr("role", t), e;
              },
              addLabel: function (e, t) {
                return e.attr("aria-label", t), e;
              },
              disable: function (e) {
                return e.attr("aria-disabled", !0), e;
              },
              enable: function (e) {
                return e.attr("aria-disabled", !1), e;
              },
              onEnterKey: function (t) {
                13 === t.keyCode &&
                  (e(t.target).is(w.params.nextButton)
                    ? (w.onClickNext(t),
                      w.isEnd
                        ? w.a11y.notify(w.params.lastSlideMessage)
                        : w.a11y.notify(w.params.nextSlideMessage))
                    : e(t.target).is(w.params.prevButton) &&
                      (w.onClickPrev(t),
                      w.isBeginning
                        ? w.a11y.notify(w.params.firstSlideMessage)
                        : w.a11y.notify(w.params.prevSlideMessage)),
                  e(t.target).is("." + w.params.bulletClass) &&
                    e(t.target)[0].click());
              },
              liveRegion: e(
                '<span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>'
              ),
              notify: function (e) {
                var t = w.a11y.liveRegion;
                0 !== t.length && (t.html(""), t.html(e));
              },
              init: function () {
                w.params.nextButton &&
                  w.nextButton &&
                  w.nextButton.length > 0 &&
                  (w.a11y.makeFocusable(w.nextButton),
                  w.a11y.addRole(w.nextButton, "button"),
                  w.a11y.addLabel(w.nextButton, w.params.nextSlideMessage)),
                  w.params.prevButton &&
                    w.prevButton &&
                    w.prevButton.length > 0 &&
                    (w.a11y.makeFocusable(w.prevButton),
                    w.a11y.addRole(w.prevButton, "button"),
                    w.a11y.addLabel(w.prevButton, w.params.prevSlideMessage)),
                  e(w.container).append(w.a11y.liveRegion);
              },
              initPagination: function () {
                w.params.pagination &&
                  w.params.paginationClickable &&
                  w.bullets &&
                  w.bullets.length &&
                  w.bullets.each(function () {
                    var t = e(this);
                    w.a11y.makeFocusable(t),
                      w.a11y.addRole(t, "button"),
                      w.a11y.addLabel(
                        t,
                        w.params.paginationBulletMessage.replace(
                          /{{index}}/,
                          t.index() + 1
                        )
                      );
                  });
              },
              destroy: function () {
                w.a11y.liveRegion &&
                  w.a11y.liveRegion.length > 0 &&
                  w.a11y.liveRegion.remove();
              },
            }),
            (w.init = function () {
              w.params.loop && w.createLoop(),
                w.updateContainerSize(),
                w.updateSlidesSize(),
                w.updatePagination(),
                w.params.scrollbar &&
                  w.scrollbar &&
                  (w.scrollbar.set(),
                  w.params.scrollbarDraggable && w.scrollbar.enableDraggable()),
                "slide" !== w.params.effect &&
                  w.effects[w.params.effect] &&
                  (w.params.loop || w.updateProgress(),
                  w.effects[w.params.effect].setTranslate()),
                w.params.loop
                  ? w.slideTo(
                      w.params.initialSlide + w.loopedSlides,
                      0,
                      w.params.runCallbacksOnInit
                    )
                  : (w.slideTo(
                      w.params.initialSlide,
                      0,
                      w.params.runCallbacksOnInit
                    ),
                    0 === w.params.initialSlide &&
                      (w.parallax &&
                        w.params.parallax &&
                        w.parallax.setTranslate(),
                      w.lazy &&
                        w.params.lazyLoading &&
                        (w.lazy.load(), (w.lazy.initialImageLoaded = !0)))),
                w.attachEvents(),
                w.params.observer && w.support.observer && w.initObservers(),
                w.params.preloadImages &&
                  !w.params.lazyLoading &&
                  w.preloadImages(),
                w.params.autoplay && w.startAutoplay(),
                w.params.keyboardControl &&
                  w.enableKeyboardControl &&
                  w.enableKeyboardControl(),
                w.params.mousewheelControl &&
                  w.enableMousewheelControl &&
                  w.enableMousewheelControl(),
                w.params.hashnav && w.hashnav && w.hashnav.init(),
                w.params.a11y && w.a11y && w.a11y.init(),
                w.emit("onInit", w);
            }),
            (w.cleanupStyles = function () {
              w.container
                .removeClass(w.classNames.join(" "))
                .removeAttr("style"),
                w.wrapper.removeAttr("style"),
                w.slides &&
                  w.slides.length &&
                  w.slides
                    .removeClass(
                      [
                        w.params.slideVisibleClass,
                        w.params.slideActiveClass,
                        w.params.slideNextClass,
                        w.params.slidePrevClass,
                      ].join(" ")
                    )
                    .removeAttr("style")
                    .removeAttr("data-swiper-column")
                    .removeAttr("data-swiper-row"),
                w.paginationContainer &&
                  w.paginationContainer.length &&
                  w.paginationContainer.removeClass(
                    w.params.paginationHiddenClass
                  ),
                w.bullets &&
                  w.bullets.length &&
                  w.bullets.removeClass(w.params.bulletActiveClass),
                w.params.prevButton &&
                  e(w.params.prevButton).removeClass(
                    w.params.buttonDisabledClass
                  ),
                w.params.nextButton &&
                  e(w.params.nextButton).removeClass(
                    w.params.buttonDisabledClass
                  ),
                w.params.scrollbar &&
                  w.scrollbar &&
                  (w.scrollbar.track &&
                    w.scrollbar.track.length &&
                    w.scrollbar.track.removeAttr("style"),
                  w.scrollbar.drag &&
                    w.scrollbar.drag.length &&
                    w.scrollbar.drag.removeAttr("style"));
            }),
            (w.destroy = function (e, t) {
              w.detachEvents(),
                w.stopAutoplay(),
                w.params.scrollbar &&
                  w.scrollbar &&
                  w.params.scrollbarDraggable &&
                  w.scrollbar.disableDraggable(),
                w.params.loop && w.destroyLoop(),
                t && w.cleanupStyles(),
                w.disconnectObservers(),
                w.params.keyboardControl &&
                  w.disableKeyboardControl &&
                  w.disableKeyboardControl(),
                w.params.mousewheelControl &&
                  w.disableMousewheelControl &&
                  w.disableMousewheelControl(),
                w.params.a11y && w.a11y && w.a11y.destroy(),
                w.emit("onDestroy"),
                !1 !== e && (w = null);
            }),
            w.init(),
            w
          );
        }
      };
    t.prototype = {
      isSafari: (function () {
        var e = navigator.userAgent.toLowerCase();
        return (
          e.indexOf("safari") >= 0 &&
          e.indexOf("chrome") < 0 &&
          e.indexOf("android") < 0
        );
      })(),
      isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
        navigator.userAgent
      ),
      isArray: function (e) {
        return "[object Array]" === Object.prototype.toString.apply(e);
      },
      browser: {
        ie:
          window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
        ieTouch:
          (window.navigator.msPointerEnabled &&
            window.navigator.msMaxTouchPoints > 1) ||
          (window.navigator.pointerEnabled &&
            window.navigator.maxTouchPoints > 1),
      },
      device: (function () {
        var e = navigator.userAgent,
          t = e.match(/(Android);?[\s\/]+([\d.]+)?/),
          n = e.match(/(iPad).*OS\s([\d_]+)/),
          i = e.match(/(iPod)(.*OS\s([\d_]+))?/),
          a = !n && e.match(/(iPhone\sOS)\s([\d_]+)/);
        return { ios: n || a || i, android: t };
      })(),
      support: {
        touch:
          (window.Modernizr && !0 === Modernizr.touch) ||
          (function () {
            return !!(
              "ontouchstart" in window ||
              (window.DocumentTouch && document instanceof DocumentTouch)
            );
          })(),
        transforms3d:
          (window.Modernizr && !0 === Modernizr.csstransforms3d) ||
          (function () {
            var e = document.createElement("div").style;
            return (
              "webkitPerspective" in e ||
              "MozPerspective" in e ||
              "OPerspective" in e ||
              "MsPerspective" in e ||
              "perspective" in e
            );
          })(),
        flexbox: (function () {
          for (
            var e = document.createElement("div").style,
              t =
                "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(
                  " "
                ),
              n = 0;
            n < t.length;
            n++
          )
            if (t[n] in e) return !0;
        })(),
        observer: (function () {
          return (
            "MutationObserver" in window || "WebkitMutationObserver" in window
          );
        })(),
      },
      plugins: {},
    };
    for (
      var n = (function () {
          var e = function (e) {
              var t = this,
                n = 0;
              for (n = 0; n < e.length; n++) t[n] = e[n];
              return (t.length = e.length), this;
            },
            t = function (t, n) {
              var i = [],
                a = 0;
              if (t && !n && t instanceof e) return t;
              if (t)
                if ("string" == typeof t) {
                  var r,
                    o,
                    s = t.trim();
                  if (s.indexOf("<") >= 0 && s.indexOf(">") >= 0) {
                    var l = "div";
                    for (
                      0 === s.indexOf("<li") && (l = "ul"),
                        0 === s.indexOf("<tr") && (l = "tbody"),
                        (0 !== s.indexOf("<td") && 0 !== s.indexOf("<th")) ||
                          (l = "tr"),
                        0 === s.indexOf("<tbody") && (l = "table"),
                        0 === s.indexOf("<option") && (l = "select"),
                        o = document.createElement(l),
                        o.innerHTML = t,
                        a = 0;
                      a < o.childNodes.length;
                      a++
                    )
                      i.push(o.childNodes[a]);
                  } else
                    for (
                      r =
                        n || "#" !== t[0] || t.match(/[ .<>:~]/)
                          ? (n || document).querySelectorAll(t)
                          : [document.getElementById(t.split("#")[1])],
                        a = 0;
                      a < r.length;
                      a++
                    )
                      r[a] && i.push(r[a]);
                } else if (t.nodeType || t === window || t === document)
                  i.push(t);
                else if (t.length > 0 && t[0].nodeType)
                  for (a = 0; a < t.length; a++) i.push(t[a]);
              return new e(i);
            };
          return (
            (e.prototype = {
              addClass: function (e) {
                if (void 0 === e) return this;
                for (var t = e.split(" "), n = 0; n < t.length; n++)
                  for (var i = 0; i < this.length; i++)
                    this[i].classList.add(t[n]);
                return this;
              },
              removeClass: function (e) {
                for (var t = e.split(" "), n = 0; n < t.length; n++)
                  for (var i = 0; i < this.length; i++)
                    this[i].classList.remove(t[n]);
                return this;
              },
              hasClass: function (e) {
                return !!this[0] && this[0].classList.contains(e);
              },
              toggleClass: function (e) {
                for (var t = e.split(" "), n = 0; n < t.length; n++)
                  for (var i = 0; i < this.length; i++)
                    this[i].classList.toggle(t[n]);
                return this;
              },
              attr: function (e, t) {
                if (1 === arguments.length && "string" == typeof e)
                  return this[0] ? this[0].getAttribute(e) : void 0;
                for (var n = 0; n < this.length; n++)
                  if (2 === arguments.length) this[n].setAttribute(e, t);
                  else
                    for (var i in e)
                      (this[n][i] = e[i]), this[n].setAttribute(i, e[i]);
                return this;
              },
              removeAttr: function (e) {
                for (var t = 0; t < this.length; t++)
                  this[t].removeAttribute(e);
                return this;
              },
              data: function (e, t) {
                if (void 0 !== t) {
                  for (var n = 0; n < this.length; n++) {
                    var i = this[n];
                    i.dom7ElementDataStorage || (i.dom7ElementDataStorage = {}),
                      (i.dom7ElementDataStorage[e] = t);
                  }
                  return this;
                }
                if (this[0]) {
                  var a = this[0].getAttribute("data-" + e);
                  return (
                    a ||
                    (this[0].dom7ElementDataStorage &&
                    (e in this[0].dom7ElementDataStorage)
                      ? this[0].dom7ElementDataStorage[e]
                      : void 0)
                  );
                }
              },
              transform: function (e) {
                for (var t = 0; t < this.length; t++) {
                  var n = this[t].style;
                  n.webkitTransform =
                    n.MsTransform =
                    n.msTransform =
                    n.MozTransform =
                    n.OTransform =
                    n.transform =
                      e;
                }
                return this;
              },
              transition: function (e) {
                "string" != typeof e && (e += "ms");
                for (var t = 0; t < this.length; t++) {
                  var n = this[t].style;
                  n.webkitTransitionDuration =
                    n.MsTransitionDuration =
                    n.msTransitionDuration =
                    n.MozTransitionDuration =
                    n.OTransitionDuration =
                    n.transitionDuration =
                      e;
                }
                return this;
              },
              on: function (e, n, i, a) {
                function r(e) {
                  var a = e.target;
                  if (t(a).is(n)) i.call(a, e);
                  else
                    for (var r = t(a).parents(), o = 0; o < r.length; o++)
                      t(r[o]).is(n) && i.call(r[o], e);
                }
                var o,
                  s,
                  l = e.split(" ");
                for (o = 0; o < this.length; o++)
                  if ("function" == typeof n || !1 === n)
                    for (
                      "function" == typeof n &&
                        ((i = arguments[1]), (a = arguments[2] || !1)),
                        s = 0;
                      s < l.length;
                      s++
                    )
                      this[o].addEventListener(l[s], i, a);
                  else
                    for (s = 0; s < l.length; s++)
                      this[o].dom7LiveListeners ||
                        (this[o].dom7LiveListeners = []),
                        this[o].dom7LiveListeners.push({
                          listener: i,
                          liveListener: r,
                        }),
                        this[o].addEventListener(l[s], r, a);
                return this;
              },
              off: function (e, t, n, i) {
                for (var a = e.split(" "), r = 0; r < a.length; r++)
                  for (var o = 0; o < this.length; o++)
                    if ("function" == typeof t || !1 === t)
                      "function" == typeof t &&
                        ((n = arguments[1]), (i = arguments[2] || !1)),
                        this[o].removeEventListener(a[r], n, i);
                    else if (this[o].dom7LiveListeners)
                      for (var s = 0; s < this[o].dom7LiveListeners.length; s++)
                        this[o].dom7LiveListeners[s].listener === n &&
                          this[o].removeEventListener(
                            a[r],
                            this[o].dom7LiveListeners[s].liveListener,
                            i
                          );
                return this;
              },
              once: function (e, t, n, i) {
                function a(o) {
                  n(o), r.off(e, t, a, i);
                }
                var r = this;
                "function" == typeof t &&
                  ((t = !1), (n = arguments[1]), (i = arguments[2])),
                  r.on(e, t, a, i);
              },
              trigger: function (e, t) {
                for (var n = 0; n < this.length; n++) {
                  var i;
                  try {
                    i = new window.CustomEvent(e, {
                      detail: t,
                      bubbles: !0,
                      cancelable: !0,
                    });
                  } catch (n) {
                    (i = document.createEvent("Event")),
                      i.initEvent(e, !0, !0),
                      (i.detail = t);
                  }
                  this[n].dispatchEvent(i);
                }
                return this;
              },
              transitionEnd: function (e) {
                function t(r) {
                  if (r.target === this)
                    for (e.call(this, r), n = 0; n < i.length; n++)
                      a.off(i[n], t);
                }
                var n,
                  i = [
                    "webkitTransitionEnd",
                    "transitionend",
                    "oTransitionEnd",
                    "MSTransitionEnd",
                    "msTransitionEnd",
                  ],
                  a = this;
                if (e) for (n = 0; n < i.length; n++) a.on(i[n], t);
                return this;
              },
              width: function () {
                return this[0] === window
                  ? window.innerWidth
                  : this.length > 0
                  ? parseFloat(this.css("width"))
                  : null;
              },
              outerWidth: function (e) {
                return this.length > 0
                  ? e
                    ? this[0].offsetWidth +
                      parseFloat(this.css("margin-right")) +
                      parseFloat(this.css("margin-left"))
                    : this[0].offsetWidth
                  : null;
              },
              height: function () {
                return this[0] === window
                  ? window.innerHeight
                  : this.length > 0
                  ? parseFloat(this.css("height"))
                  : null;
              },
              outerHeight: function (e) {
                return this.length > 0
                  ? e
                    ? this[0].offsetHeight +
                      parseFloat(this.css("margin-top")) +
                      parseFloat(this.css("margin-bottom"))
                    : this[0].offsetHeight
                  : null;
              },
              offset: function () {
                if (this.length > 0) {
                  var e = this[0],
                    t = e.getBoundingClientRect(),
                    n = document.body,
                    i = e.clientTop || n.clientTop || 0,
                    a = e.clientLeft || n.clientLeft || 0,
                    r = window.pageYOffset || e.scrollTop,
                    o = window.pageXOffset || e.scrollLeft;
                  return { top: t.top + r - i, left: t.left + o - a };
                }
                return null;
              },
              css: function (e, t) {
                var n;
                if (1 === arguments.length) {
                  if ("string" != typeof e) {
                    for (n = 0; n < this.length; n++)
                      for (var i in e) this[n].style[i] = e[i];
                    return this;
                  }
                  if (this[0])
                    return window
                      .getComputedStyle(this[0], null)
                      .getPropertyValue(e);
                }
                if (2 === arguments.length && "string" == typeof e) {
                  for (n = 0; n < this.length; n++) this[n].style[e] = t;
                  return this;
                }
                return this;
              },
              each: function (e) {
                for (var t = 0; t < this.length; t++)
                  e.call(this[t], t, this[t]);
                return this;
              },
              html: function (e) {
                if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
                for (var t = 0; t < this.length; t++) this[t].innerHTML = e;
                return this;
              },
              text: function (e) {
                if (void 0 === e)
                  return this[0] ? this[0].textContent.trim() : null;
                for (var t = 0; t < this.length; t++) this[t].textContent = e;
                return this;
              },
              is: function (n) {
                if (!this[0]) return !1;
                var i, a;
                if ("string" == typeof n) {
                  var r = this[0];
                  if (r === document) return n === document;
                  if (r === window) return n === window;
                  if (r.matches) return r.matches(n);
                  if (r.webkitMatchesSelector)
                    return r.webkitMatchesSelector(n);
                  if (r.mozMatchesSelector) return r.mozMatchesSelector(n);
                  if (r.msMatchesSelector) return r.msMatchesSelector(n);
                  for (i = t(n), a = 0; a < i.length; a++)
                    if (i[a] === this[0]) return !0;
                  return !1;
                }
                if (n === document) return this[0] === document;
                if (n === window) return this[0] === window;
                if (n.nodeType || n instanceof e) {
                  for (i = n.nodeType ? [n] : n, a = 0; a < i.length; a++)
                    if (i[a] === this[0]) return !0;
                  return !1;
                }
                return !1;
              },
              index: function () {
                if (this[0]) {
                  for (
                    var e = this[0], t = 0;
                    null !== (e = e.previousSibling);

                  )
                    1 === e.nodeType && t++;
                  return t;
                }
              },
              eq: function (t) {
                if (void 0 === t) return this;
                var n,
                  i = this.length;
                return t > i - 1
                  ? new e([])
                  : t < 0
                  ? ((n = i + t), new e(n < 0 ? [] : [this[n]]))
                  : new e([this[t]]);
              },
              append: function (t) {
                var n, i;
                for (n = 0; n < this.length; n++)
                  if ("string" == typeof t) {
                    var a = document.createElement("div");
                    for (a.innerHTML = t; a.firstChild; )
                      this[n].appendChild(a.firstChild);
                  } else if (t instanceof e)
                    for (i = 0; i < t.length; i++) this[n].appendChild(t[i]);
                  else this[n].appendChild(t);
                return this;
              },
              prepend: function (t) {
                var n, i;
                for (n = 0; n < this.length; n++)
                  if ("string" == typeof t) {
                    var a = document.createElement("div");
                    for (
                      a.innerHTML = t, i = a.childNodes.length - 1;
                      i >= 0;
                      i--
                    )
                      this[n].insertBefore(
                        a.childNodes[i],
                        this[n].childNodes[0]
                      );
                  } else if (t instanceof e)
                    for (i = 0; i < t.length; i++)
                      this[n].insertBefore(t[i], this[n].childNodes[0]);
                  else this[n].insertBefore(t, this[n].childNodes[0]);
                return this;
              },
              insertBefore: function (e) {
                for (var n = t(e), i = 0; i < this.length; i++)
                  if (1 === n.length)
                    n[0].parentNode.insertBefore(this[i], n[0]);
                  else if (n.length > 1)
                    for (var a = 0; a < n.length; a++)
                      n[a].parentNode.insertBefore(this[i].cloneNode(!0), n[a]);
              },
              insertAfter: function (e) {
                for (var n = t(e), i = 0; i < this.length; i++)
                  if (1 === n.length)
                    n[0].parentNode.insertBefore(this[i], n[0].nextSibling);
                  else if (n.length > 1)
                    for (var a = 0; a < n.length; a++)
                      n[a].parentNode.insertBefore(
                        this[i].cloneNode(!0),
                        n[a].nextSibling
                      );
              },
              next: function (n) {
                return new e(
                  this.length > 0
                    ? n
                      ? this[0].nextElementSibling &&
                        t(this[0].nextElementSibling).is(n)
                        ? [this[0].nextElementSibling]
                        : []
                      : this[0].nextElementSibling
                      ? [this[0].nextElementSibling]
                      : []
                    : []
                );
              },
              nextAll: function (n) {
                var i = [],
                  a = this[0];
                if (!a) return new e([]);
                for (; a.nextElementSibling; ) {
                  var r = a.nextElementSibling;
                  n ? t(r).is(n) && i.push(r) : i.push(r), (a = r);
                }
                return new e(i);
              },
              prev: function (n) {
                return new e(
                  this.length > 0
                    ? n
                      ? this[0].previousElementSibling &&
                        t(this[0].previousElementSibling).is(n)
                        ? [this[0].previousElementSibling]
                        : []
                      : this[0].previousElementSibling
                      ? [this[0].previousElementSibling]
                      : []
                    : []
                );
              },
              prevAll: function (n) {
                var i = [],
                  a = this[0];
                if (!a) return new e([]);
                for (; a.previousElementSibling; ) {
                  var r = a.previousElementSibling;
                  n ? t(r).is(n) && i.push(r) : i.push(r), (a = r);
                }
                return new e(i);
              },
              parent: function (e) {
                for (var n = [], i = 0; i < this.length; i++)
                  e
                    ? t(this[i].parentNode).is(e) && n.push(this[i].parentNode)
                    : n.push(this[i].parentNode);
                return t(t.unique(n));
              },
              parents: function (e) {
                for (var n = [], i = 0; i < this.length; i++)
                  for (var a = this[i].parentNode; a; )
                    e ? t(a).is(e) && n.push(a) : n.push(a), (a = a.parentNode);
                return t(t.unique(n));
              },
              find: function (t) {
                for (var n = [], i = 0; i < this.length; i++)
                  for (
                    var a = this[i].querySelectorAll(t), r = 0;
                    r < a.length;
                    r++
                  )
                    n.push(a[r]);
                return new e(n);
              },
              children: function (n) {
                for (var i = [], a = 0; a < this.length; a++)
                  for (var r = this[a].childNodes, o = 0; o < r.length; o++)
                    n
                      ? 1 === r[o].nodeType && t(r[o]).is(n) && i.push(r[o])
                      : 1 === r[o].nodeType && i.push(r[o]);
                return new e(t.unique(i));
              },
              remove: function () {
                for (var e = 0; e < this.length; e++)
                  this[e].parentNode && this[e].parentNode.removeChild(this[e]);
                return this;
              },
              add: function () {
                var e,
                  n,
                  i = this;
                for (e = 0; e < arguments.length; e++) {
                  var a = t(arguments[e]);
                  for (n = 0; n < a.length; n++)
                    (i[i.length] = a[n]), i.length++;
                }
                return i;
              },
            }),
            (t.fn = e.prototype),
            (t.unique = function (e) {
              for (var t = [], n = 0; n < e.length; n++)
                -1 === t.indexOf(e[n]) && t.push(e[n]);
              return t;
            }),
            t
          );
        })(),
        i = ["jQuery", "Zepto", "Dom7"],
        a = 0;
      a < i.length;
      a++
    )
      window[i[a]] &&
        (function (e) {
          e.fn.swiper = function (n) {
            var i;
            return (
              e(this).each(function () {
                var e = new t(this, n);
                i || (i = e);
              }),
              i
            );
          };
        })(window[i[a]]);
    var r;
    (r = void 0 === n ? window.Dom7 || window.Zepto || window.jQuery : n),
      r &&
        ("transitionEnd" in r.fn ||
          (r.fn.transitionEnd = function (e) {
            function t(r) {
              if (r.target === this)
                for (e.call(this, r), n = 0; n < i.length; n++) a.off(i[n], t);
            }
            var n,
              i = [
                "webkitTransitionEnd",
                "transitionend",
                "oTransitionEnd",
                "MSTransitionEnd",
                "msTransitionEnd",
              ],
              a = this;
            if (e) for (n = 0; n < i.length; n++) a.on(i[n], t);
            return this;
          }),
        "transform" in r.fn ||
          (r.fn.transform = function (e) {
            for (var t = 0; t < this.length; t++) {
              var n = this[t].style;
              n.webkitTransform =
                n.MsTransform =
                n.msTransform =
                n.MozTransform =
                n.OTransform =
                n.transform =
                  e;
            }
            return this;
          }),
        "transition" in r.fn ||
          (r.fn.transition = function (e) {
            "string" != typeof e && (e += "ms");
            for (var t = 0; t < this.length; t++) {
              var n = this[t].style;
              n.webkitTransitionDuration =
                n.MsTransitionDuration =
                n.msTransitionDuration =
                n.MozTransitionDuration =
                n.OTransitionDuration =
                n.transitionDuration =
                  e;
            }
            return this;
          })),
      (window.Swiper = t);
  })(),
  "undefined" != typeof module
    ? (module.exports = window.Swiper)
    : "function" == typeof define &&
      define.amd &&
      define("lib-app/Swiper/swiper", [], function () {
        "use strict";
        return window.Swiper;
      }),
  (function (e, t) {
    var n = (function (e, t) {
      "use strict";
      if (t.getElementsByClassName) {
        var n,
          i = t.documentElement,
          a = e.Date,
          r = e.HTMLPictureElement,
          o = "addEventListener",
          s = "getAttribute",
          l = e[o],
          p = e.setTimeout,
          c = e.requestAnimationFrame || p,
          d = e.requestIdleCallback,
          u = /^picture$/i,
          f = ["load", "error", "lazyincluded", "_lazyloaded"],
          h = {},
          m = Array.prototype.forEach,
          g = function (e, t) {
            return (
              h[t] || (h[t] = new RegExp("(\\s|^)" + t + "(\\s|$)")),
              h[t].test(e[s]("class") || "") && h[t]
            );
          },
          v = function (e, t) {
            g(e, t) ||
              e.setAttribute("class", (e[s]("class") || "").trim() + " " + t);
          },
          b = function (e, t) {
            var n;
            (n = g(e, t)) &&
              e.setAttribute("class", (e[s]("class") || "").replace(n, " "));
          },
          y = function (e, t, n) {
            var i = n ? o : "removeEventListener";
            n && y(e, t),
              f.forEach(function (n) {
                e[i](n, t);
              });
          },
          w = function (e, n, i, a, r) {
            var o = t.createEvent("CustomEvent");
            return o.initCustomEvent(n, !a, !r, i || {}), e.dispatchEvent(o), o;
          },
          x = function (t, i) {
            var a;
            !r && (a = e.picturefill || n.pf)
              ? a({ reevaluate: !0, elements: [t] })
              : i && i.src && (t.src = i.src);
          },
          C = function (e, t) {
            return (getComputedStyle(e, null) || {})[t];
          },
          T = function (e, t, i) {
            for (
              i = i || e.offsetWidth;
              i < n.minSize && t && !e._lazysizesWidth;

            )
              (i = t.offsetWidth), (t = t.parentNode);
            return i;
          },
          S = (function () {
            var e,
              n,
              i = [],
              a = function () {
                var t;
                for (e = !0, n = !1; i.length; )
                  (t = i.shift()), t[0].apply(t[1], t[2]);
                e = !1;
              };
            return function (r) {
              e
                ? r.apply(this, arguments)
                : (i.push([r, this, arguments]),
                  n || ((n = !0), (t.hidden ? p : c)(a)));
            };
          })(),
          k = function (e, t) {
            return t
              ? function () {
                  S(e);
                }
              : function () {
                  var t = this,
                    n = arguments;
                  S(function () {
                    e.apply(t, n);
                  });
                };
          },
          E = function (e) {
            var t,
              n = 0,
              i = 999,
              r = function () {
                (t = !1), (n = a.now()), e();
              },
              o = d
                ? function () {
                    d(r, { timeout: i }), 999 !== i && (i = 999);
                  }
                : k(function () {
                    p(r);
                  }, !0);
            return function (e) {
              var r;
              (e = !0 === e) && (i = 66),
                t ||
                  ((t = !0),
                  (r = 125 - (a.now() - n)),
                  0 > r && (r = 0),
                  e || (9 > r && d) ? o() : p(o, r));
            };
          },
          I = function (e) {
            var t,
              n,
              i = function () {
                (t = null), e();
              },
              r = function () {
                var e = a.now() - n;
                99 > e ? p(r, 99 - e) : (d || i)(i);
              };
            return function () {
              (n = a.now()), t || (t = p(r, 99));
            };
          },
          A = (function () {
            var r,
              c,
              d,
              f,
              h,
              T,
              A,
              $,
              _,
              D,
              O,
              P,
              M,
              B,
              R,
              z = /^img$/i,
              N = /^iframe$/i,
              j = "onscroll" in e && !/glebot/.test(navigator.userAgent),
              H = 0,
              W = 0,
              F = -1,
              U = function (e) {
                W--,
                  e && e.target && y(e.target, U),
                  (!e || 0 > W || !e.target) && (W = 0);
              },
              G = function (e, n) {
                var a,
                  r = e,
                  o =
                    "hidden" == C(t.body, "visibility") ||
                    "hidden" != C(e, "visibility");
                for (
                  _ -= n, P += n, D -= n, O += n;
                  o && (r = r.offsetParent) && r != t.body && r != i;

                )
                  (o = (C(r, "opacity") || 1) > 0) &&
                    "visible" != C(r, "overflow") &&
                    ((a = r.getBoundingClientRect()),
                    (o =
                      O > a.left &&
                      D < a.right &&
                      P > a.top - 1 &&
                      _ < a.bottom + 1));
                return o;
              },
              q = function () {
                var e, a, o, l, p, u, f, m, g;
                if ((h = n.loadMode) && 8 > W && (e = r.length)) {
                  (a = 0),
                    F++,
                    null == B &&
                      ("expand" in n ||
                        (n.expand =
                          i.clientHeight > 500 && i.clientWidth > 500
                            ? 500
                            : 370),
                      (M = n.expand),
                      (B = M * n.expFactor)),
                    B > H && 1 > W && F > 2 && h > 2 && !t.hidden
                      ? ((H = B), (F = 0))
                      : (H = h > 1 && F > 1 && 6 > W ? M : 0);
                  for (; e > a; a++)
                    if (r[a] && !r[a]._lazyRace)
                      if (j)
                        if (
                          (((m = r[a][s]("data-expand")) && (u = 1 * m)) ||
                            (u = H),
                          g !== u &&
                            ((A = innerWidth + u * R),
                            ($ = innerHeight + u),
                            (f = -1 * u),
                            (g = u)),
                          (o = r[a].getBoundingClientRect()),
                          (P = o.bottom) >= f &&
                            (_ = o.top) <= $ &&
                            (O = o.right) >= f * R &&
                            (D = o.left) <= A &&
                            (P || O || D || _) &&
                            ((d && 3 > W && !m && (3 > h || 4 > F)) ||
                              G(r[a], u)))
                        ) {
                          if ((ee(r[a]), (p = !0), W > 9)) break;
                        } else
                          !p &&
                            d &&
                            !l &&
                            4 > W &&
                            4 > F &&
                            h > 2 &&
                            (c[0] || n.preloadAfterLoad) &&
                            (c[0] ||
                              (!m &&
                                (P ||
                                  O ||
                                  D ||
                                  _ ||
                                  "auto" != r[a][s](n.sizesAttr)))) &&
                            (l = c[0] || r[a]);
                      else ee(r[a]);
                  l && !p && ee(l);
                }
              },
              V = E(q),
              X = function (e) {
                v(e.target, n.loadedClass),
                  b(e.target, n.loadingClass),
                  y(e.target, K);
              },
              Y = k(X),
              K = function (e) {
                Y({ target: e.target });
              },
              Q = function (e, t) {
                try {
                  e.contentWindow.location.replace(t);
                } catch (n) {
                  e.src = t;
                }
              },
              J = function (e) {
                var t,
                  i,
                  a = e[s](n.srcsetAttr);
                (t = n.customMedia[e[s]("data-media") || e[s]("media")]) &&
                  e.setAttribute("media", t),
                  a && e.setAttribute("srcset", a),
                  t &&
                    ((i = e.parentNode),
                    i.insertBefore(e.cloneNode(), e),
                    i.removeChild(e));
              },
              Z = k(function (e, t, i, a, r) {
                var o, l, c, d, h, g;
                (h = w(e, "lazybeforeunveil", t)).defaultPrevented ||
                  (a &&
                    (i ? v(e, n.autosizesClass) : e.setAttribute("sizes", a)),
                  (l = e[s](n.srcsetAttr)),
                  (o = e[s](n.srcAttr)),
                  r &&
                    ((c = e.parentNode), (d = c && u.test(c.nodeName || ""))),
                  (g = t.firesLoad || ("src" in e && (l || o || d))),
                  (h = { target: e }),
                  g &&
                    (y(e, U, !0),
                    clearTimeout(f),
                    (f = p(U, 2500)),
                    v(e, n.loadingClass),
                    y(e, K, !0)),
                  d && m.call(c.getElementsByTagName("source"), J),
                  l
                    ? e.setAttribute("srcset", l)
                    : o && !d && (N.test(e.nodeName) ? Q(e, o) : (e.src = o)),
                  (l || d) && x(e, { src: o })),
                  S(function () {
                    e._lazyRace && delete e._lazyRace,
                      b(e, n.lazyClass),
                      (!g || e.complete) && (g ? U(h) : W--, X(h));
                  });
              }),
              ee = function (e) {
                var t,
                  i = z.test(e.nodeName),
                  a = i && (e[s](n.sizesAttr) || e[s]("sizes")),
                  r = "auto" == a;
                ((!r && d) ||
                  !i ||
                  (!e.src && !e.srcset) ||
                  e.complete ||
                  g(e, n.errorClass)) &&
                  ((t = w(e, "lazyunveilread").detail),
                  r && L.updateElem(e, !0, e.offsetWidth),
                  (e._lazyRace = !0),
                  W++,
                  Z(e, t, r, a, i));
              },
              te = function () {
                if (!d) {
                  if (a.now() - T < 999) return void p(te, 999);
                  var e = I(function () {
                    (n.loadMode = 3), V();
                  });
                  (d = !0),
                    (n.loadMode = 3),
                    V(),
                    l(
                      "scroll",
                      function () {
                        3 == n.loadMode && (n.loadMode = 2), e();
                      },
                      !0
                    );
                }
              };
            return {
              _: function () {
                (T = a.now()),
                  (r = t.getElementsByClassName(n.lazyClass)),
                  (c = t.getElementsByClassName(
                    n.lazyClass + " " + n.preloadClass
                  )),
                  (R = n.hFac),
                  l("scroll", V, !0),
                  l("resize", V, !0),
                  e.MutationObserver
                    ? new MutationObserver(V).observe(i, {
                        childList: !0,
                        subtree: !0,
                        attributes: !0,
                      })
                    : (i[o]("DOMNodeInserted", V, !0),
                      i[o]("DOMAttrModified", V, !0),
                      setInterval(V, 999)),
                  l("hashchange", V, !0),
                  [
                    "focus",
                    "mouseover",
                    "click",
                    "load",
                    "transitionend",
                    "animationend",
                    "webkitAnimationEnd",
                  ].forEach(function (e) {
                    t[o](e, V, !0);
                  }),
                  /d$|^c/.test(t.readyState)
                    ? te()
                    : (l("load", te), t[o]("DOMContentLoaded", V), p(te, 2e4)),
                  V(r.length > 0);
              },
              checkElems: V,
              unveil: ee,
            };
          })(),
          L = (function () {
            var e,
              i = k(function (e, t, n, i) {
                var a, r, o;
                if (
                  ((e._lazysizesWidth = i),
                  (i += "px"),
                  e.setAttribute("sizes", i),
                  u.test(t.nodeName || ""))
                )
                  for (
                    a = t.getElementsByTagName("source"), r = 0, o = a.length;
                    o > r;
                    r++
                  )
                    a[r].setAttribute("sizes", i);
                n.detail.dataAttr || x(e, n.detail);
              }),
              a = function (e, t, n) {
                var a,
                  r = e.parentNode;
                r &&
                  ((n = T(e, r, n)),
                  (a = w(e, "lazybeforesizes", { width: n, dataAttr: !!t })),
                  a.defaultPrevented ||
                    ((n = a.detail.width) &&
                      n !== e._lazysizesWidth &&
                      i(e, r, a, n)));
              },
              r = function () {
                var t,
                  n = e.length;
                if (n) for (t = 0; n > t; t++) a(e[t]);
              },
              o = I(r);
            return {
              _: function () {
                (e = t.getElementsByClassName(n.autosizesClass)),
                  l("resize", o);
              },
              checkElems: o,
              updateElem: a,
            };
          })(),
          $ = function () {
            $.i || (($.i = !0), L._(), A._());
          };
        return (
          (function () {
            var t,
              i = {
                lazyClass: "lazyload",
                loadedClass: "lazyloaded",
                loadingClass: "lazyloading",
                preloadClass: "lazypreload",
                errorClass: "lazyerror",
                autosizesClass: "lazyautosizes",
                srcAttr: "data-src",
                srcsetAttr: "data-srcset",
                sizesAttr: "data-sizes",
                minSize: 40,
                customMedia: {},
                init: !0,
                expFactor: 1.5,
                hFac: 0.8,
                loadMode: 2,
              };
            n = e.lazySizesConfig || e.lazysizesConfig || {};
            for (t in i) t in n || (n[t] = i[t]);
            (e.lazySizesConfig = n),
              p(function () {
                n.init && $();
              });
          })(),
          {
            cfg: n,
            autoSizer: L,
            loader: A,
            init: $,
            uP: x,
            aC: v,
            rC: b,
            hC: g,
            fire: w,
            gW: T,
            rAF: S,
          }
        );
      }
    })(e, e.document);
    (e.lazySizes = n),
      "object" == typeof module && module.exports && (module.exports = n);
  })(window),
  define("lib-app/lazysizes.min", function () {}),
  define(
    "storymaps/tpl/ui/mobile/MobileFeatureList",
    [
      "storymaps/common/utils/CommonHelper",
      "lib-build/css!./MobileFeatureList",
      "lib-build/css!lib-app/Swiper/swiper",
      "lib-app/Swiper/swiper",
      "lib-app/lazysizes.min",
    ],
    function (e) {
      return function (t, n, i, a) {
        function r() {
          $("#navThemeRight").on("click", function () {
            c.slideNext();
          }),
            $("#navThemeLeft").on("click", function () {
              c.slidePrev();
            });
        }
        function o(e) {
          0 === e && c.slides.length > 1
            ? ($("#navThemeLeft").css("display", "none"),
              $("#navThemeRight").css("display", "block"))
            : e == c.slides.length - 1
            ? ($("#navThemeRight").css("display", "none"),
              $("#navThemeLeft").css("display", "block"))
            : ($("#navThemeLeft").css("display", "block"),
              $("#navThemeRight").css("display", "block"));
        }
        function s(e) {
          return $.grep($("ul.mobileTileList li"), function (t, n) {
            return t.id == "item" + e;
          })[0];
        }
        var l = a,
          p = !0,
          c = null,
          d = $("#mobileThemeBarSlider");
        app.scrollList;
        /iPhone|iPod/.test(navigator.userAgent) && window.MSStream,
          /(android)/i.test(navigator.userAgent);
        (this.init = function () {
          (c = new Swiper("#mobileThemeSliderContainer", {
            speed: 0,
            direction: "horizontal",
          })),
            c.on("onSlideChangeEnd", function (e) {
              "visible" == $("#mobileThemeBar").css("visibility") &&
                l.activateLayer(c.activeIndex),
                o(c.activeIndex),
                $("#mobileThemeBar").css(
                  "background-color",
                  app.layerCurrent.color
                );
            }),
            r();
        }),
          (this.addTheme = function (e, t, n) {
            if (!$(".mobileThemeTitle")[n]) {
              if (t)
                $("#mobileThemeBar .swiper-container").css("display", "none"),
                  $("#navThemeLeft").css("display", "none"),
                  $("#navThemeRight").css("display", "none"),
                  $("#navThemeRight").css("display", "none");
              else {
                var i =
                  '<div class="mobileThemeTitle swiper-slide"><p style="margin-top: 7px;">' +
                  e.title +
                  "</p></div>";
                $(d).append(i);
              }
              c.update();
            }
          }),
          (this.showMobileList = function () {
            $("#mobileFeature").css("visibility", "hidden"),
              $("#mobileSupportedLayersView").css("visibility", "hidden"),
              $("#mobileThemeBarSlider").css("display", "block"),
              $("#mobilePaneList").show(),
              $("#returnIcon").css("display", "none"),
              $("#returnHiddenBar").css("display", "none"),
              $("#centerMapIconContainer").css("display", "none"),
              $("#navThemeLeft").css("visibility", "visible"),
              $("#navThemeRight").css("visibility", "visible"),
              l.selected &&
                (l.selected.symbol.setWidth(l.lutIconSpecs.tiny.getWidth()),
                l.selected.symbol.setHeight(l.lutIconSpecs.tiny.getHeight()),
                l.selected.symbol.setOffset(
                  l.lutIconSpecs.tiny.getOffsetX(),
                  l.lutIconSpecs.tiny.getOffsetY()
                ),
                l.selected.draw()),
              (l.selected = null),
              app.mapTips && app.mapTips.clean(!0),
              $(".detailContainer").hide(),
              c.update();
          }),
          (this.selectTheme = function (e) {
            p
              ? c.slideTo(e, 0)
              : (c.slideTo(e, 0), $("#mobileTitlePage").css("display", "none")),
              (p = !1),
              $("#mobileThemeBar").css(
                "background-color",
                app.layerCurrent.color
              ),
              o(e);
          }),
          (this.buildList = function (t, n, i) {
            0 === t && $("#mobileList").empty();
            var a = $(i).clone();
            $(a).data("shortlist-id", n.attributes.shortlist_id);
            var r = n.attributes,
              o =
                r[
                  $.grep(Object.keys(r), function (e) {
                    return "thumb_url" == e.toLowerCase();
                  })[0]
                ];
            o ||
              (o =
                r[
                  $.grep(Object.keys(r), function (e) {
                    return "pic_url" == e.toLowerCase();
                  })[0]
                ]);
            var s;
            o &&
              o.indexOf("sharing/rest/content/items/") > -1 &&
              (o = e.possiblyAddToken(o)),
              (s = $(
                '<div style="height: 75px; max-width: 100px; margin-bottom: 8px;"><div class="mobileTileListImg"></div></div>'
              )),
              $(s)
                .find(".mobileTileListImg")
                .css("background-image", "url(" + o + ")"),
              $(s).find(".mobileTileListImg").attr("alt", ""),
              $(a).append(s),
              $(a).on("tap", app.ui.tilePanel.tile_onClick),
              $(a).on("click", app.ui.tilePanel.tile_onClick),
              $("#mobileList").append(a);
          }),
          (this.setColor = function () {
            app.isInBuilder ||
              $("#mobileThemeBar").css(
                "background-color",
                app.layerCurrent.color
              );
          }),
          (this.refreshMobileList = function () {
            var e,
              t = !1;
            app.layerCurrent &&
              app.layerCurrent.graphics.length &&
              setTimeout(function () {
                $.each(app.layerCurrent.graphics, function (n, i) {
                  (e = s(i.attributes.shortlist_id)),
                    app.map.extent.contains(i.geometry)
                      ? ("none" == $(e).css("display") &&
                          $(e).css("display", "block"),
                        (t = !0))
                      : "none" != $(e).css("display") &&
                        $(e).css("display", "none");
                }),
                  $("#mobilePaneList").scrollTop(0),
                  t
                    ? $(".noFeature").css("display", "none")
                    : $(".noFeature").css("display", "block");
              }, 100);
          });
      };
    }
  ),
  define(
    "lib-build/css!storymaps/common/mapcontrols/command/MapCommand",
    [],
    function () {}
  ),
  define(
    "storymaps/common/mapcontrols/command/MapCommand",
    [
      "lib-build/css!./MapCommand",
      "dojo/has",
      "esri/geometry/Point",
      "dojo/on",
      "esri/symbols/PictureMarkerSymbol",
      "esri/layers/GraphicsLayer",
      "esri/graphic",
      "esri/config",
    ],
    function (e, t, n, i, a, r, o, s) {
      return function (e, l, p, c) {
        function d(t) {
          if (t)
            $(e.container).find(".mapCommandHomeBtn").addClass("loading"),
              (m = Date.now());
          else {
            var n = Date.now() - m,
              i = 0;
            n < 450 && (i = 450 - n),
              setTimeout(function () {
                $(e.container)
                  .find(".mapCommandHomeBtn")
                  .removeClass("loading"),
                  (m = 0);
              }, i);
          }
        }
        function u() {
          console.log("getDeviceLocation");
          var t = !1;
          setTimeout(function () {
            t || $(e.container).find(".mapCommandLocation").addClass("loading");
          }, 300),
            navigator.geolocation.getCurrentPosition(
              function (i) {
                (t = !0),
                  $(e.container)
                    .find(".mapCommandLocation")
                    .removeClass("loading");
                var a = new n(i.coords.longitude, i.coords.latitude);
                if (
                  (p && "function" == typeof p && p(!0, a, i),
                  102100 != e.spatialReference.wkid &&
                    4326 != e.spatialReference.wkid)
                )
                  return void s.defaults.geometryService.project(
                    [a],
                    e.spatialReference,
                    function (e) {
                      e && e[0] && f(e[0]);
                    }
                  );
                f(a);
              },
              function (e) {
                (t = !0), h(e);
              },
              { enableHighAccuracy: !0, maximumAge: 12e4, timeout: 1e4 }
            ),
            setTimeout(function () {
              t || h();
            }, 1e4);
        }
        function f(e) {
          b.clear(),
            b.add(new o(e, v)),
            setTimeout(function () {
              $("#locateLayer_layer image").fadeOut({ duration: 800 });
            }, 1e4);
        }
        function h(t) {
          console.log("getDeviceLocationError", t),
            $(e.container).find(".mapCommandLocation").removeClass("loading"),
            p(!1, null);
        }
        var m = 0,
          g = $(
            '<div class="esriSimpleSliderIncrementButton"><div class="mapCommandHomeBtn" title="' +
              (i18n.viewer.mapFromCommon
                ? i18n.viewer.mapFromCommon.home
                : "Zoom Home") +
              '" role="button" tabindex="0"></div></div>'
          ),
          v = new a(
            "resources/common/icons/mapcommand-location-marker.png",
            21,
            21
          ),
          b = new r({ id: "locateLayer" });
        g.on("click keydown", function (t) {
          ("keydown" === t.type && 32 !== t.keyCode && 13 !== t.keyCode) ||
            (0 !== m && $("body").hasClass("mobile-view")) ||
            (l && "function" == typeof l
              ? l(e._params.extent)
              : e.setExtent(e._params.extent));
        }),
          $(e.container).find(".esriSimpleSlider div:nth-child(1)").after(g),
          i(e, "update-start", function () {
            0 === m && d(!0);
          }),
          i(e, "update-end", function () {
            d(!1);
          }),
          (this.setMobile = function (t) {
            $(".esriSimpleSlider, .mapCommandHomeBtn", e.container).toggleClass(
              "touch",
              !!t
            );
          }),
          (this.destroy = function () {
            $(e.container).find(".esriSimpleSliderIncrementButton").remove(),
              $(e.container).find(".mapCommandLocation").remove();
          }),
          (this.startLoading = function () {
            d(!0);
          }),
          (this.stopLoading = function () {
            d(!1);
          }),
          (this.enableLocationButton = function (t) {
            $(e.container).toggleClass("has-locator", t),
              $(".mapCommandLocation", e.container).toggleClass("hidden", !t);
          }),
          navigator &&
            navigator.geolocation &&
            window.top === window.self &&
            window.location.protocol.search("https") >= 0 &&
            ($(".esriSimpleSlider", e.container).after(
              '<div class="esriSimpleSlider esriSimpleSliderVertical mapCommandLocation"></div>'
            ),
            $(".mapCommandLocation", e.container).click(u),
            this.enableLocationButton(c),
            e.addLayer(b)),
          this.setMobile(
            app.appCfg.mapCommandLargerTouch ||
              (void 0 === app.appCfg.mapCommandLargerTouch && t("touch"))
          );
      };
    }
  ),
  define(
    "lib-build/tpl!storymaps/common/mapcontrols/legend/Legend",
    [],
    function () {
      return function (obj) {
        function print() {
          __p += __j.call(arguments, "");
        }
        obj || (obj = {});
        var __t,
          __p = "",
          __e = _.escape,
          __j = Array.prototype.join;
        with (obj)
          (__p +=
            '<div class="legendContainer mapControls">\n\t<button class="titleBtn">\n\t\t<span class="collapseBtn" aria-hidden="true">\n\t\t\t<div class="glyphicon glyphicon-chevron-down"></div>\n\t\t\t<div class="glyphicon glyphicon-chevron-up"></div>\n\t\t</span>\n\t\t' +
            (null == (__t = title) ? "" : __t) +
            '\n\t</button>\n\n\t<div class="content">\n\t\t<div class="legendDijitContainer"></div>\n\t\t'),
            isInBuilder &&
              (__p +=
                '\n\t\t\t<div class="settingsGear glyphicon glyphicon-wrench"></div>\n\t\t\t<div class="settingsOverlay">\n\t\t\t\t<div class="settings-title">' +
                (null == (__t = settings) ? "" : __t) +
                '</div>\n\t\t\t\t<div class="settings-content">\n\t\t\t\t\t\x3c!-- Open by default --\x3e\n\t\t\t\t\t<div class="checkbox">\n\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t<input type="checkbox" class="expandStartup" />\n\t\t\t\t\t\t\t' +
                (null == (__t = openDefault) ? "" : __t) +
                "\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t"),
            (__p += "\n\t</div>\n</div>\n");
        return __p;
      };
    }
  ),
  define(
    "lib-build/css!storymaps/common/mapcontrols/legend/Legend",
    [],
    function () {}
  ),
  define(
    "lib-build/css!storymaps/common/mapcontrols/Common",
    [],
    function () {}
  ),
  define(
    "storymaps/common/mapcontrols/legend/Legend",
    [
      "lib-build/tpl!./Legend",
      "lib-build/css!./Legend",
      "lib-build/css!../Common",
      "storymaps/common/utils/CommonHelper",
      "esri/dijit/Legend",
      "esri/arcgis/utils",
      "dojo/topic",
    ],
    function (e, t, n, i, a, r, o) {
      return function (t, n, s) {
        function l() {
          m
            .find(".legendDijitContainer")
            .html('<div class="legendDijit"></div>'),
            (f = new a(
              { map: t.map, layerInfos: r.getLegendLayers(t) },
              m.find(".legendDijit")[0]
            )),
            f.startup(),
            o.publish("story-created-legend", t.itemInfo.item.id);
        }
        function p() {
          f && f.destroy(), (f = null);
        }
        function c() {
          m.find(".legendContainer").toggleClass("collapsed"),
            m.find(".settingsOverlay").hide();
        }
        function d() {
          (h.openByDefault = m.find(".expandStartup").prop("checked")),
            o.publish("BUILDER_INCREMENT_COUNTER", 1);
        }
        var u = this,
          f = null,
          h = null,
          m = s.container,
          g = { isInBuilder: n, title: i18n.viewer.mapFromCommon.legend };
        n &&
          ((g.settings = i18n.commonMapControls.common.settings),
          (g.openDefault = i18n.commonMapControls.common.openDefault)),
          m.html(e(g)),
          (this.toggle = function (e) {
            m.toggle(!!e), e && !f ? l() : e || p();
          }),
          (this.toggleExpanded = function (e) {
            m.find(".legendContainer").toggleClass("collapsed", !e);
          }),
          (this.setColors = function (e) {
            m
              .find(".legendContainer")
              .css({ backgroundColor: e.mapControls, color: e.text }),
              m.find(".titleBtn").css("color", e.softText),
              m.find(".settingsGear, .collapseBtn").css("color", e.softBtn),
              i.addCSSRule(
                ".mainMediaContainer .legendContainer ::-webkit-scrollbar-thumb { background-color:" +
                  e.header +
                  "; }",
                "MapControlLegendDropdownScrollbar"
              );
          }),
          (this.updatePlacementSettings = function (e) {
            m
              .find(".legendContainer")
              .toggleClass("isInlined", "panel" == e.mode),
              e.container[0] != m[0] &&
                (e.container.html(m.find(".legendContainer")),
                (m = e.container));
          }),
          (this.setSettings = function (e) {
            (h = e), m.find(".expandStartup").prop("checked", h.openByDefault);
          }),
          (function () {
            m.find(".titleBtn").click(c),
              m.find(".settingsGear").click(function () {
                m.find(".settingsOverlay").is(":visible")
                  ? m.off("mouseleave")
                  : m.mouseleave(function () {
                      m.find(".settingsOverlay").toggle(),
                        m.off("mouseleave"),
                        m.find(".content").removeClass("settingsOpen");
                    }),
                  m.find(".settingsOverlay").toggle(),
                  m.find(".content").toggleClass("settingsOpen");
              }),
              m.find(".expandStartup").change(d),
              u.updatePlacementSettings(s);
          })();
      };
    }
  ),
  define(
    "lib-build/tpl!storymaps/common/mapcontrols/overview/Overview",
    [],
    function () {
      return function (obj) {
        function print() {
          __p += __j.call(arguments, "");
        }
        obj || (obj = {});
        var __t,
          __p = "",
          __e = _.escape,
          __j = Array.prototype.join;
        with (obj)
          (__p +=
            '<div class="overviewContainer mapControls">\n\t<button class="titleBtn">\n\t\t<span class="collapseBtn" aria-hidden="true">\n\t\t\t<div class="glyphicon glyphicon-chevron-down"></div>\n\t\t\t<div class="glyphicon glyphicon-chevron-up"></div>\n\t\t</span>\n\t\t' +
            (null == (__t = title) ? "" : __t) +
            '\n\t</button>\n\n\t<div class="content">\n\t\t<div class="overviewMapContainer">\n\t\t\t\x3c!-- Map is injected here --\x3e\n\t\t</div>\n\t\t'),
            isInBuilder &&
              (__p +=
                '\n\t\t\t<div class="settingsGear glyphicon glyphicon-wrench"></div>\n\t\t\t<div class="settingsOverlay">\n\t\t\t\t<div class="settings-title">' +
                (null == (__t = settings) ? "" : __t) +
                '</div>\n\t\t\t\t<div class="settings-content">\n\t\t\t\t\t\x3c!-- Open by default --\x3e\n\t\t\t\t\t<div class="checkbox">\n\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t<input type="checkbox" class="expandStartup" />\n\t\t\t\t\t\t\t' +
                (null == (__t = openDefault) ? "" : __t) +
                '\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t\x3c!-- Basemap --\x3e\n\t\t\t\t\t<div class="btn-group dropup basemap-dropdown">\n\t\t\t\t\t\t<button type="button" class="btn btn-default btn-sm dropdown-toggle basemapBtn" data-toggle="dropdown">\n\t\t\t\t\t\t\t' +
                (null == (__t = basemapGalleryBtnLabel) ? "" : __t) +
                ' <span class="caret"></span>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t\t<ul class="dropdown-menu basemaps dropdown-menu-form pull-right" role="menu"></ul>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div id="basemapGallery"></div>\n\n\t\t\t\t\t\x3c!-- Expand factor --\x3e\n\t\t\t\t\t<div class="spinnerLabel">\n\t\t\t\t\t\t<label for="expandFactorSpinner">' +
                (null == (__t = expandFactorLabel) ? "" : __t) +
                '</label>\n\t\t\t\t\t\t<a class="locateBtnHelp" data-original-title="" title="">\n\t\t\t\t\t\t\t<img src="resources/tpl/builder/icons/builder-help.png" style="vertical-align: -5px;">\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class="input-group expandFactorSpinner">\n\t\t\t\t\t\t<input type="text" class="form-control input-small input-xs" id="expandFactorSpinner" value="2">\n\t\t\t\t\t\t<div class="input-group-btn-vertical">\n\t\t\t\t\t\t\t<button class="btn btn-default btn-xs"><i class="glyphicon glyphicon-chevron-up"></i></button>\n\t\t\t\t\t\t\t<button class="btn btn-default btn-xs"><i class="glyphicon glyphicon-chevron-down"></i></button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t'),
            (__p += "\n\t</div>\n</div>\n");
        return __p;
      };
    }
  ),
  define(
    "lib-build/css!storymaps/common/mapcontrols/overview/Overview",
    [],
    function () {}
  ),
  define(
    "storymaps/common/mapcontrols/overview/Overview",
    [
      "lib-build/tpl!./Overview",
      "lib-build/css!./Overview",
      "lib-build/css!../Common",
      "esri/dijit/OverviewMap",
      "esri/dijit/BasemapGallery",
      "esri/layers/ArcGISTiledMapServiceLayer",
      "esri/arcgis/utils",
      "dojo/Deferred",
      "dojo/dom",
      "dojo/on",
      "dojo/topic",
    ],
    function (e, t, n, i, a, r, o, s, l, p, c) {
      return function (t, n, a) {
        function r(e) {
          n
            .find(".overviewMapContainer")
            .html('<div class="overviewMap"></div>'),
            (p = new i(
              { map: t, visible: !0, color: "transparent", opacity: 1 },
              n.find(".overviewMap")[0]
            )),
            p.startup();
          var a = e ? e.header : u;
          a && n.find(".ovwHighlight").css("border", "3px solid " + a);
        }
        function o() {
          p && p.destroy(), (p = null);
        }
        function s() {
          n.find(".overviewContainer").toggleClass("collapsed"),
            n.find(".settingsOverlay").hide();
        }
        function l() {
          (d.openByDefault = n.find(".expandStartup").prop("checked")),
            c.publish("BUILDER_INCREMENT_COUNTER", 1);
        }
        var p = null,
          d = null,
          u = null,
          f = {
            isInBuilder: a,
            title: i18n.viewer.mapFromCommon.overview,
            overlayHeader: "",
            basemapGalleryBtnLabel: "",
            expandFactorLabel: "",
          };
        a &&
          ((f.settings = i18n.commonMapControls.common.settings),
          (f.openDefault = i18n.commonMapControls.common.openDefault),
          (f.basemapGalleryBtnLabel =
            i18n.commonMapControls.overview.basemapGalleryBtnLabel),
          (f.expandFactorLabel =
            i18n.commonMapControls.overview.expandFactorLabel)),
          n.append(e(f)),
          (this.toggle = function (e, t) {
            n.toggle(!!e), e && !p ? r(t) : e || o();
          }),
          (this.toggleExpanded = function (e) {
            n.find(".overviewContainer").toggleClass("collapsed", !e);
          }),
          (this.setColors = function (e) {
            (u = e.mapControls),
              n
                .find(".overviewContainer")
                .css({ backgroundColor: u, color: e.text }),
              n.find(".titleBtn").css("color", e.softText),
              n.find(".settingsGear, .collapseBtn").css("color", e.softBtn),
              n.find(".ovwHighlight").css("border", "3px solid " + u);
          }),
          (this.setSettings = function (e) {
            (d = e), n.find(".expandStartup").prop("checked", d.openByDefault);
          }),
          (function () {
            n.find(".titleBtn").click(s),
              n.find(".settingsGear").click(function () {
                n.find(".settingsOverlay").is(":visible")
                  ? n.off("mouseleave")
                  : n.mouseleave(function () {
                      n.find(".settingsOverlay").toggle(), n.off("mouseleave");
                    }),
                  n.find(".settingsOverlay").toggle();
              }),
              n.find(".expandStartup").change(l);
          })();
      };
    }
  ),
  define(
    "lib-build/tpl!storymaps/common/mapcontrols/geocoder/Geocoder",
    [],
    function () {
      return function (obj) {
        obj || (obj = {});
        var __t,
          __p = "",
          __e = _.escape;
        with (obj)
          __p +=
            '<div class="geocoderBtn">\n\t<div class="geocoderContainer"></div>\n</div>\n';
        return __p;
      };
    }
  ),
  define(
    "lib-build/css!storymaps/common/mapcontrols/geocoder/Geocoder",
    [],
    function () {}
  ),
  define(
    "storymaps/common/mapcontrols/geocoder/Geocoder",
    [
      "lib-build/tpl!./Geocoder",
      "lib-build/css!./Geocoder",
      "../../utils/CommonHelper",
    ],
    function (e, t, n) {
      return function (t, i, a, r) {
        function o() {
          var e = $(t.container).find(".geocoderBtn");
          s = n
            .createGeocoder({
              map: t,
              domNode: e.find(".geocoderContainer")[0],
              enableButtonMode: !0,
              searchOptions: r,
            })
            .then(function (t) {
              (p = t),
                e
                  .find(".esriGeocoderContainer input, .esriGeocoderSearch")
                  .attr("tabindex", "-1");
            });
        }
        var s,
          l = this,
          p = null;
        (this.toggle = function (e) {
          if (!app.isInBuilder) {
            var n = app.data.getWebAppData();
            if (
              n.getMapOptions &&
              (!n.getMapOptions().geocoder ||
                !n.getMapOptions().geocoder.enable)
            )
              return;
            if (n.getGeneralOptions && !n.getGeneralOptions().geocoder) return;
          }
          var i = $(t.container).find(".geocoderBtn");
          p || (s && !s.isRejected()) || o(),
            $(t.container).toggleClass("has-geocoder", e),
            i.toggle(e);
        }),
          (function () {
            $(t.container).find(".esriSimpleSlider").last().after(e({})),
              o(),
              l.toggle(a);
          })();
      };
    }
  ),
  define(
    "lib-build/css!storymaps/common/utils/SocialSharing",
    [],
    function () {}
  ),
  define(
    "lib-build/css!storymaps/common/ui/loadingIndicator/LoadingIndicator",
    [],
    function () {}
  ),
  define("lib-build/css!storymaps/tpl/ui/Common", [], function () {}),
  define("lib-build/css!storymaps/tpl/ui/mobile/Common", [], function () {}),
  define("lib-build/css!storymaps/tpl/ui/Responsive", [], function () {}),
  define(
    "lib-build/css!storymaps/tpl/ui/desktop/MultiTips",
    [],
    function () {}
  ),
  define(
    "storymaps/tpl/core/MainView",
    [
      "lib-build/css!./MainView",
      "./Config",
      "./Data",
      "./WebApplicationData",
      "./Helper",
      "./arcgis-html-sanitizer",
      "../ui/desktop/TestPanel",
      "../ui/desktop/TilePanel",
      "../ui/desktop/DetailPanel",
      "../ui/desktop/NavBar",
      "../ui/desktop/MultiTips",
      "storymaps/common/ui/autoplay/Autoplay",
      "../ui/mobile/MobileIntro",
      "../ui/mobile/MobileFeatureList",
      "storymaps/common/mapcontrols/command/MapCommand",
      "storymaps/common/mapcontrols/legend/Legend",
      "storymaps/common/mapcontrols/overview/Overview",
      "storymaps/common/mapcontrols/geocoder/Geocoder",
      "lib-build/css!storymaps/common/ui/Modal.css",
      "lib-build/css!storymaps/common/utils/SocialSharing.css",
      "lib-build/css!storymaps/common/ui/loadingIndicator/LoadingIndicator.css",
      "storymaps/common/utils/CommonHelper",
      "dojo/has",
      "dojo/topic",
      "dojo/on",
      "dojo/dom",
      "dojo/DeferredList",
      "dojo/_base/lang",
      "esri/arcgis/utils",
      "esri/geometry/Point",
      "esri/geometry/screenUtils",
      "esri/geometry/Extent",
      "esri/dijit/Search",
      "esri/SpatialReference",
      "esri/tasks/query",
      "esri/graphic",
      "esri/symbols/SimpleMarkerSymbol",
      "lib-build/css!../ui/Common",
      "lib-build/css!../ui/mobile/Common",
      "lib-build/css!../ui/Responsive",
      "lib-build/css!../ui/desktop/MultiTips",
    ],
    function (
      e,
      t,
      n,
      i,
      a,
      r,
      o,
      s,
      l,
      p,
      c,
      d,
      u,
      f,
      h,
      m,
      g,
      v,
      b,
      y,
      w,
      x,
      C,
      T,
      S,
      k,
      E,
      I,
      A,
      L,
      D,
      O,
      P,
      M,
      B,
      R,
      z
    ) {
      return function (e) {
        function o(e) {
          var t = e.itemInfo.itemData,
            n = t.applicationProperties,
            i = n && n.viewing && n.viewing.search,
            a = t.operationalLayers || [];
          if (i)
            return (
              i.layers.forEach(function (e) {
                _.find(a, function (t) {
                  if (t.id === e.id)
                    return (e.name = t.name), (e.title = t.title), !0;
                });
              }),
              i
            );
        }
        function m(e) {
          return (
            $.each(e, function (e, t) {
              t.attributes = app.sanitizer.sanitize(t.attributes);
            }),
            e
          );
        }
        function g(e) {
          var t,
            n = app.map.getLayer(
              app.data.getWebAppData().getShortlistLayerId()
            ),
            i = e.fields;
          if (
            ($.each(i, function (e, n) {
              "tab_name" == n.name.toLowerCase() && (t = !0);
            }),
            t)
          ) {
            var a = new z(),
              r = new esri.layers.GraphicsLayer({
                id: app.data.getWebAppData().getShortlistLayerId() + "_copy",
              });
            app.data.getWebAppItem().created > app.cfg.HTML_SANITIZER_DATE &&
              (e.features = m(e.features)),
              $.each(e.features, function (e, t) {
                var n = new R(t.geometry, a, t.attributes);
                r.add(n);
              }),
              (layerFound = !0),
              (r.fields = i),
              app.data.getWebAppData().setShortlistLayerId(r.id),
              app.map.removeLayer(n),
              app.map.addLayer(r),
              b(r);
          }
        }
        function b(e) {
          var t = [],
            n = [],
            a = e.fields,
            r = !1,
            o = !1,
            s = null;
          if (
            ($.each(a, function (e, t) {
              "name" == t.name.toLowerCase() && (r = !0),
                "pic_url" == t.name.toLowerCase() && (o = !0),
                s || "number" != t.name.toLowerCase() || (s = t.name),
                "placenumsl" == t.name.toLowerCase() && (s = t.name);
            }),
            !r || !o)
          ) {
            if (app.isInBuilder) {
              var l = i18n.builder.migration.migrationPattern.badData;
              (l +=
                '  (<a href="http://links.esri.com/storymaps/shortlist_layer_template" target="_blank" download="">' +
                i18n.builder.migration.migrationPattern.downloadTemplate +
                "</a>)"),
                $("#fatalError .error-msg").html(l),
                $("#fatalError").show();
            }
            return !1;
          }
          app.data.setShortlistLayerId(e.id),
            app.data.getWebAppData().setShortlistLayerId(e.id),
            e.setScaleRange(0, 0),
            e.on("mouse-over", X.layer_onMouseOver),
            e.on("mouse-out", X.layer_onMouseOut),
            e.on("click", X.layer_onClick);
          var p = [];
          $.each(app.map.graphicsLayerIds, function (t, n) {
            n !== e.id && p.push(app.map.getLayer(n));
          }),
            $.each(p, function (e, t) {
              t.on("click", D);
            }),
            app.isInBuilder &&
              (app.map.on("pan-start", function () {
                app.ui.mainView.mapIsPanning = !1;
              }),
              app.map.on("pan-end", function () {
                setTimeout(function () {
                  app.ui.mainView.mapIsPanning = !1;
                }, 800);
              }),
              app.map.on("zoom-start", function () {
                app.ui.mainView.mapIsZooming = !1;
              }),
              app.map.on("zoom-end", function () {
                setTimeout(function () {
                  app.ui.mainView.mapIsZooming = !1;
                }, 800);
              })),
            app.map.on("click", function (e) {
              X.mapIsPanning ||
                X.mapIsZooming ||
                (app.mapTips &&
                  (e.graphic
                    ? X.selected && (X.selected.hidden = !1)
                    : (app.mapTips.clean(!0),
                      X.selected &&
                        !app.isInBuilder &&
                        (X.selected.hidden = !0))));
            }),
            app.map.reorderLayer(e, app.map.graphicsLayerIds.length),
            $.each(e.graphics, function (i, a) {
              var r = e.graphics[i].attributes,
                o =
                  r[
                    $.grep(Object.keys(r), function (e) {
                      return "tab_name" == e.toLowerCase();
                    })[0]
                  ];
              if (o) {
                if (n.indexOf(o) < 0) {
                  n.push(o), t.push({ features: [], extent: null, title: o });
                  var l = t.length - 1;
                  t[l].id = l;
                  var p;
                  if (
                    app.data.getWebAppData().getTabs()[l] &&
                    app.data.getWebAppData().getTabs()[l].color
                  )
                    p = app.data.getWebAppData().getTabs()[l].color;
                  else {
                    var c = l;
                    c > 7 && (c %= 7);
                    var d = app.cfg.COLOR_ORDER.split(",");
                    p = $.grep(app.cfg.COLOR_SCHEMES, function (e) {
                      return e.name.toLowerCase() == $.trim(d[c].toLowerCase());
                    })[0].color;
                  }
                  (t[t.length - 1].color = p), app.data.setStory(l, o, p);
                }
                $.grep(t, function (e, n) {
                  e.title == o &&
                    ((a.attributes.tab_id = n),
                    (a.attributes.shortlist_id = t[n].features.length + 1),
                    (a.attributes.number = s
                      ? a.attributes[s]
                      : t[n].features.length + 1),
                    e.features.push(a));
                });
              }
            }),
            s &&
              ($.each(e.graphics, function (e, t) {
                t.attributes.number = t.attributes[s];
              }),
              e.graphics.sort(j));
          var c = {
            header: app.data.getWebAppData().getThemeOptions().headerColor,
            tabText: "#d8d8d8",
            tab: "#666",
            tabTextActive: "#fff",
            tabActive: app.data.getStory()[0].color,
            tabTextHover: "#fff",
            tabHover: "#666",
          };
          app.ui.navBar.init(t, 0, c, app.data.getWebAppData()),
            1 != t.length ||
              app.isInBuilder ||
              $(".entries").css("display", "none"),
            $.each(t, function (e, n) {
              X.buildLayer(n.features, n.color),
                app.ui.mobileIntro.fillList(e, n, t);
              var i = !1;
              1 == t.length &&
                ((i = !0),
                $("#navThemeLeft").addClass("hideButtons"),
                $("#navThemeRight").addClass("hideButtons")),
                app.ui.mobileFeatureList.addTheme(n, i, e);
            }),
            X.activateLayer(0, t),
            $("#basemapChooser").remove(),
            q.appInitComplete(i),
            app.data.getWebAppData().getIsExternalData() &&
              app.isWebMapFirstSave &&
              setTimeout(function () {
                q.displayApp();
              }, 0);
        }
        function y() {
          if (
            ($.isEmptyObject(app.data.getWebAppData().getThemeOptions()) &&
              app.data.getWebAppData().setDefaultThemeOptions(),
            app.data.getWebAppData().getIsExternalData())
          ) {
            var t = app.data.getWebMap().item.extent,
              n = new O(
                t[0][0],
                t[0][1],
                t[1][0],
                t[1][1],
                new M({ wkid: 4326 })
              );
            app.data.getWebAppData().setMapExtent(n);
          }
          if (
            (app.data.getWebAppData().getGeneralOptions().bookmarks &&
              app.maps[app.data.getWebAppData().getWebmap()].response.itemInfo
                .itemData.bookmarks &&
              app.maps[app.data.getWebAppData().getWebmap()].response.itemInfo
                .itemData.bookmarks.length &&
              app.ui.navBar.initBookmarks(),
            app.data.getWebAppData().getWebmap() &&
              (app.mapItem =
                app.maps[
                  app.data.getWebAppData().getWebmap()
                ].response.itemInfo),
            app.data.getWebAppData().getGeneralOptions().geocoder &&
              !app.isInBuilder &&
              app.maps[app.data.getWebAppData().getWebmap()].geocoder.toggle(
                !0
              ),
            app.map)
          ) {
            setTimeout(function () {
              if (app.data.getWebAppData().getMapExtent())
                setTimeout(function () {
                  var e = app.map.on("extent-change", function () {
                      e.remove(), q.displayApp();
                    }),
                    t = new O(app.data.getWebAppData().getMapExtent());
                  102100 != app.map.spatialReference.wkid &&
                  4326 != app.map.spatialReference.wkid
                    ? (t = esriConfig.defaults.geometryService.project(
                        [t],
                        app.map.spatialReference,
                        function (e) {
                          (t = e[0]), app.map.setExtent(t, !0);
                        }
                      ))
                    : app.map.setExtent(t, !0);
                }, 500);
              else if (
                app.data.getWebAppData().getTabs() &&
                app.data.getWebAppData().getTabs()[0] &&
                app.data.getWebAppData().getTabs()[0].extent
              ) {
                var e = new O(app.data.getWebAppData().getTabs()[0].extent);
                app.appCfg.mapExtentFit = !0;
                var t = app.map.on("extent-change", function () {
                  t.remove(), q.displayApp();
                });
                setTimeout(function () {
                  102100 != app.map.spatialReference.wkid &&
                  4326 != app.map.spatialReference.wkid
                    ? (e = esriConfig.defaults.geometryService.project(
                        [e],
                        app.map.spatialReference,
                        function (t) {
                          (e = t[0]), app.map.setExtent(e, !0);
                        }
                      ))
                    : app.map.setExtent(e, !0);
                }, 500);
              } else if (app.isDirectCreationFirstSave) {
                var t = app.map.on("extent-change", function () {
                  t.remove(), q.displayApp();
                });
                app.map.centerAndZoom([0, 0], 3);
              } else {
                var t = app.map.on("extent-change", function () {
                  t.remove(), q.displayApp();
                });
                setTimeout(function () {
                  app.map.setExtent(app.map._params.extent);
                }, 500);
              }
              app.map.on("extent-change", function () {
                setTimeout(function () {
                  app.data.getWebAppData().getGeneralOptions().filterByExtent &&
                    !app.isInBuilder &&
                    (app.ui.tilePanel.refreshList(),
                    app.ui.mobileFeatureList.refreshMobileList(),
                    app.ui.detailPanel.loaded &&
                      app.ui.detailPanel.refreshSlides());
                }, 0);
              });
            }, 750),
              app.ui.mobileIntro.setTitle();
            var a = app.data.getWebAppData().getThemeOptions().headerColor;
            $("#header").css("background-color", a),
              $("#mobileIntro").css("background-color", a),
              i.getTabs() &&
                $.each(i.getTabs(), function (e, t) {
                  app.data.setStory(e, t.title, t.color, t.extent);
                });
            var r = $.grep(app.map.graphicsLayerIds, function (e) {
              return e.split("_").slice(0, -1).join("_") ==
                i.getShortlistLayerId()
                ? e
                : e == i.getShortlistLayerId() && e;
            });
            app.data.setShortlistLayerId(r[0]),
              app.map.loaded
                ? w()
                : app.map.on("load", function () {
                    w();
                  }),
              S.once(app.map, "update-end", function () {
                w();
              }),
              e && e.storyDataReady();
          }
        }
        function w() {
          if (app.data.getWebAppData().getIsExternalData())
            return void X.processExternalData();
          app.map.resize(),
            app.map.on("click", function (e) {
              X.mapIsPanning ||
                X.mapIsZooming ||
                (app.mapTips &&
                  (e.graphic
                    ? X.selected && (X.selected.hidden = !1)
                    : (app.mapTips.clean(!0),
                      X.selected &&
                        !app.isInBuilder &&
                        (X.selected.hidden = !0))));
            });
          var e = [];
          if (
            ($.each(i.getTabs(), function (t, n) {
              e.push({
                features: [],
                title: n.title,
                color: n.color,
                extent: n.extent,
              });
            }),
            !app.data.getWebAppData().getIsExternalData())
          ) {
            var t = app.map.getLayer(
              app.data.getWebAppData().getShortlistLayerId()
            )
              ? app.data.getWebAppData().getShortlistLayerId()
              : app.data.getWebAppData().getShortlistLayerId() + "_0";
            app.data.getWebAppData().setShortlistLayerId(t);
          }
          if (app.data.getWebAppItem().created > app.cfg.HTML_SANITIZER_DATE) {
            app.map.getLayer(app.data.getWebAppData().getShortlistLayerId())
              .graphics;
            m(
              app.map.getLayer(app.data.getWebAppData().getShortlistLayerId())
                .graphics
            );
          }
          var n = app.map.getLayer(
            app.data.getWebAppData().getShortlistLayerId()
          );
          n.setScaleRange(0, 0),
            $.each(n.graphics, function (t, n) {
              if (
                (n.attributes.locationSet &&
                  n.attributes.name &&
                  "Unnamed Place" != n.attributes.name &&
                  n.attributes.pic_url &&
                  !app.isInBuilder &&
                  e[n.attributes.tab_id].features.push(n),
                app.data.getWebAppData().getIsExternalData())
              ) {
                var i = n.attributes,
                  a =
                    i[
                      $.grep(Object.keys(i), function (e) {
                        return "tab_name" == e.toLowerCase();
                      })[0]
                    ];
                $.grep(e, function (e, t) {
                  e.title == a && (n.attributes.tab_id = t);
                }),
                  e[n.attributes.tab_id].features.push(n),
                  (n.attributes.shortlist_id =
                    e[n.attributes.tab_id].features.length);
              } else app.isInBuilder && e[n.attributes.tab_id].features.push(n);
            }),
            n.on("click", X.layer_onClick),
            n.on("mouse-over", X.layer_onMouseOver),
            n.on("mouse-out", X.layer_onMouseOut);
          var a = [];
          if (
            ($.each(app.map.graphicsLayerIds, function (e, t) {
              t !== n.id && a.push(app.map.getLayer(t));
            }),
            $.each(a, function (e, t) {
              t.on("click", D);
            }),
            e.length > 1 || (app.isInBuilder && !app.isDirectCreationFirstSave))
          ) {
            if (
              ($("#divStrip").height("35px"),
              $.each(e, function (t, n) {
                app.ui.tilePanel.createTab(t, n),
                  app.ui.mobileIntro.fillList(t, n, e),
                  app.ui.mobileFeatureList.addTheme(n, null, t);
                var i = t;
                i > 7 && (i %= 7);
                var a = app.cfg.COLOR_ORDER.split(","),
                  r = $.grep(app.cfg.COLOR_SCHEMES, function (e) {
                    return e.name.toLowerCase() == $.trim(a[i].toLowerCase());
                  })[0],
                  o = n.color || r.color;
                if ((X.buildLayer(n.features.sort(j), o), app.isInBuilder)) {
                  app.data.setStory(t, n.title, r.color, n.extent);
                  var s = I.clone(app.data.getStory());
                  $.each(s, function (e, t) {
                    (t.title = n.title), (t.color = o);
                  }),
                    app.detailPanelBuilder.addDetailPanelSwiper(t);
                }
                app.data.setStory(t, n.title, n.color);
              }),
              !app.isDirectCreationFirstSave &&
                !app.data.getWebAppData().getIsExternalData())
            ) {
              var r = {
                header: app.data.getWebAppData().getThemeOptions().headerColor,
                tabText: "#d8d8d8",
                tab: "#666",
                tabTextActive: "#fff",
                tabActive: "#999",
                tabTextHover: "#fff",
                tabHover: "#666",
              };
              app.ui.navBar.init(e, 0, r, i), app.ui.tilePanel.setTabClick();
            }
          } else {
            if (e.length < 1) return !1;
            $.each(e, function (e, t) {
              app.ui.tilePanel.createTab(e, t),
                app.ui.mobileFeatureList.addTheme(t, !0, e);
              var n = app.cfg.COLOR_ORDER.split(","),
                i = $.grep(app.cfg.COLOR_SCHEMES, function (t) {
                  return t.name.toLowerCase() == $.trim(n[e].toLowerCase());
                })[0],
                a = t.color || i.color;
              if ((X.buildLayer(t.features.sort(j), a), app.isInBuilder)) {
                app.data.setStory(e, t.title, i.color);
                var r = I.clone(app.data.getStory());
                $.each(r, function (e, n) {
                  (n.title = t.title), (n.color = a);
                }),
                  app.detailPanelBuilder.addDetailPanelSwiper(e);
              }
            }),
              $(".tab").css("display", "none"),
              $("#mobileIntro").append("<br><hr></hr>"),
              $("#mobileIntro").append(
                '<ul id="mobileThemeList" class="mobileTileList">'
              );
            var o = $(
              '<li class="mobileTitleTheme" onclick="app.ui.mobileIntro.selectMobileTheme(0)">'
            ).append(
              '<div class="startButton"> ' +
                i18n.viewer.general.start +
                "</div>"
            );
            $("#mobileThemeList").append(o),
              $("#navThemeLeft").addClass("hideButtons"),
              $("#navThemeRight").addClass("hideButtons"),
              $("#nav-bar").show(),
              $("#nav-bar .entries").hide();
          }
          if (
            (q.handleWindowResize(),
            X.activateLayer(0),
            app.isInBuilder && app.detailPanelBuilder.buildSlides(),
            $(".entryLbl").css("outline-style", "none"),
            $("#zoomToggle").css("visibility", "visible"),
            $("#whiteOut").fadeOut("slow"),
            $("body").width() > 768)
          ) {
            var s = $("body").height(),
              l = 0;
            $(".mainViewAboveMap, .mainViewBelowMap").each(function (e, t) {
              var n = $(t);
              l += n.is(":visible") ? n.outerHeight() : 0;
            }),
              $("#paneLeft").height(
                s -
                  l -
                  25 -
                  $("#tabs").height() +
                  (app.embedBar && app.embedBar.initiated ? 26 : 0)
              ),
              $("#paneLeft").css("top", $("#divStrip").height()),
              $("#map").height($("#contentPanel").height()),
              $("#map").css("top", 0),
              $(".tilelist").height(
                $("#paneLeft").height() -
                  (app.isInBuilder &&
                  !app.data.getWebAppData().getIsExternalData()
                    ? 70
                    : 25) -
                  (app.embedBar && app.embedBar.initiated ? 5 : 0)
              );
          } else app.ui.mobileIntro.resizeMobileElements();
          q.appInitComplete(i),
            $("body").on("mousedown", "*", function (e) {
              ($(this).is(":focus") || $(this).is(e.target)) &&
                "none" == $(this).css("outline-style") &&
                ($(this)
                  .css("outline", "none")
                  .on("blur", function () {
                    $(this).off("blur").css("outline", "");
                  }),
                $(this).parents("#bookmarksToggle").length &&
                  $(this)
                    .parents("#bookmarksToggle")
                    .css("outline", "none")
                    .on("blur", function () {
                      $(this).off("blur").css("outline", "");
                    }));
            }),
            app.map.disableKeyboardNavigation(),
            $("body").keypress(function (e) {
              13 == e.which && $(document.activeElement).click(),
                43 == e.which &&
                  (app.map.setLevel(app.map.getLevel() + 1),
                  $("#zoomIn").focus(),
                  X.hideBookmarks()),
                45 == e.which &&
                  (app.map.setLevel(app.map.getLevel() - 1),
                  $("#zoomOut").focus(),
                  X.hideBookmarks());
            }),
            app.map.reorderLayer(
              app.data.getWebAppData().getShortlistLayerId(),
              app.map.graphicsLayerIds.length - 1
            );
        }
        function k(e, t) {
          var n = 4 * t,
            i = e.data;
          return [i[n], i[n + 1], i[n + 2], i[n + 3]];
        }
        function E(e) {
          var t = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
          e = e.replace(t, function (e, t, n, i) {
            return t + t + n + n + i + i;
          });
          var n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
          return n
            ? {
                r: parseInt(n[1], 16),
                g: parseInt(n[2], 16),
                b: parseInt(n[3], 16),
              }
            : null;
        }
        function L(e, t, n) {
          return new esri.symbol.PictureMarkerSymbol(
            t.toDataURL(),
            n.getWidth(),
            n.getHeight()
          ).setOffset(n.getOffsetX(), n.getOffsetY());
        }
        function D(e) {
          (X.selected = null), $("#mobileTitlePage").css("display", "none");
          var t = $(".esriPopup")[0];
          app.map.infoWindow.on("set-features", function () {
            app.ui.mainView.selected ||
              ($(".esriPopup").removeClass("app-hidden"), $(t).show());
          }),
            "small" != app.ui.mobileIntro.screenSize &&
              app.mapTips &&
              app.mapTips.clean();
        }
        function P() {
          function t() {
            if (
              ($.each(l, function (e, t) {
                "esriGeometryPoint" == t.geometryType &&
                  -1 == t.id.toLowerCase().indexOf("mapnotes") &&
                  t.graphics.length &&
                  a.push(t);
              }),
              a.length)
            ) {
              if (f) return;
              $.each(a, function (e, t) {
                var i = n.indexOf(t);
                n.splice(i, 1);
              }),
                e.openMigrationPopup(a, n),
                $("#loadingIndicator").hide(),
                clearTimeout(app.loadingTimeout),
                (app.loadingTimeout = null);
            } else {
              var t = {};
              if (
                (e.initPopupComplete(t),
                app.detailPanelBuilder.init(app.ui.mainView, e),
                app.data
                  .getWebAppData()
                  .setTitle(app.data.getResponse().itemInfo.item.title),
                app.data
                  .getWebAppData()
                  .setSubtitle(
                    app.data.getResponse().itemInfo.item.description
                  ),
                app.ui.headerDesktop.setTitleAndSubtitle(
                  app.data.getWebAppData().getTitle(),
                  app.data.getWebAppData().getSubtitle()
                ),
                app.data.getWebAppData().setDefaultThemeOptions(),
                app.data.getResponse().itemInfo.itemData.bookmarks &&
                  app.data.getResponse().itemInfo.itemData.bookmarks.length)
              ) {
                var r = {
                  extentMode: "default",
                  numberedIcons: !1,
                  filterByExtent: !0,
                  bookmarks: !0,
                  bookmarksAlias: "Zoom",
                };
                app.data.getWebAppData().setGeneralOptions(r),
                  app.ui.navBar.initBookmarks();
              }
              app.addFeatureBar.addLayer(),
                e.storyDataReady(),
                q.appInitComplete(i),
                q.displayApp();
            }
          }
          var n = [],
            a = [];
          $.each(app.map.graphicsLayerIds, function (e, t) {
            n.push(app.map.getLayer(t));
          });
          var r = {
            bookmarks: !1,
            bookmarksAlias: app.cfg.BOOKMARKS_ALIAS,
            extentMode: "customHome",
            filterByExtent: !0,
            numberedIcons: !1,
            geocoder: !1,
            locateButton: !1,
          };
          app.data.getWebAppData().setGeneralOptions(r),
            $.each(app.map.layerIds, function (e, t) {
              var i =
                app.data.getResponse().itemInfo.itemData.baseMap.baseMapLayers;
              $.grep(i, function (e) {
                return e.id == t;
              })[0] || n.push(app.map.getLayer(t));
            });
          var o,
            s,
            l = [],
            p = [],
            c = null;
          $.each(n, function (e, t) {
            (s = t.layerType ? t.layerType : t.type),
              "esriGeometryPoint" == t.geometryType &&
                -1 == t.id.toLowerCase().indexOf("mapnotes") &&
                t.graphics.length &&
                a.push(t),
              "esriGeometryPoint" != t.geometryType ||
                !t.url ||
                ("ArcGISFeatureLayer" !== s && "Feature Layer" !== s) ||
                ((o = !0), (c = t), l.push(t), p.push(e));
          });
          var d = !1,
            u = !1,
            f = !1;
          if (!d) {
            (d = !0), l.length;
            var h = !1;
            app.map.on("update-end", function () {
              h || ((h = !0), t());
            });
            var m = app.map.getLayer(
              app.data.getWebMap().itemData.baseMap.baseMapLayers[0].id
            );
            if (m.tileIndexUrl && m.loaded) {
              if (h) return;
              (h = !0), t();
            }
          }
          var g = app.data.getWebMap().item.extent,
            v = new O(
              g[0][0],
              g[0][1],
              g[1][0],
              g[1][1],
              new M({ wkid: 4326 })
            );
          app.map.setExtent(v, !0),
            (app.map._params.extent = new O(
              JSON.parse(JSON.stringify(app.map.extent.toJson()))
            )),
            app.data.getWebAppData().setMapExtent(v),
            $(".builder-share").toggleClass("disabled", !0),
            (app.isWebMapFirstSave = !0);
          var b = $.grep(l, function (e) {
            return "esriGeometryPoint" == e.geometryType;
          });
          if (a.length || b.length)
            l.length ||
              f ||
              ((f = !0),
              $.each(a, function (e, t) {
                var i = n.indexOf(t);
                n.splice(i, 1);
              }),
              e.openMigrationPopup(a, n),
              $("#loadingIndicator").hide(),
              clearTimeout(app.loadingTimeout),
              (app.loadingTimeout = null));
          else {
            var y = {};
            if (
              (e.initPopupComplete(y),
              app.detailPanelBuilder.init(app.ui.mainView, e),
              app.data
                .getWebAppData()
                .setTitle(app.data.getResponse().itemInfo.item.title),
              app.data
                .getWebAppData()
                .setSubtitle(app.data.getResponse().itemInfo.item.description),
              app.ui.headerDesktop.setTitleAndSubtitle(
                app.data.getWebAppData().getTitle(),
                app.data.getWebAppData().getSubtitle()
              ),
              parseInt(app.data.getWebMap().itemData.version) < 2.9 &&
                (app.data.getWebMap().itemData.version = "2.9"),
              (app.data.getWebMap().itemData.authoringApp =
                "StoryMapShortlist"),
              (app.data.getWebMap().itemData.authoringAppVersion = app.version),
              app.data.getResponse().itemInfo.itemData.bookmarks &&
                app.data.getResponse().itemInfo.itemData.bookmarks.length)
            ) {
              var w = {
                extentMode: "default",
                numberedIcons: !1,
                filterByExtent: !0,
                bookmarks: !0,
                bookmarksAlias: "Zoom",
              };
              app.data.getWebAppData().setGeneralOptions(w),
                app.ui.navBar.initBookmarks();
            }
            q.appInitComplete(i),
              setTimeout(
                function () {
                  u ||
                    (app.maps[app.data.getResponse().itemInfo.item.id] =
                      X.getMapConfig(app.data.getResponse())),
                    (u = !0);
                },
                app.data.getWebAppData().getAppGeocoders() ? 0 : 1e3
              );
          }
        }
        function N() {
          if (!i.isBlank() && i.getWebmap()) q.appInitComplete(i);
          else if (app.isInBuilder && app.data.getWebAppData().getWebmap()) {
            app.isGalleryCreation = !0;
            var t = X.loadWebmap(app.data.getWebAppData().getWebmap(), "map");
            t.then(function (n) {
              app.data.setResponse(n),
                (app.map = t.results[0].map),
                app.data.setWebMap(t.results[0].itemInfo),
                e.updateUI(),
                P();
            }),
              q.isProd() ? e.showInitPopup() : q.portalLogin().then();
          } else
            x.getAppID(q.isProd())
              ? app.data.userIsAppOwner()
                ? app.isInBuilder ||
                  setTimeout(function () {
                    x.switchToBuilder();
                  }, 1200)
                : q.initError("notConfiguredDesktop")
              : app.isInBuilder || q.initError("noLayer");
          if (e && !app.data.getWebAppData().getWebmap()) {
            $.isEmptyObject(app.data.getWebAppData().getThemeOptions()) &&
              app.data.getWebAppData().setDefaultThemeOptions();
            var t = X.loadWebmap(e.buildWebMap(), "map");
            t.then(function (n) {
              app.data.setResponse(n),
                (app.map = t.results[0].map),
                app.data.setWebMap(t.results[0].itemInfo);
              var a = n.itemInfo.item.id.length ? n.itemInfo.item.id : n.map.id;
              e.updateUI(),
                q.appInitComplete(i),
                !app.data.getWebAppData().getWebmap() &&
                  app.data.getWebAppItem().id &&
                  (app.data.getWebAppData().setWebmap(a),
                  setTimeout(
                    function () {
                      app.maps[a] = X.getMapConfig(n);
                    },
                    app.data.getWebAppData().getAppGeocoders() ? 0 : 1e3
                  )),
                e.storyDataReady(),
                q.displayApp();
            });
          }
        }
        function j(e, t) {
          var n = e.attributes.number || e.attributes.shortlist_id,
            i = t.attributes.number || t.attributes.shortlist_id;
          return window.chrome
            ? n < i
              ? -1
              : n == i
              ? -1
              : n > i
              ? 1
              : 0
            : n < i
            ? -1
            : n > i
            ? 1
            : 0;
        }
        function H() {
          var e = app.data.getWebAppData().getMapExtent()
            ? app.data.getWebAppData().getMapExtent()
            : app.data.getWebAppData().getTabs() &&
              app.data.getWebAppData().getTabs()[0].extent
            ? app.data.getWebAppData().getTabs()[0].extent
            : null;
          T.publish("CORE_UPDATE_EXTENT", new O(e));
        }
        function W(e, t, n, i) {
          var a = e,
            r = t,
            o = n,
            s = i;
          (this.getWidth = function () {
            return a;
          }),
            (this.getHeight = function () {
              return r;
            }),
            (this.getOffsetX = function () {
              return o;
            }),
            (this.getOffsetY = function () {
              return s;
            });
        }
        var F,
          U,
          G,
          q = null,
          V = new a(),
          X = this,
          Y = !1,
          K = 0,
          Q = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream,
          J = x.getUrlParams(),
          Z = null;
        (X.mapIsPanning = !1), (X.mapIsZooming = !1);
        var ee = 0,
          te = 0;
        (this.init = function (t) {
          if (((q = t), app.isInBuilder && C("ie") && C("ie") < 10))
            return (
              (i18n.viewer.errors.noBuilderIE = i18n.viewer.errors.noBuilderIE
                .replace("%VERSION%", 10)
                .replace("%UPGRADE%", i18n.viewer.errors.upgradeBrowser)),
              q.initError("noBuilderIE"),
              !1
            );
          var a = navigator.appVersion.indexOf("Edge") > 0;
          if (app.isInBuilder && a) return q.initError("noBuilderEdge"), !1;
          if (C("ie") && C("ie") <= 8)
            return (
              (i18n.viewer.errors.noViewerIE = i18n.viewer.errors.noViewerIE
                .replace("%VERSION%", 9)
                .replace("%UPGRADE%", i18n.viewer.errors.upgradeBrowser)),
              q.initError("noViewerIE"),
              !1
            );
          (app.data = new n()),
            (app.sanitizer = new r(
              {
                whiteList: {
                  b: [],
                  i: [],
                  u: [],
                  hr: [],
                  source: ["src", "type"],
                  iframe: [
                    "src",
                    "height",
                    "width",
                    "border",
                    "allowfullscreen",
                    "mozallowfullscreen",
                    "webkitallowfullscreen",
                    "frameborder",
                    "scrolling",
                    "allowtransparency",
                    "data-unload",
                  ],
                },
              },
              !0
            )),
            (G = document.createElement("canvas")),
            (F = G.getContext("2d")),
            (U = new Image()),
            (U.src = app.cfg.ICON_SRC),
            (U.onload = function () {
              F.drawImage(U, 0, 0),
                (F.font = G.width / 3.8 + "pt open_sanssemibold, sans-serif");
            }),
            (X.themeSelected = !1),
            (app.ui.mainView = this),
            (app.ui.tilePanel = new s(
              $("#contentPanel"),
              X,
              i,
              app.isInBuilder
            )),
            setTimeout(function () {
              (app.ui.detailPanel = new l(
                $("#paneLeft"),
                app.isInBuilder,
                i,
                X,
                i
              )),
                app.ui.detailPanel.init();
            }, 100),
            (app.ui.navBar = new p(
              $("#nav-bar"),
              app.isInBuilder,
              X.activateLayer,
              e
            )),
            app.ui.tilePanel.init(),
            (app.ui.mobileIntro = new u(
              $("body"),
              app.isInBuilder,
              function () {},
              X
            )),
            (app.ui.mobileFeatureList = new f(
              $("#contentPanel"),
              app.isInBuilder,
              function () {},
              X
            )),
            app.ui.mobileIntro.init(),
            app.ui.mobileFeatureList.init();
          var o = {},
            c = esri.urlToObject(document.location.href).query;
          return (
            c &&
              $.each(c, function (e, t) {
                o[e.toLowerCase()] = t;
              }),
            $("body").on("mousedown", "*", function (e) {
              ($(this).is(":focus") || $(this).is(e.target)) &&
                "none" == $(this).css("outline-style") &&
                $(this)
                  .css("outline", "none")
                  .on("blur", function () {
                    $(this).off("blur").css("outline", "");
                  });
            }),
            app.isInBuilder ||
              void 0 === J.autoplay ||
              "false" === J.autoplay ||
              ((app.ui.autoplay = new d($("#autoplay"), function () {
                var e = $(".tilelist li").length;
                return (
                  0 === te || ee != $(".entry.active").index()
                    ? ($(".tilelist li")[0].click(),
                      (te = 0),
                      te++,
                      (ee = $(".entry.active").index()))
                    : te <= e - 1
                    ? (te++,
                      $(
                        "#detailView" + ee + " .swiper-slide-active img"
                      ).click())
                    : ($(".entries .entry.visible").length == ee - 1
                        ? (ee = 0)
                        : ee++,
                      (te = 0),
                      $(".entries .entry")[ee].click()),
                  ee
                );
              })),
              T.subscribe("tpl-ready", function () {
                $("body").hasClass("mobile-view") || app.ui.autoplay.start();
              })),
            !0
          );
        }),
          (this.webAppConfigLoaded = function () {
            app.isGalleryCreation = !app.data.getWebAppData().getWebmap();
          }),
          (this.loadFirstWebmap = function (e) {
            return this.loadWebmap(e, $("#map")[0]);
          }),
          (this.loadWebmapFromData = function () {
            y();
          }),
          (this.loadWebmap = function (e, t, n) {
            console.log("tpl.core.MainView - loadWebMap - webmapId:", e);
            var i = new esri.dijit.Popup({ highlight: !1 }, dojo.create("div"));
            return A.createMap(e, t, {
              mapOptions: {
                slider: !0,
                autoResize: !1,
                showAttribution: !0,
                infoWindow: i,
                extent: n,
                wrapAround180: !1,
              },
              usePopupManager: !0,
              bingMapsKey: app.cfg.BING_MAPS_KEY,
              editable: !1,
              layerMixins: app.data.getAppProxies(),
            });
          }),
          (this.firstWebmapLoaded = function () {
            y();
          }),
          (this.startFromScratch = function () {
            N();
          }),
          (this.getMapConfig = function (e) {
            var t =
              !!app.data.getWebAppData().getGeneralOptions().geocoder &&
              app.data.getWebAppData().getGeneralOptions().geocoder;
            return {
              response: e,
              mapCommand: new h(
                e.map,
                H,
                q.zoomToDeviceLocation,
                app.data.getWebAppData().getGeneralOptions().locateButton
              ),
              geocoder: new v(e.map, app.isInBuilder, t, o(e)),
            };
          }),
          (this.processExternalData = function () {
            if (!app.data.getShortlistLayerId()) {
              var e = [];
              $.each(app.map.graphicsLayerIds, function (t, n) {
                var i = app.map.getLayer(n);
                i.graphics &&
                  "esriGeometryPoint" === i.geometryType &&
                  e.push(i);
              }),
                e.reverse(),
                app.data.getWebAppData().setShortlistLayerId(e[0].id);
              var t,
                n = [],
                i = [],
                a = null,
                r = !1;
              $.each(e, function (o, s) {
                if (
                  ((t = s.layerType ? s.layerType : s.type),
                  s.url && "Feature Layer" === t && !s.id.match(/^csv_/))
                ) {
                  (a = s), n.push(s.url), i.push(o);
                  var l = new B();
                  (l.where = "1=1"),
                    (l.outFields = ["*"]),
                    s.queryFeatures(l, function (e) {
                      e.features.length > 0 && g(e);
                    });
                } else if (s.graphics.length < 1 && s.visibleAtMapScale)
                  S.once(s, "update-end", function () {
                    if (!r) {
                      var t,
                        n = s.fields;
                      if (
                        ($.each(n, function (e, n) {
                          "tab_name" == n.name.toLowerCase() && (t = !0);
                        }),
                        !t && o == e.length - 1)
                      ) {
                        if (!app.isInBuilder) return;
                        var i = i18n.builder.migration.migrationPattern.badData;
                        return (
                          (i +=
                            '  (<a href="http://links.esri.com/storymaps/shortlist_layer_template" target="_blank" download="">' +
                            i18n.builder.migration.migrationPattern
                              .downloadTemplate +
                            "</a>)"),
                          $("#fatalError .error-msg").html(i),
                          void $("#fatalError").show()
                        );
                      }
                      if (t) {
                        var a = s.graphics,
                          l = s.fields;
                        app.map.removeLayer(s);
                        var p = new esri.layers.GraphicsLayer({
                          id:
                            app.data.getWebAppData().getShortlistLayerId() +
                            "_copy",
                        });
                        (r = !0),
                          app.data.getWebAppItem().created >
                            app.cfg.HTML_SANITIZER_DATE &&
                            (newLayerGraphics = m(a)),
                          (p.graphics = a),
                          (p.fields = l),
                          app.map.addLayer(p),
                          app.data.getWebAppData().setShortlistLayerId(p.id),
                          b(p);
                      }
                    }
                  }),
                    s.on("update-end", function () {}),
                    app.map.on("zoom-start", function () {
                      s.hide();
                    }),
                    app.map.on("zoom-end", function () {
                      s.show();
                    });
                else {
                  if (r) return;
                  var p,
                    c = s.fields;
                  if (
                    ($.each(c, function (e, t) {
                      "tab_name" == t.name.toLowerCase() && (p = !0);
                    }),
                    p)
                  ) {
                    var d = s.graphics,
                      u = s.fields;
                    app.map.removeLayer(s);
                    var f = new esri.layers.GraphicsLayer({
                      id:
                        app.data.getWebAppData().getShortlistLayerId() +
                        "_copy",
                    });
                    app.data.getWebAppItem().created >
                      app.cfg.HTML_SANITIZER_DATE && (d = m(d)),
                      (f.graphics = d),
                      (f.fields = u),
                      app.map.addLayer(f),
                      app.data.getWebAppData().setShortlistLayerId(f.id),
                      b(f),
                      (r = !0);
                  }
                  if (!p && o == e.length - 1) {
                    var h = i18n.builder.migration.migrationPattern.badData;
                    return (
                      (h +=
                        '  (<a href="http://links.esri.com/storymaps/shortlist_layer_template" target="_blank" download="">' +
                        i18n.builder.migration.migrationPattern
                          .downloadTemplate +
                        "</a>)"),
                      $("#fatalError .error-msg").html(h),
                      void $("#fatalError").show()
                    );
                  }
                }
              }),
                $("home-location-save-btn").remove();
            }
          }),
          (this.activateLayer = function (e, t) {
            T.publish("story-tab-navigation", e);
            var n = [];
            t && (Z = t);
            var a = app.map.getLayer(app.data.getShortlistLayerId());
            app.isInBuilder && app.detailPanelBuilder.checkTempLayer(),
              $.each(a.graphics, function (t, i) {
                var a = i.attributes,
                  r =
                    a[
                      $.grep(Object.keys(a), function (e) {
                        return "tab_name" == e.toLowerCase();
                      })[0]
                    ];
                if (
                  app.data.getWebAppData().getIsExternalData() ||
                  a.tab_id == e
                )
                  if (
                    app.data.getWebAppData().getIsExternalData() &&
                    r != app.data.getStory()[e].title
                  )
                    i.hide();
                  else if (app.data.getWebAppData().getIsExternalData())
                    if (app.isInBuilder) i.show(), n.push(i);
                    else {
                      var o =
                          a[
                            $.grep(Object.keys(a), function (e) {
                              return "name" == e.toLowerCase();
                            })[0]
                          ],
                        s =
                          a[
                            $.grep(Object.keys(a), function (e) {
                              return "name" == e.toLowerCase();
                            })[0]
                          ];
                      o && s && (i.show(), n.push(i));
                    }
                  else
                    !app.isInBuilder &&
                    i.attributes.locationSet &&
                    i.attributes.name &&
                    "Unnamed Place" != i.attributes.name &&
                    i.attributes.pic_url
                      ? (i.show(), n.push(i))
                      : app.isInBuilder
                      ? (n.push(i),
                        i.attributes.locationSet ? i.show() : i.hide())
                      : i.hide();
                else i.hide();
              });
            var r = new esri.layers.GraphicsLayer();
            r.graphics = n;
            var o = app.data.getStory()[e].color;
            if (
              ((r.color = o),
              (app.layerCurrent = r),
              (app.layerCurrent.color = app.data.getStory()[e].color),
              a.redraw(),
              app.ui.mobileFeatureList.setColor(),
              app.mapTips && app.mapTips.clean(!0),
              X.preSelection(),
              (X.selected = null),
              X.postSelection(),
              !$.isEmptyObject(app.cfg.TAB_SPECIFIC_SUPPORT_LAYERS))
            ) {
              var s = i.getSupportLayers(),
                l = "tab" + String(e + 1),
                p = app.cfg.TAB_SPECIFIC_SUPPORT_LAYERS[l];
              $.each(s, function (e, t) {
                p && p.indexOf(t.name) > -1
                  ? t.setVisibility(!0)
                  : t.setVisibility(!1);
              });
            }
            $(".detailContainer").hide(),
              app.ui.tilePanel.buildTilePanel(),
              app.ui.navBar.showEntryIndex(e),
              setTimeout(function () {
                x.addCSSRule(
                  ".nav-bar .entry.active > .entryLbl, \t\t\t\t\t\t.nav-bar .dropdown.active .dropdown-toggle { \t\t\t\t\t\t\tbackground-color: " +
                    app.data.getStory()[e].color +
                    " !important; \t\t\t\t\t\t}",
                  "NavBarActive"
                );
              }, 0),
              $("#contentPanel").css(
                "border-top-color",
                app.data.getStory()[e].color
              ),
              $(".detailHeader").css(
                "border-top-color",
                app.data.getStory()[e].color
              );
            var c = 0 === e ? 500 : 100;
            setTimeout(function () {
              (app.isInBuilder &&
                !app.data.getWebAppData().getIsExternalData()) ||
                app.ui.detailPanel.buildFeatureViews(Z);
            }, c),
              app.isInBuilder && !app.data.getWebAppData().getIsExternalData()
                ? app.addFeatureBar.updateLocatedFeatures()
                : app.ui.detailPanel.refreshSlides();
          }),
          (this.unselect = function () {
            X.preSelection(), (X.selected = null), X.postSelection();
          }),
          (this.preSelection = function () {
            X.selected &&
              X.selected.symbol &&
              X.selected.symbol.setWidth &&
              (X.selected.symbol.setWidth(X.lutIconSpecs.tiny.getWidth()),
              X.selected.symbol.setHeight(X.lutIconSpecs.tiny.getHeight()),
              X.selected.symbol.setOffset(
                X.lutIconSpecs.tiny.getOffsetX(),
                X.lutIconSpecs.tiny.getOffsetY()
              ),
              X.selected.draw(),
              app.mapTips && app.mapTips.clean(!0));
          }),
          (this.postSelection = function () {
            if (null == X.selected) app.map.infoWindow.hide();
            else {
              if (
                !X.selected.attributes.locationSet &&
                !app.isInBuilder &&
                !app.data.getWebAppData().getIsExternalData()
              )
                return;
              app.map.extent.contains(X.selected.geometry) ||
                (!X.selected.attributes.locationSet &&
                  !app.data.getWebAppData().getIsExternalData()) ||
                app.map.centerAt(X.selected.geometry),
                setTimeout(function () {
                  X.buildMapTips();
                }, 250),
                app.isInBuilder && !app.data.getWebAppData().getIsExternalData()
                  ? app.detailPanelBuilder.showSlide(
                      X.selected.attributes.shortlist_id
                    )
                  : Q
                  ? app.ui.detailPanel.buildSlide(X.selected)
                  : app.ui.detailPanel.showDetails(X.selected),
                app.ui.mobileIntro.hide(),
                app.ui.mobileFeatureList.setColor();
            }
          }),
          (this.buildMapTips = function (e) {
            setTimeout(function () {
              if (
                !X.selected ||
                !X.selected.attributes ||
                X.selected.hidden ||
                (!X.selected.attributes.locationSet &&
                  !app.data.getWebAppData().getIsExternalData())
              )
                return void (app.mapTips && app.mapTips.clean(!0));
              if (
                app.mapTips &&
                !app.map.extent.contains(X.selected.geometry) &&
                app.data.getWebAppData().getGeneralOptions().filterByExtent &&
                !app.isInBuilder
              )
                return void app.mapTips.clean(!0);
              if ($("body").hasClass("mobile-view"))
                return (
                  app.mapTips && app.mapTips.clean(!0),
                  void (X.selected && X.selectSymbol())
                );
              e && app.mapTips.clean(!0);
              var t = X.selected.attributes,
                n =
                  t[
                    $.grep(Object.keys(t), function (e) {
                      return "name" == e.toLowerCase();
                    })[0]
                  ];
              n || (X.selected.attributes.name = "Unnamed Place");
              var i = e || n;
              (app.mapTips = new c({
                map: app.map,
                content: i,
                selected:
                  X.selected && !0 !== X.selected.hidden ? X.selected : null,
                pointArray: [X.selected],
                labelDirection: "auto",
                backgroundColor: app.cfg.SELECTED_POPUP_BACKGROUND_COLOR,
                borderColor: app.cfg.SELECTED_POPUP_BORDER_COLOR,
                pointerColor: app.cfg.SELECTED_POPUP_ARROW_COLOR,
                textColor: "#ffffff",
                offsetTop: 44,
                topLeftNotAuthorizedArea: [40, 180],
                mapAuthorizedMinWidth: -1,
                mapAuthorizedWidth: -1,
                mapAuthorizedHeight: -1,
                visible: !0,
              })),
                X.selectSymbol();
            }, 100);
          }),
          (this.selectSymbol = function () {
            X.selected.symbol.width != X.lutIconSpecs.large.getWidth() &&
              (X.selected.symbol.setWidth(X.lutIconSpecs.large.getWidth()),
              X.selected.symbol.setHeight(X.lutIconSpecs.large.getHeight()),
              X.selected.symbol.setOffset(
                X.lutIconSpecs.large.getOffsetX(),
                X.lutIconSpecs.large.getOffsetY()
              ),
              X.selected.draw(),
              app.map
                .getLayer(app.data.getWebAppData().getShortlistLayerId())
                .redraw(),
              setTimeout(function () {
                try {
                  X.selected.getShape().moveToFront();
                } catch (e) {
                  console.log("problem with 'moveToFront()'...");
                }
              }, 10));
          }),
          (this.buildMapHoverTips = function (e, t) {
            if (
              app.mapTips &&
              ($("body").hasClass("mobile-view") ||
                (!t.attributes.locationSet &&
                  !app.data.getWebAppData().getIsExternalData()))
            )
              return void app.mapTips.clean(!0);
            var n = t == X.selected ? 44 : 33,
              i = t.attributes;
            i[
              $.grep(Object.keys(i), function (e) {
                return "name" == e.toLowerCase();
              })[0]
            ] || (t.attributes.name = "Unnamed Place"),
              (app.mapTips = new c({
                map: app.map,
                content: e,
                selected:
                  X.selected && !0 !== X.selected.hidden ? X.selected : null,
                pointArray: [t],
                labelDirection: "auto",
                backgroundColor: app.cfg.POPUP_BACKGROUND_COLOR,
                borderColor: app.cfg.POPUP_BORDER_COLOR,
                pointerColor: app.cfg.POPUP_ARROW_COLOR,
                textColor: "#ffffff",
                offsetTop: n,
                topLeftNotAuthorizedArea: [40, 180],
                mapAuthorizedMinWidth: -1,
                mapAuthorizedWidth: -1,
                mapAuthorizedHeight: -1,
                visible: !0,
              }));
          }),
          (this.buildMapSupportHoverTips = function (e, t) {
            if (app.mapTips && $("body").hasClass("mobile-view"))
              return void app.mapTips.clean(!0);
            app.mapTips = new c({
              map: app.map,
              content: e,
              selected:
                X.selected && !0 !== X.selected.hidden ? X.selected : null,
              pointArray: [t],
              labelDirection: "auto",
              backgroundColor: app.cfg.POPUP_BACKGROUND_COLOR,
              borderColor: app.cfg.POPUP_BORDER_COLOR,
              pointerColor: app.cfg.POPUP_ARROW_COLOR,
              textColor: "#ffffff",
              offsetTop: 5,
              topLeftNotAuthorizedArea: [40, 180],
              mapAuthorizedMinWidth: -1,
              mapAuthorizedWidth: -1,
              mapAuthorizedHeight: -1,
              visible: !0,
            });
          }),
          (this.moveGraphicToFront = function (e) {
            if (e) {
              var t = e.getDojoShape();
              t && t.moveToFront();
            }
          }),
          (this.buildLayer = function (e, t) {
            var n,
              a = X.lutIconSpecs.tiny,
              r = document.createElement("canvas");
            (r.width = U.width), (r.height = U.height);
            var o = r.getContext("2d");
            (o.font = r.width / 3.8 + "pt pt open_sanssemibold, sans-serif"),
              o.drawImage(G, 0, 0);
            var s = t;
            if (!n) {
              var l = o.getImageData(0, 0, G.width, G.height),
                p = k(l, 4804);
              if (p[0] != E(s).r || p[1] != E(s).g || p[2] != E(s).b) {
                for (var c = 0; c < l.data.length; c += 4)
                  l.data[c] == p[0] &&
                    l.data[c + 1] == p[1] &&
                    l.data[c + 2] == p[2] &&
                    ((l.data[c] = E(s).r),
                    (l.data[c + 1] = E(s).g),
                    (l.data[c + 2] = E(s).b));
                o.putImageData(l, 0, 0);
              }
              n = l;
            }
            $.each(e, function (e, t) {
              if (
                (e > 0 && o.putImageData(n, 0, 0),
                i.getGeneralOptions().numberedIcons)
              ) {
                var s = t.attributes.PLACENUMSL
                  ? t.attributes.PLACENUMSL
                  : t.attributes.number;
                (o.textAlign = "center"),
                  (o.fillStyle = "white"),
                  o.fillText(s, r.width / 3.2, r.height / 2);
              }
              t.setSymbol(L(e, r, a));
            }),
              app.map
                .getLayer(app.data.getWebAppData().getShortlistLayerId())
                .show();
          }),
          (this.layer_onClick = function (e) {
            if (
              !(
                $("body").hasClass("pickLocation") ||
                X.mapIsZooming ||
                X.mapIsPanning
              )
            ) {
              (Y = !0),
                X.preSelection(),
                (X.selected = null),
                (X.selected = e.graphic),
                X.postSelection(),
                $("#mobileTitlePage").css("display", "none");
              var t = $(".esriPopup");
              $(t).addClass("app-hidden"),
                setTimeout(function () {
                  Y = !1;
                }, 500),
                X.themeSelected || app.ui.mobileFeatureList.selectTheme(0),
                (X.themeSelected = !0);
            }
          }),
          (this.layer_onMouseOver = function (e) {
            if (
              !(
                Y ||
                $("body").hasClass("pickLocation") ||
                X.mapIsZooming ||
                X.mapIsPanning ||
                V.isMobile()
              )
            ) {
              app.map.setMapCursor("pointer");
              var t = e.graphic;
              app.map.toScreen(t.geometry);
              if (
                t != X.selected ||
                !0 === X.selected.hidden ||
                "block" != $("#header").css("display")
              ) {
                if (t == X.selected && !0 === X.selected.hidden) {
                  if (app.isInBuilder) return;
                } else
                  t.symbol.setWidth(X.lutIconSpecs.medium.getWidth()),
                    t.symbol.setHeight(X.lutIconSpecs.medium.getHeight()),
                    t.symbol.setOffset(
                      X.lutIconSpecs.medium.getOffsetX(),
                      X.lutIconSpecs.medium.getOffsetY()
                    ),
                    t.draw(),
                    V.isIE() || X.moveGraphicToFront(t);
                var n = t.attributes,
                  i =
                    n[
                      $.grep(Object.keys(n), function (e) {
                        return "name" == e.toLowerCase();
                      })[0]
                    ];
                X.buildMapHoverTips(i, t);
              }
            }
          }),
          (this.layer_onMouseOut = function (e) {
            if (
              !(
                $("body").hasClass("pickLocation") ||
                X.mapIsZooming ||
                X.mapIsPanning
              )
            ) {
              var t = e.graphic;
              (t == X.selected && app.isInBuilder) ||
                V.isMobile() ||
                (app.map.setMapCursor("default"),
                t != X.selected &&
                  (t.symbol.setWidth(X.lutIconSpecs.tiny.getWidth()),
                  t.symbol.setHeight(X.lutIconSpecs.tiny.getHeight()),
                  t.symbol.setOffset(
                    X.lutIconSpecs.tiny.getOffsetX(),
                    X.lutIconSpecs.tiny.getOffsetY()
                  ),
                  t.draw()),
                app.mapTips && app.mapTips.clean());
            }
          }),
          (this.updateUI = function () {}),
          (this.resize = function (e) {
            app.isInBuilder && (app.initScreenIsOpen = !0);
            var t = $(".entry.active").index();
            if (e.isMobileView)
              app.isInBuilder &&
                $("#mobileBuilderOverlay").attr(
                  "style",
                  "display: block !important"
                ),
                setTimeout(function () {
                  app.ui.mobileIntro.resizeMobileElements();
                }, 0),
                app.data.getStory()[t] &&
                  app.data.getStory()[t].color &&
                  ($(".detailHeader").css({
                    "border-top-width": "10px",
                    "border-top-style": "solid",
                    "border-top-color": app.data.getStory()[t].color,
                  }),
                  $("#contentPanel").css("border-top", "0px"),
                  $(".notNumbered").css("margin-top", "10px")),
                app.data.getWebAppData().getSettings().generalOptions &&
                  app.data.getWebAppData().getSettings().generalOptions
                    .bookmarks &&
                  $("#mobileBookmarksCon").show(),
                $("#header").height("0"),
                app.mapTips && app.mapTips.hide(),
                (K < 2 || "block" == $("#mobileIntro").css("display")) && H();
            else {
              app.isInBuilder &&
                "block" == $("#mobileBuilderOverlay").css("display") &&
                (app.addFeatureBar.loaded ||
                  app.data.getWebAppData().getIsExternalData()) &&
                $("#mobileBuilderOverlay").attr(
                  "style",
                  "display: none !important"
                ),
                (app.ui.mobileIntro.screenSize = "desktop"),
                $("#mobilePaneList").hide(),
                $("#navThemeLeft").css("visibility", "hidden"),
                $("#navThemeRight").css("visibility", "hidden"),
                $("#mobileBookmarksCon").hide(),
                $("#bookmarksDiv").css("max-height", $("#map").height() - 100),
                app.data.getStory()[t] &&
                  app.data.getStory()[t].color &&
                  ($("#contentPanel").css({
                    "border-top-width": "10px",
                    "border-top-style": "solid",
                    "border-top-color": app.data.getStory()[t].color,
                  }),
                  $(".detailHeader").css("border-top", "0px"),
                  $(".notNumbered").css("margin-top", "20px"));
              var n = $("body").height(),
                i = 0;
              if (
                ($(".mainViewAboveMap, .mainViewBelowMap").each(function (
                  e,
                  t
                ) {
                  var n = $(t);
                  i += n.is(":visible") ? n.outerHeight() : 0;
                }),
                $("#paneLeft").height(
                  n -
                    i -
                    25 -
                    $("#tabs").height() -
                    (app.embedBar && app.embedBar.initiated ? 26 : 0)
                ),
                !(
                  J.embed ||
                  "" === J.embed ||
                  app.cfg.embed ||
                  J.forceEmbed ||
                  app.indexCfg.forceEmbed
                ))
              ) {
                var a = app.data.getWebAppData().getHeader().compactSize
                  ? "60px"
                  : "110px";
                $("#header").height(a);
              }
              if (
                ($(".tilelist").height(
                  $("#paneLeft").height() -
                    (app.isInBuilder &&
                    !app.data.getWebAppData().getIsExternalData()
                      ? 70
                      : 25) +
                    (app.embedBar && app.embedBar.initiated ? 5 : 0)
                ),
                $(".tilelist").css(
                  "top",
                  app.isInBuilder &&
                    !app.data.getWebAppData().getIsExternalData()
                    ? 50
                    : 28
                ),
                $("#paneLeft .noFeature").width($("#paneLeft").width()),
                $("#paneLeft").width() == app.cfg.LEFT_PANE_WIDTH_TWO_COLUMN
                  ? $("#paneLeft .noFeatureText").css("margin-left", "20px")
                  : $("#paneLeft .noFeatureText").css("margin-left", "100px"),
                $("#map").height(
                  e.height -
                    10 +
                    (app.embedBar && app.embedBar.initiated ? -26 : 0)
                ),
                $("#map").css("top", 0),
                app.ui.navBar.resize(),
                app.ui.autoplay)
              ) {
                var r = $("#map").width() / 2 - $("#autoplay").width() / 2;
                $("#autoplay").css("left", r);
              }
              e.width <= app.cfg.TWO_COLUMN_THRESHOLD ||
              (e.width <= 1024 && e.height <= 768)
                ? (setTimeout(function () {
                    $("#mainStagePanel").width(
                      e.width - (app.cfg.LEFT_PANE_WIDTH_TWO_COLUMN + 16)
                    ),
                      $("#mainStagePanel").css(
                        "left",
                        app.cfg.LEFT_PANE_WIDTH_TWO_COLUMN + 16
                      ),
                      app.map && app.map.resize(),
                      X.selected &&
                        !app.map.extent.contains(X.selected.geometry) &&
                        app.mapTips &&
                        app.mapTips.clean(!0);
                  }, 0),
                  $("#paneLeft .noFeatureText").css("margin-left", "20px"),
                  app.ui.tilePanel.resize(app.cfg.LEFT_PANE_WIDTH_TWO_COLUMN),
                  app.isInBuilder &&
                  !app.data.getWebAppData().getIsExternalData()
                    ? app.detailPanelBuilder.resize()
                    : app.ui.detailPanel.resize())
                : e.width <= app.cfg.THREE_COLUMN_THRESHOLD &&
                  e.width >= app.cfg.TWO_COLUMN_THRESHOLD
                ? (setTimeout(function () {
                    $("#mainStagePanel").width(
                      e.width - (app.cfg.LEFT_PANE_WIDTH_THREE_COLUMN + 16)
                    ),
                      $("#mainStagePanel").css(
                        "left",
                        app.cfg.LEFT_PANE_WIDTH_THREE_COLUMN + 16
                      ),
                      app.map && app.map.resize();
                  }, 0),
                  $("#paneLeft .noFeatureText").css("margin-left", "100px"),
                  app.ui.tilePanel.resize(app.cfg.LEFT_PANE_WIDTH_THREE_COLUMN),
                  app.isInBuilder &&
                  !app.data.getWebAppData().getIsExternalData()
                    ? app.detailPanelBuilder.resize()
                    : app.ui.detailPanel.resize())
                : (setTimeout(function () {
                    $("#mainStagePanel").width(
                      e.width - (app.cfg.LEFT_PANE_WIDTH_FOUR_COLUMN + 16)
                    ),
                      $("#mainStagePanel").css(
                        "left",
                        app.cfg.LEFT_PANE_WIDTH_FOUR_COLUMN + 16
                      ),
                      app.map && app.map.resize();
                  }, 0),
                  $("#paneLeft .noFeatureText").css("margin-left", "170px"),
                  app.ui.tilePanel.resize(app.cfg.LEFT_PANE_WIDTH_FOUR_COLUMN),
                  app.isInBuilder &&
                  !app.data.getWebAppData().getIsExternalData()
                    ? app.detailPanelBuilder.resize()
                    : app.ui.detailPanel.resize());
            }
            K++;
          }),
          (this.setMapExtent = function (e, t) {
            return q.setMapExtent(e, t);
          }),
          (this.getLayoutExtent = function (e) {
            return e;
          }),
          (this.checkConfigFileIsOK = function () {
            return t.checkConfigFileIsOK();
          }),
          (this.appInitComplete = function () {
            this.updateUI(),
              q.cleanLoadingTimeout(),
              $(window).resize(),
              app.isGalleryCreation;
            var e =
              app.data.getWebAppData().isBlank() ||
              "private" == app.data.getWebAppItem().access;
            app.ui.headerDesktop &&
              app.ui.headerDesktop.toggleSocialBtnAppSharing(e),
              T.publish("tpl-ready");
          }),
          (this.onHashChange = function () {}),
          (this.lutIconSpecs = {
            tiny: new W(31, 34, 6, 13),
            medium: new W(34, 38, 7, 15),
            large: new W(44, 48, 9, 20),
          }),
          (this.prepareMobileViewSwitch = function () {}),
          (this.initLocalization = function () {});
      };
    }
  ),
  require([
    "storymaps/common/Core",
    "storymaps/common/ui/header/Desktop",
    "storymaps/tpl/core/MainView",
  ], function () {}),
  define("storymaps/tpl/BuildConfigViewer", function () {});
