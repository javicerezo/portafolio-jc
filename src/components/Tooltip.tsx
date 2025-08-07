import { useState, useEffect } from "react";
import { useLanguage } from "../utils/hooks/useLanguage";

interface TooltipProp {
    duration?: number;
    onClose?: () => void;
}

/**
 * Un pequeño tooltip cuando se hace clic sobre su elemento padre, él mismo controla la animación de salida y su desctrucción
 * Desde el padre solo tendremos que darle la propiedad onClose( () => setShowComponent(false)) para dejar de mostrar el componente.
 * @param param0 
 * @returns retorna un componente, 
 */
export const Tooltip = ({ duration = 4000, onClose }: TooltipProp) => {
    const { t } = useLanguage();
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
            <p className="Tooltip-p">{t.tooltip_portafolio_jc}</p>
        </div>
    );
};