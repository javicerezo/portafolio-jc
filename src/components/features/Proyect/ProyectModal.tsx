import { createPortal } from "react-dom";   // Para el modal se monte encima del body (no solo encima del componente Proyect)

import { ProyectButtons } from "./ProyectButtons";
import { Paragraph } from "../../ui/Paragraph";
import { Icon } from "../../ui/Icon/Icon";
import { Tooltip } from "../../ui/Tooltip";

import { useState } from "react";
import { useLanguage } from "../../../utils/hooks/useLanguage";
import { proyectDescriptionList } from "./proyectDescriptionList";

import type { ProyectModalProps } from "../../../types/github";

export const ProyectModal = ({ proyect, isOpen, onClose }: ProyectModalProps) => {
    const [ showTooltip, setShowTooltip ] = useState<boolean>(false);
    const { t } = useLanguage();
    if (!isOpen || !proyect) return null;

    // Muestro el idioma de la descripción del proyecto a mostrar (descripciones almacenadas en proyectDescriptionList.ts)
    // se cambia en el Modal y no en Proyect por si el usuario hace elcambio de idioma en el propio Modal
    const objDescription = proyectDescriptionList.find( element => element.key.toLowerCase() === proyect.name.toLowerCase());
    const lang = (t.__lang ?? "es") as 'es' | 'en'| 'cat';
    const descriptionUI: string | undefined= objDescription?.[lang];
    
    return createPortal (
        <div className="ProyectModal" onClick={onClose}>
            <div className="ProyectModal-container" onClick={ (e) => e.stopPropagation() }>
                <button className="ProyectModal-buttonX" onClick={onClose}>✕</button>
                <h2 className="ProyectModal-h2">{proyect.nameUI}</h2>
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

                <Paragraph text={descriptionUI}/>

                <p className="ProyectModal-p">{t.modal_languages}</p>
                <ul className="ProyectModal-techs">
                    {proyect.languagesList
                        ? proyect.languagesList.map((lang: string) => (
                            <Icon key={lang} language={lang} />
                            ))
                        : <Icon language={proyect.language ?? "unknown"} />
                    }
                </ul>

                <ProyectButtons
                    html_url={proyect.html_url}
                    homepage={proyect.homepage}
                    isButtonModal={true}
                    isPortfolio={proyect.isPortfolio}
                />
            </div>
        </div>,
        document.body    // Para el modal se monte encima del body (no solo encima del componente Proyect)
    );
};