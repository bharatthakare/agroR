(() => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-links");
  const closeMenu = () => {
    if (!toggle || !nav) return;
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open navigation");
    nav.classList.remove("open");
  };

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      toggle.setAttribute(
        "aria-label",
        open ? "Open navigation" : "Close navigation",
      );
      nav.classList.toggle("open", !open);
    });
    nav
      .querySelectorAll("a")
      .forEach((link) => link.addEventListener("click", closeMenu));
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeMenu();
    });
    window.addEventListener("resize", () => {
      if (window.innerWidth > 760) closeMenu();
    });
  }

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const revealItems = document.querySelectorAll(".reveal");
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  if ("IntersectionObserver" in window && !reduceMotion) {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -30px 0px" },
    );
    revealItems.forEach((el, i) => {
      el.style.transitionDelay = `${(i % 4) * 65}ms`;
      observer.observe(el);
    });
  } else {
    revealItems.forEach((el) => el.classList.add("visible"));
  }

  const form = document.getElementById("contact-form");
  const feedback = document.getElementById("form-feedback");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const data = new FormData(form);
      const name = String(data.get("name") || "").trim();
      const email = String(data.get("email") || "").trim();
      const interest = String(data.get("interest") || "").trim();
      const message = String(data.get("message") || "").trim();
      // Replace with your real company inbox before publishing.
      const recipient = "hello@agror.in";
      const subject = encodeURIComponent(`AgroR enquiry: ${interest}`);
      const body = encodeURIComponent(
        `Hello AgroR team,\\n\\n${message}\\n\\nName: ${name}\\nEmail: ${email}\\nInterested in: ${interest}\\n\\nSent from the AgroR website.`,
      );
      if (feedback)
        feedback.textContent =
          "Your email app should open with the message prepared. If it doesn't, email hello@agror.in directly.";
      window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    });
  }
})();

// AgroR intro screen
window.addEventListener("load", () => {
  const intro = document.getElementById("intro-screen");

  if (intro) {
    setTimeout(() => {
      intro.classList.add("hide");

      setTimeout(() => {
        intro.remove();
      }, 300);
    }, 800);
  }
});
