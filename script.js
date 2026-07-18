(function () {
  const conversionId = "AW-18294638782";
  const conversionLabel = "WtLtCObapdAceL6RyJNE";
  const conversionSendTo = `${conversionId}/${conversionLabel}`;

  function reportPhoneConversion(url) {
    let callbackCalled = false;

    const callback = function () {
      if (callbackCalled) return;

      callbackCalled = true;

      if (typeof url !== "undefined") {
        window.location.href = url;
      }
    };

    if (typeof window.gtag === "function") {
      window.gtag("event", "conversion", {
        send_to: conversionSendTo,
        event_callback: callback,
      });
    }

    setTimeout(callback, 500);
  }

  document.querySelectorAll('a[href^="tel:"]').forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      reportPhoneConversion(this.href);
    });
  });

  // ===========================
  // Меню
  // ===========================

  const menuToggle = document.querySelector("[data-menu-toggle]");
  const mobileMenu = document.querySelector("[data-mobile-menu]");
  const menuLinks = document.querySelectorAll(".mobile-menu a, .nav-links a");

  function setMenuOpen(isOpen) {
    if (!menuToggle || !mobileMenu) return;

    menuToggle.classList.toggle("is-active", isOpen);
    mobileMenu.classList.toggle("is-open", isOpen);
    document.body.classList.toggle("menu-open", isOpen);

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Закрити меню" : "Відкрити меню"
    );
  }

  const lightbox = document.querySelector("[data-lightbox]");
  const lightboxImage = document.querySelector("[data-lightbox-image]");

  function closeLightbox() {
    if (!lightbox || !lightboxImage) return;

    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.classList.remove("lightbox-open");
    lightboxImage.src = "";
  }

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () =>
      setMenuOpen(!mobileMenu.classList.contains("is-open"))
    );

    menuLinks.forEach((link) =>
      link.addEventListener("click", () => setMenuOpen(false))
    );

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        closeLightbox();
      }
    });
  }

  // ===========================
  // Анімація
  // ===========================

  const revealItems = document.querySelectorAll(".reveal");
  const counters = document.querySelectorAll("[data-counter]");
  const hasReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  const animatedCounters = new WeakSet();

  function animateCounter(counter) {
    if (animatedCounters.has(counter)) return;

    animatedCounters.add(counter);

    const target = Number(counter.dataset.target || "0");
    const decimals = Number(counter.dataset.decimal || "0");

    const duration = hasReducedMotion ? 0 : 1200;
    const startTime = performance.now();

    function tick(now) {
      const progress = duration
        ? Math.min((now - startTime) / duration, 1)
        : 1;

      const eased = 1 - Math.pow(1 - progress, 3);

      counter.textContent = (target * eased).toFixed(decimals);

      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const target = entry.target;

          target.classList.add("is-visible");

          if (target.matches("[data-counter]")) {
            animateCounter(target);
          }

          target
            .querySelectorAll("[data-counter]")
            .forEach(animateCounter);

          observer.unobserve(target);
        });
      },
      {
        threshold: 0.18,
      }
    );

    revealItems.forEach((item) => observer.observe(item));
    counters.forEach((counter) => observer.observe(counter));
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    counters.forEach(animateCounter);
  }

  // ===========================
  // Lightbox
  // ===========================

  const lightboxClose = document.querySelector(
    "[data-lightbox-close]"
  );

  function openLightbox(src, alt) {
    if (!lightbox || !lightboxImage) return;

    lightboxImage.src = src;
    lightboxImage.alt = alt || "";

    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");

    document.body.classList.add("lightbox-open");
  }

  document.querySelectorAll("[data-lightbox-src]").forEach((item) => {
    item.addEventListener("click", () =>
      openLightbox(item.dataset.lightboxSrc, item.dataset.lightboxAlt)
    );
  });

  lightboxClose?.addEventListener("click", closeLightbox);

  lightbox?.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });
})();
