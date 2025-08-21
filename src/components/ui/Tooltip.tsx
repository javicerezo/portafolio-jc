import { useState, useEffect } from "react";

import type { TooltipProp } from "../../utils/types/tooltips";

/**
 * Un pequeño tooltip cuando se hace clic sobre su elemento padre, él mismo controla la animación de salida y su desctrucción
 * Desde el padre solo tendremos que darle la propiedad onClose( () => setShowComponent(false)) para dejar de mostrar el componente.
 * @param param0 
 * @returns retorna el componente Tooltip
 */
export const Tooltip = ({ duration = 4000, text, onClose }: TooltipProp) => {
    const [ animationExit, setAnimationExit ] = useState(false);

    useEffect( () => {
        const outAnimation = setTimeout( () => setAnimationExit(true), duration - 500 );  // Animación de salida 500ms antes de desmontar el propio componente
        const removeComponent = setTimeout( () => onClose?.(), duration );

        return () => {
            clearTimeout(outAnimation);
            clearTimeout(removeComponent);
        }
    }, [duration, onClose]);

    return (
        <div
            className={`Tooltip ${animationExit ? "Tooltip--outAnimation" : ""}`}>
            <p className="Tooltip-p">{text}</p>
        </div>
    );
};