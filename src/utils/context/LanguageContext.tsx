import { createContext } from "react";
import translations from "../translations";

// type Lang = 'es' | 'en' | 'cat';
export type Lang = keyof typeof translations;

interface LanguageContextValue {
    currentLang: Lang;
    setCurrentLang: (lang: Lang) => void;
    t: typeof translations["es"];
}

export const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);
