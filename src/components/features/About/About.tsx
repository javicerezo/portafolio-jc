import { AboutCredentialCard } from "./AboutCredentialCard";
import { credentialsList } from "./credentialsList";
import { Paragraph } from "../../ui/Paragraph";

import { useLanguage } from "../../../utils/hooks/useLanguage";
import { useIntersectionObserver } from "../../../utils/hooks/useIntersectionObserver";
import { useState } from "react";

export const AboutMe = () => {
    const [ showAboutMe, setShowAboutMe ] = useState<boolean>(true);
    const { t } = useLanguage();
    const { ref, visible } = useIntersectionObserver();

    return (
        <section 
            className={`About effectAppear ${visible ? "effectAppear--show" : ""}`} 
            id="About"
            ref={ref}
            >
            <h2 className="About-title">{`${t.title_about}:`}</h2>
            <div className="About-container">
                <div className="About-picture">
                    <img className="About-img" src="/assets/imgs/foto-perfil.jpg" alt="image me" />
                    <ul className="About-credentialsList">
                        {credentialsList.map((cred, i) => (
                            <AboutCredentialCard 
                                key={i}
                                title={cred.title}
                                image={cred.image}
                                alt={cred.alt}
                                href={cred.href}
                            />
                        ))}
                    </ul>
                </div>
                <ul className={`About-description ${showAboutMe ? "" : "About-description--mod"}`}>
                    <Paragraph text={t.about_1}/>
                    <Paragraph text={t.about_2}/>
                    <Paragraph text={t.about_3}/>
                    <Paragraph text={t.about_4}/>
                    <Paragraph text={t.about_5}/>
                    <Paragraph text={t.about_6}/>
                    <Paragraph text={t.about_7}/>
                </ul>
                {showAboutMe ? (
                    <p className="About-p" onClick={ () => ( setShowAboutMe(!showAboutMe) )}>{t.about_readMore}</p>
                    ) : (
                    <p className="About-p" onClick={ () => ( setShowAboutMe(!showAboutMe) )}>{t.about_readLess}</p>
                )}
            </div>
        </section>
    );
}