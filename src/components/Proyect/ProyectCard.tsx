import { ProyectButtons } from "./ProyectButtons";

import { useLanguage } from "../../utils/hooks/useLanguage";

import type { ProyectCardProps } from "../../types/github";

export const ProyectCard = ({ nameUI, html_url, homepage, language, image, onClick }: ProyectCardProps) => {
    const { t } = useLanguage();

    return (
        <li className="ProyectCard">
            <div className="ProyectCard-divImageDesc" onClick={onClick}>
                <div className="ProyectCard-image">
                    <img src={image} alt="img proyect" loading="lazy"/>
                </div>
                <div className="ProyectCard-description">
                    <h3 className="ProyectCard-titleDescription">{nameUI}</h3>
                    <p className="ProyectCard-techsDescription">{language}</p>
                    <p className="ProyectCard-clicDescription">{t.proyect_clic}</p>
                </div>
            </div>

            <ProyectButtons
                html_url={html_url}
                homepage={homepage}
                isButtonModal={false}
            />
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
        </li>
    );
};