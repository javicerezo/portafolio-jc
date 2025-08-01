import { useState } from "react";
import { useLanguage } from "../utils/context/useLanguage";

import { RxHamburgerMenu } from "react-icons/rx";
import { TbLetterX } from "react-icons/tb";
import { FaGithub, FaLink  } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";

export const Header = () => {
    const [ menu, setMenu ] = useState(false);
    const { t } = useLanguage();
    
    const onclick = ()=> {
        setMenu(!menu);
    }
    
    return (
        <header className="Header">
            <div className={`Header-divNav ${menu ? "Header-divNav--visible" : "" }`}>
                <ul className="Header-ul">
                    <li className="Header-li"><a className="Header-a" href="#Top">{t.title_init}</a></li>
                    <li className="Header-li"><a className="Header-a" href="#Proyect">{t.title_proyect}</a></li>
                    <li className="Header-li"><a className="Header-a" href="#About">{t.title_about}</a></li>
                    <li className="Header-li"><a className="Header-a" href="#Contact">{t.title_contact}</a></li>
                    <ul className="Header-socials">
                        <li className="Header-socialsIcon"><a href="https://github.com/javicerezo" target='_blank'><FaGithub color='#fff'/></a></li>
                        <li className="Header-socialsIcon"><a href="https://www.linkedin.com/in/javicerezo/" target='_blank'><RiLinkedinFill color='#fff'/></a></li>
                        <li className="Header-socialsIcon"><a href="https://javicerezo.netlify.app/" target='_blank'><FaLink color='#fff'/></a></li>
                    </ul>
                </ul>
            </div>
            <div>
                <button className="Header-navBurger" onClick={ onclick }>
                    <RxHamburgerMenu className={`Header-icon ${menu ? "Header-icon--hidden" : "Header-icon--visible"}`}/>  
                    <TbLetterX className={`Header-icon ${menu ? "Header-icon--visible" : "Header-icon--hidden"}`}/>  
                </button>
            </div>
        </header>
    );
}