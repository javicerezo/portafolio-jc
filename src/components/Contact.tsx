import { useLanguage } from "../utils/context/useLanguage";

export const Contact = () => {
    const { t } = useLanguage();

    return (
        <section className="Contact" id="Contact">
            <div className="Contact-tituloSeccion">
                <h2>{t.contact}:</h2>
            </div>
            <div className="Contact-container">
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