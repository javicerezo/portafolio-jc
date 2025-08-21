import { Tooltip } from "../../ui/Tooltip";

import { useState } from "react";
import { useLanguage } from "../../../utils/hooks/useLanguage";

import type { ProyectButtonProps } from "../../../utils/types/proyect";

export const ProyectButtons = ({html_url, homepage, isButtonModal, isPortfolio}: ProyectButtonProps) => {
    const [ showTooltip, setShowTooltip ] = useState<boolean>(false);
    const { t } = useLanguage();


    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if(isPortfolio) {
            e.preventDefault();
            setShowTooltip(true);
        }
    }

    return (
        <div className={isButtonModal ? "ProyectButtons ProyectButtons--mod" : "ProyectButtons"}>
            <a 
                className={isButtonModal ? "ProyectButtons-button ProyectButtons-button--mod" : "ProyectButtons-button"} 
                href={html_url} 
                target="_blank"
                rel="noopener noreferrer"
            >
                {t.proyect_code}
            </a>
            <a 
                className={isButtonModal ? "ProyectButtons-button ProyectButtons-button--mod" : "ProyectButtons-button"} 
                href={isPortfolio ? undefined : homepage} 
                target={isPortfolio ? undefined : "_blank"} 
                rel={isPortfolio ? undefined : "noopener noreferrer"} 
                onClick={handleClick}   
            >
                {t.proyect_site}
            </a>

            {showTooltip && (
                <Tooltip 
                    text={t.tooltip_portafolio_jc}
                    onClose={() => setShowTooltip(false)}/>
            )}
        </div>
    );
}