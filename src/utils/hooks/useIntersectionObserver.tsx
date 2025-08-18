import { useEffect, useState, useRef } from "react";

/**
 * Es un hook que usa IntersectionObserver para saber si un elemento es visible al usuario
 * @returns retorna un objeto con la referencia del elemento y si es visible (true) o no (false)
 */
export const useIntersectionObserver = (onceTime: boolean = true) => {
    const ref = useRef<HTMLElement | null>(null);
    const [ visible, setVisible ] = useState(false);

    useEffect( () => {
        const element = ref.current;
        if(!element) return;

        const observer = new IntersectionObserver ( 
            ([entry]) => {
                const hit = entry.isIntersecting && entry.intersectionRatio >= 0.1;

                // Solo necesitamos que se ejecute una vez (sección About, Proyect y Contact)
                if(onceTime) {
                    if(hit) {
                        setVisible(hit);
                        observer.unobserve(element); // Solo se ejecuta una vez por elemento
                    }
                } else {
                    setVisible(hit);
                }
            },
            { threshold: 0.1 } // se activa cuando el 10% del elemento es visible
        );
        observer.observe(element);

        return () => observer.disconnect();
    }, [onceTime]);

    return { ref, visible };
}