import { useEffect, useState } from "react";
import { useLanguage } from "../utils/hooks/useLanguage";
import { useScrollAnimation } from "../utils/hooks/useScrollAnimation";

import { FaGithub } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";

export const Contact = () => {
    const { t } = useLanguage();
    const { ref, visible } = useScrollAnimation();

    const [ status, setStatus ] = useState<"idle" | "sending" | "success" | "error">("idle");

    const sleep = (delay: number) => {
        return new Promise<void>((resolve) => setTimeout(resolve, delay));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;

        setStatus("sending");

        const formData = new FormData(e.currentTarget);

        // validación honey
        if(formData.get("company")) {
        setStatus("success") // No enviamos nada, success para que el bot no haga de nuevo el formulario
        return;
        }
        
        // Delay para mostrar spinner
        await sleep(3000);

        const response = await fetch("/.netlify/functions/sendMail", {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(formData)),
        })

        if(response.ok) {
            setStatus("success");
            form.reset();
        } else {
            setStatus("error");
        }  
    };

    useEffect( () => {
        if(status === "success" || status === "error") {
            const timer = setTimeout( () => {
                setStatus("idle");
            }, 5000);
            return () => clearTimeout(timer);
        }

    }, [status]);

    return (
        <section 
            className={`Contact sectionEffect ${visible ? "sectionEffect--show" : ""}`} 
            id="Contact"
            ref={ref}
            >
            <h2 className="Contact-title">{`${t.title_contact}:`}</h2>
            <div className="Contact-container">
                <form className="Contact-form" onSubmit={handleSubmit}>
                    <input className="Contact-input" type="text" name="name" placeholder={t.contact_name} required />
                    <input className="Contact-input" type="email" name="email" placeholder={t.contact_email} required />
                    <textarea className="Contact-textArea" name="message" id="message" placeholder={t.contact_message} required />

                    {/* Campo oculto para evitar bots */}
                    <input 
                        type="text"
                        name="company"
                        style={{ display:"none" }}
                        tabIndex={-1}   // inhabilitar posible tabulación usuario
                        autoComplete="off" 
                        />

                    <button className="Contact-button" disabled={status === "sending"} type="submit">{t.contact_button}</button>

                    {/* FEEDBACK USUARIO */}
                    <div className="Contact-divResponse">
                        {status === "sending" && 
                            <div className="Contact-spinner sk-chase">
                                <div className="sk-chase-dot"></div>
                                <div className="sk-chase-dot"></div>
                                <div className="sk-chase-dot"></div>
                                <div className="sk-chase-dot"></div>
                                <div className="sk-chase-dot"></div>
                                <div className="sk-chase-dot"></div>
                            </div>
                        }
                        {status === "success" && <p className="Contact-success">{t.contact_succes}</p>}
                        {status === "error" && <p className="Contact-error">{t.contact_error}</p>}
                    </div>

                </form>
                <div className="Contact-altern">
                    <p className="Contact-p">{`- ${t.contact_p}:`}</p>
                    <div className="Contact-socials">
                        <a className="Contact-iconSocial"  target="_blank"><FaGithub color='#181717'/></a>
                        <a className="Contact-iconSocial" href="https://www.linkedin.com/in/javicerezo/" target="_blank"><RiLinkedinFill color='#0973a8'/></a>
                    </div>
                    <a className="Contact-descargarCV" href="/assets/cv_JC.pdf" download>📄 Descargar CV</a>
                </div>
            </div>
        </section>
    );
}