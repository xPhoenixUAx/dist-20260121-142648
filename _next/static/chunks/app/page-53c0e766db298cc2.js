(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [974],
  {
    1831: (e, t, s) => {
      "use strict";
      function i(e) {
        return [].concat(e);
      }
      function n(e) {
        return e.startsWith(":");
      }
      function r(e) {
        return l(e) && ("*" === e || (e.length > 1 && ":>~.+*".includes(e.slice(0, 1))) || c(e));
      }
      function o(e, t) {
        return (l(t) || "number" == typeof t) && "--" !== e && !n(e) && !a(e);
      }
      function a(e) {
        return e.startsWith("@media");
      }
      s.d(t, {
        _: () => g,
        cx: () =>
          function e(...t) {
            return d(
              t.reduce(
                (t, s) => (
                  s instanceof Set
                    ? t.push(...s)
                    : "string" == typeof s
                      ? t.push(s)
                      : Array.isArray(s)
                        ? t.push(e(...s))
                        : "object" == typeof s &&
                          Object.entries(s).forEach(([e, s]) => {
                            s && t.push(e);
                          }),
                  t
                ),
                [],
              ),
              " ",
            ).trim();
          },
      });
      function l(e) {
        return e + "" === e;
      }
      function c(e) {
        return l(e) && (e.startsWith("&") || n(e));
      }
      function d(e, t = "") {
        return e.filter(Boolean).join(t);
      }
      function h(e, t) {
        let s = 0;
        if (0 === t.length) return s.toString();
        for (let e = 0; e < t.length; e++) (s = (s << 5) - s + t.charCodeAt(e)), (s &= s);
        return `${e ?? "cl"}_${s.toString(36)}`;
      }
      var u = class e {
        constructor(e, t, s, i) {
          (this.sheet = e),
            (this.property = t),
            (this.value = s),
            (this.selector = i),
            (this.property = t),
            (this.value = s),
            (this.joined = `${t}:${s}`);
          let n = this.selector.preconditions.concat(this.selector.postconditions);
          (this.hash = this.selector.hasConditions
            ? this.selector.scopeClassName
            : h(this.sheet.name, this.joined)),
            (this.key = d([this.joined, n, this.hash]));
        }
        toString() {
          let t = p(this.selector.preconditions, { right: this.hash });
          return (
            (t = p(this.selector.postconditions, { left: t })),
            `${t} {${e.genRule(this.property, this.value)}}`
          );
        }
        static genRule(e, t) {
          var s, i;
          return (
            (s = e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()),
            (i = "content" === e ? `"${t}"` : t),
            `${s}:${i};`
          );
        }
      };
      function p(e, { left: t = "", right: s = "" } = {}) {
        let i = e.reduce((e, t) => (n(t) ? e + t : c(t) ? e + t.slice(1) : d([e, t], " ")), t);
        return d([i, s ? `.${s}` : ""], " ");
      }
      var f = class e {
          constructor(e, t = null, { preconditions: s, postconditions: n } = {}) {
            (this.sheet = e),
              (this.preconditions = []),
              (this.scopeClassName = null),
              (this.scopeName = null),
              (this.postconditions = []),
              (this.preconditions = s ? i(s) : []),
              (this.postconditions = n ? i(n) : []),
              this.setScope(t);
          }
          setScope(e) {
            return (
              e &&
                (this.scopeClassName ||
                  ((this.scopeName = e),
                  (this.scopeClassName = h(this.sheet.name, e + this.sheet.count)))),
              this
            );
          }
          get hasConditions() {
            return this.preconditions.length > 0 || this.postconditions.length > 0;
          }
          addScope(t) {
            return new e(this.sheet, t, {
              preconditions: this.preconditions,
              postconditions: this.postconditions,
            });
          }
          addPrecondition(t) {
            return new e(this.sheet, this.scopeClassName, {
              postconditions: this.postconditions,
              preconditions: this.preconditions.concat(t),
            });
          }
          addPostcondition(t) {
            return new e(this.sheet, this.scopeClassName, {
              preconditions: this.preconditions,
              postconditions: this.postconditions.concat(t),
            });
          }
          createRule(e, t) {
            return new u(this.sheet, e, t, this);
          }
        },
        m = class {
          constructor(e, t) {
            (this.name = e),
              (this.rootNode = t),
              (this.storedStyles = {}),
              (this.storedClasses = {}),
              (this.style = ""),
              (this.count = 0),
              (this.id = `flairup-${e}`),
              (this.styleTag = this.createStyleTag());
          }
          getStyle() {
            return this.style;
          }
          append(e) {
            var t;
            this.style =
              ((t = this.style),
              t
                ? `${t}
${e}`
                : e);
          }
          apply() {
            this.count++, this.styleTag && (this.styleTag.innerHTML = this.style);
          }
          isApplied() {
            return !!this.styleTag;
          }
          createStyleTag() {
            if ("undefined" == typeof document || this.isApplied() || null === this.rootNode)
              return this.styleTag;
            let e = document.createElement("style");
            return (
              (e.type = "text/css"),
              (e.id = this.id),
              (this.rootNode ?? document.head).appendChild(e),
              e
            );
          }
          addRule(e) {
            let t = this.storedClasses[e.key];
            return l(t)
              ? t
              : ((this.storedClasses[e.key] = e.hash),
                (this.storedStyles[e.hash] = [e.property, e.value]),
                this.append(e.toString()),
                e.hash);
          }
        };
      function y(e, t) {
        for (let s in e) t(s.trim(), e[s]);
      }
      function g(e, t) {
        let s = new m(e, t);
        return {
          create: function (e) {
            let t = {};
            return (
              (function e(t, s, i) {
                let n = [];
                return (
                  y(s, (o, a) => {
                    if (r(o)) return e(t, a, i.addPrecondition(o)).forEach((e) => n.push(e));
                    n.push([o, s[o], i.addScope(o)]);
                  }),
                  n
                );
              })(s, e, new f(s)).forEach(([e, n, l]) => {
                (function e(t, s, n) {
                  let l = new Set();
                  return (
                    y(s, (s, c) => {
                      let d = [];
                      if (r(s)) d = e(t, c, n.addPostcondition(s));
                      else if ("." === s) d = i(c);
                      else if (a(s))
                        d = (function (t, s, i, n) {
                          t.append(i + " {");
                          let r = e(t, s, n);
                          return t.append("}"), r;
                        })(t, c, s, n);
                      else if ("--" === s)
                        d = (function (t, s, i) {
                          let n = new Set(),
                            r = [];
                          if (
                            (y(s, (s, a) => {
                              if (o(s, a)) return void r.push(u.genRule(s, a));
                              N(e(t, a ?? {}, i), n);
                            }),
                            !i.scopeClassName)
                          )
                            return n;
                          if (r.length) {
                            let e = r.join(" ");
                            t.append(`${p(i.preconditions, { right: i.scopeClassName })} {${e}}`);
                          }
                          return n.add(i.scopeClassName), n;
                        })(t, c, n);
                      else if (o(s, c)) {
                        let e = n.createRule(s, c);
                        t.addRule(e), l.add(e.hash);
                      }
                      return N(d, l);
                    }),
                    l
                  );
                })(s, n, l).forEach((s) => {
                  var i, n;
                  (i = e), (n = s), (t[i] = t[i] ?? new Set()), t[i].add(n);
                });
              }),
              s.apply(),
              t
            );
          },
          getStyle: s.getStyle.bind(s),
          isApplied: s.isApplied.bind(s),
        };
      }
      function N(e, t) {
        return e.forEach((e) => t.add(e)), t;
      }
    },
    2109: (e, t, s) => {
      "use strict";
      s.d(t, { EmojiIcon: () => r });
      var i = s(5155),
        n = s(6407);
      function r(e) {
        let { unified: t, label: s, size: r = 20, className: o } = e,
          a = ["inline-flex items-center justify-center leading-none", o].filter(Boolean).join(" ");
        return (0, i.jsx)("span", {
          className: a,
          role: "img",
          "aria-label": s,
          title: s,
          children: (0, i.jsx)(n.zT, { unified: t, emojiStyle: n.Ai.TWITTER, size: r }),
        });
      }
    },
    2128: (e, t, s) => {
      Promise.resolve().then(s.t.bind(s, 2619, 23)),
        Promise.resolve().then(s.t.bind(s, 1356, 23)),
        Promise.resolve().then(s.bind(s, 2109)),
        Promise.resolve().then(s.bind(s, 7071));
    },
    4269: (e, t, s) => {
      "use strict";
      s.d(t, { cn: () => r });
      var i = s(2821),
        n = s(5889);
      function r() {
        for (var e = arguments.length, t = Array(e), s = 0; s < e; s++) t[s] = arguments[s];
        return (0, n.QP)((0, i.$)(t));
      }
    },
    7071: (e, t, s) => {
      "use strict";
      s.d(t, { Avatar: () => w, AvatarFallback: () => S });
      var i = s(5155),
        n = s(2115),
        r = s(3468),
        o = s(222),
        a = s(4129),
        l = s(8142),
        c = "Avatar",
        [d, h] = (0, r.A)(c),
        [u, p] = d(c),
        f = n.forwardRef((e, t) => {
          let { __scopeAvatar: s, ...r } = e,
            [o, a] = n.useState("idle");
          return (0, i.jsx)(u, {
            scope: s,
            imageLoadingStatus: o,
            onImageLoadingStatusChange: a,
            children: (0, i.jsx)(l.sG.span, { ...r, ref: t }),
          });
        });
      f.displayName = c;
      var m = "AvatarImage",
        y = n.forwardRef((e, t) => {
          let { __scopeAvatar: s, src: r, onLoadingStatusChange: c = () => {}, ...d } = e,
            h = p(m, s),
            u = (function (e, t) {
              let [s, i] = n.useState("idle");
              return (
                (0, a.N)(() => {
                  if (!e) return void i("error");
                  let s = !0,
                    n = new window.Image(),
                    r = (e) => () => {
                      s && i(e);
                    };
                  return (
                    i("loading"),
                    (n.onload = r("loaded")),
                    (n.onerror = r("error")),
                    (n.src = e),
                    t && (n.referrerPolicy = t),
                    () => {
                      s = !1;
                    }
                  );
                }, [e, t]),
                s
              );
            })(r, d.referrerPolicy),
            f = (0, o.c)((e) => {
              c(e), h.onImageLoadingStatusChange(e);
            });
          return (
            (0, a.N)(() => {
              "idle" !== u && f(u);
            }, [u, f]),
            "loaded" === u ? (0, i.jsx)(l.sG.img, { ...d, ref: t, src: r }) : null
          );
        });
      y.displayName = m;
      var g = "AvatarFallback",
        N = n.forwardRef((e, t) => {
          let { __scopeAvatar: s, delayMs: r, ...o } = e,
            a = p(g, s),
            [c, d] = n.useState(void 0 === r);
          return (
            n.useEffect(() => {
              if (void 0 !== r) {
                let e = window.setTimeout(() => d(!0), r);
                return () => window.clearTimeout(e);
              }
            }, [r]),
            c && "loaded" !== a.imageLoadingStatus ? (0, i.jsx)(l.sG.span, { ...o, ref: t }) : null
          );
        });
      N.displayName = g;
      var v = s(4269);
      let w = n.forwardRef((e, t) => {
        let { className: s, ...n } = e;
        return (0, i.jsx)(f, {
          ref: t,
          className: (0, v.cn)("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", s),
          ...n,
        });
      });
      (w.displayName = f.displayName),
        (n.forwardRef((e, t) => {
          let { className: s, ...n } = e;
          return (0, i.jsx)(y, {
            ref: t,
            className: (0, v.cn)("aspect-square h-full w-full", s),
            ...n,
          });
        }).displayName = y.displayName);
      let S = n.forwardRef((e, t) => {
        let { className: s, ...n } = e;
        return (0, i.jsx)(N, {
          ref: t,
          className: (0, v.cn)(
            "flex h-full w-full items-center justify-center rounded-full bg-muted",
            s,
          ),
          ...n,
        });
      });
      S.displayName = N.displayName;
    },
  },
  (e) => {
    e.O(0, [666, 619, 58, 356, 441, 255, 358], () => e((e.s = 2128))), (_N_E = e.O());
  },
]);
