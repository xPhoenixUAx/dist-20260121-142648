(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [564],
  {
    3101: (e, r, t) => {
      "use strict";
      t.d(r, { F: () => s });
      var a = t(2821);
      let l = (e) => ("boolean" == typeof e ? `${e}` : 0 === e ? "0" : e),
        n = a.$,
        s = (e, r) => (t) => {
          var a;
          if ((null == r ? void 0 : r.variants) == null)
            return n(e, null == t ? void 0 : t.class, null == t ? void 0 : t.className);
          let { variants: s, defaultVariants: i } = r,
            o = Object.keys(s).map((e) => {
              let r = null == t ? void 0 : t[e],
                a = null == i ? void 0 : i[e];
              if (null === r) return null;
              let n = l(r) || l(a);
              return s[e][n];
            }),
            d =
              t &&
              Object.entries(t).reduce((e, r) => {
                let [t, a] = r;
                return void 0 === a || (e[t] = a), e;
              }, {});
          return n(
            e,
            o,
            null == r || null == (a = r.compoundVariants)
              ? void 0
              : a.reduce((e, r) => {
                  let { class: t, className: a, ...l } = r;
                  return Object.entries(l).every((e) => {
                    let [r, t] = e;
                    return Array.isArray(t)
                      ? t.includes({ ...i, ...d }[r])
                      : { ...i, ...d }[r] === t;
                  })
                    ? [...e, t, a]
                    : e;
                }, []),
            null == t ? void 0 : t.class,
            null == t ? void 0 : t.className,
          );
        };
    },
    3511: (e, r, t) => {
      "use strict";
      t.d(r, { ReviewsList: () => x });
      var a = t(5155),
        l = t(4294);
      let n = (0, l.A)("Tag", [
          [
            "path",
            {
              d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",
              key: "vktsd0",
            },
          ],
          ["circle", { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor", key: "kqv944" }],
        ]),
        s = (0, l.A)("Star", [
          [
            "path",
            {
              d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
              key: "r04s7s",
            },
          ],
        ]);
      var i = t(6933);
      let o = (0, l.A)("PhoneCall", [
          [
            "path",
            {
              d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
              key: "foiqr5",
            },
          ],
          ["path", { d: "M14.05 2a9 9 0 0 1 8 7.94", key: "vmijpz" }],
          ["path", { d: "M14.05 6A5 5 0 0 1 18 10", key: "13nbpp" }],
        ]),
        d = (0, l.A)("ShieldCheck", [
          [
            "path",
            {
              d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
              key: "oel41y",
            },
          ],
          ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
        ]);
      var c = t(2619),
        u = t.n(c),
        m = t(2115),
        f = t(7071),
        p = t(3998),
        h = t(6948),
        v = t(4269);
      let g = [
        "bg-gradient-to-br from-primary/25 to-primary/10 text-primary",
        "bg-gradient-to-br from-emerald-500/25 to-emerald-500/10 text-emerald-700",
        "bg-gradient-to-br from-amber-500/25 to-amber-500/10 text-amber-700",
        "bg-gradient-to-br from-sky-500/25 to-sky-500/10 text-sky-700",
        "bg-gradient-to-br from-violet-500/25 to-violet-500/10 text-violet-700",
      ];
      function x(e) {
        let { reviews: r } = e,
          [t, l] = (0, m.useState)(4),
          c = r.slice(0, t),
          x = t < r.length;
        return (0, a.jsxs)("div", {
          className: "mt-8 space-y-4",
          children: [
            c.map((e, r) => {
              let t =
                g[
                  (function (e) {
                    let r = 0;
                    for (let t = 0; t < e.length; t += 1) r = (31 * r + e.charCodeAt(t)) >>> 0;
                    return r;
                  })(e.name) % g.length
                ];
              return (0, a.jsxs)(
                h.Zp,
                {
                  className:
                    "relative overflow-hidden transition-all hover:-translate-y-0.5 hover:shadow-lg",
                  children: [
                    (0, a.jsx)("div", {
                      className: (0, v.cn)(
                        "absolute left-0 top-0 bottom-0 w-1.5",
                        r % 3 == 0 ? "bg-primary" : r % 3 == 1 ? "bg-emerald-500" : "bg-amber-500",
                      ),
                    }),
                    (0, a.jsxs)(h.Wu, {
                      className: "p-6 text-left",
                      children: [
                        (0, a.jsxs)("div", {
                          className:
                            "flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-6",
                          children: [
                            (0, a.jsxs)("div", {
                              className: "flex items-start gap-3 min-w-0",
                              children: [
                                (0, a.jsx)(f.Avatar, {
                                  children: (0, a.jsx)(f.AvatarFallback, {
                                    className: (0, v.cn)("font-semibold ring-1 ring-border/60", t),
                                    children: (function (e) {
                                      let r = e.trim().split(/\s+/).filter(Boolean);
                                      return 0 === r.length
                                        ? "?"
                                        : 1 === r.length
                                          ? r[0].slice(0, 1).toUpperCase()
                                          : "".concat(r[0][0]).concat(r[1][0]).toUpperCase();
                                    })(e.name),
                                  }),
                                }),
                                (0, a.jsxs)("div", {
                                  className: "min-w-0",
                                  children: [
                                    (0, a.jsx)("p", {
                                      className: "font-semibold truncate",
                                      children: e.name,
                                    }),
                                    (0, a.jsxs)("div", {
                                      className: "mt-1 flex items-center gap-2",
                                      children: [
                                        (0, a.jsx)(n, {
                                          className: "h-4 w-4 text-muted-foreground",
                                        }),
                                        (0, a.jsx)("p", {
                                          className: "text-sm text-muted-foreground truncate",
                                          children: e.service,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, a.jsx)("div", {
                              className: "flex items-center gap-1 shrink-0",
                              children: [void 0, void 0, void 0, void 0, void 0].map((r, t) => {
                                var l;
                                let n = t < (null != (l = e.rating) ? l : 5);
                                return (0, a.jsx)(
                                  s,
                                  {
                                    className: (0, v.cn)(
                                      "w-4 h-4",
                                      n
                                        ? "fill-yellow-400 text-yellow-400"
                                        : "text-muted-foreground",
                                    ),
                                  },
                                  t,
                                );
                              }),
                            }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          className: "mt-4 relative rounded-2xl bg-secondary p-5 min-h-[104px]",
                          children: [
                            (0, a.jsx)(i.A, {
                              className:
                                "absolute right-4 top-4 h-6 w-6 text-primary/30 pointer-events-none",
                              "aria-hidden": "true",
                            }),
                            (0, a.jsx)("p", {
                              className: "text-muted-foreground leading-relaxed text-left pr-10",
                              style: {
                                display: "-webkit-box",
                                WebkitLineClamp: 4,
                                WebkitBoxOrient: "vertical",
                                overflow: "hidden",
                              },
                              children: e.comment,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                },
                "".concat(e.name, "-").concat(e.avatarId, "-").concat(r),
              );
            }),
            x
              ? (0, a.jsx)("div", {
                  className: "pt-2 flex justify-center",
                  children: (0, a.jsx)(p.$, {
                    onClick: () => l(r.length),
                    className: "font-bold",
                    children: "Show More Reviews",
                  }),
                })
              : null,
            (0, a.jsx)(h.Zp, {
              className: "mt-8 bg-secondary",
              children: (0, a.jsxs)(h.Wu, {
                className: "p-6 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between",
                children: [
                  (0, a.jsxs)("div", {
                    className: "flex items-start gap-3",
                    children: [
                      (0, a.jsx)(o, { className: "h-5 w-5 text-primary mt-0.5" }),
                      (0, a.jsxs)("div", {
                        children: [
                          (0, a.jsx)("p", {
                            className: "font-semibold",
                            children: "Want results like these?",
                          }),
                          (0, a.jsx)("p", {
                            className: "text-sm text-muted-foreground mt-1",
                            children: "Book an inspection and get a clear plan for your home.",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsx)(p.$, {
                    asChild: !0,
                    className: "font-bold",
                    children: (0, a.jsxs)(u(), {
                      href: "/contact",
                      children: [
                        "Schedule an Inspection ",
                        (0, a.jsx)(d, { className: "ml-2 h-4 w-4" }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          ],
        });
      }
    },
    3998: (e, r, t) => {
      "use strict";
      t.d(r, { $: () => d });
      var a = t(5155),
        l = t(2115),
        n = t(7129),
        s = t(3101),
        i = t(4269);
      let o = (0, s.F)(
          "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
          {
            variants: {
              variant: {
                default: "bg-primary text-primary-foreground hover:bg-primary/90",
                destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                outline:
                  "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline",
              },
              size: {
                default: "h-10 px-4 py-2",
                sm: "h-9 rounded-md px-3",
                lg: "h-11 rounded-md px-8",
                icon: "h-10 w-10",
              },
            },
            defaultVariants: { variant: "default", size: "default" },
          },
        ),
        d = l.forwardRef((e, r) => {
          let { className: t, variant: l, size: s, asChild: d = !1, ...c } = e,
            u = d ? n.DX : "button";
          return (0, a.jsx)(u, {
            className: (0, i.cn)(o({ variant: l, size: s, className: t })),
            ref: r,
            ...c,
          });
        });
      d.displayName = "Button";
    },
    4269: (e, r, t) => {
      "use strict";
      t.d(r, { cn: () => n });
      var a = t(2821),
        l = t(5889);
      function n() {
        for (var e = arguments.length, r = Array(e), t = 0; t < e; t++) r[t] = arguments[t];
        return (0, l.QP)((0, a.$)(r));
      }
    },
    4294: (e, r, t) => {
      "use strict";
      t.d(r, { A: () => i });
      var a = t(2115);
      let l = function () {
        for (var e = arguments.length, r = Array(e), t = 0; t < e; t++) r[t] = arguments[t];
        return r
          .filter((e, r, t) => !!e && "" !== e.trim() && t.indexOf(e) === r)
          .join(" ")
          .trim();
      };
      var n = {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
      };
      let s = (0, a.forwardRef)((e, r) => {
          let {
            color: t = "currentColor",
            size: s = 24,
            strokeWidth: i = 2,
            absoluteStrokeWidth: o,
            className: d = "",
            children: c,
            iconNode: u,
            ...m
          } = e;
          return (0, a.createElement)(
            "svg",
            {
              ref: r,
              ...n,
              width: s,
              height: s,
              stroke: t,
              strokeWidth: o ? (24 * Number(i)) / Number(s) : i,
              className: l("lucide", d),
              ...m,
            },
            [
              ...u.map((e) => {
                let [r, t] = e;
                return (0, a.createElement)(r, t);
              }),
              ...(Array.isArray(c) ? c : [c]),
            ],
          );
        }),
        i = (e, r) => {
          let t = (0, a.forwardRef)((t, n) => {
            let { className: i, ...o } = t;
            return (0, a.createElement)(s, {
              ref: n,
              iconNode: r,
              className: l(
                "lucide-".concat(e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()),
                i,
              ),
              ...o,
            });
          });
          return (t.displayName = "".concat(e)), t;
        };
    },
    6933: (e, r, t) => {
      "use strict";
      t.d(r, { A: () => a });
      let a = (0, t(4294).A)("MessageSquareQuote", [
        [
          "path",
          { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" },
        ],
        ["path", { d: "M8 12a2 2 0 0 0 2-2V8H8", key: "1jfesj" }],
        ["path", { d: "M14 12a2 2 0 0 0 2-2V8h-2", key: "1dq9mh" }],
      ]);
    },
    6948: (e, r, t) => {
      "use strict";
      t.d(r, { Wu: () => i, Zp: () => s });
      var a = t(5155),
        l = t(2115),
        n = t(4269);
      let s = l.forwardRef((e, r) => {
        let { className: t, ...l } = e;
        return (0, a.jsx)("div", {
          ref: r,
          className: (0, n.cn)("rounded-lg border bg-card text-card-foreground shadow-sm", t),
          ...l,
        });
      });
      (s.displayName = "Card"),
        (l.forwardRef((e, r) => {
          let { className: t, ...l } = e;
          return (0, a.jsx)("div", {
            ref: r,
            className: (0, n.cn)("flex flex-col space-y-1.5 p-6", t),
            ...l,
          });
        }).displayName = "CardHeader"),
        (l.forwardRef((e, r) => {
          let { className: t, ...l } = e;
          return (0, a.jsx)("div", {
            ref: r,
            className: (0, n.cn)("text-2xl font-semibold leading-none tracking-tight", t),
            ...l,
          });
        }).displayName = "CardTitle"),
        (l.forwardRef((e, r) => {
          let { className: t, ...l } = e;
          return (0, a.jsx)("div", {
            ref: r,
            className: (0, n.cn)("text-sm text-muted-foreground", t),
            ...l,
          });
        }).displayName = "CardDescription");
      let i = l.forwardRef((e, r) => {
        let { className: t, ...l } = e;
        return (0, a.jsx)("div", { ref: r, className: (0, n.cn)("p-6 pt-0", t), ...l });
      });
      (i.displayName = "CardContent"),
        (l.forwardRef((e, r) => {
          let { className: t, ...l } = e;
          return (0, a.jsx)("div", {
            ref: r,
            className: (0, n.cn)("flex items-center p-6 pt-0", t),
            ...l,
          });
        }).displayName = "CardFooter");
    },
    7071: (e, r, t) => {
      "use strict";
      t.d(r, { Avatar: () => b, AvatarFallback: () => N });
      var a = t(5155),
        l = t(2115),
        n = t(3468),
        s = t(222),
        i = t(4129),
        o = t(8142),
        d = "Avatar",
        [c, u] = (0, n.A)(d),
        [m, f] = c(d),
        p = l.forwardRef((e, r) => {
          let { __scopeAvatar: t, ...n } = e,
            [s, i] = l.useState("idle");
          return (0, a.jsx)(m, {
            scope: t,
            imageLoadingStatus: s,
            onImageLoadingStatusChange: i,
            children: (0, a.jsx)(o.sG.span, { ...n, ref: r }),
          });
        });
      p.displayName = d;
      var h = "AvatarImage",
        v = l.forwardRef((e, r) => {
          let { __scopeAvatar: t, src: n, onLoadingStatusChange: d = () => {}, ...c } = e,
            u = f(h, t),
            m = (function (e, r) {
              let [t, a] = l.useState("idle");
              return (
                (0, i.N)(() => {
                  if (!e) return void a("error");
                  let t = !0,
                    l = new window.Image(),
                    n = (e) => () => {
                      t && a(e);
                    };
                  return (
                    a("loading"),
                    (l.onload = n("loaded")),
                    (l.onerror = n("error")),
                    (l.src = e),
                    r && (l.referrerPolicy = r),
                    () => {
                      t = !1;
                    }
                  );
                }, [e, r]),
                t
              );
            })(n, c.referrerPolicy),
            p = (0, s.c)((e) => {
              d(e), u.onImageLoadingStatusChange(e);
            });
          return (
            (0, i.N)(() => {
              "idle" !== m && p(m);
            }, [m, p]),
            "loaded" === m ? (0, a.jsx)(o.sG.img, { ...c, ref: r, src: n }) : null
          );
        });
      v.displayName = h;
      var g = "AvatarFallback",
        x = l.forwardRef((e, r) => {
          let { __scopeAvatar: t, delayMs: n, ...s } = e,
            i = f(g, t),
            [d, c] = l.useState(void 0 === n);
          return (
            l.useEffect(() => {
              if (void 0 !== n) {
                let e = window.setTimeout(() => c(!0), n);
                return () => window.clearTimeout(e);
              }
            }, [n]),
            d && "loaded" !== i.imageLoadingStatus ? (0, a.jsx)(o.sG.span, { ...s, ref: r }) : null
          );
        });
      x.displayName = g;
      var y = t(4269);
      let b = l.forwardRef((e, r) => {
        let { className: t, ...l } = e;
        return (0, a.jsx)(p, {
          ref: r,
          className: (0, y.cn)("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", t),
          ...l,
        });
      });
      (b.displayName = p.displayName),
        (l.forwardRef((e, r) => {
          let { className: t, ...l } = e;
          return (0, a.jsx)(v, {
            ref: r,
            className: (0, y.cn)("aspect-square h-full w-full", t),
            ...l,
          });
        }).displayName = v.displayName);
      let N = l.forwardRef((e, r) => {
        let { className: t, ...l } = e;
        return (0, a.jsx)(x, {
          ref: r,
          className: (0, y.cn)(
            "flex h-full w-full items-center justify-center rounded-full bg-muted",
            t,
          ),
          ...l,
        });
      });
      N.displayName = x.displayName;
    },
    7129: (e, r, t) => {
      "use strict";
      t.d(r, { DX: () => i, TL: () => s });
      var a = t(2115);
      function l(e, r) {
        if ("function" == typeof e) return e(r);
        null != e && (e.current = r);
      }
      var n = t(5155);
      function s(e) {
        let r = (function (e) {
            let r = a.forwardRef((e, r) => {
              let { children: t, ...n } = e;
              if (a.isValidElement(t)) {
                var s;
                let e,
                  i,
                  o =
                    ((s = t),
                    (i =
                      (e = Object.getOwnPropertyDescriptor(s.props, "ref")?.get) &&
                      "isReactWarning" in e &&
                      e.isReactWarning)
                      ? s.ref
                      : (i =
                            (e = Object.getOwnPropertyDescriptor(s, "ref")?.get) &&
                            "isReactWarning" in e &&
                            e.isReactWarning)
                        ? s.props.ref
                        : s.props.ref || s.ref),
                  d = (function (e, r) {
                    let t = { ...r };
                    for (let a in r) {
                      let l = e[a],
                        n = r[a];
                      /^on[A-Z]/.test(a)
                        ? l && n
                          ? (t[a] = (...e) => {
                              let r = n(...e);
                              return l(...e), r;
                            })
                          : l && (t[a] = l)
                        : "style" === a
                          ? (t[a] = { ...l, ...n })
                          : "className" === a && (t[a] = [l, n].filter(Boolean).join(" "));
                    }
                    return { ...e, ...t };
                  })(n, t.props);
                return (
                  t.type !== a.Fragment &&
                    (d.ref = r
                      ? (function (...e) {
                          return (r) => {
                            let t = !1,
                              a = e.map((e) => {
                                let a = l(e, r);
                                return t || "function" != typeof a || (t = !0), a;
                              });
                            if (t)
                              return () => {
                                for (let r = 0; r < a.length; r++) {
                                  let t = a[r];
                                  "function" == typeof t ? t() : l(e[r], null);
                                }
                              };
                          };
                        })(r, o)
                      : o),
                  a.cloneElement(t, d)
                );
              }
              return a.Children.count(t) > 1 ? a.Children.only(null) : null;
            });
            return (r.displayName = `${e}.SlotClone`), r;
          })(e),
          t = a.forwardRef((e, t) => {
            let { children: l, ...s } = e,
              i = a.Children.toArray(l),
              o = i.find(d);
            if (o) {
              let e = o.props.children,
                l = i.map((r) =>
                  r !== o
                    ? r
                    : a.Children.count(e) > 1
                      ? a.Children.only(null)
                      : a.isValidElement(e)
                        ? e.props.children
                        : null,
                );
              return (0, n.jsx)(r, {
                ...s,
                ref: t,
                children: a.isValidElement(e) ? a.cloneElement(e, void 0, l) : null,
              });
            }
            return (0, n.jsx)(r, { ...s, ref: t, children: l });
          });
        return (t.displayName = `${e}.Slot`), t;
      }
      var i = s("Slot"),
        o = Symbol("radix.slottable");
      function d(e) {
        return (
          a.isValidElement(e) &&
          "function" == typeof e.type &&
          "__radixId" in e.type &&
          e.type.__radixId === o
        );
      }
    },
    8079: (e, r, t) => {
      Promise.resolve().then(t.t.bind(t, 2619, 23)),
        Promise.resolve().then(t.t.bind(t, 1356, 23)),
        Promise.resolve().then(t.bind(t, 3511));
    },
  },
  (e) => {
    e.O(0, [619, 58, 356, 441, 255, 358], () => e((e.s = 8079))), (_N_E = e.O());
  },
]);
