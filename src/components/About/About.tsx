import { useLanguage } from "../../utils/hooks/useLanguage";
import { CredentialCard } from "./AboutCredentialCard";
import { credentialsList } from "./credentialsList";
import { useScrollAnimation } from "../../utils/hooks/useScrollAnimation";

export const AboutMe = () => {
    const { t } = useLanguage();
    const { ref, visible } = useScrollAnimation();

    return (
        <section 
            className={`About sectionEffect ${visible ? "sectionEffect--show" : ""}`} 
            id="About"
            ref={ref}
            >
            <h2 className="About-title">{`${t.title_about}:`}</h2>
            <div className="About-container">
                <div className="About-picture">
                    <img className="About-img" src="/assets/imgs/foto-perfil.jpg" alt="image me" />
                    <ul className="About-credentialsList">
                        {credentialsList.map((cred, i) => (
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