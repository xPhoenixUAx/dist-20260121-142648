"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [560],
  {
    574: (e, t, n) => {
      n.d(t, { UC: () => Z, B8: () => z, bL: () => H, l9: () => q });
      var r = n(2115),
        o = n(2556),
        i = n(3468),
        s = n(8625),
        a = n(4446),
        l = n(8946),
        u = n(8142),
        c = n(222),
        d = n(3558),
        f = n(6218),
        p = n(5155),
        h = "rovingFocusGroup.onEntryFocus",
        m = { bubbles: !1, cancelable: !0 },
        v = "RovingFocusGroup",
        [y, g, w] = (0, s.N)(v),
        [N, b] = (0, i.A)(v, [w]),
        [C, R] = N(v),
        S = r.forwardRef((e, t) =>
          (0, p.jsx)(y.Provider, {
            scope: e.__scopeRovingFocusGroup,
            children: (0, p.jsx)(y.Slot, {
              scope: e.__scopeRovingFocusGroup,
              children: (0, p.jsx)(A, { ...e, ref: t }),
            }),
          }),
        );
      S.displayName = v;
      var A = r.forwardRef((e, t) => {
          let {
              __scopeRovingFocusGroup: n,
              orientation: i,
              loop: s = !1,
              dir: l,
              currentTabStopId: v,
              defaultCurrentTabStopId: y,
              onCurrentTabStopIdChange: w,
              onEntryFocus: N,
              preventScrollOnEntryFocus: b = !1,
              ...R
            } = e,
            S = r.useRef(null),
            A = (0, a.s)(t, S),
            E = (0, f.jH)(l),
            [T = null, j] = (0, d.i)({ prop: v, defaultProp: y, onChange: w }),
            [I, M] = r.useState(!1),
            D = (0, c.c)(N),
            F = g(n),
            O = r.useRef(!1),
            [P, $] = r.useState(0);
          return (
            r.useEffect(() => {
              let e = S.current;
              if (e) return e.addEventListener(h, D), () => e.removeEventListener(h, D);
            }, [D]),
            (0, p.jsx)(C, {
              scope: n,
              orientation: i,
              dir: E,
              loop: s,
              currentTabStopId: T,
              onItemFocus: r.useCallback((e) => j(e), [j]),
              onItemShiftTab: r.useCallback(() => M(!0), []),
              onFocusableItemAdd: r.useCallback(() => $((e) => e + 1), []),
              onFocusableItemRemove: r.useCallback(() => $((e) => e - 1), []),
              children: (0, p.jsx)(u.sG.div, {
                tabIndex: I || 0 === P ? -1 : 0,
                "data-orientation": i,
                ...R,
                ref: A,
                style: { outline: "none", ...e.style },
                onMouseDown: (0, o.m)(e.onMouseDown, () => {
                  O.current = !0;
                }),
                onFocus: (0, o.m)(e.onFocus, (e) => {
                  let t = !O.current;
                  if (e.target === e.currentTarget && t && !I) {
                    let t = new CustomEvent(h, m);
                    if ((e.currentTarget.dispatchEvent(t), !t.defaultPrevented)) {
                      let e = F().filter((e) => e.focusable);
                      x(
                        [e.find((e) => e.active), e.find((e) => e.id === T), ...e]
                          .filter(Boolean)
                          .map((e) => e.ref.current),
                        b,
                      );
                    }
                  }
                  O.current = !1;
                }),
                onBlur: (0, o.m)(e.onBlur, () => M(!1)),
              }),
            })
          );
        }),
        E = "RovingFocusGroupItem",
        T = r.forwardRef((e, t) => {
          let {
              __scopeRovingFocusGroup: n,
              focusable: i = !0,
              active: s = !1,
              tabStopId: a,
              ...c
            } = e,
            d = (0, l.B)(),
            f = a || d,
            h = R(E, n),
            m = h.currentTabStopId === f,
            v = g(n),
            { onFocusableItemAdd: w, onFocusableItemRemove: N } = h;
          return (
            r.useEffect(() => {
              if (i) return w(), () => N();
            }, [i, w, N]),
            (0, p.jsx)(y.ItemSlot, {
              scope: n,
              id: f,
              focusable: i,
              active: s,
              children: (0, p.jsx)(u.sG.span, {
                tabIndex: m ? 0 : -1,
                "data-orientation": h.orientation,
                ...c,
                ref: t,
                onMouseDown: (0, o.m)(e.onMouseDown, (e) => {
                  i ? h.onItemFocus(f) : e.preventDefault();
                }),
                onFocus: (0, o.m)(e.onFocus, () => h.onItemFocus(f)),
                onKeyDown: (0, o.m)(e.onKeyDown, (e) => {
                  if ("Tab" === e.key && e.shiftKey) return void h.onItemShiftTab();
                  if (e.target !== e.currentTarget) return;
                  let t = (function (e, t, n) {
                    var r;
                    let o =
                      ((r = e.key),
                      "rtl" !== n
                        ? r
                        : "ArrowLeft" === r
                          ? "ArrowRight"
                          : "ArrowRight" === r
                            ? "ArrowLeft"
                            : r);
                    if (
                      !("vertical" === t && ["ArrowLeft", "ArrowRight"].includes(o)) &&
                      !("horizontal" === t && ["ArrowUp", "ArrowDown"].includes(o))
                    )
                      return j[o];
                  })(e, h.orientation, h.dir);
                  if (void 0 !== t) {
                    if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
                    e.preventDefault();
                    let n = v()
                      .filter((e) => e.focusable)
                      .map((e) => e.ref.current);
                    if ("last" === t) n.reverse();
                    else if ("prev" === t || "next" === t) {
                      "prev" === t && n.reverse();
                      let r = n.indexOf(e.currentTarget);
                      n = h.loop
                        ? (function (e, t) {
                            return e.map((n, r) => e[(t + r) % e.length]);
                          })(n, r + 1)
                        : n.slice(r + 1);
                    }
                    setTimeout(() => x(n));
                  }
                }),
              }),
            })
          );
        });
      T.displayName = E;
      var j = {
        ArrowLeft: "prev",
        ArrowUp: "prev",
        ArrowRight: "next",
        ArrowDown: "next",
        PageUp: "first",
        Home: "first",
        PageDown: "last",
        End: "last",
      };
      function x(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = document.activeElement;
        for (let r of e)
          if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
      }
      var I = n(6842),
        M = "Tabs",
        [D, F] = (0, i.A)(M, [b]),
        O = b(),
        [P, $] = D(M),
        k = r.forwardRef((e, t) => {
          let {
              __scopeTabs: n,
              value: r,
              onValueChange: o,
              defaultValue: i,
              orientation: s = "horizontal",
              dir: a,
              activationMode: c = "automatic",
              ...h
            } = e,
            m = (0, f.jH)(a),
            [v, y] = (0, d.i)({ prop: r, onChange: o, defaultProp: i });
          return (0, p.jsx)(P, {
            scope: n,
            baseId: (0, l.B)(),
            value: v,
            onValueChange: y,
            orientation: s,
            dir: m,
            activationMode: c,
            children: (0, p.jsx)(u.sG.div, { dir: m, "data-orientation": s, ...h, ref: t }),
          });
        });
      k.displayName = M;
      var L = "TabsList",
        U = r.forwardRef((e, t) => {
          let { __scopeTabs: n, loop: r = !0, ...o } = e,
            i = $(L, n),
            s = O(n);
          return (0, p.jsx)(S, {
            asChild: !0,
            ...s,
            orientation: i.orientation,
            dir: i.dir,
            loop: r,
            children: (0, p.jsx)(u.sG.div, {
              role: "tablist",
              "aria-orientation": i.orientation,
              ...o,
              ref: t,
            }),
          });
        });
      U.displayName = L;
      var _ = "TabsTrigger",
        G = r.forwardRef((e, t) => {
          let { __scopeTabs: n, value: r, disabled: i = !1, ...s } = e,
            a = $(_, n),
            l = O(n),
            c = B(a.baseId, r),
            d = V(a.baseId, r),
            f = r === a.value;
          return (0, p.jsx)(T, {
            asChild: !0,
            ...l,
            focusable: !i,
            active: f,
            children: (0, p.jsx)(u.sG.button, {
              type: "button",
              role: "tab",
              "aria-selected": f,
              "aria-controls": d,
              "data-state": f ? "active" : "inactive",
              "data-disabled": i ? "" : void 0,
              disabled: i,
              id: c,
              ...s,
              ref: t,
              onMouseDown: (0, o.m)(e.onMouseDown, (e) => {
                i || 0 !== e.button || !1 !== e.ctrlKey ? e.preventDefault() : a.onValueChange(r);
              }),
              onKeyDown: (0, o.m)(e.onKeyDown, (e) => {
                [" ", "Enter"].includes(e.key) && a.onValueChange(r);
              }),
              onFocus: (0, o.m)(e.onFocus, () => {
                let e = "manual" !== a.activationMode;
                f || i || !e || a.onValueChange(r);
              }),
            }),
          });
        });
      G.displayName = _;
      var W = "TabsContent",
        K = r.forwardRef((e, t) => {
          let { __scopeTabs: n, value: o, forceMount: i, children: s, ...a } = e,
            l = $(W, n),
            c = B(l.baseId, o),
            d = V(l.baseId, o),
            f = o === l.value,
            h = r.useRef(f);
          return (
            r.useEffect(() => {
              let e = requestAnimationFrame(() => (h.current = !1));
              return () => cancelAnimationFrame(e);
            }, []),
            (0, p.jsx)(I.C, {
              present: i || f,
              children: (n) => {
                let { present: r } = n;
                return (0, p.jsx)(u.sG.div, {
                  "data-state": f ? "active" : "inactive",
                  "data-orientation": l.orientation,
                  role: "tabpanel",
                  "aria-labelledby": c,
                  hidden: !r,
                  id: d,
                  tabIndex: 0,
                  ...a,
                  ref: t,
                  style: { ...e.style, animationDuration: h.current ? "0s" : void 0 },
                  children: r && s,
                });
              },
            })
          );
        });
      function B(e, t) {
        return "".concat(e, "-trigger-").concat(t);
      }
      function V(e, t) {
        return "".concat(e, "-content-").concat(t);
      }
      K.displayName = W;
      var H = k,
        z = U,
        q = G,
        Z = K;
    },
    1831: (e, t, n) => {
      function r(e) {
        return [].concat(e);
      }
      function o(e) {
        return e.startsWith(":");
      }
      function i(e) {
        return l(e) && ("*" === e || (e.length > 1 && ":>~.+*".includes(e.slice(0, 1))) || u(e));
      }
      function s(e, t) {
        return (l(t) || "number" == typeof t) && "--" !== e && !o(e) && !a(e);
      }
      function a(e) {
        return e.startsWith("@media");
      }
      n.d(t, {
        _: () => y,
        cx: () =>
          function e(...t) {
            return c(
              t.reduce(
                (t, n) => (
                  n instanceof Set
                    ? t.push(...n)
                    : "string" == typeof n
                      ? t.push(n)
                      : Array.isArray(n)
                        ? t.push(e(...n))
                        : "object" == typeof n &&
                          Object.entries(n).forEach(([e, n]) => {
                            n && t.push(e);
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
      function u(e) {
        return l(e) && (e.startsWith("&") || o(e));
      }
      function c(e, t = "") {
        return e.filter(Boolean).join(t);
      }
      function d(e, t) {
        let n = 0;
        if (0 === t.length) return n.toString();
        for (let e = 0; e < t.length; e++) (n = (n << 5) - n + t.charCodeAt(e)), (n &= n);
        return `${e ?? "cl"}_${n.toString(36)}`;
      }
      var f = class e {
        constructor(e, t, n, r) {
          (this.sheet = e),
            (this.property = t),
            (this.value = n),
            (this.selector = r),
            (this.property = t),
            (this.value = n),
            (this.joined = `${t}:${n}`);
          let o = this.selector.preconditions.concat(this.selector.postconditions);
          (this.hash = this.selector.hasConditions
            ? this.selector.scopeClassName
            : d(this.sheet.name, this.joined)),
            (this.key = c([this.joined, o, this.hash]));
        }
        toString() {
          let t = p(this.selector.preconditions, { right: this.hash });
          return (
            (t = p(this.selector.postconditions, { left: t })),
            `${t} {${e.genRule(this.property, this.value)}}`
          );
        }
        static genRule(e, t) {
          var n, r;
          return (
            (n = e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()),
            (r = "content" === e ? `"${t}"` : t),
            `${n}:${r};`
          );
        }
      };
      function p(e, { left: t = "", right: n = "" } = {}) {
        let r = e.reduce((e, t) => (o(t) ? e + t : u(t) ? e + t.slice(1) : c([e, t], " ")), t);
        return c([r, n ? `.${n}` : ""], " ");
      }
      var h = class e {
          constructor(e, t = null, { preconditions: n, postconditions: o } = {}) {
            (this.sheet = e),
              (this.preconditions = []),
              (this.scopeClassName = null),
              (this.scopeName = null),
              (this.postconditions = []),
              (this.preconditions = n ? r(n) : []),
              (this.postconditions = o ? r(o) : []),
              this.setScope(t);
          }
          setScope(e) {
            return (
              e &&
                (this.scopeClassName ||
                  ((this.scopeName = e),
                  (this.scopeClassName = d(this.sheet.name, e + this.sheet.count)))),
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
            return new f(this.sheet, e, t, this);
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
      function v(e, t) {
        for (let n in e) t(n.trim(), e[n]);
      }
      function y(e, t) {
        let n = new m(e, t);
        return {
          create: function (e) {
            let t = {};
            return (
              (function e(t, n, r) {
                let o = [];
                return (
                  v(n, (s, a) => {
                    if (i(s)) return e(t, a, r.addPrecondition(s)).forEach((e) => o.push(e));
                    o.push([s, n[s], r.addScope(s)]);
                  }),
                  o
                );
              })(n, e, new h(n)).forEach(([e, o, l]) => {
                (function e(t, n, o) {
                  let l = new Set();
                  return (
                    v(n, (n, u) => {
                      let c = [];
                      if (i(n)) c = e(t, u, o.addPostcondition(n));
                      else if ("." === n) c = r(u);
                      else if (a(n))
                        c = (function (t, n, r, o) {
                          t.append(r + " {");
                          let i = e(t, n, o);
                          return t.append("}"), i;
                        })(t, u, n, o);
                      else if ("--" === n)
                        c = (function (t, n, r) {
                          let o = new Set(),
                            i = [];
                          if (
                            (v(n, (n, a) => {
                              if (s(n, a)) return void i.push(f.genRule(n, a));
                              g(e(t, a ?? {}, r), o);
                            }),
                            !r.scopeClassName)
                          )
                            return o;
                          if (i.length) {
                            let e = i.join(" ");
                            t.append(`${p(r.preconditions, { right: r.scopeClassName })} {${e}}`);
                          }
                          return o.add(r.scopeClassName), o;
                        })(t, u, o);
                      else if (s(n, u)) {
                        let e = o.createRule(n, u);
                        t.addRule(e), l.add(e.hash);
                      }
                      return g(c, l);
                    }),
                    l
                  );
                })(n, o, l).forEach((n) => {
                  var r, o;
                  (r = e), (o = n), (t[r] = t[r] ?? new Set()), t[r].add(o);
                });
              }),
              n.apply(),
              t
            );
          },
          getStyle: n.getStyle.bind(n),
          isApplied: n.isApplied.bind(n),
        };
      }
      function g(e, t) {
        return e.forEach((e) => t.add(e)), t;
      }
    },
    2556: (e, t, n) => {
      n.d(t, { m: () => r });
      function r(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
        return function (r) {
          if ((e?.(r), !1 === n || !r.defaultPrevented)) return t?.(r);
        };
      }
    },
    3558: (e, t, n) => {
      n.d(t, { i: () => i });
      var r = n(2115),
        o = n(222);
      function i({ prop: e, defaultProp: t, onChange: n = () => {} }) {
        let [i, s] = (function ({ defaultProp: e, onChange: t }) {
            let n = r.useState(e),
              [i] = n,
              s = r.useRef(i),
              a = (0, o.c)(t);
            return (
              r.useEffect(() => {
                s.current !== i && (a(i), (s.current = i));
              }, [i, s, a]),
              n
            );
          })({ defaultProp: t, onChange: n }),
          a = void 0 !== e,
          l = a ? e : i,
          u = (0, o.c)(n);
        return [
          l,
          r.useCallback(
            (t) => {
              if (a) {
                let n = "function" == typeof t ? t(e) : t;
                n !== e && u(n);
              } else s(t);
            },
            [a, e, s, u],
          ),
        ];
      }
    },
    6218: (e, t, n) => {
      n.d(t, { jH: () => i });
      var r = n(2115);
      n(5155);
      var o = r.createContext(void 0);
      function i(e) {
        let t = r.useContext(o);
        return e || t || "ltr";
      }
    },
    6842: (e, t, n) => {
      n.d(t, { C: () => s });
      var r = n(2115),
        o = n(4446),
        i = n(4129),
        s = (e) => {
          let { present: t, children: n } = e,
            s = (function (e) {
              var t, n;
              let [o, s] = r.useState(),
                l = r.useRef({}),
                u = r.useRef(e),
                c = r.useRef("none"),
                [d, f] =
                  ((t = e ? "mounted" : "unmounted"),
                  (n = {
                    mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
                    unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
                    unmounted: { MOUNT: "mounted" },
                  }),
                  r.useReducer((e, t) => {
                    let r = n[e][t];
                    return null != r ? r : e;
                  }, t));
              return (
                r.useEffect(() => {
                  let e = a(l.current);
                  c.current = "mounted" === d ? e : "none";
                }, [d]),
                (0, i.N)(() => {
                  let t = l.current,
                    n = u.current;
                  if (n !== e) {
                    let r = c.current,
                      o = a(t);
                    e
                      ? f("MOUNT")
                      : "none" === o || (null == t ? void 0 : t.display) === "none"
                        ? f("UNMOUNT")
                        : n && r !== o
                          ? f("ANIMATION_OUT")
                          : f("UNMOUNT"),
                      (u.current = e);
                  }
                }, [e, f]),
                (0, i.N)(() => {
                  if (o) {
                    var e;
                    let t,
                      n = null != (e = o.ownerDocument.defaultView) ? e : window,
                      r = (e) => {
                        let r = a(l.current).includes(e.animationName);
                        if (e.target === o && r && (f("ANIMATION_END"), !u.current)) {
                          let e = o.style.animationFillMode;
                          (o.style.animationFillMode = "forwards"),
                            (t = n.setTimeout(() => {
                              "forwards" === o.style.animationFillMode &&
                                (o.style.animationFillMode = e);
                            }));
                        }
                      },
                      i = (e) => {
                        e.target === o && (c.current = a(l.current));
                      };
                    return (
                      o.addEventListener("animationstart", i),
                      o.addEventListener("animationcancel", r),
                      o.addEventListener("animationend", r),
                      () => {
                        n.clearTimeout(t),
                          o.removeEventListener("animationstart", i),
                          o.removeEventListener("animationcancel", r),
                          o.removeEventListener("animationend", r);
                      }
                    );
                  }
                  f("ANIMATION_END");
                }, [o, f]),
                {
                  isPresent: ["mounted", "unmountSuspended"].includes(d),
                  ref: r.useCallback((e) => {
                    e && (l.current = getComputedStyle(e)), s(e);
                  }, []),
                }
              );
            })(t),
            l = "function" == typeof n ? n({ present: s.isPresent }) : r.Children.only(n),
            u = (0, o.s)(
              s.ref,
              (function (e) {
                var t, n;
                let r =
                    null == (t = Object.getOwnPropertyDescriptor(e.props, "ref")) ? void 0 : t.get,
                  o = r && "isReactWarning" in r && r.isReactWarning;
                return o
                  ? e.ref
                  : (o =
                        (r =
                          null == (n = Object.getOwnPropertyDescriptor(e, "ref"))
                            ? void 0
                            : n.get) &&
                        "isReactWarning" in r &&
                        r.isReactWarning)
                    ? e.props.ref
                    : e.props.ref || e.ref;
              })(l),
            );
          return "function" == typeof n || s.isPresent ? r.cloneElement(l, { ref: u }) : null;
        };
      function a(e) {
        return (null == e ? void 0 : e.animationName) || "none";
      }
      s.displayName = "Presence";
    },
    8625: (e, t, n) => {
      n.d(t, { N: () => d });
      var r = n(2115),
        o = n(3468),
        i = n(4446),
        s = n(5155),
        a = r.forwardRef((e, t) => {
          let { children: n, ...o } = e,
            i = r.Children.toArray(n),
            a = i.find(c);
          if (a) {
            let e = a.props.children,
              n = i.map((t) =>
                t !== a
                  ? t
                  : r.Children.count(e) > 1
                    ? r.Children.only(null)
                    : r.isValidElement(e)
                      ? e.props.children
                      : null,
              );
            return (0, s.jsx)(l, {
              ...o,
              ref: t,
              children: r.isValidElement(e) ? r.cloneElement(e, void 0, n) : null,
            });
          }
          return (0, s.jsx)(l, { ...o, ref: t, children: n });
        });
      a.displayName = "Slot";
      var l = r.forwardRef((e, t) => {
        let { children: n, ...o } = e;
        if (r.isValidElement(n)) {
          let e = (function (e) {
              let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                n = t && "isReactWarning" in t && t.isReactWarning;
              return n
                ? e.ref
                : (n =
                      (t = Object.getOwnPropertyDescriptor(e, "ref")?.get) &&
                      "isReactWarning" in t &&
                      t.isReactWarning)
                  ? e.props.ref
                  : e.props.ref || e.ref;
            })(n),
            s = (function (e, t) {
              let n = { ...t };
              for (let r in t) {
                let o = e[r],
                  i = t[r];
                /^on[A-Z]/.test(r)
                  ? o && i
                    ? (n[r] = (...e) => {
                        i(...e), o(...e);
                      })
                    : o && (n[r] = o)
                  : "style" === r
                    ? (n[r] = { ...o, ...i })
                    : "className" === r && (n[r] = [o, i].filter(Boolean).join(" "));
              }
              return { ...e, ...n };
            })(o, n.props);
          return n.type !== r.Fragment && (s.ref = t ? (0, i.t)(t, e) : e), r.cloneElement(n, s);
        }
        return r.Children.count(n) > 1 ? r.Children.only(null) : null;
      });
      l.displayName = "SlotClone";
      var u = ({ children: e }) => (0, s.jsx)(s.Fragment, { children: e });
      function c(e) {
        return r.isValidElement(e) && e.type === u;
      }
      function d(e) {
        let t = e + "CollectionProvider",
          [n, l] = (0, o.A)(t),
          [u, c] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
          d = (e) => {
            let { scope: t, children: n } = e,
              o = r.useRef(null),
              i = r.useRef(new Map()).current;
            return (0, s.jsx)(u, { scope: t, itemMap: i, collectionRef: o, children: n });
          };
        d.displayName = t;
        let f = e + "CollectionSlot",
          p = r.forwardRef((e, t) => {
            let { scope: n, children: r } = e,
              o = c(f, n),
              l = (0, i.s)(t, o.collectionRef);
            return (0, s.jsx)(a, { ref: l, children: r });
          });
        p.displayName = f;
        let h = e + "CollectionItemSlot",
          m = "data-radix-collection-item",
          v = r.forwardRef((e, t) => {
            let { scope: n, children: o, ...l } = e,
              u = r.useRef(null),
              d = (0, i.s)(t, u),
              f = c(h, n);
            return (
              r.useEffect(
                () => (f.itemMap.set(u, { ref: u, ...l }), () => void f.itemMap.delete(u)),
              ),
              (0, s.jsx)(a, { ...{ [m]: "" }, ref: d, children: o })
            );
          });
        return (
          (v.displayName = h),
          [
            { Provider: d, Slot: p, ItemSlot: v },
            function (t) {
              let n = c(e + "CollectionConsumer", t);
              return r.useCallback(() => {
                let e = n.collectionRef.current;
                if (!e) return [];
                let t = Array.from(e.querySelectorAll("[".concat(m, "]")));
                return Array.from(n.itemMap.values()).sort(
                  (e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current),
                );
              }, [n.collectionRef, n.itemMap]);
            },
            l,
          ]
        );
      }
    },
    8946: (e, t, n) => {
      n.d(t, { B: () => l });
      var r,
        o = n(2115),
        i = n(4129),
        s = (r || (r = n.t(o, 2)))["useId".toString()] || (() => void 0),
        a = 0;
      function l(e) {
        let [t, n] = o.useState(s());
        return (
          (0, i.N)(() => {
            e || n((e) => e ?? String(a++));
          }, [e]),
          e || (t ? `radix-${t}` : "")
        );
      }
    },
  },
]);
