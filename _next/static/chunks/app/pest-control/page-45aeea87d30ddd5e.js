(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [975],
  {
    2109: (e, i, s) => {
      "use strict";
      s.d(i, { EmojiIcon: () => r });
      var t = s(5155),
        n = s(6407);
      function r(e) {
        let { unified: i, label: s, size: r = 20, className: a } = e,
          l = ["inline-flex items-center justify-center leading-none", a].filter(Boolean).join(" ");
        return (0, t.jsx)("span", {
          className: l,
          role: "img",
          "aria-label": s,
          title: s,
          children: (0, t.jsx)(n.zT, { unified: i, emojiStyle: n.Ai.TWITTER, size: r }),
        });
      }
    },
    3406: (e, i, s) => {
      "use strict";
      s.d(i, { Tabs: () => l, TabsContent: () => d, TabsList: () => o, TabsTrigger: () => f });
      var t = s(5155),
        n = s(2115),
        r = s(574),
        a = s(4269);
      let l = r.bL,
        o = n.forwardRef((e, i) => {
          let { className: s, ...n } = e;
          return (0, t.jsx)(r.B8, {
            ref: i,
            className: (0, a.cn)(
              "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
              s,
            ),
            ...n,
          });
        });
      o.displayName = r.B8.displayName;
      let f = n.forwardRef((e, i) => {
        let { className: s, ...n } = e;
        return (0, t.jsx)(r.l9, {
          ref: i,
          className: (0, a.cn)(
            "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
            s,
          ),
          ...n,
        });
      });
      f.displayName = r.l9.displayName;
      let d = n.forwardRef((e, i) => {
        let { className: s, ...n } = e;
        return (0, t.jsx)(r.UC, {
          ref: i,
          className: (0, a.cn)(
            "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            s,
          ),
          ...n,
        });
      });
      d.displayName = r.UC.displayName;
    },
    4269: (e, i, s) => {
      "use strict";
      s.d(i, { cn: () => r });
      var t = s(2821),
        n = s(5889);
      function r() {
        for (var e = arguments.length, i = Array(e), s = 0; s < e; s++) i[s] = arguments[s];
        return (0, n.QP)((0, t.$)(i));
      }
    },
    8514: (e, i, s) => {
      Promise.resolve().then(s.t.bind(s, 2619, 23)),
        Promise.resolve().then(s.t.bind(s, 1356, 23)),
        Promise.resolve().then(s.bind(s, 2109)),
        Promise.resolve().then(s.bind(s, 3406));
    },
  },
  (e) => {
    e.O(0, [666, 619, 58, 356, 560, 441, 255, 358], () => e((e.s = 8514))), (_N_E = e.O());
  },
]);
