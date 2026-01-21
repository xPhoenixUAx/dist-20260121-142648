(() => {
  const BASE_PATH = "/dist-20260121-142648";

  function onReady(fn) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", fn, { once: true });
    } else {
      fn();
    }
  }

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");
  }

  function initMobileMenu() {
    const toggle = document.querySelector('header button[aria-haspopup="dialog"]');
    if (!toggle) return;

    const headerNav = document.querySelector("header nav");
    const links = Array.from(headerNav?.querySelectorAll("a[href]") ?? []).map((a) => ({
      href: a.getAttribute("href") || "#",
      label: (a.textContent || "").trim(),
    }));

    if (links.length === 0) return;

    const overlay = document.createElement("div");
    overlay.id = "mobile-menu-overlay";
    overlay.className = "fixed inset-0 z-[9999] hidden";
    overlay.innerHTML = `
      <div class="absolute inset-0 bg-black/60"></div>
      <aside class="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-background border-l shadow-xl p-6 overflow-auto">
        <div class="flex items-center justify-between mb-6">
          <a class="font-bold font-headline text-xl" href="${BASE_PATH}/">Menu</a>
          <button type="button" class="inline-flex items-center justify-center rounded-md border border-input h-10 w-10" aria-label="Close menu">
            <span class="text-xl leading-none">&times;</span>
          </button>
        </div>
        <nav class="flex flex-col gap-3 text-base">
          ${links
            .map(
              (l) =>
                `<a class="py-2 px-3 rounded-md hover:bg-accent hover:text-accent-foreground" href="${escapeHtml(
                  l.href,
                )}">${escapeHtml(l.label)}</a>`,
            )
            .join("")}
        </nav>
      </aside>
    `;

    document.body.appendChild(overlay);

    const closeBtn = overlay.querySelector('button[aria-label="Close menu"]');
    const backdrop = overlay.firstElementChild;

    function open() {
      overlay.classList.remove("hidden");
      document.documentElement.style.overflow = "hidden";
      toggle.setAttribute("aria-expanded", "true");
    }

    function close() {
      overlay.classList.add("hidden");
      document.documentElement.style.overflow = "";
      toggle.setAttribute("aria-expanded", "false");
    }

    toggle.addEventListener("click", (e) => {
      e.preventDefault();
      if (overlay.classList.contains("hidden")) open();
      else close();
    });
    closeBtn?.addEventListener("click", close);
    backdrop?.addEventListener("click", close);
    overlay.addEventListener("click", (e) => {
      const target = e.target;
      if (target instanceof HTMLAnchorElement) close();
    });
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") close();
    });
  }

  function initReviews() {
    const showMoreBtn = Array.from(document.querySelectorAll("button")).find(
      (b) => (b.textContent || "").trim() === "Show More Reviews",
    );
    if (!showMoreBtn) return;

    const reviewParagraphs = Array.from(document.querySelectorAll("p")).filter((p) =>
      (p.getAttribute("style") || "").includes("-webkit-line-clamp"),
    );

    if (reviewParagraphs.length === 0) return;

    showMoreBtn.addEventListener("click", () => {
      const expanded = showMoreBtn.getAttribute("data-expanded") === "true";

      for (const p of reviewParagraphs) {
        if (!p.dataset.origStyle) p.dataset.origStyle = p.getAttribute("style") || "";
        if (expanded) {
          p.setAttribute("style", p.dataset.origStyle);
        } else {
          p.setAttribute("style", "overflow: visible; display: block;");
        }
      }

      showMoreBtn.setAttribute("data-expanded", expanded ? "false" : "true");
      showMoreBtn.textContent = expanded ? "Show More Reviews" : "Show Less Reviews";
    });
  }

  function initFaq() {
    const section = document.querySelector("#faq-generator");
    if (!section) return;

    const topicButtons = Array.from(
      section.querySelectorAll('.flex.flex-wrap button[type="button"], .flex.flex-wrap button:not([type])'),
    );

    const faqData = {
      general: [
        {
          question: "Do you offer inspections?",
          answer:
            "Yes. We start with an initial inspection to understand the issue, identify entry points, and recommend the right plan.",
        },
        {
          question: "Are your treatments safe for kids and pets?",
          answer:
            "We prioritize eco-friendly, family-safe solutions. We’ll explain the products and precautions before any treatment begins.",
        },
        {
          question: "How quickly can you schedule service?",
          answer:
            "In many cases we can schedule within 24–48 hours. For urgent situations, call and we’ll do our best to prioritize you.",
        },
        {
          question: "Do you guarantee your work?",
          answer:
            "We stand behind our service. Guarantee terms depend on the type of problem and the plan selected, and we’ll review those details during the inspection.",
        },
        {
          question: "What should I do before you arrive?",
          answer:
            "If possible, clear access to the affected areas and note where you’ve seen activity. No special prep is required for most visits.",
        },
      ],
      wildlife: [
        {
          question: "Is wildlife removal humane?",
          answer:
            "Yes. Our approach focuses on humane removal and long-term prevention through exclusion and repairs.",
        },
        {
          question: "Can you remove animals from attics and walls?",
          answer:
            "Yes. We inspect, safely remove the animal(s), locate entry points, and recommend sealing/exclusion to prevent return.",
        },
        {
          question: "Will the animals come back after removal?",
          answer:
            "They can if entry points remain open. That’s why exclusion (sealing and repairs) is a key part of our process.",
        },
        {
          question: "Do you handle cleanup after wildlife?",
          answer:
            "We can advise on cleanup and offer solutions depending on the situation, including deodorizing and contamination mitigation when needed.",
        },
        {
          question: "What are signs of wildlife in the home?",
          answer:
            "Noises at night, scratching in walls/ceilings, droppings, damaged vents/soffits, and strong odors are common indicators.",
        },
      ],
      pest: [
        {
          question: "How do you determine what pest I have?",
          answer:
            "We identify the pest during inspection based on signs like droppings, trails, nests, and damage, then tailor the treatment plan.",
        },
        {
          question: "How many treatments are usually needed?",
          answer:
            "It depends on the pest and severity. Some issues resolve in one visit, while others require follow-ups for full control.",
        },
        {
          question: "Do you treat the inside, outside, or both?",
          answer:
            "Most plans focus on the exterior to prevent entry, with interior treatment as needed for active infestations.",
        },
        {
          question: "How can I prevent pests from returning?",
          answer:
            "Seal cracks and gaps, reduce moisture, store food securely, and keep clutter away from foundations. We’ll highlight key fixes during inspection.",
        },
        {
          question: "Do you offer eco-friendly pest control options?",
          answer:
            "Yes. We use targeted, responsible methods and choose products and placement to minimize impact while staying effective.",
        },
      ],
      billing: [
        {
          question: "How is pricing determined?",
          answer:
            "Pricing depends on the pest/wildlife type, severity, property size, access conditions, and the level of exclusion or follow-up needed.",
        },
        {
          question: "Do you provide estimates before starting?",
          answer:
            "Yes. After inspection, we explain the recommended plan and costs so you can decide before work begins.",
        },
        {
          question: "Do you offer ongoing service plans?",
          answer:
            "We can provide recurring maintenance options depending on your needs and local conditions.",
        },
        {
          question: "What payment methods do you accept?",
          answer:
            "We typically accept common card and digital payment options. If you have a preference, ask when scheduling.",
        },
        {
          question: "Are there additional fees for emergency visits?",
          answer:
            "Urgent or after-hours visits may include an additional fee depending on availability. We’ll confirm any extra cost upfront.",
        },
      ],
    };

    const topics = [
      { id: "general", label: "General Questions" },
      { id: "wildlife", label: "Wildlife Removal" },
      { id: "pest", label: "Pest Control" },
      { id: "billing", label: "Billing & Pricing" },
    ];

    const activeBtnClass =
      "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2";
    const inactiveBtnClass =
      "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2";

    for (let i = 0; i < topicButtons.length && i < topics.length; i++) {
      topicButtons[i].type = "button";
      topicButtons[i].dataset.faqTopic = topics[i].id;
      topicButtons[i].className = i === 0 ? activeBtnClass : inactiveBtnClass;
    }

    const mount = section.querySelector(".min-h-\\[300px\\]") || section.querySelector(".min-h-[300px]");
    if (!mount) return;

    function render(topicId) {
      const items = faqData[topicId] || [];
      mount.innerHTML = `
        <div class="w-full" data-orientation="vertical">
          ${items
            .map((item, idx) => {
              const contentId = `faq-${topicId}-${idx}-content`;
              const triggerId = `faq-${topicId}-${idx}-trigger`;
              return `
                <div data-state="closed" data-orientation="vertical" class="border-b" data-faq-item>
                  <h3 data-orientation="vertical" data-state="closed" class="flex">
                    <button
                      type="button"
                      aria-controls="${contentId}"
                      aria-expanded="false"
                      data-state="closed"
                      data-orientation="vertical"
                      id="${triggerId}"
                      class="flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180 text-lg text-left"
                      data-faq-trigger
                    >
                      ${escapeHtml(item.question)}
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down h-4 w-4 shrink-0 transition-transform duration-200">
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                    </button>
                  </h3>
                  <div
                    data-state="closed"
                    id="${contentId}"
                    hidden
                    role="region"
                    aria-labelledby="${triggerId}"
                    data-orientation="vertical"
                    class="overflow-hidden text-sm transition-all"
                  >
                    <div class="pb-4 pt-0 text-muted-foreground">${escapeHtml(item.answer)}</div>
                  </div>
                </div>
              `;
            })
            .join("")}
        </div>
      `;
    }

    function setTopic(topicId) {
      for (const btn of topicButtons) {
        const active = btn.dataset.faqTopic === topicId;
        btn.className = active ? activeBtnClass : inactiveBtnClass;
      }
      render(topicId);
    }

    section.addEventListener("click", (e) => {
      const target = e.target;
      if (!(target instanceof Element)) return;

      const topicBtn = target.closest("button[data-faq-topic]");
      if (topicBtn) {
        setTopic(topicBtn.getAttribute("data-faq-topic"));
        return;
      }

      const trigger = target.closest("button[data-faq-trigger]");
      if (!trigger) return;

      const item = trigger.closest("[data-faq-item]");
      if (!item) return;

      const contentId = trigger.getAttribute("aria-controls");
      if (!contentId) return;
      const content = item.querySelector(`#${CSS.escape(contentId)}`);
      if (!content) return;

      const isOpen = trigger.getAttribute("aria-expanded") === "true";

      // Close any open item (accordion behavior)
      for (const openTrigger of section.querySelectorAll("button[data-faq-trigger][aria-expanded=\"true\"]")) {
        openTrigger.setAttribute("aria-expanded", "false");
        openTrigger.setAttribute("data-state", "closed");
        const openItem = openTrigger.closest("[data-faq-item]");
        openItem?.setAttribute("data-state", "closed");
        openItem?.querySelector("h3")?.setAttribute("data-state", "closed");
        const openContentId = openTrigger.getAttribute("aria-controls");
        if (openContentId) {
          const openContent = openItem?.querySelector(`#${CSS.escape(openContentId)}`);
          if (openContent) {
            openContent.hidden = true;
            openContent.setAttribute("data-state", "closed");
          }
        }
      }

      if (isOpen) return;

      trigger.setAttribute("aria-expanded", "true");
      trigger.setAttribute("data-state", "open");
      item.setAttribute("data-state", "open");
      item.querySelector("h3")?.setAttribute("data-state", "open");
      content.hidden = false;
      content.setAttribute("data-state", "open");
    });

    setTopic("general");
  }

  onReady(() => {
    initMobileMenu();
    initReviews();
    initFaq();
  });
})();

