(function () {
  const menuToggle = document.querySelector("[data-menu-toggle]");
  const mobileMenu = document.querySelector("[data-mobile-menu]");
  const menuLinks = document.querySelectorAll(".mobile-menu a, .nav-links a");

  function setMenuOpen(isOpen) {
    if (!menuToggle || !mobileMenu) return;
    menuToggle.classList.toggle("is-active", isOpen);
    mobileMenu.classList.toggle("is-open", isOpen);
    document.body.classList.toggle("menu-open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Закрити меню" : "Відкрити меню");
  }

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
      setMenuOpen(!mobileMenu.classList.contains("is-open"));
    });

    menuLinks.forEach((link) => {
      link.addEventListener("click", () => setMenuOpen(false));
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        closeLightbox();
      }
    });
  }

  const revealItems = document.querySelectorAll(".reveal");
  const counters = document.querySelectorAll("[data-counter]");
  const hasReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const animatedCounters = new WeakSet();

  function animateCounter(counter) {
    if (animatedCounters.has(counter)) return;
    animatedCounters.add(counter);

    const target = Number(counter.dataset.target || "0");
    const decimals = Number(counter.dataset.decimal || "0");
    const duration = hasReducedMotion ? 0 : 1200;
    const startTime = performance.now();

    function tick(now) {
      const progress = duration ? Math.min((now - startTime) / duration, 1) : 1;
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
          entry.target.classList.add("is-visible");
          if (entry.target.matches("[data-counter]")) animateCounter(entry.target);
          entry.target.querySelectorAll("[data-counter]").forEach(animateCounter);
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.18 }
    );

    revealItems.forEach((item) => observer.observe(item));
    counters.forEach((counter) => observer.observe(counter));
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    counters.forEach(animateCounter);
  }

  const reviews = [
    {
      name: "Анна Шмідт",
      location: "Німеччина",
      rating: 5,
      text: "Маршрут був красивий і дуже добре організований. Видно, що команда знає гори і вміє працювати з гостями.",
      image: "assets/images/dzhyp-grand-cherokee-lisova-doroga.webp",
    },
    {
      name: "Жан-П'єр Дюбуа",
      location: "Франція",
      rating: 5,
      text: "Карпати з джипа виглядають зовсім інакше. Було достатньо драйву, але без відчуття небезпеки.",
      image: "assets/images/jeep-wrangler-lisova-doroga-karpaty.webp",
    },
    {
      name: "Катерина Коваль",
      location: "Україна",
      rating: 5,
      text: "Я думала, що добре знаю Карпати, але цей тур показав місця, де я раніше ніколи не була.",
      image: "assets/images/dzhyp-grand-cherokee-lisova-doroga.webp",
    },
    {
      name: "Олександр Мельник",
      location: "Львів",
      rating: 5,
      text: "Брали маршрут для компанії друзів. Авто чисті, гід спокійний, зупинки продумані. Хочеться повторити.",
      image: "assets/images/jeep-wrangler-lisova-doroga-karpaty.webp",
    },
    {
      name: "Марія Савчук",
      location: "Київ",
      rating: 5,
      text: "Їздили з дітьми, тому переживали за безпеку. Нас одразу заспокоїли і підібрали дуже комфортний маршрут.",
      image: "assets/images/dzhyp-grand-cherokee-lisova-doroga.webp",
    },
    {
      name: "Томаш Новак",
      location: "Польща",
      rating: 5,
      text: "Найкраща частина подорожі Україною. Гори, джип, кава на зупинці і дуже професійна команда.",
      image: "assets/images/jeep-wrangler-lisova-doroga-karpaty.webp",
    },
  ];

  const carousel = document.querySelector("[data-review-carousel]");
  if (carousel) {
    const textNode = carousel.querySelector("[data-review-text]");
    const nameNode = carousel.querySelector("[data-review-name]");
    const locationNode = carousel.querySelector("[data-review-location]");
    const imageNode = carousel.querySelector("[data-review-image]");
    const starsNode = carousel.querySelector("[data-review-stars]");
    const dotsNode = carousel.querySelector("[data-review-dots]");
    const prevButton = carousel.querySelector("[data-review-prev]");
    const nextButton = carousel.querySelector("[data-review-next]");
    let currentIndex = 0;

    function renderDots() {
      if (!dotsNode) return;
      dotsNode.innerHTML = "";
      reviews.forEach((_, index) => {
        const dot = document.createElement("button");
        dot.classList.add("review-dot");
        dot.type = "button";
        dot.setAttribute("aria-label", `Перейти до відгуку ${index + 1}`);
        dot.addEventListener("click", () => setReview(index));
        dotsNode.appendChild(dot);
      });
    }

    function setReview(index) {
      currentIndex = (index + reviews.length) % reviews.length;
      const review = reviews[currentIndex];

      if (textNode) textNode.textContent = review.text;
      if (nameNode) nameNode.textContent = review.name;
      if (locationNode) locationNode.textContent = review.location;
      if (imageNode) {
        imageNode.src = review.image;
        imageNode.alt = review.name;
      }
      if (starsNode) {
        starsNode.textContent = "★".repeat(review.rating);
        starsNode.setAttribute("aria-label", `${review.rating} зірок`);
      }

      if (dotsNode) {
        dotsNode.querySelectorAll(".review-dot").forEach((dot, dotIndex) => {
          dot.classList.toggle("is-active", dotIndex === currentIndex);
          dot.setAttribute("aria-current", dotIndex === currentIndex ? "true" : "false");
        });
      }
    }

    renderDots();
    setReview(0);
    prevButton?.addEventListener("click", () => setReview(currentIndex - 1));
    nextButton?.addEventListener("click", () => setReview(currentIndex + 1));
  }

  const lightbox = document.querySelector("[data-lightbox]");
  const lightboxImage = document.querySelector("[data-lightbox-image]");
  const lightboxClose = document.querySelector("[data-lightbox-close]");

  function openLightbox(src, alt) {
    if (!lightbox || !lightboxImage) return;
    lightboxImage.src = src;
    lightboxImage.alt = alt || "";
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.classList.add("lightbox-open");
  }

  function closeLightbox() {
    if (!lightbox || !lightboxImage) return;
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.classList.remove("lightbox-open");
    lightboxImage.src = "";
  }

  document.querySelectorAll("[data-lightbox-src]").forEach((item) => {
    item.addEventListener("click", () => {
      openLightbox(item.dataset.lightboxSrc, item.dataset.lightboxAlt);
    });
  });

  lightboxClose?.addEventListener("click", closeLightbox);
  lightbox?.addEventListener("click", (event) => {
    if (event.target === lightbox) closeLightbox();
  });

  const reelTrack = document.querySelector("[data-reel-track]");
  const reelPrev = document.querySelector("[data-reel-prev]");
  const reelNext = document.querySelector("[data-reel-next]");

  function scrollReels(direction) {
    if (!reelTrack) return;
    const card = reelTrack.querySelector(".reel-card");
    const amount = card ? card.getBoundingClientRect().width + 24 : 320;
    reelTrack.scrollBy({ left: amount * direction, behavior: "smooth" });
  }

  reelPrev?.addEventListener("click", () => scrollReels(-1));
  reelNext?.addEventListener("click", () => scrollReels(1));
})();
