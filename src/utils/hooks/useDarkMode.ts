import { useState, useEffect, useRef } from "react";

// export const useDarkMode = () => {
//     const [ darkModeON, setDarkModeON ] = useState( () => {
//         // comprueba si existen preferencias en localStorage
//         const saved = localStorage.getItem("theme");
//         if (saved) return saved === "dark";

//         // si no hay locaStorate, usa la preferencia del sistema
//         if (window.matchMedia?.("(prefers-color-scheme: light)").matches) return false 
        
//         return true;
//     });

//     useEffect( () => {
//         // Guarda en Storage 
//         localStorage.setItem("theme", darkModeON ? "dark" : "light");
        
//         document.body.classList.toggle("lightMode", !darkModeON); 

//         // Si tiene los contractes activados se desactivan
//         if(document.body.classList.contains("highLightMode")) {
//             document.body.classList.remove("highLightMode");
//         }
//         if(document.body.classList.contains("highDarkMode")) {
//             document.body.classList.remove("highDarkMode");
//         }
//     }, [darkModeON]);

//     const toogleDarkMode = () => setDarkModeON(!darkModeON);

//     return [ darkModeON, toogleDarkMode ] as const;
// };


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