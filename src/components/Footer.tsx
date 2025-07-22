import { useLanguage } from "../utils/context/useLanguage";

import { FaGithub  } from "react-icons/fa";
import { FaArrowTurnUp } from "react-icons/fa6";
import { RiLinkedinFill } from "react-icons/ri";

export const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer className="Footer">
            <div className="Footer-name">
                <h3>Javi Cerezo - {t.footer}</h3>
            </div>
            <ul className="Footer-ul">
                <li className="Footer-li"><a href="https://github.com/javicerezo" target='_blank'><FaGithub color='#fff'/></a></li>
                <li className="Footer-li"><a href="https://www.linkedin.com/in/javicerezo/" target='_blank'><RiLinkedinFill color='#fff'/></a></li>
                <li className="Footer-li"><a href="#Hero"><FaArrowTurnUp color='#fff'/></a></li>
            </ul>
        </footer>
    );
}