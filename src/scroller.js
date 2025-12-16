// scroller.js
import gsap from "gsap";
import { ScrollTrigger, ScrollToPlugin } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const clamp = (v, min, max) => Math.max(min, Math.min(max, v));
const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

function getAbsY(el, scroller, root, offsetPx) {
    if (scroller === root) {
        const y = root.scrollTop + el.getBoundingClientRect().top - offsetPx;
        return clamp(y, 0, root.scrollHeight - root.clientHeight);
    }
    const r = scroller.getBoundingClientRect();
    const y = scroller.scrollTop + (el.getBoundingClientRect().top - r.top) - offsetPx;
    return clamp(y, 0, scroller.scrollHeight - scroller.clientHeight);
}

// offset — в процентах от vh (как у тебя). Пример: -50 => поднять цель на 50vh вверх.
export function smoothScrollTo(
    target,
    offset = -10,
    { duration = 500, container, smoother } = {}
) {
    const el = typeof target === "string" ? document.querySelector(target) : target;
    if (!el) return Promise.resolve();

    const root = document.scrollingElement || document.documentElement;
    const scroller = container || root;
    const offsetPx = -(window.innerHeight * (offset / 100));

    const sm = smoother || (window.ScrollSmoother?.get?.() ?? null);

    // --- если включён ScrollSmoother: скроллим через него ---
    if (sm) {
        const start = sm.scrollTop();
        // считаем "абсолютную" позицию в документе (smoother работает с root-скроллом)
        const to = getAbsY(el, root, root, offsetPx);
        const delta = to - start;

        const t0 = performance.now();
        return new Promise((res) => {
            const step = (now) => {
                const p = Math.min(1, (now - t0) / duration);
                const v = start + delta * easeOutCubic(p);
                sm.scrollTop(v);
                ScrollTrigger.update();

                if (p < 1) requestAnimationFrame(step);
                else requestAnimationFrame(() => {
                    // добивка (iOS/панели/пересчёт)
                    const fix = getAbsY(el, root, root, offsetPx);
                    sm.scrollTop(fix);
                    ScrollTrigger.update();
                    res();
                });
            };
            requestAnimationFrame(step);
        });
    }

    // --- обычный скролл без smoother ---
    const start = scroller.scrollTop;
    const to = getAbsY(el, scroller, root, offsetPx);
    const delta = to - start;

    const t0 = performance.now();
    return new Promise((res) => {
        const step = (now) => {
            const p = Math.min(1, (now - t0) / duration);
            scroller.scrollTop = start + delta * easeOutCubic(p);

            if (p < 1) requestAnimationFrame(step);
            else requestAnimationFrame(() => {
                scroller.scrollTop = getAbsY(el, scroller, root, offsetPx);
                res();
            });
        };
        requestAnimationFrame(step);
    });
}
