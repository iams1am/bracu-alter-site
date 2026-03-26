(function () {
  // --- Dropdown menus ---
  const dropdowns = document.querySelectorAll(".nav-item.dropdown");
  dropdowns.forEach(dd => {
    const menu = dd.querySelector(".dropdown-menu");
    let hoverTimeout;

    function open() {
      clearTimeout(hoverTimeout);
      dropdowns.forEach(other => {
        if (other !== dd) other.classList.remove("open");
      });
      dd.classList.add("open");
    }

    function close() {
      dd.classList.remove("open");
    }

    function delayedClose() {
      hoverTimeout = setTimeout(close, 200);
    }

    dd.addEventListener("mouseenter", open);
    dd.addEventListener("mouseleave", delayedClose);

    if (menu) {
      menu.addEventListener("mouseenter", open);
      menu.addEventListener("mouseleave", delayedClose);
    }

    document.addEventListener("click", (e) => {
      if (!dd.contains(e.target)) close();
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      dropdowns.forEach(dd => dd.classList.remove("open"));
    }
  });

  // --- Homepage scroll animations ---
  var isHome = document.body.getAttribute("data-page") === "home";
  if (!isHome) return;

  var navbar = document.querySelector(".navbar");
  var heroFixed = document.getElementById("hero-fixed-bg");
  var spacer = document.querySelector(".hero-scroll-spacer");
  var heroTitle = document.querySelector(".hero-banner-title");
  var heroSubtitle = document.querySelector(".hero-banner-subtitle");
  var heroActions = document.querySelector(".hero-actions");
  var statsBar = document.getElementById("hero-stats-bar");
  var revealSections = document.querySelectorAll(".scroll-reveal");

  if (navbar) navbar.classList.add("navbar-transparent");

  if (heroTitle) { heroTitle.style.opacity = "0"; heroTitle.style.transform = "translateY(80px)"; }
  if (heroSubtitle) { heroSubtitle.style.opacity = "0"; heroSubtitle.style.transform = "translateY(80px)"; }
  if (heroActions) { heroActions.style.opacity = "0"; heroActions.style.transform = "translateY(80px)"; }
  if (statsBar) { statsBar.style.opacity = "0"; statsBar.style.transform = "translateY(40px)"; }

  var ease = function(t) { return t < 0.5 ? 2*t*t : -1+(4-2*t)*t; };

  function onScroll() {
    var scrollY = window.scrollY || window.pageYOffset;
    var vh = window.innerHeight;

    var spacerH = spacer ? spacer.offsetHeight : 3 * vh;
    var scrollRoom = spacerH - vh;
    if (scrollRoom <= 0) scrollRoom = vh;
    var progress = Math.min(scrollY / scrollRoom, 1);

    // --- TEXT FADE IN: 0% → 12% (staggered) ---
    var titleInP  = Math.max(0, Math.min(progress / 0.12, 1));
    var subInP    = Math.max(0, Math.min((progress - 0.03) / 0.12, 1));
    var actInP    = Math.max(0, Math.min((progress - 0.06) / 0.12, 1));

    // --- STATS BAR FADE IN: 20% → 30% ---
    var statsInP  = Math.max(0, Math.min((progress - 0.20) / 0.10, 1));

    // --- TEXT FADE OUT: 70% → 85% (staggered reverse) ---
    var actOutP   = Math.max(0, Math.min((progress - 0.70) / 0.15, 1));
    var subOutP   = Math.max(0, Math.min((progress - 0.75) / 0.15, 1));
    var titleOutP = Math.max(0, Math.min((progress - 0.80) / 0.15, 1));

    // --- STATS BAR FADE OUT: 85% → 95% ---
    var statsOutP = Math.max(0, Math.min((progress - 0.85) / 0.10, 1));

    // Compute final opacities
    var titleOp = ease(titleInP) * (1 - ease(titleOutP));
    var subOp   = ease(subInP) * (1 - ease(subOutP));
    var actOp   = ease(actInP) * (1 - ease(actOutP));
    var statsOp = ease(statsInP) * (1 - ease(statsOutP));

    if (heroTitle) {
      heroTitle.style.opacity = String(titleOp);
      heroTitle.style.transform = "translateY(" + (80 * (1 - ease(titleInP)) + (-30 * ease(titleOutP))) + "px)";
    }
    if (heroSubtitle) {
      heroSubtitle.style.opacity = String(subOp);
      heroSubtitle.style.transform = "translateY(" + (80 * (1 - ease(subInP)) + (-30 * ease(subOutP))) + "px)";
    }
    if (heroActions) {
      heroActions.style.opacity = String(actOp);
      heroActions.style.transform = "translateY(" + (80 * (1 - ease(actInP)) + (-30 * ease(actOutP))) + "px)";
    }
    if (statsBar) {
      statsBar.style.opacity = String(statsOp);
      statsBar.style.transform = "translateY(" + (40 * (1 - ease(statsInP))) + "px)";
    }

    // Hide fixed hero once scrolled past spacer
    if (heroFixed) {
      heroFixed.style.visibility = scrollY >= spacerH ? "hidden" : "visible";
    }

    // Navbar: transparent while in early hero scroll, colorful once texts are shown
    if (navbar) {
      if (progress < 0.25) {
        navbar.classList.add("navbar-transparent");
      } else {
        navbar.classList.remove("navbar-transparent");
      }
    }

    // Section reveal on scroll into view
    revealSections.forEach(function(section) {
      if (section.classList.contains("revealed")) return;
      var rect = section.getBoundingClientRect();
      if (rect.top < vh * 0.88) {
        section.classList.add("revealed");

        // Scrolling wheel entrance: pause animation, slide in, then resume
        if (section.classList.contains("scroll-wheel-entrance")) {
          var scrollInner = section.querySelector(".stats-scroll") || section.querySelector(".sponsors-scroll");
          if (scrollInner) {
            scrollInner.style.animationPlayState = "paused";
            setTimeout(function() {
              scrollInner.style.animationPlayState = "running";
            }, 1400);
          }
        }
      }
    });
  }

  // --- Premium smooth scroll (lerp-based inertia) ---
  var currentScroll = window.scrollY || 0;
  var targetScroll = currentScroll;
  var smoothing = 0.07;
  var scrolling = false;

  window.addEventListener("wheel", function(e) {
    e.preventDefault();
    var maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    targetScroll = Math.max(0, Math.min(targetScroll + e.deltaY * 0.8, maxScroll));
    if (!scrolling) smoothLoop();
  }, { passive: false });

  function smoothLoop() {
    scrolling = true;
    currentScroll += (targetScroll - currentScroll) * smoothing;

    if (Math.abs(targetScroll - currentScroll) < 0.5) {
      currentScroll = targetScroll;
      window.scrollTo(0, currentScroll);
      onScroll();
      scrolling = false;
      return;
    }

    window.scrollTo(0, currentScroll);
    onScroll();
    requestAnimationFrame(smoothLoop);
  }

  // Sync on external scroll (keyboard, scrollbar drag, touch)
  var externalTicking = false;
  window.addEventListener("scroll", function() {
    if (!scrolling) {
      targetScroll = window.scrollY;
      currentScroll = window.scrollY;
    }
    if (!externalTicking) {
      requestAnimationFrame(function() {
        onScroll();
        externalTicking = false;
      });
      externalTicking = true;
    }
  }, { passive: true });

  onScroll();
})();
