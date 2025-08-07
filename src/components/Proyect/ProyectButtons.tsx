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
            >
                {t.proyect_code}
            </a>
            <a 
                className={isButtonModal ? "ProyectButtons-button ProyectButtons-button--mod" : "ProyectButtons-button"} 
                href={isPortfolio ? "" : homepage} 
                target="_blank"
            >
                {t.proyect_site}
            </a>
            
            {/* <div className="ProyectCard-buttons">
                <a className="ProyectCard-button" href={html_url} target="_blank">{t.proyect_code}</a>
                {isPortfolio ? (
                    <button className="ProyectCard-button" 
                    onClick={ e => e.preventDefault() }
                    title="Estás viendo esta misma página"
                >{t.proyect_site}</button>
                ) : (
                    <a className="ProyectCard-button" href={homepage} target="_blank">{t.proyect_site}</a>
                )}
            </div> */}
        </div>
    );
}