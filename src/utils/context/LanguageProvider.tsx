import React, { useEffect, useState } from "react";
import { LanguageContext } from "./LanguageContext";
import type { Lang } from "./LanguageContext";
import translations from "../translations";


export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [ currentLang, setCurrentLang ] = useState<Lang>("es");

    // Lee de localStorage si existe
    useEffect( () => {
        const savedLanguage = localStorage.getItem("lang");
        if(savedLanguage && (["es", "en", "cat"] as Lang[]).includes(savedLanguage as Lang)) {
            setCurrentLang(savedLanguage as Lang);
        }
    }, []);

    // Guarda en Localstorage cuando cambia
    useEffect( () => {
        localStorage.setItem("lang", currentLang);
    }, [currentLang]);

    const t = translations[currentLang];

    return (
        <LanguageContext.Provider value={{ currentLang, setCurrentLang, t}}>
            {children}
        </LanguageContext.Provider>
    );
};