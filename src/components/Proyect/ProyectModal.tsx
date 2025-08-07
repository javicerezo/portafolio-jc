import { createPortal } from "react-dom";   // Para el modal se monte encima del body (no solo encima del componente Proyect)

import { useLanguage } from "../../utils/hooks/useLanguage";

import type { ProyectModalProps } from "../../types/github";

export const ProyectModal = ({ proyect, isOpen, onClose }: ProyectModalProps) => {
    const { t } = useLanguage();
    
    if (!isOpen || !proyect) return null;
    
    return createPortal (
        <div className="Proyect-modal" onClick={onClose}>
            <div className="Proyect-modal-container" onClick={ (e) => e.stopPropagation() }>
                <button className="Proyect-modal-buttonX" onClick={onClose}>✕</button>
                <h2 className="Proyect-modal-h2">{proyect.nameUI}</h2>
                <div className="Proyect-modal-img">
                    <img src={proyect.image} alt="img proyect" loading="lazy"/>    
                </div> 
                <p className="Proyect-modal-desc">{proyect.description}</p>
                <p className="Proyect-modal-techs">{proyect.languagesList?.join(', ') || proyect.language}</p>
                <div className="Proyect-modal-buttons">
                    <a className="Proyect-modal-button" href={proyect.html_url} target="_blank">{t.proyect_code}</a>
                    <a className="Proyect-modal-button" href={proyect.homepage} target="_blank">{t.proyect_site}</a>
                </div>
            </div>
        </div>,
        document.body    // Para el modal se monte encima del body (no solo encima del componente Proyect)
    );
};