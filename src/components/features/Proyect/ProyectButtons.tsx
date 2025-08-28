import { Tooltip } from "../../ui/Tooltip";

import { useState } from "react";
import { useLanguage } from "../../../utils/hooks/useLanguage";

import type { ProyectButtonProps } from "../../../utils/types/proyect";

export const ProyectButtons = ({html_url, homepage, isButtonModal, isPublic, isPortfolio}: ProyectButtonProps) => {
    const [ showTooltip, setShowTooltip ] = useState<boolean>(false);
    const { t } = useLanguage();
    const [ toolTipText, setToolTipText ] = useState<string>("");


    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        // Quiero mostrar el tooltip si es repo privada o si es la repo del portafolio
        if(e.currentTarget.dataset.id === "codigo") {
            // solo compruebo si es repo público
            if(!isPublic) {
                e.preventDefault();
                setToolTipText(t.tooltip_private_code);
                setShowTooltip(true);
            }
        }
        if(e.currentTarget.dataset.id === "web") {
            // compruebo si es el portafolio
            if(isPortfolio) {
                e.preventDefault();
                setToolTipText(t.tooltip_portafolio_jc);
                setShowTooltip(true);
            } else if (!isPublic) { // compruebo si es privado
                e.preventDefault();
                setToolTipText(t.tooltip_private_site);
                setShowTooltip(true);
            }
        }

    }

    return (
        // NOTA, is buttonModal es para agregar un className porque en ProyectCard.tsx y ProyecModal.tsx uso el mismo botón pero con estilos diferentes (solo es un poco más grande)
        <div className={isButtonModal ? "ProyectButtons ProyectButtons--mod" : "ProyectButtons"}>
            {/* <div className="ProyectButtons-div"> */}
                <a 
                    className={isButtonModal ? "ProyectButtons-button ProyectButtons-button--mod" : "ProyectButtons-button"} 
                    href={html_url || undefined} 
                    target="_blank"
                    rel={!isPublic ? undefined : "noopener noreferrer"} // Solo si es repositorio privado...LE QUITO LOS ATRIBUTOS (porque si es portafolio SÍ permito ver la url del código)
                    data-id="codigo"
                    onClick={handleClick}
                >
                    {t.proyect_code}
                    {/* {showTooltip && (
                    <Tooltip 
                        text={toolTipText}
                        onClose={() => setShowTooltip(false)}/>
                    )} */}
                </a>
            {/* </div> */}
            {/* <div className="ProyectButtons-div"> */}
                <a 
                    className={isButtonModal ? "ProyectButtons-button ProyectButtons-button--mod" : "ProyectButtons-button"} 
                    href={homepage || undefined} 
                    target={isPortfolio ? undefined : "_blank"} 
                    rel={(isPortfolio || !isPublic) ? undefined : "noopener noreferrer"} // Si es el este porfolio o es repositorio privado...LE QUITO LOS ATRIBUTOS
                    data-id="web"
                    onClick={handleClick}   
                >
                    {t.proyect_site}
                </a>

            {/* </div> */}
            {showTooltip && (
                <Tooltip 
                    text={toolTipText}
                    onClose={() => setShowTooltip(false)}/>
            )}
        </div>
    );
}