import { useEffect, useState, useRef } from "react";

export const useScrollAnimation = () => {
    const ref = useRef<HTMLElement | null>(null);
    const [ visible, setVisible ] = useState(false);

    useEffect( () => {
        const element = ref.current;
        if(!element) return;

        const observer = new IntersectionObserver( ([entry]) => {
            if(entry.isIntersecting) {
                setVisible(true);
                observer.unobserve(element); // Solo se ejecuta una vez por elemento
                }
            },
            { threshold: 0.1 } // se activa cuando el 10% del elemento es visible
        );
        observer.observe(element);

        return () => observer.disconnect();
    }, []);

    return { ref, visible };
}