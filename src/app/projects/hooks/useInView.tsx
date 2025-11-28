import { useEffect, useRef, useState } from "react";

export function useInView(options = {}) {
    const ref = useRef<HTMLElement | null>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setInView(true);
                        observer.unobserve(el); // Stop observing after first reveal
                    }
                });
            },
            {
                threshold: 0.2,
                ...options,
            }
        );

        observer.observe(el);

        return () => observer.disconnect();
    }, [options]);

    return { ref, inView };
}
