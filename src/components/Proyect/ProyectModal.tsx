import { createPortal } from "react-dom";   // Para el modal se monte encima del body (no solo encima del componente Proyect)

import { useLanguage } from "../../utils/hooks/useLanguage";

import type { ProyectModalProps } from "../../types/github";

export const ProyectModal = ({ proyect, isOpen, onClose }: ProyectModalProps) => {
    const { t } = useLanguage();
    
    if (!isOpen || !proyect) return null;
    
    return createPortal (
        <div className="ProyectModal" onClick={onClose}>
            <div className="ProyectModal-container" onClick={ (e) => e.stopPropagation() }>
                <button className="ProyectModal-buttonX" onClick={onClose}>✕</button>
                <h2 className="ProyectModal-h2">{proyect.nameUI}</h2>
                <div className="ProyectModal-img">
                    <img src={proyect.image} alt="img proyect" loading="lazy"/>    
                </div> 
                <p className="ProyectModal-desc">{proyect.description}</p>
                <p className="ProyectModal-techs">{proyect.languagesList?.join(', ') || proyect.language}</p>
                <div className="ProyectModal-buttons">
                    <a className="ProyectModal-button" href={proyect.html_url} target="_blank">{t.proyect_code}</a>
                    <a className="ProyectModal-button" href={proyect.homepage} target="_blank">{t.proyect_site}</a>
                </div>
            </div>
        </div>,
        document.body    // Para el modal se monte encima del body (no solo encima del componente Proyect)
    );
};