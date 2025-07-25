import { useLanguage } from "../../utils/context/useLanguage";

type ProyectModalProps = {
    isOpen: boolean;
    onClose: () => void;
}

export const ProyectModal = ({ isOpen, onClose }: ProyectModalProps) => {
    const { t } = useLanguage();

    if (!isOpen) return null;
    
    return (
        <div className="Proyect-modal" onClick={onClose}>
            <div className="Proyect-modal-container" onClick={ (e) => e.stopPropagation() }>
                <button className="Proyect-modal-buttonX" onClick={onClose}>✕</button>
                <div className="Proyect-modal-img">
                    <img src="/imgs/UGR.png" alt="img proyect" />    
                </div> 
                <h2 className="Proyect-modal-h2">titulo del proyecto</h2>
                <p className="Proyect-modal-desc">Aplicación web para gestionar tareas personales, desarrollada con React, TypeScript y Firebase.</p>
                <p className="Proyect-modal-techs">React • TypeScript • Firebase</p>
                <div className="Proyect-modal-buttons">
                    <a className="Proyect-modal-button" target="_blank">{t.proyect_code}</a>
                    <a className="Proyect-modal-button" target="_blank">{t.proyect_site}</a>
                </div>
            </div>
        </div>
    );
};