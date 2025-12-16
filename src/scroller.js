export function smoothScrollTo(target, offset = 0, { duration = 500, container } = {}) {
    const el = typeof target === 'string' ? document.querySelector(target) : target;
    // console.log(el);

    if (!el) return Promise.resolve();


    const root = document.scrollingElement || document.documentElement;
    const scroller = container || root;

    const calculatedOffset = -(window.innerHeight * (offset / 100))

    const clamp = (v, min, max) => Math.max(min, Math.min(max, v | 0));
    const absY = () => {
        if (scroller === root) {
            const y = root.scrollTop + el.getBoundingClientRect().top - calculatedOffset;
            return clamp(y, 0, (root.scrollHeight - root.clientHeight) | 0);
        }
        const r = scroller.getBoundingClientRect();
        const y = scroller.scrollTop + (el.getBoundingClientRect().top - r.top) - calculatedOffset;
        return clamp(y, 0, (scroller.scrollHeight - scroller.clientHeight) | 0);
    };

    const start = scroller.scrollTop | 0;
    const to = absY();
    const delta = to - start;
    const ease = t => 1 - Math.pow(1 - t, 3);
    const t0 = performance.now();

    return new Promise(res => {
        const step = now => {
            const p = Math.min(1, (now - t0) / duration);
            scroller.scrollTop = start + delta;
            if (p < 1) requestAnimationFrame(step);
            else {
                // добивка после автоскрытия панелей Safari
                requestAnimationFrame(() => { scroller.scrollTop = absY(); res(); });
            }
        };
        requestAnimationFrame(step);
    });

    // if (Math.abs(delta) < 1) return Promise.resolve();


}
