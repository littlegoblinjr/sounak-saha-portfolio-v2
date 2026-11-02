import { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

export function useSmoothScroll() {
    useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        // Anchor targets clear the sticky nav through `scroll-padding-top` on html, which Lenis reads.
        const lenis = new Lenis({
            autoRaf: true,
            lerp: 0.09,
            wheelMultiplier: 0.9,
            anchors: { duration: 1.2 },
        });

        const hero = document.querySelector<HTMLElement>('.hero');
        const onScroll = () => {
            if (!hero) return;
            const progress = Math.min(1, Math.max(0, window.scrollY / hero.offsetHeight));
            hero.style.setProperty('--hero-p', progress.toFixed(4));
        };
        lenis.on('scroll', onScroll);
        onScroll();

        return () => {
            lenis.destroy();
            hero?.style.removeProperty('--hero-p');
        };
    }, []);
}
