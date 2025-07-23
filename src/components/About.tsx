import { useLanguage } from "../utils/context/useLanguage";

export const AboutMe = () => {
    const { t } = useLanguage();

    return (
        <section className="About" id="About">
            <div className="About-seccionTitle">
                <h2>{t.about}:</h2>
            </div>
            <div className="About-container">
                <div className="About-picture">
                    <img className="About-img" src="/imgs/foto-perfil.jpg" alt="image me" />
                    <ul className="About-credentialsList">
                        <li className="About-credential">
                            <div className="About-card">
                                <div className="About-cardFront">
                                    <span>Desarrollo web completo</span>
                                </div>
                                <div className="About-cardBack">
                                    <img className="About-cardImg" src="/imgs/foto-perfil.jpg" alt="Universidad" />
                                </div>
                            </div>
                        </li>
                        <li className="About-credential">
                            <div className="About-card">
                                <div className="About-cardFront">
                                    <span>Desarrollo web completo</span>
                                </div>
                                <div className="About-cardBack">
                                    <img className="About-cardImg" src="/imgs/foto-perfil.jpg" alt="Universidad" />
                                </div>
                            </div>
                        </li>
                        <li className="About-credential">
                            <div className="About-card">
                                <div className="About-cardFront">
                                    <span>Desarrollo web completo</span>
                                </div>
                                <div className="About-cardBack">
                                    <img className="About-cardImg" src="/imgs/foto-perfil.jpg" alt="Universidad" />
                                </div>
                            </div>
                        </li>
                        <li className="About-credential">
                            <div className="About-card">
                                <div className="About-cardFront">
                                    <span>Desarrollo web completo</span>
                                </div>
                                <div className="About-cardBack">
                                    <img className="About-cardImg" src="/imgs/foto-perfil.jpg" alt="Universidad" />
                                </div>
                            </div>
                        </li>



                    </ul>
                </div>
                <ul className="About-description">
                    <li className="About-paragraph">{t.about_1}</li>
                    <li className="About-paragraph">{t.about_2}</li>
                    <li className="About-paragraph">{t.about_3}</li>
                    <li className="About-paragraph">{t.about_4}</li>
                    <li className="About-paragraph">{t.about_5}</li>
                    <li className="About-paragraph">{t.about_6}</li>
                    <li className="About-paragraph">{t.about_7}</li>
                </ul>
            </div>
        </section>
    );
}