import { useLanguage } from "../../utils/context/useLanguage";


export const ProyectCard = () => {
    const { t } = useLanguage();

    return (
        <li className="Proyect-proyect">
            <div className="Proyect-image">
                <img src="/imgs/UGR.png" alt="img proyect" />
            </div>
            <div className="Proyect-buttons">
                <button className="Proyect-button"><a href="">{t.proyect_code}</a></button>
                <button className="Proyect-button"><a href="">{t.proyect_site}</a></button>
            </div>
        </li>
    );
};