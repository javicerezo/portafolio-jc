import { useLanguage } from "../../utils/context/useLanguage";

type ProyectModalProps = {
    proyect: {
        id: number;
        name: string;
        description: string;
        html_url: string;
        homepage: string;
        language: string;
        fork: boolean;
        languagesList: string[];
        image: string;
        nameUI: string;
    } | null;
    isOpen: boolean;
    onClose: () => void;
}

export const ProyectModal = ({ proyect, isOpen, onClose }: ProyectModalProps) => {
    const { t } = useLanguage();
    
    if (!isOpen || !proyect) return null;
    
    return (
        <div className="Proyect-modal" onClick={onClose}>
            <div className="Proyect-modal-container" onClick={ (e) => e.stopPropagation() }>
                <button className="Proyect-modal-buttonX" onClick={onClose}>✕</button>
                <div className="Proyect-modal-img">
                    <img src={proyect.image} alt="img proyect" loading="lazy"/>    
                </div> 
                <h2 className="Proyect-modal-h2">{proyect.nameUI}</h2>
                <p className="Proyect-modal-desc">{proyect.description}</p>
                <p className="Proyect-modal-techs">{proyect.languagesList?.join(', ') || proyect.language}</p>
                <div className="Proyect-modal-buttons">
                    <a className="Proyect-modal-button" href={proyect.html_url} target="_blank">{t.proyect_code}</a>
                    <a className="Proyect-modal-button" href={proyect.homepage} target="_blank">{t.proyect_site}</a>
                </div>
            </div>
        </div>
    );
};