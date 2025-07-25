import { useLanguage } from "../../utils/context/useLanguage";
type ProyectCardProps = {
    onClick: () => void;
}

export const ProyectCard = ({ onClick }: ProyectCardProps) => {
    const { t } = useLanguage();

    return (
        <li className="Proyect-proyectCard">
            <div className="Proyect-divImageDesc" onClick={onClick}>
                <div className="Proyect-image">
                    <img src="/imgs/UGR.png" alt="img proyect" />
                </div>
                <div className="Proyect-description">
                    <h3 className="Proyect-titleDescription">titulo del proyecto</h3>
                    <p className="Proyect-techsDescription">React - TypeSctipt - Firebase</p>
                    <p className="Proyect-clicDescription">{t.proyect_clic}</p>
                </div>
            </div>
            <div className="Proyect-buttons">
                <a className="Proyect-button" href="">{t.proyect_code}</a>
                <a className="Proyect-button" href="">{t.proyect_site}</a>
            </div>
        </li>
    );
};