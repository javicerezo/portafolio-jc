import { ProyectButtons } from "./ProyectButtons";

import { useLanguage } from "../../../utils/hooks/useLanguage";

import type { ProyectCardProps } from "../../../utils/types/proyect";

export const ProyectCard = ({ nameUI, html_url, homepage, language, image, isPortfolio, onClick }: ProyectCardProps) => {
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
                isPortfolio={isPortfolio}
            />
        </li>
    );
};