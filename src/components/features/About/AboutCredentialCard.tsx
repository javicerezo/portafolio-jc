import { Tooltip } from "../../ui/Tooltip";

import { useState } from "react";
import { useLanguage } from "../../../utils/hooks/useLanguage";

import type { Credential } from "../../../utils/types/about";

export const AboutCredentialCard = ({ title, image, alt, href }: Credential) => {
    const [ showTooltip, setShowTooltip ] = useState<boolean>(false);
    const { t } = useLanguage(); 

    const handleClick = () => {
        setShowTooltip(true);
    }

    return (
        <li className="CredentialCard" >
            <div className="CredentialCard-card" >
                <div className="CredentialCard-cardFront">
                    <span>{title}</span>
                </div>
                <div className="CredentialCard-cardBack" onClick={handleClick}>
                    <a href={href} target="_blank" rel="noopener noreferrer">
                        <img className="CredentialCard-cardImg" src={image} alt={alt} />
                    </a>
                    {showTooltip && (
                        <Tooltip
                            text={t.tooltip_credentialcard} 
                            onClose={() => setShowTooltip(false)}/>
                    )}
                </div>
            </div>
            
        </li>
    );
};