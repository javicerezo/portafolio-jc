import React from "react";

interface Props {
    title: string;
    image: string;
    alt: string;
    href: string;
}

export const AboutCredentialCard: React.FC<Props> = ({ title, image, alt, href }) => {
    return (
        <li className="CredentialCard">
            <div className="CredentialCard-card">
                <div className="CredentialCard-cardFront">
                    <span>{title}</span>
                </div>
                <div className="CredentialCard-cardBack">
                    <a href={href} target="_blank" rel="noopener noreferrer">
                        <img className="CredentialCard-cardImg" src={image} alt={alt} />
                    </a>
                </div>
            </div>
        </li>
    );
};