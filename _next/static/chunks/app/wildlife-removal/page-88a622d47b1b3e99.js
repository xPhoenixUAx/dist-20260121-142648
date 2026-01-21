(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [988],
  {
    1352: (e, t, s) => {
      Promise.resolve().then(s.t.bind(s, 2619, 23)),
        Promise.resolve().then(s.t.bind(s, 1356, 23)),
        Promise.resolve().then(s.bind(s, 2109)),
        Promise.resolve().then(s.bind(s, 3496)),
        Promise.resolve().then(s.bind(s, 3406));
    },
    2109: (e, t, s) => {
      "use strict";
      s.d(t, { EmojiIcon: () => r });
      var i = s(5155),
        n = s(6407);
      function r(e) {
        let { unified: t, label: s, size: r = 20, className: a } = e,
          o = ["inline-flex items-center justify-center leading-none", a].filter(Boolean).join(" ");
        return (0, i.jsx)("span", {
          className: o,
          role: "img",
          "aria-label": s,
          title: s,
          children: (0, i.jsx)(n.zT, { unified: t, emojiStyle: n.Ai.TWITTER, size: r }),
        });
      }
    },
    3406: (e, t, s) => {
      "use strict";
      s.d(t, { Tabs: () => o, TabsContent: () => c, TabsList: () => l, TabsTrigger: () => d });
      var i = s(5155),
        n = s(2115),
        r = s(574),
        a = s(4269);
      let o = r.bL,
        l = n.forwardRef((e, t) => {
          let { className: s, ...n } = e;
          return (0, i.jsx)(r.B8, {
            ref: t,
            className: (0, a.cn)(
              "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
              s,
            ),
            ...n,
          });
        });
      l.displayName = r.B8.displayName;
      let d = n.forwardRef((e, t) => {
        let { className: s, ...n } = e;
        return (0, i.jsx)(r.l9, {
          ref: t,
          className: (0, a.cn)(
            "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
            s,
          ),
          ...n,
        });
      });
      d.displayName = r.l9.displayName;
      let c = n.forwardRef((e, t) => {
        let { className: s, ...n } = e;
        return (0, i.jsx)(r.UC, {
          ref: t,
          className: (0, a.cn)(
            "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            s,
          ),
          ...n,
        });
      });
      c.displayName = r.UC.displayName;
    },
    3496: (e, t, s) => {
      "use strict";
      s.d(t, {
        Accordion: () => l,
        AccordionContent: () => f,
        AccordionItem: () => d,
        AccordionTrigger: () => c,
      });
      var i = s(5155),
        n = s(2115),
        r = s(6374),
        a = s(9007),
        o = s(4269);
      let l = r.bL,
        d = n.forwardRef((e, t) => {
          let { className: s, ...n } = e;
          return (0, i.jsx)(r.q7, { ref: t, className: (0, o.cn)("border-b", s), ...n });
        });
      d.displayName = "AccordionItem";
      let c = n.forwardRef((e, t) => {
        let { className: s, children: n, ...l } = e;
        return (0, i.jsx)(r.Y9, {
          className: "flex",
          children: (0, i.jsxs)(r.l9, {
            ref: t,
            className: (0, o.cn)(
              "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
              s,
            ),
            ...l,
            children: [
              n,
              (0, i.jsx)(a.A, { className: "h-4 w-4 shrink-0 transition-transform duration-200" }),
            ],
          }),
        });
      });
      c.displayName = r.l9.displayName;
      let f = n.forwardRef((e, t) => {
        let { className: s, children: n, ...a } = e;
        return (0, i.jsx)(r.UC, {
          ref: t,
          className:
            "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
          ...a,
          children: (0, i.jsx)("div", { className: (0, o.cn)("pb-4 pt-0", s), children: n }),
        });
      });
      f.displayName = r.UC.displayName;
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
  },
  (e) => {
    e.O(0, [666, 619, 58, 356, 560, 346, 441, 255, 358], () => e((e.s = 1352))), (_N_E = e.O());
  },
]);
