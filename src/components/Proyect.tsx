import { useLanguage } from "../utils/context/useLanguage";

export const Proyect = () => {
    const { t } = useLanguage();

    return (
        <section className="Proyect" id="Proyect">
            <div className="Proyect-tituloSeccion">
                <h2>{t.proyect}:</h2>
            </div>
            <div className="Proyect-container">
                {/* <div className="About-picture">
                    <img className="About-img" src="/imgs/foto-perfil.jpg" alt="image me" />
                </div>
                <div className="About-description">
                    <div className="About-paragraph">Hola</div>
                    <div className="About-paragraph">Hola</div>
                    <div className="About-paragraph">Hola</div>
                    <div className="About-paragraph">Hola</div>
                </div> */}
            </div>
        </section>
    );
}