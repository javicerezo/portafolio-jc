import { useLanguage } from "../../utils/hooks/useLanguage";

interface ProyectButtonProps {
    html_url: string;
    homepage: string;
    isButtonModal: boolean;
    isPortfolio: boolean;
}

export const ProyectButtons = ({html_url, homepage, isButtonModal, isPortfolio}: ProyectButtonProps)=> {
    const { t } = useLanguage();

    return (
        <div className={isButtonModal ? "ProyectButtons ProyectButtons--mod" : "ProyectButtons"}>
            <a 
                className={isButtonModal ? "ProyectButtons-button ProyectButtons-button--mod" : "ProyectButtons-button"} 
                href={html_url} 
                target="_blank"
                rel="noopener noreferrer"
            >
                {t.proyect_code}
            </a>
            <a 
                className={isButtonModal ? "ProyectButtons-button ProyectButtons-button--mod" : "ProyectButtons-button"} 
                href={isPortfolio ? undefined : homepage} 
                target={isPortfolio ? undefined : "_blank"} 
                rel={isPortfolio ? undefined : "noopener noreferrer"} 
                onClick={ e => e.preventDefault() }     // EVITO NAVEGACIÓN POR DEFECTO
            >
                {t.proyect_site}
            </a>
        </div>
    );
}