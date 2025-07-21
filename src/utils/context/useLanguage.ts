import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if(!context) {
        throw new Error("useLanguage debe usarse dentro de un LanguageProvider")
    }
    return context;
};