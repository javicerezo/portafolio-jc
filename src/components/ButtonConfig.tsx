import { useState, useRef, useEffect } from "react";
import { useLanguage } from "../utils/context/useLanguage";
import type { Lang } from "../utils/context/LanguageContext";

import { IoMdSettings } from "react-icons/io";
import { TbLetterX } from "react-icons/tb";

export const ButtonConfig = () => {
    const [ configON, setConfigON ] = useState(false);
    const [ contrastON, setContrastON ] = useState(false);
    const [ darkModeON, setDarkModeON ] = useState(true);
    const { currentLang, setCurrentLang, t } = useLanguage();

    const buttonRef = useRef<HTMLButtonElement>(null);
    const modalRef = useRef<HTMLUListElement>(null);

    const handleToggleConfig = () => {
        setConfigON(!configON);
    }

    const handleCloseConfig = () => {
        setConfigON(false);
    }

    const handleToogleContrastHighMode = ()=> {
        setContrastON(!contrastON);
        if(document.body.classList.contains("lightMode")) {
            document.body.classList.toggle("highLightMode");
        } else {
            document.body.classList.toggle("highDarkMode");
        }
    }

    const handleToogleDarkMode = () => {
        setDarkModeON(!darkModeON);

        // Si tiene los contractes activados se desactivan
        if(document.body.classList.contains("highLightMode")) {
            document.body.classList.remove("highLightMode");
            setContrastON(!contrastON);
        }
        if(document.body.classList.contains("highDarkMode")) {
            document.body.classList.remove("highDarkMode");
            setContrastON(!contrastON);  
        }
        document.body.classList.toggle("lightMode");
    }

    const handleChangeLanguage = (e: React.ChangeEvent<HTMLSelectElement>)=> {
        setCurrentLang(e.target.value as Lang); 
    }

    // Cierra modal si usuario hace clic fuera del modal (en el fondo)
    useEffect( ()=> {
        const handleClickOutside = (e: Event) => {
            const target = e.target as HTMLElement;

            if(modalRef.current && !modalRef.current.contains(target) 
                && buttonRef.current && !buttonRef.current.contains(target)) 
            {
                handleCloseConfig();
            }
        }

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };

    }, []);
    

    return (
        <div>
            <button 
                ref={ buttonRef }
                className="ButtonConfig-button"
                onClick={ handleToggleConfig }
            >
                <IoMdSettings color="#fff"/>
            </button>
            <div className={`ButtonConfig-container ${configON ? "ButtonConfig-container--visible" : ""}`}>
                <ul ref={ modalRef } 
                    className={`ButtonConfig-ul ${configON ? "ButtonConfig-ul--visible" : ""}`}>
                    <li className="ButtonConfig-li" >
                        <p>{t.settings}</p><button onClick={ handleCloseConfig }>
                            <TbLetterX  className="ButtonConfig-iconX"/>
                            </button>
                    </li>
                    <li className="ButtonConfig-li" >
                        <p>{t.language}</p>
                        <select 
                            className="ButtonConfig-select"
                            value={currentLang}
                            onChange={handleChangeLanguage}>
                                <option className="ButtonConfig-option" value="es">{t.spanish}</option>
                                <option className="ButtonConfig-option" value="en">{t.english}</option>
                                <option className="ButtonConfig-option" value="cat">{t.catalan}</option>
                        </select>
                    </li>
                    <li className="ButtonConfig-li" >
                        <p>{t.darkMode}</p>
                        <button 
                            className={`ButtonConfig-icon ${darkModeON ? "ButtonConfig-icon--on" : ""}`} 
                            onClick={handleToogleDarkMode}>
                                <span className={`ButtonConfig-iconCircle ${darkModeON ? "ButtonConfig-iconCircle--on" : ""}`}></span>
                        </button>
                    </li>
                    <li className="ButtonConfig-li" >
                        <p>{t.contrast}</p>
                        <button 
                            className={`ButtonConfig-icon ${contrastON ? "ButtonConfig-icon--on" : ""}`} 
                            onClick={handleToogleContrastHighMode}
                            >
                                <span className={`ButtonConfig-iconCircle ${contrastON ? "ButtonConfig-iconCircle--on" : ""}`}></span>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
}