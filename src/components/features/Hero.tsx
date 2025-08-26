import { useLanguage } from '../../utils/hooks/useLanguage';

import { Icon } from '../ui/Icon/Icon';

import { FaGithub  } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";

export const Hero = () => {
    const { t } = useLanguage();

    return (
        <section className='Hero' id='Top'>
            <div className="Hero-container">
                <div className='Hero-up'>
                    <h3 className='Hero-h3'>{t.hero_hello}</h3>
                    <h1 className='Hero-h1'>{t.hero_h1}</h1>
                    <div className="Hero-divH2">
                        <h2 className='Hero-h2'>{t.hero_h2_1}</h2> 
                        <h2 className='Hero-h2'>{t.hero_h2_2}</h2> 
                        <h2 className='Hero-h2'>{t.hero_h2_3}</h2>
                    </div>
                    <ul className="Hero-ul">
                        <Icon language="java" />
                        <Icon language="kotlin" />
                        <Icon language="react-native" />
                        <Icon language="scss" />
                        <Icon language="tailwind" />
                        <Icon language="astro" />
                        <Icon language="javascript" />
                        <Icon language="typescript" />
                        <Icon language="react" />
                        <Icon language="node" />
                        <Icon language="firebase" />
                        <Icon language="mysql" />
                        <Icon language="postgresql" />
                    </ul>
                </div>
                <div className='Hero-down'>
                    <div className="Hero-avatar">
                        <img className="Hero-img" src="/assets/imgs/programer_transp.svg" alt="svg avatar" />
                    </div>
                    <li className="Hero-li Hero-iconSocials Hero-iconSocials--first"><a href="https://github.com/javicerezo" target='_blank'><FaGithub style={{color:"var(--color-blanco)"}} /></a></li>
                    <li className="Hero-li Hero-iconSocials"><a href="https://www.linkedin.com/in/javicerezo/" target='_blank'><RiLinkedinFill color='#0973a8'/></a></li>
                </div>
            </div>
        </section>
    );
}