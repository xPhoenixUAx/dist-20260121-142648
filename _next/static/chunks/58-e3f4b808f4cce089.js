"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [58],
  {
    222: (e, r, t) => {
      t.d(r, { c: () => n });
      var o = t(2115);
      function n(e) {
        let r = o.useRef(e);
        return (
          o.useEffect(() => {
            r.current = e;
          }),
          o.useMemo(
            () =>
              (...e) =>
                r.current?.(...e),
            [],
          )
        );
      }
    },
    2821: (e, r, t) => {
      t.d(r, { $: () => o });
      function o() {
        for (var e, r, t = 0, o = "", n = arguments.length; t < n; t++)
          (e = arguments[t]) &&
            (r = (function e(r) {
              var t,
                o,
                n = "";
              if ("string" == typeof r || "number" == typeof r) n += r;
              else if ("object" == typeof r)
                if (Array.isArray(r)) {
                  var l = r.length;
                  for (t = 0; t < l; t++) r[t] && (o = e(r[t])) && (n && (n += " "), (n += o));
                } else for (o in r) r[o] && (n && (n += " "), (n += o));
              return n;
            })(e)) &&
            (o && (o += " "), (o += r));
        return o;
      }
    },
    3468: (e, r, t) => {
      t.d(r, { A: () => l });
      var o = t(2115),
        n = t(5155);
      function l(e, r = []) {
        let t = [],
          s = () => {
            let r = t.map((e) => o.createContext(e));
            return function (t) {
              let n = t?.[e] || r;
              return o.useMemo(() => ({ [`__scope${e}`]: { ...t, [e]: n } }), [t, n]);
            };
          };
        return (
          (s.scopeName = e),
          [
            function (r, l) {
              let s = o.createContext(l),
                i = t.length;
              t = [...t, l];
              let a = (r) => {
                let { scope: t, children: l, ...a } = r,
                  d = t?.[e]?.[i] || s,
                  c = o.useMemo(() => a, Object.values(a));
                return (0, n.jsx)(d.Provider, { value: c, children: l });
              };
              return (
                (a.displayName = r + "Provider"),
                [
                  a,
                  function (t, n) {
                    let a = n?.[e]?.[i] || s,
                      d = o.useContext(a);
                    if (d) return d;
                    if (void 0 !== l) return l;
                    throw Error(`\`${t}\` must be used within \`${r}\``);
                  },
                ]
              );
            },
            (function (...e) {
              let r = e[0];
              if (1 === e.length) return r;
              let t = () => {
                let t = e.map((e) => ({ useScope: e(), scopeName: e.scopeName }));
                return function (e) {
                  let n = t.reduce((r, { useScope: t, scopeName: o }) => {
                    let n = t(e)[`__scope${o}`];
                    return { ...r, ...n };
                  }, {});
                  return o.useMemo(() => ({ [`__scope${r.scopeName}`]: n }), [n]);
                };
              };
              return (t.scopeName = r.scopeName), t;
            })(s, ...r),
          ]
        );
      }
    },
    4129: (e, r, t) => {
      t.d(r, { N: () => n });
      var o = t(2115),
        n = globalThis?.document ? o.useLayoutEffect : () => {};
    },
    4446: (e, r, t) => {
      t.d(r, { s: () => s, t: () => l });
      var o = t(2115);
      function n(e, r) {
        if ("function" == typeof e) return e(r);
        null != e && (e.current = r);
      }
      function l(...e) {
        return (r) => {
          let t = !1,
            o = e.map((e) => {
              let o = n(e, r);
              return t || "function" != typeof o || (t = !0), o;
            });
          if (t)
            return () => {
              for (let r = 0; r < o.length; r++) {
                let t = o[r];
                "function" == typeof t ? t() : n(e[r], null);
              }
            };
        };
      }
      function s(...e) {
        return o.useCallback(l(...e), e);
      }
    },
    5889: (e, r, t) => {
      t.d(r, { QP: () => et });
      let o = (e, r) => {
          if (0 === e.length) return r.classGroupId;
          let t = e[0],
            n = r.nextPart.get(t),
            l = n ? o(e.slice(1), n) : void 0;
          if (l) return l;
          if (0 === r.validators.length) return;
          let s = e.join("-");
          return r.validators.find(({ validator: e }) => e(s))?.classGroupId;
        },
        n = /^\[(.+)\]$/,
        l = (e, r, t, o) => {
          e.forEach((e) => {
            if ("string" == typeof e) {
              ("" === e ? r : s(r, e)).classGroupId = t;
              return;
            }
            if ("function" == typeof e)
              return i(e)
                ? void l(e(o), r, t, o)
                : void r.validators.push({ validator: e, classGroupId: t });
            Object.entries(e).forEach(([e, n]) => {
              l(n, s(r, e), t, o);
            });
          });
        },
        s = (e, r) => {
          let t = e;
          return (
            r.split("-").forEach((e) => {
              t.nextPart.has(e) || t.nextPart.set(e, { nextPart: new Map(), validators: [] }),
                (t = t.nextPart.get(e));
            }),
            t
          );
        },
        i = (e) => e.isThemeGetter,
        a = /\s+/;
      function d() {
        let e,
          r,
          t = 0,
          o = "";
        for (; t < arguments.length; )
          (e = arguments[t++]) && (r = c(e)) && (o && (o += " "), (o += r));
        return o;
      }
      let c = (e) => {
          let r;
          if ("string" == typeof e) return e;
          let t = "";
          for (let o = 0; o < e.length; o++) e[o] && (r = c(e[o])) && (t && (t += " "), (t += r));
          return t;
        },
        u = (e) => {
          let r = (r) => r[e] || [];
          return (r.isThemeGetter = !0), r;
        },
        p = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
        f = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
        b = /^\d+\/\d+$/,
        m = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
        g =
          /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
        h = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
        x = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
        w =
          /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
        v = (e) => b.test(e),
        y = (e) => !!e && !Number.isNaN(Number(e)),
        k = (e) => !!e && Number.isInteger(Number(e)),
        z = (e) => e.endsWith("%") && y(e.slice(0, -1)),
        j = (e) => m.test(e),
        N = () => !0,
        C = (e) => g.test(e) && !h.test(e),
        E = () => !1,
        M = (e) => x.test(e),
        P = (e) => w.test(e),
        $ = (e) => !_(e) && !A(e),
        S = (e) => L(e, U, E),
        _ = (e) => p.test(e),
        G = (e) => L(e, X, C),
        O = (e) => L(e, Y, y),
        I = (e) => L(e, Z, E),
        R = (e) => L(e, J, P),
        W = (e) => L(e, E, M),
        A = (e) => f.test(e),
        T = (e) => Q(e, X),
        V = (e) => Q(e, ee),
        q = (e) => Q(e, Z),
        D = (e) => Q(e, U),
        F = (e) => Q(e, J),
        B = (e) => Q(e, er, !0),
        L = (e, r, t) => {
          let o = p.exec(e);
          return !!o && (o[1] ? r(o[1]) : t(o[2]));
        },
        Q = (e, r, t = !1) => {
          let o = f.exec(e);
          return !!o && (o[1] ? r(o[1]) : t);
        },
        Z = (e) => "position" === e,
        H = new Set(["image", "url"]),
        J = (e) => H.has(e),
        K = new Set(["length", "size", "percentage"]),
        U = (e) => K.has(e),
        X = (e) => "length" === e,
        Y = (e) => "number" === e,
        ee = (e) => "family-name" === e,
        er = (e) => "shadow" === e;
      Symbol.toStringTag;
      let et = (function (e, ...r) {
        let t,
          s,
          i,
          c = function (a) {
            let d;
            return (
              (s = (t = {
                cache: ((e) => {
                  if (e < 1) return { get: () => void 0, set: () => {} };
                  let r = 0,
                    t = new Map(),
                    o = new Map(),
                    n = (n, l) => {
                      t.set(n, l), ++r > e && ((r = 0), (o = t), (t = new Map()));
                    };
                  return {
                    get(e) {
                      let r = t.get(e);
                      return void 0 !== r ? r : void 0 !== (r = o.get(e)) ? (n(e, r), r) : void 0;
                    },
                    set(e, r) {
                      t.has(e) ? t.set(e, r) : n(e, r);
                    },
                  };
                })((d = r.reduce((e, r) => r(e), e())).cacheSize),
                parseClassName: ((e) => {
                  let { prefix: r, experimentalParseClassName: t } = e,
                    o = (e) => {
                      let r,
                        t,
                        o = [],
                        n = 0,
                        l = 0,
                        s = 0;
                      for (let t = 0; t < e.length; t++) {
                        let i = e[t];
                        if (0 === n && 0 === l) {
                          if (":" === i) {
                            o.push(e.slice(s, t)), (s = t + 1);
                            continue;
                          }
                          if ("/" === i) {
                            r = t;
                            continue;
                          }
                        }
                        "[" === i ? n++ : "]" === i ? n-- : "(" === i ? l++ : ")" === i && l--;
                      }
                      let i = 0 === o.length ? e : e.substring(s),
                        a = (t = i).endsWith("!")
                          ? t.substring(0, t.length - 1)
                          : t.startsWith("!")
                            ? t.substring(1)
                            : t;
                      return {
                        modifiers: o,
                        hasImportantModifier: a !== i,
                        baseClassName: a,
                        maybePostfixModifierPosition: r && r > s ? r - s : void 0,
                      };
                    };
                  if (r) {
                    let e = r + ":",
                      t = o;
                    o = (r) =>
                      r.startsWith(e)
                        ? t(r.substring(e.length))
                        : {
                            isExternal: !0,
                            modifiers: [],
                            hasImportantModifier: !1,
                            baseClassName: r,
                            maybePostfixModifierPosition: void 0,
                          };
                  }
                  if (t) {
                    let e = o;
                    o = (r) => t({ className: r, parseClassName: e });
                  }
                  return o;
                })(d),
                sortModifiers: ((e) => {
                  let r = Object.fromEntries(e.orderSensitiveModifiers.map((e) => [e, !0]));
                  return (e) => {
                    if (e.length <= 1) return e;
                    let t = [],
                      o = [];
                    return (
                      e.forEach((e) => {
                        "[" === e[0] || r[e] ? (t.push(...o.sort(), e), (o = [])) : o.push(e);
                      }),
                      t.push(...o.sort()),
                      t
                    );
                  };
                })(d),
                ...((e) => {
                  let r = ((e) => {
                      let { theme: r, classGroups: t } = e,
                        o = { nextPart: new Map(), validators: [] };
                      for (let e in t) l(t[e], o, e, r);
                      return o;
                    })(e),
                    { conflictingClassGroups: t, conflictingClassGroupModifiers: s } = e;
                  return {
                    getClassGroupId: (e) => {
                      let t = e.split("-");
                      return (
                        "" === t[0] && 1 !== t.length && t.shift(),
                        o(t, r) ||
                          ((e) => {
                            if (n.test(e)) {
                              let r = n.exec(e)[1],
                                t = r?.substring(0, r.indexOf(":"));
                              if (t) return "arbitrary.." + t;
                            }
                          })(e)
                      );
                    },
                    getConflictingClassGroupIds: (e, r) => {
                      let o = t[e] || [];
                      return r && s[e] ? [...o, ...s[e]] : o;
                    },
                  };
                })(d),
              }).cache.get),
              (i = t.cache.set),
              (c = u),
              u(a)
            );
          };
        function u(e) {
          let r = s(e);
          if (r) return r;
          let o = ((e, r) => {
            let {
                parseClassName: t,
                getClassGroupId: o,
                getConflictingClassGroupIds: n,
                sortModifiers: l,
              } = r,
              s = [],
              i = e.trim().split(a),
              d = "";
            for (let e = i.length - 1; e >= 0; e -= 1) {
              let r = i[e],
                {
                  isExternal: a,
                  modifiers: c,
                  hasImportantModifier: u,
                  baseClassName: p,
                  maybePostfixModifierPosition: f,
                } = t(r);
              if (a) {
                d = r + (d.length > 0 ? " " + d : d);
                continue;
              }
              let b = !!f,
                m = o(b ? p.substring(0, f) : p);
              if (!m) {
                if (!b || !(m = o(p))) {
                  d = r + (d.length > 0 ? " " + d : d);
                  continue;
                }
                b = !1;
              }
              let g = l(c).join(":"),
                h = u ? g + "!" : g,
                x = h + m;
              if (s.includes(x)) continue;
              s.push(x);
              let w = n(m, b);
              for (let e = 0; e < w.length; ++e) {
                let r = w[e];
                s.push(h + r);
              }
              d = r + (d.length > 0 ? " " + d : d);
            }
            return d;
          })(e, t);
          return i(e, o), o;
        }
        return function () {
          return c(d.apply(null, arguments));
        };
      })(() => {
        let e = u("color"),
          r = u("font"),
          t = u("text"),
          o = u("font-weight"),
          n = u("tracking"),
          l = u("leading"),
          s = u("breakpoint"),
          i = u("container"),
          a = u("spacing"),
          d = u("radius"),
          c = u("shadow"),
          p = u("inset-shadow"),
          f = u("drop-shadow"),
          b = u("blur"),
          m = u("perspective"),
          g = u("aspect"),
          h = u("ease"),
          x = u("animate"),
          w = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
          C = () => [
            "bottom",
            "center",
            "left",
            "left-bottom",
            "left-top",
            "right",
            "right-bottom",
            "right-top",
            "top",
          ],
          E = () => ["auto", "hidden", "clip", "visible", "scroll"],
          M = () => ["auto", "contain", "none"],
          P = () => [v, "px", "full", "auto", A, _, a],
          L = () => [k, "none", "subgrid", A, _],
          Q = () => ["auto", { span: ["full", k, A, _] }, A, _],
          Z = () => [k, "auto", A, _],
          H = () => ["auto", "min", "max", "fr", A, _],
          J = () => [A, _, a],
          K = () => [
            "start",
            "end",
            "center",
            "between",
            "around",
            "evenly",
            "stretch",
            "baseline",
          ],
          U = () => ["start", "end", "center", "stretch"],
          X = () => [A, _, a],
          Y = () => ["px", ...X()],
          ee = () => ["px", "auto", ...X()],
          er = () => [
            v,
            "auto",
            "px",
            "full",
            "dvw",
            "dvh",
            "lvw",
            "lvh",
            "svw",
            "svh",
            "min",
            "max",
            "fit",
            A,
            _,
            a,
          ],
          et = () => [e, A, _],
          eo = () => [z, G],
          en = () => ["", "none", "full", d, A, _],
          el = () => ["", y, T, G],
          es = () => ["solid", "dashed", "dotted", "double"],
          ei = () => [
            "normal",
            "multiply",
            "screen",
            "overlay",
            "darken",
            "lighten",
            "color-dodge",
            "color-burn",
            "hard-light",
            "soft-light",
            "difference",
            "exclusion",
            "hue",
            "saturation",
            "color",
            "luminosity",
          ],
          ea = () => ["", "none", b, A, _],
          ed = () => [
            "center",
            "top",
            "top-right",
            "right",
            "bottom-right",
            "bottom",
            "bottom-left",
            "left",
            "top-left",
            A,
            _,
          ],
          ec = () => ["none", y, A, _],
          eu = () => ["none", y, A, _],
          ep = () => [y, A, _],
          ef = () => [v, "full", "px", A, _, a];
        return {
          cacheSize: 500,
          theme: {
            animate: ["spin", "ping", "pulse", "bounce"],
            aspect: ["video"],
            blur: [j],
            breakpoint: [j],
            color: [N],
            container: [j],
            "drop-shadow": [j],
            ease: ["in", "out", "in-out"],
            font: [$],
            "font-weight": [
              "thin",
              "extralight",
              "light",
              "normal",
              "medium",
              "semibold",
              "bold",
              "extrabold",
              "black",
            ],
            "inset-shadow": [j],
            leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
            perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
            radius: [j],
            shadow: [j],
            spacing: [y],
            text: [j],
            tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"],
          },
          classGroups: {
            aspect: [{ aspect: ["auto", "square", v, _, A, g] }],
            container: ["container"],
            columns: [{ columns: [y, _, A, i] }],
            "break-after": [{ "break-after": w() }],
            "break-before": [{ "break-before": w() }],
            "break-inside": [{ "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] }],
            "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
            box: [{ box: ["border", "content"] }],
            display: [
              "block",
              "inline-block",
              "inline",
              "flex",
              "inline-flex",
              "table",
              "inline-table",
              "table-caption",
              "table-cell",
              "table-column",
              "table-column-group",
              "table-footer-group",
              "table-header-group",
              "table-row-group",
              "table-row",
              "flow-root",
              "grid",
              "inline-grid",
              "contents",
              "list-item",
              "hidden",
            ],
            sr: ["sr-only", "not-sr-only"],
            float: [{ float: ["right", "left", "none", "start", "end"] }],
            clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [{ object: ["contain", "cover", "fill", "none", "scale-down"] }],
            "object-position": [{ object: [...C(), _, A] }],
            overflow: [{ overflow: E() }],
            "overflow-x": [{ "overflow-x": E() }],
            "overflow-y": [{ "overflow-y": E() }],
            overscroll: [{ overscroll: M() }],
            "overscroll-x": [{ "overscroll-x": M() }],
            "overscroll-y": [{ "overscroll-y": M() }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{ inset: P() }],
            "inset-x": [{ "inset-x": P() }],
            "inset-y": [{ "inset-y": P() }],
            start: [{ start: P() }],
            end: [{ end: P() }],
            top: [{ top: P() }],
            right: [{ right: P() }],
            bottom: [{ bottom: P() }],
            left: [{ left: P() }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{ z: [k, "auto", A, _] }],
            basis: [{ basis: [v, "full", "auto", A, _, i, a] }],
            "flex-direction": [{ flex: ["row", "row-reverse", "col", "col-reverse"] }],
            "flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }],
            flex: [{ flex: [y, v, "auto", "initial", "none", _] }],
            grow: [{ grow: ["", y, A, _] }],
            shrink: [{ shrink: ["", y, A, _] }],
            order: [{ order: [k, "first", "last", "none", A, _] }],
            "grid-cols": [{ "grid-cols": L() }],
            "col-start-end": [{ col: Q() }],
            "col-start": [{ "col-start": Z() }],
            "col-end": [{ "col-end": Z() }],
            "grid-rows": [{ "grid-rows": L() }],
            "row-start-end": [{ row: Q() }],
            "row-start": [{ "row-start": Z() }],
            "row-end": [{ "row-end": Z() }],
            "grid-flow": [{ "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] }],
            "auto-cols": [{ "auto-cols": H() }],
            "auto-rows": [{ "auto-rows": H() }],
            gap: [{ gap: J() }],
            "gap-x": [{ "gap-x": J() }],
            "gap-y": [{ "gap-y": J() }],
            "justify-content": [{ justify: [...K(), "normal"] }],
            "justify-items": [{ "justify-items": [...U(), "normal"] }],
            "justify-self": [{ "justify-self": ["auto", ...U()] }],
            "align-content": [{ content: ["normal", ...K()] }],
            "align-items": [{ items: [...U(), "baseline"] }],
            "align-self": [{ self: ["auto", ...U(), "baseline"] }],
            "place-content": [{ "place-content": K() }],
            "place-items": [{ "place-items": [...U(), "baseline"] }],
            "place-self": [{ "place-self": ["auto", ...U()] }],
            p: [{ p: Y() }],
            px: [{ px: Y() }],
            py: [{ py: Y() }],
            ps: [{ ps: Y() }],
            pe: [{ pe: Y() }],
            pt: [{ pt: Y() }],
            pr: [{ pr: Y() }],
            pb: [{ pb: Y() }],
            pl: [{ pl: Y() }],
            m: [{ m: ee() }],
            mx: [{ mx: ee() }],
            my: [{ my: ee() }],
            ms: [{ ms: ee() }],
            me: [{ me: ee() }],
            mt: [{ mt: ee() }],
            mr: [{ mr: ee() }],
            mb: [{ mb: ee() }],
            ml: [{ ml: ee() }],
            "space-x": [{ "space-x": X() }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{ "space-y": X() }],
            "space-y-reverse": ["space-y-reverse"],
            size: [{ size: er() }],
            w: [{ w: [i, "screen", ...er()] }],
            "min-w": [{ "min-w": [i, "screen", "none", ...er()] }],
            "max-w": [{ "max-w": [i, "screen", "none", "prose", { screen: [s] }, ...er()] }],
            h: [{ h: ["screen", ...er()] }],
            "min-h": [{ "min-h": ["screen", "none", ...er()] }],
            "max-h": [{ "max-h": ["screen", ...er()] }],
            "font-size": [{ text: ["base", t, T, G] }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{ font: [o, A, O] }],
            "font-stretch": [
              {
                "font-stretch": [
                  "ultra-condensed",
                  "extra-condensed",
                  "condensed",
                  "semi-condensed",
                  "normal",
                  "semi-expanded",
                  "expanded",
                  "extra-expanded",
                  "ultra-expanded",
                  z,
                  _,
                ],
              },
            ],
            "font-family": [{ font: [V, _, r] }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
            tracking: [{ tracking: [n, A, _] }],
            "line-clamp": [{ "line-clamp": [y, "none", A, O] }],
            leading: [{ leading: [A, _, l, a] }],
            "list-image": [{ "list-image": ["none", A, _] }],
            "list-style-position": [{ list: ["inside", "outside"] }],
            "list-style-type": [{ list: ["disc", "decimal", "none", A, _] }],
            "text-alignment": [{ text: ["left", "center", "right", "justify", "start", "end"] }],
            "placeholder-color": [{ placeholder: et() }],
            "text-color": [{ text: et() }],
            "text-decoration": ["underline", "overline", "line-through", "no-underline"],
            "text-decoration-style": [{ decoration: [...es(), "wavy"] }],
            "text-decoration-thickness": [{ decoration: [y, "from-font", "auto", A, G] }],
            "text-decoration-color": [{ decoration: et() }],
            "underline-offset": [{ "underline-offset": [y, "auto", A, _] }],
            "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
            indent: [{ indent: ["px", ...X()] }],
            "vertical-align": [
              {
                align: [
                  "baseline",
                  "top",
                  "middle",
                  "bottom",
                  "text-top",
                  "text-bottom",
                  "sub",
                  "super",
                  A,
                  _,
                ],
              },
            ],
            whitespace: [
              { whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"] },
            ],
            break: [{ break: ["normal", "words", "all", "keep"] }],
            hyphens: [{ hyphens: ["none", "manual", "auto"] }],
            content: [{ content: ["none", A, _] }],
            "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
            "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
            "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
            "bg-position": [{ bg: [...C(), q, I] }],
            "bg-repeat": [{ bg: ["no-repeat", { repeat: ["", "x", "y", "space", "round"] }] }],
            "bg-size": [{ bg: ["auto", "cover", "contain", D, S] }],
            "bg-image": [
              {
                bg: [
                  "none",
                  {
                    linear: [{ to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"] }, k, A, _],
                    radial: ["", A, _],
                    conic: [k, A, _],
                  },
                  F,
                  R,
                ],
              },
            ],
            "bg-color": [{ bg: et() }],
            "gradient-from-pos": [{ from: eo() }],
            "gradient-via-pos": [{ via: eo() }],
            "gradient-to-pos": [{ to: eo() }],
            "gradient-from": [{ from: et() }],
            "gradient-via": [{ via: et() }],
            "gradient-to": [{ to: et() }],
            rounded: [{ rounded: en() }],
            "rounded-s": [{ "rounded-s": en() }],
            "rounded-e": [{ "rounded-e": en() }],
            "rounded-t": [{ "rounded-t": en() }],
            "rounded-r": [{ "rounded-r": en() }],
            "rounded-b": [{ "rounded-b": en() }],
            "rounded-l": [{ "rounded-l": en() }],
            "rounded-ss": [{ "rounded-ss": en() }],
            "rounded-se": [{ "rounded-se": en() }],
            "rounded-ee": [{ "rounded-ee": en() }],
            "rounded-es": [{ "rounded-es": en() }],
            "rounded-tl": [{ "rounded-tl": en() }],
            "rounded-tr": [{ "rounded-tr": en() }],
            "rounded-br": [{ "rounded-br": en() }],
            "rounded-bl": [{ "rounded-bl": en() }],
            "border-w": [{ border: el() }],
            "border-w-x": [{ "border-x": el() }],
            "border-w-y": [{ "border-y": el() }],
            "border-w-s": [{ "border-s": el() }],
            "border-w-e": [{ "border-e": el() }],
            "border-w-t": [{ "border-t": el() }],
            "border-w-r": [{ "border-r": el() }],
            "border-w-b": [{ "border-b": el() }],
            "border-w-l": [{ "border-l": el() }],
            "divide-x": [{ "divide-x": el() }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{ "divide-y": el() }],
            "divide-y-reverse": ["divide-y-reverse"],
            "border-style": [{ border: [...es(), "hidden", "none"] }],
            "divide-style": [{ divide: [...es(), "hidden", "none"] }],
            "border-color": [{ border: et() }],
            "border-color-x": [{ "border-x": et() }],
            "border-color-y": [{ "border-y": et() }],
            "border-color-s": [{ "border-s": et() }],
            "border-color-e": [{ "border-e": et() }],
            "border-color-t": [{ "border-t": et() }],
            "border-color-r": [{ "border-r": et() }],
            "border-color-b": [{ "border-b": et() }],
            "border-color-l": [{ "border-l": et() }],
            "divide-color": [{ divide: et() }],
            "outline-style": [{ outline: [...es(), "none", "hidden"] }],
            "outline-offset": [{ "outline-offset": [y, A, _] }],
            "outline-w": [{ outline: ["", y, T, G] }],
            "outline-color": [{ outline: [e] }],
            shadow: [{ shadow: ["", "none", c, B, W] }],
            "shadow-color": [{ shadow: et() }],
            "inset-shadow": [{ "inset-shadow": ["none", A, _, p] }],
            "inset-shadow-color": [{ "inset-shadow": et() }],
            "ring-w": [{ ring: el() }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{ ring: et() }],
            "ring-offset-w": [{ "ring-offset": [y, G] }],
            "ring-offset-color": [{ "ring-offset": et() }],
            "inset-ring-w": [{ "inset-ring": el() }],
            "inset-ring-color": [{ "inset-ring": et() }],
            opacity: [{ opacity: [y, A, _] }],
            "mix-blend": [{ "mix-blend": [...ei(), "plus-darker", "plus-lighter"] }],
            "bg-blend": [{ "bg-blend": ei() }],
            filter: [{ filter: ["", "none", A, _] }],
            blur: [{ blur: ea() }],
            brightness: [{ brightness: [y, A, _] }],
            contrast: [{ contrast: [y, A, _] }],
            "drop-shadow": [{ "drop-shadow": ["", "none", f, A, _] }],
            grayscale: [{ grayscale: ["", y, A, _] }],
            "hue-rotate": [{ "hue-rotate": [y, A, _] }],
            invert: [{ invert: ["", y, A, _] }],
            saturate: [{ saturate: [y, A, _] }],
            sepia: [{ sepia: ["", y, A, _] }],
            "backdrop-filter": [{ "backdrop-filter": ["", "none", A, _] }],
            "backdrop-blur": [{ "backdrop-blur": ea() }],
            "backdrop-brightness": [{ "backdrop-brightness": [y, A, _] }],
            "backdrop-contrast": [{ "backdrop-contrast": [y, A, _] }],
            "backdrop-grayscale": [{ "backdrop-grayscale": ["", y, A, _] }],
            "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [y, A, _] }],
            "backdrop-invert": [{ "backdrop-invert": ["", y, A, _] }],
            "backdrop-opacity": [{ "backdrop-opacity": [y, A, _] }],
            "backdrop-saturate": [{ "backdrop-saturate": [y, A, _] }],
            "backdrop-sepia": [{ "backdrop-sepia": ["", y, A, _] }],
            "border-collapse": [{ border: ["collapse", "separate"] }],
            "border-spacing": [{ "border-spacing": X() }],
            "border-spacing-x": [{ "border-spacing-x": X() }],
            "border-spacing-y": [{ "border-spacing-y": X() }],
            "table-layout": [{ table: ["auto", "fixed"] }],
            caption: [{ caption: ["top", "bottom"] }],
            transition: [
              { transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", A, _] },
            ],
            "transition-behavior": [{ transition: ["normal", "discrete"] }],
            duration: [{ duration: [y, "initial", A, _] }],
            ease: [{ ease: ["linear", "initial", h, A, _] }],
            delay: [{ delay: [y, A, _] }],
            animate: [{ animate: ["none", x, A, _] }],
            backface: [{ backface: ["hidden", "visible"] }],
            perspective: [{ perspective: [m, A, _] }],
            "perspective-origin": [{ "perspective-origin": ed() }],
            rotate: [{ rotate: ec() }],
            "rotate-x": [{ "rotate-x": ec() }],
            "rotate-y": [{ "rotate-y": ec() }],
            "rotate-z": [{ "rotate-z": ec() }],
            scale: [{ scale: eu() }],
            "scale-x": [{ "scale-x": eu() }],
            "scale-y": [{ "scale-y": eu() }],
            "scale-z": [{ "scale-z": eu() }],
            "scale-3d": ["scale-3d"],
            skew: [{ skew: ep() }],
            "skew-x": [{ "skew-x": ep() }],
            "skew-y": [{ "skew-y": ep() }],
            transform: [{ transform: [A, _, "", "none", "gpu", "cpu"] }],
            "transform-origin": [{ origin: ed() }],
            "transform-style": [{ transform: ["3d", "flat"] }],
            translate: [{ translate: ef() }],
            "translate-x": [{ "translate-x": ef() }],
            "translate-y": [{ "translate-y": ef() }],
            "translate-z": [{ "translate-z": ef() }],
            "translate-none": ["translate-none"],
            accent: [{ accent: et() }],
            appearance: [{ appearance: ["none", "auto"] }],
            "caret-color": [{ caret: et() }],
            "color-scheme": [
              { scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"] },
            ],
            cursor: [
              {
                cursor: [
                  "auto",
                  "default",
                  "pointer",
                  "wait",
                  "text",
                  "move",
                  "help",
                  "not-allowed",
                  "none",
                  "context-menu",
                  "progress",
                  "cell",
                  "crosshair",
                  "vertical-text",
                  "alias",
                  "copy",
                  "no-drop",
                  "grab",
                  "grabbing",
                  "all-scroll",
                  "col-resize",
                  "row-resize",
                  "n-resize",
                  "e-resize",
                  "s-resize",
                  "w-resize",
                  "ne-resize",
                  "nw-resize",
                  "se-resize",
                  "sw-resize",
                  "ew-resize",
                  "ns-resize",
                  "nesw-resize",
                  "nwse-resize",
                  "zoom-in",
                  "zoom-out",
                  A,
                  _,
                ],
              },
            ],
            "field-sizing": [{ "field-sizing": ["fixed", "content"] }],
            "pointer-events": [{ "pointer-events": ["auto", "none"] }],
            resize: [{ resize: ["none", "", "y", "x"] }],
            "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
            "scroll-m": [{ "scroll-m": X() }],
            "scroll-mx": [{ "scroll-mx": X() }],
            "scroll-my": [{ "scroll-my": X() }],
            "scroll-ms": [{ "scroll-ms": X() }],
            "scroll-me": [{ "scroll-me": X() }],
            "scroll-mt": [{ "scroll-mt": X() }],
            "scroll-mr": [{ "scroll-mr": X() }],
            "scroll-mb": [{ "scroll-mb": X() }],
            "scroll-ml": [{ "scroll-ml": X() }],
            "scroll-p": [{ "scroll-p": X() }],
            "scroll-px": [{ "scroll-px": X() }],
            "scroll-py": [{ "scroll-py": X() }],
            "scroll-ps": [{ "scroll-ps": X() }],
            "scroll-pe": [{ "scroll-pe": X() }],
            "scroll-pt": [{ "scroll-pt": X() }],
            "scroll-pr": [{ "scroll-pr": X() }],
            "scroll-pb": [{ "scroll-pb": X() }],
            "scroll-pl": [{ "scroll-pl": X() }],
            "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
            "snap-stop": [{ snap: ["normal", "always"] }],
            "snap-type": [{ snap: ["none", "x", "y", "both"] }],
            "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
            touch: [{ touch: ["auto", "none", "manipulation"] }],
            "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
            "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{ select: ["none", "text", "all", "auto"] }],
            "will-change": [{ "will-change": ["auto", "scroll", "contents", "transform", A, _] }],
            fill: [{ fill: ["none", ...et()] }],
            "stroke-w": [{ stroke: [y, T, G, O] }],
            stroke: [{ stroke: ["none", ...et()] }],
            "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
          },
          conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": [
              "fvn-ordinal",
              "fvn-slashed-zero",
              "fvn-figure",
              "fvn-spacing",
              "fvn-fraction",
            ],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: [
              "rounded-s",
              "rounded-e",
              "rounded-t",
              "rounded-r",
              "rounded-b",
              "rounded-l",
              "rounded-ss",
              "rounded-se",
              "rounded-ee",
              "rounded-es",
              "rounded-tl",
              "rounded-tr",
              "rounded-br",
              "rounded-bl",
            ],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": [
              "border-w-s",
              "border-w-e",
              "border-w-t",
              "border-w-r",
              "border-w-b",
              "border-w-l",
            ],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": [
              "border-color-s",
              "border-color-e",
              "border-color-t",
              "border-color-r",
              "border-color-b",
              "border-color-l",
            ],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            translate: ["translate-x", "translate-y", "translate-none"],
            "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
            "scroll-m": [
              "scroll-mx",
              "scroll-my",
              "scroll-ms",
              "scroll-me",
              "scroll-mt",
              "scroll-mr",
              "scroll-mb",
              "scroll-ml",
            ],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": [
              "scroll-px",
              "scroll-py",
              "scroll-ps",
              "scroll-pe",
              "scroll-pt",
              "scroll-pr",
              "scroll-pb",
              "scroll-pl",
            ],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"],
          },
          conflictingClassGroupModifiers: { "font-size": ["leading"] },
          orderSensitiveModifiers: [
            "before",
            "after",
            "placeholder",
            "file",
            "marker",
            "selection",
            "first-line",
            "first-letter",
            "backdrop",
            "*",
            "**",
          ],
        };
      });
    },
    8142: (e, r, t) => {
      t.d(r, { sG: () => u, hO: () => p });
      var o = t(2115),
        n = t(7650),
        l = t(4446),
        s = t(5155),
        i = o.forwardRef((e, r) => {
          let { children: t, ...n } = e,
            l = o.Children.toArray(t),
            i = l.find(c);
          if (i) {
            let e = i.props.children,
              t = l.map((r) =>
                r !== i
                  ? r
                  : o.Children.count(e) > 1
                    ? o.Children.only(null)
                    : o.isValidElement(e)
                      ? e.props.children
                      : null,
              );
            return (0, s.jsx)(a, {
              ...n,
              ref: r,
              children: o.isValidElement(e) ? o.cloneElement(e, void 0, t) : null,
            });
          }
          return (0, s.jsx)(a, { ...n, ref: r, children: t });
        });
      i.displayName = "Slot";
      var a = o.forwardRef((e, r) => {
        let { children: t, ...n } = e;
        if (o.isValidElement(t)) {
          let e = (function (e) {
              let r = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                t = r && "isReactWarning" in r && r.isReactWarning;
              return t
                ? e.ref
                : (t =
                      (r = Object.getOwnPropertyDescriptor(e, "ref")?.get) &&
                      "isReactWarning" in r &&
                      r.isReactWarning)
                  ? e.props.ref
                  : e.props.ref || e.ref;
            })(t),
            s = (function (e, r) {
              let t = { ...r };
              for (let o in r) {
                let n = e[o],
                  l = r[o];
                /^on[A-Z]/.test(o)
                  ? n && l
                    ? (t[o] = (...e) => {
                        l(...e), n(...e);
                      })
                    : n && (t[o] = n)
                  : "style" === o
                    ? (t[o] = { ...n, ...l })
                    : "className" === o && (t[o] = [n, l].filter(Boolean).join(" "));
              }
              return { ...e, ...t };
            })(n, t.props);
          return t.type !== o.Fragment && (s.ref = r ? (0, l.t)(r, e) : e), o.cloneElement(t, s);
        }
        return o.Children.count(t) > 1 ? o.Children.only(null) : null;
      });
      a.displayName = "SlotClone";
      var d = ({ children: e }) => (0, s.jsx)(s.Fragment, { children: e });
      function c(e) {
        return o.isValidElement(e) && e.type === d;
      }
      var u = [
        "a",
        "button",
        "div",
        "form",
        "h2",
        "h3",
        "img",
        "input",
        "label",
        "li",
        "nav",
        "ol",
        "p",
        "span",
        "svg",
        "ul",
      ].reduce((e, r) => {
        let t = o.forwardRef((e, t) => {
          let { asChild: o, ...n } = e,
            l = o ? i : r;
          return (
            "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0),
            (0, s.jsx)(l, { ...n, ref: t })
          );
        });
        return (t.displayName = `Primitive.${r}`), { ...e, [r]: t };
      }, {});
      function p(e, r) {
        e && n.flushSync(() => e.dispatchEvent(r));
      }
    },
  },
]);
