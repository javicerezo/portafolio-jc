import { useState } from "react";
import { useLanguage } from "../../utils/context/useLanguage";
import { ProyectCard } from "./ProyectCard";
import { ProyectModal } from "./ProyectModal";

export const Proyect = () => {
    const { t } = useLanguage();
    const [ modalOn, setModalOn ] = useState(false);

    return (
        <section className="Proyect" id="Proyect">
            <h2 className="Proyect-title">{t.proyect}:</h2>
            <p className="Proyect-p">La mejor manera de describir lo que hago es mostrando lo que hago...</p>
            <ul className="Proyect-ul">
                <ProyectCard onClick={ () => setModalOn(true) }/>
                <ProyectModal isOpen={modalOn} onClose={ ()=> setModalOn(false)}/>
            </ul>

        </section>
    );
};