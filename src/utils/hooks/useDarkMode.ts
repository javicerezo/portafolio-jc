import { useState, useEffect, useRef } from "react";

export const useDarkMode = () => {
    const [darkModeON, setDarkModeON] = useState<boolean>(true);
    const initialized = useRef(false);

    // Solo accedemos a document y localStorage después del primer render
    useEffect(() => {
        if (!initialized.current) {
            initialized.current = true;

            // Lee localStorage
            const saved = localStorage.getItem("theme");
            if (saved) {
                setDarkModeON(saved === "dark");
                return;
            }

            // Usa preferencia del sistema
            const prefersLight = window.matchMedia?.("(prefers-color-scheme: light)").matches;
            setDarkModeON(!prefersLight);
        }
    }, []);

    // Efecto para aplicar cambios en el DOM
    useEffect(() => {
        if (!initialized.current) return;

        // Guarda en localStorage
        localStorage.setItem("theme", darkModeON ? "dark" : "light");

        // Aplica clases al body
        const body = document.body;
        body.classList.toggle("lightMode", !darkModeON);
        body.classList.remove("highLightMode", "highDarkMode");
    }, [darkModeON]);

    const toggleDarkMode = () => setDarkModeON(prev => !prev);

    return [darkModeON, toggleDarkMode] as const;
};