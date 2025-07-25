import React from "react";

interface Props {
    title: string;
    image: string;
    alt: string;
    href: string;
}

export const CredentialCard: React.FC<Props> = ({ title, image, alt, href }) => {
    return (
        <li className="About-credentialCard">
            <div className="About-card">
                <div className="About-cardFront">
                    <span>{title}</span>
                </div>
                <div className="About-cardBack">
                    <a href={href} target="_blank" rel="noopener noreferrer">
                        <img className="About-cardImg" src={image} alt={alt} />
                    </a>
                </div>
            </div>
        </li>
    );
};