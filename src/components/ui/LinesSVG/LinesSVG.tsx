import { useEffect, useRef, useState } from "react";
import { useIntersectionObserver } from "../../../utils/hooks/useIntersectionObserver";
import { effectWave } from "../../../utils/hooks/effectWave";

import { ORIGINAL_WAVES, AMPLITUDES } from "./lines.constant";

/**
 * 
 * @returns componente LinesSVG que crea un efecto oleaje en las líneas al hacer scroll
 */
export const LinesSVG = () => {
    const [ paths, setPaths ] = useState<string[]>(() => ORIGINAL_WAVES.map(w => w.line));

    const { ref, visible } = useIntersectionObserver(false);

    // --- Suavizado del efecto ---
    const baseYRef = useRef<number>(0);      // punto de referencia del scroll al activarse
    const targetRef = useRef<number>(0);     // objetivo hacia el que queremos ir
    const phaseRef  = useRef<number>(0);     // estado actual (lo que se dibuja)
    const rafRef    = useRef<number>(0);

    useEffect( () => {
        if(!visible) return;

        const isTouch = navigator.maxTouchPoints > 0;
        
        // Configurando estas 3 variables consguimos más/menos suavidad en el efecto
        const SENSITIVITY = isTouch ? 0.14 : 0.10;      // cuánto influye el scroll
        const SMOOTHING   = isTouch ? 0.12 : 0.08;      // cuánto se acerca phase->target por frame (0..1)
        const DEADZONE_PX = 1;                          // ignora cambios mínimos


        baseYRef.current = window.scrollY;
        targetRef.current = 0;
        phaseRef.current  = 0;


        const tick = () => {
            const target = targetRef.current;
            const phase  = phaseRef.current + (target - phaseRef.current) * SMOOTHING;
            phaseRef.current = phase;

            // Sólo recalculamos si hay cambio perceptible
            if (Math.abs(target - phase) > 0.001) {
                const next = ORIGINAL_WAVES.map((w, idx) => effectWave(w.line, phase, AMPLITUDES[w.class] ?? 6, idx) );
                setPaths(next);
            }
            rafRef.current = requestAnimationFrame(tick);
        };

        const onScroll = () => {
            // Mapeamos a desplazamiento relativo desde el punto donde se activó
            const diff = window.scrollY - baseYRef.current;
            if (Math.abs(diff) <= DEADZONE_PX) {
                targetRef.current = 0;
            } else {
                // clamp suave para evitar picos
                const MAX = 250; // límite del contenedor
                targetRef.current = Math.max(-MAX, Math.min(MAX, diff * SENSITIVITY));
            }
        };

        // arranca el efecto oleaje
        onScroll();
        rafRef.current = requestAnimationFrame(tick);
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);

        return () => {
            cancelAnimationFrame(rafRef.current);
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
        };
    }, [visible]);

    return (
        <section 
            ref={ref}
            className={`LinesSVG effectWave ${visible ? "effectWave--show" : ""}`}
            >
            {ORIGINAL_WAVES.map((wave, i) => (
                <div className="LinesSVG-div" key={i} >
                    <svg viewBox="0 0 500 200" preserveAspectRatio="none" aria-hidden="true">
                        <path
                            className={wave.class}
                            d={paths[i]}                       // El recorrido de esa línea
                            fill="none"                         // Sin relleno
                            stroke="currentColor"               // o pon aquí un color fijo (#3EC9F0, etc.)
                            strokeWidth={2}                     // grosor de la línea en unidades SVG
                            strokeLinecap="round"               // hace onda más suave en los extremos
                            strokeLinejoin="round"              // hace onda más suave en vértices de unión
                            vectorEffect="non-scaling-stroke"   // Hace que el grosor del trazo no cambie si hacemos escalado
                        />
                    </svg>
                </div>
            ))}
        </section>
    );
};