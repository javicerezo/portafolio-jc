import { useLanguage } from "../../utils/context/useLanguage";
import { CredentialCard } from "./CredentialCard";
import { credentials } from "./credentials";

export const AboutMe = () => {
    const { t } = useLanguage();

    return (
        <section className="About" id="About">
            <h2 className="About-title">{t.about}:</h2>
            <div className="About-container">
                <div className="About-picture">
                    <img className="About-img" src="public/assets/imgs/foto-perfil.jpg" alt="image me" />
                    <ul className="About-credentialsList">
                        {credentials.map((cred, i) => (
                            <CredentialCard 
                                key={i}
                                title={cred.title}
                                image={cred.image}
                                alt={cred.alt}
                                href={cred.href}
                            />
                        ))}
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