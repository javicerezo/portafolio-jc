import { useLanguage } from "../../utils/context/useLanguage";

type ProyectCardProps = {
    onClick: () => void;
    title: string;
    codeUrl: string;
    liveUrl: string;
    tech: string;
    userName: string;
}

export const ProyectCard = ({ onClick, title, codeUrl, liveUrl, tech, userName }: ProyectCardProps) => {
    const { t } = useLanguage();
    const image = `https://raw.githubusercontent.com/${userName}/${title}/master/public/assets/imgs/preview.png`;
    liveUrl = liveUrl || `https://javicerezo.github.io/${title}`;

    return (
        <li className="Proyect-proyectCard">
            <div className="Proyect-divImageDesc" onClick={onClick}>
                <div className="Proyect-image">
                    <img src={image} alt="img proyect" loading="lazy"/>
                </div>
                <div className="Proyect-description">
                    <h3 className="Proyect-titleDescription">{title}</h3>
                    <p className="Proyect-techsDescription">{tech}</p>
                    <p className="Proyect-clicDescription">{t.proyect_clic}</p>
                </div>
            </div>
            <div className="Proyect-buttons">
                <a className="Proyect-button" href={codeUrl} target="_blank">{t.proyect_code}</a>
                <a className="Proyect-button" href={liveUrl} target="_blank">{t.proyect_site}</a>
            </div>
        </li>
    );
};