import { useLanguage } from "../../utils/context/useLanguage";

type ProyectModalProps = {
    isOpen: boolean;
    onClose: () => void;
    proyect: {
        name: string;
        description: string;
        html_url: string;
        homepage?: string;
        language: string;
        languagesList?: string[];
    } | null;
    userName: string;
}

export const ProyectModal = ({ isOpen, onClose, proyect, userName }: ProyectModalProps) => {
    const { t } = useLanguage();
    const image: string = `https://raw.githubusercontent.com/${userName}/${proyect?.name}/master/public/assets/imgs/preview.png`;
    const liveUrl: string = proyect?.homepage || `https://javicerezo.github.io/${proyect?.name}`;

    if (!isOpen || !proyect) return null;
    
    return (
        <div className="Proyect-modal" onClick={onClose}>
            <div className="Proyect-modal-container" onClick={ (e) => e.stopPropagation() }>
                <button className="Proyect-modal-buttonX" onClick={onClose}>✕</button>
                <div className="Proyect-modal-img">
                    <img src={image} alt="img proyect" loading="lazy"/>    
                </div> 
                <h2 className="Proyect-modal-h2">{proyect.name}</h2>
                <p className="Proyect-modal-desc">{proyect.description}</p>
                <p className="Proyect-modal-techs">{proyect.languagesList?.join(', ') || proyect.language}</p>
                <div className="Proyect-modal-buttons">
                    <a className="Proyect-modal-button" href={proyect.html_url} target="_blank">{t.proyect_code}</a>
                    <a className="Proyect-modal-button" href={liveUrl} target="_blank">{t.proyect_site}</a>
                </div>
            </div>
        </div>
    );
};