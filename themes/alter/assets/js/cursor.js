(() => {
  const prefersFinePointer =
    window.matchMedia && window.matchMedia("(pointer:fine)").matches;
  if (!prefersFinePointer) return;

  // Elements (outer trail, mid trail, inner tip, glow halo, and motion line)
  const outer = document.createElement("div");
  outer.className = "cursor-outer";
  const mid = document.createElement("div");
  mid.className = "cursor-mid";
  const inner = document.createElement("div");
  inner.className = "cursor-inner";
  const halo = document.createElement("div");
  halo.className = "cursor-halo";
  const line = document.createElement("div");
  line.className = "cursor-line";

  document.body.appendChild(halo);
  document.body.appendChild(line);
  document.body.appendChild(outer);
  document.body.appendChild(mid);
  document.body.appendChild(inner);

  let targetX = window.innerWidth / 2;
  let targetY = window.innerHeight / 2;
  let outerX = targetX;
  let outerY = targetY;
  let midX = targetX;
  let midY = targetY;
  let innerX = targetX;
  let innerY = targetY;

  let lastHoverUpdate = 0;
  let hovering = false;

  function lerp(a, b, t) {
    return a + (b - a) * t;
  }

  function setHoverState(isHover) {
    hovering = isHover;
    outer.classList.toggle("is-hover", hovering);
    mid.classList.toggle("is-hover", hovering);
    inner.classList.toggle("is-hover", hovering);
    halo.classList.toggle("is-hover", hovering);
  }

  function updateHoverFromPoint(x, y) {
    const el = document.elementFromPoint(x, y);
    if (!el) return setHoverState(false);
    const hit =
      el.closest && el.closest("a,button,.btn,.nav-link,[role='button']");
    setHoverState(!!hit);
  }

  function showCursor() {
    outer.classList.add("is-visible");
    mid.classList.add("is-visible");
    inner.classList.add("is-visible");
    halo.classList.add("is-visible");
    line.classList.add("is-visible");
  }

  function hideCursor() {
    outer.classList.remove("is-visible");
    mid.classList.remove("is-visible");
    inner.classList.remove("is-visible");
    halo.classList.remove("is-visible");
    line.classList.remove("is-visible");
  }

  let pressed = false;
  window.addEventListener(
    "pointermove",
    (e) => {
      targetX = e.clientX;
      targetY = e.clientY;

      const now = performance.now();
      if (now - lastHoverUpdate > 70) {
        lastHoverUpdate = now;
        updateHoverFromPoint(targetX, targetY);
      }

      showCursor();
    },
    { passive: true }
  );

  window.addEventListener("pointerdown", () => {
    pressed = true;
    outer.classList.add("is-pressed");
    mid.classList.add("is-pressed");
    inner.classList.add("is-pressed");
    halo.classList.add("is-pressed");
  });
  window.addEventListener("pointerup", () => {
    pressed = false;
    outer.classList.remove("is-pressed");
    mid.classList.remove("is-pressed");
    inner.classList.remove("is-pressed");
    halo.classList.remove("is-pressed");
  });

  window.addEventListener("mouseleave", () => hideCursor());

  function tick() {
    // Smooth trails with slightly different speeds.
    const o = 0.13;
    const m = 0.2;
    const i = 0.32;

    outerX = lerp(outerX, targetX, o);
    outerY = lerp(outerY, targetY, o);

    midX = lerp(midX, targetX, m);
    midY = lerp(midY, targetY, m);

    innerX = lerp(innerX, targetX, i);
    innerY = lerp(innerY, targetY, i);

    const dx = targetX - outerX;
    const dy = targetY - outerY;
    const speed = Math.min(900, Math.hypot(dx, dy));
    const angle = Math.atan2(dy, dx);

    const haloScale = 1 + speed / 1800;
    const lineLen = 30 + speed / 3; // px
    const lineScaleX = lineLen / 60; // based on CSS width (60px)

    const hoverBoost = hovering ? 1.14 : 1;
    const pressBoost = pressed ? 0.88 : 1;
    const outerScale = hoverBoost * pressBoost * (1 + speed / 12000);
    const midScale = (hovering ? 1.06 : 1) * (pressed ? 0.92 : 1);
    const innerScale = (hovering ? 1.2 : 1) * (pressed ? 0.9 : 1);

    outer.style.transform = `translate(${outerX}px, ${outerY}px) translate(-50%, -50%) rotate(${angle}rad) scale(${outerScale})`;
    mid.style.transform = `translate(${midX}px, ${midY}px) translate(-50%, -50%) scale(${midScale})`;
    inner.style.transform = `translate(${innerX}px, ${innerY}px) translate(-50%, -50%) scale(${innerScale})`;

    halo.style.transform = `translate(${outerX}px, ${outerY}px) translate(-50%, -50%) scale(${haloScale})`;

    // Motion line points opposite to the velocity (towards the trail)
    line.style.transform = `translate(${outerX}px, ${outerY}px) translate(-50%, -50%) rotate(${angle + Math.PI}rad) scaleX(${lineScaleX})`;

    requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
})();

