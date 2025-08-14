import { createPortal } from "react-dom";   // Para el modal se monte encima del body (no solo encima del componente Proyect)
import { ProyectButtons } from "./ProyectButtons";
import { Paragraph } from "../../ui/Paragraph";
import { Icon } from "../../ui/Icon";

// import { useLanguage } from "../../../utils/hooks/useLanguage";



import type { ProyectModalProps } from "../../../types/github";

export const ProyectModal = ({ proyect, isOpen, onClose }: ProyectModalProps) => {
    // const { t } = useLanguage();
    if (!isOpen || !proyect) return null;

    
    
    return createPortal (
        <div className="ProyectModal" onClick={onClose}>
            <div className="ProyectModal-container" onClick={ (e) => e.stopPropagation() }>
                <button className="ProyectModal-buttonX" onClick={onClose}>✕</button>
                <h2 className="ProyectModal-h2">{proyect.nameUI}</h2>
                <div className="ProyectModal-img">
                    <img src={proyect.image} alt="img proyect" loading="lazy"/>    
                </div>

                <Paragraph text={proyect.description}/>

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