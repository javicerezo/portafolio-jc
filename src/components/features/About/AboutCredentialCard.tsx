import { Tooltip } from "../../ui/Tooltip";

import { useState } from "react";
import { useLanguage } from "../../../utils/hooks/useLanguage";

interface Props {
    title: string;
    image: string;
    alt: string;
    href: string;
}

export const AboutCredentialCard = ({ title, image, alt, href }: Props) => {
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