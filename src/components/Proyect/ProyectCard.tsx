import { useLanguage } from "../../utils/context/useLanguage";

type ProyectCardProps = {
    nameUI: string;
    html_url: string;
    homepage: string;
    language: string;
    image: string;
    onClick: () => void;
}

export const ProyectCard = ({ onClick, nameUI, html_url, homepage, language, image}: ProyectCardProps) => {
    const { t } = useLanguage();

    return (
        <li className="Proyect-proyectCard">
            <div className="Proyect-divImageDesc" onClick={onClick}>
                <div className="Proyect-image">
                    <img src={image} alt="img proyect" loading="lazy"/>
                </div>
                <div className="Proyect-description">
                    <h3 className="Proyect-titleDescription">{nameUI}</h3>
                    <p className="Proyect-techsDescription">{language}</p>
                    <p className="Proyect-clicDescription">{t.proyect_clic}</p>
                </div>
            </div>
            <div className="Proyect-buttons">
                <a className="Proyect-button" href={html_url} target="_blank">{t.proyect_code}</a>
                <a className="Proyect-button" href={homepage} target="_blank">{t.proyect_site}</a>
            </div>
        </li>
    );
};