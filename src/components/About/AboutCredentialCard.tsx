import { Tooltip } from "../Tooltip";

import { useState } from "react";
import { useLanguage } from "../../utils/hooks/useLanguage";

interface Props {
    title: string;
    image: string;
    alt: string;
    href: string;
}

export const AboutCredentialCard = ({ title, image, alt, href }: Props) => {
    const [ showTooltip, setShowTooltip ] = useState<boolean>(false);
    const { t } = useLanguage(); 

    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        setShowTooltip(true);
    }

    return (
        <li className="CredentialCard" >
            <div className="CredentialCard-card" onClick={handleClick}>
                <div className="CredentialCard-cardFront">
                    <span>{title}</span>
                </div>
                <div className="CredentialCard-cardBack">
                    <a href={href} target="_blank" rel="noopener noreferrer">
                        <img className="CredentialCard-cardImg" src={image} alt={alt} />
                    </a>
                </div>
            </div>
            {showTooltip && (
                <Tooltip
                    text={t.tooltip_credentialcard} 
                    onClose={() => setShowTooltip(false)}/>
            )}
        </li>
    );
};