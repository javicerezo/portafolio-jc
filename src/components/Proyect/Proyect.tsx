import { useLanguage } from "../../utils/context/useLanguage";
import { ProyectCard } from "./ProyectCard";

export const Proyect = () => {
    const { t } = useLanguage();

    return (
        <section className="Proyect" id="Proyect">
            <div className="Proyect-tituloSeccion">
                <h2>{t.proyect}:</h2>
            </div>
            <p className="Proyect-p"></p>
            <ul className="Proyect-container">
                <ProyectCard />
                <ProyectCard />
                <ProyectCard />
                <ProyectCard />
                <ProyectCard />
                <ProyectCard />
            </ul>
        </section>
    );
};