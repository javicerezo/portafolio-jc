import { useState } from "react";

import { RxHamburgerMenu } from "react-icons/rx";
import { TbLetterX } from "react-icons/tb";
import { FaGithub, FaLink  } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";
// import { TbSquareRoundedLetterX } from "react-icons/tb";

export const Header = () => {
    const [ menu, setMenu ] = useState(false);
    
    const onclick = ()=> {
        setMenu(!menu);
    }
    

    return (
        <section className="Header">
            <div className={`Header-divNav ${menu ? "Header-divNav--visible" : "" }`}>
                <ul className="Header-ul">
                    <li className="Header-li"><a href="#Top">Inicio</a></li>
                    <li className="Header-li"><a href="#Proyect">Proyectos</a></li>
                    <li className="Header-li"><a href="#About">Sobre mí</a></li>
                    <li className="Header-li"><a href="Contact">Contacto</a></li>
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
        </section>
    );
}