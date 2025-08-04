import { useState, useEffect } from "react";

export const useDarkMode = () => {
    const [ darkModeON, setDarkModeON ] = useState( () => {
        // comprueba si existen preferencias en localStorage
        const saved = localStorage.getItem("theme");
        if (saved) return saved === "dark";

        // si no hay locaStorate, usa la preferencia del sistema
        if (window.matchMedia?.("(prefers-color-scheme: light)").matches) return false 
        
        return true;
    });

    useEffect( () => {
        // Guarda en Storage 
        localStorage.setItem("theme", darkModeON ? "dark" : "light");
        
        document.body.classList.toggle("lightMode", !darkModeON); 

        // Si tiene los contractes activados se desactivan
        if(document.body.classList.contains("highLightMode")) {
            document.body.classList.remove("highLightMode");
        }
        if(document.body.classList.contains("highDarkMode")) {
            document.body.classList.remove("highDarkMode");
        }
    }, [darkModeON]);

    const toogleDarkMode = () => setDarkModeON(!darkModeON);

    return [ darkModeON, toogleDarkMode ] as const;
};