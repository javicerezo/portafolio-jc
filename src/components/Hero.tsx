import { useLanguage } from '../utils/context/useLanguage';

import { SiHtml5, SiCss3, SiSass, SiJavascript, SiTypescript,
         SiReact, SiVite, SiNodedotjs, SiPostgresql, SiFirebase, SiAndroidstudio,
         SiKotlin } from 'react-icons/si';
import { FaJava, FaGithub, FaLink  } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";

export const Hero = () => {
    const { t } = useLanguage();

    return (
        <section className='Hero' id='Hero'>
            <div className="Hero-container">
                <div className='Hero-up'>
                    <h1 className='Hero-h1'>Javi Cerezo</h1>
                    <div className="Hero-div">
                        <h2 className='Hero-h2 Hero-h2--first'>{t.developer}:</h2> 
                        <div className='Hero-props'>
                            <h2 className='Hero-h2 Hero-h2--second'>prop1: {t.prop1}</h2> 
                            <h2 className='Hero-h2 Hero-h2--last'>prop2: {t.prop2}</h2>
                        </div>
                    </div>
                    <ul className="Hero-ul">
                        <li className="Hero-li"><SiHtml5 color='#E34F26'/></li>
                        <li className="Hero-li"><SiCss3 color='#663399'/></li>
                        <li className="Hero-li"><SiSass color='#CC6699'/></li>
                        <li className="Hero-li"><SiJavascript color='#F7DF1E'/></li>
                        <li className="Hero-li"><SiTypescript color='#3178C6'/></li>
                        <li className="Hero-li"><SiReact color='#61DAFB'/></li>
                        <li className="Hero-li"><SiVite color='#646CFF'/></li>
                        <li className="Hero-li"><SiNodedotjs color='#5FA04E'/></li>
                        <li className="Hero-li"><FaJava color='#E34F26'/></li>
                        <li className="Hero-li"><SiKotlin color='#7F52FF'/></li>
                        <li className="Hero-li"><SiAndroidstudio color='#3DDC84'/></li>
                        <li className="Hero-li"><SiPostgresql color='#4169E1'/></li>
                        <li className="Hero-li"><SiFirebase color='#DD2C00'/></li>
                    </ul>
                </div>
                <div className='Hero-down'>
                    <div className="Hero-avatar">
                        <img className="Hero-img" src="/imgs/programer_transp.svg" alt="svg avatar" />
                    </div>
                    <li className="Hero-li Hero-iconSocials Hero-iconSocials--first"><a href="https://github.com/javicerezo" target='_blank'><FaGithub color='#181717'/></a></li>
                    <li className="Hero-li Hero-iconSocials Hero-iconSocials--second"><a href="https://www.linkedin.com/in/javicerezo/" target='_blank'><RiLinkedinFill color='#0973a8'/></a></li>
                    <li className="Hero-li Hero-iconSocials Hero-iconSocials--last"><a href="https://javicerezo.netlify.app/" target='_blank'><FaLink color='#FFD800'/></a></li>
                    <ul className="Hero-socials">
                    </ul>
                </div>
            </div>
        </section>
    );
}