import { useState, useEffect } from "react";

export const useContrastMode = () => {
    const [ contrastON, setContrastON ] = useState( () => {
        // comprueba si existen preferencias en localStorage
        const saved = localStorage.getItem("contrast");
        if (saved) return saved === "high";

        // si no hay locaStorate, usa la preferencia del sistema
        if (window.matchMedia?.("(prefers-contrast: more)").matches) return true; 
        
        return false;
    });

    useEffect( () => {
        // Guarda en localStorage
        localStorage.setItem("contrast", contrastON ? "high" : "normal");

        if(contrastON) {
            if(document.body.classList.contains("lightMode")) {
                document.body.classList.toggle("highLightMode");
            } else {
                document.body.classList.toggle("highDarkMode");
            }
        } else {
            if(document.body.classList.contains("lightMode")) {
                document.body.classList.remove("highLightMode");
            } else {
                document.body.classList.remove("highDarkMode");
            }
        }
    }, [contrastON]);

    const toogleContrastMode = (force?: boolean) => {
        if(typeof force === "boolean") {
            setContrastON(force);
        } else {
            setContrastON(!contrastON)
        }
    };

    return [ contrastON, toogleContrastMode ] as const;
};