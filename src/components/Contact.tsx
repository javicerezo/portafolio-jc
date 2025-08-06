import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../utils/hooks/useLanguage";
import { useScrollAnimation } from "../utils/hooks/useScrollAnimation";

import { FaGithub } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";

export const Contact = () => {
    const { t } = useLanguage();
    const { ref, visible } = useScrollAnimation();

    const [ status, setStatus ] = useState<"idle" | "sending" | "success" | "error">("idle");
    const messageRefs = useRef<(HTMLParagraphElement | null)[]>([]);
    const [ feedback, setFeedback ] = useState<string[]>([]);
    const feedbackMap: Record<string, string> = {
        INVALID_METHOD: t.contact_invalidMethod,
        TOO_MANY_REQUESTS: t.contact_tooManyRequests,
        NO_DATA: t.contact_noData,
        INVALID_NAME: t.contact_invalidName,
        INVALID_EMAIL: t.contact_invalidEmail,
        INVALID_MESSAGE: t.contact_invalidMessage,
        BOT_DETECTED: t.contact_botDetected,
        ERROR_SENDING: t.contact_errorSending,
        SUCCESS: t.contact_success,
    }

    const sleep = (delay: number) => {
        return new Promise<void>((resolve) => setTimeout(resolve, delay));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;

        setStatus("sending");

        const formData = new FormData(e.currentTarget);

        // Validación para evitar bots
        if(formData.get("company")) {
            setStatus("success") // No enviamos datos, success para que el bot no haga de nuevo el formulario
            return;
        }

        // Delay para mostrar spinner para efecto procesando
        await sleep(3000);

        const response = await fetch("/.netlify/functions/sendMail", {
            method: "POST",
            body: JSON.stringify(Object.fromEntries(formData)),
        });

        const result = await response.json().catch(() => ({}));

        if(result.status === "success") {
            setStatus("success");
            // setFeedback(result.message);
            setFeedback([feedbackMap.SUCCESS]);
            form.reset();
        } else if ( result.status === "ignored") {  // Bot detectado
            setStatus("success");
        } else {
            setStatus("error");
            // setFeedback(result.message);
            const errors: string[] = result.message;
            setFeedback(errors.map( err => feedbackMap[err]))
        }
    };

    useEffect( () => {
        if(status === "success" || status === "error") {
            const timer1 = setTimeout( () => {
                messageRefs.current.forEach( element => {
                    if (element) element.classList.add(`Contact-${status}--outAnimation`);
                });
            }, 6000);
            const timer2 = setTimeout( () => {
                setStatus("idle");
                setFeedback([]);
                messageRefs.current = [];
            }, 6800);

            return () => { 
                clearTimeout(timer1); 
                clearTimeout(timer2);
            }
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
                        {/* spinner */}
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
                        {/* mensaje de feedback */}
                        {(status === "success" || status === "error") && (
                            <div >
                                {feedback.map( ( message, i ) => (
                                    <p
                                        key={i}
                                        ref={ (element) => { messageRefs.current[i] = element }} 
                                        className={status === "success" ? "Contact-success" : "Contact-error"}>{message}
                                    </p> 
                                ))}
                            </div>
                        )}
                    </div>

                </form>
                <div className="Contact-altern">
                    <p className="Contact-p">{`- ${t.contact_p}:`}</p>
                    <div className="Contact-socials">
                        <a className="Contact-iconSocial"  target="_blank"><FaGithub color='#181717'/></a>
                        <a className="Contact-iconSocial" href="https://www.linkedin.com/in/javicerezo/" target="_blank"><RiLinkedinFill color='#0973a8'/></a>
                    </div>
                    <a className="Contact-descargarCV" href="/assets/cv_JC.pdf" download>📄 {t.contact_download}</a>
                </div>
            </div>
        </section>
    );
}