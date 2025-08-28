import { createPortal } from "react-dom";   // Para el modal se monte encima del body (no solo encima del componente Proyect)

import { ProyectButtons } from "./ProyectButtons";
import { Paragraph } from "../../ui/Paragraph";
import { Icon } from "../../ui/Icon/Icon";
import { Tooltip } from "../../ui/Tooltip";

import { useState } from "react";
import { useLanguage } from "../../../utils/hooks/useLanguage";
import { proyectInfoList } from "./proyectInfoList";

import type { ProyectModalProps } from "../../../utils/types/proyect";

import { BsCaretRightFill } from "react-icons/bs";

export const ProyectModal = ({ proyect, isOpen, onClose }: ProyectModalProps) => {
    const [ showTooltip, setShowTooltip ] = useState<boolean>(false);
    const [ showLearned, setShowLearned ] = useState<boolean>(false);

    const { t } = useLanguage();
    if (!isOpen || !proyect) return null;

    // El año de creación
    const yearUI = `${proyect.created_at.slice(5,7)} / ${proyect.created_at.slice(0,4)}`;

    // Muestro el idioma de la descripción del proyecto a mostrar (descripciones almacenadas en proyectDescriptionList.ts)
    // se cambia en el Modal y no en Proyect por si el usuario hace elcambio de idioma en el propio Modal
    const proyectInfo= proyectInfoList.find( element => element.key.toLowerCase() === proyect.name.toLowerCase());
    const lang = (t.__lang ?? "es") as 'es' | 'en'| 'cat';
    
    // info es el objeto que tiene todas las traducciones necesarias para el Modal en ese idioma
    const info = proyectInfo?.[lang];

    const resetUI = () => {
        setShowTooltip(false);
        setShowLearned(false);
    }
    const handleClose = () => {
        onClose();      // Función para cerrar un modal por defecto en react
        resetUI();      // Reseteo los estados para que al abrir otro modal no haya conflictos
    }
    
    return createPortal (
        <div className="ProyectModal" onClick={handleClose}>
            <div className="ProyectModal-container" onClick={ (e) => e.stopPropagation() }>
                <button className="ProyectModal-buttonX" onClick={handleClose}>✕</button>

                <h2 className="ProyectModal-h2">{proyect.nameUI}
                    <span className="ProyectModal-year">{yearUI}</span>
                </h2>

                <div className="ProyectModal-img">
                    <img src={proyect.image} alt="img proyect" loading="lazy"/>
                    <div className="ProyectModal-containerPhone">
                        <span className="ProyectModal-handRight" role="img" onClick={ () => (setShowTooltip(true)) }>👉</span>
                        <div className="ProyectModal-phone" onClick={ () => (setShowTooltip(true)) }>
                            <img className="ProyectModal-imgPhone" src={proyect.imagePhone} alt="img mobile proyect" loading="lazy"/>
                            <img className="ProyectModal-frame" src="/assets/imgs/phone-frame.png" alt="frame mobile" loading="lazy"/>
                        {showTooltip && (
                            <Tooltip 
                                text={t.modal_phone}
                                onClose={() => setShowTooltip(false)}/>
                        )}
                        </div>
                    </div>
                </div>

                <Paragraph text={info?.description}/>

                <div className="ProyectModal-div">
                    <div>
                        <p className="ProyectModal-techTitle">{t.modal_languages}</p>
                        <ul className="ProyectModal-techList">
                            {proyect.languagesList
                                ? proyect.languagesList.map((lang: string) => (
                                    <Icon key={lang} language={lang} />
                                    ))
                                    : <Icon language={proyect.language ?? "unknown"} />
                                }
                        </ul>
                    </div>
                    <div>
                        <div className="ProyectModal-learnedTitle" onClick={ () => (setShowLearned(!showLearned))}>
                            <p>{t.modal_learned}</p>
                            <BsCaretRightFill className={`ProyectModal-learnedTitle-icon ${showLearned ? "ProyectModal-learnedTitle-icon--show" : ""}`}/>
                        </div>
                        <ul className={`ProyectModal-learnedList ${showLearned ? "ProyectModal-learnedList--show" : ""}`}>
                            {info?.learnedList.map( (element, key) => <li key={key} className="ProyectModal-li">- {element}</li> )}
                        </ul>
                    </div>
                </div>

                <ProyectButtons
                    html_url={proyect.html_url}
                    homepage={proyect.homepage}
                    isButtonModal={true}
                    isPublic={proyect.isPublic}
                    isPortfolio={proyect.isPortfolio}
                />
            </div>
        </div>,
        document.body    // Para el modal se monte encima del body (no solo encima del componente Proyect)
    );
};