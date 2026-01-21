(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [177],
  {
    704: (e, t, s) => {
      "use strict";
      s.d(t, { Toaster: () => w });
      var a = s(5155),
        r = s(2115);
      let o = 0,
        n = new Map(),
        i = (e) => {
          if (n.has(e)) return;
          let t = setTimeout(() => {
            n.delete(e), c({ type: "REMOVE_TOAST", toastId: e });
          }, 1e6);
          n.set(e, t);
        },
        d = [],
        l = { toasts: [] };
      function c(e) {
        (l = ((e, t) => {
          switch (t.type) {
            case "ADD_TOAST":
              return { ...e, toasts: [t.toast, ...e.toasts].slice(0, 1) };
            case "UPDATE_TOAST":
              return {
                ...e,
                toasts: e.toasts.map((e) => (e.id === t.toast.id ? { ...e, ...t.toast } : e)),
              };
            case "DISMISS_TOAST": {
              let { toastId: s } = t;
              return (
                s
                  ? i(s)
                  : e.toasts.forEach((e) => {
                      i(e.id);
                    }),
                {
                  ...e,
                  toasts: e.toasts.map((e) =>
                    e.id === s || void 0 === s ? { ...e, open: !1 } : e,
                  ),
                }
              );
            }
            case "REMOVE_TOAST":
              if (void 0 === t.toastId) return { ...e, toasts: [] };
              return { ...e, toasts: e.toasts.filter((e) => e.id !== t.toastId) };
          }
        })(l, e)),
          d.forEach((e) => {
            e(l);
          });
      }
      function u(e) {
        let { ...t } = e,
          s = (o = (o + 1) % Number.MAX_SAFE_INTEGER).toString(),
          a = () => c({ type: "DISMISS_TOAST", toastId: s });
        return (
          c({
            type: "ADD_TOAST",
            toast: {
              ...t,
              id: s,
              open: !0,
              onOpenChange: (e) => {
                e || a();
              },
            },
          }),
          { id: s, dismiss: a, update: (e) => c({ type: "UPDATE_TOAST", toast: { ...e, id: s } }) }
        );
      }
      var f = s(4679),
        m = s(3101),
        p = s(6615),
        x = s(4269);
      let h = f.Kq,
        g = r.forwardRef((e, t) => {
          let { className: s, ...r } = e;
          return (0, a.jsx)(f.LM, {
            ref: t,
            className: (0, x.cn)(
              "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
              s,
            ),
            ...r,
          });
        });
      g.displayName = f.LM.displayName;
      let v = (0, m.F)(
          "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
          {
            variants: {
              variant: {
                default: "border bg-background text-foreground",
                destructive:
                  "destructive group border-destructive bg-destructive text-destructive-foreground",
              },
            },
            defaultVariants: { variant: "default" },
          },
        ),
        b = r.forwardRef((e, t) => {
          let { className: s, variant: r, ...o } = e;
          return (0, a.jsx)(f.bL, { ref: t, className: (0, x.cn)(v({ variant: r }), s), ...o });
        });
      (b.displayName = f.bL.displayName),
        (r.forwardRef((e, t) => {
          let { className: s, ...r } = e;
          return (0, a.jsx)(f.rc, {
            ref: t,
            className: (0, x.cn)(
              "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
              s,
            ),
            ...r,
          });
        }).displayName = f.rc.displayName);
      let N = r.forwardRef((e, t) => {
        let { className: s, ...r } = e;
        return (0, a.jsx)(f.bm, {
          ref: t,
          className: (0, x.cn)(
            "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
            s,
          ),
          "toast-close": "",
          ...r,
          children: (0, a.jsx)(p.A, { className: "h-4 w-4" }),
        });
      });
      N.displayName = f.bm.displayName;
      let j = r.forwardRef((e, t) => {
        let { className: s, ...r } = e;
        return (0, a.jsx)(f.hE, { ref: t, className: (0, x.cn)("text-sm font-semibold", s), ...r });
      });
      j.displayName = f.hE.displayName;
      let y = r.forwardRef((e, t) => {
        let { className: s, ...r } = e;
        return (0, a.jsx)(f.VY, { ref: t, className: (0, x.cn)("text-sm opacity-90", s), ...r });
      });
      function w() {
        let { toasts: e } = (function () {
          let [e, t] = r.useState(l);
          return (
            r.useEffect(
              () => (
                d.push(t),
                () => {
                  let e = d.indexOf(t);
                  e > -1 && d.splice(e, 1);
                }
              ),
              [e],
            ),
            { ...e, toast: u, dismiss: (e) => c({ type: "DISMISS_TOAST", toastId: e }) }
          );
        })();
        return (0, a.jsxs)(h, {
          children: [
            e.map(function (e) {
              let { id: t, title: s, description: r, action: o, ...n } = e;
              return (0, a.jsxs)(
                b,
                {
                  ...n,
                  children: [
                    (0, a.jsxs)("div", {
                      className: "grid gap-1",
                      children: [
                        s && (0, a.jsx)(j, { children: s }),
                        r && (0, a.jsx)(y, { children: r }),
                      ],
                    }),
                    o,
                    (0, a.jsx)(N, {}),
                  ],
                },
                t,
              );
            }),
            (0, a.jsx)(g, {}),
          ],
        });
      }
      y.displayName = f.VY.displayName;
    },
    992: (e, t, s) => {
      "use strict";
      s.d(t, { Header: () => V });
      var a = s(5155),
        r = s(2619),
        o = s.n(r),
        n = s(9679),
        i = s(2241),
        d = s(2115),
        l = s(8595),
        c = s(4218),
        u = s(9990),
        f = s(6065),
        m = s(6933),
        p = s(8155),
        x = s(7974),
        h = s(8154),
        g = s(6748),
        v = s(1841),
        b = s(7342),
        N = s(7783);
      let j = "tel:+15551234567",
        y = [
          { href: "/", label: "Home", icon: l.A },
          { href: "/wildlife-removal", label: "Wildlife Removal", icon: c.A },
          { href: "/pest-control", label: "Pest Control", icon: u.A },
          { href: "/about", label: "About Us", icon: f.A },
          { href: "/reviews", label: "Reviews", icon: m.A },
          { href: "/faq", label: "FAQ", icon: p.A },
          { href: "/contact", label: "Contact", icon: x.A },
        ];
      h.A,
        g.A,
        g.A,
        c.A,
        v.A,
        v.A,
        v.A,
        h.A,
        u.A,
        b.A,
        u.A,
        u.A,
        u.A,
        u.A,
        g.A,
        g.A,
        u.A,
        N.A,
        u.A,
        u.A,
        u.A,
        u.A;
      var w = s(3998),
        A = s(7283),
        k = s(3101),
        C = s(6615),
        S = s(4269);
      let R = A.bL,
        T = A.l9;
      A.bm;
      let E = A.ZL,
        _ = d.forwardRef((e, t) => {
          let { className: s, ...r } = e;
          return (0, a.jsx)(A.hJ, {
            className: (0, S.cn)(
              "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
              s,
            ),
            ...r,
            ref: t,
          });
        });
      _.displayName = A.hJ.displayName;
      let O = (0, k.F)(
          "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
          {
            variants: {
              side: {
                top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
                bottom:
                  "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
                left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
                right:
                  "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
              },
            },
            defaultVariants: { side: "right" },
          },
        ),
        I = d.forwardRef((e, t) => {
          let { side: s = "right", className: r, children: o, ...n } = e;
          return (0, a.jsxs)(E, {
            children: [
              (0, a.jsx)(_, {}),
              (0, a.jsxs)(A.UC, {
                ref: t,
                className: (0, S.cn)(O({ side: s }), r),
                ...n,
                children: [
                  o,
                  (0, a.jsxs)(A.bm, {
                    className:
                      "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
                    children: [
                      (0, a.jsx)(C.A, { className: "h-4 w-4" }),
                      (0, a.jsx)("span", { className: "sr-only", children: "Close" }),
                    ],
                  }),
                ],
              }),
            ],
          });
        });
      I.displayName = A.UC.displayName;
      let M = (e) => {
        let { className: t, ...s } = e;
        return (0, a.jsx)("div", {
          className: (0, S.cn)("flex flex-col space-y-2 text-center sm:text-left", t),
          ...s,
        });
      };
      function P(e) {
        return (0, a.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          ...e,
          children: [
            (0, a.jsx)("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" }),
            (0, a.jsx)("path", {
              d: "M15.5 9.5a4.5 4.5 0 0 0-4.5 4.5c0 2.49 2.01 4.5 4.5 4.5s4.5-2.01 4.5-4.5c0-2.49-2.01-4.5-4.5-4.5z",
            }),
            (0, a.jsx)("path", { d: "M8.5 14.5A4.5 4.5 0 0 1 13 10" }),
          ],
        });
      }
      function z() {
        return (0, a.jsxs)("div", {
          className: "flex items-center gap-2",
          "aria-label": "GreenShield Pest & Wildlife",
          children: [
            (0, a.jsx)(P, { className: "h-7 w-7 text-primary" }),
            (0, a.jsx)("span", {
              className: "font-bold font-headline text-xl whitespace-nowrap",
              children: "GreenShield",
            }),
          ],
        });
      }
      (M.displayName = "SheetHeader"),
        (d.forwardRef((e, t) => {
          let { className: s, ...r } = e;
          return (0, a.jsx)(A.hE, {
            ref: t,
            className: (0, S.cn)("text-lg font-semibold text-foreground", s),
            ...r,
          });
        }).displayName = A.hE.displayName),
        (d.forwardRef((e, t) => {
          let { className: s, ...r } = e;
          return (0, a.jsx)(A.VY, {
            ref: t,
            className: (0, S.cn)("text-sm text-muted-foreground", s),
            ...r,
          });
        }).displayName = A.VY.displayName);
      var D = s(63);
      function V() {
        let [e, t] = (0, d.useState)(!1),
          s = (0, D.usePathname)();
        return (0, a.jsx)("header", {
          className: "fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b",
          children: (0, a.jsxs)("div", {
            className: "container px-4 md:px-6 flex h-16 items-center",
            children: [
              (0, a.jsxs)(o(), {
                href: "/",
                className: "mr-6",
                children: [
                  (0, a.jsx)(z, {}),
                  (0, a.jsx)("span", { className: "sr-only", children: "Home" }),
                ],
              }),
              (0, a.jsx)("nav", {
                className: "hidden md:flex items-center gap-6 text-sm font-medium",
                children: y.map((e) =>
                  (0, a.jsx)(
                    o(),
                    {
                      href: e.href,
                      className: (0, S.cn)(
                        "transition-colors hover:text-primary",
                        s === e.href ? "text-primary" : "text-foreground/80",
                      ),
                      children: e.label,
                    },
                    e.href,
                  ),
                ),
              }),
              (0, a.jsxs)("div", {
                className: "flex items-center gap-4 ml-auto",
                children: [
                  (0, a.jsxs)("a", {
                    href: j,
                    className:
                      "hidden lg:flex items-center gap-2 text-sm font-semibold text-primary",
                    children: [(0, a.jsx)(n.A, { className: "w-4 h-4" }), "(555) 123-4567"],
                  }),
                  (0, a.jsx)(w.$, {
                    asChild: !0,
                    className: "hidden md:inline-flex",
                    children: (0, a.jsx)(o(), { href: "/contact", children: "Book Inspection" }),
                  }),
                  (0, a.jsx)(w.$, {
                    asChild: !0,
                    className: "md:hidden",
                    size: "sm",
                    children: (0, a.jsxs)("a", {
                      href: j,
                      children: [(0, a.jsx)(n.A, { className: "mr-2 h-4 w-4" }), "Call Now"],
                    }),
                  }),
                  (0, a.jsxs)(R, {
                    open: e,
                    onOpenChange: t,
                    children: [
                      (0, a.jsx)(T, {
                        asChild: !0,
                        children: (0, a.jsxs)(w.$, {
                          variant: "outline",
                          size: "icon",
                          className: "md:hidden",
                          children: [
                            (0, a.jsx)(i.A, { className: "h-6 w-6" }),
                            (0, a.jsx)("span", {
                              className: "sr-only",
                              children: "Open navigation menu",
                            }),
                          ],
                        }),
                      }),
                      (0, a.jsxs)(I, {
                        side: "right",
                        children: [
                          (0, a.jsx)(M, { children: (0, a.jsx)(z, {}) }),
                          (0, a.jsx)("div", {
                            className: "grid gap-4 py-6",
                            children: y.map((e) =>
                              (0, a.jsx)(
                                o(),
                                {
                                  href: e.href,
                                  className: "flex w-full items-center py-2 text-lg font-semibold",
                                  onClick: () => t(!1),
                                  children: e.label,
                                },
                                e.href,
                              ),
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    3673: () => {},
    3938: (e, t, s) => {
      "use strict";
      s.d(t, { CookieBanner: () => c });
      var a = s(5155),
        r = s(2619),
        o = s.n(r),
        n = s(2115),
        i = s(3998),
        d = s(6948);
      let l = "cookie_consent";
      function c() {
        let [e, t] = (0, n.useState)(!1),
          s = (0, n.useMemo)(() => {
            let e = (function (e) {
              if ("undefined" == typeof document) return null;
              let t = document.cookie
                .split("; ")
                .find((t) => t.startsWith("".concat(encodeURIComponent(e), "=")));
              return t ? decodeURIComponent(t.split("=").slice(1).join("=")) : null;
            })(l);
            return "accepted" === e || "essential" === e ? e : null;
          }, []);
        (0, n.useEffect)(() => {
          s || t(!0);
        }, [s]);
        let r = (e) => {
          let s = Math.floor(15552e3);
          (document.cookie = ""
            .concat(encodeURIComponent(l), "=")
            .concat(encodeURIComponent(e), "; Path=/; Max-Age=")
            .concat(s, "; SameSite=Lax")),
            t(!1);
        };
        return e
          ? (0, a.jsx)("div", {
              className: "fixed inset-x-0 bottom-0 z-50 p-4 md:p-6",
              children: (0, a.jsx)("div", {
                className: "mx-auto max-w-4xl",
                children: (0, a.jsx)(d.Zp, {
                  className:
                    "border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 shadow-lg",
                  children: (0, a.jsxs)(d.Wu, {
                    className:
                      "p-4 md:p-5 flex flex-col md:flex-row gap-4 md:items-center md:justify-between",
                    children: [
                      (0, a.jsxs)("div", {
                        className: "space-y-1",
                        children: [
                          (0, a.jsx)("p", {
                            className: "font-semibold",
                            children: "Cookies & privacy",
                          }),
                          (0, a.jsx)("p", {
                            className: "text-sm text-muted-foreground",
                            children:
                              "We use essential cookies to make this site work, and optional cookies to understand usage and improve performance. You can choose essential-only or accept all.",
                          }),
                          (0, a.jsx)("div", {
                            className: "text-sm",
                            children: (0, a.jsx)(o(), {
                              href: "/cookie-policy",
                              className: "text-primary underline underline-offset-4",
                              children: "Cookie Policy",
                            }),
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className: "flex flex-col sm:flex-row gap-2 sm:items-center",
                        children: [
                          (0, a.jsx)(i.$, {
                            variant: "outline",
                            onClick: () => r("essential"),
                            children: "Essential Only",
                          }),
                          (0, a.jsx)(i.$, {
                            onClick: () => r("accepted"),
                            className: "font-semibold",
                            children: "Accept All",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            })
          : null;
      }
    },
    3995: (e, t, s) => {
      Promise.resolve().then(s.t.bind(s, 2619, 23)),
        Promise.resolve().then(s.t.bind(s, 3673, 23)),
        Promise.resolve().then(s.t.bind(s, 5316, 23)),
        Promise.resolve().then(s.t.bind(s, 7004, 23)),
        Promise.resolve().then(s.bind(s, 3938)),
        Promise.resolve().then(s.bind(s, 992)),
        Promise.resolve().then(s.bind(s, 704));
    },
    3998: (e, t, s) => {
      "use strict";
      s.d(t, { $: () => l });
      var a = s(5155),
        r = s(2115),
        o = s(7129),
        n = s(3101),
        i = s(4269);
      let d = (0, n.F)(
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
        l = r.forwardRef((e, t) => {
          let { className: s, variant: r, size: n, asChild: l = !1, ...c } = e,
            u = l ? o.DX : "button";
          return (0, a.jsx)(u, {
            className: (0, i.cn)(d({ variant: r, size: n, className: s })),
            ref: t,
            ...c,
          });
        });
      l.displayName = "Button";
    },
    4269: (e, t, s) => {
      "use strict";
      s.d(t, { cn: () => o });
      var a = s(2821),
        r = s(5889);
      function o() {
        for (var e = arguments.length, t = Array(e), s = 0; s < e; s++) t[s] = arguments[s];
        return (0, r.QP)((0, a.$)(t));
      }
    },
    6948: (e, t, s) => {
      "use strict";
      s.d(t, { Wu: () => i, Zp: () => n });
      var a = s(5155),
        r = s(2115),
        o = s(4269);
      let n = r.forwardRef((e, t) => {
        let { className: s, ...r } = e;
        return (0, a.jsx)("div", {
          ref: t,
          className: (0, o.cn)("rounded-lg border bg-card text-card-foreground shadow-sm", s),
          ...r,
        });
      });
      (n.displayName = "Card"),
        (r.forwardRef((e, t) => {
          let { className: s, ...r } = e;
          return (0, a.jsx)("div", {
            ref: t,
            className: (0, o.cn)("flex flex-col space-y-1.5 p-6", s),
            ...r,
          });
        }).displayName = "CardHeader"),
        (r.forwardRef((e, t) => {
          let { className: s, ...r } = e;
          return (0, a.jsx)("div", {
            ref: t,
            className: (0, o.cn)("text-2xl font-semibold leading-none tracking-tight", s),
            ...r,
          });
        }).displayName = "CardTitle"),
        (r.forwardRef((e, t) => {
          let { className: s, ...r } = e;
          return (0, a.jsx)("div", {
            ref: t,
            className: (0, o.cn)("text-sm text-muted-foreground", s),
            ...r,
          });
        }).displayName = "CardDescription");
      let i = r.forwardRef((e, t) => {
        let { className: s, ...r } = e;
        return (0, a.jsx)("div", { ref: t, className: (0, o.cn)("p-6 pt-0", s), ...r });
      });
      (i.displayName = "CardContent"),
        (r.forwardRef((e, t) => {
          let { className: s, ...r } = e;
          return (0, a.jsx)("div", {
            ref: t,
            className: (0, o.cn)("flex items-center p-6 pt-0", s),
            ...r,
          });
        }).displayName = "CardFooter");
    },
  },
  (e) => {
    e.O(0, [964, 619, 58, 970, 120, 441, 255, 358], () => e((e.s = 3995))), (_N_E = e.O());
  },
]);
